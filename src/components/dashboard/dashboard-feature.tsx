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
    "FwXd8ScvJYTqFWRUca8rD8XLCFTKzrKU6ejpzefNBUPuNo1rSpkSN16Z5c48DQXgccZa7yeqUWzX9Uhp4EYJ1qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gXhCMNiZumBkZgbWgdtPgbEn17YG6A3wQujZitQ6QtXyM4JSm8xR8GQsYZ8Ry8kiBcvW75uxEwzjjcoexBNhsCd",
  "key1": "2Gy6nsLwFPbrsTEMAbWM6TPjsQKxR5BfHdhJzn7fsTsB4T3ErknGUqLMu8aGHzSYGPjHStL32jTfJ4SeiBdNtZar",
  "key2": "2JbNiSVmjejE6qskZx9amS5fvpU3yHyh6bBd6EBvwz2ZP4HevDCm6bvkHjXDaQBVN1JEK7rwqYz5CCoUgJUFGiBY",
  "key3": "4VeT371T3RTJQHhd1vAdFMitdWPLcFs52z5Rd3MVsbL7G1BF4Hzt5VHWKgLUqXzWvMsrF2pCFhKrwaatkSBQ1ASe",
  "key4": "3aYtyDrMLkVbxvm2yM64ngdDAHwkZeG2aNYrzqwJod35FwnY9DhoZuVREzck2tnLNxH3PWuij84fdac43XWHYoi7",
  "key5": "5WBLtM19qUCZJ8LANqUpWqZY5MU12dr3Fm4iVJShYDsmzkD1VNsc3JpraPJYveF1b42fHMNBDeJHLbk46BoZtL9B",
  "key6": "7RmkqiFhFnj3kxtyGQ2wtzegYKimUpYXEjUjJXh8e8GtEbC9SpXcvBHXwmLfbTVPSpBKMes4Q6dJ4uj1oDBbb1o",
  "key7": "Fxyhn68RovUP4AnGeLpG3ch6yNMUY6zvJX1Kp5sgjpU57sggnhdX1gdpkgKHAmq9FX6KjPwwp9bEqU77Xpd8Zzc",
  "key8": "3kseLCM72PEmRd1NQHPo6TjZNayxPimVZC2VS19QRUb5BhVpkaHDkirJBEXt3BS1Vk8nprBjePKEa8mHXW7C3cJT",
  "key9": "2xLJ4U7r6VXb7WBsLM9CMWjgjum8TCKQpgUyYDCo1jBUkN2258sAVN3jD3G2T8Kgnn5aKgK3ep3fBnjZm2H5Ho9p",
  "key10": "4uxbvvLdYVbr7ZZwzi6A8QT5KpM99uD2UMykq9ojKgVYyfncMjNHXhbWgjWcddw2Eoz78euFntxxkAxbqEABkhGT",
  "key11": "22BR5wNabq9vXJtSKAASC2L96eRFQNyGky4PyMUw2y5R18wCerAZyuZckqBpKDyTRywVgRKWh4h6S4RhoUNPhEyt",
  "key12": "2kUqFcNoXahgh7p5qBBDpRFTZ1dmkp43scoZPZ9Jnszg7f2s7QmPgvTUyTXYqW6V7nn7ZDLFA3gB2PWHWEtB8sB",
  "key13": "43k1t3jkxm9Zs7k2JYf7qwaVGDu7DqnwCtuYW6JPukAtEJc6bSWa3uqadmap6qptjeb4hnwRXVbBCBZWsJNQwtVk",
  "key14": "Ri5YjyzmkT7FCLVoTumqX1p29t9696EDzBVs1wg8KSLqz9sMyBWHwV1AGKHX1Sc8TJT72K7rrs8dWDMvzWNT7rH",
  "key15": "2EQh9QsURwVTrmoBqPJyTq8mgQwt9EVoMLCP3WWDn8cW6Q2TiZYGidmaaVvzgB7R65KMcyKR7QL49sPVrcbW9rmP",
  "key16": "2xtXfTZTQAa4m7gFdfjqaupo8anJiHjQX8JTfswNRf6RJvubyuFaZxEayvvnKg5MKcZR15nv2wa4QHmGggwSKmYf",
  "key17": "3Fqx2cX78imuQvWQttDPv3FC1Gx8quShBc4njPT3XJHb5BRv5vVzqq427sLtu21aF5ERxLT8tx4P859vYtf7MxBV",
  "key18": "3TdRW2BrTJWmidj6DQVnKwF7PZnEywgCjB81tQ6nKWhpkc6mvA8YPNP2Zk8W3cCqtJefZNATbFmo4897q7cJLEKe",
  "key19": "tDERvzEGVPEfEqCcJX3Ghi2eFhH5swE2nyUjtVMMCuXduE8pN4EvnypUPPzGFk8M7JHZoiN158HGqKSsucWQ3Z6",
  "key20": "TfKDunoTk49mxd8uK9wrWAWHqemqtowcbVuEyriMa7FHaqwdHvh9qctyf3DYxHhSjr5fBLD1ieWQDfmq2owEwAC",
  "key21": "2emd6WryutjDBX5njY7EVAv7u5hPcSt3fKWDtBLjAdayo7EAfwKfGH5rZq4f7akaCwC8bQefFLndaHet28xWYgpk",
  "key22": "3PvG6dEnBmBmFjaPtNtu2WLgzrXCzs4jJqL3Bunyn9WwLd19kxoUDdbPALsincm7go9yJh2GmU24akk7tSwfq6wS",
  "key23": "3jNS5ac6fGRfCAidwJecMBzx9hSpFLw1GpjDgTNRpVRWVECiBJf5gkd7dFovqpcQeXTfas5oL2ZwAixXuy1EVDVh",
  "key24": "4CLcmPHZRepjarSRZgsc1dBCUwRvNGSpKhZ8ccBNa5BT3xPtisxCh2QLh2iQyRZ6hMv9g2pjLyMxd1wboJ2gi3S7",
  "key25": "4h6GbRvAe87gR3VRpG93syrxdQrkXwrmFVECDJW1c8QNgQ9TU9sCZHU76njBzDwPJzvR3ryM9fZwU2z2rs8a94f4",
  "key26": "aNwb9iqHgX2pVxcVaXDjPb9ef9e7MdjxhyFKmyXYSvp3LZs6XndmNLkQF1cSrjRusvcm4bJGq7XdQHWLZ5VeqFi",
  "key27": "4QHjgcHrTgyKGZUaJnqVCQNHv6ydHGTAhbMLYQm39BNntbcpxhjpkVjFwa6f49GJSV9SJXzVMjeXvGZyTh6M8gPj",
  "key28": "5si5TjaqRS6Q6FfmCDoBhHAJ8EQyKwAaB6B63zHYxWVCtQxYJBCAXvdjXPtTTfhUTi9dD5qfjX593C1NpmKrN8Em",
  "key29": "bGXvHX3STv4hyJh66bCieKUjuZw7FSKpUSpYoWJiwRPjDR1dyxKfozs83vNDXTgyzHXVrFAEyCgvgfCeKJt3VjC",
  "key30": "3fXxt7TntSePFD7fHDVANT4UjLRE8HM9x4BS9xgtvr9xcmQrmYFyZdfzDA1hqaGnrK5wfVm7osBR7gygLrHDCgoZ",
  "key31": "42cMpr7HNJ3paqk8sSSAugZBFCb9mEvE4nrWiBQTT8yuE17zARQmByPDBUQy9rf2N1mcoLaSD1XMKcbwsMxVraQh",
  "key32": "5gjcCj67tCZCVL6o7kCKzTa8jdn1sbCEjdDxee14qUkviXkn2SpXMN4kZBQz9YLZHEfDDrPtp6A9sZNJ7BLi4GhN",
  "key33": "4ixY86JpqiHe7B22mGAPcvUADHZ1nTSDLn3W9hFjdKJn1RT7ur7baAsX6NFnUcS6Dy33r383WeNeFG1p2DabrBmd",
  "key34": "49WEY8RP7eX47akvF5eCuAsWyg3Sjt51dUsi6UYvsHGfD7jPQXkNu6z5EuobgnetefE4Xs6c1hXmLsxyGu4kiMpy",
  "key35": "2NXLXv7HiDmCoDmw3627PnPdDkeEbfBJ7kCH1E5R5C3kKaqVFv8kNemKvh5qDCCFVRX4JsqCwm7kMt3RDciknCxg",
  "key36": "4c8wRWcEDPyG1FYrZCaTm6qMa2z5amJNGiTpZ5CcX1aXZWipLuKmVBmNyDXrYhDTWJCXefK8vyXEdj1PYECdfaU1",
  "key37": "2U8ptxWQyWUxVuakadrbn1Afdj1uGDCv9dASxZKCJ7znJZkvbPDSWZ36rLZhSXGBwP2xBEWACtUJjkaTEmNB4ZyN",
  "key38": "2hAZBpK6CQf7c8u7ySq1xx33pmdUNJY9hWLMjX4DaAFNjBS1a4p7ERjZXHMUSuuMSCoeRSptMp4AsL3yyjytGfNq",
  "key39": "5nNbRKgdekFmrTMZ5eGz8DxNCd5h2mpyqumCSJ9MUe519jW34tU8viSe6fQn8g2EMNmzq51mQ4UY7bNjoqTLMNvX",
  "key40": "4ZQrejfaikdt5MfbMdnm8UrUzQQ33MiQdi7nxRpTsvBYE2c2N1kGxMXCcvR4gbNuNqFXpwahd2JVhURRZ6SqkHjy",
  "key41": "5YNNttUyXaL2khxBYZLXXNjuNUbHKezFKdz4RWWabdD1VfmbgXupC9zn4TYNvmpaHopEpus1Vf3QrkVnjf6y1Snv"
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
