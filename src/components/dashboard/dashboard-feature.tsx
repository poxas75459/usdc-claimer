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
    "4LAoheumNK3t4BKF34T7ifguymHNin6f7mGVXiLoHpV13Dw9xd5UeJSCTrk3jCaDyFptRAtYnCWeENJzmpUMAoxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3Ka8WUfbAZCtCVEi7MYpatKz1BGoQCLjxLnCcgCNgmqCGRRMW3ovtGt9AibH2sGijCvnyFXPT4Nrwvs4DqiBBc",
  "key1": "9VGfVnaNRmsMn9QfZ3EMsjGXqku6MQreq6UQWo3Q16HsL651d98u8RHxWDGzqwG9JNa2WhNbLaFqQZxm82YMoJP",
  "key2": "GkyrX2QgWTN9n5t3WJDGUUeYKyGuJeuZRyjNSoB5dCAsG99SmwoRtLVrzNoCRkJDwERRp7iGRhwdzPVbdGjUttn",
  "key3": "4jZGSrSWu2xxMTkcDSRwCJfhsgyXcfGAVB4rCDU2dUuYtH84A3NqrZ7YrYgcnYoDqVwm5azyJyyEbC3dt8oY4Uzm",
  "key4": "65PrdjSJ5kyLpP27jLDMZHPH3KSNWHhtkswEWrzjJw8GZiYSqMQpUvXpH8UZfyD4mP1CaaX72LpMQSvD3iPuZDyD",
  "key5": "556iKnv8hsaegJ4B1JCqPv1FskcGWC9jK7rcu8qq8wSjv5ctHQbKf57UfMy5JNb1GWmKMZWNz7HaxP3kWPMqKvmG",
  "key6": "QTWJaVHbGgdyCvGfimt2HG8w3zE6pSEmoamKgVv3SzKquPZTAAWwmnREz6JG5t4edP1JoAS5kJ5jusbnzQTH1Vm",
  "key7": "XJEWSVqB3AriCDJoKHgavbr9CWcwizvq4JLVMBUdLnQEovL6GqQQvDXQ9x4bHPHpB4MWSLxYaywPBojtFthiWUA",
  "key8": "3FpJxDq3eW2VEhCqhTHL1WTaAEyFAurNkwuPbLJAYMFQRhtbQVgzXKzAh4M76N4p2mWqWZmoNfKb9FhMFkttzwxs",
  "key9": "5rNcasGpUpAAB28wr1zg3jdvX9NhWKetDvhSNrskCqSPKPVW9aB56mMN2hLi8a3RsWn1bDgNpGFusNiyNED8RtAd",
  "key10": "pHrFrHDBv1cutWvHC46CsXf6ZGaQ3cN3sXR9meaDobinE7XnM4RcwewszLHXrA9EqfFAhM2euzUYv1dUaHYthi1",
  "key11": "587bGcib94xuNxHk7fq6TiMYFtBiKW1sfdU6sArE5hRqxfFg3ZAMVqWca6qFRK8ta6ddZ6WhpXjYAM9dBrhyjWQn",
  "key12": "4r4iipofRREeuUJupMaKYrdRSzJpMAw1eDsNnHNt9rYF38aj7tkx6FMepeB3MmMArJP1P2iTWdxRwz2NrLMeyQWL",
  "key13": "3g2nduJyTE17Nc4w7Ny6E9ehCAHk5b5V5vhXvswL8bnJ9FL12WY5aUMQT2VHpLpEBsDC9A18abA4qec2PMojZQ5Y",
  "key14": "5qYFYUWZY69KYXcNEpPybUvpBToYgS2qPr6NrH9LmTh3kUoXzCKmjh2BvbgGKqNSUHEaoH8JtdtAydzRWmXhfMwh",
  "key15": "2evcrq1vJbEFTDQPwM8jTQe3oQYYjZVVpb4UrYx4FbYhTTiRkfvM4y6eW1Ha89zWuLvYJicrZqnpdibXprLbfShE",
  "key16": "2C3kmu9j9CLHiezbQsuU89yiBtdF97iyYymdp2shte17eAU84T1kepEyrnSB5B7qBDGwjm137nvCk7ARuS4uhCko",
  "key17": "661Eq2vNHvzWKRj5XRdJP7oBvppPNBc9jtw9c8NtWtnmhuJ8EsscJWM2FCnHxvxTB8mixuYnXABkzwKTjiknbRJH",
  "key18": "5FfHo3VNBEzqUUnZNjJ8MhvweZGw6jFB9X8KAHzuH2eymiq5GYSY2SiRd6yAxMqduCKaWxVuA2rwzdC62kj7qP26",
  "key19": "prQf98THNHw84wCiPPQczDsFPHcFJLpwJNPNHqzyx1TAkKnDA4idSMvKa48Gq9Sn15jSox8C4JT2gyoWpz5DAbG",
  "key20": "5QVnPP2i3UXU6YYd8qNTvDBEn5yu4of68mwdsxnZhjL8VChX9vGAyVBKmrx7LGsdmqWgssyevPgs4vYdndUgbvTe",
  "key21": "NPwnm4J3ajPkaALqcXmmbSizRxZPpXYgxkemM2BEydkJ9xm5BRU83coeiNnWLbMww81XqDoDvpjiihiik7goxKG",
  "key22": "5ANBZo7nNSJeSki2TAtCb5WySRe4o4KwaAmwsRQRz11thiYSDZ39nmeFiZJvwoXWqRtb1s1E6Rim2KykhLkzbJV7",
  "key23": "21MC3JWU4K3fKJYKrAmqmHS53ujPR9U8iqdDrJPHo9k3DVC31Rg1pHeywh1626XNYx6W1FAJbuS1aZ4NWewtDfDo",
  "key24": "6jKCSoHxSkQ1Joyq7bAE2bkQtwwPBVuq4NtQbNYakH1j83SuV8YsSusF7nwqz9QGkGCPiqDSWRa1xeCJXAyJGuH",
  "key25": "38gWoah2cSmR9cxqCNgn65GmBdxAMzZiQ7G1JSj6wpc8vEKf6KFVbj5fcU3azZDXEJJB2nHaRWcTuE84BLZbTrzS"
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
