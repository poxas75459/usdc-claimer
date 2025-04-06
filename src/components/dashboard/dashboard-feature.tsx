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
    "SgmCYt1jVmeJuag2tb9C12GqhXvNmtTEkpV6vFtKXEXREZ3HEiYfKpXzQQqkoJ1DyeEn47K7tqqrocgaK5j9BRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFEFH29B1SZZuBkf7Fmhsdvdq1wDQ7HyifTGPGa9r2JonVnrAyo38SWMxzZCvgtUhjPPoHQ4rwVWKeGtEiyTydj",
  "key1": "259ixkFi56jbpGTQjcJQEH6D5KSaiju7CfYwCDrBaryiFoF1t532TpCEcr2tgBwCB3Qtg3Xzg3oZRPFxqbRKdZDc",
  "key2": "4Bj9orHJQSgKPmzGonWwJe8wKqdxgDPJ2K8UTyFY2PHSANHQPZz5orVtkD4inB2dmMo9oyJxxC5J2LLye3Z5HbTW",
  "key3": "5ZzxcinVRFFAC5VwzZp2ZRTCq4UmJeKVJohm2BxwZKuEymB3PaGxELr4iqf1EMR5cAacQpthKZdWzquMzUqnEU4n",
  "key4": "2Jdf3mXCKu5WWUaeh6f1NVSYqfLfb1rvCPn6FJHP4K1FeB3MBeiRRdFHVnjtkaJ4g4KwHdHYx7U9i8LjEBSSrjhL",
  "key5": "4nVSUoMM5VUDTzF7WKeXfKU1XapkWWgC9PQaxBTBCi4tN6wy4Utrp9qxxDmDxfApBw7HQkJtxw28EGCTZkckV9FW",
  "key6": "5uBRBr1ReSZG5Vq651n9YgxujAyhozz8gQx13Zug5mozHF2yyR7XS3Tveem89CeDdzYzoHUTCd8ZP7XwC714LQX6",
  "key7": "2CCXVSPc63hebznno5j5S53j3LP4AFEV7VDdNrFZs8BC7aC3DXyuw177ieGkGJ64tsh3k2p5poYXxE7FqKEFXWz3",
  "key8": "2eq76xJ62aTpBHNXQaFwQVVvwEh2VjBGwZ9QRZRyDFtt5kek3f9S1gqi6CzMjqNxysy9rpi4GV2vrBFQ38vcLDnr",
  "key9": "5X4xWcmw47u4QEQ3HJCBeAJ1VgKeTD8p4pGcBpX6xLgZ7QAKtzmG6ALN7fvUwKZdGaSTxSckokg2ri6x4XVJGVWz",
  "key10": "f1iKHhzdL3Ujm23BzdbJf3DSGfKMbAfEwDHhENRVYWnBWudvnjzYf8Cevsuwh2DiiH4esn5VRRfcvBM89QddzMF",
  "key11": "3ssyURLveEWagRsdfGLfErGGWNj9pTeA63X1SzcfBhaoWwe3zN1epAkTPhXNVFHMifMPyEgMj5odgj4mVwboSVmc",
  "key12": "2rQgD8spMg5Gp5psEqX9agKkQRq3fr3ZrDMNRpxXEPWP3CEUVG5BvMKrQryWN6DGwKdgMJxfYgnd9Dw8UmEa9HPH",
  "key13": "2xEvJBdD1Z7asb11EL4mMZBhLL9yZTyHQK9fuNLYgLVmpYVKemoVQPsbeH7DPNCj9EzKXJmSfmP4SAb1xe4wf3wj",
  "key14": "45H7SbfXoSqgHMKEjMcqgV9bVNw9d649bbYAAzzbp7pqfVM7d2ompytuunw7UgxmhQsZbCCLANocoPKuwsB7W1Du",
  "key15": "67qthmCXcJsvtEJGLWD6uNBVjXSLqhrbB3R9BLNq2jxamcEou1m1RR1mywLbpqKAjvKHDZMZJorRhzSscixBAMs5",
  "key16": "VUVEcEVcZHxvMcsZ8UEq61yJhRX5tNnmVWRoaJc5AFJsGaouT7vdirtHXZrN2TKkUXDXQH2WMbHDSzoFK3BLE7k",
  "key17": "TRSU8TGTBHu45fRoSAd3HV6N3aHpyT12E4f8BjUFba4v7cDGs4QwQsoJMqQYF6jyZQK2Hv17soF6vYpE35SXJeF",
  "key18": "24u9QZ98mbyFjBkW6spBcNVjmB6WEqyDFR5EPZgK6pdtmu3v6Gd7gtpT1AhKszdvnKHbn3qy12vKZRrNB6HGaGNM",
  "key19": "2gg7dsdb67g6m7Am4a3ffUXEpHQvfENA5guwfoEpgY8xTNHMcpjn6PDmZSjzm2p4WLnSFsnM7wT7jL8eAPqCSTT3",
  "key20": "5zks9UPeSan9pZb2feHTNRBMgVEQKjSDZJnimmziRwwbXSqwzEULUBemwJagXGCQ7iGoCfT7XkzDavZCXG8ZeoJ2",
  "key21": "48kZY7hMCoyUeR4kVfqMFuWLNKKL6yvRXx2R12G42KFsMzEhFYNkAqr4fDzSwRW7LrgwqWLKwSzizEB4PyRAx2VF",
  "key22": "5nkAsAzc5zMxbeWkyjgg5L5JdofUr5iwKmHeFZ9m7v6TvsBchWR5zfKdqzerJ2v5xiz6ws7ekNARD5PjFQtUzBzm",
  "key23": "5JYnQzdZdFQMvBp5HLrLhLpY9SJKSLfPCtagJa8CqoS6Ynq6bqXMY5KQ6AnBoKhAxUAADJjGgj6NdhoD8cHRUZPK",
  "key24": "5H9RmUSQiUreo4NRcdF2k99ia2XhGQNjdzEBB9SRHArHxVGWzZSREJmtV2Lh8mi2JHcoh1M8PSxLAKUmUwSdRVDy",
  "key25": "3XnVecrPwNGGbzCRq8yCwv7LYDNTinxQVTFkyBUt5tfwgoG64woCcw72vv5JqLUBi2LXQLNr9j3WPfT755sLF6H1",
  "key26": "5G7shcmoDn7MRoeEDpvJFsQR8m2NLYQQaHoRzPpAHzgCpJbp1rKyhkdQpU5TUbQ7YYSoaiPn78HQjYEcV1J1tALx",
  "key27": "466jmu1dn8Xg8bntJgSK1obz3zyMsTSc1oDsSSUcXjPrSQbEuWS3YAVSjZ3krRLnZhdjRJ5YpdEMuPqeCcFQQhhb",
  "key28": "4FBNQt1Q6JJk7T592bUTPTGp3KihSWGsnnQ9y6eG4CFPpjq9gLUFo2Qa3GCJMUaceYbijdAFFcokCSF5vNR2ZRLM",
  "key29": "3GJzD3r8c59LfxCbSexGPmte6UKcq2h4FD9F3g4z95uXoQkeWUEcqExP8ftzupocu4JvqeHVBU91kEg4CtQYjMtB",
  "key30": "3RWHRx52am3aJygHs85gLPdq9U4TbyJebu8zxRdVWs6gDGFWNiTFdosFJXbQvumKKPmt43kr1cVCyVn1xrBYni1P"
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
