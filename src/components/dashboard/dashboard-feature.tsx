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
    "31dtMWxXRKCu42FieoARy1ik6dc72ZLUxQ69iLh1RPu3a7T3DhdHkKRwyCqasiQYrBAzSr8zWxtmGeonwa4ZqbhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSWPsDCooNbitwN2WoekXcFYwHj68oH3XJuhWnL939r56rrTTPhWwgQGaNC4DvjatmVegWDWRfA7V6mY8GWVe4r",
  "key1": "2tVaK9CJrteGu91A8SPCVKMi3p8Mxeee2fky6Wav2Rpqorc2vHRnGPnQ6N4bfpmqfj3pVbcuE3TxtktBboqp76eN",
  "key2": "2gw3snMGUR1ph7eUw2z9M7UBzymVrwtDEL4tiN2Rjb3KBbMffhWf6di2Gv8fg6gRmY4DEqQQaRPRVXjMXk4KfL16",
  "key3": "v5q5PrFdgFnAKZuriYtsCYzn81YkYwAuzCjwtn7H4tJj11YJrWCijguoqbxexY5x5jGfeN4put9iDgh2pCdNVNi",
  "key4": "65ZaqVoTX4WUajgDx5N9jRZoUtc9qU21ZYY4vrT1C73Y8KL2KRBr1y89MexVenRKunxppHsipov2qjP6zZfGcMhy",
  "key5": "5KogbaimMST6BGU6NCvfSpHnxBMAhq8GfFao4mngJfL9njFjqrpTGR7sCPHQK2X9ZmE79EmXvbaHdwcBnXun9D7b",
  "key6": "54q6AasNfgZpxrF7cHXgkLswqCu8bbT81z8QqBiMVbD3F3HqcoADF1B6FT1j4fUvyBsA7t44q3dCniZjqZZkzYPb",
  "key7": "3NrnSbmUkPzuDAh2ScxwhwYK3gyunG3jqrtndxZjVUrDWZee8U7sweMNA8iNZWFKacvkwA5Ee4iTtdMav7XrMnrG",
  "key8": "7vyyFEf7Ph7BdFoD6uQJe2vribR21ajQsp3w5vBp23DoYS1hU45WdnwT5z5WNuXG4h8vFctar8vTS3jCzwmwTGG",
  "key9": "Nq4x8iKmatabJ9j9s49UioA1bZVMdyuJndcWdBTjGpeXjm46qwNWznKur3RufgoXfdeH98vac3o9mGAXVzZAUSp",
  "key10": "3yJEmxNeXLLNbEV351CXsfQSWgey1PDHuKfmnyA295c1e9JcFuJcNwYFVbcAizFYLQNFYKPYUe7kRSVrVpyTieVj",
  "key11": "M69kRRknCkuGuhoga569hD4SBv3CKPfjCqRWi3Qru5BFrAdPVyVkVhnXHHMvmJVwxsiH1KJ51SUz4dfyH8DR1cn",
  "key12": "Dn2faq2pQsfeKyPQnkk1uhkk12ahuVMkmJedPfesgwnYTnTPDxvJHYwXmc4dg4fTCShDhhKkY1qLERifSCcA43b",
  "key13": "61ZJTT9Lx85gthyibuQuQznLaHS7n6St65xchaCq1KpHzKdZuXE7TAXUTc8DgCRsBexgTt1hV6aRgrSPnJc2ccyG",
  "key14": "3YPyrF15FoT6mkTPXfMuUfNCU1otmg2E2kNzKHEmMAqRXievoJWSmGxTAm3eqBorS8djzam7yzqksibB4SUAen3c",
  "key15": "EvFSE6jFX7RkQmGinBQm21V7W2UdexFwt9yfcNF8hEmwscourMfZyYtwYUbFmbw4cqHNNnjoDy67Mhc1vAen7tH",
  "key16": "4pcZNcP9eR8WhYzRRZRJRMbgHQG2ARyRQfrxVTy81kTxaU1StPSUjjKCPGsgNyZhi4dNoPNp87DeTeTyv7HsrE4U",
  "key17": "5SHpmjZCvp76rnAJPBsNUgbesYCis6yj2U3KhEnM1LQAWLixPjoPmQaRuLESV5UGxS3tAxWzFCLC3GZBRUYN7oY6",
  "key18": "4UKf7JyUmqSfZL8KMirE3kJiE7g8arT1jTGW6daGWgXRKf3CPk8jAxPSbFSQSXQ4zsUaboXdQE6xTJofRVt4Zjnr",
  "key19": "4aG4PUQpTEqUqJB7H7UGtCszSs56AyKUE2LCH5PDKaRyGAyUxmf2UAtSXdoYRRhWkgnunDQ4MbuWkSubjz5vjKyH",
  "key20": "549VgHg1dLB2Y1K63CbBaEnfbQhQm4RkqUrMeADAUkb2WmXnn996L6vHMfPV7DTrgA7nc4ykqm1sg6QA2haTkmYb",
  "key21": "4RMHwD99qodCaEA81J6BExWFDAgpcGKTQmYBpE54pDdUm2nD1jTHucgXjw2xVprbuKKqNCADYXcH6zLA1YBrsJjN",
  "key22": "426TzgZBeZ29yuFacKU8TNqhDgNMi2xUcmhJEZdPJSvi6FUKXULtvVDYzHMMrWtvnR2aB5RsyymGw5LFG1F61TVg",
  "key23": "Px9gDaFouHWj5iuPLxBX1WzSqxkvymmVbTXzdEy3VopCh8ChqQf4aNwHvy4AjMGsR1442xBFu847GC6jD2HvCiJ",
  "key24": "2YLMnLMi2GJUUMXvhf47aLuE4ZdH5zryDprgyeniq3rnkqFaDWB6vkiRqM5YN1waV2MRzUZH7b2QHEy8R1CvJAqJ",
  "key25": "2b1nfHCF2R4AYwde4eUhTw4p7vZPL5Z8sMNJjqAAmLxrXFzGz6wVVXm7F4mrzJZqkAMYQY4LuSH1aGL3fZm38kdh",
  "key26": "EqvgefyvQpRYPQnc3bg1KaeucWg2pRCnYZVxoDUeeZLS1WheSgce7L6FV15bGGvuQVLhXBAZ68s5qA3NuAnQm4W",
  "key27": "CdcXUMgXk8kE8q3JkzGBSPvpqwsb4LFSrkK5AH2DP5rB6dpLtLjXctG2XX3RjKxcBbPLD8tURPGBvhuLe6LiLbR",
  "key28": "3bt7JNfYM4viCjHvyhYUZLpJDWVvbjUSE46cpubY5WcMSrQycV7t5nHfnyeGrQ72utNhAAcQqMLy843iRkVt6xQw",
  "key29": "23Rp4XtRKQKMUrcNoaTbw9SoNDxb5tW1FTASckiw85eJHABvcCt2evSMmhnVboiUvvBHS4SKy9afXFYSVfTzuxEx",
  "key30": "51eGwiNFp8nGvpuxKWjeuwusDAVevYFMuM1qUXVURz4V8W8pFuBdyaPWyzddpDzUuRFhvZYHMYp1dVucYGqmBg4V",
  "key31": "2e1ADut2kSwYAGKUDqVUf5xVGBPRY5HAfEmpQf1Mfs5xM9rqixF2bYgG9tG3e4Qq58WCUzjYNDoyeLYhM6ssfMwh",
  "key32": "5bPwTtmcaP4FF9VTAsyuxurhMUiUPK1QnJjWBtAxLCZiYaRrNy8xx4ME4ZFoEpSv3Yv5sab4YmQ5xnaoRQuHpCXe"
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
