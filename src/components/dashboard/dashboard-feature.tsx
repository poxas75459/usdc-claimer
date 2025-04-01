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
    "64fiZXRgUH4ZuWti4bCmcBor3nxwVLcNTTLP61L9wEvd2ewFfJ2PRULeFtxreKFYciQLv1PEXA1exfJgoh619Kse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQYhSaAUi8mbo81crhwzaZZ8J4uDEJUjegGv66DiR1mfFHQEcx12EF9KPGJDfucX35XBB3LEr4uWhwMQ77TFa6J",
  "key1": "2xUNjiYdeWYVjrjhA8JYLD8fPPxusQ2TYjVRHXAqDinoV5B7vcAeoWMc3ZbiEmShNGd9y35opwS17Y1TBpQmoL6S",
  "key2": "5KmX9Mu39qg9WYLLK7f54oRPMizH7z9UtCX6V8a2BtfTquiQr6VJ8vSNAPYXJfeqryyc4yL1hE17ek2R1sGbP7EQ",
  "key3": "4D2FLXhyv95kCRQ8eL4WnYrZMgtqqanTpMpZh9XpRr3QiaxHbAxS5cHuSrTwxy8k8Qs4NkFcQeUFMF4qKjhp9fy4",
  "key4": "2uzsapgSzVeAzynKV1bfugyxQsxuCi95PwAgD5bLSNaq17LWZXZ6sBqxhhwYJ6mYdagurRRYVZWX8GaencbmVMQx",
  "key5": "38qsLDs64WvaaC9cDG3bgGgTddiHKafjgeCkwydnrH9xrLKR2ot4GvPdcfXk1UDJ8UqPADiaiNjoMFNmrnt7RVtA",
  "key6": "4sXPHvvCBGEYAecJQ6SvAxJ95qZm97jT83ntE54zLTvv8RZCCZpM7vYD25fam3CGJzbuquDGjraZVoLbYcbRj8FE",
  "key7": "4AMDReJ2fdQzH2xwnpH5r9SaF9XoEUC2VzQp3DiGHjDDKY8nwx3YymAukfGaYeM1iMSJUzCJJ1mGe9XGaoBLQwFn",
  "key8": "3xnhFK45dNAVbHSvpomzAzDUc6TdzHg6sZQKheLZhkU7zXnpfW4cnJchNRPrQmWUvnCHyuDmdLkg3XxEZLgUsy5E",
  "key9": "4sahHJdyi54RRWvGM9gX2pgSRNfWPEJdPkMW79YT8jyru4L3uXt6Hrtpnh9yY9ajK9M4eXGMBcixoRJbup1T1jjH",
  "key10": "28JTHdbFYXiBn5Bat28vA5EQW8dERk5PgtYrxsAQ84izPfd6hMLe6VarQ72MMCXTy1UMhv4cxhu9UjMMSPEQx5HL",
  "key11": "5iTgd83nzqcezVAwkaDM87YjcLcM27qrU7NPvcMtrfUB5YMbnfDjPFybiZEyWcAe3txVs6awz9dXXLuMuAUeM6Ne",
  "key12": "4LziBBVZWyNS9bnNbYqYY57jkc2qaTZUD1Gs61T49hJKK4wwjgqZZQDmyL3Y3gDGk7knQUENGUT9Uh7zYxCJTdLw",
  "key13": "677Ppqwmw4quKfQ1vSDLHWzbqTqmQHsF6dKEd86uPN2ScghY9ucsBvPeeTJx9X1vGx6VrrUKRGsyBsosFGaw2ou9",
  "key14": "4s8vHFzbdmJmFV3XG4zt6dqbuRKVW6psSLGxfZ2idaMHMNYSWhHuNRDYJGKufSq3SPCAdLyAnHCWsYsVj3pg9Z2a",
  "key15": "66C8CgEGgfaK7LmV1aLXkc1gbAJJMc9wSRNXmEJZCMBrDs1exuFVSV4vPmLtr95GatVk4HDQ3N4PQiEcrUbmfKZN",
  "key16": "4podis4CLphMfngn5RCK4e4pSei58LCP7bXeiH9tiUFtpuJmQxiASy2fyXKGAYFbHGyBPojpz7HbtgAuBKh66xiq",
  "key17": "3KToGTHyWquHRQ6Y5AS7QxKXrh8eMzw9RBDHfRZjgeschRRgnBxXmF5aswEZmZ3cRfjk2ouTeiXf3H2ZpitLPc7L",
  "key18": "2mtXeU7VrNwsgytYayVYB79Rcdqe4MhbeVdFbRvi1PZZScxSPrNVbFzTibrt6aYopHrxp65Duj7tcrKRRcpzHyBN",
  "key19": "31wTjLi15Tz4U8nHhXtSBSgd41SgV2pcZbTV129niu45YpFuuExPfZXiejhHostTyMw1YpwFKMCSohTJzF1r6WCG",
  "key20": "5ZqC4o9f4L5JtpGBFkN8KHmmGhocHDee1y6CPuF4c6FzHaeuifGQ7BqTcoNjzk69PsTctve7WbvE9GuXdCubc6Tb",
  "key21": "3WVbRM8VCF8Q54URAgCKh9GZWCFsc4C5tKwYJgKgXZeMYtPNvkgABnvfiV9kKnkxAYLTC9WHLC73WqvSyq2pixm7",
  "key22": "jurZSBf4JjVgmPwi3sE8nvNUFxe89JbUB36YsXnksAnv4Fr5jUTRTFunsaAjaDBj1W68HwxEYnKHZMr9rK3w8iV",
  "key23": "5nHkspj2XVsjutfYCDYUXsj9dwyG2RY9pFfdFgJDeuGC9WPCyWHA3Uj1j1s4PJQ8VPKY8ACqrCTqrnqAXk6o2zgz",
  "key24": "84CrT4LC8RKh6bnxV6GGpHqyX9hkchhDMov4xAr5J3DU5xZxykZDQ3PFAQQiUWKJeuUSn3dGvjNE8iNXMd5Ku74",
  "key25": "3kQLXUArut8wg7eqekWQCzhg2hKuhSUkhPK9jNqKqj92sw4QGX9Q3RMHDQmVocWKGbaR1opEjwEEqSxJvpCYZjXk",
  "key26": "3ymmJSPrgwePCxSpCdArHZ5HadDekEzcNFtGE8amHj6DbFjbe6vTzrUeoQERsq4GePiV2MbjnNSTMrHyRnyUexMy",
  "key27": "asCEHDnRNBhk9aQqdZgotzxBauu18r5U2VJGvSaitT3oqUh3SJtxC6QcjJ7dYxGda3aZp1JfmLbK1MDmaHwK8qv",
  "key28": "4wYXEoTLXDN5WTUqfUgNFsLvZTz9wCFcANDVK6Gqv3CftefPvx3ASHAFbgUmAW6Y8As6RTyHsni7VG4bMLdq9iFc",
  "key29": "szkNt4dt6e6jSK12GDfU3Ey74hz8fazbuMZzVbdPvDx81wLjZXjuje1jCCL6bttC98GcC3R7yWpmJiTCPPfmp9d",
  "key30": "3AKCzb514Uxn7tdFf7yQNb7tMpj5Q2VsEmQZpHeRt1DRscNML1aijqC82H4d5vmhuYoVp2ZD1urpsoKa4R7cPTFh",
  "key31": "56tzrP1ic5DqE1s3kqx9yE6Lzv6pQcTm5wcsr16p4foMoJTFYx1EUAAT5d1uFMn1NQDnHNuwkrg7vgBeb4tKozTn",
  "key32": "5zV6GEvs6GVnRR9TysAgXtcdkPxDPJBg63ZtLKd938ZRiXrf5qH1FtnaFybfrcNLVBeYxen5MB8pNWA6QvhJyTwg"
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
