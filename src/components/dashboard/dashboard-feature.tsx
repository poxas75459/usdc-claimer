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
    "2ZwwQ8uuihrSz27ajgJj9cF25otvM1hfhYcBLNt7heZap6z9nWYdDjvqv5gY4eN9fBvvYC1eTEpL7Lq1c3J1M3dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kknoj9Kmfhtihk1w71Q88uVaK2NddVzhcqEuHLikj3kNbZgbu3T4QLjgktUUA3BWAhKscWCWKbpv9KEAJqVaKKD",
  "key1": "35yNa4AqwuuPcHngr7yep3GrvS6Rxk24zmtpiWKR8aJE7Nsoeby62ATbwFEpJawJ2sXvJ1Z62jnsKxpSiRms7ojH",
  "key2": "3LjG4qJ2onCcvwgeTDCX9yz9Pa8qkJbdGFcp55zQC43Rvf5UmE5bp1yq95ryTtBvRBeTshPutwQTtfwEUT54JACn",
  "key3": "P2qn1hSDvu9x2XLcEBwF6BDhyZhH1MuSmBMnahQdcFEim6S48hSFy3HDGcMg4NWwGNQzBGwUfewmxnHAFivyUPC",
  "key4": "mtB51hoSxgEEEnsMSBw5AUrYF1mdM4WJBUjnra4UqCoQHVmLQnpRPXEneBZ6Zz7Gkrwa8REadmT6BxZt7opYNRo",
  "key5": "66vBdqxBWdosCTMGmcKUhJ15qWxtrPMGYoi5fypumxFwWUvHKoeyeT7jGCWxQifUSeorxnQ3qSzmNdCk8kP9KEKd",
  "key6": "2S1T5zBra3eb8HnV4hyx8MqQa875xjJ8RsMaz31zBKJTxzHWskCqf123P1rAFk4vW34JCaG9HgtgDv2BwW1g9qHd",
  "key7": "3RW5moBMHmWANtV79SMWHGPnDkXkJGYGZNo2ofhVukoCbzQLuAuF5kdubtKZqTfYMTa9bgy8Z73X56Ho3Wh98aFt",
  "key8": "4CxUF9WSm9PyvUz17UzWv2pKq54d9UZpXGE3Qm2UAuW2KG9WUuXRNXWzedc8EmxTVLKyXJYrZpYEDcUv5dVJfTQi",
  "key9": "5VjdN6qjPdjXANnShHLya6SEnjJqi3xDnbbFRZAx22B26MC8QR8TxrSn27gRpJ4aSdMPAHDQXJA9BvZ63o86bMeQ",
  "key10": "5FDH5Xz5UAytkRYCxfzTRooDabDPKthWAYwRiiARy7yXbNMcvBaNe3Nfppkiy6D7j78jznbskhKiLDEA15XzvtYd",
  "key11": "DwsPmVSZvZXLoCqW7Pqa8p6TtqgNM5iiSskfLSqPgJeuHL4TFX9sziAKkd8S6dckwRQB37khbFNxiog8a7jGUNJ",
  "key12": "2RJTgvgPRxSy4zfJBwwoXe41W3VdsPFwPNQYi4WZsWq3FWUwU3ED2Gm1RJnnAdKqe342WdtEnWVzCVpS3MbrBuXV",
  "key13": "UgSWbJmo6kHj19csoQPc9K6cn9J7z4s6e1dGafEoLmim6o3ThniNpcLWG7wxjocHg62HocWoWMNCoc49gcbPXYg",
  "key14": "2t67cqjaqwJNg7fMf8ia82Xp62pQE8wgBnxjw32biMVifoYNWf15CZWw2vbgG2xQsWqp6nP3VfWXQ9ir5a4DJqSn",
  "key15": "3QgEBhPBAZ8t8vvUG2FLPJS185xuj3DNkW45YcTycXdxZEoFmEi8SwvQmGNuhMtcBLryTSKUBuqYg1au31PUYqHj",
  "key16": "4KqGwNq7bnkq6XACBMjSTdYjyd5LAETKJLPZqrnAieLWvZe8fAJXzmnvp6PAiYNdZniGfZ2SSeNr4FuRBC6s79gd",
  "key17": "27V2Ro8a4xgSB8ZxG9pcTioAfCYS2NXZKG7HPCCmAue5Cp76wJcmh5R2wmR6wmcLkdWsvcuH6SRytcwJUdJsU7Mn",
  "key18": "5KWsD6QsKwVoBJ6635pwcedif2RC4vQ2zJ77vka2yUTUQUUvjZGq6BXY1MduiX8ujYtXRfmsh53cf2JcjuPVXLqM",
  "key19": "3qDcwcKHVHY19QXTt4Ltv9jLpFLX4zqbigbzEz4ZmmK7UbDuRxdKnZyudW6hQ2sP5b5Vni3sTSTzLDum5RFk65pk",
  "key20": "5HGK1eoNkeWRbXNmYBxYSJsZNVYbbYVSadhxzLYBsed5tNEMvMpg3Yjv2rzDnCgp2K5XbNojFrVJMHzSQ9HCt99f",
  "key21": "43QqJwSrMSB59fPKqrS1eP3EekGcJHLqKgpKMj1cGRrxEPvHw16qStejkEVaZFcXyUqpAvdtUG1Ua63hCy7GXW7k",
  "key22": "55gpzovhcZ5UPbVLWNyoZ7oVhn2nJikxedqXUv9PLZCqND1XZE1WqmGQACXM3V1zYGjANXtuukiGLZkCELnjfPcb",
  "key23": "B9MRB4zyDQQpCZr17zS7Z9GDXLWLzGxXMiDRnooeSxWGzEVCT5RENcfRepqnZpY765mdnWHoMfSvkpMYVrva8kc",
  "key24": "3y6rHnt6cmedCHz7tTV1uoMg43VQkMGPmBfdt2afHQaUrMiaoG4HtuPTeSTQHksqwnjWnqwAvBeMEzZq8GGMUXJk",
  "key25": "3mGfahK992KXn3jpAuChVcXtKyCfLSUCg9P5nZVLijFuxq2Aj4oak5EvVRcTuTNUydv6qVCRUq11cBZnrhpJU4rw",
  "key26": "4UKeykKUZ8dxKAaDzQHGD3g3MrRQPBwtiPv6vpb792St6JjF2NSmPhJBBdzF7uXYtwcwQU2Vnpb8qR8KkjjcqTSu",
  "key27": "3akPDZ9KYmBv5GdAr32dTSNs2f9eC49jVSQCNnpoWaSk9xfWZZeAt94kbfKH3KBXoj8DCjKMkRrf6SRqxQAyotiG",
  "key28": "hWQujiewcr3VBWcgxacqptVp7MFxN1baLsZoAgs8ajLnVCJS4tipv8AeavRTWszVtANXeci6254RkV7UdEMdnNw",
  "key29": "Jsj3pWNZF1U7bzMA43SrjLLCWSy7sRs25FjJ3CH6ke18FGi7BsH6LEWXT3KcU2kej5hhZqZEdjGseppv2EdisLX",
  "key30": "5pXpuvt2cyZM9xgWtARyMkMrMFqnhkFnYuGsjh53rvFVfRiuWK2RNAX72ZKpZwmdUTwNJgwUhU1irdkaCutYZYUj",
  "key31": "3FRxeeMzCq7SXoNP5TyhwaYoFvmd39izpFNi23T6Xs2mZ3ELU2vsvpNqd8Xkok1oo9tbxij7tKrL3xtw86JxQdYQ",
  "key32": "5fFsHqp7LKGqwxzbUtAMRes1KPpJAh8rSiYuq4CXPrwgw6WHxLh1ihukzULiSAhsi8YFKHT5SYvyJ65dmD9P4hby",
  "key33": "42HVPdPt4UEC3i14cgarBoMw7j6RqLGDN7r98gXNxJjgaVTs3mzmKprpystCD5qd6meModN13DRpyNNXPJz66aUw",
  "key34": "5VVvr6hAJ6DDnokSoJNLjAACcoCLvqm7JEgEPy7SEpTqun9DH6DVE2pN7mZ2ZgfJguGBj6nV3efekEG4GfxTvfCg",
  "key35": "gzYXE2uggaqijf3XQobSsa6KhnQVWthzw3sRkwGNmXvzCYfWGqN9gsmNwewNGLTgoSxRxGp9CefF12qbScQqvDy",
  "key36": "3nG5G9v7Xmg5fgYepACQmLjwo78a8Ed4CGNzJstSDqrUTKo3beadt4C8QhAYErgqabvZ4A6oSZkubg2kutAZ8Hif",
  "key37": "39EPf5z84yZLRdtTGexpkst2DneaQJncGqcG9bjRJtPgruhDiKzua6hFDjwgguDYyuARF63XUUxjvPvnBs8o1zKn"
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
