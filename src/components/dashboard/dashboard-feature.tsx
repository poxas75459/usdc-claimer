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
    "4ZcAiR9yYpxb53T5XQe1dTYTB2FBd3DgjJj6uPwFYUaetTG3WYvcxxjwARxuBxAocHoWUv8tNKWbDXsDjdkNGMQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WjYJTh6xATr5T1DBke2LTxoVzjtDuF31A3pTf8cJeoTyyBQo7UgtLWHvWZKaSARUEvcxof3MF5u1EEYPMAnQ4ex",
  "key1": "5jpJta49uXK3kwxxX839bEkweoLZSLkkD7dRw4TRHf4J5pLZSCWKd34Ud1nK7mkvih4k2yPW9yNwMDp6tgZnPJQJ",
  "key2": "4ZpJ29sN9ZrwZY4KGshnF2zEgBRCdQW8BX8mooCBBPac1CR86zW6X6XWZ3e4XgBsnk3ti9e8kLLo9kYWytUDCoEQ",
  "key3": "5ccGEWG6z6GqeTDSCPUr1Ze3a5Dzqr8B3YeQKNpFqau4LVMZ7eyK4hiS4BQKLXfY77mZ5kMBWDbYL1YsG4fW4UAv",
  "key4": "mLF3PpSN2jnpto2PE8XyWc1h4vJFT5ZbJfS7t5f8uGCuspV5rZfsRJ4CX95vvv6DidFRmcvtuCy4WWWyE6eCgU9",
  "key5": "2xPowJkSEZFv9C83MJQG1eKoCq3YDBU1yt6Z2oTQuETx3YSbZJRZ2sgaXSFMDkC5QksTbwVDZLYnjQnUzL35jbbm",
  "key6": "66AhsN3XShtEEUtggpg3UtQnn33c48uRgFm1ZnhQ55y219uKcu9AQ8Ax8bgVY1yACEKrccJ2mNmXJuUGPShcFYox",
  "key7": "42wymkV8m1iUndXAmdv6zmmfXMjbkFjZndTV9eNrKP3PwwTKVeDTqwsf7ZMGy9eFVhkFdJanwCJZHk1FGVgaM4Ht",
  "key8": "4Lq39Lc9BDDrTaMU7WDNcLYVFJFMhaJuQz4814TsS4aD3x9f4mdqrTXQzTKMpTL5LY1vqWUrVvaqeNLrTeZAwfcZ",
  "key9": "n1ShSxYncL3frSVYc8RCCDKGHZ2nUK6NP2va6moMFZhMUPv9V4FKujLrGvrP3cutQDRYbJgW9cv7fzXnkQpBDLv",
  "key10": "59h38BDbJSaw34jzEJCtgBWuCfa6uZ2b1FRxvN2CxJoGufEiLdFqXHoXcWEKcevojrkuAQMqN1fjA8ginSA7rGZA",
  "key11": "4UUjXjYozfUkTuXEGWF8D5hQfVShr5ykxUgvUFcY6eAiDtdaj5q4VfqqcR3F3oaNGE88npUhYGWKjNn9mYcTv27e",
  "key12": "3yMJ81w6ePZ8vhntismtkgQz9Z5BTcso6mpgLkS6v4vhECcS9sUrYP74pM9HJhkKKLhxqFQKgZhyaEpKGqv3dwJQ",
  "key13": "vDh87oLNkjoJtetteFYQL3j15Mc3L1QrvR7in6fZ6njwUPMoDjFKmEkka9jkfw74idpNsatBdNJx9uZFXN6umfF",
  "key14": "2oiQHtXcnT2MWVMosm63LBuvSzdntjtbTyjTxU1zL2a6AbmTxxgMKB3P1MBroLsyTQJSosS7E8DpDMaH7ikqrJXX",
  "key15": "4axHDd9qzfG53brnm5D6qysfbc4ighdgbaz3vqh3teP42sDzQSzv5fR3fvcrxmgpL3XSs7zhu4G9nFRQDnmbbRWb",
  "key16": "4us4HEXkp6moVfjiRf1bHtjHgxK6gMUeKBVxtRrvYZG1u8chXJWzBeYqK2J1ugKEjrUCAN6ukzGTBKMvt7oTxGme",
  "key17": "59eFXgpo22wLB7n9hwxQb3WgBc2Lr93kTjoqJxhf1CZZKX2NbkQmVZTwULJeKLwdD9SHKQEPZQB4eC249toE8vLg",
  "key18": "2T7gqiBSyLLUbqF9psWJ7iFSLxnDx7ZW7dg1Fe4JemDjeCiSijEw6jA5JK2o6eJLUE74xJT1FU66xutMr7GBZoFC",
  "key19": "2cspD6sZ5Y9gLfcfMePWDBHDRoerKyxG3NfDsKrmS4DiGADbfTBUb7GQXeYtiBkqsuy6sFzGSc3nsfUJYcGgzAUg",
  "key20": "rZjHLPZRc7TGZW1VFavDNFNUdKiQkQVyodgWd8w1riCtgBar6gBT1cepGh1Fu63FAmqYpAcR4fV1PnrhHjsnBZ3",
  "key21": "MHbQcFvBejh6DyynsWbyXEA5tXXgeAYVQmNzF8UkAixbUfmnw2v8Vd3DhsNxP8zkS14qqnJtD5ESh4aVpuPb8Pm",
  "key22": "23Lf5Hk1SgfX7hYsbgQsVbeZSHs9TCiREgy8qSGuwM9nEJPEV74ACMV5SbFLfuExF6bzgyPcTvVNMUJewguyYEuk",
  "key23": "5rAskSvLqBnLruFDuKUe4in1q9ev8ZgRFcE5hrPZMLhcWfcWsJYbgVHp5cVv6NMZfj3NJQncAB4rhs6h8EcPCuPb",
  "key24": "4fLmDAJapW9wjYKVZycwDYCm9GCZZubC5Yh2cfbEnE1GfqK5H431rhY1r2GRwhnmTXsP9TmQFaDJWKg2wdS5R576",
  "key25": "4khamXX5c5HMeDgfwt1ob3n533kxBU6g7GVmb3MMmcFbzhLsiuoLj7E96sNfWPme6jxrshx8gtok5HmqtDVqqCUi",
  "key26": "2D3UiiyPwe7ov1crKh2iSCe5GRsHMAkd8f4jHPS5bjxgv73H1GtGXfu4yDUA9R4tdcXVEa1daHg8PZUJVZRgtSJe",
  "key27": "4RaNQpn1n8HWsAk6sWatLiK8K7EF5boNAyyZ4ud1nsnZcxKCNwds4qbd8QM5HgXa5VAEa2Cm2rd6Eyx17mjDEfk6",
  "key28": "44HRwX2x36LVC2VahvAANLGSKQk2m7jAAa5g77vxarU6R4uoS978cNVbTrkodMFKnb4mMdpfEvwb15d9tf4xA6JW",
  "key29": "4dDTvcWvmiXRssHncpKJhLNmpA6GcsxHFBNBJjvZdWhAsGWDq9PiqrHMgbujWePdazp3AymUUQxwBCaVQzXACgDx"
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
