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
    "48RTP1bD3PdhxhCrEjn13pJdZQGa4jThLnv6kapwmJZALjpqVacJJ6zJs36DV2g7UYTRDfBypAuyzQXz6jUn2w8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aE4xfjTBzRHE2Xe791Wtx6C8iF3jHY2yNS3Gqb27wYPaJjGeqmupcqxLYeqikA2R1rRfH7YBsNTs5fPDxB63YL2",
  "key1": "4socipuKGV3X1JRyKtDkJmmvS1dCr1w4RNHoozotGSVo4KxiQSf8BNMjGbKebcUiSrckhq1R6gXugTMjid5419Dw",
  "key2": "VzV9fjox6vGwusU5hKYeK5p6o2veduxLoMU5THFRUDhZmbGWHgctrzK6vX1eQrcW7QEfVFAEApqMEpT3Dm1LYBp",
  "key3": "4C3R5wbsSuRWUEQeWvgmNEckY8HtzCTSBt8vn3WKj1hgrs9RxAGsdM5GuifW94JYg9ibqEdVzGCQi6HkBQbtJoVk",
  "key4": "2Jb5f8fz76TN1QWN7QaWud1SE2CMnEPEvMgHuNAu6fnWmfNCT1VEDCbWLKA6omMsMVZuqdoiv1Jp8GmZhsAbQBeL",
  "key5": "3exqEA43c1wqsi8eoGB7makCH3dsuqhTcDK3yWGAECic4cbBAJWNAjqcfcQijxuTg25dyJNTV6PVDVXfC2TbTwfN",
  "key6": "2eQjY2Qc1FwAogabHoGQq8s12pBchKHoR9R8FCZ8GwLaCdp7xmPdRXsM1hFUYSHF9rKpEFwuavyiPvkgNXC39aYH",
  "key7": "4iTg7eyneEG7hozbnH7nmVum1p3MbM5NNjy9KnZXs1JHfmvCQ9yExk1hBwcG28nwraGCSEtzs1PmN13vtqUmBfKG",
  "key8": "Q6mp3bfqZmY9hb5LcTkPUnw2oWs7V2a9MH8bUWknHUxQC4mb9JayQhHT3LZmNFapyG3UEJRGrXj7zMUua8u22nu",
  "key9": "vjT8bb9drGShPnmQ9WaDEXuVStuje84tgxaTcJR22whjiST7pW6JfaMBxFXaojNaBLuQb588j88gQLxrGCPFwiC",
  "key10": "41mDSgGsH71vvbgPeioWMdWxNPHGRRsP7GE6ydf9wzBmeecbaBXemxe419q1abhA8ojJb6mUCSgKMPyyLezQHg2A",
  "key11": "bfGu32XEUmwgacMUvibUrmGzQXwC5fEgaGv4ADPBxtZunKeQdf3XSrGtj5ijFDdegsQfeEicn2hn7LHXpHKe2jz",
  "key12": "4QWhuRJUfxxLunZq92ouQZvkshDkjutS8PBEDE68DGwxRiLFuTqaj24eMCNmd8wxpriUGsm9ZVRxE64NusFHu5ZN",
  "key13": "5Qvn43bqHSpyBdFkUP6Go54AGJ7ZoQdw34xTc7RBjqFqayvF5AVrgNAvzK8Nkr5Pj1yhGDViN8RqCR45YdnUkBk3",
  "key14": "39UnUjZQ6AWpvuLUAsaq6yf5RXg9P4iaiQ4ZBU6Vf7isD6BZ6mURsuhJgtsAP4oQRbU4j8ZJgLGC2XrFBHHYbbzZ",
  "key15": "4psoQ5SDsgK6VToVEYPvrt5vz5eEfy4mcU98bFUDqZ7ZJtP7PsEGB8bCyzSiU7Co6Sep3EpiDD8E97qM7A1a22ws",
  "key16": "4VpYMrvZVMfY5DWjH7xtyZ2ZVwxYC3yHNvCaDiZn4ZP9K8kWBzK3F6LemfTxvSxLCsLKutw8W2qrykLRiiZ9SNY4",
  "key17": "4xy3LuaNeJpHgbUdbP6R7dfiZgK8DCLXeDcduyccwrCjRuVkbQAWr7wMUKQN7sKiK7vVmfqXh1WxFuXPd8pFRqpZ",
  "key18": "2mG2ZP3y5rnxGgZ6ra1okhrKN3RVGpSPVmwwpWZobvSsy9AVU1KQmFsQ2r3erQkK1tsMTSgHT8Th9u2the4YoeHZ",
  "key19": "4rWXUwsCt9JvmVs9vR65CP7NKTCLn1ipYTwBgM3WjTir4RRPDEoh67EoaoLzoPu8HayqW6P5yCexSJxEvgVTcAWs",
  "key20": "5gtjzQmvUYXzM9xSmnzinW64GSgHCA1P2v7YyxxDoG2o31aVPYpkRTR3G7UgJoCiSeiDdnm8j87sj7nS5uvd64hX",
  "key21": "4rRP3iz1wygNS8fkPDLhXKcaHhW7ruA56KKZ4PjfvyMM9sRrSneCnsq5Cidpc2pVooMCp5qcBtb9NzaduYjh8BtU",
  "key22": "4c49Gwd3PCUHGs771YBsXRPVriXZt2nicWjP2DmvqLzktTDgzTp4u7syKY4Hs55g8Fe1EemoMyxQUQnbahd8sGfF",
  "key23": "5gPkFJQqoAWqqC2Z42ZTXbGqpyhSTEaWHXAjNgU3BjwF9fy7y7TBo9QWmQfovXF4G58q1K4FJPFhrDsL57x2bsdP",
  "key24": "63GWyrhPKdZAdfYJX2FcACF5mVAAZt9rhvX93ZvMn9CPmrF98zW5K4UevbpaHrRPLjCnMmRN2i5rkP9Tf8LjpR8o",
  "key25": "2ZRwRPCatmtN1fNGjhjCBzsiu1q48JRGZVcyLAHdjbh7PfWwHXoUof5xxvunNcaj7ZZkPZ45pPUCWcpstMgirGGg",
  "key26": "3UVaQrGFa2wTuNveibgyUmJS7WrXRTaQU68Q6nsbNdMYy4cWY81nBTJoeu65AC97dnS52pk7ssHKxAQuumjhBjkT",
  "key27": "4tqnioJPZtWVpR9DqUBagh1y5CS4chn7YyWt7iUWygqV1HLpYUGFYHBB4yaKMrx6pK3asi1AKf45FQce2FttnpFP",
  "key28": "5EMZLXxoffzC9gYmg7wjYbpiaA9agcRqYoNmA75jvEv5fqgHJgL6WhMcd1yafM6mthrKciEJbygJoZ35GoyGdTRn",
  "key29": "5m2ZL2ddivToXzDkF1oodgABMhgQzakxAnuQiTGSGXaGmeY6KBSHiaMTnj9DzDcgT1kc5v4Fjp7SVkranRM2b1G9",
  "key30": "ob7L38ukLz9PAdxjgL3aEtTzgrD6E6MMBHfumZE9Rib9pSvjmsx5zk6aVgkagAVTx4SzCVapTduJppucbujyGr1",
  "key31": "2TKKr8Kj74izNrzwiAtnYxQMZQ2QPrWKkkDiEaatvKePkUSzJwwZaCFMtXPCjKxGEDozDFTAx5oqaXX3dqkrEW8g",
  "key32": "55jWriMdEoTCNoLc9Pmpo6WYM9TCgNdz2H2QJ6gP9RzwbrfhHxw88WKFgHJDMzptY6X31PGb9u3nknHx4uw22KHm",
  "key33": "4MFD6AAk7Lhva1VMc3nLTzcMDv67CRAf1gsQPgx1YkSKjM9CS5yRCxS9hRwFLG29VyYJry4bmxu61p8AWqX9veFJ",
  "key34": "5WEQvnVozSMKjMtY1XuJ6Z1Rknx5XqTr5AzAdAY53eq8YULkoSPC888MgsCW46kKMUytymCj98SsiV7hPUnBXVHr",
  "key35": "4bczD1WdQKZPgUDNBTGRzpmqkPfALzT5dEQaEZa52PiieWpk2mJcSBYnNvpxDNWushx55NbuQjEhdmQfVwUqd5Vq",
  "key36": "kU9WLhjKGDEgyYufsrfuRzPitF4tCnmdnZNtRTGQcuMe8D9X5keBh7PqJQ3HuoEvchx9JjjU4HPdcYCc5K6RGDN",
  "key37": "4CvE95M8kBHahzJXWGhsppAstFu6pNvZyLipMKDJJA6h6eTgTPKzSMa5Yegy2ysv3AAyzdmFGojQrMs4hsuSVtdm",
  "key38": "5cFjhoc6iJacCgdWHDaYqVYCNXAcwW496EMgJcyaNTznA3LnoucZzKnTULLvDAh6Gy6KSpyzdoEHjgNg7TWk8Vo7",
  "key39": "656dWLNfDKuA5iwWRsQWneFMgTJtuHymDvcRTppKiFGytJceQ1aU4PARm2xYwTkxXMjuSrWTgFbA46Xr14TENC5s",
  "key40": "3Xq682izSZGDmDkE3YSfCRC2NUdyYKX781pdvBqMHbhhfwJcfSBtUnxzG5C59Am4MnhPmKMS7dSeAy8ucR9ugswu",
  "key41": "5CQxpuCXUe87P1GGQqM5QTwtDYfZN6avqyS94MFS5wtNwW4UU6nexYCcLAgWMwSKVRi7cVnSsqZ3b1St2pwKN48g",
  "key42": "2V7RVqez5PJKHnTb4GUdLTW5jctP56whTfKR2ZfMNgaVAvRrz9jAQq356HGiEcJ3mqF6qJBSJLDRbACBdpfAterv",
  "key43": "2r7FCsNmJyzt95uQh3rTmdnpmzpvMAQuQC4ehBd7ZUjZ174GSpJznYwNnyMVLreUGsnur5jpmGiLQvofwJUKaEib",
  "key44": "4T4iYGVoF2SRt3WiToKRryF14LjG2tCp7dohwiKcd4g7pTWQnf85R9LRA5yMG5o4f32XuJR1tAdyhrZqd7CwrFgB"
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
