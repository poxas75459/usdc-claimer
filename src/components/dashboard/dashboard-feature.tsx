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
    "LAty5nwwnfXKs7c4nWULyHcQGSVyirsSKADrGUvrmN9yAwT8W61PepqzjakDkjXtsfXAAbtAb8uSTQ1mSuoPVfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3beBJajPsSUghvFRD4ZTKKKnZxK86FHS9ad6dux6tApNJNYgjdsw3xBxv4TV4iLmGmijG9d3irT1SHsYVRbxWcSa",
  "key1": "3sUHuhZis5up1boZe1YSUzbEmosHHujexo3mtueqdf79NThWERovUgp7e9b4MfurNZ5jnR9vecSmNsYRaxmzGoD3",
  "key2": "AAp3KpyJz8xZoXhK3nBSuZPj3vLY6nFUo3q1s8rxRcrJPYeMZdtGfjczHpkX4ErLLnQmDogufVrheTuvViYA1w9",
  "key3": "3sQ26VdNC5T6TSsj2AaTv4A3sGSM4ofQcf8V5QGzLFbd2Ngy2ZH4PUwVUFc1WWWci7bYyNzKTpRNNyBWZMiguQcf",
  "key4": "EPpWJ389dr331LwLFeQZdz3fp62caDnXKU1bpZcPra4qN79juYEyv3SHg8UdgQ2PVJex4cZcPWHHxtkawWDHVVP",
  "key5": "mboB1vqJ3ecCpgiJwhVDLxeEkrTZJ7LfRx5UQ6gQsCSseBhzJmc4NgAqaf64CMY8m7Zmo3yq8jKgmYEFX5y2be4",
  "key6": "4p6ic7rxNRi1x8casoUumBKBSMjgZdzpvE9bbnhaGYfnnNKhFGZHswqp1pgpKLrJhVSD2FX1JufgQysKFXkKGTFP",
  "key7": "4F87xpDzYQa3kx1JhDCmja57nRvjaMcXeFKXrQ3khakrjtyvagnyfpvtQzUZyV6VGCgAdjiAW23nZPUtpKe5gVyq",
  "key8": "59nQjQ3tFZ1NBEBHV6gN7RTj8HJFc6KvqEu5SXXvDuAqhFmiAC4MafG5Mo9rcrWAnm4Edbs52DMPou68HiG29ew9",
  "key9": "4fU4Afr148Nuk1A3AY1WkY5fmQafJrUJCJvX2oZz4BcKqeutZQn7ovaALLZ3yzWCdGMgcx6W3hsG76Du5guatis4",
  "key10": "3S6srjCWnmm2WyviDPSNE3z4E4NsGKkob2ZU2z6gwH6johoLBT9nL6fzLiV6ALqwz72b1JPYgNAPJnECmNc56xLP",
  "key11": "5HZi38mNfLza4TxoFBTF74z4z5aZYU2G6AWvQotCaz3JzLqrksy4HGSRDdLWrYzRjB1GbCVDzf9TnypXwdT99iT6",
  "key12": "3MdgWisPDfEppdEH8BDXTiQjhsLZtZkFizPGXbvNVYpt55wGTqXSHSrtnQN9dF2g7xu3qMakRvEXzNTsNjLsigG7",
  "key13": "4reX1TbCSa93BC1oD2tJoL2sY2E5GFZM8cKxoW6VuAvrs6CqTEAVS2mizJU6xHUxJMYYF4CTNi2qN6Dfte7QAVho",
  "key14": "2XME1P5wiMXKHpGfbBwd9MGp3hftsRzMf3XvZahMmNYvaWgdHyjuJvbvJJzdkr5jcMhWJSR8hBy951nijxb3WRES",
  "key15": "5UTvQywaZWReNtmfWqrJrXs4JEn81n4uZG7AG36GzqgPNwNFmeTvp1nysm4wut8PGyMMoJnjEH6q27FKd8EBJfSy",
  "key16": "2tcWpRihNDCvnXRQ1zodTS2gTLGDGebZyjKzzaq2JzHwZUpU5AxFjccJVBdcPt4mHbw7QutDiVhX8YnqpiTsV1qa",
  "key17": "26hXc1M9NFqqqdvQYWREC4dFGHmDWL8t36oLqsTHeZGsUcMfq83npm5rAhmfh5hb1cQ8ts2J5x7PsjTmSXtaogiX",
  "key18": "5L4xuXGRijb7o258833pEiThDzha9hdLc46ryKgpZsT6pqzN4gt8JYMdScxpYyqKmqmaNeh3sJ8cxqgf8PMX6iJP",
  "key19": "X96EbJMTLfxfxzg4sDrSzsomhYMS86FM1RviUogHcnrDec1CbUhFwSJVPxSE2ub47MCgy1TxcHw5uf4q1z1JFcE",
  "key20": "AgT2h2Kt8Sk8rYmnWh7coDRmknfo2rFJonQTf5NYxRgouK8tEZDaC8qeXWrDatPvkC1D8LaG1Aa2EzZ1Akv6Zuy",
  "key21": "5NmuGtPeSTGCHbM7aKswVmXj5MuStXjhgWwjXuedja3BUpA92CQtxWirGrGi56RuYYxQBnqXuetEMRH44kfRrefP",
  "key22": "2L8T1QiYyAgqT7tmFo5pF2q3Wjoxt2jJ5Nwq3yPu3UjRXsMaLstmiMgv3iAUDnbdgnKWTNvQQ5rutdx433VTFghD",
  "key23": "3XuxJ3BLiiN39JDcadgC4MCqgXHBnPQizioP3yuN3qUukcVdjeUyDNs1ARUetVDkSHQec3YvGEPGycq7KePbbtYW",
  "key24": "2UiJmxQciK2nKRhA22TTSkLFQ1Fffgvx6oBWvWc1nbuXMTwKB8zybqq7PJWnEdhWwVAJvo4Y3KDdq459HHbijRNe"
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
