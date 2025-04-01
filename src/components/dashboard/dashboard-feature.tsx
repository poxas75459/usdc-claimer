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
    "3j3n1139jeuU4AMaQnbZnuJm9PfGhjyGsHf88LVSMY943WiX3mvs2DTVwcsREttWHenN4k91QXpo587BxYYMDHKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHRLRPBWJvAcxJUmdXNc2P25eoN53FfWmu2p8GdyKR8bSUaQYkFpnqmDMRrxi54kFrXVMAXaaQfatJnsoTU1TsN",
  "key1": "Rf1qmtxTVVoaShj5k7BnXbPvG7BAgStGrrHPJRKw6xpy1xKhUUsus7HHWGo7fsQDkKBRkB81kQyEea2tQAcVfy7",
  "key2": "4hNAiKe4S1gFCMsRod2Nsr8JmyrWFCDR5pcMMF85bjRUtWSsL7GvPaJ4t6726Z6E39NUX6FE2DKFYa2VMumbNbKB",
  "key3": "4ydV4m7kXUVif8hFubLvnmB7QCRYCTas3MfpS8tUAoEy6mnMvbXEbwdicp7Z9TiQziZ5rni7pC6NYwMVWKEQwXB5",
  "key4": "3DJ74aagSzyboPSviT5gJTzvaqpx3ziDdebvB2KHkmPgHimdDPos8BTgg2nrs9HTiUiMuwxMZ8zT2EfrTd6EfSd5",
  "key5": "4bC5FhFAQuod14HXo412uJwW6ufVo9rQ86cdBsg3DTbP5NvFqhXMc4Gnfj5hw99XDHYz3nyGeTMtKtMMHyofUawz",
  "key6": "5ecd9h8F8bT44MeD81rHswpLQMhH2Rowec5P7fe3FCemgHZL93B8esmAJfMtmJhS9Cwy5PsWwtixzLykMSx1SpSK",
  "key7": "3BrufmkmEgZdmEM5JYV3VHhvEn94z9UqwAtfP8fj3SAUqZQoJ7Ldc9A7FL85dXmNkGvo3qLrVkUR4dT2g8C5N8Gn",
  "key8": "4iH2A6sdxBPPiPY9cTgyZDTkJFDyk2kjbBPR4DaD4opbq7ymWotoCHRZFSw3MgnJbEzJJ585qVRikXJbetiRgEFS",
  "key9": "384pEGUtWZbGRFy2kjGj4GLhyLanPDzwyXoTuF9BnnmKWW1hLHBGhxa5DGqahfFt8MhfDMKR2P9v6AihfdE14VUW",
  "key10": "2JZLHiiAKRx2C6GUj7EYkBQLnyXD49UqWBB7wQJaFU1RhWj1QrZGPSFxuoyLvjRxsMqNDWc92SqRP1MGYUEvts2",
  "key11": "5kcQSdKR8afy9yJfVi1nP2EyNciUfRxJVL1RvGZ52VvgfQR58qgZsKpKmsojt9Bjy1DhsDGxXGDv6TSjnqE1oaiA",
  "key12": "4tGFy49jKqU5FGJDh57AqxANxxnYbnkGwvJWEkSRtSwYf8sW7Khsd8i8Uc14thQFxanm5yWF9TtS9nM4edNbyTXg",
  "key13": "n758oKDzypTYGX2KygrKgXMpZnsRP1ixMKsT4qUVS9pyxD5ayRFfF1fMSQHTPqe1ixWKNxUAwchg3BdajYDBrJ9",
  "key14": "2HaQuCZHphaPY3U3KEYCjhHexaXpZWJRwWHufRrtvRTX5AGvkyKy1oq6dgZ9H639apGNMNi2JCfZ2VCZj6hdAXaz",
  "key15": "3HLMiDuZMxdSEDSLAKGThpSC7pijpKBVkPjFwfHDr5zRJmSfRH1Kg9KzJ2AJCEev8beT2e5Sjtp2ZG9Gu92WiSFL",
  "key16": "4rC2XrwjCTjES3LFWegAs5FbnJYQdpDCNCRDYG9yNPomkZT7iB7M1MMRNLHqf6Bp1b69dtAW6WYSSx4CS345J5D3",
  "key17": "52AZ4LEKqz4yCodrN2GKuhvf5mtm3LB8178WnJDJXDP3QuhHKoPnkYvudZazsTUHu7W3W7KcLjw296jVuWA6EufB",
  "key18": "2CGhfcGawvw9yFYuVE5sXSchtNHGY4o58Dhv1Gfkobcv4U4iS9WpxPJRevFMGDvd6MLmuHuX14NyyccXyMAJtmhz",
  "key19": "32Ce9b4xtd79P4XpEpYiphrjr92irwtEAU8KPmCqpW2CkKcc2yzGUuQUsEcZd3ztNEZnkPvxjEWZHGdJmTBLFaem",
  "key20": "XkVbAoSYtGTVBi2oVRpWTHXZVZdyME8yjtRLvFsqmTWfDxN77a7uBmygt9VF5c24fjGAawcYUwi4zWb2yKc5PKz",
  "key21": "hdQyZQUDUEjQgKixEUGWEQ6gPa1HqrhkUkLgkBG8FHPbhtRwSga8JQLJuaDoTZnsMvHhuFLeXe5CrnLTCXVyR5f",
  "key22": "4FgxM1fedHr9LLfX2pMdMhumgjN6pArHjxxauMgPLsoTGAciQ4RyS4YTn96xUExFyfewpNLVnVcAPs81ccPzc8C7",
  "key23": "5SnmgXY7u8McMssN4E5EdSMARHazQ1XGEcyT94eqiRui4J46ASRkeUXFsWeC3oNuyrBpbZ5XLmDcyKHR1WGA4CHn",
  "key24": "4Mi7Z2miQaEykT9SvMe9dpgRNVwpwHX17Fc4F1fRKR94qhNfDGTdKrQVQLV25BPpvLsydUDvqoKswjZZK4k64VaX",
  "key25": "3RxAWWDKPf752xhbtKY37WbRVRdC5uCzU3Bf5jnEX2etYMk18wquxDnGzefkzV4Qms9en8d3wqs2PawztYcSDSTM",
  "key26": "5fkKYvyny5mQJnRG59HzzHS2Nj4DT2GgBPX2nqo7zzwz84aeAgF7Dv24t7Gy3TouR8xKsgCyWS2WpfpFdk5AsVix",
  "key27": "5tXKM3qHfxaTKXZKJtUYjpWpFju5KRZeQeEaABBXHd1Z6YhTKUcZsJoRyDj93PCcarqd6uYW8x8bQVudQZMm58r3",
  "key28": "4HXJxQMJgrqu5BRyHXoSZobMcdr68uKK5tmpxedogLMGuj7z6zJJziaLogW4ybYpeHCojepHLnZnvJB4cNRzRvfV",
  "key29": "4jsgN3nQTphvdpJhGed6wEYS95xSYRExkLiTMJV2Ma9vPJS5qLwBQUv81Tw1t79rYsqA9EsPszarw5UUz12dbs5T",
  "key30": "3abbxK8N3KBAxV157kBMjoJjpAzwcAkCZodeuYuS7WoZyZJKNBKTGXPePVymTF1vwrWxFvW3MMeFP33mfEqbv2a5",
  "key31": "3XfJbPzcyhDb9QSAdKRcjLvfhZ9rukbfJx4hE6wu9VY9RnS3dtrK5LyjRgDWpc24tBqBKgS36h28WBRmS2bU1PS9",
  "key32": "5N6i41dcaQC7Ziiwp3H9Cg4vysCM9X4AiedDkk4VoTYXuwisWHH3Lg3NqjUH2biPTeMREHV4kvLnBmNgPVqmZuQA",
  "key33": "X6yCMdK7WXDcPk4A3S6WfP9YaBRn5sbtiRNPr1XAH1HikoC7chXjZqfpR2rjwGFgrfNbYrVNbpSEky244FqsUNM",
  "key34": "mpWAL8hpVamxhDnUpsmcsUm8pqmGgQmrfoR8CwGtUNi4dWHtfrgiW26DosWV6EC7Fuav1ANTPfrhiKgkJJxxu1J",
  "key35": "LkhprFqjecX3XnUUAQwQ2fmj68q7DkkJHbEw66YfPBvtHDduMWDMEGbvwMCXvZk9PUfznuNsMCNX6RQ1jha1jDB",
  "key36": "4rMgvCaV4VzxAnbZwwr6PZz2NZ7XKWcFniZQ9xw82mdBdKULXDib8z9tcMfGYsjF2CfgWaHeSGnPHNk7zWHVNAks",
  "key37": "3nb6AZRtr8E492Xz56sNiSi5nXrhGZJR19D87Lht2YZi7kL5i4DRDcuijg1jGZqBJaFbWkqbNHDVGLzrv2ENnj57",
  "key38": "5tKzszYtR75nPAFgLEaK6nDrZczusyhcgHsLZAADNeU4dYCP18VwUxq5ckV8JSb4icfbMjB6GrVcUEzxjKfJf2PT",
  "key39": "YG8JB3GeSv2hYvaoTaY7TfMEccYocW92ZSsB8fENfzTRmpdJUWtFf495brADYfuBmvk8sVCaTUShUDFSbxgh3Js",
  "key40": "5zWvUaPY7HR2ZCYHhjGmrLDA3FG591E8yaHq8mCbernYCfeEk3VrVbRkA73z2KkWGtf9SmF7rVR5x4GkEL7SvvyB",
  "key41": "3AFuh4sbE2z7Pz8Mc3U81eT2CMmMGheQZqujAyW2oE1GCptVvoWk5z3ieTXv5p1gVXr8TKntM3hxH7PgtA2i8ACq",
  "key42": "5ECBissoUP8Rj8iDwY2ZX2QSUFgYAXodM8LYXEjsEQ1RQqWHsZ9xtsQC9fEuQg2sSiaaBXuVrP3pCpY6CfGNCVEg",
  "key43": "uLrfwiSYGwKxvW75LfUEAy6DSoxdYvSLL7R1WJBJUgDAHNhSsA6dHwuaPV1yi3pT26mhBQCxE4dzixv4wQZpc26",
  "key44": "G8TmXkqUDu5p3mxy6oqXhUY8nSYMJtqvAUSXYBg6kSyGRzWKQpNcSsRsrZuiHZV5CN7GYKXjrvBjWMGQFy6xbfm",
  "key45": "53hpy34rjPTH8oZCsKFAjb442NwmGakwGQf9Ddi9YKQvNVSLjje3iFWtoVHejxncBUR9RFGU1kEbJKnJ2pW1uWrP",
  "key46": "5CSxt1BK5gDxHpC3DWkehUPCgE1YLy4BafFtW1FK14US3ZNNTTFc1n5vj3LgYNKqAn2iyvbEY2WCVnYDRLKTvrBA"
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
