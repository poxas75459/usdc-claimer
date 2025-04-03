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
    "6oM1n8ojB1nbuA84c5LqeCZ69viTGPGrkJebnjByLetn2BS1bJ6A7RAo8esgncMmtd3BmboFDYpuipb4o3JuBAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMatBqF54HUayJQch9eaPe93Banc4WQ9odFS5xGctHVEDyeEKeJtgu6F2mSEnRJde7rsEQGCnaupjRJjgdAoiej",
  "key1": "3N81aZcUkUqFzJQVG8Y8ByeSmUXAs8iPevF9wAd18vmwMfdTLfPfaTppPKBKWFKjw73X11cEmMsATsQpV9dUVC2E",
  "key2": "KaAP7RUztkcLhJ16wpfsDeCoA3ChUk8XUgDpyBu2NJ1ud1qwXGH8uHLLhhVBXuXyqs2BPUQBqGea6jdFYB75fck",
  "key3": "261iQZeLYY6zBd4XNBvmzFpkZPjPxzBsGVsBX9PGiGnx4FPcnyEmE3HTE5FtBS2b1skfqVPKoVqT8WKUZ3Zpyt8D",
  "key4": "LTZG8BExpUDGz2z9YP78UnnbqfEbFQQsDLSV2K5kQqeb9ahmvxnsyK78haQhAfxQehAdygtFE822PBibacVC4mp",
  "key5": "5Rr3Te6Yu9DQCtxk6RLME5qnRxJvVrSoJGewVxE4N3sZEyqsPeP4389anaWqDd2rYgNyB2NcdZ9fzMs55gqawE39",
  "key6": "5R5G6i2NwBrFoFzRjFbhs4TEJ6A8HmA77aiE1RzXSDdo3uQZYkVU6a26aBQycFT3S31a82dm2sHRfr8YefUxm4Zf",
  "key7": "GCthinWGronWdMQGSfpYo9v84vHjZYtMrA5JuthDDJe2LXH1DR7QnkXJRXNJ9zQXbUm6jcqKejNEVyYc9QEQGm7",
  "key8": "3Qi1dsJUVSHXAW6TD57AYy4FtxxZMXeFA7faBivajQpt7uFhx1JZ4Zt6yeLdEDciruN2EWah2w9N9j3yJhjhSQQf",
  "key9": "66x9CSBgSNqd59Hkvo3J2qsWhXpL1iGEbgH3Ruh6cEuMRYsauTFuHAoyfFFerR2EQnoLHzQazDGMvgzvEEuBcBrP",
  "key10": "4Xa17T5agBb6Kq2x8VtVqBqwi7GCBH9Cy4ypovov3WpaPiToQF6XrmSDqpJhnokgPmZ3oQZgpeTs4mbii4PVSxp2",
  "key11": "3LtwfTFjw8qdjwjS3BajtNY9mvKoztzcsg3MfHsixhA91Be1CUMxNA7b7FV56KQ7WaZsvjxho1AhrxorW6t2FTWD",
  "key12": "3mgHtoFkKiHa8TjbJrseEeATooWTiqZWLJinXA6DsY6YtJNVdSRLrT8xFUeMhg1NjcL5oCQS8E6oBFzc6d9AQKVp",
  "key13": "61yAZcXVKJf61f6qeTaVSZ4maRPwLy7YvP4WKYCKi59gqUz8kscDZYUEoy4KqwDRdUFtbSRi9p7kdmc9p7bJGUf",
  "key14": "4W4rnbsqvqL6TmVpQk3cawp2DvwEs6FsRmbsuRTbH77Xvx1VbXj5x87VPnEEN2NrBFhYhyacE4q29FQUqL9RTPAD",
  "key15": "3auZnsZVWDPkC48or7pxVKXEuagwWKRutJhexZPYmE3iBgN4jTdKDnZJovFoSrdpmyVxS3j4eJbsPCZYsfKE7R3V",
  "key16": "3ttg5DXocbtRmK9XvmMQCz3uKNcLPeEqK4LdfPxNr3HazSDwH1yViypU48MQ6t1TaCfTGDS1V3vJfxsA8Rhvu2Na",
  "key17": "4fxkS6fqmvxAAb7cLP6Qmn6U9XuxkMieGkjfi5N3HdXYzUJ461aiZVvay9WPd8ogjUzfZ7JStbgwWhqqvrNaEKWE",
  "key18": "UE9V5bSMFF7SARwuCwt5WXenK33zJQa7UV2XDcZbJGL5HuadMz4swGYGgL4ZYS6Z2GCAgPVkB97W9gQ3ypWVJwB",
  "key19": "3wr9J9RCspGXGAg6f8vCpsrH2JWfh1gVs5jLc4JgPt54BYWpPDx6Q5Ch64z6htZ86rx8uNhyeXE8xfroyWypSE4S",
  "key20": "3ofEn6ZRp3u27Q8cwRF8cSaQkwhrBuNzvchh3yqTH7NiBQN5aV37V9Hdp4VaGpDR4mZj1hFuu4gBShyD8VkuZFyk",
  "key21": "5hfctdPti68zh3JcMpxoKEN1fKtRddDBt5759onVZwiZxQWXJc8jQYRNLrURAD13Es1G3YvGALnJsgRenhzpcQoY",
  "key22": "32cmLjMA2Q9bTR1P4vJ5oSBoPn7mYd7JgP8y5mmkhESzW9jXuWwzPFCxaKqTYguFWZN35gmRjEBankQ5GsBR57Z2",
  "key23": "65JGnZc6cjm82qVEDXkLP5zhqFRj3753faNTRTbjmWeTKMUdwzoknRHUYc95YGy7213GoY9c1wTHfFoPFD8YRbJX",
  "key24": "4sdWobwx4rdDGwPe5zx1FzQiWWzcs4LkLhHTiNVDmZnaHb6tta8GroPaREuud8cZhPFJhZLUUb2gVHDoWo7uu2p3",
  "key25": "2JRfH81K7b5DBoG1FLoQZpk3Ua91PDr3mXwAp93LuToZcHZy9YketT6paju29kEoGJhHFEQbANwDavNWay1YChES",
  "key26": "5Rwye1ronmLae4JNxwFpJv2tH9NjoqqcdR4qR9kcT6cTns1sQLYRQGrE4cCUhp45VZJxK2qTJKscZYDn4M1gJpqx",
  "key27": "2Do5bpB932ri5t8imrkwr2ZdHpFGy5sgLHVi8DFihmaSycsaDHJy1KHarwRX45d5teaua7rjyJE9NuY5gd5U7R4c",
  "key28": "3ziodDkEeK59xPVYqP3pA2nCKwDLhkdwdiHe2AqtbxiZkdcFTcrHbLwRvx2Dk9eWzjWneouD6AvxAKjDeoQ53Rn",
  "key29": "2wZy5nW2FrZeJZ1aWHJ9gvxSWQkrGqkzdkMUcZwucNQkePQ54mxdUNYkcEZ53regDRVn3QTNqpHqVezLprwW6T9Z",
  "key30": "2fYH2eniHXMRk2hATL2CW3MVYPmqACKcZJ4MCuv8TMd5TndXjZaH2jBVKWD5LrjfBF5QHcMLmB9su2eDLPYSaRjN",
  "key31": "5t3LN2C4bjVp5qtvwLvhjbMzyW53upb9jqwfBy219zshCU9KD9qjeRotqRZCgVhbZpR2TjpBUo6vKQjnYU3hYcYo",
  "key32": "2J4mciXD8odadBPPNVYvag48kL2KRFkEQTk2qE9htkCAfQFGdQBwrNeWBn3kB1MTFa5LpHw2zXKHLTQirkXTDE3v",
  "key33": "2kuCivy53bFL6vbmZQmaitNdbBaVRVHtKiNE6213axNANwfPXadmXDdTFzNLymXERR69cdmtJNDZ1eE4nu79njFh",
  "key34": "5zj1GX6jfC2bHi2GsG5dypgNcbbiYCuG7ai6JvGJWBe8qEkEEkEhcFxHnTdGz7QeDCVS9CSu1hbqvU2cojDLWmei",
  "key35": "59sFiLCGBpkJFvQmnyYUKuM2dWeQURzSrq6zcAiAYtHkbj9Ma9s8PqS7ZQrD72Tm7knmuszutZiLcfdX67wyw1Su",
  "key36": "tiFL5iKx9bEHHgP3oHHs4w7k9foAgcJy9gPCKY2v6uerbmv7r1LCrnzNNFVXbULS735YCVNamhEKyuKejgYGh9f",
  "key37": "38YphormXWoqgwbrF52Uq5UWN18537zWzKYLayU2UqeScvimb8DnY2WdVZ85XSX9UVGMPMof86SjknAAsuD3TqpY",
  "key38": "2348kd2MMHLAhs6a3CgysWBy4Fv4HbT2EjTuXy3vG3iDxPVrhWkTsHsBm2M296hbwwL2FTmQSKjiMvqfw811C2Mi",
  "key39": "3crYhCFxPc7jA3DEdGsp146ohmPwv78pmwiGTuzHqRQ9F9GfxmJMibDB82i4DqGwsWgsbVHkGKZu3LktGiktx6oc",
  "key40": "vcqgBovuM7A4fgkZmSRc1NXeBzyCqLYCQ1tdViXJNmmYNpMWH7TREJeiFGEDMfPxAXNXgABHcsZYqesiQgKmxng",
  "key41": "2fu762kYMHDFejejX1tmbg97vZvXTjTwYWiyP681SdT1AKZEs13LLumaMp1uDaNqJXPVxE8t485SFMXfZrtv3KnN",
  "key42": "447K7vSVUxXux6nHPmt7Cude3TSJDi2MKbBFMk5vmsdjb9wsGWgUihSH6v9AjowJVcbafHEwFUaddsaP4HNw7hs6",
  "key43": "5y3AUFop7Go6SJHLK38TqtdfBxdp3nP3wvssW8JTpeq8NkKn8CNtY7zZMbhCPzZTnwGxXgk59hGk9Hwb3ZBKtAAx",
  "key44": "2qAobyCcgCpKKCN9KygcpfJieEQ6AWyV6Qs7ph15uJuGydtv3HkdjS6atggEGBZCwoT4GxQD515N7qw4RgqvjJxw"
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
