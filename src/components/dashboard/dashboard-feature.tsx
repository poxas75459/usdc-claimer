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
    "2eRkeiL2SPe6Q5rG754sYSwFik6d1HEdYjLoDAJaBp3S9Lyvt7WmhRDjjfveCXRgdEUpmEZdud4obZvQ6mPvujAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFkTKgmMwcP4k6HKF8fbAQLNfWMeVMfU4KLwcPmddL4MSyYUFp8qouVncoTLXMCp4rBkb7SGAfmLt9jGGEJ6HaH",
  "key1": "2MhcEsfB6u9pqfm1Go94ufS1QdJZp9Gp99WW1gm7q8caiopNVGjaSAF7z5DAbdu7ycCQWtMjfkdTLjcDdkFGTQPb",
  "key2": "2oKkRj2mvh9co5EHQCYXEAknPTStC7qk6HgXRkFgBPaEHzqdJbabQLNFhUdtpKXVjkF1ELZQjm45tqjZFj51Bmkg",
  "key3": "5fEkfSioDVNkVoNwgu9RXTVbiKFGzFRGy2ELk3CYr8mFBHAunCVKhChcJW4M4EovMDJWMtVp9AFrrAJsjF4CYMF3",
  "key4": "3LpjoX5yzu4d6uHrvWzaEgu4gPrCGYN17Jk3UjLn8b6FMEEhaawTTWu4jRXtVfdWDWFUo7pZJhNc1UYmh7JZX17R",
  "key5": "55zj7iAz7tjjJDqTX7siuXBJQSEKPSt1vUfTzujBHBygguhtRtzTCZtqN8hGPeGBEcjMHCJx9AF6JsaF3VFKgW9u",
  "key6": "5q2aCdGxr3wpddAHwpfwb9hwRksPEWYujmWtdBPzexJct5f7Zr7s9tNbqM67Lonpv9FrX8RsNQHUwJTRe1HSjors",
  "key7": "5Abjctgd5t2cmCafo7JJuefLNpinUtAi4ARBAn6vzGcMM4mw66PNFhNma3FFZaGx8eLpztYuCE7wkEGEf32CrBk4",
  "key8": "4Tf9denH71U3xMAphCqq1EwzkpUB8fZzrfiY2BjniCJJnCD2mBx9d7FJiyCDikHcjaQAL2hJ3jgJNikYg5p3zYAF",
  "key9": "HAk9XhxZ354d3cp273Rgy8Qt2kfc662ewE8ENYDsrdWXowo5wE91DHEuZfy2h4m2YkYTB5H15bbbgV6SpZSEe67",
  "key10": "5PXWsCA6dTD9A45aYy2FkvBsaMQ36T8ciyb168SP6tQE85dfsPgEyueJDZ4DqvPTQzgrMYhw912uXftpoNabkukR",
  "key11": "4cWcRkFb9SPWDJ2SEbsQGNDwsW3vJ5QGTeBFhmH9vTUiZBZ7G8frxFM97goiwp5ARcbUoAgVb8gDawBcoiaA1bLT",
  "key12": "2b9WHkEpiPxoucdARiM48ZD93cPajjDL3SHr8NgzrgS5pkjGz6aXV5kb6uxSaT7RgDEusCYSVJ2nrLXHx5QBi4Ao",
  "key13": "5M7XR8xwFoqje2kyQXVVPfeT1JBMsUKQFHk2ncgnWAJLDVgJhnjWZRKfjn19W5AGEHzYfzXMLZiBKjtoNJq2sSXJ",
  "key14": "3d1q2KstLqB4fQEMTBNJpyrQCZgrzoBTgC2SPYCBRvcpMrR4E4CT6Wsn9eEeQ8JHTGk94NpyxwJuiHJGuNwyADK4",
  "key15": "35gZVYLSBQXB4ShhTdEcAGS1PrinUxVNUtWcUMpPqULbR9BL9MDyPjM9LVL3F7cQBULFEpV7ZDbGek7LdjGe65ah",
  "key16": "2bcfhAcxW63UZsvp7B3gWP1cwmDAvYqv361ujYGQUyGBHAW7f6U6VUc23uFMQeoQ8w1WzjWqSNUeqCNeGKYBSjoc",
  "key17": "5rVKkua1szrg5xhfkiJwQNRS5LAs9dWDjAMNXFaEuZJXBgou6XrURdrFcxZHR7CNvjZjUJxhzEKJd9EMkPDA3BUW",
  "key18": "5QhHQaudUh2uKo1rxv6AfJSPPXvXTYpbe4Q6dsqCA4erVtCo27SN5b4mGZVNGpsaMjgeteavesVHuJrJGdRvyqtJ",
  "key19": "3DdtfezRnEyUkcCBfcUsbcaWRDdtkP3XZM31hgVywtgPZtwukBPmM8KLAf4t8G52dv4KsuTfLnGiz1RyRAkWovT1",
  "key20": "58wVc4BjH9sXozfvoRjDcALdrADxjDbfWSpk1e9FupUD4Kpene3e27fppS1vuhvxpcJ2sjqqQtafzXJCG8jczBJt",
  "key21": "4hHj4w7idtZXwXWAKBcB8gq5B9vSwH6tpCFCqrercLebatTxidpGH688D19kxs5c7YpDn35VruBhJSKdW9h5G4ED",
  "key22": "4eEsKB77j2N8NqubieAZstVpYE4aS1ZWyrtg73ZwFCq8avEZXVKtVRuoqFKcGE3W4KnhVEfctnEdLnuyaJViwX3L",
  "key23": "ZedpvWH9r34ccHp9azH2Y7FSMcp2bR2DSKb1W6rmmQ86QaB4UHTbcpEBuPy6pcPtfjQfRB3saBk2Pv7R1Km6tBf",
  "key24": "dYCH6NFE4hrC9xdxAQM29mdDzWFCHXLQ87dyHRYXn1JxW9BxxitNvkdHAw9AFxANtow5znD2ygGH2xGoJhWVhCj",
  "key25": "5R1SaTaEDiyegPykgpsAjtxtZU4MFFBoigD6fhLfxySTQCgE7xnT6BtKyiHEasM4o63sGas2amd8yZoVmoCi5Q9M",
  "key26": "2BzpqfqaMi6jBEutcire8dPJAH3fz4HinyymPyQuvCfV9FPnoAkneJPbzxqsb4sprwSJexbThkYU1iVjKLbXaA5W",
  "key27": "2CVtXxvJGw1SL6dfKVfqyxzpRTJ5mgWzBV7FjBWEhXPaP3sCQECA84MQmBRRxH3h5St6r9MN5xnhuvTExQmHTzqF",
  "key28": "4QFPEczKpVPHyQym5TGpdX5h852XYLPbXi47FaW1tYy6htBwVEXYvzePJEfPdox79Hdsykm7dbx7Q5tSp5fUoZKX",
  "key29": "3aQh23wiTFECYQBTergrZD6CCs1h8NVDw711FF2xtxMQjZ3aFFCD4zPcVSZTFU44H4eeE4Efv7pHwoPEKtj4htLE",
  "key30": "66nqXSMhfNQ44VgDKqdSqEVZL4MHMvH6DKYKwDsmReXB5buadVaZSQsfF1dtCqwMdskKq4j5bkbvtgoBoxyLHdBs",
  "key31": "4bxZSrxL2y6LbZ3MnHp7WrpmyFW9T1cMiv85REuLuAjWoMQCrucbgZNvDg4SnFBh7SVRccccwUfZp5iZ1sCJAPya",
  "key32": "7pMAQ5ZNgTNNKhUzAcbrXV6jCyw6UvdYvbor2N8ktJhRE4f1ZX84SU5i199rYVttPkVa7HqQJort7Xvpfoat2EG",
  "key33": "2nhFvGVTD3MG57kmN9AstisYMRPgvuBAJLuAxtw4dRdy6ePp6i7xr8diD7ch4qmaNqCVpm4ngdqubyrUBFqqiRfh",
  "key34": "2oiL3rq8wf3k2LieSzeD9ZsvBjMd2PcjZu2ky77njuLSiWn8gkyv2cKFRev3izVLWXZHq9t1HXDwP4hyPEMDPkfn",
  "key35": "4fDwoBdd4aq3Xd4in1Tqjj2wNJTmzo8i1K7JzCTm9kXeQfP4GkjCNDh6uC45F2TatRfBqUZFe1XDTdJofxUg2x8N",
  "key36": "tJ1Utcp7st2RXwWsCQRZ35sA8uimzJaa8Da7E2i3Qaa5oo7iL83K7sThTSrr8DYzX6uJGvp84qEECRKEoqkN6DF",
  "key37": "2ujcvJxhfP64dVsBpUQBJ1ZQLrf7FajGJdYedhXmRVoyu5scsR3i9sAeYrCqVqVLfJ9z8h4vpZv7PYbamvzheHf4",
  "key38": "5eewfHtPSn1guNv8aAcAj6WfZgHMyiMx2XzKVRLkjFYRJSGZWqXVUjSGvRXKHCiTcsRKqEjhyQyHRccdfrAnDG8s",
  "key39": "2wz6xiJTM5QF4d53Ppptu1hMS2dvdcj8Q5cKcTZ6YH47sJ5mSgHDyWVAtcshaJFJG7uViFbiRoAygetJjQk6fWat",
  "key40": "3k8TJ6L24FUZwMwyPvNtc2CHt88pjHaE6sGvK9XrZYxqYYJ2WaszVXxTjDBjKk4t7yPUKsJbvKzzc3voQqPCKHU2",
  "key41": "4oJzdTBMgdZw9yVzhhS1w1BJv9e6nDkd54TydvcqZa72BuYGpknReJNtH5EifoYAnNVBve25PSaGo7gmFv7Woy77",
  "key42": "5rBc8XBvBwnopJ9cRLZBXZ3FKt4Cmbai9H3EaXU9z3syqbFrdKA5bfzxY5EFrNNjqdgseEtHFqA4pPz1c7cNdYzQ",
  "key43": "32o7RMM4Ufz8XVdtpmwyqhhi3jHKbCQx6P1SHsC87TKBPuBbZ8SrykmK25L5JuFMLL7htSGigmRt589xPWSWJXQT",
  "key44": "5cBN4Cg7ibTskpYFaGwzPVm6cYR1Yco27NgPgtkkvtcfvB8HGcvRv6mLrrs9Da7Qz1AvADEkyeC9inQB6HK98bqF",
  "key45": "5ycFv8bxjm6e3Qd1E5LCtRDEb9oQzKEvVHYHRo1TQCL7HMLoGPD4fxktQLMAwvouXdz2hysh2dQAg9f4sL8jp52p",
  "key46": "5nvNdac2X3rtFXUhDVMtpnWtRM3VGvSb3EgBvYXHqE24VrLdfYfYUUm71b2QhsNZrM4JqscTadkkNf5wt8SovSv7",
  "key47": "4XfqhRzZESpk9z1JtpCj2xMPGSZe2X1NBjWU8Nt2tLoPS9NWWgCkXiC6ZLdq98QrET1BUAQg5Kig1iHrkq85nyM9",
  "key48": "57FTNUxqcBeDfEDhnxuAEHPpdjeStcmpMiaTDyQyrzKsSZiSX3xPBNeUb1jaV4x4QoBAc8peSZT3K6iJ2TnzWVmu"
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
