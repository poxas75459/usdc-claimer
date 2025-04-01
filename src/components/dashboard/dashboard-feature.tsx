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
    "4BjACYRRGVE4Lf3RWcgFM1rkv4QoVgJgKXT1CPT6DbCru6Lmq4c9wtjSBoGgzFk6vALkonooxqL8517Xqz3WsfhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtbb2PtjdVRURKP79x6NW3RRXoZjCoX4zvtAR8e7SzcVVChriadyn5R8amBYFTyDM2g1WsBvcn7KhZaY1JH5cV8",
  "key1": "2n8befPc9osPu6FPrtbs59oEYrFCjBmzmf8Dsg3qZ5WRfKXcffoJyDvhPtKa4S2gzLgjkqwgKbSXvQsWB912GPcU",
  "key2": "szAxiq23GVSrfSeji4fPNHhoDvqwJKhfgb5ALfprcaVNTCkraxpCTC7Qdua6yHWkjs3NFGrcCyKGECjRReBkQtF",
  "key3": "4QVBvVbRPDfAsVzC8Z9HYdVjdbGrr9RmhGGwkL2VQdrgJcZmLwQzZvhfvn7pmoGx1VnMxfxfMoPR6QdH9qWAhSWf",
  "key4": "5SGU9UC26vYPTANFsioGjAKY7599STp54UyFZdBtYGRAahxrf1QKA1offGPvAUcgNjKsAZyBoM4WunLtoJ1iDGAm",
  "key5": "43jXvY2XmDagcHVmgfaKzhRA8Fsa6nqy9oZewTCCqgrZbLbRiBHcqSEvyYfiLvqqrkAVKQDYa5tB46SDnEpBvo9S",
  "key6": "TBF2yjSMeX5to7VLSNr1civQaRenyvt18D4gzwY7MuP3VHeWa1NaKQKgxoXm4jeKkz1Jy8t5nVKJGQkjLDnBdxC",
  "key7": "2ZqLKj5wgXJagmuH2xca88umXakwUJMBGQb8x7SL6KSfvLWByxRrjbrhNfcQ69EcczYyRWWTWjWnCYKBADbwpKNS",
  "key8": "5RgnkeADSMKci84NoBnEJNspVa47D45Aw7W7f86Vwo4vzmYEvXbcGerXy6mVnrPB9UzpgKqYx8srxdUVA9mvVzS8",
  "key9": "4cjC7v9bFL7wzFC91LeQvxsfsWN81j8mJe9SvgNQJ9MMw6KrsrSHGEtReR1X4jE88KAnV4WnK3bjd6thzFtNVfED",
  "key10": "4DR1PDMoFDDTNmVD4UpxdJNCfioFhH7De8qxDNpKgNseytitd97iYCa6xEmugkmwPwAAT4ZZugQNFC1RCwgYrAMU",
  "key11": "22A9WvBj46Af8FApXNAKXAAQoVx3f2vMTK2DSq3NMUBRXWUM5bLpdCzJcq3hsv8ivDKDgxdaCNxWBVPsL6tZhkkt",
  "key12": "3fyoLRrRQ8kPtwCBiUuFREFEsGnuEMnfP6CG8Ra6iUm8NaYzMfAQnGZUEQvaVFyWinGWG3u5zeNoNEjHCqomB9et",
  "key13": "4QJxaG6G1pfBCJZpvcseshKqsSNSUUvQeHPo97NHtn1WnhqsVrGRUh8UFYvsra1X1aExu9HDb3wnPri9sYbvfqVk",
  "key14": "36r59JBAXRq5bG1NB8Fm8mFt16yzJqbQoRMU5i4hJnvG6uwj9uMquGSVSHz5cuNvwrGHcnUhEy44biMWYT8fqdPu",
  "key15": "eM3yk5TAcXjgJP1Ut3wnzZdojmyfTRqE28C7RnVDmEAK7xvqPi4wiLUaiTbLwgxvsrHzuWYk7Cug3cvdZruoqfU",
  "key16": "61pYBAiEDhbYXh6fXW355D56dPYA5B4ra2UPkjAyUSA1whUB7i9j3fe4h4eAjR45jCDMWArGKVmNrwNfhWQ61oxP",
  "key17": "42GTtKxYi61L1CPW1LqWV3N5ETgKNA7ojkVW42cGVvsiEP3ahWdQXd25Agi9tJAjTeibDPpnYJRXFxC4KrUv2deN",
  "key18": "s97NDsMxpoCiVTP8NyQbdhMt42uyecBAqEM4UNwib2bfvXMADteuTKB5NGoZh7R4auKNdkeQZSndcXfxYeRimqo",
  "key19": "5Lkr2fwoXKGh2qbfgz7szP6yqE3cJrsiw9rZvmVvfmtW13fjcUfWSHLdRijEQS8zYdLeAuFbQYRpty7W4P9t6TqC",
  "key20": "3tZ32vPgZthCBSmLLcftMS95WmjQ6SyvWCcpfnqpRiXadvco4d622bVc3kNehwdboVGaKkdjND94VEzANjBJZB5i",
  "key21": "5yM35vpY91ktSiTzRRiyZv9gVSKGEPPE1TP2yLaZR92MQ3Z5QT7TmDJ2BKRBfCTN9Z7VFrzoG71YF9NcbquKN82d",
  "key22": "45SYvBwp79Y9AQDLW2nZ4oTeNKnB9D2MESzjxu2KxAi9jKCYXeSYRRuMorkzdBJkqutnG9NV38GSBgFDNuYMAJU6",
  "key23": "4B2fgeAR1Dbi99A835A9rEf2hkSLoFtZ1e7dbMDKAjUyJDPj9yUYTU1wqXtmp4jbg49aRXkkBKuLJQgxeLi4P4Cn",
  "key24": "44pqKPMFXcqZ9xwmod2zkyYBPHtWL8JT6sYD4RrkZTa8vFeoZ92TGCAZ4o8vDzug7KYVhn6dSCbU9ffktgHRCiDW",
  "key25": "5CiGw4pYS8CyofsGeffBeKgK9qq1UqZxYuNRaX159MKUNU4vmn43nhR31VqZAKB7hhnJDAvG3nJn7Adf2DV8gnMH",
  "key26": "Sv7B5QB1jpzzVqVM3azMT3WqonnezJv2TxHmnJX3kBJpr4tyBikAQzzARVnfhxWF2Sn51o9isFmuQn2oAKTHHGw",
  "key27": "4iEKoNKBYvzHPkydshbQRZ8wD7h7UfDx2bv953Vhazbxd92YAnsYhBfHhRuVpMW8JMd48uifNsy1kfMYtpMmARss",
  "key28": "3k9hkZfh4KTMY6ojRDA8uAbhJYeabpB1sbtbN2Cwk8E8jqJHxfPFp3yKS5iTg4ZLUKpqxfHvCKTE5N9H1WTFBEAB",
  "key29": "5Lt6MgGJaTGrEvZqud2HJYEBqM8cgqy7tzuNp8GqindNLc6WAjY4SANK9vL6DC6QTeoA68z88fyouoGS63Wc31nC",
  "key30": "628FM8JF1HgEMVYnUeurmcKk2LbrPHtAUnJi7zuBLo3pNpwq6WsDrfQAuFs65cn5r9QFE9tB8VVFutXqX5rYtmNz",
  "key31": "3ziSPMNf9VkERDUti6dJiBSqvtCkajSBDLmaEdm3sHB5d3ySzZiuzvgQah1rxtM6dw7VCnKd5KbQL6raFB1SEo6F",
  "key32": "DiAUCdYJKjerdpqqJ5iVmKjUF51yKJDLqMXxmZgieBuDy4sfA8vrjb6yteYMD5UhMR68dyJwe6LzQ1bk7SqHZVj",
  "key33": "5TNaxqhe4gEsxUYSHwgLQZJ9Qc7b7bFrErPbB4qbqZ3TBHiFRMvz525x9KUCUsTn9vY9qf8oC5xduoai5dqby9wc",
  "key34": "5Rf9WQ9UsWBeM9fybPbi2XWtTKQJF97TXx3ZY4tNohecmTdtGNn12dXdHQMoTVkBEH9VmM5YEwDJH8G3QQ5WeaGq",
  "key35": "3PFy6FDVJPFAxBCtDenqPnM4tQ575fTy2iDqRC8zCyH3bAJjvN9Gna71GKZkY4c7WuSgiU3G8wbJ8qRGA57PVTTb",
  "key36": "27Hb6sENz3CBHZDuCxNy7Fp7yAx85BALJ1ADpNng3EepkF3bWa4mNx11u4K55pf3yQPFzdV7xmbRVRcDfxiB48f5",
  "key37": "5Di853EWf7QX3FMND5gYZRmLAjqxHqnL65s3JPN7f2qFqZtEHadAeNuCBFFEcTMznw5Npx5zJvzeQTGNLSRAeEsc",
  "key38": "3ovvJeu7SeSPCAvBTyoV1fzu83rETHHTH2TVrx4gvPh9yEFkV1yXHsmGsbUP52qTNvzaKVAFaeFXYsKrTsJrFYmb",
  "key39": "4BE2qYqiYqFHKiEv7HCWMTogTHrVZFaaLKxxAWRtTJBgZpKBEGk7d1XPKXhCM2YBVi2dS6Uo5VhvFUoaJDSjWj2V"
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
