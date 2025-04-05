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
    "2qUG8Rj91k2Tb9CdjMTaRCUu5qL45qMC8TTaMMd6SDQLL1FAnGrpTCfre8EGuoN5CzRtdAtaHNjrXZ65SFPhEdyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtPNKMDkBxyv4Ke1QnMdWCHTt9dE8H415X1U9CnrqMY5oYaqySmA1Sv1Zjfkfi9ErEi4gLmtcZG6g2zuZifbDpM",
  "key1": "ZgbQdXaguewWQBJDsuRJwF7AJ9Ez8MFX9cvc5p1a1oPzB87evKmTpGyxqAxAYVn3xSmUrxLhB7e8KZ7AiXzvAXQ",
  "key2": "2pucVTZGnCBXsrTehbWRSdbMbPBpFYHiGwnyEpTXuepv2vgWYUMLjHiVswjCa21RaeiRffHGM5q7yp9XDgEqTTgf",
  "key3": "ywz3B4Ci2qv9f6L8ZZpkn5TmMh9ZC5pTzSyhL8XwS9A6n6ieUgGCAUTMA3PHNZZ7AfVcvTYUgus7gBkxmo9hx9a",
  "key4": "2FAeKtChBS9cAB4Sp4DkbTAZHKx2CsDsnsDspT2QYP8yvYXXw9XN7oRbiqHE6SVuE3SAR56UTZcemh2A4kKER1fb",
  "key5": "3XW3kpED5qmJ7Ead5PtuAHTvur1j4gmpiRYk98y5MbzTPTFfnpxFNmy3CvqvAarRxKUucpVajPkYFTNPPLgdJWkV",
  "key6": "2496hEHQjjKNTWALqrMftQTji7aFQfyaZaE5DJ2HkiSQBMjrX1WF85kQaqDduTiu2Ku6Zwjo9oaos6savpdzSTFb",
  "key7": "4bDNkVr85WSfNaXB4BW3m8aHa9z3LvYfUcWoAUgjQPDKu8Zzy5h78tpZVDby7Pd6L21cfNHjLejuo57da3dhjAo5",
  "key8": "3ZJLgJykngmkAoStcmFdiCwxpAfWgXP1z1QuYNX849EwN2EqYddksiiKbYKACdWdZxoMwPTmcnd6idErxeMTfyra",
  "key9": "truwC2iKqeZuQGfY7RqafZMDMDAJDmWEDHDE1gkmveA2cbrRRL3Nsoi6SPcSDnZ6UVUkgMMpuBtSXezxjvifq4L",
  "key10": "4uptUQxcpjkJhvvoWNRrd1JiXBpYNtHmnrTkKMY2BM4tj4o3NQXUqijhkBjxnN5cSsEu8RYfnbKCPmAUdHvKmjy7",
  "key11": "63ZBk4ptBNHzTKxZMjhH65c3ZJFTXEbD7XQd4NHoLBrXDiWR8D3H4N4njAzbbFnSbKEw5WzxazM3JzaxXeSmAMLJ",
  "key12": "2AJdhB73vD26vKRguL4kPcmhwkewnAGPZX1pfJWULD16f9nU1YnVTFMs9ytTZDFL2pnQHLwTeK221YrAKuoQPnwU",
  "key13": "3DVEpBpjyZXixoASXPkgympYb5ZdL3R1GzsVuerr6vtj7xXo1zLtEsM5bd3AnKrk26vfrdRiGtuGUrDhnmi6Shvx",
  "key14": "266JEAGJqW4hb6MjGKNAWPeCfAozo9bS3RdB6JGMaZrhgWX7QeLiapBBPithh8y8ZgY41CbrEz8ezLZzsKKvaRpe",
  "key15": "3WAMSmBNeNcn6ScsYiCCtsAxToBTNF4uwX5E6zcygJWgxpV5moMmbo7WGPy6AFkppQx83D3ceTYQUGPMFwA3zKmx",
  "key16": "2sHnWeh4CFW5qrgYGvG6ehLKgk9bifvqbPsywdPB4p4S18cqcJ5ZHYmX37TyPC8f7PyWGpFvAkKJzScyAF7U9xhK",
  "key17": "4jjbxdbRC85EaS71qb9ap5RavvJhcumEJnQ6psawmkvURFLRnjgYKBvrb7b1HkubCgjVeVVFmCB9c7yLCGiCBcVi",
  "key18": "3FzkmHJMULC3bmHGFhz8qdP9sazCfNKYP1b5avjbDiPnHH8pH4x7fgLU5g4QQH2v9TCgVVGtJM1yAb4Zuc5JHvFM",
  "key19": "zNAzEr7WUGyVVnehxipLzp9kNBxq9C5D4r6SmfmPcy2uUEXyrKEM4HPLtFehc5rMzjFVXW6JauUYy9R7vgYhTUx",
  "key20": "4HUDL2NFDwrgjwVNDBnvhJKLKA6Lw5jeY8gtWAEQ4Wqj7CaHMxqubWmf7iZ7ikxSawMbisV1ZoZTUdxTsGZoN9sB",
  "key21": "2tixpnsDJNwxt8m2Gw3J9Q7GnivBVC6jqwmWCFSgXmYbRagFEDNvkvEVfbKsgg3AZvmqLYXRNd4dmENhMZS9xktD",
  "key22": "64ny5o6DhjcdqfgdoSKht8Jz4WEvcu65Eyiwz1ScTySW7z89FgdTaub9BvzwVpCKDxsmxwUq5qrkhwWg4rkLreYD",
  "key23": "5D1sDMzdTS9BcvtokESysVRK7Vn8UoCChUMkK34rstqjb5tbPkkKKtkc6AYM6BKp7tDBVofjqcwn8iqzgrvGK3SH",
  "key24": "4Gv2nae4yDRAR7EBCFusi8n3jdhULUXPAxewY3nBLGkjQpK4tRhvg3D7aric2jFCKTi8VfvPaD9QP9RdPzfzHpTA",
  "key25": "4679j67ZpscdCLHpFVBoZQC3Qiw1Je62NhV4qH7uoiB9qjPwVDNG4x3KpohzVXyhdPmq6w8YnbL8sphL6qrnXqt2",
  "key26": "39sib9HdourHXzQrc5Zbxh7zMqHie3ZGs76vxjrYUk33GzwHsv5CFTb9FNPUtbsmknT7hwUdRam5H1eJCKEuF9wi",
  "key27": "5UpafiJUYGV5d4Kw9iXEDiL9FxcjbUSTCtJrPPnH4kaqZanGUvGBXL7MXVWzFuKEsVFnkGZhSrezDb7Gk3HAs7Mq"
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
