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
    "LrXnBemdUFbKuPbBoP1PvDuyZiyyvq22KbWqm7CUneWzm2p8s7snroyM935492YCapvm5D75AuSAJA1b5HHyboT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YrRY54KQrmm4hAYdtkUPVnYN3zyf23VxT9KVYsCX1oxLBbtPj1DPP5iQXeZW7nHg6GWEDmUXaLsrFJF4xxqpRDq",
  "key1": "TdhRgJ2SKBHh48MNHdydTRgzWrrJaypKB2Q3LMNvu1Z14Lp8mWZjS4rPK6FJ4Pu2AYCbfwNWEQ1gMuvFQ2swAB7",
  "key2": "2pgW7ne9JJ9YqgRa6Gfuuvtg9wn4CbFCn1jhktyc1NAm4jKCveVuwN6ydfQvoGrqFQRwzBt5eZzEyqNcAdF7NrkF",
  "key3": "3VxHv1Qc9ogLNpDFwNi17TbgrvDCSCxK1LYXReRprUPyGLqiZhPcsyjSFC63oNstrip177DNBXMx8WKNftT1UFgJ",
  "key4": "4XELGBjxLdMrzSqii9sE3HNjEL1WBhYr1escUEHKEKa3XbgnZJ9LZzrevSCJEEm7Wg1efoDYV28R7ErJZZCaVxBj",
  "key5": "2tEKHBdVGZGQREAC9CuKHvhGECPbS9Bzs5U9us8Us8TtjKsmVARZfvKNxiZVCQMNzFL1gMzoe94Vr7GKDE72tvKY",
  "key6": "46AHYGBttEQgTiCjpDeRjNPgxJSnATLRVqNgKSWCTpxD7VTEWAnY4UAovXCVANZbx5iCrQde1RiDyzcadB96brxs",
  "key7": "5cKGHLJuiACejyhoGkELWgtAghJAuVQQ85xXcsypetKpGgnKcb5bPUSD9vHqhMdWJ7N6q7eqTsGndGFvZDYTbQbf",
  "key8": "3SFXBFu13Dun3a4awBsciAY2XaYvkZuMHVS8FNdC29Lgug2ygkfQxu2LDkFfugYe5Fyrpw9CyX78Dq3auhH3zCRV",
  "key9": "45xjg8ThYxnQdJzkW1TyVEq2NMGTxKueafDhJ3GNMA6sS3bQ2AhqR2vFo2yQcaPfHipry3g8RM6zjBbtj5RNFEFV",
  "key10": "3beZssTrbQDfq1TqP6MfATpbzTCHQNvrKUTXe254ysWf6AXsfkQnMfz92kn1zTWRdgPwM4oxCYHobEWyvqRGodX1",
  "key11": "C6RSddEQ7bqzmxWujj1iMm5SRogMxzcfHFWtJJTByzWNEgamB1DiKbX3K8UmxG2vfPBT1fgNi6M7n7ZcMr2kCZC",
  "key12": "4wNziRbSxCcM2pyfgDhRfAnSNHoK87CReGWa2dXhnDcpy7Uzf9nJKv2CyN4tELb5QQ5TemydarQyqsVTi36SAoR6",
  "key13": "oJefWfbm4du4PGxpC1h3pEcJ8viiwJYupzzKmGMKyDkPYxuV5PAgkYJTzzvmbyJb67LujXNkkc3u3cmmqoGM23R",
  "key14": "NTjrmSFEzRWJmR1ijyRHy1tGDrpsPhVzHrbm4LJUNTbfctV5G12iYJ8xmABCjW5AFxukwAajoFcQXoVyjZ49QrW",
  "key15": "4NVV1uNuZ4XaJ9GwVsm6FgaUGphaQJJCyc1G46Xy4dzKMzFb9MvhKZVawt55kC5tNJJg62dnyGXgsFHTEYQmAFKb",
  "key16": "3wdth6NSykKeeZvxfoGRBg3qs1LsSsgKsEvwo4Jj6ha2Tw7iZ1KeUj9RKyYVjDGkUHoMbz6jKLgsJEAeaSL1AUdz",
  "key17": "2UZsiNC7H1sejqYywDBTwMUCxEK66gMVrrt7HvWPJuiMpeBd4RgFujwFnATj2FVxyFMkr9g7tXw2XXGgtz1ibAEH",
  "key18": "4pGviXYzmDL3XPM5FTg6fAR4brpRq6PiZuUUbpFYdjyuPkK6THfj784mFC3Eq5Ct9bGGY1QufXJnP3qHgZiXMfya",
  "key19": "56TE69WPpsU9Q7G1kTSZQDf2z56oevxTCVaWmNSDDHUZqb3oBzwpZ8LBo2BbaVpdgMTzef229XzuKdM31dGPQsD3",
  "key20": "8t2oXSkiGk9nihNdeo3iVeMN2FbMyCixcaRM1XbkMYL7U1w8V5umq9mGUvo5hdZCsHikyCEGEG2XLATZibffHyL",
  "key21": "4s9RFsBRpWocXWLqmsEXGrb1F4FNbqHJekm2gcfHSVyifibw4DjNQh9QeB8dq8Tic4o3QJWQxq3kVgRqCLWh8xUz",
  "key22": "4DCsKf6XyEKGEa48w2XbfP5RqSHXWw8p6AdTHnhmZg9ytmqaN5DD6xpwGgcSEJvTphRG7zYRRQ31SEJbuMcxLHPv",
  "key23": "4aNazwYoc85h3T1kaV4wijsKUJ96W32yru1YTjZ9cYhp7g6kdmxdJQHtaZopMf67ZeSnMiWR61R2LoKnPrnoqKtK",
  "key24": "4pkJtqMg3eF2BTjRupD3vQiDwWhs1CHbydM9zuWB13brifY8uHcMGN8eyj4d9W82k6cBawnKLK5SbzWFvcyTKiDx",
  "key25": "5py5YiQTuXcSFAhXehy99eRMKVyobJFVP3R3vANxDZ2YhC6BNzmyUYvPTf44BuFVaDtYHR5Hpya9YnuySYu63kYf",
  "key26": "4Kqbta4fV2TZ8eMat86skqTx4ccHt19Dgj7rHXijJ9VMi6cRZEp3pPjgccKAh6AoVa4FSWqMSfVrKDTwMJbUPkBe",
  "key27": "4YELyruroes4orivhVQ2r97aow7yMFksv54RrbEBNnRLnQqx8hgjf82pFZukRsvUDm5dbKfqooiZuCj9cMoERffh",
  "key28": "4q6TgiPuQgWBhm3wvg6eW7Awdfgd8PVCpqzijsaMA94RrGkD3v1LEyXeXXUC5czoVXg5vXThtxQ1ohW8nV8ttzfy",
  "key29": "4jHc4VGCBSNWQdHWHKMGuUSezyc6y859B3zp3rUcejkkthBYPsM4tDNjk9qfbKyfaervTxf8w4AgpihsRq7BSyUQ",
  "key30": "F3fGg3suRcUhwdC1osijj7bLD3R7Vj5PSX88vb6EDy9rGmxDbkiHRAW7Trz8BdY9xMKFeahzrFYscDN2RqVHY36",
  "key31": "33QG9YUoPtBvxurNYvWE7BBd745SL6QVN7cFX6wKngJ3oJcu5H1B9sqj47S61jwagyEQZ9ZfxABLgiZD2x4dSAeb",
  "key32": "fSbit4ewCsH6iWBz3SmLas373stGh3nUEdxBpumyqWGdKtEQZV6icN4CzhFg8ZomJgj7CFXVXZFKeLJW7rvLZtN",
  "key33": "5Lb5sdfserKpEcgmabsoJRTxFDZNzdL72gKp97DZtFyebXJA5APhdgFAVhPKiZuY6jiUhtAbza5mis2s4Sc8boTL",
  "key34": "5x8ReVsPPn55nZgTEtBph3hxuFePzLWNujZN5SLcLnqchXPNSkbUwircCBriBK9Xr9ADUDQ5AuSdvVfsGtWZXDpf",
  "key35": "TxVKWn3eW8fCUnxKqiYz1mjqtE2nfbVxFryTGbAkZMaoUtrHbj34Ni2GWdWxscDBGzyYJ7vXkjMa9KgUME83bqB"
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
