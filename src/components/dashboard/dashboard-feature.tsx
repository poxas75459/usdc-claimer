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
    "3pQDVMfKXkuDeLnVRpdSUA2MfRT2bUNWR4z5UkWdfa1ikBH4QDPXaErftsyYidpQMiDjcVFAk6JzvuP8MPT9wv7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHKaKm5fRqCryv3CRvNHhiMTfQhTeeH41NMuLtdmQmngYrxxcPhCi6hV4D75YqZiLqm2vQxNvz14oGHXWLREziB",
  "key1": "9ujN3Gq5rLbQd4LL2vKA3uBuUSCUVGmhSWqKsk4vekr8JVXKRuffEgft4XNpQdWDwdUWYbKHi9eMmym2vnaLmYT",
  "key2": "2Gu7MdD16YG76Z4689dRHRkgvQjYGgBV56GoxLb5Vd2m2Yc4GPMgsUVRXWZYwQhqFtaKhbXF7c6Prc6Xp3vrskRX",
  "key3": "3gALk8BidJRNB9Pv5yCy8Ho1AMLEaf1w5rifNyui8knSdG8ERQBGezmkreX6CVLXA6Tdgbi7suhCufcjmjw4dvqi",
  "key4": "2g9ucJZfyhk13LKropPbTBaXPppmDBgtDSUX3SM5hh5uABmUFeS64r3HVbqz6zzvuksh5i1zhKCkizSKo7bNbo6L",
  "key5": "4pxPyMwVZZDnLPwFSTfrBcXhMuxPELW75hkFokevc9H462ekfoFTZV8sxMhzPfEsTURPiqApZpcqL1P9bZmmVUTo",
  "key6": "3Ck9GX1qfKjUhEZY1o32P9pgLkEupBn9ZNAW1h4BUDPP1KArtyfEmj6aVj4t7qMufRy2LpBFF7rAfySHU4yNdpd5",
  "key7": "27DK7zfnQ7qaSHfHWZtY2pS134cHvz9HQvqNy3Lv5aJJfBXxcJfhNX7D95EQJKsuZ7VjRZVnNaGfgerNMKoYzzs5",
  "key8": "476m7JkufaGkFoJvcQGyA2BAhS1krs4ghnKbvtwozPNDc66CjFeek8VdDrqC1q7uBSrjZnPJbhfs55DGfm4FhFFk",
  "key9": "2v2gAtMatGym1rgNEdTbA7G5nrQvaqqXptM9f8uygEDunDWE1rp54r3MqXjuqsg8ySXfLQY7jG184rBzCkTK8ZRD",
  "key10": "2VtxcoqQjeeGns93bgehBTJvwynEBAcK2fAbHwUHfS6hTHh1GV8tr98RoWUD3jha14mBkf7fkYatH1ruNYsVjb39",
  "key11": "3iK3cYzKCB2eKmVMpiJhyVYdJ2NFVyq3F9DuWrUDx1ZVVkCSdg1XERJTJE4NU6DFKpvNG3e1uDaQbboPXEv53K17",
  "key12": "4Bi5YnMxY3w63ZfrLnR3Q7Mu6mfgSxAni8A7CgSJo6n37gaun2Gqu6TdUdCAXytrVPVhkE1EdcAxSH8KiyrS1N19",
  "key13": "4NPf1Lotr6jwuUFQVHgBexUUDPwvQxRL2mjLZTvYjPCzwD7a4cjkJpy3QqWt1r4XKTggh543eYXMcewr7qLxEh3Q",
  "key14": "jknhsSmu3879dEQGhRjwXCVM69mstLCDTi9b2e99ox8sdoMZYhaEA99h4aSPNKGcbkzMqUQNbHqJub85CCs8p1d",
  "key15": "3iu7EvPd9y1U27KotpoM6DMESUJuRejWRnJjhNa2wZVqigK7qKVbkhYDuYUS4QyKmY341iBD4VskhLymRQEJahtL",
  "key16": "MnX5ryVa8zsBxNXDyfPv42w3i9v2N87RLjPvbDF7p49JddG8Gc5gWg6saJXC7B3buf7QazpzGjPmdkvfizN2MUX",
  "key17": "6486cC2K9ffRzJczgNXs2WapxxsSHqRgcZCkUSL2MLfrBs6jpEBg9Sc68z5WcjC9sH7vZBq5Lv78y1bX6zASLvLx",
  "key18": "y2areLZbcJzZ9iiXKrsw7jFRaAGBgxngNrrvFTuhAJbqeKpknU9BQHUcj21ZbveNE4WqsEciMXpxbwbRu3xtP3W",
  "key19": "v7rww8xcTD9cPqoYVfQMdtN5y9v7q7uup1xjfvWqW7jnCH9dadeNiagxq9QMeD6TyACDhQEqov1N3iu9ADf9frK",
  "key20": "kQt4z7VFvpLSvY2YwLsmL38nzDamxyH9NYUek179yXVA4V7Y9LdYRPJe3xhvq2SvCeDa4oXCQ4skDcEGFsppmXg",
  "key21": "mtq7FFDu4j9CEKt73fX5D4wWemJeAMCh4THwUUfhpXBKncMeT48jzg72ZmcUd4gDMnwdqEr9kihvxDizVLqTJK8",
  "key22": "2v3CuRhJ8WRLfGEAyuTqJ9vspTqanAs8FYgS1F6wAoL1rC7CCgQAfGFbLnnpJFMyGdez5o5hz4Q5vZ5Pu9kALnTy",
  "key23": "3ePSgA6WRTign1fpM9q8qeZkHEQPk6Q3i7PUh3pAXasGNoEozj1h65y1AYBncA2hV5cAzjsn2ehoJC4TfqPsJSLF",
  "key24": "5sLiJ7AzYamunHi5dxk2TyvCM9uPJANdzhrD2W4xAoZybW6ceuyDwmzG16Q1iCHaspcEeWcyRtafxxDAVkuFMWV5",
  "key25": "3X5eGiRthpYrPodMDw86Szqg8dEfLuqpWp3ToRLiKfXQekfSMB6CsmaYtVkWPDDhhBy7moHpS5bHpUyMMuYp6sdt",
  "key26": "3LRXPZVqFYWNeZwi3MkwBf2EqMdp63toTqpsZ2P2EfFyHh5YpgUmtcbgk8neHGgQNAWoXKsXAF6qsonEtaz27jKz",
  "key27": "24psXUEn1KupPyHrqz6hJd3ejSwmWhjThXyJyg5vRLMLbzgfnTvTiydHVFtjSSRefZkEXhX6byHbN1ANggLbA6nw",
  "key28": "5pi6VuqUk5V5aNc7ASH4g5mDQGNjknHZbE2YmMeRDgcMxuTxDsmpjSeX5pWsaCgugkpYmerSzTHNZVwWvTgiSC96",
  "key29": "37o5CmDdw6pQzJEkLLhZX2EEJkuRmoc3qFsXtYWdXseZwLzqhFmhi8RMa6WWvANrBnCmQ2NK4vgu449T2hJGyMtW",
  "key30": "2XyvzBhJyxediYKcRR5wS6mSNPEcahFg6mc5V2qyL38Cqxzshivs1bQSw7cowzcm18wtzEERD39M4rMaWzcx7AUL",
  "key31": "7CjfdZ9Q2w7CrSWVjA5f4nEURzYgZ1gTDMhuAugsRdm3CVx3md64t9wSLCiRbMmcaJLhgJ7qU254NGiSYESUAXH",
  "key32": "MUTb8ouPAum6GVxRpaPBekg63k1gvzBkiyVip4uZGMUVtja4mmBQHW6XbfAHVT64FBkncWmv9fVxRiXwJmkua6m",
  "key33": "4nmADWKsdrEqB1WrFeWn63psCvQPMr6rKFN624hzLcsVZ4pfu1AJzHoS5S4FtVPoDUkmQJan4sQQLCUpkSZrAs3H",
  "key34": "ezBcv311Z4cdwsbv7k46adZ27AT9yLBe36VpnJqc2nQopnSvNnXFZPMmoSRPBG6MPYCC1vQm6VnkTrKnVMj6Ecp",
  "key35": "2vXFUXhQCrou8iJNCXDBAHZPEHasHTpNA1pjfKWrS27z5ii6mKgXoJ6qyyixcUGfFdAeBn5gXfVHtcexyxLhvJRe",
  "key36": "kMeDXExNHs81cD3Tf8kdJtEoSPFgigGkD913kp8dZ6RJAwSHuaPcapsJ5C2KgDehmr4C7YYGUtNY4gJE34qvzZi",
  "key37": "66R86Z86ertckhwfRDhFw1PkNJ9SEZwCPrWxwQuzhR7hjwTm9GDugxs8xYqjeELLovRvPKYB3CfEyrJdJewBBPei",
  "key38": "38hWAZXCdi46nQvEzYWfJwb1QNnv7WvJPw5J7W3EnDuZMir6MF57FMNouxXgrji63gJHaFRr8R9NRUgXdsSg4dRZ",
  "key39": "TpjLVHzh6WKQ7nZRWWQ7HM6s5mznpXk4Yf4QNCRS3Dzs2KoQ2KQw8tjv7CCW5GCyDc18a3WyTXmsB25jbax1XoS"
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
