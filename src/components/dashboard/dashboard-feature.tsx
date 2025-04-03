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
    "2iFKW7WV74p1U1jTp4Wk39c8H9wFAkLy3pgrLsudHWoKC6jEADEvk1AiFgp8TBuXZLwcBV9bay56skmETFpAkqbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6aNeBGadBiZzeXEJdDMKmgKva3Qmxhn1dbFU4Xv3P6GntUHRDKnpvk8dpmf93s7PQ1HEabdMpRjHRceSdaPemj",
  "key1": "jRVvDTMst13J9wQmEQf82qfbsLP2FmNTqnk1BQPa2Qx9fGWtVNfojyAB3zDGrud1nZAeLNusG93ggddaRZpJUsr",
  "key2": "pK63KftGHPVvdxhEZFXXQ6XZiyLNhMMQsxxVn3MTRCTqCGopiK513eEMivu7Kx8ge3JLwhbRWEDoJnnVJLUhS1v",
  "key3": "66KBEcZFn2EXMo9w8YvuYGyd2iPdchfsUvEHqsWBdT1cetGqWuQ5mfpoWtXe8eT4vehrDBpRMewVRsHrxjPUjkyA",
  "key4": "2jHfkNL6EraFkCSmTMZDda9gTUaVEsgs3mzESbctRAyVUwfo1cVqA97nWEpyLq6iqoabobkmxqMDpnEnJRJetfTN",
  "key5": "2aT8uxLLK5cw13QNS67QUgtUu9MkJRC1N7h3H1Bu6WEffD7cwHSDXTuJM8MhvH4TWyUxbKUYDrANT4TgmdqXcc2P",
  "key6": "5iyfEprJE6mN11SEDEJ2Gj9UVAsVAdRe5uDfR6XPkKULHW1pj3tqpzwqG51g37Ya41nrUkvnnZxgYsFwy4S1tPuw",
  "key7": "4pQ65o4aAPiFnRVuALZhGSCr9BjWW6SSu4NmWA6VvzaFyeMSrsnwbyrCXsvkJASdSh9r7CXRr7z6n6YVY5UcxQJt",
  "key8": "3CgEKSHtQW162s3HedKupABGpUyE3Tv6z7Yct4izgETYvZVRAQg4evNErygLe6zXKUsrN3KvXhHesM5Ri1L3B7BJ",
  "key9": "3QXNakV1TvGV4pq6DzToxMzthyMTd2aqUrWXVpa6SWCbRpJVvypBKRYWCcFBkXF5nrvpNbga4hVbzSrVS9NQB9VE",
  "key10": "5XjkuhLwn3wbLNw6MjGXjdsgPTVVRUipvpt8sgJXJqZRNPw32rn2CNfKgJhjDmMqTSzEgpuJZ8oMQyvSwigmAYBk",
  "key11": "RLS7TWToVa4qtntzgKUW8WYHZqnmcZXDEx7d5xVm4uhjv5We428nbMQfHC6s5ZsJ38uQC4jy4geBqqGa4hR1Vxg",
  "key12": "4HGZVVDebiFuchZd7EvwZiQksxeZEUDRZQFc7VCfcpX6CWgeETVwqho58a7SLPbREc6aKg7JCyyS1UvdG8AJizU7",
  "key13": "2mMBF9ddhKyEkp47hTfsLSqfgEp9Shf7KcLyKDGh5ntpwVjMRWnvd8jZLpF3TVWxmBovr7gGCStsa2Df561EVDGo",
  "key14": "5BukptE1m7AYxMhvFuR8fRwjTxLpsWT2YUXAkSJhoMCUV7sXXXimCZ2sDC2uqqHTQjce2Y3cxg8DoGBGt3w2kL9X",
  "key15": "33Xy2Cunp9LXyGTD5UvaKK1ugJo3PWFSyt71xNpPYdWa6o1b7tCEy61nGFw1wHbXGGoHEn49SPidjQ3xYXi6Lo2L",
  "key16": "3CZUT5kP7qrd2NvfjY28Jh9qZ6FAaYjV5aaRqbL7RsZc691jthDaq3bUZtXJgsRZN1tSnKdfNJbNCRRp8YZxBQRw",
  "key17": "SMYEn5D8BBwrNRLSgmUixkpBDN2z3zR3CBwWdJbpjvqViToHQGSvpFLMQ8Ye7DXhfZzzf1skjnpMk8quLptmkof",
  "key18": "4Ecj1aj9Qey6mCw4SDmgnakCBWbP1c7eE25CJXMPTPcHHCCB9LaQifsfPcSqH6SqbXtpUenNvaTiW3EgDZwKsr6b",
  "key19": "242BhwVv1zhfnKxLXLDEeUHLPxx6oy16qVoQ8VknnnLQVvL6pJXeYzrTyAKzazz8yUqZA4ckBA3XaiTn78o9Yhy3",
  "key20": "3T25c9p1pZyBXAWnMjwPaPedDVEJcEdQn9Uy7YwqWb1imUCqbYXBRGvE9jxcLGm4dudp5cUBWGzsDHbcNCFtAV19",
  "key21": "48YexG5RR8Pgj2NVrZUTtUt7GJzzNdiUaYF4vDXtZBLXKqU1agsjz5UWXW4PS8Ju5e11LmUEXGVbCM9dsjWvh81r",
  "key22": "2mox7QWGvPYmnhySb3R8JTqydYPeJaniyGQUxQp77YBc8Qj7doB1ZEk9TeA5GfdoCyf4EgHmkf1VZVVgaNREjqPa",
  "key23": "2PjY5LR68aPbNBpsxFLG7ZvBE7voi1gaWbzMtXssMQFAwQZ18C3tperdTD2rVM2hGPrvhXAzCVtPEARdQ4ogXypQ",
  "key24": "57TJJFG6RgrvXAmB8ooq1UvbbZxueDJGB3WyXyzuWuAq5wimp74GcUn5LtdbmiiX1Vi81REvRaC8w1N8uUaVUEHH",
  "key25": "2MQQWLfXkdSs99mHRfvEPcetaJyBJvzmjEqmExva3EfS17EQZ4izy98DGUVUYNFUarQAZEqn2G29fgApjJE62o9o",
  "key26": "3NjWsbSfPhPMnz6sBvUUC3xdH8fpUkwBZF1kmq7s6VxujABWUpktVubX23Sz1dv93SY13gBBDtVCgkXuFSueW3sc",
  "key27": "tE49MjoRNvQdkAmfZizY6MbTUec4HS9SDnKNwndzSB6XkKbhEctW1Nbg5tFuf18sphSmn7YEkD3QSbBapihHA61",
  "key28": "3wiLR5qW4NFAqWjMmvvAmSPh9cLiRfpnUmxFBgZSjTvrBmGhrV11ARFceENyf1be8BPwXdqsnCBUZB1HCcMdxeyg",
  "key29": "hu7VeeqVE9mWwUx3z9RVpf5Gi4US1BeERhSYPtk1cCKHiVBHRBcJ7MsM5dnYc1yBX3XpFNMgJ8uYFJ4CJVfU8Cp",
  "key30": "JuF6kNqTsKoHfitmCNhJ6miHtQv7kEA3vBa3hCdFswvnSpUWAWxEtDEeKoVHaB55E61TRUYAGJbW26WHEUT8AeK"
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
