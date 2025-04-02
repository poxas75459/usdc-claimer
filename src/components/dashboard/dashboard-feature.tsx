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
    "4p8npFBK22yzrEtaBvPJxor17xLrmwAqj2AeevdC4FHNnHppNm6PpACSVyzjpXVYHs7TikKx8AUbMTxegL42gCpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAkJZWWP8jUQgKt6KiKNrLVQz8Eve6vrm8rjP2hrAeWUgTNHpKq5igN5k4f2UFNBsP49Lu1QDqrA3KX9Hwspjbb",
  "key1": "2FVBdXd1PsNWWBbhkUEBTamtFA7jhFGeTe95fkuX9RBzeXva3uGEkPXgHNX1DfH5grw9tmgpnMkR7bJdNR3v7h1u",
  "key2": "2ETsU6vcAq6k2p9fLP2QcMdbg93TVBhifSyNWDpNWARgaBtgziqoTwmWrqfvsjSDk7HdtpVkBvprcbjEjeBZNnYs",
  "key3": "4sG7xs9qYwva2YHbKcCvidguEu2a9eeXLRtSpVPL1V1FtbaXdnGf66XeUuMs2raG9SnCiHpF6VhtZ1daLaGfpEn2",
  "key4": "3cYW4Ptp2kWJc9iKximBvHon37yEAWNF42Jf5bJGGshGooZTZR7bwFd2FwukNT6oYQ2CbLafmMkckMRC3QRK6H7z",
  "key5": "2omBH2Y1BB6rpQrGBUfWpg8wpy6ecUucEfDS5NJRJT6sAhxXsUbAefYB1LCtpLmL7zMCigUmKyjpdx6Bz7rZM9iD",
  "key6": "Uv1M9oFgXdKPjMMbYkPhei9aSM9M52MmF2EYzwBXPeH8p224wRSgNwAL1aKdafgunsjdHz32Tufxe8fWt89fBUr",
  "key7": "3hHYt3honxZuTYa6wVYhRxq5cmjj9CjScBk5W38Rv6BYhVkw7viHLebRihaNubWmRaMPcstTn8DG9dACsL4k4Gt6",
  "key8": "5Hvt5E3xUNwcckLhdYJJUos7GxRghMaHJoXsmT2Tai3Be1rxp27rNkPF9KVFhWDTcP1AAoCxqDwHCGxnuHki3MZY",
  "key9": "2QA83G47BqKn68QqrAiR6KtXxqznYATSBFSLeR4KUoMGW2913W2gYmZLvEDGsfkfCHkZnqTDpyk5Dsuu5com37DW",
  "key10": "c284o7sZEh12wT3R2XFj39ire2QBNuNfHxonfTT4WrHuECxNC1KUKyZcpWv1VxT8rCJoMQvSQnAoxZdFDkzk22Z",
  "key11": "AkMKmbuBTjod69rdEGKHLkKx9gBzQsLYnEUibchtEZc5qGj8NCEWEVyfFP69JKDfkzrTW1aE91MaVcPFFZDaYV8",
  "key12": "2sdPSmWJMMC8AvHVGYXrWF96E9UbCatpQakJ9apDeUotqU46zU5H3q7ua8MbnchToSd1rgebMGWyF9mfxiT9tzpc",
  "key13": "5TLiZzvESpNjdUWDNKqZanhJxMKPobXjkXgNoYkkLXzdyzpXCmKt46jGnwutKuD7fbfTMETevN432xdUUZjDMP1A",
  "key14": "4v4N12yGGEjcTCVth7wsreF8WkervNg8CfqNBUghYrqJdxdoV9uRjNRU6QqbthoZ4rbN2ytssQRkQRrQA7vnXJPT",
  "key15": "2T6GnGMbZgCMfFDVC9g1mEVh2zei1AfEiinU4J5oH3ZQM73oThcagGjT8joBBHSeKjTT9Y65tY8RJeQNWUkYmMGn",
  "key16": "2abm5DUWY7m1ZbzK1bZLxGUxGrsPwt1sJQemXziBafo6dKnuS1Jzgqdty6c5XSeq1UYkaXj9JP2dAZB6a96f3twb",
  "key17": "5vTMLw4pkf1bvft9RLGMfUdJ5giynGKyPnZe6HqWDoAm4tvWUL75akdi1MUP6SyCbZDqVXkjpeToeNYYQTCBvYMK",
  "key18": "4jgSE8U7WUtFJvu7Gut3bNJbDQMNwEufFxU7wkBPu7Veu9TDNC2DQ5HSs7k1Z9dSja2vh39fcyL1GohBrSMm2Rys",
  "key19": "2wmpGbhcamBeC3TNVXeJe5BcbCPQwGSDTKJRcGde2JXuwmX5jc28NLzeLD7ytC2vP3emq3RSN4vKhQWUcuBppsxK",
  "key20": "5qcyXveyrb3sPVNnL3wv6AqC3JSaejXoZPMwxXEpq2RofRWWMq96ir3ji86DVXrbTtf4umrXNUarqp8G6cCVcGfp",
  "key21": "wykuuoQTMk2Km3AqxhgZfXwwzAm4hWrAGT9mub24WcLB2QydsePZERreqyLspYsgJrZJh3vVpM3djdre5WFYNFt",
  "key22": "5MPZRrK3T41U9ng2XytwAS7f3CTzGtxoER8JZCKgFqqsrX1T8KyPf4aiGpgU8nj33LyxtnQ7oxh3KSiDSVswvVVv",
  "key23": "4bBXVskVHPyW1PD2oFdjpbwVnk1rgScVxX9Wzo7biUxMWMHpUvtmEcCmyJ5fHWquUwPuTXzssP8gM7nJ8g42NBqs",
  "key24": "9ZC3wKRCQYvZoXzwF9ySoCmNZTG2mRw4MPMCnu61yb6UoqWdSAWpt3kwM9rV4TyAAnjtoYHk8DKa7C4QDjdq94t",
  "key25": "4HV7kopCLVTGDkKzz775kKymx2WqkbFFqCwYmnYVRzDBd1UPscGm7f5X8BLnt3gNq1M6buhkJKbRkZVyrdXBHdEK",
  "key26": "26KPYBwgcFRvsca8KJhnxZxapAsyFEg54poQmRgR8oq1ATvb8iPGKoTbFfQvJau9967JsF9dzjStQSD7s9kzm7C7",
  "key27": "5c4cTDXLeoCmYWgJ21c2Y5N5p6kh3mN7K4H5F6QdcdtqqoL5qPLYu75whZzSyphtqUjvHmKVnSt2TTdyGEggTm3u",
  "key28": "hwPxwyzs17NGTkRsfnr2thm7PSRWs9Tfa5jkqB65tpYykH929rqTsi1aNhvFuk9MCTZLmf5HjF66dxur5SREQ4B",
  "key29": "56WnHM9kNXM6W3vN7X11YkyZunMp2AXdM2cojzKjAVotzCZajTPs7CjfztA5asHLX1X4vZi8B8eT3qjweXABnJUm",
  "key30": "5sEfSuWZSZDNSDWRwPGdYJxqnjA4Rpy6ZNwPPS6dSWyLBYcMwM7nbuxBE5Aj8HRw1eh7kcua9B1E6sHUs6C6Vk2U",
  "key31": "5vS7NZKx6nj4QuKMyhy1Hz6mmcB2FsBdeoFxh5uUZLF32t9emd3JxXzssVV8ZDR7rDBxKFGz3csTMTC92fKm3ubR",
  "key32": "4Wc6bnTT8ctuzvVAudDajgMCXzkwx4k7wZpMt4AwprN6JT7hmNdY1JbKST15emgXqh9qHned4Yc1RwsYh49jKVHA",
  "key33": "4hGDYLfoA5NzZ9AuGz8DGtwer9BQeQYWPK32CZJGnZEoAjpS6FkJMEYP2YFfhtfvSL1uaJjZNoJ7ijbaXFzdmHxj",
  "key34": "rhWdLUkuPeaKuLGPVsVHyZmL18j4ryuvBEJCvTBewDHJ332bhsAKkDLvamPEcTUeXgcMZxmd1x5jrD4eT8SaCAF",
  "key35": "2aSuLjRSUaZ6J3pVQzxXM4Wun6neAmu11N3RmF3tmHmFxLgDQpdWHAJfTs3jZJb9gpatnvyjWgA2avFrCAb8j1oM",
  "key36": "4fYqiAfAj9MYpyTbUpCbcsehXKefDAQNSgyAyHhZhNHASUiiTkaxe9uMp93qY3Qeyn5LeZMyZV8jCefSSDn2XdTJ",
  "key37": "3sZzMj2acBSqPD9Lfg1nau6X4iTBxtdh2vony4kZF9YFGGvXZ9aMb2JYGqyEvqtjXdkCmtSmoLAuKigCHXA8DWjR",
  "key38": "5Zm9nwm1Y3sA6YQfAkK6cYQkB3S5x8LTJqNHH1EwRKdDktFPfpQPajbU1EqB6BPVW926r4f7ARqNMm7KjbGRVfJG",
  "key39": "2XoHFoTsXRFZRTxY6VMDX4ewzhmnjYv8gtg9vv6b9UasD2zzpYhyFR3Ku9uD4bhANY84QS9w4T8Pqb4VH1iKwTBp",
  "key40": "2Em7fTCmzBQb24dgV3AiJ9D4NwidKRVKpbf3dqKDZwGuYiM163hxDqbyYaNvkMJDa2a9DMGHG4DTAdCb6P8HyjdE",
  "key41": "5fsx2uWah7FERNgkzE7UkiXp3jScp5t24bUwTfGuSpGyZxZjdodA2MYfJ7SAtrkFuF5tajMBVYKSwtLP6sCo55Ko",
  "key42": "u9YQCeTRBdv2M5AS9S6hnH1fwFGjURy94wHgzxunysDLL4o9YxmNutBNrsDFEFvKpXCsqjVEWwra2m156puB6io",
  "key43": "2PnASUXLc8S5TmgA6fy15rUBzdQ8Z2Kd5vVuH5ACZaDhUFVd6S8uxvVK1BPddLEGbEx7VNyn9FhhhvQETVzreLQ5",
  "key44": "4c5rofPXeJQzMt7mELDSzBejNd7SjA8bV3ZEmtSFNJv3TxPEmJCyqyxPxWPs4jitnVFm74ic96fieES2bAcJosiR",
  "key45": "GcZGA8WtzcLMkfdGgaANo5JT26u7pArRjkxPMbEsKCxNqcPWurWRD8MTHHgZX4m9RnszarBKg5FfJV4QJHbGgp8",
  "key46": "LMYiznaNgqMMHGNZmczVp6MsiD7oy3QsvSmo8LrMcJbtyYo4uVdep1NJqcKqRp5UDqVBwoWxoFeJuWn7v2XD2C1"
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
