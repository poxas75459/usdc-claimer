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
    "4QD9CBgkbzEgRB1ZKNfbsZTD7mgkmBWVwZh8kuwwcpZinTvLJGnrStAdtMgBoeE8SA3MxgYvFx6PZYMqPjigUqJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCc1oAUSda2x7Y1YWGaEp74VuVvioM9Rjtoxz8CS8gHHZR9gzR52S9cTMot1zWJiLW6uumzV1yF1zRkiBFFH3pm",
  "key1": "38PMtKiD9YeLmLtTY2632FT6FmF9zTNUCL11E4uVeQzDDscb8MDA3BsCnNVSZuXXnTNavcQS8gkgewyoQxzoiW5A",
  "key2": "4dVqgozYAnxqeSeHTe4qDAVWXLzSNQLpRGRp7dudFmhJjYZy7NtfjFchn3oTW4BGD3PTJfXu5PaVm8EzgaV65Bqf",
  "key3": "4uDTT9LyMbAQ614ZPhwn58NfnDn5wZq2KLPf4ovWSiQ4KbJk4DVQwrW3qDQ6xvq2QCZGUCj4fkYwS23yPuExrjFf",
  "key4": "QFcmE4aLwS2diNzpecXKDFWmfJ8gUBQCVVtHfKKo7YjdmCfRW2YkcoiSzTTw38VbizUp8nVvVAGCTpNugQej5vH",
  "key5": "2isyEbGSYVLykQqLLooX4ZQ4PDxAda6spVDZ2PG4J5eiwJFyj7mMnajt49uKKjwNyqphcxApKjmLd5e7FLuNQPjG",
  "key6": "3ihpvh6FTNzvj41iNAf328Vjy65d9aRMDbq7TXCW7aFs9xidT4VD79wToMc5VcDsnrk1odrgDEDHKnafz9xBr6VV",
  "key7": "n6FWkspUrs43bVFq9UhRooVnsoj8hAwJ2Cyxe8Zpb72eJaLF66KXXba6KTicxCpYPC8wtRCzW7e6gYx7cTfq939",
  "key8": "2HQEYtTsE4TDRHWfjgBhgfhsmF3rVWTkmSU8QaZoJU9eDsKbJdgMZtFG5L2EprJEq8ekqUHYWv2PwUnDcjtXdz2C",
  "key9": "hUqc8hzA6QN7kMCdp8tS53U2XmfbgYV2GGifEj2a3ugp6JXELKGFyFngG62L5J3uw9QFpkqUD1UmH49hXB6yePP",
  "key10": "3qeu6kF7Fg5SWEPcZAtg7Vg9Yt1cQA3zqShatwLhGeenz8sjXtnRQD6BKeotkb5Gp9uNsWuroDa1pYeWtSsh1QGz",
  "key11": "37m1CAwMA7vToc2mYTtmYy7r5AVZKjAE3RfPocPcTxMmCepq3vbk3nKRsbSvGM7bYDwaNS5uDLf9t3TqN1GUxzJG",
  "key12": "2hXxPMwTNmVTzcQC3mgWzY7MJMEzaqFPtU15etRGb8ijcrQu67bbqgxLbA8NP3rUy9jgohJkiLP9dnhUmKkscBhX",
  "key13": "26WgniDsTpRKHAbymDfWZiMgqaCNWgp1wYcooaH5UqaWcLouYZZLbBcfzLm7huJcmffTWEEQEyHUtpDwnAyHsLHV",
  "key14": "yK1coihErE1A75nsQmYvvtKGoWNRdTzJ5ZxMWCTz6qnEnUmkP1u595vNmQzPnEPnSnsxnu6CFSicfPmemS25ZVL",
  "key15": "GdnNSBwvjVETn78LzXtqywVPLMvDCU93QKp3Tw3QYHr8LTDVxJ9Lnx43jXsGfoKL9QoUZCvg6fQ6e6PTvY14LxN",
  "key16": "4RgX8CTJ4zHmJ8atqtrUVKLdGifBA5vn5bQo81Si1w4jQjeh4F3MZTgR4fo8DVVKKenKf9nzH2K1EhDJfq8id9tW",
  "key17": "3bfRRAo5MKnCPapr6hDvKtCmDcrG1EogC9zxo344LdQLK7UH4EEZvXAN8RyP46hvKatBpLLcLuSaVHLqr25q2Ciu",
  "key18": "2M1JMiqWyRzfEGpAoAivMmvW8sfJotvC5jrQaDFEDmY6TBv3XAH7CTCynqZ7X23sTazNhVFv7Jhh1TzsfCQiCWc1",
  "key19": "5HxsQTCQccikbvc5QcEihigEAESd95Wzuem6z4hgTNBNjrtoWCss1muLTQrCnwph9Kp5ampeF447DNsB6VkJBUKU",
  "key20": "5S7ThRoFFnerye3zn5JvF3XrvaBuruaqWQs2E4ssDePJv9fQy3dopCjijzSocgwxEpKBAyossPbFKpiFG6vZhkdW",
  "key21": "5ZgxLRPZFkt4xjJA44LVVGsF4kVmzDnVpr1ndZah76LgivhusLZhip2eww98eG6v4vK1EQ1H9PNm2p1U3FPyc4E4",
  "key22": "2Sw2T9rS5upH2LZABXYQVLKdfxfT2fAZJ3SbyhPR8ePsEf2WN6nk2mnqhx6WqBXR5u2a39fZhiH4dZMjYoStyCTP",
  "key23": "2X3dapaBu4FT2S1UkoX9seFo5REtYHcjQBBtu2ygGoXW4A59x47w7x2QRxDSF5WymZQih7hzprvEAGB5DibuELQK",
  "key24": "4qwJELHo9CCQWfA4toPdn4g8AXkfpquKPxkkBBMZ8Kfc4Cf3r2DVHCfsPSXrK8ejNTAZhutmXYQF7Crg2UuREZTA",
  "key25": "2eC6dXYtiSDP7PEFYYMwVQkjH6qz7iuXzjZ5GyzJDK4LnheE8xWVn5kAMxXMx7JfjYxQtEUbKJKuWLgWiaj2PKpr",
  "key26": "4zKvtAE9SzZPcNWFVLFGffpdYKJyyzmCmLQfjyFEqxEk22QZR6wWKBbhU6tshFa5m6f82kGuztjnNfXeW66K77Mp",
  "key27": "3xsqNWgnDYY8A6gKKsnwfQ7GkacUH9Jv2k687hzGmYzLYSLVmVZrnCGr2aNnRE8s9jqzavqyUrEUu8L43HpPHuRx",
  "key28": "2mxgrdyq3V7xfnD1Dnu8ngVN8phFoFtQmVPJrTZAChgJVoqcjM6p9txyx8JZmdUNiKaohMuBnDbzdJKNu9xwJPRz",
  "key29": "5UpqxZfiioFekEL34dS2JC1JJfYgSHXUov3hQEG3G8akqnnmAvfjDxyB3i4GMzCba5X4tddrMPr47hoTAfPefQA9",
  "key30": "2Z5sSMHcQXE22vKHc98T5f5QDBSmwc1BRvvTgUUR5ra2QRLJLygwPPf34CsLLevKK5CXpb7sCLWQcn21c2ES7pv9"
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
