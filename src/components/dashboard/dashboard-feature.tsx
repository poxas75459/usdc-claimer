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
    "5VcgoxS114dLRFktafN2eY81pR27i7CfhUEWWSyjqyGDzaHt94sFBhUqnhiEiD938PH76ZnGGXwU6R53WfdH6WXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7jHD9A69s735ATc6XFd1YuDRKgoNstN5TU81GQpodXmYNHyMxwqKTn6VuVqTPnhXWeJrgAos2zyxxfokNCeCXA",
  "key1": "PNvYgHPgVqqF3TSmYJnUX7oFMtSQVtyPKZCb3aamdnVcpFFyShRFoipufeXPUrcUUw3xjsm1kpk3b1KgEbcnS9A",
  "key2": "5uch4C6qEbLg3qECeqiWyYAnm9aYW5odEJEnuKjbDEAxLzHTcJDLP4DdttjF5QJ73znL6D9x8QGCX5fLNfzrFHwu",
  "key3": "2RfJV6BgrdjZY7Nm4JtcnLwkFjFypdzC1bi5vJkWJPKz5BxYgCCFdPYdCFLEiQZu4VnQTPinkggbUmXyTJqarRAA",
  "key4": "2V4ueA1bTkCfeh45ri81BaRtPPGvyW9PGYBHX8x3njaL92cSGUNEdpmvBSW9cqGaYgqq64124D2JwmoFMB7RKE6f",
  "key5": "57C9ASTW8Lm3x45LLrvkJzo5ebwXYi46Mp7AGtzy9o5gS7cFgYH6oZtoSVyGiiTVV3cnHYfsM7eSpcyaHPBHZQud",
  "key6": "5oudutvZgUPRj3vRsPBPVwSwgFo2spRZPqufJUHb3pqinmoSNfHGodGKB8JsLCVDBuAgELpYxkwTL5rNDroFb1Jz",
  "key7": "29sbHL8y7cpgKhHRqBnQLp3LS34n3H4BLai3vgWxxN1yTKKAHdZdDet9rQjtwCyKdiFYxA3UHovWQuk25PNL9t3v",
  "key8": "7eBy2rr8w2GdHibYJ9bRqrP4eBdMpEHRqMRMkanAwCx27xdZbBkDmMnmWSsCPUg7hXLKKz5q8t5xfVBnPMx5SSG",
  "key9": "4gdRWK5pQ3gVjo1q25pGbupvYo5cMyzywL2ravvM8SADv6f2ZU8kpF1FXkgToKLsN1ZJTX1DU7cUfkEShnBeWcoF",
  "key10": "5mcexjUzQ3HyDsV8MjBAtrma4s3PjshTM9vXEXek2F9yhH2C8EXqJaNDRtGXvoNbdm99AEBBwoYz8SF55ERKMRaQ",
  "key11": "zwMBLUgk5Dof9zWZEx5RCKVcgBUMimDFJ4NejcLA8KqLefu4QiwhLfJtBcD2sR7Hn4pAF52FqRb96gVNKF3byn2",
  "key12": "4XBXo4vb7QaB2kdDNf9fUjkMM6YcqKXVUnEzfXCeqjbdszenM9QWi7pJ5bD49LCpXXv8gwoYCCp5w6DmpUHggBjQ",
  "key13": "5C1Fe2n6gqTuAJ6hZJnKrfUPeWDPAnotLmWFi11QVkagRHLVRdBdUgvyVK1y8ecyEWApZCnZVatcSYJ34EQNrvVg",
  "key14": "5n7AEbWkzTmHa4nNvqfvcuu7dRr38TaA3PqM9Huto5Mdg8kdCMrCgNYCTeJMVELTLxXPmN9PJzarDqBNxGZ2yavs",
  "key15": "23b38LREW2UV5E9CLXzB8NyNneFXVPHD1LnYRHza4D54xqAn2AqxCUVrXV4FGxP65gTpWibvg64KKwGmY6sTbj1D",
  "key16": "2CifHDns2cCSknm7VezMTDpDzGGsY133GjYFPMZtUwzYQpQenLsTfQ9HaMgYF9CjNL7JpBiUArvc8vUmJvnwsyND",
  "key17": "4zaE2DKLQYSb2SHQLpCNzFknCEpCUsB2FPZPQgzfL2YYYPD99yU2ALmipBwdYVCHiB8FibrnWBzWLvJKf6tQ36Se",
  "key18": "4tmsBQZHp87w1ARJHJfTxtycaHCmE8Z8zVmmQRK2tVKdtcG2jCPjJ2rmhYPrHizLnhbmtDYC3wvhSUu3Xue1kaNi",
  "key19": "ksmi7RjV4peiy2bz8XHx64q8xYVuwfa7paC8f6CBzBebw5ZWchKrp4Fht4yZ14pyWLU5oNUKbxit88vBaDWW39y",
  "key20": "5AGBaDiywGLgS8qL3oFEd7T6NGEJAh9qBfdAPqkdaHyxTjn5LCRrfBenrZSegk858RPKV13SmWjMqTPwu9LXW99w",
  "key21": "2etSZc2UMH8QkBKHR7nDLsHvCMD8nxHEg1hj6SczKCwGEcHsPr3CSmrJAVeCrWjRFPDM2qffyhsgWRDAzZwJ4hyy",
  "key22": "ZzYojkQcZN3v7Ek299Rm4FBpSBQg9nqhNJgU8VPLYaPQ7B7zK6D2BGJJwKNrm9myHjirYMCZdCrS3vgTh1RcEGk",
  "key23": "22NVNvaNe5ZFESUXXa9c53pzfnfh38XnTvSfS565agCs6xaXYoqF51b6fkSH4byh6AjRAK4JANDmyeohRz1dWwKT",
  "key24": "4VKoPD83JAvrhzXkpPSQJBtthg3Ne1EPGkSFadZwPAo6vcxGjEEzx3sr9UrmHTVWjtAiLyx81rm9PzgUVgfncapp",
  "key25": "4nwHiSadcMRZnBXz2NEyVxFBD9UGwKZ8VA2HL19xjDJog5i91tTjJH1WjJvQDuyMvVFUyZibtoFq5rYJq29ab3EG",
  "key26": "HV9Vzbj8Z5Ya7hFHeT76Tc45y2oGGSAKXRoWQbtDAZWxrQUznXC5hXBECwnqLiWFoMvrDZ1g4wHaMC9RuHe5t4E",
  "key27": "58Hg7WGQVQviQfv7txoXwFo3YfWdjaUa54CmDv6zc1wgMCDN8dE65Ujmr3JopywXcQTbHS99Fab7UNK73S4UDoGA",
  "key28": "4h9h5MHuqQnuoEN2m3xicokbJijsUyBGzJ6Zh2QpxobDhudGRQh1nLa4PRchF3APT4dCPnV8AM9q49e1F5T99QVz",
  "key29": "3nYwcBdsh14Cv1ahZrydwoWxHCh6iqsosVPYtWMVYMsto5eYyXeDgxJNLr1jc5mCTUitUiHMipErrmU3kcisjziK",
  "key30": "HacvD6VWagxUZPrAutQjveKVH1nHZ4vf769kuMFiNFHRL1PDh9TGWCT9ok6NZPoQBZvpwvJyah4oetDkpYGLLMi",
  "key31": "3sqaY4wb3J16TbHMbLYbp4zDU9yGs9HVLy5CM8JVfDwDk3DjPhUp1BYdGaFAF3SQYiWTxsLwpYGQgA9foPH7CPof",
  "key32": "4fVGVTh1HbF78SY39nQ1Yn6buuFR89DYDepW2GVJ2WL32mcfnJrbeoRRwaqxTNbdqdJ48jiYHxxWqgj8RkuKie4T",
  "key33": "5HmHuWxCA1FJNvqQ6UxJDTmeJhaQLLrJiAjbzJTE4gYbYd9rsYhCdg1cG8cYAmwC9Dt2zcRUTD61pFnkRBHuih8D",
  "key34": "5fPDZqxb62LMUM2mgPTcPSvQwPdgUwrJ3XkCsK1iXnJ5mY97si1ZeKPw7SAbZxMC6pafkzTZBmEBjRyT4rCYWjgW",
  "key35": "634n8B7rant5scVPuyMZ6n6B8ahf1qrfzd1WZDjAuegxw2Zs5f8Pfwk5fNXdGiicc6gJfi4pyxN2JYn1HxmNNPmK",
  "key36": "WqbeeSTVKnqxhinFgH3gMcVU5Fz2DwJHpQKF9Le5aAhYEWkbP3n5C6akB5JBhTTQs8FLVbMTYtU3syGju8y8NYf",
  "key37": "3Lz96dJ79q4vFxJUyAQPgnoPdtYnS8DRZMeqTi3H5vpukJZsXiBZnhib8PgfGFMwYQWJ4PjwCc1j44hW6KDaxyXi",
  "key38": "32M4vNYV6W6Eu5QJecS8qdntHvgvC6RNx8aZ7opbiinPic3A9Qtd4d1BbzWa9Hthn581uhzgpmSQMy3YFtSisZGM",
  "key39": "47BR7YhY5wFmddLmi8FALaBtEKVwMq7572YFqia5PyKbnawr7YMyfCGT41mwfUPojuonoALBeNmyR9xG2cjVWfn3",
  "key40": "XCPs7EfkURcXoM9StKZgfTmKZiKvQhiMB54PH8sici66JD7ALTmmWY7Rq4zbsUDmyDaKgvWcHN7Nu4freZbbVuZ",
  "key41": "4RNT1Kohc2RAmUYF4g7VXZUUTd1CxAkRxXZzXx6e7i9CftNtUmm5YUaSGfRGvpmXWm5VNXxRVVovocdeScGhVrTm",
  "key42": "57PyoePbpHaFoqRyXzbykagdCsqVAuAbzikachnbFyDhJMjqyGxwciJ7aBJ145hvNWtaTL6a2Y4FxYgJtmDCMmun",
  "key43": "5kz3rEaQM42a82ZUzguWGvkVKHh4qKAN1YhnQ4gUAfjLxFsJuSnX4SyZi7Q4RBwyUXQJ8jJ2iXrptHNVXw2bwFSH",
  "key44": "2ALUDaJvz5dbZTNQZHMeRZQQwAyAXmg17MxUb2s4qyzroCkqc5gZQsjftYCDuyLE9DGzj2tFp7a6694UvUkMpc68",
  "key45": "2YZvBCDbQXMX9sRVH1X9jDeaw46zY3LrY21227QzGTxJfxf9aC92mz1mKDD5G8bxwzAwWG9gTVckFYJfqwnQhywa",
  "key46": "4QRoNDrntjWVCLb7jfB6xL85vdwrPZuMykSvrtPzbHyrTVca7sErMuLVkNQ4YYyFeKYh4cFwMTQQ71cH4JL3UUFL",
  "key47": "37PW9ytr5n5HwbsM4rVRGZEwyDbk4N2HoDraoLnHkzQyAFMnCQzq2XEpdjBGUrZ16TV6eqQy6kSasDYEj1eHZe7K"
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
