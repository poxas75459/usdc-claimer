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
    "4LLNtfFnJpDzSoB5QaZUBdaT3t9TPADnr1a7bqHMrpWsGRueAGXQq2MhNXX4mq36nVQ8euxuc5z67WMFn1L8vxL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAdMvtP8PzXcrSGmgYYxja9ps8ZUcvq35nrz87YDsTbaob6oaK4t3r1UmMuJFrD3NDM8RX5jSDRxhehc9SZNAK9",
  "key1": "S6YMp1ydSh3DdioHgan6AYKWbsbXGeBY682vpsdMm3Q41yMiDFgR57x8mwrbUMQE1xq9Ld2JfN3pSy78BrWfpB9",
  "key2": "34tdh2MjmwYW4LPbip5FfkGf29h66uMNUJjQYN6UEV5VCrYJ1hNpChHjBFBGyUubno4hfnDg2ZGsH6caaZ3XmMZK",
  "key3": "27gAZY7zgoqPiAYvgtZEWkCYxHAevkyckM5LqWB7MnoFCLn4BdLYSPnow1LTDoutYG2B98KZWW4JHnG8eKkCAmh9",
  "key4": "4LqxHoriFKw2aAW5quPQxbMer8VqQJkMYoZxLtEz4SgDbk8ZU5Pwe3HzQkqFPEMz62SiYFyPqn5JQ51ke38NgR9H",
  "key5": "4wcmYCjh52cu3mWzux4PNTjiX1CKHcHcvJg7V4LDeZaBvMCYB2SbgKRz4UvaQdFCJX5B9jgt5eHTr1KPVxd5ojzU",
  "key6": "3hZU44gzYzVY5Pv6vk2FCSDv9F7XTqJR5T8gA1d6we3YGc9NYkEN1z823s7XFREVdsGgpEBQGKRaBxMMCp7b4YWq",
  "key7": "4hdjjxEw13p9YBT5Gx9e56zCusSQgj15KyQVTDzTtdZYV7m4BK9xiN9BfWUPSM6ANBZKwrkT9bmpVfDhE19tWjds",
  "key8": "4LTMUrnt5dUEcV6AE1kvvDVjkRQXp6EHGXvKwFzURUNpwfnqhRqXrm1o16QvaCgDhWu3uCWQeCPiy1dj8D2s8jyV",
  "key9": "3xMpcyTTzURh6iusJEEWtFfY51F6GhKsGMY7sSMR8foBNkXveh8ANa8njFQbo2FiSLf8qax2Sh4S1qWgYS8c6vfi",
  "key10": "3yJmftsWD2ttMdhN4mCxm7Jf91n4u5gitdF8YjqieeH82F7AUMzjXcdUTfyaeBjQjzHAiuSEEGrhvuzZYrRaWeny",
  "key11": "4sgi9ZBKwKmkgiV6BydZdsHbeuki5obzQomSpBTw98Q7FLFndCqkD3CDLRqgrB2G4jvaoanxoNNvtgddV5DGNwqx",
  "key12": "4N7Nnn1RUEG7JJyQYDKaHXoBaVx2kqGGfyn3gsYPNJBaKpHaepATc4utC6epjZhcvHQzkWQskiGEZfJJqc5xW3Q6",
  "key13": "5KnRGyB5NgUc8t82TfHo33FckxfXFCQsffXsiBLWfzs4dsouRWKeeBWGWUV3YaBm1hWnTZf3km9ZKziMnH6UThaU",
  "key14": "n4gHjLEWNBzKC37jncM97QCxBMUssLvHUJMJheeKdYYo4eUa6Npchj4chs8xQiqFCRJQ9C4FmqS3dVbbPBVMT8H",
  "key15": "4A3Rrhp69yPNtj21ndbVZUHcWZv5tckuLXUNKNPfxU6xkNrm45nkXvCdpjzVyMMEg8F59WxJe9YLbDTx24iummN4",
  "key16": "5FtUcZWQs2mArVmNk87M3UfUyRo6CN9bAjDhF5PUEhYcBQJK9TwbaKKuE1zi1KdELDNExv6fty8Pf9VKsn7PyhCt",
  "key17": "3KLM4Z98wT5rtuZv3apasBa9VL5Esk9XAjBLJ2B2U6ZpmxU5TAQW8nQ1t5Kkg3nVPoAUuSPg5bf86xKwTZf5F1dX",
  "key18": "88JNdVaBYbq1xPANET2rBm9J8C7vCNYxRLr7gdgL4zHcx9XZMh6GHFUhpgRw4CtrYJAizQdazQBgqy1fkD6pg9u",
  "key19": "JNskeYpfMkVeE1mstJ9sAyAJxTVqZdsmqpupJFXFKN5GUAH2E7iM1AAHU36kEwK3WmutWQtPwoYzi9MVimDZPwP",
  "key20": "2WPAJD66nCWs4ZnJVwHHwZQbtCQgsHcKv5mw6XLTeBykar43kRwByAHep7rtGCjh2EgGfNGb8UJyzZgN4TDjCgme",
  "key21": "2jKsmyGDrnQMSrNzHxNy3QBeFpQRui2EtggP6xo4dmFakwCBBub69Hw7KsRPdKaWRRJityrpnvnBboM6AH2uBGB1",
  "key22": "2XdU78VVWWJQ9rmpGAFiaPWcRMtSBSBJHbwZuGx1NqBTz82G8YXTAnfLzLVUAPVoMqKbCmMdquEWjYbtX2YVPLXh",
  "key23": "38kQhBNgF91xQasvpAGkdhE8MbR9cwUWmEFptPLUNZ6MprGvMEKwzZVZhEgmtubQNfkf6cPBY6dAyy1Xu4zAxbkM",
  "key24": "5DaXJw64SpzyT4oLYzijSZ7NSYoUFxCMphHDvbR73648T8V4KpLB6qgKbTdfTjskY2wNBVJZm8FAMk1q4QPWhLKr",
  "key25": "2FjmvnWchoVJiEoGaKf2yeMS33JrHzTeBoJa17PTxkQALkqNRx3a47BxwDCkSrPtWyxNctu2Db3Mo3XH7tW1UZYf",
  "key26": "4NzCH1yHohmoo47Zhge7BajMKWuhY215FEii7sporvA3Pb9QLkboB89mYxWdwseqwaEMLhw6sDwGE5LEsvxYQqre",
  "key27": "618EHLaAXzhBPofnF4PFjrdN3jsCrgTTewibePUdJk9jZYFNucgSQ55DwzDMi3BGGhwyJhs3E1rrxQdL1cTSxcXQ",
  "key28": "vLcEZeCDMcsb8qZ8GqzTscj9at9asWn9b5CqwtkWdysm7sebRrX6cRSgFfRHcMHK37UeBoKV8KkYH9JVxec3gba",
  "key29": "5oYr46n2TJndQe2bSCkGPyqe6zbuDw4Nbm28FuhkSseEQZQjbKKbbnAkpZU587hYyJLTXwyFfePPxZ7ZSNUgf1zR",
  "key30": "2BNyD851XhbxCF5jpR2JTmtXr6tZ29Nw8zbkB6vnyCepPz5uRyS3i2yjSj1yVTstWgk5xZu1ggfurbdNHtDad3QH",
  "key31": "2uyFJ88yeWgDwgEyFLtZF8ocdAtE7RiDcxGws8vAonZ7LMqh9tbaCeGgpkPRwkbjQMWeYJUbNojjhQvrT6HKNeep",
  "key32": "5RDfZ9LPYvMpUXtC51uEn8WCDJ8QNW6dUbNow9jEnSqrp4VXMBF6ZgBWxpPoCjkCZkEewffGsH6vuAC34eoRGkf6"
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
