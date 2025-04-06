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
    "3xgETdx7rRq4G9JoZTKy3d7CDPgJzF2sqHDtTzcMMFbYLNpPeEAhhaGUFrbi4Et6Xq9mATewfft6a2KaAyuB5hgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBTg4RHrj8oGNzG4YUKwfVUy7wkK5jg4Jzz8gHpjnwMdYbpXP4SMWrT38Q8KePwiFD2ATa11Nik1AxDXTMjkKRB",
  "key1": "23RCePuvMQe3cFhv5ANjSQhLkjPZiXGAm9CPt5f9tXwwqd2GCJnWb6ax1TNXc6xwsUzxzrZDUdAUpU3KGt23HZLa",
  "key2": "3nF91kHyJA3h1rMBqK6jvDDRhU4Fd8uZZJTRX61iC91AxVotcgRXS88g4aCfjWkFUVNCESDAfrTr6gwyY7qXcvNE",
  "key3": "5i8FAcXsvNLHmZscZ5AvzhDrT2cAwAHMqvHfNDyv4osGc8zStzcKaSjKm1dwVa61EmcRWnKgHL16tZ1bJMNM24sX",
  "key4": "4srAHVugY6SeVrzz5Y59dTSEfYk2JA6K3aGDmWjU63agF7mVVYzTouciZEqCX5Heo1mgW7ocCGVM2EkgNDE1Y9eY",
  "key5": "4N8wQQrGzsa1Cd6CXcBFdwg9XAXS3eVmKuaWVcAgHjc4XSJY3UqxmPEacwLWmchEE5bpBf3QjhAULrjf3bGy7qEy",
  "key6": "3JZZSTLySxLRdU1923fqZ42CUYqoH1kotDRR53cEWhq63D6oqmKHCrA2w3wCJPPKGQuwrdkxFQr53MudZXQBeh8V",
  "key7": "4oqpLyrVK7fr1Az6K4kdfW4Z5FaoGRjs2YNyBuaG6LJt2xzYYWDVXJMax2wnrNPUxESB5F5fqG3uUcckNybZzcai",
  "key8": "4ybfo41HXYTk7TweZ8CdAS81B8n2uDDWpMd6iRMpDADQg9cUYrRyRRatAescHrjSUYpyCkBDrM2YySNMgh6wRGKL",
  "key9": "fBtq5fiinZBh9nBWYN2e1Qp62FtE2zie8m5tWi7Py8ievbxs4MJhUY1ntjUwqGbP4cvavbosPn7REt6rHXU9KR3",
  "key10": "3mZ1sE6fvbGvZyGv5Uo6Fm7wMSs74TDgicP3iUprKreQ152vx2VR6nT8QYaKpPsB278jL5FJBdVCAFrZCCckpMeb",
  "key11": "4qaU3cyrF8kV7ykdV2f1oyfPZkLSPZnN8E9UBAAtbyAqTrt4KtLchNvqy6BiajLRQjM5TBwpbmUUu6ZsQtgLJMbn",
  "key12": "3m8YNfYAYerdezjy1By44UnFzfddNwXmehq3S5beEV6zg6ByFsWD7Gk4Tec1ZxaCScCHa1UJd9vz9dFbkCp97yyr",
  "key13": "3VuYFrsDuhfWdJXi8Cqrmu1g8wb6WCYxr42C8N4bQuYFi1bGSGkcnE9n71L4dPorsnqNuNte1zQmTsBXfcGJ4te5",
  "key14": "5PjCKwCH6aNhKkmFc7HcAgK3sU58maVbDBcyxXASn4iMkctog6GaFKBVo1XL24Mpa24dLq7xZD9i8XqxrDi3Eg3y",
  "key15": "3KpKnjv5fgoumJ8QQ4WHsHMC4EGFW4GExZ2iA6dv3EzCUTEM27aRzfhoeWZzqotwgEyB2CgBPmCBzwAPRfGKvLUQ",
  "key16": "442WqZxecSZmMMr6fNqDoo8mdjiNqN7moFL7wqggeUzva8waZm4zf53AiSdRKRh4ibR9oETMjPhgYPD8DE7ZDPNH",
  "key17": "CFG1AzY6yVjQnJr2vJgz3HArfsY8QtUZFWWSD3BcqGDDGVoTLcvFdKkUzKq3mktyGyfrtRCfzrPKA8DkPnRBnSL",
  "key18": "3VQj8YjwdvM6jaWYtsJoaNCz1tvvENmXHyz9RDek3qafd4YSzKk9ETcfBLkm9FyaHC9BHakfvgbTq1paR3LBwvP3",
  "key19": "3g6K1WA9wp9YW93eeLyCbFKwzRNk4PdCDHoqBP7iEi9ChFEqJnJQApLWjEE3wZbn8oJgScSguhKhQwPkz6jWEFbA",
  "key20": "3a14cDUzKt65UnDThStUs8Bvq1XUbd8GpJAxhdH3SfHqGdhuddbMd3nReoRqZfkm6yB6xEaghtpoBqHniL6QicGu",
  "key21": "fX1S319zKQ689sxzM52rJygBwkvvGpxrY68gaYzi6TEoJDEtJN5UFNcyx7S9muNSAWeLf3BiSp9DCdG8rBaWoBx",
  "key22": "3at6x7vkfkUyujRShgQdoU5qFHaUVLGayg87e23JhhdE2kBy9UgqYgVrKuNt23fhFkRB6DchmMA49BzTUwYXGEce",
  "key23": "5teQ7oRWbZiiqSG3zRnMfBUDfDMj4NjBaU6vw6STXTBzKMB2M8Edb1R7XZ1C9g9KgVwger7Ke7gFCJF5eWahNSQU",
  "key24": "2SLaHQGTTobJhXs2iSMHt76H4BWTxtoR4WBJpRBKGFa7cXu1M9uJY9oJVyiR8v3ZitAcGUyJK7F8fuz1mayKJERf",
  "key25": "2JiDTXh6kwbTRXENXQS4eEfnJ8irzoDCLPNADPwdiJWmXEyxpMcrP1a6UgKgWmvq7RgheZd5tGwkUGTmRMoGH63Y",
  "key26": "27981RBk5Zo84uaC93pbDpRpaeQr3EWQmqh6R1UZwrtu2XWWc66EPjLHeUMvbxSA82M3vSmFhh2AP8yiqENSkGEM",
  "key27": "5LWiz2UqB2wQwyxa39Jy1BGQDMAXhagp4h1eMhDRxXR7wcai3CJ6iSaCdL1TfqLzppkxKjX8xxkcn7oXPGMMbYxD",
  "key28": "3r4JG2afsqzoXwtsm3SGGkjjZfrn4CSC9FhE5m3jFdJxzGwCyK6eVNbV57RAEBDy1wwHcRqtXmyRRyRi6zXiFPSw",
  "key29": "fnb92CwCrn5dgP5RazRg9rX75221xhbeuzEvcPwLGsJ1pDwAheG8wNKytazqNJxoLo1crRtjVq2WbEEDgqpcU1i",
  "key30": "4VQTMTXUjcUDhz2uYfcuAJRX5JdDnrEfdmVaLo9ntgLmCY6RjaaTt7CUWGgJUjuhJXHNeBUv1YqAmxbdzanem8CW",
  "key31": "4AHikBfejxsEfGZwrkfnrxmM2szLhpsNWLpQuaQZQHoPvtyLruCqCof8r7cGa8sBJekzavTH8SZtRMHmmQjjBuvN",
  "key32": "5RHeHkCDRFyjpJipNeaVpeEKi5hSqgmxPzTnAXrxcK6PLAkdRvt8kCpFZ4uVHL73mH3v4zmoAm3dPw1zMusu53Q8"
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
