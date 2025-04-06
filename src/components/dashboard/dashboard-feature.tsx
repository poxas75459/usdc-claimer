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
    "36xDocCH95sVVNjpqQy3yR4KMi8xkuwRDdxDbQHytuLstYGDfNZVWX3H8SRC1mANgUDLBUweVyvmnjCNmisZKr8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwrFcBK8eBa7xqxx7aBUQ5Nm1aDfPKxbegkZakPBvcMDr9yzb2WDM8NksxuEpt5ahhEjusLBDjeupGkkwv78NT2",
  "key1": "67cMEGzDPESieUkfHq8Fr3NEcm5wYNE16682dqcS7XhYo6WcoWd6zye2NRXEUEoAdcaDU2Gjrb5oHUyqyMJbX83V",
  "key2": "4ABgUXx93PN65C9mRATvgoSBdKwpMW4r4NSEbqbx2iycVABvR2SSrLBXH9haMyHXZCoMToEH292EpU7uoqq6EWut",
  "key3": "4BrDVG3za76aSnWDovNjoXDZ3hyG8SVRVkFj7W29Us5h8eGtgNCAaRHg8KkTqS2SYJpwjcwSXNEDA1iJ2WxGmPSc",
  "key4": "2dRE8h5vtwtuatm8W2h5Cj565EcDcdUo59SfdJ8VerQfY3X8JedtVFefTSkn3aaSmkkyhctpWw5TcjCv6JDFsDTR",
  "key5": "2Qdjpcuv9mksG9M3kHP5crja5my6UPp8uEkogzAivQodRuDgF1q7q21nytKTCnScgTeGQtLdQdB2U86zJ5WKXn8e",
  "key6": "N8jLA7Cet5osEnqSVQvRBaqY5tSZCV9BXFZ7rLYv4bRruEaAQnJSRpcttcVMz4KUFtkZJ3Utxb19n2r8TrFpk6D",
  "key7": "2C7nBhHrLjZeFUsWJPLwr2F3vPUzGweYo7zGWBCT8mj2PjgpTHsRndJYPnZTNibphSMUt9eAHMCLisB7qicvVva8",
  "key8": "4vB3jzkHTv8B7hxn5eVfFKPuKs9NoJ6uYgwRQz7kWxM5oc7Sb65VLufBRrb5w6kx8U8fczmyCcuQ7bhsGFvxVgXG",
  "key9": "3efWH1yQB3ZLTakyQSU6qhPDkYCdQm2FAM11d2guyd3XtPAi8FHMS1yMdTsGTURAWznv7bGJJVVJiV5pXsPTpX8j",
  "key10": "3d49Fj7GV6SosGureTbxvpydAjaRvWy6JxGETmWbNWZsxW1iLbHabEWrBWGH1cNGXbiVp7s7Q9wXF6qkFu5PuJW",
  "key11": "3jS4BjaB9maqVSQ1zNpDu9DpA2yYJFzMZ7ymfFc5g6nvepCzpCBkCKH3xHaCRdpDxbAgc3iKiWSjZnAc7RrpWhWg",
  "key12": "sDqtfhFV2ZD86MpnHQatrWxbR1hapTmALT33uiMfwpcyKyeLiF3QNJ5FtsG1gLUq5TYXn9pMZE6oLgm7tLnTRnL",
  "key13": "4nbfvfsgL3UwPsVcvZ66zXioxpGMwZrGSC2ANkMKCErBtDn5k188CdAKVmXUfxEiJzERpeSgUovFNb9F8Voqp4hu",
  "key14": "2UJJ7iUWsp45L6YzAG4FW1AnJr5nRrmPSrLGKzkWmKmS9r4xcYU6J2pEJrkqcrbL51EzB21uXFUWW6KwrF8CVGYQ",
  "key15": "3pDwQsdaDbjSMpkzHQQuvF3oPJjDUYZGGdzEiCSAcC3wGWow6wN4HWVpaYNGYRxcdgEFyNqxszLszuzsSYniJwYD",
  "key16": "25ejufHDNWyU9mH97gUe1y7TWXN6ZtffJtmnNvaTkUBWAyogLirxrTc85cnqXdjNyXDp7TeNwRPeTcNuv5FabvWN",
  "key17": "21iTztxkuuuPJeh2r2fXcLGyyYtxKjFmSJmb3BvLcgAAvVKuoeTbAjaeK74guFCcGUKm9vKzNNbuWL1NAaMCxtcQ",
  "key18": "3Gcg6dZmi15YoBZoronnemjPoc5Ruwv4w3DTRg6jTLgm59uNPeUTHDnoNoquAT4W2LEcHKKC2xZ4y5avZbS9a1DC",
  "key19": "3zbuYeADufKbj75LuvtfX6AUyqAiY6mcMNiantkxaJopXf1pH1v5BVn4y2eaMwiqidP6dvUSMiUVcvXDaN2zfsjK",
  "key20": "2s2R74Hj6SCrEP8ec22EjU32St72j1ymRR9hdxfa43Gqmc2bSCs7VNy6GDZ6irk18pac5pvDt5Jz2rniaqXSFgGm",
  "key21": "3WHG2cpwneioSqDpBvhqzMhkfPhoqcLV84cmSv3NSd51MK2cbFLFVcRA8fKL1j5D6t5sbgYnwF77Fvjzwxk1hhJU",
  "key22": "DiFybJx5bPhax5iQh2XBPvzYKNNQ6WUC23iiACA96jywf4hGj96JtFKt7aKynD9TB3HcVhWpL7EGkWREXoKmyEv",
  "key23": "1WAzaGonMZX6J6gqv7dTnTNq8oDkHyxgcY1jNw2oNgoBcfcs6BD3Uhq649WwgnmQq2YzwtUWhj6Re5uLYMkPAqK",
  "key24": "4ev4hMVhqq9oftsMiPgXGbZAcASuhhni4RQ13ssqDmiySXbxKixi5a1sEoKwcT2ZkJW1GoQydsitiab3ANmsNPS3",
  "key25": "3WeXJUHz4t32ZsLUZPkqBNL2cQKbm2ZFzQv4rY2WoFRB1hbVsAs6846rSrnhLa2MwYCFbM4SaViLXVLpSzdjZQWk",
  "key26": "51xsGsoZVtZ1MNXLDYxLHPgFAH8CnNZ7UZnf16Gq2kc2jbnfxo6PnyYLek5uYu27zTvvDEJjtyAE6DYHyzRYpzef",
  "key27": "5qPhT6R6hnKtLZtZzCgEsMSjC1H3wQ2Y4XbN4jEt7bv45vqdoniioyqC3KnKrqUFLbfgzCK6mos5MdvibQGwhEwh",
  "key28": "45nUsgneVM1F7BVRXciyfHSyxG3gDTc1A3opQsL6HSyEFCNugGBg4qVv9so8tJjLJbsv9iAFbJzfsxY8roErLb91",
  "key29": "QTNq3XLf3uRTQxUMTjZEAaFVDF7dUDfbf7AfzrxmSZ2r3Pg6Y6br96ofYqgw25EpjSJDwptbmztwxyddd8AC8TQ",
  "key30": "4VTYwHGCTSugZMAJPp6PyQSruzCyiRJkxWAQPEVqf2HT9oa2pmTV4ZjUghbBwxw63B6skD5CR5VfbPafrkLTFzMA"
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
