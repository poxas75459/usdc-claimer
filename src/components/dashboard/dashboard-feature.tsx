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
    "3WbGedXXCh7w1pnKFYts3CQYHLamaorrfuF5TYpxMnFjGYcPmnFqcMoDkK2Ucsyj4ZF9WKnGtK7negfXVE1DF2W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXentRAPo8jmVmtjKTmPR8CtQs8PA4YXpbbB6JG3ryXFupFm1pyCCed3tMZRE7aRMqQTnDrbi4QJkwEi7JTLA9f",
  "key1": "5KFUFWbDdXX2U2nZ8VGZf8ME3YjbRRCsEaP5y3xKg4xECrjrY5Crmd2JnMa9fCw48wzNy4Kq6CmgZPfc3sozP69d",
  "key2": "2Y7TSfNxzb64pwQSSE5VxxnHmPdm3TpDaMhpGUGPSDJ1DUqVZTTkLDSy4TXArFtFy4vo8mUj2oHy4ZNhxUijeUDK",
  "key3": "4QXuaKjkzhxCk2eNXq7jFJXGTUtHTc6XsP5bmH5cVVgipHniPh4vbD1bkt8rsaqZFeMUjvLdz8ji3b8FbTvewGZ3",
  "key4": "49sWZWvtGEwPpPUczWiVsTYXeL1quHesBCkJ8Q6NK6wMfKoj1SPaU7F2Yvvy5iUYx9mVPbdYCcNQyoxpuH3mLuwh",
  "key5": "4YrPgd4uScAMcGdDjxH5n2HCEfWhAnmJbRmTeqPzA6UFpRQaXHSJGjoQSt27yw5LojpuXupqgDtbaszYw7AGbNSX",
  "key6": "2h23NSmzapYwsdZ4eutXFHZJTtvuRjiHrqpgSKsLv1rPB1pzjSzYdEfw62rPrt8oPk6NGwn53ZeirVETz5tntVhb",
  "key7": "4AaGYk4XHgJQ1xpPKE8h8P4dSrpDXvdUfeFJhjFUsGVmsdyiv49gvgsJD3y1CBZKutZ8StEmMwZQvEJ6N5nuK45P",
  "key8": "2nVyRVpS8fhAvSp9dvsRBJqSRpnqDyMV1J7ErcGbUVFMT26Wc25rmw41iWQYcgs3UGyFRRt9JU58m5Z95vL7d6sC",
  "key9": "5am2s688MchpUaLgQqr9uY7Syc2kN25tspJyLiZcCUVyaiir3wM5poMAWAF1aqhDbtsDHPyFeoUJ49esVbWrAfoK",
  "key10": "41baXX2r3qRiSQvt1kQLr54nzdbm9MKdysQRxeB2pw2J7QVDzPfcLyFBSJSMbPmUSUqm94dRKLDKXvWMghYuTAqC",
  "key11": "2g597SGQpin2WpNUeyFLv1rRUcP1utVsLV7UneTd3MKE4NVm9vT8TGktaJRQB5MgyUyToL4AuKhYFpVcsz6QEwQz",
  "key12": "3hvXBkyT3WYK5Gf3Y8aFFSG1HBr3UiePQJJxNCF4W8nJy3PBW7okZ74pMoGcHDHAqRJr3F4BQopnb9JfSuDUptjD",
  "key13": "422LQ8apeag1vPtKPaA49aorsBnxJbStVZuX9D9hYGoRzureaZneZ8gaBTNQxDEVwruaV9EJLczJyDc2v2PXnqcg",
  "key14": "jfzAGzarZfaW2JDaAFcLewkZmYE8YYM7QSKfRQANBQH28rcLAeZ1M64cRLW781FwD8gVTUSh6NBs53z1VELzhU4",
  "key15": "4MUEifByywV54ZnF2kpLGrsWjfH12CvHQ6YPfp5XQ6ee4XPJrB8ukXtGaM2D6XnCNJSzFCeembY5dDHe23nxq8vA",
  "key16": "3sP2c16Mb7Lb3uL3YkzPVKmNqvBmqfGsQHFK38hcmCa2MHNb2uPxs1MFAAV9EeRcCyUAQwgpagsLBkD9QgWB2vjy",
  "key17": "4zP7UiUMTEvP7U11CjAa57drjcLj5uf7kCNwGy8D6yrDy8r64obMxynFqDpRCpc4S66FJHTrDUW8EfRqJB3iXcXY",
  "key18": "4zPnRiwq6FWLt5eGXy1yo6N9ozps9UcPUyDUGQLSWk31adRxPDFETG6Phbf2MMbnNTZ2CSWQzCNZd5JpXs2L2jBh",
  "key19": "5fNyRvPYYqwnWJMTZVVCpFvv8NY6R9DMtvmzBQC8CauXNMbuZPU7EZvwECLuqswxGznVN4LgSDjkmx3z1TNvqANt",
  "key20": "2fS8ZyvxHcPEj51ku3qpJDu9UUy8L59CcPBreGqDagYCLFdGu5vKV17jAsw7jFZ1B9gunaz5FPKFCdRKqahnhzqV",
  "key21": "4D8YqSznJLnHf89RTSFWwM9u6KVrehZuG3WubZb32m6fosQLutYv1XEVRkVzB2s3AngsJs6ZW131AwC56iUM2pui",
  "key22": "3vYrYFrhpsc5kkmXCcAwtnfTBL7wyc8xS5SmbcT6tD342vco46PHQNQDtVXMbevnCd6NcbxhjmBcqFxnhQCoaQSQ",
  "key23": "4wnrwGPUYZp3hhF5G9BDA6xj95mmtC1Q6zFziKLDZT8KvdAZGNZSdfvbTYBUuYNVNEi9Fav8R49x5crX39dyLbUK",
  "key24": "kVzH4jAjrpNAXiGCZZPjJPFBUQjnGjZykrWBQ52k2nVVfq8Bu27s5vuRe8RMiTAjRYGmFDgEkZqtokm8pV6JzKo",
  "key25": "47keXCznHnrAHMvi6cGbgHVNgXvxPMENVB7gkTV4kwhbT2TmC77PPCoARAKmu9W6rNDF5jqf7XKBZVwSLET4sR76",
  "key26": "3aG8RPiPnqM1FGcGBdeZw1B49RSrnz5dHMNe7x1WcXojQvi4ijBDiRJYmrd9p5RVVrWiefNAPWfBSxPLzpoM4ZKu"
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
