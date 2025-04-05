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
    "5E8eDwoDhkPrCLMGi7D6SqdeifjyNVdpdPWH6vsHNMnhRr23Xyx9CpXzseQ3FxM6VErYTdUwepfMgeNBmTfUZufC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9zkdoEVdUqmvp3d1aaPhnu4FosLgGgzr35Ts6DGKDekoP7e1Y9HJXefDKa94FPB8KBgWiMsEK4pCgGEukuRYwN",
  "key1": "21C9tZsGr5idL65fMT55yAevwz3kXq3JzA636cw4x5C7bGPJBmgqTeMJ7aioRMD46Wk5sC1946iTEFSPDvKbqnbd",
  "key2": "5rGn39gxge49FA7NRPHojUmuUpwt1CEamfphLzPGW6AgpfPCRGNgQS8LPMNgtfxBinqNgszjG9dNgqExk4ET3b4c",
  "key3": "5cq7J4nqUu7BQr9ATPduUt13rjLQeZJdarti1hMFg2SCf3FLJHNJXCvEPDd7mJHKvgWugA67zxEuLcQiBq6TgMEz",
  "key4": "4V18P2XX4V93VBaZ1aCksdhMre2niRHRJohYm1SaT31FCyvi8syGQHEt2dTYeUBwo1CY4p4SAN2Qb1uQWPriEjn9",
  "key5": "5yj1ebh6zBJFk6qPsARAFNQPzNY7pxxFpchsAFEmPJJVywq3WfHRRtaKZaKxhz7Hy7TVK4AS9fVYHVmKbzQwKLrg",
  "key6": "4GPPLLhLNH1YRVCr3nXWb4qGbpxSTZnTGTDfARx7XRwbNnEJGRAh6HHiYXhcBG6euvWj8aPyhh1s8QVAGoHvVhzG",
  "key7": "4kWoxbCqxm2ieFt7qZZZPmwSvmtUFLADhiEPA1H3rxHQosgR18n19zoVzmYV2g2KJE67fxhTCnaCErhtpfPu29wp",
  "key8": "5TLn5SKU8oZ8KBM6vT2v5cciv115BSeG4c2RTjG6vXgZqrQXi2rHA9TJY6C69nuiG2PeGZB7oDHmTY2NjRkszZKt",
  "key9": "5pQfaue6dCGGtijVJwaWbcHcABD71a6DJLQUZLuqnybGtk7eMuWCtQybE5bVRorH2jtScKM2NgNwRh7MRjkvSEJM",
  "key10": "45pUzHRPhrnA74nJYsZregqnZorRQBu7aLHV1c8wv42K7PHbdfbwCn7GuAgEY32EDuMsZGMDEaVdFE4XtXpWGaZB",
  "key11": "53EuwPjGRKg7Xpybnb3SkG4ckC7AhGCiQ48Rup3JwM93xVRds1k192iRnRbSDCnuqmxrqJwkNbT7JbEDt8KwGZFH",
  "key12": "5G33D1VYQgSLf8h2yM2PiWNubmnmFNYKQMCECM7QeFEkX9YJhf5Bhq1rS1Fv45bGx35uB7b3GtLYe7Hva5unR5dp",
  "key13": "3xehk4jt7se4eMMXQ6sFFtXeWrXrAjQr5Tvq9nXZBjWpvrBnEKVdkJkTjBWqsADzUd9oUxhUzYxHFDatBFWCxWPW",
  "key14": "4MbLz6xQLF2SmRWqTBNWe98tUv5b9KtrrzzhXN7SoU3a7MAtZbfSQbr8TKtrpfan9mdKS9v8NKpuRc5R13bwadjY",
  "key15": "3fZkdi4ECKN6Sz6ANvmrZfMUS494TF3D4vNYuQdnwjcUHvc9gwBA39xE1DgjZCb5YF3L7AECup82oiGxqDaPdzZ6",
  "key16": "21Js7tao6BFgyKVt7sqirUQxMSEeEypf2b7zPADu611sQ93ppQrXwfjgCDTLSTh2FsLYevvpeZJpB94LW2UJmszW",
  "key17": "2JUfmPU6ju7eoBRHPv13uXfk2VCmMTRBbrwMVHtbuReLNsojzQE66LtqwrLufyDCiic8ch9TxCh247h9jWqQBEmf",
  "key18": "22tEJUuzcSobEYAjtwsawc78NM4nAiqM8BSp7pFUXYUP1TKY69PzYMSxETjYfkJB6PedvVSitPD7LZagBBaadH6X",
  "key19": "3nrri52Fjroo8imHbBmEKBaL2UB2NVDxjnzApJX4rBEyoeUT7B663d8L75f1EoNjz8WHaX4QTrZetFWGG3iCy4rz",
  "key20": "DGyEuTmLRAHgn5Zdk7S6m4uCc66hE8Uzm41zwBet3oYHvyn1kKyefHyLTbRizAKjtTYqzijLXMkzB6koGtAvaEF",
  "key21": "4eRWcfCNVj9ZGBU9cTRShSV9yaYxVZDtsZz6BW9u8M7ZYrztVTrMMMvHHveBt2ziGR8pxHivt1nS77dnwEx5G96W",
  "key22": "3KPmZzUNTMagbPFTZFkZk9jaiRZ87Nwp7kWQ1XtuSdDMyKUxsyBPaweBKv5kV9aDrCNbRv3KxGgmddUjihvzSBpk",
  "key23": "4Gqw9suVSxRwkLRHJiMiCw9L8Hz8YoLfFWjksoaVsV2idbxyMnKbq3rFEahpDZ6B5SCzKqf3EZ4rsgcHdADCz15i",
  "key24": "55YjQk7f2KC9ogqiPyN7B4Q7FP2HQiy8489m8ebtL8xDCVvYay1DmRdbmjraSeUsCUJo8Jk38qiYjoZUKmRc8dtT",
  "key25": "bZzGQt4ijTAsNgarypW8RawoonhrZYW4kuGwrKQcMtCAvYaabpRDkNso6kKgm8nooRGmfF6LUSw1dpubQB5mB1c",
  "key26": "57iSRQMcQ8SijfVEszg5eDwsTEcnwexYPsoT66yWjqV4CVHxDwZu96t1jimW7kGyeJAWzJCWyXkzoQJTGtQ47seS",
  "key27": "9HAdSydjLQvmSxBgDL2k9Tske6FVs3VzSayV1Aqko2oRacKSUYTqax6d43k3NmV9Z6EkUN4PcA8ou1iZmgkFGmV",
  "key28": "xL3Pbcp72P7Tp8UtTch2Aoeaycayfh4Ebehxr4P2iHGpSZYFi9omtCNL9ABdFxB8w7Vk9tv8KmmhRMGpe8oikc7",
  "key29": "3V2E82czyvvqyFtYGMreL8cjkMu4Ani1AWpiuq6hqxGys7TqTGhTksNkEakQijv9zY662KcPWoRvUzjeaHAwPCxe",
  "key30": "2ZTAQuDs4UnrDXWTZbHoki5YssVkcCz1Ee1bHpa5sLztgSkvEZp8u67E7wdK1q1T3UgRvVMKGDJuKghuEs1nwKq5",
  "key31": "66BUm1eK8RQiBxWEfZzot6oP3M2peW3WohyTzpLRTxMFbnYjWm4jamjtYc6f5fWbrNXD3aJ1oqjr68KdxTQiuXty",
  "key32": "4yWTia3wr2ciJbQGQHdPU4j7BrYZ2wfVrXPdX7GabiGhhKohfvSPZndeP19eipTAT9bwY7yp58xGvj7wvnidbUzA",
  "key33": "5iMYvsAH2ARmNwj6Q8bN7i8QT3x5eEpdcGhiKCioiZpJ77jqzRTqj8hCG6MpiiEag8hj4mgiAQpoVt9GjgnA9StY",
  "key34": "2w2pHapzh6MQwWy9LxB1BRzCXNvRM7Vrzta278nY2FPSocRao8BPC5ixDH1LDYB23bNr3bg1Wi4r6S49qNFxKCC7",
  "key35": "5buyBTdxTBr7DEnnt2ikc7mvzWYwzsYi3sC6aQviwaJF75B2f12LzX5LDVjXosCtrxECs5R7rW67GksgFE3oJnaE",
  "key36": "cDtXGXD6rgww3P2t2zXr6fPiATZaFTAmVvZbARrQ4HVt7CAgiTkaWuWB9jC6EQuTPqsnHr3CqCp3CSfbrYhGQ6d",
  "key37": "5NUHf5uBVWoR2ZVc2mZomjVWT8muofEK4BPW2yADr9a4MJnHtgir5nCPQQhCXAcshPkDAnkzYmMEPNe4vUbnGu4Q",
  "key38": "22KFacbiDZRwcQJ2u9Gfa2wA7BqJCxRinYcNoMNivZKu2AzFv9w6zyX51QBM1TE7UkJf1zkgVo8cos2DM84o76yi",
  "key39": "JisNhhditTtDzRqEjK8ikcae5gm8cSJvi3hF34WqXwpCfwzGmSMqC7DD3mmyGGTm1owA2uRJrjFER7yNZoW2y4m",
  "key40": "2bQS68GYwgB9Tf2tR8HZxcgHPS9N9Km3CytzGoebMoKNwgumJGF8DPpXkMacqYqUY5eUWNVkiaMio4JNF4z9UZe6",
  "key41": "5Wmj4REcm2FEFUxjUxthUZzFvbSWEPy6vA54kjDvg2tHYhH6CwUW4qg6qrG2FRMUxPxHYSzME5sNiGRFyPiwV28f",
  "key42": "2jPRguFfi6BQCCktrk1sPbVzcVEwbDksMQAB9QeN8CDxrDQxZgEKfQeNVsVmydaX6sbLDyzE8Qo1kjSecHT78gBE",
  "key43": "2yKycFU8UEXBmhczMLE8NDHi5XrYRJPMjQ4AQSngb24Br73YRLF5M7teekaHZcDGrtSPoMfGpRFBeguCb76L5LZF",
  "key44": "64jkACoaf7NjG2rPgK5DFAJcN3sxzxgqyGjMdiZtwbQ5FtjEfj1wP3C6vHzDJr8DMtGkkRLWQfywb2pViyi6spXR",
  "key45": "5JRB7QAEAoSAij3FycDqqNkvtGxLrdxXP61Mg88XZV1RxCS1usWsVoGu4NBZG1oyMpHtCvZf5Uv8Q6c3xgmpGaZM",
  "key46": "65Ns6APkn7UW9xdq9RigjG6nxY8RjHvWRZEVjpVNdaT5QZ9bWNrStrTfxb7aMsYtLzc9bjpLkzvqFhCVa4HEr4v3",
  "key47": "3wkV5mAC4hCwGwKGPyUpXZsDNoZSkzNL72UJPmtVxKc6CnXeQB4prA3pqMyzx4uVYz5GbJyYzSs9heAL7Uwou6Vd",
  "key48": "1LPZm6F8zAAtXzZpAXSFZPYb7KBeXqrmZQX4QhE6z1h63dQqx8SocgPjK7y2AZ1X2n9ocq12gjBs2UArgortpuJ"
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
