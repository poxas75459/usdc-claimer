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
    "2THt1a8MrYqA1jj6SEX8RCGhA3rSnj15QHB2y35RRjXgr7Xf2SVuo2D8EgUmgaUoAggEbZWF9NxivCokSfCGt9Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yM8TLCUgzPMkohaLqcbrmKiNDRtPCcCpXgKP2U6KKi4LHQX5SuWduZvWMKdeUHDt7LqdRZ4cjwZ8rhpb69ACzV3",
  "key1": "6z5xyCUcAAvQz2goyfBrCbFK3Jxkp9T2fcyEbWD7Ka3RWvbD2Tm2YWt1RDvNANkSYskq5JpsSPVgiF2cfoNKG1j",
  "key2": "5c35FDrN4QrWKa7fsKUJ2t9mkrp5RmAWBX3gZR4S8XBVZHHVr6zmrzJofNMV68FxYE8VVzadfb1rDpLWjs7GvA3g",
  "key3": "2JV77DEVoYvY2oXzygPdv1Hrwd9wcVag7y7v54XHDT6E6LuEYunFLmEYEyWg61K5cvpToscLMJXapKctaEXahR34",
  "key4": "4F2nDSJ6Bwjs3FMsTUR4kmcfU8fbMZiZLQw2RX8b6UsAHF8xPxYgXpcPJqyCGbWcHeeXynXLoH9iVTLYBqWxDkAR",
  "key5": "Pw4qw4KGns9JznZn5AMx6suBYrXKJ2eaMUFHpWQPvG6VmzjuJ5J5A4iU4rgjkTKp3KJbofD6nxbQJ9iAxjSf3QU",
  "key6": "527Jv83We16TN5m6Gw4GaNkm9A7H9uREp8mt1oQZgC7o1jBKyGuyD4ZiU2eosvjPDvM6zQPQmbLxnZxS7sN67HaY",
  "key7": "2gSYDe9R94UaShVEuWnE6BrM6JieAJb5BfdvPdnPDLZZ2TYDGqzfe18vuBrRkLJrtjsJrGmFqkEcM5hAQqShwtGr",
  "key8": "3FwDR6wjB5bYm21W8BJ4Ddpwj4Ux5pgnAjsGjWbyBRh3PaXRDH77X8HdLCK8ZNy58eutY17vqjhynT8Le4eCJURw",
  "key9": "3g5H5tSdr9zRbzvxjmft1kxhW8RQqwsHSJe4V3xGwusUQK3c8pzHLkJQiuowgc8QwDyGZfEiynRUQJMPAYzRtSpb",
  "key10": "4ntEKm3spwBUeNvNRnvMnq2xquj5AqGv5hJKZVPv6wSEQrzpmZMsFkGNex5T6X4WYbFMvSb2vd5E5uvbyY95iobV",
  "key11": "28jZ3kHRUDb7SNFm8zfEX9bNVyTZbYvGFobqHhzBJHSMfDGGgEZg4Ykhu1F2CpLzzihDCnTNQViXWfY1NSzXrZuB",
  "key12": "4pEAHfwxtZs3JPkraWwDbC2kRNqbtvvBcCr9VAW9fHm5XcqdTeFL9NqQrsR4LhWVKnRUvEfNmLjNqFgvf9enCfCM",
  "key13": "21vjPzQrPqJkNPTjxd52MMAmLdVoAvq6vzoQSs54Pk6oGCVCLtbgE4Mpf8sK4MNizgPfV2YWn6RgbPEhvJogUe1q",
  "key14": "5HfJkbT5515esaG3zEFvQkMjPUMzCYPAyNdead5d8QuseFgSUzz3PwcZrgTG53foRnPhkLWgDTH49CNAASPKJS28",
  "key15": "57ZsRKPmzLw3zBbiJYsrapy4q24hqRogtu2eAvizYXJfhrmNRamTitxgEWmtzrQ3RY9pUd2njmMpDjYtptjNpCTV",
  "key16": "41YFQeL4vfqcTtQnwcevv3oq5DS12HwTGjdCJftF2JUX9meFkFVqbtyitC7dNh6tC6VmU5q8YcwHvXrywQDFdJgB",
  "key17": "2BogtxQaW1FaY7BuSrr8cfSVfnPMZTKzQdFeJevArdAaSmf7P2yju9riR6ELsfWtwQmQxBCzRZur6BtbpTNPycB2",
  "key18": "4MwuKGE8okZK4x8MTVmivSwFdqVyYkVhk7stwdB9C9jZ2JRstSKgTniRLwthDE7pTpXFx4usvfmegyGUo1nJUSyJ",
  "key19": "57Cm1aXNuzYU9soBzdJFU6VC2MbfU6GX2MTeFevYhqDtvTN6u6Wf6qtUi334p98ZqcsDRCAptTwgUzBEMyepNFKW",
  "key20": "yrZ9zT9eucU1cJcafr3RwhC1pXWzmfNMLEWJibgeBJgFRn7kVHijk61pQSsHhYrQyRMLDkDfJfxKbpbwAk8Mo2j",
  "key21": "48VDTyE3Rne4Pty8BihE1dJAKCTsWWWgiU7svGtHJJ1X9vMcwnoRuGNj73Mc7g14kRLgY8ieFeKdf6W7W2dYrWch",
  "key22": "2XKrPib1SKrrrRfdnoXQrADgqzkFAFMNBbNRbUGABvZCRdkauFqukYZ1WiC89ZprCZSzgLEC7jqzfUPUDJJv7Tuw",
  "key23": "afveS53MaKsYFsJ2dUakMircFyofoUVg91V4nujaP3vPuHVhMo6VR8iVqWcFay8d69jfHyJGYWtYfPvNXrmvE2x",
  "key24": "4jQ1HoiJgMhMc1q7MCQKGg1a2h7eZMMFF7wwBZpcQ3RHndbSQa5pf8bdAeRHmPusD4r2zyjRXxYJx15HbvB6RCh4",
  "key25": "5RMr7jRsXb1AkEgCh6TZnwHBanvA1B2sgCsvq7HeYxqbEn6FYuWN5C221aoSiphKvxUcAznwLriMTct9ur2EnewV"
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
