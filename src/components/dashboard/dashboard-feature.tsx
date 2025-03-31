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
    "wH5VkoqYAVmn5VkVS1ZHPfsWDf4pn2KTs7Yijt9wdRF48poRwVpbjGJSWnatAn2U61iED1DsmQztPxnsbPkXejr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxULF6jYxT5n8sJ2yzK4yBujUd22mwBNWnXhDzVkkhomB9aVQEWNx1vBSs6kVDEFhbRz68kDoq1fCWGmwJVMBmB",
  "key1": "5kzU3Ua4EsqDCvMRoV57bv64zxn2wcKBWyv4rok47ximekovme3W7hhqxvXbNdJ1AGeqXZJJ8U3yvDKqK13bw43j",
  "key2": "4FMW1xJfiZQ9zf1XfN2WnkDQz7eWQBtj88BohvfonUGvvYVbC2pBLRwxE7Aom1H5GnU8ymJYpivSAW88zJdcfg7h",
  "key3": "3yY7UA4jmwRuY9sjDVXsf6hvkQVwiGijvRDzyx18PnJY7QVrpYzyw9919Qujb1hB3FKDKK2f3CTPaMiGcbz4krDY",
  "key4": "5QHpXaLrg5BxfU4xsY1H7zqycug2VVkzb5TzW5xW3VityAsAMfVkvNNmen3NGXahVgid6UtQg4GFLN7VSoCcsnCU",
  "key5": "54jCAyUtwrXbkg7rgELYr8ZZj99U6sQcVBuRZgftTtTgF9VhsD2NEwe9pLaK8Xb3qHAhUpLrXryAPM5SZQQzK34V",
  "key6": "Y3CgJsRSpzf6fVViAJhd3urnqcyNPvBtyckVZpgRrdkr4MU19m3wzAzDrQDMsQ1popkCCgahhZFedCkKuYnLFUi",
  "key7": "3ZjswH25nPnfQmnTpLXnDuMG5iqZhS4YVv2cvwgSuN4vD7YhXqb5vrXcUqmFVWcCzxpMdk6TgmSRSMJLbuQ5Hfp8",
  "key8": "EYxJvYsSwmt9hrmoPVUSmegCDtePeKkRJqWtq2rPHX8dC6UPawRsGx7HGYysyw1LQrexpyBr1xsYXSKVVEbpjmD",
  "key9": "2SznFaDUFXuVN8vfWnecKqZoxs7UVkraLEjJhE1XBJmCQVrvoVMm1U8NQoL7BpRT4E1N2EYhCnA3gVbqJBLYhF5K",
  "key10": "451F4CzD2KsEdhgFAexHEHeR3uxRARmDrkB67SpUUNJyJRBwJ5euuC1RJWqe1pBLQMXHnwm5c28U73bU4rHwBZx3",
  "key11": "3cpo6Zrmgoqk8WFwGX4tUabEpvQj9VqczbzXaoxVZhm887ZuSb2UBQCRyzxWifMkYh2bH6Kdt5AVwCt6YYBRhNAX",
  "key12": "k8GxjSe5zrzgNcsaTrpx6eBHK4ExEtfzrEw7DsZuQPnAN85jS2vu4fDVCxAyNXeHLCRY2WaQunuV9nbpzHmasn9",
  "key13": "4VHQJa3R6sGH2sE1KW6p9KUkvPta5bSdn2KaykYBFgde3rmKc2zuHogV7XvRMEM3oZ1xAUXA53sF2GpwVJSvmVkH",
  "key14": "dF7E8eWRFrYM44fjNjKnGBN56uyA6fNri1dWctmKPN4RS55vQzEJBnzz6pPELkxqFBiUkWL6zVSg6hJR8Gs6EqP",
  "key15": "MtjVPssfEsCqZrk3R59jAhHbjHfiSWntQsXDPjM1QH3XeuCprKy7iRSDuPgtf41Eio3V4dfG7eK5PuW5BML6WKa",
  "key16": "2bBksHiYSHkxHMy6rnRU9RfpBB38E3hQJQekgmEGXudfx6nKRFaiwUSU3YBtoSGR1Jk8hHBmJBToGgdysMqG5EGe",
  "key17": "3U7W4hJGzp2hTXeoTjYdQiQ2hP1CcMbKUhKq85A1BdYyY1M1ikMCk1h32dTyXWGDoMqyyTdXESdFoVyLt1y1tRdc",
  "key18": "48Sva1WEJghP9zoianjJWbL1msB4hTpaJNkrmNk2Vu1sYNMffGKiBxdGxNz4sh1e8HYsnSyasq1kLbKbJHzjKQ3t",
  "key19": "4Zg42N5qGS62hMsLoREx3BnZWcLTm1FVtA3D8S1SWhabbW5G8RR2cgdnHKkESupA6TYbopqJpvU42i6AwmDUg3C4",
  "key20": "4rf7qMHim9MvZQ8sR715a1YGaqGXUPG8YF7wC5doz8YcwJZZmjRCuchizHVK9bFRFtskBz2kVgRxvj57fEbEQsiK",
  "key21": "pqaazBkCyPth5yr5fVKUSTC8fr5KApqT4qXxsJnvRAWiAxRehxkSguYKnKnGegXFuiLULb5sdjQB3uYag7Gaon9",
  "key22": "2cy5ZsLjuwwyCmqcfz4QUf1RhMy1jTL9wxvRU3PoiWt9CUr69BmZpRdr1YtA2DkF5FMY4eNrR3EaRP37DfMijvVt",
  "key23": "5A5668ax5CzJCovKda27NP2hqZWjnUvyX4Ho7BmZYWsRncrzEiBF3X66WeggsZkL6L8tNWgPej3JLQKj4UEQ8CwL",
  "key24": "4WjqaBg8aHy2wa65yb35bsGEwENsVgDfd4qbXFW4CHbL4bs31KGw3xTAp4JbhvRGgYJRk9iuTXKdjGdecJVmM4V2",
  "key25": "47NtbxjLhqiHoo19YgzPJwuJrXwva662Pb3tE489qgdpJjeMGJi8m12qxtmguJd3kVCfEt9v6nFdMRf46b3t549g",
  "key26": "5krv3PoGuPKSuZYV1gCFAUP3NMEFrfsDwwKcz5PhGfNmhoLRfbB2LpRjhNmWzTUcjZMkrDbDdTFqtZSMxJNH3ARm",
  "key27": "fCBaKZCBroFiXafUi7dUPpMXCeC8MYD1ughDmTjSbNY9vSbZAwoDyS4fvGDrTrRZavsbgpizZNyu3adwTPjnYc6",
  "key28": "42mxTeybb2rgKAwyL2YoMaaqQG1cHVbBQAFnb65KG8EBaSr9KMFX4nAGB7jQKHYNhNKq79aaHe3UHQtmjJSGD4ZL",
  "key29": "4EQAKjPoZeKJkKZPErrbvo2cmaL13nyKQrVNpsgVfCrjLvfpa1KjzUV7TVnhqrfa47qadikT55yisemHCN3CE5sn",
  "key30": "46KcNTBvYeCzQqejqvynvicU572G8oUtEScwLc8DDEMXCnsfSLu14A2qXPaEhEEnYEYFzCXZigVYjE1krDXFUrmM",
  "key31": "3FRmEgPwQC6ZFFtsGJtQ7ZECuW1BY33L8RQGpTGw9SHpd9oyioVCFNiFvHK9wfFkReFVPhyiPF7Mm76NyNyMbapZ",
  "key32": "3Rmfj4npdjqRhSWLw2y6kX8j1iAWnDaDDig9Ym7jAzz6KKEb329NAArnsnbvX7nveDqgcbtED8vPdCQQYzM4ZRqM",
  "key33": "2TYWk5sicKNGT4Fq34bQxqzEV8T136fzktgm255Su9DxKbPvnJCLavkDQzC7BiePWvKGuFpsQYiJM19WnpyDVAVP",
  "key34": "3htkADqvefMVJRCTMkoFE8dTEgPifxuQ94z6YTcq4Lk9wQ75ohN255pN6TJVr5kyppz6CeXrieYNKQvGYjJPxD91",
  "key35": "2TW4h5BeGESKL8BPFksvnzMp25xJtJoWbLnqXaskpcctqnUoT1HnsTGMALJv3QKWrAidrXH9gNViEqtGe6XqJsUB",
  "key36": "61tN3bGwrz2z87rYz4Ui7Pqr9iaXCqtQicUGDcJ5ZG1h45K6D4inVpv5JuceaKaoKaDUzUFunwY96yvwCNCZY95p",
  "key37": "ksUBgn86Nx2bqFS8BSDA2UZ4wryaUCFavAtNfK1oxU9XBrHtMuFJddy5mCoCfz5p6QxWYFu6iaahq5aJzi54gst",
  "key38": "3YKS4LzeBM8fabAzTwKybeZat9v9ahRiyoMpcKoZHj5RLCyjB8K15Hv3A658gAEDQe94DnoqRtfVUGuNJs5C32BH",
  "key39": "5THRFHrKBadjUjaDCcByUnp11XJF6VU26ERZ2W27Lpqa8NCqj6pRKjJb4dHidawJLHVGoKJT995pQzrM1jp5L7Nx",
  "key40": "44XBgzxd8XTCe2zt9iLWkZTdtFNbjwS8kmKdVTrWwgje9LmJmDQebcdittDeueoaGTsj5MEN1KTHRHG7gmjuvM6x",
  "key41": "3Eo2MsY6w8hMtYwM83SbP8zfUKKAQGP5qZM3JzwFMAsaiwygG5xhcKPFYkn9NBmnEhr5emKBSUPEFSNU6RmKbEHr",
  "key42": "4QD221YydCnnM9KYumXfDdMDHu25vbtipcuYXvqJ5GqEqf7apypvACQqD4ubp1fs6it5uE8eamrDqLxQtfReuEZi",
  "key43": "rVdcc5cGq84p1reVXp8rjunmqEhviXmZruCvvDX9iF5NbxFAWz953KZj3B552NwQLsXKac98kcRmx9fCacLXo4Z",
  "key44": "5V3jBHtjKYQMKNjk1vzdZnY4EnF8Pbn8KbE6Vbe7XhEy715mWrdUT3NkkWWvaAnbo4qBRy34JSQho2WDE7aRRAhz",
  "key45": "2b8ByeXdwd6G9p2mw1CjD3UwGGGjnKgeqppHeb2dmYn2HxD89jNj5pYaoZKLUiZGKNt26w6LV2tvp4PTnNLFeKh2",
  "key46": "S4Kmxihhqobn53r4ZDht4SFSTjv9JJANNCroxsY31cub9dAacfXNwAou4PyLEUTpxpevcLK25PvkjBkwMounjSt"
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
