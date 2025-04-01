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
    "5BmeoXEncNWuD3K9ZpF2DyoeYGHYN3zFKsWY5ZbK8Qyu8kF67kQ8dC5tfSpuQebDxBi1724TAvCuYKJ82ssdPYZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgK6PcBe36j5KoNpf6djoF9qVuGtF2u2KbHKg6s8Xyxj9gXLj9AkZb7USM2xvH2Qb9EraH7NpzPxQbxw8csu2aX",
  "key1": "qKCu2TgE7uSUJCV9kkojbJkMRwfhWT7Qdnh7FacGbdWJvZ7xZj8633cbLMKdcbDCvBL3pW7Rc4FHmfKjJLvHTwd",
  "key2": "5YWws3baRKSYFVMUUa6fPbZBYmjy342qdnpQZvUBgzmrsQDAnDknqwieJWpgyQsfJu58SvwwfkSmvyyno2RVo2HB",
  "key3": "5rLdu3GZh9tKwqmh5gXBCk7ZXmp3USrt6Qigvs5s2oXiyHELVC11MeKp3N9hp2d5YBM6V8eaPEMYei2cJPEwAwgx",
  "key4": "4GK85xoua3pMQJzt1QvjNq2JcVBxLD69JtHHUnwuXoEegTK6tAiYWrkM9E5ErocFXxYdqPrjcGJvxh8JQyGeDfxD",
  "key5": "48C7PnhscLu2G6BK6GVvtsksN2YVKjSaMLWDQBkYttNuXAschYDeLYb4jGmDKMv8nfKxcx34U9voYjVoAR8CAkkW",
  "key6": "516yW46sShKC1oEf3jMqfEpQSvNHHvyWhNoFW9c9RseujHPPPaTHTDQBzVk2DgEeBDA78RFkzxJcAjXcntvCFNRT",
  "key7": "5dKmtx8WfJLjKpgYsLpR2VrkiY958atwEZ3oxihqqGZuEiKGMbHmijn7CZ7rWYYRtj1PywSb1tJUtKQbNNy1a39H",
  "key8": "kRtfMsaxr6BS8k3pb6nrHcTVnCnBpHDHZod9j9RK5Xm4zinHKmcY5Hii1vx1RJA4mi4aKYFwPoRt6er2CpGBL1w",
  "key9": "3TMknj39mj7X3rLqEGzURGQskYEKcDus6PsU1xiFfRYvE3RoQQXjZbxAX1VUct8Wg9CG3Zi5hbo2Zv9bRNVh6Hyh",
  "key10": "58VTvAADxL1xZsaqBVve54DWPdS2mzmu1v6p1wWPK9XaJhqmV21ApGtaBKGa1XzoahJiPxbuVepnHodQgLAogCck",
  "key11": "4wPmMAckzLYhRN4mbFDjznKGeit6iK1c1fMZ8UctpjYVfcZzJunj4HwoWykmo6jWXNjwC6gH8NKhfN1XmDjD8X5V",
  "key12": "4CK4fangtf1ah7mZKvBPwkrK9EQNKm7ttBitesakwqUZJc1Lcd2pSm2yUZTNipkemfe1NtD7mGrrUc1crX7G1fdc",
  "key13": "48SSsWhaENc43cAYAgEZksgDn3dsPztXmcsYiu9rcSJcyrqTPSNx67GpUZ7YygdvGjrHgearsu6mAtXpi74GoKrW",
  "key14": "uk9T1sZA1eXN5wLq2mPFe8MdpUDjqDkoZKCfRuprDoWWA3JTQ3DkQvHheLLAaUaWCVHjADchgzcfMQbyQgFrMbw",
  "key15": "31cADQLemzT2Ue8tav6omGMZ6iwCs9DWkUudkuVqkCJfPbnpKaFYURchrY6c3kmWXmrdNcByb5o4aoc7gf3u6c23",
  "key16": "2cy9nWkBeAqPfBwtCHENc6MAZeoccPREX6jXaiZo33KYvssVaHeJKrqPxdF3J281wBLaTwwb4ZBrvaPXvNAjQALv",
  "key17": "3LeiJakznT97QtByPZu4fRGhJQkNrXaWisr1dYQtM5FwJs7TRPSwrUXR2SqzPtcUTiZngJLCEofyAPrm2w7d1SX",
  "key18": "7k3h6v6XhiatYyRHcPUmNPp9KXVc4xMBYStd17XUYnDqdYcsh3WVpuRPmie7wDCC8PRbsifnPNfjGAwoSNEQ5Bh",
  "key19": "65RGq5hVRcooepSYJgL5QcyuNwRtSwciGpeqbf2ih9mJpVRL9N7zxeP3VsiSWEBeZBMDGijT7dsLNwDm3rWVE1Wa",
  "key20": "5LfY67JrxeCzYDxxzx5XYkUmz4vDYW9aA7554dtr1JF8RsoeUryVEgQrq7zSquyqCxW6LdodkmyM3gESS51aUSmz",
  "key21": "C98H545771awBtNonBxvs1Ge2X9DSvFyaFcZyHw5YNATLypgk8t7Wpai37PBkKt8mmqWNxDHNck3vgG26DDizUv",
  "key22": "4oznUjjYHL28dCQ5ARP4EDeeizHyxoRQBdtJAENSj741vE6PiRqqP1AFaGDFj4WySVZJbdopziBt3Vrj2CkikwkG",
  "key23": "3UTRjG7ufMh9pahauo8tKsGmLb9f54kiEdPANDniYCmRjCGj6zRphfCLDXSQfH1iNvEkFshyV417zHRzo2YURp7k",
  "key24": "3VExBLRrYYqspTVzgSpdtgGbwhTcRcQVPCBdjsyQ87gC7NDVjB36jDDvWCr7wVB3J6Pssnmr2HNsT5bvTiP8o6e4"
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
