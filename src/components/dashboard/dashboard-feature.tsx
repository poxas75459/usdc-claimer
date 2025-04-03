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
    "5pB22jv3Rnj3Gifesoc85rbqew7BETQEBC21oxQZejBq8oFaBN7Lvf2QJkgpqV5KB7wpshcfhhVjCbRgqVeTxVRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8s5rFjaUXnaBoYzeC38rsYDJ1QdWuVD9Tk7U4N5BwEK27VwLR7kSMjpBDoVWd4U835Vcf4rfTqJeZCZgZ8tcW6",
  "key1": "Hr1NcGEiiNSVH7FPTs7CqhPpdzqKfPE6uXNQa2scatvdQy1awsGgQN5mfDBpHRGGmeEDhUfAaBjEBcXTnbMMRKw",
  "key2": "2i3EQW69x9QSC9ciLDTTY7guzEnFPFz13Bodb4K6pNt5ybF7Fyi8SGobrBdkjhgxHXmQ29V8J7nUAXLVfNXd9QDA",
  "key3": "46z4uoaRGv1G6NN7JuinvpmSMCSW8R742QC9zK4Sxzp8DTZuXXUMufCAmLjdzQd2vSH4PfCAgt1ADFxU1RXKavrF",
  "key4": "PVFWg3hWGnuCwvDi9BmwrajVvukCFDkBGWQ2Knx3Mik9aLfn84K2gTT2kNP91DdJ1cvjJqYLtgkbBMP4EF3Y8HC",
  "key5": "24UiCiMUz4vKe9NdzjJg4qQqkE9vJozySf8mqafXNdQmyEVSb2BZCyVwpZsXYEK3xQiz9waFumXAhHc7be1sv4NV",
  "key6": "5EGh1joicvXXL5z4tHQ8UECtwbWZwop1UbdGSgre6x8Gb55zkjs4ZSAeqyFhzZJF15JwqhFcWAnU6qtuPkkMaxyF",
  "key7": "xZcbn5tpdweNCFmLFxEJSnpLJuozfY4Jb6ZDcLkQy7MRmkhB8NnZyCPivHm7nofg8bbKkHfm2ENgUPGECg9wG3v",
  "key8": "AKL2av9ef7GTpPpHhRmNd1Efh2EzpZzJhS25USPWhpbsbd8QSomM6YWSwhuvJkdPXtKrWrEwZfoorg4y4cCatNU",
  "key9": "39V3BRsxqBrrLABJbXnwTCVhjn1trQiKgHLq4i2r9MT4GAifdznkUHgy9NkiS7UALAxX4R3c5uwJoVGDTUHgi7xD",
  "key10": "4yDSgUsm5KzH33SyQRan6WhpJ9DFwko9S2uZAJBsgSvZa3BKTmYiy6twFCsmYSBLVc4oG1L49nV879PqeN9KWjbA",
  "key11": "hGEAedLxriD36e78gz1F9Xz4ApEtnoJEPAtdeL17UuoNtxXYswbfcMnConeXrjnehtxjKvNprSLjbMqianwfy7u",
  "key12": "3uczSyebxxbCV51kdViisPZCpRND6dWDBU8ZJEHmew7WQdzF4Zd9W25FF1pyn1Ba6qLb7M6P2dr6aKvWdrddzDfc",
  "key13": "3mybi8xPiNiYopYjEzq4ZLzn1Gr71zBWp639Fb6M3kmfPsQKqKyxjeuQzPrTbcRGgQtEXj3eFYiVBSBBnzQ3Bstq",
  "key14": "3Ty8vd8e5DWZdcCAUFiTSjMPVDKW8sqzyiKjb1R2Y9Wq5d6Y2SbRS21iS4BmX1eKfkvU2c5UznXrcZswpLBuPppA",
  "key15": "2aojrAfrMXsYchwagzM6L2cd7T6jz6kpWXWvnc5WPoSWAzi9XHEuj8VAZnGb9vCgJHksYc33W577Y5LWtEKjeSGn",
  "key16": "b1tYXaELwdN46gfKyLkfDXFxVQKauwx8qimgzesznWFLnBTVS4DrP84BGnRwY6gpLYXiTmaq7WApfUhcn58H9yi",
  "key17": "4h5u9sDy2WvEDnAkzmRPywfqzvudYhjZJEiy8F9uigrpgemSzrtJ6gBjVTtbnRqUhCSJTUGL6zCMTiBftmMFacGt",
  "key18": "3r9pezd658V5UHG35pNsB3Vxe7fhTJHkCrTSEVKrNB8YSWc2WEiXw92nkw6tdK7ziSmWVyoyn9LT7mfDuTvhAugi",
  "key19": "2wjZAg8s2CrSVahGkX1VPBgjerfKAWNEpisT9aMZzHx9aW2noEPprVzmwvEWhvXZ7qjKqQL8FA7suPbuaGMPcnak",
  "key20": "468jpT9qAaidsnBd2LWDETSUxnmdevbWSC4foc13WCwE5FM3E5rdjzqsVFETaenjdWX2diJwBuV6Eq3A136C13tA",
  "key21": "4xrjYnqzn2SLecPoNnmmaFmLAW7sCozkNQ8dBfEgFFQHqRd47amck2ZCMdphJExDBoeZjMctZE5RggyX2QcALdFa",
  "key22": "44cnTNFNvLbhdcwXTyFsBRGMz6dKXKfccVLebigPPMNmViHiQUBN8xxFac4sYk4SFVYSFNK6gLxyhiMF4ftVseJX",
  "key23": "3eyUcrbc5fSrL9XyU4hm3nKA7WaZwtzXWCocxNbisHCNFBKHkXTa6jyS4EBAs5ZUV3nKQGabofvPfbEPBKe5knDx",
  "key24": "2fnoFxTDEb94qe17m12UprmEo9x8VPpyJ8FvnMDtDBNYjBL1kg9LrBzwHZUPFioL5qzLpZMZRdRsjmBrsVQFpb3i",
  "key25": "2QnUBN8yrXZ6DbTfKCCDKaKREiUKT4d9q5zhjMxYkhfUnVS5NW3foyHprE6xDtShGUTTjce2e8kJg1V11oHFHs4a",
  "key26": "4dS4R2vwyc889BaeAuNu2pZaidaL9o5h5Kyh9DKbktBPkX2Rg5tU9FKDtBMJ3HxNzrxE8PUtVb5tXmQf5fYPAhKF",
  "key27": "5WLVRGsx9pdniqEqxdyLaYhc4K6B114xuFuGWrRnJnX6SogqQGeU8KCHCENux1vGBYz4nY7AFeDtiZ75LsjyacFn",
  "key28": "3YhKQ1RJmNjru3gGfsNKKVVMLLSbd3NqDqsrd8P3kURCBsAMfE8WJkp8ydhwj8LeGLs1j3J4aPordjyJ9YYSWY5y",
  "key29": "4br1QANgfmBco8geWdVMRrdcArMGZyqgGEPCRBUMJR9CRA1fnyPcyr72qkpuK1TLp67rBBSAcg7pY4PSHVKxssqk",
  "key30": "3Jp8MFHk8mTj4pCL5o32utnNQNJidxLP1AbXYohfNsPjHncHztXMp1Jmc8ikZtNELcAWpfL9FAFyZ28SMvbnBQHM",
  "key31": "2bACDXGSJeKP535AT2PP7GTCC4N6RJJZ71ZXVvmjjdMaVGFbjVSKorANNi7DhoGPe2hW8rVegw1U3HNX4ciLUuoM",
  "key32": "3QQCbCUGuEWDyqAkALEv2BaZjsM5cPk7qoV9j47fUheafXRRb6Jhw9ZMFzpVM4RGTTfGJZJ3qU1BA9zYvNhRfYkk",
  "key33": "38whu59SrpxN4sKUpcULeKmBr26odtypgevQnPfKgHM57iWuNgTjzeHaUQUbe9jyJh2o6Net7YKcQQ2oCqEqTB4N",
  "key34": "3UkNkeot9VkNQjRrTbsQaorR2ytFGRWEQ2VJnk4svNqgDAXU8Tbav6F5mT361KeMsU24KGThzRiuN9y1D1CbyWsY",
  "key35": "2cuMLju14MpaSHn6QoC3U2Fd7UrEzZvHZon729z1kXEQ98AUNALDrhw6tRThhNZhMV1FgK92LcS8VYtufvTFsYW7",
  "key36": "36sdzgAYxauSvA45tECQZ8EQECP4Lm2Pk6hP16oy1YScFYQ3EU44nqRiR9gQ9dMYYrSydNrcHkcGVNgfARtHfdn6",
  "key37": "3kZftLimxi7eRTBW3daQ9dJGooEZL8cy5QKwynuFbVLHtMV6zajQL7Bp6KDnNqFTkhjKepMcqLHdQmmrt3d5EQeg",
  "key38": "5JFgH8SamaJoY7J4XoPmJKCJ9jEor1vUML81dkijpdgYoonm6caXFuXwNhVBQ6b5vsfS5r2ZCf7feiedPA8kCRYe",
  "key39": "3A7JS5dguyxSjHYmT6WhSqoq3ZvJn91cQ5zbLaL7rZA7bNi4Xjae6ZPpa7zjGE1YwwPziL13qDbS8VtPYzD86EUL",
  "key40": "3Gbq7WmnX2anwTbiRY2KLuHSfWhzHQqPj3RJpHQpbNkD3BtdaZmXaHgDWr8iyaYxg6wsDSpbMthFjWwTKqSEEyPB",
  "key41": "BGKiKRzff3kTXunh9hnqTbzjafr6iN36uHo2EKWmJ3NV943oGD8MMZq3DkpSbGFjJ2GvuPqS3rWUXdp9TikGdDz",
  "key42": "4kMs4YafEyvmC52aJUAWvvk1xCSuH2QmxdiEzNKE4Fy8BENAJobDxo6kZbmmaQxhqjRsAdn45AP2hJwaRtYgdme8"
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
