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
    "5bHHdqvqmGyetYQxGvDdPQiMa7o7ntUELW6MaehqituUshPJrUyvDS3T3tZ6cCEWsM4yqXw9avtcjVnFvh5VeJqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tfbRmLR9koPoLkcpdYj9fsyWSY5hHXcwwaCEYkEtxWqARMd99ifpKdELbGskndvGUQFsLzKtR2711xJMZZuqXs",
  "key1": "dnZB7vCsEQWdN82RZSFDuMSGcTFmidyH3PsC5CWALz2CJWHyD1Gbk5UMMom2zk84ZJ99ptrSM2LQJzCYx3vxQx5",
  "key2": "44bYCkPU7HrLaMevuyoCKPsqHz9bLx2ZTWBKxjgGmVbzKCubWsKFLC4kG1ZwrEyRE5jyoFBWpNYHTA5LJPoEhCtY",
  "key3": "45gy4ojHamnRecXkmEV2wEYDRhojU9QVnozn88znCyJWH5c4dAPwRgcxWxepdD7J1anqWEZgZx2Uf5rXjQ7QnjzH",
  "key4": "3bFFjGDBUWtDHiNknwsT7g4EE1fKAqYi2pBGr26ZssXCqBRKoSTQb7DYBgX1s71fjAW7oY2jwWLviUHAbeGBCHHq",
  "key5": "31uDvkKfoYmBGxa7L27Vk8ndLUmN4SvjGLhJhPGmZxKaE4aV7qKpUriE1FcA3bnwZ9SjfZd44aNumQQor1tvAUn",
  "key6": "5AJRVs3yYSMu3SjmH75KtAkxTgptDVfnpGoEBn2spycm13PvWP1DAGD39NzSLZWrKTDgzYGjoSZEa5fmn6EiPpSo",
  "key7": "5tcPU2o9b9KDXwkPVQHFs6YPwTY6TSjgdQVJsAQDUcZZodNgsSSdU5Z9WiMi7uxRhJwbpiQ9AmJq7ZbxLqdv1Fug",
  "key8": "QeBB5E4MphsZx4foPLz52hEBjt5KjPscgN8PPg4ZFCE3M2TUtMPtqNNGQCvcNjSjLojiesdpb1Se7zAJ2A3dPBW",
  "key9": "2orjBCri19xmkRsyDkzg6FG8yBbQ3h7k2vc6kPTRkvdKsDiCuEz82WN1cWhzR3vE6hRAj8eD4WHM3hgWeAKSv7Mi",
  "key10": "3XxMjEXRKNaoNfnoLzA8gSXJR9JAtfEugP8GZatCiSKUDJBG6PXg4NYkNnSeF2FMbABBFX64tmi5AQEd3bM1m5tn",
  "key11": "4VQsUxT6R5UenvuGiyi9cgH65ZZ5ujMwCu4EBKRVbAbxRg4AGXfJjWRNdf1vKbHgRCPaXa4P2PZqqmKkYyqUMt4u",
  "key12": "5jWpuTDLhQ5hit52TkSrfeb7ZFPJPA4tLmUECdD9sTPVKGoJYALcBSxn9gdacw6dqKXGSsDFxtg8gqHFqMWrGJ5S",
  "key13": "5bz1Y1F73CJLYTk4KoEnGE46o61mbX8Dmd57oUPznzN2dvQms5AEPpf9E9B6F5FDZ4FqA7UQu6FGVHkyMwC7AVH7",
  "key14": "3CzVJevoeQrzkyswaNdybpFsTSe4YK6a54ZHKc7WY1KukLPmg1SnQdP9d4brrB8VmCy8Uk8BMx2FUxdaUkjXxnZ6",
  "key15": "4QKudAUnQUwk2yzMSmzdqkqTFitd8eV6RPt91gLTKWEXd3eUFKshTgaR9P3ptGEzsBYdrsggwmvVQzewsviZApgw",
  "key16": "67KVMYgfpU8x9Dpwf8xXeHKjfKM4R7Qhxe1vNPgCK5cX6NzwVb6BuRq2dv4bTJYn5eYKrNnHwgtx6AGzQHwfcFUY",
  "key17": "47HQwRtZyqoTDW9wn8w6txoeQ3gdw25u7QwZBWBMUnxkmeQSWhHP6qESLjWvtcG8QdzihDMTiYmdPpE9zWRnt1pR",
  "key18": "fMeGLSmMBvamSnur44dVPCkWjkrp7NPCDVkxciYL2xwgn5kQQSbF1kH1BoxKc6MotMHZfqHZfjZ7TUMZeQn1XMB",
  "key19": "4dh6udfk2amJmCo1c9cSDZQ7QGg9225dyZgVoLgrZdEDQBNCM6RuDjhDGGbaDgjb6GtGa8PJ5xo4Tu8cbhbMcga9",
  "key20": "748iXUuzxY2QnzapqgPa5tB5EYmSGFs5eUX2pC6riVeJxJvu19e63RnrAGBG95rGYSBPEUgwr9HeYuuMBMvN5Vc",
  "key21": "4GmDNGM66xvsnTaqftd4c6wiZXSmvzoxgWLFhHTrB1c6ipX6icg6tG921J4AWDro4kVqmJ2Kebcv6sR7JSVPjP2B",
  "key22": "3T4zdXCzJFoDQ6kPCmHrxUZmfz1sq6X6fvx6yCDervi52P5mfui3FeQLf6gw2dstXMZrv1h3oFFSJD1PN5j9wUu1",
  "key23": "12t2238o3vnHRyYLDse3pcg7s6duWfdRbwyTjsxq2RMBWjjtQGnp1D2knzNW7jHB9U5MpskJNvaiM4pYmvwKV4c",
  "key24": "NmTgjQYcVyLJoiX3J4HwPjVUGfbV9KTAciG8cXrfPvH8az2KukK1Nb9Mx9Qcp24joCoDoSPSXQzj2kzh19R4WvT",
  "key25": "641QMG5Uii5tMBUUo5F4STKbensEFXoDdVJ1EUprCZPYNygYnAZRBaK9LHLHRdG2d19erTkxs76pFCMF4sAkUwra",
  "key26": "32nv1s5UJcgutEGkyN2cHNKj6vZ4CeSrKL3mvawdvHhAqssCoCC1VUrajyQUAxF19fpxa2XhbZa3ChpYVWrEU2dK",
  "key27": "5awbT6jXDZaPWN8PRano7CM6oE5RbyZLScpRCWDfpxgHUE8sQ63Lx95w41ZdzwWncRCDEbrHV2pjGs23dWXjceXn",
  "key28": "5FP3r1dyi9brxBeAUvZ4uiWR45CSK9FdmYCHJ5PToajHETp5WBZKN2qFBRvWgFDvqCxF1fXzfnsGSb7ycN9BWLY7",
  "key29": "2guyb1V7sB6MEJjzPGqDZ59PAgvPQ5fBjfH1Q69PHfqLqHJGuUyMHeU5tersMFzE4oAGyDeirXkEU2JHczwaSSqw",
  "key30": "5uAD13R59MwaMMdhZNsi4sS6Afy1XdM1BCziC4cgLSc9TjVW8q1QWFJ67fC9f4f4wXgYZgKAykpYukvFixfWnZwv",
  "key31": "55bh3GaqjANtbK5UwkKHekEqhJAn41ndZmkMDmGWA5PK4fZ6tEpZC7aseFEjBUaJcYXx5kkqQeaqAeDAvVHvNRzU",
  "key32": "5pZRCrXC7hNp1fQHREGBZ1KpjZMHXboyrmFYBJvKoLiBpucge5YasN3sLjiZ9HKUSXtfpnik1TDsBBqdvhKaXCJU",
  "key33": "5ooZPMqKtFxuTfmQb28HjVLoimGfaDCi28kyasLKLLrHbWiJdmWRLJ9AekE8fXDVD6Q1n2VxPBfknnhaMrzFZjEg",
  "key34": "4Sn4fxwx6qenzsA8XCqRRNe3ngZb3EiJiMzrahGGUAgYsctvHVaGHwPE3tjXajMeHCj4ZMbUfEsxk1EKuZ17zMXD",
  "key35": "5jeHdGdu19WnN3sBo1Az8ipH1ewgBQuAd791JXvd7Q7BdmYTRDjgTBuoWRanwHmjWKLSqK3KTSKyhD8Av2a1V8oL",
  "key36": "5tmnUT77sfUQbrb2ZytWsGsGKDfRQrVXsBU548Age2jfNihaz8wtg9DMWuKbrjoLcbVhUf3huKsQMvzPtEZDqLxf",
  "key37": "KafabcxHgTuJFQSqpNFMhy5kykscBqusk6ATZ5jxQiuoqzT3wsuuPx2xU5KyMjDrdFNXWnG2sm9zX3PqdkTCqWn",
  "key38": "2TujrfEVasoaTdfSmBjVAQiBHGdE6Z6gDAPnKsHWgkMVj4owp1fgPRe2js4V3bCeGr7bcai21S6Fyw2btNdFRf7J",
  "key39": "4KAtWBYbJRBkoBSvubn4EUDGRPvDWSQfcTUU9uSXCz57XoKrdpp34CNuYcacZfDygK5WxBsS2nrse9h6CV8UPALK",
  "key40": "2tL9ea6Bquw9qt29wRyNQ4wiAWDVdiXJbysKCgdvC8GqdKstwoBBH4n27McjgDjqjTL2SMBhtmaAdApMHTsxCCDF",
  "key41": "2V19gHzxiGyWeQgTs1sVz4sLMuDSaim2NuK6DhPNASDR9jRP8QQDzTpXfYKhSdoxjATNSpWEbKfEDNTNfP3rQqj5",
  "key42": "4W3zW9qrXJ8hoEzdfNkir3T99YXCJzgYS1sUdTM61uzkyU5q5UvULduM8ixgBNeno8gqJzBpV3jtnSQiaJcZTC4D",
  "key43": "2shfb38fdzcDohFj6wxdoKCopX9w1hbL297YwwdBJ6gHJSvNnj2KXXXR9n7wSRS6eppPKws5GfGdqUawd4dij8G1",
  "key44": "4fd5amkhGa4VVMznJSWKWAs9q5b6dt9gSCHcMHheoKBw2XqrHa7ESdBTeKWg4CEuQ9Q4ZzgYxXagvomMoqNoTC6v",
  "key45": "M6ir96d828vVTquJa1T5SoWLQzy2t3ktW4MoYLHUpawDn2YtFrmcxrNv2gohUzaeSk88emAPYtQ4GgDB9mFE19G",
  "key46": "3nY4LBuhd3NGUAeLZi27f2g9KarphyNFQiFgLhUi2kMifV6aXcDwdiwXMqqDHoUKydkxgc46TmbvhzJyCTi8w238",
  "key47": "2Si9n6td36YszwkTFYdT4ZrtJ3mUQ3nSphPKYYgKKgvxfSjQ1VX2qoUmvf9pDeHZLVjo3U8etzW8BqmFEHErWTf7"
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
