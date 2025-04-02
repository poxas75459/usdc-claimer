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
    "3RLZZuqfAt7zZTCph1uhhXKueAi9yw5uMUxVgLy9a6K4XxEbibCPGNWUfr5AM1fK7yxMYidwMahj6Hczxz8FJLeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2V6LWuqFcEjVWv2so9AiPDws1ZVtZhFXzkJfhqBeCht2DqUEdZkoxMGdSE4hTAwxG66J52EoFLjggJsfhx3f7Q",
  "key1": "51mpsybvhx37DTrmbT6HfmRJMksudpWQeUMbw1LJd4qo8dCHibNyM8xfbFQkwL6kfLTJauP7bkZxCExDwedZ8wUe",
  "key2": "5bKNE6jqHnfyc3T9XHWoyxsSjnhbKbo9oRKWKgYr3AQCedvVRxVLszG3dTTJJdzUJKfHB9JTtxdHEzgrD3bFKbMB",
  "key3": "3McB1CpreBHXePz8v8pPneiytw5iVxuH5P6ZDN68qDjqTaXDUNoufBHzuivJehvMVztdoL7EVB6eJ9Z7eJKGSDcN",
  "key4": "3bwsuJj9KVT2tZ2BYzKoFytgHjks4wUSXgKV8w4VKRBGS3dzwGrc8PbbacYxoHEvgor29xi8WDuCWsQwNeuqriRH",
  "key5": "4PnV3xaMazg6wJnHqE83KxtcUzQeYmDgKD9Jq64XRtA27QFbF6AQohkMJ4b2zphaUyedMQGvQq72hzugjEtfbRsH",
  "key6": "5N7ro3Zjd1PowsWALXWmcZp2U8myQDMrQ8VtB3QfxQpBc7rb98h4rqF81mwGyuBNpNKucyajBzdQ2sQdyhKrHKmE",
  "key7": "2TzFPQ5veSUA3ZwiWwupFutgcvmj9rQKCYgvxH5H598piivSE4QPd8gdGbjapAq8nHeKNZL4uJi1GrLPktDiCXNV",
  "key8": "3KG84Ka2WRsmPFRGDGUeXYt23H8epvxW5jkr4gbntm88PSrG2d4aybUq3UWmSSNVYzn2DDTpiLfWXCbtgmqwEHs5",
  "key9": "8gywXQHriuYFV5mkp8j2WVYfysiwGY2c58UoRdadeSEEsK93iB3csV3oMHLHLbFkRZccZxuoDPVrfbk2TnoKLP1",
  "key10": "3YVi5CN1ELKd4WKt799ezDAGSM8xFsxtbkLwVCxMe4XuXSzeSNgK7yyk1rB9uMAkDHJr3uA5sfuDiaZrZuuVhKsQ",
  "key11": "4MtJNn1kTJmpAe2kQ8ibKdLJMN9aqeYKFyRcfMFxC6eXqZMmkP6TRuypKVyi8cDG9x7qzHa4c3VaKdwhnwND4Krq",
  "key12": "61UMKsAgULmGgCPCwWC5RUESZkKKXwwU8JudacUafHnSvbGrDoYGRXoZDf2B1sumvSuYQnyREh3MEDrD77WYetj1",
  "key13": "3w69AAs4geMvwD2nYsMtmTxYxErZJxRsx9LKaThgRXXguKu5nWBjgWNHg7sg6fGfMbuR928UXr6aBYEk574BJKeb",
  "key14": "36bi1cUvKbx5UtQn1RRb1cQmRtQwCQXqNAUs6Gb4nG1vx9hmG34D8X1PfKBBW41YQS6k8F44dfXTRtF8a9fUEQ7Z",
  "key15": "42uNA4i3MaFhPb24hDXW2pUabqHnVt7u5PLAaL2igXHyuz27e8wjXdLhvx7R9rqh5kB5oncY1Dz4fs8wFB5w2y4q",
  "key16": "3XUFB2j4KCrVQXgAzZDutw8sUfEvFCp3eV82AJCKTh3CaLQDxzWZX8StWYHmFFZc5rQebo2hnynth2RpC3xi99A6",
  "key17": "27HAkxJeTA9vogUznXTUpoEgYvbBVNmiv5H2inCwLvtHPWrPN3htjBiEhKAnSJHN4WAyNMpobanWZvD46yN8GtTD",
  "key18": "4UbD9wZwT9jXitLZGYTddyoiK7BpecmdAeqyNvD9EpmjHBb3Xjv64T5QbQkAb7RqUGLno7hRsZ6LRFwjeSiJfcr1",
  "key19": "2VmaCaLK62aXGefgRGr9svankfPTKVpcQao5Dp2TyKMerWAXApAiAb3wSwEVLnu27yUQW3XNVM7RoZnfBm4NzFpa",
  "key20": "3bQzERBf7sQULmUeQqboDzARFHra784FED8K7WaKWeZDFYHrTGeZhDrjD6zRG7Ms4f1pLKF7Q2pKqfNLpXZDaPRt",
  "key21": "7bEQQamBkXEvpTtksrYSqHAUkZDt4PY11Hnuv1c9KvTtzKJgQ5iWMigNR8z2S1BhrPK25o2cGsvjdJWZijE9Btm",
  "key22": "5BHeJg5hMGEYaw3YL2VkvDRVA7gHUt1dJAPZ5mMZk1MGrQWW15YyvaWUpgK5GGDyWL4TM3Jj7ZX7GBAX7Sq2pDcJ",
  "key23": "37NyvKLyPWnW7TerFEw4og2idyGHtq96f4QsegvY2mQvWE8W1MgR19SboF2pcJhNMgNZKDYD3ksJhvpzFQBz31jj",
  "key24": "5bcYCBogqRiKY9aRkRtiheMJZHnoJLn2ZgxGe6FF5GTXti1WmfqMN2UT879pRBTdk4YdgWaWJrWiooR4khCv7sHX",
  "key25": "5LpP1DnZ8gPQAkfRAgA7FqYvM8M9Pm6Hbh5MPuT6JFk5Fm3UjN1utifAuHuQaQr2q4zDdoxf8w5gJSC3V2pXS6hp",
  "key26": "nTH7fhJpQ2F8PYqdNkcq2FBA1Dmwj5sNMD7UqofumYJazn55KQa43QCFFa2ybH3wgPkhHAUn8DWzscaKjJ396tm",
  "key27": "4rfGzP3dRAQigGSaPQsJiDWqS29BxnJeQkLmbs2YMW9tmti4F8szU6HpdkHoMKdJV4ggGFZJi9hSyo3hmtQpzScn",
  "key28": "2WUBpgko4UhYgGAgykHnsQEwHAtAMscXHuGhcVhVvNiZT8LaZ9iXP7CvuVGyjL47jPqJhs6xmE2oxid2MjcuptgD",
  "key29": "2dUFmL6R1PwPK5DCpKnCsHFDz2eM1pq72gB9xDj2tRbs8tNnaCDT46HN4ds2majChsuZnJtvKABRDoYkPRt8TLBG",
  "key30": "4GWXNxpoLkCE8Lcnecp7qQTdS9NH6WrN9sTMSFQDsN6R85Y1VMDteDocyPCEdsWjLM5P4kWGB5263pzYn1yJ4FuG",
  "key31": "2GKHu5FQC4fscbga8i6mGyXgpnTHLAFkk6DABwW7PBmeXWrpnUmqimTC3DaNsKn6Evx1qjfD5mRtUkMNavqn5ntk",
  "key32": "3HkqNjkXwiogqae2T1z6C4zkURkNmrGuiHRBaDWUtdMFoJCnTFBaTrfYXE4DHbiquRUr4R7tfVFzpasAgamzBjVt"
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
