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
    "24nH9X4HxYkTBLUqJKMn3qedymBSvF1hQjpLuDX63TM2RLQ14edNieopPmTct87FiyPyRMzJJp5m6XYfyAfRjK7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQqPpVRBJM6rLFiAY9cpnG5voN7JnkTE8fkwiZyweRrVaKrSG7mGupneJe5CkYk8WJVmC1qsXfuCqNMeKvqHLgV",
  "key1": "3m2uBn7tBjimCQnDxoAN7vjXdUKggFZvebDvMq6cHUAcYWU9axQdGPJUM519CudFLSenZPiBBswC6EzxsRQXaMWh",
  "key2": "66FaComgLvS6bqfro8cZ5RS8oC7na9Ne2yN2j43tot99by3QULKKmYxREM7AtpQHv9yYJESUvEXj2zd9QpbAHjt2",
  "key3": "3Gfigu9j96tXnekBjQFU8KF8CNH4STHYMwR8mKC5cobV3AK7nzXsqcXFKNBTWyRQaZvNvbaQH93wGtGAfVeFSENg",
  "key4": "2grnxrRhoi9JbXfjevkDa14m4ULvERAPwCWTd1bsvnzeJ24QC4JWk8z2KyDEHcnhcRGpyFgquK8uTgPBpRCWymXr",
  "key5": "2U3aRLcqZwHb2Va3ekScEjXgaoyATQstbvwRwsnaieVxHSaRSgZDsjcSrMvAkpgN1Xxx1EiwbY214tjAxZDkVe1m",
  "key6": "DRo2xoeUdQVXn8cYUyMZcJJVpPvv12tDzsoDgkJVQpiSAqHc3RBZyK1xr8nzZcGaRB6ktuRXWjurHovNrD3YYhi",
  "key7": "4tb3nByDKNxTvXQRjR1zwJSKoMCeRrWxL8YPYDH1o59RPTz6GqFURkb7PBKxsmdKAXYqY32r81xuaNWjYPMo95dL",
  "key8": "AbdYA7LS3EFa6Uq4YzNgNQoz1dtqmi7c7HWBBjDZ7dNBgnp8y1aSsU5YhprsgKAcVgykbZ4Uc3FYkS4mFYECPqS",
  "key9": "3U1FKgdTAErQ417auPjq6rF8RTxNRuryy9SrwAyVgBKNuKMDXvKLo9aHF2ryM2rV6mJjEbZ8Y96EKiUiyCz1Loo1",
  "key10": "4PoEPqEsvqGYzH5fhXThhRk7dxVN13MwEoPPftwHhTYHes4FFkyMKjgfn9UGqudDRrV6DPsDEwNyTqj2YjnNv1gR",
  "key11": "93xNBVELM5aLXYcFC6ykDS9AZ4CMJ3MSqbyCNtmGTTsu6AJXz9gWuAZmePVLUxkD5J6Cc7jBbNhP18R7HQGR7PM",
  "key12": "tcvipqRpjVst67JR1NaUJAnasabq1K2GkqoxYV8oNx8zMkyP3YVBbb8SPxkzevvR68Go8v3jRDyJzs5eybGfzpP",
  "key13": "DdM7bFV6LiNjG5JAWkANvsKCSsWaTMAxFdjHMfTfj4Xy6WfCbq2UH5jvCG7pUSv8W7gsg8XcPsMNvPRGnCwa97H",
  "key14": "Avzxpcax4ZR84uWAmDYzJPjcmnosdSSR98m2BxpQHdapfSbNZ38zgv4SWdRaUcSUHBqGmy9WZWHuVwt9MfmLB5L",
  "key15": "gKnuqAb3bVJs3ocBTjfBnURiwmj7rvMWSv67fLPqt9r3LpHKb6biEhce2JdHMWoxkKHCA2RN1QyeZxkWqSNxzuj",
  "key16": "4iuHJ4r1vb9rbXrDTiEV3reSeBHKJfrELbJaJGxTaC15YaBssvSP1MbobHBmejNgajifQvysnPshpch8GMVboWQs",
  "key17": "pR8Z8CP8ENVfZfhPRvX6WoTxajatvEBECxFuM6fCKtTpeRUWmGRLxv3f6Um8ZbvtnytvzbVsaeSQnWoKkcT1HCJ",
  "key18": "38rHqb7zb2nHpoKF93g3hrrMQo3n6Mq6MEdhT7gZbvB4vfhB11RQ2fsJrGPeWWifpJ1eM3WjszrBm6ei9MyuL5DZ",
  "key19": "2LV5jzqLMK6LFvX9dKxuvuTTJqzRNNCyFJszBhdexGKSh8ajHgxQDMVRg3f3h63pXosJibyXwvSL6rsLaoWRY2i5",
  "key20": "8Jom1BQrD85kFqTuRafxS5p5MydJwmjRG9868CeopUe68kUNRXg1CXxFHAMhffVq8PYiSLgrzTq7ZfodLB5hqY3",
  "key21": "3v2igzmLLB4hHWZLQyVHFaUsHsZJdDE3BZtwFzWLMN2soLMgsCghBX9i4LXTikSwtmBtSRbLjvFCL3M5f6aGCvfN",
  "key22": "oN6WtstG46y2AL2zLEx7BzD2xTLta5YVSkBep9UddzkXTmgDHi29gDWNn4msvcRAS7hUkhTNmyQ1AujKXmysish",
  "key23": "45s4MvaRUrvEdrFRQpNUHPPog9DfXAHQcadgf56fyHE6fmNnSBVCQWUasRYnamC1xWMfZSpC8SzGVwLsKJU1m2hk",
  "key24": "4uyi1ZRYLSW5Urv2PmLk2d7nvDieNu644bkKZUnFY1w7B91uZg2wUn9TUyu331rpzRUbFtariDPNy5L8BCqFtocH",
  "key25": "3TzL3nPvyE9UfzNUGDyyjL44Vx6w6fBPmWFMV5v43y4jATktkaPNVJ3w3Kai1nUmPuy8aTNDfFbTCFqCBcJP8ZJU",
  "key26": "57DresYJUASRpapvXtJaUCVqHAgXeNRk38rb9PmTbv6Vuak1kQWZud2puF5EhBkHLUXakifMenMk3vjJBspVfRSy",
  "key27": "3maHDsZprLykjTMSe9jxTZGuyaVzUjPNV26xY8Cx1NKGG7DXRMZuyZYTZC6795Ga8dBGdSKE5whsPRBdnUJr4zqW",
  "key28": "3FDYLG6HYZjByj6zY2a2vpMjkWx58qFW1zYevUJUaQ9usi1M5DT3UZCYFeLSm6njVcikrBn3jKzFLUNX2adLvYNy",
  "key29": "5TYvXZXQtn2HYpbiVKBPKUYK2tN6EjgqgsJYY5CH8ayVER6R1T4MuhpLm5DJJuowsQ3Wt14QjNXHVNGX3X2jWwSs",
  "key30": "2VWfbKyaTveswoefAC7Q5FDWwpwwMC7ptedEgM2SUzTE4eBhJkN7dEXw2JWJvMBfNnaNtoWxZAvQ6rvUYx8K4XHd"
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
