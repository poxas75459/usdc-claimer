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
    "5tgG7MLd3LaKsC7gEW54vqTrpsjho9bNN1rB75piHRKCV9K59PWroRwRCveo8cQcz2WKzm4C9VsSJB67SVFdafNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6SyNMoxCZfJAAEV5EwsVGjQDXjn9zTag8MwZas3zeFUTgLiunWf3hqxKd49q9oq9yd5u2HYFttZKLRyKufJMuo",
  "key1": "3HNAto41zqsAY5jJnDWCyF9YTGWtA7Z9UZVWTnkpHyrrFLutBnqcZ9mjrsoPM5vj3v5kcx5QcoEDXtqZ6kJwtBMA",
  "key2": "2H79oUc9oTq3SLVxFs4Jm3JYZmymtV5F5CGL9X57Ay1dJpHCZjGthpeLSRuziSCQNmXMnGBNv8HmJZU1H7wiq7mq",
  "key3": "4zz5zXW1GKBht6A4yEzMpNHdV7Ma3a8LqMyy1FjdnV4L6FhN6aidgKqtvtZ1jUBP4uE5mw3mFJaSS9PcTj7JWy6a",
  "key4": "tKNyMAi6XvZZR8R3GeDHVKFuSSp5nkks1Fr3XKFswyrLSK4ZJhjqGDnayHnJoGvpkKMVBXKFrgksuVxekdrMajB",
  "key5": "45JiZXFDfVJcUSfMGTZTxwXtEf6zMz8RAajXwow9sHNvMJmz6WxiTKh1awAxXpVgmLQ2EChUCKghyVkgkvoHMqra",
  "key6": "5HJY6zP2iX7sTs2aua7HyYNk3UzCMqFZtMduXvbG5r9d8w8Mw4fTjA5nn2XF1NuiX55YLDQ1b29YyvnsmHuFnwuZ",
  "key7": "3GsuiQCv3x5VNm895jxs89fzG3j3MyaRqmjeTGdVPh4XK1FPHQdBeXLuarqZrPL6qs2LXv1ktHE94JC6Me6TCU4",
  "key8": "2etnXxkyQ5vp23gUtmR8F53L65qphBJ6rQ55gUNUqxtLEsfCfj1QxnYKkd1GSYXDAAzakuWyFhcTjyZcNDMAF4kg",
  "key9": "Vxkp3dKz5yqyA3SLY3o9QPTajKVyU53U3krMfVYshTbETBVpjwotPHxR43xewEfgmemZCozQBtytj2VDzPe6w93",
  "key10": "3jRbHFSyiRUwowFKKzqmMxK89ZJVEcPPfAATYucXMqWjt83DfW6VcV7Ywa9cMkgEooHgpPt3TvcHx9HRACziuD4u",
  "key11": "2YjjrmideE6ei3FhAPa4R9QNSCFXj1wz1BTTAjoghsM93hWrpXcnQ2kudRitjstDUbsS93Cf2JXF3ZeaTBXoipgN",
  "key12": "4QUHuiZToQjcEH16748gwygJFQ8y6EEd4ghZoXzSjxsNohKjaAxFfKJGCoUZmGqUSGGNrQL2s3dnuaFFxrk8VNU1",
  "key13": "3gKsu2B38NbTZFYQL2HZymhtfbBZj7Qg1gMmqap8AhD47zhhTLUC92tNFcmen4QwrDyK9gLemBf7Q64KZCdswV8N",
  "key14": "4zSdAGuW1grvJ2eabZ5wMm11ptdZmPHxN8JeXqPvdv3j2TS86nm72Y4qRmpvtSAGg1vx7zxpYKLxmcpJgZw5vYMG",
  "key15": "3hgsAHf2m4jsSV9kukBCFNgHuuo95ndcFKKwTvdNBXTKzzYKV4kHkzDjXXjymxzFKK7AHm9cEa7iBxhtzG2HdPgC",
  "key16": "414GSHFomj2Qxy6X2gc2vErAj58XkR7tjShFaq5L7H8ofEQycmSAZjZXahjyz8UA1odGKBA3yPfVg6Pdg6QhySWD",
  "key17": "NkrxcvgsGBB8wM96MGPMm9UGZ56WgQnwNgVT7UTNV1ENxCf74H143Rbzbn6NbSxUYwpe7HcZff5AFvesXgf7ZBP",
  "key18": "2bQKkToMM454oPpQs4A6SCGGVSXidK9AgEkkxeCoTBHfbCNRLD3m4JRGtejrmmfxYppHLtP1tRVQhCspUdMe4RXf",
  "key19": "5nt57rn9kWqKf5xEd6MM2cF77M9hs6qnbG2pp2awUDy8rAQKxinVNmE6sBgdbVTWxUjwZFiryrjiYbXybvcYQsRz",
  "key20": "3xKg8YTxc14Z4i5Yd89vHrvvThZNNgfJMoBu2GJtSKs8a4QUx71CBGFmGsxrGeR4qh7ieUDsjWSGbiPA7JNqE7nC",
  "key21": "FjkHHMhaXZUTExfPANEYeZ1hvLAK14Yr9L7MP6gieNNXaYGSR7kWL6aZF6NU9wG6Ms3kLyRc4DgQs39q5MzWw1s",
  "key22": "5BrYDUTjjkNGZR6LMuaVJ5vFNgJgZbvJJXaxNE2X4xE6Z1La6hsx5n9enBubJJiTkztxMWZkcYy8VMx44M36tfSo",
  "key23": "3jifEY5oWCpuqDVeTMXoAApKjVWeD49FZu1NP5nJi9f7igGP4cuD8BCBA4yRbMGhzMwL6V3fkNeEFMQ6mfYaUSYE",
  "key24": "245tdEo6RbZMeStc7Magtk9b8m8U1Am512gj8qwBnu7cPVdcrU8rFDgiWb4nECw9PcNz3uebR1Z6ueyMXkjxN83i",
  "key25": "4QVSCnYNwgcUBX3aXX4wpn3M4TfC6GU3EgmRF67XLwTXhHsvgvF6nxKrbJvZm3tWNfm9n2NPkzrsVurAg2eEKAZx",
  "key26": "28DCiGWswNxHpd4LTenQGKz4rynLz9Tp5bpnfLBHsaujZnUmQpWXbXbmRPzWGf3acTWUetQu4ojXU8M4Wtk3AZvY",
  "key27": "4f3V1iY1JAWhaQsKjWTEWyA4kizmnNuQutj3zpFY3PoLiSKpyhJxUrypfE3kjzBWVEXeUref8maZD4LejCei4tg7"
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
