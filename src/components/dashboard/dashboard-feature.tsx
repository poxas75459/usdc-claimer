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
    "3wapLC2mqtfsvnvs8FjA5F5rsP968k3Ch3XiWJ3nQiCxsZ3XPDzoXc2cViJ9zWLijEPd4U5jnJnoJnWyWhJYdd3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yme33KEKWSVcc2dPepgvfre95drGd2j85RbtfJJ6aidER4q3JWWLNtSYn8ZSUeuPUxpxCHz4tcQoXAiSbUVGFyd",
  "key1": "oSDcbVFLD8YajHkoBHiYDrPM2LcnuZgzg7pSPbet2oHvcanShN37FiJWc1NihknVhs28DMwhm5KPAvJQW3fW3L1",
  "key2": "367m8Ca4PaDb1YRhgZ6x8LR7ifw1rtwLuK9NXbQrVVm2SFzK94G7a2oLddVXKbZVtnK9txeeC3BEeDgH3bN4RsAN",
  "key3": "3htZdVooWwYQstgqQdHtMX1WZdcoD8GngvPLhkgPQfsy1giCcVF5bMfv3US7arjdV7isBNFmB8v1wTbydN3RcE7y",
  "key4": "Ur4jXsVpMshXcmW4pWvdfc7yTvb7KxrmcZEeeQhAkwp9QQBh7yAQWHYoBQEEbPL1NyQSUHdhRYGQ1ht5HCqwv8w",
  "key5": "4t8YB58vWCV6xBfXdhB1aqdR9qJ2rvPmqAfsQRkwhtpc4izDpT18uZ8NAN4Sf5NCsL69KwE3btVfKGYNZVtF3Evz",
  "key6": "56V9BfkTBTLghHBDjdJ9ZyCE16SPWcss3AC9YhtFeH4haD2N4gcZQicJS8cgAFyfLZZ57toXrS9BTtaPEoERtnh9",
  "key7": "KsS3JtLcdZ7ijnWaqFC1ETNJdjQUBNfZTxsaUnuDqdpyfA7miz46PSFAt6HmcBAow21tYQARkeXTjDcXEbWo6Ji",
  "key8": "4w2hYqZ5J5F6hcjttqMo4Z6prf1wSFAZSYWBnjFTdgtdjiiUrdPjamj9HceP47CNA2MxhyreAyb3fiKfY3ppDaAP",
  "key9": "2cz4HvBRKkNCX15SUqvoP4MHAQZ9zyqmrCzvaJNcSYdJ2zMqbm4aJw42853QerMCBtxcuUBKHRrHPuyNDop5yMap",
  "key10": "8ubsst1MLZkLrzNWF9comP8CocR7GDpq6hKYzZqtWeNqWWt6xMKiWNk8FNjyZUfSwEYM2gRARFKHVTTMD3bTcVv",
  "key11": "GnRdt7nrJpvLDkvr7Y2C8NiVQVb4pwotGXgNnKo3EYWrF3ZPhww544Ue55s62LziAfS4Uozqvo8yfNWcVMtYc4w",
  "key12": "3aeyPJvEN3yJq6BnLKKzVYQLA5ZdnWwF5Pc1CWmgDVCX6s3FNL3VXugYyJJzZVh2Z45Z313KLujEepw4dgrHXfRi",
  "key13": "4L2Q7s9zHqZmuP9PseMbJeBPrBs8LeMCcAU775JQiCdZnMHx93qBehYKrWUqW9bVGZDz9JvmXSWgcKQPGznTNC1T",
  "key14": "3jwKbEqcb3yRWojvDPkFdCY4srVmsb5pbrdbS1Bumes9eHhSaEE4xAE5qFuKQV4vgFDv2Gm2G93brZKWKAGKaAps",
  "key15": "5CYozyvJdaB882v9cgVQW5VBtiBpiddiDRiFCd2bBhJ8D6iJH4kuJhxttHn4H6Pdx9yaAcNbigsPXdJx63nduZgS",
  "key16": "4ge6maBSBxmf8JMsVDrMZGd12ygpi8qwGwe1sqy1oSPjRRvG7BohX9hkAnjKz5KKR5Dkv5mKysGgTnPYeDLMwd4e",
  "key17": "35B2fJMKW1m8CFtrWEeHKLVkq5AhQpHXwguwjuzrPHiu5cxroZ3SdScAmbg94MQoebE1eAf8fNHM178LAc4Q8UDg",
  "key18": "3pBFi1wRfE7x26cDds43wXMaBmMvyuGPkQrkrgiesBPgPv8WUu7mWP72CA3KA8U7JFYANELj11HGkWas5Vcf3MNH",
  "key19": "4W1NZ3cM5RjBPGpjtw9uatvqfMFhw2MXs7PVbyTRhtXqgrzbMi68iSc17YnYR7vKsyhnPeKXhTF5QeMEGmagXr1p",
  "key20": "2TYrvtc3dioA2SHaaJVYoUe1ErWzzEHPbCoe77KtvznzrwW4Fa2H7Nb5LNzj3rdZf6d45BQi5KMqPRpuWG21Utbk",
  "key21": "HEk6NjEiwMewZHWwX6oSpxmGbi9tepCnaEYgDUibWRPz1TUeU6CoPcEGrXw7pi8EUoUGt6uLppSt7X1MgvHTRee",
  "key22": "5U7ga1vSxeHRxDF2Q61U1Mqb5YF9htyPeYN6Rz3MckkUWmiPrDxMtzcLYQSpxeQVWUQJpkeJpBvGUjDTvU1riqcj",
  "key23": "2heLHZnPqGpEkyxYeXiC4eDXPzcn6gAduRjGWUugoukieZPRkuppqinMS9kQm1JEjewGvXEUdPWNa6wTcxrSFZNb",
  "key24": "575Nmibx7PcCmUEeWmYZH5vnn77eZ6uf8BDscWkTRbt1HAt4SbbrCG6HYkbyMoJfjgCCVKULQMn2aeB7hUGM6dru",
  "key25": "2hxL9RXPgAeuN16MhZ8p2NqpXaJ6dpeJWKD6Pmo6wQnPvRKV78Zj2vec8VQ5WHwuWnr4rjCiBHh4mhSUBTrzD123",
  "key26": "Dp2LN5HpKsZfbfLkstS4gkyTte3yC3Girzv8CQs6Wcs5a3ZaYcUaZDwbgPgYPPS5Wq43skPFLRyv6uzvbpvYH9w",
  "key27": "5usAGbMwwCyZaUfxpxrF9pr67yx3Csi69q5HzBpBhzfAi7PJXZWeGqyYJwrkFjfWTw6gxH3aAHQ1V1oqTsrfX31C",
  "key28": "2KrZsVoLVeJMzipAdR7KwMBb4e7VA2ZJsoheZs6HWezcmCUhRF2iWnkBtqRHGExHaXcoxBfphudseZNiwxkgfuja",
  "key29": "4GCDoJzZYfb9uYSxVmG3iLjncfZ9M5y9ri8tmYdaKztTumRyiLsSfaLHVrsK8mR5szvEsPj36so2F1d1EUkbscj4",
  "key30": "3pEm8uD7ntazP2AifAHbrKS5jCZMnMn9TrE6P1hxzcNV8Bt3GhzXF362DTy5jyfEm7J5pqw5FV6GUEDvyMZRZ7Bd",
  "key31": "5vccBWqPKsSD7zbtdMbX5w6Fi6pPsgiFLTgD9EqA792xVAYb91HKtfdwE8DAqpNEnq5eBDJQgSDmqzuEkG2fty6F",
  "key32": "5Nwk75cHQqS45jVVz66NP18gTFXsV8KCc223MDZgEontqNgpkZKt5kHePosTyoqfo6xCxvHrjWom8gz7QcrxXTNx",
  "key33": "3UxyAmSAtgKqAsMqQJQDq6EusSz6gQbBJq3yipEgxAEcEMt2a3QvfACWbfAQ5MFkaBikZgfbE4zYhS8CVZZ9ZJtF",
  "key34": "43TUhiprmhSy6xhFc2ga1bPtJHrGVPkxcX389K1sHmBFZrmbgmBRwRtAW8NDyxErj5Q5bj4S3ovSEGBrZMK9cc4C",
  "key35": "3kSSbkijpifTYGXwsESw9ZVWRTAonjNJbL8N2zV1gPJyqfgvgiKBgWCmkNwLhWaTrK1pXj2vL6xMHX2njYWhU9ro",
  "key36": "9KwEBisMZrHkcxudVh3GcRDNTCpkj1JDor2vBv41X1KsjiriK9WgpxJXGnEGsiKDSYBxNHMji9s4gQVqMNCQDMx",
  "key37": "36yxuRZLvvwMuTGUWJC9HZukM2oZ6yYRJyLRKosBncnLoWMBKerEYaRhGXCF8cYDdXAbCiibK2zrdqpGbz8BJgW7",
  "key38": "5wHwrK6BJdoywbvPH4uCRJM7WtPLu3SQRzvQ3gQW71Mp68siiS68a5R36vBJBDd5WgoLt9LjL6tQBqhqPxBh9Zfa",
  "key39": "5YDoEKnstdEwRU1C8bhHudckScDxdTdju8PghTLCtCR8fmF5k9Ew8qnvkqYPY945eEEQ6CbiXgfMFYV3SdjbTgVs",
  "key40": "5j1xg8Wxhz5ddYPyfHfkJCRktQVPxF6v6jM1W4YTPSL2oDpZzrN1EYVrTuZc7vbVF2ijTV571RyNKkUCsXgg38Kg",
  "key41": "5PJM5YWEb28XEzd66RTn3Q2KdGhTdLAhz2UUa6ecEpUNr1SJFcuEhFovFB8HRQh9R4q7YSyjK6UGLQkhDh1xb8SP",
  "key42": "wjvfEr6pfxaEDCrix3hjum1o73ibVQm5qn1cfagaoUUyUTRsbz4fY6fZzEAyrbi7c9hSWn22CEqaDDMjFUqoajS",
  "key43": "wEZfLu6YuKKJhPZmnvf26Eit3CwZUxJpecM9nMPKK96Nwtc8JSeP22nrQ9Gw55cLK6tSVE7Z2PEnjvKENJbz8NP",
  "key44": "SgpZ5DJe46TDYSiLaBWdX9WbiDq2r1gDWfGQ5opH63veTeScf4GwHKKe6X6R32w1HJ9mZzQB8uhgWfsQzub3AeK",
  "key45": "2ZrWCSBqF8D2YHzKLycXqeVXctAtcmRRDh64H6VYmHN7PUKfZHZk5Wc8gA13MVsBFW1chCCxNAmHNAzmxcPA7SDA",
  "key46": "4A6LjdrCDFz6b65WHmFRHShxbeRH8iUasFDKKdVGm9TZBBVEiTifEi8MLXjLrFZh9QNjkpN78DGE7xvg8KQDnytP",
  "key47": "2J1N64b8vukdAnjLswSCsDPidK21XsUFGMSUgA7uYbGgxvQmR4eDGEQ63feexepWRj8q4D4RWVSrkNcqSoA4jWd5"
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
