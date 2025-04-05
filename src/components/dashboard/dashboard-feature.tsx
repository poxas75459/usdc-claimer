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
    "53dHoLRaBR4NRgaU1JFrHefg3iDMfYeg2mznEJ1YCw16ALeTPKkFseeYa3iLMXtvQT3veWFRRsuzfguNujVYG871"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQ9zAYq1ktFkVo63K5f5Jdu8NazSpbWy6zqwQUJq2Z1VrYbeDGhCJLPtxJJQczcUT3eatwUEJpkGa8BCb3HEhns",
  "key1": "4NRWnYLBXhamVjwrN8F2S8ra8hnk2MsgzdRC17dsyb5HdnHNPmuxfND43fPT1SmmNW75mW5cVxMojsNbgqeeGgXV",
  "key2": "4hohgxYS8yDAPMDSvBvhT2A5CrjdN69o849EvUQ8j5m3kvqVHqwfp3793sijrN3484x8QrihvKQbT2FUjMMvy8c6",
  "key3": "4LysNYGhBvQPg2ZdV8Cx74quEBXDomQES8BRsdF7Tij4FTHT2Vi46DaiSNeweYxH8GfZsyjitRUnYgZ5r2EnP3j2",
  "key4": "3JsT5fh2ygR2yzxgRPwcWy5tSabznDrKZJBfWMWDW567mrg9LL96MktYkyFnWnkyfpHA4NVLmaXp7B1i7GLGtTFR",
  "key5": "L4CgAJwaHp2tXKh8VzWbQc9CNmESRwMziBkcrDYMdYTGLnvfYwjXd3jud8JMr1hpS6ReBtuaGjC2Hu3feCgaZsL",
  "key6": "33jxKdMof1KXyH2QXnhXQnvSgf9VCd1WJTDiEiTetSFSG9HMLKGTpU1wsTKSQcp1ojBjEtKtAJPiAms9vTdYVrGS",
  "key7": "25DZztWqKiguJyoMCecHpHtoxZB5qkaRxpijrv1MH8APYc52rCafBA8jgoddgb1aUGA97X9NvymRVF2gJ2E4DBXu",
  "key8": "2Lv3aJ8zyxtvzF2kZ4J6gLjqfLioGmdTpnujh1HqwpvYe82VmGzYhfxGqeSL2jk4mWunFWPSNKquh6iRyvuyrPU3",
  "key9": "4jpJD7T1x4kskFHG2TNqPpMjxW9Sud1s1tWc17fBUpqa7RDTXJB7eo9gfTZC3bcrdbpErkniBFJgprDDhn1RMKZU",
  "key10": "4Aa4SP9wjgFsvmEKMBhVZnQzESbYSKRoAep5pHCppf2yhL32i978cYaefCynbVkY1T2EyzX7LXGpE7PAyKe5oFQD",
  "key11": "2RoqitcqXuN7QrPhY22h5RkZaKG4jZx9QDUkrvMboRr2piuUCfMo2xCEGAbg4mh4b8TN12XVMny7JE5BnqUQRVm7",
  "key12": "BWBr24GoyJ8zbTzKEWhdUf5B7gLA5rp1VjRksggjCkctz3xGyu4WcoZSHXaiEFE2vXK8eQXeJTPwxH4khb455MC",
  "key13": "2V2xbmZLqW9QMvCXNsvi4DUnso9KwME582zqhG4jx2goVskn9DD1nggWTkPPJJbyJpDtQ7E7fyAmNjZSJKnhpQYW",
  "key14": "5GLzXoQnj7iUQu8R8SXes7tZgdQRKvhMf2ECPE1YSq7BXrJbAmWYPXSPcseBxDciKFSEgGBk5ecT3tQ3NVoaKot7",
  "key15": "3wyAgHwzy2srhZX7SFisPengohDqYLjAtqGsenhY9ksC8B5htE994oEypQMH5HYfmG7t7CHmY8a3eGkf6RspCdFG",
  "key16": "3qxqqKM8WE1yJafcb9uHfjmYajopBx7mKCYCPbsphn6epxjK2D7aUozmsRrpSAefSm343DF5nro2u77xEJHRQRbf",
  "key17": "2cCzCbCYe1HvCkDBW97qLHfDKK63A66Mip25eV84kojaVPFLihd6YC8hb4YcVDtr9XFatEH6FSKhxUhA7TZigMxJ",
  "key18": "Ns5DsK1godY1jjGkvcekv9ehmLYpadDiqYXM3MkuX8Dg6zXERu7jZZB7ofkwfXNbaVtz2f1FAkPCkwkn5KwF9yd",
  "key19": "4Cy1bjnzD8YZQiamCNV9QkajsMcXV8wkSGuqdLQ3JRp1CcT8f7uMdh4mocS3pze9o4ZugHTEToSjGMtVsyZ12b9g",
  "key20": "5mA5Y3usMiu8JL4KGyuLszyKWkHtrKNzjGYAdLBXTsU6xkBjcvVPju5UazGp89GiRmUsFqyQZvLSqZyCM11m5aAc",
  "key21": "5FpbTVZWpPPJwCTAxnpv7phC4jzmx1NarV5WmpnPVrWKrxVxqkqBfzEMcVHGhppaEooxwYD4tQeXR4quwPo3Gq4Z",
  "key22": "5EVwPKnfVP3KTNFfhnEznRVGc64YiVukv4zbhzjCZTksUg7L9KAneHULig8dFwpynERaghXMNoQqhATvfeKXn5Cj",
  "key23": "5eJwzo5MmrnpLBe5up2iAAoLcmwbgtCjnNkSWjFssc9TR8JsHb1eKD8p66yG57ojBKPbQvru8RvWqVFf2Ms6pKkK",
  "key24": "4CmD28rHk7bWc6HjFknHqaQPeycCQUFL8Am8WUTr51hwTuUR9f6aHxo7QkT9iuCedqSNQ3PBEgcjGexzLxutSKpp",
  "key25": "47keX54FY9aczafhZFSvN1ajf8bvKm92bXmetHaXzpxXU8RKNMRED49Dh1Rb9XsbfZeMsyJSqkiFwD9wDPniiHe3",
  "key26": "2T5snzJSa8emwzVxWRv1QkYRsq1fDmHtd88yzTvkvD5qnh1yRVAZDfjyhy1CkTiUrFzW6F9KeD855KyXXh8LkpvV",
  "key27": "4x6Yp7tiQv2XMsKAKPtTXSGgtfrKvaEH1JvXnucpemeSKtnCU6qZoQhap2DjbTDbrDBDSgvLxqwJKmXoyV7ZfYuH",
  "key28": "zh9FtrKj5QayrpHRQZy7aRv6G3BgRLh1DAcrmRR3nj5KFxTsB1MFkkuBLyA1UnZa4v7yyKX1uSbGirN4pepKVna",
  "key29": "4UEmhk4JgtZcf63beVJ9HUHYvzar7a39pJQE1hSVFfnumtzU3utXSzC2gkioh38SR17fKR49XNdBt19UnYo4GQxs",
  "key30": "55WcQLqEf96iysQq874HBqd4kjNbs9wrADZojLNr2uzbT4cZVVPEEDiidzbi63KivJgX54eaQe2A2ZcbXqXzwHt1",
  "key31": "3ASHqqBpFppVKAyS2X2YbEeBgMj54X8WGepXHetZN5swyfnss28wyyUECVwvbZRTn9ArkpPus6QD3Vz5TmPwTmF4",
  "key32": "5vN53zCk2ymMtMUAxbZueHmW2juNaEuPsssB1N2Hy1Uje4Y3F1GWNLn8LQyKmN2gR7PngowJDM75Lidg6qHVJwHi",
  "key33": "WsPNcaoxB6Gb9XPMGAEtqmQYNxHKevJHDJjw9zE7V3bKRhFABXkbcw8NnUBFfPn4BefKtXpf4NYuxJYqwJZrWkA",
  "key34": "4LetgEm4YASnWZzRAja1mnVSRoMD95V7SWMiGULTBMhCgs6rUfEJdf748QjBS18UFDABKya6rPd25oy1AqHv6zmX",
  "key35": "5LmjYGzXw2LdpXdVhgRY2gELF9aiZKKgYM3G7qu2FwvtAfcwwwkeUiYLXnM4FQDt5aDyD87mXiJRhFZC4QgQsaBP",
  "key36": "qeVaKXYEiJTjeJKCHqRfDNfX9rmWF4NyvRdd3Z4AzvzLd8hjqNYpJ3zf71QJFadMKyq3aqSyYTbWqJTiDmZ3Xyt",
  "key37": "5M7RMtT1dvGg4c7xbHfr9wJYsZFLb5EwNcveWQrgLgazYTU9VcERVnZMpDcYZKayV1c4PJewD8xAat1AuQXaAWcy",
  "key38": "YFmMSW1VNUc8eNXycm2Ksxv667TEutvbniA8FQ2MuoMrNJ5gX4RSNUbXHbmSMHFP2c46EC4J8S9Q9oceR9Y6QMn",
  "key39": "nod8KnLbs1mB7i44Yi7zeC1QXDrpQdS6YLN6eEXqsbpAcgdFnaVMUAkXAtxvLvhRctDHobDvAViUfUaeAvEvWGA",
  "key40": "9jxgk97pZxcH9oSRCtnRBoxXuPdj2A8sDTN7msrcZUcSzW7QP5kaCmB3H5drjuUR1bzenYXi7hPX8xtUHrSf6W3",
  "key41": "51DRTGJHW4cWM4gthC9HGDSx914nCqkM5YFzirCn4LwmZDG3TmKF54ibzuh63tcHpCSYTbpH68PeKmke3tkgdiog"
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
