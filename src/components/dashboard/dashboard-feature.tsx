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
    "4zjPZTXBa7VAgXWCBTyXA9Sx3bV4oVyRSoGk98AkQtNe36DrzcZXDz5ZaRWip91sYBKh8UyW4Paq5JDFogVbF756"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFeU89Q6K6qPDAp4xE8kq86UUq9xscJjK2hEPH9xvzPne5xkbY5a36A95CaXoSLgtqJvf5xhLY2NVFrJdwQ3PxW",
  "key1": "4p6VdmeG3RuG3XoFcu3RC9anJtuXYPMPGWbJLzG4ooXahQvvDnZLLRCW9HdikTMc2WCa9cNxhuwuJcbFUSQvFAnK",
  "key2": "5XQvJ3uv1CnVnY1FSsRcDLpuMur517DVbP1JMJZAf1jQEhTz3w4p8cwxkUCrfKjVRK6MAy3ok7RVLAKsaUbBLRoz",
  "key3": "sv5aLTyyjmrzwQMyBtXZJMgzyMzByvstn5bpWTWJBJVQo66h2Luz7JRPCguRH3psX3x6LYGu9nV2uuyiWfeTWDY",
  "key4": "67CQYT3R3yJ75s1fMA3o2uyxdZ6SGqpGqb3RmQEa1FMKQycQKDuGbPzkUfbCtX9dvcADJ59tN5NZj53j8tNjthij",
  "key5": "2Sw1eCUaJ4q9vwAsx96bNiePxK7yxxa8MU7jwPun4mVyvtPiwzKuJGiNrevHCVuRrQw12L8ZeLaqAsPfK5hPXRBK",
  "key6": "5HDJJTWkQwqXAMDsNDDv4LStL9RQd3UJsQFhMAdrsZATFs6hvZ7MuEwND5AyAksKvDWyPP4FWZgdJSMk1Shdvmzu",
  "key7": "24s4W8889MLt4JSvgR2PY7A5D6xnBHucQ8JqmUg8dv41mmKwBVNA48PnFqzSV9kA5khdmMGPcEYoB5CUN1QTS2oz",
  "key8": "2Ju3fXbjupLcSgXdoqxLkb7hoaGx6tECaYSgjTA9uW9sbdYn1C5wF1pWwKBuyMyuYiFvuDc2pPgR7tLUpub5EzGo",
  "key9": "45sum3wdvHuL7nGCPh32853BoWUWY1FNTyy6wW6abkwhWwPqwNyTiuqKNzk3JFXBbb7hkRQSkgLwYtPfEGvEBJWD",
  "key10": "2k2xViCyrrBVT2hkp8LNggNJxDUeqfgwoJFaTptS5idgFbY3AWeQPgFDJxD1fFJtubWymQxq6jvwkXtu4K6HnwNA",
  "key11": "4KYBxWS3VUuJiqmgk3M3zBohV6oENFbbQYHGbZ6BMCvnSCtVRRquQJ7RbRw1kBqZo87QuGMznzKWAP2k3YNriiU3",
  "key12": "4FMiwdH2B512KmAzt2ur5QQ5an9QYkh911AVKWxj3frYYUL97orrdMmXTRASuPZj9AqnNJRpTsEtbDjvY8diudVV",
  "key13": "4mvJh7Dk5BQiPPqGYHA2H6XMw8JWidTierLtYjHyhhdujcMrjsxWHjYTxkgMJLes2tgiFKPkktLYpSzZSKWztkBm",
  "key14": "4vgVWBmtsnkhRJheRcX47vU27yRzaZZ9L2dtj5WeU9QcvQcXCXeHW7L5XXUMYRxHouQRGTdhZXqRCue2hMCptViT",
  "key15": "o79VCmbDpQtvsViFhu11QLqqSo7aHcoPxJgNKRxuVmX6kFoe9ctwNA9PQuyN4P2PCiQczdPpDtbBf2PUfD5Ttkf",
  "key16": "2Fbaf1uyAofFgLnDwc8Tssj4WKqCSWw47SWxfDsLgPdbWr2cSzXnrLYyXCsKwdT4tJjXQfUEHkn5yTD6rHdqN6QY",
  "key17": "2Ah6yGuaLWRRXH3fSvoSVAyGk4atLNy9Rriy1jHyA5w1gwzW9sg2Xq2D6qgedz7Vn6a8PcuC8qvG1W719qKMjcRc",
  "key18": "RsPBqGWMgGFTLoVTfdL9gwPXBncfvChRSxxzyKbtpZzdEN25zsqf4GZLm4jJqMP4vnU2vbdi43FdZiSBHmkxND8",
  "key19": "3MhgPEcyApFDH6DxFvVrZwabjmEEXa4pCeuGsSeRzyKL84MKEkiqw6cRW1yZxDTkZ5c34rCPcTEtJrPfZdzUb6fK",
  "key20": "3R7QJXjyZmVTBWBpSwX4SxWNR6AJg6nBKDKz69k7VNBjochCmNjCGdQdYg5zqyXDnpPoREjUbhsGfP3VRhXnKB95",
  "key21": "3s5gSYbj2dvHpLoUGJSWrrQSrjkxmVayMiUsiWPmCvRZ4bqfroSE61Lihqd1tX38774SWGH2mAnyvPZeY6radA5x",
  "key22": "25b3BhFU367o47GXk3GQFBeHJptJE8WXFgjweQCRwfr6P4S9hEKB2Pr5xn26RXfSWq3vxiUN6Nask1vZfmYD7s6Q",
  "key23": "9Q5uh93QCXqMyj2NYgUZWrerdtfSLtTyQz6VV8VL3cvehYZd8cDwSGJJ9S4wTzKCdaK8cdBf1JT9GsGggeKnEic",
  "key24": "4xUdY3wJjc4K3FpcQ4FQaer7sZrdrLRgr2uLGD66z5dHYLjT1PZD2kHA1oBkaSqCrD14RX4ikpR3SrSM3VrmGj9L",
  "key25": "39JFtPWickKCghDAPRt2anuC5UhZkojH2fn9asJ5xL92SNsNTqw9eJ3GX97fX2A7LaZUwyNpwXFWEpz2cxBNT7hi",
  "key26": "39QRiN6DTwsUXgsKB1gcSz9CcT2mB7JkDFZneDm5LUnD19Y7uFR22HvthMW6UN9nuq41PJEuEeVD4vLKJ3YXy5z3",
  "key27": "4eXvmCp7691EhiboV5g8VW26Ss4XMxJ5oR4jhVKFtYLJY9uUfMd845MTCmb3ztmDeQHMTM6bvcp4sNSZxm7XVLpj",
  "key28": "5jwAn4eWLoEbBLvMhh7PriGbmE8ewk6BmkKshNivZcq4yFVrhbhANqSRC4Z23Vh7doohDKDJWMmyZrwUxTsAQ1js",
  "key29": "3QpUNku6FAVY5KaAsWACWt1SkF2nqBZRyK6T5J4Tc2oWzGBWuTBi7Gk6YY3xJAiFgZ498iprNcVmFQykKbp1F5gc",
  "key30": "32LLgSENSfkMZb2FUXonL9q3wxXHprxtpTcpvBgJin7crtCvpjE5L1vAEESQd3LaLvWHFjKYygqN13J3PKxMDJic",
  "key31": "ZuThbvq1qyLcefZpereixV8axsZsxTjCYG8D1bznQhWYTrSkzDBAXCG1kRa6Dwr9HZfcKBzuM3EQAaJJTWeXQDi",
  "key32": "2VpSBNLr636zigSRGN79s1DS3KJs8kgCzzCnjA2JPpLnS4aC9MBSByCVtC9V67adQqMX8MmyqbwMibY6m2vGXQHi"
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
