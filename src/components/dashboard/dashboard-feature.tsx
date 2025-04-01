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
    "4a6TbZApKNHiUdxTZ88pHnmJm9V8G2BsSYkGjquqvgA2UZugW3TbxB94WpxqbpSHPDAgiWk5HkaxnBJHu8ETjNdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ohxqwL1gC54E9m4dxz3rtNLT3UCzmr8ES6FPt9xWavu7JnrB9egMnPc5L3TjcEb67Kngr6JRnceqpkTfti7Df8D",
  "key1": "1bsDY6xfxbr5piH6Vi7s65r2Dm2xZT1QSpwKx7sSSdpng8GPvHG1CrRWgVJQzDp4PkHnRynKKf6pKKnmWcc4fXx",
  "key2": "4eHzKBAcZZRqKRRj7q7MtyTFAmyznzHc3updUXfbiXdXsMqXxSGrUi5SmWLjd6kpfTWjRSp7pAniN1MpEuLcyGZX",
  "key3": "5NHvTA9TYRJpoKzHZGMdosH1jufvd1wu6KZy5VoaN6kMXKjMCXisKs8BbpJFf3JGFzVc6T7x13pC9RQHqg2SxhSq",
  "key4": "NixyunpYZEjDQFZ2CEkSoKms9mhVKMKQKvyDXUtu1QvdZod8j4u5X5S47B2qALJK3HutasXv5HhbrAsx7J2YCuH",
  "key5": "5nz7tDDZ7CxgvLxqVkHnfPAMbmqBngeeUrQUUmGErkeEtkANWBuwQNCC9tqN2tDTZaRW6oxgiD1dhspTWusTjWmp",
  "key6": "pX7MAdZJum6Qw89t911DJGqsCBr7wAkjgNGLD4nGFaawPNsyENVeoujPUjKugQmWEvKNkVK7rJQCUsRTqa2yH2T",
  "key7": "26baYsoV3BDp7DeyfC8E2DWHeYX5NP74mjD3CbeTkCZ7NcUtopEAE472YzjiomFbrCvR4T98PvrQVcGJjGSjT8cJ",
  "key8": "2bkAMJa6djGxBGqtfDwZgaYw5sbqTapKg4iZk5zVWRPA15Vc2gM3jxMuvqKoxJF4XAJgTREgYiJ4FRUtzk2APWTp",
  "key9": "3ertnheZJuhLB4Ur1HzVfQNL1AiMzibjFL9JndREZnvPKWJR5yhyfVERz1YEKZWBVekaDCZVhZCxbvibhQHexJMD",
  "key10": "3w2ak4t997c3PdPKpBEEHEn5U5GeWKQ1UF8pHsUrXWQ8VynaMvrkA2Xj1KC8Za8CYGWo5txdRN8WRnjVQxPGyHzk",
  "key11": "5cuz1CFFzsGCu9J4651WpStaM9k4mjNDfwgFhgd4Nc3PmQvzPPyqoerz3z8xf3vBzLF1WboBYW1Y24brBt2kMmTo",
  "key12": "49yEvjMa4fdfTVM4pdiy7AtTfc4S5dyRUpQXkh678YH1QwRnv14f1CDybbVqswSwi3msdSoCZ6WvGNpaCVkpreKH",
  "key13": "TNaJLQbud6VBXJwcuCYXppWmUVW4Pfwip2Lvs8vYeT9qfrscTDEcyvWPPLUqeWDnYcGu8EKjvLTd3Myc2dguGZ4",
  "key14": "4thuaSAAUejTFLzDvRZs5b8G5c5HxNDEJb7hsk4xxfW9hhy2pEfynaekJGRZvmVP1z7CKEYJisdP63k4FoHSPxRL",
  "key15": "4eY8fxd5CTfwqkczYS2hveATKBNYYVJpfLzD2CCrk5m6wpRejexbzoPAofhqkhnde1CCSy1DhkD3WssomnRj8Cxx",
  "key16": "3LTGsag6VddRzGvzLtY3Ap7D4csLb5B4tqyjXZf2tZgF8ZFunmUPLUvE9rtcZ3B7EVQQHJkGzyg6dCBEPJa27Lk5",
  "key17": "5nxU6sQ4eG5ekxySqW7cuci3eE96vUcUdv2ebMxDZCmnbSb8bDXHE4k32NRBdb5GTn2cJCsgV9BnhWXRN42ocZYY",
  "key18": "2L6k9mKZGyv27Jz2UfpEoPTkRFsrnzi4ypTNZaKevjqp8n3EN8FDDg1zQYzkNVrX7EDrMxgAfsaBSMc446e7TNiB",
  "key19": "z4ZLxzp7WccaHxMFqjXd6BzLS1ypmH9fJfjPgfSWbBocgHdRknrRDZTP2MjYRwW32rVB4Hn2qGKjK2cPHzXZJju",
  "key20": "6rnru9SNpuYfLgNXeHdU6rBN6TvGN9i7N78CmjDsS1d7b8z7NSsSNorReSpqyL2FHrTMLn5w1Jt597SLi5kUtaQ",
  "key21": "5MDtbHb1E1BvDxbo37qF1Zw9htEvEj5Vi8w24RPLVkDo9PBArcHJhQthYxzgDTuDngF6TaehxhvMZDMUfJVCsy1N",
  "key22": "DYbeJMJpqvjXXGYHr9rv1ZLX6Cdss6UYZNiCr3PXgAkXwLdFLTfHc957cHHcycpAr6ZbnxK7KmeCxysuVdrBi5w",
  "key23": "246RecoeiKDuEP8ptseTjCBHFhqFAn3prtXZLFf4C12NdfJ1EXkCrcmC3a3U9dJPysCiaWuuRqLbQjmidK6ieo2w",
  "key24": "62uXtmAm9mbqY5ADxXSWpLfFBahbTMrJUhiP8dpwdYeGzyUo3DB2417iweTPpRZt2KEmwvh8a8teF9NATwFpcxX5",
  "key25": "3ASgTSAhgVEXbHUbxJu7og1ktCTxhU3Gazw4emzTVBZD1ecYiBWbeMx73W7j8UjCHavbXCLQGKdyeWovLMscTfDP",
  "key26": "5PUStA1oTiugCMeR6mcGk6utWFjFT33zJUQ8MYg6nC5scJMChowhM1vc5avBAFK7cdc21Pkm65uoaFvhDYx8AeLV",
  "key27": "3h1EhaU62MkPxM28Cqq7jMiqTDXESfRUTioaBCwTd162Tsu5AKRZ3G74HMQtmsnqutoudBe1brJDbuSBFi7L3B55"
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
