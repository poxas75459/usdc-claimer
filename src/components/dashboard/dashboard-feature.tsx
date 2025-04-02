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
    "44n3McQcVubrYpfEBaHaF2nEAiJRgPZBuDCzwQZCxUN4ev4bv7761hvAHBBGDy7zbr7YCBBfMrxUqK7DqFPxJRvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJout6s19Gfom6Upqs4qQ4yTt4Ls6VJhnHSJ9fop5ZWp8Wu3hQsq165MDWoxqSz2AeMGeS1KEZivu7RxLF2Cj3",
  "key1": "25PaL1hUKnxH8mSGLMMEp4t29uzmqXPyChkJAhZtZyXRRSyPc8aozUQme7idctTBsxE1gZFqAWEf3sb6NjYdUgkC",
  "key2": "5cBw5YGzQRApLpsijdtddzRrtxmorE47JEzrhFUZqf3Ftzo34JceB2viyV4RrQfpSFBLaoM9LzQxtLfuPXbpb2M8",
  "key3": "4f5VN6SYhfG1urCakfdcYP75nLzjk5pDKHfvG4sp8hJQ6KV4ruQAK2uoHKYVBkCpDv77irRAc6BhCgg4pDZbMbPJ",
  "key4": "61ux4iuMZ56VhM68gLp5oY9CieDaCjUieRknRopfN4mWG3EtrYpy2hN97QbeAgiXJk3G4C8dsti6D29H7d3dDa1E",
  "key5": "3x6qf8hfmhM2KLnrnvtbi6uVzDG1t3Vjmb2W8rMgzCF9y5rVTmsKVTbRDgZ2uP1mA2JRPJ5yTXxQxKKhWwSBDYmz",
  "key6": "2XBJ3FVDmGKDrXK5UkHu3Tz4naiaHTqXMZBfxvtx9WqmHsm9pqXhhw4MoSpNYEaZBJGbmW8X4HdSWWxcp6R7bsge",
  "key7": "3kgeY8FZbB432h9z6D58CAnKgd51Uk3gVVgpkoogV2hVTCAjbjdn94KRtHCEgkCrR7AcRhofVnR8yfgFvAGdeDZD",
  "key8": "sd6xHmVZv47oK8Pg8C3mAeqT4XwEffHhGhNMzVnJbeyrNNxrr8oWKdTg843VkdRrRFVGfH9Miee1tgH67ByWphc",
  "key9": "FV9xh9EjQThtGgcvbfmXJW8u5K8N7G5eWmvvFsbVLVjZkNyZEgHuZHeuXDD87CDd1uVEJ9oRfmi7592W2GNuBcS",
  "key10": "54s3n7n85Rbcua62t6rnbsJJApXNipxcY6JS2wuTN73vz5tGACNCSrUJmMZ4FEn9zxAEB9XC2ptDqYcGwAJoPdWe",
  "key11": "X5fy4oanL13dMhcVF345GaxR6cwBX4KufsL8C7S5eaewtTvzmuzXtVaKQEjPwYnaeempVnxzBv3trn1jSvjTW6F",
  "key12": "4oD4djHenMDemKzvmvUukXLQW23DhmzpHjQpyxuD7ErjQAdBdZvf6UK1gUkHw2za3y4VQq8NtyB599pMUd7LkJvB",
  "key13": "59q8Q8w4spD3sxGZaMTSwyKSNuUuMHnRJun9M8ZrvsVjvhbDRQ2ejrTuzm1gYya3KGrh168QZCoiKZJgQSSabwZx",
  "key14": "44WGiacVMBhubA9hEnuruHrTegTBy3hasS1mT6kfSDkK47WLWC7LNCk1DsBDnmcEpg5pyoWHnJrwRfCAPnwXgRHR",
  "key15": "3v4syDpZG3dY7dvrAUS73GRYuir2hFqTnAA7tcEftVEJG5Wq9fJz7mdzoeSpqtKpV84FNTb4vY82naRwk66ZZ83h",
  "key16": "2pJSkzbhsKWoJ4rKs37kTXcGRNSUqFf39eCie9AH6Q24NqioESX4WpxPxBoQaYbDJmZgJiCqpuAV7irTdvyGLHjt",
  "key17": "5XhXjppcWSMS5k7izQ9kaAmvrtFDZGFfpMgnjQewr45oN65Tuhf2UpJxt4HXpWrHxyjy8bpoDRrgpD7v68QDEHUc",
  "key18": "D84NKvKXLm3zbYJ7zYLeHDEV6YchmWegBx4jtxzuaMesmoC1PH3SYSgxv234Ddjz3DYokosT5YeAWmcXXWWVhxx",
  "key19": "2d178UXCeLKuX3K8keA6RSFqWEjkHBoVvUqUteiBvrL6SZXDMH147kQrdmqCV5EVtgqn3RRJ2h7L2UD2XPQ5A4vv",
  "key20": "4rFzshAQvAxCLPom9dp2uFiUYUSfKuABhKKVZmrr4sqteA4AqmLNRDUknnyqfgLE6Tbebnr6Q1b4qVExtwrAZazg",
  "key21": "2AruWezQmo5qnArtJiBjU37rn4YvyF3uZmkirxPQLWhsKW9aJJHiATuNKmvJfXfm3xG72i4GhT8tSk5hQvPCnXsZ",
  "key22": "2Dpr7SUsBCnEqMyG7r6cJpyY3Xwdwg2gqmSo7AyYDa3ubiS4gLeb6ozqXjGAGJXu4Rt8iHHZSyLy4C895N4d9P6b",
  "key23": "5sb73s7dEfhVAz9Y9j2LgW7hHVPwMEdJdT2bSGXPiZSST7eoXX9A9dTxvx8y15siJhiCjNogGJPkJuUmvN9M9c2a",
  "key24": "3xfxjUNfvZ47LKkxbKvU72y9VzXZKwaCAmoRVEZE5frgTuez4Gx1mwiEunCE1zGFKuPHe4ii8ctL6Zk4GDQDGz44",
  "key25": "5gXHvjEkR5x9g71RzA6JGgQCtCLw1vHKMyfnQQY3d2Zk3142X3UV3tyBVKaLrfqnCiubBHXePAmfoBuw7pmbTYhR",
  "key26": "BVR8A7ngLBeNFfSFFVBfW3FscoUSxbxPdnWtYxAZBcK1J9eFYFksjRzi4hRmgVxy4kVqakk82uDkhQ2ovUkvY4T",
  "key27": "64W4C6nEFG2YbW6JXPdG8VmSC2Z3XxygwwPbqnCikW66ekuEn37GQesqyaPsKXPYLpNpyRsVLRwk7zTUNndR9NUy",
  "key28": "22H17CpxGcGtStKw8KzEXBFBKnUa429qQQnQBoLX968PWCciSHJ4HAfCuAarB2p9LkkPtYXNmbRsxeJYu96Rw2rz",
  "key29": "X5TteCiuiBjyXvZsRyhB7V8CUgYfzWBn4ywuBqkUSaRiryptXxyt7tWg17UJhZY9VSr9xfxzctHbZGaZstuN8qD",
  "key30": "3rKs3pFcPSu9p5yTV2SRCRLW1zZ63RZzh3f37qZurdY6TaNkrfk2Dvyqi3oetpRc4CuhKuBy73Ar8pkdiJptBK9W",
  "key31": "5H36MVKTpPA9uBJii8NgfXB5ftWAkXvGp4LhnKpkUMDXK8H97Hey24LcqPnQPtP7LYDP7X1KKWFGrvpA3ESgjhBE",
  "key32": "4DbKfxSp9yq3MsSbdP3HpAZeNrJ1g8Qc7o4VoPS1xiM1P8591D5UEYuXfAu6mKa13CzuDMFg477h2pAeQooQjEpS",
  "key33": "7xyUhVx65VTnUsYC9nW4yyvLgoPDdKSBkQF25x3uw3aAZHrttv5cnCaE7pM2P9DqqaUSUXQHaEd7PhP9iLxRukv"
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
