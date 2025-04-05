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
    "4nZdfkcykxcMe1kA285v5DGj6vzThDFQUvGzerg2rYkgy8obEEfyjzpR3Wr5Y8vzqBWzdNjzpSJ9vDp5oZRhZPPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxZpsRp7bqj3siDyyLbFbxRGtutQjfuANeviYB599S6w4VckGCPFTy1RLHoqJ7ThgxqGhURiZpjGoCU1CQxkvq2",
  "key1": "5CpvejkoUbczobfckAuBe1YJq4LJ3uEjd5c7FFMMA3Q8FxdYoqAxL5LPfMjZwP8ceNancVcVHFRt6VyDxFBPxmbM",
  "key2": "46Qg2CY7nb2ZVcrpRDaMTDA7mPdmFZxiCG9Jp5UBr2XSFMm9EQ2LJjPw8VCgqFXKmpv5TdPPpWSCWCPM7pa9rwDU",
  "key3": "xvx4uKb1wTd1nGKu4QeFv8n2QLdmrsgbTdfGNetpwP5TFAf9ziL6hv4WuwrwWGWm6ZDLLN4Zoq3SpE7ukkwETSU",
  "key4": "4ZCFkkYSudwJpGCvU3TYMnqQTp9wCqhwY5sTe8SZVXPQBB3jX1dNYGEuCLmBk4MNrqM17ixyqC4ppCmbWdqKQJsA",
  "key5": "ivpmJBaRGn5iPQJ4HFeb9MxJPQ4L4mE8cGVdCvqzUiYqA1C7MQXPaiwzzCRN755ny13Q1TwErLFcbWjTS2TjSXS",
  "key6": "4ZyLQdoqhnXBtj7S8qjHy738RnH6jYpTBJobwwSbCsck3DWAMhqJjVqEkZ1BB4WdTDToTFcpyHPQGq4pcLPDaHRY",
  "key7": "61g9HgVyv1o1YKMmg28i31XnvZWd4cfPKaYTMFqu1CMCUvmr1T1fiWrnSWdpZQUj78qW2UDLbRrd9D9U9x2o8wi3",
  "key8": "2nj1DKYiWqSDm1qLzCrN2bV1gWia9zJqrNLrUE8pkC6doc3eH3PYJBqgSzHWXykd7brEnEgr1cSF29oTQiiPBF6i",
  "key9": "3VnwsCZJ9Cg4zyGgZLwWY2HVu3QnPSqk6tsJUuhNF3wbw8tiFNEVfEX11m3DXQnPczuspeJH8b9JHGeqydZRgv4C",
  "key10": "47939gXtMiYAvezSq7n9cDSPA6zio1PYGYtynDr4QjQEoe5bNGgRrSDhj6gng6gZQjpURRMi9jXGfAKoZJZaaTCW",
  "key11": "2iBSqsCR3vv1FZPoNL9U9uJycyGiXEMn1yau7NQc8BgswxHMGKVywKDeY3pgwULBgqyxs8W7cUw3an73oeWhDWr9",
  "key12": "4MmzdJ45BR6xq9zCfoUzUDjP5N3i17tZdxoR56p9X3VzzVsUvYpFtkak67uYg4E8qG2yAfNXvAbaJAbtbmTatFBA",
  "key13": "CgtT1NVCjtm4mjVAKohD63EByvT62X5B68hwUpx4mnPKtD6oQXNTw5ar15EKyaUy2zXghExmgoxTxus6XMZbocS",
  "key14": "3Ty6xPh2NK4HH35cJr3mpKd9Gn6X1DPeQ156a4Z7JXn35Vw3AL6d7nNqdrqYwU5wxMe7Ue4S1hzqGXqh9i3VAJVs",
  "key15": "25essDfyAGiiY1fGoptXXeGM3pSqsoR85Wtpw1pHHJaCnQViUh33uBftS9P61zjgNDSKWXBXUBzVdsJcyTPwpHqR",
  "key16": "5UGF6U3fEFp93tXqgn2BCnYji5uGLQmru37wSokECQ3cAmNmRZfHdZ8VWwWDZQNY64Lvvnjv8YPfWvNJiMUL5sXP",
  "key17": "3msDa3rcAmiGcFMU3p2CbX8g8EhTRa2nucwqWNjzFBDbBxCiWWWBLDReyMn5DBJw9AT7j648YZDzvu8ZsWyShd4v",
  "key18": "5NMyCJ3NVLLBJXzT7sV2oQN133DX3EjBdxj9hAVW4kTQngG2rkL6bt51GUfJobZLakA6FeSaDRTakJhUdzMUqAjW",
  "key19": "3oNzPNmJL3XLeYmXB532CeDAgjHS3D2osE9UmthFBnucTyakFFJ5P7Rxp6MaxcuREUGQxAnhfKioFR6ke5djUaNL",
  "key20": "CLCmF4pBSA1hBa7FPCLzSHGj2wv5E7Q1KJKHmtxBn7JxfGNgDHvUXeAK9FK3BBrycbh4ZguFPcriT8W25G1JceX",
  "key21": "2SpnHkNqAnd1ZjHZFSQayn4QSZRgCV96KFc1uMCsUx2dBAAtVq56F8pNgXDDGNVskfXsyfWGXWEHJxsXhxKC9yNd",
  "key22": "5ocywDSzvNc8Ze9qnVDsRwnc1KLiyPM6erwnQtk7owhY4WxR5pQYuMkwhyxMdaXzJyaZJnDpEuh1vFujZcJtHYg",
  "key23": "28HCBRdGkeyY1JiFv5a5byk6dFxZjfXCpB7pPzZHFUxBWKruTftp9rEYg4zzwRUpMTuQBgC4q7cEufnYMozBFc8y",
  "key24": "9p7fuFWhMDrR4pEeuvcTUH5irMuKAx9Raki7grJFuDSnHYJoxHMPX9c23dUvCkZttpTRVdTipwpuMxUEEdMn7X9",
  "key25": "42CHRb9A2ZzHo86D3Sz1Hi4unRXsgHt6HA761L63A2VouYpTHRSwnU4AL2k3MSWGyR9pvtcGKAQDMHH3qLhErv5Z",
  "key26": "5WVeiADPos1Lro6gBn3WSVSzPtMEu1VbP26CdXvfNY6sgxxbnhXX3M4xWaTyLfVR2ZPRGM4TiV4xToNS5m79dm9f"
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
