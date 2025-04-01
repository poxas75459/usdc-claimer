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
    "64YemSfP7a4anHn6XgnocB2sEVA6vxVJpAHKtwuZ93eceSkfRhSWDWh4L96M8avLngx2YyAKh2UhhhJAo64kFf2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Lx3ZX8hFcocgS5muhUAr695TNNC7k7fijFeScvw3ghpmRwgusokTcLF7RtS2mB2zumQp5NYMvf2YVdVDHt1fFr",
  "key1": "42tf89FMMoPmfgaseEXRuDUaHpmPWZeANdMNvB4qX5oM2MELvjYLGVdW6EWYRFKmCyXRX1pdBWZ2UPvnsEtMXdzF",
  "key2": "4rgh7VwewQhzvFJsArRsvfptKdFidvHeABF4Js28fkV21yVvhdG4q3R1xBwV7DkmJNfgJ8ipfi7mbYBG2KhseWtV",
  "key3": "up5vSgMcKXMoR5iA42VTeQJA5BzNtrPAjJYzRkavnZZvioUjkD5TCcbZwnTTjmsWwcbsEVvbzL3RAJc6kknweSE",
  "key4": "612drdxwSz1tdQGAxxK26FHRMzgBwFj2poqT9PRpaQHEyHzYRgT9MqqijZ73aaUgQvXAFMdcBsEorkrGu47HGyis",
  "key5": "2gCkfkRaEcMqXY4ZbFvrxc7KpmC7ca3qoCa5KpxmhUJ1ikfBtbXjKsSJFAenqnihdsGSV3CrJKUPSMEi6AXBCMcP",
  "key6": "5DpDXdpmdphWDEPW6jBmnFLYxCYgKaQUexv3uXaaQSEvw6gY4J7uWxTrdm4ZveB14e2iQLiwDypAa5ygjQraNabt",
  "key7": "2ZWUd1ZUT51LozG8E1X4aFdnGBm6Ht7ZimEC9ShSwWohshjtTEu6SrBAgh7adU3UedehW7aQW2JJW7eGoV2DfWiJ",
  "key8": "5TQb4SCkP8taUifQsV9wdXDPbGeFWD8KjJcQ3Ep68WrZa13gvM2U2icavUqAHo5rAScpbcPtvtfQcDjdLDGmGpoB",
  "key9": "3dQZvyUzFJzAcwhXpQCU8WMNNYkfgqhK6vsFHSRB3T2Zmkidj87PnagSicAZwBrB1s88L4HSfkmwin284V89k9na",
  "key10": "5X5JKRpsoYrigJaBgzqYF6oUyZh4zq2t6e1ZGNMdzPxb1sXs9ARFinGedgXbjemLvNMXC9B3PyitSo7hrnnxnY2",
  "key11": "3zXAKQBAfTMPikP6vU2hH1wZUXTVeKzERCXQLnVwxfX4udXyRyDMuhhLj3hYKpMGUbHW4krdnspaYzCSw8DWugQ7",
  "key12": "3Znx7Q4P4J2dfomXajBq9qZavjejwSDTyFiErgXAhod3QBYgrvDrDX99CKXKzihRh9eppEunSi2GqzTYnjnKNvjf",
  "key13": "4DRq3vTSRp2PRatsuF5wMcooMg8d7jo3ZE6hpKwPNHQ8Ty9RUnEjWmYA8NMj8zzTWPc6eBwiY9ESMLbhZpWMvbMc",
  "key14": "gEaMWLL32EY2iafKDKpvauUeLnqwQtGo9XNDW6G3MkMTkJQJYLxnFVwQ39HwNgwx3jV26FCRb9hb97ApHtv8QFJ",
  "key15": "56WwYEM2ytNFSHocbdHc4prGyzh1xce9CfXiUprXotCjKvFgzW1jVS2KwNZdZCCFDHQSP9VeBNPvJetp6RSdRY84",
  "key16": "5T5LTHTZRkgJ2ux2zXNgU3HugY2K9CWe9UACfwZs7rQtr5B6YqxGKnJxTza3fb6DjJgksCwQwMWZPuadT5HfuXYQ",
  "key17": "3FBe62LQqLVCDrVYmBjHMW6ELKcwbbjp32CxxhhkG7onDVsCnGEt6ME8xMkRSABc8ySkVDyV3u3uBydBS4n2m9PN",
  "key18": "BzT9YKCfndq7iumcoeH6J3Nyu4TLmMkgkYPJdDhwDyU5e6GzbYYs3xhw64ehngpVg9uAJRwmmKSK1z4BXgcnjqE",
  "key19": "GLFWaGmMZXt8KdqAzzrRRzyzzQHuL4goXtTVJTJJs9gCYLkY2M6paii1tZ8uHnJkq42X5CpKf2MRXk3V77GpyTw",
  "key20": "3zGiXLsrL6hJK4AxhhrXbceMDN4LM9KZAPiwUFybLQ1vLredkmkAANRBYB22dB9DrbjMaq2boat56VcdzQ463J2h",
  "key21": "2yWAUyJruTcs2ZDhevUxqh7AGnzw8YKTwAB14c5YJVDchJtEtqqaYfMyqiNtbyWt9F1Egdtx5hBDfpVRyjRLMGD5",
  "key22": "4iT69EM76CTTUoLPfA8FhQ9aJrjMxfCgX4bH5v6LWV4jzXm5YSi4DYFehwQGgANbBjdWLMYQEYJ64mhZW3NyfaXG",
  "key23": "4npqGWEvfPRPv61YUeeiEBNcTbHjBhQE5uF4iGPBkYPqYuUavGHkbHDRbNSr3akgvT85q3M1EHQooWrA4SNkfinu",
  "key24": "5jfSb4kAQ83JGL2C8NW6ceMa1D74AD67vHCxAkNXqsDfiqnu5ADdVt7ydF3TeqCYXAzGq8Y2FCTeUg46Dsi8qK5G",
  "key25": "hfY6a7c3Vgp8sWachLsQX9uueFipxfANENAigXFJkaMWyJNtP4Ks9HdC9qbXubxzuxUg9ULjBm5XNtNvDFpMAPK",
  "key26": "3DCtVDepCPhafMzkfm7odc9iSUeYJNX5E3r1Qeqt61MRJXuzAarncw9UrZZ2Y2fP7DR6AWaafatcUDinYkF6idn8",
  "key27": "3YXZTtekZuGwzwDbDf8YKxsLHv987PBkQfBrt49FzdPRKqemPsADEML3GpPe6wvDyGyWZNST4eXx6JpEihj9BDSc",
  "key28": "4wWPT94gW8NDwNbbU5MYHvE4hjmkZoaYXBqTscG5RUMGeyaTuJhjgy4QqBapj2yQjuLZQPX4N6BQTjTtF3jVwb6T",
  "key29": "5hG86yjD6KYLhcNuhjxhwEe6jVXWHHykm15YeiyEZ3P5phdMNNzmSUc2zv5Btoy8WQ5Juq8pQu4zfuSwZVGJJd44",
  "key30": "4RMxAKQzNGC7hcyXHEWsQkMnv7SmCEjPafM7oC7sh6Ngt6v4sXydWU42oQGSiCTVJBGm5TmE9UEPDAbnmRG43vci",
  "key31": "4uGrg78sAvUu8Nknk3MAPvyAYEcEv1DezAVcxvmRbkw4ho4qdzfAwZR3hfaW3ufnK8itEMM3EvRWbMTt4KSkC6Zr",
  "key32": "2z9JeGF9ZgB74cqhbsvM6CovrXKF196dF9Jdcy5ANPTrzfNgHCyJ43E3BbCeZgWvY4SRGTLFGoZjH2rPa9i9FF48",
  "key33": "4zUuHqKoTBuRLdS7h9C4Zwxa3YXiwBt2sNa43uxJ8QLTxvoD93mzutHbZDcXdmMdLgQdjtuT8RekKz6HArQvnMRc",
  "key34": "4S9v4ZX1xL9ht5ACzrZ5cdwd7aWGkMcN5mWfEv6vzFEVRg7NuqcYgiNnobSsaYAowK842csgFxfSdWTWgJ4C4UzK",
  "key35": "55JLdmgNawrSobELFtFYSbXyc2LERyYvhEvwxh8CKgCBipgpNX7Wg9jpeDm2rsmutzQM37jKpwYtMbcBDEnCxw5T",
  "key36": "57c4xDBRgXqwcNivCo6f2gHJ5DnoHzMQgnve8vWsPdyQiNxPXm4txCot6D792AMbYRAKdoNu6wUydU8CHvR7yJaQ",
  "key37": "5GtdECjartoQxXoYjbqiG3g5VzG2Hi5EpRCU7cydAVsGw8MWrjtRvpXkLjGHbeuYCQRyzvaqNdjgzRXNrsnhG8iE",
  "key38": "aDQqbp882XhKCveMeZRCDyV7oQ89aXHdvvyeTBHoQqddCgBhuhvXhpaDbjKrikeT3oVdDNPMeHLJyzvf7ekAQar",
  "key39": "2MTWLyB4gfWzhbAAsu5Yce8kYKfGvaaikaeHRtHwG5LjfBHNnDH727vvwWBSzYKdXY5DoaHtgu9uhwEamf3ARB23",
  "key40": "4wxoTvrykAYJKCGqgV9S3g47TeDeQoRLQUMCTDnJvTKK721zMzjHJ3x7cyaoPLtWSS5vJxXc3uwuTejaNUY5bJH6",
  "key41": "2Pveu9ZysWngFsCBnWhDGwkXrTX6yH6JLHbqzKjbb5Dcm8qRGe7LoYqSfrnKzS5vgQcX9SjQKasYU8AroUM2kVV8",
  "key42": "4f46AVRPmNcXMxJcc14xzo1ifQkg8xG6k8e4Px7mhos3o4cpKyAp2tLQ8PLc8X3LW6gPpQBqdNbQLfJpDUs7gUtC",
  "key43": "7pRbcLRxvydmkyJAAYXJ8Dcz4qPZmLEG53MHEMbqv6CSPDq9QVxB4LvecxTfNbPW8UvBnCt4wQMWQijvgTXoQLM",
  "key44": "4BVqZqcHBjW8GDcNaoNe8jfQe74dXavpSGgiMmPk8Jbhbtc2YjwzXFw6fpziGXWcgR8YbJribQyAW31HhZELLJAw",
  "key45": "5TYb25SkFWQewAE1PbhTGXdd7BQAZeCyCQbPsmY3tiEYCUaPbsPvSnWaoaec2hYYTU66sNaARmoF1K8WPjPD9QJ6",
  "key46": "5W7VihS8Frv7yQtjm8Ad2Kd8AVYR68FihobbN7iuj9uKLcGBUgZgK5jD9oBxS7aeiYNDNab7PNGhTnrFV6xmqFsp",
  "key47": "4mpagAnqvqiexKWhvxWsP2r7oQLhPcRKWjf6xtihquoJTvgW6WmJ5w1GrjVcNAkzKkq3CRFupkZAn2vbZ7BWtWn9",
  "key48": "1W48f9KYYpvEhvUFa5g9snTztZRgwW2nd7euzpCy5Qtbe1qjRisBcFTuTD5vfNi5mehm8jbvgyR95Qv8aSmsksH"
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
