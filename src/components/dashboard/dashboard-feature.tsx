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
    "5tiuSiWjHfJ8hA2jLcGqfwpyTgxfQN5uL4UZobd1VpQWgKf8XfdJvyAmpBrUV5rHmGVqW3xLCuX2YqJre92ifLQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYYao39qtVGthYc6d23Gj23n7WKaGs3cwHZmSRczTVW3gB7WWuCA6ECfXD2X3z9VfUX2wqRk81ax11quPaY1Tsg",
  "key1": "4UDHGhssJe4k3M3dNkMiSMkf36RdxPEUkniq5nyaP89EaAz7CP31dWY2QvniN6hyEHrfFNFivpb5vQZqzpqjTc2V",
  "key2": "2xiS7LQtmyRAq7mTw1QUZZtvfeFyBtgaa6YeDd3t8DQa13TgSvAHgzRiAZWRvF4wkcfBfWyxcmYrnnwsj4nwEgHm",
  "key3": "5FFdJNBhxuzonUwAwusUh3GNnmhgBQ23wy1X24tN21xowysbRwTytDNdgppoBytzx86MGzvJBt64Z1oZz8U9oWRi",
  "key4": "2gZKA2T9esTZk4bord61z1rJNGycUsjLTvLtCHcpPk6wgmV4FGZrihLQNMeNEt6JweHddQLCtvufKndoq5EYmCkR",
  "key5": "5LmPr1Gtd93cgC2or7vubpUMjChtFVTms9mqU5KVSSFgsMP4Wrxp6tPrtkh51KGtza33r7Q9CabNod7acekiL8HC",
  "key6": "63cUyA7WfyBQVBQDpvgAxYyzZ5NeFGdM94wRVmE71RkJbBYQ4ABfqmJ3eCRf7qUtCgTrMRS8ekrFPwFL9Nbkac6K",
  "key7": "2veQmzcFM6L2n8BYfTGn3GQAPuBytpGYJhupwrzWYnmmE8ZUihpYvqu3GNE2MsYnaHZWKjrzJofNx4kUNx5pPim",
  "key8": "3ZaFwRVkmjCbSoReQaDBAFAj5PFmurX2m6TDx1mPeuC5Fa322nzmysLr3FPtFaKUXfZVXNxeQskysJ1ANoLCiRwJ",
  "key9": "HpkPVto5hLfvkqiWrpTiA55oZDWdhbQN6ivHHw6WSRHdTT99PKWerYBu3fohuDzZfPDsctg5rsieVBEvETxx27Y",
  "key10": "v38LeRMUNY8zkYxAWjtmQsGnk3dU4JQXj4eavM2R271ShLMq8kCkFGHVkpHgXqDzkcwHNECjhQKHVkTp6QdB3qm",
  "key11": "3RWTgRqpCdd6cshUBu2cW2GUV7feucjyLstR6pbAhUuY1cG6QzR2GMkxtXsZBStYtanJ1NfYxj2nVCTJEUKBNudp",
  "key12": "4rZjdo6gaspX3EKTLP6VK5uagrqj7orw6mz3QB4bmTAmjK2Xu5tbizurRVKW243wUi3vwvnrjqSzWBp1hTWiCC2n",
  "key13": "5vESomW9DxUyhUaRusRXQZECmgjty3vCyX8YZ7EYDENvJwBnZVNbHv2m7YDtmynck36zGbrMfPyWRsMsYxgpveRD",
  "key14": "3xRaYwkLxRZiS38W744r1QYLg8yqNbzZYHEQdf8Q5DsU9ML1dGXrmchr4aNyT6VV9WJXprtn2A9ddoirg293LFTb",
  "key15": "4Eza2xXRK7wLriqgSiaPPxGWPXDiSnbFynXmezyScFP8eeeNwtejEHzytCPs7sRY1ZtFviAWqK4aFbcijeaJxTkx",
  "key16": "2Fv2xyhnADXBFeYhTBmgqmv9NCHkmgJpoPYHYY9jxSmz2i8XAA3HuE5P1B6nmsSFYuKN4dr5JXK29akgHDp1Rt5j",
  "key17": "2vFDgaAAqAUR4VzBSDjhCKYBhvAgV7VyCWz4gUKpiegFDhfmRG82uNzS2ToFqPxeesagPwB1AQZJ1RpKWbXxPAQe",
  "key18": "3A8twqgEnDWi1TG7fDCZNnUF4rZd7UtyMjLQxeTto1kw8dbw9pNqjUPXaJ4FXrgpYAuHJDPi1ewTkpqb969FuENU",
  "key19": "39MFCY2JZ7NK6dENiJXuHuFsu8MY35ADpr21M9aE4fq26UdbAENKP4g9iQUbh14gLgGBWTEcVWQTjBQGr7frwYCf",
  "key20": "4rck5Lht5zYawBCgoqZsYtVGgNik1hAzxzHVkanqA8A1mcHYYu6okPkSBZZjKjYJnWD4PDQqthYwW6idSBtZfw6g",
  "key21": "5qXzJ54TafyXQ5NmN9nxzR8xY56vNceS3bmr7U1cq3f5Nbi2jKGU8KqMHdQGKQ9THP6ZqxgSeuPXZ5Y3Ay7EdQz2",
  "key22": "5acjqNqAVxEu5PzHYEBjiDgmT2Uss74mDPCMaVfkkqPCNoekC7SUoENV8FigJrao8JWJXsQ4fPPAHnjPiTMWSAMD",
  "key23": "2rWZRrYgQgM4RVdAAUpUhiCXSYbxnCU3aWKUmajAc1Zx2CguNszn9kTaVXn4oiK5LNiLbQXN7vDeEmcYWzcoaerR",
  "key24": "5ER5yigDJkhH9Lqb3iciNqNQJ5wxM4mJdtKRrmRn217mSwWZKrQmWGSYquuTk6utzJ37oYotxrn1opb2pFYcVbaC",
  "key25": "3CkpbZRYB7ag5AovqeSrpHpFQE8ER35K4Vptaaxn4EmYjfRmFut2TYWUGUF3oLdCJAH2WQiBaGntCzxs5fT3WrTs",
  "key26": "5dhL8yiQC4GvwdGrYfaJKRn6Sjr3tnt6ci63Ckj2ZqoFiUmqvbydLsqKG4caZ4tK6rvxWuapcF3F5TdRyj7eket5",
  "key27": "4syi34ksv4RUKtoiXcf8d3kmgYLWBWgCKiqQhByrrKpNyU5Q862mRb41BfBf5v8vYvmrBFzWxxJCqJphVdzv5qNa",
  "key28": "47bU19qxrMnbeqz1cfajCYTwHrsSwPCaUoiyXdUqqRCuSk98KkwQt6TVzTqRmSJdAnPhZdU5pbNaymyjrmAmf6pF",
  "key29": "2XaKFpdprRuBUyZdaXqRFZuqdFJZyyFmv2vNAqHhEoQxfgNabjDKEGpWSYxrcL1DzvFXV39jiLmDD4e2Cr21qCM5",
  "key30": "2mGE5YLraheSXtAP93jGYJ5VqjaQiJr5d4M6MABJ3tFoPiWRphBwfD6K5TtXDNCALXigdaUmCGbgnUYgoLS5xSNz",
  "key31": "3LERWoHCtyBGkBNQLXnhAS3ijHzRu4EZTTn8yPEmiU39CaUing1wnq7eKUPFu9GFssXNN6HMrq7Mf7GjsVjmBu3m",
  "key32": "4F5BUNxy59fSEZf2vNW6mq6jkCiqmEJJdX73oRDk8EhYS4Z4u2CP1Cp2dymPBpc3kVTvgBLuPmUEPp4Z1bcSYmwd",
  "key33": "5uhKFScNmTxA5s8wwE31YyknJMgSosm2EzUqyr2hkMsSK4EUBnStswzyBhjFioEXE7iehH5fzMnPfpnBHoeqiURu",
  "key34": "4r4sCiDJxjx126ucKL1bKNbi3r1bNQvC4rYTjwy8MaBP6vGNbwGstmsKktoem1ezCQZpQmkroCyRd1WhMAQ4QCPS",
  "key35": "5rSftfDAmEZ1meAqZ96j9wva4VYkv2fMoNSYQEJrRGj94sewdmvgXn8o2upvhxSG1B1giZcFsx2PG1StmzWWRbLp",
  "key36": "56sQCbCoCiYUT3e24uyxdv7TVD2MdphHnz2dN3hiRBEyqmHKhMDTmbURHbMcXEGigzqNCQ8jcLhWdmabDjTqnA4h",
  "key37": "3hc4zoBaW47jdbVVdpBx5J5frMuwUfX6Mg6VPFbDciFz69pUn7URREsWPJvfPGcUU3c1yLrcRehAVvGQgm2o1aa3",
  "key38": "31wQSoQUaAPnZHTXPpYVCjhgPGHcgdVJwqysRx2hgMTs9gvAgMLqCyQWx31LcwJtPLjs4VkWnzjEUKvu76NmZHo8",
  "key39": "5yrUPCTmPFDAAJTfnSDCZpQB1h4oFr2WmdiCM9YkhSwuh57b1XneA5ezNTNajn7vGoVuYPA9e4QhMgvhqfNHVA2y",
  "key40": "5eNxo4LsZTa6iPFuFjUkVU9NNiGA38qMuCacTmUNtRaZRpfBC2YNzUgjphyvuRwcNpdNuuvH9LDhphtZj2r6HhFS",
  "key41": "EPUNPGgvTBwwittBC5pxDUVVtmEy3F1j3iHGtmXXtMkyGAME1Q9nAk1EBEmhbXExo4VadW59VDeTGBPFjDvvtJj",
  "key42": "LEYZtwgEbG9egNjatJfdr7Tza1NaCYeJpWQver8iEfJRi3qMCVVd7d33s6JGzroLaVmSDdgZP9GKehnrjhuvjyq",
  "key43": "4ccMFEjHJ5WGFy6nNPLJMiTgfF6VHeP3HnJtHWW6RvN2rDTzxsVZXwGygMhtGFcRZfZFs7CtySJqdbkkvwzRgrvJ",
  "key44": "2amD4xrUwJ8f3YRWaVD9aTYLfgz6MzwY4t73gMJsxY7hhxpb71poyv6vSaCJG9nicf3V6hmCYYjzcqFQxoVGfnqN"
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
