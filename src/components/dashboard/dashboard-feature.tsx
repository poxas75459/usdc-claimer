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
    "5knp5n3Bo84kJwQ7Ra6QbZWnH6Xtu6X3Sf5DcK85EFyjFMQ6ryjrtd77n2GAxRztoKVJTvGgMAGBDTRyhL2WsD4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyBfdJbyxdKTRhugZgjhwSNyj8rGovxoWcbjkyVKb1XG2rt1N16xtJjkhdNCBwtDJJTvvcMB3mPghoV1uKVymF9",
  "key1": "2xEzoiYkrKaWQCVAe4BZyL3noKbHVf6HaRiswuwvi3izTJMSZ5GFZkZFi5h4auPkLtpqu2eAJVjPr8iXc3wQteov",
  "key2": "5AacRZ4K2p4sEKx88JvdLgZbj2RGFoQupTniBxudvue33ujQXw4w9BsysBUG62htURP3SmVp2hGRVrBNh4RKGxAh",
  "key3": "6SVPaqkDGszERrkjvLNmvBhjNDM1UvBz41pRwUpRhvX1xkgJGLuYqdaGn8ZPyUuuSeRfrEmcktgJZx4q5rY59oB",
  "key4": "BQ4AzYSRki9gaH4BEvLLGm8jSAW2VT2uTtqrqGGxXETijNKq5NRqKJynwmffXTKAZKTVDkoMbv2yC3r1U5JGeeL",
  "key5": "4vr5jw3ze66eFY2mEfY4cGB7hnEUHvatGQ5qntf8EdCWQ1zmfpYjLp8RLWJyKrTWxEzEqLLzNErvof2geSpS9vF",
  "key6": "4QHF1GHEpVkEicsnUq489HQp3FRacBQLaF71i9EA3n4QXbKwwQyKWM5qubihRiCjAzjG1AfQmSuzp6vFAurKUebQ",
  "key7": "4Bfv9ktJ5wBSacfUsgujMdqCmFLLKbkEDh1BVmAa3dcbvUovSNDGU6rL8ixvQqLDpxBB4tNQ5Dn4KZhpmXWc2PnE",
  "key8": "5Ye5AWHANKmJ6hPTNMmxX1dsMwWRm3WNLRg8LYxPhk5A95ExEw37NKftsGbUaV1cQv9YyTUNzKDY1vYaTMPkBxt5",
  "key9": "2W2vKGbfqhdYEzDLMNZuQdW1q3QSYLus6HLSXcEbWBNEWg4gYs4jNocQ2PzfqXRtFhkeZU2dreq1FCAKig85JvXu",
  "key10": "3BtKXrHtk9PtXcvVTuQT8pMDMNfnw9akoMXUfHiN6xpYvQ3bSs5uBywNdN6uNS2bTgP8T3EsqVTouRTVeEsrh3jc",
  "key11": "291WnSpUdTHhrvC2yo9q6FShShiqjeVUpvAr5Sn7XDaKqCTorUPf3roov92BjQPXb33BQMKqeauRG8bXDMbTJt9h",
  "key12": "3T7grdvCc4cTits8VWc2E9k2BrFk3bAE4iJXPx79aqiwVJ77D57KnbsnipiFitWhYgyriZ4aTR1GrTFPfjGGzfpc",
  "key13": "ZLcCsDNQ6CLEGC2WbLE3yjE64MMZCXogBHPG813HDv8whhJ5WReNXQwFRh4iZc5zWZZ2LEgBCddJZeGUK6aVwuU",
  "key14": "5it3g9P6aEvw8Rjr79v11mYguj4bMpgxNA9B2PZFL3QckykfujFV3pLwr6bg3sGcLJtUxbMTJmFtdwJbSbycH3sR",
  "key15": "2xe8QYBK9N92nqTUc22J8fPjRt5p8oVTXNogyCwpeeX7SwRBe9hpfHb4p59drnPMWFdtFvsEoMQ9Dx6onTtjAHm8",
  "key16": "3qDYJQWbdKZuqmuhbcBRgdJ7zFDoTaWjdsBh5kSPhB8RvBxSL9TFwr4jQ55wppxHDBkQ8qxAYJEnWo4wbx8cAkTa",
  "key17": "3zoeRPfNJngbsACZ4uezHPjczPdAmtPsZC7Az5D1NCDhbWVxaXkT7RkB9nmqHXM5p6s4dRyqMcgZz3B5vHCyKs7L",
  "key18": "4WM3YXLw1f16VdnrdtbJLvVJ1AnyF5v49vwPvtsLugoru5ZEHkKkKF6ZF7AQSMc2jWnLK6DxKNLVLeHDhpuDfRSJ",
  "key19": "4mDnpCKkEMMMviBKBp6uXQDB9SxDmpZWrQq2ns96a77Kuc2REChNczVtjAE2DNZkFQAdsYbHNEitBMRQVbB3q3g8",
  "key20": "2B6x9WQP7aoiNeTN27GGYk1P4Niu5kUb7EgK5aBJrBN6ts3MvSRAF1eb9S7dZMzuY78JFyRLbmStxvpEw8gx3N4s",
  "key21": "3UdhbX18PgeV7AuBeWgRFTTkEUTrJ5GFdDuGnaRNn7phqFoKtxyxkb6f2AJD9RiYV1cJD2hvA77nJtZGLTnfLewd",
  "key22": "dsecHwcQ4Ey3u2NYUQf3qMz52sUmWA2STG4vZDtVCXQd4Y7gtVo8fKAe4PjzBofgeUc69We48zeJToWLcT8xNCX",
  "key23": "4AXcD7BFBhf8E2iTLyJ62zzQ2J4uSGJpaYACWqjBgQfDsd8KWAVKrpDyUxhtVS7my6efrrxdEsxZn8rBbsT8Vejt",
  "key24": "5PuNdeLkaoD4t97TvbWMnr8gYnpkqsnAXJhpVBwM22Ze7Ud8AppEoTkS9BSrF3Rh5MY236HE9PTPN6NXA9JPRTN9",
  "key25": "2EGd67t2WR4d7VTEyG2FUcmzUcSH3cPYK9ACWWYieV9dEH5eXqnY7dRFZCrSdK2YSnaSPxvtR6vtd1sC6Lhtk1Hc",
  "key26": "2NExejyFVh6U27y1wn4Xt9iseCYZWBtai7mJtxLznCwMpKm42AufMgsCkfQQS2UaZYmbwZcJB9bveP3oDegmcoHV",
  "key27": "nkGZ3zaySNgSsKtRUa7qvWHcvYQ4RyRyucmstYJtvgLnkZNjHwBPzYJULuzX1aevYGrHBgXpJzfvA3VuWmXRCh5",
  "key28": "4q9HQffnGaBPc7vM6P6o1QGPF5HdbXiyfuUrMQhFeb6E9XtzMUCveMqP5hV3EXZFnsraYzimhmMNYei4vT9Gf4ku",
  "key29": "5ahw4AFu6qCWXd7o6g5JxVRp9Hjf3sAzR4NM31z5KQG1hPpRj9fi7Bj3zQd7d2XroBmgPG5NrCS7QvMxPgsXBa7m",
  "key30": "5Q7ug8acb5Td9cNbQQFdKnqMVoEBga7N7SyvNRApfuk9PwwmKNWUaxgoZGbT89LxfoBmsMqj97wfsSBASyTUnqnE",
  "key31": "4imp7iX4W5JuEZ7JVAayzrNzc4oRCPiQrAXBkD9qYEy5UxFzgHpGeLBSse4ooQij2LjkCmZmkqipQ16BrmuntqLq",
  "key32": "zZFvEsZLNhm5ddtNRm2yHUGpcPettFBuyZ9HqJfJJ3kyjLr8tgYatgxkjfogsAsH93baYns26Tv93NnVUZkM8Yz",
  "key33": "GHNXNwZARv6bUBBBFfCRsdK662cgVFmFEz5DWFHrPwn9v3Ye7qUYkM8GJJUB9EhqV9BAz3Zm1hbByDQseNFdp3U",
  "key34": "8HDAUL4ov8GTYpg14bRNph3fnXdpzLKA6q2GgyAcTc64NhudTP3mMw3yB1JAn655syNy5Ey93CLsnPH7QMHCm87",
  "key35": "3qzqsVdondWwM6pYD5jJ7qXWPLFjtmATBPkprmQkN9FNj9gCpa5CyZXCB41NSxZtLzH9p5kvYujo2RoTCyaohg6s",
  "key36": "m6wapjQnB2qSbA85UAeWjCWHGtXeyubTo4YD4SDonJLEbUPc45xgGhjHBHJLnm6sBE9XbmmHDw8fiQFsSubEZT5",
  "key37": "5ZQFpGF9rBG4cgMiv8xq6zEWUGpAQPpFSaiUedxQujegKiuLMzpHbvpSmfzpovVjnzRTND7Lf59WEACbXvgmrhqz",
  "key38": "3rHnBPpBjsAKHioEjgP7UXTLhsMkz6kNC8aSkeDgSiaP2ta7UvEPhB9ZbaZkEogTdJKNiCC7TNLuyRAmMTNgTj8z",
  "key39": "5EPChfpZaYETMamr1VkTRkB4opygxkvZLATpytS2YoHo66REVati5nbagEFHjYkKMoQJ3Pb43DAAAUWsSfMdAviy",
  "key40": "3dZitdEm7NVxcfrYPe16CM9DqGETDCH96pT25LWZrs7PpBBCL4hvpMtj1iyUjxPGa5iGZRUTbQeHCfempNg2zggP",
  "key41": "BjYwJ8AzmuMNPFXzzqUd58jx53djtkG4vbnSMbjx8DfJjRsBtxGzKegojsnxESyaVP5sYJuCVxdEXs8D7x5ikQ6",
  "key42": "4BAarHLEgxCNTr3BN3u9rqqQF3wt1svVvSphDFQeyCDexfAhNJ7hpMj6RKVN5WyLpDYWm18LHJuDDKrHEsneYDZF",
  "key43": "2WUV3jj9JJYvUxA5iqCutgsEnyMiS5V2WEJX1FQBSMG5DKCYNZ3Uw3SVdgqeakA9YwVrWwxoFMXrHJyCK5Kmwi4w",
  "key44": "2GK7d219SpJqKnD9rz5ocvKtigvW1nASeXL775ruMXGQmpcmU1YDtxxdyfsU1DKpyGFPUSp8S77bKLkoVi2oUyig",
  "key45": "5TH2vvQ8Zf3KLX1i63A5CLCsZgnskBL3DvmgHf8kHWGY3dRhTgY7vYDABv7GqHiWA7Chdziehdc3Thc5zioY8WE5",
  "key46": "2rHrwsWTfVTsGTAfyaP1bMq8Ky9jJhJYqQhsg5hxEQxxXVHp3EJQBBQPKFoqgctgby66UYVYBZwzK2bM2CTTxe3L"
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
