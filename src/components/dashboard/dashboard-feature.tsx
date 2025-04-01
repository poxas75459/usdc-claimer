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
    "j9XBMTYEuPNkziDZGnWcEok3A3YrXGhefvBmaoJYisisKrSBDRd7Pgjfbstm8KYJJTyZNS8g6vQHXAoPKzgDswB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krXW67P4AoCmjyN23pqUUCYZKDMJ7BGazjFKwF9sA6UWdxQQzZ7MJSXoWCCpcw5y5rHU3zihW6qCPP6kBHFHzhH",
  "key1": "3uz2FSxr9JGVKotRoJz6nZ4ULhSeayxefCJw5KkwWgxzTco4NXBYVG93cRgnbN6yMkQxbTTC7gWuFKSphSQ7Lh7N",
  "key2": "4NjT5xRVzmUesZ7x6n3aLaHCnyBtVWjrjCVBCFdzJ7FBzqrAiXzSwfDjgjyJqWTtDDHegHBzrpyxmkV7kBSDyncA",
  "key3": "2egeSBmnAqyeJ61aXpvMsFPhdTXoT9Y2zpNMjJW9zPxZU6enYkBDcZjvNfHMKLgF3JyDnssVe2fBV4vADn3DwUqZ",
  "key4": "2iqkRrHoe1Qs94yxoXrsMMDDHhHY6cPneopfxypRTY58cZhnBNRTQJqAtfgp1BBpFrJnzTtvbsbeReMpWFRLiQkk",
  "key5": "XwYWkxdb3n8wLZVE7EHC9N5qPDBSTWegRNng4yX1N7i379f14VD9mc9gwRF4ixE5kMYb8gLUwKgtxVkTEBS4Fdb",
  "key6": "2FTMyUKwa1KqwHFNto5HmTbQ3EvZsCB4PmGcK9JECdW7SeL1yYziS5U1CZVWed7ugwHezhF7qfNfYtnKFq9E319o",
  "key7": "4rx2JSUWKHwiVBYxvvJN3EyuDu5uFgMCShm7irKi2pNfX9bDb6QeBfrkTUS4oAqDCRXb2N2yCKSLg8Ai4i92E31j",
  "key8": "4KbfR9nrutxatfaGCMBBb7Tm4ja6S1PXWWW145yaztvUaJp5YuJGTEEuzeTy4vBh6YhwW2rgoQvjV1bSqhfHbj2t",
  "key9": "65hpcT8rDfH6ieVeQ1i8hEkDxZJvYedk5rPA5mZBgP3V3Y1JLJNPWusfvM5GtX4a4VaJDnuppnpNG2o8DRKTLgn3",
  "key10": "5d2BBqHeazGCHHAuSp1rghmV88MgcuB16P4ZajWQBopUihgRmYqc9tBU3PMWe2qqHEg87am5mVPxtdpjSAh1VNRA",
  "key11": "4EKsYoFEYzBbuN42rBxpHrBpmpZKgdbBjRX9GZmp7FSQQLZin1JWkW32tYoYjaeC3ZiKf9fm95aR7G1fQTWzQXe4",
  "key12": "2BiYuSNZdxHNWHtPkch46oNvXy4ZD7qMEG6yEcuMurUKaQNaeY3gU67NJDudDvELC6DwbaekXLbXg8suV787GBXm",
  "key13": "53A2bfxxCWPmmjeuMypgH1ibV82mVG4W9K6qjT7D9r7VdWpTSvatmfrJ4aNRNJrb9Xfcs6z6xJBeRFEm4pgUqiEG",
  "key14": "2WJsmE5JJ23htHPmExNwEF1CGuMnDGK4ZZaxPMtdNuPPESrHdnrxsY98qVCQYHVgaazHEEepe8APg9ZfhA8t2k6B",
  "key15": "44wsuX2UtfDLZgT6xEYL8pCFbQf8JJKis25NhGM7ym4nsnVx2ieokrBnqJQ55xyUfT2J6Nkxeq7rkd7cqJAQ6qpU",
  "key16": "4g4gX67wRUuzhSpQNuDWDPHW2aeezeHjCJzoeHUUjfpm6VyK7XyRvxgsfwWoioYvsE8MieQcwPa31J8jSKCVNosh",
  "key17": "5sZ9jsRE6bRdQiX9VT9nEFKmLHqYe8gr8VBMvdz65TKyTkr8CNMNVKKwU1qawxXTnZyZC3RHxfW328bBuLaCwXeQ",
  "key18": "4ZA8pi5NocuHcccxYeH4GuwL1nBybaXahRP6kK4YdbCxTnZWhi4nx4TuL9PJPou2CiPaeNcrPwpNPgFbZynGNkRW",
  "key19": "52AJCW4n7yVsyfoSUpDt5gB2c3R7psCCTdGQFHWxJGKq2c4XJJyagCbJJSzzs5NXygpsGTdvDe5xG9RuvDj9c3je",
  "key20": "3VcQyFLYbxY97Q5jWpW49ptsGwTktD3gDdPDiCjZRpsY5qAVDNnbdNMwwog12uX4SAWE5JmYcGFVagnwMgx3gdMv",
  "key21": "5MUNJVUNQHDgSxwkSoLMBvV5KEzr8EqCje4tqG3YkETfsWTKyAuy3rrtptxfLd652fNfmqc3MWpDymTsCHTiC66T",
  "key22": "3Wf4kjwTspTA8BLsN1wN6un4NsGBfyHxiDwEbY3ehcpGXk9RadeDvFtDPs8QYoRV9MSnFJQogcHLdy1Enw8V7RBW",
  "key23": "wSnTELxs6ufdo75n3msqFNgm6f73nW4axRbZtTFCMQNQmsfq4undJ4oHxwf5p4fGbzj8FmzZc6bh7NhkiDcjQmp",
  "key24": "3siXseBKSbp2hHs4AV173E2KqWSbFtPMRnG8hph6UUTYW6WWFT1uZ5GMFVB1u3TAAsZP7qwtE7GmSccFHHAgNLLT",
  "key25": "245F1qY7AbKJQghLmSjAG3Hn3n5E5nH534MQnqdiAFXLhg9PqkFf7D3WGG2LDxTivT1LsAaCPp2UG2WH214Qw5H6",
  "key26": "2bKErwy47pkdV3LMrvMhA62W7rJ4KFUmf9Nw6vim8gsCn3xgEGTVaHiSMKFfziq2vpQvkM8DXEQthM5CsR3oPctA",
  "key27": "fyKfPH4DmHUWJqiwpg3Lp1arrcvRAKyU1snoAN5ExAfMNyAFpk2ZcTeJVyAheJ8KYuaivHgA8GNsVcKfEkXSXjQ",
  "key28": "4rMyBuJCQGAGm14gsLxsa1xX2dCfFTAHShaok1q8XiKgkvAs9E5ezTrpm6vnicf4cMKAL5do1t31sPSczF2Kybxc",
  "key29": "3NR8ENroojB8dMLpzchpFRDPXthjtmQRGgQJRmW3NCEZ5av5cEiYHGaXDMTjjSACa446bLdKY2xinEPc2VK194MX",
  "key30": "3vqTGscgZ1KyNxDkH8iponakwbAtCx1dGmpA9gMika87jNki2WH7Ty2X4zNGyuraeWS38q1wqJnsvFcGwug93XX8",
  "key31": "2DmNGu1CwDCYt7vwLmPVRrGrGzH2uLmb4ZSiwPz95nb1VD4WVJUo6UjkyS1CyqfX5xAaSsR7uTDKiQE4j5eDL99e",
  "key32": "MhoTdQDXW9UXVgU3r1dqUwaLHbRWLHgthj2RNsburhLyaFf8s1Z4rEGCn7EJJS9dQy2oUgrKQGFkuuWYaQpZNQc",
  "key33": "zmMyorcTgzDMutXsZxMieaGyPM8dfd7s7dqSX2SRMbeD72QQBJYQzRYor24vAP9qgKmoMFhPr3o2WLso8s8AxVH",
  "key34": "gnabLSGqjdCQfXNQLG5SBEh5BmRX6drXmhapifrkS1MibyCA61VM11pA2Cvd2Z58YLzJS7aY2R5vRr7LFYvcbqQ",
  "key35": "59BwLgRHmgFr4RwEAHB8bXs7ZA8Sano6riXsy51dVvwH854ntQ7eSkBAdk9Wc5nEcZFWwjtQm8yxTwK1sXH39zsb",
  "key36": "2eCaLLGaLtz6ApEHiR5RSPWZFFmPKKFbba4zqhxCKZwxdmtHM9qTpmpNm21hpsZ2wDRSofwSp3gWTFhu3GKb1ytF",
  "key37": "28wJt9UzN42nQwsoZgc5JGZvJSihsPn7czuofJaWzMTC8SgZ3wSE36maP2NTg8bqLv7yqkeJgWKWyXbzS5iPWe5a",
  "key38": "YQ45SXZWsoAFUktTAGrgpxkCHsCvEjbZqKyKYqhUkTEa8RF8iqioYX1Er9dAAVtWuZ8B3gYdyRjGZfrqX4Vn9H9",
  "key39": "3XdAXRwgjT8iwTm73JBahNctzTNQrd4BvaZJ74fe7ekYxQnDjUtK1u94YAQBCcCjFUp6o2Z3P3eCaYAPyAMbknPP",
  "key40": "5wHPFKq7gEM1wqq5e9qxh3Jm4xymu1YCAFiGQzVBEi4HiMsqbzxasAbY7TUP5sxPms4CgLsYJd2UB7pTM9aZnKJ6",
  "key41": "korJhCJp5W8kJ2LZ9CngFoaZYXBcJYHqv48txTbLMisUktLasScGRWRGbtYDLmJSVW5YvSzzHB7J1iXGBpproEi",
  "key42": "2qo8WzAMKLnm6KT7Ttaqmq5WqBRJpWXG6CAzqA5Wh9FvqMmD6DjT7SXTkdTAamz6kYrb2jdpoZKCunQFdgCAj9nq",
  "key43": "5XwZ8pwb6a898oy2Hw9WVJc6qwdJUAD3GmtdEEzgsSUntpj31CZL2daVKkJQ71MPaLW3NLDT9yH7u2xppNUkg52y",
  "key44": "5np2f6uLhWyWGpCaAALmzUDJpurrTXMSLTdwvcbXAmMi8LMGepVjwgsHfzY8UQYNtw8sEPXo2MB1yPsTY7H1hV5c"
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
