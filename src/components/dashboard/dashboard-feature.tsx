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
    "2muZbbU1un3rjFx4zy7dwLWS6Hxr3QrRFSkCeUnzmT6zDVNgLFjkhm74gfTVSaLkx72oiQkSobKGp4Z1W6QNqyMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pw1ccpQwqR6uabrTiEwZrxZiSgLdcYSP4s4Z6aWVmuFCq2of5xn6tbmM15LVKwb9YV9VyQSubgbtWbhjVJaKyK",
  "key1": "4j1xfWR4NqUdJJopG2nVcnf9dZBiugALD7cCLQxjzUy2bwzBZqrrkdnJCfGGyUdNmuhEFNxhiCYLp37R9hcYvP4N",
  "key2": "5Z3tjef1Sx3i4CTED3V7Rn5nM5RG3cEcVaRM9UpZpPcGhvaeJwyR6SgDJ4dbpf29Sasji1Rq1Dd1iwQeUG1njUJT",
  "key3": "5g1rMmrzzwdLNFXQfRjpqv2CSwSQUQBdPyf9WUsyhcoS2Q9abFd7dwNs6T8h6f43AsT1z15JtAezXQwvyhkNrDEP",
  "key4": "21VfHDBpDbJ2voSDkG7S6neHw35yJSWW1dcB31EzaNg2gUg1YwJr9nF5d31bW7KS7gsT5eJHwsxzEuq5JbHLWxJj",
  "key5": "54UtW2jrdJMTxWPb5CKzWZSK4Sweeo8VLWCUa8DQYRA8mjN7dDVreVJcmqBCRx9QQZqvYqY7kpME5UPWHFBhyKun",
  "key6": "BQjeqU4VchMbh3iE7iLviqsVSEWb8XUjgxLdvDbpaeFHPkL7saQHn8PaQF2eGGCre1mKdxx1RLEZ2o6viU9ZoV4",
  "key7": "67haCS3zpvxHbq8jxqkcHW9oqghZbJGomR3ZjJe2KQU4Y7LNLB2g1DbM1TVa3o7LNkcxTQMBBuQz7CLqRVwzxEBK",
  "key8": "nSserPbYNgDuk4ys4A6PpUPfnKvfVvQAYm5tboqssnQKoTWn1v2tSA1NW3xn8xiSWijvhMyj9z82PoxiFJBtppK",
  "key9": "aZVrMF8y22bdn985Sxjf2mZ64jLzY46kxGG4bERNKT4cTVHaeTn79N5pvaG1qTRAtJxszoFnNWGqKj1SvcbASGt",
  "key10": "4jXTxeCFKWy1UFL7RVTq7rvLGSrhbYMm1UWEoFATAfapaD72gquvUEUS7aKc4UZS8Ux5p2kfhJqHis4wbfAExq5x",
  "key11": "FpoWvCmoA6nyv6jQgE9hEeFvkBAW6BtVcuuzDRNLLdRFt1TnnSMiqLmZBzvkw4KbxKQxDsYtPiKnVMN5tToWbcG",
  "key12": "3u1Bx25T9K9RrfajPDh1sRhN6ThdaTXUjXfJdUUWWdrFK6dnjoJ4wNjNq3RuThQ1Whbipyn8W1qqTVVegpUyXvvU",
  "key13": "2gKa1sWEpDX25PfKrb5RQNUZfG1CajfWuxfY4Dbsnsb5PPX9Ut6kuuzQu1CJvmPmsJdB4zgUbifLjiTmfAf4Cb7H",
  "key14": "4DxA9d3GxBgHWK6U8Wcpa3rmUnheZJAVNqSmkjaZ5j4ur3nTY8RewLNEGLkF2LYK57ut5jU62uFbvtW4ZXRTP4pM",
  "key15": "5DPj6rtiCvxwdy3NdkfqhmXk3qqtzf7chqQhcyhqa7mYzDcNR8ed6xDgHtWriPzH6cn9Nq8MjiBAEdrY4k4BqPn1",
  "key16": "4BE9LBt6HnxVE3zbuty5mhxrB2J64o9HrPZpY9WvXd5PghbBfzkJ1uumyXbW6HtCm8dCdjmDQvtFP9N2cLR9HC23",
  "key17": "5XLqLZ9BFsusDqqHNjmb68f3ZhuG6UjsbxspJ5Pk3QGg7avqWPbDBBBLXjgcxiyc4JjEEU7gQ4aJLqSvwgPgEKJH",
  "key18": "3aVLFWMZ59wmrRskuyR8cKgFSSKE3VqTFrzYthsnQo4dDWfsaUfj83QmgjeAQf2YZxUKUkVXz56UUyR5zYYrejr5",
  "key19": "HCxyNNK3ewxUMwRGUWXaQT3kVkZR8BjucedYdRna5J12xC6RQvt1YLNnttxTfBiFNQhWhKgGgE6QGaaHdU4acnT",
  "key20": "2xrxe4XtypJ5WJtm9vDupRehwY1Y7YnPtgdiP63hTKfn8DMVKH7VrfoxSmyRwi6qGe2E2RUfXV1qXJPvbSLffRS",
  "key21": "5waDnPLarNYuTVFnVFkDrZDTB8xHoSjUKUTtiDVgGCQv6PScn9oMHqT6vuKWjtQ3ajhwvMNYutYDkRLnmspZQMjb",
  "key22": "49pKgVEg2zAyp1sdsTkpPrwduEz9pzNSufupaVcBsDnHzSKBTXQ8fVu8pjDfnALwaQUCMBtdYbjMuedCNtdUX1j2",
  "key23": "3p4s3E9Lmb6QAiD6oAezCYGG6U9biotEG56iqhWim1x1bE5zc836H1XkbLvPhiWe9nbxUsh4hsn5NsxcAfBdhnCc",
  "key24": "29inXPoowJ9ezwhZ2joW25umDfaKJyi4N4NdcVtfQKNHB66aPFAKKVjjsvVrU4rUtWxrjRZm669Ga8D25HLyXrAo",
  "key25": "3gN4115seapGmQCMcr8xUdk5eXBhPrGgDg2Ui6GgQHLj6GedWM1QEv5K2w1ZJZByBb1DReZLZjfkbAnE5TaSBzVs",
  "key26": "5FvevPcJ2APhoJM3xsaLNXRssBaVfgR17Lw5at2tKoTQaBw8ovNcCKmBmtY12ezzf2hppjqegJqcnGyDn9iSs3pA"
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
