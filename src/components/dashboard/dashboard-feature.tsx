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
    "58SXyEKAJUTGcargHEXmiZbqhndYGAK3gPjKfqyJz6YLFvtMTQ66jUEzidWag1i5SmrHQhqwmsCnnUQPHDKjMkXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sm9UYhFuHD1RwjUfDUYZ5mU7LJqDpaJWsTWt439PibczN8ZqNLECbK2B3bbXTiqMw13eQMj3cjTmYnGAnK9EcbQ",
  "key1": "QEovTVHFm512WbvxmTXufkNXaW4SZfUBc1PhGatmaVPbM36QouAN3dgAgGybmECFPW25Ei77vVJmqhckpZYBbos",
  "key2": "3ysQkpMBhqYTDVPebt1TQmBihNEaL5jS6mvzNUceYrSzosh8cupAEqDtxWPyf7qJFxZBsYxeFFmxMEuvhTH63LxQ",
  "key3": "33dgqbkrGPEvjWXPDXrSZUnD18zL1xYpJuUH9GfwgtNck1gGab3ifSvev1gBLzi9i6fUd5F91MsZQbSrKjUSWAu4",
  "key4": "3tuxQKSCkKFNSR3jo8tgYqmqvTRtRqKbYUmCxLXNXmYzE5MKGxu3bbsE9nd5ubDHWFpvWHnM5WK8t8iMtTaaipwC",
  "key5": "4eRtthMMFYESvhAYXrksDVKLVBgRkJutFuv6E98gcubkoyWrVqnB1dTdUnFrhznzovXBt6Ff2wv6rPj6ZMSu4BGb",
  "key6": "2h7dpwNL2jEZTG3nvqFujVVKwSfbCABcoRE2pLT9JqixiNEoquR1EFDoso3STsGNzdjCj1gTqFXsF73isMMfBnUG",
  "key7": "361y38GniB97At2FU4ci7VKD5drKsAGEHbEP96xfaDnNvUt7xvw9aAfLfxJ7pXUTMibiCQV827DeXuQvP4ZQ7D4P",
  "key8": "54VagLDpxVjZsMGPQGdzbdJLqVQsdUKMtBPGo5uYJ1TYac6MdKcJSSren6Lj1v8vhp2gKNAkXPevVrbiPV4PXRie",
  "key9": "4Dffup8SbTx4DvAa6KKE1DdSjPXuqszpjtexKNse8ZdhbndcJMg1hxnsst7ynpz6avLoYuqeBbj7aZD7LuAypZMV",
  "key10": "4naPtUDR6gy7iTMLEymbnps9Q4o8g8nhEZwqezXqfHHWURdjDnEJXLpfpgGaFFKYqKgU3vPjZoCcEXH9YcEzPmsc",
  "key11": "49hpND7Kat6CxEKAKHUZw2njVHLcQaVWELWmhMakofCw8kFiFMCD8zntCZm6Sxn8qXwBRGAJbb6sgYhpqxpYiV38",
  "key12": "4wo2SfSYG1CSSUYkJ6K2aBPyTB679j3CvNZedQbbM6998ajigkm3i8tUWDVcsWoB9dWqxQ3FLw4nGD2tC7PiCrvC",
  "key13": "5dk5wT4kmMG16vQmx4TdpU691kPi6JZmxWESeQPw1fDdVSiA5126kEzMWoNaZ1K13pFBb3Wh8todguKZ9XJaSJjx",
  "key14": "JH8mXSZh8zxm14xLc5p2qS2dHwevhGtGWYLfk3W8U9DQ4jiPcMion1tJMhZ4tT7A8zKJ9mknZnKnccexr8b3WrT",
  "key15": "4fq6g2C6rktdPCkTyXzs1dTVPNLxstL4xT4sEDkiPRbov88Te5qzcDbcS4xMvSD6urzJGgCUTfrXMSnEdyW8yxRV",
  "key16": "SDuiAMEeTmz9HK7KH2xAQken7uVh6r1AVwhP1UayGLNG9x8r647Z9LkqzmeDZ67BDpg4G32sr63J2YCCjAXz1Ji",
  "key17": "zQhFsWejZoPYHTnB7X8XwW32XtKqEfuNrJoTn6nBtCAEvfWuW7b9EtNZZXuenEYQcHds5JJ9dah1YqStEk9eTKX",
  "key18": "3WjZNJeWVk2bUxqgHZbLGGhA32MWEERFJWE5jjsgCgoo2LDK7rWiZ3RTTv6U66CgCEwwL518jU3rmzokKA2rAyUR",
  "key19": "4riy16Rzam6snRSwG6LwGVcBFTpuFEMLXRhoidBYacg66M1cY9K6yGnmg4T7s83tLjHun9fLo7VMxqpBAKDMFxKV",
  "key20": "5s6xbDeDSuvwbqpMFG6eGrErxomj1TtuLSxUfH7vVsFKN8zmrGyFSDJCo8tsFaLRQJasqz5W6HREhVCKPbhVr5Cn",
  "key21": "4ZnFCTqcJ3qfru3nGpMVqh8wjeiFvwqDci1udMJoZTDJvmqNjU2zxUuJxKAAmrEJD4gsucZaZbAfwNi1CArr43xL",
  "key22": "s6khydRCeTSU8TrdgUpB7ngTKq6bm6aAkN23tCWdNTSdthhpGXH3Wr7JqN7pDbx2QVzVWUMSQg7TSewGfBZ96nD",
  "key23": "szaBB8apzSaVyBSYbSKucPBmPjAzSXfyzCTJC6GB3KcXzF2RdjP5Hf97U5zwhE4QehfhMBA6hsRnWvtkySsGKzz",
  "key24": "2ia5jVHMvW9S4PAkfC5U9BLixUzxFWqh8cWndrYC2KPxJ5mJXyaNakkCxbq4H2cLfvFTVra1PM7LHmuq3FjpunJQ",
  "key25": "59LFbyiDNHEB5kHLWh7QHdy4XJpPHe3TpEbxuAFZDtnroSuZae2ju4tCWmkmoZp6h2VczEZZ99USxtNFyapMUPc8",
  "key26": "4gY3FqCxQF4kpFGCLWHPuoPGcUihhcGnWBr2irmFssgkF2ySBk6EU7UosyBFZcdnm1jfJLjJZ6YcZCHjbAPG5ELp",
  "key27": "5g5EutTfmFCwHhCLNjUd94yinL1LQgBFwAN9q83Fqgd5ZoxvrYS94wAqVcXwZtGgrdXZYzoqFg7P1CMDrRRFZrVC",
  "key28": "3t7jA9JrhfmAEzgsmFJpnQ7DgxmH4M8X2TAg3WvHGgMwKWcQuVwMCVz5s5RPLAQH2FCoe6FF2ecH6BGdp4NBD5Uj",
  "key29": "356Gy31Lx3eq3BTxZSuKpjs8v663GWMKHuo55SsggHXBSZrRSi7YJsf5bBL5gTVBYoqfKtEM8ddmtH7E7basESQD",
  "key30": "5iARyrHz11S5KXuv8LrWBc3A81qdKfyeH8gqh4Dm1Yu4Wt2yKsMemw9qWChmcR1e2Et25S7CYQ7SjrgJHXfzWQiV",
  "key31": "54nGQaWJMtiLmZQracKfwMx6j4FFVFdTwgg13vgyHmHaHnqKELpvDxabfh75mm23hUxjMmdXVac5jUkfNwemtyEs",
  "key32": "65xgrJtNTC6nUY7rvWxTVVRttMw5ZB4KBvJDo5btqCYbPwYHWmLyGYeeo5RdT6s3reXbin4NenUhHAuZ8U8aGm72",
  "key33": "5n8xXVe7BsvxGmipUtrwYR8yRDwPLjnwziM42K4EyJtNj5B1dTqEWCPknMY9dUsWq8FtAseHrVEcHNccnyaSAxXV",
  "key34": "3uiEt7XQafeoTwK5nuNYdfej7kyZecG5D1U4EZPkjXkxprPbiQ2NqWPwNQ7UJyy7tnKKUYDMKRfJaG7GBcjgxLzh",
  "key35": "Cn1pgtkbyNtPpnfBmbFiNYwTM9RNe6MKbrYo7wmhi9WUsoQCgDfqYzZ42JTwVMiCu1Es8wAb9dcsoUGwoqiH3Kp"
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
