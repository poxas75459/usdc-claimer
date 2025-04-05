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
    "gK2N1Zj38DpnM6abY8Nnkq2jSjUMKoSwngdUA6GRQfxDqbfo5om8Pdobkf1bm6C1CuHS1DswJWwueiJgYZswJWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJdou4ScJY1jtZKqQo22dyLDUkKY1HsY7B4GFrrsyn6K5Lhj6gXgGWiqBCQDdnPVpexXsBhDWkYUqsfSWEJdoW5",
  "key1": "3z2DDoBrsutJsGZN6JVvaHpbRHcfgLk28gF7gNReAnjVqKGfyzF1gaVBgyRSueGQPW2x5GPyhZ8rD6GoaV3jdk6h",
  "key2": "4YjPLuYP8rYyjgZFa6Bzyc9LoNRH7WFAimo3tq3cBEYBYPia7GD1zaZZSWFVrGiw1cgqDDpwHL6Z54VTGeSsPjUX",
  "key3": "4eWDHyPaQy7abaMrJZSSMM9tU4mCtekNb8oQRL2FdwpvhAjUzpkVcvfUCjN5KA1JP396kKggDe99qbwTJTv39iCB",
  "key4": "2kNyruyL4ZErttGqB5oSxuxuRFx9WyEkLjaejCuXPDD1ZGe9kdntuBtchoNT2a8HyZCUXkh8uoqXSjHcDC6wDcfe",
  "key5": "2jLoNh2xWYgyBUXUSx4D2kF3rFaizvUDgF523xCzBdKytodYbCUFHsNy8aXTQKadhDgqkKmeYAu3ZgdsrsVJE52q",
  "key6": "5DZ7pawtREKYJTycVzTq4Hwo5TsfhWsgATsmyUcdWGJGWgoyXAidcX3hWqMn6oRr5L9P9Hv762xwDkgrX7mi57hz",
  "key7": "5HeknHXWRLAjjoVXAvmatRLuEUjUV1PMWYmiUr5bT9FkhNsBWrqETab1TePCBL7eArqakVLBKxqDcAC3CrRHBe13",
  "key8": "5S4X1NtQqx3hTc3zuzJTepBZkEkhLrQdz5vc4qHtpgm8sYbGX5VBv1zGCzq8dXmFB8or1LbDNDEXfWxsAPk9GRA5",
  "key9": "2MYedu87zc4oPKjJr6g3oc2ECKmfM9TqyxtDX27GNRbFkoP2YcAFw2QEBivSxertXTYgXMqUuVjLqLKRx8PNS8WR",
  "key10": "3uapT4VVZs7eGwL5oHx4VKpNLVAsMLZ8jJyJCKomrnvpLkXkSf35Co3ZgkwhaC8oB1sxDwFAFWRTqDKV7jvx5xWF",
  "key11": "2fJaRckW6mq6Nk6iC4boTk3Gtrk6jV7YqjPaie3adUCx3DGE2Fp9z1LkESFBYiFGqXWi1RD3BPvtynedSbQH6i7e",
  "key12": "56KY5XoKmKJm1RMsAx6657YQipsTuGM7nn4ohQNcR7hDtdwBkVmWhoNkAS6jk1toaB3E8mdYEx7GXfChg2EzmSGt",
  "key13": "4H7NyX2eWJostJZzKBYFEdoHT7Wpur5RQfuGDwRz6gQNEm4R8yBn5NFKEuk9YYbHnoeQ7yo3ZjBAq8q8MzxPriM4",
  "key14": "2wpcqFmXnc4cXT1VmZ7L72wK9dJ9y9F9E9MitfPzGpYrAPiyesoQL1yCdY4yTL1oHxCcnKBAhr3f7cBxkaSdLyU8",
  "key15": "2c8seQLSQthCiy6NY1B9kSxPnz2u9aUBMNLpupYo5FHj8JfzsSPU9e7sgb2fFvaYk8fGEETHb9VmrujC1Wq2cQpb",
  "key16": "eLrtJQWRjLyR3cfDuo4wnMPQ44rFUiwhg7NJFx6bCNEGXA81y3XGAEBePM4UWWjpZy3VV9kY5jjERmX2xma7Uw9",
  "key17": "RizmRqu6cWrAKRFvSaiQUtwyrkz7R2tJQaEEYzFkuMrdxY3kX2dcy1fjgexp8grpyYbehdzJJyXZmExym7wWmag",
  "key18": "2tCSkAXSczVm2tAJhEL8KRzofc9UgbKBe8KKyHqYfoHVyFhXL3KYDrhmF422nCJoQgCYcyDjp5mQr7YxFGc7jcMj",
  "key19": "24C1ghvWbipiDh3SwjE1fXikQiXZZDqxDXXZR3ErTiFsxdW77ZcR31uJNXGFx3Nrik5NjMYoL2M3HDKTQgRckTAA",
  "key20": "45psbdpVRdsfkACLxjpepBHjjD934Le3UCvTzFnuGLUTNqsbgbK6LmhNYgiK7aYVuWBYf79hFurui7nvmqRGchYo",
  "key21": "2QNBNLP7UaJueGn6Es5SZhFSyQ7Tpemsc4x5oas4XaCAhaCMfnkZnZXRacGsxE11LuH6RgPtXcvYZuyQDrR2M7pv",
  "key22": "365jCpY9mCNJXZgwVB9E3v8qaRovyYs6C1XzCcEPLefxnY5LZFdbMQoseDHLqeRWthojdTnbJfzbYgRvxJfJUpHo",
  "key23": "5zwcECFUCWwnLYEbL54KV7NbR8XMHGEmnUvhN3PFpxtNfhdMow6ht4faE1gW4LPVpsK6VV3YoecDKqE4MqCSmMtW",
  "key24": "4GRecMk6WLnXkrQCxctAp4cnybhbaUenR1L4rWTU6LGv17LLYUucZLZ64yARKxMDzYvcQowVih8FbpWi95DebUZH"
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
