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
    "oNbLLqmutz5jNBmvSBqXW2AAsZEhauRXuJwKqSCmDqenMEXK3f5EEx8AoGzNS1rtceEhJPCruKhgs66rVhHJbur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSKDybZabg4dBu3UrvLXaWAtDj6gc9reA6X2k4HjiDsUu45P3svu27ByDoL2w39CfiXzJEduCkz33sb2J9DLm7d",
  "key1": "483MeT5m4Jw4sFRYmtibnQWVguWr56fRaRu5Nzx2tNNmuqrNsJXr1ztuVQzhG1boVBHJ4r13gw4jaFPoutmuUTNt",
  "key2": "8ZAPEFyohL5xNGu3mY2YeaKQK6tkXCYANvwdjnWTMUGnviM7o5hPagX2oBQyV66X5amNfxnfLCbd2HGpxUGedk6",
  "key3": "5U743FWjjWH51CHYYPRY9UHyQQetFob8VmSMNFpsZqZzxjA1Hpc32BBpLkFUBGTt2VYN6xyiyFX2Mmngzg9QCw5p",
  "key4": "2Z1uEMAB1gJXmkVChner2Z6psMEPyCMzCMXq2c2ec26WpcqZt5RW3NS2JXBh1poLFH3AwSgfy8ZnJ29xmjJGMAGU",
  "key5": "4qJSuyWXUHmGA5YsvZgv1yu1E6a1rjMN3F3CqmncMw8GVu51qH2CMDeyrjNRPSrsvpE9DEJGXe99UW6GC9PaqwJP",
  "key6": "5vwC4C2rwNwSHpTLF8YxRNcBTXeLXUHXc6YdWN8sGfoHGkuPZWJGrnYqC7kULM9vdaB8AupDdY1htNE7wYriTTCT",
  "key7": "5bZfjnGWp5bqLssEo8ZugMKq2xCpAVK3QywsVqWK4YzdUbGTdTgLwVoUAM1yA3SKBcW1J3JQA5iXAxkawPeNjLWe",
  "key8": "53iyDTUWQVCp8koTzRgroxCoZDkjZHapyYfMFM8RMQMgchsTdS7XndvcTumaVMsQjk3P16pkYTB1WdTmKHnRY4G9",
  "key9": "pWMJHjJSZFXazoJW1G1X1YsjNXVfZ3VPy7xoKLGzfn14RAssFY8wzrkCnQVugJMRMhYGik9sqo3KSz86wj24nc9",
  "key10": "56BcBeNrj1xGQzMk2Nmkbk1cAh1hyGY7ed5vx1Jfe4UqJAJcEG8YZzdt37f33j54SAjPVu4sLRh17DdLhDvypfxT",
  "key11": "Bi27HZmVCz1HwtbRVdfu6WY953EkXd2U12RXnVZz92rZsATieQvnuBgjf7V6vgv8rs45P5H1MQuQnQnX2fFDd4Q",
  "key12": "3sxRfgMiC1tZBaBJpiw9KPg3UrLf1sxasaTVsFy6vLjaGVc7fpr92fGGhkaAcD2n1MLktfhKB5Q3KwhbRSGkrL5X",
  "key13": "3Ap6ztkqyKRGU1zbvwMJdH5ya7y4MCUbYDw9ga294uUth1koAgCwFY4TNFHbtBVkjdshrhJT21ccEvnmvsJq6KsF",
  "key14": "Q4AqurSLwXP2doSapjMUFZoz2jF4mUmMebRzgj8cTktPeNDxFCczG6akvxFiCs2DWrYm9J7ftKPnTpqvwuBNWVr",
  "key15": "4qjKaZEZyd18JMgd8bQswMLgzWQBb3t1p2xX6XVir92s8uW4jj1bhvzTgMvmFMW4gGBbAxs86N2HxaNEXiTTpj2h",
  "key16": "5j2yhoaQ5qqobJgTN35NZ7TNdaM47WbRTFwFgTJgGoMDFWWuJYFZgnV1wykhwKdSjaBS52ECoXGuPKHYeVc3ecjP",
  "key17": "4ZQzP11VpFuQuUwh3dzD3ZzFSVhmqHTvcEgCbBstvyr4T6eMj3LmyRTGEaG8wjytNhMKPsNtoykqCrQXatmP2h7f",
  "key18": "YCgkmz31u5nm3EdMvvfkbgKrvKsUgyEuGan1K5rsB4pF9UjYFEKWQ2AF2ZaUnGPu5CBKaeYsSbhbrKw6gosCfa4",
  "key19": "21Chxc1WVyc5zczt9oDf5hYf4FuxRuzAuHdAw48UymaxGYVz3w5nHQ2YCEchfWMbgGew6aVB1mMd2hVXP6FsQ98f",
  "key20": "5FzdTKNty1KjCf6J5WUQJSxPyzvdMVxwZyqeH4fVeXDQjFYutJAaz3kcnHHpHNKT8DPUvPAvAHGciYfQxpoehB5t",
  "key21": "2DzoSfbFKxJJQvuqci2Q3ubTfvKmc1orv5GHe1WckVzaitqgyqcYWnXGbzFTwmqVmqLAFQF3avBroHe6Vh6AbULq",
  "key22": "4wq6d5PhZfXZ7eKXuEzjYtJnsNxX8CyJzbmVuY2cnjqQMnA3Za5TTykSwEWXbkpZsiv5rZAMatK4Q9s2myfZ1K3Q",
  "key23": "Bm1Y4jyhYVs2UZNqJxfnnw31E9vWLPTeREqbK1DQvkkyHfuybktQrvVv2MTqvxyhLxcDGg3jWQS9k6zxYkr3s3f",
  "key24": "8C2QHoDBXzWvcp3WfQmVHWc2bzCKUYU2Y8ufsDou1U59atHHPr6ULjSxATRPx7KQjEHSvfPdNZpdnEiPjJy6376"
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
