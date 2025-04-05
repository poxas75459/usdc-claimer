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
    "oWxUmqauPHNWV1q9Q6xk9dLD1xmfcX9cBXepgo7Nrdj7kE4yFvf5xT7gLHjSWhtgbtpgjoBXBeGCFaJGaQhPCoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kK2pkDD5jG5wBh4z8A6ec7GZmwkgpqxaxnJvKgNtcxV7bthmCpYugz23oTJS25vHLvX1wCitQhS8v89DAfRcsRy",
  "key1": "389k2QEcD9453rtvKwQxygeV58HxE7jiHY5i9mknN6QcCZChct1p9iQoni4x79PKTMgiBnE1P822k4qDxaaeSh81",
  "key2": "3pC6d2oG6eGgdVXseBRAqcWjYfgB3kcsaNUV62i2G6dCPonQo388crL1MVvyZHF3j8iQsNJo2YGabzz39FavRTQs",
  "key3": "672Ggr9n74PAaftUW2hZEMVUySGcKKCZcZK3yTg7chvYpDeCSjRs8wLuh4ifZzqWMAoRJyA7sfCJq5L6zT6ovJ2k",
  "key4": "5NnnRdS77CtS9YvQfc9M2Gx4eoCUu2ezjmdtmjkhyqb2QTXcfuni1s3rFFPRqEHcFBwPB9DvWuqXch8N9LTCy89Q",
  "key5": "5ztuKtX8gbBotdSm6ogRVyE22KH2LzgmQcRDuGrzKFop6cmtzTAAnpAg9R1nNXBvFiDENgh78oAGr6iFsYyjLB4T",
  "key6": "3RiPFSGS2vrwvLLQ3Dg8LD6RDD4AYDWn8Atv2UME5X3y5v4jLPxchZ7UaSWu1E5wdT6V466BCkkW2JT8GmoJAD9h",
  "key7": "2gpjGHbNrziRtV5wXcfqdrWbBwrvqHnAMbh612KyfvGSRmpM6wahP6ooj9VQ73NyqJqxrxjcxp8WuabnkbPquP8",
  "key8": "z8Y2qfrVDS6shzf2qBKi68ykrnxPuWH4mKwGM9m3shC8gXCrJVABBqEqZvazJKY7DKbUgazpkUDTLgWPEVHrwdp",
  "key9": "pAxzBGQNhT55MfV6YKbvXifPy7d5XmeMU2HwaaC9jb4GbZnaFgB9X6SBeDdPSvjXGfaYBRHMQysTZanctiyrRnt",
  "key10": "63fbGJMPz5nrq4WRRFrtHNYqZBKxFEqLjbkM1MMCpLp2nhjhCugYyQakArCx74z83DEkVVDQ4BWLy63ByHL49Qrc",
  "key11": "5VNFndPugTAtYYjfXs66TsFT9TZyjunsipZu9hnn1tHkWmyV9UvzdSqJSsRpUMeeSmkr2DnMLAMEMpd6hKwckcwg",
  "key12": "gM2jSpn59xDQZ72YkVXe65nYuFJ2EUn6BKZBy6Z562KowwvXUFLNRL5RLWcCvsxPi3hPjjnWn8supAGiYL8X6Su",
  "key13": "3xFLzFe2MeXNm8AwJig7jzc9UTej5GpPqkHufCA85evfXggTzf8Qc2E6gZrpxMsT4C5tB4RUT26ab73fAgHzGwQe",
  "key14": "3UVXqHDnrKXtNrL9EorJbXzuyjDW9Hq9KsDxDaXRdV6quFDxSo7D1bAPCeKMpG7QL3innehENA6fXtN3ThbZcF1y",
  "key15": "2ndAHnkUPEptwckVagxLkH6q3bRdvuWL4d9YNZSgVpxFr4t8U3UxWd1y6uQknJGyFFKZvpGQwMMYe4LDiudRY3XX",
  "key16": "4oGVqxD5JmRRMwwBNaZvJsUbZckUSAvpy7pLuJwNa2yvv4VVkeg1dRofEDiW4ceiY3UAHMo25UXwSi3kxAdgW8Sf",
  "key17": "2RnWw9BSYWp1twXnRNh7rYdpustCNRvwi1egRwKRaYAph569CACPiJkL5g4es1Zwiqd4NKkGzbdMGhQKBxAScNmU",
  "key18": "45BgP9HnMKZdkpTisQb3c7eifpjHXQ9gDD629qCbCNpYEW8yVFp5mKGfmC4TjHGuZ2ogkkueSWZsNPUT7QkKfHRp",
  "key19": "3MN6RK5ZJJpSRdNyU97zu6nahvb3R8AW24e3a5XzM4D9RyXTw4mZZ8CJm4t3XYv38SP4QbtgrXk2gThfyVFQvFqK",
  "key20": "4cqNYTgMEGzm2GkvHE4U11vDMnjcknPEWXRUeyNF3TfWA1GvivuCQvDBPpDmYME7n14VzmVeswU5voFEAfwrxnTq",
  "key21": "2ZwNf6MKYmpzTwrMHkZkWT8MmecsK71rFbykL3UmXuXx9EkMwFKCQ7ahDUT5kjYnirqCWHqFneCKy516pZWLskLL",
  "key22": "51wzvN1z5ro6VMZLBN4DdvJZaubee3vuLDi6uoYGv3zm6YPwq187gNu4KiNJbeLY3bejHAZBtDtyBYJ7SsMUw5Na",
  "key23": "4FRkKrQLPSTG3skGjKjSaxwwdaWHJFo5WDuK3mWQ9bQYHvVEeNHeCZYpLhqL5NmmWbGoofyFKauXNQSCVxUUJtBW",
  "key24": "37cr3cqp9wXVEEsNFanD8DHWbVLBbFqn2Za1pw6G9wrrFCVAKhBdP29Kvq14mKdfkvx6Vw1MgdBw39fXnmGqFg2N",
  "key25": "FXnLpbGtnpx5trmJvrT2rYvx7X6JytNmEW98CZTJ3MkMTpewy78YFR27kRVki66JJtamKFk4JL7h5DWN5KJuzWp",
  "key26": "2kK7Mz9XGw6xG6LrUMDqrKb2w9NQtRy7LyfGjyTFa5vjetPEYePG6hJz916VskDvgmb6JqRJTS2ugiD9Gpvn59cD",
  "key27": "STfbXZgrs5nnQoVvS3H5f7tZf4JYzto5giFhomJBSMmTPSQYetVzyrPtY3kiKP95kNepRNJN96W6QdYu3UPnvsn",
  "key28": "2GbqHqSQkufAz1q9Xs4K2KMkMpKo9WXBX9edq7pY9AbwqzXXJUtoUzF5VcAEcL9PQrK3w87jV2pXZUQdafJRq8xN",
  "key29": "1Q8EZzJUmCsR13k611boD3QVxdsaZxKCT7awVFDy8DYTbqMmC3uYkdibnbxzEP1apvrKuvB656ntPd7H63uxsuc",
  "key30": "5YdxYaqkVcQ7Fe75kLTQfBoUwEBHguwuQKacYvRAtGEq6PvBnKsXaRYC2rfsuBfQwmNxdDfv3oZBGiyaZLrYDT5r",
  "key31": "NAof1XrTMq9YuXW3w9GRsnw7ymbGVqnFV17UmyVsGQ8bP3bjtvxLjnzJKot4WMbocaEcsZ7uREvJW2m6yzisziV",
  "key32": "3kMbWypa8PhYbdSZi2Gb1y3QSsYR7dPGEn3h8YYMjq6AJvxLoTbv9iWjWWVSmGeLcRY1iQwqvGj2aQZmXrs1MYn7",
  "key33": "5xxbFZq4LW3dNCwX32GBBcg8dXeUaAYJEpwCjwQdmdzT6jn5RXRQF4YuKLXJJpXFnSLWBDZmFnJpoDmHYnhyZuf1",
  "key34": "3gfFmvvc18rJ9NVm5FPQR3a7RNXbz7yGR4xm6xkEmdHMtjms78wKsNGnsbLxRKi1wCnPBtsc7pTqqubEULcGz6sM",
  "key35": "5b9BNAK4YQanAw6Qtg4TYXuBXr6e91V9s8XEz1Xf3U7pi7tnLKJVBykqk3gzMnvTDx6YFFjgNhHvuGwasWBr6VeZ",
  "key36": "3uYg7GThL6XvX22ejfRd3ZtEMtqarttsdMkwVfKhWthVKtjtoJ4dzScKQvWbo1bMii27ExjwtaBYKU2ZuMiTUBbk"
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
