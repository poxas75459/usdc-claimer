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
    "4KLjTxbcMZm5UPjHeiZVfoJFGpCr2cehNCpvSPFVibN5rqPQpHkEusdCQ5aG9kwZQkiozip998DA9xbbv1X7hVMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3GjsjeFhMx2myfu458gA3n7Z9t2CBs7Mb1hf1vGi4wGrAm6TaFENMuZ3TceRwLppnmrged8sxoiXJdpH79ara3",
  "key1": "5mPWFbjzFV89E5a285qa7pb64pH1T84UFtsUv37PGZD6W7vCSw1LFK5FAZQqage52vvfTV9w83XgjYowtmfRkY6n",
  "key2": "5ybdsjraeH1Mcuip9HFuTvFc2DpHBvXm9VPMnB9697C5zGUTgsF7tvvxRWa8L6zbpdr1Rn1uu1sZRuSyEZJoHjay",
  "key3": "38kofTKQRSPo7RXv9txXZzrzTYKCHQLwA1UfhLnJJVpPqLjGw1Kr6nWss7jEWgPwjrQ1uG2KdzSgwmcnxfsZcBq9",
  "key4": "Mb2Jh75F97mU4KPWNE9cRSTrEdArCnvRiXUzzFB6j4v7o13q14WrWvq5yNbuxC6ddrTQAczFgJoFLF9fDm8hwTF",
  "key5": "5BEhH4fF3e3tUq9ux84vWEZrxZrKvF5SxMD9AAYpkfeaFAma27cTcK3J4CxRnDzLdmFtmtBqw7AkF2Sv3oizqKVt",
  "key6": "3sjEQihYjBhkyhnRkt5aUqDyNSwCwxWh3xHBPRJDPyNXNqScFbDDW9gqVmTBgRUa3HWD7xLgfunRGY57oFoLjoHz",
  "key7": "oZs2tmADteMYj6WbRVdUGmufkRxFwcxy85fCLTAa6jbqPeX2z41ynsdxADVneqRkqB9m4VSgtbWFsY29Mbu7845",
  "key8": "27LKrzVA8VCsm4GumeyhtaLVVFwYhorY1kCLVC7SYe56CEDYFoRLjgYAJyXkcdRztBytJjuLQVkK2j2BW6xDJo3p",
  "key9": "4S2soFiYEBcsrFcfsG3XjSBVsnkkLpXHAgZL8DLgepNtBexkRsiPKyF5ksmzLXrPDVRSk4yjaNjS8YtrTQH3v9mj",
  "key10": "5cwwjDCQs9qeeoKKw4AaTTTRh3TwNd94sdFq11BVkPoMhVAQCemXP2PeG9nWxgD8HWtQ8GyfXbPrpCCpapVt2UV7",
  "key11": "3hPRJTWfzMb4dYp8osX68k4QPioXdxsw81kd6sxUKjzhmNkAR5X3XULcGw7zFyHKYh8FK2SZs24qWHrKWMUmPuR9",
  "key12": "3W2M2KoqHiAHDA1T3FeruTbJnmy2D43s4wXBJod3vQRSCLSb2R7xtrQufD9FsCKag92M59ZJUThmZc8AcTTCpiz",
  "key13": "2n9FP9QhYF8YdvkyuWigQpJUnzqVPD55TZatnfFLNr2BW9JCHYWUYay6wES5gdwtwrSnjxPuLMx6x13xketcFA3E",
  "key14": "4ehmkPTMZs9ZipUmZEW2bX6AkGZtQjJDP5RUg6S5sBRnrmMWaep2rd3xbNzV2GnVNSBEEienZfF23GmiGu9A1rhW",
  "key15": "3H88k8kx2YPNnp3VdDVaC9HB2riPCwHC8ypcL4oXntKahuYnuaopVXNkvdzeM47J93sEye1BVuzUaeqfn9EyfcgJ",
  "key16": "5TqVLGJQzwgsdNEVSjVqbi7JBPRCg3xx2kbBKzpuCuE38evF1id4WdsjBxp1drwxhY1pBM7TNDNsXvMqjgoGtNaf",
  "key17": "2AM5C9mZezUXedju8L2cjPzdcfVXjqhqN3hn2nD6PYA5n5D3j2X9aDSNHUFZx7HANSfZGYzqKeyoCyV4TScYqK6A",
  "key18": "2np2cvtK8rLnd9BcFJai4p9bMGSAv7CNCk37aj6DK6bWADqQcAmKGxLRnBcoX1782AXuCVYXhxrToYdVvGJPjgkw",
  "key19": "2TXXdvzHa4RZu4tVGngEEjhUxuA5bYEA8EWaVR4gb6wcDZHrVCfkh9YU533JwJfkKYWj9Dyh4MQEF91uFmwadF8T",
  "key20": "SYgnTm5kdnmveUBuupZZZMwNjhEpbnopTzT56Ri8rqWJ33jxBDtAXzAvdsfmoXD3HWF62BRWjqh2UBozG27MMuw",
  "key21": "3r5KAa1HojJt4LJ9kCDK8wyJfV2uH5xBcVNtzojhE4SSBdKobk28oL3iaFdezJfrEGocy31gJwyMDhg9C1xqp2dy",
  "key22": "3Es6c9ukWZNko37umCETCLpkaCJvKZCwpsvKgH8SRYkhQrgAsp6KmZRFHwquqFJUgBsAnCme5JpRqYJLDemQrp7f",
  "key23": "4CrTj1uhJJuaVkSSskeKeQxBeRwtp3ycvj3DSkMaMZrFHjLNDjwATXyR75XmWUWZWPLWsQNFzLne11PiptKjy9w3",
  "key24": "3ZhUn9CAXCfPKfAhnENFgHhj6JeeW5oo9ytoi4PtLrqqTvTaMdYTPLQ5QQmW7iCWQnUyAsWwrqQ2roTQLwry1WkG",
  "key25": "3FWYYYRsqhXPeBhPRfipdjWWEG7eYf1ifKpRQP6qv4ELuGzRFqUzjMUNPmpjx1bvsaWsKDmXyVoSrsMjGh6aRHQj"
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
