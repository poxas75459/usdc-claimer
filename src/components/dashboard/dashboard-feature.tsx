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
    "4ikZriryRAjvMVQ4iH9QV8vNjzfvWjVatN1Aw2X1oMqY72F2eSC8PwDoeL65H9kt4HQDdFykX7PamvuhHfeoVT2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9ma1qCNb815Ta6SKfUeWHGtW3me41RXSySQva7G9RfLSR1z9B6yKsV9qyRKpLkZJVFKVVLJTf53SwJeKzh5KpE",
  "key1": "5iYwboAuyjmyYKAizaynCmzRZNRfMpALJBzGEBAwLfLnVTzmWFmNtTXgg8fDpkf2MjoqShX5TjP76Xo5Mx4AJ1EH",
  "key2": "XXEs3n8d6Ax4jSYWajLFWHshg2QPRUoD22TC4NFXMCzqCYAWqvcZ9p9wMyJVqN8fLKVYtWeLh9CuAhxQUFcpuuT",
  "key3": "3yQ4kPWjSTMisPN2QRwg5E8cinmtHTfa5QpwsZKsyy2ZQ9qjAiEUh4oxTpyQvjRsGGt8kg39aK8uyFRswoTYTfqY",
  "key4": "4GyYF8ZgjvDqEy3KXwM66LhPvKzUjVKsbpsiiD98HDD2hawBC6YpLodjjB6AnCFqgUeMj1FyFD7wnC5eWJXEq39T",
  "key5": "2nhWnVEpuf5266q5erqrjPetfPD3BeSRnDxJzCWC2tziZfg55VeknghuTDAq2bfSjUyZxcFq4yTEREVReT3MxF1f",
  "key6": "5AiGd1GZPu62ZSud72nFXVTY7wyHrwDNDrntSbLYx3JMqbvc6EDSFG9UfHZwNYyAJ9kdTTZkPsqenfzbJjwnDXSD",
  "key7": "4NJh5w8q5iKggdpivuYsH9gaTLUHjX5pszBJJEPUth9B3RmhQ7MSG6Wv9fsaJwdchbbVmEMaVTVGk21JtpqN5se",
  "key8": "2a4Fq9cz5FamyVZVJc45FMotMttvKMXFfmuW628QmMAeg4eZGeyZy3LCbvztDT8QG6SkoLNB9TGLYQpC1FJqLSVk",
  "key9": "4C6vFUPSU26vG4QHYNmmsqJCb8AebBrkdZFi3xLKC5Ht6MXjjUA9srpmoYVZgviSHDk5Cg4aSGDgsrmWJ8qQbnXe",
  "key10": "31mVTitEUEAmjsoyj1HBenEmouJdGZW4D4jdGCwXHquhu9iZDP3wrMCvmH6RJiwL2kVv2H9wWaLQ3ABHKjRjEkYr",
  "key11": "5WgHc3FSEnFeHUQec4cMePiEtVAS78RZwi3HCBY7Bq6oZYW1gTTbVicVaanFGcpey9Dro6LZvCswWMTc6Krb8pto",
  "key12": "44utgKTYFdmEweLNkcCtXcEeUWT5nSpkuHiKCaNyPB9vR4Qi7iRbEFgxcyUg5ZscCv1aGiSRauRX53KquqfyD1UQ",
  "key13": "5Gv4XLBK2QXH37U1uY8vMBDRigZeQ4EdPkiCSWG1qDNnNvBn6LjsP7wnajywtXRXonGeiHm2CVgPa6XrTjwBBZ5z",
  "key14": "5tuUgtxVY3PXSxthZHFyMLGhy5Jj8tf3s4gHcSRWeVMVnPcZqw4JxZDqVQGqdWDr3nfr4jBHEFZwEd97dwPjxqrp",
  "key15": "A6JcSAQTALVLFebHDuYjWioyHxZSpG2qvuGgFq7CABr1jZcbmVgr9nCSt8xZPeSzpzk7ZRggpskvKsHyYwqSU4Y",
  "key16": "5zxtkbVLKzCDnMH1addzsVVhJLyMLsbzZo5mUCYp6Cr5DZ6bb4YxAhqF2kckwucVV1BfWU6Z2C2rA4igG2pKiheT",
  "key17": "4AD2QJvocHapwcg3sQYneKj7YhaVzhcjdjyrNFHCkoDmMYXhAqbd5WA9bMcFBSTwVsgFKeCAkPtW2DjNtEcBJDx3",
  "key18": "4RKm7apUsLwqaEuBRe86n29PxwuEStgkbgbjfveDjLgbb8DnqKBDjttLKkmvhXQgkUzS28MP8Ub9EUB5DbPp3LrV",
  "key19": "7oop5WXt3LuZ4Ad8HxDse1dCR2Y748FeVyTxarATLCeYqbkSKYR5Y2GpYqRnw975qot5oc8kFA1pxVp7dUPUrLq",
  "key20": "3ZMEkKzDdq1NrWto5U8SDCiWK7ePMLrcUjoFCQm7uNMMrTdyvBiPWQN9drk6F1AoxkkSUe6fWNepjKZwNzD7eU32",
  "key21": "2vviBAufewq4ETdQMZLNXMDUCKoU2nUN2BUqKePxxheSKEcWgyDUkwECQf7tNErKr5r7qzmjkjMh4eNr8fw92Rtg",
  "key22": "2MyHRJMeMqeHPwbMfA7EopCgUJQYuSsxnpy38Brj5n7TSuVVGo3CZDSJNFfTHpw3ob4t5gBfxY1YM93MiwyjD4nC",
  "key23": "2y1gCGWYssGHTimB5HxC1U4YcmuSdjmkLF7Cxue3UWctDWCkFMZstBbPfM6MoTbh72jYWmxnYqXYWUj9nU5aXgU9",
  "key24": "34Kvt3TavHGCby93YQxhGM2ryfgrUXfBdxKtazMJbuXLhfTdg45VbMMSrYtVSf6tpRDG1g8WY7oWMLxbW7gsWLiH",
  "key25": "4ByverzDvem67hyaNGfzswZieUucvN8xXT3QY1y952r3GzXSGvnLAwZX5d1CWurwzpGUZBSdXhcfuejRKhnMutpy",
  "key26": "52m7cFrm6uQAtYyXh2GpmYXotNBTnq2yfhAJakByf8tsdsWd9nFf8457NEueS7Qk3z4P8rXpYbAwyGhWUGmhGynr",
  "key27": "DMPsy9rXf1PNAi6HJkJYNKDr71xaq58dzHL92hxfTJNX6T48WB74kXoAui7zc94MENe13fawRQsSEJn6Xktydr8",
  "key28": "388a3ApNyWqs4LXZcS71voAR3nVDCvc6TErSSHtK7f777ihEpNbMTBDLQCaRA592xxn1NYQEZ8JZUhf2dy1MfNtr",
  "key29": "55SxNJBTxebYdTEGYGYaZFZFaTwTcgrVvHZzZ2bjGY77QUFmtiH8Gyx1i7BG6PzyHcpmYcB5pZRpciZcGqZPGUdM"
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
