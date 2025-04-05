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
    "4eHLsp2dug48uwnpyheMHh4Y8cRjR6fDgsPfw835B8StmuvFoqZdfeveEH5fehWUXw2zzSfEowG4iUDtCwPwWfc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGozhHYwZvLX8Nj5SyFwuqiyrn8q1ajHounZDEH4jm692BWMk15Z29GQqkvNccE39rHjGuCywhq5AhDJBrBBJhu",
  "key1": "2dLcN1q8GcSCJAFezJ28Wy4U4hmkHWnTQ3QFo74TRatAAX8qYQMznNMkoW64BjbiX88qSqzvMw2bSUzxMbLDd1ys",
  "key2": "2f3vmXdFupGahnArxD6tgpjN56JjZiMryrTM9uWzyAggs3vmGWtdz1EDzMSqJFuSZARYDFxcKEq2nCyxKBotyga7",
  "key3": "jNeQxCrpAYpbMGjoZc9JoNSLEe8ZGsQQmVFvbr7QrXGMV4W8mM4m3yq1Wk9BuFqhs2SYfhW3r3zj2X1WaQQgVkc",
  "key4": "4JCay7DWQecrAxqsFaGZ8f4UjzTb3SczU7g7eJj8CRTSagCyR2vMoBDkQYokY9ud1gQpBVGsgcgibyF8cLbvc23c",
  "key5": "2XnMWoED9kWUbCT9gZJ2rA8iULEeoSZMA9v8okujMmp9brVcPPDxhLnCThQyvAvh8Vub1fyinbRfjFJVzv2j6wdK",
  "key6": "48aSCUPGGwTv2Na26bDmXqJ3HNdXSNg7EDXCPKZZmuB6VSdDQJigC6FNpNpDBeVyVPEcdFtS9tfhi9GD7VZ4EkHz",
  "key7": "5WfV7kfvuFetbU5LNG7GQw8Sqn5iviLfaKexjyPwb8cxx8dSUdvMrqA7EBRLNQ4iqFynNsQkNSKVgz8CcJq9ZQYa",
  "key8": "5MjhwadpXwBAGwwVsZkTvmZntiAo9H837LJvc1NNJZGAwccRNEjNAaGyF1AP4S1xMFcNCqJcpEXvoe6hVH6sEs4i",
  "key9": "4ffpzdyBmmgdtHP22ZQWsqYNPL3btXYxaHNySAbjQWiipD83xLG9uRohcJ5XHxQyjGRcMLi4g2j4vqVZj7FsdUsx",
  "key10": "2kQXhSuBpbyjinYBKXVRBazkDSVEmHgnq5MTNystE8xLt151kWNnyydU6DzyA83C5Ny4sNmmVesmuVwgcj3Ag14c",
  "key11": "2gjUYxrHcHERzr7K4G95zbCDtXMkZqLPNxgX4DxNEHUnS6KhyhVngLphxKxxzYNUuZRAhxr2nCZhVhmGu3bDJha5",
  "key12": "3QjajjZedXayDY7S19N1NHCP1NtNp7BrTyZ9jeDnsUeFQzRavfmMYQ7rn1vSVJfpMe9S1UFpmyk3pEmaFPg9Avb3",
  "key13": "5R9nGnU3U9Mgi89AWKkoepfrphGX5eu3QMYftjk38gjbWT7RqduagGM1dgVxCWWt2b41XVYFcM2HarSyjcH67H6k",
  "key14": "3vcE2YUyhH2kjdT4YgVXb9h2ncGbMiwSb2T1V6K9qhKkGcPiXKBu78B4KrA9RHKkX3SiZbCGw8sSoz1KC2d1yc1t",
  "key15": "49zXVQHs2tc4QiVUFBAiMtZXYrYTBpAkkvC1rLZxh6FGhEs8rThC3qhooYFmSf6hyqsRA7Nt61quWiajY4wm44q3",
  "key16": "5u7p5MUrRR93pLQ8eeMtnzHmmqMg2wkpvCVuTW59Cwkx47UZuFwzB6mjqBbXAskm4qd6buX9fFjSdZzkDFCa6PkW",
  "key17": "3p8HxvNLhicVaQEKYe3naLiQ5RzWaJm3yXDA3bVuchH775usqzYrAiMV1kb8QCPjc5GzNvp1eswf69quW5r2imuK",
  "key18": "qYrUaRWGmRLazQvh6CqYBupTNbKnE5wGX3vSksnoK4eNJXQcggV68V1VxG5xN4q6F1zFow7TpnhgTe79VqoGYeH",
  "key19": "4rh1D9CqcT9iu23dPSf6gspsvNFn2X8A43MLcgHippZaiv88iCZgJPcqayfcamJGgJNYTiTxTj5TJjnP1sWStb4",
  "key20": "8mtik8iBFu3MfKd3TtCwrk4P9qGh3FixVUc3Aatz5jm1RW5YqVwyyk6UqoGLMdJXJzgaKUJjjqyb5qoPUC1xnzt",
  "key21": "2jUMgRxEex1kKYrkAftJ1MFmrxc6zZ8DFU2GeKqJtZ7TpggWg4LcRESK3t3PjK3UY2BMCpyrJpTTUsTv6chBM6VJ",
  "key22": "5HtjM4NSP64XTZqetA1CJrY2o4TBGEKbj4hdQKGccFxxSRX1zADkTaa7rQYpZp5KYo31WktQozh5QuahiyyXPdWE",
  "key23": "bxboxWYzwryHG2r4YqsRZ5W8ybaSXnuSphWbb1LsVGnZhGbeqwU7AzvrMEJNDqQcTFhp14jwWJ4i4hNXdExqVaT",
  "key24": "2pSaUzBipwKNPbVY6dVUTCgqZZvPycbVZaoKY7nhYrzDhF2YnKRWHNv41S5mbS7hKHWUgtatPdpwFi1qUZftPbj7",
  "key25": "MpQncWwqkEUFEuuocmiDDoBYPB1dvVczkfzjurHDzNUA1VtmbkKjJLUmmCCcagfzGUbkLNhLCk9234C1dtNYAne",
  "key26": "cUVr8CkBwGVxq86YpdGoAkBjcX8xJ4LSaXtuqMdZUe8B3AxZdgYNHtYGzLtLvQQuJFwKkmERawntVgTCL7DTwKZ"
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
