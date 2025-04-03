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
    "3mFp3t2xDZCCat9C1qYEvh8ootgdSRUxCc2dsdRspiP57qAZkN5U5XWmqKA2jHC6zLxvShubXi5cXK156Z9Lw9gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27wSVRue8XyjKU4B4D8Yg7fJucmo7c6aMqnZWoaSCsb3jTgmrg19Xohh7KrRCET4krnEaDA172r8C3DGu9GpL5gq",
  "key1": "2kwdsaua9FbT3AjQrRCJRyuRNoTGC1tqGB7AWRAqRj6f9iXhC5zXqXHUrFMQxpZUDkN7mDiPLsTWSCTVXuWwEV5z",
  "key2": "66kvfy9RAQAiJ8BtnKS1EAXEncjMujU5pKwQ8jhCCbHC7AiVF8LVcJ8cLJ3KDXcpUsT9rw1RT1uK3H3rig6KoucJ",
  "key3": "4czsCNaBvD8y2CcQVkGWugCik6pUZu1dyzEWBGFc3izQG6NUWYomdrp7opaGE1CcHtKCDrW3KcNUVjxMkFL6c6sW",
  "key4": "5TkMyokVEJJqjK8ky6t9UNJ4PbCqB52UU2phHirobHpDtbjpANx8wQt4PGwFiuS9KXai6eNaxQXpGeMTThcgM8fe",
  "key5": "5EErMRvuBVYY6Ydnj82MsziPaTigiRjsMGJCHH1AJX8FDDrpi3rCaekCmbCsE6dmnbQsAxnQb3xgH3JXM2t3s923",
  "key6": "473Pr2i5dacTCjeQdoRzrAN5AtQM1LWRPrCSjkVVHg48ykCLAaLB1qaU2wMoUxuQA1nKoMDqFsUD3YkAL1vrrYzW",
  "key7": "5uqJoMz2H8zEK8bmxWi1okWiHspyjnKWAnknqFEUEb6rNvjou9MHz9By9SAMSf5xNZiPcsgi5rafFzmTXDzHir6z",
  "key8": "5goKVu8eZkyjcg6tq1nZCv2Ukz8nFgnYPYXcVCphdt8EFqXVRtCmEQ6HkVH6UEwCBsx73V5cnvzTEi3oiMZuuMpo",
  "key9": "4BzZf42VRxxDNVoPH9aJaKFGckbsSwW1Ju4GLRGhTVxrieb5TTDR1H8FAd7yiDVQVukLy4v5oPA5pgPohqnH69Jr",
  "key10": "3S4XJMmDKtXp327Agc58ynps3hPck7SP4mfiY5e1ramG3tHimR6MzAoY3r8yfAQyio86cDfGq3uMzfciEJXW3iGF",
  "key11": "5GrhpMJCRZZpjg8DC6LsQFKpcnGxYXWZkLkKci4nnDc4fYos3gFWZh5kagwf6wFHEwwHdVu6CN6VjFvLnCPK5DXb",
  "key12": "RDCoZ7Rk3rgvJt9xv1KJuacTcfRNX9MTvcg175jN4BceDxwuWLKxiBP4CNX5LpTScsyTj1AKVDKbyMs9x2MfTHF",
  "key13": "5MdE9E8EwLUeLyJSp8cLWR7Uhz8bRDoDtzX9K6fttXXo2gcZxJ39g4tsEoTWBT6CdtEfQtVriyjcgHsir5y6YWen",
  "key14": "2arhm6PTyQYY1njQHqJDSM9gpkZFdRHJfXwmBoeomcHdYwDMcZApLCwD2cjDEf6YQnSmfxWCEBcvkiTQSG7w2CRm",
  "key15": "3o1SufvsvuokNoC4j333iKemqmYham3n3EYMWsm9ipZNFUtkpYxEHFU3h6QyoeccTW2MhuVZJqmckATvQDZfAo9d",
  "key16": "38CjhZB8jMwKu8wXaTfhMfpVBuYhYeU3BFPEPjJAzmtKqyjEMDyT7qH51NvioEjf2NDpYPMKfvYAQJAXsJykbhke",
  "key17": "3iob3YjPqeMzWyPA7mjx34x2t3UrvEafUP64RgsaJ2cQXEH57iuM6hJc8iSvEApnyp3rf7Uw6CP1ZjBCRu2QzoW7",
  "key18": "41Wgp63HiPGrVRpG4D3j5VuDn4zCXX5dZiyRPGzAQL6X6NHPMbhkc1avttnAT5mLv9RsBSw4UeS6X8AmZDMPvHDc",
  "key19": "4BSrrf8hLAdqqYZUUtGH9SZP2tuBrVyMSRk6VrZfvrJ3Lcz36vTB4BL47XMLckmV6T5mGF7BDMJb9CdiDD42YE2i",
  "key20": "5oGcgh98YbfXJZSqG8hcdQVZEcWvzfMDmKKt7buafyRhSmzcqrQqtamvD3GJ2TJfxe7CmZBJhz7P5r86q8hFiUJ",
  "key21": "4Y4boiq9FkGHTThYwee6VoGzhwiM7M49tMhB13eqQ6NioakZuv4dA2C8N4pkjq42pix7CuAyHZccCgvjEujCfa4G",
  "key22": "5wB64G4mXC3PA6h3jTGeDrdRUD9xRiydTuRMcKr9XqD4jHF8AAtiUJZSpvbWkNykctiWVPzw6CRr8uoiC5e4brui",
  "key23": "2LXMfhydFnVRyDaMGPCSeTMdEaWBT7ruSofyfwDkt2ug1LbbLwtjNvCzxB1adTV8YUU98zQQwK6cLSxFSMPgn3qw",
  "key24": "63CbdVJunK2iAeCxhbj6UJ3jzkojqSA72dEwZR7mE7TXJUcmE48kD67wUR7RsHDMjCmUsB778yquXbMxAN6L7LgT",
  "key25": "3e99pVBtCnPZNJSSXMYa1CZcn3xXe17xde15QjPU9UcSM6kMyP8QqnKaB1RTVGpEZQmq1a27frUazWoQtjAJSMED",
  "key26": "3Ew51C34Urc18uz7rhsqvJrrCVe4d5yikGPZQj73bcu5fCP9sUWSjAtSFyVXvB7P834yLvRDmX693aCsoXMLf2jP",
  "key27": "4od3MqwRmiULkFMeLwpFZ1zg2F7qRL4nbu7VKcGqfUPZjhWNd4qnH4qdC31EeNxvCYDv5Gqrz4FvNd1bTvoHbKMW",
  "key28": "2F9WcFsXjmE2qp1vrxxUqdDNfGBmu95mT7BQEv737Akbq7FY8myCJdRyE4HdJwaMcrb7Zhsvux8UM7tQhquNxsBE",
  "key29": "5Wt28RGqAqC9GUnE45S2wZm5McYorKHcLJ1YgvifJeiB1T6Q3ZGYLcaq8SqZfMfDdCgusG2Q3LKRbxpirkSiX2ER",
  "key30": "5Nen9g893RXyNommjRydNeFM915ZV7h157jvZtptq1TyTHDkpp4BM9cge6rDLb9A3Jnjhkc446XAkSNGnPPNwoNc",
  "key31": "3v6z7DyZsfsP5jb1GUbiTMJdFiGxv4Uc5cSmE3UK36YjzMM1sSfZR9F1R4WQXUka6hUs3WqtdFQBgsnfg2kVKzMY",
  "key32": "5qFHWa39Z2fTjW3ph2uKBrvLHtKqL4epH3AwQt2bffW9EVxe58okwP8rsYQ6vGkT2H7161pedHnQpxox5aLrM7NS",
  "key33": "64sC72ztm4uN31LJUnAQuK43T4sV35q2wq9d7N7Hd5RFtKEni1rHAuHwwKSVhKeQm9SGbRbztey7cqrc6Dp1xKJA",
  "key34": "2LjqPL2b6teaNkVkDL78UBKb7Xfswn13qhwQKiZS7skCRSq7hpPQ7PVqa8HcLkPzeSaD4BJZ9FHaBF35h6f5BZbh",
  "key35": "4CuhTA6s89b9ULcukCKA4mPxT721ZUGueDg9EuW8gKmEkMuy35BVy2ZwKgoz2vAZqZuKifR7DnAYNutXeHaRWcS6",
  "key36": "Vyhd8hhvcJ5QzQCVRLGQFNtroa3DnA1JjDgCSytpJQbMLk5DSmhcMANgJfYG5fXHmBVM8UEY9DKM9NkbR69iQDt"
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
