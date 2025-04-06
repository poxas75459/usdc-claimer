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
    "5v233Ty6WGyZ11jbJiTJsw3UU77CaZdvmcpAMf4fVMnLVAqiMoSoX667Ct6N8nofHaS6DFHez1BXJHp9E2T5KQXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ksu5oe6zenNreRpMiMfJBtzFh4L6L68PDVPRvN15umChK2YwqR7cakRgFMiiDqeNMatPmhvcjwH9D8dxnSdxCsz",
  "key1": "3UdXaRtSJmCS3q2SL5rQgP41jggsixExsruwwUaUSjw3V8CLCoGQ4NhuHBDFT78yFkcYiM2CznDeH7Nj5upEMPSk",
  "key2": "3CYTGoeJmrtFmEyxYuLcXZJxCNPHxqWMxsLSFADLGBoorPTND8JrDCEqktEFEbdWjd3T2DEECK9axmvnDiVkDWsx",
  "key3": "4R2gZXoejeK1TSd5frDL5KH1HZePggRwjFstUnpP7eZnCHye8otaC8giwfa9ERHsjktKaA4LyfoZyKSbf6mXYnWS",
  "key4": "4tW8EDJ2fR3krttYvrtv4oTrpdHqQf8FTrHGYdEoDqHgyrmrwRUjaEiH8YBXuDfZ1LyKF9yrByFyXFffB2ogsKSw",
  "key5": "3xEBE7mUsfQ69uVTavS3dCZzJe52tz2NN8ihgbe1isZ7ixsEpzkfMjBP9yYZNvioeDczHEbf97pdgw4JU8Lcwuu9",
  "key6": "3snwFRTUmNoV7mZNqWhYqQLecYCXkWUhkxPQ83fnNHkaLm1z4cmQvhPbqP5PAosSAAKqtim9pxMSb5u1shoEDx6q",
  "key7": "3yuaaUn2VJXpFL2MmF1evDrEWoBEQt6DE53nDuMMdWGcycY83kMKYU5kiZ8wf2Zck4coLSofzGxqET9E1K7uht3L",
  "key8": "c1cfq5PEBNXKySz6q21hXyQrWLXRFQdwxS88kzWjEBYDcAwTgfduw8TxsA82cjmxq9wFty7KDVP7sxBjTHaEQmz",
  "key9": "2KFb9ctnQUpjXjx4E4Xpe7YJqxneq6oaVnuzeiXYPfbBwUiZuYjhGwx9QwSMyzC2vCNrxVvPVg35AoxQG7XCYrpG",
  "key10": "4Ar5zzeTiedT9qYcimCK9eadZnMM71egQR73HMm6HTedQPuMPi3iZYeXeNb14bisZ4z4Kxr2P67EAUhZBpjHcuhd",
  "key11": "2iscDxtBdiiMW2Zdn2HhmEZ59DrfwDucVpLrEmD1gSrakdAUL8tb3XZQoiTvzRREXuJUe9nmn4Wfo7sNbQHvBxEi",
  "key12": "2QW7FQoGioLFwVkXhYR8ib1yT2oqQomUrSWHdQ6oFL7hTm9M95ngmcAFN9QhhPfdBX1k2e1tYorMpavCUFow4zQR",
  "key13": "5xLch2Dh9skA56BkT3ePRK3xEzvf4KTXqWskDnDqbdFJWdRjB7SamkrZQc8b1F6Br1VK7hZ1zR8dFWqb62BoR1Xr",
  "key14": "2WY7xzDZQoL3359o1hKgdwWGM37rCyKHhCx15T34iFHPKxYH7RN79axNq2QUXEfEuYaQqK3SdNna6QPbu1dx57XP",
  "key15": "4RASEiNDj7KHZxi4Naii6QkPjxpbbmcAa82aU7hp8cZqQsxkyqWpaZahrn8dQtSLGrjxvWUMwUpnST4wuwT55nhn",
  "key16": "51hB8XG1xUf9c3GKJueeRsW9vXXQjvimB2PGwJJSuqKPSh5MgKMFZLAboQCgqk1apEMa3tEYWrUKh9hcumVRn8GH",
  "key17": "48wpjMxy99krW74VKqw3cmJbkMXzgH3qVf51tKGJjpNCMbxxJ3FYvUH93A6vcxPDL56z4A7ZTHAxWTE1aq9kTmxj",
  "key18": "3A1msopkHaqwmHyuA8tXojh7N1jXbsqqZGsqFXAhCtdpMvgnYSuNUXJz1FTizR9dWWnNKQta7KDdhkUKniZ7ZN5k",
  "key19": "5zumnVRH754wyr2P11mw1bzb3tHzhJMCdT8zvdoQzwgYGp9Md8jiov1b2wixDfxZqgqCTKVChcbpFMra81JCbxAa",
  "key20": "2uYdor5zHuzKzfeikRVaB8seW49oy4EbMvVQ6XC4xXVXVJdLfHguBw2hqxxnJ6acZSRH7nKp5v7na8vznkLkFow2",
  "key21": "3dwym4woqND9mC1Z6DknmMRMHXBrEyYK2msQPZdcUF619KyYFCS72MUGvyKJ78huDmHqkqhHPHQjHn9753wL7txt",
  "key22": "2ZvPGhMSUirjmZ3Gu8TmV2zSD1FBRNJQ8AEdexPV3SEhiYGqhQHGsRkaqB164CGD5n2j7ZVg9y88KEAF1Dezq6aL",
  "key23": "RynmwPEETD69M61Rqx79qUrsv1DNazdt8imjxfsL2YrVUcwNKA8jptB5RczD6qJyMhxeKFAPsezwkFyRDfkZtkB",
  "key24": "NVj13k6RhyCXZQY77AUokLGkpHbEinEAqhsHYxYsKDs26uB8r5fk3FXn1w5QYqw91W8Xm2gJD7gr4ZNcEZvfEu9",
  "key25": "3eabPGm2LChLhZf63GgWo9mXUVP9xgDSeRadYFfWQyaEgux4j8GYksFAHFfAPwa6EE7r8ojsy5dMii4797r6ew8d",
  "key26": "5rDntAhjhocsaBCBQ36b2bGz8yuHtaBbZ6hmHqRjamirP2jPCTkueCy3bkEuscjGE5hMUkmUC32WYd9qiJnj8FLk",
  "key27": "4T4RSjZWe2T2b31mKixyDJDPritWksnVMNDTJBZ3HVyTvMkmKKooBFSFEfG1YkeHRHQfgprsbG8HjpZvqWByeXUf",
  "key28": "3Ut2RYJRZpYtM5GvyXv5xLeoMaYvgiuwhZRUvnV8mwpmJWC35kB6HNDTo9fhY7kQWi1BFZDkawewVTpebjcETphv",
  "key29": "5XffmdJhiAuyw1Nc2uSfFi8ufGFkKrCKSUcxhDTMKf1mvP4CgvhDhmYSisfh48gxy2RViryFm5vUsAQ4tzgKjR1t",
  "key30": "2i7nN7nZuSk9hpehsWpTZ34R4Mwq8ZQEC8Paz1w2fXRDLRnEDQnzFSNr4iNdr1fg11qCrTYmMHu4B5K3my515qd5",
  "key31": "284yQeiou6zGEFKbmRZhstmZmGWpUHUeiQr441m4kWCDojGJn96FudcWTYbRXxtwJLSpsdkTWtMWRArWXH1EcEh9",
  "key32": "4r6wdfp4ztxyaZiiRBXsBtAvfrtD2Ax9hTkpKqhyGm3fHaQvCvbVdBpxDgPRJVzYJPdEcavDJG9ruLPke7vykjZS",
  "key33": "2puRc1mn3h84CFkX3nV5W8g4ohgQB8sGrh6563SE43eLVTkgMJ7zxXDg4Kb3zNeXwdWFZbBYtPtgnvuSoVZb7bAh",
  "key34": "5Th8CcfEkqzMaABQjABekGZZRMHKU6kurg36TLGNgrNNceR2sZZxY7mPRfTeyRa2VbLrgFwXoG8Z8g7bVRiJtixu",
  "key35": "5XPWFexWho649UWCNnEHuQesFNNE1H36Tb6sLU2p5sDc9MH66xJLsue7BQppJ6KxmyzisVkheWTJnJidzP7CZjAM",
  "key36": "5ZM9qhwMYvVpqCeKankiTH6RjbQDzdhpWwo71Ez6JDzXRU1Qe3AHCYmub5oRzFcj4qeqXT3vrBAfzMT3bQ4NVudZ",
  "key37": "3arrsQPCvznTP4ZoDNfZkpJkMBVnomqZGE1xXgHKbgTREiceCDXsgwmY7Cofxbo4mMi2wY4MCFJEQs6uE4oDGMes",
  "key38": "41Zz2AWHbTu4M5G4b5obdnwauYNgd2V4HhxpX976E4QjK42ud3jqjBzrfX4dqsLRXNvRZtzVs8x3QEZVXpYTf8Fk",
  "key39": "39tzSqKMdKYdMuaK3Gay8Mfiq5xUNCFgahqgjokjpSaGeCgx7uEwPhpeau9hwajPV9vhD9pZaL2Mhe3Mr7ucpe5Z",
  "key40": "2SdaM85pJu3jEnaPHWyyFvmTaAxZ55ue6k2AfSTqHQxX785qLZYyEnTTDGsu4Ft1wxJnQ3WcBVeMTw1MPMTmEfX6",
  "key41": "2gZrEMCJWRHDPhbmriXU7PZz5eMSmhodt3SYrLvLW6ZwZ2Wt9at8vZVxC4RfHb5TQcGwJGVEtmeprSJWMPLbJpqe",
  "key42": "4qB8kYUCEUDwFQEHydFs5SSsJ71MEuUx4crHV1HqqhgQsDvqF6itQ6bCmiDrW2n3K7UCMZF5JNvbbBmm88s5mb4h",
  "key43": "5NTnZAsgcAXUpA4BAJSGN7KeyEjP5gamo7fw4G9bcgBW6tEgWmJDEoJbSWFDqy7BKJxJ74DLpXtWRuBw46uSebz9",
  "key44": "5FDezdo84t7oq6MU7Zm8oq41yqSSdLgs2BvJmjXLiVqQgqqjEn2iH6UpKQEYHbL7SJbEZZquUhaVMupu621FAKzE",
  "key45": "3Wcp2izoa7PwJD9JPDA9kA76amEHmQaMuJuK6F237nesmL4FtUivBxmLvtDq6AH9H3mDR8jsvgSDhJHjCoBnn1LK",
  "key46": "4p5Cg8xHi4nAFxNXB8ZZpedFaWLWAK3PbdHwbED9V8mrSkApCiHzFh2HvqkCwo6LWy72fsamUp9hpj1Jsbonrgty"
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
