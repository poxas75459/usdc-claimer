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
    "5V5h2JtiCtCREbsruiXCVUavo2ccJ8TwiHGGiwNpmn4dtNibQk1VaimMNdpDuktjgWZSwp1RVtaiv7wFfotP8rCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nC9e6MkvikCsAeu7gznkuvtBVcvXbmG8zAK8f5aQDDJjzFKb7yG4wy9QkVfyeWbybDQWmjMgzGHDpV9zoEQ8NFg",
  "key1": "2a7Vo26VU5EjdakBMXmPRtEBABNxby9Ly7k4BeUszHrktQVZgxMxdDaLxW4VpniTEZC3WzZfkmKDezKSMZPMZGjR",
  "key2": "3ncwMKf14BdBNDNQq36Q5HAV1SRK8cyuaWA1ChDXb7Kpw5fQNG5J4XpZqcT5RqB2xd8L3yTf3HanZn9Bfi6rUxYi",
  "key3": "3MxNwWVoYXSBsrUhqbgYPvvkiqeZoW8NgCw7YhKAn1mgHHbMGrNM5ZHozHHFQjCe4FXYQmUx9nBtHYgoktV4Tt15",
  "key4": "22Qg2qAQr6uKEAqjn2NH3Be9PpYZTshLUT8zVB8dk8h6xWzJ7rAd2MRvxhFuDKpp9P1PnvUihPYd6eJeDjozYFBQ",
  "key5": "2sYQniHDBbEgdBWtoWpQq68MgEzJeQ5Ju7bqV7jCVFHRDvoqVr2UuuLFnqr3aMwmXuVaJ1Je5mwG1qCgKqnjLpWc",
  "key6": "2F3HFPDnh5h8hD1ZGZNGrh87FZmnFqa8LD4dvyCQKihXZ26tBxSDvig96nURrgBpukaGJoZ7maqvUv26sdE6PGan",
  "key7": "nowKR3Jhd7AYnEDc4Jsb6mBw6sE6WU7kEATc1iZFXBdsUj2pEtSytiEUQtcQ6UfM4s68LoyU1Cjz394WHZYUBrh",
  "key8": "2An7HfLqsAXdu5wKeeTpJ8mNprznahZAmcdsW5E1BEkY4yKA6DMfGpUYbf3GxVuzDozLD4iRQztqmqnVknut4dwS",
  "key9": "57uNyLQJh2AgzDyaAGCNzxdpHDye1Cz1i2aZWkSzmPXNa2nHEfBJrCQyQpgqE3drkUp2MGyfeuPgBSkMPyqaudTG",
  "key10": "3zEviKSFb8U6bUeyjGYzTjWEti65GKyzRhYc3GBGofkLuNsq5xaGXGnai9YEGTwNSiF9X9WqbLBoefmCcztjVWKi",
  "key11": "4XBTh9HQaRcZjez2GBMcxdEAAZyvTMKpTYKGWT8UTTNxFCeLEU6gmhBAUNFap4C1Hf7SAvLfH7Hw2GzDoj11rZJQ",
  "key12": "5DG5f5yYw4XDRfxFNcUrWToQe3FLq92ArVzjd5qQSCoGy76zUd7tmekci27s2WKQuszmkbFBdkj2CCFaP1KmL6r1",
  "key13": "2Y89rZuQp3Gd9gCf7ZpqhyQyJJdRe3Ezi7t9BNQw14BJrjQzYDeitvwJvfPCKhw7pDjJjtNtYmAsVyTFTNZnaxYc",
  "key14": "LxAbvpSaxKesX92TA95MbF2owfhofdRzjCswfxmvYW6unoMiAkPvzRDpqQYZ1g2HvPjUbqR3dv7KehDi5LxRSW9",
  "key15": "2q98aoe9zcGLptoGGQqhpejtzzoSX8CF562C8mcWinPZ7AFaVDw372aEjXtpFZhBjppBzKLStnknrJ9a2NREt5RC",
  "key16": "4hnTfHozYBLC3vcgjzLQWXaiGSKdXE7KGUY7Hum54QRG8XmzfVrASF8ujk7q8qHSrt5mCYbDQsC6edEeGYGjAWQx",
  "key17": "5swTFrnuYmMgnYHdhagbANrP5MZjN5rkxQY2wv2GujLHn3kU76TyGiiBRjTnXdv2jf2iJ23F7VmTGm8E7mnSGSsT",
  "key18": "5oud7R1Ba2TgjFvSCLSB6j8D7mhuPA3Rho5GkrTWTQ6LUd4etREGWYXsp6rReRPszHRg6rYRJR6kATe7Ksk2Ty3E",
  "key19": "3GRYysXb52Upm1yLp3kiCwPWt4uzXWEprxW4RnrEkCizsxU74MrrkmSgSaooMNpdDktCf5ZMJmazdM1K7mLLSP8j",
  "key20": "2fQeaJ3iteC18TEUFRAc9Kerjp44gw9MdqAgpj37MehgW18DA5dvjp1CmLAe2Hy8xeAqYhH2jeb2S7ocfJ9Wfj7W",
  "key21": "21iDXErUL5TTdP6GhGzunqtcLubaxf2wju7y1HoCKJxPH4V48R2CQVVrvbgcXaNzEksAVxXzpKNuN2A53z2sRTZ7",
  "key22": "3LccJcj1epjQWBRUye13rgWRZXCDCbiXDwybKw4ZfFvTwHMeJTaG4FdtpZ6539zfUNeVr5nP1VhYSpzR5hA6aJ5R",
  "key23": "4468x38KPjvH4Cfv4yGNHA3SkQJPLxD6sUrQBEminozfNE3v8wo9owGNLxDeJtB5AMBr6wzdarh4CSS4RhQey7dj",
  "key24": "3nBPjMoLeXFfdEdFGtmCRKsP9JVBbWCMynyV4YNyMfhW3xrYvatoVzhjtcbq3Ta1UrGN1WoXec2J9VhaDpQDsFc",
  "key25": "5dA2YtExPkngkjZar4x2nGDQ5sAH57G3x4nr5rKCZcCMdHtG1a7q6SWE3DTprR67mKBfXjivjn8TBfenjkpVgXbT",
  "key26": "3TFk66Ly2XgcHJUXEPK6hm7EuetLrsk5jRygJ1ukthiafCFNV9t2DRAq5Fx4LCkPYxGV6VchA9pUtbcDA7oyRAZK",
  "key27": "4rFzHD5To6DPyVoQe6TntaSPGXJJ8sSFmbEXJPbkKyaDtFPbJL2j3921i532B4tzrb22hB93gLSpK5c2Xd6Kg7Es",
  "key28": "3yroKAjf9F56KzLucwAmhzgesCn3fgvLo7GanrVUTaxDhRvsJjxSk7yE3WW7CzzLzVxgTPLgV8KCmp2rqgFiScEQ",
  "key29": "4nNGJXVKV6UnczjZaTvyeCxViLzfJP6KBpgwYxYfuttVBFSszaPwAfvMBaNydqzVatMAQzPuitdNrjQMboYicJie",
  "key30": "3bQHayb38TNu5pMVtxHEyvRPJrVxjbxukGJECbtaEFrDcTMWWseMHWaTU3sxKLZbNDWyPjXx3XmWEB347RCYf4Cy",
  "key31": "4k6TTE9SgntWtXusDgJKik8yvpA6eBiLp8fNrB9zgFCQoV9yDcPQGrcXbqFcL1JsZ9Jar5zxg8RDbN5rJ2YrUSj8",
  "key32": "2qtVWfvsb1YADZ6nhT9virrtyxbtZTuZg1Yx9rqN2da9dvjPAvBBYrJPxxPiwEdkBs4sAa8GUoTQzbBta4qwkpzh",
  "key33": "5XGYCfXqpNMMDHyWFoSDsdTe1VGb7JemSH2HErsbiamd158Z7Cn8EtP3r1aGtt9ZK7JouW9caSrferDJwhE7ijLq",
  "key34": "2jiqVhwhDDqiZVK83YfD2D1RgG4ctNa52D6iKrSkHDRj6ni3fkpKUWs7zxRbLkAWMAYvwmbLbAWFMnh8GsrPtmvS",
  "key35": "4mNoLPqohxPELhmpeMdkwwicgMtcxGsxUdqxZWnxHtFo7nBFokcmikd1XHGqYJPc2C6Y1N1iL9NR7NyHWbNyiqTf",
  "key36": "5xwTjdQ2DTaAYtwhqJEzyfsAi762brLaCAtTHYwmnzZ2eTepusv8HCiaTemQt8LkbbPr4iLwugPS2AfECZBvvPos",
  "key37": "4nQUsPzMArZXDDqCSEnGCx4C35goMSNcrgVaw3oquw15o8YHRK21GJTRL7JHbWPWqbK3xcM5GUdkmd75BGZeuFDn",
  "key38": "F7YdqSNRYoUppL6zx3iFEKD41H5rJjXuNQumXmovVKp3KHh2M4qsdj73eFcHdGZs2NpreQdaeP33EPmhpuoaiy8",
  "key39": "3FhrSCh3QjxTLT4T5qGQsPH54G3JfKarVyuBPb8pkbi7ChdC6ekfawc7ygh2bdENwBHBwSjj1646cZciBGAEkbyA"
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
