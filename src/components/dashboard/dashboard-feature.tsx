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
    "4cJhdRC39kjzZjbMrNuSizRHHeu7bsw6hEcYYKUYf7CNcjkPcTdnWSz79B3EFUXhuZdw6WnFiWccapvWeB6LqcR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVYYwcZSJbzkJEoaTgT5cprL13WXj8H1VRxkWPShjf5hjyKmaNMBKryMT2ctdE9B6bhhCRkmkavRwUtsYw6b4mn",
  "key1": "5522tGNsRFdRM9MLRdhySDTdkhzNDmadidBtRjgkHRFagYXt21ywcwc5pZfffrnvbtkLEuuCi222YXTUMR43pWgd",
  "key2": "2Av9mxqAAMfBA4BXJShp26f672esxdB6ArRs6jb99PqQgjckPdrKUi3CVMaPMCg5h3dn6Pc9qXxzUBMKsymy7pxS",
  "key3": "3jvrsGGgZh1LJhvQTH5MUbttMhTpaSgEMbcobZ67Pg1BPzcYAjaquneCt3qm9fsikoyG4wiyrfDCo643UGYtaC6b",
  "key4": "22Exj5dEo2FTUbMVp5KdqeVkYjV84PNhYhRvET2nFBJ8JDmd6UondKg2zcyTaCESMzqNA3gcniQhjDH1X8aqJSoq",
  "key5": "2EBpGzBHSz55tWdCTytqyfTFqvj5RcSdHkR96TForefSm1RQipDER3aMVTG277WAjXvMX1PdXsDfVx14v3hfHa9k",
  "key6": "4GxU4v2dudAF9GMHBJcdodbaF4D4cs4QSDUXXPzf2VEWYKa3yFuLgmkFth9y1yV16qUtEBLke3fNGLLFqJQunbuk",
  "key7": "27aQvFvyyRNrgKxnsQMW7vAunJhPNoRdQUvqeUiHgWUXH9nvLP5dnPN7ziXLGUiZ2JcgnJBAxPZUxJ6FibuKtnpK",
  "key8": "2QhNhvNMiSPe7YTUtQ5DMzwkpm54BEuQscN5WNzvSJCjcFW5UxrXZiegaft1Vj84Qi85QyZ7kyFEojC1Cpg3Ed2W",
  "key9": "4qF4MDZme3GjTh2rdpmLPkozpcok4rMWfEjXT2jc5nLrJD8eDKb7sGz864W85ubkrH5zPfM18q9C8BrMhndsoEvb",
  "key10": "5A1owZJJkuMve8Loa5ngXNVpDvM59hBNHGZJnfGBWk77Ka8h3JLkb7J74vFZgkxiizYt9dHjJMV7Kq8rTUF3yub1",
  "key11": "maBad8SUac1GVr4CX3K6VkhmQA4PEkHJ6ssSsBfcMprnZjnALets6gMfgB12hP81xDx9A1webBi3AFqhYhFqRTR",
  "key12": "2gemxLVYc7gVqYmR4Y3pVZmH9gzC4t45nwkvEMHsRvmLAsppqDGmG8ULq9LMrZgXTKnczNu3UMV2GpaNVw3iLWST",
  "key13": "5j5VTeMjDpqvKJQCeQCdJHftYMAa41LRXKT6ff8qKcdhP98aWRPuUVfv4WKAvV62xgrBpeHh4FfbhpUZjR8G7emk",
  "key14": "3co4cegXCVNFJK3vBXHrmV5m4CiPMzaSTq1uvTHQ9ALdL5RiR6zzrsZNvzSxHC22VwT4q52q9V7ppxYkMcPz6Qp9",
  "key15": "46MDaTWE82qsq9BoL5WajLoZVGo7YMH672Swp18VC7KoUuJo5ufbpraqmtgyFDyA35e5xaqZbh9G4mWUhgW3bVjv",
  "key16": "qVj8YaYosKee4honpj5AtY82JSEQrgZsRGKbTb5azbN71FJs9DaUE6ExYGpx5YyFjqEtnoXN8hZ3YrB8dzfQ8UE",
  "key17": "5B8rUd8jCw65spptmX5QPqmmK9RrCdZr3fZJnxweVKer68NtxrYwMMuaNzzQm2N8SrrjRZDEXT2u9Fo5T8yVWisJ",
  "key18": "GE7EkrF8MV9KnBTNguAjvKudbXpt1cuGuGj5ZPmC3xJHrXDVM5xQnmaeuo7P3hScgohq2U7acCf4Jj9AbHanZwG",
  "key19": "2ieynaHBEn8gftRkRKHW6xio1pYAMkuRS2GRzVpp5mZb3CdqbY2XjTMa481GriwHCBw8Kw297tm8uqTUp8gyCfVe",
  "key20": "4anLPokWKE6dYmiAifgCZUnRkNJbgBEwx5V2aNzC1qiWSUVfp7AqRJwwLkFE4CYKW7tY2euwSCZTw4D2FegXFpy6",
  "key21": "59gEwKz5LeDtgZgiM9gfnbVz3VKeMGtN3ndXbygikkbvsXiZq2hbzRTtYt4MhChhkq5wPk25gAMeXTyRtuTMnLeQ",
  "key22": "hLGxB65bfBsd8d8fLhC5r3KZHuGALCwgdgaaAkf69Tu4WxGrUvYcxoXjpf7jqT5nwxeDcTw1CVCZAfXdb5x28JK",
  "key23": "3GesR3dUp879VYYcUKD21GtAsNunSRkmuj8GhHTrszCGpaqE6Stdvq7gT14NvdCnCHR7uHZ4asbrg8eG2bmUPW1L",
  "key24": "wh7pqnCfMjEB6VTmEGCre4eW6VFX38wEfb9tQGm6urUWDiVrUV1rpLPXkp6qTu33xdLQRdLBqPU2JKZTcnj4utP",
  "key25": "2fxSvGxz43xJtcwdDviVpKwmxyQ6dtkEa3oNEkpHCau7rsrbuPmLEyBbHZj5q2XB1Cqs86utQ3iBHJuo5yioTgUE",
  "key26": "XXdGkHNac3s1yAFMqy251qJ56EgDWvxPEsH5wb6cjsbzwJ5NJpNKvNdbfwANoQ2AsM722uuQkP5rDXDMgDZAB13",
  "key27": "2AKYarXAWpbp7dyYiAru262fHD7CtZukXKghDcNMUHxo7ZUVWbzobfJvkE5zu5h9Nxh7xUT8eLZybAjbBos51Ue2",
  "key28": "61pSLHwWEFUNBDNdVhNoUv7dEfq4mmLzs1S83M7B1CvPMEHDJUiSiFjAT8eskoVaRE2ZkQER93Qt6vcVrfE3EA6B",
  "key29": "5D2TzBkc3mAuzaZzMp2aM1ivX6pUPBkYehb6fnrnX4ASAFgM9oqf3qsn2zgD3fSNQiuY3HdL5Rexkf2B9XwTW4w4",
  "key30": "2XcXKSPcTUdQp2tev7GZKq8Yi3acnRJpgakxUM6H2iEqNfDxf4qLKhXzgfNQ3MTYHPm3UaVZWjzBsFtnLXmNd8Ka",
  "key31": "3MZj9XM4ZNnqGgLEJMHzihaym6mPjJoEfPUH4k9BzrXFjpSweZaaV8sVCVc1G1PfdiAaGrUcgBEszfvTCPxPtJJy",
  "key32": "Ew6EZm6d5tzBUY9cawM43PeKvZtivdPHkELN3KZVFwrP2rdceTuKKYxz3owTB7Ly2vaesRXM9q9Xv3sGUL5pjNg",
  "key33": "2vVnQ1MaXw2nWpPnz4fRLFp6fwHTXyK67ySgwFbQswssD83AwnieH5jCWGzHUhGo7fxVz2kdroBZbWtdCVwPayzy",
  "key34": "4u8iDY26YLFZkGSeCAFYqvKfy8B7QJHvwFfzSf44cz6k7pqEpj3PD6VZiXRLZA76dUmMmw5LKREeWJwHfXjHa4Us",
  "key35": "ZDLHVEcuB6XqyjruHrG7f65H5LzcbqtWkTsxWLRspQ73Z8i1GEJbpi1ZxC9NuLVu9Ga4YMPCGkXFdhyURJDAU9y",
  "key36": "QCpuEZyFjDUQ5EX48dPA9ZS8kCLJ38emgoD95wJBp4LfvuKzyBWEbsfmuMM9mHb5rnk9rKPpazRonbpTJLaJmiG",
  "key37": "3YBZcdkfm5wL3eyp4HhWK1TcwrC9QTniTsmntbE2Qx1sw8dMHCKFCN6rLKJha3jj89wKJSB2kRvrCmdtnqTErua",
  "key38": "4cmNw2mCJut6LVfbJay8fMCep6ZJ9CuF874KjXqRzdq1sSBL4CNRUPpgNZmSkNx9QFmeTAiqKa81rQvaPcqgjCqk",
  "key39": "3mmcF4RmWS2JdNtApPtv4Pz16vD54TwxfyUFpM1dmsPNHAizGjP5wYrL81UQrhWPxk5WQ8xhDTHNZb47hQYm4BbB",
  "key40": "EbssnUeVCavjMtqtGEcvC9NN2LENK9yMezfYZig7UUryE5baitcEMPbEBgwa1mSAUhGupUQ6VRiHVH2L9JeFdt5",
  "key41": "4tNfYEVXyP9JCNSHJuHtMPrTgTvjKk42hNuhGA5H5wtnjPZLajmqxWdmtiiZUtwCWKNLFoxbwb7gNaGt2EcPAdHt",
  "key42": "BFTwxztWSSPM2Jv59Yv2YjZwDiixCMCAXAY7ezjLp9VVDZxKnGbayYm1nfMApy7N47uhnH7tE1zFGQg2tyMhFH5",
  "key43": "F9xip15NiqQHR7LpmyBmzo6SoZbcTCqUL5xN5yHX1iZDBk2i5SRcAYyiQLNkypKsFWYDskHcgfMzfWXiF5RLgCn"
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
