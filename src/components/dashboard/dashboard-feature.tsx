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
    "epbomnr7G9gWnAJfk8TmpGK96X8m8JhDrx4afwk496UfAiCjz2459gVZ13mPzYH2pd7H4tcg14cyWwKyYq9AQ8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f19cpZw78bm3uMvi3hESQqd1tBTd7VTABmVvvDhMy5d56J4jVsLWmuYFCMYyAwAvk6RsXjeRzxSzUDtZxoMAfGj",
  "key1": "51JznzQrVu4fAqv1Jh6hUmnZ9WHHcVoCt8BDeLur2rKpZRCVPFbfVUDkQ8Ltuan1bJyEy8zz9zjGAcCdQG5Dt9uD",
  "key2": "srYU9DeQ8vxdHeQ5emeMC6ioHJX3F6YvhMHG7BoDnYxgM38PzHf9tPwMpVH7m9c4P4NiD1jbVhdPh7mduDmsgRu",
  "key3": "TFsPwHLy41BwMTXGLDY4U9CkJLx35N2Dya9KQJ5EJ83h9CiGBNB78TPfY8sjs3bXdSE5NneHH8f6J4ENYQPgtMT",
  "key4": "4JDYLKY9US55jsV6tscaviW8C8ehpRNnU6D1iCEiKAwHaP1HSM9Geeufwf6MvNyRYnRnhyoTVBc2PjiXk7SaqCQf",
  "key5": "EiGj7o5toaBAHxMZun6FxGTkQMRwHHBgwZw8sdzMq6qfYJGTrV3SLvk5Ug26LZGpvrvvmQd2cMDFodL2dee6GgT",
  "key6": "jLyKqkYFXLQanfcFmg3J5BGz4CmxcEwT9mMXgLnQdcFZhkVv1oXxHCWdvS52upkp7ABQtWK5Q5oZiK8qjNibL3v",
  "key7": "5FKDRkiJb7X6kkH4vTX2bR54yoTgX7qNVMJ88gMZP2p6Msb2XjkojEFF49buLEYzSBiLFWkmvjqB8ctUK95d5hU4",
  "key8": "2YUb37mn7XNNsvhwPju1vTQwhzyn4WqPYMYPArc368WdeAP6DVA7EJspVAXgkRk522jSfDdjHEXKy3jvByd98c6m",
  "key9": "5bS1erRdGuaQr4pNoe4sy4VfVdsWjWJAzrMLM9cBfL3iG3co1J59jPxWMH5f29NMLCqvC4wEvsdEDZFLrNPPJafo",
  "key10": "4yhbbZP65QGuzXzPf6MZ2NfxP38WXmqKxPmx44yKupmzic5TUMRysCbK6bFEDuYnKo2fFtCVtbcnE7d5b732R5kX",
  "key11": "dNMdSAxEfUW5t27mVi5JatUCA2Agy3f1RoXaFr5Y9tXwms49ZwuwEirnvPqrcf9mzqkCHnRP5p59Lu86C9use5t",
  "key12": "2Tfo3Lq1MmEaKXtB6dEwPuhFm7UYrdT41Mmm54s681MnZuw95H9ZUZKCMXFqroVMwyQQXEBbLEeyCjvTaBZdBjCH",
  "key13": "4DYsWGuh7mn6JnQuL4s9oDpUgWnCYrHNvvstJ8Bq6weuawQQXvKCMvECvcjrf1dYg8Xq8CAuo19M5tjiyjT68qQ4",
  "key14": "4YcaaGreLwytERqiD9qxPGfUv4nQWcPrLzfJeCWW7Y66CjmyCgn8RrzJRDQ446owiThQUJbBAdK8Brb842zj853c",
  "key15": "56guJBeVyi6vutHKy3jKhMinqh17Jvwm9Kd2zQmYYYCv4CnCRquvTjvP5wR1Bn6XqkwKTsW1jxzE5ycxCqMjWGMu",
  "key16": "67eqpW7Pz9AMgHfoKXgHRmkn1ZbTUEMGjDHG5Ty2mmiAPbV9gJE3VuvrSoZcvq5PE88qpkL6xf6idz4ZrfChtzmL",
  "key17": "3gVoYzHq2oaZQuLoNo6z4VUiitbo8pWSHAHthBkn6PMbcSk24CsKsjATJc17DhMKkX6r5Dj4KuwhHjzvxQM7sNoK",
  "key18": "CU3wmZ3247jhzoovLm1K6Tf8UcTc9v7MtfKetrpE2ebWayFrpTir99M5qLbWgtQbWhrbQcCtbeQ9osC9hQZCpuM",
  "key19": "64Fo5ZZcoBiETVyBig67EDi65Xog5Nn5AHcQat4rmxoa16FnC4M7kXkmBBiJRx3Dx17io47uwwzwg76Gf8eVxwtr",
  "key20": "39SNidd1SuVGAfBoYzy4YmR4Q24rPgKpUEcXgYK6ow2Z8jRQr1pQ6ExZan699qg3xTpt4yRtNVh4EVtVZfdaA8VF",
  "key21": "4U6BXQ7vTeiqoA5wqoRRFnnhVsb5EfMFiWSEpFNumFFYaXc46kyDJ2B8Ym8r13JVdTMTu53EBVx2DWTijFMqD45M",
  "key22": "5eFtGAZEpt2qy299RpSoyD6JrJwL8zmQRj9faBEnP9HTMd3JjXfLbSRmgjaMyHgaK6t3CSKjcBj3DFMwsqY2yyxu",
  "key23": "5DkGAJtc8MvqdPxg2zj41xc874tAsBe9imYyjhYP2VWfg4CdWjt82fYyxSSRsu9HpAvoHdcoPa896gAY4ErTivNS",
  "key24": "52RBTqnpLyeerCHKwso4pADivpMyEUMvcXBWmNRBmWvPRTVnyQWd4mUgpNqF67sgNcEVFuQzNbnKDoqMZejzkDaR",
  "key25": "5NzNgPyRSbkBdKv3D9k8rvF22w2BNjnpVsxbpf6okxz5xDPMYdE9LdDB4ZFNkYGfFPBTvS7HU3rnBan8LWu9J8Mn",
  "key26": "U3HZ98yyz46RcguzsQizkeGLJz8EAq9H6yghMhFAZzYh3A8NnwcoMRzbTUr6BJZzz5M1zTjLGwUhRyj4bha2QCn",
  "key27": "3SbmscXzvaEHFq4T1o6qV66bzBSvhoGAWMa2Rm7RYkwMJkNoGYM9K4XAH1HML58Hm4WToVAHuTt3xp9cuC9aDo8X",
  "key28": "2VsVCPtsRQfkTwCUZpkxfqiG9BkghjY4TA2ED8LkdGesz5vgThsqzCqMnUN6LV9VtwwKf9AvQ6fWTugV64rApNaM",
  "key29": "3pErSGJbRREuEkNqeG39sQ1Pjfdh7p96tHS8nNvvyDTvMagUp4UxkvcxfxBtF7NdzzupUZ4XHPg4ByfD1AZbieX",
  "key30": "wqkwXN9fiLbaByPHEbrMj3CsqmTToaCrksExqSHNkqiZwP4EsLFYksM2tRjf1yEkaJG1xGUWssyUgzFm6u4ZQXN",
  "key31": "4YGabPSGhERxxCq7DUHkCJV7T4ywhbqMPDgSRvV3jqSFRDcdzUfdbWHzXSsmTVLqEAXGbVEjcZBgX1aPAM41VCoB"
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
