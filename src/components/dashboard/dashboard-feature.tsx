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
    "ddBRGHAPNZeoEWUC61H2y7sw6H923gMdkUU6meSpTdjGZKhdHY1SWSWoF9XrubsNAxGSvooUCWYCb1MjStDGphc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6x5ePmruWHcJXEGkdRV8YFvyM9YzMvXU4HrV7r9uPmusKx2H6EPoL5oHX59Eim5d5afVewFUAEs9xAaRYbfei3",
  "key1": "34sdMoqMbMDg7hxsYceB4rjLD2xsiLEneznjB7JSsTHkj5WKwJme3zbb5NSioP6w3CFERrd473oNuEd5JYxTdn7L",
  "key2": "3tir3vPxGyiUAHgJXWjjnnj714FUwPbmZai7DDQEdTP7woHreRcpxacvwN8gmJF6WvuekMf7hQ8J6y77oYzs7EJq",
  "key3": "5JHg3bkFsAHVmpbcmJvCqFM34trz4T2mfFuzYGdEjknaEUnZzHwX2MjKUt5ML4T1iqhx3FEVChjX7xn1hw1QrpL9",
  "key4": "sm5yQRGJRTY2iZX5LJFmf9w8ShH8Gko5FEhRpGk5GFCPoAifQGXw25hbs9ZME2xL5aQ3xaMy8e9b6PncyhhfSjq",
  "key5": "t4CJkKAvBbJKFTAEyW1QqwLG45NrNiUXydrdG9SQFTAxjnhWiSevLuFuHwHnbuuWoFKMUSZ5TV7Dx4Uh6tt16CN",
  "key6": "2zHvV3ccHNGGW44SWuaDN9BSnCiH2wfgASR8EH11n5QtYp2WCwwJJXUdyHTAM5Rd25e5mWekyoFg812tQerSskv3",
  "key7": "5idCv82TezDDquPLiajkiFouNuAfDzPzE8PT7tA1zsgefPmT5mrTsCjjVAFDpCJvnV1umS1z8VEX6dCrg4Qxu75K",
  "key8": "5sHcFPXsP4VriRPyhAQ4KFdMybYfSGYnNXbABRkWiVQ8uRcXkieUCmEr2jn8fi65hWsMbnuJQx3ejNtGwgGMZsnb",
  "key9": "3czowuWF3msFS9giGZZ6w3edH3WX7kwHBbks5KCUvECLhAo1d1cvF9h2F9bCZAq4MFkYdVBNULdwHH8U3F73qNRx",
  "key10": "2MZbxbwKqXWr9EVsBBu3GBU7PcvAZW6HwBXMzDfcMK3pG58EB11iX7dYuY9q8fkDqv4zaDYzBdMjNaL9NecDzK4c",
  "key11": "5UEHiGYYE3S1iPKYHJ7Xs6v1tEpi62A79VPGk5G5EdfkqXHYKtoKdiDPnpfpAKQXG2YnXrhuM4tunu4tKTiY76c7",
  "key12": "51aqHQGcGQJs75hohgofsX2E9dVoC6Kk9GxSMRznXsirCVtvV4GoN6bhf6p9DzGJJ7p5FRpLV8C9BYUV2ERCbHTb",
  "key13": "3DWhwRhXeGXyCqMjXc4cnkdsnGZA7yLt2HeSBRHcc8VBDCtVfGn1o4cKkMKG9Q9LCfekGbrSxWTHMWJ9YM41dnoJ",
  "key14": "48nDQ2cXZbw4arPAcJBkWab6eHBshgroZDFi47FaEfKna7hUL7tFPwxi2GfqmCkSv4vsDcpQQmmqN3pYmeqUs48H",
  "key15": "D5yj9Kdkq8EKqxAmMFEnYXhyzrYareDVQYcMV4GRpNjWQLe9qN8JjUUg2rmEXKRyFVo1xi5Unxo8ns8APCJKj3L",
  "key16": "VexU6YvZdxQ45nuijf4PH25MakZtEsYb7HQM9wXLQH76oYDKfiKbRoovS743m4K2xha5HHD7g2YXP9E4vMZFJJ3",
  "key17": "63TrQhBpAt9DiUam4JJFoiQ5qG54cT3wc8cpRjdov9HFiyZVwm1K7UZPFKN99SkWbvJT6nDTGrHBe5zYTsY8c4kn",
  "key18": "4fqzsuQee87r3KEKt1Zg5R6f5z3sbu17S8ouaCM82WqMzAAQb4muusEtcKRHTQxw1dK4ztVZcgNJwxsMEGAYxHfv",
  "key19": "5kUYfXa1v3Rtipk4V8pw6YCeofUF5V8dEaqzTS9Lmq2Vgk3ULG5BJrGuqkJQd47kXzrxedgQmr8yapemHxBit8Zn",
  "key20": "2qPjCJcWaQyRntixMTLQcHRvCWtnmPrpLSwQ6DVMJBfrNaBazo6mFdmje9udf7qNqZfAyXhfCyrRgJBbKLnVVTjb",
  "key21": "3TNsjaCM2xM1mGQPJXQDmEaWREQPPPHmqD6JHT69uBCUHEcGM9hJjLiT4hqJWLBWofTfqSv6sZUkz4QE7nU7ZEWD",
  "key22": "3seWGZdGZnatW7SGEMeNnm2n8ZUL8uvpoYwkb6p4j1nnvajWk6XuFt7zGnz59u5CjjU7iWE5ePmNh2FSoQ4DYCDN",
  "key23": "5m3Z7hPYmMVZFedn4UAfFrNBiKGymuMg52W87Dv1GDrnx1pRPF9dfCTUmbn27zj3yzWCVGqoQBxgeBdTtutckwgM",
  "key24": "4XrMDpaFNqgSBaKSNhiFT37RrPAUrZp4cLcmmkfkxqAJsxDXJCcTaXmDGbHJKYRDnQMBtDwtQ8LsSjHX19GkXYcX",
  "key25": "33o5hLzCMpWa5r6iuK2bPFYPEcVTHTZvG13yYToriEksqveMpynU3NV2LQCT4aGYqiRm8U2RBiyGbktBmgeWjCdB",
  "key26": "4P1ijfWgfpRRJUyo5PBPLcs3xbV5zB5iX6XLLsA5bV4E3o2sFXN5DHJDYnoJvid5WNXVgMHjXPdC7pmEWaiMB5ER",
  "key27": "vzw3eQTTazhZGmUGdfk8o6Dh3nnYLZgPoDfsGQR6S4MV2xhieVEP2atwy9u4i8fCxSi3hQsMVWn3N113WruPdPD",
  "key28": "43naH2EC2fQr1PWcksHuX7KMakXrWLw2tuLoDXqEiZCLND7QpyqWy4JFPtgdiXzCtCHU58EJeLA6eTy91i441ySg",
  "key29": "3rUGqmJjRDghpUhEvD1dTxpq1NRFAARfPG4xNGMZkxME1qeopvuo7SokXoxQGgyfMi81puLMPYEVzinsH71M7Vpi",
  "key30": "4k1AezmDvJdDSAJfP4PZc1HUi9aLTKr3uvjSKZ6wRadkp57zmgwZDWjLBdNc5SCYy5o49kMvGUHTzdhUBujzP1Ec",
  "key31": "ks8z1imcKeexYAxRD1U8Z2Lb9rgQhNYDBRpfPevXKrzUMkD3GQ9J31nduq4sTU4uyvkWSg7dSaXaptd4Hf74hhx",
  "key32": "3REwui9cBPeoU2mekc2eyZtLhFRfnDvXvhKVhdqSfDCaoZQvtoYmfw428eUbqPHuEYuskfrSbevYeoxqh2kkDu4u"
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
