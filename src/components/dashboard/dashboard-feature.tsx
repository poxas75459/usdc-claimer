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
    "2iGJbXbSa6UfEriMcSX8xdJHGQ2q5YYXKbzP1XFKfWx86EcURtLDxnNviSxsUboZ16dHaehp1SoacCX1RvwpxaUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVvXbxan6BzFXeZY6DDpT96XRUfkqhYtMRdYAvwRvjVUT6uE1wSNZvoMvsw8KZ8fPna2g43sXkNntBJuzjZB1vP",
  "key1": "4muU1UK5meMnof9JmGXsdL492deZCKE3U958JEQTwGpVDQw6z2JSmPoYjggVuxgCo3dt2sXpSQVtk8WmncgJ9qJz",
  "key2": "4E8nTGP9xaicJ3GmUBZDvUN6r2gcFvbRe3CAMFowbb8oZRTHGBzCtjBFtqyy7XSiVGQuw1DFSzSB58GTo78yUXhZ",
  "key3": "3eMx35WbFbjkTR1EUVpuZmi8wugBBGkot1DCBoQRiTykqeov7hYm96BYzvhCgwMq1JWFBbt8r3LMy2aAv69Qn5ZZ",
  "key4": "h9YPMFbufnWbG5nRm9fEByHsFQqMY2sfUuXEee53Fvi1uu4ypaipb3Qv4Vg9z4kh7YXxMJZvgSzrQBc6KojtE11",
  "key5": "66EQPpzcsUxfH594MG2XNf4LqkhyfTeokPNaWj3wh8AUPdFiFyba1ehDgAE2BpExwBBX4aHPKX9fNJFjZHhAfn4M",
  "key6": "3oTf2g7XVdGG18zmFNnntXxwceuwwsx9kgAPJkVLcXFnJPAH1x4ZpvKsUbWZzCrywN1dPs5oRHSeYT9Pg1ASDe5R",
  "key7": "4WB3hHwQPokXapr8UR8kriTRX4VETbtuxxTAx2Gf8P6hzZRTQb9J113Zd4rYy6EVgDuf5P2qaDzMmfKdbwuFWNHX",
  "key8": "2aqx7qJvVYtk3sMtqrKkmgPngy1jFgCZRBK4HwdRnEpGGgeCqCaX7asTwsdVsEyqCjKjHSAyxC9oJCeCrHgtVy58",
  "key9": "2sR7FzspxB855MN4CSmwSxBum5HVxMnoFi1chMCn2maXdf5pEoLXTNCStVrBBQ59gcbzgkK87ejVsDATD4b47V8L",
  "key10": "4uX7BnM9aHWLKQ77C1T8y18KwN255QZMfNT4xoBT39sVDWKJXJ7wNzf4mLUEe3dcReLfyK8tn6xATu4eTpZ2v7uB",
  "key11": "4T3q7KujU8AUbtfpYDSPfZauAKFCqptpec1KG2fp4LKaGodoAJdRd74bHeHWmFTxqNnuFowAYSkt8LR1jKRPDFn7",
  "key12": "4daZCPukmYiyZMnwTFNfXDy284jG5gSWCDxfPPRfs1QyEMcSBLQ7PtwUxmWyFzgehwofXjRWYv82cvFHtE35FEtA",
  "key13": "2jM2DpGSibSYceMXVxpNRs4QYefswmMNWYxWLgbmt55JnQmfiGU23caopMGXaSMQtH8J3Q8DEZM3k6cM9wLVEBM6",
  "key14": "2GJd18osNXFHgqEfKfQmJU5Fmdouibo55MiKUr295gr7i5NJWRJCBysbwaS9geAmAhTX4MxfNhpfAeYZstFTHU7v",
  "key15": "2RBVndgEekZdEuRCTHM4gT4HY2BpbdenyeJNCJ2hM7HvwPxaarhi8ZDvKUwYmdPbRKVhEviQSqdQequy3YSZC7Fz",
  "key16": "3FE3k8CSnasS2jagnXRfUREHMAgf7Ss5Shk5rvPgoaQvrUakcWpc2TP31e64SYLE5trDN9ezRqHzirCEMzoDbC1F",
  "key17": "4Nw5tNVcbEKMdVHKqiBYZsaGKUqvCtkjnqAxa6KGeLzx8NzrWM6A8GKgzToE4CFX9CzRCJtdrp54H8iovzEx9iwg",
  "key18": "4dD6Y1WQaD2LHkRRTBAGUkaG54xCrpZp834tVufxGtpU99nPijh7Mqgv5HCCuTd5KeMxUvWmJfnEJAoUThAe9Lsx",
  "key19": "3ounoVcux1NGwaWsZWGgw8KoJtPoPsSgDe12oPLDK7DpekDXEcBWyDLGuzsvmvhTLbeD26mfNy6Sw4BaNdw3kLfm",
  "key20": "2GbwJSdwGppCGDoBZ5pfSzuxy5mbhyPmtCh4RruXJ1XYehdDNPzzpgzSv1jcFaSVGctDKg9qrRMa9ZrHmv8AX5n2",
  "key21": "2nDHryS9NRr2PvQjUbhNfRqtR4dVsNAoXBpj8UzywrKYveewuUMNWPCdnZtzaYzvkgH5FkHFMy8TAiEa2FK6DHNH",
  "key22": "2Q5569AZa1A2tpkixiGpxLi62AtrZDPSFXGZAoZXmrmudrwC2A3WkUHhjowhv39hDsNHo8RYLoujaJgG7UANtQgT",
  "key23": "4BkfytZFYFErDUQSsRBxegUEGqbRELLEBmu6XifF4TgKzwrVFkAguMFkNEgYg51xkKrJJb58X2x38D4xHbMVhLg1",
  "key24": "28cRNBWFLgeHG3GLx5ZwSGzjrkjNV5pHXLTK8D72tG4RhaVALCdQ4wGGSqVER4a9ti2JGZUychdgSGAyKHzhkPKz",
  "key25": "5qjWbUhNqfHhGhQ7bqC3nGwWj253WYVvK5RokV4pFWB9KUMwu6dJ77RSQACckK5U3mJ6yq68beCPadanU8KdpPPJ",
  "key26": "5F3b18L7gdoGZyt94EUeeZ3CwubGfKsTustqw3o6zn5NmD3cFS3HTY2nxZqAiBgYXXDjGWzFY7Th5KCXmxfi8uPQ",
  "key27": "3EsYNixQJRPEdkWNk12a9E8xuJ1J9uqoUS4Uhpv5MgwVx2gq23gwFZi33uQHuAvSYSUw61RVXYXgKcSVJz4oaKtb",
  "key28": "2jEp5ukFETP96wxoLT119nFmiqRfm86iCWSKG93eHkbHXnFxXU9jjMVWytAYSbDHvrUCnuaw6eWUYwpd1s8teecS",
  "key29": "3iPB2izuvz8fpSMaFbanHKrBb1LyTG2VYz4eP91Roc7FjGi29qcF65ePpm9HM38Qs5daFLC5rbN9uU4eesJSMeiA",
  "key30": "648B7TFsiw3JdzdQ5VYCJndwjtMhjJSwzRWgF2RGB23p4GREmAGW2huudf1amFNrjpmJe5Q1ce5MSFf4JpMyXY98",
  "key31": "67kkuSs9emVk6CQoybvg49ocawkRBv3kJuTmcVUzMpGFtFmix2wJ8rdXNPTkhX9PH9mkVjdVgP1SZ1KwSZuj5DSY",
  "key32": "3TWZp4YUZypvNNJ7BBzmYp3SmUUo4iKrXFVqMA62CsJwkmkpY8mgvtcBtiPtsJaixjpSZk5sTSgn4qLv5X9p9Nhb",
  "key33": "565KLkVFTbqFXSWXugMzfqPdzbujcE6fi3mQGBASDkEBhfe6s8mMepvj3T7J7vUManELJw4on2bDLYQ37n4ihcv6",
  "key34": "5bQsL3aKbT56NQeWQcNV3DTNLAib69aSJG2uAgQjyp4RYMMxqhypJN9QmVx5t7cy84yq6oFwcLRkJFpF75LRJ6NL",
  "key35": "3Ngy9NgYs5uZWTMeZ6x2XWvS62YzsdTGympWs15nLm92CmA9rrDmoYWntN59MeZzDsUztov2QLhVJNxX2wSTM6yc",
  "key36": "5HP5MSUJRB1NxPrv51BEibGwS4aYVvAyMVVa4eDPW1t1QxBiFAD5mB87289XjtZjpwtjbx3xyEX2TmSne5yB6xzo",
  "key37": "5Y2JfCfqgfvSrsSrzDpJdbYzfDnAFiRWCyg3fqA4fGKfdzkUtkboRpykLQ3KFZSmkJ9bNMwsQLznQXQ7hZ9jRYV1",
  "key38": "55oBRaHoXMoLAFrbq8oeon8UMF35pAmKLqdUs1E81Eb8aaF2yHagPG83BH1casJTBjWbDo3Fhh6h9PStB8djtZUs",
  "key39": "YU79LvBp9bWBfjXMFrFcvLAKMzAiJtXaq2jyn4ebbjtZntx5jhydYFRm5tYExkVpEfzjFtFpvV6yJZqN1nqp63H",
  "key40": "2dSQEABr6nBFT6nFVJJpJskKK3971qewJySEJW4x44UuRsNLT4RJJAdd9BBsoeoYPcpkLewj5ys2MppWFf992KwQ",
  "key41": "V1PegwAHHsDLCeZg7EDgUA3P7Gk8vciyWp7EEpvFuFN35M4x8gyQpCMEDX9mzH1ZBfoG3jvPrg91uJbEUVheXog",
  "key42": "2ZzWFSbAYKY983J37YLwKbxt4he4U3v49PLNB2xRNdFgeMxGLMGtpuYq5vHKq1CDqPaa5ZRqVR7sncqgpUqeRJLd",
  "key43": "5VJrZeAt4YCPm9ePxHb1XfSiAkPnea2KRJGozEUY9faJW9y1JguZ79XBvJzh4F8S1RTHvHdCrKeLtj5Payj2GkNZ",
  "key44": "5einMNzeVhQM9pg7S45uYYe7fgNiGNMpdSpX3Vr5WGCwTCZt81zfLKTbhFCip6mFT5Lf8aFqMHiWRMgkCsFGJ4JN"
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
