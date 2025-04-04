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
    "434eZt63VuSZkWux7ToJSKZSxNguPYCiYUeDbJwyJnkqXm3ias7ZxBLi1sQb2sBCQsGzPaxu8HqNWSBYEDUvdcpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzsQyRR81HmvJJt8uwh27B7Qp4E6SeM3rjDwymaG7y6yQVorbVi1mpC6c8R9mJH8dMXjsP8LFquDiCWYezFKVRx",
  "key1": "2TEeUu2BS13HEJZagRzr5VDS81ukfWJbLzHhyWosKkUo2oVobjBwKGYc3JyknKvKjBXvjxhpMc7CvXfJi5o31dLb",
  "key2": "4bhPs4zzUsVSY5gMaH6XV5GU5aW8iicNduGCZdN218rfD4CUbFW6KA5JgdByP5EtQLvZMWY8A8ugWzZVfyj7wHLQ",
  "key3": "3zgzRH8mnm3xgPniWsdJQmFVNSme4Kk8EeSUJa8PqSqwAhjmE1EcQFCHFgV31uuu722mRB94E2qfH7qk1gbvZAB1",
  "key4": "2qik6qXySkgJLL5ECwP9wPNJFkeEE1TG4PnfH1eHVxM662amPuK81QdneesQVXeSGhmWEN8gLGBk9nqJDnWzJXPU",
  "key5": "2jztwm6qCawqg9ngSEqxtNDjEPnncu9y35gQhfGoceK8WCRxMfjEfx1rMYvN8rZ5Sfg53y6JQbV2E4EASwQAQqg9",
  "key6": "29M36Rj4GD1Yarjf26hX3WnUeZUznC1kKhBTrPdSyD4ja5NYix2eEmVNbqd9dLSYUEx9xeenLtycfiGZCNqh1u68",
  "key7": "5xVGyqugwu7ruw6skLGbJrE4A2X7TzVy87AXGfviUy8fYp17C66c7esJrsvqDW7y9NqDhze1gsKSfT3gpzoUYZQ7",
  "key8": "2nCGwMLDfTSdEHBTiRmYaczhPagKq7VcNsjeb4DWrKLmkqMGDo5B7nmdcfqKkhszXqGwncDKLSnZ9FRviLhhfnpv",
  "key9": "s8i6FiRRSk9Lt3hXJRvfrskEXuBYzemtt5nbHpMYbhQfrdDp81cKca4xFS4jEmc4z7VcDfPatd8n1JSqvEQEmfb",
  "key10": "2CxRwC33wqhCT786VCK5TqjnCP2wHdC6msaS3ZsGveLjRviMc4onaTUab9qTZtMtPcoBS86fhLN8tgw3ZufBRCpd",
  "key11": "4ZkS4zrw1uoQ92h9H34JR9tWeWuRstwNoXZkeApGpsfJ7HRV1PcxHjAkD26E2eEmA7YrofcTGTMb1QHw1BFMobPN",
  "key12": "5uV6FWnzFpDmBUXC4jYa8azXL8gTFXRMpec4H64cPCYhwZSf1gKDTg6HazNnA6ZjRVcKRzauS2KGuHtGLQi3cvL6",
  "key13": "5ab9yinW1iN6h9kXEUKB8DudoKmcTWFiPhgtbirkjf7VrLvKEAM29dfKScGumx16LfyqB4kLQd1eG23D4UX5DBxs",
  "key14": "3xxjvwwjjZ3anBSV6UjaLr7yLniT5JtT6zwcJFR2YY1DnAbXTD6BHDWLFAB55brytbbdcvL13cdHVjeb5WEkSzHE",
  "key15": "3yNN1uisMjZHUFbduAvqudBjhorRy97LvEYgoV6NTZfdmX2pY9HTQYtXymz2WdYEatHkohQR9pwqtrPfg2Ja3HP2",
  "key16": "4PGMgysHHDPqEpdybwPDZEy3ARCW6Xtz7ooqKiMg2UrhFE6wok9bkmg129Kj59c683H5xUxvESJmNz8Rnq2dY2f2",
  "key17": "SASufA1KMehFKY2vWWPr8E3Tk9sBefAeXW5h2rz43UyjKgbwZpgpFNGj5yApsyK3e9xWXKo84GiPWtio36ApHZQ",
  "key18": "25ZoV65gW1MApwa3Y3DkQwHKTT53SameeEvqjwEHivu54xKqGmwn3HfgaN7fhkr2btqX5Ak1R6N6ujjJkjpovevQ",
  "key19": "39EvU2LRqjkfzVf742fYt1LLkE8dhJDpo88iLo497rrC9yXHBh3Vj2mARh3Soh6x5JTS28onKZp6dv57qDwCkyyn",
  "key20": "3Pxt41w5vTVuWxtxvVV4zb6fQiawmhW3o3kBbxwSQHL4i7Wy8fvBjnWCWuCGPS6km4csJsU8EemuKbmEFPd323bt",
  "key21": "5FReqmBvmcnuNoCAavvgdAAgSQRc1c4vmN5iUVWjor4uqAjRGq1BKLcHc3mZV1z9PoCiUtS9nkk8NYc9bzUKctm1",
  "key22": "3hnQPff6HYNg6LD5J7gSMmwHLmy1aJwp7qyAYFZfprWqvGaXPVvXG3cGwgU5JnZNeyqirpCMweZgyTz4ABhbtEqY",
  "key23": "38zRsJFvHLG1wLJWtDMDm8wXj3Gm9pxPopnQqqm8cERKNHibZ3iZagDxTb2xXfukjWJ8eL7ytgxgCggqycBdaiSY",
  "key24": "2x5kMDFdSu93j7eViP6aJKnLNRZsXg8PuEfvUrqBh3Xn82QSrGFVGMPVFWp5xeUbgZwDqjVnF9c7tBLypRnRP86e",
  "key25": "3RGmYQRDsz3aq6MD4rkFBhdSdEWthFWEsLhtBASRdW9qbkBuGM95yJcUb1jgk2wCkZytLChSGqLaVRfwrNtkS77H",
  "key26": "4jbabxq33HXAs8kcR1H41ZC5mPkerG1qnmiufVQ3r34qEgteNjs1VZmj5nztGm9RJsRdMZ1CUrMFavHsS4DrRxpK",
  "key27": "2q9J8EqVqUhHWMhewRef4MBZ6LoJdxneGMqN2FApkkizV8XuMnAchz8onsP2v6ebLVT9CFzaEWhCa8DsDEN4PVAx",
  "key28": "MaHMMmqeDvDNFBjqhh5bnhog9gwh3b7fN3KciKNZVJ2XR6jnGk5wzN66FHkrwSmRn84TdwTK1TgNKvLbtaG7brF",
  "key29": "5qGpDhutPLJteNGbRSEpHwrCkaSCpTwQ5akQvw5zAfvWZJXtFtrS7uPGSiCSufEM6ozkqxthgxoFiTHesid3aZpC",
  "key30": "L2iT7dPU66mUVPqnUaGAHY1DrK2TPb8Y5wad955uFqydfkjsf4cb3dahRAMrrvb3bSZUjHfLk9BEUkc9ocN845N",
  "key31": "5gALLDWpHc6ebJPWrHV1hcDReA1MRzS93pCJaF6QeqtabBWg1gKonCAtVTha48p1RvydToXUpRJXNawTcZuvZxx4",
  "key32": "5qNXJhMQdr3XdDjbnfC6mJ5JFqb7BafPN9SHXogVKfm89VNghKeU1bNJv9YMHjVWxTrEzwRsNpSTArrPDdQd8tTm",
  "key33": "3SFVXN42rXNH8hMKJc5WNf2kDhNZhKH4onakR51ES1AM4tqjHxGUFV4XDJDSsSukiwCyed599pRPNfoiizNQoQNa",
  "key34": "4u82VnJe5sVsARFFnhBUeqbCs5ZH3cf9s7gjgpUHL9n81PjGUCLn79ZLN9Rat8N1TeVrpCAzeGg1Dv1ktFUuBYoo",
  "key35": "4VddJMAwPYxvt3k3qfdgWs95auwxuxfYASzTyAqTzXBLNyue5od9cJdQHHCiFmmwpqYWFX754ES9qqYwD2g9fxNG",
  "key36": "5TKDMtJNFDGGxmNS833NSiBKB3D5EGQ14vVKA3wspG5ABB9zwKqUGKQcDnxTsAKRCvSz5miwTxZJA1PxKCGhKQKR",
  "key37": "3VxwVhZHfGDHQwA8b8XWCBujExJpo5B2QNrH2FWPQTSvywDXmbNbG7VFmmMehAJygjzEVdkTvcVDWmpUjMWGdU3M",
  "key38": "4YAhD7Q1QNYv4SbgE2s1oUru1d9adX4LQnh3DDpcGYdr52yfY1xxnCdmnNHB5g5sBWuXSRr3qsfyFFXa7FWggVaJ",
  "key39": "3DkpuAL8EEmienRHuDiKVt3oVpECxBfiQCuYZXSj1Cn19aPXuV6m8tR82Pay1axQGYgR93qRfLs1JRTHaQ2Eb1AX",
  "key40": "5nyAWiy6RWgtw3cf3ZGiLxDGLkksR3MvszMxeRms2RHx7iUHXnat6kZAbKdLPTmxZvxxF4UxP44ZjF9C7G9V9RA8",
  "key41": "53qUsTKJ5PrK3br2R5Cvi18vvynxD5W2TNepKuzJApMn5MM929fkurUgU2WzNB7aYbCNqsGA1MfHt7436LEx91Nm",
  "key42": "2JomCQLtrHAm96m4cKPQohAC14gUAPNr5Ru9jMUafPDfvGdPQGBfzUyDXRSd9HiFnbReBWvqPiy9s9fZwSRcQoEn",
  "key43": "4x7bDJF2hdRpUikhuk4k2sNAbB9vgH7iN1swGHHgrTRJsK13WkLcnfJuW1PR2eYrWwCiR5Bdu8MqfSPfuPMD2nmf",
  "key44": "2Jw4Vio8MBQvTGcv3faaXjBxJ6sE86JsQphBjGEFctRCZKjrjMNeEVe1XcUM2mKZzimHYDHw3QjGrrpoy3Vc2bC3",
  "key45": "3Hrjsj95XwwSbCYRgEYGMZorczWTgyfDtsCQSSjZJxUoqXsQJstMsXeMy6qWAcL7YCxJKaZ8pFLLSGv6Cw8tuQBw",
  "key46": "3MeaoekBpdPgaEbtnv2FPszcnDmuthiSabxirLJETSD3jmnxVED7VyZexpxxfZ9Fn3t62EqaMQPsXMteftNiBVGd",
  "key47": "HyUnRMqFz6dtfV8J5XE4jZLk6dUXiuwuQncDmKX9A3AK6m6pirQvR4wZbdYNN6DTt8uYRkis7Tr55p3pKs3e5qR"
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
