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
    "5HSKaSuKhnH1ifbnuL5tnAgVhfFxDosEhcMWoD7C1SzVDZPnpCPjpxhjCsBbEVjewy9b59icZgN6577jQ172gQb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSqTqcn1TRAkNCofEP5cWLYo21Ca4QjTAx158SL45u4wV5945rcgbuS5qv1QtwGLf1XotQY4jQwbhCqra7n6Uxs",
  "key1": "3D5hbLnFbVuDiquW2MVLGYJxbSt8ngD63VgsguenEEtQNBXbAiqgHwhNe4yL56Rf9uGTxoe3Hqh97qTjVoMTLS12",
  "key2": "P6LA2fzhs3b6aqVG5zssehb5Jtc5A5WQk3uupDcwCMBu6cqW2h1nrdH1onyDeuC2Xoj6wRcQbZsjJdXM6UYBX8d",
  "key3": "4stdFRZf7TYDcZZ1tCwuB561SSJQHVh1E521g1oVpRxdVrJtskhZ1VzCbArW7pbpxZVD4TvJKjvK8TXr8nEkNS7y",
  "key4": "2WH5MuffiSy2tTYXXY9r9s56hgqnTMGK5k84FPiYs7bSZMu3EHcXpHJC4FcZX4ry7V9gX2eWWri9ePjEqfwcisTD",
  "key5": "3QJorBAMfkrt9eh7m8KuA5ZNq3e95nCsH43u5urtVBpt33HDBYcSQstxc1Ejn4mk2Y9C8UseK4T5Amfdk8MSZ1M",
  "key6": "mUw7tivLJZQsshQfy6jpQ2UAVUNLVdR8o1UAiK336M3m9TFxwWPEePm1vA9bRkzUuYTcw11LMrPN6Hduzcr1iR5",
  "key7": "4aAMqetCVxoFkdcNLnFuKt2TXMvBuUpCC6Ax8MhhJe8HKS4QjiX7pHGABjhLrmS85WRHGCeVtCimmzQACTomAZvD",
  "key8": "4xf3ZTzHGQ6mKF8T1a5Xn7BQfRFvvxvmckg4gX8sQZ3mr5PgYBGgSN95tUNows3oRxwjhKqGAEbi1LaGe6vpFa7B",
  "key9": "3WCXeZYeeDxYv5zUi7nBqBRLLu2yNHaf1DPGVVgGkvs8wNjdjRFePBgyFYJ6MJo5UZ3EQ7ts7fMbpCmN86TNDxqf",
  "key10": "THv13cNVvXTZQeiDfSQQwcUwEswkbwpJhsoM6oyqJpqr3NSNhRFMAwFR1idDAC28RF2PyUvjDAjPQtj5WuoqJyD",
  "key11": "JKTg1Yh8E38WDbcvLPmmpgDTcZ5T4W1tqUxPnPEjqWvrpB4NuMrkrFLd9xRfZSFGrd7KhupNoj951PC1DS2Mi9H",
  "key12": "4WFHtVY2XhsaRbPxtoTHGgJbxKx7GYACUdzwoP2ZH4Ufv4vVTcKvdPegwWk6avLX2XkWwWYRUd6EoUpwtgMDXymk",
  "key13": "GzitXnSBtAQxZDuZX45CdxLUDWwkC8rtuoVK6L6f5TEZvvhWVwy97eu9kUwVNWEUGWE76T6oGbDeB82oZS1UYs8",
  "key14": "4tsj1sVabqj8Gbj2nKpoPefkaHqjiu9god64zKw8buW3f7YZ6j4epAqRwNQvVnpZWXBxCrAb14a7Vxd1xCbFwj3U",
  "key15": "SVkgD5nfgbqcbPPoWJRdQ1Lf14zSyj5c5LUarRS6NMhHHahNQYiopA5F39DhY7SrHom8yCexRbHgAArkVQWJJLt",
  "key16": "2gyXa91gthJbqvJqYYZUjcvEqF3GRvR8kMvXbhrjjgGGkXRpzUy9dZxMUQsMF1hEW5HR4pVTobcTAgbt2YJztLqa",
  "key17": "3DQa8jZoKKZz9zYHXE6zNvBCrBwyLXX8s5sTbj3KpPZTtq5Fndgmp7y3Y3vHPtysnczddq9Agr7YRTQHZSecKUG3",
  "key18": "21qx5YDWLC8SZVByrNQnCSYyYz36ByhPvv645jSUgiYSEfjiahFXLfQUtkxJFiVd8AStWZfgTxNmg75uyKHxoG4s",
  "key19": "2x3P4efUaDD7fzJ57SBA4ZBnKS9D2ka6xNUxCRmNKn6K3DbBtMCErVHGt6ivvqGR7GA4XoUxTNWZnKmvEsBefFj3",
  "key20": "4tN62akvHjtYBs39Btk9X244KQx14Qyfdz7mWfgxsvBy3bxDVc8J7j54ZZK4nFCQy49wzwuFqzcs3whNNcZjfDTj",
  "key21": "3sLEEXFd9GeGXWdtNMg8UtC68RxdanwrbSwq2jyFbdS1bENCrtAromBBacgfvyAFcudaj2NDvLWSsXSi2SvhUqrE",
  "key22": "2usbvaF9tV5k8Qs6cQMgvdHq4mbj4cxKJf5CEWsPHLSLK8sf39UnbXce2aYhAKYzytc5Vhh2vE5UcvoWALCB3bmJ",
  "key23": "2iaCB3YjuuTkFCBGhKrBuDJNGmmyTPdH3t5DPz4k3FkbibHU61T8bxCrmN7yegp98ssU85EK2BHWEPwWfjXZCsdN",
  "key24": "2yQh3fEEhaRLvMnw9V83SnevgM7Zx83fhoq1S1Nm8syhebAN8c5Cc3NVZTtaPYxVfCx32Gq52m5RDMZffhkzTpGy",
  "key25": "3eREJEYALgmVbwLxPnFGiu9caF2yhZcSVNv5AuexgDPWKVZrGqD4C6Se5h6gcaxwPmWsXU78fDu8FM8biJdAJZiF",
  "key26": "2a819UnGavSBiktAstDiVsah4tn83BqrpKmoyL7xzG89KcFfv5CCLoG44kkyAQxMAjPWjURowdfBcjkwxoUNsDCp",
  "key27": "5t2xTr1PcbrpkTCVuPYpap3Fun4fQ15BwTswaJZoYaNphvninJnATkC3c9Sm2MiG6A36HLM2gTReBm94EvMTeVqP",
  "key28": "2BxddesaVKQYJoEWvZdd1sM8cq6TYyNGisDvyfGQc6Ux8UZqeWN6xroEAs6WfjPdMhiBmK81WNhwPUGYVQtApfdf",
  "key29": "2HPe1wwGFWQPnUywggHGtj5D9oA2AoJrsZJ9yjpXJrX9Ydi1xHkhdSB36h7SczP39pTQRZyZFv198Y72WG8uUr76",
  "key30": "5RoGJ4TxBP7zUW3PsrgDhjGnTucqtg4yy8XLAczgNiAvHrkPc19rPwYk7Pw5NjXNSHHVNFMCD88bhTsvaATR5vZN",
  "key31": "257ENdW39gVn7aZbAbuPvhUJTMS53UMev3cHV4buXqZFpoF6btHFsW6KohWt2WYD5NAQcdiJBVbFw4WJm8723NKS",
  "key32": "39VhrjFYTziYRaMEmniHQ5Gmg2Jy14QKSYKxPFap4gphEtWvS1sk3p7ZeDePwFUxSaS6kM3R9M2Fjgsg9Nrguj7c",
  "key33": "4H9VrfKfaaWwcyY42avU2oG4iBFPVXUJNKHhDN2NiiZsK259KYqCEnDQQ1zchWtJHC9P9NZ6QzzsN78fpxwFKhE1",
  "key34": "nRA6zNf2sA8z488MAumHvUSUdyaWRvBGyWZDu1HcXnae1s5M6EHRP8dMA92X9TQppbbMrvy1xWr6JmfwXmAWFCM",
  "key35": "4YhSrPdcUcqrz3Y7aTUSSPQjR9qVFmN4eQBrW1XyqMiA4y8ZeefKMTWMfS6gRX8EW5oNMRD9EQxFUariokbY7gPj",
  "key36": "2QDUAut42LpzJTJvzgUN3NJaQbA6TgSwpjnGCKAJJCs4DXmTfdnecefHktoRHVsuoset6qdMRrtuCRkQGctetCsE",
  "key37": "5rkRcUJqUx6sru9YhSFpfJtNcsehiYvpPu5efT1S7LqkQYjPZfiezfKEwJY5sp4HhJQViGUxKz6R2maXokrn4CTd",
  "key38": "UN88EMg7aSHC8x1f1kWNX9AoxyZSk1676VKghyYspmedriyhLkCZ8nsGT9VsNgsDpdS3fPY1meNWiEqECCnR6iH",
  "key39": "3xJNirWqjTRGUesoqARb6oJqk9ZDhbxryZTEGzT2NNvTrtT94CuVy81Ujj1HJXzR9n14t169ME7Won1BH9tTYEiU",
  "key40": "3Q4HmAcYc981FLScEQfpaPkvB5kyXf2J9VZS4T3K6aab3WQcij32MBN5Cd1TXk6VHo5k3PCKAbVMPvewVTGsF6cx",
  "key41": "2bacqGNCh5YUAqaMkmn7Z2kyGmg9zNRy6XBQJM5PenFWbzPEiJoViR9FPfoGubuph5Tq4r5uurBwjxWpesKVGLQN",
  "key42": "45HpED1eQz8DQqFs4HWV2nWz8QYtuxpBMTt4fUtjyjwyua7mBeXSWoqnt88iQ5NKDvgLiCV3CVYCjitaWWZgDZR8",
  "key43": "2n9YWqx2z4MeAHUTtg12A1Eowy7w8hd2bagjUTSrFpC486vF6qkZgkqhTV7dWSsDKHeiSoE3UyhTmCrwzDsGbUoQ",
  "key44": "3CwEfzmfRRzHN3wXC3LAQ32HrSC6H4dYWaCZo89nm1Xu4T9MQwVLz8RuQbvdSNTNkcHRoXrspo5gypywQ7bSedLi",
  "key45": "2hbNyu5RPmtouRKhwnoMb8mt17XJ1ypbyudzYreSnbrdobEewCbafMvBiBHfe7cviKjxwrcH3e5tv1QB59AWxiuC",
  "key46": "4JAAj1SgnHECfxbo6okE3yxS6VHDgvs8LQy3Laz1foEJbyt2KYVnNtfy5dqQV54udbAs5WLsSXAdpybAQpj6EGBh",
  "key47": "44v2T2aW9cnD5mh18oEYmGm3G28iDt3ZRYuDQQWB9Q89m9fgTvHE9sX3SzHEmCBNhccn4o9jN3NKrYmpmXwna1Pq",
  "key48": "Rrsrx6EaMmvSuRnpqa5iBiJ9DWZFg5eQPNS2oD5sMgXJP49uTn1urW8FKpkMSTk2HPdwjYik3tQjWTQTU6iY1HL",
  "key49": "46XTX4TgXQWHUMGACRHF2JQeZfeDaV69wFT4UvcnSmUtfZnXrG2biZargbeHKtGGyysZpgABsVEVc71anbgSX3RA"
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
