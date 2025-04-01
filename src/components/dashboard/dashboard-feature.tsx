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
    "3GscdCmVmwh8Fpkd93wRmuQj4tb5Ygg7x9pcZiyENZrfRF2fBisetKDu7kAqLV8q4tjKJAZJw3qP8Cwx3PsD52WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vjzF8k5xQ51kikLGi4RQo4LeuHKoPxxywdTK6A6E1zm45hRvz7oQpiZjrps773w7gju3ikHN7X4GqqkiAkkG6Jv",
  "key1": "5cEGUqJWMQCWrtcx8akycHDDoCSjCJGgz2eDnQPGVTDkuMsoxjJgneF6PJASjfjudiNJMzwZwbjwStSkKiqwiB1N",
  "key2": "5BJigsu8FaqYJievhBMNritQdsi71uFivP94e1D3SyAQujTv8tP9ZKKBkozvqPsLKHqBWDXojuJUKDzzySiVrBv2",
  "key3": "3cQKqUT1RDM8DUhSYnMLcm8qRXqCytg88CMhFhRkj8iwEeQkCYE69HUGQXhrkCvqzxtUPXHdQn46Dpf1AFTwyYQf",
  "key4": "cGhnCvasUKjrVsV4Tn7MuZQNMVTDH7FUWLoojgmm1ZkCKxFae5LjPBvz6gbkTXpJuw6kpqDF7nEze9zpKiGbwG6",
  "key5": "2iCrt2rgGywCUiHJZxim6C5XMwnUQ9vYvz5G9RxGeTaixHnGNobwYmtahJkRZYkVPNo5pGC4nR9rKKFcGcg23sQ8",
  "key6": "65zaddXCkWwXznBVzhLTHEDrF8ftqmbMjL4PEhLjboQxK9cTH6vG1sKznnSuRCoh1Lk58NxyiRrwYqfbQ5xW5Y76",
  "key7": "3C9DUevtgURsKwnG6LHFKeeG2Ku7hkUBMKABqxMiKxVoJqdZj4iYX5wSRwLbb7KwL2ooZKwfBWr63cdaERtThPAp",
  "key8": "4st29ngZ7FZ9M7cGgUaRDh6maQPsJMEYwyuVfETjRvbT2cF9hwouPAwpAZRA4MQzxDdJTPTeuNKsPZNzSB8haCBk",
  "key9": "4cwkaMx3MYW3GkDqGChdiJixWbyTQ61TDf2GyqT1VaURh4C2eNuGxwVBwPDj7ntredkWvBHzFLqtAdpv7Gw5Fgy7",
  "key10": "5Tn8EwAf6es9L9QaxUAfuNqAYLjMt6bT6kpzPWVLVsartYX7E7Fz7j5iJEXwyeu8Bh8go3bkprpRxTfrSixtR1m2",
  "key11": "4QkqXJyWEPWWm5oZiHSqLMnuUBTV22Uss4Km9eZNZXxkNyFo3MShzKtoUv2CztFZebfMpZjxiaQoCQ6CtEYReXzg",
  "key12": "3pTy7mVoQcVhLjMXN22i9NrgKNB6Rk3uigRykBzQzixAYe4HDrV8iSMjUdnCpWTM8bjD8F1Zj9FS8k65aRaj6rUP",
  "key13": "57SvJSz1kgrBUQ8sxGntgRUnPz8S6h1F5NjuGWTwPRAX6HS9tN8LdoTzhbaXJLqbsvYTQSSYz7rytdbsPSnSoDZD",
  "key14": "5ev2kzDJNudNzghBdU8y5X4VqyDSN9VXTsYVLjSm77XWJoL6v12gFBz62cqiapp9rsyFDSFjMPrhz4y52cN9wKsd",
  "key15": "5VXfw1seXezVbVj6fuZy4vQLMZWsYhGeaDKWkXHSfofs9GntotG86G9cv49FMdYZ3eJDhiMGtFa6z8RCoCiW8Y4h",
  "key16": "5Rw7UZ2Rf3gsB8oAmXonxC34pjyuFDR93mEBmUQvzi2tzhSAUM8z5WxC4oWEouF6N4E2kbRoTq1fuzc3TCLTK2Ab",
  "key17": "h2kp9qqyo8p8jxsvgaYMUcJQaLAJfad3h8hnwPULjZ16v7MouxR9qJUf2bWeuF7JvRzexCKqW83tM4de3xnbuJ4",
  "key18": "5tAqs8s8Q3EcgsJ68rioZArZvH3X4JM1PtvjBEgks5KLr1uiemhG1KDTRjhbQyv4xFCqS4TXQgr1aJsR5H1hTV96",
  "key19": "3qxjWSw1KKGwaMpFuQ54r7Gb4WuTA1wsjHNy3LA6TSywC5EJgBmKgmv67ce9b5cFqkx18txkmVLzPLi1dRkvDiCY",
  "key20": "2GXWF8TB7BryhJHc5jvHFXXkAA3kErSvB5KQr6noNUk4T4Nd1vcKr8gyuGKGmGErfKhXmadfvyeXW6THdiFb9SxD",
  "key21": "2G5eb7ENuTQ4xXaPbfNqqxCHeaZ3qZLFzcgjgywCvNGka8svxTqXJ2u8XJWmBmty7zFDFrohhfEEWgeb7Aah9iza",
  "key22": "4mbtYeXJAgcpREo1z6Gj97on3NnSYYUDZBBBHnyyogyBDTg4kgAuJ9s7Vr4gRLdXPXZRX5TB3krpEZMQeG9CxFSQ",
  "key23": "4poJ4PQdeGU2Z73g6LoFrTwGPTYPjCTSQN2XBM35QE4jzgS2GAVcYGjeF7NEFR95HwAiKdMy86GE5h4YBCwhtpJt",
  "key24": "26vbefFWKtdC2ywbditLSDDNvC6zKvMC64ovXLdzcPpUSwd1f2bJQLvgZfC7xWhaHt6g4SYiYFLmgk2XWcNjbC6M",
  "key25": "38gxADA2yQfVDFRQoMb8ZbvS6j64cbjGtjcJMt1Lq7gJ7yNnjNNLNK63rvMzykYtZW7DeRjV14s1YqzSqLt8snKc",
  "key26": "5ETxsn71EhjMNnpDSpdBRSKArXTApTpuGWYk4p6waBsjZZSFdwbpHgTwLneu5JPUb34d9o7yFtL1Vw8P3hsZhiws",
  "key27": "5eT12ELzx3HepUU4TAsoSvfUXiS54vvGeHp1hQ6XrLfYYXA3UThrsQsLz9FkaqUKHzwWKtqK4fjWis7CnMjqRg5d",
  "key28": "2H8L281XchG7atmUT6YS8Lw2bUzPr5rUp5JTghJv7ZvVoaoF54fUNaTwMqD15DYDWkQ8FJFBogSuBivqhLJrc1Gy",
  "key29": "5GSfyk4Mx6uBjPi1ZZ3yYENHinmveXmrwckbb98Udd9uVSMF7iW1ZK1JtyUJnz6BuRTWR71AktPfGb3xzF7RZG83",
  "key30": "433KyYA9kr5zcEGDJk4W8i6u9msEGXB4Bh2uMLM5dpi7gKiWdbHVDFA9Q3tdUeviYUro2G21ydJJVW3cfs46v7Mv",
  "key31": "3JaRMKrgVVpvy7gYh6LQvbW5gUsdFs9UwrgQqMt1zbehtPVeZbPte8e9rDdKEMfpYi5PhKyh1Fee6fs4K1AAZmM",
  "key32": "3XSdyAfq6xbdDFEDhCLk8cLccXNfSoC7MoLLCp24RW8bJvW8DZrwxDVhw7faJypakupP6WFW3YS27esrTuhUqDUu",
  "key33": "4tCTSTM1WU1vJYrSKFxx5EDXa4U3zjQ2sG3Ed3YUN5hAZ6s9BRCbwHDo5SsbnCkVYVUdqSv4j9jLTf5kVxMpvxVm"
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
