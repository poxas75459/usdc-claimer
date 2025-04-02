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
    "5gmShHe5RFsK9NvRpCazUgYjvjZdcrw4AxnCkuKyNfqXaFf84Jk9xZwJF7K4YSB6jYCPES5fk4Au6H32YuGQWkfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VDcr7ff4JKYoJYfxKXFVKMvpWpxpRzxk63Hzomreb8YLRQf9L6PKipW9mdicvTFxtYP6mUXzgs6w7vrnvjcL8uC",
  "key1": "4FnjaLFR7yD7SDiXB5divXSjmvAtVK7ViFf2EvjvaY91W7KjafnGQkCTsBSjVNCVcSAa6LW7zCQ8bRXtV3QDBx9u",
  "key2": "3QnQvCSyUW9451DraeSFoHPQThsQHvVhvd1LCpUraq5ZusJUPbsAKsrKDGKhD7EY3v5qvfPLSpddKfwAHXwfVWwj",
  "key3": "2rSHgoaP7c9PAasHbQKt5NsHEggCXEGjFPRWdyFetTRxxE4xgnA49ZNTi9j2YSQJCjCRes8o7wbUgzyWtsxErV23",
  "key4": "5CtM7iuBYJR48MFNkextaAb29YsTBz5porTeJH2SAFoXceMwBUJCH4DbrkepgHV6TcLEEopaJcnEtcYNBX8E8Mu",
  "key5": "3bDa1558xwSBLTygi3Xfo1QTbhwFekXX8Mia8uVV9DZBvZ9KaxnAC4o1uoEYK3RcXcgAqGfkRDZPAoBmfa69k5Jt",
  "key6": "51b2RJgPsx9CnVN1d7BjjkoCxXL9CymDdtqQn81cqnpEmSjavNPtrgvU99KJraN8QkQzZdbRj1EK2orNJVqjBrDR",
  "key7": "4WnuXN7Rwcd367jkC3Knux6nDAKQp17Vpbp11BkzYhgrf3bZZ17Ei7q6nUVwLCub7vBBiXRJQ91x4JrixYcN18W",
  "key8": "26RCuvAzVZey8XS9ZtiBRkpNvkLLA4YJHrfnNeY16eHVy8SHiiorPJEUcRP9rHrJRxuRyRM5bRw5rCsaggSak1iU",
  "key9": "GT2pqEMBgUgjdFSLDQHCN55bXM3Qw167a3piM9shiovdaa9xc4tB3iwSqDiYC5MzrpCg2Y11SGojJjLC2imPGmy",
  "key10": "3HTs2mvTS81NzsBnei86ewoSi3gdtpAx2nQBw6RfwH5xwuKuaacg5Qp2oDf5EJkTRYrZArwbmr7GrZB2fMcG2qk8",
  "key11": "5PMVXi5oGfEaYxGZCm3qkDa581WLwEmYhM3UrDqrU4LYvJ8C3H5ht7tJisbf5TY1KLSFdcvGArU1Mw4Dfqu5M698",
  "key12": "3maZ1aA4iGD2Av94uBQaCjixXCw92qsbdKBFSCfyHL8oWhPMScZrGZzjfkUpoMLSV8DpJvRuAqCr1y1jVEwLGpCs",
  "key13": "2x5SHCwJQAcrSgZBaFUkutcsPVTW6jGvPb18N8BqaVBAMX14qno7oNw3Z11kyesZKRWDZtxpVYuA7yY2tvrqHd2R",
  "key14": "HizvzLXxjHL2iJJThWeC4xoeTjfbm4oAQ31LGoEBMDDSp2oHs5fxFebXcFSKP2yDhH3zPymHu1DSFud5j9Y4mtP",
  "key15": "AnBWR4eAVm7qzQLCB9D2CfDTbZTvbUAJtYouGJNhQFeVLhzqGJBQtHgkqAYEe3PnT55gm27fYicSdqMowcEUtF9",
  "key16": "4eheoCYujRWyEVUfxR2nBrgKJ6v7nmebmbH6PWo6iNiyUcfXL8kWbtbdNBV9CCGdsNNfV1YyTTpVqgZGum4VFnUe",
  "key17": "298n6kQ4sLuC34rXNWfVWXujeuGhkCJYXCGTfsUAkkqrhQapMK7a55aA4aUpBDwhuaAM9V16WNi6bfFx1ZzGgfxc",
  "key18": "2rMJEJLyqg6kTCMS2fq6S452r4G87c4fPwidikPrgKuGFdPuZcVt2gw8vEj5fDa1RAUssgiuRXaKjrp9uPmUazvs",
  "key19": "51MiNJfCcvfPTVMuL8gJ9mmkoaDmDcBizMhoHXZfVfwKtuePtv1hXyqca9NMcwDCV8P8cxHnYE7ty23DD4fUQHL",
  "key20": "51S4MzLoreMAhArggcimzLuLREms2SWhnB1x2LzkNkeh7dT9MSc3gVxKEtJPgmHP8f5nxvdLfLowsgTg27w6VzKq",
  "key21": "3bqC6dDJfYCiVXNaxSdnzcYkQvCzEWPFVNYMPoCwjrCd4L7CVwMYDL11bW3G5MygqMB1Fi9KL5TnejoPde9WsgB",
  "key22": "2ABY63x4A53qZVTFj3Jy7Zrrvyn2axXTnywFEmLXVgDR17vt9dBpBu7UeSJr3cVqC7SNHDkWHt3WcdpKSGc45fWh",
  "key23": "2nruSjYCo12FjUD5MgGSg8n3NoEYw9U9TxiCkfgQxHq44P6krDEvLNhJt1s41KADGKasYjJNo6WYzs6NLWbpZNgi",
  "key24": "3ugmvi3tpWv1xRExRnXgS4b6YHHA29GEtaebaH6sRmGNxniPtAg6wpSyQGLzdo66Bip8Hza48EwY6C7dVK84wQpE",
  "key25": "63zJ8okLPaydh2i8ZqVncgi7iwpPegc9Ke7sMNKJounEmZL3vSf7KMwEaJVPKFERiNAtkzR9hZ94KzQiSvEJPbdA",
  "key26": "54fRgwSVDv1c4FBiiezU2EMPQSw5WCj6aAQ3Wcm2Fwke1dtPHoJN7GMF2GpYiYjMSKEVkMBJjPmCWivHZ5aZ3D8J",
  "key27": "4XMvDaskQsdwVoFwu7Be7yTR9phZVTRQusZrwbfUgmsW61bzXVSBSQjDYxUUE6Biax81yxsQPrukXbzUjMKZr7e",
  "key28": "2yJuXoKuHkbfuKAcxPotWKQNTnTPyY4Ab3d7Brcp7gX9h9R96qcUsWX7uFHYX85VpFmHqaAunxgjaf9QPgDoPDBq",
  "key29": "EtYjvjRXjftjMGTpf3AyNQSGNm3YbiCPn1k2mUiZLFCSD7e4fr4SkMqTLmwncXiAAFzc4yFwLKHHehRie2FMK13",
  "key30": "5R3NAXAPBxGEEr18LweJreNUQwzFa6MPM4LDvyM94taoHRbsk6Cs71hmC5b3cxqARFj7siUbsbF6TDuhpkFiziXb",
  "key31": "3VJEUD1M8cpk5gBuM3m2AYNbHEMjcbYYzgifsJe4GtBJMEWzf9CCCumkAZc7bnq2kcrMm6pvJzmnoBM7AKsna93U",
  "key32": "31Gfzks5onfboPm6VYJRqFHDcvdUbd8g9A5tV4NQXwLhLq4mn17pCbPzNHh6h1Sh9A1SfpA2BKfdnqmyQXgmCZSK",
  "key33": "5gJDKkMxbZzPb6kpHSMsdUhvDKDRQSzUJoexsDA7upWNYvbPJd5STLxbPfJgvKipPCujyY5QjWqjLnG3SYmRx9w6",
  "key34": "2NdyS9qJJX36R9MAwejcB6FrfJcUarKajkWoBa5KFN5g55hiwSPhesAthFm5LpsxJFQe3wbHRSMu6Jmastqu6Na7",
  "key35": "4yXdvHFrgXNgTGUbEZoKHPKFXYaR4Yr7jsxSHP8nizfs7ueg7N5jLNBqw7yjVhpBCSm8uNkwYjpiX1JEoH62LEdm",
  "key36": "2Ni1BhiHFvm2L35wytwVbuWRvAMbjLzVCLUPBpDWebRnBp8yULSB2p5D89dTdno6AhcoKjK9GL3fzd4vWKURmBLX",
  "key37": "ZKtMddTJKd9kyWUEbibrJziB63uhymYi78HaHaiLyMjuXQEzbqPTsZ6SLic2HR34hizaZJy6LGwtUpHGJNuwgpq"
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
