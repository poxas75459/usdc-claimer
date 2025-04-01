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
    "3j74TzDSALj1GpkBuNykwCb8iWHpnyB7t6xqEYMV1ADpjQfadfQG4EizzxNoY7PC3wYu9AzDwETh3E9DqwXJSb87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YBXYoXfeuEg8aCeVMEzdqQy6H5oV1gB8M1yYKQvmRTQRvY6oW1EFNo6L1yJ2V4GcFcoqRSXv88wFpxogW8kura",
  "key1": "2qd48E9mdAk9v3GwtTGa6vFzSgeYBih97LGpZFBaE3vi5nLHD8VwJXykX1dSRXSK5QRns8x3mcVGEhXZNN1VKyRK",
  "key2": "3htqfSUdosdau9AyHnFiHtQscUAJzPwj9f34cE1u8GxnYorTAP85RgkhQtkipXhCJDMbNj5eyGE4q4zkKQigKcp5",
  "key3": "2tiBXZ2F22r9xATKfpcexfLVfZ7aevR1jadVxYRqCQdkm68h8xybkDdduufgQvmuWRU9SZECwW7Hxuh7huNxjhvV",
  "key4": "XTYNFWneib5eyDzqajuyLFXj9YMaCmnPkqnFLr9Dufx4vPquExUcw3xix2AyFHrG1vvJ3Hmn5YNagDCEZT7FdXh",
  "key5": "2jvaBXNGs2ktfc9pRUV34bUgutpNBHsyyEAuxLizj2ZDQkvtgTt8wskKjcdird9pi7eUGBKL2pM5evZhNvBcH1nm",
  "key6": "2gGyQQbfQEQufVydWN9uAxLjBvzhvZ7xrWABFAyJwU2hcUvJHKCwvR56y8ayaTkRgQj74HL17chj2QMo6okyWwmC",
  "key7": "kiw9T8eF6PmjDL53xzwjBWPqDZSYiXFx1jxB4SNRtyDCpsSHqy8EjBRsCgoW2WuaSW6KQDDN7yCdrbLVVkYThXN",
  "key8": "5CLTnjS9KEzc2TdAoqxYSejM7sFPKQCvVuPw7m6zYNXvZSp9WLmnD6bFdCdc1Lsm3PDxcB8vezmyJV3jphHKiNi7",
  "key9": "3K33Wx2JTeQfeDySnnEjQsNd7NGyqh2GxumzfU3AU7mMc4AjXrE4B8dmFnYPwpsqvD2zCMHW1CoHDboPWLDRkMnJ",
  "key10": "4LiTs4Q2wiYU2xjXcYFUcT1cEjiSvmLBT6ummjzLLGPBjmAdAPeTngSV2EPiSt1gYXVvuMQm2eeDFbRKuKDsCzu9",
  "key11": "63APyztqBDVkC4WyJApABwzyabByGeA1X5Kp9SwFjEtVQsYgECENC9UV2pNgLUNvW6St7FPAMARqWeGn2DBaRfP3",
  "key12": "3GJFVPvz7zaL3KAYCM6iFvtgY72PBXNQJfSgHebiPcV1924DDj8mTYBEw485KndHikujAmYVQn7o6ssxy49Wewai",
  "key13": "npXpjffYwFchFZ3itN7pFBQ9iq4dH3Xdvmu1zoMTinG1iyoa1L5ch8XE9zEbcykgSwSGG3i5uSf2WxesKxo7Z9p",
  "key14": "4NBYHFVHKR9E4RXgiaEFz2UXf6Kyq7A3kf9ocSNXTbNtwESXEBh26XwjZsyfHpvyUZsnkZr87weeJuCNFag8P15Q",
  "key15": "Lt4FNjTN5EZGKsZastNi1VnJxy5mriXKxRSNZqPZoTiaxGKwMeKs4miwcKeMTSDSY2YibUDWPsBTH6KCyXYCWdc",
  "key16": "YaxPKzR7ruMNwr3DdNiNBNLiWWvP2oTSnzuNfF8jtmpkBuPikYb3DAsFNA4ifmDJzFhMDbU5Vws2DsFzbf9c2pt",
  "key17": "5p8ieknRJobvUu3DuwY31dDe5XoMfnHQA7hqTrwnyhpjqMfRAnSUt2cGiZXVNKUn3Jd13p8yb2vZpKHedAvPc9M7",
  "key18": "5N2ePRJNRSzv3ozHoByb5ufiK286Hx9SS2HNH3weLdu7spa3BWGcjN4hNdXd1WfGXZhVKFxi9RMxkpaA3xXSo4an",
  "key19": "4TXWpBXQ1W5WUzjzx428MXQbCaGkabB22AziDKxzfCejxXMzta18eoV4BWV5MEBVHjVcCCHUFDVw5RsJufjhGKa7",
  "key20": "3PRykCtuTbedoYaXprEyWzTSxXUb8T91RbUcpVBaSbWMnVKm7ha4dCqZvGVwGqD1icDtUeeZwQ2DZByCrjEQxT82",
  "key21": "5UFuYfBB3P2iZZd8Rp1RFgZXJrp73SV4C6Zd5pcHYwp3raSiGQgNgtikB2WH4CxVpKWwPVcvdg1GbYU11638H9fi",
  "key22": "46H22rC2rv1z7xCqXd8QCecQTKtnH9jAs9LNsSPf97ZkhZkEmf9Hpx51c18vAv37nTWF1xny4XsYWBM6yctSjL7Q",
  "key23": "3VTxiu89nHqXEgWpBRPcVGohKiDfAPeGr86K8cHiBP18NWMWpyFcHZLuDs3RzhdUyVZtKEBE5DNbi3Cc6hWsacRd",
  "key24": "54eWYt6Hyna89qqF1xPoRgCK3Dw2VeZ3jjowWLMRQtRUC7oo5u53NBcPZVzb1L8CCRz4t9btwcDpAmQsrT3TbGXG"
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
