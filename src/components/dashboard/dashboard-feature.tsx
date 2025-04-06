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
    "54f5tQ9f1EGVJknLxC9q6u35g9Hsd9NZTtGqySz52eYRkQAdRpknHsARfeAhrm1Fr4MqYScWHsoYMeqt1bP9FrXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLqTDL8RGu6cti4fcYNfwz9CCJLHVbDzoZdZpf38ne38fgW9pgNCpAQaSouH2L2QDcgNzvKhPYMfRJ79eBHKEgD",
  "key1": "31hBATHaZ6hTyTJNH5fdQCb6NzMtjQWsPYpSbithFVeoEhm2bbcQDipD2BS6LbJ466LaWutRna32DwRhWNuuGvaN",
  "key2": "4WM2SnhcA8QTgjwjV1sAapmWwDBZtAF3jACP93s8DajzBu4tjhcHqYQ9kE6Hahy1pLD6yC1YzaTHCzcsK6NZsosz",
  "key3": "oyEFhgmdKAPMW5qUxCuPqYF7bH4u5J4qssjosaE7x7uKGe3W82jvCc5fEiHMQ13A61KGi484dZqQgT9jVgKz9Tg",
  "key4": "5AnMwuuCUSxDxcc1h8dNVmZcY6VHSvSvnjQuX3ZQKtXdgNJfQrzniv9SRvB2zPycustJnxdfFBC4wvXNTa6YVTKB",
  "key5": "4SWgfp3jyJ2qbm3VBmLk8NoDJ76sPwW7yXDHo2XtKPbCPFSdkmKWxz1imiNN9Hwpv6RArokDksZPSyDXNMT9sEQa",
  "key6": "2XWDc8SVWAJutYNH7wRLchiZzVaJihBYV3ZKsbRoyFYFrBQohHNBn68rW78ebb7YdiLW8PawumZ7Gf5K9XJhozsi",
  "key7": "3sjmGDfMnfVUs6BnYRSmYKPeiiw9KQb2nSejNmfnmh3ibVx9nLbtNbfkaVteTFmzvyzCFWcB2qf1YcTVGzZfaRqH",
  "key8": "3AwALH5KXmcrycG18YUQU3xBze1QEbJQquXNggMrPa3QqotP9EE6eFpnaA8JSLinYD5YmRXUaK2jm6HkkeQKYeoX",
  "key9": "499ffmhFXjySH46PTwK6oShWSuJmpJb3tNpLcDwBvJHL6Bkof6osShRqgZaNX1kCEnkqsfaTYBReccCWZQzz14AQ",
  "key10": "2FanaatJBnT3yBb1MCfmhwtKptLB78UaTEqYLJkGXfnR6yRqGtsGqb4h1q9rMQQUQpx2ze8ipVp7X9tiQgSqQ9jv",
  "key11": "hq1HCUM7TCuYykrfiFXtGk42JK9tQuWyxHqkdN3aCNVtdAx2DXTfwH7EJ2m7nhhpFiHfbxZqmobnJgZ3z7NKrLn",
  "key12": "5if8NdU7Z5DZyxzgcgENh9piQtZsZF34K1YRrmuRdtCw3YbbV4UwbZqjjNKshEZuRBnc3TrgRpgTDiyCqi1hiWZJ",
  "key13": "2ikkqR4qGNhwnHNuGxXfAxKtcGVvrqpCEHM5nVVWMdFyKtTTpkMXMi9NzsUBnX62HdaXX9F3RhBtEHxEGmMyNGWH",
  "key14": "51UocD8LiibvwNyn5CKCrEyXkLdENBPnAPo6iRjfoQrUxhT9ZfAfKBT6RAXF1zVm7vjgzc9MHFy19ifUvNA3sF6y",
  "key15": "2Ti5nMfbeyTyoBrBAUSJw9uU9gMEXnH7tVkhXqpt2maMy6QQfiptLHGJymcXgDNZtKicQCvz14Hp9ojoxhY5qFED",
  "key16": "XmvqYztpPwAQS4sdgyKawvq5DERzAnKWR1cdu2h2yZuUurN1GuHeyry5zZSCbtVD9ZeBy3nfSCY9kqWT2x7pPbu",
  "key17": "rodPWnQdEmGqXRAhBStMZDKv2HgszjRRtFYTKdGCwYEBy3xsjbPZb9LpX6vGq2RsmfXKggHbcoBSfAziThEQpHV",
  "key18": "5Dq1PChpGGSppKxsZ5nWUF9qddv2tGaD5avNJHHVM4ivF4oz4KCemmy6ap8B2T2hhtFDqkyQxjw8LSQjr9a2Cxst",
  "key19": "3xEmr8dLmQhCPD4NkAPwa7GXvkdqDXPY8Djpw7uqAYfRcLgvWrsCfapUYu27JXXF1AWYVCoiU6kTfRBiTaSDjmRo",
  "key20": "2KjNppgFd1WKSx8zKdZpJMpva7P2FzQG3cFMpCVNWwfiAfRxTtxEgkRsV1kt4BrQXuxiFJw7wJ9VGb8Gx4zX22pd",
  "key21": "3hmyzUCQF5v5uqEPCikZDs4o4KK111Em5KoHU8XmQe14B5VtHLHMft7FvQheGXSW3YE339XxisW8zxn33uoUhDuK",
  "key22": "5AY5g596yokmPfVKtcYNvFdpqc5AT3pLzUa4NKxTEF1jd9T2QFyB9xt7Wym9rDf6vG7Q1C4QuzPrABNLB72CXM4r",
  "key23": "3BT5AniXuKojrSFt4avCXfVigCP4JnhzQUCHnF3TjZHvKAGy1WqU8cuSSgEcHAiFJqvv8ucvJG6nq39qtQiAPG56",
  "key24": "3kyZ799g9DfUikLyZhvD1JTkXx82iWFoci8iiNfCea4UmQaGK1q7MQhFPCdYL9LiEuzBapu3yjeyRewFS6StvPLp",
  "key25": "2RggRpHuu1VvJnhdXQD6VfEWd1Uqw1q5v7zwM9TyqDXpcjpVRXMkGLt7o2V6eisWvST33Yn5YN4HcHKH4RPzsBN4",
  "key26": "Xgty6dpspNFV5FdNHdFHz58vGZ6B82pJzDgwJkDgre8L9LV3TmNhVh7CAUToaBUYHC5njnzL33V2HJaQm6JVqdG",
  "key27": "agQx1XzvGa1vVKDDtNcBHnnxucP1sgCnWdFW9xZJAn3EdY58AHxRQKbyfLmy47cf7ZyowB7GXnFfaymFJHkV2jL",
  "key28": "KhA2VRBv8bxAJtvs2xiVuWBtLUXyZ7a6kDR3MagLNNgsvCFzFuzvnUzHetVVxB1yeLDdcF5sp7TQN2ryxtRTBb1",
  "key29": "24CJHEEvLuxpxkGNUerYGJjUNDfJnizmgRQnWkzTe1rxk6ZQbDKNF5hEadsYqsvbqVFP8ir99eC6zGECkZZ8HNWX"
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
