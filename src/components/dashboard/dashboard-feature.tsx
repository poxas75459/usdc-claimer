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
    "2N4CCQ48tC5iHNGagRNBEfNUJQF9pXNgyMmtrAR3GbzuwKFF9Xvfh3UFqY6KrhBJEjf74Dq3Cczaa7c5qmDtNABv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpvdDe9gN4on5c4c2uABBohKJ3ACfkhSX6Aa4YZGFYiap6E9Bs9bb3RgcdKWvCrgbTcX4xkTteLRECA4LoyzfaR",
  "key1": "3RE7qAxMB2xoe8BFfuWXZpsFYBt6i282T6gKxrsYokcRoH9vDpkmy7666pZ5gzMwEJ6FN821SNAWgpTVnpd3Rmyg",
  "key2": "5snkd6TfV6AXWKjFjnXsD63Kk1TpgcnLANTJRyoLmhmqxjQpAtxNR7MhseaEDkBVHZNLGuStfmthVduiyebTBxvD",
  "key3": "3aDLSTgN4mNbry4qXjjVk3kkEBTdTALMDb8kN6uVntRZEFPqaY71oXdP3JbqCDNBSAqkEPELn9G5z7nbP6dCpPC8",
  "key4": "5jn81LQnN2uJ4bxoSbtQmUjcRgqU2tmeuNHLveRS75PsSV6JRVyD1cQP38ECSJ6CfJZpMPjAJHrg1TnTTPKPbmh9",
  "key5": "5MBdKGSUdXd2ZHfGhT5xkvJ38F6unSxVSW7PttU342EXgVPsJZETv7vpeWZm9ngV9HutyFPjYngMt6vKzuJUE4yv",
  "key6": "2641yECsoZgNT5Zj6VTKyfwgS6zgHzpHg9C1agsAPmrWsb8zYbuXU2H3xqEZpHGfKH2mKZZKnHH6BebjPJRjqa9W",
  "key7": "2zkoYgG4LjTpSrAP35oFeqJNC5aSwfpsePDd8t1h8J4Xj4SqmM6HNownYp7vGuZjeadXtUgAjep6EXnQ5H52L1eX",
  "key8": "3ruRZmWfo6AaRCc1gTmugJL5viqotuYakYJ6NwVtmKrfEEcMi2JR8tsgJF1u7bnuoVp8Cph4ottkYqM8gSmFGwJr",
  "key9": "2FYpj3TVNPwdjzX5VtyP2aMqpJg6MsaukXd55GjpPuBrvYqggaKXbbyuVcJ5NCTyky2N1TYqbhhnyxdvKF4Ky9i",
  "key10": "5X62KhXsKL1KmjJ5nthdkPt6m1z8YpZwJqQkp6dD3KKBUbyLBAuNn3cR9WWrcKdgTV8ypQDhrb4joZeJT4oEjFma",
  "key11": "5kuHbUZ1vKJmcxiba4WPtwMgUNrWfcVgr9m8sKpvWDBtr6dUTQ3dUdeLu5By3qjFSpBnV1gpGR8Y5vhaWWDMJ8Zk",
  "key12": "3cqU6b3rEzeiJh3wA2xxFaDN9Vv1zbweLAHs4Lc7NDH8ontBNJJzgveq3ek2Tri5X1AgAjZTFqBAWSk8nNmVx89j",
  "key13": "3hrgqGBh2YpmDiXddGFiLo93f4vfY2iZ8r3eZ6b9cddxXD5v8tG9f2DcWJjRtD6byDc5TZesMGsgiZgRwgyS9Kkd",
  "key14": "3tLCEdU3gGYg7vNEHmuqBnNpKV6w319LpnKYvsJiUgzxyNAuDaDJzaWtDuSnRXb8cUuKMHoXJNibAHJ3RwpRPVKU",
  "key15": "2tZWWqZ2cx2oBCfNYM79DVS5X8HjJy7PJAopNy355xcqQvEfRKTqjFC77h1wXBz6HwnXCmStwyxEQCiiosGeMLAC",
  "key16": "n2BGb3EtLKuBKGyZmZ4s6KnDzG9XA9FnPfRj4a2RyzXfes3aXhPfUU5YmJeTQfhRktzYMWrzMqBRKFNJianLUUp",
  "key17": "4C86vFNsfXD7ZzxQ5sgjnRW1V3VuYrmUwbVTy3DzoT6JjtBDLRZNaiFkZL1RAyoX9JhxJA99NdRsNetN82TPoDPs",
  "key18": "3i3knD2rGT1p9xKZ3QMPKsu9zaU4ngxzdUcscETBWZSnUmF5UCCCqs5gQdvLoMtq37p8ymRNRpHPSF5ycRCFF8b2",
  "key19": "4t7tspFdqvzDqJbvAZphWp78HUT6WX1YCV5rPhkn2yCdAzKeDFUvWPsFCtSUGPVP9DPWv7CZvZ4NK1Wqc6uSatnv",
  "key20": "2z1KtReaTceqjU5BVFHWNufx7ATeY6KAbbvpstw1FaX44aqjGskFDRTQrQPXRDhkgTM8EP8jzFPgHmrz2fHp4xYr",
  "key21": "pVk97ePdBQDbD22XKVEaQAqUHxJWnZP8T2krXeF4kuPX3N5LoLHw9jV5sVsTnRscuDU4vvdgX9f4krYA5G1vD3t",
  "key22": "5QxfS6Dbk6cXVvPVv98Mta8wuaFokcLHPP3ijzkWLXAxFheeMyu4DnRmQtb8QrTGjjFQG2pStVAj5hNHFWnPpLFH",
  "key23": "5osHh5QzGzcGyR1eBrcqoRCE2REQHjYAKLZFV7ow1TzRVksUL2YsoKopyvxX52KKyWpTakpBuvUaUHQ5GZd8jPJ9",
  "key24": "3gQECB4RgkS8UNBjBk1yw7dA5rdYX19dCps9ZpRknDpgC9sPbKWiZugbtQtQ2cn5ijoyCtReXg3MmpNgUfjJkeSh",
  "key25": "55WbuSeJiMh4ZTGYryqmFYZTF4ucDuo6mWxrHbSy8QpjQv92o97rHq3smUahCwtEykxgQnL2bygNbCBNTQw1drS9",
  "key26": "9riQVXUTc1Td4w9NbtUr4kqTuMW3efP5A5k7BKYZgmAuU1mxoDa3cZw72Vf99smv51B59zErJgVFgeNCkGFc8jF",
  "key27": "55MADiQZuveCV6jyCUwgrAFKKH6ZXeNWzxbps3UKFbjJt6GkR7qeSjxLk6d2jqTMY34Wjf9MYuHWDcBYxToXpnoM",
  "key28": "2iFNJmN6K6L3EirnnQJ6BwaUDuBGUSQK9Uyg9By2CRKrxkWvsJRGP9Lb7yGJNoj4sdTFdfmJBgqW9RyUXTn7xKTE",
  "key29": "x74YmYo6f32CbJH7qLFsHkaHQUQjQW9T1mkZyxwUDmqsyf8m6Kgy8V5upG1MUSSG15N2oBYUUpaFnCUd8RqusSx",
  "key30": "4sXW51NX9N9vfvDcirwpmLwJk9FuZADGKnhVMSSvZ8fhkWM8fPWcNQ2AqDDAFX2znyd4DpWJgUqu18SH6zBDV7HA"
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
