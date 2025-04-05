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
    "2S2bS3n6tFuR8USfNSrGY5qNUt8XgxMf55NhJNToxGXkMXgaTcK94MHg82uxQyCMoutmLVJYj1fdVJMamXrthBE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y96fWHh4ATZ3EttifEfU2mz9zFCUqM9nq9JdpTmBAqF3YZGfQngJPYskGJrNsL47oChVr1BMMSQpWAmugnWDrKq",
  "key1": "KzaxPWeG3XcQgMncutZvCon7i5JoAq58eoyZvaVFCaXEmGcmTFGSEuzxrXPPocrkGNaX8VtoYCGgVHQz7FqqkcD",
  "key2": "3mwdGKc8qZsdyWuXoEBbx3Q73ezhqhnzJJK3eoJ3pkwKkuBSBV8Z3nocFtgzD9nk1Y48tiZtFUiDsxJiyAmMqqpn",
  "key3": "3gQdKDMTvPizj2uCaqkeQDsSEbPukF5xnXq4vjDxe1WuYSeACHLRjSamsCDyfnPdj6uXsJbET9YaNT3WDRLjTodm",
  "key4": "3zDtTKUMQwJAFB3kJNPeBgwmL7WdX9c1yNaC1vGR5gf1Naa75hFseh3Ek8LMq7j9kbYvtjxkrXRLAToMcReY6wyJ",
  "key5": "2aNsSVA26zZihbwtANBc3YHhsMPDs8ony1ENMZSQwRJvkJ238q5bPejKmTQNZoZojZ9va6689jBeJpAbeswofVCq",
  "key6": "3CqtoV2vzEs6kWheKjS5XgtLJFHFCF6BLi8dPHnpKg3K8PFAG4VEZBwSLtB3bgLx9QyTmyy2RAbmR2Cn97FfoqMY",
  "key7": "212fERjdxHGSoneEvXh9CnhMCeZVo1CqsjaR2osDr9HZ5XCHnQdeUZJPZbMJktnrhtguWSobYV1Qzd15Vt4kgiha",
  "key8": "3jaPUeLM1YQVe56HQsRMMjjQ9NDEU3ck28u6WzjNgFb2VTYqRrKUcXp7ZRyZP1dq1yfvVR2QMkj1FuQLeNpgPgj9",
  "key9": "NSEfjvm3K2FHSPfeRpYgrCYexWYUNjtumJtKkxcq68GiMDy5nNU9iJ4i8SRSRoVGy5jY7V8icN2mpaEoSPQpMUZ",
  "key10": "DcLicjk1KUG4igyP1UoMR7avVYvP38BzZSzBpLKfiMXy7f172wcs3PuoX42bDwwMkUkRzXWXTniJLMuurfMCi3w",
  "key11": "45p61W3abLNCRynXF4F8wqMa91Ut45yWmLE4R4i1W3cR2T61DMhCK2HBtaZu4A2ocx2meGdkXGozuJ5L9dKADpKw",
  "key12": "4vHNeCJKas8GHBhjy3j7RLKutXVCVzPptBcY1Hetocas2P7N3eCDKxf83SntqsELKXV2nU5LTK8SJ8JuVsxKgQM",
  "key13": "2nS3KQpKD5nGnfHvA5KgjqreXZfR8wMQZn6Q5pjxFJDkcKkh5Rb6Aj1s2MdDQSwFgjiDdFour1RPqWVvd2n1Asmd",
  "key14": "4zNKAiwLe6eyd1ter8wco3xbibw6uhN76AedHeVgjQxna5piK2b5sodvmmDGrBjW35PtXLaWWxYcPZQsJabCqQBD",
  "key15": "3armYYX4kmQBNCJqB9wbZbpULbUSYJRgSLEwp4uZ5YJdXvBaAxABnvy3v5tEyzLTjn1q3iRoUAntAoUD5qhNs3tq",
  "key16": "43ytreLuBzn7KGjNjCSvuiCrLfnvgnGbLz5prmcYiNxFaTcmCfN188Cgf3F5yrFTgB5HPBiMkTDrXzPvxSvPwT1v",
  "key17": "5Acf3opLA5UvjzkaQBYiFtTNkZeZAPaFneNUCqKbwfLmwC863xv1mwRRC6vEQyqyTt95J24JnVyxs57HynfKrgHz",
  "key18": "2rADjULAopjvpNo5RzyiTuxWAk8L5zygHgfqxLMoHTDqFbZfsb2dSryrmxPM6onnGuK851cKrW7zwoxJa7PhDdcx",
  "key19": "5zXs61LWzNHrHaAzXCqAM28CiFoWfF3C5cDWb1pcFg78cMan8pZHsTWzq4dzCRwpCpyqmEWcn69Jq3ZEc2npnJ15",
  "key20": "3zjMX6WHJAB1kihS8J3iqfpj3dpKY76kxcpEP8fbso13nhpEkAMg5LddtEQMMju2wH1QLfmjcbdkxySh3kAJNnTF",
  "key21": "3ApWJx5hijyf9FXyey8EpEb6Mo5ESC5yKUMiVo9TrU3W4Fgu92FwGJnXnTaYv8FhbmT4j1ZPhJL53nzGRPRpGeKA",
  "key22": "26AVnbydnFdGG6gwkDeu71eVpLYZ6HHqh63WhvkYSKJo1AqJ6tK9ZD6fbxUkAsLrRLUABtrpy7Y6YrizWtZF4rx2",
  "key23": "3Y6JUKYMYCQmJwJNWixGCrTYwPbRAyYozkZgLg4QQimPrsxWLur9FggJ7mjdq5BVh4e69pmg4KHdQpb2hzL8Zukp",
  "key24": "37uuJ8JTuwp2YFeCY5oh9KqKfBnm12aJ8QdtNnE5r26LMGd9QyztkaNEBRXQWLeskHUZJr1E9z88N4bKGJaespCU",
  "key25": "4RcaBsvxZt6wPBfzafnYHFJoGtSAJK2thBHTG54PQcH7ZCBKtRDGbsbDpeNoDTnyak858EceSn51hdQZ27aksfTT",
  "key26": "2GHQjjypMefRYKEqw7ahuTzfm9rFJSTeRkiirHWdwmWc9F8FbQSVLxMCnwjwCMqdBstiusxEiyNim7536LR72wpU",
  "key27": "4vS3cKkMpEPtB2weVrmPJXSa5WxG9nSzooEo3uDuSoUFwr4WYmWHmMeAnepRX6v3kPSWCSicLbb3DEDZTaPFzmo5",
  "key28": "5Y3XSuyu3xjj4Qe3rGLUb5wFDNNCvQTYorUcCE9H9s6tAQ5c62emQyqu1NH3ho9DgFwKPEKdM1PtNucWjsvPqxse",
  "key29": "zQG9Jw96okxJhy4h9YhePXBdAr9ZbMVwHTzj6GbYMHJycKk5DZC9S7TyMdHReNYXJr1UwPb84y5Gwgy277aeSSX",
  "key30": "zgKxjAiRioThHkF8egUbwCNZwxWeYhsZZKhRzsxALyyc8Vv5TdNj6rTtfJV1sMFvwLTrKP15qAWH1MRR1BcsVTD",
  "key31": "4TEjXFjemGhxFjKnvdf6dkkYnHa7Yt7F6preSt2sHxGvtgcDTqF47cyJCAFSiSzctQnubhJWruQbiaSsJ3hYw1TU",
  "key32": "38FMgpKG6g9N9MgJp4njYi9BADXNYQUtJ8aXgnQBqjCbcffyoY5b7nSEbgViojVW6C1pStSsbtm8DXVsKnR9P9Ud",
  "key33": "DEZzBYyMFKK4KfG2AyDxM49iGSQQTwqd43YLQndVcmJPWom9Bweez8NQxkm5Js4WUPfCTnq5Cg7oeJjVSS9JbyM",
  "key34": "2jyQLyHr1fwioFP7zivf5JnYojo6ip5PCR3JspGDAcapu9VgbxyAaus5zKVWCxJJ98dYMDCuppLZQkzMEigEsKuz",
  "key35": "4SoEu86LAjoaLY7erhVbpeivRnL2uJDTdGE2uo1dhSkNh6RVj61ap5GtWeC4tNsPUgWKP3wYn3rZEZjFr4KQcnx4",
  "key36": "2ifkd14q5917CCcDfuwDTjVGtp2FP2riirMuDhfRXy7UBwAjdAaTC2xG1vyKQyevUtaCPWSqmSoZPvr3qgUuFR8s",
  "key37": "5hy67tzScKjhmyy2AEp3mfRKba7oCMBuE9joKNZvAxSQvHBD2eUpuUCsSBzZsQAoiKi1XQunMN1CG9Ka65xjfuoS",
  "key38": "5A5Z1Y9m8hmcXQRPC5LHNKHxGJBA23RPw5W9MRkJZTAFKhjSsuk4eFHZAH3Q3VRbB5TyfjWco1maLCdJdt6F2KCJ"
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
