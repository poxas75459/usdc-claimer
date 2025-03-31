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
    "5jRXedSD8PQ8wdkgg5FAu6ykRj5EhL2NW8WjDDeyqTB6UqD93dTduV6X65mnDqyatxFD7j73H9fE3hpQbdGHGK5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxn3QDwCfa3HkSCTrktJe2s7eZfYXL6tGam7pTAK4XJ1UXKVttmF4YEyr5wiF5WYjMRjUekMzLsWw6SEFZ6qTGy",
  "key1": "5haCB3FFQib5p7DKgQfZzeQqbD4a7RwkDAzrRnVHqnUeURgRNuHXv222yySDHXHP9BADqpKvbDLqyVj7xq6x4TeK",
  "key2": "5zcSyELRPvUMj5GzW1cEGWjTRXLG7x9pv9WEFatACxmbMkucTKkgbANtZb8wXMRYHrco5F6bme7sXfq63bfvFGvU",
  "key3": "5vdxoEXf3MGb8vHB3DfD14wYCjdadqybYj1vAdRyy4VPHvdfFRS7ZoGqQPkowH7qb1d9Y29ArUH4LUzRbHLHJ9xF",
  "key4": "2G7ukQVRigvBonhVLuvFaddDMctfPZSoknLjwSZ3f6G4SaveARgChGX2TLkNsWDmQnLRJG9wqVJMnYhCYQtqNioN",
  "key5": "2cJoKu5g75eQ3cBfgRz4FRqQoZpivHWXMbWipAgjj71nUHcX7EhzRasSSf2vfPSrLVMaeWD2aAAaiHfNisGyygnf",
  "key6": "5hy9W4YKENNYNFq5ybwcnnARaw7Vc18oZg1LHtBWJKRBBUa1XUw5LEbTjkicU2kYB78pbgiLjbZV58DPRnCnHnH9",
  "key7": "3MtJC7VGbjUfb5JKBJJZDRSYWmES9XhdHNVJzZVPFK3fEFebNZyBN2pb9WhZiozXRLR6CHXu3nocoRMB7wzg3Rxo",
  "key8": "cEfQB2Dq462gbqbKPht75DXHJVBMohMTfqXUfpursUQXpCvZF4BkqoyJWhWRHjwZ4SRFCPBWx1wrkgw9JGxRvwB",
  "key9": "2ncjy21D8HMGrmFdiYD8GGsKqLm93iurk2TCemdvYgrySsrAPRFVeKcjV9eQiL5gdgAcHHxWq5UCP3JcpaXhvmZc",
  "key10": "J11s4oEicXXrMgQchF89PBkuxzLkgrDJMP5wDME92jPBdy9TugfRT9pkzjP4aRm9JgsUMBSjSesibDXJsbMtKUS",
  "key11": "5rqsR6fstBNc2qwsqHAU6PMkkMZ77wBTaK47GbwnFjinNDbsDfPxEdVJpYmEeCFvThWgdwWZ7Gi7hnrQeej8RGX6",
  "key12": "5xZLoYxjpkym21kAarTQaEjFKvjtwa3XHW5S3y9kBro934SkCJNPiaDFe6D8DBkwBHqHU138YJVhc4tBcpWUucai",
  "key13": "AuFvMWMD7Zsm4gUPCqCv1p3xbpsHZLRpfK3WMiFSt6UxXUtRXVCWz3saVWByZnNPaJ6YWicfWZhrntDp3Dxn2eL",
  "key14": "5FKSHo9Gkpw7347RXhQ9MA5382XWUcHjs558haUDVaDzh85PkRW75zidK76jnTRukTnL5m1G4mTMrjXdpkepRgRg",
  "key15": "4pb3KQ5PiHDTTwkLtMgwgu4xo3UuN8L7VtB8u4jsBskjmcsrgj8tSkkK54xKkQsDMKALm2CBbU45w8o92Tkc8Txr",
  "key16": "58Ek5ZAUwuiK7wuEYiRCX4s8XSpEVxDtGhUScPMyrCreyjE45jL5UkkEtoNpkzcj4vZqvpvcWYRJdQ61jkMoEEnE",
  "key17": "54XFLGVcGLjCCTonufXzbktwGgKj8keKmRL81gzKwngo7buMWrfcUpJBCB7GErjiEuH8D6ydWfrY1oGM567UZGwp",
  "key18": "5hPGQdmhGq5mAY94YpEoPJLUZ4zX5JGQbahhsfhEk3w83MS1NhjjgPENW4qKFpMeW38UgoAgd8CgeJ1ojHuJiNcS",
  "key19": "4hSQ4oVKvcUwLhp6qp3yz7cg1AWQzWgDUVRd2WEKT4L49HbFoEZ155PCQ4mS6KQb2nuUAYxZLAaxYm2emt85BVH8",
  "key20": "67F3e4BBbubcob6YRL5p7nA99KKdom7ZtQU26g4mbLjqph19eZ1TEUqNjthKBwYqM1YbEtoaYoGHgHUZ3VcDNLfH",
  "key21": "2wvk4HhBLbsWa3hoWumRRnJv1UXRCjba9c39RK9ngjChnVka3GFv8TH2igyhdrV68hFgYM6tx3TcjAUBLddfioJk",
  "key22": "4GaV9uB5JBii9CdCpKyPMebdA3fDmexNYR59ABTZgPCRdUBAAscX9QCNykn8tqbcxFiaFDPQ1EyAJ2xSuT8kKZHV",
  "key23": "22vEzNwMsJ9kDbmXgcLNUhRFdma5Gc6HBuJZMKb27pkT67ioyWYUvTue5xSaTintzjRFoxngAmNXkUXqLW95DfaQ",
  "key24": "66EX98YxBj5ES6wAaxTLLgQgdVnMmCnCUzqwggR1qBEsNZSWh86Uvee87zLkQRntn74BXZjDv87Aq9HwQk24cZaX",
  "key25": "3G7odD6SkU28TiCnpsNwB1tXRxRjGmZ1qLw4n2ibBZE912xwnoxFPER5H2akxtDMGzdAjKgqAwbi46Wd6cW72KRo",
  "key26": "5WC5qRscX9xXKXThHLSZt4sBdY7iahjT9e3qBq8vaK96D1izSNaDbvwugGxGoMfYEzAV6JbRT86mfncUPwb1Q6v9",
  "key27": "4tygUwGy7cMQ4yMxFPyRtsSnJgLGHczcBAXzpAGSm94vy3Y2LPGHMUpvH2UoBH96i9rw2NmYNnLXtX9gFLU5CtJj",
  "key28": "LGYVqqnx7r4TEA62wQ6xNJu8XScFTarPjM2EUjdtdudAmSYoNdSAkEukiSP7cxw5b98L6sNiRwQURtzr54YfP65",
  "key29": "T4Z43XuSq4rSQ4tA9t4sMtTi1gMNvKpFDNhmyC8eLu9G9QyC2zYo8CRFdtu6CyhuTbA5dPzQ4akDefxfA6qLsvn",
  "key30": "52HcVFtnLsmGpN3k8L4y1oqjMbSRtkdrSkiNyvmFwLuvASTQtq1dqXwFtiE8UyzB5cgi8as8UCCPVyK1ZqonaH14",
  "key31": "2A8eKnZhutwW9DNUirbDrdMSRXP4qFhduuVvGrEmmiZJwTseK8Zq6WNhT9qX2E386s19y9mKrHUjWDNue1YwUYHn",
  "key32": "5mhzxD5PCCeawZMuJZDT3DQ8sJRpCMDoUoqRPyLkYEe6avwgVUqauwJeSVSjT6UFgEaD1V5narmAY9WxTaqvjZHg",
  "key33": "5VdCVA3QwkTujgiYSroXNYFstn78b2NM9KDsUsaE6zoKS59nPqaH3pHPUQjzpCnxgkSUCYsuTdTr7dh7ipGLRzek",
  "key34": "3yp3GoPBYpe6dmKN3WpuGJJngKxQXVwDhrvm1VXDWKm6mzDLUNp1VSqbULjkWNf58mwYuiHT25hZocNPvYvdQvdP",
  "key35": "3WJ96PjZoKnWsrTiyL5hBiZWquZoCKzeCUzMJrP4pZ4oQ9qJPbELWQtcoSGDrnhBzf2ERLFMnQAy3q9Yfx3ShLbK",
  "key36": "2Ea8aS4tQEp8hP6ARZDfGu5LWubCFZW3zmUa6mWK3jTF6oi2NzV2h5FuSUKDGUW9cw4T7hZEXbFzGJL6UeHi4jdb",
  "key37": "3UnXuajiYFqxHgBjJWvERzHn9pLPdGLg1oqVyAMG5s45kpD46WF5X2zqAMKkENDhpvJmQbDoCz7BAMDPhz4Deo2p",
  "key38": "gv8iY21jSMARVPs4JxBLLUT3wfwindo3GyjjrHNozGJH3Rxwow4SSbjAwe21EWxqiDZYV8pL4hkCDZof6cyrhjZ",
  "key39": "5aiaEXgHxMtN5hzrPoM6YKxQYV2xy3gSVhWvsgwSZRKJn7DiUCRzbeUoGy3245XLsbdkVC6p8ErfADWEoU6AdHJA",
  "key40": "73z7tNsRx4DuMZgKz7hGNij5kY4BzcvS4Tyv9ESVgwtPi16dD52wUnycRDLj3e1DkGBTT1JXcUhMtGp9yKTgwHe",
  "key41": "3dP99JcLG4KdUmovHsRySyYSbTrH1a7sMCbvyBBYqCkKJ1YarYKVpsLZLXCHk3s7VeeYWZXixrNcEvTr6RgSkE6d",
  "key42": "mejqUVzHYNevwehyQwzzn1DoYqgTofCDkkbjdfhHkUybY6CXHgjESVbg1CiJNEXkDgGkBgdoT6HnVuZcNL92Mh3",
  "key43": "4RoMBipoGoiYUx4tK93S7MKKkC5yuNCxtcYHzMgUWRfwcDbpeSg4bbNyrvVzUqTsXe7cgwcYTRuPGoiGvi4tuvAQ",
  "key44": "3LhghybgBXpwLF9McwgiHHPRLeBYsguEdCnYAP7gjU1Vb7ELPv5KWDeRLHaW3V8SqzS31iFuRZ8GW8QpWtht1Jyd"
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
