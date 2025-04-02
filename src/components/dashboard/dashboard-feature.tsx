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
    "4Quwk2tubm7FxhXBMKjfjmoRfkeZ1u29SsEaGL5Jgqm6JvAAQbTFiy73XCi2eVT2vTnqN1XMD2o7Vor2pT4bxBNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t9ySSjRngkWPUGJ7226GAxUJQaGMDdy2mmPWwaoudkGD4mvFSQebffuWbNofb2RPAfShYHQfxtTTDycFmRqjebP",
  "key1": "2uazF2buk9u5ziQj2aWPm1HiTv7Ra665dRAXam8jnm5WDj4uWxa2jVMTs6HAZtB3762ye6RkUMYF1SCNeygLAbHw",
  "key2": "51jtT8cqYMhExaxYZezvajzarcYGPvUmYiVB2Ujk8D4BLau7MY7xCa5U1oAoLL1NKtFuJxqqJCFBqY5hUjhUqW31",
  "key3": "Usrz8yyKf2nY7NfyBJyyfAeVPZSFhZjTdSm6CZCQLrBkkv9TcAes5S2iwceTpnfGESysEkSvfncoCwNQtNVUwhM",
  "key4": "wsPG1zp91Ts8Lbmt8TZYekrv8aixSBSPEoxkffTQ14s7QdWs4Nrih6j4BSVdirD5pEHAP6goRP9PemFk39sS7Ch",
  "key5": "2Sa1Bbw3aze9xqX17cTh75fh3Uj3PKJ7MmgeiURYsectto8SSGWWrcMH8eqn5rJvtw5jewVokPurKBzHRn5V215i",
  "key6": "7U3HwZDyJA4JEdrrEpmyzjeLZxnbdCdgNdfkvhnT8aT9qqkxwuCCED5PP5eZgktYwwWNGbs9vj4QQQZCyxjtqSE",
  "key7": "5PDhcojHGpMFYxzYrQhdLrVoeXiqhorJYuSsVLJMErzvm7hZtWrRJxh9vreUQNQom6csftnav1uTxrdpDFwzohqH",
  "key8": "4uqMhhr17RuPJtfAD99Uzcis8c4hjzZhuBC8TKmo31vEB6NGtKoHog4jFGm693LFdJmYnRoSJDwsUh7DmaytCFDi",
  "key9": "3TjS3AJMNC4eDjq9C1DtQrMvgD75SFE5h3DNsSjdr2FCWEaa4jTBT1wm8C6RYcDsJDUtf9eaEAurmkJQYHGj58G7",
  "key10": "3fh32kDr5t2FGsgXSrNvDP7nh3ZJpQo5eCAPEnqc1o75Smzpeo1yAAnRcDh1QYucLNMwYzrdkRqHXsz79MjmE8V",
  "key11": "2KpVufJHcRZYnXuMWbxrS4UPeiBgYF3VYQaPwtsvgRvWojYGJAHamaCMGHneDLUchzp6b4cXumENC3RYybqbqvA9",
  "key12": "3YYwWUATtRsKjAdDTT1FmfzsNh8WvMvZQYWWdVXuZvvC63pXtCr5ZTUU2wpodfYpZD7e77z3BxQHaNQ4NKjZ7oii",
  "key13": "2swr9xmhQY7aAUjdmasLAyt2zBLety21bzaPwbycCCY4FLkq4uR8KZTQLRvvd7Y54pj8ePNQfzyExMvkSSPzdeex",
  "key14": "2gNnhCMe4EMmh7yxpfLEQXMWvHW6KPZUKq3Pk2t6cHeCBuGSg9QVQznqHYmm3uCgrQ6a7PmNBqUoSBi8aQy1ATNn",
  "key15": "3HLvT9mZPuLeFyXWMhVcgYHQZDo4hqZoB1xUiB4JYM1Yju3pSmQSPD3ibvZRWr8zq1fd6BYMXAGMijvw2siFMEEo",
  "key16": "576kU3SQQ67C1251w4oGvV182ja6zkTiLu8EYdrmhBYneHbKoCo3pb1s8qYL1g2gXWqRdKzajwZNiGxaKvmKC67T",
  "key17": "4BhEsYFLdeNZgwQutDr7C2WgMyruJmTdBWvQShfNNShtcsB9jf5rWqHZqoTBawXDLddByfLN7wuzYmWd1nUFFSNk",
  "key18": "4rb8yXiqHpx7Y144saFiFKadiEF4k2Au4XeWu2iWMdZ79hxfMzgDj5Ad82ZiJZyDCAjtvZZvDqJDxH4eZoXqaFe5",
  "key19": "4PPvYMgwNPtUMtxzKA7VK2ZUznYh8VGkDyexpN1LFik2BDzixUxBuzqAJB9gJB3gKPM5GaS1kU5dy6hF5Mv3F5tr",
  "key20": "39zDv8jYQJTxjXm8nuebkfH9xi8H8QR7yxits8J7quuuQoRqbxg1mFTD9N3YMQf7wLZAMkAmXH6svdHBw3rYMiqL",
  "key21": "5PpNVTszBN5bRqaY4qkjhKt65HUZUbxYEjvhBn4BSfgdfRURoRurjL4Uac4ZgWV4WRizbpbghei8dq4ptwA2ZGqz",
  "key22": "2Rg4XG11jS61CevzhJgN3Hfsn7CowDdVKjpvqRxT8uw3x2C7bmMfE5hKfALqeQaMcyo39S3hzc4A5XodJnTPK9vQ",
  "key23": "4xATLoHvDhKL1iJNGN8XqX1SWGyDmdSbuWDBCHVSwphRo2gWhPnqtRtk92ANwqeUDBRMkTDLhZPTctnyrHtvmQ5N",
  "key24": "67E2s4nNWYkBvwYV7Azi1J47friWjhTvgc321N3iJLMiiwZ17qrTZgknHCFE6a4dhoMuxTqrvJ2zt7s1oYJVv9ht",
  "key25": "FT84hVMpFrTYGJNzbxvLUWqTWttP4Fgwub7B4SrXuoSyw5yxgHZo7m8S2UzoD2vBcokBKaNeHxfVsytJsX4p5Eb",
  "key26": "2ntnh8x5fZh9gC5aZyX2hHHx3iBxf7w9tMaBqcivuHMZ5Z2bQQcGekDRBd3JkvKvW3dTWvqCFhMbTzC8dkujo92W",
  "key27": "41i9V4unKSBeE5PRhvj4MYWvrNNaem4VCs1uu3BY4vVBMwa4Nfzo78JYqeypf4Jp9hZPtG1riEYRPDQC96jn25wg",
  "key28": "4ZJwxybPWibeZX7Q9ohQiC8JLzoC8pFbTxMh1i9rEGcFXvjk2UHeh6J1JcqL7YqGd1hcQWKVCVucmVRH3Mp7cQrx",
  "key29": "3VkL4W1tpQZeo65jW9kKnmwJs2yjaxUa8SEikXRSbLYcLB5T9LLydGzSXyEYgHX3PV23o2wUNyDbdcFzSYb2VxoA"
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
