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
    "2e64CxD3W2sDnXqeCECT8BLyzw1PA166xmfqiFJarJKqdoSyPDQzizXWdqBAUeTxJKHez34cbNRLg2cwVef2kPTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPY8ZY32uZBfGtQ3ecnWb9HF4qnVbRf2jEUCrK5zjUBfJsPLjeB2J3EFogJjGGa4pmtcFfin6ikT4kbnXXQ9PcP",
  "key1": "276w5ZubzLp6cg9ELxbJXVysFgXcsinAxWb89qhjpuTLKrrcnqFR3umxoV2kSCSr2NhBC9P2h6uiTh4P7MFWiUYG",
  "key2": "54E1LA4TBMXvhQstGrYNWdmBSyuB6PmrbruciFiHh1JPXV2Kt5nQTWD4q3WPamboSS6UiwyUpFN6kFQqXAv26ux6",
  "key3": "ttGsMvhgFSJ2UVdXgs6upk5WVwnzDDYauzjYS3tLGpurZYXLoFhvnEGWHKZjzcny6yQso2o7hhE9KnuozCQhqSi",
  "key4": "3j1ArxxLJFMLQzcpTnBb7V4qi7UpBifRcBt923NtayCbyrwuwt5BgFAErmn6qi7tosRRGqutYjJ6ALxMTmkAaNKt",
  "key5": "21keuDERvEp3RwzGVtA2sCTYZRvMDV5JA9PKiWC62XEZYshJtwbysSW1pJcgaBpsz7uEAUTgxZA5MQNkVxuf1zuG",
  "key6": "DqvrrF6y1e3AGJV4p5Z3AEZSSET5Kc7249eoxikUGKjvm16maaMS6wmuMbD9srBo8r5tUWFoe15M7aB7hWWo7yU",
  "key7": "4Q4EYkm4zrVZRoZ3YDL4oPzRCozYXJTKaoVT4v7HhowwMqW9W1kPywsnbsfbNvn2neTQxyoCLmMhr4euSxAhBs4f",
  "key8": "3h5UPDPsycntY5Miysn3LjW92hFDq41vvi9WhoY2kKoP9wxkNLDbf1H5doBNUVVN9KP1ciusSDM7FYeSF96vWuEV",
  "key9": "3JDSExeXTxEVQpVMJv2Fu92fExwgL3151oZG7YtcnfeVa2f6WPStugVtnYfkcATeny6hntMBKG5R5F4zRdfhQdb9",
  "key10": "39rc4zeAgmP4UdhSqKMR4krqcYSvpFkB54ANovyB9xF145n8vhQbubQHvycS5erfMyEUJjHaCTW7gk2C7t1qN1ac",
  "key11": "i33PY9ZC26sSxrMTtfSQxYpvoUANoVqX3Pr1AVLBfSAkXVt2Q7HFjsR4zpH6jHyDnf1rrmyKxAPWFmgDTvRdKUa",
  "key12": "2CymNFrBTBXuZbwXYG2gsfCk2mj4rmnWXJ6gs6YWxioPJnCKS1xwNumLGQGc4rCUZJc79uWGEqjcH5o3425PeXPf",
  "key13": "4UcHRLaiVtAmxHmHsYVWZbZmiTksxzjPrGj1kjoT2fXzNpQLbXCQoXr295D9kwpMVMdDzrviGdvTfnLjkJwNc998",
  "key14": "myNtpZJNiWewzB6FbTS8b9dx9RNLkUrQHUd8haXXyjRXRHVBMmrXqmA27xTZVCfmJYoNUy5vTowT4k4xYLu4nyY",
  "key15": "x97P2PJWZ6zq6jjPgUdErsaQmvP8BWhAcLvQ6J4BoSKRub4DJws28XjejaMy6Ev7m1ZAsRmAn27UC1Z27bZ1QYX",
  "key16": "5Luxbs8G3gMeKSPs3vr1AsCZJSP2X99DDgPivFPy7H3hCehrmKGVA9JentbX1ZY7Y4tC2maooVrhrgEkTmmuR5pU",
  "key17": "3FW1kpRYEvvuFdUxyLybLKR9yjqpEqYZFSEXKpwgVdtNBZWZeB5aKcGbFZcoJFphKT8B8rMwzkxKy1UsJm77YMia",
  "key18": "55smN1u4QAhjJGdAWw1LJ85yAytVU4FUAvt1fLsmBVASf84SnBCAAsMDNGZoPnZMiVGTbZo4vm2FVvnmxgtycDJX",
  "key19": "2YK7KYMfDMpRQ3neeQb9VFddpsYJb8wX5JAG7CfhcSBiZQto1PSnGdncfVzKPpvrScQz1QNAhtEq4uZ3h48v7L9h",
  "key20": "5sqZfsMW7P28zSePVwieFSunqaoQwRKMvpCkofGPmFbgp5A5sceBUJYddEama1mm9v5nE1ehLzQqdK3uDn4KxrUH",
  "key21": "LdSwrnAHC39U7njGbWJ9wixuM9bi9LZcFBXSc8NGNX89kvJA1LBVi1QVopGdHgRzuCBce1dzejgD1kHEpkrfto5",
  "key22": "2QQLVmmwpj5zeArgtABu8zW2yVK18yWKCectMm3RgWZ2EXrX72jqFQawpHc18LUNjq8ENrygqTKSjaPqv3tFyTnw",
  "key23": "4VVzuZT1sTFCfJ9czHLKA4PCPsK6dJDenNBuiF9LAguhzyZNyVVVH23pEuDKPLt53u11dfL6ya9Mc4A7RquUQmdo",
  "key24": "cDB7xUYf8r8zpfXe4DWdhAQie3X2AThFSXnDR25624V7WPdzLgsZoaVg5VYsU8F8Sq2SoCK6x6s9Nt3UcB1YcJL",
  "key25": "3RXbotsLiFjzUYabE2pnM4ezFdAw9brekMz2uVMUMRY5vVBcpqHLFXxixmZWNjsScMvWiQajPxG11z1MziE2kkJq",
  "key26": "2Fwf8dnoS8VYNchKfVTSWNVyoyNpGgirwPtn1WdTqktp4N2oKNW7unnyueRVwWtpvxn5XaAwAmeyah9ae95WXjnP",
  "key27": "39geXPf2GZdvFzqPurh8CxtLc3ysAUWdaNw4ZJDaALcvxPFQXVpfMTNZYvhnWiAn1h7gjnfbLsU71yxk9SYdQZKh",
  "key28": "4F6HkSuCqzFRWMfqLSQxEin2VPFEZ3qkPzaw2w9fGUZAySkgwyAq7Cnp5e9ifqSd4S2kiT74Ef6NKraXYKj8M1oU",
  "key29": "4GCZPX6mLfdBmqcV3ZC6ZSQo2C2Lf25GJy9keDryq9kVs6dvRm55fvAdWgYARb4yoikbviq8t8MdYem31ivvcoim",
  "key30": "4rd1VFuHdpVVWKsg3RddPSu9gZULHW5sMkFTT2hoSjuCjYh6gcRGBXqan2YTk7gXtzgTRri9ijsLxKrXsRNSBwcf",
  "key31": "61j5pC1Z5dHUp5kjoafm4QNVo9cN5zTgKfeCFEmTuUzxxnHytyYcdtw5r5XHsQ2R6onKq2zatpP9B7HzHccveD27",
  "key32": "2Y19LE4gjvLZJQBxtXGiUSbjrm6Dpw21CZPvnnHgXXFVZpZKSVLUqfWGieBKYasZhhqgZaCpNwnTpM3g6L3VZJZv",
  "key33": "5GUjuYvSX6qZUzGnpjbEhqsHS6ecquwUy14Yjv4vVNxiZCT9vVuCsjBYR6DGGqh6RpyowWCJKPH5RteeDWAaYzdf",
  "key34": "2Xu782hv8qJoHRRfK6ypV9UPYXrG74UaFEWSnVr4Y323gyVH4r8jtW87Em48fHAT6BX87ZhfDwqMYXGxKcmjEUPd",
  "key35": "4i4cCfkf7DqeV4VgUy3xVFVDf2AK421HfLmEVTurkayisrwY38ssgBqTQwuucZYdUcungi6n7iTFH3yKdqhWYhXJ",
  "key36": "2nLWpCFocGNSk3yEwnTmasijbJhb1Nxn1ATtcrRca9SmKhQyXjL6nLdeUyoXwCznfNDdoRa7hsVuS2jAMGwsuMMF",
  "key37": "4p9yomUnNToFkNLPP1G3dYh4GTwxeDDUBkV1SjxV5Ph7BTv6zmrh5kphScg5UZYy3pVfFiGpRz2Mez7aHue7RPe7",
  "key38": "MT7ZLJJKopHVZk9HppbnbdQnkZrWaqiGq2fiPfbVaQRknszCJdq9G9s7AEUwu9woEQcKV4Ye9VasMrDwuW3TTCj",
  "key39": "2f19WNRfPEvNfBVPduGYXgbSz1Akk2QLFimfC8yTo27ZuNnz9HPYq4WGS7wiFaPgRQxBx156iYrh4cdt5gCHv77a",
  "key40": "3wLZhXmxbvdsDtgLaxhw94t1ucPK37DsLSogUZW1gQsWMgin7pkEUetFZ3tektPJeYQMbtJmUkh928aPXZj3cACk"
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
