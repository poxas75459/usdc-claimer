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
    "4kbrUL6xhbx52yepusg82LCRDZj3CqXskyf2Wuc54XawiJdZbCfPFAGDtQi8xNkd1odD6mF2vFNCPviD4wkXApW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35iZq2fFSqdF8aQTyoDqEFSYLwqeheuZ3ejAJuB49K2kdki5Sw43hMbDB6hY2ASrUHSWHZ1HCNT1j73Jj82Pz2Sk",
  "key1": "5izWubVDn6QNnSAYEhMemnENi3NQqRBk3usDgzyhuRADFWWhKBkq7e3uAJKQRXnKErWHkJFuGariZEgeBrJapC6X",
  "key2": "2mfWjgD5P8xHjPbQpazZSP1d3iEEVYMts1sF4qEEzRsqK9gLyooRQMt881wUf7KWsvkRhYBTVZPrdbGU8kFFmVdi",
  "key3": "3CL779xt46EkGZR9m9shHVwJPu61MoNEC86WM9taBrdtA24FKcKGvhMkNFtiLr15iiD9S9B8jdJ2oeuXp2g4XXrM",
  "key4": "5aAhusbiof5yJGBrHFKDBxFATQ9JCeWniHFSBiePRDCz5gYSsenppbTfDqrskY3hbjuhdb3JJwEPeX3fDPVBbzDQ",
  "key5": "ZkaVuC1Bn3cpDrg88aFCLT8Ax3QL3qnVCakoH7yyBEsHZ5z8rptJ1CscTxhAKyqygeVp55vtL8nw9TgDf2ftGRP",
  "key6": "5tx455XNgux6dV5XsormiYXXEyRRDMsRksBhbuuEpsjjnpZD9BqPsSCZ7JfpZmEKbXHqejT5Ju3kRqD75pVAqUec",
  "key7": "2NwRkYDqKhprsTpP8WH5gmJ7twLjjrfAUzRo82uy34AoHsQPjwZKyVERc8n7KEPxyCqtdQFXevXiFRgNz6MFNBVr",
  "key8": "2qx4PX5eG9HDCqyv4119ZrgwNpetWsUd3gBUq96iH9NM68GtFPxuohREg3Q5WXd937dttw56dX5QAVwj55dD76TM",
  "key9": "2EqnLhunf2eBUtG3FB7UY214SBgj1fvu819QWoWrWmHMhMdvBYjD5ECQrj5drE7TUx7oRCBq4sqvFaGYyPEr19nm",
  "key10": "5ToEGgRcC5tg93gjVthpsCANH4MXP7rW9Q7y9infzPwrTRJNEw87n5y4c6xMUygcyT7EVPwgXtxvgGxgnWG9HpLA",
  "key11": "4tM1roZptJqT9CjJLacGmtB6bJbNcEwucE2g75U5uA12AkkXw9oCUp8U8op92gThWP6JVgLpRTRz7UXdFKGLQjoy",
  "key12": "3XmyKvdAkpkQKtkPygRTMdnmNFZxdcFYbo5PSFAsARSF8u815P9cr2QkG2GHhjzRBANqt2P7mHbPhGq1pvCbxLBF",
  "key13": "PAjVMi2fsKQa3gGFc2LUfzQztqucJiwPnT3zbndhfBNXr2TntJi72nW3h5WPiWug2hxdAz9RZGvJK9ectgkSspQ",
  "key14": "U2V9JvR7VvswePXy6Mr7iXcJR1pc6WpMTTgMhdp47c5NJSFM2s4e4qNTCoswDoPCrTQkksqJTf5GmVY5ZwmRLzp",
  "key15": "25vghwnWGSTqwS5xtydsy1dMJAkpipXGJBTE4fSCxDje2LJouFKwVwa96FWauNE5j2PvJu2J1gjDBj99tH56UiTk",
  "key16": "aYxneXAqKacwx3b9iK366uetHA1CkmArrcPQEW7ZbHdLC9B6HxmAo62BCjBS3kF5NTZBErR4ziFYEgr5aC4juNX",
  "key17": "117ZfDxy4hkHhUumuf5hXBvnmmerj2SEDraBLWUiMt1RRETEp9EqduxVn4ARNBhj9qFsNyz76PwqyUik8U6bHMu",
  "key18": "4u3z3J8p2TP2f4pwXf2SKyqUysN2eamGxVqp4vJ3bQehcuotmk6Ky6oBgSWFqByygmRHnBSE785egTCuDeLm4jbz",
  "key19": "61SQ2MPA4hxEJKf9ePt9GEvNGmTsmfXFgCgn7HNfY5DHf1ueySzco4NWsg5r5df2y7SQMdc3reJogPVffNRqnFF5",
  "key20": "5pgUcWkndwBG9UDUZTf8Nxuir7dT7dRxsrcE3XYJLm3Ex5CN4UhPBGDapJXwr1FFXQwZx94dGbYdsCMto5NvkC99",
  "key21": "4PMsaruoNfj2moTbUGtrKuUyKzSnNq599juScive5gS53oXvqEdGXoo556neY5yYLV4oRVAvfQ3C3eKmGehCdL3Y",
  "key22": "YZKDXEVWZuM8jC25Ccjn4nHMHJj5i2MfzsXtnKW9AtCuhGF3UCLhrUMKM11sPbJ7dJm87UfdDRxp2kRXMdoGwrU",
  "key23": "5Pvfnc8fuiUEPf5wv4yTgmkaGwRQpfGpc7qgbHsWbfQxDScdUviK7LfhA4YmdqrfQWr2ASgePA63yq13NZUjLwZx",
  "key24": "5pfGivUNYeQActG5ncR3fHpdafdtvLqXZJSrSJERdsBohg391833pnTcX1aPXjX86gxHjR86LqDzX1qxCaUqj1VP",
  "key25": "5zw7VdtuxQTuA21sKJHGAcjpooJNTL2rj7xYoUzmFvt6wnRLH4SoQsHd4LcbnqQSdiBZQHzjJiEJdiYMpQPD9yeQ",
  "key26": "5JoWaYjRxXXjvJ6tHvQioF44srmJwg1JfHswvFJJu1rn8dqahkBDH2E6r5UiJMqaMHpXk4MZWvotPcodcUAzhTYy",
  "key27": "39gReThUP8FbuLnLTqkpu96D1UYqwtw4FqtKuWih5cDeULsHq2sTWssKWv4yVGCJyK9UPHDfwCSLcdWiaYs78urg",
  "key28": "2d67U2mye6TxqyxEqghkKDGfk7DR7jYbNf1vxFNHW1SmEcr4iAvZVhna6uq5CEGYc3k7Z5RcDB4HzQmdiftV1quC",
  "key29": "5WK2ZLNwdgNePwJoP5XEn6QsjuqA2ScW8eTuCYnANMPxJ2qzoahJBQMdzebSfCmEJezimko5vw9HhizWpiZbRcY6",
  "key30": "Y8xQe8DYquMdZTAUtfEEXLRkfBmiCqkVg9B85DgmqLpjeA4k7gZC5um1L3zzzeWKmL27yY6gicUwLWvrwHm71Ez",
  "key31": "2zUmdJeLzM6bKkC8CVqE2UVWtWAddAysrcAa7E1uKjhgb8ByX3GzDJgGhPZWLnCEXjRTHeKz4Xpjja7qFyGofPnq",
  "key32": "4bTGCuaPhBs7JKg2vE7JbrGYY7CquEwCWZZ5wn5cVbCrciWSro9QEitMFjghHJCJeYq8GzyWtWF5gR8DFFjVMiSN",
  "key33": "5BdoqT4jtCU2wCP5q3DC9QQzcGv74iQ2GMdbrKwFVrjA1i95KiJgPj8ckiqrwhdT5g7QeREe8Ey1Gt685bKiikqc",
  "key34": "2sD6X9g7JLUQu9jTPXPfo7HYbUPinSYaWwrr84Axn1maAzTDkgPrWyPekh9UKVy9gZ8w9skUhDUoSnSHcDz6XF5G",
  "key35": "2wTNxAvuBeb9PQCLMcFrR8c49Dccm5qH7cy32pXPJEyodvt1Z8rmQGvzv49UYE3kJSewjFCBRiqPdpMh51vPNKML",
  "key36": "5vxxBpLsmWxVuiQBYUF9nT2uK63nMrfn3c7cKVdTinbcgV67v3CEhD9VDHcop987ZdXjB9AcmpLPFJx6KRbr4f7r",
  "key37": "2kNtY4mjc15pVshDEwaBR3TDVWbJB9tGYe4oEeH1EDZeWZkaNqBhH9cFuNLPtbgzzYrpSc5691MiGB1uAubC6bE9",
  "key38": "2S17fe9EMmEyqR7eYUnCin44pKCLmrSReo72Wn7KZwn1bR2S2B4w7ywDewPUhQwyPHg3toHYVvhyrvd3ZyVwY2YG",
  "key39": "CsM6wKFu8YzoELjLbGAvtGUSWWysiQt21P3vs8GbvN6FDemzQAL7jRxtk2725ghxr37tLVeJvwYrSAzWw1BJn6g",
  "key40": "5HPFWKvaAm9LqzC3EzaXJXhMqFmB43HAfKxgYezqSo6Pn3KniXF26nw6vAn1SiUTQAkuU9iw6zrLLQEwtnXspVzJ",
  "key41": "3G9yqZ2sVDAGJxt9FCMbkg1qBunpY49kGJGD4moL6hxvoQxG79XYFw6iySG53MYeMnvkmEYVSdEtJVvDmsVcrQXZ",
  "key42": "2Ax57wpTcK1s16XUpcwQKj1d3tH5J3fvErwLAXuGuHdFVgSaRPkk1BXKFRXtsqCPiQsLKaccwAq1U37MeZzzi1uF",
  "key43": "EgnjbevNtDNYioH3UedR4gCEKzg7M77VkGuFTPa99cpxFB1ESJZv1JPwGNvnDFRNPbL6DqYufmjkLYCjGHWHGEa",
  "key44": "2YPWQxrsefjg3YF5w7rYVZFCLPdxJA7TdX2Jry9NpVcFrB2S8gskwBjCjSfaRiwNfCFmmFvH6RA4BaEnFgye8Kyh",
  "key45": "3GtHnQxnNEsbXDUieCcSfxDFZsAnRGDY8z4JiterPnaRUS1QieNM9nzKPgx4EVQxwa2nruCufPEr2W2fwS87Sy8E"
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
