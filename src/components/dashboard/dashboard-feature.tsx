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
    "4z7qFeRXjHS8TgoXG2QKDZ1nCESuD21NoUPrLospKNYW5on2whPp9fZaa4CLfL3AvGcf6oEeQyRKCm2ViLvxCWtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfRSuA5xgA9PGsGt83JwextLk5b7V21F2TtXoTdGxmPSyButdUBqpKTpGSAvJaEwJdbkt6M1PqbeznC5HcZA8f5",
  "key1": "4ySAtotGdiJLNZWgYxL2f1NCCwTm9pFwj2eHxR7n7ipQHNFH3KqfwfxqM33UDFcxm6irhzHBGUrjzmmAWtBbDeYV",
  "key2": "57dv2eDRzF8aYwpSfwBB4pNZ3cM3fXYzBy8TwH2ufiKpwMUhbyFuTSUTYS6ouqAdRUPPLMAY7LGhJQwUGSvoariu",
  "key3": "3husbA1HE7BWRpq3mRgK4GbKvRXK7NhX51wnedFNKD7HWa45okyPPYjjhEQdC65NcQV523PRQLUoB6VA2pdwTSBE",
  "key4": "33bhLPJmc5HqfQuWiA5He9oRdXxht3z4Y1BdLxAoa3n2rLUo12JdfNA3vn8w7cFaSaeW1qrS87DaQdMS8GFz6pWR",
  "key5": "4CVvbBbuEsCBgmnaUEa2exW71v9928EyY2pzwhrXJPPveCNBJ8NAm2PhXE9xfcBqzFbmXkX3Kq9jq5aLmoPR21t1",
  "key6": "3kBiWS37U1rJt71rY56C5kNcjL1hKFwnRgqKkBmqKsp9qDJu33QVon8kbhvhUsMRzwNiiik3KScr3BmY75BvuwmE",
  "key7": "53s7iMTdgcRQpVJ5gwiMUSLYNamcTh5DgSCsCCQGFHuQ6GTgMDt5zwzYLvj3xj8YMqRGJGH4ZeSZY4gFjN3MtoyM",
  "key8": "2RRmi7qem6Lwd3NLhW1jGy577JBL3iW9hLiiAVG9hTMDvcEXQD4Gefh24A4MJArtX3yufGYMkuAanaywnEAEs8Bj",
  "key9": "3AgsZQuzcmND6EoJRr9dPRvmHpxg8XnZttnyC8XMPVFnLsLZgFmdUWMxLtLoAMfJhu66QLqirXCUfRvqZcbUw5d3",
  "key10": "5ArYGc2jY8boNtcezvgcCrDKDovg5vnSTDGwq2XctUvxtPRC3QvMNFhXVKh1b2osWvoi4DPkDuXVhDrZ3aqeDqMN",
  "key11": "2t5QEvEikrNdP43NGmEKXdjLzxUFyFwgVve42r6Qw5ZxZA73LUZCuSpHqGkDeiro6MRT1Go34bfEQbm6t8ZyE9iC",
  "key12": "3xgKk98LJsFNKSL6uA8ogCk9EAX9LBNRTQ6SZhWyXUBqMhm4zkyhfWYSmbL2B82Rw6cfavtkMmNraZ675js8wMpb",
  "key13": "5Cxbz4wmKXGfd7V7fcVjCLiCZ1aGwKU7Ty3sRhiUF4bTN89CkgLtJiVfNkqCMuHd1DzmvQf6P8B5N2p4QVQQBt6E",
  "key14": "2p7fSJN67CppunyNPfTGw1KiTrjnq872NHZvHjD3r4a4eqBJeXH7SGah8FDZG81XACfiGuEBvVj8dseo3ku3SAJo",
  "key15": "2bsBAYoZqFZYTzeMafQ8SVYmw35Tf8DjkHamz8Kno7mPEenPM4vBR9xHyMKoFXtYGFkbfvhpuqgoS8kJM6EFmTTm",
  "key16": "4PvgeiD3nE5G9qnE8EjiEggE1KRxFcJ4Eaezn2KuLhtJ3fjtQDkGRcu8sV76XwQhpoBpNtK39awJjiMUAtXtZDvG",
  "key17": "5UgRmaRtCDyhjCgryz7urESb52vhb3HWeErUmgq5K5b49HppoooGQ99QG15GZGEHRgZzq2kQtiH7f8ecVHY5ysjw",
  "key18": "4Q2SsW6h897RwTVPpR4J47SXmTpXg4NQquvPMdUhxmPQmbE6QJmhjSmSfNL68A3v9xQgPaQiGjWVmB3inAjjSuJJ",
  "key19": "SmMYHERGsujhfuZva7y3LybacPia2oHfoaM1rcct99cKbaqpgEEUu44gRVzbL7A2dYo7H7tEGbXsW1W95HzzK6W",
  "key20": "5LzaRkLXbnpBWXA3UHVuxtzkLcmnPoegVUj3JXDKVA5YwVD2xM5KkdfgLea8uVMPvHyTYSBjMahZ5321qac8C6M3",
  "key21": "246eBPsSvY1NoMbsnUsDtFU8DNKAgj9Le6zCMUmnjMDVRmxjoGc6NKMxS9yVLmwpwZi15LNXaNAXBe97FAWFyLyq",
  "key22": "U7ePtD7XZteKKMjCCpr8FzYs1qFrhT1jan9AtbBW58JNSdCaEenzubYnGCMsSJbBdn7uaCsUdpKSgg6YDRYyqCP",
  "key23": "2dcmC69efXQ81xKo4RNAHw6V7Fn2KS4zDZYC3yCm7MNPVYgE9zra9UxYTSAkm4VuccbsWL79TzQGS5exxui7FB5E",
  "key24": "1thvaDerVgVwraoQrwZu7yTfiL6Hvd7bti9ZQPuKDxHCAUz5J8TyEvtWPpPwSWaXdaffayE4AzWoYcPMoGGzdKk",
  "key25": "2dZ9b7GcMZRNGy8TVzNuB9NcHRqWguZaPeen2RpKLdyP2XR9QzFyegAg6L6bdWcnNb84p97PkwNC8qYjBFZd6yR6",
  "key26": "5SCYMPG5ECh5Lo4eE2P1qRtTLFgFExEoB9uYMNr4FXuEwsiRvYCqChDh4RMCnir39ogd6xSFKUBKcZyrDz83BVcY"
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
