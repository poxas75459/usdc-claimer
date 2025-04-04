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
    "3rm8LPucC4YzMVwXcC49uEebvpmepPdLdfpZ5RR5pkpPS3or2wnZVKonYgVh4bxMqND7Lsmee3UusvGjezvyiMJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259C6N7WjdGJzrG8vWhyFQPcRZckaWmnJJGWoWQJhkr8zcw6QFxoQ2bJdhuMqTV2wngzrwiLQgf2hURxzMbeHLLC",
  "key1": "4FXjvahHVmULCEA6dU73sCnnmgEGDJGUuApjbeU3DN4Zb3JXkLUpYLNjdkCpzfXHeu2hxugqagEUZ7URwD8XvxmM",
  "key2": "5cxKQSRB1vhzLeCncvXZZeGPkywKvLrh8cirE5wNe6jVQbxVWuV3vy1N5GvAsw8FgDaq4SVqQBcoXcV3MCi4z6WM",
  "key3": "3uwvPZ4dNHdQjbhmyPTBPPFiho9dnerh39YP1iUGvMpmxCrNf859xcZipKMjhXev5jEqgXWfZS4Es8qf6hgAKcFA",
  "key4": "53kRzUC1b1Qke1vVQRASJ8py4braJ3dhcd3AVyqzmQq1DpsMeA5fTL7kmUGck4swfTwg87o6zCGAFBxcwh7kvthP",
  "key5": "3sT9JAuvz1vYmbCuFoD66feo7TKeaq6tuo75anwcLfPjzgRUMSPg1XWPyrkHJtpdcoJRgLNujubbnZnqzKxtybvA",
  "key6": "3UcFFiRrS9cjHDxYFV4WA357vtY9dUoYLfxBqfq9P9cGjBHQG1x7KCNCJF7VfYFieDx8m2oVVdoXTvMPWNQok3fK",
  "key7": "SHDccpXa8VoakfyiqyuqiRQ2DMogfWCoEb81ZVHtPm4Z6M3Gig1ciM4GbABuQVqr9atdy4vDnsHX9GTXYwbssdB",
  "key8": "2rcGuE42mVcbMpzPNQABRqKAiwBJ8CV1643V66hdaMtNEaVqhNkRXPs4T3SJYWuKzhfPQEuE1hRPCboSXqDinSDn",
  "key9": "2x1BCtGCcCCnmk5PHwUo2hGAiUrCmAkhJMwQfunhSN3cqDBe8KvTVeB4oiKZzAL1HULYyJo3cjvsV9CBrfLKSow1",
  "key10": "36CvqyEJEcuhDS7kHThYRLoqBBHzsSpn2EJsiGhai24SVLFJSens9mSyarkywXvYXaBwXcXX9zBnUCNbdGAH6YU5",
  "key11": "3ps3RwwFd5dcvJCzaNNqX9pSwZcpDmk4FaTx5W1QVPkiAKx98wavhvxwm2kTJrpaDyDYDM2pJxkCjsUSXDMQDUeP",
  "key12": "3ze3gh3JPVDfJm5HGk5ywqPS5TqQ1F5KwGMzGaRB5xKy1PNQrB7M8yh4kqKjmsNhMMoNvBu2YUoqdZKxH8J3RM1t",
  "key13": "66zvvBSK7FjBLdDtMoaDEQCqUakFci48LT45n1dENg812dkXi5mVQse6b69BzC3JVCSaGzVXysWYbinKCAP1tcu1",
  "key14": "2prKzaDLFAShKNccgX8R2jEjprfczYWuouK8qVqSnVzbGT88AqYT12vcdroeAsbC9AXnPz4gb6Zi9kAMWkQBPfHw",
  "key15": "3xQN2MNQbNWjbJwQyujkHi88LucsnpQ61w3wnkuGURPqbUUNaLK8F6t1iP5uH1HFjtvABSjt2NMbuo2VZNPiwJ5E",
  "key16": "3VufnyvX4ArwCu3twuuc8EDFVJT3chnYogpiLwqWogDrb1HodLM93yXNDCjG3LcJcTz188bobKfh4f7tuk2yw6k9",
  "key17": "4B1xWTgZvWi4QKmgdhuV71zKv5SH3nPiJAwJsMmPQ7CACXY6mZs2jhWVWFFwRGWf6HN2yA3mBWvu52TgTfR5disE",
  "key18": "42yBgkJ5MQeNvLAyk75HySkZDhNQY9wVE8PgqeQuLn13JWxcwCsEUDFNiYSx2XC2ETghRRw9jDyuN8MD55Apyy9a",
  "key19": "62LEEHfdCUEzvjbJSj4XeFvDfVBrQwyE92kFeCrd1MZeUHCE1Kz3BTFju468NaU8zf69UFw66zQRxUgBB3zW2WML",
  "key20": "5KJTNAWH4ALspWiT1V2sxeTFt75EMtDVcf4BzePeZPwRYyFh6wJ2mU4H4dKKMrEAvPjpbuhNr8kNuJRSFS3YBW8A",
  "key21": "5TrhMaH2WjarQowfGV1Tgj4GwTzAjdsgdtiUZtbjK3CaFeefGidXAh5KEpbxhmKBAH6Wr5e7fc4x5vSV285sBujj",
  "key22": "35fa8A1kSSuPDgf2MVzcfWzRQ8qNxRR4bB8TU3mn5E4ENDVXumehfjdJP77uZ2BNdYrNb4ZRj8RiEJMKxyFPjT9r",
  "key23": "2Jq77h3vFCs1zSak9cfTCpWrjXT7t7huXhYvtvo72DZnQfBzcgJEUuzZvENyTf6CYVNYD4Drpd6ZdyerYVbsk6Yi",
  "key24": "2CrXyLMKpJ6H98w5qYdYqWj12t45dir8r5JKuu5soFyqM4Z6i2STJX3uWbuTEkbzCsQwq8EafQWX6LNtAkqBDcPY",
  "key25": "4Ux3s6h89BPQsbYq5Hypdgitx2bAYnJVjHb9mKHQWo82ktK5NSidhG85iWtbuP97iV17LePnENDoS3KX8qHj76nU",
  "key26": "YMBQRPTCFER2sZAqG2j4kBfRSUEMdobgrZHzE7hy3bme8v8PGQzUghTT1PyeACFbj3hgFjwcrXMs7QZ8ERVKShf",
  "key27": "28FPST3xMXSrTEpDYCmwG4Q6oadbF5UPUbFnfESpSgnHW31ozRMuJ82mhTZt1sHqjV5mAnfotUWDU8dHRrj97dif",
  "key28": "RrbbuJVqt4VH6TGfy7qTnPg8oPDjAdEn1JSjCN7Zp27pRpp8ovZVcoRmEPCtkwcpRMXELKbXg73tz9S2xKNDZHj",
  "key29": "aUwuaUtp7UYn3hBvhxYdt6M52HH4yzETsWoZqmHnwmHhVcRr299dvwvnP6E1UTdDyKQkVsvBv7fL4Wex34CdWXv",
  "key30": "51qaiKv7FLggViszcboB4u26x8yaa2yEaGb3wwxExTMwWwdbTR7acgG9g5tBBBNYwu1PaYRaaLsTziE5Loiutk4a",
  "key31": "CBNfijTQAucbXpxR1JMgAh8e6dcGswVTCCHjAv9GuX8XtLJSridB6vjhPSdyxuqaK8yZkLHaB2cNvRFMLGHZ7iF",
  "key32": "dCuWjo7kgbYCkHKSQcGp9k18f3q8EK9vvKZAWkBM4D74gKpNPH43v7sdRVfD9chqt6rDKfxM9TuhN7bDGtCbnRu",
  "key33": "2RQeaJpvp39XGDE5C7GLuuwNh1DtNTvnPsb9WQt3mNZkhDYNCRN9Unn7cAGFBq4dRNeg3tBc7HhwzW42VwDAgLQz",
  "key34": "5TYhzcKxxxTgoYMoQyjgaAWNBdxsnjy43JL3bqfXZyzsZD8JLLGMFfykGdGzWdtzGY2C6RJfEzFMvt83ceHrGRnU",
  "key35": "rLRtzp4Wa3sgkLy3yTmKWTDJboRwEPBgewWHmoNAfrNBUe4wGYD1CgbgD1y9AgNZdRxRpEYMoYjN1dNY9g84qwv",
  "key36": "2XqSVAWpkYGHsvitbjFkq8uK4BA5gKBw9tEGUiBCjuiR1M8sjQCQrU8KcWbURwPKLtxogq57qxjz5yPafG5vDq9b",
  "key37": "5ij8HvhMiho7sjtV38R3gBmUkvZooFtu1eruNYhUuTV8nwe9ZxuAzA1jaJqVuQkaPjb7c8La1jxUQskt4VuNjFmM",
  "key38": "3Hj7E6onYgdKhKPcPtWqh97JJgvht6Gw8ihwnv3sLfMyx6AME748DfRrxhzQf3By84vRcp22Fbs8Yvdi49kckqyY",
  "key39": "43WWafpBNDpazudJ2g2yGCdEYDgpVyUgBbHGSLgBnBWpsxgBLFuZESskRNJfqQDwfj8Jv5j9CpdUcRrQmqj3Hqvx",
  "key40": "5Fe1LDEVPzpVMY41LrXo3s36DgAosgRa6i62BqsCBekJNMfdoeDr6BUzQRD7e7YjMSQDBNkKqrYMV6jrEqoey2Go",
  "key41": "3G7UsajUsSHovWwqvAGoWVMaujTJDT7e1QBRwteSXpUeigVVaePaQHKp1gQmJ76zBUtFjsqLrBCREdrd2qAPb4dz",
  "key42": "5iY3RH7QL3kqqK1DHjxYgxK65xeaNUFmgV8Qch7xHTC7yi71c65BghBv6KUHciwbJxa54UxDXnUTNjZ1vSXm9FLy",
  "key43": "hmK4ikP5CBjqEtRRzjyTCH49dq32bzzJyiiCWZFHuxVG8N1pQMUNKhLqhNT8JGCQsKnakvvcgy85YiZPJ98sKho",
  "key44": "2L724ePnbKp1LzHZdkubPUKcfr3pnFM7EiJYY21ZbpZ92XziDSNKP6YuGAcZDjPjQycnipsK8FhaU5Q2GoA5PAQ2"
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
