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
    "3a5HsyEppktxEy8bqtw5nrK75sBFFVxSEnegP3ANWpUa9f3dQHEvmbbwJNRMCH2CKjkPort2o2herjbZx9u4o438"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uztd4vw1ixLkbyAR6pxXnsJz8QEKqPLsbdMUbT7tg7RUWeEaXTkqvWxpJ3yVttb6AazzrFCvZLuPiP7Xjx9JvMY",
  "key1": "3QfABNHhjXdMyob7MRyjzyLceZmdVHYFmP5kMccwzCqXF78qkt87JMevFDeNeYQhN5oP1sLuihQw2b9npVjptWrJ",
  "key2": "5JmBYNcGUn8ywKtuMrYRTR75dNzEqMB6rAoJCwAF9bmgwN6cDwjeBrLJ2MKxAsyZTREBACBQUDXAcW6gEbo8LnKx",
  "key3": "cFDuFLvr4yzXSyXEAmmNe4E4h1MLK7fKsLMvuVPECzNXzZoA8N5HpKPEx9w1utDno66g7vQ5kFEVA15SVWSpR7g",
  "key4": "5XsLp7WQwQgNvpH35qb4RR72984sdk96xhG3WNHQDYyKkXiv3aNrf56DeCgt19qFq7Xp4AqjrwW4u33gxVTRUMmT",
  "key5": "2TFwVKGPgfst3rTBqRcfznJk1hN6BFBBZaBFmmo7YrHp8ojz46iM4HZjaRoAE4o816NvyscDKhhPouEPq1qpR6YX",
  "key6": "42Q9gR6Z1JtauaYhzZHhduniZBf13sxMdnJk22L9xWNeX5fzG24GLkN5RTufMu7YCADN2PTaSLaSbrgWmRijJ1Do",
  "key7": "4rZkHvr1BJ6oHJxb2WSs8Sh1PFuNh44EP9WDqL96qNnTz9CtrWLfgcuN17BVKBoNSgYJYm1eTNxgsHv4XgsJ5a4a",
  "key8": "2fbLHsNRS4yaHmmjuzvKfqaJkMnvZFTKhS9fr18CNNrskeGacyVKCNzBhcfq9gnAi9fxU4hAUY4tiH17uc1TzecP",
  "key9": "2Zgi9bM2MxPnyTXYcLSG5NV6vwRS96w55Ur6zoqmiNVSJDTduFWC3X5UBfVZXhbA5CmC9Adzf9ryDYSdHBQTc7H6",
  "key10": "2Z28VFKi25kRAvxPtKxFMXN3tS79dBngpTbRRPazAmXMMuTevxVVgzx6FYSDWy4VZzjuLkdwhuTSgQmfuhJmvgH2",
  "key11": "4iu2URj9iEUFwsQXiKgfgvZnHoBUnZu6r5xmdFTYTjDQnjv4bz6cansET5SEWsCfLsQdu1pP48b7dcXj9g1dxnJk",
  "key12": "3BYXxYWQZLZpxXDGsugPHw9W4PUsVkWNnzKCtZcvYrd5PU9VpiPJKEwDAh7fQ3FJLQE6GyCKSZHkPEH8hwEjFuDz",
  "key13": "2YKsDJPALiSjQYXH8jWT5AdGFvJt4ywcWbSDyiGB9Sasc4Nmfk2ey7itmfzutkkFJF3k9hcauZ1TiTi5UtvHrS8q",
  "key14": "3BXKhyvAskycqojDBjw1kym8jqc162Ga7NVZ8hJVeeyrNc64f6uu6JbJbvBBoYce2du3z1AfeCBQG8eYhULkF1R4",
  "key15": "4LGWR1L17qEZMyepGWzMV5RL1NSG4znkbpdwPoJYvvMyDz6fC98ztgo5a5oyptN8nu2hbnDmkGwUH9wgtyAJ8qbL",
  "key16": "eCH57zrgvVwhP8dbna2GjU5dNFcwUY2ae5mczebeEpTJS8rCNdGB7V2N57Zbs9kVixggjHB81pegJcsjzqso3AW",
  "key17": "5FVHvoGpEW4zH7W8rNskDGowTqPgPSMxM3nqZBNXJbncPbbq9YLgnv42GtXEBJp5o6oTtdu9AVpkazkEoGd3VuwE",
  "key18": "RjPghhxH8J2M4TmJtTGSL3cEGvrJczVm7Z9jqpbB8ZZqW5g4CUCZwwpCEJ7FtMGKsKL8w2oGjZUR7dvyh7dtAt2",
  "key19": "3tUV1u7cRtXRUSh5ZgdJDajrbyjPobPLVeibbqUp2EhrvjDth73MzHtvwZ1ZUo9N57eofkxDCkq8WSz7BfkwXWUa",
  "key20": "uyaMnkkXuQeZYDa6bVK3gbzGiTckvd5GR8oS1pKxuwHMg3NMax7E9m4hc1wQSoZZUyc3FhaSCEFCDdT7yuaBEJn",
  "key21": "2AQPNMxBUG9tbad1YrJYf5jqWsmj3gradPgMgWhqbgoB11YJWfobTVu6cQAPNXsg1UaMSmQ6VWKitJfo1bTs8JmN",
  "key22": "4PYnGK3z1qehqZy535pSP7krsbgXiQ8TLyRoKquXnvRF3WFkrWj5DHxf8WxrQaJLTACDtrXG9vBw4Hz6RCwgXZ4z",
  "key23": "5r8uB2S4g4dUPW6K4RVBQs6pR59PgFcyXKvK4nGZVSeLQP8FSVhCotjb6fiHcRp6jTUbA2RyMQhnxso7m8J1PJg",
  "key24": "DXQvihZ6L6LUPNyfoYFW4exbYjpWKVhHbi9EiyPLEjkSg2BbBXLsGzVrP7LAF55zAyCctqnjTZLNRPJBLPTWRNq",
  "key25": "9noTPrhh7FPVSqG7EcWUjLvBVVMeDTnPoVf1sq1VeeNTT8pDMwiTxsYLgmfv8jiE81ZJu51D2JgW2raa53cUfgV",
  "key26": "KEGQrd5gg21CP4svcGiPE3rku29uuCvHyTB9Ynvbe8vNNs3iXrAxL6h7Cgqv5HViCq9QuC6kyRieKVTrT8otMqu",
  "key27": "2pCUG3raEdpkoVsjPUCEbUaQLQsseXEtfFsWQwmb9znk7cPbU5bSTQoB6jZP1vNVy9SN2jXcfkeAXs9PZ7sJZXrT",
  "key28": "GkmawzmgpSbS4cPskjnDQQnjuEyoEYHouQsGb8SX4u8MPucczPKeG3S5R1UoGHQYvGqHLffPeG9aMWSFafKw147",
  "key29": "dMbohnM8aaPDbymBVuopQLwADtGw1BpFideYHcTA9iqLvRh5hQ33LGcSEUAf2EWLmyxcevrwCFXDXNtuz1wk9Yb",
  "key30": "Ass2PBuiJa3bWapaLiKa9vfpN18jpu8zLqCLSskitDTk2hAeUorwTixa7QkwFhM8Kk7XeTFuSM8kjU8qzKwcLM5",
  "key31": "3hYMjy7r1Dx8NzwWuhzAM7tcogCHm7BA8BHCr81FocZyFGqrWasB66YPBFtmP2kbPAWaGdGoQhxY5t7nQqNCNdfZ",
  "key32": "38iuGchUDaz21xJ5k1ysTpyqwNxK5qDxd2zRvvfUAErYP7MeBsSCCM2rUcqMuBk4zchFrqbsahokPJSEy6Bgshcd",
  "key33": "4GGY1AQ9dDTsQckNJksUUau7bFa4RnhT2vFPXX3rsbXzf1etcjHXuXcVecDEXZzkMBBwFiBuw4WmwD3nsjpe7KPv",
  "key34": "34ZENTLuYxvALu3fVwsKspQDHQYcGDcaLSJAnN4qqSHp5QTG9Nc51e6GzWL4fdN1TJUv95nQXpfgvzxyaKhbT4bD",
  "key35": "5ohRkwXQdhCFRZXnUBFMhPhtz1SmMcy6mj8HwzhnBnPBnKyBmVCR4PY42ywZ9BMpqxP5baavjpQp5Y36cH3RZepT",
  "key36": "3PGPnuv7ZpLm1tzDK3LQn9MgdmxeV5kZjpRcFcdg8ajWMdC3XF4JdkKu3JiFfKPVcRgpK1X4PHwCmZXXz7WKw34s",
  "key37": "t3UhpQ8gtc5DMuhpThaDGGNf1goC5Yr9hUwVs5pGDJ9AdDxok7TGXinSfDtiFzNbaHbLKzBcmceFPivtrKzwZ3V",
  "key38": "58bWazTmTwgNiDuDdve1eP83XbV7chxi5ptfbYKtzVuLL3ALt8hTERQDhBnFqkLLWzD6i7mA4p79qFTGaqApRXQ3"
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
