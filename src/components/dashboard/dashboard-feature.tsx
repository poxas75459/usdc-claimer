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
    "jB1MgsZKx81eU1Wjqz4YZAvWAJM3Z8LnZoMgPpbY42F1rs8obSCyFiHrKBwt3j4YpKBz7k6evPjzznTeZKb1BD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djzvPU2xdFRxtr2pFKvMb7wWMs4pPdjrrksqLdm2mZxBwzo9oHBptQ72o3GxBW2rVmV3sFQvPHcKgW4XiWy4UG5",
  "key1": "2qxr9rfirygfnBXmaEKgx8geYKcyy9GnZcnVWd3PAkwPRBT5RxR3MiMmqek2c9CqfxFGQ7EqQQiYzEHDHbXTxedN",
  "key2": "4WwA8Kq9wkGUZU6cJTq2U1Vbsn2iPwdPYjiBwhrh5Y83UwPyAZ3PL5RPSm5K4z49yV6Z88bc9iDvtomsK2DfUrRo",
  "key3": "5DPDqoAcXAonxbnXZMx2EHdScVTFyaTf2sbUZu1rzNBPN2NLga5HShFJLuRy4TMVSL6gXLYTTnHoFzhDdmmPLW5w",
  "key4": "3uGqAKHMoTDbXCkxDBfWusTEG7zgSBQfH8TUpm9ZHLemYePbPGitKTdkj74MdgwVvLoA4C3tYxpCJxCbHABpKVBW",
  "key5": "5vArJwJfWdmf1D2XZQExUE9C5mLdHVJG2ZE6xJwQAhJ6kjp4pQsyP1abjXFXwLpQJBg11SwGJDYVUbCGkkrwGv6G",
  "key6": "4JBdsFBKBpNTjqAYh24MEgPgdCpiC6ZETYy6tjnbwsnc2hptiWdN3FPsM33xekaATUoMUNaCmuNsfmZj7bcqX9ax",
  "key7": "4k6EPndhRLqCdXuziMcbyiaQgodMJedq2Bp4ZE28oToUpuDPQwQdNVMNstNkSCRtvjF8e4He2o8MEy1FkA7VC1Mk",
  "key8": "43Xr8iKaYvmZ9KXX1LHBGypVKZAK1nS3UohLxP5rarSs6j7KBP21WpVkJbRMsa5DnERRXSombQPJ3YvnSEaGahwY",
  "key9": "5CJc7NVgegBK7sVz6Ufxwg7wtMtyP3PwwdFkH4mXQHsSNTR9cFoi72a9CxWojZ2pf56V47jmRrxEqixxRArW1Pio",
  "key10": "4pQJqXyVSgHEhcmdWyqnpsz8LSHYD7xR9mjpjRYit8DUK6Fzv69Zc3fks1HJQWcgwuJRDgBnHRbWsa9qUxiuaGVr",
  "key11": "wqF8GaRVkpP8Xc6sDdN6Jp4DLbDfrKuK4zHQRS6zndze8FTXi4nmKTcPcaKaXD6oCvCadS4sC9e4RXHoggmPCVq",
  "key12": "3TCGdp8KLzxfAvVSdrkCrwL3pGXhXvrfw4rPfLjL9s4aEu1n8niVm31spNcPEdKHe68ijcaYJH1sw2bFFkvbTR4u",
  "key13": "cAENTkC1NwxKDYAHpho968eeWGgdVPEDuyoANtwDPh57fwjc3iDMrWdyoowkwRxWctr1gxJCfrr3jQg8b3putsx",
  "key14": "PUcukLL7KrSwQEwPk33K2sRUbv4nu1JtXM28NFBC7SaUbzsnhvu34Z4hY6Z8BbGfd8XQMLZX1ThvxpjSVbd9mva",
  "key15": "4FbyaHYEGZcSmcuQcycci7G5MCHB8BcBAnYDh23GATWtZ4R2cmkQNEBmpj8BwxKJxDfWS3gRUV4N7VeConuQiUvh",
  "key16": "5eJnsnTt5Yxz7KDHmBp5uv7h3sswR8dw32D6YWkJSP5ywpsFkPQ6AjFogifiRsXvJ24RedYuH58jEZj5fT4zqqRk",
  "key17": "4fjcAJ5RzeGqykisBwnA3VufUr59oMMaZdUjyrvyVPrxVAV8VSvSYqWxQx8WcuGc1ePB36uG9agGczRCnP3eKXcb",
  "key18": "525DevGuo4t9N3CUSkceUYRJ5QrQLbjg8bX3wPHCUD2iV2eFnDgvKdA8WUGiVPMRbwDFdSpNGyccytE9xQRwsWB9",
  "key19": "4Chycq8JX7hGLFohQVRXKovA9vXYwW6MU9mKCjZFhZNnTCXKG88uJC27N4D3UJNJUard28z9MjKyvaxTsU3tbZMw",
  "key20": "4WaPWNn1YAfUdCYQaXrxK9BpP86EXQW27a1Uoc5GN88eeX2sw53y5ins9thJTeUb52xsvgNDUr1eJa9KArQw3due",
  "key21": "2M2Cwz9QHzNeZJqpxzxRZRqA1hh2CR74XLPQ3vwTp2j8NW55rm8Rr6sMwYM8puTi1GHghqFRTWCF94RePzhcMmWg",
  "key22": "3j2UR6vLgP46hDqVh8Gjg4r5WakrwcQVeuSZGCTbFM5hdRXFCn7v6qyHnL4VpkV5VZY1BhipzMtMrdhBGh1ytnnh",
  "key23": "e9oHFrbFCctFLrrKY7wCduhhrEsKFySHyGKz13RDWpqamXXEg2kHn2FvMk6wwpTvk7ZU7fUzLFD74m4RjMHNAjV",
  "key24": "5FFR28jLBCNL3DTLT5VPDdLg9HqEzDVHTAqmdwFJvicTzJegKbUm7taueQVX7gjZa6BdCfxxy3M5p8XJcecwr7SU",
  "key25": "4HGZ72T3Y64kGnhTpxiBG5rkEygAg3rqnZpj6ZdY46Mzw7iDTW31EgMDxptK1VuWQkCz27Zhv7bFV6kA7au472Vf",
  "key26": "j3usaBY5iUiGBP9nSLhd9FT95y4HZTZzncfriUKbKFCWkbSDBRiNt8sRw6Tg6Fj3MRnEnLv5jR2iP7yRRe1TFGM",
  "key27": "5eQ4PiY2p2DjZyD9yixPKm2jf2fcCtzsLuYDzAuEWdmAMUzLcYbaau3wnSAjCd4zPngf3BAW8TLgUBmW3S8hrxLd",
  "key28": "WVL2G4M9VFm3Uzk9KL3EFYgGFBEP6UzJmRjpncLGjMW7RayVnqwTkekLDcY2VcKaCitL1je4e334TgMFqjvLJq4",
  "key29": "3hKygH1LBHhFdwce64ea2jtVcbdQtVAbGfgr7PTF5EeHgL6dK9FhyfRebLZ9zXSdJkrCDq9MC4FJVQWA2EC9V29Y",
  "key30": "8Mpps66gvA3BjE7vat1YDVXLMi4K7kewyvepmA3i2Lromm9m6ipRpV9UV3L1wi38umzCq5e6LPAaJueGUnjNUfe",
  "key31": "4tfrEgREb1Fa1rRKKvqPrto5Spu9pmyBpH7kELQNC7WHjzs81D9pAWYNegn1HijgGYDQjErsyYMEcbbCB8YapVMg"
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
