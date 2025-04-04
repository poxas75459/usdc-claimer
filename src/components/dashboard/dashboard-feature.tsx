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
    "3kW7b7nyLSVC6LCzspH9VTaXAPWXNSWdgGdwo3dj19usGwEUCnRpyNwHa3RrrtU2HS3GCPLars8whkCu6nkz1DUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwJCzNhxHP4XPzZW8PFVjDkykB3nhRqhWKD1e1XA2pKNf27pY3kiLFsWL6PL85Pph4rZJ8rQnscvAk8ZkaqoSBM",
  "key1": "4a86HisNz5fBwuJJbXGMU5m2mSK4ZhtUuUvd66TNhY4k1FXqvydbMpbsi4reTnJTvKcPav7BgG9cGrQMpTn82qqC",
  "key2": "2nLcyR949yaH2aigUUqyhrEUi4XyZbFACuYuPLJALqiLENTzRPoRPNXJfVzPh8kM1eBzYvCsBripsdrqcXgttKFC",
  "key3": "3pjrQFRVQiKxvu2Ugq4RTaB37hvAYnFgFkt8dsKQvv5LnbockxsU1GrcF5bu6z7iAZ9Evum5hjaYwi1Z1UT8Lixy",
  "key4": "3rXRXSnGiaUufqPXjG7EmUR6jUtHCJayFqCgDv8DrNo7hbBoWJX91u6HfveZ998yised9sZkwtuvkax9oanY59Dk",
  "key5": "626zSz3PYMDsXCMR7aUomnKabwaedF33HkRtRsWQLHrWHS2Q8BM1Y5t9qqqySDKWtTMhsqopvBJx56eZaihLdeVi",
  "key6": "2HUuy6kqP8V5yh4H2oo78zuLLbGvSEuCqDECvYBecNfTw1mYVeoZiKiDrpeza3D3unfsYUKBB7UyiLvxSmjCytWs",
  "key7": "3rsvgHpvrqxRH9xNZLETm2Kf1bVUWMLstYdakSCrUg3dnZKqHnhi1QouvPSz2yB12hak7w6y2AKmWZy96bC35gvw",
  "key8": "35S7vbQcbJg8uhwgHPCrdwhNhHb1wsRYnKBa9PWBVfnvfGv87NAN4uwBeX7DqH5fW5SBzcNce4PBwdc2fZv1u69w",
  "key9": "2TWh5HvKCtvmwuL9cbbnVa1CxR9aogvexxS2TKSTpVKxq8kP7uEGiVXitsKzHBmeKXC9qvS9rjbp9331YzXEp2QH",
  "key10": "3ZusUxVsDoBgLVAg7XvqZKt6iX397rpxxrqSiQ5HUDq2gDK9bQ5zGgCT3b5UniL2PsoJx2UKi2EJUR1NTMwy1W84",
  "key11": "2xFQsdLdEiy267D28zW4Q22CuQQ9ANcixYsSGCnh5PZizrkxGBuRfifzRNrKcBMrTQtF7qxcSMs5w9KvKXyh1WCA",
  "key12": "2LGE1BQnEyBwaksQhcxbXAZgFKcw46sK98BARf7fG46sJh2xePUq4DKTVUbgHNUuZm9EPVAPc9gdv6bDWcdRj4tV",
  "key13": "qC2iQR8pwYG7Zdi3FZH3vpPJnHT6DVV49wbpQSEAqHLAFH4Zoz8Pnfm6PTdPmxjEDGBiqW6PD8y9DetN7Urr6CP",
  "key14": "5p63HEsSYRc1T6Mn6e8uDbVtwm1MEBcbz5Jh4DBozKMTBQYu9tWpDmUaU8pBNJp4bkS8WQC5feFAiJdHJxUqpkJW",
  "key15": "2BMCc35L8qRYnukwMPfjqwgFp9RVqdrzAm7YH4iCJyFSbG3ETJpcbEWUs41BzvYXaQr5TbgUByLPaWaJ19VDA35B",
  "key16": "rScZGuQqqq42vsucwKP1qdR6eErcihYdnwTqPcAq2TW9YXxRCRV1VegbsUuCkMB6Etn6dcKnwypqgAAyUAs5nyP",
  "key17": "4o6vVEZbNCf4TueWC2AbG6SDwMZXCY9nryVKKrDwcA9KFWTNZxZJ6ASDvRgvm2EbgjbaBErATMFJNgvvhYqQeQ2C",
  "key18": "45nYPJUcHBosUo7DuMY29h9FC3ZbvSWrG5QSJYNu3vscEbz2Sj5AC33JwqYja4j89uqsBuZm3r9XQhPoD9VRdL7J",
  "key19": "2CVJatRcbgQG3FRR6jhdTrQBArPHZdfSX5HiZcFL5jvVXoei3b1FHKtLi9jMaykvaP5ScYyXdJupjDVMN5vX2cLF",
  "key20": "a8bBfy7YH7CRMGQkEMMZhym1fPQrreZq3dRSFg6PMNiRP17NFG7ySnB8CjLPz6WmohC3hVanwxu9EasKUSxy4pD",
  "key21": "4FEhah64Gv1tn7TdYFsPckkQALuyqXm14fxnCEPbr9JjcRRWFMym2R5Vzkv9fVmkrfN99x3KF7m7pa34VaCgi6ug",
  "key22": "5DYfyiBwTfK5MawsZd1TFwPguCSr6cTAFkmbakLH5vrs9JcbvmzpMxSLMv8cCYRedpdXHenoiVdXNMuu81Qo5LnY",
  "key23": "2K7JBKxDyXki1Lj5QJm3XXwUGevnKFnv2Ce3iido3eQ2DeMvpBbvjVm4L8uhgo8q8JnPQvPuHKRoDfwS75MH2kuu",
  "key24": "2cqtZDePM7wa9aGaGiFLtUNPGdAa4iXSejQMMecyCbFQhDVqTRSyHQqzTjyegTLnTxuPcVN2eMWdL4UjsYHNRsNg",
  "key25": "CarC4gmjsXw5wmFrs9vS1Rj4N5eFbznGS3Apf846WU5zA9vNoBMK4XyW6wzMjVqkafAKBeyA8hbEPBw1VgkmnA9",
  "key26": "2cn9aGnntC6b3rFa9SbDPighM1StpSRkgzsDVFQUgQ4c1Fc8sSYKmxJHVTQRn8M3afX6CyadnZoQVx9msV6eTEkY",
  "key27": "TxrdAYWXjk4aJx3i3S5hjYQ3n8PeR6J7pkxQzcrXa4rh7e6Gk7z9E7vzqMQHm5D6AynecbB8BqyabBp5kZw2L87",
  "key28": "4By33oHmzjxpf7fAELTvygyuaNDuxUTzsMh8EJHxFKzKWJdYTw4tcF6QNGdTbCWPVyXm39DVfcP4464mdVnuZnzz",
  "key29": "4SePNPR9t9JfXAXsDvtETN7xh7hiKDqvTJ1Z93PbUF785NCDMAEyBf4zyZxspBkAe9NeMPcqAUmbgVnJfwUMV4bL",
  "key30": "125jtDbLE9PbwxQuJKKSZnwNnpw8QBWEASGZyFbziLtsBPPho8pXvSnPL7uBcjdFJ2pVVp3D6X6bBEGEaRqZSttW",
  "key31": "3cJC6rxGKjmJHU2oDysqUd79VLg4uYCy3Lo266P67579LRRoW1bQwYhdHEvKSxswXyhNaZJuWQQsLALZUhGyahWQ",
  "key32": "2jJbPukZidhkW2XBvkJBGjArqhomPr9pHiqyS3XMgdCfeHHbQzKaxDoct1ok4u6cS7TC2cGJgesMUwCqyvCjTKFG",
  "key33": "27PCP3xFSEgcFBXgv86vtn6VTs3Z8X5acg6VS9yvopcdQc3YpHUMksiLEwzuNMyJqSymbZfogfzKhd2omND3wajv",
  "key34": "4xXrgBuV9bHqK1w9drnatWppLJFTGhNaUWTV4QdtQuftLg3ovxVZScbrt2bjwoHoGNpvRVPWRMR53nDAP4bDBaHQ",
  "key35": "SrNay5BsDEx5R78C4g1ScR8B2vbjGPdtjPM5k7442n6ajNEJrUZEw85yM7z1d1fCa1HABoA3n1CK92RsBicbVmP",
  "key36": "37yh8gjWL7itSBcsDfPEF6QoJnvaYEEeJjJ5JZfpp6pPS8iaB4D8NQ41JTjzu9LSEoZCBKBem6qbZJUxrpeV1y7x",
  "key37": "5MJX7RgJSLfxZdRGpnc7Hr4rDfPZef1zXF9MCtABkKRidd6SgmtxaNNaoTgmi7yzubYUDzQmxZjAwquAXLSs1pAS",
  "key38": "5k9AU768goZxrsQCvG4VjfJGfZPCLfVgDEos82jjWZ5ib6LtTyx2Fy5RUKx9X82DXg95t4bCSBSdHGTmgotG8wXs",
  "key39": "3sUK1pgaEP3wGJFdbP82N1xi9Fb97pdchP5fpF1pa2SZqoMzfVyPhaYBSVBTPskXyFu9VEHNm1R3gsVnzMoL4zrk",
  "key40": "oxVRqFKQ5DFXzpM9Kwac4nLVfxsUrm4QWkN7ayY25Gp7XscBiNHjq5PQa9SypX8wzxeP4P7yHHHwZgDWCu7CRsS",
  "key41": "3utZyai2jw9XSuB1Pv35p1bh9swG2FsUdmvGJwBhofCqmgixNi5kQzT9a4tZNFKSCJ6ohFSFwHhBXbPPzJpAseca",
  "key42": "2hR9oYh3gG2eUM9EpdSonaQTN2mzQRJWtc2xJowSFYjgL4DqDTQGL6SD2qhuY6RQi7wwe61nD7zhM6r8GBvpfwUA",
  "key43": "2ruKTHqLnjFYGACK7quTqaiZfZHzeB5ynaXPGn7S78KHSfQsDipYRfZ9qn2s1j3y7JKuGbA2qWBTitagyJ7ejD6X",
  "key44": "3DPr7vDb5jS4fgZCUBtHAy92dh1kAzWh6Z5kTptbnp3J8Wc7UDwb5NkMDLpukrHQXf1da7cPPjfjVQB1xbz53cBM",
  "key45": "3WkZ3BA6i1Q9MbxFtkZ5vZHwa3u54Uk5Vyp4WKtWbELQzJwuqSTwTRGu7ZMYSpydvXjcu4RMqiPPiE5NGyGNWThr",
  "key46": "SVYxp2PigYCmDZVnaiM8mUbTELzKUuPo8Xgqg7LaBtajXwLJ1b71ACXb8Ze6tkhgEWLymb31Q4ntTT5FeKHddio",
  "key47": "YFGQu7hpYHNRcUNGbdyDWUHcNwxKJdD65r4mKZe4XNUXKjj6R8bQfvRzhrX8K3eR4ud1hoHuUw8yEWjbrJCu65M",
  "key48": "5yW4bctqS3wiHq6sqskXZYF7Q9ZVR3uJcf74rky4GcwEMS8ryzMbJc3DuBzQ2dJGW7xVykf97CxWWXKQ4nPr4T1V"
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
