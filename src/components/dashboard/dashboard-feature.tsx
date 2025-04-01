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
    "2xS3VevRU1qTH2sppmgSKnTncj8eBEHxBPhjtCPYRrmJyU9oH8cvnE5chsNGBYkiKB98P23HK3LbDxku7R1NpRQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLZUJgxfgzT7u8NAYFK9Dny6NGE6FEhfuHXkMx6efaQqx3ZKNQpgrFnRm4zuood28nPa7oVqstUfhDSDGHtK2bZ",
  "key1": "4mz42okq96PJJhUt62qVCDofnG33jrmYHYFG8vCipCqUnAHgXD16Dqfw3MheLPGw735WnEpFmzdw6QtNc1whR31U",
  "key2": "43bsX61DGAPeH9hyq8jnL5FL9N6jpWkJzghGFXKSbbrJTPTd3XKb4EGskiDE4U6dHHWogNtfPUzYxdGHktVhm2hm",
  "key3": "4ak1zSZ4EynYWY8nuVsNrvBUv62FvqTTB79aEXfPVDiby8bLPzgVSt2YWnSNQyLoMm52PFoX4fmmDVsnZMB5P5ix",
  "key4": "5fW2oLzgWVrBGNt59SvHiAvTy6bPbtVZdrivLYBrBYVhNyXffo4GAq5MX1wnps6CUTii5VijKPPzfwZbp18v95MA",
  "key5": "5JvRhJ7Z53Ni6ugThXz9A9yQNynDTiASb9ysvCda2v5LuQZS4fgew1GCXSFZxs8jd2G4w268fkQeeLyJhfEn5aVH",
  "key6": "48osYoC8jw79Sgf4hdAcWwM7EVqLVNjf4B6PNjoQNyMaQ4PLp6DrzhjxK1wyudEy5YZ9UBaFbW7isbvEnJpdtScv",
  "key7": "4eFPwZtAN9otE8Sgo7Er4eXqMiPd9BScggLqNMJp53a8s83NXRM2hX5MUo6Y1TCvDPoJQEYiJoyXsFL6Hf3MBY68",
  "key8": "3MQ9kKr6apSRA3Uq2m91Y2FacRiaVGvQcpe3XnwgHwhsyCXF5btWDQwxKYCu2c7Vr13sm99sH2QZ35UGvZFKyZjN",
  "key9": "xJLQqdxHMmCX3jK1FqhjGtBZWSJFgKfinxxcFiyakBNez64otrmaz5w66g4orXowg81PUfCpBHj9SZUBtf53Ckp",
  "key10": "XEYz4BeYpwdi48xZ9NohMQJkpA2wQdeBZyDoGtpgMAdPwsAgXGwfHdZcjqJjR92bSeeYhQTp6Sn71Z85WLgQA3c",
  "key11": "2zUosmcvFSvKRVezmRXM4eJ6RwncqAwUPtxG4PwT9E3C7fZaDqhrsSahj3PXWB9J5bWBdLMP1VdPPhTEyNpjeJ1V",
  "key12": "46RHuKCyQSwHk6bu54BLr3LupHZ27JqKce3BZgK7eFayUBoqkMafKe1pDkZNwx2JkgZ2iiP5iwFrh6mcTg8TjpKi",
  "key13": "2sgm21zqD7MSdWvuLvXmYUSoyaWqw9kwxuuPMtvKHC2o7hyVjY17wp2CKsHvQweZ2aU5uan5hMw5i8S3qnfZm8wa",
  "key14": "3Gej2LWPRiMmz9ky1vJdGPuDjhRp6YXb7kYucNivJft8Mf7Qtynu1p2SRPpuBMPoBKyFyLEk5WCWwfY4JcGtnMtG",
  "key15": "5ujyfFpUWUAJdDb4tBh16xbK1YVFEBowQAJtKwxGtUGW7Y7zumfGBHoA3XTQK73PW2WRCisCkXz8DU9gtvUmPG2A",
  "key16": "5au2xXpdB4wm9jrEUNGWpxEQTu8erpr94xeSyg7HDG3eZb86dkfBuJ5CBMuKsyAhw9vuQFB85d3zVKa9PpjdF39r",
  "key17": "z9LQQCDV66fcBxqunbYFkNMsNcRWwg5vNiCnsv7jdqKdykoju4RnCbtGx3ZKk5mqskyoyESrXzqGYSSuZiwFiMH",
  "key18": "5YdASs12v2FaEB23TzUa4WNSQJnkxYzeXqXm2zUAc4nvyw4rJUJJhm61vD3NKfTCZtU261XKMrmRS2Q23KAiT92M",
  "key19": "2SMNFaUqZMuEJVb3mhrfnouy1o2vu882y3z2DSgLKLDWtZymLKh8b1vgtTpQs4XJqHqxbf4KF5hR1uGqy5FBPkTM",
  "key20": "HjmZjsH1sgkihPFThsGaYhyEy53FHVwJR72f9PyPLi19Qeum5DucRwynDK3WxfSRmLQ7ex8PZPXCmEgyMu7RKjB",
  "key21": "3KHoNKCmEV9jrGSyKQTJZoXShVCqJTFfBQqwsyAuXFocFXKvpqdYaserLuuTvqKi1XVRMGXCQzhXaBJ62ERacu1q",
  "key22": "5uEE9XMRmELxZCjdGzdVzvYwhJRLHDtikXzHc8rSJerEwYASc8gqnNDkevhZjfeQZNmJyd1HJyCw1ikAjQp2e3Jq",
  "key23": "2fbpYNiexZKezz2yky1EwWEk2hKvVWzuYBM7XqfPX1tGooKWj71nVa9CS3K9XMCWBvxTAeUCdkFjRmrqtcebXRUr",
  "key24": "53dR6SohvWTgjco2bRK4XZ6Wrrrkgh5WVf2sbxV89Am34Tfa25reAaybhFe7Ji7o62P9FH2RM2tCvooVnLXfAY1F",
  "key25": "2CaPvr1GPS5f1snxrdyNGHLZGHxfeGT6BXHFzVoGTPeYAN4WCQudKq8bvrK1BPsFw2LFMRkUpCigUZeKgs7C5ctw",
  "key26": "34K2SKR2n2dsa6g2SRN3N9mRmokxAJJM6BiMGq1g3LwMqbF9xWLjcxqRkQZo4W3WRpbRbQHvBtTMJqCSd81YhVsm"
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
