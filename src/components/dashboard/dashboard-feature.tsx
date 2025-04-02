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
    "tCGswLMBHpeoMX5Y6HJXin6ryEV8Vwy3Gq1o8L1QqJvte16YHFYLfnXTW8udF1ff2XGctXVavTc2S6rBAXwpHUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6C1pb9X6nYSWAPruaEKLDbRGMUo7zfhsCVKMkegvz5mLkeGeACCYT3vPVYfsTqoVdyfD9pbr9GqQhKwET6bxoP",
  "key1": "23X71nYyXtfxYWkV7iUsM629qPaW8qCPauyEoZ936fHmiVa63YdiWe4xKyKkqnXQneDnYYYCg61BmkNUWJNsnyd4",
  "key2": "5AM5MY3Qobrd6ufkhuLCt3ZM6VyrCvKTUGdk1CZTrVSi2dheR652GYxW5TMXZuqmgzKmFME7Zt6eCnSR74k9uytr",
  "key3": "2UMLEFRcRyAoRQrght1G3xoh7tZRMi8vPtyFntmsi26tzespd4zfx3wTycfuTGDHgPhJTXYDYsTB6NxQA2gzzyAM",
  "key4": "4ZoaHsffH8rKzVbqBatqVgcR5caeugeacxgt1pyux7B1U9CW4rTfUccg8Kj7EC1joDSqbRmxSzgLAxHH6K51W2U5",
  "key5": "2HZn9MG5V29rk51szzpCqgi1vsio5Xg6wsuyRmijsdEcoYn2qpxTU6Tynk2ELXn9E9h4fCj2DgTwc9TgVJsaBv9B",
  "key6": "4dF2P1MTbtdczMfdxPsKv4BxqwvftaPZwa48ptL9qpwt1yw8DKDBGiVM5N8EunQkUdeph7ViCf3TqqXnY6UijDc9",
  "key7": "3TYy4kuWuqqSVfzaURwkYKGfN7zPdpfrskTko8LvSBoyYXQ9NxmFjq1i9fryiGJ6hpDdanj24vMY9SP6DNZJfrcA",
  "key8": "5Dhu5zUc5iMuioWo3MPDHa8sDZKtGHKuxg9K12cyCsi3kPWmhWsCsvu5nLEwfHV7vm2vJpiRDubAU1QFzv3ZvPwy",
  "key9": "RQXEQCTMbDCiiknSdEkuefYP1cRQ3HxuUvbUqVAvh5C9eCXy1dmo8fm1RvgC4k9CEvfZNBHokWaJFmbG8HPEg3m",
  "key10": "4FvuummE6RQofQeP9DZ5euLMyh6cXQu7dhmnYg7iZGvNmtw6tQBEeekj4F4rWvTMSQwGKrZrtYd8rG8KqDx1A2f4",
  "key11": "2xJNFJikQJxeCNFzCjy6NmR2Pa8F2dPxnWssRydsM3cfpyepSviUK7kiC9SF5DumaozeuAV5UG4fzfyhdn9RStr2",
  "key12": "UHoCE5kSyNSjiiHK3WkhR21TyuXxvSD8AwYhDxuZouBo9MJtwx9SrJrrux9G5793xoxnpJCkLqcTfcJ89ggCDjn",
  "key13": "4EugQQWr5APZBuoFBME2QprSxsn2hgM7GyxmrEbfMXReyhX4zTdL5rGYF89cQkRCtBVd71oVjj2Bzck1uBR5QAZk",
  "key14": "4mY1mWXs3s9dEPHWZN2akw2KV5j1JkDxG3UL1MYsS1HUtY9cJK2YHptqjtXx1uTHpe3vJrAnY2hkrJhpypB7w8fC",
  "key15": "odcznVTwL3CNibPsH6TFoBzzkzGpJZb6Gm1znQ6iqdA6xUdDcF72VXuKFMxr1YNC2Men5YADKLqmLb4XjaSSVnX",
  "key16": "2L37wUWDwDHBwere2bhBgAdva1spMEWs4yT6aQdggWMN7XtsUc9ga64dTVhqN85zBDGbUR82kZPZNXYGdrN1BKvN",
  "key17": "2gC8JcV22Ecu3qSvn3pvuiBm9CqpNUnti2QpwCBZ8Tw82WeX2U7Tur9YwZ3SJ37dudw8msytSWsecFa5n9YZzB3X",
  "key18": "3uJFFEbuLNGfRk9PLCZdbToE6AKjwDs4xA7msHmfv9KP7fL248Xo9PWc6e76gBNwoG3QsspBwnscFrGEEi9iokVt",
  "key19": "2g1s9NEsbQY5n1SLMazLZopGmJgwqWFjKyZWY44ywBL6XvEepnRdJYqYyQXoKf1v5hgyaM2UDG8kYX8kVG1Gbhmk",
  "key20": "266Z1rXRCMUAuHg3VaUVjntz2weVubv1RQ3ctunnrvxfLZj6zSJprLhghhQQnfQRKL1j4qoRa49P1Av5bH6aeqxB",
  "key21": "4qVRiaqUGf6zY8fpHRasRshtUKTpRH6TBntfJtcCtENzBZeNg8FoB2FJeMuizbbc3AixKNAMtJgianeZ4FX6j43p",
  "key22": "4hkNbFGekorXQAZ4gzaZyc1MnZz8koM7uLya6F8NaNZdDmejNXzLqhxDjAr7hHfhxutt4A3WmRmMktsStxqdo6r5",
  "key23": "2rEy72hHetkiSszyvF9a1ybpkJTjVYbVURW2p6cb8rCiuPf5ceNhAkwCwBwvbmhCXLMFT1VTncapquqgVXZtCjTt",
  "key24": "5Qcb1ABaStTDQMx1QeQavy35W6Pm35jMbsCXU9rUyeUvZwiJe1Kn68ULAGK1fGR1UxZjERoWqcpofhMGz943qonh",
  "key25": "U9DyHAgwt7ypmsd5FJQaJfnmTP2YXuVDWDAba3kUD1Wa9bJ752NazU6LhqYDc6dCA8czbrS6brkiBPxX6Qr7AUD",
  "key26": "uYpodXJB9nHvNRa1MpDsE86HUaqKAvaVJhbVwKTvZR2Wz795qfwNiJJTwVMKWBS6bqtkFnVfphwB5MeEkrAaTNy",
  "key27": "v3mvMqfmpL8oZGzYX6RTRmBmwdAE74PasHZvnxjDSUAxtN16iYMqfvTEJD2szdrVX7wSkqUq9oXKnh9JE1fQC81",
  "key28": "5aNxwNniQEb6R8J4gbHDAcr5xvDYAEh75hCZLDXFQWLVprUEjzMjd5FhXdgc8QxmC6amVoEyHJYyPYV9AeATbh5o",
  "key29": "J7AXwMrWeaGNMFQysf3qD6TMtkC85kjfkMd8GDHL6r67NNW86XkQu5m9JLZcdMAgkaCdy9ddkvBzXnbZKM2kWg1",
  "key30": "3GKGRmASPaSmBuTPzShREbKL5UA3ufWQ3TL7GmSpy8bFmyBLiDiNcQtU994cyAJd1UFuC5bf2naAzn1Ukm9Dx2f7",
  "key31": "3SWNVNqh1qJPq9pku8EHTNk4GPLP4iY9Sun3wr6saT11ZLvLafziWMBRn4fKoDHnjPEf6USknNiA9LU8Frtg4nUY",
  "key32": "2XUvYx7tt7NzbhhDuxPZd8Y33Kcpo9Qyoa33QfKLGVFkFun2oAsCgRi9uzDEBFbaNAUbagZJtwrsHqWGxzBQaniE",
  "key33": "3x771DQ9cmh1uwzH9WdUYWU6bra82jVZhYw1DJQPG3GyZ6CatBg6VpShzWUW9q5LyLtHv5up5rjigMyhV4oBWrNB",
  "key34": "58jkAzk3FBJe9ZqZgiefaGykyQm26CF4seZFfPZfWKcurWD4VWnLQXue2az4mofhgkaZEKWCaZW2ZpHf8JwscXS7",
  "key35": "5QNprZShZVrfWj9Xfc1jxqyfEGB6DstJ3H8Qq7jACeCpu7K2wcijAxBfaBSnowmcaeGRj6Hzz8FjBWeddnw7dJqg",
  "key36": "2o6sePJHHN55nMGHzsQkXQPdwQMyNPPRpSakkPZd5KcbyN8AdoMxcNn9wgRtk2ST29pxSVtatfEKemwjcZryCBP9",
  "key37": "4BHg7fmr8BXMhMQEpNttMMVmpL8AE28DEiUhMR5AeFngBi92mMz5VmoiV79VhTSjGha1TG3YE4btGGpZLDEtQs73",
  "key38": "47a5T8xT7ExkZ6Mm2TZisNmo75gCe8W3ojXioQP4UsJZ3w1yWgG2He6SKdeeRGgRMkJKiTp5oWyuJMa6DtgaPWrC",
  "key39": "2mEJ5gVwmL1wpcUhzB9m8fL3z4qwp2isSKxKEKB2PtJxYdWn7ickVPR6MzxZb2L7cqWCkjcWAsCeoCuPtojwi16M",
  "key40": "2RKNLJKiAG5ek7qhbzoyLgFawkR8kJzxmYZEtqc29pADnyGhK8hXXGH2Ftb7aiwYw1J7iKbktwRZWiuzGb89B4uw"
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
