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
    "Y2ea8yE3T5tVwGp1KQi7kfN6t8nRFSxcgiZajV1qQJBUMXxRQE8qx6Pv5uLfSxwkCaAcR8FYCBPdbwL9DT5uZVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgnjSjiNJobfqp2ZYa2ddzyrTr2ThQooX8VgcWBvTW6ThdwgLfNpuFHigNtuEr3f2Jgf73ZNqPBVoxvchqQNLJ9",
  "key1": "4NTx9LJJgyrpArNmzPwFBCugEQMaWS5t4XjBMXrMoCQG2px469qmi9Fy4NNcbf4K9Tm1unAXWFQw4r71eFmsG1bX",
  "key2": "4DyeivRGs5LFG3Drg58X7SDWX6mZbEcAZdM7baQMJX7PXrEmCoHR4zoYqqukQ6kaDr7Xo9EhedXQ4VZdrdTLjXua",
  "key3": "4U182eyvfaYX3NEEJkzmhMEMDGjKDKMPjitMSF7QM1rpxddyBKNiNwnoQJE871VdEmn9XjdWozWaqd2xx6S8X8cE",
  "key4": "edDxr6ZsxkggfkqjQwoJ1HQDoHAm8UmTJQkoeKNZ6DikTQVSwWfnWAtVGy9gDLb5NxXxpDgCseQdYjLfgetbNsD",
  "key5": "3hRkXQieD8ECsCZdGh9AKQ9A5dX6vnjP1JDf7rNV1vNpnJrHXsu8g3TcqeLUr1M1aryjWc9tP3Fp6UjGV6ZWzFZJ",
  "key6": "5Z6ApGBwR3nBUFpMAmDs4bRvgzSPmkmskZy1rxH3ptyBzyFZ3De8R1bcmdRqXbwhNKUQAw1iw9Wv5qZRoWwbYV4p",
  "key7": "41EeM8S6yna4SBQwGYU2up3dwubF4u4fJCjX9Hf1vQXf3RVpmrVcgUT13YzF4ikeTxeJBDxSqYgaDnSmag7jabnd",
  "key8": "47B5X8q3FJ5S4JryegPvKiYBooVuDNBohpZV9pk4ceqruRdSz3CFmLnWXdWTdzR2pgxXg9LgbgTfD4sM5JUr7BDB",
  "key9": "2pqmwn9UahR3RJvqvGu29H2WG25YS2CFdXPukVkpSXhPtw3FguMgej6d4vxKe7sdMC7yDhhnitQP2NWzZxjHEcz7",
  "key10": "3DsFpKTQ4SqoMxsC6yjpZh8FW8iQx5HSgUHc5XbAgDYsmEemZZDEhnPcmAyqNfxHDXkzVPPgpatGySpsHasze9bS",
  "key11": "4NmCiefzJPqPwrxzQSw1rLuNpFVrLgi6CHg3WVqymzZJyqjqJd4J7sxwEYnbERXmDA7URqXANoCzxxP2pVmjjMLt",
  "key12": "4wYoH1ipZ6jGPSR27Cq5hooXe1hPSvzqFWubUtjoQC7sC1cd995T5jEbmREzzt5qdZdapfPeMhcjC36qdQh4kG4H",
  "key13": "4MSQt3uVH9LMYkiLSw9M7nAaYqhZvFGTbkjseTYytQ7YohLDhHbLYuFFX9onQy8y6hMErNxhwUDL4n3X9E5BdKoG",
  "key14": "qEhtDmAkC2n9N4PNm4jjJQarCVZJF7ZrCem9npA7USL5vKqpedFi1RQujCJgZZD8HkyTgJ3TuzoquwqWMpWpju3",
  "key15": "4JmpALntUEJKD5cJYWrqAkZAzZ4Ft4wiEDr8AyiHMfTJymNYHjcGFbeQ7bpCKLQUpWojiePU3F9r2n9gDjgu28wA",
  "key16": "3azhP1Q3ubWB5x52CnKyUArnLrvadffEmBHvnBeNbbrR25fmPvJBBqEnKUQHLb59EHKMZjnPDQekfAV8bVh5TYE",
  "key17": "Pcyf7hFgjkaWjMYuSh6VJiKsCBvN9vYhFXCPcPGbxCiR7gGewuvSrs3RuAzPqfoSJsSWRLR6CQybzb6vCXjwRHX",
  "key18": "49YK855SQfAPcTHhancnjhkkrMnK5RVYwfjBDfBxxQLj1hyq8sNVVVTBSW3siWcMJLSsRzgLbGGVWaqXDAdb8Vs5",
  "key19": "1fKKyN38Ywishm5Ynzhvvv5g4PxPmHpPJ1Jeo35szP7rgCnMf1z7TqjbnygjwbM3dPsMd7e67JMWTbUZynxyoih",
  "key20": "5htZinkYpJWQetMfH3ZL6Wiv3KSWk4bD2TNbRrQrXNKNWRg5FLQ4MQ88vhoBTBTFASawMd3Nx5QKQGX7jbeV3TCX",
  "key21": "63XdJVmJoE5EhwncHGRfDY2HwDHAb2LkjrCQcw6HJ2hmn2hgi3E6RmhGM7tTBaMuAN84yzApsaMSVhXfHzejMgTs",
  "key22": "3qTsj3c9d1qqxdQ5fKaNZJJVCcRDJ2Cp3LrkY97q567G738H4FYGSTzfSjLnAJbCSvt8QbnMK6cxEKFjj5jLkS88",
  "key23": "5xr4mfvcqYVirUfs5AuN1qg4xDie58Gjx91DRkJP8NaF2PbbDvL9k49xmyAcq3aXRZyMm215aCiNYfBcAUKDunEL",
  "key24": "2oCYVG1rUW2uMdQqEZKuAwQitK1ZnnuDzsy4dJwEu1q4iRmVmDwSxtNTscSxRBpA5ek2M3Vgxfg8nXpH4vZwQ5aG",
  "key25": "5ZQYkuobpzEJ8iVn8YTqPtHG1sifeRRvbbnLEJMmW1cneDdFucpqe32PcGXWPBRY5vren6s7N8WcZsJWsBCzPCFV",
  "key26": "mZXAuDZ3qwgY9DfQWi3fJTeku3GcdiVV7vf43VHvGqE6fLZePYXNhdcdepiNTc6UxNtzHigsaqFMtd5Kf6MjZVo",
  "key27": "Rf2kuHhE14BZX4pHSc1crdGycUBFYPEEGq2UL9JkR44F6UPVhh6pEw2HmnYtM89mNNKvg5GkcZNEZZ3v9ZbcTp1"
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
