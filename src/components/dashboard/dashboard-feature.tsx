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
    "4yD7gKbYiFUkgHKDXqpv8JfKc2HrLdPHWSsLuBSfbi79DDWdQe9c9Ak7zsxZTjDxJqVJ95Ad4csqiZskk5CYRgv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5aeVrkzm8VhSMPFRPh6HeWvD6WFexuuRuwqEHR1u5zsB1FgQQvMpvHNKaqL6oL1wpf3egTmqqDUpWDo9Dkm1iM",
  "key1": "39Ur1E2wTMg5S2MYg4n1Cox86GUgHQWqbp2p1dVBQUa5TfiEmXVbigfhin4AZE4cB7gPKwK1CL6y3DAoBozhTnD4",
  "key2": "34ZpF16REimKwgmB8dKCpWTYKSrELEtNfiLkiVpxH6C1z7DWcNBSjXNbk6rzBBw4hmAH4xn9eDr6aQFsWoKvxoNG",
  "key3": "3ZUSscoAwbFpm6EzxWYNoQ8XHQdK7kjy2aVFtYFQfYVfT8feShSrCK8t2X43SUXuPPYwtJbUdf69PM89BzJgnCNm",
  "key4": "3mqkw4yWUUB8qFaUpEbdtgTHDiVzXuMcy23ryfU8CBGFgV2rtzskocS8gVeYUJNKQRgJ25yceWusrJAboPKzjDPg",
  "key5": "2ZTEZk7PVe33CkZS2WY6iXdrqoj82DmTBjjkmzkUKkDcnidFShb1yriTHgfE3aKVKyWQFdfTaMndTuSKFtmb6AaG",
  "key6": "3gQ48bceyc2kf89WJ1vzJnCTc2iJ3KW4bpyHiEvjbJuLeAQR2ZGREH9W7KLJQfwSCDoTExEm2x9MM7Km9bFKMG3D",
  "key7": "3FXwirrAhwfX21x2r5oRPiCgm7HYsMoqd1j2JoFqunJZACMgZ3bWVdoH9CtimJrYvPHg5mWXaNTeWSUzisPdRtGi",
  "key8": "iCjyMadLAV9cttu615WwHJ93HgYfA6GfPbFm1gVbyTRFpEpHvTkU56jXSHTPGRsJQsnrGLT4ri8BZGtuE4PBgZd",
  "key9": "3w9Wr5QRqFJpH9mT7WMbvw9L71RoTg431JY3RfFHvs1rJWNnzqaJHj8Em7xBygWDgoZnZro9hLdoKNn33DgG3GCy",
  "key10": "3VEEXASzpiVYtRoeLmWP8aTPX6KcPMCDwnFBckcgj7hGSBRkjV5jzJ12RY883EPq8fgj4fKcW2uhmytbeXXayVTS",
  "key11": "4ijUh4F362R97rQnC4L6Uu6MPjJ8oFg9WKsb4aAmd6bom42PFxob44AdHm2VaxXo99Shq7e5PaiSbGJdx5GGC7fH",
  "key12": "4RkQg3RCuDjCa4RZpXUPd4T41z4i4duCnyEU9iKbZqoCeXhvusw3Bai8DCSYC9LrEXyqjLETDaD6LCqvnkbFAdD3",
  "key13": "5feMy54K94smo3XA9qu8n7dToTtfCp6xVWVZZzfTC8QWqqutrDvNhR6FWUKWYtT7sAqCM9kDZbJrDYiN55UYdNUu",
  "key14": "5jfhWCZEnKPWTccfSfVxm739yxfEG3FxubbMvpKNwxvJoCxwESDjNdF53mH8Y5zrPRZZWLqFtxp25QiQRUr1NhEy",
  "key15": "3WPkBmw8sRSUGHMYwNy5SeNJN6szSQYWkDRA94Ybi3ztWjPes6SqxLteng9V9eRYK3bi48wrHUERCSEgbUCHzRCQ",
  "key16": "63MypRA8ojTMtxo9fu8kqkzzXrYcZDgEVs1wvjRGcsxFVhV2diLnaACFkv3i9GMd2zmXtREP4rgp2awtjsGmR6iW",
  "key17": "5XK648ZtetsgcsD1KBAyvDYBz3eGdoRH73dXbWmCyr8qVtnFqdiHhpt71odCa8s8pAN8HabUwTm4j6zBztfrvMNu",
  "key18": "3ebQaMZc4ua8PrfbUJTgcHA74msX7pQ9DEQA77PhBDVFfA6LWdYRC2FyVL7uL5AouxPUBe2f4bJuMGqeHpc6btLA",
  "key19": "xduqT2SAho5PPAy41qecha6HpLK91iWXddpQJTJkcNGoTxi66XEJeXpAJ9YM9oZzi7vXgBNtS6DqzbPyvMzpRos",
  "key20": "K3N4DA9qJePNbwe3kXBebx1LNedv2fHNumL6PVtXkmYv98cDCTFKAWs4afdVM762Bxkk5hsUkKC3BgFcmkokXZP",
  "key21": "3NLDCMZLA5exN7uJJ8yrvHNQubRmXmq6rddg1CgvHuGmeZKzVTH3VDhBtcBLhGPkiPY4A9cXcdtrGGaaJ5efps5j",
  "key22": "2cuzJtdCfMy98dc7dPehiK6c9at5NpdazLNejxf51ZVAt43W2F2eK69opDwjmEHZymP7EKyyCskBsfWCqmSoYXEU",
  "key23": "3Z9tDz7jZgat9bm86m6KzwXr72j6PdYJvUNSkgYddDvNgxX8oeuTkTnPVhpJJXpsFJ6vCGBBz6FYUkDcVN3PDeop",
  "key24": "4XLKis2BoBLqcKBiyZhVXRDiaRa7CrSu1ZCiZkW1dWPTmGjNo3ZUCoaukzFQxbVLv37ckZSosWqVBcf4qHKjUhvN"
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
