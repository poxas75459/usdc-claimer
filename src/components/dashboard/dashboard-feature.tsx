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
    "3gsgrJUNWWdBy5xN8Nwiwy7WEBdfsATbBLWnfHYvwk5oimnZm5ocfHYS4MFonAtU28QeYtBtcgjHUkZgdWYqHgzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oZX3QMWieA4YnpxnWYnaMbDyhyH7XxtxHCouwCoufzJk8fVM9dy2iwmtUTwFv8Rn3FHPBhcfQ8vzDq4Kvorrck",
  "key1": "povEaWwEUC59JCR3Y6r9Z3vvetX44NNdLjwMwk9Hjua5xasqxNAFBJ3SCYKd5HgTu5J37tZSDQNBrsjfu7r9UyD",
  "key2": "66z1mrf4MZ8zaHCxqGLRAcu4XZfvvnKsbSKEXdnMcscw7mv48cEs6TPL4trcr7ySEKAR2fdmT89H3bg57xNsspti",
  "key3": "5W88Kf7UtRnEyBskCU2uqWWJpXGfAzyUJQgodjxiNkdy1nbhYnuJ7keTxh3YymQG99Cmv2hBq2NvyC5UvANpK5eB",
  "key4": "5koqnTgw4fsUMkiYp7gkxhsDSJ38awmqzkpiwH2dWKNXXJmmAZjNiQmxRtUhKdBucMFLfhBnkDmMtVHGz83GvZcd",
  "key5": "XEZrqsSKxn61zd6992jPfCGwHM6vnN8pwzDM9K3g459f22dhSC7tanPhsJRz4cTDNsJ2jJ1N8wkXc4tVYs6ZUDg",
  "key6": "3ZdogZJwcpBCvFcrRyxKL3q3hWqVhi3MEdVXhQnrX16XTmvVA2br9WnUMQJsDGd1aqFFsYHtzWEMiNwnAr7WVdnE",
  "key7": "4dcgEJs3NdAXuTuYhTyoPJm56MY9bpq6bdojZa7JCGsGP841UmPLBwJbnUW4aS6izXKsgb6xh9tEGwVz64EmKXqg",
  "key8": "2Sszwn9cCMGpoKzR3jDzT6X9yvyz4gvwcgJmWMMyLSBGSPHxwkDoHnCuZh3XMZjeCjbCYF7uNeLdshEL8LbfBjeB",
  "key9": "5DPd7HQTfXyvcH6GCiqzVbSeTRgF5UmffMRDc1un5Uj7NWCsPAn4oudKizx9QnnNvFamgd4LoAdGXJCjBPD1hJGF",
  "key10": "3v4hNG8TYMjtygyBh4TgJJsJfW9ERK5A3sKXvPPR2gBVPhBiwFryKxPeHhmhKAY79z6iB4ao33MzJHV46qDLrK83",
  "key11": "3KTwD4zwv86m86YjyWf3zpXPsoXFxZXf68KhrpzVuMJMcbmx3d7UQSTrQGrJJtvzTP989nbrdj78rYBsBabTL2vj",
  "key12": "2vfYXDz5xhCpeQU1EmEUsdzuMax6GiG6AzhS3Gb36uq5kmyvyLPT6UZmETPNpzizrzdTs7rjimysCYYY8gwxGh94",
  "key13": "4dKogRjddHNmE4x8scMgSRBiLN6EWmLYrxZaq1Tos6qP38zKHTf4fAXkn8uSTpPsrxkCcchoSHYg2SEFdSLambRC",
  "key14": "5Y9WwVtjkprWCKjwG2rbuyoGKeWsTvC3sEsbh8KyVViecK8QtUogi8UDN4s7y5VAZYBkskrBsoyCSVq2BnHKe39q",
  "key15": "3CsGJnipsPCzZkEyF1Nq1nzfYRbi18eJiWma6ppRdowBtnA1pYFKJ6yRiBkT8M2Rxt3u3j2YAKz1zneZeEc4oCot",
  "key16": "3bxVSSdpXtDUVQDhiXMDhmB41F7CvboJv6YDorNzGaTN1xmcNp3zipAgUEfxPLkLcdz9EVzmwJXxi2pv5BpmtrHc",
  "key17": "4xeikxSWTBdU9t6MuaBvox6Za6hF2RyCsoC29rX9LL2333HAiaGoJCdktBhN3GjXg5AWbrdsrh1MFV6GYGReYzzf",
  "key18": "2LZheyaTYK88sr1tGoYFjZTiUGmChHW324XSvZtUQzgNchVSiBGP2vwkSrko8S8mjAbyGiDozY2VBU9mzUKosBWc",
  "key19": "29fmABLisyCQ5rxx5F99wxjXJwFABbQ5VBbgKj4CXyEhWdbrvbra4BNGtwQjobK6Lza7mpjtNr3PiHh8SN69KBFE",
  "key20": "Tjj6d2GDEEbJbkRBxnTRR37EQFJSwqfCit2u56ixDj7BXhCwMwA9MTrdGeXD2L2r8GfVwzYpSjfNLqTwXz9diSS",
  "key21": "52rz42wC8wijb9XRGMw1tSKG4BGvEurYBBnZW2yAuGtUMJ4y1MEcvZFsLLSGFSkK2NpmGfEgRon5m1rkJjhXvxvC",
  "key22": "M8fKyQLiixartkPxEEWUJHYtaFi9nTfPYpxcRND6xrm998mZqPd9H7q5WXTyuo6HL1TAHCAXtbvYotVCnAR2kRD",
  "key23": "4a9VjdCBa47vfsCu9HrxFxcxm3yqYGCZXGC9SrHFEPmPCUCmMqhrVfKyGwq1ztG7woHqJehNnqKxTuXdGYSnPPwe",
  "key24": "mwiVGj7J5zxepphFduu2NB56zDJTsvJup51Uco4ep9UiZsLAesLEWAmZcfL5nMkxZWWdFUuit3BadMpGzHgrTUe",
  "key25": "4Xjk8ZSKv9JZuLtSSyVWHd6rohpkkK3bRBiFaaQvPVf9qofGc16VjWzpjYHQZpuEf2K69K7Y3zJWbAXLkczMw1Aa",
  "key26": "61DkPGri8BBRzk6PgMGUn5LmgzJhEKQQiwmS3WESc3hGFTTdWuspxvGvcADg1ZpGqs2tWB3dR645Wqai4iGxLXK5",
  "key27": "uFsCgebgSCLXYZykcSwPcnYch4HppXC32b6Bx9hWdkdPXmGipzy1rsWFg7xo6pX5ZT3FmMnf3RQ6oru7n28xucL",
  "key28": "2SgCVJYKaUphaENt7zkun2EcKiTx7hkLp9hTWfbvAf7EL4cdFUAPGt3S3VBAUHLL6agBsHAeurrS8rZagYU5vU8w",
  "key29": "jpExdBcb5QM8YZeY6J5PYS6HPrTzGrF4YEexqzL6eWjLXxo6gKWxL5DPgYfngBmffFhK19PXid1QLnZtL4xidbb",
  "key30": "2CLpstoAT8GQo3uGe1NqPp3LccatFAXTH56QU4UrSGa3yuQcvtMzpgM9nTTUM16NFG5kLUhzM3PN4oP9YWrrYFKX",
  "key31": "3RciZ2RiHsuU5vZ4AzKBckMKBoSTkBx6C9R9tdDJa965qMCjTJby1PFR5UFWN5pHMCMEm3qMs3aEu1W9YLgrrLGs",
  "key32": "3od5A3HiM6KHb7tdFPudV9WW5nkuXJ8KjPjJG734Ho9eUMsFe6Y2XeQbD2d85Xsmq27dCsbWxTkfUjobFpXftPjX",
  "key33": "5etsCPWKQ6MaoxLJ66tY8eBa8j8db99rUu9y9LBYZBvq6m65NTNPqvFvQzjLzKvRsnzFUezdg9wpySeMbxfoU2RE",
  "key34": "KGYrkdeZApsfnU1kaYyswLsKMKCvUAsFvdpMXn4De8fpbK8F6udFYMMum6BUosgW1DS3nkbuEdyThtUHLKEeAeV",
  "key35": "3V3nXVNxsPmqsmjsL57EMFU39LtRBEUsVEbjXM9b1LxR71DJtTaXXQNvqoZnQEq5EEXzBk12yPGcmnHcQcPx2ErW",
  "key36": "QXTgBn8cX4LJVWsxb3mJeRErisfTSzoKTTMM85sDfpZWDhrMYjaPuKbJUwGuXKBMu4PVirCQFHDpxnkfDLQj6Do",
  "key37": "HxEUUigzeiKbpKBrfJe89wjCvdP6nDLvNRtEcvMD3DZjzkZ4XJsooPxijTtpWeE132FabknfEtX7aMGLZwV7Bk7"
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
