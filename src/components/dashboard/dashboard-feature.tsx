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
    "5zS7VyZ47sM16z6ASkS2F6QFdjavnNnrpweebiov5byJB4DygmTgd8gjocRS3uLvVJZCLVmFFda4tUbq6V414tFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRwT7EukUYkwfYcaiUeibZQt1gWfU3CKF31bLcQ4AmqnSjpdPVb6qQfXUBiWmqdsW2aJQEA9XBRS4Ekzc7TSSZE",
  "key1": "3N3M89W2WiCh4LpX57izFs2LLX6sP439LDmy3r3Gq8pox3PUHKFZpKRixgcPG26nDpcwFv54LSh5oaqczBtyucbw",
  "key2": "VnP3dGjqjckE9zpVaDf97VXoHBXYUiW53wwuGfNusuY9Gr8aiXmFKmzGAzDNb6ftpsaFmbTDZSzZzwkkuAuoDqM",
  "key3": "5GzAAtEF1nmAZR8xiVVuXkDUeLZTjsHybPDmd4rbuPYQSqmFyCUA84eGQGG8FYi1s6oTVda3r9gNbJU5ipGWVZps",
  "key4": "3DRFLoh89na6UZxVrVjroZ9ecExCWBGggDFKhGsY6SdbQnJgxVCa7mgZL4nK2uT2D7w2GMNm5DAycAZoxhwaxExN",
  "key5": "K5aE4maNkUQ4AeVCzTBrq2bvs9LVMuFfoXr3tRWrkKVw6DHNMGGLhqGhSzPRdoZ1mpopkFWVhwF28SeUswmNqXK",
  "key6": "5Dg78TLRyHJmP9DeU5w7ThbB6nZFpCViZXZvYehL5Mfz8SZ3bAriiGemhbrfwyr4uygVJ7Lhsh48jCNZaTMAEweB",
  "key7": "4pkNo57woRqBLPeUun2XSezYYCiCGHb96Wv8xfE898GMme9U8G8r5FYWEr6uqwtLPG4HBHdUdPZE7gWT938r3Bxz",
  "key8": "519Z4s6ZYqH53E8H22tfBeGUtuwart4h9T7ThekYnkb37oEaWbWTJEt3LfbkypEjSAZnn5wq5RYK5iBtG4VuYCyy",
  "key9": "5LtuUMq1KW2TXJemKP3kxvoNToyAcqgHKwgP1XUnNbPPxUKEpwk2MaG3P8zWZz7j5sBJ2AZULG698UWuLBp8GUWb",
  "key10": "2h8QWFfUGmmiFbUJaHRepD9HsiRjPuZn6pQK5776q9jjFGqcNCqHWARH5BDbzvNmQYfeHgTGT169nkekkeAwnKGr",
  "key11": "2midCfXLk5Uwfx9fS2VSmN5KkKFHKkoj33Le2zMEBi4FzBUZSFbty1csEwc8kHU3UDBh1LUNg2yxqjdtiji5D8CQ",
  "key12": "4Q9LcHwf1PGKFgb7ADfQeTCang33UdGgvZdQgMcjdVoE5PbCaLEaifvxBwHiDJjSxkZAKvWGsjpVefzYgHFVYhhM",
  "key13": "4GLcWpQ1qphDf85EsxM3Zfr8zHZVGsTatLGtparwgEauzTBFvj9ykgKfkqvYskdideVUq1v9cgpZ51yaF8Y3AcFQ",
  "key14": "22cuekpuXMCjvGRiJScdioaZxzaBjLrLYN2nX47NTxY1QWtDieELUkaCqKNnctbtJ1kGue8BVxATjrsPVQ1now1q",
  "key15": "2zZVkaYvdGTWayiiLEvFetQmPkQYSqNLSERzQAPWgUZXJGX4tMKNXCH4xwygCJsz7cqCuFKjtNs9ygtn1pbnY8Db",
  "key16": "2AX7jEWa1ozZ2DY5LAXTnAXu7AZQGBFCVJwS8SAE5Ba9iDWdasmHVSQR2BTECPpSJdADsz5e2N2kUkyRbbYXMScc",
  "key17": "4R4A3wN53yFBN8CinMUQnGaxNtzsqo9H1kRArej3jVnkoU5SG1iTYTFRAeyUxxp1vuEzzYhwcPrXq2JeKVsoTmHB",
  "key18": "2v9E9hQhdbBXbYmELXn2PA6Dr1PV1rMo9zwDefBMzMdbA9qBzwcTAQ84Ucqxd3ZFqZrLzVN1ZyrFhxJnTYKeP5U2",
  "key19": "2cJB4K4nRUiCoLC2V8uGE2vJy3jsGtgT9LzrHThsqcbgB3jfcMqJ8c7JR7SeD4ptaZsQyedgD66CwBGhkt1gQT8S",
  "key20": "3C2vCSF6kH5Y8Vdbcobf2pBmjr6zvJ9kCSyboo8suVc9gEKs41RFbmsNJr4F5Kt2DCirDNYEtazEKAy7BEXeY8cy",
  "key21": "2xbTjUX8ALi234BJ2Lv9Dxs9gwC2tXrdhPE1fkcjfR27okuCuRH49CSAVYHNzBSx7VxC1Dhr1y2cf9zrmAEzWi4R",
  "key22": "22ia6fLwC8yAx3xuarp8km21bDefDteEzUEjLT6XpXqSRuJtSV1ddGXAiZs2Hn6sWKoaNKb5MFf8GmEcbx3oB9yL",
  "key23": "5nNQpExu463QmcoJB6reFWBuLfmfJHpLgCnLTmrzXyUtvY6D3VtWuY9X3qndfydjje1BizmfcghfYLB5oVmPYepY",
  "key24": "4VqixuvfDX9bUjpz18hwteHGb4yybix8u6DqGbqx1QVxrcRrtKUHZmchPEChPqzFrTXa5oHbBgiXhsxR1pc7zQU1",
  "key25": "5RWehYpUoqc6TGVFdWwqtrety2GTHFqwVb4z8iPX1PG2ifpsBrpfSsgqf59dcDYjABSkbCujUjxEqXsRuk9cvBrH",
  "key26": "58JQRjrXWFr8cjjhMPs267bpy4LvEbQf38xdWPMBcfPLecVASyYjZTyzXgDyb553zq5MUakkpTasebSZFUPvumxv",
  "key27": "4eWfCbDVTrK9bPhWxgSKpz3WBE19PfWR3nE7aaBRX62ZqPbuorhh4qCouqmyjh8tdfvfNvHqcA3ck9s54h5GJoJy",
  "key28": "3zoekcFSjTC2cAZ8FFR55njWWzVc5rhbx8K9i1bxF7HXh6qNdtHLk4uS7kYg6gT2zB3PDEZXL4MLNbSyQNRoE388",
  "key29": "3yhjT2ERwDxmVYV3aHqjzPs4rZaSe5h7pGYSLdwWvVb5Y9MThniEdNKGYbAFkjhV1ZsvAL27pWCuD3U5zmr1vVcQ",
  "key30": "4h3zHvTL943qNH9ZCggU58vHDDqcStDdWrFdRFU5SBzmaJCDPNhsVT9HgyKvpGbmBp1KMi74YyHfJyt4wmD6goiA",
  "key31": "KXzf5cKPcyygWuv2DGoP8CnUBoikuBuLB5vzg4dEpjDzn48dbGJvygAQEx7ercy15P1Rtti7stzJQ8cMoeFVXQY",
  "key32": "5qNonHeVSKryBKp1mTycyytmDDyrgxfFd6HzziUbp96UaqkmXevW7zfGSJWb9mCF2uDwf22g8RANibCKkWSSxrvj"
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
