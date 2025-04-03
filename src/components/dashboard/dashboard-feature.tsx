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
    "64eKKJhcutz52p9nmCREaB7HjSJcUPBHQijoGWizMK4rhhDydNbznMCDtuBj29wat7mivejKqmQvnev4cenhBrpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZeSpiRawH9awB9Sygmftvrw9YZjP3VGxY5DRwbV9pFEpxCoP7xB8uXX29BC2p2KJ8G4j8tzgGgLfaDjSPiFJsQM",
  "key1": "2us36Qp4SW7zMR6KmZp8YxiHszhnMsK6dkX8d2PuotXQ9ViY8wfJ6jHevvNMLZeD99jJUfV7AsXPv6zUUJAgu7Mw",
  "key2": "khETKmZxUngdtHbRULv54vU1ciNj5iLbRofvsRq4zxByMjrpts7fPnRaddZ49vwoikgH38os2ePoGfZnh2rR9Sg",
  "key3": "49pAKb1xKJKMx5yHMdAhn8U3yMYs8JLzB1Kr4tDnPzM9qrJnnKsnFFbNSbmMxkyvKoYxrSR6km4N1aJfBpjqNhCR",
  "key4": "1mRGqh2RmJyywk2qoLGPyaJG6mhT5eJEN3LURzVtES7z2AXsEcrahvsKm5DtSTfuzESR7d8eaXnvK17JzdhN22s",
  "key5": "5ApshcsjdnKYFGsRbaBcPuyqS7AcNYmo3DVERFgn6aZf8zS6jsqoGUcsAKemTAmSyv6JXvfviD8L76iwAJnUz2ny",
  "key6": "5nywiZLc1XzrmoZ4eC1s8YKVdavTekdGTDU3SnkeQmhw3Jp5Eqwp9fE32cWscxjeirzZm8Npqs8Gew8sApNEFLpo",
  "key7": "MQjtJv2ukjE8bULnAhd3wkzEjx6Tt1E5ME8dSHn2hzZZC71duNdkgWamkwv7MFtLaAuRba7waLLzKqTWTbwGzyv",
  "key8": "5cLMAtFMW1MxayMpe5Qfx87JZU661DcwnFY5Ho3qKX32spXjCyCM2jnf9RMW14RnvNs28hQcPpCQ6DAcKno7ehwD",
  "key9": "4ReAWXVXADT2rceHPW5iFGUFy4aHbqQc3UQtaq3jndMzfapNuXPGhQ2Dk8GTFpyAEPCvCwh9mw558jjQywvFhrow",
  "key10": "5yHFMpgxbV6cExfAaDx5Dxt1vcxmu2qKhu8YBfUpBwFMN5Z1EE9Sj65jsHEF6mVHVe4QhDAntvsDVbWy9Y84AN4A",
  "key11": "52vxQp74UkNSF394rSnX6AXLtDdYgVAdbSyHQhtNjXE7p8TRFuQaLrg28Z8E331nxDkXyZJk6S2jBHFWLGyksRTh",
  "key12": "54i6Qr8eatazmugbpUHDYopd8UQfsteRrTDThePVbp9sGwnEiqJaVroNhtm57wmrqfcBSTNDFAE3MeVym5cohqQD",
  "key13": "W76GkDgTG2pPLswpSRB3N7T9tG8tytzt2Xq3ciTaoLWUP4aABtZVyhe9KDdAnnsNVq9aZL2XbakebfqowogjW2u",
  "key14": "2pzbDpHkguho5uXPge6sKAkgscAn9pua1ZPqv7Un3GVAqYPfEK2Q6ncwRPHVbchGpaVWimHFe45mrZoUHaTGwAjP",
  "key15": "36wtqs8jCrjTGA4RpcRMaAgsE4z6CbPc6vYWsPPwnoXy4vogZLSoLqKktQW3YuLYJ386E4VS6QwEGTut4gpYevT9",
  "key16": "3GgVf2AXWmTNeFmeTjuP3R1NEdJZw83mLrwkayFKi9AtpUWPNuVNNVhgjDTFKjqShfdQu4Ufi8ukyKdaJwUHZZbQ",
  "key17": "jzV7YaVpCW5f7At6t4MfNm4V9LJg4zWSWmQ8kbheiK4rdSqFf9txqzYm4EmmfhVB3XHj3o2SVh2JK2y5f2FTSMi",
  "key18": "2kiauCG9EbN3kJfwWTdShyAD6dgugygKAYidpsRzwY2Dk59SaakcTyLM2pppzLYZj9PUWfLD1tor8Zv1LPh4by3u",
  "key19": "41P6h5ZSmhZmpK7EiC1BKtk7AhGtdUDZdNxKmtNkfxjT2s88y5ReNfbaLFUCJXpMcXRLQ4oqrsx2HMgqq6tWgBJj",
  "key20": "5xpdvXfXFVj7wDmKokScjpAAgSq1mJ2EakVcouDVPusGECeWVNy9QqKg8vpBcajeXN5ofGg7BHG1k1qGq7Ci5akc",
  "key21": "21GGDpj7dHwYfsJmK2ynjk5paAWL1UPidGVrG18rJwCySXXXmvEXtEkNcKpvsd7FFgzo6cHFpHbrBff8JejhUHXf",
  "key22": "E3fV3bU8f3qgwjDB2KZvzVWiiwxpp4XJhVNLAMSMTj8SJCiwnFpHgkz6zwzKbNTx2QcoYvyk37EVW9i2XduPRC2",
  "key23": "pkdtS2indFAwFqfPGQ3Gpbt6jkf6aWuQmLYBfm1mqGSNfiNA1gVzRL34HdWm1fcqNdPiatuj8cbBrwB1nKMjB3B",
  "key24": "2j3qmjwQ1FRXw9PaKzLZXzR9ZJxvkB5gypJsJm2XLpywt1ddmhR1qsR2ETSwRXoZvM1bmmUKehQiAVcby9EvCta",
  "key25": "2QXiT3sPLipfNdAyjGCY7NrogRzYCg7JpsyNnKe7N5NuiToSonSAjWWA12XkEGGGn7qSQTsUF9XY8uQCQJnAy3zV"
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
