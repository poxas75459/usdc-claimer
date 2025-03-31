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
    "2oLdFaRKqC1HseS42uZHfMFZHiAThBsjYak8KAd2195XmfdQSYJnzyuRvntC8Ch2HGfVCr4XCnBnfUxCXMaDFzxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55i8toYjpc1UFuWwDewJ2ykANrY3czGg91pZvEMtGxtm8jmntuoA26nZhm7Sk7K4o6aGH5be12vzAF5Hc6NNbJnU",
  "key1": "4JUFVF1dchp86pgPvvmwBSJiRhMLYUuBiGyUwQ9W9XDsM5h9vAxQchgUXkeePVfW5v14uJs7ch1Wg58Nyq9JGhhJ",
  "key2": "3UFp3dxuorrpYihh5jUcFdTTkKXgvR8ieDpk6mYXnE25YW27JfcSw547HizN7sCV8uHQ3e526w5UDkNrqAYRdQCn",
  "key3": "4yqYrSM34zW6zynTmHY5N77bXynDTRAtQmHiyR97vNxGk7HddvYs1zxiAFAVrB6jYPZvaDbkoA8MqauZvzvoSYut",
  "key4": "P3FBckSNEnczsfVWi9w3Yoq4Fh3L3d75hHZ4XEsiBec3Zzg3cVUSrdDxaqi21HVWn4pZfbEw11zMH9SC2pEdGaP",
  "key5": "5rmrCE8BgyYRcGqkxj6ZJZbnDUqHddacm2JXro3bS76PVmvzfz1dWR4xFLu2hinhqQQbDSoUZbenETMeHBtTTNNR",
  "key6": "381vwmtzYQ7aKCs9VZiDwoJpHueYPGwTDGuy5KD1oXcoR1Tz2BBJkSjRHodYL2SvsVnxeS2z2YjfkbJXaQsyjKn7",
  "key7": "PqK8zk9mHsncTTLNxYXgLvAa2iUmUTuf4rm7Ynjn9VQbcxxydjavsmBTUCntEquy9MEB2ETCe8RKgt6Cb2cr8iX",
  "key8": "582BmvsVeAu5qju7ZH3hmFGty4oFytq6VHvMrgjFwvN3dftfe6pN5CViDkCFk37yhz2uH7m1uycd99Zd5n32dhbb",
  "key9": "3dD3FoK2yFLP2CjqN2VkXfenK7dYt42uYoQJbfjQnytvnE17yc981hxKTfc9VBK2H3YTtZhdMMUSPTqQvtsqkfQy",
  "key10": "us1kPy5PDxn4ydPi5VNyKFypYjXBn11bmD6e9LkvgADTgtw1NkzWeYBQbD77fnXaGak9Gt2zDBqHMQr778SK4KU",
  "key11": "2fAbebcGn3kbCwHGs5rT6Lo15Gui1pbcdEmst8fvqrzmcAS4Ly7m2xtZeJFta7US46F1ikPW6JoMFkv7AKD6QxTm",
  "key12": "2SsMAja2by4BqvqVvqqcsofjAxrm4amyoGMJPvkBgrd92MrcxCz4s3D4x6hV8bZ51ZAEQXTZrtSmhCo1T3Jy9fyk",
  "key13": "2QPz3Xv5PYufReYM7eyJyfukB6hnUafHWFwQHhzA6LQSfugvM78Vdum8RwKGLf1rgndEKAQsZ78S9gzYkMJy4QWb",
  "key14": "5SK5MHLkKABez5ExhpbEbCYymdc95cmvKgxvKuoebp6jnBiY1czaLtiqaHz8WCVkDpKsivLAZ82ZsbpfW1CzeP4G",
  "key15": "5mpsLC4828Qwuw3zRhbdvdZDkaCthYS727nsUuuqpud2FTWu9HXbzjKBpvT3j3yNLxTSof8QmAa4gPnvkKCv6ncR",
  "key16": "2yiWyVDcKURHSZ5Hrs56dfc1bhELB2fmbaEKN3weMqdsik1Lw4PaZpLD1oCp5Ck4RDHhHpJhyDUB56b9LctPNsp8",
  "key17": "5KuEvmA6Dmn7fMHcpNQwzn9K12zMkXUJKXY43xjjnTuNifPpvPV9jf5tZAWF7YJWA54JHzhhCUS5A68M5cdWnqCB",
  "key18": "3gbVgTWeeN7PfS66vk5hQc8gPzgf6BboYDKMWu1JVutd3mm7UPNmftjYjFC5SfaAgxfsn6bVBj27gstVkHtKrCHU",
  "key19": "6vaj9ZKxeF9NKxUZwWFNw9XEG8TKoggnfH4wGxZbVuutcAvsQSv3s2R61rQNF6qsrvG4g95BpQQUsYYapKctruk",
  "key20": "5g4vYCgzfPsoSPu9r7JSFp5aixsQbHUaUjAMXgN6X9A8HC4xeWwARbR3TRP7RpubwkRuvk51dGuMBdCFc9BAUGLz",
  "key21": "26GQzQDhqqVBa9D9PnAdKLtoAHCZdRBGHsKKxMZFR4zXMGG4F62PhdNym4KkQMVfaq8sF5aa5EAWTURBhBTPLe4g",
  "key22": "3eGEr2bmykpsWxx4q2aXuebXHtL4GHwQm6kK1A46N6rXBpjcwDKC17Y9mwkmMYY5C7pXeAhfbFGPQajzPXkQQtaN",
  "key23": "57kVchP7CqGqstM5b6WCjzjkpEUSCuUVycXreLjgzarx61Pumy5RjRNAP57sWX1YutqLscVxABcDwBvBaDPxZ7tH",
  "key24": "3xEbEb7CcGEg6cCHzKrwxfVYeANMFncafAMt1MgfnuyG5zwotRTDLR5bhKjyPfxoNCjQiwXU3F9oHfGjHfdioi42",
  "key25": "3ULcZim8xugQibsLP9DPMvDTGXcsSmbkEoZRUekNke9G4CSjYJzRz5FRNV4fSouJjUkCLvust9hykeLxKHMw3X3b",
  "key26": "5HuQmQZ5nbHLAhwDk7Qh5p1N77PJbyuMqX4P4hjg3ajzjXr1uGmbxEjjdw38MRM6z9XEHLZ2L3VBNeiUCUm7hCru",
  "key27": "4RQx9XneYbxhTS5kvAcCTEmLxcD88YchZbBdeHYZTMAq7XvcSLKhVMZ3cDNWp1nzSrFZdPNifhoPyniqx1uQcJii",
  "key28": "2XzK6aBi6fkRoZpGr5KiH19kQtH5WTaxezEQD36sEV4i7jYqm1vaa9yhbVwiahUwQgBVbqMbHTunVyLzquu9pqsN",
  "key29": "3G7fUtTxxhZhyj19EvoX5fN5jwGZaE3bRZb9aijsZfMqdE9bYLYNeQzRQGhhQM3RjFfjmReWXyTKeNE3AHbxBqBK",
  "key30": "3aP2i9aKqeDdoJ7QUUSjQW3R9p8oV71pwMjG9TY9ZK3HLpD84h2tykhk1j1QwPidvrzacntxDKy6LZ8b1nCZKXuP",
  "key31": "46o9ezhtNyyGVy3T62GH9NKga3GLd1vvcjq1NtqbMLMxppqWuuSWfEPboox2FGXyHM2jqa8wf3mdt9uM7d4F9K5s",
  "key32": "5LcuHE7FVrknsEc5oCLFLKBUdJrxqx1HsiLcdm8vWD49oWSiuCLMcCXwC9wbFSXHbUDUHbm89ynsp7WDMBGAL4vY",
  "key33": "3QQ9BbdFFsu3HAr9QdWYeF9Fbwimh1uyAoGvpi2eBMCAvoEtK6BNBuNRuoCZorSPexHnLGBGFrHiS3dpdoPYgFFL",
  "key34": "vQM19BtMkZUn661VY6YG9esjCvvXQe2pq7WRUaPkXqZs9TmiNcxcopWVCdZr19v58fwcQ1c8PmMd3MpTF5SHcnn",
  "key35": "4FPT8eM7ui5haT9E1KwjXi2AK2EfBLkRgpsBLKG3m55B8xZa1DDRujtwjUcnscFGi67GLvPSP6mZyJtCfkzhFTSE",
  "key36": "2FUnq3jFaiTQUTbwst6mhTqJFpeN4Mx4wJR3LKHybqBhqGVN6hC2adgamV2Lgc9mxPkGNfSioPzso3UKd4AC6Jqz",
  "key37": "HZXKrasShAzucUfaku6NRkNK55HrH7kvneodC5aFYMmqCywkNETFnuL8nasdQMhdtUA2kwqdNtM4pq6KREhsBDB",
  "key38": "WzwQsJoB7VUv6uaFQRaL5Gqjfcc2ZwvmdGR26Wg5dx9ceF35hwZyLcCkfzYwC6MK6M8tj4KJmAHEL4akiuzpo35",
  "key39": "36rrVFKV8bKfdEH9KEqQsCX8THSUf7N4vTvnYy8LBdh45AEi7bsQ8saMuVjMUf6kBAUoYDe6KFSWFKuXJyjJA4HS"
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
