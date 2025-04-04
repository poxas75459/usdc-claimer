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
    "2sSGKzszh21fziAEJSGypgNC7M5Fb8BviBgrQXL5Ku61ybVieUHBk91Fss8yxnCJWuizaKMkq398kexaFf1q61CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sDxWFGAFKxPezfGyJzido4yQdbSgaYgKsFQQZbKLecaUYkKbmu3sNvzmjNwnrg41o8RgWmoeZMErMpnSPAhXbP",
  "key1": "3SYRPxffKWjumY3Zyf9gfPLs2DRsycA5MY6E66k8xNacnFeyiX547CiP1REi1GCNRy9ANzKudU2rXqK9ERbSRbUY",
  "key2": "21cDfZhpCvikX6dQ7gZacZYRhuy7oxfAvrLNAFg9FM4eYRs7uUqYtMUDd1ecUkqm1BEaPuzzpARsvNYFbUmNUcuV",
  "key3": "27oqRGD5Vg6KsPMfqHsQreyNiBZcTDrVyY1mTrZ3Gk1cFqP5vDxFkTUpfnabo5gAnCc38kUt5CKSiZhszVH7cgnc",
  "key4": "tKN14NzidiPvi624kyoR4t8t5AAqjmSC1sKs8bepB6fwK3YwunH6i8yJPcniYF7KZ3yoTGwT1LEXww9Xy2kZJ85",
  "key5": "3PohMaWLWEQPYMhWjz8gRCstKCJ8jVzQmuaCah6386Mov91muKY1Bz6nMPAJPn4rHqYqJKAPjbkZH4FFG6WXc3gs",
  "key6": "2dAoc6PJGiVLxuh5tuGjMXrFKJnv8y71g8rKfGsbTJVVft8a6heSebmWxvAR95CufvCKcxYBJZtztuxLzhdFVCWZ",
  "key7": "3fUKuDnQteu8cr5e2mhmvUw6ucaVVE3eC1HfPK2x8nAJiACQ3zZZ3ycnfSGdcyK8Un5T7od7JH2c2NYHgpL2BWEc",
  "key8": "5FSXn8k81k6oZxL2Vn5QF45vCDt51bAFZABqhS42nujcPJ41xDMS6iB3LHHP4LKt6YZqBKYSmF1HHHFQzQFHZaMq",
  "key9": "3pMiwkHFGR1owf6TZAHZx9dVGYx8w61YzqDtUp8yhDkN8rSyJ6vpNPmgdrZjHadNTnvsb9fS9u5gFf5VubjWYBUq",
  "key10": "5oXvK1TKMjZZE9vz3nP2Ly129pzf3DE1ZQK43cJxwHswRw6tsgh4Lyv5Xe2WEq47wYBaB5EbXnCFCRwZu8BzzK7P",
  "key11": "EidJMSfirMYrWskpsvhQCVYwqiiE2VctLjS59Ccpz8TJK9CDoD3RfJinontcN81jHMDN2mo75SFEi7dBPCaMdnq",
  "key12": "Gq3avc9hf84fWuTTzE7BXRK8eDtiy5WXhVrZin3HnkhuE4KneTvgVjDi71aoPHJzkG2i1YUfcrXYpoEUTm21dMH",
  "key13": "3NuAxeamKoJtouGzJjDV4ZYtNHPqYA9mSXTSp1ZwaaYbs7Ae3z6XkbH9a7RLnWez9sC6N52UPoW6Kqg4sykccekC",
  "key14": "582cd9ZjZwZsS2j6F6K5ccmSSDZLXs9iv4mCEFz2t7K86c4rrPN9A5KszGqw8HB4pRswYAireQPaVqvrWowVFLeF",
  "key15": "5mv3A24X2qaZbucBqxU9PEYZziGivCJXHfGJnGB6b4mTSZtwHtx92LhP3kGvXScn7TFjCePehKLBdgep3kvfcpA6",
  "key16": "FTCJNJLHVdABtwYQUfXvUVLVc3s5QgczhKmzdoDEHEam63tikQ413u38XKKuphkYDYKm1KT92BRWheWubdxcEqf",
  "key17": "59FNR2sTQ35TwnVcvaDhDquxhRSmKzCgq7wpX4H42EsevY16kVCSuRZDqmPRu3pZfPrVLZqMMvtokMJDekpTTua4",
  "key18": "5anvRj1qce1s4gV45wr9K2qZjvbWGeYcDbBDc5xsd8hvJZteM91nMpSPdMkZ71orVbDQ7m1VMFgRpR2dySnnpdFm",
  "key19": "3R4V4C2812CUPuqVf3HExdcqKCbcgjPwkgFtAaf6HAbuFwzmeRXrMwZrTJudb4Nh8uHyGHcZPPXhzCxqCdnTzhUX",
  "key20": "SbfLDNQWEeG6t3FtzR3m8qRZWYQwLsBsqYjFq9RnpYc2YA5PuVQBFfKCgyX24vnfgCVq6DZLinmSexB9qhhjsUR",
  "key21": "5hPQkQncxJxFGh1A9ek8F2DPpbD7KNwZsqnsnvCUixmETGKr7HowJRckjMSoSTU3E5EkKKCczBeYWFndHzXbrfK5",
  "key22": "2xDhKEmus4DEaokVDgzPCPUVMLy4pbRt5oVrnpyPqMcdQhoPMzFQEhnr2Nsgzxg5NUCfwYfdnCGaHgeasuWCp51y",
  "key23": "gM2xQ8EDLnxeqkEev5iKUNSwsd1Eat82TD7hZbqDwSmmGk9JEdr6jD88ujoe28DdJo68CZfm669txphFEtMuTcW",
  "key24": "57AkafMcUWivxoN6BsBPhRxjySQMKZXmm15wEUGWHLfwriVBPo2gR8nZjuBEkN2w42bw7U6sVRJyW5sSBxzEEV2p",
  "key25": "4gP2GPWcnDQTKdRRJntY1QzhmFmntQ61h7zZctqVCxc9Ww2m8x5vTfBnyUywSTHaMh16cgQ4xbtUf9NHDhVYXqTw",
  "key26": "3mkdTf6Ztt86Bui9wyDun9zkWFLGqUgc5zdK8Aww8ufviVMX2f9qtXA8EQ3ojQBfjaZsNodJoCsNakkcQV5qSaPo",
  "key27": "2FLAkfL7L1mZFrKS7nSUGCGrAdr17n5u2KgreyujAEJVTQLkPAkJam1E6i5qtshuw2Q1dhX5D1tHYMe92gNfVWir",
  "key28": "2irzuxtbAuCDUmuwhuotM6PGXwRRQoKzjvhUidtA2QLZ28sSdtHTYPyEvzRSsSSXywz8VSbAemf6AURa8hezScu8",
  "key29": "FhmXHShDHeHLfQ9ww7PPRVH2H7iEo99pskk5rVLQVPT29f3MdbrpJfsovjmafrL25URVS6S28uwp39wCm7DpsJ4",
  "key30": "2FPfTUoBpizvu2tW5tyvS778cW4dWTLxXUMwLPHaj4pYfZiRsq4RFryUBthWyXTcUxbnZNEJZJytcVWBa4MS9JYg",
  "key31": "2VjND9aX7BkUVPZobfBiJ8vtkKFJUqukkSdkVfjpoWFnL7bKjJXX5nz12HVBP5NDqbLwM8BPeHtbDvMESCoeDKJb",
  "key32": "63Cev6G1eLpLAcQ3N2difim6V4kuh1FXiTJaVNUvq4KwqpZZB6ztU2mQ4Zfu9t7XKDCDZCQngK58xnDNktoshMaD",
  "key33": "3nd2q6rGYiRA3szEXNFeSw2daJuxpFimQedd5QN5hftW5bUtfRKtuSGnwu2miiXyzhLH7srg284YLDWxT1EycqeK",
  "key34": "VMMuUMHh12VJH2tRUQSLWb67eNPonoLFtJHdyAvBtKne67mVgDpkMwVqEe4ByYmUhF6uiEDyv7QQMpx7C2GrKs4",
  "key35": "4qBhHgoib8QvbJ5iXBtKqGcoasVUswiJxB8oXq3LRbxAm3GR7xZKqbrFxxFaEHF93kroV1N2KGck1CcJ1xfQB2xk",
  "key36": "38wnZZH9DNJcNvqbZRc9kyQknFEf9evGj99mw5MhjoDubTdXc7eScV24kVtVgEPNmW7kxn8Gv8LzMqPTTnCp49vn",
  "key37": "xq3DpFss2reorW45ETuqsTPRJKZ6b1GWud1PiLpDgWkjcu9VeXbqfdLmZFzofh9eSofDfr812T4mj9TAFm5NJaR"
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
