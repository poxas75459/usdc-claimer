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
    "3vQSTpkQVFFuryMgimb2VwjKATScsHyqWJMnLUecj8Bj1uFyS2WM2LBp5edRVEwcUNfA8ac2vjBBUZ1o8sUtC2iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdQro55A1Ph67fzw7hsEETdFeKzAs4Hvtd2h53W1SK9fVEo2zg8xb7p84Jkw1qtowoFMroUpFYLH7LaRq34SaMy",
  "key1": "5NrCikPAmJu1hRNtAZyFHCbWuoBRWfShi5hW6TadjNhYiTQMRamozBVDzdEvdQ8AHbjQCTwHMbGSDhREc4T9wym9",
  "key2": "2Gs6iQK3mvaLvtxT1fAiG8pMfafJSZewyn1wV1erJnXK1CpfVsMJuZteHw3eZq4tDCtjSJ2YS6x5B91TFFK4fqRX",
  "key3": "63ALLEcsdeXuFttyGvowwnG1YxMDsyf79sy7ertNnsmkiWPetwGFCrsYpzCAY6N9pE9d3oui5iuVxTcYw3bcqPyh",
  "key4": "2dq1L7JXGScrBRuTQ9JLgD1u7oyJgEwFsjV12uPCJLYJpgciosezWRLn6hoUqkpWwHv1MtXQJmjD3FSkhZaApZkj",
  "key5": "5RvBpb28VvFrT42rusMTCvrYkP5RpckyYZEicdHEsZhZe6PwhaeHoqcQZ8wEYENxveQEDYaceGuXca8B9qVf576m",
  "key6": "4VtpG9VhdhvTRpEiUJjNWjpj7GHSrGUGfiUEdGjKf1SKhZ9s1c5u1gf6t8VZRoseayHAgCaqgaLEF4zhMbGRmyEY",
  "key7": "5mKE4WTFjRamjApNk3LTS9YqC2EoWeaua5LBiGwoXzmLmHPw6xeFtTnN8948rFZyTcwxx2VaE8J75KstR3SHHXgq",
  "key8": "4vP45j5pg4oS9dArGLmaXwGKoJCy1jkXpWumCbArN4pzKeDHCc5ivwU3KymF966bFkYthQK4WEhCvyYLf24QSnxc",
  "key9": "2zyQUEyg45EzbT9NbYtpiMjKR4WzK3R1UCnLXfFPZvUpaSEc41zePLXj2M52XsGtYpqyNC6wnxo8Z7PJDue7ZwDf",
  "key10": "5LawSGWsjXmxLqXKWDdLkZerD8XtvzDsfayrR2pdjGAqfCwxDfCo2vWK6EofiRNxUbx7bvv5JzXmxiwmfxoA77BA",
  "key11": "4StuQ34mFC8PFKRZChGFG6hJ13Qja8n7SvwEatzW5ZAaBJeApRoVziWjw9c68E4c3DoyQVyXaZH6z5yp2FsBqscT",
  "key12": "3wEzYy5ZR8WtDGH2ptBipWQyVGZqXz2KkJfBvwgufxGXskTFBwMVFxfmvP2s6PnHptYwufM7GCWwyZB7qfzTdfUG",
  "key13": "4GDobbaZ318e1G6aiPsKKhDPvpNhLQuKPZNSCdubDQ5PrK8Pke78C177u1wRAPqeUBuh9mUiCjxmLjgkenR1ksed",
  "key14": "5JYqxjKR5AsSiRDp5cs1rt9yGJSWgsSg2PRueJ7Lcdij2SPgmkoeUJG1fw8EnHoBs3NSYHYKKavnY2LCX2TrdTEW",
  "key15": "5ihUPyv2vmvwJQP75xkat6UsBb8iYjMduim35DBfPx1jvwC7rvyQTha2HngrHsLjAqLxxLxLAnKAQjBbXWCjdiSj",
  "key16": "4Yt3gQ6rK5sR3wU6iS1DJg5EyYzCkjxszMJ1WKgtcuR5MzrZ6N7BucEnxAQtrpnpRoLGU49oyfPLqyyjLkVEZXiF",
  "key17": "3AMhesQBfKnnFUdRLxpV98JrCzvFJ4Sbduc7Dr1kLJMR5ctc8Y5QvA1LzrfGi6NmrRVSfvNjsKnzrusS5Lg4kxgm",
  "key18": "2dtXAdJX2pkLGZZC2sJQG4AFJYZunSx2fY9AzpaVmrws8MAF7DerKdSgED9khtZYo2HyjGedcTNARNfzx8vfrDBH",
  "key19": "CyeMfLC7zHo6NsQgfG78DfaGGZFpqmVLjTuBu3Pt6GmJtXXG7xy4zeHyLb5fReYLswMFkSBKh5rMnw4ukxRD4bY",
  "key20": "3z98J7SpUJow3Eg2JGc2JcZ3JjLY4fbeob3gEvdUBSStSjZNCdVvurUnwcUtR2mw94MvCyNny9KZmQWYUacd8YJb",
  "key21": "21GDQT2wUZ2WitBPo9qSHW8R4YdCr1shypANVzGJY4JGdJduuhxV9SAoYt9ZGzzSbtBm5AiN3RnKyhU4YdxddT6v",
  "key22": "47vUFf22ZsDUZF5hrGH4KYLemEYkCAUMhM8xGiwM9vM222z3984y6t3Fvit178YkkcQ66gx7iybThBou1WtT1NgM",
  "key23": "3ktAoeC9KxrqPrngacHmmMuy52edcdkp2LVSMdZWMRycWhyVRrCD9Kcap5juitLKM9ZHExTsfciZaJwNFruaJTkU",
  "key24": "4ExnmcvRcPupa6CZULv1aCtai6zCnkwgu94JpbumqLHUkgdjxSrHE4KguvN3miGmBm6hnBJyqNsxtdYWHoigfEYf",
  "key25": "2gqqWji2aDz6JbBYuqYh9R2CHjBgSaAnRgU8VPNVdQTWrv2DtiAnRbPYYt5wf9JSQMbN4w68mggL3o6CGDRGpk5Q",
  "key26": "4ZdFvdNC7CSKyZRsskfPNnC38d9BoLbQP3276kqXmsTkYVLxneyatbEqNw8BnkrpbaNtHcko3KV23WsiSh97yBrg",
  "key27": "3QNTdwDk9xVtoZRYY6Bb6d8qnx2d7uNaUhdthaWEJHhZebLeg4ncwLdaTVsZHrNPUFMZ4o3PYV23tTz3JnHBE1zu",
  "key28": "3weiUDK7UVb6QtyFNvm4FKNv43XtJvj4tkDq5dcnFmE9eiqT65Ufzwa4vkXw4rea8Tj6kuu1FqTh6xp3pM54j4sJ",
  "key29": "4vrDGeFTBr9AwxUjbjQ6YzQ4cjF7Syk44CXCpWXiJj8bjpBsvkqtQTw3G4ExhJ5DniYryVjqWMVWmFD2cN3Rkhb7",
  "key30": "5R53NmYFN5gj1s5GahMws4yimo2GTbqapL8uYUVi1EwhZoacW2YE2cgAEUikyyigv8XV39As8dHGueJRw8QQWQ3X",
  "key31": "5AaqsCVdWMT47xUUN7jQ5zQFU328LixSrgTGsGz5Wu9NUi4FKR5Gj2FqNi8ugHUiKqQWXMCpDmY8FYgyUrLfe2Q2",
  "key32": "5qQMgjw46CLq12Lku4GZ3HPiF9qTMBLzebzX7HF9Gv3D9anBhWeGhvYhLvUFd1Wn5sPEbLaohos4c5eabMn2h9Pj",
  "key33": "FnKG8CiaA7HwCspViG4WHScoC3g3Cv6C2ZsQuhHFQPZtVtxbMF49kg2KvSnUQb7GTZEv2KzM1Cczr1NRPV4NnPy",
  "key34": "3m65h38favYkrBec9sD9ytzDrCcQE9mQcW3eKiZprZJU4Ms617BxzwxEPA1YqhM7UhEAfsD3UvFSHT4iYgrT7axR",
  "key35": "3STgy8JCAbMErBfjzD817Tc9ioMjdQ2bWba2LxKLTuhMeXrLsoTY2zihvDNKBEiEDcj6whZVhb9mNZYyofnftjov",
  "key36": "3WNEfJLqtnd7CDLMu7FPcfTWpZ6ngj4aSbVRn1Hv9kSiWyhFyNBWuhoBuLefdnwnDrw6EEFfugpf6uSgvpa3DfAg",
  "key37": "sUdC1bjXKRuMt7FNZA8NJvYTDmGazWUFQBGz3KoNuRVYHf1E5GjAf6GVx2yis5SwZXHmNDDzLGZWvR3tFVq5MwM",
  "key38": "3aLbN5zXNnFC2cnzn9A4QgJwQPfcW8MtTV8TosNy4EUhMMSNwVBSyyxsxJM8BABZecvJL21HUEmWkjEA2i9wsUMg"
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
