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
    "2gBeBQ6Xnqq9pKvAiRUAtpDztbFc4cTZeeMzcfH2UVnBGfe11xKvATVjEoyhDsCGoFitUcAhrRNZcwYTJucxz2n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rAzKcCinn7WRoPHquk72CT3DxFVqmm8My7t65w5iPpa24qcYGjo4CxNWfWzD1Np53wFivU9tVg7C1J3AF48Dcx",
  "key1": "4JuDhFXYXWffirwEPzrcBrZF7NCTrargdShyVjAGrHoWCE8iTxzjAsrQ5CS4ZLFHTWpjF8fGSdwN4ynUzMqYVs8z",
  "key2": "2FpK97H2BzzedbpDCsPcn4oiPm8ZT2dZGuWaoPZCCR4pvDbsYYCW1nsFfuHHjaPbMtdsJvv2dXzzsaFcjyMKzkaS",
  "key3": "5EZmwGQAW9DdwyZDpL1gY6hLPxbgVfLMYnLxFqwAmqj6iE8fD3ttrUZHcsUqLsrZrQiez4p5EMcgmxY9WDf4dExD",
  "key4": "44GgcxUSKKwooeZFXbHNo93VNnsC4LsHZLeb4ftQGpo6YJQiJceBSJgYyxY9xH8mdxyLCAZwAZKRcUG5zRQjm9ga",
  "key5": "HiBwPZUTxC83RudXQpwsQgxyX1hUJneGqFWSWmFRpWMB3PBytQFueni7P6jBBZzvmvD1C53mj4YatACoPCXjtcC",
  "key6": "yB3iSjvMhWALivi33droYse3G17F6TDuvb4bhyip5otvJ7jPg6oq1AUYR6tBPCRQzarJ3eRW6tDCFmhM2V3KiMi",
  "key7": "3triSWDsHnx1PZe59yM6naXMBssXqCBEpnLR9egYL8ngdsFh2KyKdUYYyfz2SPMsApXo8mftxe9hg1YkPqUPBCip",
  "key8": "3ej1bKzGeUbJGp4YKUFNMn784o1JWAJK1xTTLMkMHoDHkeBzpXH4KuA9zeXeX1KV5TmPDn3FjCZurqmR4yFLSemJ",
  "key9": "5yqUe2GrChn6fdy8xdAXygPJxS1MZSA8teBKbUtgVNskHa7VYevWw186mngoGWRbfmhxTxuc4L7MXyb16SQ9fGR6",
  "key10": "123EvDjAYgyNroLpNyzrMyG9wQ52tzLD79hLmNCGLFZ4ZCzPtbEoRLshzX7eG1AJ5zecvAU8yjtyTbpuaAp3NGoc",
  "key11": "321U7RgydEkNtUFjWm5qEJR6V1Rh9U84fuEcBWAj6CJLMA8nBuCPtohcWsVVYKAFXwF9ySsg2WkURCbvpcYFqEGU",
  "key12": "4GmCdtYMV49T7LBHVyeiRq3TB4U4ZthPUK6VNTDmvgnKbbFtJb7Kz1eYD6meBQLDLCCtmY9vt2Fp4vJW9KsFnuCt",
  "key13": "3zTh4QndqbB5SsYGrhzVuSJNjMZz8ZsmpzW7ws56RWKLkXZJ43WxUiuz7xSmHnncDDTwdF5f8q7egnPSSn8DVNmq",
  "key14": "47wfqStgJnTLNxftkFDVwj2jQbCk1NYButGVro7ayxAjXWAv5t8hiPULQevRkkAQEYW3eQwqkdJ5qKgn2NP8uNrg",
  "key15": "AHWycTRzXN4fTxaGSt5a4FgFuQrsC4bSMJ18bfU1p1GL68B7Qd17LJd34BJvFSxQdcSAPXVU48dVagGNApnMcJG",
  "key16": "4MZ4YaN2R4FS6h6YzRJnZymxbsaFgenx58yHcc4VrZD2Lz6GUm6icvvxsHz63diFA4qZPyDAZu3RW1HBDZ5wTEKP",
  "key17": "3bQ6hRJJUATDA9GNzHjTQ1D4zSXYPZwC8TrjKYi2NcMDMp7iYL7Yr6BTmgxfJwZ4cwvu4Gj2ccekxd6oNmdyoVuZ",
  "key18": "3wEPfd5dJjKTxnXNXb2LHTc37Sc3f8AEjHuHYbRTYeaHimGxeqxs81V3ytJnbZb7z3y3GVQnB5ntAExzQUL6jmbJ",
  "key19": "pjJ8SH5ckRY85thVNtiwgnCw7uNRMduRdLgZvWSSDKeFfde3gU38NJzHmJ1hBRShcbzPZiBKFtNGiDDU7iKiu7E",
  "key20": "4q4tE3SmztXQiMRy8qb7b2yh6j154T6Pq6cKVokh1JhbQWSjJu6wf4GVxTUkrc41doUFgkv6b6aNomPWr6cobvcX",
  "key21": "3mc6zsVsNdztk2oocvZqimYTsbPuxkky9Yn8ALjNCzXfCznZpo8QqAe6BTR6QREhggKfFKy9DEt62mWXuS8SuHFz",
  "key22": "4bZnH5BW6nAJDUvoPpJ7goakGahBU8F7QTAmA8jmLtzaDc7CGRcTs4655eUPF8CNLM4LNMBpdNFtZNZfdRGbFNse",
  "key23": "3D1g4dBAmDKAgMAuZJKb576JW3iQCo4HmM1Goh4Em2GifRnFuvPQsFkM4HDtPyWxmTpba2gMKGMcz54rF4JKwqS7",
  "key24": "nit1NezEKhY9EUphWxRsWJxFuNufmjJg55C57yyFwLTnzCtPq6qM4RSYRu4ZH19epywAFbtwu4oPfnt627xRSvh",
  "key25": "588cybLCew4GBqE8jbwtqNTzWbZzCPKUJ9ex5ja5fjNFHuZC5WYV3iZma7eMPMLJCB8MFzm2pV4cRtuz1mcw256X",
  "key26": "23zkYjPrBZVEUZLoJtyYu5xgyRw55UDYXCHuBmUrsK7Xj8t5YNPNyHHoEGP9qikGVrVp8AadcS6L7C84eQsJn227",
  "key27": "3i3yYLvyPXHEgQFrwpjC2GSfMH5rPhYz4AfKpKfVM8Yxjxuw3c2586FpeJpFbPw4fADxzA6vEeQd82KgKAdH3UnQ"
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
