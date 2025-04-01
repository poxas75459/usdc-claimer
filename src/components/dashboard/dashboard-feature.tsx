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
    "3AutnsGNwiAweqffNwkRwmXtT2bD7cZiB4LqwksRRMkeb4TnNwPW7ZmaqAvJ8sG78K5J9RL76ErkzK9T2R3LyY7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJewBcfcBGjLnXsRriG6JFwgKrDfY7WvvXDTnCXAuLawmii7aib5WwasNFaCqhuKa74Gugjz9hg4UbKHjhRP9YA",
  "key1": "4trzRdjX93BNr8kwShi3PCCKD3F2Tsne4PgkNhAXzsZGLEDjKgdmzsRdhuBxqUot3kvPQ4uGkFHzbE8btLf5rejo",
  "key2": "2HEx6kwyoTvG43sJoSTNoZFxJpstjeKedujfT3YPpxP5pQwaz3D2EUVzCyWXY881xxvwDP63xYh1UvdqW3KG47zr",
  "key3": "4nTHQfb9qfFx5BEmCn6RQHa1yPhHSFM9aE7GXcZHSSaLyGVZmbGXcmQFvbbBVCXmoCNJamnbhmCiM3bm1aRSvNah",
  "key4": "57iCFEGfrgUUbh5ZvrpQDNRYVvcLEFxmZBpgSS55QFwJnXxxR4E1yfS65B9RQajoMQZHwRrq2hNQM5oHk5zAzXse",
  "key5": "3EQxm4YrmsgjhRaYz7P6FCBoFgA5kRj9HdPu5ApURvuyBBVXGDjExcKJr1JS2BtTVatn3MBiDZm43hcy8EBqhKep",
  "key6": "546y2QH3GXbN7mX7gnS18nkqmbtg9r4CL2BEX8LQZxdgb4V7xSxVfszCejzBGGoNsJxjwBoKKPvkhDUYZEqqm2P6",
  "key7": "4TWw6P8v51cJZUHX5TbHnfQxifWLEUasnUDzhR25SwePD2LVVnHeEz94FazJRg6EtFfEdfhomQy61T8wEBvDPigG",
  "key8": "4EaQni9RFSXnByswi37G9a9ucdBchgoyUhshUhxQKLZMRQYKFN3ucjdTkdUHvMNmAt4MPsWnWqWjdvrEwpe59otu",
  "key9": "2TsxnnpgKMByFEwZn5VMdAQRAEj3ZHmeX9bypDZTpKkJqd6azoGPVeQYVBhK4ivxyShiozrFNrKyhqCN5b2SX4UV",
  "key10": "jRbAtBb2a9GUy2qEh4eAkt6HB8tubW7PoboyheNULM3JMdHwFNHhyYUhrz5P6b8Gek1UWM9NVuxfYknXuDeuUm9",
  "key11": "3Bm857RFWzRu592Gz1zvAFutwJ7MUFsWaEtUk8CcHhafEqCGK7eqf1j2HsYvBTRXh9ZWyCJtkjrpJGKsAfWDArV9",
  "key12": "5DbSAxBhuhs2mNcaqmBjoGys6k2ssagBjLAabBmVVGSQJ4Czwr72KPbR9J4dX1rLquW8SRHnVzJ2MuQ64NCJtetb",
  "key13": "4wN7e9THQem8iyd5Js2mGJfdCbMgHwigPPxcJC2aLHRe3uDjEEDnnfPEtEcSSieXfgbppTUqidJ2HgYb21wc7rGt",
  "key14": "2c52GX1oYvMFmD26J6Z38Fb8tZWaXbRwL5t7PdjgYNYCrEFhxEB41u94z4gvdXfk3avjMGpdPa2uJg3AJaHEkWqB",
  "key15": "yR9juJB5XfUYqYKtqShbdi4CRjxvTyGwu5EdsYHKzksFgWx4ztuuUvN2cZDHm8dafbUREDBid5ZWq2u4b4hdGZu",
  "key16": "4RWnGEsyBfAK6PEdLvFMEdPPSzmBhACXDEYRcueWiGj522rPEoseFvmANYrFLn7ARCreABVUPmf2y5153z8iT4LV",
  "key17": "sJHt9oyUoHrrbmhd6DrLKVVbsJkh9sRj7741a1U7WTkFsmsnnQ4yBWMMcrVnWPwAo9kAscWBkjz8Nb139mFaeVv",
  "key18": "42Ne3HgyFyuBuLyYzREipMqKbL3PeGiCKu1GhSTAtv4RYqQWccE5SfnzNB37zTk8uEQ9ie1pttLLb1rTpzMPLeZM",
  "key19": "4FQsxpEcbNyRVeM3fPszLUrA8z9VJwC6a4aDy9kr7ktSiZKouTgZVorB5Xbw9GCsBzJYmsJ4QnMtjTSovN1c2jZr",
  "key20": "5uEwNVdVu5pQw6XUSF3cVctpSg2UPJDZsD4o5pbi32tAXGdxds9cCjVUJrqLWVNhcwuvfLiz5XP5V4kktPKam4oU",
  "key21": "aRHsETYdRG5FiLZknWiLdSgp7fJDhqs745QiW4NYj6fsCP8gWmPUf6Fo7K9epeTqW3Pmgy4D9rqkqTJ2NRvZii2",
  "key22": "4HBpWyLvwFyyiYDPLAybqQjXLZzBjAfrXDJxSx9FVeN6UgTiAv6nUUAh9M8LS7P1X5FYs3Eb34ueoz95UnVGGNc9",
  "key23": "2pkNvmRUoSMzt41NuKUkZjfKRzSmRDFdsfBB54muMKf5z89QzHYN9pNxNMFqH1DDRSfqkUrGyHBqkko5xC7u8tNt",
  "key24": "2uYxqAedaqSZ3g9SNLDyDSkvc1aiiSWbLXftBV6wiJKbhLyUThrQ7MHxYKPA6ZcFbeoTj1z8mSjwoy7RVyFTbmqt",
  "key25": "4BUd1LaBXB32AVWLoCES6biSgBvyFSad5P1sfSTULor6MtfLPkkqBSwxfZiSjmFf9VrS2knsRH3SxrXzseSLSgmy",
  "key26": "2psUeshNDq21JKpyprLY1AAvbMhknmYUXUTHmx3jf8sEAJ1vAojcZK5PbCzUvYpXfJBdMLr7ZmeTjz4nHKZ3njRr",
  "key27": "4ZCj14EQqFymK2qVPQ2dQm3ySMbANSbgPMQsVSVzLRep4AKqwPVGSgtMuiajVYHJ8pYc4H3Lg8kcemjW5MSsTGHE",
  "key28": "bdbj7cZBka4AohDj7HEKqcaD9FXWnLY6Q7wkSxXZAoSMdE3FXEUMUWQNESnHEit8AVbF1u8bDqJaoyB4kubqHZr",
  "key29": "2HeLEGKV2Fh81oMeV8ggC28k7VvUbq4b3SYe6QGVUXND2vYHRTR35gjdhmUCDepjMwZZWCQQAoSTzTQ1yRcthois",
  "key30": "4eWDZ31KoXSSF8QJSqJmbuUyy7U2XX6UibB2VvVb3kck5mkW4puuxxTRQAxek55nU7tF6oreg35zyvqps31YZQ1h",
  "key31": "NtywELAJJ6q8rcB3bDceSPz97YzwykEyUadPHPUr3aa7hLLfRuyNfJE6zy1VzicAWkSWsndpaBN3zfMDunTJDYh",
  "key32": "49H7t5C3q5B8EjY5tboBs8czWftM4M4Eha3Axd2d8CwGSiCfntEXzyMk4bWoMSG7WozXUmzdgY97VErswrvxyPjL",
  "key33": "3KY9cqHoUydhA922btE5aYkhYszxbyqVQTtDm5i7utvS9qUxCEh35vPCiYJjuHSe3UdvXN9FjcGB7bZABhvjqy52",
  "key34": "3QCtGSoit33jCgVvvt54re4jhpwQS4g5Z67VGoRpz5xRYdkBArQrxZbri41jt1VbpRSzTx8qZMwDdHYsuc7AY5c",
  "key35": "4mvy7s5HNhjerhgtVB2mDB6fBAERvahqu9AhpY58QW3ftUQE2WTV1oQYxfoBcHLBAhqtQtaKbkZT73YHz1txcQsN"
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
