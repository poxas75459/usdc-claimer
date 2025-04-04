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
    "4jiPFxnKCLxUQW5zKNQtYrH84Pe2mJZUJv54pvqiG9nooK5wtTYqEvTzCuWSRQMwGb8kURoXNebazy9WNRgJUTu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NithaCgzpDCZfjpcXVdjqwXAHdGmXFzcMCVfBQTub5NM2jjHXpTtCLU1RT89JzkoSC7JW6nato5SRVX3eYZp7ti",
  "key1": "3Xkhc2PrW3P8ocHCEJbrMWri386PGacZvAQAY5RKGJGkXjWYQ5H58RZZKYjAJ1Mh6fnokLBKzkZjTZ9Mu9QyTuVx",
  "key2": "48UFsxwA4nY7dqTk8zZeAD2T7vaXPLBTZNZCskyMzzKQmHdpc2TbcuUPEJv6CuJJTTpoTLBXzFRxQSujiyHpCz2k",
  "key3": "5eR4d4s9yDC3zhx6FGDFYhrjUKE3G8ZWHwJU81RzxrEjuBh8W63EaYh87S4Tu1vFRvtL7sG8LLrNjGzaA9bUCtW5",
  "key4": "3itPCHw2Lh2bLpFs7YFavZqNcVUUTFks9h9QUc3rdTFLkiuM2KxyK4NPR5nGEGXLjJ5LPgtK7BAnTqU8Np41qp1J",
  "key5": "27vUvo9avzjogEWzW9yrymwAwzCsqjvzWbgvSatR5Qq4ZzcXRBrkbEtGEqiRq1sP39FxShrshc3BbEB122PkpxZp",
  "key6": "5BNqv1cENdndTW6PafbybVVZzZdVJMyKTMv5Qyn8L5FC53Z6C1AqemtY1JP6J5QkFSHu9y8eXvKaUdKuzm7TLtrL",
  "key7": "5bvtHJNhpHrBgJG9XWXobjubDL9fsjyK3YD1G56qhtM7HGmgbB1AAninMqZtLDMHWJnFh3sCBZz8sN2SgzRvPVx6",
  "key8": "5dBtB1mVoAdVjhSwkbjuFsDuiQuhx3rf7yPUb6EigSFnYhHP9dorrfN1AiYG5tgEYPqPiZvis6CYDVmh82tmTFns",
  "key9": "4oN5TkaACTBciGgxUTZtwxWTgwjKU3YwsPtLUD8nRghtFjkMgn2mvwBC9FukWWRMMG74vBcmXmee5vcQY5rXmr8U",
  "key10": "2JrmUtHQWACScFhHZdxXdtrS4jhv86WwyPW5ddiZHmsFTL9FAQTAXzM88FMayMBxMaJNHkjYbSZBeANakbLjPSPK",
  "key11": "sK5rmPBnLhQ8SHzxJ4pdY5QmSHg6cKuobkNS1JMdmgw3D6bSjPt7qNvaGyMKkoMoAPPMJNTssimyjvyQcFGgSmP",
  "key12": "4cp2Z1JLEmA1RGuAhnKGbzDs9UxoSjd7WQxceeEGrUTQgE7FqWJEUvJiXtXNAT1BktL8U2RgCvPvo6pZkqcePakh",
  "key13": "53oC77mRVqtiVPWV5NQyNMWpaTkaD9nJHcX1mhE86qpihDshLgLzXWPo2X6mtqpeLUzoa3beqytEjfep9gp3Rywu",
  "key14": "3qNkzwM1Yc1hB1TXNaVsuHUUxcKUMezQbrFtMNhFpz9rSY6MSjFzQqg3njUXAT3YAUbxjgYv4sMbrEsdYoHVShhi",
  "key15": "52waBaEeUiCxD6Wdy2xVL7h89GNA8DmN1i7uCD76RJcq9vDZjRHYNM9UNE2cDCtDYWLk76DNwgHiY5XGeBbrLNRm",
  "key16": "314Z4qExwkYjL4BeWwAEEzrpjhZBoYuqYbjN4DpPme4bQrZ3Ja4hgiF4g7hq98uRxrpA4Ppzb3jMaQL44EL6KWZR",
  "key17": "5s3FYWn3un7rD1bzfyorr77hjnkqZw8FCKi9iyFiWuQw5espvDzE3YQv9jVhK4KVRy1aSeKTtbDLWa7JPUyR6ZhY",
  "key18": "2GgDPwBie14Rvg3b4c33ivocL1kY66W1s3A2qKqpUL1u6Wkwr2XNatHZSHfK3MYGPzgep4wK3H6S8WBBWGuAtrdp",
  "key19": "341Cof6dzsBFXREjAqCA98T4zg1LkwWnmMog7YLXPA73FzMenp3Sc5qDMEkYEi9GWYDYEQYPb9sdUB65FHjyjQj2",
  "key20": "3a993SWiDEzkPngSuQ52Fe4r2XddzdjmonaDWEAyEySN6kvb8StyQb6QvpxqBc2nXGyL7WtjXpiGHVTQqDRdeRNU",
  "key21": "4WDuFbaZePUU9UGK1k3nRif2bABLK47pHPpVUSoC8KWYKmGg3z3MTKEfZgmUxvcPMGfGwJ3qNsM8446Ma1146B5T",
  "key22": "o7WtzYMPvjfq8A6jP2jLHRAiAE43w7HAtJwDCVnvoF9VsG5a8VWyJaoQZcxCfdK5Xphveg3Hic1viAKjQ4yhE3N",
  "key23": "3ne3jNKapBg5nf9ZSmocHg1NpHrJt8rrdPvrrSb5RzjVv8zMExGgK93A41KHLvTGnH1K28Zce6wP2kaontKHhQGi",
  "key24": "5yPmUXwteBikj1ha5WWJRZ8M7cXFybS9FkbzwtNhUXfCCA4hwG98suwqD9YQ8Z41gy96Mv7XJYfLYGwVHMyvdbCQ",
  "key25": "5BvCfqJ6QVVF9AGSShiSoBwssatvEzHitFSDVj9mp2DUXW1cAb3G9WuedrgCUfa2P8SZpeniHBCyoEEPWK6Dce7A",
  "key26": "5Y92cz1X78iyULAwojak4P7B7CgU9GLWcJrQjFBCr1noL58FgrN7RmRFPGubMMixnEbqJuYiFQbqDLPNfMhk9h7U",
  "key27": "4E7d3RAYQjfZuKYhVdfcEEqoMNuh1DRibvDdC9ZCSjGk4HbvTH3ybKCjkBGLRLyeiNoMCP3428faCyMNFzUmAsJp",
  "key28": "21sxLa7XqZV3QgwxNhKGk2snQ1eiDDGfQQSEPkWQAt1VFVopMoAs55Dz7KXV4GqAzNCB5eZk5HosMQd4ZPQ8Z6Ae",
  "key29": "55rTw9g1tQ1sDk5mwvyji2y5Eqjz5Ro5QHSXrwwZS663u1hnzHryHyNsxnsygdMsf2ST4grJD7aQ17fowdjDviua",
  "key30": "53P2yGxGpfeqmwJZqTomGEtME9R5WEvfs5jg6yYbTmdtmyccoByvAgWbxTabo88kkvNi3sqtNi9gxpkYdWSBFuyb",
  "key31": "3KmEKX84c9fyJWiGdragHRMdnBvpNSyuMbkbUW9muNq8qF3zD5s5S5nQEY84cd1naL8Vass5wx7CVc4JYw2fBwqN",
  "key32": "3XnRSHjEPD8w9KjD4RhhxnYeQqu1xGQYZBDJ4KUDJ4pamScJHEn6KDRb8t2cQTm65VYXEvD4str5uPyRzXJFBFSn",
  "key33": "427avL2rnumWeqaEmqyJaNFYx7hLec5TRjbPjmsRuBePsDxBCNLex6kuPrx1Qg5MUXGERioKr11zdsz1XTzKbP1M",
  "key34": "5mdJFuw2J1iQYU2jkCZyKNJkVqKSchabFu6298WfHxqm9BePQBHC6wAsbTPq4nxCQSXe8u6wFZChfggnum8wvvRn",
  "key35": "4QUAcb3z57t24wGnmkNJ2NBx1p6YLx8x5yyttLYw6MifxT7aSdHun3mpGQLAKPMQv1LGuWemc9bCFZ3uMnUkoTkE",
  "key36": "2i8hvHTycf1GTBN9XTgTpE2nyNhvW8129pGGDPL5B77si1LuQbpYdY9CTHiPEyhG26qUgetbQq3GB4WigjCw41y6",
  "key37": "Csj3pGnDoNzQwRT9TcrB9hmRSFcYRfiwJ63mwesodRyhssRgjvFZQGrFPXQG62chieL1Git4x52xxf8gHqnxbmb",
  "key38": "5Azqm251VTk2QEVmVH4Joqra5mDF5NFfuMysAWaUdv8AFGc2w2Z8jxWvG4eG2HfJcQGLHkpSV3DJESSKxdjrZcZ4",
  "key39": "1qJEEwiaDRiuztXxpTHE4HmZJ5Grt5XcPGxka1uhruvxfqCTueRoezZjEFTkNffg4wEUVYQ7vBhzsZUQnPw5jeW",
  "key40": "3VywPpdpoAWAHZHxwofGU4kXMMZyHKra26PTtMLSbUKN4RsFKp47N29tV4hSPAZZLhmoNofG6FWcxUrTWcQEXkzQ",
  "key41": "5H1tPdu2Hiy2ReBcyTpV3ikaG9KX89Pcx8tyuq1UYMeHn22SNz3aEHjq749rkZqWpFvRcCVHmojP968fE9c5nzJn",
  "key42": "5Uvov32g3xBPuL5osB4jDSGa39UHUcA3povyHJEHtXvuZsXZauyCjbU3zKBkkD5BLigfcYMRVvcYgYtPeCg11zPf",
  "key43": "TNiXh4WkFMRnY7R5pkiQE7LvSgvTftRAKxpgkGERARFuYssm8Y5wJBA6k31y65E6QKKuH4dLHWwPvjgKvtrjvya"
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
