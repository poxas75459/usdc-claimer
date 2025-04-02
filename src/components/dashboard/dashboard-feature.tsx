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
    "gbZquCyTq2KhmeXXttd5ocrPpn67X9QFJ6EC7NdPSVihs2f6hc5krkBMGt7e1gwtnTGXASvdgnRjFv9RpPGPmgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LGeFzrwaPieGFRXD39RAWrjkpK9W8Gs5BwBCvPvr7DQUT6Y8dEGS9y7iNzoDs2YviB7sSvPZZPBqrtEuEUkuVYD",
  "key1": "2Ca6dneUcZPPnHD1qD6NC27DTXyopZrJT3fKUwRr1LcFCG2JwtkEeS6sgKsUWZJxamZZzhhY2dGsVjEo41voe8dW",
  "key2": "FbP2FHJcEYodArft71cXw1XKPnQ4ga9ZrWz2YCxadFJdC1m9GWkkDZNZpFYoStAzxtNjgHceRgZvjRMsazfYfpb",
  "key3": "4ncMMbnHxmfY6tscAHdXkDextLFJQoWSamzjYQcbv1nRiLzfRcKbspjYcP7aai6cj6yDK2YUoKcgb9bVKCfcnkiZ",
  "key4": "3tPuQKCKAkR9GjS8XLibGU6eo2hjanweT1YUYGzNxvTNHuDVHr6tz5bkvzPgeATNb4v1rBqJh7JcpETzqa6zq6xg",
  "key5": "2ntCAPbjDEtARrioo2nAVQfeVzMA6WmEFAKjfaZqhCbQXUPsDzebtUWXBU3VZcsQ34duPbqSnjAc8j2Cz5CYUgE7",
  "key6": "A8DM9PruKtJzrsYeUCy6LNj2V3roi3vkh5PsyLKYBUMiUFuxcyEHPKzp4oDqs7gMowbsihWTLjpwKi65djfpBP8",
  "key7": "5ENr2JCN6i7EQaLwKVRGUiqGYvDzKF5AwseTpYdXM7U92giYvf6uG8T9V6Q1p1VfnxgDjZcrkzTPHgZrYYzHvR5F",
  "key8": "Xcw2pEgHWg5qcFZDEL2Kiny8aES58LK23jxyabTAYvekNLq8skXguuVfnMxRHVyemDTzzNmKqkzP7cP5VufNYYh",
  "key9": "4Z9CtBbr8R53VCPE9TG27HfQbLZ7LAGSJ7oRdssTjVkWRrXED7wJCDUxxWnUQLSnbkC4c1fJPNWifVux8sp5aG6S",
  "key10": "4vs9WVzN8NTdMT6cCdoRwxEXAntP9KDZbxFzUScPYkMpfp6zfYX3jQ6niBmuvw7vFYEu5ijT2PTRVbyvV8jhRgL6",
  "key11": "4bGZfTf8AEqzdh6hvHVBZ9P3WmBiTq4ki8hxJbV6U4CcEoVBvXynMUx7cN7yqamFKBdpps2KBPekTCtn7xSUJz23",
  "key12": "2836Zkg6SfuQi35uQLWc4dF1MWSvEmExtJ8r5hFGFSkmkcKDT5CTEKbkx6CkyZRc3bHn7JDFchqbjuDpnRtdTNcV",
  "key13": "smL3evmzbNVXkjnbAs5PJmH8j7HSkv9S48Hfzw9jjSJoKLVciAW27XdTV3jnw1PPZ2N9eWXowKB9v1gyd1H9Rqe",
  "key14": "3vu2SaLBWkzd8rLEros5DjS6aWf64gypUyEtrZss4BWexcspqp6YvNnvUnkWToYhQMYaAks18c9REKeMVhoWohzC",
  "key15": "3BtPrKtuhynPR43ova6AS8HSWt8qDYs3LkAkYo6hTPQ4r7GoirCzNTRuU3mbszKt8ffKWbY8Ms8iErg166ASkRor",
  "key16": "5YwiEWhugWTqfUShkJ8XEwPNYUWbVs4EjN9X3pbQaxFEunu7tmxYkjGNwJdLYm6xZnhsHsLZreUwcwrBa4Vgz2x1",
  "key17": "5quEdi4Qup8ogeghnk7yaRwhhp1faWFn6WRx9Mf6iAhENqrRgVdWMMGAKZ2G76L247fpbXedQcSiBjmsFmCKr9H3",
  "key18": "2dBHenhwvQXmChN2E1X5o9WXBhBCqRAqySAXv85XJx9AmtoRUpMHo5G3mrvo2GF6hRTzo8Mt4FzynhxGCfjQict2",
  "key19": "36qjs4YsfW1NcVvVitHNNH6rZjiNCVszLYqjYLGoZPV1VhBFJRgG7RP9ytCjrwZV9eLCzyytVSPbbcBRZtJyoYEA",
  "key20": "37Tvr6dUsf7E1M37fdxANQUogJmcQJ5bSYE8oxJUjDH9vmTnsrfSZYX27HXJXyxLpjip2q4ZuL4PG7SADpKNUwre",
  "key21": "5bte56Z6z6VX8cGFCGBPtby2BdigQ1PjMkCuFizwaZ2EABMVqP9NYyNkL2gmUXfS65cEjjvhumvBMdCY52Eda3sf",
  "key22": "5tk6ETEtgcasvS9pY6wmK7aRNEcQA8agGxPjs3rNDxszBCR1pRqpLrsB2yRW5S6F4RaaZQ9PJUNkDXHjaZqaMGfx",
  "key23": "5xjWRQ9jTRrmRzaSZpGVw4H8SGy851QABBeujudHfpSW2ki85RjRFMsoM4gJWNSzRrmPXvm3LC9yAmWnwA2VGJ5E",
  "key24": "S9tVqFFW3xcWpFjxor3e22norhupy77fpt1SfiF7CjqKmCKDq9dLXteuWm7VZyDp2A4V1hyv333uExPfy3ueYsy",
  "key25": "5EJJczNNRFL3HpkkuqZX1whvXTk732SpNDMAVAyoiRB532jErHbZAutVNzHe8tz8A7tCCK52KkB66zHQJgwDewzW",
  "key26": "diyM3cSNfjkLeqp47zztkRCTMESHkqY2bs7MfP6ows2u8GE7rhT5rSd857XALpzdN7DLJoNW9QkXNcCQcdNHhym",
  "key27": "5WCwEL2K12QaYRTcBb9jgfE5guTMXc4hsRuXtxHDdviUQKGjY8cRtKSQ4sYjGuoakFPTgMuUcqSp8cQQ5e369KNd",
  "key28": "2HzkcoaPng2634BrAHwv1ULPk5cR1PD5sMttHsSrYPuuHdn7eGx6GKt3zQKXigosmdiyAXfMc6xq9ZRcKbcqvNsZ",
  "key29": "5tJhh4UwAkZXqQq3N3o9qAxC6XEJsFgJbK5MMz7tbys5twmUz89oimwYGcqdHZXN39SwPrSwPwhfjobcy6BRzRxP",
  "key30": "fHZP6h6FWxj3Q5QszPXpFDdWtTjMaW33yRwovpgjM7o79r2PyxFbrgcuuRpZwfwhLfA6TP3pvrGAit4G7CRoAUv",
  "key31": "uCN2Uo8mUZ419jQ7qKCMrBjqFquTV6sRdLFHM2ErfjMVX5xWSwiMjLFBukhQuhtcsxLFuiMD4nEEWvr89pyKcTV",
  "key32": "5A9kPFiYZHvvbqoHENm1VfFGiuNAszPwYT8oNhdracDJxvLhAmwQvq8nqczHVZYoCv6YCqk6PUNWXHckKxm1jWas",
  "key33": "2mdZRL3iL5kWjN5WZsCKTQPuPjYMivFMex53AQRMvuj8sqJQqDYLMdL7kVqm4z4cd7tdu1x9iagbfgmLGYoz83Bg",
  "key34": "2day3wdHStz7Bv7f4LxGxmFRUTMgjr2NB9cmjnUdb8RWFzmHpkdeec6U1hA2Gcu1t6CZjqRz9akeeTsyNuXkUqah",
  "key35": "HQtXGcmWfCsDJwihSoAM7rwR3NrUoxrRSVUVrtcMU77U1wrn7A3u37AKezaSabo4tDUZ38Y9qemCWPERVM3aZ2a",
  "key36": "2XHKGC9JY1cQXEbekrPVbbECWpVf1EjwnzPaHVYKKYbY8g2rLZte6ftuD55eUqrfF5EafHpemjGLw1A8JJpZjPBB"
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
