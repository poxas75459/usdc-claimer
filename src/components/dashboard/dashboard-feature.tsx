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
    "38FYTfbaJfeNa5RZhhoVjwDPdLdjdnzopWM5ECuqkAxk6LLJmPtp89RaahmnLqSt1YQRjYbCXWF2DnPa5QjMbRud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kqg3NcMUxU15cpx2o4pejYLsby5i1Q4LUMskx5EiZiRUL3eSvrqvLXPKB3Q3YsadimG3pG2DBAGdboAAXB4ErV8",
  "key1": "4qsWFjwwEwT5QMzYXhERxvUC2hXQujk8YVB7pxU6urYzBK1NiWyY5pko16i927xFZX4xjvQtUJ5wtkNDQDXwhzua",
  "key2": "v5L6G6tJgM5M5aNYiCdsMtzReD4KMwgqdUgapaVpU55UarhvWgSwj2Eqjnw5y1NMNWJaWC2ApjHxzGz6Lk3uzNj",
  "key3": "2EMXB2UnCcPYNmwYaQ8RTQndAdMb5ptHgMKdQtj3Pf6AbZDG9cpDNAqCQwK9aYRMLX578REhBkHHRbPaLNRdHFmt",
  "key4": "2x1UjFA4LYpL16fi9XXp2gjZDjdEUgfTrobxbFySuscKv9GZpm2rHzy5sPBrcwWULjs8SAAob4AnoHt4voLMSzR2",
  "key5": "51TP674JG1qaaKejdXyubJEFnS68rRAcgyShwS88eHoxWn8uHncZG9KDn8cmZpeVSYf1orzRTAq2v3ovTtoHFGy2",
  "key6": "2SQfsDoPqAe6sRFTqcdLQv9R1omaHx4c4QtveFi8TnGTS9byWDpdSbjxMkJZMPWbkHvuTWFBkcughgVkLqSmCssV",
  "key7": "5BUVZC94D6JevYrHzShE3ijcyezYLvQK5FFzHjx79jLufAfNV9W6xVEYZBow8y2kMQNntzPJPofiw3KjQn5VFvKs",
  "key8": "21YSkvzwdZXJZX3nkMojzVVGt3RevNBygXBbszQD6TA7Vc9mHpaQCXj8ajpkJVqSVT3bdAG6sRQ38SJDw9oaWBZH",
  "key9": "3zc4gFBroitLjviqxa8oRSXy8VxyidcWF7dRnGRdf96mDZiEveKQ9R2sqeBHBTgVjVnsPW5cLeD4ufpzUATDWM33",
  "key10": "yzcCXPXHaFC4L57cDaFkoYHGv2k82fqgtGMn8XxMjPrqMz2MQ4b1HzU4ojuStNFR1iXyeZLmnPEn6BvnqK6zTWT",
  "key11": "4RZ3EjUgPVEZNJTrDzXHrb6fTBJfTegEjNrvEtJg7WPfG1nBQuP8drio6Fa9L3Gf5nRX1t7FSU1YuyobaZveM3vy",
  "key12": "2pex35aadcNifwhmeaukNEJnaDDswoHfpK9qA1rhJCfVgEMukNc1PZtYcPog8TniuaGU4ojymqK2bXndeQAyzQWP",
  "key13": "2j61qZNQwVQT4teZEJ5x2MP2NRbhL35z1RmTmcYm2r1jkwAekNdEmxd611V34Z2S2HgbTiv3GgUxybb6DanN1noe",
  "key14": "5NTbqGppw4PqXoDeEyA1NhSi6ho89mYrcp5qEjyXnR214JM3XZzn8ALqeDxZUJCUwwTYdMYkRJJ3tNjRJERmg9Rk",
  "key15": "64Az1voNkbiHF5bfHHAxmXPUEvScfHdNWMh3qoTj2KPU1SEf5CTy5hAppCLwwy2n2UxsUBoz5rvo2Fv7vGLijVcX",
  "key16": "1NtYC4VyPph6Tu4uh5RBtMjsCwhS7bY3YqqWfKH8chBLKMrtHQMJAgG2SYMu33BFYqedr9QuT4CVLJgCPHk31E5",
  "key17": "PkY3JfhH5vYdWRb4UNEqTJ58vsh5LEnn441qhLdEpAbu6dsXK4hVu3zFLDjx4a3wk6DG662Nd38zDfojUBzzwXH",
  "key18": "umgoCtku6Jfq1ApNJTh64nWsFD3xrzWAVxCguzR5Qgz7TRKznriCc9jdZtb5p29sXqkaAdZ1He2KNcpQPc2SHjH",
  "key19": "2fd4MN8e4MnC4mg6gKV14XxJDYJfis719QPVzNjS44J4n9piZzgCk6qVj9F3z6dr7vCcoqkfzsutherDUbRRHkBQ",
  "key20": "VEbHhKPgv5WTLuqkBXQGvEMT8RLsLciXoSwnFgdZvFrdKSsyuq7mfzMt155JEQ3M8py4W6B5ppePjmVkeCqLW5T",
  "key21": "fRF86Yj3XJrSV4wq4wMeSY7xU97HvEFBgUbiHFwxMUobyCNkSWe1WwMUWCZHjEB3Pawn5odJmmqL71JSKnQeEFo",
  "key22": "4afqYHH5P5MS4vXpdoEgWpEYnhRfun7jCQpYNdPkWEsWZpJWP3N8B36aMoXPV3ajn2ZHRha6Qn8FxvtNmXSXY2zY",
  "key23": "1HbSBnComDDSpsBkhJUSA5o61vtwchBvWq4y3CmhBCHmuqxYKeGBLQNKgHkqhbjDiPtb9egCzppcELKK5VvWz7Q",
  "key24": "2wFHtFkxT5SgUwBtiUFYM6c1L7Mmr8FCUtbEb5LQ7GdNXhxSKisz5B3vQCnbBc2HVUTFp6pyQsRTqiejQKMV9WPG",
  "key25": "3MsheLQdcNFKriDQZKyHtLQtzfmZEGbBWjSNTqoSgQPictwgek9tBU9YKDUK4mm2GNN7Pp5oxgoR6VPAEQeGC3FY"
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
