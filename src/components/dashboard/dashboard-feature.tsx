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
    "2gQuTdHWd9Fh33SBxcpZtGsFJKceDfJv7dPkadnjvYEQj7HvTmdEJbdgqK47JeqzVkTby1od4pzeD1BKWGfnH5LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JinTsnsiUxUecJEA8XbVQS971TPfLyqnELiYUz95q6FRNAQYXvb7gZx7yeYsFdp5LDD1yv6mFFBxieX7Nto9SWy",
  "key1": "3kqpAzi1mCcEgbeHjCdzLozWkC3E3eTPuodmTqFGHX2TEsWUUp9jSVsRrUmBCruLXdMiRmm1a9tYQzC9wi3jgpec",
  "key2": "54w4DoWbBbvYgnecdnxSu53GfPBoTfcEmXfRth9JQgXjrHutoAHFgHojQZQ1b33VfgNASLjcX3vuGSTuwG5c3dv1",
  "key3": "3JTCJCau9CRC9TjLFfC5HuXzizfDZE2CG5ZCZMawz4HTtqAoeGjkLgeaMwxvhGJXWM8fn7TQRe5mu79SpBfM2oZv",
  "key4": "47Ze4BSebCQvyUVyjizvfYUZt8a4CBPdsZpHYVpppGjSZzf5ocpZXPY7784yySBfVtx5UvNuhLD31gNSfR7tKcb5",
  "key5": "2oLBbFg88uVbfePPxA6xUiCZsxGVhnEuSDenNicu9WGjvvap9oLRKo3KfH5Hmo4CBZwRSN6p8Z7y1Paeqn7cNV6J",
  "key6": "5rrNjt194uwcc19P5JSAVg2vy5maUb8WGNkoBGFH4oNpGrrR3DLpzYQarcrxDRY1FDc6hQAHzD8uWb9MmKPtoHNv",
  "key7": "5aWoAk9LiSKGy1ZaP8qXrbSSKKapXjz5L644PwFhgNqp8NQx3oMSSHAbEDrjYLike8nXjHSET5kHgc3S2MdFnTcX",
  "key8": "48RE8s4opS6K6qnotybiCQA7YBo6QKkpbRzrTYZ6xQT1sFycc9zx5xjadb6EQPnDjRKieNcQTELhTSaxdPAtyH6C",
  "key9": "5VtJEdmdEEofCbWhNWBTyACMD2qW55xZ7k2X21pzipnSVSEFVGbWdutSGnW8PjLqWGP7ngh5pBURnwSX7JgtQsfh",
  "key10": "JvPe2YZztetZdxuXUHNMkEnCpu6guyS5C1LG7T2XSmJLfN3HDVHQxrzEdz6p9sd42NWdBDAiFf2VboNYTvWeXLz",
  "key11": "3nPn2aT9Pqh6QLsEqFbytpd7PNAY7S4wTt2QJkhbzjo2Dn2WpQpsijSrejFB2fMX6uCdc15aqfLBgyL8uc1RSeaV",
  "key12": "4XJbReLmzXhDJafdK4PwhaC15KHnTXUM4dn1p2DYaDBreK57EJnra8LfmejXN3gbGfWXEixZBTBt1DCLHRAaPami",
  "key13": "3zcKH4pqWqM6jfFzU79SpbtGeaDmhPkDajHewrjaMWTmZD5wx5hSDg1KqCZLPNoABheBvyR3zcgLyfNstnCyCq1Y",
  "key14": "3tW6spyCJupj3dhVAawrzfmCYkgMQqorDFJhaf9ZXRHwtprFQHNHFuV4MFBwJEJmNEq2kSFFBfqoTnZoz44EueZf",
  "key15": "312GiZnT5ArusbTgRFR9JUgdkaxw1Zs1jhrdk5fFETKbE5eb4tm4MaWUAhUXk7uygbefzL9VvvB5XLmPHejJcKj2",
  "key16": "4FxXstpW11qJhrZffjz2hKy5FrRoLad41WDHhj9oYhF73FSHrdJof8XQFFc2DqKgWM6Kc2L6Y9YkQETY5DD1n4qJ",
  "key17": "5ekVCz7BuVWN2rVjjcYZBJLNSkJQMqiK6ppoFkoG3MzywULg12TeDfHPaYe93hhyuTagBLRWGzAvhHdJkMcDJrFS",
  "key18": "5LCQ4BK7Kbrk28fDytDCNF1ACY7oop1Bk3ndu6vbWpprcTGzcH6A6fcZxq2sfB3fk1P29qH7gkFMaH2C7KszxSJB",
  "key19": "2JxMDbhLvjxvkEHFChCU3C6m7qjWn4E227C5HhH6p3b2bG8MF74jsMNf4PyNikZN7BkfYwYTk6ZAZD8BDwuffFD7",
  "key20": "5Kx4YjhC5KyAS69caZSq6AQUbrcRWwFXJdPXMsjUjLZFQb1LKEPkNir13M5sJ9BTzhbRFzyQT2JbjAEqSZoagpvH",
  "key21": "d6gSaLDB9smV1p779ThNHXZhxnrKbDriKaeHqN7B5FqhjbV78QghV6KMJNBzCgJRraKUSrctgymtMQZGyxYPfRA",
  "key22": "5uht3mkEQmnR8CNe6wNLHBNsmmRtMDQES2x1DqdncPzsqCjmKE9RJq7AJyQ1YoX7MukXgEu4q1maCDVmTCoJhhU7",
  "key23": "4fQakknVSBkcq9Cq9KXthfQEgsVMxPwhN656VAqpu44CHLRfDnbjATNzGwYc3xHTAWXwKjW5RiNvFQdJLfuC6L1L",
  "key24": "2epmHp3jVTTMRp5oTvk9hCpMErgCtdcGtdT4CpNGtpxsxPbACbsTM1kDJP3H2S9pKcqCZxMmG36jHDXB5yGR7cgj",
  "key25": "exW2sewcWkFmQfV6BesP5ASXnoPSHCdvkqLZcvDdoAMay159amZn6Aqug6zzX4gmLnfTAGFtgMck2pNNrFXHtTg",
  "key26": "4SfsuqxV8tVZ3DvhHnsWrSNHFqcdgjEC4Y6PZMFz3WKbbhK6Wms5kCY5KPtySCNryp8jfeDjyXAHM4oVDeSWZCvT",
  "key27": "2576R2Rgfrmce78ppAsmGcZuuDJQa71woeM84H3p56DxEtMmzSytjwV7jUUfc8GaD6VhB34yj2rPQnZ4M6N4Foqp"
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
