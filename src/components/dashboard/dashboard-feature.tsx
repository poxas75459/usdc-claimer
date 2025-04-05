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
    "5BgHJrN9GGUThS9kbmKczB3YgkkpsbJt2TwzhruK1PnNkz5Rmy9J3L96kwySeYz1JzUxW2tMX6MmfceowDUqYL8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szBPmCgcs8SGmTxMTEoFdogtU4ZBcMie6CZYXLfHxcJ9VqYAurJsmhRJunZwCTEusCovAQdz52aK4Le1KyNpKgH",
  "key1": "3BjHiM5XQHi3e372MJyRoiDo5V1CjZ4D5GLwqc1NbRmu453j7pcbThnQWxSd2GjJjoNuKEPW9EVekCuhhDguPvM1",
  "key2": "4kCUFppvGfWuZPLJ5WBWfeSyK2GgDm5JTFY1r97c2Mh4y5brqtNV7Qu4PCae61BkRzQWcfnvKKhmbTpHA2eFyca3",
  "key3": "29mQZYqMPV8fKDeTHrakNJtTEkDAK5ACovyAqAJnfNc71m7JTCa7cmqNXbajbmHTPCTtNxvsjxNwXWM3eaC3YZWV",
  "key4": "5SuMjMnLQ4NUXw44zxBUXmRPFsF1E6dA1gRp15d9r9iMHdoDnJTupB96xxLraVpvhp34xSy6tsx5EArpL8CNub27",
  "key5": "2HYQpAVEkAcmPbKCVcg4jW4PkE7k6KXRbdtfYMNHJTfEaPLkzL6emTBS8m57HzvamNrkFPdzypYdcsPNnzKaxkkW",
  "key6": "2PZ7tk8p8TrukDtUZrsqfuUMX5wQThsvW1CJ4AyxuhwgVZTj8HbtmZvKEBcgPtA1dyR4kn3FgjAfJNg5oo5G32b9",
  "key7": "61Ta9BhWBhikeN3qgoi2Gq7FTJ1Uv2Qx2rhuxb2YrHfbWq5tq9sqYZH4nEY7nZWhFkUDUvWaxNxXCYamyvHwz9UV",
  "key8": "38JPNKhmvaeRwqwAm3WGBjgru6W6CxcYePyFtNrNcF7bRDkMx7vKB4x6JuKkEsoTqNzJt8j5a1MZsk1evQPaq9ZT",
  "key9": "2fN4egihepiEWYeHj2upSv1U34WNUo1jrtBPHr5ZeHucFqSsWccjGovDED1Ft4fQo32bBBgJG8J9GGDREDhSJm5v",
  "key10": "vxTx3CZ1uQZ1nVGsrQCc9daBh3KqYzWa9wJBBTKnybrijqb6q1NqVijKxoWAyrubibFDS8jauLYhUAtngL5WamZ",
  "key11": "3dYrdfmJ7ZD2dHcuPQR4zA3ZrYKrqkcQsT1NWpemdJBfGcivxRu1Q87aNESGuLaofZ2cDHZYWX6HR2L2U7x18h5a",
  "key12": "397z1cwoht3wWp7eJjUt7rULTSKW5peEzCiKaEXHqNTHfwXDAkZk3AW5NcyFkwq39K72pLGzMMftdMCzqgtBJC9d",
  "key13": "3wZub1VGCotxotfpKWgzgmG3GuVYJh5FoigdqG9tTt4QWXWi5b9qNLTi4Xpv18qWATSSbWrKqm4FjXUN1QaTqKAQ",
  "key14": "Jbpb2MatwT7QBbXMt7hzLanNY6N31XMADUzeL3B7pvU78NjQVtJ8eVub6jfRaLBSi5SoC9xsR2FuKRMqDnkvbo2",
  "key15": "5MnXSXGBRtxsYJJwCvqHw1bvgU8Grn5t7niP7oAStzekuceCh3TiG5vru6DUAbGKDFDF4wDpGtmCeJub3sFxfzNt",
  "key16": "5cdkWc6gRgvNFzY1Pa4SaeL9FdMEr4LJuhx5v433hMpTS6tAqz9HidUdttGyNbBTkmPjjagmEZAqPdvGkvAuUnRu",
  "key17": "3FevgDn92ZmMmkRB5iqSpzQBm7pE5crHJ1cRwezYHz8N58rufRJXJAEN8wCezaQZr6UFxZrzFhoRi9kKFmSx5RgZ",
  "key18": "5RjwCWf1jbSW1oC4xtxienA3UV6vBGp24bjVKsh7hgPndrcRjgTTQBadM61CkT4qqrbjQZi8Sa69AM4FjjMSNpGx",
  "key19": "3UxEYL3PkwQZ6zC49g5QaNazzzUpjmbbMpGwwNnLyz45fhcusD5yTZSRNHQThpLZvYz8zj1qhBBhgrd9jdgpN1Rh",
  "key20": "2WXpLw16E9as4RFvH59mTMCoQkCDchcpJhzg2F8XW1TWvbJ1BWKDzKcpa7GSZzn2Lvt3QMRoZxwxtwbafoRBB5oc",
  "key21": "42AyXQxqauhNHVgtZF4RSXVcgdSnP8eA3nLWMw9vtKVsTAxQ1m49tkLv7aMy6E6JBrcmzLbiEt5iHD52JDpnSwUJ",
  "key22": "3qZycamyx7FzYxdrhtQbnJiV2ZjVXqpoyeE3Kqn8F5vj5J8LEodiTGRBJtL8ZvVdPSV3bJEV7xa4wynAZcTxwSL2",
  "key23": "23dVro8Fv1uHBf9kzL18crJy4sbSXFJoP8y9sGZs93DwvysLSW8osQUSH9cX3gR6NRSLNdJ2gQA7Vd7k3Dr2GF1Y",
  "key24": "u9oSDsJfdfbSYKHRtvC8ssxxRZe3Stbn9AhnWrSqVZfVBjFJFJ7gBAXnceEtujmbH7soaUAnsar8Dt8wZtiPHRF",
  "key25": "37MTroksVx3X5qcd7SqpYeghHqwcouLkVRqZX7KFAWhSHENRcNCbYdFWfTffTJ7xhdTRPKUWoFvBid7Em5mDvc5Z",
  "key26": "48vQ5yqD8N2hjM6Mdw5ef8E4cHmpKWoz1wv1GX7usgt3DP8BnrarQhnQeThzCB9DpUSe19aiDek3C4cuJCHzfeW5",
  "key27": "5oqfuigTCsGGyVvXZ8n2w9WXdUwCHZmHKDZiXsbcXjCGUwhuNSn3V7ZKUkdsWdyckKf8ZGhmrPGemtG58WQnZf6i",
  "key28": "5EUfyhGQm7kcz8bsuMXKhybPqTasVkYUjyhzb3YpEcZqQqNAgBvoJwujn9eDQUjqKCT1MDgLsJ39V6yZ7k6yC6QB"
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
