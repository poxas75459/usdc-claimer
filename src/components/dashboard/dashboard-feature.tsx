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
    "3hrxdmKjJqyD9PmYdsaAczZxQGKWiPvgFF5jqiapundPXFRfr34fU2rrgpmDBGcEh29aa1hC3S5Qc5xA5AXhcozp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HjT8o2EHMnYRGnfdk5XbwsF4rFDSDuGQjzWTZg8yUuhKLH2DVWAQBtAug6DLbVJWQ45kFBKvXAMmZbBFxMuTNDT",
  "key1": "2TFJtJxarS7azTqsLteoF1GMpzGNsoq7vAXbG65BCPQtzt4XWdTpfZXhNuVSPruy72KVbvQKPSBopdpbtWYomUit",
  "key2": "52ipfphUoE1nPPQg1HYZgbqbxZKtuAYBSmQGNuP1spSWS17VABjrABZi4YRVUexZGWZKQ7bkHniXjXE5J1g1jkGk",
  "key3": "3vPLTHw84V3YuKf1xBfvwYM7eorhcvtcsCk3XFr1jWhuRdtoDu5BGdKmdMMxDynVFYAobh2mZ5pGHTtD6MZyW8LW",
  "key4": "2g8vWCNZAjdujmPs29BB9rXJD6icuXCdpHmdB8a1Naq4yWRLidw2oTcATXwtUSzuAHsAkdbfauBS1nnkR43CJE62",
  "key5": "5AKoHwJLuS1axXV6Wf7YMURdtqhHqV3MNMATKcEtvufQG3XKrJp1Mn1mUeXApbmguTdp4jKND8MyB34chMue7Ex",
  "key6": "rW3uRox6gMMddhekAjNGTyjQMxuBAc373FcGQR7Mk4N1Tfd3xbF6U3KHj78crBX6Gih2x3cp2hho24a23jKTwiy",
  "key7": "51uunLGXUZ7dDpMYYhSVLX4FFRXX98cMn11g8NP1Yci9cBvxjxq2KJe8pQ6HsptHcryKFFw9GckytqzGGd7heeLj",
  "key8": "5YGBFg8UNEZzG4LnjW26JjuLEp5WHSGdW2XcT6xu5Az41YJnVGp6LMDvJRKzFztnC9JGizjP95ERTVzzve6i2xEs",
  "key9": "2J1XrYiYGhsZ7iE4L2fWZmadjgGzAcZGAKGpBBq9zkzxZ4VDk2xbBS9ggnvtgV4ZstLVMXQvT4Fd4HSnrqUwSikp",
  "key10": "5fwkWGLBeiknV9cuiPBcncJ4rdm6p6ZJk9UmY9pxC6AmfpKY16viQUYjqTXX9FoUMTrkXY9CZtmagGS5VkSea2vx",
  "key11": "m2mEeUJGP6vpuLPHgGHvi481jmyFK6KnTcAdXpjDDu8AB5BxJgtatkP1VmEQii3uixAWWCYVUKuajSKT2pqBzp5",
  "key12": "WAJiXJYxKow1i9XBKNLKJNeUjVPyuwez3u1AtHc4qRAzZgJBuRg5FswGhgqobgVvCW1JcXLttn7gPbvWi5L9YrA",
  "key13": "55CdmEEHVXynmpH5QQ3h4bLdiZAQEbqUVUFU7vGgf5JCk2rg5241AB94cmZj5t1ZfgzthpQiU2Rb2G2oVZxbsA9K",
  "key14": "57k3nqJPBFubTZuJrwB7bExo7Z1iQH7k9FP92S7ESC8xCAdoZLm8hw5gx1gaZa1FLtJGdbSG2LRWUc4KRmVWcgfF",
  "key15": "cvmQHV5XPbRBQh7X1rF9bJxsvgFdWJNdgCKzFVewR4kccUjxVn4FxgN71nVextjokakaWRv7xfCWrdUEjtfBfxM",
  "key16": "4pR1DjBPAHcQf6zNkzWuWtAFcVcFQU7kcKPcSRsVewxqGHX5kbYPCd92wLJZiwDVRC6zoVGzVsowjeXdviNihipY",
  "key17": "4XLapEPiewp4QG5p4mW4Fb9uCkL4cMBWcoD6aVmvS18A8NGtd7vS8avBbpti7tBpVhQrvcCgpzmCJVKWcueMVS1b",
  "key18": "4gHRk5cp6cRs3gmXcGzXNCe7d73pJA3Csk1tRuSAKYqpVfwT3w1cY6FQqGbUm2vwfWxkBEjt79HDvtdbT2iKvF8z",
  "key19": "4JHFo8wVuGgJyerBxrpeVeg1n8WV3xzu3WeWXzYHWiQyeGR133LofzZa8qJx7an6dqiRX2pkmGpKVXSV2XMwh8KN",
  "key20": "65rSRiiEHkbuUEuFr8JhCegQniXtpjzjaEbgVNQiQZEQ32NCFqSufsauZFwzZ1PLtTy5RMrQbxjC8t5WmBCyXKJ1",
  "key21": "3rt5pfwGctcVx1tShDS1YzVyhfdeNGKbLPucM9rJdN7WF3ti9DTHKQWiYRnm3cGL8fYLe9uPrPwrRhci6fwyXnV9",
  "key22": "GNUDN4LqMsMVdgqVkbdZkHpMc9Er71nxtW694onJPRBnMqG6D7hmdS3j9HWrZimmZWoU3yaeixyUXgGFuQDuLyn",
  "key23": "utWbUVEWLeAd71ZKkCGGVeX1Udi8of1YpnS2B8aFYiyT48Z4UPVTtSF61G7VEC8jzFufHdWQr9Vv4QWr3JqPG8F",
  "key24": "2naMnkvrPCmTMvzQoUoUgL5GNSmvfmcW2PCB4TJCxqmD63f4w8RdB6qWW8g5bBqJZNyjKg4GZC2mKWb4kGifoY8c",
  "key25": "2Yap9RE6xcqk9D9QFiew7JC8JmA8cd6Pr5BxCXA1FToQhiPXbcpFnnkrZoY5TQNh1bSvPe65zDMNJC9jmzapgheL",
  "key26": "4USzuDhSGgsGwaZ1LhEahaCJrB23m8rse2pnUGBansiFHzYDJvW2NSiKkeQrJWmR4HxHy9y83JKREnGh5sPgcbay",
  "key27": "3diZheY79YHyX7mZGLB4as38KQwJJAabvAugNZXHZ5N2nHEMcYKc1eVtUDFdDjiuhZjhwfo2zGHDkAAJ3Sq26njc",
  "key28": "3wKLrWq5fA4eenBu37Fkc9HnUBTogRqyvTSkDKJrNdQmAg9wsqfLHR7XFTxUsxnDK4DEjM4JyPboGyKwjdgUhGoi",
  "key29": "3o2CEFsSHGVZwxXvwJ6mWsSTmR5ww2qF6EtNTKx7jHDG42RRsTyD4LQ9VB3Kk2S8HDfLYKW4G37HCTA2iMEiGJPh",
  "key30": "24swcBkykV8McN3PZ4jW8Rg63SKv4WyjtFsTdteKerHfX2DLVrmvYjd8VtJnCnz2GW8nYvRPSoZYsGnAJxWwR9CH",
  "key31": "4EnzdCDPPfpcMtpyshNtfvceZC1xPtqTAt7kvTWQfbrsngVhLyDajjeN6gARyVeS6DghkHHvJFZVmFNyEuR4f5JL",
  "key32": "3iRDXB94pxCKPy857zFpSogPXAhpqeQPwGLmWG3nmJeuotZRM4NDZp2tDdis3r11khK4fGeBLWyuiNdHn43xbmxj",
  "key33": "4ggwn87EhNPHiT3VMAVjQTa34tMKFr5FELG2GN8AVuRVsKjZeZ6MtAfci5UeraPjL7zSuRiD8WawVpKtpiLGPJSP",
  "key34": "5hqVUEb4huUnszdUXyoNdREdX3FZjKT4ELroDvan76Q4mnjg973pknQgQtxk64fci2goL3faft8XvjsAhdvxtgPg",
  "key35": "3Xf9hgn664sWiDshy7E9kh1VWqPsqDZnQopY9rPA8bwAxY9VnexHnHC8wyGyFQSVoZ492p1yZrer7x6ex3cuwAmy"
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
