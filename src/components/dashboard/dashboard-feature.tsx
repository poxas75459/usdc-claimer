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
    "4GevD3aeXwz3evBJQrfDE7JpM3D6xmnHrAQSnaEPZoRmSpL9m92kyQzs1dLMU6PQN12Fn3zF6NYL4uxXvaptniSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqupbZcE4tW8dDrDTaHwSUctQ3DjtcUNwkVNtiGfHArxCWpTh9ztdrkyVLa26cT8jSu53gWB6qMKP3RWeJ2H3NS",
  "key1": "3hC6ama6k2J67AYL638dYovoQKgY99zKL1z8Da1jWQxVAPrWAeYMC6hL3Uc1YWjZHkpd5NnPG1rLJSkm7nWxdHB5",
  "key2": "52JtUm9qZiB2anBiVhkvFQCeoXk2MqeATKsHVbbyDMYoWutEoTPrstjTDRkeqds1N8eZggMkgcrWoqntT1y4tf8H",
  "key3": "4c2RUf9bBcvbrmXFkSUwmhpvE9NZWeyPVs7sdYe2EPegznzkY8FCfnb38GyGKC4jwxi3fhZbcM6ZKUZZs6ZUcYtq",
  "key4": "5AXzUaa7BeyTHfJfcceQchi9tAEKnuVoBiNcu8hGd7oCmjnw9JjFAS68cMcAHcmU4forpFudpisZ8DmhbtrMGpHP",
  "key5": "4FLsBmq1y2hD6Th6yqo3oqUutskkJzHfFziitCFfC5s3hcQARFUXK7kzkJWf4mzjLPHVJrqdNP3zXF6bvmc4aCEw",
  "key6": "3EZHyyFjL5mRm9kajkN4tsuyYqXbwjQKT45zmNY5uDs7ut8Gm1CmT74C8SXazwsfrUpiYtuh8TNSmGj9RPEkRG7S",
  "key7": "4S7Xz8DRrowkvZe2N24U5Ek4DuUqpnNaR6BEmKsbyJ6nRJC5zsimiC8gaWzDrUdH3bJ7cfJd9Mw5t1uHZaLJQniG",
  "key8": "52JLuXjKza8riaVuNsUY51eC9APKw8FQvgTFn5em6NddmvHEQQvjyLBxn6cNsxB4PVS9SDBYwH7z3tHaLqKCdx2g",
  "key9": "31Tt5Js8m2TAb35SJuPjjbpjNWDkWiNQ9arQmi2ykUSjmZPHxXEB4BTFbf8NYbeY8ngqKDUfn55kXKbYYnxoYRTh",
  "key10": "5QapVc4seDPNVVWiZS8ae4jgGhFN6tXzWsfBLhWVbTRyZ6bBgR7HRvRPiyLYz9guP9R6ddewktzMuUWxU9t1Mjnt",
  "key11": "2DCEE3hJCFa332ypqyX9mbBa2Dz4XvnWPZkFXGdggXEJ9bXj8C967JYg9GV8SxmHUPKV7P17EJTw8sRssKCSLUbi",
  "key12": "3he2rwro59QpLGp71JxAXMdNi4BmR7vS21o3VEp7AuVkHQreGYbi93i2e3DoPhyR923m6iGeLJrQEHwMFQdSuBGh",
  "key13": "3y1WS8WWhkB2tBoDWR2jBBdxFTEjQaSGQN1otu79u825wvwHxSTtN3pvdzt67SuKgVDNiR82pfGTn2ggLsHxeKjx",
  "key14": "dRzQHBjjbEG2Vgc9s8R1utu6fKnLtHxZL2spEzhwjg3ko4kWvQrCadEr9gyAmwjREB1SP42j9G2wPzs9ziT4RoR",
  "key15": "49qEt4DBgULK1QfSjnD6ULzVJfArqcC9tKJN81TdK2PYi71QKedwkGr9tfFSWmGfHWZHuMfezmdy7ove8H23hgTn",
  "key16": "5hYEyd5RYospvtTaUdDcYNKwJcgYBShP1E67qWN6F8Zq42R6fnuKZMCZtDk3ECrw2wdQDTDr7JY3MUmeSd9qFBSF",
  "key17": "3ABGkrnjEhZHBkA7j5AZV8QNqoNsGMY7Sgn11tGy4Sji5CQYRfEzKsC5eEsJnDx8f5WiCT3UfFBrjwLteUx8t9hB",
  "key18": "3f1iNwyqfZVEZX4TSm24q31Qv7D7gJvSDrWwsYpDk4diBUCPfN8MpLJdUU1nF55bpzD8G94K1cLk3mjcvm18qxDH",
  "key19": "3hUyPgii1b7QkFxpJfZotG4HXG1VBfgdYhbogwesaPvkee8guLJvrTM3ehacvAk9kx1A2GuU3k8PSGVXaDMy8vVJ",
  "key20": "4PvTFG2YsmfiBAQv5ALZW7T5deHbmRMNxY1XFpmuqwpxYhfP7SFaJ4bmX83sSosx8ZaNneK5ZbiWvLWgZv4GRZNK",
  "key21": "2KKnkGgMeQSuDcu8ArVtuBvGf9tH6tNiCD1rAMuz74mn6gbgS2N3VMmMwDeNagC8N7YkabHRpegpELKMahxK8Jzo",
  "key22": "3qUmzPnezqtgXKDYNEztCJNmMG1c1kBxoxWmfVYDU3XZbiW47GQwYw2nGq78tL4BTDBH38qSGoBQBicMmf766fYF",
  "key23": "44uFZzytSYuzcRT2smN4BcYrjrESstwzaWtQh9Qn4F5x5NJnu2WHmv4ojC6DXgNVVvR4rnLVShMnBB3X2W7oYDc7",
  "key24": "64S2FKHf89d4gAS3j5bguKb8gqff4A6ut3AJryRp5DQS1i2W9qvS5jdbUPB4cWNf1K9E3uZRK49VhsYHW6Go3LzY",
  "key25": "4CcENUBw3v3AWCitHgFduKSfRT5Anmtm96hXjzXtiLMvBjHeZMZqMkoERBhQihNBRmEGYQvJBs7b2X33YtiWRdXm",
  "key26": "2VEAiyg3NmTaedMTzw7mWZZenk2dhkotiegiqvPDvKPmZAeswVTUNjB1a4hiadbMVrGGtxv7E8pbaUYVyobiB3QC",
  "key27": "2yzLaaHEYJ7koXwtdHigJ863okpDJvYLhtuXLeKJK9eB8Dry2FhQ5aHT6Fdp8QdNLAfgTXLxBeZ5q8HUEHJzhY6w",
  "key28": "2Kr8ka7mm8gneqZotJmmuKFBKFEFQu6muTxhLPToqBMxKuBdfhLXPq2Jcgu5TJxjURkuqnSArxbkxvv5AA8GEZRJ",
  "key29": "AmVFgPWVMz6DAQiaWsXJGCTKRnE6GvrAoS5e79fGP51WBfMcr3F8Xc1wGp7sy4zuao7EpTr4P18EWEpcKWDimhi",
  "key30": "4R2YdxwBm3D6DRRZNEECFcGoMFeACrpWDJD4BEBnZT7pDNiSGrPvBZsTLjBxsZHcMFrTVMxmrB5gmKiVQMwqpXnA",
  "key31": "2w585oxu97utyEqLFJd3xZKJHNTFnjcj35vSrn4apmuHU4VphgHCEHb7Shxh7GCMiQ1Vd7j5ExbV2ErDpPwQVR6r",
  "key32": "Whjfot7pA1J9F1fwwkGMT2nWAaafXPtfbWYVHaXZZBCRat8DjvcY8Wy33eynW88nU8p2KHRYtGiAqrZoGCxubBC",
  "key33": "3RJAH6Rp3ViibPXR9VRRmh4jaKLTjL9511MASSRSgKkcQrdP4Q3HtGdCKjJM64hVep3fk9NcdZqNX75qxXG2LQ6x",
  "key34": "3rsK7MVKwbRRGvSLbFkvHGrq3bT6Qgopp9bLHzwGX7MobdoPEjEpgXPC8g2ZnJX5py8ohutc1AEs1Le83g5H62SV",
  "key35": "V5kHZZTh8WjuuynkU9hYCL74X3Z19JgFncD3kyobQHX6PmRBXQ4DP5Qs6ssZ7LXJ4N4AiuiTRiL8yHgXHtPqB7m",
  "key36": "3Xr26ZJF7zHj4Yq12jz2hJhJ2pq2Mrtqv3xLUhsRSpCS1tpfVu97ELzq1ZbWQ3XXHusCYot8nSbZ3DBc3H41m2Em",
  "key37": "2Mng7Z6CixkEBdRRAN15uBF6zogtm5mrpZDhvYPvPeBX5QiemgeXpo5ywr9XfmqnS748uBUrsBLdwsygJgPqk7cR",
  "key38": "2V2oVdMgmQDRSbr7HiK3tmSvk6D2dUx8VpvbDSh3ZETdRq9J4C7a6uJ2iiuAQcc6Peg2QjNektszck4H3MokZdRw",
  "key39": "5a5Zx463pd4D35RYmNvYneGM6xwxjwsSCFCimwQ5y7LAfpzYs4TRyW6MCm5aH7LL1VrfUFKcy9yVJ9rTG2R82XdB",
  "key40": "n5ZWkiWUTiJiT1WC79F8nYWSCJGxWCoUkcMmZ6peX6WfZwdDuZXxqfFCvJYZQEWEGGESrXuTHauh6vvN7JqiZyH",
  "key41": "EEFSwynqDKcouLutfU3SHMK65arhBj8RDxm1dZkVFmhbHqAwzkJ6SjLC2WodX7wV2bNYPHPCqgm2jhhEP2QDY6X",
  "key42": "4ZV5Ai7XFBEx5r8kKHHK4PbeRDFBkEUAhcEREXNfUYjj9USt1jX6zAvmSwKg9HSyR1hyTZtuVSTBQs2Y7RsAR8YE",
  "key43": "5LMkXDZNdWRE8StCUszJtxFcnH48vPzeSRJ7gt4F1LbS8bwCNuycKKiMHFFAY3bdAceHuSD3um3ACtfu2w9Ni6b1"
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
