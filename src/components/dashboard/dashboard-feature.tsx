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
    "64PpFkJvRBHesYNGSjwc5v338As6NvXnCX2bEPjaEYF6WnVMF9iHEBoSp7sssRknHuKSUVX5j4XHoGpTPKpEUNM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r3iRyJr6VASX37HybqtWjvxMx3fJ1JzUNXS83vbKbXMdL9Rmizgqy8rVEDSBxAnquYoCe4zKRe7ZniJX56fBUDx",
  "key1": "VLeAbmtxVXgpH5QRBoYW6MKnjnXJW5iz5z641iX1Qe431XteHHtFTf3y6xRKfX75QXThJFvc5F6FZnxVujGi3wh",
  "key2": "56Mcz6ZYbUiBQNCFx3jMz6sncrc6jmai7zYgmPVbLsCWAVVcJYPxqbn4F1Cb59xU53XET6UE432MXDPzvv8ckCge",
  "key3": "42XjJtWqD1TBabzhRUut82UkUrxD9bjTqeuxpvZtfU2SRn62VNqTAmBz1ZpmMj4uM8ZtrDbzKabJbDd51inezLmV",
  "key4": "3Qf1518W7Sv19CTptAtvYQ3ch99iFu9TAo2inVPuqe6WxLHXdZZs2vX7bsh581PmTKTeqYLTjRXvQ5YjV5BEe9Yn",
  "key5": "3c55FxammDaZCboeDZPn32wJn8dCNyRHLLTk1wmaFwojaxNsJ2iHgLMSnWjDt4iwSZM6vMPDpkiEbxKdxirhpGXF",
  "key6": "2GBVfkFe7BFqM9oDY2rAYaLnDQgzgFpVHsWnynScYyAwusrBSB2tPRe9FCCHHDanJzWQZK6wVGipsSAkcoB16gML",
  "key7": "39mAg2fZX1SAbfcvJxuhAeXSUzoykZwhwEj2B1Je9hSLds8ouYdH1Mfrh5LxmGaQLqpt55wUJF7pwVkvKoNMnoZM",
  "key8": "3jUCEPCF3p72tugr12jd46KpHPrPx3Zv6gP3fPgDW1jp9pMHHeFh1atPEy3KcwFWh7zPZuLYzQ62kKkLuWSXChZL",
  "key9": "5b6UjtEnNvTPfk5rEV1WWKffG7j9JvwLdTtERsUQnih4EKLrvgdPq4SM6j2iMisNEgXUtcqbVuuXH7fCKTZXQ7db",
  "key10": "4R9c1PFWYZrdPbaSapoAjoRT9Tm9AVn7G6JRzoVuuX1iEyNDCNyXFS3NxXaFB7fJEwK98mP8r45me1mrHbw52Fw8",
  "key11": "3aLKtqt6a4mEpMd9G99mL4Yzu3R4q5jFowLPfTc3gG2ibv8Cdu6btZg8HVu6Yxwc85cUn6YHRa29LFnFcAZ7BxHZ",
  "key12": "3xgmWUDbxU54fpyx4ueC2u4KQt7nfgekADHqjdiaBNUUtbU1JByNB9iDoHhj9ViVsd7L3i493EsRYZG8CeFYvfBm",
  "key13": "3uVJpCHEHZTLkSX3brjM5tRGieUE1qYSb5Egb7oSxrq9Z9En3MnUbYkziACzMRFsh7rMmE7zh8yZYt4dXYiwhULP",
  "key14": "2gC4u6bVL5XPpLUmWg3qiWUex3N7s8h1mfGtdBWVcF83iTyuqfnbXWGoTiXAquRThcc8tPmgifc7pQfvd6nHPurB",
  "key15": "5LEFAcQcgFMJdGczygNEjPLq88BTt6FPjMLzxxPFgDXfEKTHeHge6Z8K98DM2ahSXmvNmjs4rBVyZYk1Jc9Kg3BC",
  "key16": "4fXdT2YWXbgrWy2qwxeTMatRu8qYoXUT5Q9yKAz9gznTsXmzNURXaN8bb59GMGtppcYDTBGafaYF2YvecqioZZ15",
  "key17": "3rhjviKQ7SgpPkPi1EHQZBrzgXpfNx4sS6FqMQm4g23x2mqPstbiuuSXfqu63r2BktGTJpn6sEGPjU4oU2uWfxaK",
  "key18": "43McQ5PS4wimDsBcjnWXS8qqM9v5pWksjgg7mTWBmbGXwpjXndwxEz15fqHXJ5umkSE8zmHeCtQpUg3HG9zikJYf",
  "key19": "5DyvefJDQejhvxdkYNtP7vmCnnnRT2MhPnAmvEYGchv7bQVhAgW5ERByeQ7tsYdAiUNqGhheqmJBCAdQDJpkmstg",
  "key20": "43HKK8XnVfZ1mLUru1if8DxFS7B5hAcGYS4xab612aV3GgEVfH8FX3Jfn6CEEwB6wRfbBKXa1nwnDc9zFsHU2Huu",
  "key21": "4svhEFSYo9xQ62uM89KwHonAgkqQDTZkfm85Wr5KDWqLwqmM2CMpvd88NvdC4qfZNahkJFcAoMz9iPe2ErQV4VvQ",
  "key22": "5SaNfZw9YVsFgNNWCpb3mBZyxzmK7oFVxQR6hq6Qhbuez4m3bH1hDh6P1Y1ZbvLBMj7mWoekvdnWBEn1AFZ8GpQS",
  "key23": "5yq2tjvSYxRHXtAjmQ671sWcyK3TMXzupQa99SaduGjCTWUpe3wLmLq4n6icgx91pkbiHuioYkYJqhzfsJpJ5hZT",
  "key24": "5KT9RUK6RUkwBVUx8ExbVywugdxs3CszBWCoZbSSMQ7QUqZ2jPBgKA87E3bdahYUijjVkZdZ7u6gVojBCojqtm2d",
  "key25": "3jRcP5WSptypVMJgEPCFFFGHTYxXMbiNnQG446vD4ZnH6iJdopRLdAupwuhHdgeiam5ugxuP32Dwt3Pm1mNLEBmp",
  "key26": "4LErfdCbv6FkKgkTmm84nEor6LS7QvyHp2TMn8PjTFYuVmeGeiurL9FNm6Ayod2bKFXAQ4ToBwA2RCdwjcQ65mp",
  "key27": "2jL1MAL2DFnFGP1VJpTbQ6BrmmEkZphEbQXXJUM6zXNgKH59rMGRnJWXNGsL5wziW3TboRUyAR7cnPhG2LqxAV14",
  "key28": "5uKwsjMFfQ9TQf695fHHaq2bvjt4sJGAKpanjmBiSDPvAFfzfc43jtgHnPowymdUJ1KNXurw7EJK3bA7Jw1htc3u",
  "key29": "NhrTZVdF3SGL8nhhrapHEgzUc2MsLww6KYLMC7zhw2Xj91xATQiNWZuLgbCSaHA1oqiHJ7SrQWFzzZJZMjyeg4K",
  "key30": "5NaD9RqXyYvGVPqVT8bVNu3rxps3tgwHDzQ5eKYFBPxyHw6fahu6g7Nw4zpmptkppAazjjYnfrjZrVQXg6QQB7WQ",
  "key31": "4wiPU48C2ab4iC2ejB6hCXbZhgG5WCRaBdfR5rUyUMzQK4V9YGvoGXfXCX2hxcoLcNh2MJeDj1MnCFUBd2KQnpAo",
  "key32": "25b6W2WpkNXSBDQydbLPWkBCXHztYsanW4D31a8BKVGc4QbJzXDCthyp7LCgcUYRnuo4xwUk1mJiFhiqHcYbJkDU",
  "key33": "5DkqrsfWjeEU7YZjhsJZHazBh7xWqTTrVaWxZotA3EzKHX9NqrJJjPigrvxwczhM4oFQYqKGSvfboTyXSEvWtqmp",
  "key34": "36y7eHRZpUnzqngLJcDnvt9CUuuYrAUDQ6Lx9CLTdsaR2YxHf17rT943PtfbcRuaU3tayNEUAuEwT1PjZJNpNZcX",
  "key35": "4Jiy6gVcK5Z2gvhUPLtp7pAPUr9N3h7JWz1QM9p3bhhUvtpPmAzcUq9G9ySoynGueDXnwF5Ds8KkGnZXsG6Zh7mT",
  "key36": "Wx6ebtqEYosodmtx1KUP95gukBMRV2AhjG4XBYedXD3za5nSGCkQfC7LvqCykCkCPsrv2AheFLPWMFjMc1FKh7p",
  "key37": "2f8FJHkibs4D5wJAtemrLdyX3fpG7mhdsfJHecaZseS4Ye4ahnJBaJDSjmtTDatbdM3aUdJSn62WzmeYnHjKFfZ4",
  "key38": "FXsQjonqcYW43THM9fbkweE6Yazo4fg8WRp3zBEL3Kd4m8fC2b43y76HvTdZAeP8J6dap6v4csdCC2b5WEvu7me",
  "key39": "2PeMBZZwinxo8mdKs6pf7srHk7DEU9un8aHjDgcLQuXNtmvAr4LwNfS1Q9szzkDC9kquWzuZdjo8f6segRb4M2EX",
  "key40": "2Q82J5NzKzZwwjHBVAXZ7ounxP4sSrGeHPaYEYd9fTqB1U4d5Mg7K3Y5j3sjHpJqTd4t3w5kp9asyE4pFMQNf7ns",
  "key41": "Kfm8FijhphEkfxDGFC4TASMQ6xAN6nAgPnCB5Bjy1vCyi26RtL87GRgfkbRLEMFd8S7SSHVEwyQF2vFd4DhfpoT",
  "key42": "4bKPwVCR93aRXSmNDyroGJ3o9YSDEctMDruawEFapKBPBC56NC2BxBWMuH1DX8Cwwq1EjWsibG2n2BACRALVLhF1"
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
