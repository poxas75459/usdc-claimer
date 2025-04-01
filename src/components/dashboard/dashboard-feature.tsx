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
    "3H4B1JdsZcSe8FmCgDv4kgqBUPH97rfrt6uwiWvJ6eAb31iseit1L48gx2kzJA69HWYxqdCoo2SUJkcmu5dEuGb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDt4fwkUnf3NG4NCDdrEYwU3khqW8dqM1jagZ3mmbeXP6Bh3q6TsKaZucVWzyPStXscyfNvN1cipE9KpgzsmAkw",
  "key1": "2xZ2tNpE95dJ2pWR8S3AuaUeHq6mAV8AMusPfj76eYaUgcJpmvkqFLArRsgiSeqTkjrFW4MoULihX8nKkBMLqfnB",
  "key2": "4mngTCLFBLULb8HguxAtqcDBHHwQuJG6YbqYasVfxFFSQBaPhcozqKE6m9FFDegiFqdF4xj2jWtVF7Ej33eY1qGE",
  "key3": "3YjY1d8zDviixJrSRaFkBPANbcqsmH3bMwj4t13Nf5UAi6JLbvMFdtDuLCzpWK58dRBjfWTkcwAHaZCNJ6RiAvWD",
  "key4": "5EQpDinyyfQD4Sg5gf3SMZxjy56KgWgcN6kX3ixGf5D8pykGq6mzaRHLn6jaCjM5tSVTpdNUYtERfBz8ib8CzuQ6",
  "key5": "4KPY8dXBYbyPbanLpw1cCJGCXKPiuCVZ8UxtYym3saMHALJk12HY34i8riUgTYQKVhLmugYmMvc7vfKwpPNMcPkG",
  "key6": "6xHE3CBoJoxpDfFoUcPJhDXj7jGuBNZ7AfToinYFWexBmDUY8Xa66aps5AbZUNMmJgVDS33BjwgLR8Cciyy71G7",
  "key7": "5GgVFSRFtsifvzfVfHxLUoZcDcAn7c27GHJLtRpXU7KMpSNdqfuqx2gQTmTsXiLL2HFFyxKk79snqmRoAQ1SvvoD",
  "key8": "2eis4wBRc2F17JfqNgmtTgYbuZG7WsbzckxmoW78Z5whANozTMSJkCUYq86kNHVBy7tah2nUWt8QdAou2qWNb2vG",
  "key9": "5jyNSPCe82BecATXVBkWP7V2nRmMs5SKV2BXeAiMSjbYAFsn8n1StLzqheHRsxZhogHbkAG9w8z1owqKh69QdzQJ",
  "key10": "2ub4d1Z3RihA8Gtq1498cUddEvAjnA1WmSyWZp3pd9CMtashNqLkcF47XBdLKwMucWoepGCtZue8XHoCvjG3iRSc",
  "key11": "5KbLEgPvz2BpRKUMrKqVb2aJzD8UmvS3ZvA1dbCLAVsPUakRx91ASy3SgqadiV7YsdT6zvVTGx9ZTMNnwAqEtq94",
  "key12": "4Z5fqp5oDXVbWhi3dwhLo4c2rGqiyHk6fvKSwwZVEt6HB2DtKDiMm5YAeCvZSvyunEFzzTn64qjRofiycpY7qUUL",
  "key13": "67ZVGoakPvzEFkVAh6mRBNeNgMH8nzPGRNVYB8bdgagzqqxyEcKcwutXrrrBz9sm8bGTGs2RF6dhKVXSHAgXtTpQ",
  "key14": "31k5xVxAqbfJqdCGbA4n4r2bE8hB2gon1qdRGRVrcjRG51YskbYaucc7RZUmPfgvPsED9CHdkBEFZWSywNZvCX3n",
  "key15": "49tJDYGiGXDBiBDTb5zCC2BJzYYBwDa2N1B3P8FBw8vpucvQoefnEuMQQ4NKfQG4K4uzVo7WKNKvWrPTGsUcDFkr",
  "key16": "3H7iGPJidyXGsxxAmdAsXfS3giarprxadxrqbNaaTMXrPLrAcrB2jFTqdpxCCaDmCCPoqa64fCN3TUegjQpcmqYA",
  "key17": "2PdJVdPVSxmvraVfyNYYViVmMApStnRMksTCxad23GMDwRHf4UVSmfosDM966zej9AyHmPxqd5YWs2xBmkF9Bs6j",
  "key18": "4JJDzXEhubPvJruFzQmYRav5d1uHQgByyJYqzDuoMoAWVAjABLhV9RgXyYcyLwii5Qf73N6fMENPXZmNvVQWnEeG",
  "key19": "abgT23wQB6oJny2YXt54Lkam2gpMXiNrvaQP8rrsA5EnPbzka4Jz9YFBKdwJT19RvhcCHsvu8FkdJqCc7Fi2r8k",
  "key20": "36m8H3m2nHbjbzXHbVMUGnVfSpEH4R64i2SZizAiLaHEbjz9M7cgPbRmD3wGEPJJ9dSeBHKfLf1Lp6PyfpmCw8Ay",
  "key21": "YokKFK9dLE5dggeCsni1ktgtkxMwbDvixoR3EuGM7NawQvh33RihsJFT6JEH1yunsqcJS7aaA1s3eXyY5hAJo4e",
  "key22": "2tHgc82ZYx7LwUsdWpX5XJokUzsQLkXoPsNvQmRSFbpemi1SYukqEhPYtGiipFE6PmtBbKpVjDvgwEwFtsyEpiTn",
  "key23": "5RGmBTikvtwWiRukrZntkCEgjgGAv5DCPtKRhWtGxQhdpXTbmZyZjfmxC6q375ka5jKPzpBN1YmzHTTtFmGEm7RK",
  "key24": "FSqDZK3yqezx6vjJg44pMeMQ5DqDQRzWskMUxctuYkZx9uanh9nPH7j8TxCEQCjPzVF553hPmkphEvzBaEuAru9",
  "key25": "21AuGcadZHiS8yX2UjCJiRZVFcAmpDWDTmK3CWSWyEWdnPGNPAPhTSvrhfEUq343YBNeQTtzbT2XzFGkVnBx75oQ",
  "key26": "3tJzM56mLveSBA7cM7RqCQsVudoFZ2wFJGN2Z1qTaodxAPvrSffjYaQ4LJyJM3LdDpzxwz8cmjz5pkN2gcmiawon",
  "key27": "212ugkxaunsLXswjQWk3zuQAb5fGuuabMMwnWtM6zpLJibEcvoWzdzqpnwrVK7Ay3B5yAzjQprsWstcgGW6TdeSL",
  "key28": "3cnqM6FCkRCLgRAr3xujk3gSsHoSqdnoLhe93p6sjo7aZ9nwSPKkBBK9qzqTJBJTsEbU6nDooSyTKkwcjhqceepo",
  "key29": "9aYYYQJeLwXkwZ6hYd9i5QRq4y4Cmme1cTESAx1rMntmJiwzKaa1NqGEV4V32qBpeS1BK69ZN7oWQWwTw47kQeg"
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
