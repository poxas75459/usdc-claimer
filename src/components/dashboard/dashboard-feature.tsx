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
    "cMfY3mtrCSeMf878RCUVrqMMqzioPXaPDjRuMMjq7EifXoNUKE62foayR11rJmkELauT496fLiLeaDpoUJ5DibU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4S2UcUQArMkEGpvtGDunCNm46frq4vkV3f2WfnmMoV292js9zVHzoKSvUpZxiKgfJujf3B5hVDfcDCNyaXfjmz",
  "key1": "5B4FVmmXb4wb1R62ce9ZFL5W4oL9FgaXr84jfSZh8Fq512u7w263VZcLFRA7CKRRW13UpGCGjsWDgLhUJabvXFHL",
  "key2": "3CGksgwwZELqktiXawfFgpP2e46XiSuChAQDbUoj3EzqKiL8r1xqJpeZrnbYsdY1iHstMnp55vHrDVn9n2tN9Dkv",
  "key3": "GNw4RVMyUoJz1p4VrtJX9LVASkzE6S7iYG4jjnsY2ffRLwgYn2yVdHqqjXbYF2yaf2KvVvvB4hm6JUQAGivvGnD",
  "key4": "4zqYpuECFaFfjUrbynCsCHuEProHQBmDxJgUK6XueY1DMZxFvKKnxXaNLMbbnz6nnfajQCw3xnWs513jWVgSiNot",
  "key5": "2oPCuqLzBpYzETRUPBir1jLPf18akWuhjR6Q76LWg2dkL7zyp9FDceV8uEER8PmC9rdTA72qDYKne4FNuar97ZK",
  "key6": "rNhbZnct6rSo6p1Wj2EDRBmdjsFeyj6PyYPT99rqeAtXtsUy6BiqcLXobVmuE4XpnPdv5Cy6zBojQJEueMJUqMT",
  "key7": "3cekh83C469nLwTY9U8zWrZCZJb98rNMLMrovEyTzVKnE1zMTY4Mzcvg5xwKqGySgCmcTfB8kfaZUuBWML9wYAAH",
  "key8": "3kec5NZfiC2pUvDfTigfmvBmc7JY2sb9KyYUQyag8rETVz2KnKLuKwJuJ9dPRaxVKRwxPsh8Vs3ZBkvtkarU5arb",
  "key9": "5rbNugpU7xq9dSyubdqMf8JWCGuwZ9eVuFgtz4HE8mFLD1697C468m4EV2AmLfLtGyfg8paN97QF1vsW8bbAHwHL",
  "key10": "4LoURfhPS6tySd4856RXHSz7PDmtrwWUcbRv8ynxS6nSsxaU5DcVKWZjv8yWQa7zviyWcjCMopDXbcx3SJQK1E7",
  "key11": "22xJtobQcXZ6oArCaEG38gRrLAJTvGoqMbn1ghWFWoTLHijDeK4jA57YY6SBaCGc4mAfmaw8gS5JivMSnAemw2pG",
  "key12": "3rRwjDmtvbpansjj43JYMqgjH9aCLrs2JTHRJnWctendYeRJGc2jQJgF1D45bNmU9FDrnVUM96uwPd4Dm8RNiAGY",
  "key13": "3rfosxrP2j9zQLmB18ZegSoJseJMJCk8MQ16xcSADrrAJmDtZ7KfVLiR3L6zZ9oUQQmWXpXqGDvraXzk4ShrQm8A",
  "key14": "dRqZMCujfaJR4ARbWvRyaMJtGvYscLkhDB1GEsLPeMkgqTYK6ngHwCxfw8zKtvNHrXkEMUzg7vc4ADfnDJvJsX2",
  "key15": "642XLEqiEG116q1vYCZ5ugaWHMs14QdkmCCYNtdtCewea78AZGaGPL8yxHg2aMqRJWEMX96tCUVm78a74YhqUtJp",
  "key16": "vXQWYNkbDSBx1GtqYnu7PjyhiqLJu5vZh4vFpYVZ1KxAxBCXeSwREVk4W1FVb1qjgcUmPAc8mkwaryLED811grC",
  "key17": "NxHybkVybW9o9VsudVdThbKahkhzKyJ7GwDptURy72FmDJgNUBZUaMrxZMHSjoRhxrsBHZzD22TD3FW5psHy4hE",
  "key18": "2wygZoVKbNLQ2P8SZQGRYCVoYvhREcKpVXHQ9d9QnVBrzRzcRPGFYdBmsnFDTQErwa4oCwpiLZ5uu7Lx1jCAiHuM",
  "key19": "373nsD5ehxqBtwnfrcoPWiBtgR2pnBjou1QnLZtRfNvYFt5JHjpdxtWnyfNFQaAUt44G6XnD9Fh37jFPxH5U4AZh",
  "key20": "38raQBFr8ndytKebgSYDxzVZbdUMW7KpDFGTZ6ES2BaJD4YFGmX7RzU3QsDimcQUM5sdjvj9Bkp7EtVDmGryUpiY",
  "key21": "3tLthmGYgMs1kRZCFD38ZGdHwc4xd6Zv3sq1mVB44kZRoh6HLsnc8JPsoU8q5KuVLJesJwtwCYYTLtVgRQnLSjhH",
  "key22": "4UpcgUV657swNgAkYGXVHizS6Z5jC3VkRooGnHygmQNbVg9TWKUAZ29ivWaBBCT3uF9xtrDmkfH7eUGWiGfpvyCz",
  "key23": "5r9rxyJ3hZnZpqiS2FT41E6nqNeiF3X47tCaB1epvgLgZTQrEegrXiebUzRyBKmz7cCw3PboYD32QrW7QSkZwf2Y",
  "key24": "2eTPrtEXM2MRaWXzQvLnZhPNmbtU3mGJhF6iuiGerREWPhJr5k3fFEjMUHqit6e3dQsfKTCdqc6q6Mi6V1TGSxtv",
  "key25": "BxZQ5jGAR8b1mDnYebxcqcWcqGgUFkn446r2srd7CLywS31JojqsrQJBjN6pKEd32wrnndjFbjJmpwcAQwb3gKg",
  "key26": "6qBSByP7wzhtj5kHVvofaSnRJdnZbcBmSXiV6M5DADfQRmpZ5ZqZ9eaSniM4cXNxLZarhVrEHwuFNzdVEQN8Yko",
  "key27": "2FXSxJh1rSbe42tdnpZmJ6Ki2YTbZR76qnei7vHeyHyATYdBE25uZWM782MQapzoEYEsxTpjqN88vmuxSthHWMHQ",
  "key28": "3uHbGPKiDFzRpf7X5JbyGAUZ585EBrNN8iWbALfTJL4tEpt7j3JrJMZRLq111jzMnZEJYpG7gYr6fKeNsWjwzPey",
  "key29": "4K4uQiLPvxBborww52NF3BEfaDeqoefQ3vTXmYrtfN8EKEvZpVpPj4bFRYqa5utHzcBQNs4F4meJAMzqd9dN7CA3",
  "key30": "5Wsini2BD9tpuWmEqVsvPufyNXEmW5o5o2BAJtS7qmunxxmJBV9QJXgRn895iybDmLyvRx7a9EAc9qcYJ5y3dVjc",
  "key31": "35Rxh7ERAyG6PSD2W8cJgoXszMzmkxihtAq1vcBLh6kRqXsEaKjtKSr9mi1yGUWHw8qx3mMuv9ayqeBe7TXzQRTv",
  "key32": "4KSw89B5bqnDAsJS2cktFUq4R5Hihc9CgMScfkf9t7ubgZgJ2SFCP9znSTXvgdtU4ctoheYN3BFtocayXeqbBYge",
  "key33": "2eQXqAej4Gz2KhbwE9WWetVZCXUN62c7b11dFHYx2pEBMpVivL93mbuPMz68hCtpLQTtHqgtRVWmX4PPGJFr6WSs",
  "key34": "3gQM5wmGgcC2LjQLWLZorZ4feEdVH1ggC2AHcZPd9ju9BjWaWafaPwhD4HVzqjLUVwBKuagcNu1mgdFfBpEMquyo"
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
