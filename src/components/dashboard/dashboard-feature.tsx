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
    "5TTUCpDfj1p3U7p8GWrXEppLsarcwUzPuEfEjcwHhsrv9VSeLeKyENxK2iUP4tM935g9ymvHz991ttpqoyjHBsaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4253nqC6HVvZPNTRQ9hsfFfxAxjR19Wwyz23Q3yusBAkTBVYkv1N8EWnrKWdarJAvJKHPg1aEUKumDLY1yg9Mgq8",
  "key1": "2vbmScNFXhDTCBZsghLgPWWYpjxmJ5VbdW5B1GAGFueiunNYV9xC939Rj4MasV57jJihsBgoikJNqmkQrjHQ8d3e",
  "key2": "5qFitCCinhZjTisBhtFXiqx4vdNfx4Q2HAg3MjNXjokGDpScUsLGJWrG6mMAbL5Xk8YmrPfvnb5i6UCcEFag6uJq",
  "key3": "5GffYyheDp8UMdXXGgDepVrs7yMtYLzipoZvWs53QJp5NV3WYSEYb6WHGRTzp9myCzV57EMBSfEEHkKDh7BGVNHv",
  "key4": "o4ch5cf5o9kC86Q1TWwCr1rSYgvn75J14vBiN57WpZ2vhU6XAgfCCaQm5pRBicFCTDfdb1uCyUxM6FV2gGoLpnu",
  "key5": "EtECAXfzZo1yz12CyWqZ1nsw84d3uvULCiFv4zeqEUT42CspjnCv4LTLQD1uZCgsUMfGt2F6QcikLm9xxGnZdwt",
  "key6": "3u5oBkm1nbqrYhcsk5Nq9SK1TPGMcmoRKkWs6z9AyauvsomCSHr86xB2uvF7fmjxU3WstwxHhyWTb3fMWAJhdzAd",
  "key7": "4Tb3sgrEvvS6Xon2RSkLxmrTNYDGKqJhxjZK35coKHRjfbFWQnjYGvF8pHAXBgWeaQA5yLNSzwR9snRCBDNQLR9T",
  "key8": "299rcwmSxMnpdxZfVPjJKMAL79QRyNML7MkjTNnzw3G9tNV5RFT5vyau2yKuWU8UaxAA8k6L7FxuLBGnv3nnWygC",
  "key9": "1nKLdkwJHayisRxtKZPpiKsENjPErvmk92gAM6pZzQ94tnmnaJRYsSEuqmaT6R9291sCP8to8hJqtxwgQnTCSBu",
  "key10": "2nigwnaZZdag3H2rhwkyFVJJvpc8aCFKyVeJSv4JQ2P5ZePb65JhKjyL4dQhUt59HQuwq9ssrkFYCb8kASCRFA6H",
  "key11": "mqhKC18F9bXGiCJWnNz8NsKvdU57fBq4Rkkw563X19D2kGfTFuYz2KYG2o4GUb1SzUyapCGtfzpYRFSNT89Tm5N",
  "key12": "4WfpFUWvF4wUkWMUjw9WZKyeDfqATWg6ozYFfRXSnDd46rCF7RmCTTTTF7wtEtv23swrQtwAxXpVttLMpTfKgnb2",
  "key13": "2GXNkLuLiPq7GpmRE7Xnw6UXqwJ8LgUMYt2qVNQ9rpsBScdGb4yRr3KpC4oFSqf13iDuVbKy6XtYgV48f3RrD5Rw",
  "key14": "DCmYa1MJhbBurPv4qKUMXcrbRGkQGfdvUcURsBfz3QUiMGorURfYRDUqvRwd8RmQf42K5CvYDLPNv5c7DGBnS9K",
  "key15": "1rbi1XwXk31XeVKwji14USdkzKJgqM8birTSfjZMoCyjtjU9AXVJfntyxDCHDRAxHMdo9o5vbkTW1u8Dnkvzvr2",
  "key16": "4DMX6JVPmbPDo4Y5ynRLdPZ73HjYXMQbizEPWcr2aHZu1TsRwCFcQ1rQnHaPwJbYSnLZ6a4BktpHC2SH7sZN2RVT",
  "key17": "YaPnLfKLbanemteJE7omeLxKMNXWgPbefWq2yKLFapij3hkPeFdz7CtGptFmgu2mAR75b1DTcHCmpCe2FmH7BnT",
  "key18": "2zL2Dc7g7aV286M8CL3tdH752FhLqA6cq3BBqA3Mmpbv4Wdt8zWQuUPf8YLqboU9zTFuitC7tkuNJNnc1ZgC1WVm",
  "key19": "4aphrUuLNyjRPkk7ADQacXSBNc8k3Zv7R2W6Y1szG87jwpUtxzbk2AZvoNdTapx69KMcPgiSGHuRjzHQDyf51UXT",
  "key20": "Q5xNwB6dH9KyB5gVkUgEkBUAaxoNBL5K4KfAQSreLLxtZEvEpGVhy3HHc9q2LxeMKRZUyMTj3jKWckZsg7MU6z2",
  "key21": "2epHCP4F6kxz2GQnRNQUVPXs7aajguCLp6tMty71CQnvw1e6QrmhCDCfRyGuVW233DZvibFh9qish8nCMpkG1WkH",
  "key22": "TLhwCpZuBJPzw7fKP2jrMNzsByC9HqGJJZ6VvFetpSMiyhZBkNAW9cBMbZZj4VZCTmKci8isPJLnuZzKCnd8wD2",
  "key23": "26hEJquE4YkAR8pLcmTuh2tb5qbN2wDqucfEQyzFb9fihKkbzyB9zb3Cr2Wt5UcYMgTBoRHZWcpHNS8kHUoA8CqV",
  "key24": "4cuwjpQA58TT81vUreYPsN3MX25uQuZxRAMASDx3gEe8M9oDXDPU5Wbv3NBoGewf35u8y4LuGLCCHTjVhsrqZu43"
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
