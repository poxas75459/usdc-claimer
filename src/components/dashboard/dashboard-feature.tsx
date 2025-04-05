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
    "4ndCsqrkKyusDfqdA3scLaQDCgVtaVK4rt2ZYvn6ehnmfHguFQ1L5T9pPAM7yDhEeKLmp9kjc5LjBshX98X67Z7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUgQDwpRvdSvUYLDVxQFtGmyP9FmJmQWWXKdCUMt4iLZ1fYxYV8J334J3BF58typ29jWyQRU1FHpyQoC534L467",
  "key1": "5obDeeioyVXjtSHsRhFWXmjYx5GYJRMFzUX85BHuU1Dm2JxtiLiYkGxhuHhA2C1mRNQ4am7e4SASmJhRU6oWPuMK",
  "key2": "4e7KmgaZY1ReaB91SSUPJxJXZv6PNqKeT6dT8hqKgysbT5Fd3P62iSGZwB7SQt1fx2JmGVxz1owLDp2qwqF9vsx1",
  "key3": "2hF6oX72hzkaEWfpehrZCdeVJx7oyicUUqAgyaghNoVW9mw25SgHSZUgdLjKdhDs7fTi1MJ9YN5PcqduYtphum87",
  "key4": "4FY1jP33cujJZExGS5ZxGF6WTqV1EAefRQa9P9SDmiHemtydJAtfoyJRZGZXXuFSY9zGNLm826ym75PDMYTzTaBV",
  "key5": "5Z38qa1BFNnC5PwNNoXCMqDYpK6hMPJCoVXddD5igdwQ3xpgKC29iSWezWDzNX2orLAjURaNLv87eSdcCc9nEY6t",
  "key6": "4c9MXdaLvhCpUECHZHd1mXv7LJanFATDjXHN3frTLBi9abWnurkk2tQckt9WwTewBHDY4y8DDTQUyrNkV8bxRp1a",
  "key7": "5MNnXnYGP6F7XBsXFBuV7WjcvqXNGV9jxg1ErqEzUQ1xtUEJiiyLZdgLbJkYanGzwFjKVD73hS5sn2d91e5uD1EW",
  "key8": "5eohjXHFW2ynf8w2Uhsw1MRCNdDCr2pzcJMWWM4guwwLV9KSZCAo2u6YnYU8eFUgkFbM2rrdQKidgt1mrT8zuhD4",
  "key9": "4oUo2joqqivCTyzDqRXq85p3rFNNkA8c7x2cNHeLkiyWZBkdvZejT98o3au5fAfCyJPcKa1CQPgVjogNoxzwfaPN",
  "key10": "5EykTrvvZ6AR7sHLiTLsDzdHScSCTYZVUN2tCSyUF8k8DortyZynCa3kov8PP1i6uLoMx1VQDcZGhGfx78V3mi8e",
  "key11": "5vsdFQDWTBwZUVJ9gTaVmAkV8EzNYyMYnFJSBqqeMFob7vaq3bc4Fha8hx828dmEfiBiBqx2JXbWxvPgrXTnrpvE",
  "key12": "3VDycNAV5Kc3f1jEdiQvZP5uDA5GG6CN7A7Lgsjz2X7JvXhyn7uLNn9wthGVrX5dzhZToMh72YbefStxs9J3TaZf",
  "key13": "3pBNEL74Q3UAAW7fX9Wz7gxHgnUaRqzUusrPkoa4ToaVDnj5UqwAfdUtuo2zwzYs43qc82C9vvoX9Uv6Qa76xL3p",
  "key14": "3y6ZcjPr7RWCPXVewDiRgxze1vzm9i5eBanzgvjzyRy6b19UZ44QVgfUrNjr2ZiWeiqf8HCw4QcND73S35y8Uuin",
  "key15": "2wedfxisJ2pVmuou2KMz2N79Cr5VB8gyt6RLYJstmHz9HoTY6sJ36M6vFRUYW4d1qEf11E3STW78prDSC1PLLgdY",
  "key16": "2qmxF8dGcykAFiXnMPAPrG9Nfo1fgwt2jEz7E5J7RjapDuHBWPL3NYphr2s7na9JBGYyzLC18GJfiEh9CEuFJxc5",
  "key17": "2xtszGJpj9N65nke8zcFrWPibwJERnSFLECDyHtoTHxfRNRD77UNDPEAc1UasPTsdiGCkfcci4GVuH2dSrd2zP6J",
  "key18": "Njp3ZbCsSBnUweDZ4CVdK4soNk3AiZkPCkzzFGo5QqAWxuTXPMNaSUfNDWTfHcuQmwGsZipAz364di7SoHKEYvC",
  "key19": "vSdHtwMUqhhvJ8RwY22KrVW35RqzeZwYB2UYAdNsPx2K1cTBMynWmoUiHZrx9DMzh375PPdgoY2gyj1DncyneoV",
  "key20": "43kLfyXUeHyCMPannaJB8VhrzmqDkMa7UifUZ9mdkfGC4iqeoBZjaVaQhEb53nSYEv9iuVq9dSpEYdDMCG2LGWha",
  "key21": "VwK1WCRMCFMoBrinHyj8nDNNEKmKCoqZEcKQtWNFXUVku5SJYwDPj9hZRuSvsdGQnWPvaK235qPXCKYydhQoCt1",
  "key22": "8vqxzgDTNyBD7JLKfnvm9knNXptUxv7J2aXb2iVcKuVCFvNB8rG3ByqhJStGHWEsZVrngqx3kjk7UNRtr2WWhBX",
  "key23": "YAmGZVGstpoNNnPNtNzm2nTdj2VMDDvR7USxG3R9GCothbqbi7Kp5NG5qfHQ11XnqbHq8T6JVgWWc6jEVVBB2JA",
  "key24": "4Pnchqcw7euqJkLqXJ3oCQaUVrpyUd5VBzfDaexbGnHu1o4ajmnLknnyTGFheSfF4xKxBzia8ZgHzPo3pjRZMxRZ",
  "key25": "592qJbWLhTv8dTPNNxZAKFyHUQiUgDzGKqFTJienYNR65kuZjcRXLoKMfxE9HtVP58aBA2ob2VATLydeEbc9sbE",
  "key26": "2gsHcTsRB2pDhRRQss5BT18q2gESDVdaXXzLAAJDDn2iHNiz3eDZtHsPpq58KR2dkKFFzPjW4JzkJf7LE6UVNFWy",
  "key27": "ymoDSqTysVPRkW7gdcPtjZz6NozngC55J3x8jrg3E3cJog5Gv6RZTHDtqQJ5Ww2MmXHb4JZKDZj8akQ9pr8Uiae",
  "key28": "3j6ErAwnP9jTrxtKDDVRQtnbwHboAzkK3h7sGq3qnfbc4MMmFtfe5Pt3df6KkN13AZoM2V7MhdbQYnzWfBwt6Yz1",
  "key29": "4d2kjzSNqXAjU5LbRZEEzyP8pCxwiWvvfSJ8gzJG7rjEPCXfyenoPRket7jhLQeLdQNQhADkGrBUz7YFFsRp8TTM",
  "key30": "abc85suxfKMLk4uaXxLjaKzB6wp3gq36wfQFsqdHMPteVzCxyQLQdtbv8bKpm9mw5TTJv4jebh4M3nd6PrQ5Z7r",
  "key31": "4G8JLqg3BVxnfzpKbCN9kjKRr6PHRoWvq1ejukbFormo9jRq76Cfa4xsAkv64AhkPnZrhtZVmJvE9nMNPHiUQmQe",
  "key32": "3LCUx8prf68Cpm4qNMXhKsFCpesT4UR8LT1bL3CFGPXZLDAX7m7SNBXCnTenNe5RBtGaCYr2MouRzuF1agb2gAFk",
  "key33": "4Vsnex1b87UEzUuXvVPUv6VYCseoZpXXgxDjFAgLR31owgcnRV1aPT8VED5yCaZjtNXq9mjNoxzkJ8Z7r3hhzTHs",
  "key34": "5me8MCWLNXPKy4VjCNgXFEBQJixiFqYZ84jqaiz6JuP5xJoMu49oVMQo8MTAxMdxuREu2ZAsHBR1xCukeRd4M9V1",
  "key35": "29dLwPxgtDgNzrz2whb5Bd39DyehJZ75a9cCctTE55Jg2yiitQppVsczCTQFqeUE56FvSZSFj4JZofSfiYr3VGTZ",
  "key36": "4NnumBzNABK5XWTH9cbPVeox9VgzxV1MRQE4BLfGsNJjYZqCBBCnhwv2JV465bR3SCCHN6EpSZyTsjcnTboCHL33",
  "key37": "5dizSgXxvU37WFoifPCemd9gKDDyi5HMfobAwZffCK2kpu1FCS2CJQM6ca6uEK4Eu62FCriTb6u228Xeiy1xwsMJ",
  "key38": "TGm3do4Fxp4WuLugu33pZq4hJ8sk2RnqdVjJW7KwdX6dCT6iZmJb5RH5yPSuPvUqDPziqaYSZpNkPLF2aaKtXLC",
  "key39": "4nCmB7of8PPMEmPhuWMN1N8ZZV2wic6B4fex1wmozi8KBX1LQqsiBUE4etQpU9FmYV6yiTCHVgjpUXAWKmRtk8tF"
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
