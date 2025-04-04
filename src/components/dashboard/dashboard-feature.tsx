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
    "4i73Ty1pJZGns7MYDAbNv2FvrSmAqBY6J3reahY5PcbqqTgPEu5ZJz26jetU1zn1MskBWETCW74qEvvXSXH31wpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aq8p8YZjKc5PoQQBJggK2XnXWTSx96n6EiRgYD6s4vdo7DUXWmZWzhz7HTH9h1XKbJqz9kCTw6oNoccsiavvA9p",
  "key1": "4BrxKJo8sSWsKJ4Rv1dYstWsBk6R4GC7yR1c3kr9tUiFxbtZUxpe4cBzVy6LemRhHe3sPgWvwwUXwadwCK3pwHnH",
  "key2": "4zkb1L4ABwrB3UxErsT5TZu7GgBQumUTRcYMVVmjrkmGik4o3CMH3kyhixQQUsy1wNmBF6n7RUyQv7WeAnRkDkot",
  "key3": "2kyLvZMsvzzDwa4KCw7eWRmBQiYZ2fJM5heiUcHpoEjMh7ndR4ZqhhVTfJk5p6uvv3Yrj9yYKtAXUscvgWr5RQy",
  "key4": "oqZB2iJwmA5FqANiq2ueF3ANWPsqVUaYuRNyfCh6KvjKwhDoSNGsKGyw34Z8wXxpiAPHnLyfLSkceGePmyVckam",
  "key5": "3CoT6BsyBLgzGiAuKtBojrwnbtXbcYvk1HazVePaZjtXpbnAmV6i1xCj1CAa5mDUapWFdfRepjMZbuxPp84Djbff",
  "key6": "Jmpz2AaZkfZPwWSuz4gJEFCpBRsWM5EcPzPCfJeHnVbzBL69B1gMXPpJWkAG2oivhq5TSjc12RCWX9Vtjxz84Rx",
  "key7": "UdZSuN4uDyGhXSSzgdTGTQWHGqVsGWnZsXjcXdexvr9YSU2Yy8CmVibt53QLCuJ5GqjLc6fFiJLo5vQcyyZ27Li",
  "key8": "81CjJmFzr4ZfCXrbkD4wCcpjmwZvXTgMzutaVZfZVGEx4uaF9uYPFE6DRxg18jZVRef1tLpW12YcueX4VFQfUFs",
  "key9": "4FKun5uoutBpYiAXQmSMCREaiUPJgBfkqn9LMyww7wFwkvJtEYmsyaAS96xdyuyw43B2FPiQnMFMkg7GsMyDyUK7",
  "key10": "2KMXxUu8GL3vCAxiSyQWFWW4i3u2t68f6ZVYnoEe2hfaAW2RnaQByN4pZxcqVdtFZQ3Xw7YPtop4gbK683Ecowjo",
  "key11": "5ihBEsYBxCN71gHGhtdWuhtDd6JpJDsM8wj68oDtCP2QBbBommhdAtw4jQU1prpXwqk7oYy9tE9BErU7dCY1DvzN",
  "key12": "6AoGVSqYbucSwDSqrPdBrPCf8D2RqQQq3KoipD4KRHAmrNgcnffmyy6AvupoctPtRi38hTauwChEijkaxB6h1wg",
  "key13": "2vyjYzK8kZQPMETxBTEoin7GqWGEdCsJBp1VP5zRikqKjoUe4bZVS7bATzTWDi9oFJB4yKZTdQkNPpNwHFtgwx7G",
  "key14": "2jcPZRLKLeM3TbHRoAYvNZhTs9u7T7HnSPGuBYizhjLSyyTweEyhwHfz5GzV567257JrishPvaqupRVGhEDYzik9",
  "key15": "5i9Qm1NzRagPWyoAHiy1k1Skpb7LSGuT5Kn2J4tUGgJzAJxGoYQx74f5Af4nfsjsqgDxQkcM6f5cD4hPT41dGMpj",
  "key16": "377NzU1tEWHC7ipASSHnbUpMjqxsEzDLnbAojkxmkxUR3euD7y28NYgAnaW5Uk2k7ZhFiEeCgb5PnysEjp882Rir",
  "key17": "5V5swbSF5aAo9Ydd8kjjB11T4mjwGQDLFLo2nhhywJA3DV4CGFon6K7cMbez9akeyRaoCZjNezGyVhKx1yseJSNT",
  "key18": "5L6DNpmZts3363xqM8n6LQTs6GhSnzLDokyNa3mhWYMM8aQe5zdjgKzryxxuxf6mBTnzYikhiinZPt5VTQqdFUyD",
  "key19": "4fjz7DctxiDaLR89UWjxT8CVcSqk8RAjusigwFXB6pRQCrWpK6ihqmeRHZ3magKrd9Xc4hZPs9EpeL144CwVQZo4",
  "key20": "5x1iLeXA5Q42x3odxVe9HEWAyFAPdq8MfV9zPVtwMCJoHdxhZY2CaEbMZmJZmBRw1g7kZA4EzZf5K9hUxQdcNs2G",
  "key21": "2K7zMGHQk7hLCpH9VgYsgRuC2MXCjPVHGLJAt2Txjud9eBbPaEtrJ9jJN3jT3TcHUATHgw55GoBnyNCZsv6D1vDM",
  "key22": "wHez19bctjsbLoCPBykxiMyf5x6vrMQbLRUnZ75NWhWYSjxh77Xdbm1m43Lvb1UYMztxR3adifA18eeR3F1uChB",
  "key23": "4d3iV4jTQSStQyvzdXxooHNRTcJmCC3S6uKRcv815xS2BfnMqK2zZFxqamhVXnSCrQrvTi2boVCn1e9zCaSDvrfc",
  "key24": "4EPQzNSjn8ZhSW6aYWnKzk2DyaNLtezCTcRJUT5tdNCxqFiVZ4BarxSWNqsSwr76XnWzXMMTHpXaAn7EUTWL4bki",
  "key25": "27grXKS7g8GhQeeoDyLJ8JdnFMEdRAUz1zBQpYfKU1E4ZVsrMnBVWR1mJ3jNkuVyVmXd2eA6B3XBUiFPMHc19vyC",
  "key26": "U6HKrGySBED6Na98Wk94XrDN9uhpCtk4SZdk7XxriHXTnhHxK4b2fqzDJGRmDsQDJyeAm3e6UQ8UuK82vRwsWsE",
  "key27": "45jM2M88W8zNiXhwYGYdQeM1urEAkKPUq8PLgssmoqordXB3vu1FsufBauDwxnTQVAnTfNoALqMhfY63jmuVYTR1",
  "key28": "7vxGgtYeGN1msXP9pp33uCF59JhV6RpTXSnK4Y8QixJ2uJknaJc6caUEZTqoo42Eck44hKeAzLLS87JEQzebxqG",
  "key29": "3r5Jbo2gX6CqvQ5fpgoyezheQX88YVTBk9bS14Exk2owRbzzyUVBuAhWoj32q4fTFM2rbriBnWpNsXna2gNofZYY",
  "key30": "5UjFgaHoDpWXwpiWiZM71CZ2eCWc6a81m8LJTmFBMMZAKqVUz9E2CSDsZZbtTKuHQVQb2VEX7hH4GRWayPdFsyyB",
  "key31": "4bEpSG2msaCWAwjH5EqUGGJGXaSoEcuRRyXRXGasv4uYKDPMoUu1ewfPs9bR9h4W89unZiZHx8EvVYbFWWkeRdMz",
  "key32": "4ixYzwy9xVEGQHHvRrWoq5rgoZ4BSNaaDeEYfN5cVMnnZ4K7SXSS8iBBeBgqWj1fLV33DkmPEry3SJh6B4A2Unq1",
  "key33": "5YoEa111TAVhdZh55TwggdGZB33AKD5Y3KzaTJ4s46AF5B9BBS6S7h4HfaTvPxZV2e6s1wqCVdsKMecgpB4QjiJi",
  "key34": "5GQu54j9rTruw2z4CneWDvhDN8RfM3tPGxcy4YKjhYR2Dm256WoTFB1NfgVg2645gPnHzgthRpfFY4Nid3PvmqBg",
  "key35": "2Trgu4ufiBxP8xzvqYo3ejwuizTxsi14gPgZh4YURMW5MPrpo7qvWRXhmcd95Rn2waNVNAkVVWi47ayiypnvMpie",
  "key36": "5J7m5xCTG8t7Ve1pqyLu7X7Sp9H5LeHrmqHvksuA6AY3STsFUW3NGNZMKAhB3oxaaZP1U4zSRHvR25iwrSpbiKRy",
  "key37": "2htwEJTjhVMEztmhtFAEFBPzh5GQKKVB1i1kUgbBgEBqHKaL31tk1cSfAFRmbAZ54wkhJAUtvf6jZtQjBQ3tTeyM"
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
