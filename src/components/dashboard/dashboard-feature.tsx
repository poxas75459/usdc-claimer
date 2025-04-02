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
    "oSQkiimKWNQVCo1AK5ZaLcMf8R1ACY8Fmiq9iMzAs1zm8QAnsmUWcuLCVFzFkTQ78nhP46UDYHafvNGANF2rTLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ktLS293Q4VQSHVCmuuLL2fhvPEWuh9t9qBgAVxHj86zjSAKqhxZ32K7BWBarzsUAc3UdjdDxPHJfwN2F2TU3F6",
  "key1": "4Qxdi1hJSfs3cGToBjas5a8A7hpRPxEfv85ZpicDUiYZCXvSEB3xqmTAqLp6BqdodYf8btwm3kaChggDRnXZB5K9",
  "key2": "2LHdVZX5g3hMrz9iABceFijqF4Ur9XbXVqg4G4jmQVsyvumDVP7Wb2R2RMtuBKUfE64bNGpWd5Zdqrpo28wdKbVS",
  "key3": "4eAXeqiHtfoKrzsm7DgNbD3dHRvtBR3UzwbTudbhy9NeKok3gFvzLMxxEXxptaxayW4N6RekNuNiGgYcF355apGM",
  "key4": "2bjZ8Eg5XCFpZFw5Hg6Y6uL15z6DJ6YWxRKf7k1fBFca7pyHk62CGTB8Sv3U7JSbHGDax3JH1YS3uJTo3kXk6RYN",
  "key5": "rvYUVXbLmpBBetYzCrLKAUJjFxvYdo2Lwr85PozvvPf9WZvXerMJWPr23JuHL34NyeF5CipMBnLgTbEF2ZA3o7X",
  "key6": "GRHg8FReRfstpQYqdp3nNXoZ1aqHkApMbDaRH9zQCMmiFDF33S5UdjYkdtnAACJnRFFSpUhcUtFwvTxsEhricMT",
  "key7": "24WueigSFHadn6iiR5rHyhwbvzcc9USNHZWD3Hn3wtVZxyBEBT3PPh3bb3J7ucYNqyA1h2CuVosqVg2aDdAvZnjg",
  "key8": "WMBaj4kNBZBJGb8nt47xPGXbxS1YnxMYDwpNGFRYpV1B1HobZoTiP6b93gwZqwzkTKpPpizXKiaFe65LqieHNkU",
  "key9": "4soohosgP4iyQRAJEKvEfuSr4zJ9FLsKRjZgC5J6StjvQL2smDgvmVRS9s9bZ5EaN6LN55uNwKr7Mh95GpsHWCrG",
  "key10": "3DwiqHT535W9ToKHSa64bB52ke1pyRY3rTLozKk9FFvgU7uL6NxtzrxYA2GkPk54xau4ZvhTQTdim7DMTSLhr1oJ",
  "key11": "5eRXJmTg4pmf6Wm7ppbn38iyxNqPN5vkd1rjSj4sfvbiUMNMGqocyrSc8gBojwNamGATRgNxjpiDNUj3Bb412nWL",
  "key12": "621jMRMGFWwwvLpNWUoG5zX7nkvNjetYxDQtSNrVGmX79NaueHsYWzwYxfBy3o1LcfpwyfX72bpwcKjrpg7rXiUK",
  "key13": "4p5qZdqM3onUvMDJjbZWKs1VaFH8vT2PYUh8rHBsv744epbqcVDtBKpheGMrxhb1e3BdfJVo3NzDkq8dSWpT5GWr",
  "key14": "2AruHfCwcLpzHPLaMd14WRb2fJPZpWEDTB5CtcYBtGwrXbxDVpQEPsKYkM9rya7JgQ5t3Gb2r9or5dALqjpcVaxN",
  "key15": "2ne5ePqnHzXX4YxHx2G8uL1NLQgHxdKKz7nv4yUokSdvaYDxeESGSCu9UNW1mmQu1SEH7iC8CbyysMnRDzpXMLvt",
  "key16": "2qX4ivYvMXFC5tsNdULVgWDWEtZCZ8NWH7BPJA9AP7X7SsvEXJLFoJ5eGB4wjifkTqJ1Vrav2N5DuzXSfSQRpWtX",
  "key17": "4NVsDEdiFe4u4ykSsCFTGJrLsn3uXzh6oz9yzvuh27D9pU5hsJM3kW576ddpaEzonu7hVDfEN6sp9jQtp4C5vdjQ",
  "key18": "41ct61yhtkUfUwjRAUi3ydrJ7EdbguCJucFtuhQ88pshNnxvGtxrMsQogqJMygtSiB7gydzuFCvTGHsoK59FByr9",
  "key19": "2KF6Wf6kjTBz3nFhM762onnzyLmE7YrfYWTSGmX5wt5sfE3SuA5ECojnq2Kmm9x8ziSeawEJu5WS9evPTERDnnr8",
  "key20": "32w4MRwZdV3WeMK4ByjPCd1JQNyLR8UpsJgwMtkAmvAVD1dt9iFTHdt1yLquujHoNL1aLgYL7YkdTT4ZZXHo8eHv",
  "key21": "j8pfcsYFeLzFnDowdW6SU7eoifADnGE5BGoZ5p9bMECuEmfYBzrTGzGppRKFHTDaKs4mGTWZVkUByTByfc7c743",
  "key22": "5QyHKvSgU6yFdBB8HynwEMDPoZNJJFLyLaMghw2gdcK5KpubvNzw4v2MuX3KPdf7UfWB3JAAabVZ1Ct6tiQKoz2C",
  "key23": "5FnTTAanQUHneKgkDVA22ywo6Xg46BV43PTr5UrJxtHKqCMzBCNBmz92D7598z3frGSKPpfSEg3j7MvTqL9gpGdC",
  "key24": "4CDxc3t5RQm6Sm1Z7FmkzAi1ic8pD23cAmQEJToWzadRob4RXQfS92XfywqLgCA4jyVp3v6zNFtAtN8apuknnFNk",
  "key25": "4pJgKC5NJzUaB99ALkMJkCMAnrYfU2Ltk5Q3CUaJZ25wCVM4dEWHKPvM76XYz5LmKt6jC8RLThsPzcEDsnanXCBX",
  "key26": "WYfVVWcBoeCKRRLwpTFnbo32wLX2nTKoVp5EAxAgJH9AN1NxcBUnFfc5jXHyXhZwqDQC8ijqW2WSLrLGuXWTbr3",
  "key27": "4LauKgv3GwpX2fZfJAfc5jp9cEbjim4BiTcjn5Ub5PCusPknrCjgHN2eYfDtBQGZkX1iG6xQY9rc4YARkKcoAXAR",
  "key28": "416XYg6X2wg9kVYYja1zuM2HKCDaj4i62iDcMc6tBRhiERDpuxQZcZynDCGiXeytpz1hgx9MkoSKUgVfWnAh1Cwc",
  "key29": "4zhzVbQg4WvwT1uYpJcouxr2hiBK8PsdusacnQsoRDruyxh6n9XXaHgi5YaAJDygZV3cxxEAs4f2fGdxLtGa2z9A",
  "key30": "4F4qjMgBzD7YYVtR3hY5M7ywZ9BArN4VkHXfdUCAF8aoawtLvyspn9cCds1jmzpGqA3BmMo7LkNfszh3W6Q2ACbq",
  "key31": "5CiqQZ1WhEA8Qmj7KFCkNm7wWAxHyAUzPx3tbmLnr8WYfXeXsQkD9Cz3d4oqKDmy2f7vjA5rd5bQUfhjGuiywoa8",
  "key32": "4fuK99NtqLghxNh1yt8RvcX482jDjf1dpNSp9xCdcoM9HUVLUfXAA5ssvczEVEkM7QwszLPxvHy8m1F3b9aAHJjg",
  "key33": "37bv9hC3nAnQu2gcJiSJFmturzbZm7rHXmVijXheU9CtdJys8MExPKmao7KCM2YaFCgWprhZ4HZvdGMTPJH52P5Y",
  "key34": "46AccAczGnzFi945sNJ7o1LoWUm8G9PXMnEdQ6PxrFNXNWUQP8Xa3YwnYTrVbcu5PcnkcfC1HmsLxieJqu5kDi2Z",
  "key35": "5EegMPCtJfTysehjvYsAt9tASSACi8MEqB5ico3CG1xU5kKZDw5iykDysjWTMZJx2jaqRhGcxUfBvtQpQ5G7ADY4",
  "key36": "479VpdHwXEjzUxdaD2eRVMPoa5roMkkrErFBig8EKXRNMUSSbLXX572Gk7NqAnEbz1yJ7PV87mNvGgR8qoJk5uFr",
  "key37": "bifPFgooczZjuBuf1v7Po8tLfRN87sqxow29yCzGouE9RETs3it3BjJwXrYriYVgZU9iezQCmnZMPokoasWAyJN",
  "key38": "65Lo57MLzFHn5sWdZX5rEdDegeA1B11DZnLq6wtPYd5WBxNJBJGQYfyrdFhKmC1hXHHnxZYWASiLvHsSVzkM5bUA",
  "key39": "4Qyuou4zQFYyoABJPC4wkQZaEiiBgdxGBCSfFaB18GRD1VwtV3K7F4SSHZjNKQjnQ144CR85CjDtKfCcLi1TL5Wg",
  "key40": "AaB3tAyfXS8CQX6gJq8eimSSXNy2N4f2P9RRAJsakTHZPDkxKkqWWDDZ9t2zifBRSwSUHp7y54V758QWqzRYE3Y",
  "key41": "f8Jaqqjryxqq6CwVncmkeji4CMw2Scc8kXthnwR7ioQRRNQc77gxVvzGbKyxCBupxRGPXuYwfbC8CAHiP5UekKv",
  "key42": "3v4vpBW3aL3y5BrWw8GeRfFTYFZyn129TEiaDEafVNMSvJor8fnGrY1tP3HDUWMGxwmwqFGo8cCg9awiJL5bLWZW",
  "key43": "5zsax7aA3vNAvSnkxR9QPn7kZRrKWBiWiDTAnFyoW8eekz925yJSXLmgtgvqoi51d8poN1Sr5y3Pt2yGwLiHyvdR",
  "key44": "b5HcXNPhNb752gZfbZNG753uXFC1AhS75pqfUdzd1yXZjecJLtZfvT56WxS2QG7GYhnmRvE5oQc5tUQRnV92Hvk",
  "key45": "3Mgex9VRQadmVbRWaf9vW5XoJDFe4upSHsJzvJz4CpwMjaXn2jnrZMgWzyD3dVygAvpMkJpPtqQE1cME4URLTKSn",
  "key46": "3wZGkMcMvFoGtdbT4PKojUcBB6X1PJS6Yr5ZhT3bMjweNGgyBLJJTP7YUa3rue8UxUEBs8gcSgZCUUX4isonW3JL",
  "key47": "2Hfavn9MNn9CQ2LP1iY7Zj6qFCerfb3edvcs98EWBT6kGMATkb3jHviJ6iWDptYURJDqK3xuTXWB8mLjAsctKbae",
  "key48": "2z9QQQa8EZ3WHrVUjbJ4tdUsaLGFJFS1UdL1jiRaYkoxUUhQtimsmAt4c2Nf7JzYB4N5gVZ5ZpMx4XcEwT8TcTAj",
  "key49": "4Cpq6WTQ4TJdKYP3xUY4q3kX3Cmgy1uFqaLmR81FZ8nqSERiw7SemLbFF6Wqmf3iMS4Zm7jJBs7iUxRdZ2cmcsxU"
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
