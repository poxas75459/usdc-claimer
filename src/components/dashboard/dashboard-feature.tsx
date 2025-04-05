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
    "5sjhiLDvjaHQwfJQ1uxkjDh9qjndLfPngF2nERd1FwZXfdJcWgDv852K8AsuqHNmsrJncUPp4BWDXELHurwJrQ5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C53knYMN8ujJpAvyuCSzPbthtUQUBBn2RkQA7dfLnPPcGwSsqNhdGjVJfyBxKURMugjH6FjAZdPcmDXYzGdDJHc",
  "key1": "FoQNcxJotZhwP3zpLFMyvfV6sxorfMw9PuZgWBtGC5U73EdAjbGgKhU4w6dYRUKP6Akv2YnvQo7z5RnEqgM8fve",
  "key2": "4ZgufEYdpBNh9vKHY1dbxHCqje51WxMiy2MpW53D82vbh6F2Uq7Q17WmgcmULp7aYoVtbnZ3ZQdQDp88mKcuUran",
  "key3": "C5KZSCr6mcZHd13qk74FErqTTz3ZtjLK8CL51dHfykYyxgiF7ogdYHpuNQQrCSvNUtvGKmN2sLfcqEbT61wSMK8",
  "key4": "j36kwQi3G2sSSSS7yH46yWuRkNtjaWw9Pq37UHV1X9hTgd2E62m6ZvRZAqWeupjwKF8Z2WsVfCHCHkNJoUdmjxc",
  "key5": "4JnnqJeYZSqoumRxY7LGU15w5ejbw8yS3wPNNvpqdhg98v96F4tAj1sWjyeiAG84C3sNmHTuc6jA5jQe6NFkh1No",
  "key6": "3X6gEKAznHWLwpiiw3jfu3XntYsmsx7rFYY1DiRN35xkkjGb1kFAdtNCtkXttZ9KX2xETAapRG87SMB83GKCe9P3",
  "key7": "2i8X3xZr7b7g5eNtJvfF3AKc2A99o2p4M4zcYAmLW7Xs3p31pXnyYFgbWh3etU4NcCNovrd1Ej36Lgb7TDgBDS1R",
  "key8": "uESH1xt8CKBhH1fPPZzpP1V3ZjUYT3Rmq9Rqww2wjDBxiwVwuzTi8fEJeU1C2TgzzfcZTPpyF8xn3hsJPXX6BHt",
  "key9": "5vjS5hgZegsBPZuRpXbVwKCgcb8asRS2AJMHHjkFZgtmq1j4X1pjvP8pfp6PL88hnn86j9ZLLauQJjRPihHwWeXC",
  "key10": "5UtqEsuhptk5wCseVkWYMSbZB1mvKxVU8ivu4bbRoSqAVHMHyF68q3tMMJgetMSoYtcqb8AxBpHvWxh4LAMCtLej",
  "key11": "63dhMuVK2WJFZ7kAM8oPMidE5F74qQwuojm6FNtMTVgxMNKcKQXJNoJSyS9pMZW8dVF8DxFnPB6s7FStEJYGDtcx",
  "key12": "2AedTZLUoSyapavyU6u43wWcrqbggnThUbLWUkSymLhAharEGgCvz4wk5LLkPrWJDcMg1RM9ZotEnb6L3VY9uyTu",
  "key13": "BhLEM1p2D7VJwTg1yi8L7Xf1RjmAGVdcR7KmDUa97zuvhcfHehAL45KnAj7MxB1sVnj21VKBK8qxb94urfa1jXr",
  "key14": "38y6The2BprntibmqdV78pgqV82vPkvYDq3gUx5efDFSMQQpqahX4ct9NieFY5eTL4enfUP7gCwQNcyMhigm4LbA",
  "key15": "3x5AEmXWWUddG1JgRHxcabuziRkFPaydjxMhUaFmw1hwbv9skM8bbdmxA9i9KzLeWYwwhQ4LoX4sS9X92borNuek",
  "key16": "4KALEca9xW88iZqNKXN7DiwgRvNQqiktGNjtXjzVJCF31gvgkjkT1GJM6eVX2bmqVjBzqGG4vQo7QcGUbZWuTfCN",
  "key17": "5zD1NHVFRR6G813q16HymqL82ycVhc4nYchQm6iZxC9GP7KkDKWCWjXDeDpQyYrNx7VDiL8RVD5rnVKzB2EzRTV9",
  "key18": "5VFYsKRYnJtu1ud6PYyxwaPCoAKNDWgH6FonZFQbnZ9wyEUwdyX9qccfTsWZaKRjVrSgi9GzCgsMBQHGGyXz6T4Q",
  "key19": "5xYT9hbRnKrKg1ftEb1oWVYB935bBe9pFPvH3NnR4F8jPXCxQgsEx2xBmf3LpdEiDWfbMgNACjQAqNgy6yRTjbA8",
  "key20": "62Z9ZvNKUEPcfvUBQQmscyJwTdU7VvhWNtc3qsMCpzeYe6L9Tz5ZaDt2pyWS5cQyw9fJGtpcGVLR5cEgVsp26QGh",
  "key21": "2EeGwTzur816jVXAwkRy37K4LeRscC58Yj9VNG2qqybrLmpLHJpnZ4MuMgtjYdAg9bqfUjEs3SBsvxHpsNcgBfqy",
  "key22": "5TKy4QebyXHJmAYxk8c1BHnnihdJt2EJ7zrjcczYXexFcpXyqBY7MgNoXY6yEH4tdX4Be4eXK5Zp95zYwb7uscTr",
  "key23": "48KpDYoPi5DZAaphPaMwfZCRkBzVAvy7SfVPeY4ruJNJTmTCGmZcRmj6iK8oXiQFneGF3cxtPXfDVkz2xG64ikNo",
  "key24": "27eGuAEf3V8hLSTbEx2JkqfoPmeipHd1mf11tUqtRopgEwqNYJreQALgp3wrZnxQPUNXX84T6e6AmdG7yozoCUKa",
  "key25": "rDaLyg9jyH9KEAEQA1W8VAwWeuZgXqfpfNXvNKp616U92EUiPaPR3YBSMKr5Vu3V9gczm7GUuqTzuE8hK5kktKT",
  "key26": "25awc6d5urukC4UHG9rCDJC8GiY269VrTakFhXmPzmqhq6YrVQSQrt2CqugexBjzPLs819kD8WmYwx2gRYogUqV1",
  "key27": "5G8iH1bJoTjbhC1EmFZ9iNtq3RZFEPwPxj3XckJXP7EktunHwFzUegEG6MuJtxi6oECmKDsGbsKwtmgevcbsDMmQ",
  "key28": "3yQxkSxxmLedTAKmxztueGgw7tMTjtpT2J4nkr74ykt4Rek4SyoKtnqg3aP1NYxA38qnYjACrZ9azctdJHwrVfXL",
  "key29": "4ud6P6w5ZQxF1KXSZtj889YKQX2HVwm7EdUpavtYrm48tCMqUa71mQiHj5q98xFP9cgHBKhSa2DS6fN8RKpshJA7",
  "key30": "2Y1kmGFp22M2kp7tGVnC7hnV6yYwL3mXQb5bBYgqGbPpKkqGPTMQpWCPwVYTydwPqxDag76wXNiPsKDzVZmBcE3U",
  "key31": "5Uypw7H3JZdY9BxGCU45eyrbfvqjYmQunTBeDuu7Ku4LmpAcponzeAyE9rfCVot87iiMdMoibBZG15XV1uNnYM51",
  "key32": "2ESNaGeLa7MDrMpNXjSAKJcybzi6zZVx6yED5xzzwfJRPdXckkVDvQVCKdG8HCgCp8RbzCjN5HmP3e7Mm2CdoCbG",
  "key33": "4tsWUtdNt3fRqACfxUmt27k8MkGiKhtXWqp8ebbFNjCV5xhoXk5op8UDr8n68FfPptv5ExaYnTSCPqLStFTHXwc7",
  "key34": "3YGDxHhfDXMbW35XCLjVb1ETfqTf6sW3uVoXV7ChPXiiaj7Piatxmf1M3oAojnJsx8t5euoyvT8fpinLbvhiPuwh",
  "key35": "3fsJ3yQcFq7f9cNhgbqMZAQNpXbz2UQZbbUay3i2noGzKcuVp8MNkG3W4tHt3EXnKDrQJoJVVwXWAm2krbKDbbyD"
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
