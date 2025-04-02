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
    "2AcnfTeMYhVhHAFXv88hggxNviiNHY1aQhFZRU9ygiMRQYXaGffYKeUDNQh3BDcvcrJq9PAz95cgJjQgD9XKkAsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GW53otazpToccgNU664rVXagdBLGh9QPRJ2HUeu9cgH3TmJ6q2d1PLVb6vV5ot4zkRtpxBSBVaz9a2brBzUAKoE",
  "key1": "3qVu5EdoJLQTRV8KZGduBBqKRetz5vJMtodS6CqqyAEyGACGhke4nTj91NXV5mpkMWLVLxErN3brtU7K6MDRbh7a",
  "key2": "5tVxdHPxZWLdDx7NMhLFnXqBE687H3nFXFXFvL7VE2oRhZsMCpGQ2sDX7WmKyYXLo8mmtvsfvJhZwHG4qEd6rTvC",
  "key3": "4Jug74WFMATzLXC2XVWSTtPse76w3CUa9NoJ1G8AYE1TQpFqsqPwVENmXVoXaRyKGnxBWrj6vSfJGzNsMwuocdxf",
  "key4": "2xdLDABLpq6dyVcwbYTDYe67bdnva21aif6XQte7DHAswfLAVhZRUHYLmPCAqrUSnDzg1QG4U4dVfAagVUZho3zu",
  "key5": "3yPHx5yiBExZo77SfXUwHNvEvg3chbBBABw19uPTErDG54Nyu8nbnT6ZRz9RZTBDjXyPD6FUJcfc4xhh1WEzmJxP",
  "key6": "5DgA6aTw9Azpxqx4AjPVjDRnD75UTZpHtTZEMFpHN4QMWnCQwZNJoLaC6NRmvExRtXAhbFeQkFmbhepKhKbDHCRS",
  "key7": "4YKcBLo1gmZyvxWFrVdCtfbt8WFaKzpkLo7fZF2FRotfkUXCCTKHb5p31TuHFB1JeWyVXZjVr7JFaJmfNVBG3wJ9",
  "key8": "2FNe4Wq5G7QZSqgtQNMXesW9BspACLVJCZBr8Ryg86hs8LmvqH6NsZKaJnqokkhZs9RPiYEs7KsnPKakN6Tox7DD",
  "key9": "3YEq9zi9134eMVsyg93abzrSw5bBJCxBjvEKGooPL1kEsJ6TsTNScPyvGctKjRZ151BWaY9TF7fb7z651Go6DDDa",
  "key10": "2unGtLfnu19nr8btu6vR4iSnCauNR8r1jQb5raEjp9LjFnjkrsHQ8zQKpkh7LanPhKBRvkn4PkwBoyogk3Jr9rZE",
  "key11": "2XeGsiCVoBgt8GE4YLPMMfpW6MPfuFGJoaaRqkAs9V4grHNu2pSvVF6W1T4g5wR9anQgrhVtN3buyM4G2dW1m3if",
  "key12": "2DGFh5fuieSZSV5fVrhWhkkHVYTDizeLoZ5kPBVLtHYKAkqhbRe2CJaPAd8RTxvZY1f3muSRkSmj6QRqcHkgy8hE",
  "key13": "2RKiRFLSK35gfyKrSkD6Fp6G6ynSquwv3K82aYV5rnvH7Eb6TXSCD8fhzWir3QskN1opeZrTsmowLViNFB1NaaAt",
  "key14": "237Eg4q3QXGwUwV4AaK19aGaQi1JKzX8zkAb69fDsGFPuh2UWts4jWMZDBj26SiWD4jV78vKQHfxWdGRvJoSfHLk",
  "key15": "46KNA9XprynfqfFmXGP7Knrc3uGhhtb7m71uKPuz75kcwpTqh1HfZ8W7NMjZMD9LoUTx5dZVpjv1Katvk7Z8QJST",
  "key16": "5K7gqo8Fx2kBXqLtj7AREqwoFtL2rx1ooJqKNyhenxQDe1N4sQvXSHCqDQ8FoV5eeq5KhcHxwJoUUG1F9RLWMirR",
  "key17": "2bjJHYz9C9LmTqwiV4HA8vGVsCPym3wk4Y7iqpyKZ7wi3V4qucip6VF7AdpRCbZ9avPZwjQ2KFwi6c7uJkYhnM1q",
  "key18": "31wnoMDGb1uXjgjyc1UuviMbjKg4Ua8k7pKFH2sdyn4ebzLiSZNeWMY8tcHyuHT6drRwZnZA8x32AtygeCyNhZqP",
  "key19": "4JWdJpGEzneTnTqaHnqHQxCrLKBXbU3o1cbr6WmS46Jog3JGU6T4pviUZB5FAhgZCF2eW38JmiPKmqNq6D1xwTDS",
  "key20": "2U3AEejFGkhKEnW9iRa8DE3J7MmmGrsdEai3UXxDUncdx5veuZyo5vCKmbWqKH1McoSwPC8gZVEfx21zriJ3Epdd",
  "key21": "3fH9aRydPUuhxwUb2kmWip3JnJrKjaPsdBkD6mwF5z7vK6PksAi5F7uV6FCicrNEb1LELcSqwxgcSU1FnfUJTSgy",
  "key22": "QqVjtsZ68L9ERLKWp4tCrpFWb7HTHV2BUxeJXa77VcdGDxf3FKZeBPhaDPzPnQwwcc4fPR3wZvnpgHVdgRS1e2D",
  "key23": "8SjVyeXcQGqrbTi3KKkzzH55JsXeLjJMoowcEPB7PcHxTFmUK5nSfXagETstAuPvVSZDogKKaWsXSGYmzszMsXk",
  "key24": "35LgLwenDAm6amZKKbS4dVr1X7BS2KxPMsikVQzzwuyoLnn3qTdEscD31caowB9MoBWHtYPYCmGq9S3DP7uzw7WH",
  "key25": "4FLE61Roao35YbZxicwKFk1mjzecnYPuNLr2T5czfh49z2YgMgCSvLhj1Y8AAa9nQxbKzNtxRAcpWJMQXfwmae76",
  "key26": "3V6N5SnvN1eNpPJgJnRHeLzM4N8SZGdbPAKYTD5cmd6iMkzZdXgEsTpevJXQCebigUQbYXMdyeEcKSoePGVC6WDr",
  "key27": "5LxLDWgy3PBNnVeUJ9GEsAPQmKjyTxso8Do2wsj8Yo5AARhpuXi332NT7rDWWajWcTXnunzmNdYku4o7q66FUtak",
  "key28": "39hNorXLFE6xGEytKPACFhVGsCKivgqKLPL1JBicCAYyyDESoVD3Nzx2Mcx2dRx9U9PHeuHfJHEDn68E86yacmYC",
  "key29": "L5E96tNauvFuPQyj3QbeEdE8tmdyowFwTPGvfbcfDc16ho5D4MacMDbJy446d1DMzCbjk4yYN1MZ5HvYDVL2tET",
  "key30": "4DeDZckfeieJ1QqbJzPpQjwrmyV6PW1Tay2VfXvKd46sUHMaZJM3whdd53T7s3PeAr9Jdm8Hef8YCrBAGbPgxPip",
  "key31": "bNFjRETjRPX9Ex4JTTgmmQwPHavv5ByqsadC8J83RTjn1mSDZAkkAu3CNDWbtziCLxs6gB76AV8SLntyiwD1GAP",
  "key32": "5Zd2s85Xy7tempKCnrKqkGjEhx8zPpyE2gd7i1Nduxs9TGDdqEwxrgVjycVoszRZoo7PNu7GKasRMatGfDzjs3Rt",
  "key33": "5AfmeLCTcpuMQ9WV5Rm3vZbMU4UVoLva7wBgbLRZ2ou9ea41HLT6J6mFeULESixn39664Jjf7X8EddJ1qiApWzGs",
  "key34": "2w2EP82sfgLB1ACtGSTiqNg89G92oaRzw1VJFc2ZZBVSUT7CWbwCKbJ29Cr4Ns5bo66H78q2keTnbFJgH4AsCdpH",
  "key35": "YyiQ3uQwGiH3WGq7JLaFD7kY2fwQGAvQHvda6YArUj2mJpr193dvr6N5q5rKg2uJQG98FmnKnYuFvaj2jVzjzkH",
  "key36": "2FBTfrGcLsdgta4L5x5d88CTkHxEiVdEkDNkCwjbkHj9UN4DWPhop1jCFTxvGqmAudwdppyjP3BMw1EoJNWSDAPN",
  "key37": "5y9Zmj3NMqZwQ8eANoFj7TeJ4nfoKPoX8JHZfMYydfoBu1QqYg4JR1EkBaVa7S3NH7JpTShHRhMpgbftLbG5jJuY",
  "key38": "YXunChv7K1Wj5Nq6dBL8YbXuoBJp7YJ3f3Ci3ypUZtFqL7R9v2CXoDRyp7Kq8L9tGnW3USKuQCNkyKy6fdHmNbK",
  "key39": "3rKavNbcyNcHkxtpYPR4jrrPXdcLBDtwisdZuEUh9rbPLUpxWLUSjaYU1BbMoxzD3fS9qXPXcmDqQNmgEcrvVXWa",
  "key40": "4LfzR588fNCbErRbhpf3n83aMKWLZGxybHfBizmBUZNaX6quGrVwK9CeUqg9ABhs8CDS2XJwuaJdbHpUHNKsAETe",
  "key41": "2rgrvCWJS2idRid3mfzQmDhBkFMeoiNmczizgt4SyfjU2dnxzKbHwVvoZsRauxYRKXYoaqA6hDCkewgzZJpzRR8x"
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
