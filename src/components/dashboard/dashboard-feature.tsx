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
    "4LHCznXMSbZijtdJYH8rtXQjqUKEPpiuuadECEQ2NDp5fjTLBCTZhTPRx1pmgY3GwMREH5innDYDTSHZLjn8LtFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELaSBg9sDMzLyoiy3Wi7gELC23ieKgiTA12xry39GdvxW2Sh2D7sfUzggBYmk99QpXK3vT4ypfS26G4oJwwVFP3",
  "key1": "2kVSaHNUB41gAqRckFLikkQ6Xv1nZD5VS1DrvggDyQQKcY3cz6tkFZef55r44w6kGu9ugAAQmWgGD3a1dr881TEs",
  "key2": "3crZXFGDiVXAMG4oA8URaBH8M2Vyy7fi6zbGGsY9EnF5yUszPjfVNKHoMjZHsado7zRkdg4fSo9pTvrd1vnhrE7m",
  "key3": "4QhHV9AHJQhsvjgiwNQ4R3zZAMrenJRmJxWpgyfoSAf7CeJq5o2ZLvYbuQVdLwg2rZiKhCpXkCzQXEs7WBfN5zsP",
  "key4": "3imtZMC3ZjxFvKD8tj28D2ExbCt5kWEZzwDWQGHA1HY9oqU3RSrCLrdPNFUYt3aqpUbLp4996aGgu9XN3Qw5LBKL",
  "key5": "oKdTCBFTe6ERUBYh82vpGFuRCX8AheHsL7NAx8gGaCBKq4YR44SQZBfHTdyaezn1hJnJTFTeBo8cqbcAVw6NyU7",
  "key6": "5RzDWL1veBo5ebtXjaZF19puugeNX9seY3bv8st9GJTNHaraMashmavVTeoYe2CfFcYxQoXhTFpUA2QWmERLMGZR",
  "key7": "5wcydpPPBm711YfumZNk4qFVmthHM1xZNJqF7GW6h4wVGpPVygBBuSDhPEdXbT2qm7nn9X1yFJZ1LLcxD26dXCbF",
  "key8": "3chS8n9KpvKFZFA2vvrQbhW2aa3h3nemf2yg9he3M2gZzHQ5hqAksA91UjF1pbcHCtCrGmFtTmzcC9RxDdjtcLtJ",
  "key9": "4wVyzFLGtwFdvDENj9cLYGjPVkmmpcG4CLZETxSvi2wV9N4wb3vDSUckGDBwoakVXW71yVkGUWuthFipSuRrZbGX",
  "key10": "2L7TA2K9mM1fcSTpSzFf97myCZkCRgc8cLDjq76FpNqY1HyWxnvWmxNaPJDbxRyP9hMXWZci4N4hudFD1JmMpNzG",
  "key11": "8pxzphtSaN7nrowE5HszcSYg6G8eatyFW3DHKM3s2C72eysu4DKwcFxygfs3frP2RhbySRjuEAcGbEg5DtsQdkz",
  "key12": "3PSSES8YxUemKFq2EAhyCAvDT6QJtowJKnW12t73JvXWza3V8WN5mECUHdVMRsbjo6XmT7K1XKJUbbvshzT7hJbm",
  "key13": "3njykVZZviTcweGPCgAsfkwH9ERv5fmUsboCCb2MjFJPFWLFWuuvJURXeG13ta6TpJpVYQVgNxht3Hbj5yC51Swf",
  "key14": "uNxzvz1eTshzUEoNhiqWMD6vqC8LMUpcnGresQz1ZzZVbCLsnv29Tek8WAhYXBPPsQURYwXMaWURFUH8Sb7fEmz",
  "key15": "5xqaQh19BTdLWtxui4NXLkapVb7X8MetXnXnLwHqPwjiaYcLYCtBrrZbRyeSGQ78uhZubbdWfCYPxsNjCafEobs8",
  "key16": "L7kJYyngdA5g4WEYCxfBxrf8Tg5oBHvjYYcMn7JFV86JQKnQpQntA5RBMcqqFG4z3cMEkub1B6s2TjWRyVb5cP8",
  "key17": "36MwXKAQEUHS3LrqWiGcH6YDiLZtyeY4rj7eVuUU8g5MBCiucvdh7YC5qZf5JeL8kWJpme8bvfvQm4mvEASQBSbE",
  "key18": "4dR5CYvnS8yFFrn48yCZniAK1n4YDWoEc6ttrr6r1BPkygHtyDz5p6jtnwFVoZzz7xMRDWuUDC26MvX4FEtFWGDB",
  "key19": "3sMeBkvmhn5THxCJy8k2VjApCetTVEmP4X9GgKWoxn7stddUEou1YRSWhmBcgQYTWWsDFTiR4YdCtNThHq4zUeHF",
  "key20": "2xE2NgQH4CLGjz74iSzMEYBCkAMJnxBxVvax7xPSfer5oGTAnr4Y5J9caQbRRLcX3HzjV2eQWf7ins8rrRjaxyR9",
  "key21": "4wQyExJS14VXYf4qKk55TMNGv5128Kij4vECGAE3YQb2y56tJ3u5viEiJxXMLHT2AkKcFj5uHeRMj88iFP6ctCZC",
  "key22": "5oSrimGTqjY1tBeUjJmUwUGhK7y5VgR6sWM8kzXX2bNRbnUUefZqufsK1KV9DQiK4mpFHDyLnfHv5Kzo4eeFKZ5o",
  "key23": "4eaRCEH3LXwb61GXumpxw3R3uXvvGDcpYF4t6RD7LTnaZBGToJ2yUQ5Qem3UUG816aiNzekrvJ3QJxLKSPJMTtqE",
  "key24": "2mwjPvtfT59mnTZYhZLhAz6ZYRMCfeiijrp7b3cA5gsYrX4tHfyhXPR8aArvo5eacamJF73MCSKobes7hDgWfuaG",
  "key25": "4gV4h4x3oY8ETU3bJodzCeHEfkF6vHUzfq2EvjicWnjYwkoykYvUUQAhNAgPKnH9NjmDcqWETndFs9Mwx2hZm2AH",
  "key26": "2HBqvJ9nPVm2X43U86sUKAH2zQkvQNsC41oPuWSwCqJoxwFMTQTf3Q8MifDfgeRCdk8qNd9YGT9KNKMXFppqMEEQ",
  "key27": "47DPebxk8c3ZkExzGZnFyb85tmQA9rPVELPZ7vTQyVQVki6U77ibBTPrMZshdohBzczaZAfkQF1idsgP9mbfpCnQ",
  "key28": "4ojy4tokBaqDx4t2mBpCwHMAEXkSD2JExvHwCe2WMuyQe1WbepwdyyDTyTyPpZELJJpUL8DRBHRaZwQMNJWSyJWG",
  "key29": "2g7gdCXDeReiVZN46AdGxuMEQvrB5gMasefza7PXdCTUHBNwJdTYhr1YkYL6tPu5AYiLBh2vjcG7vCm5tXNembro",
  "key30": "5HnHC4mDLvfGqxqdbjMQM2yHsgj1X1z27Ppu2P6sd6a18F7MeDhq4fA2fjKjEmhzaFi8EdyP4jNqukfrJFNTCiX8",
  "key31": "2J2DjfwHaJ6t1R8diEr3UKrJwPSUmczFgSYCbvRxnsLsKAomRyq1ZiPhLVvG2WfmYHstwXnnXdbwuiz9EmfAFpzb",
  "key32": "5964naeeBRereuKDcsgaxXQuUC3mzGTyTmg1Xymhshwk1uWvu5h7aDjuH3utBm6FjSBad6PKtuncBdKVCjw6ncFs",
  "key33": "61FZcDEXAijc4RagVAt2ahp37TvrobUbgEcj9ZHjQpLsVaaKzJXPyNaMSoTRL1WuVQwgsptLFYSPYcpNHX2BFrAW",
  "key34": "4BXwaAWxfL7TpJ2zD2NNbu5qFEN7MCGJ9aiYjV3C1E4QnoEPzbxC8dp71ZrrmGWHZUDttv5ajyjtSXkjv99TCMnN"
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
