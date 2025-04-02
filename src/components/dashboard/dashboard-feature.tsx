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
    "56NGDPPeTmcT2AzKU5VtmcyDkDhtS3cKyJouk6Jvf3chGnbJycsk3E3RkRxozGoRJvpuVfx49rnqyAeF1xoNTsSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBS3Dta712VdygWzC8WD95JxGTEDL2mmjff2xFWw3SLMeAGXFEfRdtfg2ssGNUsekx7qNBhhwvSfamBsSTASZNi",
  "key1": "GiHfHsB9hW7L56Z2vMaiKeC2iA3UyGBGmpnfCBMfCdQ4VXPgNGGquKuRstQaNQs5L5oGhDfjhSztTQsBtDwdgBA",
  "key2": "543JgGZMUYbip4Qfuoj13Gp3XXxExBkFVcoJoEbkFQNyuswyp1Shc4cRSCiuj9HR6yKN7pWwhXSMLyLGXZByHRFZ",
  "key3": "k5skDQMGDDrGToj5ZjQUQ71WtbQHCnDrqYmw3NP2kmFThbZ8U37ip23jcFHeyiR9qMU3Vb5pV4KwqikKE94vWGX",
  "key4": "3o38tgkMQjPTR2y5smctTYSBUfBjnPbJTdgzNyxgiPoznnLv3qqWbKDdN8n3MTHYwtLMk2wa6eqVj2vgZTNJ6U1R",
  "key5": "2bYhhnCPM8FhVLgtT9jCSxSgR6nFLLf8is6dvimGsJ5TxAyQykLAEbhU9LFLVnoCKp4LSW43bqiP63ujmBUBwf8p",
  "key6": "3XAJD5SxqzptAYhyPasVjnQo8iwobT3FQm4wct29xzSHkLdPyU3sv8PB1MUJzv73X86A3sADPiKULx5YWcKfwrEK",
  "key7": "2Qx9DcwuwNCTr2wqHv2VLLfgcGanaFz9i5WZHeb6Yp9zBJj3Wfuxz4DtxdtM4sVDrgx3B4AuxqRvHxNAK8jEpT8V",
  "key8": "3cjQaESckbKcbf1Azsy57MjYhDaBMFHGi55ei4dNsDHun1w5NRvUQWGHBgujnWkFFLQ5wHX6ncvm71qacNDgiwAc",
  "key9": "5XeArJ8jRvpsansipRiSzmi6WHYARhHf6rDThEXjVyCZvg2tamSm6f2hS6YSsxjAdBUv2LEjEJFmMtzgKkB6DmgF",
  "key10": "3NKwpi4A6pEiTmWeB6ojc6cH2vhWZtjxitdoRVf1tAnFmsH9CFK98yv4HrTknVbPmetYKFJJKkHxQ9sSHJUM8rJo",
  "key11": "2woUN564VeC7BMt5oXfczeebYWHsWzmxTnKygZuJwhYvL26qEaaWXMLZQuRYkTkyUDAWQjRA2sozmbPbEHoPFyoc",
  "key12": "2S5BCCRXHEZHJ6BurcCUApQzEoVJqnsYGaGgasrxijCHBRyp79YSn5GZXtxgqBWbKcTSMDRifg5BVm9tVebaM88f",
  "key13": "m8Wj2CJTdvy8UurRHXEURsPftwTFGqCLUqWrtFNwdwtVTxXbxkAHtRSUZgnTKDrw47XDsPquJCXqmAhYNfaSLSb",
  "key14": "3uehhr5Ysx8jHazYhqGVCzmeSDhFJw95CS4kQBgiHRKexRLBidXGd1D8hGGfXPWTcQF7YubmVR69wtN65y3H7g1D",
  "key15": "2xRmnefm5VfJLWgXuszrSZtmg7PbboxLBkixeRbKo3Q4Cch5qSpnok3gszt8oSQyEY6y6fzqYmbcSbqacW2ViDk",
  "key16": "Ubn89aPENnvvYKCHqLLhjUrJdABCoFTVbKBS6JZhMjrzvJXRr5AtHx6WSMD696dr5Lx5BN5FpLCALJdJPKcbUkf",
  "key17": "gGdNdNQYYE72JviUTurSEzFTDj447v6geVEi9c3yqCFFkG3JFHCLYWMMz6GCvKBwgwBJacZVbJXu2gzFtxUxm46",
  "key18": "3LkWDmYZCJRXmtxWN3SUPb16m4XvsrAw53Lgd1zXJEnjbLhnj739i4gqbn2aSvbV83npA3v1GjPWXpCZLwL6gnSe",
  "key19": "2AXn8W1WA35Td9bdxND55WWcYynSjCWZ694t3ruC35GG1ZD8yT1ooKRLNTHhJj4pT3jsKvbumKkTEZs8c9MCz82V",
  "key20": "64HY4TEjDAzC34D5Bai4i74UL8vNT9KCLP8j99DK5WFUPSqRHZ6T3WukDRrGpBLdo1vhCkV5p2qMTKKzDztFRX8S",
  "key21": "5AMNQz4ogfpYKj4h79axQCAusi85J6YgysTe1C3XmEhgJ8ojjmoanm1bJd1Aj8puvg4Mnyx27HENKmRXZEmDwbZu",
  "key22": "3vGkGEhSYqPwhbujskDL24hDVuU51vhnWgmffVJLs9jhoY56NJGnkTocVfQFFoNmWSfwz8XudbTgAK2jz8ZhMb2b",
  "key23": "CTywQJ4F9qYRarT83u1qLFoRZm74KB8TG2rPYDt3HFK8m4QGaK4RvHpHQKbs53bfrxmyF9yba9dF8EMcGzYh8K5",
  "key24": "5vmDJ2HG3TSYfMKytzvR9L8K4cDa6sZDbtxBNwWkFrnehuvKwa9Z9YJ2JLokAvqty8cLczyL4aBWni8kCvwUfKps",
  "key25": "4qV5NwtehsJ5La2z9yP8AViWQjHu8VRRyG8jrojJyohHwh1Y4s25CCLencEdybRajyTeBhUjNjR8KvqAExwhVtLW",
  "key26": "29JU5pLzyosKtQT8gzB5jM1sXnT5tXHPGwAMd7v5Wi8C2qXQmjC7TuTZzuNboezVKPya6eMiWhmEcd7joRApkXht",
  "key27": "2cBskPqLuciW64cGQd9Mhq7qJB9w8F5FDLDeW3mCaVMRFfveiMNNiAGVYtUEMDwCanNr6qLS6qb2xUVQwxGad3Ge",
  "key28": "3HXA931QeHsSzrPfJubAmiX7vZkgEjpK2b53w3raA5Bnq4ithoxTzPtAwAbNHCKhjFHWp1emH1N5h9ZGKLQPaf4z",
  "key29": "66zoHcb9jq19t9yThuz6neyCUYyRpvbMzf76x3AmP8QViG5RBN1HsdqnqcG2qtYD7A432qox3d4MQsZpuLGcfQQy",
  "key30": "3pCTs94uZDJtiqdHaZFL3UycD5J2dHgqdgBdpQ4PxKGdMER8ygEGXH6u2eF1VXRhm4dyxSLztScx3ZfovZ65Nw1u",
  "key31": "5bCKG53Xhkf9hfvf6gakVW9fGnVJB6JjrwrwDf87vJGxqkvWVbuXyBxfcF3QPX82aAGRdF3pg7cnuLgjzTYNXwiZ",
  "key32": "3J3LLxKHkKadFz1TnHoMKVj9sDT7XFefbaTbZoUgHCgxNnAyoSf5Ne4tuzfmcPy3JDgTXmjnoGHQepM5YTHr28e",
  "key33": "2AaM5xbAzouGshXPG44zdS93P2JD5XSLyX7xdYrgQqpC8AxeCUJYSmojrSGRQQHVbo4r6oBqttbWYsRx8ZoyDS5n"
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
