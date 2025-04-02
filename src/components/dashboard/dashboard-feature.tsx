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
    "2uMKCZHVHzR1Xq4b3pUZsCco169W7aL6HkTUFhHLy9577Rp5U2UjUysbkS8uM5r7sLYz46yhGam4cj1Y2Ho1qDQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TM9kaLLH8aCbF64g7SZbj86VJbvLVeCnThU6uM2KJnifKsU9fhgeTMmrwbzoGCbo4Tf9mU6NebMHiZ55spKD5nZ",
  "key1": "4PFUMkH8VSUtASS2xkDjCXp28aVeHfNsTPW4bu4i4tUkGnPHYjGdcC9nzKiRv756exTYvPhnWaEKo6D7iGEhC1aA",
  "key2": "5CFUbTs3ibrTcVrktVZVqv2o3R9KfJxjfTV8e13K6ZqSouSjaPg2VBkhkjFj3q1dpaGEVgTTqNXPs2csQ2hs6VAd",
  "key3": "2iAoNtaSvrd7TBgFM8UYrV5gDF6wCH2xARANgN2e41YE6uLY2bmsioK2xZhSv3Qw2fxsLq1jeSwZVKT3w2TptQXJ",
  "key4": "3nCTZupbuZRPzGAyZYVvy6swmXkhpBQqYUJE7A3F7tn93HzfkZqopJzMSgFUiKqMtwAYauWxo5yUzsbrXdTmMvo5",
  "key5": "2yqvbPTxuELxB6FZhTLDL7PUncFk7E3uioZEFpSQhY7DfX3FCZS2HJ3Tw2cfLJRbrRMrLvxnZsFxaLXnAUZaTViC",
  "key6": "m7n7FLacv29zvke6sPuv9dpfenWWsKyLUhQ1FAeVhn97nknPWS6QSbEtWBm5wsyMH1jajLA6PcfBgifyz25Xg2b",
  "key7": "U8XbXXpVF3ne3CnPp2aX1J9xNhkzQGcDnQaZYhG5EJgPA7mVNimqVtv18G6xR99CFmk5inkGTumjjPHyQxjL4Kt",
  "key8": "56qQVYVsFACtJKBL138Xdri1LKG382opNF4dSQZHvuDgB7BJTSCThdPaQQn4M6zWc3jAFWZtSUGFNvk8nqw4dWw5",
  "key9": "2EaExeTdMsBGGrYJn1MbF4Q5gAfRDWyfi5CKQyTthJbeQ2y8VvGWrUf4eQARcazUt87MCH3kiJSQVN3SypHhVazz",
  "key10": "Gfg8MoNMPG2HYztEdREy9DaoBebPtkXUwciMQsF2cX2pzvLJXR4KMJwXpNVvgoHyc6Ro2XcLEMHrzgV5DB9niU3",
  "key11": "2wvmDJcLcoUnJXFCYLTisacE6r7tR6vBSioWHE18Xo7nrNeXXbGbkFR6xStEs2Q4zcEYWzZtyZQrsDoau6cKjD3J",
  "key12": "5s1L6gaJ5n94Cx3ZeYgHaNRdcT4wDbTCYsfUq86PKJhKpSAEwLUadmJKb7MkhNJjSuBva5tXMaH69GAhaNXGpi7y",
  "key13": "2MbEr622MZ8dDRSrKpDwZ7M15otXBc2TSDspPgBoVDH5mhYcnb9eXmgcKXQB2joeYHU8bB7P5iXeEvaCn8wTxK8K",
  "key14": "4NKAtGThpHiw91xxWSsxzCTGXKF9kZBbRtuCWTXPWCT3P6KCEgj3cQ4DUJKDv4kLZ7PJkuGZAw2fJ6EsDrQdbc3z",
  "key15": "3YyExJhHqiyspipFjFxTZF9d98aAQ3Byqh3bVhyBKkE61EMjNTSpicnaqFNPnVj8EoHB72xCPwhLuwfBpDw7gCjw",
  "key16": "4YdxxgkMM2o73gGLYHyqiHANqVLcJW6upRoooxRXJ9j3i28bF7f4SrS9JEmcj7wHsRHuMQGgeqppQwU6Zh6Yrz9z",
  "key17": "2bcvVmkPPkWJtKuudqtNdLnuv6btZPhptaitJXNBZaCngz86n4n1TF18XHxdmKjDjbtywHbHjjNqAwTyLe64UeFw",
  "key18": "2WWu6Ck8jcV2AWePJsGdFBPwk25pEoGABKi3SvEDTZCT4peEKePoL9o5xbnPVWjyCPBkBKAuPXE5sEkF5zdXetAg",
  "key19": "3cGMVRGmzPdJo8KfkUviiCTTxn5atMgCazDoYwRzyAQ6Wa54HLGh3aRQ8nRP1tR38CadWQup9E6nc5xdsSjYnYrL",
  "key20": "vekCEw1G2iLxSARdXudT7izufNqawWaPNGU2wM3E9WNknqo81zcUBzzVLpZPEfRxaRwULezGpwf79wACRrctP8P",
  "key21": "3bohdPbTbH8imYnpRJwEmmnPqhxQc5yB98ikrQW44881h2eyxzMdh8jGFXLJ9MbSFKDZq6aem77f6m53ywizpTCk",
  "key22": "4STXG5vgLvANFhZKPwsgJ8isAQ8BNzpNs77uKW15VgXBFnceFicZLbWGDy4NEAc3UDBxsdDWFvoPFtRuUTULwjrp",
  "key23": "4MEbVnLtAx1mnJoc1dT3mwPYfjNDextg2RixyFhkNhKA791qpqwjYYynWg7F5WpbgfwhgWf3k2Q42VLdQG1WwXTc",
  "key24": "Fmqs8NQuze3K6e6c76xfwaGB6QqkgdzBrWMjwBexETjxPUZfrbyWaEHxe43vhc8cx4b7d1SnMjbxRRK6iKBVb57",
  "key25": "4pkpjtwMD333mEAKLMtv9K7kZCX4XEmCevSGiFTwYYticKbp5b96JNqyfmWEYifH9vF1bnzJvCGh29LV1o7LQrAe",
  "key26": "56zRJK4MLhPUpE9Vi3YiBdKVGibRfVBtPdzE8Wnscgcx8pdHkEiVxTu91vAzecMnnPgeYgKFmZivCMGwMfgo7n8N",
  "key27": "4SErtZAb9M4zHRHJvTNMG7nE4RFLiXCwErcTjPPzM66RntgHCEaJEGvFfZoVgy4F7KTNrpMFpb4pTgsynSD9Wd2e",
  "key28": "2d3MDdBLxcCdmT7GfRX6seAmbsfRe3yJEqgo7DtP45Px8UG5DsBp4J8DsgM43cZMmasBXciGCk5sDUhMbgqDQQoX",
  "key29": "5cF3UoNufUwcgwutTGyHw7wq75MmTGVZSkwptfDnTybPc3JRu81BgUCCL63SAc8bgTThdiTTtB1Mv2Tqra7CQM2D",
  "key30": "5DVJwxMTDfomrbe1biUVY6Sby2byGXfHE1ux4ec77q2ndTMUc7sdCWcp5EetiJM2mh6VQKBamPWv4UdjPBeeWJjE",
  "key31": "5mgFM5ZqxKqjhcer5w4DKF2REqZ7JaDvhSFvj8wm3yWUijp8vPwNKUAiB4kJX1mvomiBBVGZx7JtweTHTSs64bBW",
  "key32": "4S9cz7GmbpRZDwWRia8RM6ZwNBMM2RjfUvh22hxPsMEXTapBhVXodQCCJudkZaJPhQWS2k9SRDJD8p5LLQ7DTb56",
  "key33": "5Z6nieR3tTQmsh7nWAuHNEehszyNPhwoiXcoryCwJWn2Gy2bJxNdfCHcQzrDZ9b4dwvYcvqnKFpBUburSEL3qnu2",
  "key34": "2YC4UEiP2rwUUvcxPCUho1RPjGErttPGobEJqrrdh1BYHhuApXgxD4rwdcSNo614HmVFLgTd5eZ6LkU6B9dWjvt1"
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
