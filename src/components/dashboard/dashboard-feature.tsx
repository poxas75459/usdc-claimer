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
    "4NyUsfqNYnoX3FemEp9ym4rqyJRfaLd5tTdm4unYepQqGYD4Ta2FP4dAtAmeFxVn2NVhZfdfF3RB1qVnKxzDg8Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xr3W6RqixBJok3j5miAPuWiXtXmVUvg11kLjRFrhfB51eBJDFFWoqq43Gn8ZiiJkEAiJxig8ksuwmwqsphBDcef",
  "key1": "4NFwUEQpLSYRGu7e48AxqE5Gdi8MJFZPJN93jzfXjnG3aeotdEVe3BnQcLNYnSC1Bva9hyok34hYw8Kbcwv6oVXY",
  "key2": "4RW5vYqXCKkSMXmKyZwknyCLtW9Ctk9iLNcqsPbsRN9UnHDqq8qdrcWWAvPvmWqnxCtEsjdw5Zcr66MFEv8qZdzz",
  "key3": "638UGR4c2Myv35DSPPTEVAYsb6pwiQVB2QgjkXA9GMkpyDAK3v79DeCVsA39pVfPPi4Ts8dj2Q5gYMtj9rQjEEY9",
  "key4": "2vy2dTEsRQy8W2kwYdMexS6c5Yrv38Z7LLfFNF3dYCckzuoMGff9PoxqmKkxs7Hbp7Q5YNj1u9atxMUvxGuGufrR",
  "key5": "3eAxreeQkXZ7B5XoBrTvV75x9oKhXXUiGQfEHj2TdraW7uFxEWMBkFRwTsYwgi2c9o94rRqec2bTomEtNPD6oSUi",
  "key6": "5GSDweSowV4BQfBNNoT4ptb34hVYmAQoGVSeDBg6hw11xtRMs691PCuVvvd1UdynzXsbvERAcMSsAbxcXo6RSBAG",
  "key7": "3gA9PmrqkeaVkzraTks8T44ngXfU92rMiUv9rYkXfJzBH59QrEexWETKF59XxYHQehXjkJwKRmSdXsStchZPJZqJ",
  "key8": "22tVN3RCspdPVU9WvG5KV4yiKnJY7dCGQcBNDyibk3aHJfvFdXV6eCb3C2MrWAiTCsR2moMLqAkfuxh3fM9qsnBc",
  "key9": "5PjcTmi4B8vcKi2qZbeoRo7tGNKXT7FzTnPXz87VhL6sbjwh3in3BQspAut4wYBNKk1uNrtfW2DKJ9RUEDE6xAM8",
  "key10": "4ubzFXDrfo7GBnjyyEK9HpJ3rrASrtzCdpHZV7KdsLfkJUrYsikEDB7KyeBFAGCztqjuFGomY67od8ZzqtpSwj75",
  "key11": "4BhE9kF31kxyLL2Pthfj22YaiBGPc2A5CxRXKBSjhwPrDZRQscbsvcr9QbJGKAjHyRMjQvKzK49pg1b41htrYVGe",
  "key12": "3LVbyaHbaPS1QbXTh31mV5thEujkWd6YPzCLSio3rceE8rQZF3RyGf3qz28En8w4KGiRvZySHDVsVLYMAwYSAyHi",
  "key13": "5BdVnPaztMxopJk4TpeuWvdd9ij3CUG8KRKJ1bXam8qMG7rjMq5x7zrHYfSWzYXpvJ2KSbsQThW4moVFaUp3XaaA",
  "key14": "21ubSBzx3BxbDtKZJebkiBop5MeTvkfxueBepWGPDzkSs38nFLZVADhzpkwwG6HL85vredvLt5nQdfsDjB1Bnmcc",
  "key15": "2e4Eb19Ggv8rHUVztKmKdVXdFZbuATsjtn1iXZoLfJsEHN3VnZ6ytbfvE2sPboDb7hhf7N9tvwSCfqbCZEgPzZAZ",
  "key16": "3QKGTyeTYRzEqasPJoBdPWeWHh8wi6dNuDexgguWk2bwhvQ6XB7AZ7v1Xp3VXH9XCiaByRA7HcrSyxtEn85sh7v3",
  "key17": "2u2tTh87yjoUgadNRu6tJs5sQRJzegQpUxFLaNcFVBL1feGtHHw2G4REkqyZtVu1MbmG7XMj29VWTcSR9S4enmTX",
  "key18": "2Pk31zQ1onziH2CBhX4WUCNHxh2YdY8HcpPcH2jnwm9kR1Px9bgWfXbfLBWcssSkJm9pDhgaBYNQ5MR28PrjKega",
  "key19": "62FCh4hTauxWQnMrTdi2uepwT5eMrsEBwczbfQxAiRNpjzPNqod8Eu9JkUQLZ67YaBGCPvB1Qb3MNSCycAGYF7aA",
  "key20": "a5NPqiNCQmrSmbzbKMMyQPqxvwU6qgrcQFuZUa8TNTcMMWCuuzTtSBp2rUwXL1LqSTX1CFepY5drnHZwSrJLGQ7",
  "key21": "4m9TSiJkYNS6PRCMi9mHiF97zyf64ESB51hrnBUcZjuqYZczt54jMP8P3TPChG84FJja4A6LHmLxHCDEynSSBk8r",
  "key22": "2y7paTTPtXqwrPUtJSf5qXBECfUFN8hoZGumek1EmKRJ6HwAPMALHGrnN7Bngnb3dLDQJ1uuPiAJvJWqhHJp3ftB",
  "key23": "3Ma8TzESjZtFGTG5suBBzMcDuoRDMXgvxP5LpiQ9qwDd5HB1X91iAPegqxBLxNVuQMvNtYLkcz5CSzkzN45iXy1Z",
  "key24": "FLyhVJ24kjXAgg3EgCtzaFSmq191LyQTTMkei4w3qnaD985qgaaCTfsYtKGfWXzyU7mpK3zkYPdTKS3GWdZfpLJ",
  "key25": "5CQByVzG6mBER8Pbh7ja6bXGbm3gRkTvdxVjXuHQjcLWgugiT66cxK6Cu5uqghFju9PjiJt4m18LGekYa6Mchyxt",
  "key26": "bWPkcowmGKEKryVtYfQKc1yXKpMU4rSAo6zhdGcKSX1sNrwzGTWTxw7WEtSrL2ysYX9P4Cs2crYKNXA6cW2xBLL",
  "key27": "8tfUJYgvLPwmn1pvRtHqv9e8MtAMgswwS2YRqnChMusaDEV71FHKTgcX5hxaW8jAaxLi7rv6miiqmD2SLsV3Agv",
  "key28": "22UyvCe2y7wG6JeZdquUqonMhFjiPAexhSZpPXStUn5LgApmyGq1L7BmuqjhptDKDM7FAhiErtPnG44ZY4dq3cBn",
  "key29": "3sZU8tzFUUV5BMut3ZVpaRWWXsmAEa17fGd27FsZWSLuVJUTUTjt4dhS4T2gpRZ24vZLpWWBmrRwGR9H8cGkAHcr",
  "key30": "3CMAXdZbgTzUxLvb3cbBJDY3RyUFbWN25nahrDjWxTZAD7X4HUQ24KPNYLEh2qAZPj5JqgGu2dNgfoRPV136tWHA",
  "key31": "5tdCeGPCuKbUqsD7c612vYux5jgx7632sHQj3R8owAZsFc3SZoy7uyiSbQopYNBgoJQ57Xi52vHCQrRS2yYSGRTp",
  "key32": "3Tj9twoHKLfmfGxiA4zgJqzvLQansAV27PYn3HvkaV3UoQa4HT3dUFyGePLnFrTDxht4uHCaa2RRetpEvxrAneBW",
  "key33": "S9cGarLbo8RSHHKVQxPDSKUco7tCb1JgEvvFuuqT3cwwpvWvQ2YioqtcLpic1S9Toicwx1vEEodeZrgW4gaFs1A"
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
