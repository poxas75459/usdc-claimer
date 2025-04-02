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
    "3Sfre5dCqZejehms6MEBWKXMHWvyYxC51RGc6kZ3rhmv4D9nD7hMeyBenZq5qmEzthrHqBdAyXWdH5p4p3GnYy7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHqDY3Qp8YwP2N7N1ioHfR7CMSWoaJLhMDCM8gyyTRGaUCBzJxqU3kMth2Pwknf3NE9hpYoq6XLjFBG4Wurw9ze",
  "key1": "4uHAgTt1GazDyf6fszKPJ8eGz6P7Czt7YtosaNG1VCuHjaqPPs7H4vpnBEWgrHwrQUUwTAJC6YnAwSjar84KeRTB",
  "key2": "aa78rrkupLujGvcMbtonc7MbJMpWdYjWuDnkDnRkbiui6PxRYihhwxMBW6bujgUDmYhxsxmwLkmpi8aM8WVhQqD",
  "key3": "2JsJ1K1Awn6GcYjJx1Am7GEEcX9RuWh4skF7okLnjuf3JQP8jmW5JUACaSadHgYcPyLMbbJW9vLfD8Po6ZEfC8pB",
  "key4": "5fNUYcxNKsvc1ATBW7nCF1iZWcFXkeTRoEkuyKoVchoQGmCG5MmL4YbxgmYpFVPfD2wm8kXTD8odq9KedCtD4be4",
  "key5": "3cjCtuss9Fqp4FxjGUwEv1twHC7B6ve7r3h5ZSbav9UL8LP4DG9XVuQ6tTKR6gZKeHZXQ2NPvAmjp6sUKSG58KL9",
  "key6": "4wXgqfrCUVVDusEMVYoc2ohZGtMXmj5G9UMKDaiG1mPa9Y7jifmiBx8TrkSRAEmH222fuvo5BrNpeo5MBoLBu4DQ",
  "key7": "4MG2gGoJvGq4dWzgvifVR57DbRvjzR3FENWMdNh7hQwPLuqs5zSWa914RPZb8iEaotj2pnVZLVXjWdX5VnNjd2Ya",
  "key8": "4rFSbHeSmAEnHspGiN3ZoCDQvHJzXVjYscMUqE9QkqgWLfaFwVxi7vfQhYdRcSPmJir7X1ozUDeuZE2QrGMzVHiN",
  "key9": "3HWfvNpM97AeF3tfQwLtvmBYCRr6418rK4uKdvjvt1Wp3wioaV7XLr2zUQPZj2eo9jDvAeTQHLNC6u5f7hN1yBuG",
  "key10": "37nKxo98F8cQYSmibQzCrxu4kvpqM4XHjZonkR6T3pvSp6HdRvuD6jt2W3h78Txu5EL9VEFD55exhB5jvSMNwdkJ",
  "key11": "42wRWvUiNzLaM59z45hs89jCGRVwsVqdC8ant8CnAeFryQDBkZGFHTwhZyvJV7o9BNKvGFwmC8AYaMSDhn1v1jjs",
  "key12": "5zB9oq6ToPpct4dBaycWCFpPvvE79CiGJbvzHqApdAofJPsz99z5vPgBAheXpiLiDwRfLttXR5P6Nkwh73Kbo7TT",
  "key13": "5kGpAQ357ZsYAycCo7sJNdQgKfHavo8khJyA3bGSvKzvPKNQ5butDUZsGbqVXtL7K4Wkx8rpodSsozsAr4rFCkfE",
  "key14": "2YL4nhdECDZs7heKDRTQdmqJdBvVByV4P2E1UHLrAAbbx6ZK5feXe4YG1eeX5trHbY37PbiFfFjg3NNc7gx6ZNX7",
  "key15": "5eW2Z19CjCDWTaQJZmzqEvAAUErXP1kkzZpBaY5uWPGNfiXqjNNsXYs9CoaQK9hQrzAmXZF79U5VBoYcdkhJMjmv",
  "key16": "4PwQ6YGbvMktyqbiPeHeZX8YfSBM66gtPtUZKbk6qLDGfyt3oFrpp4Znm84HFZEzFwQWx37F4sDAheCT4g9VVPJJ",
  "key17": "AqnfVeqWFpfBgcVhDSQ78TcYbjfcVthTCdF8g3DSTwGVc8NizBU7LrqYy5YBk33oLDArKRsAFbEmvzPhu9PD2EZ",
  "key18": "5DmUun1oXzyHY5ocPXSkbMZwvwqcdNaTssNcmbjkTBc6G85M4qE2NeA7bmCd4xBdZ3tH6Ya6GQCHnEvnfTRFxeRz",
  "key19": "5H7jNUCeYxBWugKP5qqyuyNz8TD58AXJ2begzZjsUmprC81SDjKiN2nXh1JzK3cJnRQVxR38qcZg5EBifWgJLeFw",
  "key20": "3qqtVzeCnreRQZV7FdoQTt8bFMcRkTbQbNmkr8VMLF64GPY4477XUHZwHB7AZoTmqHqcssNZLunwDMKxkfkTQgW1",
  "key21": "2oTJNsCWEgqy37brsyLzYVgp4taiqMZvz3XGuYjchd7B4Rj9vMBiFV3XZi3k9NYRcD3qesjoXn3Rh876gxYX1CNu",
  "key22": "48UZWsoDXhX2YNo1CcJdTE7cHV4t9ey8DiSyysgWKyWGo5eMBDVFdauBjMXaV8b5pEFWL8Ra9usjGYMxDYDnV7Xm",
  "key23": "4nAFkttgty6WtUg3GE2Wv6ZCpzZ28wdoaDLFgBZNoascihWiPk74rVkvV5FT1MULN2ZUUvkDHB7izQ1avu5kK2oy",
  "key24": "5g7Aw8EJrguuBsndYwxgZBLTzQarM5jHngbkYT99BEMoDBJBkWHjjguSkkxoFrgvudSW7Ucix3RJj7pLaTPViPSv",
  "key25": "3rZ7AXaX3hCbuSthRNd9u8pxqtVzo7NoSb3pjCW1voNDTCjSbJCZFM6nQMLmvoZHih17mTqrCX1MEg1n2LXEQKNg",
  "key26": "2o34tYnGBd4RqA57YKV7G6saCzuZq7stmMQbfpT8DpiTNkr2S7L2MW577N8LFRpEGidFeEweo1gQogDa7F4dAkaZ",
  "key27": "eM5LZN3XVudL8C6hw5EpbF29Sq2iCAadWFPVoJCD5f1ZPTe6K2Cyq6oBA48zxqqnnQUcdSeq6JjTfnnXK2n4rCe",
  "key28": "2vxSjVCbsEn9CkkSBWW8SUsmMU9q143aaVYQcZQCsRezsRi5WFkY3L191N1iHs3h9q7AYz5HP55h8Hd1gQ7MxeME",
  "key29": "G5JWzmXwyfDH3SzQ5ivZdKpAqbxzamG1cqZKcpEKceo9we8mHYg1xFv7cas8NNV6nE6cMcvUkU2zZQTzoJUoPK3",
  "key30": "4iSBGqustX2a8RRTEKv2eqGnCvHWLS7kZRYqxWopvX9jB9BpSK8b9QH7GbN7NXoy8ksrLgqGJ8cTwsbJjVPTDGYF",
  "key31": "3JKtDypqraM3cTvG1EaMJCviNzTQQyhYTmq7V7P6dgES6TDHPfwsfqS2kgGxHBGGZZ1MySFbmUFg1FhUoW4m2Fk6",
  "key32": "D6fpBqVSxCFCirpSYSwcPhXDaXFcoVBgWJeC3E1exZrW48tVQZVnrsD8F9GbAYhkpUXbfekr4XmBFNZZ9RrBTJL",
  "key33": "4SLL9Ckwkq8LY34Fj927TeFHN8YGNwTkN8xTFtxEieC9wcd2jLY9Gy7YF8FztmgGtypq4e7h8Crh5e3XkSaGhFmi",
  "key34": "24EuteozmjACHcZhotLYmfpBKSx2bcRivcdVwgi2EoE9r5nxTjjbHbzfQ9FkjV3CLw8SwgVNL7QGw9KeMxuGeTT8",
  "key35": "q79GH36pSbfzDTTxN68gEdGcKyruvVsWNxbxx5BEhjFZkrEEBs9sTiK8j7eYGNaQB8uJdm6PVKsAnGrnAok2Ebh",
  "key36": "EukQzVjsP9DwXENAWFy2a4UCwUpA9j3dUR3GeAMBNe8rAk9Po1WBCtgxAi9xrp4PiNsovg23ow5ENnp3vKucXsK",
  "key37": "52by7XFkbBpcfV3hZvbwJCqDsphL97JWykDuzfQbcj4dS1LeFSp3SHQXiQb61iG7ovS2L9PT841BuPXZ8zToNPrn",
  "key38": "21YgPaFymCa4opGWUfN2yirdnGDbu63ebx7muc3gfb3KM7oaEZ2fuvNTMB9CfBRQgvpui1mhf92Tw8qSMLW3xDx7",
  "key39": "2sU4ikhNSFjNgtMANjwvNfGJqEVcxGQbgh6rG4Mozg6DY5bDGffDiFH3vEMqoJ9egQCsCnjjui4RLMzWx9xsu3Fr",
  "key40": "2SjALc5ueq3mP5gVRyti1rCvALucwnm3PaS3jGzAxkaUtN1EXz9FzZ85yTL4qgq33c8JC2sJSfjMvyojnSP49uu4",
  "key41": "2eLnXw8kbG8YFoKr8ZRmYnQSDj7aTVQHtHsAwj7dgukhCmcF6cH3q47fUFyJB2zS3a8LdPVuRXk3B3wys9Miao3a"
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
