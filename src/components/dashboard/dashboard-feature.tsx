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
    "HuYtJBb81oiVb88uYjAJ4Gw52SjdKfMZD8U33mnqWa1XFYCREGFhCjdLsmzXoCsR6voUA4XKAt6x3JDndGg6gWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4dEdqCUCVt7bsMZb82VSwQAL2yZ6dAh3zqvscpk41G2cd9HDFbZtCv85aXnqTFDAEy3CZsToRda7zKZT3Mpda6",
  "key1": "3tDXJ969JtS4zBiLzcVfrNJF5f4Fu4PaunLE9EDysFeMi6EdMn9seH6XSTLJ1YAiQKVUszY2NAjWDXwuQqQuo8bg",
  "key2": "2C753kr3vFUVKY4snJNkUsH2gFQ2v9pSZWnWpALQoNBXDQaw8CaH794kzN54E3tiJovnR5kFFtjyEF6nAp6mfTsF",
  "key3": "3EFe2qR5tvk6AtB9SDa1C9uvBWbPubUoeXbDyyQkqdG3D8UkptoAc62ZyESk5g1gEKooATfRNFfxaNJGGysUKLqm",
  "key4": "3muwcmQ7mkyxKNAMjHW7ZHHcHg7LouAXkPESdkdoQ4wMxLSXdZ6B7HK46Tozwpc2dxB6HAZKtVnWMiqCztgy5kT8",
  "key5": "4BRvxRJGDGJKgiDCDvJWhTQQi9VEdVzYdi9cDpvG6oJfw6UwtBLPsPazqsncRjAfFCMCqkR262KWb4FSUR2AV8JZ",
  "key6": "R9kZHCnsAXGYsT3xZYQAxWPzZ69281CraLekxiuJHJxDkdF3ZK9mcPVXLT7dzeDAxM4UwRFuBdXajn1ZALr1s1x",
  "key7": "G5osSDPtBmzn1Wt2k8Uy3PamxQTmFH8S5DHjHZtyEsrdQfx55JoCar1N4mXoVZVhcEW6DoQHzU25LMjFnWwQw6s",
  "key8": "5tz8nKEc9cqvgSpdgptwietp6gMUWnmA8DKa5EbKyDb92oUYbb4YdeFQ6P9LvQZDP2cgFtd8uA2avZXmJPJoMqsy",
  "key9": "VgccyG4CaHbRMSiADtBN4Q6cVbJTM8ZepNEXJUkgaW1yxGToZz58s7NmwntDZJL7xcdzpcogTSPtvVhaPVqVDhN",
  "key10": "5Kdad1V2t3GJdRK5avYVYULRNLDg6XiRHMEb8yUUr8Jq3rYnSsLC9bmptapcuzr3W6p4zpAWhfQUXyT3kavzMFeZ",
  "key11": "279z5f4FdrQq5aMvKZ7r59P8ouj9Xd2j4Ggv4X42VZLZbXi3HtVqPFPXsK71C8seBbMiqKD2tS2uL7xAwRwfumjd",
  "key12": "rYHqoHXc2xGKzooi7zehZbGTwQtBcdjFWwnrcjU3K31aJpo8Yf4fnQR1P5LQT7KaM3q7RzHrKPb1U4kSaJXWVga",
  "key13": "3CPZvo8dMhAWXMwW6dv9yRjsAqRP6ZhrNttcZyGCPVTW4mMWbZCiu1QutMCFBntMJBPgiobSRF6kNdzCGxu1iX2K",
  "key14": "U3d8VzQyXsVMDArHJ6NuKnBaeSy3G2SHgTja6kfq1AGZeMTmyDv2sDAU8ZitFuCQfp2wxLddVvrnyvHuf8Y3KKh",
  "key15": "3eyMjatY6piSzBxgQMqWyaU4AGvqG3Cdj9Hbg2S5cGcAR8Hh55LKft1AuRHYsXkkqLowDLy1Jn9CedMJSip5nehT",
  "key16": "4QSxXjUVqCmUj6CGkvMTeWCyh8fN6pqh1CHKQVqxFZKhJgrkFWNMeVq5TWAunqaCWKDHxtMNXvf7wJaFgXFVC4LV",
  "key17": "35VKCAj389JAb9jTAhNmww48bbrXsfMMFa6U9DbBy2sGUNoQ1pS6JDnr3AMF3E3bPoY2LUiFFzuT7xVsZu6818PC",
  "key18": "4QGKJ2fSMFHUhorzRSwavvsV9sUFd1Qvam4zpRsnnBCX4BtEmCseWzdUHNkAKQFTY3xGJtYCYTtbKqACeE2aX1HP",
  "key19": "4m6dMKNMqX7zhSUWhTJbAiUVbyL28qoKG41VcCVgHAdyGX6SkoFeuunUKPFhSq4XuMKNB3LCCsXx5hNk8kFD9kMC",
  "key20": "5yr9zfTYiw3QB53P9Bw8qA2RG9ePMhaJxdA6jryPcr3uVgh8zGiBoNj2ishhGKKHkxqGPvLM8kBffdBwW2vGjoBx",
  "key21": "3jQBV89GvAzWMrLWWwJPsPGs2Ba3wcHwab3umeJKMfk8vR7xKpZJqhzLLGw3kCnHyoRRzWFN4ZJcK5BY1kKZZmWm",
  "key22": "5ztL3ueGbyLJiGsAYEaZsd9ggCEmmZHuzuEA3Ex1uigPJNytKdEqkd5dDJ8aiLrv47sGfSRfyKxfhnVxcg4GWRmq",
  "key23": "422J8gohbViBoQHe2NE8vKgCsDVFuZ9ohLbXaDwqtUMiKVJa8sBAP5EPq9BoMQjqLbfEmvmHqnDBo3cPJhfodhDi",
  "key24": "64UtTNCM142MT3ho9QQGuXrW3xsRCmGnicFZRx3UYbLLQ7G5ct5D9k42WhqmpURuHv95e435pDiA4PCJD1dd9RWU",
  "key25": "3SZiun5NrFjcqwpCpDT23nFfP8NySQbxvnznBBR47DuZwXMWK7u8Z7SU2fP67c6VeiSywsAcGXtHiji3uPq2q8y7",
  "key26": "3tdY9qxpof4NutfAmzn4uw8URSmMCc9UeN9jNmizaba2sURkCUJUtWzeie5j2E56aYMsaS2kj8EvVtKNpygU1z4k",
  "key27": "5arxdUuAhc92vvjz4A3Pp3UKv3jHqeJXAxAUsxqLDngNwVKq79cb83BYuXtjfvq8HFV76No2hbT2N6LbfwwvwyiP",
  "key28": "zsfZgkBRhLZ53jjKhn6cg5CHZVJv4nYNynTubtARzUNsvgwearQqmwMB4exuCxvjwU7qe69K5knPRY6XYrtnDzU",
  "key29": "3Tuus8YxFcTuuGhEm9XGrUQ9rzpQmDDQfDsmdUHM5Cs6dEidE3XHSMm1rftTftTeEKXUi77NJ3LY4qDNfrWStcSw",
  "key30": "3FyBbw6Y6WpPdN7TSrkjA8xoxmpiipwwNRAKAYFHprp6DVQwfz7r9Ah27cn2vtxi7q3wy72SF9BXU2pJuwEYYQng",
  "key31": "4NL3z4XTvRMUogA2qTjdPyor6kVsTo7Pwg516XRvBTaSFaJ3VgbqAe382N89sSrYeGSnd5ZEbLAR9f7tPHDZo3DG",
  "key32": "5HPxmmgFZYEk9oXzxmBRArLVSsacaETfD1G2Yu8XRSzvPoBB6poWo7KivdCtaaKGFGAX3td3L9XAxP8Zb35tCDCE",
  "key33": "JAYmzxjTcm4khki3pvSYjhCeqCUj1ZYTB357iGAELDJhVgSHDyTcHwZE6XYpTCHjdTmQzs6WeQmvnzEefUewLcN",
  "key34": "4jrRM3aXK92yBPcpNaorBUfhCee3tQGoVuqYw4LgJYCcZtpfpkrc33NHTiT3epJq7UZex1BQjvuMTm9TUmrrBVqQ",
  "key35": "5185e3T1EKWP7zrUBk8TCigKoKARSQwAd6htuGNgS1BLy7SoUv1M4hUbV5kfSwYm6gchcb7iQKEvTWFETBdGPjxE",
  "key36": "52W8VKEHN9hgwh1rf5mjgRi4VxZVvGMHUscLhNnbuHCLqJTtN776amqiQDNcQ13ucdeZdSYNA6M26AFfyvSX95vg",
  "key37": "27LHe3PPagwSH6tcfgCEkeVVaHnomcrJrCJ41vHP1zviWMCcPJxogxtWEZ88XfNNBxgtnApaMBUaJsooQKYQ3Xu8",
  "key38": "2UisynUQ3Q3YNVgqZ6yCv71AnM4sY7Jd3KajfvmMaWLawdketZ7zsdYPJSFkMtyb6oT1WVJD1z6Z5SMVnJ9x3atC",
  "key39": "4nqzMHUsHNXjDJUzDRLJCgrUTdhEuz1j78LjmMV6qzpbdvMAeAQwzEhgU1KgTfcvitHX1caVNChNEiS6N9zmgjLn",
  "key40": "5jLQV7C1rNdDL9iGtNkx3JyiWpbADZJKtvFkB5KFWFCgNrsQCndhQhYyqXHKyW7WQxp9PTKoNphjpiRCBbF4Y4YP",
  "key41": "5X3aqBRka7ZNvQiDqoqHxhQN7e9Wyu3zsXum3bSPdNLiZrk8K3ZHY7bY9nvbUf6MGdLoYWhfFqwdmjb9cEJEYA9n",
  "key42": "aG7QhKPia3eker8PYwmCkcs3jcFSY8pveWcULsHrELaz6Qk2zamBrNLUX5wVnbsYvZTEECowpDWwhf9vfyZwY1J",
  "key43": "41aUE1syrbWpdvVMkLNMYtpceVU4G9KW5v8K5geNEBVw4UpUx19Cdc752M44GWeQL5oDnoynTfChqUcbGLGgjNvW",
  "key44": "321FmckGdKJutNm6sXV9SH5Lc7FhnC3sacDpqBWLTytZU3y7bhGWnjGfVVTY3dSWyb6jPvAjViV94hXFL6BNXj8M",
  "key45": "3ERoJ3ppz2KYP21R53xVDQp2s6z5Rcu4rANpDWqa4rDkB5HX4aGPxHwk6BHbvASAyDwxNCXYHo9f92GfZth8o7ZQ"
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
