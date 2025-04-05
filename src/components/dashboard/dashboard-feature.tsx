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
    "9gw6KxEzo28UTqMcVfeSVJZVTpzvcUwc1Mm3JT8zCrY2Taw4oCgUw3ZRUqHs84jviTY6WHERakZNVWTr9yiccgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4AVkPTB6tqb2rCUQvHwRhW4MLekXN7Vou1dkMPsReHhkDtTcLmkb5KznvuUTqVFxSnZyour6XnbkXFH1XcWRUi",
  "key1": "5fbxWn6igzKB32n6tQnbttKPv1ZLdZSSQyWAN5pdZsiTSJB9XjzkZbvLv171NPt5VtFwSQC3CJwgJPkQmjmQEV1x",
  "key2": "Vc7zhnfpHg2XvBvtY1JsLnDDzLrb2YcVFVtZpF8bsePgsRWHfnFkguTzpursYrpnn9iNiU2aRcayc4vFb7TLEDA",
  "key3": "5W678Q6GJGB3sYD6DQ5KRbGRSRzKwrZzsug118cq3F598LNQtMgrRxjHS5CsptSLd3cNhrwXbVnBk7nW5yVhJZc9",
  "key4": "5abNXtUWY5jhtyyhqY9amtuyBExYqnLg9en9GtiNNRaUiC48FBd2QhM9CkRAvBuzCwZjLKaRvBoat2d7zQeSA488",
  "key5": "2fxSU34ys2aTVfAZ2UGXc4BFi8rgVCpDWcxbMKuBNSUYEernAztcGxp7VthH5MfjMyRA4JEkRNy9Vh3UkZ8TGqbG",
  "key6": "4it8yV1gwBGm9HNMMuRufeKGisedATWpNQYcHAMU87cnJhHok4NEHmz7PPqsSe2GUv5DnQBsGKnHwJcXBfz5zmHg",
  "key7": "2KgHWwNotH3mrQ15kVsWqdZnRBSox4uhRYZPmz1e3xqkzdizcurToCUgho8ec2g1HppQAkCWTurmT1bxRzeUzNcT",
  "key8": "2Y45ZTPeLK8h4fyKaTuhnGFaGb7p6vhdzDmAJiw6UNLoFqmym6huVBLzoqJ4tHpSbX635RKGwVBokHxq7LR2CTPF",
  "key9": "2AqKrrdNTLcLWdhM33E2577zBh7HM2FWBLkz44ULnHuRbTEmefqKF9z2S6qnYsmefguUrKrRiNN9UWQzESeS9DA9",
  "key10": "4ZBBGWQHdxqdNsRfrsczYq65ecp2SJLWNnsYMHPWX9t4rJywJ5Yu8AfsubvbtuvATScGxRguUQtgFbeDSbVFrFUd",
  "key11": "iTDCts1uegzzLSbrBGmGHcGAtC2r9QE1aHjamG6cpmre7yneSrEKhXf3g69yKTVyW4wJgUF44AFLK6JzoUPDRxH",
  "key12": "4XYfdGzuqbXqsS9wgcaML9f1ym4T2wipj4C3sXbyipbSsXfjms6MFZfJiCa2QfHwKt4kJAZWbC8hVBD3R3oKop4n",
  "key13": "54rBxS5xogTKNiEKEBzv9iT1wjfr5yE3cbchvKRob3Fquno1iwsgeRZwGJKPLgcUova2iFgbev9Hdwcirgx2wxSe",
  "key14": "WpDd4FtqY3rXNiv5DseV3vh7totMdE1KVm5bfyX7wUUjWE2G7KKMTKfkuwYxQ1pJjv1ivcZT3CjyrwcN9o5bAZp",
  "key15": "61D888AbQWhDLYn1fXhurBKw3pJsWCNmwWJW6X7VYeBttS7Xcpo7uxFihAHxFMc9tP572eBNEkC7Cj14Ay2NBXGE",
  "key16": "61UTHpbJzkja5ENFZaJBdLu3fv4B9unyigDESauCD1MKN3exxwDwE5Q3BME7J7ttsJQ2457QLEUyXd3xe7u6yc6z",
  "key17": "2jKVBpU8APYysUc2Aj7WzAnxvqVYGWhX9SxGJSCzJvo3yF9bZWZBAp4oXkLyZKycVX1nKG2YQdXrTsHrxusXY8q1",
  "key18": "27joFENDthbmrU1t2Sb9CT2js7gXicKoLzcCJuWiKdzaiX9Wd5V3rrBddsoFBQAwdKe1Z6ksXaUZiKNRkZRktmyN",
  "key19": "3vqhK327vciMnnj6KzpanhPKAU5jvf1wmLtRy14GtxrtSDbYWnvDukMg73mR5puoct2cEWutDdzjJ7hAvEZzdZHD",
  "key20": "4fmD9do3aAsuZqx2qL2XAAEEnTUQwoZarpb5feChqW1aqy38hW6PUhDr6qkSCCbYvjw2UbzGoh4yWwAMAziANVF2",
  "key21": "2LuAW1ZnJRbJdpS6A8H1BwMvpfVfi9vH2tydJTuoeM61TVAqmp3LHGgR9cWJggYiQj8KmY2wKJFATMgdqA9jtN5d",
  "key22": "4KBjKYHQxH5tjp6fuWYXXxZJM3fjz5KMAySyceBBQtGtpojQVe846qf1MRMqFY8M6EmdGZBLi9QXsWmsmMM6i34L",
  "key23": "37JmCH5eomyDEUQr5Zu2BVEw39kNWSfxQTfNid7gQraVb37G9YDXe8XKFJnbW8hPd9L1APXSyVvKFTARkWmzz7gF",
  "key24": "WMmY8hb8LP97snS4uAtKVB32x28FNoC6fFVgJyCagNAafxjMjUwvtqCXbMduLLD2uwy74NukjhdBWUZZG6zhxga",
  "key25": "561DsJs815GfAEKzXBbmgt33wLymeE8qadKcur1KxPFaBh23oK3tBUku6vjPGudQA8drTkJ7PZ4Q517jnAadfvYQ",
  "key26": "2fjhJApzXCbMv6zQ1SKQmvkai6nmiu1aA1Ger6vsCCoAvhwRzXcsMA1RR6Tox547rngK7mERpCrfB7hPh3WdjdGy",
  "key27": "3W4CZneLznpw5fcKATppdK8oMC74kxHqbxosrCsjvhcQRQbvniVKB8g5nb4MzY1mPczTz3KrZzAPk2ArBAunonbL",
  "key28": "2bLwuZ7WZVZANTK6UUcP3tsraTfxdQGLNzktsHhthQgiehRRsHrUPDzFJmTqZCUctaXDZnkdQm1vyYwLcJQZkBDK",
  "key29": "2nPLDwZNf5pR4DXKEncmp5dVEVikE92WkW5CarGyiYSgDHrMK1bVS6iYLLd1XPvNeMbWV77cdsPxGFgMaQcM3w2h",
  "key30": "4nFaUTHSJNeXZNdGV1XPa2T32vKsjVbCiDGuDDkk5UZLFruqCKGKUnX3AZ1CdcZEGL7sHup4D4wNp9GyXJtSGQfM",
  "key31": "55ATCfeXigwh6gaJsD1Rg9tGw2iVBww7NLA2giQM4jQUU7E6VKVHHpV5wiR2V6jQfa5cTP8JvnJKeguW3WAEqLNG",
  "key32": "MzRwQmQh9WoYdWtfVY7tmGuiLgiDaA1ZZJvzezuSoWgxssk8yH3qbAwu37CBeLUUUptUwzAehVgAz5izs6zHKcW",
  "key33": "4Qgq7jSPJYhAbzabk7v5bNapoTMJM9CDZFuRKTqX2FoZfVpkpD2gK2TZHHoRttB4biXSVrqDq8kFJQbFiXiYRxw6",
  "key34": "2zGcr2e8QkocvmnUSWDixhPxB6x1gRMxE4xqm4XkoPiZRfHWcYyJmxZbdrvtnLi4VRPUHYkkKpodfP9ryRJaEK4e",
  "key35": "2icREpVJhaMXpWsgGnWqeg15BNKJiMZUy3UALkAdW8BUzYCYCryvcsukVoQJ3yDZXqReUWGjop1S4edMcjqrg2qX",
  "key36": "4ivdiR8u5XD2So7BFmukZ26HuS1GkeTGPUXKrTP7esFhqps6ydUW162SW7z5vQz5tWPzYTLB6jPwp9NRVveiNf3n",
  "key37": "3mEPXmK82NZK2SM1buAMvSo58Q7Di8CP5p5ueynXgn8JF1BnCJ472wpzqBP71ZyKBJJo835Xewo4BnweNuJ1jbgQ",
  "key38": "5VCFziatKkN4GKtAxFNpVzB7NeVybmpuUJYtUZcMSHbxUuMHpSBdoZHi2L1oqtrGLek49AfjdhZYzVLRn8LZU6VV",
  "key39": "31mWVxK1YVqwLLrP8rGj3WLBJaRgeD3sVW4idqoW52UsAfTCfEiYTb6ZHq1HByvGHpaMMvtNrxpRbk3m8yWwQ2pW",
  "key40": "5iVPsHj9bLPT97DjuiiBQx6vNKKjNyCem9NmPUkZfJqGnTkEBD4i77cPi8itqw9X81Rbdx5AsePn3xKbLBYbuQX5",
  "key41": "5pnZAH6aSyDAtbzxhnMwAZNjf4bRBrRhAEmK7o2EkZHSkUNjNcWaS2nxM2SDHZ8mqjAVv8gSru32FoPHiVp7ZuQH",
  "key42": "4fN57vcf7xi1vzsqN8BTNb2DCjwB55phbh3jvw2RTxEe4FoxAsWDmgx8KaNexNbwpKUdyjS6Kyw9XDCs8rHCkPpk"
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
