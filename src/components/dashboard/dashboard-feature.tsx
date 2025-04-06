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
    "1bo5SRt7cJvPAG2gFHGFLwuakz8cyDepNpkKRXBrXyvqZ8jdeAaJaVELN25pepgKQh7rbFXq7ZLFxcghoWqrt81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfxAikJdyUStyGDSVx8GXftfAaiDKYErcuxCN68WxazZbAXnmtNcGd8XyLYay73XPtFCDKPYBXekFEmGtYs47g9",
  "key1": "5UARaGb1eoRXvWWDcHLKyTE5spfggTPjewboxg8fcZ84QszwMwL9b87Fjkt4zo9bkCX8Cq9bCETEb1KriQpjiEZ",
  "key2": "5TBVJ8cswD4NVtdWr3GU39cwBTMke68jukzAexyhrTiT35k2TErmPwpxSDfRhqGLpxD2N1oFVzk7sPLxi547qwNh",
  "key3": "45Ljj98Xb7DNbDTwCYyxDQVTW6V14rWMXVVExsFumNU6iNTWCjSmdaBEsywAoAHUibBmzxLY1ExMpD6T4zuLEkR2",
  "key4": "6Pi8My6ntF7MhLzysoZ1YtbsWkFC2dvvKrNZq2PD7XSjXbbiEamU7AdFzhwb6ANAyptLQoEutcvragiydGJVMdz",
  "key5": "2PJ6CoeakxHCFKby3pSgUfPQUMqHhSXszb2PAHcrBWVyypwNFaCr9XCdHGwmDofoEbQAEJiaKM8E9Da4aR62aHzz",
  "key6": "5Dyuu9VGgUCibRCRPi3jh3bamTFKQnNzXg1HGhB6oTLQFgg8Qvjf44igeaweoUQDjio432yHiLEKLJ19DcrkCush",
  "key7": "3xkLmioWcsDbiFrWeL9TLqotDQS7WwHZcET84xiR25Rah9DWxDx9AejHB1BYNG2nBVe5SKknCzwpc8Xnj74XsVXw",
  "key8": "2kFHwZpr2XWLxaXEMLamL2eK9MyzxjqPyXEkCzi6oFkP3PE5p1gNCEL7pqPoUDo59DDCniTnckK1UEJuau4c6Gdo",
  "key9": "5e2mtSZat73NmorLWXxVBrcpcPyf6bKxkv9Br8eS4wrG5cdC2iJNVDNDTEnWSqdeeQqyrgqbbhLfRFJ9CkjLZ1As",
  "key10": "Ms16vUTpoWyQpH6yqtfsdhy4TURP6jxja2H7t4hrbkvQgUqMPnSnK3hBHaknWChve4L4Bon4ziD9J2mJFc7Vkv5",
  "key11": "2WSjgdr3mCS7z77cSVW7Rvoj76qxQQbzQp29QkuEkvKc4Y7UnM98Yk38D4gpGcsoW74GZkgnmLUTA4PyrvszWRqF",
  "key12": "4NPfkHHi5uRh5zYFbJ5QCfmv8jw1DBXNDyG5pLXGZK5sy65fVwYSDmHNjmpWeYUmnzcgpMSiiEQh9Bz1THEf6KSo",
  "key13": "4ZbzAm1gxXPssZTtwjQ7i2iob7xMkqhcVsdifd1ZBP96b4mKJo7QjBKYpKekTbsVzDoVdDE5t9uivBJYfWRCHA7V",
  "key14": "59eG6DaJ69SwEB6RsbpVSQV5sENdLraurgPxN66Wai4needdKPo6FMgbZXdoDjEm6er3PvH5oAPLz6H8USHXnxiu",
  "key15": "2RzXts9qdHSFRjXWJAFy1eJAKmCSyaFoCDpwmjYPJvVuqUp3PDqxLfoj9cCSVxqegWNY1UoeR1NysYyoW4XXj1FK",
  "key16": "62SLMzRofDZPWGWFv1YqLPWE8u2ywVEDyYqw2na9erGSGterkfmSGvRaF29aFGUmxbbkQn42KJqd2kGmbAvwc4t5",
  "key17": "3oJWX8T5xFzAsHgnVhPZPDbEuYo4WWmzveNB2ncPZTDBNLYeLmSGNo48V9WhaMDC2ZaYPHfkSdBpikLa3EPyYqvg",
  "key18": "pevDExWGkfnLui78UyTQLMimgyixwHXyycwZgELzsAsuByY5MTKWboXaJDur7u3pnKBgDXFwgQBN4XDm9E8FY6W",
  "key19": "U5L6zwJn9R32cE1RFcyVXtNj1cZornsuJRLB2upxwijDzxb9X6A244ww32FC4Hfoibp5h5E3rE1D2AdXNT5xbf1",
  "key20": "2tju5Sas4XhLvEb9ryvzwWr4JmvwKRpmUnAjPDTdXdgUiDiuTStC649ARh1Zrg7bRqkqUbkXZJM4gxcwdJXoEjjf",
  "key21": "4JeMqywxZ7U2PYrxduL8DsPX54XgLoePrUSZGB6N3ieWGkFWmUFrqAegxjeH2Q3cRuGWPQRoMNzjwhmDfsUBb8hz",
  "key22": "44NS4ca423cD3qhRqXsbgg9mptsJMXbcBgHTFjTJMTjFH6sb7THWeHFsi7iuvjc5rjrao2WCjvj6i8EoCnfRXVxd",
  "key23": "5F6yepEKVx5tWBCtHybLgNoQ5aXrcwAiQ37VzrSrwAxaD8dGQiYt8xBZmaeEW1H1v7xgAEGNJoUhpxjGStd5hKdT",
  "key24": "44CEDTYDCPqE17VpcSoa3WKDSHUTBofcDtUbGkqhpcELLAehERg59GRjwghVqP7DfWzzJv9d5EEFmXYqibXEQ76R",
  "key25": "3kbKkrGCKdSjbMqfq1seFTpH3qShJbMjw3FWkNJ6s22FiHaWStv3B6TQYbjG2nzTqhputVzWLxsAtM7b9RRo9gG1",
  "key26": "2hP3Tjr8hJdauJGu98PwXMmN6yqg2nXS7BFmyKQq59cNZWw7riB8VHEvSAKtTrQnsDTV2q15YNZYKC3Axbvaaz24",
  "key27": "4suZbzoMkHDQhs34Y7xChkBo6EQUgJFYmWE6MQa8R8MKwgNu8mdzPYhQ6r9Qw7UXUy7igqdCGmqmLo4mU6Yqm7JQ",
  "key28": "4GRPZYid8KRSuD9oQ5DGeyWM7kXntkQCYtwJEgFWwupkhSoqAwS3JQZsqXkYSbViA9LtyU78eLq7X8xbCnAGN1zh",
  "key29": "JosN8LsJTZ3Z27fX3WqS7UqiBeTk9KQAhkshyc3pyhKw96eJAtBio9J1w5qfoBhtUU3EAhSjSGrtK2BMLPKZLiy",
  "key30": "4GayYDkg51fWoD3EQZtFEK2N594QkTGz6SKjioF6TcD7Wwe34c2Yye49Zjmpz8DqtueQjUWn36At7sisoQA7CDQ6",
  "key31": "64FeAGbGzG13JvH26qmY4bbh3YqiMLjpFCxvFHQGfTi41B35fJic8rKSDLY3yBe11jCSu2zMp3YUWoRcogq1dbz2"
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
