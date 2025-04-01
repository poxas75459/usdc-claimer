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
    "sd1pZ1322T2rmZBgk51777CrEyzgvbs7SDVFCvy15gMWYJkqwG5BYfEPMt2sNdx8NUai1mVfkuxsrrAgAFfMC5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6yQPSDAgxMYsqWnjX721Uz5FmtTo87L9cDqT8FFWL8QvF9W6SBWQPHm1yw6EU3fZdaGK6HwQGYLHkR35FZv7F4",
  "key1": "3bjpND8FQHdH4mcwqEAmLth5BqgdwsAviZrMP4iujmnz3UscGLDETb2dDE8uKYVmdBp9CJoxK1YMP2bVV4TVmbLw",
  "key2": "5XDGDzEbCuoB32cKeBJAh2krNmvKyWukrJD3EyDcTZkqxXZ2L7RruusmuzW75V2Aig11mdjEAB9rqWDmLZV1sfzW",
  "key3": "MbQ5JEjTEQQEBJE6jjPUFHoTrGbkptD8PKpFFRdFTcwsy9KyQrDSJjpYU7VcUbJ5cKL3A2EjtnV7E4vsnW9ZYog",
  "key4": "32xMtGDVazHbPBvfEwBkS2n5qimah9SR77ZVr9Jr58siMLmQKzbVNJk1jiD4iLcn5RonftWDBaiA3h2EW4Yp2rLu",
  "key5": "2pAMDL7gkAW7nnwrPkd7EJoyTAGTtGCGGwNwWgSy2bbT4R7fRivKM77T1iR7ofU3L4t5SohP5C5DGZgvfMMQuwku",
  "key6": "Bf2K9yxMjfAk2TpDwV84txFXhdobUuJNqk58viMNDGMCHL5htjfjejitcMpHXazGYfRnvUeH9iEyAQ3f1h6WW1b",
  "key7": "NH2eVG9pnKxrMpmVpcasSNiArLB94nkWv1J3gjG6AWuV3r9Ya5Ghu6r6crFCSUEagzdxR7uNYvWWzagKhiKbr22",
  "key8": "3oxfzVvnuetnszMsZcPUcTnQ3s4GJAMyJSEh8aN549Zf6YX8aE95fRvGRZmVJUc1AwzD1xLNvKPMr9AEiJENgRAx",
  "key9": "3VPzouEAGVgWLHuVB35QVF2qewmN8cf8tFM2JNAuPduX7bZ4gQFXwZRGFqXyyLUAtNEGhw4Gr1tVV4s9KPRMW8bg",
  "key10": "KShJyhroHt71G6cyLzCgX1KyWKTpHDzn6uECcM2xmXciqMBipPHRNS3J74CRVUjpUAaSGn6CALchSs68r73wWPt",
  "key11": "5ygXMB1adEsfXBfq2whK3SdLFekkr6BYPXuDSRZDihXTfvsRf8nGoyzU4rVki2YegayrYKDK5z578mkiyiXsQ3c2",
  "key12": "3Cbx5Mr9wpnaCkMbMpPzuvjPntWpndvc38hmxD4GCokt7R85mC9vtz1nxJCmLKnjnhvRSzbX1kLHPA296ht3hiYm",
  "key13": "5K9zLkw59SpgFhL1CUrYcbWWU8cQ8TEpqSpMQ4v4p6jAGGTTfeDxpY8G2522FaqHrwVxEGRREaDt4zPPcVe2FYZn",
  "key14": "4Wm1tTqSwor9rQtpm7wfMjpGvrqy9zBGBxcAbFGUCEMgxt7zC5pxmQdT4HBHGSM55QFv7truennyCMmFkJNo7FLH",
  "key15": "4W3x2mBSCbf1aufizx3j2K2bXVsh1aDXFkeGcJbBvv59aBVE2VFngdu9aKQKHHVjHxB2vUT6fZR26h6m8EU7cZoj",
  "key16": "4nasAgyB4JGuaAq2Yw4KHT8S8bETkWRWqxdQaqBLSqJ8xbn3LjRC9g1f8yYCNcDFA9CQMavP5D8bp9jCFfGhxwqH",
  "key17": "41V5aVDLmzwYtS5fBvS9WFVEPfrFBfLBA6S8Ws7CytjijMR7o6msAKwdhDKDnBZKwY47je625u7QD61fcQA4L9as",
  "key18": "7ceaxaM9r9j7cR7GNkbizgX287NhxBv9xBGJbF4xgmD5t1MkV9FvL3RX6nqhdHNpeS84ni2vY3Zfj3ZC6VEG3JB",
  "key19": "665ryP2FTUCYzp4BF2fyFJWxDgKRhutTuxq2fYJ6kKReui6i7ZViroSXEw2WFj7iFndbFv1WrPyYcoqesD9uysAS",
  "key20": "376FHj7FbTdGUDMGEn7dKhAjZ7paNTB1oHmqA2CKKoiQWVEBsfATxXYUZhTPjwvNK3A6AAsDVESQ9xgYSHbnMAt9",
  "key21": "3cNSowvArA765gEyS9vevpWj6mnFPfFYQgamfwQQqheFh53pEG84fq8ghcUd1887nGxTnwg5Peq3WYPrYu1nHr5S",
  "key22": "4TWccbTs5m2ugBFbDwWiTGjTRjB2V3SveXKq2V7p7kw6jHNhJpRL3y3UM6xSWvay5MkCodjzWQv8YdsPK14EUADp",
  "key23": "4bzEpTkM9c4zJHkjvfE25mj5vA5Hv5SmaQzNLGg2ftLKRvs6sWoF7DDuQ1jhHo5Hr7h9JyuwwkyqQNpEDsk4sJgV",
  "key24": "4vWMnrSzdpay42nStHRSZyK8Htm9whPHciEgm1fgDiBJLdE4UXVDBX85LLtnAubCtJmXuKReBgN2TUUnChyTLdPb"
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
