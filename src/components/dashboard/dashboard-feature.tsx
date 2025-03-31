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
    "5YkDDFEfbmRxyMW9e4khpS4irSBhK9DRBonFjgpWzeEdRhiyyNKygoEJphEUxapVgBCA8SrHLVVgwP2enZw5fn3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRuQ4fRt1VJRkzMwjkfYmSSxEF7eYCotfdCMPq4FSqZfVXmtGT9YVf5tQSWffL7aF7wEzUATHPcotTVNzzy3Qg9",
  "key1": "joeJqYrWsuSL7HjnqrwTob2fYKApk8hu1PE6A2S63CHYr5KAjxYqsxyZse9cDThFtqxPEbADmSRqogwg8s5CAQr",
  "key2": "AXLcefpLM7KRyapzxxSLT7HceGBXB9V3oXXLMV5SA2kmJuykKdgrWXGz4DK6gibJPkzTF4bA4yoUJGm4DGPfH4X",
  "key3": "4WyUCVNuRvUnQrzgybKJJuYEszQw5LcziSH1cDpCn333KQDiJkW3eFwVV8qLZCoNrmRvuuWAsJSCUYh7wzCtbURf",
  "key4": "4587Zb9kEUs5feNppAigg3bBvMmoHUGfmmRwyqtqsc1i36Lkpdh4RjLTWV1FWPpPhFLBVC1njtB1oPn74mdxQcSZ",
  "key5": "GYXdMSNe8nZBrBm2dHnBNhDdMHjY3hW3CQYMGGUtKRvtpwicsBcjRL3LXqxeiWNvvhdu8jtbC1JTGMutL4RiTAa",
  "key6": "2QvGVTan5WiNXXSXJef3YbjbqymbZvFNWdhxy3JMVZctWkkUUuSAzC1vevZkcwfLLqCYFU5vPuJg6TnUDZHHxnva",
  "key7": "fQpvnzxjLcRUrZakAtTTFGQKAptZFqLmzJXedFapGtd7NwZvbjCtMe9N8L8qweL1RE1AyUPv3sFk74jwqTapCXA",
  "key8": "2U87DnpEUmnzq2iMPB7okfdfTqeHra1UN1n61yrdLhxbCfn36AYr2cBqU2wkUrUa2wuYcoJeHsq8gB6iU8MiFPZ9",
  "key9": "45qiPNx5TH8tVDctt2EXNRFJ9DmiVPjwZU6SeNUR4tnd7rLsNzema9JT1hi81c7HqLZjUJjDFudwy6An7MK2FhjX",
  "key10": "2pFypGCoUBGiCme2JAMy8NmxJP64AzSPCipk12Vhe1EZvVdhun7Yn7zMdToqHD7Qq1BHA9QrRdEYxz4qPn2S5SzZ",
  "key11": "3QxgaZmwSQhbmgPWTGotgu6ATHLkhCwH7r58VEyKwrXxi5y6wqYUD9DkqYa9w2tprtW6RhfJuNEccTXqvKz45Zra",
  "key12": "2jpDSMDjhc33tAWxUDsJKnSJe8yHRizHvaR7BmYQxfJr5uKitxqKEJBQtVwa8S58PFSHL2ax3bCWcNuGn89uZoPq",
  "key13": "5KzQNzjQjAg6GFAacruWxVYukyrD8755pxRSzCcAKLL3bosBNp4PPoG32cUMCQeHzZF2nBWxzTzVjWmwCMgHW6Rb",
  "key14": "67b2CC27Uhe5zm79wVYe5W48H456NSJoQnoM7Jj7iCB3UGFnxr7g31mXpUGPhsctKE3Aq4s7evhMbq6Xk6CD5ruG",
  "key15": "3mFFDqLWLwpef7T9ZVBGcprcVqJoPBmBVPKi6EwVRHC8fodW2pfb2NfUkk1RMCbqsuXmkTCokdcbE7nKUcYvQnEu",
  "key16": "4UyGvfNZmYgodeC4z7Xup2rbs1T6e3gPvzP2gFtgwamGvchNGrdV3LzkAugqNNbFN3NDKG2JteBfbjy2KABfd2qP",
  "key17": "nJHp5X8XBnd1bGrUeDjdxZdSo9mfzf69sCVcRhvYyRjNqewPewob4MpAst5HkD6ARkbCztKdaCQomrXvZq1kgBL",
  "key18": "3JCfWpGTrtr9weFxsEmRmcdKc9yz2ePyFmdG6ap8Mp811xbcQZx3yjznUFEFRcsu6wyhYoUyvYrvL7NTp9duvabu",
  "key19": "4yfpK9ATDruMCM8V7wjAF7bVg1LstwYwSnjRZP98XMuAsAfJBAsBZyF77L1XSVFF35kxgVPsV3QyzWNJSfbjZQKU",
  "key20": "5QBtTzvunSPHhKZhyEqDJWMoLAYcdYbfp7JVJdMXrEcuwuVS9gbfKozhSoyCFTkANKpKG4navrcyGi776vgNVmMt",
  "key21": "3G7VDWD849SA5vFyA4upYoxmgwCcKwAJFRLpp1AdrKfqXvgDCbz4F2PFFEZvR5HDDTyUJW9fAJSH8knHvAa5LzHp",
  "key22": "7J4b6VSmnvV6JmRQBvxDqiTq8HrygidFzx7e7NwGgLWEXB3pa1dySd5VudvCnE3dvi6s63nutRUrLkW4VdGfHgG",
  "key23": "3itGso7CjmaxUyGdYfm3J1iQbJ3jYS5ekDrHhbdWDAK8kD6YqNtLERE6qHE4kNBW7rFJyUG9jy95ZoChFT7TNJKz",
  "key24": "4TVBwfcGHecMGs4hu2QA8JWZLSDPG74sgbGvHEpihUqKtR4nJ1kHTaTocyWZRFoJXCxFgyBTdi5xxfDPoUFPZLiT",
  "key25": "3CN8Wvh73M8e9d8xStzsgR83CtspDCvJ14wNsGvoXSJDco2ynwei68Qz1ybZLda3LZzH5QvyqBkEVYy26MecfQSS",
  "key26": "3sDxoaYfH9e2bmkx5JKgy3vEPvAHYPY9sy2iFSf1Y4cFf54FQWzz8o9xonmPguue3nnPZ2jqHhhphtKfVgye5qaK",
  "key27": "2xtQ5YxMvPWRuPwvVppN6x4yJD1t6Bh95t2v1bEA3DcQBuhtDcc5NMVVpcTTRUy1849nJfrzZWEcmdAmc3Yb7F5z",
  "key28": "xbsPWEcP5ehqMkjng2Sqf27mooB5yeNRN4r9vNpGjyf2EEdjimKGdp1djPA1n556JXJugoqirDFThTL7pqSMRWr",
  "key29": "3aPbMfWg65YVVz8pUYh783UjFb7AdaaGyhirjKA3NbTH5KyvTkmH8r7pWuh1ATjvQ5nc1W2o5rFsm4Cm1uN8HBwW",
  "key30": "Adb1mpaPUtRXmHhQAwb1pv8K8H7p1ZWDdusqMLaXeFCAKoDq4oQYCV4ahmwMcnCbMmcXXacHeZGUCReiYkUK8Rt",
  "key31": "WBbsk6KK45CAhEYsCrw3XNvPN3RryPTu86QoiDqkqQr57uFq9cAE8jXekh78xh8Vv5PVQ6jjJK4D47ghfb72tLk",
  "key32": "6dYL426jeSkzYCaJ92PhR8XDBN6PfWgZQYGMt95hjFcGJ57Rc7c8SStYH2p1UJN4uac1p61cGXZdHC3C1Fo8QqN",
  "key33": "2nAakf9W8bMJLhdLRv9kdHGxnRB8Kaqa7MaAzXpcumbKvBBh8CKmsWcaXKPg3e86AkB7hAZ3zchqQVhD7nhxzkxf",
  "key34": "5GwWWNCFMeuu8js9cXtwwKsAMZaN2tBASLF7359uoFYwycpzNJtYnrqFSTogKmSuwN777o4zP9NaUQwNrFcWsbCC",
  "key35": "5SZyRx5DcbgQ1oD2WHra6KgWEyGEHcTPmKz9HgGfJ561HNgX8apGg7asFqTRVvmHZdD9GuL4N7HmstKgEhUzW4He",
  "key36": "2A8JGY5svFLVEudX5bc3cAJGfRSsnB6UHsAUmAqpCsj6gVxydNX4aEo67YqASKnv2CYaxRoim9vXrVrP52oHeVFu",
  "key37": "q5HQ8Rsf2EqEkv3hK6sxxM9y4LawvHyLQhrQQJrerdB6eSy8w3hLUModUuQBCDsfVxW5b6t3fVBSQaWoxhHYA26",
  "key38": "4Lsa3dShGfUYfCQBAvEWJyQBeCXiKdxME9guYEkp5CHpSyGjKa9m2xwwY7DA1MxsTFwZNruxUGV9nGLCanP4ZjV6",
  "key39": "4tjvJXoKefX38Xeid9pvxeusVxF7YNnXUFwMVn2JGJQ7x5XDt3cEoRMj9EP5GGWP6ijiEZaLmAjDm5EcdsJ6hXPa",
  "key40": "2eAK5WdnzkMH6jgVzNzQAmiLE9XwCw9Wv8D2p4hkQT138YM8juePCiqvfUpA3XcexbyjjYuJLWfob7uEBXE3We4j",
  "key41": "2AWPy6KYLJwEyRjSrMsqo6XC9ARHTjecoc3oWMamUmWBgLbskM71es8cvM7GbBHAsvAJg2R3iy4jDih1SmzQB6a1",
  "key42": "FdamJjYTD3s8rG6benGd3nePPoeNfBRr2ku3C1FjoHMvhpCQ3TzGYJnZDRtTwvWPBhaXibGiZaXsq4YSuh1t4ob",
  "key43": "5WV1K1cZcNdPnddLY5USRnguFtQF1bMG4xgAER2GqXqDVeH3DMRNWydgYvDvz4keQFndA2LjUjTj1dS3cq1Zj8Wv",
  "key44": "3ghJHSS3FeWnPihPugt2eb4ApHyQus9opQmwtuVvKGJubRXwpUqc8x1kDKLAprUW8q2V5umrjowPee2LFUdnza7t",
  "key45": "85pmeLjAngfF8RcJUFSKGyxfvkQ1uuf26uXH4Wa2qzzLWr5sfS6eeSy9jEjNQnP2qciYRFjWgG18PEkg5fRFoDc",
  "key46": "5xADtGyzCehMXRi5ULZqPesa4a5GgB59SKCqijwi8n9ufDKvNFAtXRW5A4gGwJ13ttUhr18pEEUftHnFuCDa5EC8",
  "key47": "4v9Nvt6j5SR3cBiU31wfXHyscYtKh1xnMz6xgQVVALMMuv52U4QCUcJSYugDacCVzp21GaLxVTPwRCqUp5EnSqix"
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
