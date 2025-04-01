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
    "4ZP9Mj7VbB9M9iC3TDXzqfZChEYStNBWpsRPuoRZpipnjESWoVwNUQAY7LBHcc1LjCTyC9a4F7Pkf2iMrJ8LYgkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ww3dmHEHSbPs4YmvunYMpm1kwMeweejff7eDsek7uSkpUpk1nej3tBHNyG8Qt3ahZBFLFh6B1571eEaWxNMYf9a",
  "key1": "65naVe91d6hCUh8AxCJGF4jGddZPUTxVU6R3sBeAxYuj7B5PQCLN9mLXWdw3FHvRcKwiXHUNsQuRbhnWQJbS9zYX",
  "key2": "4orD4jtQaU9i89m9E1nzHWuQyTumdMXwC5YphnkWa7dLGcWpgHuQybA4N7cSHEerxMRe3XNmVfVHbGWaRRnJLN5D",
  "key3": "5XrgfrLJqtvwnLa8pMK2V39Pm3juhY1oraarK78M1STuUfhnyRTaXEbHW1NKcXwcsCsmmhkuYqpAk2d3yRxBs2gj",
  "key4": "2BYsPoevwhrvbXzUtZDpEWDW4DyfB9AS2HrcdYCbF1VQDgwFDtqTnp29rrauXVdmJ8tKD8gVsxwYNbVgavxYQq9K",
  "key5": "4BGEWXEskbVcyro3vp86f7PiqhBqy79bSP7hKYsu7wxSQ728MVg9d2sraeU1bVwcunufePGqihCfeFgpkYm5ugvS",
  "key6": "3ERLR6h81QNR8qdTsq4vzK1V76bSnVSPbLxYgr3WwYkYcKFVHaS7u5eLyrBqKCCnHWtquSQfMfC3KydjMW5jiDRs",
  "key7": "5mqCWFCcmnodEsFgNkmMAK1LZvvapYeNNTSTHuJXJBZd6dN4Upxp7jTx89iNWZZxRyoj4N8F6E6jqgio6Ewq9egY",
  "key8": "4SCevd5hPmpHfMMCQX5JiVk59SmTTGGQUfF5rzKAznLL3t28XnPr4teHvFzEsy44Aj1wqAAoNjxSqoB4pCDVqwpe",
  "key9": "2p8V3gQD9YxwaUjURw9faZerDZRP6DYHFJtRmmWuoFtFeVHcowJTrWmZrFrWwLSE43FW6fScDgtKmGWAUBPFxjbk",
  "key10": "2cSMZ4FY3FeLsTkqMxzEZAEkM6XJLtFBoDF4ZAWHCFJiNnQgUpD5MMJgTyZ5tUUGEXGhacaBLZLaaQ6up84ELbm3",
  "key11": "2n7VmDFSHWtpPyHduhwFCQ6bGCgPy2TDxBDSFY19ZBhFnYZBDCua2nhHzHyz4K69GJqGT1GCuPwmwjUyqrnVBMgw",
  "key12": "UDoguWhPr7Df3sVdbsUFdoeWP3votWbhLyutGMhvK61Ex5XG6kPLM8kKyYEsFMQA6DfBrQfDf4YuVn82WGdE8kt",
  "key13": "3GcTrBGraQ3hEEQ2VkwBP6Ho1tYnsotBk4ybv2BJKNV2LUgpf4mKJTUpZvRV3nCiwHNthhiycKWMvKZoRYXNUAgG",
  "key14": "5dXepYTZwavA3ra68kUoNDWgo66fRctsoCqnLcfJpoLDo2hqb2PyKjCSZfn4moGSWCgefN296meUiwkgx6YXDk7c",
  "key15": "2gs5GqQSTQwmUd8Hefw2bbWJLrZBXEe7s8SBiTyDovKK8HZ8aHDzEnZT65KFpsU2jPsxeX2S8uDcEm51etXVNjpx",
  "key16": "NSmyisZqcBNoXF7AbTEcaxMcNdxCpzYm1BQTBXyfgPHMzLgPNhB4k2ocXiy1qqKkTK77xNQfcj21NpbeUS3qfzB",
  "key17": "5sbenR3RsMHcChw6bXjtZEec2qbtuLmizCRm3SUz4UgDtLss46qXquVC7hb98fX9nKjDXY9wryVDkdNriiMhtQVW",
  "key18": "gavpYZXMhGXH7iHBTqgn3TfXUFBX3Hq1TxNn48DayZhft8q2rF5HVxvMbSNXxvhdLYrvgpiNwu2HKN6M4Mh3Hsu",
  "key19": "4rK6gvEkerbR4AB6LFJtmLtuHvBVDvqkUdjzpbwBMZMjrffwzvmxkqnnkPk8Y5EFdN7Hc1BznqAWAv7RCDAY7pgi",
  "key20": "4xNWccsA46vKndYLCDq12PryL3dDKpaNNrXyrH5BQ3LvNfnJEzSJNWSWzETd3kgCKgY9CCq7zuisEP9qroTdeAtZ",
  "key21": "3oFfcfSBKW5f9JmQYaFQx5skAScR776ttj4zQ5LGdCbNfM5QoXDhESjRXqwnycnZ2tTWQcrLKX4XDz6hCqfvMgeo",
  "key22": "2g5NxwofSPHiGQQciHbLN182Rr46DKLYsspZbmL3cNpRwaC8egR2X3eAsgFYWZJWyQkE735n9JDf62wiqUHi5wja",
  "key23": "hWfDbVkBu1xboT9i6ZE7SPekwZ7qA6u63iTCgBrKZeLmh5rcRUJMcYbR7gqfkxoc36oAvTXQ37GHX9pG3GSQybq",
  "key24": "4aTrBeRXoM2wkuVFbjE6wod2nKMGQ2VFfzSrZNjbk7CTBTaoSJN39brp9Fa2oJDCqKt7SvGwZACnVTCuaeEYgdHx"
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
