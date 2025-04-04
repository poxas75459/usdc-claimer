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
    "2boR5oNpuZKaj3gNRBpGiPiymQvLvz4Ti494iddkQhcgRZhANxi5nAnXXTqWW3XHtM5XhQHWmYK4VudRK3rBxroK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZqqVrKE6ryxa4JrJCAsxaVHVVswqHjF1MA1YnCm51dTGoFWAcVex8rXzvzL55sPBbkbND83yaLTZAWJjadb2gF",
  "key1": "BDuSs27gXDPvv3UCVLbGS4vtgGgxed3MKne3MJK5DjYRNE7Wn6wwcP6NzyU5FPtowwwQyQt2p9cSDagnxsma5qR",
  "key2": "3xxiPD2iQQNk2Yym5hBp3S5cMZGDNT1to3PC52c76JjaW2RzchC7mY3j7YWUCyWg13kd6CmYkVCrqTmdQw6jaRcd",
  "key3": "67ETiwsrsqRtdqgnBCs6g8usoGGodnPfmDYpUwmtzT9Qd6U6UNz5jqPoga7RcJQR3MDq3GTwhEki15ytQunR3bbn",
  "key4": "2yJEsGhuHKM4Wjz2nr5zWysLRAgS6UEdUJqPGKxE9jDVjBUVLEUQqFnUZJpukJeNNHgbNxodXp1qG26aRcn7DPek",
  "key5": "3m9WgCs7wvVN2GWBxVb9AN556458E2k9icBLrHpszfv2qFBXiUuWVtyBUGzazYnsEsQjRwZrf7rDEbdeoCjyn4GH",
  "key6": "4bRX2R1EdM42fVta8kAQXQKCxqAsqNwjm2GqtZ17DNL99SVjwUkkCVTYuLc5JowkBXrx9ZwXorifZfzdQSd3Dp9C",
  "key7": "38QhHchg1nKpJpoFRpEZdMkRkWz2kCBnRs8XAhLDQhbtxMW71SnT6D5xyG9tqyV8Nfr8hryrSCxxMmTYEZqfVySL",
  "key8": "3p3WedXx4MiEMoTpAAPSYypveHgT7aAJqaRF37F5GUtafX66VLMSMQkcD3GzsV9ajwRJy4oLAr7xcfSKbPmrYkjK",
  "key9": "2dr1hzYuDuQy7Gva1wZ4G3XYCMddbdyckvmJRiAc6j9qKPriK4e12vwaj8Kcp2gxLBcYCpnNwGf3msyHPc5eZPjK",
  "key10": "NLgx4of8j9CdaYvhWMFCdzQJNfSwoY8SmbYWM1thub7L3LA3zCa2akXQeR1xTWY1WtxrFHErRYab3KApSu116Hd",
  "key11": "221Q5eKCbU92SD4MrLSbVHb5GoqedUNHu1nuv4hyzByuRRBcKMr4qTk1jv8kpzjDzXzSBQw7Y2J3JZLzojJPUqbo",
  "key12": "63ZDxHbj1CCdjTRdbP3E8vkZbM2ci5qRvXjkXtY2E6echBrSGY6fWcwvHbeccCMvr5KSwc9DwYoXdkZ1kYG9XndD",
  "key13": "56qBvQjEMT6CBie5Ghc87yCG5QYkuXHDeXuJoQmocR5wvLcSkGaPriW7uucrmA52JxRx8ZKYuoohn7irZyhdr5PU",
  "key14": "2Rna1ywRwFi2C4ZQHPoz8khspvGEbMZmwaZimaNcCwrLfEfgKMz6Q3dXcViobMfUnHHZ4c7C9DxEdbR3yhbtRM2w",
  "key15": "2Sk2JwsoehJSZu7iBWW9HG5UaysFyVuGhdprnPFoittnweL653sXQ88P2oYTSvN8VUexNaes2Uh2nnvqEAEGvtBx",
  "key16": "2uaWeLyRT6vBneczC3BzWNfL62Mr4BBhAkp1LiHpucdnmus72VZQ4JMrMH6MVdijXDyMH8uMR82xsnnNFSd9DsvB",
  "key17": "51Dcrg5fhB5D3Zi8Wd4GG4ZzuotTV6GwpjuTSUroJajJscMv2sTZaxGaUwy64pWwnduuFCev2SDm9kaVWCc3aiPc",
  "key18": "5y8aMRtZCgXsWAqtZQPXCPWXktJaW9MNxYFxNhp6g66gGyTcNW8urWSYssqbLVtEYByHjZEeQbdkX58f5crHPQCG",
  "key19": "2LtC2SLGiNNkygS5Kdq69Pubt8g9vu7j5FyS1E1QJzpd8qhSvtsHuugdv3m98bV9pRbgVqJwtJY7G1tV6mwKSyBr",
  "key20": "jZZ9dyoDmZu8AxTLLQtg54o7qocQgQvTFudS4MwiYDq661Tqp99gQ7xGHWyPVpYsZjJJyepXezeKNZvNCSqQ9mQ",
  "key21": "mfk6uASWcucedfzpSPidmoJ1Q4yu8GGWgG5R7q1s3qZ6ZXK5UR9aPYeq4M3ja97jxtindztNhNXhXdjUMcHUURp",
  "key22": "2988dF19J2iNDus6Q47F8v1bzSUbWpPyQaRokkzYaUb5UUCUssY1T6XjDvzyc61tNtvQWgbDPKHH7URKUMd9PrHk",
  "key23": "21FL5jyBntHq71A1MrA9GCZSHyDKGZAdsRUTAo9YnzBEyUcNEXuhfGexv4YHas5HVrDUEeZhPTHRxPS2E6bXpr98",
  "key24": "4oPnHq4W9rnVMQcDT9zVVmB883ngBExUCTNksaJ4dco28yivsdekdrnonZyrfKmLiamjyq41BH5T6LseDeo1QDNh"
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
