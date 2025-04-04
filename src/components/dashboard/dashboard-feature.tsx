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
    "2iFPKJF3g5TCW5SYLXRPQv1Tm42xBdSz5MuK1NFWQxHxLreuPNEvBb28UfTFjyM3odbtCpVhy4LjqRrrk4oXDdsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66V5JAVpvhRQn64j8oMwd61wCPaUeNE95JK9yzT7UZ7mx1HjGBhf6LGFTkCYaQJgMNqJbuqWpPQW4xVVSD36qqbZ",
  "key1": "4uQFFnzcVFZpAUfNTULZr4fzxDN4SyNqSukiSznvEH1tFhXFV8Rnw8GsjRGnBRMLDjuRjncGoKqCVewwXEKba7hg",
  "key2": "z3ioHnx9Lrup7xeKK8NrwTvq2xZMQocHnN3o6PETtSeJsPwcoykvkHmaM9uyXuPWfMnypAo5tdYeENSufEZA2ha",
  "key3": "5MhGyhXyeRXz1J6Vf4XvMLnUUCc6xziamvc7ws8JMvoEHsbmqDkGicg8EnzfVkg8tRykBTQwqW74KGFZkhFQRV97",
  "key4": "4A7ripvTwKzbyoDu14UwJW5DdZac9YVX13i4xGen7vs5oKeQQhKjEG6xFWmUnKwSEdfjiQkk5f1ZEQaD2kybnJmQ",
  "key5": "35cbbLvgRsT7vQzBsxCXmfqeL9ygCjW1NxrkNH1JX9nhvSvEtFikueuCPTqksjhkgpxiS585EdDe3Bmtad14HB2j",
  "key6": "4wD7N2rqtyVPmoytw6im6wtEhfS2Sd5b8VhVKAHzZZYZD9SVTxf5TZwfaQsR4U3d1AAgUhd6ikcgTWMG1NU7tM4U",
  "key7": "36d56TLB9VbWtXrH96Sjy2vfmEHbMRX8CmqFhFpcZEhJefd6cPbhe8H6rbUCYzHqmQN1BfZHJxgA8vSK15fNJ5G",
  "key8": "2Av1qY9bUzpPvYfj4PcHEbrPwpzrE8tapjMT4D8Wozz5L7VnK14iNnm64NppaxLmr97gBFYQESMDrnN9mcEVEC77",
  "key9": "sWSJXmtsVzDodqcsuXKPuQ4DSkPfCF2kF6tezmmhGgxn7d25y5yF1hz5FGVC72uWfQaAy4zP8cYC3JfKQYNMqSZ",
  "key10": "gM5D89synwErzzpHPFTFDASfkaiqCpzW4z4wnTYEipNGRhHCnjW4hCK3RJs8QLH2KrhcqMYjPPr7Zx93hJAUVeH",
  "key11": "3CJr2Aerp47xewVLxAK94UTLJWVfgdFjFgRD1htKsB9Ny7rmufEK4CBMZUVQ91TL28F6ETinvRPsQkNVicMy5aRk",
  "key12": "FwsM3r39neHo2r3MicbajhUeoSELhsSsv9EHFevXb5GZyfai5Kr4ZgsZMH1A82pCKcbUoV4qzzUkcNQ5GAD4o6U",
  "key13": "oqjPvruLPRSDXnqA9Zsrt2n2vLtr6DiMdPGSYon2tVZGap9rCoBCWwS7iRtLuka3rUJsGU4wZ8ieUp227tkHgtw",
  "key14": "4xs37E11M45T59nQ3B9SoMNKYF2iecFJDhqCE2C2SfPzVKAfrro58VyP9idtieDagGpYevufVHmvvb9QQFRMS6FD",
  "key15": "2Z6W7mtxFaQwgxVPnnhFYmRhKrY4Tc5vYfqjTTQmDv3mXZpERyrezJxNuBh3JVwmoY1QYkQ8HQ7rqBJm4nyg4TXu",
  "key16": "2PCwn99UenLuxDq16eN3gNZLbEryQ3H4HmHCx7YRoPutLPYkXxAGjmbLvP7kXUsGf7uKCpydskDJVzRRRZTwNU5T",
  "key17": "24CL1HcXxgmNgyUUWLfrVW9Juryaj29BnggKhKU2LuHsjX5VhGD8a1S2fy7VXYNaCVg2Q7sLKkKiCjPobNL67ezD",
  "key18": "59wN6JMy2j9stCrsGJzZ33ZMQGwTTWiufvkhadkqo5vMW6k3fV2JFoJhtBvsUQMVhGcpTNFRKKWaWaYK5QHJxqN4",
  "key19": "4puvNVzDPs8ojtLsumcHtCzP7TuxL19i51V1WQpRNxazCKmTwHZaMnZXRiLz7LFpjh9LNwV2mwbC2v5cEovtcNtw",
  "key20": "228FcE7Wk1JdBhH9pdmnTuGMS7gMtMFxVwS5Cp59EKSpFtBojViLFPKeYg5PsmJFcABfGkhtapDyh5sPt3g8k6ge",
  "key21": "5oow1bSVdysvZ991f6P2izgjbW45WUxRSPmE8NFRHcYiejtthy3BA1e8b8KfJqhgnE1WMQbM2hkA4tKvnd3tnLo2",
  "key22": "59oz4bEmTuMHcKxaM5irTYZeYzCEY1wr3gbhXUrpY2biAjGpczbEJzwC2MQyfu8P8xEz7WDhnFxbWoMuH6kGmafH",
  "key23": "B5cnW4BThSdKzZ6tJmEJq8MF4WodXyoeEpEJ8XXB6EqkUKovYFC9XAprAXQpgMbTUoG94Ju86pTydDyKYRmHf32",
  "key24": "3WEtYY3KSDv6j8Ykf45wGQDUtwPAoHmoM82Uc6LULfX2x5oHADMvpAbYUq1nFfQMzwcD8VYKekNtbmN45kN71DVs",
  "key25": "2w5BukV2BxDS28gUnEZnr3dg2fQxC7MT1RKEWRUi1HHYb9Lz71agzAZAmNTVzt2j8252bvV2G4squyVpo6DHVc9g",
  "key26": "WUYZDt6zLVaixRE6vSnqzyFufcAgwTm4auf7zBxqdkGxkWxkiRZe8j9oA3Vf4LCWnjiAFBbJ49Gmy5rt8GvXYqX",
  "key27": "5AMNjLudhCmFmyikQzm8v5pgT7vkFbx8bdLTHm5WV4GR76KFQqgQzPiNPAMnrwgXsk73fq3w9SSkFFxGobr9AYa8",
  "key28": "jEw9pgoT4Q3ktNv9A1NHVnGpBMTkMbGFDvZt1EezhScp1U9iMVbfWGW2fiFuvBkgyFqGRyw2EshkzBwVpfvxHgc",
  "key29": "3zKqC3btRSs89qFVNtiYnpo7fFC3GKWrVvEDR3S8rc7EixQvV7M6PDjLhBip4DmzF1SsmQqSceLMW3Lqqj4WGpqZ",
  "key30": "MsRevgMWaj7oeZucnKRqfwMQgfBndDk32cbcJZVNkVKLeKc7bQdzXU7ELPtUAYCk6tAH5s3dvXBC5Ahp7KBH2Zf",
  "key31": "3fYzfxsGP7pEywBDKBsV1uXq2jYA3wiyNnJYqdpC9QCoqvzf9ZrR3mfanUb24qZ4QNaRqHnkSL8a2S9zeiwvzae6",
  "key32": "24EMhiZwjWtkCYZ9jSZ99t41zNuSLy7nFmR56vEc5Te6eBKadfY8QAV7c5mp46tLhJUaeYdWTCkdTfLb7XyhnWVU",
  "key33": "L17uXmpz64eEpknTZCdUBTWDurH2rpL4aVMc2dw4e4mbTQ7QnhCdLdmCcZsmrMcTbP5NWxbcMpWgr6sfE9qwME9",
  "key34": "55AGjzCss5GZDSVyAue8PsVGj2iczfTKVQKt7NFoyPvzQSBasRCuAr8DQFW1wC8B6CxRM6bYpkmd8jErD2EJ2HUq",
  "key35": "1SyBXQrF9NMtgc2FMMcGXtF8QrzbEmTQLVXrci8nZkzgYSBtwXa7QdyBV8yrbue1iDcXMxUdbv818BKApvLWn7n",
  "key36": "5kt6pgPkrmTFPukbUmBzpg7MCtj6jWyT1VoEwTm6XiSNhNGPiv5F8hx2uBxtYPFkCNeooGZbbQfdjWxzyjdFCKNQ",
  "key37": "2gQFic8qLgAWAxRSqVv91iBQkm16JA8RUEpAZLDxUxoDvhLp6tyXgRR812RBSTiqaaKVWfvRgprAEbBabDUdjug2",
  "key38": "1QVicFqT7TpRE53o6F7KaUYmv6152umDqyocMkrd9pEfAKQwKgwoSjeDQ99n8Qmep9wFqXkTcWy5yemoXg2CuTq",
  "key39": "5xbAvX7Rcf9uQTpJgmrLJz4A9aQqfN71itojcuibdybfxUBAjKaUyuD9urcZCiqSf5pLnTNvC4SpGbRKcMjE55Vw",
  "key40": "2TK5JPRdd8FN6Lj2hxPAcFKD9HViBCNTSMNet7U9W3XzfyQhfN2QbVjEtc8JDpWrS4uQqh9x2uvXi3UYgvKPguwG",
  "key41": "64RwDSRRXuhfdc1oeSgziaQjJY3hne2RnYRhors2HrcA21eHANJ4jE9LkzG2yprPFob53hPG5DUKVSRhoxsroiUT",
  "key42": "SQhHCUwgcYB8CATmQLpPTSs2NQw4qh5HGAf7iHz33zS7LNsRLcFaaeqo3mDQmKG1tVS4yPHTEmKoEPAxjN1Prtn",
  "key43": "51GeFzvg6cVex5vDNAjdFmj4ts4W3aHFBsDKmzqeoPZtavxG6S5qibqiRQ1G5wsentaufHvLYouMsAsrnBdw6dcd",
  "key44": "KXwvVW1SanXtYGoJ6etuyL4wB1vWZ2927uL4cnQSxKWwdG7U6mo1fGoYRaK4fLUUVoGuVz6xwViRWSSCy7thnfT",
  "key45": "5UfRFB2thEo5Rfk8c1mhgW8Ldc2ErFo9RYrcpY976ZpTsAnm981XaArdWk6YQEWhW88E1D5DoKmm1hieTsECvv85",
  "key46": "52hsQyjNMsQ6JWbF1PWmqH4UZArRs3m2jTWFnTxpNA3C5QEmyyJHRfYjpw12KjKrocJjXWsZDUdCrsVLbeHEsS5h"
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
