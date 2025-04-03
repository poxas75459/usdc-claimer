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
    "5DN7YoJahWhhELY7vDqJQbBpcEUmZKihF4GCc5Rdbqt4KBhre3GH1tn7AhVbzormZMWfcLWsq2FAMCTmfFwniqjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqkbjeZFXZPUvDu9ksnvf6TT5kzMvaBqjK3gVqDLKLWPjpyKabNi5j7bLb2q29a7Ybc29vsjJmcQhKhTUNm33fm",
  "key1": "y3dwmQxdbcCjVpVKLMPvz9GEZqw9ZgKn1a3FoPjAAzb3YQfHPmNzfheVjr1eFxk7pPoWQpTC3UWdgQL4fiEQ8TN",
  "key2": "4ihRMPiy8837UCb7Vt8wkZcmVWsBfB3zz5zSSfqEidgsETGq6PHBMr1Yj9ndvVuPWz9bXybgUC9RdohKjCFBsAnP",
  "key3": "5iWTDuTonBR4HvZG1XPc1RHGVGHwh6Z2Kk6fFu3gKSpDtmG68SGwcj1Rjgi4YGqqTrUYJqWrsvk2zVAeUdsd6euV",
  "key4": "39iVxctvbuh41qhTeqpmGwmRPmpJzUYFYQUKNtJSkYti7jaGXuyAD7QxYExb4GDAKVCmb3pLVpt99v2p4HZ4aCJX",
  "key5": "4SJDg78auTXXVfm1Yn9VB2NQBBRxTUu1fLJj395Ruhcbs4YHmDmH7WwDLePG4F68nrLM3XzR5NrPRFwUDqVMkoG3",
  "key6": "ZZhfX9TQiQJtEKioxzJGnrCN8onL7gECKqv269G9z6ic4zXQ48xvM3Th7hkFPve62tUMvg4r9QHxBb6kxoNuKVd",
  "key7": "2F7PKp77nk6XuTkwTcwXSXQEhU7iM7RJuJrg6wuGyogzoFxTLGHuf3ERWjR7pzkGxhmLRyCm6RVYsrqF3NktQinY",
  "key8": "4EZr3MW1DuZCHuuYmVUcbumvboFMz3F26cn5L5EZ8k3N9UtnUiieQAUn1QK5fpUbZyoDCukkwdm1W8dcTCCWPcj7",
  "key9": "5rYDxYapBh4TQdu3mCwuqcud3eg2tQm21J4pL5KWs4XaZBtMEZfFwm2gKXyWpJyjTJfSgz2Wg2ZQnuPppThwJDo",
  "key10": "2NGwiCANuzUTNE4FX4YmwXHwa9NXbA2nRpag6sfaWAErbiuR6t9GJR74wZJMcN4FHyPdJBQWzt7mtC8XsSAMko5i",
  "key11": "3fqST98LSoib6hdYfb9tiXcqkn7fqPAGhNco13avkikqHLJBwikqLGQmAKhvoRwVv3KC4pfwjSU6r2GUcwwgf2T5",
  "key12": "PNXZbhwM7gvPjPJo4Y5tq64z8ZNBZQ5xG2QE8BbW27d5qmgrgyHQKQbrPSVU1CXzcngjUzCcFiV5K1yxNJiGqMU",
  "key13": "3tyHZHZN3B2tfoiipLDUWKQyHBBTo9FqrCDAFgM9Fa7HZDjzU3f5QCqQhLixp62pt4nRFRGQBzqoWtNyT5vejEP1",
  "key14": "udpH8HZrHDm3wowrh63eRV19CKJXBdXMa2ppJv3Nip3stx94qPeAo63tosgcRMRAbh7rHyjy8jvJ4bf8ysYQ3q2",
  "key15": "5jLbbjvz3cW57UfUFE1KzR8RUinFfnTQz7H51W29qEJaUvW4icGpxN8ePx9Z8S9vkkzZyRTF49x999F6t4PTg75z",
  "key16": "2i1ZMQqYVkzhiQdaR1wmbgTzh7fVZ782P1xtf6FoVM4X2sh5PXeWf7e792gyzEM7zyG6Ns9Xnb7sMUHFuthDu83c",
  "key17": "9s6HKyKYxAHTSqUS5o383WFRDnSkAwWEXUDubBr35zqbJDoZ384f285xZtaqnb6Cut1Enf6G5WQrtzyW96s4kaX",
  "key18": "2U9xzGuSbzT1bfxmWgvCmeUy7pYDPzWj6dX7ipa2bwmWNfR9HGn3WqG97ZEQ2hQ3iVPqGhFpfPU7Cx56MP8gY4Dg",
  "key19": "3ZXGpzcNi8DEfGZQKVTjVoUZhiNaViDBPQSaDbL4D6KBSBgRQ71SPJQjDtkiScTN9RZ4C2UagXFc2Qysm2HBzDiY",
  "key20": "2j18xSTGiq7d9jzSnsEyo5fSgp4NH6pJmxcWJhXXSzvUmErpjMgcgGDH6UmwjLEwP9t7sHt1PVNGRgFJyfbhV6MZ",
  "key21": "476UVXCBqobbkX64VW9ccBmgC24w5BVXX7RZbPDBqPiS6BnStg7mdkHQSbrqeiHxwe2sw7A6Q6N3tUykKeGKU8Ew",
  "key22": "3w87RqYF7Yhb7XG9NNUaZxurH6aAAw5vjS1yrhsAtMbVxhd5gNL1HcduaGkTkWuNgLFirUd4YHVbYE5FSBxzUj8n",
  "key23": "4GgQvzmGLpsqVKrV1Ek3LgENs8ySq6Z1Uhe6wAEMtuYZtfyr5sv8oVkExCbfs72Wh3ndbxhwpeHvv5wYXh5mzLok",
  "key24": "2ArwGDrUXuRe4Vnrp4LVYgQYBH7GzVBVmZhfha1ikGJxs3AZjvSdhLvcfqS5tyQa65jnZXWZyqhuNRqseGXvxfCG",
  "key25": "LGLgJYnoREGocT8HuFKLFgu5GhwDaUse3aQKsf8oH9JW4F2o1BEbdcbkanvtmFPdoCi3fsgqT1svisKSqigPy1r",
  "key26": "3hJnskRHigMJQMsGnPjRwkPB4HoDyy7DUt5xqPCuNPXQNuqoxNpnUeTANsoxdW2qGLSvJVks4uTcMLw6B3R9aH6Q",
  "key27": "3HkKUjW2TfoyCSBZX89muGkeJqzfshDgQ4NrY1vTRz9mcWuDeUf2K3gfQuYvJVg16sip1rDSpYBSQUtsjLNvDNS4",
  "key28": "5JM5qmgSxDqv8F3P4qx4MVAYppiuDRiMzj3GWbfoqAXsSp9Gt27aCezokkWT6eQ49skebZNgUnLaEKJNBLcDb5Gd",
  "key29": "4wbmxUsbUrK4kkEb1YkjAUBVXnKEzPAJMStbgvuMm8o73mBZcejcGrDgQHZ954fFN5rWZUQqDhTCq1gWbYg3cd9x",
  "key30": "2EDokNEwxDiTvhc3MMicREaVRAdckaF3Zk9MPsKi5Fjgh51vtH5FMqTe7aDdW7RufidiAwb3opmg4ZQ3gj25Q8j9",
  "key31": "gQJxBLbhgaikdQXbaTrX4f7t64C27owZ7EehmQUzFpadtzKKE8QdaNUpVMZ8DUEeTNdNTxxBtf9ZTeWkzXRfyYM",
  "key32": "5tgrRTawsKDw8Q9bkQa95e1kmtmrY7N3RXzf1eoJhuwgoyAncs2uswEJStaxrQkRBFADbgMVQzb2UH5jY5jhAZoZ",
  "key33": "5vn2LpSPdv2ZQhEGqA9AMY3VS9gT5CEuiUzhPDHfh7EKW1RH28JysdUEMCPjFZzqHKEMEf5MmvuaZ5AegvfT8r9z",
  "key34": "438Utq8oGachUqsJjNv11H7zgiHEZXc534wDUNWfqByPhRnDQoi6Te3e9bTEDf9ZLM8ucmXVEXXqjrTTPfVS5bXD"
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
