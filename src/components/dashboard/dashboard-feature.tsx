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
    "2g6npkrTmbnySDcRP3zgdBXRT3wyo4XrvVgejibmmYoVSrkb3TVSm68wQ7rqX3fuvszwXuG75Bqd7qwA8aVB1WM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRG9WteBtr9Q9edPmNZkj9FxziDX6oKCMqmnpRa26yMN8RetC2nurwuG2f3Qcz3Nf2qi34egnUiSGrQq4yf6DWd",
  "key1": "5CDmNLGzD94m2S4cbokZ6CGqLXzJXZqnesrGY5FL1Af1QrqKx7diJB7JCoAnMR7EpZpzqbVJBKpkrAoji5HJwBLA",
  "key2": "3a5WiNgiV6hcfvPL1StjY8eqK5YK4eFSZjFr1tYHZnTPzPGGA1dALxJVBecZVA7kM7fsHrk2iGBuzNkSUBPQTYcj",
  "key3": "WS77L5uWQooV43KN8YYwyzkBcyrHbCvsAntShBCH1uyL79jTPxtwZoqmGcyQiusdBaQysEHKVVFaQnfCbGY7Z36",
  "key4": "3srwsc8GCNwsLicNoeRguYw3N37WE3rpLu3zCKJZLccLvL5o32U8fdP1iFcfjKw4qXeC7fPa4oahQka2YndY8uAA",
  "key5": "2UaSyiVb4CZ57am98q7MW34k7S2KLyT6KxiaU7G8QMk7w47xVk14EVCcRTdeCgWbwahFu5iL65ehWnxqkwzZqS3e",
  "key6": "4LTZaoQWcEd6uN2wQtw5qCfSt8eXs9GavsJW2646LrBwx5mmDNesNMYRCYpgV4KCRNLodwKQnfAgbgVEnrZ4vKMH",
  "key7": "h9xm5miFhMc93fMdyrogSRzhiP2H6x4wJLFJe27TsHcn2WovCdcde7gZggykm1Kv4CL2kif9CbFr1fKgrAUwgcD",
  "key8": "3k4KXwP4ECr6A8ZMMEYFbfjDPaBJkK8uec9CxUHw4ttKrvW2Qho9Fcn5er9HMGuGUFzPh5ZKNPuwddrmMBqxwYvM",
  "key9": "5PqXdVaaJVSCBoqkQ1AZw8xCuZP5uprh1Kmcii7RLTdg4ePcCjhhD21Q1whVzPrTV9Pr4b9FpJdrYhASwKEXuYGd",
  "key10": "2TRYjD4Lc9UWgYWMB55WwL8GiBM32k7fs4kZij4YEATfkbkKFQEsgNF2AZ9xvL4DhpRBtY4BB7ws9AiZTyhjn6AP",
  "key11": "23zATNUmMSaUmbjyTCWg7ijqRn1NXhTwHiU73BZADks3SYwVnGWZXrumCRpi6zpaseCBBt4NuK92hzJxQw9KPLNQ",
  "key12": "4vYgeDbYbT3Tz4k9d5JcWLYRMasgfZPS2ZiurXRuRUpBR8ZCE6BuwWH6xhpqBWwPnWzGPon3C7haajmphKdmCv8m",
  "key13": "29jvq7h42X7dwQFpe6oSFbDAtbd9wvKPRtKFFcqT9pDRvWtPGEf6X61bdhiWA3vAwkd467nBCt8XdM875DNNiWNr",
  "key14": "YHt8ausW3iNsa8i4rJPMWmvPyr2Mh6FZ33udPcgJUTZvKBQfmNPEGMZbuW1U6HmmLmps4XBeofchwWZb1qMfcef",
  "key15": "5UX9nQ9Z4Ktu4gMcBVwKMQBrj7tcpzmdkXQ2wgeHM5oa6J5zyo8DaphEP8KFGb3rTK2aQZ9YUy9WSiE6GKBn6Eer",
  "key16": "63ySPJMqXPEaH4CYRLkEbBjRTbvUw9RrAmb7qkj4A74wPxg1c9uMBZ9i6zggdnrs5vYiSRRrVfMigGwMVZz4YYXy",
  "key17": "2qG2LBf2q3yiWxsxQpAAKXHHgzZU3edsF5gLWefRybJZXemigZW7YAVVvrTjhVoiZhxd7juEfGpNkazDeVsx6hSw",
  "key18": "3vMNZJeB5B33nd8bwaSgsML6Uzt45F8yfNo1cQAau53itwZ7eSMrUMqfMyxFfNUau7T4D26Dg8cUVPcreUaDqpPp",
  "key19": "S4DVF3Sk2nSpsFA32frsgBzhnYKKqyiKPyR3DBb7hhjQjzynpCr5QBhPGaqjndzKF1ZePXgTg7BtHKHBuViHziJ",
  "key20": "36MhiLmJDnELyetPAwKC18FVW3sMJ8cPQFnLGtpbt9GHKGRKXZCPv5Uo74QvdfVXvyuReBb9Fu49TXqbZpWS65kn",
  "key21": "3sUTsme9yNSb5fYdEHKDeAXA2XFgboJkyRSLAfsSvtXonT5SbFeFE8hUvTF2JTcoAenZ46K95nFUjSwdGcpgpUXK",
  "key22": "kxFwP26y7aQruCnxBQhWjWVFP5bopqLwk67sY6BH4arpF3jgsUrnbEP8W6RExjb4k9Xq8Jcg4ptBj7mNLhdhwv5",
  "key23": "3GzCbQAYYR9Fjw51AhVTLiKsAztFc4izhz5S8aJd8RQsJLBrBVN586aHNTQvryXM4gEmmBEYjrS68sMDw9AKP1c8",
  "key24": "5QLcvcTp5dq6WDCwi3dnHC3WEk6EqgKL2QoXocRjmQ2SVrRuhArCCHUB6f22uveAv9SQzGupxYmYDu2Mc2q4WHwE",
  "key25": "29a5HbxNDy1nadSHtYbnJc67HgEJzes3yHfY5sKbE9cCppZnGcN8AA4XJ7WJK2ZhGAQYsYXPZcqaxLoXjpL8ieet",
  "key26": "4m7PqzYmR3w6d7x9EjCpUE8o6LiFb3x2ncbtGtodBJGo6QHTxDwqiSvoQx5sTr3fchGs5YKXk5qTTgKG8y5vbMwd",
  "key27": "3ikeFijJYBUv4F5UqbpJ7qEUe3oceH5Xwz7ehovwo4DkTfexERreGXPFJBXHDejf67o2S5Tso3CjfKt8W3inJzz",
  "key28": "3LzEYnQiwfu6PD35yuiJACRotpukcDbg9CHi6Xz81FaFbEEoJkxg1x8DiUzQRxFhvWu9awLTpgcDdZt3M7AwVA1a",
  "key29": "3C4BuZETNt4XvMmZpEn4CMW7LdgsX3T6Nwx724sdjn4ZALs7Ub8PGxHTrwj6Ftd8T2xL36bf3uvikZEWUk9VrRyg",
  "key30": "2gubhVoyL1kNgTbbYaGCNGShgX8BJtEn7YBKgpupz5tm66mC6pxsySACZvmfuFif7Gwod6c2bHP92aEFbpwEbrBj",
  "key31": "2S4tHCsmnR21stsuef5C56AAbK27ZXZvwBpnKUdqk7koS4FnUKLs9JR1VbxWCAKp1Qt7DayFxLQMjboMRoRyU3g9",
  "key32": "doHqUuwNjwJdfgVs5thEKj8dfiAkfB11JDjiBRxJeiWz3mXxyeMXVGDCSMSghF9mZBgtJkF4tSvkXacdpGa9pen",
  "key33": "5gaYgBeE3ZS9ayD9hkHTqXSrEmZcGMxoMuC1ManzG8uxYuff5ZspThR8JNE7bW2z3sdHRz8WMMwXCZBzJwZgHgpH",
  "key34": "2FLPDH5wjR9M6X7uwZAgkZ4MfWjpUut7btc2BnxtqBTjizm25REAVsdzKZ6vSyd7Wu74sodCBrk6tzwKGEDREPAd",
  "key35": "2DovGwCaBzC3rF3rJWVFPbfwb6QVZ63BBQC6ibon3hnMBwJdGLiYyog8R6788L748yrqxcDWeTCYr9xHTYH21Sd",
  "key36": "2sbxZv2YkeRD2BoKhKbTNi2TXLhujZzFsjAXdVoKf1m8ZW9YRukCNxyYop6XcT3kQ7Bj1AtDpfTaZfsfNtLGoDuj",
  "key37": "5GNSwrBTfUiSLUEz3CFLU6zW2LBpXwee9Jx4geLFj1ciNFtXaYywPozcfeHp2Jm31Nwwtdzy2pnpHmmoKFVTAtRA",
  "key38": "3g1zxE1qkJxPLjDuiJ8w41RKdx2YX3ySegycWfV19LhdHQAm4H7Q4Rj5ASFH1jhqM2Jo9EseJxyZcan4EcKP3tcJ",
  "key39": "eww61n7s4XwP2vdgKp2eAQtiRRKMCBVAGH8zSHB2NzcJHWg6oETGHZx2a36QrrR7AurhSZs9STSJNygU69YFBAS",
  "key40": "5AS1RnhEJ1YU9vGVPkirqzgXuM1oZGQdt64QLkgNXhGy4cKfu6fZP7DQRsG5bBys6w5iJ4ie7LXhWb1hrfiUbHfw",
  "key41": "4u9WznViz7jRwTFCb99r8araN4Nk4Zr9LspxRhn6yRezs3cg72RhKiYnw3RXNxuJ31gnbV9XruepC1XqmEv49R5r",
  "key42": "5wnDyy1GhcmqFVprJVtDZJQHSVhft1TFnunZ9Zp4pLk9dFYvS5a5RnXr76DeDF7q8W8hPRBWdsm8JfTvwqwh6zi4",
  "key43": "5KWs4X8QYeQWtLEpu8maDQSTQoL4gEPf5ftSjcAN6L5gCZ8z39e9biCD6dZYvL8NEp9aNVki4MQYoWuGhQPqfvJy",
  "key44": "4utRpRdwdZedU29u9yVS2nNBiEfajbzp5bHpzTDra6nKbSDdnSfpzDXKvRqcddxXoZnUgUTAYU8tQNqqUgH4VDb4"
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
