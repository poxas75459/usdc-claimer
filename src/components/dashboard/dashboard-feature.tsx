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
    "xUAeyAotK6EVs5bgoKZzySfUrfty8gNXjzjE7mks4KjznZdMXP2RgcLL3yxpBhX8uyPGmofzUkSvGHGMb2QNE4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUDzvJB3K8f1XbkyH3WQMxxptNGLqTNGxpWsQ3sYqgBs4Eh9onzTnQ46wYrrHLZkzR57gm2E8MsbhENcL5QMCLX",
  "key1": "3qhhdLz6MsMq7Dh5K4XHv6SokoKbaDLtsfv118zFZsAs3QsgCaXRE1Cs4f9R7cv5PhjtMY6aqmRBhMAhgBMr3eXW",
  "key2": "3YSFE28168FnW7r1tUPjKu5kZBbD3bMaaPCnRTAZXjfXPxQNLoBqmnr6UXfaUsWY7gnkYqDcZXgK7gXbQeA3DCnj",
  "key3": "3MqDd2NQoiPj4Xa7iktaSEhya9PYaJkz3Ah9dUZuLFKEta9YkMDKbtGUpRorktYJZi62gcqRoBrgMbpjpxeo3MXi",
  "key4": "3mggW4CjLeBYFek76YQbxRRcTvJ7VYGXeKqqqSKbiEpgjhGiXjLEN2foAfVaogELwvPhVFCaW34ycBoReeSrL2jB",
  "key5": "b6cBzLFezrqbKXm5877DPzSsrjBsEWhj28H5HU24JVHNhfzVrQcRFDZuxsRzXUXmYfnEgxgLKWcv37NGQAeupr5",
  "key6": "5ictruwfF1W4oRHtA8EcHpRNk6tA5uhGmrahHdJRPoM3e9J1BnBw8EpMk2otAPRAY7wkdVtRiQo1HMLrK1dytMWy",
  "key7": "4R4V1nfrWSZfvdTHSPK5dmNsxifNy61hgR43syimGXYCisPTBnctXJjKPscaFtSyJfWW8Nxe1NCPB7W3K5VZzB33",
  "key8": "5fTS4QzwtT7J3koRhV1xuLHVe5mAJ5QAPVpnzFSM5oxWSNhPaaSFEbTrbUNSafNR1eEdUpA6QoWUKEs4ZUDDggfE",
  "key9": "4ZAxvcn97upVQUKyDbRVtUUyqrDmfErx6HYswraW8HHYgX3AHVGN2RDXHhCwfPg11axQQ3ZxfYvMPN36S8TsM3p7",
  "key10": "4B2SwRj7fKKqm9aR335a5MNK1kikmDf7gp7BxCiJLe7ZHfp8BLaeQifTAvirvLacUaAhFfRqvmgrSna4VCft3yjV",
  "key11": "5LRQD37pBMUFY7AVdV8K3dNiUVVjr8cZwJM3tbxEZc2VBAKok2Kga46KTPNJYs9zhPcx78MprLopy81xPUBziRxf",
  "key12": "5K6mhm5DZ5GbfC5Tn4ZzWRgKVSuoaWaENdWRLxyA4ZDtMQVdaga1wcNWf53cFLriJnnkjdGcY2q2GnDH6q86X2nr",
  "key13": "2W6tg834Fi1cbvr5qaY9S7JwjpDyJ7WKKP3cJkYP1JGYM35nej5RJ6vhGzA5ETJfER8NVHxXcQwx2urt6BtxkP8i",
  "key14": "HAmKGjMCvmhzdSqFs2jtkwU5oRigXU192TnrQ3LMDG1KCETt4dgU1xixPBcL53ccX7LifuN7egJfNYobAU8otvv",
  "key15": "4kYBRmWCsXXyeSvyG6yFFZuyH9YfsHHJrwo5ni5GYmoEwKo29u3Fp29QAvJ8qNFaDZmZPpCZeDLRyGt9khhiGisp",
  "key16": "2AEEtNGTvU1QM5e6jjVKfzAHavgsfMBgwTCnuCWRsz4Kp2EvhV9uat2d5yURyLovwvA2xHYbFYAxrbb3KMLgcBpt",
  "key17": "2WUTovaSvnbV6RP1Scfp8xHcSPcQFGWucn3zvmLiPt6hNTH3hrXaN4xSKJfrVfUUnPvFeDzfFypeyRhZAuv9j6g8",
  "key18": "3Se2Cox1E6xZBTqJx3PqPz15hLLKCkGssp7J4jvsgwHpoxH89Zo6Z7PACwBwSFLhstT6ySon3gpamNRdEUk7SLaM",
  "key19": "2yypY2248sYVRj7w9Ud2qLbugxvsDbdGbJ56gtf21bzErMCzDWvH15HgV2QiwaiPT5Qr1CQY3Lkm4WBLyq2k3RRx",
  "key20": "2nsnzJ3tCjXYj7WvKstsyvf4Zg4aWQU9NUf8Rv4LrpqzpxT1mGVN311fGFvDgioAxqR6cer362X4b1Mitje4HGov",
  "key21": "3daFhQocciMKmJuG4hvoTAHQrjxGEgdkLRqBv8t6cLGGxTLEeq3kdsjo3bcVaW6Zkjm3SmKj9DnG461Sd5Nch9F8",
  "key22": "3Q4axw6Rbaz1NCv948huFuPLfwhDSjYpy3g8H6dwsroEDYvKDpgt2iVMjW7sJGYnMQLD4j6BfcqpA3zTR3CuX7Dw",
  "key23": "4fUa4jZBg35h3bznx17Wpf1GtV8cVg3sMMPGmKR5HH7QsddxpS9tPQyi3vzjLHKuP68GABUkKv5QGunAJBm69iBw",
  "key24": "3dbqCSUxiTGWGnbTpZYMMbGaW5MJ2Uy3ZcC8kz5oJ8aaKgpscVWYwMLiKiUGrtLsUkxfFEX91cu7XRRQ1qDYHnwM",
  "key25": "NLB7XAFgpUE5PxGGnaZngQHJJ4swaHsmX2Y2eskaLtsP6WF1x1JGAWdHXYNkTFGGyzeEVuNaPEfFYtUeW28o74B",
  "key26": "3qkfBZgNrCeyjC9S2qT7gGNrmW3wcMwX3Phtq7zqTwiKSJzQU3GzcwPii3Wm8XCy4TNfLM7hKY7GLWYMu6GJrx5w",
  "key27": "5d9BpryTDJP821eoDyvFekbpTrmcBtBX5ch83EATPrSDQotkiPn89wJGvRBCivSzph121SYTDNc5ccYg8WNtSanw",
  "key28": "3Av2uKLgw3MCCMav3KaNDVnw22hniMUHHXSxKt9EQbCqGKEFf9DXRf51vvTeLQJghH8LVEpFtdH7deqjBtedmm8Y",
  "key29": "ysW8h5fwkx5RLf2tA7aP6o9BUfcak1Fp4EgSkVN8JAssivtX6TGSKnGfaBXK28c2pg9ARYMBRKvgPcr9pF4ombY",
  "key30": "4ZqNbmKzqPU5dTjELoDdbWXM6RMc9YZesamYq58E6gpVfzW3aFCmhvubYspicfGu6Fj24yPdqPhwFUdxEF8Xv3wx",
  "key31": "5dvDRi3jCBespLiWYm6CMK2NTNQkwbMjtw3bJNM9KUV28YKvuCL38nfktVBBmDszm39oqZucciVTPcVPXJvQt6cL",
  "key32": "2CcceJWXDbgkuw8bKUSv4H9DWP1iM8Z4vR9UeGiXukHRqveuxN8cgvSMvttE5FSQZzzNycBEzAHHzCnUfEXSDhpc",
  "key33": "3Ce6e6V4gCBEnrbdSUde2e4vXduZS8DYsRXygNEPy2JE84eURFbQzNfyx1QVbBZs2dJ8egVtmC7KnHT1ZRfHMgfh",
  "key34": "5bqPGc69DMnmiUTY9uDgLZVp82P8DoPJM7ZSLmrqTG6KtXURexLcqYx7vN5RyHTztSNo4hFhbSKyr5R1C5rixMin",
  "key35": "3W3QnEAxa2RJ6oYvPA2pYDKTFsEGS5P5DinT8aqfuzTuxFzpNkmPqbixfc39ZqiqKJxYtQakgLGHHYso9N92C7d9",
  "key36": "4KHJDiC3jD7BYw1GCFsncxfANoEoHcpzJSjoDEKqfixFmueWotg97UmwPxUGFYUZ9Nwq4UuyNq7LUR65JPFsAkvx",
  "key37": "BfyDvgZ2WeiUK7sKzgxRpSVxBa2mHVRPEJWG6CHMvZHkCGf4Ljsc4QYqJbUVru6GPMbRGEZZNXMdNKdhoGdDQEk"
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
