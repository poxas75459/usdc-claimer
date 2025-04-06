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
    "5TTG9DmyQZQyaTujk8yqm1nsSdapMmnGw39vCjSStRGDKbZVnnxyWuHRSduicitKnUL2Wmw18rNUH787cQakETY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4higq3HuHgwEpJ4iZCBDWVRDvRoNgh2m2YtrecheUGxRZ5oeHuAiDpTb6kUHuNi7PVpeCjC13b5K2Lzd444KSwiS",
  "key1": "4k7jXtfTMmEzC7pwejJKDCLw25ERyNNKkb1SYQGKXNh9fCA6cN6iMikaqm4rN638fHQGdnVeBN168GjsfxdUC7Xi",
  "key2": "48YcMiZnSoHHB8AeKLMppzHEVvRyG9W4v5XcuwDzzD5BQonzaqM6YW2tNjPx4Z9aD4HsiU5yavDQ6z9guDgseye7",
  "key3": "T46mrwCmwheiQAhg2nbNsLBgHiXa4oP4eW7NJUnGL9765BRYEu4xXwqeFceJKoG1ZGABGLecp5apkN66of3xv2p",
  "key4": "213hHJT8fCxRmVbawrJt6E2SZYPjkND2zzCuADBK8GZK5zP2dUboQhwF9dtXFpFUU6VN6zXas9P6PcGjSxoSbrcK",
  "key5": "2KHv8JmJSbVEzBF9enJhoQJ1sP1Uh97F79QdeaJmbZyzDpMSoF5yGLAPxTXHRY3PTNHKYMEn7gocfHnnowr8tTZn",
  "key6": "2Mz9tqDEAREcaaQMC2k46zXrazCZkwaMwiGKcuyhnDRLYeMa5GCiJ3xHxb2WMhcPQupKsnBBmgicY2Hdy1YUPfN3",
  "key7": "4CV4pXRyfTU9Bezo7QszdmZ2h7LoijuQ2nvxGXeMzV9fVgMguaiRfqoHSASrimhYqZoWYWSM4ivQV4BvzSUK4igL",
  "key8": "nAyjPeKNmsoxvQZDyFhUWbwpUdF7PMJ282VhR7e7KTbXG3wK92tfY7wAwz9Q1Bmhnxt5ryyFajriMX99RiKVqWn",
  "key9": "2fpgTyiceDNW67FLYV1iDMyN6mNu1uqH9PbmcmTWfcJkhNesW31uJwsfqYRjyCwCYmgXYzA4pMh7b5qfEqvbA49p",
  "key10": "51dhZ2Nj1jJvYhCQqtCcNYCoEx697C7LLzTw4GtwTqNicKjyrp3RigHv2zSirCGB2U3wkjwY4noPdZWqvyRZMJRK",
  "key11": "5guopKxXVQp3vdm9EJvCLntJFJPHcickJcc2StZTWdTPXZrjPEfttPnFWrnyBjh4AHWhPhZL5Kjf6NWStgiEo3na",
  "key12": "3aP9xgHSw2KhgzqzjPFSy6TTdxqrg5AtN6oYbVEckryn8rzWidsmarPWdGgEeTazTQK9ywDG8afaCyPANkHBqH1F",
  "key13": "2FDBqB8LPrA3LSERxWhHmnpBmGtnR3dVL4Xmft5HR9ZoKs4acWjsbUJExG5WFEXRajL1gCeod4gAXxN7rkBcXvcB",
  "key14": "3Z7NMgCkLtYt2aY84aCQdzHqN8MsiR92VFTSMxzXCXeyBFoAf2mESrAsinKBPqmTYd5XGMudkgqES5r1A3ZfpU1x",
  "key15": "5rCcA6Y1YKdSNaCV9w1agT1qVTjujPB5nY91J1zvfs5y8xssQQkruhb6GBfr7fqTtA9JDWCdpHqdSGpAfSLqC943",
  "key16": "42voHkpbWofZd7iP34ZrBXrXV19S4Xs3EStQwB3b4PbHVWRkD1ZMYNoKYApqBMWpWQrLeCWPnx94aYe65FeHK5XX",
  "key17": "PGQCvJDegdnxFsFXbx4HDUbBiLQzwJfo3HMwGp2mHo9Vj7TgwmUKwo4WpZKcxHBkQYDueFJvJLNgrU2YXPbtx3u",
  "key18": "4c475gqtfoWauakRB3CDmmXmMRxT9j4Qnq4vxizP1MFgKbub6t4osabwP8wiCrw67YfppimBxqGUCAwQhNcwp6xJ",
  "key19": "5BWBg8q44S8bPnXnkbZXkYtYexGrXf6yghzzddoUaEEipoGVu1PbNJdkKFzHU5YrHFU6e5fSK21E2dUkPWkJw1Tn",
  "key20": "4dvgjH4Vd4pu1seoGQnecfWX5usmvd3yqzbdT9GZpX6qXitKEf9Ae57LrvMvLRf63WUw71UqebSgX6wybWb9nJMy",
  "key21": "4zwghZDVajALKDMXsxEAMQiZq9Zr3QTcb7jjodbhycC7QX4NCHZ7J76rCcuCvfMyLQDTWSZvnrmHxN8KoY4kmsEC",
  "key22": "zSDxWoD6VPozAr2kHHZ1RMRVn9rZ8k44BYdPJDFUfS91Hm7DxtEjv6gDnQrpAxUdoVYhDBmmrcE6jfB1xqpMM6A",
  "key23": "31WZxFVdRL6kEuJGcP8ZKn3CLmHF7ZccJwmc2Ns7PdVn4vSqo7YaiBHDc958Dqv8LL9sQp5L4x2aYNaeGsftaCnq",
  "key24": "2cvpHsLPWmcu2KQq8YVo1ftXgsARpY7Fvbvz2xy1W52xf2JQWbAkvhi71Be9yGj6BvtR6nF2j5ZACx579b72wygS",
  "key25": "4aFt37EoHEtsKfyQy1FeuJX5RKykk5zq6zaLfDAAMxqKZtpmRYeubUHrvyLzshpK39FFdvRWrMLkp4xmWgXs8aMW",
  "key26": "4XkxB89NGkobLrBCsCejdExfC6jWU1gX8xURFvyXmWKQBR3uHtJXPiv81dpAfVzrcJLubSD2rUm3ehuUL3MV8ndP",
  "key27": "2X47Mv2B8zDQaU3NxrZi6FUFjgqM57vcEAG4ds2Qc8zhqkhbhiPa3N4ZmTefA2yEQ3S3J66w4ExrryWGZKpRoTua",
  "key28": "Vb1aD5cTVMAGN2r11NcGfQTWUZKuiEvyPAe5gpVcywpAD5WJJbbqQ1fhoELNzcSjCNokWhHtCZ2w9ftjgKrdMrK",
  "key29": "T7Ev1mfv1EjUskoeXGcY1jeaPqnr7Zb2Ef7tK113od8RmZ3navC3WiBRf2aGuiKktP5R5bGtnmEV1Z1MZr5Mgsq",
  "key30": "teCeNCbmr3mPg1BkEU3qToHVcfHTr4WJLPCA7RxWFcytBMWhEfGAmk55k1cm8ptrunDQWfVwzxnYCyxU1DngcPL",
  "key31": "47Vtr3yCQxmVNLaEwFWUx3a96MMzjWR2Xoz7LDYSu3yBSxFKnFGfkuvZ981XHrx9kpqKea2UCTgjvaxw3nWDQKmH",
  "key32": "52ztXm7kvciMzpkNSAuWqCGqRDkfkVikfpQcVYcoPgfq1oS3pDoE1RcjvnZrCY2py71SsJuTemAbHcZajeduQBkJ",
  "key33": "2c9A8kdUwaRhMp8n5RTm7BVfymrJ76pMkUYNHSpC8gAuKhRjLb68hbwBusZ7TQtc51U7voubzf5TN4Ck8Cz2sj6o",
  "key34": "4mrYdkAH2LzbkKTRioEUKFAik92S41wLwwiT5C5fKAiQ8hVkHSm9c7XsjaeSyXLWtAVykofZA6dEASuvsa2r4GMw",
  "key35": "ebAab7QpmbtBPFg9HVvBaYtJKbNPPBXgNvDbCV7QQ917ZpGUg9NwWWKB6XS7D5VQR2wfHPXu4p35FKzxbc4pb2a",
  "key36": "5Cc3aE5Nf98kwNmCqcDUAiK8GDF1VjzaHYWnEek6278wLsEUELaUw4SMY6byJKJc18YKCYt6XMTvHHxUxKt4vmZ3",
  "key37": "oAEeyrCytNB9iFF34P4rsVQgiQ1eNk8qJw5CVHxX4WnNiDRQNAmDvTx9PyP8dkGVP8YFqFoUUAgVrCpVPur6PGz"
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
