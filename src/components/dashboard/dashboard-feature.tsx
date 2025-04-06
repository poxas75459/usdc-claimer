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
    "3kd5vCcz2adyU2xyJ4HsQzb7anKyKqmiAhTGqnvXPomjZx9vpMEo6ECRUAofVFHij8yK5JsguD3c1Az4CXjspRMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szLEjgA5fvBCTcxz2GNKpha5dKYZycgG65QxVSMkAZWWp5QdabsxJ56qJdTmdpnwdt7eKGMnf1jhuyZBjkrcM3o",
  "key1": "5MHyFNsVvcU8RogtHvzaeKbmgcsaEnexJvCboacNvgAfdiwMq2PgAsggGS61WVJnKGVpZHATspSHJxxadUXwdWcj",
  "key2": "5sUeuBXgLDvkZswpRCsZnpHwk3oL4Hq2S9mbpj9q6gziMxe6ssK8zN45ujDMk95SthJck8nHrr5FJ5Fo8PqsRtNj",
  "key3": "ZLMQRpZkwabcV1DqFFQ3rVc3yQToDdxTasJUi4yru2jvDgEVVCTVM1yqFnXUkT9bArZx6jTqQyTVLK2kG3BVk4S",
  "key4": "zFCFAns5y9ikU67P8xWnG2ANoE4jBYkqeLVazgAw9ZquA3zFyaC7qsi9spsA8gkqrS1e29qnPYBZpmf2pez1diw",
  "key5": "3AbJpUYA1UzZSo8W9CGo3NUVu1XHDDA8Ba67gsKiaqmE586fcKHwtGji6YdPx3zzCBHXoTHrEx7e8Gs3tXzZN3p8",
  "key6": "4UDfFZQfjzYk4ufdYHggNpk1TVNNQZRzZc5srv9vYn72HHZfkLZVsmsybkCXvRw5w66KhriSmbvyKDywHy7ymXes",
  "key7": "4hSrZ3JKsP35K1qgYwjgHE2roLcp6x8P7Me3czVANLkRUuXYRXbzEPhgTMPacEKAd3TGcpmGhw3Eyj3owuU5fsG9",
  "key8": "wsecNnxd3qo1Fi5gEyjtvHWsmqjeQMzzsjgB9PTJYuGT1q9TPMxx5CX5zUUZeCqbq3QfvbYyYZNSHxTHmBRR49Q",
  "key9": "3gXKHCfPyz1HoDbTtySV31RnDnduEE3N2LBnUzrj13sW1qNZUNg8TiR6HhyS7WauoKnvz8FHCKhMKdP2vKNYK1wS",
  "key10": "42DDnZH1EbdbG6QhAyuZuxs6LhDiALM1d94CAB2VJivPRrURgEM1PWWeSLNk8CNkRdaHtGfK6Ug9GhhKGtswSUSB",
  "key11": "BvzHCEppqNWkvLGu97Sqy856YGKgeq6q5E3GWCxCpkfSYFnFC39f6KbakRDPUApPV2ncLa7LJkXCSxyph5Dqkfw",
  "key12": "3rL4GgJSJUvtpoNwqx2gcaiVn6b9u6LA4VaDi2Jr2aWxavaQiNDTPTTxbXHQcigpBnRz8qRgMUuCnPNLLZtQLeKQ",
  "key13": "2UvzFUq8NRiJ5yXkPTSC48vj7nDjPzcMWiMPxPgsMnMwhXn7bGojrNZg8h28NVyivJr5q6CJN44pnqCfmQA19fqi",
  "key14": "3JQ4eyQKUuc8q4mgaqLZJUYgTbMHsMYjpew9RMngbYtxBcFrZG6V5sL18MAcgQ5vBJAjfBtVhpnPoMb9pC6rt21Q",
  "key15": "4cbfku4zPmVY9B7AzftWMWhzx3nxUKvqoiJzQn6ocec7XePgRxJ4HUiMUqfxGdCS2EVUz3U1eVMSvLsVdyskHjbN",
  "key16": "5JoY6vvTnRkNjCyZRnghMXCuXWeCXFSDp8ABvmcLFduL9xAARNunsaXC1YANXSPgRLbgUJCHBFhkUi8qLKCq1JcH",
  "key17": "5LeiJuunMQPNoZDBKtPSmww9tuzhJ89uJxHaLJG1JZ9QNASwtHHYM3q4zA6x91wKtQKJzyonrRCztGtZ78iPeKf5",
  "key18": "26SemDaewra7Xb81UdDf9jyps4nXspVMA3bYiBfnEVVckysyvkJWUSwd6SVJEDko66wbNJ3w6ZjRzJ7dwLHvrM2C",
  "key19": "4iXu4ZEw77ZE6jbnAphQPimxcHbMFo2y7ytk9QyRnzo8DdqUkascgN9L3izJaHzBFAcWA2mNCSJkAdaoviAumzPj",
  "key20": "3ap54VXjSqxkaNYyBWDm7VAcDgRiaRfG1utxmocjNCMdRaQhvtzjmP8XT1aJdxZFw9UXbnMuCGx5xKBBXrRqj7XC",
  "key21": "327FH9thmwq1Q3ZNWnfc8o2SeytRa1Tyq1XGvZAZGeaujMzETebJ65ffVzBJyZFT91xaRV46HiUP4gFdUq2wDfka",
  "key22": "53wNjNZHGTaxBCVE3g3hbPn4jVPfvMfME9DbJrCMbdkYer66LSbFAYeMov3pbeWmY2RKUTjB2M3q17Dke2fwuZGX",
  "key23": "jBt5EMkdg5oLFXCsMxdJ7J3gkX6CJHvxCLPrHMnNAVQRw1FZkrt2qcG1S3EnyBQM5qWfAiTx52dipEPAMC74TZR",
  "key24": "3C1dH3gax3NLke4kREVxgocjwHM96h46B2apPKkHJfDxRotVCajExBbitWWcbokbZeoFPcs3gP7zec9SErH2BZzJ",
  "key25": "pyNUW25LpZZgTejmB4rEnRrk9EZYJZFtgjMhLhk4VftLu6fBg73L2chJ1aobS7s2PFt16RUGrR8Sy8TMYESsfBK",
  "key26": "21qEvyV352dv4afpResDFxsmVsixNUP7TovYitT3jX1xpEHL4ywj1cZJLXtQU73QXY17hSzXbMhs6Ssuc3XrwLnL",
  "key27": "5ava3j6KGbgNAnx8arzYABH6NMqzGWFEbPVnm8rznzL5Vgb7tvQJLsXo3cacZZSqhEMbP25VfwzRMAgCdJ72GCX",
  "key28": "2p9BgubdiTDnMdEskafq5vfpCKguQQjzjVdgLbAxYHa5ntvYoGSepwA6HGLqWeemofw74cD5CorSm7chDXn8V2Cu",
  "key29": "2D55q68gvjXgscSDMwZEEusFXRVxukbJbB48SFe6MeMQxP9cM5S7TZPGGM71xubUkC3Wq9ZC5mTgyGeLmQ1R1Kvr",
  "key30": "2G3s5wCDiJ9cWbNspM9eBDDLawWjEDXV8xMBxH5ubHCU9vEo9kk6kXmzHD52t8gpeyoTJcUGneC2DHkii6qxGE6F",
  "key31": "2Lz3HdE8FmbPhF7Xe2pNRsNP7L1uRmJ8kKWzx9dFGmoWTAKgAQjBEc4odoZbbKXqWxaWtnmyDzZupCHrPQW13phV",
  "key32": "ScTvbJWto3pQKqCTarxznhrbtBtZGVYn7WGLcK3cd866e8XeQZkJqioF9CTBVjZJa3vYjQJVxVkXSAgrC3Z5Fet",
  "key33": "hopvGYqqht7CP4zs4DRTjDQP9RHrra5vs2AEsVTqMN4EGQqVXcETM2bia1ckUZbA6JJHWL46g4CgJw2fjpJbkcT",
  "key34": "63s5y23kRGuCDGk18WUAauMsJyxX7mdj7tsCHCLeBrNFUZoodcfbPYoYsBuKNrdibqXnsXZQuUKAeMf77E55bYvX",
  "key35": "4kFydy6EeTaJs94q1hSLVC9USmuGfAzLcqFVUzhKiDrR3BgdsdpU5w6NQLa1DRHmqT15Uw4TY8Ccm2CcRhZCjLcd",
  "key36": "3L1H3Q5PJDza1XBr1mAwFRQMMZKcLQzmXtQksuoCodQS9PB7JJmxf9WbdUfhomPuCphHdjqNtBg7Pc2cJXWqbez8",
  "key37": "2XVzwKwbMFQ6jV9GgPdVn24gxmBqKdnYyLSrbPD7zYBXFKXAYB4FoDQsyKqrAJMWY4sFpcSkRkzPPz63Bi3FaMfD",
  "key38": "bTMcthRNuAjX7XQZbKAxGLwVX4tBby5vUCkWLC2hkK4rJNF8wL9XjjkCuU5aAowzrCfoX1Be3zhZxz3zbpuFEjb",
  "key39": "2b7XUuYcBf5fj92TfQoyryLEyDzHAHKWNqQE3YxtWKkcjGLzMDS96aZRm7fvZu2jeh6aRS3L7tFGBZ8UfRyXL6hi",
  "key40": "4Gu7t6SLRiZhpLkLova4wc8JRapFXNeRruzJ7tHXje7FjuPqduAy3MsHe1R3S2Qsa8zMxdhkn1iEL3GfEAvPkA8J",
  "key41": "3bgTfNvJKE7Yfaz4pYBS7NkyGupJXeezQmxcGvGYpr2zxmqitadWwVikDgbpbn9NSD5BKSaM5WArjDeEJcBqfN3W",
  "key42": "2X5dkR7MZCsf6zHvDrCJrqQKnNB6KTt4vmMzWex3PuBersCAM8N88jzQqQb7q6hmabFRKc8FedirVfrp7zhzGDqK",
  "key43": "4ppr5hxJc9Yn97pLgGSP85Gh5kWJcwc6pKn4zHbPmg7FhukmoGMLXygs3m6yu4fkD4VXSyR9GAzRynDhGCJ7aLPG",
  "key44": "3nBFakXa4Va9umVDzFW75CtVKn5JJVFjhskmfA2F9yFHUuHohR5ADcvXh7CGnsJ25BS3bn3khTcjqWpGCXdqVDvD",
  "key45": "3pCiagqnDgBjgokcnRHH4H1r6jhMeLfifApxDQfJqHAXDWiRUmpGvWggkLCvwYaqVCDhsD3zRhT4CaYw5kXsRVgz",
  "key46": "62hxuV6QaKd9nM8hnt83gbEvNr1eSxgXM8NUZvSEUpRw8sWK7RrzZVfxRrcAdi8MqEqPNo2iRjgH5WejtQudPhFZ",
  "key47": "65Jq1a4UEwpxFsqqEd17MRb8zc49cCp568Bn9pKhQ3YyPyB5vCygz2euGZ2ybUZSQJBhYj5Wm9t29NSgJPQb8Rpx",
  "key48": "5mvhPThm7nhrv259xt97ofQnnnw3jC9SvtDQ6fuyukPJTfFYKHY6rDFaJESVyaLe1UuDZvRPcQDGhK8jGwZ58fC4",
  "key49": "2hQvwp9qP34zgWU8SYHGgpyK2FihNE852sZ9JoB539bSrkS39FgzWMimQnDn4HYeWU6nkLfJjedBTc8mn6Dbgv1e"
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
