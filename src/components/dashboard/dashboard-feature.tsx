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
    "2D3mYamTotNk7Ec6zidcKCo8e1QKVd9ZvGo5MEx1gLYPtWTNANPBpVgr8oCZ5F8s4nsCJmKg7udyx1L91zo6gBVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y34acqYwGSR7Ligfy48JL5YKmb9FzzAD7TvPF4GtBGh2Zem4dhjJMXEaba4NPJT1z8rKe6KbCcWdFnXHaCrCj3m",
  "key1": "2xZgdMYthH95ppzvdrEFNuxV8ihaJCCtZ9M5jZXTx5Em7rpMiZ99cijK3qy3Jc6QwtPpeWbrnvpJKgTJ9if5n5mk",
  "key2": "5dFqmZzPWzruaCU4ThyvqffJLuyLcgna2tL8HEXiPRUGrH1anihYqUmpqXFrA4jPVoNGvmAG6Jo1sUqhZqaezxPg",
  "key3": "5eHmMA6DKRUeE6gfFNKMJLiFqfEqN9QhDbxFhT1T6w31q6uUhv5cpKrRfKq6PzpUZ8fQujrfiL9L8dchg8QXNt7M",
  "key4": "5zF7AUpS1JgXdUctXnGQVV5TeZmdGVVGi17nM2vM8LPoev724xLAxA68PPcZHmr3FDL9bSP4eeZMoVWS59aQhbhR",
  "key5": "4a8kh18VgqLXnmH6wkyKjSTuJp4nyauiEaXy166bQeBXYfDFZYQ2XMvEEfEhAeoYCb2R39vEhmwYep6PEknNeqK2",
  "key6": "3msBfCYmcQvSyzCziRXpuTzFdk82dCDb8YiFkzn5MC4URfFzRx8aDJ4yQauodk52Ut6t31ghqtqLrJdBzKQMQJUM",
  "key7": "2BmX6gTJCnnZJLMBXKufhRJzMSE4iApL9T4Z5m5jLbYiuqGTkYg3gffZDB5SC4TVuuvjKzSmm9ofrJHg69iQaeSE",
  "key8": "XnoVscsbTEqSSbztkzsBPz2dJk7XqVpSbuAtWDMbYy11JpEyao26SPRmPmnPiYW7c96RFjAfM3YjdMuW51ULX4h",
  "key9": "ZKMaSTYjbp6oNDAw11rKQyTzfhmLKFLP3Bm4VEkZXYPn6sYaR5ebJNkpTFz1nXAkSsELPStRDuMKcQo1g8Fz8Xw",
  "key10": "3CRDkG3g8UFnRkubmhDP3TjRwKuJ4LBBEpVmRqxMhsmWe2DPe5njb29xYAUoEbAUipcBDaVVagjDgk6DoCXSjh6V",
  "key11": "5aMBCLazgVPXNbChCrTnkMPuPaZ8iaHxEeb75j9Cuso2acGCEsAgYX8wYSDaPQyegaKQS5XnStXX63ayL4YURgY8",
  "key12": "2mWRGxZUtsZsEYBfgw83weEyZ2pgLwNVhHbumDSRvWoTAuCA8JoG3LYCMLnicNxEZSEa3eGodyetFAefRLZpxxYT",
  "key13": "5PXpLgfPEwL7iad8kVHyvkWRkPm8j1wXxhBq4mgDNau4gNh3xoiBNNdWwMckKT24BsJvJXcV9umb5TNoQBHikzwb",
  "key14": "2LW42sYdEt8xUNziYNuFeRpMz3WEzGPop8DUtemudY5Votwuxntmrwxch2tr9hzYtGYdNuxkKya9Lg9sboXaZnbo",
  "key15": "3XhHN85YPhZLbMZuyHPTVpueGgzhJAUNprzMEXPrz38Ma7puJV6vDdb5juox1dTQ4JXRbRMTEawVDJbEa9Lgvcjn",
  "key16": "5syL1xjSCTmELRYznXaUeetrrmcegsdY6pN4b3H9Dx596mKr8rWyr5MuWqKPHQjZFjUkckWfRFVGywt7LKFji93K",
  "key17": "WVaAdcysgNfVZZGYuoQznzYpGXsFb43r57ABcbd854RKB8DU8qrDt9jNDJEaFxSzXp9ZQqsa34XpQfj74j7QSnZ",
  "key18": "32UVCyWG5cJC2dqeogp2zJFXAnvPn1nZeSf5EaangDgdqMTbiW891g6GFbMG8Sp5HGjxtjuxX4NADz52x29cngfA",
  "key19": "2S1Y77Tgodn6W7eHTTfCbAzQmW1rRuWHNWLCcz5tcGY6en54Sgm5FtzmVxJKoncH9cTBFJ6KAijErKWNHkeMTaZX",
  "key20": "4KBz4dPZxsj1zxm1BK9SbB85GQzZNJRRkx9qjUXbpSasSEAsqVBhaKCkKtUNSQmbb5t41imEZQwQdYVS9oxGpWP3",
  "key21": "496njLdegyFxtiYZk1oSqKkdx4CFf39DjZfqxRcjyyXB1DEqkxAB8S72rLab1Y4W93do2TD9ctBioyMKWHrYRsZu",
  "key22": "3TYYTKWLep6MyEGaAJPz2VjmemfbR7aCMraVov5rdh27LcB9jszoBbmttfJDY9MWSmSFwZyS9XQ2cpPpTjFyJvC8",
  "key23": "5L1QSxRAJwfXKgF3ZaYvmVwFuzwgxLRxrHNUgxmKypH17urfX44ZmsMKmRB7UaH1wChzafd9jPs3dGwp98hDsCg9",
  "key24": "zDLu2HGKwqsHjg5cnHYfLShQsAPkK3qQM5ArYNDDTHBYNoggB87weL2k1pUKny1hP68h5MiVQuPvE6z7uV3uS79",
  "key25": "393xnDhGkXBKSsJwhEjw8dWv2dJ1Kv53F4iTPR1dKK3B3AcoqiJo9ioEg7vqJbkb91cdpdhazik9WurmmKEWqotX",
  "key26": "3iVWihBwEErsyCt1ptD76qtP7V5si5jydD1LeLyRdMBbUnN7vdGMPn6SyEyfbXdbMSaxtAivyjH4j6Rppf8FyrHY",
  "key27": "5TQH2cbnQ2yPiFWi2PoFizGuupxaZmHRPSBS2MEcDXRtxNwvdehs1LCBfxQEFjzEFSJV4bjZ5xnzniegrGBoEjvE",
  "key28": "4xEMxrninWZ5rnnMzx2uBq9W3R1RQWmKF1L53M7YHngCrYsKeKtN5VekkWxHRjoRVSzNF8pN44dZLHWHeUvJ2qGk",
  "key29": "4ZL6LXfvUAkwHWcBWGTze2CXg72iA6TaB6vkBTwAHHbnQwM2XqaJ3Z6KnGA4JhLciNGVajZiaCyvBp8MGVpA8zf1",
  "key30": "2jJjEFwsK86xkoWW88m2uAYVJLDqHSoacywzHUT4yLa8L3Mp2GhHWy8bMXd93MVw5dVZso8VKhLfuUZ9Fmt5mfCT",
  "key31": "27aeaG7iiK5U7L9YqZfijkr7r8gMPN6z97ENggC8akw2CdBAwnWMCMGhoWiJ9Cc4fi7XhypkuBhNDBm4VZZto6er",
  "key32": "56fLgfJY37WeZxWPEhB6i1MfG4jbrsi6Hq6iYsUiHp7PE25iGaNwQFzKijSzKsXdLgPypakXi4ASZoqE4GxKkjXg",
  "key33": "241JZmmx5ofaYjYATSK9houtBzquFFMWKjJPTXwuLfhm395W5kZthLBx7KCiLUquR2NueUJo4a5XMkeQ3yPnXwLB",
  "key34": "QzuZ6eGZccgBx5TgXLsnMSR48ujGPe8jjQQ6K8GrDM1gACG56Z7Rg5gnByzqBfTLW1chEwpdABzn4BYk3C7ExBS",
  "key35": "NmAvcpnNTwKwK1mUkA1MTCS5JpggbXr6v35Ued3Ax3rngJG3aZKxqXVSJAjw9yy5QTMudsdevfStwdaRQt3yJit",
  "key36": "2Hw8wv4jNdQ1rT4svPsFXis3WwYWEpMvMA3FuoBCc3aojhUUnBipea7NMBT77YLmK4wTpGQBudPrL1u4imgbBLSD",
  "key37": "63DoGv9Kw9vxn6j6iHXTz8MUCwYAwkrpsbajkuaJ3pAqusyH658yXZg3qagT1kxgDuXp9oQLyyrp1VU6RAxL9oqr",
  "key38": "5aDAUBzyqpUdekqVqZD19pCbvTgpzchh6EkgWqENrgxGmjZpqXjgRqQwhGX8bx55XaRrinWU5H2VdF8cPa1br4pM",
  "key39": "4kDANuTwcNTFxTRMY76EEg3xs3Cyntnkit3wX74vX5Lu2J4CCUdehM9nGceYRKHW8VTHrKUk82SeDL3AT1x7kQrd",
  "key40": "yxwwBKshPWNemQPxbdqFZjWNvtdDrkepWtZitETiS6GhVrP2BxfyLR2ARcWk9qsVVZBi4swJmh3yKPRf1WCncnN",
  "key41": "3gtjyf1mLnG1i8UQV9bZo6hc6jdeAaoWksKa3ZkZyDYRXJXbcrQ2CpZDJ7Rk6hruLZm2j8bayVvakZ1SyZM39Pay",
  "key42": "qaQWrAA81UCeH89afmfr1Ndoo89AEi4kf4BtS24co316UBnEDm4RWwMnCYEp1kbzJNXhkqUEpgMRB1eDr1cmLwm",
  "key43": "4sPvvc1nEvY1rHHuTQarggvymH6hpj85EobmTpWj2cAX8BqijHwwh6bVb8ig3qeLnJGFfBTiNKJVxsoauTxcNRXU",
  "key44": "ybxNmDLpDxSgGKUjXu5rLAySx7Z8TMbdr3hLH7kEneVbbfHFbhjh1XdSEy1xEDbHTcvndMLqpoz6Ee7E6vUyTqK",
  "key45": "3yEmcse1H1jtcn8gxcoEzCHSbKFLQNUxWU5XH8HeCKsAXnNJBoffLN1stN5VkhGZzKwAkyL5fXyCGeCQ62cPwE6Z"
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
