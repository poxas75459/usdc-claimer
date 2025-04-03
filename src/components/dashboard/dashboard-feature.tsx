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
    "2GZSaZrcR3Zv2r1LQzBttwsTFnGGNfznCNPswqfqWDLAHq4gG37nrx8TFfk4kr9Yf7CLYLmvYEudV4bwommaDUy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fKczac2s4fdA1ttA9MyKnm9ATtXxSUC7XwJcinCqHBtUWs5RHqr1pS5iHk6mL31sANDzuw7kdqr7V5KjkAFqjo",
  "key1": "2nZC3MGuEom9Fm7SxhBJ3rFnvUcpT79bRYJe3h4fz47sudgML9LEsdGBhbk8utcRoU77mATDeRYLymCGKQbnJiTB",
  "key2": "3e14nzRZ2Bsamx1aBSsFFDdzKvvhVvuEb6nnDHRiBonaJySHXMP5CARUV4rFV1wxTkzR8YdmTsQrnocv3Gkw3VNq",
  "key3": "4YF93p3gPJf9gCj7kTKGCAfbzcDV5615339S7jaWzGQkrbr6WFbCmDKZW7PQfypm8dqqf9szie9ijxrb8Ae2G8Qf",
  "key4": "2WogJQcSojHGhjrj7MK2KMXtJRcx2C5ZSJQtHhSyRpvEn2KJMPQSfx2fcN7KoJYH7tHnYzpMkmCdMeP34RZ3cdx5",
  "key5": "63BpoipCdPFbn6yHhJQtDWm3iquoxuGxMF6VSZqpF4KtWskybTgyKuumjNH2MeZtT9W75aYJnuyw2wjPJD4SZbfA",
  "key6": "K1PjWviF8iRfBE1yJvpigN9tSgkMucpCFs38DzumEnbifpV5T5JiKr5P3DPSND7ke5bjcgunsnS8Rtjhh5x2f8Z",
  "key7": "5pq8hCey19vhbWL4obVasnXgjHP5CyfKsRyLuTPfEFGt7hAXeosyzRjfBcDiupzHBTBwdxku5UpsavQsXToicZeq",
  "key8": "5rK7GGAb8K6evW9RB1aaaTHHHpFtpAqh6K3J8PmN7H696dc8qBFwzP7LeCgxxujwdCA2zNrowbVoucspYGNEMXWX",
  "key9": "3xwaPzLmkjGDdFcr46H11bCjZvEENtDuZv7P4GQGV8geC5pRWpV2xghZn7AyVWA7YEFFEzoorNNsspkQKMPPRdWG",
  "key10": "bJstAYMYb4678D7voBbEvEnSvAnsNjWJXKVWmfHaKNUgqzsU82JaeZczuub8TRWjeWdfaYWQ8ihguKELKMPFB7P",
  "key11": "2RRbbybGTD8hkh8UywmCgvsz3RgnLYtn86WaDftbjkTW9hFDeyjZppDbyfVcJqnJ7Snq2DTZ567sVJ2Ukgc5NWoM",
  "key12": "toot2CpVKtd2kER74XqD5PitAoAcGNgzjbth9kmEUaaNUC1hpVjEas7s3dK2FLLBH4X4RT1RFDFZwxexQ4CVbdH",
  "key13": "FenyGNvFNwUWhQZyeEpRbZRvRgbhTjFAvTDx5Rz6hUm7CP3hpTtrmLCoBU837gi6EzRW5r4eBiHpE39Zk1akneP",
  "key14": "2rCCvCFxxwbePtzQUojfufmqeN2kgRoVu2b6HyXZPR2UW4BkvbpZigbhQ3Ti5Db48prTAJCZThq9hXd2jt7kmRd4",
  "key15": "Pv3QmFrcQ4NwX9RmNVHLXU6s9hV8pm838hTxzuGKxNfjSYm9Thk1qLHmhJGDBhKArBYzgSNTv5n65hteVZnUw3Z",
  "key16": "5K7R9sQC4je1hKsZ4mLuzMbsMX4jn7iX3fnAsB9L6EzkB3aGSbfwkc7oCeXynLK2uX2Z6SHUqKZ8tejcatDua6Kx",
  "key17": "5zojkY3eSS7LMmzioXy8f5zFweEJXPX8g3mrn4pAVr3huovsbW1HHkpS3Ce8VDX4jmPfvLwM28goHZGe6Zkrevv9",
  "key18": "27S7AZjEmAQEvcwQuLPogjUhGZvtS7aRKt2h8kfdFuB6vqmgYyCZwEtr84eQHdTtFzHZPMoKSaLa8ZfvjfG8rky4",
  "key19": "uZhsGDv91KwaF2AZXen9YBuLUmhAFMW1beaexmcpKgkV4tLFCsBDdM7qjS57YntcixmBGnBME2UukYx6Mxrn7sW",
  "key20": "4Cv37Q7WuKEsGyY3Po4SwFCQjva6AHgeZ1kTfwmm7TZbo25GzBzcv1GK71gSakg8K72RKUZHYNqrRvF5RRYMXQh4",
  "key21": "3RcAwQKg8W7qeV6yS4uu3kjN9BnQPG2eTNevKowYrMyqSBihpDrEVj3VBBH1oDueLUrdbesLM3x83fkgpUaxkd8X",
  "key22": "4ajPhAbnG2689hUZ9vTJdahLahMhfXGhrc8yMH8ff113tJiMs4m5i3Li7VsKiWKd5jZsYYYhsBwEUMUxD5bvaERg",
  "key23": "5B7QHTctMU5ftLkaLfqhSgHXWsMtYoNunPLVguFkZ1vjKMusyWZkKzjwCUEKL5fQF8dfsqNWbmyQsnKbQ3zmzK1k",
  "key24": "f6FoeMxiC9MU6rVBtTH6VaewcA4ERtAA8d6YxJSMCcXnhf2aK6cxTTm7sDTe463ZUHXMBMer9o5LWmffx4iV9ub",
  "key25": "4Et2LAk54gsHMC7CcsRYvdE6mx4rQc9XyVyXZQyHgfsnrDpTdkHZeykiWnVhpTanMG229KE1zzv4CAHnj4FdCmb2",
  "key26": "3ywLWAufMTUXry4Xvy2kJnjmerX1BdCXHxkrU1u7V9VouAH1ThrW2AzGgVsB8SSiq1q54KShma1BfSt2tVqSxAK8",
  "key27": "5cr8ESNgPHJL4Cv5cnLky4Yoqjz23HbBga4f7qJBqajcs6FdNGUqhD1WHgcAXNRrzPfScF4dpWerEsXbjQipkS7s",
  "key28": "4Mp1gWyGfGvRarpTkGmhVfqjvDaWmPLefaVmCT94UdPE4BwrWWHjUkZpigGPNUkku6YPECf7RxYxEXi5wWr6j5J6",
  "key29": "dstoyXpJWN1NJrcevXe9kHGzMa58Nm8tfqnfKZLTPbhTq9WEA493nQ3cQJ9Y7mgxisLkJ259GdSy6Li8HZpzAxh",
  "key30": "LmDd1Wn2QXbGXVKP2tJZgNJFwgx6T49HcP4irtRR5hBykjPJvBMeNpJLWmMuX6n9CofW28CdFtkb1tEvj3SLQ1p",
  "key31": "3FKSmP7LVs97TzYucgSLtGrftyRzARU8dGTHTr5wADdaKsrRfSrdTUWeAVbCu7ykvArWXswWjKvNYbCBoPSWbMff",
  "key32": "449LHgKJhi7HnWfUQsUGFZsmrdeJ5ZS2UVe811JdJeLmy8A7mizczs35oqfJYVDgZThZArNsiVdgaSPqHxfK7B6N",
  "key33": "j7zXnt78SDczpmN4HXoB4bGaE8g2FC27uT6NK6N52YWGAWXHpGB9HbVCiMgv1atKH3sRWfiAGps2aYV7tDQHovM",
  "key34": "2cLEcjKSpVDdXEJh7WLTTg7V8XKUCmkQU1j84Mow8gQDpSMaK1aVnr3rGR7KAH3NZZKgouBWoLhM6eXcfdVSKwv9",
  "key35": "3JjFDrnPBmqBbEuD7rGEnJo6eExZE7M4DDDs441ucPiuLGjtzsMED1bEaFj2y1kTxpMf1kfG3dvZyzrpoKY8THcU",
  "key36": "ntHvnENU78959hyrtatszVEZDKfUC2caAXn2zCHsHB6dW7wSUFJ2PR5kK93UDZk5keRfc6tnbpMnyPTzU2fft5J",
  "key37": "36gsV6ut9PeYnKkEewu81b5mhViyLgFGMC1Gxy9tXdr1a2xfPF7aAyjyrazS2et7zADjdZYD7YDavvkey5VcYYYx",
  "key38": "2k9jM9d8Xa8pFczGpgjm5HqBLZVJV36dM1oqT5MqVsf5truM6eB5VTsY7LzM1B49bHDQh93CZe2sajurNygmDA3L",
  "key39": "4UettGNanXSoAPvFZ2AvLMshGbbX1gTK4E4s2cNSg3jHBTr3kk8SZuUzRSyjntynqAYWiWDpZRKeJtzkvqwbHwGz",
  "key40": "5ypJ3DkjZvgLmLzWqg8EPEtnZpUAQNJTbEFyaNNHMCfgNs3Ca919x31M3tWyZ6XRgW6N9ffdkj1ot81nTC8qietu",
  "key41": "466Nz2FsBsASqCgUmHHC9acttesC3qDbmmTFqNMkJt4wS7H4HeukhvbF8dzyPYnTnLi4prvoq3F4WdejYrAoVmJ2",
  "key42": "3ocm2wFKToGY98ofTAhKMfXST7pFrHWCuKmjjNi2sAeXSqXQrB6J6y7zLJ4wpQEQXbHYi4eQzsPXnsxwycLmBoBU",
  "key43": "35ZrV58kkpB2CajNt6kHA9FWye8XdNV7sBmFX77mja2gktRVNgmRFJjwjtUyzCCqUKbwNR4WfjzUHbQpE7nE6eeJ",
  "key44": "sLRc9ANqsFnKuZpqvQajw69NvSeZELMQRUuh3sioAdnGVTtV8XmKGHtFauDJYErmj3Y29XxEE9kPde5RBpkbMCp",
  "key45": "4BrM9ude8qocDG81vw5eyxBmn5FU4NtVnqvNF24uk11G4MTMT9EDBKV7tMuC8Rmz74N33Uf79xoiUQEktUp6SFXc"
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
