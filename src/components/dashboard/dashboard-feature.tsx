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
    "4d2raq9LbXbFmPEXq3nxiX97HwZ72RvoPzuJamzhpseg3wjgmXMqkeKJ3SUzbk3hija1o3yEFnerZpufhD89QVWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYrHNv6JUpi2WgqM6MFhfwJvLCVEJ37BfsGiTGqGa82kmXMqAAYktGFLVjtqijPF7dVjC2FMRpF2uAadu1GU6Xs",
  "key1": "48Pu2h3ZSRc2x5TBZhMeeBs64m6QHTyNAF1Umd3VmQ3KcUM1Jyo7ovJPyRVqjtF2z6pEaGtLhaQXsJw98FM2AAih",
  "key2": "4g4qNeBLsrhQwMzzehwLjzZ24Hmj4QX1i5xiyE2g3igL7679UjM959yi5ni75ecxxJmvbmxNb6C8vdE532douLyN",
  "key3": "2X4ZA4gu34ybZcFyFsWxyaeFJZfk5EQVNbuSktkKBYfjkV7xvz2u9Ht3kiK3m6uqYT11Db4fas5Uen1k4xJ8E7cA",
  "key4": "3oghdnFaxGiB5aYugSkFtDDPiYVWee5ZAnSYhwBV5EHEnMkSE2ovCTmHYFMY8ePV1AuEB62sbrqQcXiH4ivWN5N3",
  "key5": "2Wsdsfj5ABEXtZRqMpxPxqjwCP34Du8fCaaEfhtk1QVZdUnxvzRkTyDUQmYfHpkBvMneHCeJBT2zX3YDMVTtb6Fu",
  "key6": "3xA7LNXYhARWpYDEwwjFNzZHPvodkJTQHshRUuqPrnuMEk6h6ZJYJWaahjAYDTqeX1TmzYZKNwyu9oARbDeV7cpC",
  "key7": "2647tHBavBZ5irsjWNcZGYNSvwjzSdNsMCq9s8D2iooV3sk69YS1ax92m5uW93CEATRJbJLKqMA9hPDNu7VkxtBK",
  "key8": "5GFWBjK3DtmJRu6bLZUhbXCbfVZQVgAKLwpWKW6giC1xx7exCoYfKXWf7GZc7pzVF111uwotyR6c3Wy2jq6VTyvb",
  "key9": "2cNArtwzbPcm8nraoh5uq2Ey4WtM5kZLJDn96E1i1VybrURdoqMQYXdh95r6UDhWMNv8WLZono1WRCczNvvSUS21",
  "key10": "5gci8SSfagJG6jHwzjMV51Av9Dtoyo1eioNedEHhBr1WotDGjGRWNKezihgfSW42ANDQ9SjuBAGi6rhJRFdUEwR1",
  "key11": "2iyLKByurzzSN3WVt3oQWgAfvZmjhJGA4BfBqxVcEKPbQhMJfvcssXYVJod5J4QGinGVEXufzKiRvK17vkQNQewq",
  "key12": "4S4T1G7rG76FKMphepbHRb6niy9seedRZM8wyeRUKxcJaTSDMYPGoVzEJscv619FugKUEd7pd3iMSv8Ky9FokVoS",
  "key13": "3HTmN2xVJvvYhrRHtQVxr64WVfbxR11tVvrUnMPVUncREpsdpKa6Ur6Rj2asxrjevjMWAcBFU5DeTDF8hK2FWU7G",
  "key14": "9s9boUaDYgi2U3xvjXStSPUZy4QP4r4kfQcZ8G5S7VXRuX4bjXZdpKNbDSBhmSegYAaDJz8b4bQ36XypSvDDvHe",
  "key15": "2eSod8sQbyej2Y3W3ptACf1Ux11Dn1fNDtfpudognfye2unnPR1HNguSeZftew3ih8V8QdDwo9mZ6PN1tvCm7jH1",
  "key16": "4yHweGaSRNmnMpUedHknY1AauMNN2NSMzbYALymgH1ugFN8Et684Bv1mMkenzZADBEnXDunM5Th3CAnbwnnrRvhi",
  "key17": "5UTPxTij9Zfchvbay1qLePY3UK35cxfvp2acGKWi52HDZeTfexrCzfVZTXthsXLvzbkJE7kNYtbabt1opKAGiRPz",
  "key18": "3bqbcm7VV77u2qDbMxzCuba8BvBYbk4HbuQVC5PusqK1pPU7Ge9eyKT6x2JipXP6k8CWeAviz6ApN5VsdwomUFF5",
  "key19": "5y3yDEzzw3FSGmuUVfAcBXnTWy2jj3KnxuoCgTxqrrks6atC1jtYETnEHssTFfCGo84M5u4RgzPx4seYyyPnZEco",
  "key20": "5eeR4R5Kn582ixunBispyZsWoEbQ9dQ8V362v4Au1YJK3Dt4toFaWhqAgSaZAHU1tjDpXkMap5nrCapKQnu1deUr",
  "key21": "4fYaBWzwX68XugC2f1U8g9Mu9b3LYDv7vHnNaAgfePtEN128VN7qTxFyyhJM3CQveBqMKmsv7UTW6PVaM6jU93mK",
  "key22": "qzJPPFTt3owaGV7xhtRjSYrbsbn9TCmh7HEavKrNvNdZuMJyv6cg9GvNcn33w7LweHkyp4esHUqQJtdV9ctPvYw",
  "key23": "3eTmbAG8UGfCX55XvnSR3kvrEhZPicfhcRDuHGbVU5eSZkpuarU1JLWRsZeHs4jTn93yJ6rM4GfvJtn2U7iKof5C",
  "key24": "2cDkHTf5egGcYtM8kJ6dFbpNUSWTR6Yqsxf73zoZWowza3NjsjQ2DDPXQwJ7vav2Cr2TF8SqS4Upj7h2HUBhcgwV",
  "key25": "YJXSycYaGLLfCGeW961S3r2J8yLDaVeVU4GCVLdQZ8rr7yUSHq213PnTecsNV189dBX4aGdSZybmwCBdVhnU6Wp",
  "key26": "32A4qDHgiq6ZkGf4YgpVhq85v817zVqLkzMXB7DeTNN9vFHnUYckJEuZbGBhihPvsQyAFcKim1KUEiiJN8nRpsiu",
  "key27": "4ADmNgWhB8wf9W9NdJcXjdmk2hBzgNrNyaR5LLgMU61gE6uy1deBKXxr8MQkXqhyVQjyBQpjbM5oSyG4qbP8qVXr",
  "key28": "3cEYqfEzLt9kZVGu8UFnCoThwM5GCBWsfhDgGSR2z5bgNtYa7SMup6KNnbL6pRiBhz9oWtYNm4wmjQzuaenVKEfs",
  "key29": "Ns3rH9WSzubC1NKUTGzPM26Un16eNGwVbiMq9dzx7KpftreBw3wPApq9UetxyRVZLi5fxkdiy7phShmx2BjvDW6",
  "key30": "4QvEx9hWfFKivhXRaFEYrWt7s9uYKRfDwXDqc9caHDEJqHoNmeKZao9r2JREKefwSk2Gsvf28pBaaoPLUcitR4Nj",
  "key31": "Pc4BKcE11rrYbWoA9Wgo9Wm6FBFac4jsc4hCK6eC2BV7skCwsiEG17eKUeV3qqRCour7f9iY4d2xzX9hZWSic2i",
  "key32": "4RbLsF5LeJgqkxfpRj1cxhqwJaYKzf9WDpQySZFFKrPgZyi9rRCX9UZPvFQUokdrNmQX7SFzjpBQukmpmKTVEdQG"
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
