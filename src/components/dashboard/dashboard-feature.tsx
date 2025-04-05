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
    "jWpc2STYrMqErJQd1BDosPU9Y8m9fv4hEQMQZfyTRU5QN3HvRsZQhwk1bKoCa3ZcYvadJmbUo3nYEXnH5Lyr3qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyGvaWEbmKoohKJwmj97whqTJuR6KvCabba4t2D9nfgQr7ZC46U5AZUc2hCBto7NUvfKe9r8v3LMucUmUo7ufSV",
  "key1": "2CzjYHFAbG7TriNu4PbVM37VXwA6wuFXgmz4mFJ1npEBy73N5bn2j38aJrxwHadEyKWkKbXmJwQCYLopnip2LYFo",
  "key2": "46fyyoYHaR6Z7YbtjL2XYRKL7fy23oKF966wjrK8HafX5RpwWD8AXnucjMovLx2FcgphTc3DsxbDVz6FauJPMKjC",
  "key3": "64PBBMXmBjjfTvUKQyN8JJmaBKKW6JMTZPJt4cxZYtt122dQEAfB3sqQPfz22Es2dEoNTP9oDhGHe3FhBZKs6V6K",
  "key4": "63jpQL7Dugstr5TVh3JsoVeP51jskpQjDRQjfFwcwQTUSpLJZ3DtgWjicipEYNrYRyvARtpfrGm5dA1EUgk22kCa",
  "key5": "4zMKXwPun7VzwS7ysGieARjbNvgwwCtubV134euKSfzJoV4WmvYXiw8iqvenB2dsngg6CKdnGATpxrFPPEC4e6ey",
  "key6": "5xKaqEesW9zEFU9P3CZCRRZVfMfqJpnXv5fMMuMXUoJAWVVC2BzFH3LvewU7opY5VPtWZzi2z4T4hgwDUZVTgj82",
  "key7": "3GWMqqgVt6B2pK7znAzyfXpBAHmJ92qv6rq9wHnAeA1DkrCUmwSQjkw6vBZW3BRDhNKJZCQPLaqwhNALTi4tJ6Rr",
  "key8": "2w3CHyx3th1Xtok92p3bMMVc5qjmxvY54Y2AaADbjFZx8BUExs4grhtUtSy5puwvAfXxwpwnGzKnBriPK4DJMdQA",
  "key9": "2LWNudF4pGZCcuQoyt6wX8JaZMakzufMpKN23qXZD3fCv2pYcT11zPuwFJtS3ivbbpUK9h1NCAvDMRaqvWeWFeAK",
  "key10": "vARNyJuni2dSwDKVhyNijiYnEZnjiLjgRSpyDTx8vtxMJDoMwwuHtnMYaKYYwzi8GVs7KXY8T2WJgkXGLXZ1yZj",
  "key11": "VkjNHqu31hsXWKukgtiMLB4p7dnHJxFt3VRzQP3B9b4ny26XxgQm46CMH5Echm3YsfRLeNvTEMQRMfjncpyXRHb",
  "key12": "5vxAbsrsMCcvtvajhWppc8pjZ3gkuZA56hZZCKExMytxL85qLQLh9Rg132pXhMYSeShQGH8y9L7B3v5HMED8G5hQ",
  "key13": "2N52ULkhncMJtJcpGR9NAHZ8FSrbyBGZDAn5bnvRk5zrSPcdWMRnQVDZxzH7TYg8CPhM92oPzoz9caGTgFiLsHwi",
  "key14": "4m8opxjPDEFvqBAAwGKFnmbYdg38YT5A6zv3YkBVvcGaeoWbB8443woWWacknemWgHxu7Kk5HGtuSf9ZCHaMK6Mh",
  "key15": "3WFQDiyJnxBcVuHJ24gqdZVYoSh6NmzS6urQKPmxSD6CBFyi9VwgQm2EFhjfgzXAT2Q4BuS4x2UDqe8aAxWsa8EH",
  "key16": "42Fu7A4rkWkx6hB42BhF4g2KzARwdoEJ9ScQytQCSyeJCZnaA9Peka9WtxapNkPA6y5zN8TYhWMsBkG4f9ngQ28P",
  "key17": "4MxSoEnJ2Y6sLArQhu7EY7vVYQyz6MKXR5RXVX1p7GXoedJtKZXB56kGfxkpwxbjEW2NB5qd7Jge8Qj5cbVza4Z7",
  "key18": "2rWfzfqzPLA4BTGHoRDqr2EeVfqRp81uUPW6uZi9xpd89raFZRSjUPkowzuzY2iiFo9wzmeBqMgYZEsYSh1cJo3c",
  "key19": "5hybjhgyNVqbCmrYTn7MigGUW6duMhSPJk79FzpwPJRjZ5yNkmrBZTZhxTYhrP5kMc7KkCpP6rPLRzLJxxa3XmPy",
  "key20": "4PNTQHTEtjVEoxkG4RuMt71aEFjX7BvgfeVVmJjuHbLZ6WqrcMSeBfhhAngwSkmv2XXqky2wuB87Z4uLCPS1Mzjo",
  "key21": "55VPTBVskzW4DHwsZHCntdixh1nDw3vy1MXaBx9fKnQGs1VYikaPihgjGSnT5gy6pQb6k9QhhX5oC9n3v9jtW9tA",
  "key22": "2CiKKB5KmcN5BjTrh5UntrdRkyzjmz6YX55LfRP4sskoT4mWhjx1aRf9oAPBsvgMneecN1vX7EzK73RbxUFbL66i",
  "key23": "43BC7dXiPcsyDr6jofnmo6SdevumKsESMisjRRYEiYdq4jTEwhV75eKmyFnWbVRjwqzPRqrqgLF9v1vbiPSziqXc",
  "key24": "4PDsbzPm1QwHmfouVVbWq1zL5PcRn2dgmgqXhq7ateesiawTKiix8SBKNfxbDfxA7riGWwQiKPKYxo1cwaSDQjxa",
  "key25": "4jNY9Bp4fEpzrXeHfdPgFkVwG55Zg1FNR5L7HXeD2Gdn364kdBw4JhDQiRNxQ14TGepGw4kgLaTSYrbT5919wGVj",
  "key26": "2kn7QMZaSr5MV48VgUsinNbCxXJK9QVVfusqWhV5is96sMEC82i3hGH7S6haUcEd5MyRNReMMXbSgyPEvxBrXwbB",
  "key27": "46eVweTdbPZwzjVFxWJaxLFFfez1mi9XgmNezxnN15EZvifZD7usQCHPXL9H8eABX26aKVQXhTbBh1PVb7ztfFgj",
  "key28": "2HY78uzCf4vKPi8bj2xz8ZAKNxpvrHD17yN1KwfKtrKcD6oyhasX313XHuQbQmmiYdTVb6T1AruzfTzgEubsSEzN",
  "key29": "2hdcNbyTqSF1igKKoECvgV2CWHWdkLjZHVBf5vyss2jwvdsDCoFFKN7TTb8PTFyZk7rPUPpfMp4HLNyHaFKC8nit",
  "key30": "2AAaGRUaepm6r6wbp6tZz2cw5t8Ti2EaL8QT8ey3u6Lpn6H87tKasERXssTBHwr9B5LbbVdvBK7zVgoYKBCfTQv2",
  "key31": "JVmLWHVKLExKzV5TwKBa18MfZrU99Mhc6brd5Psb8dXPkstVWgQt55qDNmUbg4EwzN8xy9XWPcanpWQPLQ8HNLj",
  "key32": "5utNMwPWJAyk65fzEdSH5fwR2T1UTbV1hMEWjSVskikhe1CYNHKB8AR6UeN2LcNvpo6LxMguxmtoe4g4iAb4QkR9",
  "key33": "4xW1vZoYE8gCdMT9giToB2MRxp6qcL4TbUA2uqjrQwk9yu3jYjTbxR3eGY5tLi1JrPm1j58YSXMSC6tAAN1Ad4yp",
  "key34": "2jQ2rXtBx8WSu9oALik92hMVycjSKBZM2GzQ2cn7FQ41UfqMN7XguChFQ1yBsegw63bDqvGJ5qhPvFUEcttPECzi",
  "key35": "3xevDzHWHdSoqvue1NGbfwPR5RyUMxfwS3U8hCjy4BwzrCQYwJ7KG9fufBk2SNKeSmkC3eyD4mBiTS1Jhw8Gaots",
  "key36": "aJ2gCeAm6t5oMn4N47EKyAs4gMQki19wCVLJQtpnCn4Dn51ASt9Jrje52egAQVt3ntdUaoyqinUprG53guPF1vX",
  "key37": "64FRRxBcL6SnYTmVFVGsxVV7yCCDK7zEdyNtCen5PZwqYNkSCnf2uGUhGMjgJfkpsREo89YYYPKReCme6h4e8Kcg",
  "key38": "4nxLNHXD3FvLoa2GJw9TzrkZpmSv8W8kA9TLeJZSqr7QjnZQVGgk8LK7MLsdxyQBfYAPLWjAuBmxtp6ynYUoyVAY",
  "key39": "iKSvmfTwW6MGK8HkSSWZWTiyQ8dCcU4HS5Ji6BdAHuXC3Txbzvd2zmosyiRguiWTDrGCyh6MHD7R5zVgFFiqWcB",
  "key40": "2E72ckDMHbDSASMa3hp9MdwjiUKWpRkrY4ULNFxThq9TmV7D17ofkNm7562QSUkrXMVcm4s3n7uchXGyk7KzzYcT",
  "key41": "372TybodWZVd1HcLtZrvNvUihxU52Xt5ZNA5ZKhfMAhr8PC2wTd9gpTMhTgZZ5vCcotoVeUZLx373MQtLLced7EV"
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
