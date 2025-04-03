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
    "4DbnEighKeuVTq1mK3MKCDjKqjWGL2dd6P4ztopwmv1novVWU396QwGJx47orBgLqYGxrU2bUYyhL7jbRSL814CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394Uf5Djnc6BTHpppn2WX8ivUGryavsPo5o1W8c2deeL1VAbMyjGesxvbTbBX2XvbqQm5Sf7ibHxZGt1ppw12K84",
  "key1": "65rSVWEuUfo8VxR2ByUpfqDZyNKGUcYX89ufRR4xxymAk6TDf8qKGYpmaYE4qD9HCfdoBBs2JmTq4bCJCWEz6fiK",
  "key2": "3fpuaSx2aBWfHKTyFZXt1Bb8U9iRg8CmspyTfYFiSh4oTxZuDhF9MR2okJR5b1yB9qZH9ZiFherktkR7PkVn9aCW",
  "key3": "5ii4cEhBvH9LqX5XkuZKCaL5TTWzHEEJr5LgvTb8a9xFRusb4nXKYT3fydmCGi7Xg6YEQdHDKXnhz5pyoR3t3rPY",
  "key4": "33qxcuHNU5GBNtEHFVTizrnt1AZXQLfXd42FizggXuQXy9eXtkJGKU4J7yPVM2pJ3erYxQJp5H8fPpJpoXXdyh1Q",
  "key5": "uHRvDCTk48xXQMG4LiTGJGj1zr71pHQdFHCqrkbLooqEgCbBvcj43QxtbLLshATSdNSCmmqsNwzukgMedV1p3m2",
  "key6": "4o8th1ssZEMZ9G2g2BVnoGhK2UawXiSVaa8gBZN7e7qeNKQQupuBSfUNzZPkqmCBLf1kAxn3gcmKSKrLrjkc2jtz",
  "key7": "5j4nDjjxePpwu8MBM9fo4EGpLBZMuyZnYn5Ne54gbgQzLexeWsg4Us1aJi1eMF4XjDVuRbtSLrwRq2CbhDrHFv3b",
  "key8": "3QhR5qRHXfoPdBXrhntqLHrCmLHW7WNfccAu9NKtKgnzNyy1qd72NMvPp4wCHKdvZtrbRL6P9JAzxKn3UbLX3C4h",
  "key9": "3EL7qnG3GQX5NUwZADUQ2rPxmxuCTG6TYWku5ec6phvsKC127HxshDConhyx1Nm6Jm5bXSWsNAWpbzEryTcedDUC",
  "key10": "2Ltnpep5PDHQHzQ8JxaZF3UBuhqK4YiX8T9tefoUN483GCPrPrQCejYSLgAGAbKV5Ky6AX7QqcQ2yFPXU5uhWVUH",
  "key11": "GZ1NXZ5KCXPs1VJXuo5zsYY9s49ir66fLQRmf5PfxabczPLq8teCu6SGTohma3J15DAia651StAWbw9nqg6wrKC",
  "key12": "2AaL7PBRHD7VxMu2YDjwUCgv6zj6gkd5mizW5EZaYcbJT1GuaWsVZGWchpnZ3bue4A3X8151qMefB2zs9veKL3gL",
  "key13": "CakLwW7NfPegFDs11Ug5HCbdRmXarjuiFTCxSnNhH9ws54RJiapJnPzf7FXuYNqd5jHgEpUxDH9tZpxrkG4So6G",
  "key14": "BjmJhkWbD7TVv2QU5LsUzMdVgyMW6qzcUgV1VpYNfLQ6PKCAMagHGz3WRCfi3TwNDBVW4fEHcpYhUKyAFMm2dm7",
  "key15": "KNLyfuutqUYMVzDQEEg91sFi6iHSwVk3K1BvVqSgHy428xdrWP1kSRQ13uBZ6XdxoeGxTvAFgLQ4Ak7b2ehvMJY",
  "key16": "hL3ktsEkSE7iQbhxQVet2d1EpSRyDhoZwzz15uXP3LJNmSqbqrXLnThHmSRQxL1SQ2bj7ZYVpeHF7y3mXvQvzTt",
  "key17": "5nP1tz5DofAw85m6SryPU5qdzqUugjp9ZTzort4GeTRjFz7AjNRzQFDf6SffqnqqXD4wgb5FMBpF8UXAZ8AMB9y1",
  "key18": "4twGcVnHUTkMsezq3vtchRo7AU2CR7tLLyf7BPhqfCR9emFdrfTgyWroMo8XHDt8oHeE5SGc5gw1cp8QfUnJUTTL",
  "key19": "2G1HVgnXtht3o8VNq7qaKDYZBdB9fqfZo4j4EXh1J5nkeVugt83Grj2NFM5NCmEwQSkS6UcFGPUSA9Lgdn7ZF6vX",
  "key20": "482tJpZi8PGHyf3RXnW96VhHDJb6oE8KLWLi425fNAbvSDjw3uUxoj3ECWFzwijCEu75YsHxchD1CgJWYxGNd1m9",
  "key21": "yKe9dEwqbNy9vwDXxrD8zRv63o33AXGhaTi2kkzH8qX7aetEWqJGUrnyFKQkmqbZPwbVer1sStwV8u8xZhGo9HD",
  "key22": "4xR8PGYJUjCnHGMwLbuN4skoZnMMjw1RJyffQiMwVZcbpYJWbm6EQB2CttQkwYEjz2rraUsot1w8aLVzpfXBDZM3",
  "key23": "5wATycVdZt5H7QXGuKnHJQLqH3TvjAP2meCMwmboxZfEYtao2s2tVfDy4esYNJL6vkspVsDfSHtZeiPGv9g2pRTV",
  "key24": "2Ngv4rTFj3PskqZ9qvH5TAfRxgbLiEpeBKg5ViZtYM3t7MUiDSfQJ163ZD6z8S32CtSdDJBF7cHzf4RjCzeEU24u",
  "key25": "3EgdekUecbmyihhF88Jn8ZZzz9gye3ZyLFyjq5rYFoL1kJrHAoH9wrUBmJuzCUjef9BtYW1GwmirYwMMfz7Pfd5E",
  "key26": "KGYbZkaefU8caJZ3L5v6PmzYp2SicNfBtqxeoorxAZKGhifnjYVqFcJN8utxUvWrD7PUEPVD2bxf1ybYJ6uZcWX",
  "key27": "5n2BH72ubQ7i4WsSQyazYvpKbAzxuFCfifpHkQuZEmw2e4RhddL349t3YeYx4DtM8Exr7f1t1Pwcd7rZysNYmLv9",
  "key28": "2sDJwDUcz587AFETa9pYJNzP25nEgDXKzrnwpetefbhfkcQzpsSvEgwhdS2JyHfhmWdgCPFZxx3oh7rUrcBMYiVg",
  "key29": "2BuRksE2SedjKXWu2ytbwTg42hqWakATNxi6KXsrYL7tqCqGKfUK2VVnMQ8KVsnLK14pPsteMiTvvoyh5qqDHJnQ",
  "key30": "2aFMvUv9UggSsGyFXqUsyp1vrz2ggurB8xK8ruPSNBjzNsPgkQxMcaA8oqMtE15eBP5SaKPcB69yc83a6TVYPBxn",
  "key31": "5z99hWTVALbB8FFc8bcndQHz49yGtuUjWD1VjfX9ogoDigWKSHQJPntWD9UAmwu4nykynopLty2YbXkrndN92g5C",
  "key32": "4mgHc5gEqFF4SF8awKKqmMN7Y2wsvZ6viup8W4iWSXndjoVNPK52RruP6z6rwbCUPLWLDyqxAbS5ZC49arS1oBup",
  "key33": "2se7FpKpQVMemEh8PXyDeEph3aFeg1ta5kdM2Kf8C7Qo5QYzPizYLSmSdgxggyWcSPrKwoYDLTKtYruCGeTU1Vmj",
  "key34": "5WBWXLfyW3X629Uf8181oyxFvfsCx5n1ZFggm7o8sV7Z4f2fjd25DiYsU7jdaexcbK3YpfQWJzixQAAGbDuxwKmE",
  "key35": "eki6ZNsgAtztpcmdjH6QYTryvPqcAC8rQXZY9YXSFNphHUpCjSYjXydbBCnCUypthipEd9KSPEJCqhhRi4EgN8G",
  "key36": "561cXmTkLUzfy27JpCW5esipy9LKxhgwzTD5pwSPFX7a9M2BbC5euqwHo9XNrQQ67uMRgkySS7JFXx9B8JszruBv",
  "key37": "jB7Zwb6Z4fST54f3j96EgFPJSm4DiDpBNEYnAaKpEwxWCj2p7Azxk2UL9ZpKzkZf1Rt14wyX4cNBJMAMGnhpK31",
  "key38": "2Jk3j9MGKpeoBn2S3jECLaThxG9dEWusywPUhSXj7dsqDh8QZZnsuKqcgSgMYbSQcjo2f5hkQh8J2z5u1Vf6uyyQ"
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
