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
    "ijAz6Em7wh31MwBJU6vcoo354DrKGzYzmsJpHVRXFR1M91NDgj4Hu4MzF6YMnaNR9dguc3hVZxWVssgAmfWC95w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZ2hJkqDh5T4VeqzZ8yu4oZpn57ioJ9vpxQoHPVnFiAgDDWbeXLeUN87TmUL576i73wFKGuiEDx6VZMbJxeswhn",
  "key1": "XG5pi4UvDeMiXTH69c7cGHe9iUzFEoemFVMUj59jE2xwEfubCLd3Mq1nDN2U3adN2xMx5vnERUktymjEQTF6rfn",
  "key2": "47nhuJn48zhftgVEX7v1coJYKyyteexM1w9gKWLNNwkjtyGE8SZ9CE5CJpwfkhkmrro1FBeNE886Sq8Cpi5KXhbC",
  "key3": "5UCU6gEncs2k4mVhSQsF6GGWDX1xYqmXi1dVKLK4gWQJJJ1NdCHDydRURpCjh6AW8jG9oE2QHzoh1bg26V1RcAWv",
  "key4": "GW6jxUtkQmVfUCa4Njvk5EdPRLD4y7qNZ8iM7MSZQaA4bEPEPFUJVKZ86kCEjTPzw7wpVvhokyGUKvu9ACY3Wpo",
  "key5": "4uSUncMmYLFjKUKjP7tnAZYTDRvQRCmY9Gmm5e98Ptgsnp6LLdYMqZegsNS4iC9wanFabwcjan2zFMG6w9qcbY2U",
  "key6": "2fspWUMc5n6gctkbvg3m9N5vLY1ec6HhGbUkctxz8SyvRVG9USSocSnbgRYrTo95mF5BmtdrnGDXQ9AmqPthR1e8",
  "key7": "AfJq26RRETdFeXP6vQ7i1Sy5ELGFRnfifuKHrF91rB5dChfbvb8afL6PT4EYkrAwKA4FR7vk2Q28bLf4a4AYcbw",
  "key8": "5WU43SkJyLg3Ejm7mVxQhLZCyvLzjuo6W4DHQmc2D9CkB6bUvkj2UTuE3VbJ5jVEVE6sRpWYxw3ozbr8PMaXA9Fs",
  "key9": "2Ebg5r56g451CvkHpij5R265Y3V7VjQHLFnPj6PNX3WdHVoG8dyiLBDg243Sig28GQVf8amrRWRafRh8i8KA9fr3",
  "key10": "5WFR1eaNC6xHNBmzxG399zhNGWRP2jTGVBJYF2WSdEGqx6bogZj3htvbzu9CGtVgXBar4JCQVAVChNrkAen7XcW3",
  "key11": "3dn7pV3nXGkV76pxaDgowvwskGG2PSXGNDjXh6UCeVrjgtn9Zdw6hY47xvtpj6oKUk4PJj5RvvTXvNKqBahGySGN",
  "key12": "59oJ2LpcWe2uef9LePPqVTKqj58bwBoCD1PrbXQzcESkp43RRjhdfcG6dnevNG6wWEXUbQMhhcTTLFp1rk7ydctr",
  "key13": "3m8JutuNboVPxv3XZoXtkSbnVVJZTMHFwGC1uGbuVUS2rtBj9SvnGX7yrQB1CwXNbJdy7paoXzehQcYKepgDA2dj",
  "key14": "2s6kwKhPrmDEU1Nu7pkby2TvYXrkkAyTAu92TPqx6WvBpgasURa93gPaXPfr6iQ1a8YJVRumPFKcwoTyBNQqP6CZ",
  "key15": "2DEWLN7tV6Q4qmc8VLE1xQXqQ3moKnDgUyV64tGvENGUSSTZhg3B5YtSjDvB6Cc84M7Hu7MquWzdfgSmAAiy5DqG",
  "key16": "zGAe9Q72iQ1aXeDi3YSjyUSaVZmLfQnhtVwSMkSJoS5tFXkAabQc3yTNLpwnn4PDELx8cbEPUbcdetdgvUfhCKv",
  "key17": "LsoKHTuQh2c8dqs14dLpBaBhPV7nUmrMwS2i1YRELpkNsx6A8gnpYeTFXMmiBYt9mU9H6a6mrSZooCSupPqSD76",
  "key18": "2PTjdpBoCFLMK4n8dx7ohwr1xguJVg49qFFrZGPcWKjxkE5A493Remsmg2CuRcRnhScU2Zv3vPhBQN81KRVgmu9R",
  "key19": "486ravCeyoZLF6vHjXhAhM45jus3TxeidPz3aQcHYtkbzKHrPvf5KyZprLDQ2mEvmK6BmuQCBpEHk1mDacmB2xBA",
  "key20": "2EzVFZjr4s1GAiLuJQiUc8d5a4qAsqu8fDeRsu6x2NSYCtCDdxovhGQr4PdYhKWJLwWyrRycqoLM42Vb6US8jAaY",
  "key21": "7HLXnoy1THFqdudakcwFMbj3ZyJxrkJetYAxcMD1Q9BcyQzoiBsuXCrZMjMYmgj9BsXxr9JVhwm9e4kecqCYWM9",
  "key22": "H4ukRtMrp6WSQ7C8czyzCiPF8aPYL6HTGVyhEJWDMR92VQfYTGZ23W5NdEZnUnoJYNRUXepPrYixb6MTkifGYRy",
  "key23": "4bRVEJg4C6sirbwTYTn6j8gxYF5dmDWjH1qnQdso1td7NehiFRvC3xg6BqRpAphnRrwGXQfEJVKLiicGjoW6AFcz",
  "key24": "2AQDHHie4dNmHcBqeozxXXT8nqqUMnDjwjqYjeDjtVsVnf3kWZDS48YmDsNADmXs87GspWB4XKEG4xEPejinm6KC"
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
