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
    "Wq8nphT9D4RoKK9KMFjxEN9dzmDrkz7AFAYgXtVEU86tBn8HAhMHpwnnv1sXvfhTjcrM7YCngyZZxRvv4iKSNxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4BeKUkwVnfpE2RTEgkvt9d2oEfkZa32FUQ1E3pe4bevHq1C3fQ3BMRy35SNUz6UKLsoDPDD25BmY3MM8NTZJuU",
  "key1": "4ke4k9HUJkqCBMgpc5nC8gHMoUvzDKwSHAjxEaJNeDTKpnmDa8Te5K4r9Qr6zGeAsDfWstwYVLpdAXiAjxgJUzdK",
  "key2": "5YHDCZX1u3eLVBJKUxN7kmRcGv2PQKm2GPuNKmbPKBawRkAR3tGvQVw2cVz4PRP4ghQRsxJ7E5HktqMrednWBVGg",
  "key3": "33dEhyWS6mMMSqeSkq3ta7VEHDvstQRJjr1FLC3hNNJkTrpPUN2yNYnVYqzQHCp7aqjKTKfy6xqZukGhDYXjMM7X",
  "key4": "4zDtyhyM1YwFb6rfWZbSrHmLY2NqDHNtvNXkoJNksa4zR5rJa4MSu1iQBz3RT4yHm2RsrtF1F9f1Q37Q3piJ94nB",
  "key5": "eLZSb8h1iAqrQv5w6SRULf9cJEJMDNWSpQ18S2q8a3qe8mmox1a4Jzu7RzZhatzL2HcveYiBQzTRtj8wnj6cyrT",
  "key6": "2nbqBWdpa6hDNXRWNAxkLke6MFfoe44u91c6tyingEYPb4CgUhemFZkYX3Ta8fpxLYGmcfcbUbakPy3kgmjJg8X1",
  "key7": "3prDSrhX2E6BhnCp9icok6WRqAsJQaPYN3ErNNPQbrLsix7DuSnLErNcMpj5jKV3KpYMqygPhdCET8aT679ASWDP",
  "key8": "5vU21rv2F9cAnZHpa3s2ri5HhtaSoDqzDXBzadfRHtTtBndKNDo7AqNAKmHgJhGH1ybVtLbEXkc9RpTZ56pVMjoJ",
  "key9": "5i3J8N7zNgWBZZzi5p9TfFD1kGsRBVNvg9WR9XDTqMyJajVkqdZ1xtPsBEf7chNWV3DoMt42f3vLWjfK9enotVJX",
  "key10": "VRaHFneQPdGLKmN22Pu5cKYrRLtfTFxD4RwY7DGohipt8jHkMp9Li2vgCEnUuQFbqqtNwQmSVDNXfWvaA7UBwPH",
  "key11": "GRBVd4y38ZnABMMFoQQKxKkSmGbthcSdpwdYtut13c1KUb61tTfjKVh1KXxEJT8UDoUWcPUtpefUGm6nxVgoTEn",
  "key12": "3vc2pd85o9PQosWMXN8JDXzqpicYB7JpcN75B8YuS7BoX6uYB4wyS1GZDJGymvHNXCqN4TQ8kvEvXod1Kim9C5kQ",
  "key13": "Xv99WzfcSoXuXRWaLPtrCxzMYh84o1xuLWX6cjGonKj1H57PvSGf2NHBrsugbg3JYXY26tWGWbSCLf9EqEkwXA3",
  "key14": "3EztijMjb6pdJWaE2jB6mpE85tT9AurQN2hnSkQCYp7aSRckJTyo2n7cfi4nEbpANDE237CiDs1SNJqSH2i7dKxR",
  "key15": "3vdMqNykhSQeHsqVtCMEuW3bf9rg61Ya8qCT31FVhFkTcdBcXtY3nXqoWma8TECihejUGirMfyLPeVJzRbLRmkpm",
  "key16": "3ErwHms5sk4JwzLaGCjTiwJVTE6ZoQQQfbyDgNU2N8pRaUpwfi2P93D3qsDLqEgPmPyG8kL4RY8yhz4WoEgQeRyE",
  "key17": "3gytUB8U2D4NWLTq6Q7ggUESwGmaPyZ1rrrW3oomAjHJnGZWyVs5sEgBd4oxD8jDvjWaEyj6NAx2gpAtMZcMsiRd",
  "key18": "JR8MqnZxfHNgb6LbKLuWdjf35hNY6QDveky3cBBFHWR5LTVBJ7f78Kuk5KqzJu43pTyVguy41fV4akvQ3T5xCkB",
  "key19": "5pgQqjCsfRSe3QHSxnaDpujbszbwkzMPp5CZZYkBdg1nLmXVx2wh55wRCtLwXJRdwTh1NQa4wMyg9ZVQ9y9XgYVm",
  "key20": "fjxV16r3FxLd5oizPK3HSPoKsZ8BZstygNWrWEu1GE5QYiDLeGYuTjV3PDWD1Boxbv3iGfPwwJNnhJJxkSHP3NG",
  "key21": "3YiBn8rgLr8FSRje6hEDXtrmLDb45WsL2CyceYtNjeGe8F9z4yhqdtg8ePo2RmDYnwu22LhFya8aSC2c3AtrRRvU",
  "key22": "49UVghN9uH7zTAjL6L1kaz7JhGHVWeAakHgckF7EeiauToJsRQ8zUA9MfmDYLkT1ibU89BztADza9PMBGW9J1Teg",
  "key23": "eKKsmcim3vEPioVouwV84uqCTwscKYbFXmDTfcsfmgCURNsaXkbRBe5XD5QTrbMcp7mammqtCnU2GpbT44KoHKi",
  "key24": "2aCtjGxXDUyvVpc8Z4W3o6M1QvN8vsHGeNpogWWyiYHSwnNHi2mtyD4gCAewTgo75a9vmtxT8hatqFnJ5453QC5u",
  "key25": "rjXuSBB1GxBGFAcMjHvc7UuiQZi3Jb5G62RBMdabwmwZsniQzH4po1DTLr2FmU2PD1iFNk5wvkkZeKuEjzyGWQK",
  "key26": "2RxobF6KEjxx3UUwL473k4CibXJiPR2A9Y9q8iPgp5i9GTymSZhjodcLfH8ci2zCbtMhnRNmRMrbuU38XzUuMMR5",
  "key27": "4gkqate16Mu8bacgyqAS4m1LrqQgF1nQSucv2F96UQauES7Js1PmCZhvzh1jxmRzGu9bySCsZtCXsF8sz1atVSn3",
  "key28": "4cWTQBd3MznGRGMwct5NuoHHtG3JUsGcBjj7GDvEcHZoeE9Ym5jszqv4eGb6GVAt3QBCswtT1hjsoHrj9kfjBtGE",
  "key29": "3BBTjnYVd5Wo9duABxk4FQWESSQvaUWdGXmypkEoBjLGeTED5TkWqAzi7SHXBbMQgDZwXB4xujMUdcxhocXr3bCE",
  "key30": "2QDw8gMGLkgjweDXgPJtbFtjxB23ZLeacN9tbYMPziRNX53YtGP7nR2ncr3wpcS1KNYzns38EHskGcaNbWgcZXNo",
  "key31": "44qWy2vLzzG3YDzpYut6rb5pfAPWsoz9bLoygawnWpdxDNzYXvQeFBt43EJU7WwKvmh532Q7eC3NGx1TtgP8CiRm",
  "key32": "5yiEJn1A1AcT6h2MaXpyg2Du5mft8ppQXzfLTm5MTbNZfZLoZGHVWLtpVqFkjqMPhEC9gK52CcGbTUH39CFRWzio",
  "key33": "2TcnMqPUTQHhPqJKuzisi6bZJHpLNrkTa32DruvMYFhsi18yyAtZhszbBTT87jycFF1crSTbdfNxsT3Gf85ZdyhL",
  "key34": "3EFPfofPys9Wokhay6xzWpkeqFkxTPdvss9q1hhu4JFj9bvLQdNTf5d6nMEJ3xefdJKffmAgpGctBt5xwsaJP6oh",
  "key35": "5PkixM3XryAM6LqJc2aJcDcgyvorbV6fV9aiD19B3HHTbyQEPhhA4vYSd9hkA9HZFmKbxA3V87gYaeqtZRNtb9LC",
  "key36": "2VZ5NqRi9U6Wz29P8nBFSzQWPD2oXwRU7JRdUjVTwZdMp7NZxr7gGApwUYyduiBsjxfVxnMWgBE9TdhQ8B5poSPn",
  "key37": "47gC9SQEAryHZGaad2w5x2qSmAWHJy5nDGG9HUeQS9gHYJTtgavmuh6VsBRyQ3Eo7Gwumd6Rnv6UKkz9N4rUUDHi",
  "key38": "2FQdttZnLqrmSDraXgXmQGgdwefpZXSQNKiwRh3YBScKkKYMaShGcZuNHLuLfcQr8jsqd4JjJoRnHhhBz83DCQDS",
  "key39": "3UgXMwS7wkBeexxtdAbhvNKiNfZAQAVBpm9WUxToz73u1vkRqkTH2T8mazy5C56tLUd5nd5DnNikJd1zRbGVPzoJ",
  "key40": "5wbLRPrErLY1WUQVL31LHWXsCt9jXd39dKA45THe9MPJqWum32RYh9d2nQ7eASh4at1biPwMCH4wAuUyNoLJnLzo",
  "key41": "5sdt7hLhPeBcTNPFUCdnYjeysVtf8FzF4KSae8zRRxAschnfra4mPG4K1UXALYCiVCaubaZiiawZgva9TpySFtWx",
  "key42": "5Lq2Qwe7HJDSQkkseBnZkfQQdfGH5yQBgK7N4LHWVYzTCvyDfUVaurfitrGcnKmDtAgXNvKSU89S9qVBteYVKTRV",
  "key43": "5MFiUaCw8FK7ebbobWXZJ9VhHG8MC585XWJGCSaFTCVY1GrbMfnUjjrpJH18dRGDYjUuvqdYJxWjgNCPExNQjYSF"
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
