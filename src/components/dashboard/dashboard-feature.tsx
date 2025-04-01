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
    "28SYEoitigiY3VjQe4rEpmqkXpC2HFeUDRdXd3n59vYT9CaLNixQhWMBpy4aKhYqhvCHjky8kkjgnzttFxLrYxQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVSuvCsgjHmqypLpnu8jYxaxmmF6XHYqv4A86pNwNnxpwUQdzjSe7qKP4rZkXJD49pGHaqBhwkZ7naaFNHFfwpb",
  "key1": "2aepeAaJUzz4xeZtnsrzxqoRxQqGAn9iXaTSxqcRdaGm7TLmpP2a77Psir1NUa5PJqempVLpYrZ9GBvWJCoHYanN",
  "key2": "4bnTaHjyHw5GpXpfurDx1cEwQx94R9oitoEaWEmbE2ft1Csab3YPKLKYcv4UytKmXcyEbKWuCT3iuaMUZRCQo7Ap",
  "key3": "5g9Qj1XHHBxknsvV26DN1bLNCnmzNH3LmcquM6kxKp6EZMkc71Y8veMtijzncDn9fuB4bVfHEmf6mwgt8FxNnScK",
  "key4": "3Ae7PrhMK2HmoARP4jBBuGEKfQxCEzgnbHQ1m7oYWECT4PCsoAUHURjEe3m1wCGkTUVPfZnPP8Cqiyidec88jKoB",
  "key5": "4mmne2MHgzKjwcgQXQS1Lguj7aq4t7u35iR2oNez8KyQMgB49UvFKRSyS3Xp47rJnhekYPpjK1mnGu7TtpswXgKZ",
  "key6": "2oN8Uc1u8oeZ96hW1j7MziFeBuxvWNdc6U5v6xMJzhrqumFjEMirxozcS1Lp4pNJKCTMDdAA1fQnpfQqVx6Dkq6t",
  "key7": "Lmp7WATBiWPiRjLtoHjKqGs6LRKpWadp9HDX1c2B8ffxw7X4XsnD2kVPe4Bwgidf7xTUfWQxQiYbfLYwC6LVpNF",
  "key8": "3dALyZzPZjjZmjoaPRHD4VhcenDVYbuQAQfYQc8MSvJ5ZsRKjwF4qa2BdTZSpn2mYiQrB6Hpy6D4Te4mddH8cRFy",
  "key9": "aks2zfcFckUktxaw2qDKwrjzUeMvvvF482skkpxF7kEACKmZZbAx6JbM89k5S9NwtPyGw4EkEBsuWFJASDoajJe",
  "key10": "4WK6HfZwPQe7nrxhZY4isAGth9i823DrUMQVSrFGS1ZwQdNqrtKaV4AGiGh5r4mCVszjsp3CA77mkgYYicsY4Pnv",
  "key11": "4Yjeuadkrw65qfE3GXMmdG1dYqNZgwHB2NaYWUEmqsNezCwFwoqwYMMoz6mzSkrL9DQjK7rMRFKXQpc9uCwS7gAK",
  "key12": "5edriLtYT532SGCYDhd8HrbRgjVaJf74hdfEziRN5qNsy1hNStzKpsWMPkWtayZt2EHhGEqoyb1u59inmP5i1yS2",
  "key13": "7qv1nAiiLoZS734YH6RMJ8qCWnbc3pJdGvUYJKYXK3tEgvy6bkLADWJhEvEW7SZc9RHoNp2DbjZ7kWwUZvJGcuy",
  "key14": "4fcMpp5pSeafLWd5EABfri3iwu5ASNbBtu3gKzWLHq711uDjPVc9jGrP66wonz9hdUWhrF9rhYk7BTHVhQ8ddgZ3",
  "key15": "64NBoAT5tgLhL7iyjeYdyT1suH3Pvh8FK7HcgYt8sCXycM8Bw5g8wjh6Haq4C1SGNH4mss8j8KpvG3DZrp4px4hV",
  "key16": "5fHVcoAQmVqfPaoo1TpS8eKKKpKVhAxEU8jCT1A54tYpzoWN9Toceq1DffPciHjoevTCScTrpqC88fQZkqeXi4ju",
  "key17": "4XufuYokHR3BJWHXwFvHXka5FudqTJM2DSpbLZLciSn1qvy6Yzt1y45hk4Ddh1mTHZYWRwXjWGPZVdcnVZTH55Ag",
  "key18": "hTrru6xBocVHj9F9oiEjbAX3DZVqGkz1bnSeJ5BJJ1recgXRZyQC9fMmpYYCYXzNFRh77sfuuEabrK2FDKemH7D",
  "key19": "3xiHsPnxvFAQLnCqKFps1A1fFSqGzCCrzGLVPsSs3bESUCYWKDEWpE7XWwVw9tPp7wUDHw355gGHjcG6x6tt9gSD",
  "key20": "29MYiCNSMZCDDuaeTRG4oPAKv9tiBR1V7Pvp65kEoYWTVT15AT7uZpxZSRy6qhaXQ9GakazvXbs2DCG4pnTuGfXF",
  "key21": "UUvp9jqyrujGYgTVDsfVPfDM7A8oCQtgXzErTUBp5YjUJ3YjyL8Co9SrG3LUudERyV1qGDVNc6zF7oRcjE4MYne",
  "key22": "4PaQocq4PCUZziuFwqgzVApQgACYXfjCiJitfvTm5gpKeotUs3ja3rR1WcKLKXrs8MyJFqS9hHTdBd3iAEV6W4Yb",
  "key23": "5N9K1op5ETYps98qVGmUrJNZUqvmqtfXoaC3xyx6TjajCnqWw3R1KCT9aCh1pYxoiP2CRFrBgdbsTCFjciTTiDeW",
  "key24": "3v7o56RiXppZxcc4urpHYjzjhC1wN1BifL55dr85Y4JaskxARQUH8TAmeQP2zybFHF75tTjRVWzUDPmu1caFnc83"
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
