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
    "5bRhk3qb1N3X1Su2aGkLAhoNJmNArMnLkkwHAZw9KJ958JgNZNfkdJ9jRNE4AooSZfQSLaqTNpKA5hxedqgKL3Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDry42TfeaXaK14BsqQLNm7kSBBdT7WGVyNVfbDZYxmvEQqoNA6UKUdA8cuTkXH2RH3PLMQg82xm3N3iLFYcA5p",
  "key1": "2vPtT7CL4TBjHbLNrbLttXQCnasWcwDmPSnxme9QXD6tLEQ3fDnfj2FiKcsz7YVA5h45dV77wkjzzpJ5mPL3uJgz",
  "key2": "34PXrc3wvcziuuuyvCopydMdyu6Mvn5NRfyCwvSoxTuZQHQRCsrpg9CaYDjNs3iZwodJUo1tb8NeBYCYUQhJnFMF",
  "key3": "2xjtqoi2fqipX5VgFC4ahH6UZnf2xsBeBz9HkDum5L8Kh8Dspr4VfFe2URz9jwgFy2XhzcQaTPRjDk5HDpymdfqH",
  "key4": "3gTCV6FwVnRhV2Rnsddvfi6kpWr4n6vmD1ME2oefnvCMBY8CvDnSXRiFbNdtRGt5Q35L5hfG8CuhfvPUv4DgnwQ6",
  "key5": "5KuVQBw4edVq5Pp7aFwELHijVrUSK9q8GDG7rqgr2Eo7Z9k5h3YrKWL3Y9sWqefNykSfnvPCUTejRcpSY9ut5sRD",
  "key6": "4ACxQ7X57r8qSPpn95md5rNBHCH6oG1zpuCTeBWDGn1eLzDSvTfFu9USABkUnm2e9YXhqh9diJLnHBwgvYoEWr3q",
  "key7": "639yeBA35MY5a7q4HoscLHVMMtUwstYNbP84keoXueDbBEGkSswdt3EbRvcu8FKooaP265e3ijcEpBuygCLMp4Et",
  "key8": "4nVB5iwjQCxTxuqLJP4vvds6fnwbHD9BM8g35FkJYmXrZLVHc2E2M6rU3rQCmx8jXfdKz7tpu9AEsKBXcD9K3xef",
  "key9": "2yEJfaZ4Szaq2SZ2DtCpK6D8vs8V44FMTXDuMnK9rvYD6vywR5yGYmzxHiDvrJrQi6kBgDaGQwGoAaku8Am9N3rD",
  "key10": "2AYT6LHHjYtZMEueyutfzY2iarZJTFVA34Zzu3aTPzoZ3p3cvycDd6JiMTGdRPBtw6sntdzjwg8bE9JChL5xuopc",
  "key11": "5fLcvtCz4Q2DtV2htVCFJag3gFrTRTe4T9TS9VmN9LpqCQR7F7keYATWNqJ5ANP9Q4duFSnpEmH1wkTPWTNHZ6HH",
  "key12": "5JFMBpWw3gLBYTqvSaTAC1VBURH7akZwZZHkfkHyzLTQuXtMQgU8Hr2cSKT5a58PAf4X4C9SiTdzXQuedmmAtihf",
  "key13": "4DeeatsvZgXKFDrFwTh8cNU8badfppvzy2ceaaDVHrtV2rc3pwC5CxUUMawrQszzm4W9sLL2mTw5M4qKA1ePyKqP",
  "key14": "29EV3sBiwjH7HFm7eJwgsKURBSb118jBhMPQMJMxo4atvRW5dKr6v1jdS49iJbeyrXpNPudyDJ8g5CEo2SZYekxJ",
  "key15": "2twdzjeYqaXe8448sdF2YqtS8q6jUa6xZ2mcXBZQ6fpHRbPjappwW2qPZyLLAv4w1QuHVxXFtuiJ71ho5brdfDLR",
  "key16": "2ieuMmxnhkkRwC7cp2H2mf2DChK7HeZE9a76nmgaUuHNt48Xig8xL7Qjdws8ojWpqJQpMkfK32ZMCeac1neY7ofd",
  "key17": "tsPAniajcqSCkep911cFNJrtFnLSvhgU2E9USveN2kDL7BW8guAHbDX1BVpB7qmivorPArS6FFcewZhmBLnvASk",
  "key18": "3dQVDTDB8saBCwiuHH79UfKM2jv612KSfJBR5ogTsV22imbhyvRrkoAKB7vKsZpgXixSKvRaB6wZxnfdA22zdwp3",
  "key19": "4mpPp1T3VEmXvR2d83VMSEMPRTWZdDJvowSQFTVQHfMS58HduNwB4H8TetSk4JEPo2geRZaw5zRjwrZ1LeGMuUGv",
  "key20": "5AY3nxi9APdV7WEsTovzWpnW9PcCKhw3m7P124Wt5saSN3PENK99nSCHwyag7kzfyA6HyuuVUxpHoSrkGeqkbPSf",
  "key21": "5fB1CsRDaV3no4yMAdAqBLhW78mMGa3Moeapr82Dt6SwXbxFBtBSvTWcDwcF743tFwwpaQSjXKNyrb73WHdmiBtb",
  "key22": "vE1FkxNkn5pVEKpV8pDhGyctUsmQffaBQo8yNaM6C3erpEWJ3Tnwy8JToaf52QY9giEhc6ZXzXo9j4asCA35BLK",
  "key23": "2iK1cSoaTUGLj72MmnAqZah6qyh3DMUMEtPbUqQ3pcH3Uqhdd16nuzB3q2HLaKKBSmbUeTnEM2y26TtoiTiqWJBT",
  "key24": "54H68q3BhKVFJjKWPMMvh3JBxQcqAXS8tpJkMnB5NyvUmcdqKNB3SGuGxR7rb7nupVybJwxYQGQnJSmfBNjfbrpw"
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
