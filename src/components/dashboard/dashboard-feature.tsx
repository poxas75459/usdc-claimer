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
    "RsEaeFUXdDoAfQXz4QPmFFVW8UHDmjg67f5LTsXX6hXbCXwNq8fjsXsLrbk1zqaR5FwnMdoGpQsJA6X1mFToH7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41LWbfHzwVZp3vNXGiLEwbpnKfGJx3cAdNDec2w3KfUcNFQVJqmUhrtCNuzXLbmHnM4q2iuwpv5z233vyabg9YJ4",
  "key1": "4kxqiAtJ4Mr2ZJtyRixF4qeb7gtsca66NQA3Js4SNdkDUSRzHzJ4vTck6jjiqRvFGzWS5GdxLM1hUfP3o4FeRSYV",
  "key2": "4AWLYUUKzn6FpzzEj47G2gp8Xc6oTUQn34C4pfhrpwsBfYjW3wp2L6DVBWPm57hPdRoZkJivB9Zeaz2M9Eqx3J8j",
  "key3": "soJUxvSfqr5oesmZmUKNDVh9poRy9g8B1QZChfeTGdv6riQ91L6hA5Qa1NezNEpsT5oERT6ha6o9AjFYV1xrwu9",
  "key4": "Nb5UcHCFNjStmr5oA8SjoP6GD8WxbNCZ5PDaDM58u93WnEFXkZhLnVdkNWaRe9TrEk9zwneNsvVhcUmG69ZBoHV",
  "key5": "2wmn4mxJ5ycHVmjmieJrcFa7KhsKH4Boc94x2pDmH8oBhZrsyQ8KcYBg6gGHdt6s3y8ZSGT3kgd18v2khBzpwiFo",
  "key6": "5aBnPT99p3H7pJrpJLGgMGN7f9NTBbx98f1QdLEnrTqPqadDcGwkXNQRYAYD9wfz1Diq2iUgfLRzzv65YWropTC4",
  "key7": "3jzA2r8N7gKqvQAthdCUR2uPcW83TNcdD7UAEyNT5nUd9HnFXRCBBMTutEXq3x7ary6KhNn6EPmmniZSqVVQW8UE",
  "key8": "EYKkX2KhbxV2W3qgK7JKy4iLdo9PHrxnkRSGHfGRDxhEkVssDE3U3ktML5D3piy1Cip2kj1uvuzTjdm2iopE4Rh",
  "key9": "qpVfQvze35kZDHYEFH39UJBWQcVXCaMMUE4sghSDBuNDueuRn4g6PDJUwDwYgDgEMDEiUScEBBNP6jXoENMAFgU",
  "key10": "4MGDFJcXyeauxmzcZyWZhDrFudoxB5WNWzRiHJmhHSkLkTezrvsTVHf9kB1RuDVe61n6U2dpuVm5PpGHBwpizj3K",
  "key11": "67LqNXCYoAMAxPJ39tshQTooEaCTDPMcJ7CijKVg63xe2p75dD9jwVu6fzKac5RACgpjrsbhmhciwzmzjFxEXVys",
  "key12": "2yTTtpRGxi7LBxXjX5xQLLx63uXT7bQ7gJ6cGqL7E6DC5zQ29v2mgseHdW63qtfPfg5Kx562nQLgw7iCgz5oxPXe",
  "key13": "3vVvzyWSsXoLugKnq2odfoqayAqqFYyxwWc9oNRc3HHVhfx2hxgHh4vydVe8y3CoFsQEGDwzatqFATFeoG3wRv3y",
  "key14": "3CsCGeyTay7BRGZsnNfsMLs7Wtsci9us9kTFzyvDmzVy6zy3kYnoreajtmENuVH6UbbjFm4rvUmiMwjuPuBQLWst",
  "key15": "2x21u59fHvSmqgX1JDTmso1mv6i1WKZkK9kBwDB43CtY6Te283bKFwPmiLDwRvdZYUKucFJmp6nQ4LgGXTZAZRB1",
  "key16": "3YhRX9NBJ9RNLtEvoztN4q4TAW3UAcnELpG26WjAeumHrDAgAxDHbT2JTg6gnpvCtDeZ2JxCo5Aqhv1EumFEuR5u",
  "key17": "4bgQDsPwSRpz3dQxToUaLAugqpXdQcAZHAXFw7Hych6UXj32N6ZXbiB4YyycyYMyAnCg91EnqswhXGd914g1w9iZ",
  "key18": "2AAyCregWxRbngH6ZY6KLrXxyxnsgHYH9fFAfQTXBU4D6Rsx3uTvQUXsN6mEm5Bx6bCEhsV4NKbaC3Z4L9vd9npA",
  "key19": "2kFMGiehjJ4cG58kuq63q78pWr1pnSBycuhbNqCnW8tSks4yzviVDUqEYemsm13wmfBpRZx2pmhznNhXMbLPFUsm",
  "key20": "2e83KQpo7xvKMEXhU4LRrtJ7X1RxoLD4rZf1SqacuqQBmos8wSBSbncZdAnKfS5uSw6Atwesfh7bHkbrPtBgUjch",
  "key21": "HzrRSVA6zJwtJ9QiT1jthwv4zmd5Dhws8P7oo6ciBwnCFWgwR1krv1AuMdrbug1BybBKK5QHGn5x9q6RzVs1gsa",
  "key22": "4VFBH5CuWsVTa4nHfXLGPkk3wDxL7TiBxE3mcRXtVBAGZ7qSX6Xm2yqBa8euNXLzFdq8RuZNDWNRquwY84HP55YD",
  "key23": "23J2pE3E4TPbwfSAJF4goXUohwnqpj9YxqcCAQ7TzVkAp6wAk1scBPKgZPmWgUR4GTsgjyadQEyLnpd9iXca8cjf",
  "key24": "38WGbdDRSwE7tRFSD4Lfo54DMMrmPP9XS8pqeQhBuKoAC2xwTWecfM9gpazDYCYraeUt2kH1AHFECDScrwqNbXvM",
  "key25": "zDWWXg3omEKQCnq2QjFqikKdbgHvuMjRTL1RdMbSuVx359RQmzHm9EficvwZMrKNThUjbWQKcm9U6rgupS2mxbT",
  "key26": "5JyoaRwMnvqyyC9A8Cc6xmtejxTrx7rPbv89nz9X1bZDBcN535MvZJxAyd9mt7GgT4Fiw1B9a3dj4j3LNrzUWMN1",
  "key27": "3mVWcpofgkfk8z9BJJRAUSFaww6zVbAMtjzj6zMamWpu5tUG5XbkmAWW3wvK9CWzgrVGSzzcUttgGQ4xmv92wqz7",
  "key28": "5twxnwJ8cL5kmH8GHGKdc26t7EF4BaXiEATXZFPPo5GhD4RnLG8RCpEmVuzVEhmQuKGfvya4JK3KJSAtyfpTQMS6",
  "key29": "5sXEmrpRKFXFChdGBSRYiht4SooQj4yHwN4NCkYakLgiR8YcvkGr9P6Na2N1pfyUdXqfXE28fx3eKeUozQS7MjHA",
  "key30": "RzpUrmkpBXp2ciLBaWeQwxUUZPyP1xotNGEZZXgBhpJuWitkxynsMJMUBJYbyeqQW3khC2F9ka2DQ5ZgMsXdHXS",
  "key31": "3Cci8J6L43FSPTxmdVpKC518gFPaUnhEWNeN6vss8BUrGJCLMKxXMsFs3t3z8VeSdGZb9AKWUrMcJuZx9SJG5Eqa",
  "key32": "nMhmaawfiZRygVbdutsCKf6by6mgmv6PiRd5WjasoTV8s95V616X4ePi5Qg5MbbtJiCNj4FKYfSed5fSkLprGH7",
  "key33": "Tk1aHsrvXJ34QF5M5MjFpiuhcBsPrYAFiagZ994Gy71MprXJaX4eXMEA4TsG2p3nbh9BvqDPu4D3HW3C548C4Q7",
  "key34": "3C2iEeGggZcvBuBWEVaQeSLmgT1mH8HsJsTfBroee9p9nxsLReopKeGqXvgo3U4ZJdACntseChSW5F9hK3jSb49",
  "key35": "WLiuqRWL7VnHFFEQ8JfActZeC7tKxPRuAs8sAN9qgih3bs6zPCiULsZdJoKA6A71NnVoYPzWhp4Knzdzgvw4iYN",
  "key36": "4sw1Gd4tLVinydatYFF5ktNJ4FnbZBU4Zo4bTGUNFK7JU534S4uw3B63fNvvNqAePs8ysdb3rR6GtPwp6NXG9uzR",
  "key37": "3uU8axhxY7FVLkmud9xrNqCYGe7sEkR9rtVkC8f7E1juvYFNVkGNDb1ZW7evyrAhto5QjVER5vYC1H8omLy43Wug"
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
