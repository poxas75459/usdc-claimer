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
    "2XC6SrkGpCkHHuoQ9LZKm9YNFmgBjjCD76fgMHY9XrosncuN263WmRfia9ywkpfxYHgfQ1k8RoLmVBTbBMk7cXda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqCkNQe1ZYtKL48ibJFPSJ3fGtZcAJq8kEMy3Ztjo9sknnmBBMP4RCS2DE7N7iSJmoRqXEty99fZorJtNfsi2rq",
  "key1": "3rZLHy1zouqrDNkTV8iBEJB9nCgC98uAnuycLZRNhLxQG5nmYc9gQdSB8sKacmpPrCCZa5QgtHUVmR7yMtXnwhbr",
  "key2": "3Qm3eFxuJ7aQkVbJfR3KrSqqR4zHxyVU8cYiSNkKyRwQpNqkpsQUrqx4FxPGRaDhqXd5k6Hndfnd7MeYpXTGM41D",
  "key3": "2MJZjyE5h5peaxDnY4XirzHVpAVvTXLtgHFojhbYAMWBuXcQ7zW6qG2FdjVNnkGV4ArzNAcUaevqR9AQpZBtjKhF",
  "key4": "3A1pkfF2zGkGgjenh6kE2eLP4Hp3XBsGng4uGH5NfwYkKdRQavMiZ1CkBdBBdtVp7Brf7AeswP1R3oeBNDnuZt9V",
  "key5": "5vyaB2BXZgi4uiKYfxxXy8TjfnfNKySPsbVPSXtSNgQTDE17CrhK1TgFfMK5upkdkQ5gC5KxwcR7oDKXoAzXWqkY",
  "key6": "54nyXMrR5MjmLS43qbB3Et6ziTQjj2pGxPfiZuf9AphSexePs3x6rsxaYBkG847NdwZJpqXYk6dbpcFQWkXgAs8c",
  "key7": "2gjBdC3igDXULJYE6JmyT2AfZxaJqWhe2qWgBW6DC4YhiFVfFbh3UvexhCLFP9avnZWfPXmujpJfJEiePq8vWdyH",
  "key8": "5NhK9huGWc4jtKQ9s5XkRxpvC89AMEi75JvcuEbeaYTxTSZCXUdYBXCxeS6ZtWE47vAJJBYXfitvmiBFUB8Btx6o",
  "key9": "4L7ze5VaBJEqhjiL1eST8czKi3VDwTWb8piXhYZCBwxswCX4WagYCvhhvyPhhJZ39JFzb7GYt4edgr5xzwYfyfUm",
  "key10": "hErP8yvShfdXDU74GwaJboHMnCQ1XzmBesxDECkJcj6u5oguh4Acv6jKzRc4eLBiowws3mGumQ3fHdVxCiwRAuj",
  "key11": "276jrqdqBvsm5aFUEZswMyMLtznrqMnCSFMHfp7wnYRkPW1jnPJi92dKjtthXjmSuAV8niJy58G7U365XXNGw6Pc",
  "key12": "3YYgQW5hnYdmV886kJLAazazkjdDQFqGakjynbjE1rMNyi5M9p13RNYATdGjuaq7yiumjJEaomdQcHweLL1UEotG",
  "key13": "4FTuE8tjuTZ2DGayCM2DHYQ5Rbuf7c2b7qSPfXEwXtPUhQb7qGTYWWcYs6no55Ej5qGA6iShUvgy76Ycobqtr7DB",
  "key14": "3N7xun5e4LLhp37bEvEYjr6yhtMPchZewT9CLomC95w6i682d49PT8JbVvQUSLPaqXBg6FfZmF3HkV76qhCkqumn",
  "key15": "5pJLgxh8MM2eLjUQXMr4EtKzUonTkBibsqm8Ecmuuvx6jv9QBaCKiAXutSMWKK15tBGwBb1QvxHGCQEGK8or4dh5",
  "key16": "2bFjHZquCFSp4UckqRQmKq8f6TSwhpkQkpUwvmcB1dtKH7JTgAz2gq663STS6HZdFbaBZXMRZw25Gjw3tuMMM4dh",
  "key17": "4793grqRU9A1brEc8RDaEF1BpGL2YkiRZeMHuFTyZ9BzZD51PGc4KafmQQwVMv21C9qgG9Y5tFzTtdnX2uKQzWuJ",
  "key18": "43MBtbkY3DQzc3zWFuQh465hcfPxXBKUR45gzkmhMoSJsnburimgd7bbjra4ZTYFXHHFEmc7cd8ETJiG7GTjHr1s",
  "key19": "4Qyt447qk2YuR6bPCUc88ArWhhsZPFQQ95cti1AKSTgpkTK5coR3sazC86FUp2ETc43cCgfnqRqCeGeVdZQKbvjz",
  "key20": "46jr2BxeihahpKw4Dq8TjyQ2ii8rpmS3KDbPH1L9qhRXvBxmEQp2SD63vYczUTd3P3URa7fxqT8sBze1PjEAYeiV",
  "key21": "2QQKnjFvDCu1cjocmKdTWnvmarc7Dh6Siy5rn2gCV3TyJ6w1xDytG9WqpvLgJBA3EG39v7caGaCCUMY87DkAqm2x",
  "key22": "mka3P96eqtG6noV2oxhikNjNJ66sr3fJcAxWyf7gnFFmYRYYY45YoqbD3Ljq2QPYQwS8auW12USZviq3JPFdF9N",
  "key23": "3ReEz3zAHjDjQcEaVr3iEENhKSeVwyEo2VPyAqgbnxadxh2ibtjx5qzHMkibe6Q59SSqbht5SczaerHaNg9h9Y6c",
  "key24": "cbRGoCU62KYoN9kC6mpAZmUmADg5s7LugdUDn8CewWLC47j3M7HPjBWeQfJbrgUX6hPVfxxsjAdxkUTqLHLvPLj",
  "key25": "84XFsWc2LSNEbFAfYDHbZRUM45qLUCVKp5eqzsMmLYuK2v7oqF8sbeTRQYzxV9U6sV9hSd4wfdrPDoSxABj9kas",
  "key26": "5Ag2DNeH5DRTRLasoxxjeqBZxidKmP7rTFDHw5z81iAP9cQxnGQiYLJiGajpmEA9sczwmnUm5Dj7NKVEV6fnr8VN",
  "key27": "V9mzbdN8H9DKsFBbsAHQDoq4zRWkRTfzpooj9xZBDz4gaWFayTrJnPgdy9qhDxXem6dnPTqpa9HCUYWVCsTPtDb",
  "key28": "1xF1xbprFNqz29YYjS14tVU4AHzUSrj4cvNxz4G6svsy5U7GU1ACK5i2t6RiZUUh9k68j5CMjoNmGA1BEVdFNnf",
  "key29": "4NyDamPXJVg5DW2sb9HM7d2yqpnhXpvXgvdVFuDM6E2DJCtENs2w99RM6e2YVBaUN4mzAUUuqdykDLiKnKCEykoz",
  "key30": "27d2XKewXusr1B7zUZygvANfeqNiNvWFNKyEio5cjbcvJG5Sz8Dw5fiDVTn6ooDT12qM9CN1G93oYY62PXwucwLT"
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
