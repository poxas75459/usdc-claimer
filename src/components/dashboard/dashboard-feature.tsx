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
    "4mJ4dEj7FMSBGQw9QG4iGcwDmpT9TpQ5knyoRJwXxHD3Wc1aovH37EFdywz3rSUYwrDXWiaQ8D2D3DuDsbJQwPW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9qeJ4AjyCEHX9bkRxAYJjMKUYQTwEijE8UbaBZnZ1RbU6Wec5W8sDtzg7BGrAobU8GonBgbw2vhUY2eFhWNJse",
  "key1": "2N2AF7XpTueakLytFNKWFr6QF1zsPUJ5G7RxaLFQRdS22uh3iPzViGjuQh4sBfL1dzhCL34ZJqtf19Fij43pyqj9",
  "key2": "5vjA7ymT3FoYzXimzNNn3AST44WQNtcFwZtWoJBEuCLmjyvNQ8XAfrWbx2FPiECsByxFyDybFxw1V5HSPenCKTkn",
  "key3": "2MPyVnWWkEuV1fjVVw7HJFpUHopmvgxQ36fJh7DZesYTw42ufCgf8MvnJJKxPisWHos9AQ6GBMEjhgaxyEbghgPV",
  "key4": "5NTFBRKciqj2j6wFeiMZ6XKW8GsCwrCkaQ3tY3nDvWFSAuEgtD5tuY7k836ZwPy2igSiHMH5b4Q9hvhvbFo8cdWD",
  "key5": "5faKaKvdWoiBYG4ekms2jXinVqEPHmoDLY5NDiBZDiBHobLwreUMEqHaFd9zvxqkJR76juHRs8jeNMoxjUzjneyy",
  "key6": "3VN1eJYuGkzm5tAj7JizAakCa22rY12DzKdYmrQW3coMKrxNmYKdHu4EhjxMjVsRicozEMSUFV18dG48XG3M2h3v",
  "key7": "4wCyPN69XRCk9X7JNpVeRHjHzpCiXiHEo25xKWRy9vC5TYPLwh7dendRVTvNLF8mL6gu5tu5NaJquBPkDWzmb75K",
  "key8": "2tehg3Tp2aGfKjL7rNMzcuTuwdg9MdpZKMNcS2y3PbeCXN5RnM5ogE5ZjVQvPTrDxrqFZhxU3sA5DU3yUNHu4HZB",
  "key9": "34JTrvAbKo8XQXArswUcf4mMzUm1Tye7ZbYK7mrZb5H7KUX8FzgN9hXMGCJRQRCaf8RyvrM7cYHJJEqzxJwXJVpN",
  "key10": "4rdriRbJXr6KMHpZEULtKGsHdmJhWxAJijNqcuH6xiWVPPxQdjFi72mNXPNmo2DYQvz3JQMNW4dVVVLv75pH5QG6",
  "key11": "wuo1AxbEq7avojGA1WxVnDsCtykiArw6K7ZhyGZUFPURQeeyEAo5brw4kEH5ZH3eAE2SNrMo8A9YyMysVRSuywC",
  "key12": "4jjHKXpquAPvHSQEudmqsT5xQsAFdhLLscTxMUmykqV8Aw27fk2XVNyGkvF33dgvDekdomQy56uxFgpDK7s2oiTN",
  "key13": "2ooMU7XZJAxoCEkLj3WLJAJ2a6HKMG5toSBFRkSxvVDgdu7EvipmD4YxA18UFyxh3dY3HqdZUQidHCdY5c66UMxZ",
  "key14": "5vdzEL9nFGMmzE6iJPveezmaTZMHRLRKtgND9FbEnd4AKq5pMZGWwFeXAiDyZ4cPWzgUQ9vDNtwr8Nmah4DtKcVe",
  "key15": "5sWK6kx2nhdJHRTWCdZ3smdxcNHsfzJ1e41wsgVrp3ghwFTpkhF1epZ91P97ntyygMDNMnWJ93ZU24LPonjKSBK",
  "key16": "omV8EZZMXvBZuLk46kDqnc85zeW9FTZWT3R7pv4VNoTZGiDZSrXLj4mchRcQLhqR3SdEoMFPZGMgVcStLrZ1RAK",
  "key17": "3p9pWwzHxueppoeD1MPMbEbabZtMj2HYASH723Y7SnUx1jdBVkXwCW1wERtY6HmP76PuowjUtZr2s6GjBaKw6Ewb",
  "key18": "4UHJHePXQkvVoFhSEBBPfAWZp4mo5ycNVEYKMw4PAm1KrzLUYhr1VcQrtHEitX7GqsBpno2qZsmbLWLYtfwU4T1N",
  "key19": "afgU9mBqNqSJXwUDYNxoh7QyRr4j3dWGDRbeRoarqQHLA2Uyd5o8whah1Zo69tckT9PdGd6Kx7aDzgnp9HNy2vj",
  "key20": "227Chy7RNcXR7Jk5p6ubGYZ8W2RVxQcEktLyt6zJAcN29KRgx73AiLeszArRvNpWicbSxrLCJ23L9TRJWCdVzgFu",
  "key21": "3iVb5KMzj6aZZrgp3aQ4jRSABo5Q9zoEErF7BS4YGszEuKdDpJw7LvyNxCMorgz66AnmK6ruqK8hUerjW1pM1wEq",
  "key22": "5RSjL2rZPyDVbPnvzgCkAmErWKfZB9W6N5T1JkoamQDZM5wUCVG1MwJCAGUuWqNT3rWxkx8dztgLai3uGm4YUWDo",
  "key23": "27AjMd7DtKGCi8hiXRPfSC1TAM1HeVfjLtJT6en3HZP3erZBuPTKqjs6H7P5PFU7Ye4T1ZRPum24h8b6EcBEHCAX",
  "key24": "2MuccDUZGZ5GY7uzDk86MBJANB3Fi76DsXR3ehVu971g9Bg24E9iAxQzxfHTUT5dfaPno26PRfJG7poH2u2585mP",
  "key25": "64qz5Zy53dsyTEP4GwWX45TrzqH45AMRmV7oxopNgmhScYm8PmCgToeAisfhrvWZAe8Qpr1HcFCJ4Seip2j3bfEL",
  "key26": "2WSxXCF7MQGq7ZQPRD1TD5r8wtAxxeAkgXuP4aC2aWtURpp8XA4h87L2KpkZXoZU8UbpUxXS1rmz5HUE5n1UuJQm"
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
