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
    "2efeS2SyuiG2WpqufFXivpR7xYa3vwhN875SiJ3TJWSrS4p3fdxZfCQpbK5Xsp9VEGu4DtrQetrqZbgmXgTJXELP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtF3TXVYMDf76KAzJ1D5fpDeLDxkQNgvMHUax1hREfR99X7dpYssVaYsmQ4czv1QZHdcSe6v9nEWCpEo3cxcAmf",
  "key1": "2UaiEsQecYXpKiD3axajvUh4BKVvMD5WyozfLTREqLDSA3gsrQKnYuxyQtCmzMFDrYgwGe2SQEHKt84RbnZQ3Hv2",
  "key2": "2JE7E4WAv4P6U2onEXggM4S51Gxw84DXCWUUPzjrUHfYG9fMkNSJJD4ZTFwwYsD1heFqBTkmS2hutbR9ERANigHf",
  "key3": "2Q5f1pqhT18cmmtWGeb4QWsV3Au7MrvsYQBGP7ANxKrW1UBYAVbG4dxNKmFB6q46dPTUJQgfDSjjcZfkExY2ro7h",
  "key4": "2MezNRQF3kRtSqY1ExZ1q414gG2fLQ4U2vz8twpMb2pySkZgbzW95fCh4TmK1s83qm3dCxmr1n71Q5PhRKKyD1yh",
  "key5": "5WqhNEG8d1qwqEmyq6MTbiiCE9mfw3FLFiaaoFak1Wx3hzfxjr6F4L4qiRKziCx19YncyBytHTKB9Nqbm8R4pXrk",
  "key6": "22WNmCQ9TunYYb3iL7rW34HbRAeLHQWJ9rsMzKpnktktWihUfGWjceJm91zveop1XUsSw8FhsdL1sYXww7tpeztj",
  "key7": "3sNtayv5hS69RL3iTzfnkEfxCB6TutYmMKVQJfAjZVdc7R4gmeeVq98qQiqQQ3HEt1byn6dSEnxjzR8E6yXutc6w",
  "key8": "Qp6BQh8FsHwtZuKKfTWDeg86fcFGTdSomJmAjM3oWnSzkZ8XnVTjXkVoymTmiAjtN3CmycRHboFxqYkwXCGNbES",
  "key9": "uXU3xesuNkgkFb7MVvVnyFSmYsE9rh79KcLygigosPL4Hf3CUUsegYdUDFacBtVhSdf1GVt3RFcV2yN8E8Uy2Ph",
  "key10": "4TKrRQ4UJwTuS2TEY2VTy5dpih54pqwznYV6KEXwz7jbf71jSYpyvF555ZspJKTnFv3VB6dj2jNiWUepwqftouiw",
  "key11": "2hPtziYsjwSVttBhTTQZ3fpcWhJFSB5nLoHmJZiYt31wKzQZverwyed7HG8twKRKAWH3Bfs7ZatLaX7xJEvx6UpP",
  "key12": "58mJ2k8BNzhXYGGxrtMha3wRi1CP1f937PYcSjLraDayKbAxJrkusnC7Qrfzopbk3aTks2fNJ2Q4pR2uYpA5pnou",
  "key13": "2YjJenByyEYEmfRPtA8ysgQU2YzTomcd2YvYT4sRPRQ9HGxXUh7Tz3Hmwu4bgPMJS2W9YRrGhsfh5txnjQf3EkXT",
  "key14": "21UswsgMbzLcGRUeNvqNCw5AFv8UP8prQXcPvBUoUeLRNvEBfAvZad9Xbz2AL5jpvhMff8hxH3TDHPHYrqjHWWyw",
  "key15": "4njMnGhCFswtq34X6UAZhWs1Pr7qy23V8QdTLc8W9ChfFKmLrJqWiYaaoZRFfcLQKyK611oJeZsQFYjxbVraZDiQ",
  "key16": "QzTFzLMPLf1BiD7ytAdwp1Q7EepTtjDvDjUR6foijpdz5WyYyxENgbhtT8ddHESBnMxoTSf2EnSYGCcewWcB4Ze",
  "key17": "3Vr1mx3JrSPcbLg4gAN6ir5oHytvmhLprdAaPL682zd6RyUMDGsaAXXnDsFZHy3pnF2kNkEYndCBfCvqvHJ5gQVv",
  "key18": "2VtqJboimJQHdracno5gv6sGbtHGinMqNSsTVkcsyvqUNvJV1GHkXeWVUmNoDfRSsiJdNbo1Dj1Rbuzg9VdBkHut",
  "key19": "4sx1bj2u5qwjekpoh15uifJk8wC77LcT6ZY3LT8jdQRigf6a5Wi55M9v3J6DZtUvVf6oTaJzEC1XtSG1poK6Gw7U",
  "key20": "58SCgVGSaLyQKuYHFwDxzoe5ryQDtCoFMM8f3rGNRAJhLeAKtfqRtvZ3AVWh3vqXVQtKLB9Jp4sJvCatb4Ar5VEN",
  "key21": "4xuL1hvVmvs3urqBu419nvDybi6AftJ1WDRNA4dM6wcMw6V2i7xGqfnHXeFz7k7wNfR9iEztmH8fB4f8uUJNbKfr",
  "key22": "34kRt9iNRWaFfEQMGBc4kKziX2wBNZwqEcK5Ta7TYq4hSzCijfmGMxfD5p93m2jskYQeDgfxLquhArkULsEGRY95",
  "key23": "3rGFBMC8iFQXedMeVi8L2LcLPnNWNTTHC1YqVKXfqPD7ZRpbYj4HrUU3dePGevFxf4Hr71i4ZXHydq6HqDD7jQjm",
  "key24": "31aTZwS8abdtHGvZWCRxBfKYpVvR8KkYxz5LhLoTtYvknCa132Y49gN3rthYqvvNx5i4QkQpUKsfjK4kqGps1HLy",
  "key25": "3QJhikcCjnf92NHAxcasH3fgeAGPtMwcWtHWEYr4w74onLjzHKDPFcCdj2hLGNwvkwFa1RLxtphBbo1igStdepSn",
  "key26": "51MnRZ88XLsCWWKuChFPigHgjHtBzvvjDTmTW1rxtvUKE2Uf9mu8G7Z1NZxKSsVxTe6xxJRn9GL7ndVLHu4aLRBx",
  "key27": "5BGxPCABjUSb8XF9St4UV5HdLjdMFZ2yEUzFn3QiQhPWCrtwQ822a7zM2QDQmtfFbEVzz6cNHVvk6o6MbvoMB6e7",
  "key28": "5NgyYexVmikdacNK685PP1RRVuN94HUGacXigKTxGzFY3TdWjs3V3FCkBMjLNjc1RgDhNaaSmTGAhovfkAeD8Zpf",
  "key29": "5mPXoVUy5zpz2FghCxZ6bjHhB2B2UZAErJX6ju9UzFnuw7KNVfg4Ko4RgyLu7Ur3JgMpGpDrXAhffs45TAM87e76",
  "key30": "3V9DaXHdi6Lk5VEPaafZTWrtzfM9d6dpyAJmvoTDDgeqB5rFjYQUFgCGkQCdcNFs47iDHBRdJEL95RNXszt29MZQ",
  "key31": "2FpzBUgmaRYWRb56H91sekmAGagXHB22UuemQdXa2oitTtfvRK7FJtNHp2wWDsrETn74vAT7M3xkVaZmEv7ErB2M",
  "key32": "62DDeEdrMqHVpZhDLVYZz9LErhZaKirW1X9dJLi9gcVZvJiMavcmg6XtzvKRUCdJveTqAnX2fraqvRSVkLAqhoRc",
  "key33": "xQ8wKkvY3triuyPxT2JmxFzPiNGy9RDJqc2z9cXQYXfQmoVicYDwqa41Mm9eoLqS4j4N28VczkikBZHaQ2Wxbvx",
  "key34": "5aQD42GQDMWR7CZ4DJegcEAL8doDNcfrRbG9vUo1gpB9ek7xNH9pFcsKQEkaCLokdoH7g4rzcgFyASAWSmfVE6ek",
  "key35": "3za65fGRACL5XuC4YwABo4KkD8Wj1LkXLoJNUazS4T7rYEAWNBK4t9txaki39noyytUeBaux2JShkya1X3GhSk1P",
  "key36": "4QyLKgk2t3Y7qct1K7cnzCLFrDvfBo1NY1749VNsQZXjyH9LuQdkwf9SaytavWXUHiSeYSuNzvUcEoNrVyVKsjz",
  "key37": "33Jgnt4R1vqDjy264WtwarzPEr4kz9ZcMqU6W6YEs3MPAuCGZwqFhQV3DktwHj75TeNKpN6ick18szv7NMocZAL",
  "key38": "4MnQtxNMrYspnhWcoc4iPGFoGWCF6d7ewDvDJnyvLyULYoi4fo9GyzTsyKhnS3ijYX6hWPpSTwh2xaBcYaEihjcx",
  "key39": "Ey7cnaKWSHR7kHRmpzb5RyW4kaSVtg6UCsU44H5P6mmrmuMfroEUgFkuKubnHPDcPBhm1tC9KCsu9qGujhy5p6S",
  "key40": "2v3ZoiTs3vwb3mpqWJFdFkVmLdJ3VzNFf8jr1WBfsgZRr4mC9bewJmcgQViWyeKR1BuGiqhBCYk587TNyiLQJiB",
  "key41": "2vFmzaenhD2dk9jjyD3k3DxDiWmRfqh26TR1JSJGStFzdXJahA7YQVgHXeagkSVby9KBhgaDaxv4JHT83v54oqYf",
  "key42": "2FRUzko5THpmwTfzSnVNB4SPDg2y6hNM4gYjVkFoibNdr5yUKYDhkRTS7ywLxfavMjKrGXquvP8eZDwvmZdZHvDt",
  "key43": "2D5bgDPqHsLqCr8kLNV3Ru7NNEnxtWsjqioSrjL1PfPX17kiKSZEhdTy71n1iu8H8xzTDVtzCUSMQBMhYzsdYTuk",
  "key44": "4ZtyzfCiK9ks48d6ZqJ3CoQh7Cm6yzQEVF1aHrbBdQfJzg8LzhozGje8KzsDofKtvLEnBoA2Wv2xnBo2S2YgE8RC"
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
