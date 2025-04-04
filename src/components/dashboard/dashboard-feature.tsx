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
    "41u8NrYbPMwrtfDUCJbTmEeTwEuG4RProDwrFi6x53G5YcdbDbdJU1incPRtVw9eGNwoXyUArPe1Yu3yh8BYM4SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsJjoirf1jRxEjQmmyfeLkQsVwT4BTis3VzwTGKAJE9gz6mmifiARRhzWcYUyQpG8hTvMXg9b4ja8D7uxBAj86y",
  "key1": "2XTbCtdhAryvGkbVodKzUt1hRgo1bpbffBgfRi2AaiwjCTwwHKKQN1dPw2jCVLCznMxJsS7fxChRPHJoNiEoXNLn",
  "key2": "64gnwTD1iYCyGQFV1xfAeNM4nbrFHcoL4Nz4775ESTaCVxfy6RYrCmn3tds2ennKjQWLrA3YcuEqhi4zpf3SE6BP",
  "key3": "54ZiNAYDvt52dymWyKkvwHZod7YHenmUrnQebVMrrPD5pCBWAXFvmvsR7czcpKxUBsFqYc7HDr6KxL8T8MZVjfwU",
  "key4": "JeC4E5HjiH4PRb4RragKHCFs8yM6MQFLm1ZCEpyV4uzYB4h7VtLbLrLoxAnBFwPv6nLms5VYhf6MZwpSqx2qNPU",
  "key5": "2wac2Dd33tawaMZhMiuT56sqPLxzgYoRTCvNyExPxeYT8fwaVrKwJMVJHmn4xrFPjtFCGUzKdmKK3U5jz3hMwZas",
  "key6": "5WzBAM7sS3RF5cDNhk9VbCVM82b3VJc5qtjXUyBe2fjY2KacsT9BMPABG5TBDiwQHzXBEsXvaSX5RqpeGK2dfXpp",
  "key7": "3o3p92wefD9KwKzmhd3WvSouv4L2KDWmFVSnJ9Wr3rVq344NhFpn7icxCAXJezXNMriPQNKmg4qEjo9YBtBPxn1u",
  "key8": "5wgDdYqnwpvJgWQLPp2TrfmU44dY8k4ZBr2ZLsCrMkYkHxWkANn4sC4JxbUhnCg2w2jg7MartW7RYjMA9T53RwyW",
  "key9": "3qexZMBeadWde7BKn9aCx6kJ7NWpVHn6MReejfAHPysBzPCFAPWtsgi2NP9mV2sBJ62hDKoGzMEfwkhMU91gHmyX",
  "key10": "2Kpfscr514G3oC52vXowJz4ArHZSxV8S1wEnzWXjPeqTT6EJLTXLvWNLJqCwU1qwcyM9VyWHeWiKgJqLDrsTYKKg",
  "key11": "2s2GzGGmibs8mQLkXHFYfTU3HCycQAqCce3gunmfhmxENpnkM2UH9CsFQWtTGhxRwJvZwDCBsB5LeyXTbn3vk1wu",
  "key12": "29hLty7qQ7UE9BbPmuLsV2hY7nF99hXLiokwdu8ZQUA4K37mdxzJxcwgc5m4egSm2z8oEfioaLkZiqwQ5iM4pNAv",
  "key13": "4FjZGHVKs3EXff3CQ7MGwW53iYMvk85sNhx71a5vfqP3WrcFs8vCCkcHXnHYYKBnukHaEq4hutHVMxGzgZZ6cDGB",
  "key14": "83fT4muBEDtX26WneT6cudRAKyjfQSpacxMHfwqZfvk1bf3n5QWZ9DEJecZmJ3jGZpY1fdD2Bu5GVmDx1JckW23",
  "key15": "56Ad8ERS1f4h5vyQxeKJ5TE4RgbzjCgo72yUhni3aAFYBCVEChXGz4AXF26GHbCV2EKeu9wcGgdwj6yG3bRyhFR8",
  "key16": "2jNZtobemiergcpTxt79ZuSKrgLrshuuajSDEmv9Nyy8cxptJMbeayJSUjxzewaSSrZooZ8GfvmZ6v2BRHVW61x1",
  "key17": "4ttoTf95isUYjYFVrpsq5wqwzEciQCRoaaCHYjwyhsEwmf7HXG41NcqGGh4p9W5F1pmL1pCRn4YdGMj5LH5fYycK",
  "key18": "5bzXDoksuzLi9WwPTFhRwGAUXKRXtwdVK9CcrCchTW8WznLzd5H5heUiNu7gK3EHyF5hFemYM6A1C7yABEoh9CmE",
  "key19": "5fPH6gqvJbwHPghzXoYuH3qo6WrgmASvyH71D4MAEuatSrZQcE7UNdE2ENVuR1YULQsZ4zjctgnrcdGiZdnGwNo5",
  "key20": "3yfSB34CMtV86jA24SdwLx2efoyw8Mr7qJoyUFJVf19WuU8t3H6PdGqu6Bm1ZuQmxsUGJvirTSFyctZCndu87Wm1",
  "key21": "3uVfArdj5yhy4DNLkSK6PwrG8XtFBagVUgyaMRs66PLZBDDmnujCZ7VH19qxEL7Kn836gkzXzeq8fadBrauS8yUn",
  "key22": "5MY9nd9udnCwQSFf8VW1iDmCvRM5fW2PVVHr4VtnbK7uYEXGouChvX5iehtU7WiduWyEfALxjZvNq8RpqvZBmEGH",
  "key23": "9qSwsdg1BJrhvfGNhVZJUAEB95yM9oznSqh1WuEg5Ekwb7JCzBzMDiRQqdA6daD6RvBt3Hxs8eR9wauTRMAaEsU",
  "key24": "2qNB4Dt2Fzsu7AxBW2p2MGqwKPZ1pbCyLNPzf4jVLVh5ceSPmphYXbBhV5kBcvgKwbus9f8FKbjSuK53CV8LB5Uv",
  "key25": "5PD36TwbmYzP61w4RwzmGYB5uS4CbjQA8MkaeYWaEzomLpgESzWrqK8qpUg6GEYJSCt9jz4nrviaPMWxWCFKPFqD",
  "key26": "2ZWFrLSR73Jbuk65t8EQfKwMh1u7GXakeZoeLssRjZZQMCNK6B5kxP3gyZet7GC2tythUGM6HTMssNvhoqprQrz",
  "key27": "62XfMZ5Zkgo79vM231NksCQEtY9uVX21ZWq2JMJ83BUoQzRnud1P4NXC5C32MHLkRNN8k7Mo8En3mPovtqtmTNSh",
  "key28": "4yAq4DaCV7wTLuFWwDUPgc8FjcRyS2PwMfwiSTvZYuBNeQMUY2n5bgaav9sjqQJjYhjSuT7i6mX6nG4eb2MmYRRC",
  "key29": "2kW52Zi2QLEcFU9kxg9KtFLUsYY41gssFZtUk68wzEhkRHQPpcVAXh5gnNLcg5Cd1mgNTLuXSkaB34CkqNy6s81U",
  "key30": "8ZQmd5arX7UsV3BAS6LVwZDAyuKR2svFNXEwzJ4jMd7ykQMPTi33LVonJqSPG79aEFc3xVNWF3W5W1wMcZ97mpz",
  "key31": "5osSXyXGxzVHuaQZbNb1LSAkkWhkjaa3vJZeP1JUtPkZpYooDXHqehiji93kMDT3n7XzKzaf1qFgf9AcHefWU1VK",
  "key32": "QPhyh6Dz1g8VKHt44x3uiRrb7p5qCyFYt1zSAADdQKvSPwHVUTEAVkFEVdwzFiqNZ9SrrfrUjUFqeEzu7fxkAWi",
  "key33": "4cDZAc1P1Rb5FE7v5GEJVhdPfnesKgXBwTRuBcUzjMHkHqusSL5NcL6VcjLFDJmbP68RTP7EMazq43j2AsVN2ViX",
  "key34": "2SHXvrK99FpWDPxof61sByvqjveoNAvnBa1enizQJW5wTXEMVWLJSSo2GZpDhAPa7NjuGZ2towhwYGcUt71CYokA",
  "key35": "3Q6qjJMWkCbgGRkGGPAAfyE4PMEQpM6awozBNyaFsmFuMhLQxQ2mUmgWx2WFA22E6VaBnRb8YhrkEZtsPBBy6MYq"
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
