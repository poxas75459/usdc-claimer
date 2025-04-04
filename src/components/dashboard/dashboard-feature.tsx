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
    "5Xk2B4XRe2qRW94kSTd7DwLUSmXoV1NZqq5FqkSTDVLDjrLJALaVy35e7mnKvjbgJchThmbH6bwvAHTWfu3pgan8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAr51dmCLvbHMqWSS78apt4FTerBaeJdPu4H5Mq5VzoHFxC7porvcWwrfunbZm84URnkH4FRZ4mR4x3BwvfSoXB",
  "key1": "2s5KK6Uk3QWS2QXcTD3mHyKZDpGFKDmVWAf1ytVXMYDAVuQ1Cqq5sSbqaLFmGgjGiBLwidzDrKaxjgvgEaASnEdC",
  "key2": "3tWvtnkePsUwfN6MVAEyRXqYLZHtPcxTuiQsvu1eH3GYjck6w87yFqp8XeuG5atdjeLaA35xV9hniFY6gLqZoi4s",
  "key3": "4AnuriWNRSskWHbc5Ja7w9c1mN2x5Rw7neRdYCunW1X6X7efCixz4aCfHBrVP6LsS6TykrJCafWb54fZfCPMFcJc",
  "key4": "3uMcPjvs3CMK7b3mpHam9NaEpeUaSvm8iqGFtMWSNh5gW9ZSfNxMGRpkr5iYmBJ2xCnBgEeDGuiuviVjnbXYXcVK",
  "key5": "3yKSjXMbRFzjjfmPMFcz1VcRFePdJJae1QBrFLWnsgM9MHwSNDFJiGFRNo3ujaFBXNsyHTxY1re1CDoXkoCkFcrx",
  "key6": "4WWVaStQ6Vw2AMWnttNu1iZc4Edvzd3Sh1oRfiT62m7uiHDJwrVCCqyHYEBfUYDkTb4Gecf83cWZTmSE9A9TsqvC",
  "key7": "qJo7sVs53R4mtR5PSjHNrRaS4RqYxM15FAEK73zpqTkLmcqhcGjW1ETppkkUFHUTyQL6q2bRGQiYHzaHajk9SEe",
  "key8": "TZfdpDKQq6V9ed7PnvWcfPwsCLZxjQZqKG8AKDPtw5EvgHvC8vVWzq6ApjXMRXyEaANXrGH7opwe5X6fPJzqcbU",
  "key9": "5Vf3MrNFDhWEi5pHnKpXd4bBmwHBSRfD94eaSvs2Bdb1RwpkaKnnUBjcXSJDs1WnNRxqHbhRBTDBATDhFviCzv6S",
  "key10": "21ntvVZ1rosFgmmx9MTFV4U1kubwJZPxBx1m7QStCEWikwryTuuptZvwagtMsiHFQCUc1mFerm29fsQ9xwQnzyjU",
  "key11": "VwC2UfVybxA7u8DmpLgb54bTsebgFw1rgoPuEQyWTN7pTSQUnGYWRujgHQnrxrHPoxFQ35jf5YZcw63M6fjvVE6",
  "key12": "36ygU4LjKKFvVnKo211fU4YaV9rgY7u27jtDHTnor5eDBgHsPPA3MjjnpXcv2XDcWPQNAr5YfJb9zDKbZK7YmkWK",
  "key13": "AAUV6PCnSNQ4LadE9mCjEF8EKxG8Y8mBcgtffRcecg4GTZARF1rf8fgcMWNp47aRBMnY71B7rfpxiexE6MbX3ML",
  "key14": "2m9zPAXScw6bePGwJJk4MLGVtdVZwNSbWKXFscu4vjcMHkf7toYxmnNcK2NPsfZEhczC4K6cDB8BCKF1B2DLJHSH",
  "key15": "2Qqpe9w8U4AgYw8DknmmToPLuZAyRcM4WfQac2eaaeYAg5TypjEcZeDmZTMenPZnEdWAfhBxt6dFU6BeJG8kmx1D",
  "key16": "K2kUJMPfPRJPAZde1TAU83wxcNxj2f4PPDQmrcw5VQG2WF1VeQ5WWBQTSigcquZPzgPhtDJQDKP4eRg17EbVa35",
  "key17": "2HqzbJ3CuzX36E98AyVeUXmzdtQMuo4AXuMrPkUhxMG2eXFxEGGn3dXTwwS732H2TUu3o8yMhVYhipWh635BFsy5",
  "key18": "61XYnkbVcdC8MQxVGEMMdFqLykE7Fx7FG8PjeFeyNqKbLVZAr8tpAojRHkna53gTaTQQH1hxhESwj29baqbJpkSE",
  "key19": "2jH5sCAJ8Kku3vFXqQNrXQwUeDymS2dEVHx4UAewiXqmxysKteGdYPF29PQt9YRtLDUyPgYbpLyTZ2pibx31o9hD",
  "key20": "5h8SjoPUUP7unxxC6FFF69JHkWxSWE4TACeUTfbyyzRXdz1G53jwKYjAzktBa2kEtvCyA2JeTSKP6vptQJLxw4Zx",
  "key21": "2doygCAGxKy1z2U7tRLTpb95wHgGvvqvsGEToPY7wnSMVRxfeuxHUxod4t66zRWmLg3RmTkb39vidvACwVnXCJQh",
  "key22": "4AkQMcuQm5Kv2dkoGGDAbu3Bpx8tQEBfS4x7MA5z12LKNB9GUhc4jdampjseZev65wbeD4Z2g5vAN6R9iYoMChQi",
  "key23": "VKchuW48HZ8RrxCNxNNSFD6zfbY25cLyAYrNrhC4Kzw9yktXRJBCniRQbGgdDDyATRpeD4UFifbYUNyndkumK9p",
  "key24": "XcTt4dGEmSNJbMyv9GxFbxyGsyYPj26DdjPyWCFYvTGfKDoCxHaPmy6giumZiVNMxr7Ave1bSM4xUZx1cCg8jM9",
  "key25": "2D6vFdNQcbgg3LqiNwBH5rYtbViQAbGfxHZ8GAbV1YJJYxjX7uYx1AmvFQNnpnETbagVg3FjVBaVAq3kgbZwVe45",
  "key26": "5ND4SZ6H3gLnPYKTXjffTzGzy5o6sG2SAFYPR24aG449Kmd46GJxJUQrfdNwNTiKB3VNvTACmzESPwSm6KF2NVse",
  "key27": "hR6cdkcmYgN3H2wM5owbTZXtnXBhfpQ2miFu84yng46rf4hiuizPqVxSr2xxmUb8ofGs2BMhABrSgRje8GAiMet",
  "key28": "SnrNfJ41Rm6vSJUMeb4C2shLgjjikcdYzP5MxoXzb1UBKmjZLdHqG4iNvNF1JjcWiYXyrzes1hw7Jkzxk9Jv36J",
  "key29": "2f2wYyPZgKRyo9XJnHVa5dE2djVQ1na3aoN5A3LQpqNR8PbwH53ygcddSEmr5hC8eJoLpCKA1mfQz8PSJnpsBpey",
  "key30": "ZgKmbbQSKFnSsTDqEpCnLf7aumWeaYRfVGP2Lvmxuke1VEmC5z1iyDrmKrA85Qukwo7iN6BF5aQA9UaS17xbwnf",
  "key31": "61dS4RFf5buPFmm6EgxjFyLj5jAZiXLqvpKVhw95Nhq1pUcZmYqLPZXkj1BM4VPU1punuMTS87xWm7jxRfv7uEJh",
  "key32": "3NSv7gbL3E3ht5d4wgWmobva6b1DnDShcuPYHzJFGo54DBtE2e99jQZZLS1LHWRbKCV3A3cLWjLpbtC5ZJUSnTGK",
  "key33": "4T6RykZgwyAUHNLfLzDiRZZcYfnUUfKTdvJL2FLq1oQrzaoYRW6g5eNMULySdnvi4kBrKkRaPxJwozRaiq7LacBH",
  "key34": "4iu4ZDMhAxpiai3HTWD3D3qRvt6CMatAzorz49DzwLuryMFTE3BjLi8D3hsSLEBZkGPNLV6rjUQGnMxvpHJP97Mr",
  "key35": "2ZQuJBLyXz9tiALjXuQNKHeASUqWiqKXrz6tL6Ej3JZ3cZ3DdURQocLne8gxf7UJNRz5S7sGKj3MD1DGga6TiHJK",
  "key36": "3BxT2ri1MGTjLbVLF8WCQNBM9uX97oXiJaxqHcJeUJBJFszWdCTBUnX2NKAFKau9YLxsYMGgtBt8Z5QHfEFdeYHV",
  "key37": "6JimKzPTTg5PWv8yb5EDeiZeNiqqTSL2NtmvCXpucc5QDDdvyB86ssDgfVDNffscesd6jzQ2BNVZo6bbNvYbeb1",
  "key38": "4GNKnvpVxJqNgd5GwFkWUC8U37EtYq2q5R3oLmfSB4pqa5n2x9txjouJv4MJLaQWXmBVHC3U1htMd8MYWUqUNekj",
  "key39": "63pqc69tcgX25iG2Nvzu1yRC7PrH3QRrRZoysDVB3guoTea4GQvzpwYjhzfrNEkEoy3fV3X1AZbLf3KpiWmrtMvX",
  "key40": "3W13Eu2pdXF78we8Sg8UtuGVMmJmSq2AgvNDJHryumSzgQNtEG9z5NViQVK39PDnQKU4WVgaHh3LkigEaEJueGvF",
  "key41": "7ZPxQdr11eYbRkLCvYVN9juZSyL6sEgA3fbdVfwZgS18ngZPnG6RY6tbbTtCktEKZGmd8NVJzaUoy8JBPEesi5H",
  "key42": "44Q2SkEf73LFdT8i5qaceqSHpUt6N9T4723U4fhVSpE9we8WR9SGDCoXkpiXiPzPeBiX6DgXWU73YrVUAJDJFNGm",
  "key43": "DCVEz6Mbz8gGFWEvumrvcmvKytvxd8fennNvpjDVY9vQ2CTdpRuARJGeA11zbTDTUtUitrw7DYdoEf1NwKthd36",
  "key44": "pUNHkgykjyCPXPUy2XNv1fejCLvHT9rWn4fh3jE3FUPa8NRLfJZLK85FqvetKj64UiBwAtGbVmkGyh9wDgzVf4Q",
  "key45": "uqBBjS2Xz7ENGWTCAqSMoq31k6emwDr9YnkiSxf5KNgKDTtQc3VyLcSCj7Lohmj3XkkYjDFk1wFiRACuUqz9vkU",
  "key46": "dTCwVFhu4NRRPU1wKiEuPWZU6khtURxoVViTN2jjdBFnzgACeTkU8CSeDroFpgZwnTcSf6HXZeBM5kSQ9LL8qmN",
  "key47": "2TW36xifm8NniQXvn9wtrxy6nzTBwu4BfdGvLwMA7ag12pJSMMC4a8ZxobJLevgzJ2tkG4k6WcWYaxmvZU5Dj838",
  "key48": "2FezxtdiNoHg4q7BXH5cswAtACFmDxVGBYqisDVSo1oAqR32SWzEE66qXotBbW5oTnD5SDF9JGFoaokoqX4J9H2C"
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
