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
    "4Go2mb9WVmpF4vqnpHHtZwdrnPJG9M6kBNazSQcwmHd1AMGSqM38aKDXBdq5zdqex1TcKyc3GycEFe2Kig56zm7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDmU8w1oR8ofcoBtrfHZnM6ZMi3hCKAFogXHiL9xfhYrJ8i1ypNZi9NQpbAFENqydnWfdu36gEsYqwKzzE9VwE1",
  "key1": "65CC8gWyBTFTbF4BFCxREGtSKWDC6YP5RWV4V3eCa8hppF8jgr3gfPyWFcfQc3eJL9eZvU24kKMfWM6VnTDDfjyw",
  "key2": "2ZBzN6fGesG7QJd1LjpFWFvaN89MDi7DMUTJYH1v4jsttRdK78KXko5XrQA6rmZxCJsvToJb1V9cgi6wD25N1iWT",
  "key3": "2Ta3feCBU9QVLT78EsFiDex64eq5MbPq1sFJmctnssJrGXX3uJuPMoeaCUPJNBvtTMomgQ9x8wA4w2t6YSsfByod",
  "key4": "3sRZrXYo14SopG3FSs8h9vZ2rHK6QfgNMGsStxtuv1r39Uejy3rELkGQVHF2GwUkmC22zRTsi6QcnNZwG5Yb45vN",
  "key5": "3wzbcT67xyeqL4Fkihmc7qyqULqQbgZHYvosia8Doipv157JDbb2TZSmsUVGFLooYUiX8APpsNqkaRboNnhiAVHC",
  "key6": "5gqmYJnhGkY8kwZEixhHGzVAJDoFmvyBhDPrpMZs7zRj8pVNT44BmrbiKhtfCNFi7U6WnT2Ci1QXw1Wo3HUKggyD",
  "key7": "2ihzpGmTKHg25p2M5Em5KHC5K8H7v6QnBAza75nNXPQ1ueZELD5QsHFQeCGi9kq5kM57Kg3tKTGtTP4GASgVzPXq",
  "key8": "5pCTnyPpB2gqAxQ8VJqTPHNEvZqCKYUQHGpam6MgJ2QfaEFAW3x39CYwMjb3AfEN6hP2VRaaqQMZCYpuW6FsZhYA",
  "key9": "2UG5sf2ng6M5EQsxizD7gqCTrJH8xBugqMNNp1LQxap95hztYZKQYyBxqppcYWNPVGwTbmv4qgZYEviTnzbDezDF",
  "key10": "5vUmjB7J8WJieBEmnUC3H8vXBUFhPhmJFx1UHGDqvzcNnNH9BjvQs4VAzMXoskiXDDCmyMD68WWGA5QiWeNn8hwH",
  "key11": "SVp2JST81kQg2x3ztkRJ71fkoko8D3XYDpr4NiWJGqd7BNowCkAu9RLczVnfGJkndH6ciw1Ponp9f3GdcK3hGry",
  "key12": "rtm1LX8hFUMhWwKDoz4Lf7cfchrz8CVpdWCT57BG544DWdAbnz2cu5AwJoZHW694eVwX2g6766yTpMz4XXzu4GS",
  "key13": "naKBXhkpMkiJ3CvxvdKA4dAwL9QVnNjJrgXbb82rgbzGt2TLCJs8LCfjJ8gw7JJXk1AUi5qTzU339E2KYo519TH",
  "key14": "hMuQKMsiJpTW2jntxEZjMsWEWW9mcun8sUPLgaUKoXqAtqF2gDGEQDqAuyC8JhnvKEpbR99SvGRYH81CmzgdYX7",
  "key15": "2BaMs9YNmskdGcFSUEpg29RmCt2NonCkNhhTnMsb8HbCR6M9Tg1PnLfkSSYqDWhYTW2Cq4YyKPkc5LJhRY7DLGtB",
  "key16": "49uuz5rYpWu5XaRmjiGY6bV6YeWDAoRptnH6VPBx69BMJUPQ1ZxQNBhYKfUirn29GyFpbkGHJ5xoA6itbgm8E4zL",
  "key17": "3cvv1SS6eWEHQit8BxfC8yxQToyZBCjecDDnSbzRbZ7Bz3AerAaxtnMPDHUyRNzFzAthUjBuPokfsFBZAS3oesRd",
  "key18": "3wfYzJQPE5TSqvpkLisRef5CuUFdvNTYFrr9KWrxpM8pXPxifYKuwG9nc4xTUVAze6bQQmW1StRc2VoN6b5nnXmX",
  "key19": "5Qpb4TsACA1RFmg52ZTTboWpv1qHLwq6X93novLxZWyiEW7fdp4gcCeoVZDReybXKv1ekEwWfARS8FUSzzUXJ6XR",
  "key20": "4aPUiyW9h4crLsTMbVYjqEfRgtcf9UqN2geWvvJF94NKJ7g55yk3Aj5j2ifDqpdDjShFqBmaxTEGSwm6yBoQrHHp",
  "key21": "2D4mFQLCPcuo6D9e3xXS5C38eKYiDEbmLTpdMpFD1AsNBfehmrChf53SYBtJCdbivE7E1x5H82Jky5wH11ncJxxU",
  "key22": "3XPY5EQBXFhT7huKpdJDqerohhrB46oy8s1yGZ5iJfAXRPjFmsemVFBvGfxawv4vsXQi5rSZe44Yy4mJzDg22WNG",
  "key23": "5KCJSfrkCM9CefoKHg7mvppHPMYDpNyf97VWhQh5hkjeRNXm8JzUAcu5CST9UDWxkodnma4LGwCs5SL2qQDWixV2",
  "key24": "3ci8ykhoTsAbdKbzZNQD4KgJ5VmepGvAEM9TxAhRA89uwmQnMtk9QkQ8pJmdhbGT2YFYZeThJhe8zoqobj1XqomJ",
  "key25": "4fN8qUCt1Y3Btte1EWxi9nvGQFfFPb5QYT5x4weU5bHRotTkxkSWyac9hX2PfizDzUu9x99Xu2hFM1sHBRbUrUUq",
  "key26": "2AFuEcvhgw2dUwym3GWqT6bFadEJDsg8ttPxxyyoc8GPHpPMhRHuwZ3X3RrWedpGHCBngzHsCoFBuaWAHr7XbCeJ",
  "key27": "3tXPWaxN62wQtorhGseVw5UVmYisx2HkTzod5fbGbXLqmVCSQ3tihYZpXnhJenGPvr4QqnyfdxcTepwbeFCe6NFA"
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
