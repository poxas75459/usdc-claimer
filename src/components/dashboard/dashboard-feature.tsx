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
    "2hoGUKMoPatKPfemQPBLtni9pU6Zqne876KZ9CAUbmmGum7EWvB2rrsqtwjKuEqhVGQeJArEotVYkh5NFGXDQJPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366o26TdyLMeSwyVttdoLh9ZncBYRiy2eB1DVqSyeBX51Ffd3Rs8UaGfjqZdLMdLWjKpkNa5iU4GDXyvwM7XETbq",
  "key1": "3Pon7X3W6DuZVY2ST86CnkfvNQ9aSTyybcEfT73bPfQMGcibGonXfUQdEFLpeVPkwDhzDvJ3u8R3AzGyJv1hKMWA",
  "key2": "aUEyJpPMZxnZ8Xd34ev9sZH9hZjkfdjgLxD42HMajdhcbASAvKrRsAwPL7e1pwX2b9fvfbJqxXnjt8D74foNAYx",
  "key3": "5FMpsyeDkufJYCEwEvpybnKHAqVPWv3erw1eGnWdrmDC4DUd7JocgaVRD28c7UjEET8jkfL8WRfJqDhZdC7Pgjcd",
  "key4": "2ZGYYYdmnAEY7gFBcNenvrWpikvc6EtazXzSNxXVCrTEn7Zc4qRR9ALeWQdHYiETfRQN6yW1zUEx4ZHoTGtmcJc",
  "key5": "2m2Z63YHdLsgUBUZ6sToo7RahXmi1ao9iCk7xtTQmcMjB7BuoGCxzsasJeM3oiKqaabRJDDK2kdUys9jTZA5JzCe",
  "key6": "2TUiFb9kfdc82kjpZ4ybxsQfYq22dRpu4E1pDg3Y85cVg1E6fpp1rCGWh5gRjipeFCQrg17JAW3Knf6MZio9SDTF",
  "key7": "3amaEKTvf5xvaBXJ1PsiX6akjHptDrQEyjaYmbXjhKg662bCQoSuMVRNgKMQdwvi94xZk8cqjJNtFryMY7vMq265",
  "key8": "45SkvhRmVMBfiydmMFkwGtL4envPRYb1Muw8WajfVy2TygZzPYJ6ws2VXs6NatiSWCossWdvZp2XvWwNuv2eNG8h",
  "key9": "HdSUkLXLrDagnH1UyAeA62dbkraVD9bfn8CfAihoUeZzh1RfRGuGJ5jbgijNDiy9WKGTA5bUwGhS3Zw46Don313",
  "key10": "5tRJkESqmAJVUkjpJ22jurP6yViquAaCsKYaGQEiDDmv6iyjgAy9r42eZwJfKtc8qS28cym9DcrsmpEMXD6ERANb",
  "key11": "5hwSgdLECXo3EQiprKJaxANTZ7WpMQJQbcb28sT5cU4gpNEoqJYcKUPHQN7hvHddByCwSDR6vm7CGveAkDXJ8ro8",
  "key12": "5FbUinFQ2jyUxfgxaW7E1xQChdHicMX5UsMqEz2rAgTk7ySVv7jZ1jSrVwiD8cnM9dAA9JJykwxbLHYZzyXAASgh",
  "key13": "aASJJd99K2adjhfZ4V3hniC6EsfY1AMJPTFFm95baSUM6B2doato83LztUbx3ZhsFB1kvYyAwcuRgvHo1eAe5Nm",
  "key14": "5b3kgEMLztaAB3yYUsfxarUKogfrSuqhQMPisnwWKpkTUQDYcCXpzqDX91jicYUVszEQurtdNvidJnJmBpKMgXUu",
  "key15": "HqVWU6BwH5sLsVFFJmazWUsCB84YCZXjbKgqANCPaUPrHMxo3i49E1GUfRFG9PCGo1GTCAD4YyTtK3rrmwAp57E",
  "key16": "3wbp9Z1NR24XPoEb1GmUQiVNBfEXs4bXFzdzYvGMnV7uRpZGArCtbKmnbDZRT3uUxXn7L7UsWjMsuTi1ac6c6tgv",
  "key17": "2W1pW79zmQ7auq3mDPVnmLPd2VYsuurHR8JYHMGtDzBqk7DjwjbTWfsxyMg8pBwjj5vsATvm2SF2awyrZwknrhDK",
  "key18": "5YmVrL56FWKbqmTAQGrMD85eocw9njnd6ki8JCYrsWZ4Zb5nTWoik3ESQQqEPGTaoFG3AgaTGgu7FbdgoJGzxHTB",
  "key19": "3dLxbPyTiSmUUhTSpxqhY4rcPw5qwucsqMXeqoo9fgiBX1ZpFJCj6H3rqSh1Xh5G9BBjMDJJnV2uUFmVUkoho69u",
  "key20": "2XqefWgF2Hkt7aUCAurF6J39SUADsoA4hQ47dhc2gXAGee9NHX14JiPSzqBi8VXn9c56ADodr6CTwUTFdbcpwxJ8",
  "key21": "TDyHMKQcbAMiLU8DMqd3sXMPHR5EtRx2yPs5Kxuu4XhQWt6mjpcM1QP7z9zV3Y4usp7iMA67KpRgFDnH6KLNmLt",
  "key22": "3RAD2ywbQ381wqaWRvKtYh2eeVwSUamcyBS5WqBT6YUAP7hJw1KAwtcRBw7sYi9SbeKPASVLhLdsRRUCmSv4QhPK",
  "key23": "2cMKohA6UMHLQLv9ryz7NvVhU6YXn82B3JG9r7vVr8eh8fjG4hkNS6JvDwrn3JrSa3tERi57JTpNfnwYCwzFaPSz",
  "key24": "47YAsyhNgfEFn2MWzDMQHPMQKyzjdRNp3yTweZmgwQUie1CzRXCkH7yUKZLen2bhCaC13pc8XbyFtd8j7gXLvVA3",
  "key25": "5EwgVyyRa17KfC7ENEWwWfyou9xfMtMrR6GK7iRgoQRV1tTxoA92kPTro14nnnPmxJMsrmXbpSsjWzVjv7GTpDrK",
  "key26": "51hC27RDV2bv5s5jZpL2EfYDQASADfEuQVMZd1ma2pf37YF1vQtd8Zsea8iQZan3dWBuQXeH7SUjvisrsR2WVFzX",
  "key27": "4NLMkwEad17xuuBFnHaviPM7qCAWo4nfNomHJrBKoghjkvxtexra9BPrNuKKYrejpyWwdRFcseGK4DTY7txxVM4T",
  "key28": "CUZgnXDXi5WkzP9ayVXAzXu3J6NU5Ysj8rsnhWHjXinysGvntpqu9igH98cmBEJpWh5qxe1orDaRhDwaEbSLtDM",
  "key29": "5cJ6LAEe29FFvUqQntnR7xMaUYEHv4ijwxnr4UjhWAosAuA3xBU7z77YQcTqNBBprwiW5bg5rNXc3rmdc3QRxHP2",
  "key30": "4PNSejURRXfVHKMy8u3vuhLhSo9oEXziU1dwvvfH6eSq2pZGvzLVKNoCUkpaG5x5uqT9iFkpve2yZWvekmqAy18t",
  "key31": "hm4RCZnbHpJstVWHb9cTHeVCmx7zpkAzJeo73jPLwWViDCiVykBdGP3JSExfz4CE5yDWtV1UPT8MojUN3bHuoeb",
  "key32": "5UBcnCBbP1JUR4tx791RzXtPGN7LwTTppynaDRqdmcYFuJ2Madn8DiAu31NMrRjBmf7FcZfvypUGWifz2d45sXTM",
  "key33": "uXrFu6Q9mQibeWFSbyrvSVFcBiKKHBbN4swxhGgptMGYqSDAoMrAYECeXHdt478zX1f8VCmFJMAMazCahgmacCw",
  "key34": "5mpApEDwogxj3PqrwVm59hRXZu67JZwDNkL3zXqgyWeMU9bVwsSXsJyzyeepUN2R8kET8wS1Vc15ogZEMFJgdNR2",
  "key35": "5CXg4rDtWErf5AY4szM96XAyYaiTzQdqiatdhb7N7KHJVjFnBRXikaMKUDu2LD98CfB2LxCrcdubfi7YG4DmyN6v",
  "key36": "4vTGu4sasbjPzKDQUsdrzGW15bbKL3D7s8ZGgoavRenveizHxSnJd3y3TWJ6Jbe2kTaxq1a5ABnti7FvqkoBKsch",
  "key37": "2JZxLVPxCK5FEH8HceHZA7p5TwwPfFJF4vLi6qTCNSGeTq95pPuSTV3krWWL9HAY6NXcwiNnqanATEfoWxxnUCaV",
  "key38": "zy8HRmEzwppoiBaDTUc5zoeJHVhYEvgXgWfQE5nXecKUHZqAGAKLsUB9UAr2Cc9HBuRBReEYy48AgtNcWQ2QNFZ",
  "key39": "5GQqSK2nn8ZCsMpFcbya2BGQDp4aqcvDHeRSztpGiMnwf7aWqFWEF6aofKiZSk9uDeDVSfA4PPCMsSY5qy2pC6bD",
  "key40": "3ejKWE5Kepz1PdCP8EVjEudTDeH78E7TdSSx19GB7G47RXhukCBvzuHbJjqTw2ku6rWJ61G8gy4KYLgcVLfhpJYi"
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
