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
    "5YAs7sAam3fY8rWB84EAbBYQ63Bb9XCBZ2UoQtNwNFfRdbXNQqjKoCQVQvkF5tN87BfFFow9nV1bo2N7t6JvZvxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jekx576Bo26sF2crxPugVyYrXLjL43HCGs4xaM7sDKJS5AoHWbUARrvUXfaiLkqAo7maoyKQrXtj2rGPW3veCLh",
  "key1": "4b34agC2jNtbSV4bk5vJiMgCoDZSAUBhCfLN4x2Kf459TBbbTWoYcEM5jpoFAg2H61Qx72jT8Df1urhcSbXAsWbv",
  "key2": "3nD9ymTf2Q7X2KQDVA5HXK5AyboGEAb3f4DGH9DfDPZg9i7vYfXWkxcCiSLvPbhKJyurWw1WoFerVfbtWXHnfNLg",
  "key3": "3PFEsAUuBLpYtFDAVv66hCxvRs1v54aajQZp1zEtMxExRHiD6UuEkgim54ugRzAj7qNroV3tVgRvP5NmuY7KGn6w",
  "key4": "3QSuSiMKTfJVPmy72C7YiPdh9o36C7yhJ4jcX7TKoX6nVqu1WJ4e5LtuVXyjeanSVA8mY3P7e3Pvc6RgxhCDnEsz",
  "key5": "2a9Z5um8PpZv6gSjkdc1nTGGiFaGahPwo7SYKeVubTqZt9vwT5NJ1dsRCo7bwgkkX41oZ9GRj2mHdSsXXEF5xWwq",
  "key6": "2iD4PeonZ2uiQXEWxtzGjueExZFAa6rPQtUCNBkQXtCQWZ4LK88pnCYoqzqwrGHoedaeNotTSAw5w4HDJJKo3hC3",
  "key7": "3W9U2fYFTcs3KqSVco9TRQcUiRUvbmWF4GZtkhCeGQiL4bqs88jzS81phK8AHKBzh1t7Dec4QcNU3Y7kE7EMYz6B",
  "key8": "ha9HYLuXdKHvns1259DPGXCzWWaSvpU1apwjRoMhJma55t4AwSerg3gNHm7ZAuZgADsCn7Dy9XDv5aJVkTnh4Nt",
  "key9": "hxmoR2vZ9SaHdZ1LbcXQDYcqtTvctvyeH3QZSDnTtAuz4zkqDQiVV8nv6DBuFJA5EBzYosMdQ7tnXMFvfAZxWPL",
  "key10": "2QQ4PjUpJ5YPTwQZkzWxcRbEzovNHbehQkVLAoK2z71G3ATfKyB8KNrq5ZCzoxAxoYdcahg4FhGPACvr2jxK7zgs",
  "key11": "3fGoVic4GnuvkVHApzE8QdJm2edkvBsq7gX77sDrhNDrsc6RovkVViKR7YEmZHF5TBctTYWu7Ff1tfKVnC3nevMK",
  "key12": "MC5vhNN8cfyJdkAktW214ixCqP4SzdNMvcZYF3cykjiw55CDYJqbXuSqUies9BwKMBMGeDLBmMihXbhbC1R4GxQ",
  "key13": "4SVXsEA86Q518YSQjKDt6U1aTaBZdZrDnmYkRitym5ePjvTDNr6EME64LMEsnsZbxgVyzCFHG1VPHSgZHkDxtuBZ",
  "key14": "47SoZ6mYSx6sZV2T4wsfH5ZGfAkHNpC8QYak15SQmWZazu8FGti3dnb9UGb4QBz1nnWu5aSphpZDrFhd4qTvWBLL",
  "key15": "4HSNYjeKbRzvDvCgYFN6YZas7D4SmadPxLfiUFmTyHevVoLVosUMPHre5i9jEBrGZKFk3wypWkN2rFJ1GboShbYF",
  "key16": "2rs819A19bAbjpXKxfsvkXRFnQRqrwgSXdFm9sa8s3kimYscGTFxMqsWPMoJ5gyJp7ZAUAsTHR7Hr3DEbSuXCBFa",
  "key17": "56bmHSA7WLijZNec1ruiofdt6seAnfESsU2g3A3sXRsVhxUAjnLFmmCBFsZgu2vY23ovkpELWaMCJAixCu1UuSYm",
  "key18": "44EokMnQEJhgnRGUZosvSLdy5EdZ1aPKsyaBTCMiswzj1R13B8Bx1ACyzQyYA8kRgcKfHidp8wMNUEkAyeAm6ziS",
  "key19": "3CuS4aBc8nHWaGoTkACkU6SUNT9DvHJbQuQoFL5jqAJEfL4cfABRNAE5hMG9hG6xPjygye8hFLTJ7tsGYwoCkJHv",
  "key20": "pUzbEZC3qPPJNW26GRmjkvv3dvHifgjfzAP3BqgYpuVkSECRgxNUdJKBnWzBsVoEXzNQ43hYkTzRRnPzBRmRhe2",
  "key21": "MYsHTx1hxG6LrmnbfHhh9tL2uCmu8JGHUkYKtFuG2KMJVfR43SyTraCnFbCa4yhkrmsaVDW7W6M78c5PwoFRbqu",
  "key22": "k1aKEdrv5mfoKYmsqNad2F1MZgPBW3rVwVfpdc8CXqDHw5aYxCfeAsy2VebE3mQEyUNGvzeKmHSFYsXHMsjFxfS",
  "key23": "28CCXqbGNtCcz7sAoe4BjgWqNdbviNWEAPR7tBMv8xS2JarUWuQzHMGYsJnV8VMiToTn62hbSjZaXoCqkRxTgFjH",
  "key24": "4neEyotksCuUwznayyDSE8D8x5Vud4LpsvMRxo63b8bogXxfys1EbFmq9rKdCtzr4RMfWqzQfSxUtGXYGi4TVacd",
  "key25": "wJq9uWccN4FZ1Nzr9QXpr2f7VM9PakLry9X3fQDsGQk2wJjwuRwnHeDqrxiGvKhY6Q9d5doM6w12gKA3LKp9jY3",
  "key26": "2KyQmxM9zxQ1QyBY4NPVMv7U81a5WuN6wzUUEpGx2SSzqQUZk7AXCcsLMb4Yh1gWC2ug7p1qrScED5XPkNTjZXfc",
  "key27": "3hwAcEqCvRV1NbSs6Vs3qdnJF6HsyYqda2w4SKY2zGyEvJb4R5qA7dUo3Mj2sRYuDQ1zKxrEBEVnuhULB3hb4hNk",
  "key28": "JGLUQuX2XaUYrXsZ4CRPDfE3ydSQukCFGosnAGB9w2ajBYu4xuUMckefAs8jCBgHi3ZyrfMDgYWaGCAc2yMMP6W",
  "key29": "5koGSeAv6pbkqoSBefwZmN1fybMZ9izZXqtHuaVQdEmfAHvVLodP27N9ogyNV6MZD9tD9Zw1S9cvogUFtQH73S75",
  "key30": "B3ZXBaFTTyKy75sHpE5uqJNLFSsRb62jcsDfkjXBvJyND13VFc4sebUHmXeKJZadYJET8C3H7H7Fvr4E9szjZWg",
  "key31": "528xVBXYg27pEgRdEHbHo5HL5ciSUBxrcbMbBrojjY2GPM6T7W9asnfJLFDPa3kFLuobqENTBhS159bwcaE5AwtL",
  "key32": "2JJ958dm2RLBHVdWQchUdX4tFBGmJJe6PRteAfHKr7TuX6Jc5VQ6Gd8t6a9fWiLpEFn5oZdsebfm6qU6RpCp6kuQ",
  "key33": "54928gnS1hYQ9g6bdnGZmYLvsDaBeF1d2HNHjjbQ1nFUcJbVxEsi6ChL8MRKvKy8ir52XFnwLyCV3HqMAZGqj96o",
  "key34": "5QxAkV4aUHuKp7p9fkxWUDuMWLM41jGvxRprTcuVNxQpxniVT5jyNkwrtxnp5bJRtxr3dZzZHwqv43t4wYfa2JaE",
  "key35": "5Qzie9sZ5pygHEu4mRbTbgSnj3u3SSLw4Zo3D4nBCneojjHyKxadzzXj4oyGKrFWETsN9YorLeRdxyvHomPfheCe",
  "key36": "4L5EmCR1n9GfuBZgj5om3oFPugakVb6oGPhq5EmSFw2PhsvizHv58aQqAgQMVejdhrPVCxLGXxEnJsaPAqHHbdMX",
  "key37": "2CajVigTEettjQAPLopAWrWobUQeXv9juarBRknxCoTWbeepyGaRP5dVDaWvz5miyK61666a5iKSxzFzZoqUnboA",
  "key38": "65vek5txYV8Syiy9jiKGgFisYWJwF61agNd1S1oJiyUBSCwuv1dFrGgdyHd4fbwrJtKG1GhKhWPRJTz7H8yPRAtM",
  "key39": "5C1q6njDBuDKmcqtwEZZFxrpQVdcsMyksG2EQqWjwDYHm44h5ftwao4ZHFDRfVookteGrujXLN6z41ZGftxvZ86V",
  "key40": "2XKjhzfuKzSy5zNrWs6BeLaqKdiL9BbvaVWpqwgiSfP2yymSyjnw4nbg6ELtTJgN2FseDoDx7zbAPwt3aq1tgDrr",
  "key41": "4aQR5bLWsJqaNFAMCDCgnjnoacZwFo7dCGCPR2tgiYLEbyg4oj5v2fWMgmG78eLnEtFxVFij4y2a4LGeyBRuuzWF",
  "key42": "3RvNNDwgvEo2PjZdCnvMQghzieEEZ2g4tJzoNMHUSBs1eaTpd2J3W3Xrq3dkaVdJ1oBTKYBpBwdktwgPhjSM7dcP",
  "key43": "23CF57vV6Y4u4XLc7LQ9yL8ZbxRNA7YhffXKuEw9hwuT6BsqH5qv585uhWUuGGLaEQjpngd2UNjEs3dHYyhJUGqm",
  "key44": "2H7cZV1VwGDezhNGscVx6gAMQvsGz58zem635PT9uD2DBBbXFSHxFmGMXUirpYkCR2bkEqAC9sq3a8pX8bp6kzKJ",
  "key45": "53V3h1PpTRRERk9aZYkja42Mqcf5gFRzP47LbZJVoBBcvMGiDEjpL8kFWSYDepk5jKBd6USXC8KJuoxwADWBTef1",
  "key46": "fWBAJBtD8rEH7PPSpYTboaQcADuPgzT7o3MoG81xRxGg8VvnmZsmMnnv2CmTtwhHbDMtLJiVByHj35R6RN7ZTXQ"
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
