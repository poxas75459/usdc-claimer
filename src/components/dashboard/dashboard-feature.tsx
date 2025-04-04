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
    "3iEHhujFXky1KhCusacL3PPyuTWdoAZXmzUvmjNB3pAEAFauNvxmxcWSUvykKcrCmP4Ldr86Jx72h9Fx6TUxsSmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wxmF1UVWyzAgnx2wNrdEkbz77Pw8XvCzBFELaKxfaFGDHHVmu1RshRyuZWmpsQGi6tDo8XiPeMCDs2dAa1v6w6",
  "key1": "55Prit6t4gA5KHMGKavymJdTNfQSSrG9gyJyaRsCeS6oUmgjTtGP3A3nonn2ekfvisUQ5AbMNfz5B1MenAJ46rTP",
  "key2": "414w3BoqLosF9S9uqky6wY3ZQjyphHF8orR1nXmkXpST2WthifrYs1bFPwiVqWQv4ff5RfbQ1zWtzonX6LKf9VB1",
  "key3": "59MfnDkaaNM6vyyBkHKTdKFwebuVqB6QvwUVN4xYMANmgZp6rRw2NqRQhFHZjzV1EVF3qFx2wS7saxsQFRLrvTmS",
  "key4": "555xGNRqRFMTEVoYrEzXBoxswXrWSbAReka65mhoNtmKsT9TL8A7GnbvHKpjjuJk7JKiaMEoaXUZDc9TbKmYMa1J",
  "key5": "4sHJBSXsky4ez4VgwBfGZgZc2QWv1nEJ3SzDgMAqKFt4xK7gXaipLY3rTR65Rd4qhkXfrW3h4UdPDj2eCjcb9BrG",
  "key6": "3EXjZbark9vPVu3fKSN5PV5rBy7YNmwJ6p7eF66qEJ186zMQppzwAtDTgsqhYXYMthZUXRoyDUJu8dXG1ytSQ6Xc",
  "key7": "19brVFFQUv7sxen7UhBKeT5XM6rxT8kE1UWWtYMH2Lc4FBGSGRoE5Vaim8bdK6yVygqJYZ9LN6esXuMwBVwjvPH",
  "key8": "L6twkLEwbXQBCrfhCaeEdyfNzoJ6fn6sxPY2iZMZCoMuRVBYjL8zXCietcGDuWVoxGWBShQnanegPvD89DQp2E4",
  "key9": "45H8HcyQ1HTATBbBjCnexmfrt1qWiSXZ1ozg5tCC4d2d9xJaA88JoMVgqNkSAWcMeYgi79jiQPP3jSM1aq8cqx9n",
  "key10": "34TGggWdNiARffx9jgjWGtXuGw9jAJ7M1kmXFn4kDNfKESVo11NU9JSprHeS3D6reGqcdUxp6urX7t7qUTsRyYH8",
  "key11": "8T5SmGKj586JWZqNuiWNuVrU56a48NbCM8J4eYtYzjjXTra5byxMSwE8rmCG5qrmS6hUmXZ5obiRmRW4Pt4Wn7U",
  "key12": "37fWBbBWyc6Gi84ye2tRujN2VFRXH2XyTBiWvgQG5VFi3EoFo3xmhrM6q8i84NuL6myrkgdbgTqmdnLkLGjSyRZL",
  "key13": "gTaJTwM4ZddF3x7ZoaUn9zAETZr28zJHPFgTN1bnfpUu8fL4kjf9EHQi7rRWrK6B78injFiWGcrp7mP4stSLbQF",
  "key14": "3zwfFUZUQ6ZpWogXnryuZEECnNGdzfj8znk5K82Nwfjd8sGpYtER4beNnywvfA1tYL3G5YMXtGbrAiGJ4YcFWSJw",
  "key15": "FGFaXVPmemQYqJMniCup8PgZ2Zm7s9ViWmmn4R22tyT1pvphkhj8XkxaA4BrnNzcBWWKbE6NUAhepGyuYLjCRys",
  "key16": "2v1xnYpsEQgSRW2DiJAX7hiXaEMS2n3sX5jHY5LGKfifMmhocH94A4WnPMZaC7MG9K7zGKDCPpGUiWZYLKbcee7P",
  "key17": "5VfbLbiZzzGdE4MBdLs9fszB1CoTJoZVLcWsB4y5Qy9QfRnGN7eBt17Dd2X83pBTU4SbPkdobz9wGHZpz9i7YK8p",
  "key18": "3jawpfJsiETicxfXD7nWmNwz4AxAMYPRbJf2nQMkiB1unzCn4aPiFSQeEWpTuJqJxDG8tJvPMDNfdw5wvoocvy34",
  "key19": "3X5mbKXM8FW7mh74Axfjy8T769KWrXQvBYYmfyp6TZVzHshhAmFUzBhQzsQe8zr5nce4A71PXVLErYHReLU1bBzA",
  "key20": "4UREQgUUcUkibD24avsfVWB8abmhiWzhEFh3hE5E9osekPHCjvBEX7cs3B1yuFms4a71wYZYiCJe9M4oswH5XpyQ",
  "key21": "4VRFXxjsmdTMu5KWAGJSh6ndMEi3XEy3WTmWn8MJD5biTiVpUQhadYmw4WLLFYvCsmrgTwtPqXrsjR3j1S7Z6ivj",
  "key22": "3BEknVktZhPFEmHtw4vxW2zGMuDuPb8SEMnGAdFJJZFhndeyM3MjwySM73dnBt5gsSbhC9cPn4TWQDuzncrDkbz3",
  "key23": "3GRqoAojn2FptDDZyj8z1qSZNbwA8r2111atEyuAgj8XguXkB9gNWrfbU26AKQFSMsd1uf4xB5scdJ25sUDL11Q5",
  "key24": "2puVe2JkjKoyosVGqcmQCbS632YACwtree9dikrJUmH7CHQ97qMYjS85ec5g8evXNoB2TWyLWtPRCWMvSc7c6X3S",
  "key25": "22BX4Z2sA314HYc6s6zvLRtCpnHx8hPL2dM9fKt6AhzzUuJqZ2SLJJJZeEmTUu7UGtAGgM2WBCvtBVmWwFMkLvWv",
  "key26": "5KfzQniSBngDHUh4WxJrKbAT5xUSxBDrzanLeWHY5rmPukLdfUznP5mVJnks1TXtDEBS3r5W4UdVVJUvaKomf9vJ",
  "key27": "5a7h2qJzBEK4yGWrQ5ZQbR6TmXwDmP4tx7Kws8CgzPC4xbcsVFTTSvKYzUjPFM1Xu2exEoEC1MaDPWePykkwc54U",
  "key28": "eQ4FJhj9Km4V1Tgat8mzdr3aYPcrSSc6omPY3y7YUeRvdKeXrAwuGn4mHZr3aQE4o7W3UYWknrc2qzGjZv5NBkD",
  "key29": "4PGsUMj2zNQUMb9LjmavJXVoB6qpaB1uvNhYuCNovxZnEjcgpoAkArVwrctZBY2bnzhdgHT8QA9GMrGwGQc7BGNB",
  "key30": "3dSodRVY95XwW7mRQ9BavAWHigRmrMSRVwMNB6QkWqrY96gaBeGUvq3YQHEtr18t2yvUh6aVwXyZJPZ7QB5GQR7v",
  "key31": "5DHCX4UcqzH8tJGuCGWS8Hvqpi6AvNuaYSxpLmDfNLp4YgmDGWoeF7koL6fPryY1pS41vpj5CPRtcBSj79sCQbe6",
  "key32": "5pvgZaUAsAReU3tSBpEhQyLXAU7iHf2SqQrkngPvnUVkkedxwGwJgYBLN1g4qo4QZPomX12mPnmbfFfF2HXTqpb1",
  "key33": "5DrBCjwGWeUBb97mYgaWPo8rSLT3CwwheGsDZte6aWk8WoY1xjPt6FzwtkuV43saxXz69mCgQj7RDyLM6WfCnjaz",
  "key34": "2Vg644Z5smEzzoUp4FL1VDYRNQiLdcgeXimc3nAkfUmQDTauPKbT7Fuis3EvTFSXoXBebG2jZ8fxuLQoza9ryopC",
  "key35": "4ttjg8unGaCCZ9gXbmJ6hFhQSEGWrPT1cB3DuAEU3chezdVpoTfFNp3ACQQ4HfDuxuTMTmgf2wDGCE7nPEmgMeTs",
  "key36": "5vMoeii5cxMicxcvejzUG6je9KGz26as4qevEwFHHudn6CZyRjbdTAUWUDVSVP9gQ4V7RockYGd8su1WKz2HC5PU",
  "key37": "36hHXszWv6YVi2Ge7m9dsou9yEmEzsoKyFMMc5imUJNwQ5ydaqPwYxjoqCm5ZXUKwdVXJka9J6D7ihmBbwLWHouT",
  "key38": "5rRimB5a3MECEpKbiuMVjpKu1oSaEr79eqdFe1rrf4KHiyJeJCW8VhowBTb6zZfe46sE56aj7SKW9e1BNtw6Msag",
  "key39": "2pqRv1oNE3YM3sMpyrjJDbfj9wzVKw5pbJ22aEbs1HUAWayoinCDwuBCNLQsjBxAViXw8cSQPRAfe8JktvphV8Bh",
  "key40": "hspFE7Afu7AoBk1JJeN82ozpSaD94LjRPK9KDPJ3wiCaK5dGk38WnESYMhBSMoFojxURgLLPyRsVYozxVVcyS16",
  "key41": "5RLYQhpBtzcLzqeX3QwcN4anXariNQSvyW54gAoB5cA1jH91dfmmQHWdaHtDS4TsFrtXikZWz1bedRMrBSUcN74S",
  "key42": "3bnccVPn3xBuGBXgnxXKg99cwna47wWvKjwxmK7BJKj4iif5dP39YtxGbMm1a7N4jU8mLDtjfhqZzrzvwXPM7PEy"
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
