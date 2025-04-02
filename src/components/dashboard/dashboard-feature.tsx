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
    "35TqP7SxQcwFF2ZMUtHrhuuNtHRPxmCBEkYE7YeN8Vnw5QzPoGDk9LAsQxqciWeqmkfcKVGhDmRQiuhYQFZ1w9an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ez2DhHWM1euQKCaTQ6PsPqs8zokQTXGhAhVrfB2mgt7xQxrfmJDCeAfyTgFqTkXSGXeiEsvnDn37ZsUfZGWwauf",
  "key1": "4yMnFTjMSmvDKG9V7j5TJqvgprP8h931n57scQpMSp7m3Y7JYy1dCUFrjqdLQDujJbBWa7brfmDMvXe9HdwshkSt",
  "key2": "3DGLPKRD8CHuD16QNECqtZZGy7MppZ87F3bvpuiGiEu3HWfBauMXe8jwQJo49FDwaXC74voag7wo8cu5GN3cA2wu",
  "key3": "2SU1nnvRUyjG1sFvd6gEcdnqNCDkMnk86aSQrZyJwytuW5YL7RTX2g8X5yKC2KMAp2tNrsaqSicjUePZVxWyT18g",
  "key4": "4DNTKBjGvDjsusm5fKsfvvcDX7HfBXCLkKZmkZBa16wt7RovQuaqW8AbmzLXj9hmAUjaRcnBLefM3tZ7YFyPrvQX",
  "key5": "4BvcJoxtRdyZeH95649BZSxDnjA1DhSVzwzypqGwMXBGr53sJp3i2shiDtZtiibY2z3JMz4kPhcWsVzhKQVHdFi2",
  "key6": "52Ruun6a2JFHqXjYBWs6m4Bj833TYAXDfpERYPfm8Evn8QHi1eccAojpTrN4YWdHB5r8V7sRxVse4DXxT55iYBNR",
  "key7": "4dXHBXHZJyuZoNCD7ofKLY5qMCkmLWHeNWam2JzLmKmx45nQqHdSePWRjKup6ZyZCgnuLcFrQQJQ9fh23aNkDUUQ",
  "key8": "45okyVCziJUz9sfWjHSSQ2N4EwySA4XXvefcmCvdnSMGSrQYG9fvmsK5ejhVx9qW3HC6qpyQuXkdRQXBb5jZzQRq",
  "key9": "5X1mS3A6K2TwXQkAVZUrygn1eSrn6LoqbPQn3L54GG4M9AMtvwppBN8nNAJFXK2nXRFLvqJPVuD3MX7ep6ou7orj",
  "key10": "2zXEkRB6HWMWoMw6qi4QgzyzcPwjLrwrcyjjdLtdCtvoUea158k929nFAEuYHDhhFraz2ck3RCGrN2biEoWRijzv",
  "key11": "41hoE5duwVDBdKcC9axMc1c4WBqu28UTSAan8QFGDMi6z81AzawuqJEtm2TECsJG1t16SfKpB2vtmsbXAez2zoFT",
  "key12": "5UtoqSVmaFc61CDG72MaD93tb5mnPHbN67VChdV72R184o3RozHRonDwRNCxtFR6RDiTicq7zkPZ4vCaVnFNstMD",
  "key13": "2bcHvq7bjgGb4g8GqAueKLhEF81M4fETkox84767pyYr33tuZzPnoEEUPQ9ofXGuUvPN33umfsy2aiwtnAPeCJv7",
  "key14": "31gTmZpLTRThE9pjt6LjWnuxv6B83x9TYB12Z5m5TShHbAwe5Vk6jDsd9f3UhP9gTDZau2xeiBZp4TW87q3q74sC",
  "key15": "8Pi66zoXjaDneWVG42LEbW3qs3pPfxEYTh8tnoRCLTPpTUG162xTQZMWp1RVhwkiib43zpTk3Nw6PgUHPmL7E8B",
  "key16": "3KjFRs3nGW2RBxPNdNxfH9JrRPDz1bRJcQPmJ6uXEWDPBqb7YZuVCymSTSeEpZf1i14Z7B19FM5fHu6yzXPe4nrU",
  "key17": "xfwyJH7DERddPZ7cEbLqGER8jQv1ScBNDGc7fDLfQo9Li5LacxPGuDDJmZkWomayDqhnrQSLsb6SPRkrjJWwr2Q",
  "key18": "5TjUnKrQf4wCCEw35Y2LXunCHPD3QV29t7zApizBUCVirafJaSkphphxvQUJMaJ7CUfNJrePofxM25JwTnuAbd7d",
  "key19": "5Apf9v5dMbZjGjNUdWjwe4fQUC2zfRvvK9se2YmGjRYMuNwDoj6BPFY3ngrSBrqWvnQQ1mxkyS6KfeeNUUgdus9F",
  "key20": "5fCvDphFdCFBiCKa1gK3DgwtbLmZEWZaR7EqL2xvVGSEw2KXRyuqcJg1vWA3Rp2LNqyHFHL4gJHkbYRbVxnC2NEZ",
  "key21": "5Y2oazeqKTNbgGsyFMX8MjJ4WnxceZdMe7Z3dyQexAkPeQRX6i4XMoHpGU6ptdr9o6texb6CSHuwuYGrsaw7H6xg",
  "key22": "3v7hcP4JxWxjACq9vzdZmp5tgTHdP5nFfZtb53bWLKeDm7Xx1RsjrV62o2k437ePazrhyRBZAct6HVmKYHWiUxgd",
  "key23": "SHF5DRw1SDG8sThbye6sXbUBcVJeWYCeVAnTbFoAhG5Hh4QhdnQMkiajMKAW8SUd1Yco95TuperHufKagBsBBuT",
  "key24": "263N2XkJWq3hDXHKYTZvSkg8qhSjrAZMPsAZkXBU3WMzoZUrGKh8TMvGVGUoGZ9prGbv2qwuvU3dEq9GqPB9R3EP",
  "key25": "2ty85tJtMKFGtuNiEfanUpSsKAs3swoNHyYUyDkn2AY6SHZoWS1JCC68TNhMMmaAv2QrU5ei2MbKGLcqXqYfHQJC",
  "key26": "2AVnbyjohm5hAiieM6uWvDdFuQmBf9x1N4sTuQmbBqFgx3ZhvxMStyWkfNfsqPR5AraGwPcT1eRi2L9JZgLLEy2m",
  "key27": "3QKsGz2VNDwYtJP9AzXWx3vmySfVrenNm5bqkGN1u1Z6EA3m2keXN5dmRiYo5PBRrTVARaeFiPWBsAhesVFCK2HE",
  "key28": "5eQt4ZsETij8iCCsy1C8b8gbr5FapETYnpJViz4iD7xyK4nEGTtiqS36Eovi7nnhr9ZLsvhBYkr44MZrtiqD7dey",
  "key29": "4SBjopmBFYX7pobhrWcFEnEhi95MAhSDAksD2oLboPQQWsRwSySApxfQn6RoR1ZNBvJGZWbCF4huTfXCE9kzAyGH",
  "key30": "2S8ZHvezZ384QYqnVRqM9BT5QM8HnLxYuDeTQhqwuG34aTs3AfQV3dcqUVxTSu4xet84MNQdxapvaMh6RiczUNz3",
  "key31": "4vuos2CPoJF1VGp8UytdnoPETXPcSogh9ALJ2KPTNaJ6htaXsoQGt4C2ETd7mSS7WecYKq7XbNzPUBbtFZ2tAof7",
  "key32": "2rnpADrMzfdVfSCzqgPXHExL9JbaVeUhSxYvY3C1LqrsqPZ9JjhAxDDjCwzbAQ5p9hovW15oGq2JeUmnev35DjjS",
  "key33": "4Fj4LX9gqJ9z3baKC6FixCsqQC7AY6eBFSauv2JyDSRSK4LB1bWEHYdMNdB1YAuBLjpFRbNEVi1XPmm4YNTctoUG",
  "key34": "HqXDs3CorBon3Qkv9XM6X6yAE4oqBGJEqEbaKtSAgZRkEiqyz1dTGFTrKabariEfKfuiBfJ9rv9KVmQ8Hu175Lj",
  "key35": "2yq6qxPRvQDCYWddkNFGzeGWXUiPj1JgfsCtxYMsGvszem3NXWipuqCty7xA3jcYZAFrBfA21B7Ehkekr8UozQ1Q",
  "key36": "VfHTEoDy9wSeGr85VkSBpQ4mhKLcMqrmy12UAp62PrD5NMzRUZcUKmEG5yFiqsbMKiTuhn7MZKUujde38j5MQ4Q",
  "key37": "yMxXeFirHqEK4eQHQi4N3aD6NCbBMH4wQeooHo5yuGcwAijr71ELW6Qd7WDixjrQtZmKUKYokQ7Nb99oFc4erzU",
  "key38": "3kQHyjqmfVZx1fNqDu8Ndev4kqdnz8b8NYhqzAhhB418dqEZfbFQwC1BrDNq5rx46qNzMZhsLHosegarDaWntfvr",
  "key39": "4H16wvtJpaisp5JaFXnHMQMuEE1VEQxdjQ6yQc6X3SaUd6xgsNLLEqe4y197CDCzD242oWMCFxhczbFgUAGCva6d"
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
