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
    "AFvjqniQP2RAmV7anDcAn7MpmCq1cP3V6UUhqN2D8jSEgLFvLbWH5R3eH7zFYM6h3zWBuW1iyJLjXZU49cp15pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rEbtYjUyprFAWK1HYYc5YL8g8Fa4B2UfXeCnwz42EUhjRccdZr7Y44FPNy8wx5wJYMoFsWx6HJvosGunjRGjRB",
  "key1": "4dpkpnXiA7wAR6nirR5TWSWG3yqnWbfZBjUmnqSU96GmJCtFDWLZJo784euAhfQ5moHsAghSog4GWKUxHjudcSaR",
  "key2": "352F528Twk75V7RXYFwMU7e9GKd4MDcWXG7kF57o57BPmueQxTkkUTLBHjbv2y9Zzy9TraGKAeEkVnkSvyuMV7nb",
  "key3": "3pxwy59UGDZFtaGHjyBQkxd3vAGhKg1HP1twhBSAUVWsnotMotRqkHwFuhdwWHTgJe8NVniHQf1mWSiStjvzsGKd",
  "key4": "63VaiazaXZuiqX2J5x3qbohcJ8dcthgQNC2DnPGwMsURdEs8oEJa3LU9CQamvRfomdNA471CjYQVx4G7Qfjjk4GE",
  "key5": "52fLRi5292DmQR5h69b5MJJCBWyNLA2TPdwmuCdqrTSAHuTK3cCefJnEAzJCCgMHeYXnKF3dCtrz4HDJLvHMeBpq",
  "key6": "2nDoFZhMbbp4nKDHRzpHBRmKAYgcNV2BMYCJSQrBN6gTpbbsbt1fRxvr2TEHWSQjAnUDfSWZEVW8ANZPRbGsecUk",
  "key7": "sVnnJ9pmHgo46cNv4opqhtmDfV1oJ8mLM8ygWkc1Y1JxTq3M6NcpS2kFCyQsmGECMEp4PCVmUnvHSD5v8aL5qax",
  "key8": "5Lw8wcbanfsGn2RcCfFZmRkZr5cL2S61qNVZKWZHdw3AMJcXN22EHdN5o9K35zC2u7bL3cFs6axCN74n9X9sb3u9",
  "key9": "2EtVFpERwJAMrTS8VeyU6CWs5RPYZDNHvmN9gMJZ3in6FfoqcpVSYYWGRK9Wf63D3Q9ZtCPQFBNfLCEiVu5JzszX",
  "key10": "3N8TYGmNGHkzZM6Wqz9ZHgdEetjLXQWiwfY8TvRoZP9fRkrGrxzcy63eUfYpnaLEdu7mfSdm6pEnYqGXZm3BByJH",
  "key11": "53cxWQhyPQV9wacEo9tPp55AkNCcPpohA5YeYHkfcM7pD3AQgJBHapararyCxXTvSXqdETue5u5Beu9umenPXL7F",
  "key12": "2u2Fo2t6bjGBTURoCEY2vF7kE36CsuzvRiZ1Aca9ycLmU88jN9RUps8eoBPpYkRypDc4gFLDJWXZYjPzVinv5efE",
  "key13": "4fqmbverjc2pcDV34iaJrbvBEYVmtqxJMaJrV5zB2VCS5YhXuFJBmEgj3KStbymWqfW7KdJf1EZWfrGBMSZtY6dt",
  "key14": "2qCheLBNpKrCs7mWab8ihBgaZkybipmndhDaZYqGTXD9iUi94Nir6hein1GZFTNUjYb7eEAnaeQaZKZdHkGE4dXo",
  "key15": "59XN6UR9chqKiH9ySpxLZAoSatAo1kCWJAuby74gRU4EeWT48z2S6EHNVWJhk7rHYaYxDxtgBDvbPJUg8ZJwKZU7",
  "key16": "4Cxt7BDn9BH1VXN3FPhiRjuLRu9DZRPXNYGBhEQn6CGvk6BUedVvgsi97bA4MXFBQjmPvxQX55bVNpwJQhXk9w2Q",
  "key17": "5AUL1HVqPHa2K5fPqy92WXkoa4FS8rVNf3Xxz8TNhc3bJ139zkfMGyz1hFrPnAb8y51wBhtaR1s6bdxSgjcqJzzR",
  "key18": "3YsvW9227QtqeZeEfqxnFid7DumoEbjn2rBJPhiHLsA2ZcvSfgrWw2jJtWXAtWdePxNwpzxZpPfPobJ2X7U82fzP",
  "key19": "3GZZZfi8gAfg9ja16YtYwpZX3GHbLRWNJPWXid3oTVq3e1qXCWm1TyGEtsJ1wz79woCj1YwN3Dk1jCDV2nF1miSL",
  "key20": "3Rr7dspYNPoWPDwNipy6ZW2xYgh3NhR5wVwj3W2xz3nNhDmNM7sJRMk7GfuyhRTMoWxoA76qbTfKJQeScEqa7JZ9",
  "key21": "5W1gBeX2F5SgB3MKdL9f4JnS3wGWoVypy8jAqmrvNCEJAzqo3coerwUi9ctmE8Eu8be56gLAQxUi6u8HszsbYgp5",
  "key22": "wLSCkdSFHVJCCxH3ShDkEQAYNVYfsqTUbbPNRNJDqrGsF4b7m81jeCZvqWHUevSPGKUjfMiXkShvJvZL7LNb53P",
  "key23": "3xrSSaSD4rdeqp8MZ5TdDz1Y21sKrQbdoQqvzBJZ89JMUBWUTUoHtXKqAdGFwfL1vUsW7DnCr3zgiykhNTRDRvpe",
  "key24": "3sRcLUKKij37mUvnneGjWbb3xwA2RAtnZhitA3snjpFNY13harHcpAZn2kYR5JtmFjwejhs1KWpheZ12pTEyrhh8",
  "key25": "3w3VEVmCcchgdUmCwgFN4coXJ2u9fMz3ziPQBHNHgBVRQod2vfvyzWJicBE8r1EWMrd8aXywjNZGz9qCa6F8xjR3",
  "key26": "5piqJ34RoEPThNAn6TSywoemjuiJD9pKX8n35j6oaPQLLW7j7Qof9CGatwYpssPN92gHCThVBJTouc9769yXGPFt",
  "key27": "2t7LCHbHdXHVCs8hgBtEvwdEfP9vvGGLCSB4Qm48YY6EU2CpgSBYmPENLBnXGBuKmCKcyve79YGvi4fovutUSoy5",
  "key28": "4hk6BCw3JxX42eZ3dfhvrKCNLt5XVCVNcbBQF6w81UmYvGyATLCcwd58VzmgwQif1ufvmd5HsW8nFb1cRYLum6QZ",
  "key29": "4RvPFbXHcXdxwsr1RGYxB7qejSkcjtiQnKtm3bahBPDWX31RzVbuGwM2XcQ2p3gbw8EZ22GyvCZ5eNLrEhuG41TN",
  "key30": "aQ4dPU2c43T3Z3ayefTTxj6hzMkevSczyxZPuM2fe7U44WP7RBX671AQHvGU2PP2utQwncp2q8pSyhTKLV2A1An",
  "key31": "sofnmtNL1rznyn6BKjE9gaJJUdreLpcCBNtgUefC1s7syWaMeGdKrSXhuThZt1x9aj8jVT82KTWQVso3T54RD9w",
  "key32": "4EAP1tPEzKjUz1grKE3vybbKzKQeXJUvUdBZBcEKdiDEdvMM1qcEKfB972TvggzYRGyeHSWgHPoxxjMmM8Jor3zu",
  "key33": "5AoPyGqitZqtqAPG8v8BZ9iUeRAda2zguuAwLbgGXfQQchtEWp4nEHERnvTUDWp5ZJnQjet4gqYzE2u8noH5aXUJ",
  "key34": "44ADRr6oZqqx1GKafBbpVTUmXDKqF6WWDfLpFDn2j8i8gqWmDaz6zi5zTe6JmRdYwDg4HR2hCbc5rypFxsZJtxq3",
  "key35": "32J3VRq3EoLsrPtXyYLGfB8JokS4PMcDbAcFG4QzFHkYpSgrQb1YwBwYmBakoFHRws1ApKxwEXKkJz75pPHx1VyM",
  "key36": "5hkQpE3RPB5AfNXpG8F4SfXKPcCX2WDKgvv9in43jRFLCyJryZghBq249ovHMjUcN2yorpXxEvi85xp9vLetoSa6",
  "key37": "3BGybMcmbD3qt8uLVgSpQuSX71PraJsZ1Sxoez11oTvVfRPgfY5QvCYpAz9JejARHtkAzA5uinm3JdaStnT5MRA"
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
