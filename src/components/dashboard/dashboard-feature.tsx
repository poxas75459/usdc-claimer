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
    "5L1gnt1Fafk9xYmmwJx62FzLn3BAVvEffAVaooQuX5JdYTKdyfqmtya8GKeFAQTTyJhh2VmJBtfSM4CT2JKAHZQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mi5axyrqEWpWEypnQ7VSGGHnnsBg3wLXAN4Geg4wmQyZBuZK19jbS4oP3xWD8coVinxPUw5SCReghtriU3pNooo",
  "key1": "4z3xZQktV1yL4zjK77hdKub4RrrdNDdR6YL1PTeSFnTDgPggYhwimUmPM8dSDjcpXFPxX6Jv3QDJNUSRSR1S216v",
  "key2": "SHyiC8KQDysxB1yBTQsGxRTZWGdKPZF7XRRr1jKsjfo4sbsDPie7RdqwNJk2rRjhee9FqLr7JGACqPDUKJzJHi6",
  "key3": "5iA2N8CtSofwHQnYXP6nkodp7izEXJwqGkh9mbgx4HQnNqfyU1aQey2PVTWqMSZBNKrRttZ3BN6xhPL926dh5d8y",
  "key4": "hvUtD1WGJj1FQXQhheWXrpkgzxv3th8tiwFY9DTi46GhUjVRUGJpV6KHoziv4FdvQYGxQviULDvW8ozmZjwv4Pf",
  "key5": "1vXkoTobZHhKMJxTkmaKYGRXJTBWH5fPV7P53cweaPujLJgotvNRHeTxspZXt2kZXiepo3Tydo47WnZULyMCp6C",
  "key6": "YkzyAc7bpZFNPbSuGiPt5sfDHvoYznTaGZztgTVAbU72VPQfqUPNcsNi6Y9LGU2f8RdfouoReHzjkMsx8AdGa5h",
  "key7": "5zDmqw9YHR9Mhv9tbwmntjEm19zjAUjU9dpQEuDVc2dK2PnuHPfcgewVxvy6DrWoWinPdXrwKrBcPwQnG76PZyvJ",
  "key8": "y3nJLXxC76euW76ZrRk2ZQ548xg7esW5fUJx8WLdq2ovzE5b29UJV1p4bPM8hUQqHtb4GSWo3KZLwQiZFdnTYSw",
  "key9": "3N6dGJLWxbZqvaBpLGErHhjPexAShgNdCWtJvwih1pEm15mNeYF7HDsn5hZmQNMWkaugUSCSKxCRQThiQP6MBtzf",
  "key10": "3CmVJe6bGjW9cWq1N8GPVkWX8F91VVzNLwH4ZB1ifFZAUhWggheD1Lq165VJjT9PWcnV8FZvu7ZTP2VC9GAqbmaA",
  "key11": "4qTadyjAbPioBGz7vX51tQt5HzKyBWdqRgdBpMUfaDKmRrPGyXXMnsLrBgjwFwpXXXxqX4eEi9CGVfjp7SsQxcNB",
  "key12": "2eFtXFQRZsjeEbVJ2u8QMWKcfJ2r71i2NcaRXCKt4MKJWk5DgUBcFKBtt5ftax76dygshSoUzFJsPXWzLum9mXFU",
  "key13": "3jguSxeaMYiHk7cyRzr5AdW7wdyAuSVobtbm3ZKu37caqMxS3vSdCXUspP4omCTYgFd8WZB5ttd6ZuvkLwRPQgvU",
  "key14": "SjWsQYDvVdoQCEdWZurFNf4q2Q8DzE79423YcTLd9cYthX8dzC2Ejr7Z6fi78SVXUrhifeHVQGa5rJNS6ybMjja",
  "key15": "37MxGKBMcgEsEx6yjpP1zFFJfXabNXxjE5Pcwu7Xf717Ecw4Sq45qih22w2z794hMt6nAHouVrZ16XWVJPCbgWfN",
  "key16": "53wRWAo39i3NbXhFzkfvAjstH7squD2AJ3TBhhXtZMvMWtZVJ8f5pctJauU55sEz1KYaBNEBSJ9REBXjcCKPAZWR",
  "key17": "Q1auBVu97SKrfQEUM1MEbHLXyJd1ee4zcsjfAYohbhTiX6qXc39poxXcaNKJRu5BfhBQ6kpTkGFJKimKaEZi67Y",
  "key18": "mR56x3eCu8MRNLEABA8YoD6VHriPsJ74TPvbnUDkGjX2Fbm1yjhFsX9NGixr2mqe3kXR18NpBY1Jmm9xFvHGLBp",
  "key19": "43bxE8tH6KDLHBJfmEg2Fjnvx7tGDgeH2CpJcGZqYQLTyvxhA72yijAuuwGhAbyXXv49GA7FQy3zJfP6Ge9AbhwR",
  "key20": "588zsxLE6cPgkq5vVnbbo8gE3kudDr6fydWzKNFDzxRMKCwq3gyBZcdGLpzwLWpwAXBe2sZc56o7LYPGNBRRRmhn",
  "key21": "32mkU1tNBgg4dQ61mPPGepbcsvSPAsLdmTa586fEp9Pa9ujAsFmdfzAc5Cm5zXqEit2Yux9NBgB4fiNgChyXjmrC",
  "key22": "3e91SY7EUqFTVwbB3JaCoRJxdoEEFvhBwHAfaryP7WEyQsTTos3DhQvHTTuiTYyku3R9XEhkbSknAkTnDi2jz6Qe",
  "key23": "ihXr4YyqSRHbyCNpzfAGGvjMupYFTZ52Y3KkG2XVtP9qewHW1DsV1Uo9e8MviAmwmHV1fhUmYAAZUbUfcMU2iWr",
  "key24": "4fvfUSd9FXv9noCn8Js3pE1gf7RjaMS2ctUaUNZ4v5yiPcRkngPo9qXyAKUx38zgSvPoeoNsSkda6yWRdqQWEkfK",
  "key25": "2iVJEru97b4vmGept65C6dyEY8zFP4iTEiA51DW7fLMTi17ryG69TW8W81khTLGjcjo1pPhV6sBXtGy81E31eSG6",
  "key26": "4VxrbEWhMYDhfJ1t8gwW78ujKLGm6wLMmMfY9VzQb3FBQDATFW79Vd6Cmv2MFxS3rSVyFBTvgRfxzTRRZuRnonnU",
  "key27": "5YefA2PxJ4agYd9FAzqVXWMrRvUSitGtkhX4CJaxNk1JztzY3L62YhdGZmftPnAwfbt1mko7QnfJsyKBxV8z1hzr",
  "key28": "2Kct5fYdnFhSud7YiVyXqooWPG46Tj5zXuZKypUWro7UJwC4jpoQDdXaHErxr6oo1kthvMnGzGkycrhqrHGthUkB",
  "key29": "MLWwYawQq8QSmYz9ev9g5ixoY2wsyV8XxapRvfE7f7sXM3w3urj7JqSCJRXeCnBza6sjSgtP6wKadLq1QSU6Mxg",
  "key30": "26JUTEdxsFezpyVAVTV34Pqn8AkuZQUdnpTf6LegpY7zB8Y5TD5tesZfdiM4NDNoRxtXHizA6nqxreyoPt3YZgwD",
  "key31": "45hRBwqgDLD1f1gSw5XSvViCZZeTBw2a4bSGmhRojMFD3rFZE4gwpx9mCegsSKnAJKYKc1oQh8Mb4MF1Rdg5SSXe",
  "key32": "2ESqEknpTDTJBvoQ8ybuqr1pyAfQH1juktwjioGJHBFgL9zVDFhN6e5KRXyLqHdTNHoqYNMDVKytFPSuvjCL3UYm",
  "key33": "2DBF2aTFVAjFjxhkMw6XBGWR9YvoZ3XTDzbt6BbPt545A7HYUaaXskQ7mKC8eap1HaEkEjSpoJCbZWJaaTnBmrNF",
  "key34": "5wbJoXCRMVNriieSE9tHseWxjYnfw7Ue6SN89uK3kyXNTr3mHM3zivW7ERwiBnkFX5HxiY39wAmLktwA7wmb7jQr",
  "key35": "5fkVXA7syCoGSpBgvMDjkNApWhuwsFGdfUs3rSX83TyXofgtLfGQQJCsG2ibtaFgSpBHQe5jvfCtvrVSadePbJHi",
  "key36": "4bmkqv7rwyPP9bZxXC76KS7RXa9YpA2EwqtmaoM1qvwjkHgFPBbTeqZ23CRrYkgg1Qu8q1LKr6inndbPpUXMMhMH",
  "key37": "5HWADmXsXQz6VxN4f2ZjrqduSH6QsJrHeA6fr4rt72zuj9cpEzY8vmR8zxogsmGttyR8uGGfv5KTWgMzRY6qWiuW",
  "key38": "joUxwu87kGZoJYyKb971x8b13G32FxZRrF2ULcAiUNPcEFMSN6ofQDPsLby1zxvGsLMY5EUwDab8bSfT7xgRiGJ",
  "key39": "t7eN4AK6G491GAHozWDBP32QYnm34fpLkQhnPYv6wnoJRJq4CQLxasW5qAPZpqU5rGiiRzfighPxPVR2oJyKmnu",
  "key40": "3j3tkPTro5EzhXgnUMU17R27DF8Yhht8hqmbDrb7nLbsM2nHjUh7JmCfMYhNFXF3H1715JxSmV8DrAjyQRu8CPLr",
  "key41": "3fuuSMEU9bDnQzkoBBjefR5wCv3GPvu1gqsWrt5H71UKYstFXDAEBGdve2YfsqctFKUXc4Xo7aAS4kBdrEHvViRA",
  "key42": "5Ao8dYx2S7rk6KXpas79FpnpAhBYckKfBusDJGSjHmgnGWq3egFNWb3KvNcFRqcBQTanHpHmdhEK5tmqEkM4yNSV",
  "key43": "4jzbQDLud7NeNhMKeQMmVxUNXSEP8vthErh3n23KMQPsgAkYUs6eq3XP2vb961zBGJDoYErGBnExQqH8pec4Xq8o",
  "key44": "dtb3aBtC6fFFmewyR6M9VJbfyBiauwedySYwUqSbtSLK7zZwAws2ZWkGMQVfPnxqnPU2kkknXTF5iviHavCUQmA",
  "key45": "3hGV3MkRsf7jMAsQAR6zEDvDgC5P7mTTrcQxj2PbCojhQcsF6xFLqFu7Uw6fgbijeEhQX2Xz36R9v1UU9rJ9rqaB",
  "key46": "3ukc2bEnL4bzkxCvT3r5GBzHn4gEsgKSQLD9YU479ipU7QjgG47gjpkhAspUWj2o5vKAP9xxDRbPEHS5qK8KEHtw",
  "key47": "2xNCvSvq5Sz7AA1YNTVmQfbM5bYpeucQKfcnyzCqi1PGofn2wMcWnBTEsUVCSsf3Cn3tDNJuutVaAjWFrYWM2F3T"
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
