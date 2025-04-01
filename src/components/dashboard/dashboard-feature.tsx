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
    "3E7ui826u3UNpcp9rZEtdu3me86xCvRRbBwVeaQkhaRn62gR7EmkmKyFRigi28UVDKASvrjmr6AsBzbYYz3Nx9fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2y1hZz81dEwqBb3pMpA2tbqdn3NuDt4LHXX1Xg4s29AzpHkfgCPFDEYh39ikSH9FXU6ZEg8XK9p21AJiQE9Hk5",
  "key1": "rs4Cw7L2siPSGorLoM4prYBG3BvDJqhYsy5LMTAfmVyzUtXF4svB3KRX3FsNdGiNaqihbKZBeuwvuMnVYkoDtYw",
  "key2": "38eWREw37qf7fMQfLbpkyCWa3yxjqkjg2CXNy2f2b84FAY5QRGZTVCau2KEFXGf2KwEr9nGcT7q9SuP6T6apkrhx",
  "key3": "4ot6Ak6v68N4tw1iYjma1JbL5QCi7tDr2uqZpMo6eFaU5y3HM8WBxwpooz9G9CE8JrhKfoBDaxPd5y3LJUd8UwB9",
  "key4": "3YVePjJcFShxwszEf9bZHCAbe6t5RsyRbrTUAosEgMf8afFi2i9TmHJQ2wjaZSWu7qE7fb7irLf9UbUgc3ZRhzFc",
  "key5": "zf5E3t6LP2Uij7YrvdGYARudqJdebhnGehhN3WWTfdzQyCnhgE61sy1XMuoZDso5NP8CwcndWiVkeUP9QHK7Jy8",
  "key6": "4hQRQS2zbxBJZUtYZwiT3PsHxxXEC8vwkHUZPo1q1cJFhVBcCLonA8vnpNy9hLpwGGAbU4TJJPqY2wTexHiADRhg",
  "key7": "3zgivajs3SHgo8PJ6jpNtbJvR6d5K3w32k8Mv5oedopRQWZmqf3FGhShgqxiip2NAz8vZ4xj6PPpBzCq6JdLAjZ1",
  "key8": "3sFaSGtVkKXBY4VVgoTwYEMLhFe3RUANkjKXwAfHqQ3cgco4ZXKrx6GsZKCSMbdCePcgCLfGEfMVDhFRnopaAwiE",
  "key9": "39zK2WQpTTY4ouF3rdz5VCQC5B9459Sf7LiSeTQLQ7v2S37HbFffx8B6jH4iv3K6uavtxZbVxGU9Sr2fe1q1RYFt",
  "key10": "S14TaAHvrw9Km8bZwC8AucxWdZXRaE5bwK4cFiUovtbQDmF3Y5JpuJD8MzM1QB3hsJoztqLjmPQ1SRCLW3R98sB",
  "key11": "427RqmKkwFbfGigzGAFAgMfN9msh1eeCuVyoGSHVwwZqeL1fQFeEBh8ZMZsQ8AjncRbGh25spThhebUoudfSnqGm",
  "key12": "47tH8KxFPXJ5Ct5nWNFiuYZYGTBXsvu1dGC1566tvHzPS1zztfDmmbpQETMMwbwStnmHzyWK4UjbJDix4qvZsK7j",
  "key13": "FrUv5NiuUVPcPNnpQWB2YhF6RxtxtisWmtRwwPjuyf5twwupvkgNFtHeGJ94XRAiooaCyc3hDhFjhtLdJvJR9jv",
  "key14": "ni1Jwb5FF6J1e6wL7hYxaxD8yMgZPeUBh7tAWkP8y3bSkLBRJDXY93prRSN5bMgNEhcrNFHESXcKpyJHikmdVec",
  "key15": "41NQyAdceCjmo8xfKXUuKfF2oYkEFeKk3GcxTHcgjNg8y7AE2WCPsssr29BTBrzYqFP3YcmBt2GMFkdayvHAFDVF",
  "key16": "ss6C8AuaTbqwc5wiqy78f3mXTURoNafzDaqiigZvxSQoNq5Nz78Hnp1Y616FAdYa2NkDhtRinH1bfQJBCiV3Rxx",
  "key17": "4Xk8ngXYeJmrJqJGjYKrm1xnZbH2VGu5uWbFqvaCLkLexKAdqTpwK45XvJQPDshp2hZBoqu1NVKDS2oihoomazMg",
  "key18": "2FATUjD6fuv57zfBMspYh24SoyHR1QEgkb74ZzZjnk86xfmNaVNpVbvkmNtWZM9CryLC5P1HChSJDwkHyDEdbo1A",
  "key19": "3zSYyfbYDodZL1SxgeYojhCpDuVrA8jU3X6Mu5DAMLBFMwNTdAWVYHYeaBnRVv5S58QE525TL1U38yBXVmYDockK",
  "key20": "2KowYsu1QzLWUyx3P6PTUWSn8z16X8MV7Lhip3mVG5qCrXRRxM7kfwc7iPqLQj2665pTtFXHx816eV2cAN5M1dRK",
  "key21": "4EnSDUM5LUsvfp9uW8xQAdjMJ7LyAJ3HP9a7Rx327skxLd6eqNPV4o1aFAECWvFTAT9fchSAXP3ubC2PAqijeCJy",
  "key22": "5t2XMbaC1ycWa1SnDNiX3KxPSPXbLR6jSi1Mrd1VqDNbdXJdqyKuMbpC7atq9deL9nRHtCcjFo44ZxYzhMxfTPg1",
  "key23": "kbhAHsZfRM2siM2wkRhjTvD3fmMgD84N1NqkTn4VUZtaXtpzqcioNPg9m4QpGtXvKtnPi3jSE1kqaGVAyZNPM5Z",
  "key24": "65rgmRwZ5c1mgpeGvdZLLtf5pYJYysXavWizT4ecuTWXheAD8oGAvJoLhCycLZ6Qdjwwp8ZERgm2q5Q3CYt7nJd8"
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
