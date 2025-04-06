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
    "dQyPgayGnVRZXRSLtiTJBfGu9jxMB7zQWWbZDWQukeDtnRZtQesSVgEXJjJAG5eUCb71PGSDCQC6fhNVdKPyWzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lws9xmGi4ormPQntj3XNkYKtop5uHGHsWFVfYUFG6idNFbBJsa5fLppgN2fLuTuuiHukzJyCp2TCDuma6X3SAWb",
  "key1": "49SsZ3tEvZkNUtmHwdEipddQobabegEuSDfFaeJCr4HjJ7XeKiKi7NeBv4WSqbcXKEqJUp9Pmtw1Z51myb6UHHdP",
  "key2": "5RFRZWj7EqvoeWncb5mkdXeTNW9QUdGf2TjREkMs3RpazjR7saGkMuYApuRcNyy6svBP8Ry2yMdxTrsgcSMr4gAW",
  "key3": "66x6vPeT5gK4A8xfvG8k5JXaiHdMaPt3mzhpfdsyNM3cvb1xG7YZcwgKrf2eqtwicQ4yYn6J28VytqeccsJAkhnZ",
  "key4": "3X1mxw8JEe2AHRtvCMpinmUp5Wf7ybnXNWzWpg2TzDfHdWJaN5DN6X3GhBeUNuCwVnKigcJQScUdpxT4S8pTaSZg",
  "key5": "5rLQkCSh4kaWktEcQRvBXrNn4umphURQqbKuekf4mfivX7BDuBqkFdE67W3JvzuDNLtK4rEvEqEYsismfprnmSW3",
  "key6": "4Nsb2C8aHaT7yRSSfFMg1cqzYoJHz7BsA3qoTVAv94pbG47i4QGRCEZA4699j8fAUWMnUM2kZi45g8UqcXMLnxbb",
  "key7": "2y7gUcrxVYU2RycKNLUKhNw3q8WPjfeXLfi9oEocmRQp1zDcftY5PQJK7nZYj7WcSP4JVXhE3NYQg4Zsd4EpoxKt",
  "key8": "41GsvXPAkr1ht2wBfM9PNFWrCX1YMNvCa2sqMkfTmpzesarsWCifYvD4z5SL8gdQy9vvTYYEaJr6R1EhVwQ6yynX",
  "key9": "2Frjxve69M5L9UVSUx6bF3LwvjXYA4HA3bYYEpdVudPAhq4bcMKDAaADzbfPZstBLaRF8WUbiEZpQmFqyfxjpDEh",
  "key10": "YFVvwLGiruCFKpaCZ2Sa8qsagbLKzpbdGfQdaWbX5oXnxniDaBprry51yhd7Kh33EiSWFoLEhtMeWVyaKSoGrap",
  "key11": "jkjKxMVzNZFMouiAE879nWqQrXDRM2kXnb2pZbtZSzJBpSsyYBz1cZffY7YnMpBhXEaPxy5UwwVpPSDNw2BzUap",
  "key12": "3UyCPkbCzNNCnrYdPG7RVwFEjNosunjaGo3aZjPzPTq3zrRnKL6KX9CstKwf4C8gq63N2XwmLBWDoMbACVhnqfYM",
  "key13": "2BjLBss6ADyMw68BAJEazFnqj3T87nRsPssKZacHrpJvYR3f8qKGvxDsd1z2UubTXhJ7C5cBxGUy1F9uu9hddh4b",
  "key14": "43MCnzbunNy1dL6UKz2Qa9Zgd1sPQU5f4xcZayQdyGJkgE3czuKYa49qtCUGAZoBvckNsMePdXDEVUidW8jpJpCq",
  "key15": "2erw4yezetk8x64LFYFBFErcHeS4JWyT5WTGmzzHU9HBKtYvPDzB8Zwn4d2LBngzM8yNNmf1PHUj73cC2pMBodAj",
  "key16": "2UkpQb8gvuSexyBecGcMjZZEyWzRf7DaDxp95wd9HGBWbhicDENpvtMZj3jRod4XjQ3CfTUFyCJn5ru56S5GynSd",
  "key17": "2gBLFBdHAJvxFubCnmePHZkNFy3mQh9KBoCzeyXhFNyhXEao9BBsxDccibvXba3dYApcGKFAx5xq1NCS8hrhNuBj",
  "key18": "61uSCViWB9ENxYUVYfrD7o3gqXw9j2hPbrRnGyeptSxaLARUCQJZ3TNnReFxcu74dJHNC3Hpjv537hqXmh8ZifRY",
  "key19": "zUrgghrq3231UTu6BN7EtVkMhyxGFCBFWcw5KWZhsWHA28BeECMELervqC6ycSynjRPJ76A5b51MdxopgJrCJVm",
  "key20": "4efuqXUWwWD1jSq2LvWvAfWYrXPKp4LSULQzUwX4b1XjRkrCeYH2HoeKRaoyDp3dTJR8hZ3QMRUjDfriHBLK2tG2",
  "key21": "31umSYixVgNE66dfhvXiKUk8XHBrzePDPJrUUm6qnfr6BT1KGv7uPR1CdJf8Qj4qy5r1cdEa4UGMv3R4aPeLUjdd",
  "key22": "NxAAPpG5bW5NXGEgugiG3WfhWRZxeicqNV4Pj5k8DpjMf5d4amL1ir1Kgvd4KEXFaAQdfcHj9CrR9S4JAHDWAn9",
  "key23": "3LUXV1eRffYn28HP8cZ3RZKAg7C15AbT8zvAhfwwXF7PVFGefHWsrEjBGN8yy2sxLPuqEAg6zzJK9xYTZN6ikNZ7",
  "key24": "U2qgPjQjBqzXCYMEWiTXDAfXgxxa1G744e1HGT9aUGEuip8SRQRhmqNwWBe6djVEwqmawm3pk2N96qSw84zhjPT",
  "key25": "3BDBh73VSLi41PTeiY3pbrSG9b5DYdeJyaeS6pZJtC3Fev6Qq5rJJAvFaYPekCGF8Rxz7ygwvAfECVbq6kjGDekh",
  "key26": "4TgtPFR8ejUpCpE5Fp6QRh8spufYV9dBkAgrjAaLFH4PXTy1YAT6TcCTRUjMNcJkx4qfdZqiFoqjiXeLuhGfSKgB",
  "key27": "3fKKohoqM6WdYqBHCqgw9yQs5ikyKNBKLiTHMsvQtrQABm6v8L3txDiiviJpmiowWrHxCuq1HBZp8NkmHspWLveM",
  "key28": "5v1HujL7XRheXsTKqGkady9EnEj6kpQkrHMNVGwYnDqauE31R6F7NLMBmT1A9SyUUzkUk6chCo7xZireLCgJD1vc",
  "key29": "5FZ1Q8gte9A81ZhDYqjo9KteiGJ128Bg4GaNgAkqhKkpsP7TGm714dM1VpnmaC62VDgR5DKaFeo9K6Di3PjGxyjM",
  "key30": "4u3Qivr6vHLqqkVTXrRZKSSQv2Rkw3wz3ZeffgrS7MfVPYpU3wy7gXFhFyY4k3e6tTDeF5WkFz3DzSdZza74bYgF",
  "key31": "QpjnoMM4gzyWRH1qFKaSq2Pk84qPjf8Go48pUR5osJRDV2r9kQmNtxjwq7MY9mvBQpMD5hsZbh6KHRZ8xS5pkTT",
  "key32": "2hcs3EgShyEHrxFG8D7JmRmkszu2jwWS1HCib7H7k3wNHk125zuux7e1XqSXL5uUMKGHdwmi8vfohztWxbyNVgqm",
  "key33": "4seshnwTMDYxSsrZk5b3G4KRTGprFVyZkSiVNm6WHVJ2PPPZH1mxb2FbJKceyMreanDLx8BDHLvojw3dzuMtHh8v",
  "key34": "5Nb6wJ2KL71bVppjf2tnpUN2jwvXq9XAAWgHB1oGnmWQSbwoiK8VNhDy7D8DtbgGsbvWazHnDBWreGMNBcybf5kd",
  "key35": "5GRhFCEvmDFx2dHmWWohwVNYHPu9xPJcCL53xEJyL56gR1PuzwmhTDRdMMxDhkDYzb21tRbxyjW9ZZ2kr2KBXk71",
  "key36": "4dgpQcdRazrWDBQUdoEkeq6S3Hn5UKBAJupnnbHeAaTJoVQVQGhQuxrkUFi2mb5Ywwvju6BydFv32qbrfpddNH4b",
  "key37": "4gw2uPw26sBoXkY6LSyLxpd5UHdA7Ma1AEyPkaWX6ktxNUUpfq2aawLnSew3aixXEzdb859FDLkQnHUs45dAvE1R",
  "key38": "5ia2GoEQBdwbe51NetjLP7H7MigL9gwCp952wUUxdCL2JRgzBapgqHDP2Vydkim7TVkJEmPGzjrZamPq3QC4hfMS"
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
