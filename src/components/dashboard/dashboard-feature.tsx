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
    "31AhtCPCB27rhU8nGyC99uHtsaE2URaCDtwJsL3DDWcPfENJsg1k5gLnMs2gtQs26Thxgt1NokJx3hPoyKuEJ1PX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MjjFg85uYD7tjPXD6aHWGGNww9XLK5fJ9E4zRWgMGDMfjNdBQf17tdPGaZuwfXHkT5ReNoEayv5XjeG1ANa5MbJ",
  "key1": "96Kfo5gbiaEuejPDH9maph5eyZ6cwrRJcWU4NwusrH3Uo1pRNQu1ZqPADxzUmdDpK2wncrohishjjUU3kqfhSpR",
  "key2": "5BxpFvp2anMEwqmRfAsfZBCmq8SYYXrGe6ekrfDxMd1xQsQjvMFNABFdpRAPVJ7UttSAmdGC68W8i1M3EdKdTb69",
  "key3": "4hGe1WUXVxtuYTD25qbxHevUz7Hsajg3oFgVsBGPYZfHLsahEMypM8LtxqxhHCqxMyxZV1QY6gRXHQmQQFR5A1BK",
  "key4": "5EEGPU7gQk9PoKQWxS3su4VQy3acSBw8JQa6PfJ8RcKCNQoVp9oSx8y5yjVq2X2RStLrASuVCYe6dDWJr3psueos",
  "key5": "4c6axpaiJCaXjimo1kSBgukJUJj4X3SjKQ4Veo3U6PBrdbp6Rbe9GPTsrJuf3eqnCMQ4XDnSoxC4ssoRh5ACeyu1",
  "key6": "3dDmDt4t4xirgEdXrRC7WJbVG9rTm7HYgH7QjpkxUhWJbwaKHtxL6iraCQFp5xfJ9AjDZ92F6P53CafkY5ed2nCj",
  "key7": "5tVHSa7LhXEASnzi2SxbJiJ6P1S4twAGUZqiqmMEg9m6cLRZQcSefHF6uJ9jHotS7qGbBaFACbPggff75UgBK7C4",
  "key8": "5j1KVz1nat3Zpj1xx2zMYHNa28GXwUeuACqXDmTYRBQjjBqfrfGaM5VVxGw22HtUnwTrEVCXw4UzEPgeCqn1SHtu",
  "key9": "36Dc86HHWPoYi942Wc6DzMRKGibroPEorESUGY3Bq1tTUNxfqcJZGxmqk5mvGZPNLb2Kv9Yp1sT5ZioaJJbWGLLC",
  "key10": "5z7RRjYRMMYiyCWYWthD6P2D64GzdVos2HGwB2sQenDZrAzmc4PS4wSHYQKxoCftjUAw6GGRumWMyaVb1wFECTTf",
  "key11": "37zXb8xcTYXcYHFHt7D9G979BUPZM9g2abuwVXjUAynm6HfHRgcfjdhsjdEhQf62KYHBfDdHwxGLnawntVbkoqot",
  "key12": "33jNzFHQsPvihCjbo69yiYGHLeE7riGQ4bTkuaBnawgvsFcThi3DRFH5de3Fk8BBJcAVrdWXah7PpAgMevJzvn8n",
  "key13": "2HeYa1hRSoUTpysM15kpVmNJXRzhX5rUtim4ewXBEBsMqcidaH2zS8LSn77EhVtTx8Cx8Ba48fjvDHHxsQB7awzv",
  "key14": "2FBicAnjdW1Vh5eK6zxVj3UFB1cm6KZYNewCEymMrpMdzsWFZbaEQyh6aXKjM8d8EMWTMpEyW3XTFZqWfQPbu1xJ",
  "key15": "4QodDmwLYUtMrffHK8Nc2RLnziXk3ZpS2wfhCdQYtEp3iPDCTubXTfRvWCitC7HLzxtFxweSWQSh3L3hndt79zPa",
  "key16": "eDukxzHogQfkjSB7uMbWZKnCw47eEEMLTDg71FKGNPmSJ6ABaEkLMNEtStDi1LoXBWgpfazJSE7CLCpsn4MVVVx",
  "key17": "WDLN92fwHftr3m9Mb2xjP2CPdRiivqZwoC3zdHk6Z5H4FG384i7VrkDhYQv9oeWiQnmTWheT4NQpFUd5R7oQcS4",
  "key18": "5qnCQicfZGEGqurfKCncymfnVxwrsu4EAfcAi4m8eDVFW1PtQABDHDJKamcWRHhZHjN8jQfpwLx89zqp3iKUgQyd",
  "key19": "21jDJGtLx3UwuZz9m7WcePxJcxTp5Yod63GveZ6wJM82SS1BrL5MUY133kSBgB9GXexJkAWTwQBpJ1W5egqhNZ6x",
  "key20": "4Y5mN2isuj5vD2kwBuNX2qg8k2Mjx9jv3hdYng3v6So9Sov6mgQ6wf5KvD3sRQaWkTnmimxfQsfr1aERbpgYWP5N",
  "key21": "2m7xp6AZMBpFQosNzusMPEQqgvphK7RNbustNS7RNgcy6sykqsuz2ShrNcifYGCMCL7QoCXSLhqofafUnjxVo8cy",
  "key22": "4pyNX415u2vTEGZXCaK4rKEQ38CTtpwwNGg8HF5emBg1tnXNQhV1MkaWamuvihisCjrw5iYLfVr26SdLaoR9nwV6",
  "key23": "7XLJnmwFEhExjrWapuPtz1bbWo9h9Ef2kSXiaccL7vSodeJ4GBCt6HjF2WiBAoU4hJoaPiE6C4niRwLHH71FnRd",
  "key24": "4w28v6TQKFCMdKUow3GXauB7MfQg5AypP6ESQh3ZLxBMpxpxGBsA2VDDBEsuyEmUvgdsBcsM7KC4JopkKdsXouz1",
  "key25": "39Z3eEYrrXNsTFCQBKBWahzCiMdeNB9jq8ToNHtQUXPnXZP1kUK3EQEA5FvimfLpebe9kH3UdnsuEpuMexpmKZN2",
  "key26": "2xHcVmuP49a1gZXkv68DsaW6a2TQVfVZXhcXMyzpqQMa2DxtbQmNx3n7Mu6QEDXutsQdg8CqFzpuLUmVABRHw7yZ",
  "key27": "4kzJtSVpgRCjKA6aurmLrDr1yJBct8z8A2e8aZWyyYenWAby8uKWaYh7LT9jmfBhga1AWhyc1VRF5oyNKcLKJz5q",
  "key28": "D3wwhoEqHE7hhzWjqp3kQ9FcC8eyyoLZTpxJdNDN1ZEcKW2h5kcXQtdSsufqBUdkFviw9Z4BCkzgXQNX5HSQSFG"
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
