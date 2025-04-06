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
    "FiBmWXUR1eipffEWN1x91hQB8DeN8BnYubtrGyPYk2EWgjkPM74RnPC4P26m4HLxF3xQ9PcfSRUSHaGuSDhAyDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzL4TWXUZTPWGrnuHm3TW6JGEgK2nDf6jx8GRTkLFDc2aRZ5Y8hpKQvuPU4EaWdWrqGUrRDJZUb6XtkiDFPP8st",
  "key1": "2aN7wuzGYqaChivMhJyeFcNXZ67VXqyi7R7NeiyNmn95ifqtExgiutSJbx26vkJZLBGgLX9keNYWsmET2S3HWSkr",
  "key2": "4bPhkqMgbjvZCGDmqZwDsGQ4VQtqeJU4kB1gv5rrCTWPPfbTAtFTwunRTmH1UJAef4LTXPS1oCRJD2qcukYuQL8h",
  "key3": "3CnufvzfLXLeEht6szdJXVbPu4MjkW5DGAd7sWwMWgacLfMNLtZFAbTaAEFyaBQHNEj3FpQNbtjgJJkM9ryEEJUA",
  "key4": "3hpKzebNMkMhvcfBoMPAT5tnyaKxNqi6A3j2HbDZw25zKXEqb71hkZxcwxJpumbfqCQf1Z22KnYxStCcLtG5jKXD",
  "key5": "5X85A5UHCjim5tKox5BZQ2VH9MnjjQcZUbfH64BbStDCt8B4V7iAVH81vFH1WYvcLpp88fDqjnVKBqMpNvWkErLd",
  "key6": "5qinJDRLbxkYq8km6iAhXU3bcydHU1ZZcuyYB8XCKZfr5ez43uknQSpNWqhSvB5TCnytPD3ob1PnN8KuXb7S9UXu",
  "key7": "23TiyAgFG2XcSxEskYbqgxUQp4KwBihFz7BQryAnAi6eCohyYR9FAVteVZjLrTSCtre7aRvAELTjDxFDDjhDKwNW",
  "key8": "3ULosbVzUd8PiHU4ReHk6fXkWUZU2vmmfnqtcroR5hikWsv3PRrdf52sEmgxeeb9RAgHoswckK9PGbyW9zFT2ELx",
  "key9": "5rg6p7iq9xffeCsHP2YszNE78yZ77KPCVR3hrTibJYubCXjipjMAMMJunND6btShtf3Fw9UUe2GRt3H8XMx5P84K",
  "key10": "5M2KVj8PdFFoarFFNMerZZRLdJXcBd1vLqWvsRaXieSeKcmW7u2ZzJyLMfz71ji2HUWSX84W59s9YZMyo5dyceB5",
  "key11": "qtY1FhByNvVkzhiJFFASf7Cr9zMtE3NFAhAWHJ3HT3K67BaLKakQHPbkyUzGoeMt9LQtNhhPuqKwV5UyzFt39gv",
  "key12": "61dP3nADvVHNCvzj9czXCgdxtGqzfhxHKNcJ7pdwM33ot3zCK2SedXJvvkzVfxKQfyBnhrkf8LKigWbe2v62XkMf",
  "key13": "4agYQStv8MjmqxnwMQncLekA2oeeGhQjPXw1FCedUihSVeAyCK4cA96b28F3728G7tNyHmKbGFg2fLG8SKeRwCn6",
  "key14": "4xp9xneffMs2QzPEjNRKeVVFg4JuY5EXALPDnfjAKR3GMXGPvJsV18ARsH3rmjY9mJBgmvkXTSTH2Ld7BxkutXyt",
  "key15": "7aigXTLrYkadFNWdHcBEZTKDkhxNAjqZm2DMc9MhvAQxJ9b8C1VNzzieSQNQiNnUWd34XTqrd24t3Rz8R6if7WM",
  "key16": "6eEmR3nadcuNDbocdX6opy1V1cwBzkr5JAnRwy5RZ341zeswFJwLUexytvUrFXdrz617uGcVvF7DanvPU5Tso8T",
  "key17": "4heLdyx1XzhykFyemuzoQ2LCj6amZ7w8yjTYmmE2AWruLVfvjuuSCwLFZAWHHiNG1htrcshjaYwCZsxc9AYVAG8o",
  "key18": "5eh72dyPPWV4PpksvogKbyXUkQgHjQ1xHnwcjxiJY6mNGydrprCuR1rYcL6MoTCEMzvRmmJsBnnAttHdrrzC5Qeo",
  "key19": "5Zn5oxP73jvirYTW5zuiJbrUvvTDDM4gfVWRVZgRPcig4p49MCTf2szUZW9pMvZdWmh5isYGmuoHkiW3BgMqL3jE",
  "key20": "5pq8RPsMwx7K9GqSQbovnmaBNdX9V5qi9jD29NYPttdUjSrjTJAsRru1nZ4GNtr1HjJjEUL1Ld5XzdSPPHs19QmZ",
  "key21": "49sGAtPgSwtX3QuebtNHVL7sBSXv3DN9LqoxV6eS1jaQq3x6t6xanbPqRcokSrF1VfYmZTDhpXCoLGmp7bFer7aR",
  "key22": "A8n1V9FWFDDMDMJF91e3aUZVHmnzHnbQUXQkYyqo4UK88Ttj5tViGsprURCmBkpJfPFz2MdN8NP2cQbvVo1udv3",
  "key23": "g1Y7JkfE5fE5uAoeisBzyim81j14ZeVh777MyzwB9ZafVwU8jNQZqeNKMoJ8Q4EAXrAfeeJbQgq5HGHpDEa1tan",
  "key24": "gVxmYpANSFiwYBGx5pHdC4bmNFMKF8YUYvjGwEUAWD6vFVxEuqEsZE9EEk9Ve216oMDBSaiuGzHtz3vRwNiU7k4",
  "key25": "4PmCvzc7EfsGSyzfjAJ6Z9oBssL46o2Cy13M8rQynUnfFmpgteDztuReuhN5jhukNVCG6wm7GDe6FVLekRwo5nUM",
  "key26": "3qWcmBWbr58qcc6zLh3Dg3v6G1BSZTAsqz6V6BKPn51SDRRgaoq7qZp1CBtaqhgbsL3we6gg9TEc5gWgYGi5ZxY5",
  "key27": "3TX4S3J6vL85tYzdFnpN4oqzRnBxAPx8XSLYYLSeuv2S4RBzuatXoCfTyMAa5CexpAFVMj6iBshVJmAkE9SRyj2h",
  "key28": "4K5VEP89zdvLvEKyckHQNMUGWWn3dZtJCaeBcWVMPZNvvQfcuKvFatiEB63ZtndYcxLZaV1sVnqPT1hKukRuaDy1",
  "key29": "3Je5MKCekUGNhrWJ8TGTg7z6wqxm1zX7Any2pYdGY5HPNMVpCGqKtXNHK3R25KNz9Ax7rGGZ3LL4ZsaVwYdAK1RA",
  "key30": "P2vgLyFbDGZHJun4YqcoQo17rZSCXW41JBgUkAGhZ7NGgR2cq7mWRpRsS2U3a68JJ1AEQpNMYcp4ipq8gAN4gCz",
  "key31": "3QcQQ9fwhkG3BD6f88CS4bitc6piX9tewXmnukETSk658VKenHXVhnoTer4bYaSY4LCRUdvGxQG2ndvSU1f6hJfz",
  "key32": "2zBxwWVyFLDUUSVcAekCkyBGuLgMGFdtHku3phnT9ejVuSv1nVbX2cAEvKGf3CRHhZk7FXauwpMe9dPF9uKH2piG",
  "key33": "2mZBjLeVV12yasriScYK2qaL8Ysv9YbjzMLxrmxKinxKtg9e1NrxeivkKSZYvRtVG8RNnWLGQf2ia2Hz8YTNyFVT",
  "key34": "YPy3Mdeg5jmhSyytNff88LpYLbm5ufX9RcRoLf8P1dRMkSY6W8xrt8cNLoWmpPv2zWuTpLxsk4d7qgPF87GrGZC",
  "key35": "5Usi4UZmiWfVf4UCud3gmHtqD3oPss1etCWPTmwVrTA8G3bAkSRvSu72uNvdSb9ZsuPGEwuCFwaKUZYuQLNEcP9A",
  "key36": "3bb2V2cPMGRn9XjZL7pKBH2x8U1CsPHWaa5beMn4yMViEtUYc14sofiZKkKKB78Vvpu2tXehGrv6hCTJRKsLrHW3",
  "key37": "5fSo5NSGUox9qECF88ueG4ULrYXjRREVCoVWXQtLj2EAqvFzdVGYBHong2GMwQdxHXA4cKkM17zs4M2M8WAur61K",
  "key38": "4UYrmLhUny6VkE8uzMvYTvJemga77M2VB9GrumA2KU6UNVgVG9mJ3sjeCtTZ8XCri5ZmXZuAvaBEL66oQSgdHfGm",
  "key39": "32LXQmdnfB2iFJmwjL8SqkwKmMgzmU4hENqaQSfscraMMRQ2NyQ1srP3LyseQoh7NxgUviChqQ43BS4RqVXMBV4k",
  "key40": "4rWVrYCWdLjFnm1CoTCMDDJt3y5dDy1QD3MxtArFuDPgcwgsqGiRvJQSjPhWrZmVB7eLeon6zm36uwfQ6h4boDXL",
  "key41": "5dbhj9mZcAYyySzHVrnX3XorudJfPanjoizS2xtdfhrcSiq1FiTRpMzG7LHv7vvYsSpiLKKs1uvs4W3Tkjrifc19",
  "key42": "3NwF2M8CzmQLExXq5j8h2wAqBRvzmEApHhYDwyDYZyBxexDUEMGsmkynkNXuiELten3GBB5uD8j7qmbfJamjGKfK",
  "key43": "5yf4RkEWMtQdHsWAfAkepJC2ED7gt2ay9tck97M3Lj9zvB27JtDpbHYtsZGT1BxZq5QUNcKEKzS2e91VbQoRsBCv",
  "key44": "5k7a3oGcvV7g8gNj9Q3omdyXLE9w2eYz13hi3SENY7EiTGi55oSbEAyjYDUJcJbw4vmjiqDdeAVJvjpuWLRirMtb",
  "key45": "ro2HBJT6DvvaMgz52DLaAPtRcT2WmkhiYBPcQQN9xPaFRDcu452yS82dD2pKWgM1w2LZj56Hog4DoVkEUS2jV63"
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
