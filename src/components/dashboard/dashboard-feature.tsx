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
    "YsSdLxRt8VHnUtLyfToV9eKDsdu1ZGH98LLyQdYtC5eAHkxXxeWX22eYBPvXbx9zzL2wEq8iH3ztKXPX98yJqxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZ5ff6AAr1uE3ykS6DgqVVrXjbxWKFCoMwa7A9caHnycsbZf3dbdbbEDcxPd7JuSJXiedGavoVobGzzEkP8WSGM",
  "key1": "5SeEun6PAqBDvTWcfQnpsJkKVq9qBiSzFs7LWMsSjQZ7mfF3WCHfAdyKa7cbyRZvUXsp26npoMSQNEhHarQmkwR",
  "key2": "31kYW63LP1d1K6gMxPtnU3ATZxTRPMcaPDoZKcPwNMhPeYrF8aw34xDyVjjqFkmfBpiiwR1n6kdA4KaxRDDs5qKN",
  "key3": "5JrJ6aBrfV9cm3D5gvnWAJFypC8zY7FZmrv3Z3aTXWzzXdiKmsfTuuk6672UwRA7pt3LxFcxJnzWwgNgdgPZWo5j",
  "key4": "z2xNfdtEmqNXoyfEfGLh56nNBGfYaUs63JbDEncD4NffxP2SsGzFbHm8b9516Anj39pAV2zZUZyZ1JK7RJ7kP4d",
  "key5": "4UR7ZDG1E2zvjXoT98psKs4mfev1ZZbrPXW4CP5XthZUZxBw9MF6M5gtsXwFzG9oR1M1r7C89zg29EK21Wz9Pmt4",
  "key6": "M2nVTB3tABro4gLQkD6vVZ7wAmYqgp5nuXioVHWNFCPwug1yVZzEmhFaWhQJScaUU21YWcrsBVsaixaShogCQPV",
  "key7": "3LoMZj8bjHv1WJ3647t6NNP6arA6gneLeJxBhtWVxTE6HzDz76NSrzEMZLkrTp1TwspwPnGEniGaVz4hBgFsMxcw",
  "key8": "A7Zqd57XsBH3tqBdjfHLxcUBteETD9EHnbxs1Foxii8jeUzDqEnGDSyDR1NjBREbAk9ydpjWAoK6FqyGp47NtUq",
  "key9": "4EAuRTGKgZL6L4MKwTD3kmvzWsnbM4uCjYv9kYkiUtrcRfJsrFWH2V8ehEPkfjpoUmbUoumKP7xw9Jt5ccKgyqTZ",
  "key10": "h2UpFQdAsu8N6ouzymuY3A5R1M5EbsMNzPGh2xLPx5bJrF4a37pHK3LsuogTWtvcyQpasHNSW275DgawTnAXz9b",
  "key11": "3EegyFWZ896EzrA9CdyxTv3P4TtCyqYXxofTP4vj3wwVoc69bX3ogRCZUccBkWoU8gDJAxtobYRq5fAWqyXpDW2n",
  "key12": "39vQm4R1SKD2NM3qEwwSeqxVQ7QWFsfEgkfHwjv31yNUgQbWNV1RT3Qq5zdJFishToWHXVr7fhs4VRXunpNfjLwy",
  "key13": "2kvwR4cPLD3ge6oTxaA4SVWfHxhK32uwbvECmugnrDpySEGUD1uLvGysjw5Q6a3qK5ZuocB38kgbSeQuhoWzPwno",
  "key14": "3CmdA6vhKp1DmPUBhgUgnUt6wJN3UprhNT5u6cgAjfT2QGkHTKehz1ffWF69PoMLd8rzYzruYVRNtucSK9LhLhu6",
  "key15": "4na2J9ECMkyjHCGqjhvM8soVeXQfnog6mUGMajdYq49FNxbXQL6dCFwdHnjrGAa8jm722vTrPux4azn9ZdRmPWcW",
  "key16": "4wjPCaWL4kkfDHjtsXdwaBHXfh3mfLc1GhnJAeqTDndDBPYiQHrsbVPYypNjXFZJz6znmF3uBBAigRQFcPRHvyvn",
  "key17": "KEKnjEmMAsN7TEM8nJQzJrZrN5wZ1SqqUqNMb3UY7CxijEa1Vi3EqWvGe45spA4R6aY46Hgt4o14j87iKjePT78",
  "key18": "ozXNXWiwfy5QhDnSdci21WbH6jKjWuec43cRCmkSqesmq5SDX2H7iia5Jw9YnSW8e926boRmjLNy9pYybXA4rQe",
  "key19": "2EjhN6wEZfM8FmZR3apJJVhoC75kzpfpYLP4jb7cnHTaBn28BnApzuUjeHDRamAFsUqBmVxT82zfNPvhVyW3fCDf",
  "key20": "4eArHf5bdHEpMt8YQRtWX18wGAq5mENr6g5Ler3QYVDxyrGupUvMpiCaN5w2az8W4pxSkUVGfdjXnRPQjm6HTevL",
  "key21": "21G4jMxFBf5LEQdQwhhwDenTRGijLRaGPs9PjdUnchw5Tui45habJ7xHp9j45tsL2TjK2QZpTx9PhtMfzMzEePX7",
  "key22": "2GCkRRWB4n5cNHozLzLR8b9H8YQvMnRhLwfifw8DzBXGAJeeWUT4iy1UcRSVrAbLce54MbuKuPq5sNt23hbegEti",
  "key23": "36wLxAqr36uy9hNfW6bQ1JmTYeCAZEnUMi5ouBsNvFbJuiE6542b2AZPCqtTGzNXzd3x5f69Ho4JJCJSqBjugTjF",
  "key24": "41rfERcUkUeyN7htiLVkwcGZJfriHNBdvWFqqDuNFpysAe79JG2XEK6FBSdDQujPYHPajf7oFWNs91JMypZ19nxS",
  "key25": "2snduma5qApJKrDRiFQQyYw5t45QWoT6YvLsFbnPBVHBsED49NgM9429Lo6W2RCiSTB9U5QNiGneHhvDdUs7mFzB",
  "key26": "56UhXqParnmyjqLU6C2YFkjP81NfgZEuackLzL5KnApyL9uaP6Zt7v29caXGmrRxGZSPtCKwvshJgZU1UCkojHSA"
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
