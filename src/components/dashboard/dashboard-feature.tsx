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
    "59LCS9HEunJNg4H5JwnB9XmamhQQwpZE5h91ukphXeis1DzyWSLPWXY9ngv3FShPjtGSG9XNjsc5nbr3n6teguAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dgYXhKMdYAsykv6GdEesd9uJgrenLEzA9gyHYdJfkZZ68dgbXanPcsy7iVUPjJCh4M5SKi4VE1dJTgeAMd4VVAy",
  "key1": "5kqvTU8nhQh9gphnM54LSCu3FKvDW7MYodcD3JwCeByWie5MBhTsuKZe2Xot4cHgWuLLyt1P6gmCTE6u7T9o63sy",
  "key2": "3DooJ4DdepNkXznwA317Fos4Kqdfex2AXuaEEXYeRUvRapoAe9ao7xLd7dsEVgPr463yPg9cEaQniH5yohL3Cv4f",
  "key3": "2CStQKo4KpWiXyHFi8vQHJADZodeaCSc42SiE2sv51hWEET9vAAnKdnAJrKrax8NS5pH6cnaxLvPCLvPSYmEdkjc",
  "key4": "52oj1pgkGShwN4MfLcqEZcLRq1FCrpLVtVZH5o5wgqWRMNqHtnR2hn8xTZgfxV6LGePM9vwZF9dAJDzqBM4Sowob",
  "key5": "VWqDvmAsnMcKFfbWyyw4dndKja7hfohztUPZSZCQ1hzPQeEjtePLXFJ3wMz2o3n8Smp1BtmqWCq9aw4PNkGCrFa",
  "key6": "63JtZSpHEQ51Voiop48zbp1Kb6k7gEuge8SZhRnLZcMzbHK1yroYabttYr3hhnyAV67wDZzZ8ii5qoZFfjCaWQuV",
  "key7": "3zuW5c7TB1fBJc3xsMGF799pbNLjiVi1bAJzjQgVtEze4LnTwtKQHhYu9AmwrkoBxLiHM4yNpHeZq1p8U9S9TyeY",
  "key8": "4ZFvDWZfHFHAxb1NokzDMqYdK4L5xo1QS2Kxd25gXCF4tn9VQ2H8tzG3qp43oL8qND17izdpS1UmT84Sxp2bpTfn",
  "key9": "5mXEyTk6cKgdg97fSE1shHh9pKxZvXKJRZi9GPax23YTYP8sFdw3hf76vzedbPqU5eAxwMheq1yR3Bvhs8mv9LGj",
  "key10": "5J7yEQTNQavb2TkL4PNKas2VmL3hD9L4BCKYEQgn6GhXGMhh6nzdJS8GM6NVxbGgM7HD4agDe4tGnbkwgLPweaU7",
  "key11": "5MwRhnD8s9WVaTAaJ2m2MGQf2jpWVWWSoD14aKUxuA4TqiRxcrfx69eRWbys8UEji3Gox3gWrzpPgi6mnTbbQ6kP",
  "key12": "szXMVmS2bPdTWhhFBNjveyBfWRiTFzCMQ1xMVKLU19g2iQEVnKo14q8nAqk7VinkBPixkSme26kCU7e9e1LGLGd",
  "key13": "63CF6GFq5f6cR8aYXht2ZEwUb4sA8TXF7DtWd5vrNxowsFryfD32r6vpLRLVuPw7xmZyK2ThLzGmooWbd5nnwVoL",
  "key14": "4AyAeZcLLYCFY9adTMv4YBFWTQnDviELtRaAhcCNppZG5Dwr9JRY7m1VF2eBG3VjPPwzaQvfpD64geXUQkvaMaQk",
  "key15": "3WXvi3Tzpj4wJQ4jfvXJZLeTJhbwrdbeg4XFgNeDJaHSLPBKBGYSS1tqWG2PY2zePRtZ13w4sXHyTbvQk2Hc8BUr",
  "key16": "3VeRZ7TfLnpkLgXaj6quKCr89UEcJNQqN3yPVzjJN6LDXCwQjYAzRmvv89WbVgeZ38xoBDsuKJebbBbjQG29yex2",
  "key17": "4H9YifL6VraoykDvn8DZ7BNtWiCY95xHp7y3YiTHmEYKRyFgYSJi7QRbu6K8TSUTURCdtFKq8DhjdjNREbpiCBp9",
  "key18": "5KGae2wWaswfLVLHu2aPZCTzXk3yTaRQCs5mbeLJo1bkEwLhp5vTzxxmTpG23yFLxP7rnDc1i3u8StdsnVkZ59jU",
  "key19": "44WeWNDHu8231ANng6fuwnAf2wAVzefnG2gUVySQzRSnRPVW7r3VDm4k1mW4PHDCSEpdw7pX1UGyZWaqRP2WgANz",
  "key20": "27LdosxKT8QdNxBEtfbdvnDRTaSAXL4jp9xEPXSmFHnFmTLsAr6GdtYp9iVRWfvCWchT7RrweQFMZxrMp1Zqz6Tw",
  "key21": "AsFbSz7z5waSYzD7eb2amoKnjQ1SDMb7jsdfbGYyzCyvk6FZeaSFEFEgsEqYgBkfYDm4VJs7dkjUKRCDisxbDcS",
  "key22": "4ALVuoBNRh1azWZBdPBUbbz5bKQKH7aDbkhJVKLgwR5ee9vzW4ddAGxYygjhmQWTSVHZKFGH5DBdAF51XreCjmuY",
  "key23": "5RtbMhq6m5TtL9fBXqqaVUkfwdgNC2Ax9mNR7DrG2LCu8JZpZ6sGEZuBqHYXjQzpSxRdZvyWze4HqWe6GWNEcN2o",
  "key24": "5dRCFqBsDVLcZcZqsh7DG73fTCUXjXd236eCWhsTdvpvthQxoXLt2v9XUuGXEhkcBzJMqqdDuqpd8LhwfiduoQuf",
  "key25": "g1LCbrwvqRXLvRcg7oWwzCndm4cmmEhwWX9fFBDz4RNRF9Jc5QoSzDRoQ1DwHEfWQueio2G7Qcpqnr5DMW1tVBN",
  "key26": "2oZHjt4FdpqaFJ2LSJj5ziZBku7QyTb6C4BPfjauLuMs1mBLh84vaQgW4k6yhja1eSAs6akGw9XVC9zaxBRPa7vM",
  "key27": "2zZAXh381LzBdwSzWbEwXA3ecRmWUGiB6dYY34cJSdoeuRRCGBFU3tsQPVv6Z53nTTg1KVVcHz1xe9fdCDKMcmrP",
  "key28": "VDe8FoaxqHdqAGaYoZvL7Pyy9atPxUrndb2RM826fbhRg86W3w4WzG6JpqhVG9kvt9rpNjQnfsBStd8xLXW33mV",
  "key29": "53E3QmxhrgjLzaJrxftaV4kyxmvuNdCXPZ22i4AY9D1fWMKMnPLD1aQoZaGaEdea4ZrXgv1YViRGAZ48TxW99z41",
  "key30": "2A4y2C4oLx9qmQx92t6LnsqSZHZivdvAF6B8ZRPwa4PHprX1pAzJMfUNGCm6BzFZbTK6Zpcq8FpQjtxDwyUtN1BC",
  "key31": "5HME3Wjx4z79Ccnq36PSrhxLyHJEjWmnp9rJ5bg66bULvUpwZsEarEiC8z15DgqiLpH1Q9ikTeD41Fe5V1wAtVxc",
  "key32": "3QyDWp8JPUshKrzkjBevbCwqVJVuEPWsGHZjz9D7YFdFhbREad17xSbXyLLtaDnGcGAQfNU7v95wKS1QerAYD3L2"
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
