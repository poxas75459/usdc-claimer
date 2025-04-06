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
    "47zin9tChnshFBdERxjDR8AMxx2DHH6CXf3Q6yjtB8xTyEqWdCkeeGjWZVRvwc61Km1CofJXcwtHxEuSv2Uyg9iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xU6qh8gtmjmSQ5UrSjfSteLaWVJbRdG4j4S2MsD9Czyjtjn7qgQox6fR7tG8DA2bX24wxJpsMANPu4CEmyw4zNE",
  "key1": "uAL3i34evmGwcQHVNkqEBjEYTbr3zekb42DshwSKMsTCNgyMxVyo4DAkGqexrVBsiDwTZsNCieZxCsFLTzadES8",
  "key2": "8Bbqg1PXEC2v7gSwHGuUkFYpsjWWG7dde325SaBatMivdYp5HFXDPD65KQAeFJrxb1JB4KEahLpPExu3pDdpwQm",
  "key3": "53NTDPUL6DkrMzDX1oYCbS6B9LCHDdHbKpXB8qbsedyFymtGTaBje1PJANF5mABTgNPc2Q3ZXXisnRuDVT64UpbQ",
  "key4": "4gagEMbTnGCHezAQaUKkmyD2eD6mcgaLNDdvqaTbJJj5pgpFKFawoi8uUUGugqEQhvZns23Qo9xVbaVMQLZ8E5hC",
  "key5": "o6LV7vnPi9Vr13qng6kvKoaDULsggibNjfKMWg2pZ5R6ux9FfPns1e4B67z4686CnFncvKw5SFGiWKskHmYkkac",
  "key6": "5DxsmRnzxRN9G4JaxaCp4Kyb1Vm1MyMwLRVW8shE3sVGH7bdFemWQGUCbKCZF6qUPzDRBVkAaFvaMrkx1BQ3PVz7",
  "key7": "2v7WtPVBsPyWeZQys3yQH5W18thNNwWKJ2vwsyL8ndKXrXL1yDA5EsBasHipcYb4EP6nsEhz45Xa9zedKj2233vg",
  "key8": "2Y74BTBKbbB4F12We9fcY1Mkcu5sQdHHFk5fxhYesQRkpG7ArGq3DGD6jA37WRvjuBYrV1QAa93oB2qcggCyRjqB",
  "key9": "3GT53bcvj5ptwGbd3KWb3YFEtjPyvfHfVipUb4GsHTADroTMmfE9RSxFz518GSWWpSodbLCLjLw7kbyX5CKm7HCK",
  "key10": "41sdLdY6BhBqq9jZbyuZSR8pdLNBTWKaaVTxPCHXzvjKHs532omL2bWXjpqYGJzwLUysWJ66u6EjctxgRTXGUFN7",
  "key11": "3DnqFysVD6e5CzSqL6vyoYAWS2uXPGRnzXi4KunTiM5YSBdaAL6Df6MchZQhmz77sWFPfyomespVwAkGXoCP8KXH",
  "key12": "59eBbQTjw6MUyXaTpM6DANuzHcXcZRCpPrsb2Wtsxp9MxXPsPmeBbK91wVdHLbFGXzV6Zi6qHEmGDaZDZyME3X9o",
  "key13": "3fGZjcZpVgxsmxnkrAdVnWxLFR2D95SxGN142yoXwLbsRHUebWvB3KCPwzcUbEXLZtBXR9dfVuHdzq8A87tD58zN",
  "key14": "5E9i5yTpGtqbAFNwpgQaUXG35JBdx2pMcawoTqcL9qRfdNyTtWunqXwh2wAE9pdDjh4yzhsHfhk2M5tExfyQ6fda",
  "key15": "2apJ3ML79E1ohfkk5Tnuh4fMHG62AtaN7vL3PYAfbBN2YRAZgQApqSNL4JV25QxjYeWGJjZC9C7PnPe7J9xccGTv",
  "key16": "4k3hmfbtf8hKWXV2gCApwZLdM8usADq1yA6yuf7PPSN7GaLsFnSTJMfL9xhKsR7K7HnmVAPL3DMqscnNVFyAqUjC",
  "key17": "2tFSDBKiiWpcA4q2P3XgdJawdzqiNUQxPEbB9xhUjBKjS7AeFXVPARrpwLMzHgfojFXpnh6M7rNo3Mwp5LxceVja",
  "key18": "3zaUEHFoL11LRzgzMQnNkKF54vGJm2TVeJVT97dw6x5qTp4qeGs4xuZ2Q7csgrdjXGa9NE9xNzpXQ5wDCbnqjgB1",
  "key19": "22aEnQpEwokgsMTtXBGDeeqHAiemR34qD9jSUWxmGnbCPfzkPevsBEsVYepCBKRpSMCxvAozhbYyEreMT8EzXo6P",
  "key20": "5xy1G7coNZaeoH82yJ5t7RjxWB1AhaSMApf86E3rvuoPFvMnCKR3zn5xJ7WPTrRdKDV8h78fnnewWgv4hN2czJ3v",
  "key21": "6gNwNewyrDRGY9VbqJt3DPqkG8ei1DUQCTUZ6h4BriVu1gj9DE6WWeSffEfE5nNJ1HMuvzCzFdxmDFM6wLm24JS",
  "key22": "iBCsDhWTUmAQvQ6vbqW1QDgRUoUGkGxqZqSLgwSXoC4y23HYu7kNLS3PQJ3eUeE8sFmyBko3ziHaVr7yxWgkTnm",
  "key23": "4CYVN9mhzB5i1HXA565SYBRKfp4U7Wddy13rGxnMk1AzC5Z4PqZq71tfTkvzdRjApz2y9LJpNCUAoSW52ZCkAJnh",
  "key24": "2CEkJewNfcW7jbS6R4ooFyPZgYukPSjs3tL3A2pnBTEtnE2cWZDNt9py1GBse2cC23AmPCYEXYZuTv26Qws3J8Dz",
  "key25": "35YntdDso5m9Dwn4uQob7FjeufMxq41xqoZRQhaZPqfRu1ThzDd5HfbtgX9893XE63CFYJH179ZneZv47wqieBU2",
  "key26": "4vG82tPpSH5qGWCSEBaKa7TPCwwcdxuXjbHUZ4myu2WwkgR9DjC6agKqySuhirmqzjc4KVkkCtgbPb1R5N8hJUs2",
  "key27": "54gqVDp4vAgqz3HksXnL1DXKF6a4DVauazc1A35DKbvkHqbHzB6yPWgiQQ9ZnPUafQv85YFi4RhioGRHvNEAvyLL"
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
