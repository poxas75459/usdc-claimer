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
    "4TeAQxwy71zRbCySWqnfqCJuRfb7dspmBF2bk5ZeaYKwPCPuNpwHzUEtp8dyqXJEs1u8RR81p4kiRwszFffWeNEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWiHrJckbWtUtKsD8WeRhKo7hRRC4wTf6YoCDzvwz4Qgr7mA3NFjxsN6h7AWZY88FAX6rZighRi7N9XLy329NHC",
  "key1": "38nPs3Uk472ZrFuSWWEuWw7qMbLu84THGcQWGhKeddWWfnPkbeLc3Dv8Uu2wCqJQcF9gKDdgVyA5jw84nHxAEWbp",
  "key2": "4HGpNJyjVNrrLJdcVB5PmRMxFnxdG711ondvfY2uPb5K1JoLiRPnc772u4Peq1HHtWbKpEEnKVAjCkuj2Vwgfrvu",
  "key3": "Z8iDGjPPtw9uDdzKxMvpCL5THk5pgisE2XYHyzzxpepPbqfAYkKDSfj2kM3mHT53z3v21SXd2teDJxta8275KYR",
  "key4": "3byi5G93TNFQETQjUuH63P77uS1chJqqpFA6pwKN8ZEqb278EvS8wZxZ7La9oTmZgnq6gCMk1m2UmCAjta3JvmR7",
  "key5": "3M9C9C7QnF2sJdT4B8cbTX2n8kkz84N1V76iidheQVvAJYJm1XGXfGgjfvQREYHSkCBtBcJfy4X6W2n5wYSZphWJ",
  "key6": "49NwU6BPBGXeJzCwD26bqqSWsxejxMAEiUFUUTTXTqTVxLGuStGueGcKipzSEbN8FRE2bHc2TKTrDq19NXriBuvk",
  "key7": "2Tv85d26QaWEsjcv749KoB7FrYVEwu9nQtVcrjNYC3vzCSZP9Zfu7r3MWktkjPxevjihzg6t5WJdG5B58BfKj2ed",
  "key8": "32w9KjdEroBUMYuYueWT3o4yULWVn4YS6WXUU2Y4RpTnPhdL1ZvwmR62Z1eeHjLuvPuZgHaXrweiGvAD1sEfSWjd",
  "key9": "48ha6MUw396ccWGqCVA9JJju5bCLEz7oDubHPudmCATnDe3GQtGUDHASc5yZjCH8u1KBjhJ5M6xTQb5tGsF3X2GR",
  "key10": "5EW4Xzw3U4AgbZ5xfUVgNSm2AKZNBiw2RAmD1635Gg73cXirc2fcXh2jCLTbkEjJkpgkBhdiQ6yZsE7GyjXCwHMK",
  "key11": "5eJLQ32xUBFMwSHGEpymUPf2eWXBBfHK8qkXYt7RdExRoUyhErhnBaUtMArk8Qaas5tiUDQ2rMdGAju1WK5nbg4m",
  "key12": "5UBsUxdGWd4SNcBQFHTJvgHn8GQFLZ3mf9eeeXUMFR5myYux3j9dZ3h54Fezmh53wNv1P8UHz6ZcmHXUXDmmnX7b",
  "key13": "3WLKBwFEoe9XLHN4oRZVvxgLd2w69TkezatZSoUWR8THgWgMBBeYrNuJ5TbbQnBYT9fjoiV9JAJQVrFX8D4qnMZ2",
  "key14": "2YzoNEHpVacs48YrNy98zjJR4FUVSP7dMH7QxVJ3vVeSUiqpACibvobZekVYUygbd4Zb2YYcCXysmToWmFq2199q",
  "key15": "5qmNj75U6mMeiJBqXGHQ5BmGDBWQcMwm4DEh91UtVkgVPE7QUbW2MUuBuhaFFuVh6VfQHnvtNbHtCMuz6VwbGGUq",
  "key16": "2UA9xGQ1vzwQfyRyXM5DSXX62wPqAJ29d5m94ynckZZJpPmR9UaCSj4QRpRBZBM35KFwn1bAsuJF2gHxtRHKnUq2",
  "key17": "226bJ63AsAWRhffpufxCuLLg9xGRYb7RfXt7A67fG3T9Pg4vjUsb7MA65wmL1yJZbVkFABhqc8FRhVosLrKajQVw",
  "key18": "3j3ZnK2JThzhxXcF3tCNsf6SaHJodgzRXf3AG3dRRF89Ju1iMHAQrZBMizAiuw3mUfN29EjmkC5eycb1NPPG8iJQ",
  "key19": "5Y9FzSLjiRjbu58z2xDhSEqJoKmJi8mFLsufazePXjw13H978yjV8Np5xiHmQZV54FDS1M2stjGU3Ycow7RT9JVy",
  "key20": "4HviQWn51U7YrCNg9MXV1hweAZhBpM8WaywcrKnyE9EzWHvnSkYttzAFwV1xqRuuyC7yvaC16zMtzFWpgZJhz4zZ",
  "key21": "2ygSEf3iPYnen71ASvuRcNVJPGgFWoVKcmAdv6pNLDbjf97xpgu2PnbPioQDHwfSGQArGiXcR1kk4TDE8oyT2fLy",
  "key22": "t7dwubYULJ9mr3cJvj6BaDZS82EnERPXnJfR8sfSKaoggQW57PRoNSgpUMSij9aDSs2zgVaRdGEYMWsPxCs5fWb",
  "key23": "3eUoCLxsnqti2HNyc3Tvv2UjQ4hPT78xdRbwJTHgNEzuMFcLwvJK4xRwk3airKtmfFu7mEAPfPzXiuP8MjTi2L1g",
  "key24": "64fgfvVoERFYE4f1CYCH3KmFwaaSUdm2PCcNKBUP9FzcVBy6AfYaJNsF4oivxTMXGhVD8NfS5pd23AmeWusMmYj5",
  "key25": "3r8dcyGEWrNZ7W4GpsvybW17ppYysq385uu132R82DpjSUci8LdC7Kh8JzzijFdJLRctJzAaLyTdSn2JZVyerGhA",
  "key26": "21mSWsTxFKTiX1U2UNpzLg7a7tuyv7knr9vo6CxGh35yd18cUqZmmVVWz4bgDiFsAEEnWuSQJst4BNntsusgPaSS",
  "key27": "37KKG1ncbPMi6adS7DY9YqwdeX5gNMhTTCdKrdA5b7eoWjvVMZGbT1wVsv7Rhvr5Z8iLmWFGxKT4MGedbsrGJKZx",
  "key28": "83id3s4v8Uwb6npwztiNJ39kU3Cg7WjESUz8Mc9AeNAZdDzWgdrF8Q7cQBJ2mvPHsJyQne8FXUNXSxrmr5S7eJY",
  "key29": "2rSPhJYsfQDYp5cR6koZPNprzJJnNq5uidvJUNBmXBPtVaSQTQTjpTyyR3EnioUEGvRJGwCvXUyfnhycskMGLhvB"
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
