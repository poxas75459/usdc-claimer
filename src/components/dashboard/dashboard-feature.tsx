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
    "5udgXjq1KS3c2etUktX8FQV7Wkxw6suJLTNJCMfeJMu8GHw77YswRkZwredPzVQ5Xqe15B1eyD5AbECyTKgJWt5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNom1s6pnMwQJaSo98xm5XH5GDKUa2i8ouRDjxGiyggXuqUr89noiRbnaoG3AVeYXSiHgTFmeTLU37kztahouzJ",
  "key1": "5bAuGxW17fDME3hixfpyyzmMdeMUb77qNRui2oVtsokic1rss9FWAPtn3tVLHJMcsgowKWEVf64kLSAhgWh7YJPh",
  "key2": "294f3iZzJwtHvQwfx5UzF1FG5iyK6gsp9opMpRbuXJK7HV1tnS3HHYktZTFHNWMpSUy3zdz4gmorcHaqJ2zfYuUb",
  "key3": "EsgrdSDkrQxQNE2yeaxNAFUjpTtZEt1dccpoLqy59JPzLJw5ndiQYjXCxofbvnePiAvcsL2DL7RzcifWkEVroGE",
  "key4": "4wdHeAnKSCUby1dErGHPSmTHgSHx25yh7i2Z1kjRxJXWeioSozRE7AUBoDxoAZdbF4DKzZQAk7wHdtafeUaJk7c6",
  "key5": "3cLAV6RAvWreTPp36fYd6T7tEiyLW15R7mesa8y4BYdM7Uh1um81ZCZ4a9Ac1hMZPH6jhQPuWBH7wBeyGcfBsKo",
  "key6": "4ztswS9RQ1Wda3bsbxZantT1Aey7PuYJfr1cmEUfc9Qax6RG1YTGYEzMyzPDRwcUnxhikCWFs2jrDJwoo6pgG1je",
  "key7": "3ATTSEXc3R2b8vBUeRjHUPWnVdi8SYXJbXe3EAhcgcuTaDgzD4yucik1fXS2P7KxBVJnJjS7NRjz1Nou9iiBXumh",
  "key8": "3a9BMGSijK3MEeqMkcMQ9PgsNpHfB6sSRDvat7EcVRwKRCAHpowTakhGUHb8KUijnXrjukzsh7mXMevrchyq9pfh",
  "key9": "az2FJqxkJusYLVUD61ZgxSDZHmq5ujg29XkzopTQA1eG6mrvsUC9Qjynm9fxVGQSYgYzjs3b6dihKPyeRCwbZeR",
  "key10": "3hUgsTLNSCiCM56ZERhvnLUiaCS4NWSVCWqcBojkWGm1NGLEodrTnWhkfdNq3vWK6GN3C2BFFvQf1ZYvWoWiyNen",
  "key11": "5if1nVRfAT9Fo4AaZhBp7Hs1fz5S9tjnanwwtu8axCZ79xiAGKWWBFCbFj4Cjg1NaovvxthhRaUuZckrrxw5ZiRH",
  "key12": "5pgrQqWodDX3FFVZM5rC5yu6ik4aLsYTXD1z1GXxuMp11NehvbG1U7GzdxBwrge3zXMP2MNC9XrPrNxz9iVY3Gbc",
  "key13": "1UFpW9ZCpf31E3ZRr6TYd9ZH9BxSm8jeQ8pWcQxVQRmXyZKHP2E5wHcod8WDeqnqYATAQXPWrQr44BguKfjnHYG",
  "key14": "2KrdUcoas18DVvfJuGffpXVpu6bap49QHqqPPfWdnenB3qCHjSwFT99nuoYrcC6dSUFoixKii4ojsqdaSECHoDnS",
  "key15": "4V2FKP46BW25po1mESxHAm5LFbTgFm1ZGQTeJ8zBxUvM2RM6WDsu4CcuhT3KG88q4gARYRYUUh1c9poWyUjyRrT1",
  "key16": "3fJ3fSDXkp3nVYwmrzkg6i8hDGM15p5RtuRbG1KQakcnbGZM8PYJGNHRQXqUAnoQPwex2wz4xjyioaVmVd1TAJ8E",
  "key17": "4czAvsQHFj6o7WmumiU58EeoDrNoNC9wRiTxZabDZsQ3MctEtrAYSN1kBA35RTeFU8T5NNTcHN9xjjFbvhR92f79",
  "key18": "5vrK4HHEG5eVbA33RsTgT99ejGD5Vk8Spb6NQRmhDm9UyY6feB77n96v5KNKHxwFp2Q5XhujTpEdAyeUouhu4TRp",
  "key19": "4Q7XKcX584Ye5KMUm1RrBDZ4MHSp1xNS7o3jmEtx4qEx7dviso8htdkmM9rR8YqRzCyskrVdGSGr1oBDgx9Y6YLx",
  "key20": "SPPrLt9TqpBwcsnXUu1oknCh7So4rYrGqhVxZHirvrpZFS2f8Nt9MhaemVLgxaJ6R3kZ1Jju96RsbvLJ9uDQ5sw",
  "key21": "5yAG8tksWynBhczr468VeZxGPBq8FmKCmQAZNftWc6eU48UsuTrTNbjxuc46fc3H5LCLXZQw8FTYYbEViiK9RchZ",
  "key22": "2c6zhod77r5HRec75sgYFpjg3yvT3CXFaBT9iHADi8tAweQYLx7PVwZh2uRHbwyaXgxu52uQx6TzBp4r5aBR5Lr9",
  "key23": "32FQbu1ENKA1w9cX5JhoVCQ2xQC75785Dkb6KaYzziNg1PP1AMwbTrdYCRN1ro4aSouKxbMWM1rP5CPF3FqFzHbV",
  "key24": "2acfcKukFymtBhKX7VKtyoBmU7PW9LCc3NHX8fgK5ovj7m2adVzw5CjrsAnyR5xqN26x8vqLMXsE8uao6KAzJMRU"
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
