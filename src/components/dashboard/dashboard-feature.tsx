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
    "kjHqJCiDX1MgFJ9cbgFJBU9fDr2UTHBeanD9tcPxpWrJVghqhgdXAiZugsoB2vbVMWho8MNUqbPDi6G7z3PN9QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mnJQ9yM3Ywaffket4yABsqBbPS26ePwRy2sjsxLTqqJHKiBjnyuFUcJ6ENWwvW9FwhPXZNYKTqFjeSxQHYkKxtk",
  "key1": "vyFRqFTgZZtabpnSpepKFwaaHgr9yPFHLArW6sS4qcixZc6LjjXzNtNGYigP4MV3EVVqK7RKqvbmNjTE2X9q2g4",
  "key2": "3iBg8L7QJ6QC42EnP1FprUdqh254r9YLBbDpWa4f9wfxGyWHrjquWtHGy18rq3vqjQxFaq7oxwjuwzPttYBmTij",
  "key3": "5CnuoxZqchU2s7Xyrg1DqmYE7WuA6Qh7DSxY6gLj68mqwuds4T2kDoMBKJuyiza1goTUp6LBBowSRbwL5uW2YU3N",
  "key4": "5hVpSXcJkiyqE3x7z1EQzmfnggKB5xY5cM4K9ndfiWkcrSWapWg9168zzKj1GrqRLXSbGsQdhtJHsqyupe438Kce",
  "key5": "2sSL6t7LfzioLDFtq2tVCetjwaXHpR5jaw5bDAYV5CJNFJWxNG5WBQPvRPGw2RLEK3DkYjaaoDfh3Sa4v2Z2iBVe",
  "key6": "6pVVUXoZJzG5j7gUnZE2XxU5qynUvdLH2PwKhahDftnt2Xve28DAJrsaLK2G4FV5mkxj9n2tiHZFrUHVFuf7A9D",
  "key7": "4At5ACSqsQyL76nC9TGv4f8BK6NwVmKVafC7xQV5pSeE1XBwCi4CMvAQuEAaLkTAQNyGnMHWiGqd8P4ysJHfMUVX",
  "key8": "3WHi2f1iqpFccWh7cg7BNnpBvdUyQtA2WcwTqWkbFSdHR7hnEKxnpRZiNMuvtqdCc3xeDERQem5EKZj2zTxKRSA5",
  "key9": "27UERfz3jgd9zbCR7915Eh37MVvrMnS2YxiJHkkQB7TAMqEDJMZxasRYp4rdetgbHbGc3qYnEKvoTX5UAvPg1Qab",
  "key10": "b4AU1AZ4y62SoQzJZ8gdH1Po4t9JcXcoGBR6aENG5rziRxBLgGNufPKBrTGUdVbSSunXGD1pZp2egZrBRADoyFX",
  "key11": "XA5jxpCDYuobYpUpNpfpLYvxgeVX4DUSeTuBqftpTfpbP8UBEm3KPZftbRhps9jgM8w7LCLDuFe19zBDUCtQRE2",
  "key12": "3YpxaP2gcUCesuXwrVcBfJnmMVx1Kvmm55nJxoWxQ1sTH6fn8yrGQWbkh6rzZiowc9jDS8k1sXpTQ1qWCX1WNMnC",
  "key13": "3P33myxT6y3UdtnXq4ynB9pyvjsiKrf7Hm2SNuds29rMphiNSTwYiJMU6mAWtsTqXiieJR8ztVrxjSurHqg2F4jF",
  "key14": "4g3Yow5AUn7q6CDgypkYU75H9pywuK86bHee7HJGMuaNo6WtyqcwicjnDQWsBEAdtXpw2pzJQhKjpwJJt5uth2hh",
  "key15": "2qA6tsWSwKUSrBQ3SfecwKB2mXTRL4WU6dnTHg1tpTAKzvLEWLFLyj68WhdwTAvTuUEnJhBfp3SUbgaMUdTbJ3zc",
  "key16": "4UvrzZwSC8a5Jyjx8D6e3RG8EHKGXxJJrok7CQyJv52jofyo4FmA2ix1xgb1iHzJCPWBUiy1HcpTrhL7TKE3zjtg",
  "key17": "3tmgjUAaMGWC8GxsgqyuSpL4XMhb1f46GTfxYq1iJ6qpLGyxGSY4uxUsAmUj6AgVAqCBmxjqiF6F96yg9PMCuCm",
  "key18": "2USbJHQktjdtXccwRzByYpmTHEzhzVhWJ6QRUFdtsPEqSdNa9srYJSyPGv1fGWMh84U9FEryUG4WEMNLDdHzfywr",
  "key19": "4tshHGkkwCv7vuZPMyfhYTQpH4ZxjkEBZrjuVTt7ULCWZ7zJ945D9jBA5i3qjDr8hvKUjkoeu4hnMkhNLXYjP7Zk",
  "key20": "5fUVnFqwJsYqb4UJJkvgCfHT1NB9cUUVNmiTjUxWJnCKcStu1MeSu9ZtYS6C9qoLq9TTMewauovCRNVh2NxWau6E",
  "key21": "3FHF3vAbVkHpBdPRxntCs6myRge52nXqioLRdqk1275AA7eu1YHj3Y1gksnJZFe4tNEtiWmSHjeBJZ4aCFqnbk3V",
  "key22": "QwT3YugRrAAWnposqJVktMKJuRsCK14vD8a7Tnk12Wc7bQgBEY4oDf1WoPhrrCuQUnmkLLbHN4ryn6Q2NoYg61F",
  "key23": "62D7HYtMkCzjBgqxqd2przVWMcYbWWHpksHNrgeTsxKBDTQWjWMzwiXs82NfHkuJoVtfq8x4f293dEDESUXLQjtF",
  "key24": "4x7xL46rxqWJEQ77D8WjRd43UwjM4aEEahakFgufc2UmoSvTooEPG3D6QxBJfVqiJPBqJJZ6ti4YTNvsnFYriVYU",
  "key25": "LufPkuWbKHhgQAEMAyjuFphF2X5xt3DKnUNY4zU2EQKEDDFyCpLso7yEHjS6KdwS2GCox2LtttqebKKFYvGHmUp"
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
