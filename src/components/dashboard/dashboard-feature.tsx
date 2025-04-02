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
    "5qjNE1ijzVzZLgquWu6dbWLTnK1vTpSGLe1ykrmUGhPJV8xScwfpmakDQt4UsWAfV6KznD6KJBvpHhRZAc3QDvJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w4stQQcvM3kR7zcDnpE6G4kX9XVrZSq9bw277dbnbrm5hVxCAC1r4w5qtG3koJrwvk3p8iXpcwfbui48hs7hGfN",
  "key1": "AKd94MeTtjH5ohnuwq3HmKsPMF6k8hbGWroPUaNnEhQZdpaRJXJ9zz8JkoRwvXaVnKHURaLyRCMfJvbJtMkViM1",
  "key2": "4j24Hv4eEjvqqTj6ZMb1YF1sDmkYJpCbch1xihC1kPBqu91yVaNTFk3m2gUaZ233roDNYPXTgvjUHpViu87oykhY",
  "key3": "2MqyViJnY7VB18eH1MgienBJABc7F1yChhtDpAJ531R2VtirYARKBDsfbjA15SVUUqyRLTQRzAEz5G4eWC3Wx5ea",
  "key4": "5SJHWiuLGM6zmV91kSRxJw5doH3DB6cwA8sd93H6FseWqaYdo9HWLTmjdMmeDUMbEPb5jTPLRfQ3dnvrcWM8MNWg",
  "key5": "5CVNFGgCVJK5Jd5aTcazqGNngsRjaDTiMW8LXJ3pP7bNZibWZp6Eq9ARaHfbCgrrmeCmMwNZpxFumXeP3vWjd7CU",
  "key6": "39Njo3EZT7twhrTf3G7JHKGXH25txhoWxvDZFTVdZcr9rQBsfW4x9tUZ8aYzxHDhqf66tQgvEZoYTFhErHeYyTRn",
  "key7": "1dXSEnmZmUEYa2F7jaCy8PNmpm42NVGjDoELdH924aQBJh84dUyEhJEaoSkFweZX7bh8y3TMo15yAKihgjkretS",
  "key8": "27FtxnVMdvRcj1HujZE1bApQocj4rDFNzc6hQ5sEHHXe9Mp2kBSoHGvJYyv5BQf91B5axVMVyeRkLoV1D28dcwBq",
  "key9": "49vQpaUkwKntZHie4JG9uNw4iG8HbBkBQDz1peezcAGuabiTsxzXeRZFvVPomVpQ7xe6Sn5N9mKrF4LjnTXHPosh",
  "key10": "3z199gt45UPvXUbL2fvodpFqsejMKR85WmPV4UQXsRU4j6wUEQHVv9G5YHtCbULTkwhZsZ6RyhThTvTAN4cZCm1U",
  "key11": "35jwaKPgxRwvXWwv234kJAJdXKy6Kngy21mnwW58WJy2682ooyH2yzks76oLwkVu6V4KevvF2o7rKqfBFJpxzSS9",
  "key12": "5sFEAaT1zhjpe9ikwDofNq5WkUiV1zTh3u4hpRQP7xqfcpvcTpYQtGtYgAF4n1KN2VMG3TUwEpz6hQ3f6TTxgrcE",
  "key13": "yBvZFBQsUtuHaUaYLmC87oNRoaxspDYorX78xXnYWqhmtLAiVszmV9yY7nWMd6qmH7EREtLwxPZw5owy545zHQX",
  "key14": "3qFXD8qM5A6ndzEmxcmZJMtuiKhcpw3uSAmBm5gwdeACaEfFVxz7Q1AsduLChehxkAffjgiUFY9bWByGhdBdvJLN",
  "key15": "3SeKFeJLRwG3vm48EGZJDwxCXcBHQG1vWJNXqjx3ySJwbPS8DdGHAUwyt3bTtDDp5vX4vx1U2NHbP8NmZCm9cDQ2",
  "key16": "5mWB3KKn9CRN5DPmr2oYCNMscWPRzAu5wmSxwzadCisMusErXoimwMvkbk5ctUs9toLjeD8rvvurg2oZeMyRVgWX",
  "key17": "5Sz8ojFaLjesDtSeAtFfQwMKeBeYiXc4pNK9bHsZvAhF9KnJvauUmB1yePT2xNMLax5uQghfS9gLesU7SmwM2BR5",
  "key18": "3tQQt7AT3UDBv5F52LbmCP7TMPHs6PMxc6B4MdPo6RTZuo3WKHJz7GbjM7BHkup8hkcqKWmzLi6Ff6U2ihX8QkYi",
  "key19": "SWziJAAThejv4q1RHpBxjmNS8fz8PVyKimheNzuXxGx4KZeLE3yQsc3aVJBpHa7kuf4r9rjFBAAYME53z74CRsZ",
  "key20": "jEQm2wKGXLYmyASyZ6mXnAB24s1Z8eZp4Z5URwfFFhNBV9gy7YiTZT9znj6ArHc32p3KrDAQTGMGj5Fn8SJKys3",
  "key21": "c79gEWJYdsX48QkcmE9Ey5hSoDNLDppBzjJe9EihcoG1rzvWbrqAJZdoy1iLuNewv77jhQpJtJ8BgPt1jooLerj",
  "key22": "3hxP1SJ7P2JbQMqBoAk8KBzprLkCodqsXqu2naVG67DJFQS8fjcQgR8CxPiH4fhMzqhYrYt9Kqkhk4xWywuGSGPd",
  "key23": "4P2QM2HtC3anFVKxLHCzWkDFJ8usnT2Wcrz8VRDtmU4LNxkWDTx3jAAikQQD6DKLzMMNkETXjXKVFCGianHT9t8n",
  "key24": "5zGZ5ogJDZ7tcZmWdxCoCdm8okQqzgPrj3ibMUE7jqpdzKmWeW3VUvSA8jVfkvei5bxDBF7ufmdj5PhfLz4CDMEv",
  "key25": "4TYEZNtWcEz5paR916xbSgzUtWWKSkACPGgfYXMhX2M6ySyJSYKUp7eRqYFu9XKQQftNVJNjR8BeXqtqsLcpiLd9",
  "key26": "2Pm9TtnEp756RtnSkdJfhx3SugbpE7zdGTrf8yVuMm9m51Sk454VLjjuUueHipjTPDSBvmPf749v56Ed5LcynKG3",
  "key27": "59DWbgpYWEiCdLhWRy1DakCxJWiqDiqsNMuWBnFpXEtkZSwroRpXSwLYF4ELdMJBKmEyeXhVbpgK5ymJs7e4pNMN",
  "key28": "21j4ddUt17yK2h7hHkEc3KHtyBZLzfF42KHiLL9wg2168FjvJMmJKRnVtTH6UrmuWHk8GjSSrfjuo2YA4eKYdPAt",
  "key29": "5sd5hZMo97PX5UMZ5m91KnJpNgxypBwgazcn7shZmaqxRd7z1WgUjVaFTNjtgcecfR1UpMbiWe83ai4ptvgnYZt9",
  "key30": "2rQ22vNCaRFZfoMQvyQESCywB6SAKQJfxJecVZss5fodCWX73T54DGyMfRidyFZYkDn84FsUQkXpwytaN6JwRRyb",
  "key31": "3aC2J18KXF4FPguRvXXffTYPUS9eUVsZ9mqrgkzEc7f3JiqoXUhH3YgvnTEUhbLrDBMqFQ4pAA9CDBTB4ynGM1yg",
  "key32": "4pv4B6LrD1K2oKUYGhAaqn5sRor71CksGWPvS9fMEXGFTB86EkvNiVv2XLKFhCtwaTofTC4RCQt9MgrvLd4WP7Er",
  "key33": "48ZBrpCAkptBZU3LfbARcFhWxzvjUNCdC1rgxADmwG1RH5mdpSKAzKKFhy9a8gYYMXr1ijsj2vS96Qb2EGtrpDmW",
  "key34": "51mdpjMdiAHCzSEGPubJU1XaY4Ht2kJ26dym9T7reiuUw96droPBAETVZEMZTTYCH3SPprtGUVRWzdbZuLZBdyTm",
  "key35": "3kv2nRcGyguf28q8EuroUBZuEFquxTagp16Rdew8xg1W7tkLrqnDsZe5Yq95D8KpHhgMdrh8Zisarn8JETVVpzFG",
  "key36": "2uD5cjmPo6N2zTL7HLCrrd5Y5pDjpLZ68GmAraRpt95qtaRZRT9SBwqaipc1CdRFPdh6G7JEbQbc4oqyKmCzGVDy",
  "key37": "523FL9MxuZXDqFKmEMkuirYXb6DRR4HFx9tfcvXJdEovtu5WFvboyxGh1eu6FGXGBFqUCkEs9b6ERE6k6xRi3Wd7"
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
