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
    "2ujhgxMuR2RLvgddVYTGy5w4BxE3LXjb3ZzXmEjJjDrAxA7axrHqmJHMmSqNoVf8dqGyiJMU5Xy9Hm7SxvTyAmtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwoCrBeR4MKv4XMPZiH8jaAF1y4P4QJUhdfS8vitUXbc13tziKi7HnR8JcrDwdhQad7wfCM4A7Kvnj9oLK9hagX",
  "key1": "4p1xZK6TZiZQahLxzjMNc7RA2zYvQsV4MncYaFL6LVpHybtaYG1boNmwEQbU1CRNm4zoFhrAgxbqHaEF9guLyyLt",
  "key2": "4kztiXFbs4zGVKRsrb6AJMmoQSgPcMFcNgWZnM1chqyg8rEN5nQPRrVTp77H4ya6cSHMjacSNDoxN9T4ACVzcQKk",
  "key3": "WMtr3kML2osiJhpJYpjfKP1D3YrCwbWPk2WFULZ5zH5RiqgaXwi3gebrBaKhcXcCrYxys3hFD4v5tfqjeTCMe6M",
  "key4": "5y15YFYkptcLfcmDZLvUXLgLZXjoXhpRcmDLg7hqMqQEBmeAFVWgvE8ehNhJUe8M8FyBHBg9TjyYFzbdCkjM9n8J",
  "key5": "5C7DYXpGW7rZ5w6ckW3824Dhz4mPQMuYinvrQBuhr8pv4U23yjoYhB2ZnAkgK43A1bjJ8sZfZw7ke7T9YGSR1Xqz",
  "key6": "4qALN9yzFb921TNTSdLNT5jjQXXJGW4yLrCS2A7XXZRruQjaEnwi3jTmrYyqqfdNf5ykYsTErftouAzyVnaWUUas",
  "key7": "2Rn1ZSWMbZDM8za6A8BUhJEx3wEWnTQQmykFSQ4Lsi9e4yB3Wz3XRvp4UZyHAk9DyCq2w9rwPV12sqz8Hdi8vGj4",
  "key8": "MLFKVAfo6rego72jyLqbus8Y4b5eag4CjANYVDcC4JN1dk7qaZP6B1jicchXaUWGTMaQJZhBr3Ru82aaZiGvkkL",
  "key9": "5sJPi4jb1xCthk9YtV2p7DSrCwRFw7WDN2EEvd2SjvFW56oywovA4xKr99zoiihz2he6orFmBkP6FshqJxDL6x4X",
  "key10": "5nAf1UsjvHWShnTAd1cZactpKm62BXxHr62CgchGz3eqzGyv2hf1Sq7fdnTnYA8LgTqARjhpQxGfRRdUqj7VWAum",
  "key11": "5QDENHy5cDF1PNdMjheLMpwsPZhJx9SiDXubrdJjjgpideH6qbWB3dvFBkxjnyhHkUfMYQwPZRN5W7EW49E7R87s",
  "key12": "4YpApao1zMFT6D4o7AEkE6nhTpL7JARmn6NnAp2taWjw7GNPG4AEbKxQ26YRE2vWj17o17usowJpPBMJiKe1imbe",
  "key13": "63jA6ocCXT2rxkMybC1b5CTpjfYw6UTC4FCA5xYbK4dr11Rj9BxuoakTtRHYeLgKYjWUMGj7kDSVYbMZHtxTuPei",
  "key14": "2eRfAtqYRM1TnptUuSLvTKBNdpcgU3od6U6zJ6wuFobY3jrKbEESyJqvYJSqoAS5tfp8pYBBPJEMiZyzPuC1fzND",
  "key15": "464WCLTvPcTTL2xAFaAMbiPsYpeLdVqLK9REKL6dL4RTd4TtFHe14W6Hi7rGc1AUk1a8EMpPxFykrZvWd33bSCQ8",
  "key16": "2s3Nt1eN1c56V718CtZSHJs7aW7VWFcFnoYHP67Pvy14s9JEGJHPXqDxFEwPZPZfC8tgwbcq1GXxt5RYSoisNrFJ",
  "key17": "3KrJRiMqmvU5XmdcdFQ4eiwKKQe3gtb4EYUR3zqtdq1m8DFdQ99oQquhruYxPAQie2uHENeYt3DYmL6J3Zmov3wz",
  "key18": "5FeASwwf6PUGF6pZYQpF66uGLVQBC7Qorgrj26onF8wBzSAzpfbnHosjMw9NfRxASTGEtakp6DKGaSr9bck296go",
  "key19": "3Fx4KVpXdtHE6Bz1hPnTj55f5yB1hrXWkMhV6kUPDgxNohbjGrArrJWBayoVjNp3VdgTdKzrJmJrCiiaLAy6ZXFZ",
  "key20": "4oSLEtYL8fZDCeTnP8gkDfnzuuz7Npd5m2Xvr3GMEpaSYbEUNfsw6fgi6Bri5ac425A5YreyhdKn7EWq6gn9q8ya",
  "key21": "3v9BpMrcELfCUDESPdzxvnR9wF4VaFSbBxdwfq8BvajUaLvu9qS8GHYmrghgsaX7GTwm2B43UCWpqJZrcHrWJHU9",
  "key22": "63NmExBn3YAkrBj1y6hTrmY36gyNzQcrc4iwJV6y1oktHik9TuaBTrXsTzhjMXjvH4vLcDSV9UwxdkChCrhFsZ4a",
  "key23": "2QWwUCoZj4GbheJKguPaZNm2uNHz91VjHz2VbVDNizpLJ4vV98X9hWSoWozcdyuH2riFDw2oon5ExNjiSwELn9Kx",
  "key24": "2qSfiZYy8VYhELzbvnWJeVLZUZcj5XChiaE5FZKZF9Y61KVZqdNCXrjYu91gtehHo1Ln4cLtTN6N2KqCgLDcFcn4",
  "key25": "dWrvPMQRQQ92yJaajkUzeiaEWzsaqyzb8GPC1KeBQ3QKpZNfqJJvd5hGPnc1AkdRaqrxVG3RnsjtYYLwo6bmdKJ",
  "key26": "4iFsK6fBoSspiUTwCyhQQQgkwgxB9sk1MhmbSk5X1eWasKHoFHP937zX5Zfevuk22Pj8wxYxYpED9vBtUsQLcxZZ",
  "key27": "hc8MigSQAmFLEh71ZLFESJw9aKUioWmmkg6JhrvJmvXy8nNG198cmJQdYH2MKa6HGjrRuhJKf6nbb4M3QQZS8EX",
  "key28": "4ciGPxJLFWM2L5ocKkeCdh8iSPmhpK61m4qb87XEDwqJj7ncfGJc7KbFi3JpRVJLLnbG6nBxrw5dcHVGh8QcLjVx",
  "key29": "dNHEAWdohbdsiruQDBUT6g2UDXdgXYvYx62yz5MDRK2knHQgapE12XyT8HrZ1f2JwzQqVToPE8ctuUYpLBEaLUp",
  "key30": "2zbxJmADY6Ytc9Grd7F1LMn117eYCKivFjbNywCXApHxtxPJUotwQXbafPHSsjBeg5nDJ86dhP2H7gSb8mEzwjNr",
  "key31": "5jsgM4W5gmhWGkx4rcaorSdq2gTj9sGftc6DPFVDbTYbR4MTbidnx8LgqBEEdR1PUWqt72NncEWfK9gKxEpF8d25",
  "key32": "cs2fKeySkE3tMFAdHWdQ7fLtrSaWqoa7ubaYu5fmpFWzaWJLN8KcVN7DbErBfgKYj913NiTBkw8yDS6JmmNCgia",
  "key33": "5XrnVXZSHeonfWRSMB43XWXvvmwpc1KG7CVM3RPL2nQnKyXtZCG7kSVsjD9eLwwix6N5GnbdoWx747VUF9vBwvuC",
  "key34": "2W7htmimuF8sxkxAgjptf4mse97tfBr8WEUTZhLAzjZE2y14fgBTEaNHnLCKNtLy1jw9ZcHroqT7RruMiy3ifFvu",
  "key35": "3RjEcgG62xTXELMrYnbW7GwoCEaJh4pon3YCrATXb73SoKtGjNAU1TcmDKYRLuhdFWbPPbrgAvwamfwJk5GoZqvm",
  "key36": "2DpqY58dsLMW1gt22Wc45FNtqf41AYB11Lg1SzCcUCDBQGkR4mSuAyemxPFkT6EcB8ayxWHfpwo3qasR3547pXUy",
  "key37": "4Tpt2mT3n2ijHoFiP7yJErK85x6gcTViJvttuygBmBdpcgxGWDYrGQrFDvTML4T5jGzCmMg8rFiRC6kAYmpnoS8E",
  "key38": "5tN3weC8V2iFwSGeezpR3bL9bWBEXf4qd7QdmGyCqu5FHpGYEfAmruXqpuPHNCynXDDjzqQj3WvpWCF4aK1iwiZY",
  "key39": "5BL2xUug5ddgdBQKvfpAZQHyPcz7TgM2oAeBBezabokK6q1f4xvfA4zS6ScuRa5bawFSizBNkrstCuX3sawRHE8z",
  "key40": "5guW3p24JpidXboZ9LVWA9xsjZWTswgJeSscxZRdmBs1qvHyvaqsuHeNjzdLhjnsvwLJ78q39USuRw5Js8dxQLAs",
  "key41": "4Swg1gJNfSpQMrJT8ZmbSpf76bMJQmFggASrVsiAoqKXGJSkj4HhwyVKnSkpTZMF6XdEaJVdiyhwib8zAdT3F45C",
  "key42": "3RS4i6KuYd3KmTdKZLcJpRy3uNFw9sr59uuVZAVXU6hkSkr7VEZw91iPbDeTPn2sNAMum5YhFb2isYq26umpg9pX",
  "key43": "JEFZn47oxKbpgWtQdVuYvz2dFpHocjeyBSXYqc5AoUt4mDVvEQwA7a6EYu4W6oPLvA5VcwcouwSzoVvFYWQVXSX",
  "key44": "NYF86Br3i1imh1Yxo9H5cR5hLGUjtZEcLAtb4eABNAGVXJNBGdZP4TkJuD7dhc4pKo7bHmrtyS8EQPMM9NyEhse",
  "key45": "67XJGL4aadq3PSVN1PtYKSzVa8gijsvDAAu4dKMZwoVAkycjRx65qNeHK9yXPtnLULZgNTYbJG3F7efGXcTCVyC1",
  "key46": "342jAn8FtZVgdpEBSdW5Hd9UdanXyxFRL85o6jG3nSBGBRSdmQotaGCRdott2NuSRdFbvPiN8q84WLm5Vo8x9rUt",
  "key47": "32fmZ5DYZBDgQhj9v7EkNpZPW7arpLXm5sKvfmkzz2cmu4sYMXaMajAeKM25vcP9QjoypN3fRGUb5t4QZaVtHrXv",
  "key48": "4cbGj99A3eDbVFg5deTgWvwtwxuVCFtbmUXjycrsHFNz9z1h1UFBzQeCwM9E1CkwrcBMXaAW4UPPmrG9aAehkkCr"
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
