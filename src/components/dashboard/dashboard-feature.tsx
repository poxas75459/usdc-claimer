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
    "4dcL6Zi88b1tVMHiGsMLkQWxwidCcwX4dK9RXyUWVw7MLwsbuot1fhpqoZWQtWuDMu7WskXPuaM6stpRu8FQpVve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5RLmKEgqdbjiBcuViPFkBeV5bYkLLATBwGXdEYCvWgCguh34Ht2QZQ1HaV9uAhAUaPwuSzgMpkdVjRsDSxqo1A",
  "key1": "5cr6vkjGpC2qim9EPRGTMurBRZefMmhe1VejRHRH2YScNanQkFFiZp6ShSesTHaEuF495AmSV9ZAgL9rvCKeaWhZ",
  "key2": "4KVTc4sci6zDsoRD35PssJaiBUuVE1QSZFmCC7MGN6anFtKpAiUq2upieDeK2jx7sC2eW69jUZcQDm7J3xot9hgJ",
  "key3": "psYoLLANHc1mZiSq2BHLLMedUtRv1HmcgLGkBAVgzhZRGdDe61RJvA6u25gYrdfV7BjiKRCoQ5Amt1ttfRQn9r3",
  "key4": "576Cfuj99KBrWxX2HmTTFNihm2Djv85ULv2dwryrGczBKSQPXe4xMR74vWt42YNjRNgsvzkuH5eM6UgD9N8NHtED",
  "key5": "3rcE7jB4TJL9uymrZzCKT1GgKpHR8on34aVT8v5sZ7hc5NUxU3aLdFpjm6TswyDiNQPkRzdLgxHCU1RnnvTRbYsG",
  "key6": "5XGCzUaKBpKEFid3xmxBbgykijJUpeVs4zKtoAQJDiynnnX31u7EcTbLdCuTLpzfDq2VbDzkhj2osQrLSGL3rzEH",
  "key7": "4Q7V1zCv7EArnAXcoiJWPBMkMxLUsbTENRqPN9cKKCn4Y6UwawvZ7GgdyDgydREKXn9LskpYJL3wV8Rr8Z5HhGXv",
  "key8": "55dTyR1zsHZq2d2gSGkkXEypPFnHazuZfovfmaYC2t8KNnyh3E9Qiv8WGuam3HAjH4TyAP9Z8vAfighvmMAtjcBH",
  "key9": "4mYsV3DxT1bXznQzYeFrp7CFjUCP21m2jG4gTimJJk2AXzjWeBWUHdSVZ6MdsoWpHBRxPrBQJ7fePG3qFaPNAgwh",
  "key10": "3UHh43wM2Q6gS4jujcqMR2GoqoUbGKnM5jJPnZftfwTriGd1XNX9KBCgp7wtLiLsMeFBVsjwDK3w9j5XFWcPUEsU",
  "key11": "3SmPPUrDkwouwMUrJfybJtBR5A9BJi94pj4DK711tMdmsyXhjkapczSk1bdSD2LCrzMhkiQmbpxgnwECjxu8kbTS",
  "key12": "4TN15EZKD2gQBcM6HJDXGaoVqp9jdet7xSHB8Bm9RmzDU289mCKDdJrZKuzcFH4vkRV19JrBeDE2XgjXfboDUBbF",
  "key13": "57AsoWSGafUhxj2hDoz6vmyLFAKSiroptU3LV4mre3oj9mwJWzMCBiZMAA8dcQ8fBHGjKCnpCPxQAz74TbnYVoR9",
  "key14": "2oJM5PqWAq7sYA22Pbz4oRBDLiipUMDA4rKREANUWbrTLAAhBcfPfWyPzxTtVcBMEuLJ8yAwTiyHwVw3h3bAo19c",
  "key15": "4TddoMwppruoHu8i5EWtuZkAbGEBti9uAW6tsyMRbEBHfuZgWJWGZDaLreyyZciMtrrUxxVit91nomJ6QHTBbWW9",
  "key16": "4kL8z5aAbXYG8X9oXFVZwh9CNPHEuyTtdbpAMNUfSHkdjwnyyzKs3ps5ba1Df8SgPmEkCnWbCsmXmWwzsP61JUPy",
  "key17": "WTr7QgVHUkf3HvThxmZ32DEENUY689CiAPjn3nZ3s3jJLNPNwXsyTxtNB8WF8ZXJT2MgYWZnZJT2qyDwhEh5eLA",
  "key18": "59FpUiFzYbRLZjqNxU72nLftpnh5sHoUHuo9vgRdy1sZxhHU2inyMCe6XouEYxuSbDJD9vmB2P4aFqsmNz7T5Tj5",
  "key19": "hgFB8JrwwZs378ZRcehD3mR1KsVZJm5rHHnLcum4b5E9tpkbJkFx4GDFPCmj5uGT79cwsFngf7mSsDKjQyp4kFn",
  "key20": "BasKhdQRbef2sVyHBTyCYXhgNqvFg1TzF8oSygYsLC5hmou1oUJdxrpD1DRDerumpShNCD72DBzTbEvDnL7CoUE",
  "key21": "45AvPtUYjTMmCPdUcrRYE1zf9vVfyMHa53jeC3eRN4kqvuN3mdsjdrJAPfrtzZDjh6i3AytRSrG9KvXEqw67kqAf",
  "key22": "5Tqa8NXhZjJR6KsWZUPHfmbK1AaYsasDqJ7m63A7HPqy8vCSUCCc5apq4vdVhjRx8LXp8ELodpBYpggZ3mMF7XSQ",
  "key23": "5vMn3Uop9qH7b7Z8U2DKiPw6PBBjksyGzAJ9cZSHzpsUKWU8kubW3jNQ9MXRXC4AHfxHfMohPe1MbjeBDVZqfWvG",
  "key24": "5zaGTUSWsgEzbrmbTe4eDXTJ39RsVUL6ywQhhLGE4u8NXbuetAJDMNqohFnsvz5R8LAeENb1SDnbpDN9GCnRPhQH",
  "key25": "M3HAnfVSoC1JVmS5grP1B2GwwFgnAxM6nkVX7QTcCGD37d7VZu2E4NV2sBr7f7v7WA7WCcKVvLJm413yn3D6JCW",
  "key26": "5M5VW34RcWi3Z2MtyRzi2Q9Pte9JJh7Thh8AdLqUNECaLL2TFAYdfa2KWYMuCKjTBnEtorbC9eDmxBVPDtmxtGXW",
  "key27": "5H2KiYPDoR4Eqo32uiURGqWRsahpoK2ueTAXqsRr9xwwyzfakRLxXMcNCzugwbeHGNfDXYFuBtnGt9rAMjuwbRvu",
  "key28": "3U2TPVorHoWvr5M8dF68mZkPc6x6REhuiASR8KaT3FngdES7fNJjrf21tLcLv3Es18jq3N2gV7R1y4Hx1AYxrbr8",
  "key29": "M7Kz5Kxjb2LAGiQcn9iWxPVHu5a11YQcVemUEdz2CmDMAYMikvLQ23o2eAwNsvvSzhBkdsxdBrQoFma7pB9qCof",
  "key30": "5sGRduHp9cwfnCj4kUoykuCLh1PLquaNzk55RLvo7xu1GLFVk84NeE4md14yHQHkuBMEVnu326YFS6cduyP9a6ZF",
  "key31": "29zibojDfJgRSvdKH5FvEcju72v7Av69bJqwuqGuCE2HieQdrX7VfUD97raab8DaR13rCSDFB67atyGunWfn7BJy",
  "key32": "4TrpyRSr283efJMPqUxUjVo6C4DZkzcsGFS83ikVVtKVGLyWVwctKMErE1pKG8HrPGSAmZm5VN4NtwTRAqT5R1u8",
  "key33": "2CmaERmXWSdWqjqYsMqQQDncUshjvHNGkrM1Au1vLNijSjmvgE2unWTMZLCi4ex4FsBrJUxug3FctSfEoFBKsUZz",
  "key34": "3wdVUKxewHESRtrT94U2J2sKbc4yGi9RGYZ7CpDWxGwfpD1rv2PZ2KxVUqLVHxa8FgsJ7X1AsmY4P61UdLBFgi5y",
  "key35": "4TtPs42btYRqmjbpAYUSoiExzotUGZkGgiMVb2Jz39Rdq3KFuecTbAkim14kDRcuBZWXuCVbT5hRpWcTmcVkDDwN",
  "key36": "2QjXv21eXDnrR1CyuBab7xtk191K4uu6YqCtcRz4BafqfDf4991ZHecm2xdMz4G7s7gSwUuwYYe1mJgpuErpq82M",
  "key37": "z28K2DVtcgqjh8ws1ddT5YxUqyv3fujJuPvubQANWuEerzom4yUFm6Xs9kZ3JdH278NmGUzTK1y5s7bGZCeyfk9",
  "key38": "2715wwRZqMS3iD8stHD8N2wPYufDicNZDgY9A2YtVevTJ2NZkUgLD7zEBPsndgfRByXnyEL3gQtU2er23ruFjCNE",
  "key39": "4zFCTFj1rGeukDqevGWFd8rHK1f7trxowwvR6jqD4i9F9ru5d5VFVLwoTuUoqrx32kJpXrT1qDafJTqy142xtBuT",
  "key40": "3oGDg1c8ftSer6DWV16rxUX9qswZfKPfb53AjMuR5sUD8x5skC2jEEcvGU6cBa22agZMzEUCjcVuT2zm3UZWNWyP",
  "key41": "2txQxLfhv4KgrDQxfhj5vJsvAzXCNY5i6XAkhXsR3uW2tBY1WKrzrPEoXmrRtzrvJLomkBXbWNVGyRkMTrU8NwqN",
  "key42": "3AS7KK9qtgQFWL5nrFkodNLT3jPgHAXncXuzRVg8syf2dpHqpQedVZ1nD9wPsG3w7kE3EQhez5XW682qqEG4w7i4",
  "key43": "5T6xki8WaVcvGNkaTJMAKekcjZD5dmv2moufqFafeVR4FBXpnPUgBcXyoRVX4ckHLSZAT4w1RL97mntUYyq9iN8v",
  "key44": "3WzU76ei6KR1JREpB2tGByoQ3WdKzygSAuY12mG33LE3E4cQSCM8i3q8XeNEo8gnh4cFRasXsUKveunLCBsDn1DA"
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
