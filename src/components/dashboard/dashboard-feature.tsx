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
    "5zyYAjKbHqaC63sxd8q9AaqUTX19XfhZFxsGrWGSyVXcfeZk8zNv29UCCikEE7ffiHTv6vxqMVizZwuVArj3SRpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAgJs5uP2Ypij2bPt4SBCL9x2fyrQozoZjQmqWed56pN1DQAc1Kz72Zy2C9a2FtQJs9fZWpQAonjX5pzw9kKNWq",
  "key1": "3g3QyGfxuwVafAqm3h7oiUfZE8ECbdK5Fchi1N6LG51L5mCmc4aovd8DPuR2P52XJUmVUvQxUSLupEk1Yno5N6sT",
  "key2": "WoYcfypCYJWS8bLoejHhb6wGPBj9YQcy9FqkkTGVd3MRJNiue6cgLB34YDCoJV9CcWx8HoaLPdmaCTaJ15RgT6g",
  "key3": "4zvYKPFNBC87MCe3bhXakBGfo7oggnyUm6KtFMDFPWK2bnKC72XyRoBNAadDziZjgA3otMuPyb4pqwBU3A5tRjYi",
  "key4": "4AK5odSDxQ93xU2qW66CXymnHNAGgdrAtDWzR6SFxBFy5UpBhio7TsqbB9XHA6oFyF6sLBaUFK39LorryMZAMA1u",
  "key5": "2cg9zP35C1nfRXynycrQHYAkcj429bqR9sP5dy2Rz7ysD4RswVUpFRgE23rXBnwuzqDFMuZiwhTx85uqYezVZk7t",
  "key6": "5eNjF3g5tR1aX8dw22mSGgwRTFtGyfwhjKEG4w6j4bjk15Jj4rxgbiWZNvtw2t43Ye6oGHLpZknSL6z93UMoztEo",
  "key7": "34Umw8csPcwuRj8q8YJLWh9Xfs2dB4MmzxmWVHRxanZhoHiwe98rYvQy2fo1NWCjMT1k8nH5aeJcUcfKdV2kLicm",
  "key8": "4MfqxkeN9sWL5sB87cp7R76b6gKtu3RpnsxoLEH73BuYYeFsRyeNxkaHUb4QQGb1m4myiJrQMGpNprwUXRDEHqcM",
  "key9": "51MNL2k2EMZYEh1FcrX3foksiY1xgwzaa23pHFqb4n35zKwUkyGtpASXxAWyp2MopAzER9RpYhgDcEwKoZqsZTSD",
  "key10": "2mDYEwdj7s71VZY1FpmEAVG4tfeyMUfZbJVD9ycHiLuBrFBhqGjk6P9egiw6CpyKBjszRVYR4dmd6deJCLS5km1V",
  "key11": "3HFaBNXorYVWgHN5PQuVA19p6C1ZftjWhtjffweU4gJMfYRy3axFhyHm2P7VRvV52cKT9MzRKhkE5taWXo5pjyNs",
  "key12": "3GsNBtKikWek7H18Eu615hF8nu7sPwsdvV4yfxCaoeoLw6XQN8hSRtMLnQHpX4U6THVpricSL11TZZjtZjcCxgvn",
  "key13": "5pZfAJV7A9v6BhGnhQmcSfaFutU4nazggCjVpUb8QKvKuqxg8F3fsGyfzSpMtQegDCYN6cwsvF8CAPNd8YHCXdzG",
  "key14": "MqFty29Tyzcyt4sKBpPgFRG9yAnUmxmDr3J7qybFQPXRSnpE8WRWTHVjasNaXC6M6Rs8Zikm3TSvwCGenzbYQow",
  "key15": "MM4Kt8eBqJy1UkUreqVhiKdEwYux7dNZcQ9e6mFWFDBwdY6xeZwuEQxUifSeexa79qiRAC9wn9ChBRJrk7zVRbA",
  "key16": "gje7DE3L5dUi4aeTgUbpae7JQ1fU16dj6ym7KHMSpBt2Jp9qzcjpFV4EduGL3rzwTnbTnX8d2yWT9ZdKi8NkF3j",
  "key17": "4eqWheMvZGjj5ozYLEdXnNtHYbVDcBo7C8c16yLwTwRmTog7jSaaNZ9Kw1PMhxDQNDX6iFqdmDzmzcoynbsE6aLd",
  "key18": "3ipdutZ8KDn747tRi6ciQ7h1S2sKnziM3PYiB4zXGx2oQgpZJRfoARe242q6w656Rh3yKmVDPdQZcBWfHgzUhz2p",
  "key19": "3TqX6v8UFKbQyrYFwC68cLDqZBdm2x5eGL9oKu2qaTY85touBM7x8yCWdP8cS9Fzp7ZmPjiBeuSP568QBTQqbxBF",
  "key20": "3TtvwiPBNTFmdQcCmMxudxYhpGtTovF2rqWV611sx1iCRiG46q3sy2C8Yoimoi6SWh6sw9sRHjgvVeZGQ2jmRV88",
  "key21": "33gvvCaspNCLAoPXi2sxmGDGHpK6ya6Kgkfpz18Ry7VG4vS25GpG7RiCz7nCGjEapupuisGyjgsYALnZBmxRvo96",
  "key22": "3srH36NWzM6ykgEkWFoWqq2nVfsjtYsTnd8LLBLcpA7vKoJQdGDHHKxJGCEX5bcWnN36H9RNEpySnSWCBHEkQxtV",
  "key23": "5bvJ2ow2DDfzqq38uX3KZ3uoqffSJCxNDVUTzt4QMN8bD2kJmTEHMVSC5u2jQnXi4Pg3hfXm9kBu9NEMsskgnYKj",
  "key24": "NqyfaieJT253L2GkE6trcsC4oBBEJKpK5JGButX6rRGpK8XBZnfpnismQt9RpoCYEtwjyBvjkJJnEJayHkub3mk",
  "key25": "26uPXQx6Pv7GJpBUkViJttPHH3mpZgPj7xvrXDX4RLqJA95hPNaLU63C9TsxDAgbFGccsG6oN5QuVDbwV91j2Aas",
  "key26": "2RGPq6Pg2omJ5ZZ3fgMecFdKL1TGSLXAwMQehh4efdt79URugHRdieyNYDUUus85NEGbS5bM9NtaTxToUXkTaEC2",
  "key27": "21qp8Q9Cc4bjpfqDuckeCJKvYBN8eBn19CnyFsPFEy4Ss99D5qwVFE8VA1ybTqFC9TQUj136yx87m8WuHXq326Qo",
  "key28": "5Ep82Q6fZUWwPwYvHphrVTLz9pD6pQWcGVwtCiPApEwomMpkNEZVEKwsqKNt4JnkuBHfncPJ1VBb3sHZ4Q4ZjLsf",
  "key29": "3csfFfRADuDSZ2ZfPJBhp8LhB1Qwry1ugmjd8PUfABhStP6SPKF8uYFyk42WQR4vQfAV6pUB9pMXpGMwmEiFCZ24",
  "key30": "3cZ75mUpPAko1grQSzZEdpf3epSghVqPDgeP2gaAEu8ZjFLc6JkMDPtxCWJtb7aren1c7EVSnK3Th2K2QyXVhFgX",
  "key31": "2fFrpLFZVsQJPFnw5cnFA6NSa1BMuCbjxbZnvXD91gKKwd7HQm68xD9SrY6rZhF38TkYYSQPV7XmY2nsmXxQrTSk",
  "key32": "5pRu5AhVcN6CXGBRp5WGiDmpNe9aqNmXz5zSq2dxp5fz5rs6m2XvsufJ9AbZdguUoqSwrKahAVmS11FpTPgU3nDv",
  "key33": "3WkUThapjR5QBVdY3SAqDiUyaLpvTQCbWJTweCDCVaPfz6qUkTNoFUayis7ndr6jrUWWZr9X3NgLgUzRRozST7Lw",
  "key34": "1TypHdEy5dwKiPoLSKoGE78vZ885ic7VHwsp1adeksDWcgyjQNT8HqRaZZkz1MyjSx8t1EqcS9eX3BusLmwxiAr",
  "key35": "3oewEzk2gYkumMqmCud2vdKZ5sftT8fhx38WVZZnr2wKHVhCQtzVVAU5XV6CSjGJBs24AFydVNKN7cgFaSt7rYsR",
  "key36": "4zRJhudng5HNKd3Gp9FtuzwCVmKBcmXCWTKcwCHuVuYPxaHxa6PnCE3hatMz7VjRaqQWyoDz5sAvYXmCMdsrRGKr",
  "key37": "2HCAxdsCx9TFZtUAFY9SQWVe1zE2kkMz8YQypyCD4b1hBCT8djX3xNVLp9sCV5L5mUgSQh9osEAbGYLm3bLz3iCV",
  "key38": "57L8QYBZKYANWr8LR1BDEdNmzzA8zxuU3LBNNaveckwfU9wkgtQ45BECQAX9aLXAp2GmS9d3Mg4oYRRefh79USJt",
  "key39": "2vVSo1Ky5TQRtVKiDvqG3J9XJ4ZCoPs5QGWiC28K55CRdziWcCXgDT76qKSRCc8Hzn7jT5jY6iqx9sGuvxKW9rsP",
  "key40": "5ioexUGVKiXzEh6A1gvS6kTdxXba2Mb2mj1Vke9TE6UhyECxuDuFA1Pz7EWwmLdnP9ffgDGQHRKxH5htayg3JQ5s",
  "key41": "43FohjyuPBPJXFGkTtJ7Aepsn6fwgq151N2KmNvb5Qt8J8HhdiaQdYpnZBgxBCB76fRQjsZ1rPDrP2XWZdy9fGFX",
  "key42": "SZMDZHBkWJGyD7YDeR74uCC8AohpSsXdS5Eajf5R1nzY9uu2ZaZvu1ti7pv1msDc3BdZQnXJuizTmhjqfuW8czV"
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
