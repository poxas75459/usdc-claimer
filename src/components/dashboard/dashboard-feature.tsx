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
    "2JB9yDgRoc2szqyi4ZwgtZCbhZqXdoH7oPbYWkcVsff5EPrMRZdApMFurzMeRNQNoMeCHG5YzAU42TkJwjU5sLSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iFrvvBNbKeiy2BXPtQWhoQPmvZhaJX2CiM4gwCxLohjsitvbcVZ4kcEVv5xeTmgp1SNTKwSYUguV8ZGonXfER6S",
  "key1": "5KVSE92pjtzcsr44opWNoWaTbpXaW9d2Q9L7qp7sSfZdq4AaUcJkJC3Up6iUtZe9BquJzhcAb77YkAFBkEP8XfMr",
  "key2": "2b1FHSKfq23KsDZNbunrrT2UaH6KdX5dRZvkhbBMGGqGQWPJrootzNH3GivQQrzjNHffiwGquVYYD6cXTb3PGDLb",
  "key3": "5sVGALhRfGAJ3nR8KxNwjtPVcgdcejGiUBiPZK4oCuQzCyfYHsGL2cAuoymmbpfaXv1mhmJSTQ7UrDhARQs3FtPL",
  "key4": "4gGXdXx1zDJgcpRQwpsfpnSNmz2C6kNLHBGWmpof7cEBAfFG14Z4oaYfg4HYo3DerPwZTHhCAPUL2DxC3fWgPSGK",
  "key5": "4f97peVTxQmwUPUHtCNkfc9bjWSkY1AGfy3ijKDWPLKv19Z5k6CC4aJuqaU7k3oeMJPNUeqTZZjVCQFz1d5kqARA",
  "key6": "3HPznsaN1fS8ADeQFVUugGnhz9YTpupq9nwtWUaNzNekLHDMaEqW5kuQNF3vp8YYzRGKfAsjDN6DJPavGZchRJY9",
  "key7": "2qtuLBT3hnCsyKtg5KcHXFZJgJnz1C19e9hSnbtQwwsmQZKLRwx2tJem75We5c2bFmnpuvpG1ZXYSXX5y449HhZG",
  "key8": "66uZZBHnLcZoVdKdFuCWh1ENLPPWBBF75AwJkWiGsYqMBLQy9etKg3gFbGmWUAqfgVBLqahhyveSJomyZLWWasck",
  "key9": "4iuL2JarbbemggykL3We7zzeyvErBcJ67AQ9DQoMD1Rbbqv5bbtX6ofd3mp1F6nN8oWeq9Umhsvvc1FdXeqM8MU4",
  "key10": "4pXuh9KU8NcPJGgxgUywFSQHSBDjxDQhCuAjr2tgQhT5Hmou2vTdY5YVffea6GbJsoWGydf66bfbgcJmKcDTYgkt",
  "key11": "3x71qP1ofeX5c91Fp1ZzqnJQ2FNRVK4m4PhSqpfANxxY48CPr8JsHA6WrTQFy43iL6cj5rqdLYYiRjY2BU5suufb",
  "key12": "4cUMqFErv5s5t7vF75Q2kZ7DF8of6wv5RHFULff5q3wUmytezbpAwYYJKG9VgRiycC2g1afztUvT7fAPUknkMqfr",
  "key13": "5HQd6WjrbHsowVi4XJSeukk7w3uY6XicjBbvtwyhgtgU4rq55NuwiKbSDNn2nUpGreZ6aX8FJGRk4FdKoPcrNQTb",
  "key14": "39M7j9f71YSbV5S9zx26tkNdeT91b5kAEBTR3y1WEuos9baaPpMsEsnPSsu44x5USb8QT6NahqPcL5F3gs4ipRo3",
  "key15": "nE1o1e3Q67fzf94ike8ZtPvNF5axjWPo24dE9KDeQzdKnfen3Z9ACu6kCArMuJuwT4zKeaovudD5PGTpAbyqQa9",
  "key16": "4m33JTHAV8Ar49Wt3Ee5o6x1LJKwa6x89vzp79P5ppauzELnMEStWD76UucNa3yAdJpJrazkef4WcErxeihKEu3x",
  "key17": "4imxoXgwbmKbmaqpbANSAg3uhAq5vhqWcCUG9tfgy8sg4MAViXpBAB9jjWJX7BeeS5bJbhj23JuEbzxW3pau5BaU",
  "key18": "3Rp33ASukLowjbaDXWJxqFiXQkYQm3bb3B1s2vG2Hkt8FpSbX5fHgXs8mFzyR4yf8tKS2rVQQUhUXUHW3g6paH7M",
  "key19": "UwNXn76aJXi16xDASnG24kRPtoPs8fNskTWthCRaXQsamtGg5i9k2QZqqLteU5CQRhbnJT46waTBw1CC2zTNmir",
  "key20": "4pbW6hYFmBxcsBvjRmnCxppKLGpv94P3dXy6DGZgkTAKhgj74CqRTkdAegCextWgS9MyBzheWD4A81urE9pxWFSw",
  "key21": "pr7G4HW7m5NUSGPnzf1TK4gJRTTb7LBXUVmD2xXvyaaKt4XzcCGAuCEdx9HCCfYpiuN6b7NC5HDr6FD6nG35SWp",
  "key22": "gNcChxqaPKohS989uNac2EvQbq7jDB8SFZ5M81nhw9H9sNxZMVdLrbDHAoAVDoRGJxCGTaJDSW6eR7VsgbgMoD6",
  "key23": "3GKX2vTRkyPneQgoMDpfV8mz2E3gsH3XQkMJZ5mmEJdVEWe6sHVBA7Lo8FfBHRokUESTGEEvtQSkpmAxBdyW84ya",
  "key24": "3Zw4uArc67x6qpH6HDK2cZSn6afRBRYhFBJzawA9sx9XLF59o5nuFmaws16TaHnFdUrnpT5cpwxv9qQTLW1Pnwvi",
  "key25": "upDmJYbUATi9KGri3TutN7H7KMZZ6cEeYpYfwHGV1QFZgzr1CX3xCBUNCrjN3hse7NAGnyvahpmCS6zfYu1NHFn",
  "key26": "2izk46o6padvyPdX5ZvfMC7131sy4fbbaJYpXt8B81uQmGY4ED1YnuGQWFDQZihPua14P4yUJpeipfVMKi3RWBv8",
  "key27": "5P62TMhE2eEQUxKyTCrq4M45TXfyqYg2V3kv9HraDzZ8UyfnQQssa1JLyoEB4RePFkaLtMaAkAxxYnPa92JwhoBA",
  "key28": "5aNQ5QzpgZrpj7o12z7rD9tvj8X1sso99EBeyoLQbZ4sji5EAYGf1pD9ipGYgR5eRhgqR5qzZWztw4HvsKyYxaaL",
  "key29": "32ZhkngiM4BXEAQmiAqUpVBHqwk8LjM9nxngLyDDFLfkvgdcHciiD4XPSBziE5264Q1o4bv9TBdCS7q7iJa8RbcE"
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
