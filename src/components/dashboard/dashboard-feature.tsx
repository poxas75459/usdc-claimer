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
    "5TKPYDGua2NDVTyRCA4QRY7HhGHbTsYGgjTqyhyVQUAMZRe5BYCGikA2erZQpnAZTPEJtXFqqRfrV9pYr4VbtGTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5D2ytnuEzo3UEMLm3GmqXwr4nMKjKHSSySU4Srp52H9aJHP31BAmw98pMirC6BQwp4xuhKEzeLNAg3rLFk9y1U",
  "key1": "3yUzLXnj2fvTDsQJihNwykdAoCWrbCviNbw6j5UrK3aSgKG3JNpRNdC1ksvSvXz3EsEMMTuBmhj8MnbaiZ6fTxgw",
  "key2": "21wuGz7QU7zJoMsan7RrcnRpGHLVCd6rd2BkwYa3SbrxZjb7dU5945zdtG5p5LTwKTv12ZWBo6TEyaM1LDfVxob6",
  "key3": "5dwQxZWXrYsEBRhSMrtgkkgSR45rtMCzTzhMZawq7trh5Mk4TgK9EBmwScVw8EHFSSjdDUUaytLPpdRPFenndFXi",
  "key4": "2KL1AW4TX6oWsCC8BEUDAwcbXVpEMCNjAUvwaJdDA6i6641ubaeJUPsAcedxW5iKornZM9rNGP8cUHX2Q5kppqbx",
  "key5": "4BPbxo9LRJXUSJyT8frxcgRVDo9iaWG3V8Kn6C9JkGnQUznVsKyPhLy1gLwFd5ejC2nT6eofdJYxJKPbUFK2iZeN",
  "key6": "5rhJp1QawQ5fD1Reo6CjnGN9yJW4H9sTKxZNBmTF2jE8Wiu9Fhe8yPAEqxXpp6eFcHwSDrWXNcGdDEZNWckhSAf9",
  "key7": "2Vx4sT7JxEWt319xAtn3Nv2hS4VzCaAsz1f8AhczY2F49iH7NRH8fiTKaproodbmPv8aPiFpbeFgvEo7Bfxtyhot",
  "key8": "5NZoT1C9q6viXyEVt3rpF4wokT164mGzTSa9FBSAaKhrYQvZMMA49eqWCok8zuXXKKH38inDX3igJYZ97SxWyaSE",
  "key9": "32bVCfBNr4zJ3nbdj8XLt6E9WfhasBFUYnCpu56pBX5uTG5N85JTL9HpoojSsfoYjKgTx6oXrdAangVobYfBg162",
  "key10": "FayxwgCCBoveKVqTWXH6UGQNSaAzyd8SxfMVVLWEKT9zfu6mu7idYV1bCHfmXhkr8N8ntRY5RLPca62rreKVSWM",
  "key11": "4pAuyLTrgEaLsNqKTWxqzMeCxNsvkWM5BhdRe5vwzw2eZqVwoYEkodNABZChwcXpWDDGfJuV5A6HewRaSrpByjwb",
  "key12": "3xZCpJcNRhJnNxbef7vk91tExXmVEwjYvju3MrFei24f55tVo55S1JM97oMX994sGREFg82WoXrbtq4LPVS6vYjZ",
  "key13": "3WK8RYjmEm3wWHh2u6stDwnqauVBdkkMURZ2zMf1LpX59mG2z1aBmanNA6Rc6vjKxjxMYi4a54ajpxSYVcShV5yK",
  "key14": "P1Jdv8FBs1WtHCy29jdeCoedZBpHL7xgyx5kBap3WpuzCsR4LRVf9wzF3FUMo5Gya3KtwomFSQ9W7oGeqeEemue",
  "key15": "3c7EyXeF7vHykJC2Dh5LKUtjhvQDkg5PoBwteWcX2MtGAAYLSRDQAaYK3wm6e1caw61MvvaWfbNDc7642hRPJirS",
  "key16": "Ax2o8BpbK5NcPGEXDhbxq4kx6h9BxJGtpHFCx7Q7buxvQ4ptUfB14AgjSdpEL8cem3bMkeLi98UWDJyLgbDo9Yi",
  "key17": "3sYjietCTdVetuZB5K3rcve3NZdpU7cg8rj4H1NxzCK9sQDGkTw6axMLjyXAKHkeQTbPALHE9arKXiXB5NGZYeC1",
  "key18": "57vepeNtBkLZgkt2hZy5vnLuiqcQsJ4z7Ns6H2EQeWLnXucurSjhS8pyTKG8FZV6khFjr4U9GfsbdkXTy8sHun87",
  "key19": "5fNwjv2xoDcKhxEjKDoEgyz1Pkg62ZVB58oDVXfeYbibt1CYVCTUsx8US72iw3FwQPyUVEC4AxTz9TBeZFEbKQao",
  "key20": "38XSroKCkmSzVnfzKyuUYRdd4uEBitNC2TvbTY8ivZR8udDvNWXBzQHj8pAhpQqosa5LWVW5e5hZuZcMxDzznXEh",
  "key21": "3ZP2uvXGG15ufawqVTtsAZe7SpGLUsj4C1FE4vCaTDn78HCv3dpATgJcdQyag7mb3U5T4DfGiH2oVkkAdgYwL4Gb",
  "key22": "9CZNmmjV23cfowE6wtCLUpFNSGX8tEZezXzPYhVncqSfrxdwVZGdXKcWYp3ZwWH9g5rX7fWx35wGsNUcZNZowhn",
  "key23": "3QhigGua3PnVSKawa1whgChaL49DsbdfPpwABKQnrokH4A5Bu7QUohVeYFaiWDeFEr7sFETGD7WazmfXibBcgqeh",
  "key24": "58x7hzaHpnUWCE8XcBnSeZJFNEMg1ZCt7TcjNKrMXEjZG15LhFdpAiTWLTgGq84zhyKoqRrggrXqdNX7XygX4zqn",
  "key25": "5Py7aY6ougcH69vzkZXs53XbPXQaS5keVwz4mLCpZGrV6G7yF6cM7RJYDRDpPtLXw9EHBqg65BAbAZDLSv4athS4",
  "key26": "4buBdTQtkYER1jFiuET7YkwQj3cncsF4PYugjKR4Q4yQKY49pZKpwzF9Rx5XedN87UNDWA4NKaU8hPstu4dUtLzK",
  "key27": "3y5jxmJTuF9n88Nb6gzYiPPmUwc9Mvdc9iYJ2KhC8P3Z43cuE46VzBCap5cXvkZgfiH1LEn3CRgb9TcuieEf5UoA",
  "key28": "672u3DU5ZnuRzMPspHvEZZRQEynzKy3WATpLxcjYFwy8AoySWx4y3BdURUmtHztPjey24tMcKWYksAcCotrzC4VJ",
  "key29": "3k6XkjdvZHyQqU9PyvYQprj5CjpY62BfBXs5nBD7nWbZy42TiHDxo41cu5xcefE4kxgCSJyHPm9skHvCwDD9NmbN"
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
