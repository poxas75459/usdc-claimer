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
    "2VBXSDUvGwivDZs77BxHLNTgdhyuxXnttsTfbTkco4w7eLgE82sMJxHx8m7NhYxuc7hAzQJPmtNrLLFRwbtw1esg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5fdqEdm6X6zfLoqoeXQ4dX8AwB76jhjtZT29Ciw6G5XNpLCWRgxEeMZBd1cK6NocfVGcMJp4FkK2QJ2dSo43cT",
  "key1": "3yNv7spCvS74iDkk9KopdPktpWnh4ZqicRgQDnrPHwAKyZYuq2ADpio29JeFg4WNxCbpai2dtj76FxQJmYoDt6RZ",
  "key2": "X8T5jSi2cKsWZ5pArfjembfHMWdZeX8xwX153ySuMqTH2mNjwjjZyJkyTpxub4NfUQFENFSszJezT2Qq4XjDapZ",
  "key3": "4M6Mg6CHRba9s7y9uaeMRd4FnJpjQ4jSpCSrsGNaf889yGy5kUtPB1HsKbPr2NqMUF6G1g85ZE8Zb9mdgt33Y8Qo",
  "key4": "5NkvVC7gYCWGycHfidxkCCNcjBn4CRfCfF4Hjv8qY6hDcYi7PrBVsXd8QR2R1NtNeCn3T4PGyVpHZACA1mLouYnk",
  "key5": "4fk5skL3uoqYyo6jPo6K36iRE7DrziU9rBxueZkxGozeJZf9c86FgKRfkD7mM5gdySmxosVdyGXrQxgQ4S5c5SNQ",
  "key6": "4x7Vvud74ySrRaNR5ZaiQgfRYe3AvjZcqFDs7qL4F9vCuzi6H7Y2uWXrDw7yuSq6X2UJRgXCiFzm7gLZgibZsKMc",
  "key7": "2idQaR683GJKtp2ULbi8hu5fb2vbC5MvDK3SEtX4BRxbr1un8ypNrSufz96GjmUHZxjaYejp7uE19kyPW48UkzSj",
  "key8": "36N1p1Do5dpaHEm8oKSq7ykS8Kk6MLYQRQtNPhhShDXqHbx6D2bL1kx2r1xR2eotZLDBqHsApmJHciqywEC535VZ",
  "key9": "5EWY7B69aXxezVqALJL2zp4DuAStGA2BYd5zLs1cs5EYQpqjvt8jFUxK2aDJ7VgMq9aFLwFx2yM6k1CSVpa56hVx",
  "key10": "397qozLjY3FagQoUB7pD8EPAifP4pjA7NVwjhPutyKiFAhPwq3xwRcR6KRdz3SUbocn1vESQTqUfbWj3AZ1dif3m",
  "key11": "3HmipSAydYjefYMGEFTTSSJ4wamsDbJ5wr9dqQJdhNZ4nWyhnALK2Ua5VC7dvx4VVMFWaFYWb6VKwtZ14rBv9hS",
  "key12": "4a28ysxLcn2iNt8qc8Ffg3n7g71rqiCG6euASRYgEyJC2wxb8xt4Tvu3QeQa7yzuVnr8jxJgHM8dUe9PYayUzwUE",
  "key13": "5FhibQLyQPyvTeFJU3DER5Tygak4gLJxJrbzLWWskgHZVVfEGQsnS1Lu9zYLicCyx1AhDrutLqtdeS6vSByER4cg",
  "key14": "4SefqnJqY8jMVeSfxStRVd6oZbtB4TBbiAb8a1xrJoKTE7RYREsQB9LVn7nKTfy7toestLiy2TFFWiWGqay94pZu",
  "key15": "4LTenFmEvGKuzCk4RZt836nx1ME9czaS3WbsnsYS1nnTY9f4Pf4z5smF25pHiAo3XVvvdYWi6VJf71vCZbajCXVx",
  "key16": "vHB6ac9ZAQz3QyuCLdEu1R9R6Hd2E2aSyDuqAWcCDN5r3Uhu16WnDAgWx2KwJAkdoMkR3cEUowTuJPgtDMFPaco",
  "key17": "51F6D7q1PND5hSx72pSFP9tit3uwAzRSrZ9RMjQzBxs8RCUYAovhPabAcgLLeybq7w2LG5a8FpWSEoMRkn2DrzVB",
  "key18": "38kJnPgWU6yVUkesoGrzsJyS3bmUsNWWa1a8Xnr651yv4VfiMyJmpVTJYcXejuf7r7kxVgNEHH3MNww9beE6mxzv",
  "key19": "5RvkXVmToW2gNUK7WoAcowkqthPfpf3v9Cm4YDKvGcrYVL3iXTNf3U6eYSff6eGj9tx5nbMFY34iLWZ9xrnjLBCa",
  "key20": "5Dsx9jRNZ6DL6GGi99um3BPiAmww8DrjwHGK53tLXvKukdy7ory8deG8GqcDGcRHxuufc86KDKgfhTDSZQ5vUGXi",
  "key21": "54A8VUDVMsNX915jPxZS8u2Nqbpmw2JLXALmQpj1AgquM97afQBc5t4qjjXVGewUfXPNsHXaKX8kNnNEqsxGMc6A",
  "key22": "FWbxnbYM1LfoYgJFcbMFEndAmUtt6WHFi1ygfmxB8rfJ1uHSUBNvc6QkJV3xEwGzqjhMBweVRD3XThC4wrXbqrd",
  "key23": "3hSdL4fuXvrWLPcsAcHoHMMCTNXA37t9VvuLZHx8iZjiMgRRC9xfsQtjX5yoJUmDMNHsRCB94d2xAMn8a2sPqt7W",
  "key24": "23eNwskMw9z7fQNAJvM6U4rPmjXsQf2hyyyqVRwrX5kpPLxrTfMHjce2LWkgWRwcmfjb32nNtv3zeM7VCz2ymxGF",
  "key25": "4qg6f9kouNfo2oEYXKhGThVgiWt1c6NetKVhWp8YNV6ebgA8p4guvTFmnvyhMDi5HGzbfUPdoiy5Li1qsf6hm3qj",
  "key26": "3yPMsNV7Y4MGpAQ3p7GR2ppHow71BNNL2h92LCSvaX3H3C2o1Ce261HXN3S4iS55quyNb5wy6QaGpnmoxGx6L6Co",
  "key27": "5dm2KJgu1shZAF7xKmuVwSqifGgpbsugAgtzqLnHdc92JYekFUzcUMMhmPrkZFCxDU3ME8s4UReJ3LGgmR1yqjGT",
  "key28": "3MqdpSfHYWyedhY595nyutrLMDNQ4saKZuWipoYLQ9zx6ZwjjSuouQWcgagXC4JzuEohj8SNoV5gSMntW83ndo2J",
  "key29": "XNurzxmFPkMEUcA8AaYrVD3wZn4pQwWvV9cL4UYTdkjyDK5Qwo3LPmmU9P89Tt2isKqjGegbmUydjBGiJn1ZXem",
  "key30": "8f3xnDzMGd9AyNMtorVYU4geeuvtKon2Yvc54qsCahqvMsmk4PVH9yU8ohn7K6YvJWuDgM1dd4mefNsbgBFaVYn",
  "key31": "ZG74MsYnNgQfcSjnX6Qwys8D2k1ztiPxFeWuoR15mwsC6UueTrYgMzzjxj1XeEDvjT7o6t61Wunjykhedaartbm",
  "key32": "2G2MPu5MMmtC5VCmL4JxmWuZZzJUSh8KejJ62uiSi4fLwh2N6MaSwnT8Rt6ib8SwfvWRKqKNvfwwFuG4gGkwxp1M",
  "key33": "4awimP5g1qFpRB4CjG2wy7DaJKVmS9dWHmCYns1AANGeHHwPT4CyHtd7YSRxjKRiiyiZfwMXoF1hMe7f9nS58aDn",
  "key34": "2iSRfMwcErZCt8nwyhQE1VFJPtebK7t5y4gvkha1vydLCrA1nqipV6woxQdpwYhdc7gN3MfxSD7FH2AZKoyyqKYr",
  "key35": "4Kz8hQMFPHvfqKaybxdo38NrPXc3u3x8a3wV5wFwhS5FAPEpcCCAwEybckTrfSiX2ZGjJrH5ansjwYcqmor7Zvar",
  "key36": "56LuWKc86m4ZggpjSKJ97RfkPbLYuav6K1fA3cCUt9avBB4LXQaCrnWMSiShhTaR9j3L5e7Ri2eUGu5sduNbGNcu",
  "key37": "5sFS7nnov9b2kvsTeShxhHeyoASfaKvqbpFvX6M6vuAspWEt5TLvEsQFaJwgkpnRKkeLXUmv3KcfoZBSQFGYT3Jx",
  "key38": "5CztM1bk5EGjVchnRLtdndnG2vQgeZPri5j188MQjDDLvCt27Kgq4pS7VTvgqp3zpx8f47ohXp8QNC1pXKvXkfrV"
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
