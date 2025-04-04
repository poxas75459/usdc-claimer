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
    "4s6K1YRKZmMp52jMxasKD62CwoXcTe2us7KB5xv1MCNCWENnZ6P8vZ5P1f8nykBcwYM6j1QxDkjiUmHiwDYZ8Sth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5M29ArR5TB4D7vhtVY2KEWYyon8WGDyBkFS9L9kSCCxXwgcRjjHrduWZoNUyejjdJej7zs3FWnABZszYMxC2dz",
  "key1": "4uGimMHvWs3HkNnePwYdeH52g9v2L8sTBf5oCuXcFxaSgp3UbRE33SxvPhpwx2jruaWWxBZK7bXXdwNBTkotHKui",
  "key2": "59w5Zn9Cjr8FBaesVZaoHutG9jS7vxjUYFvdJmgqjw25VJ6PZHPUsw1K3XiGkd5s8ee4k1H4HExgqmBsoHSLodvv",
  "key3": "5CYdDrLRJuHJcXM1zt1VbSFVXGbyxcQER6k2q9orXcCTsiUM3iCVo87q43aor5jYukJSdBkFaZL5hg6sqFdVnAsY",
  "key4": "5VgWnQx425bkJFtX1toDyKWVk58q8SWjmAAuvJKPm7ditr1sN8p4cswWo7qr4t8X3CWjZ4PKLtTi2QyqvBQHP9qZ",
  "key5": "4keZSoLSJcZc3rev9YXeEWTtmiLhSY6T7Du7YtacMqrgT9Ys2UbXE6BQzR5y8oULjjzTe2nzNSt5XMoWsLUSv9fF",
  "key6": "2B9XAFXhPTynDV4hSNcvP14GybhhDCnDSE256ZU1ijM2SNhZEKf2gtYqV3iFaYBGNHMXBwUwJRJDQ3nz18hjbGZZ",
  "key7": "2pER64b4goPsgpQeMM5vmu4U4ZYnEZzTz1uMYCKesadKx4jXRBhodwmcXLH5pVezj6xC74JKk64rWxxdL2wKYafC",
  "key8": "3EkqKjJNh4B4jbGnA3x1FbRQa4nqJ4qCmnLXwi4nc2Tr7rNjYHzgZv5TeHiqcBdydxgADEXNAL4o9aGJTPBuKvHo",
  "key9": "3XKxGcrJavLkyfpHDTPuP2xjAzWbhtNCnt7FSwRLqbYNKM1Wm2YnkBo4pmQFyRKbvMcQN7VVSGVsGH96v1pQoP88",
  "key10": "63kPm2zdvV3yKGa1DLNXLzTm2SptQgDP7Q72hkCs9r3UhMoRWtrz35yBJcJezS2Y5HLttDs4cTmaW7QSu2wymiBt",
  "key11": "3rRhGM2iR9nnTLRRoKBHf2Uvrbk2aa2VQHwYCWiUDVfreVYbobECWui25u8uuczHw4qmaQ7qPHoy1ado4R9VhfCT",
  "key12": "3TV47qLiMTqejrodn38MuxcTYtmZQ1LLFJK1JW91zBPqt6ktbBTkDdoka6zdJR7LG1tfDU968dXqQ8QoD6rCohCC",
  "key13": "d6X6sjRvR4gJcyWbPaKBEGuhDie4FoL1FmgdoVTZhHFEFapserPPxKx8vnAVKa8APP1XHcS8EGeRzJytTxJmayC",
  "key14": "539GojGPgdBARQzXthd1kBxoYEon8tFUTuazm9rwr69F9Xr6mU8nSiSuYTn5XmZPyCZJY4SzziQfseyCrxyowd5a",
  "key15": "ow3C7EVsuUQLu6QTi596oNCu4D5F4qw8xyT1UGmFoCfTrXfNVv2zbNhqGsiZ45XMKNtD5roNxDDSHjaGzYWzdJM",
  "key16": "55DLNM5wbJ2jRUQQd8hsW5oxtdpZheS1c3MyJZTkVGw161k2LiG68Q2tVvm2cbrWrPAhCnZ1zgpsCrZ54Txfv7mQ",
  "key17": "2VhvHqYdxyUxBX6PC19wUu2EFiNtrgk8nHK4wF3QbABv6V2BEyqpki1ysFCyVCXARCvn4LaLkbNTEPZRPX9CUwQS",
  "key18": "4YcMmByQrg4w6dFk1J14XsMJUxDcdQuatWoBVytgC6MhoXaXbP2eMR5s643CAeAn2RLfC58biaUbLvqhmpuLdMGL",
  "key19": "347zgPxcGmS8SwnSFbDrK2YK5LeMmhKNbovRLEdrLqQqCoUF64cemuuZo52n7KYw8V7Xu3HyepcxcqNdw3XmmW3x",
  "key20": "rxLPxtGdXvMcAUvVyxnFUiyfPEa4tpaF5432qyFCcjfjRFm5zxSLy36kHHV3ZUskAcismkYvwFH2j8VHjyMANCb",
  "key21": "4YN3qgw5fArz8tvXHGGvSchLVJE5YA3mnhHr4hXZ1hCXCtE5NoUkGkJvm5TqHn6io5vE5WFZSkmzDb9Y1fTNmaN1",
  "key22": "2LbVnh62F1guR4WtGehWu2v29vNEiv7r8Cb1NpdLwmbq6QrEcsCnR8Ns2JDyac7aV1heEJ1xFH2WLH9PXoVCdC9B",
  "key23": "24Z1oWNZU3FxiLDm3XTkcoWHWg3HxqusBQTjUeWZTMxUE86eMsL1fuXKVeGQbDSWYBa9RiLR8kbWLTxv4KGaQ1vB",
  "key24": "2mzaMkZH1wfmKKCPwE4ZBV8spD4jjXRpMAniQETCYw1duzgnHyWBeSajE68o717uh9Bq6JQQSnqFYdq6AF9nPcs3",
  "key25": "uwVK7rXYzHG4YBwYm6zypgtW8xQ4fiyGYMUju2hKSDxPRbE6Bq9QGo9XrsgA7LCg8QoStAX1soRrfqNeUH9YrKg",
  "key26": "4aZ9msfytwmmPwCg6ciZzUFrfH3q4P82X6r7U7t8ZrC8sUX2KUAiJ63JQeza16MbuqT3vFAyBoDvUezU2zqE5nqH",
  "key27": "569PfWuVbwUF7epEhGxhRiw6GitgFw6f3iWi3DW5kL18rXBsWiNnnkC8sX7eig9xbxfjTZErTJqHQqnA2z9do9xv",
  "key28": "5LTAPY1ekdLvjagNhSeMkc7YuVvGfwfDPW9GYg6t8NcgTA4MnyMdZMdPpFYQaGfMwzjCWDnC7WVmspzxv9P6tJn6",
  "key29": "2FLRiGtzPfrgjuszLwKLniCKiGF2r6ezbFifEi6xMnFFuRigXvCJF5pkshfqrG3dFBQXQMGYt39ZZxcEha1Pas8E",
  "key30": "4WrzNUwjEY8y7LJsiaaEkvmFSZVLXYRT5p1WEfL6SC3R7oExj7h8vD6MbUH9B3rjifFHbXJpDNSRRMZouDEUjQ3f",
  "key31": "5er735384CB8d5FuHDmwaEARygRvXZXnPFBHe88ZzhhExxKSHJb4vPdadgoD9ownYCPb4aX72MvMGNuk6gc2PUGC",
  "key32": "3rwk4T7Sk2er7gPBpGMTed45SzWSUE6f8fsTWN5zUZKyqPejSjQpfb7yTYXvdKK1F1RCQRjwFMMUkLKSzdauv9Zm",
  "key33": "3KgCVmVAEmy6okT4noYzXqW692zD2wT18zYgTX7Vm3TPgMbGMgNE3Rh4NnTP5VzjFciQ8GTU3r3AbqCUygciSXjp",
  "key34": "5pV9HBY7VPVtziVfBgozuMfmWnswT3NS5udfKK7w8BqR7gd8HeUrCrHooRshGnjdft64QgNPJwXgHZQaETWMhHJf",
  "key35": "32gRQD3kmsq6w4MTgQK2bX1PktA4pUQskiH5yd7FCpqZbqcDQv8hfohx8WGH6V7abHB9DjxuogoTc79yHTnBLKcM",
  "key36": "58tenzjBQRZvKu1LwpeXsUsfs6WF32aeaHRMLZTmfweoaVtNg11P9tznjigueB9sRKP9QHLfGHp3jCH2dU93NKKn",
  "key37": "3QC2fgiB4utM2aVjaUn1F28VC87Gv5hnw9egWnJoNK22im91HcasQroEWroYXDVzx2FR4Fezp7WaW4LwK7pgqXRn",
  "key38": "3xTZVbRsP6KrWfcNxKG4UDLmLZeMAtDPkXswjScd54TDeKzeRT7kzRY1HJA34SNpNsuXA6wYqAqstomN4KKk93b4",
  "key39": "4XN4ccKBUn3LF1BjYDvUqDqAJLfdu6ys9AXkbmeLt4N2FgKq8PVuEoMLsLGjAReg5uPUkQF5iPzBnUpLxX6LKeFC",
  "key40": "3DEBihVdS3f3z71G19Y92QspkrAKybFjhNaGJzb6m6c2LFhSUmggovYvAjTGLn3cLXqCrRDv4EMWPeT5tkCPNQok",
  "key41": "2YjAULmF4gdYU8cEw3414Z3G4Prjm79zfZyArKzRMYcTxdV7uuXe7DZaH5QSrUJpcSUR8UNtdzS4WCqsrBjM6eiD",
  "key42": "1iX6moy2Ln6fTP24W7pm8pYSVP7Jm3TsZT2BTMaK6AM8buzyyPw25h7DEnCWXAAQcm9NdmHGDdmNorwiQwgGQkW",
  "key43": "2j1iJssnuFRjy7KfFBFtJHFXmtLDV3L6gkohQ3GQTvWKQ98wNGXSBX78pBc2nQSecJ9me3p76ogLsGwC77gfMTnn",
  "key44": "4uqFpitzmoYUURvD6LBoT9PCyk2tQ2a9wX5Rm9nqRz7BeS39nw12YK4WnVZu6a6fH2e84B9UWut9ni8rDNrvthYS",
  "key45": "5HWsy1RTnyAatuV4UXt164SEEUKkEugeRHzthQm4FF8E2yrb5GDbbLkx26sY8ocedPkdHwcL6Dqb2BLTeyVTdR2o",
  "key46": "64Pn8o4NG1Tddw6RzcfJJYnDpK24oY6RDkCAZqG6uRfuyP2E165DwCRL4rrZYiF8qoDgCUz3s5JLVEHcjg2z4ngd",
  "key47": "5dCJ8M2WY1mRrB1dVMVoc1uGjS4SBbMzVPR8GMCvo47NUT14zRJJbzkJKvPrmXx7AX4wQdq7WBCMu9cxg2cD82WD"
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
