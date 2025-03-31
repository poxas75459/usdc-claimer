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
    "29usyRNrkbPCAKihFireWcaHL5vBhBUmr3sKCQEQVAN1R4G2HCmBS27sRonwogpGzwTXn9LLhdfTNQXa28MxcuKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdUME7iLBCTowuYERV85a1LL4bLkVnqFN5HZn5DAZxkD5UDCe3fyJtq2ihPjR37e6GXqJ9kUfGnj7LXW9m42RGG",
  "key1": "2JZ6qVACMjaUTkHHXpXyojJgLC9Zd2xak2uipN5U2dUHid9MtsrET1CexPE4TTjMkJM7kfWBUKE91WBktnWiWwof",
  "key2": "nCaG8KwxS8QCoZp8LjGDXVt1C1PiUxZ9PRjh2V9Vzzu14BeYSHTHE15ERRKV8ZynsneZMgpSbrRBm1pN89ePDfU",
  "key3": "2rSZHaLZDdMZLwA8nkN1GCLUUCsWcnDXBdB6Bf5XgsLA4GZuapTeoXma8o1ZUxjXHw3JkbYJcUKBgMP7GK9zgZJD",
  "key4": "t1wfM9o9TL7bjbqWR7RBQqn9C1pQ64w1y1KmzX9q9KJkdNVFSV6cGDxcCyxww1vwJh9UTPfCoAfSXYrrtXzjk5R",
  "key5": "5LBQUNuCXxew8atNY2z54WWoJKpsTApgMyRKBFqJdW3qhrzQtrcwoZ6xevnbLFWXtb21BB2xRx7fbTFtzWYKhHrT",
  "key6": "q172ArUWx5XhZCv1UguQwAkCgCFv27SgzJ9cnzBFGMtWWFRBbEdPzyJMQ2LtQJvgMQ7yVLYJWQLDydA3A9gGqUh",
  "key7": "2tHdvP8pexGRfLrYfaGoYdoGXYnSNgjCvndkJ4nAaDDdnasgvt5qRJW5iKTrhShrXFVhNmXVUUSCbt7be9uCtZVu",
  "key8": "FiGCZeVj6F12BX7kFhrhwbW6uvWfuBdworwAuZaRcGUwQxaA3tBWhtqBSUYMbatDv86yQaUd4rA11K3d1cz5csE",
  "key9": "25DsPrZ65xzyn2nPwSZynV3D8CycoYrnDfvhZxQAwZEy4t9CgAMyjURAF1hytSq3oBxEpdmzEryDEMMu184LgBSj",
  "key10": "387VYtCGYCaNjaZN8166fZZnNMhQHLq6Admv6u4inZze71bxZELdDi9No5165f1BEDdYAnhUpo6qpkXYK1gCoGuK",
  "key11": "466bexc7wTSA4qMVHcEn6bTvbTXU75wEygkVkB6ZznHMtnMRVSS8bru6aC2JRHzL41cGWRTUScrSoGni84xrLC2x",
  "key12": "aqFz6XA466uw5fwRDHhUhFrPwVVKSo3Ck8RQDeh5iKsaABTNQz4cdEawCgpCA2HUPsdYoJhiYjNWZNQyUm3mUZf",
  "key13": "2rizwwcumEDMEWzt7NvYx8vHqW1HUvbDsaWZZbgUM74PqhDwHdLUySNFRoCLqCUd8oRdPg4UhGXjTYqScZ1b4yBN",
  "key14": "2y98L2EKJHU2RbLyLYqNM83KrPvNiWiaiKzxxoK2A6Yvf8iMzfDJnbFYtjtZY2gQQPSuAY5rCHTosxHRuPcCWGPE",
  "key15": "5vr1BaHWZQR2yXU6qoWUjSY3fSDuESiWVigHiUxnZGvaQs5mNN6HVCXDTy9YK8SJ1HArUoVUndyf64hKovUtAUr1",
  "key16": "4zeQo7FqfsYB2VgZXZ214HDG8fSGMfX1xNHq4HWWrLNEpaR3afr9bMYo3eTk5Tdnvq96HXbVrhP2VBbwNV2Bc4uw",
  "key17": "5d6f2tSXdrVFhsbXobe6tngmgcP72nye9rsYJMi5Tz1WViG8TpmfJGFfG8skakk75q6FPjPitkbcDXtVRvZ6xe6z",
  "key18": "5CzW6fQWpQWBJHFeXrVdY3nUuBZ1ScpS9mcjyTCRSyZL27yR5TpNDmw89zrcvN8K57jxMoiKph9qg8AJmm5XrEvk",
  "key19": "xfuVxnrpDWZkahEj51BDezfJRLLG8dQwYVi751AqLBXtbmYk6y9HbV321TaFdUCmFDzWz1bGezxvzEu9k3zL2hW",
  "key20": "d2UKNhxmADXkvsvXxbcNz5S2D8Vm19Wq3NW2kDNkkeH1rctzGoTtydBUasZ7uwPuATqvvkE1xnG4ChucEDtgfwC",
  "key21": "UeXnhqveQqdGc35p4onH93xrgKf2evQpgPXGtexLmCTA4yeTX6aFcpHGpsCNutXcP1dCsxbccd7XVLrHk5VocgW",
  "key22": "5zpgJDSFw12ja35LNUpNt8UMPGqyk67VqXdoa2eA3bKJBJjgPuc2vidDnXNePwB9j1nCrXxEL4gN2qgFkUmBQFYB",
  "key23": "51et4h7jgqriKFfM6nQMQKTEfyyhMLWFTyfhv8t95D32AT3MP9LUhXRaLPcH9if35WtMkdmW2RVHEBFrM7K9hKKt",
  "key24": "VFWbvEPcvf9n2C6BGwz1Ei9yemfathyTRA68RsvQjAAzvZb8meiYzNYUr1nKf1cBhNJaik1TGQwx5kpvAe8wmy8",
  "key25": "5NGqUX4hmQNpmpcnpEgRH54ZNGfYD7U1pqWpiqyw3oda43NFzvoTPE36dTgyVPm1DBVgzRbMXBqEEoD1Z7fXKg52",
  "key26": "53btheZiEYg4pSWDrxDcNV72Y9jLS5PJNn63LqTgSqV4TZ8TMttEnaT4nPPRsA4CwEXe17vv6yvrFtbLSN7PMuXH",
  "key27": "QyJxY7F4H8otk7FT1yZcPkHAzfpQAknU7M1VHPKmHagR29MiyzkJmakXWpCJ4PXBnjtVmUhADfH83AffCu9oXbL",
  "key28": "R7bEw7CNfs7Au2aJuPpVPnY7rWXobbbcKmBkZNjLxUvRUDYPTgrkTycNFByk9amFZM4wrXrwVwmJQrisMxPLq7Z",
  "key29": "3ejzURuFYSKGjcLyDv6eZrRdb4NVKqUwqmVnzRHwGZ8Lwvv83Z6RMA2EktGnybrTPWYNo76e48hDXsQ4YXZfXuJA",
  "key30": "5kEo2EcgLktsakyrDt1gYxBQVYk4JbtcQGwLBHgwFMcH2stPs6Zjwi6DTcJpSEuuvVU5GjxL4pAH8moZdvZ6PLSV",
  "key31": "3QLNXcd5wKrULaKJgbieXAwLNGWRA95FF5SoNGEFzNM1iswaLpWqyuSBwS36APS3rL46XAkxaEJpMpHzmJfagVXF",
  "key32": "5Vab4qmAJa4mFbAndUtBwSLeAfRW9uW29a5zQAMvySGdp1eKq3ua16GQiAFReS2zxFRhqNVR1DfrBiEeoM9FbPvB",
  "key33": "qCEKz7eUoKeMvxz5ffvqkJpQKWgum7Zy9dGhYuugMd8waVLXCofrERnmbKsBQd6VykGVcBcTdXjrEBgPLxbnpvs",
  "key34": "4f2Umfb5DbRMpVAfWbXDzS4c7DnEt7uev5K6x6dY1L4hxygUQqboGaeCMs3ipWHz6ToBsg8qCfkT9jqrXXcSeLz7"
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
