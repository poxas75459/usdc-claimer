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
    "3QvLtXKbvdmJb8z98qTarzqB1hBNDMfAfbBSZu1RhAWT4vMrwdA6mc4UNqL8a53ZJV7QyPAEEdgB7AMKD47KwnZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQLoKmWQ9Weu3WdHJDKu3MhHCH4N9Nzsy3vts2K9oWwv6tPpwoqixT7SqhLSBgxEpD4si7i2N9hTHzP2zxvWNf5",
  "key1": "44Qu45ruyb95mWqZcKVz4FyWnP8C3Jtd9ep6F68MgvUDDwVsRNPUUDw9k55NT13WUgn3rcvP8fpcWeyghWrzGVf5",
  "key2": "4GGNHPQSvcbFYruyGbQkCN7mbhDXhXwMf71L2JJLRd9egnV5zvUViBdTBj3zHpahjp96kkAjkxRP6aQAUU7HofPx",
  "key3": "4zunpa2uyvrd9ir77aBwseJJNpgjVHsxQo7u8Bv2obYbeYCGhqWjEhs8ByADpFp6zwFGDbn3tqWKdjPYwLtRVDk7",
  "key4": "4KBwhNQ5GBsFiz5Yk6PpNLgNTwkorjeuBS9zqZAd5u2vNnB8iyPgeYfwjWTM2Hbfxfj8hSWMo95svByGsbocee2V",
  "key5": "TFCnB5EE4JkjQcPgQ2ti5HdJy6rHrtuGr7hJmpb1SqZiupQrf6k9fi2p7KPQjbRxFRyZ1A5A5ZSEeSSjyWD8Hsd",
  "key6": "4SehMsg15oBQyfysRQB3cBv3orM6Je1GcmUebioFHFXpM6DXYkfNqtgcekjVXDCqbegqtk5RBmqpBVKnNDGkaZ45",
  "key7": "5yVcZuhRi2PZkGW7cGFEUwKciKSTMa2Gfvi9AUjVnVvKyw3iPymxDXFZbDW5FHjaokMd6sHrjyGu1ViuVagrCWo9",
  "key8": "yKy78Vr4XoaBNkDKvHtgF67wqAVAYNFHpkMDAKxhpv39McYBfYYAx8dzV7GdLsb82EEVwfsMZw5HWLpLypUYFXi",
  "key9": "5wgMVkzFoDiA9mvkTd87CRYoUCNsyT8mbaPgKvQrP6J1dViyC7QgUQZCBowPXg3qgy5vzyahEMiPvDmKQC6Sphss",
  "key10": "2MNth57Kq43bXgA31UoYS5VSz1ZzbnqjP4inh4o649rysyqizpuxPD8EPzk9HjcTnrEXwGb1FLuNwq4zuoDoRwUc",
  "key11": "35CMKR84bsHyuzKbsPYQgSgK9Qb3aWu14mU3pn4vuASx3aaGnWj5H8BCGQAwZnz1FGBjAo8ZbWZcWBL55Tei5CVW",
  "key12": "5HtrjAch38Aa6m6Dqn1VUSUzHbpFWKBnJQZqedSkyBDbL2AS8V5wmohap853tMH9qAHB5BhARrNN3kMs5B3jXDdi",
  "key13": "4FXcmxgf8PAwkhZRJVURZwoYGqwtfcoqucMiLyiXJaEZGJJtyyPSaUqavtQZQGTYDzK33FXwWGwgRbZK9UDn6CfH",
  "key14": "5kS1XftKq1RPSYNtvHUVWgnaD2jYPTFHt999JUKzqXDgkZYCM5pLKGBZb6xp9ekni9ChcW7kazf9YzL1tB1t4qpp",
  "key15": "px3Qb5q44ytY388n9RSpNw7KSLQUFjX1XAh34yodXhPsQkrzQGQZZVvb2qdedSgefLA1vU9SMB56bUgQKdGrXj1",
  "key16": "33iMcyEkpASdftpstrdo3FvYSDeTJV7qcymQQ2mccejsP9XRTwn2AEGDtR2ky1eKdSY1haEzr28XrSH4NjmyPjo8",
  "key17": "5CuFSEnDvpo9aVGcKxJB53E957MTqFLTwJ3giEgHh2TgEnvkDD1p3ttA5RKFsxBGwkcE8x82i7boPT4krARuHYca",
  "key18": "4L4VNAFYJM24KdvbSuuTcxJs7b6zThHBMxjZnKxR1jFsa4qXAnF1aicedUyVyvRC7ZYwq9CSigz1RuMHD2HnqkWF",
  "key19": "5KxRz9qBrJHeYmDPjF4pP58iZ7i6j9B3W4odfp5p3xzd4zsKpGXwbERh8pmJSvwGkDuygS8DshhiMEmTf5Zr4thk",
  "key20": "479pPGWBNCZa24jXKdcpEdFs1wmaYJkJpLPjxAfnQ3Uykv8ZaB3upcZ7ctGCMnMiPPvxwzKGFp99ChZ4xYH3FXkZ",
  "key21": "2XcnJG3iLeeHYnF58tzzGYY94tBJTiSHaxo39uMafnjdSjcPCziqYX2nc9HRKYmc7GCG5BBLtAGX4LrTchzbxJXC",
  "key22": "3EBVvGevsVzdh8feLAQiwHiBJxYmoEduky4ndz7ZWmxCu3v3VhFTDhyiHPu6efdfkRcU7gxuHPbky2HfvcYm5iyT",
  "key23": "2hFU3Nrovdit3aebfuayVUJayEZGRoxQ9tb8qjCdjhf8ueGMjPGg4orESbmLY1gYSxPTzcwvhJAK22G4VSjPr72t",
  "key24": "3BjGsJQvMwoMkGSKrKWjXT6ooUJEgdjJ5xxy6EnKPynqVyURM3Fo9WGDQGYEBgPwCD8VkGBZnkGEbByevFGL7UoW",
  "key25": "5NAp5zUx8LV17vs39BvBEdLkHA4rnyNHazc1J2HbFxutKHXWtJsvuNGTH1iBZ3dKQHAS7iMjumweLr5bVnVHAbGC",
  "key26": "2voKmUmWQbPdUi6tv9guqTF6Y5UoKH6ZyEkLBZg7m6s2tcqMCzVBvoieJkyHwGL6ZxFFrjxH736GjiWqTLuXWxxV",
  "key27": "3XswrzwuuHVFU7QN2c9tb8qqUj9M2gJ6UwvthJGSJqbt9gDqAeXgzCkXbS7AtWHJ9MuC6w9eVFvs4AfAUvapLr87",
  "key28": "5rvZdrXxo8SBJHFJ87hYkz4RXsum4FtTgLrbhPNy7zK9cHQkVBBVvtXSb5r4PxsCMULLtjNuzFBfyNduWRAnMHGw",
  "key29": "iZtFwfc1chXrpuXtpDeNLHTaQskfkbVNjFfthy8L9wrygXb5mnZzEof3UGH1s67Y6nkUo2rbyEnbrx2vxM2MHjG",
  "key30": "51sAyTShpdnxuzJhKFpijSLMESrhVoVCfFDrRSSnSzAwuuoG1NzPufyZiQy9ohkVVWSb3gSbrGs56gyGWYyAEQQf",
  "key31": "2XYjWbW3XibFGYdtXoFtzZ8UKF7Zdkk9zms4V3u426dGN1i9UXpt7DkoY4eKZf4yhnmKCXLgNBz9zh11Frup6sRW",
  "key32": "4YSpUryDmNod8vzczd7ZtF7FNqBjb1FdoNRZXcBp6nubkgJnTvhdCLDEZpVyJPqscc56ct21fokLronJG35zMqAL",
  "key33": "5pdYC9tyuskXCxrhNNdpLZqLG3FtmPkhXABRpxSHnVdwf9LiPf6zareiMb5gnafz3ZHBktuz2LUTgWaKeWXwkH3s",
  "key34": "3ErTDgrVeB75qRRhCjoi75DpRwPzGBeycGPbyyswRsnTDoxETH9H2guoPS84A7KzUmkzaK5aGa5soQ56ywHUFVrx",
  "key35": "3F9jBwgmVX781jKXsJ5rAigbCjW49toeeHrXzF2w51fL5XdvfdKrFMnG3t5tYHQmUS3uG2MHvBc1yXYm5ZqHTjZ5",
  "key36": "5bm3k5rtQkZ4rZTJbNKqEdi9MZMWqyZVbM1NS9C38sqTwVTgLTDAKcQueLCjKeAmUFbzgNEbj8TRLaZdUFTU7S1v",
  "key37": "5hyRKNiJ46jP1NkBehn3dRQ4ye8LP4v4vnxjarpUGBdYziAyeTC5F289ipU8d6GmU6fgb9qgno19YtYfBK9oB7vq",
  "key38": "2yBkxD6EAef53G6prgcSZPqczmrr1sRoph4ue7L7kBmKuPwF16sUMfWwHVoXveBwC8thuxWcUx5W9tpVgX56abSv",
  "key39": "4Q6a4csZ7BcDzfUMXUME58pMx4EH2o7LFK1Co75ongWkJUfYn3X58ffJb8C9RaseeJZwp4rS4QgtkNoRrFJEDJvw",
  "key40": "K8GgoZesm8NS5RR3YU97jKYwSR2qUnDuNkxN57pVfmJeFEvY34D94QZpibKhbJFqgTpWmJAbKoMuDksiRFNFuZs",
  "key41": "3rxsbn8q4gVXezKntGW48rEwHd56ruoUEcxZhQJ2y5suYDqmNfiBWLhdgsEqD1DNLznTNENabpKoTHWXycPpsuWS",
  "key42": "4dB4wgoF3ooZguVSK1JNd4JBWzaQvGemts83kEhCfbJGyorfT12ve49rvQRHLqXwgeQ9m6y2HpCuLyJzBJxBRXdH",
  "key43": "2mWzfEBc9UxpjK2aEBbDSz6qQXKPXoVpUU8TuiGMp8VPPoGSBn4UhSGN6fWCSG3nQbCpW7L1mqXc8qCSLt553wcr",
  "key44": "4XFM7BL7D1SnqexTfefNSbSaYx2TsB4znHniF79u8DfK6SibNouCinsyTLnD3WGSxLSkVrTv5Kk5HxSXLr8LGaSP",
  "key45": "4otTMV6MXmQnwzD9QtPbhPWdu3L6iZvPWo4CAYGiLH3sPRXTxm9tH9dMMfAoRu47Wks6y4LWAUAcnNQx57X8UDV"
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
