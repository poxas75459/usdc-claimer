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
    "5jZNhtXBThwpgm2zntPcPyJvx3D7btgsv7GkPP6QgveaSaQmRoT6Jj88MoW48MAL6vKkASTftPvbZhZdQzGThMEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571PbriTWVQKSZaDPeQ4zfzeqdE8nwQzpxvUYVc4sB1U7BskaURMzgKdJt2q93K1DA12Jjt4tCdowY9H7nGZDN76",
  "key1": "5ZsSeREnNtJMR2UakGqGpScxQCNuVKRJQbE1GzzGpysU5cze84otzGuCVStuhV85EkzNannscT3KfboXL6SepNop",
  "key2": "2of6vyHdP2JSR1wpmXFEoZG9jpaCA9ZQP2XCVFmjybX2fuvFN1uzobrtrkPJMHP5yXCbQuDFakziggR4FjcakacH",
  "key3": "aeRZ4eUxHDWWcKo8V5YZuLmHphhcXu4knZTfd7eqktFKR6iLAFxbDUTomSREhrc4KkhAZzsgZDCUvZyzLVdzRw4",
  "key4": "4ixujGiKr9KwwduN4snvHm1QgxRkMMxhVwp7c1Z3vPuUMuQsGKKA2cdF3RDb6SDGnRsjPzPUWDYJMaH68GM7x4mH",
  "key5": "4nznPGjRk8Hn4aP4sE4DuWN3MVNkBPuFKjzymLHCNR9xzBEFaVPwUFgF9pc2tiZGDeJ4bfTWQLBwnmaycNTQppba",
  "key6": "5xzddD7BxUpJeTtw56YgtYS5XqPLUGDkHnJF4majRsc1mwm56fGZUGZ174D5jCY6hUiirJSJowbLjRVzyzxHKMfb",
  "key7": "5ysK63BHKpeL7CthkcnPxtChUGK5MfqWhawSNgcYFTpsMwuA9a9ATqANZes97N4B84qwr9So5hPRzSgkpQ7kaqHd",
  "key8": "5Tq2CJr3QjLMEV1HV2jnEY5veRhjUkaXd41zp5EHh2i2T1jge8cZ19irRWpWLpGvGWrJTTqhhPfpBvcV7KbsMHVb",
  "key9": "5X34FL95niBcDoqm4snQDikK7tNonC9TqPAG7G7oZbjGU7irwyMbeqiCL9A9Bd5oYCAeduJgaxPqLiroy832GfLM",
  "key10": "4DbKbYm3cUAjM2YWzE8wjfieoucmRVaojaE9sUBwpPohmFMGpostpk9tW97opUB3sVRShMYF9DhhE5GTugPf4qZU",
  "key11": "KYb7Dxk7M24gtfsCKebGPRmwZ8RHPVJFyE3f4HAxQmpsXobPNgLjiGVc5xVkEyn9WXgPwVBrsfwUg46eFp1eg2C",
  "key12": "4fKoj4EUpkVNs5iEubhDXPC1kTXje6PwWiHLkuaNX3XqjrE3a6FwXDFZKWAHLzZZvu5htC3pjHN5i5scLJ2Fd4n2",
  "key13": "2yRVEY4iZLECWmVNp259Lvtxn8Dv39S3dTJ7bdpGLFe8KXbxavppozfcW3QMxtX9FiwFoPtQUzPV445fsqkrk2nr",
  "key14": "jZRr7szoo1xp3yqSAQYo24NhAMiS25pVWiqqeAV6iDKWPzPwCGsYMvaFJQGhYKnTXUJL5Em2SPt63QUQJ669EFe",
  "key15": "4soiuzny5chSkqMpnnUkdPD6jSzSnx6KteH1tVERGY8dzJMZMG6fBKwfZJY1MaEz6B9RGoMJqSF8PNKjKPSQSd2i",
  "key16": "5th3cwp4C5duxX1KLWQNeWgsHdTLy7KnGeixhmpRC3cLwzSsmgZdXfYQ3HhpQVx2r59L3rXgrbsPhiyFCLBuvf15",
  "key17": "4zJfgSzYwTfb6mof37xgDCaoBXDpUFWnVHxPwJy2miEBzZNuUc76YBx57EQXrP3eeYX6pxtEmpHwKnTKP48zB5u4",
  "key18": "3SWu9Y6SnjmmsaJjjXQYYMS69xES2D8ixwHVME9WZVkDTZnVRMP33HxzKBVLWLn3kmambWoyDkkqCFfeUK2f1W1V",
  "key19": "3J7XNFTX5YTDMjihGjqq4u467NFQNawdbvrX69wtJt1xCRC5i5yyqv4a5hLBGKyXwnjMzmhfwvnkBBdwNbyMbSit",
  "key20": "2uX67WMao3pr3Uij42bAeebJkpDZw8zemgL5fnCBNAd8tR9nDTg5cwnmVEoTrCXpS3jUwydHKkQVd2AwjSGuMHV9",
  "key21": "3C5SXo4gWyowzbCbiNAZfMUg8xQ9F6i6iT2Q2urVvsmkTK39gneieXjzGFzV6Zop9cfUwj8KJpLhAedsdwP9pSg6",
  "key22": "4tdeFV7eFuTBZacKFV4euH79FDhezzqk6M3bdghWkXxArdB8zwYoK2JVPM942jGMwN397Qypu2vMuoAMjZvJ5WGc",
  "key23": "3BhbZPifVnCAcG5e5udcrTdUodNtP7LgtAmCyJ4i8Dr8oezKhK47yb7D2ab3iw4ekEEMmRvjjJVEukBuvDzw2ge8",
  "key24": "5tew5s41KegqmusnwiEJqnnTJzpUHCP7TY4mZY4PYHsuurTgT5hHp8sBx8amu1ndjmPg7Nk33oLcJwf7iRa3a81u",
  "key25": "2JtSMm64HxrLTMdfjs7g1Wdsg4VEHTjVPfVp7d1YqHA4647bWKRNuW2FWXMQZRf4A7TiNqifdwHf3XKJ5r4zDiYu",
  "key26": "2zY4DgXkuBPMaEBJnEnXmCLDJ1yr6L53CZ147963VmHKiU2s44Wak51wYkj2NDdQhJ5KzCgKVGzMDcHaRbEaz4Nj"
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
