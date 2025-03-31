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
    "2yZxxaTEVUVFYHWQxmhWRQJvsGQzEBy2Rx4iK1Q82jpM2CvJVKLEtE9ahCdUpJTQBoia4DLYqJqq8qGtX3pThoDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDcjSMn9HJZseAgg7mNgp756iWPmxRZaQX7fx2GPiQ2wdt9Mki4KEJQUpyLqko6CqVNYHFepaxQ6t1yfx11rjoK",
  "key1": "4Cf3rkKDxZzDQpRKGe3qvCugE6HXEceEPvZkcxpp6ssDtpHFSyKhE25cKKx2AoL6zjK3VQ1CgXLTtef9j3aB2AaV",
  "key2": "3mDLcRd1JEBWSggscHQ2J1CnTNDoGgjJ2Hs2ECWtGyszXEBUfNV4HhGigvssJxq7rUx6Zpa7BSYFcBx9p19FRfr1",
  "key3": "2hvfLWjFKENQB13MXNDu3dXZo7Y8UtxAjU2i78RXMp5ko7CdRabzGsghMDS9GBnRFKcaC7oEyYmLnNWAMkSK1ary",
  "key4": "5nzAQLVq6Cgui1zkzkSXpVEyMdyovFxr93NW82UBq8VJo5o1YFi6g81ydWkF1z2KSZmJkZWphg2yuLSPfimCjxcy",
  "key5": "2EMG3Ze7J1G65wy8ChEkTDkeq4ezHeR62Uf8MQad523Kj5pcAm5fddZyzMtQUGRM8ZNuDiNmgL1SBRejmV2fySPT",
  "key6": "3Cffw4zHLTbkTPNGpxvLLNTbj7rdNygKMbinWwz2cWUuYxG9nX1aZsyCjs7nCJRuhqXMZGK6JwNVcktitXtMZjpR",
  "key7": "4mPeTJJXKAtZTjAEwkJNLULfW5QxDJq7f7w5W9kdFkzW3qNnJUh1ZyuwgbWpM1Qy2mSoDgzgaDUdB4jypwRh31Vd",
  "key8": "28waqXBuUcMzzuBhis7hGLY7k5qV8mWVd5bnj1tYsMqyRptgmEkPFnZ4eYmvK86QxKfSD4LdXoitXY2a82skzuj5",
  "key9": "8vfbcTij6RG8xjAGTXdeiaVvDeEePSsUfP1mbQWmKRcdq8pSZdvx9xn4qdjdQ2HnxevZu7T2s9xNpvzuxdGT6Ch",
  "key10": "eGPSuBf1SFgCUjRtyLmcMXGBqjL6s13rm76oKDL2AbxmRDxMvYjgDTJFbX7767p2yaQTqBSjkZoCxeY2ut1KQU2",
  "key11": "TmbBut35k6PKXa6SeckmXreGQaLB2Zwjbu4E4vV2sbW2dmEPdh8rmmWQTzweFKWe9czZu9aadQ4nNYkGt629Ftm",
  "key12": "5C58xgpL7HoZ9ZJSo8ETyNbmDBDSHdtUyPqJuXs5Mp9baYe4gARmECLv6hALrP9ru8AmEZEhgYLUt8KTsWRQYD9S",
  "key13": "36agUYV7xmbf6vYJofrqsJB31h2MPbBSzertf6CdA1eBz5HFQbRLnC9FdsRBJvP7DaYgqTmstAwYZ42bW4ysJx4V",
  "key14": "4Ki49DvPNVFdY6BLsXdWzuTdmaKekFw5EH83U1mMC8rqYFUmfDvPtUbSGrr4GGbeLJfZbM2beMuoF4SYdHYkiGeL",
  "key15": "o8w1586V2X7wMcpy37a2hbuUGZbeFR79CACpThsGDjXaVpwREia2DG9S2iG2a3cjrxLtfvwiyME2ceVZwuzRdE9",
  "key16": "4z3UuTPPHq353D5LGw75AkR34Fk3YXvLzds3qnHf8baNDpdjEmfPASfJ4qnUaWgPCEU1jigPgp4z2TTBoLLWButq",
  "key17": "543AkxxsmeRjrxvjMugzqGWpNNxX7Zd98WyyhPoJmB7q9wy5xWU91ixhctYSnhMDVhNhj881FLW3tbwCAu1psAKH",
  "key18": "3J4JWwLTpFtqmGzGNYpwLfByuAfNnvEJRTNoHycjTxA5TEBMN9veXxF8NMh53oVG3ToDLuomXLnKE56vLWibQbHW",
  "key19": "2ZdqFPaRJyqhsazsnVXVbK3zfXJzCt1812PdkV9N2ebzzEqMGgAXH3YAthXkynRgeXPNmLDLDSmtMyeW1C1cRuBH",
  "key20": "5CzXysJcUeHDYiu1Gob6kQTEK51r9an5wJ4LUn2SKk3UiEykMnDPh9w1PNaMbRe8NCFcYM1VnoRXtf1efoQ5yRod",
  "key21": "5Xx9PmMd1ceqcFixd9xhr6SmxcsnWpuYg6jhDCzmNPudsRg3oPsVSPyZCuXHP8PnPYGAnoWynktoqXJ1a4n5JZRC",
  "key22": "5EzPMmQg4tA2Hzg2D4X4cQnA4jHksTYjEj1SLBdBWEeaZJwKRjwM9QWMhspn6jgHSy3qntepno7Fg3J4Q5CVL4zz",
  "key23": "2SthmACepdD4Akp1tuSSHYCawuSG9jA4nCMhaR3ubyW84TDiomr2jZWm72UQG2j9gMCpTp97ixdqu1Ubv61ieBaV",
  "key24": "3ST2TRgwfG87aq6zd14P56qyj9rTis8YAXASKML2uDSiuiThdeHMw98bMpizPS47tV8u5E8io9juzbEsPo3bTmWz",
  "key25": "3EqvNnZzTM3Fnkc3LVVZP6UL2fyan2oDSFzuQoY862DzZJUY6n8HW6y93TFcqbt1Eb6Et7rm1c14gc4TPH2bFwEF",
  "key26": "44tpwpbQUErAPJE6ocRyMNpyVDFBDoCrFjFrUmx22zkyemxjgdVVK2UxBAiVm8hm1d9KuzrQb8bdPzCGYHnbP52n",
  "key27": "4cFzPqqQYSG4yo2r6fk6f782jmH2rFufPiUYqwsyF7P7xytvcC8mapMTAgX2jG6vvn6NXTX9sMtb2njev5okFHvc",
  "key28": "4ppsy2BKyDz15hvdsef2f57kCUm9GV7N17ScXxASV6iRJPitXqA7MzBXqQbRcpMaavCnbrDvoBUbB5PPNBUDEjAj",
  "key29": "551LrhC7NdQ443svTwu7iJWfoAr8n38XLF6YxXp5CUjhzQBqK4jD6VM52aVyCAP4rufBwYjCuBTAnj7V5FjkxFCV",
  "key30": "3vo8bYgZ9gx992wEpWzyrT7ABUTbbQ2X13XzTgH7aJ7mxtKuxSf6KxZuVnFV67KW2d21XN7rzFqKm6xPCpDNw9Pz",
  "key31": "a9JgB1jE6Xjx64NRzPwJMYPwbF13uKtLs54Pct5BxS85XCJtwmn3FQFUrXXm5fCnxLGMhJuQvaFMd5hbAyFRxPB",
  "key32": "4rXwR6wA17upq4DHufsPPeNWwGL9uAEV47fN5eNiaCDrRdo15nwwjwk4Le5qTT9LDvSiuLSLH6CfCdmt2MBJcQCr",
  "key33": "4VbYCSQxStfdKHZnWMKnotPJnuhk2MH1ZDYqPSFJjj31t9Pp97BQwnNqM2z9xUeD2pm5CJUf2ei68SpDo17t1spZ",
  "key34": "5FVVumEQYH7U6PtCCkNCo4wFWAsCpPrmDQtj3L3yd5vxJxof6faZUtqEvJE49Dz4WxVvXLeD7H2UUvCWRWPZhkZB",
  "key35": "4pHr8n8f9dYYinxHasHEKDTiuErzNAK16YFje5LgfQT6H2RPdp2pZ1GbypXaxvFhhMsz6ts3dtEP9FbvYLekwoKe",
  "key36": "nbrj3KYeyWhmeK7U7ELZqRuS6kBwwtN9MjnTUQ8h7LX2ntQGykLAdzhmcbh1ngf9oFVVsY1sB6dNck29WJeHNob",
  "key37": "32eZLGhiZtTNCEpcB72AuPSGoUhK3YKw64wHjZNFSbHpW7LgkcypMoHaAer4SXSZAp6b9rJ6TYZ99bJFpFzd2nxB",
  "key38": "5mA8jQ5norTW71qW7xWnkWZK5vU2NMeh5uMJJ33Hk1nQ2UXiK6Ug3FcZCdNyZdTb44VV17cwSxBL3v5ys4BCt5oS",
  "key39": "3yr1zGt5exffnXTmNDTDnPQestaeAVgtZh3WR3hFU5VMdJb2jYt12a8UPeyaxS31DxYxxHcQiPtMAMoe7SkwJdGR",
  "key40": "uHmkr8ndru8rkEWdsRpsBPbwBsTf42wDnH6meGPZdATAUJuGM1bkMfHuHeQmcdr4bYH3tm9BomHYMo1EpeWL3ko"
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
