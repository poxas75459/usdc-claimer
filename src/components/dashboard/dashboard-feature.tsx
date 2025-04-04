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
    "4aKX1Uoy8MUVyq2SjoCKznCXzYgBEDxEZ2eBFSARSwFYVdwmqR38k42piGDsc3Xzj3XHL3DwnrVZGVFERwRvQo2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674Pd6WHm6gdPt9bJaVaC5k5ZGhzFVij5tBXxUNrPVBoiqCxhSVDbuF2GbQHGb3RBnH6pgABAJ7DuXiiiix2nWqf",
  "key1": "GATZL9YFcJwSddgdpHfXGydUWmtZusQBoSyigc2uidhf5N4xDNCqwecNzQ8nWk3nDxT6hXt7MSpLZL5yiy46y7D",
  "key2": "2upzSWfHvVhXrFcvBfDzDDbLUZQWFRDnRfkXcjCUa2T2j3y36xzXscJfSvpCti5yMVMpFLWXhHaGuBfpLq2sB5F8",
  "key3": "4s4RGeW8i33MqtWPyNgYKge1b22VjucZHzZNKWsuoVy5gKfxarNPBXRQXm6gLUANSqYoLKw8HY6AcpmHmx5RMkF9",
  "key4": "2P6thmoePfZvyYZwELNh3gaV8rsRR9Uxr8L9P59F82VYyT96amdXNarWdoE1BNvQiJTSJY5z67zVjpMRtY2F8zwt",
  "key5": "2vVfwKbJE3hxXLCsdisNdp16y5ESbw5DFQMnmj51sMAzHhqgQ5N4fR8o9KsPT2NEcex7GpdbNdJyNHPvihojbrRP",
  "key6": "2PpLbWiaiA2VuEUmJZnwX2FbyrDv31ijDLfDAjADSNiybWppcL3KknZaFChipTZz9cwGhBA7oJ1HP584iLeQ57ic",
  "key7": "43p5Lue1fRbzxDLriipwkk79Cp3dstjNpWzui6ZYfmdA4pHPHPEdXY8XZkmvmb25jNHCszwhEWRSKJpa3FpCLLZK",
  "key8": "24Th6HxRMkxU2E4bMK9fXhSy1EZJ6Gud4akX2xT4E9uVoFReP6UeQPMV64JEtQf5vHZCyuHdU7Q5TGGU8Rmwu7dA",
  "key9": "WQrVn9m3DSzDsR6seg9p6XAPMRezeTragDwzaCffiaY95GtXYJRf913wVhZeNH5KAGFQmaKMgHqcZdnR1boUzFX",
  "key10": "5TRWn9PEAmkp7Prkr4H69dZtHKYRbFgt7UbbQXiA6WCdRRnke7rR6t2vZGBSMRhh3zDTeHUCqnj6TQkDWhEKFznX",
  "key11": "5wswqC2rW5izu5ioo3x5fSkk3JGPDYH6DkkDAhQ5bBU2R8hUtZ88qAhpRpcHyLPVGdHPYZbDGq4zXTtUJ8WRcoXB",
  "key12": "4MGd5B2NLuRfUpYH8rch9DKDYyP6PRzeNigXAAbpYbnwhAu1mJsKwAhqg2YQdwBRSA3RJuXWVtFtL1KuGvuFXDxy",
  "key13": "2FynXUfQjF7GVBQ6kxjwKLn55LnAHkjhxHeZperAZmBJpyYiX4VqTw17NdmVEz6cD9PFa4EZgtr9QhrMQHGhSFd6",
  "key14": "2rT72Wfxd4Y7jAQAwVCPdoQN1qGZSuFesuS3FdA1suS6UCYJH6SBD3r4Hz3ayPj6wP4ztZuWRK2NUaMrCgo73MvG",
  "key15": "5kUmWfhcXjuDoVhmDXr8BWs1Jo1ttAXWF5yRz9fmUfAk3AjTUrjgj84iKaXXG88aEW1CGrU9os96t9nCMGpjRsh3",
  "key16": "2vu3MFUKanrvvgNnR342PeKfQrUBq9doC5RKYgDPStNwqmTPphfqKfNsNg3Z5Majm8CgFN4jUYzmeBeqxXEg4e5E",
  "key17": "kQKjyPSeD1BCV4YwxGnbGyoZvRNvjZGG2FE1qYbkdCGsqjMTU5pyfnMZGfeeABhN5NGuvA28zUy5bEWHq7JLYdS",
  "key18": "pQfjHrxciSKcyDDMog9wnB2U8GXB2JYsBfpzVmiSm1KraxvNC3ry5traxHn1QNjDB3mffBLQt9rZejpv9gofEuC",
  "key19": "5FsUdg6GkMBT1VroRPHvVKRjxtzt3A6gnC3je5jTWSbftscMzt3bXBkYCHMdChCDYpdg95CQZ1N8q9gcSMoYXBYJ",
  "key20": "5oYa8fZmCDuvxctG1FqwXNDGGt8mokd6jPEw9yny5dEvyJ54gZHKdX9Vkmf5xkUB6BZzzUtjZvtCzvxNsx9qERJN",
  "key21": "4AB6narGPFpwh6v2NhiwJSqWH7vdom7E81kmqmQGXWE5edpQMMoE1YEHzYCb9zSKxidapjX88tPQrFtRmFKRV4mD",
  "key22": "rGFHc4EeEgHBwP2fqfnbMv4ZkRh3iCZzKfRNkgkryo2xq87VWv9G56xzyoANQV3zdLHMVq7xM3M3qx7NW2zvrQm",
  "key23": "CqpsNFhf7HbbmbDcRorciTSr4arLZZYZ2uPyJsyNhRXdak6bquQcmGhWxZGAMq6CDstGCAJuMjaiiBx13Qy44kT",
  "key24": "5e6k6Chw58S7yw2DeLsASVye39BPeCdVAJcgYG7KjmpYrzW21G2gDTFwU76WbBotWZN1fpFeEBs9Z497enWJMCw",
  "key25": "61kp8vhBQ276oYUPLM3mvF9hXJhiDb5AdK4SYTdjfTX9n8NL8rTgcTRAX3cDVDRTU5x4BSvD6wTwLjeYiw4dYFL1",
  "key26": "2aJKg1UdVf5URRkzCEUk8ndUKWar7zb3Wbs1Znzmkp3MYkG2Dsry17AyCSYxsZTxiVE3icddtn9VxgwhAAVJ9e7Y"
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
