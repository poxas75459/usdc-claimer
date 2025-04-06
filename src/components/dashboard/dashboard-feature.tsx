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
    "22unLhPSYo7JvSVDpo21ZTxTQJmJuQBYCAkEqiGRp9RfUofrAfekxwH2c9pRX1P3RqX6uErWYMtrWLYJ8D5B6Gz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktUTENWR6K3BN3vKTxuWzdCYaoNvprySfkjvviJHQtmJKLebPBGzpKo4R9WC7D8TsNiZKXNEqo4fYTbNjeuuWSN",
  "key1": "LZuFGafQswJbopMTR6WEGbHQUnu4xPdar3PsxDzceDQU7XE36S5Hx9G7N8uRk1MzHrYrYu9uqHbmgUgdhmKxfFD",
  "key2": "2egUtFFjSCEuF9qD3i32FLVzTUqauAuxBJzhWN3ioJQY7JseFY3wrSk1qYvhRcRQ7HNiVJEncHbbshcZAi4M6wr3",
  "key3": "46H85duJ8t8g11aGwBoFtawyk8BfBcNgFsfen3YshxQPu4HsQSFh3j8XW7d7Q3gXF62rEkAMHtAGsQTwG1AdPZqc",
  "key4": "5cgauPxVrFfzwWhdwVgH3qmALhegyN2xvwZ6WDMmpPYTZ9ZBPrqwCWTd9SiKeQZr1opCHEBdnY6GNP72FH7uRNPB",
  "key5": "4U9NqPS9Rh1fLwB6GRgRyzDuGQsXpdKTuUvmVEg6jPgzrqcV8uREQUMXSkinopeTHJdoQn2g8ej3vfoLbv8xbQvm",
  "key6": "4yhmnpCBtJYSJLEKGHsGVp9kuZeBUnmU4NMHHsytyznT9syvASEk1oTq2mWedvXjTkXtWHAmL7XgSQQgJ5ze1hJt",
  "key7": "28XBVqgVbooNruQZXi15n6Y6Ra9AQrp3Di7aJtdknwzrtDHPdGcgXL3mNeXVDiRzZQMPGbgvraptYVGnTM43iQth",
  "key8": "Z2AcCfuKd4RP8wFEERuLDk7oinoR5xpkgHyXWfM1EvWVyY4LXUsrhCXMWFnY5Dr9NBcsTbkEyXtifBf7RUBvdJM",
  "key9": "3iHwyk71cBei92tzQvnjM4zTf5uH5tL7q663TdoFZ8eDRXND7JFbPHXiw3z92qkhweck3fwVDbNhL2uhtuxWwcf4",
  "key10": "4cgbXwPcfLPUGu9LTGL7xE6cLPNHgwX7VnaSBXbZMhNRYWuRnw5JRHdGG6e3WSV5iCbYjj7k5tdtQYiLmBKuHkZa",
  "key11": "2h57WuFoTzNuGuZMvYUfJZSi1LZUcsmzDL27WS3So91wPh2axQhv9jAC5a8Fc3Te2Ls1Niajq5XyPTdQ6tB8hxip",
  "key12": "4knmzrNsdx4t9rKSAyTGXgxSvGVLdosq7vRRty9jRaatBGTWF2UupCMFrRdW28ppt9rLC9gxBPopQLyayoPMRosn",
  "key13": "weUXY5US4NeCBExHQnTQWfyiEBkXfv7MfALMEeoZ8zrnkypzDzycoHBSkiVZEo14UKtBG533up9WXqqEGY3c81i",
  "key14": "FCaVNXeoWxDTENognvtrsVU8PKdSePBgnzETYmMHPApZTM2VaZmzgRctVoLXmm6u7aiiPTRLBrgoyxFymGXrKfL",
  "key15": "5Bo2mafCpzT9fgdaDqcYJKGmTL2FHxBMFN28oSJvJFA95b4zhgjQyGWQCAuaSTZwpie1AtMrTJuZLtVi5JhhyiFq",
  "key16": "3oCQWnTGeNzwBn1yfXFsnYgmKyFrka5vKcTxNNpwPm5eNv7JHqADBUiEgFJaXBqQX57N4j4MzAn9TJcuQHhqKimh",
  "key17": "X2P5GqmsgZFVAi6WKbCFnE2qjKk2zDGsS7ry8EDcfUyRSXjjrkZyvcdVaF4jANR2T5AcBSCDxvcuSQekZGdsNpv",
  "key18": "2p6jUfU4mmjA85r63PAG1dW9M16GQ8wf4t6jDAYwtPiujaaozRNVDJZKPHREN4Yr7aW1mTm3ZnLPUdrxjzPGPCEX",
  "key19": "4amr3hPtYYiZd4jsGNhSstx5XKjgDaqvPmB9DK9PqrDASQxnBs9C6owF16TJMhZZKNqW1fnriBw3BeRoSW9xiXp6",
  "key20": "4AaaA7T9t2KQP7N585g1wscWnYQ1KGQ8KdjfMNm8RvTGcQKjBVCiCSYkAcpUtgK4pVVDo6re1PJpREpPzMc8tHiF",
  "key21": "Kk5vQ3y3cwYcdbN5JvLiMzAxFzavSTei1G2ok4j8k63cTwpfCEX8ZxFphsscc2oPHtcvwRbV6MtPaM5H1E2V673",
  "key22": "364yCCoBjqU9cWJ9yyKxbXJEccqg2zDtbcmGNqWTg2Mip4msa2AXeSeUEGFZFUttMkwntcvJgo3rAm9dHa8PBY12",
  "key23": "vePR4aAeDeb3mHDvyMD45ycVYZMqddLW3V3KHhceo57A5FmZD4W5caKShgumJGpQwx4PHaiieiDh78ibFFAiQqW",
  "key24": "2CoGDyLnbg7eDofenwZki7M6APPc3hGVFU2RrsckRbczaDNRfoHpVjyCvS4Up7m4Yc912QKHKoQQnrwZPFrmdHz",
  "key25": "297eyb4UqQ9LkqVLA4dTtKhbuKikVLQzfhnwui3DGSLTYS1orZG6cAtDntTdtHvXJeuTy1cynZ8EPtkACDVPH81d",
  "key26": "2B7vUoDhhLLGc828jVNoKVKvVuBAy9dXCUEaAXwYyh6qkzuZAd9nCQjuwJHLBctXM6nbLU25intvbF9kNAmt6R3S",
  "key27": "LRp5EVMdLmWp6MvcwSz3rHnbgwJUWKZe4jMkMxkyP4cjv1MjxgTozwcH1XXUKjdgSJGTGa8S3C6RnbEPPKW5o27",
  "key28": "5r7tCqijRoAgv5kyUG3G7oBe7yNaQd97ALiwx5eF6UMUH2pNDjgMEG5fXqBkVHBEpfZXdX3RePq1Ds6b21HenW3P",
  "key29": "4qYwaBREXjgrWcg44J5jJf21CrFwBgtPp98f2JY5RNUhwKwzMBdECUi5mxomqkdD5SfDx9HiSzH3zHD3QFRwhanL",
  "key30": "5k6MU8HtRnkd9rFprde2oompzpCobxAVT1VFgzYWc2JrYwRGQSLJ4te7vMY7DhYxh7h8aZcv1mnS3PxJHGCEwGk1",
  "key31": "5QFVLTsNtHxhkgHP7oS1JEfoMaWktonGyMMnzirpuGvsmgLWnZy9ryZ7f7PbEqAjDcJKd6stPp7XoVoiyey3ThCW",
  "key32": "2UFFCJ1SKFJAoY8RZStAjbHB9LWcZ9P5CP4xNBy7vSB5uPVpvSc8KJTBkUFiUmmpf83fb7tXKgC6TXJdbcyoyUAB",
  "key33": "2SzMuPS9u5deyaD5mcZHZyvKEEBQ8u3Sv3YNPfyjwUcgbAZaYDn95k2FGS8ojcBHMrHtJLkec4AoJ2DRdo4o5e96",
  "key34": "hmwHJypfz39oeA2tLwLMx6GsGbBsAziNw6qozZVZfjkCALa5aEvuGxNCqPctJm4n1A1p9K25FwwPe4wNdRuJDdr",
  "key35": "4RV6W4Uhfv3D77U9N8BNCfMWsPZqQf51gcDyHBHzLwsEJTumyCnamYyvQgGLRbjRydwFBEZZhAXfafzyFBRRybzD",
  "key36": "3surTP5pqVv272BkdJqYxoEeLGGLxd45A2e2Aqv4bnF9XVnxxHRptdXdueqdrX3oMoLDGt4bSTu6353GLbeDN97w",
  "key37": "5zAB93Be7MsGeKUDyz4t9EgGia6BnSN3b4NU63R9NRrqtspJir36YLE51UimsabqigyWCcMr3Wi6tpxzvMNYi3tJ",
  "key38": "55NGtz5uuzm4agdqt7grparocM51eApShpXbuU2bHLTH5X6YjV9eqyrg4jDS2PRnUfiXqFbCj1u6YY1SsNCngj4J",
  "key39": "Uia57sZD8bMZMYrMnNvnvA1vx2WhPLCGDD8vLr8YSQ7xV2FHZAowogjtCr2podCFTfiCUHomWHDDV8wa9MfXkdH",
  "key40": "2Ay5mWkCymLsfbpsBra6ZkqmFruR8nv3GU7a6ySPfLeQ7sNXV8p9BMYaqx84UtC5uhz8ch3ags6WmwLAmLo5NDZP",
  "key41": "5m1oTirt25DHbmJYWfW4pLJ6N7ywHvaJ7Qnhy7rgUgaHPv7yZQ48DhQtZm1ye3GNqPbo1CFYFmHgjdx1fpzht9td",
  "key42": "nDzKhgFPQk6vfrnAkmRkAj1hvkMtX5pefWiVMtMzpsy1MY6Xq4LwKR8NrcwbXpG8MtoGb4GVXJGsHJtqSiA7hs4",
  "key43": "5pJzk6jxojY7kgjaaHgwjEuTvKknwWrcGP13RgENpnw42qdmEzVNE9yGeYE1xTp8v6ocgPMDW4znUozUSMMvCPCo"
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
