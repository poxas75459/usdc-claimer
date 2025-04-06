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
    "3pVic49NY6m2ibqm7vBkBad6A4odvMncKmxVj367vEdqkXr2mEuWU3g3toPgjfu8FmfZs49RW5xT9pjeZ3CgL5n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6DXhm43cpvyrLfm3tghoiXamSjhF2i1xWspT2MaJ391N3jGU7UTJZoUZVg1sg5F6Jvc8vgokDvs8DgjtgcNmY4",
  "key1": "5xG36EPwrurjd3K1U8EahRRbzbiNtte4qa8bkw8fj9LusN4SFkS8TXQKv1Ykh2Prmj9ZyK4ApsgbKxxGnLmuatLp",
  "key2": "3yLjt2X8kME7uaN36jMhP3UaxhgYQkEWbQGv2YXfknkhUrpT3E7yfKnWxtdSVEn1Hqty8eGGXDVtjr2KnDj1uC6b",
  "key3": "4bLSryPvciV8y2GmNoSLY3uSyEBBZQqxkR9dshwGuDnU7Y6vBp7NhKC1PCQaGqJGrkesFGKU5svzATtzbYo3kpK3",
  "key4": "5EAQdn53cn2QE6vV5tDSEpDwtNikYbgGZSdMdkngEqhTA4cxLEHzvPbKupxHXNgXRTBMnrsVvfr8ogj6uQRyaKus",
  "key5": "4eDWzz14woxaY2xHHjLtyXceaNY8K79mBnPLzdamykHwC7wtM35B2oVSXvW387LPjJRrUugU9UozZMJv2ZE9zLFK",
  "key6": "YQTexe9D2ibQjRUWM5NVemKBnQjrevhSZX4Em23Bp3uknzRz2bGkET73j9RayWU91e24R1tgqMDYK8tczjrQDyr",
  "key7": "2Ye8PeoMs89j3bGnzDQSWgz5P1jnZvWFMCMCVCeV4eW9AKwLGfFUbfhc5pbhH2sPjRRqveBD4gtMRESLWiMN1Fhf",
  "key8": "2ugYAbXtftaSKF9FpbnHzMJdpcNukuj9V4sJnqTkcbmWo86hHkjWxqFySshuTSzgbpwCDxEfFrE9vEiWab5SfzmB",
  "key9": "3eLc1vvUAGQax5qMZcrDGDG2fjVidHgrTsQcz5By7L3aAgaCkGDBBXgwGPxQTXWahFz2q1CUxTnJut4intJRu18u",
  "key10": "61DksmiifK3N8MvNYn93FuoEwLpvKs4W4Zgwgt1AFUp691aW1MTK6y4uT7QYCGz4XE4U2xDtreasAkVBdtjerrmA",
  "key11": "3zSkfzRj4gFWxEMVNnTj7BU378T6fpcZXTZAp1NCVRkZSquF2PjrjdFPFBL9skdddztZAg2EXWM6KaUwX1AgHipW",
  "key12": "45p91Fc1AgF2wpMv8E3DXApEkDi61amznNt6f7z3XCbER9LjLwW36jRhn6PejBrpk9mUjpJvubQV2wyNJK942Ncn",
  "key13": "46CKHPWgSgguyDtBKxKiEjsdkdSJEASUB2n9qcXaBjny5mh73BHz5zXYkpTZzMSKxrZRxR49wU9vJCFqSR8HxjcA",
  "key14": "28Wa6nrPw2j4ewRDNAVmYpYPgmaFHF1kFNNTZ3rRwsUe1CHLnKUxFj6pMGEjk6u4XauyBhyRY82cCQhZn6DWiN4F",
  "key15": "cDRby7n2T5KdD28CZ6RupwjDWLN4SNAusTqSy7J28YRVLiEHNG8f88dmMY7e4cydiUJHcd4g3LA5fYb6QWgcXHi",
  "key16": "55PhnDn3WT1pbuzGj7qgRTiwkBgu7qhL6d3J6y7Jjy633T7RWdDo5KRGWhwQVcxh8hPRx9fLQVUs3yCigjaurSan",
  "key17": "Bc1d5eWD8QfJTNkoW9WqWiVg3Ycp5G7FSMrh89i41ADBhDEXbbonAF7BkSBiXbScfshv9HsRfYXMY6xiWYkbSpm",
  "key18": "5CCrG1YP6C6bW6HYaMRKqbmNwQJ8seaVDD2D4VvNxTVMiy1U8ymciPFxHF65oc8n35RoJ6CSdi4na4ZbrryYaYzf",
  "key19": "57QNFtWwyLKUjKComCfLKctWtCtQa89YaV77ABap4iuqffYzBDnrs4gN3QVKBohkpg4FVeuv5Y2NSbqfEwWBcRAu",
  "key20": "jjY8PcEcUQL5BSfSFFyFvf4dRpE1rncudJPcXJ9sTrcWYDTPU3GBy9vP2eeLcmfGTo8ZSqhEjV28FzgY4kZhjky",
  "key21": "2ibVqQt52eoB323hu3xjXCXjYFFr15WB4R1obzYHK87DyHKT72vSTe1ECqTKM7Y41cZaUfxhprjiucPB58RWm5J2",
  "key22": "45HHRdqx1uyx2ymL6wJSEZJTuVVhxyPSuSJEKrPVkZAJJMwPRbmiUxzZBNAdk31bDMfCpz1C7HDxEgGUbWgBSbVs",
  "key23": "ge9z1ykvaXZXksoHdFBWDFZveRm5njDMDN5dufmfqGFPrpyUiSVjxrNuzMSu6T6KQb3ac8rtdiZ3XsysFEEBCyV",
  "key24": "5nPdNBVvLZawVBnpnJLvt25aEMikk7njo1ZghdGJxET4N7DvQdte6YGJwDor1DV5PJKSmSLXiG9ofvcHC1fPL8cg",
  "key25": "5cXJ6bF3jz3edx33gqMX6mM9sDyDYkKJFiLFST4MrAwKnZVyAAZvzCeh1ZP62LLxmeQ6GJUV2N7aj28wagAqzzKY",
  "key26": "37BrX5qViAMtV5csNdTMyM89DVnkxMK5tJZeVw2ftx8AmzKkpcPcKY1vmFNZ7qMSA1tRkB2XuKRJAumRDSV26NjY",
  "key27": "56qztaNVrsoXZ9w39EgX84Qj4bizmZKRGPqKw7pyXgZS7jrGQ1KJh5e6XfL19mBUG96FJTcHpnQ1JVGLiH5ejUjt"
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
