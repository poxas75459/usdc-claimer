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
    "31o5jYDGFfCNjqqgKD2aQFyYzHQFyBi1RQchxEXXT1BKP2i9XApiUQF22S7MbAgQ1FDXKtjRwrCbALNDipyp17A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WoRYLjPhgQt6V2BNw4rnXVVfe2QjHAyjrJy1uFuJV5vBvVW3tw3RZPqgMjQcVCWATURtEBV7geZQN7XPKb3TgV",
  "key1": "4VhUtekb11ZWHDMKa97w8i8v7FKHmS8H6qKiUG2z74DQnzbVNdKECGh27ovxfY31Chatwmywt4F5FDkdWwrRYgPo",
  "key2": "2swc49qqz9sQYys3QGfChZbiWBKsr2cMxpP1BWDs1HiCWAWfhpv9NR8GcaeEQVXiss7RaY8P9PQGzDa9QHuseiuQ",
  "key3": "2Xjzkq3j995sz8QU6zNeLkWGetMTZmCpnNLrVpvYGTDKmDGxLuJny1XYxk14NUwzgFfEheKhqX5Tsu4VFQgYz8vq",
  "key4": "44S1sJqQC9JtvzoKnxvQ34BrLbDjw9vp8S2u9nRx1Ur1JKyZ4tprNj2pezpkqWUyN4XKEQDRsC4RLQEW4CtKeNMa",
  "key5": "5RShKKWuGfViNZzcp7ALyPywRR7jGbqz21HEkxhhxwEdcn2iKFcWKg7P1FV5pDQEcn91VKdrtbJyvbp6gmkKnNwg",
  "key6": "4FPYBRj9qfxFyioXoKRdCLxAJ88d9k5rvrQHG3uEwP7CfkVLeJDAF2xcyH8FwpFWaEBUHt1Fec9gtk92CkMPWVRv",
  "key7": "HWzz9dP6YqVR4RkjtUXFy8Fbh84WampJPwGEgoGu4zN8Aw3dMFMG56vNfAEMCxphXkeY4i3hRuhMGKef3FfHAWu",
  "key8": "3XHro8GEWLR9F4CehgTPxpBeZTeNVFqpHXCW9QhXnUW2gPgw1A3oX6UXhFHd3ZnqLG1LeRQEQ36PjouUFubK4G2C",
  "key9": "W6rPEdAQUQs3AhfXXxVqSLmjAtoiMQ4qYhrJS8Ymk9ag2fQuhLK7wWR1oPDQ96hjRq4cmyRUh7hQKevGgpPtTYZ",
  "key10": "2LLbd1bf8TiUN72RUgfUbxEptAeianCLDHx9D8qd1Tnzhh18ZTyUW8WLpBERuTCxeeNEvkdEjnWRwd9DK3xDmpx5",
  "key11": "3ZRE4ZYfgFBCBAxH3gKEwc9GVZzBWmQAY1ZEr3nHrYWa6W99XL2nhytNM9njfyDEQNMFMSYebjkoWhVZAEebLXoF",
  "key12": "3EwzJwreQkqsszXc2ie7ixD63k4VRbVBrps8hNUCtLekwUDeMwG5t3TbUmmDjY4JFDxCWnppBvd6V69tfagjH1oo",
  "key13": "38mTKUmoLuVDhYodJh9ZcNb7U9yYb3Cn3v7UkF7KRX4VK4B42NuubcPTMBp11w2GJWdjPf5VkM1XZLzUBZUJd8Mr",
  "key14": "3uPtEtmj6brDjEkNoVcd9kHtud78aZAG43kYMd9UPFYW8otYgPyNvh1kUe1zPswj3d91Ds2uM7Cs2AHYy7pyzUr3",
  "key15": "4ganusZyS1AknHryzZFxP5BNAq7ARwW82R3c3DZZjFGFXd6Q3NCjZPvuro9kNBFAKDxqyiZxFtmRa6JFhzX81Unz",
  "key16": "4gYKmtW8iCy4rodnXd4URiAmfsWEUmuiqSkFhbUrWQnNQPhHuaugGrFQL3Q7ZAUAuWB8WpU4ysSFUPBpg9dBwbSa",
  "key17": "3yjQBa5QfJpRYpwixre5estgHeBbnzDDgSckFg4KGCh1sk8NbUnDHfa56xzqujVnFNWZxTP1vmFkPrag59m3GSeR",
  "key18": "mQguMJSDXgfxzjsrdBK1Z4fNxek8qswaESS9L42tEdi69yQicQk1aZp5vkb6pCpFYPBCEyYEHg4i25yZGhjYEcC",
  "key19": "5oW3fCFwEjPKtyw1swMAsT37A2scSKS53TFrxaGyge4X3zifXgxZgYeYHZ6ZE79ZtRokiMybNRPJUMa7FvzdpuLq",
  "key20": "4s4wrXJSMZB1doARWaf1UwuSDTFuKYZJuRHgMj8EqkDNszktqmn4WPnGXFy5wRPwZUEDm3iFt95AfXFpikvnHngF",
  "key21": "2UMomsHc3hZR2cj44mA2PQCxuS8rAw2HXYSGxJzg8Hha21cLguLP8zssSwbK1HT6hkJPVgWCYTHwJ84dko5j9SeN",
  "key22": "YuwxRUUH7D9e3ADMwhyDouk6cLViFbdGHYmmuDQro3ya3URsygV46Et2KvEj1QajekA5K1mRuRe5uZZctb8GkNg",
  "key23": "2bnEjn7ow4pSxdKdP99Wf1g3tYy9JAdSeanWiEGLy5Gh3dvPasav15FCvQttuFHQ4zJ7cPzUH3ePXwSZqRrurHX6",
  "key24": "jsePLzYaKQ4ssmEvWWqZNyY3Uo1efhh7WkvXr7YJk9Tns2d1nDwVsLcfEmwRCriQMZcabhVGqiUhDMiXxjFFAFc",
  "key25": "2YrTonexrzWvgBQHMkWwaKqbGLXHQiLRuhtZkfwjYw3z6aY3BfQ8dqjC2yqwJtp7DMDgREbsrkqnR8GnvwrBDSGU",
  "key26": "4Q7Bfeotj1BdcejDyzhziHVnL3ib2eKNZqH64pSAbenQvGaSeBcbkRxFaVeBSZgSJBKDBTXMmnpiJ5kMLTdYjv3v",
  "key27": "3KFeUDtK1N9TR7zzUkgyK3jGHm1QopVmyWV1kX7VT8qz84BfCaVbvpt7Pr2Cs2HeF4Q7387Jy6Ag7Z2VRiPw3x8Y",
  "key28": "47ht6S8iMpR8uymWWNZAAzJxqKvnCEcBDAAVvAEQwkj1pwptczL8iTHvMZd4zpJafBZ2DturUKa3wQ1D8wtMddeN",
  "key29": "S7WkVJaQXCxbGHuwkrXajGTKDfzZuBzWFEoqqnT7E8noH3WGNErLuLZ6XG7moCL7MqzVsgWgn3yUwdAjYJSnLoN",
  "key30": "4CNvN27fh62JL6LvAzQeQsSZQnrXvxetALJPMKAqG4YzP8EFiBWQoQRp2RLaxvdUKwitNsndGEXW7hWgmPPPGmgH",
  "key31": "2naQ3WHBvDG4KMKVJwD1Mi2TL6LvYio1B4myPAi7Garh6X6tqJFSy9ZibfuTXx4FVwn58TrhMSSCag7FoEzN5o8j",
  "key32": "gm1GEh5GrKcGf6wdNkJi4DeY7a2Gzdv69AZcWCP338dZHMq9evq2FSUQWvUsowtTsKoPmk4teWtmXtzif3dCMkP",
  "key33": "2GH7GzSme2mq4JQrN7fSK8agML3z1RjLmmU1foYg1bGCr59ATDjDwoZeNGCM87tSXX6stAAg2SqpVaK69JZz7bPK",
  "key34": "npmzNPKYJAQkspSK3waqPjmp2Zp1RUA3ZJrmNFq6BU64CB3omwhSGEbua8Lvj8dEHyq2kV6ekWbUND5ixMgGKmc",
  "key35": "2eYZu3Pwjb7f1yY659HoPFhjar1m2dCDF2AzVwNQpCJksLW3GfwAhABVaPM478ja4YewNrYNc9pEkZgWRChU1eL8",
  "key36": "4rEVggTruUyhgbuURzNYZaKX9WvAw77QdhXpLWjA1RCTSmuKLcLhW9FAppwAQWNRRNvMuyy7KMQdBzdZJqKfji1U"
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
