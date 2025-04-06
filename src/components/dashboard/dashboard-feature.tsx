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
    "2Mg76gJWkJ6off3CaB9YirJBQ7kvLW9i8yWaeXvyQ3USJexEYTKuHbzBHwnrrXajYiqVPjT55ThcrhR55aASPdTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkr1waHByAhP4NH6ANqGJLjwcDDBBLC1rvTxwLZoUTjgkHpR1c1EDcwUC7WyXqD8rPw9bHMcgfnAeZpj1FTqesv",
  "key1": "3CCAiFq5UM6QCXybKUNZB39fwhbM8PS3T9gG9MrmKZHhK88Tr7CA25SATr9waBDpQngu1EAxZ64BuU91isCtv3Pc",
  "key2": "4mp8MMPntKf8fDGHSruB7pwGRnidKah3KT7qFUdXqaCCuucfmEn5ijojMNA7RmyM5VzmhLLnzmHCuxXrmNQVry5L",
  "key3": "AwazqtMCogQYYsXK4UpSQNnpy9Ce28vAkNLhEGut7vcD7Fkscb72QUUgyCcBk4sk2Uu78yPaUg6ooRMHXdACp2r",
  "key4": "4dUhTrye46M1rmiY2C3cFtiVaABb8CzDBdRUAw5DpwcY7uHnKY4TXgZjaBnUyr7MMefCZVoHWSTQxBcznwSo5Nik",
  "key5": "3SoDgykejjx52jx8Pzx8qmAH9QZzYYfYSvkTb2QrfcYTYLeR4xm4QVTaEtdhMn7pFgxk9eUP45uFv3DwwdHJS1dw",
  "key6": "4f3uHCv3KBgD6VyEGJwABiLRCFnxUhryv5bc8sg2sZzco3gsjLWi9EeAEUKPgNpcKqfUVvZPzabB7KfwiDXV6EQP",
  "key7": "f82uWRAqtxgWJ1vEsvoCB8J2ftVeiYEe8bdD1tNj6C5C8b5c6FTT1Uc7cJkXazRp9KE35tmAHNNa4U8m4UvqHag",
  "key8": "2mYM8jiaGTfpZmzKLtiiGYCJkn5iExD3f4UvmRJrCmFHZwh9y7eHUGvCwMvQXSJPSGSVR1PV5LqPnJihgBtYfmCE",
  "key9": "2ufebfUKh3uztirYJfPRxaLFdnKdXSKPwTVvX9DjndnTWcCobh3Lw93WJfeXnys1WG5N3LzPd9FGmHubN55ZaYVK",
  "key10": "2DPyZvB9m6uaz8q5KuSFa5BqrgZgkaq7c3AeNbtazYv9uPXAMi92QJepuACseU3kQMAxTAKhpTa98sGjJefJKQXS",
  "key11": "4J9RpEAXRgZZL8u3qh3feKhR8E8MVULbaXULhozGQfNrYMu8yumxNq47wzjLyqLcY7dW27UQVE7gTX4hhqYZNXL1",
  "key12": "4jQUtLnk1NHp9pJrK4hjiLZ6bQ8yJaFBvqh6gWqGBAUqhMwE22ySq2JzZMtun7PbTLqeDegwZcbRJrSW2238p7Nx",
  "key13": "3rdaoG1sRmYb1HinpGSfppL91AxdUSWEHPYaet3iCJtMnqDoxAU9U2o92sJPw2LkajmXvRjRZ35mda6kH19YuhyF",
  "key14": "4AwqdQa9YpdakhTgoo5qKYEoeWw8xtgVRhYxQdDBjEuRMPgAqLnc4pfxiTE4E3uZ7uVvwvGaAPbViUZAPQCetxJR",
  "key15": "2KmEyEPCWAh6v4b8xqHvEktepmKmGhMjx6zHcbMuDGPmKozPsZT39iH7Hqtdyw7SzWJCCC9xkQZTpViH8yjjxkwf",
  "key16": "3mNreQAYqwP8jbVGgm3MNKp5X8EXDJAxKprDEaD3P3n1sKZ8LWzLQDjBxZ9qvn5PXEoNKWJkZWQdYL9e3fQ4GdJk",
  "key17": "66yTu5JPr3ssACipGThpwiwNGFpZmjER7kJZ64HVpsVuZFPyoJ4KyVnJf8jETJAjW33YGbWRUeT7dsKi8VaqyS2",
  "key18": "3TfKeeduSiu5sEPjqBtDCd9vKNbWaGs8DGhQ1TwgK3MZ2PoGjbaZdQWhP3AeHSXD3VgQ31HsCrRyNiU4F7V4aJLx",
  "key19": "qzBJhnbHSMYe1J8tHZGYw7puKWFpyogSitcrF8akxhCh6qa9HRjqiAi5W2YDq9dTh5pTpHUxS6oDD9NbkkAAPPP",
  "key20": "5jmER1AK8sihodFGekW7JNC9y8m48ZhD1bpKbsb4k6iYnYGPnPwMGk3ZHNGH41vrXbiZExja2vDHjXvsNcYoAZSH",
  "key21": "oDRPgpSCskgLwQqAPCzGsMvcUq7Sem8aBL2MQdkM5yihZyiBq57kQnCgnyMnw1V9GboE9pVL2SPtMA5FJVPbqa9",
  "key22": "2Asyj344Ndxku6EGBPiiWhMdweDtM6B3c3dP9YrHbatMWfkZvw8RdK1GryK4xwAKJeap2TjnRwW8CcrYpvWgGzWv",
  "key23": "4yK1YT1RfhZBPjJmJo8LxH3WFYrGoyj4t9KeMmRYzMrKCKeXDd1NDui864hTtascDh8G1uDFSZP7ymh7poPgUypF",
  "key24": "kTvCKYYiC2S4GvSTrNb2gyPHKxAY7XULVCxATjWdXfyF7vui2fKdenH2iNqvyCKAGkztQtida9U5pcrgmV4qnCw",
  "key25": "5J4GhDdceYQuFggSw8tbi892AVcLJJ4fGNruSjq9mJdAz74dVwaU7fkZMzPNKRWQEUbbxeTy4J2xjdqhvAg8rcLT",
  "key26": "4DZHrzfsMj7fwGnr5JRsWr6KnkU5ym5vTtLkm6VNHhL726DQg7GZVAgPeAzKPdeBT6NaRv4wTYADmKJe8FwHJvQw",
  "key27": "5wCFmB7TSXkL4VagAZWPyrz7UU1CB8sd3JwF5t2ctotEw2Mr7NneLGvJa5DBw119ZeCt1Cr28Wb2qmdB1XgH155W",
  "key28": "4EMvztwcu1K4uuAnzG4RaH9mUtCt2fNrhPkfN4oo3wfGDcVtgVoCMvv5PrRqWs9aYyY1ZfswfhaNiRoroETF7vvZ",
  "key29": "5NkhiqFMuoFEe3nT8pbYcVU4MFpBkD4L5HyJPhNxZsTS1v9PBpx7SRKKD6kYbjshtz9Yu2NZVSrkod3kcpoQWXiv",
  "key30": "5dqmRShDTqdNeVMzsJXRG7kL3ek1mSMhsVJcsQM5uzCEszSh5dpjznPYqwzaQPXjpifsmL3xUNTt4qh8L8Z4cgzC",
  "key31": "5KpZAdUcBquir4a1kLTApy4ghsqTdouD4WL1UgEWDv3dsYPuFL4aNsW4aHmdLLVtLb45JbhSt21e2ZWnPR4pjBUZ",
  "key32": "3GRmTCwWcJJVC2qDwbUJZibSksJfxubh5ANmHh4JxF6fonHiUb14A8XyHMnFrCTdzdNKJGkDH7NwWMNf6E8p1h4T",
  "key33": "24GDvVV2WtpRAdLgGpf8Xfku1gtWmp1dfLQsecQ87aR46tskcDFNorYpu6uE4sPyic9Pxzt5MbrwjKAW8TuJKFa2",
  "key34": "2oijQRuSLCGGY2RZqKeRFR7KfWsxsv7kYscET77Gfu9q3L6TZ49W15Vz9YsvDfsdEe3yJQiZ48M3NWwvYJjUrb58",
  "key35": "Prj3ykk3H4KnpxRMYJHBCkEDxXF4rtTVzt4qspoGxDpr5UBJujZ38GjzDJFV1wriMxFXtaDKB3ZoDKuRku6spGc",
  "key36": "5DiH79jjB5xM2KqJ9giBzGU8QuNFRNsFyQCrHz5g5LSjymEnx4LY9B2NF6EXSYW5TnBEBDSkdMZirse8n5wPKV29",
  "key37": "5ALDLASbR5FRiRsXCqggkkmd4fxTX91Bg8DLBy7Hf67mAdcE34YGK1z8E2jRjVDVW3qsmWXgsatoYYGUWV9Rjab6",
  "key38": "3tGKSAcjpdqCCwsf1G3LgwjNowXchvcHHUZ6fkC82XBd3djz7E1tgUc95kdTetDA538LAUAf2iGnRChNaDBRu1qZ",
  "key39": "ood77bRBq6ZaiyMebofXysjgAygAWzQhkUSMGHFjn2oRqtyxjRUbQhLnAnobGP8qHwnTuqytZTw26FspgFmBkp3",
  "key40": "22EWe5hWSS1Urq3GnoXgu6k9MKXUoxuc2pg2TXmfy7eED25r3GargPTLzQQkDNqZ7rn4AFFUTBJLzgTQLoxXXxBj",
  "key41": "4pHMJ22NGZiud9yajvfxoK3vNSP6k3vTw4H5wnwDh3gLDSw5vsVDKjt6zk3SSf9Nn5FiYKTw9wbS5K98ALQSPwzv",
  "key42": "3WgTXrVMBnbpQzmvrikFtm3Z9eN8dTSuM2NpgcM3TeGMcriuT177w5UJrHdf9yMQGJswahmafNW5tahCMfEriU1"
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
