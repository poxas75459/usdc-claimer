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
    "3w1CdNVMJKpcd842GXfKHX4m9KrqDYGzn6hz46r5mvcBiE2LuuGKJFLXL6HTpxEZoNHtrbC65CgQw8z8HTRCsPhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zv5Uchk1ChGjvGQWDoaag16vxY1mmiJHjJ2pKjrfEExccyYMQcEy5yZGNghGG7R6Wi1SjGxAm9C7Tbmq4yEUXUr",
  "key1": "4cki1tRCYaFzttjnCQSinY2DosfxYbsmwTnZJuK1PMJQJFmE7gc6XFerGmmF9V6soL99rhStVcQuEFW2gLeknTjp",
  "key2": "4MBeKWZtz1ftHY13yvymJkvHsJ2D6KkSJCpqwnavACsG6xah5B2zV8rNLrJWf4ZHWzVFweAmEkYUdSyXxRrtbbB3",
  "key3": "48WPTitX7wpHWc2KWVcqoAphA8SUdzqkphuyKCqNcaesmZK4GrLjnV1emNTqbCUUVoCoVEnpuVUPWwxrJomT2aLf",
  "key4": "49FdPiJ1A728SFPLmih9Z2nvguGCeTyP3SemcqnkExDBQuYmrdjuLpELba2NufG9kAo6mS9opj5njA9PPFfyEWj6",
  "key5": "62U721LRh6AaQSygTkP5sNGYjkJbcsLTmxvKTWq9KomTpLqnHJNAZJ7uE7WjvPtS2XK7pwBi83k8S56JgwG2ceBH",
  "key6": "3QKiJk2M5EJA4DJtX3yS1ZGdyPfzqZ8KTKiow9K6cNeRcSFiatwD9yQnnxvv7YyrkLPytFz7ANP9QE6yZT8BDe6L",
  "key7": "5gHE2VkArzhj89cpHiVjYqDKoeJgY523PL58hS9AgTt5C1TUjmFNFYxsXSng3jh3bxQC7C68LuRt4fh7PJpJnu6C",
  "key8": "5yL8R7Zmwrpjf4ZGH6NKTnENpgss8QukDQJ8w1BmwFQCocWpsWrtAmQQpLzDPnokPLESDSm5uNvzQaRDCk9zHGJ9",
  "key9": "2dKSCCsKz9ZyvodW3jEpZ6UXukQVLQqyHyU9w2a4va6CEKdj2c8Df4qbd91eCf48wZDt5fKhfMaAZWUam4t8nhFs",
  "key10": "4PLhhnQMHSbaUK5mGsUGTXsVoWCbxcX4q9Dfm7nvAb39HP4r4WmSmc7EdJFgvvAFqxBLQvjk3a6nutyfBUqb4X2t",
  "key11": "3bNRToFcUCQAkiKxiask6oD7gH7K5PybYqcuebWYCF7KhmWb93MjdGbrDrKikTJkP55CdVqwRo5Y6LSM1KcnU5go",
  "key12": "41gYtj4DB1y9FursGziEZUeo6LMewrv6MyyVYbkzv4v5frxkdkgFQYDVB1uAM4BSWHzMdFxq8WVSRJxujuAka6Qe",
  "key13": "2hJbb1F8xkohqFznHjKo5r97SCARMrYpCRwRiSXZHDa57jnEncH1doAu4dBrLiYDm3254ECTNbB16Ugx8ECLjgPo",
  "key14": "57Z8aJ9ZEBM8JBPpNQjNqcdBcSmsKjefPSM24TEJtdETdqwtiACy1kNLFxAWAnGRoixgxLr7nyRGkSxnAFUUiofy",
  "key15": "4MKqer8ZFd46m6rpnqfr1Dvrh7ZjfxyJMXcMQcsC8jQus8iF4gUM3srKTWC1EMxy5yZBhK5iYzXedcDmFGAprv1F",
  "key16": "3RrVY2DPYq8uXhuv3TLYhXQLZmhhR77zvCpnmUKfyeDVtAgwUstdMgkWUeoVK8AKKkjr6yXcxUPhbzwLXBusNt7X",
  "key17": "2fswPkcdo5ZTS7fnZMhHcEhaF586bziNGUnvrmnPXjjaFkJ2aoEBeoezbZN96GHyTEY6Y9ujvvSrLVEgQuY6mxd2",
  "key18": "2XWpNbdtrSFHPv4HB2ew5LrbXR2pNf93jpzjKZkRFnZQbfCt8km3v19hLQftLJNdebhyQGPdnMP28qJCHyyU4ZnN",
  "key19": "2LGTM16FXiCiAmFXdnn7eiaksj33aRff1h51vbPqxgHmoZPFJf5pqjSicyEe1YM9swc2qqVg3CwvNnsgce3aBBxg",
  "key20": "26FDEesvo5neP9Fn7hHp3bcrDsnY5csdePUQsK7CjHtAxSJpoiLWoGG4SB6MAJD7Sqm6z4eAMKhq3VGZtDhH9pNx",
  "key21": "4ftjPk8WFqUobDybjMFbsxzNHdR8ZyTkbyxGsvi56a9k7J3QyHV1xUNF4JKUzDDj8i9iujQE5LCWXbXWceXQczzm",
  "key22": "5Rmfps4ZTfkVaAPss8yLV3zpWbwJdKgHnfnU2qsm65TtuEuQSEtGaETYqtxeUtCHZtWohDKZeREiD8sJPLSur9JQ",
  "key23": "56AAwohuAzUTFrTJQ7rvfHE1mAxxXAruCQ6UiPZfBursPQxAV84qrpxjyY9gcAythMP7PVts424X455d5xGajpww",
  "key24": "5Eu9R2U6NR6EnnscUSMWohYve9gSBjPxibbYDYsgfEVCmkb34QkgXhtR4cJReZzxWqQPs4pHWmeLFvVXFdqzZJhd",
  "key25": "29dvwLLXHWeE1v5vm7hk7Tk7197hKDzrr6J4LdVeD4v956aL79xKysthnLY9AG81ziEQ5iRjJdouXpe9v9oHrh7o",
  "key26": "pg7Afo2vPW78rJZiPBYwzrE3aavAWWDoy36qMxPyLzMQbvKH5JD4UHDTAsB72Mmc1AxWdAxFgzpaVwM7FDHwGua",
  "key27": "3GghpqYP5WcDDTfZJf5x2wgLPAQNzfSxPK8q8beLTpU79iSqTwvKuRDA3kbCR33YSc19WfgDxhksBNdLA2xB5YZ6",
  "key28": "2mfE9Atcr9grCYLuBBJuqykinfFV33aJiiRLNW6di26SR6y341AtfkNVHAx8Gz1RhtsrE6mwGAeaTyBCp83L3R4d",
  "key29": "4PCSuQRZhdbtg4TsqXsYxxK1Nw6uW72bSHmdvSqZ4GMKsyXsdkkMTjhFHjbHQJqDxP5rriaqjiz5Pr4fw3EHkDAB",
  "key30": "c8WRYGHff5pX2JHdhxBzhYNnNeMGUcAZZXJEHVfzxjdHBBRu6Dtb9KwZfp2ftMk6FUhaX7GDVKRQvSh2EYjZtrS"
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
