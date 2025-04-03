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
    "3P5JNoTRHeFAuxwUaJx1WZvB79443oVafCDq1JBszb6zRkxMwcGNtS2ZaYC4w8E1vsobXhWXgbxPRAf2qQNynB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJBHTg3NBkWHVTQHBpdkZ8ASP8oUX2XTTK22jTPm5LFBiumDTwSS9wmpZ6MXyY9BkztdEcDKsGgmxM91vLbxDKo",
  "key1": "3sxS3HfeuPPYQTeD3uqasKtDrAXooGtNeViCEgiEvLeFVf7pqqKkvgn94ioG8qmFVYQn4qRyxzQGibv4aNQ8E2GT",
  "key2": "BbGyq6QFjkSu1ytjUwrJUG4vcakHMfFUYuxiXKet2s5Gmnohos6jpm4qZtca7xjLv2N8BwQxNwQEyoGUbQbmpv7",
  "key3": "4qwbDYZm1cJnRn3LQoV83CjvorTXZj1VYgNnZpT5aVQXoeVQbC7wiaMiayAHa1CVmB7Se3T8hA1bc5SGyc8fGY94",
  "key4": "2RjoKx8rFTyacgMkDb3omQGYxV3eK28v9HZqJLk4erGmRs1KR2frNM5esrx1cQyUYhwzukR4AhBqpFVmyXkWrTrz",
  "key5": "4VPFLuNUNaS74Gb5YEYgNXYCsbEGKHhC818QvesNbZy9tKziKbcWqtwYCooYNjWRx94ndbsr9UBW6yxmvxbzeuo2",
  "key6": "3V6wB4Cg2VKL9vEfcYyubAhjgskMQzsSMh3rN85LU1MbEebsC8Hocpmkf21ebvoi9p9uL65GJ8Q81D3mnqoetwFQ",
  "key7": "4bKphi1ptYbiYygr53tDWVLuDJAPRtVCmKszaKDnFTWjopRPggZ8cSgM7mf8eYHT4P7ntQ3CE5Hw3GeGDRzRTHgW",
  "key8": "1kjzwijHRdwQFE8g2vtuG8ocee69zkUS2AEWwWChugr2LAaNNUPmb3T5NWBxEf8aJHWrpcLHRJy92DDNwQ4WmrU",
  "key9": "5eJ2EfcX9xcTMsboDvdAvHqaMpedQebZZdn6mj2y1dK2qGsWs9x2dtaGjT4YH3QwzSqCSaNuwqDX1Yz9aBfwb5nX",
  "key10": "4qN57Ku8VTPyGvZyrvtwxFScFDXzUManQU8bi8vzyZLUdDEmcYy2mJugHAsTfqUViHX5N1CD2GUBdW4GsmP7QhLT",
  "key11": "R8JU1Uhpx4CwW2mSuF6MB6wALqvgRJ2BhYK5w4URCfWmm6iXgJLQwBtZyuDCNAee8pUZzqwGyzcEtPFpQu63mFN",
  "key12": "4Nm7oBL4eRATBeLCWkyvugLgGmRjCJqSbLtAC8okhZS5Ry5crnvJUxHsz1jUrdATKJwoYEvU91WF88tzUeq65CiX",
  "key13": "2dUnc923zeUJbwB5DVGBctiZXjUVHWYNXKEQWDwZpRNZjAM1VF8eGKqPqXHQZhtW9Ub5BHhvxYHp2tNwv8ERK1MK",
  "key14": "4vy1HerUT22oUDrhrGU8LVHNp8tyD7BhkiFihDhnGqFd1hy1HKCKFB4PLSVqnr8uUmF7MEQ9Axmh8d8e4o7w4s5g",
  "key15": "3MxWhQtXSBexD19rC3FF9ffei2K4LoxigjbAq1vCu6CRAmpGFYcqrvrrPNqTo2pW4prUaZWKD5w6sPbKD7GTAuqf",
  "key16": "2mJ77jQT1jBmfiUtqb23AAzEqPjkNDcucaxbEeMNYQ3R63ogHkCiahjb1p5EnPyDksARF3ibNTwscdqoyy8eG9wU",
  "key17": "4NvLx2ztgLxa2AimuUQEGhJkF5mAEMZoVQdTHqzbhKi5vb7AkjucLZ5NwaDiQjV5VwguUpUrWJpuHgKyrGuK1GVZ",
  "key18": "4nUpuCE3f75pBDTGG6WyHPJMZ226ePnRwq6vQ3XnWbdw9N2HkVKf9MURAfggc8ZpWNJX8f9DSr6QrNxKx6NT7GhG",
  "key19": "vJnXgrLSaQ6499Lsxx5L2dYPd4b29pwaHx6QCKyAGm1ShFUzaYjSZeJEE2feXuLbuAKZncKLsvPtLtsHYSqw91E",
  "key20": "9MfUXahCbF19MKH1dy2KXWrZkbmKkCNdWZkARXfRGqfS7dwisZER6GPnfTJrtrEvDQ2bYvJ9iPATXjTerapq1A3",
  "key21": "3CaMEkeNmJ7imBgYjMrWuYi3sNkRqXvaVBBVS7fQBnfpWNTZ2qnuQ2SnkkkVTtEfL6GsHJQx9SWU34opDnLq8KoM",
  "key22": "6czpqRtWSZcJcPuWz3nLMHHMF5pLxA729JAyNrsoTi8KKKgoQ4M8X3f9ks8iBHNrPf6VbPjZQhjbWXJbA2q34K4",
  "key23": "4FisifCMeXb892FcCarsk5tNC5GtqEuFMdQxysMx1N74zWpt2DYz4UazZQU1zyduzTn3BbMy4XWN3bqrg82KiQgt",
  "key24": "56pihkMWBJ9jamXyo5nbG1nDzakHGmjm1sKMZmyyeC3ngCMbXm86T4ZGB8MzkyRT5royiBJCLxaMdNShR72xT3oc",
  "key25": "oWmGK7h4mZZJsN1oJvGr13FjfJP2AX24rVvvMp5xPZB6qLgajLvqnNYvSrbLP93odke1yTNiAtumUi1KUMBKD7v",
  "key26": "7wKTHAHSRwNW1WhurUsNmNvdSBhkoxaNET1DrwAnqVL3X2mtJxbQirMXEHLVYDVQj3f47zwpNKcJzTfoRjrf5dA",
  "key27": "61aoXXpJab3hCpxuCt7cVE7Kq3L39A1opHXP3gnfNkjnHKa2WS52ed8QeAdXuuJfDyhJoFCBxbKtJYVwgKCDrb5v"
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
