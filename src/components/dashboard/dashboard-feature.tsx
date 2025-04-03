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
    "9AZ2BWqsJKrVYDJUJnFGLGbgp5sPo5zgi6RMjwewSK2omB4zGwTHLM1NbNydT4ThTxR3i44GrqszEGNyV5mSzs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64r79WqHgDCqbwNWyqYZFZ9SuQWKGeDMW9yEgsvtSPR14u4E63qAEMNR3vGq19LSsqVgEYsAd24ALzw6Hw21FCSL",
  "key1": "mAGDm9RoUxCcyPm41qz7NdwPU7NUXHJwspJTBScjpxNyM8dgDjGnnvZszRz1XNM6Dpi9KgY3hH66kW6TZ9D9ZTC",
  "key2": "PPGT9rcxw4n5PUWUNSw8763neoFDrUKQ3ZZerVndZQRLCsgSYpTJaSTdjxrVvHuDjH5DGxGdKGo7fiiVsQ1rQ8y",
  "key3": "5D4XGR4TXMgDPtaxGtSo7CL25wqFPHTFSo81GUKtpqwXQvUpcFKBaGSZhLCGhdfxE2U6vJqHinEoG2VyaMFa4P9b",
  "key4": "5mUeXMStKi6eFSuxXwhZgJvZEqMuVMbiTxYA3t8AKbh6DPhyJEiGCYB82GLRAcZQGJJ6cHeHY2vq1Czq5sVG17yk",
  "key5": "4zU3hwwbaPVkuKZyqahd2B2PUakAoduaBL5w5qMVaYsbncHbYzscmQPE14WoMZnApjbLVF16TdjTeD14CipFh2qF",
  "key6": "4G8aEdLp3mAee33njcJKjj6UQxdRayRJYQDPXiyaBN7kbH63pUt3Dvs6ZxpWPnAC3TjMYxW1oDu6PnxGuZ5g7bTZ",
  "key7": "bXj55k7xLUjVvNLPFp4Qd6pSVE6nYbuPxZxibEXDKT5N24dFsn5VVp1Mq9yvKQsYb6g76qJRuyoWq6ageZByqJ7",
  "key8": "58V2VCgL7y42Zzny3Frc1MnsD99JWVvEsrxutgMauFddkS7LXX1aGSPnzSCTT7rkjpvjLogg7GrSDq3ywarZrDvj",
  "key9": "5y4VSRZzM2WWXvGxRQxXqyRVNwYyWrnNRMrJW51cgUr2d6FQL7eeV1ozJ8khNaaAe1UeBQUAaToJf4pZnNL5Ghx1",
  "key10": "2238VbQYNC2SytiuuPN9DLbrwMMXFbsSxwgeNJbw2QMsv6JyPTHBFij9u8fDyJsDrVjoPdRQiYiEPnxTUzbuad6w",
  "key11": "5HYjwvNTRzTowen6yPMkvqRUeUbTnuTUn74j11wkkdFYfZCESYLLY23nkiZ7QW8atmwjNuJzktZyqUK6bSyR2KBv",
  "key12": "5XaGMRNaUtwgFBKho7EVcA9KKUMugnntHiTThya6kRCicEJUTMyHe3WXqrzQbzbJaK97B89yhhBTUTGCHgta4Abv",
  "key13": "2Pm6dd3vgCki6BFdv153V5yzEw2wyL7GbSVZrVHzmuJxZbXSqA2oF4ke6anXszbFNcR2MNnZ1ZCSwNYgk7odRqwG",
  "key14": "2ZV6TJKBJd7531XVXNChwG8nuLKs5VuRTz3xnRpY15xEPqQzLqeaYV7wsUMqL5QaTMGkBeMkQVKL1TJe5Coes8QN",
  "key15": "8uLSRzZNzmvExWHFqc6Rh7q5MStW4zzVMCp6c2trEYZPqjHgKK77cndPtiHujDgbTTTzk5C1hR1d4M5UgcnhHPD",
  "key16": "2RcG7d4Uwvkwuv3Jo3UHp6MQJ22GLMqqfZb9u3p5AWDyAXW6U3yt4LNsziNQ2bAMeaWzcSQ3TnBi6Wef1LRDm6hX",
  "key17": "26X14tSWB81bnB2BL1ATfQHqVjXRek65xYaGzMC1cCFqnHfQ7gopVB7QMC22MCQJGFLKe8nayscaqEsAgCZ6FVZy",
  "key18": "DuSryZVV4qJQLLXYhQWvzpCtXPUZBiqqDpHsnFXz2wQc3vbv5cm2Qa6rGw4GqHXPnorM961MdYAewJjkqD3UtFm",
  "key19": "2xQekc5gb8AyHN1uPshXCCb1SkKYR3VRb7UqsBoY7dCwkDkL2VfFnRbX6z8yV2kMpCAUtevAmPiuvXcHfPNXYdR8",
  "key20": "46htXVjtwGrB3SfepnRiBwkoFGkFPXzAgJ2fNQE9jSDSWg5wi4y29MVcHoGE8qjAsepkDuTcG5Y2G5EkB13FsnNj",
  "key21": "4EwwJuzsUiw1kBZmjyhXmLViSUjRHZ4AjJBtzKQ26yvUNeFQH9eC7VKSndYDbray2ntmjt7ktT93qnN7UpfbsgJV",
  "key22": "zAMyVvf5i8ffngjbGcGbHBH9JWMyQop3muDXHNwwWNUsAxwdxNUr9kDQbkfgbEhiMc5LxZHmvK2n1FbLLCjhyhB",
  "key23": "4QkPkxfrgPgThjquNwF6FE7xXjA2xu53fh1jJJ9WebnXz9CgPLSe3iuMi52jhjQDTY9NKSZLxVryA6zTE7ptTynr",
  "key24": "uHDLmkfgiSvwV9aRDd3jPWCvLwZCUzWvTsc8kTHD9oazvchRDWNCgVgDo4VL7qbAhRByh4uCvRvZ6tQQt1WMUje",
  "key25": "5VoEVRqvTk6kb4kJhMWVhbFENMRusKMcBa7x7jguyzfxNzpriFzRdzdDnFYnCNtJdA9QdHSHUFGgwewYBSnecFEz",
  "key26": "xYwjmjLqvmypKdaTyt3eUNqHf4EJj5tP4mQArWpkyvy2qZbYxPoEWB6sMLVy4artnx1me8LUB3Zhs589NuccK3h",
  "key27": "5AsKEnfuoeuKRHB9YFe1nRJic52gqTsenQxxTEXPhnnrk6BeqF3HPfJ87mJ5DExK4r8DX1dEwUhPqb1RDr4MXMpB"
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
