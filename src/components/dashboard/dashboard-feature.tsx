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
    "GYTfghbZSABJYv3RfFrgYWbTSqFoezCFAee4sGv8DxfJ7Jvd1hYNaBseMoGSSg3MC9z3w3iWdT6ivCpEJv2Q4va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i5DPdASpinLZt9mcCgmw742WBMbQieLMcjryB6FHhq6yjBCqFizFoVJ7DbPT1FApg9DPBKTMt3SQwaRo4CyeXhq",
  "key1": "2UE32axC8S1P9vNv1LnTqg9WgtFpontM7iXCVut3YemRmag8XykFQDctitpat4sofNvKcHgEmcSPRRW9iK1PHSv7",
  "key2": "2gK3dVKQtrXKgWuXpALpbP4coMPytvj9LhYo5fJsoNqGwCLc7RJf5Zvy5G2jrLacuQNTs2nmXkVFKDH4huEhPgeC",
  "key3": "3z6b9LdgxdCjGTpP2aNSMk5zM6KbMxSSrfsWFSkPKA3a4HMCuAwonT37FDy8ArTAdV8BZbaWvRmCkv8K78ZzZ3U6",
  "key4": "4TbijwyV9dPKKq3Vi4L8Pgac7pvYiWJVwzZgkdcjpvpBgFWrynXTh82nCTQSAniMK4H6LoTymd15BKnN3ErYHmiN",
  "key5": "5m7jQJVG2YAYDuaisVryyAkdA8QXok73iJtuzJLSJdWTojKfbaNs67iTeX8bLG6pdptFAW8ALMiERi5rLG9iGi66",
  "key6": "3kZRhBER78bNpdunjkrmCd6fCB7eXuhyyCju5SvT96wDqa46uhkW48EkrswPqwwLhMmhnYuLkdvZ1hDfdwitucSa",
  "key7": "5rYDNe6efWppoeRAd6LbhFsE3GcgRLm9Xt48iLCe2j6SrLKAxEY7srGS8xfQGzHnoanAiPK11fqymjy7TJXqsbfL",
  "key8": "4RjCJFPUMsdazMCVpjDxqDYuwC2ivyBAk6vadjQgwh8VtpPkFHw5KZUfUBA694yCS5Lnm4mGQLNCi6sifkWaAzbb",
  "key9": "3tv5axvqb8wuC8n3N2K2GAFvtXD9gaRoXxCzb2nAD9DnVhvwM9frsTKs6C73MiyR9uC3JKTW5a33X9ZTVr4xfhzL",
  "key10": "2y99P1or6QKRhVx1y18FJ4bbtHFDN4Jw5rUMwK7tcAgvMrF46HVuNvJTJuf242LWqShDcx7f5mWUE8qwNBav59Eb",
  "key11": "5WTUEwZRASZADGVooxk373J9RJmY9mt7zje9iFMsp2C6uBDBSuePztSAPhtt6eJpNJGzqxMHxxkGzjdJ7VSz8eBX",
  "key12": "AgnLdGt3f5FbU41fojwA4bAUm9yF5sojAjfPRKFzxE4SbyN4bhhr3YzyPTKLxJyf1JPe2Kj6hUtpHpR2CHNT3i6",
  "key13": "2mdV6APB5N8BiLNBnv4orj9t7cKKgtpJsJBXaZua1aUWLRz91LLPMKJUcAU1GJRxtvKRZ6Ua23Kphfj5qt9v7rCe",
  "key14": "2LESJGAVWAHn2msu2MdMWiwM9t1gM2y2JTfwmWHAfChi5HHHpEjS9umvHNPpkEFMkQfiwUWc1igJ9fx1cNQm3ren",
  "key15": "4HTTFYSwfE4gJZPHxcsUGhBRGWYeovxCV2U6KPbN5SWU7NVjJ2rqfKm4pf55CsdQqpJyQU3YuAWZYN9qH2R6Cud5",
  "key16": "3Uzz9pvJARc4W2JhbgPWJLcBA6mHHRevoqSotL17juooXcntAAzF6hgQcSkoKrWaMZE5MHNZG6q5xoAwUYEa1e3U",
  "key17": "2TgBHReCL8rwVvzw5Ujxzshq4vMVQjm5KTX43pMh2C6F5ypVaju1mjUg7xTjWWwEu64yxcKeH4TDBVFmALv2kRFj",
  "key18": "5JjmXmamAFrRCZ5HZAuHF6BFWfhRYaYdhyRRxxVmXWCoyJqkTcsCPeR9bkGC6B1Nso8KGtde9i5dh54ZSSqFDNuN",
  "key19": "4tfxYd6jvEZmEghFbonDynYtefA1pRYegMyJNG1Z3DHWjz2MtdS2TjCYNWataER5amQbdsNChQ8ZZaJMV8XTHXYP",
  "key20": "HguMzzYtatexUdwHUSmBc2qMTDNiRhBcX5i9QM7SE1YitkeR2NX8po8TaXe5Ft22VgwLuVTgKGzbVc7dR2KSx3m",
  "key21": "5jiiYBnXUvzbPQfD3dL2VsP14DNfSU2L7yabaypQcUvNQDMQjHRAMtccxruWJqrjQNJq5c2qZaeJHE7qxj4totYq",
  "key22": "3sxdQYx9fc5faAQHjLVHNZCr5Q8odZkP95Ex2ZAFouTexe9NZ2zQwwJXR5oLhtjUbddKMqTePYPmZhCyV5Rx5G1e",
  "key23": "4dfSJHLTvZxBySUkqFgfQXCfeLFAC2HQw4JPfPBPYTVAxqkAvYUB4aazHJnsYrNL9ABYj2S9iWauo8p71XVfj6rR",
  "key24": "4tw1TrKQ9ir8Wwhsv1FoeyumzRfit4Dw39cfXjcFgDq2bKto6EvzWV7cjSMam8qvfwBUbVgi4TGFWptaX8EECLRD",
  "key25": "429J7jMdFtMFXthNFSCcJC6C9u8sm8C5Z2NTcixMwRnoeh9vv96nmitjNu5rEUwJixLVEmmjVHBEz9qj6foJ8Lk7",
  "key26": "5Cr2LAnvn9gtEZ794eXARQCbhoiP5JiqsbSqdXwT8gAYcAU9E8Qkb15ZjAeX2SHNYJWxbf2bhoREgHSVVagnz2gD",
  "key27": "MpsbR78SohG13PVvn1X4g5wr1A2QCNBjMtAJNJp6HBCxVW5SiX2kYYZvZgWcserAfXvZcqQ26DRdEEKAoAc7ymg",
  "key28": "2tdFrJxpRmMjffV2n89DUkm2iu32qGff2zRuDJ4AAEXM9pLTnLDF2Jy9hifJjN7Mz5nwMV24cpSnnc9yMKaT4qmS",
  "key29": "2atA9y1511YnLxELimm2s6CNFh9y5tGyRmH3bi6TDUVEqBKpYrSjLZBttGWiKV215GwU1u2JzirjiGWQH5j9F4Qm",
  "key30": "24tkH9TZM64iUpKwzBSf2H6BKrTUoeQDsNjBR2S12Hu1YYsu78nW9SNTctwVibu82U51H4fNmPcqiBDWJPPLUhTN",
  "key31": "3b4BYxKQFrpViRB3L68nHCmWyBRR9FfpKQmicixGKYFx7m77ZaL9xmb3Njz2uurX41fDiaQdW4tXSUYfHbEijwpe",
  "key32": "2CJNZBD5UC7LnSLAoeBotUEz73g6Cpdikvr6VCyRwTxMcLtPtBxJQFHmaH8szjE93GrrKNyQYroiAVzmS79GQF4d",
  "key33": "JyWZcYQojw2drSZqrNieuQ35XsWK4ykHhygU2Afpjt4X4S1aFfhFAnctBkGZKjbV2Um9vhUG1pSXT83CLtF8ybn",
  "key34": "66dPXtaCTVThWjeTJyaYULotNQpXJoLBUcEbCfnhweGfMYgBAuXDv1Tg8tRwY4mnJLBEh1qFdqgegfggb9hU95bU",
  "key35": "3fpArhBKnXTEPfK69jqWEurbjjQiSKkVDssQM8WxpVeWrQkC6FrDBTNAiGdXkA9WFEqaAmDK4V1DcoKZWJ9bBADW",
  "key36": "2cKoZruTTPs4XAHw8C4xjiCLA6PQuee5FuoPNCyJi1n9hF856ushjbxYpimH5E66WwaNMsYZRrVSoPqNpsj18f2p",
  "key37": "3S8pdYGQAFg2WNsHwqCX5Qjscarm89KvsLrTHrvHT3gwnoL5rGqeNd8xruRvAxT77JWh2Dvj2ewAw9MwE4vraM3D",
  "key38": "2QjFYRmYFnGENTFaShsaqWoRrq6wZZhpp3UwNwBu8WYVXpsySYFarHY8vmaQWfeR8NC68durQkyKd39TUWdhWwu6"
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
