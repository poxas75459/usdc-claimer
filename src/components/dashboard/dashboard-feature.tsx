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
    "6mXnUFjeWcesUXatNk7aNdbgeoHBCoMc5Wme3djzrRtxbAPAXXdRo4FAizdLT4igessLauQQUvHyhiqbBLZYRPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2TAkSgBg5PNBsPQSMgnbM9vfBEsBe6xDoqx7MyX5XgjiWLy36nDFNkar2oE8XxFbqrQrLPEFhTy2Kzz6qLbso3",
  "key1": "5h5gXWQDKDoH4retSfoeHbdU1BjWkNdKahyFSsJN99ocovhcFet4PrqX6cVgyrkHupJCwNhyt9Tj9sYDLUuxT8iv",
  "key2": "2QHyPg1iFf1U6grRzec98pJaYiabShiqJWVu2cQ81sXCcJgLZvBkL5jpsDY2heHn4FLfUVgnFG5Hid8S4Eg13NSU",
  "key3": "WDCSsEJ5XXnoirS7MfrTvvZcDzRJ2cPvzd5SUMXsrMjg4VWUgW16kt3DnRnA552EBbkUgKgZA1Rw7nZH1iB3Lob",
  "key4": "2iT1Bsw1c5vnuhJSTGjgyiwd8fB95PFfcrwyCVUWDhXA9Rv9tWWMhK5Tcq6JjDtYMkEzjjUArF4Fs8kX4ThCPr64",
  "key5": "5YQdSRFhwerV9geGBK3jKCDwYKXFCoBvSnZNEoHCvCidmAUD1DuUGxT2zu7Ms411UHopBQ7BGvDbQPP2abbkAqQC",
  "key6": "2gbH7kcj1W4n1CysKUiQ1sU3GozibTN6Fi6RND1yDtbogMDtjwaAPZ68JdZzLmHEekZMZmBAsXau3vqwvhNpQZKi",
  "key7": "5riUCGL1Lm1GkTFSh69WmiV9hR9tSVhaovrLcJMmoicu6rUNq3dRny4JmNL2Qnd6LjHd4HAqsDqYPCmEnsQpWYtf",
  "key8": "4cqb1M6ADYt4sScMmi8VjzhceJk8UsyAWRSGu323C3Fr54eaS1Aof1hmSHLGiZziFGyJXYd9tBNm6jV7yEbtgonv",
  "key9": "6443A3t3Fq5YLGWnSpKrNjdevtCXWP6SkrS1zXLRdZjUNPQgN77mvvqV4QoFGZ9rx5xpxkGvooqJ3HEYRibuzo4a",
  "key10": "3SyzwAnajP3QtwHB4VGpfTnXzzrvGsxrZUTQ9jVi8hc7fEkG4o5PboAu6CMbVuXy1as7LqKcuSHj99WZDkKVwAe3",
  "key11": "2w9FEZRaLFKpyCyy5hZ9inzWsVhUmuWE1KAv3fNkce3JrkwdLCHYmJ61KTASCxWTaD6G9XZxaby6e2kxL7hUqSYo",
  "key12": "2RVP5o8ksAeoTyKkuosPt2gMD8cMuiCcPfoH8GSmAb66QBosTxEEgfpZxX6zgdM8tXGUzcAmDSNCxX3iLLS49pxg",
  "key13": "2mVWdEqUjs1XiYCh4KTZRL87cxznbPzcW3gsUFyBAReUnrJFQFj4mhAvWU7f7U5wPGY4EcvLJRnQwv2Aoy7hPwnY",
  "key14": "5gsaZJWp4Hr7g7zLH1gpqDfghGASXyHnGxR8n2W3hmfHG3srTHvZajroGp4A4WJGVTpw4dkCdwA7P3jScS9r9kmf",
  "key15": "SxkECwv49bRjg9cFCD8s679VyYK1Gr75WkDVccSHSRqLXBQUGsXsnN7oDfb3sv4fjXmb9hieyoZPL68aozvXGXU",
  "key16": "3ycA47MU9aShH3evYqdgEoURNG133rZ1TUZyXJSzcy6o3mrvFquVGjkFww74Bi5c64VXitcgy1GjF44KZUcncKms",
  "key17": "5xweeCo7LkeVD8PGqPcm4g4WczJ2gMP9n1KwsSQzbJaBPXjdcVprxTB1Svkj9cu3PJnQN2uckh1Vt3oAM6yRQBjB",
  "key18": "gFdA3Nc5ASKTgr88ci9yLQgjfDmJkMsjAEAToXvyTnj8mLfdiZ6hVCLiUHnjwvXpjaPaW5N1kE7t8YHdDkebnbk",
  "key19": "5KgDNCmnyfrzGxmmxPJFx3VbVFofcccLFbwvxRvsyv8MH1tE8VoBvVUKrV53zsYdsJdS337iZ3p7kbT8CvV7KTZu",
  "key20": "2FWnFYmaRng5qanCHLQZmuFXBGwnvxBhsA7pHeoxw1hdSyJtiRMahCYrEnLepjo7oyow1vy4KYWyATRtsC46DEUy",
  "key21": "51YnJg2Z71oExpfyXUL8soTBXBBK2EcReWwmHUxpA6RLDbCb8df434FMF6W614o9sFZ4Lsn8rPNsvpmx4nKkwUam",
  "key22": "34g5kjtBe3DUgUvZqNDxNkkMazJ3KHn7u5X5R2WtcS1nHa5tkDQxcQ6J9e12xmt4rQtwFAeEktRWVcJWsR7kyLWp",
  "key23": "pAxQJsUjAfhrX1nckTLi7QUSwYRhNbvcb5chgkjhs1qeZrf43JFMVqZ4i95gP28KLmesuiRrbUmJeWbtVC1pzBq",
  "key24": "5gs2vUAQ1syNjze6nASHJKUm4YEAfFb3CkiGLz5ajYRgeXhnvAyCR96MDnQQnEUDKKJ43F4w9sppHHv8SHsYhyHV",
  "key25": "2yX7mLD462z5gRgvFmkL9GbbDBs8njjcbAbgH8En3ASwgnb4FuNNcgJKxbep5UGrdswe9cWoAuWiqAoxon9uhPJS",
  "key26": "5jUH35qv3BR5zVU3ATqvfhqBPcDXkmqXtiS35QSQaQr2MFtpAfkAnRTiAJN6GSgMBZBvwX35FTPVijA33nWoLaBQ",
  "key27": "2QUxneEpxjonqKSzucuF2e4ZePM77sPsDkhBUbnCynimh8ecga1skPEfqk1HgCKnXCf6uc7eRGWR7dAq2q2pyp6Q",
  "key28": "2N46z7z85ni2VTN17bJoHzcXAdooeR8mpKPbaWtj7mUuDXRexA3qDTGuS6bg3SPLKyrShv9Q86EUabAVo9hu21vW",
  "key29": "4MuiNuD1jNzFUhpqhjqZ7hcik4BUUXcG5Wnaw8PjrjP6BxfsB5Vdc8MChqK8L8mkrMC4Co9q1sH7EFHf79PRN9gu",
  "key30": "4n9mvbpZ7jwQhnLrpMZB3tYdHmTCqPJTjXdgwjnXRSPjtXNKn6p3S22CHF2iADLm67B3ZXEL78zNdwtuBTbybDdH",
  "key31": "HVxUQnN65AuW31twdHjcioo5ckGUwZ4mq377ka81HjtTGkRXeFNh32JjUdSyukdu5WkMJHxHcQZGue1jNRdmsRE"
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
