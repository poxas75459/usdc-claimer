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
    "2TWCArjEVJibmqvRhyoRek8tWrFLTV5ooZ55gnLmXogXTLofZ1hfKhuYqAWDJsQHBdLq9UVf7viv6CKxsTyRypxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xxh4yn1UKFkG8k6eybtnfAoCi5gaFg4rd7N1DXp2kKx5V8UxmYer1SJou3BN7xGsHa65xSFWiNA2d4oyfnDCHMb",
  "key1": "4XEm3GtwzGSwA2jiL4JP8EGZLTkm7LsXpgwn5EtRKCo1vy2RHjBSaYFh1sojcc2ZKZw6U8PrYWzerfyv64TYwaCT",
  "key2": "39x5AfmRhzSS3mzo4rfKdjeYDZkp85s8awcR7te8BUuD7GD1p5YKrwwH7yKKp4giahSn9eWTL8r6fn4Zf9eRiSwn",
  "key3": "42QWnxmXpAnGpRQRggbKafa5UoScdCwQsAicYKdP1pBaL7UiCrExnhj5oHmMYppetrztJ3Nd36A3Ck7QqSeiQf16",
  "key4": "3NC3MNBv6uS2nsEZLNc3LuXTGZEXbQ2rR7QfDrxUJAvyc9w9DGkHZod24LWNEBZpPHswwRrFD5Rp9xQNVqoTTeaP",
  "key5": "4HDhKuDqnJgD5JUok9LrAtwA4P2kkMkNNu67YebgdT59HqxwMzDHznFrGNAzAaikhD7QpS1q5CaoyK5jf9uyKAJv",
  "key6": "4eeEtV73xCsG2Wi9XMUeQbTCwPBMA3W4xnyHqZexcLBMQjhcA1V6va6Yo1fiZ4KHSwDSjHpTQqLfkgGW2qqfF12f",
  "key7": "fqEvrkgu4Y5DmXkpgXn4HQJVWdQWRXiWCiRveSMwn53Arw7JzZ7kgh6PrGTZNKceVqNa15CFHtABgKFd5sKttKe",
  "key8": "4AMNDRwKHXeU1v7WaaGLdoUg6XotmzLsVShxBLvYYXHw6yvjCS5x7374UpbH2F6ErtgxEc1qYJQUjDPiNR8Y9Bhy",
  "key9": "5gHKDxgPtURKJBMhJGpYvxcXUY7qb9GtJnFmvpNqae8RkgkFz9q8KyprimZJeGqdRcQ4Uire2V4ZDwswmYzVE4EJ",
  "key10": "3PmuFek5DfuXaVvHCyJhN9y1RMLFGoDo1uT5ZpvuDkwMzHpPEk95i6KJ6wRbCFr61xyFCiuFecpfDuufZijrXi5y",
  "key11": "63t1ESNENUDa1K8P46Jofh2xsniWR2dzzMbRSVobGgfzBg3URCXDgm94mPff2CrqAEfmR7ewXzQS9zzG8AnaB2RN",
  "key12": "2YFh3827Zv35MRtigm4Tm7kRsANtTBDF6qbsoom6UqiDkNyyJQR4FMNwMvWWhAUrbxBaTLQsBXJT6FJnVBQ55KNH",
  "key13": "2XYKfCeK5Caom1xqtnvQxakLomLz87tREfC5B2FAvVD4hjS9JA4wvezRJg6H2DqAK22HTjFkBJBpmimHPrxnZrYm",
  "key14": "25rTzb4A3fFx3RxEARYbgPjR4c5EXwgrgrYGyYXSf66DcMBeWjHuv2SZ5xRRkigsdTDd5ThkZrPiddyubXjRrXGt",
  "key15": "3Kx19GXwYXe9UjeCzvKaidzFCcGJK9Khc5CfK7neMb8wTFpqKrraCkn6hb6vq1TB8ZXCPcXQtxZ4Qf7Hse4uoQcx",
  "key16": "5uNVdGCmwPyKGhBuNxHu7JvzygHQQEsoXHmDfNS2Y2Rx46DUELDPVN63nLd37fnnnk5YThproFUvhK5hnNYFdqhn",
  "key17": "uqUAeFCWaNU4axx7wfUxvd1fKX7TEv7PSvib8SRt1wBebmEDWqJrnJwcghKWQqvHf9KbUqD4a6SGqxFWrEpkwTs",
  "key18": "24RngKWyeVhAAMpC372QZii2QCSKooDqDZo6TBzZnPMkf61ah56esxCEciPsRNsvi2fFiDyLpQkKXxPHoUzM186p",
  "key19": "z8KckeKukVjBvgT3piHJDDG8A6GEz2BPjNBZQsgG77crfun8gNZsdWDr1ZUc438qkcU7Qd9VirUSNuBnnVFXmet",
  "key20": "5xUiUDCV1CNqDwMiEyniEwp3FYovNjbpaFERqetEUYkR5vh9qifsnkxABSxBgCTD4QxWS4xz2YFbmRHbh8ToFg2a",
  "key21": "62gJGedpajnkimUdZsixPvEXChhMPc8kTTZA2aBofLBot4bqcD69hKhqXMnZxLJ7H7dx9sz2eoMQDYx9GF6u81wq",
  "key22": "5Q6SoFC8BUJwdT5PcFM7dAcRabRhBhUckFg2TVzJ4Q8mYiTft1e7vYuQga574F69FVmpJ8cLxXHjQRzhgWuq7WpC",
  "key23": "4Gyw2QXYpoHtUxcwQTRdwiAKfaieapxkAy95xenLykKsCdZAV2BtW2Xu4Q6DXw2sf2AQkwM2U3EnFKT5DcnCbDtc",
  "key24": "2ncCcMkf5Bm8VNQu3zfJozTMoUzKXfsSvww8eYCJZRrNXbAPiu2gTbi5YCw2J2TmrSv2ith63FuX4dnuoTWCdxgG",
  "key25": "4XUUyepCpgJ1NdvN2HvrCG7zV3mj5f6sCYFKLuVEwm2pievMc2BQjmM79jdzus8QgDSsAE5XCFneqDDs6DBJUp26",
  "key26": "5PDDbGDphNYxaHqC1vKLoTztQbvhfE78anPnKA9D89h9LGg9KJao6gx6usbaxEKm9B1YWVqQUtTN8HFdW1YNmwCR"
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
