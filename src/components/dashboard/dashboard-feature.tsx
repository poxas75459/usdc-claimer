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
    "4heWaVK9ABf6CYLgyv7EPw1nsKYRZ7itpmm8gii65pY4VLYx77D7Rjn5kvFxwwqDmzTGTYrxHKTWARwMEcJNwkwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZMziZy53BGdteQoqCSGAbdb6CcRwyA9P6rthrMu274qzYL5tVZ9EQMHUzSPn9UeR2XGAwi8sRQCcHngusUxu2b",
  "key1": "5NzAh2KXzDJA3pzkTsqvL9nyMqGN5uDW66TPvk2kgUxuyCGWEnCddewFc1GGD25JzJChdQ1kPK1Vj2epBJ89ip7B",
  "key2": "2FoxbRGXvN1Whg58bp3565S2GnvjtBYeHai6HFGXN4X3PHhgoEoDUh721aNqfmzj69aoB2nhk2DECAvNnuGggQaf",
  "key3": "5JzLEqWFovQSDAouTBu5pi8EymKkcuaMP4gskhssLKrhtsjcKmoS5BcUjetH1jtzkSnZ1MPEDu32pziver8D91s7",
  "key4": "5MzCLBWzKbciMXpgf58FoJQ3t9Mk746oxbfZxhaxL4EzCwDaLbi1DWFiHyu9fGKcXgqRw2rZVZmyxNEzyo8nRCNy",
  "key5": "4ShAcgiBWsqacL9fo5muLa7fd4QE2QtFZcstUkwUWWBiQNzsyHuwD9b7pSoknY1WW9NJthLF5qCEhgFkeCGeDmdH",
  "key6": "3HYetu6SMFHMuqNiu62DSpcrjfExs4d4wxCXmmH42zanji8ic5CfJqn4ZDjMq9Fy2ofQCAXWAZwJVGV8q9YkH2Lh",
  "key7": "5y3RDR1vxTxm6KTht9TSyKnd3sFcD1Rwvzkb9TsCwj3pBP1Ku6Cg3kbQErnwjHD7Uy87Hdn6kubpvYjJWnTDd3jo",
  "key8": "LdVFpXfKN57p2TT1emneS5cPP3sWZMjswJu3pBEAyJJqWNkTTETS6oCqGWLJ2C6rf6JTgwz2ESjYxHkKfUT9qKZ",
  "key9": "5NDoRExHUn2fB8qPpBKPFtU4KgKnMkTZ9aB3TaTPNtcDJcQHSpcsuTP6Qwze8gjzAaxrDxzVMCMG4k5wrr2jTk3m",
  "key10": "sL9NVzWNixgxMHaYLPSbfV5KJ5dk8LKhSNKiG73vM45XFFEAFUi4RXp93tc6Vf5tMtgvwD52ryxWkYA2CRiGa7N",
  "key11": "vkGvgwMGGTXaQs89rSKW9bH19zijWUYJZVf59aCW9EUndfSgDv6sR61GeSs9g41ypJdp3PzeZWesKmSm9nHZ5as",
  "key12": "2ZhHnyXtUAWRXh89LbAoSZGMb8s7VpxKYVC8U8pdK7VdBdu8Yhka2BEq9bHazCqEGjoZP2wCYuuR3m9xBXXWkAhS",
  "key13": "AtLPSQyT7EzfWxrzx4h9Rxt7FjDAPKUtkxfnJWsbJ4Sjn51fUm7pLmHnmkT6xuVeZ493XGbR8L7A6UTX85pWoiP",
  "key14": "5Vj8puYKiunJSEH5z4p9ZFtxoPWaG9ogCPqCFhqtNgKZ3RLemqYx31k8Y8YRkCjTcWpu7K6H8T73663hsn6G36oY",
  "key15": "5y6MoXthsuLe7qUEXWELGcYcmtGw7kJTdNnd8LQ8FvsH4QowYyp3GnJy5TkGZ3CuxX7VLVnP7qo5eXUNv1895WQX",
  "key16": "H7R6CkmR7U1oi68rwbsSGhNBphwwMmAW7CRmiJ5NEQnkbNoujNw8xA9ekwQQf39wWyyEAURpyvx95Hg7a9DAhc9",
  "key17": "AdBuPpE9RaYpVNHm2omgv2N8b2yCE98ceppBUAoEJrJsgaFSahYFPN8RhUGsdXCeZSswoiS4s4bkQQT41HeYmKK",
  "key18": "4bNQqpPAuqMVx6k4SVTu2weCuauEke3muq6Zq4DcNXAr7kX5LNN3ypx5ykus9D5jW1Hk5f4LHPSRCRhLXoDWpFhv",
  "key19": "2pZHfLgMP2KuRKL8N2hop8pv9UpXYuCKnR7ZkYEkpd4KVt3QzdpaguMNw97wbqWZuxzqQkbnG3RR5Qmgnr939f7K",
  "key20": "56N98cgqajdPc6SU3RmYoFKbKSvwnzRNG9dUHygiTBCVbqJ13UzLnf7PYZYi4sopzHTgrnH3QQt9WkJwt52p22GP",
  "key21": "4rv2jHA7Xg3fcpGSHepNRwiwufkxCvynxrqmJxPGike6kN1Zf6neNz8SQEzmhYNNfDfXFxDhZsLtemPhbGbEwQHm",
  "key22": "McF7T3e9PPPV5L7yzwjqPUDwZ5qZkCUX1h49AMuokBdGX16TZtpJ56Z8GdseFkY42M8iYFQNLtYsXcJp7YZS3it",
  "key23": "5Q1C4XqHSnBQEoZ2ivbM2KF7bX9z7RVq5qARkCa53AHjfZ14QmHi2XESs3eaJe57zrUvm78njS9kykr8zvwfdrZf",
  "key24": "nsYKG5EDRr6Wpb7rQU9zEUMP8FDRfSdzwVUy7tzv5FRj8bx5ACsdzp8Kv8WTwgmfYz5RovK68kjSQwJYr8KzL1q",
  "key25": "5GHX6JVgNamiUzoBRh3QH2E6MapquECE8ts347WqxNDRrStudS1sZyYfHvxDW9sPhqoyHtfjV7r9uHK8QViMvcQA",
  "key26": "4dfGP6Jz8yn7odQBjgBtyz5M7ZPWWMAHExsEj3jDn9AQ4e4k16DU3vxApKn8esKttkG947XGgkZV8k8nN8UDmTJ2",
  "key27": "2Y9fBnVJ3nytvay3qQMN27BBAAkvDsrzzGp38H7D6dED7WTyhg2TA9CQ5e6mirA7JFprD8xbotb4h9zShXAZar7X",
  "key28": "3F2ws1tqVzUU2fPPnjNpsC9TQ1hbYrwxXtSci2zPafCXhrZf33E2rZTURjgHPJuw1a18G9eqZ4ibT3SbViTaNQ4U",
  "key29": "3si6gmUgUJkhTgxMaQ4jG7vzDRvX3Ab9TMVq2qxKZ9KhZa8qfBxR19oqbRSfWHC6oFHjKaXMFfZbL4JYAS83WTnw",
  "key30": "2WvModzquzkEUQiw36KSZR1Dps9PFx8ALjcCNBsJmFoxC83hgzD9ehQMJK4cHqavVidcq3mQfc3mCm2EGFUGHAXP",
  "key31": "3XegdUV4YpzGQQuguVSFGQKG8nXBP4uV1kqbTgQe1YVCPAijmqzKrvoRzHWmbVCmFbToe487ahVqptLABR4dwCbU",
  "key32": "44MH9jrLizwRLaYWEYwDSJ7YpPFHCvCxp8eJ8sJtc7rMRPU4382xN8UEzfycGbsn7pELtK4jv89Db7qvVdpz7NiK",
  "key33": "5Nb1gcySApK6LYniXLHTwidwCmHCZu6zHyV6QUWGkVfdgomW7JWjfoh8qxtZFLxK1kBTVWk5R8TGMRM7JPVbTXSE",
  "key34": "2a6WaakwZX3BW2So6zP6F5W13fp46KA7WQhd4J4vg2xSeiDvupJpuXW4nvjY8eRURRpakxi6udX3BWQcwXdBrzoY",
  "key35": "3TtC76mBJtHHNebL3ss33xmzanbVXuEGkq6dMgVkNtyvxDY33tRVQGGc3KRMG4LRQwec1EskvNwbcwZxzbPUS58r",
  "key36": "3kZhcxT4dKP5XCCG95yTYobsTX4KfvYAkQwmtRP9LX7t4nuLn9GW5gVZJdKLCdY44NhQ7CtBfN9RwPGm1p8hknJs",
  "key37": "5Y7ickaH5YtExzLFYA5qsLgqoeL7NecV6JLM9S5FnQvtoQp8Up6CfQdAUyzGrhvaS2yebYbLntoEoUqaqxwW9Bek"
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
