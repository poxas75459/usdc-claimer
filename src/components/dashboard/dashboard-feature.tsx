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
    "5cYUB1KgHWzmsJn5eRH8oG39RRFk8cujWNKXAJF3Yz5MVx5Ea58n6bXV9gqnBe7nxPFGhgQvMpKLMNP8eYDJi44c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLQQumeqr8ovjpQPsffWqHzUxTnsCA6TVUnaFAobC9tYEFgksot1jBouTJJXPH9VR1qbQa6UdgorjZ5ERtyKpMP",
  "key1": "216SnicUNr1wbjmnvhYxY3J71u4fL9nmUBJukbWzx3UqqHuqibaUwX1Y8yyqQdb8Un99HnysGo4uYDzh4LaX5tia",
  "key2": "2RuUTAWKJh2VRwau3a6Aegwwz8a26ywMbqqZVjtYHjWr2ueHJz7EDuNHgozXfsKeyiYjoSC9rgMiakqWMqMRWtwy",
  "key3": "872qrFNtjqccWPaU6gbHFQPHxeJD2NQc8LUiCGsxVWsjjgjD1MHKjL2stquukpGum3wZnKvLaqgLkWtAZVjdPuz",
  "key4": "mo9p5392umt6DscCzt9WW1qqQMnsW3ka6qgWdshBYu4M81ipKvrgD5M8u3XUEL8M6KirJyuhXLNrs6WTGzCrWtr",
  "key5": "4pyakHXNkzQsqVzfs6iiVjcwP5hoM86LjrUJhSEwhnyW3PF1cegBXJVrW9N55e4tivssGVJXczY1PCeBEu32Uw9w",
  "key6": "B4bFqSvZzhJ9BjuejLy3VrURWmDa1r92U5gF1oUDQoeRzppMHXSZGbZCNqjMgUsqWALibek7T9Mg1icXbaanNyM",
  "key7": "ySQpW4caMjMapXV1yupNrpRGUUmFz2JBxDqToivun2TH4ZRBGZrx7C4N9wKezULz69iZpbKCvSFBQkZjDpAxbPo",
  "key8": "LDrMhMepYseN54Qsg98iwRXDAS5QkVDUbztuqsK98QywUQdrDxZjuwJFM77S382dSqVS2h312NTW3LdF9DZVtSB",
  "key9": "2yRA4f7weea1jRwinL272pnzfHXy18uQxpxt1a8kTv2RYE581KxYy23psrtqD5vU5YXQ645gsV1T9LnFDWqZv9Ng",
  "key10": "3g3fzMd91DazMwm94k9kur2eb1FW32q7UfAw44L85HdYWmJqqg38mwQqgKcuPQSYSZkYnSbDQQxECidmV4BvAFVC",
  "key11": "TZcU1nyo9tupS2bDFMV8AkM2G7DBmsmyW4NrEcDvpo55F2WiiyVeYAsQgzd3GxEPjaXvKu8vnHAxnce346au9J5",
  "key12": "2dizE7QY7yGCA16WbC1pKxV8AunvJ5ChDUt3mC9aLFp6nEehf7JyMWRfq1J31AdDbZyAvzF68GWHdds9RtnU6zT",
  "key13": "5qPY4iyEn2shxofGnhdzLEmTCHjAFNujJL4wbaoS3AUTK6UdeD7VStwFMoa69wcgqdjVvkKcTEPjU4T6ecWbKYrE",
  "key14": "5wsx9LYeNubXrWthbZcpJjDk9QxyrWTi6TVwccBxxDPmAvS7pff96Ctz4GfrU8Hkbr9K72JMH3Y3V88yKSSpYAgz",
  "key15": "5GNnTxpg6ssWRTiwLwa1SBsY7ywrLDUDXbE2PoKhmzzaTMa5qNZrpCphnEYrALuMuva5qTeWKiy17CQgdPpRxgSB",
  "key16": "4ikTgpVkUNE461hWV55MWA2fihevRhS8fuK1vNH27TSSyWng4Bwx8TQ4DjfbJxBqPR1ErFKaBF39B4moJUswBUeg",
  "key17": "4rBsmJXkyxT2LjyqMjoLtjMykLg6KdxhfuFsmHFWBFPQ83yTuhVQVWbKdhxr3HwVhSe66qymtcmfXL4dyZmaGQPS",
  "key18": "3h7qyPzYBvfMxVaZki785C2KXPvPs2C5APTftRfqpfvfQYXDsQt8XPqnB1i2XUkPzzXhSQH6D7xb7t3Aqz1jkadK",
  "key19": "g2A93YAazYsCciEfeXAxJB5aUuuN2B9EEAZW9rU6fXW41u8vZHy2k5vUKS2YhjpWScY61zybV6XkceTgqxeSfU3",
  "key20": "3gQpQGt9ZaBnChcDnkvZysKWtNMsDnmrUTJmxnPpjDBYYf8E9iKyycSrdniCWeb13JK48LY1ftN8a2SqfFthDySz",
  "key21": "2SpqUNUcLWLudHHccj6D6oyKzhZytnRxWC3WMBYaXasLAWP4uLvLfvCUfDBe5yszaqtYuyAdp42RXDvfmTpPyn8w",
  "key22": "3CjdoCESoqmPysRSZUjRsmyJJKxvhwYk4YyvetQ1EkNKnBRNPqV8xnGswSCUQLBSi3FKvjJyWFq17J1U9P1Yq9VG",
  "key23": "f4kFvdDsm8FN52WRXR1xs7WmPwLr21C4cpKNXbR8ZaVquKnsqZsUL8UQbHFPDppJcU83vVbZAUVPbkE5oxnF8uo",
  "key24": "4C9BWRZ7hXPujcB7eDPGjPgM6UWSQ9qfHbg4nLA8jACfsuAhEpdr6YiX67tvLnC51VN6fYDv9mnTiVq7TJ8rrM9o",
  "key25": "4SHb5uwtKoXSb7GxgjwhTRWo2VRqzSwFTnqGZEybMYWaaEKmx6i3AvWTgfWJzuHMWVVAjoebEQd12zHydtJr3tqs",
  "key26": "4GY7sETneT3TwUf2DpNYNQKkuZk64Qi2q1WcqgpseDgUzGU3wT9fWEQLjSoAYR3m7iuLZiuTQGpm9qspL3EDcdcH",
  "key27": "4ziB14QwibQKExeSLUzFpZWjJCv8iUFNB6GsyLwwqn78JkDMECsx8KtTX5fWzwzJfGb9nfrg7MS5o2KtozxDFtm6",
  "key28": "3RjVQe9e1nswxC3DjMYnQMUKka48aCuunkaqrNvkZoveyo2NLJTcv8fs2Ub82SB1hwKW1hgib9FtuREqratG29G",
  "key29": "4DWQcmUF5bRXkGNjvTTYRSXjDyDEYPg6GnDZJMgm82xDxVLAg5RF1zM9oJLPu2KtUkGEhE1wksWN2wdNe2obwprF",
  "key30": "2bradBaxGQp3dFuNLBrDqywK1vdqaS2rZtdoCymoWDvgQBvqJFk7CDdzHJbGigxqaAs3asofUdmYekGemWNg8zZK",
  "key31": "5Nr3f4gLvcwy9TToJX6k2CsgvbYSyBhKHkQj9puZ5HxnjicvUXXswq3SkTgNpHTMC15PQFFmr3Ed71Xsn49MWmgy",
  "key32": "3y1CVqEVA3wGVBPvAziN67NXJ1KSsS4bErKc1zHK1ML5ewrW28NBetxMqhy7bxmLMJTLNVHqHLzZ1qLb9EFYJrBc",
  "key33": "2K5ARDzBjuozi4QBZJGqYD8Fg6fabMr89fiZGvYpxfUdiitLmDUzAnQSBpnpBufo3jmaNFAddMzmSeJ7BAYUNkXv",
  "key34": "3kH3sJrLhhUzZQMi2NGDB3ban6Y6QJDdkaCpaYTgRLm8a58d1D4fTbhqjCM2MxsNbBRvnCdG45J1kZRVhuQGrQ7E",
  "key35": "5zNBuReLBJZppBmBVeLPEf6N5MAH51QbL5N8NcFqBCYbFRcMxTS8jMvZXwMSjTvAsGyegUmDGcGRtLmon638jnpr",
  "key36": "43JoTcaGai5dTCscSfAx8X3TWs5k4gPNiBTMm28fH39EJJgFxqZsa53HhkN3ovihe3NjXRdSRbbrVoz6hv7GCgwU",
  "key37": "65PtnrV2H6D46dHrftPnPccoy4R2M7z5YC2fNMYfegxEFE2qcvWoYEQexx2eciQmu8pAUZshiivdsDCNooKSLhzV",
  "key38": "2qNZjJ6XU93Qy1WrRU12odxeK8GqB4z7Ukfm1GGD6gi9J4ppnDj5cdSHwoVg2LLqKcRFvig3TH26m1Vi8Sm9qPwE",
  "key39": "2oHe7Fqbmdim2rDVTSAqiEYtddaFnXc4ezZWRzUzckjXc9z54JoaPzPNH4RCvkFW8P1xM3NLqT8H7DBabcWjFBDj",
  "key40": "4GsmNJRSuWDbNwYYqgUXWD7uAscP37LZPtZ6uQNWLxWksE7fPbNz6firxzTi8iwBaE71VrLBKRrhsxXQgH6cNSpk",
  "key41": "2pRPWx1DCp5h6825WqU9U2b6bBhN3cQ7jJ1EUgxc44j7JPyxbR3vnaqUnwrVxEvPkfrSdVS9WWEw6j7YMyHMdKaG"
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
