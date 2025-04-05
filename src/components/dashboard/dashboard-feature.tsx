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
    "W3mYxp4SswiaxAHjCetQg7Hh6kEkB4WXKRhVnh8CBePtfsBrCNFd2nMXwQePp577Y4AEK54PXaLqqEWuVdc8gRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZPYSfHCX7uqhMJBf3ewahp5ExGnbhVvawVNwZnvrAFMCTscW2eEA8o8rKQLUWjEEUJs2JDEFVKFwf73BfpB7yB",
  "key1": "5ySrUnVuTgds3hx1SUr7E6u1GpwLuhaHmkPBjUczBzJbqXnosYYZvqxQp2gG4Kir2swr7gN7rgk7h4jNbKq832uW",
  "key2": "tce5GkYs8sHVGWAVYhqrS1HuVG5twDftS5JWvr27tA1vgjyneJZX5djwurJPJUjX8z3SJpGwoBc3xG8QEkqEtGo",
  "key3": "3KGo1bzvxDEDkuYuwYMN9RDpn8iPqC7MU4qEjMYjTcQWhd5stgGSUadgCfebnSx54yZ7rdHpnBZGCDRaSQohmGfv",
  "key4": "4mkQ6rGw7AUVmWawj2DfXZr33fkjDbAtya5XixiSeXqTQGDQWVXjHJUjafCJLwQFDRBqPnikB3HwobcsxNDjzDtc",
  "key5": "2iEiAB8DWn7bbNXqF97LKFmZ6yfi1Pa5jBaEJ6mQPvw8EXYaXZTeh9NX2aZH6YHV5KpquYhQWVaToZWByftcSJy2",
  "key6": "VbNbv3CX3XWv8RTnTWFYbuL8qGUiy2ry8bqUqK7hs83vpWQegkLmygvqSpHiK8YEMzetrSPqTerqVZMwUXHUqUT",
  "key7": "49NbuwAHYdZJUMGTFEB4xrpMhuVZUo73WimkGdXuVj3uLQtVaePfdkft9TiBCZ7CfGWmJeZ3EHHTKwVvYJKf1z3t",
  "key8": "285MU5keC5S4UgjzvFDWAKjD7RLWyKBeiqw1MZjMDZrxJXX6vJ2cdjHsYDmuY9biLodKd4cZcuAw7nKVUxigVE9Y",
  "key9": "3YRDDZBbNtcAuhdgz1sCErKWo1zkrfYKaEDYQvEcNaCewh5pC6AFy6aBuZZv3egnbiv7vZJEjyCCMMK3VHfSs6Yt",
  "key10": "2GyRQh2tWnRRmZhhU5EuhsyyQye8cYm92aLXZb8SfMM4X9UgQccBN8bZaW847XEFmLXZv5Um3r8yGv9hk6VxKFsy",
  "key11": "2BTnP6hCoMDSZZhqENG5YvihRhKg86nbJy2PWQUyrKBzPDqKjz5XfvKK3cHXN6NsedZjbuKSejDweUcRmybMtVNa",
  "key12": "62EtbkWbgarCSxFsJbRi8pCPg5dChVGn8X6rQrD2k1puCUko7FfqbLiHWeCQdYpgEZBXp1KkwVtWPiYx6Kq173AC",
  "key13": "5TR3NkcWSNPDJPyeF52F5FK2xQ7ACSDeWCxzW6i8Dptp6Q8QynVpfDFbKmoFpddY4kCndy7xicapFRWoGmcBmZtJ",
  "key14": "3xS7MZFzKDEYNjyh9APfTrNtfqShW7ZMwadS9wTRHGMpJ68U94eymdoCYaw7zc9PwxqTLWqQ58GPxW3MGDS7Lcyy",
  "key15": "bsWdokxt1tBgDHBF2g649AByvCyQevE1Gap3GbqjtWaTpgvKN5jcSWhraXhADDzMwNBgmoGf3rVbhZgUncBEyzc",
  "key16": "8bZ5apkUuvum1Ra9iMoW6Lsg2LTYMCVZFUYvxYQXPNE63AereALxLiFi4LuQzZWu74xM1SzkMeaB6zyodHDSDYj",
  "key17": "2QovBy7WHcQ3SvGcV4wrb36PTL6khgPzXpnVhBxoLs61Q5waWYmS1m6D7DstUwzQzfPd43zuvwU5hBRWzPZzHAXm",
  "key18": "GQ9ug8t7PD6jbHakiotLVvTZy4odg5f2M7YwirtFST2VEocmTuT3dh39Da3Kgp7Ay5goZmnBR3K58vCPy5RqAby",
  "key19": "spgJ7YstgpBN94MuNtREq466kTCoGnbCVFzb9oGQbk8VuEdgAdauPQH388AbnjW51fsnPvJF7MGnNegsnE2wxwt",
  "key20": "4R5AwkEZ4XsWrpUNjw1jNDqADJbsvwKQFw93KwJyDkz5rG8BK71723qPDvunFwD2LUPFg3SNLpqtyhuefHntWmmJ",
  "key21": "4HdeSJ7Mjwy85XND8wxR59oXv6JXT7V7Jqe2Chs6rZH6QeVNu17LpJoNhhskaZJZsPCGZXRfacwPVB78iTh87zmg",
  "key22": "cdms8anZ76pLZZYsjKykZn6LpF9EnnHDGn9bvxkTH9pBB6kVfAmZbKEHoeeP1i8ohQeQGEFYgQ4GbrYSAfa8D64",
  "key23": "2M1d1hiSKJVKxDLMTqQDdKnD2BLnst62Mgt66iKaHcLZLwvAMen6fgsg6fD4J35bcTf1YXAi5T2sevDJHqnGYP4U",
  "key24": "2D5nJkFoUyrHfoaiGtawFmYxJsXcsSdT8x8bKN1isSLiwdEok52syubw6rkHJdiATmtNb4W5dikDuGHUA1kHnXr1",
  "key25": "4rtT3xNMS6MaChUqeiBYdQeAAzrdYaH7WkYsbcJMAXFf3yqpQxxP8v98gQPKm6oTYV2e99XwJX1iyYozhpanRGuQ",
  "key26": "2RXiozhp2oDSNTdgthaNPUjRch85QEtGj5cfWCiaULVSLc3PQc4HSNkXgwLXbQ1PChHX6bjYNNRa4jRsfNieBWdC",
  "key27": "PWgn8RHkMN37Pia26tp7MZhudAm2uQaWvSp5BLY3MhisSUYGeGQ5SSTRF1bkuJrokfnnBMpX1WDn9Gym5nH9hkT",
  "key28": "5MoYHFduAQGXSGwCJRLwh3sffhJEGiW1ABuP4wKrW9NZhSnq3ZBibZGsKsNV7wegGyjSCgoYVUGAXBhZUgFjaLkQ",
  "key29": "2tXiPbKdDjhsbZNbNiBDZoZhrq6jQZ4AxKjfVFFC47FdQWVBH6vTFD4J6xSSBsC8zmcYcvEJK3GVfjSjvp8Ewr5S",
  "key30": "2gxse55htGg3ArkvVbe5cXixN87QEQhhiqNMu3gk8XVcv8Kq987PXy4uQkyoeF7sqwDaw6NpZDruGJHXSd1xJteV",
  "key31": "2JKqx2hzLie18WaV4cpuk9MreTpaho4fwpmGyDFiUDtrinrFbRW3bKSP3dX3p9F4ynFMksGHkqH1RHsgQ3xgFX4c",
  "key32": "3EV9JWHE4HDFzf5KXkEhG7MaKVY4tDgGo4Y5CYB5niS4fvJ8FQisNQj5dU5f4wZjCXVUYf8ic87s5Uu2PDT8bkE",
  "key33": "4jJGJF9uRY518x77k1X7XdYJKcUHMHkzXvvRv9sALnBpmUFVz112mtTbVKKs7DrKyDdiMw8Q1XZPYJDXnGCFyASE",
  "key34": "krY1PV6GJqEWisjtfcZ2Apvar6QrxHxjPsm6bUqFg5qmdFNcgBgCqmHirrCamDCLXmr9nxfaMNf3cdxNmHWdcFq",
  "key35": "4WwL5ro1oA7PCBVuy7bz8j46fi68onH6Pj49s3PZkNiGFNpgRrkZGk8dBfJF9w6kGjZ47RL19EpBbNo88ZyXc3WN",
  "key36": "2B8r2SAUABG245etnA3kjc8LaD4d4uxpXrpgn9voM2ZD9zXngcLE4AxCeUb2Fdvwss8k5TBf4MyLzWk2pmyu49bm",
  "key37": "2RGgHUkkHm9pa9x28Dr1omkw9tRRzqx7LqKkP9PGszUiuihAkQVYBpWraRTr51E2uNNgBE7p6dZXFg3chAyW6zg9",
  "key38": "Es9d2eVGzNYbDbMTbgzTYj8irg2PxGW84iiWDA5b2gtjkASuLpTH1C9Bhk2WtKvqbSA9CgoUhjVdfkruM5jpXfn"
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
