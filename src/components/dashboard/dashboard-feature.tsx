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
    "2JjvccswshtbPmQxh973VBYQ1Xv1a22nDzs6x6hNHRqm4br2ogkDdRypb5enfKSEXM6mvVPba4zdmGRkPKAA9E5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65t7qiDWdEqSxPwmaefZn5iQcyivw1dwY5MtfFRUe9KvvdAc4QXJdPNHnCVmzmeA5JWhEZkuJdkgqgqcyYc58t3i",
  "key1": "2tmaUvipcgKhT53Nsf5hUjYxUuf42kHJEtiFu6kVWZPCtrwKyWxQtvXxRdaNtBCX5Jd8L3c6Q88gHEecgSBmhxMQ",
  "key2": "475he1dqjHBjqcr6dp8czp5A43xau4z9RKRvXsDZ3CNhyGhS41P7p8pHqwgG5N2PTqBctSfzRdrFMPC9C2jbKEGq",
  "key3": "3vNYJ5AJNwaWekkuh3JJvNkRJFtJg9KY1U7Fz956M6JJZUDcfq6ihFxDpFDSDT9QFAoPvZwUAoUmHHciHC719SiR",
  "key4": "4vR1n2e1ioVvEy2AhT8FjD1Y1whrPzoaYXxbqscU6FtugJ9DF18jaFjtEsKEfVfsBE9n5mHkP1sedf56ZyfKsJ9d",
  "key5": "46rsi31UcAwbJDu3KGWv1CHdA8UDfK6KxULHHPdBCbCvinje2MRzL64YpzKVZESWhmobaFK4n16vN39Gn7iH9vL7",
  "key6": "35hDB46sLj47hJkiadHvL8w8RqTyaNtedgCDyjxTpSiPXFCQZQQ7FMLgqSGSCzBparA6vftagfdCphj3jH5gAsFn",
  "key7": "4ksaak1KEjGtQnFw7AUZsDWF3gEmghQyq7MNqpN9q9A1S6hCMpGtMN2jcBqbgHTPuuMBHdmMhyHg3r3omTJqCWEX",
  "key8": "2AU475ohUS8oYJdXeCE9raBWCRGvHdXXovHvL7op14tnzWo3Q4SBWZDsmL6bn42KjLqxG5HoXDajTChw23FpVtr3",
  "key9": "5D6c3CpwWp6EWJCjJJiEHzt7XSPNamrzQ3dahCAczDTMhrfwpWGZjCjT2iwkLckcPvkirJBxESNNRGzqUgHywenB",
  "key10": "3yp1TZUUXnvJY6kcHyKS5zgdzHa3dc8YuTynWWsCeQsfHBRRrPEcxGa2LayduAuiQ7UXLBTRBjpJ94XAC12qaEys",
  "key11": "4xGkyA5wwZwg36pMx9E6TAsT65ePo77T8yVEhc7a1zsopVvp7Dj5iTSHCPMo7Cm47SSXeQdxfBB1G63iUThWyN4z",
  "key12": "5FfX8JoJXn8NwKwwyYHd4y6MTvAj5Xhq3Asgb3VATe1kYivVf1hecPxe1PAYMmz94Z11gth8TzzmLJiEMxWJtix4",
  "key13": "PoACdF93pfdU1EXCcyr4ZKg5TY3Ddn2yezYnPvPkPU2n7ofwZES9YPCGNH6LhY9wSAwZ84Xey2Tb4VtXi9fEGrT",
  "key14": "2dVi5vWDTaGzcix4iyz9mLGPCCPjtEs1kbVXJki35TUmi34qDaPpy3vsiuVb2NEYfWLqBGp2jptUHNYqQaj9DcNH",
  "key15": "5tU2i83hRYjgUfoZLmDN4sgmTXpwApa3rPkT83mGqsgkF2pZaJd5Vnig8GwydwHxLPxpX51VT1voDrW7PY7EWXDe",
  "key16": "4d5aMJ3YWvRRjVaW7uLHLQh2h5VdBaDoyq3MVQvdH8iXSUoyvKhWDtPMecX3PRezsMfVYoWFm6AQsLJ5WaBCzGPM",
  "key17": "3LzAny3R9UfHivu1z4ur9QU5zLPu8AQSitTe42x5YQwrSHTMouUyZRitUZbW3USTwXbCSuSuQ7N8bgXZUDQPDSLQ",
  "key18": "5MtFMDP3FkMsvUTdRjmzdsD6ZRCZWwKCAq4RiGsX859fWTYQ1RzrQnT4Kp4dgxLezaBWxowDsaXcbBqLwPkpvoTe",
  "key19": "3j9w4KhJfvznws2ALG2XYZuWhuYChK7oZ2gARgc7oSb8isx2dmnAmUjenzDTxoEpS8DijpQtqdHbvZRsiLhGRFZp",
  "key20": "59PCPpWGtPV87XzMhsU8uX6Re6pfKmX6rysD3knJo23fCbHTBBkdA8hVua6c7eCe3KrQcz7tgzs2Ck4cDG4jDBSL",
  "key21": "3DqMi7VDLMqLS4QrpuRwWfXQYMPKSYZjAxvqS1sseATx4NznfXcF6sUPdL7avbR1YyrQR3ucPeujx8LhazmbTVAU",
  "key22": "wWERavwKELQotjpjTVrxhWPp8T6YYPZx4VorJsdZbVigmePpRnDCub8fo48i8aTantr8nkeujsNY4YtHrBDekaX",
  "key23": "4ZuVgtBFFtDnAxArGtktvmjBxeyDWm2cnphQtb7S6Zz1XxvERWpe7wqRrWEcRS3qWJnToe3RXvmp1Ltbreqm6WrL",
  "key24": "iFTo9MFQZFVrSAg9AVw1aVLkHxd2HpRaPHvSHpfXigEdhwqF5eXL1ZdLkrUatiWKxEcfB57coPbvWGUttWYC4Cu",
  "key25": "4Zi51cPQLagW61mFzeQh15hb4Wkmh5jdRgoPttbSp8ukwpkTm5Cf3tw58WHJaYtpkXUfvn5hPR9JsmnFSj4NX5DZ",
  "key26": "52nAFsLtsrt6wMzMjRBsBnz42DTP6mX3dqWHykLa9Pu9RoUvVP92mQzqvdX9zy54Nr427zcyChScosP5wzDyEz3R",
  "key27": "GP6cPQ6WoNg5J2VBhJa2meWiMCCMdrLbmBv32VPHaxF6tz9GAeVfx8fzg3ziCgooPk4JNcEnFzpZe8N95vWz9H8"
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
