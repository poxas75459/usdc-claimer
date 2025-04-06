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
    "2wGnK3iAmy3aL9KnimWVbPQ2X25LZYHy1AfLW648Mr11pwuiobZKETcHo3FsvHga5TFZTSoEe2jY5SmUVPMeKrCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8EJvmVrEE35CNCx8s4Fe3tsKMg1VqtFnH4JiZLdZCXppvfG7cvKdpGvnjnNc8rbi71gGhXLJcFhUeqLn7YXSwf",
  "key1": "5PmgGmyQd94y7xTNEUjf9fVFdapExbkWmUckYqYFPpoqJGW6B4r5kcyGqQbnpfg83t8UvCgSx8FUx9mEBiWAMMpx",
  "key2": "5dtEMnow9Fh5UCJGHC5ZDWwAQ2hxVRFuLiukzcPidHNouvp5KFHZyWZyCucWbEuEftzte2YosH3M4YmagR3sor4X",
  "key3": "4bQJ2rgqRUB4yEDnB8AsZgui31CLrhHTfrCLiAAAkTGo2kiXFx1oMyYrmYHmmp3qWuEEMmhBwNht41Ra2bhvHzhi",
  "key4": "5ne3cZXHpAMtUjbrGSRT7MLtvwzn98BKQ1Yw91t5dR8hjewBPQuJc9EADEPiDsCS4upRja6dCxagvvsHPyjjYmDf",
  "key5": "21GVkRpuRysRfD1NgTQNZM1wegowmUKWJZT26hDkijnAowZ2fDkGRPTajx2Y57WGRWGnYZN2JEC7nERDXYtJkGqt",
  "key6": "2m82Tz62kyTmqFvXyQ1wgBUpLAZJntK4oNRLY4dqmMucSUxDSohSoaszYjRewdpV7vr8MS1dfKLv3pLSsakEUWbA",
  "key7": "6b36GpbgBg1jhAHs9Lqmf1pmNnRbnKPA6sSAGK6F5tmVBYwioNT53S5LujTc4xTVX1G1aM3S6dNb6g2qnCUmNVg",
  "key8": "4zrgb354Via9oxoavx1epJUwvi8GEKp6qPQoV5RrCfHC5zg6fGUAMwnMB2oL4izZJGFwSRkZN1WGxK46eUVy7VXd",
  "key9": "2Tk25iMn5EHbptKBCYg4X53dGcyZgteqn8UAiWLwqWYn5zmPq1BcN6vYqAaRhDpChDQzG55zBVBEjs6Q6kxtmMZf",
  "key10": "2Cnh5AdxPEkKh44AfY68yiq45CGNvThEfPZVc9xRm39bHETTPiNNnZRA8MeRVu9PKEk59HVRo3REVacHgaAEqitJ",
  "key11": "3p44dsxP3YCuQuZ6e59jVi9zhCj8f67repZ9m2jfG7ByeVn6Q6EFWr9xrZ3RtEqYHGET3KwU5KgGAUHF97SWpxyH",
  "key12": "5Vg2LpWWhQtynbVpudBFNk2pMdLgtMhYhrQknqtzkH9KwcqxF43FbrF3T2FBUFgmg6gXTDxTB9QmGQ58E8EbvTn2",
  "key13": "3v5rbEWbJHh1EaVMPn2CdWbrrFYfknbMwL7VXwbB4o8ABLSvUT12MoHb8pw2Y7WiiwhLiERqzy1r3FSq5M5AACsc",
  "key14": "3JMEikDKWUHWX4prDjuCN1TM4rJu6Wc6Sie56pWjmFWi3LFJN1Ap6oX9ZnRrB98ZBP28NCaSf7ioYTm2BMTjLgJu",
  "key15": "3F6koj5rNARmBR9M3XdJzAToLZmcvFnpR17PSSVvBC2DrWy8hZUm6tsiUSMbiND8Lv9ZNeUEBoAEvjgSm1MshYXj",
  "key16": "2nTkoYCcatU8hwJRQKBLCjdJJJmarz1LmE6jihk4YepE9bLRbv6fC1RjghAC9RvNtxAH5R5QBb5CakK3c92PknMd",
  "key17": "63hkyUHdMyKBNdvGoKpCkvZjy4nJ3fhE9fohZ7V5X64swSHYwXpndAN5DpkQUWDR2TyktQ41UTYEhPkCtYJmFHx3",
  "key18": "2j9PdwMwBs3EyF9b2gNEXj1gLwQ535GtG4kXYTaKwytzGmrduaucxjSXfvedd2HxeHsNoYQezJiay2CG4Jm1FqTq",
  "key19": "2mLkdbW7D6NvVkKnMFHF8CzEbQLiHbjK8qEw16sbsNk68dhRfwUS9CuBuxRZnkKMXfzVpQcNHeYMiUsV1zq5Q1eF",
  "key20": "5RrSNqKUS3985SPBtMVDkKHaVHP6e4WbiaDZ37XvTHgHZS6m2g6RRWYx9Xp2mRSp7ZJXqUPfkJ6uSVzz9nsV31fV",
  "key21": "5fFZuXaxZNWLXymuT5khJFwTopU3e6CrSYBYbLKmTvARMcJxH3qwZL3ibnRvcXceVkDv5csg2Lh85P6ZgxbAVgj",
  "key22": "39B8bQTkyaAsEgMAr8Cccgwm26EF6c32c1VV7wRqkvyHAeGiBE4qMnVfXpS9CP21Fem3uu15b8ruhbyhQFQZXbrc",
  "key23": "27w4eBku5qH9ndHF6hRB5JUVzQmwP89wuhmbTsxJoqVr81GFM6ZfzuXnLUqZU3UM6ZD9iujsWrXi78kBYF17Wrbi",
  "key24": "rS3MYn4j1gTmFnQDsUx7F6ZSeWSNbiYyisiLjhoPTwX1Mk7FNBwReuu87o1UEJHEDVGFZ1UqMiGnFuYEfzGHfyW",
  "key25": "4msaDUBZwZx2fDkoYTactNnMSDn3VLBfN3qCJwymADCoJY4VdNdSmYMiTsyHoMAsHmve2UrvL1bwVhN8RT4i17qQ",
  "key26": "4ZCAvHsWvmXSUvwsmNGui65B9hpV2XHDvWzncAvJgr68E2kFc6q2knaBqHtzYF6gDtekRSMrbioEtn8XyKr9XNyh",
  "key27": "5SMFAhwXFZhr7W6XuFn2fcunL7XADojJWFSrBqNFkL3JjawdfKVh1k4YqmhXgMG78aAKx42SrXrrboEDjXwzBXRi",
  "key28": "2d5KHJXdw24Sf7aAnqFavVbzByhvZcNREG9hAoVmEeugoY3h7m3kMux9dhFpY4HEFrPYWJPNni2KPKkxsG4PT1DM",
  "key29": "3H6F5RSQBHNcmXKmfvqmSEGyJimktKMBBLTQveGq1CEsrzb9q7CZ2bspB86agEeGj8C784APWytbBkxmn5uuoEnb",
  "key30": "4DFVZmX6z5pD7EyBBsH4YKuKJykJPP2YyvGZrXFTvtA91KyBZJPL2c4vNCPPdAa5gqgh1ggMnjBdYo2FhfQ25WXm",
  "key31": "2cwnpeT9UknGUVP3nnG5u828t7sq8XdGnLpQFRwCZihSrNKedvtCiFSv5Q94PnxgYCQtka4NKeRmGw3FYW6qZeHT",
  "key32": "66shhGR3Jd7PH21hN8x152viCqNAf4Ec9CH2fp4NBcMaMWnwUi58AFx2nmPj6kawGUvZjRQbkkSyVe6SKhZ7GLZV",
  "key33": "4AUZbN9dfeyibTRUBA4nn3PUahg4dLsztNP6WYkFQFfwxrfV2aUeZmAZwSRh5yKnaGco76oaCVKNrqtYuoYQAQJ7",
  "key34": "5VoM5n9oY6Y9Jx4qfoZVCacBYS998DkQQhqMAAUsdH6FL7FGSvC1j5Qc4GqnoYZbNAQ1WwErQEHbZ6BwgZ87fKjQ",
  "key35": "59DtWKcweBBECR39tdzTwNe7RnJpVWuBbegZNzvXeDWkzkzyyFZkkb5Sq251cSKKzW9EDJJRJsFUtZ7xZhEULjbW",
  "key36": "2GDgHzJujZdkw9Ec2mz3G3ZuQiont7PMTTPnpaBcy9nyhziF7fQjhx3HKvzrXuTfcWBSyCHs3YDLrXwCyC8n5Fcm",
  "key37": "289vvvpSdEX84wkmEuBUi9ByhhkgZarBMzj1N9SgoVmsUKGPRa7643nNRh4CQuzUHS6oKxw7k4djk56HNygnVweB",
  "key38": "5ceJhqnwW1vY6QHZoHbz3ERKAZTnrA1yLE7qKBMomSqiUFY49xcPN6471k5WrXoTHb2yveH7uJKYE3Gjh8MDNLu5",
  "key39": "63SZDqWPRveKSTMx7cpwBU3Vq9bBMFot4LBSaezUQQmcGgjDte5s9w7aEBoay4VDTuAPAWGQArw99M2NaZZMUABV",
  "key40": "2dMwwjH3nnMXLAe11VjsVHSgENTpPiEahCHy5a3XNXoqrD51KVDsZpzni5taA4WH5p3pM7A2WS5483gLpiwESKq5",
  "key41": "4VVjGCGAFXj7xPL1pGgLT1E3rKByhfLq9BmGSq5fSQjEddzCKvFEHWv3z2KaoFS4jdnLhtMqj3yXHvx6aN7cyuN5",
  "key42": "33FVRnsJCQpeNSbSfMYSqRXTfsw6r6tCp2t77iT8eUJbZGJKWGCo2xhtbYUXjiFdsi4qnYzrDA4JH7MAQhzxBho9",
  "key43": "3GXPfHYPcuKXPqi3dCiS8BKE5eb3ZXbLmsxdDYKufE8QyjpSpfggGoFb2CTam25gkE86mQLWdHTCkivbgCzcTE6K",
  "key44": "2mivoEobMHB4UYBU7busVeGY96wdXt8CtqrqAJ3Ten75Wzi7oScR7akHD4p4Vze1RJPgz2R8Jme3WwG9DpkzveUr",
  "key45": "2Cus8vB1ZtCTQ1s8joqtLCG52zgaMEtWu3Q6hSSCLQWECVKnBzcdkRxhM7b5HZfzxeRZGWfcPdiNwdQVLGiP4Yjq"
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
