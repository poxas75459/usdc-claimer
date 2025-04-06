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
    "5C6Mc6UCPJCrinhshwzsjfisz4jdyf6VA2f6Gf5deF2A1mRGeHYE5J2aMK5aYXfFwP9qVGBDzSWg6eA8UBDbZjRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQHz4kc1XiJUT2xvtNZMNLRWWtwNUs2XN4eWmWYnrwmfLrs4Bh9nS8MC6shKE2My95GBDwc4FdR2zW4WcPo8KSQ",
  "key1": "3FtagJuB82dPyE2Jp2z7DGEMYppgKwLm4o1QSwJZZB3WdgzSeo6gF1xQZxVhGCgJKcyZL1xbgrDbjw6YDTvdb5PD",
  "key2": "2TJiqUXCbrrPMrHdcMQdDsT8y8pNeyA4oomuCms6vutaNDjS1RvFnaja9LKqZCrGeay8EfkcnD9izyPtmsS7zGN8",
  "key3": "2Wq2iV4dP1enaa2GtxPUBdr67Yno4QXijvhYdNPhbcoapw2vWfKJZPVNrzJCSQbLhPyZV1SydCijVKBcL2Wc2cHL",
  "key4": "5Yyofy5tt5KVApAFte3UHDrwk1NXJycvkx98Xu5GjyGgtsvr3wHSEPW39AvGYY7SVUR2dYEAY4PLrHtQ5UdVQzp3",
  "key5": "3aM6gYDYdU1GoB47jBBWSAtHhVA7sU8Y74LtEDo4BMzFQPsU9uvXn2UNSxZiAdcbw6GxdgAYihAWkcHCdVVRK2Qt",
  "key6": "yejc97apKqxTs9UduSaNGDCNVmug1QxfzMCE3YJCqpSdQgxGYpcCwubRv8Pq2EcrCb6PYkw6v3WmRhzMHPpBHgv",
  "key7": "DL2dFm4epRgsp7uNWRekwHTSCUA2gbzcjbZPMq3cZYivbq7UhRwjNfa6MNNN3EgwQZaGstjnT5DC5WRSrebvapR",
  "key8": "3EMfr9igz393jhNZ3qfwUnEBuAP9aSPPzCjdTbtBova5JM5LH4L5zsCna7HSauRoBo82w23JQeA3cbWjzHDsamzn",
  "key9": "2G1FHfXVNW6vojf54QFaCcgkwyqstoEdEqzGvbeGUUYytJyX5KNti9SD2f4upXHMCtj8yFUXCiji4rfaYb9n12Pj",
  "key10": "7rzwFDRZWku8JxNBsyZLyByENitT6nZ8AoFEgTRPUUGBXhwsJqD17qKryJcqjwixuwryTVw96659XhdDvSFESZv",
  "key11": "2Ej7uZZY9Sp4qEKMZUGMvfd6EqsjsW9LhGNRBmTApGZG3dMg4ZGYjJ2kNJqs5hi21QvN5Y1kszcLTEqudyYeRdDh",
  "key12": "higAzUpfBT52EVwyV6iuXBfPGfjhkMDtp2Q2wdPbhrHbAvVyBZhpqKbTN5WBhTKmXQLXEqXTXaukWhj4MXZoLAL",
  "key13": "3fkoDqyL5fn1nTeiRgEjUrQX3uf1mPKm5jsj9qVTMX7Gp4yxVEstkBuh1ju8k6YY6ZgzzBWxoJ6F8E1eY1rW2QzP",
  "key14": "5jCCDgnSRNCYEh85KB3TdQn822qAcNznGq8iTPmnujeieWfoCvviN54QGogF9GhXrkTKyr4rHhi2z7Zpiq8G4zS5",
  "key15": "4kiagW1ejaAKeJXfHrL1QREEGHoNw96vyUaesMntUm425MVQQnn8AfXnYXuEJbJjEsqwoMGVLNrKvtzR54KjQbXr",
  "key16": "5wKhnC7GUc7vTNHqhd9o7uLX6NCpPbsHz9cmjvsgsNfbUvH63B79oypbqDeS3yAXuAxkyXjAJEU5Y1qgN8JXuPwj",
  "key17": "4M4yhiFK8mt2as6MWpDETqP8ue6ursrbvkeK3V94AzDnEBRzLtwRAhbor4SVP8BFn2N6gVyPDHKwWmR95U3XwMdX",
  "key18": "45m2jsP9Z1615v9YpxiYMHNf2kUvZXgZiX2mfpxYTc5zhMmwqjCQvrUcS73CWbmfqb41o8K5SPJKU7VYcFT5Gqzu",
  "key19": "3JxcdDhU7UkgS8KhxRwxrx9dXnA8B9hHDxE2yXDSAbfeatUst19o6TwRtGMNxj8CuDvYkcPez4AaeV562UV2yxGB",
  "key20": "3nYZ5Cwnp7GyT3gjaTySs6RCMKn7YHjiKsP9tWfpXd1aZhLk4Qx3paAYqicCkE17ffuxJyk1TF1qafUJ77F8n52r",
  "key21": "4QQvT1G77QiXqcCYuaR21Wb6JBMA3TxSs8Hub9q37Q5e8mBFtEmetAumjWgm9wSuV8GqdGrvjnoiVWXoWo4cszTC",
  "key22": "2VcWzsanMMTcwUeaZvMjUYPrAiAQuxzcef5R1229Az4NBfZPZ1g5yUWsSDusgtYnwza47nSeTGfJqhRRdD2F6do8",
  "key23": "5SkK8kMsWJD6rsfhNgdtCBsAN2iZeoQTdGvVFZ9KX3VuBTwwkMhboDGhkpJDZbdBNq9F4fJZz8k55y3BzJp3yFSa",
  "key24": "4aZtbEr3i2DMTRGPT59wnGspBM6qNPSLohjBbyHdJEFDK3YNngPjoXNzQS4623nh8TuGuKWqxy15yNhsUudc49nK",
  "key25": "3yK9poHGr5qj4CjLMddu1U3RhYSk7shDkqV5xWPkjTeBsh9UWUzCVQdwcu5HHePm2wro9MNQ7S4aR3xzGFfGh7CS",
  "key26": "1AoqMbHAyVtGWt4BtxZQXebgDBZXs8doDbPHYLpKbW1dCX4C74fHk96DaPRCDqPafJu6VrUWyAMiTMuZt8KtFHS",
  "key27": "3K5c3QYcdEcaG6XuTYNkTRxSScqH2TKfTSvwaVXNhkuLDNYdL2SMp9rQrZMGqNVnFjeocpz62Cq7czL9ous865kQ",
  "key28": "5DS5UEPNWsCWu9kKNZpSb2mWyjVs3HzWG6MzYpLsb4uT5E736FTmkNhMGkatiwjPxMGCAjE532f5m6aLBd7QEzTV",
  "key29": "5KdT6dheLj6fejz69teCUfmvGVqNse9ELixnQ6peqF1Bk7rRXP659M7biarwCzvxekm62eR4PQ34ptotVZiz9aL2",
  "key30": "5xVeotALB1cqAGfZ2TEREEMSFKnvRV4EKG7r94zQ3txznPbojQ8DFavSnBMBR7fdWGvnByjzioYZw3GkzLk6rVN7",
  "key31": "2kPNuYPbLXhF1utnk56hpSaBfR3WfwyfZRy7DndRWqeJPTHGNYTBZXDQ2c83ZzuiJ1akRDL56KxVLmN2h6Aw3f3y",
  "key32": "2phXUZhkL9gFB8BLu9Lfjx6bLKiApemoMgpbQ3QkUm34gb5jV53miEvR8TqHf8zuenNc5VmjjgqywcBXizNnQ8EH",
  "key33": "NmmWQBYu4cCSiahdDHtnwLxKTUv98dntV8m8DjfpYvMtYVSKHnxbGVSgjnymLntZGDWf45u5XiLuAyw83R85iRj",
  "key34": "ar2E6WLX71RwN1889sjPgpqt5qyhC6epiBkyDAzu2vqueqme6VoqnjWQiBGucq5SbUJJ2noh343GEx9Z2LUcnLf",
  "key35": "5xRSeRK7XdXc9YfdejcdSercsuVXuYvZRkGQsPKZGsuvJXxkYrsn3VZ53LArLXCB1K1fwHND6Cr8yeGVMyRANsHA",
  "key36": "5yYxRpuxQGyqF3u91JjEnLqAHuf63E7nbpyWG8q2dGMAJTNDELtdbA6Y4bu9DKnWEsBj3A16cSjRSWw7FgijEcaF",
  "key37": "4C65s5kFnqg3akwyxmDekZfyJHdcn7WBRJUgW2nFLRauzUFpTHuKpBBbEYQA47uE7ggn12H9pXZUehNoYmKVeaos",
  "key38": "5oCVseP9C1uh37Zi53FQxd8saB69YpfPG8DBfdPe9kU1BxLMXQL5WgDvSmP3kqTaEDfM1mPwfaHU4R4VdA6bbpKz",
  "key39": "5k2Fergt1gaJiJGtDkP4VKo5BU2tp6w3EpZ3qLonLBfd5XFGh5LoFoRqsx1ANjP2nzG4eY32waCsS9pz1n3LSxMf",
  "key40": "5oBGQJwRBCPHKLvpPsHACScZiDeEjQADZ8uKdgENt4uM1jJWrHZgWEYmxoysubbTCMmDbW7sb9riYtsaSRXwtHCG",
  "key41": "4bQWhLqtqGHbqSC9R7So7DW4jSTVkJHvBMnGY68Y2zFm9qZKUeCGZTENmZt3gRxNfj9fcTFai1EzhgSGU2oetP8L",
  "key42": "8eLZpbkJF7fGFLSsmPjJ1CLVqCpzwd17QKecamGErWuRk47ZCgFtKhRzPqZ4bjRo17BqSqksHzQLP53kUw2mm1B",
  "key43": "41g3BeXzroSRswrCCERjBk19on8wHZisEaTJQCZwao23EZhaFjYzYDNVFB41HyCk822EqiBApuA3AmetSFJq7eM7",
  "key44": "Ez2W18SU46rSHwcgQ6FTrPuL1oD5qr3AM1ewJtgHdW9kKfEitHjJ3pWPX5aD2yq8F8pZUjgk79NSps2rutBgXNs",
  "key45": "2TSrmJXqGNr1RjSpH3r6oWHD3smfouGv3Vo8vpw58BCNcf23mDCbLptuvHWp1rxEDnPbdY4qHFqvRLMDSJLCAVVL",
  "key46": "3dqWg6aUJ9WCFxMqSgpHmjoJAqdGijk4yKF13e8fpHUuo5gZqGnp4dDKbi6mvkRSPZo5uirhSiirBPAutwXnh3r",
  "key47": "5EfXnWc9Ewzv3aVpTXLNLddDA8wruUmm7cUsje297ofnzwhVQzWGxigMshCzGsL25kihgcwe3UXPAQp8HTUK3z9i"
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
