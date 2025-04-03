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
    "p7RE2XvxtEU7oPoePrGCgUrxSkoJTage2u4qPdgveD7Qhqr2bERMsmS7hsSXcJ96hnjCggt41Uva94AvVKZP4na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4uy1wX51rWShyXvitWe4bU8McPPgtB4TnotTAE8ZcH8nZcRToGPt2QaumGNxm6ZRn4gtH1a9kSf33NLBis4dMy",
  "key1": "3hXgcFdM9pzCb5ZF3YYXqMxjy58mSjerjhoR1qnJuq4uta8AWRP5kAEYXFN8eapkyhv9wKxTwhiE62ijrK8CPmpd",
  "key2": "335CmyQMtN94EkmpagtUPew45hxr17Ba68zgHjTRC2zbbHZ4ATAp5GCkzFQtywdGmSUbezmEugRejdHWeinj5oWF",
  "key3": "62q6Fyiz6G2N8x8K1kXjJ9feNuEGYpdtuJoXrjQTd8eyajLzWEVCjEQTP44PCcxjaEkJKGjgbvLUv47uaRrBqgWN",
  "key4": "45AzT2RUaLmYEwm4SthCWh2AAUYmNzhMjQgUdShgJDPGx9E5t8DzaBhVHiXvqrPS7Q1LJb3DdBYSNucfxbK6du2v",
  "key5": "5uNCaQ6WRyGmu1XHan5vgtaBssjw92sBAyyXmpSdKx6GHwGQaKBKcimnKgT9EZ8wvQMvG3u7XC29XKo6Bya8d2pw",
  "key6": "5wgdyHPJAJfmUBzkbZHSxf3N6wwKZr5UDDiYMyYj16DsKXpHoxaYv4e9qGwXE4BJukYYitAP5AHJZVmHVhuGxy5j",
  "key7": "2WQGxb9MWJzWpaEqzBoSNR4S4scNT5DN7zG6KsRbBbWS5Q7JYmWTmR99CdKqKqP6T5dXoNxnF5gVJaLaiThDwWNk",
  "key8": "37Ug3vToor4TDFPmow5oYpn2cYaDS3GFxyVykoSpcgWmLsMZ3PFfKeGG3VWhxtNYDSCK2SceJvJwoFLiBzWjhJ3A",
  "key9": "7kCcn2hptzjzbSPthtJ2ZMVqgLxzpH19rRJb1LvWxYwV6kCeLJ3So8GPVsvi8s1jBQ1bQN8zCxGTk5dezetRcov",
  "key10": "28n1Rov2TdZPb6EAg7PosAeNhTbnAhTDBtsPudtNJwDL3PgKnDrwjwzvwCc1Dt6Arbs49SekAupTNiwY2oghkkke",
  "key11": "3PtQUPF67yFK9pXdCgkpotiPWuQAqZfm9XmeZEbSRmotdTaBuGJFKyDpF1aEJn9wxdUsLptA8RcK3ZBMYCsWP7Hx",
  "key12": "2PNe1UX1JcRDKBPSt4EfAxcS4eVZX9JU6DNMAeT6qMuxXmM4sbYLkdpJdbwnHDgqeMF64WGxWviMBWp9Zu31mX3y",
  "key13": "3HXayWFTXNnSzPiacPmzEH1eQFrEEDnS9em2Khpk6kPKzt2TS45XhjMWd8a1H2AXtoQf4MaCzbdDGU9WBHcunGgy",
  "key14": "4REYXWZoiyjSfrJExJZ7kR1xProEDThMMiAS6LM9hT59qC4TwZZpujsMJwgPLiMSog9dPzZe2LBTWSJi9NZ8ojjY",
  "key15": "5XrUmt9ur3jdSzsjeNdc5xwb8GUWnrSAJwGM7SMF6Q78Ww7HYfXSEw98oAFVrXV9E6zQaX9m3B6vZPBmdpG6twiM",
  "key16": "3Und4wqjTCZo3DMj3ZpxxiWZp5qXnK1C69Mds5v2FTckyUvz1ap2W6CLu9fbhE1vokZU9nZmhLPgMRozDWmCq9Ud",
  "key17": "3ikuZCzf1eY2yDkADfZM9k9o6HAwD9Ct2h73WVNpHw6rByL3uyE2HEttyBfURgTXhjcCWdKWek6gFfG7wcPtRfaP",
  "key18": "2Ca3Qg6bWew8WF4wexfTEQcev6eCyfQmSyfevocPES37K44Cj8a4NksyN9BWpLXBJD5QqH6VRLtzDZDPHdazboRU",
  "key19": "3dwrAgL32ydRRTR2R3fxJu9KEDggsJqJ51NYykcEEZpgV2xXqowHud9i3RKxd6uVbmrP9gwXpD2RrKELrvvBR2uR",
  "key20": "5DuvzRVRkfnpdqmuGZzPCbrM5EVmiyRENJFddGu17wYcbydKnMcYbgvpYza4gMF3nvFa3g5bPBXengMzJ46XGtEo",
  "key21": "36kRYzEWamuRWb92S7qnqHtzCGqE29z3hYWB66oHbajiCH1bRcsRUGmH1Kkdyx4hvPhqvNhQMGYzSVq18cWYvCsU",
  "key22": "2zFptwBrhASVkpEwsi7sFF415RcEj7CE9X5ErmrDSjMgCUiHYot1WfFyAWbeZA95sLFXGhXWMKUaRgca6nbKtgD",
  "key23": "pBcPmfG4T13nxtfjRUq9uysquWEeaEP7r8kmEhzd78mj6EXLUSA3ksyVWT2z7bwLjfMSDFHeUMmD3JeLq9KKFwT",
  "key24": "2JeqsHwtgxsUJXXK6HM3Pyh3dm6Ud2Kw6VGuABMawKkd6e6h6nemPNZzM8GY6GEE8k5ZN252oomwKMbQCaDNgwV1",
  "key25": "4cwHEWJ6kpoR7m4QWWvYDtAJQBDYEjC15U4piBEZBDX3Zxc1AGpwFSDxUYmdJaB5GmEDQM5rCQCuVegVnUpij5aZ",
  "key26": "JpXE1KUeKiQQw9TrvXX51yoV5XeNFxs8sha27qy142syp3fXKrvXjh9qMPN3mdKXxjsbKEwKGXaMgMauCisa7Vq",
  "key27": "3YegvDiXpEGVU9gwBPAm3fAT72vb3SXArfDGAk11WTtAhEyC1gDavoPJUt7pKVUVgD5KiZBPsLbUytyw2RrVYfLp",
  "key28": "hU7n1ETHBJLbeKRXsTyBozXbaFMrmsh56y1LVUiPyV78cDb4ALy8Uy6oYFtWHxGvFwidFxfaUxCX5aN5f3CQJ9J",
  "key29": "5CaCpUciKRRTMtdtz4e2Rfai6rxoRq6ScVFbAEmVtd9HLSfaTqpe1HwyugLLrQFbunxN4751g46hVGehbG1pMKig",
  "key30": "5eDvRpSdj11mV51zQE7MqsGn3fCfus26J9S1moPWJZAAxjhHVSAgHEgcQP2BB4qLaxBEF1mXn4Tfotk8BHRWJKXA",
  "key31": "4GW3tLRkRj22PLRMpsFG6wy7RnPdgkgSW2w8QfE9VwD6fGzeCwq6i5F6aMk7p7nd84KKpQon7E5BmfCwoEp7fQWF",
  "key32": "3AqHRdgqV1nRzFGDmZ8MEtvURE1E6Vnj18J9nGk8Roypkzx7SxMwSCZ8WRuBhJ64ZB93TA2k2UprACPNBtDJ5jJw",
  "key33": "3wQa2njBMg3v2eyqcyKPny1pGgpu5gn6tVvdR9dzzf5naJ3sXURNbKRG4WjkfpBxYLmRs76z4aEXGYA1pmMPQKJx",
  "key34": "4kRWzWQMtaw3627fqHRF1y33vHhvTfv9VedfSTh8EXKCdFgNoHUK18D7eSnVciryEy4FRvmUiLe29TWLjXe4HXD2",
  "key35": "jRJsSxG12zuh6WonorgomXcjdU8tmrqX6qaJjVrAQjN3KM8rqrMhqCNfkdvoXw4R7RtsetxXzp7TKoviQCDiBZk",
  "key36": "8hdULkkkpsiJcMrUVYNHHK1jovMA4RGfmB6k2BnfRmod1MUi9mtTxuY4nqWwCqMAuoYaqvt1QfLSykByTcPaLaw",
  "key37": "ppyWjFA7gkRdxMksWdZPFePfyoaw6UEUqowEnq1RccDfoynoS9TNwE6Y5ebUjV9sJRR7dpEK7uNaKLkUq2VjMYT",
  "key38": "644HQkMSiWSS8W4msGCzFRgNe5FP73EnNJKdcKNAsWNVcf5heTVdfcngnwrLzv44P1qZ4H5C1CXnUnVnC6d6ZPwc",
  "key39": "2bHGjB3HTqGJSFnhZiUHUeVaFYqtGLFrGY86QtqteCnjDmtv8k6woPwzCe2NxmqTgCtNpUSWSkvL67iE9k1L7WpT",
  "key40": "4LP2gVA9K1iz2xAZjCu2CenG7aAEBRVyk7gGjbzcjjftVP2P4tyj5hMTxx4RPj194i9o4RZun6rgWQMGM8vELEzA",
  "key41": "dP3sboC4Rt9ZhAAztgZB8WErDar8Ch9fgiw6av9bn7i313wqUnoEULLd5g4gE11rEvhTkjV8wvvw4RAe6XmzvYX",
  "key42": "5g6UBjo2T9NwKijWEZ1gE1ECNvZH2sd97hyNpozv82rTvWzM7WWZMJhWAQbEsrXgV8amHUMEhq2oBNEwWtcxgn8",
  "key43": "2WpVQdDgSLXL4Vr1eF9fKyhzGciq5V4v7d4jtvyHSKdbpvW98ve55KrLsU2J1rrgYKZczks8GdfYgyrJvNY3XyN5",
  "key44": "eDfuBBEj5uBSnCzdBLhtPBQN8JnTwPd9YJ9HrtD2ypxVygT3fhZJBHiF2DWhKdsQ6Etbgrrqe8AcY9gJdmVwW74",
  "key45": "4Kuo5KTxYoBptQtfnE4eYRZefeSsnoNgKyw3sbcMLuEi228dr13Nx8KwD9EKcQ7axs9UfNDiHxdnVzqubcLELsY8",
  "key46": "65B7KCXDh83t2hePEJcGYHafngu3hVdH7UHWkTKP4qMY2v97PpMmHTDyKxo4YpP7hJgoFH7i6gfAiP28Zqs8CbWM",
  "key47": "JyZpx9sDVYAfzf8B9znoiWukaRo842bGyxuvSr74QRr2KGzkGyCxuo1LUW4a9x8HLJT6nNTbPzABY3buGg1HCDA"
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
