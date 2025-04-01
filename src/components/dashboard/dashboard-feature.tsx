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
    "4UeGu7kFL23UYBSy22S8UYmLJr71sJh6UfoEy65ZDJPswuG7JeFiYjfzMkmnW669DXYEP6Legm5R5cBEtLjggsry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42a8yzc4yK4hcM1t59jUhP8wvTFs3fkeqh2zDeUfYjZfjBZRbYTGGGDfpKWCnoyGcNGEUvmYMvDD1RWQZnztmwLm",
  "key1": "2D8bHBndXR1gPudQzgYKsJfWLc4rtnSnicAxe9sUVc4cPqFK6cVYJejcRvQrRh9bxeTs2UAe2uERS7nJVWAULB56",
  "key2": "jjNkr7YL8yoiBqAs4xS83P8ynVJg1t4yK9gvFLxQktuuCkifiNG9Wq5dsFe1jTB5rrJ5iwBLewaqCQKpzTabEUv",
  "key3": "9j34RBNH6MkGycsvCHCxdF5Z3vQ6EnUhDzqPE1NGipdKt1qt4zbief6rv3qAr137eShLEVjHdij3xtAnbodPBUw",
  "key4": "5JvYCk5WRvBQp2SqK5eJvSY4fqurAP94fETA9Xh7vckHAMs5viSkLkDwxwuSpRrNdgzbDsnURJ18VDp69CwsLG2M",
  "key5": "57J8UCPdUdaxsi8AyqeVTvVkEGU89H5fNzqbC33X7uZKWrapM4foNEVxGsYEeNaMtZ6W9vvENf4KWsYwcdAEukVH",
  "key6": "wJD9WtaJC7Q1TMTXxcRojkFeVGTBmrbgwv5T6QXkdk1zVKArikDjW4BvKmGR22YzAVk6r6oNTrfxVZLDykon7oi",
  "key7": "2mhiisxM1i9uEh3r7BKzUnyGgey3b4qymgYDoFA7EsnJGmPTFQnMTffH6vfvysH5Tmkv63FDpMyqmJ3BypmzsZNw",
  "key8": "42zdxqg1Xc9s5NSGNrxU9fvy5Sbd2rmc4zeoiYjW8WRMo6pEG6afvW9NJeX3Hc1a9AtfuBqiUU5Bd3GGPmYsSXFv",
  "key9": "5xzSE7DfyjREF2kXQwu5DZZKYrZ1DGqftXbQ6Qxr92pghnoh3PS8VjQCYxy4DJD3N3qWXAFERC8XosE64ij8QujR",
  "key10": "2BAtGvKBuDVGAwGU7foWAngcNyrPMUbk9AJ2JcNvhxprWbtThVxV13XN1wAinci6LtGT9tQ4VxS4x9TRM2e9QHnN",
  "key11": "2CN89sbbhM1zvCWFCWMAxVg1zhZhRrhSZz1D53bqQkpgBpf8mZwHrJAnBa6V1GYciWk8cJoAk7ifNFgXpkFJu8sa",
  "key12": "5qPMdc9TCazy7xMWQaNppVgQkEniKUzUhP3yfg2UZ2nmokz4PCgb57MrqQDvowYZbztFPqpKrQ8MB5TBaJBDc2e2",
  "key13": "24keBLus5GxfoZ27oHJNzMfsHWNVu5Htg5LXoGDjJegBeRRhGCWZmyDQNWnWfwuz3y6rqmWKb3nmsbuvUH5QYEkc",
  "key14": "5G5vqgwdbRihZyS2rYnWyyD6DigQfrRrK6maX5w9MNkAXNDKypAoisPwZZmPDgbMct9epEgUjbGQcWxkyCcFgYss",
  "key15": "3Nt1xRuitau61UavemGbrYmzFs6aNHG3oyCqjF3yMvChJLM3D89zbuDPBrV3qc2B2JX4DKUTU9Mr4vv4CgkBMr6R",
  "key16": "xRrfZm5anw88PTX9xNAs6rWpeuoAS9qBTbMW4YJuWYEi967ep4v6XbaFTGbMBThVoYeVSKYP3DLuppvUJcSvJjc",
  "key17": "2GuiJurHqkk9guhZf9T8ngnh5tx8hJyirtXwkaTcY8tv9aLud9RTjWwLPVrepPtH1fT3rtaB2AGcw2unGZMWoUQK",
  "key18": "71PcoX81kjENdYHonS8Rai4MTTz8sJime1eH4G9js1whgNmQifs4MvUw7kAzEGvteNTuboyRCBmU67SUVjfLeVc",
  "key19": "RZcohEfq9FqQ7U5WvvNDP7EyKKUgJSANen7XVz56fgbLeEtj12uD7WFHzZQHJoHsEzr4os6xpMMMDx1cAcCfoSP",
  "key20": "ksrWk2xhUMcWyz84p6ViMMtrHa65HTPW21YRppas1pG8U2z2xTcuP9w653UsqGUHAM8UeePx2dtohR89vPkd6wM",
  "key21": "3ybVvw7xb8zs3WokeZLsBzRbrzWXFqRxi2dT3Q72gzo2bn4AnVFkVSQUQBzEa1xLhwaGjB9gFXTTenSvgdrgT1ke",
  "key22": "CoCxJnX4tQaGfXnJDDGHwFKfN981EFDrfJyCaLUxg6w8u2eUQpWnhGJ6B85K49YyuaKk7i9jJ5KZvwbwyMKhHpk",
  "key23": "25wL1bx1h1Sqy5G8cok2bKvfeg6VgA5LxxiCVek7sUC84tDPQHWN8ubDgUFCga6EtjsqLi3UVosRzgcrqDvcNvRq",
  "key24": "4FxK4go1iJhg27nC1qyejtsLeFoyR1TyLd5CWjjmYE5Veeiuz2sANF92JRdcEoKoRQDED6iMvHjwLkWZveoWP2j",
  "key25": "3GccFxymGwdYaDFQQen47NKFtQQdQeyB7YudPAe5jiA5GNSPryk2YN7W8qC9Qe1tTRnVPLQ1sepRYYvYbn8oghJg",
  "key26": "35yGwnMTZbtGmBwHYtjq53MVGYoxgdQnXoqBL9rh1domHSDhEbeYeRdKxn7q4gBc81NrUpayp7NGTbr974DtBhTL",
  "key27": "4VSgnftAQ9QjFDV7yzFTaiTCLDK6MhJJ8MCnjjEiWt8NpMHqPreSZ67vauSQQrjA2R6EmoWRSSYWyhcJNZ454anG",
  "key28": "55Q4Kpxx9SMQS3Uii2eMVCV96u1pNX5raVrZKW8uJWcygVzpJQTVBUoL4gxxTcKPvcUL9NCZdGK62HDM3miAwba8",
  "key29": "4H978RDB22wRfXe2wEP3nX1UZwo1RT3UnwaU95Mqds9e8niMgm2u7bhRtzBRShXM1LZ7Q7bEhDeS7BiWnusUSni8",
  "key30": "2gz9Xwb6uV1PsVS7jo4z16YpasRD28WkJ18oaPV87DWFhhhdFfyXU3Rbv93m1aeF4bLvusP7dpBr4UAGtziSt4GG",
  "key31": "5WJ9NseasQVxoxnkWWbj1XtmMhTRHWfn6ErLFUtoT1mTaSk4qqwiMQ8mrjfFtcgwrVkEgJoViSpeA4CMvnCvPpJf",
  "key32": "4ihUUKTSYHPiBPji5D5DS8vtYba47c5Dh154gxZFGEH8jSWtR5hw5LQcZvBeVD7fiSTEQx9hpcG2RkkkyA1mxEb4",
  "key33": "4ZFzP7kvfaRgdXiTgECJxr9qitg4N7EgRXaFgSpTTqnKRb1T6bjZ1YzNsDiiwEra5kchbbTjzfaydk83Jr6RZoJv",
  "key34": "3aPAyPFKcos9PozKnc3wEqLwo1baEiMEotkEfh2HrtKb67TRugfj4hro4EKKLfrWEWpALkh8Cw9s7hjGu2xa3fLz",
  "key35": "4hLTTTEgzm2oZRKJoMJfNvTxJuX1P3VYai9fWtnjGqEXrmFqnRhxh6DPTRdnALJhwB3YZVm8jTwSSbxbtKyEE438",
  "key36": "2uhhUw5xTEcKyFnYs6Y2SM2bkQaE3482nArCzEypsDCN97v7LQdEgsSxPELi8S3ERWUeh2Pdf5zALX2VWQMuJ3uv",
  "key37": "5WKZbL2TpqNimWvPDFAHgQrmSoBpe3jqQKDK7GoEwky9sdYhNUfGJGYDb5i4dqsp3NXr4FPPBZdLXh7WjePX25KE",
  "key38": "2RHz1tgEQyXv7SEJmoZ2rnuNGAYLjn89KK6jC6p8miXnSkV4xi2D7u2PQS86tsau1BhjBv32SNYfVbCdxKeUS7Sm"
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
