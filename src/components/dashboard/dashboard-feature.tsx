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
    "2MvSeetSJdGvS7XUK2DefMFhsu5Ew8UUQ5z9DVScK5roikwi8CNd93R6vc5jfoWMQ75s78M1pgMUj247wo2E15cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rFJqqWCWT7insbgtaxvEstMSSVTihebVALZbM2qts5oJAAR7rbXZVJ9bSP6KAXateWCMT7EaQiUkkjHyAyi2Jfn",
  "key1": "2Jw1gFhkFNN7W3HbTDjHppNg6tMfo3fdJS5CVzBGL6soEGUWxmJL4HjsE8Dd13Z9k1bdEeiMzcPMqvKFyRwDfJEb",
  "key2": "2zyBW1HHfseE2jNUFNZ3aSt7z5XMCGdxSSui4wzxPZLyy1JWDzZV3m2CXVt6mj8e2fV47p7L421ChKGJix8diojR",
  "key3": "3qzGmrHcPCvweNK7wFwmT2ijEDDSdyAAfWRPisYxVZ6XXvEUZJ3g6S1NFDW9VR8CPyN51STC6rWi7GBmD63oqNRm",
  "key4": "5pnHGYcG7ddwKSGhgWCozSqgKbwbP3mZedFzoBfF2uG3eV6cSoVycHGZGN1EdPk6HFTm8mm6s7e1Zc7RhdvwgKmG",
  "key5": "4K3DCH9LTSTnYZ6MVyEhW1GvrnBDVoJDsocsqc8G5J6ELWmEL34QrCwyV6mojCY6TKvak2Tp9rFwDkdTpj6jf6J9",
  "key6": "2ZaXgnZveo9hJF2QVJ4gWZdJi9y8xehx4WmyTyRiqysZhb8b7gr2hETVeTCX5US1Unbj86TVe6NzNgrLeswpAmeS",
  "key7": "2zDje8pegf46JWsgy6n3DW86S14cjtz7Vo2kUBgzfhJBSW7T6obs43LPchV2ez9brsHQ41mMcuEQ25y4sQ2JJ8fA",
  "key8": "33xddXkG2fsY9Gnzc5JfHSGeqxjZCsaQCMrq5ZcUsutEgArACf9zBv3Lj4KJgXzoEn1UomdG78s7J8qpPUTqhYXL",
  "key9": "4zpiCbeacfLeJX5YCXdmPSLFjc3wpecnwZAds3dW3U2yi2dzgN2pDMwg8rPjmDPQXsx9pMxMbUHcB6eBuTxhs1y2",
  "key10": "3gKNKvXanJdhnGgiEncrBUtQSUXSfumfhjUCdeB5YyVwd3DFu9wxPtc1QzxMfFyTsdUURo2kwWGZ6Ytqc5HqtVTq",
  "key11": "3Ajkwj5Ku7q9T46VRKjbFGQXrnHBj9JJqyRV8Nai9TevdchSSPazLEEQ25PdqiUNArGiMEGWaga81a9UsYANNRia",
  "key12": "56mQQnPbB6oPgBfyBESsTVy1EMHkYPv2XWPR8nSXyveqKg7GbSa6zZvrEj3wfghshCSmyvQzW18oPctsP2m9psvK",
  "key13": "4nHw6qf5huS69UYVDJ6fhr1TPY73fMBR7qN6SbvenUurSLWYUWk2Dkem9vPJRHeix6ZTfAkXg5HNjavV4Ab4hhtd",
  "key14": "4BCt2N78uHvBRJz5yM5eDS7kydBYerAmTGDytmpNvfYF5JNQFoSUFwhVhZRdmQTbY1DaHY6jUBfYeM1TmYAktd1X",
  "key15": "3J2vxHdDRs2kutqKsn2VmNqQ5AWLrH1ZgduHt2kewT8G73yntQNEdfDMJdZvkMYNSSuXaLxsFEkAi9pDsVWRqGXV",
  "key16": "2egp6p6QYbW4xCxZQoGw7XUdH4mZqmLyhtJY62c3QJUPs96F8KL2MffrPp7eb113huoRDs4RN15jGgeLCBVJRbzR",
  "key17": "2fUt3r2hBXxMEpNqMYR69Ghm4kF3cPz57uzX3ufnajt5j5bu2LaHb6AEPUU3uJ2uu9Wv84MfZydgfAHNNm2SKzdg",
  "key18": "5nrcUVnchzhFCVgEtZmo9WGsnzo59a2nfcWp4GFysS1mnGQoQbuApsdsDj9qSEMZ1Sr9kD4SgF3G8RxwsFNxekML",
  "key19": "3prFGduEZ249McKTLmXdxkzwVFGLyt2dzhbCuxVgYiVyxbmacVt119AMyAto9f2TCuNzSyVZ6uThbi8t5Jxp63RQ",
  "key20": "5RNBFP5oq7LEVXhukVhJLxZMhodddn38s1xkRfDY8RMtuznKfEeiexpbu3h1AZjH75rGjt6Vnip7KavFFuEE4kVm",
  "key21": "3Movu6TaCA6Tayh1D6JuaGu8ujhGv5ppMq1A5cb4QBDEZzKqyiph7KmxbitbHYPVj15Hd8Y7Ep5ziACrdTVeNALx",
  "key22": "2Jv6RJZwZb3F5dMt1VYnZeaDUveS5dBdQdchNjoR42HKShCYq3YAZxt6PKYySRTRVHDWktwzYU1ea7FQEwxTodj7",
  "key23": "3W1gcCJ7jDtmRZcrngjRVKJmp2KzCBaEoRFbuP2yvpteuP4VhrnSqTJiTxit85kLGu8pRBmp7UFkkxC6xrC2Yw8q",
  "key24": "yiCznAgQrP42K2HaMee5pyXK52oZ9H4iMY5BFXcKmKJnkQLLr9MsyUehKMQRNcwxFp7w6ojtSmTb6JawNb5Wk8o",
  "key25": "s9QnottkzKGQSbdVtQpqB7ANUjHTUk25PkagmmRbc9KYAEBtH3YC4NStWYmjy5jPCzqA57aXKQqMshFQd7iDTTJ",
  "key26": "5jCEqfAfveQnrYfJrG62EgVnygsyBfHhzUdNPXS9oUhgjpvz34ybjD84dMUKJ3Gh6KHhFPaND23J4sBzxnjK5VZJ",
  "key27": "3Ts4STBNpqWobdkT3ffrZGufVw9A25Ze4QUp8tbJ5g4PyHwTayDuimBRELY5zaUQH1A7HTxk1Ah4zDyXSvpeJvSq",
  "key28": "5JaAjE3tMC2ybcZ7nTubQ28YKh73rfA5sdCJEDBnHDTe2WdaiQyG23gZBGc7C7ei42VAjSGi1EvZ8QkNvnj2ahf1",
  "key29": "ewWZf66AKYdm91cXLmzez13t7Ycgf1juaE7kLNCpy2mjVqJm9b6cqHSAJtFbt4wWahoNwSWrnGHUbRRxujJ5pmq",
  "key30": "61ha1A7JjRjLFFrz8yGESba62VG591PbbrnrvLJBvhJ6Xj37Y4Y7X5x2f4fw26tro4rQDZ6uhgASLTreTSu6g5uU",
  "key31": "4NfLf41JNiDwy4EkmJKuFR4zYiR85vRoELANt37BrWfwomZrKuW4EN4kQLMLUWa2woPTSu4ECWSW5R7MSnYW1K6P",
  "key32": "2uXTgKZ3BapYSKbpYmXbQc4KZjVWSND2HoAQJToutXEqe2mXYX1DKLe3z96N4LNzNyGPLv8XU6A5KR4rwP7UgvpG",
  "key33": "3ZjdBPpVgnoiGJakYgwC61hezfhZZd7ZhN5hJDiRU2FiSEGHkcB35vHSUaEoXzH6t3raueZiwQRpkGyhJtbNKqFi",
  "key34": "37nrvPBUTx6Kpa2Mhdswq2kGLksfxeyVVWpQnEhyPrNLLeT6zCE49gjTyjsjtrhcSp915jTM4QhawhuRM5gJtCHm",
  "key35": "43yQeQC4nvBwYx4wo6Uj99EpLkojq3ZLxiSeVECQVCtErre2bB2t78JNQVazBYxZ2qPFSvrmLCRVezgAfxa4tdiT",
  "key36": "4Zqu6juF2VwHMvev2dGwBx72a7twuhTSCTgDmM9ALm45kLG4tHKmf7kctVFVimYZ13PXiPA7Jzz8MYhDrmhRESfx",
  "key37": "66yJYefep3RYHyfYZNeNBAm5SJko8NjojDwx58WVEj2rcL2gcZyf5onRGzT6qLPwabnY9LLfWdd2HtV2W2fAXoKn",
  "key38": "2iXaHSF5vchyzFUQUJYZPQHZ74q2piU84JE47XazNHgKUPAAw4byaGKdSK2ojyGhSR1LCdsxT2F2wZaA22eBR73r",
  "key39": "54AuqQqJTv2pVzbatycrgq5qXLkyHXKmmQNDeyGnYe5LvkyAvhYkxm5xboD9LBsTQYeqGjRCVoYDvQZ8dftLirTt",
  "key40": "5zaAkEAN1rWDKBxFmAzW32RMjHCk6WEsF5XKomHjHkMc3aa4CxY5ZcH7PeEApKHMBM6rMwQ5H6kdD4yU8sUvet2U",
  "key41": "4Q6RAgx1sfztmVE2gstXopQTUVQAh8KLLVLLvMb3ozEts4gXXqehDuN14XuADRz5zYqKFXhK6K4GdbJ89cdvr1Ge",
  "key42": "2cf4CRfzR7KUAKdC2WuUbzmkLyiKzBrr6jRvpAndSfWt6eEmZP6geYduw5eHckUHTnco4GvawxqhNE3hZo1MjWsJ",
  "key43": "4Kg9MCLxjZWGbFt5h5Ue4nFkUgKAfa5ztcdkbDqfR5DnnznmfLDhM73MSwTMHgWsaN8JPpqJ4eRFGTWgWK4CkRQc",
  "key44": "3xyTzd18DSbdX5AaiHAMk4BZPqsizYe3cWyjG6yRHzKNyPJWiww6tUMPxQdNQXxQQ49pziK3NbRfKcYog1uvJ6aW"
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
