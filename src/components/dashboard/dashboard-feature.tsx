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
    "3mwtpTFe85Th4LTXwarAdk65wRUBkM77Ra28QfsFH3gdY15ziU31GoYLQTuT6uT7T8ZzzNTQL8jQJxWXRgmhydyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eh1rjpizznNuZhYJmn5W3aB1aD6xQAuAPpTcp4FA5u5LtQRMXQPAWWxS8QSaoaYuc19tDsCrLsZ8CwjLxKiyv4",
  "key1": "eiJScEhA53qfgZJhtBMr6MtK4UeEjAnSHVh7cp6mSbUYiojgJXDfGCLuRwStDcvSGYAyRGWdx2LLtBrspzyy3tv",
  "key2": "4LAjZVnNXL2ZgryfF1uWGjn6tQTt3ou2vPWBxwnRGzBbn3Qd1zY2s7Y5uXZ6dgVvGL7DuhoH95Gg2LEFPTnckJpV",
  "key3": "2v5joJinvJb2pEP2jLNeGXwLAMEpMYq33kFWxTqLf1yYn9sHNx9kgaozQ7zGBHfrVCqHiTC9De4sVc5XRmHc6jvk",
  "key4": "3YUGWUEXtweqPcvGxz9GBJwELctXNUdKfMiC5rq9AjVwtyNK9iaV2TPQaT48im4qH548WAv44DCGUF359caemiKC",
  "key5": "35bzvaVyjJ1rFkvGoJzJNVymRHUxLvcUdGH8apEA9QdXHgdsDwAvQEh4XwQvWEhKp23LTbLq1fAKXsrRqRGKcq3d",
  "key6": "4ebWFGWdmWZgZMAz4ADS5VXwC6a5a48WULH69KpT6FNe6tgB3kgxn7HAE5FtiiAqQpr1RByhdx8fuRhJiCNWBVZL",
  "key7": "2jGUUohuZhkYNwh58Tt3vHTuGYdh7DAzB24TD6YBEWepmmoKpJwqVn68u6icMu3U4NNAEp8kkbQg4fkoPCUSTvYt",
  "key8": "4pijzszaio5Gv8R1CNgQnnseaaq3mvEHPdwNinmb58LWXKy2crVJSeBWsKLZZXE98s4SGBnWrXYKnG5jaP3jn76K",
  "key9": "7Z4yWZj65evdDGqZwamc77C1Gc5GnSvNUt8Sxu97yAkdd4jXYczvcMicK5JsqRWQAXNifw4eYzahLeGEBrHtt4b",
  "key10": "4B17kAv1TJygvs8uztGjG3hnGyzrHSoEyyvXkBREhuTxnLJD4FdPR7W9veQ6j3Y9RZEsKKF9RcRKHwdbkYzY3yhd",
  "key11": "5mm5pnGQUtzLJXzsxRgZhyUnTkfaknbAiMjHeoUrNp7wLEumnRSLPLQCRNxwbfgLmwvYSebP26YhYjrx8wxhYSaj",
  "key12": "2fZCSvChpuFnTPpmz6h4KRLr99uhmmFXSmZT7wLN6rdsNtw9Hq7Tm3NsSLQbAg85nqsqmRHgp2KpswL9vxjBeLZF",
  "key13": "4voDm787fPM5qBKzFkmkZ8Dc6JZXnuwKVBa2UhrKJoJor6BgfjRJAcpBePW2wwTmz99KmF5EopETFk9B6kgVxDCQ",
  "key14": "5uHmFhV9TtWFMLZvJ3tK3EF8RczvuU6f6WPmMP6YxNebDKnUxk2xWKmWEh75KESfbjjgNww6JJLWZmHAvVWz22QB",
  "key15": "2fg8uWDunkXuey6cErf9Lr2HVdyLV4TZMtTTmU4EknUH6Cuv9VZFRbdC5tyHY4gdQiHpDukegFjjYBJDAPyFrUB6",
  "key16": "67juUB8heSVq15AKtmEuSkTLMN2AM1Puer1aY3kPupWTyrsWHh9865RGKmNz6DAdyGf8egEsJSDzKeiunPzTVhqT",
  "key17": "5JLCUcwuuxBozvEYF7KT3z2CiwBMHhdbaf1erLSnHBP2Zjx3zgTKQ44SFkxj26X9PBEJmhuvYqc4XxLMM5eXGqDz",
  "key18": "2okz9V4CsGYWECugVx8B7t8ZiDYphGMYGPanJtxpCvWPCQ64vBNTBtkisdJLh3F316kfeybn7tTDozyjcNaU3xwu",
  "key19": "47HZLR8Vi6PFGy4fqiJ6XBHDhhNuBXP5h5Ckge4UkPqurcxyEo4epKtiJJvGJnHW4vMdJV8ECBxHJ3HB9qypQgAv",
  "key20": "4vbgYAQ6yJrWUziDz3bdA1yEjntg1nHKH4caAKPnmsbqsCr9TQ44andniTii8grFGztCxftyWf1pbqrdNssr8ZvS",
  "key21": "A2HL3NoTm8PfMYkEdd9jBxPoopxMNd3TyUd1wR3cfRErGY2AriGyJtKJg2MHcLHerduHWgwj2nr5VopoVPpEEcn",
  "key22": "3fwHUMUoWz8WiCgeviMHZoKGeqzKHVmhJUunr9Ggxe3sj7uMvHB8bBRednH3Y6Zsdzk6R3UPumvL3FBS9Jjiixtw",
  "key23": "u6daQmq5oPZf63eC4jrFFZW3cp17WJnYrS8qy6uVkvPP56JYKbKhf35AK2RbSSVhbVzVbbjGN9WJHF5akvDEJf7",
  "key24": "2GR53y5PL8LaycK3df6UN5b5AtjZJBrgrocgQHFSkcVTF4USEHR52eZnV3EzVFa6SbcJguBuRiNTYkjm6CA9L3BQ",
  "key25": "3E42g3PnJaoyzfqFJDkQ8o76iDmNfqfuKigwLtWD2utu1bxNwFgcbZiUGEAGPUSUECpzzmo4wvaiL8vMStehNDvb",
  "key26": "4h5B8snf2q7hDeNVaLQCZkDcYvoBph1KuPjdEnF6YLodY6qUAWwksTEh49kZcHXizvfMxPnFUXEsvMkGcA4kaXEH",
  "key27": "2iTP2uQBBQvxrTFtQzstzKoiQzyb1XdaWdWhN9LSg273xP1ZHCt5cG55CdorTAbkFnK7ErtxrezgNsnKmTXB1BJR",
  "key28": "3Kcpyoa8DSUSKf2DrrhteCePsq79AHKYUJSe5ot33y1m6Qu1dNoe4VmGnDDoE2FFXgUdwQtSKqXVBwjrbNudf4Hu",
  "key29": "36HR3QDRkiAXFkLSPT77hrM5KWhvvz4boyZaomrCSQxgSyDoV7Dx7pydXTyXqvbaDFVTVi2oGP5JMpwRbHe3mkdC",
  "key30": "5KQTs6GJYh6r82jb9mHF4vmaRnhkP8fFsn1LYHMxr8tqAU3P8RGDJyYsDytT94p375TLqoUrk6hDgqHjuSBMyYRH",
  "key31": "5QuR7R8jCqFezpsvJUGxRmfh24uFRmFToF6yxQZLZnYZbu2w8ot5pcMYaiXfsqqyvXyV1XJ4gGCRZrPnyWEN2LeL",
  "key32": "44H77U88F4g2yUjK6fmUjVkEbfaxefEo3jEtHyrRFbYEbKt1S9ZScfvmwNHx4MqcrubrP1xDDcfR2wSpEre7XwHb",
  "key33": "4oYEsAwH6BafDhg7pQ5hEH5Sg4MgYZA5ZcCpLnbtPkdNPgdqPodZFVFaMUevZPvSj12JBvQhbr2copuHWxxksyK",
  "key34": "2wBLt6vxNQsUZa3ZBdNvX6pFjcqXqwfwxhSQ8G3qJEfF2GMtXPpTWkLtJCNz4hsobbcv9SkrtLrgPcTqtw8Udk2Z",
  "key35": "39ozheT1k1yWPdZngVFQg7gC4fGeeeYpriHPR4AMFX3jpr4uDvfVnaLcvAvRkvrRV5VGABhEbb18MGGU8bV7mGvu",
  "key36": "4zLuZ93sqsKNuxK9bxCPXx3HzZ2PQf7Lr1HfEbkwFhboRNE8CcegLbjQS1oSDS2waiKLMh7Rj2zdkDVFWY1TuPVP"
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
