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
    "2c3yco3QMYao6GPu4W1cr1oSvT4kBGb2aRa8UR3sFbVDZ2d8JncAG1DSPGu71f5qEUfWNykmaBUSLUdfaM5rGPQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmGX24jcpA51g7Paqp9JTtAEvcCiGMTeHwaY95sVgcLBcCfuAPUdMsGbZk3qz9NW3XpTqEhzyjvrptWaRb5yJSb",
  "key1": "4DRwDdX55EAyvkkEvn38HbzMaPneNCXP3b3KBMs1DKVo6WGSVqp6GT42enNmTE8xQXRpnNyFVEYaHZBX435csX3C",
  "key2": "5ASzLH9gkubzTYq8xQGyM4dgsDsQVM6ohKGyp2DYFaWk2icSTkpMwuaZimSaTZXHixcqjvocaFwu91ECLqD4Xkuy",
  "key3": "5JxixWdJ8EL91htFdiXpzLim8y6aoGp7iS3hdNmjwrjcFZPtQfV3qn5u2BWu6DSpT28ti8RvMDKuM4FkJqPLwzWb",
  "key4": "3JSCLa7RC44H6aLcncdTVzd4AtezSQaC72pw1uxN1aEqkGythRKtzCAdNnxphcGgHwrxNDsq1mhaPFACUtzy6M6v",
  "key5": "2nuxy5w5aDkd1xUPDwzHPafMZ2BwAvKAzVZgGUfn2n9CpMKBiRNZXmzpbbGVeYcQEj5HXcuhb24JFa5Txy351bid",
  "key6": "5dnjbW8UT9VvhxCNJLcd9mHpAAcvyVB9jochiNpYnMJ4m9izon2Cv7SCJfLGdjNQfQY55i2QjLVXPhYTrRTRAAPp",
  "key7": "9AiwnsmLLdf53fHfSnnY2dj9fvHkoGKNpEGiMwg7VcFouFfqErBp2uhk5UkRo2AVdgNcD7Ni98A6Wvu4GSf3psz",
  "key8": "3fr11Zvbn3B3SoATqkNC3V7ijZg2F2YwPq1aaeM1LZPKwEpdh3vuDW1fSrRCXcWGdFBYPNdWostSv5oherPuBZvp",
  "key9": "62LtbNAL3U1UMSnQzBBx7vzKTiqQM66NfvYWyWqFohgdmeUUZ52Eb59gynsQJA48CEHDEaTmHS7wj7y48KZpmuuV",
  "key10": "2YNtFD6rF6VnKRrAjtcdUcMJ3KkyPQL8cCkoAa1rhpQjdff1HSVyFEeu8AKKRSk3vTcWGDCL3vBoFTS2vdFPQ74w",
  "key11": "4a27bs1VJ6Z67crsfCYkvut19W1piGFCoce9MVBphLyJEQayLXqyeDU2U3SrtEqB4nKBBx4zR3oMGiSapX6r65hS",
  "key12": "4PuXunkiHRUjP3iSz58uk5VA6gbCVcZRWz5VFUkw2sYWd7pvbV5mmhizkXoSsC5ppdA9VFiRrEwHm7e9XiegDsc1",
  "key13": "3DZHTshEbo9DYJceJMUvQRMVEZHbzLjYjjXuZNk6YdeZPTzjjNGnyr7JG7sSBPMSua1t2hQVWWKreFc1TLon4rea",
  "key14": "5kYsfcxkzXLgBgDEG8ykUy3jbVbWRomjSgJK3yn9SX9S5sqspzBKj4nTanGZY3Pmrii2bqCy7ry8vbusVdkSpaUs",
  "key15": "3MJfjRhuzpzd49AXvBxhScwg2n51XrntKSxW2Jxpc52NFEtHaGyBRgUKChoKdVFKqrf6htMFQQeFcG5xGuqXVKvx",
  "key16": "4MtkpYtF6YeBVok8qbwwUUjiQzjGisfzW5EU4ebFCmXzkBWQ1LSxadf459zs2VwmuNx3QAGUoYKRUBzAgFoYP6Pc",
  "key17": "53vyzXqjLXxAiMouZzjjJVr4UzuxVXMKfunFceTcLCCD3NVNUKapSyr4aaqhLx2LW6bo2jSnCf5m5ts4QFsYyqBz",
  "key18": "5o2ejk7JZAoUC6m1sbSMDZruNh5zGwL7R7QoUEpV6ZPpvmEj7Z6nrWf9kted5ARFXWJPPxcPXzeCK1rRneujyrUM",
  "key19": "3HBb7RBa6FAqyVmHuQhji4sntn1WezvEGgqdB8YCfX4RysNaUswAXMYnyfiVCQx7Yhius6Np3qo57ZYk3v86qEz6",
  "key20": "539gkqJaF6ShtwbYUAvrmhgwNPpF1jHN85e8q32K165jNhfDQkJX68kC8HZVU7x3qqPaBjcLCfj2doVJmaMFH7wP",
  "key21": "46J6J7TCn3n6EGejk8C1ogkmBj1Zzdg35MrWVR5S5tPeEKqGE5RCyLt7XYKCLFTadbQc85b4LPKp1WKx5nMA5MoU",
  "key22": "ahxoU4wC7mQLhVcaqTyRvN3rAQ4PUfbjaY4WfyU8baPJiUZHkZsUmLi6WvGA1kRP56kMa8qYVDsS55ZarJcCGhR",
  "key23": "3e4uQfcjtUL5Dz8nGKLi3exmUuhavoJmXN9hWfHzvt9MRQT52AvyX5Xu8HCw7MDbXoJ4VUyUfWGy3wwbWR2bZy5i",
  "key24": "2DXqAWu6y8VBHJwSpycqy8A55QquBYnUCny9Bs712dpVwVtKNS6xK5awvpebF769FSA84j3H5gatGRWuCRqraVqU",
  "key25": "3pwxGC8Hcp8neBHwr2PA786kAbUHijAqsM4cFTMhaVTph3JCTbCyKCPTNfxPXNNZeEuKCPkUeZRDTjfarbfch6A8",
  "key26": "631J5bF8PSPBwtaVN5gEHEpNMThMGuNWtG5UsVt39dvsJ1a8YZEzV4AE3scKwWbxaEpm1CHQdXVCeY7LCzRhh4Fy",
  "key27": "2rNeC38xHzCtHdSMfjEKknX5T3X11AmML9zKCLMorB4eoqnrwZsQeB13rJMTaXtxsgqXY6rP9AN64cRQRe6hnTyh",
  "key28": "27mXRTTNavkmc1UzNsC8bNjx8CM8gtMjtnsTn8V4Q3dM3oLjpz8gRRTtBnPhUKbbESuMApLNgqdHaPF1bzihJAxp",
  "key29": "5dPKiUtUBz3w633BT1HXMZ2hWNY35JQHodiq43FhgFfveJJU4wHZgdaXp2gH4GxwyrWnh5HNRY987CYRcTKA5fU9",
  "key30": "3GgVt4e4zknZfkSqwzQ4xxkgFc92Eifvt9av6tZ4yDhRipn3ypPWKL1k5Vpk3Bf7xKJ3SYstu5VP8re3pzVR2zfN",
  "key31": "5NBNmoHPzHpW2TEC6BXzG2heanrGpu5TARKb3BrSWGF56haDFreR2TPEpurTKX8eyzo2pCycdUekxqCNsJJML13r",
  "key32": "4RFpr8mdJYXokcs3PnwjjXEeabQJaMrxFzLSyxNFajtNzptecBWyt5koB4THoLHwCWEFd1amkY427ptpoThCfNqP"
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
