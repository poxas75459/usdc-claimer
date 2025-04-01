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
    "5TrP1YHr5vysBv9minReMLvzAq233Br4NQfsS2gVWKSBWgVnuYAM2vZUz5aKebubT5hLxB6r9roNZjhWHwwRNgpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZJoTNGfrecHQM1Y2Zq2gwGp82RXCBTfwoPE1pSf8qHaux3sWz1rR9CJ92tSH8xjnG5AJqxQs1MokGDbT73Ub1E",
  "key1": "58dJzwvdnSikiK2WThF4Fp37m8Dr99CuMuMrK3LoVWZWxB8Ht3W4R7SocDS9u4wXaGgueUmY3z3Da7vo87hx6mPD",
  "key2": "wxaNyboVyhkzta4bnmMZCtnCcVGsZhvJMYZiwbyv8WdWJChuksF2eSKbR957sTcYZ8hVAnsCdJX7K4SMhFJRAv4",
  "key3": "5GoJadc9u5wVqmkVEiirHMJXBk2jPcKWLfgGDkxLHdkYoFSf5FzAGNyWemSLo5srud8T8SiWfpw7HVfdmVbt82TP",
  "key4": "2FrGizxTDy67u1QhNbP3ZTWQENx9qV88in8Vf4Wg7UEEhrYyUgrVFJGJmFxa5G2yycuUKbfchQJBMZ8Eh4EcPCSR",
  "key5": "2n7JYsYii1fBveNDak5T6a7X8ohWHU9Dq8pSh4QaugBQnVXUNCdapJ9JMLBqd4WvGCumhsopSWFpEvwg7WDx2gYX",
  "key6": "2xkbgYvvcTjEjGGRcvqAChzLnnZLHNE1ZHkvJKoNHhW9x8vCiwfALQqV5pUNuwGG8w9tAjp1swcNvHoAEVC2Z44x",
  "key7": "4qPBrkvNfsfbS4cJQcVQVk13atJda71AwXQrLyZ2j75Sf1rhRzkmF5D3WNy6w3L25G8jaN6JYsGjc7B5B6pcJa8H",
  "key8": "5rJCuMQ9aY89rQuwJLh84CYpPxCgKgTwMm3W616GFEFvPZ6Vwazkn1TwJkkyYgH1SM9wfF2Ae8QDPUyTZB2hrmrk",
  "key9": "5rgdjNvCmHrNtMfm3P1zussF6C6ZdUXAHQN1idGDwSYxug3zVpCFUPFf6WmTVDnCWEt1Eak36H3X9cnQgCNjtVG7",
  "key10": "2v3weYCXMrphj2pa9b64XC7MaVLoFgEofxvMTLv9ULL9QUZY68LwS1qVGhSiD2gefvCduc46vpSp1tFQgMQaZzNE",
  "key11": "5qxRFFn7sT77o8bSyekHAeCuXxnddJj47eDmjJ8dbcFP3owvKj4MTHziK7r9uRdbUTg5MNZAi6qeYUM2NeZ2mWBw",
  "key12": "2d7oDrStq3KCXQ1F4cL5JzGHjbzXRoN4ccsrHRHW7iwGBfaBt5Wrt6V4BZp8dURgeJzTCptQ3taXufPdYVcVYbuW",
  "key13": "mZ8RsNnPhM9pxxH9znLyHxZvygZpejvPbQ664SnhcvT7QuUf8AzW8u4Q9jDqPDD8VvMUq7q7LCZZu6q8PeP1aFY",
  "key14": "RWEkYBimdtbkPzRvQRodFXMhweZjozPZv3eX2etMEbBrwgKKajA6C3XKSm5FmnDTVe7CxkVhtpnwU98MvwiEmBR",
  "key15": "4RTirTtYWCxKzHGk12tetbJfYuLWn2puAYzGAwFoSMQRFZTZ7Q2jXXeiaHBiP69PvnbA3jBrpnPe19Y9bjgkRRzM",
  "key16": "3kcD3zeKFaZME2xW3K151tMEUcZ7NW4EUVk4vdeKBhNeWB3o3Zj77tTXZyszELv1J6W6D8VB4H2i5xUpwMemnWXz",
  "key17": "4Y15dbVER9t9RgMWGfEx98oxVfDfepWz2wi5NthFjYGXktQ8DP5JLMAekqemB4foeZxz2VSLFZi4Q3CEYHvCHPrj",
  "key18": "3528g1o3sLKmggGc1gb4CeML7XAJ87jSdf5ru2SB7HeG32K938UFrDuRShEkm4oP69QHEQ7oWwd7ccnANv1gBaG",
  "key19": "5D6D76BTGCeYVNHXUxqZvXLATLgTu3kXgjAfcpCHbv1AZbtPsvBAj71SAoZ4MoE3uuKq5qim5w1Fiy45jRRYNmTh",
  "key20": "5V7SUcbt7Y1KTtXaFn4xxscKa9cKuuxzQGi1M5v7XKU13oM8uiScojFg7rRTpgHr5DwiGquL4fX6LPGPN9aUmEh6",
  "key21": "WSoRBwjaukEvgndxvZPxa3etJXbhgWhHBZSBb8cbyXrUki3XXnzxavw81Rdvh7pdpiWsVLLpQtc7zuSS6osDRtD",
  "key22": "4f5JJuE3YKrErafbhCNQN4stt1bssLVtmTq54TNTVPzVjtU1NZr9GXJzEYM4JKpR67hc5MMwN8DHEvFRVpfT6WEB",
  "key23": "2cv6WVqaLREVfCRAeopMytnpyxFAgjNbopXRTzzbVrcq1zD7S9fPcyDNrMVNaNi6V29MkMvPw1aLhF5PNvvStNZd",
  "key24": "4nRCtzx6rD8a6givt35zgPZ1V3n4vaZQtrk2sJJXMt6LE8Gcox52hn4Ah3kUNi1Gk1rUMLZuKE8FEsqHfWhgkFcZ",
  "key25": "9hjPr5dw9xD6nSkaBbA8ZfFNqqSafVjUZj1FsULhyNYZktWmfgkhrQEUWRmBAveRPrDVGUXtvgUMxk766UmitsP",
  "key26": "3BX2aqyV6bZVMNamWJSFjYVcS8wfDxKv3BhWeKn2H8NsBYNzS2h11Ns6SLejmp7Qt1uhbLSArA9frHZVhuQLnVQo",
  "key27": "2eaYBLtZwTezhM114gifmbtGuuoGUj9G3CXWNvM5f3UW22vT7p3CRJXsGL3A3982BYZfgaPNp2a5BXZmdbVS9B7Z",
  "key28": "4Zi7dowo4zw771TB2rs5UGGc8aUVSVLpRW2cUuZN8ChsM4ZeW7PoTe4uExRz4QtEXrexj5PfhKS4kEZfpKMk1u5R",
  "key29": "2NCS57AyPTn5Q9j1LpBoZiF6fFUE2PZ2dHVAEAz6EtEGCxNcQfrWC2h4T6cX6a8VNKPo66Fejgk7spyNZVjkYSfG",
  "key30": "35F1Czi8Hbw2NitKXZRjFzu21cgnrM27h9KCkAVbqcjzjVymkjngN73Tt6UR2G93rnoWhxaCF3agxJHuKUKa3rsz",
  "key31": "52FkSXFPPPtmSo6UoC8vBFmbKhhKomENNk1kVkJRNfFmemtbf4XcMufzNcyw43ArUNsEwyjKaCv35XdDaGW5WJBe",
  "key32": "29kn2gAtZbf9DwVDgJC478MVCA6vqookrfGDSzD84ZF7L9ogfjJeMC4V69cx2g5cQhpU6Ai7z7JixrSizjJRAejn",
  "key33": "3rstThAx1aKffBFasP3Qt3sRZR5SiD5h3XUCdrRaYCTdjvLE6FoaqBQnUjYiPoNRnJxq34uzRhbuJuP9XS3k2jTZ",
  "key34": "2BQJx1ihbZL3Zhc2b7aNs6jc4ZsAYRP3wRNKXK48N9doLdaxqwpSCAtFbbdgxBwtio8t9jiowc8mtgoTqXoYrL1a",
  "key35": "5fXWn2nHHS7tmoMjMnrLhTUTQ3BVawQaaY85tJNPXntY6EiAae51rxm18M2j7TDMzitWMK1nRqmaxjUzSvHxEBJk",
  "key36": "3PayHX2iKcT3McK79T2pArDiNLbE4XqjLXtCYw1o4Ws7o1MH1zbEhz9HbdbnsyQwx5fHvGJcoQBrLNt8bqM62ecv",
  "key37": "4ntpY1thvRdi5ayHCN7NYcJopqtqPCnhZDVbDMUgJ1rE37cyEPHyTTJiAhn8LKLqayXm7EAzwKqjBtuMvRemgNNk"
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
