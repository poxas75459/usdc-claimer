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
    "2kTkPEVoufra9kYw9dyD4DqCz7T9m1uNoCX7FGoT86nWfGk8A5xPxDSqjLKhnx8QXZadHXXBuwtitZg9xra1P37i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxRnF21xmeYjd9neTQCk4qpsUrKQTD5waS1kxLesKo5bDUoN6KusGYVZ87uMymhpt1LJW8zbaBQpHaVvV1VwsYk",
  "key1": "B3VnBPW2a2VTKfv79xXzWeDD6z51JUFQHeXLq1g18cqhym7VZ86CZraBAwqxeoWdoEopLfSLMgpi4ycxHMGM9pp",
  "key2": "5vZxyXyaUgoQKoDkSg66CA7V4aNz9fWQfhJRvXsV52nkohqVxKUCd944T6a9dzSwDbQxYuJTLkcquPb2Fr6CyPeE",
  "key3": "3QtdVc2VuffhCGFzpiZRFN7sGoSp7C3Pkin5KTmJDQbAuojczUwm2geb4bRV8t455dDAuaQLRcukdEpzYzf7ctvE",
  "key4": "2YJxHFraj9dFfQVqKxKxDKid4Qyn8BDPKaLm3g3v5ktvrJzBAxieATLJBSpPEbdq3vwxPmzXzJQpwWnRvpJt1rbB",
  "key5": "5T7U4Uwty77aeK6ZpUsRxfDwEbimrURRsXqtj8x5RgD5zFmRRWTmkw8obo2RuBGWmUGoSNCsucJY4fgScuhk4fFv",
  "key6": "p1Tv4NAyZN4Sym2Adqn7d87LC59UkiEL9yqZad1eoMAebPUjhTi3xXmH4iWf13R6tcxsH6Mx2EMpj7HN4fjYYGK",
  "key7": "3YJaH3opTDfvkSKFvcLVLeTWC7T9H791Yanc3vwCqUxVN4CdwhgWkYMbSBpnK74FHeMZRyc8Rxx9Hm1ddAWwZint",
  "key8": "2BHqxCpfMsohrQbzEPVpAj3sn1N744przowY8tqs8rNhKrNWF61wFSAvR2SA6t3zhJryqXd8adfjD6o3aoysYSJt",
  "key9": "4Ks9TxdaFisNMQ7QcDjfgdtqYxWAZBZQDmMyC8myRewCHRyhweXpmpB1F3j924mPiBZGEkVUsLtK8BWoxytxL6Yi",
  "key10": "2dDXDW1ZcuwfRAeAqmZYZFhHPpVK9WCfzsySujcMXtytfRHFzMtUk5kAtG6EY2QHYnrJzvufyWFHYUx3L7dsXVxB",
  "key11": "4vPBYsgDE1MbesTSGmRUHwUzDrUx3nU1n2etjLxgE8xRLijxFxXsFT77RM7AmagSF5ALzmKUoUNDfgVpStboAZSE",
  "key12": "jFXUwjJgVSXerHvHgWgVVYsYgZFSB7nQiSxregshxitvs4T5rW7SHqPedCeZRZTFFQAX3m8eFLj9hzFaaeCEa3g",
  "key13": "3o9D6DjWBs1FZoCyYKuwM7Pedn2KxkicQVRYEUfWd6B365jncivn9RShxEBRZVnL57eGWCvSHnzhy6u3oU74gf6o",
  "key14": "37Dj5rJQvzHDudvKUdx55Sw8McaSA7MdxMxZUvEu1MZc7WtZu1kmiXFQ3yGFecbs6TiVSZJvrwMCWvafJogCQKMu",
  "key15": "3HabHRYVvQzgBLVt8oWcW12PHYwfEdFjMzjN2oE8aUEX5paJmbmQoj45eKaBnmXAE3gCoVxAPE4xVPe9jJsbsSew",
  "key16": "5DS5TWEaZtef7oZno7fs2L6y1FLRpBwDscwW1nPNgtRZNuqZc6x6Z3ZAMFLXyUqKbo8uLCgw2syhUxDhAFWfa42c",
  "key17": "YJNQwyNmUxVgJ4jg4HANRw25zJrVb73zXh9eqCmEU3yDufQzWm6ba3rFGcSb8Z63TLF4ZRQyZtmH448Js8vRtT5",
  "key18": "EGpGR7MdKecPEwH3dMSb2ytmDt1sDBiVRzp7UjpGTaWk18DH9D6SjpN8nVLabTkGfy3XfTdPNSEfjG8oPgk7dji",
  "key19": "5xfw4d4Ce8Xou6YSTGjviBA3b8ko9qztBx5fKoXLT1J7nWZPSs91w3F1ukrYYZHPCWktyFeBsdnyphkVMnXKzvE8",
  "key20": "5ujBCZBuU8aRcBmiZPtChxbCWnJkgT7GpBdBTGQe2V7cfXkVM6YigFzodEErkL5LTbeJVKQGSAqkDbQEmjhJHowK",
  "key21": "4UMdXUQvydu8eQTeGYVjFR6DmGDGXfX85zEP44WRrbdDgcsENvK76RDbqemdnnwsP96HSjAY3xqUA6LXL51m8WVf",
  "key22": "3ipcs93cVNqmjuejFEEiW1L7yTp7hUG4iBLVBQ8B2bmX881UyuZChJGyFUXxn1LFQxtfnfjpJ5s86s54MxktxBrB",
  "key23": "31T2Uy7FpLHHKtmiA3jbcGhY9XvrcZwMJ44qCsjSp7a6P643YGjtKMRfq58DfYFtBbhGzT4M4h4TkvCM8HXS1DDf",
  "key24": "2CdNi6AYUVWwiJG9nSaU9FLKfuJpSYVsNW5JwxboSBxYo4TiJwkwHzUgzHRksTe1k4qEmYw6d54a6EvFSFnwQbiN",
  "key25": "3umPgYPax782cWkGHAEMFLQXHYinZ9f3hYitPYdC6G6TwBBbUNW5nv2JGckJzWoQd8VtBDFUyohroz7Z8Ebekkhq",
  "key26": "48HSWt5XgcmWBrx38X4HeSZ2rLY6XLQXCQSVY1NafDhDxCampi4iof9YVsYyo2vchizkovV72QoZH7DPB5Mvt86m",
  "key27": "4J1p7Hg9vGQL3WgRdBPLbeJv8211DsaFfYNA8t93fwLK3hDGq619yGSh2kbSHshB98LE1n7MRSnyN52TRnjQAspv",
  "key28": "2AXf86ScxvzZEyovJhVzLBWkwbbdhTyw3jxtomnqSQRvwxR41AeVAKjF3RWUrT2uqqU6S9d8wrRWvCN5gSLzwtaw",
  "key29": "4QBdw7jJGYvTQFWRUZsck2N64UsddKJYZ1nrMWEfEbYtTGWgNHWx5DRuBR9AhbU5apAA2vA77Ya6APTXLtyUFi55",
  "key30": "4eXHnVkHwrn9kaZGUQhAwqMkHQEVRsHEVGfwyFkfZD48pCson4miWjQ2LLdTsPRVoJcTPRUpcQFRujeXkJT8imBX",
  "key31": "3pKhTfCWFnAjRCAv6sYtB9JbaEQjJQ6ZbfCoXcNkqdSmp18mVvTL15acU5H1KqBJedtF8V6JrE6dPK17Y8h8CHAg",
  "key32": "31VursjtVyyi5uej7ZysJ1AJcjAFrnmeG21XSunaqgvMWJZg1eN9U8Buyrt7TJF7t2pcb66tRsoPq7Gc8qWpygLW",
  "key33": "5nxJWg5TAwgWBsu3q6n3EoeX4QH5jk35NrG8S9ocjXWEpzvjvKaLvsprFREpPp3QHLHboFCkz4z5anxp5ukzhz9Y",
  "key34": "2q6X3h9TB9Vh5yRgsr2F3pA7k6X44H7F9iR7KzazpSUL4RzkyPhpJeaRpkM223rMByFtrKEeuNwvB27oqx9wSvg9",
  "key35": "uFcKqW22txr5rPehpx9ktiHx8nizS5bgPjmsgRHvJ2sdf7pWem8ngHhQdyo4rnoFHoyjTW4rfbXUuvyH9n8sFoR",
  "key36": "4qa51EdQQHEZ6iHhwzNdKafpAFW3AMF9LuSxq1BW4DeaGLhv87oLS6rkFHbT4qS9hpwFdcoRQCT358eYuU5XX6zH",
  "key37": "5rNx9GkVrazYZoE8JrgE2dFsWR6Q9dB6zCm1PSFYNriUyWG5WHwqT8rQjYutPLToz3DprVQC6jRQ9V8rJ3DoG1e1",
  "key38": "3YxsmRXssQZcrjHY1vBK1y94PL5xwkzrnFWUcsVzmPmbxQubyJBB3ygKikT2HwQq2rqnxd8XSNaocA6M8qdv4LRb",
  "key39": "no7UMnchd9MurQzRThpna3Fq9BwqzcHS6LBxWaQcwefUAw2GhsnNokW27SP2Lmw4LvZEeuQ3hWgc8GWJ6MWki1h",
  "key40": "KxvLx1FBVE15j4phbu2fWAZaugWJSgN1Ff5G5ixvviG1HSm7PQKSZLQT3WpLR6V8fMjKjasL6nvvMzCyoekdMYV",
  "key41": "39KYmso997gVkyJJvCKEtYbmwTvaKNwHZic2MmecWYSamju6LJSMvKouChKU6uK71usqtD6i2Myst5H2JgWUnkoo",
  "key42": "2SqJnsCMSNsQ4c2Wtmu2dSA72ExW8oixL5MYLq68tQL2Zf7wa2fMiAyygKrFR7jKxTWuEMvMQxmWYmdq8R2KWAYv",
  "key43": "4isTzVCzcN4LV7cm5eVxLRUb2kjL2NGK2PCsQDfXks6NTkUsnSVBF2LA6aePiEU7x57SmJVViTjK6R7y2isKEBT3",
  "key44": "W7P8LjKLZAW3bxqYcZKMwyuyeXaoypsifgdfkukZEvnc2eEUM8NrbaWCfHDPrN3kiXwpqxds2SxhRQmax8ejiko",
  "key45": "VPspfeZE2GjjmyKm3AMpYTufh99VkuCyNvSPCGqoQnuKKjrnN29JPjVg3v9a6REwDRY3qeZoRanvPe9Gmrdb2qf"
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
