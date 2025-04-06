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
    "3mATWxiXeRv5q7oqrfDf1nPbGXAmcqX3hNrWb9CigmDg7mqwnjyGxfXuAhepVGjGxxfL214QaYGDPAm59Ua6BDH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYWWWuEyzq4phPfoQxi6VhWYxzeq397NdpNyLbQ9mgrmVxyuwwVqKNbiRcQVHkhvwsxsUnofv751XF8DT5BxvEK",
  "key1": "3PgE6txjk2tFRFrHXwPG88Jmp5bPXhLZ8KsNM6V3g6A1peHdEMP66sQuKCphFtzfhLkNXGYWkdUXv3SD5wPQ5CHb",
  "key2": "4b1h5Dz8hvZvM74jVWiLPDodrP3MoG5jCaPQGzbJJKCurR6r5goYLMQZie6zpmB5QgvNVWw1nfhYVdz6s13mrcK7",
  "key3": "44shqN1MWZtF2ANvBqasbfY2RShHe4NTrXr3Y7qYJJZzArrCSQjEH3k1KD8RYJNz9N8JFht1yTfm4HpT9wX4eGjf",
  "key4": "277VrNix7yrRtJTXEGTys8CnCJZYQPyjMkxZhhhGkjLmuQWiYuCezzVZAdx98kqZb1TQVJJy1y4E2K3Bdwi5ceHk",
  "key5": "ZHHWo7RAatNgYL4WwmN3Z9aJvgAHoAW56AGZuEZantscEDbk1T4wAUdBVYqHfCPJviiUzacVmiYSigNAPdFhNi3",
  "key6": "3t9Cb8nBBjKHVwwigpa1rVYNofba9AsdHxWSt6ZsbmYUHnPsitEERP4HSLdqg6Xe9xmQCtXyDyxdWyzASPLx4oex",
  "key7": "NJmcWKRvTwxQe14Uam1LmNafz1D1qAWZY1XjSAD4qGqn1K9qXa34VVp4GxFJnwbT8agE2KCLpo3cjqgrMkH2VUu",
  "key8": "r7eWVmPMGRAMJ1UuQhHqNuJE2YmcbEjJ3BHtNuDEu9gKvjs2UWj7eJRH6mZnoCxrM3MA4PWjsmN9Ekq9NL26FTa",
  "key9": "657BjeVFY5wNvsvfW9Kq4MLMrJKGQxaPxELULtfb5GBAJXCiFCNBqBQ5zY6LEuKZ2PocQoTD6pTmTY9MZv8B1WhH",
  "key10": "2dZ432w61gKMcivLLfjxLwURc4S4HLC2fgBSuLmzb1CamXbBbkgpQCFrmLdiUePwsgerQcKuRMG5uaJ4JgpPZ8R3",
  "key11": "37oYxFNrvkXpCgzzjZeWeMV2hN2caUMQzrtnY2Gqx7dH6iL86Y6fJYo5C6FSnf27xZztsroRJy5Xbz1mDqFZNVu3",
  "key12": "53Xhw7YQ5UQDzG5ckKAuz4aA3DXXc2Jv1jtcH2kmHEre5Nix87u6KvK2A6cqTUpg8gLeQZbHN72RZXbKsfDEhH4p",
  "key13": "5NdSRwPSPsnp8WKe4SrtwgTJyFGy3B9KWa1un9mKGQvSZLFNEzCSypq13JGJE7jyJnj1uBmaBbESHymH2gi5A8DM",
  "key14": "31CvnBTLC9EzhZoHsToCFVVfcvDv4xZ8t1Lf6QwEFwrbTFEowdzgtQiFp6Jn3DAA4batagmc3iNvn8F3EyRnUWPd",
  "key15": "66NQB6LKat3t5uxrjCgNLCjzyCQVrdQ8tTnMgLvNsQ4MKDxN6a1vZiZd4JNAneH6aBK5Rv8ExkaNxwJRXdXTyhTx",
  "key16": "4bYsF5uE3n2fEjBt9qYPR3cfWWqU4vNqz6y5wCe3GkZhcTBizxBZLh8RBDAqqnef3vMSpcHuBa8UnbvPTkt2vH83",
  "key17": "5kEN7voJVVXcg9nVAf8bCR7Z5REXgeJQbYrUPBKngoBmUfmvqb35v3vbxaiN6xqDxWmJ3bM1QAhyWdmdNbfJHX6k",
  "key18": "JXkuUCTa1hLiMPYKCKF6cRGTL823BXuJdDwsD7Lj254NKSCHMNMXdSwFLHwj8BefnLyaHUasvtctu9JEij9JiN7",
  "key19": "3sUPqTPzcMPv3JjuAGSD2wrT7WFgVNi4MxJmjAxXFN3N8vMoTcKNvXhYjxHgj42B4GB4PLgYUzsxckrdkZ79dqec",
  "key20": "4szy14sD8YUrZgXp94eEfA9hKfPSN9XcTW2oKfRkxuLrYiMuqDDZ65sKmeRQLcsaH6AUtoFBzHdikDmwAvjkq4Q",
  "key21": "2c7pTANR63qJt8ggiCEzWdBPak4hedyCssfyqcd4gUD5hUo2ENkPF1ozkw7dwG7xuEG9Hwmf6FtBoKBoGQERcJ4j",
  "key22": "5Rgjcras5VADS6tAaMLLjCa9RZDRnnbExKsdhXazDT4XNi8n6MNUDBxHgh7ovZbYQ4w2btVXt2915AYVyyrfBwMv",
  "key23": "22aUyjNQKfR5uf8w6vZg6Hg1vpWg2MzM8FvBmQHPrCmWmcvwTevPsuLw87UhmZmALqpbnjCKy8XUj6JXa9s77YcA",
  "key24": "5dfjB5yDbatCm5g8GV6APoZ1SnMmjCpUFdqMLCskG13KhpYcdZd8R8c8ogW2PFzTc2JXJhkcGrShBAGn1H7bqW2c",
  "key25": "1CBLvdDRuYeTeAfyBhPd6k2q3TqMMuSM7KpFX3UtwjjBas6CTnJJsAyH8xxztgdRcBhCvmEcfZXHxWhwg7NzaU7",
  "key26": "5PrXAVArDQq1V681KapbzCkV1mfUdZtKpQAeBQY7fJXE1JqpxfQ4L8aD3Gb8uxk6AJhFrGZC6bKUr65cCtnJetqW",
  "key27": "4UzxG1ykWXDGwTencA3bpf9bwdeZio8U3EHBofotWm36tL47WYRxCC2LRizp2kkvchtfMphTYuEHZ2H5fomqc8sG",
  "key28": "54fN6oRiLupiwYEs7s8383rhvZFvKxTmaLVLXGJw5JSGWpLZXZi4dSWzMesUdKCu3GYZn3yjG4eLWFkL4Sx5pBk5",
  "key29": "3PpmbeUihhwJHFC2ke7HR7CSc4XCY4mUKiR3MZGsUTzLBgdPHC5BkGJdiVhes8eywkJqCZJSAfE35bEBAn7tcw3c",
  "key30": "4TKzC7j7jnCEfB3rXokRSA92D5T3BR13tdKZkS8io7rtarwQQneW6D1MgNE9S9KgPTkRtkysUKMxuoGzNubFj1ef",
  "key31": "5JAaCYjDkUAJnxk9Y2r9fdwguWrEuXEVvgyNMno9xSSoeWWz8aESzJRWjX1MFSgBUYHbhnqpHvJk5em8VQFwcevH",
  "key32": "556fweiV2XAKwrDWP9cJa9jTfSKTMbvYCN6Gw8dpGVnUU1zD2qS89RpiRzUrJcB8fYLARQ3HVg7gW3Ca9mkiaSSo",
  "key33": "5qJWgZY3wjekoy6nf8dox2Q3bFFj4NJZM4Ca7haKA7bnEUks3R1v26TwZx2RFZ3TPPrfoffHLczcgBi5PXY9wh3P",
  "key34": "48eXapycHoCQq6iq31nzHcUW7SLt3WmjmWbL3wWtQaEEJNgCusfhic3UDgCx98MLaqdMWnTrsFowvMtAfpp1a5Gq",
  "key35": "ofNEAhopLiUAxY7nrPNuetfB2uPiVprpoTnDxCdagxGrhpNVY9iBKHsq6RM78kjX5EBjVJ44GN4q8CgZt3gHfNi",
  "key36": "HcHVr1p3UkLkXsxMsu5LjzocB9yUBK5vkwn5sGcZp69vz835gfqFJSi3TGAGgjNZsfrGyHedwBm923k3VLzKLv3",
  "key37": "3UT4KLDRrYeSS6iWZubXNQJ55NNUZ9Xjg2fwriNxD79BE3UQrYNNCYFdFTxe1DBKxBJ1CBtLGg1grQXpnCuGDii8",
  "key38": "4Vw3yPbCDR6e1YQffL9dxV2a3HjNapv3Nvjn9mgfxnoMsww2Pogwe3ubepcqMSzHUeTHLNpemVaNEmgHdfh1AdJv"
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
