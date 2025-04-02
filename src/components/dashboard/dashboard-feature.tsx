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
    "5MYWQMNrnjo3vHkHFAGr58T93iYTX1F83q4QGJRAJqKNtJY78f6bJWScnCXKpa3BD3BJThkM5XyVfZQNyX32Kye3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uU5avS52vZL1TJ3SkWuZrQ6dQ3mMmPtX684tbPfNuKTFTMQo1TwEdVLsvVxhKKui5H9papmY2zTVQnLUfxvVRkd",
  "key1": "4mBzPTxVNtVS6TduEXy1P2QQUQ9e2GUa6UCVPbSC1ZzC2gsohp1bWQr4stY1Qbf3DmpsttHt4but9CT9GsVTjnRU",
  "key2": "TDTD8Qsi4JXXxCUKsXw6kXaquLK78XpCvrMDNj68Xf76UsSsk4YoNKPRxm52qkJYUBnciUCNdzenXDsV7vXDKsL",
  "key3": "4cnQX1wtFN4HeWJtj87bzNfn6NKoZ3QVEEnr2iZrVPfi4CKD1RiGnAbAjCmMa74PoQWT1vq6rGMrHY6N6xyZE3VJ",
  "key4": "4X6yFnGPXvTGZ9UZZj9DuT88J4BLt1C6f6ZBigadFNCr74K5sae6Aawz4AzumPvkYyU2uNhdnCCzPSqZBFrYgDDE",
  "key5": "51XitPjouuKQ3QdKh9NSG74YKbNgWLQAw9LNAuB1zrUWRULxiquVwHavnhaFvyLf5bkPXzwsvKRf6VFTx1MPTXXT",
  "key6": "2D3hCyEepHmVpU3Vcwi7hgy7nbt8EUHXiANKiqcDnoX8tE5yLf3y3EuMh8RUPyELyJ69N3xajPX3L9Ak7rdoBv5K",
  "key7": "7yhh1jLsuc9Acv4rwmyPwC3KmiDMiiuuCPCWYVDNNf3FVEvyVoSYhXPhEXZF2rkqLg7wQPwFFLXcXEsC5NgNDZ2",
  "key8": "TRLAPq5H31UtEQis5SGsTdC5AY7XLWnH3ZaZxU6h5DqAJmz7zwYmmLQZAooyxNknu7SgFjaW3SzEQ5CMLhL6jDW",
  "key9": "2L6H8qtJBVYUMNY8TpbZQuYki4w3r71w2RVbBpsabTdv4ix1MLfXhN3mwL94ytsty1hy9hcX8DsaU1BcRLkqF22B",
  "key10": "3PpFc7XiwfaS63xHYvzR1oe3bx7KZe5NeCCuAdUzh95sGPCZkNNu3DhK2TgeqTDXEEsnhiLa2Nfrsyfbd6qhmGob",
  "key11": "5bomj7MyNJAUwyhRgv6yH6YFphY3hhxYKQhqM1JDyuRV9oNuB9dxerWxD9Df4j55CtnVAnmxosGyAgfb6yQkDNp8",
  "key12": "eo8dNYc5sdqFWUCsAacUPHYxv6RkbHpUEFMTZEKDiwtcs95ddfWE26e5aryJ3pjMCN1LqsJzLNj1uF285JReXMU",
  "key13": "5XKPSG5eduHLb4KavaxopZ9LK9zkM4wytGFC9AmCqVMhbQTgx4SMgaDZCUi9qsWNmTsgNzt1sr58Ampw1LHDgdTk",
  "key14": "2kNeRLzsU5Jdmc1Muv9ecqo4rxQKLpD3tRCgBAt6kySxWmiPtAL6iRNG9wUXyvASLDQqFgrnEjq4XqLuFNrAJ3J",
  "key15": "55n6jDYhreLKuBeAtYL99hoVDn1jZyYsAiqKmRazuoVCVT3o9eQR3CZ8hBuzahSiAcRmzK1Souk6Ja3TXve9guHN",
  "key16": "5KUrm8igERLrsr7aWZmMdjCrnQ2vdYxwHCQwnUGj8G2ioxfRboyf3MmtQ8Xyp2AwYHDhvQY3pMQdaDYXemTvSVEx",
  "key17": "Hyc1mWePne8YzsNceYqLrUyHTpidXWCs16vrfJRRaGhBrmNpwGa6ZUQmPpubhceArXEJyxKeQEt8P8e6F4hKY8J",
  "key18": "j1on19kpidQJ5FqJmPrEF2YEZ2XWrktHXaZoMjoLNyjPPLBG6os7KnCJTqmv2KiwoCTiwbcFZ2pZYre4imS7iQ9",
  "key19": "5qFKpTVEbuqx3RM86YGJbdRpaMqrqDCsiGkLRn9FqqZdGTwCrrj251a2qT3ijKAC7rWN71iZthMegmPQLMjRSapD",
  "key20": "5EB85NpB2YMJRjPntomic2qF5yBZpbGCQjv43pAAufTpfFPpfDBHPmyvwdMgVTziUWoHJ1VgGqRNxcLdcfDYEQ9n",
  "key21": "2ArtoMrDmNvj1fK5CvouBAJSREGrKF2z42hdsFV8kquGCzrRDxLfLzoM8zywcqv9S9bs3H7Su4srTvALM5Jzy6ar",
  "key22": "3HjY3f8C75YzAc3mUMBNw4X33StASyR8UCLzctvykXtx6qi3UzcuV7k4rXQFwmYPBgBo358am7csdzPXDTeAWU9t",
  "key23": "5GMj9eBqsVfH1F7HHyoUkUqtu6u7deHXow15qw2gLk6zeHmZFCNEsR4Nz5xQfidg6KPLkHRe723MgTqS1NiCpc4h",
  "key24": "3k4whM5gQSqDeDoT6kxg8SzXRFLZAS51c39eR9ngBfJNE2Ch36Hs36we8Jx81SFQDPNiyLe6GMNmKZMJM54XHZRa",
  "key25": "5VQYwgfoosPPXzqxmMvQLYjzSXNxCWLWAXPc5NarwQC1SKm9yLygnpSJ99yWWaWAo7WZuemMFs52JZobH1YrVQZ1",
  "key26": "4uHv1LpUAoUqNbYxTLvWKxAbEeGbuGQFSwKGCJ22Z3MGMedbZxRZQJeb6P9pPJ9Q8KwNvJfuohz6uP1ZxwopHAzZ",
  "key27": "4QMKJqkbBTop24m3kHqtdmBzXMcnid9ioTs3Ghsz66bUU8g2Zs7iEDMSPNzgeAVBkY2Loy7zCcmRsR6oKpmfetVE",
  "key28": "xFw8eABi3tZQqrCZrAKrA5bf1Zz3BJnydgRh24isHRWgiSK3CJZU89iSg2GyMRneF35WYw3gqVx9x1epeCUEibU",
  "key29": "qFsz8udv7RSCMmj5GLi8anX13n63PT1vPyiXEpTryNmLfWbPCbpdaymRhKwkNdCx72coLMKvMRTRTCGycRwmGX8",
  "key30": "3ZHXnagfdmTCukw9e2pzFaQtkt74mzwasJegbWzDPPNxYy5cGd6x1xmecnfyjMhWee4VqVymHHx3hatPqjhEPKUa"
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
