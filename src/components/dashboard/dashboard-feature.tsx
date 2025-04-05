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
    "16MrjU4r5X6yd7VAi7SyNuWuFmV2PEsUEKHm7a37Tkz4n81Nn9ASGFp1pXvSLB1XR47GZmt7tonFSWBsCnUyYyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rvkbdPMNLGguKR5YxdU62agNtUbXueHiQeJVe8rHkn63LVd9ZCTp3aLnnEpGTT5m5R83Usm5LoFmCfV3WbnNfH",
  "key1": "3DpFt7qSMpjBM64P14LEhfn8M1et5y2Vk1sKt9GiZiK8muK5wtUpdTHEZdS2qrKF47frigA8igGjxrzMjABcKMoX",
  "key2": "4orGgXCy1DNwTDLsmYyqEkeFfstee72r6t3FLJTEmmLtiyfvowZQHDqYUeyDCeTkMvyp38ecHcuq6psxkjSdXfku",
  "key3": "2kJHGbDTmAJDrjQYthHNodzd5vSzLAkoik69kzEMbJbwippEKFXjp6S3nRKzQ6VpJaZamZ5EFSiWh1ZQxaWRnXJ5",
  "key4": "5A858jztBNVPAczmtJJhYri223sbScs8vnurye8e5kDDnLGu3KUaXn66KciMv4qRbfHEfME1oV3kfg3Xjb3rJVuD",
  "key5": "4FUi1YBGueYmetRF5BnJAqpAg5WLqEKHgdw5G8uakGjXuYFEeDeAN8BN9cG7TSrxyy4j7Erp9bpExV4xBnMyZkCQ",
  "key6": "2hSqCrCUHLE52hUGgAyyPVqJhd1Nopuq8r8L7sAKqfT4FvNKzFqeErv3z26WSE54b97P6PpY5uZKAed3u2Tjbvmq",
  "key7": "3Z4tUFNzPDb2cA1DTBNZudbPd1RYc5iwKnJEtrzTNDrtKourkGFL5ht3At4TJr9mxTybEqAqfAqds6zVRtZY9s5h",
  "key8": "2W4Agg2WRidXhMKrXdT82Wze5YV1qfqiL9SuNhoCBhh3FzzCBi7RFfgrbxmx1ra5SdSyyWtJcFApFLYazfuNuib3",
  "key9": "4s1Pp7PNR4YNDXRmwAAsZTFwRYMxdUipDGeA5fJefkuuy6aVQ5qxdjRFhqVT925NN8utU6j4X7LEhdcEaPkLwBdu",
  "key10": "2129NW46uZBpJnikhSP25m8BKtt7oky7WbozskULdFhWCvEayJEvHPgpbSeAehvjKKGDb6JFj7qcU5ruWD7Am1Tm",
  "key11": "4M7mFEn9EscC2KxyDcdpgv5w9zkHEM88zXAaKWF1o2zfiGXrGCHZcXQWQC6u8cKjT9PfbUko1pi19auS8vcDuzu1",
  "key12": "3HKFKX79Rps1RvBYfoJzAmrYZ8zh7sUj4dCBs5XdmgVFncuxo7DRMJBUfYZJ8CooHFoRjVJ5wEcwJLo7xe13z88i",
  "key13": "vi4YwQCZBoNQdRmomTxchMC64A9kQW8kYiFPzCiqcKiSJPHRnyWhREFrf6VoLcBtgzTm7ENALfyfv5KbdKBUmUv",
  "key14": "5JY7FazFzUxAiDPE5NVCWWt37kbrY5JdHD61DnsACdwaNp73HfRAMBsqUp2WnKWvCiRtnwT2SmbGZMMHtBzRTDcr",
  "key15": "2w6qbAmjtiaNQekEojfC8FgYWiRxYxPnj8Qe8twmev5WrHLttoZwvFrgdgd3uAh71644tDTHmgwKsAYBJtfWp2hQ",
  "key16": "3tJmowTJngt7eWxxPq5BcrPa7gpyde1a2EvjwRU2DfasUqnLK3y7x1xyCVxxpYPs5QT7PCLQLJHiaA3yZacVRXGa",
  "key17": "rnycUka7DAxR46reGZ6Q8LjWE2oE8AYRPtGoahMft3S5FikvcTA352MCvZbkrRfMzonaQes1yMrFsq3jAg2Vjd2",
  "key18": "5kSJSDLGrUfdXbvuy6dNfNz4ahMKdz2eUoSr6JWAXGWjpBsbcqPEvJfv4D722c87QbuCXp9cvMPydi1kVJ3faBKk",
  "key19": "49Kib3i8ipQLyQinkyHi6eAXPQ2LQJNHGYGZi5XG1pskWyL3f1rawDcjgKsLWTpy1yWRkQX8pYi6PnHaLcNi3BN5",
  "key20": "3sNmQm6op8REnPneLsMCFxbSMKPUtMksbkwuzX8uTEXBrbVVf79nNJXrzA75vGpPzhKHGbWMUZserArFW2enZ9WE",
  "key21": "3HJfMuG1vvGTdmZeCWS3HgvPGZpkW16yfaZRXgppj1ZteTYFqmxG88JVt6EBcQQNwFUjQoykzZgo6xg6YrJ7thxN",
  "key22": "2b5Q1tg263FMVb2AjKEuiN1tz2STdo5ZrmdgAyje8EtT3tyw6bCf4zhRgChdpFSo3v4DwF94o44QrrEDPSKpEGf7",
  "key23": "M7aM4E2eETKBZovTYK6YYfRgZUfjjBEoLuzqmGJWFXP7q9bozqcefe2G8zHGc3GABMAGdaakGRsfeWH9Xro1enW",
  "key24": "4sdEDZbmiC6LPDfXyByfZkS2aLFxtabFMoBgHyjRrjrLJismGL2ZgG6RyvrJKM85DXk4uL7jz3NNhVxPqu6BWvju",
  "key25": "3jQ1LuEz1xVTwycCMKu5etiqfskSBm98ZDL6kY3nEzRczyHmAUF8FSvrASFpM9xCWDbDBf7g56io5vNse8jjFKdw",
  "key26": "2tBueujZt7Av6SwDdjBpKBVuB9bbXEXy1orqgfYTrmPmCL1ZthVGQ2mMCLvKYsSqt6zhnhvMpngs5n1CyEbFZ36u",
  "key27": "5QJhgqecphEH48uMcwnpys1LASazQLi4xwwiJ6WGVPCB8Ksjxy12MG2MdFH4M6MSsdwaFHzFzNDQtvERyeo7k3r4",
  "key28": "41NKCf71y4A3brejnfyys1ZUAZRvpLqfnGjaV9awBTjhrrSSqTLZKGk3YB8KxwQfWDsk3GvmXBbQWijzy3yamUvg",
  "key29": "4bvyjmwf6Yxb4SskXvymDiT5vzvmEDPLWotQNcJC4P2HZSpMXuRYMVpN3ij8BpoZMYtj3CdDsrfmXX5dWs5N3WjX",
  "key30": "5ZDzkSNBijHcvMAXpPWrdQ7nwDR9GPPq5gBTphGExLjtsAJDoLNWguSx3se6mzRmbHoDvieBmtejDLMt9AYkv1zn"
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
