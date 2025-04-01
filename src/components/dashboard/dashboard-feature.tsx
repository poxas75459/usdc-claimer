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
    "uPStyXLn1G7nPXv6ozbeKFmVnpjNVEtx93SiCbEdCBMEy5nup2EHhf9fT5TxRW8UDUZ5wrodf5zBrz9sWLZNjYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5A9yCLMJQN1N1Ajcf75BfiHcBaJHzQ5KQ1LWfb9abeiXrr2MSjDq1PPabJrG15TBZnyDcXWqQ3sZ3vjHxx3Kta",
  "key1": "45BXi4TSc7RCUeXeBVhYv2J6xtevvZXMZEjGGrmN3nKs1Mic5MxeZzdX22kkzK8HHYsD7DjwHMVqpA7vXNepwCBp",
  "key2": "3YizMhBJpHB4eAH92ULJ6YwTUX6Yhb26fyCHVTmNFTiteBUSNNeHmFZB9eU9NLYw5xRf4TXhnKr1SHc4apLXqszZ",
  "key3": "wqVzWSBq49fYhrAqTYAtczT65cdfL6fAWYJES4SRbqzi9FySieMtoJDDXFKwVnYxQ7yttWGZsiE9BYfPAC8TQRL",
  "key4": "Ff5sQnAPf9wQUvgBg7czo6w1AHFkZEzD3XK5LgiyoL2TdZVcJStdAt4JGRRcciiSVqd8BYyDMPqe56t5zbMPp73",
  "key5": "3BNdSgmrVY4Af1fF4p7KsS2CCDyErRLVeNHRNEiGtjPJFQjsZeHmQeTRrGacWxn6yxqzHtzXMXuqkKrcy2XM9xnB",
  "key6": "4Hcw367sCgTyWUbN7YdGquGs4cGMCLcXKJZTiBugqdWVKCTgW118MtQT3UDhAxujnCCG6VMNz2AqSf4rmcza5rBW",
  "key7": "f931aPUKAtDqbeazvqC81C3z9TTK3hbJ9MdPmVARHAKSH1HiS9syeSetDzBAxaJyavM13YjpWhkKQoioSW2XdnJ",
  "key8": "hY5tVNeiLYyvjtjMu59jUnxRMtWGMSiNKSX8MZk2HkFM4dELUtHejHHPgDomA6DxacUJLy7HyKX2WiHF3niaWxc",
  "key9": "3P8oHmSQ95ihXCEmNcYdDKQbuvwag5oP7k8nwbuyJzhUFhC2MkSVHsncZK5hXthpfKo7XxWvYmQkihf7wF6SmHbH",
  "key10": "4YSUemeVaYd6A6NpPbmMtmRpnzk6Ge39FnNbhdrxFQA8x8vQ46TtWk8VWnrozR5CheZykN1fD8vG9vS38RLTKaoT",
  "key11": "31jVk2cfbsckf9qfFmADqdfLs9dMLkF2XNxj3XyR9RqHmBjA4KzsAba8ewWemxxP6Axfb9oFP2KLrWGKEoqGPWZP",
  "key12": "4XAEW4hKZnuDFt1diMRqqPieuu2Pc4AhMUmKmXJ4tsJfkoeAhr6kg4j6yF5mFZVMDt15uhmcHe6vZhasdgqWS5g9",
  "key13": "38o1SD8FmXKchSmVhnCNUpioK3dmySaG2rngpx5FUE5xkambfwmig6mTCxehWbyZ62S5PpgoBLie3ZvjvabWEBJt",
  "key14": "2VVmS8L1XLmDL2G39p21cCwefBdEuncdqAXBwJzxmfxTkGbCQVeLEuGTniv6VABS1trRzHDuH7PUkp3cHFvCeaCg",
  "key15": "3dJkrU4VmE2A6azYUzaKqRRgPLttebp7pFPHP7EHJmJs9qMp3pzPx4ZPocE1LgH5RucweXVmV3M73GzB7BS5Rdna",
  "key16": "2xdA6NWaPip5RsXrH6yX6GdUg3XpXD8Deg1EWMjG5zoGvweTi8Bh91N8r5e92krviTNKuRgQixFDxAvjK6hXaEtb",
  "key17": "2hqXofCJMDM5596VHrVnyKBTMLNVdW2tGhxMNBSZG61dgNSCwyd87FZUKwCYnAmcVS9f2xcfeaAGgd6v8vFQAYcY",
  "key18": "5LLzTzUruvE3ipu5YjdZK8vcvMLSZGJmUMX8De8BqTB9ZdHSsMBFmHouq7kbVd8585yA4WsRQzA3dBvuwQbgv1pj",
  "key19": "3MuoCyn2MM6g17cE795gwWXztFrnMExvM9SXcYjaQq23Gz9JZBz4vqcYeB9j1Swj2SaDmm2Vv1F8WedGCZJ35Dkn",
  "key20": "4i78RtyP9afDBhtmQEqyKUmTCqxferfUoyN6MmPyJBR7E54fM6tDcoqbQXkQ7g4X6c8aia8tZLH59NsnX2MCtkQ4",
  "key21": "541Zv1LR9DShWEA8cbvW9LFgAch7AMovWrnrLK2gFzubcyDiyW5VxV6DVtJPjcu2mbdurwJeRLyMUP2x6vrGv1on",
  "key22": "2NzYsJUrboVDrJtGPzb1LPCBj2aS2yTcXhw21gSVVEQkbQp1karJarEXxQdQzPFSibRT28XYrdKtUAzc8aQfb2nJ",
  "key23": "XTHYKhVuj4Zna6AE23mfxUkEvrbBM9ef7ozaJEYfMWaHpdVdVpDwtcja3KpGSjE9DTc1ihcJ5TmjTDjQvM18Nmp",
  "key24": "3c3HJJXnz2UiFWtx6tWmj8kixznSefYzZzMEgDGvywGLM9g8Z15UC8rr5FiBgb2cU9pqyHuShpW2jis5g9DYmWY8",
  "key25": "3cdXDDbGsVBfix5UquWstVw1tuAjQQ2gsNmCUMUdR2HCpxAPE4ZfntLVu7xfcrcwqsNV933twR5Y2pTLDUAC3JqQ",
  "key26": "3RwYxbtvFNt8DU2hjQRCxMowmMrLz2XkNw6RgnvUqYTHPAVXHnxGX6mTaVbXp152AmymewTxyWpxVhsXELgrKX9A",
  "key27": "54JpJiZvuscNBvwYifV1i7zSJWVYK6uw3r48J2iLhYwe7a18tEHChPvtQPdqBy4NL9NUDWMkDzGzkbRVErnTenin",
  "key28": "G2kFvumCk2Eme5nWdc4FxJtmDrbpwRkJjVAf5J7Yfa4ZZECG71FBaeZcbgRKqKwjMupy9m3NDKAUcgfEVG9H5ZA",
  "key29": "2dgDgSKwEGpRikUpUE41rQF1fVpz4mE2k3F524zj7bU5htzRu1mE5ne8t8eDQtmA2tbhzaUrzDKwfe3sGcbJhLqi",
  "key30": "3DNQYbHNJSZnLPA2v1b6zaNE4avEVjJF6jPpXSNMDww6DLRvAU2fLXBffLihACcEKJpfMZhm74YRaTW2o8EtaRzJ",
  "key31": "BayS5e6Gx2RBcxJfCbPAxs8PDWAMWsunnKdWpF7RG7j4RMdxL9cEV3B9unVen7jVFBeUvME9oYmyAy24Ro6yCCD",
  "key32": "5PANdKJv2PQbaQqZzDh4nm35tbfcLeo6CQKowwv374DmcFuCk53Y7u6d5czHv8KC8W9ETKuopz6atJC9Q1gM9uCi",
  "key33": "26zX9MXmyvkv82ka144F2EB5nuDK4HKPkBiCuSNKzAfdBaid5wLavA6sjbvUAj6p6Vo3xFn6unLvtc4waCAwmdEU",
  "key34": "4VEV7iBH2tkGETozLurNfUKcTfjghcgZM9NDUQA1Pvn1LDShqua9mFFZqnDhruPvq9mXggi37iZpwp1JHmEiAKY5",
  "key35": "52qGDrHTd17un8wAxEwcR5zBYWsHTbCEMQP9DJQEG4Z3gmKqAxzeLjf5Tgip9EJCi8pbgcjjPQL6Pt3drwGstq4H",
  "key36": "5AZ1XetEStqXQGLaXi4ugAJmeNajwyVFYDc73Tp2Kp5r52L34jVgADadRiTQhYWbfhqLnb7fbsryAUi9zCxfVmmU"
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
