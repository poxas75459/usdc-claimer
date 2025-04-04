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
    "4yQtL2jwtJ6yhowWjeHYJ76h4o1GtPGLW5uiqAyqX7xJAN6CidxJfkrrmdM1zB4JYhU7Q9an3LvrnUvVXmWTKWzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyZAWajWZg81EFpU7TAN5SJbkJxvYRS746BATwsx6r4sZd9A7A25HvzwpQJJZXKqkaspqscRqgX1asB2cAJMXST",
  "key1": "3AXk1en35ZR2ckfiebM9Pqfzu83BtjRkTrc53NYpSewmSJjSYiPgL7Rg3u43yw8rQ5xyTofHN3mtTYMXRMXDKV2X",
  "key2": "RK9gtPmLVD7xfaoCMujFU1ebcnXVPNQj7Mp7mXqTn8t3MCiEGvNb6gTJEk4GEySwZ72xWWaSeuooMU3xsV8YKnF",
  "key3": "3iqTRYqvKFnYusCYRhPEC9vBSoKph1uuVq7yB5ubbk7GVrg6spBGhc61kDYvq25PDeqicNjCvXdLVjpjCdVGkph6",
  "key4": "4gzTJQBNnoDy6zZo8Lm3FAqr1L5RxbvCc4a15eorhW9RfGppUjayVEBoHx2QSm5mLXLZfQxMWRLzwiaeXMrcZZY",
  "key5": "3sCr2jysAAwaoHRQcAfRvhbrLxysky5ZRSk6Nfm4uLPB1k9HNjjAcqBwvPTXFx8LsjLk5khgNJ5Qycf6KXgAy79i",
  "key6": "qVq6c355X69KEfancH31PqqzitgcJatpUMMwVQrztx2qCP6w8n3CES8PMX6Rr17irdpvGnhvb2ineSjcUykGVkG",
  "key7": "5rztCiJfCSD6z3VgYfuPp8KAigDrS7DbCfApfF7m3vBn46EJ7Jg1BvRGvAxYUbg1J5VCYNK7xRbT2bJWZAjD93xu",
  "key8": "3YCk9PZ3tqc5kVPKGsfef2dq3yCf4ibSUMbMFk6uhy26Uxykcy3xMye1zdQ4EUdkoHDo1XvUGtjGhB3yuEFGoSax",
  "key9": "2Dng7Gq6DciZwerqpMcSesaQArMGC6eeyHYYAfvFrBmayE3ycSvMY75yn5hcuR9RzUReXm9KnZW19D4Nx3xg358J",
  "key10": "3cBCddAH98ajkDjK4TS8mWvf4HZKV5jrc8TwJbNuu985tZAmGDS4Cs9pNcWtFkgp1j3k2uKiB3hDH7HZ6uzXRnbV",
  "key11": "5WAxbyeyHVjH39iPf7PMisrTAAzr4rk3Y6FDPQx54qELnVVSLuHmvs9CymYT3P6pLrZJ57JXm9oZ7dbQMc6ZedLi",
  "key12": "5NqDoMnBMpkcPzeKmmGjRpMTJdmzgGPuNvunwnAHZ9wbKYf2UsTgdhsezLEkFVrrtuxchzHV96Uz4oFEA1a15MC1",
  "key13": "2CMt4UgzKv7zqn1romPrtYngrPXMRjba769CTPfnXKrdqRBsen7Q7LRchXBsBBpZwkuxCg8b81749hTKw1vdiuMY",
  "key14": "4oWwAQ3tzx8p7qWrAAZcq5YuJ2kVjc7Yh5djXDUWa3RdfZi1xGEUM33QwUWAdQTDY8mMMen4nZAvQiD7bSykeSdk",
  "key15": "23TG7n3KHx5RXernEDcKawDtm6nEDdGGPb3TmLCtZqacxHKGZDoJqxy19gFx55vtCEDSEztLrtxCJiCZTQGY6Lym",
  "key16": "5WDaqUhNZ1B1nc6Kr37ZZEQprZkS48vPQ9AznJqoUqYov9uub71HDtCcNszcP7jzmRQyfDUuuFTFeccK6hTCkwps",
  "key17": "2qRVDtsHNrdNtJdJAHA9bQbxTcavyim484CTT44bkj9PF9uxrgvs2JNBFo7QdYqyrmhuK3u6JAkfJkkGmWFdaMyU",
  "key18": "3QMVK39i5dTK1vy7ietyKXPzCuz8crYojGz7YELXj2AHyJDngahpmvoeAnduqoJ8tkLKW1qwTmuMcs8FY7k626S5",
  "key19": "5G3Zqms8a9Nj9CyEXtddAg28vpsw41RsCNAicJkmajxMDxfCXHJfZjrkM4xSqFLAa5VA4JUmPjq4MZsGwt1EACEp",
  "key20": "56EZTndX8CeUEz37dcFr9xGL3cuHxaSHWkUvRMG4Nst6kD6X5sZbkSuaky8KhpdoTrTLmnDjgoxSMKfVrtZPuUNk",
  "key21": "3QgHXUSgnYoSZkU6pxW7iF1V8x5zAtSECYVeVdNVeXv98dKp4Hkc3vdznz6YhhCokjHAR5F2Sds7xnLjDrjM3ZRs",
  "key22": "46giU9Cv8juxSXBAPfjCnWduZVB5aCgmfehR4oCPnZxPuCbvwbyRcfAMMKVteDa2NT4JU9dz8NokNEh3W3ubC8PC",
  "key23": "P4YsPdzhiMUjJu5RDWu6XZzETTbDQMpDdusA8iSjozvgx7AS6NhwXNJcMS6gDfYugB52gs2a3P6Bcbw1BTcsg8C",
  "key24": "RSvvC3b2uZJyvj7oFACWu8UswfFqbzV6oP4Kb9Bgudj6cizc68hT8jQpDMGuZAikzVdf8PabQBpDUUgWjSk4Vii"
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
