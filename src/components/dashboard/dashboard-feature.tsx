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
    "4VvY3sMxhLnYJXjjw3j6ZsrpFihFYttArL1L93wsmQ9tFm5AX319XMsTUcj6K8KLuEMwhuQ63eRCgGWAdjfdFPPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJdUfHAhfEFzV2bM2hYsQgrDM1GS29oi6AibFsMXTnrQS1PM5wksCuvP96UaAv2dcPJkSihNmX99V1Wc82RW5vH",
  "key1": "5e4QvG8FLXRvH7LXHkvpxbwxLAnXeABFKxZ973B7Uwzyg3qD1WJfPP64LJfV9d3szm9wziJ5TjGGWTQs4hb1L7U9",
  "key2": "2GgLPD6YvXsFA54wyY1ow436JAANFhSGMYjFantREXGXBtNVGLnBiUjFmRynAAWT2kWXXVdgCas45CwPgACvnKJi",
  "key3": "56utM69xzPNCejYP4GazfTYSjC6kn6JUFMpmvf72BuXPDzMrvfp7b8CzmXo7v5FZ4Qds6oDR4dumRj5WZxAjtFWQ",
  "key4": "4zk8GRbEM5J5J1WrH4rJGxwJArVc5PbnM6XH8qa9JeC4x4sR1nDobkinX9hrmgWag2EdTKTbNNXiyv3xAcVGpnE4",
  "key5": "C4vPDStyT2uqaXkWKa8QpxYGJckBtqaxYH89628nKox3duobnNCQ2GhZA5jvbyHiT2a77kcDBK46kRmBqcC2mzr",
  "key6": "27RwHTVaRH2KvhPtQGfYTWXZSEBC9EFM5efJBqBvQs7SqsW7Fn4n29HHgCPwRhKiiCCLdzs4ZvRM9mYWNvmZHdr6",
  "key7": "2LxsnRvCEWKucd9JZByxQZ7tnjD9tnt2bXDuAyWx3ZeDyLGXawdH7E3nhR9NCiPzenW4fuTmHsMtF3MhmmKQb62d",
  "key8": "5u1ebNyXb99FGcsKCNTwVoy2JCMWMhqrayyZxEHVANq2SB57aZpm8o2NProVeJNUN7vYFQHe8kW3S7JUnaQgcTk3",
  "key9": "4WpFgtJcpA9TLe62aa9qpjCxe93bM2Zxz8HugxhfC2XAokdzhhvcYH7SDZf85jsefJcLZgSR6RqUAPqiEzgtrs8B",
  "key10": "2ZRTyNFCW593Sf6iLvRXfWbn714zr3ixM4dPxqjjPCR9qfmd5aPgLivDWVdkx3c7vyfUFwfesWZFoZGwcmY2F21A",
  "key11": "2RtdYnCnMN7pNEKVfgDHgzXmfGAVE2QR5Fh9ggMfN2us2gPEyGAtZQHk6ZfTUaYLS1v2G51eZbpSzJaSBepRbDQy",
  "key12": "jStwC7gtkwAXpnKLFkWfN5iQdKvDDzRqJZ5a228rZGkTgd4kYjALsZASeHXdn5xzrnMXTT2z8WThMJerJkzjQgn",
  "key13": "2SXZ8vSJoNjPd5jWDHLSNFuaXpxKnJVV7SZzkSoubg6aY128dzLALWftU5unGVB3P1kMZgCvbndbyhBnReR2Nmi5",
  "key14": "33Z9UZ4GKBGerA2a68vPCrqS4nLtSTKWcp6ssYYoxR7tDMMP9NGrSPfCNZQBTWURhp7EChVLUfP6gwqHVCjKRkGR",
  "key15": "62NETdMUTivhuLrJ5Cde7mA4MrMvjgq9puPKnvbgykF1y98qbckL1tZgwcjC137UmFPAXRh4LKHnMGtjPrb2stWV",
  "key16": "4QgipoH92ULRix2PZgGbmtebsueoE6N3nBZod1qqpHiGfVe8Ty8UXmB1T5kiR362AiCgTdUoqqwQHDopZh1Ld1Cu",
  "key17": "3BJRxBVp3MdBbd43RUtU1H26ydN1teaquNdatgtLKxTA3iyzQCyQiPyeQm8NmQVXATs2nkZ6KK3kvcsfR1Vz32ek",
  "key18": "5boRfE7rePckHF86wuM7vfxdSkmn1MEyjHY2kqfqND6ZuwuUWqBaDuoSWTdP1F5aiTsWJmYrRhm9TxfAyFUgvthP",
  "key19": "5HDHqFtpSWU3P7L9RE7iumJHBHmekZxpyBUHJAHErDLzzQuT6tnUF176Fyv2wwmw7W3V8jXp1sehSej5iY8j3wm1",
  "key20": "DHYeGMXYATCVsGqmqDa6auzNsW86GN1qTntz3XBU2FtFZMDFJToN7aqVCGgLyuWLmJgwCska7PHDupcAsYcSDe5",
  "key21": "3ke9pgbRF6N3W1NhGMA6jn9LJmedfyQgymdgrkQUtzUvSPPgd2gqeuAF3yiLArjNrYKwgTeAfwjosfRocu475VmD",
  "key22": "DmmktQHg4fbtGMGD2pwPoyigmdjR4gnbGW8oQKFGzXxWe17hfsCGHUgBkc5wE9W46wGEsG4aRzzRDob8W4cGD7d",
  "key23": "29uNYLhupYfEvFYFSFXRvcGAdvWmmoSKyvdvAiBbxKAR343oKsX2iTBMHj2LAH4Vzp8yc74Nb4yyYnpNuhorVQfg",
  "key24": "2EXeFTt1LXFHANfM5osZx62fn9jS5BDUnxdJBWg6PkBtC88LuCBh6tbdAZx5m2WzBvVQRQpWb327cJKGzctHSW4g",
  "key25": "hjFWtDa7GHCgYq1vraZeKRqN5h33umC5uG7eTC4SsY8aercw8EQWoiftVjXwgaqi3oevZUwrrrn8QLYtzxzQqqD",
  "key26": "4s4AgiDWRksEXegQew5b9GJzgTu5ZSS8opGDfJgEVzfmZbipDvvqQHR9kkKQ2Le6VBM4afjx1Lr477S8E7VSQJzr",
  "key27": "4JTmrrbxFXiY4xvywCAjUpCo6uVLDzDrUocj18JCBMtTJesWQ6w5TvCCeYw6Nfs3e2RbA7HWyb4bhGs3LzEXAXxx",
  "key28": "4fQ5pMDEfZQeTdH9QYePT2EPg7mPKxE2VXcqhvRrZRVns6YFoSQWoUnMBpm1iZ4bo1vTgpagHDB4EtbLTx6TH7ST"
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
