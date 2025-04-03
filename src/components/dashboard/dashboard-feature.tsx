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
    "2TxsDDsDohJpXGvi6HRhvGm9SFfBW7kSnv1icyFKB7kUbNExNrHe6q3d3fWKLtVhfmCjgEGiKiW4RapxRjoy7ais"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkD1Kbu7AtMSiFpwmcxh3H3rXr4XQvgXDJzZToQgvqseaUdTaivqXiMK1CFVZwyn5ra7HaLbmQvob3YYac3CpPL",
  "key1": "4TwUaFC9wxKuzP23ihfB5u3ufdHrCSA7bvMGLiDGnnG6qz9oQB9F1NPGmbJweqKBQKTm1BWamAeT4F6VL72aYAiJ",
  "key2": "5K6EiaxjvMUGiAFuQyhDjVnNScfuNrKiYoDsgfXbcy8Zgz6VueTKYpD7HyeYDfe5kRryqRnr6ozgDWHKJskC5si8",
  "key3": "U4hVDNpVpx6szo27qeM79VY1rrBBmtjfM6rhsKbiYVZztt6RPPLep3tavKuW4xwETNwYiJqQDZQvCZPEzVvqkjX",
  "key4": "48fX6Pafq8bSKiBtqZxbhzKL9ZFj4RwLj1s2wneJXKsWCFyLAvNpQxNH1GYaigfWY7XheD8UAHWNVB35uHbJL4bf",
  "key5": "ToDE22gAqRkmGwuQo6WLnQ3qRVruGLV9bqLxxARGEZvmxvMEuzcFrC8XLjViPh2Yor5DfENwynPXk8PxMyNpyDf",
  "key6": "2kic7PFb3X6yjKJEWzB6pckNMzvwAJKAM5Ry1BPX7znxJigF2kwJcNJ74JjEXhXqmyTauzTmF9UWKY7qR5gnMHji",
  "key7": "GsUzXsLaxvEuD8nzdiSSYwLNwCNFEWYcFTsvFhKrmjCNWrNUH215M6khKrzVrWEgpxgwKg4Mp36uuCSTDvW9mJh",
  "key8": "4D1jippvPcGN1pWYepSGk1QLQQA3RtKgWLp7S73oLd1US56k4MoAyFEW49P29cuKBfmb45wpbijP2KRmGhLgpVmK",
  "key9": "2pRY7Ls3YxWxZSo7TxYNbn5LUz3i4LJA4diPEkRA6C8s5V5FaQHFZqmyUpdxbQdiMaySS43JLcJqaZcc74UdquCX",
  "key10": "2qhMTqu4U3xgfJD27Bi9q3T9mF3JL5GQjBEoCmsDVoDQeovCePr8sn76YeyDVSCvGszUhYqH2hoXvGiuM6Y22bVz",
  "key11": "5yiWMFCDN1Ed8V9AbtD4nkgiTcJRexWuqNduUquGYvsLY6jJwt4KZGpQptQwB95o5eovWGXS1HAc2gyVZcfnVh2B",
  "key12": "2PZ5b89HuX83AZaUFVxd7LcHNEUmJoZZhVTJCYpJ5AZing5Sscc248noYRz117dg1wb8yLZZXtaD3Vci2X8WdxyJ",
  "key13": "3gH8Fkvcus2vyahpA24CL8GbqLjpGYzxdJwJ61R8fV4cWR8yb3Yvsz1ajFnP9hjgWwaUawcrWv2TNfAV8VDBE5Hf",
  "key14": "ie4x3r71GpZQWQMC7AfEF5ohyiHwdEsLgxmLK977tcCmb2vfvmMqhCzryQyR75Hda6rQTZLAsZqRfEkxp4eQvoj",
  "key15": "2nuEJpycQa11ny4bj7miJaidJ4iqHaEhXzoZFL1UgS8GK6BGXWqrz7X9dLvX2ky4VLtef3t63oT6FvdT8pVdi1oR",
  "key16": "3i3korndamPN2QAU3WhDLt8ddzk9XX9n1D5QfwHJCA1iRUHRsRUpzoQmPMZSYfSneFDojicV5apWMsJJjfthfLYF",
  "key17": "3m1okmcgEUF2TLHQm77bDPAqUsDwUmAd8Ah81ZCRRzRwcqxf1YZb1u6QEbjv1DirZjZds8ezL1UZLh5CzyPWAXyn",
  "key18": "4RxfqW1YNWKh49tsrwEjDN8M4S8hPih1EWRyGv35rhEseKnZdg6xVLcJpXZeRCXzU8ytCsJ37UPuuqqs4mzr8tq9",
  "key19": "23pRNNNV3PiDga6YCMrtmoK3LQZKUxbMSGxxkKLRcL7ykGJEcrWk7xTAhFTQghYaxj256GwtabvTQQWVULS5R5F9",
  "key20": "5A4KAGmYFJzTApUPMMxfjTLPpUJK9qqJn7CpE94sUyvgKjCLXo5Cr3R3vEJ2SVDxD3x55bcu8qf42a9jJy3KCr6S",
  "key21": "3epzXqEhLbmQgPJEcRvikCFkM38WjekzcrcqTczr2vfTAxveqWGfdgG1DTsAH35nsLArLari1LNbPWoeSFiVDgCP",
  "key22": "2zh8xawxPwhWSRPQDStb5zzgaCP17pSptQrjh9GrLUjmWNS5aqGBJUu4E4zrmTWnXi6CztXn7VX1nXAcnnveYfki",
  "key23": "4auReLmXrnwjHrscvd4EUb8wkh8KLjLGGDe9iewLwvCjZo1z3dVm72KjoqnWtXun1PGNNEuzhZb2HaBLiLJHnAEZ",
  "key24": "4tE5YosvsDE6mPAocBJGHAtJVoK3mAtx3VdP6XgXgktZXuRJkhTUD5dh667oAAUsqvwjEQon8SkJFYuzgHG4rKUG",
  "key25": "3u7BTSM2x9HS9XyCcMbQ7TB3h5eoCb3nb1ziP7yoRzpiDf2CQTdvLCUYHnZM7bsaDrUvRtKZ37hLVyfDaengMh42",
  "key26": "4DA1UTtZwiwLBZv71SfKTPUabop4v1AsTJHjRzBXzeGaxBVHy6TXQZDuDfqDGBFn13WRd1R7RNieSFCzcHvSjmd4",
  "key27": "3LADqc2df2RYEy7DSPYc9cju8rfAC4Lzm6LvcsfKK1LEkU5KrUWGSMtJ6cBrQA8f7pFW4DBcnZAhcjPVmFTsd4Gv",
  "key28": "5nZZmHzEvrYuWzES7KNQNTYxjpm5kN8tPVkK2U1zoT3LVt3ufUDkezmGLXPa39EkdGb1eQEiT9SayRyqixT2KhNx",
  "key29": "664pEGXVTMN2peWZKRqu4esFxfoajN6rR9tax4xK43BmyuqreK84zr6HbfsTQ8MbDyob5LTTiXwYzwd6YUm9Udnf",
  "key30": "374EiBzqN2HCvzch47nieJFTtgNoWrYc5mbei6tS1CuPPdBdhADP3PDKCpjeZaVouwRnYP1dLPKV6VqyfuYhvEFL",
  "key31": "QZ7sEoaodMgA4jnPcNonDdccwTWGMZGrp3wkV7K9nFzq7mLfDrd7uHxSwxKfEncGfZZcj69duQ7J8ahhwNxqWni",
  "key32": "3Hb7d3njBJSCYPf4pPM7Ykvud3gqG2RTuwkeVgsKQKCrRYDJDj2CY5px3jaB7BQtmsz1XgP8uTV3kZr69oXimcbv",
  "key33": "392LUfZU9kSrQuDww61pAbyPbeQPxAERScw1j4zm7CwDkPo9RcidHQCMWpvh5KkVw2U19hHe11Y4iGcEQYdTFBBh",
  "key34": "41mgSUgX9TKS8SDLSZFzwhgTADesMPTdLoAwJffq1s52TrPQf2dwjzkgT5Sq1eC285H78jGHCcrXF6SBezJtk6kr",
  "key35": "3vPkX2pb6LMBd1NXc5LEGWKhQr7N63Wtb9SxQEvoBk6Mqg7XVKv81HA9kZkNtWvgLgZAj5Rga87Hu6MHrwUvncyd",
  "key36": "217sbR1bKpXfg2pZ3pF1JhNtsgSPFC8uFDxA2sr2Pg4Jh3yyHaWFEWyChJFZj6oGQEYdYJzxbgz4eRTPtk8rKwfU",
  "key37": "3L3VmMDfDoQiAdpi4pk5iZ56nddtQGMbjjXkgGQNjnZSSEeKDWGJvbBZHvb7EF24eaco6gKJjb7vdZ3tcmKECLFA",
  "key38": "21rynJUTfs5svnWhtDcZH5F3LiBZYua8cLK6L1AQU1nJp6qiMf55xsgjscD8gPzteCCqyE54bwK27xYaff4Dhm4v",
  "key39": "3p5hWWsJaH6PcJKP89WuCSmH3GF3p5yiHCeUw44L9DBp778jU5KBN42meAfcov3omFUoxtt5QsRmttsFud7vYCEg",
  "key40": "3Ni56p4MbrUvAjyQZLifrmffsrSBLHcC1nxiR6vKB4veUivWFhpsHz3UY7EpwQzE9oYn1ojk9UWBZiTNVLhE2oox"
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
