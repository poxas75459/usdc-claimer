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
    "53UA85H51w6MktoVmAb1m1fwds7vnU6HY7S8bZx2CgC2db7myFVcw3xKwgT63dHf73sKt5SA8znxGbvQuf5Dq68n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53BX1vG1Ua2haLFE5JHKCQggZwiyRTxpsrcMb1RZ2rt4rHpaZpJCFF3qbpuEhCms8VU3tGYxkDZdDeQp3kQugrX7",
  "key1": "H794pFXh5tzx5Jmu3iAZrT9Yy3FEQEZJWytePdWDXrngZsn6kVKUMyErsZ82bQiM18foMWpEQMCrb8S9aAq3tjd",
  "key2": "5WPJxgZ4ZH593sEpobJ69aPySY8ttwsnEXb6wSZAzETYvD4F8PuyQF885mHLt1n62bD92sDigAT6ANRRPwTGdXiL",
  "key3": "2py7xVSVy5ME95CtVNivh5zhdEzaBc3aqXip572PjCigUZuw2Nu4xzULcwuas3Kg8S19KZuu8qyGJoCUb6banohL",
  "key4": "4iEoE4ox8naF6fzFrDw6nxxxBu5Ps6v12jfQWNZ8HN8CEW76Skm5EVB7LxXQUvHUMdRHUGSr2w6UPUJ2xRjqdpWU",
  "key5": "3KYWCqCrZwaZePnHeE5mE3rUzW1tjSrYSauRYArVTr1Ya8ND4FL1aCZkQx8w1vrtT5ADQNciqxDdqftGek24i7px",
  "key6": "54qrvwLp2ij38TQTaceMreCZRc98kkBtPgF3dCFRrFB4QuiyEgZScKp5syQe3Uy1fQ84vv6ZNdNXCc4r3BoCQxrr",
  "key7": "61NV8RycuhoMFJArmyeg2k7M6gKGaUeePCqLy3T6ZYSiPfdSaB3DgDsnk4rvCMGFCdfkU5YuNpvJPyTF1C67pZjm",
  "key8": "2uEb1QRKrW8sqmVrTB3TkWUGGZcRo3wKoi1G2H8JFM6MXkuuKMtewu7nSV7X6jpLZwHThzZ6JRNq785UR7CJ6s1p",
  "key9": "2GSHFHJo1wSYmaWCaMAPv6JJ9i8tVsZDt4KLr3aX1zQ2YJxviCWDDzon4CADSdcUjv947PT19Xw4fpyU2vbjvwKF",
  "key10": "2kjDkXuopwgHGHKKjLvhPC83VKeXUNVKqFmzioQ3CYRFzNAnD4Zydikptr16DFGAUwTBepcnZB4GbGvWUGRjTHb7",
  "key11": "5HYCHHMoacZmL5TCKZboRNHocdXKADcHCd5DPyCaMJndjJZo32xD5d6LMzoLGsTVaVyvZGjvNNTe1ZmDsXqzAqcM",
  "key12": "5CJnUEVMMWvwnQgpivCsB1rFXhjsQM2a5ZiJYUP3T6eFhsGm3jrU1goH5syjTe6UFytBYv1B2Mj1PFXptTRCdqZq",
  "key13": "2PZKthctdev3KzCR7taF2QRu6KPRfsRcneJX7YJJwqTiHVFpQGF4qffBfh6QcZs6ZHLQeQQt5aAjYJnnMz1fT92T",
  "key14": "3L4FDEm1omNCxT3rfgzmq512K1yxxK7QjLNaTNLkgiBwrLoRgNQy3xTvtuQm6zSkEaUtNEVE8TZDt3GypCVCsdAz",
  "key15": "2jo33nS9AtAPXDraVyBBMNT3SSuZTLxLgXo7n5VTifZ2SDTHp53DXFpCsyu4ZrNiqzG7XAMqpQBdgtg2w3zfCLc3",
  "key16": "33VC8TyJcdKHRNPPE9J1DfaPPPMvf7AFA2CeWhggq7fdVqU54aahuPVLZkXdUY3mX1tG5SqNLPwANEnwRHJQpHM2",
  "key17": "54yVpfDR8XJXheB3bJsCg9PhnGS8CUkwFBVczrDW99f62qaNZa5CfWFBK9ejUDjibZeKPS8oEYPD57BefqYyHamv",
  "key18": "4934xmvvTs2FRZg8BgybamyGcu3UJirLNiY3KtdoN7R7H2Yp2J1Tybi27kFB6tsVZhutPmGPmJXVAmrLKGwwcJW2",
  "key19": "kFfNkwKSCZpJut54Y79t47fqcqXik9s8jJKogWoxEaSrarf8xcPGLyGgz22wPtn7fgcbMFcmAYuus1APQJZf4PQ",
  "key20": "3MTnAqda5emAhGDDrPpePwuEBdChynLL9MzZnioUavRWAn9NTQX52zWNQoLnh2zBx6y7NfCkzGCswqQd37ka1aEt",
  "key21": "2uPTCG6FUdCMcEpUkUtyQcBzNp192UbE2DKY9PFcHwaeYjUV6FCNiWiYdiDPFDfYxnHSNVXS5DE95HPe7AEULwS2",
  "key22": "JM9v573daExH2Dv3X9j4gkxrxFNbYeJeuLa6pirxeNs6c7QsR7u558QqzJZ5pqqPhRJrLNxpfXZYrBVv37MWUrQ",
  "key23": "24mmkoWgZ8DhYxX916KjjzZ53aGTRjHPoBzK6LAcNmB4sGZQMRHX8zYzUa4p9Gy7CvJdU8jehZjnbJKSXxx89NES",
  "key24": "Rfp8mbosgYz4oRLCKF3SuQVnr88shGq1s3XsDeJBVhQknTpyKjQyxDwtX5S9QdwzBXE6wjA2FMNaQPxeGrTbmCS",
  "key25": "4to5eM9hxCQZ82x4jr589BGxBDscKF8A5JFn4fZgU7J2D21qBzpnbX2uM3nXkoWRXB16RzPQ1nWq8cJ8wifyvTmo",
  "key26": "2cbGVjmi4tEWnXwedZcQcU1Q541GH782TJFE2D6Gv1rj18YUBWytYnGq14h2rK46n6J97ZXrTJZAxh1dPqHhGp1",
  "key27": "5D3vLKf9CCEUHLQR1e9GdCPJCvMLuUCjvFN7yqXapEBETXcNS46ix57ezv3mroYiftvNyivGEpmxD596BrnxKbcR",
  "key28": "3ouQHWPYQ5HcaovoYEg19USmyyoyRhHFuaXwYrMgzEo7rrBA9vy43s8xYipmavuHKiTMVbu6qTpLxXfwixpjj4W1",
  "key29": "zxAdeyKDC23CPCESuPQU4E34QaAirGNew2opG8y9YXcAArtLEWEbYPNjFojcsckRbGSUb7kANvNe2nbJuLU53FH",
  "key30": "3eym8QmtrDTw7xsXX5Xcf1bixd38kBZj4VhezSR5GNQf87aGBXpLYkqJtMXuFgEkEuxFoofX31cKZmiyfj9p31wd",
  "key31": "562sVU7TYrvr9DTt9WULekWzsubhPc6eqSiS96kjFubny4uT6nXe5YX3K4KvjmSvy5a79heMu9wn4RgJzG4nohxL",
  "key32": "2NJyxoteb9MqYBRgMNGVPrCUSapMz5zaHhu9cuJ1Nr2XSLGPMZVVrZdyubJ8JfVV6NMCW99N2jtUEKz2Ekkyhner",
  "key33": "eoCEbKU1ndQeDXxSUkcSjVVG5r6pzdrpgjB1hwpZGNragbk4WeGLn7942UB2VkhnJ9DhGnmuG4RXUFyfQJ2utwC",
  "key34": "42FysrtkpnnKGgkEtk9JvYTvLzcQvfp7uoyq3ziZ2HM2rTCGJwSQrTgPm8TzPr82QzeRJRW3z9ZmqKYpVbfLmrTX",
  "key35": "4cVjeCPS6H9chVvNcLQwXfbxqnV7Awc6UY4a5YUvhETAioaANbvTsrfvjkQHkxVPrqCcb1uoXc9io3NAD55kYDKr",
  "key36": "5KEvEepUVTbRfBJu4KaMcgTtGWvrqMgXUjAzHLd8DBrxzcho5FWkC7uehF2vdGmN2SxBmqvdKb1oRCQzexVSBc4c",
  "key37": "47DFpr3rsFHvpBsVyxKDU6SRKSAiHiCtsYRegCkMnH9Jk3QLNFLctGjC2prC8y99pA6XQJjfehMpkTf15MPCXcLB",
  "key38": "2inrPAofUsoGskvW5SayqsuNVsz8b7ATLMBNYix84Eef324c2CJF65tnVctWB5z85QA7xdunbqqSYuYZ4L5o6HWj",
  "key39": "fWqUJKEhr3YRZaFh6zvNfsKeM8NZu8iBp5LxSryB9NjDrnJRR5LU6SZW9vtzzCkJTJkVzR5CLRkmZtRB77AMCz9",
  "key40": "2urn6QGBAjtt12cqVE62FX2oUA2o4gvKh5wSHWWxSG6tuw1UrAVckDXz8vaHr9PqKq2A75LZ57JZ1RQygK87m8JU",
  "key41": "4oU6vzsoU8yn7iQpVcTkd3G59imBsuK9ZQhtLqZYp52wJ9iy1XgeybE7f8XsgGzankHe2x1NGsSSZvSZVqAi4V5X",
  "key42": "3LsAkiAx9QvKkw3HWgJqwbeECdAc1PJwFBHnn1NGrsF2zFSC1m49Mt1brWuPL8ccXZgPgi1bjqQ4XeUzsm3nLo3B",
  "key43": "4HaqsQbwy2pz6JUDGYDgeVDumcp7Dx8KP5C66wYwkuSc2YELWCtVGoPwwVoyikWvoNDPeazXo9HbboqCgSYFRR21",
  "key44": "2KCfTkB6JZ9bz6BnrmPA6GWEwLAm1UqJgjWFDPZE77npC39Jh4SMUQFKeWUdqEYDSN6aCUuJsz9ri634y61yfEvf"
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
