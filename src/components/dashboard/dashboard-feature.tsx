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
    "4mZAiqd94UeyJhXhfexYhVWYbnG3a6SHmGTRRwuLUiYS61akLSERQ9B6hFwHRBxXfMzXDUARjg6mZ3sY1a7nAAoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSU5bZ4AMYaXQY7dYA4qHP1bcxx68ZJaADY3Xie8494nQ8DN2Fz6k7nvU8jkN66QjTdjpn7hNDiA7HDwewhs1Jq",
  "key1": "2JggMNnBfZMTWgKqPVXppGqK5snV9MCXzYVMCJJd5fsS6K2MPYsHiZXqaGQvyYBEsNRtLp4xXENVjrG5TN9mjcFP",
  "key2": "HKWAJxTG7wLbEYKaEuUqcVma54zBB4QZ1ojRRvocM8pd7eFFotnMsf3WfNWGYvYA181aYf4BMdVxSUu7xPK5W56",
  "key3": "2mA3FD58z19uDBSNs5QGMG8NgbZcLFtd2sgVQHBf9aoseYJutQzj1BdFmZivP8vPw3GDHdG9aaxhqS5EyCSV7cUZ",
  "key4": "AboiMfMHxvt94attufJE1MARpPz4bW593wkchvJaNN42N7hzSWNseuftuKxC5KumK7QsWudPKkp4sVfkfevYnB3",
  "key5": "2TDAwnunSZYUiHfsEceCdQjMjX5sJXsbVmbjLM3kHo5KT9urWBBtb8hC3esqeTKjCj95fq3iaPW11sFHdazrhDdi",
  "key6": "csdV9NGK71hfrBwu15YemJnfXqsm2TVqpGc8KpQoVozoU6cbWkEaXBLoeZv3JBtR18xJuxqBnG54VTet1XNjinB",
  "key7": "2bXzVEDqs34G7dv2XArxYiHC5vfFeH85y5bFSyzBwEjwTTorWGJcwfG8LjB2bk6UUzaKW9VjyRmpoVMWzzn4nGZx",
  "key8": "5gHddA9hHGJ2m7uw4QHkoTVxhFnTbweiw6JJtHL8ofKkJxmiuN5bAoT6A1L9XH4wrwZwU9w6wy3bqSFHk6v7R2o7",
  "key9": "4gkGC5tnsJXf5mmuFtDRuVfhcvYxCRCntVFsHxeGT2mfoDUiasfGA17MX4nfCL8PP52dLtQVEb7vqyExwDVKRRvp",
  "key10": "63kKUMGa7FNy3gbJuHLHmfmdn41REtuaTzn6wobeM2z81uLVk8cZXKE87NdkmzCWSccuHH7MvPMaXAnA3Nx6BX8F",
  "key11": "4SsprR6g67j1pd8SHQ2HWsCrBxwfiRaetpCQFLJqB9doKm3szDdCNLhuUUcCmb4UzTEp2pLQX67J2gThCpxSUBXw",
  "key12": "3ksyrhyBeoLm5hLaMatZiM4XshGxF5r4Cun2FdbtmzBKh5PgzEu2FZWqHAWbq1hWTasrHZvsvYQoR64dYMqHN5rs",
  "key13": "2y4pRC2nugH631Cd3xjd8drfWKaze8squY1CQWDNnk6HQAk6Z9FtGV5YQWYedFSTtkiEBVntkLA9h2JwSvhbzNxv",
  "key14": "2VGggWGueNEomraeioz3wuuKz7Bne5txxsizEu6Ng4aZEsbipuxwLAR3PD3VN2jeCq1QF354wkLfrRhpiAPbmhoo",
  "key15": "21iBsuXDQx1mJ4mQb1o6ScVYznxTYmN5uPpzvWJdPq84x3w6FCJJvT6uJVRttoeyVreFgoDowmJGgw6yhEphnQVK",
  "key16": "3E6oQbW3ycDkUZYKmndWV1URyHYd2gF1m4wBAxqo1uEiZBGczHjMy4koJHvZsEWyaC81WVrQissoFXpt1F2vhg5Z",
  "key17": "5mqyeXEHqjkserhvfhNEqkG1KQWT3pW9nkb7b1bYhqaYXn4N49oD64as4iuNcQMiWafrasY9YtzQK34etkvGgC8Z",
  "key18": "2CFv1djjxX1thhi7tKfdCq4LSCgrJdtcCb8kLkVdG9whz9SeqzFGb13soNz18X9Uu1E8sMehNLRY6TBbpaqduQCb",
  "key19": "m7E2fcRs8j6JAuewxQJD817dQJc7RHpzmCoY2KWGvqDFnweDtJnXrqUuNkwEQYSeBZWURPhQAAihHgqBnDtfJWP",
  "key20": "5aEWRsTHdi8fx28GWi8UMcscdPDHc9fCcbqnxhZ8mqLTnj5EJBy1SR8duaH4yKhL8i7TuSaTAAdRhLJm468XfZCL",
  "key21": "5J7Qna8i2BvZXD5yYb73GqPF18N8o8YjHSWR7wMUDRk4iVAxca4ieevXMnqxxFcisMUgdXCFTJQjkhj7VfcfpiqR",
  "key22": "5HBkCWXqoKQydRnssGJhUqAL3gaZxncS7WMk7oQcPWqmksD63GoWihi4xy38dxgba97z4Wg9HTSYkqomBkEFioEZ",
  "key23": "5M1wmDPXyx2L3WmW5u6NUaJLKcd2Wuxr2aF5WHMN9i56BWBayyeyhVQE5hHLLTCChpCfyuxubgxWc8USUvMU4WiQ",
  "key24": "C7ZtGNCet7dvSeqB9yGahRtz1M5P4DmADj61zshEZzDeJFCPdUjTb7xGG2LRxGEEiHwYA1e5UeEZvGXLiaLNDPJ",
  "key25": "3FafkhD1sAdNGkYc3DQnpr3NH4vYySBLkuomHsW8aR6ba1SLLLTFdvtr3v2UD1LW99x2hVQXLMQuc4U2QJ6ohLa6",
  "key26": "2SJRb3FqumFYZsyXcvvuM7vwAteyy3fkJGHqZcxpFV8KDzjruVXgBFzpBtYCcLbDbTZsj9vEFTgAGVVj7r16AcW1",
  "key27": "3A4f9zqBXntRC2mkzPsAinohpre9EAeT4FeFc1nYydngViESKFeh1HDNS7ScQz2FjaKncgcprEAAAHZ3iYnkfkuv",
  "key28": "5xgKZn7HrxgcNadK9EoaDyK9vcAvaqkgkUC8FtYUQMkCKz2o1mCbeAkg438C8HoS4GUYyZZGPWV9Azz3mF237rPt",
  "key29": "2yb8pSDsTzCcqHm4EmjEysZeWdcvCMqm67hEscEFJ5qL6JMWqy5N6QtCFVxsApgNt5ZcGWVRZj6XGzdSRSA1PRMS",
  "key30": "43kc9XHbm3mfnX23mtXFohfYjmTHB1ptyrBJQ6BdYHmCGWZf4MQKZaSKLNRfgqtudd7ERT8i2y2NEtFRRYhzFM3A",
  "key31": "2jyEejkjGk85CMHr2zf6bPfXZE382hcwoYtKaLLxPJzNMjQ5rwhnP18pUAsemCCmeCtR5Shra4VC5uUwToZdzHC2",
  "key32": "EGCi1MQuv5m3ZiuuxbnPW1MVzaNN4CQSpzKXnuLq7puD2pwPTvJoomXyWdPL3hWHWjPQKJzsopJ9hwEwU4xkDFV",
  "key33": "5yGoYtt4MoF4SqLiDcZjoN1CqhD9SeHRfuL75zfk78MyHKSTWsD8ngtsPzaYb7Dn7yW8k4JETmJzwVzyUBHfWujB",
  "key34": "mw8Uf37dTCCb7KCqWwYFDKCoyZZu5Tghg7q35nHztBcwoT7KeFbhBnrQmJovnUhr2TZBFbYyP4m7uVttEEkosF4",
  "key35": "2oLjFAfQaKMZes2s75xe1qJGnkXKDKNq6pkuZBWJGQRT7GUyEJKEuoV9v5CAdTdiSnVR66D9sJKoK3XRLzq54K9",
  "key36": "3FgmLj4VZXhCfyBgssiYQfmUqjQMocFosPHWQ8cuJyPA8xtw8SX6FGeujsmo4rziAj8wZq9JshTB639miZnzhkBm",
  "key37": "3uNEMTyHDad9qaU2etuhHzLCLfUNGnaE7qcxdQXQSHHuEmTwqzQwD2T6tdgY8bWPcZbLjrj5qrcjdib3XJF3xqDR",
  "key38": "4N2jBdpNmDNZaQ4s3GSBS17u8SDKYw9b2C1NLPEESaLYeE6hAq66isotfft89bQTSQjJdB3D7ECuWm9CxPujB8Hi",
  "key39": "3uXApyFnMka2N48JAR4s99gzj8Q2zuQXMvRyVdAnMNPXx3cjoNEKeM7UfhBZYM59Tuq87SeohDYADinxfQbbs4EY",
  "key40": "3dCvTQFYGdLJxE3Te1dyQf4zwiBVCz8cCXmGDR8Jsys9n583F3pkCFXJLk3rNZB6mnWaeEts5MhPuseFeuJWJcZi",
  "key41": "J2KUhfoYUxwhJsQzJvPnA5KzLga8jkyUHeJ4nLjHU9oxRPMECkCfZHiz7u2P5P4QkBFTiT961v3oTfqrtokAnvD",
  "key42": "5yQZx295NPD2jySw5faLrBYDn5MFusT2D73BfWfH7vz7gGpmfd2fFmZ3xNJ9cqQxbogRC8L9aDd4QCFBMckDDtbe"
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
