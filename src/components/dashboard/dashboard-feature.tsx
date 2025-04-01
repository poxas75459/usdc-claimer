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
    "h3SAvBV1cygU7wtXSgLjz2P5KinZsMxahZkcSXrE14WYWj4oVsRgqSRfmZyQz8X6zYdvGoMT9oZuT6ZAUWpz6Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eZGmHzHucyZ1k9s8zoc8yMMcjuAz6e4HXtkdG4eneG7VESXMuNL9qV4kjwdC7nnAyWCVQv5Gq1hYbdmEDaYmXV",
  "key1": "46FEXbkxRzWNXje9iwpGWg4cLubjatjjBRoiM4vyFkf1wU2Sxvq2MYWXXonQ6KusvGxYrbSAjXEPj5s6odfi9n8i",
  "key2": "3BE7E7YFsjtx7aiBenNj7ZheQHEYFHaZSLxBvz7Mpn2dDzTt6sQYYYvbzxzgxoKhGGA24aAuN1sEYeurNrDi2ZCk",
  "key3": "4nBsW2cuPUY27fQVo7wFvLE48eBxEKbA1gT7BLRGaBAzcjNM84Eyo4bmnS5KoUzA7igYPafpdMGK4949nW6Jv4cD",
  "key4": "2cwVRs8x1DWkYnYaXeeCvSSgAgbV8rXmP7PJ1Pt1WYNw2srk5tEERVrLRwJSyfD1aHbYzqoydKsx7SMWKctKgwPw",
  "key5": "5xhgiHtsDE7HkAHtsZ9hdhQZJXfRhg4DmU8F4doBMscieFcVS6TKSAb3QyfwFdou1ptjB7PQ8DzonVNBGLm1eYyK",
  "key6": "3WTQZqWXy1QKcXBhCsDmiYzYVcTrW9WBxtf98MCx95E8XiJC59LKWS6XDC9wBVFqXDdmvCYPbte5UJzjyPqLwNnx",
  "key7": "4XmiZQSc9W2guRkiwySQU8BvUZ1Dw6qFWKuURDEB9GsfLKt8N4pXxcc7DvTahaL42aksgaU6dc2sxJ6VocWuCVNV",
  "key8": "3d8CZFMcny92CXZXgYBnKPbRADPqZRhVwAr4QcS8FTBff4ZwPLDvkUZVFd1ZzL5g43uh45Uk7owd52e7pGF9Qxrx",
  "key9": "4SdRgXjHARyAmiLpX27GNzmoRr2CZJFS4b1U443jAtJaAAH2BAiXgovZ9Lj5pnuWWwWEeErmbrEwveyepKi4ozar",
  "key10": "2vYg7UbdM4Hn7VN1katovs6aaNJ2BUqEf1kRHjHqt6dTnkTifN6AZyKDmKcEan9m3Ba3pR3gpY8DZ5rGYvmBpf6V",
  "key11": "4sK1YgPr9QPSTGu671XFuf2rQt2vi6Q9Gz7ntbDih645XG6C3drA7JBWbWL84v5nNRdbvUnesetct4n5mGx8fvbE",
  "key12": "5V3LRkn26gJxDygx2bHSP7upunkKTxWscDxDYopnVakmr8K8gsyfeLQmvubD5bFcRY72kiLb5qohwaSuXQUrytTD",
  "key13": "FUf4KywW6nijdNX3RPMeFq7GUPDD8U2SEKtfVDWpL4e7pwjb3T4tmRmhvyEy5H2B9ErfTdcmfqCxyDnDy79RDTK",
  "key14": "w4T6VQNB8Z5Hb4zfeiopixLRhPi2pFBrNnQAg5yyTLyDMHFLMJCRsfgmDpcNfvE64UfXCwh3NnPRVEpXkQ1GURG",
  "key15": "3WMhEcC6cosHgsH927gnb6fpLgP3b4SqZEbhBYDpxbyC9x9aZ8d44cAVSK1iyH1BSgUmnQTS5GCSQP6ZAepudXaE",
  "key16": "4zEvnJ4y44J895apGaZGgwoAT9ffAs2jVs3LZ7hYaXAbMev7dkKWNhWTCCVvEFpweXAZnSKvv9cBcEGJ1FCYnE1y",
  "key17": "5hVAojeygYg5QUTswvXoJ1LpvgxisWJ2cYDM9AqD3NCT37KhRaUyZNCtjNJCjTTbLWgmQfJS6H57bk4GVasQLk8k",
  "key18": "3SBeyRRhkK8ymS7rXpKir5yNpAnri2Xhr37JSU1KVEoiZHFvCgzq573prvaptXsPqPh4WGfeNxp11vM4hjvaw9oD",
  "key19": "5nFD7RWs5yUVf2827xGKpa1ayF4roZ7o44vRcU7Rg9fKninbvEgQbncaSVSJfGs2ezth8H8v56GW5bpFRv9G4amj",
  "key20": "5fGjbcidu1fu6BL52SnpkfXgrxA17xmCq5UPoYzkvgU9tqEd3onJVPWTEbiWEEHwRepNdfkTe556DVLKX7RAkHtJ",
  "key21": "49qC1h5S2t6py5Nqup4fiQw5y3XG21JxGG3wFgecvkARKNSQS5k1a9scSQSCq9aUbXmPMrPsAcVMNUBq9sVXeB8y",
  "key22": "5raNLGPbHNKaJ1ezxCfBs9DDgTG9PgqHwxrYjthXxJAQGedEifkWmdBPfkpHeCEXVzLDZax2eqLcoC84RNBLMzgf",
  "key23": "aWA64ACiNhoWmFRT7FXDSc1h6KEbwKTZhEoJUR9HBGrfBhBbqDwD5x1iLvLkna5ZvB581rTf2gW9ZAxsXKL2m4J",
  "key24": "xUBHNJsEP8D6h4hCL7tAmpdnnq3ZxRs83CLaLEXTrqdEg7WS9zZvA9ERcHVf3bjCbPkp4FZjNKTNrVoKLwqS1s1",
  "key25": "mgVcyAWGkKzu6REEeTuua7LM23rCMYbM9fRTdxeoTWHkydGUdw7wvgirKzs4bHUtoL3H2mDLJGzkm82pKSCRmJM",
  "key26": "4LZgw1wFatjHqv4T6Jg5NuzYpur5UtAUR84BLQVt9tRpcS1ZYY2MUA1PpVeCZ3iz1Vn37QSP1SvtXY5CgmaUNgJT"
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
