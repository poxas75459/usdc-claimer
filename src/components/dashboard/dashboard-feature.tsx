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
    "4nJKfbeihh6FRZnQYfRffKJrLZGKShX9GjfuBw8NKQfnkfPViLtdf8ynUetfQ8sMb725rvqd4Dq4dea9EJpwwtWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7agevnDirQ6Ao4aJR56ufs5KzF5uT7JUmspm5GmGFSruPy19B1wu1ogSJAsBFcWRxNBSq5AANTGL5fLUdT78cC",
  "key1": "4Jam18gwV5birrAh35zbvQRW296CnYbprLarb8gfZ54Vzkjq3ndAiMKEEQ3JNTGrZN52HhNbGPhvEVga47D4JYQn",
  "key2": "3N3VYCLJHQ9orEF7eawEzpiokD4MV54pw7BAoY8oVjpyKVVgFmoD5L7BqnfCqwr9iQxfQXpZV3zgqHethS4YDWcc",
  "key3": "4a8czvCowhKmqzTFx4CJCVurGXSE7kS23JmaFeCesvW7A8YKz3P34g9q989TqR22fPBhbr5L67jN3XH16UZyhvaz",
  "key4": "2urUW9VDKPU4jGxyX9u2b8WtdkPdBzH7iJEWKxtXwCNpbbareTwWkykUd2HztW7f3zEvUCQj1mDsm51fdZABqivZ",
  "key5": "2rMAm4pT5Y4vz3CJTnZPpZ8MYmQqtuD46n6SPFe9rWKJpqZYe4S6TRVHumKZYUVNQhWjaFgfgazDw8Dcthu87qR6",
  "key6": "2aFkyM5KnX14gdmVLDpzGfdV5B9rieBZjgWVWiGFQpLS8s72C4mEaJ53Mn3pxF1oHW3PoGYZpg9yyxiURRESqCFJ",
  "key7": "2brxbJFEG8AGeLMdZXjGKCwxC7ztMeEUKpC3praa71yWwAoDoxR7LCbbS6Xuoc6MBUVEiw3BQCkRFi1jpc9PHmrg",
  "key8": "Lav3RWjQtFFYcpBPCkaP49GZ9XM4dBBLFNBDMqFGerJ9XVFz7JU9dZHoijVkdLsceNvnPg45Vv84BK6D88FHwNT",
  "key9": "1oRhR41AEUAx44SBXDnr8GH4SSQbmhJtJPHHNqkhxCHPN7ZeKG4Cb3xS8vz1pTCWS7VbVvZjQBJzS6znsyLQXYb",
  "key10": "2upzRJvfMKVfuhGxsp3iShZnTSYiPCETC4p1QTZgBKHqhZXwdWEyZxjExA429keC3eDhWYL8mLH8bWLPaRYKr6ry",
  "key11": "3nV6FAUVRkRbEyG9N693ztmcCTFWq2VtE3yApmoNsuwPsba3CwPMGZj3gtwNkMHxQztAnJDenhorFckvhcPatJyo",
  "key12": "2WDerazgcHjNNGi9dCjdNUeBqKGweiXchkuvGKQ2TcNRWLt3oKCU2XNGPRpkoqujQj8eNDBjfbNfdfRi7qgHwY9s",
  "key13": "wBkmXWuyX8u3Mwi5SRnJaopmHMYUMexcDcTWePE5QozgSfoMB8z53svwZC15kRYW4gZqd296SznK8hDkjc2uZZX",
  "key14": "4sX8nvHcmWCQ8gEFPHCdjjgxCGSzvcunDWbihUDfWkHjyw9F5qKakj8DN4sWRNrd1BDBEiyJMwJj7i5G62u89WB8",
  "key15": "2Gp65s3RAvM1ehdNsae7xKuNqm762WGdz4ZbAV95EuZwwPAMH4oK1Q9LDatwXVgi1otW1sDYZKXUrY5oUvxPdcKQ",
  "key16": "3zPYEqzdPtW4UNAHko8n84afpGMQ3Ah9eRfZGipMNSGMKQCMnKYhBvP9HCha6WMCWyw7j1JqorAbJ9Vmk9oLTRqd",
  "key17": "4BbrMSEdXukbe13iTRJzxdaTKuHc2gB2ZSANqenEcfmj1PEZyHF3dso3PHscNkDyZKA1NweWe18BEyPmQm63WAP7",
  "key18": "5qpTKhFmp5tJBWGHPoczkwZZ4pyhirbeyaBn5uLQ8UGF6BMxmvvcruc7VVz4bDNpBdQbgsHsPbMNw6tE16rWQE9E",
  "key19": "qGEzseGVuEzfWxzxBpKH4A814b9cefqdXuKBiSgg8rFkMYsdNMUmFFoHhdWhyjC9HPArZhToy15XXFVPDmcHuek",
  "key20": "UeeX2ze734uQffmyMEnRzgXmLqaJRzHerPhmFuTyAQ8qrZAwrP1K8wHM1F8ihQx6hFWfVmjStNtwnRgmuhrQGz7",
  "key21": "3DQqeTDBoF6q81nnGiJD89z9QjdFknrf3Zhw6tgHfwhLMsRSe3K4jxwbgvUgtJktXp1s4rCgx1h2E3bQ3ctdUpjb",
  "key22": "2vGhoRAmvUdFH9eN8sG4hzK72TmnLcgUXsDmAJGJdGKUdFXSEKpq99CZNs2hu8txacehZXTBYtvCnnM96fdM2RBC",
  "key23": "5ExtSQ5s8FC5br8kLxaDXcSAfhfXhVvFnCG9mC2cyVniMgACDiVS4Cbw6itGZZu7ok4261YBv6Bt4Cb9XYG7hjdL",
  "key24": "5NVY11H3NkMvyo6NwyD94C8QuQUokaxnPMSjQZyd2oMJm3G1fnh1F2grZHWYJ29VHXZggsUSKoaNtyppRjsFwnzb",
  "key25": "4XQSPtZ4xHEq2csex5ZSotbPebXUnZkT4fjv8w6MNE2uDbBowfPma3fcHLX1YgRrHpnyWLRzJ4AfGwVNgXifQ44W",
  "key26": "5o8AnvhptFNabfNiQvHmRSacni5VoT359iRnwDaVSvqVnEQzixCsANnT9TtNX4uUpUXxv3b2XWuy6PmqYqBXinAr",
  "key27": "2to4XJ8h96rE4E8aPc4BLRaGq19LoMDw3s82Sz5vvML25rxKsvxGxZNZxZ9NnumxRYd6Aqh9VSkH5rgFFWiLqEra",
  "key28": "2ApbD3xuiRDbXos43VYrUYNNUiQpNsNiUw1V5JzLjoREWQYq3Nq27tzSm77Y2EWFKTKfdj5X5r8uQX1yT6PxArZ3",
  "key29": "5W5BV99i3PwqwdCym5uc18WJaXyp8BSjXqny71nJoKE6F7kpHe85HvWt4pWgsyMamAUP4JT2EdzVzueszcRZiDsg",
  "key30": "4pAtQABXyZRQaNoRHtGSdiu2osm68BNFzMxExYYA6Rnk1x7unrhpJ9KmM1fpp8EVV1T611214Wqedg8wABGFMqcY",
  "key31": "57PgbS3o85aQtQEbz4cUDupoFZwzTaqsejQVb9AWWKLVc37ybZH263ka76hp6HmdD28u9QW2eRcsZra5Lj672Qo",
  "key32": "4FgF3R4wgU3zLtVUGwwGkiD2QTtoS8p2BY9Mp4wEwySxPNNCax5cTJq4qg1AiEQTnFmftPp4EXVmXBi5kXKv1Tbq",
  "key33": "2mkx78m16upRWBikVQLnunuEwe8RxvBHLf1BHKnYczzGFJbTfQ73temdzdxTvT6b16PGq3MyGd5373wM9yTboTvL",
  "key34": "54e3q39JvwK2MnUHFRseLAtvfnjnaZsTNgpHJkFWtsWe1V59BnhvWmeDtG178UGY92nYGbcGVLayb9hr51Ew6C1x",
  "key35": "Dp1zuyMnVm7DhnTtyqPBN1ShxbWYAhm8McDm7nbbfWPTy7UzcFCLqmLeWccMozT4YytaAtdjvzJctUm5hYbZJ6i",
  "key36": "5gW9rdUUv8ANUGkTa3vcP2p32LMZgBPqnbQd4zeoo5vGa1QvjT6rtGcYxLr7RoLnLX3Hg18sxTvswVEdnkwm4SLX",
  "key37": "4oDFcENSNWMn3WKMxjg1hj3KGZcWjPNNvMYd3yW77U72GRehJquDaBNMEazeVSDWSJVD2DE6FSrAQSFinhr3NmN9",
  "key38": "3yYXzTYCvWZPuFwaJG1Q5b54x5T2Yr8TyvJtGLZ1nNFuQoBsvHC2tM22ALdE6Hcn5C8Jdv2HkgmM26KB8prW6AnS",
  "key39": "3D86dVvxJKLoDRmcGLMndLwSgt92ZiN66eq5KpMnt2Y1oGaqYNQfVYKER5W6ouvbm5FDdWUaWZGAKGZoq4bwMpSQ",
  "key40": "29s9GA5CN4op1mJfHVuGhrCMuEY7wGZMbMU1kadLeg4GLyNLt6vMGnv6kKGZeP4c7nLVnvHQnG5YkU12hJgvgmBN",
  "key41": "4wHsCo1UhVwmhBUcenEa6WsBFBAFRj6Hoj7JQPQAt1GuDuqmJmC6eK7JYNXdypzqpmNpBEzmkC1Ha3uyHverLPdL",
  "key42": "2rDrwBkA2us1W9djniYWpPhCds82iYz5an6xppeYYV6NQb4KT4tsaWYrRDXoreyaZtTpU9Xfbj75FvDf2AdrTAZb",
  "key43": "7AQYHPTW4P2zEjCZRmGJL7pGiMsasMLughVnE5WYB5XQ9XGKRzco3Gs9LmMg5z2gqubG9xvcepAiYPSce4miEvm",
  "key44": "2gMCrQVbwd8NisQ4ugWtgQyfMjzvEV6cuTHsSbkFkFgCp3SrDw8SubuHXB7E3bLa3j2PrVhB6qk1mwiWdz59beKS",
  "key45": "mygBSizioC3HZjEARZRyXpEQbuReaf3zRMtqfWU3XwdcPBerAC6vEY6vLncHDAiSA8ya7iuUJPMEZCdTezL3hQb",
  "key46": "4LpKA6joSDG9fMJBcCjZu52qtAzbrAQxP2n2ZwX1V5qJ1e6wmtHjxHTAVZobZ8aJELCPVhNC8543xRNk3L8pqDMK",
  "key47": "4vbMWc8KKFKiH4eppFZUVvmctgKFyf5uVqEE9HBCfFQ5mRP2pfLybRvjidbCQn2EdSAGjosbPqaXcFidV98RL4ch"
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
