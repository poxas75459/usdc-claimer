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
    "3gni1i8wWtYyAcquF775KJAuz41Hw5PVfcYAYvBgWf7vi356TFnQraFbo4mLAABRZex61uWZeQaQc8GFz2hCHnx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBx9DPU4oU5CRs3k2WbfwvF58m9dPPDN1Wq3wn1pJDeQkt8v8ztFmjHLi5cMj6YDyuDwNwwQ2R9xSag4jhmEgXk",
  "key1": "5hd3ojXnKusXFesDqtGSEkEU7ZbABsaXABUdcBnzyGzBefHN3bXDeupajWitBBosZpuyewh3FVJ9NDbh1fafmZFs",
  "key2": "5TZsiwc2bYntofR8eiDqwBZV4BDvWAj7VqQVogUfQ5WT2z5ishfSHPo2pKqX1nCs2E1Es2vBkgcbM1b1gSPa8As7",
  "key3": "5U8QtsKTQdyAfwhtr5RiyVKxsni4XHQCUsCcEHXsbb8NMscb4AoKCc2Erv856NwCwbZqhDdRdfG7QtfQRU2MCpKT",
  "key4": "ttzUUvTo26ZphVDvuZ6L3SCwot4n36cYUG4x2Cw6aSc9gvihuUaBhHTYNdmB4TxTpf9rJg5uZjnjgHCDisac72P",
  "key5": "5Zx8W3MACzEXCPVnv5n2Lz3s6i7Lc22CToC7VFT8w9ioDq8UKtZRjupq8sSbbHB6RUYqw3vHq93Px9MbrEMuwcXB",
  "key6": "4t9SaviTpYQELXrqTgdkZ3T7fUEtTSaXAyS4j7NDNc9ptCFv2m8aLtbkKzbz5dLu7aikpQu1yYJtjfMNhRMHS1bU",
  "key7": "4LoiwCpb6Uay232h5Hosr2RkXqY3oAqB2HpbWATK19Mbt3MCp7tR2ub9RZ74XGjstAvx1Wce6TQX5ghhR1rL3AEM",
  "key8": "5A5YKBk2c75WaeZQg9sBtCeyVD7a7LUcKohBKy8pB7d4Ro2QfkoXieREp5XqKrurhEnoVQpzW66Jut9QEymY9i4",
  "key9": "5j3sbnXdsnRtAQdeHfbPuuoALzENSvWT7eBemDGUhy781H8wZKwCVD6QtZfZfzbWho9vaQVX41ML6hfHp4YMNbUT",
  "key10": "5gxjgFof7CqDkKxLkxwnFQuhpX3khUvx6oaTZDooXi1qmCazaYNXb1eznWHXZTDMu1yZLdQ9kEbtWMjdKCxJwbZN",
  "key11": "4xbyxpwjgVNDnFrCbP9UDbcRrLyDYxDaYDAR8p1PLnMnKCFhn1HQYsDDqPXSZro3x1XeGyptawvMm32SFx84gB76",
  "key12": "VobJdt8BxJ1JgnaUxXiVSzAyv1nXD7nkNKKfnrDVGpmYECnbYk5U9GDPFcSoZxgRspPEkLBdKU5FK5Un75jz5JM",
  "key13": "66pnXAxwkQTZThvgTUtXnXiidDvCvGHt7P1TE1jyVHBwXDqTwvqdDhswXrZNnc2uEChEJw6edfzbU4api3jgLj4z",
  "key14": "4Md88yGGsxHQ7ukwxpPEibFkAFMVxifJryVZFrdd6R4uWCS17KW6MWKNVq9NzD7veHcgPdErYp18JTftjH6hJGdp",
  "key15": "59Qpp684LswjutZWt9Q4RRWHDioqJTDFvK1TKBzaov1CJHvzxpW3hDc6TtrouiqSbZ7jiLDd5x9FSf6X49jWvjFs",
  "key16": "qhXseeFECVYKhcQoMdPxqashFPSFFgtCtCbCuSmMmkUdmtkzQVMsueMWmeRSzw4WJKXx78CKqyrJYxWDURECdxL",
  "key17": "LwtVPUB6NQ7c9YR3XDtfo7hVBzraE2GrsXNkgjusWuPpXY5fMicdzi5ALnB8wGXAv2hw3HMzeJrczmHPJGcKwqN",
  "key18": "3fon578resqaKk8y2fd8dNp8eLnMXg64ncZCNwa7PqftXoCWo5HmngpxEKEQZ6tJubmDvsp3gbkZGg1y159KspGQ",
  "key19": "1YpQgawE2snXW8Qrat7U4bU9jQvSiqRggfBM9ZMQDVDVPqtZaUNH423BSHswyJ7YVD2ij5QWFVfnwNgZ7Vmq8LW",
  "key20": "8Pp4wFkhuKN9WeeANnYUFHmeKMTwgBTcrtKQjNYhhgq2MnEKneqs9woqANjpCTYmSa1q2akUfvnLeXr89sjajS4",
  "key21": "4zhCsqaDhDK3pAREd8GA4n16ejhJFKhTTQifxYwHh5WNHZ6aMScLHMRsctyczShjkaiVKKUgzEngUyeMNg1i4jNe",
  "key22": "2vZgzqu99DxpHKGPebELU6TzsNeq9H7pFZA5uHZzLRya5ieVVukLdahdmxd6qSJBZKF4eJu9ipWFdTDNBdZkPBoA",
  "key23": "4DpPxKVRMkfc9fnQgw6qkxE95tQHcxxoQwriWkqoAJr7Ws7WT7MacxZWn2Ywh4ZvAm3CTsCSaY8oqiEVLA14rx2J",
  "key24": "3UJYWEs6mXW4mTMQ58U5Hv2m8BXdkNwW8WqjSD7e3nVt4avq5ZdzGyRxxnRp3WtPkMVnzTReTvwVeh7CffCosYRy",
  "key25": "4nr2yvMRMttufxBDsPGmfn1zF58y5qp3YQTmX9tZk7ZxcC7E3R8AvMKJUCLQQKe22spwV2QuHysKtPfC3D9nx7Qi",
  "key26": "gcuAziunoTZK9EXJNgYBePwkSpPzvXgzVb5kAAnRACVzry7W4n5PmPoEGvpEhh2MKzwEC1Js9ACdF5YkvviRoCb",
  "key27": "2ui2husppt2SnDfezH1yTTGqesHQj6sxWK7Acm111UM63vXWv8NH8qftBkdNW3zGUHZ8b7B4ob3gfoKkHEwKFQdz",
  "key28": "4CZnN9dWCVZfPm3GHbzPZnb3q4PJ4AgoYQH5eEQEvkHGwEHVjH5vRR13dGEJaCFJM7D1HroDeJj5Ym18sFoA9gYR",
  "key29": "2jZr7jjfaFuc75zjpYo1NWnz4acGGuc9dCL2ReDm2WxitAZBMsYWy5ghatdwfqYNX7WiwRmFJJKfjpihANv7ZgaC",
  "key30": "3B3cJBije26CDvCnv3uYef8nCF8awHj9f9Bg6kH9mMUgHudNcGHN2XQ9yE7qxPxVbDjSQA4yWXkMMQiuvUFaqTwW",
  "key31": "AtN6FBqXjy2xBzHZN2w33tmq8XUKRadkTHVhio96pugC7MLBfTMgzNA4UvBuFyqMuzm5NXyd4WvwX84zwYJySS7",
  "key32": "5CvGX25uh84PpVLkMrNzWSTH5fz1K52C83AoQWwVzyscmNg6GEBbg6WG4XHFXsXH71bCLcphQyDs572pg366DDYk",
  "key33": "2MLu5bhpEbXEiT5BDqaypu6xgoQFbgKJjCwNh3bagHbZBm3r4U9sVVMe9kSVYQnDScTfpKnW48vyEVhwwm745R1y",
  "key34": "ieu9ZRzf79Mf3HnB1TBkaHEEWKVmJCVzkrmbAyuAPdtDUYF1jUe85qBr11GWELR9z6qXiNhjNCqdMdcievLBnmD",
  "key35": "4M2BCCvkgP4vwsQRQdV1a663Ngo35UVTDstcr1PVnE5cs6WzEa4dArw7pajBsi2TyHqLviPZxy8AkTHYpJhrEBj1",
  "key36": "2WLQumqvsCECZ6fUWvSs3J3yYmeDvv5oFcENYSDYkYmptxVDrqjtyxysruk4GZjgAMZ4gRR3PTSCm2fycZjuSmyu",
  "key37": "a8weXEWcZY21vPVoiB17dVmVA81RnuQ5FEmTJsPRwKRgonSiFkiRJPf8ocHvuVvBAjzbwPSjsGrVFYjqFyWj22V",
  "key38": "3yYWp7vDi8wCUn3z1B1Ty1ymgmoKNmrrCdwz7srzw4btjzvGe9cViJF2UF1FBJQnGdSRSYdJqgUU6cRHdP9Are6U",
  "key39": "26BBQQAnfag63BirRb1xxaUtG2DaGxaLBeSyJWHvSeiY6rTVFs1SsKcpZCNhqSwF43RqZv3bk8UQh1ide5eKZuNt",
  "key40": "53shKjjTL7p8BpNMuUazwQhCCEyEuzpKVQr7WM7FZv5Gg4rjnNV4SNLLmpFBhhVeuAu9YVAWRf6aAaBmWDNXEwiS"
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
