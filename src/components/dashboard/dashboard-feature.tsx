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
    "3nRHYr2sphhL6NhpM4sH1gnFiSTCyfnKMhHWFPR56XMiMc9C6zdgEDFREmkB4a5qt63k4v3AX7D5Wy1KtdwPJN2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVrHzcHMwtwFi1XgkgG6mXzQPvMAk62VpucS9xxYsrVfq4UtiD93dwXq3JXm8VmPvGm9BZCEHftrMCZJCzznkLF",
  "key1": "5Lsk4oAAoL4YxkyNoF7gNFFU7rachtFsDbyrpZX2uQpreLSKRAomkyq4QbkEuWZWE3ChpFd1Pxe7yGcKWS8auLxL",
  "key2": "5Utg3Mg3AHtakPoJfki1ZSCH8P5NPFReY4Rk2KTtuKRKdWSjyQdLHR2LW5YTbuaAKTGN1Twpjh6nv35iPBA6Mj9W",
  "key3": "3qt5oFv5TVUkHzLx9x37fjRhuA4iUPoQb4nmQCCQJHR3ZXsk3jhKA2rCiYZvbvzeMicUr6FpQDSondhKM4sSuWh6",
  "key4": "3Hoxhzi4BQmEqwscdUsphh9V1kcBZefTqYvxdQrsXP6AMDLpHQwXKEzKg6LAYNJF2Bn7azGFXqLhyEf2w1V7KGuJ",
  "key5": "TrktKw4pKqCtVPxarXEoxZjCc9ifxe1L8CovAca23vL8uvyahPNg8zWnWymhQKeDqU97YVdWqAXQ26RE7nQZTsk",
  "key6": "24tfW1R9x3QXg6iYRwiSuwYX8yvCwoas3LQ14VKAATQS6PCPGhDENBF9iDe1hUrFfaQoykcrx1PQQ6fhp1h1W7s2",
  "key7": "2WyPbvNNzySkS5sWt4L7HJSNz13irS2QMBy8L33QiV4MhD61HVBr9AEEFKxXe3ZVeuC3C4wQuDEiFpmJkRAgAmN",
  "key8": "pgYuyJLzd3HSBhwUnCjjJaxD8Jgnd8orMrN2grSadxw83tWKZS8nN8mKk5EzsXGob2D7jamQyePJcHZsuANRRAQ",
  "key9": "42nDZLXcp3JEXUiLfMMELteVAfwMhYH8Ai8Aup1cZMqFoybfgxwF6FVFMwzK1A2nMeE4TqJDRYJ2ActgfF3GsR85",
  "key10": "3gdy4m1w456mC3yi6Tngr9uuv72QUPSX3hkuVdMeuJiZYeYaHtQ1cCiAGhEUEa2hGL5qbkxU5d7ssZK9gMYGGtmV",
  "key11": "YYUGBb3F5u54rDFD3doMnVE3uS8ZtmfcTRZtoq4srL3wM2mzu1wRTVhcqCS7MFoY2rSPqjSQZDDHLk7WHCxN51H",
  "key12": "2euLa7P6dsVSULMccZmT9SBEghPSDZUTBYaruaLzMM9Wg9oJ6yzfBp9TDuoALESoj2pqfapGTjs5ZAD2L8n6hLnz",
  "key13": "27dsuM2FzyS6rn9w66FZMX2YB3ur4egX38veWooCDxKXrYAJenVDtTDvh8j5GCmTMGwRAPg3MhRa6UpfpveeMk7H",
  "key14": "4ev9pXzU1ZwEP4pegMds73uqBehxvjzLyA9mnRjha6gGEgb2iXu9Uov7xkpCD28B6scyAYFGKPxLaP4e9dpS7cgn",
  "key15": "3XoFTh4yraU5ZUGj1qq9i2K9Pdnw7GbxrkWC5sfeYX8JY63ptzAyhhtuwDgC8toZdapfXjXct2LKpuwdWifZpznB",
  "key16": "5K2ED2Mq32zchkgYqQL1afR1MC8CVabHYdGky82muPsY1tgUPES2Au5tPh3WLbcweWeHVbxTZoj1QSwkzbeDrgD7",
  "key17": "3B9L7sZaftznb8jrqEL2qpuNqbbiUSc4EPmGqhhoSHNvurwriMB89SfrUVBzPKQXwtoRkrXeakHHYk3Q8nULvyfQ",
  "key18": "4H1fiFSMVPrqjTNxkdgQJ1fFmGHH1jXZfU1eSAPnagz9H2psyXNroaNVX5BrAsgYtQ1iR4nYXzzCNjPXhxbg6S8E",
  "key19": "4siTcapehwToaHBp5mBKFnyEufZeEBBHzZTFUTiMWsMWakrZqKouLdHv4Ayfh9wSeuegqmhUTea8o38FqitvptgC",
  "key20": "2f5Shsxboui9usePkRcPpdERiWSfkpSDBc4eMrouUgFVHkVMMJm1Q7icKbi6vbetiqsQNDX2dYcU4SLTvyBpVSmQ",
  "key21": "QFiVx8mQYCik8UcgXd2cN7mtuMY52F1fPGsjgfzYeXrCJE328D3pYRoY17indxE6pC7JGJgVxcDUbj6ZKgdDVt8",
  "key22": "2CNsLhHTRBHEeSnGjh9mhaZLhFSNgdhZ52Fi4r1Vo9tdHwKXDGwy4YvYGtjwGtLZpNyKk28eahUUmTh6A6RpFQ2c",
  "key23": "4Zf6aV6sSkbqA8TUtoVzD7qAWBBP84E3oYzLRp9KUU9F91F1QkKpJLdYYvRu5R31aYjj8JQokX4efZQd7oTFGRWB",
  "key24": "2CdQNx3HUCpsmvPNd2KyWWVT9WU2pgA42NGaFvXnKQci9v7yUvvWarKj9LvGPcAogWDguGEvLtZ9VC4H7BDkkVNH",
  "key25": "2CmmLGNeH24CQ7226yEpMQUMiYt6bb9saV8qUGkhK9SEN5gZ9op8Vw8xNbmPrpb1mKc85QV8Ssyz8kU8jVbWWDad",
  "key26": "MpJGyo2ryk3p7Zpry9Q5A6SnRbi519xJzTtmGe6AjJn6KbpLY83pdHkRJ3sWrsKySTsAVhpn5yxwzFvbLcszaqv",
  "key27": "29SZAsxfSBcTp3LyanyqZBE7C9wX4pUYDKz6NsWgUtXEUHr2wGTZaQynRRw4aFvFsE5scuZ466AEkiKzNMpbwMqv",
  "key28": "2GESdf2FuSHovmjuE4MUM11hgMv9HmNNTwEWEputpLkVBJniYkcSUWnoh6rUN2owcm42FnpGEhGrZn9gf22jqned",
  "key29": "SmKiGd3WaGXhwfU3P2CUmbV8hLYRu63X7mDu21BkzUhoehca9ejb5pXaa3gAyWoFE4wDJsEGnDgvAfj3w7JrbQP",
  "key30": "2fXU3gqjhEnfi6o1wiofuqrAQy1HhjE69vm86jUufcEzn7Xbpt69DhZNTGBVkeWb83VYuyqgFJqmiWPBE9irzxFe",
  "key31": "2f8HcK96C8YtKdY1bTQ1emQB6iAL2AjMaj4H85kPpTd886CJnma3t4jbE9hw87ariKfxajdjZvsafqrUqL6haLiQ",
  "key32": "iNR7Edi4HPv3nsqkvQgD5ouAAkcD9bH2tNoML7ndc5tSjNHL4tsZnqa3MtieUShtA4u6ZqfuW4uGUjjLMT5LMB6",
  "key33": "2fiQGvVwSvJEsxUaxRH6mZJ8G4BtwnmGSguPzs3i1Rj5Dyyz2fMioZjCCMXatyJPnYxqS4a8caKisKUAKatWXmRR",
  "key34": "2scTRQx3x1w5PbwSFhwzt4YJk28m6tW3eZNfusovqQDfVwiaH5YkSbiDKoHccSuz6Tf65gQ3qovTbXNXgxiAg9Yj",
  "key35": "3FgdxRERCvZVyroHJqryjBKxgkMB8jfxfDg7gCYoM19m6rZdZw6YTn4DTgm9CSAc3w36PQ3sFynTxpZJEaxdw63U",
  "key36": "3NJmH8iu22hBThSJgjHju1XeEGLpi6T847B8jsLcRoXgSQyuBW7gYFijuBUb75fsqDhuZYcfiJCJD2xMfmAhEzNU",
  "key37": "3iycGHM5UJtR53XLU3WNPvMSj5wUsJkUDsDA6o5C18np9N4Ga8xsLasSGHiqoEpthD391626iUZ1NzUjbKbGpCrP",
  "key38": "3JaJTpkzwjYzr8wUkdPNgNHEyYckmCADC6Q4nAg8PA9g5nDSRqbbaQEwhBRLWrbTjc2vuigmAD22HyPEbzktBXsR",
  "key39": "5SSbAsiDSJeoJXbNgAGvaB19gw7nhLdz9eQNtqRkXbHzCM8x2M4R3wcyaLVm8K7FGJQpzA4ZapmmU5ynQndaVe4y",
  "key40": "o92RVpb96DfeqnUZ4zAtY8G6byDG8F4Z3mCWfUmnkBwJrnmkMfeaPqfyqPSBu2oB7ZSf2Dg6AXk6GkmNNvGjngd",
  "key41": "5h9nWnffbh4aSRhqVYhqfTmdmrgbFssP3tdM8s3cS5CmeZRSggj9vJKiaT5nnMR1DbMuQ3h5m77YdXatnN13vpG5"
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
