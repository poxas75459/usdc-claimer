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
    "3jjeSLJ4HnHc3mtqhQb4wLGEsmYGFiHZ7oNyMjJJifVKMbRQysBuYjFWNeLRq6fL4zoXXzN2XgU4irYLoSwKNKs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41tYvTQzwQGdvHtNULrRmuViiGaTLK5rMxmaXxzS4MDXL75yjJmUXEAGw4oCxmz4Q2nKWMEnEhvmbdNTYuHYqw9J",
  "key1": "3ry9ZpeSquiFYLCmMW6foevZBWVkDka63U3WxzEs4cwZwVizrKt3669hbzwZruDHBzyp9kMTeM9uQWD6uhy9VUie",
  "key2": "4sBJ9xgi9dsUo8ZCbtBgQFu9N9SKcZGxpswxDVhgLZiao5Sp7Dvk2bReZBXhokUFEf1M6ZMRmT4bE96SuP9hU3bN",
  "key3": "3yvbhhMux3TymtK9X1WpaZQqUGhoNY4VKY6gYQSeT4Y1GKJrF5oJHkFNhXxJ6qAaZNtigJMQ8TvdKQJc5gkdo3Fj",
  "key4": "4bME5jdQHYX3Z5gZN8SkfWkRYqyDTvS9LNttk7czggrReuLiuYugfTToRi5zHFEFA2YNqXfEGqdBdRK1C2rfqeJn",
  "key5": "2gkrJGHZ6b9KBNQ5v9a8sQz5iMnSv4wkNhZFPuCEVF5HZkAa7myhoTxCG748wNGjn8qCzmv1oYdYjesE8uF4mvCJ",
  "key6": "5Sw9THMFrhekXetToa1LuW9Rf3d4tmoqjY3mDE9hcs1yYZ9v4sXQRXiAxhzY1jnPSK4iszqMNhjHtcwdMFRr8sZQ",
  "key7": "Wvc4u5AnRuwjQTT1PDWnj2kpYzxhJVrT6MkBJsVVtZVGHR5H4tARbaL3dqrrBLmmTMH1SPixs9q84aqU9i4dcjt",
  "key8": "3THQUzGmpdY3hUnRA98oeXQwkLcqxpnzdRkj5zRYAxGPNwrMiycfnMCmQw6gynDerV4WTbvh5vgSYKrs3QX28oM2",
  "key9": "4PPCTE7GZ57LQX5njMtyp6iKdzQseRxeyNjMjrDiFRu5bxs6DWBpquikUoWc2GGvzRPHJL4hVqjCsF6opDsKVKu9",
  "key10": "4pU6UwAegS6fu5V3K6sTbNtqPiavHV7cZW6p2W7PEew65nC44wapGqs7UHbgtXv5fXRzD5EkAvyJXVjykMhUqv1B",
  "key11": "5eSPRwfGV8TC4ruR4jjF4kPtuxsHci6hx2VUXHsaqACSrUgKwoZockqurKXB2QuL7h7Hy8n99PAJWovMyx8zaqd6",
  "key12": "3wGeRGkJ1PU9CkJcVmS4gM7M8EcJXMGS45LP4azq5Gmt19nSZzLUi5D6ACL8rGxn6cx25SnY21tM7zCBYZYyNhAy",
  "key13": "49K6HqqJsoawS2j6g5t2Tg5iw7869bV7m6jzgjGyeK8RmL8hSMaxjpsjEEfrfkMPA4gxMhYibuLexVewM7fTny2b",
  "key14": "5Yr4KzECfVtaj69xkwAD5T3icmPxKpkrCcTMssrDwQgHtzdzxL4XQEgSRaBcKDRR5zzGHZ5gzLRV8m2N2j31CdZJ",
  "key15": "3BVWLHaXZrYtyhDapG69rtYks2zgX2ym8QRUCQcn5gAwKjdN8e3vjuqooTjqgtVEEe5Xpz2QE5Topr5pQrxZG9Zz",
  "key16": "DBUyKbnALQrKZE5Nco2CXLQkWCeQHpoVgYWF3u3gje1m5LgGL1LHKL9YMDs6tcEg5mQmoLZfiUE6oZRv1nw7c8R",
  "key17": "2uGMUu27s4PtdTcKiCBxaSFgu8vfCRoYFNsVKHSvtLccwQAaiJUhM1ZbY3gn3e4TWb8rkzMBKNF92wH9M8hLwM6C",
  "key18": "oL1kJa4Nt6eW54SiD4DDWs5mZS9ESdDfWRZPGBcvbGBgD9dc1nGciNC8U4Q5asqqTBeQjPWrBqVhfhp3pRqoKsz",
  "key19": "4mK5ohRCsTzn98vvWWxgpM6SvZMZFsZx1a2nD9hpx7gqtDwVA9p2spgnikouJ8siVsdiFm7jNtbuvUnzpdJhoupQ",
  "key20": "5eqdQDgLRLCdczH1SaMFieKboXGAQ4UpD8dE56MttRybtJxeMDqXjEy8DWNscAnjQKzQuL3ER5EZ1G799VfsCGrw",
  "key21": "5HEHQwapKiHpLVCPc4DwDt65q6WAb4WPpj77njQguubYYYvfy31fgLpMWs7GejcjyJ7sJZ8di6xz3Rg2KG8XJ61k",
  "key22": "5oAgLrE7sbSbbGiKaKpVncPq4FUdWKMCMJETqkYtCKGR47Ub9ZKbvePe25bfgnPDMh5BexWTiumMizeNVNiL1yjQ",
  "key23": "5KZk2j1stKc6HpiXJsJqCjQ4PdAdaRpZxCgXtAJy7oXDb13WHogThEDuW3cFiY1mdDW8sWXNEA62npAsatQGKPkx",
  "key24": "SxQJeSEPaP4CAzHKJ4AnzXG5F2XHPK7v3monYPzuTVWnaPPTyhbms3WQqyVkEGxFiTKwp7NgkwZLMb72g5HiQUb",
  "key25": "4CMZ9f8pya2rbYWxofRx78m3tefQwtCQYX1m7p4MW22hMoTCCAS1HWZCYStSzn6SZQZEco42v24i5vfRqybVrm1q",
  "key26": "3d9F6w1hrbVJPCBpnjgUWmGLpEatEWCPMpjfuA7WRKAxnd44ryCjx4a4eKCwFcywt3aeXWupoKmCw5bnG9xHj14a",
  "key27": "4dAiaMG9gouPugwNjH7f8kpNS7nK5n7V8g5cCfvao2jdEXqPGaH47ER8z7yem1d3tZ8ow3xrZYjuqbAU7N183tTq",
  "key28": "55r2npxDhN2bTBPM7Jbswm9yHL1PZqfmeuMshgBWWjXbC1xXDkijuSmfnDDrLfuX2BgaBJFguwt4M2foNWKTU5Co",
  "key29": "33487Kbz8gR5robHRPfPghCq9WTh1VygmR5P33fV3rrC21rWr2N1BKmefT7yacWxEBYMpAh6Krc48xxzgKmxznho",
  "key30": "4UZCDV1mJFYWhUC4nJk9zUGSDJ9ijquWHMoTcQxa7yeEeqJbSp238AXxYKiYcnnk2FiTueDR9x5nMoUtNsqCSQAz"
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
