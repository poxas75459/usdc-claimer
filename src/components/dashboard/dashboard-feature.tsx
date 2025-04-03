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
    "ojqxGYSLGQTzL8QWDLLhPsR13VkNtraXA1pP4JtTjkpJRqknubzjzaFE6r4awPaBBqcsQjAUNFPAGvurfuVXfaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s7xkzt5Q4e72U5yBuDg1R9MbgPy6LTZbobnZbuTsVZKEeFcN83v2YbsdEyShGgLhufB5yuP8vLA42FA18f3MaBm",
  "key1": "4ahygpNj8rvxHYTkfs6kTnA9rbCmnMdC3J5mAEHBsBDdqpc1X4pfsbpp589Szj8BCLPgb64MRBe9q4u4yFBzyriP",
  "key2": "5ZhA8VapSW6jWXLFuc6Ee6zZzWeCX8Zr6WGzTGPS3EWkro1Kb1swkfMLGa5zcNX7KbzqfbDoiES8aZ8mpctnN2EP",
  "key3": "3auC7ySf1PGBWpmiEZ8sbv8akvCqPzYefHkAeRposWBC2gtHDETZuCcT3DkgcaP5wPg1BwkGJzQRMk95S4yostkM",
  "key4": "3adhLV2pf18G4X8gJFt6DrDq4nXea7PcF5oN8rykEyVhfgnRfYmYiA9Hvv85n374AY7ZkKXXFVhTHuHBGp7zAcx9",
  "key5": "4rSP8h6t7JBQpAevPJRXS67TQe1w1BVyzMrKokRN1vQr8eX4pnYdTjJhA3qXiZn9BMUqH8kqtBfV9AittH5b5RNr",
  "key6": "53aQSXFT3j2AJ1ru8KrzFJDE8Rsbws3qxSdSzxY5Mbf88sfgJvdX7TfmkeeJU3kEsaEhuS314ncoAWLnLuqn6HS",
  "key7": "5fbrVT161Afvo2ifRPHCRZNQRd9pg4aFK8f3rv4biFKXkqnPMMzuezbg9JrZN45vUV9XrQ15XtkrHzp2FosamgZu",
  "key8": "LBrKYS69h2KprKBaiTqS2MmJXCMsRzhi2MRQxXBxUAktQEHZVyofCXNusdUGRD96BdKLZGrEptGsuCS5VbZNPWf",
  "key9": "4SVvhPCR1SZcjNLocmNh6KzoqbytVpWgzrfqDX6K5DLNrTTw6RyxyJ9d83j7jmk7vRN8GjyHR8dhkqNFhE6wedQQ",
  "key10": "5KC7i5cfBpsT5tqc3k6GB7rgswjMxrRyQmZPbUN943Utv7tGwqt18cM8Dv9GSn5yFeQ6PVdWGzuxbnngNn5YUnQE",
  "key11": "22xt7ADmjvjGY84c6AVxehsCAp9A5asPpWJHwaTVfhgZweWgucrZNQJj9UngYKDTRw8pjNsF761YA6H1sv95qfdJ",
  "key12": "3FbcLtfxeamja7gHuaiQqeQci4Bb1gzNfBxceQ4fj33i81N3XreXyxG5mkMm9mcXVBaHWqM85NP9cJc5gSwdtKPR",
  "key13": "4tqp9CG5DT5zxgk7XFqsJGNNfzM51EgwcFB7zZweygTV3nPSkFWWsAeWoWBXmfro3G8dMs3DxNDGR4vBtE2zBTpE",
  "key14": "2yoEY3Lf2wc1XkjWsLcHKBThmLjsULfmjFE22QoxthtvQ5BL8URXeRUdjnmTYZ824dcNQquAMgPSszHKntNnTgGB",
  "key15": "4FrUVe3E53XiBQi7XZymh6diycMtzE3FFxSytH96hMeU3nTYYLvm8DoULSWWbMiN2kbgUpLvv6TisTK2YZa9dPmU",
  "key16": "4f7GJY5rSGQGEyS92eWmHvH731y2whTGGW641DhAL2vh2PkG1vFh4NR136JTue5hTeey6oD6CCuwVhN3gV7cDStC",
  "key17": "128L2nVXfpoafbApMNiXDhxx8rEJuAixskpFsppUcyQg41t2EWzYJ1xREAaWCSDhJpuTnfu34SM74X3HRGf7CYxt",
  "key18": "yu4fjpujSLWubt2bGx7qNVCrjfNmFq6MV5GGZeTSk1Lx447zhh7TGuJZH1wgv1yYURYdWMcikiU3XPPYxKcridY",
  "key19": "2H5nTe8NfmRyEwBDPzZCNR5DH52ADGptC52MncpZqU9w6c9cpPs4dcPE4ZxANAFPoCL87uLAxpUq4MNDWQZzVfiE",
  "key20": "52NEcUCautqC3gjnW4NNiPyHAV8EMnsU4JAf6BVm2Z3GSPERwPbyasJUNfKh8WfQkCd4k49Nhe4KmnrZXUPXSsv3",
  "key21": "22R347gNHVyqYNstcst9VDaN9NYnTQR4DMaDZeGsLpAy6PSvG6BVokbDrjXCV4pMgnfgn2xsSWXcaXfVkSVVWsRC",
  "key22": "5kh2v98qs9ZdQRoZkScLR6nj414NqXnFyMpKPRXUwHCUqji7yRbzPToGR2z2tGVqwFxP3eRMF89qDt5f5XgTqwtk",
  "key23": "3Pe6gPMUQcEeoGvhHms1kBwDzkoGZ5a72c35XqjY5SwNSKddFqW8Lu4JdN6PnyqMEtoPUsH2hmmajE7RbmaX3ZJ9",
  "key24": "3arKHaLfNGJpZk12ecJFtQ62WNf3kCMy95tTZ7BGVcMxUbQficy17YQLHogBA7Ms2RaL8jrWSt5DveLc9W8xrCBr",
  "key25": "2FCVM3Z6B26VGkeWAXU7DcWKMn6166NEr367DgUj6LsJqrxgH9BE27MCuDDDA76vWPvhKLZpdZw57Ure8hThQUqa",
  "key26": "5AaeAYz5snHRhrLvBcRFN8NA7uXkddmTeTxZz4tBij3NZmcAb1swH7m8nH9mYcfuEH1yVwgWgWgaEndXsUm6ErpD",
  "key27": "Hx47xthZ2E8L7arX8UhwraMLGX6bQu61FA1gY3ShjmEyQp1fwUasujKuPU8brx1EoDVWiez1kfY23sx1CVrk9Xx",
  "key28": "5N6PcbHE1XtHqs4dvvycZ8ZCULQDrHzwZ5bNB22V7CSA8KGZ3FhWAHHSNHsfNzZfkrgiLKD3nmEZMmseYNtWNNPF",
  "key29": "35eKR39oMc715sgQhGf8goovBCLara8hjemgvYuy3giLuRE1Edah2CxpypbKe1XNHynAzNrQMCdnmjVoyZWToHXE",
  "key30": "NLQbPWnrcJQFqvri5V6hDwiEtczCgVVNTF6L9x1ziM8ncmtVHsfJ2gtq3QG12UoAGgPQNGqsJyKWmkLs9nsUYg1",
  "key31": "2WdbfhZx8Y3y6x1YZTtsNdj8KbVdrM7twffCzanDS9aZE1ve2mNWfgKF1qZ7CocpgowNdt9ToDCKuZWktvV5VFTF",
  "key32": "494mrbx4uKfKEorhfELTCw9i4FwXpzTZp6YXtDAt3f7bZMYCpnt8Wb3VxQdaKHUTxGcx7LGd63sQJjA22gDi2Bc1",
  "key33": "dKxizN1CkwJhqwmfdDH8C4aSLMtmKBF7H4WMcg8cvf3saxNif54XX7gfKSjFzyGhsxsdyXHcYcbkEh3iBKPFEj1",
  "key34": "5YboQW66DWPw3LSBVpRfRQH8jKsfkGryxNdBsJKkiRd5pFK1LP6daiiLYVZQGcKZw7cS2nX9VMDq7VAowkZcdjsT",
  "key35": "3jDQ8LrS2YoemZbP1t8EXMUzP1sQdKKwFED6dZyocd2cHxnuisfWDjHrky2zJ7W1QdB9ecefLyzSsNX13A8sEGrg",
  "key36": "X74o82rQKx2Qtjuu37KWK4tCGmUVVASJv6Avnjg5j9Vk7JvpAFCZxEJXi8BDdYMVL2vtMVSrwF7aXAdBBm5PD2m"
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
