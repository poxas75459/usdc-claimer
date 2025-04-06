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
    "3ciRA75zyinygTPKmBuZo1vMZ7nzTpJ3xcYp5KpViFEtGmbLXfXvxBinhwNWLmsBa6S4mqF4Tm4NPCWoLdHAZopK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUafmYfzwiNuwwFFsNbM6TbNcMVDCXuwDseY3tRBim3H4YPiQJFpMrVRpekt6aZ1MxDabGc4aRLTQqWJLQwwwvx",
  "key1": "2EvTM2VWYRdmsxMCQu7thLwo35xRtHMTMkJPX2XD2ApodQ3eqZNKRoHeaneRz7aH7xT9UybqDfDCxFYAfe2h3o8X",
  "key2": "5R4HotREUW9PdqVLi5hxQqEhBam8bviyT2QhjMukCrnu2YDQNsp9qYgDr1AQqvMNjGWSaCkjt1wygm9VZaqgcrvz",
  "key3": "5x4jQc1J7zbiqb5kEZB2UYbYhy1QtV6yoQjKgLrjy15TyupeMCHN9vqqFKfPffoAhScnjuh5fUfZLGkQY4es4hiH",
  "key4": "3hQMjF8vNwidYkW7KeCYwSSGqoVogvf949PTZCai6GmYGZk5e7iqT71uYKBhB7buxhRSGpMHEBRdn4x8z8CCixjJ",
  "key5": "4agsxZLvSquqCoxSQWvcwRSuBRDsFQzNu2W5NhXTfBrpzmnkPwBwPCtRasJzPmwoLAzLdo9pHNcpUocoeaNQikmA",
  "key6": "4S3miuiynb7oWC92gCm9Lx1amT14bvbSz5qtG9RYEgX31smvX1m2yeohYZoXEXPRR7Jt2RQknLjRMGbZyKSCxDuW",
  "key7": "5zmrPiB7r3Dh6yVbEMFZdnyQD6DPbHUVm3KGxqVHwES6eEjvk4xHX7itH7E31AyEyw2EQWArUrb1JG1UB6obvbV4",
  "key8": "4XZvXJYqJt53pAkqCntjp9ZEuvfGBeLZt3Eprh6gbbEM4kb482EEySBJ1J4oCFVBjLaqJxZRLFfHBxbZGKe1H1b2",
  "key9": "4B4WhGV7mXy6qvkjmPQCzzAcjDsYGA81UAop8L8HEAwYg4tcJM8hUzFh8ai9GRnixtyFBPjYUXtuPWtza16qZ5kB",
  "key10": "24WTga4x2m31EmHxFC2ymVmii5RJEDyVL4hLrq4tnfRXPbnq3hwrWnm5sZEB5eAmsBu2kBm3GUyCsPT3qr5AhWKT",
  "key11": "2hy4g5RkqdscaXzhKA3nGCPqa68Ft21pzGz3kqpGvBPaoCREnwa5XqKTpZEw6pFhfZcNvgqVBKFGKQRJgeNBxVwM",
  "key12": "5269mRNcMfmEWsdzpHxRJ9MY1qvgSAmR2rR1B3pPPN8CgK7Zuf5MVmHimzzh5wpJsKM8kQZdfGVZRj65GgtRrR9o",
  "key13": "3vrSCPLdUT8fe8uuXh1QF8m6PRhVEM6VuYEePGZ1QZZxTd65Ej2kdX9446uk9MiNPrgaHHtxY3kj4tptJmdfcCfm",
  "key14": "yTtPgTuUCQ6f7UNPKsthiTPmAz6etXFCBRgYJDDSbqCwYPq3Z98z3Ua2M4TkhrhQJ82NtJ9dCCjBi6Z8ioECyX4",
  "key15": "37UFaYmEizNU7eBmytEyzgDZc4a8LJPQoANKyEEFHKCAFWeNpheNTGJKvfYi2ok4RGgkCheaKLoFDeVoA1v9Xf37",
  "key16": "4wnodcsarZpjsXhxC8Q6DgLNHpNEdVk5mjoBv1SnmrGhSd8EiaaC7KQeQT2uqALHxrU8JhrRSFyJTPDVfFiRT5H9",
  "key17": "JTUQsyvj346cgTtT1xia3TRRsc6R5P9TT6vQFcDkYCfDRqnwr9Fm5SggDoFPK7hQBsnoM5ii26WWrQtorA3bvVd",
  "key18": "5txrd24ByKREakieknY2VWTvYDGjew5KUPbnzRX3vW8HT5pLyihGBK78hN946dtYqJu6YxBh3X4iAS3oEWAGf4jp",
  "key19": "3nDwrjN8FY8hxZUif8PTp7wuE6uuw2Ra5pBfsBaJq7anoAb3SPqRRBkdyEzYkP4adJ7jf2jQceuQWZPEVjCUWGvS",
  "key20": "2998p7EyPThpgRMQCTEapvYXpWbzFWD4R4LMKLrG6cpont9ZpvovyN7E63ytjZjpKUwQSrNARUAbSHPv8iuVemiy",
  "key21": "3aafQvL3QbFpsXH45QK1eRmbMQ4mzbAKJTshGGsQozsVK3Y1h14HvRWdA8jT1fGthB4JPGspV8XUMDEvLNBfiJW8",
  "key22": "49HYSCttKbJ3NZ1TDbMoQvbSd2QzLN99tGJXQBGsV4X8FAey9j5qhy28S8uRyXcGdJyYr6mUXFHU87U8VoeN3FaB",
  "key23": "Ahp5H1SzYPD8EYELLuEh9UMXnxez7mYzqzVRqN56VpnUj3SRiAZrr7wFszxvLAqt74ueV269cb4L9jruQwQNJiZ",
  "key24": "5HudMV8coLuNNFzfjctSdv4NWvzhL5da89HRvSMLii6BqUpB694m4XqhQd3NK7tEpU77kxdsRD5djrovXghntqLr",
  "key25": "4dox9k8jrZKTvQ4wLzh8cEp8mywhgFEsA6h6Tp4vTsaVVVvAmf6ZEXBz8wXh9Sqz8WW1WT1itg6L5Zw3MX2veN3y",
  "key26": "3tUn5YjJs7Va6Whud38acg4DmytC1hQbXBbcppHE99MW3HkER743LTzyannRGFGts18iCaEFijSuWrD2TpTLnsWi",
  "key27": "bjr9J1fzEobaGWwPPN6dPz6XKg5eaLqz6xUhkTBuAejCirD2pgozv1N4UNSc7NVQQv8FBj9peA9CFvemAHxNBxh",
  "key28": "1TZwcUwP2qjem2ZMG7bLJ1mBst9NLbLRMuedjLTsyjcDgHoG6kJwAxpN2grAUX9r49NTwJYLhzkbmBLNbpWy2u1",
  "key29": "5pLewJmM1zFCvDDuDRXtS5s4TaoWV7ZCQ8egw9zWc3eSVVYkBf5ZAcRLbJsGaAHEKEnz1Xsg34ze24XCimxja42C",
  "key30": "4GJ6L6fGoYVggjWk8RLihYsVSNiyRaHaFvYMfkBUa7jNTv35b5hYpF7j9Ppd35kEtoKyuk3oAiJnAWJ85ZoKkMqD",
  "key31": "2NL7x6xu7bagccQH5AXAhLxRSE5pMtsqhmcFTpnm1XrVaRYqbWLT1io4odoMnmo9yu4Vv7LR8yTxxZjvdfoPYQEY",
  "key32": "5vdpFamBR3wbxPmgYderJHHUokuaC8hD5Qt3KGme1J4WSMRJ2ZLrCf9NM9KtgGh2H1sQ1BLQ1YgBT9xLaHxMAy5B",
  "key33": "3w7TdTkaBWt25CpdavaDyh3wVF4N8TSz1hBNknKzQg8bjaFSKa3zDvbGgX5eLtogGpUeDm7CQr6Uz2YVQeS3zsps",
  "key34": "4Vpz144TR5bKFdUgAB68QAJdk5RqAeRiAtHNRyPZWtcvkFLLifNSfMgD97JUb2L9e1tD6omwyHNERLexbw3SV9zg",
  "key35": "qjojTcAxYEU3pJrK4Z3mR38MzuhATr75BgEoSncQjyxmS6HLjVzskVtTnfTBHmdnSCU1yN7PFhy6viFtXk4M5wh",
  "key36": "h8vhqpMMnw8PoDgXTL4XnwUpjdpkeMamF5NRj5G7iRYhm9RcCpb1JPJTvn23vD2bRLVCrvBLpR59vgQUza5WHNe",
  "key37": "32HCKdwDsQKLwG1GDuFdNnrAapr1u5wkQXDVV2wAFNjANesgudNd9b6yRnSrff9bEPQBWqoMioPF8xc65T99Q59Y"
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
