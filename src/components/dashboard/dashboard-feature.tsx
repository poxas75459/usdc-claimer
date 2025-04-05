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
    "2hxNBCBE1afrMY2f51mfe4aBxXFTZ3pwNe6hRCaKxH1AqgaywpHgactneXLDuuai9RTFhAQnG9pUGWZgfWcwXJTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8zAneg6YzMCwace3t7bbRS1nW2ydkYq16D3k4ep5jz9wHEWh9MMLhbhB2gghgRT5z9rquMHr3Qaxu78ou1Aq8D",
  "key1": "2HDjrRrJMBuRwgiTK8y5kNyr9xRdvAJJurxaVADmkv4Udco3mAuDbsqQi9uadQUP6x1k28k5z5jg7vB9xvg223rk",
  "key2": "5J4D1Wugj2LAqFuY7LUmkG7RorxJ1DLV75kSwDwTauVescpmacccZ1AVup3aMZKAGJZJsRpnkn3FBeWNf6K67cfM",
  "key3": "2KFU58GiZQ7DesZG8mF3MWWsHYiQKc8uL7wKn1SLMf39D3QRaH2SodtLsnctRiuaUHi18u4YLT9oxkG9wDgdTH2B",
  "key4": "2HXepghx88DRiQ5Yuui1irAut2ht9EsNDq8sc31AANpejka2CmZBqnybqnQ7CYT9JRTHTgKyvsFNcm1DQUudoyYy",
  "key5": "2Z1tgHQZuiY6B8eUNi7MipDTvbeb6Kh8hjrhJAnT9GNTX669uJv1QJThxfRoFqTHK8RzYFBUzSsXdp5Q71gAgSSN",
  "key6": "36qCLZQyF3icoMFD8ZsfLoFHQ9GhMb8MdSUVY3DiXLvgqNhM97DjQiEDeScimQnnGLu7poz7ZrcSMsnZd395BBYi",
  "key7": "3ArQyzhAffuhd3uBrVfXRBenf8EtV7NmvPWMF1MQz6b3uXwHUidCDiVN8o1scrmWqoTuMDGV11ykTmo5CriP5MP",
  "key8": "4Betv3aVz78kqxv3EUDhFxeT88hfhMK42FTa2sSi5Lv2zmnmZ3mQ7YnD2grgSqTXyAkmmivSHToQyAZt55qDraiz",
  "key9": "5kDNHFJkx77wujCmTheNrqTzxM3uHdpPPbwxNVBBoDzkKyaBDSUbXg5PvwG7NYfNrkyKt6pK5nv5SXkazFA9vo1c",
  "key10": "ryDiow2LCkQCkDPNHUoeQB9HtGxrTYiDomSw3ihRWLBcHuk5cADLKyFzkT4pJQpZzuLBK9jvKiuz5HqDJG4NmQh",
  "key11": "43Q7sBM1mYKnqU7xwwNhMt7yhCHRVBR2GYd5zuRQ3APc68fcJ9r1zCYk75dSBfZJTbqj9TjYCf5Xa6SWSP24yPvq",
  "key12": "3P7ertL9RqruDA1DiJBEshgvtUTtANeeLoLXBpn7bthdi6QnSaj4pdW2jWXhgQooVfPxPb5z5UVgnte3SJ2uTVdS",
  "key13": "4ov5tnMZhGq28WeFedR5vdtg2bgf3k31GoxtKaiLaV3BCvPSjeFnBh9kKy9tM6ioLdfRSv7fu44NFLhnM5zNkgKj",
  "key14": "35vZmsJkHtF8Yo2MVzd9evNctCJRH1boNjPTsXyi65sscnBzprPXBEtXsgy996u8Musq6MHZru6sBm7WBcVJTyUR",
  "key15": "3bdnpGvFAjLXcF7iXSdgJtaS1SisgRHUgCDgV3ev9TaX1ruGeGPKPrHfuEtgrBU8fTJoePB7k8baGo4boYP6p6Dg",
  "key16": "26JobNin4WTsvHYJjF9Y5HqHudaaXXweGvx54U3T58uxGwSmvqjNkcZ24Vn5q2WQqDCyKWngM6FvWx1aC7nTa41a",
  "key17": "5BbTU28rDFosfTiEwsuMnKc15VAZkJLaLSYNRvnQuZikn64K1sFyRQjeeLMZ8abmd8s8n5B681JL4WGWkieUXPRu",
  "key18": "c9h7YLSGp9kwbJd1gv8ii7FhNxpyw2NxmXJYb6PA5Z3m4WaGrqgeVz4v1UrudSQdbqp5sUjJQmenpn26Ds4VULP",
  "key19": "uxHYkEsByBnRM1oeDHKQreAi8gBTaBbNKFQ3fNEPrQooUCkZgqHNABKe8uto84MWVkwXGeXSya9pmK8dsRxjBQU",
  "key20": "N5q7dMixs4FDgjT5c7pntTRLmRHGFXq193pbsxYi5ryRvg1ksVGXm4CY2pY1iyqoMBRrWucwjyT18Dqrm9Hcdkn",
  "key21": "i4HQojEJ3ThHAL8gQtekjMFNLYHHTcJF4MgQG3hrp5muc4mCqrvuKjFkLbzpUfwjcS68iMsZmSn95tKwVULmhkz",
  "key22": "23p6zHP9qjwRucZvezEuq1ifHtDNNxqQnroHW2fW9GBVfPtyfWbYgG5vEfweuThPwJcMMtQrJqcrsp5CVLpan4Gi",
  "key23": "2Ftv5QS9mivH9EBJX5iSsZRPmJuEWKYJfY8DmTysaJjT32YzqXzJ6grjKyTz6HnisJdrsHQUXz1x5jhKkeCxaHp4",
  "key24": "3dyHsZYBd91KUi6P6Z3kEZ2npaK31Y68d9p4Ygz9RC2kLz53gHQ64LxUfLTSzenBZ1iV58EE3Kg1QvJTqiz7NSnt",
  "key25": "2wAr2QUNdpEhyjSVBjr5SMZ5WXx1fnuseTAQnGod3bfTfikxKHPwpnSm5Y4fQpVmfd3bAf1A4UcgptDHZSfq4GwK",
  "key26": "3sy8VHjexkP9ax3f5fT42dAAmnAJvqZCej54qKVD4cNRz84FGyRwoVTfxUC9qqoTGGjn5qwU6LN2Xpz6kYRogrB",
  "key27": "44KoGsxAa3Sp6Sib2kwNZDjhCNCfvD6hoTmDZw3kCjsEMXNdRWLZA5AmQmbHaFeXXuDMRKQ7KtxP8ygiT3wwR5Vy",
  "key28": "3kLUHYP6VGuRTkzHp4axLmiEotSdqNnewDpwSVZcsrGx9UJsnKHtvbsqvwCQND9yQV4kYJdhHZcRd2EF5mTYimGG",
  "key29": "v9ioE2cXHD9wCwZENyLwLHYEDzpbSwTaQwrEmA7ebMz2QbpdDPrQGnXV3fMRiAbEspdgKXKiMJKmA8vdmtFicYJ",
  "key30": "4Q3FADAfBv53G9vc2t1SK1NcXnX8b1h1eJjRomVbsrMb3fJQdKXBpepqrXoyRjEagLQqo8LcANXX5GFnQh9GuUhz",
  "key31": "2nzp87FJsxpibGs938CyfPqgfnk8qyfeR84FEttoeQyqY9ysuQw8w8aKXgEhPTLJBBSq1cdLmcv6YXXLCcH7255o",
  "key32": "2UcLGzHUnyzkGJZbrXvBzPP7xTq5Mbit92vz1EbPvkgFBCuGiiFfrbpWJ3NHZYDgM3mFidvVaYB2c3uHDmB4BN3h",
  "key33": "sX61gGopn4mAKUTKvfgTndfKG2cry4G2g1jwAamv9oKG8urexuHgVMSptDLbYg2WvnHW6HDM5bfEkN5g3zPaArP",
  "key34": "4K4GKYg31E6qMi8P7dbcFJ7xfXUHmACnPM2xmxTNYVsaQcByL2xQuwTi5PwwwjDBBpDdeZzJNFgxyMzoFQfBPN5k",
  "key35": "5YezxBL8dkVFdVV1eoHnnYkFJiT2osP5E4dnnfGwCnzdZHtB4a6Nq3UxCfKMhqMyxcT9wnVLkaiUEZBCkGYHhv2T",
  "key36": "o7Ub7A3c99Howm9XP8V4bHJgahQSGwaafgbPvSHTKPDxJhSVaGtExoQZmbyfPWZNKdhBur2LXWub172Vj3xcdkq",
  "key37": "4t3QKySjZUy9p37KwNsBF6QpFkSWv3h1uEeRjxcyi91S7WEH7rhKpNBqMEF6wrsjsicA4ur8enfbEzkDZ8zfYzio",
  "key38": "5yPEGvhffE1bMZta1goRgs66JE58UaMNAG83hMUxQHPzjyhjkzEvgWu1fsMAy9XNED1xHqmhhSoVPY79MksLxnBF",
  "key39": "4miHrU9CRoCaaWoaUpxRmneMkgWKSXNoqxmjQ92mYp62736dmpF9q9HQfncvDkaFLSwqzp12iH1z8yNzz5uW8Q9d",
  "key40": "4jfE1JxnHqRHqLXtdVWio7EHEZihYpGmBwy2dniFuS7Jk9ACStbQ7cXD22psyYdxunDaPEAFqeGjqk9rgpoJyS12",
  "key41": "2N4mYLoJ5tVSxct3v1S4JkMmqFFG6AMkeagjuLpNPzbs37Ye9qHvHiKRcRbV4j1tbJ72tKvy5dm2GmKdhVVTM3Zv",
  "key42": "4Go3hyZDLdeYzQYQNvwEssr8MdTkkr3At7iYvLufp1MjrU8vQnKXXW43KxMQaqyKv7Su3kym7A9aGe4rHEszzvqc",
  "key43": "8egqqsYPs1LgK9VZHnS7CEBhS5Y9m7Fi5k4D8KFqgnBtYpfunBbcYHLeU6Q7cB7UVoJYbeg3sW9NvzxGj1J5q72"
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
