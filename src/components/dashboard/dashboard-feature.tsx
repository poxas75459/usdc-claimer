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
    "3tK2dawayzZKZN5E3KU6RRrQdinnEtvDPgHwBPbaSSAHhqHoUk8w9QkAhrBBkbGKdoxPmZr8ux4MKMfoH6818jRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEDbX4sBr625vLnaKw2FJ1KcFhkB8pM6WTMSaTGhGgANfRF39g1JLCjW3d2U1b5VMAWBom4kSYabih8HiqkMTte",
  "key1": "5P1Hb6B7SwzDfCGQjJphdtjBMKDkmBLiMSeXTez1zVBoQ1WEgtHH1XPErdWCdMFHfgG9vXXZk6SWCpaE4b1r39aN",
  "key2": "UsJGJPYRPif1FQmNqH1Mz1HW8Rugv2ZNM4HFTng4qPi69SH4JZ3EKmerTKxhYhG8KRQWMXk1AzJHNcH9V4NDRyg",
  "key3": "5gC169zNq6khWpnZUgWAHd4zCJD3QZ8dwUCGxaWA6dGnaGqnChWqYaMdn4yQgAvwm7FqAFbBMPNkY9M4jNLkDMVE",
  "key4": "2PiKznKrhS3qaFs1dM3PxK2YJ1HRTRdXeqPAxPQQbgFEPznvsoFQLs1WXWeLuJMbS2nkEe5aXXxhL6XTDJpSqsoe",
  "key5": "4ULRHajBNzJBrxB531JH3dR9aS2Eqh2zkW1PyrVs8JSJmcXwNbCKkuDW2CTAeotRWTxxRpKWrDZqNJuBWwJDGTo1",
  "key6": "5k86ZndE8mf5PX2W48jtgTBQ5HWLUqYhYku6vc2nPbnFkrEvzcjcvPopDNzBdhxs99rpmCdZynZ4v93CvTAkgoTQ",
  "key7": "3kZWsY8uVDmi9XAoq43kqivftYHeH4Nu1qsrfJJ8kDRJekKauegqAqpy6i5eU7au36aejjBDan2Z86LMQ4GFFaqV",
  "key8": "4au9QbqBGH69sid7t8fiJxRPKspbmnuJAcZT9xWys7VAdEqBtWxDpiaJe1MSCtDwdZVeSJCqoem9nwadroSb6mR8",
  "key9": "55feVWwEVvyYTBhBGxLcFUH34TzBr6ZM9idLqYASXWHdFrkCuUFrfcQVHFbJFVVmTSzNukPPJVFpDweZB7kcoBgr",
  "key10": "ANaRHZNV9eAPni8bfuEN2HjC3ayLGnvx2NGYQb1kDG2tZKtb92B9A38pKiSEFdqcxdBftWsvCtra5enqEqCEyS7",
  "key11": "afoB1PY6PLixrWDbCoQnNtNCGuLPyL2HLFdvgqmsA5U96GkMVW43cfQWKfxm6USktRhWpB47WiAp93UVwNpP4ii",
  "key12": "2iCCGJqsdQtzPu9kULJkRGhznP7j3xxtZACkonm1GkWiu8HG4axRHXDzMybwwFKdVBEawz91mbnvDe5wngt8vHwp",
  "key13": "5BCCz7jXHRo2muyXths5aANK3vempgtwmGimW81N12K3DBXQfTajGCjwu8JsdK6VCjZVPveshDonfyBi5UJdX2px",
  "key14": "2nQGY4bkmUArPnd43v5pj51ZXzNoChrmjoxg4ZAELJeLUFhcmKAAtCDivMM7cnHjKFwoeprErvLAcyP4R4wQfsdK",
  "key15": "5atbpSRLQ4YVDqTgy6TNNnikj8SiNjTs5ZthfcJAmJ7VA6DGSAmREP8XgxB1nX7gJMT8YgL6oAKmehusmuLvToo",
  "key16": "G9dmPL1VFUYyzPUtpGpeVhmCrrjH8APKCBSQC1tv6C7u6LsN9Qpy4bDTXSRwZDyEtKKWtmqfjgmfEqZhbZu41aJ",
  "key17": "izYXN2prXvxsfzRkvfHhoBi5kksrEfqZg6Dvr14o8maJDGS1YaLnyVQkYjXuSZVtaMMEiFRNFa5gQe5pQbAQZLk",
  "key18": "4X2Dz9jbUjKoDmsn3d3ay8aMvXanJ6xr8RPNBBZC6ij28cbgYLVJPN4UTUnSch2xK6kg5BP5Vkf4dAACdmUsuVJk",
  "key19": "kdRvV7H8hrBoudQBcQxdKHGurhWvZP4CNYXaV9XrqFnA4t7z1L7FFhtDySV9CSkCE3rpuT4RLfb5tWcNmduFbPr",
  "key20": "5yuWxjKNn9LcuDETuLopJGHC9Xi5SARwB7PnziLZXcbEN3zsmBwgyEj97sy5YFzEE6i9n2Q6ksx4hAqbap1Cp9Ra",
  "key21": "4aUJQvrwyKUXfJhmGyXSJXHibUDsFM2keXB9QKPUeGXX9jZQeRSngDdGHNvpg58utdwHbhuVdsPnowpmyZ5icfxn",
  "key22": "5Lmj8mQmPmTAFNmdqPXSPXDXkcMnkRZz5dCNvGjzKVxYmocYChyP8FLn4ZpMKvepzHQg2X4m78ZGJ5Vxi2RHZvrE",
  "key23": "3Py7TmCk1bqsm8ZBFYA18tMnoDCKeS9wTA8KsYaKMNk721X4bTRgWmsUz4vCrZngynso84VSh6Sr6PSCuMSocSzh",
  "key24": "4T3p2Ds7Xy81Kx7RyECv5XfjCkA1cFvKswvdpEwQVEBzcPNzQXw3dKXQjp6QV4euWb4Y3bXAwDBuzMLePbbKrED",
  "key25": "4icsj1yadKMF9xseL3RvQxLhA2J4Avgx3McaXz2LCLBBtBf4ThcezL71ReSzdjGfmoz7oxMdPgPf9TTcCNnwpy9n",
  "key26": "SV97MFYwrwk8WcBcwJLGS2HGR6iZTiCtLD5dXs66rvP1VZY9g7xpwCHANZ2gxgMUf2PHU2r8jsjHYMuK71CPwXQ",
  "key27": "5DeDuXgQZfMyKxDTMPBrvWG1vaQMmPamocQLWMiT8Wuq8Aq64CkH8LgiX3sRCCJy2F4vjXumR7oiDj6KdDqiU5wM",
  "key28": "2RamJ6sB4VxMZV8jRGnpySghFddi3T85VMWrnwrnmNPcHYM1urSTbaJfbS7skVjz7JiNt4qKjS41gNi3foWsW4zX",
  "key29": "2vQhVjznh42tQznNCLYtaa9NabuPPHcM4qQBmwdEUvKad15yF2gXAnu4VMLGTfVwVRBUfEPk6MjoCZEmp4PYXcMH",
  "key30": "47AGU431Zi5SwELdrU6wkepXiQfzfK4LA8gGGMzurPHuK3G4GAamFkbhnAiSz4M1E9yLDf194WYN2tUfHiFnoMcv",
  "key31": "4JbQNeFsnQJgSkgoTjbjceMeN6RzK9XUCSpYyztwskHvdgSNgjSBQA86Lw9sQzDxvC4b5Ru1HAGv7sA7zHMyQWD4",
  "key32": "4tax3HFaGN8Aar3Q4ptw78SMWSznno2h6fvhw8dLgLtx1Hd52sHob4Fn5KoWQ9Ri5G8YX8E7CbSMx7jxmY8Vg8kE",
  "key33": "4WDobjb1ing5JVBm81U9CFk9p5CFPToaSZQGdGr5LCPm2T3H8L2S1YihK41boRFeLGdHcfRTvZDwftnNJj2aJL2T",
  "key34": "3mktkzqwoQGe8YwiHc34wQNeaUXDSMZ5mW15znHv3udk7QKwzajVqUjXg1UovQVpnT7yL2XQbhoTRGbajMcSya5L"
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
