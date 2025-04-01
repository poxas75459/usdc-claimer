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
    "7DZC2scJWd11VBXerCZPHTah7d57rSToEkSetZNXrpRuqXQNo9rEr79ZACAiwWxaZ8zDEMgKD7kpiN6oP83E167"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugo8rfHziTzpEsiAavebzDH7DDwMZ4aaANnmSaCvWRTTknRnwBwXG7VfupFd7CPAsWQaHjSye9NTgDfR4fYozNV",
  "key1": "5s7e5b6i3SRbSUXyXNANj6cpFzJoBmmGA296Nt7AsVnzjc3gLWUqr1Rv1iApqChAHUWRttHdj4zw5dGKJfvspu2S",
  "key2": "26BwmLdonJdhqaPutDDqvv4xTm74GwSMfAW2KhtHFv9NPto5eZ7NhyzFEB4hixW4aZMGYUhf3XfarKBzu4cGZkg5",
  "key3": "35vqBwpqs5UR6QugtPvqg8mMWsncUCkka72PYV49perbW3sRJ9aLgoMrg4esw9SC1iAFR6RqcEz22CYY4ezk7gsL",
  "key4": "2kiV4jdyqs33csDxnS9mM3W8ozYzWTDqUqZd49GyMoSwDo6SZD3wbzkcgBW6dV8M2PafgE3bZUan9MTSbUZwGhg9",
  "key5": "3Gn7AALkGTU9EhJvDYaKZu9asXi1D93VEXwUAxiNDFxAKJCm6Tyu4JM3dqmZtiXsT1JBsSsmFjoqd9p4NZT3GqqB",
  "key6": "3KV4JtnYPGeoXVXm4oSTGuGYLF59jeKLByiRugUKBG3aRF9JHfhxFpgY1oMnyZHkUQB6xdhamU4QsSXng9S6WFJc",
  "key7": "27Lzq2ZJpRNPVsQEmzkZfTQe122VjxCJRUBCHK25ycEgusHKP6uTMM83WXYzn4njdpy2bdSgCapJ7dGSCnpMvEsG",
  "key8": "59PL3HvRr9X6LwAWYLra8ZuyhWw21CZLn71148XMJqsXK8QEkjU87XVzNsmwCtx1rZV2nBbmGTxVVRtiQHEi5xLa",
  "key9": "3EGXFWuvQrbe6kYrxJiyNC4yuRnMbHrzS7SBMug2nWDyj7ryAr1t7eA5CKMp6NCUVqz7P6ndnZZoC9Ywoswa73A5",
  "key10": "2kMFEkoMtK9Ey8L97UKon4djXQV7ieHx7RrTF4JFprATypurUFWVaH9CAK3yy93mtRKLUYoLT8vovDUVSmQifQ1j",
  "key11": "LdgjrQF3SMos1DR1fMd2fVetcTBuTwYXdyEs6Jda2KfFhD9KbYS8L4AaphjuT5ukCqZmEEUSa9QyHaJmcZzscCu",
  "key12": "5UbSpwjYvwyD48i99Ah48AEnF1g6EpxShySq8dpfVMKnWET9hG91cnYBaR8CRw4BFruajkq9hP9fBhtESQSEzQ6G",
  "key13": "5YV3J4qB8SK5nunAHzwQN7gAz99BjLZmn69J1TcTtGuwPMr1UVWgYNpgVoYWeKoyDBw3agLRtsB2sca4vGEKBi9D",
  "key14": "5FxqkzHVHBuFSN1cezmcMD9EwstQEUHdYsWQkVvEDGNyckm3yiU5Mi8zRmFvSnVdY7qtea5hdR2Czd38ksBW54c3",
  "key15": "2wyBLq9P6f35fq6RJipKG7m8JtBqoTkhbUHQJfcJNJ9T3gdkaKY1QhNACsvuMQFUrAy4qXCYSitfYAtZxnMg2BJ4",
  "key16": "2PQLA8b8ZPFLDegWBx7nuTTYd1Q1VajPXST1XrhxaDKPBTS59AEf3i3eY7d9FuRzAnz5jNfT4A858sTwNE3HLHSp",
  "key17": "5jcWnXP3J3BnnSh28GXjLjjwFFDSzuSrkqPEPWp42XkFGNP14FFR7vP644qjMA6mmhTW8HqrFFr8VZXF7t6heNdw",
  "key18": "2LeF32kzBdBEw7ZdQvnT8dYU4As5E2UQRqoFLL764gnuXrKLKEbTbyeQMqLMTEqqYJJqVR4dpad4rn786gp6ovZp",
  "key19": "2UJbAyUShS14AxWcmcJ6UqWP48Jg69jmi6tHh34M9CQUCy76dJuYuf1f1FZvKvQLdzYDozjaoZHEe7HoaCEeyWsD",
  "key20": "m8CzehP1BKChNz9AHp1Hdz97ou3wcSNdmsCJ5S4xteXcNPbVjyDo3xDu6ygDfqNho8FYsRP6YeVqCDM4qKmTHzx",
  "key21": "4fbBJmpLBXUEJi4S7Xz7vwXs4GVseik5J4fNbpSmPeQuPSPrhGTCtUwcqAuWD1MGuFMBhVMS2iqzwQFj1W79r9qB",
  "key22": "2dBAX13hpqpKyo4s95AL6gAbpboYNFVb4NyEgTaRwUVR8pFcVka7CA888ro7D5EFrz6tCDgFJ9TXFWnW8AhHGzRF",
  "key23": "aoQCiP9iejeEdKJw35a8TCDzCx7GGRbFQwZ2fFnTJjMiwTHunnFawZosj7PtPvrqRi3VZp9gqLdsK2sBaAJ2eK7",
  "key24": "31LX37J3NMjg7TgwNjRZmndQ2BTGMPC5SkXcz2LAdaScWCT8ReiyNank5HPDKuqZ2TWu9VD9AdiToRNbmaRLhJwh",
  "key25": "5wLaBKZjQjBDvNEvkU8mvWbnrzQaDQupnTsYiyibLVXG4zQnytwDEoX5Kj7fbeQJuXkBxbcayNz3BVumuKKkQ5tW",
  "key26": "27rEAGPkVoKkZaJkdEZtmvTR9tJHrgc1jg1Sm7cMgACP3E1udaM1TjRB8T1fbMcV3rka96y7sdSHUY8fEDeHHVvu",
  "key27": "mttZGqcgkYddXPgbVtw7c9J1YHfu6xuAMXZsQDAMr5j1infbCnEvrjcizRbAYHB8ivxNrgamjY9vsK5zRFrteCY",
  "key28": "3HGqKuCA2S4R3NADSCqEr9FR68HUwefWp5KTEeTpASFQEcEC2uvmhSB8FNnYZ53HgDSXFU1M26ShrCYDS3fvFtYN",
  "key29": "2ZcFbwazbGS899Wkkymo1PHAquczgSTYNBV4HQ4cr6YG4ouduGv9seAYqUH4iEk5xfc8npaLKNDHADvZpdESAWdt",
  "key30": "42REbD2bS8jenkDCAUJe8TugWojQxdDg9nkLmdEM3JG4dZJb3RTb8CQesULqXLkektwAfJKSQXZhDcsR9s13rjtc",
  "key31": "4hwbuKgh4nUeJ1oxGw5gfvZDeb4me4yRcMkrQUgTFTAQsM1bUiQzq2EQzukEGy2JAhmmG4MARVWnEAr6mXPBHcZr",
  "key32": "W1Yyw8T9jajXuFM32awWmCwBtprnK6QtLWirFTi1Qh4EZMKEuZFwfD4aXHMFANA66eErzeQfNPUUgeMYjMRNjVg",
  "key33": "gphN9GvHMwwLFM3huNAZ9DRX5XdK1xHSS8U8MWX1TNq2syvTEo7MgXoqXUhErPPbq3M7ocnt6wtEZFY3Mi7R4XA",
  "key34": "3jE6iKuyZba2p5rgZZeWsQWxw7fmTmA6nrKhBjdPPe543BsQyEUUY1btH57zPQRDPR4hWpmYhvC8nv8FP1o7JqSM",
  "key35": "3Yka6dRWCkkm3PH4FfLvifbqoH2uPEDthGkgoBTnDhMFEr57tssg2Rn2HfE5wKpjMAQAWfCgheTpUgGut4UDhyd5",
  "key36": "2CnXw8Yqs83qkdmJWvgVJJfS5fX5kkbtyD4hHTkLcKfFS1gfhnG79BLPkfth3dfpxpLz61VYvyhgmrBJ3T2j5mCx"
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
