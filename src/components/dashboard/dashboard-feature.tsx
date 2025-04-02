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
    "3skPArMyJvgxhvVZrPT3RxpXgaLmxRWegF3BGmdGxdbcdTA7iZ9Ee5HQy6oHifX4xQ99poZztc3QHJtt2Cic835z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TarJG2vW11d2YDBs3pAuzAjM6cvgya8RZQWgdSfyZksA6nUpQY6Li9hQU83N8oianx91eDnmoXm8VHRK4JBWgkn",
  "key1": "4Z378Rp3Lx1YKCsinhz1E1e4fo5pXpDTaYc1V53gFEuTBgqR45uEUDpSbBnqnk448DzXYztioJuAkr1DWiWmdzfs",
  "key2": "smMH63NADb6k494WwM849gGGhhxbTtdwBri2t2c4uMburXYQcS5qzrTcTTcJ4uw1YLpYP9kyBKAs6dunBGkDbLW",
  "key3": "2LxFsVsYaRMXvQssPSsFG9PqmPmcCrEbC9UDhYzAp1u1weKZk5Sqt1xsVRoYEtzz7Sp1Cy9ptyvsKHEDbiFXm2p5",
  "key4": "1LdUbnceDBTdCkxyPWx4r4uGxudEzbXMAvG9njeks3GuCmteXpcGfuWQGSMbTxz46qqDjATmuboaUDsGkGvVgkS",
  "key5": "4cGJdZ5dCnYfgkm9gZp53zFUnChU6cWXMNm1qo2HPZ7PQes7Qtigu24AGtc7yFrTFnLmHbCEtz9rdWuoPUVCPReS",
  "key6": "63QfditKHmTLzyRsCcm5t7wfhazLPJqcZPLZnHuq2YLsCxPqWpTYmh7yLQ2soGjeCAfWm7qUVea2xaPNNAW6ykLG",
  "key7": "4hVAFNKZZZTHCDg77PMyvwNNC69BoNQu6tSr5Zbq5hPvoVSFvgWDK71Tu7kqLe6XjUbNrAojxqW9hZr8f5XwuTfd",
  "key8": "23uCXYiGsTavoxtjK8t6oF7fzoJmmvh4WcukUfj8TiSbiwR1ZVPyFfpoBTwdvVgh1paSQgpUeVaJnwHgAQX6mjsV",
  "key9": "3qj3H7rgagewYtJi1HTVmZ5M2zuBcT5jEo9xSEEPfiKH3uAvLZ97CWMhjh1VWQek1xU6yAxZM2jgFNgHyBH2iZp7",
  "key10": "36fesfUqCVxbjXEin4vnvtfVtPS6Nsu9NBECjGR3U4hDnQtsHvQCq8KtzEFeoPacVeCpgQmSYFU3sb214RaCza3t",
  "key11": "355R8mumJ86deYdD8QDwqVVUycFXR8BhCvaYnMVV3irXTzhXw3ckqCNZSrq15joRyRQL9rvdqyhvjWj27LmY9GAR",
  "key12": "a8nS8vSRqHz9xbKBomVB1YXc55BUU1JK2FACiZiLxPMy4WVtDSqXUwv7AsnhM4oUJn1ByS2VxN97QVcVkfzzzF3",
  "key13": "2cfURJXtfCKysr1NZ917odXQ6FPgMRdyL4WSXfZBuZZRaVWd3tmrv5sR6SEczD3sge97HGbGqYjoHuBmka2LBZBj",
  "key14": "2WZpVNchFUT7QpqnbFe9U8jNKiz2CLvo1iSc5RjXLXqTJQS2mArzMFroLAp4MFKUfy2WjxsXUGRh4yrkY1wFPVtm",
  "key15": "2umX3NkpNFCqDPSjnjYSspYPYFgUZ9HGL1dFLek8aiZ4i3Qw4WkMpiGc5s87H9pnzVwyznWkYNJ3B9cZyzW1WJWM",
  "key16": "35rKVzGkjJkr4SN7kvoTcZiamQxdsucNwgbsQkwAn7wg38s5z5Shf5NtJWzjxk4HJPHAcpgN7jbrJB4381ZsXeV5",
  "key17": "23LDu8z92TLpMzwAZkDij2XER2XAwiMjDKjrrapcujEut36FWvzF5LXSV1GJKAR9nTheghCcZeRgSnr7hPRGqrt2",
  "key18": "3TxvXC1Sjw6dE5Fv24yQZrVJEYDSrqJs4W4etB56T8u8ci34HwuuobDfoAzQA9ngDx6XbVH3oFARHrz6Be56zqTH",
  "key19": "3KAojeFyqrPQYoxcYfVy6NU9YPyQwZTam8nqoeM42FkzgbREtjC4mNEATCF2s8WXN9PrynyTEfwj5wwoxgGefxBi",
  "key20": "2ArKwK6PXbqHxEfxSBHNKPJW9JAQZj89uLZRs6gxPL8Mby3kXFkWiw21eh8JiqbQdqa3QcDsN1DYPJFbV6ixZzzf",
  "key21": "wmqwWPpPhwDAM8nPvjKKkT6Ho42XogZq7wU767RfUsoFoW5UYMVk36zkCHqMX13yxDvZZjo6AiXGFPh2zHCHZPM",
  "key22": "4hzRmDcdBEttA9aMgGpi8RwormR78pZiErg3QSthWzA6wxqnovFGKKmGeTHn5bmC7tTDXeE1yq7cLbAcj1kdZugm",
  "key23": "5RjeL79zaBeocwqBLd25tFCaGaLfM9FERLxbcUVNGCspeWyc6nzmCc9pWLg78qXxQcgFCVAuUSyRLBgTnMC8pJLw",
  "key24": "3sqerQMtyh4QN8FjoZwkdGA1zVrarYASUpW9N5xjBS6rjhkmHMS8WgprPe1Jq7wVmotpLJ58Dy2jFUmzepgqi5xP",
  "key25": "3PwhudtH98TDTRAMSGAXjFUPDxde69tZtVuyWzuPfkz7diUM1aF3hb51qK6fXBStGfQsKsbgXHeVijnTCSzS6vzM",
  "key26": "42dkhjWAjj6jRa4DV3M85R3MmRcZR9hd1Y4DnMCpPiAYd3jYD9ub4EDUiNfxse9pfNq7DcJAApLaaq6nBy1csSTS",
  "key27": "4r2d4kamuh5P4dsQ3nNqc6n1Fr5tETxZB6B5sMXymit4EihaqBQ4s8a8fppH8WzjkpWw6dcomoiRqZ9PbPb2Fomk",
  "key28": "2JgnspxTHoV2eqpQLppb8hqE2YnvQpCWUnud1RuqTV5Hjy7quXPjPEhnFQPAGnbTj4DffYSN3MRHCFK4oKWwuREZ",
  "key29": "3uTF65jfHafH6M4gSFCcqRzYobJdL5j4FcV6Dan5uu3zhh4fBkT4sWqgLQKreeJHT5wbWJGD3M7kMMw2xumAuzTL",
  "key30": "2HKwvF2UNQ4n854pEzFWsSasgYuVCYVvQr7pq1TnwvPXQrPoxip5LUFq8DM7s2zsyDT8Thi2z7awovAyd9ec6FEj",
  "key31": "66XpryeWfRGfCWk7NkqgsmCauP3gp9BEecKSgYkP3dQd8ViRdqh683aUvNG5K2ifnEioavSqbWM44DL5mwdeEGNb",
  "key32": "3gToncykGeK1uRs49s8RBBRNpX4855YjwfFjGLXo8bVSRrSzTefyuZzF8uvrnfdKMnPSR6GWUfLRwLaeCm8Dj5KU",
  "key33": "48hNjnoUfX2A8kmhYkywViStkm33yAG6UheeUkKuUxU976MeCuC4XMEYt8XAoFXqBYBYMaL4TYAdtRmyNGZZeMVX",
  "key34": "q4VZBUntEcbMre4LJoPYBJLYdkQf9vpzApNKdYSbCEdHtxfc57eeKRM5i1iYkaTU22nXxrMwNqkAC64gyubi46Y",
  "key35": "3C4inyZAWgvaT35rpoD3Yam19hZ1gRCBBcSgq5rdyAPFCXooEn6eGY6sGmZJ5iL6hhoGFzs8j3prNzRFiFUxkPvR",
  "key36": "2keMJgynnQu6fCmNkndNUSwtfoZ6ccaLuohPQW84MCKRq7kLtdnsbpxTTzDVZYyfSUzaiKG99FAA7wYx8xh4LBTj"
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
