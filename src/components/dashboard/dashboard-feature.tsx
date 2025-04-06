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
    "5DMhQmkAD186KYesEPLYip1c8HDGYdhUrc2nVsURj6995usnaC3SLXModLcFPcPQ3cJiLxum2EzxUVWxsremiRbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zR7N6W1nysy77dj1uYx2U6CVjLajmwAeYYqC8o8jwsCd8fdM8DSVFFnx5n8J5RcgNoy5nU3nFcrN9CjY37L3Ry",
  "key1": "3hKFpSwRjYmCKPLFzEQ5vHcxHatA1e3ccfvjnAsXUcoofba8rr1n1cTnV5riBwtEZHYJddArV2morkLVSSnXN7dd",
  "key2": "65YD1aXZmXchKF7Z6XTVZJhNT5Q9UXLBJGdF3v8Qw7JWhBDgxAWcKSgrFu55bmD9TDo5mrEn7B5pjvtcEpyF4NHp",
  "key3": "4SEkfTQuZpmb5zC7vKC5r4tcPbme9xf4wZxPMEiJdo6S2KqbeK9L1vNJmZGcw4FFqujkGmMNPScPYCui3cmXKtge",
  "key4": "28UNN34V8X7mcCmY7qAN1J616TkzKg2ztFhn63NgahHbiCbN23jnca5SFpJEgUq3uvDAyuYfpFBwwb3kMtkwDNQR",
  "key5": "UA3mWcd4tXCq37j3mrDvkiBzw1LBLMgaFcj2RwEwmYUju8vfpyXgVsohMhJndqeFeDyhmEcBCPc8RdWQLMKWY2j",
  "key6": "5hqgkZjh8wjmhmhUjHcZwa6Jkj1nYPavApok9cUbcu3abMcqFAenbVWbQaC967PyuLgwYokGErf2S8qT6RjqyJ7C",
  "key7": "EhN5zj8GeLVo2LpyhLg8xsKhFA41bZHaRvUGLs2LX8YQc9aMNFiFSrU4cFfTH7WiCPVcAHtjqCARPfSV5m4cs4d",
  "key8": "PEsbjkCheWgv7CCy9KqePHdN8ePmTPpd7uREmghZdvBLX9CkNzzD3oBysU27ZTM7Qv1iVLuE1Y6TGGtmzQbRHUi",
  "key9": "jsxcTYvPBdKjXJAngaWPk6E6U9jsvQBME9DP8vfDEpfu7h7TWHgcvJGThX7d1vfpuCjhLHLe8HFAUUyzba826tZ",
  "key10": "5dqBgkw36fyvyz6prEbX54ew6BeC2wgj82iC1MuA64gWACSduzD9EFoXJg8uEE9RW5LF5nYrabSb1QkY26Hwvd52",
  "key11": "5agpzf4PsNLknPF9bUCy9W2fkyAT24pkLQYbyF7JYvYkaewiCaeifA4TiLKv8XYArfufkn8F7RpFKwK9t7k5it23",
  "key12": "3wuswpFYVgEMaUGqWoK7tqgVHNhiGJQsLujCntFfXK41buAyE8b8sakE2TgdSbyhGy3eh1kJ6m8dwtzJXT68Tkv7",
  "key13": "3nozHQEraAsofVCCUUHzrgYYn2r8iaJV3haTx5Cz7kMhATGT77DSiNuC4Sp2M1X62xANcTAAx62F4tibyJafZH2u",
  "key14": "66mfUrb7PEYaAtbzyk2GPFcjdPR5hn4YZKKXkPpXFSQNxMgJEVya3tvnDnNYUUqxM7q7LGU8oMt9a7iP9nNjkUC7",
  "key15": "5VbwVAer1xfpGj9evNhNEtWjgxXusi6regPz2PnrJExqnMoL3kHZhYuL8D4Dcr8kGJRx8bK5jQiPBTSJ4QoEge4M",
  "key16": "44Zsn5BAQ6revFbb9MwC8JbqFjjbTr1kT9jqLVjt2zeCCus7C6ojMPQPGR9TswCKhkEa1ev7T4GoTjdXExMaShwW",
  "key17": "B4GkDSs63VZC7frjfVKeLMW1dHJdUGdoVx7gW53vUre9j6Z6rBVDwJzHBPAXevzywP1xjWqTzQ5RcX7ne3o9uSj",
  "key18": "2Ru8nQNyQspCuX1c7RyT8VkTPaNBiiiob6ts5WyHqp247eNgxN7u8YDBPk4HE2Vm4CvpVpNvkxjYcECDABTbPeLQ",
  "key19": "jXc3qzYz3MgxKLpjfyMmxYp4m84Q3mR77NVfjhVU3fxnG6tykXYaheBEfMJFXZj9XnxY8x4eoYk2nf78Gs8NqqJ",
  "key20": "4NKssqD7c5BWqXYvNHkqXmhBopwDJaMeDmtV2EusX5abWaiRDtK9X73VWvdjNcbUjcHwuGsAvNNir9YN4TPwH9rx",
  "key21": "3XzbkXwXkBFQEM3HhQnUoiyJQPyworYKJxWVSBBGzBCfh3Dsp9vzQZL3GBNuh2YAq2atKYRgHuLD5rCNVkukMZGG",
  "key22": "5TfoWAMYQ1u9pKXbEF1iK24jgTfp3riJpBQkQZYnpAjkRCofqBiEZf3BQQvmTxgvWuRcGBdbFW1QvDrXJKSkg3d1",
  "key23": "5xTTWNz6d4UjwEaQZdJxZHqrgRinNgoiKui5gUfA9UD4fb85Drpw2Qfgn4p455Gay4XTkWdJbPjC8gfN9XLJ4b3R",
  "key24": "4QLb8SMVYdfVAVyDApSGyhD5HvY9ZvQXxFddiVuDDwyqBvqSRVYQJvQGUvn3A5XdcAdKX9iqLUwMQUS8MhMoBSCG",
  "key25": "2Nj1aDRx8V3jFUJpgPQ9jiwik78LkE7tnrhSGEHLrk8UQLdzpVQawCFmQ33n2M7iCc8MsSPSh82hy8Syj7esaU3Y",
  "key26": "5wWYouUjpfH6EeYAfiyr1Zi2J6iYKNDfMHuzhqnrndSc2KsYrvt3sgUs8LJFDzMVgppKHA5yG1mT78tYUSeFDskR",
  "key27": "2hJuaoGdzyNRH3G3VMdseXpsyGG1djzTLT2N9u7DaM2exLrEdDkkyZ3gTAQ33SrdEAeGyb1v5f5UtJobjMPCb7mw",
  "key28": "5xDbBbCJaw76Y6cyXDxnGW87rN1vRBMcwVF24SRgG4Q1j3r3K3tiV2vMPegofV3NMRXz7xQEXhokAxX86NdbHmhH",
  "key29": "L8ktKPtoF8AqDHcTytxe8aDWpJDUc6LGzKEwduY2FWJjW8Ffd2EiHHNwUSaZGgcYCb3kdmHcNg5NpVB5J19KxGN",
  "key30": "31qXp3xAHgm85GLkcj5YZWy4uCEX8iDdj1az8nUbxAtrao6mmfvs3EUBUYuLcHcXxyiycupCemQN46XT99DToKPZ",
  "key31": "5zSFKJnMh6VjRwVX8C4LuSoGxcUkeyNhsanj57b666PWKrdvQZ1oXgu6jLwcWGsy7gjjRnbeWgffJ4qHm9idVetp",
  "key32": "4Trw32tYAqdJn33qn1ihzZ343jz7WhsYFVGEAJEuDQNR48ftepJswoVPZ3mMoZRUK9adfYXwVf22UFywb4R1z7TA",
  "key33": "2caAd6oAkgheRj9vP4PGT3Ugnb3cXvbgrhWDoHLXG6VJq9ddGaoBqGt65C5VpAEaMs6Pgya3AYJ61yRiQj2G4iQb",
  "key34": "5MP4pN8r9zPdLbbSe7fEs5E8aqj6oqJMfttJhfQnyZXw1aPMSdjrQWdxpRXjB3W11RajrmYYLEMJnynoGZfFuJSY",
  "key35": "54EqWxja6PgcsqGRRPY8rSDdXLnpnsvRNXdK6y5Sp5AWJ5Wd2J25HweFWK2fHzkVT7mCsQTokK2Hi9w9HMNsdqdP",
  "key36": "2uxsvk62nTK8WgHjcLwQd8CD2t8Mq3zwDaRRCgu2XwmqmMF2Cau7wZBSYugwh23MLUYj7Dsy4U7C1vfECJorNGsR",
  "key37": "4bhYNnSjLjEyjJEcPaUGwhZ7c7QKRuMAX6GVPjzS4V8myQgr4CHhh6qAHQD2QvUU4m5VPBA1QmevrrpFyjcTCvFQ",
  "key38": "5obDKyQFB6B6oaLKExYHQSDezvk7TwtgeYxMVr3aiAsKwZ8e2FzfeGvhNKf9N3yt4KTDU3s2Zw9akgR43xdmtDrY",
  "key39": "23HLsezpMuZ8vFXXLea3rgpTHSDWVgFXeEqiGyx7uF5h6StJgrpTgkv7UYS6i9qeWy46qCkqmHe1zQ51expEE3or",
  "key40": "DserQnCpBP4AVSiQPRRFNexWe3Gcu3HgYFSNZkLWrkBuHrXxboLaGMAQNEybykskpAjr4oh3JTqVVS35Jja6mo4",
  "key41": "2UgR1vjWcM5YmeNuDuedDqrqm4PLy6iiUHTepAQyQ8PdvDBHcy4CBQidBPh7CoQ8GWLxnnAL3PwhDBZrtvgrHUNN",
  "key42": "5fX3qriCT6QYjdjDmtdjkD7PwDdTbk8vyZTmwBcYgWvZka85XpaHh8pyeKwbanyNhvBfGupBAw4kd51KG3Bh7iYa",
  "key43": "AoHvpK7Y5ABA9Ny94Jca7rJMJijYqhdu8CEy3YdZ1tD62m342kAvqzSkX3MLKLaWCEr8eXpzNnaShULMHPCYwmw",
  "key44": "Fho99pdk9y2UJf6HAmpc1jRuwPBNRzGG7GgeyyDt9SJXCFriqgeKPtX3kU3aQyrXbKkMoR1ttm4ukHDBSPDhqLV",
  "key45": "2knRkQtz8zdqYx15ypMwMQKaBanYq87jLyM6oiPnrizroJFYRxMKNccQr7DE2d8BHwwTHAkhNdd96UM7oN8SedTu",
  "key46": "45UM7qjADfP7nQorXxhBtReamJwefwHiUYxwK7sjGGk4coAHgx42fb18rTy58ykMo4ydNLJmVdrr556t3Y3tyN13",
  "key47": "3rZoR4eLBoPR8krouze55hsfnwaLHGvV6K5GECPwBKDJUmSRMv8ay8mjzzsYWfXMcMuCrhYsGEJKiPBLFepUDZRV"
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
