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
    "4FzNbrSxN7kj8wy9NgUtUf1F3kHVN8L3AYxycqfDQx1ooTwzmjVV1cZhnF4zr73xx8vKj83pX5rAmbucjVyFRLQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSA7PWeWDZDEBEMasZg7vCcvg3EbbSDewCbTobCmCWXvp4SFHwzVAn2fN8cYFoPQogzEbPd2h2sJEiLiYKPf7Am",
  "key1": "2L7jb8Y72HAJH3QhwU3dAMgMTq5tuf18E2cTApPoDeXpsruxhhccQi3jPUgF4gEEj73wTv93PxGms5wXw6Hdfz8A",
  "key2": "3iQjFveD9VfUUGYbmP1rrt58WCjCxfugtBQKYkhEQaPLUf6Hut7LG9nVov9uNAXz5CkGnPWnaYxrPgye2YACpU36",
  "key3": "EGPrHU3WonGLngrQ5AFEH6zJdUcjNLFTpX1zZsxWntxEVGsYZBhNewkhvvjqDV9BHyBTBgq5UMnCj7pTpH82otr",
  "key4": "3WY1ATxw7ubf3aKkLZ4Vng4M11Gss88tKMAEJ1kGDe9jiuD6zENqXXgHopKFrQaSEQELWqDDiJNV4eBNMRm6JvBG",
  "key5": "5EKGYAb8uxZ9m6DgBjuNhHGLS8ZyDwkpEf2bQgUGvPg9PwpNrsxWPBbNFDvn9zuEjcgG1Zs9W6efT3ZMigYQvJf4",
  "key6": "4j9tMjKhhQTCNqmAEJz1DnzKYwqxUYWcGYSx9YwyA4q9goMrGcAQHK4UNMDkUS1rgbcEYtRkYJ2cgsX5UmPbA2eG",
  "key7": "5EQ8mcuPxk1o2JD4PA51N8p36h5JJhhUxPVHBRttVcoyD1UwM7uUkr8qrwvwFmzcS2e7TEm4CXP4a6farzJqCqEp",
  "key8": "323QGtwPNSLHJFud4dq8VQfYKHdbMH62Fyd7AgNtLnSHjEiGitVVC8NYW2Nii2gbEvCyiG4YbXy8yidwkNgwzLMb",
  "key9": "3u2vUb3MitoVZmwBNCrd6Fuv2Vx45zXKvHRrqdyWP6R6KXeJM3Mu1ENjuCUhJKYKfFkkz3wnpwwioGRV1qkgMdMs",
  "key10": "5NCs5FN5wveqjJZEiA5nWUk1Z3kFAaeTa16g3hihPE2AHGumeSTYxPqCMB5JekFAvyDfATX9UdwjASuXgRRoRx5W",
  "key11": "4vhUnXuQqCZVnSUVnJuA7e4Wtqy2YAEmpLBsc7Uj9C9bSSqiVTJbg5s4a8b6Y8WvHckFgm1XwDFNaHJ33MERW9XA",
  "key12": "3aYntWZTVD1XZchv83WErp8ZnZhbFkh165ozum1eBBKT3rfYuk7HmnnMymTgh4gq8VMtCYZ6QZnbHAbnGnGShJbk",
  "key13": "5hqguLHKgNdteJaoeXvBBR4YfZwEgGoT1xdB2X3Nw2puQUZMAJXxCPNvg2KMx2YSb4n9rwuTEEpKbtLDpzHMhNYJ",
  "key14": "2mzmReX1fJSHthfpuoU4DDNkqWLF9vVTTXjpxCCtdgvymq2xdNbTcmc3DEyijK2J247PadVu8pTzyYPM3XqMFbrY",
  "key15": "5yhB8sVwxFGWUYEE94KcHHaZGLdVBJfZMdFGv2MJa4eAd4Zgpf8TSfZU7TjgNJeF16uDSdX4MUrn2tjo5yk1i9Kt",
  "key16": "2hNcA5Aj2xohsSp4UmQF6Qq4nkZVRkeEP9cuHByuqin2YAhqGibGHMjiuGx1YpmU5Arz6xuWHJBXk4KYCfEaE8t8",
  "key17": "5m1JaBosinZnpKJzHXc7kDXbXoRkPjWA7mpxTckj6A4NaVRE98VDvGBHTc8j2XjChvdnhRbh3xh5dWBK18A3AYKG",
  "key18": "2kfmsnCtH1DYJQr4YmTtX7krjW7gxJQSoN9GJmcNCmARW4sRHY8iC5L3raazTpSxufrukfKX6JAeQmrAStm4zZRB",
  "key19": "41LEukoYQ4vSLBcjd5Kq6LZoaronhZEsAvhcHCoudoWhaS7KrssyK3NdAfbBairPVc9gRUJ6f7af9v32KKsp44pk",
  "key20": "4ojDULazekPW4qmNzdJ4NiskyoAZg6BBJUijMjTFZT8Hb6rSyJnD8kfSo6hoab67UoqqaKf5DgvKQKDCCf8fchVi",
  "key21": "5AqrBzu1HpkWgNXbLmdV9kUQrBN7y1ev2RfpiWXBnWJNiuvKcPYZoQhorGMCZfVerafZAp5K5NMXV8z6xP2rFo4v",
  "key22": "4D7CdSMURMC7Ux55FW3EK8YY5Y8qQDrQ2iSyWF2SuWhrAxeTiL5KwRLUd3xGfxGpaJFwwkkSPoVikywYQPtR3nvP",
  "key23": "4uaNmcMTEZw4fXNw2RYFmnMjnruCow19NJSkJybLRq66p1kG3g1UtR7v5wKZuYEUB9bNmnrdX1ybgEJHSDgA5zkB",
  "key24": "5T3u2rSxu5S2NW3zv1vwomSUkrJjz4TvQzv1vurBkvyugHxHFcSBDR6h1ptmcPoirWrXE7UePkBk8BW3Uh532sNm",
  "key25": "2PbekErhi7uVHJjLun8E4Z8nV6JsDu1o1zZksMDetXtNnkrkCrASXxdPrHe7Cvrp15gzVsotkK2odfMRMyAkLg7i",
  "key26": "2WoPdu1kZFuyQC87hTMa2nSsdmDcR13riuvytWX5QYB4mpZBM89kzrAPsqrxkE4Vm1CFMLgpsAhxE9JvERJNZTMC",
  "key27": "5kipNYufwSVKUhqKa3eRHCa5RuRPf676UvEEcpDhV1fq1m6BdB6kzEx5k5dKRWwB5CfrZhxYYxPn6iy5v6PyxFH2",
  "key28": "2qtTCQKEHJceAmdte9e1HQdPSp7KJuzX5Tcege5iNbrrF5ktJ7qFNVanwgH9bTWdHybYaHz9hwZ3oH5katPhqPmr",
  "key29": "4LEf75WJLkW82qYPC3Q3BJSWT88HkfNcmVfpCvFjwguRkgiYkAMU5hafVvzt5Tvy2AgcoiFz2sRqqFAiVcmdw3vn",
  "key30": "5mtH34qgGJCjdFic552keJBkw8uL5Pjt1UuHRPsKCV5hzo516Xjp9DrNUAGvc6yvJ62mTcZSbCVgbSyTV679HrgG",
  "key31": "5YEVBXdWr6PQF1pGfYZmEXS6PgKJThanMkaXvkZXfvCgfnmdPP1zxYdQaJYVi93ChfGUF888tXbjK93djiM5fTa3",
  "key32": "4K3HLj9NqXAgkm3t88xe2K8MU1PAnzXa1iVh3rt12Fie3RApBXCbzjuwh9Ub74jmo4dbfv8yuFQkb7b84PmYkGFC",
  "key33": "3QQm2DDBZ9peeVCxWzdwJXMWE5kBVim8FjWHs7zFLC7D8DPSRtWg1vmm6aXrTzNEd1tNsK4NoZcJTQ6vaT1humTU",
  "key34": "2JPK9PWqWb2fxQXoH7DxsUWDb6y3ipSTQt9orZMKuVJnr3adHLUyFr4LQMg3pyCctgCXX7AvVLyjmEeRF98xNyFL",
  "key35": "4pLi3CTVPkWmiLZmVgFhQMxT41hXQvXCtSXwKUiU8sgZTff7mRSri2SdVuuXfaAfZvSQ1hRDRwXEpU6HcbNNNFvZ",
  "key36": "22Sqm7oG3PqzRzMjKPm9a4rwfJx2eCFKm4SuFMx71DaNq2mGytZpbUenTKcfkZRkyR2x8CtHyzhhCGnLPzNuGWHv",
  "key37": "5pekJY2HMkKJLPLM3efS9cnTsEwjGrEAt2PJWjhAQvtFhHjUBgYU5cniv2U53CcxaxLy3YcHjs3eVtxxKLfmPCkV",
  "key38": "4zXjUVukRzYz6kLKgWRDqTebSFB37NYU6K8VbEw2QUdw8BibFLuevkpUyr5eLeYFk8BZnzPZ8fCpf6HWxs3g8iJh",
  "key39": "Lx1TDKJJtAtLvGRJiiWc4Ny1zpa5Fo6WjyyTsQTJRDBEUZADkdMeTkuZdop6L9fzn9wdF3pS3UUqcjWinzyuv2F",
  "key40": "4VpM1ttbwyi1GKayhSZu8X4tZ9MgkVRbse8vZe9Syp7GykVup1suwBqtUizjdanRLkNZcu2X218eQq8QbH9xuw3o",
  "key41": "xGDwuZhyW7jFzvUGiSx4vHhqWxXT6kbC42AQje5NdgehQ9rwXjBziHzRuvc1S61bAsRgtZP4r8soWvqdt3EcC5d",
  "key42": "5qyoKK7NsNcfR33sQGY6kiMdiXaLh3qypdTya34LwksFojv786ruyCZEzw7VssenZNMm6YBdHgcGEka3di2J4dxh",
  "key43": "4P5fRradwP3nmAa8h5D6Ri2FoHFSzau3FtuugxqrRVR7tiC3iwRGGNvUyjhvenCvPz2MvV3HJxHFUw7b2f9VzR9Q",
  "key44": "22nYQYBGEwyKvwdKAzGQcSEyW2pbuZ8CJdQuWC194UmmTKmWoEhS3UTJSFLV21iKd7R8bGeubFh2M8Ym9dJSqZae",
  "key45": "5td6YYwoZNeNFDmoxir45DxiAHxQxNtCdVRbnGvFH4K4GoQiM2uBDLAZNfzDfdAb7erhmNrMPvN19DLe3H3ub7kv"
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
