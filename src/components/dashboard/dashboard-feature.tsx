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
    "5967DaYeDui71TWUc6aJqNeKFeMJYKmpws4GjUSLMKwfy8nRQVhkw7DjKYDJnQi7jQQJmGtR5Qnk5w2axjdg2ukM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3buPnfdHhGpxfdpAjGBg9C2AimBCWg8RrN44pspYsdcVPYPuRecWhyGfNzV3tbF7498bRxdNkLS2o5tCchBnLrkU",
  "key1": "2TjuAerPtSoPx83U4YCjmeG39rJmyYT721v7RcezCBHvqEChKwov9irA91nM3iZzXwEUocK5oULFor4Vw5f9k28f",
  "key2": "2D9o7NjPkBCyik1M76vgPKExTj25mnEQgsSvQTTMaJJ6YfMa9fL9TfbpRPy17cZeK5rZmFYrMtvPCp798fSRru5c",
  "key3": "3HadXQ2wZwuuHXRrFSF3tK7DnMGCeUbMPqZyt56g1kA4MNmw5SU3VFxykJw5Gkrdp4Ru69m1TnSt7ddQBhir4Dsu",
  "key4": "2J1VC6c7k9w7UhDVj4Yn3ccQCM9QtNQxUw2kHDzp2WQMy2xdt1sw9yM9YcSq2N2zs7TBqTMLry6KY9q1fTgfws5E",
  "key5": "5ah6aPxA1Dpnj5c81AKbN9gZWT9errzsswN9t716Kgj5ufMe4i1epZFQjB1XvR6EnFGyDbV81a5boPtUFsC7qJqM",
  "key6": "5Pte7szMa8eBpE55mfqWdebS5rB8QLrEGYXteszpNAT7FXfo8mBuJsn91cYYzWHLvNc6xt7RdRMqRdqEf8TBkaEh",
  "key7": "5Yrf8UTQfcUVgeFGRrFn96TacUUsuVJCPWynEaf94nYbA7DP47VoSbEUfsEr5DH821Zyt58dvNEBJJqbGUZMMTMn",
  "key8": "3HCbxcZuumVADNfkAU4wGm8evhM5Esd9vkpCKug3gVLHTdHA4TmYeF5PyNJDjnjmEcJStxp1rLvyuHSazt5kaMsH",
  "key9": "54zcxd4YSkbramjH9bqZoUUHXCQWWUua9d5aZjiowrzezF7AbgvWuQyAcrfJgHBr44KH3eWHcQJPPpMuChAkP2ZT",
  "key10": "5xu7wmZk7tUD8uf1gBrE6zZVgLZvVw31DnjmV2Tq2i5XqMicfi2Yyw1T8rQmqptJrCkizbhDqhN2U9wEknMYN2MR",
  "key11": "3kdNULDfcpnkrT8MFDWT1UevMcjn9fdRSfPAgsHvhMSCogQx6RRS7Qw6iXMjZ6J8HfW4iAKaEwAmCyRYSykR1bLd",
  "key12": "3BnwsSAmhKsncu87D9SPwetqScc5XajhEjGmu6o9WtMSAZNG3AvuVCoES5PqCbNEE6kL8wHNw56Nt5JhU2HEfVzF",
  "key13": "3ELud3E3PvcWrbnBTKrsCb1e4gZrrqNfegJWZsmo5KBCmfn49oneFpFGe7nDBbbmkK7cfGLJn3LoPbksE43Zdu7u",
  "key14": "55LTzyQByYi6NdXXJ2GfrrMHVPc4fmBWwM9r8gSLTwfQU49jwKdAx1VUeENTAzDa5XCyimzzxsYFe8R3aaj8Hv63",
  "key15": "xwFYFuFMu1g9xyt4e248jCoqawTaLen34iDxFqdZsZXfRo8NRzLaf38Qggv31h3jYfHJmNhM4SLYqyAJyS8e16V",
  "key16": "5GFWWUacVgRTnituoG9xA1gtPeALmGi7DmYoyX1kp8L7z4vJT12fUNAXmrwqQdv6CTyUc3vTqDcyKJCQQiJRFXwA",
  "key17": "xoMK5Hf7MyRFu1bXEo8jKX5JDsVx2gMhxPRu2fA2obzcPuseuwGDkXVSegoAf4XvwDJysMGSVj34x9Enzxy4jgP",
  "key18": "4B6EiTNkukicaSdXtrKQVs1VTygSnaNn42zMoWnzPcTSLhQv4edrZN5uWDmofHhG8CeXgt2gkwZa2aZqmXSTUnsY",
  "key19": "2k2Lj47v6USstbr6Kff4ertG2ynJYw2nC1g1YKne7J8frWogwtm7iK4JiV5mmLpTgt4FmMhDFPgWxZknwMfT3vix",
  "key20": "2q9e1JtGcK7F6Qn1w6Aa2Ssh7FqTRskTNxMZ4qwueHCvbh1sSvfpAentxPHA1vBQcBk3ChRsCb73msyGN1hngGDg",
  "key21": "62RLhywz2vcDHY3ckP2RjaC3eXof7fWLMqoLp5Z8CGNxVCMuRvaZrB1zm7kfyuRi53em9gVJBy42H5jZXJj2vhuD",
  "key22": "Zmz9GZmmREGnM9TVvZXphLukTkAB9X71PDHJ4vZbiYREqUExtnHu2KhpgPueJjD5HbPuZzF7MQHhY6HECX18pPJ",
  "key23": "2VjeSBj31h6U3Ch1ZeAGnw1bGjspZh8yhrzne1wCjfuMadq4ySZBWfY3Yp8YqxLx9aFnYUQmbuSprBJajsDMdstS",
  "key24": "mCb9pcawtgpU3pEx7EAp5jYLsUb57P6pLHFk9W4KEFLuAqsf7wP671aq36SQgBfcq6iMRFxW7drvFHPqhPFEKKE",
  "key25": "54ataB7QX1BajWQSAWUuwfbCryq9H487eCB7ughWT7iu9VcQHmmGjUAQj9Q8YvN9i2H6fQJ1xmQuC4rEE5ug6oBW",
  "key26": "2EbPkePVsfMKd56kD1XKQBesKn7k1ZvR4xhAjXrst4Ni1PqyNZxXhnzBKryHxq6xECURpMxDB5khBuZShcJw7PsG",
  "key27": "5Fx9QUASzznVPzrjSFyRVBGj9J8cfXCrT9zLfZkE4JSpeTm1qquEjR6jGYSkRpGJEQAEfeSvMgY3LUE5evqiCmU2",
  "key28": "4B7iMxfj5eB6VnFsYSogQaYn2psH6G8SpDYPQQwkcieo5CWt4FK6RFWg5SqcJ9588CfC7Ea2woAXQqmVbfZRgf7s",
  "key29": "3T6c6Uc9xNpPJvsUkujJmU2HrbtmJZdsaHozVuctFNTiui5bwgEPsdb1K5NBe9sWUEPZWwRNMyv6MxMVuWMK8vgP",
  "key30": "5a2wqXzagksc3BCk2dhqtkbqRowQAd3PDk1PwRSR5XhMwi3w2GhvLTygxksMHmpUWJ5yKgqqY863AtT7jbmTMFV6",
  "key31": "4vaCReoDvWQn4ip6fVuWPPLXaWYfVR67XXKAEQ5CLyKWFD4YTWc4XFu9DPuGVSiq4sVmtEwHBjbnZGnd3TUpMumG",
  "key32": "27JJnDHYsrAKCDQHJE9iZJKaa7JWTvZpcVsgiRyRsafW8x4YKxDhjpBSeMEBMFkPR3pPVSMN8qL56EBNySgDGG3m",
  "key33": "4YJrtJaCyhZZxqpLJo8MAVoV6u7V72dwVxhcevFrM8SNv7e3s3Fwt6DRrvv1RzCuj4LZQHukx8oYxhpFv8c7ac8r",
  "key34": "3NJyPW7qz3DcFNK4Fd9iAWfqAKfzTXfxbQyhoCWWfEUTNDWNh8bNWEf4thW2DWFise5jHht3bPjVm92desDnB7f7",
  "key35": "4cUMePcKG79BA2nJKr51Lyp8f6QztAgXRS1sv2RBcq93Wvr8tM4YeiDawRhMZBenEzWNrvVQZLTdcCcVBpGz14ss",
  "key36": "xtVsNJnjtEH3f5KEwBdtkPxs85PVUrxDP4F9bH2h5dJELu8vazbmnmz8Q7JkMkWpZuoH4Hu63NCeHSwdazP8kVg",
  "key37": "G8xUgGVy2KFnFFLtk6f6q4FhiWbsPchfz3z1oRSbaCsDC5Yj1HEuLkv7dTdLpDZhdDXnvF9MrGHcyTtqUtf4r7F"
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
