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
    "24BbGtMQgbRGXK1DwYT4j8ca59iUErygNTctxXr4za28G2LZ4xHjQb3hpqAKCamRRiUnd7s3aARjdGdZmLaCNbm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N91Crm5TDBkEBsinr6sbHJeHZbsBRucRZHW6YDFiEQE1J9i8oCNAv9Hn6z2nHs3xUA6VDxAX84oKJ3mBAoLo9Gm",
  "key1": "4g29ZTR5UGXgvjoXYC7tkP4bmX12im47gAxHkX6iDCNCvToTpKMeMMEw2BhpNkMw9KxvrM1dVfcE9ajMc8PXYp9c",
  "key2": "Sb1wYqnq6f71qr8Ue7nErLAjNCuRCxVvx5r72ViJywfZcyEiUj9hKBZa9XUaviQw3487goz5VMk9rHQDLTzxg1H",
  "key3": "5b9JCJaHom2m5RPZsXX5iY4NLnBpGkHcAmXpyJDT3VPZ9cdDATNRrmgmYNb74n3pFnmYC5nh9DHbQ2f6tNc4RGaE",
  "key4": "2AkJ56JYXZE3HaBYiED5pVbz7NVUxgu2QtsoUjPMUyBbKC4bTqQQZeWYZLj52gXJ2jk4jRUD5myZx47Z1kiHfJBi",
  "key5": "QQWcTrA7iJdB8W1gEMbmS76ArZ9WYaNVbwDQnX2JicadM58tbtfNiAmDQnu8xq4y5NsfSdt4G98LGqzoXLK8SY4",
  "key6": "2TguPVtACAH3tFKbZiyu59i7uXwKURbjE2Cg6iHoHdddKvz2vyawoGXeGxCwtW9rT6rMJFgsayYuG7MbYoMqVThM",
  "key7": "64mqnkxZv5qdpGozdzPvCdT5zLPFAYbwuqyrJQtXU6Aoc1txYzFobpMNpyyrxHsP22MNim9RpUhu3C1mXW2CKrro",
  "key8": "374DfNRcyAEcGVkEziSXZdDwgiFkJQUYhYjkhhtCTtnhxcdDXV7YSxnGt4j8pvc7GSX1UPyz8aXDEwDdSqfqDBXq",
  "key9": "2hMfRMy4rLQpFoLD5aRzzthevcibBXat8HNkBnLhKhevyGouYTKrB4JNdB6ekzfDq4GZCLJ5UVaUSwkxCzZEWJm6",
  "key10": "46UBkZzfk16cJWQtLf6AsE7bBACfF6R3kgsgxbnTSKgrQpctcSgfFg7YYQBBpxwKuSGdzh353m4BFPXFrqyi3FwC",
  "key11": "2AYWhfknmiydnC2bDH7z2GDBGDP4soaxSWbgJTaxjWMKFcajeNnyXAcYbDbbpD77jcjdJRuzCaACBAzCdUQwufBD",
  "key12": "Snxyuj3UMaQWiWm6XzN4yma66ypt6mrHetGz69BnoFhvM4i5FNV8cK1JkitqgRmkLGqtVJQGpvWN2QBW9P4ZbVi",
  "key13": "4g42oYWoT8zdGc8tGJA4cGhg3aNVQWDj5BgnpHRu5NjXD9huh4DJyDd1aQjFoaqT4iXFnsyQCQrh6QJR1eB12L6H",
  "key14": "2k5YK9K8DRL2q14HJzXTLKdGoqY3RwSgyiYboRE8Cq2AU5CUrDExRTTT3ctNwSB9BUsxVWtJ3GN85fLQbiPbiEj9",
  "key15": "5y7CeC5WoZ2d2tSd5cusR3ukgHXAcG6s2qCZbmL7DdyNfhyR6DpVqxd4kfRnsVno5RnSj1693qj7hgBsj48pfiLP",
  "key16": "rftF6FgTrvwRLEkszFG5VfRdn5wpKW3UcG5TyNDGVahvY7n9tLfakUd16KhrF4ncvEyApeicbXMT96SVxf4xhZt",
  "key17": "3EA7iq17RjMqw82msBysCeVXbhUy9fAFX4oiRSgjC7e6aboyug2SoYwteZSgXgKhgq6mkLkXVRBR9BXERzArXhXa",
  "key18": "5oseasf2yktp9hhpEfE2wrpXeaJanEDGGX3YuJBykj2dojbnU8RA8M4wfJaByhzaDVgMu6r2Kd2AHwUSYKsHWRdw",
  "key19": "5LAD7BTUQxqwZNJEK1AmU9Fg6z4q6o2kfnh1AMW5notcdRUadBhukWR5R7sDzXy6sUUTbW2dvYm5rnkZSjS8MT2j",
  "key20": "2SsFK2SuPrQdKrXKxT4GuSP5SSe7aDNL9BPbv3sgCTH7F1s8UvPExGnmAwVtow1trLiGEvnNYcYqafHbzrcAhJSq",
  "key21": "2gtZVw7SyGru4M3KCzT5CKWLZQ8ebdEFcEPvsajgweuoqec8ooKW7ZaSKh1S5kvRJTNMWC8eYLYYaMBgH4qA8mR5",
  "key22": "4NyZQspdBaAPUWxDW1UTq7Lrkg51LrQkcQYZLQsZgQMTCpRf31XqCyK7KLYVnsCK9Vck5DdFVm6ZyA3fXG47hsMd",
  "key23": "3omigzHFoC9bjNRbgSfZYu5Ay9Y61tvQti32D9kYBDD7u8vZkvmy6Hd6sA2GNsaDbKUFBaYt7Wj6PDWVaDiMPNxp",
  "key24": "3YXXfC55mc98ddtQADSQsJwgN4jTdFeDgkf8WN8vMmLm1go25ciCiZMZKjCnbNqNC77zbvxzfJBC6wSrcSkaaYr",
  "key25": "TMHvfyKUYoQjpCWV1E1kNcLWhFa96oHQanTkqMfhjHcRhDV5ippjbemrWQiphScTCvRmHV3rRCzvQgEkDZ4m8dN",
  "key26": "27VVeErGbfKuFgx9hh2iWBnUMVvM7mVoN6Efq7G463oeNFpcaVZisfJgYgEBonBLwbNvNndDXYuHG2bK93UrbuBw",
  "key27": "ZdSd72VR1fFAuRUQaJ8GvuV3sFgi2we3SWZ9rig1pFPw4LXggTeShokGDTBFUPUikUoW8wjnLqMkP9QkNWv3rQS",
  "key28": "4nBQfWnmFzX8zqvUvjnF7sbnZcpsBBMMcFmQha4JLNQG3tcrUX7bAeo2h5AZFmQUtq4rTtzJCAQepafmmT53JSCa",
  "key29": "43ntXHSVzT3JjVZKnukiqdHCrZ5UiNkThsXNYyYAQu4JxNdLFyVW58CbYqRvy2AC6H4gM22G7afQ6KqYEM6byN7M",
  "key30": "24y4Kuv8CTabiAojKdPfHUuzA6vu8uvgcfhDwd32Q7AW6ZCY3YJHw4MWuxCx34ycixe2cqM26pCowytW3wi8nzzH",
  "key31": "vB4pptuRHXqWqHkJnoKcW2ouh7tpw31aQkedekv69mpyQ8P7FMbvdEeQe2B3VXV7H7jkSpCKTdqz7HooX2WFR2c",
  "key32": "3UR8A3KUzfxvQw4AG69xj5tPVhvvujf4tqz5yh36iAAMaxNJ1TBt2vv2AkqUsnLPaU3tR2ZLBCKAc2YPn1A3mEzN"
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
