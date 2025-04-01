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
    "3MoTYehPSq9gRNuybjyLRpK5uhR7ezFFQAVDEqVWcFXoPQmHzKdAREnViU5enhh1AEvLf2YL4bBS5sfb1re4jzuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEKA6pf1snFy88TBe7SLWpCJZy4nYZhXAh27LJwJppcw6As15DRWbB21yom9AKs4EJAyL2fGA2bYFmUwjYWymRt",
  "key1": "65jVsc2C2tLbfyZ2pCDFkYSpXbuY14xgRsi4FzM8E4W8Gu5GrRii9q9og57WVjq17RMZrRBmRiaU1c39ktH9Y4q9",
  "key2": "2No2d49zftCV1g4bUmqQnxVgSSs5CmK5iGDsuMTFvkHFVoaRjxkgqprrSpn8Tj4DCCsDnqQb9mQs2qqfFVjd1Afs",
  "key3": "5KmziEXuT2tRWnsafn2YQ8REswkMXuJBarUAxB4KJG2MUfuTMJDZ1LSYEepVSvx3wmr7pH3zHuDKHS3cUo9gEe8m",
  "key4": "5WqSUjixAsjxziGbzYGWQvajSMHj5DEiKzac27bkJmrb5DNvC6fZMX3qPMdwXHUKMhnTomrUyd3j66thQXZLYD65",
  "key5": "5V24yuYVtcbuHP8XGK2eC26Gd4NJ28duSHK1oSbLaxNe5o9REuinU9CfnqFwgRzp3oovvq7SBWkzcCw6A1Pwzxpb",
  "key6": "5LX7pM4bM8NhGBqzygrnqWMcxjPry2YbXYQWDRdpGjUpVPhf3bb9Upso839q329pTtQM6UEYjx8VyKz2t4GmiP4z",
  "key7": "4kQT9WbbxDUCHfDW1ahJoBRFeKuDV3E6GQXcR7eGDJxpL4WuQmWRANwce6oH8jspjQrZX5uiJtpXmZeYCGNVyC1z",
  "key8": "3XBZTJwRzWpieDgjz7SPnvvvxyabsyYJt8G5jzuGWz84e9zaMdDXMsSJs1yRbHPNEjPxLV52ZSed7XfmdSGsktXj",
  "key9": "31C9q8SmaY8QmKXTzFXqcuaj6b53dZ3h6pnEkdFUE4SfcGFsHSR65fFoVMJeH3WwDCKdoP2QoLJJ2eZ6hADLqtv1",
  "key10": "3mWmEc8FYdWuQKqFM63hnehfZtUXZRUXLCEkGFWj2ty3fH8BEvFe9rzgRdYKa8YnhFuAGfgMCu8jyPefaoncgtjk",
  "key11": "2CaTYxHBEHQvaSKfVaqSMgxX3bAcb9xyE5H8KjxZkMDu52RjBDGwGHEE1n71YrgcjzJaK2QZuwMRGVjpRiK7oa7x",
  "key12": "KZvNbc67zmybJPfHb87kiw5sEN262SLE4UkJtPVtvtJ6eA8FVeWESUSgQt8KT3h2Z885XRJ8rc2FDqtUSJq7Rem",
  "key13": "3xKDSphzBev31sQpaxUMSjpPv5o41LrHN1KKSZo4XtUQGBf52LTCXSRV2EeH7LSH2q7PAGxDdQTSPMa9Pt3yfdDX",
  "key14": "mR4W7YVHbkhgCWAkXUNFMs3YLhAHXW7DzzD3rU136KNaj4275SpKhzmHa3Kj85jejXq79CxXuE9ZLRHi45oGa2s",
  "key15": "5GAAY9UfFqZkw9BqaLHyqqfYskcX3itKa8cxSVZJfE6AsMjFZL2oW7FzD85riX2efeUnvXgeZnEaYNiPY2TAGwZM",
  "key16": "9xx6CugY7aiqofPrhERJ2qXxiHZQ5PvbFYNFttrJ1haYJdHbhiLtPxnsXDRdvqzpk3VC7S6mRG91zEXYFFmvGx5",
  "key17": "j8uTysCV3jQZB1riEiUAx2vcJko2CfTKfi156ey3qY8eBGgSKkQ2J6cCQ5jT2LnZjGhrxJ2ootHa8YKnyV7QBbP",
  "key18": "4xJGRtKVD5rRVkdc9Tam7PS6qZwnxw1VKSoDkSxtUKwYcfaSeXdtyUQPzZvnLSXRKMJxw8TsZ8vaqEHagCsdbvhz",
  "key19": "3sktmkqRsDsRWu47oLqBxs16VJfD1SFhqDa5dogmVckzhWeXLKhD48RNxQXQ8byiTfZHLehsxFycamRGdR3SYkpa",
  "key20": "22Q4wfWdG2cmhWwmzYkn8YKhyiC9ito7Y1ESvVDhSNQdN49h2vcPZBWqTV3bpttoXds9P91cWX9iCesGnU2oNQ74",
  "key21": "5p9MuvujszECcgT8YFptEcqkkAWXhuJRDa6zzYtTiZWw6UfAj3jZ9WggBrsFCbP94hmY3nEawN3aiaACCEvJxPfn",
  "key22": "2QRMRVTwnDM9W8cy4eukVBmuys97bxBH82yrWrg2ZKZMsnbTqm6PoUpf7QiQx3wtoDmd5TAwtym1FehjSFRszrbX",
  "key23": "5rG6bLcRQAxa3nhAXCJaZdVBuaQNQEa32TQr4nTrARbVbhJ2HkXNi1oxZ69Gpt2xvepVeApuuUe3b1PdhpDK2tox",
  "key24": "3Giyx6SuU7cKtkoV1wZnfBHDAoQCrBYpFKLy7dVrSoR5fTTrhBD3AHDCKruNUzusgmV339kKZSogtw225MEikre8",
  "key25": "38V1AQ3K9FgLbJ3L6dFq71BSLHqyTXw5XejybX57LbHcpXLowo2rFDxHsoMtzQd7anrvgts5xzGpWa372zGSkuhQ",
  "key26": "49Ztm5LwT2DJTrk4wC9Y2iH7DypHQMe3nLd5Q3aSLqHDmnNW1W5vBTueERyr9HmJKRtUXZ6V8L24e4pP6XTYRkxB",
  "key27": "dQS3DuD2mVaFSDRAzoFny38VHxPGuWJWnpmtpHwBVrFjrS6WPC3guhWD8yzysUoCh7YKPAco6KBMYwwiEcWghS6",
  "key28": "3n4fFgVqNWHMXZX3EpdY7UbkCk9xhK5EYaE52covv8PqdofaSwUUTgXAUdX4fsqyR9h2vxcM91CB4828sBpv9waN",
  "key29": "2J5LoXhTLHPayUbGEwkepuyxiMYSYvNvBx9dKAo8qSErae3967cjd8k7DpdnRkmCXooGrppPeNvWySqvzQz4TWFQ",
  "key30": "2zFoAxnEVMTnL3K7WqjRbJuzuMYnzAaGbP9ioGeR8kppjTeszevdt1P8sbKfSHYdVk4DZ1wvTXdFZFxP5cgjKJTT",
  "key31": "2pALwpBx1ndKseBR2qp4VZE8YEtGBEJuehLpYHZDfrLV3UxenZ14zuWkJAhj3NQ7ujZzgv4Yb581nkZcdJLiHotr",
  "key32": "2gHLJjQh71CVXDSM7XhFwrXYcfizoTaTghUWTTEi589zYk8tLqJVQWUNF87G6KGKgw4imAMJMPp4mXsBAw2zF7fc",
  "key33": "4gycAaokuYrgCgKZ7t2zTvTg2ES9BUHoiurFh3E7Bf1sKdouQNf8fPjftYvuHJoRzy8VBtH4NecEzGFmEAFgafYk",
  "key34": "2jUn7BAtapzj4YkKXFwV6M6fgMcysg5uBWyJNbjfzp5gtu4tcCvfVK43MenAVhQiTv6SYCb9tHXSL5caZ7iErj5q",
  "key35": "23Ez7eHMyCTkRe5LUo5TTem6BkZ6vo5CQRUhN56y8A6ySoPxuoK8jDEe2XU66nZqYVy7M89q3feLpoNf7uAX3wiM",
  "key36": "3wHdoyReis2Gif9pSWH6myz2q5rmkChH2aXrVe7rRjCZ5a7dwWLf3ETLvy6oUM2H8GEKhrh7rpp3EmCWRvYUVHH2",
  "key37": "5hdyQNzLhzNodtCNJELRxetSQyP8pmD3d9rdPLLFGA5TMypQsL24gbduSEvkeFVUqcdXdoDSGKWkFx3EkMUZPs6T",
  "key38": "2kQ7xkMctMbDCAuHZkPt6cZYW3LdqEgAwe7V2hyuo6TBL3gx7uBcg7QZjyqocrhYBE4ZUd6M7NGibPW8z8eue9Le",
  "key39": "5ZA36zHk9EJZAYnQmqTqB395my7oPLwJzb5ujavM8EMDcCTRkMMtQbq4ZF9GPNKMrApDTaDSex1RDJaDRrAx5E7r",
  "key40": "4zxgmU7a5ELWgQvKb55HEdGN5wLwCST9m1BDp8GDXs5oo8vvUv2GmHRp4GoEq7SVQir8eUkRate9etriYM7q3cip",
  "key41": "3g5onY85ozpNpf3tkdquamEeQcGYYEhjwvWmSL8t2YUy8RK3ievs9jVBn7qeoDJr5aLA7mrbVnT7AmkJraA5cvg7",
  "key42": "44E2w8Avbsqg2PmiraM9yefw1w3rfoxQyXEe53L4bPSGr1XrgBkr4shhC8WmGe5fcTKq4K63DQ2s4moVvadjD7jz",
  "key43": "kjKYoeZndiQmPTwLSJJqU8aV3dKMxqFFVPdGkLchmsrU6bDdKV1cXTRawpjRi8WD4FyzjWBBdsK3JWgxP15vVp2",
  "key44": "3b4Fv4ur7N2qRj1g2uzgdVo9yuSLV7Kqzyh6WnExHEpF6SzcBLvpsdFFYXoeaT2jajG6D9doikeSHLuMgPXQr3Q4",
  "key45": "4muuAEf3a5TeXkQbkD3VmMg1nvAbRVL3EPZ2ot2CcLu7C4PnkNhem5NHkGPu6PYa3G5rYhgWW55S3q9jYuCVkqza",
  "key46": "wTqRaBU1o2JhvL1SQRaqNniCPawGrpXYTT7nE8UEYMAVfmeKUBpMvSUFDYLAn4tRHRmGhsaGbcUdc6mBCJaaH55",
  "key47": "4Kb4S3gDixA2jmb6foqcZFThj25iHkgkm7FZqMu2y6NCcyS9FvZ3eUEV78gmBQrwcKrGu3ZvSooUZrthzbE6zYmp"
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
