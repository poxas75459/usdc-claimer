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
    "4FWDmRR9gbU2ZopUeW74CyubwfWDXmAUt9eERFS4nPTzNmvNsQc9g7dmpwTvDKn5rTYZVWRyDz63iASNzYegZQ4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqRbpH6wzmaDnZqT1oyS4VxZsycHWCekWFPHpzPrgEJnTT95HDiPeVydVNQnuB2EM6xSc1ms9UTg53qYHzM3mfQ",
  "key1": "5enpc7DgoS3GDuqrZHnTpnAkNpiq5riHmCN7BsHQaNHo9DT4Cd678xKtmdwfNk8ebhsackNknLnYQYVbmrMeDcTw",
  "key2": "fnwwkuHgT6VGhDPcLVZeT5e6gs1raqYNFXb2FtypY9Rza8b46xDKPgYnhA4kX4QtERaPseRmZZ9x13FaYpSa3EB",
  "key3": "4GAzisJSCSK3UXWyPiDW99uCzm4HhQ2BVzyDmXr3Ep5EfSBEPuq53d9EZkFoNMcYQPZkRAKvUNcyHMtvNTs13eW5",
  "key4": "26d5o1m91je1PacVmp6k22TMrgHx5ACGyY8WRpJzijenigaNESAouzoz25jUPqEL4cANFY9dQRxPDuXL533rpGoZ",
  "key5": "ce36GVT5zwQ8sa5m8RmphKJq5uZHaxd7RfkfoMaMav7aUJwpyJ4cmhgHDiMKGJXT568yqe1q1VgwCjZA84DYYG8",
  "key6": "4o9T6zpGPr2TcT5N77KG79Rx4tvFisbvdk3tgr6gPj5iviMdDW6y8jTeikrBVw9vNjg6xxJJM1obVQG8VuTNG23h",
  "key7": "4tV9gcGyvS1tVkUwrs8N3v7BLGx4FjagByY8gd8Y563Nq48dQtiLYvjKSZPNuWU2A9GPBuyxjNyQUWgj6xPCWfHy",
  "key8": "5JmkRZRWVrjXNjFKmX8Hn8cC8xo4sYADbvNaRKKYQMeRcT1GZt2DkM3CS68F5ghCie6G5iCZcRFaUXnAVfbZsWUb",
  "key9": "5bMr3tAiLFddJSt9kAswUPSUscKCNGvfG9fUu7XLPLawmdtinqAZ93cRSpfcc58uCNis8dyYD6w3jtnLXaRgkxKv",
  "key10": "4sqhHqq1gwE6P4E3424ZCyr3MfAZiMvxYqx6BSVTqyXt2Qxnem4fyaM8Zd9xzGefqSsijUetSGZumRgWwmP1GP9S",
  "key11": "5DtqaFgJYeDegD75WpVN5HZ6bgL5JG9aQUWEbKBTEfA3zeugBhjFCZMtJPMdLARRUeSFkBAz3ithGXJkPwrKVrgd",
  "key12": "3bCKwZoQSjQaaQFpG4wiJLRYthmp3ZREoE7e1Ftausc71J5okdrceuWwN2rz3mbsEVs42eXC3scSAUeieowaEFqV",
  "key13": "5vTZ1xWjjRNC5FEoqpb1FpLYhCf1CMnRooqjtGrwsCdT5kTYhzjn3FiNKVEM71pDtUJbXLN31aSYyUoUiPkbrdQL",
  "key14": "4qhdz9bXe9Pj6DFwtWk74uWpJe6o732HPFYB4NsGcobX1hrMSsa5Rx6LFe3Heh7HepRLXHBn19K2e6zMRShc6Kib",
  "key15": "2Hh7g4FX5sdQPjXuLNuN3DNGojgQv43LbKoiBz3Lfyjp6DqknDV16y1yggWs3HUVb3GHkwDCN4mzEhNbcL9EySg7",
  "key16": "5k9AegG8Bc91ymK1XqnP3secoPcaiUhgoJQ7GzgQk21FSHy35BKEfhSUDNTqSvm8Mqkzw2VF1e7nCe4kpyfaPxim",
  "key17": "4LhyVaRGpqxj3xxPsHwb2Aw6TSa7QriHQ6RiTFXWC4CSUE7iCAd5vYGsJL4R5kpbPcwxTPkCyhr1UwUW8sV4Wwy5",
  "key18": "3W8C73xFpeDxuFnwuB9xXarC7bhrasdrPHpNvbEjpEMgBpWhqm7tsEUZ2YTRr7hVXEguN4JwEsCg8YXSvGqyeJuB",
  "key19": "3C28Mya6XNAMbMkhukBMnxovrxd9NLHdBUu7YVepuDR5tWwAdKYLcjUwtQke4x9zkQcvGzmrsbZtN9nsxWAwecZa",
  "key20": "3rv6d74C6gFYNnSnv4YoggGYES5DH4wHgSsWmKokfXwec4JRZGXzPZ9BDPDdUmWJH6YjtbJnpVNhPK2VUT81vyM1",
  "key21": "CbTj4ejjPSE54wWCwMHAwoamo2kLP8urwvfnETHyMb1JPzZyxhdjM8HpMKMWbV13gYurYd9KJCbk5cXQjXDbx7g",
  "key22": "3jyErY6yJv9k1koUsPbGvPsRr64UTjPSSJS3n8od4pVHCXpJuUoYxqvJJyHoGfjmzCamwHnFY6BidtH8BPEb8f9n",
  "key23": "4ix7cBmdi92WMswKZpQp6Q3rBqh4zHnCoysjPkYehK1spDTmPsTM9PY1P86xYiCAxhyGdw4t3K92EEAowomcJ19a",
  "key24": "2cjzPuBfvBLhnNymNPi2TumJEZuxdECtHmBmna3xZAQTr2CPBvnPVFA8VxJwZq36RwJrvjnW1ywTzUjTdUCQhQnc",
  "key25": "5ZcMyaC1nMoVjtRZ5V5X1B2rzYt7VsfYyW5co6FNNuLAvshcnn9rP3VwbAbXzoc7yrbat66eeKnyPpAQdfTi9C76",
  "key26": "yP3MeVTivF16j5Ur9ctxMAgF7CnhVheq3WtEQh9MhxsizCsB6qXP7hf6BvB2RGeVCVnbigAkwvVwVxhB4ggaGpd",
  "key27": "4j2n7VZZUS4MbcbLk8LYX5rpopQHXigbsVB3dMfF8RwBxJnLiiMi253brMCAyGhL3P6aGKbhT6PTNMDzdXBfuV5k",
  "key28": "5NWk9jmKhDFRhqtzU1TvPRetZqsw2e9QoRW16FRWLWUvrCGUUUZLtkYqT3ZT6b5ehYBJH7hcRcYEiHzrX5eJ5knz",
  "key29": "nTDSDupm4RHhsmmhJqnnYiczkYaLQZZajdbn6EsE9nVdsqwYFnKeQyAToYqfothy1nxuHfQ6jyfiMt59qRNTiLB",
  "key30": "KGwjkfiM9XkerwnarG4L67tcXqaC1K8fYLaLqjTo4eHGYYMWaGsMqpTMzrytvk8Rojh279nTF5jnjRZEue47Zod",
  "key31": "51KjYRwZu4uyQQc3iNFmL7efQxGpZxuTSzAZtL8eotV8SensMaJGpukSMfrKWXb9QoYk2D4WeQ7ZNBTpFEZ2JFHg"
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
