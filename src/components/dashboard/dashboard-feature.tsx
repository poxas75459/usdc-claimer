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
    "2xN1xREWMzU5YR73roSuKF2gVhz44SDk81xkgnJBAiYb1jJUXuXf7rjMcQLUkWs3TcgX56GXELyZvjGseqhf9VfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWnGaV1pEVBze4gKYN8yfBY5wMjmG66PVw37Xg1TusyFJ79e1iX9ThNHaGgYaTtwevK2qVtfD5t55uN2yYosf1c",
  "key1": "2xAHD2WB645a9DzWiLBpBHLDaZ1kXCKmf3U1cGFKHgGf7y46P1YoStWTF5Ec2WVHo9tYda2gKHz3wsR2avj4SQep",
  "key2": "28ZFxUmq1dKGRgkT4VUR3HpEcx1kDbjvSpPYo1JSyVnFKdah82dnK61Da4GLBqJgbNFa7QFNGmXTBKk5pxxWr3yu",
  "key3": "5AfwvizwKfZQJZBLTfxgUCtbdhV5V6EioWAxGRG7PD8kmNAG8g1st5Pm6zp8HJJiY7jj1f8eHKn5V8yu6NhucJjr",
  "key4": "auuwtkQsdqszrSaPVBwNDvztZu3LmBvgnPMNVjKBt2wFq3e4WDEGCf8koc5XJY9pS5eipbMvneaapwY6osjznJB",
  "key5": "3WMUhLUUzrQje3UJTPemPVG5HTJxM1m2rJLaGtLPMX2Tm6E9hWyFhGK1YdsnvLKwtfcDtwdvXvpX6wG19rTTr3uR",
  "key6": "28PcFpKPskDM2nAYMUhD5E579xDhi8wxzU8Ape2Gmjws29gpqYekisQ9hUFM8FpCDHXa8L1xF8ESEY4p1iDYZhvB",
  "key7": "3V4qoiJMtgpxeVzr9PkAiEUwZrMh448ktZ6LMsaTB4cfuxmhPKrA9CEqB1PWMonZWbsczrS3LsUnK5KzwhM4sTo8",
  "key8": "3SffTbC66V6FnKn5nEm7tRiVtQ9DUyZQDm8r7Dh9Pf39XmteicmFp9ciWFYGCBTL5dN3yafVugXoTxibvhoyXAT3",
  "key9": "5uzG169CKFR3VY4w1Labmnf8uqpc5xf741FihFJ678pAy7Tcw9UagEYJZ82kCiSeoZjww3XSrRy7s1uJKe9ePqo1",
  "key10": "5vZRVtmaMC7HZmwgwf4hqBFGySStbGj12jJ4b7ahs7fC4ReRe9JKFFwm7ykQ9KyXemdaaPmfds46XLEaT2PxAcmD",
  "key11": "4qVzrygL9rRuf9KyNGRKiS67FU6sguXshjaLKuhv68BBj7VHPaw2BjpELhb1w1kyxTpfLPhdbrvawwdBqfgXc2f9",
  "key12": "5U9ZCmD6n9fjEZYtRv3CUbS8ogp2YuoqkR6cYwpJFVi8BhvAFbmV5JASKcuca46DbKDGiyJExLJDnZk7ZoDGwmdd",
  "key13": "2rGtX9YTnhQyV8BRELJnCKfVkzMAAgBrr5YEJc5BvKweqpazxCwMBwG4CqVrqPCPtceAgkCVNwXDurkPcT9Kc7m",
  "key14": "2suJzD7P4XJKcWy2HX6ygTkss1wsxourvYtok3ZnbXJ5hpu8UXBnr2i8fqF4g8k9ErpHQwjZHMTsByfEmWyWLKzu",
  "key15": "4gY8hAquiLgKTCpcbagjtEHFGkWWaWVHXG7HoYArp7UKZQnndu9ALYH155WfCc3BftkHroWj4EEPQUyAZ2PVgawM",
  "key16": "41SsoYeCGYmAW6KMBLA1hcQNUmrDcNBok6tQ7kAE4D75WD3EkjRAe5UFUeQf8v9qhdR1APrsJrpYRob94FKTRFNn",
  "key17": "idjxp9GVLz1EEV7qdshZ9nqGEEQUcFSAe6cGzY6gqVJauCF7cwyjPKWCZBxM8MJefzFUvYkQXLYwdmGywTLM6FS",
  "key18": "35ccz4V2B9Y2zrcRJyW1a7YgB5mDhyhcvFEHx4QooWq43XeYadbkt5DZKJxZteMa3A44E46nBcTiWHB7HLk86vh5",
  "key19": "JEb73UGxBaWSEEmZ6o5zB3uiJgMsuXRLcV698anY38zoGciS2tRKEEgCsjU89kWSUGnKGXBsyWsfciuNFMJ995A",
  "key20": "4ozLvsTuFmMTVXHuU2ggy769HZw6Eka89cyNedLaEMdt4yCoCyPuxuBR4eB418TPPSv77Jk4BtrPShFt4rwR69TU",
  "key21": "2a4Wb2df8TJZ63UfZdGcsgNtsEbTswPVHYhHr1YcSiezjLvv2LvhzgGHa3jbpEkZ3hrG7tmTMLB4zbZxKdPeFWXw",
  "key22": "3gv97B6PbnowXnPv7hHWTrrVomLsRp2GGSjJLAzjB7EYYDGJwHK7heYS1uFTRq1iRtZCGJCamZ2RqTDTBhyYvede",
  "key23": "95mn8kQ6ePud9CVGsUseUpmsgUik3yz71bpAokctHv5wUKayxSc6eqUtTAzdce1QMeQjBnsgicv6JEaWF8vHAMH",
  "key24": "5rFhaxbGWkr6m2h7HGzcMkXJRG6NWdzeNgSA4f2X3GJrKg1QZrSnUXbBLoKjdd4YkozCUAJkRtxG1ccFiLUruSnc",
  "key25": "3ok6trySmXebQFpw4vvEGkjRim5gaiWcZvvk5paNzVjUb947ZgKGuu5AGAq72qxq732CmxzBxruBThc6U6DDcu3c",
  "key26": "2nA7GMTVLC2Bp7W14yy7ULTgPQRQAbLBKQWZn2yGLQ8gku7raPMrNVAQZohsWTmAtdPwXHsrtp5cQqHQM9L93mys",
  "key27": "2Q7RacEyHDx1MAiaTYgi81JGYDiaJCuVQJNJ1FDVHky6EzxigvDjv3brHMWVWqWaUdCNcMo6ZT84WZ1MDXp7mkm1",
  "key28": "3eYoNBPXTh83j9cDnaUvgv8nH1RpCXgz7KKDk8ocxv4G7ggRihTUckQkMEb6HHcQD6mdwadEZnuGia8wXcaeoDgD",
  "key29": "38jcuaxckzdYCP2pSH4HRKhLyrnTyyvuU67dPirAihgNSbEdu6p5FzJQZd9gNc8SAQRspd3prBBH3dbGT1x9csY5",
  "key30": "37yMzLf5jMQ3uWUH2czwEgK4BaVnyQeQFyHcEQHGyitL5rZj6BvfV2vFJfGa4xpSg4edGJ8zJ53cgbd8zmoJ5Xpu",
  "key31": "YKKSejdb9grU6a1Jqv5nEuvnWF3u1hYqcx18KBBBrD6o5ucYoKgebV3a7Zfv43zAnzyCEWUfsxsTD4WrvuWQzZ3",
  "key32": "4vAeMqQ5tTxdYWqf1WayoF9hxd7mESNCUzcYkGnz3vmsJqYxae9UwoF3TyuTKWYLP1MDppht4VdLLZy6jCX7RxxS",
  "key33": "4t6S6FbGa7uQXaeD3KHDtzC7e2jEJD1LdyQS9B17wD28KrGGDYwJVi6kTNn3dnyGXRwXuwH9HDnFrp6QuHL7DLdh",
  "key34": "5M1B8e7zyfb6DyHizZG4NwJhjfGYsDYw6piarfpJftHEqQmZnFiPCY9Kb2W1rAHNJzpjSaaTBkUVNeU43nGGuEK8",
  "key35": "2TbkmtXi3Txrfrgri55mBBn6h8Q552ND979GoTXNXiCkcbSJdAgJ4PVKYZsqHJP4CQA8nBcxUTXfdLdmmEp3DasV",
  "key36": "3Cy6KAZgAntVi7bKDNxLMg7jY58JuguBj8yJ3uYBncpGVBLq8VT7KFNqNcwZbzWSPQK9StCao4WpUwqjDpu7GLQZ",
  "key37": "3hTiC8F1R6syhEThrMp7TN6qjjLJJgMvnGMdTTBjsutN8Fv3iroDukZ5hL61asingA1pdfXsw5ZgrUog9bzhxyGY"
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
