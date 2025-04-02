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
    "4tZrHQcmVkiLKWpYnhipxHrGPZ6UaZnGThbaP5nyTkScaSrs8VLUjoYn9f7uCQt6vsN9HxRJWawes83hk2kK9M3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3692eUdD3c3nf89mhvboV55oL3gddbRcGUPSmsgzBdGmuQJ4dFUu396FmAN54sGK7Fcdn22R1Enic14FWAv18qfc",
  "key1": "3WYzAvYZf3M15pH4feztcVtgTCaJqVyJrqfvz68P4aBq3UKLNtY8QYymNQdDN5ZCYQqByQ9tmaVjjjH4jzkPNyBs",
  "key2": "3614JiEAxa8EixKxc12VezkRpPpB7w7P1S2FvTjJ29zHcP4d1MJq7rnkY6f5QK6AApw614dTHqKa59JopQaro8dj",
  "key3": "4MpNmYKtccUQRd64QgPD2romBcTRuUBELjakXvj4dZ9zA9zYsSKKpLPCKKpQDYHJqryZCSKWTPezaW7GfAzAtWJV",
  "key4": "4rDk2Ww3z2xghKPdgJSj5yzgmQgiuypqbksy9i5AcyhHYC88QB7QDioWkhwyprLVzr2RSGJDp6U6fZyNK3E5VeYs",
  "key5": "3jdRKWVsjkGMNjaK6td72JEB3vCyQq3nzy46EAW49A4AVk28bcBt7VodTGu8WidkokCNW3ga8m1pdxowEWVaE1m2",
  "key6": "491sHGpUX4gUXwVmKuWJmSUdC5AbJ7vZoPj8X6chu2e8tPsNMH8BSE44LxRu9wGv1Sr3YzLz6GDkBE5xFbZyUX56",
  "key7": "5t2SLCEUroFxRkhtXphhd1eJwZ1m31qAbzycdhXPbahzpBbAjzZ8gEhThSD9zYjku1Zj1fJg7fB8YkmFsXUqfhte",
  "key8": "5DoEa9hJ8Zf8k11AYbZo3hEdKNDUwHXsr3d444uWQCYQ4aRxQ9P7KKnHKNCX1nigBWnv1sWiacMptk3wDmLWsrYj",
  "key9": "5WcmP9WzgeAYK4mxyhuw2WhmZYrpEiDPcrLsnzDNPebhjtM9A6FTZEizsy8XkmGNkretMSESvvJ7GMCxV2CwoN3y",
  "key10": "3avPCRRZZEm8CGHKB3GY7pmExrzZH2cekSrP8PFfmgAuWJPuKhhhjPoAj46CBkWFfHJmYMgdZXzQtTv8fpYVrZ8J",
  "key11": "4tyAENsEdetP4qA7EG3ZQZLg64ouSgL91BdUMsCraYQtPgevjnC4iHCxZd8eu5rdSDhAHHskdxHq41B59AqNCdh8",
  "key12": "5TwAv6MtpRDre7kLDegZDDHkY9iafb1bi4tQytsR8636jBMXr6bUZPse68JkS2qisAECnUaqjTZyuasAHEJ5H58F",
  "key13": "3wTDhdNsGAnUKmGUew9nULR2rHwpTVzdMsNk9LZ8aXaWkoEkqDvJ34Za7wCmGXGN8YNGc3qq8BqQthGJHeaFzFDe",
  "key14": "8QXjQ8hUzLbtaQwzMNAtGy558QbNegevFx3PSqJck2qf43mUpvDmN9wzBt4FRfHxLcJmNhch2uYh6SdaypBCSrA",
  "key15": "4b9A5yA9CawGLq2k3MR2QaPJr9mJKzACFSoC6EXnMD7abVLDfJHkSekgW8w9ytpN1zV8SGA1VBeSsgyGsov14Eqe",
  "key16": "2KpdvNXqsVLUjWTx6r1SNKs89s1KghnSCBSoyNyYXAKB7hZKjJzzJ1tynCno1DFkFz2n9tQq7ioU8eGBiNwWiT8T",
  "key17": "2wRgo65gdx3NwV6SgAm5P4fhbATcNLUqZt1U3ZmssgAStyDkPcAVt7B6cacYXvqtoftMYG86VhC92XTq8YFAaB9j",
  "key18": "Zg9f2dLgPyBREtKgTrcWu8DznvE7nBj46asvN6DqigG1N2UV55UeWHNyCRuKVyoek7sWm91KDdBqN23ZC7Q9Cfi",
  "key19": "3MSRyc6Yvdo7m8rUY9WnS3QLeSHAdFKSpK8JMTqx8bCK9BYninesdYEmxHpDiToh2EqF12qT22ce6r9zJrWTS4Xf",
  "key20": "37NGo8pwaBJcYXHy5fd4NrrhPHcHELLFCyi63iS6ctbtQdoY9BZx4B2aR6NgzJvYLMzTKE5vxYr3Lfp7hv351h4Y",
  "key21": "2f3cmrnBTPHcsRRWVY5GvwjyhsN5eKS6WpRBYhvU8X54SoqxXrmQUJB6T9aiYXJf4otZePFAGdBeLjhReoDQtZCz",
  "key22": "2v58B3tswxQUFA2MmNQy43iFhwAhRRiUgijqbfKtrsNEQyE8R3oCQWPjHemWXJSMPXLgssE2GZdG1ZiMfxKTseW7",
  "key23": "2gnjymdqt2sTsPK9A6eKCcsqrvV6eoc34ZfNAghN5sT5usdJiRuNTz6XSETPvhxA4qBSuTnGhi1AFt2o9ASh7xqd",
  "key24": "5moCnsPtLumcuDwdzKbSbGf7kndSLkhz64WciyfWWaQFgPNd9Nt1kV1VKoVgHGuU5mxtYXztVkV4be6tQr5y6P8x",
  "key25": "2eLXQarHgWkxQcJVPRXDuAjzygy1mME3PGZmn8GTWie2GZwT4ugeJpcz6irkvpHXGAwbMd8jhweAmoHRpAz7MMV6",
  "key26": "2Cg5Wpe5JsvL4Gq3fcsDuD6ksFZirJK9Z4JFHu9Wxs8Q5VzZYB4C7EZ7ryTsPzLNBKwGiygFmh4PnVfWiqL718mS",
  "key27": "5vJrxFm4bjXE4K9PcCxnTqoLdxFj3CTeoRPZFq57ejT6mtKgqQucu634m1KuYye8XFLwaLeXoHz9PJkTvkaG3uD5",
  "key28": "5kdbyLNBybYqcHkwRqcNukQ6mYzFUUatypEuYCMZWR4vLrpwNNxaZX9oVbtCXym7hHEYFR2Yk7oG6zoWDLZRQcsZ",
  "key29": "3ZRbjWdQh3FStS4uvggV35LrqF518U7tcsUR7newyy3sKZo3fDbCPsSjKhx8qQSejC6kQhbXCZGXetYvJJs3RjZ4",
  "key30": "5YpFGdtA5gMSo3oQvJp2nN5ZpcKKJKdEb7zEQCAqZhQRKdGjoNHekNLUmNKemxnwK5YogurirRoL69MGzs5iZpFB"
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
