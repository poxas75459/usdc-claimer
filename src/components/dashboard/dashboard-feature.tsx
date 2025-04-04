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
    "3fW3ovYMah4Fw5w4RVGf9H6ck9WaxHUwGw4s8kFi6dSrB9GdofDaY3ivt2M9Wp7vQtgh39thCfsBX5b6ajxD93bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8CwnAT3AASzEtw8yBn1vSJpDypWytS7pgMcrHpVU6vq2Xeq9CyigJYLKELSSihUJP7junXyZpUGET7UKuSd6JX",
  "key1": "2hvSU3bG7bLmG6huhxXwEYiAEj26BtX3GqLtL5jSG1BAm1rDMqb9n7mhpJzNBt7f9xzU1yM6Tyzc3irCiNfuL2pG",
  "key2": "5Jn96LDpPBY3ZsnRJibYhVv1kafXDjBRC8SrNk7nfW73n8AZvGj6y5EPE17nPmw9E6B9WVu7TNHduKpY2eopmCEK",
  "key3": "34JFGnYWpWPafiaBkAEKx7YcHFb3oE4oN2GGpTF7XF8yuAUvzg14XwBW6i6yNoaT4nWWiXMT8RAPxJ7oz7kgsZwu",
  "key4": "4csJ7oMFCRYuhQHMJW7vSatZ3gUV5n8o3phYbPt44vthWcdNpiHSAv5A3VnPRb6fCnDmdyiJ98DVDJzD5NuwBXH4",
  "key5": "3cCANJuWpq87yHpw3FQYtfvS3pQ8xhTVxtunVcgeJPcjE5pyFAQU72esB1YgdnMkTtyWRnPyjAtk2GbyJ7s7fuAm",
  "key6": "2R9hJYbaSsC7twG8gCdM9wEnLRtdQwYDmMbz9qAr2DtgGRvjo5Tgmnp3uG4K1TFbDqaT2JhzoBQFm8q3f6iegWc1",
  "key7": "44vamSyDf9JQEkgqaxYujFRX4JxHhYhPyNc4EbB5fnjWTHFLt6urYxGqkbDv5Wz6LecfNTsvG6bYjtdt1deWuMcp",
  "key8": "4pynUNgb1LqC9YCecRQ45jPZEBvrifFfhR8MwGv2kYWKxyzHmwT9UuHoXZZTFBKPe7Q3zDcDe46gGNBxAw5yX6pV",
  "key9": "2D6PMYG62KkFnpCNM6Yqj4JSwjUENnvzrE64TQEfzgAzkSNCLuAndVaqca4ccaF7gCFJsr2EXVsFnVoDg1igCV15",
  "key10": "hmdHQT4QC9pDNvBSEVCX2X6r6shrcrYVmyC9H54omNWHMTwL2ac4eh3V8pAsSiXJ8zUM2j1Go7y58cvgSvfbgna",
  "key11": "2m1HzGFXTFcqhvMPUZQ2u4EaqViCDNv1eL5N49LKQstuJ4xYn8BhzS6L1pHF8QEtKx57j3NLj8Ed9eF9PRk7m2c2",
  "key12": "289VZTEs4tPGigus32FfRSJRYbpAi4g14ucVZCpuRdVaA48P4DvLxg71AWiw8HJAu46665zMqignPZKfxy88WNt1",
  "key13": "5V4kiu3z84fwQAwZAye8ce7kWpnUV4JKSRVSc5YtP3CcoMBDp6yD4mL9vMaM16jCVVktdKSu8XVHd4QXgHuZWr2c",
  "key14": "4dqSd2YZiEA2DDBK7PsriCRUd16up1jKq7drBnVPPNieD2u7Qic1urjcoRkoNcocwRuNHZihHsoYg9tdRb51rsUN",
  "key15": "4F5kApgwja3ohwmPvymxtq16e2RZiBrNeNhr1XdxViAaG11uXhqNupCv397MaDT333EtijJFXMWWHkxL36un8yx",
  "key16": "5eP5JWzW2ykbUT6MUY8TGXHN9KGcHuKNDUd6qy84AJcD8ZpFHrBbcQim5mjgtpSAeZ2bHGJ5kYo54srCb8EGoenX",
  "key17": "LNsZ9J3XRGm6eSdPCXQ19CHpjipiNFF8Wnj28ErvgnTDbauk6CX9fN7dgsG8TVS36wyB8VDt41sHmVTB35g388N",
  "key18": "5BPskpyzWs99skYDZhQryeacJdZpVPoLDELWxAQKUHM9Tk5At7fsWqkMhznW7mvFLB6b29Fk93PNZmYEtxjZ6k25",
  "key19": "23pEM71a2hw6hW5ZTDMMBYmpjhXUoiP5AYeqSh8pP6u4RQNsGerUEzMZWpcqoAipRGhCS1dNUicwob1mJyTLoURq",
  "key20": "vWctnUfxJ4GiZZWKEk4J91nE8L15gY3xjcm5t6zRnEhiBNm1b7k8GscZGsFb7Hj69hh6hiXmyL7fZoL85fS7Zno",
  "key21": "tJk4erhUZavysCr6oYSsZyYBkPwhgM9exADBLk3EzvBMy3SjutpQJ3Jsh6LkwSQfJfWSPH5pJEY47YXSojrtWK1",
  "key22": "4HDTUjdXS9zvtqNfEhXHZSkZK3Lb9Nqa3r4h6d737syTCrLUdp1yeVaW2rKb5WMWxCxK6c9i8hg5iS9WSnctRmSP",
  "key23": "3nJTeDKnykj3qvbNwPTYxEekrvDLVKQUREBh7yPoh5dBZjUV8zZ6Mw8iNks5SREtJWBL22Mzh9rJonZF5u9ZwCfd",
  "key24": "28A67Jx8HKi2KT3SBHZf2oQE1iSVk1oAX7wo8P9MFi7TUqCybTeRKLwCUveQybq5KhmhKr3wjjZRzSppuiZwdtjy",
  "key25": "o5Dij335EvCPTDaf4h5UhEVauJgTpzQ8JQhFvcXYu3vZsQHBtq5YExGraPDa5gYzBuzsrHMazSrtYS1JxFgXgrE",
  "key26": "45iMuoA1nmG5uQfHUYiKGJVMSzGyd6rgLXQJ65qagKJ1n78bqtBmN8Q1z7V951Y7iAG2FxZxVyWtviv5i3VjuAGb",
  "key27": "4mU59bpkBzmaW8HB5KhjH9BzoT74DG335eCpZbNMjUzAkRwhds82cYfHrVmuMbpsvWcRgJTZ6bQLvMLzRGaZUS3i",
  "key28": "2oKajK3kjyzqbVcfJM4TkX2CthZqLdxXjP3CCQEg2Ms1yXUES7VXB44Pb5aW2sXqQZLut3xHBuKxDhgHVRP9nMFt",
  "key29": "3KiCsU26dzCqmEfNiW9m5187VUULkiDTjahMro4FjiezmwtbLC3PJaMc8v2tSbDFrkEfdmrXtheczeLTfAV3SVcr",
  "key30": "8EDdwMxQru5a1CwVJfKWKgtFkxJ6NMbixZpr3b5sbpMbUgQ3wG3dwHVUGLFAUeQEB7ttNkv66G2W1eLgLx5VLxd",
  "key31": "4w6kuaLpmDjedauKyaYq9GFJbPTiadd6jvuiYUELUW5pfSD9GQENmXsZe8masNTESS1XxLxUt36sFiqLj8TDSHWJ",
  "key32": "47HkK7DzmdLzZJbfCwEafoGcuu6s7StwgdYcGr2mpYuHdRbzeAWUjqstZiPQCP4DEagzw9ZQoBVCSYSpi7rPhTXc",
  "key33": "Y5EkpS5YdvLQ6UCJM9XPD1494pYwpWUJu6wn4AzeLgufr21RaToDxcTvQiafw2aoCpKG4V18JLYXxqJc3ZeMiHy",
  "key34": "4mLb72TeX3BtcG4Jrmm6f8f897ynHDihDPyKJUtP61QW1txNgZcJWFTT1DEHXVsozrhBZFdqpUA7yBXDJy6ZYQFe"
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
