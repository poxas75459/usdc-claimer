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
    "4pnUgwnTtQ49h5tXE2xbCijc4EkPtpAfoXe2mMrxRFvEDeJabqdBHu5aPWVUWFUuJuBu5Harpg5kpqNPQnuFHYoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKC1rX5q6G1H4BjgQeSswVmEecT1oWkiHKDMU5M33ZafP3Lu6KN6T5qaq7qPobKCKcbEAdZCMzQmfoHZo8ge8ZB",
  "key1": "3QhVoweUtGwLzpCL1fMHGNhMtW1bbf7ytm2EwMaLLxre4TQc9BdpwjMswuZq9wzJJ92RNDdho6Kq5qK1DXyx8hsS",
  "key2": "2sF9WGnkUBcErybhN4N2YrACjdP3Kj77iiG1ebYe5qEEWYpTowqfuz3T2ubYa3Ae7iUUkFxMuC4KHALMABrgMFK5",
  "key3": "2uv8JWh28L9XxDgsG3pMLEyjrm98t7eptvjShfe32mSR76x1NCtVkUYgwxYxby9BA9eoAYYkuY3kUPYKFcPguGe9",
  "key4": "5Qw4UrRCRmvd32pShjLv9ZPvn3mqbc1w5p4eRYHm7Dib21xZf5BAJ7oCb4Wp7XJadLsSTRH2n3Uf8SYCiNmS3Bzo",
  "key5": "4Ps5d1BnFrpR6YJ1aoUAqiFexoAwLtWYbCh5F32XjiE3evpR21Hg81vssxkZc5iZA243T1DoZWmsSu4cJiCB4aH2",
  "key6": "4ZgMNAZSESGhM7CMiXB62KtCh71zmbXjikMJNvtFnWyKByVeQY2AB1F4ESBrDMSNqhSqpkERQgoNneSSQFZziurE",
  "key7": "5YKViGtSYTbJ6AtBmsmon7i7FCxrgr1otNFQ2BNQ3NetU1LmLh8EsPGTwT7BMDihQ5xLzqtnGkicjjQpz8fK5L1v",
  "key8": "5KpPJ4qWDHpNP63TsM1tYJXfmj2tYCbWceEn6Kv2bFdztd4VjWLVge4C4UkrECQxCPCHoqpFdmvE5j8gHd9382FQ",
  "key9": "2vWsYSNHNzK6QrZCR6U1N456TsoBxHfgxiUSLxNf9wrvCSpStB5P8wKtkNYtn9jAba7ZDnazzkJMjfWT7T91DBeW",
  "key10": "2uUCNnYuztmYsiiCp5rxkzd1htYhvhi7E4sHbqUsfnEe6WhTpJV6QbdUBWef7p4ZokjtUzpD5FrNhEUqkb2A4rJi",
  "key11": "9UWNjBubmuqmxrBWCSayfnEzd5EpRhgGZVLxb3Stu5zzQR1ocW4YqspUvQJEV3MMKFCgEiYpsqK6NinnEmfaqyL",
  "key12": "59xoRDzzWz6xcTGyupV46Uxnr5sP7sC2jyTbFzavyursHhhgTdfGE151mrEp6xq25BHfrLnJ5JG5X5WYtvs5PvEQ",
  "key13": "2GNW2Lo1FLejPqrdhcKbMjdzNDZPhQxxy8hFCx5nR6kLVwem79q77RgrjQKtpKa6KAqvNvhnyBepDhcJm7jfdvdC",
  "key14": "YuBPrTd7mW5Ch6sHHGdgVFK2iE8Bfh5RkRmnQCML7yk7hTgsAzSmNA18fEvFAy43DNgdMtLrzEbjPXeA49i4DcQ",
  "key15": "4nfAo78VSuaoakx1i1yDdarP2kZ5vuGYAEAXDoviQakkmcg2ChmskAp5tXaxirumv75ZfqsDkcMoUw4qHz3tnpwP",
  "key16": "4DDCNAeCfjhpyPk1QSU8CHVHXVuR3QphyFuwySeHyVxX9mrSEGUFEk1xTu11z235cPLBLy4H68pGs2yPh6UsfTKW",
  "key17": "5XGgwnztT3Q8BgkVh5ieFqGqkE3qtTUBjJW5HuTwnrUn3AzXLe9K9QmbUQkaceKC3QFFDdAfZTRycRao2eKo7mR9",
  "key18": "9RDGegRfqd7JL57Ae1rsSA9YQUdKmJtunSXL2QsqzC4Za3wECFeYuYw6NbsiHPdA7eDD6zn2YnJ2Fewc5FsDKFg",
  "key19": "CtNvFpm9JDZ73MjRB3foMRRHjQHLt5iVKDj87V1m2v6CdmkBfRoNrLaEUy4i7kinoJnhx9FD6r9qCk5HeES4v8d",
  "key20": "64tNEM3fcP3BoiPR1Y3B61bUx5cHaVDbUCdjXMg785TFkSECQ3GadgwU2MzYSf9GtQakrGW5T7pVbYuGs9d6dmdc",
  "key21": "4p6sfsewqYfvYMkvtxrr676ZaGUfo2jzYgucKJSMwm28SNffN1NcxmdYiuqx1CVdobw29gUyWdSWX66DVUrDryHU",
  "key22": "4zGWjQvdT19uYR4L3jDUniX3BRzcLJ1et6GpipuM1Za75c5S4vz6DyqvmKw37KeFE7hQoRK1YbizBoktT3dTZ16N",
  "key23": "2vTvMxGBCa5A2Gc5YB7QEwFCTV7QfRt8jbPY4PpP6evYcDkTZwJjGhfJ1Qd7VRHmmni8raF9u2VX1QKdHAjeXaxz",
  "key24": "5YBWpBSDKKwzqYpisf6T2QEuA76qKLrw8MTApzMmS9Zs2VsTEUCbFZNNMeRLQVr5c97XgtJAkLX2x4PEwc4wXy6F"
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
