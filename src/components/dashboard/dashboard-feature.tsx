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
    "3wxUXBrcz6KHBcTvUHB4hYuHNw6KiPpDk2jZKZzVAYgKmaJ9P1a66cHw8rJorysojP7wRh9MonxqLce9W2vv82zC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHZupvJ8ALwDqzVoep4nMcNUTd6Ey4ZJPkHcgbb1bQfHXd6exvie3FHKJaNS4Br6S6Tfxm8niRMAuWm9pjizVYq",
  "key1": "5y5JQXWmPYgkSBsMsWKgBp9tpHFwnckLyJZSEn1VGCzXqnB6sSvqf3Tp1r1DvyJhm1qbZU4DAQzAkQpoPyfUxVB7",
  "key2": "65JVSDMoprp6NmCTunPGLzhj9SBX9G6kLmFSkahwtGGJwjauY1rXoTvwnn9e4bzHWapVfYdnD8RXPfYEwwwwcZPn",
  "key3": "32ABe2Pg4p38FdaBUaR6RFJdKzR3KshYxcSD1epUGVp2b2iByDoP2SncKRFSq3dgsGL9bUem8DJXVZYghZ1mnsMQ",
  "key4": "3DZ1AkAdqdsBuXMqxZjkSvBZ21r6XLTX4hJFPJrga6xuXV55zwLLPwPvK3kmwYj5qaWy8fowbr25DEoZF2gYaK2y",
  "key5": "5ur7Eifr5KPn2gnYEUZn4RxerF6G3a353s8joogu4Z1C78bxjv16iMX3mZMhGdzZd9XykSQtdyAHuc7VXLPEfUFZ",
  "key6": "4H74WpCe79Mvov32piwj4GYCYU8CrSJf1kqu4rVjqmcGvjB7efFodKEhFvhwVeiUGhgK5dzYXuuV36QGHehR7tJ8",
  "key7": "CkfqTNsPGhTevdjhGDCqY3k84rduKdoNgLCjF4ekBpRibH11SLYctzUvZQNJe6gwUWB2M9CyMAzkNLgtJvV5rU2",
  "key8": "3cW27SoubxGFJo7HjQrxF1tLmDZXKHhuiyHi9mdC3xYeskacGkJPdpZ7xCJ76dNw8bE38bhZDDAzFsn2LDgQ7WSN",
  "key9": "5XRm486ASHc4iDuDpbThP7Jwr5CYny7nkhr8HvpbzeBabFiaf1NDr3szp1xQreZiRKepPgmKwsgDmpid66RLmXGo",
  "key10": "5NMi5wMyYyGkjaHs9ery9SDA5nP8zHtuqT2R5Li9jC6SbrG2Uqr8un6Yxb9t8DkD2YBCMFNmFsyN6RB5pczuQJqp",
  "key11": "2Syyvb4wiRLURvexzAsUwH51vRf1xv8oVKqquk2r3hHGe4ejf9HTcJbC4bVqBCpFGGJWNBcN7Ea6A9FaqdBwKn23",
  "key12": "4VyYhkbNmKCGk5g2KXQbCPM4bVgDWqR4MWYn3xGwdoWRFn73Uyp1WZhe7UfoUxsZUJhQQSJNogF158wMTyF4BGWG",
  "key13": "2DuV4KMA2F8kXrPmTzbPBAu63M88JT6G4Xpj32ue96mqKmzNyF15kfgSNnPqSdTiZWPuqH5WG77EywcdxDBvcu1H",
  "key14": "2b8ppg5UKt9HcZoYy2PUUGvj1KsDLJW5e1YWY9phVoHDPzTe94Dn4nV3hi8rwixEFNReMtAhLrpKTycwMwydAZoj",
  "key15": "4Be2FAt53xuuvzNQEaA3yEYdiYJw4pRjGpfT8mUxqsvKBJPc5ceTnZYzNazo6vjFXCkYvcE6dJPznHduEgmfwYKz",
  "key16": "37GgwczzkaPL1qHeZuu2LCx8b43Lxr54VNspaxmUYRbPRPpUButokh2XCD3gJHVpP5ktXUgUAqGF3kVCWFaFzbaL",
  "key17": "3sDeo8Xn6k7YUBjvz9gzCXLvhecYpS8DaRvXvPUfd9zBKUeM7Nkt95w3F1RsDFAwvZxjDQD3x56WzV2AtLh7VApD",
  "key18": "577jfcefLn3CgUU2EDTKiwdTBXyzA4oqM9Xy8MRPms7d7DWHJMHzkwyW2ynKdXX3XpwhuCBEknJzFoaRfvjh5yiP",
  "key19": "52iyDiTWPxBcmrMhhK88y28SZc3GY33siYdLY41LTxJ8YmPjkjpyvmQtS2J1wgoTbNDVmJfBdxukRYSEwvagTUux",
  "key20": "2q9cGYCXcciP7vw43B6ecVn4aY6Bh9LGup2sSp6GweXBni8P9zbhorjc1yeQhSctWbFcEGBjC2n3aacAnMeQF3HM",
  "key21": "5CAy6NyVq9GR8mrtuoQMYAYkwJ1wHNw4nRmHXTcxeH9qWGNHsnsCR7E28uyhJo7Bv52Lk55DDeFscuLZbZofJzS4",
  "key22": "3W1uLAUNnCzUue36kyu2dcmkP6p69zyzWwqGDCWxAetnGKr1MH6g4uUn6hEFwxkkRNo8Pbek8tWUCwQgeqtpaxVN",
  "key23": "3kho6ssCk6dfCiU5NGWJm2gnd5CAhQFDTHWMe5TGToKiTrzZfBmSvQhkqLcYLSwTWdboDRt5gPSK6tPqsUcTwF3J",
  "key24": "2GjrkBE5YdyQqRfndxpdqmpRHTqK7BY2xBPpaKEioJr5WBFe93VjrXHrHSZDVPfX3ruj1BxpZUDBbXLYdHnJyGtn",
  "key25": "31Gi4evATJBHqDrqKJuyUbqMhxCbrLewcriLD4nhBAFQQSqg6CeWGdEP3eXspvezdJ63cXKduHCLhfYhtr36Z9Ak",
  "key26": "2tMDuD2Zh69mbtEh5fRim8vTJpSeyGHj4ENV1ZbbzS6kSNEntmZnGo1N8x4343MTFYXdZgkmHFAezUy7z5jnof95",
  "key27": "52JUwXCQhDaUaphmCZc4xKG4gkaPWXPPAFGK6mrnbE4LP9z3HitpyjFKXQiboD86w6TRszuHBjJSoiToWxoYDRUP",
  "key28": "5YR1x9NNYZxguxtQVNqFQ7wHEM4dhvSEtSkYBbBRNoiPsEo6HxorQfoxRZwet8vfSfL6nvbJA3YcNi9mqoJL4igj",
  "key29": "3qKY7p1WNw6Ee8bKR9UH3ijMLuEV9D4Vq5uhthhXvqiLup8wzi3jNWV4nTPh461ZaEvMJYAhw11Ton8VCaFD5YTb",
  "key30": "w2Q4sAKwVjtCaS52umd62A8ujorgLuyJZdnFVYzooD1o6WFUjVB3T11gQRgy153smsfrvMku1Ky6UNwXfD9cnv9",
  "key31": "5KK5fCqEZk9zPzJmRKuYNhZUm4xF6D6UtnQPsujUiCiEsopCbDAqnhVkH3z59wJ42waFwZq6x7VUBuUS4T8trT6g",
  "key32": "4zm5zf8cwrPyNyvtnvQCxeoCwnsvCvcTVmoNBuG5LEXcXjrnmzkKvHuGttVZLtpLXCcoE8dukUz21bNfrTCppPcZ",
  "key33": "2BE4e3F5ebaFCFxjyN5vAnhKZjhWvZexH9RDiEScvfM7LX31ghPhBX4GpChCAdwchE5sxi5ijjeXUW5RwJmaW2j1",
  "key34": "453xGJ17XDGSt4uHimQsBPPS7VJ4vone7rghKFLEaDuvTp6beM4oi2iJNWaVe8koJa3hpxRA8RroVwwN323rcyRr",
  "key35": "5NKAFrH4VRQxxapGEKfEmDpvnWNvziVCeAAxDZXP6iKcQvaGGCdQR4ehvTvAnEzDbxt82VjZUbiqMuEPGfmd1dPS",
  "key36": "65rNnV7u5UoXYw9xhM6RE72UjGt19Qhu1VzN76KTjn5z6yw95UtkrV4QCAUcSMqXNDF28UKoJZasQjLoM1Lde7KE",
  "key37": "63Kcx77kxBV997UfwrA3fjNKLHfu8uTibeFoRh5w4hTgZobKjMzYExtvtZHi1HYKok7UoEqos1MZBoEQSo1HCc1s",
  "key38": "5izhoSxBBXpjVGJnjnd2AZszPwdJgypRoLM1s7anxjUiyCtHvY7QUNUseTmZZFo1ECz2TrjUzSfPBEAghVfnnQRr",
  "key39": "2pjDHmu5ceLRCxW5SdUjrrg5JDdkqnqDafc1YgRD1JWrKegcTcxWgUQtyfcerPFwA1ZXQHGY7ZF15ANXMpPcuQPj",
  "key40": "4FFBEMgy4HFBmNmzE5SmvpvCiTdRRZUat67RSXvZ9pcynGFhkKzjGxiFV8BtoVHM2v3mFixKYDwFZXhzL4bHdxQv"
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
