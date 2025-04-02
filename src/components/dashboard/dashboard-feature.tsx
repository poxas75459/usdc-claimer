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
    "5MRXorFfriYzZESHPfN5y6xuvfbhLDEATf5ST6dKnufZ8um9VAQehkvLAS3Dk7CWALjXvNUxVEuei7csrfiYtcdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e92x6pMSW7E6P5MmhwM24NFrkCKbfRdXJ1FAM8gsE8XEWewjy7Eym8RvCjGqbrJqZoiyyPEh9VUbL1pa1Hd2h4M",
  "key1": "28a3MPfF8QDkobH2jxENxbyNQuFvMaj2urSGFHDyhW4dtPcj4LzZhmFHxZwGd3dWVZ5PNEMsZNnKg3ALDoBkJpCu",
  "key2": "333oy9yXSYoCS1qsgBrvriZKoGzJH1ExNc8MbPcRCteugxmecELS4ijpUnNJ3QQecgvSRWMTcFsm2Q58ZjgEhdyJ",
  "key3": "5asDyW8WodrsSs1QbgiHJ6v3xCgaDtwxrqmEWdqb6wuD7TfXanKmdycbzU6nTGGXABSJAyoeFSJofM4KQP8dRAx2",
  "key4": "CF6UHt2CF6Gv4QvDAeGiucumAxQechqrZTxpQvHJDj2xCxm9AYKPRZA7obFtgtJRvTpdpPwhsTr9oGgYWjbrGEk",
  "key5": "3vBGzEDBwQZr8iQQaf8KiB9g9aSZt9XCX8GCMoVEzJqaBtd5hYGEuLGrzH4pA6bcZTNHmSKTHUgRUj5UMXCv1Dzj",
  "key6": "25ZAoVep7SGHvu64ZWtjiCbrSm6uJ7sdYiz9xQvzjfcbH8sojVyNsFRGPg1cbWunAJWdBFXBXWNxE6RTxvwPFiYc",
  "key7": "UZvX6epaoHgSQfPaDo9WN3o9cg7BmPVyEzJ25JfdQ73nXYgtfATR3VS8A7AzWJokFkfPCR534fLRu3vhBFXKvv6",
  "key8": "4gFyRfx66LhXu8TG784Q2tKvPzusABCwSkFDVayDYcsNHRMe43h8RyDAJ67b7pthdfbGsqvkCpffkkEGs8tiyCTN",
  "key9": "4kLJ59DEPHs9PAcsrGoTZC6THJTz52sjoX1jfTQB6utSyvAy4AbbrodATpi1FJ8cQwrUJMckeRwraQqaPpWfaDWh",
  "key10": "45SvyRLKTJVoR7uoqqVQBa6n4hg5T9STQrAdjGPxsQFLNupLfiwaKuc2WjKWofSFhkzsxyLb9dxgymUTm6X3BS1E",
  "key11": "3hrFttc6zLQUq1w62wDAsVWMjqAdtXLDcNR3b5sP1ju3xUmnhhFFT7V23NvmkwqTEgAyFsi3sJzk14CMQBr1v1sa",
  "key12": "2T3Lh33CeG66pZX9k6szBAQvZSga2ngKiGBaAS7kBaCYJQcE7oVrF61Wt9DE52GLXJ9t7PNfGJogpX3MsvXsvFYs",
  "key13": "66cj9kTqFKrsNeu23haSYJ3REM3Akbz3RREyLcVTozicXa6pn9u8qtZLuut3mepefSooR1Y2iqNFJsfj6BkJie2Z",
  "key14": "SwDLjbUXkr9peQwkGPpLWKV9Jp7Mfy8xXCVhavkHZ6ckmxgeP34FbAzLQ9shebupro8pptBvZxtrmmyDbSNfQQ7",
  "key15": "5CUTwTcpJhxnbZSpehuS13WYf3Ppig3oMegAnozVqV8TqPwPjDRPUvRGv7MQCQCsMhEkSksxx3BCoAGXE5nyw3rS",
  "key16": "5d17u7vmxDd431tyjVZgGok5GdG26ogwJw6SxmyFM9bXrW3pQwDbgoB3FHJL4vgf2zEpFjGGGQa8zwodNhsUEDSf",
  "key17": "fV4vb6dYuyy1vXuAQ6mrfSF6gJhFDUw2sdtk49DvpAQpSVH7VurAGpqgyFijv3Eseaz5BnCzbnrfVajVby5gbgF",
  "key18": "TfXip4GYe3X4Ma6P3c9y7yuU7D9BaraqRf5tdoPLXBxMKUpgn6iCUm5qygPkLtZ2k2CY7t7fLmhLRrpcamM3cQN",
  "key19": "5rAjyCBEYAP3VazYbcUC6BxpDkaBrHrQ3V54Pn6PDjpRZqUXZJ2bKH2tvKq4tnAvaVotzbVyy51D87tb5xQp4C8R",
  "key20": "2YN4JYWzFwGabVwqZiCsX5AhK2NM2dEYWZQ8SPgUewjCa3o7MoznvwaxYA6eusLEr7RP2Mhx9KR7MDi2STxhVeD8",
  "key21": "2pyEdHDR6yxb8SrUTbPRzEiHyoppuS1kjBBG7NdcboHbzqfWDZ1dTogiGUyEfn9Mn4oBJ8gSXgyvFyQrjLjFPzHa",
  "key22": "4xQ8S81dcakAxcKS54wNGcNpvEtwsbrtgsxxBdkGZyESwyamXTCWUWGbhqSq9qbiojb5tTMHt1MDaMSs2VwGRoYH",
  "key23": "THNMZL35saVJwwjMkhFcLJrtv3apd1ytSc9y95vjwQqj8ZSoaZSJu2uhmReFeNL6ZitxLdXvtuYF9J5FFUC2rmV",
  "key24": "3vBaEQQH1EAVrNM4hTJeyWAgZdoTpqhuZoCk8fLC75haW8RWGVe75vdoptenoabEtiG7y8z6ybVCyeyE7ptA73n9",
  "key25": "2toXRQzR9HgrrytE3cMx8ZFJxWWsrP4h1828gnqhRwfo4GdcsSzBvk7SGcCp4yg2WwbTTJFaPtqLVCDhzMc21814"
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
