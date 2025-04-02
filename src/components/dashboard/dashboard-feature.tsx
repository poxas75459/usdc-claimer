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
    "3LDiUFQ4yQzKo69LVPGP1q88bjRmYXybi7YBph4fDj1bhnVfEYa4ULzrBzdF9pNj1HtaedFwQVBFQYjsGt1EGAD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgBbkH3NxrChrvCB1wUk4df6F3deVv3Lcphaf1pHYa11idg8v3JJoBFpfgNLesVH3Pcgn99f2TKoYLsNwaHQweH",
  "key1": "4aJifYQyj9jUU5G7HqT84CALLKdvdLHbpjTJENe2a9HfJGKANCDz6P4kSXV9MYu9p6vk6awE2FebpcBTpL9iQTLo",
  "key2": "3N1PLefdVPsZFwm6Mg7oGHfexYpdCExkdVHHUbffHWr7HJc5rfiMFkQREwycaTPq1TTrC2mVARV4BJMeyFdJSmZG",
  "key3": "4SSwArcTuofCMDk7ggiWkKr5jnrFtA7hiTNzAEhsY7yn1NRG8v55ireyXuGtzq4m4DntWKPz4JuD5Ws2GUDgA9np",
  "key4": "3pddTT6DdrrQggcRXo9NDT3bcKHgufA9x98PhbhyBCPCarP4eLvoWhBdaNc68JAoStRkJx2NehEE8zd3UbZ5LBgz",
  "key5": "5PpD31U55TUYPgHUWGQNEdrXnsF3o3vxHkwDXKshbGjUFvJiDzaD6Ngrdzt3Pfzvht5BfkLhUjKWzKwzzVdKQPiy",
  "key6": "vqd2ncfeyW5haRXLkjMYF51dQkserQuRqeAe5snFAK7fyT5NRvaygPGL2T1xQQGkRDQM3AhKSKB9cEGvTG5TppL",
  "key7": "3aaBddjLt4KkWJJX48FGpVfMFQRVUj5FFeabrXLAgQ2eM5Enqc3B8pmeaFbrsifw63E8zWRyF2f7bE6Htphv7z9f",
  "key8": "3AJfXfAPWtSxFaQo7pn7kgFSe8jE127Aj39BDUJrge8FuNnJCHApKadC5DUDA9EGejnu6GRGnGWVPKoHmGGWYShW",
  "key9": "3og7g3eQdsvy9Q4yQN5NU4RfW5eQrmjr1LD5pzV69CkdVBMi2B6a634urfdttyUfE1xekUTWtGAXn3YjRCn7W9rg",
  "key10": "Tk6bht9xw8qXKJGQgA5r2PtyLT6qbMgQpyNdrXUnz3fzoxjrzB7UkYKPaP8yLW6n6fNfs3w8t6XPU1SJ3AmUwD5",
  "key11": "64gf22zLh5HJWmjV8Rqkwszrjpp32mvZ42aBMRxBo4tMyPLMSMRgzfFTUtgBN9cARJq4f2waRd1iB8saVDQ7tCfn",
  "key12": "2xU37xykGwLJCWYTfkWDUYkitodguSZkV6Qc9Z1yVo57jWw6fmLY3SRR8mbPEZRjAUHArLVU5j9et2YnBXZYzyc3",
  "key13": "5Do4quVkWXEyhrBouXdJ98WZv6bTY4ZPaNkxMHVE1H54YHxKCRDFqy3rpnhnrts81LqGgSMv5wAjaHyZ3AiR453b",
  "key14": "2Dnxr3xxcfroq8TLUuAJZiJY91a6iuGdFn3UoSiZXkeMBE2oD5ihrJyTALPvYWtxm772pXsqFd7zabH2Hk21JmyW",
  "key15": "32MsnHNeSJvVRkFGGti9dSf3zxTW1FVa4nXSSpHkuJx4aNQxC1pVccrWUgYLjQKLiESMLL3UvYNcGWJLgp3uxZHQ",
  "key16": "42zm6vUB5HvWSQMoWR5pLfEvDxXK491RokyotcfDVwwbbMUyC575iDqFyLD9qthQ9gupBbZo8i5s72veeGoieaNB",
  "key17": "ixqJgznSbA3dwXRGWRMbR567shn3Ts2vJ32Z5gxMUE6CrJwBwWDGGXzTsfpjUgT5RwotXCo2BQKPBetuzfGS1wf",
  "key18": "Sj7FWSLgwEHrsJEwCKY1QQMzSjPH5a9VEqW9yqc7wReq4zh5epdPBiSeiEv7YMHYeqrhgRyQav8KfqnsQq8g7T5",
  "key19": "2asmaFXf5BQEPFaeBdP8hmMHN1gg8gxLaczo7gPUjcoPJoHpC28QatoU8oUPR3EXpYE4CF6ESDyF8H8PK2ywKA7C",
  "key20": "3ZcsTtz2bMNrsKpNbXvosFucnvgQGsWVLrkkzzkqfk6UgUXMWhrEbNDSj2dtpuoKwxNxcXCa7uUSbTzjhJutSrJ",
  "key21": "5TBueihmxfvZK2vN6tJvWcwdc621GaCRu3seccc3v3nLLM7Vaq8x34ki6C9K6pgtEGHqyMqGfso7tK5j8xsdtXut",
  "key22": "2xkzY5NuGNZ3zxnozz3xQ4D7bR4Q2d8pHPfTvWxC1WGdbxLr2ZjxWU39mB3mokRLKzx6D8esootyuJoRcVNcMdMU",
  "key23": "5j6ziBg1D75WsVbhCDtk6bKjoeqAPT2Z3w43MmmKdgYgbPiyqtdPv7aAt1FeMay47eeZD2eoc8qRyFUSMb8rjtj1",
  "key24": "thmpprY2nCAYFCeKrw74UViTvHn1pxkXdugJqw4pr2zxbbu9zmYAQ8YG7AY2PZvgx4coUk5LgHQPe7mKHTJaU29",
  "key25": "46XVaLiv5ocaHAXb55XnGEgrsQWEZN7W1CZpgB43tV7QfYVenPdjcm8TxVSo67DvVGuf6izmJvFkEHwitQCcr2Vr",
  "key26": "wRhB4ygXUKFGj2MvSSNaKhjabLf654EziXJ4jzPu9nZzehX4GAzVof3mgabcBbPC3BAQ7xHZ7WD8RZWtdaDGSKj",
  "key27": "4MqaQdQzwzPAUirx23UnBYd8SpgjhvyFEtXok57Nt6vC9zTvJ2eMeRg9MMgjsQMEG6PjegDQZFqykF6Pqsnv8gya",
  "key28": "4rWzEqYuutrTeVa78xrJHyCugmgexVZcm9mupJLuHRobPbPitaf1mR2QVe2kfn46VZcDLpGbcrBo9U98he1vQ3fy",
  "key29": "rwAZJLRFBBDjdQMnje6MbnyhUvqRZED7txDVcQXb7fCD6NWwLSoxgXY3o6HDhG37aDYWJHdjz7P7iRwFmkssHiC",
  "key30": "Uf5eQ3eR2JSTPxYSWAVDSZRr3xR7TpsHgsSg5FBzdReRGWQqHL7gqQb23yMdRiV133qgMkzmzde5h9qJ4ApVvYa",
  "key31": "fn7CanggKLVmg3y8AH7SiGmMtuvkk6JstvY9n93U8wYb96ma9122jTuxhu3nJigppWZoeTzixU99bZ8yADSAzL2",
  "key32": "5qw8d74wshTM4kBYBrezm3oi6NQ3JdDR7HTCnWTLSZSkGpCrrjq65xtFGq4UxcMs2etGgZwxGst3WVzewsKXmhYS",
  "key33": "3riRH31vJbbqiLYtyVAYiwuKtWAvYoc2obCHvyyC1v3QbpwekBZ2h6mBuX7g25QC8Zn69TrnRmjbDTXcshstnSTr",
  "key34": "2k4Nd2MvMnrKQ317tdeY4dY8LTuNsEoUJzkE3T9B3hCcJTAcdg84cUPtfpNbZSJPeqTesJ4hbVEmgp8b4v3YeQN5",
  "key35": "41ADqJmnjXvq7sA31q2npFWKBCzq28sZgRVJmQjf9BJxRrrQN4RWfjCwETK1JwBxpfHwgC9Yqw7Aq6w1mrcq6chf",
  "key36": "5QcxGeaWT7heimvfBivXMdRMxSdEMV6ZpSVRHTz3bg2LG99JoRB9qZBBmL9qt2bTR7KabMZErpu5CwEvSBjiAs1j",
  "key37": "3JghsD9iF3H64wA1MjarDof2vb9LNzs3gAxJQigsEK2145yeYaEXzhXkMmeiSjxDHFpB24HCqFNuv4VtWVQrYD2V",
  "key38": "49oAB4XbP4Zx4VvTWuHSWD6MxQaxcQRa1UVizaYpURGNcLukCBdDZY5UeGU9ofVZ2CVtD4EYZGJ4o3PPAy5gQLgL",
  "key39": "3S8sCgrEEYdY2GwSEHuKukf6VsyUP5BcajK2ZBtPmT2eGf4UzLGiCoEzrbgaqSVc3Gin5AtsBWrKfQQvhTDGaV3x",
  "key40": "3qRq8bShHq3GLUzyurKMga9cZNQwoqqnPJQexx72DMPjpwxtBMfmg3VPRLC3CXDXkK1g2MFTomGp9ptjXp2PQXdF",
  "key41": "2cfGVV1iVQrV8imBiUvrshRSRvpjPaG63MZajxvUTVjan1zbaqMbo4BBbjvCio2HusuQRVmzUw7T3MVqkpvMBfA5",
  "key42": "5R8T13p2puMxwrttxPGJAQ6W1Sh11iQUarpmuEk3Qp9QhKCqvcTeaKfw3is1PnMd2vNkYwfM9yKgepGTKw6vThsH",
  "key43": "63Hz12MNWf73zNVvat5NgvBSfmHqbe4h8eYx81pQGGUwWPetV58jQuU119Mkxyx7pvp3jPAbTpUDV1LuyjrNnkm7",
  "key44": "bVcYEYgrfEUm4UHhoMQTWbUnXD1NF49LVd8ZcyueJYyBgjGV5RYaMFyYwXCciwvJXCGmvUBnKoJjhriYk6738n7",
  "key45": "4Zp1BiYxyjgbVDPQGmnX6BcpxQxwNwpXMq8nmn41wsWxMn7K4LaQJ3c4gwoYC3pDzeKgH4cCJfE28synat7W66H2",
  "key46": "5AEXbhZigkgdSvy2vKvgLtY89qrJzgvxgGoazuyqgzQeLsE1pVEkQ61PxW68ZgYamwfx8wwKq62iakukC8BN5ttn",
  "key47": "554MbEC6ycBNbXMF9KkmUVjdRo1a88VBpcT7ks9QbabYf58SCp7oApXM56ud8zmdQbc2m4JZtx7QzZteRSPsBtam",
  "key48": "24AWji9W4CYpE2VLSJ6FKBhkr8P6ywVbbHPwdCjuD9MQhfdR1xWc5WNjnYGppRdTSW3cr3GjkrJFHNDTDLxbu4Dc"
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
