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
    "2ZYvkf9FtbUQsGrGyMEihwvrVaJYEiQ56YiB5BGoc5ESX13BodwLn3xahgjFydub6g1FeAvQ6gM85ABr8mQbTVfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzaxjJNWam1ogQcb4ATed39LwnTnWvmghcsXi2zBKQMzW6KXg9YuTfUgtVHSiMnNESXqM83Zoj1CqXk9zMjaxt6",
  "key1": "4B2h1pgkV1xVMvuNVUeirS2kzaFHefGEhCi9WFTvgdyit6WLRJwmC67NvBxMPeALk9wXptcvkMcr7yFzsqfbjTyS",
  "key2": "JXFMHeRo1REgiPvshZjLYCd9a51ZueTEHQ6Qeu1UEfbMsSCNPRjmWa8inKrmcx9aexezG6PfnTNhPT7QevmSz7F",
  "key3": "4fJc2orcp3N2rqqaV8pZz38g9oY11eX5YXqUhvYsJQKSuq8jXBndVuEfcopSB9wLfReWhsc7ZNMeL5shJMEx22gB",
  "key4": "iDtwWc7j9Z9PqPKwzETHtjzo5S8EewoNjnSvfxRCPVpRTHXCjsvFsskPV6afQy6SppTxXGqFFB3heSCHJfG9Luh",
  "key5": "2VpRH9LWzyZRcHamzSQeGAp7PWsmjvZdExeJmGtQGXv8TnzBXuUrMpYwNoKW48kURgZLG2VYxztW9xjcJjfxEnf9",
  "key6": "3CscYaZndM8LCTgMJHVG5B2MQw5GPjNbBpSTbnJhRtDj1bBpaaMJS93QTDVmJeB9URmDX2xJyv5sVMHv4cFMEkfr",
  "key7": "2xiK78syjpfxrMaZZ7Xj6gnJbKuf8ThgDxx9LYD6Yt2cQiztiEcLX2nSMpNGVPY6RgCBhuc9LVuJNGJTCcTJBtX9",
  "key8": "3jtHCYrpmKTmhNBJkb4Rk6HyiUerhfNcCDw9ANkq1AQvC4SGdvtGknYrqdHi3xx6qMHBZgx4N1j9Znh2UYyELazH",
  "key9": "4L3RDr3dZ9sDuAJwfxtEfzfnWf9T4pbF8TZ36DtmGZ7t3EZvWFKx2KWKrjtxfEWJ17sdb57Z2QGxawFtDRhGqerN",
  "key10": "4uJ7L6LN6RPyrBVvYRfCh5NQQ2rwVd2btDzoi13r48srqtx6WMLSXNcpDGa9jGwTrwLoi9MasCXbeWRjsKcn21Nf",
  "key11": "2TPgsZuT11BQdFWc99p4Mds9rCb4wLq5Vr86KuPcxruSUF5391SaVcLdb61d96CgGhaqm1k4xjXjPdXMmfk8jhQc",
  "key12": "2zGG4PT6WXAraGCi2LPRMZCbh3Z1DndSCxjw66vssSFCvjPAyL4dSaTxwvMRNzaZpZCK8vAxQmfb4KpohEiMshf5",
  "key13": "H9Mr6BnTB4izKtPmg2nQmP99qEajAjrQLJLoN95AWYC87uU23d5McxAAjjyua6iz2PkBe5wfBLHzkPR5AGBVM2w",
  "key14": "5YnRp2FY6fD7qw9DhpLgRWND45pvBjGd9vBuCGQqbU7houPAxhwED4g8BRAqNLDgoXQo7tfXMeC4KWjBJFQPzrf4",
  "key15": "4CeFDgxW9ZWTDT62X2Dca5D4j6sVVW61Rjo2YgqqBbe5QqYAgbLrFEPznoUWiQh8GGQtaxeALTytfHZXJ3Q71tqu",
  "key16": "32C1Sz2oKYtw5qRCXAGcQNY613JrVdEFUpRV5FqGKy5r1NfSv6gzvHJguBTWBN2vnpT6mxZw1YcziFZJzuUQAi4q",
  "key17": "3CXHurGSzgDKrLgY2d2JBg9hmQhT4kyKjY6PELEASBUzmVjqn3nRpMaR3GdGKWgbWMiiA3gsmgJe48j6GgWQVaMB",
  "key18": "3XDsiS3R8UuhgKB5rAziVU9wQzxrLoJgzRpJL9edf34ZAKG2UtBQQcB65TtP1TcHUoMkzEpxJbojFxu1s22xnF9Z",
  "key19": "5ZWHryGQ3BDVcguGjUqBmmZ4aV3qucK1KVu7bRGs6pvFB64YjVzQf4RaNzrQrL4K4wsUVT7CRKRabj7Jz2p2QK1H",
  "key20": "5BYjdxXEcRawvzwJkiQSh1R1rfUH6NQ84uxzgK9vGdNhUUfwPBqhfZY4TLqiZDJmWPiAnfovB1LJUVCk847LJud9",
  "key21": "M7WNLpPkBrf65mZfhqjpw2p3oiVpu7i2iJVFgj868hmw6Xevj6XLAdk3b43UF9w6adWKBx8XkToHxREFvGyoSnR",
  "key22": "52bDdBKbuap1isCZQBmM7PmjUhS1UKtvit646h8stcU3Ascb4tTjks1uUTrwnCPTkjuF8GV4brSz9Uz31zLsWUbT",
  "key23": "39agEM2s6FnsfJoSbTAozkAuqBbGLitbWWQ2eeLB7XFRebKNs4bcBpqRhdgsS387DVQTaWHDdxtM7qHCmfRFAS2R",
  "key24": "3bJWBpqFqDxtQi1tZvJpuyPsZA286H6HJCfRuyxBnLdnXB65ne7trece58tgh916DbYUVtVcWTegUVFx2dGFazHF",
  "key25": "3jm4FG3TJAdNotT3Vg2b6YpKEpmvxZKb5xd8TwGTXUaAMQho3r6QKjeGVWE2s9ALrSbcCh8EWQZMTwzNKKsh5Qj4",
  "key26": "Kuu23RxiXT3JCjLCu5KD3GGT4sbi2xWn1nKyWTWY7rrutWCLTFbb4BFXPLKmnsVKRPBDvt4wumwsPBrkTW1nFqC",
  "key27": "4uVr6dRrfKFZUBu4iMfHsLwiQLK4voNBepK2hyAiVDePCwfXjdD74CPbRSTDiqK4VX1T2jRPZ2UK4RVYasyzo9Zk",
  "key28": "22VecjUkbzpqNw3Pzry8i6qAnB4ifTduinYC5GAppQFu7B9haB7Zjw46F3w5RuLbZvCZEgdT3fauFQxReFCELMYL",
  "key29": "2nBooczWitP7Kmd2L21jp6iKJRmerhHbLvMnQNJeJcKKFzkbdAj2E6KbgwwPV3SibZyVTF7nqihBVBp2ytMNhTfg",
  "key30": "4u4X98vhw1jJS8Jfbw2GB8NS9LwCc6WBrkP4T6qXhimQLG1RN1rN5QWtsB9Ne8DEKzL28VKeE1CVQY7v5ETAPRA2"
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
