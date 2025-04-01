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
    "4y7H8dnWwrh4dXDd9frgrKTupZLzfyCZPFQ9pmaf7UwaFYZ6nJr91ya1VWKyCcTiYzrXYhVAUzEiR3dU3eZ3ZtWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2iNvDcidaxycF8ASEkYpkqqG6yz7LBjhbNewbrAqL12sVpberTkyFSGxmGdDx1DNe3jidvGArDST15epsp1uLk",
  "key1": "5PEZsBDtkm5mE7Gyq7TASYkXDLcTc1c3nHRTBZ4hcBHVeQ6Csqvk8p1cPx26bGn6tE8XDbFBcaJT2eajcK4ENNUa",
  "key2": "5hKGjnXYZhrfPEsqpRRPWtUmr2UU7V6T4fCLMe37j8PBtT5ahj91MxSe8wndFKiE6K16S9unmfrcUbr8KpU1YGYS",
  "key3": "8WgzCftzUu2N4PciCFXkPG1Jp3ihpmGJjhCoXUKYhW7rs2FwW4iT7CU2ZFi8phocs4JdiDdvqRKJ9W7MBzGwBQc",
  "key4": "29E9x9YqnPV5ETUJJGGPVQz9nVigyq4sF7w6u76B2Nm43G48TpdCdqwfdLd9tcpF2MKDBcvzQ9q16jYj2BGyMqeE",
  "key5": "3mTbwFgDABB7tnX2MyptfAYDXkQgmS6xDPvqCGjvcX6am4YMj7KsDsbqLCT33Xj5cVc576CMwiiJ6RUo9WKGkJzX",
  "key6": "2Um8p8jBooejrJCkfhnFLeZhvG2We3mEpAPVgxGcAs5aaUHRJUcMQytkkdkro2AzJfrPSap7vkbAuAojwW2cNvet",
  "key7": "3VjUNVnDFtJfUYdy8HZ7gRsceSHb1eUwyefygR1AXKFXH5vTDCduUH3MgBGitrYM3awHLJ24fUP6ZVDRQFP4Sez5",
  "key8": "hNBtpsfP4ubcx1LDRnhSWL5hFriBxKNA2uv1SEHZe6enRSnqkCSNQxfkJaodzWdA2XiD7epo4EouoT6FyTyPc1R",
  "key9": "d1CcTsyApfTiBhW81kraHcPE88sbAbPyWXuE7rJ31mRJEGKsxuamRqKewVXVMuae5wist3aDLPYjQdGqc5Cd9y3",
  "key10": "B9xr1FMwicoxb7BBQyprsGvcFMzNMz2YW8FeGxN4ngRSaC3Jq8nWshq1f4xmL9WUxwbBKz8VJXeuhjnJ71k7YCa",
  "key11": "5VicsLcmwUT3MEcesyjF8AHcm4ug8omLnrFjBUrPTH9hG7DNVJGfUT48epkV3CrfmPsXj6MDWkajgfxukQLGAw5d",
  "key12": "24C5VRNsKXzjfVk2dJN9vQftBkRLgqcdNEqy3BV2QGyu2VfeZL8Uw1YSBMSx9mK53FkuenXQ8MNS2VgyjpYcLk3N",
  "key13": "26pQGecVdmisPQGDDFqo7wQ2JztMGYkrupvws9PtcKQ8hwpGYr8YAjzwHczTEMcmckR5xwxvugS4HcG85uuC8Ees",
  "key14": "4P5nJabJ8efQYQFsFxdbSjHpEP8cyX1gqCkPxsrvFbGeb9LKcvTfSuvKj839EyLSQrQvLN1n7BaipAaLnRrdnpFV",
  "key15": "39BFtzZBD6xBFP7CAZ8tEp1VervJ1dz5CvSC1jc4a53oUZ7hvGGCshvQxWsKT5AohUBZEmEAABcbZXYZyggJiLGT",
  "key16": "4wYrDkaR1amXdacQhMs7Ja1CYJphoU8Q5vg17keSyHSw8szDAVBhN31G9AePnQWTSCVAmfZgWBdqNnEbq6KbnmGu",
  "key17": "4rmxebvzRb26mh6T61GDgkeN4bFwy9JK3YvCc8NVay27tDNMkKfhiBwvxaXAce1Hq5tZzsZL6xaLMBcJPn4qoqDx",
  "key18": "B8FacBdykj26jh31cPSW58rYDm4byM8KvXL6XJjaNFd2v128LE8KVYNsemqMbPh18768aT9nhiUNVrwSf2jV9ag",
  "key19": "Mc5Se2v6c4EuqxxtLM3TcgjkWHnato9z72yyk14NwYzUjzWLz3vXgpJ59FzycTUbeEqFEWfE8nxZyBJbj9EbuND",
  "key20": "2XjRqa6Lzt3t7ekzFiGk5g11t65yksrywyCM5JwVYYKDVHVyLZFEbFBbCMcjNHoBBH1Wzpyph3KdAVYKkkb8moQ9",
  "key21": "rgPcFiKDXVdBum1nVVLvNuNny5iLEAnVgY5WU8FrPdqyJQvATnm2ipTjaoWGMYC4HW2qDvqkzcdpz8iZwjvym2j",
  "key22": "32QQXskwxdsV7JrU25m1zm2FqJhsvGjdcHQpkwkgehEL6qbsnmwQzaasHLp8AUEru31WV3b1P6KKVfNttaph1FnP",
  "key23": "5m2iokBeMbQFseHQ4Z5nGNFK6mX9wLBFkNMimpqJ3KA9H2ijr4YE7nH73XoUbv5tBkqLh8tb3Y869hHEZN9utvwj",
  "key24": "2xrur6Hyrzq7JEBUx8dy4PJvHGaWbUiTqGbG79rJJjrvnK1tQrFYyEKUfgoPc7ry1EdBdRsMhL1pSrJ5iQn3Lnti",
  "key25": "5cZ9ZMmGL7FNko71EkR3k1B576gN739ZjaKCF2Nbiks7iCKgREgVSp2SsaaAfSxqdspVVAcdAYmXFd8acQvZGUuD",
  "key26": "5RBGnDFDYRNVV8F6SMnVdY9HQjfpAjMgGg31jRqBJLcHVDsXL9kLXqoSHhXvyCJSVTwriMVPFz5A7cZ3ziNF4dKS",
  "key27": "5Rwt99F3fAUH4CPF1AuQsdqtG92g5G6jDderRecFx2pbfKqvBBwwqrwUeW7iMAwdqGYqBqR2ojni75rk9hBCJkhw",
  "key28": "3YdWfeVSkKajUE6v58YAmQPVHQwDJ251teiNmowo6gP4vD1EhVivm5tKu9KbkeSDintK36TZTo5jHGReJ9D7SqTi",
  "key29": "3VDpbVa3c8xHNN7AiffgUb3xWMk76h5jWPdDe1FanaAiH55KGuV6T4xrW6yaEjF7GgMc9X7Co5SpqLe7jitQxVCm",
  "key30": "5Kj8ZeeN2pf5avAUrDbVtSdBjYvrexj4EpCEF5R45mH1LG5at5Y6kkxzzkmByKxrHRz7zjreCWvzPuCdH2seMJyG",
  "key31": "dmURwoJE9QHzT8B8HLDQt66o7P9duZyuJ8YNfpDvVtnkRDJCsoh9KUTVoou2QcDydnaXoC7qHrxLASsKa8Z2V2J",
  "key32": "5BYmNd9yhEUNc2BdUW3uYT3W2hNhMLEgG35ZSAdSnrvbBhLdeqzbD8D9yuSrbNE3Nk3wbkVn8xaTdTQ7e7bC5817",
  "key33": "y33B2FYAmyQj1v9yuso2ruuh4ack1ygEssenbU77YdQ7B2X7YqtqkD1utAPoMtFA5ziVJ8gEyfpuUahNFqzCJdj",
  "key34": "36CeLc8kof5rsUopBspfhkWfiGVnYBEBAhxny4rQ2GvfqiaBr6SqBFuu1dUKh7vtb1HApMnJgc3FKpRQrzbEoqus",
  "key35": "5HyKKdytX6ouzAyJ3EoH5PRvp1R62YQbUZ9jT4CUzsf5K6nNfu2ai24B82hztVYf81GT5zWeh6ovWiYiK8vfrL45",
  "key36": "oXgHKhUbfcD8kTFUYUEt4dLFwxeYppETgtEmWN1ugurF7TqyjFwLbviiaVUGE248tJFrJXgjJm3NSg2SpsKCKv7",
  "key37": "5CH1eA9NdmUnVqd9vdC9DRoG7Po4mTs2Pbq9mi9jh2oqWdtFxUcNi72fELW51pgMpL7wdWigNemSpnuWkSLFPceR",
  "key38": "2dQM1DQdJnY4jyUsZ4PpKrsry5NuQhEjaGaukhwufhFxvaB4RFeA8VjGTrADtTfyCzBbEXK1RuchVPZ1A4ARPBxp",
  "key39": "3cXsPKSWjN37HBCxJaMm1dCqBmdXbx7KQMyL5asvb6yms8mvZWo7SwpjzmuYaPjnYUtPNWDzaLELE9XM1PExHXJ",
  "key40": "L2Y2YW9hvnMZCGap1KLf4oRqdqn2jd2PyT3Gu9TGwBNPH7x7MhZUXHKNnsJUCXdyZrEy7TpqBzjzd39KvasxPs8",
  "key41": "5B4VhAkXhybKrebyYvzdYZWutqT6htscSMuczE9h9EM6eqGUvWv1T4zchHSxLUBCnDCSZtPXDwqJ5b7SPzY2sCUs"
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
