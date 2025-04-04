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
    "2AN1F2n9b9m88dMBaGVhzvCkE7PKf21b6AenfzuScePqWy52JUUGgXRzqFqXHbKMxN8j4BKYx7fFYxA2mbiELyZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWy5aYHQPu5crqZhR3ivGF1wnmPgLpQNnNnQTfxH9f3G4E3trUbZFz1m3baZ7V1P7CdHRh3shf3yHT588DGLFVG",
  "key1": "1Ch4TtbjCLyVofq7cHB8giiq4SUGef6QQRTcmhTZcFee1K2Hdjd4L2n6hwQCztUzDew2a3bZ1bh5YDRNqLNMgt9",
  "key2": "5Fi7YhMp2kSMy7eRCX4bTcBTSDMCcKgoTb4DdbuHBz6tjetrBA8W3caVw4XC4c5JtZQhobAvBkDGxFMATa8Ksmqc",
  "key3": "2ByNdSuDGUduNiaxG3s7PQJbFCYHJ2k6wtUPWLQUyRvjGCa7jGWQ96ffbWpqFK13WXjqAthnHcLx8icFPMbAjKvb",
  "key4": "5j67NcUkUAEBEMvYdoTtCEZCHbMsextUJWVRizooCSsye4DZvLqgdkCyJ7TSHSnyZ4RNtwdD7QRPMu7sdDD9nEFv",
  "key5": "dUDFh1URnePRwtSjSXScqjVVD2gG4UZrVLMiG1RsB3MyHwN1aMHpw7fH8rfRcewxHambqKL3MhpDXv6DgAbmkQu",
  "key6": "tvkAyydi4DXs8PsftUqjL4i5iUApcMc8bvCHNmfpwPVvuGChpdmX4LRyk6GHdkpW6H3ygb7tHzzboRLGBeqjAEW",
  "key7": "4oxGHaXz2MiPkFAhiQx5KCeMjmwvX7WytxjqLyw7nYYtS9XbDNAnytgoJsTqcGm7ctk6iyL76HXE7aD4TTHCZgVi",
  "key8": "2BoLod4GJAWC4vkL3kNQMKeeeZBoYVAtxVFkNAWaK9J78rWFLFEeAU1mcwnGEPVsbqmsZJWkTUPNjXKBbpHr3y9C",
  "key9": "3GXngwGtmcc4M96JVxwo9xsBf97BR6DAWo68eqzkESrNq2UuYC6ZQNGzwBkrcYX8hQjpXkV5UsxRTKxLuefJ8iKR",
  "key10": "5HYsdo9LQX55oPHsqvAPPnWNVmiWoZePJmoAzRjpUY9qp5N4c2eNU1d1tBkMPh63otMSCAhY65gRs84nZS3BvixX",
  "key11": "4smUgf5GcfK7vXZPBRM2hcY8Dadh11ckX7dYZgjyNWXqet14Wmw9LdvgCedc9ZcDUJWMTYaFTsjKZFHFFAeoQtWo",
  "key12": "4GYwEYgt5ZYAUN1VyFt3WPHZrk58zjiYrnoJ7daqe74zE2TQrD5ri7SYsUNu9J4VKSJEKomUBh5qaETimdQ5H5r6",
  "key13": "2PXMZZjqwQQofvhNLDMuZVoLVftUyWxwbamK38hjzJYGA8bhHJCJWShkBqNEuyUbfW8JViymv9phaTkPWqnatc1X",
  "key14": "2R9gRqWzSqaUPWiz6vuXB1Zhd5x7EBJu5JAckUTWt4eGN7mFi8nxLAYHE6HtZW3j2MXxQnipTGdm88x6WafbGTUN",
  "key15": "3P1cRZxVT7LvZXZNLKyMzgz3u6EyN6E3DdPjY57zi2LrqHuvhsxqnkGgZUJ6bYEFx2sENooMJa3nHjueoB7UFBTP",
  "key16": "3GhZ76NLybWJ8yFSgTDqNuUyYXqkyBwdU8zbZYukLw1eE2EzBa6oJKyfJQ5qMQCfhgC11FJ14Xr1ZLWUDUuCeb43",
  "key17": "3oJFiLz2dPPVaeg62Wea8ZLS9z49NdyE2DND3WYkGEBgYFsra3xxBndsMPrtcY3PPpS5PFrJUDJsCZzQnYS3XNta",
  "key18": "65u7PyZs9rZLEhZveupKgbVdc2CfYFy9fL26SPSXhN6eTP3cCuKwyK4Lh4AHar5HcSfTinqDQPxQbrP6BmX8EFJW",
  "key19": "4LtKLWAM15tbdNyaFYXKCkrhPGCY5sJiqj51Atzu5wyeuhV7cnouS4a8GqXQ6TmkxqduVz9WUDPMWhHBxjwW4Xe7",
  "key20": "5JFQScrfNm7gR1zyig76QRAyS2rRPypxBL6HCoBBpCvdev44s1kY2MixLu2tRE6VL2dZDDsWpfCNgMgGaYahe5Pi",
  "key21": "5JtmMgxt5tA4vYQubyRB7a79ZiJ1Yw8D6wmwKz6eRFyZfBCu7CfBivRfmamkDrPs6k4danRS8ZVqW5y6zRp2n3XH",
  "key22": "59H3RBuWKyrcD7kkmJtkRPUZbjYTNkkMrewDxgwmddwibNeNkDvT6AjkHqquEjduufNtb1Hj3Cmucm9WGV9LHULC",
  "key23": "5bRi4SVDer5ZjD6op7U6vJVPg5NVpHme5q1MrPbEFmozqCQ1R8ZQMV7B4UJTUtpza43u9VvbwgHWi1w8JQz5yfNS",
  "key24": "5NmGcZbJWLUSPnkKCNZDfonj4mVK5bYMPCc3wMsjZWzUWKNn2BKdDBamHpeJDYjxNYMEUtejnsbXxAPv2Z3VedHX",
  "key25": "2Eg2Psnb1QM9yGZ4bSUKHb5RwUsAjTXNxzY1oxTcux5QFTq4Rg3m1YhLccK13UkaA3cd62QvX6FWBZUThhQQ389X",
  "key26": "424AVqnh3btoKdnScM9AL7n9uzdVoae6mdBTpL3DBZG4cZgT9Q4mmucxuXyevdzyJfLjMm9Ztyzj9wjHjViuUL1n",
  "key27": "35TzSKHN8EZQLc6tKUuiKNcegnuSr4YdTC671pEZr6HJP4FgcAJWSrmiTnwCvpaVfxDBCGyFLK7ALpCSjC69SqSY",
  "key28": "2DQdAmvxnPhpdtWoNbyQWVWYfPLA1oYM96bHfkoXdNMweGDFVizNpiQ9eaLfQmSXChX1VYwqkxFe448JRCA4BARc",
  "key29": "4EqVrtKWQ2ihcje9XxWMoFKc3bqkmPZMTr5BTqzeGSAjhrmMqyRwbj2g8C64eiZ1vTQZCm1vWgve5E1H1vPdJ8Fe",
  "key30": "27kx42qTwCVjVEtcQEoLbrUsgTPVNH2wNQ2QqmNdNQR5ww92ANC3jkuQBoRVqFvxLrLhUkP4zi1oun6NrkvZttg1",
  "key31": "4SPVBScdiXwNk9BKTuYrxCBgKpf48NkCjY5iAAvruaK6ZtU1xYpLXWQFMDN5ELSajnabxUqdQG4Qmo3s7Vxi7zsU",
  "key32": "47d9nbMqvfjdoLUssKShuJgbtbDmo9iuibpHKwhDhHAqtiRY9kP2Mjid7SoSR1qPqbLqre8GQ3kUgsrowsH4w1HJ",
  "key33": "4JCpGYCN6vfNE51mPikfA8is9HySdpMHEj7kTyAwDQiM9zh4VXvPHThurfXUyCH1LXmDwi8TkPpXMpd4LLk66k9e",
  "key34": "2YXHamKSd21X8Lcfo5raj425Zug2HrzMvgGzeSr9kn6Nw9sXunCfaZhXBMRjJsbF1DoTYCVwHyQJF3okBCLdHnpX",
  "key35": "2CbGngHAothSjgnMMCCJZgw8KaZhZNrBNo5t6WdsrZg7VNoXXcBpD2mJnsBECTFThP5iyVpkchN6EFTXK5JWYANb",
  "key36": "2iaUX6Sy5RMN3LFJeMLRMRRZi43o5cyuTgpskqHKVvdioKskURHJMCUyveTS4cthK47LApgjLXoM9ZU2KjPgotiN",
  "key37": "3LPvyNyHdQkuos8HovqXHZZz9mjYpgi29bzgFxGiR1y5ek1ajX69tjWLE4bswt9SciVVAo5jKjysJZwpAMnaa7rR",
  "key38": "cY7G4ZH6uUazuZcD16p5wsgbhfKLZxuXyZgNguax4Q7b4pNRJR1FH1iSVhMCoXtRtv954rjT6fQcWmQUu2mWuby",
  "key39": "3QwzBxU9zeBnRHmCocVNSr8mMHrAZnxNkdiiPoH1HB6Y3VJ9wHVFTUMVuTeV4c1ZV5sUbnpiv8siZ7LLfkQdnSCf",
  "key40": "R9X9ucUeRvGgpLLpWNg6ATRMqrDbDpVdEjzPWHmngqvDjhmUb4G6RAz4ea7SWiAUwbCwx9UnyAVoH89Tx7rt4HA",
  "key41": "9XLrCJwQEx82u5HYGSnbaeQQ2SFLi84MVZqXWb6exRbzES7vfwxaZFVagGAFsTJYJSP5LBoB8JiuizSue2AgzTW",
  "key42": "Nca8KL6FyHPwBLoX4YMimTitLG1gFW76hk71KE8ioT18PmfPLpQfq376Kv6Gg7vM5kFDJ7wyTXRYp2ZERHN6Db6",
  "key43": "2SWZeJXvRhv7PV86VGnxagUNnApMhrtXyxE991MkRPDXXxqYsx293Rm83gfJn4E1tk5qdTccGi3FeJwV2T8qwjhc",
  "key44": "267Q4hK65Qua3yrDQ7DdVG7TTm9y6fRy5PKk1LxVza82VE5uXdDA6G7rHswMVp7VYowcGbVTDcLFKSSxA7BXSRvs"
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
