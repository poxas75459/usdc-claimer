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
    "65HiU48Q9Nz8Apz2f7q2kMeTsQogjhBxt9gcnnZDswG2wjrvcdKC1b37L1HqRh3e3wHqRMuNKZaYqHjWoXr1Fagj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDQTjnHFdAy6R8yj1cs2HZAqVkYha2H33h4N3i46tN4gAhAGxiezSUUSLkBubKSJcYsXW3MkwFUrThQAQJcRhQE",
  "key1": "2NBQKT13JQ8kkBDB2Y4rMt7XFUGD27aqEuK5CipLNLC4JSBdubjUnsSRekD4yawoZf5SxoUqatToL7mNXD3PLNvb",
  "key2": "3h1QHZHh7bA39p4PNDQxJ6iYVEWVmz69Z7oT7QxJG8S39hcNuAovY5noM3jqpqaiL3vFL9i4tWTBT3hRafgcTKpb",
  "key3": "36qsVVgUTaKL8EiagwXhBJuvhyLC5gRCTY9YgseqyHFH9VRMAjJDM74z5amWDVXcB8iUk9Uv2orKXkZvJxALr9Jr",
  "key4": "ABH83gHkD44FMdyh7SKR4DqgLJF2srv7oKKdHn2w9EBNgrv31X8tKt5hWmgzoRK1J7e8oMP43anoPCKRpNpTQJK",
  "key5": "2UfuVafGAHjqWgaWjhq5htywszbcTwppfPL11R4T4L1KcAvPhn4Weo1DaxEWeLEQsP9ryJdvV3HbjBpGxXHp2y1c",
  "key6": "yeJoDik17FVWoJ2TXYhm7GGJPefwGYXxCzD2rceVds3oQ7Ltgz4jNhuv5v52JF1hpcKLhvoiALtGKARzKUw739z",
  "key7": "2uyLAkhcg9Btg7DtRiVab5gk7Dx5ytU8q9MbpT4phPemNAnk9AwsHLRav9cB9x58f7CpVg98z9CxzZ9k2xfq6pHi",
  "key8": "5acUHk2UzjfSXMvVUSJGSj5SWq7j78AStoEE6wcqWmCVDMdoekBFjoFf5UEKBG5pSMwqLSwVPWzkqgKDJUhjRNzc",
  "key9": "2t8VVjKxMmspcWXNrGdhZUZjRMtrKhDr9mQLv1x1AJAfhK4UHU9tBPwXkKteUtyb17RWfq2BhZ8PHCVjXSnLUQvm",
  "key10": "5s4rTUy2zj5j34ph6gAKxcKQqseFtx3tZ5QZa29djG5BrqKkcomKDKtYQDsrq74pYLXL24HG7RjDfAeWNyLbFrJR",
  "key11": "4vL96viMYmwecTmGN3cabSKq2RWMmgmK3y5G8vTfb76SjgHH1pugbx8mWdNatYcAS1gVhPxvoAhCaroYprMLRVSu",
  "key12": "2bZ81b1E3pFjkpgvCSY9fRpLRPoasiBRYdnArqepnM37MGidbwb2aS8hFA4Y596AfQRat4J69h1h3EakooBZ1DvD",
  "key13": "4jZBif1c8TnXeUF17prf4QH1vtiYx3ScEYjiMoj9Aguy2QeURb2mcUDVU9BZKgtRGjVjyPvrAterJdjL1axDstzg",
  "key14": "3SKotrUVkx5VZxG8UeD2MowgtNF5DvErFB1CAaFFEC2RxWjEyEaFzzDDGnfrC9DHt4XZ3PE15ymqBbN95tkGSC6x",
  "key15": "2ySiJxDKZ5dyAfnEfPH1T7zHCw7AonCgNwLmg8yUEabp4i5caGmf6DjToAyXo4ZqPVRLdhRusKUmtswPdrKWEes",
  "key16": "4QuTtQ6AV3u5iGzNJ6pw3bdTiDjvh9jLrnj5Kng1uNuwbYBteA7P1yvu6A7rAY9Wj2mb45m5Gxqp2iW3GnMkiJpH",
  "key17": "59ke78wAREiFgvLiCNdGg3CiMek9NUestJnytccGhFKW4TmrJs6e9kiVyTarRGk4UScNGN1met41WzxG6Ynpkw1b",
  "key18": "3XpiXXMCkZ21vhSfJPZBWptrSpMHJWsEkxV96D2GvDMYZUBEzwRj3fSL324DeTrgSVSmYrcUriGpj1sqfj92e3gu",
  "key19": "4XpBTn6mCvagSoBAavnpYVL9A1whhZ8WBzMFAqeSUutdAft5tSn2XSJ7MDP5vxbcwQWdf7oX6kFhtw4VsekBkkmQ",
  "key20": "3rWCn7DdjjCoF53FQvR4ANepVWFE4F71zTmXpEtYHw38QyAuBUvBYrE28ap6Y2bJC4uvLUM5pxizFfVmxmQHUiQW",
  "key21": "2HDayZrkaM5nTXP9crEB6cxhjLiyC8riAChso871oQm6kwA1QTk11D89bMdxUseEQzecDD1jHcFSLqhoX1Pyktt6",
  "key22": "5CCjDHDw6jq7Sq8ua7FJNLuerLcU2i2jXBm2fSeqWF2dHL56YhfpMBYYAkEM9Fcm2tujR5DfFytkcqA9p2Y5xufv",
  "key23": "4LAc9U9TapiB2mkfaBcBfG5XNncSogeCqcz7VZux4BfFQGPjV9CqSaxUMz477D4Y3KKraWX567oMDdWxVtn5QBVY",
  "key24": "6rPSeT7BasUhipyhkwiCyVMsarvMCBbdtEPAuoA6JiVa9AVymoSuuRnptJrKRQ6co1aavfuddFWZP2apEJzLEXH",
  "key25": "22wpmDoKadAtpEJEd1h5hhAsN25KNUHiTjG3V8JApSagjyhXHi5Br9aoQVYkCW5afzzN7Px5ZMopGa9Hyk9B8jdr",
  "key26": "AD9qEmfTCJAFzHxaYcK24wDRku89E2FE58yVnCLkRanvqBBtxgKXTACpgUEfMkcSMfGPqLsECnbhVH2ztenxMoM",
  "key27": "4hBJKdq9Kp4DF7fSCVsuVJoid7T2u5YgxE9DnSBmJSGPRkP1723DRBQzfp4UKEEBNcWk14pNsSyJbrxw2YQJyMFN",
  "key28": "5UzUariHPhhSMEFpgEVmNTjHfLR3d3WMYTnJdDbdppaoUxi8h6VEhbe17UJcHDgpPAM5XmpQZ7pwURHGLh353845",
  "key29": "2ZyGrzfmqBNqKgZygiLFFvy6DzqBmcN5iHd9xxNkMLRD7XuxNHfXML6aNtJTxToLauwqfx7GBT65PrChGk9VK412"
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
