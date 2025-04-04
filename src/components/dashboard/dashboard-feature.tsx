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
    "5NydNrbxG2w4ocJyB76vyXvCh7bEpSG8uU84orh31zV7tggERTcXAuAUPd5v2N7rzUZRGU8vAwryrcdHajteGw6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5YVo58HJAJTp6LJicroWYeJF1Bw6bFLtpfy5wTmj3XzSAy23utwq7N1raypBAwtQWafhtu2HCEiFNfAf2vfwgh",
  "key1": "kUaEa4Y1sbXoNvSnio9YreBxDiFizyQAmUXZKyYjKqoftQeivezvAJRYPnN8jwc8nzCD2KeotvmkyYmRodikbtc",
  "key2": "48m9oqDL2SUQPY83a7Zi6dYLzWdReoVGhXaJYpqtvs6WDZgJZuZJFCo7eBMt9Tre4MA3vf6H8tCfa7bayxBnrL9a",
  "key3": "3gKbSuumX4KVvZF4yxi86TbTQmUwQRREx6SCTCKiY6KYQrBWsTNGXzZ4p4eHjzvfEMGnbRCtdEUm5KxW55ky1far",
  "key4": "358XPpskgfgXPEWLhLcReyHjCgykeBsQR4HthbknjmqkHzaH3c3o6pshPk99HWnqj4PMMqtndycnWXz6fWXwY9tz",
  "key5": "3HLDnFegqAncJSmWmrriczRP4bpSDgfdUGpBZ5y6Dio7BCn6SQcoyqXQfH5QarTGt6LETsubsixEXrs4iJxdMtPs",
  "key6": "5SwPwZacddtB7KQ8sqTWgZeiudhEDweokHhqN2ikdFEBDxtGB4qdFGpDsgipXB2uJgKx17PBfUerBjuJZN2JQgNB",
  "key7": "52kZPNGZuR9CFSN1rKbZ8TPCuRswYx9kfggPfPs75yUMecB4KfiTEwSDnXcMsyDSXd9e3d4r324oMbQ5SneiRJ4s",
  "key8": "2sjSs1Cvr1Vpz6w6Rf1qFkkotaWDSoYprHZtmZBmhrfrkpKNGCsQFGWjTEj4DXKX6DEV4DYXBiq94ucH7RRyR46H",
  "key9": "5UVjRGnAxbskZRCdH6Dd8nwWXKxiTwjEhByyr5MouSDWUWkTvDYPPyQXBVHiwpRD7RV8Andvu9iL3XsXRHLeBjhp",
  "key10": "4CPMxsZNA6aLTJuSDPp98ARhLyFoYL9PCuwwg68htH5sqEHyogdp764n2k7tQzfr8Vd16CPbEVtXpZwnGff9Zaso",
  "key11": "3mPrs1f3RHfTQcnXGLfGTeqoXJN4PjWs857ysmCur3tVYCwypzt9o2UeAuj6nYTCRVwTKiuSfd3CTkGC3hTYky1M",
  "key12": "5FYpGf1SrFXK61WcvJeNp2Raa1nU98UNNPaz7MhmZFnaEjJPKYdRtvPit7E9dU1SzurFPncUyaKsvCKh6aqPYT2i",
  "key13": "5GWqyET66cLGMh9BvrCGDHQe5mCq7TWLyp6mtD2dDXW8iTGR3SsB1b76KDCsAUBjP3ojVpxs1YqvtPcTUycDWgA",
  "key14": "YPwrQUjvkEX2xNB4hCNnQYp1N1VsPUNWouJH4bsuXiKaVVxyrKxCb7cuJevpMwKEBjWw1gupLghd1zGvzcfEFf5",
  "key15": "3Nzs3qyrPCyWFmgHwabkeEZEgvCoyvZhTXwYbx6GxjuQ9F63xPMrvdu3XhzA3mKtucUKhyqcUcz4CdRhxYoqg19W",
  "key16": "F1XoPNNveMqeFGBksFKDsb7SyVuTVUvk9RQAKGtLW4XYvkGPgDKjs8Vbnnopp1kfMRFnJ1xfx7oe1WzmLH3vL7E",
  "key17": "5mKRURq241qmEN3ZC2Q8gRe8bDDJ4Pu4gwrMhvnbpkWniLZozFMzX2bDb7z5KhxEcNPHRxs3M6NNmbtT5HhxXHBd",
  "key18": "3gB6zo5efUAMm6W6zByMTEBvF4P39XFqLNk1TmrQ7GdyQkSz6bGWHizGrrEfDakEfehY9V9qMMyqb6rPjjg8L47J",
  "key19": "5nEzrwk2N756vy381qGHXxnEFxXXXgRt57mvCYHWpN1zwaYuA5sfWbUCeBvLiyA6FNfSmD2E8fZCXLmyTqru1L4Y",
  "key20": "4xcCj1hopLAehUQBYyRfcsHssdzziFdB3WeCzmuk4rjXpcf5V36VHxnQW9LY4rb7M2TuJ5vxRZtCFXZ8jy6zfVZg",
  "key21": "Nx4FxpKz8aBhU2WgtjML6qpxYAWzTpX6Dw3vajhiqc7tPYyWXutL2MCw1SsU8RbiXnKs9AL4FKpXYQi7RTKUdsY",
  "key22": "kpoaz3yZ1JSuT7627GDbmifJQc2pC2iGbp52FTkDxqBDeBjEAc86qJPJCNxggd6vKAuUWyJP7eBgthGww642AvK",
  "key23": "KHkMErhW3Sfm8hcFCDkaDvRGwLNkXMHNU49phCoDAgprdFQmGjoy9U8pziujdUoZ1n9WD2xRTP4SsF22c5dEFAt",
  "key24": "2e8HfhJRUzz5njeHPEcNXxmsXbpetT3SHKw1LvYymYZw4hqTNFNowPwVVn7c4trQ6BmVHSWF24HfNJ8DWCdFCY4",
  "key25": "2TmZgCjRk9GQqvs2gCa4DttXfzhEkA7RouzRPBifReTXnEfJiir7EucVASi9tZwVHidt7RywVch2fzk6HKo87jcz",
  "key26": "pJAaG6sC1MUzGwgu7Uf1tPHeVQyKEihEcA6ArHWJNQc1xTm33NNKLswKzHKVrWzw82bFQ8zh4YHSri9tGvXK15o",
  "key27": "4ndR3FwjM7UQXy9otpVGFoDYuDiNXXqSw888FoF67LCrX8w53689i9Apj2RfDLeBrFKcnWWrQNENcuPz8YNDjodd",
  "key28": "2Jg4tcNaW4KdWy9oF3UfTHW4cZKuR8t4AG7HgUtU4oYQ52XjQFSncRUVP7LKpdmUc4CCnmoWx4KhWjycfFWAjDue",
  "key29": "dZGUGyLJGo5iWR8UAHUWRBTs5hybQRHFZajbDey4cwijmZfsCjTZyRGr9MFLFYtXZEvij74KdnCchuctPPnT2AX",
  "key30": "4H3QP2YLyEnda2Y2mQ9jvvw3kV2oeHydivGet5tBQsBqC6uEuY8eD6uetMat7aHmksL3guUqXEbPVCqztanvJAGf",
  "key31": "3im4cWYef3ix1d2nmNg3QKkHHgDqimAPoqWH8LG7K2TYQtxjcSou7x5fbKAJXuVqqaKpCfAxT84FqZAT6UkSghjK",
  "key32": "3FJ9poRSn1hJsZPKcE3WdbzavYe9rRZwZbuJgduTapWFWodPY5urkmoYphutk6C5M7sGuTq35f3E5qCPJewfGe67",
  "key33": "2iZvkwUicbaVfxYvfAGsCmqxcxeUQpMCBMXFRnxShtNYAg8Z3y5Bnn9QwzFZ2eBNRmE1jrXysxtjNiS7yMq4Tzbh",
  "key34": "41SzRMDV1Efc1Ukm7eLjS35GQC3TJVUQRrsoVgHD8ToqJHs7HSKJE58Kx6fg6G6tSTpTdBgsTVaprGaJmdz15joP",
  "key35": "3GAbkzSMPmwLVrq8KRzze4SHmEyW8mP8jq28FSoHguDbQgDgicaGLFN121583DQSMsnLDn3kC8fgWKeZkBmmPYM3",
  "key36": "2ycg1cvPx8ceXsToMZzkfWQuCeBewoacwoEzHsGqHQXZZkjkKJ8Nqfee5tUS86AnDFbcjUQGyM5viDqMhP4gMdWZ"
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
