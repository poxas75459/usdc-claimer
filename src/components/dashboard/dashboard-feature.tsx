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
    "43K89madCEnGMUn7WNJi9gtgTfS7mNbH4nLUEpzBaCbdafTn4KC4cCRw8FW8WjdqwGBDBDEqyyoZkUUmvxnNRpHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ByhdvZK2Df9imZSVUqKGdnaRZ9RaW3PtEYKyzdD3Ua3BwMwLG93os6A2PW4AdR32XoLVetAenNMr35V2rKogxgg",
  "key1": "7wRuxNAVnnSKR2jCFNA8xQUwJpxjd91NThJPg1kwrRAuAgkcZoTzEqwXHV2gCspDP463LNuwMiQRLLJCpBVc51W",
  "key2": "4bRomJwz74bSkL7z9BPcDJmLDXzKftviEhxYcZQCzHF5zRNF3TUkXuJhoXx1bHUzjwej14rHX1nwHTw4bF2XBAtv",
  "key3": "4qfXjNV9ThFfDczcq7HaDM7deZ52buWbAofR3rZJvwedX31WwGFeK2FZPQvRhqcgYxoSAymUff7kc5EGwVRQuqzF",
  "key4": "3M5gEQwXaNeD3XgdunmU9PDbLzwCPWbArsvebwR7NMGxntCEpShe7gf6YEjCWtJSv9gRLehqFfZY1nraWMcA7ZdY",
  "key5": "4dWNfHCLr8TPMUtgQ5BN4uuSMxcvbjxtW2htNgETZ8f8g2DziNxpSHEg6zZ5kknQJ1HJFNjeuNUwqwPALrR1xm9Y",
  "key6": "4zuLYEXGGtncH4RaHxfu5S8QmEjXMLRxca4VuBkshXEVZdjxScW9JVn9AhkW9jmYxV6fgTjearYRLbQt2swR2Xa1",
  "key7": "AMF7PVvZ7gqZXP3Z41oqMkSeyCgpyLtqNWZRBrBgvSTMZbPhJuppFviRJHEXzzxuxVnSxmYNt5M5magCcHngjU8",
  "key8": "5VamtDTpkE8ZXeejCfUq3VYjjQdGgaWFnbcXpKEbHwHCXESQ5igbSMXkSzJnDdD5LQ6QFECNpF2dCJqMZ5EjFrHp",
  "key9": "3KEzWPgPN2Y85HTtXSREwh4Jys4TWm4ySEjbqLax9NKmhqyR8xuG1xAjYXMagQqzxUu1aFVAp9bpq2iHDavmhHZf",
  "key10": "4k6qgB7VyT9NrAWGnTXLLe2JuRPWXsjvg3EkBxzDhkzxzLqxtSgRLvFHD4NBh15FMFiu4zPv6bYdmTwjCRjgLuD5",
  "key11": "VUueXf6EmEAyvekviv3g5demqHznmZq8XfgALGTJoRWAHhkkWD6EsDAdTPYCSyqNvtGrw1mKnuDW5wvBbG61ssU",
  "key12": "2D1Rj8a9HoJ44gfTevczkfkCwGthez76AyQRn3K6AdzuM96qw4ypu8q8eoWydQ8MBQrR2qsDcMdEmcriHrjWwWsb",
  "key13": "ihaRFsk4TUsDqTK3CMPgDtY7iyr4NrLEo4sT3ZL6fH32YRn65m2YS94MqrqWBHCPF35n8hphceRMfW8HGVn2cCQ",
  "key14": "SNnEGMbFCHRKXhGk7rLBLcpb9toh99vVWxXpWSXngJfW1BFQyJCWa7wDGwgYCnzHfn8m91NG2XSDferENA2Bkyq",
  "key15": "36HkGHHuJk48jqtmF83QUbFLDNL5dkL7CNaWDT5cG7rjzndfhSf2aoDDTHDYKQ24p8vGN3F6WgXiEgjs4iLukYEZ",
  "key16": "38fQugGrSSzpeJuc42PUAY2DHDAefUXNvTbcVyW87RYdm6f9S2bkS3b42bNY9rFHUXNPGKfE472X5JgsmosyqBzh",
  "key17": "snAUVVoSzxQ4h7urRdW8BhsU8eGXc2VLhYVBrLQyjF8N44STEL4GCbk8cgmWhkMruQyBJmzJWDTARNT6gzz81rk",
  "key18": "3UQjehm7rGs74ieGiMgaytFMGne39wSiXohDPq2Qgj7adg7tMyKuvc83rmEpJWqQbg6uF8QaXGduTSmsx8NCiWgB",
  "key19": "8XZyRUkGeEMzYcDv9scyGRtbYMHC6QNqvnmrVvtYTLbbfoL5Lf5tDGEnrGow5REPttHmmq7WeLH4wTSCsE8hRjM",
  "key20": "4vUdpvg1njLvvPGjaKUyBPuC5T8vrfJy8wQ7pyU79AM53JLLWMpBSkEpo9hAW3RMfpbg1FAD3HL2NPZdUHNsYXHa",
  "key21": "2fxMyo9tGRdrkPRqDbakoqdxN7M3n9sJKyGNtmqR7bTVBZ8CHX5mfHh7ymfhuVkmFv4izhZmUejCarTEJT9xBq9v",
  "key22": "4ZPew9ZdFUcJZcqzWHQybWG7hsDK62XbHuaTB5t6s41Jf6bcsUVaJdCTaqcptwJeusCuyxadJcktJW1HQnmJyU1K",
  "key23": "5ERuAiAqgkK3J8cYVCSbwu1YeDJxrznFavPWvm2rCKSnQ4hszbRzQryyDoSZJaGvh2fRxaHJuG7MMSP2ArMNPuug",
  "key24": "2HbW3HYMLdLeTdnZU39bAdCYyDmVwVXeigbmy8ovVgV4xkbjtaxv77gbAArrKCrGavh6SC2NG4WbyVBS3qh2qAtm",
  "key25": "3pDpXjRsPgrCX1mAdeKAoguRGWELwE4aAMh3noZuqPRNLpFJxxtj2NYbjUMkpshDxEMB7LRP8zZtyUuAqKKx1D1m",
  "key26": "4Noi6Rgx41zAKDj6c8sjW8HSQpYHKfPU2uMW9ibyRzMpR2VH2SMbrZ1VVA2nXS9mAut3pYz3uGD6dQQFw6AR2TFZ",
  "key27": "PxBedkeDMBbB2E68rKeTGP6FnW3Ud7T2j5Qsizfof2fK7tswhHwF4zgRFfkfATh6YchfHXiurDbhZ83b8nSQ34e",
  "key28": "4LeGKLMnviinWvUKinMF1AJi7D7eBfzBzBqVtCDd1YnQFhyZLRQdjLzyLC5xJbYSvhFhyxCp7tWskHaCpNHhwSCD",
  "key29": "3ai4KW1JbXt1Si4n3siTHLMZZmSByo6VMHu631dQZAiEPGnqtageSkKW98YiZZafVAEaDdyNKuyERyWDsrJB1TKi"
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
