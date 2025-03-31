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
    "zHFJ9enAzSHkSxxt9HCC19W2rB2WcFkXUuvpZkc2nQp76W9gnsD6JMtgrEBDDizhE1mkE67VTBmMBF9Vs63Qk5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kp8s3orNe6Ki88M7MHPKNpFbnHzTyBW8y7wopGeXHRoCPBV5atLFMg1cwuExB7xwc5i5AQ41udjYsqLVWS35Et",
  "key1": "2mGjuXiPdYh25XWJf8eHDDcBsLtDufyTBvarE1QXmtwHC6WncDjLN3NuXydiUZwvNw9tjt8EcDxXLwgjwLweQNA",
  "key2": "5cMyoHu9opBf5Q22K6rae2EzDzUFDSkHuSC1bLKkNyFUD5mGs6YiVQeZUV9c72F35zNEmaz5KkYZ4p7Zx3S8Co6M",
  "key3": "wP5XLC5mmvHhzyhMiB21sCNCVVd6eBo1qNAZDw3moSaR4poPQTy3iwNJ9dtLbBYz7n7FshJDsPPuLw39mynC7v1",
  "key4": "5G7AY5VoGaH5WD8UYUWjmRG4thrvQttgPNRWbubq85bmU6WZvAXDg8JL5EWkySzocfr53gvLhRSXQM5xYQnfNmZ8",
  "key5": "5zNW7uroPBMsXmRod3kQN1PwgzZQKtzZ9XMCb3Lckk7h8wU38toow6AiFP4FELZX9yf2YrJYeFAtqMm1ar4VFKAe",
  "key6": "3T51Mbn4yPPEiYGxothYDWZvD7FVV75ZsQx2HGKGnsNHFsBaechFQqZeS4XVc7J8auN46uYMNrSzmKcv1ZxLK6ZA",
  "key7": "4UMaZS2CY32zabnHRLiGXtBwjze7KePqteBjPDrDySBGxwEo9RjHmXcjP8xAtsHVhrtjUzhPvc68GjNEA66NAWP5",
  "key8": "2NrGqcmZYtT8oy1WBhE3vQcbexUTN6nW5FHmwhpbg3vpiounY1Zg27ao5FoMoFyEmPcXd9XG1VwTooc5GiXajas8",
  "key9": "44vFNZ1ttHwxejd7PsB4qtKhp3gm5kruJWUfsNCb85BAW6Munab9kWh2mhDzGAk7bDSuXxUijQZpxPCmKrCMsAUt",
  "key10": "498WPRuh97RbGRJf7r9L67itarX8Mh2sRJA7Rus9uuJGf4TghjYh7tsepgpGDDsvNxTBtHnVqhkuurjUxv7Cn86v",
  "key11": "2QZbYFBsiBznFYjXQ3M18tGoXtzCmB27CnHkRRLSa6BTqYWLNf8QZbczrGLeFJCG2f9XVrjqp3PJktuGS1c4Sjb4",
  "key12": "2ByLdfkPZi676sKoYU2dkPbnkx5EZ97dAGnrpCSZ7nigDtCGEnHKqkME7nXsiqArMgzVWaFMtoKoRg1uHC3uoA8S",
  "key13": "5EJ7szXzkdPc2yos7E3d4der2tAoHotJNbCJXxFzPFTmEdwkEgXEyj1Ebr72kVawUQaoSPQQfidWePoqJUSmNZan",
  "key14": "3t37nWfbpkyBsTudwAzy8TFYxr4vfLeGUUCtTTHq7CphDHGoFu54nEng3EGVdQXzP8AZ6Pp5QXi4GQZv2hKSGvRt",
  "key15": "5jsC7A8WJrhjMSnbcdEMYzkotNLAz2RqF9yx9ubzBezKYt517N5Hrj7tKzdvFHRjtySj1JfiD3Kr74gJ6FX47hVP",
  "key16": "a5PQ8dGEov26yh7EavTYcpQAPainEFB4f4YRgwKJCXz7yYmYXy13KzafBT1X8XqoHTmB9Rpm9rqGZv8g6u5wpsJ",
  "key17": "5TUMnUMYrc5orwteEHuhK5ezmW373fhYz4MZbLQipKyy5cr7eC2rmZvJS5R52PMRBNHqv1FFPNz4Z5bkgtfBrZcv",
  "key18": "3oiyBsCin3gF8HRAJ4yLhj7dAJzVyTkKMt2PUN5y64QhTjbyUpB9P4pWsLLStbuTwokASS8uWZrRd7KEYfAGMty5",
  "key19": "4zD4bi57uphcjFG3GDYjJShZvAWdegqDQxhTYuzJFttfbH1vimBfYppdpEeveufU1wjvJv1RidaXcuZj2FSh6RMA",
  "key20": "jUYcev6XXzqymWLbtJR7ZZdBTT9LWBK1FHvAEHZAnzDdt53VZpPPBGkt3JyGqfRQkHSQnKWcrqv5rRbkvFj5mGc",
  "key21": "3yKAkuGBooeR9od2YvXFRmxKjuWu2Eh3N7wSP4MYeZ6Lk43AQathfGrErUaX6pCkpntnNGLbHBEWSxsvMXcsvc99",
  "key22": "5D1gMcMLms5kLep9XSAF9Vh97aN9Xq8RGFd4jSK4ywUCRsxwCUozfbTfguj3ivChVzc9KThykq7PjQxLZxChcERr",
  "key23": "56DLaND32j9GD6SEWyWi5LT2GNnYCpnvcrYFE4jhFVWTNCP7K5Ha8XuLAxQRDFTXznNYHqieiyWeiNqZPxN4Ngb1",
  "key24": "2CoGRXcdLvnSw7ivoWZG7riH5Zdo9Nq6RhjEfmCyY7Ai7xiU6w7zRACv9Gw7wPbCnYc3LDKnnCq2SUUKc8v65wRb",
  "key25": "4YVHMkKwh3NFYXM6RjvYXLs4WfgWV6xtcDTDAnnWYnY9mp6AguhX5unK867RFTmmi14Hrsj3qhW7djsuPVHc1dYq",
  "key26": "44F9QYKvWNSXKrL4J2PV9FwinGwPu1nAC9obR4jvS2vCsYKxQZ4jhDtmLcXCGcYc5w5xDZ6JkihSGAe5qpkAJpYm",
  "key27": "2mZxu7sY1ruWpVxBptnn9DQytukskz2RFWsymkmy2UDFBMj9R8yEZ7Hg7qVLWKrT4Hrkncvr5zeQzu1S91ERRPqt",
  "key28": "5vUHvhWmcKZoR1iTHH26eSWSpi2Kt9aKsdDSUAYeQi1uoaaZdQwdFWfG8jSHzB3TFP911hiQ31dpdpEyGtkqfkfR"
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
