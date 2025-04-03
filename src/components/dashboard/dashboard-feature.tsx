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
    "3C44WdmyThe14EGVj9ec2bwXyejYMveE6keEDNgAq61ySTRct2eB2oNoDjgWrhPZ4wVczvVeMypwBACgmwjxTXFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RAAzqUvqiZFsau3i6UybhXdsqiGAA25KGmJvbVPdGU5fHsvY6E6gW4HgPcUQzdkmqyBUfxNAFpkvXGnDTJFCvAu",
  "key1": "2Gq86TknctUn5fWi1TxWzvnHAf1CPJcztY3uGpBHYiskq9PsavpT2ipyzFF29kt1s8hK9WxX6RnRQg4ybA7vCgbB",
  "key2": "3hUwH2MgFYTyjxtYtrqH1dn4odZWXtxvu9hwCQDPgoghZ5H4LtwwpkXK8QjsvUSZGD34UUpXJZ93mMzJRWe4nw2U",
  "key3": "4F8vGCwkD64TaobAFAJg65tb2GGmojmP334XYrw9ZP8i1Mbrmr3MWYj9xgAWgAnTyiS2ZrJBeBbAaekRUDkcWHFC",
  "key4": "2VKjQfCsC134gKZVmzSbpLDNeKNHxvDPrTpHjkoRk4cjbRv9zDLaeUJbdUpg6ffHeNPsT3B7Ux8Mqm5xNzCrwAfY",
  "key5": "5eyf9NtAcZT1zhPM5Zo5UNTB3UrQ9PgAJ7fmLjcU3BrNNJM9oH6nPUe86RE65xrxtL2mgasVV9rZ5q3DVPBCBuqA",
  "key6": "3r2HtFmjpdFq8bTB2qP85S4K9UZ8ynKV1XxF5T2gN8yYW9xX6MZWo3bz1rVbmzBtaUDm1yBvNc5JU13n3N8iPoaZ",
  "key7": "5kDdDswHDAoXQrdmajo37cav9dhzPyPuusd8ivPmrQUqXGyL7PC6okT7ED9mK1HVUUgRtJ5c6X46ynMmDPnEbvSB",
  "key8": "5yFP6kvrC3wMYgsTjXmqQhvyrv2W9ZENjeQofRQB4EJ55i11wUMk7UCJ87EsGKzsCw7DhcrnsiLUunBuJHk95FRh",
  "key9": "227tLe5shSS1GWj2ejF1wbqf7jhedvWjJAQ3qQFHPZeoq8VBEt3DHfTvFrzufyrYDQKizCDKNPz7C912m1GddFwk",
  "key10": "5WdgELaQysCdDPU5rMxJXBvChXojUCUAhRk4V52Dj3VBpsT9RtPkkKwyQdf2NtZtQtht8xZsPGiZYGgGRXpUUFPX",
  "key11": "2Vg9nF1fvwLYu3hsU4nSSPqyWXqeabgfAED1WenbnVyLFVX3YYLRsb81hWGdGBynfiu6WmAUSBNWrmrEZynyqY11",
  "key12": "3F1oLJ6muntXdCVeHqeKrkhKoX23pBD5bu6LQ4RShxo6jZ9tvcv9xqihY82rfx77AcgDzk9drrjUixXh8tWaf3sZ",
  "key13": "4GH3p5R1u336K7oaEJ2ENnTsgZcbSJBjpjBMka7dU7NFNjcgVULiqmswKy5tzd9rdne1wXmRuBioKzbdxcH66ZCH",
  "key14": "3sWKegaikhhjRtqgzLEFLxrTXYoTvTHLfv86YkjsFD9TCFEvLf7S9zBwtixnQxEiA1524r7xfP7a8JxpQDcCZ1HU",
  "key15": "2U3hNGjSM8mnBFFaFvHfmx65mPcdfUUozcSqa8MwSmMayCAZoDmAh5E3zfYED3mqA6pViBBM6uWbyH9q9kPv5arG",
  "key16": "3zkReR5r63kjQrR8VUsENf1sgzM9gVyQu4Wy3Z3WbN72XtD65FRMaNUgWLQJPdzEiFfw54cGs5ZJmhTNiYdPZ1j7",
  "key17": "5aaYyy7pssJt22WkVPJUti1D8kyDuNEwJPZqdnUjJRHz9cEafSZrNSRaP8c6rtfpFyPw3ayXv4j5SNPwPV5voVm9",
  "key18": "2QfZaJziPcP7NkaRG6pstxBUSifrHzbP1kNTqKDQzP1pJ2cuh8XFKQabZFVFM1gxhhGcTVmSNcGguWB9FxygEcj4",
  "key19": "8JUz7bP99vpVexeaLMaYpgyzX5yjBT6qmXP4PHquRw3EKtfjczApMD3RKSCY7tJQnzoiWTK6pTmjWhkutEBF4KY",
  "key20": "5zMBeL9J74QsahL2Hw23kR2C3y4ZsCE1xMbT8yopdvkJvF3GQ9zKrLc871bTPp2t93WGEK3ZGopKTzvBwo4A48w6",
  "key21": "4AYACJYwX9n4RMXfqJcjmhFAcTq8sbQw8cpkQfdYW77BnzcVfJ1ZnhoKmQE7Ev1eyeWQoFXZ5VjnUGLSSCwXUdrA",
  "key22": "4AUJHjRE2qWiszN4j8n4HjQKVS6n4h6RhWLN1A6t9dH5J23kqYgA4AKFkGSCh3EYeFBtt2bU9DUyyFiACFDKQjUu",
  "key23": "dCdzuc2h1NLLcTBGUFp1A7gAJ5cJPsUdnZjcpsbTz4uRdwLp74EcxPWo9pkwVhTciAmx6uLAYLVVeFmUK4Lopz9",
  "key24": "28En8DvTyJ4wL7Y8o3usDeDaUm4QzC2YyA3NPRgPmQg9gnxedUdkGs4YFM7aoB3qrJ4nxnhQoURmzrZgfK5H7Scq",
  "key25": "2h2w1NC3oN4yed4KoQgrW3mHYb5do4xNaUBYbDU5us7bwLY9gZzRcHTb5dVjo7va3B9vQRVZDGtRzaBSN3Uuopw1",
  "key26": "9QkUryo8Bi4hQvpBvu4jZL38Zqdq8YcUZ3Hpywvi4wawAoBbWJ6ZCiBCSiiHU5eKmemg6SEZ1CsirS7KiyY1wja",
  "key27": "5N5MUaWpkcd74iU3nfguJcjVcApnG6oQho2hYm8NsJJYcs41ENYd5zrTFAhRbyzr4gTZQeFU6LoqntRHZpELFaBP",
  "key28": "AXziiwoi2cRmXEjggWWFuLrX86jhfU7NsFzCTNmngC4fjEZDPoPrwF51kChLRF8SbPiBpf4BFo31ntyTQFkHM3T"
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
