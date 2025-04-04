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
    "26PCAK3bD9mYym7fRZ7DQpvyxQKCuUaruAiAzzA7pMM1Hh7y449hne8PpgofTxKHoNqmUrpMzs6EkxhNkiAnL6ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gbnm2Qc2Dm99ZCmLav18iDmTikE5gHPq3kMnd3kB989YFH3yoZRYmgKaxSbKcuyg1QNLUxaa3EcqcdvLXAJuAcU",
  "key1": "3bR1J26Mu55MPSEc5Wv95Umb2JcyrK9evpWgyUvK2XRNwRNxqPN5vNuVhoAWYBNfv9ZyxVMvHVUsPNo6mwvptNnH",
  "key2": "3zExhYce9ebuxbhrMuEoCzhts4EJqhZm1yxZe72hxTm4NDnV1pdUMULdLMgp4C5SyLfT8Ciy3HxQyzNXh7ZcQkB1",
  "key3": "4Et4rN5Be52JLUsKQiV33H9AdM3CGRojXHcfymFvdYzVU5mGusTiCFDkY92WZa57SZp4z31va24iyNmR48T23nrH",
  "key4": "2GhnyZJMpFiw5GuBe8zkFufdxGh8VAANwprXn1pSGYnE6xk5n4arFC1uRcteFKAgCMrzFzdP54C7rRU18EqkMui4",
  "key5": "3pgzK6on9H8sEH46kSWeqYPQWCsHmkYYJ6LKizKeo2gHgaQFpbJb6u7xwJTMmhum54Gsb6XahBVcyLs4FMqw86rc",
  "key6": "fdSU582eZPeUJSosqs516DjFSpSExT1DQXaLbaBU8YcnAMpi7iapyhNetNMbXPjVpd3xNFng3fNSk5eing1Q2ZG",
  "key7": "48jZXQkLgferVj2i9UYhx2htYB7GWBBECaTzGJTJZMRKkCiMAUmJp3E1Cr6GWK7rbxkSi3jcWc5cwdRSRfjHEbyy",
  "key8": "FbCMFcfpP3sT2jiAf3eN3GR7WaEwPg7rc6AsVxxsuhpWiEuqQxBBjnLM1uRG4uyJHsYKApCJLpEryHQyPHGCCtg",
  "key9": "3Yd6K3Z2zA64hE6qahovaycJNsNGq3pcsGQThccfKSM2wtAAdT4qeVfzEzWhsftBouBdN732p8Y41zGDKSrLfS2B",
  "key10": "49FYKSouyR2rDFamLqe9TY84y9f9n2yzVtoKnuhSvr6GNbRHMWLjiVPgaHjjxgcz3RU3m1RmjTd4xxrwy9iKBKmu",
  "key11": "3R4RsTXyzepHo911dvSUP4i72XHv7sGCwXnqxHH7ashWJsHBUFfqzCKreBeHHEYNimLh1zYVu8f4UopB5vPzDgpU",
  "key12": "R3MmhearaqEbGQcSeupE5RZ4BMQPvemyTFoMsN7Jf7WUYbgNcyueWjnp3WGASfpDnVPsoTKvScoycGPy3HaQf3n",
  "key13": "2rj7XWrUEWqMw7AojSKVCLrTWRfyKMEMyt9bEXJ9tf58zU1ThV155MXkdnPqJ6ZuA9mjGDuhRHHbs1xZ5TDSAXew",
  "key14": "3Ra6axMsrJuxJz8CBCMUf4M1e86EpHh6GYrHrKB9fVd5TAdMA8ehzczHkRtYihecmPjTu2NvJ7PgLaiGdkRs2ubh",
  "key15": "3HVmvXTPLPsSzMWg65V8qECHuk2dAD4WbVyV3k1HMCNCBAYu5Han1cxd43hhfCge4pq68mCH74bFaWxbDt4Gy6LW",
  "key16": "3LNao8zgpH4BMCbU35Gsy6stFprHHG3zJJL4nJmko32fFHnCiYmea8KD9qGMmRuxLbDccZP4WpYUKoP2B61vyE4F",
  "key17": "2mGiym4Ck8D7asJGzA32ES2LTuDKACWAU68apzxBAPxv4ZybTpxCckHNqLdFjveA8BCcBPhcZAMpagrSLjLipqzh",
  "key18": "xhLVKJgmZwDaU6fzzjRi4pEULY4A5ydm8hCJhSyRLnELoWdrghE7fYPYs7p9kF5zqVhW1adEK5ULT2nAgqUjWvj",
  "key19": "3PwPMcDGQEKWQoUGbP9BVRhAV9yz7M2jyjkymemsqdw1K4VzkBxaWjZy83eChNuhTNLs4CTgGZqbTnLP3XCDEUUD",
  "key20": "4C7BTsz5AukZk7YNwA8KeyiVugSTB3Awh9Q7cSzs2MkT5jWUfDovc2Cr8Yzmde4jGbF5GRLDyMUK5q9x7rM1xogt",
  "key21": "3FYW2poQvJFrfuYhVYSQctBNkx2p3kVfhrbL7RPUFu85wpNp4jyKKFPCYyngzKpVbozpSN3qWTzMVKRmAskN9hZ1",
  "key22": "4QB8txTtFWq2NHa7ubAUqHLD7VUHbdVdfo13RtB922Ricajh4G55hp1jaE5s6V7w1b59xv8KDpoNv85bHykwK2g4",
  "key23": "2vkScgqVr6pibHkdfy2FcEYy6mRDchFf8TarnLi7dsYwjG2fPyriJ1Utiw3RqaAZTPcTkazYeuHtAsrHwAtna7k",
  "key24": "i1JGjtkCTHmJKckLiSVtw8at58ULrZLdgSZjAcWMfBi2dqqaEQCM1ZjERBVa96mavuwSJLZ66QamjnwZwfFroS6",
  "key25": "4y643xjdQ5Vz2HCVyeiE1Emp11EeasFoA6qfj9DGgMdrtcp4SPzdFfBHLgmxt1DbtgvedC9pA28GNfYRvQG4nkuW",
  "key26": "49XTbxbfGYZhDwtx8xNr7i5CYSbgtgdR87LNwGw84uSjRHGjrhsZYLdEDu6DkSkMFpPxZ2BjZJXZs7FRrWzo3dx7",
  "key27": "2jYeiwQQdKaYnV39CLXeZQJ4DzLc3XVegvvgVERH4y6woNFg4KSxeDY4s6QjgJFygtkhcgFRgNeHK7XZVMnUVYjT",
  "key28": "d4Pn5yL9KCLGzAYKg2g4V2Bky4dHNV9AX7t8osJzVBTzBvrZD7B9Vsqpgy7mozzTN4wjk5VZdM7JAT3Ut5ed136",
  "key29": "4R9afaW5iR2HTZiNUSg1TiZw3TgFgJNctPNZtGGPgedBYZfznuNeSYYHU3AXUT4QPwRQ2yZWRLvnrxmxRixUxvDD",
  "key30": "DMWSoPP7fZHyEtTTV1T9iUDutKDy8jNe2L1Z1D1SGavTqojxNqRQrS7PFZTZs1ZAN7HbEUumXFpHSqcufpNhQ2n",
  "key31": "5W9jtUG5RB1UEyWTmur8DJKizXhBEXjLYL7VFbsi9cJPjpixScREZmX8haE6kygNqqjqyL4FmrKVA1co1Fsivkod",
  "key32": "35SKfRtf3ZvktJ54y8v8GZpV8ce5m9CY1yE7EBMVHng7EhSt4R7E6hNaxVXJkPEGVBZAmfVGc5sFA8omaPR9PcGV",
  "key33": "5aZSgDUCQwynkUQUmEtWp4hHzeNG29Vv8nXj9akoMFrWvANTBJXtKAxeKzpU2M7EQuKVkEyLKxXv42TGPpy82XJQ",
  "key34": "2HsMXPAKV4iCSspMwMDnxo6GqpUJg1v6oNLLCd518u7tHdQJTomzmXvU5JXjRPy9SnvKyQtRRoDghYSnYaCvtSw3"
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
