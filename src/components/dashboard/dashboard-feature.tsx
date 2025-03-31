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
    "ckUSGpHDFD3N1L9CmuzTLitSUNjLTYCfmJdgTBFN6Rxc4VUV7jFN4PvK2wmUovM5c1prGCmtvh3AH39AmfW6TEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N31Qe14sErNBkjZqivFScyeAkoNxvjFh7YFTkta7pD8vW3zwiRqySZDbF762ferZaXj3afPxWY135vwreFfB4SJ",
  "key1": "3DCKGbxzAkG5etnTqYfduZFZqRyGKs9SyVyDgo9SiLB74UgY6bBJtGwGozmTsfF9vQLHQ9UPQkhnUV2JP4P8wFM4",
  "key2": "5srZ5izsj3XFoWsXwnpPyvt5wG1wfre6FYAfqwv1aXgaWWYe4P4r3LFXdC1yjGyeRhJqybrNcoxyiSRPj4ZZwRqb",
  "key3": "49qEbrAqsJzAmp3pXM5fVhyRpGx2X6RKa2eYi6x5jxBSKfmDNwxjS4gGTyoG4aHZncah1wDqhKNad7qmWL2ftoeV",
  "key4": "5U9wu85kHURS7PWM1XcCjobL3ygteHJGp29tvrus9ueVj4nAfE9MpKdC4N81Zj1H8pKm6LEEnpk3T5KHpXeYu7wk",
  "key5": "35dCvFfHzQFkzA2t1ooDCquAKS56oJmLuBiK7vuqyokn2Nahqw5Bx48yZ3dSLUCQxcwMpGSokXW7Kh3fqvHxd6p1",
  "key6": "4kri31pWRRMBP9xVZxRc71QBo8KbH9o95UfEb57QxBJRP7u8mesatyEMhHDXridmw85rLtuFANZBhFh4F2U1BD6v",
  "key7": "66rDjFSXBWrxmmpCxYhLJnHdgoY2p88Bhoaji9sUAbw6qZRNfADkiZRLGTULcxWGBUrwsviwNwmQ9psUQF7yrVod",
  "key8": "jj8dpeoeZPDvxd5MV9NhAwxpCCoi1xi7hmrEFgx1eVTjcFSQ5wycNxaMoPQrajjVasxViqyi2QuuuxAB7MQpghZ",
  "key9": "37sxH1KzbwuchvsmgvKeKHerctWGS69kYJrKnWjjkZZioEaN4uuoB4M7fRu7ne74eb73vfijMYTr4RySv6GQ2ekH",
  "key10": "3jDwWJrrZE2gzEhgXt3dM9QqPtS1RHrdkMmhmL2CEhChXQLLRFrA1u2fSENtsa1THhUw8tKmCFJV6Pcy5U2ASN87",
  "key11": "vQKgnGArzMj18KcQadwWjrhjPtKs32z2J5kXycxQQjf4mQdzLbC3SBhXqVKpTvdTg2uTRAxGUw4Na22EfsdZw6W",
  "key12": "387XYCR43wBMDvQqRAU2mgaedCvivuZbaxrVwrsoJcoF2VcLkbyCXToH5LpLEp3tdp2ZXL2ELuRizGxTDvz7Jv1H",
  "key13": "uAXj8NpmCcABQ5vFjvYncxdUsxCKTUmWah4diDvPB9csNjt19oAMyWY5AVvek1pPYv5AQ9sGgn69mg4wycJiCAP",
  "key14": "3bf6ZGSidhLpfLWHfcyfPKUNDcfAMqrorg7UaguRvatqziZKwvpehM4z8HcHxZBzT7mmrKCgJXn9uwxDpPz2tcfb",
  "key15": "2hvjbN19SoCN3BLs6gXGCNJATRZWC3NwsdRK2Cwp8oBSgn1SKe6N1jea1mLqYk8syGosZBGD91vgDpSJqDVdW6J1",
  "key16": "4JecV4F54GB7TfG3vyGdYz44EjYpjTrDGzR28HUbW7MAQ5JawZQy5MeZpSANeA8vPewJdQudT9WaxJ5U4FBPYuXq",
  "key17": "2dKV2T17j1zGCcrjitv7k3NgwveFBvPo3w7A6Tn5g9bVox9kS6hvAxYGvDioLv6y7Tj8z9qycYRtBURxUnn2vzJ1",
  "key18": "5SDS1nAP19VxX5zK2cPwyTwrjXCkUG4y3V6HSZAYS8re7XkEaVmtqMfc8aBWbdmjBRQCYLxHLMvdEa7onAqEvMSV",
  "key19": "RhNUwSn7mxg4Lt6RtmjCSYhNSQCMEiecmX9GKDUjqSpV33MHcWtdsjeBxmjqYGXnkuMFK57frvxNB2Hs8yunNrh",
  "key20": "3xabsuBwcnxYLA7y2CVVTHzzYKRkd3evVzW17JMdfqGohghQacQAAkLh5ndCSz76EnocydUMUauDDGkt5nXgmjRA",
  "key21": "5EsMWTYwhSRFPP3GnU8Zn7ZFhPjk5SdDZ6WTFDiAWdVLk19y982gtPZu6pSuxEY9kXHsTTzHjg6sJp1CJe2dwwSk",
  "key22": "657JCXz1K35zQUnhkcXSkNLG6SZbWXhk7ZKycYHyhEEgS8P8B75sCJNoAGA2uE7EsXxsZjfaNggbWabysvgkcjxD",
  "key23": "3aR7G2azZhyNmuPH8cTeGQNp1quWb3JARz1P8HEh3sKQKwinNTDqAd7N794FzkewfJ5WeLa2NfpyPnD26oENR5Ej",
  "key24": "xWU6JK8DjxMwLPfKzdCufY3e3tiqRNyDxgjreKkLwDfUTnRjPJKuB1ZHU9sprqiQRh8mAnRhDiwbNANEPzugVeS",
  "key25": "2ayVobuZzMZ78YbEmHdtEajyGXyEeEZGSueTDf1j1DFNEZVCYykQHBzvVWkgoySWTisHmkSwsD2QHVH5xJDdkhNn",
  "key26": "4hir1cHvXoyNqQm79kZoVYbqxWS3CgsAF778EQdRCi8rXehgqughQM3Q17R4N1eX5roiVLa7mHqdLubnK2VzJLKX",
  "key27": "3qZYywg4xmpwESzoptX9f7ufNe9SyHKNJXgyfQF7RxyAvYHCinHJJppD3vcqndQCDNK3XeAUzmip8GYAGxGRCNno",
  "key28": "gSQXFVWm7PLHtXZE7rVFUdxYPPCj41MGW1edsTdXMqkyj7Nyuy53vNq3rUoSjCbCG9JpXJxLsyEr1ZUZmgyYJ2G",
  "key29": "3msYPNqF6hHRRdHiLHBgUr7TLqTdV9eEVsozGYraQoxDKHAW2BYx8MKBECqeZbCWcDyfNRNmodsrrvE27LMEVvDz",
  "key30": "5YD4mgHhLdW1emgd4SD9XfmfbJs8umu7VcQFPsKyHFCSRDKzEEZULbKnk64wHkmAoREYxe9VdUs2unGe1QddhUKB",
  "key31": "52wcv2451vjGV5GVHduQaknZ4eDfn9LbvyWZnn8PHEKsDHaDoQZhk3w2waPXFDmmrEK5QMkTpeK37CmFydqn9ai7",
  "key32": "BrNhzTCAZJUgK26DRdLx3RZwBmgVMAv4dyoD4N227pdnw8chqnB7tKkyjQC27iBjjE2Fx3TDhtYfRtkoM3DV2D6",
  "key33": "2UtA5VNC7zpNem85vhoDcUziRhrTdK1jjzvyJpQRbaNjfEfnrB4fBGVKMiLxbocUgPqij8DQEmbxSVs9eiKveb9Q",
  "key34": "3FTWehSSXmR9hzfrpioLcBEuopRGQt3YKnr615H1HAkitvHWC4HNH8frNahYKQXMArKmJ1DVV8yXH35jNudVidzs",
  "key35": "4ru47NGWTFRrtUnJ4cHRKqvvHDpMbgGmAxnqL3macvvRDhncJ96sVP6JkqhjtPk1ZUWxx19GQDTq3dNb4cqXEQ1a",
  "key36": "3VWPywB7UyWh7LPURpEdAs1edDJGUD4jcitwA3x8bSQmMg2egNwpDMhJj1A37ZCZ4DfUQDXtVi2vjkWTWaipxgLa",
  "key37": "3ta3nw9L22qrL658FD2CJxRzrzBvubzYCRxWEZdqzcjz3zyppT71G85c1WHeLwpmYaKoR4mnVhxq7GefCQNLNk3p",
  "key38": "25VNjUnFaYJU4HPNs9PXnnsNevjBTXNQftDYFzXhAhux91wq5xbSWjJmJ8wdLA2oK3a9wVbqfJAitwZ9ruMZbdwz",
  "key39": "3oLhi5k6jJXoFsaM6MBRqqxYsho1poneQF6xYEH3jLLXSso39i1Kq5bNJiHsYBkRJYWSFyB9MGQZkQJcU6oDTopw",
  "key40": "ocrVHiNdFY8kMUEeTUUnNU6Au45Txq5QUbCzEk4tKc984r3LUfi98CwNDFrDakU8KjTgxyUR6EqEtfwPX3Be6Cr",
  "key41": "2FtzTUzfpQm2anHmxpS1wAnrePLGrRFbsBDunGPntQ347SBwgFyfyP142XrsRAxdGyoKAR5CRiyMAPtFCwoZhHQk",
  "key42": "2ZQ73BiTSE9rFnLpCKrgAcxGk5nMrPbCcnPaTp8RFAd8hSMHHn3nN3qGcscKY2xwmuRTme6snYQrxcD7LDABwZgi",
  "key43": "8ukVP1o2VM1mffNm7snoDpNDTX8zz6YYittMLYpPP1x5ANwGLtK2BQUchdERLDo1CWDwVyE2ibq5LgSrk8KDbkZ",
  "key44": "5SGZsxkBTX82LL1pDEHaWajaNdQ2nE59ZMvT844JukDPwUNwQmgswHNTkewrENh75CHeSE5KNB4FEAC5sP9gtRmC",
  "key45": "4nEZPxqvmGH6Zp8FKyYTQbhQECNJspitQHm4wsi8XUexAbv5GKHcxBpFG2AAGP48FjLHoQRb1SNMKa8NX5AQk5uT",
  "key46": "2T9nditWCwNZGTeQpkhUA5vt9qjzmoU2vTseR2Btsz7Mo2jrPp41sfCcWgftRfEXM8NsKu45ZsKgzjpdnedPdu4c",
  "key47": "5RJzmSBThLacMukPAANsAi1tM1MXoUMWiBkQBbnPNE2WU7g56Zcpnm85TcZAAmaRXZNAsgMYJP185fANtW12ifdF",
  "key48": "2fws7ktRRLdtZR94bXa9foajsjvxKm1nC9tPJMr427iDL5S2Dq79arq3pGWtAs9u423rh5g261ox3JJbjFaVwUuP"
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
