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
    "3TmSHMioih9Y3X14JFxUTXUBsUuN31zDMCALW5fCtirCUEwJCmxJeFgzK4SBJ2MCnbD1pVpi311WAMFXww4reEAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SjCQ2S1QfKJ4UDbnPFQhPEZJkq4SA8XNF6cSQn2o8Wmjj7y5LYZkQp3NUtuq2TEg7Ev5J5bRDcmodLgE78r5Hv",
  "key1": "2deio1SW9KWemWGLaW4XNKEh7ctEvgGnNxPm1dDQAwHSgQpJHVEG7rSswLE2StLUN7tE8fgBuSwzvB9r35cdt9Jf",
  "key2": "5XKGDijYLUMgWCKbTMEPpeUqA1KkLHHviJBvw2A3ufrUkKp9ysJHRyxLekpwrmQ12RMWrbM6jsnACcHeVJTLLitQ",
  "key3": "w4qqbKRT7nCa7YsaQkhGvh1N6cVcqraD7h9HnJsxNdxfyPiLqKfmWiwp5epUwym81ZrraFdBPm8dzQZ2dwoTCPL",
  "key4": "3tVtMLvbQFNSqNNxqHeNiWFrxMBmoGW2TkTdpbg2VUqNir1eE2arkqwZvDPQ55kPJPUfKoDusnWgRe5NVwqUnKaY",
  "key5": "4UYtZmgSRrx9GwZUuTQPHvcZCFcsuzrAtbUP6sLim2WYLmAVWqpq2yhBBVqmrEx5fNTkod7dXcFicMUbwh6muHdx",
  "key6": "4QsRREzdta2M8d88hR4FtzCFccByESjHYXP8vmswWbH1EkKy5V3ZiLwBSfAkRoSD7jZrmpj3ZdLwi53mpVwYhNsW",
  "key7": "4s7u5aE7d1sUW3z5xcDUDwjTncRNbrjLh1hs9u3J2Cfxwn99Mq4iwcf866BJwqiGN2RLpGsiGED8HkExSEpxwQbJ",
  "key8": "44Z3SpjM8qYYrkuQWuthDYkvo3RAqrKu4yTfZZwiq6cUGJ1eYe7L5nKJG5szQhsL8chZxec5Wp7yeS6Q8UVyj3gZ",
  "key9": "y912KGFggvhW71gcDshyLJRcjrbBAiK2KrSsx1FJMet1aCFFrLES5f6cxF9Ai3L7VMjkqWEcyDxnAuC7drmNhWB",
  "key10": "2DQb2dBfWJvV7C6fBHy3r71dkhS59B4uB1Q5hZQ12nyyX7uSgJT8qYEYsa9JNcnnzp263EgWed1rx2jnzACAUSs8",
  "key11": "4rzfhxUumEhuKuj9EEccQeXsrbj7Mfyy4gX5fAYb37Mh8t9oHVX9Y7JUQFnCHsmxHQufqjUCUDpA8HQ41bQMWy9",
  "key12": "3ydD7JMNww7nW47JUYyZRs73HzyA77L3mcf3ckqN5e6io5Qn37igJzTVNf8CJmp4q2Q8SumoDn9mUoWeV1pqVK88",
  "key13": "3eHGgQd17VJPGRpopgHTZjzuepvpvZL8jh8CUASmNK16Wz7NHp55nnUZMf9z5mj8VTe6N48xQgrBDy2aiPgtcESy",
  "key14": "2qi5beuMXqR6nVDrTwdGeqQgV9qC4pieScVqt3tmzhAM97deawxMTRj8UQ14axNcqAUVrre9rW1TAWSnCbUpXojM",
  "key15": "5LrmoLZCKKTKh2iuzE4ZkgHfrwg6CLnohKek4vcrWDmjuKMUG7fpJd5Jxy2xC45Vj91ZwF22LujC2KoaH4bAPqV5",
  "key16": "4XVzPdWLgQnbd54DpYiqUXzoWFhXWBnSpiQBxjJEtKzqchPsAEzSyjiipExonCGUfHESv3rrnpVrDUGUoroUd7bK",
  "key17": "32Dz7TzNbBw8FxgdZNHGrkie834nAYineviG1oUsGi7s5hbadX6QpyLRUGQay4V2WzKJc9AXqjoWAWLgpth1jvr1",
  "key18": "5239QmDx3vs8RQGok33sFPFHEih2BeZcP2Ho8oPbAb8bDwdFWNchkTSJMzrhtBnXy2sREi52DW7916rZefpCqvvg",
  "key19": "2h8AoBdePc2KuYdV1EpTCVDuyzo7rcYG2dDtDr8cPT31NEKF4UQdiANXVAF8GUzxCaUfYivr9aDUPUjL1SFttsBe",
  "key20": "3AaQQbJxtWgGNJo1qvB3x7WeiMZa3uckRrQbQuwWuUGyaHui7DHhN9uBuWQ9a1Z7cK66uYMsfJBoUqnphPFg9ybB",
  "key21": "3PA3HVkRGP2Sdwjb2FyPb22jQ5rGsmaerBsKiU5h8DAu4pUrbtqvSgeeaw65RANnYCCUiBA9BjPBtUb6xheBKnFV",
  "key22": "4hKbAf2RZ82ApTmULGQsi21As5TxcBCrjdbwjMCqinkJzYBtUueb7Zv5HX1ckYXbUv5e42P5PZ2Vo8yZ6qpeqb1h",
  "key23": "3G8UYqyPfPENmGLiV8V5XknR9P3wUWVJNJqVaDgMVjGcX4ZZaL8Uwj3sSj2R9wDfC6wGWG815dBH4NptFoSjTvEj",
  "key24": "3zZPNFXdLHUBMrhPA85qxU9WjEAcRzKRqHc224uS6YD5XcsxH34ximVg7dcpN6zXkiv7w2BpQRwWjs59pik8o8Mc",
  "key25": "bAdtHdMoFQp1PL6sh51nWWTxGCNAgjT6L6Co2tU6rVjCMrFY1qgWxCY3BtG5rcca5ScCrJS19HqvP21xpZxbvay",
  "key26": "YNKVBShRTs7jcKn8SeKw5EBobKNz7z1VzkCzDNMBSZMzYq2uBdQPUXJcQUhF3mxZmMLLxqc19JbbRiBSXnSVamV",
  "key27": "35bSC41RhZ8SQ98DZ5Zxvc99UBYqdEr1djEMBFufNHAov61gXxRcyw8snemEH3zSpUUNgbf5BiKbLDKy14jJ8Mht",
  "key28": "47QYr5wELgNxxMGRHkyxZXbYXrxfU2DxwnNCqApAHt9KQ5oDqAYAeMhwePs4ezyowtf1BQdMR6hAkeg9gaS8addQ",
  "key29": "3yjajqfujN4f7xDwawaCY6dzpBvCGgdFegb5E1D3XsQwRZ7avbiZptG9qWkCk73Sxz2wGmFyhBmThqSEjZRgwBB2",
  "key30": "3o71NGgK6bbToKUEqspFVRvipMarAMSV8yFP1RH2GGvW7XeyboLvRTzRfcBZvmh6U1jFqQnoyiZ7XV84jTyz94YQ",
  "key31": "4CsreVkMqc7NcF6FC3ybfB4g8UqXbYsgwtoHRuSQQkKAwGtvNUdfr6bAJS8BjRuLrKrHn5eUq1fRL7EhAx7K4Zey",
  "key32": "5a5WYo1iogesEecxHau4EDJHwf2zm5s9WY4aVo1NsnLS2iJgwLMXw4jaEHwqUKsUxKtLyDtthrA75uKr76xE3DNw",
  "key33": "5EfFiHHHS4XoTa2S4UKMJKSj1unCUwqweC9KPSkyniLk2BNUqmYygzgcngTjqFRBnrwwUHb5wYATgFzWioYgPQPb",
  "key34": "4BhixoEvDDo7WT4SifzJCW31BdVApBj7GKsHwgajduWqtiFZZnTXyGnAf68GeBdiKmDWnz1fD742e2YAHWexDuQi",
  "key35": "4UUjpviXtgidjsbypPvbvCsG1H5ag8bowjzRKib7mH6AwLBXQyiceVSHhDPVp25jezxf77VU5zeF6Dgc2R3zmCmE",
  "key36": "uqA7RaXjzPgWZ4bGksLLechbmk9f5cqhcYh42YkAquszjhghjfiCcPwsvUfrrBQ3V4PhMTKpxDZnBEbmpyExAxc"
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
