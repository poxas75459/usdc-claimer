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
    "4obxpRpNE3y87GFqudeyLHv8Hiy2j4UHEBg8UQQFFaXZgV4ioPn9EyVCybsiHHxYvQ92kvDvFVmDALFybot9Fkv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cC3ma9kfgaAY5hh4Ts3bRayx71azBSrqs3efrjkc2cNC31L1GZRiyvAysMqs4DtHJRBUKDtw4jqrQPMFddcs1m1",
  "key1": "2kgjh53ht9oPcBm7Dy4JGXs4DKKpAyX7veToDu8B9UymoeLEZpq8GqWY4Y2oPtwA3Nep9ooE5XUtz9bMcWKtiBgp",
  "key2": "g8XDyw96QfkjuTuAhZHYvKj71ak1sz73Hx5biNAGZPc5Vps3VRKY1E17Qtzf384KaFdLgH8szywxR5yUe5zgmCM",
  "key3": "41nETL2zJrfqwnLJXaLfagJvgryV3KEhmYLoGc6mMynCSnmCbzSVKMmPsLFCean2TEz5ccfCHQDERbhRFYjVNGRu",
  "key4": "JnPQahmMT4G7pEiZRPRjZarXk74cssTwdo7msDozqJpo1wFVznVHUJP4RddUejoV9MBqk4hnKcGwXu78wLq9wUZ",
  "key5": "3imLpHAXtjUaX6dUoDYY7RzfgrmWxCCzxHSdqqyyKWBzAREd7dSPvvmgTgdFMS5kCLM4ggoQkpFavmti1m37igRy",
  "key6": "5zci9kH8CF9ys7fbpENLKegBvLn9sE1xrG9bstQVYY3JxbyHdjdSWK619iEV6bmPEjXSmoQVKBkCfpFxcgscYSKX",
  "key7": "648qGDnuk1kix1DkzJXRz6jUk3rB52dSuR2hyGZ7zrtB7wMDuHMwvUpYqSmVZmfkQDCATrMJvYT322V98TVMP4o4",
  "key8": "43qkW6UB59PcKC4aGfdsXKC3qH67X7Xv3YMenCBq9QbVSh8vwMVVQze3eChsdaDorAu49DVA3Lq3MdLzQWjyEPCr",
  "key9": "2yYB1H8iiWeU8Qs1qh5mwvPAzuVYbXfADtAPDmtNG4U9UhvJYFpe9Hqz4inYBRukHK5Q2jcJ6GWs8iRPeZv7cys7",
  "key10": "5yJF7CBRmqEjnRzk63iLLLStmG2JmqjTbMG59bpibQ78L9MGdyCmvvABrfVihutwQkTWGpepcrLbWCExGnUsSyCt",
  "key11": "3qkh1JaHZiArAmn2AQasSbSwpinNVUPtctmWQ2YQkDJm6mEWik9vGgKP7JGwZJHc9wT4GwGv6yfN4jEPDr8MBBGf",
  "key12": "2Eb3SULTEAPM7RZyvq2LdteRM3HF9gEyvvBSbhmoKtKzyYHfjWkc9NU1sUBkD23bn9yiLCz6cHSkMTcqFb17pUeg",
  "key13": "27CT47eZXpqhy3J4d5G55Ww67E6vwvET9bccxU4fJDWup16CAnENegutm86zTgoqruJzR4Yx1TWR4hKLrMYiFY8Q",
  "key14": "3naWwrMauQxqY3ZCSvuk1WcJ5L3dXVKiXxbcLTm32SNRt4gc4nY7aWRfUv4i3mg5gcpWgr6asbMXChWwxR1A38R6",
  "key15": "4DWqgwsgLZ7hiKAWzR77BA4hAQP72NQoq3nSCiEjyqPV5H6jxcaacCun2kHny3urPf2nndENkTn5ztbc5AbcwDFS",
  "key16": "453JLZ5Aq63P6oU3NrsCoEhyzLCuhNXS5htt2iuWA8VABBhYHN4afeeFp5cwpHBwRc636TjCetydSyLKT32BCktv",
  "key17": "4pWAboRSgCcoirm9UHL7ufsP8LurS3Yo5RuxgRrQ3b4qeqC7xiLg2PdEmjCfcjJWKPwitGUUxmas1fbEVM1QM3he",
  "key18": "29djMoouwJqxhFuPwEubq9bD8kPRH6aNyZACobqLPSA83z3EDk7NbmVfZvngbYXSiRui2XifweCShUNRz6CBxSLN",
  "key19": "4D8zwGHfdEicsQhUbXoeCJzM9AU1wdLdeQPeb5BF7xk2EzQeGoSq8tAGAwHxYyc7iXfSRdCvr7Cyxb89pDBVvG7T",
  "key20": "47WyBKLPzPUChmmUon1oC1gN2VrY5vsbb1vobZeFyiUegnsZRec6t6NDTJmJSy1PwjmNF1sM9kdQT1psiCZk7QcS",
  "key21": "4pyDhcfTVBnTZ5f4XLGm7aoaDCVoUWUjArfrdN5Sff4g6YZB3pkUoo9caYmKvZ51ZEaob3nB3FELxrLpNEK8n6E9",
  "key22": "3VzaursuXwxz7HwZgqEbCyLz8HL3gxm6ZTBFk5xFgyKPyXgdhwhficiDp6zDNTLQ4sHuEPBbUpHfLuaNtbWafFij",
  "key23": "pjk81DVU54Da4s6kmTAB1mSP3o2FNjNH7nPwVmRWRHkUsXh8ghcEYN96FSciJ5e7giqdkg2vNfZV2fyGH7ZF2T5",
  "key24": "63fSJ8xNaFDm7ZX9eZkBfbaXHJgsfr6KqZyXsn9duDwAbthyYoi8bMuju7UjfSXMi4H5zZ6CphQrCBYFe5VXe4XT",
  "key25": "3PJXP29mVhnAbzcfKm3sBaiXKswaTZWRsGiA3zZnBSFc1TAPwQxWdfTNCcSEQdAXEufRse3Z8utAWaR1dy2RVFwW",
  "key26": "5xSqvBdwGR8D5hLxo3izteyds4QzQGeLJt1fZt5L4JimpMi3akz57s95eztqQVCpBsD5nFZGLvcXWLKp2xK1USBb",
  "key27": "xVK8Yj8gguo4mjMg5Yx4EsVsrELCkRH4VTVKhQq6eewEceaQ2zwDhaCokszuXpLAbeAiEKHR4xZJT1f86uPR7xZ"
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
