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
    "3c4KzTrFc5SMBWaxBKmRsFP5cEkbwHDk2AGZtcW21mTprDPXECAofGZw842GkahxK8AQPDvMQM1y7ZyP9tapyfAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHLpixaP57jTuLpsok88Z52iJkizu4c3pkk1CEbbxTAmw11hEGBkTjUpgc57Z8R1whaFHsdtSpy41nr4ksAA3aU",
  "key1": "dttXbYe5iABah9Ca2zkSD271zQekfPJ2EP4SamNZpfZoeQghtny2vPSCmuA4f4QjEqNN7aejA26MqvwpU7L65Wt",
  "key2": "42deMjUChxbHGXb94woc5v5fhHeHZ7bvooofFk9B1tFCSf2SnJ8FVKbeiVJakA66DsEWiTRdcYLGBLy47NGs3aeK",
  "key3": "QZpQTd28iuxDXT325x1jYCqr1P2viboh1MyhZGVQ3ZEhRczXosXXfCWkrZpi1ageDAVG7X2uU4GQPqNgkQTA9Lb",
  "key4": "2zqhr467NaMyxKHnJj61R6XVSX4YRH1WaVkvAhrx5g1ZizUvGeMoVx5n3uMkd6uViQQdT42nZvM19HboMqNxzoib",
  "key5": "35hmLyTcTRJBzirYPGtC9Ksf8WeX7ibs6pvw9f7jhD1gTv7MmD8kmRB9dyzWUQKyF1Wyx9hHAuFPvGSgCTA9F2Ux",
  "key6": "iHJAUxLt3YLaE2nieK837RNm9DctSZ8RqQ8xeLr7C5463kPkwP5wqy86WZP1REAbD1VeDuisfkAubY5bQ6iNSAK",
  "key7": "4QbbNDsMnMTZUH3UEjSStW5krQQCZ49e5GaHRFsg6N5PS9anUSXjANQosrCCML55uepQPwtnQXzmz6rvZCBnc7QK",
  "key8": "5HmanvqSW5mM7HRVmMjjo41LYRj2NHZkq5tcpdsY2aBDKCzKNzmN54q2dgt1zxHtNiMPQnZ2YG1kkJ7Vh1TazrAj",
  "key9": "wq7EX5zbZdx2YVp9FgRm8teJUeGyAbuXnUuoZNhw143XgiYHhvnfQHvKLgDebZQ7E8gJd6rvF9bNzyvEdvh6BqT",
  "key10": "47FHTX7KDktYicnJv34bvMMxR5fy8dkqbGYW2a8Ztfyh3yKenetjUAvvKuWLjLZ2r475L3M1J4e6N8AUdLwD8Fgn",
  "key11": "3P8tHkzrEAVWm9GWXGjrrQhsmjiFbXNo8JXRduCwW3bepPjcrgd5WMfwFtG1XzvtwJfHGdxAn9cb5GnDPysK6yup",
  "key12": "idfVRpqsu2SVipZF4NFpv8oR9vn5YfXGgf6xoPtXzBpVjEiRgcGaNbqMHA1SztzGeskcYyZ2rLCmnCuxtRrtRsd",
  "key13": "AnFWv1jUvyypWxFXSHQJgwZbEYnfFcV5LNS6yunB6YyjwTrCWJBhURr6a6QGpKogFcZ1tTPpngffiZG343Uxi3J",
  "key14": "xwEJ9cUzyvHRZXZqZQAAj2yAYhnyCRANYeNQBd3rxaAYDDx2AuvpGqWQhfPCSLEY9id6zapmaViLRkXMYVFZYaa",
  "key15": "4kXrcvUC7xrz2UJRkUCLSaWB7BBeBB5PfLooojoTWz6AQ2QeSpr75TSdvH4FT8opvZDSRxoJXi5DyzfEY83X8gHN",
  "key16": "D9zJYpbSgWt8cPCiR5Arn3eQEJsMBENVnfD3fbCENAMWTMXqjhPLUEfsgBwReSGK7FkFtX6sXP4a9DhUrzUCms1",
  "key17": "5gQRTEodHMXhTkFtpo1HQTDscQmNa7rPsKbsSRZsdhRfMBzDwzVfdeFrHFBmZoqrxZfqXwbKzAJMGX8gUFiMWMJV",
  "key18": "4jAwHphHPT3pTZ9c1CBkaeL3i1g4NTAyVUjd4VXnokLQViL7HPebCAuf583WxUUka3aPniaZpV4m8GNNX6E8HukG",
  "key19": "5LLMdo5wG288vEzRX1BnsdHkvbFK8uWwTXfjiU7LFkopWyC9QFbzPBpM3DVnHg39d8Zq5Bn7J9rQVNXRxt1eiuFb",
  "key20": "MUEbLbgt9P6dDTJjjRotpm24N7JWUZJZP835wHYtsYP5pHLjsUsqqgoVmXdobAgy7mtA9dxYX4oBQeUDw23yAzb",
  "key21": "2oLzF1Hdjaz6mNE4AU2VNpGAxEVRDBSjvd6CKNHQdGW8P2ub4pM9GTph8sHGFpYGrtwsfumovbmxGwtkYUNwQLTH",
  "key22": "3Evd3uWpo9ahxFUrr4qBQTy78YBX8a8YT7kvgNPhg3mmBNVDEyKdgbDH3gAoFBTkmiXHepfwxnrcap9W5fQ8De5w",
  "key23": "4asVWLQpS9wa433xwiqSZFonnVvEgqRZsLmwVzRVS4DaqoNhDnfti5MVkALZz5P2NPKpap5KTXDZKGhoufGn2Crp",
  "key24": "3trq7nQCY4pKRPScG14yLNgn1YmTR24GPJeEGGE8oJEfpWTmT8T9bdCbAHJPcegpd4xTJvrka5rghvviU3ccqJkP",
  "key25": "3gsJmgQnWvu98zHyEMTjvinzn7pX2rMho8srYmvzbjeRc7jyDEvfepE4HEMcGRvFoNybzH5ut5YSuXLLvU84UFvV",
  "key26": "xVAGRfc4BniYN6MmT7fodYZ6AYtdHPd8wQ2UUMvc2seLbpSxuif3WXh7dYGPRF244LDutyzEQ7D4mJo9DfzY6qg",
  "key27": "TegWLPuaeEnoyxeU3sUuoy2542ytGqUQjZquR3xLY6HsSiU2U5FfqjX4SpWdYhAh4Af14BDg1szfPLvuvS4kX98",
  "key28": "3bUYxsweDZ2qfsrwgXi5L61uW1rmUikxTjHyPUNuqLiqhy9tZSHQRq1FsRXbZVWzn59W7YdFAZRC1o5RMorcXgaM",
  "key29": "5GMYVNBZQSBUHJ2D8afGrt5ufK343687k8jcJybkW3tdkrtYm9prL7pKkcNUcQTwdeK3v16AnKeLvWGRvxrPgNph",
  "key30": "4fsuCWMziWy9XQaMX1UzdM1Xa2cb9psZR1Q57xTLEnDkwEYuv3ZmjMTXQwE4CS9BufhWgNA55yFeMuXgPDKckDXW",
  "key31": "2dwR8cc4dapcvrh1cbNjqdDJiG7cxikpGfAFQn7aKmTZJDTTUSehMnX1X2yTHYiXQ6g9cF7JcSbfC5D9fgK9ttvH",
  "key32": "3Dy2RM2BRGop9HNdbSddox28RkfMR5LDrNJsYFWnHnX2uBrh9iMF6GAUU7hyvF9JdzMgfY48MmshxWczdhoBw7GW",
  "key33": "3RnuLA67kbtpDx66cxJ9ZMLQ8i7z9E3KQgpBHRAHjL9rqqUftffqG893oSJeHBtiK42swstuajmuZ3VsqCpeDiNy",
  "key34": "3CNC8ihpjGPzFyavaYi4CyGjr4BZwFrjYG5ReVaooHWFAdcSk5hJcZruxoaXajDUx176dfVu5NzMNhqSrDnUi4gt",
  "key35": "3SvPnAqCdWQtAf5EjMUEo77q8V6qdWBCbGErSbHXDbZ2F2nXWGHatseLMz9qMkaE5cs7S5ReDBWKyWCVrHuuSCi3",
  "key36": "3z6ZxcpL4Kz11Vfx8uxB77VjCTd2cpxw4CwQRf6ADh5EtmK9x7x8v9Yuqvw4b8vYb71XiEYJd6Bf2HUdDJt3EQv5",
  "key37": "4doTf4Rmjqt8hQAPW4ptQxqxJgc2vVB6xQur1Spo1HfMnKzrVfS59P2e1WhmJ6DjkK2EEWZKEFQ3UWrE2wwJPkez",
  "key38": "SBW6gsXNK8Mo4oN7ZLmW6LUrV1Fcj49MJzurDZyZscxD2Z9nVAKC8J5b47j2YWAfnYRMpAY89stDERWDDWpaLrp",
  "key39": "4ADPNjvBPMEUXoH2CwtfQD5dbKc65muSKScb8y84Phfk22nDtYRc23FTjDLxWNMkYgj3nJV3NgNCUfHdr7MnFujY",
  "key40": "3hnoTseb613hfVUEjMfgz6yb7HaPXQgytcYjVemMnHgGyMjvqYNTbjc18jSLPzY23SUdJu6mnQTVFzb3wH9Egd8K",
  "key41": "4cayBB7HeqZce1An85W3ur7Lxbk112pkoMGr6KE9FsKpXcNdaL6CvSQGonCce4kio2xUDtBSBFbm5hqs7vMt4DAs"
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
