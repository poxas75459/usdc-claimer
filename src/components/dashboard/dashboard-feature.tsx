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
    "dVuYf2WmvfWrd3XLxxH2UoRdHeFH5fb4QGt3RUfbdFXBkYMLNhcaAoowsfiPFjh1YTNAMRpRRdoZLUyyhVPhuVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReGD5x3himXFGyuHeAufCHE7fEwMVk6RtXBNxHqTasxs5BYuEbvbp59X7jJzbefcmrFiYkmxGr8AsNxv63iz2oK",
  "key1": "58g6QztaReJWti9CM9aaKAX6rLEH48Y8WHaXFrbhjbJ1p9zAehxB2frMjT4uSj9yN1iRUA2KAkazfR6S7qFAzqGh",
  "key2": "7KrhqQk7jQ45t9fLqLP57wxDARimfE3ow1KTXZneEreKf5cXtSAmCjn4ojanPcJpKgKcq1wwvxYN7RWL1Migawf",
  "key3": "2CN5c8GqCG3Y3jjYfmzFoVtkvD88aotG2PbzXzbJZH92HMpNvZ2DmBknCymUcxqhYhhpZRgjFu2xirG3arcqzte4",
  "key4": "2Do4L9nVXPwVEo58JbvfVtKbVfsAAHDpAzGPZQBemMu8Yrd42gUYxgww2KmU6MDJQVmXn93AFthizgWkaEKC1aMP",
  "key5": "5J6uCEeXJXY9LGNdCH9ttVAd34bvsemvYNGm9qnAaZxmNg212MG3mB8wJ4igNcK5qC4Cbx5BPjPcsMzRtZF2cczZ",
  "key6": "5hbdUe545cHQkCzbYrwfRF92j13UHnhfu7sFf6qJWxsQ5WjRZQbd1ex3NRpmy94SwrqRhELSs4Ho2k34uvTQmB8L",
  "key7": "3AX3AU3QnqiG2zyYgwNhJHS2hw12eZZuWLu681rHaGKVkcRxAsa2oJwyRiyFQuNmTiJSdpJTiMCpWvVwofRSQGpT",
  "key8": "2Rte7HBVrM5nsYhm8a6KWcD1VDqtKYY6wa1oKJaj6HxRYCrHQG6AJfUvDTHLW37ae8ZtQLUB3q6suPvcxURLRoHP",
  "key9": "3YjiDhCb7NWeADGyGhhknZ8dmxM6vF92BapmrnL8wSzmRDYssPwG5DYzxhQEK1ePx97ZQTfHxrTKGJDcrKxVzKV9",
  "key10": "2SU15oiYPUhv9U2qvqhyEAquxTZ96kv7vGrGB72gxtSAuBdt8vGjmL6Tg4eYHispAs5sG2gYktXDcGsQanJkeG5P",
  "key11": "5L7upxkheDWVLt2WaaDwRxvFWYbDdbx8GjxW5DCqtUv1dbtb4f48jREfhBRcgAJwkvpskYTdeNsHpa7xHDS9sDo8",
  "key12": "2Jpf9T8xoZBiYzbeMeBDMJA6HCqXgzTnZGZ8FWqig6ZnkspHa3NWBeh12RbSMQUe6tuBRdau92zmw7hbw9tPxbSs",
  "key13": "2N3mAEXWwLH9ZcVhtEx6jrDhTENyHkpadUYCpZqNTDhHAWwVUFkatXtx3Es6rNi3wQ3VL15AR6pAyN5hPiZopkEC",
  "key14": "ZyyZavU5FrV4UdE9i8oPepH9G1hnYjvkeVZ7jhAaaW1oaypMxV59iBkXtcTV1QfTDfN4cPgFNuTrhK9YtZmqs1i",
  "key15": "ma4CH8dgZQSuWmH6VT4KDu7hHzJzvK7QGZEmZJV7DL3Mb1s1f5PdpHWxVazAPtrxqvDg76zZoMPp5o7mWjAkuzn",
  "key16": "d5MPYPTgQGgPER9kePLBdq52V7RbTg14aPDsBUWLCXAGDEyCnjxkR9HHxpZSTPnF2woZ9UCRbVUJvjQ6b87m3Pu",
  "key17": "UWgw9TaSBgV3Apj8esySrKDqmv82mWCFJhN3aFX5o37eLxHWYEPUeyRTtwqkpejMqC7DyRxf9Pc9dGjqS7MAQp4",
  "key18": "3ovJ3YtHe9wD5XZD8VdyYZqTLRXQBcDRY8se3NAPdxT9qQj6CcHx3CxQzTef2vkfESknh3NT4hYwDTdtyoKRcpHD",
  "key19": "5ribTFFAfAngi2EL8GFDycETWaomjRXDVq3eADjn5FimgCK7vTJHrGGTGMA1UJsTj1q1s5ihwPYq8xbxSsWDNUAo",
  "key20": "2rpefCt1ks7EVhUX8CbNEnXLkKo7R7C3QPi3hzETZg3E5bji1dw1iSnuqJdv85DtWHDKC8teQGTswsm2rN9XDrzb",
  "key21": "uZnnUB76VkjEzrLdp4rdWYc3BpFJ5XKsicCY9GXEaYrSmE1efaQHkoNGfAQBnNDoQfWRqxStmik98BJ6ERv4Dmj",
  "key22": "3RkUZy242ANo4QPaYW4pTP2ytYW13SiQFnQfJaT3vmXW8vmNYoY7UkSVdGPrLdvJ7W8fdadmaJzodFxZPhsAZVV2",
  "key23": "n9NwaBWFxooYvpfF2Xh7NQZnwiVoWFGmndJFioqPXanvckBRt9Cu9v1UZSHvYXgwiDtUv6ygRTE4LHFyopWAb48",
  "key24": "QT9fbqHwQBEGctoVpRF3t4ReTE1jfj83tuMAFgt5idoPrPdQCsq7KzEQVAebNUt5sTcSNDGfLCv9cwEhPPwpjBc",
  "key25": "2DiNStjutXDq1Bgf4XP1wn1KkKzaJA84jmEXzGcLLFnr3XjejkFsRCESwcFdntMDioeYqN71RWafAtuuiapE2QoM",
  "key26": "2hrsidz3FnMrLvqjvuK3itLxtGDsaUERnxCQpsr5D5hbRSAAn3vPn7KpYj89RwQKgDQ1AU757p9pHF1jf5dzmdPA",
  "key27": "55NruimVuJudf3m9ucBe2VvMCy3JUbiXhXnctL6Wbp5fYSQHr5F9ewf9VRsmkfeAFFs5DLDuxermRsMhK6FMisc2",
  "key28": "3EBBweJKqBtqYiVveoq9qMF4igBCFzRQAc4hUiDixXQwLm6yA4VK6oxbCF2d6FupR8SmukTNHRnCxUdNNt99bdBv",
  "key29": "61m5vxyDntuPASejCc4mSQ5TQj38bPxEDE9vf5nNQEMtnumbaMGrPa7FDAJZdQEorQQFikdaXMEsFseQ6QbDMvuW",
  "key30": "52SsdyUbLCCRWQhPxLGtiGRmNZ3kfwXqd5irQJJmh1SQWmkCm9NCyK9zGJpv96bhDxbi19VxKiYectYqwcxcuc2C",
  "key31": "39xEP6c8buEC3e7Tpd34QCzMwtLAoqtVmS5pzUTpKBxGZueDFJz3Ypro42yjPA234uNsibSdMQcP91pUiLe4MDDR",
  "key32": "5vL3jMoga8oRkLujyrXgb6nxiRqEteJ4drh7V2o9j6bxr4Fcfj2YQV4xsmeKHcRcCidWUdtLkMGxjFQ6otDP6H6F",
  "key33": "4yUsvAGM2ZbjqMru1wSHri7Cr19McnM2HFPhTCJWnbCyDPUdZqLckmoftvNpwKctuejCdYqqAsavAgpDpQcMJjPz",
  "key34": "48Ys8QbT1s9i5qMFgg3WSwis2HGHufNNVe7XE9zGgNePgeQ4VJ7zL9NeKCo6gbAStnxXstmLUGmdkg8UKG7cuXcx",
  "key35": "2CJGqUi4sF3psSq64QtxUUsTURpGkoD89d6a8GDtaCbfiAc2ya1N7tqPaoQqdF2jdYUuTkiYfKAtJEhdDDkhGQiF",
  "key36": "4MhsVGmAdEhDbMEgWUHm1znHndZXsg4sUp5vh15MKExf489RDgssW6vLBT7esCrMtkrripMW1fRfj3YoK7fa6cDg",
  "key37": "3ujpG5CJRsVUVRx9E8VmSXqw77utqQFAPtvMvkWzQNa88qkCbNRtnLsKfrCCL5hyDXcyYmyEhojpCyEyZCiajWHr",
  "key38": "2q6gKJVFwtiPQ7xqeKdsoCNrGxVS7m64BD6PXGPJVAi3PbpmXUMTv8dXWWHQJ2qFRbnwaD6yzpaLdPEFySoynGEd",
  "key39": "2FAFDibLZrxfij7RRmWBiY8uVrzXJoU1YmcfYWzAW1uLXawPX1LGznzzW5YJUNz2UC4FpeTGhAakaUT2HbHjqVei",
  "key40": "279F7Y5iqmqkttJ37JBnh2PPqXo3L1qzzTufruadwgeJKG4CcfihXk3v5ZTeXwPdabJkmY4aP5gUtTFqkuK1brzv",
  "key41": "e5zp7x6sWvDSDXdn3pYBcjzBzZ4k71Xy1FNBQ7NidtWDA1CXGSgJkj73tNpm2qc1mDh9nt63a4RtsLBWaNmKdCD"
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
