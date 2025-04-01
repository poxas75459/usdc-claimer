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
    "5tm5Tpy2p6dZDkv4bZkBfKU7ke43sCMyXXzpe4v8DwUY5i87ppsNsjQtWLP5sBQrSpwimeCBcJtyAbzBjybnkcpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkdHQuheN973Xoid2W3Q9QUbGGUdDzSiwRk2mMCFFBiZuNHG2X3Ut9sNGCRVr3fQLD6p6DsFaqKRvmPoQ29qizo",
  "key1": "34ybrzwfqrk9YU2WxhC3VSWEnQDhGJ1aLLwQb6HtN6qFKx1oWpYdEDhEizTBa6w7WRf9rQ2KZ8hMmzq8qrTXJGBn",
  "key2": "527Y3mXKgr6Fk8GBBS532AYrCsrCTrxSvEKmYrx6Hzk4AyV3crFikvqhtgadGerUcKzD3HumrHhd4xBMVhEUWMkA",
  "key3": "79FYfb8GLENrfUHGhVNHRqdgJESafK67hnZouvqdpJuAf8yDKDFCT5RBHXrbNUUh9Yso1hGb159kWnpGjvL8pHA",
  "key4": "2RSChwcssRJ7zvS4u111mMy4DdP63JNGBdVVgfUUDVG1fBA4xw8G8HGyagptzyXD5QdwHPhdB9sEKjhiS8eB8vo1",
  "key5": "3qfn8d9J6Q4ym184eQeiGRFxv9XdnhUanynAa1bxQ5f4YnBnhHtCUSBqVyXMyMnnxZK1vkqL1Tuvvdeicz3Un2ku",
  "key6": "T2ndNdEbzNeuhNnmFqx83qRP9t6Vkb7AeFw1Zi1wv5Jhxhx5VQFhPTAXEzU5iTbokWCvJT16UYW8aZURyhKJVHW",
  "key7": "2FiScR41HUkdUCkJCHzLfekxoxZhH47WTxt8LFc6SSPq1E1262Heta5cFDzeC8Wj5RCLr4Ph7c1Vop9wEitSq4sc",
  "key8": "2N6aumyA5ChW5TRQdnWtYrvqXb2T41ZMJeK2m6Wtk6f6PLzGupoEHyc18AbJwodcdFj7dFcJQvvWMNiMK416MGZw",
  "key9": "49yRShrRDG3MTscPTo2EBc7jEtAvr7SHSJQRzfgCbUV835QJhbSxtw8SEh5XwNG3UrTpkMfh3hfTzYif5w7dRtaZ",
  "key10": "2fghy2CiTKSLdGLoVhAsF54nwGbfLsvEZdDhecbjXBdwSywNz7xcNRpWCB5qGwXuZWNKjnRfR3x2q5Bv2H7Rfh4M",
  "key11": "vnHbvvz4hi2SVWfWMjE66fktkQRX8zVTAXWmBiib4DrVmgtfpbCU1gguzXndzaqTHStq7nRiqFyuTQZ5X5HU3ju",
  "key12": "7pYSgLMzjyEJg4d9j4G2WpHYzLBq4DqkrguDS55fowijSZcHQEKysC5q8CnwqzPCTQHpkCh5wyC75dhejsAyPNj",
  "key13": "5uAzyX8r25HY5xvNqKq8zVefbtk7EqkHhjaqk3HUYzvUZ55ByTaXZZirM6Z6Wk6zZ88LBNe2bvSgSTv2ykS6Dhv8",
  "key14": "4wGKjmKrCtwKM8SFLHFKkobd2b6QwcTf3uDnpGHQDA45YxyA4ZZ2hagzZcMZTBTbx4dmQD5qDFnMyqHbayfhba9c",
  "key15": "2xaGwSuaUVtMe35CwcgqioiXNBq8azsNywWiW2mP49iZ6sJUUFxHfEiwq8P8U83zusxN9TR54Rn2G64fKg4mFBhT",
  "key16": "YL32t7WnNKrVzrCAU54c7tViHra3zRjZPcHLKmFFfm7pRkqAntNqDKKz8HbCGj1Wng4ry3iVKJ9oXnDQHXF6Qix",
  "key17": "4A23AbsiYXxyKhJWJ1X9jvdoBbfVTmGKjbCif7g2dvcGqhKAXPyjJx8a6q5GNbKVtKQFCkkdPEjL5e66LHtKsmP5",
  "key18": "4AkEuPWWo1ReTL2BXKsWtxVZnSVRD6Hfy8gw8pFtUXRXcoUcwHp2UpYRS8cyK3Zdmm1ESpbSqvo2SmYhufURWH7S",
  "key19": "4Rx9Tmds8Vi6xE6kbVVKCBtuZ2vrLJoDeiFi7F3J93JKpEGEbBQL5TdGD2vmK21aAJG5M2nGH9dwRuSbCgGbi9MD",
  "key20": "596pmSa4GT1ytYohtFA6eT7Xg3FAYSdU6LeTPhTmsfVqCEkCZEVwuQ2bvskuvLXnQigL1EBEDm4EUKZtnR9oZjFj",
  "key21": "Q9v9CFZhcni6kdgVibRPn6HDzcrLpsk7WP29SGwDNGr8FfqLVk7YNSmoVUEih3FW4SNpLFhNUtNoED4rqzRCTFJ",
  "key22": "5sjVfjCc6UGC6NjmbhQZiRp7eVz8itzzh6mk62H5ZG2NvGN4ST8VtxmBXw1gkckdDDmZbCAYcv7aMy8M6goTatPu",
  "key23": "3vWFPW6WriBsPndmeVTX9NsHG7NE52wfUUskHcZZrRKYSaAJWKEsYQCW6gx5djjKFcKC7aZGPWJQSKVeTPgnnuTg",
  "key24": "2ZCi8LLnd8XCCuVThgEWMT5jy4Fp8knW439GvFqvJowWNkXqB4vY3faTcRPgXarz5nbu4u9zw4LXn7skwdhDu6ci",
  "key25": "38ADujCD5G4yRrfECQE2QXhnuWAw7YwHUbN28zre1rq2j3C6WmqWK7SQA8Jptfvc6d3RhzNAREVoQj4vLeBN6G9u",
  "key26": "5Bzw9NDxg8aArtQQyEBAJk3uwqzDUnxCF1JPAYBB7mPS1t6zWEgJCA73iRk1YTyNEgkdQQssbvuC9LA1fEWKYnoL",
  "key27": "3ppVZWdJn35UgM2Mec3c5qUch2gDtEG1rfDfF6ReLPsSz1esTwL9X73xp7uwxsaWBKzNmJwbuacB2RqR3fEw2V92",
  "key28": "24ryZXWTp7BsMtmf17AD2ft6urL5VcNbRJT3gL6pR1eUHUALUTQ6yocPQMTUevertXUzHwjpvhZS4ozoij88DBqp",
  "key29": "2AzAb7aTSbcFowQUaZjFDMSci9pLM1o4JEVaxRL6KW6P6DyhG774oQZk88jr8chkVEgxnfNKAG7kd2L3uREs2aE4",
  "key30": "2KjRwmYVPoqwsDfdauJhg6yxh8sBmfebQ3XV4s2n3aYjkTyYt4H4k3idX5jfuHwfYkrTEpqShC6XLYqjGuv6uauC",
  "key31": "337wQj4cADcCoCeFG9UK9QWoBcb5huvyVsEGvufY25HMz7AuNWk8u51ghUuenquuRiFf4kG5KrUpNJ8tuArwz94c",
  "key32": "2reoLZ5XnDQ1Pa9c7BN8Ny5PVPf7S81P5rWzW37sNPHoDErruiNiXNSjUzGAWoxKDPRkMS4dZroSmhD8NBQEAjFG",
  "key33": "3rva7cAH1wvcYvVKTyjwMTCvh7rqmT97FNWSxqut9u4ZyQ1iJ7Axy8BfWqVy4Dp7shvjU152dqfwboy5PSG9K639",
  "key34": "UZAALi9DNNYDg4xcxMqTpmmhS3XxMfd3Srw2wkmghnc5kRMVYkUtHTspn3ce89ZyLbknDrLTPsnkKzSSFPQcwJ8",
  "key35": "5GFpMhYosFfh1NAdeJxM3MV2AexfsLdMS4PTXMfcJPPAmRzRYcynbhshuL2J2UBAJysiBCciKEGMywyJJ5rvzVeS",
  "key36": "2hLL3EsFqqq4KCgLiUfoLyn8EAU9n2EJM4eAEVj5sbXZ58tZFrjbpEPpNmvKpjfRnQ1P19HqWcRS3J3TLGoLTPA",
  "key37": "4ANKpLwjcFNioQ5Vnh15v7UgNhU3R275PSLiDAijiiPaechb5FLig1iNBEuGLdi5Hq9iQGKXFCTLHuPDFNhcsBAB",
  "key38": "5JgJRZbzXiwa1QbdeCyKkyEC8sLVyQZrMUhDG1K8asf4WbmoeVNouDMX2eYW1mjwnAxAEoV4JeVJDSNh4dCHVj3T",
  "key39": "5MdjV1jzAxgj5Jjge98tEomonUop98Ux5d7nCSdEg47T6zgPfX9UuKa4dKgh94NKYBuibL6JxSRznRLiRqoFraP7"
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
