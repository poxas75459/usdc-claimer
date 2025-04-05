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
    "3XDC78DxPyp6MNBU3ycZ2LQRZia9LAkBwtficfoY6uFATaQ73QzzijvgLxhFaGo431G2DXxA2pw8HDnD4crGDWax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nv2mo6nnADbn6rzC6GPvYYAmg2TnDw9goyT1LnitD8vhunRKA7sVWC3w9jbgs3kPnArRbn9JTbYRApuAA46s37q",
  "key1": "4vS1sJK2gHex3bbVd6SP9qTU8TsKvj2bXYh1LroSE9gMcypqoCUysFrMUUS9y4DnMKFjcywGvnN1HM4Y8yGLdVcc",
  "key2": "4RvDXy7Ka1KGAdMjb1NeRWjzbHtSZTpSv4J4gvYF2Vfdr1QXo5UQu78emZcF8JLojVWrXXcHA4N9zTaPyELSgknS",
  "key3": "31TchznaJc9Ebr1mowkF9os8kMDQZE2dcwbzmbUBdY5wYqdb19KPD28fschyzvFECCkaNWufzENXQQdrHXcbiQb6",
  "key4": "4QXn957rR4PF9s6TzaTk87g7tAmXj8AyeMnmkTi6tL9ewQMtxdEBoEZ5WArXmmHLDD76G5aLs1FCqrJuxP2noyai",
  "key5": "fXPnUYzC5wywKSBMWqYtttUKgirdPAL5R18uttnoTfmpnK3tGE2v1iodb3X3PQ17oYZ3dQC8tkQhxGbZQLp2nNR",
  "key6": "5QtQZWZju5hg8NvkD2u8qSZfnAeRhPh52tjnwsMwY2ckh3Wtgyk1TjA894NZ2VgbymCDtv3LzxtA6WNjePchTBiZ",
  "key7": "3jkLLmQBNn4N1NzupkazZ3Zu2JzRU2PpYXMN8D5pQ44fA17c61NraNh1Hev3RQkJ4CmXHsdPCWhNzocjjPxLVJxW",
  "key8": "NWqFGQcTebns42q4hZq6AbsVissuDZFHxZkhX6gNHeYK6W5KSe27a128RzfYBoZEAcPdUCGXeRZ4vfWPyrYQgbP",
  "key9": "2uy4aAhZfzyAZDMhWhCz7fw5fjnxMMwhLQp5kinQjSSCDi73A9bZJjn6a1KwCp2t821xvbqrAV4z3qSuz8JT8Rjt",
  "key10": "245AHXcr4VWdimY2FHS48heSg667LSET9N1dBVoASZWDxwXgQUFga3yPRVzCaxujJJtzQHXdW6kJLnHCes7kQkhf",
  "key11": "3nKJahbosw1RWnZpF93iwD57vL6r5zMy98kKmuLUQNydnTRcNiC4GJ8kZsK1AF5CKzrh7t1ct6AB49EppauojXdQ",
  "key12": "5zvGKygzX8bS3TnZxnQmRb1ooquy8qpRG4JXRrQSuV19JHxPoVTysUMdxzEkgEet3Ri4o1pACT4F1n7VxwvTsWpj",
  "key13": "2pJCt5YqDfLEAKATf4kGWuktHG3txwrngevmc1m9jfpvJqJaMkgF7D25fdw3pZ6ypAnmPTEC5LZQZtGKHRYq8HJL",
  "key14": "4tzbrTAwsKCEfQPLtnpXa6L1zcHgFUt26ZkAbGqS3U1D3DtwbQ4ozMKZdD74NBPpgbDHKZfDK1JDiKzw4vzxFSMN",
  "key15": "9Dpt3xwnQGZfpkhNNTbRCCG3VbiU9EL8fgQeDm2BsRgCqbbqsw2dkaCaRkGza3HtTZctfQiY5djce1WFgpJ6hwA",
  "key16": "2JEfEMSxKPwZnLxufoXRAfeMBLVnUsXTiqhQLWuhQyQoCtx8gwDt4TxRraCHm7YGnu4NrETqjuq1vrZZYcryfBhE",
  "key17": "5M4perLPpWmCn8zAehfe7f7Jp8puzMPWaezDjmc8pod56SFhEGMVcbxHhmRZnQGihiHkzEN8QPZCv3zkEnsM5o3P",
  "key18": "LHNBLH7Bd2Zo4JyijfHgicG55feJYG8wczvatHejzdCLKrDq4ygg2vqcQM9Q5n6eotvXmA1ShbUvdPprtV2YFw1",
  "key19": "4fano4YR1P6mys2CHvgd1WH3wpTRNfxpPa6FTuXSfVU9WPAHJNuybsW8TkjJtRA87qKC2Bvt5HRV3pWrcwhs5ZNe",
  "key20": "4nZzT1r7qGfGEf2tmY4yg5GhArT9HTy45zVGZCQ1JjFp9X2mHHDSAGUByxw4w6pGxYL6GYcFox2ECuo44wskCaom",
  "key21": "4QP1xCydbCQ8qdhDfQxTF6Qix9pv2pi7JF5pLUwEjWR1Q6Tj7ikjSEj3GvbevUTL21VAGC7mSy9rrnPftn9gTk3y",
  "key22": "2nCyqxx8PLRoc18roVEyEV4bdua5EQ4HVoQNEQaW5CRnkfrsuTyojDsV9Zfrn2JLpLj4pAAcz8pjwmXe7LMKPxKU",
  "key23": "417Vq1Qg7k4vMsTmZNMGL5x4fF8EfwSUFeTcE49qC4ADiSZixxTrc9fERxiMzLmrvSKkgxzZSEMZ4WqV5PrvsVyx",
  "key24": "3waxdhqJpKFUofHQFURxNrCH7tHBVvm2k9t3YsLNxXjMs1TppyfbNQt1y411TJG6cUtBfz3peZQoWmHATtnimUjq",
  "key25": "5NeySC7ArmCXETR3X5sTKobAp2uunywAugcDZ8CLUUgcvnY4jREW9z64S9kpiTeaMmvgtPU8vydZPH1Bd76qaGUj",
  "key26": "5uiqaQPeXBjF85UrHRrv3kX4bB6zHWWUyts6JPedvvWyY4pBCGcq9YfQPu141rpRbsCH5BEMA2rwxu9yJtGcYgtd",
  "key27": "3PhonF2zUNqVtu8vaJsEamkQd9a93UrfeMzqfijsP8reizTvZupU4XgLePwjw2UvSFJ9zfvmkhs4SvtKuSTTi67F"
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
