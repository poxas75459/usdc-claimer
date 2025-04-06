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
    "2YSGXs9xq6AMs3AR7SLG82hTREtTKNCgrEBEA8JS1tLTRhFLkLMnYZw915GoMGf2aJJaG1GtHyXpoUfUrY2KKYKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRN4uhpSVQ43tSowBQQPcF81tsAVHizmBevWC4FPmUYBsFnUx1yF3XnQfLY7sYSkTFhD9jNd6rV44hvyQ85746f",
  "key1": "3sKbfdJUvToPu78vL8TMiC2onMZSPgCBtR6bxC9TWsctqYojU99n3tgXMdaRC8koe58HpKuuNxPLgMrMgwxcXwNH",
  "key2": "3trGJjHvvzajJuuMVke2K8PaQK5x9ASMtbdfvkJE892FtdhNWaLbRRzs6434paNGEVGcgFNojExt1hZWFJaXiNed",
  "key3": "4j8p2SRgK2og9UjTD69oTDhcm6DVDyGxwxd5KjzvKPbQpPXnouSZhxNp8myK92TWgp7b1WWeYVrZMvAts4hSWWBo",
  "key4": "4vAwyEFhkLEx9j96j1LVyG84DUaHV7NBFXRxx54bnmqPtUC8fbtxDD1U3YvGXBLTCa8NLnN4Jq5WHRYUt4cL36U4",
  "key5": "ySgqFb2g1zM6jmkhaq1aCkazYaunjtbjvUXx96s3pCGKFj2zvDS3Zz1NSEnS8rG77gQCTgBGy9gSjFdTgfCfLct",
  "key6": "3ScNuqPWmzj7zg5gez9eCjghjZ9T2Qy7vNJZtt68jDW9hfF7S3xABAgcUBLotMo4v72WxTZ6Py5NJP1HEFXvVnA3",
  "key7": "5uSjwigsW4Cae2Pw6Lsz7jSitw6SJbRDXHfqPweJXHHGgB7V2gZotdcmqm2AftnV2j747mDTHxP5Dd3TDXza3nPJ",
  "key8": "5ReZrdxuXA5GMcEuiVw67A4fbHYLVo5fGUFgoTP1B5jJNVyG37Vv33fU3MTqASsWRgGrMWzExP5iE3Xm752fA1aG",
  "key9": "4CZ2pDmjfCzf7T5gEwdYoQp7RHm4KYHXFGoQEtmqrjs4yBiU4Vu7v5r8ZHBKZwASyMAw2AnXfKBfmTCRAYoaQ552",
  "key10": "qF9yphZa8kNHDqrc5XRx4CbJmQhGhpfstQwbssJ2cVT8PdAE3GFcxRqJ9tCMJAZGz6P8pTefD1zhSCStanuYghA",
  "key11": "XXAyUuxgR3YXGf5aPkUn1uqrABw6VSsksVE4MbWjN1W81Uyu8KaVjGoAVbxqUUnFwWvD759oChiS1PeHhE8bUm3",
  "key12": "Mk4Jw7jTGY35RRHKduQd7mXSD8WDPne35Nr55dKkoA1M2UxG4n3UQK62ewpKizLbqju9TLaefswmmkpCuqXDTWJ",
  "key13": "3iHVoLTr8M1bhWKt3mQCHwMQ34yW541dUVCvUGHtJjZxhNZ6KJsEcXBZRDBNfa4L31Sg8h6F3WVVH4MhMo8tqr8J",
  "key14": "4FvLHGamM3CRXBPsSFSw16rmBxL478sxud4wCCf62X3coyKGiH5CMGAqGNMd94Dr7xbN4jcXFRE1rMMtQQkmM8Ux",
  "key15": "3RGHaoHwgi3eBjJiM9Dfj7AWDFeVyseFr1f9VBDG3v6DdxwDhjZjsRPp4dVeYfWySEPtEUuGwAG28wvFioJKihvG",
  "key16": "55mRshRPy16CkfcRktcXzLS9AnXjBaHSFM1pafHRkbN9HWuN9B8zm9mreTKd1ExfJ9YPJ5Vx6FfgfCX1QYWyoadV",
  "key17": "55w9b6EyKuCMWwrzsuBucjz47MUmV6bvTjy2vAM6RFLR6uj4q4ZMP2wHVArVSBefgtmKM7KdKfencpnV4HNdHLLh",
  "key18": "dDo957vdpT5EfDiijxPTic4UWJia6NrFbVvRGwe3AUquTAN6FPJStB957LJTCJDP2kPmnkRsLdNtbfncsVprZas",
  "key19": "2tvhEcJDyLH9rCmvqVuJVh7ctGD2ngiUJApXMjktkvFxpWuZRKsXY3QVCszX26LWXgDbTPXjmDGizcA3pVMDZxNK",
  "key20": "BJVLs77zSpK3ALuUZLKnf8xNmgAcz5xdfRPG6ViU1SEgq5fzLQRR9iEfiYQ1Xc4Po19kruGiHYkMbenhboAPBFG",
  "key21": "4bXUpeQrbyXZntF5UDKqd85REA7ZP26P2M7DCHJvmBFJMvv15ogE6f5KpDFLyPY1YYtQ8bJS8V6YnFuHVvC9TEJM",
  "key22": "4yu7ENJxzpesdJAeyZM8KJnYZsWxUrcKKNqmRSksPHAXFs7ToDqmepn1MSySpxe2pExuo8bmwqcr9BSnYLGybcV",
  "key23": "3whAW5v5dBR583Z2hGw3zRm2fUrei49oVmvvSKnX3GpNmVJP7tbKKjhH2hgin2GF5A7ZzZ6kueBZQn2b6DbihAFv",
  "key24": "28hSpLZY9C2wJkhjmw4KfgHV3sZugCngoyCYi1qNLCGgm1jk7qiLu5mFmEpUpJqdb9HQPLEsFwvmXpTmZNF2JgGL",
  "key25": "3CkpfNjJqZMp24492qSq9Zd8N1hceonf4xGxPxA4oa9Lj5ePieuiZRCv1mMVA8AfhiGQeaRCBM6P63q2z7rfmSJL",
  "key26": "37dCPSSrr2ntpxC4GZxKD5gbDFLfvg3WuKaBY753bLG54SeP1kJmnFk53yJHAR4SF9NAFRDBaHwfbqa2jK1wq8fX",
  "key27": "2L7aGH6M3JxVwqsz3eXb7yaEWWcV2qXrHhUxHuKi4xVgHSDuNsLZoZRN1k2ok2KFN5KnwDAscsfkdjUYwJhxJTkx",
  "key28": "3qtpFkBi2cgsmCM3CQrJmDqNX1SqrCYebsncJLBpEM5MJ4AnrEuXhupVWr3xw8i5VbaDGfxZjCebZwuNwZoNmHcV",
  "key29": "qEQXjes2DSmNfPmivS8KkQ2KcnF4wmfg4nTM744dis1AgVPoLNtcZ7Z9pxqC9tXSGbQEctPQ9BB4KdSyQSfzmJf",
  "key30": "5yQDEuJpajssHjPiHrxj7f3NNBNAKCtw8ThD5LY9NXp153C4YWGQhqcFPWZHcFjsVU5GHDKwgADfcEzR3Zg5KSzC",
  "key31": "3RVYYEVEyLcTCtYACH1pWwkTkEY8YQAFVb6cD4A2Tv3FpXUTf65REt4W6ycYBP99oQwK3Zz65SM13smGAtSASY2q",
  "key32": "5KDi5f7gE5uku32K2fff9z4EDspMF1iqeW86G8Uetss9a95aod6pBdB3Nf7nM36KCjQjGoN6jf4BRsS2EM3eKdKB",
  "key33": "2A7CAtBDSuWSV86gNPedfRG2ePvDfjWh16WwhqFSMt6NGSuLKpnKzm9oC7b27VBrkQZTFFAef1zJ9csF8zHDJrPX",
  "key34": "438qz3VALWragyx5W5P7fgTUL6zXZ3cS2yzvRyXNbtUKCwftf3sGiUfxZKuEXrtBrNsYgKuEXofB2VPmKMYqmxpp",
  "key35": "3KbS9hrSf6rBPHfyfmV6kuMnyj8HsyAoTePnvrZ31WToX3nbSxB5qhk6jHwHQjjWDyoZ7nxvaMNpBHmQ8j52Enmk",
  "key36": "2iCYUY7c5YLFH31yZC9PXSUv7NcFd7yFNhHodW1qKuPcB8EreMBXM99TWFMPskKnwCtPUwVTkGcA3LkC3G1Uw6ko",
  "key37": "A1xksRRv7o1S3jTP3dakRMdreYqsgEwrBh5FAEQXsjPQ1no2N1Bvddpi2mg7ah7pYeheAXZApRa2sV6USGguzX5"
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
