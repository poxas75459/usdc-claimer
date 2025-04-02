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
    "4LEwPqNzvFtZh5hCmG8F5LDpRYAYbYYPCfCmAbE2dtf4L6Y8t6nQocyxrbSuZJR62L1Rctac1suSDE5FyEDMDxds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657J3grM8V3UPgDXroCdsTwp9bQ7KgVSBsLEyF3kvz9TnJB7aCMnyHSeAxhxM7heumr9iJAhHozZrU1MREz7FrKv",
  "key1": "4A2EFCkj6iyj8jwgswCL1PZFozoYr8x565gAHqwLSvoSyxod5YTjDV2uXisv7V41QPz16AccrENQJbNTw3syWfcz",
  "key2": "EQQM3mPyZnb8RXXmQ1JUZU6y8brwub2fg9qwEJqaXqMrEZeLZup6HJxzsteZJLVFBmyi8bwiVxEWxHAKVzckfqU",
  "key3": "2hE2LigBm6SbmsC2BKJLyBXCdDGNzLkhhymQJJH9grArgTyArtEkhdoi7jkZUb216RzbbK1oqjpegusZMeRfpgiy",
  "key4": "DaXMzbDnHgXLvZrKPEfwoKxSgmD6G8KBrNf5HwR8ByGAjQguwWabKv7UMz8kWanq4fZUfmFDvnVQoGLNqpE5ct4",
  "key5": "3WL79tiFgcch6aMev7RCjP7zguLJ2XvApQP8gfVzk7VszsYnALcH2mwVqyBngPQRXPQBs8a1PmffinYzjXTcvxHB",
  "key6": "5FPiEBNcP8uasiCGhEPhjzmAVN759k61EADrbC9N96x5a5jcbPewadTcqzT1axwXHUVJVAo5vK3xABXtgamymjQA",
  "key7": "2duJ1WFi28RhBpd5jKc2DmdP8LG2zk6heEVz1dxCbjtZ8WAEF6AG2qdFF9dRMVSwKrkFSBttJdj6MaCEXR12Upmf",
  "key8": "4HMXP3CBEnvjfUvRKHofYYRkb4XZZ6iAP6EcBwQDP8CQZSf5ZvSjCRTg9fsAmLnfZ4ZJfZ1JmZzcgR4vu7xW1bQb",
  "key9": "yQz7SzN8exxiR5YvrnhKjvqtWNrYv5vwTbUyh8W5QArAMty3iAbEadtYX3YXhqTgZkmvGj7o4qPVm9Vp7wJDBhp",
  "key10": "526EXRU92QBUUodbfbP7LWFTnyNqDBJpQzD7RKhQYBQi79u5FtXK7v38t17ieNzwepmS5Wt5DXEs2k2D6x4Dkojy",
  "key11": "27UVvJyNqyzHkagyXsiKh3jHd2QhXJiZQBa8sqfUQPypsCVgV4ubEMZjYbSiyAQr38QAQGELWo3nBftqJsTufwxM",
  "key12": "4mUPN1zUDbTTWJdPH4KBYbnejQzD1exGeZudeeTTvAffgydMdKkiE7uxCViRuEn4NLGdo5bMdLPVtngkqMHnMsh7",
  "key13": "3qYJ5qinPgBHB93U2ijrQX9k7uZCDbjiYivNVXy7BXPQs5LPi5Wz3peHS5UXgMN6JmdBJZ3GavYZi3NjZNo1DpnT",
  "key14": "4AyZMPpfeqJsMSnuQvmnGH1FooZ1Q8B7myroBVunzZG8Kzv3vyBzuQy94stLinsm4v2JdzZoSoMBZWGGUs7jmjWT",
  "key15": "3F3dfQ1YedBbujtzVuQ4dPGZQYudPqiDfqTVUDZX9D89wsvxaiAr7Ev5rZCNoqmW8Dg3LRxxuZiQdhftWYBrJXzb",
  "key16": "2xs3y66ENLpVczbcNS83jNqMGTMM31PPoLenHja49FYNP4GnyXwcsF4ZBMSP5gY26UUzUTwq2uKqBgZArnKTiA4z",
  "key17": "4aHgvBABLGJwoh8Fbh7RCXMZYyGT9n55uEn7H7iPvJAw1ur5V1Q5EePArMb2rg16q9hfXueP5yQAYBpHfPRypRcT",
  "key18": "4YW1LJ5JcrVTWyaybSsu6KpCiUKqfSF2kGhpjYkpdfmfs1LEJ1M9Ax3SqqWhwKSPdpxZSq8GXBh9Rtnjfn1jqgFP",
  "key19": "2JNgwr63WGWWmpkrMbx4Ya9yiaAuCbwh7Cz92iyyHPFN2EoXuWXcy8gvNmhACQc3GUN288qe45jD7ZggrnJBiC8u",
  "key20": "ZQLmCr9ghqGJ5NZt5TpyecF2efokkarWhjZGDbamWzRdanUNKFNNTaqYcmsk6BbJQgbLrP6WS5yZVRTYEKpC6q4",
  "key21": "62timvWyCCQqoERcJpe6yPvCXgpND1Vyz8r3Dyaciy2snvCtMyH68ttdHMKi1DEfAUPQnE8VHK3Y17n5EqpSxfdc",
  "key22": "2abrJXmLK61sw9YEjaeQvPEUPSH8vFjjHBi76buy3TyQSig3bXUdm3yXx44d752NyfnyujTPVJktQkzvQKNgbbfy",
  "key23": "5LjZ93YpwNmyTJq2WVetuRHPLMV9t98Cpi5StCzWTwQRH6DHymj5YG2N7KZwyzHU4fz4L39KT7GJJm9okPRuVRNt",
  "key24": "4bwoJ3omWYYqtHbaU8WpVaYaiYKPwuTV5H6mnjR1u5xB7UeKc4p9Sd3F7hsWFCxBgeXHcuqHYaoiL1dWThP8Mpg1",
  "key25": "8UpNZNS3tRT1Xv66SQNy1fPk6V5TQws6CWYojwzxwBsiUfADks65UBLnwLhcTc9a3RYGRdrsxv1MH6QwMQTwHzu",
  "key26": "4Fa2jpszBhnmd1k8h5Budw48xsctZkhDnhqLgJnvszJ3Ax4oLA7GNP9NFHzQbHBo7nHaHAWjj1SAPisSb4EFyrEJ",
  "key27": "4QZyrRDBfSeSngQvXNDANDjTbHkkeuHBgEtpmXBeNabzA7iPvWuRbAzKeLAYC68hbWrhJ22tbmUtiZB5wC9PoAfD",
  "key28": "29Wn558742zJ7vB2w3gCUHNcjdz4yAtW1nPL5uYnGygP5idrm1SGLErk58sTThtr2eSx6w8qqoDtyxRHdwDcroVT",
  "key29": "5Tj6cVqX3YZyxz77FkM82kZ5oNPGi2yEYqNkcjH4uvcjdKXkHVzBVbtMGTFrRzvYof2tNraSSqJc185nCBmqyYcF"
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
