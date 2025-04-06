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
    "3NWbWsBmi73Qiyrg7Kfti1zYvBvb91egpwZ12Qu8uN8JRto6yCuw34SrmwA6XYEvPbBHQfgB3TAAT5dCXT1vKf9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z99TyBDnBZdziDGhB1QuNpuUEmp3CF9CCvRMMxRij2yDrKFt9AHqByBiUeEuppwfAJoy2urguL21G8MQGNKSuep",
  "key1": "pv4AHQftBJWdtgmdhRmmPtyUXyVkA28xckRff3WYzRbaFs8SXkUbumkLsYDbfxAmT8QZ19zQAUjok4qgkxda2k6",
  "key2": "5i8izrE9PWrxdWV3e68w3oaVrV3n9gYxKfQ2yQc48WPG7aBuMg4gAjnPZSz7Gmbajg2467xZew5NV1UKqUdXF8fp",
  "key3": "2KpF3CuTeS9aBCRgLZCQjkCNz8LhZiVVhS3hycEsKBGmKxb1LD67jfBBn5jyFewZxh2mHh7FmoB8pXYywZHAVznC",
  "key4": "2kpnVtEGtzGL7vHYtBtBdZUXU1ANdkhKcCLTEGwgGuJs9hDbXeV1E34Q5q4kLahC2qb22dQmwvweZKPpNhxMtG6W",
  "key5": "3Bc7aavg4ac4wAsTmzLhFE6ucdfr3NJ7D9bfznC93FnHLvhoRwAtuGFoTMsnHenF2CsLmMcpvZcpwA8JTKpB29vG",
  "key6": "65Vftdsi6M4z3B9Yz5Jw9zWFp9TNKWq7kH73VUPn33pgv2ciL9UNKhmje3cj55x3N34HsiBtVbMbTMHAZUqdTCpP",
  "key7": "BzdfrHts6TeM5MkNv798HhmdnC2vZsWXAyYcfWukEwVe4hCcStyx4Rv2MPZ11ZrQ85W86kASx2iqy7rixFJ8JTr",
  "key8": "5gcerouoDadpBHi6gdUumHBW5TApC871bfaVRCaijgdiFeVJDfVLHPRtH4aigLcXQTDuu2VyPz4YR1LqrynXUfLE",
  "key9": "5yqz2SyFSvVaVQhyK4XxgM5EA6zEXg7iwT58TxdSTQ2c1FP3uzoZCsfamyUuGwQUv23XqTe5nygMarUmg6xKXP5V",
  "key10": "64tnCQebBiy265fqagV6SHq8X2Q2fX9SnNRVtqY1NFg9oo7eazywx8tfjZStmdiB4vsyS4N18SCn8HRqtL9k17h",
  "key11": "zgwHQqfqEMr3u5WT4PHZZmWC9RWRc3mazRQU5zjpDwBMbpUoqPVxQhWiN8PnvCXuEXzdxaYpgAwVJNHUC15yja8",
  "key12": "5fRG5xofqkH9cHBtrMNuqZba3D7Nd9FrGhXbnjBKKYP9T5KrT2irJxyVjHhv3DoVzJmrU2D3j66Sc1K21wXdeoei",
  "key13": "39PxkbGfU1qqj2XSjZRzrnvmPsEJ1tUWXRE8kn3TNBFpcU94KFdRAFuDxV2oGwpxTTVBjAYiwA6nZ8MUxkNhDu86",
  "key14": "4XbEdDtoKyu2s6R9QNEMRWmYVSsrtVf5hggh5RvPhDV2BJWZm4mcDr2gGH5zvfixWkW162nwWXvoaR69wRigATU3",
  "key15": "4gSK75RnPSHVg8VS57bxVFEo1w64MxxhuaQqkuj9WHdfaJxhi97JsF9yDQNaC6CF4upKwqvYiu6iYee8wpSXje7g",
  "key16": "4W5AhKbvcJCp5MbSBovE3thRt48TcPx72AkGKKkC7AcbxfnnT7hRJL8oi5jWYCEK2Ru8eiuUfBGGp8xSPSHrPMbR",
  "key17": "3dMUg75ex5DQvk62cuQP7ESSDyLMoW12fPmjzD8xvzCuhVvyUrX2dda5LLuTQsWBs31V3v7Qk46Gro8bdSs8ooiw",
  "key18": "2VVcZa9W1BdRFPDrWMVq9dUS9QKCxTmr3unD8sBTAWSH8eEgQG64zXHZvvfwByvoQ8vS5N1pcQfLAMJz2y9kB9ti",
  "key19": "4kPJGJfzabfPicCKkdv4SE4irhHuid8hH4JdZEUjScX7YQarMqkhgG1ACYV7qamhvEeC3Swf8QtRRZjktMVbTkLW",
  "key20": "23A8K5JnyaFWYSbNenJ8RjdF7jP6vfPfYUq3UinMKM8uHDRC7JJPfpBsdxZSVmxL6SAgrAGJWLS4wsgkV834hsKM",
  "key21": "3BmT97YGWW5GKd7oHBgv26ad6cxF6dsvte2h5Dd2GN9kLfk2bqXNfzdSzW8kKdDvc7B7B1X4ekdfp1gmCgMwbvn2",
  "key22": "4zKSFf6WJZMqX4of8uZzjAz1QatX8fusJuwouFfwKUWoXpa7MHAYC2JJc6iEfin6xM5CcuLYTkZ64JgCKsZ8WLvN",
  "key23": "CUwon5EhFDHsVSrsNh1sB3KKyzCBbuGcmeDZLPU7ZhrZDHRSDWD5iaAuVTU1wMyZCuiPHzoqBdNG3kriroogJKo",
  "key24": "5D5EmqnrrZM7AXcWFR51Emvu6LEpivLo2VJZWTZ3hZgfgVvYdsMEiAwSmH4mTjESoo9ML5cMftFu2KowczopgKpT",
  "key25": "2itNpcpuVmc6P9ZtLkUdSQPFRcmYfsnfTX5xi8acWTbQU5yPvWQ3U4xtLxu8FQw3fGdoPbmhow4aBPV6oJMSZai9",
  "key26": "4HEypnEsFU2LGKNGv78ebbWTWueKGoRF2y9ixoANQiugP8bgAA18JCkcJLSML2f3WtsHKMJBswUHgWny4suybXrG",
  "key27": "4N7njPQPHM9gWn1Qx6KNLJtTMTChJZw4CJvXfzR5EYmWuXd3pP1AmzmBxyJ29LHcSZZTWbLkfWXzmKaTiXgyUjGQ",
  "key28": "3BSSi1ffW1rEGhT8TR1hjQTaMFZbQUVnxM3hweMBVNEc2uVBxUPyQJ5niLsthZ3KFU7iu7f5T825HHFtrLzjyMpS",
  "key29": "3wCJryw7rp34tuqW3r8sCxzsXputHjYc2u9cnCYDcMW3GWNrLt5jdkxQUmjoFUfifwK8wcCZedPsvBSPnoTkh451",
  "key30": "3VWzGo6C21boyHjqUvdAwt2Nc2rGyDqmtDc8WYdjmEPXRSSUymex2rtcUGorfkGmdqzcbLijxitMmm8fLxjD3BNU",
  "key31": "5RkUxqEXf95cC6vUotv1X8Qecok5n7pRB7Q7b6HEwY5U9HJcVh6HvCF26NgyWqPsrP2k8XyQvyEgrjjcJbLfVKHN",
  "key32": "5pAoYo7X7s6BToec9SxuoruAyEBaqvat6WbiqENnveLWcumcutYJiyjdxyDufQ1D8CjRrSHzEkUVNc1Cw2urhWo8",
  "key33": "5aTVnaEc7T14946bDiEkqds2gDhnQzBaWykEECZQcvuLt39npKhxujmktZtLUPFTUHLuYDf2qJm4i8eDqK2fFzm4",
  "key34": "4pcnGMbJXZf7gN6nPzjFAUqWMEDCHE9s1GufTSzYNehNx929t3ZeDq7gaPu5gp8QYFrCZMhYntHSdWm8Je4b4ymd",
  "key35": "5jQkhVxnbt7PwW9CqSydZ4XFDw5xAQ5iYqyvkCVkggU7uFSsWrUtLoPi99FD2SKRd9E9Q7T3KtEJfwyzFM7frvDU",
  "key36": "578kA1bPwK98BE5fbPu2311smvhEvYyW8zuGXJ3inBmnWUSVYxuqASW4meJPXjM3bm7hyRrMDon65GstorVgsPK5",
  "key37": "5K6qi7Bwz7m8AmoBSdiqU4QgxiV77u4A5eruioVtXa2oww3RjKbJmYtdhMwFx7T1VEaTiuQGtiLpesoL9RdY8ZYH"
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
