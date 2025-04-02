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
    "4z7G6zFFerXhf5dbhafZ5ymEUeKr23PKqxG9NQXhn3BYjSTiLGhGJMyXYnrUrydiaJ5855WxEBuhqGtCzvma5K6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hN5up6F6Q1mHwUDDwWGqvXygn41c43ZvKfqjRn2Hx6cY7deEX1dzdFzD2vQqVPSonZK4rhkz7qL9UjgsHbczEKd",
  "key1": "2bLVmwXGHggqpCfhEKfFZDJXLfFmfrTPhrc4AjCHzzKhMnSDCVSqGkswFTuPuhmVQFumjFrck6qwUTf7menNnqHw",
  "key2": "5QijgmsgqUjUR8dh58g13VKYWwFWGt5cTyEjw4tFmMtMM6QCPhMh5hexuc5TVFTFshAb282SjWnf39ZYMm5fqVww",
  "key3": "u2wsUavceWqxnUSTHJYbxgXVjNzprNf6k62Gc9ECjvfP7t7kvAnXdE4NJ3M1ahL83YKLbAmbP14hwNvPfZbEmFw",
  "key4": "S4ai1C1Q6iRoyFWnDjwWr88QujZHKF1g9cqDaunHkgEtD4ZusWwif38B92eYQbGMXQgF2gGuCNdEnJqMnkcV8qK",
  "key5": "3TfzPR5hv2QFHU7aTVGFHxmeQ4NrjC54UtjzPZy6JsCmczZMotXkgRk43kiEWJDMj5dvzuwQKv822Adv3N8Je5rX",
  "key6": "35WJxDaui2ma1a9fsz7joL6rRNj7DBFqJy9R1yKdQmEkbYxHCG7GXd7MUEBQ54xtA3Rp3vedzL8SZrQxPtq2Jbsf",
  "key7": "5AQ7fCiUsTvdnRNXNqRA3tn6vgwwKPH2t6CCR3NEy1hG4NwRSkNHFbwprsd8ps1RX1EU2GqKCnZJL9qRxD5htfkg",
  "key8": "3UQefFXyEDnJYGp2kJcJaYRm52tYAGKMb21GQyDRHfLVafpVWky6MRZBUWsu2GVrHrwcZ1W8X8pNDSSKXcgZmdza",
  "key9": "5cpyfNLNgbgx9Gv89j1vrwF1agGAMP9KrCPKA11SbSEfLbBrVzcYeqFBpDewkne8LppMxPuZUfkare7ykRRqXPtR",
  "key10": "2uyTsT3XQb2osFJk1i5xvzsuPcbfxjeWvAyNhZfoirXdnRjepaE6VCzpM3PQf52GoSKZKSBqMWMKjKE2PYASBptT",
  "key11": "2DtyvMMUVCnU12Um8fAGnBSNBKF6Xs9RoCSxxGYXm1TvisSbFFyTrefNTSR2mjr4ikJDaKsGcPWhuhqP9mZ1WkRf",
  "key12": "omveJbJoTUMKpZni6zfmWRg3ypru6kmd7v2GUde6a1VxTp4tUSKTRT7x9XQYBwccURsT6ehWg7tMPMYiPbwfD9f",
  "key13": "y8LvZ12we9TE9NF1A9XhZvfjP4GcvJ5eVdBAxJtbgYWAqiwjRegrBCoq3Tu5tULjEEU15i6nPBevjkgaMcQGv3D",
  "key14": "5YYH1aYG3CU25sCfPduPjkkUsCAwqdsdprB89cGdbz8P1AKrtnJ7AATwMK35tHip5Y1rwmBkvV7YnzEWQguBVZM5",
  "key15": "5Kfq1dAebDDya25icqR4GywCoWUzPEnsqGTubEhpZGw9TnESLMfttJ7QAVLvoXS1wGpc5Teck9eMGzuBWvtMjsXa",
  "key16": "ZEnSguTrdpLHNK8BYogH1LHunSR3KPAcdHThGjk7CazAjHN71akBpkuJFXZK876oNN7kWE6LTair773BA4zMaZ2",
  "key17": "2SrJqEssQXwifYbmGsJdypEHJ88fRfYRhgETB9m4Rv1SqBfdrx2YadEyHFgYKDZMD1HDT3uyREyUERE2YwjTuQfZ",
  "key18": "2YB9qMuTyy3mJCXrcVy8T8BHhPGwMGgPMaC5zHw2WLYrNtBTJNJ6GUuDQ8o1F5KwsCvjsAxHCS1ALEBuNZcXnvDH",
  "key19": "4htDA7UyANjxgUjELrZp9ojFcvVeAg2tkSc4n1HeUNUxYdUs9XhEgUy6G14uUZE95vCZZ3UZrZCCgvSUJ4adrnfj",
  "key20": "98CP6ZMFz4kXjuXbvjzxLG314atBF9614eDrme3YfrKe7PeNUSJh1rMHs8yQdmnJZLZJa1ZpgMHoewyEJo1z8Pq",
  "key21": "4NYH6ky93M68FQ3auQLeRqa3bW7VBdDQQCEMiyuECUg7mPW54mTqzoJkBKRtg4xKJ57rLGdvyMroMvGt2fVQ9FGi",
  "key22": "3G14okcxs5NYGvxBNctufPt3Hdc5CHUDNz3aLGRJwMvdaWELY3jKYCkGz6rQt1wMLzez19RzuZ8eGKsRUNVtftBm",
  "key23": "3w2wxR6xp1pRR2YrqdcsRyi2CWmkdgJTiCrpVNZKE1z6Ep5oxXfr7qMGNmW5tuJjA4dgKgZXwkQr8hR6PDEs1wGp",
  "key24": "3Z4XZBRZAFPRPrMtVc7ZvrWwx9ZZ6bxTCSUfM8WoqgM8SHnZrGVyq7gX9ehbLFcoNBs51sTnp3GsvXkWUzyNQFZR",
  "key25": "5UTpDWS2S24PKcGBYLiE6dofGcydaVeU5Gx9CMma3TT25RYBz9WnBixPTwqhNkLDCjQREHUB3ZDe3PZvQhNE3YQF",
  "key26": "2aiyJzwQxNHxwiW4k42xp4PdZ6wobpMw6GrwuEqiuDH1QAH4k1hhcw5m8yZhzoBLTNo5jgNE5S88jS2EkLtEUquk"
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
