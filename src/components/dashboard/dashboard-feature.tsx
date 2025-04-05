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
    "3Eo2dZ6YUf79Y7rD1NQD6RhrxG8XGK8f5oDPzncdCBrsrDk7HihWt64xjyyfmHbM2nTxDBkFdoYHTm7j8pNEND8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314JpKYSKePdr5EnntgzTFgGvkv7FZDPGvYietQ5FfcxRdFJ18t3ERBnbu4ww6ehr85Wmtwi5grKvGyHjeQWeuCw",
  "key1": "5wmvjg5wXRLJAu7QnrUorGgbaDVVftRpupYzV2o2fmuPsh3XB4GLjMGuZJPCchzRS6ta3NE4Pu3LGNQiZzd9GkkN",
  "key2": "2ji5jgXSYuLvTTJfRFawpgruvHcSCaNnjwUDNQxJ4S6yqJupHwKMzZd61k1ZGQZG6YPz2g4KT8pgdPDEetLGqxVn",
  "key3": "2GwLcaNyxJURGNYiiGq8aEWiQcDmdvjdKxKAGaZTNdwqbv5MwWV4KLsAqYz2gfhi7xW6d7AdAZkZHouVFswDMA36",
  "key4": "9xiStaaLreTZBQS4PiiqGj2zt8oM9egXUPP7QJNhgebvWsPKoLj2SQuUipmbgn3Q4omBoUMWKS2vPUkntuy6rTR",
  "key5": "3GszXWRRPSQF7yE7cVEdUNKX2GWk4iYFQ8nQvHG2TKsBx4ei2S3vQmZBAfN6XVUDzLr9wzRy8acjbGS5bhTNiKxx",
  "key6": "4AzUFFmGL3XswvYtTpSaKg4u7xqz13htXk9zJR2itQYDk736K5kDHgFAu55mzNrqqDvg8Wh2pe8RkzMaWWKm1RLe",
  "key7": "EsxRJWfLetum3LVoL3ExrZNkr4AhzPFYsnLDtRWqAqHiEYSyEoTrg55ZiQB63mVcZjwUjz3a7VHR2KKfGYv9jDF",
  "key8": "4kv69HgeknTQxK9uGf8mgcWRJoK5zJKRVwG5HmFXNLkapnfG6CmAzhUStaFG1eTeiee7SLmZAF96sFv6Lnv9qV6T",
  "key9": "3FiJNvjAaoHbHq2Ki5hFA8x2nmHAs3bBUKBwHdPXRWttKCytYggUe7ujh25K1ctDsh4rXhwZh38q1H3RBqfr5iD",
  "key10": "3gqCqTxgMuvRnVLjemQVm1Q8et5Jv7groExXS6ZQFH4dRAhp7cBFkYJnjmMvqWeb2tbc9HBBLVK8pMW2mftbf1ov",
  "key11": "3ZnJ3jbHJcKFBkggv75La79KRzbW2SDseJWrqbKWnF8nsqhxtqTMkG4w6yEwEKP5igeMuzCaoEJ3RoHwmC266Z4d",
  "key12": "38AXYEM2RbWJNKHbmB7dWHdZYWoZHQPn3snN5hv3ZGhjzx9Gp3EqremjbRifvAQyQiK9yDM75dXHTeFGNbw2iyoX",
  "key13": "2twAjGPULXq7dbdrYEcXauVkoZPYJpgDyApw9vVX4e6ZFs2wg5z8nSCyPUrvyWaseya9SC5HBDF7q5pZRdrrTAU5",
  "key14": "3RZZ7vwrVmXdzaTcLCUx3f29gWmbNtRHWBPnsHRUTtVGykxm5xNb9tjQaRJqoFwuziPnJi2kSa8Gpzq8owgDaiLC",
  "key15": "5cHAUNtAN1hvdJqBw5xh2W9BTusYByCUEuUiv4kX3zfTrAzrFRyKzwffS1V3e6iRvCHJajJBRSEsMTMTHPxzmUb8",
  "key16": "4oXSQLSjpiDXyTmEZwSK1LGKSQmLba8oUxhycMLTYh8DPDZWx1hedfTnjtBRrJwHEuQ3nVT2b8fgwmc6Zbzfi8fZ",
  "key17": "JJd5PeMZ7hV69neoPKgDyxmkJnQqAxKuhXEBxNr6GvnWQEaRpDpw3bZqQyxVVc8U59CAhZ67Lbn1QdyevFMcyVE",
  "key18": "2NVvu7RcBGTtwt8WM6CXPN4xrHEzoyKeo47hdQbRg3gVpQL5f3aRDJyE2THBZZhwbS1NsNYVRi7Db8mirmV5AWv1",
  "key19": "2ogLmuEXXepgdz12fN6h8xmi18oJNsdsKKfqoDHHn9i2RJnemhg1BPBGiw3Hz2MYNDnyUJXQxscyzG7vJtHbn9TS",
  "key20": "2nY4E9SZr4wwGpjXL3tEjDDunXSFwHgRCCtpTSvsyW8TNBesCtntyFKUREFxRfmgb2Tqu2UBWLyt3GJt5fhjdWAG",
  "key21": "5h62tnLL9Ecnnr32RMg9LqS2TS2x3qtinpSkTf4JasXqBFWjzWbKUGjanxykTfKqsvzZipQL9FigAA5SAbnAxFHH",
  "key22": "3NgNBcyKvmpuzn29CXpPne44YuH76P5sE463jVsavFtBipvTnTmBTL2XggqS5Ho2CBmjGucTveULz5fYgyUpu1Jz",
  "key23": "4U7kbTr1hkBAg1QhscEnWac6fMscc237wKAuMiXi5GPGQvf4ef3qd1VX1u3i7YtSYhR26CBPKNEoSvHXDFhSDZTP",
  "key24": "3SBBQ7M84JXHrJ5zQqmvMxTLPx2wpJtBMPXtjQiDFhAQSP99cZFpaNBA5ucbrqZW6SojWtBstGoPrcCpYNLuFzD2",
  "key25": "2h7oKVo3oZ4ZsMvAw7s5b4t4XSb8HjTKdjRAcoG3prAt6VoxwrM7j9yvdaAAdLWsFC9x9DKhdainrNLbqmAdKmTA",
  "key26": "48QXJUuzMyB7rq2oiKReYitebQjvYn9dn79ZSCSPbmhufrQ7QvkiczsamU6w7XQ6ypUvNsq5J54Kicrk6kmdYjT7",
  "key27": "2PYuhg8wxQ2xDhpYzXJxph9vwomNwbi19NLdhdAkh6hXEAKk8ypdp9uarq7ugPPVBQn4SrvutYwQkQqmXKfTAMzn",
  "key28": "2GPSqRrPd3rnv7yYivaepGxMyiSAjC2QDQQ5Gyy3ULCa9SwpcysokFWAznssimqaSTGaQN2MBy3qDjqvEXiwJSvb"
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
