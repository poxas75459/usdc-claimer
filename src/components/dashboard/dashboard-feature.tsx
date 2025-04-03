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
    "4YktsxPtkgP3fMSLwUfwsEBGhMkw68B2AehR6yRSA3HmVBaPPRwBW9HNsTzuiNiPjsyVHe19o6EYXA2AcXtz986w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wR9hojQ5mP744XiLqobx9YSmuiNmWx38H6xZ9LS5mys1hcTereffX9ZbHu6G7MSWW3VyFhSjFw3B1gQB7vVV9bx",
  "key1": "2Rtb8Wsm4zUygyExoupYuzo1bmy3PSyMV6CS8TGJUZmWioBaWmkxufkEoK8fYGgCNxJXZ9yfyUbCEoQyg48BkApn",
  "key2": "5nyZcyL8FfJVrm2mfdzjaZvUv1AbvVxLJYaE5jgwgrkiF5g6yHMNSS9GiYstAp2kBi6bTfCS4bE9bhLodVj8dzb5",
  "key3": "59nmFDTxVxw4ZFRQCA5uT9ajMn3kMg4FZ4nJfcc8RkL6xZq9RKdSDCAZcLZskPGZbbrJCv2gSzohrfzPYQA8KHQh",
  "key4": "3aq38TdvDdjeA25rbEaDRmg8u2cofeXXwxhTCs9XKmoTSAQgYhzhygcc93Px3GNW17VXEHfQE2H4V63AzphTJvBm",
  "key5": "49cXV1HBM1fXs59XQdx8viQsZtQQriVH6DfXYt7Epw7E9SPWJZW5YiLkZgbAnoFeNYKwF5T4TtaqzLbkd9YoNatf",
  "key6": "3Hm58vGyXm26EXNxpXbRfm6SYihRPQDr99F6L6qcBBSmJdjnbV5yURvYV755QD6cLLTEPL9YmzZcwMthvbwVjhdb",
  "key7": "FyaAKca7N9ZghQrDdSKJL39356UZiUkFsDkYjrxGfCpFJSJqYh8D4ktZxXZXmd8t1hrjmNurRvuuJhdtkMgBGxK",
  "key8": "5EftFNdMaxx5rLHEoVPduTdy7wUWm2MwAEiUA2r6r4b8HiPFLBu3MUKq8h6Bp6fKFfin76ArsrqsRradk6zp4iwd",
  "key9": "bJdV7xU34LL4MGnbLtp355FwzUXffmZxkXeyCvTXUJ5APbDxV83nxXKzfBirxmWuTfhQBSV8g3nP4ikCM5SPJF5",
  "key10": "2EKeNRuKR95tBnydqERYjCgYA22Dvm5D7C5eYGq3su7zbzyQMp3EFgJvyxErrtAffgBWR1iCmieW5DSyzUSa7Hbq",
  "key11": "3UPWJtmqetSK4yTuNiSEjZ2T2HYd9VoeQHvjR8yzLjfc5Zwk1ahpkm1e3GygG8dwUFu5a7sdYCVzXGXhJJF87yed",
  "key12": "4jRRinpvX4fwBUGBdcgyiiGAJb5Kr8sZ6QpdwmBJ8PYdtjBuHeDCRrBY9kGKy7e62TXjov6AsuSPEwGGYv2GFnQN",
  "key13": "39NpCz8XX4dzCPY174Vw2ZVtUWVCowYhttmVhEZeKycGgww8y8MavGxeSGLipSqSmGuDVnt949gKtsxNc471Nwzo",
  "key14": "4xaUYV4ubY791UhRJTaLF1FitJYo79eFkYqp8cBfGBpRiSZ7FMGCqe3cKdSb8djrF4YZrpq9pyVmEAdbCXfowzsY",
  "key15": "56k1R3Q9ndrGpnK9HQyhvdMC7wmyFtyDhPzXyyBFtLb5pCKELrbnVjfQFAHhUPmLD1svGKW6hMsf4FsgdpvG8ZEw",
  "key16": "2TAxP4ttw18taTd8KkhLn3x8jrqqwVqAZwUk3r6n5MnfXpf329rNamyMGiRimVcoRwVCZ19AjYKTtP6tEYqmZQBc",
  "key17": "4KtqFrAXL8zkXwxZmt9YE8kP4ctG7M9qvg6TWdYD1rYmANLFEtYB8dRpbDmGEaku76ZFZRFRLemUjwQWkb6Ff7hn",
  "key18": "2THCtksSQUExWsocBzczVCyCiDWnaD3DGacpcba9eZoLRra3c6gYW8C1zsZcKTxsK4WNB1zRwXnH4SQ3Cgbv8Qqr",
  "key19": "2F2JPujc9Z2TdFvZDgbznZ1vwhERa2N9qpBpCcUWxLD19Tt4baNfoaim6GG1Z72jARDzmmnkkd6GZPMvXnkFxivu",
  "key20": "JQLYroU6hQbWabe361BVY6KTF6kEsCYAPxBXSkhHTNfGJ7xRZjw4Ei2bXy8p1G8kK7JMZGkHbyUgnFE7JcEcf3F",
  "key21": "4WUZZQKk2ArEuqyxKe8rJ1iDXpTHtoZYfx2XDZtdRxaY1dPNysBFiU1uEbyoZdrBYhNWtVaTT3a3FKf2tkJBWDuf",
  "key22": "2H8WNf6KnSauB6PvhJcnEroJ1RzeBWgZ6edUJ9du5wsE1c9fpHL7AMVgqNNc3d5NTkVxsyxWpSWVt2ivgeNdv5oh",
  "key23": "2a3AcptStaeiUFvk17gbpSW3CV4oEqP2cfPyEpcs29MFUyWGbjZDYMAzTgPxyZTSE5DC9k8V822VohgdbyCm6Bk6",
  "key24": "3Frn5Gd6Xev2PLuHBYdAy8SPquVDrFYvF98JrNeGWLti1H73TqK7BhCGXdkV5Bc966YoZbQxUJp1o1AZnm774M4G",
  "key25": "2CVA1bScTUkhhUBitZ3rPCKy5wHmm2KcSu1mQBvDMyWn4eGE7yfWoU3a58FJg2isCgFVotTGocfDmfpcHgDe8ncS",
  "key26": "4qgU6nTHew25nMkqm9swFCys5dg3xak3auHCASnxh62nRemXEL9cMZK33s5sp8iFcBxB5CLtSGhGMXaTouipCBvU",
  "key27": "ndawrpA6q3LXAwm88gZGzQg3MPgo86sX5Rfp1GEM65GpYaUgoSwTMXQP1KvLK6dFmfyi6k2vfM4xBagnxXwDsZS",
  "key28": "2ShNMYfSgvwtR6uj3qBtVsiBqFEU6D2iUwcEFTRVx3Wv96Kk9BBkvyHrDbhqDseBsg3US26mDTF6Sxf7ku6XgkNc",
  "key29": "28ot942bmQax418KhnZTqbrskXnHpX1VLy6ooZHdGhjhGnALLogkzbmFvaU3YbxvfPCEZyPWLfgqtapDGp4aYK5r",
  "key30": "55NYjx3dF9pTVHqxNZ43WuQP2pyp1Ufku8K7jc11i4qerxtiqrmoyL2KYn8PZASg4iUzThTcBAGXU2qqGz3oczeE",
  "key31": "3SFJ5pTZJ6Pqg1EeACuEgztBouLTUqkEJTyHUYdkNVscHJ2qaQjVpMMwfDbENp8aFBv4oMBMV85xQxKr4ras1PGt",
  "key32": "4x6JPqxA8dxwiUYoVCa9Ckm94TMYUkGaWxMrixs4PvKmqMgcFgHH448UCuMbFxdbLKyXdxzYNEqCcdZzJvjgo5g9",
  "key33": "5bGZyUCV93MdsjwZmWtjqevbyztMA12cbLG4AajuaUuAh8D1f1JkvNHC5GUzFg6Akhi9cDb76ARHStPp4Me6eUyF",
  "key34": "2awGE9FqgGozPpUdnAeHQdTNbYUbTrpFMRfQTSjMAGbHyMKy2ExcL8taLSqNsX6S3zU5bzsiz4LVSstseowkJpKj",
  "key35": "5UhFXMb15KcHqUj8v5SsRXgUcfiA1NNW4Y1WSAgu79g9VTM9rcAfFSjsKxGAZ2BVhfGPuhDcxxUswYycCWu1rTAw",
  "key36": "2gb7RqEeja6BozuUqriFoaGa91WYq87VVRx2dGPG5u7ZmpA4ziyaJXnCaozdsbCSVZQxkgxVr7ynChc4pEbyC7GV",
  "key37": "4DRfDMWMfKBaARq8gjnWyi2T2Qh6ZcA5wUNjSJHipa4ea7uRvN9aKY8BSWXyHKcVUhhq9kAQZfCkrQjobaokiobi",
  "key38": "2BkX8oLho26eJ6UY1nWLyiXzXaciqnWMFVyEZt8wkeakeTcLHarZypAuSKBTiiMEr9nX5FjGMnoTTvS8hxoG7EeK",
  "key39": "GQWpUisHpUGvPC2WZYRYBt9aDUMnhgk34dah835Q7iBmNeAzZucB9p8yPMPivA6gem6QJTMN7T3ZNbujwAzUmuw",
  "key40": "PNmmtRvbSBPfrgxhEk2Cypf18bUXRYMo1zSPEBUfd5aEwwfE3HcHzZWidSMDWXXXhsnwwETzeXdN1VtxZ1tGNi4",
  "key41": "5CAzCAyYzKVqWDtDzrVcTvMLE5cWswek9Q3PYuffBpfF4hCbznUXM1V9S5mSAVbmWdR6M3mYn8dHgRwsj8Q8QraM",
  "key42": "5MJEZdqYYS2bCdH1QnJJLvzdSEzCQGSPPmk673njHbJAq87c8wfofKmPXSjoR7WMaYvddjDW74y5bWPe8DxoRPB7"
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
