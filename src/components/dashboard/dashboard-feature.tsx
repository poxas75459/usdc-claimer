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
    "S9WyP8sx344RSEWFk38c5VSq2AykTJsdA5fyBTD3uhgNZCkA8TVyyvVV57SQC2Vp7WZKSFm9NEqetdrcyuhjVHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96fG8GYDYWZD2zHsYWjfLA27N4FLsupyoK7PZ31QBQGGoX8N25RKMk9KvuzcJzYmbLK851DZvzPagLjNeCsjmwr",
  "key1": "GQ1vsCsSHriEMjekMRkV3Trtr2vLqTQAvkLuS29re3L4VFJX58sgKi2JGUzYSEKH88JM3f8tvzgt78NuZhRNzan",
  "key2": "5htqZMNE4yJM7gnDjMTuPeCtGSFeD6RbeTMfeRRwHSkuPWjxnLDPWiw254MknuwXKn4vDqyeFkATbPgFBt2DUsjB",
  "key3": "4BNmek9p8nHoXMrz1iMek1igHCE5zVtZd4ksuW8rwAgrJ2a5uAZKQ8MVg1hCQGdknn47N9UzKX79iYJ9VAgSpdAj",
  "key4": "wGtDFjEez7MpKNfQrR7r5paykXW4HNeFWAPNf9FZ64F7ZVfBK4my8GLfuz9H9kq8oC6rkGt99h9uz3yszZkuyCB",
  "key5": "3J4jWb95mj6X46X4szMFae8uuXnSuhLLU9KMYC5dByouUxqmhLJPwQ67wdiooVjenSTcJAxYZ3tqNhexpTvmwxwz",
  "key6": "356yys1s6b6tdDXDezK4UTZSE1Ljtv5XJ36HmsvUedXwSPRt6ojfcfcjs9V3rY8X2VGaw6R7xeeB3VeMWZpwWmHs",
  "key7": "z7ozMXZ99XA6ewRbnZJkQMiAnyKoWVmJp8kyocCJhUZMdxohiXnWRxS6VNatLKK7NgwQo14BwndZoSXEkQRAxGw",
  "key8": "zuLXcm3kKghd761ZsPsi6q7eiUzqiHhWT5AMadgbSBxqofkDWnXnNY5g6J2Hz2Cx5eQRnVkitcenUsBJPPzRwnd",
  "key9": "3vNpv4SigY7hDVH2mkjbgpzUCj2ecZVDHTbiqW1urMgwNCUjy7Pd4mhD4pLKZBx2t4eCaXJigCyFSTLQp664xCX1",
  "key10": "3HkLwLnoe4FBbNfYn7NUU5y2PhcNvatNfkx4c2XGTGBqg8qbcweRMYFTLJGpP5M4Qx7Worzu5NCK3arowQKF7itm",
  "key11": "2NDGcyZvVfy2Am2M3tehkvRxZ54o4WMAHekRVmSRHmpMNKryF1a5hkW2d2L3MjAbkpzq8qtNCPK7Ku87AC2pkQB7",
  "key12": "3jL8S1Mw8jqoLayWEiyaBkMW5ktfDdX55WpDt2EsSNGXf1pud1SGecdNLtVACT1wdG2fekH72MacBt8nGrwzmnta",
  "key13": "5GtvfNr1U1K4ak6Ygujp95R7HaEVAbDhkJHSJit1VBtkujeec2yJmvdFdbPyVoyzuHmuQLjutRMqz7rFoJZCajWc",
  "key14": "2evBkQZSJJt1g9Qe17mDmnPM5cYnbmKnLy7ogCsaGiEc3XiEcugaYoLBdLcyhYduNLh8LzU15S3nsNv6VBiLaiRU",
  "key15": "54W5MKXerR1VE2ANhxYdDMmGni93avVnA18ae7bwkP6GfmXo456mpW4YcF2rye7hLtsnaEAstSCS2W57dVhZa3Cb",
  "key16": "3BcZZZBkKjy7o7xGNGn5wCjCUntuDVJ1jCwyX4g2t84CUFmGQLdWRh5vKiJdb7wAyoF6MWosHipkmfcKGoGrfK8",
  "key17": "zZ1b6UHyQQjy4WvErs5Amgo2an8ABzx2D55rRsUcT7yLJH4mgHgsyZGDK8SLxDK4YfEAY3ABztovwDNpnm2vnDJ",
  "key18": "3N3GajTBetKkHtAmWdxCbd2kNQMveWinhPwZ3iteb8ehDJnb5oF3WvjAFGegEXHYrLSTMEkax8adzjeJH3JP7KMK",
  "key19": "34jLt64bSLjEbbgEen2Fek3jKYD9unb5umx6fU1oUSf4jGwSCNevaCtcY1VE5bjd4yBphYYS4weZSwsCmAKEd6uJ",
  "key20": "24SxNv4SpUyR1iJTmXHUPBtgF28vrLrPa4znmKjsAXap3Lg5N1MqP7mjwCZ9QQSKeStp6bfHN3hxNac9meHHB1fG",
  "key21": "3UEp3Sm2Z6TCkJ5NqQmwXKTpNQQQw1iUvYe2nen2jQ5E5VYcPMK9atUKG4jCTyQNb7k27bNbMiRmAdAzL3xbkhdW",
  "key22": "5bjLHfM4Rs9ZdSrbJ9dDtaHrZhfsw5LJrGAN3dWHSuhDc5MBgd91vXfyWLVZkSE6qvuQBE7LEwojkeEe3hP6J7cJ",
  "key23": "3qDc5bwCbCj7jdLaJ9u9Lumz46PwDdGoMGz2F4RC517B26VC6S23JzRsaP87NQDZHpZWX7AcWPKqViBQjk8B2qhV",
  "key24": "Q6oZKfwAYCWxmUSaHySr2EXL45LzM8WE5qkaxUQkchtBSxf7YTiiFQtTHbug26juXBzipDY5UZszxQYb1ngfHuB",
  "key25": "CkFRsiDiazn1oe5YofXuh3aSERhHu8ADG98wNbC7m5ugGPUhTZ9QzwbommvpiruF6UV6dDk8cGDsDYoRfqPhT4m",
  "key26": "4MWDXFPEQKi73JEnS5LSD7U5bLU3dR6Hnyc17wwBLtowgvh1SwxNbbqMNNGdkaJES4nWKie2dP5i7VKky7K9FgbA",
  "key27": "41UUD9RyrejFvJu6jjVuxuBVbXYFjgQfYhRaqzk3Tdtas3JPAxSbQjCzadXknh7u42YngCm19RBUzSVDVYu6Dg46",
  "key28": "34ijK2jAzBhRF4eAvgTUizx4kjSLPMjz599R34VsUhVgqrHMAsx5cgz3WCU4tKH2m3yqiRVnwBdLPisVeEyyP6dm",
  "key29": "31aEKSsf8hP7rdT7AqKshsTYxbxZjtvZuuaSpCmhwqonFXoJ1AVaoSwpuQdksnyXVb4WPRbKo3BB81LwVyrPTGFK",
  "key30": "59WhCRmCL8CEazqqVVAMRF7vM98kRothijKyCDTwBae3MDCoUDn8bmpuvZW3Em1Xv4g2T6WxFGFnDDKSnDzccMKw",
  "key31": "3vHvYJydX8Q5stBhsmQcqYdzzs99iEoutgjzfH2NxkM463j62mMxZHB6CX56yf6Eq1wFfmKZT68MJbRCrouk6Cgj",
  "key32": "24H6kSGaLvaqbbVWFsZVUFHrGV51Ug8nz2LLA8iUextpBwFFNWTq78YkmZRXKGLNWVd56sCPjycxjUiAqwAnsJRm",
  "key33": "3VM7dFafZHKWDyn5sx1W7RLYKU9KWZhatmpxhrBujWDoNCswvGHrtu2ddUMLdsfM33xbGN495mFvA3Q4fGGP7J9B",
  "key34": "53ZDAzvyKKPphgw5cq7gPpoZN2vUimbGDoCRYgRfiggeVgQj9LjpvXnQLkqqL7fc97aaR13VhY9FBBWiCBJUSvXT",
  "key35": "rS8qYQVTMHdneHH1yeqa82TAVLX45aZGHXVWThtWDUm1UKRdaZJBw82dwmvr6ZHGYXCLkrSh4MCfGAKUwDe8vAU",
  "key36": "3ijKENXiVXfY9qTJPsagu7DWk5YMqgDBBgxshwWBBtJJ1kuwUJSRvBwkGLbZi8K8p9MN4LwT5bVJohN9tgDdq8tG",
  "key37": "2bSsPHuu8Srq1ypNiBborwaJYeQgehxnCs69Z3q2ft3xsMZwSEpYWqD7MkNNxPfg7sQf8iPWg4oAQtf2PModiFcg",
  "key38": "64XC25RNdMrY8kZbFGuVXGA3sz3s5dMniTpdEjVCsm1YfYYPMRMQr9JRHkWERGPwUctyVZ6xwsSdcLhRBqjfykPG",
  "key39": "2uYbsXpdbvV6Xp1YkymLc8ii1YW56jPzik3RF1FvX5QBfcaTuZscdssjXAznUJAhERnXPvkUFsDFRnk8MVwq9Tyw",
  "key40": "3P9sLPNGdkcALq57FCz1KZJG1n7rr81VQqymc6FoZFywP9jNVom95uVKTwwzauc2PajAVij2JwiDmfjRs4i43Yxo"
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
