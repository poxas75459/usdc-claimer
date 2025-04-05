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
    "3XETQ92eQnEQcJXqEq1b5fDbRRV7FsENwrjgDeQmNXUuXEKurvZ3xQx8zXft2XighMBsyFxuX3swSjbn3FjhNwMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66C9jLVSCLgWDCgpGqNyKfsyMMYr15PLWLE3MWv5nhLHuNr9Vx1LVfuFEtq3i3AAfQpqWtB9KrQtG5GMDPKmx54P",
  "key1": "4WBp7gMFATnm5T9aeXchx9fwBS6VWPXQu8TZMmjd26DX4RQGw6kT5BJzPZRQg6CmQSvG4bVLb2WnfWKiWVv3p4Y4",
  "key2": "3JQuXFJwUtddiZkiQguiwcR76PYoELrEHLhBZz3rEd1ZoYfyYbzEwTFe23UTkywKB7HE8dsY8tL5Qb6gvHsuqSqi",
  "key3": "49Hy545NDmo8Hebdc3JwGY5depmitw2pNzd7YXTnRjCTz4ukVJARcHiZ7F34f3B1eq2sXs7kDZRd5GDsdhf6GTyk",
  "key4": "yDhe9PcCqtAB8CgTYeAEHX1rY8jAmgWmyGawHgJL2yBZ2URQWN14yL8Bas6bMUtZLdiY8EkEMvBAT93oWthtTBP",
  "key5": "4GARsbcEw62qCnV7MJDz2rmRdBhbMTyqL2hy73YoSXVcDhxbJeSF6f9ceGyAe3HSty6F5qx9hRzaBYNLbqPbkRZc",
  "key6": "2PRfbACFFvHJkNmNqBzYJCfv39Q51tCJPYDQUCHCP6RR49GjQczaMethbnQ1ka3G84bnoDKe1wS1Hq8Y6BEeQPyV",
  "key7": "5ot7fFWnKcLwZwCjTbKUggYFNM1AifJzLKBQdTgvPS3Gj7xx6g95851H71SK8Fa4qsoTKse4TYrkEjebSLCgG65m",
  "key8": "2XWnHSE1XFU81qnjXioFoB4LAHcSZoZmyBppXThyTiEBtzBcG3VX2aHHLUQ9Nd4VS1yJjxPhFPU6mZLn6BhHnvUh",
  "key9": "4nrVdPaYDDEHGBwrgags5jrUq4sYDyjNX9WaJzqSFWetgpQWNosrY8uJveYY6Zr3ZrACGdeKjzoxXusPrhyU8v1W",
  "key10": "PPDLgrRN9j1D8jx6SdQmcdVNBngoumapzmm7KGeYjvpHzo2kqv3BsBAbPAkizmpTvkoyeBw47FbJwAQUpPNaquh",
  "key11": "4TE2uiKDppvhx2UuxRsMD9hrpWWRcZtzeYc52qxCXy8ZsKedRxpKpu9YLQj9pJFbHArQVLhAmjJyzN8c7W6PB6rs",
  "key12": "5JxNQk2oa4EWKT7nSofmRJomxAinsyWtHTXS54VixemuA67rFqsaduxFiyPfdZZqTgfLnxL8f6SsDsLVcRH1DYzo",
  "key13": "3CaGqSAdZuYW9VLhtbBVhve7dHw5XhK6sPio9ZxWscftd1GBg1hYKGnfW2vqoweethBKz1WKfMK2KaCn1KDJepjN",
  "key14": "3XuREaPdLDpWCM5hdPjMHMnntCn9LyW4VzdAWh9LFyJrkoDm51q9YFKsepwWFKL3WRCxdkvwxeVenGdCdnJ7jYRc",
  "key15": "2sQads9kpQrGkqJj4Ri1WoZvwPoLTTWeFDMrffkQMPhbKGdx35f4kLgSK1UR8Z8iCu8Ab21VYAdopBHQMtefEjDw",
  "key16": "31CRCeZXYNxWpbAgEa5SUyju8ndnahqG9NENcA2GykjTHk4wTypJvKDCK8gfZS7sChdH3pwJrUWZLBELemFpHr77",
  "key17": "Lik3J5ZQQ6Eh4kKVRsPivx5b9ZhFD8SceBzJBi3ZxWQJJfKr6ZBuSK4XtzqoQzN3Zw45yJy2tCNJBSbfQAgg2PH",
  "key18": "4WbzGw99TV2wYA5Xy7xfWWkSt59ByS6dMVRiPevmJJ7bZTugAx4igiCm8hGc8V3Txu65AtsPSomW9vZN9S8A6HSR",
  "key19": "2M3kgEGmxDB3G8XmsaTZ9AXxJWD2gjqfsUJybvBr945vfeKvqdZ62ZAqCGkvrGe867P4LwUAHJif9T67GyuCZQUz",
  "key20": "2y11Ds6LxkpVQPwHtWKSPRNkrEphXQtMxAULoAa76gLF1oi3GL6tYPnNHELJjXyzcSJuSLpSsPUmSQejQAWzETJy",
  "key21": "4DhukPiyHjdcuZVNyr5dGcWdUfaesivK8svLxCiUBzyovyV8E6U9ZjvWCo2cq87ctLf6ANdpNhnT6syjudXry9Fe",
  "key22": "3JyFnxbugQZoHfdzWRELZFusasn3aVf73N89t7LTdPGLfrGVBwZEqWnJvJyXfcvaQGwnzKCtpXLz6j8Xhiv4sf5Z",
  "key23": "3qAMqR8E2xWiCLpmfAG6XzJADZD17nAwn3PsUX3AC9aytF33828UrNWZ1d54Qzityjc5MGbXcd4ehQVQ1Brk3DPC",
  "key24": "rA3hkvavD3j1jddUCpN6rQZNB9SigVTYPkM6eULixoJyZeDVxXrJ3pdkZhXrkK2E6oAHMPp2i6hgNVBjzbtxaw6",
  "key25": "4zY3a2agj7qPBDEjrf87eBKzx1WCTTk51wVXA2PCLTv8zhrdU2qPU3Jw96rT5csvEepioGM5BrsqxmfmdzEJ1RBA",
  "key26": "2A2xr7ydFRt9yiQ2ozFDf8okbnfc2tXWJyt4Hjm6cAjCCUUfNNTp6VMnBQasjVkyRyKNvgHdH9ve3c5N8wdSK5Bt",
  "key27": "RJ6hvoRY3vB89cqvE8WJamkNmx8j52hWJdTUPNDNM5XY595XTLoJHmRJBPAXQu9p9RfGWV1oKSe9SCHQeAJPSyr",
  "key28": "Qt4xE4Yszkku6LtTgaBewuoovN8pZsLBmmx95ihQSedsfrsbJmmSB491CTWWVFfp4ZEZvQrV3rFwwURW7ottwpg",
  "key29": "45f3QpPKVNMzwQGtvEEffTNYUG5JEkpEjzzX91GToGE1amik7LqKDYZcScsU2cBVYX5xvDhCFSMaEcBbvA134JtN"
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
