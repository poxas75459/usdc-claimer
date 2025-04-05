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
    "2YifVHqaqTj1S9tJW8tzchg9okTNgRMbg1cwxMjYm6C34ufjYQFTJV11gnroTFQjcPs6KfYPPa1GEZs5rMTWTfqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpN3RTEQNHyEjDdh1bx9EnC4EsTF31ERhP5EmVyw6x1UA8kWTvrcB5MkLuG8QwVLtiFVZXem7VZK4CnjNk9nGLy",
  "key1": "58ad2Dmngh3CwouxwxMPoAtQ3TyovMCVb1MJADzrRNkb3Yw66WbiAhRQDH33ipodrRtAgYoGrJHSg7pPHb4iak3S",
  "key2": "5QxTHywagVjohqpyjxGkpEvxthnLBXXsA7nMp6UHVKoYMpT4ZFLusVEJHsa34RMHn6FgoZHQHT7BgP1zqCeS3Vah",
  "key3": "3mWpBVafzSegHhXz5tofvojuNcKQYWiDzTstDvfC1SysyzQbrWw8t3ocsMqDssS975P2kFWDLv1DWu7yMx1UgnzQ",
  "key4": "3ybS3LPW6CLSRPUQmGBmWXyRJzKzPMoNjPfJve9xnsYZQauRU3oQjm1mnQJybQFvbAsQm1VFHo8x8nUBNaCFVuQQ",
  "key5": "2AXN1W5nFyFkYtUZAzZJtm9sUsT2y1wahgsMyvHyS3k9WjSKWqczsPkqbYoidx18KNSm9vCZZevxMRMh17NKY6Zw",
  "key6": "67nQYFgd9aQMvHhtgW4Kiut4N1jXY8awD7v8NuiHkt7iTVTBoQ4ZS3n98dUV3A42cSN1ED7rnheWWdky8r6dsXfa",
  "key7": "33Nb5s3zUSXEeaVATMECKUwK4YTNRBDqqkydRHLLLntCkw6GpL6CJRYCgY8d3E7NHrQ93r7sWZyaRhi5BKNQdQJw",
  "key8": "51kXTGqPynFhoLnbPotm9jYfhEHG1SNQm6UL1Addsp5iyP3cZAToJc1mvvGwX7wMfQEVuqaWSprreBw4HrzyGZwm",
  "key9": "5YQWCQm7DgHLvr6ar9UMwH8n7hgiGyt76cfYEMUxQmRku4frbvUJsUt6kyEkbJuCkqrf93A1ytRbfRwyzbBgCCoY",
  "key10": "2m1fzdVCW2uE1KSocZtEMQFnGoij2gPnq8z1HWgDSBop7s4LJUgfj9NPQm3HB333K8N4H1Nui54NoH3huxi23Fyw",
  "key11": "36TfT7fJiQTLhey8DMHXm3TYHY8zUEGQwgU4mP7Q93EUMcWdfbxn5iocaNP7Vxtd5HqqupjQwGt9RE5SMmLTP2JN",
  "key12": "3yK4u3yEo6e6KxWzLpJ58YE8iDnPaj1L5pBZvocMNradopcBntMzA2BnS9XSepfPktfyr1uVr3Pnjym6nMnjH1wT",
  "key13": "3WRiS6hwoj2ygZMHtWYDztDpStiN9ZvJKzPKxxZTcTYHkSPFnGZgrATZ9EWMCbdsry6V6B8miSWLGpdwaMEjy1nq",
  "key14": "2Ubovtvq7cw8GRkVGN25mnqSqiDnpEdTWnuVgQYMLy5eLnVJ4KrthdSEarUERfvmYNH98jAAPR39cy2ACS5Vnrw8",
  "key15": "5NygsSzgd44UtJcDtDNuxiCHNBPfbD4L7rSjmiuKaWf4fm8wes9o7ENQgRZPz55dRGKzF7EB8HAtLbpH73YFYwy6",
  "key16": "5FTUpuoyJeYTU4jbTRpWkCDz7EEX3BMfnCNww7xRvtULbwyxG9o7Zr5xrdrSzZtdoFRNGL2tyq5R4owP1cf2mnFh",
  "key17": "3GbnZEvZPWNcZc5qMpkPzYjFbVCVuDoi4JytaSebPfCGhbCgzc1rXcr7RJZnptZvDNHDZQkJwWQ2hASq3FjPYmjk",
  "key18": "4byEauD8FqdzJ9rBd3UP6zNkvLeXhf9XsDwStTv2yXtwBjvNiGwkBxe2J8BJ4wU2LTuv9Qp4iYA7jXFPxfBqs6zj",
  "key19": "2aHQc2MXuSsiz3xA466CM7qWTBngz5pRdXWtUUSHhof72NLJKedprv6BY7wV8T7rG7Xjqiz6s5cscuhS3BVgtgT",
  "key20": "DaDXVJx7s2RBzVrwo3Pa4aPCnSq73BUNuLf2uSGdEhUdeapoqq8w5x99VWkcqnNWGqBShLhkjek9AC2LnH3VXnm",
  "key21": "271pd9m5i8wxvbvihEjfRAGbwrc77F33xVBFd2KUqEvEyAYvBLbnLezYUSgGP9pReSiBiCiFsWcJm43GsZqmTNq7",
  "key22": "4dxmkbEZhLbJJbdQuPXnefHL2xZhL5Vj34t5QCJTEbCAjhWyfatLdGjdZoTRF2Zim5KaLjc6HPeX4W1AS8zpdYy6",
  "key23": "w3C3RrsB3D8VxraJoi2kxKeNDEQTwFAQSvtHWATTyZTSsuPj3HSu72NVerNmRpXeQhwyH17DwQRQ1dcW3gX2u87",
  "key24": "Guwcfq1uv7LVzX6jWdGn86bT1xhVN1C1nzJHY9ueWFqLHHHDpkiftYN92PETj7EAFszfhCrKGBpfAejYPGa1PNG",
  "key25": "5d3XGdvtvyMqHZXLNbnqHXQDwH8jfVbZGHqyH5vnG7yACA3tfGNhXEoWJpThyhNoWqBKgezxDvGF87gxBXZ6q3NT",
  "key26": "879kRSPiZPBKARin4aGr7vMcg1GheLwTjzEc7h7HRRMPEspa3MW7dMCvqQAyqdVKmHgb3pgJkrwaiGKU1ewoBMg",
  "key27": "NbKLA1HmUe1YESTQ9rEYKxUggTqidRuRLabq4L2PzfFvkL6WWHQkJnCDy3Wa3GrcDErtQG481nJ4uSz3sCEYcBy",
  "key28": "2ySvEEefWyyQQRrRXYuTMQcfcnfFyzQNfdDEzZBArnqfdrPJ5G5Tztf38DQiJRChNyMbWKygGDuTiigqNxPZdtga",
  "key29": "PoWbrhXRNRwFGp4M6TaMix3cCyc8iNxm697QV5Yz7v96anNy1mNgcB7nRbhQZAGSodqgrdhDcNZxSsWVCWm3KmM",
  "key30": "58gAn7sFq33XWuoX8eBs9vCScstkJGXf7x2PrNtKjiatHDehzgmEXEAkYPLBSkqPgXegtnN14KW9Q57UqajhTSDC"
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
