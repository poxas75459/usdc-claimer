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
    "4SNW58XEwkoWATo46XodSsQfDCUHULRUAySMqZG5ruz5eAqCkwuC4S5oc4BV7CcS89QZtMvq1qZbQ65GH6SNfvMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BbahmezFbAUghB47SoR9ztcy4wGwx3tB6sdTt4tc8A1AcxzDb9mhkRK3G7wz6GwtjUzbeoY8DE2ugZsoLcb5piy",
  "key1": "2aPPGM9vsxWz8Mi2nQMWbRokjWBQQg5jrXADgCH2cCrD94PeraM3Y9aPtSjAdK3WzKSuZoaWGwkhtRhXQXbiwg9x",
  "key2": "2MVYwFgCb7GAgrfG2VG4p6nJYi8RjEJqQZHhVYA2j1ZzreHffjsU1qgrTn4wf5LMMfAFbeDLW9AgzNt4jEPoMg4u",
  "key3": "qvF85wnnCJ5CVW62cG3Zs93chefiE4CWTvoewjGskmrwnPvAnL25KZ7H8k5wCem6voDBLZMQNf58rpZnd1iXCEs",
  "key4": "45g4hhg3EjpS5PdMz44J5PnC8UNVdzUghT5fofJuVsq5ZmWEKu89oC2ziwunafnYGzvostLr7cZbjYKsucAeaTfr",
  "key5": "2GckY9dZXK66WYQwUMVdi5xTfjnJucitrKxNBMzEYH4ZVUQbe77582uYcMFEmztcKJHYcbufZWkmPrh3S5QxajtR",
  "key6": "3Q5yFoHpHe9Kz6ytVjmeZfSER9HB8UGmakG6fmTGxTvznRwsNv5whBB3WytofP4NHLiD8hajY7L3pQwTHtxXuots",
  "key7": "2oiTrqL49yFAid8TU22U88ogcNwhNmimYwWXiqfwhgJZBbAGc9h4XeFWm1fYeUM8JRHB39ogocAJ2yTwspccCXbG",
  "key8": "4kiCVBmp7GzEw5XtZXVadha8q3VHU6G4RskwToUsuNCmviR5DhiFUEbPcpCT86zWcAXudSmdQeTV33XbKjBNdSvT",
  "key9": "4i2dPgjbCZ524YNB4GSjnwygXh9xksw1APVuuPH9mMT2sZZbyYy6toLjiSAZMuxqoh1nAmTAhoKWLpEjq16Te1KG",
  "key10": "3oJcLvdXvgNnPNXQP4SiezFLDb9X73UFZbiKn7zon8ZimHzGFS9Y7ujnMp9f3eXYFP7NNwmJBf31e5kTJqgWLY4M",
  "key11": "2MQBfDZoYaf7cTeMYjisroVcyc7P4RwN5QKsmUr81W36QSGFbj95z6ias9PekJMie8Cf8VciQt1dhE2GvVM3wmER",
  "key12": "CT3KgVKcwdtAPiWPZe9bR9pNYWXpNVLc3EEuU1hRze3ocXbvTdUGViTqMYNovEENsPjtuXcVaTntJDspCMopnZg",
  "key13": "2SNhN4xnJpWg5NzESEbSVv2Zi98mgkzXuLrrp7Dy2XCx4oSN3VLcwGSfLm4D7B1g6ob5BqWVMC3ZHFDSYus1vKCh",
  "key14": "3wMafnM8eiW9D8wjDN3mG8T41vx9NE78aFLTwLM8cp3MmxYBnyERedNL2nwwqP46ZTzaPPMVzPttgnJa1fTpb87q",
  "key15": "3stVFwcbs7556z4cANZ5bdh1HQDwfoqPt9Hm5fuK5px7XzCTLTtdFGC76gCZb4ttc3dvTUtVSQuQ6jAmMkdfXwvx",
  "key16": "5ZLqsd7pD8xZvFK2S1VVj4qEYujC3SFgdnU9Fgs5bogqMPxsYA47J4iQ2EnoLEG3cc7XQnYu4tQ41DmuAJLrHFiL",
  "key17": "bqB4dXcfGC9FDj4GBeYcC975xViAJYRP7kPrerp2W6LUmSrQstz2ogq3xmvKvxQsZQ1E2pH8izGwsEpfkqyxk4v",
  "key18": "5V6G63z7Vrt8oYFg1JDw9FRk9TZnfDY8au2sDCkHL2novWZmuK3oWtScA8wK3K9PR4gHymvTeYpX6LqJLYS7gsV",
  "key19": "kUp4HpVb3geVYbJycZVqmLns1WnJGdqhhgnLg6782T935qcBHSMh87KSjLmLUmD7PwnNf4WWYSR6UEjyxYf13ty",
  "key20": "ZdK5dQg3a15BPRFYspBDFhmX7QXfyHAnqGkLDi8VMCyKnNXUoEc5YczzJFWPN9BQ9JScoYoGWf25262icixdTtN",
  "key21": "3DAAVCB2bFNe9MaJyKB1ueN9U2jpMF5t7DJXPmKkKJoiPrnEgSv4sBs6QPkWK4oCLf88sThSCbjYmHddghnEvNjh",
  "key22": "3VUs63fNAxrdpvqaRkUFKNQXJazLS1NngEhRFHC14EaJ9RcV2Z2LdfYCx8mg8nyDzahBAuusVr1GihanZcmr37pb",
  "key23": "2XkspFkkCx5WUYZnSNSnDxLXYtbeofMZSYS72iLFJxd5SJv4KRkxrMkUA1JdDPTZXKHDNLstNSzp897npsbmhk5G",
  "key24": "5gUXDm8rXTTCurfbosDWbj2RVSEWUZ9Lc6m3dyto5A5vFrS28KYySVN5cdsuD13SvEaftkVYhdZsyFHm1ka1UxEd",
  "key25": "3bx6irDPoocKqADyY3wPgck4LKEJG9aDK8mUUvpL22Z385TCefvyn1eLG9stLdebzJSiafoP7Tz5C66ro9rvkknR",
  "key26": "4YPnfWFMBbwZ4eKccpSdFrgqsTq9gBiN8HTej23rwd33fnsojWFGgzEr62ztV84QnUuHLuV7JdYjRdJkeqPBCMpK",
  "key27": "NkzGwNz2ZYARjjY3wY8Xg67Z5KmPY3vHhTVYzrzmL2yDwuccCAxFLSKww6zdA759AvYsqPyz4Mq7A1RNvVs6LfQ",
  "key28": "54k7TQ13ujHknLCn6LMC12v62VQAbdAMnCBwS3UQEM8y5AwtBpvx8cNu53riZBnkqq45ksp4UELqnF6ax5hN6CU6",
  "key29": "38qEaR6Py8Kyj837kQonZT292D2pGsN5WtVaodevBx8C2sseEpcVxRdxeencAFMMwpxzbMWvUwm4NssBKcobwS2o",
  "key30": "2gYvskPiuGZjnnK7Uy4NPmTSwevP6zs59KqiKco5PZPCjNsG7MRA4shV22cjZXFzR5b1bQ8jhkZnFvLDbGAQVcPW",
  "key31": "46jdvC7yJ6hgWHz2bYWKPD2gVyuJsLTeuuvheWMUueevZzvpZbEXkV1uDhEZcffJDE5BCf8ZamaJGhpHgDxgQ1fB"
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
