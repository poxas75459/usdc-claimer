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
    "2DEs1JtQvczWAmW7cXu8U7yKuJvp9Psmkn7g5GP3ECHYbqSLKgGtxXcmCCvBmbgiwVyuy8VGpeF6g757jGjRd7nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTBXoKKgGy7MiDQsH9oJ3H94vpQaEVhp6nubPsCQAimfD1yKyE5MsWfKEyXmdmmumrh1tZtm4LiL3zt3tVUEQGq",
  "key1": "4ekerop83gYhSUz15A2SXXtSpk4gZ5dvWgb96VBNTq7uBmRro4J6eVMUaXaQnbhfVTmkRmfhARKBK7tHaBKNu1kM",
  "key2": "4pwunhhvNmkdSrBUoHXunk6FkdchYmS2N9JGoBENeniJdn9LFuc8duP8zVLHy3zmRy76CLSsatU26tjzcoUiR7yq",
  "key3": "4ReiNasZprCgskDsaGEhNMaySs6KQguWxR1uGP8Z3RXKFhTJzVkS5Rfetc1KRc91ZQTsoZtEtHGqBAvK8qJCLsCb",
  "key4": "3u7G1puNMy1yQdpLKwN6MHYJePCF8eH9TxeNtwmMNr5133cR6mT9MPS7HmK6Z58YZk2x7a6mY3TSe2mG5RQrsqCE",
  "key5": "5pUHTdGo7P4gZaQ8TCRyKzVP4aZU2SwufHCcLsdQjNYkEiKhBEzwPQq31gdXBtsovoi58fvFsgzh3oPtoji7Wag6",
  "key6": "iYkytZdcBaMMrF7dcMmzeWC6Bbu1qbg35xE21p7BGjf9JK8LU93jy3VW9AtH3DoY9BhhLYVrWmUGVXBMh5i8gQw",
  "key7": "5DTH7bjGEXTUTkKpC1rbfQioYtEDsJTeCbVGvHodnuKi2KNTJj5T2rhBSbnLYvoFXVsxXPMJDv2PNLCW7V8fMrtQ",
  "key8": "wrbViRiq2kQ1e5szxWavVjB29wUxaSQfWea291mav5cBKwrBXXybYa6TPPC32xxVYwtmvVayiyXNiPGcSkqgYvB",
  "key9": "3esFHzX4HNo4u1YRruRcb23cHyiYkQP1Jpmxmr2puxtpSx6BNBu4SksDYmri6JmDJKV3v6btvBjhaTUanu1KiYGN",
  "key10": "4iKGkEoQUfmTmGso11o5JtippYU96PdPK3oMyarZMGCGWvnMXJ43g4upm2vAJVVt2eKrafL2WNFzswRbVQnNs9fK",
  "key11": "eaNVABMiHf6yLX4VhVyiNhSvtZ4Qke5se8dGQf2cr38yxchtbBDSwrBEZgKkTMV5pugu5zrqDrSMw32k6nVVHS8",
  "key12": "31UXKykn7J2HtT9ecsPxtzw7no6HNnaYcTzCeKVYen7d9jsvxGzfReDsXhi3oZokP2zabVXWAvGiKwjjjCbSTvpm",
  "key13": "4Y55KYYyoxFCtiJXtJht1nUyKaZfZGCUVwrwWr7FuAoaZ2LV9pcV9Vn3AHSStDrv99Z9zM9evDXka41GegrgxgCf",
  "key14": "p642LdV3ApRauyWbQwVGeJtTLgECryq5KWFoMraaPw1LVKbGKNvpKWgB2cdyHheJvHDUsApFz2xqxh1vkKr25ZD",
  "key15": "5VUZo1iTt5ytRe9GJGP4fX7Wf8kesz5MYSpHqL3T5oMgj5ZFT7YdXi4Swxzs989nFuGeNE6SREcTbzTHSJNmKPCU",
  "key16": "5zqUFbM7G81GMqLFhxjEtvoiUZysa1oq4ZuXcEesB8VRWuZnPQkq9BhdRSekw64ayEe9YyCkP22yhjUbuFATNvg",
  "key17": "3ju6QbP8MypSLPrH9pvXAL37AikUrHH5EkhhrkGueUHi7AD5aTX2gVW418eD3XqPGNfCyAEDCKCp7FYX3tLzKLf9",
  "key18": "dDs7hYExqvhAzQbFg7jz1EMhaK2SP8yFgFYPFA7f2Q52Aqf8dYoZFnEmcgBkEf3kNE9F1Eqc4Ax55aRsiJpQ7EQ",
  "key19": "5qR5L9vsj3JKinjFdHTkgcT5i7F8ZYZ268MPNE3Dym8NqYpnAhTMZqcyE8e6ZFHDhTqMm6MoySehWFuAATyKMBGN",
  "key20": "3kKhosKn2ixrqzJJZFso2BKuNLPDZHLy4fqqNEsg88t9P8YUAzQjzBww1YMn1qtZi5EmXv96YJ8EFY7FcsHjz2cg",
  "key21": "VkhJiZU86DKNL7Dr6jgQQjrRkZRqVNDT8B1KkERqjs7rwc1wYzoKwx9WCXtaqqdqajTEo8vKyrry3Sc5HshvhpM",
  "key22": "3Wgnv5HMgm7rQuZfFTBZLsnQuCirbHf75LYZ8PU9DSQFMCR2rsXTjHpojER8GftLv7eeykgX1XeSEGXsBupCAgHe",
  "key23": "2QfeQ6J1z8qruiFvra78UTf8GRehRMwoPFeVtBbai74QdTNtfbcLmhqs2xYwE8XN7veG31rLVx9WKDG1WSkqQ8zt",
  "key24": "3ChfgrM2UTJtp9jPrmSeiXU8k96KddpdLaDYJ6mLaqS6DRWqAwR9RqKuDUmh8N6rUvnZQKoj87WfpLyYwVCqucNu",
  "key25": "zwD35gxYoiVxx5WvNMgGYokSz8v2ubjChP4TAVKsoG4VqK1an6iqxPgs6EfxudzCiKzv9EkSoS2YRbomTirLLkN",
  "key26": "5FfNa3cLiovx4H9W3u6Tuv8Y88RgPbsfGnBA2wA3FhABMBy9L4B9g22P9F7669rpf6jaXkFjS5988XvGYJwKvSQR",
  "key27": "2SCE1LWzuhu68dKLJZnD4U4mCjCa3Ht1pA45KL4S95HiWfVFniaP67FajZ9r753SQsZAhFDbWuK3HcQWMjoWQsoo",
  "key28": "5w8SqDpTeSfrMWi9iknJkvhhUyjaKmaDsAbTcKMvw9qpxpW8NEBCXLyf8Nin32pYnSMDVssKLvTZzN7X6yu42Bk2",
  "key29": "BHz6uQGisKZQLTR1qMnE8nsZKUQqXDTt7bmfZA9eohNL5d2YsTPKcsRXxfaz4P5qSUUfyYPdPERoYuSQUNtb8Ho",
  "key30": "5DNsd8e7AQdBSneYKCq7ek3ZV1o2eUtDC7kz88WSjfWCJJoHrgL38PSx7UvsT97DpYJfEgJzA47Ymm3FeRrFEBY1",
  "key31": "28KSBY9md3mMgRvCEncQqQw1gvXfpj3NdmVUdrkfKtRQV2vAJDnHnLtAw9BZmtiPZ5YGQE5yAzZL9USTZRv9w3qR",
  "key32": "4cFa83sm2MJ2zNMfPqJauFP6GU3JoJZcpGN9oUzih8fW2spm8GCmJCQqGB1NgoxfBqBhhgrw33uLugFsjfEhfrXT"
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
