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
    "N9Ef1NNNLVHvzKADJB1GcEWJEFpSLZWDcJpwJ3k45dsGKPFhkeNRTE3yVJGUj1Un5AxhdH44JjLrHdVvYDum6ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPSXigm3U7ebgh2fM28wtTrBsHbhiQV4Yuzc1F1G9t3NAgZT9gVvEi9VcjLLeAi8eEFbNyaeKbZkAC5VukPZtUD",
  "key1": "3cax2oDK5yKEAiciRWPRjt23mwru6xi6aMYRLsj5ALJrHudDBbZZHgPrL5Chn9j3H3KoaaU52RamZPmBSJmV4xDd",
  "key2": "nfMqxjZcs2r9wvxL29Pz2BBvctaKGvZkz2zgDrHJN1Ev2BxQoD7XnHpz1S2o6GRCwYJu8gaMnYnvnGaab1urbcY",
  "key3": "2qY9s2AEtP19tbBr94XBPC1ELnBY1aCtj2fWMQfn8W6xxdgAirVSCKh66X12wWn84Sx5MzVDZ4t7qJ4TECmZQbsx",
  "key4": "3P9QNCoVYdQ8H9MiKZextK95HwyNauEYrTt1cin4AuvCn54wUDxfj5SvxydVcgBoCvFFHbpYJA35DKwbZLmyXJN4",
  "key5": "4KN2evK8CdRsWTeCdzVgfhitneBFFduS6zW29c9ihoMcPNcJ9uX2P9GeXva4UVmJmeVv3Hf7MnmBULG5a1im3o5A",
  "key6": "1Vvby5SC44ZrKFM9Y5fxYhGsAaN6hyMAXte1WEu8K18mDgKFAAs3z1TvQ4vN7U8ViupSdu9RJuD7bLGtMRXdPkZ",
  "key7": "3CbSRVGSvnx68CFmuRzdRaKFaRY1FkAEbCVT3Jn5fqy15uYrq7iKJ5CsrdbhjUgj4pUzstgGej2ZrJEtJdNHcVQ6",
  "key8": "4GGgbKqpxvejWzuMMSiZ3oZ2RgA93WRrNda6dPfrNrgs5HLKuFbBRPmbKSZeJbVUapDtMzK2nYDnt6RPMUUwKCLN",
  "key9": "4wBXDbMkDfWvCGWsf26d1ubUzyoyhMfTX4KVAMYpqDDVhariPTv9Cd1Hg1G8kkmowsVXTBUnvFprNcvDeCLAtQTC",
  "key10": "9iK2qdtLCEqGzMim2uavMqVVBgsPcuRMc6cXVzqpTcR4oyqA5AshqVe7uHX9s9bjPcvRTfX2TBWKXYwL6wf3moy",
  "key11": "65it8hgkxEGcJW6yYofHQvCxe56AEDpQyWCKXFiUsrwDVQzFhdzKi8HnXhqJQ2LjdLrGXZGCsL4rXy4bHwceL6RW",
  "key12": "2in9e8ZknsTagWzSyXJapqWuCDTdk7kGeSZpMywXFfBPkpzqEMHefCr3WeVYsLQvi2wKSk5ngidRXTXZGYVahqac",
  "key13": "5roMUCZpnSM6Zd1dcMT8Twr48cGcVWuKjfr3Ks3ZZSry1uh9bE5m5W3jF8gKEwt1Rgo66zgKEVb1Ej6UaEzP6DLG",
  "key14": "3LE2AVNXJSXUoZP3TPby1GzUWXzze19opDUMtHmwA3onv44jbfsr5DuN21qHXCREEHa6LsP56guaqYJzVw72zd9M",
  "key15": "2zF8BfZXzHuLyrHEjVFDQqhtYdTSoc4PgJCbjzrQK5eYeGnkBC68PDT5g1kZ9iBu1pZrY7rGpbLcXrXLvPiFhwYW",
  "key16": "rHgbxRswq7b1BiACbVKR4XSvHb3taWWqY9Hq6SrefFZtSfg4txWABzrmQNdEjUcKRWnDtMyCsceAdY376yt6BdA",
  "key17": "5n2xBBqqujhKknaA1dq3P3uuP7XPatHK8RxrKU8TqPAEm3CWPwD8znkNN6boAQTyznxCoCc8EHZqym2UT9rccxgv",
  "key18": "2q6ibPiCFB37jh4cttsvb7YoBt2y4kDfYt5fi27MGzHc8tK6L8frKCgJBpyUrH696Hshs7rhKRuxMxUPs2HcA7wZ",
  "key19": "4fC32kGEMpv8K4WovTaBa25gJ8Jexeok9vjiQJXCc8pB4YtYFB8JjnErr99RGUK5NHwK4BK9mbFPj4nQUUTJjvjk",
  "key20": "YrTVqpXWG2BTx7iLzXFrzHNPW7yfKQ1tJjdzxmz4JQAt3niRGg5VHAwyK7vYJL6Jp8ixcwb6F8c5qNwq9QhXR7h",
  "key21": "5ap3r6JYQVyXytdqSdX7t6oEsgZFonFtZ3f7Amtg6PZy2k5YHybx9VCczZ7RLwrBUe45kR7dTSa85gGP7QL547BP",
  "key22": "5uBfK5PJwEBaah39aRCHyDXts84tJbZ2itYMLJAyoKekmeHtUci67yeDVhwtA4vQjnhGpNdCsohTdmMAhVBBuZSv",
  "key23": "n6hzHaLjwgDVdWKVwxGzGWcd1sF4jq75Xp8sDnUxL7Dmrq6Loyf9SnE3L7q8TSQ6chKz699tCKn1tsjPXwzZ5ki",
  "key24": "Ms2tnc3jQAKxAB3TE5MmSWSMSfjUBa8c8PKfYmmukjq974FfStonFzWvufz5XnPUqAUhJBeBad2akzz9StPvtvd"
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
