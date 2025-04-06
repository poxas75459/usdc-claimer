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
    "4dXXnnC5HiEXGU2RrFfwHcHfrvb7mkQTdMTrPpcNVoaB8kQ2yvEsonf8MDp4Lim5b3gEGjEZAMBT1RqHVCh5yZTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8LtD3kXzp9WaaDitKUwzd1qt7uyaa549XmucDqReiq4Eangyzz1euULbEiU7zjQfBWM7dcjhZvys389afih1kw",
  "key1": "UksZgp3KafLPgUYDJZ3yx9jjnkqw2oEUYXEQG33niyCP3rk6tpvEujNtmnkxDKzouSfgwaJ56ocnEzcmokrap9V",
  "key2": "4Bqdxc5fYX9ctpAiSBNm7yuRoRco95xDJDf4xvtDnw3w7PbLgHjUUcAnupPs94nFogdWc4uQ99ywhvGx5gmBmL39",
  "key3": "24K86hzXxPmyMpQpHQLQkAY6DKWeaKwjqfZQLt1fr164qUioGdBeX9ujaMYejpNcuwKEkp4WYKfb4k6Rr1V4jJEG",
  "key4": "2EneDprWi82KbwZcfsGtd15kUEKrBe6cTCgnQTnppiyu1wytnjj6r82SFo3PepKd48Fm67CCbGwA2xKkVyr63Cxc",
  "key5": "3U6qA8QMTYSd9T84PZcM5FQAWPwAvkizcTEn43da14233uQheEvUvidzxqBHbJEuLX7NgBuNLsuhgyVw6mqo4mZ4",
  "key6": "2CMkpmds6wsFdcX1YNjoh7LhKac3M1x43hpwXvpBiRrNurMdPs9G9H3UZcug9DG348jLfJ1SocGsPFhs1F9ak1g3",
  "key7": "3GBFUgov4kHDxHzzR4PNjjMKeLz8KxP9i93DF6MVipchiru1BGnsx917ffacR9xxhaMdhZe9Pkb15XGaNdpKSucK",
  "key8": "2j5cSgs5mdJxYUSc3NYkuCehBihFMqjEbitrq56tcNNYoAxXK2PaZKXCiSUtphBmQgjYnd3pzqgdumPS6yRwJtcc",
  "key9": "4zZ4Am81yzm1zwF2GWqShieYeJJns5N4m6CcbSDocJaq4w1MY4ZEeuDAKhobqGU8EygvUnPCUga7GxNHAxamJw14",
  "key10": "3gyrySQkMe15XuEdK97XF9JwU4HGiCwfDW7GtsTq3Z5QM4tk2ckpiKmRcyWe9dYKFUpeF44FC1GSDKoocQ9gB3xP",
  "key11": "2AihmwyC596LcJ1Uz9ikQDFJRaTwmY1bR1KUC7xw6ZkbyfZh6CySQMBEu6CyYtVxhE2Ym5k7WHUTSaDgejGjv8qA",
  "key12": "5G2tr3JY76VRwS6e9tbgciXxy13w4SCR4DoGLCKecRb9CgpaGAgKSbSTvtTGUsn8okJVD5nQf9vgmTaBwDYTSo9X",
  "key13": "2vxYDzbYH57ANjBKS25nS3iydCfaETwpgFe8Ybg1LnXgjCCb71PYnWXQYroHxM1DNrZB3ijRspQjmNeyJtiWD7CC",
  "key14": "64xCzJp5oMVFXPrFv8KzeZSMt6qD2fEie1BtHoBmttNJPA4SLXxeGp2HQi1NadEK9ax8DC12kQ4wx9brNCQiUHap",
  "key15": "3afeco44eUrW4US9XDs5i6EkHrSWsYBRzw7mrg5g3Gauq5BXT2g6CWBJ3S9pWmfoo3dD69PGbxzadYHRS456pXid",
  "key16": "GgEFjcoCrF8tgNDdZEt1bKRhY3Z6Mp2yYASK2XRqiF7BPafHGM9rDMpJkAJ4UW34C2hxtkvyMDutuLMorAZ2WHg",
  "key17": "56RrpeG9NX8AgRQEU8189NyEzAqpGiBSpd4hb6W1yJxGVf12FDzjGZ1fpr5o9Jy8mTu47nL4scyTtDZy6ZKxcwQt",
  "key18": "5TbSDMQywxx5Ka2pYeViEbKfmR3DZzw8E5VaHdxf8CVBGRoSNvhgex6Cs24mTVf2SNy8RD7TN3GKQg34K29SHjb9",
  "key19": "XVdDW24h6ceGmgtso8mZr2vQRErXatcBFRK5AiitZxHqr2oUy9NA1jNxpoC5LLxUfpaUGkw9CuhFk7ppKjjVyNP",
  "key20": "4m9Khohhb92wvmLLUUwxRDt4rRn3Fsv6rNrgRDCGiWW8qVjkR5nJBb4yaBub2T8hVVo8hDUP5wRMgVincUPrbBZC",
  "key21": "5rrjBCYUwsq4ckfy5RJDoLvphQxu1G2orQYPp8pg2E1XuZU8M3ZmGVL756KCEM1bfUkiGjV8hgwrfjazYhUNLFqU",
  "key22": "5tVTkGK5EG7TwqWbiyYRvDMUMQf1AZzZU7QFnCK3FJ46oAuUFfCuPtwmKBRjvv9N1NQbZsfjnUxdWUsoy7yuxxrb",
  "key23": "4MKErJS8JzH4gzuUUmmXmEvuiP7QDC5wib76goaM6NNtqWWooV3Bi6jVJ2vRLSLgshCSiRYYBCBV4PPC8oxyks9x",
  "key24": "3waeWVRAbLBmsCke6769FLRP7PjenFSCrgRRY5252HirtvzNYXF2dkdtJydNDP1vxsSoomn65CobpX9uBAyhzdRh",
  "key25": "XsnhCmQxgnYHQyaD346tcfay2ATUEnoQShPhYw1NFpA7SY8L86tYtQhm1LQMX1FEAhCCUNb3h2idopkYpkdwmYi",
  "key26": "7w1NvsCXVE2Z3szLbnZAz8DswUjJTermeRuMHc7JdkZGDdmfkAu3hdPLrtHqfBaZc5KNyKUyWFRKviXzLSQ1CDm",
  "key27": "2J18oApFZEe14QvEy1dTkZBLFZQ7GCCq35rovyoiZmr1Jpd9Egdz2diDEMefVmuGxSgCRmDHTdBcCAvAqgBX38rH",
  "key28": "Q14pGpshDxLsNSDRMUddvtEQ63X9ouf7t3iaS16sGtGDZF4TSqQkSc58JSU5cwRmhxMANRNrMrg2po7jUcLBrWk",
  "key29": "3RQiS1tQP11jxb92gkLPmXLw48emrDUN46fJRB7YaKGKNBkDzFakbG3SfDz6QwJ54Z6nEV25p215Lb6mN2sDhjn7",
  "key30": "297pYtWViMGryVuYdpaDYckqxbsmE5rDuj8xeEAwjjBjXxipYkQAh8Hzy3fCoV5Qvo1muDrMdoZiEGZibbWWEG4w",
  "key31": "4X4CT1PehYLm2hJ7KkhZ7vhZVLSSSTanuegGveV79PNzfftdxtfEbFN2M1hN5DNryD1LNXmXGR8fo9LToJdKZnCF",
  "key32": "5XbWNo58wd5D7nAzfEPAoh7jk5MohZe6Eg4ULTgCQ41Vf3YpGbFLecbW6PA5NP44ccPfqyuRjFH71nRYHt3fheLN",
  "key33": "5WabARgTaF8RA8CjKFRFuFN7Tciva9zz5qMyKJa8H2BHxM8sC9Hmrwp27QCheVkyRN94UAMPHdtcSdE6d8xns7hB",
  "key34": "4iY447PMyMXBc9RMfmmNRqc2ZvLHuYiEHQ3bJhmHBY8pAyfUp711CxNrP5brok52e3i3ESYiK8DaCPG26NB6TrLQ",
  "key35": "3TXLfDn3cq41K1BoDnXhybcf8HEGn92Adp6PZe6yRuzherCMbBt9VtHEchdmgcv1WtZYBUpm7EcnFU6KPiTGg9Fe",
  "key36": "4eZtMQtSfqJfBSCjPPvQHKNmVEy7Ke38B2nNBhQaiFkQeRwEQos4RZnzRJB5BwMQRi8gpuH3KfNkJJzsi8c1iWzo"
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
