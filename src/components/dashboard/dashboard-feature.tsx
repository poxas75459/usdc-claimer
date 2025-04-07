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
    "7poyxUeENV8u5JyWJ2PeVYBY48a4X2VdDwyQjnmektiv5dQ4Ug5ruwVhEvUhbUGgNmgPAHcMmZun2wYbpS21Rku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38eJ4ZEh2XjTz2BbrMEA7cE2p2zvqNkvSS5dZPrcum2JPudZFd8Rh2QpBhzLcCPnNNjdp7GQhZym9nnpg7tzjTAY",
  "key1": "5t4Jqmx5tSfSYvD1eo5B7eSh2ko65MV4UcfGxQ3YEaw1fFpGS4eZEppH7rR5LiMJUF3QAfz4wXAW7JSU9JZ8KmGe",
  "key2": "37dRGyBa9YHN8r2st53CbQ15FFpnWNM3gqKwmimdGC6iD8yzY2nhX2uznQF38yW4ssgiisH5t9T4k96S2DqAiCA5",
  "key3": "23qpmQRCqj2ZqzSzJnuNUGE31vtGbGXV9aSvmjm7xUbzxSqyNXRLKCwfjV4vmjHAwg5ATCjoasg3JqiFKZeEV72g",
  "key4": "3NLoxEqXJ5PGj9hwB5sRXHxJ1JfoqWJCCPvAfeQ7Ljn8BaFhgt2NV5ddvUmd13sL4ovM4xiSxmrnn42Sqar5Ltmk",
  "key5": "3taF44FPRxSApfdgzzj4iC2CxmmybkHnoVL6QEnXGWoh8vQTfgvypv3hwZUEJPe4eDUxAzihQaxXsYaEDFMRHEMG",
  "key6": "4eCHCuUa49MbTfKagdGY8R4R4eBJZLrFVaa5Hcf1B1nscPGa66Qa5pvta3quHSntRC62qp5hNEGwCNQbcAmXhw8a",
  "key7": "4cgYHrBCbT5hrGFTrNiMj7x1u4UPqbXegbMY2ZYWLExS9k7BpMeDgJ8xfvjU9CsdetsDGNqPEisH9byHC4cc4dGi",
  "key8": "52gc7TsXuqeBqTE4ZgEf6o4foQwL5wbBmUQtt33cnmk6KjQEJvDRDSJTFGd5A5F6eSCpQQ9cAcH9b5RkQBXH95w4",
  "key9": "4Af4ndQiYdd83fZcLuMnPiWvTUWWcvAuKSuQ8tXo9TViRKvofLtK6SyYCRoRP9pGmXpJAuVYHnBWJP4yccAro4JJ",
  "key10": "5pfEcxfZbj3kphY9ohyX6GNW7hrWWNc8JNFANnq4k3QrQm6LHdMq6fgGx8jCtVQLbBrY5q3XSzzwxyjifDHmCVqk",
  "key11": "21GwLHKGLr3hv1h3hpqG2CfyKb4diUQrZ3SF1UXnYb4f67E4eyWyMPLGCaLr3XdPzjriQ8qx8QeSkqzcomA1GNNs",
  "key12": "2YkA4gQC78cwwVRBKJRfw4jPcgCogcabPTA8hBt3kApwQ8krQAAEYqrFy8vAPKWrpyZ8LcjyMd449kWjZAgzLQto",
  "key13": "gtdsYvcxPRVHsFb8Ez58NANeUkoUmVLJj4Nz6B87QfBoRfvtPMKgwVMu8SgHdbqhCYEQwb86Cq8jMHMVQ9C35YD",
  "key14": "2p4vYmhumRSg3pDw6JmJH8Ct15R3zRdiXu7s8hwcEk6kfwqjCKKRT397gbK818fc6xw5pdwtbcYqusMgw6iTvTKo",
  "key15": "22sQjD6vGMryjEJMS6r87bR89zJzrFDQMPfHTePmkmi1H1MWcmvt4nYWgq6uZe2s456GUEFsQJpkzskKRcvVHKAX",
  "key16": "4TWiAunFPXfbhLRuojHUCnT4Z3xein5Q6PMWP9C1MYM66suo9Ysxk3e9grVJGgEF6Y3BGGBR6DNz2BEYfqfDq95B",
  "key17": "3hTctj36X3Dw9ctpsYUkc3Kac5ZVDSD1JZVqN9MgHRYa3eak7N9mQ5EnvREAFfMN7q47Bfb8sfDxade2oUNUdCns",
  "key18": "246otnewE3rPohVhCVA3eLY3KiePvccGj9B2SrZrHnw5DgnYPiz3oHtbGBSMBCHd7X8wHivQtwouPfVnfjQ6hKCA",
  "key19": "3taVKGkGfZcBV5QskTerArQtqbzjwNqngxeBVWNR6miHCDZS5AJ1MYZjTnmCSUhs55YDiztZew1JmWXzxrf4s53U",
  "key20": "3YtENw2U86ABdE71pCs8PqzXL8JdZ4nxBRhehCFAe5iWBjFUon5agaXSnc8VmvDwSnzFu5a4y3uuAoeUhbypv52g",
  "key21": "59nVjPCALnUE94rE1TKxDje2dsxZtxT7hK6DEf1r7t9zFsVsgckf6SM4ANABn3uQ62xLkctWL26jYxPAcY6y32ZF",
  "key22": "3bjMkwPbMQEd67Y9nnXVcoPsj1qnoubB8SyU8S7Em4bi6dLG9CaM2ttrcVy8Qy1WK6YTBXW31s8r8KR6226w17Tr",
  "key23": "32zqoFDkgqizt5XqpXuYv1VibsPjW4cGz5YwdN4o15K3otkzegmHxxQFsCzADWMJBFjV1h2KwVcQU7nU4rG83z6G",
  "key24": "4xqN8bow4goxyN9mRYQB1zH9Xwqp3BGerFZBFnXdv4CoLsaK8BTEr6Cs8JtDfibtem56btK1tmC6RtewQb6GaT2e",
  "key25": "5KZZVt6nesGNqCFrTzw8EgSbs445C1h5dtC3QN1J8WoCjyKCncf3tR2FxtYTgV73MCPZ3he6K9KLANEphA1hwpVP",
  "key26": "3UT9dCsWwKuUHjko3T2gxUmJBy1WwFLcDAsPJ4Wkv4qUvXJ3p5ZRK5CZoBSLFiMuisWvpfDeGMJYYndF3Q8idSQh",
  "key27": "4dBbaGcBVMAGupNBKdCSjQ2895YHxmoaTGU3bgvE5kPbgHzPeqHgTEMah5QS8nDPpRfhb1vSMj77GF6cqdWMQiax",
  "key28": "426qHL8c8d5CjeMABpBbe1y1THrZXoxtrsRKRc2XsNoPJNgwt2ZgPgvowwLBHwCTU2rqeZteyKi6u6R6sBjES873",
  "key29": "3i7i9uzd4qRdwxiNEXRhzHPhfU2PWBZWPqmrs1dh13p2HrrcvPSfUN48EH5Rd3TK62VY6hNWUrqYWwKKomV71Bfs",
  "key30": "4aRbRujzjHUNtrzR23HrpWc5Cakgo6yopw14oFZ4YZBZHEjeGiXzSnA296iQx83Fxt2ycJrQLr581eTciKDNwjLB",
  "key31": "5kt23fRuxwKT3Ft67M5RGvyyFLjATvctPr5AhMTUNRQTu2GaJLegwTLc9DxxFJTjysuwC4TUA7biJpn3dEa87jLn",
  "key32": "54FLmPrHvd1pNrA5etK7DtHJGxQpocdBptfqMzUwrGSuEvLwVzYiRCvg3tDXy2qo8kGX65K5A7aFfhkQHDnDvhnn",
  "key33": "4Px5dtxyVqysUNGxHwUc2UysTbKTejsUaUASZsvYhXYUYhWiRemYdFg9WNJKtXZroNzQyAiBhBw2ZcU5sox13tRU",
  "key34": "3vWVEFMzYFK5hdWJwysqg7m2GpqLF9DrLA94MxxQFCR68oY5N7iTuiaAm9hHorPfcCMx9EEM1twBK2XWny3UgMiL",
  "key35": "3X6ofCtyefkwYQEZnTGnLccvW8UKx8qShV4n5m3UoUdY9GHa3EVkXshLzBwoUwum9u598eNb4kHKPq2kdkhbGxfG",
  "key36": "kyKNfQ5Tzfxmi8cWnWt6cXN8GtePNMYeKtRgdkeY1FEaBM3x7QPBQQVnkmRmMBTYUJ4DdAZd1e98Sx6a2Dxk6Wj",
  "key37": "2CDxzq7cBwS25nFqJxn1o4MBvoZoQoNU4Gbjj8b5ZAWLN4Xwttb7ao9jQ697rUxau2ZWWyfKuXXk1ZjiaNuWs5gE",
  "key38": "5FHw3L7SqEWm3aMnUPDEC11RPA83b4JNbNBgfyV96uN27KMNBQKFsUACpjguQ4X6Kxghb42pZPMiVVncRpUCTUrL",
  "key39": "5ewFinDAvod8mZjexcfAmJRaVHmEN2DQ7v9NJyAptakfgNzPfHANjnZusz2fsKpuCMTiAtnwYMCcqzSWmj522bsP",
  "key40": "1JdyNuViMBsSdDJFtYr5BM1ePAKg6axbYFqfK9NEsdBuPRm2r7p5iRwKmvGffHzk8Y8ideM37P3jR7b5mKPx75T",
  "key41": "7QPYmp7511WFKTnfPu7iYuAb6Eo6teaToehqMWC8USwXSW75qftCbfe2Vn1xqYeVVj1qkHz6wqchDJJsDtLnMaj",
  "key42": "5HLzWG8r9cziEtuaz4EQWy9mSmY7qT4sDqQjJ9XRdooNP14aXccTRKjaCB23hfoZ6puRWzqdvPioZ4tAgPeHwuLn",
  "key43": "28n1srXKq5CT6QQEU15pSXE7o4vVPSY5pdvzEzLhfrvtRpkDoTw6VKfmJx2a6cKeZ9Mf4sN69RgBEovpBxyNLnEU",
  "key44": "2nSrHvReVdQ8DPLQtL5Lqd7Xb1R37rdcbEcx7HvG1CWDj3NVvTE1tzWYyJ34BWrHcLCVVW6Cp2Xtowaf3dxzy2QH",
  "key45": "2qc6FfF63hU5wAAmTTRUUVGh9pM5iEfGYBTZqUhrWmAchzCFH6smbo98kLdj6Frn97gXVwjmq8YRZhvZMjMxoqHQ",
  "key46": "5XRZDaJTQEoTF4r7umjYRPFf8MmexhCveZsDJ736PS7WhSq18prcPd5NTzP93ghDciDdBpQjChgh6mqm5JAXDEXu",
  "key47": "bi8hPFVETsfhD93J3MZwWrGpn8ow58gwHtmgRg6N6ZC8sMfQEe433pVcfLErnhHRmeSKnajb9NMXLBPD6T1mujA",
  "key48": "4DgHzRdCkKSvUYJJXgWWAHuZpc9AA7CibsasHBRNPtBDywfkWjf3hSLq3SCbTUUnui78fGiPqUVbdjoizzsZtxtc"
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
