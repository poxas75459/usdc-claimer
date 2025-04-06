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
    "39Xe9o1PHiHE5dwJzNqMLnBfHtpC2ggehwB2STscTjxQxz7Rf1KmaTNztMUGY8GXvj86LKE1JoJC7w91QnMsWDr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZHA91MJBYd75pE98NSxBF6koT2aF8TcA7JdhSMaGdxczNbzqSiY4h2s7GYE1xAAadwcaBJZWuTaEQbTsgJqskod",
  "key1": "42E6F5curbWjDPj5ysyjthDwnTSE92ea2u4ksLixFzg5a6wXg4mAgjV9RPAZ2y7G6MvTK61fA88vwpNDpunT96Hh",
  "key2": "4xPsw5VkaY6Xzwsq9A6epnpSaLjaBRYyCSq9LXTASzVUGzfJPeGcYxeBuMz7cd1gDbn2Q1QCDbLHLBBSpc9vdwiq",
  "key3": "4b1gZbbKLRWZxgi2z5bRSDZGS5ekCsKfjSYFocq59JxRiE5JjhEZaqhwvFCPnekmcof85vSvYhbxizztsqGFHr38",
  "key4": "1Zbq6UwD2q2fRkFzbZmApumrjEYm3gfSgMEhQ6LQs4B9LVokUT4qBB91qoJKMYr2CBXbRigThmh1VhraT7bURNL",
  "key5": "2t27hXSXT53AapR3Xj5DdXmimZ66WcpwvQF5ziLiS4s9422MF6CqkSVoNEMrfHmEpN2UDY4Nt4KvoY8EVScx6vEu",
  "key6": "WYRL8HTtZXwFvipJtDhd8LR6B33fEGiw9YFZbnVVcX3z4bxkEfshhd4W2TXdJAwJUweVX9TN5uYeZETged6Q23u",
  "key7": "5XQMXex3hmGnQrK9LGDeMfkpnY6DegWcP2aiFdG8TjcGxf2YfV11TTMfhWWvRB1kSyMDVo6uy2TnAcejw69a4jL8",
  "key8": "4Qb4sL9BwCoBBvHFkTVGCgHmbsZPJxZSqgwNGvSvad1iN4Hm5uo2boRkLKrTVNJshD7TfzcCUmDxwKbNngPoHjsC",
  "key9": "4cgUcngVF4sYsamsY8jjrxp6TeHrEtUBwCRen8Q3UAd7kEpZeASamWV8UQn3dDQmsjjj1z1eREGpMBGVj459A4q7",
  "key10": "48xKp37YNCpf2j84ENRsx4EnWYBdsJqcHVWXJA2W2t4wT4SSNtXcFdu29WQkLvUBY9tMnY33AgqSFmnVtwbTbNNS",
  "key11": "61Vso3R2GNftmBmUB16Zr3G23Hz9oGjweFk574EBCjg2Ev9yrNwc4K8CtsAcK1qN3rfBFvJiKYdajay26veYdQ55",
  "key12": "FLSePeMT5JUBYQkDfzjx9vmLiayUNZdmWNqZh3P5jN8GpNJakv692pjEQprhoBCofktFaQeShSarbuuKjeNcw9D",
  "key13": "4xbjgY3v3dGMMLcpw46bdkGn2uQSjkJNbTjufcKw1xbra5753dGG27obVUD1vTZYG2h3ym8x1VofghxhX5km92QG",
  "key14": "58pcLuwRYwoyXU3vRADrYcgHtDtNvY1R8g9hcPFJVqXajF7Epk6nq2D8VbySMpDd6v9e9FyhJxozBNxonaoDV7Cc",
  "key15": "5Ey2odDJB8XiXQhvDfeYKwWuUJfpDCWA34xXF3qvPZrz6Xrg7mTPXzYkvk8cFyNbcpdCzqu2jpERoTyFtcssBsQN",
  "key16": "4AutANn9Y51tNkhq1qFBJr1A2w3X95oBepLeUGHYqcqiD63VJwztPTc5mkGGnRdna7iDQwGkxrTp94AyfmMZ8ez4",
  "key17": "Q1K64rHRMRsvgraio9msaGmnahF8kFByrCEooD6XbqDRkPvxppqW4bRizDVGweaR36ziWf25FheawqQ3YrQGieY",
  "key18": "32Lv8UFT434BDdz2Qbvp9nkYm9w8v5Vc7XL3iSWzfTMq1oUC2Sf9kn76AySVnkaEZYVRyWaPu76ng69zDXifagcb",
  "key19": "5B1dT4p3vcwoy22BsrzxfpagztHau56iXiSKaCyANiRXjGV2Cy8UXbVe4M1wtMvWb6pZJn4nZgY2ZxWjSQVqpFsf",
  "key20": "5HALjvMkq37CisRTqLJV8cMwdcWG24Es4rarmXiH3dxYw3dsjetA7x858goUPcSfZ6ssQcdxUW8G3T6QnZRDsPMA",
  "key21": "4Tp8xx5YsPEJasT94V7YCB6RK9Lfqbc4UP1A3ryA77DNsan5uii244SdPM62XcnSpmbZmrwvqoccgNJKiuipsjeY",
  "key22": "LzMSyorXuRLoJc3nwZajStt2xHp6FnxDSe22vXtENMMAswVuA3GwxuPUGeqYyGDFjz7LHwSH9NWdxetEv6cXj9v",
  "key23": "4j5XNigE56nkhtBQjSxYDkRpWygHaJ2M1VDjwSbjDbxenuKatsEiTbAcqFR7cVp7xttMq2ardykBDUkUAFMmwnbW",
  "key24": "3ogVKBLjB9fD39itjeY6QcW39YBeaknDVQdRKoSdrY8mxKdezb5BvwPkS5E39QCQVmfiC3M5HAZgAjgLpsDpV7NP",
  "key25": "4TbDRgZwrr1CHQtLrTEdRrh7vhpVeTAfSq1EcZjEfT2uM3BrtfmD37fUQdiXcW3Crc3NQQirtabDjU9eJpgUYBen",
  "key26": "2WUv5Djq66jBWQTkgyHPkJLdJZUqX2DvaxLKUYVKmUt7KDMD1WTYqn393vFM5h26Z3CxiSPSWthy2LiMMnfxyy4",
  "key27": "21cGhWvkBnJTedzgT1U4dyJR6pRuQ6EqFVXyzKGsfvn8szqoYmhmba7MCQc7oyjb74giVLMX9Go7TMJx13y1j8Wk",
  "key28": "4kmYw4qQ8GyhqrWPcvQZQYR1WojCkef8GHQxnmvKA28zxDQ8LpdcKyfwczJQX9tUxY3zNu64WNKVJSWH6vpg8qYF",
  "key29": "3MofW9jYjK6NkFrj4nbgZwBuPtmAtk1yoYGDNGeBWnRD5xYJ52yMWEgYG4wPMWG9rZ6SPTBiftSTLs9wefnfwHmt",
  "key30": "43iyECkjJ8cDbt9BByUFtheorcCbGkwxQjyQHBq7uW7Fh7qtfvTexkFdCoPbAZ5PS23i3oCupv865Pf8K17t1vDy",
  "key31": "WcvJY3VUDPcnRNgVhCJ2zBhyAYZsg1Y7JLLgwmUSXQn9Yi8GSvyt7tssQ3q18AuWfP4ganFTdfNom6iQWz4eZJp",
  "key32": "613cctxpcUApwKaDgiGhbkuwatYYh6xSht8VAyPHCr5quiKeVNg2itk6mXtEWNBnsA95tfpUBhfqUnCwXN6zFF7v",
  "key33": "5qdp8r32gzARNk7T4vNRtsHQRKJpnPwfbEiXAghiba4rjBb3oFWDmppNeGkwHwwd5Ph7nV2WV3X64Zzo65FkDfT2",
  "key34": "3hoFJ7d4hprnTh6XPCxRaLfSKEUtbxEoVMBXTvEtZsTtwbnVihk43eUhGaisaujs7nFMbMLZMoHTXatcu4JUr8Ux",
  "key35": "5t7BqKvd33QPkqVHaaZkxE756ja3Lo4cLicQKpuqL2v5YyUn6z6qx2FSe6b9L5DgZ2Hm1Pn9tN7aEXj5Y7z8cbeK",
  "key36": "3U4zzracethApsH7AUGxJ2sYpjne9azeurCTXBusH9yrqZry2PxJn85eyUxM95umT6MC7PfPNagxgGZAge1mbYE8",
  "key37": "3RQo8iCq94g2YAoRDs4Av3uXegYP6fVz3iRo8tbuWSm4MGpio6ig7eg8fqjSx3xPVFBewaSNvH6zgX84DTEPrbbi",
  "key38": "3uUN9CEnXGA2mVYVPRC27TX3YWi5zztmDX8r5FJtNyT2EFGyv4VWuxzdEdt1CL4Ma7imdWzuDSt4sqE5PVcAFCdB",
  "key39": "2iB2icwxuouvnSnPJsKfT7gmioH8iSD2GaJhGVCiroFM7qHxMGDvsDM3YmkkHYWn4FUTFdaygzmegoApJV9rY6CQ",
  "key40": "3CGH5EgJnCFowxZTmF8Lpoj4G9wACZ4LZ4p5E7GfEyznujBrxbM33YeLrMKSs2qHYjuvu4YRupZ2ihAAX87CLs8y",
  "key41": "5EeL1os4o4cDg1mtJ4fNzapBXwhkYpBnivaVjLacYXSsr7DQxCzDaCeKY1hqv7YJcvJim9Si9QYk6kQjdfEQffzS"
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
