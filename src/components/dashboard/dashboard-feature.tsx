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
    "2MXUf1xq87Hr4CiybGrT1ab9kYZx3p9upb1Cp9WL5MTpd9JHmsNjdBqdzPqwFoswcffhojKt7SZNkjSu2RqnmFeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53aN5ruuJzCZuHhsQHanSQBgAN5USBEv6d7iA6MofcwYrjF8aF8PQjNNj4RV7gNStwY8p6ySUjA8rRi3qNYgnFPV",
  "key1": "5Fk6uD3jfbghNvxG8UJRtQRdD8zb4PbrQKbpbHb2ZVKVwqiKpewXKQ1u5ReqzaWyzdC83GwMcTtyVyQJQBH1jrzy",
  "key2": "4tSaXr81iGT46kD8McKdzPzx1uKcGrHB5rZLcLxFDDLUX1Nszqx3KjQVNhPF3X3uk6ypFzQ4hQCu8FrAKghi6d1U",
  "key3": "3YKsEFyM8zPnPNnn7449M5BfWEt7xaQD9ftwQLZxEQF8uzWymX611X2bZwRb6ZL8knvig9KABewwSQpJBhMPr9iy",
  "key4": "4P1JnbcJdBit9NC2cQRsW7WQjmuZ9urgEEypitDA82XykAfP2wEGCvniDVF7TXWocLDb5WauorGENTmWTftFhUga",
  "key5": "358YgXHg78NMrbiDRMagK1ugYXEdmf43k3pdedZFwYQoMXGAv7nfLrhp3s5gDjPctJDecXqFB4JBiR6btgjq4Li",
  "key6": "2oSM9LfxUaAU8cUgRSyT8g9qTLz7jpsaUHTkuabvwvP4ivyDXoZmmeX4hAtjynoaK1gu9LxQHhGj9VnNrS9F1ZVt",
  "key7": "4XAiqoRpaeewsjcda3FrPuKK3ckAtSb11Kzm2hHp3zJM4yJVqC8SNgsPTK4Du64diw5FyRnWQ6XUmAsKkTAEoybz",
  "key8": "5i77awh1yoxiHqjfTq2Ks58KVqLtLkYVWiueFSu9bcQfNE8N3iKftSJvgyPKUExMp2cH34iXVrPGfBMVwHm853X3",
  "key9": "4LdrVueoZmBQ9qvhocYTC9MKbqv67iF89fZ8S39iJMPnn6HFhajMh2kNzpvkqBvRU9Y4GnMFKMDwda8USSWQgqj",
  "key10": "4F53LTYF9d68eAUj6aWRsEEa5bNmJTP2tRfJCiELXFSWDFTAnQiZmFjq7bZKaswPtnPaRZBDQ1YoRidV9ffbLr5X",
  "key11": "4tQYPgCPDZANtSb8bPHBR3LGvkz31LGyiM7dCsUud3FTfDHjuPzYQSfrzD1jZfyjR5jUyHyF7w2AsJepMKpDyg4f",
  "key12": "4ne5ZM3H2hT9N2n5EATS4oBJUNe3sUSr8PdCcz6FiaVaCJ5ivfsBPHga1f4vzq1eDFDEoRSzDYik4j9xZcmEf8op",
  "key13": "2r2s2v2U8yMhKz5RbidnUTD6hk5rRC3KbRGQ1jN1YGVsDwR4C2cBgsie35BJ7BUoADrLrPFkc83WEWKBQyUzKRb8",
  "key14": "4iRwTTajpbnJR21K2u8vKy2YfvGmNsonvtm8ESzJdxvEsBX437dNmVGEoSPRLwTA32Xb4EXLJeBojQM2p6ERrJsk",
  "key15": "3LdYNAK9BG6Mp4rCn9zhp6su5DNmT1DF4WYQAD2aXKwqVm7SmCi69KN1amBMHLekaEnzb3r1Fc4wYfiZV32VHeSx",
  "key16": "Gtbsdu2Mvy9TKqKG75XUmfnesEEUigRjEjhJtsGv6taFFnswyjyjcuu94zoHtG1dBbaKR3SUDjxGYCf9s5vjJMR",
  "key17": "3mR5YyNYNhy8atajgRDf39KqPRjGvUWHKd5HwBFPEEDR5rxRMgWTjXrQBdVuNn5yjxt1UsHGnk2NxhCV9VouMEpT",
  "key18": "43g2hH3t779HvxztFA4o97sz15F8qp6A9sRTWrFrb5bYF4VG712R9wCRAoZbFZ3RorF7qmMT5xXEmm39b9VoMPq9",
  "key19": "3KC3wxz5ophdzTh21Aszd37tDkpfbwDamZregHQCmK3bSw7mrjiCMX1BBC6uGuixEWysZEcZFp4vsRQGqKdL3cLK",
  "key20": "4hFC71HAwWVRgyH5Vz3pAMGzPQT223eLJneP1nKum8P4HtmQRdpEGrN2eJE2Y5qyC63u4EHsqL2PAuvVWA2epggt",
  "key21": "3RC9SZe21VvuFpEQUjMbunmwjZnqPQMS3v49nKWgv9f88Vv4e8rfbtUev83iLeMQFvTzuuKMj4M3v5uprJ1SkQV2",
  "key22": "3CHT4dUmqGPzQehZExdhBd78swWE3AVqcHU51FuE9u3GPyTsaWjTMVPGUMRqshY1TxH577YfeTaC9QhdjnvbkV4T",
  "key23": "3KQNQUnWWhXC6rQLGfvfCj1St8KhDeB9svUqxn9Gq2oR7BBJwMk55nAwfFuinf7hfd7NWbeLWgeoFf8eTBK1RVtN",
  "key24": "Zuosw3FKKM2raich76MBHH4zW9Etbv1fPZy3yLqFNnKruJozTab3ULwm4UiyTBN7vxygvZ9JZ5inn6nd9yAmJJE",
  "key25": "RAMAim8xd63tnzS7PU4Xb5rwKxc4BHMiB4991vPwfCwYSYFXQLQ3M7jCQ9YnkdJh9LZzvonKDZEoVJfUXH5shru",
  "key26": "4zgJ95BAYDBQn4YWeZcxWjk4tvm7np1NvZXUfxj283zJnuHXgeCFfMmgXfPQ2TCY9gMB2JDwbeL13yXo1navanXJ",
  "key27": "5T1J9CMiih9rupfsBzrpn2WJXGjVbtK6hE2VnK3PqFgNjRMbpJcXtgsvq6w6fFhsQRrY2WZrVD3yQS17131j7BWL",
  "key28": "nHHQWmWm3xYWYxxUM3amgs5KU4N3tYwHeRjHbyKj8AqGL1ka3uF63nZCSKvuFtWTm9WWHdmfSZ9BWLQagdBWfn2",
  "key29": "VYFqci9i8zKX2Q4i6ZeunJnd3Rx4aHmpa5f7ZrsJfL4PkSgLuMS21XvEpp55QRKuLiM542XTVkkwcad4bcMM7CW",
  "key30": "2K2ZuUhrAHjqWX83eghKRvm4YYx2iG3ERFWx9cP3aCU6vRd5WuiPRUbs2eLLuSWdeymxqAw6fyngkpx4FDk2JzVR",
  "key31": "vJ558jxe3q6m1arrYm7HNtLuB5sf9UWu7uHBXKwzndyNd3gtLKthmha8t1qsV2VzPYciuoagDM741BiAhEtNsLQ",
  "key32": "4bT5ggSQSAjYDt6PXgsJAijJ2hCN3TBCyEFp9oS1wHn5bviuEjVGCNjR3TQvFij3p7p78Y3in6JRXdyFMcPBTDXo",
  "key33": "aE1UGjzsaigC6h7gqzgQwm57Mj6jyyBpf652deit3zUPVZvkN8tnHp3eEBEhEXPKQfuxgMySBCsw7iezYFgcSSc",
  "key34": "3PywBW8tctdhs5YRfFAn7SXydMS3e43sYNKkFuRAPZExo6tF7Qxe48pRsMNfxknNm9JvMjhFgBwyVNhjhuK51YRi",
  "key35": "26gBhJtrGCbQroXc34tQaJnSecH2ZL14qnLwPAHrecMnQhUzLsJ997KTkJJ94Fo4VYejMvr4QN3Lj3JCH5xBETuS",
  "key36": "1nseVSHTXSTPVkYTvKTC824Vpn7NHXRm9WwdkkAXfnfvqVForSma7S6sUnq1iNyzNZ3CZycbzGoevzB1LtcQgfn",
  "key37": "4CySmNHGxh1KbfwKiP9hSdVFH93Ud9q5Y3yWjAzm6eseHoiXX7r3om9xgXJc3fTeBfKsyahW9bvRkaPnhWjEy4SK",
  "key38": "2VK762aKjNg7aRt5tzeQjGeiLbLB2g4ThhWWVQ3jaK6RXdCrdeZJNB1FWXeijbRFowTQWxJv82w4eN648vPEYRiP",
  "key39": "5udkApBnNC42HfLKhHsRBbAphsE12QTUMPBjftUQp51Kb4XuxwBTge8ZdGbwMiivRrvAujnNB2UoG1aee92FWXaD",
  "key40": "3DsA5wMjnrdWNhMNJV67HUm6CBBxBspAYL1pDDAS5QaF2rvsHDZxHvzwTsKTHEHeV9p3iFNfiadsCx1UsyyZKGp8",
  "key41": "2KehGeXmyXSEYfGWTMDVTWbmwSxR3QMGLNiiefpfzpmPgcpS2QMCahY4bbJQbUV7gfEBtJo9EktYJeJ75XQ6MPZx",
  "key42": "3s4ygbg1hbfkwABdS7y2ukzDDNr4Ekb3u6fzWDzMWc6rXearzjCoucVRMX8qxY8WgjyWYSNxeQWV7XQme7hapAde"
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
