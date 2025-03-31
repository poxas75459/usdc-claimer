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
    "2iZkorx6SgnwPbhCY8WYEyxMmVdvg7ZYGK5qSrs4h9eswWS2QzkKtN2a7zcmqJ6ooYBRaM55FKbVxaTjnENGA4TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7pduyRq9jnvUoSPxSBxNPEQGdv4BUhCNfuJapbFLGyFzWp9PmgidG4JGrG6rdbm2bcT3qiNHDkrLrHwWWNJpsp",
  "key1": "5YtXCUryQg3buxyuJKDFeXVPXjnrPMLsYBHte8DzxoW88NDYWcjUxTTD7SqSxWVCJGF4fVpqP2USum5DQL6pipsQ",
  "key2": "BBKmXafDxWX4fqAMs2hsV7yYxgU5H9QoiBuJWB7Eu4JyB9DnXGSABzpmMo6k5N357vSkYS6yXNtBiHovETTK5vz",
  "key3": "61ywERxHoiFsGRNXZdfjThatzWekxKwHMKCWzzxQ84ChrG1c3J5BX9aFhMnyogKX1WVdB9jbkYYVmJWEtpaWqq5G",
  "key4": "5NwF7BLQa75BtmQ6qt3F4z6Ndzabi6KNNMhuETNrdZiniTMn1s6uvVKsRhejwHft3m1MwytdnBN9QKoufrEE13AV",
  "key5": "3ofY3waPjMfEPSnEzrg3f3LTLWkMoo1ifM3ty4aTWsxq9sfTmtrG5pVtYHqnfkjqF2xpWLYxBESrdZjhHqbymaC7",
  "key6": "kAd4dSzkrRvFgpfm9LQkD1wFqZjM1xNr5TBC44bpFMHmSrhc9LPqyJEmHFyMmt8ezLRcQHTvprScpYE95vHSu2e",
  "key7": "2ASoJ12yQfELCghpA7g1hDGz7QCyMNWK8ZtkGsTuGhxDhsz41gXziHPhv2fT81eXWvSEkZmBw8abzctS1JxY7HYK",
  "key8": "3pbhVJcx6Sa4auzPBbrKVLaPkaUXi2hfJEjTGMKRevPBUkXfGWBYNN15kB9Jp4sNDvpespBjiqqmFfrmguWcAMjR",
  "key9": "43PxTvoGzSHuzGCsm5jud3hX8VkbspnQHLXMHXtjUWQzaK38GZiPqUM2B1FMdk3DpmDW2ZWzC84LSbaM3PQNkjVu",
  "key10": "2gjoDCzEMtL2oincF28yhnS5kFQhYtk6wRq2tTCVX1M7goFQ19EQMFCPvxAXo9rWiRSnzDVqrBHUKgmjPXu1iGN7",
  "key11": "3Qw7M9Z8NwKytdRhjuxBgjVho5MMop3ZPRfgoY2xjEiCpwZgbeUZsDCQMj3FA66WtSBLpLrHXBo3qocwMXoAXmU9",
  "key12": "5LNzuqDwFydLhTgq3qKRqPG99nCUf9JmVQEmMgUohfeYSXdBWqWJz47aP8qEorTpj8ABcg9nrCfHLiMxXCWMB6mT",
  "key13": "5PiudPxCS2BWmgzDrvzNNuGib1SXmk6ZYjVmdRPaSGWk6dWZEncZWzWedGRci16RB9msiqiXSBxBvJmwpZE7xHLt",
  "key14": "uifyQqdT1CJ6aD9Ah37wK45vzRTZHLbUgWpX4o13uAYVLTETH8i1Uxdya5UvXaF1nePhPUACwce8GhqfMdkps8e",
  "key15": "5xhP2WuUh99vdCPVq7E49PgPMdGZxbC6WvF1Bkyu2voH3jWhE6od4N1yENcUbpWmGzffXCXip5UwBfLm2HA2xtfX",
  "key16": "5QPVath9TepBYMLawbS6TXCF3KwZqs5fni8WwbVXY8opsi29uzi544MjgWMXRUp5Bs1YfaJF3sUGcLhMDu3HANEE",
  "key17": "2uZJdtaBysGXXMHfrvtdQtXZsy8sKvbnxvSiHXr8qWEHwJ2NphkVaKqN2KGZV8oUrVxnqr7NSG8m8J3zEH3Fuf8L",
  "key18": "2fVtYGdn1XPuB1Eh4QeBcTB1U6zhnzsa72FnXF8FogJngRu2FTVEVuZByrWCZPvx9Kvm1LEA4rVArgZ2Ep8hftAe",
  "key19": "4vBuJYfMwR7StQCVLoKxE3wGkQw7RVuoXL55XG4k4rtfXFSrikq3sRL7AowDBNRb8TzgXEHo5SAjRqWx2FWvm8bw",
  "key20": "2CefgtwYt5QPRrrgRr6NjFgvrLo8t9bAtV3PK3oRpQiMWCEqs4ieuNaBP23TNZ53phyqWwb3itiH4EGpV1z5GPad",
  "key21": "2TWRPC7W2gZJ5uJysxJK3on3cw45GC1gJeH97FhgPDrG4zayU34eww1k4jNzzvii86Jpn5DxtfrJxPqN5N17n5n1",
  "key22": "62jtbTwRGjXdo82iMvhoUhzAaxRdgbjprKM8aREuuPo4KKMKY8cQyen3W38irpFjtHDXirXyK2TybYhL3i73VPyA",
  "key23": "4zeZhvC8UTiadnnN8hFJRHGvwfd99qC36Rj6Gk4cVzy67JdGvHH6SiVzUYUxtD6scmcwiNVrSHwGnjeADz2PGNgs",
  "key24": "4dnWeMGN9mQPUP2wj1oytyjs9GNqwat4A7TmiWQgnpnth6h8FFbq2tB2t8NJ7mzVf2SznPbMYZ6dwiRuGWsuQeBr",
  "key25": "24ZVdhoQCGns16sq77A8L9ThEyqCVEWbz2HSi25PfTqJ7XYxVa2ddJxhaMfaTDmJHnceD4mFUYhfdMQkJC9KHoD7",
  "key26": "619P8igcnfTwXue7ogiDim1oAC9bRnEpS8s6tePtwNzca64XCh1RqZjhorFW1jrYVJh6ro1ujR47KyqS3dVC3Qrz",
  "key27": "2mnLsTRZt7xWMYkUaDdp4pPs44KxUM8umChFaHx2ZC28Q2mHKGS8ff8a4vCrD5KGvmbryyd6gEZNjo3JdpsttaFV",
  "key28": "2HMyyvs5SxbmPmLDtedck3ScZrAkpn11bcpybVrcJBGMAHHSB3FAbJDpM5VKtYK1ZHSYjY1C8nWF6kRhMGiivgpf",
  "key29": "4eLzWdDifAdG51C7Q3RjtUjmVU1aqAWiK5EYgPh1C8qmzhqnchCFFTrtQDZr3PLRsZ5rSG4Mo96ranX4mn4YXrvZ"
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
