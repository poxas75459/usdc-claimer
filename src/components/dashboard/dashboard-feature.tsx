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
    "3VNAVL2pCL9fFuEM9hT43HLPdQTwyvifqUqjoziChhz5tEZVcj4geqNMB88pjwvaGWXQzSMSSvnMz3VfXDrEV2tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBp11zXxgTEWwyYxbyA63RZWyUhBYHrJEu1GDziaKHxqSuzbxFFqJ8AjkGz1cYBxSrYLQ4bZNcsSY76A2me7ZjC",
  "key1": "48cXFKo915N1Y3nuqFvwwDkiH9ubZ3xM2ydppng5MsHSbYbeJPGjhxsQjvEftd9aLNvwpq88nkfmtavTdk1YEU6h",
  "key2": "51dkAUiuK7uA1SKHCBFvHcH6zx2dh5rE3z4rAkvkFLREwMGzrmfxB8PrQERRLdK8kMQy8xZ4vFMEmG2pYGueD8m3",
  "key3": "5dztWqUUVt3Z9bPSacfuBdrE9oCCo1QvFADT3DwMpKTYK8rr7ocKFPTtUbzLDB9nyb1YWi9Uk669fv4XvVtHXjpn",
  "key4": "5PYTNbdXcQbh1k9aiHZZKw9RUh5rKNhew5Jd9cNfZq2qizM25jAEPg7gm1ST647M5GjUDzHDdhGXknx8jp9mNSo6",
  "key5": "4Rr6YFq6KnQ1JjWw4RnjUjpKBEvJLThzLAWu4cxFsTtQTtaSwwHLkQZuxKyqCpRxWUJUhVwNsRfRzZdTrFyeugUo",
  "key6": "3BeFdNspQHdUc14K2rZ1vw9SpCpU8i4M2TFrNhBELyHZiLpAv4B8pA5DgmV1smaWeirJCsNZy1vK9DmYiB2ycjrJ",
  "key7": "5pDGqybv5k8vuMn1uAbWRH2AwPeNJZNH11EVgxNjGgUzFGrbTJ52k5ThFVVM8kN4Bu9VZdWHsa92cT827azWBCmK",
  "key8": "63NWdiMVSwWkESLTP4NFcTh7McjRg3WnbbTXaaRi43kTDRWUCeuK1hLKbSxF9q5ygmaBr8kpyWGsVQXXoSPZJxjo",
  "key9": "3pVimmHQUMM83nmet1qbeiwsaQtCSVmNS1Swf4PBPGoSHkwqMBgrFrbi4qJyep37qBfYXHCaxBstojwwpR3ktJTa",
  "key10": "2nd25bCHh6Wusb76pPb2tgYmkoEKXpj97V3qo5eX965pPwq9pQXmUmtZKnEkYuYCqB87P1o9NYC6BjN84FBwaSrC",
  "key11": "3botCv38zeFWbpQCSZvLXsa58pGU57pEK3JBqaTv2oL2AzdbYXzQg6M5YhihuLxAQNceA1vTYxTcUCXshjX7VffD",
  "key12": "5BrXKyentUs4VKm1BmTJxotHkqQ5fgceN5768B5XQrnjyxu8eSdY9J3KEQr9ZR6uTfQgfhnmJs9TNcUCjf9HJbqj",
  "key13": "4aJLg5HihMhjjfVG7RX63LvLLjuMMfad4w7Xf9TaseJNucRg4zgjKpi2wVeiCiHvava5DDW66t4KEbQe9oNCjLRh",
  "key14": "3QKWtaqSzYJL3wVtbhwtwWtjqgorPnrhy7PDpwUxAwU5npKsiV6KQGGA2VFkArt9FG1CSaFSF8x6msT1CDJztWpo",
  "key15": "9YWNZ4rPtpawXUDtJd9U4rffgM2DsAznidSMcCgYe6fghfhcKKZYgs7GbkTfisjx4m6CKuWU81UTHBguUiDLa5b",
  "key16": "2dT64jBerZS3vTHuRC9iKdnutqbUULjRverts31j5hPW68Y4aWsogACVQcVdn748awq7yZd5ALTzGyFHtVSHTefx",
  "key17": "54AApVN7BaJfAzyNFBfr1tm4AFp5Ao1rvmQ9RCeXEPSZscqNpNXTUbHvwYP52qATBGRXnygpEJn79X43BCQ6GvLQ",
  "key18": "23qET13zC7oMFD4eWYvq81MwmYwGMXoSUMxrTx5DFdTre7wCUnFu3JX48xYr7DsA4hrdAF8m6ajkhVq86VzsFYQB",
  "key19": "ESrnGriQ82souqcHrFDgaXvoittKhDvJ4TGdL7ApPVrn3krdFjMKjDdjPQCwCyuxU5Sbx26hsC8x1A5VuG1ju9t",
  "key20": "MvNiFiNVkHkAtxsVeoyWxxYMz5D1MeAtXYicsvg7KZJiyWCwQHaxKVKi1TRPede8cMXoeb1fZiwgsuVMJojVS3H",
  "key21": "21mg2438aEVGE4NzqRJpSyawNLzRwNTQANRC1gDBP77NciwC2LrYKz2jBqNhxZgYwKFhqMpaG95EUrHUZje4WzZe",
  "key22": "2uo5w5B8kGcQwvfwBzLvprgXiojHy39qhGRbXRvdVbCwpgP9E5Es4BM8pLiyh4xpCchH739D84GoParYFXjU4fhN",
  "key23": "3GaNywTAcRT6HRtqSN2kRzLWM3QoD2jx3T7HYMQUsRr12xFLDUG243LiAL2HzbG6E1GUuzGhceWZXA5N7jdDbzzf",
  "key24": "5keFj1E1QZogCboAQgRsCdnqLkQa688yfCnVmhsgLucKcmsqgE73VfG6jyPVLdtHYgoRFexa6zA2pqdmazVhG3hs",
  "key25": "5CT392xukhBzWQ2ZAk4SvQUcyhUiH4K84BidThxoeZa4KS4HCWJCxD6XSsA6KkL14qY9xFHXmcnLLdfzde7k2tEp",
  "key26": "58aB2T2eaUd5yVbbNQWvw56L6Ey1eWGmRQHosTm5pQZU5od1VgzFzrXbNnWeGxxhH2bQLXc5qLYRQ1XvZaRYdzPd",
  "key27": "21eEQT11NodtgzAkjvWXpfq4R7dxYuc8UPqdL4BsxB5SRM3aSBjhUCKPksopQi8vwY2tSYJfnnwasN6Qh2XTrAJB",
  "key28": "3Q2B3DJJTxHNsdQsacsBqWqbq9jaog4R7J2vcEDDzA77UKZPBu42LkAD4x3xZDe5Gq3zBBqQnQnsdse12npDkeZX",
  "key29": "2cFgiWCm2PPESkb7tU49AfC7EauLNKPqi84NzeTt86WSkSa9xzndy2Dc3vRz8pQxUB1EdUZ1nkgWywHky3NV2C9P"
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
