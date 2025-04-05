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
    "4iJDK52CtTVZEGyJidWkAM59RBHCugDkNFEETxQ7wgfbQ1ppmrjUEs2XLztmX4b6DCp7aHk9Xut9cYx8STRMjnxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukB7AP8iECsNXYhrmwCqUzaFcJzUV61t3fTeErbdCLU3Xj89GcUhkaUKRr9fVx92GyGEDwSz4BVjMsRyxM7J1Q1",
  "key1": "3ARexaJzAbiBbR25pbTYLt6Mk7V3Gg5V19wEwgr3hTBSg4UwRs3eL6TVxyS4PMXG7GkyyD63aYuEbbhiK8zAHFW8",
  "key2": "C9Bkuan3gx3zKWEnuk4j1Pbzrjm7uM91vrn7nfXETHu3x6pcmKRBLFFs41j1PZsVqC7pXs6derz1dEVGNkSff74",
  "key3": "4w3ZUM1JNv93Jo89LTsec9r4M5wDnGz8pxehTzvUaQYXpHo1tnfxMJbJXfZbkuNhS7A8urkEp59QF5yUBsX927t5",
  "key4": "ndQruK4qYow4WEvXm8KM6Tjs55Y8DvXsVqgLNQrJWHzBN7tzqMuQy3zRrQJgpAs688A2k6Hr4LkJGaQsg7RQgpz",
  "key5": "2wrBeuAihqn5dAuTiV6qgCzCxU72CFR6jTG1z9iRKbBCTpNmZwdj4rvGLVftHUcauTdJMWJ9caRB2XDtX3ZNEQhj",
  "key6": "4YreS1NFLnMfKETZgDksx8HB7rUh3Yipb7msf1QoiRwWzyn8LEe2razXy7ixNNxAZSdDYNkWvPERFAE7gctSq2Fp",
  "key7": "3GugJwJn7g5kWcUG6Dfpg9vNxs6YYcSXiJ83ag44u6ahAjjf3gBRQzip8yaS6Me7vYG2Qmaygzh9iqWL6MxK75qd",
  "key8": "3tg5CiYXS12mYC2Q4dxc36u9fZgHY4nYEhR6whRQafAkmTpzL7mwNP5KRt5BMwM6Dcz8oDAcfPAg2wdxSeAHY2mo",
  "key9": "5wKGeG529XNepw2HJ5BgDwrwjeFGkZ3Xo66MRF9NPXrYa1Ys7yGc51rmMgiue1ddP6oPK1FXeNVYQ5dmHgFhkUd3",
  "key10": "4rMT8vM9qcencK1bpEHe2g84pd7mxwJ2DjPUEJpUxn2ULVFWGcbmqzASYbXxEeY2FqMb5Wo1gGLC6HX3WDHfUsti",
  "key11": "mMN67RvhSRXsx8jcPPFFDtu7Vd98FcmVem87VRVsriupQgQtj65qw7D6d49tdiWNipX5zXAU17vvSookJNRM79X",
  "key12": "2XYuMT3niNthNom3LoUyfG6udfZU9ZCvskjSoxyxs6TJbAqHECGFCi6VroBJWE5Ziz53hyrBCsHn5u7zW2FjDdvQ",
  "key13": "5B7thpNoMasZCpNwzt93dCaATB1x4eZbX1ESZnRLZu7Xeht6cL7US894md8VaKJj7RSK6Cf7PHy6FYDUwNmVUuBE",
  "key14": "45N3rKVUCzRCLtfP5y1ieq2ybvdjQofqRTGv1YNBsvWxL42KjZd7bDax8x8ZGeEoq7oVfJYNsgnJST9ivkYuV6Ya",
  "key15": "2aHVt1BPGRGxb8HQgZLA1GXFiU5aprDdxHEDxuEDWANC17TXBzg6fr9jzYfbn8nkruEuwpFBZhvzSr5mA4Vea5oi",
  "key16": "5uM5f2XVfrUewbc9sttoJRaGFRHH6WeVUzz27eXGhBhUxBNgQyaCzxhHAKtSRfxXyotqZn8VfQbk86Tekh3TSyNQ",
  "key17": "4xhjAVVSqHfjdPGJeZAGJyKS7jG1sqHY2SvVeCWivECt5Y6CYH7H6gMDHQULLbLzSXvySEvNLLjGCKQUDRkF7XnR",
  "key18": "39J1VKkZXXmiQoD596x2YdHgodcMR79itmA7UphW6xycFdfXFVfUFy2PPdYWUtxJvz6rEGrT9DAFMK99WzeVnwtp",
  "key19": "21gEFrAuqzzJL4goqyAkFLVx1pZTDRfcZFBdsWBXexF6gREvh6bzWuedPjAzocMydQTrZyk2UhezgsePZApHfVq1",
  "key20": "2DLBEYBMhdZac2DguP1VYwgttrSdD5V7utSduWknsc8FKpq6MzpnFfzLJkvY42wvvdmCL6DwrmgtThpiwHz5VcTw",
  "key21": "3fCALdAAESgAVJWR5MH4AjD2e4MFewUnsWsjtdK11P1T4wyGRBrYceDgud49NkqrSAMvhtLKzaYMjqsCJkJs6Laf",
  "key22": "3Ux6t6kmFfASbwbypJCNaa2dBo7KMrAP9DBHGrxXKbd8dC8DazysqC2AwKGqfio6fuGPdUSLZ2MAJiiPGQTcmDTw",
  "key23": "2eNScokqrzhBYb3kjNWExyaEpzrEJ6FWBFwVpjsGB8eSYqGXumE4eiohWQz5aZWNKtxocuLWecZZ1XW6KTABoWuu",
  "key24": "2vfrKrQMLa3395H4Zad8XBdDKVCTWSswW6PCyPRpBA5qKYdJ8ATaNcpmaEHrTGcVEZyt3RrDtXSJvWiSw3uVdvhe",
  "key25": "4dcgPVWxEcSSXbBRnvZy6h6R8bv397fiJiDYD375cVVv6nRYButRMAG7FGvAddykovHjymqQdya74Mu4w6Ci3Rnq",
  "key26": "5ctZMWWENFYKS91m4uR8nJnjcJRkAe11U7syBhkgYCHBc3invGNn3yUKiEXrJq9nFHgD6g47cCrrtHc6CQe6reAR",
  "key27": "2AZXnuhncgRmWskta3Ksne6i7DGoVtY1bt36v98TShwn4JTuvsJ7gcMAB8waviHaWnnqEYwfFieCouQS17LQfpgh",
  "key28": "3UanwHvkmftQjdWrGQkHoZ3DwoxLuu6cBaC6oSyLsGxsNR3FYwfj9Fjoach2ibiXdTr8NfvtnDCGjZH8dHAw3TrM",
  "key29": "57ecgrF2Z1p139dKx1tKwCKqjc7Ec2ueAi2Bn1EkkBASZVvpFe5LaQLrFN26K9bS6izKoJH1hrBuVH52bxQMngai",
  "key30": "37jLaJ4Cf8qkKVMpmarTmGJiAi6Bp4qEfCkyp9BU5s4SpcUaMSUxnuavoixffLJ2nHwttwCnab8FD5mA9GzLmobB",
  "key31": "5LdKqaoabLu5YDhnf7EV3DPZKp7UDgwhH8azYVHfi5MDKGQZE35vgJhfHKskFTZAqmc4R1iJtxJANE6Sa6XsvF2i",
  "key32": "3yWvtFh5SczP5aQ85QuD11rn6WZDx6DdVby8g9ZdJC1VxBtL7KsVF3Eah85MNcTbZkCUaHvEHk6Zfxer59tYwTUK",
  "key33": "3inhV6MbLrMKm4ajQE378aDfmvgJvAUnUBrRcYpQerXboeFMJLGJLSePRxhCgphXu1Pyujg3ShAvEFh6S9Ftnutx",
  "key34": "5ic6gJq4RC4vsFEHuEXHA3uyYKMvsW2y4whZ5xUonkgDKMQQX95jdrAJnHifEeCmjJbYjXyQKhgek39BJK498Ett",
  "key35": "2a1w9roYd2SFcbuf86fm91kJz5aqr3ww8YFHq18URkvEbTxHNSkax6DLzYwuTZJSaZUDP4pQ86ZZTTbwK97Vvp6e",
  "key36": "WDHDdWKrZtxJWBDWa4VjskfBwymnCkU7RfcWXkxm9hCWB1ka78LJtjGXaNBChxJvB5hYNRRcxFNMbC8d1X6r8rn",
  "key37": "2pcVzQCMc8wz83gNkYb3AhdYd1kEVXVHEpQsF4xNBrTPtmLAb4jTDo8gWEwyKDXQR5P3Vqn5w9QppQuw4CydRDV7",
  "key38": "NdVWG1DnRatxPMv3MyQbpPi41yuCXX46KoghfHJ31SyvZ4aWAcY7GtUEU8bg1e1cb2NuB9Y7mt2s1Tcd8ougAyE",
  "key39": "59kTXbMYbwqc1bCBYvkZ6qCB7tDPgyzZGfWpoB8mRBBbfNt5XdckcNJjakWGAD93cP4xG9vnNtfJL1kLT3b6Fndd",
  "key40": "2invxBfYxLhFThT7VS4idKLXSrJL1YM2spkZUCHDrmQhi2fgpN1yUZeVFrXRDdggj9CzUJUANWMVNVABbaLuAKvv",
  "key41": "C3cEZGGsXDtDJJEpJUhrnk2at4yYCHQNVNgaqQ47zMm3U3r2qnQaaqUDtXA27mJweA5QPV37GGyrQeE5aFY1CnH",
  "key42": "252Wbfp6XWWetfQ4FTzzFBTtXUWPKmj7wWVtrdVXyGSxu65SnKrGhvUsrHSU5i7Boptu4ptu57DrQu2SSjBf5CPi",
  "key43": "4WNzCQV5um4UdpzhnHqWLhEJBhZ84WBqKG7Nw3vDJKEk1QfvyrzRK2kTFq1RJRo9qeQWzx26TVfUByAo5BLEHeyL",
  "key44": "3TgeTskiNWibvchn6CeTvc6b2QkAQTiDmMiQLNx7cTzWZTmEZ7tksuiNKjavwSP39DJ1AkW13ZyZ5jiyucXRtY1F",
  "key45": "2Rq7GVM1GgRqqssq4HD4vRoqS6UP4u9sWuyjFsaoVfAvuGvhLN2qgHXSy8bZSPPswJqosGr5kDtrJPBk5ZaenwbW",
  "key46": "22nBrnmWuJEVZoeZkwy76FMp6tkfSK1SAA4TeiL8AUaNahfYbjnZ7iM4FYvCzgj2argHaGnnQZQ4dZrvdAMkS2tH"
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
