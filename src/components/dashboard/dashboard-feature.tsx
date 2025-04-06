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
    "3Ef2aqPZzAVU8kvk3hC1Xm5mwDEtRJtGo3zwcrTLAH3azH9mF3fSkGYCBtovcZp4joj3vVGjJdNYyV78PqePek9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJb2NXCeqMbjfLdtnMBKjV5uT5AUXGh4EX8VscRkRu56NqY2oCvvzBfFY9XjpmUtwoVZXY1HV4rjnzqsarPB97k",
  "key1": "3tYtvx84hWUksL2YoA4xs5cbm1B6mBAGFfpa591pAWEfL2sgzKQX6e8iXJrwPQdphFkcxhCMfCr6FSNjTSr5LvQT",
  "key2": "2nGCCroke6v7Lfwq7YKG4WruCxiVvcHub1StqYMj8bsuGntuyfWNtpUQTcSmAcDt4jWRNocrSohc95aWxR5TczUT",
  "key3": "3sHYw42n87FoEesVPWUZWubwxRAaEpC4uMjxaAsnyGn8vRn1xuKXbYMTsdaBcueB1M1cvzDUyvGrghMBLP9Fnvu7",
  "key4": "2Lud5exvqLeaQpASq17z3pQpCXq9i8be1nhBvxHJActmSKkzeK4CWme3jdDuW9FRPfMmQjbJVYngZmr9THdFX5kK",
  "key5": "3eQxnW5S1A7eMwg24GqGStPuCM1u6d8MUSnyUyw2hfrvbLVwWWzxyGuCon99vdVM3FaJVsjtdJUviBDxo5G5Nkds",
  "key6": "5YXPatgNctSHCsGkrMFidc37ohMo9RkvMgnHVA5AXhYYfbwzH5UoZ5Vxyxtd5RieX6jS6fmT1f27tvLu6PxDWKL4",
  "key7": "2gsN3QgGZ6BWpe4oqh4B3m2hakUML6DbnQcKufrdRffV4RHp8RqsXnyjikoep9DvRanhRZ2yAXyx7SnWi1XCSnWq",
  "key8": "2qXaQWXTGxvJTmHxLLcKcrP5QhZoRNTkJ5JEhwPriSZYjsprb1Yv86HAKoJzkuNj4WVqmQHUR2oCzMVVyUijkbV9",
  "key9": "2XzdinRtmr7qG1UFUp3AKXxsox9ov4KF6JdAGvBKA4LPh8FjabbotWnfuifgfsnF163ZxggDv77rqqsN3QdAjws7",
  "key10": "3iPcbyD6CEuAVwigRT3a1JabijRPMEm58rqKCPdUQvhh9YWNh3ggTB6G5JVXsuBPGDvHoBhXDqk8XYBM5yEWj7ap",
  "key11": "4cBMszntatrA3WuEdJBXgBRkjKQCeJVcangeVBQ9CYMPk3qxY6rrZkceRUEFM7gDCWPKwgHW8N6qss3mkesaTC3y",
  "key12": "tNZaVXeTi6JWfxbihmx5r5DgdBbuKm5vj39eyV76vyRacwjiitFco55Vf83PW5TXU8jMTBrJLxZKNa3CC7CwZ8R",
  "key13": "5beAeCTJRfFJgwRwZjhy5o6fEHnQzv4LoHNoqFsLoTNk6jX6TNBMwM6fJA9Z8EXGTrZPhvGFjniT9PyZ4VjLuNrM",
  "key14": "2iDnEDTDXPnBpy64RVzTGG9584sTDsP8KKrgrSqrFmtacx8FPU98bzYgPWi3QKN9NMfJTAjnVRKXy98fWGEJTFwx",
  "key15": "3VKpbNvhXpduEpWDiUTecw96cf1trVFoY37xgP12hGTYdiU3Uk1gNRVDGufPJ3MbTVTAcqzRcL3TaKGJydu5hiAH",
  "key16": "7Hhwin2aTxLfM5x8deBAn1GkWmZcDfmFGsbGRXa8b6E6B3xUd4z1K6BhihzBNwvHBRCJifJp4xeABx3d6sV1zDb",
  "key17": "5JjkDKnDRKwD5aebrCFkNSjKt4tRSFuN8Bg8vWKaZ1rtoCXsbpkR3aGYt926TggaV1JaRvcR61RGTCebDwk2bUZn",
  "key18": "5SP9Y9pwSsJagB8N9myac7seMUDjHtN2P53vNTC2qGoX82H6t2M8WfGFYtQbpNyJzhPBVS8XXwgBJJvshH2R7nzv",
  "key19": "4AbWndDbzUKMep3Tbj3BXxEZKcRBdPow8VFVpmFJxVAvMGN7CGt3KeyTDHtKDyZYLdXQE7KmhQmGU82sJMVK8pJW",
  "key20": "2XeuggGbssScx6nVe6d6AhNdabcdr6zRAgg1NG6jTQiTwWvkWXbaPpP7jvicuAjgc4wfcb4MjztTigNSFAXzTdD7",
  "key21": "4TkVtT1xms6T5rMhsSBADmHnkiSrdQYM9tdmwHirbtFud6hraF6jno6STsJ1he2FR9YARJzNA6FnmFjez6ttrtQA",
  "key22": "XUbUbCyyKbg2PcgJ9nTvQuLPCSHNa11aUTcocgkDYSKsHJTsErqA4uXj29AhzQfPYkxyPPQ18i8kLQTN4pkDHR9",
  "key23": "2HJcgTwt2yZ9htCu53EgbKJM1d6mkHj6Eozx8zcyShnNRCVm2wBcGUw13vvD4h8DdYtZ5Dw7BXNMYJVPy94bg1ZT",
  "key24": "47QZHad6fS6gAET3EMFp5ndQBVkVCTDVzGNadJ7c16Tdtf6HYhmj3wCvgGi8mZ1Lkc5jhHkttwS1xbWHFEiKZr7C",
  "key25": "3Mwyrgqc67K8tvm1FQ8ME1rRRRT9pAFbmCKJ8BuUXPGDpRDqJJNYr2Gz8eTArjUZv1mSMvuuN9U8JcEPU9q9aUo9",
  "key26": "5BnG3kgfuo2EcTK8ngi7cf4xaXTYqRefgwvAXexHziwdpZXcGFSaBu4D8PFg7C6WBpifswceK6U2ViVoSPxdJfd2",
  "key27": "4iChbLMn9RTA5bxos5srdVdQ3dNr3qFyaK99PLzHrVHqZc7cTi4usXNnt2HSXmKdgeYD2fBz3cMJ5KPwJ81faQpF",
  "key28": "4Q3u13PY67NzhvFkuBUcqn1yw1DUXoiAGfcaT7WSSKvozavfy2GjKMpaHqxAghNDv6ybHxxwQNE1k6diqg4PeHa7",
  "key29": "FkrvSzWaNXn7KLztYRhxhR8XvPjYqPvVhyyHE3bjTjKiD64v7nrM7pG39DQKPjxpo54n8CiijdvWEyK1NMu8dXn",
  "key30": "wpnkoBh98pAtFY27wc3UmCEyfWcmE5cLkiw22Tx8pTgjfQwSGYQXW172kBskLQTfdBAcgKNE8pFW52hbgFmXkZM",
  "key31": "3cGKQjsWVby5Ujqyge2QMyzMAosgzmqzKWRWU5g53uzdhQr97xmUEFhPFuhWcZ75Mr2TP73FMCg4QLB72dZVZg3K",
  "key32": "5aNCw5adq8bsL3tvaDM32BfFrE1u6kQQ9ePrXY8edT4vN1rpTtJA37vTiERq4PKNr2U5c1VQFDu2AehJiZCGqobe",
  "key33": "2S2dZs4JbgrkQEbyxruAuDZT8pFDV6cYDPM2acmreQ7chBDE1roqHKoutvLSjVZkvE8pTJn6caLaeC1cZo4PoTPR",
  "key34": "5yAMiYMaSRmdb6iaU37XWRKyVv4U6SgeVVTXdpjK4fAaWwX3uqu2zNPYZq6g6sow56H1dNuhRs6pi7xLbvyGUE7d",
  "key35": "4t2q9vfgNnFgysCnQHLUhvAgAaob24TRw8XewoDg3G1rANjvmtMdX1zneUD8ua2mQuN8KFRopDzWzzj3kmyw2AxC",
  "key36": "4ubxL8WP69ZTCR18RbMWFm3SKeUKWz8KgQE3mP2bF9ao9UmoT6FLoZav6EKGBrdTirZ24JsT7g88MXzXGLn4Qn7S",
  "key37": "4Pj6zAsq32CvBnmfHX9PbM2x7MqCv5XGe9dQbu4aswgcgYxG698LP2XBHM4X8HsSwvemhR8ac5XYoiZ3p7p2tmQo",
  "key38": "3EWjnk5JnNnjzgMyYG88kJ3FjcoUzfzARKiR7DeJYsoFcbqn5LNY3HMNh3QfbQEGSzrHSuWEXfi3u2jBDjQQDt8M",
  "key39": "qcPutqkixNQSYa8n78EnGNYZR95CBwcDLzNBeLc5KtCjxVrQTaeebMzsDArQrYBRkc7sqWWj6J8ECBqwwpPAPqA",
  "key40": "bvnY63kzaSVHrNisb6BsQskZz9hocfWnpoC8yENjqVr8BYbbChbHoQXV3obcXBitKT1dFR6x2Ch2TLbDuFJzxvX",
  "key41": "2Ajn4gCc5exnW487scZG4vZHvyyqLJeXzHtScUvGVdhDBSVGGaSKYSmNYggqYUVZm1zEQrKmgSwZXEPPA92tgyby",
  "key42": "28gFPaJ9nhpvWYC8nqUs3oFQA5NwWaCRG2n8wwmo3m9AaqzrvFML16BFRkNKmsdnzbtPyNcGZ4saLrninajsrP2f",
  "key43": "33k588xqMnuo3o3uFuvfYSmXiBGETqZYjp8AsgjaBSKV4aYHAWTzGKMgtSnNXtSS82NyF8LdwYxepYZTFDMyxDzF",
  "key44": "49SheaDVtYhaXmTHUmc3pMhJko4TyGByaGjWBH2XJyu5tgLH8ckEmxidizHrJ5gEet3UsFskGa3cD33969qpw7Gn"
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
