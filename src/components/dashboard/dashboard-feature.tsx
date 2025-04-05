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
    "5nRMDUCvBSekA3eErYWZ6AuzetDxck54qaCBeLPgLHdKYb1HF3EzjqD3gQAgj6dPjcQZAGwn49kyG7bLnw6EQpxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUqXK57xQx7im4YMuHBwrt27dgBMt6EtMNABqdXTRkXsexNAHk5ikddWM1TxfMCZvbicTegMzdhdv7z9sQbssYD",
  "key1": "3s4yTW1hztANANSwCFHGL9mAB7KC2eTbokwiCU5WAKEx9uLcPD9hN7bBheZ6VRPWbggbqgwzWZabNxedMWYdu6P6",
  "key2": "4RSmttev7SNhZ8n4W6kSdgDGosQvU3w2SaYnyC2SmLfjs3az43kJignuCJbAzuDZPjusFZDSNxVs8HkxnjdNVYEM",
  "key3": "4JRrEUvF415iw4iRAPGpki9p4BBqXk2y3aEnYswoXjbPUugb8CD7qNgR1FUJukx7uKMoyM7QVqP4hT4qzyfvG5Mf",
  "key4": "4kiZaonaJkME3NVEfibnrHTZcLBVaSHgTjCPrNQ3UFEaJ4iNT3dJPsqvBonVZn2xkNB9Y5eYSBezYvVa92vxJpAx",
  "key5": "PVekPM2HwqZymBT6SMJqD9cqiCrFUaDQwiAgwnb3DLXPkQRfzW6AFKU9HQE3q9GveFPkQqstxWekaWMA44TBTTp",
  "key6": "2nD3tbVKN6vpFDr4dK3FsyNdGU8PSgWbz4fdY8vbfFHjAJGD8GWjc1GV3SSTBZNjfuyWoQcBcfe3unmzf2C1TtZH",
  "key7": "5mB374kRSagFCrRbGVhQUU9aG5hKHgF9PY14rPigKtukUpuNK9pzYTP5kd33S92ugwt9KxmthqkGPSaBtzuQLjdY",
  "key8": "5CM4BTMKNaKPXDYMC4i81oPsBCFSPh2AMLmUKjBEvY25A8wMStDWsb8KRBNputQxkEqWQz6L3uwSxif1h2xBNfzp",
  "key9": "2Td5vTsmVvUMTXky2iP5bZQdWXb8R15QwqRRzNbFN26J5AwMgNJ2iLqNpVt5vDAgTp3iDKP8pY2YNLaiGxoBzrMd",
  "key10": "4MWk1MLTGuJVMFCXXyxT9xnxagBVYB9DvmpTxMzQH5FRyhce73WBQKQxwA6qwaiBdnypBsBVZiV3zBjpyMystct7",
  "key11": "3C1obgtiviT5e8dsbrjPSKWng5mmoQ6bWFnKwV7XGUR5KmBhzyBn6wGCW86MVaVjRUZxgCwpe6fnvEWaKT4MBBuc",
  "key12": "4eWykmdqKMKj72Tgprr9mKdgByyTP5UdWEqJbJLq94eMijwUCTZpaqNv9AYodADbAAGRDt6emitmNVeWNpg24LcN",
  "key13": "AJAgZKHqb8u716oWN9jFzJ1jyaMAnpQ7MGsR9MrjHGVeUdDzbiNNihEvNT6apAq7F3QhRa5qDP4R3AkmxjKYntp",
  "key14": "4cS2bKSRRVoM2Ls1p7NZn633GjzTrWGDt9LWLqo8XSXpgiJLw8aAzApMVPkC13H7WWneitLpbNLw3a4DhaVuSYPJ",
  "key15": "125AJLy3yWf6awS2DtiCNffXxXdHShTTMqERtpgRWe1G8xvbpDshJ5nY494nDNctuYcx6dWjcNDLUu4BDCAMPeN6",
  "key16": "Fn1uM22gG5GgjZFU2sHbiq79Hut6JQLN4Lj3ihLXBpjKUL86LafP8viyP6GDvmN425x6oPutLL6neR6WTaWvgzh",
  "key17": "2UHAxBcPsx3eTPKCcAE8CoSjogae3CfoJjmHJM7uewaqDXcTQd7qgnWQF8vedpeWg5Ysti8PraNzbGjETA1qMCfK",
  "key18": "AZh3DqQn8ikNwyFo2FJ9Hq8U2ptxuhDeWns8ZtTdSFndfoqY8CuX6y152WajtR6XnuGbSjK4Ax17zywkb2aTcCY",
  "key19": "4RinGcS1xBFHdwy4F4Ee5fhxyT8v93nFjw59HfHhQosBig49r9BznQ7qYKdNTQG78RLfDXQFMykuGMefa6KM7EJS",
  "key20": "G9dQGaCivZsbtLnkdaWXzQFoo2gxy5gnkTMQN6vbUzPM9XKMBSSTQPYbjN53v4pTsZF6thjuePpGV3DfA1yJjw5",
  "key21": "2h5u6WQ88p5h184oGt1LCvMr1TrMLu9KWg19TEWm6szfioSpncqZ9qDwkqomDsGS6Y45KTEqczCFavaWJ7Fn4WB",
  "key22": "2MNdF2nRriigM48vgDajyYjd6WRpiAzSmbhTREjpKymmL7ZAsHjtkMzdPydNmYFny1EevaXRde7PN9GZ2a6FJXXU",
  "key23": "4Uzt58hbhs2ZYqPmjL9MCrGvpmq9iMMZ2iYiZtS7BQC8uWE44c6TgrCS1tCyuVfHY7iM6voaPWjjQbs62SWEmdPB",
  "key24": "3JPvAvKMf1YtT5WonQwWjzqf3MhfVJAi1xkh2SK1ppkknGJkygwvyeeAhWwBuXWVLvYGywwh8FwK8chu9m9HJZQP",
  "key25": "3vTxMooaJH26ERTJ7aFJAXdLKRCX5DRMJvAhLmyTWDru5xH3BpiAg2chx63a99iv1yu9xVHqpZf6EBZCn4vhoMi1",
  "key26": "665orBQBLKRbhPQsZar8j6d4TQ9xapc6KwU6rr8bf8M5DArZBsimrsr2XehcNNrwhHrUNBGSbXmW9eJ6joLo7Ten",
  "key27": "asr1mr8b8nbyDMx5eRVDARPTPAsz8JmRzq98McFuT3LrC1dTc8HerL5WRX9b9jZyj15u7ojJwWouDZ824ocNGiJ",
  "key28": "3vcshPwiGQQXnXQewA2BPxxdb4Ti8cSZ1SwuVd8M3hMmi4caz9snabRqbm7iaK3xqca8ryob7yjB6htZTjwT4UpQ",
  "key29": "3NhxYN3eHZqtHcwEnupm1SGqq6trK8DYgsVPkp2DMnZKsPzYLFDuPKrPLf65DBmYpc5FdmryGNmiEPKVwjUMvEf4",
  "key30": "5f1HDhGGfxdo2uAnMuWqWUYA81kJMYHu5NrWNyuu8YgeffWzsfNk176A8jiJS7HAHt3kNCAuTYBGyyMuy83zguXV",
  "key31": "4aaBzKtT1ejLkW2TEH3c36LLgx9ZxkCyUwvCbfdWucGybDskf2FQgT3FGkR4vPmXBbeJB9PgWud9TAQfkFYscNLW",
  "key32": "n6RWo95NST5CgDSrd7YUpNgnWnXsLKz4qw2Sq6g41bwbDTtnLzCmwuKZCtirMo5Nu9w4Lr5DZzacSH4BuA6VJnc",
  "key33": "ud9eqUrShbYL6CTbnBufjnDBieg362cqE8Sx5isad7FSfopRahtdVPtdaVFSp1u1NykRx2AUo6YKC2HNeqB8x2A",
  "key34": "4WyCFLRkYgJPWJm6wQd19hhbX4u42LrArxtqbNWzSvfTfzueoVWCPZFozcdqWRDpg7pW2P7mTCo6eTZ1m3h9J5tw",
  "key35": "4Ls4oya3o6Cs5BytvHh3iYs6XarpZagPR5JTqXp77PtDaH3aa7EDWRZXFahb2h9eev8uruyZZ9Cnw895ZngLsW3A",
  "key36": "2JWfns5g6Pu5J5BTmkZdZY2NnHqHYvQUzxy4NSqrQvGU4o2FPt3S18Q4FRwMa9W7mMezokZkTNFRoNsk5a5PAUBh",
  "key37": "5sZCMk35MXkFXJYGwQUKJ64gGfeb5hrmYC6cNkg221a1LzhyDrdqPjmn3RUFh9SA9SGYGfYcsdcBPuUNhwb2SX5h",
  "key38": "2emqsWkRtotAC5brX3jnzqSxoqytxQ9VHmAs4kRLFZVUR9r1uZ2agaxbWLsYgqKQ2WaZK3otXRftGN4LW6Es2JLQ",
  "key39": "2jkxLTF8wuDoMu28KGaQo16TjKNhTPHeLwN7HczDsnwKJz3rGfAbyvRi62jB4Fbf6fyZojw6T4RKzWPVdrNEyGDP",
  "key40": "5QRaH2ZyGeE3Bnwh4Hbq3jEYN1G6JX1QYXeuKmL5i8BM8axo8UB5Ya6SAfqJKWZBxNBkXjUVWPexLxCKXoKW52hr"
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
