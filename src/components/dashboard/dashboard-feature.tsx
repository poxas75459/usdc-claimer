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
    "3A3fzR4NNhHAksXG3HZfDFsoPmmGe3JmsDsM7ctk3nJ2PGex2Czxcde7Ccb5H17oN9RoLtgvNH86bhsNRYaZ3Ryw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAJBkx1tqmp95YQSUu9NzsjrKgJYg8xh1w1oNEadMK9THtSbq8Zw1Y5mFkB8pafGjBxQRS2crF7dfr4b15Us19Q",
  "key1": "5imGNXBsSL8FUXS4o53Eq2uPUsvpUDnAV24Shjxng6PAt231WWZ5LhVmMtDyxbip3gy5MqnvdvNqGE6SgPukeerL",
  "key2": "2dxAB5DAMydgb6iw7QuEMs2nzPWxrKaRRP1XMmiAEfvR3ukBp9GjAcyFwLV9NhkakztokQ1fhvY7a3p5Pk71yYpY",
  "key3": "32tYyKGEamFZEZTJXjFpUmc5gLyKAWv9aeAUKTA851b6eY1fDTUFsyXwDY8uMU3LvuoNrUqUDBmgJ7UfzvsoPjJ7",
  "key4": "32hDNGUNecYnkuGtDcJNPSREz76pJ2rLy4NjbYCzhfWvghJdstSVL4WaoCwZFacXDhbehyXr5iDmLfZqFLn2sSyF",
  "key5": "3uQg8xQMoeUMWdRdr1wd692gerBTJoSnxrZsjru9G5DxQpGdh5pxibQeLBVhTANHq2DeTYTSsFsZCtjPCWXsYyES",
  "key6": "5h28qpSWWTRrp6YSTNKUrx8MhBeVTVCfivF7n5ScTCv6seY1keypW86RPKcaxb7bsSmWwvEJYgA2UYV95CK5pA4w",
  "key7": "5bLdBUBR1am363wPJ7DUhNdymqdBvNhsMPhtG6oMFaQy4sECDMsG7isLyHxDrtSWPYG3jjkMFapBPQo8r5Dj2wPq",
  "key8": "2FJVyWLwyPrQdSqa9AazGhxcYPWHHaa4HWocPwxw3wU8SWBor3uCpXwtrJdZi3ms7mhnV2MkFeTkHLzFhZJSCFcd",
  "key9": "2yPJ5KUjnjrxtH9jNAPNUxr16j2yGb3a9Eujy62AjYM2wYmR7rPZetBXEZR3kudB1kLgtviZxHc8AzN8QpVahMhY",
  "key10": "55pWKDu8gCjoXyftGVD2VzUGG5tbtYWhzTZkkMdNpspt6pxE9rpVDyxCLoTgnFGjE4fEriyVZ4oEx8DV1grh9RZb",
  "key11": "3kg9vwADNGQRLfkvxS6hEob46CzERa81nVVeSFV52wgYS22axf7PRTgjGaksJkyVxAFuv5F7ggV58nfT4t6PAHzZ",
  "key12": "2vYLWhX5M8f5kcwC4FeXWa9LkajYno27zkPJJyfmYWvhXf1Wp25W79Crxm4kPRMGpzxwiZi2N2VVfcwFS4iw6TvH",
  "key13": "b8uuHAhM2hefxHFXCs2XkkVfkg97CZvQ91pWbP9igqFjL8wCFppouihb3virZgvRhH6T3vpwD2mKt6JXuWggGhR",
  "key14": "2eiTiae6Hk5X8jj7QFhKx8VxGjU3o6nPuzCGQqYA8dsA1zyQHpbMgrazvAsNkMWiYaiJxWDhSLHuXenGBu5PqaL1",
  "key15": "4f9C9ywX2aEh4wjL2J3CnGtDQDtpv5bdKXN73BPr2i3avyn9BovTuUsMbp73UG9ny5Pbdc5waV6CbWPJ636hMEH6",
  "key16": "2CJPeiT6u3aq3VenVJPXse7DW8gueDUp6KRSX22M9i2uHJqs4N4hdAF3S8NaSDYLSzyRxTt8Xs27NtZVYCy8H34K",
  "key17": "4rCcNzsUKvoifq7MhcBobMnxgU3cvcCGafvjeiHEXdMkWtXkKXNZpeKidjKfbYByAb9Zd2B2TjxKeB9A7RQYH5ur",
  "key18": "2fGvuQRZNwuQ98ZtdjDWpMzgsvxfaP88ZrBoH1E9ARACqtFN5BeKcP5DRv6kxaTnXGgpPen8xoN17NaQgh8T9YSx",
  "key19": "3ctCYaMom5APqpJwsh8h7jYiGrXp5cMzoL8se3eEh8Bejhdnb9g7Ve6Yx7mXx2HTVYgEu5ZwSXc2JuZCESLsn1fn",
  "key20": "3ddbkVUWuUXwzE5SgaTryTQQFCxtsErtzteNNaxSUen5LV9TqRDpiPquaqpFy6xUUJjH1FvhD4iWArZ8ezdjA495",
  "key21": "4b6kGeuP38kGzvXp49XE6dX6DjBnVmT8zfyoFgGSgcDUHSt3G146pLaCyDeCjnHnHQE6cC6UjrYVy7M1dSmebQuJ",
  "key22": "4Hf77E642RcZNkWmSyW4DzFz6Lu7DkRSckfm6eypriVZmnoEAkboDdoYGbxWTcseJnxD3NZPcptAGEeofwJHKVJc",
  "key23": "3H2APJ7Se5iXVr9v2vXcwmXKEo9h2xkNvBBXDFqbHghCF4rzHDPpJZUy8Qrz9UVYij29fQgQbGzDTgq27hCCXW5k",
  "key24": "4icnxWsEbFosYpYWu1EfCThkAD3xF78dPGMbCdBKChA9UrKGqxT6MTsLuLmdA6hAFGJzDCfx8CiiBhZT9C4HgW1s",
  "key25": "5ZdgXW7wUMyA4wkbXMpEEPMMidNKAv59vVC3qtub5E5WxRHXBSUtTNMjf7mCAKmFsitz3S6MBaAf28dW5kCCnxmx",
  "key26": "5QExLQ9zpoCZshgc72ZhE3Zig8dWhsUXp58JPNQYdzcQAwPcHA5yHahYFcAdYBM4oNq3c3mNLbJbYno9YX8DG3wL",
  "key27": "b5gGxohad4NBQwu25sJVZBSmGSoGgs6VDykFKqiL1eWGV1uMLEKxPpXiqaYE6PjVTjzAo4T1njo27N34styXRDs",
  "key28": "U3aVSMZRKCD8ikCW1wxtSu14QAcB2aqaPQQAe2giwP8vh4y3tRWVKZtUrYjKudtJbWfKmb73AQSWhCGJfdyAy3E",
  "key29": "3So2bpJVVybAmL9Zb5QUuGQiRCmyEKDq66K5mrhwAHvmC7WebdVkD8fE8ALMkTb2RLAm79FNEt6NUHmGS6Ga9LYh",
  "key30": "5sdSunY25q4f7knGxgmtDiHYKhPU3ivV1rN4z4ZKH1hRoh1GnVAmXvszaYj5b1nazqsSL4bbQnxauqEuo5rmZ379",
  "key31": "45kZ9j4NcnUFx1L5fnoJq6RwmifDBiyTw3ewygp8MfHWowyX57uraUh75mzBqas43qi9QhQ19aNR8u5dQGM5GHRo",
  "key32": "4WTGhDeHbyvwwT2xR76GndK6MZzyUzQHLns3jfhqFAdVCtvXvga1aziEbakHtqPaYCWAmao7HTAA1XpaK7kfDpgD",
  "key33": "2cPJ3Q7x3pN2ucnFtYQS1YozqYaDKsoP8o1gMKy1WL3fLLtzD52djFLvjxf2AQrSgSTN7jcyxG7L1ScRDvRzN3Wm",
  "key34": "TzhB9HtBYWwUY1ByvqVf7BQ88o7EaEVSXZo6zL1DJ1HUpXF7qECYWtFfDgdt3bZcXCSuBT7o2jPsfeE5kgdpQbt",
  "key35": "638zhHB2uiBFdRd1gaXJBwRv5TF55pwjTtDgeYd7rC9bEvcNrsZf5GLj5Cjd4yodyVCGodiwwhsVWBvm4nCLVcey",
  "key36": "65mHYzsXZHrcQUjWTBAa1EF6ZGjs1uXSiXX8zj3yifhn4yZUCwsFUM54T3TefC7apnoERYtFxAJaMaAh7dhQW5vE",
  "key37": "2gScFHPjQ5HoPrLcLKQUEtHeKVG47kWVpxn3BB9FL92Q1dT1SxGjaFxvUncMdZeotidYtJipNxsUg9DoEd9waGgp",
  "key38": "LV3A9yneNyjrHaqxRWGf3HhvE92RfJJBbFFZ6VQMGyXJvDtTJzkyNXqBaih11gjx52byPrGvrgqydwiTooUCLnn",
  "key39": "3yksYyWUsz68Jr43vySkhYTWnc37U2Koct8NMoNfpu7vqvM2PCmC8c5DTWWXFDbxjhhnnfCLcDWA6MZgyps2r3DD"
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
