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
    "4Z6nAennBY4vf5NXnMJ1Bn7GkfhBWapqpn5fqTYN6zMUb4Y1Z3SCCDWJpwh5ZRLY6z7AQjimVQfZ9TZBhHw2ny8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTamnY4vvJqY3JN7KYixTzrEAzvtSrXvN7H2qaAkZ6Tw1CNiwjG7xTgh5ucvcc6ATdEKGZdHuDQYqsqXY5NMa1A",
  "key1": "2rvwH9GirkFJF6oomTLdUdQohvE5MEdMqrmkP7Gv4rP8yu1E4WkaqhZhwz6dXkZbszbjekDcBtMdEp4x42SRvhb7",
  "key2": "5QLdZiAniUCWhvyqyamFdgh7wcNBiQgkU7NMRkvvivy3QrdoMqm1yV2uBDV13ZdVWqjm3vLaZ7biyW7yYdTGR427",
  "key3": "f16rhvBguQLifXbbu4MrtCFJxjS4XzcUJyj6ociHhXLCFjQBsfcMAEhU73eiR8D1vudDPQJ6ierX7EB3jhzvVsU",
  "key4": "4aAz6jG1HeBVVzQwHns8jz7spS2v6ZZuDF1kCRRmcSPot9nWmTx828bY1mBrTcrn8BwgVEDjLNAHazuwaZvhjbXH",
  "key5": "Zutmmq15fq8VefQzXfN91gM2N4AbtZF3XRng8HitCqmLNNYJCFGtqKHCX76X3HxDYRaBrMXaNykv77tXPTKWyua",
  "key6": "2HqHHqGJtmY3kWfbMXaQTdajtnJYr7Gtsnn2f5Kgh5J7AMwMjXWPNrrRKUsaLoqBKrAwgZEDWR3LeeYvWB8dnzkK",
  "key7": "5x89kPfLcJpz5qaWwhe6GX1CqZLpo5ic4VygmJAYy52e6rp96Gw2nstBs4RoDUtY219NoFrx9cuN8urcJAQbsi1Y",
  "key8": "61rhaADviRdB4D9ZgWzepRkhwbe5x8nzHNJVWtqKmEFREyiuKw8KhwkvrZiz7DRLCyNckwjzRNB93347tXw2UQai",
  "key9": "4GNCZE5AgTSXk5Rsj2HdnWz4BHocWmmw8Xh4LYELqYdPpS4v2ZTuswtkuerYpPioiL5oz8EiWDPz1uHQRWxbQBVq",
  "key10": "4sWwCwX9xJMUowJfaCivBAcjRPdNzNYDtERvXuVzMNv6aaFz9KJMNnvH2rnBmWX6LQVqUHZ8tAAwjSQxTshVC9uS",
  "key11": "35D5QnoUWRvHgmoj1kv7HLicrmtRKRgghgHEvi3t4K5TH458yYYyH5K1fP9JHGdW1zbT2S3fNdKytph1xtw3myVn",
  "key12": "izmDabj7d9MfkbriSDtmyXJ2DsQs14HdAx17ZmqgKaX9i6FM14Hmzm5q58dfrepnWiHjAoCcCu2MKGUU75ZPjn1",
  "key13": "4BCtLT5AYZbLCK5MufQqmSYdVKHLdTm1xcGB4gKxSJ8Hxf3AYifTzMiawpSYbJ6xC8R3Q4KyMxaDZG12sCRJWiKe",
  "key14": "3FfRLmCEHoEsffHyGsTsdi3FEbDnn6yEP18y62R1EaemJP3WzndrV1K4caDLsV8CvwBj69HBQH16nSmZ9n6AiVWz",
  "key15": "3MSsaCESnGSDZ9e6ZdQEJ65UnLSGn1AymHaikRY2ShU91asyhNvRQJj26ncnTBUztXQ5Esjq4sYmJGrohYeTc1SK",
  "key16": "2TpuSiJjYi9tvUgJqJejZvm5hABapG9xcvT691ZSpzw1ePyjFQhHxDvwoswQEXKKpYbSNEby4g8MfHU5KECiLbeF",
  "key17": "5jJGd7zr8kHUqWcTmUfLYjUTFMvhyjjHCfQXSxAXMs2AVfUjQRSCwm2UnEJVD88hc28iWpbhTWWSKAGBqNMJNtWf",
  "key18": "5KqpycbmHJoM6Ud3XGydcHgRSLDSxNzbsaGh796YciXmWAoUZkF2EXoAPo5UnEtLBQGvUmBokURLkSQqCeuy4EaE",
  "key19": "s2QpXSPSibGnsV5c6BHtsGjftWvZ4jqkUZBMcXUihFWPshqUmVXZSR9VQT8A6HkuxEZcErPvfpbGnPLXojnrCWm",
  "key20": "5NmDWBXHNQ1NebZFqMtbJ8FRwbWhwnRmBfs3C4Eio2BnTgSUveFuG2hB2kygSdeidPh86Kb4zNkq5wUeTDbhrq3a",
  "key21": "2JpGZxpNuKSN82H6pGKGeJc9MPxMY8PpnUSJYupA8bN9vQEysrHRaoxiw872A5tiEzxv6bvjYPXcucwtZUGHVDdM",
  "key22": "5MGgT8rDSW5erXL2nkgfkYApLwpUYcbUFSzJkbtY7f7eK4jjLNBY5LavjTP5M6oYNuMRmjHhUWUEi6KgEnoHdCo8",
  "key23": "58MFm8MLVJAdLaDnzQHCiYmJkV3qov3DXbXEFG4TStegda8hUT15Upc41RsYC9MpE5w8sgyYgMnonUWcf2txCCkw",
  "key24": "67Z6zKhprRiTGKMJt6NQW51LCSBNTWf14wWAGbhFUTdpbnUm2rKtm7d1BVcLcPywjgHJx2GrZq9qPMHDwHdBoo62"
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
