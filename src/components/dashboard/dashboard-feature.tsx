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
    "FLUgj2mHvBoiC1TUk9QhXpiU5oSWKVy1hUxELp85nqTS1ocxENvGj1nZUvudEmnAAXkUJBa4VyC2gLDbzZoRNKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdNGvnMLmVmcMsDCsaYhgwJhSowAk42KqcYkG882oyM3pr8q1jAHqTyuRYv6NrGaEGmoiDj1WMj2D7dKXBs33Hq",
  "key1": "24Hwe744A9byXhfkBFzrTb2fXpRFtRhqBEudMxfCz1HfUxcC1XovEYzvjaMQiiejwfZcF5hXJKsRHtLaFEcKLLu4",
  "key2": "57gtfEjG7VpcXJAVowHPpgFtvGAyGXBRLBwLe8hJyF1c8pfqVpHWffUULebghgNHeS5kytMknPBcvTQyWJ46JyAB",
  "key3": "48i59fHK9PKcF2GRiCTa9TcBR7G5uFgVhb7PVbs6bqBF9AQ7jXJRyvsceEJgYyUWyEUmEXXYRaKqgEmPiFDpG3Ge",
  "key4": "5waSqcFFWXuJEJCSfnqSWXTrUaHt7XFafTH2s9daYroH9qZMd8hM437cd6HEr1ivr8LUEJvxA82brgojk4mf1PTX",
  "key5": "yQuXP1qvBHM5o3gKaAXaWt8nmSYzU2S3QifEw51LWNQgmxtjQyh7H2cxYs75vTaZCNgZMR1jXxfWtkqauV5LCwR",
  "key6": "5VQfPmCV8oMAuQ2HwSU6t5Bv9CpojVwKso9yvQFEmvgpUKeVwWi1CHXPvnQfh5Vze5pHTMFCUHrYmsC6Yoa9rk5V",
  "key7": "avv5GiWnbVqj8xQ6Dy69rCaqcKkLTQR8edNioM73MiYzHhuQXNRgH9ZC8p1foLDKUogPaKeoekKAjhj4hbXQBYG",
  "key8": "4N6HJYVfQBsu7GgNo5tjkHXP4TSnnHDNhA6fvJgvZqehz2apddYb2BVMHdVbgPeGemMCTLQZLb7snTqdidRUfCbT",
  "key9": "2LNsNSCTiAZnpbLTXYNi9sondD2Ygdbq6UUUarbMK5ueyjScEYLC2zT8k89Hxzvk5q8VXCyRreXcwQM6zk5XZ2YW",
  "key10": "3Hcdf1ag9dKT7vudAizs5yAHaCEre3ZUAjXNsS4auTE8Px6q186VWbfUBzfd6vKgV2v3cUje4YbNL9rUrBdfmEU3",
  "key11": "541UKxQB2eNenQ8CAVfY51bwU5GVmkSKgXW1kSEnCtU1z1mr86kG75Xwwwtdi69ckER15GcCvN1G2LbHPgvk5YCX",
  "key12": "4ZhvCkXmtXtaodKUwgwk8rkapbyk3MofBtpFJPVpVpRtTz5akDhA1EPXoyjrAaDPbwRLqapUmkcLfP8QbVLmGqGo",
  "key13": "4myWXSxDfzb9qb9bMGzxnvGY3mtD2K4EZWXnL6dnE85Z3fqk9K5TkcLSH6NeHcnG6au5HxnaBATDG1aL6xVqpVuF",
  "key14": "4swUvNZWv91Ur99qH3Ri2PsxUo3LLANMszHJ7ZuabkcsDRDxMY8LPefpfrinmqBWexjX2QUnsoTGex8CNyMhzR4v",
  "key15": "5kPkVaExJsRspnqXhctyxpp4nnwiDiXJ1cWcgRtybyN1AF4V2nvrErP6oNcqUaDypAeVjiYuD9hxLhRg2y7UvGLC",
  "key16": "2SUNSHgpXBocVdQNeGUqpMF8V25Bt8VMRSyXevjn1GuHKwxiBFPqYXWSTEq8eypoMvuPspUx8u7UQQMnm2p8A9ff",
  "key17": "3qwxGRB2wTjJPWCAudPiJ9HAPdbxN6Q2L3qX6WgRbRpUT9bmoixZyQKMsKB47LEjuyRkAFTDnkccwj1aFtsYNSmg",
  "key18": "3xgN966oDWD5X18iPuJq6uDYEQkRu3fJ19tfWG8kc2mkTwdsfbPpbUbFc4GtiMzmZnj9C1yqLkYxh7GjEEeEHUQ5",
  "key19": "5TbK5pVufyDei1sQdqTWJm8grjm6TfV2YocGbp5XBTNsgbuGeBjhCWPTDnRBFG66rXik4N8suUUPEZVBbT6aT8B2",
  "key20": "5XuXswQTcLmSkNV8oYhqQzLsZoJ6VQkeUuw93JSWCYuzyu71RKGdCVUZV9EXz2yKUpx3SEkaLjSZ538oBLjbHWEc",
  "key21": "4pXcxC87t94zY5b6xgqKUqD8K3B5okcycTrhDQZXVgD8xZqZBufGjbKgKAsQjADfYxHwi2WJY6kzGqar6mbige1V",
  "key22": "5Miba2oYxvkhz1zTFfi4W2R2uHQNXHQxczXf6cKe1WcNcm8E14Zk9Ny5RDtukpdj7yiwN3REfzryaPqAJjsCRQa2",
  "key23": "5PJGuNSbrZZAa9WV63hdwSmAFDFehbp2KeGcfKZJ15J69Pnzrvt8rCmtBZhqQKfLmDqnyDXavJphG8u4Yqr7XWct",
  "key24": "8oq8okG6p1i72fM7dAba5G3u3vZTaT1LnvR8jmxS14hGC7CxcTUEwodMg1LL2aP1egHNUh4actYSKtrCGHTVffk",
  "key25": "5MibJ8LgLT9snb1SYHEhypRJ1uvXK2LYSXDFoLyNqAPDXpfEbR1bF7cMoMDaS6qKfispsKBTbFQpMmj6yN4eDr95",
  "key26": "3S4m9uEDoXofwZ8rUbQDwbL9WXowSB8tHCPWyyGAhdvQCGtLpjmUAdcXFcXW6QHEH37XbAxDFh4Lf94bR1mAiz1z",
  "key27": "3YEJRJUi5rvhNc3bWoos3hnHpmUrD92tLYe4ZopLziFYwMm1SNpkn8EsjaAQwodiVVigezkwKenJXTLtfavSm94C",
  "key28": "ZxLFVqMv7gzh7Xs9e5pfe8aC1JsmMEqXQBEN6HxBMrebjENnqMBZXxWBa7q4riHjswAoQz7x63mDHSb5gur7ams",
  "key29": "2q1zF47oqc3xgb2BEZyPCfr2SsxkuRQpMXxxLCUFe9JRwLGvTUWmXrx7qknCQHab7zy6Bx4WuJZcPVjU3TyR2Lcz",
  "key30": "5QAfiWzfpvQfDyaDTEzKPq6DYYJtzNPaMvASQDwUuFBE99mvrc99bUFozcTE92pqpVKrj9cYZJFkKJ7CpNejZzB6",
  "key31": "3t3o6Ccm4np2QJuUTLTMHvrN4nPKv72caDTTNNaUY9KVzQi5iekmEx6oud6aURooEh7c3f2i893D3BkS5hvSAAUf",
  "key32": "5XuAoy4eSB3eFJ7vbESv1Jk7ahcdbDD9sB8Z4Zqur2d9xhkczps6GNs3u4rN5mSKNrBASguvfrMRG9Kaetc4UPkt",
  "key33": "2JA6K9VN2EmAX4MZSiigmXGJa6a3BvHe25qEU96C4fNqMs6nuzLMnegj83cLdXjLNcoUPVhcUJzpg2sBp49sin5P",
  "key34": "2upJCM9Ax9SGSaBLDitSxGriefkwN15JFuAF3ZktzwPh8jZMujN7HTUcvRBHJzB81QVeLqSiGBzVt3UEaDDB6uWJ",
  "key35": "41zxrRaYGixCfP6DeFKAeRLZijmn5oWp3MK2uuoD7HjDBAbfR9xKYkULVhSz36BMoW5Yxyg4YGfRmHQLtTFVssfY",
  "key36": "3siFQjxy7YJCSfNcV7vGX8g2eqfLXomyua6Ht3dLyMVYdEurmyL1CWLvd2Ghvx47RKfWrCBjpFkSJhhDLbq3JKeA",
  "key37": "3uch4omUnuYTJW6DMqggrMC2dwTbubfZ5k9fytAc9HMScaKN7CT9Qh4hWgyGoevJm7htFpit4VXDp7eRqKoD4vkY",
  "key38": "k6zFJf48apKzvmS578Nven6FLBwWH69nNsKHGZNUZF5XAQvJiekBh2zHqf14XgByUCAZtd6pqZTbwSos5xJUKvi",
  "key39": "urT4PiJ77HPTtBarPwpW9aApsZWih7S4d7mGXEx4D9zfsvX2EpTGwj8oTLZi3xybegzofJL1a3ktovRHDHvfLvH",
  "key40": "4Sk9eDTLQxmAUjXemEAcJx6hTD1JWNAEnj4mTGWksvfrXskPDk5TabomRkL2Zm3W3fqMLt4HB1BBYE4smVraQbE2",
  "key41": "4g4kBXjSPrAPKHCk16YtT6zgXxEjTVWNWA8QhwduyFo7a7wBAJvx4cup8jbvEzvvosRqUhdWsbyR1g1Nd6xuNCBH",
  "key42": "4tQG8tkMMu99YLity9PBDBCkPfiyTf9LcMvpnFVop4P3a28VnejFEmVLd6NAsdMhrK1XaGkdm15dU6xWTYUEdMmv",
  "key43": "5Qv4nFqaxDmueS7FCNzxVJrk6abr1rVjqQhbyWcfTNBfMNKgZBMhdxFGfV7a3Q1YKZrXPWBhwuhsX9iDLGhnjGFi",
  "key44": "46Zv2KHsirLgu6Fi7zXzJ8dYWpuJFexqd7wr2LJAoo453PbsfZ71muPtXRRJNaS2UnfnEtrAccbeoAwpbeYXnWX5",
  "key45": "2WuP3Vq6kAfQv5azfWqSCGG5H69yi9oE8LLYAWDUmURKdvwRZSsBMstCD8vCPfL8F5UGEiwLWoPdy5wJrXqvYaRu"
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
