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
    "1Lx7JAFTbcZAe7YRcXz5CPDiMGNEhh33yL4NXjgVvPrpyze7D8F3UbbzMACqdum4yijt9fu5Kauex63VKqXEVEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MdpEqsXRf6HZzfwGZnEuiq6VFBsHHXBz2vybD4WtCTznBpyQ8HGG7aA2mCt2DvFqkn51DM38y7UqkHq4WEsqJuv",
  "key1": "5t5m2tiRZiJ2TpsYbxPUSiPgM75MMqSKKVRDW7DmZmFMwdZno3SLLQtS22x2BVm3DEyyR52XChHbPQuCKj6YBRbr",
  "key2": "5esHgozat7NJ2bwjQvq4D6q3z5EfXjxBEYTg9rZP1HUSxZz6wjPzYaTr4NGKfNA7mAxwMAnsr7dhUzppnCCh872Z",
  "key3": "3bGgZxz5GYPFfQpJcHG4wfaABGbpkPmfEWGB9EedCt4Krez67t18vVhzJisgyDdKpnwZMv3USbZdDNpX1ME1oGmA",
  "key4": "zuszGFwjXBaGVQrVbM9N5nXZx3m4P4odVWw6CAqUYzvtHmpie8UKhev6UrEHZFEUqHE9kLzFZxhiNzE3TuGoYya",
  "key5": "2wLwyWr8xFStFwNoKpVHbngZ9skcxL5VfgtkLucAwWyhM4Sto7LWckqpij8xpWVKH6zGFLymbBGgL2fgFDKtLdxU",
  "key6": "xnrBpADu4kkUcJQBoDrbEDsEVCyhoT5VLwzCv8H2GmeCwf35pYnjjJczZ1J4XVmjQkDACHqk8VBzhTMJKnZ1BH7",
  "key7": "42vYa5LEeN5Kb9JF6ZLf5bYWUqsWYyvRd4MTgjf5cnq1A5Rar1M8eetRt5sbbAnU5LNkY1y9jzAQpWmEpkGQkanm",
  "key8": "4L2vnKF63NZAL8YNfaQzR8hTqdM1Bbr6MsnXNJDAp4fu13oGq1hmWUF68JYTL4pAuDUcwkS24HLXvSmTFsNJHsPZ",
  "key9": "3W58eB2ew714Yg7qDuW8g7KMExXW7U2Vg7HMmqqMa33RQjxjFnE6ZyNeadqJedLPjb62KUJsnK2MSEAWaK3HGjWs",
  "key10": "2tyYeYcEjJRPfYaXSd9jFKYt16CVsdH1zaPn8Hgd3QZ9QD1YWvLVK7BzBk2xb7XCLYgPBpF2UY6eUQzcid75M6Wa",
  "key11": "2gtYbxR2GBSFgEusJpFviLtUyHJprYAhmJfEsuHPDCeao6DBKtkVBWhcej4UtdrRLC9PxVcbVp2VKpNwUHg3QgrH",
  "key12": "32XE3hyhGuxjVnV2R5C3MFke7vQ8SNd41eNsXJroTnvqccNUFXm71LPEuyVGwFB17cdmHyYvavMRoMkCBjkGFoXB",
  "key13": "64yWFoZGyNtZ6h8W6fAVN79gfvjUQmTo2St9GsFCEaUfvDfEYh4g2ReQ4kJewy7E7mmuPcBPh7tRMdEKgtk9FvLu",
  "key14": "mPgUEKygDoaZv7HucKHwM6xqGnnNmUmogFtAJ7Na8tNHmzYS4gDEi3Mfse4VuNERxbaShtrwRrnpCzt2yGgJFCh",
  "key15": "4rdU4BhhL69Jd8vQqS4AYYmav69x2CzYcMnyH6Sq4PVvn6q1QtRxY91LFpeuG6vWAPoj15vcB1XrMVe41Ughp4gQ",
  "key16": "5y7ypojX9uyKANAujWcoWbSwYSguPume3vZh2S3ApDoCDHh3rsYpASZkUwxf1gMbmGbHtsYTpTbWHivmAZXsQWb5",
  "key17": "2AWu7M2ThD8sG1q9BYXqVeRAi7n4y7kn8x5sh16bXXY7eema4FSxStjY9rjzJan9nmr3674Ns8LopECDhz7YUdCQ",
  "key18": "yqRect2f7hXVhjtK3jpYdtGexDjYZbxe2hZhwUrts6fdBSx8a4TPTPb1D2CAmo5crpors1Atkao53hNk2fwkkYM",
  "key19": "2wrs9LzbjD32muzNFN1dBn2hdj5qDdBdMgFnGr5vT6uE8uqFuujfRAyXEHzu5asPiA3Ery1qZDSh7YK59Z9QCN8m",
  "key20": "4Brabj9Qdfr8NUEPnff6pToeuyPJHMY8m6KMYJbqB8ZHdNjrLqDBnuZJkJVK7TmpJfeFUP1kHa3oTdCS7uVouMSf",
  "key21": "5epbmdqYssVFSkoZfDT8n7KQYbDAjV1rJtrqqiNRiTdHmHnV17S92WKA4KWhQhTGprNM4f46mfzmuvCdKJntKnFF",
  "key22": "3PfePRi44ATVGmWi6FhmDGsDmqa2qPwkXtJ3r6NCfy6nZDtSyhJL4yJmMRD28hHrXnk626WQsjpY8t9KY4u6XMo4",
  "key23": "38W3CiDCbhDF4sTNmtvyGkFFhz2zWbpUFt2WqySDkxczFkPHVnYdVeqcPmpUTVnAxvwRC3yJbWZ7mToF9z5dWawu",
  "key24": "4SJgu7raGLuZTeX9eg5kPYZyu2PdveVYY5qz3pgdSftiJ8L9Weiur9u4k1Th1v7qVKope9fz8zqArpDoNcwVDHfV",
  "key25": "3GsymY3jjv7yvk4CetJSk8r25pqAeXkq1tqkDHSVFqtoRdEnbqgWaJYYLUEJDRwja429AwqwrvgNWUoCfga7qm4K",
  "key26": "4v35e862QDcUyMCJ1rV94wdM5FLUMSY5CTtHV3k7jPhMZ4bEvEUCZ7m3DEDjXzcgzkECS6ga3Xy2oJugnD5XFez5"
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
