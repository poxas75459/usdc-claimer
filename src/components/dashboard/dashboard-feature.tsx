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
    "5QheTzxFLVgpBTJDyPAJCv55vFqkZRmbM3dE6MEVuFZDczTvZ11pHD1BA9DkFNkfn6Q9Rv4TiQ7o2r8x4Eaz2Nse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzmhjHM643mRjMEVwXACC5G8rhrDAdS7XeKRwprMY4v6QwRVBZmhrBgDkELt1YeAtRA9gUQ5CqHnAA8mwiPuooM",
  "key1": "3hq2usnmCb46Cmdwye6MMG58bmkRHFjkn6KBwmeqHoMqFzetUMnEf65GDBCMFH5n9bwM76nWUqzLTLXVDb4n1Lsv",
  "key2": "3ULGT57zEhXV6dYLpk2bgX8vqwP5xEcxVE2vuz14Gfo2vZwTYPPHtDbtb1gfZmncZrDu55WVF9StzCLsxnqVvu5r",
  "key3": "2NivJsMXm2zg7giGu9BENLhQs2dkZY18K4pSdGFFtnQknrgJ4t6azdFBfv9U9gbTeJMFpXRtGR5dLeyLjMAkNYtk",
  "key4": "nmNPrzCPdqL1gDsnG5kSw6vsg9UdLRGFREPVNmNMwL1uFdKRJDTcDBLYkCcBcoqq4BvafQhMN6Uf4FxYYsRHQ9v",
  "key5": "fVXCzxyUpD3phqvKKYb8WciisGgKnWmKngztvQET5p1hKXJx2Y42KV5ZifS91iur8US1hCnebSyGe4TYjb2GBju",
  "key6": "2gb4K5VpTPymDQ3pE22fUsRestFoERui98HdcaJvdL457GeEMdwqBDLjrJx19LjcbX1i31mM3wA9cLkzQczaPu8B",
  "key7": "5VafNX4uUxH1fxp53pRnLNMK32MciTTTo3uS8drofRBUtiPFWjd2kbZYfsFDjQ1BMoSLwxymo7e6UvEZmtBjSYdZ",
  "key8": "2SUbH5vn1pSYHEQmpM2yG8wropjHMEbQnej3DuzszFd4LndgNphiWz4p7Ze8scinUNuRYcWHPx5AcrCqQXpT3utn",
  "key9": "2WHSSY4hHMKRe2rMEsXw4dtRkcp4A5EEzWgnLsmXfuZunS4Qi7UcukZNoNZfKMhZ8yM538VJxhoGZwnjFjxLmtfn",
  "key10": "4kRMBq6tpoAPd8Ugim7nXYtM3mMink8BwhBJyAAwaaNxgthCVmwtyVpQMkjVGpPjqofEZAiLfsKDwg7r3EHNYQRF",
  "key11": "7zikvcoxpgtpYNYYH8ZYoiTARveyqgf1JwzZt5PL4GJYXsd5Vr1DSy6K9j6Zn46d48wCCimNW8K261ZfxLJhT3t",
  "key12": "31jWDAG9d6y1H323emAji8ijisJWS4DNVvfsVuCZnGrLHuDPhS6dEJnxtiYyGFXc7MctWktFtsdyXxTTqNZZvPmV",
  "key13": "391bYCh7JnDJhgKe1fC9X9tQViVqipoEnsaYk85G6TqATLQZ6PYstassFxgvZBDg45puMahdQrTojzmXrrZqboi7",
  "key14": "2N1GqNTEBYU8JBsm8FBUFGUoYGYKwhTvr1YfVcZDfp6Un7ZYB77gMdPC2HADYQAcRN4JZonNnsvtMewg8Qx4sob5",
  "key15": "dsMhrYMsH7hprNJamoJaEW4r1vVfDS33ZAXzAycfL52mtfGdkaSCi81LfZPzhVWZEu55mDR1n9ehGB1PTHU2uve",
  "key16": "5RuPefqaBGqTnrSspU3Cw56qbSfCGstJbp7cjzz1uZejTMiaWYBDDzigVvtiMXh26nQpoEbKeDMknvGZobxh1eHA",
  "key17": "cJughe9uh6yYgKXd1SwFrK65uuZ44YM4MJgNthKbRwamPmyFf9VxSigAiRJ6p5wKR9rdEttPDFfMJWyTTtNeTW9",
  "key18": "5FL2ruo333VCR6XoyY2f1Zsw3EeiCJ8ZBoKkZeGqE1ouxD56pjZMqZCkqFTkQt6HsK2xQbMrn4ayJNRJpHzSwWxp",
  "key19": "2yTL62RS1DFW3PB7BsYPFfcb2htttyGqvy2Mg5ZWDWujVmbKcXmVrZKH997FxqiGnfBzPapZJQ9S8m95ShiepUL6",
  "key20": "3i7ZnRJQXiP212PH5G1rERG3cjSdWjaLAqeXesXeVQ44E54nuZ4FwHET5fZoHcqNLJAC9Ax1hwNWjykTiYrpwfGc",
  "key21": "3enCdn6ciPGyBaDmrsfVM7E9Xz1gLTuACSvsBLRjKajEBoThUey2ZAtM1Wvq3hJShK1s11hcSTJv8R7ge8hJjVz9",
  "key22": "5ifCKLw2CwQDs4HJ5ytQVNPiKDh7ZPugXjB8woN3P9ddc5z46LyA9cSfvyQahogG5wBm8BHubDvAd7wVUe3oSKhr",
  "key23": "5brDDvzC9xLdM6rLDYBMUSr7FCjTYoDA7axHm4UbzuWtrZburzLVSFTmZbDcHd3bkt1wNwoneChrkZP9Jm1BaN89",
  "key24": "3bazNJJHz4C5F76acpRJtnxSyTGJPiKV8jv85vXWPe6zyYz4MfUF3pHnV9x7FZh7XajhjKUBs623122jiVCPRgtx",
  "key25": "pfZ9JXfyuu1D6rRestny1wiYdyVxAqJ8wmp8oK2KzXLdZ2KL9nWHPGFN73seaGax1xwejLa6jncneK8AuJ2fkir",
  "key26": "3VGjc8w4tZ1ev4Uo57tgFzyStL4VM5Q7Hq48xkGguoTpFm1ZEUiC3bWaPxBUV533fLkUWkX85FS7RKKBBUCkbRuz",
  "key27": "5i99Qzo5Z1sTNM1TQ1TXhdqDcsK3cwBCRxHn4iob1dSPwz8zqoZbe77cUf6g8DFLJxUkwXSgc6zvCPCN23fFfo22",
  "key28": "4M8GhVjBR5yvYef2u1RHwNbZ6cSbNen8isgieb78aNqihyRMqrgfqE9A5hivDeYs5GA9LsMi7ghpWLXGYGmjeA3h",
  "key29": "bwo5G3nduq8C3Q93qTwFpWSbknFRRrTrAhpdPL5efoC61DGMrmWG58UbMvHCHXX4kLvDDyL3yKSq9rVQeSmBRQQ",
  "key30": "5hUHXmiJcCDLpxxRxp8vP1yj7xWRQyGcuFpZV2KoaHaG2SncsR9fevJPq7uSuCxixjWFJhurJC1pYJBVAxXTHFDR",
  "key31": "e3t6gEUAEyC7anMMNK6PzLT6M5wWFv9byn8a3JEvqe34WQ3QDbmHLQFnxS6ihYKCDjqskEYqPUkfRw3oz6A1HXn",
  "key32": "41w6MzQmeKiSmdTsBdocWbhTJ4CXRFK5P39o6ELKAiQ8WJZyCCm91hvgC597WVhXAaFKmkHhDZjTTPSFR8G56ayJ",
  "key33": "3haj4BzCPurW6Zay5SE47wcLvo1Pah2psB9EiyYJCdjRyJSrNBFEHck9wES3b6TvHSZu63eC2qLy4DiW4NinGkHa",
  "key34": "2h6pePSwsMuMdxxt817AQTZpSwNehyBoFXpmFy8Hys52TutRUpSxRopSnfTsWfdpMzZugfCshKwnzdzcaPqzT5ky",
  "key35": "3k6Frb7gaSsNEtJkcctjn3ZkPsNtpDZL6tLsq3KPvYAz3mZfAvcetu7ipDDUbjQyhv29Q3wjWRswXTSFhtchNyX5",
  "key36": "4BvWR1zBvdVZVvpbXKb3neLrh3UQV4zsLgJgGFgxikNijvAnnGSTUgrXkCnekaNeQWgnzcZXyHsd9zPDmD4DK9VF",
  "key37": "4A4LhseG4de2P9MhhEYFvLu2Z2qVbQJrkNg68To37ZjkqF7BizLHueXoCH5LRT2QEoN6Hrnd5dM9P1wjikBxFWEW",
  "key38": "4EJWGqVbxoxB1nw3vVJWzkaRjW4E5mVNDTgSaCvkfW5hC3oFj3zNQ1vKtb4ihHjHPedjCUoYVTWTCqjVnvwLn11J",
  "key39": "296CbmHdY9jVYghzE4CtWpQ29Pamn93LJBG4NYv7mDyRtsJ7kFEpoaBeuAiMaFZRAx2PZGyu75fkkYZbRKG97jtS",
  "key40": "2HjcTr4eTTNccxJdGPV29RYYTBCvhjZDTmSyyq7vJotSiFTqUiZn59vUEx9hite6RM8CB3d7kCrUHwSdgT4zq9So",
  "key41": "3ci4inQ8itHe9fZUZcdpyDL9JUtw1ocrNwHVUUwLEzqnBZSaXzwfWyxfM3Zgp8KK9SGWsWdX1Jf3UuaiGF6d7Hr6",
  "key42": "2WWWLcHwmsFKR1js478ziu9ZCM2xWc3m6P6ECSmbqESBWrgGCQgghPnAnQosqaA9rsrejgSeiVsDFYiuhwdooC3f",
  "key43": "52FLAmLBnRkH7e5EgcvsHgvBfxsjrU89BL6zs8finMxPwpPKE56PECh1UyKoqpcFHskGmC18zD4vZBaEJooa2Ymi",
  "key44": "2QvNgDkxYiJaHCE4dJgxcG1L9Fd7fnBzC22SJ5ennvEcPmBHk9qLeBPS1NMcV1YMRXLPzLSy1V6qEEUK27zZ2j7T",
  "key45": "S7Lx9MTDvrUxz4kth2ynmasqBFPjonBZTkgNiRUEiL394qWvwBfPz2ghKUKznqYMHkBJr7jZz8cgqcGpHuWAp2K",
  "key46": "3MFxAswXMP4HENpqkVXt1Vjc3ircx8iQFrtS44JQkrFQEPb5tMjpxeNoyMyuRh1h3WmZvBr5ZQe1ZcFhgzBK6sjr",
  "key47": "4mYbqh2mFhiTvVpxmvBe9Tc9emtwyb5HMht86DFPmpmfiGCMQ2BWBR9tsh9CJNLxF2VFvLfJ8z8ndrL1St4BdAKy",
  "key48": "29fvaPJzmDvC19pM23P7NvxHxLG7Ua3nAfPowoDrpcqFmXtRUQBcJsAg6HuFR2jh7G3aMvsBvYAyZf1A8AdTR1Hg"
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
