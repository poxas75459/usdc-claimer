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
    "5959XzR8zXn9pkWoKUgvbvQR9WnJ4Uqcphbevk9xuW6Kp7kqufBC3TmCQ7iPi56hTq8a7htskpg59G2YjSUEvEPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeZE13cnCJbYNzby2HUpBGbcUm7DU4pGKpxFVY2R3BSFj6PuSaYeyaME3zAVBgNwRLkndusWZe89VZaF1PP3fo4",
  "key1": "5Mexgb2kXpPfMUfHTdqB7vvUSa6DnvHuGiQqpXgRxEs5gybGgKcoKMboqep8jEMexSAQqzxPTcnzZADR4ssz8ApV",
  "key2": "24XL1cUajiDhoz96oUfSq8dfcwd81Jos7c5goubuhEhRAjTgHJJV1gqUshpyANtsYebASNtY3do7ks2wn3TwM36q",
  "key3": "y35b5pTxrYWt7CJwiePYGgemb5Lq2DRC1KmHLxFKpzJhXqTc9sz4u3oXFEui3fJrDq8BssGUHXbrnpUBaVc2V7f",
  "key4": "EDxhJEmjttGLSePC9Py13Hd9jehS21gbaGHTbBbZoaXjtAj2ooxKoZvTURkwEcXMk6ENtY6JEtDJ1iPzVHKQcJr",
  "key5": "4pYDkWHzWedHnMegjPWvrTjXEQwTiSMDgpRv9dAHymPoboPa7CaCUxDFs1jbjiYANcFAz29yYLYg2Gw5sV5tfzQn",
  "key6": "5cbmo5FKRD2jTEmnz7Q9gA2tpV1PR2wZKrNm8qAiDsvUemTQHcz6YFKPpLTKDo92WPSQY3pboHjXRzXDvXNCi37E",
  "key7": "4LuiFx7bHaPMabd6zgwuM6h53FSekFrnRW25S6t2kb1YsMm5RDu4XDz7zmadKEgmjPDYqzMaLCHbbs3wJiPf67Ee",
  "key8": "55V41SzcicWCTs2k8CUL6syR1LvYugAaD9SM9XHaJa8v9EvnhoYEhQDaVGtvDKKAqxKYCVKQejDdR6TEshRpFR4G",
  "key9": "3JaPFUAzreFr4fEnd6isZ6UrGwFkmfToqWtcpS7PZpFDeqhNZgw5uurEVNZkG48XXCzmK19L6tUE5pFY8tHdjTV1",
  "key10": "D9pPmHP4njwx4VmMsupN4d2FaU6yZfda4J83g7TMC7iWXbkTNfM6PhCu4jCa4au9oueToDEQN773pohdc98jv5F",
  "key11": "41Hr5UC8i1J7guAsUQm6etyqYF9KPCM8eTQRsmd2HDdxVmtSM5BMAmHxcU6KLzrwdrdVi9QMyU9zdMQwMCFWBB3o",
  "key12": "28d74GVGZfLiWqKzK6ZYE19d3M8qMLvhPc9bocDew3BLEaMKfFYtacBYAVJgXCfb2Y3uBajtfoKAnWFcMrqL9req",
  "key13": "4kcMoKa4DXx1GYDuWqns2ZUMNugnqo1oCyuMT32gEMNyz3jum9mDoWMHR31PdEDVZ3TdqdBVEz6ZvDWKYxwYmpMx",
  "key14": "5Y6PG88udjD9mXXCjv4ermwzPupSvUkZbLUb7JeRFW5dMEvx1eueC4zGqqnA6aqoVKckJQ7D8m5AdJ6BDZNFFDkQ",
  "key15": "miXHqEC2xXK1vA5r3rm7oGiLcjQ6gq1U4Ss8csy7gVZWnDUCLN3nZMEH1nkVrpCFY5XmmAHwNKwR2qTy9niYHZs",
  "key16": "EgoWJyc8qDtwPYMZb2Ht8jWK7KP7kxeTZxcVzv6GGbWvZZzkrReWzcQVXjFdkzGLpUDB6UZ8s15WQAKp9gkE1rw",
  "key17": "62uGFp7Z1bYdBizw6c8HHykBpYiGNvCTyq3eQmJUWNU5hhdc9CfigubLh38ykdYRrQoXhBmGCyxRH7ZWdq8bdEUu",
  "key18": "33A1DKjDDPeHvrP6hNFDQrxTveyXxBUcEEfxj7L3JA2yykvZ3Fk1KNpjdh255E4ZWFYKGVAueBekfY4P1D6gxCzn",
  "key19": "63dvwb8cwXYD4gMZsFff7ADX9vkST2xcNrMdjLzzA1npWcRLbdXz2KH9oVqm9zSB37ATRe87onpfbQZPhaTC5MWv",
  "key20": "5Khqz1WCjK9j3nFcSwe7jdk3RFxtFBobTy5UzDPKgRzvUXkaudyKgRvrCbtVUyS6YUPH52S7KZqGwLBtf4TxBUhQ",
  "key21": "55SqXYYUvDuXqebTmMdmRm3wXGsjHkYMPojDu28trDzDpkZFFEmynSBpS1BXFDDru1ofVNys9PZDRAyACk9Rw84M",
  "key22": "2Zs8Te1whom4X9MYswnFXU2ugpC8U9rgnYFygf74XsaGNawr51pygwd7LwbqvfcjMqfM38jpqQKWfo7Msgzeou6r",
  "key23": "5jVvPLxVAL4s1J3hNM1HXVZwDUdRjz6NuAFL2RqHb77D4VZMQKgGUaU6wP3xGDkPTU6f2yLfE42PttpkMbbumGc6",
  "key24": "2dUML7Zrmq9KsM1EBhQVcvNEwa8pBRYebrK9ha2MqKJqmX1XdczR6W42PJQPTyXKXKaDeBvVbrGmdXg2RLzT9iZb",
  "key25": "2BnRRVnoX9XiBgWJEeCpUD69PZNEeybGcuxw58Did6xVtv56cwJvNrFL5mBEGFTh4eBaTm1qKX3vYYd4HU5mcv3L",
  "key26": "tDtomgymoxjopQRZrMEW9fafxAvdonmzpGvXRa8Yvajn1VckqHsFuzPoLaXeYv7bHUtb7uwNHd1HJEzBajkA7zS",
  "key27": "niw6Aoey6H3AWQKAg2iTzSxn9FX92SgLputRRLqophBFEPkv392AeTFsSg2Rn4aPWA9vF4ydfq7PnsxvXtMXAH3",
  "key28": "4nUUPao21rLAp5kYiBEEMmSd4hiV3CPDTGw48Cq1xNn8kH8SCEnuP2yvw9TGSjUPfQLVGRwwU1YwZ9PANZgBopgF",
  "key29": "BbQaEdbE9ZnrtAgdLhHXbEzv6fM5KiteqEiwAhHYWk6YpqZjgWBMadPyC6JMsCvQremAf4S8BqT3481QzdjV4Rj",
  "key30": "2tDaPBu9BwugupRDwwunBENmXcn4z2pxGqaRHN2ympEURZJvuCNGP3bEjkw5ny393J7MV5UJJQJuXdmbEwd4rETX",
  "key31": "3HRUeu8eexJPvbq8NPRiPEExg5oDJNCTtR3QnjeNKRWQSPGCUxvHBurYTRD4zqHSWm3YQppvukgCPn9gSBLMgzRe"
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
