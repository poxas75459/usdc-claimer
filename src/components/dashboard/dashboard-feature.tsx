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
    "319MZBqnJ5SMuZG6uFCAaqwwt5mjyuxz4nKSpBxkQnS1Rm56BJPM2jpmVDj53PSfaKD3tbYfEhuHzb8TvyNPGN85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsJUGfdZXuQGCWfduRZaYukdLpo4jywBSxPks8ssuiuPKdNYtvPc5eX5FNdnJj4PBywkYkbRk5R1TTPWPocmQFv",
  "key1": "2bXzum5KVgRu4xNY5DQzSrZPeje5VJRLkyLUQJ8NbRKA9EBdbBhjTxybowMQ3BN6Sy541cSGHVsKNQSKg9eF7UHF",
  "key2": "Nu2ksHmaUgV3MyrCG3B139y8BVSjRfsHArHknGd5nx5Sq7GR24y9eXRivCHA1eX9EVg6aZS7zSguZd29DJeeY4o",
  "key3": "3ueJpSPUxegg9q8EtMFURbVSfMcU9izigp2MVPPTiVnPaGfx1yJKzjxHB6uN62a6jdAFteL2r2J9E4YbWeKxuCkd",
  "key4": "2YCpr6q5aHmJ1PmDa8YGK8t4oRsvsbDE1TPtKTXmTREu1WfsiffJxcLuBAhk7ggyY23Vbcxnsji7sG2oeksDnfPL",
  "key5": "3Dv9GgPhkxR8o9FPvdcECGDpec4qjFXdd7XJpXT3rvmzjB9oc3TfaAeJSSSrDqWDgFk7ZqLDcznc6t5oxCGbwDkJ",
  "key6": "ZAuAExKdh8yM8h84auLvinRHsMUHcGKsaSnNm7CEwKsPCEaz6nXQvkrvpN16PTUe16CiBBUFM4U95i4NS3fdbHe",
  "key7": "cUNyGmNfJbupXdhCfgadnijkgTZZiBH5otjyv3X3tUDngYjEVA5TGEdt55WXJJZAPphQYb1Dx7HC979WLp6HXvv",
  "key8": "2kT9kcr2k2oiRk2t9NQ3BxAVJnfzo737q5Yf4pUBdkdAsQJ8VuZ9xodYcq8n3JS3ZFK5UWqVuBUNHoB37LBFU3Tp",
  "key9": "3RpB5n5eYote5qxnGf2cR649PYe899efNNKgs6AJ2qxQsDikdPgP4JxdWDLiZsWPCkejg2fqxYfKNZjMrVPcvbWs",
  "key10": "4U3hb1zgtLcSnjVYFCKVv5WXQuv82YRsZP7YcnCeZUZSrdhjd8LJNHWknwSsrtuFVZxgXUREmJGoDNssHmQAbuq7",
  "key11": "61mKhiwoy8k2ub3nxU3k8hHg9qUpUN1tN6F86V8CSS2HVdAAVbzshJYKruGmuL2bi9qVnFAnjoEtCvW9zG8Y6MxL",
  "key12": "4GDawCefjdMBt2E8h8kJXkaL8iUh2uWYAXyKuhdnWfEdQe2QP2ohEuqPXgz7VtdyF7MH2m8RWfvN8R4suLw4Serz",
  "key13": "2StPtr6SNPTAVmvfUuZ21Eb9PfjnckjoAgkFYbm79FcaDTYP6yPTGsa6NPvj4Yj7n3VaRbQ9ZCX7fKgYt96BMnyd",
  "key14": "5wWPna4N8ZH8cb5fyNdsMsGrwi2YfkvYatQu1bbw1dNxJoWKKzenAUcCk4TqRA1WMi771Jrmut2gEobJhY2ATxzP",
  "key15": "54traDtS678q7Kf84U5h8rJViWAeQVENdHU4TnyrC2EKdPrBZdg9sH7X37rbgQjXYRa7DfQynJXYdUFim5X9dra3",
  "key16": "2T9ND5LyZ36SiNSnRLt9pVsUtrQje7v7teXVAPB1v2AAjjBmxP4HCYgHJWtgnb5YREKXfarNNX93NfQkZHLfZQBE",
  "key17": "5C584DAuy8iCy1tu7jbjrWhgDmBijPWRSWp7a1GamQtnqRUwLm8vgBF2QxJBhh2ykHKdmMUpFLqLXY99DbMmUTga",
  "key18": "r91T7RzVEJ6rF7NF6qm8XrFWwAu6DhitHfqvVyJ4KznqNAqK1CeLZfFJVNH2saZGXjRRzc3UqMhhJJnxvXQJuMj",
  "key19": "z36KLYXTU8oX2XPxJmtGuw3bt9p7nrLVEsbgzASNwSePeYyzbGiVVpgWPDsRaNEATmwEkhYoMTxyf47eMZfnTF1",
  "key20": "5M2NVRANFZrEq9dFf2LtZLDvTTngzLhoCAPPcEgkSBSX1uLgJgLDhcQsuvrJoKPiJS1PcJVrnefNNTXpeUpaTeQm",
  "key21": "2LBsaynTSx4LF6dSVs2uDABWCbrhttjWFDY8M3qMYFHSAiYCAULFZv68vYiZJZmabAXSwh5vzfULotHSx3hASJD",
  "key22": "2fzk7sYDgD3zKtx3iKQYd4DYCwSkuAARfGqxK3D5Qw1aYx75vAJNewT5WELgHXYKeuWWG1W5mHGwVavyhdKAuVFr",
  "key23": "5v9HGTuZaxDPKdJiNgWp2NmG27t6N94PZbmRKoHWtzwys8TWwFL1vYby9ssgzW9Ar1gPkikjwBxeakEffY1PgqjY",
  "key24": "2tP4yB8fEH7jGwPr6ukHT4h2djaQMWbuvSUzcMxaoreiwJgcpsYxc8n68sdcGHm8X1TwX7GPbLYXYVjYP3acVg4P",
  "key25": "4Ukgk7S4RXwyXSncLBvZ13f3XuBTYPRR6UpjwqKbqppxbMX9sWm8Bpssws2jQYdAkyJcaMUtjvjQho69XomJ3Qvm",
  "key26": "pxRv9qTGVh5SmHHhr7KvBDJJBBv4AV9j34yEUjTLHKQqnb8LLF1625xbpBa5vjq9FyGr5CTifcWDJCcYVdtNiH2",
  "key27": "3A21Zy7oGBjB6nJJe8Rp6xocfTCJNyG42uY7KMCJmkpoB2BpLvJKYNG4iRNJJNXV8vYWWSFDaUWHgAjXvX9VSZWz",
  "key28": "4fWUR8kdyTys4zxauwdossEGRuoAhC6zKqsvUZjShdYSrv9NGgXHjBCq9nEUi7V8rwmKbPAVFLr1CarNaE8rNhAS",
  "key29": "4dHdm8EBHSY5UnT8XU31srDVYLEZvX1wD7sjdBzXBkMMnYqgBgQdyrrAihdFuvJjNVggZZE8gKV1JxA2qfM1MzFc",
  "key30": "4ct1cTWLBbT1XPYEc46QqVQnKo8HitNbeLeKatjq4KUGEk8AbwjWYwPuggbh2pnvBNx1i7mLrwmveeieyoYU937Z",
  "key31": "3Sqe6eJAhdZwZYdcTQeSksm7HDb7ypP7hoDhn6GM62bx5TBfgdnnWiRWei7uj3oncCgqU4E8X42YX99wEEvCikbL",
  "key32": "2WJvquW5EtUyyXVNhAu97KRT1xo6a7g18R7htTyXx4wETNSzpfPVvfYq4Ke4CurqGYqG6bccEBkTNiphdgzBiQxY",
  "key33": "5rfqMngAGotjE6skmVE53kwEk5s4CozT5ULmivLx9bzacy3UM58zeCc4nnY2k8J9bwhfeo7MT6djSyrk149zLYoY",
  "key34": "U5YEHbRSwbiQJAqGmrkv9QQCsavLRuRJ9V8wfeTRjKBtGjTVU3Uk7Zd7ABkkkcpvpyRgMpvDWi7VDmVxzehxi45",
  "key35": "2Y6bRS85wDqMaD9AWSXCqc2WSZw4GvjN9BxVVErJE7qtsUBQJ5fUUX6nfukiyeoUgC2cAsmkMZVm8rb7X8iBf82F"
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
