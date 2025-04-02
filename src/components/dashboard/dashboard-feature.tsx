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
    "inCNNg5SaduWWPQ7g9GsTHtt6xDyHrsgDt86xyGVsJ3kMXWxpoFvKYZwf28Le7Yjw5QXhsR16NF8XMo1eqgyJWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmsjUdXT8m4Jk7anv6hfKA3J5DZcGsBATHR62oUpwUsKPe4c8hE2Jknx7UV1kpA5khDyVabHBa6UPiQkwxVfYDS",
  "key1": "VmCndowir1B3WvE4n69hNXuiD6ACKwxL3XYXLodtKGtE4hsS7UPYMHr78dCrUnJjgLRL1hywtE57ZUvwM7TsdJV",
  "key2": "3kZvTZ5zYtHARuTNkTqEtjbnnyFKJdjNdYQT1aedqmyFAroTtWemZ74U7ybQzyTtMfWD62ZpyioRLmcZc73kPC4v",
  "key3": "2zoeB5dCJSTW287Ey3cBFMDXRiC6qP2YDwrM1Qb5LcjNpgRs4GJMU85gVJcZTq2pP7b1eNC6fGvmkYQDLzf4iQq5",
  "key4": "3FeYxVzzAgZpzY232RPpCbvvTGMmfXa6AnqDGioVsDrm5AZNxY5wgjzJShznDSBB8NXPoTbrBwWPu4dF1LpmRgqa",
  "key5": "2bEAbWRrkYijDRVhTWUd1qHJVSi5NQb9UDioE9aMoM9z28AgXuaup7Jamk4HWtUTxLmQDKQfNXF8uBRZUAd1TsGa",
  "key6": "5DsqrMgBex3TTm4ZAr6x8zoeA89g6UeSYyPQpNDuWDT2TW1qFF4WYqPMpk13Wjdie1piB9AxiJzz1CL8kwt5gJ6D",
  "key7": "3thmpHjdSro4mkGyQBhA1RGhmzJAogYHtaoc8Dv11XNEKa2NKYsaEN5rQLiwGjgkT5kWcaAeE8fSrugXHJrVyo2a",
  "key8": "kbD27FGeCCSo52sHSMTwi25rQzg9bZrq6Q7Y1j7HUDfYjPgDXgpD7pYAw7EptA9FJQ1RhM4LY6nePKrrwPJSW3n",
  "key9": "5xJsGbeLQ2jQWmWH3YHt4Qut3ifJRy2KbAM5Arx2pBJd9R4rG6Tj8rjMc4ayNq8pzkKavUVxLkw45S93ULUhKJ86",
  "key10": "47H5D2z1heSzJMKsHP74vNjAQHPYfHf3bFfEBxWootDC49XAEYGBxaMkMCEzUqVkfDuCxQDAAdbLJ9cWTGEPtuic",
  "key11": "4GUhNU1krSX1hUvUsQsoR5uRU3oSC834KBXtPBULN177qJhkUSo3RbSGRXrkK2kUt7pARFUBWrSVD73PthTJvagE",
  "key12": "2CHqoLY5dV8xUt4p7oCb56Y2hSmFpKSgDZYVpnYC54LBXRWuRVsPaTQoB8kbk3oEgdjiCFwo9AW5GudXqp8e16tj",
  "key13": "Hv765HE84kfDrM2CViYe8SgE3MLruESXJyjfmQE9MRtyJfHw5978qvm9ZNfV4CxRThPq6vj5FpAKoqqTN4EFubV",
  "key14": "ZLD7weuMXW45h137nMhHeJmJFeCnK6vC4myH4HoDtyLLWvgJobdvgyLRRLpQwLbb3ko3MRSoTgkMptnbawrVvjV",
  "key15": "gD2RSBsQxTFLCAdonxbKjVuh6U6q31XpFXp1zuQxLLyf93FW2evV4TpeaHTS7cH4BP7hj7LR8ByGtx78exTo2H8",
  "key16": "129QWxMef6f8i4bHaxfgkKqLyySdXug3Z7xUQGnDHw9ko7JRJaBdEbYLmYw98MM3UoNktJH6PV8kseLkXiTXx1qs",
  "key17": "g425FyPPqC3BU2tCgzCED3sde8UwDBiUxKA9iyPt9yZYTke6YV3GCTBU89J1zoWZdKTV8cWV6r89QjusrTkxpva",
  "key18": "25roEBHNUfQ8HTo2EA9Z7eJvHixmfyapNUCBMoQrQH5PPSmDsteqwsbcZYjCDozakYEbnUEyksk7P7wvfqL5P1uy",
  "key19": "4FkPA72eswZxVu4sHnJk9mSua6Epfq2mGwzzz8oDhHQvXrz1w3thLEe6fRjR6a2hus98NFRbojxzdJK3esPNCEdG",
  "key20": "3qgNjXasQemxCYQYsNqFfQAXzAXn4bqo6x7D9fMZMpJCfTQoRVQSUKgb4wvaM2ZRP4jQh9fLyauQG7kUdHmfZEmH",
  "key21": "2Ujpkx9mBfkrt9Mrt9oFZBayzEX36ZVYqKCioeHH9WaPQ76zYbkDRWM7qhKCMNuWvJzGvBcNYVB9Ryy6VEc3VCyA",
  "key22": "2gvaXK4NWkrv2a6Y7QsyzHtmtnVvRVdNZh2eED7uB8QtTJKTzh7jXUjM59mLa2ydm4RWG65kf4Cmbuiohi9i7PyS",
  "key23": "5z6o4r6S5HZeQgLbotzRRpGtMjUYUei3UPQbgSsF2qSuX6HTqfAKoqrkCKEKgWxyt7FJG5HC3rtKSZaVW3pYGm4d",
  "key24": "5yqXCsmCwwGoCJmyfbcPcQjiGLCRKsFFP84UX1bUf6nuCKTUfx78Hb3gBuMWfyHMwex9CJP6vPaKjNczZwqPgaWf",
  "key25": "4AYJkEAxMDgYG853TjD7kjEcypDcCYtvTrshRYoAJ7c17KxJjnmJyxvbWsZ4ocTmPHFDjmkus6R9t7uobf38Ln3E",
  "key26": "2RgAseXdzDo3JXnK8nJ5o4NiQgtjyDLhRrSbo3eFrRUCVKYc597tWrnxNoCkSmWFxhkUjgDB1cEm3d7ojejMprPE",
  "key27": "MAagfDERuXH7x7KUgeq5jBPY5jXf4xVHyqhMKFRNNDHkZMcYvHRtTcQDDLMntGYSDJ9zzHRWPgaGEHAYD64wiSL",
  "key28": "2AJTDVUJEbNT6LCbh852F1rgdvua26UzRKgLgubESnVB3W6TZGBKjfNchf74Y36Ub7EZ8rf4LNGSwqNUBL7dHQPD",
  "key29": "2ccXivkskSARnvXRX8EvcnWHB46W57uehLSqwDqY8ZCxWCFi8W7RsQ7bFGi9bduPzPKKeqNzp7fLFm3VGka3st9q",
  "key30": "5QL8uZ76mboQXMC5SJRasvowaTAxdKJAfSBEkUCUJ3zk64okxpr4Th61eLECmFY4FEfjzZm6VUJfhM6EBXppe74g",
  "key31": "K3pC8TwYBUNZdqFvJZdw7zzRKGf7Ae5KhZXTCBm9QbfNi55xkbDLuHe7nKCoThmvv9Ap6N2uJ8jjDBAEHmwdMb9",
  "key32": "3PUaYagePRecaoZ6sMUid6JVvjki42S2TeSBoBdu57TExA1S6YcJK5CYQzgJM4BY3ceKNL7t7v2uGjrZYDp4N6Bj",
  "key33": "2eB91JQWJhqSLVVWeRoTyJ4zQ8JHy8D6xEdKyNAUF87uathvk9o1KoWMLWd1Lym8jmeT8ieaJE362gb18oc5zhTZ",
  "key34": "rJkqeeRsZRCxrCrGC9rLxwCtMZSHFN7m6VSEwRjx1RAhxMXouQCrWsthATdAuuw1BN1XX5n3MmHF88u5a1v9Be1"
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
