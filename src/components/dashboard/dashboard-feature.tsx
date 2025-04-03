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
    "2HYJAmqsABwxcfNa6vYuaTNCRXkqEffnSnDzDaC9Rq9v4oBRaYRePAfWEg5pffLMUUUVUp6FdhVkUvQHPmqVUdR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JsLViCBDUefvbhfF2Uycrca9CtnN5VgrZPnEAQke64tZRBVCq7PM1bWgx6sPpNHhw9BZmkTS9bk9DjKJLRsXPKo",
  "key1": "29bcTu4ss2pwUwBfkUSAWYf3R5Yet9pykbhZZMKZJmmjsZ29hmMkMRUxqCUveBV8C5MyLvZzkpbr1XM9i4JTbHuT",
  "key2": "2PVdbMebdh4cdCp8FEKvRqMpJyAu5mpZfLCiC8yYWPb7fpRnSpzH2JmrAH97VHvA7RcVXhsLVPrEhHwavs7PUHnE",
  "key3": "56ey6QNreUCQzTYjci7FiBz3QRXrFuHJXUxftF7F5D2wHxL4pdQw1vyB4CwgMAXAi4aTJpZCyTKLpgThgtjyj2he",
  "key4": "495ACB8MDEmVLawLbh7cStr3msUgaWNsp6yZRrANLwBg9DCENo9VV4TSN7ngnVprdChHRsZYfmBTbT3rbNKjXUx9",
  "key5": "4sEzqesDuoZpxU2za2Yzgcm2YDCLNqqKNFRSNruZyGFNk3ChYZspgJBdrZLAjPjacWJZM6HwpR6saeNMgytAo7Au",
  "key6": "PB1gx7MSLD6pSvwR1Xkx7moBPgrRegPx9c6B1hFQmv6EncESNAhu3yQHdc13Xd5fRdaFwY6hgSUZsGgrrpxZzhv",
  "key7": "3yGytfCDYBX29PDdLBALtxpnk87EPS27y8RrN2ZQ7VS4vZqSkAYG1ucKM4UKUTWPQNPrrS1LtW8Dxg2qQwyvZghm",
  "key8": "3kJ7spGjTbMjBgMrQm9AatXZQUau7vXB37kpkV7yP3WWn6A9UTGwNdiAQW2fcqMj6ckaBBF5VwoTCwCzEkxyxi1F",
  "key9": "5PTZ848rSJPxWizkwEFQh1YDnoWpyPzWDz6RzGVnXknjSqzwSjEMaY5PYTppRTN6vgovjHPxjFqsU2ovPAuKTyiX",
  "key10": "38eZMKtVZ9mdkoR31egJAky8wiNftyKfY8dE4ZPsWMSoA69Sub6HVtFj3w8YB1fXHgSqu2a8hrUXtQMfgB5E2gm7",
  "key11": "29JUJEcWFLKWdkyp1ZVpcbzK4MHnG6mEZd17NdGovDKprRWCwupAXjT1LH49X9ZUH21crjmAhrUTh4VQbueNtMRq",
  "key12": "4aLfrbUKfb7EDT2vPt4mS6N3Q45FP8r6g5VDdKWD3KMXcJ6yPdD7LHHADV1YL2WWkFDNgymZD89jm1KNEDK4MrqB",
  "key13": "5JhqUxHN6gM4CBdSAYSb4859gaEJu7Xz7vhwhmNSFn3qH8uDzXBLhz8sKG31LSUR9Wx7WbPRyoifEvFMG8zfirz2",
  "key14": "3Nihwf59vUvyvTXG3QxZ8TAV1uqSqja5ThwRtaRisfDP3aCccbRhSdas43uGsRwcQntJ5dySHarvU5kdrTDWUL1t",
  "key15": "36uszW83Dfj8S1ThKFUkFgQtEcuhb9xXGsEeQ7Uc5fnZyTR9US1DgW5wFrfVNKVaNGYUJRFr4pQkDKxn9zAtBwap",
  "key16": "4AyMLY7WTw433FdRnX94AZJWTmkyiJZYi7v4DxSgbsWKRzLrsB8tkj7n9W7WfKoXe89M2CM53pV4TWQen27bn271",
  "key17": "2MyeJ8bKdP8ibtE2AbjUsa1cmQamxG9UUAxkv5mcCqUxNtu9wWX59mdgvsmZAkxwwAXqXc4ehwcBviMVLLs1rPDr",
  "key18": "4ZRByt5dhaMuYapTbEE6nKFcK7H5eX9Z1T4vVB6Dw4uzqgL4imXDqVfpa9Ex1ifDsWmUJy4B9kWCRwb4esVkEZU6",
  "key19": "5kYCh4xH9p1Vm9mKdY8v89RqZbGHbiwHrncDB4Q2qBDwJayJ2NSCL2mzbDRfGg9GcMsikVDRCQ9GgPpwzpQcCoKy",
  "key20": "D8LAbUgDBpHFaHJQCvwhcYGnnrbthZYh8SuVnpgcaNHjfjmhTAtsSTYWutoNevJSbre5FR4kyrmH8jJaUCkziQw",
  "key21": "3fUceBC8xGmA4eJhmRxEPaWAN3i2KKv9zF7x1Bf5cmp6bwcW8hQamwRv6HoEa9d4K3poAnZXEtLQoYubjmJocrdd",
  "key22": "jk8UausKvMqTuRasJQqemoRfeQGBJZt7hEHt1bpiQhMsp8tMQwGbrmZxT1gBaDLB8TBZYbPnFfJJL9nDSSDhStS",
  "key23": "RHdnf3quT5iX1ZzBuURU6k2Y8z6NJCDqSyqiHofb29iH2PEL1jwRxF2ndFR4hFyY1bKh4ZA3JnoXGqCbkMTt5HQ",
  "key24": "5KqU2RZZVnxCYzmcRHWCJDXo6aUVjhYaRD2NgwsB11NR2eK7vG9UFzD5w1pdpLXLTmZ6z8NkvrKbe5cjUcioR33X",
  "key25": "3BRVVeQWpXGH8Ef8FKBzTFAJcpeLDJNKrpgkKNjScp3t3tUm1Bjd9xsb8bRjkjLX5gfiC31fwPEZRCSajA9VeAEU",
  "key26": "4c57fQtP38KimXqXFWRekdzcDNYvx5xsTm4FKyghL1MRr8SRLkCriU1Mc5wwzrpfAh3Dn9mBYdFMQLSwK4bjxjes",
  "key27": "5BazwGeUxUvBmisCarsf8oCF62oHeiUpq7BF19RQb91CuZEweUixaJAXBrZv6wZNLAh4gb5smPrsRscV1BbiHmBv",
  "key28": "3umhdYXP6qJR7b2eABbbC9oD6pq6vLTiQrFuR23QzW2MC1XMEt9KMfLtEnYAKe1KtVvryxRaKrkGGJC7seoZM9Jd",
  "key29": "2ZRTdPSS8u5uqYwTv5x6iUDfAJwoH2584KuoJEVhCW118uxq6v5EFVKxxRGyvmMyeojZ4qji5VrWpS6Pv1jX1f2H",
  "key30": "3MADH3Uxcdmat4Yeht9c52KEGxFobuhWp8tGXz2tHyiaQeGbkSS2uX4BZWE6uXJQoAsfNPzdW6vXTAcqkKH7TjQM",
  "key31": "2Xn5jE2jDcT2JMdUGPTJvwfy3CCt5ePGBsPdwMkDNmnL2k7uyMbXoxKzHNmqJTH1AHfRaoRokKXNFCie5jeJPVCG",
  "key32": "2CMGb1wxbyctLKtfP8os1BJyo5x6nyzcuggtZKcSPj6evAFhxs9rNuvrHUbPgP7xVvEamai4p9L94kr9D8Jp1eoq",
  "key33": "2qozKkNecGP5dd8LYSS5gc8cvGQXzNzWUmrGap7gQz2JThnXeNAu1CuXv53xVkAHTbep1oVrHSAtMFEzxL2AWjb1",
  "key34": "2PRoPLvEoWNCuLj5wWZZqVEXf1FQWYqqsmCbAh7PGNeZDRSXgQxsoKFsfkrXuumxDWJUoaD6e5XNoVf8MCm29gJm",
  "key35": "2mQtCvZC95vntgKGySw6G68D63YJzkVnkYJo5L7EjC2xFMjWrsPFUSjZ9eQMYxvRKjYUBYJ5618TMo1kwnrK58rX",
  "key36": "2xDcyGK98oZBaf6u4yHXfRkWEMMpKHzjyJfvUi1pPxsVLVysX2A1JgzdU7hXQgjpXXh6ZHmAidQ2xpfLuUHBAv3y",
  "key37": "3txuFACXxJzhziE14XtgQCiLEqcHSdGmguJydPq128dqGGvy8SdqVsTjGYW4Fk4dhM1JALZkGbJx15khoEzZToRx"
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
