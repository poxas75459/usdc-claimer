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
    "66Ep1a7qraGjxRrqN5rD2XnVmr5ywE2Wg5UECtHFWygihf8aTSAp61hMT5x95Dx9svNf3kHmn78rkiry3bNPnPMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3UXWVmMEEibS46V4oWWPCVQRixYYTxYvsBJsF3FXtbENnmkZ1UckqWM4pG8vtBkVJvqJdNrrX4131JJ8EkWC4q",
  "key1": "27A4FgSZGc45k3fbtCaXBv93CE1iSDHv37bxA62yfnw2Uf2r49LdZi97ma3efqTTRtWCLCSy3q7xpT3P4zS5XS2H",
  "key2": "5e6Bxj992tfZUb35ppKCKiVo9bWqG48RMCUMBccixZGCV9orStBtvuuX4rN9WXXEUxntwNVZfi16Tk5tUE7VTKDG",
  "key3": "4ZrB7MMrnRFV6vMD6vCfs4TRHq2NWxPvaYwbWBjG6oGnWFf1j3gzLoTba8kS3iZ3E4VHD9YNu18SupSabUrjXMhh",
  "key4": "4XkuUq4hqyxdfuSCpJB3VDy3riZaJ56FyEpupswAf8JAqePnFRSHkHrMsKRfhdYKnt3pfJf2yu8CDanQvVdMaKfC",
  "key5": "bi5DtiwZ2yfnNqJQHfSUw7Y9bxn7FBALVQJa1gzGt3HN8AjmBDbCkxXTaJ76r3S7ULtCGWDszZa2nWZxzxA7NrG",
  "key6": "4jwUty4UdamqnY6AQjWyWsZDXkUVxbrm9fxU434bTAmAkx8RMSvA5w1F5DCbAdbG7icqBXR6hdSbXZetiNpgu1Za",
  "key7": "3FtUFYrna5fGjaqFGPynHym2XGrYMWcF9amcDM81P5UwV4BQBHdnvrHs7eHg2HMpqQT24S7wiHdCLnQFCbdJeg3D",
  "key8": "3YorcSZkgQAXNLBe8mkJuEGxNfj8ridbfhTo9WPcUzCGvyTZJxU7tffb7yKZYvWED1cSREw7CUx9wq7GNVovRUJr",
  "key9": "epN8hBiUfsA8YY5k91NVsbYV3y6WZyp6agUUJSCc6e9qMC1QazjpZVW5WwwzAc3fNZHWduqmc4edNX13M5h6J3m",
  "key10": "3mCFJNfHX7ZNcHxJvqZ8huP8TSLc8BtGXMdu34eZ3jaVMeWf4bngqTPYLeqqdirzheiDaw4JkXmQkmq6iGMNa97u",
  "key11": "5XN89uFTuhPZE6JKdJFnanvDfNSh99xfB9i82Dwp1quGBk4983vDFwFJfJFkYgfNDb2SahdJj7ZTb2r2ty9djW4t",
  "key12": "3a39hwVsQXtBJ5Zoasmnn7Vj2T6BAy4uzmy7evEmzGcVpPC8LpJTg86yC8CESgSPavSTLnWAh1CHpDWhbRY98npb",
  "key13": "2EDYSSiw4w9wzXApbgTJEPXVqqG4uZoYrEP6aLy9sQGkdghmQydkBNU2Y42QyGCPX9xoWQfsA1wRHj6vmstCVmzm",
  "key14": "3yqG8cXjvhdUsVXnj6y9vcMgftVoTdVYXdmLLzY53zoy3qCSQYihN8ufUny4Ec3Aq43Dn8h8d5o3L59fGUtLvwft",
  "key15": "5EHmyGHC4uriZchg1F4Ev8bCCtcRFtuC8ooT1vxymEsGEgVbJWrEVHDzZb58NzYPVqye4m3tBTAL4qSxkKY2siqk",
  "key16": "2GxBHsuGN4NxACZZJTrJMWue7r9vqs4utv9i3mxpihh7Bkfy6oK9UhisbBHfppwJpksahxc1jZZq2Ah4Lb5dr3DT",
  "key17": "3hfmUWYyT7czYGkifSiMhUzbNy49h6r3D9udU6rM7wVY2QVRUSrWZLnGsedzZLGSSZbNGGCVCb8Z1iUiZSLEt4Hq",
  "key18": "4GBH1DuTdPMjEttCfBnnnVRuYuSN3WZEmbTCifKdqMFGsfW1cHcpru7xpnfHbuwS5cdkAA2sLWwXH5rHZ9qjNYSD",
  "key19": "4it6bdgpxbJE7Ag6nLPFjxzE45As9Bfuq3i7qfy38ZijajvkpBXV24fR7FssBDZLP4P4s4wJxVGVS7uUHXLFDKVK",
  "key20": "3b4UZqj6XAjpkKqrcN5GLVkeex7kxHijupzmqYLyTBDtAwWwg2cr1h4wZTMUvZ7U7BXHbAMoBT9MRFqorCrShRtB",
  "key21": "kKpzNYtMeFehmtBXx93FV9DnUKUD5okdPnzGpTbqnzVWuBTpvk3SNDJ35KUc9iqdeCMjsLMfCtjCPaektG9BeQP",
  "key22": "2trcZXyRasg9oib4esikx9VUdV3bYMs1krNyFBUbN7dpAVNKakkCxPhwdgpeWYUaCX5RZWUGiujhQS5chxPUWnQt",
  "key23": "4dXDY9v5EavU6F9aiHdNPt6eZM2bHJqy3ANmJZYLhia97eF26GnJinZs88bmr55ykTfnKexqbgXNWNEhryiEvVCD",
  "key24": "2Zhf8H7magqxxEmyQnyDaVXfqcHg6oYr7bgiKtLLqHaiJdVAoAB82K4xd9mVPqi1cThRPvRSSUvsYUrau5x3C5s2",
  "key25": "2kRfbxSeuufY56aJwXCZEqe6oJ68P5owkiDU4hiGCDiYUTDt4rWy2fd3pkaXdSTwYXxVH5VYz7eHigWpJe6cBufA",
  "key26": "53dxWwzRBQrQuVnPVbMgzcn1BHwPZTtqUzJcRkML4tWhNqJ3yGGPszrM9BfrGnodnEziQDMReS4tUxYEudVJKf6F",
  "key27": "33rq2u8nRDFEgttQmmsFPBNJAqKSjF1mMGAW45tVUPLw6Mn8CmviPXHZ3rfpKKuML9qyGWvcYixJTDFCezx6oFFb",
  "key28": "4SR9jGkvGtjKcGGDZMA7ouUprMQwPxZhBmZCje4KN8aB8nFaLcv6bQhxWBtjaG9ZZyUDmNxkoZb5urg3wUxS1im4",
  "key29": "5RJtcjAQZsynQ5YA6PK9griUATm4MmQHqwmYCEET7zHXVm8z7SD6U2h1BFmA88SvB7eqN7mYsjcetspdAbfpcqrR",
  "key30": "5CHm7EhUkAKnXYupPLEQtP1L8FoKw7QSeAWc5FGFqFrSc73xPAHwjMWCxkSs4XqQhjz22yhAKAVKoxme9JGRXfXi",
  "key31": "554R8CGiwMMV9pTetD1TbPmkTkYPhor6fWkYipKy54rKcFLR39o3L2VijEVJv5dqP9NwWRbtML3Gw2tNwkCqZ7Qq",
  "key32": "5XSfAunscHNF5QgkFMGhQnD3yvyD8tM6yd27GyrbLtMMnj3AoQ2ACmWoH5JQJK7wANgUcne7rHhdJfbhHoNs5wis",
  "key33": "61Qjd6oZiLv8hFMc9YG3yXsnL1uB1WpHSGMjwhNeFp25V8MD77nqC195PjHSELcSTRtuZtgjHYFrj9Rp57VrZmhb",
  "key34": "4ww9mMrmcN4upSP5qf6qpRY5A7JNvCgGCTVmi5eEKz45V4iYP5Bh4Pm6V1JWe4EtcoR52NWQMEcjfy46XQDw4JzF",
  "key35": "2Q1KA7csFCUFaY35xJxmRcWK6rNujkFR6ohWeSYJPXDBNYso1SWLK54PrmCGaDEsVCPfoFuDXLbjEPezxpX5po3Z",
  "key36": "648Bv9uDA7tWvx9xqZpGtHNQ9wghtVet229zJCCah1FhGDZR2zxy4A3EZguE3UuxSFuijATYTLZAPpzfMGyQ3Dhz",
  "key37": "3eXBH6bWVDTmURsQvAbQaKpCap1ntzj7PWxuCcfwtR6aCgyQz5fpu6MuHi6iwga5mBECMp6zBpeGLMnMCrGpZNq9",
  "key38": "5e5MejGyWZc7dLzFcV8QzSLuQhLd6BvKQpsLTJh3CsEZU4MwEGVMxbZh8FpCGbjRcf2jYrgfn59PWdj2jfRvbN2P",
  "key39": "2pHCpR2KviDxTtkVMD8tz7dKe3NSBcxDS4wBv4NaeZP7PjNmh7ChMNc19cdqKixZqkKDqtSSQ5N8RA9i153X1YHX",
  "key40": "2ZH3T7T91eZyGsyiftC6Nd5Axrvf8UjtaAs5bgKgWbKaqn1bLpGQk5W9kfuA3G4sdHRSPrFFyYtx7fLSf4kZkDK3",
  "key41": "Fa45quYXM61rmPmUKbwJt35NJeCWGk4gKC4CgwUhiTJNvkqs7TPkbDTfYKxNmb8nEEfncp4MJLgrAzuW4n71ABE",
  "key42": "5vfsXhVoFSpSn9ruoY7hoFwAWBZf7BoefQf58jwXsMaGsLvjm2bdXQRwiKGM7MYC9LNLswUFz7PsCGfD6D67tui6",
  "key43": "2rKj1tS86G7bTpbjDDAEaaU8aEei23nDmfvawa1VaG4z6d8vWR9m7VwaNuRRs8dWj7udGoWYvrwkz4AEgkTaA9ji",
  "key44": "4o43dkwCTTfxHV6MrUJN5CLGnQ3D14zGcycpdsN2WJxpqLdRPK2ajs94ib9kbGmgDjxQQPt9JiKBLUwJX2sHePd",
  "key45": "34NmSkqZWurTfs7ZeiKfVHrSKeJ8NePuDxDYH98wStNo7cBV4MeR8sCFtjZpZNzjiGkxftQGZBCyvLjnk5jWDPoZ",
  "key46": "dqgQ8bJnG93LT72cSfg7VDCvpdfSkRYPgKQ98XX1TxAEn1yiR39j37YQGCuyssa8Wp57DpGCB259GhFBFGdAckA",
  "key47": "4YBt4m9514g4ZrmXVEC4SvEqLCjnrmwkWbnhDzUzJAG9g8XR6j7iSmSZJ1ydf21cyFauFTGzbuqwMhcBN6pAU9ws"
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
