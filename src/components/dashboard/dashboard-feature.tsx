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
    "4gXbNXtgEEt7XeQ8qnHEbkDZ16ckyzXKGNDnQczcyU67animaYwTS7HWK8rWP6xmBc3SQUP4qNjCbeoFG7rJw5AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3ehUwkL7Fsm7WYbme1q7fB8s7CmkAHWtsLR7HMJJ2m9ghZ1bNLb9bxqY7ajSRYMiZXZP2x7ctvt2AQZv6dUntH",
  "key1": "2W21mSkB9R61BpstmeGRMyuX3jSaoYg1fPZrNYgi7eBAaiNEGx3tu5gGNkhenRLNKi6K6LtLNg88KWFNC7WmHTRM",
  "key2": "3XsGsHm9qUuFWLZhVMDivmj9dCuEXa6wtNkcsCsMr35mgkrpCsxJR3niHVr1zT5CajgbNDbud5QE9km9GkxrMXCU",
  "key3": "2qR9QuQkW8ASrjU2Nuwchv3nbFcf8UUp8N8KZ8u8ufRw7unVAohY3HjCLhCPQb2ijs4RUxUciAJqkyQk1VHU2kMp",
  "key4": "MQG2fL1RqHRqjV45aCWqrY3ucLo1UW8TnMqpGobhfkJsC85BA4F3fPJK3cL6g3DBqbNGyUnMYWVCnpGZvCkt7hb",
  "key5": "5vJx4WT8pdws8wy14g5yTQad5gwM51hjXxbU5L5Wt2xr6hZyR5J2PgGcjEqeMMHrprJnWRzx4yH6mp6jXLfo69ZJ",
  "key6": "21dBzYWeNfAScfDbfcLEx1C1fvknA63aTTzzJ1ue3CakwFE31LetPJUBFSq9nrqYZEpxRzWyRNXoZrNTxPLZYVvu",
  "key7": "5hTqxmm49kceC365oKPJQp3mkSNT2bMcnZH5NWvJ41aezf9AZQQYTJTJfFB9eQTEmS1YgMuqiGrwHZBre1cevKsG",
  "key8": "FPApw1HioPWkyRQJgHf7MaYxX2vWLuXm3tQCECW8PHDteXCx1mLxXmDcxxuSRBCRaW6QvqYNt1LZTyWfpVnP9r2",
  "key9": "7uzBwUcyK949aT7tWRZPzQz1nYUq4V9uwd39sRmzsWykdB5ec8VFQysjxTVFZYQuB2AhpGfghLX5pBm7q4QAW6v",
  "key10": "2jeRrZksvtRjcgdauPiqh2YKeUN7heqLwXAzrTqrCLTaMXNeJgW44NvijDpUifyjGpF6Avnv2mZe3GR8xfveBeW6",
  "key11": "3ANESPf2RNARxGHbpnsjwhRx7c27y1hJtcTg78uM3aqFmDMTaNGRnC58kPpQWWfsM8fvNyp6GaRV2yYwXimght6X",
  "key12": "4v2CAopALgDiAPraKP8op1K8hQ7nmmfmHWcwCrWhdm9HLntndrMF2CiU6x6Md4zgYYXAhjYh2MJ1hcdzYzZF8Nc4",
  "key13": "5kEccqWVhpFyyU5j5mtwyLd2q8RPui8nWx4oJPNkxrKkK1GMENhz8JWHC73hYyKr7gHwTrXBscjpLY3EvV35Jzjx",
  "key14": "5stSWbt3PdC9BsEEmmLWWZiyWziySnXSSPsMDWMcPYvXFKytCJ5Asag7j4Rh6d2xpTfNCtVhaePQSYrg2a6K8pwZ",
  "key15": "2Toz9EM95g6MSMt9nAPQ4kGcUvvW3NaG99BcbvFsoV5CTwkBirkTPbSdq8RFuykHcTiovRTxz15aJQvi29iACwWv",
  "key16": "2hVG9siprtQAJTzNHYTGiu1LDHE8dC9mSx499hxnZXxUfV9SBowgTqrqG2tVRxfhPEcoME7qMAxtJiuFhPqBSbXh",
  "key17": "Gt7BJrEHdhi6DCKNoEXEyGPskfZ81ZpExxtfBrye1jXjz7jyTqxcmwGWrkVW38ZQcjfBmAhR8a48sRfs6V3ha9E",
  "key18": "N4n95eBRStfvTTmWJzA8NTUxVWKbzvC7ZWQcsKaF6xDpMnWVHrZfqKJ7UZXfZEiozo54JKdRBEQHQTVapwVmH7F",
  "key19": "2W2W4y16EQ5v6jKAFYVXjMrJezxPFyG34eG9xGgjoitTK9p82Z2fdDNXGNkzSU9ikwwngSpqxjHkDjgdhiM4SDck",
  "key20": "4SSXKgQZVFG2CVy6cj7jGkHtwAyXZdm43dKq67k3AgZhEHb5zag13juuoaPVA6ABYmaaHhNGZEsUdzeqW3rhR6e",
  "key21": "zt2BehFAaDrxrjM3F6PRRqpDZByqHL2ujYggXNvDb8VxJLuTcFqHzPqMxJpYruvXFydAgH7Xaw9nPKqptYy5wCJ",
  "key22": "4QxvAqoPw5CDo7d55MjuV2R9ouKD3evBtt89vfVjRQm7cgS5tt95mLEMGVsFPAk56LMjDuH2dMKFnSyQqpjssx13",
  "key23": "3S72fyk69L97WuFqdGWHihtKRhYWYQ8StwMfVgN1WQKyWEeNTCKBASpVdNbV8tEFJrocKq8aChCvz1HQWAgmDcUF",
  "key24": "5PrcSHhaAPWspJUzUvKFCFBeVvMAoHeGNQ4kftMUUx8eQHMeWiUr3SNCVNfNFRH1Z2yeKnshgmtKHxBceL9GE9g5",
  "key25": "kiTMsySTiqip5TPLB6LfEJhHs1b18n7d7skSRfw3c5oxfhtaVHcDgDuHExdcddgswVa1m8CxAUdyXc4ytL94raG",
  "key26": "4HxcAxSUaUruhoPRrPBSeJ1As1E664RVEczeyHucqczdfZpGpYVZDFPXg1JRaX8edSNDwJMDZ4mzMAyb1QEFxDzQ",
  "key27": "5vYNXkpChDyF5w51yyvpDFdpp4SjR1btUho69bAEfHRtqCUp7WEqvenpSBVEPYtBMeCZfJtUfWbXysCQD5powf2i",
  "key28": "4xnCZEgP6K5rVDBXrt2XoYZeACm2DS1e4rpvacxz9HoEAYUBtFBBVJ4QfkmkTuuhn5wQQaYkaajcFHfrqKQinRHA",
  "key29": "3Lb3HcDeb5MLqZZBpmhv2ZCvCF6JaENRYV9NTL5Sz9n9WPhCUnpXWTajyWqjTRmSzHshfxyuGLh7KPBePiFRL7KA",
  "key30": "3vNFekp6T8Ti5RGwSeuPt73Axk1T5gr7K3Kuos7dBNx9fxkN9CPnuvAurZ1ZK8dzKPCPZfyXo87fvYCWEmEUGaD5",
  "key31": "4PkoG1E7yhUGZodNnACPgPfY5r7Kg3qu9gUbcWC1MTAqhRNLRYydnT71Lvbmmsy2eJMSHUhkhBEpX1Wb8oq25ftf",
  "key32": "5ucpY1btSn7mUkS8mBTYUaR8X9cE8746BLQHqMBTNxt1WWaR4Xd99anSMH67V7YXhwiVzPjBN1KVXW2CfUFtb9Kr",
  "key33": "3ViqwJXmjZDbcDAuZxDnqohyXnf8DCECjeRGCHDfg6jtkhReF2FdMPUEYfu8zpZhWMHCSjm52XhhHcVuWcsZoZAi",
  "key34": "3SGjavHtAjHna4jM9MD9WF6fqsZFJvwxcFF9MwZ2SjRy3tC4YBRpWNJ2vhiRxerehEoes2u3Mx8x97fB795gq1Sp",
  "key35": "4Pz2ja3sLg6MSSPkXoVtURU8Dv1uqq4xToUpUQeLnbZrj5qCXEeM5VsN2ayEZ5vuKYBNgYJ2toiM5MrdSsHT6DiZ",
  "key36": "D2udsav7HzWczVxusvFxYBF5J5bkFX4xcMxxX5pfZdNeqmpNasz1ZYKVvAUHq7pYEj3MXp5ED3RMsBfdYpXVwyv",
  "key37": "21qEeJuoRNV2dw9HpyA7gYXUP9ngBpLU9wMjQh7aiuA2Gf3e4MQb1HsYoL81hNF2AUmxnCmyTWZxAQQHVr9uNfYB"
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
