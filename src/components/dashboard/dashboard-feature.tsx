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
    "5u5Qoq9gum8rKovhpBg9vUitDD1E496hd3tscmL3GyTGLkArR2fUHj5NnVkQ8SXqgrZRMdL9kjfyK71xVxDbhPhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XgR4Dvu7NYmS69YLCCBTsnoXvwFs8xa1sJM9qF6kwQFnL1thwY9AUcLv6AF7sc6UuxubUSdcNHkagRrCaF6tLV5",
  "key1": "2cVyNX1ZwoCds1G9dGR8DnHNsYCau9iUxc2gtLjLDkY78ds9KvyepWgj4985TLVFPcLfa2SWG3kVP9HJAVABaRHv",
  "key2": "4cSxqRYGQnKHYuVxkmsqFkEPnvdn7C6y5sdAkY1nBBvjX1y99n3KWmpHveC1wM6SPTWkq5rpvyLnkEcPgpAtTutn",
  "key3": "4xMEQLztCArpJFC3eyMgeWzhSJa7eR8aq5wp5cFwWo41XWHb6aZ9YmZNbD67MpWCvHk114gtbcaA1CFWVSgMXmAb",
  "key4": "2vn3A8s81gVMPBonyigz6Rw1NovxFRzaebN3bRCM563kpUsvsfEPTCZ4TwnMaDsC73p8ANiojNa1VBksd5Kw2nPJ",
  "key5": "3PdEJB9drgMkX5bkASGA42pUybYv3HzxHHy94cck8VCvNiZQpXfMBaFKBhFXDLPqt5gZox84FkaQWcXyjSbq1GmR",
  "key6": "4kiZ9ck6X5tn5MWB9GTFWum7ACCiTpuCcUo7t1D4k936ZZm9wR3gnQ8gEyz7vh7aDWJRYsZSam6N6WeELxfkKgpi",
  "key7": "3aeFKZ6rALgPcBb1cKEQDJamkMHSX9Mm1Azy77EUYofXzRdbQPCW6W6sfr3uVV1En6PAbhT7DNtc5Ez7q9TRvufR",
  "key8": "JdXtvxqu4qJ3Z6pduBJMiaedZPomNd4HSnVmUGYPa5PyHn2NwvwnTVdHg6LMB5TQdR4oeEqkY1VQ3AArfVBxvyX",
  "key9": "JXznWkTZRLwEqxVuBKnh4asuNseG6NPv5YXXY427A79fUutG6Ge67x9hMTyBwKz4CJ7Hme9krZjpGn7q65HqccR",
  "key10": "3dYB5CEeKqiJLJ6mq1wjaAzxXubEgPh4wnEXPRVRn5L3smhikeCLePPwRQxyBQ44YwMKoDvG6ChRYopP7staqz6b",
  "key11": "367DYjoUHLE2U2o8ztizSWUt6uxUU2mbXxbuaREGArwexz5kaeGKgjfEgBGeFkqryYy6XmEbjUWhCsW31CSSqaPk",
  "key12": "3FW9gT4HjczPyA8yXxQAD3AXq9mrhdc8ercaKbVo9qF9wXaicb5THrVnRy1wsGGte4fQ6Vrg4T8Nu9mpR5asQNzY",
  "key13": "ZMkn6JbzVa7QpWnybcWDFGjsYfmeHbUpxQK1GxLWLuFwSRUmYKUCfCDhWQvVHHkzpoiDpZira2oE8THbZpoMHaK",
  "key14": "5pxEVHtvvasKjRWuLrirGrxbSrrdguRZgCdZsWPkrWCJ3BBwQgexgJvmBaon5jt3HZmu5dFwCgWW9iXYAKrGs4aJ",
  "key15": "2DqXvjgJovZeEipv3aEefNLZJbwzbcDHHrmCzdEaoeZXMwYsyAwfv76mWFUFfjkBRyzEPkCp1werVKTFnghT67F1",
  "key16": "3y9qh7B9n9KAqweYHs8qRDL8siBqpGMPS2Qys5ZZNo7UU2uXAHtjQedXU2zju9gb3pdX3v27dSXyASnAEBzNByzj",
  "key17": "5hmSg7sV2u3UgYjNkGyh1RwYGupXjsYMakMRM5evD3S7Da51CdumA1UxYWJnhQ3RKwfQH24BrvHzbs5snxpzRVQ7",
  "key18": "o1AihbtotSLLwg1SwTn2e3uDNvg6kLGbUj3EWwPXxmQCwY2kMNa235RoYgCFc6SYPmeiR91pVbG9omPWm93xrgC",
  "key19": "3yhhdQ3i7eBmE9iibZmNWPxhnP9E4vfb7xtpRAyFC3bZaTCC7RUHZaNnqWueg7YvGeGnkxkQekMhiKS1gbAZE27u",
  "key20": "5ZQi5aEMgmDog9QGsAc3c7CnVewTTeV4hM3YdFPXYottdF9HHgVWwwDxi4tV2D6TPrBNMiZcNexDT32MPCtB7XiE",
  "key21": "3iurtB5ycnwgreM396YApv3s5KGvysUb2besqM49SnzPeEomUUsTG4RAneHQ5nEhMLHwrBrgMFwbLp9UzGnXGuRa",
  "key22": "3EbabxRMpDDYgnJ5WZAWbm7kWCgY9Y1Q14FrRNvS2YgX9eAQsasiKCCdDmVLZAfNPitX5fgUinnqUkgGM4WUkiGD",
  "key23": "3nZMV9wBYzDv4FTNGzaAK8WwPhx3NqJ1vscLWsERuVSEZkYifZ587CJnGBKo3huYqw7HHFs45knBs1CqnRM6k8mQ",
  "key24": "33TdjRdbgxKq3vv97RDSgGeM3nbXVG7zwYAVSmDAChaix39ntemdJfgYmAXaWeyFAKzvKzatueK9bL1LbcchUFUJ",
  "key25": "3ovLAvGz9qub55yweLfy6jDxMVKCciSujGkccERPNCzQi5itJZWAKYCbC3KAX3XmLkH1TPXsrFhpKS4u2bFbEULg",
  "key26": "EyPaV6MfXdcy7KS52SHx5Nem8zN4fuxUw3RJagoEoyooJfhXVdnyv5MUeDmdM3TCwV3nTTCD6gJhhPjZsKUezEb",
  "key27": "W6f7S7c8YunxZgrJ4N4Esb41mtfAKyM3rXMm1nqPfK5Fpjz2QR9uEFuN2zSF57nFcnnF96SaX9MvRgpyEYnpUK3",
  "key28": "32YvBzd2tahSC1Dpnd21tF2EyjLERJPmFvEWjwCMK1Bhjg89jhXGT11fhVYJNpuNBsR6LqREZYX9NKx9fwD56BuK",
  "key29": "4A6fEaRu6VAPgyQovqZ14XmjctLB2PC5JAUxk7JcKjTiAwy5LUr781hfTDyH5YUV9gLXBYrxYGY9m8sJ7rHLhtLm",
  "key30": "32qGVfGa3X9MqowRJX1nfzcZH2MWh1rSscGbj1KHdfuQ7n3qEXwiefWfXu214tRvjoWYmXK2okJRq35uMgXJ9nZu",
  "key31": "3owBdixVmZ5LucjBkJtyLp6eRbDcB32yhiv3TKSRdfDKciQgTCrPThxdrcZrfaBUbWdx7g2x3SqwiAeZVVUd8Tca",
  "key32": "2C1BGkVTEh144W4eSzXNcS9ai86qKHUQCBBgRyJZt8bqUBnDkHd1nntqxPFrWRk1gtbsA7zikXThW8E9YwfhwkDC",
  "key33": "5Dhq5JRjivMizafNkLw4MB5WBYRmfTE6Q7tuT9UFbWBDhqfxaWDWMeLu1wRo93fTNTSpD9MF6CKzE3wzqndT5yd5",
  "key34": "4CA9eiqeZKMXMGecLbZLeKcTfoStBPHauqLu4oXWAEAyztxhUxqFhVZQ6Wj9KUjQwkxqgC1dShwf5Q326L13nLPL",
  "key35": "2QxTou74GqP4FRYY84MUS5UJT6AVxmyoEmkdB1X6BGgXFJmmbcJhL9Q3WAXd5Q699Mpdabi1dri1zH9c2b7RML4x",
  "key36": "5ChH6PgNxXBDEGt3PmL1o85ERHovhrzE9N7obDfTqmCdhYVTL1BTeGQ8hskkRGqtGmxSmNoULYWafSgkuZcn42Df",
  "key37": "3X4j9gf4fSfkAFcoxoQWSvRKborHSwG6VxsMbdeGZRGADR12cPQMNG3zphoz2dSngugRZkxfHkDjXRMnnURKXesg",
  "key38": "5VXt49TA79PTUvHUNkM1ufeYHR5UjDAU5wvDHATKQiCiD3S7LkaTF5rse4qStQXh1VvDvpic2jCzPunqGhDmPbMh",
  "key39": "2CHUXR3GjZ4pFrwRuG6dQZsjyRxZeq1FCmT9vRinnqxjPJ829XTyZZ1diAzcohEMwm4fyQx5TS3jJhFcQrgYrrv3",
  "key40": "vqaatom1joihPuMzYMkH4Yq2nxQmVjT6DoKVWZsdLunsQT47CuzgXiuzKT1UmXdbdzNHNnoPkWVthmnevReKK7s"
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
