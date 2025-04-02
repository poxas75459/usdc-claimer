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
    "4LH6HiSK5hs8xPMdTyA1mC1NLspN1zoWSWZUVrC4dLYkSaiW2TdsUnpeqR27ifa5J5exiuPQAmvSHGWRZNbxDfjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPhcUeRhrj2j5ePLPM666E6Tc1wyYUC2cBPZBdmuzc4CeMwmKuhEq9fFaVfPcwP6ezqLYEXaCPBWWNTY79FDUfj",
  "key1": "uMwwQXzPNQasVDjMxqnZgCYrPzXDeyT6sotWkMVbqqMXvUA9mggD2dtag4aRKTUvjzVT7UHrMUDjGxjp86BGJJX",
  "key2": "GaqoYBfjAZ5g4sncDRVfoTUuvWY7SjrAH9oDXFkNnEp2JNeHDtH77oQ6mRJUp5VUR3HWAAdHDRtywotxomK8Qyt",
  "key3": "3hgmGsHmdT6jUJuBA1WmvwJ7KPgS83AH1Jz3mPbdi1DqKWbhzKY6wwWjC1cWz7hb54qeAau5KM13JpPo1dLVRUJk",
  "key4": "5XDDvJtFdLNwyU7Rr6xnTCRQpYa2xoSRH3VAoLjGYuVurian9YBjQWe73iwBtDBbVPdBcyEZXUZzQHiYxUMYasPW",
  "key5": "1YvL3NjYzDC3drpLJ88Bz5Szwe84n79NmprHnEKxcDksKnHJR9nRdRipKLhX3HrzJgsR9qdBWhpEjTDcHBZ6kkk",
  "key6": "4v9zjLeyvhGYqFrETnW4s9GnAKrXLRNY9zxZ3dYZdNfn7Zf7Ke8SDh3jjmSimbhyt2hUzG9kmXGqymkCSVSkpXHZ",
  "key7": "3irdGdYLUgStfsm7LStXoc6s3AGknpg1fTdnuQuYX9qo8qTHPP5SmsuXnpyPyzuUZCB4yqBgonJSn5VTosktBsHY",
  "key8": "Wv65D5c7q1JKVnvAYnCLuB3AMqo9bShksybuCVv5DSpa15uVHC3LZfRN4wg4jBfZ8R8M9MUiA6iToV69ekNUFPs",
  "key9": "4TU2YyHc2o2Y23M9k6ubPZjfYiuzsMUkzp3w2h4S8L5EP1JrmbHvGWsmPWrVhao7bVoqmCrCSP7uswH2c81sZdEx",
  "key10": "5iMcXu2vEB6d8aBvcASK26ihfNm8ZkQzcWA53PGpm9i8idDebqzMCbnM3T28eaZTwFhiR7RWGmU2YM7e7tYajsQ4",
  "key11": "2dtRQXfhye7B7Rrc3RyCLQg9zoycLpcA35Ey2YzD43PXXwK5vdA3YYxuCDmEx3gYvJnSnc6Ws8KJe4wCLcMmGUpT",
  "key12": "21wsKwEzqJz1PziHcVFdBcnZvNp9piapcDh2XEHQmumAC6yYQwu8RZmeLgEkBUQUGLzJQKjWvYqhoUkhHdGCqrxE",
  "key13": "uyxmkNaeeo31XAS9FDWLwAuyjNp92cjgjHmge1azbndxJGhjT5Nf9o3sH3r6Z2LmhRyoeaaysvBqLdtmi4kQnKV",
  "key14": "5ybmGZzvYTVXg1yDsQC1G5QB7JDhiCmMD4Y3SZMfW3oi8mwmz3V74yoH5JgnVipA16pAfG994JLveT5Ae762WM9Y",
  "key15": "4HXXXaQkwNDiEiF6hGmP3gcJsNuhFN7Pk2nfQ1jWLrCacpCNeKJRzt5eunz8gDGLeJRETetASECgRFGtqszYSxAF",
  "key16": "4BGGroGwcHn5rCikz1boXCSDosbMCVGqU74SpjL3rx3yQkMUtdtXuCBJ7nXcYZJteUGaq8PyRorJQKuYLoU8hZAD",
  "key17": "2zJMfPuYUnKVXxMU2oeT1DXm3iSzNUogHCGDTwrgTYdknA8trQuuZTsmkPCdjWT3MsmAnBy6KhmV3Z6fgAFse972",
  "key18": "2tSQzQH1sQiQDyC7LKMXgHcag8UHieNQ8c1yaomUhJvyoNZTeD7KdsYaUhFD4UYpQtRuJXwNpUUCKMqTqvb5Z9W1",
  "key19": "KD23MoZpe2mw8tmkXHZgmDPqnEHKnfNXM6sTgX5uCeGoSd1RbFvQo9nynTAGKryovftzvGdsofxNE1FvpuiyCuU",
  "key20": "5WwjQ84SdpdMoj6DGCXnvgQbsP5S1S1RH3XMCVc12PsEWm99iNA65DuqBrN2YWqpW6Xcz6NCTnDgo96jBVzDHzjV",
  "key21": "25kyf1uSgEsoGfmxCutpVBsMb12hUzaNCRnWHTHerdc4kv1qJyqgcafnU3cvi3LF6kq7GtxE7At2vTP9aso6Eau4",
  "key22": "4dNGbMRMs6Xe5opB41auq53N7py5xsE81U47rqziD7w5x1x85xNsRKq1M2Yv8s4fNehJdy1bLoBVgxmpTKEY3daC",
  "key23": "2PHGgXAd7CjjvVUxH8asjJwS7KLcS2AzM1sfbdc2RL4XuaKeMMed7C6fFidmBpa9H7rHEzoBvVc7ti84eNir4Ztg",
  "key24": "2bkFHupv4NWpkCo4Eck7T1QqrG9UEPhzga3LonVLHr3x252AjVLHk46SHqPZY8ANHM2hwbTuNcHYBpJuLs1xyGYm"
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
