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
    "4uvaKXaxcHrCTDgSBzU5exyAz3kVAbyquMXnmXbCLwNHJb1eAwfB9auiqfKLgFd6dhjnZQWVuJqQmMp47HUVxSjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foXwSVHzp9zngpdRwn8FdG4UTWsGGa4HX42dQdxydUkFTj2h8z9PoHSky8yA6jSzf9Q1nTa12Czgk2DLbA8LFa6",
  "key1": "kVMnvCDq9qkjiBHUnsGBic5mUrsJpSwxJwifM8beQG8DepRHrc6chbiUryEvxx2wgHxQSungDegtGeRSBUp7FhJ",
  "key2": "3dCx55ugt6adQhANrFs4aHbV9AMR7EHanDsKBh77pJcYgk7LTPcmr5rma3zC5LpNZozM4cF3kcaf2xoS1XtUQvb6",
  "key3": "42TsWp5dQH7HpBsq28fdEHLgttEenZcq9rwzfZ1daMRDHUJk61tvHgSJN5cfb6sKaWvaYYgqhwq9heKWUU3WXZwn",
  "key4": "2YdbPvjECg5CykkGYBurRbXWMBm1kHeSmtKtiaQfQSKRBmmx2u9TBbB7vPgQeJrVACGJgCMH5jVSNyhiBXcRR8LG",
  "key5": "3Nqz8XuEf5TVWVZCeDjwxqYSq1pzdkjrJik5eMiFpmZjQqqXchjrvLqkfwWqndRfcNjcHDKUHKhs2KkLH2dp1x17",
  "key6": "5HdWmG5Eur5UeAE9edvhM14gf4j3yqCvh7twRTa7MgmtfVn77KQo4oWAQuxLGGLtDeNNoZvXm8L2p8BUXFCn9vtR",
  "key7": "5FfzQJ622s6zS9UzLKS6nENsRao3EJjNkpHUMwaU5M9xiXd29m94GjKMWHa14GuWbK5xkVgBVuozE6DhfH1Jv74B",
  "key8": "3E22qEV61x1kggq2YxNTBddgrU4yMeX5ozv7hkWxA5mKpge3rBM45kHMwVSrFaGmf4dU5EFziuGaWe8ypMYfbDvL",
  "key9": "5JgKUmrQ6bpLZkipBsbaCY2pedVQ193FXq3NfH5sJhsBCY4EDuXVh3nARKuT9zTZWQLHXeiF1DjhqS2P6w77VSHr",
  "key10": "4Eb2gYAw7xywaF8csb4LF5S1tGsHytJw4zbGfPZYbiXJdTGSx5dDds81xWH1GKSDHh755Q5sDXnGefnzThU7UXTf",
  "key11": "3g4ME2EaH6jgeai3fy53rtoBchinBcNsebPHtxgERgcx2nSNYYpTP4Cmp5rWnFuATjJjsK3qnpfGWfVxHFN9dsBP",
  "key12": "3EjahRJBU3qJWKnQccKnbuKGJoZf1AoHbiEFsRMrYhFfxwLHP59kwQsp15n23Bw9JM6DEmBL2xJgh4njMZYm44dK",
  "key13": "3EYhtvRrEfo2QURPN6F28Xr2ywgVwciRR8KUS79V8htBbKKByLZzwS4VRx1QnU5j3b7agWynZVpdfuc6MdAfqm3R",
  "key14": "3t2XbXY7Yx2rFoXZzL52o97quiGcLH9Du9HSBVxPcW3YQpsWFdbW3sZdmjd2dyqqTzAuTRcui5UmozzG2dWDPZKq",
  "key15": "5Ja1w9rMSGfRUKYf6ZC2zTuUwCnLNgNgSSfmrYy2Goe766Mk1C8C8uU33ZZzqArk8zk9kMdh1UG1xBfgXNJBTPxg",
  "key16": "2qnVqxL1RnZGg54h2fTcYHuBDaYkm8a5vVJmbUd3iSWhaEJtcf7YddhsszCmJ1kkZ69mhsyXirMPVz8FNbhCZMUQ",
  "key17": "2Th4eujTivgtiD6xf3dCpL3bya85PZbakoyqeA4rr35xGwLGtMDubgCCK6RAhnHcSeudb2qMqAzJ8t5ezQQjB4T7",
  "key18": "66WJz5bJD2nGtxjEwCjRUxVkBSnoMDAq7RcfG9bvsfgTNEMu9HtNrrifHtuiU1B1crfpbaj4wfDqme2uzpAK8LyG",
  "key19": "2hLBdWuhUZMZo4NrFvSTuMHk6nAfwo3Rc5Qgtag5qSPonWbR4hwfDAaHaWgbgRAkbBvEDG5HF6WLZbLvEfdsoZTf",
  "key20": "3iAKuEmeDS3xHvw3eL1SC5Jn7RG5QRLXnXHuZNovyRubqz8QAa3tX44JgjemQFWc4aWKoraVk7VkjfXePMLjTaf2",
  "key21": "2egySwDM5ESh6zKMorSUumZCnLkFt4RMv42Gk7bkzHkgFYKBYw5gMsVMPqA68rgv3UWcLQf3ERZYZvt2hWzN6f8d",
  "key22": "4aAL4syE3NXD2v1TkSiwfZRq24xK4XddLJhNVZcZSjTxAoscgWa4VRQLZztAGFLB3rTMjq8ttg7HCFH8McCD7kyG",
  "key23": "5mHBAwbuc2kYCTQDKHdUCs13hC3csGkGqDvG8oUc6YDbMsneTAZdFivctFsho8Ka1nVURY7m5fSTebarddnsjQ8x",
  "key24": "7T7SKgY4sfCLcqocqaeqi1NHzFHWGG9fbxiBEpFjPRemwTYcF5mGQMDTjH8KgvuFaAqzGGy2XcnJSGoYfRcaFrH",
  "key25": "3QubLRzSovtLL5xTFvjKci7FCQDduph5vYqwwbuGKiQBgCY227yrTQsStsoevgx16Z97cDUP9hoSFBUC7oVzeo2Q",
  "key26": "4PFYMEg15KJC7tpf4B8Hb8KkX3Zv7cjV8EfLRsKLQf6TTUowKHZmjF1K6oJAvFML1mWSaTmS4sha76sW9hhUBd7U",
  "key27": "Ja3tL3phBbVo1GKGXpkzGN62v3JUq7M2yFGKaEp55xXM3fZtfsBTxfkozRx1CXPsF54dvkjs47PX2trEhtum3uW",
  "key28": "335iy9hFSzNGVoq6uKkhGiHH14HhVUmA3oSBtuuxygbvSNyfawqRF9XKakwhknyaYzTnBit1V4CZW688DMbZj2qa",
  "key29": "fknh4N3w63aeoHzSxZyCrw2rUifZ6T3mjUTu57tNQPbVe63RwsrbL1EABpmiNokR3GgLTtk9qK7VDoj7qZ5pFhD",
  "key30": "JmQetScDw2DmLx9aqWdqPyRpi1AaWYFRNCKoygwSmdWkbZpca8i5koHmkMrd2wUF1SNxujF3LiJ4fpa87P9qXUa",
  "key31": "3Prw52exMuNcGDywXGueVizNF3pFFKa5qH8GKnuCDvevyCQcnEQfvN9TBoCus1c6tzCuYzDViPVydxPK8BnCAWXm",
  "key32": "5k6EEtaukDudWxCvhkpgpDiMACQfsvNgU4v91jBjy75KTcVsiRczg9v4KrASR5P52AdQN3d9HU8eYNj6ZvADjQJR",
  "key33": "2zcLQrCs92ndobSDxvnbf7nHrFt7RZFEAc232PNnZDHJNLmmTz56JLzC1nizg8uCZEKDJP6RR8gcgmgaqMvgxFzd",
  "key34": "3tgNjs1zFYA3YK1hdJVBcogUYccPiiQARkaruecF66YLsveyLnicosfSmJ3u8zMJzvs2WLNR6vYU2y7aZBbyoqK2"
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
