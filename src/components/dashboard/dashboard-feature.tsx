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
    "2WQK3KmsNtgkgfTaob7ijFtNgEFAy9UCdVZuQLeGRzRYX6GtdCsDduLBSXCtBGvVU7fkLtCgJZir3H7pSf2YHE2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNBW1YDang29NEUen34wb7jktgi7bbPKHZLiRpCP5XqpAjzRiNXrgXSgRmjX3snjHmX5QesBfmqW6qjBAF8bHw7",
  "key1": "3UUEVwwBVP9oxaKZEbX7oqRPrZ24M957U796HokDgSKcbEAo6L2bs6TEvEkEMcrm4xpbMQ4ygvgtjtFrUmH8JPWR",
  "key2": "5K9sL5cYJUtWJDV5Nhi5gy7w7Wde6L5m67v4x1aTr4kYH7puaxiH9fh9wvgNoappjEos3g1N2YzsGf8phD3R9Zp8",
  "key3": "3wn12ANMRBPU41m2znNTG2qQmhpxX65ae3S7RtgVRYzQDU9voBdW34mUa1Mt5dp3gcGkJ9CkLTVTRC5ebavoS8cz",
  "key4": "5gf38o14GcjGqjn7wiHJkbyy7Hv5ZYzdrAGwBHEUhgvVsGGkyaAEiHBzp4cM88PA26RxxhfzAn1woiBUJuch8TJ7",
  "key5": "4UCuFEsm5dC8158f3M6q1g66fHgDkQDRBNoNLXYJ8jvM7wzXNKWfD59cGESNcbNDVQViMxFLEZDkURSSNW4XcKuE",
  "key6": "2EraYfjfNZ55gpEJhsfTEahBHXawboUUxZjYjJKeTTj5dwxFigpASzcYrsPdGimuaiozBGeo3bdF2JmkaFiEyFeY",
  "key7": "5QDE2KgNv1iqxWZBbKWnesJfVHcsnB9ZUSeKu2auoWbRHVcg6Gk59M2TUzxf2WtRSwAbqpGKa6YRxF9eXT7fAzcC",
  "key8": "5zEGsoiwqS8w1KZdtXUbgwCdU58CkHY9TmpNCeSm2PLAw54EbD6SfUnk57TV6Z33k16Nu9swz8Xatydj3PvTwiz1",
  "key9": "46goDWagPJzTw49wXmznqf1rYiRxiBShtKbF1ivkoVtwinA8hRGLXSdvkWLaC44nmca4VZ9Sf2nL1it6kPMfP9xh",
  "key10": "LNBgSpLcmhCYH2Uy5Hcn1rgkf7wECGAAJSLj1E7iyZnVU5Rfx2wJn1rMJqkt2oYZU2ikyHsAW5qa6q3tcjhhmj6",
  "key11": "o9Hh4cMD29L9TWjSctWvwkxL6zRCt3oD8xeNbmSCydiF4uX1BUaVeKN2QSmYyKVZt8z83yjZVRxW2LKxEEqLJBE",
  "key12": "5gMhQor1H12JLneepvJ25gSkUDhS7RXYUatTKtbVcofZsCHxcRwUePUSP7Mj3K6ARUgChTk792jcc3F4Wb6vkdaG",
  "key13": "3VAVGdxYXYdfzki2RvAHcDDuGccMqESogJyHPi11KLXYS5uYazGQTGhWNcUTw6EASadVy4UUH5LQjyHiA5Rn82fP",
  "key14": "37FsRoanSH72wALnCUiDDRBqLhnVTgeBNMYJKNtVBeGWDP4kWpb8mQcBtCrCzZunJuRiZQjKAEV8o882EDAnLjbd",
  "key15": "2Ptjm99L4Ycgvg3mibZF5Ut4B97zSPbdyGRpTc8jyDF6FxhqNhh2HCveJaRehrxFg8XYxgmFhwsH4xXLcRVRbfEr",
  "key16": "2ALgu1xwy7hFdwKVnUmqZnMc99NzMgPqZm5vXRB2rQm1bN52dTb5oYCANCK8vWpWwvbpeN54F2RnyAeMvvTao9AX",
  "key17": "49PhMiFgTdiX4Wpym8VHqWfrPxFkyMZakJ27b5KGDB4dL6vEGETEkqiJNNdD2UpxcjsoJN4mu8aT2gWYC7i1fDvm",
  "key18": "5ndd13SdqztuKpL9t2k3fRW4dJ98kmNhMX3JfFk8t6yHCsd91yoP2meYt95vMh7QhKzNZGaM9PFbr37dffrfjW9F",
  "key19": "4dZcFRx1Fs5cVruA5WzLMz46DGF9voAdQW9aJYBmbAW7CGuvpqRXXkqUth28nsKLR75zUDxHBwfKvVKaEF84B31n",
  "key20": "N7y1mVWseHX2aM3ALW26CMKRRtax5Ux7t4oyqNGdkgttz7QGKDhihPr64LzBS3gTCoSBYLXeFFW3QzywcgzaZod",
  "key21": "3GAKSCDiYaR6FKyMY7Bawfhx5sgo8gwttggDfYDX5wHzSyizmhkStLqppy5JfUgW5cNgMJLJYvDifWMEw41mPNbi",
  "key22": "3gxXP5KSM6ajF3LsWGFgbT1bruuE34ciS5a6dFeRuhFDv1k6sLuMkkXPRpuKjXpB9JPWkTrBdn1zk3g4negQWwnZ",
  "key23": "3HZoQ1TmCLSxnHs3wTEExGKD9EKqGyJh6SAUursM4eQSyMtmYD6uqaYLX8wqX4MCTh2WRpaWEBoMG6PtSjfYkmeE",
  "key24": "5h6C21v5X451NVtYsosbUvsJdXqm1a1F99TXwVRByeMzHyiz4J1mJ1nFrcy8W8UYSWpCjdcJ3mNasCirvmx2jPsF",
  "key25": "4cihZE94Bt2AHf9ennXE7TiHMh1V3bgKXuie3k257jgmjf9322m7ShM9UFDaNnBF8tByuJ47QdaV2XeG2YTFhzNF",
  "key26": "b3CLaZFr8zsBHCEAaK4tirTJQTzTrzZkiegeAwHzG1uNXh4maZVtcCZkEVv5tM45j1EH8hbNj1YKrsieRWhtajq",
  "key27": "QMNEQhpnfLjJW3o3r5iiLQbGoaZ71cRj2xNva9UM5i8gGnLXEneVNpKVZnaALqQpJrvptGVoAjvHJHDJy3adPG5"
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
