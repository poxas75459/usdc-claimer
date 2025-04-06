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
    "23Zs3ViVzsZnMUGuVNVWkyzyhqx8aCkEgLDkvBaWwPGMTbSGMrgeqvejsC9VfsFSnHZgJK5bU7MK3LpsNc8Sir7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzLDRtVrskenYcgHgNeP6pAoxmeMshpqT6mXDn9x2gYRgMqLGg8P3FiDFT5k561fCkt3vMUZNxtS2kj1ZQrkWKc",
  "key1": "2QX6LMhoyyPuGKCickTUvbg3a1LvjgGPm9r9u97rBP7HoQLWCfwH3xuRX61jHwsXvo1YV1XEvqooRH1qzh7XK87v",
  "key2": "5qMpsaq4ik6YWieEBF44snofztvYJZSpzWuwvDw7QW1KmiscWwYxoHk5G9ZEagribPDMkkKfhRA7NtQjqwN44uSa",
  "key3": "4jnUe3sTrZzTUnorze9gJceLHL4j1SN831ZP7uVqqWXwyg1XDJ1cCrMwVUfwd1UvdpzLeqmjXfdmYonumydsZXJQ",
  "key4": "23nVAvVKdiLtheHie9ThfB218dzWHQMDtQYJy9ZSAfDe5XmfWnm8fqDnDpVrNRPc3mhXa4HxXJMZ6sjaoDAJpDAx",
  "key5": "3GqWefQPVPUF3TFyGXTWJiWYTSBjxNyxjF7odcATq5pw9fuHqNLei4jA6KwVB2mH1vQAYX3NEkVqowfcJRcX2EuT",
  "key6": "4c29TvSJTLXPJiRdywPjQYDAZdjCBVU7iwsJNvG7MDTAH6BC72CgJPXs2P9KHjDYgEk5AS1XJQqnxX26xXHivuAe",
  "key7": "629wZthdXWBChEJoEgzPEhZZ71ZBiYJrdhEMffghvw9Fku4uvC4ca1tqwq8xbyvH8dQSw4bG2vQchqfJKgRSpLcV",
  "key8": "3iScudX9iqGTidqJSGT5iH132NkyJKkwK4V9Pu2fbgMUVAFn2ne19GbCZesWJJAcrXTRjnNJVUC8vcwKJmmo63ru",
  "key9": "55fKr4fySzz7GLxXqWoKLksGPcGHjYB7ufpFLaZiv5GcrtJNy1QsFrwib2qCGpfjL81CsUVJCHmcjTg7EDo8zGj1",
  "key10": "2k5h2Z6WYia5afKEoXfLNfz1wDWrk3P8Vtv1jDweGs6uzac44dsRoaM3bmXnpXmYL3TR8JC9txnPEh49yor8yfti",
  "key11": "4CBscupoGem7Q5smEvKtt3yXmUbrdqzuxnG9Vb6YitHXjGmc5UUCCaBKWgFCShMPEhWUAoK13dxqTFSQuqmsbAMM",
  "key12": "4LqThgwfkudDYLbVMFtpyRMTN2DiEbiBaPYBoRzD4CjnNCnzMP579drsgRr7154CdyDExst2kLWGK7NHP438QnVT",
  "key13": "4RfdCi275nkb5GukGApkTRnJttAi76dnmeKW1mwKYpciLAKzjUudaDB7x1TQkRgTzvf5VaLgaiXnGebpRerifbpN",
  "key14": "RjfG1sTM1pR3W7nB7dN3SPkwHNJXfvAcuCV96uBnWHbZcwGzGHMgMzvbLy3Y7eV5tfVKz6zoNM3euUqhqcQzBsh",
  "key15": "41DW5YRzycDkfctCWFX6ULN4jikhJYzytVUJmEKdTrrNCR49soFex4q9UNdnZcjNbEu8P8kc7SopRiNejRkXLunR",
  "key16": "44mnBvwFB8tGBXuMsWvoYwP38bdDoKoUfi3D8RxqQ1aAAj9g6gaJxQmyGFbqWyjswWjtszKEjqJhdvcdiyx6yj3K",
  "key17": "63Ex8pHvAhHeHEqmZKVXie3yyxXbkgdVxQKEN9RqpGobJgW1JnP89eJtCkbp942KkHkWzYsWQmcQcKcXXdjYTLMv",
  "key18": "44Q7hgf4c2TFjXfcPx2HbBgdxbRZKKSk9THiGfzq8itg7WHcFQRWC9gAJrNBBryVatyZAB2LMUR1i1E5XaMvpaH1",
  "key19": "3URnScSVBiXGnCi2VdQSvcmzEZp1zifAwJ9rRjYteAr32AnobUJMR6UPuDWUmuvP9a84vqLKGF9gp4pPH5142Ut5",
  "key20": "2YDhpfCD5RbYfRTPV9LjXjpri5jPWTqL2zLc7KAyZRH9bbPLKdrqWe7pdGL6XJnFz5g3mtk6WwnvutLpfNSF8CA2",
  "key21": "3zRGD2QHe8mSQykM4WL31K2s1jKub4GhnCuUdmAS4uLpPk4JuUjFbYA4rrdp5SETtiaQ9YpUbLTJr19sD7gu73NB",
  "key22": "3or6i7cq6gTrdvBmmeNhdRgwEkqZS2oviFmQTKMtdtd77L8aRQsCuMY1q3Wh1SZWBk4YcpYPTMaxH8S9nD8hFrvW",
  "key23": "3CQwiEnYZg4qZyVb6A7WqNquEsKdxvmPKyAoh4qj5x9WvtAJ61srdL4z6UUh76iqZHDFccMwnTc2Ut2kRHGk6F2",
  "key24": "34yXezXYsy89wz856ZszPdsizNqKUzYPmFTPijPcdYQNggUZ2jJ589fMZ2Zt74kRHXZ6uvuYigbi5uLDMfn5fNiV",
  "key25": "4faDCKL58FF3zAJsWjZejgRJmajyRA34dQw2QSvKTJ8zrF6VRh48Jdjp7EcdcNSiMDHpUX6JBXcGjdKLEbyFQDpo",
  "key26": "4ognPBeeUSJdU5MpW1Wb5u9gZKfASNjb45UkKEwYY4J5RfSF27txwx89iNebvgYW7tt8atkmivsZxqY61FPVw13m",
  "key27": "366YofHBbV261n8shYSFUZVujjwUGTWvVcSh45JzNFraf4etkCMvujnX6hhrh1dTpdk2qm6zoQS9ZMoQqNVYQXgf",
  "key28": "AeXWp4W9S58dKKPocVFdd4dzn4WPVRwQBNNiSGLx9EExfpXx6kiedypmgtjMEC7CfvK9HpY3kxpdNwLiGbaWkbf",
  "key29": "2Dbx1p5Q4iuVhG3sFhAeL65dKndhqrd6f2Vsx9B9reRF579TFCmbcW341R7u1TeQirYdB449yPso1Z561BPLxiN1",
  "key30": "46womgJciUzQC4jM6jFXVHrPPeDyktLqApVwxtUKfwkm5BgcAENB5s4PLGUSbjJGCGMGnmp8GVWL4tZDBuK7LdxX",
  "key31": "gCbovW3ZbkbjtHyvkAixNR5doy5yAxwcYQfbMUf54TQhHrUXTUnbPwmeHtMPiZZUsdDUFgt3ZfRjuNVzFDL1GG1",
  "key32": "5Y5KxR6YYV7kvutufUz6VdPUd4d3b2wFhTM7Gc436hY4EXdDopTZMu7TtVdfZoHbNNLEnugezfSrqUTwbEzRiL1a",
  "key33": "3X21ZPgU2s2HpaYwTnEGS6DeVexxBe8Z1ELMfnFMC54fHSsk2qXj6SfukYLQg6oEWBrySN9u6HEEwQiutsiXE6Lz",
  "key34": "62939ARfZ2pEcf8mLa354ZxW2oaEJ1z5kLDqt7fRvoSXGFwKqncniuTfLGbCqgVLZGZxQTyPJGAasjFNVVvoBbfd",
  "key35": "3amryo3GGEeKXPoG7Scn5xSwuHCfS9ye3tK7yFcXgpsHmZVFj8QgZYhkmYHSmJNhaK27cJvVGbcytaDETRM2AxZ5",
  "key36": "GMF1RF1htgSbBuXLXg9W9GW3pwjwrjFc5mZXriqXNQDxYxBKin5QZGLgCYGeYzBZ2MJCbBGmEwhFu2UTBCun5Ry",
  "key37": "3sXQ5c3g9saqfBaZzHYwGmEyfbxCZD9Juu3H6c7x6FJJJgo2dsvx4qFGt8kHyMJiL87R1W5VYbcDNtVBC5ozB8Kz",
  "key38": "67A3sQV8KaZp8NhwivrQyD22rNSakYCwZAoFjnoGcsasgAg3a8JRi4fwQD72Qi3SuZPfrbnMjtKqYVM8om2BE5V9",
  "key39": "iiVhBiCaZQr6hGBKebYYh75QKQZRRBtwma5Q7KqgaWN47T232kWHHkHu6XM8mjBLHoJK1qFHWjeMfxdS44Cdd5x",
  "key40": "2XAM1gJHDyhWModPuVCe1gwCHfAfHPFZZd5h3SiGDuAgLqTkh2y1aUrfuLqyy46ErS13JNizgpHKcvZadTaZhTnc",
  "key41": "3ZFF2gLp7y9dDrigAboA9kamCC7kk43mWtuSwgc4jnujMbTv9Bv19cnDEGuLDozDMY38eZ9eRkr9x36MDeeJQpuD",
  "key42": "2HxSNDfs7h4XVCbzoXUdrZmEyeDoQFkcCo7K997zex69cLHQxxJuBugUYjX4zHyNCPd1v8WzwfuqwxwjMKvL5iJN",
  "key43": "53ZqrSrrKPdwWc3dh2uSFK9CDpx1WbydCfK26ihSMdDiFwSqKmxWLUtpxGj6ToVKc5pRqNaH38DBxodzztVtU3zF",
  "key44": "5Zbk8bo8kzSKELg9WP7UBMLrfapt9kCNhWU9EHs6Eu8euuTCYSi2Zt9LpzbUgZQRJLBeu2mhfuThhgmqLbTgwXJm",
  "key45": "29fyukj517q4z4tyzwL6PhsQgSzEjGvt3qECRaHzvFniWLosXLdSxw33rSzY9Awq1xHJkSJYcGCSR8Q1mpSTgHxe",
  "key46": "2rTX8ev8MD7275ABcWmVU4BA3drsHSheDcBcFy3UCj26UPCNmCeukL8JHmSUpiTdWqrMK8MFhjhXBQGU5tuWqqep",
  "key47": "5ZNbnCX5HZ1RgoGWipfGpkDmod5L95eEWCRpxcmi1DYJSgqNBwfWzhUnBgFaXweLUeBG19aLHQ9b6roGBaSLLCQy",
  "key48": "2zS6hoe54rz6LwQ1pKNPHEMsQx1CHTZkSw5Rr49wBhHFSaT6H8ybpf2YQuHhWdJKe7SS7Au4V6J67h2WxmsRKtMa",
  "key49": "4vuJZj7CmdxbRN29etzPmbyCR9jT1hbBEur2ycpGL7aQbdimgnDStURz9npRtA4MLVuUtsY9WmAVn5GVVjQgmqvR"
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
