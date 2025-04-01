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
    "yjrNQBSsQL5hSLnq3U9EVDzJUD2NZykDW62yhmuAoXa9d9P7sZieKgYSF9sXvpAToyzEYqZ8wP5pPUQ9CG78Y3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbDbs7EM5uCFjb37AvoimdGdiBAow3vtbQtUntwwiA3XY9zofDWR5iT1r1LSQdh5kxRyKqVvLqeoheZMi7GTdgS",
  "key1": "4rtKz5gqp3wWy4JPXwfWMV3jNNAiwxxeZoTFkPKXmahcd9eo6HTSVwC1ExVwVPgDhLGqQg8ae69z6ttaAC8ngxRo",
  "key2": "4mWACAbRzSMsZAZKxGQZqzoTChGJWRFUBR5yE6TqiLzRUpz4zjUES3txYUvkg7C6gCQaRGFwKUMHQHxK187TqWnS",
  "key3": "2PhyzPLEZrTU5TWx79ZPec7HS9Q9vWmvkadotRs9bavJvdwygUbCWEuckLTGPxdpcpSCphXkE4LbQUPVcA8d26ne",
  "key4": "2ueFx43LvqipAf7rYgxvHmgAHAf6tjZ6BfAEysbgWecTwSLagWrq3sECfzx23bxMr2ybuPrty82vyPiDGRb7pntu",
  "key5": "3enF1kQDTRpGebYqHj4WKe154arUAv2cMeb4NSYXjnTHm8ACPknnqMsZgZg8pmfdUcADx8LDcY6X93ByGQh2mv2S",
  "key6": "2JWUyeNmBW8VrPQGhYPB8pdf3pTdtGitNkpdYxYSB7V1jcEkgH3WKipqXRRKFu8SSopsEB5MaQ5CbqvAekWKpsHL",
  "key7": "4q6wsHX42ehkYALZoS7BZqkv5yZ2jerrhZhvo862yzjhjg4HsYPYqr81dtr9dNUcG4EL7G98au4tSKvfJpzQ83f1",
  "key8": "YLDNSiCSbBML9ZNjdFUMsbKK5zSSGdREDwwQj6MCDRNeTYwqC4FMmKtBJs15y5BZMHV95pdfPxmLkKN2GqTznw5",
  "key9": "5HWaH1JmVakLy5tvhuPKvP5qtYAkaapg17bAdVZ1diqEtomsMAZcLK54UrCLJC7M9XZ3PMMxzMFdXg4NuyT6YSbd",
  "key10": "5xQXgNM6tUSDRiaZBWfBD4AeaZ9ydVKUsYhHt9xEYRbT8es5YjJPNJ7ox1pgjT7CQEgk2UYFvGA5uf9w3Rs96LJu",
  "key11": "4eMmLhFfy9U1nVwB6o8CHCgjs2vJTMjDbUFX75uJqpmyyyNaXaQQNrAamXtxpq1xuwvazvwt3gMqGohpMH2hTfBL",
  "key12": "3K6S52pNna7rHqtR9BSrFxoeEmW4HEmtajkjFHGXkAGUYTzLd7kcNRfeSBYceUotxAWBRbxYmwcruJa1GTqLMrB3",
  "key13": "TBYiHT1haGsHA7GnkSzErFo3nEcSgpc6xXaepkQYQjE5bTmjvVnhQhG2Ui4P1nA8iPzwrQY32Sc6KbfjeZRVQRE",
  "key14": "2oAcB1NUHnLeCyUd4kgfppmo6hcs6M2ifaiy9Z2bsvuLKVwmz3w76SUTTKGz6vxfNfpgX8hXYCh8K4hEmDakn37y",
  "key15": "d2TS253X5Et7wwYvTcCXVesmRaXM4xMeip4NMnDc6kVFC4e6FeAEfo5qnhHCHzsDDZurfF2Nx8Sg46DpjpkjBbY",
  "key16": "2epLtKxjpwJuoKMQgWekb7Euirn4tt4jneajFpSKgp3LyBZAQqtpzpovJJkF5HbpfnGgmVYuth8YRJSJ5juJ4U6b",
  "key17": "48dVev2qRWpdkRPRYKAYoAGCRr3fKbxyXcjo4e6gxQgWGs4DjWr8ZiBEFAa38sUvNTufTPH9r52JPuHW1nC6CemE",
  "key18": "5Qh6JMDHEcfFg11VwpkNP6SWBfNCvDt4FQmXZmPKFNwLxJkLaS69vvyd81ykzBtSYo9Kup4CmRJvmeBorUTuDTe2",
  "key19": "43df3XVwGiVki6yNSfRz7nxAbpuxS8MjWQcFeWrT1nyFaSDVYUF16JhfSBjVXf7tLBK8TJJTnVmEBqvbK3L18ENC",
  "key20": "5PAqiyty74vHM617yAdZUL9B2j8aJYuDhjcf2fdUWhDD3WgSRSuLQoK76yYya6P65svSU3yBA8MoCTXLsor2cWnM",
  "key21": "2sD4SVsqDZihGVDm3gpS71NmiEoynV1AmGqHGrdnYwPfef7GgK2ZVi63DZChT1G4NGMpKFWteuWe6tnYvzoQFE5i",
  "key22": "4zE5Sob5kPgZA3FUbvF7VPLEq4GKtGK8Gz4xxzPDSMNeULu8VYPjYMs3su68JD3ufoZaTcggZPK9sJgNDogBq26f",
  "key23": "3WeCrKPwHiynPkwahDsBBrrQBLWANCtm9cTiBddG6gV2AH95WhRgGXndXJcg1MQYgvgtWvneDncY5S3U8YNAsoQ",
  "key24": "2uBUcAnw2FCRcxsQ1xZSsJZp7VcNgTNqFDydsrTaSfB6z9hGXJKk4uBiGvvvZBrsYW1u58FnFCdiQ2MhFFrgQEmJ"
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
