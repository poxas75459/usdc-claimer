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
    "4ejBX7Mc1GwgJgx7PXqGe7ZvuZ3brQvy12JToDTDMtsxLbBbLU4g8RF2VX7skdC3yJC1HVACWbU2ArJh33o21xHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viVu4GYUNedAFYcp2Ew2NWYc5mkrbaBgzLtkNkn8KnpsjTu3VbEv72a1SjHFhMqYrMaCaGaWBcsNsPHYp9xYQhP",
  "key1": "4MtRNRFV6vBA19KfLARqRF68eXDnrKSggnrS3SvWWQYr3ydhUWBAmgBw71EFTkn7sfiDBJFekMgNX8ra2hGk1AAj",
  "key2": "6jiBLgAmGm7PjE1JB9tQ3dHNyLSyzwngdeMTkccuXikJGN9iuFfYdCvyaoHbXKeZJSSuYWiT34V4P434atQ89n8",
  "key3": "2MQE7rUqRoT1axqjAnece2KkLtREpKSxMf4a1SQy4Yjri4NUZCifWjqGUdTNkeHsUS3VfWbzfVfmBH5caTeU6VVZ",
  "key4": "3t55Fv5xSG6cise44LAZdqkqS4JgjfnvgH7gMDvYXv2cqPWUBdk8Vqt4roLWeETjPpnBrhKjE3KoYJpRD2NGucsR",
  "key5": "3tmzXBMdNTRsj9kYT6dmTncEBkzEYLyBiAVS333QWacEQ5TZ5Z3DKdGFebm8c8VsP5bMhMXtnpeVVETvogEDJ9UW",
  "key6": "5TZmvEomDRifMkGg6SqphonVUtbE9MKGmRMyB52epshra9XEGf2xngHDsstzJGYbMbh7qzjbJnos2pw8N8FrbYGX",
  "key7": "86V9ftVHF23TqAZtD2MGvs8jQEbrjzWReoNu7pT55Co2FKDvUzB4imNTdw2ygK4A9cLf2Rf4QVww4faFrn11dcE",
  "key8": "utQj9gcbtK2yS3dCZF47PZEHRAafZXa2YsMJJWB4QuwhXs2nCLc5ZdBCoEYTb6KXdjA62iz1GrKMLFTNwW9f36Q",
  "key9": "2pz3hJUrm89a6DFXPzxodnfReaQ5SEMFbZ1GEyjSWVcey32TUBc8uiBqt11rbGsraf5rhWjMQC8PrpWTzSF3AwqN",
  "key10": "4mrep8kT6sXkikWSWe6oHZXDNgR5fj7WrQjJW9bfF4uhn9wiSGZRRmYiNeVUZVdeNSw3FxowrUZsraT8DwaudYZn",
  "key11": "5G3pCTeCgCaoDH29CLbU1i9MMDNigU2mNaJEQeN5zucFU3SacarEg3zG1H4J6r4fMMGhtjZh2CXRMAwzvf28xBgK",
  "key12": "3dSsYc2PpSzorjmCsPQ6YModp3zJRT5bZNc7qjjCaN8fuVNP7E8pa2PJsRB4CgxYHzTeqk5Us9oFyFGLw29xFbP6",
  "key13": "2yndcC4F2v9R65H8fnWeersQnwopBehmvrrWrXjVSsveReZsSMAvYVZYAoGbfwBEkxsTWGeF2EQwavtMni8pRvnj",
  "key14": "mHWcxSAF7HqMfCirCDgdd3TFTbKvPJmtSQVWh7zfR4Li8y5SznobaJFCRSQmgYsBUXQwneeApU4LTEHyfPv5VzW",
  "key15": "2yZTQnCF3xoX2UmWDYRgijKXXNQcG8D8ugMYZYc7K8hL9sdGav1j5gn7gvm5wpRkZburowXsZi9eTHDMWUskXcV1",
  "key16": "4EKgJJLaqEiCdec3RegtybmoEdG5nYG4sN1W9CPrV1ajmx9CJX2BeMwuVtTyaDk7rCorf1CBj61ZedJyGAihtqCr",
  "key17": "4PaUvnva4Kfi8UtzGT7J9TLRkwnzYFUvYkWiUcXnRwdA2m7DXMFWLcoFqxfH3S7mUHZh2vnG3Sd36umCsTRN52TX",
  "key18": "54GCNENpG9d6WwbkrhqMNPxJht1UMWWdb9id99u3tJdVCtLERr7BrrtnKAH5mijqTPiUsqykXHpwaDdzsdA7HinP",
  "key19": "4kwcYS6KgFQq7Rdy7BLUpxuAmD2KRJCZWRpp7C7ghWUSTbXw8Po8UrDVXTVgx8MhDmLkvEEjua7DfB9xZMSTKhHK",
  "key20": "5x7izwNrA93GndB9SW9hVrHjC5R1YDiknj6XmBHvbvk1SSx2vym6ct9rR9bTP7p6CANi8Z2aCG4Q7QpvrtcKca85",
  "key21": "4mGzk7VxUa8HS8Td9nn3FF2iy2qUtfHN7e9kYBQSUFh1DN3iMegAL9nHCGFHcwSGsSRfxo5bmsHVzu5o5X4SHsZE",
  "key22": "uTan1UuJr1hGb9uRrsbotq1Qv6aHG2qsSd7X4yNgLytihq6TtKECMubVMsd6id2i72DuJXDQyyZmJHnVwFWwYEz",
  "key23": "4TaRL2A9JLpL5HQHR3Wrwxwijvyj6B946pWLEpC9uTGA6pwTnggoogo1VhNkypD2yKcQKLGYhGc3aiz5FPyQpoD3",
  "key24": "4ZLTaSVagcEY3J5YebjwuS3tVXiS2zXkLb3oYYhe8tepaugsRXFdmKRjspNqQ2PN8DF19eUx7sXqgXkRtXo1NQkA",
  "key25": "3rneaAJwDLo4VEQZyHFjSQcyyMTV6whm2mZgVMfhwgDQK7MkjZFzE8yf5giPCpN8G4CGtzk6Rmhozu79EFKSSKUN",
  "key26": "4fKfGrhMkSQqMYmxQfwpifTxYy1EeHykfne1XMrSbwGDx2B891E9FBzNzYojLyNc3rV7kH9SqVnvyhHqTJ5iqxAM",
  "key27": "4vE2TDoiKuGq6j5yo346VhSNkbYFw77NkDQ5xJ4eV1KvzWFzwwrUmwiUyA6r4fndGEPtwu2pF34rXnckE1yra6qL",
  "key28": "4nD7dWJeew68e5MRqmEoJQ5jMbFw4qzzVHpDBaxMoUcbPBSX12q3zQZrRNd55zbNrGU5dwm4HcvBnVBgzBFC6voH",
  "key29": "edoVpVbgtZsK2nBaXj1G7jEsiZLef7ikn9C7xgN7cCf3NUn4gsPtvAefD3LYtbBuWBmZj7zmuzyTaJYTzdjWWQ6",
  "key30": "rnCd1hbiceh7jqFvz8Rtf4RXGWRNBoxVDjSfLrvoZsuDH6TCTVCakuDtEyMpZzuBA7GdFYAc89GzBhvRFb2qkwr",
  "key31": "2tRrG4e6Ub4n1FioLEBQXXfyQLadhBMf1XWNF6VzEYxssLWNMxmJ9Z2SBiv53R3yKHM7SPZQSAfJMKAmTUNL7hPs",
  "key32": "2oaRda3HLnPkwManVNA5YGx7y9DTQqaDFKruPnn1oiTjr4ZmTYvwUuGRHdbgLJSxxMyWJc1vGvDZBEyeQynJy75X",
  "key33": "2fcRn3xEbxE1c7MyWPiXKhr66PgpeWP5t79CaziMo6TwarvbFJ4KepKyj3GWcpn9HsdFT8PpEvmEdjPZm7pHMsf6",
  "key34": "3W6LvQyBocHgrNQsY3zmnULivTkSE6Cco9Ht2YCdW3CCw1jJxRAa6iUGeC4MGif7NViCtC6UJtFYoWTJviQCGMvq",
  "key35": "2rCtYiqna3kLzH2EaSzNKBSSqAyst62t3qgwkrpBUM6FnAh1dd5yqsUtGJJof5CqoHEyjEYj7eb9CBHFVWKHpawZ",
  "key36": "muPMPraKnYrPQ8XhMxkguFBH745bj6fCBHY56RMr891LEzLAsrRApJzAzEzY3rVye89yR6oLXVBwUxf8a4q9Dcg",
  "key37": "Tek5GKxv2Pff7GFknYfmPce18oLFbTfK4YoFSKR1nab6AhBpGhyzgcTvvWjf63ANH1N1q5oPex5Q183H8Kwprww",
  "key38": "2CmmsTACAtgWJJjThziZYoYLv9jk3YiQkn3ZoaoNpphGcLQ8SuBVP5GbX8qmHtFFb5hHWN49NXgcdoYZe2pZcyDN",
  "key39": "GZeDDKjKZvoexzZHRKHvXSppZkozzohjdUdxVLnaUkT54wH31gMsxJVLmJK9q5MiEmYQXh8hVq4QkzfXbTAJr6H",
  "key40": "2iPjaN8WNgafwe9tu9k8VnsvcLQhq58Wco1rfnuxiL6m3hpFADmGnUwRb6mGyG6ZCtXXdVcd3nNC52MY9sMesMZo",
  "key41": "39N5MArx93fgNriSnLf32ByNHqYBt8Lou4Z35cJVEFSohj7MV4v4nXZD7VPxFAnwfby6kfRtLvUBMEXEHeHJm9um",
  "key42": "jPshTc5GNs5jx7MDoZcHgVUTFbMyX9hDSraDo1s8yjBubGx5jrS7zi5wMQgmGoafq3DcDRVqM7RkxcdJdiJiKrB"
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
