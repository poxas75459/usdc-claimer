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
    "jLsQVMHkGV1R1NAFcTsZwuFxWoBAMYWhPn9pCv5hiv89w1tJSa3D9ACSW1WtauHBXKrHZ3MCKufv6Fu8Q4duU5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgaFGJ2t5KJ7hVcfuAQBZsUvK8ptAcr1n3eSE7xGMYNXLnaq8U2Vzy4ViPLQcCKrGbhoUypEmYsMPAb2PK6VTWG",
  "key1": "42UMKJyT3FgqmP2sYPxkJgbEfhprWihdGFB9ZKBNceX5xsxk5cy4bB36eoH1g8RrxrrBDXF7PatmTp56SyhQbZEm",
  "key2": "66UiFVBSHcoczUT7LAUk8peX6zqkt72XtrXoHJjop1W7rd9KstFtUXvcQr7KvjkKHz6f7qZuhkahgsxvgvCvRSMf",
  "key3": "1QT56Hw8rpbgrY6bVgzh2fzpjNNpjULAB3m6bZ18Ur5vCsaAMAbcKva6ymZVjo931GBiRyhiMfvbMU3vuFHwFtX",
  "key4": "38Dkg54jSg8Mvr87jhMkDoyQsjkqej6qRUB4hwMHQ5mB6a41XnyGWCXJGXYLYbwRGUL9TY5dagWSBqKoHTaTEJLE",
  "key5": "4f7pywzfmtaWAhPofD9hP2yUU24dgcCzPbnPuNqHWzWpLSva82L28DNeFJoqk7exTa87bprFLJUMX3gsc76Y1aPV",
  "key6": "5NMTE2zuToUe5ptmVgFDJz8rCPyjaChqf5WfbknkzkrNkkaSfDah72vACyq9s2b8rwPCUPym6842Fou1a3oV99FD",
  "key7": "2Le68De3hanqLaVxSga7zJADpxuDWA6Cuq1wCMBDwFReq5KcJkAjHCHAhu16dn6oY4t4HEd4ZjHqpL2BiTcKeWak",
  "key8": "3D5KK1sD3E6v9y7RGThKJQvoL4gdqPyLLdy7Txf2cQxNFvJHzCX1dtPScGNnCzMgxXJNTmqCAo1emdpkjsVNxU3A",
  "key9": "5NR5PPhqQtfaouUT1ewQ1xbz8nsgdkGCgHo9nLJ5BFPjXu4AF1tMJGt6V7U7Aig9vu7K53b9qRY6iKFknFCXuuNQ",
  "key10": "36mcTvsWnYwLWpoGqMKMaUuxeZ8xDCgHeJ61SQSpxaJyB5ShcUnjCmcqv26pkQQ2vk3yr5eNbczM4VfGSUvBTd4x",
  "key11": "2saKcQcYXMC8ra6NZZz6p9QTBQrhEC3PrhC4wdVV7hmYRiCUqhkkSpi5GqdyUX4KHcPMtby8ipHuzxo2Sy5nfvtZ",
  "key12": "2X1vn64qXYmz99WwcSGWqdPr6UZCJBUHABNiQVESia27xvzzcPdpvcd7Rwv9kcRzmjd4qzj1YJpXmFywAHey2RSf",
  "key13": "yepufACSYhxvAvdEHzDUbur6atFueeXj2r8fEqnN4eVGQvGjAPw4ui2ofcRJZPLmG9FSxqQcxyiz4doRtKzhWwb",
  "key14": "3u3Pq2Wy7ZmHUvhuD5vUH6iZMKKd2UJ9C4nUAfmcL3LPQ2XcxiUhm6cxGwwFPMtaxaCyBwMeNBQQNcNjiy3ukBnD",
  "key15": "tBRUhWASR4wrdWCWvkHsPJihk5bmfd8sZ2rjmfjqZnqMvDugfxN7Vq3CQ1wSrPwrrXsbjGL3YF5BVDboWEF2Bka",
  "key16": "3m5ohUo1w3jMPef8EfY2QmryMPgK5RXwUaLiYK1rZeSyy2xfjbehsU8ZhaEGUf4G9WrvgWMNipLGjR4iS6HZ3g2w",
  "key17": "9nLAG58ZKzcopZtirzYYLZkH9Rq2yYNmycgQDraXfgqdg8KL3bYb89njWr3d5PEqGx3KxGZjotgfM9uvPBQrps9",
  "key18": "rL7Vc5yS7LDF2XHBazeUTtNvQoAsrBTF4F7cewpzW58G12Xryt6JaeDyxZF5XFqcacuaqb6rVaLE6qyQrrEz3C2",
  "key19": "4obJAnAhB97PxsXKv4A8K7ZUJhEErYZuC7qKjVqK9kmpgkkmzdWEG17ns9abJ9C6oCaTTjzrzbwSK6D2famTCgGr",
  "key20": "58cyFeSCeQefdVvYcKMKWsng444Y6FEws9LuPubLAx9gyFTPBQFVVZgYMZtYD2Czua2PgyJs143Hn99EXN8K16Zg",
  "key21": "Df17dG3pwXUQFR7oXySmVmEipJxFV12V875Fgu6VSeH7msiAE8kv2vawqcSXL5jAHx1p28eUGKszobSPeTP8ohR",
  "key22": "5HmbDownbTtSHCv9aeXAqj7Ev4sC7QraVn5ZuRpBWGDjsWopneYTujsSkFTkjMuxAguuyuEVBZMXm7qWBuJkwXDF",
  "key23": "61FkWnVh2U2yck8uHnSME7CzNSWDyxDyMDKEdobDDHFccLv1oQmHVWbrtQb5oEc7r3rZmrRYZN7B7mUQoujhXX2J",
  "key24": "5fbasuaJfsaKgiNowLRF49XgSA6zk1AwgamSJak2dd75o9c5xJkRookhGAdtd4CYLZvJtyqDbn3iDfsuBssQNz92",
  "key25": "NJazRKQENNHbGeKwjg4B9r9DfqsDPTGatG2eqYx8vPAwtY3Hxbn9jzprCMFuGNhRq2rd1xgrMQqhgoXWvvLTCGr",
  "key26": "5ZyJm9VjTQQRVo9q2KgVthgVS152Xu2emiYXvJvyRDRYYZ882yH7Mj8if6H1VbVGQsrxPdqbSQWPm11CqPmXfRep",
  "key27": "5h5dEE9UU1ZdK9ehf366dhnyEiwJNwpy3DWRFnZvvcYoJeM6RFd8JibgZQQumzHiJjWC7hVxtLmrpeNCoRtPUzn5",
  "key28": "4xf9y4rfLxvypNYvoyBhFr1yxj1n4BCujj2BXx3tfmjPECrFzR1yT5Dpgs5C4uGi1Yv4oLAGV35hxitoy9GFnaD3",
  "key29": "4mnE2JdJyvLrP5BShQq2D5ZSSKzszGYvEonwQGQL8iE8GSJHS2EXEhEdhP6V1cfu7VS79moUcxoz8sk1S7eSCrPm",
  "key30": "iH24XaVv8qNfoFXkvA782LArn9qWPjLVi85y1tSPNkN8V5zbC3STnWxydvoq51aL6aZ7nkKDQVWMTKoKV89jRR3",
  "key31": "2zVV22NLyb4zWfemHcvWbA2rJB1nBurqEaSz342m6wD3cZ3KLTSA1RF1sLyGy8981KSTs1kg6A2ZEXrrvMCbq9H7",
  "key32": "367wPi9r2rmLnPcXcoYwaarWHGK25P38WXhRiMGwf3Wt8tBXpYBfB9nBSKZgz5JUrZpriZu7FjoKZasvco45yBgJ"
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
