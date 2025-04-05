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
    "ApT4fhPn23oP15hZ9KRcHY9wLyK16ia97XuZCJLfmxydtg5W2kpmFfwULGbdLSqsGGgMZYMRQeXGNxfJJEb34xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48i393n5CqYGAFiKk29BRCASJLppMLgGXXFiHCUzwRfknGjmHTAdxdpJ6aAQ88ez6oFN8ZCNwYJJY52AoBnEViXw",
  "key1": "3fTWFYYrCEeJwcnQJn16ycG7orGED1eXv1BfUg2UtHHNNmX9Es4QZyEc4X68EwAwJi43JQessqbZje211HfDnU4h",
  "key2": "5Fw6mZCpPZUeHJHz5beF5ft3rHLKATQN5ZU4d9xbfK9nRh8xu9Cg8rE3ZHDSe7Ba5nMjBs7JzLUivBkKkJLqxyJu",
  "key3": "4rFEW9zRohibw9pJQBaJJHMs3zwrAAg2mq3t85T6v8vj1S3yF7DTNDPMSLsBoUb94FwANFVzX4Xv84xWR7c3bKv8",
  "key4": "xaXFoVWraVqs1Vh8WdupJKNc6j5yeWFqs4G5EWwKcaC4aNsuHLBrom9h4QkG59Szo6zfZ3xXxfs9mmJZftkvz7G",
  "key5": "4Df8KRnT3ddd13tTPZC1uKVR1bGYd74GU9sePGXt2MiB15ErMjQdD7KRZks7gtSAbxaMBrSU7yz84AVwN3TLnJcc",
  "key6": "3AVjgC6K5U1rsABd5vCyMes433FRjMMUatQKJgbcrtmFoneD5rPSBHSvPRqwXM3NZVGgszoW1sdQ2bUB8MdE7Nuw",
  "key7": "222qGU7gVeKPF26ZGBuDDEtCCCniMEAp9NhvyN6VCXVGz9B2xjB2A6tJkhgQB977Fq1nfQNce7Fj76NYJNCfffjK",
  "key8": "2gtaLQ7N4SUH4aWisndaShvayFdFy8VbV4FHP2Gb2RPFWgfxcR9DjFCzDpWDQKrKfk4dsZWdpQyShnRqJjyc27pu",
  "key9": "56oWBNKWH7qC8o2ifDjbT4eGeKDHMcS1ZGa2Shi7rBknwoyNVFhZTFRwcDasYkihrJCFmvhzPT2WMdMqnztGN8ug",
  "key10": "678ViPRpSNpiSzfu3urvRjTZG1AVWKgnKhhevxHDJWbzW9YnYKX5nSKqp2v7xV52XNPzuKZBHaR981VzNLQxybms",
  "key11": "R8WmoH6v68v9gGEhn3oV1BKvhJ71Dr4U4bRPmCFWiXjnF6ZrXR7UNv8s3kPMBT6jR88DBRQBkgBofCj8VQNS7ae",
  "key12": "4eRTXNYeYDjD4oPML3QzvFR8NkFMuWL5CsJAKK9N5Mes3o1m6hu7BuaGkc4k2FRNbkkDC18LLqbHSgLojM3qzXYi",
  "key13": "28bMGMAqNWhQrUN8mbrCD63Nz55RLeBNm4PMknM34mDsQzoFsFpHZ8HBugjEQts9bdQw3yV49tdQ9vtZ2rdhT5ir",
  "key14": "KRTTWu2KUTybpK2Bp1g3pqdbmoKZstemb3Ur41pPaJwVYmTRLpNMpLPeeiSxWNwGuECTpVHE7ZnWUZX9fsQuEP1",
  "key15": "3tJafhm3nrk34jiYAgnGWHdPM8qibqoP5t6xAUZWLj33krVoxRaqmomWdA9CXH54yEFYzSDnZzmpYLFzBAsnJxLj",
  "key16": "2HHoiL88QrZ5BrEm41fTKxfPuZohoNkqdD6nTozhKB8kBaRdWXCCceuYoywZcNagAxvXzNL4RudCFnGCjbznRt89",
  "key17": "4rDRuBSY2Uw75XgPXdnWHEBeQMKmd8WUkWan2NjFxkhv3PRSsFG9jN8E9ufX5mWoELp4aeyDrv2inEbayd9CuPhe",
  "key18": "2oknkstosnmDySYuKb3Uau7iqTYQS7n5HdXkmqNitCdM2HajfgeGRY9qcQJnsAhJ5bAM8TWnkXtWcfaouk2rSiNN",
  "key19": "5iGzg2MeppSzPbUNnuBcDYVe2YoLj44LGpAGqyZNBbenjfjZxCQMNGxPLyQVrEZpkzp79CykYdFZKxjfdt4TWdWq",
  "key20": "3YPyDtZ795GqK1g9imVyRFffVGUE6Rp1KkHUQjHKYRd7NFVn5YoBzq1AU8Q7M8HPA2Z9qt1AF2FPrTAAt8TKCVhR",
  "key21": "5whneu3Z8kzuBx1pLq3MN3oLU4p6hHvJLVyoGMZfczkKwKtn3KypjU8L36Xd2neZxS8ZRRRys2LhPR75PASZpwyF",
  "key22": "2Ra2axWBUxrzcZ8vtGhX1xKk2kL6Wzd4ZnGvxx2gAxXSQPEKbr9hyoQQQLxUTMzVHqy7MXhLRH4gLLmwfxg29DDE",
  "key23": "2oC8q9x2aLhx7kUkWHAwFqRkSJCTUX3EasPmbkCncR8zgfndcxEGba5j3ZNpeFekavBBb7EgA3oSs5aBZcSMYtrW",
  "key24": "2NoipnuSqYBL2mFWp5mb5kngDX9oBPCAvzTcN4nyUafh7tjqwRsCqPTQkMS8C4THSPShXyGcTwiDgEk8MHPRnGH4",
  "key25": "357VEtAB2TUsDkppqHQew9T9vthXuS9D6E15BpVdBy2UGGCqNHv25AmbCPoYFdYbkasZcmvmfTaFaJmPsPWSZ588",
  "key26": "4dfygeBLEEmS9ryPGKCeDMu8LcZEgAPuAM9K2YaAa9bSHjVVBSPUUm7GNJxFGsqD2zMZUM9bQtwe3uxoRrxXddzH",
  "key27": "35Y7gFitgA7nxNvcLyeFdcfy1D6faBv1qCpHJ9xATSoyNdyrQ3wVqTsmaz9G2JVNPpAdKyc2gW62mNLjvPRKwWrJ",
  "key28": "5FnBAEHS6DR4YFw89z3bUjnFftWS5Q2PQuvoPNTnVhLuWBzpwREmt8GADMveyVVcAoS2W4nNSmBj2eHiEaoE9aYm",
  "key29": "4c8zsyeGAB3tofbqreym3cNFDzv7WEJdkmaN7Qf7QJVhXZC4Uw87uE1ZXEvaGGzeMdzVXUpgziA258jmYwtUr9FT",
  "key30": "TCfbBTm67hAEEE9NUFzaUNVvbN9eaTvh3mWfd8Ff6DA1ghaSvdpRq4FSvKBqD5f9jUTAH4R2GfEaz76wuS6WZ2Y",
  "key31": "3dtmH7kgVi3ggtEgz5ASdfu2nj2eCdmBtTrKcA5anUC5MnN3wubHFXTqB69ntVb9Dex8N1gndJrRyDrmhPmHqY8j",
  "key32": "5LwPyv8CgtucqkuNvLy84z3ywiswAxzbHyj7NVh8Ws4peS3GXS7FhBNeyhKZrQdgqbpj6QXACNkNgt2ykHf3erGf",
  "key33": "7TDyA35R7HCMQH8abAESjY77hykLAtG4aNUrLXboyy3xUv5LmUnYXutYgppHFyyQTvJ7QNhugvibvLy8k59NUwi",
  "key34": "272WJVuuqvrqRVkB3kXaix5U2xMiwnLkgsZmsrtMxb5xHwj3V1A6CU6kdiz5FNCqdTRGM6TNLNQ4YiXEEeD4B73e",
  "key35": "57ZRKez6Eu1nhJ5pTMzZ2yfCJ9fpaXUbh7Mhnv3Zm11ZrTqKf7iKAz2GyKs4sxiUfFaSPJr9Epg3fJKroFPhbzAj",
  "key36": "2bQt3GkRb1HMi62P33tPoY79fQ1NsTVKXYfXFo4YbynLazb5qFcCpmNu6W8grKohAYipamKHPamxyZBd5qS8TFi",
  "key37": "5S3DSZkKPT8EKRAVHKk14uVs1Tf8keV5vVQgrAXTTRzFCvnwbYYJPxseKwkG6YQHfhYk7eVKYrBLz3y2Tmqfrisx",
  "key38": "23aW5TDqSerywCPeNY62jWzm7JNMgWrh1kRpEyE32DBWkQoYo9iL1PQM68NLR5XxLPC2poRqmoiDvRtebdXWpihf",
  "key39": "pDSubCMGzqWrzA86PkEKeqPphb5fnkDNQU2DPDycB1GwMDsTShWr9d3VrwFzHZNaikmN98oF9b8inFFWnDJRyVo",
  "key40": "vc6uCtvTNZdZ6UeVdYjCoSAB6ZWhfedk29A8eVTqW4yTbr2vp5UuJcCDZ7yEthEhs78uiJxkiADo8raygUasnhW",
  "key41": "39UYxapbgMkB6zvirEQJKaCnv5BTei1HDYkWyk2MVWx1T1Pe7GfvJuqio2GUdpxykC1BjmRJnVYVy3URupEiBy4C",
  "key42": "2AgXKMxRk868jcvoCF1pJGsjj2fKfViG6pgdYsfQaF9N1iNeKtLLYeSFPYh6NoGb2xu6QVAwFEPExXQiQbZCLFRg",
  "key43": "U6X2NpkHwvAXVmkMAjezTamPqGPznb6ytYhRRV77sLpXaFMWeANqcAm6yHAxk7rhjXAcdP9eSmtn79raBZ3Sz6p",
  "key44": "63u8dp2ttrNf6WWsGs2DL6kWNt6BupGFa5FjwagEgCEsTEEDHSxKSZVjR9c2e17toWn6tXGG4Z4aNrCpnDWvXEif",
  "key45": "5taq37N4wXvUwrmzncJqCQfGSxkeEVtzNd66pdVzspkk9hudi1kupACRRBcaAs59d8BwNj4x9r91veiAAgSk3M7W",
  "key46": "rD7NWgzWkhTQa1qxBJHe42oEs9CRXLekUZoy64n4FgjM2Bvt6QkT7eRojmYSx5hoTr5kSBgJK5GxjFdsTXrXwcR"
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
