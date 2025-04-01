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
    "5kHRUsAbqDx4quuML58ctXsHfQkWY2dq2GnkEqQZfR3xr9YkcuUuJbECTBVr74Jd4QQRgfB3u4tVo5dvgKy4BzZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHYJD5yycjRjhksMkrmv4fV2H5h7rN7aasugDNKaAHuwnHGdjpnfmoYHVvVD1YWHaGU7kj2Ky7iXNmsZVDGsete",
  "key1": "4sEoiKHzoMfTWQj4Fb6LC7puQx14NdyEgNVwuy5zYM2aTxpARUdNq17PmgV5BjsTydhswbsQpPkFRPvj7ka7gyRX",
  "key2": "3NFc8PJ38sSTqZEjknvKjx3RjTpA58LBqxvE6mK4jQdZV3Tj1tHamKdNEoUysgiVHLpH1Q7SsQyafLLJfi8c1V3S",
  "key3": "2xEPdAaL6CXfpAHZydNJfPC7nfF949uEDewAFkhuTVcgim4j4AHkJrHMDFsuWN8rEWgDCXP4ZsQfdsN6Rt7GxoFY",
  "key4": "SNCrtMuRRpPHtxTNnY5oto3d8AYtpWrRP6QoUu3Tvccoq1rfu4kmiZrkNhXEqaAT4nq2yqF9a2rq9jQFBpNuSGf",
  "key5": "27m6bV3RimympuGi3ye51S5qHpbvr8UoK6QnzNrFFAmYdN1VpoQUB7b3TohzDCQ9z8G3cW5ppMXd632dtGfGdZTL",
  "key6": "3YJwfZQYLaPMnpXH9snE4jKWxHynSv7Xu6Nbt6fK5vN4Zayw35hmZF1AWT9ErTkxLc8KP3wDajAmLd1TMZRktZxU",
  "key7": "Y33c8tV6KNVcCkVwJwmC2PbFDLkJiYsHskcBYM242CMgAwGeVP567iU9wp62mkboqpDkPE1564pNv1mkcufHrsp",
  "key8": "5jhayQzYBA5zbt3gUcrrxHnT9Qh6QZAV275ReS4vdXVj1dxZwoe8qUruTdvxDqrXFdidvzfgjCruGP43nzppEabJ",
  "key9": "f51ZhaX18bYhxPQ6efG3euSxXpG6s66pi1fH6KDTitT5CbKJVz1rc9ZQAUH9jSR1yhEW47mYDRZm466M2nBi16k",
  "key10": "2CEW3bqk8JCWhiUjjaHtnLvb3SfWLLqTr6F3WLqauX9wpkkdxpHMyCjTucx4btRbZMSf88nBN77Yyx6JAs8scCrq",
  "key11": "hUymgJ6VggZhn2zAUXaJiH6KKGfpA7wmHdKXAXbdZdMEekRdpuyarYeYkdyadgFumakHVj1fnqtu4764PtMSskf",
  "key12": "3dEQsHVXRmgEeyUmGWB7VuMsMqWbLXGHvocGL3B6LykJdwgZ9mK2KgpeEaJVk6C1gcNqZhNejQJpMB6VZdVAiBZz",
  "key13": "5V3UbLAP8gfXTturfKLb8gq4n5my8VhZHFkwstLugggFHMWUS5rATawEd59hsKVPs5PfUBWVCbMuhdiA3Erxx3ec",
  "key14": "3aCTzDgfX4gD5S2viJ18pnhqDRn73eitKBTVcSKrQVGbYzHy6QKcEFTFJo7TSPuppEC8ndr4xKEBC6nWaZ7rBP1s",
  "key15": "LNMJ3ecjKKmm6Pw5jkx3qoYjms195nKPjuKdzgvUWKcJ2r6JypRRxwpb99ZobYjzVs83ZotDcut4ExkH8yWbV8q",
  "key16": "sFfTuDNAprHLjpRj76jDAfBnyxCiR5dUUcDvDCsqQ4HmeZkqmw1mgEFFxkXcDp8QKJX6MhcnRBdTQnfUyJCBJnB",
  "key17": "41HYKehby77vAEZzsMNJGp5QujTbhXYUdmjdz4uySuSfxCMsid8Czh7eMnKSxSTTwQCym7FHAJsPhwZ22s3g9ECw",
  "key18": "5ZbQjW7ySsc4v5nNfa5zRFNNoXffX9TuRwGetw8UALWnsSNw4uc9LndmakEg3UURAupjYREg275T8vaGWRNpuXwC",
  "key19": "4MmZNdTgVriKs8qDMMvfUeZbNN3DaxC1tebBnEByebBekEDgk2WpBy28FYSsywUuii46XudneENShJgDS6LoCrDZ",
  "key20": "5h6XTQh7RKpDJmDTspoduV8biCGAfmabrNhjfgp9zcB1w4x3zRuBtNS7EPo1VFWkQSbJhXWbNv1QH2YNaQ7SbTGx",
  "key21": "42f4kstmyJkggZQVC8vZX5YEXXCg8FRGWNNH6uHwJV6zDLMd3i37DGpxWAB5qbgggKSeqrGk4GDXxQYi7CxXNLs9",
  "key22": "4UsuriiZzFH9ghVx16o4m56Q5idKe6XeU2fW1hkoW6sZbDn1SG7uCLwcsXbdZQWNwmeFrBKm8SnHUVACS8pZPsMC",
  "key23": "3rErZc8WvpWmVYpbXFrTHWeQMaj6BohAnc4u79QJ4cpEqF7LBX2Eds98D7gy7jo5SaxqszK1PqzG67FUHEgFsewJ",
  "key24": "2dxquLgAnXhrLJDEZgBD24jqKmXySuBb7r6xYi2n163mwLRdztZRK5ZG5tA3WcobGHuR4bNbfC7G4gktTBAjkLJd",
  "key25": "5YnDs7seFg9fG7sLyqPuT3HT4rEic8ZtnKoRDeqnTaNwRpc4Cq2617zbKpAnHRk7W3AQzxFnkAwRw3DQe5uVyZnZ",
  "key26": "23LL7LVUMMhkxMZ7W9qu2PjGeHN2GttUpmxCjLSYE787aHprmRbJM12LiAKixPUKMRwzcDtxNqLn8vhCfUG4PMfu",
  "key27": "3CGD5azHkVxqt6SH7Myv2XUDJ1DK43upaStSkGYaNTSSvm2jsDAG1cfKnXScUptpAUMK7hTc9ycr7T2v5rLKSrD8",
  "key28": "27i4pq5ErCpDVUJbixndgPzy8c1xecV2N55UaBqvRKmMUfu3SmfCu5xxW8Xpi9XHaymKKMbSWJbwtMsMRRaXCWum"
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
