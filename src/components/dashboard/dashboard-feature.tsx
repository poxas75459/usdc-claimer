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
    "2tR9Hujr4K5TCE93WUc2pktyQonsGxMcfEmbVLTVcsjAWd44kFt6rPN3xpFsNqBfLbTKV1gizYvvM7C2P7Tqp9wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdDuptTUspy5dcr9rUV1jAgsFSkD4pCiExgvV5SQij3xSRvqzNzNkMa7HzQJpho7xmUDvbXcQCGA2LD2XbY4JCP",
  "key1": "4urRpe9kbjGsrKNXHjNNfdse7nYFB1onGthLZLNKjVvk64LBJ4KMfVGS23jFRWTjLhsaNQS2jaFTGNR2QAd1dafj",
  "key2": "DYoobrDmJJJxPEpYZb98ZrWtWxcXvnU9Rog2FovXdkWCT64D2nu5yr6QwLi9zdkn2CjoRk2pmtr8K1nENAgFuET",
  "key3": "6JPyig7JZ3j5dzHoEHVtfwm6UrmyoFMJzncR4Z3vd292UHqBivmgimgjfzJ4sRtpUt7Y68DNDmBa7jdMZrfaYyd",
  "key4": "twLkw4x9tuEyHfRkok29oRaFPkcp9BgaJuz6CjWd7ysB6Wd3zchJ5wXZJyJQHJa8VK9LvJMWSQTkkGYk1JEbdV9",
  "key5": "2SKHRnBuvHFKxqKh1G9No3sLwaNNFrMDrSBAm5aA2CY6PKfxDRNhyzywS5QCVmyiMKbP5e1eTbawNi84zGAPWwnJ",
  "key6": "2SQocNVrdeapQoCUeCychkb6p1rEf1UQPKdsMYeLqqwHQhhsSmxjW3fSTL5oujEedE2eDpy83Tgp3CJCEaGhGkXM",
  "key7": "UDPG7oLCVrnMS2cUHn93zVwBbHexRnvVwx1NhxtWrcX3efwvBNN6wjJXCvayXhHR4f7MpfgsQxouBb8ZG9AKz3r",
  "key8": "1Jfpe9VVGmqyQcUXuAkKBp3oECxzNq6qHZS68EFYs1bLwDmDoSemmCToPwUwb9iu5RsZRUM6sVc4KEaCm5vivgC",
  "key9": "2D74X9E7T4bBQVLHm7Qjccasjbj78NXhw5GaVcSEEhPqekqL7YPWRPgPhhY3UYxqmB6CvPGb4m6cjJJ6DFsNESuj",
  "key10": "62a61acxXvyj3jZ9SJwL8dziyMzs4zL2ncMpgepAJLoY93xWt1FHHArvjYuHWz5AnWRUvoFYZSjrJsMbLGyakM7U",
  "key11": "29KfNNvHBGTSTrW17Ub6xMuaDjcaGapbueQ2Q2QiAXfS9V5qwPjeBX2B2ADtN7SADjniUjKtPU69gsSSPeDDQeBq",
  "key12": "D2u48KQ3VoW3mfFQS227F3pXtKEzEqYM9JBHmdThYKtabHDHcnWBMRZ1acd5g24Cuuw2Wt4tcYSwBxCmkoTuy83",
  "key13": "4BMYQyEbjSc7FmStmUpZeoVw55c213ZoEa8iTNyqWnM21yk3NpMfmdTUebdYKhVpe8YivsHooZ67Sut8EtKYVJAt",
  "key14": "2cZL8JuDG66QkZr6XG5Nsi65KssaP1LvyKr2TBQL2Qh6Y5ZQMiRUSbW3zj7wWAM5zpMAkgK9SP1QFA7ghWCMSYJC",
  "key15": "gDcoKycqtxxw1kzTgW77ySbwXag1aT5nA253vzBWYBCfrd98EXWeKpWQH95SH6oWCxAW8XPV16hen1xAFuwR14G",
  "key16": "4Tt7f7abj9vT8Cv5PJMnCpjFr2Y5DeykmXjxc6xzG2d3ed9CoSFC1hw7vwQ6qCk62B1EMcf4PrQDX9CSgJZAcbEE",
  "key17": "2dagCd2wnCCTCDsE3bWeEivsnzPS5DHkPwJc8NncTUHGaBzwzLBXo1kdFzjDujaSUasJfKQgQkQwLKhg4hFoubza",
  "key18": "kWmn2Lun4tKMpdD4MJ4Bg6MaVWwtNcmt5NRjFPPE8kSeG4yPAcdZJ5DAQ5a4UkEeRK3bs5GDvXsXHZGnktSdXRz",
  "key19": "3yfYzfUyDBGwKHQaD9pmY4jZB8QzSUdvKdis18hmCh36AGDdVmpfeDLg6w94ZKDZTWCf63YXQnrSazrQi4ydojoA",
  "key20": "5XiAhqmFjhBspmaA3X7Nr2w8HebN7trMWxcnmw4zG79qTnFMViYPt1daijuUuQ5WvdounPLFFtoECV1iH6psZagK",
  "key21": "2gzSpVZwzXWxwf918eNEoKoCkfXT1f4D9aayHj7jP2vcgZHLhRDwSNUy1BaowYPa25ecAMQbRRajXxoHAhtjvGyo",
  "key22": "z9pvieKYnnLxRPVe86FujNAV5BLfbiL6eFE7RwsdxQMJwqKyzk3YbLEmdiijFDgPMpQekF4g2VRXuxCFUvvwPfB",
  "key23": "4QWbzx3j1XNKVL6LJb7qdisro3B4UsgxiVYs1pkDm32yFdcutYcivHA31ZsVNCjzRoL4Rjw2bTtTMv58aPTgsk9U",
  "key24": "2UrNiYfwHwLHHZ2oT54QjrxhHFUAmGcwGpcjang4s2vZyfzroUi9QmyYygJRdyiMDziYmSjqibjDvSAfK8JUHPKz",
  "key25": "2QnWTYriw5ve9FKGLko1SZsUeF21ffp3CUiaWK8uMPRXkDuvr4y9hJPf63xt8AdFJJLbYT1kMTiHJTQJrqZhyEiN",
  "key26": "4DBxVKw1rM6VNaW9kyW4H38weM5KPHCHDaEYwBCUvpAFyVMquRFF9uXfoCAHXKgcLtX7VudTSW96Mx9p5GZSRyRj",
  "key27": "hr9sg9N2buTUwxmngMVaLnQ5emqtjSqYipbTdoqyxXbmn2hDGGmH6MW9vjAx8JNny8W4iBrvK3QtsmNjAsoDjhM",
  "key28": "3JNzaLSWMXQrzQtoV5PcTLYRAjkGYQ5XJ7D5wjDHPacRft6bJbwFLna87TGAV9U8XPmF26SAs6MsqHWQLkAv2yUq"
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
