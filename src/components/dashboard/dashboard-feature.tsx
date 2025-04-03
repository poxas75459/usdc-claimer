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
    "ZZL6E63VrwLcieCfRXJ5ez4A9AyAbNkc6DgRVJeQqYnk3vfMWwNVERdJPRWvZnFN6Vs4uWCqMhLCxswDF7GeHAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwVSazv5hZxZ8yqQ9XBs2MMYuKqn4nn3kGgzHQMzEqCvv8XzTw8MRGPueU7iWzDvcr8ezfeFfjgnh2Rukgbrh5H",
  "key1": "2dhDxhtTCnk1aJM6ZLaQCQdxgpvy3B1bHidF2FKvvtn6fPfLLceXHrqHXhGS4rmMKUBPX6xPsXhU1XT2NmcfLw5v",
  "key2": "4kjcUgXKoMocWAkGn4xJARpTxQWdb1Qhifx48DTeerQF3eeQoKf7ZodFwNADgjGZHH7covbd2rz5RyXTemiZwV4w",
  "key3": "5riDLHb5wEs8Me4MyahiGMpTvBmq35niDizBGkBvwrLmEi5dM7ewxrFWEjnbKu8hYb4PtXJ5pWADWDrnsSa3oZot",
  "key4": "3qS9PCHGbCnhjn2izY6hxT8dSFBzGw5pVv4WQhLtRgKWbTEnQw5GdaaSmchdpKRnt46thndEibh32ukasthNXGZC",
  "key5": "4tseGryBVmDpR45wicxhK4ubrC8aU3xFSKuHBvpN4fw4dMJ1K2NGqnu2DgM7HqJ4nsYiUKAT6EAftaoFXZWPHK2B",
  "key6": "5eDhFGP6gKNmazemvGuEY15wqoT1n5FJjVieAopzSidZkqmdmXikTmaewAetpS5aq7iVXBJ9aciSyVgTxpMTtyGP",
  "key7": "kop5j4kYqhJYY7TEDec9ZvTC5PmLfgyFeouByA6qT22rqwaMCco6c2fbcjPgiJUhzqBwcsJP97KmHKr3Pm5vDty",
  "key8": "3zsCMTwMeYMtk3ZXSjoq4SndHvJQnT87XrKwvsCLQ26tEYzp6s8M2nA5rfXzk7JqfRdWNZ1VWuGnqT5poft2KLGw",
  "key9": "32PXFMr1P2AXT4GNo1uzdqnhYLCf8LXhjNFzMgeKiGmL9cLHwohouHofjkeVhxrQjcnRHZ55Wne4xCwFFyYhHBRT",
  "key10": "2RDvJnbUqqsMR5emhVXS3DFdc424ZKnvjcYFS7MgK1zE8E5xN96tzvitbM1GZzoLEJVn5dx2EANKqJtW4BLiupyc",
  "key11": "3dWhuc5papqBmXcwkazXLFGfVJ2by6pyr1ZBnrNrQQjUvBg1dhA5CYBTQEF5Pe5XXEHdNnmgNBGdVwTqGFoPfP1z",
  "key12": "2ZUnUVGhGEAw7AENxMLksP94oSibGYzQTv7G8eZa81EsXeN7fvZmQVTUPiumq8zeBWhgc6eS8YWqZij7w7VivnQm",
  "key13": "34jKY7o1BUszhjPB7hgiG9cnxqLFbCyWEhCcnBr5b9L4Q6HGqdXkYx64KBqDdEcKKWuotsojt7nFY1oDaGqAkTEn",
  "key14": "2DRNKNs4X2DiHCmRTycqgyhs2YfjUXu98V9GmfJWfurFaP5mNnbUSkJK2XVmV94wrKByjTKTnV5JiPdkz4tCGUBu",
  "key15": "3Pxfqs9bWqjBpHYdu7jX5g5PQm43XrcENAk2uFR8x4X7LQiNLyi7HSQk8Cm62PqwS8oQQQmgkwbLFQUTUVfyoPMQ",
  "key16": "4yRQUpUho6m2LSpH8DTvuxFKJpxiUNncygDdsWtPZaq2zVWbc7dq9oTnXTKCmwRGvcC9NK6hZjZGKCQ9HoLWHQPU",
  "key17": "4iLjoBk1qxvKPNucm7EGPcMJSAdgxW9vjbyr1Ur4p6sBvzQfry8mWGKbZtmgBSNAnYy1nJQnYjYTozTmhgoTKd69",
  "key18": "3yF1FVbi7X7AYT8ZHF9YFrRMojFmz75am5woN96GY2Nr75cGeQGBa3MuQa97GA6ddXjnmYgFn5nQTNYv23DU73kw",
  "key19": "24jc75Mu1FN5n2rmq1MLWhXog8ZfjeBiu3rLvs7EjFtaWMrrdbxgbGsUzbAjcZJiwJsD3L9QYVeiEtGubFw8gN8z",
  "key20": "3hWqVtZHLBfo1WZeqkNxUpTRYSxfCV4RPbBXYyAJY3LKSjT54mxeZ5CTvyRXYWvKGJeCtcgmLQWPXj65KGKSeG9Q",
  "key21": "45pRLa5TeNazx3cucUrGMnfHbE911sXN1UArau4wZJJPq9znz2dSL9MccmNfLinEk4w6YBhewHV3skTVaCvq9fwZ",
  "key22": "3sYP4UxHvGUh8GY1EYevjqjerPBGf2y61zKJjDP42TsjNJo4zcpSYBAniQMPBWPx7nZrrmocGvRqDrYPhwUvXjth",
  "key23": "exVgbwRafsQCUB2dRrX3HatMkuiWvhPtiieaLPUmmT9cKnRCTyp2f114wXCPGWM8FqRqwTVXSi4nh8FYfYUDVCZ",
  "key24": "64Lf8pP5gLxBM1KoSQu2x6eeRAfK3XvTnDiZdtV3567dY1PPoG4c2Py1gZYrURJ7Vx16Sy1HQ9iXMEZ2APoBELUD",
  "key25": "3vVoPMZXgMc1E9WCmMc2FoRq4PFdQgD4XcNodg65gKeckznVN7Y1HufQSmUK5gWFnDKYXVQ966Tss1K3PVH22WQW",
  "key26": "43ZXf4TS7Z6E6m5hxHGFq6GTzm7Mbwt4z6Yb8ctChAPC1wX5nyT2DznZw3b2QfkpvonaAqWacH9CabC7GfY4MARb",
  "key27": "228U5icV3gPk9BUyogjQvb3FK8j7ARPWhKBMttXP8p32kW7DCAVBSDmiyfCGgxndqALWTfnX9hiA6kTB6H56yvaY",
  "key28": "5usKkRXVJNSd7ERdpRkgQF2ftiXsVmCX3CuZccdFjN9Ce3bfK7TQmuG4hpdPLfn1pTBPYeAA61kH91u4v68Z3Hmt",
  "key29": "3dE5nmJHmJWXyPprt7V2Tz1ExXYWHJxUvPgdy8mXjDDbrKJBMRgHaPziyERg9apuD2x7UMYraTkbzfeTALjjws27",
  "key30": "4xcP11zMGcQwHxEMt2fws9co2N8K5divyDwUsLmnXycfsgzJ79HEc2oJVkUAhX2t9qKxYy4Hkukdg89nNfuqKDNL",
  "key31": "2R26roiuBz7Cm9EaWKwW7Fyda7S75tr8YJwGbCRbSEEdAav61rZJQvmwcdQYobCBNvudK3UznFrYcyppAaCVamMq",
  "key32": "5PPsj8x5a83tPFt5A1EXaLav5UXeh1eA3DW4xo12KJkbdrKAQpvmjL3zCdsCoPpW2UFY8Qu1y53guAfchrDNAsp7",
  "key33": "2NNW3oNTfC1BSX2eKWcnMaM6m4GSLTtrPrpAuMi3SZYzDdJ8wehwPhdky1CJKzaqwU1tx9T7bZFqjcwvzuEki8EK",
  "key34": "mwMG93rcp66G1cKqBq8KqqsQuRLsSoGm5eqRHU56SnZFwsGdy2pmNEZBZgc9YWM37HevB7fc1NUFJ8WjFmt3sVv",
  "key35": "3GNXQuaZbaD68iZtcqKBcsrp6LLDssn54xrkhHTVaRcThzkHZHJ9CeKLrL3eTpZFwTBqpLGcXz7c4j9XEbmiE9ky",
  "key36": "32z5a4xwwnG9xzGViPugXcnuJfRUtsRMwepryarWSAXC9Zf5qbeTzY87ChhKhApMiUt73ZPGTE85DcP1wzsvaggn",
  "key37": "4CoRHxnRsXggrkGqGa3QEwG9kgKwrqhE7sUjp9T5iddgm1cxuyUqSBDayBAL3T8uhwdb8ZkDzCifcoxr3AJwB2m2",
  "key38": "2M4PrMmxDAQC3AHeccF9xiLx86sK8XwKb4YAX9c6GeBN7ikVZLFApQmuRyfoBCbMgKbyPACkMd2hxF5ogN8jeE5X",
  "key39": "NFRXyPmxMLr4VyvmmmgWFA3qm8cpVBM8vwWhf5dxDWU5hPXSBRRsT8vtHY4X672uQ4DQQJzXJTmNEAUpE6C3bQf",
  "key40": "56hpyRNn7kcNu49ohdeSQB8Djv5EtDftrKTrzKf2xkocc7jSmdHq9jxd1ySpPQ7MRWNZgSdsXGF2vuaUEPAfMEA4",
  "key41": "5qjVdJX3yTvg1FPBEsQtpivMPuV86qnaQBxcdEBXKEHZheymfk8UyFJLs2Kmf91usZi6GUxngnChAoFSQ4jP7TC4",
  "key42": "2G8dmsmP87cAYP2WGRbB6MznaTqifzXyfoiaPtQme56zPu4Czer2imybMgkCtDbxX2zvpkXXx5iGsX1bZhifqC4K",
  "key43": "54GKTqs7JWobbJcViKHkMoQ6tY9o5uWEAR24vtsiViFznmXJj7nuegq3zbYnfxeLuBhKgkKE79fSiDgJesA6zQVR",
  "key44": "2J42NFFL7N6W9xFVAQMetGvLQ5xKaETPa95fH6NKWusimibhpDxCWU2UbzWnrYZYmkrJLafWTZTjir5zcKYwYrp1",
  "key45": "4Q8N6jUufss2v3EaV4pXWkhp3GNYvoXn4JfdDf5p9rMTxrTLBFRUg3ESyxHodmnPJtYSZi56HnU1tmWCe7mPk7k9",
  "key46": "3aUup3aW39LXznu8XFBGKzZWQUESYk8bc4EuojV2XUBHpKxvPugTtncH4GDvMjegkddAGJGgWBsLNGVRxonX4aPg",
  "key47": "47Qe7KZEL6dLhPUywyUBRMub15FBQb3HzX79UfDaEnnbHyvpt9HPksbKEgYXsmFGps3yxPajjUnh1akY9iWMBMxx",
  "key48": "21hA6yf1ja8QFzpJ8eJsuddLxcDLSvhxKz9XdG2ZQ1VuDFb2sLxyuTXqjAuJ3mbJY5fW5DDnEwBaxRpoSGZnM1qg",
  "key49": "99U56kmoAgkQeFCQUkgdz1Cxgeqxybt1fG18p6p15oGBx73Yyumjmcwz5Cns8Jw6aaK6AnsAogget5wSCVpTUX2"
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
