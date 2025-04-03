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
    "2zx2hvKR575PTYA4LRuhVsGuL4ebFgmmRg3YGj3SiqXYRygcq9g66mJMSUyjDRsiPBdDJnquKqSak916vbAufYXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaWYkjXD8pnH2KQdX6suywnoBs4JvhM4GJEhTYSiBCoG1ejLdga2WGahmuA9QpEWej9V2m1RD5ABTSZPCadefh8",
  "key1": "2pceSfUKDf2nFqBKMsHpk55kh4RmKNTryq3237F4W4Exh5V9YJU31yHjLHo7KRxdpryXckA7Bv62AuuPo9eKVsNe",
  "key2": "4t56wH1ExrgiqE4Z4oAeJMY1a3946CJYk6hv5bKnN4MWWAs8vpVqFbN6DrABLnL2qaty2hZWsmVcpJdKuxx5VC1J",
  "key3": "4pUk857FhLByrN5t784fEkoMjvgpWeBZMnEgjVXyYp1odST4WWpjXdwGwUtDGV8nVLc4xTdT6bfFuz8Zo5V625iU",
  "key4": "PmZhWTK5asJNymNa4MD6oTpk6LDhyjUY9zX6aNextH7GUtbNGbadukx8kKDMneNzQbHKRptPCeZGykTToZBshKy",
  "key5": "5UAEv52JsHWnEKYHm8zP5ymouuSCCKJS4EWWsR7oHsTB641ZhHkEkqj2hsUZTTVS1yoZ8dbXoHWiCbHCbj25v6BX",
  "key6": "4s2J2nVXcgUQMehXEw4jP5SGbzXtGUsQrXjobbAr2mTkaRbv91yCfxYmZ1ZZNgs5aW2LL6Nht8ZJngos4oosbcmh",
  "key7": "aze3dCvyepaDphhkiGzvMjMmc3ZQThTP1dECDiu3pU27es57W4gKF5uPvNXSt3XGYJe72VVqcYdRZ568aayh9P4",
  "key8": "2iGNofRaPBv5egtCyZDvupbA6NyEhHP8VrTMqc8rFgWBodZsUFmvLFtEaBmLh5WfCXnoNsjyaNLRCAnG2NX6siny",
  "key9": "29HDWBot4CLegF7WnP4ksjvrR4NRvrkasfUp1UEcSxvjKtuWrb6Sb5LoEDaHASstAvo4XsYTi5tVivT7ocYsqTx4",
  "key10": "2bE33F9ZMyi99nfQ8nPPbnE1TGBKdaB25KWbc6o18FzuHkTcxKXQU7ezFuEdZPKMyu7BtfwErM9w6cvaGt5yCs9Z",
  "key11": "4hPmk3cLWmH12EQrVgtq1uYZyUpRrEFFtu8RUBHtWPe66NkqQM2nddJr69wwZgT7kFe2BLTiXWQhAMhwKSA8AcHg",
  "key12": "2sQBuUWyX11CPPHhhoNgCypTHZZz2zEJyUcVkYoQEHTXH5jwZgbYqke6JQCsADN4TW6dEBdaXUQYn3b8UMkFvuFY",
  "key13": "4YCHxK3aaCssB6ZQhwPtor3EwHW7XUp3JQw1ptAUgon7qfH8QXTDVhJf2Ny87oDUVpKnUEEwNZHaEbGQYMP4eVyr",
  "key14": "24oY9CtuLc4Zr9VdbXSkKJesPSEQeBZXN4j2SLEmLVYn2wWKKYqqpZo2WxuFFWzJcv6AhVfPjkVjHLHWmktGmg7V",
  "key15": "3ST3MFeaF8zcoYDj81FpwYn25bBeQu82WK2SQocsmmqkUjaZwx9dLECSdn6dwo1V4UXHM6WgbyM4chvSfMJMtDi4",
  "key16": "3ddrKfTmjNPaSWemTbdVMifm9BQXXkpvJ8577ajEocMMku1w3kpm8Kj9rsjLcfLtrpTJdTEHuyK8YkLXS3B9njtc",
  "key17": "2GMNdcw2JFcLVYWXLcDhY76EeL68U6K5ANzzeJpHsqakHmSWRKmNMQwvag8kokA4itqoXSkoCiyrprFAZGBBZxg3",
  "key18": "4xFSMXBokQe37nerF2NxzfBjnomA76VK32BFk55B8SYBMpUTJBxigoofGzGpPPQCKPzVjR7UaxwJqD1cbkGuu7GR",
  "key19": "hTAgP9bmMvmSh9r4zhq7hN4rE7tEoSLNwLu8DmUwi4853L8XdKYxJzMHQdJL7WGvrAQdzSjzR15vdmwskiF66xs",
  "key20": "4WPZA4dQLBerTwm9nyK6fd1JR6jyAo6gaixAf1Ceu6BdZvc2WyK2rwhZqwHDWh1yAhvW89KuvSX4ByhRD49qXECG",
  "key21": "2skucPReWKvvrzFUq1rC61mtZTAedYPQH5rkAoWW4S7MaZYeDJ6Hf4KfuU2Xr816mWfoLLjv38eUnyaizmqHXGMf",
  "key22": "2uJEU2ML4iVcxBeUX35AehDnNvHkAf25XEfWKTH2ZAwPkVgqGRZdzm37eybiGPtRyqvjDxy1e8FSsx8i4dwhDnxY",
  "key23": "5B8Y1kjmT7oEEQwT5Ygo4kpG7hVgTP7xX32wn5d6aW2itULqVvfdPrcRJYpduMFj8SWj1emsHr4sY2JXnfapbqCV",
  "key24": "4FzMyz9rLRGqjQY4oXhLQfgWcMja6Yh9pfqJ7DYHUzqZk8GWXnajWSrhW1njNnVENAhKt7qve9UCtHRdypfeL4br",
  "key25": "4yCnH1WNWSvEV4i2AiXfX5iEfNigpKHck44JgKpbSzNMsh7DCuk2NA1VnLdznipj9nXEjauq4yNvVRvukSY8wKUk",
  "key26": "2yUfi17JxSJRuZ9H3GxRNkQhN4T2QKKCtEvpxmBNXWP5FHt1sMND547K4TvMvGrSKNeDLnK8JBLuCwyL4aeQ8R1Y",
  "key27": "4poyDUmyixweLNmZYvaKjhBUJoMQX9JBhvkHULN4H1VVsNbPVpmiRvUBomDTx5UxuGFUAjNWEXV8CmZ5g8QWToUy",
  "key28": "2feRrgf79kf9LGDhN7rAAVVshgxyxptva2ntUmpQhMAWFX2gxyo32RAdeyKbRy5gGxh2y989BjwEjUi8UbeRXopV",
  "key29": "5Fo1dYWECaaPpsaAXMQ9UgWZJkBxbZAUKTUdLrm1p5mFjsxjUiJp8cnMjmgJ2EJDiB4hbvrkKzmo56DxBSmPJUTF",
  "key30": "4d94dX8Afj1zs5mrBJkBhKYEJjoHnSsS5N1rz5bJXfw3LPsEaVRjhUxB9j9sij7UBf8eQP94H46CQYCVjQBnQvfa",
  "key31": "4sFQC7swNxNYM3B1hGw9JkdNLN814WobWNfBnsnToVTnUvBo2BN4zE4Ppab7QjG63JH5ZWUJjyt7P5xXX9SSmMDN",
  "key32": "2XyWUbuEfeAcopGMatDN1EXENop9BemLgBf8YXipY8GQA4NrRstGQpxkhWjZFbVksoUqGuiX1h12gn5BHTka7QEP",
  "key33": "5siYp45JetfGhBd6Trxgr8n9Xi2eW4sH4rA2q2QBGwNvMAhU45T3WmzGZUn5CAp1KaRfdxxxym7w2eDf2ZmzaZvT",
  "key34": "5aqYSaaDntw473KAhA5gAaoqoZqbY7pwJhfVyhVW65QTkSWAEAhFNiCVrN9MbPAeQwCJoQVaa88ib2jUchzswgAL",
  "key35": "5bfMCVcDrJEuZb2GLTeZh5WwynD9KZSCBMGGq4HqP2bxTVHUt2ghSWvbffWP22j6ivquz9xsMzCkocRZoskYHKMe"
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
