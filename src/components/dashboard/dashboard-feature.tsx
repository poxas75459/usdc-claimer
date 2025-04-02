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
    "3A4h9ST8ZXjjPUHMK5uweRQoBcJn27VBXEn612ASkUtQXJBgng5yVY9A48hq9fnvJoSdiKKs4QgeFFnWXFGyENgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZSjLEzWFPrd9fnkrXTvBsDZxhZayRZGvffTxMQAHUkwvJ6zyQqscrbrPMT97Fe7LkcR3mYHtFNW5wv4JYh5k6K",
  "key1": "4CWELo367qFxP31kod9jEaDWisuyhCj1GdJx2HufWcWRtdThfBPtHSHE7s3LzgfgMiSGnxEJPsweACLVB711tTCE",
  "key2": "W1js2iwu6dgNoaLARXmghwdnVHrVSnsAUQaes1zqRfNPvbvonhKoWuV3GoWT9modAZKNxb2DPXnV67PgvMU2Gyd",
  "key3": "4LM4eXGjbZy5vgAKCNS48hwsXDx3pNER86GtKkbaPE8KmZmf6hLjytXHEGzn8vmGg6kAFZdHNebDB3nP4gSs27M1",
  "key4": "3MAJRwdQDqsAzMuyFRuTrB8tDETNFD4YcJD4BvJM5UNDWbPB5UyuCoVHLZRVj4F8pgGkigYioqQZF8RUZA47EE4G",
  "key5": "2hMempgYdsVoHpQ25v7FHnSEs7qkr2uzc2BRh2zWaP1UviZcU8aaWD8fb36y7vm3BU39teVeAFjFeF5K8GJUPb2i",
  "key6": "4Vx8YXDvd9owW9Kz74ntYKDhzYw1dWynaJdzm41UaQ59YuqKDYFd942wSbvULA6BvrrC2wSSRSsJchbqmB84WAd4",
  "key7": "ZsBntrZqnVST9WR5xkov4AArFxYCGg6p28na42FrXytoLeFWEUA6Zn4WLsrSdp9yM9c6R1MGuDLZkJsoddAKc4z",
  "key8": "286j7xW3g5hKERdyFWfsdr2KdNg7oZDm4pLnK757EJ1fLRAFzj3EMkHj3QuEWVnt2fXuAJNCxNRJx5jEoNUmG5Wo",
  "key9": "57tavKzUzbv6oMty6y1r4GBoayC3Has6JnHxFRxf7F3zvPoNQEZhZk4QQBDfxV8a32bKYzwQFrETczY3sBT4FtCH",
  "key10": "837LPoM53adPBmdTfGp656yrcXqXZsvyrdRPkBFjnAconaazitQfFufjuG2p1A1WXVLpaW4Lr3ezZeHvvwTkW8s",
  "key11": "3BDCbe21YeD5q2jzyMbRqrcMsERqtsjU58EwxCWsGR8GQeitGZXRXmSxSFLaHDhAHwYkQ8BrSARzXAUmpiGu1TCv",
  "key12": "65yvZr3pQanygmcD1VCs8wrz6CB1JHH2NFDx2xP8fUFSiAcjWPRQLzTBnzqyRC9oUnFr9NvPuHsrgL6eWSAK6Svk",
  "key13": "45K6uUMA6nD436ShCsZ1xn113Uk4WfVrPzEhYSPHTQoN8UnDNeH4ke8EUHYFKofhDVsVU2Jhr2sdyKuCjpCcTmg7",
  "key14": "2dV2vGArydSEqw7VHnmUAdeWGSzs4qs7PNC5f1o33rBFPKPE2b6eaDVeL6VLoJBx9c1YhHDhhAGQ5RyfUTPvsyLg",
  "key15": "5Qg2q3Tnu5W3zjEqSw8XnxYuoW825nrUcoXghE9zoRESZeu15wz58fbNkQkpsuqfzHGRLe8H5kE7kTpswdzW9sKe",
  "key16": "54bjgyi69jJi2hyP367HmBrCFZLJZRHGbavTYh9kK9GQdvQr7CrRUQa9HjmktpWb6L7pwnzMRkN2vzgV1xSuRERB",
  "key17": "4GPWzxC8dN2z9Zr1WDxjvd1suqH43jbATmxN6jTP28vvfFhc1iB9TL7bRSzCMqcout9ervQc3jrBQVJfamMwH7wP",
  "key18": "2HehQno17hUv4A7aEbwng2dLi6PE9DsjqBr7kViHrXRYr1FDicWbBHtzs7Mxw4zFtyypdVNwAN6CQC6d6rx6nyoU",
  "key19": "2JoWVqrhNcAn3w4HH9YNa7ZioL2wokgvNzZ11Zp25NFmkRD4e9DL6r4x7i1H25Q2RKgLN3GnjXTo8ViQAz9wqgmd",
  "key20": "3o1DB8SZQxD4FAbcNnFwvyVhfqeWf94uRLYGXuTTaP8V1ifgKsLQ1JnFtTY21UTw9XRF6f4iiQWXKcV2PLsBMDGK",
  "key21": "2avdb5SwaBwoSDFqUfx4yQo8wLtq2ZF5vDD98rhAEwsJTsRLuha9orJG3epYykVmDc7weeTiWY3PfNXwEQDwcYy7",
  "key22": "5brTs2waE8VQsAZG1YF8ueYwb1AXyiekoXfgSqPuTjkaMDT4UogVhSLHZegoFe3zZ9UmtmznvdChJ2zPWVo6hsk1",
  "key23": "3hdSLRKbyn44qiZpibZFXU7kvytSAd9wiCADU4G5TsMtamzxes7gcLpHX4JwQTpAeYw5LPk8Qx2EJReqsNFnFBNc",
  "key24": "2FN7dZxAUTG3SH74wJFsVHb8xkgAz4YGCu4TFkjF2SyXitxQniNghnAzuAV6Vd7rZ9ehcFo5E9VEvs8UMmMszNei",
  "key25": "4cQnL5R6ogFeXqY2v2BfcJChYUoJK2y4joM2BRUuGGrSHkAi5TChm9STz8EoEdvadoLanNPcJ6RYS4y5dtaJoqXz",
  "key26": "3UopCHFcHYsSvj9JsGcEhcZXm4A5hhq2Advt4WJKQ8bz4k7xcY3Qoi8hv99mNj3YPNyhNYJwDxvT6iGkfkKNdtVq",
  "key27": "2hnjodN79wCAygAs26iYjQovQ4XTVg5zA4wnPfv95smfbzvQ2Jqfbihy1gZGvHfxrVMykxq4F66epMGTbNmfBuZT",
  "key28": "3RtKV9rSkuY6AiHov8DEJwiDwnCgQPESMbkhx4QnGrUDPAHF6A6QyyzpAVX6zwCKoGo4V51ka9zqy1jTRA3HRu3Q",
  "key29": "3DqhkrPTYWaq8SgeTbP7Se4Va6THsiR4zY4LsBZzkcrFHsma3FekJnCAYf1TZfkbuxU87GfB9rPHy6MYsFzMLXEh",
  "key30": "3kDQ8Pxwrjt8FHVk3iQH3LSfFaNCSSyBirpug2eRx1T8TUW464nHXaHsUg9XRRcBLbbSrzoAXgc6sf4Pzv9Zmyrc",
  "key31": "3cnhmjkDWw8jShoBH6dM2AznYggFSYP7dXYcEDeqpC5i8JJggEmL3npaufJPuRBgciuh4ueYStVEHKymPkYEwzGR",
  "key32": "4aYpuEMsDx6VANDnEJdMWuH9sCz7GHHcWscEfbjMQthCCa3ck1eWmAtUeQF6iX9BEcWPKSKM7MTYGky2vrFf3dtK",
  "key33": "3SVk6J9r1fVQXxMVNHDkN9Ce2FochGCvHKfr6x5uHpMt3Pzr3Xhod6EzhMb24QdVFqc39HUuMdQtSnU2bfSNg6W6",
  "key34": "58R65ZKT5Bx3eq9aqQkf5UqFa9h8m8jQ5yH6wV8v2Rnwn5DsbJWDSPzPTu4PLERqnUYLxb4hqQuGzA7ysgoMVzcP",
  "key35": "2E88PwWUm8BbjgvQ1WtgpTgyKGudqdsuT9MQwNAv3tmdsJZEdyAfggWJGZJruLaFYo2Sr8mbkKDEnNL6BjZj3JgZ",
  "key36": "5EqYovfXW1j6mwUAcXAeqxniA5UtgVf48p6UUPZ5dmSLRititCfKpR8fVkztdGuUykghcs57bmBEnnFLjp2ivXFH",
  "key37": "4L5XGRA3SQ44YauwtwVvyeMYYps8gSE4eeB6rnrdD6fwiUru4L38VJGakjMmPYdvfW1bqoniTuQSVEBNYahmL64D"
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
