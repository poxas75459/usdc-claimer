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
    "3UNXwudq2MBbQwu83s8HfvQ4hqqFb2o5bCnFnbxLreKPvmXwREVcHeNwU1dQVbDW6Ls2PvgDA87hc85CxnKM6ovb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2het1eiMnbZcrESzUXFX9rdUpeyg6dnjjnm1PnPMJgrXqVCKPEb4Lu3uK8pTtKcqjL1mVES1Hm9XgHe3cZBA2zwz",
  "key1": "3QUs1mBjFhnkCYoyGSfCyZcKbYGxFRDahvgha2Z2XnC5skoGSc4RbmM9qbPmsFmRUUYcn62bcLuLfrX4qcDaDLVd",
  "key2": "5XEwFPJyE6o8UVcsbdQhmjujNHshDanG4e5TvMsCGMHssfmWkepX2DGPUQJPiaQYqzQmJbxkaXHM3SJ659rV8E1T",
  "key3": "53PUZDqUtbxByA5g8yKVs81YZoa7ABvQHcfhHLezVeF8jsJUMEATHj34NGgVSXXAi3rTrUFksZFYVp2ZHFQZQBKW",
  "key4": "2GNRchnrMjicMb7MQWSdcVhqDQ2MC4SUyFYmnVJYpMd8PMibQYUMxBPaRpsFVe5edRyZ1DyVn25LX1nVmd1aMpNa",
  "key5": "3sotjDyqKWYsCaEFUB19HUxY2EsGYvi1RSs43v6Q3nPu6ZLi9qhVJZZQ6F1NokS7fKtt9fyDN6RdrQ1ua7KhRizY",
  "key6": "423V3hrXRBxmWCpTshFQ2iSr6jYzp6Yx5FFrvepaHenUCkQzoo6RHCx9s3byUU5KPFCEQ2cttq6THKp5kyCigVtb",
  "key7": "2QSqoxAzoNSvaJmUfvyiAV3JgF3keqicp5YXGBBiznbwMmqKyxLyqwqibVqmN19J7LfoiLnn5G5UMRA2fttSdVSr",
  "key8": "z18QrgkPJrkLiUGveuBS2SqSEUoyYrCEXha2ipZp6fmZ1AkLjb8bDr2v7kiWz1F7ZW6nFgsCAh4sADt6vsrnGPf",
  "key9": "4fWPRKxPuCc3FAkQBHth85tHn3j2eGK6TtRVswjvqqc8dRax2HYB9fnmkbcguyxcaYCjwahoK48gse915gghsfM",
  "key10": "259Cx7xoAUSnRESRarCsaojAM4GP9YFXPM9hyahP8MXUUiGCJJSkiRAyJFqUn3fMKewRvghfNiGvdao5AVKDfz8r",
  "key11": "573zc3H79etPVkjP71y9fetFWyiXpwacXwELUBoV1pE5DtA4KB4G7umetUDrYTUt5qS81ZaX1V3BqpZjeymZHwMk",
  "key12": "2W16gKfGeZZnWYUCLQpkeHzsRvZ74H5ibGKBTcgPJY9sUjdrd6nSdT918Y6Hw5Cuz9GeaM8NS5fBf8gec7N6hMC3",
  "key13": "2fW6BKohTvqmvzfTWsyN2MCDquNXAD9aKkPB89e8wrbDjAPF7CNqgb8ERQWFWpbfKfU68zdRZcrPrp7Eh6JpuNKU",
  "key14": "4cKXmtaetZmaa3Dc8xUPf8S8pu6aUmgBDerBjFTqomDm6MVMtXpN3pnpecfoeKqKwy7xtbXNZc9rk2dk1EpdvY4u",
  "key15": "5G7FUDkyxCcTeG2ya8s34AxuyYsKnK9HNinXo6icFY2ToQqiyqknM9Lx2jVT3HAMotyhokHFNskdJyEnFroKuSna",
  "key16": "4CpzGmDq1EJzLKEeQKd34pam3izY2kd8mfJcyuw7Qi2pg6tn9kCiyoZ1DvcoUMpZ2UHc6tCXg7VMhHWo4TpTeDPr",
  "key17": "5sJv1AGFxqjgh3i13fCN77hDBS4GREGfxLxWmGKKagPe64doUrWm2bPXaCKaju3b5aQuPfQJyyuhmVqrvEeKbRPV",
  "key18": "igqzxkWuCCMNWzW2fSkpZmUN1DyXqG56onA3p1c5V97yFAZ5sJVAjCcyZCkpFJW5bTFV7cdpNcMSrsE9yjWuddN",
  "key19": "8JTt3nxp3TeXLGrCiUYnV5MSaLYigxFNwFptqETrdep3xVFDtxo3GGb3JYSqCHwjCKngageeMJjFAF9z3gKm91V",
  "key20": "2jATk8FKjVQQ4NsPTvH1U1wNs6R5Xt7vaSWCXWLrUjqWRf19nsussYQfAkkpczE7GorCo1fD2tZJSvDy18KEJcjJ",
  "key21": "5GjbVAHFAKj85Di9cuVE7FHaT1BfQeJtkKSgc3coWxkAdL6Lh3Ac7tJzJrYntbU94X7JNA8DUvafuEbnQAyXpHii",
  "key22": "3ADeryqMBs3a8yVzRyFUAQnhT8bksD2ZQhu1C2a4UsPCtcs5uugM4xUTQ855kQV2y958D4adwDAS8jPYgQLAFzWV",
  "key23": "2gSeRJJUFCodngJtcG65knU4nymoyr11u7u9rYaU4wF4aocL6KFaVruKQdV1u6LPNvZkEvdGUJWfRux8Mvdrd3e4",
  "key24": "36ULZ5QHgKt7vnTeHWU5j5o57tSYvnmcarzJqMoiQoLhSGgvRYRYU8H1mmc417twjjEWuxJJg92NpT699pxdXnyf",
  "key25": "4PqpdvncAN1zXQxCm97X5BUcTgof5SgUyLzvyKtTsve43VCiLPZLhTR9AFACJZoBFcsdyztdzRQ3ABzANTDd5rma",
  "key26": "YGHm3oQDhauQPMbwfpUzsMap7maqQEr5MutqrbMbfkwNwcwUHxuP7ZPWKwdvYQSLAL9JYz83v4cvfiiRbGcTBBh",
  "key27": "5wsSe4QBgLTD4H3FAMs21uiEYyBfjGywLsCUAe9QUeytFojRxvjfrvXQAwR55AUmdfTHdvELiCeNFUmK54QzqgBR",
  "key28": "4AgMBGsvArK6o4wgGqiGzXcTK5LVHZAmQ81vuEvPt7hYb9cKZidFLzmyf6vFGxzcL9CiHB6US2r7GaHgC9N8BXuV",
  "key29": "5wHJcyuWdsMupsjL2bQm5Pc4j9csZYVtVwAUsmcGMvvcUnhtPaawDYSEUWTnAFRrbRri3C4EQakBmCg7BhKnM23t",
  "key30": "4ec1oAeDBsqjjH525qKVgNnZqEXNgo3wdnwp3DUogms6meGypCMXawobTufwtWVR2TaBBCEtxrp4Gseu5dW2HTLR",
  "key31": "5k2QXFmdhzKDV7DtMEwY2aXZAzDkJaE5srdjFowBS8MZW3c3WVj6YYpvayaF7TzQBjpMsYdC7yKVq2AfP2sqRfhV",
  "key32": "vtXWuqaavycUAowRWaQQ7Gf1ohbvPVHSW6NCxQxepdnd9pgZ8hmRXvBEYLw6egc9ZSGZ4dxSbvGn3YyC6Vhi8zN",
  "key33": "56DWQN1LKbTDfx7iKuEVUv8jDdm8Xm55o9z9whW1APQxsd1F8AEAprRjFrRp8FpFg12kv4hSCGgs3E9GBMSvgtup",
  "key34": "2c9EScEWHaV7QUa71EuTqUuSNt2dL9RTSQfFoV7FNhMT4XHBySpXFLcRaKJUx1GuUJnUrY1c5nzGAk1i72b6naUg",
  "key35": "2CZAn1UvmwgzEfjgp5aK54eh9HKZvuYXzNDd1SUkkpxNuibbQqNmQrkLAJzLYcLT3Tfj5MjwTLLRDe5sqb7NQKSy",
  "key36": "uhokiA6zhVC899qiMPdtUXCfGoxsvb3FuRa5xCsVsW1HFUeKVMupi8HRvQ28h1pNcV8qZY4k9gemKVDPcNCajrU",
  "key37": "5s3vBtyEi8iHob9xcuUahUU1hJZFeaMyfijkHFRtJgENnjN2zZqzA7MujPwPwRFsZFkoqnibBKe2ZjX638arXTKb",
  "key38": "2gi9AVRQNLNCjHc94MYs4jxrtesbccKTc3YgzNmPzYijbkCLh3LGDSrTuDzLT2DbP3S46DgzNGiEaAodYbFz3uGB",
  "key39": "2iqEa1rWyDGnEfGMay94VvHnmXgUi5vJHLQqZ4YD77dmK3Vw4oXycoTPq8M1P6x3wx1b92NQQFDYPrUVN6FZXtk6",
  "key40": "3f43wcBHVt2ska726XeWcWwHp9oNpvHbthU2SKjPTtGkdWfMFuzKvidLofjVY3wpB23AkFeYe1Uq3XnEiAGKMQrB",
  "key41": "3vWhNK6Mm5rWoVvVpveSmza1CErGvwX4XeVZHmnjRsEot1cJt391qeRKe5e919YsqdtNiBHrHKkFReM2y1Amcs8M",
  "key42": "4n55a8FgCfRoV2RNLhCsk7n59ZFEYYH32s35rBawXtyCA7hkjEF92mVyU9hNmVbqi9TPFbcTxJ2AW2wYkaP7CSgQ",
  "key43": "2gGEMGaJG29WUMWqBba5n1bkCTJ8CX4pZmEZj7X7Ti8PPJyaa23aQD2vT5khJdTLcE3o74py346tHHXHZaiAAFh4"
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
