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
    "3C9nt9kbhvPktmtGNF47hbFYG12kau6mK2UnDeocK4udc2Erypa51yBhCezqvpAYc6zdouUoZshphVdy9mbfnF34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3CcQSr7LjaEzJ6jMxku7aUMCgd1Hj3NmED2QiuwJYyiRCyzSkGv6aFGBPp3cmHWg6YBBp3PgZQdh3VMbzi44Tw",
  "key1": "33VSfW21J8DCh5zkxrFdJRMHyWmcPzykknrerTuhj1nyfaeDbfpWbc7aNePEP7UrSWDitkGoj2zoJGyLXJeQZrzH",
  "key2": "DeQq4oSs7Bqgpw3pyyqL6eAPRsuJ49zhAWDqKPfaCu9siavSrZQMtffZ1UC7Kyfjb2dbdd92aApyZM2vwLuD6zu",
  "key3": "5uzNSS59U63eL7spxs1KK1FVDNAneoSKRmLphEzi7QgATCq1xW8EzBRzFEpzBM4eQ1W3YcUDb3FgDh6xU3WsPD86",
  "key4": "49YR7wjeoHmwn5twxkDK75vMxLnod1JqFibqQW6gHEpiRRiVtYQip8qXctzos67x4gDziEVcDCuiwg7RGn2AMpGK",
  "key5": "3wwkAjswXCUcUxagYaadoT4ShSFtegqspxi9Mq5NT2UsjV4vYp4q4BNSWGL3qbWWyiiBRcjun38uRxprMeyiegHp",
  "key6": "4FDM8911PsL8bUYm33ZjumSXBXAVwAshxf5rjYTtSPm2H7uNRYPfnUe9asLqoZBtishXGZWXep5iW1VczMEQfWAu",
  "key7": "4z3MtDrkWP68wAPue3Dj5nDeNL3GiGw2p131oeckKz3hkMhMpodUdwKZr9rzxSogRDMECzrT6r81RJdXkSobk9uV",
  "key8": "MdGmzq9DvVDoMBpEW7EwXVYpUYPS2VLvT8PAE955vxPHTxjAbnkwBHhAkoTy3cPCCTL42cgzMoG19qB94EW6QZT",
  "key9": "dVh4pu74Vb5popUt4NYGh5ZRfaZQuukg5Q1VUYrg7fh4M9JbUkFEv2KzkQaezxeCc4Y8x9UEky2dNaPK9T5DeP4",
  "key10": "63hnNAzVyVK5RcShUqCPNNWVkzXueJa2dfWtbqj6ozm5d4tiZMgUQvfQ1uQNjHL3Dd6wkPQJFnQxThrRyW6L3Jjk",
  "key11": "b4Zbgddo3FTJ7LoYNuNCtoMK4yh1tasRqBWpBj8UMauZEu8pf5xeHdqvRHp6xLPh7sXtW2AMmacDnD6mLQEwC9n",
  "key12": "igCcZD8Lk8X3cx6b8JkZ6DbxFzWKt3kWTFcxFALwTtD5sSunj3Jd5zLerhdHRbeLR9T3vSpuGSYJVBLKLCL4dz2",
  "key13": "3165tGP7K4aorJvDP8RGdJ26YhGfGFbhNpwWk8CfSy2guApZaLisfKLZDx6j2dMcu2NjCgE8mM933BnfZx3s8vXK",
  "key14": "3jXKjUiLH9L5Pnds8o6KMRuNrS5dkqQuZz7MSxEenoNMY3ZXER7y8ajtdhbjUFkq8JC8FzfSxhFXTB551Z33JrvA",
  "key15": "4pYJ4UFAfjNHg57jRtPXjmi8kj5ryPTEQh2KqazuG1M6EscnzPgwoVzuUvHsYXxhp1EUdpw3tMYJfEJEej2mANBU",
  "key16": "3p7JXSaH7piCpPEBP8aCa9PUXY2T7UXa7Zdga59jLGhMwMy5eWBUUNjx5i8Zxyq6KTFVm6XWEXkYxbhd19LjtXMa",
  "key17": "3WTS8DjspvVDsEXn9PzmYfGqqF9GTnXi3ndQtA6K2BwkFK4UbA7kWKwDWhGVyakmz5oqwurHhyB3HhuAqb2eCWwN",
  "key18": "64sccRkEpLuzMunXERJpRfPuHabgwX8HM3JcqPNmFu9dCtfZoaYPyQVyJkZ46CTKjJA7cwhU9rA8HDwEaKyqaTv9",
  "key19": "3DgdYP82hY4pBkZ8heMV6A9oVCSQRN36PaFZxuvVyoEip9m5RhS5HrF19KcDVi4fpEjPGPbbZdPZnPLXE473Q2jw",
  "key20": "2XHecKYvyymvPbRRvjVFa1bNM1uagRnz5UEcToqA82JxUC7G6ta14TpeTXDtgj6p3QkTLm3tKomCMSNv2SiALbUn",
  "key21": "5Tg8sMx3R87pRruth9kuZKLcgxYiAaJjpBtCKJAB16yREDxyH7ESptUghcYk4JYXoktDtrdrhYrLn1hGGWNhxTBw",
  "key22": "2XtKgYTHcYn38YkuooJwai62widyy4uUXZdaW5kvkBupQynBhjUuwbXUvMyii6jALWbom7MQNCGwx6psYDyi7VJm",
  "key23": "2VNkTg1dLa3oT7tBm2tQWmHzA7E55nt8WG4YDccg7bNyNUcHBANSifyaiBgiRmAT9Qu3cHorgiZX52DdcGCNyVrL",
  "key24": "3THxExEpcuoR1xVbdigyxa3Pj7HgBiv55ha9dkCAKv2n62wPnJGfiohX7gzV1o6uqSumk8iLEaV8V6QbAH5cpdjC",
  "key25": "4ernCeBirsTTjNpaTbfE279RPoNiQrerstGZrgxGPKLz8NXrD7Knp7SrvnehvUPgshQaprPBEdnicpL252E1B43k",
  "key26": "rzXgeahTjxi6jHS1nkYjqoK6N5MaSUPJoic6E7KWHmDd6Vq5EUr4kynQ2KJzUw9UjhL39co9vmi7Vj8uchMeMmN",
  "key27": "fynxnecx4EqgbUo9SFSUFiaAAKRRRGX3LyN1WyqDMjyNFjZDfu2AKpXTncMZBr4ZpXUwbwLChoks6qX6ULaQcYM"
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
