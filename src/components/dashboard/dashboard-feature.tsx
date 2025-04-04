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
    "585cUmAEP5JN6MgVQVMcsLSugSy7NtX6oQ22wUmrK6hoAL1JtFwQoyYXgReNucjr2qFJZoW5UQb2DpRwcMD4zGnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FywwfQzwXjRM6QC8P37HzAmw7FWwGorEWeLD7WKpj6dPjy95y3NSf2AeHKcK3njtzyPimJkHiJufGpHnifaubvc",
  "key1": "36ZZiqZUxwzSrJwmDTMSvJtv2i6nutbZmmorSognQZLmm1h4pUxB3yeTD2NmbQ63Do5bjGzaKKpoenE3xpodvfpo",
  "key2": "22mueg3S467ZzarWJh1Jr6jwzajqqJqzArTWQrz7KZmpK5YsyX6ueVQu9ZCExWxYEPoShydHkWQMsdfRCi3vjUTZ",
  "key3": "5R6qkfRz6xLKUhTjEs8DfMFgL4vFMWhizD3H3VxWvnbf2wx2U3KPtiKPdLtADuRpBNHjYwimhqQZLAQ31pnaWgGv",
  "key4": "65gFV5HJPb3hezHL8kgg8WmHbKDkXrUczCS4PwDReBNjHEqX7hbxUSLWxBxfRKbmcBmZoBFvbTjCAqi2zMCSYFNp",
  "key5": "4fQZ8E7WEEjLdL19WBxwretJD1P9NJvgW3xpoGWwSE8y6KGTb46Yuh9tqJF5qJDhLjgSeM6938hNQPagF8TD1iJm",
  "key6": "5zpvFt1gDMQX7Bv4vhBvM5CpXf1ZgGo1RTtciTrNHYcjsQDY22yJto2VgzDZrDzHSTHNor4qim6eU9qg29G4YGo8",
  "key7": "o5vJzWYk2Tsu3Tyqe3QDs3rroPBRBsHEnScs5qSmTRzwy5GtXRkWhpTTwcTot6C5kfJ7NaAeNSXbTuG6TRMgQy1",
  "key8": "4sLMB1FjVmZr9yQLc4L6tSN1sa58d3hF24QUUdbMU33BcKM3Tv6VCmEMsg4R8PiAPvxE9JwLASDva2RNt44KjDc5",
  "key9": "5aJAY5ZWzY9piKLDYMFGzNXa9sVLRLtJSVHt79SXZW2LCa9rxvj3GDfYz6gy9SEdm7WPji7XNqx7dwzd6Rq4q9pe",
  "key10": "5MzWe1PbMGGyD4emab5onkUoch2sQ8Y5zuvTyxmKUTfrAs78ggv8NHtXnzEW2ZSq2WzS545C3ZovkcJBvLLzQUk7",
  "key11": "5vRVRdyQyjD2pBQGqtJfX5tsQoptrK9at4TMDwYw9VHarGhuqazGjU8vWiBVeCHwjwDdFrHkwReAniHJUydZ6NUS",
  "key12": "4G7w111yizMfC7Tk4Fjtw98B3u49wWtjiQGT43VcVTvMXkdQz6Uta3wyiqLeuJ9Bcrj6GHATogLCuRSZqJvrj3ck",
  "key13": "4xErRu7Es7J52KfeixTe1BRYccPMcJ989RAkFE6aogEcZS9rb2ysXqRi7jAWMUWdVjqF4vJUPBNMbyyLnBknckAX",
  "key14": "5pXLpxUkw7BZUPgkMkbKtbHqP83UZurDP4ZTkwawzqzafeyTny8MQ6D84JSTGT54U6a3hNTfGo9yc1TPfpttGicW",
  "key15": "oyTDBYQTJa4CxM4wA2VUjV4QE2CpoD9ScGKvVT2qZDMPUhPDtteag9e2zBDQJJGbdkuaySqPVN5q4ocQ5nSgPjf",
  "key16": "bJhuktxQEmArAkscsaqqoe4ZNp4oEHWvHEdNxfJDS7ArhKYqyKBeP9Aonqu9DTqTsXbwVtqra4EUMFSh8roK8hy",
  "key17": "2gtPShfj4E4K2niPJ4GyN7LrgvQQKyZBNBU4hcdYPHXGudvaLTN1sgTyR81Btj1UWELQXXPw2bB3NenTQpaQ3kzy",
  "key18": "D7UuaQJk7zgo9y6sCdFiXK2e1k7BdjUw9iEYFuAA89Fcdpryvnpe3rwTvCeKXZBMBUEZfzfRM9FHqCHr8TnGtUw",
  "key19": "2BAJ65Yx7d3U7xpyHT1LpViWrEy4veW4uTsWeiMZRnSymGfDSQUSMkamfZBUEMZJ6s5sfebceGdmQa37VjaThy1c",
  "key20": "33fvNQ3Lwif3y3x6is2MgZyxMgUtNYSdixS9ng1bJHfQooo4xVtTVrvwkFGaFtTz2Rk86U8GM7T7M8hxs6Msns4q",
  "key21": "5JpaS259JTke5auJYXHqr4CHWwqdWSBHhG1ciSkKQxBf6Mw92JHR2haEexcsy6NTr29UHTCDDt7Q9vLkANFnVeys",
  "key22": "HdAmDVfpV8Dwdn9daUtkThEivcENfEa4iS6qdJwWJZfpiijkA7fZ4c775s3RBhbLBWojQUKxQXCcxmnBu2tz5vf",
  "key23": "59qZfLcsUTL12fUMkCaVZGsDXSQZYTjMGF7yCUV7smTW2T9zL5knDBPFLB3kdFLUbZuMFNHSzni5tMrghR7Pmwqu",
  "key24": "5Pxceh1H8szxHATsiaS5nS9HuYVe2NxoSS3VGwBW7EREbEkMNjQPcjxMnxGt2HbL1mvWk86rmatKWmiKnDF5U2Ff",
  "key25": "sbzdE9C5nYA5cJatYLGJFAiBvGq3VdwaX7FRoFdrJS23aPTKjyEXsquS7PcPcoNSJqW5552aSpKiYo8cyd8THte",
  "key26": "4GBGs7x3okt821iNnrbqgsonW8YEDgNfhTAv2nHD3YvZCeURZ63UXewNoUMJhxy7CVr9hr1mQxWg4TLrGJS3gLav",
  "key27": "3W7ro6VcSzJ6uyMggJmBJMokxXQnm6tpWGXfuiZK7f8T4t5fF4HHqkVFywtW3kXsqpGVe2ywQhxgvfziu2b28rPu",
  "key28": "47XC8C9XppRrkF1EhzjXxjTo21hGAs7h93GZPNzK3HVsezgvNQfVU78FHFZ7Lj15vKin7yDh8Sg5wrwZ5RjoHJ4M",
  "key29": "4TFjQ7oToa2L3g6waFymqNXqwe2WYnfAGATVZw7mCMHNmgyiYr5SG1gLvEsQntNCCpfSanZMBBK6kYZByUDFk2K6",
  "key30": "2sNtStmoqbA8Z1rYLkxwS7joq32UG8tAmFNb3cRuZCkxzVnN3NEgQE15MLbngo5apzNBRk4ojNmLWBAYa57fWdEU",
  "key31": "4eqCP5YC9Lit6ikVfnMZsVvAuhFZb6FaMRM1w28iUGNMXVh28N8NHDY8fU3peyPXiTJCGpsLR2GqS38vdwy6LzQC",
  "key32": "5RH9HJg4EzDSDkPK2n9AT2gNan978E9tkaeWBFoUktn8PbououAAEENn2x7ZTEccnWajvgtVhraePwvxb18K88js"
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
