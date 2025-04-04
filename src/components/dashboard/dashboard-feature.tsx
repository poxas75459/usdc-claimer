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
    "C4CaCnHHYbYyTWzSixsSTkb2FMviDVY7eChB3y6VZZtQYeJcc9rkCTNmnmDKtBCxEbAyK5d2zPA4FFeedDeF3Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyPJi8jGw173bgFAWYqegwMrJPrVycmSCakqzWfLr5Q9mbipuGDHsXZVYSumCGT7BiWn7Yhv3DKaJpmPAu9bg9v",
  "key1": "YoWjF9avvPDLbFNNNd47HMXmJRtLupNpHqRDEED8A1Q7kxAqSauvkqcmXD6Bem5zXm29VtmcNirg6716edmBmdL",
  "key2": "3upGHFTZBU7xV9oVJyh8iwKR9anAxB7pHAh2Hz2SZGXtEb3JLPhftbfL5pgCcJKrtbyKydnQ9v8jR4EhK2xDZHjT",
  "key3": "5qoVFk7KxkjwFGoQJ3LJUxLK5GmergH3AtpyyjC11r4aFfoEAez45kRcxTCjoJD1VV8bshrSfotukp9hTKHdvjUK",
  "key4": "WBjxtXdZwp546YxyNbTyNCfnZGvmDkcfBpY9Nb7LiNTjVUVKa1fGqzoD1t4JVJikgeLgqDHTyXzB9HTW9DL1gC7",
  "key5": "2x6WyBBT6VhHqSMhewjhrM3ZTZDdMoDu36YrJsDaqafBVip176FhLrhMZeQhrRpAyuBFWRYSQZ2z1a7sqhmPHgow",
  "key6": "61A4pyezWa73gDkxWkZEwYBjWv1N9NrSiz1drjZuktjxdGfmiiuQ2fuPLYKtyQCQn87r1Rm6MCmijzRf7WyyeCTQ",
  "key7": "W9asehY6mY9fTkQJvRFHrQgs5AUo1oGRt4Ee8mWT4smH5ZvphtS93ePbhddvH9hx8bPbpAuVfP4xHirNjm1Gvk2",
  "key8": "2VJTNRN5ZWCrKe9D9RGP9YbDJnYw75rHaZR5fJ8peF8vqnMrEG4t8hxJs43EFhHiJ2mKdYFj3362xMnJ7CxbR63t",
  "key9": "3mmBmFVUDKNMsxhuEXNVYkSA6Tjmm56cSpspBHerwnNQ6ksy9GRro9vwMgUZt1UA9pUHqpuvE9FDBu8QzVCqrfBX",
  "key10": "2j7G2tPmbMtixe91y9d3wtK8GWASHpknrw8sRpJc6us92sovGZU5vNKwivAa4mamjVrtGHF8ZKtocjjwzSdv96ph",
  "key11": "2Y2ZtTisZpNCZDofq1ioVBQwsEtfyFTiLz2Ko1tTEQDo4hTtKcAsFNmQobPGY6pHvzBFseMsVrjo38yJ9PNhH3Kf",
  "key12": "578SVo22TsG4Cuu62GHdLcMtGecHCb45NunmoN96YqishrH733SMLJw8e3Q4YtuKhthXCrwkDkzpQdzWZstzcJAd",
  "key13": "61AC8Ytzcf3ADf7gbNig4jhJ1aZeVWHkdp6S7q3A6PBcpzg5oVMEYqRadL3Nd3NNiAJ5tv3RpWSQmyif1dYBNnn5",
  "key14": "317AsfDGabAiLyBKRf3bA6KKxsotbSaqGgSWv7top4mZ4YPJ7yDM8EnxattsE8cTepX5zcJmY7rTcoimQo5UGizz",
  "key15": "3ar84hC8abRyxGwD2zDGUn1AoYfHZu14ZyYjzmPZa7Xog2RB5m9QAUhEqEGEqCSHWUVawgZQyHUprZtdKcPbPpem",
  "key16": "4UiuA4njmDHUwzZip9AXmyJH51Caxo3YBLzcQEgSbGQQJiYtCjb1hYtBkT3AyRXQm5f3Dr4krmcGnQstj8TjgGWq",
  "key17": "5a3mZCXKdyma2AVrGWC5v98D1arFwrQJ9k5sHGoCSReBvMpthNmLCCs3pmKEPxWRkJ27wkvZJDRSUb6FwQxLBxct",
  "key18": "32XFqrHHHHSXES3MMmbP8kKKAfsmQ24aQDYK2vp2FrmHro1gg3imWxAV6FjBkwMUrSrTJWoisXGfMTC9WSyigUH5",
  "key19": "3UvdyUWkoS6FbcfG4Dm6WY17Rq2nfQNkuqhLbw5RAA8BXgDCPXc7gEW5PGePgZQfv39FeXubvKfverUMZuNW3duU",
  "key20": "5JdtzJ2NvYDNi32M6E3gh2yZXGiA7GkFYmGs7azStQXAfu3HaekSJfWPpZMv7N6adgsgR9F67c2Z4mNL2nS6vXR7",
  "key21": "2xW19f6538gLGXfSKiTywV3323CWZRT63HVCxXncUf6RWCcvcHiHhV9XjMWG1otsyiaCHdRUmbHfrVokY6bRH7JM",
  "key22": "7fT81YAMzwgX6qXPthT6qdAFgqjFZbfzxT5Q5ccEEW1QE29DRR2Y82uTC5F4op3p5txJsHojvURdipGSVJoG6TY",
  "key23": "3j5ZqxWKJh5BRfHfJhxmp9XGwb3NTpjvMMkUgMTGTKjYGSv4RdAhAE2ANW1sNbQ8BxCAQTSdADn5ECRYT6NXhfT5",
  "key24": "53YPTERvWJHtM65SvYbpwz6zMryzhhh5WgL8PBMMAvggHdrci4a9BXZN1c3BSy5zKfsKeJQ2pxT1NZGhmP18GC3",
  "key25": "2Xtmd5qPYxRZ9uqZUsBCR88ZeRewapkCubdzFHMdcB6pdxxvhCfDopZAfsTei98waxgZTTP57Rkg2TE9Rfed82md",
  "key26": "3ZZi5NDVseJLHHv8p3F4CG1PnDX9WLwtEvtKUMQmGc8b2n5wKkWwfupooLktaBAEDBt83yZMfcbxfWqQA2FpBDUH",
  "key27": "8XSzHez29wk9wmmf1kGQQLNsfq271SAG4fhtNdvS4tkFiZ4NA1z4nSiiaF9dMjR6WCmmdPGayJ1D6f8ompwZq9b",
  "key28": "4RjxT4yCxmvNftT1J6fTdi5BNnJpvBG11zBgX47Lm86Y2VuwdJbLayTb1KjrMpQxeyt7T2hHoC9yq19AjMkdPRUD"
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
