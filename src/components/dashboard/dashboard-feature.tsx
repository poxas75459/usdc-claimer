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
    "2SE5mnEPKHk6hRzbnkBL3i1aa77rfAVYhV7s1nMEfD3U3Rib2oPAdHDvXyk1Y2iZmE2ME582wFA93RdgFmzLfHtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfuYRkuBPYqB6Y35Tt7PcDF9P6jB5c1Rr3tbry66P5HGESNMJASWe37egfPPRKUYkkAvScPmfUoHtePoJpBWPLh",
  "key1": "WPgQ3krRpfQj4hkrd41jMN5DFnGCubVpD5oZggLo6vUkeMtrcVQc9ukxzvmbd5ms3SPEPzC1mezFoVh12QbenGy",
  "key2": "4M9b7Jd8LgFoCmKpG5k9nTBhmHZSrhmjU1v11S3zKQE14hiXewCd5ctKAjJoBuhDdyPPze3WxAeaawyuJJkfbdRG",
  "key3": "3rYPYWvqrMz52Cw96RQxKPVxdpH3Lzth3NLtXkxmz1fWXrX9h2CBxoyr2UNJfJvrjBMSqaxHXAhMKoVqAiw1ebzS",
  "key4": "3viiYR9e7vLoKsbwjbtGPrGEi7Ai3RCUytjR5yN7yEnszwfWSFQTcHuMVrWFMhKdtP6SUiGTsu9jMijjRLCj2deV",
  "key5": "3Ruc23NcHHnXoVqSsFshTWwm2EYe5P3SFamLybiMxqx9u6Phu5PCLUjShfgpx1XKq8SfdeZengJvPyVDs4aaG1sk",
  "key6": "2oRPjC198JBgQEN4jj5DLSNL94BEVQHAdXWfS3Yr8x36YQAYXo6ZrzmVvLK6RNLbWjjStvZV98BE4JetbBi631un",
  "key7": "5NDkXYEnPgLHECEXYnXRAQpnNYHEbyuhssNs9yAejj48E2DjbjXUQ4pGqFNj9L4gtkBrqwwnx96Jew6ZpYAfdDuq",
  "key8": "4jCJNHHpq8eGHK2j1D25CS8aLLgLsU4WZyPthtT7XsrZ5pvJUWQ6LbDCu6VYm7UBaKqapz6fAUGVuMpUUGgpHzFr",
  "key9": "4ycerVTNq7iTFudNhwKKHGdS3LajnSahhXsL65yxCkHeDzYpRAdBm8y9DWoC3zk3cna4ZGGBKV4oBD2jpWdbcF3G",
  "key10": "5wiWkr2tVsS3Grz4bXvrhkB5tZzzLyawUQLFotRyTzTEtrUgmSfmRgKDGJQX9SxBa4wNjAx1jXiY8HfnqA9TUeTJ",
  "key11": "2QQNvy1WDs7HL6bjkBNcKTMB5jBUWPAjhBqsUFor5oxLbeVewKTb5EPTPD97hbyygeRp97dPgNCEJbhLJSN5XatG",
  "key12": "3zEe9FWmXR8UHEJjczjx2rKA8PQ86hy4SSRXWEkvYcgPoYLzM5f2qEkLmQsU2N41bJcjJUn7XFRyuEXr3bxAAzH",
  "key13": "5aGyhPsn3P4oVTRRudvb7WCRaMkirCoZc1J2B3cuyptFppxe5rhRKYrFGhWureYLbJF5cFpc69hPPpTgDWayup7r",
  "key14": "2xuMKa7QaQ3MLKMsXFYmdoXQ74gBJyUMbwqswSYFgfkKGYe8ARdp4NB6QCydG8Kehoyw4ueaGw69yEcxikmXbvPy",
  "key15": "2E4EJvcX3WthgKnnymKyZJswkNBKEwvbhvvgpsA1Di5JZ99LxNgF8cM7QRPgb14S5783ALKZUmU3oyGcFEnaiFJ",
  "key16": "2GtsQRCM49XYmwAeDyV1a7iMbVsvXWY3A29TiuyyqsxyvNfaMaCxT3h7RCHVdNXVMt579hdxG7chZKPg4Rzmwc9f",
  "key17": "2A4Nypv1tdcLCwAstHDLCp4f9Q4tYByq9ZEaC5sBLWoByarfpjVNHhfJqufi5XpfmurGoKRbbyKRL3dU3BYP6rFc",
  "key18": "3j71522i5gwptsQ2YLwY9b3unVM7KmDNKjXxQseUmJUdnPRa9kAokAGpezrgaUSvKEyqQRLrDT46HfkGAGYLGKkV",
  "key19": "4MLEWyb2xthYQ3Y9n4tfMZARbFK9sSQWZUzkQExiFV2yfgFLfT9Z3jj3N1NRMvwKanAWboBpShdsuo11zKK91CmQ",
  "key20": "5gLVkXwJTknhqXkoiRWNT7858fL1UBUS5oE6MXsxzmZnV8xB4PeViKHYTDzA5YpLndQ8MQWgcUuX5uhjUTiWbmFD",
  "key21": "5dNdyGKWGvdcKLJKxdrnP6K3JSVQroDmZfrUfTkyrFYspC1BB2bRCUX8PVnokcvjz84nTSUN2GDbvEQx3EC6ausW",
  "key22": "BLTXrbHSuQNypSucqACMbLRdNgh6SSr7KW6KhHXKRB7sDEkcpQy6WaPE14MwMGwTj7DsChTgbihCdgbckHJGwwW",
  "key23": "DTTgij7WTSkFDjYoVCeeZS36bepnewX9CtmMKpCdrnH8WVTkzLherUi6q2j7PWpCGvX45nh1iRvpJAYCUKLSZvc",
  "key24": "27QDHZwtrYyJiR4xafB8RWpBtBsEeCP8KZDswXiT234LybTvr2LxQ7urB82n1Jzh36hMh1eRyJsX5w58hKpdoTfJ",
  "key25": "5XqoCfZTMo3EEKV7JrzdPa2pV3xKEAErG6yBEefepeYFVVJKAhgb5x7SqJpXvytjcjPvX2kTRHa4Sk8mY2R2szQQ",
  "key26": "2AcfaDFRrytBwYAiXYMH8QxBbz2U88JeAPs575pspiMWd2g6a16zQ8Chktz8pFzbLtimwvWju2bjLj3QCkaGa7jX",
  "key27": "5G9Fg8D1tgYgmoYASgeQoaftRyEWhkf4s9S8qKx2ABGknQuwU1GSKP9TRJeECfNF4v1BzRxDrgVTyLkWU9Ydhip7",
  "key28": "4vJ8Bnr6xEcAGSwjnM4SgArfZBtupssGQrSpCmGCnHE1w1ZDa4QH7Nr5CTLbXb721fiEyqu7Wh4kgXkYPxiXijQu",
  "key29": "5H4xW8r1Afejqq2VNwR2rhKTvPL7EPpAzHo6ZQKUjmwdrcsbSQJNukXcqqtK2wFroUXKJDo1njRShALreW2ug6SW",
  "key30": "DrLgC7eJXv6Ztt2aPajLtuRQzEra5GZAK7k2x9roCqRWEw2oNUbwZ3qrKdVbdDiU8Wey4icpmnaApDoyvT5zK7e",
  "key31": "3Sy8sNdPUDmU1eLCLzFiUD32aKfJGStiVtgyD31Ms1whu5dXDL8PsjDNqc7LXQ58SmNZLsMEiA1632W598cPQiZf",
  "key32": "2usEeQ4Jt7Ccdu3p4VVY6URbxtoj8JR21f7j5tHc4m7e3VusV9bjCUNWjrgTrzriiL7yCzCDBJAWi4RsR5CzWnvC",
  "key33": "4j7z8sFLCrFqQwYxw2WftdeTggPd13jvykU45J4tzzwBkMnHLBZzP1tsSkaLmEQaQj21rtBX5HkC5oAz7kV46ieF"
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
