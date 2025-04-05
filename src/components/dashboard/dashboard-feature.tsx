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
    "5ega3QPaeu4BKHX1SSjSFZTjGwqHE8fBbkL79QCVJ8FdMKZx5X3s2479JMDhQBNP6mnBN8jU8KovkKHoPSdH1gRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rgSkLUWzkPfBMiBd2DZ9da3p5XWRLnC5mEPbLoB51jSJvyzdEBBnzkyxJ2HBvCvHUC8JS9sLCpwYFnUyimCTbBn",
  "key1": "g9co3NpccfL5SvUi4Y5Jmsg5KBU1iHkP4dUCsxuWyvZrDu7uuw9PsJFSAiK4m1HPeouBgiXd7QaLe4mAQaTMc2F",
  "key2": "5kbP2mvrEVDzKc8a5guCsT2uL4VGjhPrTcSyAWjQPDQHHtdcUHo9Yg4ZsGbHmGDxSaU5JQUvaaYsBBnvYvNGssHc",
  "key3": "57A5b2Eic15AGn6jNhZzbhedfScbjzVQ6FDrq7xtvgHp9DTE2kicd3zgJ3oyASrwpqUyMzgba3KHLrZvTFghuqLy",
  "key4": "2HWxgRPJ1ojTZgpomgjiZLUMQ7vC3jNSgPsUXDJNAhDAd5zdtTHsDGmBGBHGPRKgiBgP63oGvgwXmB4SdAfBERrm",
  "key5": "4vCpsX8Hcdgx4o4f7Z2c3kreV3L1gaXucUbGZDMhYQT5mCXPQzTt14mtiWT494ap5TxFFgDv7sYHTi5USDvpYccU",
  "key6": "3dVRogtJeTenK1YGbLH9tsCJXZB6XU3nk6SR4ZwLqcGm1tzzULPQRZQNLYk4LUH6wPQy8KdJT3kHt76uebjgSGrp",
  "key7": "5sdyPXPYfgPZbnaEtVvX1rPqNgGgLiyG7dydWEnD6iLj5YvuC4DdvDtdSKnQQHw4QGTRQsP1KsHVyKu19SFxWG2G",
  "key8": "3FQshdzGxVoHn113HPG6LhPMTYCY9WGbk5fxUQZQQGAs4jjKKVLskZkbpPrZyNU9NPa51dQP3hpQHZW5gXFEhmZF",
  "key9": "3regsrZ7C71ZTtzFYjjd72YTaZzZimUjjmhEM8S9bXmnBQU5aozWcT2QNbo9CNFZf65LiProTwLBWdBRZjCVLSy3",
  "key10": "4zYAF8oYi9Ryr3vZ3kbTaVsbczukt3z6vSJf2ncKJi9giA25iPXx9oFbKiUHL2u9NE1DYCr7XvCGC3vdwayrNbQ7",
  "key11": "5jE85GGxMYbkkMDoX4JncHas78wgThiCqvM7TcPcajHz9FvGNhvfRycsmXbQy6oAZTjuw3B1giRhgNs3Cd7PkxbB",
  "key12": "2CY9Ae5byWw48nSdWv6RgXvP7m8TawVeJGSZb2GHxgWQ7256U16GprVCT5F7NRqMdfB1jmDriNCcW2GjsJyKdCub",
  "key13": "61yiYauDeXZjXGS8U8uJGbC7SoAvPpRKxNYZDZPxSm6XuJwNyfa4nZX7fPXmpZSRY9x6CqQcuZk5C1DkpaUURMGR",
  "key14": "2NvT2bmcnj3voEhHsLCidghXccKarXsfhiJPQVU2qyAFrrVDXF6iCLh3EncPTSJiLiZG35N91DVPN8N9vAwv5ok2",
  "key15": "L5bRGe58cjs6hEShFF9UFFrPqb3aRWyFYULURwaHXZJ4hrScFjsuddhxrLuKKQAanQt7mohi1FErHY6pnPK4JWf",
  "key16": "3n7Xh6h4jcgqG2C3K6K2rqPnZU2fHhg8oPrYnaWFMBg7oevYM8xtpuczeQdzPs8yDL5gKDBg5jt1zueRrueXYxMQ",
  "key17": "6VVGEabKHc58j2xdvPj78xRo4tAnwYvcTpXw1vUTG5WxZN8eSzfqzyJHBZVYETmaWMcAh59PKQjp3QzeV4RGa8B",
  "key18": "25TFwk4PmZ2eahKckbsJXFPkwb8mF4MZjeRpevt7Gkw5cVZcvn7FM5qLJTpzkgwRGuGYxosc6hRJ34ZykmDotcF7",
  "key19": "4x2hAXBGKFsoJcgJDsfAkHk32akD3RcVwurXayQVSNumKtCHxoSMkg8JPLrH9CJ9rPKoZdqMLBfY3vmmY5GqrxkE",
  "key20": "3MNjKup78MjnjstTfVK3yLmN2sUvU9c4fvVmpucwujgZoQocxqUpDQVBsAggdT6vDmR1rRkHFNmuXqoHssA1zTQQ",
  "key21": "5Cgq4jSiVfDpmoiSC8uLfswnmWrvzbrZuSW6ZeRAUNCM3kfB2Nkw8mpJoSifZqnjjtZSFcvu2MebCLLGbiMTgpTq",
  "key22": "h9s47d3STq7o4pB2gdzu8NPrfEY5GSjSF1xqjgsbqpHg96rcSeF24Z99jPEo3isoMvS4nGEGad4uKZAptVxAcwt",
  "key23": "2yJNzz3FjrwhL84Nb7NE32Q3gzvcwC27ZCQfsxmmUUbayEK1DS1kgjzSNMpEZ6WtW2CekfnouN6nnBuAVFkvUqUG",
  "key24": "2C4v2M3VUfCuEvhEMMw9ZBCmqtkZGHGHkMX9KGLJAPrnRZs8vHx4BgwmfbUsyMrqDzuZBeAnoJx7gxW24LLTQXXF",
  "key25": "36vrJZP8XSYymXEu88CaDraNydbSdu8r6q2CRJudPCEfjvKLLXMes3RGZjrFV65RKT55fuZo956pUHifW67Ef3Ja",
  "key26": "5FQaH2FZqqxF8tnbFJbXYAnz95RC6boqwYEjNqGcHLSHuJPonwTqni6eTMvtEX2wLmvCs9oCxFSaHY2p2Krx6wFH"
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
