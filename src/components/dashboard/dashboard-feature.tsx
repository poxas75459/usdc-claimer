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
    "52Kg2gBP2YkzjgYc81Ky51FQQ2T6JstKy5BQWzdbvRhpRvEzSR36gtQrUjek3bjxC9Ck14invnASzCbWCv8x8fby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e666gkCGYDbB2UmNWcyqBCjuzXJswYH7xtEGFf44XyRF7gx7AGxpFm6kTV9UKMFdXAixcb5vk6TyjVfbGZnv4Ju",
  "key1": "4BV3mzR6D92g7JztwkgoMZrQ3mdgSJjEFrtH6bx1idsHJi4dAtMWHMfabhq8S4tPTjiwj4TPR1CTgoUVRAMqvx25",
  "key2": "3uSUJD4LmqHEid3hFVXmEecEhWkLoFHTy9w6CFgPnAz85Tbi2pP76SnLPUEHd847yZS9YEv7u2gGD5LZRDKbSa5c",
  "key3": "5PnbTjgMTsmRhnuFqN5PbwSaWidmzwxt6Guj34aqpjXHAp1XPDGFmnxUEAQUyrv6RmtEBq5rAF1aGxQQTDXH1CJ9",
  "key4": "3HLrf2gZGEXUMHyWmV6wskqd1QM7WRjU5hopFfykj3ExoL48fQZaTw2rVuApPfy13h7nttmkwVebP16x5ThKdHch",
  "key5": "5YY1somA5NbYc4tiqoiNTRc4p3imyt8EcMMrqLNd52kpRvrHLXzrWWkDJEJrb4vwYXonZWyddiMKufvJ9R4FCrwH",
  "key6": "3pSkRM9dSmHyJeWbMueVirPHy87NCzdP2sM9Sci1oSfpvc8m2oieYVgZ754b2JeiqZzqaSzdmNUU5TxRYiNLRVCU",
  "key7": "45bLzNk3p4htJpoK7bvhUPG6KNKbTqMs797oBQMaFPtXUWZnxhRMfCpcqY2qufU3U4eJuFaC8xBbQZnzBTsfJ5g6",
  "key8": "2zBCaSqBubw8peW8YVEE1zfC1dCWZ5svrx1Wgrvu6z48BZYrUDbPi4VYhLrW9LDd2G27foCNgjty16And8XCjV2z",
  "key9": "4b6wjjcJoUjiLty7df3QxTapAMup5s5u3gfAQpNc7dZT4rnAK9WWTzbPRWRxZsJ174UVwmQ9jTdq7toqVaUbFHux",
  "key10": "65Ma9HfkeP8xBQkDPmnfJas5ZxNjHmW61kEMYiw63hmgbhFH5k6rYDEozSTHg3RW5Xk3KDhnK6eNg65PRZDJjC7m",
  "key11": "AiXpeixYxAbBiCskLE2YKZ5usysWHBhXCzP9wprPBcpuykTXmytqrwwArmkJyhp14qvFcCcHosQx3rcP5t5VNki",
  "key12": "2Wvk86jBqAxKf9nUK3zjybviK54jCyW3SgcwHw9BHQMZoCMeEEiaza26DxYB61CoyvzRdpsgDDc6qux4oPCrz8nd",
  "key13": "2CHPsPc8vFp8bAMV4ofYRGKnbjHTJbYru9UEH4ciUcYnNSCP3yHNWtotxFcTVqBWeoXYV2zCa39aYUjMddkNeu8E",
  "key14": "Wyo3z1NCB2Q7Fseq41BHbm6JeYwrPhrhw27uUFQvQThevLgD7xeyzbYcm8kVv7VXmXGhYdq9nfEdzrRk8msDMcM",
  "key15": "4pM613ohmh34VkiQHfzdLoG4SG3mVN75LZKYmgVhsrbH1ifymPqfck1URGpusXaF76sGDMCUKFD9CXx9ft8LCfAG",
  "key16": "2UgVCH4XPSqmHzu36quY8jXPbDDDQp9ozTmfWo1ZnVpvomJbKuZ6oF9uqpAv2ZLnbEuKrSXrad5rWLKpvYfc2g3T",
  "key17": "HT13CUq8gXsAUqLv5TS4fXPSr71phZZQpFvSXKqNqbY7ooxq881Jcba3XtmySs7QAZL5Y2PyoD4eSeNKrn4bPSr",
  "key18": "yrv2N9MbFbnN9Bm4i91saSWMmfchsC3Lner7TMob6q8jTunyv5QJATLfar1REmMpreMxXzCzHoRcJHaxRbcqPmM",
  "key19": "242tkUQT8fx7BJyLSuyE84fJFQp6ER3aeUBvA299puTAsCzScFFUQsX1W22rYmipBZNcx1xJsvhevxwwKynSH5t1",
  "key20": "4NgYFJRLu3s6PKTLXu6eH6EgPSeMe4aSyVDWjAjX2kDnFbURCCgcg7EVwbcgw7r6Tj3FopjPNNMmpCQDvmsptgAD",
  "key21": "zK9jQh3yynNz4k3b9Gp8izXajFXoNq9345KJqT7PGoKMrqZdmutv7m63zPAWH26NtKRmSoM8jnSukPQBUpEf3Ft",
  "key22": "5CYdbY3a92fv6x8ThZhfmMPMrggk6oNDHPmQuvz4vhVc8Nq5NaCH4jNoKmWkGLTJ37Vkp4YAJPJFFyApGobTJWnb",
  "key23": "4VuoAQuUDATTPFhTSBkgbdPLMLGnd2rTAokrW6ReQRE3jeFd21UpWjHNpN9xkBSu2CSADEq43N5f2rAUybLoB7Ns",
  "key24": "5t8xQAzhE8MHzQDwxp4QqGwJXa3HYTGCk2szV5DyMgj5Vayqf6y9gpg61DtKub6kf7tdp11zGzoPa9YMSUhJTmPY",
  "key25": "24biMBF8csng9X48W6TTihdxtMKisd76AxVBEPDgjsq4hH4Cx89ngi1CuXT8Kk51jxEVPRcsJ1Ru9T5emdkoHgEW",
  "key26": "4MS67L1HrDysp9GRh71wyEjh6xqX7XL8ohkgxZ4LnM112zJfQ8dcYfjLEtN8eA4NxxLvWPbKXeqEnqSq3EUD6VeJ",
  "key27": "3ufEeDFSyaiiWKrbagpCPf1beZwsnSTpWyxrE7uAmmrdVbab3Q8CpJexQp8LkggrxpfoFWLxsoYB19uDH3CUf9qs",
  "key28": "61ZL129u2P8CnKC5Cbe9hCUudHP2tpDBxh52EXog18eSmHHstM4TugmcTXR3uUbJBWPtunQenVC1Pxw1wDZ2fRQh",
  "key29": "5T9Kbxgx2Suyn1qqanuaPWpqzEYKjMa93z1syoHt946XSM4aRvBMQfYidwvCNBD4zVEo9pRYvxfQaSGCAsXQG9aK",
  "key30": "qSTgnH2NKJHNwEcxoRCoSbZqSn7T4i4qAvSYNgiSodq4jcBeHNgHJPy7oFoVjoNGSj2BN8JXFGRoUEcRVi2Vu6w",
  "key31": "k5Jjtzfogw5UJfgZTYJGngA1e1QgaquueoSzWFD8kV1Fa7LBpMDEc4fikGve1KnJebcYJrjYoMrJcX1eVnaqqxW",
  "key32": "3SyY3KP7vgqRaY8iXwW4Q8RYSaLu7fHbnnSNFLazemE4KPoDLcBehjBGEgHtVUdsLCAGoWDYxGD7m8g3Rgxoxyu2",
  "key33": "4Ck6pfxS653rdCJtMiT8xedvfWCsnjKnQKaBmtcySPFM87zsPL9FnXQDetBmqLd9AqiceaWLB44yuPZs4Bg3Fujf",
  "key34": "2krPY2W9xG6CmnTSQE5YPgoc8wwyWZraYLduUqvk5UX9rNP5sY9xzZfUcsZ4kfduAxP1R89xnvwf43GgegrLdonr",
  "key35": "4PK2Ygw8rQGYYqTDsFpdByLNKfjw4sVFUd8PdPa3ei2NW9qBHbrZFkDuBdeDypxQCQjeeNweezK8VQKLafBdwP9q",
  "key36": "4UAFoyjXF7UkdMMZSgWmvdGUDdyJV8Xz1AM9t14p53uJg6dPFQwnK5ihVMv3ufBMuFkouVEcsHKdiZwbMFHjtw4F"
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
