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
    "3JGBexpQbHVb7SnUgBTVm2mWX6wXzDKFuBTKAGmcXakWYHS1hcxkWRih8u9Np84B6d5BynBrPQKP5f6DfMTqJiCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fokSVFDHkAMYGZpo2MwLYeNL5L9dminx5PTSQjwJC9CTAAdeQiE6syi1mvkkKbKyQo7idymwYnDEjzGmns8w13R",
  "key1": "29ysqb1mAdYsUjx1pyXdXExcZjEmXMPHhuEvowPdHYYzv33DT7sHrbSfGdyd38FF6a4NEsf9YoKd9cBhgNWdGvYK",
  "key2": "3dNbHWupBkqnUUXVrpcqUNqH3ruzMYo4BJozzg9jqNvVKreZ8qfRqWCUP3EhVdR95k9kZKrHEutiEcTNzG6gkqwa",
  "key3": "2c6E5FNkcrZ4cXmucGMX2mQeXm6ux3LFCavL5D6nrmQLuxPw89vLomS3hiDb1uaZ7nwfa2NUotqa9AvTerDjjBDw",
  "key4": "5Qp3i7Zh3YDd3dq1rcr2DmdUaoWwKjb7kGMjQXuVURjUiF8UgJRaC9fSUvk1ojyjaAZj2Hc2pKJPnnXCLa9qaTee",
  "key5": "2rUpmrowGgqXc7K2gYpxjgbvGGVmhdWxLzd58mUjzmaEzYmuLM6LJEyuMuveVqVcsTttikWsDxC14cWhct6YVfvE",
  "key6": "UJrk98VP9afh4FdfJDf7LgNz3gCnMJM71tg9FJLS6apK8S5jhdhuPEFA7nt8DouKxnmG7ViEhrxC2tamZiuZuhw",
  "key7": "3VvgHri81VfAkhYjBRVZ5tZAx3togWQbyJ7bRXZkUr7EvzuLGxFXn2hXA1e8vP5x3cci4HuWubsF9QsAm8qoMiCp",
  "key8": "4RVZNuNfvV1fk17r6kUu9uVSpzeD8Q5Z8bFTzDAWVn3dk7uJHZU1UY1KBQ5tgHLWTfxCdEs5ZK4L9FagiRXAMNZh",
  "key9": "5cbND5T8ZGL6XGeMNggfu2dsRnseg1JmkCzGR18fkfkKrHbX5DsZhWfuYjpq7GfiEEo91Naf6MkpaufRL7bQKAEk",
  "key10": "4iWzHtyTK8RvHkK1YAphekeBbJQY77fnmWQZzyYiE53wiP17MG5GY7eJJgvtYu63S3p78Jwyev45M7qdnjen7ytA",
  "key11": "2Q6F2wZd1MRQkXGktDji7RY2uGnooRbrmNpFv2Hb4wJAvWum3cXYynDNydHy14NCEQXGdeQhH3Jmh3bsPqVX2uE2",
  "key12": "4HgeiKcu2VpxDEUYmXiqeEh9TTiCsach95sysxbo8esBtJkhoJZYVSwT8w2NocvUcXX4ZH7N3F4H73wMpsicu5re",
  "key13": "334RVBZ8tMD9uVoq5iDqBFKrnkafECb3ihNyo6kj4DShahtE8aYYjFsqgVkm9RaCxUaer5wsyHpAUEbpDCoA6TDD",
  "key14": "N95pwYawyCuKrWR1oKLuVJPY4QM4vU3AvE2VoRYSq2E72wwh6w8UaUUWYE33youPdVrd53giiKgHWDRRcKUmnR9",
  "key15": "3nzj3RUEmiu7APwg3uqMHLRGZyd1Py7q2pypFxDmq8uZ185CsvTFJcPFPeWECkANodZ46Yi9k5GKfSgjgxdqBbxA",
  "key16": "2U4akZjEC13EzaQLehx8U7QDfA3ct3hfbaEDPSP13JC832vPdVo74r4CA8cAbYxcdhW7AEW8uvBYBhzsRzsVYFjs",
  "key17": "4QeKabzkXkLBjQDUiHZaPzXBWWDG4bcr7BiuSaRNxb1FSM5mdQ6PEN8ZZ2wMaSjRqtGwSiPtKz5hcmxmy73TyKEt",
  "key18": "nttEXyaidTY4ew2nK6ikxLVx6kiArSdYC4L7VzWk5YknJu5q8HpTt4jncogKa1ffUnT12i98AUeCJwEy38dcnX5",
  "key19": "67dwLhKHYWtFf9kxYAas9Ay4zYUumhnF2bgRFzXzYf1zbm96QKy9W1zXzxWBhrtK355m4WAwPqPmnJ6TKQVArPam",
  "key20": "5iU1gacyY3NZ8n3Edbt9qQnFjFBevqQjUJWRR3HDAADfoZcp1BRnP7aSzt6kGVLc5LiYxSh8SvmXAmgQvAxsiDPE",
  "key21": "5Gezbv86sJJxAeNWzUv4ytqReSbGMyr7DY2Sf6YbNB2GiUoLbQHGtNkLfULuGNnsMoTB7KrsSM1mdKpJZ39gyv3S",
  "key22": "2U7da12bMfJHzGwinCvQk9qo1h4BE2Wqomq3tXtMifnd9mcvbX6mzFsCrNiNzar4XgTkLEDvGwUKW1VXerZX4jjb",
  "key23": "4ZaEnrZgxU5wgWzwqDBzzvCqpmXjvNzuPW3MCqenYb4nVr2EUAtjLMVL8XqK65sQM5uWrEFcWz7BkgwhUKPfx5f7",
  "key24": "5XEwrfSGLsKhExq8M6HFPTQPbmAWJCdDN98UBDEe9VTwgAvcpquS1kFF1TX6frhhpGGnvSDEMNsAn35E911j12vj",
  "key25": "3rRGo8Pin5nzinbxcZCcbZJcs7mSKw91fLUpa5mFVPMnCoCQM23iCLqpWb6MnpJvcAe2okc7RjUPu3Pr5m4pjBso",
  "key26": "5RACvZrai6SkKjYHKeJCGEKWRKTsECRr3GUD3wVzWGmCULEvGFr5Hmsr3L6Sa86pQcMkzk5QwpeiSoP1nbo1RQJf",
  "key27": "2EWMD9pzijpN1t5FcTi3njWdDJ5K3DkdEC8QdbZedt37ac6mBoADN6Sq5S9MdwUrmBrNcgypT6hpcsu152qmYXuL",
  "key28": "7hc3VNJsRAQZ8m1JRvqZWu5TkkDzZA9cp5VLGditkqoiA3QQcCZf5aqGKZsyShTD5XPFebejTFvx31iou7aSsQ6",
  "key29": "4CUnE86pL2cbQabWtwdCFfuBscNnPjFbKoh6GjqLbzHmK9X5FkxNSRCMuyZTn4TGcBJ7FCvMmdTLXscUNz59Dx9U",
  "key30": "3HossovRvv1mVry4DFi3qu1vvAkwgNsCzQoiriUj1QX9fPi9Z9zbwB4shUKTCXC64YWk2n52fU3i2z6E34FScPZR",
  "key31": "3LXcZSvm3WHuYHazgBzKLKaF6JV41i6uU7FJ2FT5KnbLjeEL9wX8VanJbLmR5Qj7gvZLkXjqo1QCfxrKL8T9AieJ",
  "key32": "41bPfWeaBu7oNyHR22QjowPePP5mRgjYNWQ9tuXzLbYCyPmzxLhx8BzjLzaP6TkdnsSZnFfAWKA17fSewJFzBH6P",
  "key33": "JhJvkPBXtR3ZPxf4dhG23UeHe2MwrFfgJaKee1ryTUnnAyQtvhQ8Ci9mxqArG7w14rLB8tGZZExUBmWAekqRL9t",
  "key34": "4vcCH8DXTFtG5mjEsew7ejo6gunBrBC9Ucw6na15AazSqvbEHm31sPkaEFSGV1YDA9AuQsf1TqS5YYZ6KNYsH7aY",
  "key35": "2L4uyBzHZGKvnLVMAWK3JdHYMTx5WgbJzrigKVY8SkUvjKwVCzci5jDssc13HGuvJP64NZgmnuiSHMJpMeqLZN3n",
  "key36": "2nkUbbakZqX7yTESKVH345mCXh7qjA3ixTZKDZmZ4WQRNMQAd1GiM2Y3hrpyj8BDCZFTpvzAU5Rg5iwXzExAioqT",
  "key37": "4MPbdhDw9bA1R2ebAHk1KTsjab7wi38oCcnLqLBJtg9D1AA4y44brsoUg4TBtCSvjuV9RXnERVgEgNgEMiFYC7M3"
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
