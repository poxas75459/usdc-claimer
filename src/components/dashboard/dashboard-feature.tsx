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
    "4Vz43Bkscjzfz35PgKtCF9iVvDyLyA8QvHk8gyaRw3qQuAaW1eyhJjSK88Z1MmbKD3TRoSSDcZP8T1k1VEM4bSrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ycFxtvKobeaDQfHoAHXCQiJybnfWPCJ87Z2PKVmXktvjE7Bexdda1uXHsehvCRKtgYMnQZJa3Vzu7wUyH1Hpov2",
  "key1": "2RsJ9Lxu3yCP6YYhS1QofoTpMohzHhUtWDw85hoyji6acsBHjUCzA5hNWRbM2XUVFEW1VMJNuQgmDWEwxAFVtRLu",
  "key2": "3fUXUZgLq9xvxWHNyvGi3SX6FHjvKuJhKyLV4K3qqd2yHYuCZT885jPNcbHNxuMGFs5QtHsTkdsXZkMsb2doaxUN",
  "key3": "28FvzLAwvmJZAVgD2yKBjGPo5Mff3jeT4DVhaunZuqQd6Yc4zNKePcZR3cUyPaQmVmxHHrwL4VpKtnb5CHiUPbpu",
  "key4": "5rM5nP9at6Tv9ptadTKF8zSSKd5BHaMQnyVBwiinaooffMAdFmwMfoMpsWJiLCRQu35W8vDq4ZvvoQb8cuU8Leb1",
  "key5": "RcS7DhNxcfu5SjhTmNHJirYiDN7e1LE2SwBEY6AbHFVtUhn1P9o7CuUDAucXqtZ4dhG1bUfUmzgo7HkHnoVe2yH",
  "key6": "r76oSfz68Euu1gE3W7uboZGZ8SHFwuYmsmfmqFcM4BCDWsvAu5ySZQjMzEte98XUYt6LxqftVD1pCed1KsWZP3f",
  "key7": "3LjPLBpekzScTGzkYit4ywFNkF9vkmirr3TmDSPb7emVgBd7uadkZEKWxTeR3bGivp7Uocwo5usZZeeno18s9xiV",
  "key8": "5JjqgxPyU2bxy7NozkezfBGvmw7ebSUbDQaDUcVTNCD7LJeEMm3qTa11Sd1ax2VSUuhh8UF2oEDBcQ27cn6x2nTA",
  "key9": "3qu2r9GYRVMsorLtgRtxDxNpV4TD5UsS72UXZwYDpWkQTBrPmJDvgXNCAH67EZioiMftXGB2Aj1x7tSDf2qmLmzj",
  "key10": "4y2fHHCgddpBHXvFYGDEQ6AnDdPacN8MQ9fUZ2E3PJhYKipa9RoxNkEi4D3GzGCdaRZEVB1hG57KT3k75EMiDkm2",
  "key11": "4Q2S9j1guXXKJUtNYGkQ7cqdMzaPRktr711CJApKjqAmbCp6RWYK8hhUA6fYyuv5fKudn8k5u2atP6HxRMuTfcK4",
  "key12": "4j43AMYiRq4xt2KgZa1DiHJpQeVWN9ZcqDkqkaUxy7yrZxjQhKGpWims3TovVqjQV54MPZM8gbwPMpSTiAr6LnC7",
  "key13": "4khkQ54MvJUT4DdK14c4sQdhrRVwL2aqmQ2KY2By5usbEeBzBwf2PdgLN33peu2mSJeGZWSxsJW5ejaK6KWBW4XZ",
  "key14": "5XY9zGHqSQtdCrni4PzERmxwc84zuqKQBVg6YTNkrsDibHcFwtyewJcHDdCj9XE73SxdC3p8BkNyhDV1h2VgSS3R",
  "key15": "4gRMHkVSydcQ9vyAcJ5VRrk1icBxrLRtuYgVrPTXhZEWn5ZF6ZkpLeGFP3fBfah88PeDuupHGWBY1QpdKbjHERw",
  "key16": "67SA4un7qezN5iPv64gRm26CPW2Sp4VS9w2FPHiMVZwwBjUwL2WFEvhvFEVERbwzcjozsqLaK5U6MMk1gh87ZFYk",
  "key17": "3kxiK96gQ1N3XjVtqbyXWyfVte9w4qpNjCpiCRwFCVDbxoKTkazF8K8N39HxtyGkbHHDW2oSoszrjyTNgwv38TsJ",
  "key18": "5ejUoyXwZVurHePfosj4Np1hkdKKAqEDDwVC8KMHtjBAe4wFWzmhRFASCDEEHegwCx54SLb3DvgvcAv846HW1mCj",
  "key19": "FNZ7rHW4NQspSMr31AXgse9pLKAhrRXAjNFGwF1rp3wLEsbpYRhEzbfFdGKAGw5qcjNAGK5km7axuck5eWKuECX",
  "key20": "EpetEd1o9WpXr4RBrgWxea6X3KTvKfEMnHnSkkgcHv9cxXmdyXTZz8fxQS6ZJh5YBdiauV6LZB4na5thiTtQ9Be",
  "key21": "4sf9f6zAcHtoyPN1yRNASEKkMXe3rykXYgZyCrcwY71DVNY2ndnZB8firLEgvRPRzN1hQguuALd1ibUcN1HP1uzH",
  "key22": "2hQxURhWUtJiFAQxCccn4yKYmqbTxTUYDVqXiX6XdtfoQGkvSCQmHTGa1Q5Ld7FvH6aAdAbEBRSLxJ7vov4MrcDY",
  "key23": "3qw9H7zmAjxKkiJuJZTSfH3AAgHfRdWucHdrYMtkFf2iGeDw8SwCpLb6VxztanqUieNvaa1Vzzoc9r7H8St2Pq64",
  "key24": "4YmrET3uamhRjnYRXSEWvJsBUyfPWTPVwpVdY6sAcQKeX1unx8Y9a2ySiU7WRYK2jQ8H8JGVoHxMk4E39TtXRghS",
  "key25": "3vbkQr9zBt9GpjDLWDgoNQsoN4RacWd7VzcvB5CjuUuP8hqCHBpsaukjUHFiPPqczF6EfZ7gUfHydYpRmXtRgR4M",
  "key26": "3XzTkTriAQQeWxHgEmw6QZpSKjgA9KnHed88uTQzqXSfgXXYuMg79r912sivYSqeWZYJjpt5m3rNksD7A5HEiUvJ",
  "key27": "Gk5ZoPBmNwbU1cHEi6CHgy8CxZwfvhqznGNz5UfJNbbwritMApP6hit24wi9qufWWCiLiui5wDdWzGZXVnXFvtW",
  "key28": "2vS9QoPhGuy85iA99ZvWtkGPrLKc4nMEMgc3VBHvvChqKMTGaF8qeaJmhSErxwAt4ueW7YLDptzPi8iRwBceVoqo",
  "key29": "sqgvnvVD3WcvfMvQqbzd6ESVyhnc1cMfJygbaDTa9H6AtmvGT8w735KqfrDAefPwPdsZEDYmDTc8s4LgXQPApDb",
  "key30": "3KehMLbBPtpPUBd9tsCY6X9drkUYVc1F853L5pyAm2uzkSaGjRbqJfF7K8D4Ksmzq4mxZWPv3Pjf3sHMQjiRQa9b",
  "key31": "3bLg5zXiLFBfHWXsbqx7W914sxVpxihvALBYGS6KPRCoppgzrfH15k54EVfJc85m5KSzeBqT1r588FW7K8f14Vda",
  "key32": "3UqE7We7Zusm5FFBrDjfAsNyGbRD3v2PkSVJ28cva8KpFxDHBUwZAb91ac5awV7MMrE4qKHr1zUGNj69szjGSHfE",
  "key33": "5fyvtdrpH6zNRkmZS29FXh6NpzXzuYy5zxAuNpMGjHzhSoJ1wMHejfTyD7MBT3WRYV4tmYBY8FGYz9SSB4VEd3Qw"
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
