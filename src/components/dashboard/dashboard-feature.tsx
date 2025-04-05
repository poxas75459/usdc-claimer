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
    "7Jwpit2ixEdQ63Vc5jfptuht7LS3CHYtgy5XJxU74beKYtxSv5XvcjhzKdi1entD65wgoYCFpeHqn5G4qZy3DWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrRXdoSQQfpGjokPG6H2bCaUTmgKi5xY8aPetWMRaqxxsnM2sChBFGiMACTyyvhBspPoFJ5XMPpeySXLkEqvh1G",
  "key1": "2Xg7SoB2axQB5832aGKUvAr7ciqrR2FKWwK4CM3EwCT8cmLupHA9m2zFWTEXjBNduH5XsaYXFje3aVkpXkFZrQpP",
  "key2": "36ApncP1463JyJ9tzHvqyuwSG2qnMLBJJJznJBfb5kt3YdFx1dC7y2CFk97Mvuk3U2W2bQAZdLfUp2rybXJgsbzs",
  "key3": "2DMRvPDPwD8VzwdN9WtStNC4d56uAc6m3eU2FHqzVicAV6bcX46kzPtVdjk7WCZPzP7vuehHduJVov891ugJVgFj",
  "key4": "3GRtsp612y7TRcaTwUMt15bssa31jvSFcEVQywLHQbKKrrfwNHx1eBSzQ57qWaCnSVyXP92A28bhQ4fqsr6FNjhj",
  "key5": "66d88ZAYp3e4E1XFsjyk9kYX8b2pJF9PK8LeaywphVKvd76ZL7Ha5wxRzWFSz5RK6EEbvwsxVsEx4UdDJCNfC5do",
  "key6": "1MZEHWyVRh421mcHsULKwyaEyx8KHSwmcRdjsVUWSp6UHSNMHEiERCJo4Q6GrdCVR7TJ9kHqh4Jf2n3UrrptuEt",
  "key7": "m8X4URAJ9bbGBuVG3ixKJCSr7jMcWXKBRBHS1VqfEiy4gDDRZDa5NhDFL95beSvabSNxPR9wN4oa2vJNUDvApeZ",
  "key8": "5LBjcqrGfB9K8KNps2hencrZ8uMwLMWdY6qVjjT1ur6dM6zH3XL2UGrCQkXLNVH1fG49LDmgJAcq6g4PUscynAQN",
  "key9": "3XEPq51meupAijVR14BSZLz92UWLAgQPzcLPFuFo5uM3HYX5evdGNBwSXeNGCJswFMoPhMoWRnz21bvoAt5JYbkr",
  "key10": "2dGeFLhKUch3nj6VJuGPHW88YzpE9uazgMBuJmZqgp9M8n4kBApqqtHY2yDK8yHWvXAz6HUiJmtj9niqkzs67i1o",
  "key11": "4ptbeQjPazHk5E4VDSkdHxE8pEimJNk83KyWnUAQQPx8msyciWHffWEmaUcBBWgfTCWCFrfJAEQHE2YYzY2Bww4J",
  "key12": "5aN74AHtMNTThiVur8HHbnZfrhVJ6Vgworh6eDCf7nLXteGYxidoHJNafnxeod4ifb6ByvrYob33KMjRpaz4DhUQ",
  "key13": "XDesGf4q5v1Q6FLQVTYEa2QThW3L7TPuq1hqbiYm3tJX7KFyXgdYFptZ4e6Qk52r6VDJiCFPAMv4hjMdDV9GQzV",
  "key14": "3RREZ8TgZbv5AU5PnWh96sSezTStnkgM5uuULghdxKBF5QG9zkR5ze3sjP7ziJ6ZeodoSTFqzswpJ3AmZH4fajFT",
  "key15": "4NnzQcrkM4MfAG9rdY56jz9q4ewMdMw3HC7yVsdDcNGZ4DuNyHwDT5TrGN2UcpHa95EtnPo9v1dkjUrpHAgNcHYd",
  "key16": "3ZPfRpBmhDgRje1XEkx1GYYvNtm8bePeT77iyVR4CQL2kebWAX8DWmzU5W1j2yRhBETiQbJMZ12NUzxiNozNEPUu",
  "key17": "4ujTYUA5CtFVp3cXPCDnpdFnQPYfWaJjBWDphBZfo57bNTQ1dKvrLBqnt1cZ6Q9hQc7ZGX8G3JMvDejSoHh7KnAw",
  "key18": "2QJk9U3TLYWUFjSgDd6eWMgC8PBgTWm61SWNET4CzKZ9ji5CgGN4ZwAWn3urpojZCjEdn1QGEgEZ4CAEx91XTe8z",
  "key19": "2PdAvQtwqfmVvrnZray5wB4Y557N49yidYn93cH8tzo94sKkXTab4vkFLBXfJpL2t5bpcjt5saDzPE2jMetFaN2w",
  "key20": "2qawkGMUoVQAbErMdMZixk9CbTKyr1ePKmAzhY2nMH58Uig8du8uFt8ntnKmqNqQD9AtPJ5ueDqft4ckiAw3f4YF",
  "key21": "2jBM8i6mZYnyJyepvnyUVJ68jNab6m7eLmuzkCZjFLipAGJGgB7MAbdfKTcseYYZxfaMjoKA36JJkKDTAPaBm2kM",
  "key22": "4XFjaFGZcjVKPFMp5QxCYYKewXQPU7uciiTBtuDR8xiq1njHFpBUdb2RefPVB95H2xgGNvPQiP3PzGbFcJmBfAeV",
  "key23": "3iiGJtc8vUG6LTsuX2afiYk8Q4u4n6GgJFsMoWHBsxyf4Jh5rEbwhZVq1xx6s8EFYyeBK7BZUGdPHKseyrRpo6sd",
  "key24": "4itDk5EQKbaqVokcjQiLkmuHLjUFrficmegZXwRxRxjnKJutJZY7ZUgKvMxpogtEStjZP5cdVdU9jekL1qfVERK8",
  "key25": "2rvnQjr42XvdVEz86TPSWh8ogZ2QbsdLiq5o5dkdH7V6FYb8ZYAVVX7JeB7TzYKbta3iyc5NSgAF6wDXqiZ3ytpD",
  "key26": "3uCRjz7H46edXtmNp7q4Rzgbu6b2Q4azWbRMyd2NgCndFTKYB7StRfCUWRo9t1TqUQRtzUTBFFYtprmxp3Ch8BQ7",
  "key27": "czFDrokXLXgahSEz7a7p16G3iaKt2jGnWqeFtdCB7xmM1s6ckWaHV1ybG8N3q3DLUiosNAi436ptYDsmcsoqjs7",
  "key28": "5sczqZmBtDu9iKnpSEFvUCA8bezse8k6jF5MhGRrujju2Z6TmDkMj7wyUjEUoSuuj33JeHKUGmzELaUyUvBWXzMs",
  "key29": "3TQEhMoDVd3unWdEaduMow59vYjD6BXFXLKKUZSny7WpF61yrXqeyim48oxUzpuyjz2mjfMg6jonzHU375fcFXWn",
  "key30": "uRdhvNQxDtQRifXYpLiHWsNdrrQgWipK4chCsjPM8SW5oNucrFGHh5q6F6oGNdHiaKdgAsudSDB9m8UEor7oTNE"
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
