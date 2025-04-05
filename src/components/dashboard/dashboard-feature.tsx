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
    "4HNtovTzAbeD3f24yyfWsEERbuUWw3NzfHpFhBk3DVxVW3b9dJkNicAMqEG6V72uVkgLfCHMbKbKuJefH8Xeyqsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S4B2Veur9LEyCMKA1MY4h5qDPFV2tfCu4hUi5LsLFxJzopABeGEPf5L7qW644Cz6o5xC3n6zw18RAt8MgzdGyhr",
  "key1": "2QtLGHajgX1k8bDbwBwv9aMQUnQhP3xcNSWzNZKhJWNdW3h9caNCWR6WTP4rQY2HqM9qMjqnuMDtHLBdJrYAGFtq",
  "key2": "3D12XvS3zcNoKtUuGqYcWPE8r44oiquaqbER7Uyr2T424gVvXANXtt1rgKF7H8ByPktWmd78Z1WXYBpJDLDLhXop",
  "key3": "3477dnGnkFj51uDzrrdcBR4jQoKJESyudzN5ZbiMk5rMY11BeBRY7ABkKDjcX8BZXkiLjygKTVJfbMqr5Q9EdJFq",
  "key4": "VWYShRw3W2NjHD7hhXTovdBiLBQGRTHYmWD3fcZSqaLz8s88JGxAP3TVGsxCegxpD4hZXEoCs9sLq4Qfz4ujYkd",
  "key5": "4tvsuaJPwhXXDgVPpHMVxkwFhtzfLiTkZ8aDjJxCSqzk33yUkSo8LbustqakhhdTKBCySSFSbdMEBvyGmNmQjGPB",
  "key6": "55d3WQnqQny3neRq4UD4oXPkJaDQhWejKmb6ddKEQGiVDo8XBq9zL3EbnVjkLcjSULJs2SVKxYksZaDcmYc9PdvG",
  "key7": "4YHU4XLPsvb4k4fpUdaT6hyiS1p1qQ2ngw2fxNBr8L6CBjfZaKMsqd5p7jVWotTTLufJ7T8R8mMfsxMh3vTqqnqA",
  "key8": "2e9deBcq6G9REFaKe2EJxiXsEZtAW299Ntt9HcsdJj1mHjz5BBQndcxgunVeymVH7jMQReQKKnQPv6khxP57wqKP",
  "key9": "4YW4Lyd8LeTRuL2FYXq4Q5NZjvQLv76JaMnUPtqZCthEdkmWdJyZfJhc5vP7YNF7SCowbSLAYdnZ8mfcQsK2QQ9m",
  "key10": "5PzMSW9xuuuZXTmq9cnrM9n7M61WF9Cf3ShWqUsatTaBcFnukPNLJsKWMP1pdmKQjfEUFnDYvuE4eTCTSGRUBFmx",
  "key11": "M8tQrsW65GjMf5A8uXzetuJ6gEWv5NfAHia12bVAQLhW9QpaNsDf7FgV3sNtShxiz3DQSp46imkyVzchuAUXZ8z",
  "key12": "5DHMBGgtWvwZfoFiLXBb3ZaToXSEcYCnFD1JFBM39ntcZED33ZVa6Nm8X37a9p9js52gzMELasDNSthMQ3VFctcr",
  "key13": "4cLW66L9LktgJJQpALVynyWRyyUXYuQAbMNbLQ6eNJJvYnfmEEKdEzdVwpGzT2ZRoVKByjETBAjcxrosvuheAPRo",
  "key14": "2ECrwji3rsrGUe9vE1nU7cspEraC9sATbiVPGwCAoSztYyxFVw4iwDnfsXUiSSwEBwGqNjEyeBVfC6EatmV49jTU",
  "key15": "618UnrZNr8ZropUCLT9aMrK2qNEyZEbVydcj5XdQAAzGKeZcypwC4RF3UEo9dpsA86LDokKco68e8oiJKT5dQiCX",
  "key16": "2MAQ9LFiFcqWVaUMyjiLb61E94uASnndeuAeSo2B47Ej58QLqaW13WvW3BUrzGU458gzrVLn5EK5P1kTyEKLowFP",
  "key17": "5Z8aZgEPqNsDEXkC117eTTRc94HeLCeipiER2mHnf7VUyh8RfUjcekgAre4AqBxtkogdaxwoNpfEQYVXn5tEyMNK",
  "key18": "4esWeSut51PcNxWehTssJSst3qabB9pcXJqRii5Toyjh8ka2p4X9psWLZyNPBFNg2EKbwL1p1ff1y9froQBsCYfq",
  "key19": "x52swrYtfsqty4QM2wHnkNAC5ZRTjKnCWghPpSEEaZ2N2u5zkrtBzrKc3aw6Xbm7YJzVcLgzrtRZzHESuMopjSp",
  "key20": "2DYEW7Mnd6pBUMJx4MeU3MBcta9wRu1nC3tu2h2jGvEGEhUdUonN9R7rQqs3NMzyKetdNrpeqsEv5oeTnx2i5Ww7",
  "key21": "5HZtoSduo4EcMpNeYBe6N7P9aLtnAK8nzm1VK8LmXbAgRThmcXqw3N2U5DYGSDXr9GNPzWtjeXAFwv76H4xMxjrm",
  "key22": "9fEXWPjyckHTZNCThXTq2sJjBbRDPHE5zNc8APr3BWVFhp13jS9PM2d3U1GwVEmr94Cmcb2BTavUCrxTFHRWyJD",
  "key23": "4Y4zh9EAVfjSbgTj5Jo4kfkbNij6PYX1VZUsUic8t1c3gyENpZMnmHPCryKLXk46e6yJCXCHwc1b4o4V4fACP39M",
  "key24": "2mX5uEXZYJrtsNxFh9W5RwsRXJBnLNxChxoAD4Anb5r5e4kxaN9nk4ah1AVu8t1jtK6FDdMM8kLsyNWW63hnAHRd",
  "key25": "4VWvtj2DKHLfRa8omQayom5g3nbpfFHqtLkHY1zCczJV4VCgg8uuyvhUgDBSjeQgUGHxmcGbL4oMJyKVrzbKKuFb",
  "key26": "226u3es5AcEw81PGFbPE4ipLqCuZpgCtNUn5FRSzLXw2kMco5bLpH8A8R2ibTTUt3TGKvntaidWRj7ooipMogYQZ",
  "key27": "52ruBvgV9LzB57wvzMBrPXByfMcUEyPvgdY8g3pdCG9wugyojRywbd2rWMRXgrcWCHMcWeZpgQjgAi5XJ5rQZyHS",
  "key28": "An3hBeoJfPYGKQ2V3e58Fujn9n9wc6DLxfTnKYJ7cBqhLdHUG7nCjJnvt3qMMZqAG896zWVYPGLxCTKfWke2P7A",
  "key29": "62bJNJjRqdrou9Q7F6NjrKzED7L5NkYheWRo2J64CFmMriin2vJXAEb26rJbAnYE3QBBDJTNTyyY2LM5ifUhkNMb",
  "key30": "n2YupQPTEeN8pK4LEdNvrpJLCKoQxreM27djEzmPpcgg2PhBk2TPEHqqTHSw6pgpR3vL8gSLD4faCYqopCcGz27",
  "key31": "39afhPZAZ47GsTyvvDYrFoePpTNdFkprgSqQsbcVQ33UcB2TaAbJR5h9Er11UcqHH14uhJ2LtUXVwArPhoim2jyh",
  "key32": "3Khq8mzLY3hScbAWNdNFfKkaT2sAWbit7oSCJMHYNe6bk6BbU4R5RctpPjTNLtGDrPk6kDszVtQ3t1XkSwq2o7oL",
  "key33": "3nxbUUqJckDHDXqCW377cSzZqX6qtnHfuAdwZpttMSJ3GbiBELsErN5aveAboZ13SHgq7ZsoZj3GVupe5vnrHb7P",
  "key34": "5PUjjQA9dYhcZH8X9AGXjbbkeQkqhWsSHXmz2nPLCLzKKByU2ZCp2qxnTNDinGinSsnvbRKbyGp1i9CEs4i5nMne",
  "key35": "5zVxnf7H3SzZthuTNTRWMWJdBA1KLVon1iMiwb2XsvFUjFnXni2Z4mE8GkVLz3ankDgFepeUPKtT11cVRPjYr3am",
  "key36": "47U9bZNA4Htn1jzoJuKsCbN7vc1Xp5mjfPL2xYxiexjYEs3sfHZmYTSAu3wMrxWCSStEg3wzu91zxVEDkXgpB1XS",
  "key37": "4mXA2bTNEUeJ6iMrXd4KY582FYstL2AvgDzmQisBhE44HRSEgUXgvnCVr9WijM2qWzm6J4GYKEuZCBy4KgpwMxnt",
  "key38": "2vghyrrShzwJtfCs7Kh7actdpPTihW2KzYxw8wiKoqvFyiziwdz7GRfyqVUHDVqWfNq3mix5Th2NHqeAH44uCSfi",
  "key39": "3PmxcjSdpgrQZQstbw1qU7aUNHdCGTSYodgVeLdDsH6hKzKMYZT99MWoMooL6LrwQ967xunrRBinsEaL3v2UtK1U",
  "key40": "skbou26PYrEejLE3iCvWqcQto5eJ2X8XhDZDvgP2uK1niNwHMyYpauxSnJ7UVsr4quQgWd8HjaFNsREPQCnL7t1"
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
