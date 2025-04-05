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
    "5Rn9HW2pLJs3bQdMxHiPWYfetLjTCc9EbZ4QuGDaD7DnWGAHkQVbMrLCHPUqbF8Z11Hy3s7k3JrjwrTCuUaNrRWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BsxxMtmALTKXDCPFNPqz5TDKGcquzKqkdYjKFXQuziQusQ7ycf2MApocVQc8SuwxMLaMDAwtUTZhXCspiipc8c",
  "key1": "3zMJUztoZGERKsqngYjVGuhQtgMPYr8RtTd2ZwbkFT4a6QiTAztVSDbyHgbFNUh8hBscpbAVpY4AKVQWmKCjXxbs",
  "key2": "2MzztoLpFj8zybRZrY1p6Uy7JLGu3p5uaUnKqv9Ty9BMXq48i1EUCyPHFoZuVJ4k1R9ZfHz9qe1oncSjwJeJ4Wcu",
  "key3": "3Vw3ES71xD8T27Ro3NBK2NpDCiyaHopNgbfEcoFxx7Bpdnu5mL9PS9wo9YHic9fw2Nc8cbZKP2YbG5ypEnvfp17d",
  "key4": "51qQjkY6PyzsBcf5DyqSwP7mSnac6o6A6Y8BWd8rSb97WUqvUeXkWFGzywJnyiTb932NdPMVeJ4jStqMbuzn2GoL",
  "key5": "5x2viaEPcPNkrXt61UsCNZbzrxfcPKeeNaEATjA2WfiM8EaLdyYGJPeNCYR84TE19do5M7FNPpceRTuQFsKHJCY1",
  "key6": "5hK47mgfc5k6kVbs5fWPoFSsRMUcfBLZMfq4XmBXnQP6MB4H6kXji97L4g7jZgq7TqndpKgfyZ7p1FTGcsYvy534",
  "key7": "3hjnZDwZQSsTMikMhtm1ZQ8xTLbVvzek3kBRxQxrEjSHbyKKfzhs7YXc9tAqezPL8hgdnzaa2QCuTbZY8REtopuf",
  "key8": "3nAwnFmwPDoQVqeyt2ZRNgo49r1Jm1oUm1eCzHvzr42diiiaeug7jgSVi29BHD4ncbTQ27wAFCids4AaStwFjRRB",
  "key9": "4vhaBkzMRgUyxtNnaCPCQFzxqJtKghjYRnNSroz11u9x9wNG5BRT66g2UJMhL7BLXYuVwnmTjTpCXGrVrywNBiDF",
  "key10": "37BVSZ13SwfTWPa5EUjddBF2WJnzU1jfc46fdDEuuzDvJ1SfGZPPMFhChCPSeFPTdgyz1utfmvyUkmUNgseHTasm",
  "key11": "2RUeC368AVsAVZzKxB4RvV2Nv4aAhcxAiLDDGMAiJSoF8H9Hn6zwLbRLG8Yg5BxfrA4SxmbmTHrmZJs5HKDbtfdG",
  "key12": "5y76z8Nb17WNFq1URtPp5toizAfE8rcQC7CDuKg2cY7vP2Uy2BjoQnSjCj67i5puVfECJx5MA41VGQNm8vXUy318",
  "key13": "39ysGAZJtywWj86Afm2VhugodzdwcRrj4hdqKr1xuGvGFkm2iCFLYs4nhxH9RuHJ3Y3esvNGrwXM6aE7tRgpmAhg",
  "key14": "3fNacp4vQwywZEkg3QnAuG4TsJvgEAH2CN1DuqaLA2nNx8aEikuPEbUsQ1T6Ud6g5b6T1F9X6an8GccTWkMDNu6h",
  "key15": "3YcAn26pS8T1o2ZumRvzEkozCdytkUz59XVYAyVrFCiX7rxVZUSSEsi6rmhyqbnF21TM5DhW2XBEMAXKnXK12Pgf",
  "key16": "5VJ8xTPML82zPJHmTjqwjGS9zgdeXbAF3SbaVjVzMfvV8aqqxPtHtx3yFYrA5MxfaDWiicnAtAawY3bu2j1NNmuq",
  "key17": "5u2wr2xAyjf69i1DEjrQ8cNUtqrxjpFGphFYSjCfXxDp5sEgcsfS4B6tXfUiiyoPHVp1bGebEVNSkU4Vuj4WEeeT",
  "key18": "4QHdFdG6znbMfP3g6Vcp4tVsMcfJAgwNgauizfth1u2RwQXihApk7NUDgasN532UHeqChLHC8RBJqqXrMXC3GoDn",
  "key19": "3rD5DXYdsfiLXkG3fQxkKxD4rgaHsi4TN7fiRW3qeK3AXa7VZhjn7CZMRxXSTcPRydkiLsq2Fz5xhAGRXC2ZX6Bv",
  "key20": "SgAJDs2uoS8xydwtTpj9YuF58w6e2h4rSWTd8vmJvTACDcd5KAaQYoZGi3FHDz6Zj3neh1CsfdDLuYRY4zcvPDJ",
  "key21": "5222jtWvTfuRFqXAbf4f5Hznr1VNbLVaMDxukBX143uwbVQkvUXu5yJfxBXD2yBBja4YHWk1BoB1oYvz1cznn7tz",
  "key22": "5sR1LBpqY7ZSevNg7h6eLgNbmeN1rFz9ZR6w2M1Z5jpGzNDBWN1M6RiCLHtJXLdGa4hw4HtuTFp9c36CD3dBZgnd",
  "key23": "56zDkMYgPpZSypnMo6QoXA4fZ6HTqqfyjyRyMQ6T4Udxmwh3PQ3fxVUBzNPLx3QRJeATh22L9WVPJG7CAi7JhtAZ",
  "key24": "4UP5ErfYSRiLV2NoNjbpE8af77kf2wmxrB2stpu4VNz4akjKAf9Myr5n5GY9zdwtKhPQAMnDHWchUgyoPsXm6SJ",
  "key25": "4647RDCFX47S3QFLy4MwsejD2cwrEwBv9GY5UG5ZeHq9ga8Hz1wtMABhvCX6RuxTZRPw49wGnTZXxKX9nXtwvTFa",
  "key26": "2mqMW3TkwGgTjhUuj9sYmTuEy8CMzok9DPsGh42iXZL5B2Kpo4ySFpQsknyGxMsmkYaHqBaXqyumsDCSHFdm5dME",
  "key27": "55uqE8kaTJHTqWqiuEGpT439bHUCQzzcLgRtXCZSo9K4twXjJBFtQ3Xk1x7MpdtixiCcxrh64PCfUCtboqkZuep",
  "key28": "2wFi2L3Fhhp5LwFgjtUH2Na7oRUSwrr1xi647eaQKPPkgFuEDQY4BeHHVtYgSpr9AJEEUZswp25G25ughefivTTF",
  "key29": "5cm6n9bvMeGK4AyMaM67XgWDEKU9t1S289869B4fy91PrUhksvQCR8MpgTgSuX4AF4iWsfBtjqZDL6TMkqaudUfW",
  "key30": "32CEG2LZQfWTmnA4ivDZ1nGQy9zFgjwD48LfyaM85Va9SppS1fGuai8NRrveUik7RYmJS2eVqPN4o5hsNtVTifgL",
  "key31": "2iJ37QMPyr6WLfUqQtAKR7ohHwLBGYsFjmAKmu38xVgfxebeDCQvW3eoLKrjZRbPAzVKfgXGiL5pe2gahauBsxRW",
  "key32": "2asL2J6oHvK4yf3UjhKCcGdSAjwvo63FbYa45754524L39s6njBERSw6wpcscXBpy6madQYjExhHbroYorSLkVs2",
  "key33": "37zKtdDt9NQdmPQVkjXUbwarZzH9ebRWNsfwXRpmsCJhVKnRTGXexrWu4SVdPhpWy7kLkYDq5N7ubEGSZafeQsHr",
  "key34": "3S8snHHzYU55qtYVR9AMsYeVkZGRu7pGw8iKt7xwatVAKQtAvxvK4QtiBXSNsq4pp6quBZeJvabX8Wn94xNJaf1H",
  "key35": "3qvaHvkRxeWhdpdbauiDXp21XUrBudu8AzxYQzvBCrKXZGKM87ANNkwKeqdVAnU7JDXihGJjAT3NusMDHsNWLuF3",
  "key36": "4cCSxggjNihxEjHnDjxH2zGhRihJTQ5XscygPUjeYH9jQExdp2JVKF9fEEhMsyS7uRnbigphva2YcsTGMUUAyg9t",
  "key37": "3ZkShCuZXTcDExPc3bytC5wETaDLkPRbzAFEuP95P9fkRnzmLLzjFz7jFLHLc3oJRPukF9FGLXYRSmq4VdY9sp5J",
  "key38": "4xMRdaDkBFPw6cs1Y9VwhWq75h6ijcp7xobgjm8kG5bYRFE4bvAfQ9a8DzEW5CPZ4KsnT5T8g8Q8bSdcVMpxwmbx",
  "key39": "2A5wk9BDnvfvh3wsSKXG2TJxiErLXT8RN69GiZup9fpBjpzkxnEMDz1uwvMRUz1CFxRkNcpPjHsprVScntUrfsFM",
  "key40": "2qyvdTXybYNb8eJMd9ejYwB6uTBxLyd6grMfRYKfbmGgSRcv2FeP7WLzgQ2t4BjFYUFzuPkinCHod133bjayfpNJ",
  "key41": "5gPXhv55uka6ZRZnBUxUq9XKNpcUi3ocUpcCWkoVZp9BVV2U8NSJXu6xvrCmcf5An4nQU7GTwDCXhufdS9agpRP5",
  "key42": "55HRqhfKbCuXByzMgGc92qrK4o5CS6xUu5WPN3KgyRRU4hjtWDJtJBdPQAcS4V23ej8v6zyzbFEwi7cC6MpJsTkP",
  "key43": "4UXeXkX4PvdAgFGKesuPckGwwudVPDvBAeK6z8cC2CZuXNV5zrgotsiVJvqSgRgjHEuKFx8CPViLWuTz2foPPExh",
  "key44": "5tDSPGWqGVe1XqE4TQQJbBcuoRx6Qkvd9WueXKQDbZwEPsSe8QowzZBoMNdnAfibf32FcNTEPeKPaQmwnwb4yW7t",
  "key45": "2XsLPCcVSh6V9y4osJcgZ9s5cNB54DpjER5T134u2yHq7ZFChyHcVjNbU6EdeD7U2JScVfVqsyBN96UdNjMmAAdf",
  "key46": "yF1cPv1WCi46sZah93mJumVcJMtpubXWH9Wig6RwVYQT3mzAUVCEDuGb4f8yenNyCHeCKbUbbSH6kkmXZKH1imw"
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
