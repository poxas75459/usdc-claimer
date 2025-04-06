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
    "2KpdNiKay6CMibXrt55fqtXnGUCFcvufkeLQtL4GzzenqLvASSmfdaxTSdK5qzWKZKCzcRd8PKHkNPu53L8U722d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mzo7mPHYMxMP5WoVFZiXAeGD5frmkohqteNt16hhx1MVHU6UKZCYFERTJ7VJRuUNZc6wEa7xtzA94gGjrJ5MKBV",
  "key1": "QHfUReEjhxFNJdFP9MFg4tByyuaGkHDqWnhZLCisge5vosXfy15P4UNMhxjfhv4dQKrZakVRB86D6BkqTErDY3L",
  "key2": "2Wfn93U48LpmHdE8zRfW84uYVTvcKsCD7oBnjjVd62CNYJvBP9zfx1JNYS7XkAoDZuSFQtiLCN2m8SSR3khN1Y3r",
  "key3": "5NTeHkQvhDbfC76zZBGMd4cp1KcwupnFXVHMBawms9cddVBHwpovgHGQJrWPGH6ARgiXzSowwuXvumU26H4DgvdG",
  "key4": "2KNJ6nb79CEWVQgCnqG4H2TpALBT7dFZyK4XpU2L8JBmDGFWVQRbwrxPFP5pb1QuVhcEKcnqUoJLU1HJf4sSXxcs",
  "key5": "4FFRnu4hMqEvyq6wY7xftnxBQpzsd2Lmz9mNLHfHePGfkp2CjBqRpnxh3KpKiqG8abmwiNMCSYgWjQkLiAry3xVB",
  "key6": "2fetAXfmEWs9q8PK4yeejMGVt2nHPSbo3nW1uVFga5zRVzy9dfT5ekKBDowNn6Dm2MFTj7nsRkLCqGcDGtXMArXE",
  "key7": "3i3C31Cq93Ms7V7yecomWrz7J41QdcSmwD1e1iaqVyp4UvzJoQgLG5nLFeDsS82Z8GX4R6uSTH6Tsa1bqhBsnHzx",
  "key8": "4DZHiLpBSeHH3m2yydWQfHP6vD5NKU4DqSnBkaM9mV3iaB2bkPjfdbf7yPz3DPwYxdjSQesLadjeSLPYMbUiFqao",
  "key9": "zoEjKDMUVEeThMSGzJFVSi27UbD7zt3qoPfgFyJdp2d2i9duQMsWfQ4xX8B7Hp1obvyzjcCyqXWraf7eLSUvCPT",
  "key10": "47tTY3jftjLx5hg4o7ND5M13TXNrin7Bxiq5nicko1TdcfTiVsCc6zoxV63eJ9A8FBh72HAQDtMMbeTbwUzLFNxo",
  "key11": "4ADSQzwmaDLZUerBS315aV1KtinaE67rTddCkSqJiegVA4RNuiMQEoEznZzoHjCSdEp7UG2TcSUcSmmyVgVFbnt5",
  "key12": "48iwWDmobEg25vYB6XjMbyi17X7GUVkgLcA8Gg4un3brdb8NCsEVuJbHZzg3QtBhnBVUhwuu5jgG2sLeVDwd3HTr",
  "key13": "2ieeFUc7Abe7Y86ekyXCLSpPp5tYQufPxU8RvKMpcpjX7YwfkVUftMZckebz2TsDWCY2836ebeBpPEzEQvDWiUnY",
  "key14": "Nf6Q9cMwpYdERd5kqMNeFc8xRVkBzxb6X6HpqpnZmzd9BX56DA5mdr3SJVeZrB5qRaV2qyYeFhtD7jz2yCWuBnq",
  "key15": "4tCXmofcuEBVZVDvAEveFNoUvCap6PCeSek8iFFMKfZi1S5CGogLjWn5VPA1XBaTQHyJapNfS3xLetMCFhhhy4ry",
  "key16": "432RujCRcwD1WW1Cyv2ZPmqw1NPMivqchbEeYF9wAqDvkjoZzzmsejvnAmbnkn4PEe37vJjkcSXvp4HGtYpku9iZ",
  "key17": "BV8FeLdFqY79aiYJCF2jHXtVT8GKeLHMzG5AEWNDYZRMY7aZoXNdBA7JDHdq9tTPhh2pYSWFr8EEdECGonEGTnd",
  "key18": "HC7E8a3JPBpWGJEcmq2aujqnUYTPAk2FmS6xaKMTxffC6Le4bci4NKafsCPnwJmBMZQehQUqxTdioe8ynY8Z2mY",
  "key19": "5ggarbyCQzPg4gaDu9SzZ6APqbpKo3i8qSUuBdtzYsNpsLLCYuDThf426RdvQUXALAv9LpZFLiSghzpc1WQYAh4X",
  "key20": "2Agkq1JB2YJZNE6V5wXHynJFfWAFMViFFaWMaY9kRHru8SDq1eg9WGBdVuxZWWGukvGjBit9zeCXMzgErCmTS5xj",
  "key21": "4ZFJwgy75iwfC8t98vv2aFxsePXsJ9FoSV89Qi85XfHqvSBV8uHxA992wUrQbgnkuUHtZ4zeLEL9VEqHG1F39SUG",
  "key22": "5frmPu5kbpfY9iaxEczP2sVvxqAuGk5K3Axp8onejZMMmJMa6tsEdprDvRAi5GNRd2Z9KXdwmoARdX1zg8j9Gg9v",
  "key23": "5g4s1NBoSJ7HKuCierQogLp669qj42m5LCanqUKuwR4xTfdaZMTsVoqeMbrcE998bo4spY4pZNvey8B2aYMSpww6",
  "key24": "5WCEUkFEfH9P4HYfXZ5MGtdGwfCPjqBaAt5NZzfqG5t6gZMQwv4ZniXnXN26PmmREUo7HKYbHuKXmGeip5oYbxNE",
  "key25": "28zqHrtGwxmk3v4PNJCdzTae2SezmJE6WaE3qioMBESQY51RrD5sPqXHVNxngTZT9LXaLsdxz9urasZYTvEkTUyP",
  "key26": "3zWnGJd17Ntg947dQz4idC15UpfcYDXHVnqGK1d5SFEeaAPuDUEjNXzZKnvNN8x4cNew2tHfaMLvaUg52GdSGvJb",
  "key27": "31WrJZoUmXiGdMSK2XjLy7cycN2bbr5zHP17pRrqXzGycrgCKfrL4oNgexjDbx7iYnsURZaqEjNde1m3XHdY9cH2",
  "key28": "4XEb5Q9FNeRQFjYdDW7Qerb7rSj7HhsrSrJDK5Q817aAvWfQutAaNfshAbLKfF4Zf5nVfZ3hUkx4Fb31SiwkrzTP",
  "key29": "r6hHHPBSod8vEyKCKkTafhWxgkx8d68avBotogXYC89BsLUfnUWEE56kWWx7vHSPYQJQV9f9Mh1GzYC6GdEurMw",
  "key30": "4EdkmC5ZngBmXHQKnivqECqqxY96UBSSmei6521DuDDiM7u5gWJcpJQCRp2XydtFmr6Hz9eH7en1poRU5X5qAjKu",
  "key31": "5gcFHRcczNPXzQzQC3TCsch4HVHzbA1pdfNweZnWVUUDXeD7VdZK4c5w5sPbBaKS7V2ivbaxnPry7MYtk15vNJ1r",
  "key32": "4S4CUAUTTD3CnYsnnXvVk77fRQrv7vqafJBNph6ZJJdwEYB5UBxHEMRYFj2h2kuLMKYJEa7fDtZqx4icGVM5a8hv",
  "key33": "3TeQBExbXHX53wGrWKrA1wwL98KUujAr2o9GHfRxG1KSWBQJCLQZz17zZcoPToo8Cnjwaq1Ek8Rm8z95MjBAih71",
  "key34": "3kUzfWoUMEUisqZyABMd2g6u6MWj1FLHd7miubZYwbR5xjGGcQwmxSkNFg5NLk17rpk2EaCdYCMfXVTsrBiDNPDF",
  "key35": "324McDqCFMAqHthVP9tWtBZC6Kug7XFomAARmXAgX6MPqD3WFEo13g9s549NuJTWm2X9VUuVHu6vCDBkPydMcP1K",
  "key36": "3bsMHXAtMo6qj7A7N2KkiVNkNcE55fWYv9X4hevs6BGMavhAZ8bNbMmbMLRfx93H8iHpnhU8UAYdzjRSacsNcUCx",
  "key37": "2xEwZa34p2d1QttTVowhMdYVigXcmc55ueHRXsYZKRXFGYYujXGVeHhL1Zv7N2kQgACn7YgVmeMwJMXRFjTxZMSk",
  "key38": "v693ZYgkFxXTyK4yr3VQ5XguwSpWQ6gJ3jGAzzGkrPyZDwLWmxQ4pze64u4WrGUkxqDtDrWSotgnhgqBnyiyeDx",
  "key39": "3FRKVy4QqWo6Ttc4f8isr9S4v3cp2wsqWFvb75ni4cxpMSBan1XDzkHmkUVDknSmiLPUr8DFDdc29j5EbWkKXqhj",
  "key40": "2Six5hSFScDKh5yui78KAeSjg9UY1qWAdqiDrAq6YWQCtohQx2vaArNVQCM6LaTWYtvMx8tMhgcd3sC6qySG8Yiq",
  "key41": "5u1pdu3vysc8oeLN1SX2KyFoo2EV64SKEAg1ZyNQLpRvHe8ZdNGeCBpLowC32jvGUFKb6HbqBRDHtQThEYa3EGBi"
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
