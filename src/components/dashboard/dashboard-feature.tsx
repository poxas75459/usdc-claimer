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
    "E4UFYsy7CS4phGfYkDXTY2UQnbdkeDdgz23nkaCyjqLCjUuLRfmViuE3LX667vSLS6ecBb8duPgvQG5xyLnsQGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbcAFao42UVkMiKST5WuSEEv7BUo7Ay1HvP3KTBcLRssyvrVPD4rJPhRfDc6E2nP425JrEtft1PM2qv546gq9Zy",
  "key1": "4bVrBYwCF6XJYYJFYQRFWLabewrZ4m8yHAgos5qgRrYmU8GMo7F5PREcuDcxGMddme5r5PWMbnjGP1H9coG2CHBh",
  "key2": "6YDG6vzHCjAGBxTzucmy5r4gvRJ69dN6Y7nstqbhGnaDcTDfzVuZXA1mJyozNtuvtUqXrHLabaZzKNUH8rr6WRP",
  "key3": "42PrwC51VhTUghU18CU3MX4efgaSwfQKtBN99tCWs48katbWHS973og9BbTPJ5Xe6xYRSnwvVz9jU1B946tcnapf",
  "key4": "JSQ6R5uvbnfqvUy2SvEk6WGjbdkZTJ1x1g2j46ccBkaXLN6oq5c7odKaroPF7mTQBs5PfGZCPduyDgjNU3FNWRd",
  "key5": "5nuW13gjNVY3Agy7NNmWPpjLPTVGRJcSeisQppn6pFAkoBf6zbhBUcSG89uFGF6keHCeW4uYSWPpqB4BNM2XCA5L",
  "key6": "5vL2Cr5yRBxgcrqQig6dP5FF2WiEbYHnvG8WLi4dzxgQpX2kQaPvumMJSaUysqNZ79HcCF4mQz9M2uqjWg5zKAE",
  "key7": "4jonfkj2dWaFMtbVSUy8oM4qVCxBDfY2rAu9qPwwABJeVyLZFm1vWk8M87LnH2wFaUdkgJLg4dGVWE5pT62Hm9jH",
  "key8": "2qCPsXMjT1YeJEMa4d8PQ1dUXyikvbhELcWwqWvdGpMxzivE7bhVTvVYA1hpsbZgFXWt73myvF3WHcCTHENzNA6g",
  "key9": "vc6atUAqDKUEDR2pcCv1mxgppomhSh3rrn69Q7gNJRutudfqqhytPDD8rUwEhPV8Gifo2TSBYpjShqTiwszU9BZ",
  "key10": "4f2Uk3H76kSq92TezX5T2s8qYEoNywatDkGdCzYDgyZy9na633ADzej3pd6emTsyrCzvoE7nMmipja19kWFQcSN3",
  "key11": "56RQ5N1DzUqYFVE1NiLfXAbir4B5pAcrbaowoCSojkmYjxiKET95E9nRCQKfej8Uo3goYXBxfm56NYHio4EVK5SL",
  "key12": "5X8kwfwBKUWtQnW5hkm6gt4fxHmp9Co1rugXvLkihiJp4QrA8vet5jbSk1Xw41K9AT9xZzzQ3HJAn3a2nMFHEjxg",
  "key13": "3TXwwQt8nfPm5yWCf1A43JvYg46sDbpMZ5oy7sYfZNV6PgRJhebeMX6UqbgLbxecwrnHuSA3LTTNY7uJiaWM6VaD",
  "key14": "2cRf7s9x5NxDZx2pwCWAtbDKESyjwG7ugK3CTpaCTJn5sqKwtme6TG4aTV8soxPuQzNa28wxFz6tBPBEy48Pm6qS",
  "key15": "4PgV7ZreJDZP82LddjaHXY5nX3FMdCCqiXtLUgjHXTb2rPUgHhoaeeZoG2qgRYXR586d4zAa7wrFQhi432nsiB8e",
  "key16": "4Fok7qArhh3VsY1Ssyrnyn82jGCrWSKvQ6L3CXnSZfEmDHDJL4VoRrrDk1Qmsteyh3DNTNb52BZrj7nbrKvMZri",
  "key17": "42y4SCPWgxfFnzHdLJrLekXyYVAXgXSEP1rGcPAC9upk2LP29RLJ9JoWWBK3o2jHQD4Mj8sk8dPpyx146ZXSCrzU",
  "key18": "2Uk4tLUNywPtm5gLbDxDvTsZjmeH12MpnWf7F536BfuTjVLEdTTq7XjesLW4NY5GEz9ypkbeBFLuF6n5fqKZJ1KU",
  "key19": "3RaM9mDTvu3eaKm8Mo65MzjnbJsKebWEU7BfsgoWJUAH2B2U7Wnhs44wL3g84P2gT7riS2QbGKToSBG2YtStwXfC",
  "key20": "5WZ7XZnUCfKzQfFZMRikZKL839CxoCeHLo4ZHQ7MFU197LTpcMwCsT1VptiCLAT9Yy1Djojr6MjKJRjSKFMsbvq3",
  "key21": "2SkmJsA9p4ZpoKA3apNoesm3CtytJnkW4Gb5ng4YmejRYQyUmFzRDXgemgQwJpMmBmYAEQ7FgEsX7wKmUww75RVg",
  "key22": "2ZxdVqEuYhjWTSoyYCYjfYxeUchi3MvTRsFArQfP1UiErQ2hjYHZXD3qKQnRhabcJfdUgsowFsH4HmPrfQwBXtro",
  "key23": "3JZXjfiU5PWEoBU24db8UrwcHxNrNkwFjy6WHRQ4yNgPzFncra95xQB3jHpxpuhKRr9Lvo5bDqHsEFKr4MTfD6F8",
  "key24": "5j5rRk5iRByp9MbmxpMmkShp6K2fkif6szgSNJvuvSENNyhVSNhc4w3jzPs4agRvF5Qhi9zfp1jNbu8pB8ts3anj",
  "key25": "5PiAh9W3PLUb78JARPf7wQxCWMm5DbLRcGYe6KAUHhx3d5VkYa6xVeZvkVL14BVj2FwE6JjRkHs3eQWKJ4ixsia",
  "key26": "5TqwrfzsdvfGqjMRVm9h77GvSRAj5cZW3Ri8vQsgF3ZzfC5XVNbG4TMzw2jsbGD31JdHNnQAgU9QmSQAkJo5QJpr",
  "key27": "2iz2MJC7nGqYCKx94eZcerd38WCDN7K2dtsQarnPyrPcDBC8MCG5Q8hXcEmhmr5FNCvnQwav6NfDe8J3te6XRT7b",
  "key28": "4RpiesYn9zcHqEEkFghCWK7xYXrEvQvdqFFSVVuNA4woSBGfoH2PQvfTz8NS1Td1DLbK9NAmfftxeJBTdCduGn8v",
  "key29": "c7iAHngSex6qYxp7iKskqmNTxt47Z79LkVDd1yRyxfaB4MYzA3er8EMwTLxtGpNVWaSFqQaT5PaRPinah3qVrtW",
  "key30": "4NPfatAMhSHaGA2NE9ouDSkNquxg6ppUL4GtYzJCQVF1Y7PvdHd2unWsJSBoHvLRbiuicqTcKSrT8N7Tns1vK3eo",
  "key31": "4rzJitwoQ9ikZwNCtCanuNSGJWWfgGvYqpnDsKLpB59Gz91n1vZMFNwoRKfXapjf5m3MJCZtSNbKoeBrKYR1SeHo"
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
