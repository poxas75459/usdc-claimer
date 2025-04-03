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
    "3q2KtCT7WDQuUNVwqVS9d8876nieWt4xhF5MK576TmYiLDZnc24zzaCJNYmLhC7uav6c6QLadPK4W2zxZpv1sgSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdcyhkUbYjz6PBvdc2653hfUwad9KFQGz1f1jjzrCtf5aDCi4wSW6Etp4E2HqPtV7cjUrHkeny1K2c3P4BV4NeZ",
  "key1": "5WRdT6VxxUesWAj7XX2uHjb2pEANiUfPuMtZMjojQ3BkTG6EcH9pyYubxV9L6T15mM9dTuXvoiEKSjx3Zo3TE7w9",
  "key2": "2JeY6dzPYSCnCubMmoetFNEpJPTRkGw4xbkMK4kaEgKGmHegPdVRrtdGTVpEt3D5wYUaD1W9ZEMSjrHZMVtNnawz",
  "key3": "4tg7azci4UL3inFWHvQknsZLHSBDLGJZT7ZgY4x7Mxc9yN1hhLGtqc85MKxZQATUY7sotVELLVpr8uttfBoGVmWt",
  "key4": "5aCF3BjLL5ZQM3e9Com94tFSa9oSSJ1WB75Z693xNvKfHP7idvipNRK12m7cjn2PqAomGT15hFe8jo8dDVwHJuns",
  "key5": "3hWwVvVSd8oyUecNyGTuvLveFwGgq3GJdgiRmNgA5226CUbdKw4DmB2ci6pLLpfD1dcqXxkbnZ4T8cT2TVXHj5CK",
  "key6": "2Rc6u27XBCkXUkHoTzcTuY3KK13MkzQ2rqYYLmf9fj1MWbsfwbiv9PUqkwww59joCj7ouumfVwudKgAzMFcxA9ps",
  "key7": "5kRUrxCuMEEy59x2UTvNdUrHHPg6bmYvQdNyqwxZJ85jqEYPD14scDNsksHTNSUXM3Uhd8psg33QoHeZ4ehzVETF",
  "key8": "2F1LGaA2R2J9UhJrfV8snfLmtfiQsuhox1r8ct92YMyyiEAcgk84i8ixojKpnqeizsmrRrgMPWX95k1edUCeMvg3",
  "key9": "3mKZm6uefnKfv4WBRYwe3KPJNLiMVgkxLVoEk9kfRkofnbCDeumyNe8YYuMZ5v1iMXWFDu7EvmYJXWc9cjV1uFdB",
  "key10": "eK3vVSK5PQgtE1kEd4SjzYgc2iZFYWCW3JDbCEt6VvuCHh2VhsFWcwV1GdGth1a4ew55cbfzExoqQqqg5i1J3D2",
  "key11": "5texjihtXJEiUQVRAN2J4Yrfb8HmjGqD9Hc5rMqPuQhHLSAAtNRbS2NDRHuNSojSbBSBF9KnJ5dr9PoFauto7Top",
  "key12": "2hCi183VvMvcWxdwNEJkybJodPgGYdTJToNfWbtjiZAFtqmN6Np8ttso1zxAGM2wPtGtX3uavvU6m4UvztN8Wae1",
  "key13": "kKjUnUqJgSJDozbJqoHTfSuzrQUzPj7RaQXgteUeReeuwWuQebM4FnFori4Q7TusVMH3d4grExeWfDoDUhTnnU2",
  "key14": "5JWkVCnhTgdDe2f2PrnHsJ6pjRKkpwhjvzJ3KZtzvKQhgEMDuYw19CkacXB7cxnEqcAjEryJnRa1GK7MkuGFKx8L",
  "key15": "6sh2VZ91Hc9Zw6JvuYa8CNNXF6FWofJaXPKqCZhrKjdFCfvtxL2MKEqR7P4v8SwUE3Fq7PXHRY4fMyQqp4Kozr2",
  "key16": "2wtnDbqG4VCZ1GjWuoueQwfFtGC4nsmuqutmED7swAxHRqCuoW1jt3nr2GNi677LufV75wVJF5fvZYcZuBgJqpWY",
  "key17": "ugUyaRgeKP8KFMWuumtFqYsVB2UPBz8N9pd8HWSGE4bQ2jCoyhwS3NZgSYGs7ZmTfQsQiuxCHxNkt1jJS9DBkMm",
  "key18": "9DxRvZg7LSDV1JNEgBTcJ5QN47TyVszcRXcqotscFUJiRDb2SzDMGeWZC5519CoYrTK4dcsBTzppWGDrrEP21Fa",
  "key19": "34wTsRx9AVE1HkTZXw4T7BAjLcDUni2nKksMaLnH12P3TWBvj2fFz2Ex8zSHGKioBwq8Pxwss5i6jsEhHHsXpmfw",
  "key20": "3P2XcSCbHYryid7WHrHfwJ9Cq1Y4c996wyt5APjyr9XijuA7Bq3P4w4zXtzC4nmuiWts4HrQ5yLTKuwABxsGyhkK",
  "key21": "3a4C9HDkwcNLGXHvH1UwKG6HXdQxKaiiWj7mUoDSVro7PZiugf9uNnvjBLSoQpxDRyhbKVhcqwVBthURniYo3dMr",
  "key22": "puTyU7pdpUa8TyQXS7wf8kMrVgHDtX3rJhmgagkoJrcPFwWmSLW8RxjScHSE56qcjk5FvAjWk5vKrDYYaYXm2pg",
  "key23": "2q2QQXVsBx2Zgze9sntqRVfNgP4UGyJ4P4a3euT3U7a2awtDuBxBzgV1SzLF7r96VxELsTQSAp9jp5nGNLDWRFAw",
  "key24": "2Jwk1XwawcDfEfdRLBxNhkJQ2kkosguCwiJWRm76ZcrHijUU56mowsJ1MgwMH3PtWHpcEZ6WhUFx1Aeir6higTC1",
  "key25": "666Tbk3cimAo4mNbZDeAkAo4AZYz9NwziE6BhE5MinJRXqZXLHe2rfS2ekHHuQ2cM6wZeH9gr7pjB6hmSjwq3XBN",
  "key26": "2KVZqCnWd5yNxfJRwXzg7mDSFCrnWwSisaG8AGLmntKg3K4JRBH6BAxtV17vUZv9YF6TiYHoVTpeuQqDwXeDFVKJ",
  "key27": "5cr2yH96BvdBeNev4WkpKTttgK4Vb9UorkxaYunp8W6aaUAt1Dk5Pnp7vDhjHqs2qZJmrHpiHUJyTDEcji8531Do",
  "key28": "37WRXxWDHHCSpov5CWEKx4RisBmUskd1FD4fnobtcm2nQD1fJM4dr7321GzfHHAi4SdyH7LYmL3JcM7rWydo8FB2",
  "key29": "2fgGQnpbuTvnGRsmyKHLCtCRdgRQmszzBkLEPbDoj1KJASbDdT2gLekrkhUqwDgzdqxwCnykkKphqsFs6of9QohE",
  "key30": "2qN11i4fVEfHks2jtgK5GQyboK7igfAp4JwQ5SUk8PTMZzof6kX1woqDCVLzTNRmHZm6Kf8KSGK4syLENtKa9KWa",
  "key31": "62b4QyZZhkGBcPsoyarimdLutiMZZ5z63PaaM5jaWz2AeL3Puc4JJDqh1c1n95TxhwgNTHNNfozUSCnTmsXDCmtC",
  "key32": "qooUJBNrfdtiKpDzkfsBdxuJgC2Mk99AuPorbUwYnfhzjn8P58Rqjo3qgGiEqV7MRYEaJ8AF7i3yGAtSgPTPwus",
  "key33": "3p9rF6KQDecXjoS4oXZPTRfKxKM2XYoDKdU4ktDRoGtiBzJTbczJcsrmn7HcSqhUd5o939QivVXLuSMfd6eLA94s",
  "key34": "5Joo2JuyKNSD7e2LtbQ8Ez5ffCEzdtyqUriA5MrYis29uegsywoMyyFa9bkXa4pQQ4P8d9MLxNXDdmjdhEsJTyK9",
  "key35": "2iDHf1ai1oEL9VgmmftbBuvcwjii8v4F6NDVSf6HV6MDgcnGstjmfTTUa1y3rCJfPNeaXNM1czfuqUtpktJBpCvk",
  "key36": "c7YgKPjhX5yTPSanfFZxNV7JpHzM2rVjYc2YE6mTb9FvSMBmJzEehqtw8ULpJVs4gJuVx6gXejV1U77DnCqvZhy",
  "key37": "4Y4tvYPEndxtqkWGZm8xUknFFYBpgCYTyiKj3BFayGXCgMxfEmMNogixxe8BBYVooCC2RHLWikCnW8Cm2ocz7YYD",
  "key38": "2HYCskYqqPRNjmjuFmSxFnwYRye5UuKe1hwrCNUGjtUQXUGqCYjHX4n1a5NTT7b2Rvu6pw6Dp3XBdA6M7Hjie7W4",
  "key39": "cT1PnMQLDfev53gzEoWh2aYnBGferHSqe6kK9fUsFMGKmbRcRvAj5A4Bqpq1L3WReDEMHwminAskfoGWjMj9B95",
  "key40": "6tDp3zzHy4ZjppKnsZw9Q9UCWoeV8JkZpPuqgy26JPRPAMH7k6Q2nLP4QwSLwYAYy4CsjG3VJqvcvv4fpfJNNPQ",
  "key41": "31kw2V2pHoyammgzUMU94AP3WCWAU5TnYqejZhnHBEreKwif2uNmXojcrqLXQaTk7gKRgonWShXTQHj3F3rEF9kL",
  "key42": "3cSQn95WVQoGEjcMwQTda67E7re6w7KeKUWhnHyoYQGCJ549umUC8ZehvbNWRyPULM84FPGSuFAyc6u7BkKatv6k",
  "key43": "3K7KbX5XMBMoMusnv4kbciSieVppKZkApJmfyjknqqekZ9P2y4hpcDbJBtV5t69b9RDrEdtA9CFxdW26KRGRgtap",
  "key44": "5VNCLs9K3yYDgxxZjyrmKkrdCBtDX84qw59wJBaW14he4vctrRw3PPpUWFPu8eVSocHLnCgFmKtCheA435VTUUFb",
  "key45": "4azeXRUo4oELw328A7P8hMNNTXnbKiLi7VpdRXvpZyy7G2ULtBWXnEot3cRzyEhDzK6Y9iB2FqLVpwed6hYZED4p",
  "key46": "4G54zFQhHFSPAGQ5R7dTvqsNCKct4CZt19MeGQJhj4wpAHG1sGDrDD7VqDr7XknSRggWnzgGBKk3be1r5DK7n2ra"
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
