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
    "4jXsENB1tkavGsWrSyVCJsFZHdkqaevNZ8vgmsVvHicLjsDeTJC1HCfGvMMYD7nYq2YvZWmptRmoFdTYR1JRYuQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYQnEUSPdLdko4DgjdJtP62UfAZpL6is6kqfEyrqXF5wJmgzGskQUaAoH7o2B9Rt5KqN53J4CEvXG4ncATCF7s6",
  "key1": "4QkAgRqgq3FGDyvvcQZodZ9pWK5HPeeXMWb5nGT7tWXVvPraFvyLUpcVeXemTWsPSkynQYKAAoCb1TGtuUBuDwxd",
  "key2": "3559DsoBAL1hb9sYz7srbmGsvewqzaLyEa2hLv21JpC6QUCPAnWeeveMkEfzmA4guLUab9Ngve4xSEX3CaP946UX",
  "key3": "5bWT18nBKCDWgvsEBUken2xHUqGWD5kFQgPWiCVN7JmuEJhjQyMpDeGHgnVRQRdyUwV9eetpz1vFSzAQ79Eops6b",
  "key4": "5N2KsD6wy3WFgHuAk7UTKtGFhg8U9zb9T3r5yrCqmf19UF329RQNfxH9fVfZqPmVBWdJQFjYbS8fiaoumCarL6G5",
  "key5": "1N1K9RU4wkfebTzDFTpLTPcPYUNtitswE9B6M6VQrFuy96k3qt4X83NMCiwYwMRkd6ndfhgeNgtzzYbTyRQiyE1",
  "key6": "2GYUedJKVwzULnYgt1HDi8TNUEfJnoFzFAo6GdwCjSTCoQNFuX8zNUakRvkYCSBcabvxuMxj1i2YZbWwf4uSyLgj",
  "key7": "3mzgmaKXWXoQsd11XEo2APpZbc5SpUExtHZxDqchk1egpk7JLCt3StK272grQA6oYQ2CkiKhGBGkAwLdy3aH2zmU",
  "key8": "5tiU99bBDUn15B2P97KWGPv9HhJHwHw26fkj1cGm8n5zBz66DBFYpAESK184TBSJcVFdcSvcaVUYezAQMop2AVTX",
  "key9": "45dAsxsydpCugp8G6VvQF2iTwW8TfgqPCHEEeq6hfm57FAEE2kgAVnYVmPA2ju6r41NuZCQMHA1wjpEVeENMR5qm",
  "key10": "44it5fPVbZ6CLd2ZNcmfY3qruuHN2r5gK348fr83xzKLUxDPELLLK8WBBvr8kfHiCPNv7Aza3EUPjkBVPsAue54t",
  "key11": "5ydn2TzqJ8QkBFKFjyL2k5d8ajpM4yu9p3SBfwK7r6VSRsmG2cwqbC4EsgHC1zFpgmatQPFKK7xWkF7viwJ57m5z",
  "key12": "517cnHotXRMms5LfRBb52PRa9s31pBnzGLBjettLxvjiwDx4DskS2joACsFd3SVkAP6waxJahfVn2Vwqi6FdBWe4",
  "key13": "MbfYzhxjmS2gqWAxEBi4GKL7EMXsTvCp685UsvpuvpiwppDKJtjoohL7xWDfKvVb8aE5oKvSUnFk1wX9C5G6NK5",
  "key14": "2CbgvbYbVFUdSVfeSZHz7pmp8uJ31UpqMwg9bAd4izXSsh6joZvXCbiswrXZZm3ZGUENACZAfm5bNycv8XnEdViv",
  "key15": "3BmLpZ6LxmRh67uEgDfcBLPC7hZ9TnTuu5f26sLfKe3SUKxL4GCP8jsSsRfK3VXgF9DXopwGkmQbsLSMdTM9CVPq",
  "key16": "34SBK6cEWCjLFDGRs9PFSMouqct1ZudksJ2JdPhUVXmcyA7sAr2ye4de4upD7Lgqy3YnAgx5brFoyVEkVhXJtnUP",
  "key17": "bhDLcH72Siu8qcfezSGmXGMojLqEGsdZxDaotkJSCthaRgaeXGFYHB2sRoARVBTsGmRYmwZecJmnzPf7uy8nSr7",
  "key18": "5EGAVsZGCLntvijXAWtuo8YN3o5dken1fmt9URWA8qb9xkdk7aVkKcfBktXDr5hGk2q32WCzuX24VmwUoEqVTWWn",
  "key19": "HMKeugF8Jahx5KoRzXm7MdFReLGXKWnotV8HMqSiMLqEeYZHCw8gT2cCrgKXZ4MwdTxgu5B3Bxur4JUEjmLrzSK",
  "key20": "3aZbnq4XceTngNazXxuYfuTKpokQSfDqez7BEC6WB1QEnKfb9XHNS3vt4bpcatALW1raXZL1iJvUhGUagSQ6ydJ6",
  "key21": "6PkXjPXhbfQ3k3Un4PTwzQSSqdyjhprvPmAaMEbvoihVQdhpuxf6YbyeHtX7zQLimZE44xsMDNZWY9tn6K2J7u5",
  "key22": "TGa1hzXSzbLFmnYN1LajEbL5kPWJMwvnRce5VPMg6HPgo7oAzy1kfUNhvBoHFKcWi4MKVAaAafDpjxof5PxESca",
  "key23": "4qbe4hd4hsbKHEb5BgGebV9ZW1a4sMXLaVBPmWqFaCmf4AYhNyPGNAq8KR3SLijHGc2rk5aEDwq56vZtZj5tJStS",
  "key24": "3VQBMFYwQFeiL21Znd77SkXSeDEVfccg8UNpPqeJKsJqJskpgF4Ct5afuv1nRy9GL6v75miNH4yvJ9Xo5RWUngbG",
  "key25": "TGHPYQZF6GVs1R7VYNzebziZmVmDUi3dwzYnACyt6AAQWAbVpcv6NsuRaK4ZJAtbSi6dL1W2TjCXDuotsSjSC6h",
  "key26": "hT9KfVdPE6ZHU32tsixZbM7V6CghPmC28cQmF4NaNKUpnMtcATTnHi41VirK5C5a5RPZFYx6YvXArhU8ukbATRW",
  "key27": "LGikViNfVMs4gcbgA2u8vUPLByWmr8UssGcZpR1bSmpa4CXsC3CDR47949yjwrgxmvRykr6mKmsRU5RTwsuXKGV",
  "key28": "3uZM7EiK8rtFurxKq1rs7Qd5GMnCPXA2WLvoZy5Ky5tJHxZrZ3mQqHQh978QsDGrX4sA1Xcj2wzVK1yJovN3ZDsd",
  "key29": "4DTRNJfKRYZvbkxgf7U17p2j2au6bCU6PhhpdqWmJ2sVunsiSyneZvMUwWvA6XCzw1NrtqcycKSf8k6qeeqAmQyA",
  "key30": "s2ib7Gu1Fu5CgiokRBopNhAcTBrjqmAsqgWPGFiwHn4M6qY7G2QbqhECyJp6XhcFBbpXiLE938njbSJ3GFpcHUo",
  "key31": "46LDQ4Wp1WxfeHmYo74r6XDciXJJ9REvdz765vy4kYiS3u1VQuzqMRu23djWiJrFPW2XaPiUUdqRcwkyfQgC9QtP",
  "key32": "58G9awFmgRx8wt55g4GpvzzP8CZ9uxoF3TkBSrcYouHZeepjnfzP7wp6QoWAJVgSBw1ZbKsbK8nx4CNkQFDP85B9",
  "key33": "2NFLoi8bupJvGVTQwoQFKBhQ3bR63SJNfwxWov38ptu7VCw15rh3dU2QqmyumzxjXJUZdiHbuY6Mnb191c5xj1Jb",
  "key34": "mK6gcPwvSskW1Xs7JwdP2kM1mtztMogshcPxFh4K1tEPKHL74PL2LeBn7JzcWxGyPA6KtGFUXsHeQsxfuWRmM34",
  "key35": "5Hu97rmZ2w2Pu4mFu77R1WC1LGHwy4eh813TQoWCpm3Th9moyAzVg2L4CqFkbJZxG38CngWxut5bKyeqrcRs4DHX",
  "key36": "41yQrenbmdfiWhy6mciyD6TXPgrW5av4AozfAGM76wtEZb65X8s65mNHHaFd3oi6RZSvyXSR1ifsFxYS2BUEmuYs",
  "key37": "sk9QvzvumYufdxSCRK5JToawcNeGdwGaNyTbnzt2657RHV4xG2JbLwnoagj4DBFYhDJ8xEVTs6r1amYtgenA49T",
  "key38": "3buuka9apDJrRdo8xehcZGnutN34oQ7vyatt3X8Kbuynaz7zeK9FyBAGTaaUYQ5bm7r4Pd2wmP7qRJ3DUG4LB2Re",
  "key39": "4XJHHLx4DwdDehGWCRLvZifgd421QBcXcyC6anCbzDQLh47FPrb9rtecxMTRd2FShU8SNY2QBEmwkmfWbGW93Zrt",
  "key40": "3Uhn411rmcKBYbA9n8WUzXPcuRADrcXrxwiofMRSgKoGBZ7MaGCjiGwYSGp1m2MsXMX85gDD9SKzqrUvotMPLQgm",
  "key41": "gJQJ1NEqGRvfH6swzUdMZ2bNQVYeqLAs7bhRLYDCKQpMW14AjFDgeLmxA2CdJtVT6YEJNdW62xiyou7TBDCcgwF",
  "key42": "4QTSaRhJ7RKhKs688HX4koCbhGW74sW8WE3peoiaWtt1a8gyCGGVoS2Nnqe6w4hgo4Qxk6p7xLkQC1RqRstSao5w",
  "key43": "n5SaRtE87hsCmifD5Vmd73kszJqkG3VFnynEHDARZkrdKD6pSQeHTiWpNCJRCZH4hUDzo1xjs8pA2XnUeCFMS5V",
  "key44": "3gNaZ35AcNmNUTEhZ1LFFBkLDPT3PHEjYUJeS4UJ6PB6WAk3HssKhNzNxAu8kipJzfqG5ur8a6VNK6BRCKwQfRQE",
  "key45": "3WJySdePevq3xRPpkDVu3sHCxKTRFmBgiK4hrS6VBAKzVJpnC3PbKZ4v1kenshFe3ZpbsP7MC5nDgTrXf7sVC4ea",
  "key46": "2LrivNxGjnRkWtcXXvUJ5PWJ8zy1sSy5RX9NqC4u3EReRSyXPHSbdBtucgK3WxFJfX3E4iteVSPiN8RxQ3i4PYy4"
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
