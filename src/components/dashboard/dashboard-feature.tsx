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
    "25ZiLf7LvnBWUTxL5oY14G4EWfAwspySSyk546Nc9caC86WW6CiKuDxdpfkmUU8oHJ7MthxaJm7E2d3ExbWRjwHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHHJcrAcDnDr4NAyNVh4V38RgRZDx2f3aiBGKCQWyw71FRst1qZhLJLr9eNU3bWuTk9dHzyrkrQVTTxcSXuPM1s",
  "key1": "2X8JVnHUAqEywMqsdQAgnU4zmosq9X5838MkWHPkrESCg8dveRSDD3BuMPVpqdGpfu4KgUvgQT3864w5MyuZcjUu",
  "key2": "2yC6erSCWfVriQsU9podgZT4qEeGFNfyvfb2w6S2SoVkUf8MShFmhgprXsxpGyTdRVEpSeAn5P2uKB1qpzasXgqw",
  "key3": "3RNV51MwBUdUBBSoC4ZEpaAVuKNUh2UW45uTNkbswNjshg4snzTR8MPTs4xADKzSEiCrKqxc3D6TTGzffFtkphrx",
  "key4": "4rKy1vecnrbUH5Y2YqojWesypk3BTdpaq2vu199XaThhhnDKxMbXkd5SUPTBHs3b22QEjDBjWukNZ8u7HAcKDQn4",
  "key5": "nrvLMBXM64XKBMKmaWRKFsxJ7rJkkJCoLgdMXTx79arGBpWR3jjU3YUix21x3EnYQ6Sf1HBtXUxSPMf1H9JH7fA",
  "key6": "4N56umhFBqTdbwaZAY2Znmg5yZ39z7WokcM7RzzRgBvGmn4RggxXUMqPRsKPHz81wKuKfQ71QugbKjpu3kvh74MV",
  "key7": "3kdvdNRgpVivwqXvU7YTEREwP86iaC7LGLBqcoVVUVRqwVsDZRZhmdHHqNrNYK1xzh2P5g1WHEPoeC2zJuee5GHU",
  "key8": "3Sp7UHGvM596etc55rZwYwYZTivZzTJ9cau5DhVTZkf2qjsTg9CaxZTxamd91Mf6R7bV23QVkuyWYZ54zqou7KZs",
  "key9": "2zcP2sweqbNheMU6NCr9yxmsgixQcxVRNaVE3W1WdtymmgStPSsgkTu7kRwWR5Rwgqg4kEb5iVGEPeSh6wiDbWXY",
  "key10": "2Tbd21wBZwZfDKAR4n1S2QPGy6urcFmzcdkykqQEcj39pDvuVSdcbuzP3GkXtbSxGZYu5rfdEvNGbzpNz1K4yXsT",
  "key11": "3tvjd2EVwpb7MhRxKWBMXRLcJ7hS4evWUyHm9ZmRWTig7UM75UnWmSkwyoVTpZUP1Pcyt2mp8mRYW7eTGVyhGrM4",
  "key12": "2WxepJfbTHzbeBKMDCxLqTUfMQBJsADPLE1123rU79bRyMXPLEs3bYbynp8crqvZHj4wo26bFRjVJk7DEmqAZnYB",
  "key13": "37jDp45RWiocSAQmjrPPzUb2yVGtUMXVgC1N3AYtDJwvZE3sZXtQ63NwPXghBKHs5hRWB6NvpAnsA9ouWnxR6596",
  "key14": "2mTHSgLnKpxVojDiq7X96t4y3FAB5pYeAB3MBHtvXcBWzua4qPgvDzQHJdzyFVtDLr6qvktyw4UawzBodXznTBGK",
  "key15": "46Ju5BJkee2WyGwLkDUJU2BEaCj5bGG9zRqvZ5aU2AwbdQqPmPmtDj4fbGjqSXFFWDyzbHjGKdCt5ehUBNNN4SMa",
  "key16": "67hMt3RAXAvQaG52sBoKxFsZmFZw74wNQeZR5UZQwapbWux3N1R4FMd8bEXiuLFGivQazuFmnFTx81QfNsiA5qb",
  "key17": "4jvXDNbuBAgoxqA2gaxtSsALg51KSMjqieYmcNqPY18Ta75VLNV8UFPQBgvWZuYD6bEoRoSnVfS4kaDspAAtvadu",
  "key18": "4ViNw8DFL1xHaHo4aiXuu9TfBxCMoLjtX6QjUEZaFPfG5u3aKAUh1BgkJsEDVq2QtGp1fW1K8moanbNrzws8i5Ss",
  "key19": "dZfzQ3fTzqgNkjK2p2ZxeGY9LJdJTBpzTj37SMGWQNRzBTGEDgiM183qoXvMDYchdfAPCXwyBa2q37sViPn2aAL",
  "key20": "w5x4YzU9DuzUoQUL9dFa5peuxjYDe6FkJr18qhBkzBjKUP5M3L5YRCtZz321dkmNA1phACbGS82TJxHzK67R26V",
  "key21": "3LbaHRFoCH5DRKiqsCMrnsh9XvkPMQDvB63WBfHWe6796U8MAkg2wLPMfNdpUcvgwiCxRvA2nmMzTgsFamPLB6gM",
  "key22": "3WYsnr1bc2aa58zgc43a72hCzb3FnX9WuZwynPjH92bAkw9DijVvcaYmVAAQVQcFmhQyjTDHwbVx18AVuF5XjCY3",
  "key23": "583g1zigmLC77AFjjBQHYRhoHfMt8NNfhP2M9x4N1q85ruFc7wuwi8UsSXvo5TxjsfiX98USU1scW6JHVWRQPw4y",
  "key24": "2pvrhoy3Y8VrZdpGbwRRWDJSdvMze5F8Hp9ZAtgTUh21y21AVCshWps6V4mWCurVkq5CCbtADBbWb9WSQLyG7JtL",
  "key25": "5CubZGnTSNSEkBAkpsUF3RGJWrN9X48xXNEVbSKvHimzCGxit3iNXyB7qG5JTBJ7crDYwomEYSUdg79W5jYAv3ZB",
  "key26": "4WCWk5csrwhxEAt7je4o3vUJxHkbcwzVVoyXke99U8yond5EAUejtb8RLpA4XwTZUKZSJP9c56M3bSBzJPMGWdv2",
  "key27": "3ygK8LxRSaxdmoU8pWkTV4C8f4rGcJveUvFiURfnAgGiYbghQfNDXewTEf69nvMB6QEZApJg2pzEgtm6T8gbWRTM",
  "key28": "Lpa7qvMGoqEVnyCJmp1SaiQBL6pccSKGJsNyZkuEAgcUjtzqxVhwBHNUEyPyMw8i2pmxCQAgdDFN8pd63To8RE5",
  "key29": "35omQrgXxdYE9Y8H6wLUBHLS7HL9cdT7tWH738xL1LysTUNnGhCGt3w5zuTaTJE9nLegH5uK3kBwB2GaS4FqQhWt",
  "key30": "3SRUiebLw7oD5PEvd1QCbsanVGTw4f1e7yHBptUqBoBq8jkVspdGZ8KGsGms517aj7QwqqDiX8iHvDfRaJWGF8LB",
  "key31": "4oRDHCpL2w8CPkbMZV2Cf1EoMpbthyi3ZUTNXzZvuBUwDcDF8kMxatqL2EH9a2GuYihWTHhxd8EZRJ53qb9hdFGX"
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
