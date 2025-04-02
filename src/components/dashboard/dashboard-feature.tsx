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
    "2PfdV2EkeovdHahTMRmYvkGFDjJwy554Dq84aMAxAXDQDEScKNXa4cRZEdsxB67mGtSo2Jdk3H8cJptN59CprsNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ictjPE2ZWNihFSKbWupA7m6avDXZbMbbX8P3u1dZKpmiFmZ32vS25VNVXncoRSsV8VDYQ6wizkGqZd7qwYAon4",
  "key1": "51AaUxA84HBK3qn99Cj7wVbKGkVHSNKRUjaR5uFPXEsytPewCsvwbmdzdRBo7GE5DQC5MCCzph5pAj9ELBKA6igf",
  "key2": "FiPRKULekUT8nL5r1LJ3NiwhtwGXti2uEFqm2EhA2a3JsDMJCs5y84oprM9sZPwGqMvSXhjEp1fR8nWkUHu62Xt",
  "key3": "3cpDqTwfwRZRubJXY53HTJ7X5JfmXERAWPr6icya3h4vtuZprukQ7PBsvWfviSHvgJWsy8sqkwwSHukw6DFJPqrP",
  "key4": "4R4tKUGKYoYKFN85rrsDGGGM6HfdjiZeWYyKTMfv3S7GQagwFTD9RGiRjzA2PNTzCxvFPFWYwcVNRG585PJBc2sP",
  "key5": "4jPFjP3rVLjRzUUCS3fdWFB5uJGmn4Gni16fZU9wwRrpjBieY4k9rkBgvAGsqgvnmiXQnn8bFwV5ZA9W1GF3EABz",
  "key6": "4QfwTMdY37VPJh8kZnsS2uxBtCRZjYMVP977f3kE1Y3RfLKPW6vKaRVbsJRGLBK8eRPxvPTkS6rU1bUyzkvMc6zn",
  "key7": "4Z6Wz3PmD443KMRmSpJeHYXULKo8SdFqP5kCx7iqgYAFxcSXEcSw4XH5AiMtJ1DbHgruqaRsqT6NaxPPAbGm1Lt7",
  "key8": "48nxP7t4AAqHYEumY3WJFgui1TxUaWiurvGjHV9g7nVWzkLxkvh7ay9ZomtFYQguZi8nA3LQCC83sbwnZz2zNvju",
  "key9": "2w8eGbk3JPYM9R7VDmyXwUQUZKs7CjSwMntoH7Cdb2ipKogyHnQVMWA3Nn7MPZ9mFgowfQ7hsJ4QqFzVPAV4mcLm",
  "key10": "3zkvFND93uWr8DGThpdZAquXU9yjkQr1FzE1M1DZ9eqZcLkizUz4npUnAvc1e3QijwEkHkT7LHTtBYzEc8kBwgq",
  "key11": "XouKEwy3Y66V3EVHE68UvDo6Ewon3N5brc6UfJArrHtfq1bdHoQSQXFxw2JkeQj4jXwJpAfwN8FkGmk3VU9ayFh",
  "key12": "3HoVLmf9BizmWboAD4nvSeyT8r1AkFYZsfaaMzD93LPTForBuWcNDJumnftEfMvQfz5ueCvDBkh2sDh8b28V3dt7",
  "key13": "3cxMHwcezq2F8twHKNUpyCyohYpnfqdv8FQCJJ5e7wZLXifpeWnnPbLMg8NBNUKzrXDZDoBhSPpbW5rKuA18KbMZ",
  "key14": "VzVwhRpcVkEJNJY968bCvF9eybCgqquGQKCKcMN4kn7yCVH87fnP152v6KYm7ud4AdKM3jscmm2YMGWvQDQ5v7R",
  "key15": "2RL2nB6hnvDP1p67j9a66rQmjxjrAYiXw2cS3Z15zH7Z8BFABGDD91FMvSmMU7Ve1M6QQZZwsqFR4jHdcaBLxQik",
  "key16": "2VKNstVRwpcS7BjbKjzokrUr1avUHSctwk6YYST363C7BVnmRhpvd91pzXnFgZ6gcAekWBwtxe2WmYjZXWa3ig79",
  "key17": "4FNeAkMDnGVDMMjk3ytudzJnNSeQxrNmdd8F7W8n79iunQXase5XyqUVtsksniUAb2rKQKRdCpqXCCbVLaMmvnrV",
  "key18": "E94HjWW6A4eMoRgpCW37PAKDLmG1ZAS2ZpFf1m2CMLPiK5ECXZGndsQT5Fd5BdvBMHrt2BAyLMUWCuWf2XjZ5sQ",
  "key19": "2s7r8ukBQPduQtxTdoeCPzS7nNUaXQT1WeQLuHWPFxWpUdt3kxRUfPuqqfYavxcqLLDNvvSftcoYUBVMGhiJdnU9",
  "key20": "41WUC4mHfecYbbBBwZ4S5d8FoaqMJsFGGu31w4rZLAMEM1NFhzmYJjrsWTj25Fpm3a3Qh8Sbvt1x2zzyYpWPRm5c",
  "key21": "5hxc6KMs8jCehHVMmkgMDrWSCFJFq8okWYtUDBNXsA52PmEJeP8Lm7HLxDW9VFgNcmpwR8WNQ3eqx7rbLrsBWBoi",
  "key22": "2c3EF42TmN73iCpSRozqsYGdxNpgkcyihNQBtZixFTVBNNLiYpb9GmLd7dUwUHijFxTBV2mXaYGEowrcVghSSDC8",
  "key23": "5azb2UVYPatvT8tqr7orvrqanmweF3xpLrAjFprf5FusXFmnwFkDYbeuSNAAEU9isdxKaDhQiGrEH55ohDBetCjC",
  "key24": "3g59Bds2dmSpyN5eKLWRPmsssqDMsaRQiAAM86nijJxQt553rPrSbsnsMLQ1fmr37wKxCqTMXP5tvyc62KxC1VB5",
  "key25": "VMK7kk2PcoAcjHUzAdo9VN7CJCRK4GeeGMuJnamqkxtbBZ6FNRNpfD854iCkXuzCMpFEESmQCAm32D9iuu6rZav",
  "key26": "2g3jKCLsY1wNThs8qmW5GjaSnUZQGZP1ce6kHTLUFwxb7UBLscKMsTKbiUWhwJYF5oLzeWTfdwA6fgTVW3AAHn69",
  "key27": "3DF2xCDjUXjUTA97xfEi4HV96ppiZZJcSssgE7MXYF5zQzEYF5iZfKj4fRmJZQVGpdDcTzjkBt3BU3SFbvJ1iYtU",
  "key28": "2wLk6xU86csyZw6fSWyg2qkvBcQNoRTQtG4LYopcKAVZntZbac7QWR9JVuBMYLodxwdDWtyBZZqwDfcvuxGvwR1j",
  "key29": "524HqX8kioCa5BGeKP1cEGkjmYfF6vJ7uvygiLSEDNN4mJCKP4dyTXE5xXMPm1EwErXR4fhibf6HZEdGKm8Ypira",
  "key30": "3oePUbXhcyv4RUPGvpRtPrtyr7mGkZ82et9fLnr3emL5XPNxmwx4LGXA6MotRmNgyh9WD9u5JsXdvNnzEMD8ZvE4",
  "key31": "mRWx835MgsJYvqc8UrAWXaJiptCRNpUCJiM8L1U5iwkCtXoAWAg9mmc6YjSxBDfESkViEY8SFovZgfiwdNtahyc",
  "key32": "38hybPywLAkBbf7MtT8dij9xeQXMFaLyK3dN6ePEhHLDZY6nH9pnn6AG9yehaui1eA97jsMN8P1EzviR4HkgWzdv",
  "key33": "5aQvVXr2d5FsDLUWziMG117PbhXJLAnUXp3U5zLZ8w1Z9hFdvu3aYVXj7w9rdGQ5cvnMTHFHzzMuvDGCPzRjedcG",
  "key34": "2ivXRLpdAjRanW9818Ui6chDtTkV8tojhDREEzCkQ5Yvfj2iMsxWDpHt3NPVoEPqp3k1rGjjoBMsyjSRGn7DMsL6"
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
