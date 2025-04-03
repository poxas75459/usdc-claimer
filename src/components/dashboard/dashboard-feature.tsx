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
    "uQ7Q8sarBpABgydB5RXcfcc3TTqU33X3cMLkLDsT1cg2LsX9day46cvrEAQhtSexipesvyQAuW8z3v8v6DXyynJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "siKXyUwaEVVxfDtyWiBfWf8qm8168W1yQy7XrKPKmu3sbNC3tmsJRTTaVJH5XBGZV2AQaWQxFFdcN7uHDpGLrXi",
  "key1": "4AfDS2FurW4zqpghZMxWdvXHhk3mRKuFnnxdo9j2j1qVK4oMKEYqDACSgX2JW9TAPRFcS5StQ2oG8jiAXcQqFzaN",
  "key2": "38Rioo7TPUJ69TdpZvZSWcV8h4fLQGRkwhCinLCiUmy1YaJPt5aZzmTm7t54Z7bEUVJMCs73SX3tiLdDUXCHQN6u",
  "key3": "4n2QQNypvki3uvC6fJ3aZ1fKy6eHT7auw6PDFtjYUyog8c3AkL86qx1oqikJUJ25LejghkgQrdiB24U66yWWLQf1",
  "key4": "5NmtEfzx1VZVneSDEw5tCpcLPDExZK1iybXqB4knqAbTxvYjWbo3CYj2ven6PjE41P2Upr7ETiJQL9nPHiyWHaBa",
  "key5": "7mDzHJE5KJrZk9vJacjwzECPgDHchvpjSQ5gGEE8br5GsiBoX4FkGeGi2uFnpiGoKXxvHsWtcm9rXoFvxLaPeJd",
  "key6": "3jiWK1bhwDwTwZXknZBYvZCif9d9hqA9kG1Bp22Jk5Fga1BKWdmt4FE1QzN1vzkfYGQ269B4hqJmEjYEUvjvqCSa",
  "key7": "jsL95SYvDJfijb1LHpUopysDYK5S7cJ1uMY6GL9j9W2WfXgw2iRhiAHRufoVRdT8vWBpwKU4XvZKLUAhA1zoU5P",
  "key8": "5NS1qnvAV5eFeC6fJTy59shusT265HRp8ZQ8pMudkLeZFL99ZEPyBciGAthcUFDWMCz2ReWN3hoYnrQEq4BBHC7d",
  "key9": "5gm858gg5hAuoeJtEJiamJFJs2NvDYvU2offahqcSt46X676wYSvAyagRJxFsGC3VLCamvrikCBkWiD1aTKCSMC6",
  "key10": "23VX55Axxo416h976BpDzu7opvXiTgTmvgWYP19u2qXUe5GkgM5XcAJEHpKe6XM1buFpGh2hrU9h5kL9oQBQpVqb",
  "key11": "2HmNtg2gyk19Wx897UfrTdzUq8nwpUDTRCkP19irNpSe8ZaqGwwurehwNetN5i2CqtdqaTou4WfXyaHgWsd5bKPR",
  "key12": "4o51sBMkGuSVrLjF6RViQVRu6qyFJ7TVHsR4y73j9kSPjkvmMdJmuGFSuJUp8jDsQqbMmA8g6rg32tFyr5N9Q5F7",
  "key13": "FCkMNnQTp1WowU7HN59Wb2Us8tuPkAx9mU8pmndgRu1J6xYeHe9Dcw1XXfJ2MU7hJmfHCHqmw8oe4gDgid3k68S",
  "key14": "38YbDiqCwp3SRVnncdm9sLJ3yJmdcuiE9tcBC8yRbXK558RHPVofVTaeFpSFWSU8wvQhbQA6MBzxNkXyovUudrHX",
  "key15": "3CTPTKakH24dNfh6AijXTKk9GDPKGT2asCJUHzN3WrSEForwjW7G9KngnA9n5w7GDsxiNrt1zmmSyJZRY2Ewe98N",
  "key16": "4sqydUrQ4oZhnYA6Zib6wRpzAMasiAVWwzpdT32QwSTZznrjSaxWynqkhC7cp8UzHnQ3LeDUetbnR1FJ1pMogwFL",
  "key17": "H735NyVjyvvrQjnzZakd7vZuWUtioSb8vwH4No4ZGdsdqhxmRxudbF5PK1QxLBz8o18tMpNp3B4TfMpXzMnWzvq",
  "key18": "4P36mAFafejWRm94VMHxfTUjUd2rf4NWouM2MmCu2fV7juCjekPK26HGd1jxCnFhUXEvJfGHn7dPkV6isQX2g9ZZ",
  "key19": "3CUgFHzHptjQE9tLuzwFLF8fdoR4ThSGQ7y9rAfiEbhJDM1CYF1EYArWcqhMUMbnB3hvp7UPxBSB7RM5vGrEFUWE",
  "key20": "dFTfnGBkVw5RmLAmqmmS4R1fQfU3JATLNgrL1dzjw74z8bYYtTKEFDxSmvCWekjFwk6EG636Yu77sqaxcNwVwd4",
  "key21": "565DDBoPPKybyfGLM8ujNStpQFxxPkkgr9TX2yqUVuWp21BpuzsXmeKvqX3LaUPQc5W9QfTBC3BjYEfjgBvApwtu",
  "key22": "61pwgqj6iahZUPoLqt47ekkspvJaUA7wDvRK4pgjkfr41JeNnWJP99eoiHVxXSfBefDcjBSQuH7oqsTN826u1DNy",
  "key23": "44723PnTSyKTkC7pNBSBNePbDjcQKEZJmzVrpb7jzj52gsPdGbNb5xyN3fkXQeT75M8bwmfxqt4f5YTShAxmtq95",
  "key24": "5XiQd9ELLg7oQUFRS9PhdyKCLTAp3QWhgqiyV8hkp8djVU5H5WmY2YUWAETsVMfBb6buiAAWBvBtj1P4H9paKUy8",
  "key25": "3eRuQnkbkfzLp9bsh1bAzRHDoELKZezFoMRnJf33s9D61hirbmD6gAZuCyTasAqHLcXcAf7FgMo5DpF4xgrkrgLF",
  "key26": "4jKxCp3xEDy48kn1TKVfHrg1Hb3yd9tkZqQyAzEXjV4LfBSo1X7WMziNrF4vMeyzuvQzgF7agcctHCjmWPafZiwe",
  "key27": "5RAG5YYwdHejvxncJuKmKmLJV3HAkHYVWcigwZqnuzHxeFdZcHUnfuf1w4MTEbviBAY6yHWgBDnRuSWY3JLjoCM6",
  "key28": "5kVzRHikBkxvxqFCKmX2xLDKBRu7nQcggaqQQL7Smtu3CZjQprTK23Bsn8Th9BvPgBs1w8b7e7ZknMxSAaWDGiND",
  "key29": "4uuXtaViEB2Q6BJgfqwZdhqbSJXfg1Uaqozij3dh5HncwukbntmWQUeDQ9L2JGdoYTDLXkXPFqcGPFd2idA19k5Z",
  "key30": "2fpcsF52yXyqvBpRzQfgpD7t5zZ4Ym9758dBLyzBYngcgrBXsidcBHdbDCfXLZhEvfVjrouYFmyA4GNTbP6xBk74",
  "key31": "2EDYKH1Eqy8hmxrJJoMvhBqDMKHrcUBTQX6cxCc63Ln1LCV5ZEq2UhQzDSA68azF8nNv2eKMhqKyC6WhxyQ2gT4Z",
  "key32": "j2wJ6Luyo4WAWSYciaeMykKxQQL4qGK2KqCajM9yJy14yDsBaNsSkLePRWBs77gEL4ZWrsJgCCQ9TBjDoQuwRBx",
  "key33": "2CinYs8TzkAAsvmrTVU5ZguXeB7trTyZLXiP9ad9XFkXrBfqTxjT1xn2Dpf7tmbzMxp9zjfQzCN9v56iediWiWKG",
  "key34": "5j8xJ2VMEXxoair3ErC2tnHYFPE3fV3UbqAD2CturJ67DcZW4EYEnG6GmmSzrLgs2qpdbMXvidrxSNF9vPtYw4b3",
  "key35": "631wt8PSSE5xT7As3sy8tSKJUS2tWZrPCKiaAKK8zVMd6CVAqSKc86kgQtdDHhjN1RkKdHRV3PWt2wgrpvFqRRja",
  "key36": "5hdfw8zPccfjiCWK2tJ1VrXpm3LaLTHmUQbVuEKQpVN37rwWhpZart8XRZjNBuPXcMDWh4viscZrwDfiq8FGAv5i",
  "key37": "dn792VE8kqpWPWffq84PE8pJ826k8GnLivbdz7onG1KZNeUk8FJpKC5Dh58JyLpPWPwDo3y6ULyVCQKPxTERVJb",
  "key38": "28qnXd2o1Dn847jdSzXKVN3Sqk9TDzu76gBegbUGTQBK5imDopXudRjDgo2ChwM8doEv3K2MNiM7hoVzCmz9sYKb",
  "key39": "4fgWdznug1BjMT5pkiKaGztjHc1YrUMPxZJAN1CuNcxFXMbAhnc4ppR7DsnmhewYBeS9x3vWVLUBodkUYokbnY21",
  "key40": "4Qk8dSVkJYQGZMW7FjmRkCxwRLffHRtZGVmsV13tt2cuEHwtV2EUrQh4K45pjsH5MKNK9Hq77U7varLFcw81FDRd",
  "key41": "4mVks9biy6Ke1pAqp3F9DgQx3nAbrvhBj4yiTWvJbayjoV7PsyHNtNCLyVHTh5CKQ39AMUaHg4FWtrUmj5YgLh3z",
  "key42": "57hg13r5PHvDno9q8jkU7SDMtjSFxKMSrXyBiKEDaXVUF9drgWDiKZNVo4NjVVPLLmadEiZZYA6WvHgvdjQXS9AH",
  "key43": "2AApy512zCkhckKDVjuikp8BycUNdiEjWu5hbHUeWBM4HAuQpsyoFKq3JowLz9qZh6iJnt69t5D3i67YaX8TMn58",
  "key44": "5LkYj8aRbWC4S5XPb6SY7sUxbikoJTAFmRP5AxuJXtnu8bk8y2vZ2SLZvqcQuCuHAxkQ4YcAg2t3fQjNKQaf2h6s"
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
