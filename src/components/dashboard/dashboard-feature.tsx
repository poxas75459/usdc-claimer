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
    "4532tKB6iEs3BFXGGmH6DLUg5sD7bLcaU1X9WUZ9XwcGdDDkgi46X2ZWfhgVf7DwaA2kzriakb3qW2U94V4b4j9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fS628CXvAUGnXVkrVzZVWPzjeVCtX5AzTHojzPF36Xr8HCWztsCfGutiDPZc3FUMtn8HkZa5gU1CwzSNCFAhZYz",
  "key1": "53xBuVHtJh6raoRxJznfXofexVcDinNgE98F1KQnK3p1CAkTQ62sJ59iqZtbgsCto4Ptfy7rtmSc5fUA67zJS9vF",
  "key2": "2kWGtw3JdepX2ELNXUTWUoE6cbzv4eKqdGYopHCSispMukRLXuPmn97v1cVHL2vrwwkVip7iwKGa29azbXgViDb2",
  "key3": "2M2yhkYYyAS3cYnscVq3sUx3C2qa5hBuMwcdBy6tR8YrJtFt6ZF8umdY8dcXqhWASsm7nyXNcTspFNQKnE8SpfGT",
  "key4": "uExH9KQxym6anLocHMkWtAaitSf21GPMd8yM8GqGLRhDyjbZQYyWTBbS5DMUqShQmrPxwWBEE78bU9iEaasBhVb",
  "key5": "4TMwhZwNB96M2SnynNKRFzg6KgRA1VMahhrDCPtRi2VAEVs2vmK5VZdwqC2q649z8oBbA8tsMmf8vFfFvBGf35Pw",
  "key6": "53Qnrrz2p1smEVWixRuiewRpTRVdQv5CyiY6BP3A7qDaN6fJTrzUqxJSmc1vtAAaR9qaHwHxzgyAzeVtZ8aGiavB",
  "key7": "tqGp6kg2GPEETfTpE6uQkVp7KSA5aaLKTtitfArUaXTAfWG2JRXW7t33H2kSt58XmmMPniXkYsdkAWdHyt95sFW",
  "key8": "3EHFvZM6qRc5gJmYLkhULnyEzTmQbK3UgfF4etBgUkNryEuAp3dVehuhTMn8iaHDBzSjGze98R61j214ZXQSXJJg",
  "key9": "2aFNbWsnF3DNgrXDn55T5YqvhMdNTzPyRiijqSrm2d7wLuwCcyYhD5bPnA25UhDt4RaNAgTtCoGerSvneD4xGep7",
  "key10": "5wzfRXb2SjspubqW45CXUYKH28DwCVPmV3HYjwdoUqs5svSdadkEF7BGbEWn4JRhF9JS927vMC5iH84jgsSwh8B5",
  "key11": "3jnsBziDX36XLfGZAueYzNL4dgXRnaTopPXpNKns6fS6Lig31YFnibu2SunhYfpPsm5Crg1k91eFbHjztvYvTwBt",
  "key12": "njKuKg3rUmryEXLb8Kix66SPdV5zxLHfiWHuhjBnPappm31aFgiYLbf3zoh8R5npGcXYjgZiq64LH9t3ZDLvcnh",
  "key13": "5K9mVy1YWw5reCmQZSC4fBNYdZEEzXr5EWPSheQEkLkq5z9mJjwnnE739hmDfwPwzihYy1ScNHiFwLaCPeM6nqPH",
  "key14": "V71GNT6PdvFRAD4bs49diiE8RwQBU1UNkk9Aca3p6cvsrBo7YRSWLZBvEVyhz44srJAMUEqATvgFNqKqLWHj2dY",
  "key15": "y5pLHiEZmU91rJGaDnA5TLKFWmg3enYyfs8fze8h4Regy7ydbCy7ep8fEbteBffnGT4Mc3Tkm7gZTjAFRoqBt2f",
  "key16": "5MdUH97dYdYnLnuUaadHCYsUpsq38gUwGWhYG9svccYtFXzLpYgHsXjB7oiCVpAc4zLeDrs8ZjWT5Q75qRCLVXCz",
  "key17": "3oeBTWqge7hYLLxCSTRQsjzYLSj5ayFG5KQ1xSsLx1XF3krVLTRTsFfaCHh82NkvJQBDRTaqghgcq1uhEtKKJjyw",
  "key18": "3J4TUCvTSJHdw7eeNnk2VozviUaQXZS9FwF4Qgr2anfuScM8RmeDA4xKDyDXtt4ujSnkbksiZ6weYUFH4tsAf5EH",
  "key19": "3XD3R1Hgh7cUipiVuQbD4w7qDrThRvYn2H9ZKgpdkouPfKzwxn9gMfLjoXPw9HXELvJYqtzshcjnMsiinS1tWgQv",
  "key20": "39bHVYbjpj81AuifiBcP7G7wgfXNJupEXNJa7DUWHNKkCmPMLGi2qR9yDLVDswPhgotNFeaDmMeWvZVN5DEMhaeV",
  "key21": "5S4chumWuC1bUvWJxd1exHZVzTTd1Rs1py5eqYfijpQRaHrpo6h6cTVBBkwvAuEdMDY8Y3JmJzBYWVb5DaccNdJg",
  "key22": "4ZRsf6iojaHtgDmd1C55bj63UaCzNJ17yoeNFsnMKytentHGwecr3tS4TAciJ2DXMoqFosnxVSGzJQVJ7SvgWbo5",
  "key23": "2jsZCzGNKrU3icj7ER4yTjgRiq8PeHdqQe2yfkhGUsizuzDcV953ekBD68HYGqhF1Si1aFwi1psB15E2Upq2FzHU",
  "key24": "sYqTizAgo8hMBYbgP4ZmT188osZrR2jcZi9dMoPPpk6vDoE9n5eTtoNAFKG5sz7CvjkpfLSwhJGCLCY1mkRFPdp",
  "key25": "63s2VUDzTuPYMu9tjBHmNGpiLuoDGoLbxg3u2W6bzor8AT4E9fFuErF4wSyygi8a3Ht7CpZ2VYL97vkVzBWa54Pi",
  "key26": "4XNHvykQJvS1X7tqKZXnBpAz2A5TDc7XTDBeaHKSmedJWRaMxTCvtomX6JBjS8kZ8LzQBbLfaXWAgrHpv6qLJAbX",
  "key27": "3b4WssLNywrKNKivm4pRJzxtnQBzmepQtLR8hYB9fsUtXHtuTwpqaUTUbrnvvcufZ4GA3kHfnr3Wo2KeS9J8mwNh",
  "key28": "4ztQzQV5ZMLHTHHaYfi4YgixrQxGRhDaMwSosE2rTscH2L55c28aH9MEmqt3h4ewomwK2dqkAT6a3mjtxZvGe8rM"
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
