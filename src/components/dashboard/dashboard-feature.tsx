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
    "5LfeXhs7apZ4Yi67ZAbPQxbsMPi6Gtejc2PTdsnMCHPkjzmEKc8fodJWVxYf6M75nDfuu5WNfP29Dk2nVUiQTGue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62BJk9cBZ4UR39fo9WFv4LzPjNf2WA4eWCn4vSRv31M2j3D6SsvPU46EP6U72Bzzgt5ZDMXFNzeqcv13WFbX9eZe",
  "key1": "8BFVBzwg5Jt3W9gFv8MQDnyxTeRZ8c557oR3uDv4KEFnzdtqz93CGQigEAPsHmJmyQn7MivTDEQMPXQi9u2aj8f",
  "key2": "2ak4xwnVE1yLirmwmF7f3X1FNJFfDkTX26enixSKQEE3Li76YWdW8fUrbFkv1VPSHNwQ4k2BpHFo4LoWDDgpFD9M",
  "key3": "m3aUmm6iEw9zfrEfqcoUQvg1fuR8kQQZvUUSUT4D5CjnYcJjkvQyLcNUDDYJxHAT6Scnz5HUpDfbjstJKJM5PRH",
  "key4": "HwZiCiNoxRpzYX7tCQVQ5oXPKTKExBjZdHJ12cjqv1B9Qh7KcDVsphQAELPkrfz8muWGGPznEzWuPpv34bUsx4F",
  "key5": "5yoxW9euftztceWkTUwGHpT8x8MwbuhBgGC5x1xKnqWTAnWjCQPXzd97WLdknFT6WxwfAvjGk58h6Zr2oMPbkAZt",
  "key6": "2Dww7aLcPkfB9uVv7RNgWqAyfwKiNmNv1rygmdYgXgU6k1FwebM5DtckCzo8rsiLM4cwWFLNBQCXB83FEbzp8LRY",
  "key7": "5D4AvHaKPz2b2fDmE9Xm7zgog28kbxv9CtDX4fM5av1mg2uacaJVMjDX85pbtzXh93th5hPJ9CSJ2fCKoAc5SJgA",
  "key8": "3wKAdQD2hZwXxH3JC81QYDb8x4veBvHYZz4mATwEVYpKwEFzkYtuCXRwyY98wMvoWpUWroHFuuMMzdreuBqgufyK",
  "key9": "RuSHP12ABRuXU4Yud4yJgapqyyXZSpKurrzSonTpu8LcWQh321qiDCG7Y52GnVnofqwTB4uku8heqLL5H2sxtzz",
  "key10": "5khgDZKkoJRbGpA3GbgmD2Nd5j1u9g9fa9CV4pxFos66M7JyfiCaMgARzPNWfqtr7D2GEWk9PkGrSSZqmLFcDEkn",
  "key11": "4cTuJkbAi9Hts6UBGXd841PSfgsVNxGmn4sJLwhRwMfRFwpY62Y6HCCrsk98g3CMSSPuhuhwCF3CbKLEbGze9F7J",
  "key12": "4PNmbZKJQRRGCmR6jUKR43PwSvryAWHFti6Xf299Gtiu94vAu6wLHQLj7qQ5zPC4vcLEjv9cDyRsiuujjSYuE4y1",
  "key13": "4QoLMcH3g5Sy2zfRgzRLVX8hc5bifwEjocJrmU6kRZc7fbor4jyYh4jmFxLLcTW2rDEv9JQTEPFj7NVZKHPFuRjp",
  "key14": "2k6znX2muCjzgG343t123DZKZArsRx9wRDr4YTH1z4oVr2AbeHNCj7eU58LrMddiqEKVp5qz74WEUpJfHDMy2bou",
  "key15": "6NSMNu2uAyXUPjpbzbEwYhAEnhzajstpqa1ye69SuqfUgvregdgVBaRsr79EGkTBGSw4rfCvuNk27ZmcPJawLhx",
  "key16": "4PVb11QLi29Gr2uPJ1tGGnFRtjk6SNKF24mdCs5keu9bSvWh3i1eqXCjmenheFKF1MdkNNwoStRHYEdae6HLMP9U",
  "key17": "nEngmdge1ZJNm1ZDxNfG5RZGz4vxEWTX6Uu7qcQYGmxpwwBv5HgihTppyohr6GCxET34UGLHSHESTA4jrWquBqW",
  "key18": "5fcDqcJWRWHJWtqRmnwhij8APJ7eeak4GJHmTXzZfNijts9XcqQDPtk3VsmweAwD1bfB6EV4T3cURPpEmuPMMUYv",
  "key19": "7coK7c387Ztd7DZxDPg41SxXcgo25h86GaMmA3Yd6S4WkLBZNG4WRBc4Xp27heP6KsN9CDixYZcCQ7aoYjb5vWn",
  "key20": "Vd9meieLTjfdro3FxWQzzqR7AmwPr764aR8ZqPX3HEAcrBeJ4A2dUNS8DjESW33iXFb1RfJWNoUWgcYJwX2Msnd",
  "key21": "4sQJwmXuCsbsQHsDyVDuNJEocr3xuPuXfuvouA6RubKzRUzgzqtWs2Bm9pbFo1MmNomC2pbCHpb6uzsJS5aqfbtZ",
  "key22": "65v5HBkmdNk2X242JhcVrSHVbvTKbubAoSCtsivtfqWi1nFfqfFJk72Zn7YiUaXCPQHzYArTJxUf2j2fJ4XBUf47",
  "key23": "9BKDUvKWWeih8zGFVHXdxWU2aWhRYi4ZoCmjUCrVtsAopYg76mV5MmJJrahNrzaNK6ru2FQ8VaSo8Z5GZBq9LHu",
  "key24": "2YEqsEjbKnu4HJ3fyExP8gq5GjtVDtCJmWmuj2AzdmRaMBaCkKPWAz5pcdAshu55cJk5bLzjTZrs5R5CKsNVbPAB",
  "key25": "3PYpbUJYdbgGHixwbXXjatLKeWrB4V3Z5zLsojz1UmyMJyunF1zN27XSLAnpDXbPJorDJT3nCU3JLoN2u7tDwHQN",
  "key26": "45Fj7KKbV9LiQfrD655mSDLMfkGANT9fdrxdFiF3yF4P9LZbvVUo7KBmsZnPRsj1o6UuZe81QfJ3RxsTjtSN6oqn",
  "key27": "4TSJcrf8PnxwsyD5Ayg6qcjnG2VDvc8dV5gZampcH5oTVVLtzSeZTh35AEPsHU3KztazX4raeyZ6ZCAmX2nPLJMN",
  "key28": "3DBshANDrQZc9ytQBV2xcUJUMsELomLR43524atsRNmKQ7DeuCS4J7u493S7fw1LYXXf93dTFccy9Kjv9WdjR6X",
  "key29": "47jyMQahhkneYpkddvU3C54YUQEZo1qmVHXhpjRgusdHgFcVarvevVJHzqjGhjdrMjwpYKANWBNesjExhAANsi9F",
  "key30": "4eaM6X4yDKrvLNF1isZEk5qagGkRko8fK1AsY8xtmD4wMk1Ei4E7oNJMFwPVb41b8QgVL9tSMKD4TbDUt5s434g5",
  "key31": "35qxeCNXkRYyxsNxv4sd5Ly1wdMdkfkSXuG8zaAXEak2DqDmRMChUCudcCryVWpJCMPpnncUg9gciy8tHZ8v8RxM",
  "key32": "5npXuFpxoAToK1WFYohGEca3X4HgktPvCfacFnEvvxJsu5AiSs3QpriSg5bP1iFe5BStSfCphdLMAYnXPZKfjNbx",
  "key33": "5kbNPHHoc1n6QQuzdqjbHwiWaAipCbS1csqoWBSYeR8pmHf8dVtVYqDsPrLEfMEJgfiddZiMNghXHFYKJvUJyx6a",
  "key34": "3pK2tiDmBqpwSiPpxAGeKu8N2wMTg9enyL2noqnb4CE1VgEsGNMXNSZVn3ZM4Kw5D2p2Wpc8suWwQkSbbGyzkeuP",
  "key35": "2cdJeDdXd7wmqbNKqpZZtBiVMsXWN3Vtcphn2xnDFYKHJCqDe3RqyaGGuepgUDU3h3FvpsPk5Fj71wCp5oxB4uAk",
  "key36": "C2cKY1RxvowahJjmqzYRE7dQmvMDrrzU1wji22ad63p11Q3RTMRfyHkEt8kzhaY11m4bMSLJNj2pdZb5ZNo52Lx",
  "key37": "2DiTT6NWkSYsD1yc5CVjBaKAW6MNAiGq1jKuaU2o38R2nzu8XNu5xedC3zB4DmxaArpawQSPYPX8F1QMbMxps99F",
  "key38": "38L3kcgqcatuQny3CarVN4vHmpZt6b4Bh786yBu9gywZ6qZEMxz2qgUJJwJVT1Qe71u98YFPqCLtbdN5SPcTtNqm",
  "key39": "46UFAcNZUYvLE9uLdjK8PJVdxY3u84Win4uZotYCFV7ycvijPc8nvXeoiZSY2KAjChgzj3yekLQeYtRoqNLahUHt",
  "key40": "3s5dN2wNG3gh8WR2Q1FFmD2uRPt7fUxTBgHv24DvpKM2uJorPpUiEnWrFzE6FWkWsEHgsaHEKxuhba1RmVvGFre",
  "key41": "2YX4d17AvsCRFJxJSV79gm5LaREU64CxkYEW32MNjCdzVktyYeor8GrStPiBCLUyKWGu72ppSrdeeURYJsZUwZak",
  "key42": "4iHqA2QNQQa7yyGoAqKvczMw7ktxhhqALWSQpchyGgCEJV7Gm9vSqNuYdvupgdGHuQZ3RxTtKLnsfkBsW3NvuGxC",
  "key43": "4mmLfwSpBJHCrY8rnAGUkoMarLB3c6DZGDLvUzSFXvytuVPBLWoafAggAyTkKZQLMBf8hsU988PwD74s8h5EDEH6",
  "key44": "5VzNGbB6bX67J6ruuLNt11KLciytivjtVLcFzxgZ4A2Wo5SGoyRrnijD4LWHzzjKMAcMpnPAnAwYJA2XMcKNJG5A",
  "key45": "2BcVsfm96PLSGQE2kHfSekXkyLtA8oAyM3n29sEj4W3XGeKTWJueKj41nA16FK2MU6Gk2cqDmY5Qdy6mYP7pfmDw",
  "key46": "5SCBPFcTK4iZ368nud3ywKkFeNDxDRE5qy92Ys1DK8gvevNdBmiTiVwCWh9YfatttmpiM4M7yAFYa3RaWXWFa64J",
  "key47": "3A7uvZEmSfXVbv25iRb1rM12ZApUwPKYiqs5LoUyFnS7Rb8poXXRoyXWG4jWhcGsJ49oTDWgmaL9UhwRxudC1eb",
  "key48": "2uH3Sh2LxyK8RcyE39CLgCGbeXKGvNbitwmRoKzciFzXC3EBWanorK5jdjffCuxHUC1qWAWGWP2E93P4y45QvcsV",
  "key49": "2YRgFyLZreycacLubJu2mpmUPXNxbbxBCBBWoTH8xAA6vqUr26xZbJ3SLa95zEAw5aDpE3uJBWd428vRgfEjHGYT"
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
