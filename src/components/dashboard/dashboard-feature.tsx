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
    "KB146PC1FVriYA3Dcqyjcyv7JxaUC7xc2JZrTiJz1uj5D4fzE1AttNAMjUPnSnpBZz9FAFUGL5jzntSp8EiJ6zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UT9u82L4n7w9XN6tTz8qC9g4FtZwrvVz4HwthFCHsoY5D8vYzscFtwa5UJpWfivhFwDRjmUSqJkbbJLg8ntsP1g",
  "key1": "5LYukqQALWEmkYvxU1Gp8gWEZAYefMYEWQTY2f6QESuQ5BhBhriWwss2b7i721LQ1vF39M11RebVH87Vq82soy9N",
  "key2": "VbURsCJDqLwPPnV2DRE7WTRQaUd7B3Kx4GLpxxF9RBMbgHmDv5bHMYZJKkFVtrZypW5rEP5xGWvFeHkGyVBLoFF",
  "key3": "5mLw76vg1PZjFnt4VZSK589NUZCuVSSwYnxzrCipm8TQv36dCBCgwa33BVb5UJK4K51kvYxnvPRdukYEEJLhqDgA",
  "key4": "3n5MCPSdmzUbHTJFMUh7aN151kw4w2zwuUcZcXyRVdESEpJEbusqtVH664GvH7qD4k7opTVjp1u2ty6bQRt3eco2",
  "key5": "4ZKiLPAapvDNiQQWxwk13B3tX1amUqcxLxeYnHXzeZCpi8MW7gR7HGjPUq6vgMrRakkyaLhsmRLhFpEqBNsLUguX",
  "key6": "64wRkkDmgY3nPo6uKRcj6qoSY8vxpzuUV4zpuwf6odupXLaGZzH3TFa4xkyP9XtSW6m92xeFTMqmDAF5fhJTvCim",
  "key7": "3iEaG4sGKmYY2iPGZd9pTW7yF9bHG1npcR2h2sh3MMUV9WBsnEjdMRwB5LErtFbu6VXszPyfba7Tj2oBxTG8SXDV",
  "key8": "3mUtFcazUXW3ikWF5LyFGGDpMR24Ve7uTkvS1kEYYQiyKPyfGP9q5he2xi7girhA6srZsBZuvwqkLJGSNbtdqrrx",
  "key9": "2c84yhzNkMKfg9oFY49bi8MQNcnRX67oyAyGx5yGttLx7jzGrXdSY8SvXFeXxp81k5R2Rf6CQK6LM5YsyNNcqLf3",
  "key10": "45Sj4gyCxrq4xAkFiH7rF3y4Bmnh5Von5YXjeF4BFHYee3tfFMPwFwmQmdjJwGPqaKTcC5qDsisHCJ1XyQ7LGwDN",
  "key11": "5L1rHT8ACSTB4joSVDF5HnLcSZb9k7ztagB4cfwQvGfZN7xNeqMPZvherbGCp9QPHhUHdHRqGULs26xxym1TDV83",
  "key12": "5q8gzv19Vf9U8BCxb6Baovpt4NH4UmFtaHC56u2E1kDHf8zvRmWr9vGZZgdRG6tVr3iZdDjLsNwuKZDrJqGaoJwE",
  "key13": "3oHYLsDEvo4pdggbXx1nw78zBmEeM4k6QaDgdS38me5cUkRMdkhUYVUJWH3qEWZEK1CPmXEixQTKNMQsrShGw3k4",
  "key14": "48tQo3eXUt6mpFWaEUkxERxL6bA6ZoMcZ2jqSQPg2WR5g3GAoHe74ywwioggkVUcK5zKd6oaWwT9wFfvhm4gBR5E",
  "key15": "24NBuQmkfDNird3K9C1yk4AANdcqGCJtaxTT2yrNQH5vGaXs5ByRfhNLgUxhonFq1J6pB1hf8MPxgQCWufrzM1UE",
  "key16": "3dCQq2g6WCWDC6ymWtwRYzr6oacL4CmKFwshgAU1sae1N2PvT3QpYndcZ2gN5Z4jyBw8nyrdE7RqxdBAYLf5Kd3w",
  "key17": "27mwdreVC13krUw2shEYbSuvHBPrSHFYmY1RCqJ7FK9wkaCjxRQFqQeU2j97dJoprsdzxnuB45CuYUPk5utDJhqp",
  "key18": "3XbTBEZrjs98MomRNkCkvSSCj7WRVrasUDiMz9LA2MfemhJ9AqPQ8hTdNfQeKNsWvBw6z2HU4BfA888J6sLDnjSQ",
  "key19": "5TC3CfZsMFYHP5aED92G6CmGLP96FsYQrFyLSuK3Qfcx8kPBuSW36Ps4uDeqMeDBMFMy4CJr2v8DemqZGNDNYSUr",
  "key20": "3t4TYFUs4RL7M8P3qoYdBh1tPG5yfQjJhxiwp7rWhPUrwLoNUHv54K2S9HD4A8pjFpSo1mxybQhiWePLdHYGbxME",
  "key21": "mQ6DdMYptL8TZF4BGhY11RdKRaMXFJ2qWrtwseXMYPciQzn2mpkVJcBnfQx4fgWx7CsD44mrb6FqJFWEbaeMWke",
  "key22": "5hGt4Q6YonU1y4R38Ehg9HjZd3qWMkxvQbWTouJ6uEVocNxmpVnyLxVGQFsBzahR2q63PsUdeSv56gDTZ1BY7R5U",
  "key23": "AShX5esEdPN4Qrun9mEJinEqqBPaejhk5zNFyPCqk2X69TCZ4eqDLxWDa7MNFmYu9uG2VLDNS3P4MNiGvcNYsQg",
  "key24": "58G8T2Le2QHrxw9WQ1GbL4jr5LMP5yw8wfr6oeK5BGwvX2mVZRfDXmozGEhCbjWHzegtDSRusfaCtvD66ABXs5ZN",
  "key25": "5Y158dpawpRt6BMs8bhQGTt5Y4ZmWKrntEkawP1Uri2A8tQK6nD5wdtZDeKcEQrMBbYUNAX6vQ1fcazZeVMRVU6B",
  "key26": "DXnfwYGhJqGhKnUdWdAjikLTZb2D55tBXDi25GTXKYRqiDDiFEVKfCnKvBUhM4tZDKytpodjLTRyxQB82PaCA9s",
  "key27": "4H93mAn9P8tix9h71sS1rxEz8JdYCWjmqoBUzfkyCESA4dosAuuCTAWEtMS8XBa5RcdAPH3ZLotn5fnNEajvsjFh",
  "key28": "5VCnWAcfcKK1D3xLDaSWXJ5tEbjRUw2gfYWZWSiFNsbmR5Gpsw5L76GTFiLD1nCK1grRHLrMNo5o2LBTyi2b9AcR",
  "key29": "yixegmZwe8QEt3htXTjKBGUNBWxwd8pC9sGE7d8RWsH3PPwxU4X6MecgLnVsjuiHCkRksvJHmgMRDy5t3p1dbpY",
  "key30": "wbTaYraHwGMm5g2efKFqv62uLgXeCcE7AHKo7BYWtUtWKbw21gWkQwKZEvTxHW4XqdCLNePgWH4tZBCh1GoVQ5Z"
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
