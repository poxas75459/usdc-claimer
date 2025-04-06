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
    "3jQuruCbgxQkXno9bKq6TgDfmBkAabAEF7jhyaRvP7uazns2udjwGzgpHARQeL96c7xLRf8JWK6gACLa9ceaG8Wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYQrZjUJnnqAwCpMozbbaJA6Qf9Ksf1v8xiv4hGaKmHGy8tQpQiCS9snYdx2hYvj5pJNtmC9skh1G4nBKNmvkdF",
  "key1": "37oWbXRU28kv2WNKPs556k3JoZxJ42xQaHT25jKFAPy2DDoJ4qSfEt8LHsfsvtwM9hzvHiHxZFexMhKNgXsaaW7r",
  "key2": "qp9BYKQyUmuomAKPjxXRhSgWkwwsneHXDcqtWteaTCukov9G7W2VrdDrdXd5yFyhDyuwBVKUJNU9YryU7HsnCi2",
  "key3": "4uXD4hdeB9QaVgLNAeowDN4gnuwQAPMAaYUGENDSwPG5FBPacekMW23RB25SXdnG4YESTRW3vS8g7xYHnk7bSYTZ",
  "key4": "3TwHpBJDBRDGSAjZwJvDiXLZexSeLtzbASXuLZHJ7cv2uyf5xNMQmTx3goT9kLwWL8PSYqe9hfu3df1ccj3ERYqa",
  "key5": "2K5jdFoCR3hLQcLUvjrtBBAWtiHRvBjwWpL3wcFaQpM2uc4BEFi37dZQ6usgAsMZRJ4rKxMFDDWURTcMxm3tynbs",
  "key6": "sNxYq5hjdLmpqh4jUFnmnrpTSnKniH11vA1tYVKa6NRQbyfekq2r9rc8h2piis7GD6398KagMjmGjv28zBqDn7g",
  "key7": "2e4edKP4BF69RJK7n2JyyCSBw1iGNAj1uhns8dEfAJ95BpqLF166nZU1ukbdHV9YCatpXoYdibG6HUiQ1m4Ms5Rj",
  "key8": "3HFB47mBALEF22b2NUGqruabF3psVg6qGiVV5sjzrMUbjCF2EtFiaQmDn1JC1w1DUP2JaZAbGf3vLrxjLiuJYHZK",
  "key9": "iSKPbcuXHwK42KcQNgbjbGQvC3GtxfXMrxmncwSMuHdhwA5UxajKeN9YoHkQ8fJrAwWEzXQWw6qmoQJLR2h6f2R",
  "key10": "4mEB3eawmyDQJKU7QrE7jF2QKZYbB55t3h9XJGTQvtVtAmsGxGaYS7ZEafPptm2fYNMnbMQvwN76To55uJEs9U4s",
  "key11": "2wyBXBGq3wjxF55NU8KEVjy6EFXiJ27RSUbs6Qiy9Frka8mZyZZegZuM8rZTKj2fMvAmpMaxXghg8SdXvmh6qynJ",
  "key12": "5acSSQKmmkTSkAMfGozBFy4ZyVpiHLruXNpuhJKbMqCAzioWhHcU2FDynZL3hL9mk9nMweevpWXkbbMNreYkzoyn",
  "key13": "3bWKGphEjDcsRJuNKmQmvynHyfSAnbwxowhcqGNvPRp24ivW6zvi37E3jJ6QHdf7C9e4JPzFEeS1xmoJHSBq6dBg",
  "key14": "ac7smMXid5Y6w4KCZanAuhca52fYXVdjDDPJU8qiEvubwJpvznmwKze3dp9Yq9ugycQkN8kUM6cs9Dyf4i7D8Rv",
  "key15": "2Guxwrh4KzVXTqVvSgCG9TYosrjXtBsWQuceXbCuBBYU6C59rkDUm8592t6pzeeYvtAVebwsia5ThxHWvtgUFSGo",
  "key16": "LLgBr2YfJBQLakss3HTzUCErRJFoysnnLUDk4rePYY3A3LucrKyt5mbCE7DTqimFdW8agpUT6noHgshxoLt5EeK",
  "key17": "3bETSnZ3ae1t55cDPxc4yCnfeW5hWpn8Xh3ZN9ayLtKJWpXpEC4YjcDCohnMsDisrtakCTieAtLHSYxPkDrHWhdk",
  "key18": "31Ts71PaoGtQE4rNbvPV9eLgqZw7CxenxPpm3QdjL9yc3vmtV7gcXtZRbXU11hpip2m1k6PEeYUnEphN8V7FAhMQ",
  "key19": "2nUk2m9yJ99VXGYDh7ys1HQYbRLTWvS7NpgU6D9HsZgCVGSk2hWa4CbcjGbPRph2zEkKNM267cAKCBp6HuwzJqqw",
  "key20": "2FsyJnM1m8dy9F4TMkY1MWNBSaMqNrm91jcgPnddouQE3eEak9HtzJNpaeNoc3yPbX37G4wKRJ8AwUGFhxR21kpg",
  "key21": "2FNTiK8YNiMx32UMmvVCELnEqtmx2aRJ3vnyAqT2mmA426AaEq7NgaPq3quR9UvctaqxfiEPK2UEGDVDAbewMeAr",
  "key22": "5ZYXznjQXF6mnhZBN5s1FRT1XQZVUZc9XuZsbMd55CyDMBWkRTLHPrtggcgMr3G7hYGE7ucCoXwm5vVt5KsnRTWM",
  "key23": "4Y4b5rZksYz1TtQ4bkYGPFVxZjcScnScZF5a1KuZ2pmcqHLxRtHN3tKLPD7LNYCFqgCvtDLeuVTvJnSmgpaQc44z",
  "key24": "2rbt7mH9nyjb5WZWzJPEXakUzZyfAiXauEhw4n3xTFtdjnMe4xmgi191R5qm5VRyaaDVnGH3P22XzTDAbXEx8Jye",
  "key25": "63wFvba9RnnvpDtCx5BzGKfCnyTZ9YabAd2pzg81Mn2QWwnGeSr3F5ToTeirJAPzfG9hZTzmbQQKQV3mpcHifDYW",
  "key26": "4WE3xHreEXyLzH6kHHQLJkCJUpyEcKyn8vxQyfgCCVRrb3Y3K6zZF1uJiZtGiPMt1QGEXw5PKoRQJaJxSrxZdpLz",
  "key27": "5G5MFHFS1QRuVkxkUgZWzszie6AcnV3aoWfXVL4xQUmMkeUMbKPZVQZNdrCY6MoYYKp2QfMgizPBqQdZ5hJc1G5V",
  "key28": "9ra7MseCgeBcyzBoAXBBPw17RW2npk28dobU8Vmze9ZGugBXxzAEJqDwLr2Mg3s8dbDZaWw4L3WjJDnCxd2yLSB",
  "key29": "zNrsuJM9w6YLYCR6pcCb3EWdj74hAkJxPH6yQgsVTyBocfPiLCiTSbgL3uwr3mcq9wanHJVC9NgDwA3P9cnuLDX",
  "key30": "sEHTYxcpeFHPTLhe5sKZK4ycWnj1ifbFk3W3WyMpHrsAugwQoNF9HZmL8jkZdtABsv2VG7k6gxsCvcVkoDbaugQ",
  "key31": "3mu64VysQDVQFgUiVFy4hRf8Xi7B6VBVGjgKfa43rfDLq3Ben5qKB3RotyZpd3u2uFPWVz4rYcP1acNuY7TzvUcw",
  "key32": "ReG1UBrUk7YLAmpo9yVBFJhLrJNdLtw8EZbayZHbaxbmRGRgmjni6dPdApizQEN2zrHJUMo1MF8PrkZ7p99YkRn",
  "key33": "3RZ45BdgDh1HaKkWenXEw5yMLUqHaQXJHZqzvJSZRuK3SJGJ4CYWAUetqmEZE4zzXpGCXUzUoUs9q3UjLxVe5g3U",
  "key34": "66MstazdH2HCcaQ19rsgGXJ6VTRD5mwg26Mv8TxkYQSJz5vRohWzZMYoW4QG6oBmYyrSVawXwhofAp2ZeJHLSTK5",
  "key35": "2X6muf1U8kPA9eYkkKznQfRXmaB96QLMi6uVqd1URqdDWakL9hcV91mkBZzQXKT7yx2Ld7GPxrgYBtqK3nMJENuf",
  "key36": "2ZQy8nAsGsPat1XqcTpUWXFcVB5UYg8KNQHjUPtotQUZvJiL1p1KSyrnSkG1Uhiww7bCg5QCbcCVCbRE2ZYSUj3V",
  "key37": "vSKjyJpPKKxVQmAFTe7gUfpAssgQguYmmHfLMnzVFgEqA6o7gzXa1g9vdyLkDuxaacj9Mk4U1zctWpqyoPf5qBX",
  "key38": "5BrFVDoNG1TZkHoAcB87RYYrax8j1zGBGhssEuhKXfXKwpEaSp3YArsAc74gEd6dCbU95He9S7ww7E7ws8uk7Voa",
  "key39": "5zXx8s1ToRhEw9CvtC5MtgZxQV41RypY1NgN9gV5zPYSD1fgvX4naNdpRU3mfpiBNECbtEuw6dcsaVZcej9xD9dd",
  "key40": "4j8B4cmbsb4NFBQipmpweu39vXSSfqwfN1rvdrdg3aAwjJcPjaQNASt1QTwY3aqNWXtz7RV1tLBZivtHqtfNH38g",
  "key41": "hpAZy5Ti8CB2rZVmf45EJUCuaJmFddbPiQj7Kxm4XoySW6hGuZoT7sQ5C9J9S2Jkhzco5u5vXUjzqVVd9ogCG92",
  "key42": "3Snzr3FJbPq7Rh1i81WEW4DQj2zsE2xH9zUg2fMTgGXkuU1NsLyyoFRKivXwYBWJjXsukDkcXHbucZjoAt34MQ2F",
  "key43": "4Ez5sD1RM8eJiFn7AG4zHrGKqAbuGD9AvKofAJZgDndetQ4DC5vUAXCGTWxSdLBXck7yab3eyayBtCPc6cPoDzc2",
  "key44": "3yauvZDsG64Q65rdPZeRNEScVmtRoZbC8ybELmX6y6tUGWhwQMUr9mqnu1yhXMRyZkNHt5eEU3fKr31568G3N6eR",
  "key45": "2CDeLbTxMXagiky47MVwBeHKqf1x7JuK13xL4Lx8FjjyigVZuZL9zNo7fAqwver9ubzFaS343mYE3ufEnJLgwEYQ",
  "key46": "CBWTH3XYyaN68b3Bk1eEgiksWyv55VN5d11VNUQXfixbty5WZHgKRxxDDReujM1ADEb2wTGPLtmt67aHyAB9y5U",
  "key47": "59ouT5YZ3PpB1yEaCa2Qrk3E38CEv46SvpGcNFyhCoxz1Qkyfr7m44WZzwRgWa13EL35a8sw2XSb3ZSfhTRT9Vnp",
  "key48": "41uqucgEyp9NXL8EUJFMD6enFvTTakh1aaNEzYuAwf77g3tiJSxXamw5waRiitTbyivrhBrvci7eA1GPqnB64wX9"
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
