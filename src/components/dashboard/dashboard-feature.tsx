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
    "2PBtXHtWHtwAdx3ScTL97bzPQ5KYbBU7aAnPJMW2jLrPaNvtRVJLDonGMSxNgpXS8zYhcNtBFaN8BG94wFCYoAMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kW9MPPKRBfkSYTd3x3wFJtxEoTDAb8PnRykRu8PBaqyHHwnSRYiMhowTuDtZ2XxwN39aiQJKKE8phMz8uZ2QoNe",
  "key1": "28z19wepTo2h74FTrxY7McYBZt3JVW85oC7UwuHQH6gfER1scdGrCmwVmGGqE1QUYnquxRaUL4sZGzbWAYd4b9PX",
  "key2": "5N7kmtB86D4ZLdEjn9ydxMQpTJhaFLcPMsNdANKPjgTAFLg4LR5F7vLNngoe8M6jM3mcxULyCXHdJ3J1Zazao38o",
  "key3": "3AjPeoxbQohUXRmtVQ18cQtj9h8dfpcJpKGYFxY2dsMmPUetoER8GnTTQ2km7zRiXUe2isUm2rw2s3WQatFkemdT",
  "key4": "2ELn91X4zzi39uj1mSWVaXX1yevynH6tACp1678BxSNmbW5nWW68SYSUdbjkqTXA9C66HeDtyHhhDewvaiLna9F1",
  "key5": "3uXzvJ4rzQpm7iQFX3TM4jw7AjYwCv4tApzmxxVr4BRYhjvkvfivMXJdqBTdHggcRFActvWsSmiomrXQDZR3dsBu",
  "key6": "4ur3HSq263kbZxBvzZYsuM1gQbLpPC51xoJCJtv8iwZ5D9cQpWHHBpDK56fzQqyuTxRFE3wXfYnnj1bU87nqJzaR",
  "key7": "21wxHsJJR6kSf69pbza1Fog62M28tWXJ3xKn9MScab5LjeYxwMuH4oLeQJhDBBz6XYbrH5u52comPdd2uAcMPJTs",
  "key8": "4FFK9dSdsgGmTNKWxpAXM55Ucm3xWDcV6pyFBegPkFwCyT8vrrwHY36azJqhAQx32dJUqvznaQWF2TD5CLKkJAMc",
  "key9": "431oB4FWVwpYAxzvsjxtivQonchtHAjot5gwDHsfFr45ACEmYxYEKBVbe2ejrBFpBFzrY2B4iMd1VHsJ4VEbDD2Z",
  "key10": "4EtnYUFvKUmytARHCviHnipf3fBA32d4niF8GV6MLkSDhkpQwk5PEFFLq68H2LF2dUGmQZfLEJEURSxhfMWcvk8p",
  "key11": "4MPCnVVDqHLuNDvYMKn3ywARVxm6AcHifnP6GxPv8qYBEWF3fKho953PjuLVoKY2UUA8VWfEaVFQvafbjDE2jrNf",
  "key12": "5kCSfCcJ9vN6EGY1SNkqCfa6fnLiM5Ec5TNFTkzvkH4jJSPovHXmYMWZSUJ62fWV3yqL1q6ynHKTY4x5FKEXNkWa",
  "key13": "4jpaUj9pbbfcSqdGGv6dTFJRw7nBwvkSNnznj6ki95LnN4524ygCMbLS528MWVgxDQi1q4V8PEHXKWXBYLTnbSnv",
  "key14": "3X4nLnNAiHvEkwEVrZNwdCGGueN3t4NNYUCPQzs9YGjinEkyJt2KFgjMpBaQomuEgxJUz57mV2c39cKXgaCvTxt",
  "key15": "33RvsPzGHHbTKoQ2tAZ8BKHgq2NMQrBouT81DMiBShBpkoNtjWz1ZgpR1gYvshA2RqNBzCUnGA4bxJWd2A2SBqaP",
  "key16": "YgGfsChVcTy8iuZ36872oZefhswif75RgtWrMusMr4dGoe93SSbot3dyRRqVkX5ksuPJY14EDuTrQUNvZbP6HKe",
  "key17": "UwyxrNSacPMXu6sMo8tkHwYEyDNnfRtQoQZgdBEufL2qDb7oaSjQAeVix3YYaLmxbagDSKqVRMHhWaYyHBJ8mMi",
  "key18": "4tu4gyHWd5o5MTsnhbGc9ThJj4jzV4BjFcfDrmML9DNerXPdUq4XGXCu6B4CxjAjon4693c8SvdFZdS4f7KphsLT",
  "key19": "2P3o6UvEetmRMMcDVRAdWMR9w61fzTjM2h4G67cCnJrY1Ek8cMHQHpCTwgw7x9yUVfUYkgw9bwo2dbN1efvdRnu1",
  "key20": "3QFH2uNv9w9D7r3omabLc9481RzAn4s4sLPnB6FawjgvYMmgD2k3e4CLYirgUP49NHJ6FB6FXatZnrrRXMnokS82",
  "key21": "4XLpshkRqRkQsghSc6LRuPpuPwemnXtqXNi5PToa1NGWwhyANpgkZGJC66fiZhU8ydDdMwRS4q22nuQxPy2BZwPL",
  "key22": "32g3xHzAvN9ynkt8Lis4YGAZfStvixApxCx87yKR92WcvqxmSzzN5TS52KC8aAdDA8x1ZoZVkhSuhdCWMgjFz34Y",
  "key23": "4Gf1fGaDgRvLEsiYoM3WcjWDhDruuWdbGyUvRtrEywn1i4iXtVHvrUrSNMww3AETnJ6TLN1aDj1x955HpKniPmaj",
  "key24": "2PHBk4UzRtDH8rc95mGeY6VcUtKVuALfawu6tfESWDMbCzdefYE1djCUmNUDY8d5Z3mvDXfQ8mhDhc6ZavCpEkAX"
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
