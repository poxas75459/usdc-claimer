/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "W3yArXCN4rPu3Kg51vmVhpdJPysz8kHd19ZGhefG5XX5z5oc3jjxbqfQvg7uYq8dCPENioGQCJAAPyMBaqF6U99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KW2Rdg4vmF9mboZFgfU3gJ1xjTsq2HUcNQETfkDad9rbfNXBrygMaVPS2hqQ7h8XPMHkYLBUwGWksfdjnJogyhe",
  "key1": "isEay3XPetGWgojMFx6y5wvVySF5EuyckN4V55evJN147KrGpCSRdpngQMo755yA2tYHzQiFCCb5yM9wSdHDQbt",
  "key2": "jKDepigN7zmE6YzGwCfFVcXzYkpEKS61c71J7TnfimZCKVMwQYUKyYMm8j4QkUGf57rmmJCVbkkb1ZwVzLedyWx",
  "key3": "2scWWnaY1agwZA97XfW2swbLnoYqdeHfdeabuMwf5NpjyqZ6cSmAF3FoLuUXLEa1UoVoy2a6eGGgwuxoXSUhZCQi",
  "key4": "47xLb4PdzDQd671vVmTXY6EitpmHMp2pmZ7SqT4gCdgBzSrm9KNbVwLy3WeHSNVGKonYEifmQE1wK1D15jkJKvVA",
  "key5": "5JEayQHfdoYdbD8wMJq2q15jrjtZEvTkuvbxw5oZJCkbspFjb6ASXjexRfhPiwKZZ1owcx6F272bq1xgbod8Gxv4",
  "key6": "3sEtZM4rf1EdhoUJbjKLUXpUPdPKMhRsD7JEGRDf2hthShJvT6rQwqNvb6CSBynXDu8pAJiRPBKt5h5wGaa3edio",
  "key7": "4ft31yZ4zv4gv4aoaHBDSxX41xMm5pSsVqraWYXvxgCmiXXwJdhSSpkAWEmTJFDWGFFh5xwC64ZgjxbkHBR75YGo",
  "key8": "2eRkVBtSep2FdGDcokcNYD1UZKf5DvCeZWphaP2juVe4xpb73H2UHXWMWiVB9xF5mt2MZzRoEWJhPH6h5biTAunJ",
  "key9": "3XD9HEdAHTrB5MLC875JXzzQ7BxUeeJUcp2y7DUbGBYQTMsHPTfcbNezoMFByN8gopwGUPBbdN2799sUNfe2unvG",
  "key10": "4ZPmuz9QaVUyXwohg1BdESZrnq6Ad6LVcpoYMX2uYCZLPPoFJV4uP3R64XGVtZ9bhN1v8fTRwFv7aNV8gCPAWPEV",
  "key11": "26RQgGZG4yaoks7kLWwscXzBAwdVsmA42DPDa2KWg8FwHcv683sKswYPnmKY2qwFgv1UBNAzbvqBW2hDag2CR5do",
  "key12": "37WCGC36KpjE6PETfH1nEAG3fszXxn2KSc2XeH65ymQwNYWqDBPwn2zMahK2Yz8UWpeTHJmF4HpamxeaVwiEbL7v",
  "key13": "2RSztVjF8DGZQuWNHpxCijXkPzhxXDZcVXUZWfbmF8n5LNBhcxQ3oHY3e5dke4aYmXQufVobLZA5rAHy6BU7hQ5Q",
  "key14": "5vEUBvKbyMqvtKLXthho8yk1xxCDd8qcxBMNeUpBiacrN3PvZgGpCj1tFrcQ7X28XxsxpL29T61BDR3JAdSX8gZa",
  "key15": "5HyKitYmyEr9qM71xUti1arteXnB3JXtYc2bW64e8sCKBAuGPE3JspWMM5QqxxMty5LmAeXxYKVcVo5Ft1xrN3nV",
  "key16": "5Qa81q94Nv3hLWeTwGpDMp4Er1tQGy2cryW85TfnoCiBJyYSnhu6nKYbkDckyZNGhj2fdKsLn7LNKp3MZMMJU2co",
  "key17": "54veyXypPwHGeFnat2mNJxm7gVKTjN3rBnroM13szK56HWCxQZ3AkiGPADkgaqjLhw5hcVR1axhiDa4pYcbpw12",
  "key18": "2PFrBTHDUALY7k5nAMZR3raE7LRK1yPFcYrYWxfWuDiniGeZvi7sFrbrjrz1zbatgXsNNMtbECqb8jyEdu1JXMTU",
  "key19": "45Eu3Z4BjyVuYo74DSNZejPhA3PQR48VtHjEtSXjTo1tvcCSQhGzydFSfLxQbqScFvnxPVx3xxiyhVko87bgDHnv",
  "key20": "x2BJG3qtwQFuFiFEaqovDrfBaQyML1N7CVZUBDuo1jHf44mGhcse4Ca5Z1Ur7Y3WFsVHKuRNSDBFvuLPm2FgwZu",
  "key21": "3ABYMpEL5TvzXcJ2paJFNaenCmqSSsFJFyJKPHRotfstYwguvXb5pZFqe2zjLDjouD4J3E1tJuxRTepdhowtzTfy",
  "key22": "3616KyfkJsczDbwbBTrGKJgnMDQgomLisQDBr8QA8dtWT7Pd43XdMbFfNEvafjdReBYewShyubgGvKCgtrxhns8S",
  "key23": "5UXY3oeEGegu5N8uKpU5DAwe1pLWrTM9EKqqw1tzerC3ATadH1SqMq2RHtsbD61xtxzFkdeqmjkiKHKvBPCiquCn",
  "key24": "4H5CGsbojXfA8kkPV16MvN9Sxkr8Xp6Q2ckjkm28HLwBAjwcsNCQnkWU6h2Zv7xtrLKi9K1NNWHudVSkigay69LY",
  "key25": "tPY9N86xiyti4LC5ht9iL1KR11V14C5WTXbjtnejwDaAb8TJiiHDNgcPdxXUziutSpsNFHVR9HeYi7gBpBcGs9L"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
