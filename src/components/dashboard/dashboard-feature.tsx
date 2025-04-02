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
    "oDevc8HroEUVQy3BJZZBj9T5AZvUWcrpDbvM3ZSy2cETitrfgc3tPqUkGsfKUgVzByRmzNsyP9wrGTC8Yfxon3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExcuyPhDM9fjLWSqhHrykiYYYyzKy6o5o455oSTAFZq6ujf7Q4icXzdudTp61PdTXEcscs2qaHba82G6BDMs6ub",
  "key1": "3mXudv5n6Kyz3NLU647V6ppXnAU4xAnT8TwVs3s9dBWyE8oQ4o7xaVFsnJ8FbHtEyF43PAP64eUgSyk6ntiyG5oe",
  "key2": "2sfspN2QspAB5EW5XLS7jKkQdh8byMxBzttsUdL6Gm2v1uvKXXhCQrCXGRhzRaRyGSbu7duEsjcXBLPhxKKGPKVG",
  "key3": "3HVhfQ4z9W47T3ZihSBeyCWMiA3aeXM4JYVL1Zmc4ZpY6kSG5Yp7a4YQc1cnX2Nesvk1TZ3gEb7uJUJaNoCjQQmi",
  "key4": "2rPpSVdHuNS5uaiHFowFy6TU43Kw26BWR3re2q4hAAJPbSGJ9RDgs3C759TBzUz4tqcevZmWCMsBC5w88GiohS1A",
  "key5": "2EiFeyEmnVmnrrgUGPREYycodqa8jkUQDX9N4YL4gZWYYcZH3aTQPzt2wRq5GE3YqoKFuAgFua6y1G13LxZBndQj",
  "key6": "4AEBcmvDKTWbRrFthFWMvr4FV7tqVi4DBLMCegJtSJqUfDbUAa5oTuJm8z1biWUAonZhtsgJxV98QMY9okhLCrXC",
  "key7": "5TwiFsdywXBR1MFFztjWmYHvY2Sy6YWTnTLsrWAdtNjCpkiNHKGMYE86SqV91zWDuUrJ6k6UrkAwj2ee4hxo8cMZ",
  "key8": "3XdkxGm7z1fXrATHwmrNg1i795Jz2jar1WeJyGAjrscRaJgG7s9DdnFzMa7D56DhcwFZ7G7FfwHTkVMhFXbxz3oP",
  "key9": "2Ea7hy4xmVCnzus8VifkoFHK6aLGzjjXQaG1hDxUMxM5aX5ps8nQ9h765jSHz49Q4uQVUYffy5nDdkXNcsSY4oK9",
  "key10": "5RNuZCS7TJ1eUEze11cgecSCFZiVM9XNmgahF465WLQuQpDcwN4BihzL3jHHwMS6SHzPiUqhzpm288mpHF6kJdLb",
  "key11": "3ZvAjfKeW8aDWku72zUiCh7rL9pvRLdMtzEoGGGCX9H9z9BnAGyKuDmKNWvMuZFzu1VL9BoY9mCg8fEbBSSmqfME",
  "key12": "2GWjRm2VSqs9vxHkdNP9yftidJYYcxShzwUZNZH1rx7QBMhGPa3T1GxjEg6M7r1R4NvsP6Jp4yfZC7vrshzyJx16",
  "key13": "2R9Qu1Mubf2QLuKQubie4u7EqK72yBYYAjmUYCr1EucxHuE7ZZn7wtJJEhBZuvSnCBW8uquiXnWd2VVzByVB1sSq",
  "key14": "5YAc4r6K3zp3xPcMrvCQEr4tQFm66gYCQdXjvfeHCYgz3aTNjncQ5c5xVmtixZ4ZBmdpgYqLh1EcmHkUgrYcWBwK",
  "key15": "pkiBEfp6aCZdYbu21AueXTjmxbnow4xn3gszsppGxLC92yduD5beduW1nGNF1X3SNSgR2CExpwQmiPySPZymLno",
  "key16": "2TkkLPQaFxuNBUazbKawvSbzqnij5YNWRKsAK6CzyDKx3wx2i81Vda3DsroKwTnoq7hvhkvujCdnjDnXA1Lvskpt",
  "key17": "4apyvm9bA1eJMrNCSZQuhLwf5JGLP8Lb5r3SF7fhQubJHRLVXweqHj8AxCM4kCiNiez2DYu3gDhfdeEiRGfcJrxr",
  "key18": "436SQK1UuGyEFkgRjytuCAoCHYSdxZWGvR2AomwpacdG5hrwqA2nPy4YuK5tgcmZRPsWDpkAaJkTQvUVkkapMimN",
  "key19": "61nDeJg8VfncBxDghkHkMN4Mz1QEzLR5oV8yc5hzJ5QXSfyS5ZJaRzx9vjr1fVjn4gwSEkNR7EH2EEYq5FqnZXtC",
  "key20": "3HLYeF6cP5hrUQPZUWKicy1DzdroZdQfE1rNxUNGrjiBERxb8mqFgCxRtGX38URGY1z5nHisFWmgZzGhTsccfGR4",
  "key21": "2YcwAkEUfZL2yNf4MmDi6t2xQSdZmWZtihAYd2gYH9zWnfd73rF96ZyfUL14tXBanMbBZbwmjwzNS9dvMBGFfccq",
  "key22": "24nX3AGrKADZXEfF1DeYt1CW9HAabATPV1jAXYnQVTgaqkVynM9AX1hthFUdhx7eys7xgyXjcVscqbVqkuBCvqDe",
  "key23": "3M3BJo9d3mgsjBHvbsDXktnkrwEC1KKtBcFxeizJ3vF47wAJkstHuhSGd5QYyVeS82r92YAo1a96KRm5AMBzHRtz",
  "key24": "2TP3AnmaEjVi7ufh2cUz5cvnf7wefrVN7AfptqjQbA482KBCPDLDdDNUY5gEPrMPmixTTXhshPPdNLqM8JDtc73p",
  "key25": "2Kg2BmWLXZGUR3YuJW1iErYs7mvKNAg7GFo6o7vd4Aee85BawMDyFbU1dPqzASRbR2ANcryofftPJPpozKnW1Zp3",
  "key26": "3EZkcfHDLHGVx59k3DD7GMsJtcuomT1fZgEiaJvWxtQt1f2oydgQijfXn7XunJpeievvs7b2deNscG4HydqTFw1p",
  "key27": "5JZaYyUHr1TknhtrN37pgm6ZjsCYH6yeMxjWjppSfzi8i6KZyn52u3Lau6ERpo9XKAzT551x6wqoitUM9MbSjiC",
  "key28": "7rut17kqCLqp9vRC3c9nfszwfBp6vJUUvTKem7Xuw5fUdjhNYSznv9cDgTqSd7XXMqP4KPy8oTJuVgyBRXqrfpY",
  "key29": "3rRmsRB2gww9M1D5jpKkAKxzUyKs7RXmqpPe6TzGfz9NmEan43EZU1RBNfk19Jmf2vbKyJq18ZjoEMamp8JgSsXy",
  "key30": "ASyEfG4i9Jh7W5pYnzQyc1LNQGRd13saWT8fZGUqCjcKBUNiGDq9zQBUiqZFi1L66bFPxf72ScoQSZKFtnRvtj6",
  "key31": "Uiuj5JYsaMMrCu6LhsVggc2pb3RvcQDRuLoPhxCLY62UxnvD5iDEWZcAXztix4PUHZ91efAH2F6YB1ZDxMtznNc"
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
