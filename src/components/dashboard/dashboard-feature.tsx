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
    "mx5zz4AwqYbeVkoQLVB1Nt9ATGUMWZeJp5byyseyfgSEsnLGKz5D7AqRcoazyaPaF7UmTZmdVE8EEqx3LQeN3tC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azbgpJu1WZCnU7WtMVTDxPVAManbKhFNpG71goAhCznor5nPB96qARZyqvxCTGdMYGbeoNVsLmgKo5DMTfbLACt",
  "key1": "5ZaW44Fa322R6jEXt5qZFfSzuCxSRU83rucvHLKkX7ZMWkFtEdJApN9qGhzCzCNNXSqbyz5UakZ8fEcJQ1FGKwwP",
  "key2": "38LQygDo7TRWvMNA2BmVNRXZvwZqg9SPYqmSr5PWtjqtaNQjwcz1WxzNTSHpA21piWfZJtVK7Kd93FzHcbJhmxJi",
  "key3": "2ZChccS6jKz7apHj2DGFRUHyySMS3obijTPdUfTcW83LW9pXeGDeWPRBMSofYEFFKzhUAVwhWSAmTEYw26mT2MXS",
  "key4": "3Lmt1wiqGa2EgYvUsd9yM2RAmCDXxsft6pSkZias6sVnAUAA2XQo8xH44dBdsJXqZ2sveepUkuY34MqD5EXYr8Eb",
  "key5": "2qAcZAk1swdZxkndzaVP2LumMkgbixmyyv3KMTGdEYtwwfV614uB9YS4kFCyfkTu8BCKcQJoUkvegbuvzpQVpRir",
  "key6": "54q6fbwXYDLm8CiLN547SNS1BQ6r7PcK1Dwsef9xbMKTkuU1fzdovapVx7Ym5i7F4SpEhhadGMMUVUxNrdFMMFYg",
  "key7": "3xk7pX3gyjwzxEvtDTgYgdzWFKrsWaBMuQHccTztVhS4SNxT3iDjfpL3iGsAu6bsphPUvbjohTByRbhcbuR4Xvzj",
  "key8": "5RuXGuNqGGNS9gof12R9Vkdh1YCCTYWAWRGcjMfpU2EbrAF9wqkizd2dcywYYK5QHwuHKxdtga4yU4UVNnKqKo2S",
  "key9": "utqHbj77KxNoWfdSQobVEchvSwBjpVpt3Z14cHFkKt1yEgUsisxa41LXaPiUjmKRHuttSa4ywip93VdRQrirkZ8",
  "key10": "3X1PSwqFvrAEkUxB8xWAsBW9e1YEnqiaTiD1kwtskoZxYZS1tvPmSKnH2B7xcm9b3ahpoU57qHw3dfNrH5atFGb8",
  "key11": "38yvPau6zaRMp6GBLxUVXkv3av2APvyV4LHpkjXPBLZQW8mnCkEmQb8bTFjPiWJQUoGDTkXqKdazTiSP34dLgwe1",
  "key12": "2FQhFjrbNf3YEtfHbCGeRzbixbsev5omRbxyYsJekFUEWuCe1icjA1iQ9QjVS88SA3T8uPJhGWjsgiqbooZ9yjU",
  "key13": "aoatDiqCdLj4pceaK8tXbyi9uh9Ui5oqNd9WrBBfPqedWd1Y7mJbajww3VXWJECYeBq8kQdRvEF28Qfy75WvJBp",
  "key14": "2P1oeHbaQytABqmZJQQ9C6dPW7G7tUrgZp1BbQ1dcmVGCyhXMSLQB2AFFVnnEawy23PYuM2rjHkXSDVFyifA7NKj",
  "key15": "5SWYBmH6yGTXJsG2jdHqYXm6NPqxgr9jHNbM1ym7k7Zs7tkWif8R9kHaDqk92mryt54eDhGxxkPkmwPrZdXV1e8N",
  "key16": "28eYCKMopNXDWq1NMRTkFTdbAVz3KjrDgBSMceRnczCuWeob3eRgfRyi1Et7U1f5bbKZT2PdXosPSR5NBcr9Ys4g",
  "key17": "5ZYN6zN8pEgHUEjECcJWsLw8zYsMriy8gizsJgZ3CTXqzo6N9Xe5LAPcHD9YMQp8VCabmtCd5EjnS67pmSJqg5DF",
  "key18": "58hpx1Px3cBxu1mXAtXroJ2o5kx1hUtoDogBxfwZAkXZVq7tSWsAgdsDUFmNDPuixxirkntNcYaFTa7dJY3N11zu",
  "key19": "2j5G1SvKRV69UeqsprFsKpEJYdrACVQvKNPDSYjUmY2APe5asMDawQkBBn1dkD3ks1rGvPnNfj5v3eXkWix5tpfT",
  "key20": "2rdXVZmdNCk4DFTMPJdb2nJeyomDck9fhMNfEMFA3BrGfhqpJHaph8mYjVg2cmYKVDxk3ghr7WretLmYsfaBvJXL",
  "key21": "64oTQNM6yefTSkBuxYNqZC3tdfdoCxaKQ9nMZWMAZtiieaA2rCHQpaGvLhWSjAZisyzKobY7oZP1pvZMT3gykhJM",
  "key22": "4WAkdyWXu4qcJQYt1D6WLtE2FbnZ5TJw46fe4Q2y5ChEAkCdgvTkB9JgoBQ59SDLixJNgzGfrV3MNsBqHgBt2oos",
  "key23": "4YyXYVjRDgf2JarYpeEPH8hJSmf2UruEsWPdpJk9r5eRvwNLtABPw5oCMq3VHL748dHaQ8oa6ys2EMPRxSG2oDs8",
  "key24": "y8MLx7bJDoFzge3Q67hNmpGotMe3W7CnTh6qhQUGYpawDxX5JSeWiGfkBBoroVKU2CQ6QZMSYZGHKF9vntRJfuJ",
  "key25": "4eTL8xRPm46dnJZywbx4dYWHpGDVSxxxSFRCbafUZzGDvLmgfFghxCCg371Azq93ebGePrdHp66AMxytzwWKJPPP",
  "key26": "4eBKQECX3KP3nQmD2HUNFkyVbt6yx5EB6QGeFheZYm5gqjKJPpXcff1SnhWAAE4FNNJ6q5g6c6APxnBc6b5WmH8i",
  "key27": "3uQtrZpRzmqmjDq7MjZ2LK7ausgW98EkV52ZQTKNJCqDwXrPBAQs3d8JifvU8XQgsBknQnCEVRZWhT3YVNQGZ3w5",
  "key28": "3dQETLNyZcBsxF9ScMFn6YNcg9YsDebw1CcdDfETbpwPNfZRvDcbHeM97wC8RrdK1QDMvWuZemN29E36ih67FaHP",
  "key29": "5uqJ1Tsb9kYQMzVZzThMfNGPHTpziA8WK3jJbwRqrUzZDbUqVLTZQgzc2Wg7Y5A2eF8Z4fH8SEfaPd8a45esx1d4",
  "key30": "4LY8rYLcPrrQ9tYDMgJmRdcFtHtZjRdkP1MuidS3MEipX3TLRNuWWK37AxmcQHhUQucVbPQGuKdpN5jFXZDnmYmf",
  "key31": "2iqa2uf5YAdTYiUbb2VPCpdEzT3ProiUW3KDkLhcwh1A53NJGvDeK5oHfx5EQ3yG8mkZ7VnR8zTxqbghbDfQ4HHq",
  "key32": "2icjvpD8r1rax7hYbkTaJv94jF7kZadpbGYXHSdWHVsSyAuuyqEu6PHw7Ledy5EfJQY8wGPcpM4wRNEiwZtc38GY",
  "key33": "5hgdz3uGdeLxYK3iAtGPtHMZTNoC267mQNCXfnx87Kc4saQ6aWbLoovrL5WD8dwF7sundtvgawuzP1jBHg2RwR6s",
  "key34": "4Y2xpddAYSfdpYXd7N7cnQNVwJMEeXdkA6PXgCDxexL6N2oNr8NDh3v91scoRZ58kYU8EzXPot7BQX7pbowDLu4B",
  "key35": "47ihLxios7sTU97PdwBUFMg56HiQwBUciMbTiCocwaoKKkmymRUwzUQYNbPFFv2FXsUF5m5hJcfYXFcLoHcMFbuZ",
  "key36": "5A1sfh4DUbdSfpeSwQ1SRc9X54c9niscVF43UCFoki8LVmPBNorr87CqCF9mRBjewrWVznisU8N48UV3ofDmZrE4",
  "key37": "5A8Ake3wiTbuFgDUfHHHhuFFeWkLmDP6GmW7usy9AmmqZc5zoxj6fKqajj3M17aiUSFh1bnEZnkcPN8tEN2RpH3g"
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
