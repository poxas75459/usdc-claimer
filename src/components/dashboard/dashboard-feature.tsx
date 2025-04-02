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
    "3b5uWkzdDFbNEuF9WitRLwape5PZuMiFpSKPmXekKQxM7rewdYAw6WpjtKzh4gtp16n6oQkJSLDHKXZCKuU7tEXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXAp8JaW9M2GFZBGFHhGA3MEibqfu3k1gJVJh1DTegoYNerWZVBVMKNAbhWdnAKmb7U5c5Mnifr4yxs6WzkHmxi",
  "key1": "3sUbxbEXuMws6vKjwbPXgDvVbWMdqXKDknVF5YAZc7Dp9hqRUphxbUa6rW8GpjXC5jSD6E57quEUEqkVzEuWBDYk",
  "key2": "61dJPHmraH5j4jv2coW4iemHeEy2Brev725f3sEbUu61w6xJdq6uzdh9qkTqXeQa3x1n2xeBqy1GE25zc4DeqRGP",
  "key3": "5DfHPYadcQhAawx78hT8ifj2gdGVhNuhhmv6Hji6eJB2MFm33tw6XDyKUjHGgWZoqoXkYxZp36uWVoeKoVSFCF1j",
  "key4": "4CM3Mago65zQhGd4tmRuGsDx4yRaCLCirHz7BwKwT3g4pSAfkwWoTWs1YPnJVHusNHz8Uu2TGt47uMPBTztRynAE",
  "key5": "uR3Bm3zVzGM48e7qLCa5HE9kGBrEqmvEUeudsP383EMkmhSa3JBKSSt8EpbV4AR1YAu8CBYwCtn9STXhMZbNPEG",
  "key6": "3DXiqx7CFeDbxrsZRSx2fpJUwhhiYWYTaCh24hF2oEKz6cX8EvRXszCJdbJjsm7S7bz5Fs2XwzZNtq8i8pZZShbN",
  "key7": "5k8TEJ6dcqCnyACCWz3ZJN4eCHGYz9GU6d6jQxhNcK3FbBriB5YuhfvaXxAq7snWcMn6wkpaokRVhfciTSwnLuSm",
  "key8": "35NK4qYPfCN9QaKd8g3D1gUvegX6q2CAiJFJy4zXKu2hEoHfGquP3ZPwnoS1wYFqG9ZN4YsQWZN3VfEkv2j2cPRZ",
  "key9": "th13mKWymNSKjjt82eRBsoHqZAEi8gmgmzwE55mqLUwRFUi1dK8gchi5Dve86YtthQnHGpyqrNhN1o638hDY4qL",
  "key10": "4br9uVqS8qkS5bRiMAckeM7SSsD5kiRhJiUZTFpxya19sVJmKANRAJpKYawUNVbLQSEMKyErfrqkn3E9Cwpcbcwu",
  "key11": "2x4iSH3yAjk3ucxosbPbk1kLZWHGtTv47UP9Pm8YibG9WfTk29UZCEBumrDuvVXDDWVxRfSaXe4Vt4XLmyUVHL6C",
  "key12": "5WpKkWDeeAmkPRV5ApgqeLfqd8Xe6SkhjsG5mkAAqteKB5R5x4kwR2JytGkeSNMWGrYD3Trz1Lk3GHVFrxj8JweH",
  "key13": "5QqYs3rN2QQiGYZafPkVQdVoic2QZJ5YdGciWMSWRZTN2ozwM5vVLDPLyp52ZvvrEsx5hciej7vgLTfAJgeJQDu4",
  "key14": "CMzVpNwRB6UxxE1JGq78Vwjxm728FEDJHMq17nYkMypnW2m7vSuUFMH1uoyVG9q2k9rf2kFZVjukwKMgJC7mPYR",
  "key15": "5796wNGv9soc1BTpPw2cjkpchQM7NQACQ9oCmE4dKqTbebfNzfGi6S3bLQzgfpsiTomhVBqWNNn9KpaT8zxKyrej",
  "key16": "5aYTC76Ai2j5YKhn9fDfMxzKGrMFoy75ydVtpjewNaMbZ42Cse2H7QoFhMKUcQ6E32Cz8ZKFEJBiAr2zvQKERTXs",
  "key17": "3RL3D8uQ86xgSE8jVC5dN9sKuHrE4ovwsm7fgjWRhXdkBg2jPXJTjGX5e1HcA6BaJGTVvJNeKWoWxx5XicHuBRom",
  "key18": "2uyEM8XJcDAirDbMwyu6T7Y3gqVH4h6SAivtXzKgLMDHP14XfSiA79VMEpNtAVmQotQqejDxkvauVdtzWt7DvFU3",
  "key19": "3V9YsFBh3JksuPxS3iv1k7JYrXRn2gvaJ3y6tLUzZKJZ8HgGvqCeoZ8Bdhh2FmVKmvhyTAyqG6Mynx6sRcr1kN2p",
  "key20": "2aLHAeFwcHa4H5pNeQagkb3e6N4yqepDLtv87PZwh5YgfYcfyDSqHB24rLYsHKbc1Mj6cMrprUpXhPuqSpFAfvQr",
  "key21": "2zaNdZoLhCk4CEN8EZPck9nA5CzNTWrvHKnxC3bjMkHrensAkd6KaCpyEEDSqvkQVJsLVtY3LynP93L7kWGCouoG",
  "key22": "8b4BA13qzo5ojPKv299eVPiFA2gQ7Z3or1JJhU6CH7tmDhvGsjRhUthBXzbiTdFAbxkYTxzAzkSxtJK81UoAY67",
  "key23": "4Z4fqC5fNzWDMeuCQRhJW79MsiVGDaGaRMAQdKS4t7Mo8u4UbcGfxnYZKgRzFuTsJB7G75PhdQ5CjyeFDYqva1Pn",
  "key24": "2tDF8VND6cm5pwbYt1nvcjD9QcGKnLkF5eMY8DsaDoDiwXzzDBnsZr1rAfdvSujQxLU5PfxDHcxaKWauinQVziEz",
  "key25": "2RDHn55F9G5ay6aZTMgsTvi7TVSzLceeHPzdAUnmG7chWNGJdfn2LTTpTt6xXSk7hYTGTSJs1WxpH9p9egLLLis7",
  "key26": "4rfTSGJQrWE5tRPRcsMiPTETybEBP8TAGLQQTGVMyg4suEUVgzFNinPp5rQxb4YbVmFfiXKPwjrGupBVEPgw82nx",
  "key27": "5wRUhkg7hLXENR7Hv6EaE2yYxEgefkuVUpCSW4REB4Z9CZHDoEP1kqiAx25AmVSJp7QBvjaJm6rS9vzSBxyWNbLU",
  "key28": "5jt6aB4US4nSqSxZUF4NBxCm9bt7WjASi6fWhzC7eZtGNV8z9SYn7ZsSJvkCqvhndnaGHSSHqeQ9r15QcctgGzMG",
  "key29": "SAij4hi2U1pf1XSuBMzNwPu4feBtQoQiEyUaN62LxN3WY5uPf8wK9bTNidRES1CTrX8Hm85kLkvACfoYadq8pLK",
  "key30": "2xiPSiLCFbiipu9UwsmKfwfDCPhn5g6wmXL9oNazzoQxYtuFopnP1AGHb5vq87sp4XxKR7kiwX7r7nFj6cNpmnPZ",
  "key31": "tFV6sfP5mnKhgxDSiMBDh2gdQ4RcXY9bwZKRpxQDuACYR14MZVktAZ5jRmb9jq2oUFJgnxZd4s5KCs6poCdvP7b",
  "key32": "49iaU2Fn7J6ALdfAXtbXjgPzBzKQJ3xmgbgV4GxrMpQfetQ2A4N8zbExyiD87TTN4TsFRPAjkaU75fYBsAgNmyAY",
  "key33": "3G5nZJbbsZ8iSJXnvUFpyDcZbmBvpgGGvMSc4vhQNwi62iLevofuWTHhS3EMwAXUJnrjEyFspgzLB5NMnzQVdFQD",
  "key34": "5LZXwgXjEAoKEum9vkAj1YRJ7TJQbMN4s5pTy6LRz4n8bMckYKz92AMMrBH8zgfzTN2M6DEoC2awRLoPWb6Y8Vcd",
  "key35": "51VzN9nJadQAEWawiHzJZCdLr1qDJaZHJZcfXdeHM3hdQR8npmCdhUy24H2cTG6rTc8k8QEEXdeGhrQdei6wSDoT",
  "key36": "4BDeZFPtKxSiMvG3EwSpYyJZR61W1Mfqj8Bk91zpPCZKibBEavGhL6wq95YSpuuNVnp2jkHrjPpeimNVovqoGhf1",
  "key37": "3um1kpWaYKipPR771bQTxnz434up1vuSUr33pYj7ytKigUAHxLSbmvVvuGk9HQxzXUZfBh7pxSoMCcwTQozUJw1c",
  "key38": "5eAKCxvvmdLwaeimUDqQqFtqYH8BFPSLSMjqR69f1pwoFk3dJwGL1rTqdS5CDpJATgeF9ZoJvmjGCLwDRhfrzZjS",
  "key39": "3UsBTLZjdm3dX7tuPgQau5hjo7t1ZprfQByci4HahpdbgCHb1SJwHtmekbF4YPeVkgq4WRdTc7c9KkTa7Ek836JE"
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
