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
    "3Ff4zobSoLRaQ8ohcRkqkhwqMErkcAAUmdURqyaYQ5Akgn5mJ2Y8rCKwcJAMrBwmJ6MWZBZzgJJvL7itMMn4A4bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXFJa2CkzwAHiSsLrFSVGFLEcMfoNX7mnRaLGkX7ahQFTt5NoJczGe8vcYJWmr5VD2jfVsgod68oms6zN4u2PHx",
  "key1": "4LhDebQwKijdyM3WzMRhFmyCsRG7FNrXj4E7Mcd6sapCQnLMQ5Ep7yhtNveA1ZGckGFS7Wu1187JPpwZimPxdv22",
  "key2": "4C4hr5uuf1yqAtsJ7zLY6Q1TsFfKjdqgjXB6BUPq4AoXGEf83imVnEVzzLNUCF3d1By4V6NhCq74PbQmH8CwfUko",
  "key3": "1SmYBS6SdWnsdvKMSQv1dCun6tQEi3t8GukNCLW74aFFKNGLJN88UbmctwTXVRY5mPZjsFrU9koVC9oCRppkdwv",
  "key4": "Ji1ErzsAVn384kVGeGG6B6NMJwRhyqM5vER24J7JMRsvTm8cRjq41nCKMHzEUYXKFFNuTgu9QGUj6mFoBqWSzSC",
  "key5": "3p53wvma7GrUE2MgQf9BZPVtNGBYjvTa1wLM3WjE55BZhPvPg9TdK4YCS2zojVZbdepnyxRraFAzCXjFz4W4RjQn",
  "key6": "5ZoQQJLqmQYWQg8bsB2L64astr4g5yAC52miP4nnySzpj5QDpJbPcbPk53bdNoXSdnht5sgLgcnwwUYnVADxoifP",
  "key7": "wzTAiowRL4keeBea5RQheFYCh5KE5QEjnPZUmcezLjYveBrMWPCqzwKhk1ktJ1twkb7eSufQxLKKLHXAD33TtYP",
  "key8": "4XfuwVxgnPEiPK9QAf6aCsJFS665mmmjeu36MyNFHD1ccLbMQRi244GivzcFXVYkxg6XoUGCsy9XkQ9wPMqy45LJ",
  "key9": "JA4KynQW3KNVP1wMeEpvia9MZofhjFUorkgCi6g4YXGfCCFqQbJT75CQ2KYXjyVHuVYDnUNiafudL8v1tR8mnDj",
  "key10": "VcT8drhLH8onEfXzRWS6zJFmRZM663VommhvYQe7MqBVGT1FQVSDixfkbF8XyqcfEbXwnpKNHT6VLLPg7etZjGA",
  "key11": "5x3UHZDgQfxMQLX3W6ofCXqo77QCtUzdrXtCrmC1DrqNT6tgnQwrWX4FDg32HAJV3A2LEkYHBo4QXWBj83LU7jk5",
  "key12": "5WjGUSook2M7jiDCXU2t51mnrALWHkKTCmJWsXnf6c7YNqy9AbW8iZLNpSyEQWEbF1dmCyLhWoAzwmGzBcyrXBvq",
  "key13": "21hPDKX8gUzdK1hPCFoERMV2DBr91SonhSDBQRxd4tKVTavWknNQGHz7fZv7snggZVMB8bAJeGX4yfE4KrbhUySy",
  "key14": "41mq5enJjoRYKDrn7SLnSCXPERnEd4P7hmSKXNTR5iJGJMnpieLZtjcdvfh4vo9bpg6RUVGRrwSj6c5Q8fk6QPJd",
  "key15": "2iERMN2BL7rdNUVc8FX2Ktov4uGfTuAx4qPc3YNCLniKXyeLYimfxWdWeagBZKifewZ9SaneyZcRDBFM5Ve8pvX1",
  "key16": "2V9HgdEV8h4npB3mWGrGbQQUdgc1nWpf9uHTjpRF4K879kJt5ieJQneKWwGQQ7P4nNzin4gNWXcehwdsCurwWoPe",
  "key17": "MHvJKin7fGWLBRUx4pVGdESe23r1yvKXUHP2UPJccridnHbRmLPRengtToBziJqg6gDaUaTbbkmdkPgnQhTDJ6k",
  "key18": "2HYCn1EfQW4yGizVaeaeiaEoFkhWZWisPaXG7pBYmkaRisF4Q5hnjHdxJnKJduk8w2Xo8fZNfjSQcHszptQ8WWCj",
  "key19": "29jWJxxezmrVFWf2yiJoaT3v6xZkfRnJNbUmuUf1y9wUbEp9mpcqXXNiTCc7jgANqeHC5i3SktotYXd6M6CftbDH",
  "key20": "2PP9YEXjBcRFYmM28DiM3sPGuxiNWSjJh51PQJo5PU7LWaS4qMDxBj2KZxpkUUt68c9BvHC5tGyU38jQsYCZCS3X",
  "key21": "539kHaifQ6MWbo6e4GD4NQGNkc93LQNw9cfYreUmNGyykQkhDCBs5Jce3fH4a88KsUuHBB4S4yERDVTu1W1a9FS",
  "key22": "5KbyMf43LiQLV4TYqopRERmJQJFvEsPeKaaVxUg4yVkKJAPXVHdJTnTTNY5X1UbsQQwhUNVjJPoWLuNc4UEoYDpt",
  "key23": "2EDrVCY16r2NyZERqjCUxX5QgrNogmrJvQv3tkt5uJgCrTtmK8PXLK2HhoqXE1JWjneikdML9qzRvynVB11Z5qbC",
  "key24": "2Tnv2cZG1MrqCPFH9omtyDjz5RvD37k2H5DdBQJ5TPhzWAavuVR8HW21NfjW73zWWCXoXauRQAjCEb6n1h38nnZw",
  "key25": "42GuA9Etw5WiqvG7Z2pR63qARVTm8phaxJuC9xaPWQXdSx6h4Qrq3pVET6GezuFtCrqGZpxGXuo8NbADt24KTA8M",
  "key26": "K2JW9exXQfuHmy4XVEDJehZzniZtbF8XodJqXHaapCLBfVmRCJCuMTJcVaRyuABmRVhDifZdKw1EzxGEdUZCM9N",
  "key27": "e2tYptRSbHE64cDLEKcaSQArEEzRYNPDxrFnpdqCiL7K81KGCYawweKLfRNLsNYAE7iwtYuNuBjaXFLGh1rjJz5",
  "key28": "2nhQtcjvhsHg9VsTEEqnzxBdPvXVnsYzpbYrJQoXc58561cxqtMnbZc9WDnsoaiAFS1xrzvZQKBBxaVMZomhQjuE",
  "key29": "5CbXH7T2CPkjBz26Vs4LQACyhWCeB3viCDfgD87WMnGV1HgFKn2mkhVM7aPxE2Hgxsx4EeWmev4xwzKoVWFjPpoL",
  "key30": "3uL3iDJzB8Ybp6GdW3wZ6wfr6fin2hrE1KW5LmCX9kqA6seGQHhk3U7yah4jczwrKFSjtnhRtAEXUXhchADC1t6z",
  "key31": "45mooC6PV5j2n2a8qpAHzcYEcjwk8uM15PRhvVjtbxzzoSxLDZBNBNFLHWss6yCgFu7N3PPKCEPwy2NXXXa6pHQe",
  "key32": "3Ls5dibS6r7vnFqJdH87xmaLrSq1uoUPe4tPjmNM7koTNWe2C3Ky2mxzEr8ZUompCSyRPws1iriR6mmg6gYDjh7K",
  "key33": "pr3sn7UJKsCTjd6E8PPNvTwBDcsveoHfzC6zgojrAzQf9pr7hGBmT5TBEM7NnDUcgChiQrr3iiX9mRqaBaHeJCM"
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
