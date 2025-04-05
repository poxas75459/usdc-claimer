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
    "29U9ecNWzogxWpm8Cqs3HedhSPpoVZ7gUFNapzRRnG1XyUBxaBWo2X8oL2AzgGnTVwCvRPBJ667LCRmhE9k6VqQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7b5QWdfgyS3rfSVgdAavLwBmaHaCYY3nTB9tTSmYtJ1ME7D4suaDyLukX86MaHhKeSFJXQa7pwPtoCFfQYKaCe",
  "key1": "3k9bPPofskAc2nkUVbxP49WfRAMyr2DoazZiADvEYfxPPfGMQXTaZBySMk7Tf1H2PYvnCsJTqtkNPTH5qZhEpjkp",
  "key2": "4mujnxafxzAbq8naN734yfZBjhQAvUQFBdkm62hqkWnhwCSArgSBkZMzQxLvXr58AK6niZv21at2kQyGMKz8MMew",
  "key3": "tF5UWdZnEeoHhe9jT1gqXg58edNeudeRSHW3CedNujqxhyqFsc16jgFJ8n6MiKLQrDzdbLNbytd181ptFKVyqs5",
  "key4": "4w6yQ3wmDmref9vPp23qWkVeQ4TNSSc6gDUgs7nrQGFUqQazzSik63piN2MxPfzNvczt3yBPx6fNHuSaTH9pygTT",
  "key5": "3z5qX3Kdy7X3GwfBf2Gbos6ZSUcA3GpUnPC1gkjwStqhi8fx3gnr8ZGV66UswvfwXhAJNLr8bLqBo1DSK97X3B2c",
  "key6": "5AoD1SmkCSRjCVW6HVfUKmDijHiTccL4x56YhtYHd11CjvH98GiTKVGSufvk9vLxeSxx5LQu3m4NoekFnVFMfM7f",
  "key7": "UEEWFRbwH5Q2rGk3PnTC2yayHEpDNgonicgjBo5XCRUeARjsfTznqDTQmEPBVeEsBWvmD64y8Pr4rZuNi5YbDcN",
  "key8": "KGDLbfm9MwziTejPW7uykuCy6pD5e7f7phf4iUoX4umgk7b2VfkSAwMDnPU9deUBv7tqxgMBgEDMN5cA3EJLapf",
  "key9": "4QeLjotd63uU4qi6C6KmdTAimbsNXEbJ5nLwdVkWyEL5FK8RjZZ1RDJgXKfGV5KVJXJHys4nFRtUHQzz8GQqpxwj",
  "key10": "4az2Q6dfeD8T8cVsyBM1BwsPiRNnS4JzRB3i2WNGMPBULxhQBX9LMUDUjMQyyypg374Qg31Q6ySyVQk7pMwqm1uq",
  "key11": "4p5g7tKNonqtKCsiJV55jKwZHEg51jDj18aRpqC6gNE9g8GyLSUucZsGFHCZ1yoixdMf3WB1MT7hCrAvtS153iUb",
  "key12": "5f56gttWbNvPVJppFuLjsUSPjYPD7LwGv5qBZgmep48xFY9RRkMQdU9zMF19PNdZsqUmHMVf3z3YXpRMkoHeAHva",
  "key13": "5fR8XCd9AxHZEipXVZ5hmNCJM35bb1VypCjvHXT6MZ8FKnD8CpMR7tgufGBVxCcDK7H9KjHEaUmnKnnUkoVRHw8L",
  "key14": "4e76EnGnsEnboE2n7N4MigQqaYUWddne8fNxcha5EEnUtnjkaiN38ehsYuv7F3k4HBL9AYtsZyxK6vN6Aq64EUdR",
  "key15": "5bZynXhAjsCXsnDsRcxbzAdtifwHU94ofZsPvCUqtYsuoKtiTxPqdDHmYAx1H8NoyJ45qv61gDuKbp8BqUfTu6Yu",
  "key16": "2Vg5F16KTXHTDWNQbcGjrN59n6EkBvr8bX2JRpT9y3YMayBMX5iiowHxSPRZhtbq2CzxubCdJAKjstMMJpXVfpvm",
  "key17": "5TK1xHj6eZYzBQzU3Bd6tsgT3tKgdDszTqxZE7hWuPT7aqDEZ3BPZhpDCDRTFhyhV423sQxBiCE5WJpvh7pJNWtU",
  "key18": "TKeUpr7VxTcJyUCEAbb7t9WmWBPTmYQ3uiEX87X8AcyynfDrhhuQUdynjxk3cfwztimEpvUqdvFRpJP98Z85G6M",
  "key19": "2DQH6CdVukgCTydJFjDvVvU5vrunGY3QQX19ESTPXEkeHbhVdSsuPhefhwhoEG6USqR6azfxn54XsA2u1H75DMi9",
  "key20": "3fjD2djQbbM88CkKqGevFZkNkV3nFfTEStL25fXC5r2PgoVMVMG5bGwa3gQJEofcGQ2zf9iqNriP4voKeY4C5F1v",
  "key21": "5ddU1DB8CpJF17MRcqRM9C1iM31JqmMya6vEo4tWxjyQYdsAW3iP3ALC43BrPcMuUoCdfY2G6ePPC8gGbbBdnHKK",
  "key22": "4rLq9GJii5E89Me9cCw155AmTKnZhAbrMyoaS5uHNg5U9ZLXgtPsq9WSonzSdKpU4uWRrcJQAJkD6cPWT7iUTPwQ",
  "key23": "PLFTchHqPKsH8Jog3SxXNnj6tRVdudhqWwoipMvo3hpLztEwpcfCByXwu1zhYyTEcampew9dLAUzR5VgXBnn3xR",
  "key24": "q3EAK6ECuTDcjzZvdYNfARx7BGrpue5Gn1CSdAnSrbaB4j1p8EyDn6NS2ib9jwmkfc88Mq46ztQDmdFGus59JrN",
  "key25": "4DZSDmDT37ztJiQKaHHmZFwkJknnkCPA8wdknyhjeij8rZzT13LxzpADwU5mgbzMbF91SoCKkyY1NcwD1Z9ktESS"
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
