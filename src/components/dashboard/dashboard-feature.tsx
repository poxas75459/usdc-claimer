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
    "NcBGJZRx3zSBtVEexX9mArEoi5RuZ4K9BawSRQaVPA9AdyqD21Vaq1dmWuJcQ6JZZWi71yFuepGihC9u5KDd23g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQ4EaXxSiA7yF3b7TkqnDwuTGqgyHrJXV5wFL8JX3DV1EALALaBw73bVQ57MUY5PNaQAnN4q5748FtT2hotyG8i",
  "key1": "56yvwfTcrvekWdbzWNdvjwPrYsPYYTJqjQ2n4FpecicYDzuw4ZRMHbyBUsWzwJFpDmPXzMHhxrpztyGtWXJxcigC",
  "key2": "3zpoTFoRbavavyDoyC2njz7AEqw3uAtbvCtff7qVpk8a7JpqRUN3bwKjJUHyCtL9eAQhGPxBfMpkvTuzRPP5yQfX",
  "key3": "36vMAS51wR5DhF3pp3v7GbCLb9iZc8hzSagiQEVsotb6JiZtSxSLWTw9eNWXHvhMZTudLw2osdCww3BjGC9bN7MH",
  "key4": "crww8AVJMy5cXFYES1eyWivqt7zK5u8kRSqiDWPsbsJbwVayFsEc4coJhiNM5zypifCUqgK2cbTQkUsHxkmvr5d",
  "key5": "4zqUQJaemzemFncyTQPCV5Lihsaogh9kzya9rzsDwKXvbE4SGeXgzBpWE4sUFbr5YSSHQCcuoKZKtwBFPdUDABK3",
  "key6": "3Vncd4ezmPG32sMxzUptiDw19BwyBXEVbrABFt5fEPGJVG14tXDhdQfse5ZfqCAdbYLYj1Ui6nkrXiK1Z5PeLd2v",
  "key7": "2pazmvBaCHBTLWUQEQo1pvggMz1mMFiqNcXmxVTBC6SpcaFNQiY4LzP9rG29o2LJxPnydbQkPJKQHAPikYqp3BjT",
  "key8": "3Ekda7mrZgi2vqLaHDSbuvzUCV95gtfnYvihTyGSFNhJkpJ1SRXGyV1K44sYnpTZ3FajLFp8op8WwfyVN1kkYFBJ",
  "key9": "2niBCngMJVBxeiKfywxKSKKr4eFA6yrH47osonBhG9SrNAA8DkjD44VsbnZscG3iKeFabXNv26KMkfDinc9aPhLw",
  "key10": "3E4sWudhzqwuPW3oVjkXK3qyHTy8kWtL9e2ThcMLU8TFr2t9RRRLQWmFH1TDkfGXHo26DtsrV9ywJ4fNmmC2mXVg",
  "key11": "44dy8ZfZRj8cVmHdajqLqv26xPw6uZGpXySKNPesaxJCaaXsLs77ShSVg7rNqPwMTB96AQ7HLrwwTgmHapSR5mZ2",
  "key12": "3A7u9Z2LCBmVsx9QqxV4rZRHfxakD1SeVuAjmDfuR5ECtLGWurSj9QJ8Vg5JVpEj1EE9CzH3uhFMVa9efEKeWymL",
  "key13": "CvDfN6MNbYVnp8P8ZYhcUEP8tfPgZ5em3cRi2sn1En5mk52i53adfopKxbK4V8hyh3UyctbPC2wtGWGdpoqZCon",
  "key14": "4sGt3FmFX6DSRZucqT5zRxwoE9kEfRKgbmQTECx8HiDNPaTW2fNkH6Bois3aYedQGCAvRgvYFwjHW7Hdu1bNgtyb",
  "key15": "4jkS1qp5C76gCS7Nme4ZRcimf8WMBWyW5aJaFC5fU8VmY9Setznb8sDQnkEE7KtQR32o6DzYzh9yqLm5Mn6qEtfp",
  "key16": "3mW7wwvFAM2zGfUzngr4JhsvBtvKCTssGqU3KpG1V7skkoUaTnXhektLDEmd6EVDunrtLkG1KASxsm2Z13bZspKR",
  "key17": "pV4ZQ1XY4hnrfu9cCLiePRnuTe8f9kGPRtjMo1Tayo8UPQV8f3Xqvm12Mawise51FBoktvQrXkQxMaXtMz9zfm3",
  "key18": "2sgaUpubpDbTVowzuh73bssBWdqmhBfHHf1FXthkuZ5JRiYJxqw8zbEjYaUP9XXRYbnKk83TmtrwdotkyiBVvRp2",
  "key19": "6EPsF7EtF3dVFBbNWMAKY83LFo7rbQjpQEV5q5FMSM3P6Z38nWRhMRmtLFNf7nmn5RQkFRfNRQ8VgxXT4yGoYKJ",
  "key20": "65bn7CH5CGN4YZF3JJUhA2raCoEYS7gczx6cjSrCqCETsVGBcZrMrJjvARjQgQpdHihsVKp9CUmu6X9FRrxHtMi",
  "key21": "572VHxHqvrfCmiv7JhrAXKGFanfwkHhSXbuDz9oAjpwsTxKN1hFAMRfHaaYKR71kbDHA5tfzj8etTqtCb7EangVY",
  "key22": "5YAiQYrcGvwwK4atq72hzRHJxwcrtZpRd9JLfKgvj3hCBPtWfaLBed9MU2mUZSVoVoncnUopbyZdVRCaAphq7apU",
  "key23": "65W2nkNRH3oJmyVpjMLMC1N4y4jvsL93LtsWhvNvySAdEBTqe2u1TgCARx5uF2PuWGE7hfAA4hzjUG1Js3yqkUJS",
  "key24": "4qbJeGBEvKT5H6SQBuxrzhQTZw5LgMHKQHZrXKmD84a8pwMXyTHDH4bAkr57kqznZSuuofpn8NKR2cdQja9vP8Wg",
  "key25": "2yBZTC2kusZWBQTF7ZG1395F4GsnE5VrNCTpRLswkoq7AKMDtHqPM89JgukzqGPNSvk9Va2ubsBxPAXcdubnWStn",
  "key26": "5wPDub3BoZifpc8NBvEVuhcAp1TnvofAvxv3UwDm3eobmmW7sk1dHV5v9z5pMfrP9nYiRSknCUc9mf9Jn6WSpBep",
  "key27": "52w4EeCreL9GE6gYUAZvxKcuhXjd21Yx4WvZtLV4Yo3WNgMvuB4YnnZEHRpVSsXfQD5Rbean51qPzc9tpeqQmHFG",
  "key28": "tBm4PTU674aczG9cnyWNPkX5hsS77mcrSPLg1Lhg8cg1k1UNZ5HKi7ZqxoMPKCySyw4Sv2Pbh5enKoKYSCiaX72",
  "key29": "pw2GaXzmfsvf6bp9WNMMBHwpQiyykbBGqfQj25YbjpAkPGkRzQsJseeoSZUEDtLuE3amn566No6xK4rHeaSsHfA",
  "key30": "54MZfPgnAYL5wTQ2HFFuh9HZoXcymnTJkmrSpUPpFbXrqedyP3DJQRM4eEGuZtXfLmnvE5fd9rmT9bJy17ima6yR"
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
