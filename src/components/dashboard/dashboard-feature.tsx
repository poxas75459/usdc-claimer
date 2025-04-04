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
    "4NcidHpBTo8cu2LtGz86Bc7vERkjSfMP5agq7rA1MPfcFBsSNG4RzSoLAsN4yVBJ25PyheTUB4UtsJ8giu1qTuHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUauGhYHA2eh5w8ni1aeHtbnid6p6RNF3S8SQrRHCQFwvff41u1jwRZnHki2PTBqcCw8RDx4SHGQUG474Y9Aco1",
  "key1": "4CohV3z2GbZK4SAkGhSxaLtM9W5cbpeHvDN5tY9Nd8uj47pm7dqZB7KziG4M4NJtxCEf9as3W6FCBACZNfYMHyMy",
  "key2": "27ztWcffsxHgPvgMVUR3Sr7CjFM7NNdytvC7NbzgECsyi8ffzQTGxvXrKzxKgphJ8568WzkSNQpuRWfLHWtK32qP",
  "key3": "4FsS3CmffqZwGCiJgATPDdQcD57rPTqfPR3QWv2oSNtbYUeowJ2WyUZsvKJnpj96BeVD82xDKGnpCTyv7Qh3L4oD",
  "key4": "3EeXkoqocU8sq9jFDTi8nHTNPVHCFdma8CjFny3RusYmRTMiJWaNbZbTnP7iPQkVtWDjJq8Nv6THACxqFqPjDvRq",
  "key5": "417VPS5X6PxeR6CsxVXP5Ls2finEKVmHwNpUGfmWGUr2jv6k8eo3ESJ4GHQsonYZGtGMTz2mN5RuRwDUzMtXLvV2",
  "key6": "5biCmBySGisnqbUfft1WBM9uFPKkCq4LUDewKmicFTH8HSdm1JveKCNSThX6epjFBisW8yhPawxiz62YWPnavkvh",
  "key7": "2pyJkizBVGD3qxaL2Dqa2E8HP69muqYNL5NcfSadGdAiktEKWCKnxGPkty87gRtJdHW16eJZ9yAibz3JF6zC4Br2",
  "key8": "26pXCYJKMxJYQLCwhWAqgrNNf5gh1EiN37LUJESWwDk7ZrH6trC7PhDQce9sYZ1mPBKw9wK2NQrj8R3uG5j1dnCA",
  "key9": "51MUPZ1mhecchZtNjGyRs2CySfVjooxpUza1YgzBonwHK3wKCM61GunSwdP9pwuYeiwDkxs2gKzDZKUbJ8rHcjzE",
  "key10": "2KDf6RVbEePZMyy7xSoAXVong8Eckq14jNH4cSrfnpsEUR2Km2GoMNoUwp4EHV2B6rzybgWicpq8DGmaRhuZkst",
  "key11": "2Z9QofQeWqZDCvDJdYqdyZG96FgwdR55NAQspWYDZ8fhrUskfT7cp43Q4RTuTHF51oW1JAqZRoDLjrDqiWroyp6y",
  "key12": "7Vdnw7z79nfGD6ZyGQwAsstN8haXeMssnpuieWyzoQrh2kfrLkTDqgrgfF2wut3Nf175QtAqMAGNYSeEbQ8av6N",
  "key13": "3rnxMZnNKYfkbKWxEZVVYrsndv3F8xAU9eMnF1zpEccTGNhtuCC3BU5SSuAbUpW5qE2QTbX2pnJaQpASXCuTiBYb",
  "key14": "3Y6CPH86gVyPC2GXHe1vUQiFB552Go962qYzMa4ULTqrV8sKztqitsDgDLFNeJdFHFSAfPWVFYuw2JmwadkH2VX",
  "key15": "4Jtmxkhak6QqjbRssCg7ZxtFAr9LWRTGCC8Y7bmkA6sDSkzkH49qyh1berpzTZfy8LWykp4fXWmkm5sutWmdKPo3",
  "key16": "61p7BXwvfNFHM8vNYwPbCyYjuGCHQxanK8vcuFSQW4i2bLFJat6tcWjcH6pC1T64CKBVnxkK7B9KLKsD9Hu1cAvQ",
  "key17": "2HptECQU28Sv95wEYP3DfF1Px3Gy2XRufDi3DZ3hW4R8N23hsy7g2dDD3nAqWaHfjz28gZdsocEV51LRHQNx7FwH",
  "key18": "9djYisSUk2Bhgwg937S7NAi5Gm81KVF4tUWtiStRksdcWc2HyRE5Fd71DczNSucD7HeJofhVNEVLGihguSy7RYP",
  "key19": "5stHRRDrxeUAzXqRBzf7F7gkVtCHYEWk5gGZcvVAcFsVRnZudrjCpCkXQ3atedshiHTj71JuWf2L4KCbvYe6A9VD",
  "key20": "rsdCyHyRYERYxtZTqm8fiPAwRgau2rykyKozRQqaXbRsW7HjcxTQimr5nSMNZLLeTq9NzcEdZNespWoqkrr4wES",
  "key21": "3pedDeV54fsfAp2v8rn5g7BMUQP3zzfZM3jc18n8zoWCcrF3sVYMQtxMWXad2UASM5Hkovh22JVV2ctoo1QBY2QH",
  "key22": "63nkFMkdy5RUJQAAC4cmstdsqK3XsHuZBbusS97QxDGdWMoHUYkeVLHTNDuhJq6pWz2hWSUgE7bG9zaVvumxieYt",
  "key23": "4vqSyjCNLarhPMAGh3nEhf65ZbhBHm9a7Bj52AGMFKma5t59n6USM7QU8am2hPKsK2BTt2GNNc1836o4YCc8xXk8",
  "key24": "2nTwoP8TbAHg4V24F2iG886g5EyjqJeUuMcGCJLAhc2BrZTZBZqzpUUkuv9LTFRWMvgmp6vx5NpjXTq5Lm1T6CNx",
  "key25": "kaBkUbXPRqRpx3WCoxx5FXGVqrAf8LzsASj8CAptyEeFgZgK5yiAXNL8ggXwwyj9h2i9NvKVAiQ4cqFjigYTRBz",
  "key26": "25b5sPKEy7NuJ3pHba3pJKXRozZ5xxovEWtQ9cCfeFX4avLhprQ4XgzHUjFcQtxTvTQS9GwuTQhGfKK3sSutK4uk",
  "key27": "5hbxzPgyzvPE5EXMMg8shAAncwicv8W6j2vhWUvmEnqRfL8LudntMWiyfDNwJWHHjKdWi9CSs5D4zC9buardBqp4",
  "key28": "3cqVprC7mvHAZ42LirhNyUsyKrUtQocLPKqwb87EeajeHdHR456a8dVTpsh6RMUwf8B34ypzV2UqSrpDUD4LmhmP",
  "key29": "4RRAND13XGZhHBGa1qTTBqk1gjvLWrhrBoPLnBwRG3iq5TFqpdg6PvkKP8WmM22hupjrqxQPAtTMjYzcLxifsQb9",
  "key30": "4q1NLkvJRR7437wX6pMB6Fb4Ez5DPLJXS2NDcJqdZQv7QYZNTstYc9p75TBxPoXqCCGa2JZV7ncM13eaUi9JD9Gq",
  "key31": "MS92hUVhPV1UdKtTVMXMPL7JusENvo7v31T1yP3BLoXAPK29KeG8jtYV92z8x1KVMDKtYt2LaFkiD2sqoRz97fU",
  "key32": "2npmLtaXv3aKSd7rG8R8WESd5HpDVyrjMoLGSPmLKBivwu6yzLycv8YakJrUdWUaLKj3ZvYVWzhw81qBZgC2qNYM",
  "key33": "57yN5eCD919YSXWfmp48Mpf1zHZdPznfv6kAJFsrM5y57rqFGdn2Pjw75pd98ELM6iyQEw7BCBdjwy5GJWb2V4LJ",
  "key34": "5wXtYczkGYZwm8APoNSpu2bDk3tSjzEkxTgkiecmWCQit4giLsh6owtypSUTP8DMdxJCVqiKiVLjMW2BLBEc7iWy",
  "key35": "3ZV6Th6L1UMF7BDcK8k1X11huPKcaZzm2gTxjXFaeKWHpHFvGcbdoKs2riQ1oQwJ3WDv9U6a8eVZX6c8HtP1PTvz",
  "key36": "2wWWJkLgmbQC57EvVmQ4buDtH5v41TXXJ5UwrmM1RcwqdxwTe2Q3eG2eGkj4PFZqGtXDg4buf2wC38bAPAMqKwDX",
  "key37": "47N8Gz2f1eCbnmJPqyFxBkoEnjLQdRZFFKPxk6tMTjkWq38dgWg1hc6yf4K1SbjJimkAtfHNUUiVNbHXYFddyCRo",
  "key38": "6469hMqKYx83HGRzSkxvotHBMbyuC2weAsCpuhMfXnqCWwGUaC3bctULVvw6UyCkSmQXN2qCZZumm1SdRmafETC8",
  "key39": "5T9ySDvpyghcpt5FJjWrsoKzFqY8S8jBe49d2QjBYBi4T4xXYBggLog5Y9K9eZThjbzHPyJpmxJTHUb4jEPabwSR",
  "key40": "2C6yWhRAYSoJMvNAjS7BngtRamFzscMAAXNQ6RH3b5u8GKZ4tEFn2Xjin474nj1E2CaBhExQMBifY4tMZPcLAceC",
  "key41": "fePgPVjZ1z7zFD1GVd1NmdefWKhbW98pxMqcS588NAogRvm2QUX2fSFJWmm9DEVFk1vUzEoaaw5rcJL9kC6hT3X",
  "key42": "5RS9ArxS85QMnWy1DhKTGWFbiGRT8Dbov7xMujpW5CpGJo55yz22aCeemH7nULC5drkQXp6fBrmG88TTD1bEiBJd",
  "key43": "43Xdf2JY2fKfwx2G9bNNq8z6fXBA2LyLKyv7mhAq9ChBRfsAgh4DP2aJ84fTktfL4eqeeJToaxmwJKkP35yfK3T8",
  "key44": "59E99jG9RCXC5FxqDWPVmFjCRL3bu2WctrFWnG7HzBDz2zPFRdKV5PNu5ga7DhCu9v5xg2K4ZViBMdQKhipurLs3",
  "key45": "3RhQuaCVVWSpDUgAtQo9NF6wXGbsM6gJrsaAYE3rckaNS7e7U3FrjLiDderTqZ332DRDPfw7jnXPqPoZT5aE5hsD"
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
