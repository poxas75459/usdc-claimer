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
    "3ptsCukSoQzCQRSnBFaBXtRJXPkipUsYPm9j3G7zeF9WF8N3G5rdTKGPRJWmvy7Lm9SWZjCbH55rXrucRhVau2r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47nXdB3ufk89iM9DFf9JAvdefgzhTxsVwkMxvm2t2tVrBrB7XRsFkHVJi1e26XoCj58ZB3fH1dmTxSwvTLhZMGW7",
  "key1": "5mjAQJyb2UDks6WucuZJrTCMh4YLu8UbAeXhehxTc5KRpMzaCE4CDQaXowU2wzDo6GEkmk3AdstrnUTQM6AVetsf",
  "key2": "3JZbtu7JSx1kyyCvX2JwcFk8cEZbLtWuav3QXm9AF1Whu6pmNTrJttBVERTSNnG2hgXUEah5SUYxvrCkeYGJKtEa",
  "key3": "5qk7SwLaSeSqtzHH3Ue63hkKxjh6hSRefiW1GRaNDMLbSWP8FnU5DMVQ3r2eVirNfKpgeBEHXR7T6RLhX5jZeszV",
  "key4": "5hNMPNLDENj2L1eXxAFMwD3tUr1vAikz8RS3WZMuEdHjcPbHTperop1AyEuqxqRkvn96bExsAENuLR2QdqZMGReq",
  "key5": "5X4i32R7TXei6BtBokdEBMw9NND6pQSHzwxosaSmxYjZM5Bsnte314LUxEcadBgEs22yQiR9FkxTup37p5qBAGXr",
  "key6": "4xM55CNQTTYD2ggH5aSxUByWTWm9Q2mE37Y5wGWpBUXGJcdLKYovqm2K4MAXigvAPPM6XGXjxCXteWQKJDd4L7KC",
  "key7": "3PkPVZtYYewqW7fXTnRZ95VjEFViJWy3HPmXSxjn6Y6YwZs8EQutRBgS5D5mGZzZNRLN4HnLmF2xQseAApTue9sx",
  "key8": "Tt663rsBv6pgJ84wUemk7xjUDxjxPAPJSdSp9ampmtbco9HVGR5QukX9BMpPPVRgY3XUEySQyBv41dyoBuKj3Hz",
  "key9": "5h6Q7jWstLSuFrGFsVPTCqDYenpnDRv6BA8UNb42SSoucXwAUHZ3Q1E29SgyELfkQK9NLnt7kU4v9p7rpM6k3QMs",
  "key10": "3TVwCm8PP7X3yRPGjbNZ3tE8MndZdf6JQZzrUJUYSqLv194SAcNLtoPjL8MNWBWy4CyLBUKWKjRpRAXVReKpTue1",
  "key11": "42cBBkAcCNKVScgsZVnZR7MmnXyXGvYNRv4PFLXWCyEm9KkXdDGsMtPfbd6zS21SpVB3576ZYxYNSG2pLrN37vcD",
  "key12": "2q6pNGxSzePGqhZARZzafTsXXACKXgBRkuUt2tLrE8pAT2qHfkviKC83HFXnfUQJc5qb6QkG88ZEzHQ4kMyuUQRx",
  "key13": "5RbS1hrLStHdLQH7vqNFhrKFpeNxmrL5Qqx1b1G37QacGYC1Q4xw8fXjosPDij2E3LVpXWjqs9WMHfcemdTk4ufP",
  "key14": "3JYGE48UU1DjoVSHYLasjRb6jM1KaNfrSVF7ykjNBE6a6Maye36jfPosH9AQN6179d5peuvhmJR89va1Gxedcz8M",
  "key15": "61tpYB6MdCBPM3hPVS4McGKnvtbTkk25U7Lu4S2tdNqBWmkwM6gWhuSYf4roVBALYWJkJ4WA9xnYpPrP2uQP6C7a",
  "key16": "Xi6ZoTZHMZjS9xBe34n3scL4n6n7bTQGsnrFXVndtTS4SepSBHGzAa24EcWuQjRTLdQSkQkadY5p3K5RxERLdhX",
  "key17": "4o7eBEvXoCSHd67txURRW98WXPnX3agd8mHnp6nmpJvwbcz9DVy3VyQ3y4q4DG5773Vi63G4TdifA7zYnPB6FZ6u",
  "key18": "4Y4suJo9cryBJmQJNj8NRAi39oqSAMBEcGqTK9m62sjXiZsx4Ee3Q5ABKmthtEroG5r4gdHF3CH1n154u14Nr8Mr",
  "key19": "25BRYTmRiNZbxfFAZGM6TWk98cicMNSpGQxVXCmLTUkEMwrTYa7HX392TAgbUPuAK7rUBJdFKzpWzpjJcSyHSEob",
  "key20": "3vrqycbioJtd449gBoDN4qwQUYdiMdRh2yBeZ9x4Nw3D2ATMb8cp8R2qTwtFD6gKaShHJyoYrxeCrNGNd9KhwPzM",
  "key21": "5HoXj5CskxzpzoBxfQ9ZEeTPYUMDJ7QKE727PxViyAQRutAPtHxUQhuabmmv6UYR6rKozsqayH6gjEUBxQokKf21",
  "key22": "xmZVCMUAU2GQWK45NT1Zo73q7ybzAxkAh6M462Hzd4CbSz9aTgtPqXhb6o71fi88E2grZW22Cdj63Ah3ZboHT6a",
  "key23": "3qacPWv1EXSX9F6DzukMPFrnq6vG37vK9u7BJSdp47g53LFHYohCousQnQStgMumWcAMmcKxGfq5pry9Mr6yh6oT",
  "key24": "5WLDcBKvKaqx4pMRP9z8kxpu2DrHWnU45eoL9znE5ijsnrnFQ2FuqVBjK1aBpavCgWcpM4Z9o9eREwz1fFve5mL5",
  "key25": "572Gg4gi3UMYY7jg1ZmDHhjzqbB7AAUp6zgLPQR3QyLLdrPWLcNKxMQBZ3rGRrvUnY5xAtmMCbEvFczuVu2eWLzo",
  "key26": "3zCb9PHoK8kuaYMB2hJhD9mfraciVDu8kNTwuKifXx9QrVsehzVrVg6XYvHDfgRHgQYgPmNu3gYSmcVy2KeMnYgx",
  "key27": "3g3WrPevUmeXKFYxrfNGFcDAnJQtdxAYQubVkXzx9rC6Rab3MBvTWSeuttyM26FHdaUKAdjB8z29T4hTuyR3o4cv",
  "key28": "4518p36zpm4DsFArKjTUTRsMhboikceqKW2oVccU4eGo6pPFAv6gwhcT6PnnvLDViGJM7R6gygRaT8QVC3VH5k46",
  "key29": "282WnjhJ6QuaPLeyx3SEB9fzcBpGKNVySbUncUdsusHvSidK3zojJUtDdMmSf5dW5snav82oqqwjX4UsKqyd8oz8"
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
