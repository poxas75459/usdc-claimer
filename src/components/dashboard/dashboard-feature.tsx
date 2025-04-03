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
    "3pP1gohrYqhkPcJLoz4RWNmuztKay95Qs5rRadgDHxCeQ8XKmKnZjsmRxa7FBK62h648hr8KYpE7THywuRj8fJso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzSWMP76ctuQcvwTBKmBGsqqFjcGE8kMnZXCBv4Q8WozqN1Xf4i6QwG68veBTQGbBzaM7SToKdyvfB85zZJ7MEs",
  "key1": "5pPbJon2Dind2ETnjPskjSU8pm3qrN9R62sTMNwbCNN5myT4AkRhJx5mHJj1CNqs5yF7sL2Y5ekGkDauwrv71vTQ",
  "key2": "2oNVVeAUdyQ6x6EmNeG8cBcRGh9n7GKGPxPZeNUPUsrUV2q1276zSW11E5nHvzbtaeazVxNmA5BHADE7Vqyv88J3",
  "key3": "4HbnuekJULXEnbdg9arKP2vEJg7hMDEA4LMNjdn1mieQnQFPUdzcygrxuEaW5djhz5axvbdEbZi4c9cxUcmgbjF4",
  "key4": "5Qo4uWAGyyen9WhR1vAwu13JSKJshHQFh8P4izL3vhhuE8Qoj54yZnnnNnb6uA3CsELkPNBC2Dji2wkJ7Nk4LNYu",
  "key5": "4q1XmvkLk5NbPFCmL5V8qN1cD4x72FVcRrJoka75XAvy417umLjmiWerPNw87KebK2ogc4iXCK7vBQZLFF2GcYpg",
  "key6": "8YBoVNawiakRpyhcdnuohpaaTenwxgZ7D3Cku1fvkrMd8VZXY6BFbJ3hYGVUwrJmXf8GfuwnD3tZCixdHf7xBq5",
  "key7": "5wa14q1WBHGSHfsKFnh3juxHsSwpDGKG43vHXtZrRNTGk1rreqz6U6rQkxSjyUiVMPYGrvzwU5wvkm44VAUxgDUA",
  "key8": "3MA4fgNsWuZ1ePaapEPp2jNjveQpSu8yee8QqUaqQvXRZG5aYPnvEEtwfxv3WCG9AccGyc471swJzRXNJQsHaGAT",
  "key9": "4C3eNuqtoeq9rcpNWNTXfx3iF7wbVzyv1s5NPZGSyQBmnTJVdQ6Wb4kf4ruWgCp8SAx73q8ZMXkfEprgzgvDMoFY",
  "key10": "38GanUedttkbTqF5gzm17zUuwK68fTFw4LM9LH5QgBSayFTtmYDFbg6uwTFWnrtmqARkiGZCVfgmAtSp38GyjA3W",
  "key11": "4WqWATicVHfo3cPAQZRRqjCrzV4RKL544SKztmotmfEAMmrgvxQk16vEQXnGy6oh17rDfDKt1GRwyKRhU398zi6Q",
  "key12": "3tu22NY2CZY6XgLDTh9HXU9wYbsGUYgVGXCEwVXGVTrB3RcvXQxikGYiY59bVqsKFLLn4wkFneyFtfs1qcApgA6P",
  "key13": "3HTGdqNwPzreN6rVSX34PLabuRt97vvp8in2CfhtRax9Z4m2owoBfnMssukPZRBN7kHz3YVw7j7jLedRoeMWqZ4x",
  "key14": "39eVTn1SbzANEr1mMdZMUG482uyioxC4nEMDWmGiMGUsHvskhD4Nn6Xnt5qAKMUR7xc1j6hRJNGoQ2YT5jXVcPCr",
  "key15": "4HqPt7dwvpFzvoD9Qpj7m87bb5EDcmrnJSBbraN3Wjb3TQzc5AqV1cTau8m2pqarLSaX6bUq596X9wyZ5pYZWcjW",
  "key16": "QhJxCZg5yuE2zAoHxFi7uQZcvLXbBfyscsZEGFa87xwVCBrpV6X7SYXMmtaSkuDo7TVoQFN81Um4fQTAhgzynAq",
  "key17": "3FLpvbiEyhNYxMxhQyPtDFNWvJDu73zcUpn7PRKgPpHxG6tEQ1SDHo5C6SPLfkX4zJc6zEy7JTUGALfKrg4Uv3Pn",
  "key18": "SUnnzot9CQPKT3Pn5qtpfcfMUuz45H5AXpe86Z8wFWi2hYH1Ra1TPeP3V3uBR6fyTGF96wkWyYQaoW5JH5Hm2XE",
  "key19": "3fk9g8csTJpnrbcqR9HwSKG2offJDr7sQtihqwYmwLWimL8TJzUbc65tyRPH6zQb9Goe6rVQhabasBrq4KvhsEUv",
  "key20": "3pwog2KGg1NCEyPLnPUv9YLDpdRsjhF4QcFHrzvYq6W3oTaJHbVCYmAZXc7rVY6FepxSzEbYcNFzBQc3htsdAT2N",
  "key21": "2NG4kfUP3SAwHsmmbMSSEmhDJfq5V6rHFoQDiYTpCGCK4vj2ujzDZLEBsvyCdYixaksTsHKw454mKzaNnk1Fd83x",
  "key22": "5kQYJvwg4fttzWmkgwQnBbQKmciEhW5Ym5qYt9XVm7n3guKrsmtCPjstkSBtMCYu3nHSdBzP47dKfwhyD8KJbaEb",
  "key23": "21tHZwKWp5zF5AsWVvoJWE4vaJbDLBms5VwQkXYnUhUuxY28r94avhZtM67htFNTe4tLu5Pg3h7ohkwRfeJwDFUs",
  "key24": "4hvsRgDcRAEimQ2FEmqnYekd6P13TciW4SfRdgv8M7aF5FzrviuhPeik3jr9dpuchkJ4FcjaMpaGfuH1e9Rg161E",
  "key25": "23zH1SNTcjFjV6QG5R4bkSUf8KqvLNiBCEn6pdyC7MPyhz4E2trjzM3TR3dquyv6qemmtmLdmCE5nBbdTkTY6vRv",
  "key26": "4f9GwR8fBXTbJzHvv6AJKaiViB5VtzpCVKf7Nhmh74Lrypn7qeZmdWoQUWSuMHQAmmmsbRDwgskJyo5YqxQREWa6",
  "key27": "3s2QcfrLkab1yeekQMzdcZBuHhNctNbfaaFkZrZvbYMzH6mV3Q7kheEataPAeJGcqk3VMCU4HW8b4fcg2zGVrQva",
  "key28": "azkfBJ4M5KYY2nFJHZz5yvzGUzurxqc4dgamgmUw2tnBUnzeHNH8jiegBMGzxxmLSBx8Vqw3UBHyyHqdazTfBoD",
  "key29": "FcFiJpXwi6qSXaS43Nm1fFpxsr5KiFzMVLz3uL4FWD7D5p4Qn6nvEAJ1HixCS94ABMcawTsB1D4NXqLk4BY8zR2",
  "key30": "3kdd52MtU2mMJEfYNTNnNF6YFAJUYh92GKrnU2SDZfXPnSFWAVmHGxNPU89dBzPxfMscbDd3HPXjaiLz2UTZa3MX",
  "key31": "G8f5T5DfBzoaLgyeFiqJ38skgWSKyFv8TxT3sZr5RZw16Eupkj2ukMoTdioaCRSMJ8aS9fs3zMj9x7pEarUdY1Y",
  "key32": "hpaQzWyyWWB379BD1hi61B9BkA8r8bunyq3R93rFHSJwA3rarVf2B9drPyMj5DRC3Abijk8KYG5xZvN9c9d3Say",
  "key33": "3vMhSsqzuV9vHxymYJ2opoeoYfzFm9sX5o66nHJ6rzChZjD4EYCVYBxMH2KwQM1o7DKiVbmohJfq2HKWLrD1vdSs",
  "key34": "275UUefpVwrs4uhUmEesh6oHa3BTZeCJUy4ytDTzZSkvkpQLLS5EA2sQeKb5xNyYmRTVXZLNRnYRRXog6Kot3qGW",
  "key35": "373dRy4ymjCegvn5VoWbwyQEmQKAfSphdsiGrxX8S87vpN6vDcph45pkqQ6JvQ1fnYnp3HZte5nTUeywfmyf35Zt",
  "key36": "4AAD9rnryyefXoxeAPqSREBJ4wvu6DJ2Kpj6dMz2yfkmrPNyjb5BDFnC4wQZ7tFjL2wE66Y3NggLAp8PYnwrPLTS",
  "key37": "4BwkSEDnhE9JFdXcM1voiRz16sZ9ugdCiLKigM9iSD6spVvLsqexj3sjUGv9FTyh3h5s2dDYjZE97B53nLeGZ3cs",
  "key38": "2QYtTUJzV9gPAb2Y9a38X9mEQLLXT7QRnR3WcJtaV9KSnmbo5RG2XXwTbmhWxU6VTAMaXcB7jgLE6kvBF1BHwyPu",
  "key39": "tKKXhYXG5HtzUfiNqrX6MEoZFsMLtwFRjD4LgNQWrNEv2A7scArRV1DkAEDCzWmUUFejK9kZhNJMdN3RTZKhfdf",
  "key40": "4ixjqUdVinjJiZwEsL6GxX6p8pfXcdYTLYhpSy3PGGzMGtfGcAJAB1Y9Kt5uB3TvJDuM8NjXErBzf4GjqpJpTWRS",
  "key41": "4Ko6vyAGQbsw7QTjd2bYGvVspb1HxAW7GgSsh48q8XQYxR2y8k4VnzX1GR2gxPzQxZz4V7oDz85td5CqNomUVMVE",
  "key42": "3MD4UqJ8ShHc5m9AKuMyPAxvwoSmpxiYF4AhfoFV5m9tiK13A3kpF236LWmGcYB78suRxomyGEvb6FjyNQriUw98",
  "key43": "2wayuSXSEPS1rXmsogbzfB4tbLeQXCsaZ3jvjWX3FMW1jFaoMD9WyeVedFo7FVxLK8nmQ87XxiBio6DaHA6B8cEB",
  "key44": "2j1KCC69TDmkJUq7uMrGGb6i77Cvh9kmQ3xW9dgaPaFK5K4ayX7QWMxYc3vpPmMxBWN26tL9DGBu8pu1CXffkeHd",
  "key45": "hQLmTZE8NjMTFUGhPQ7DGhUmMLKq6AAueP2Dsnbpt1QnHysgurTUsRwaWuhKgnyXRF3BzPrN8PkVUrgXT3MHVfi"
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
