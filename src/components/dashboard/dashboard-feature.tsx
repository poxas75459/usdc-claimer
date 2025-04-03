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
    "4fJxAuamaz8bBNTMa8A4ZUdQwNf1CXSBkDnVD4gqKRYhy9Wb1YwS5WRDJDLHeU8uGNX3hkP86nqc2toPZ8PQPZ4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5TN3f4R1cahBFHN9Ehqcot8uuBDSENeKBASBkXQje7VQ9frKC1Nfg19p4yFJJBExoEP2MdVFjjUnoy5oRT8ptX",
  "key1": "9kcPavpohveV2oLie1suMwiounwTzw4tGhntXQGWANTgyPtb6pGRuh1K337VYkSUZXhnFkkzynbbCgyvrKT1WyH",
  "key2": "2j4uhhb4LRV1gmng6XLbddv2C6A4hy4E6KrZhsAqQedKhc8aNNY1Ja39YN6oeMChHGcG6KDgJwq9ccL73Ue7DEzJ",
  "key3": "2riorsQLXWftDHcA2VdkfVxchvQ7bdPgMcbPGQht5BgkS1kQsjoYf2bSEo4jY1onUDNHcG4LLE2S2nsUwpEBVYo6",
  "key4": "5uVLAyLCYW8nFSYNiDLp4wnWWY4yGxMvGiGdTQDehmELsDCGGkn5yFdwPQJAaYkaLUpfXqeseVo7nV88wxgsR6F8",
  "key5": "4n8jtdu3cfjP4xKXrrRxCrLXG6ohtqkdkQ1BtRrHCyQB3hCGreyVXRFiq3Hh6n52uE2mjmREZUPrHXVGqZ7cCBeE",
  "key6": "2CyqzMmv984TaPevxKsNq3k4RmnQiw3qPXEWJytNZZoKZFDFG8ffKLW6hjFw78jbzDhs5Rj2noTjMbDW3GUJD3Eg",
  "key7": "5BxQFArAsuiTdUpyphoorX4RrveNYtBxRTetQJ5Ns9GhBw9CPinqsTSBKhkoSRFPCFh1UoHsm916hgVy2XAkZPr7",
  "key8": "53fwWJXPhSARWhfj3fYDjdoaYEiqxBm8nBz1PiGaAgGgi4d3p63FB21Cr96r4t5qXhcrDV3o91bhi1spyQ1vMTHt",
  "key9": "5ULdXqj29BmkEbPztpi2KQiksrkCkUjCvWFKxERg7aC5LdjiDcPTUg9dvGSd1rcTsmsPmTz62Dpj2nkga2uVD1KX",
  "key10": "SytYsWdK7M42RTvni5TuPAZ7z9dm8BTZ6EmSUrLWZNAVncwS87MVnqC3v8MW3At5CgR3sHYshi4R1FDT1nD6Vsr",
  "key11": "P4j1umdKpb5xRTaTFfHLRVjHhpHFGLen2At2gi42BfD9y2iAyEPox4LP7PUb1wt4sySdY7yTyog3pBmHyir7x4t",
  "key12": "2hAKVbxw44oNSjKrjDTqUDzFhEGJADyGcHZTUTdHhBm9dwX5QRGV9zZKb3cwUw9LAkq7C5AZhk5RNstW3EDccD8U",
  "key13": "66f3K3Vn3uB4F29eA2cV52X1Tjo5nPKLMP1maVG6vxKaMgo9qF7k1fN5d14SsgjuNNHbETHsczSx89RwCUZM9kZx",
  "key14": "3xaofAPr4SLucxqFPAftDTK66ipFNGuuv286ZQjw9f8r5Lcj2zUb427W6g9Ggmfr3hezN54MWKRz2C1uNFxNubWp",
  "key15": "618dx2CtiSH18LySmfC37fGCT5bi36B4cf92XVHrPLZg98uqgamuKkhu5cBY9qgDMtQRzKrtzSY6K7q6H7qQMrY5",
  "key16": "3jo8ccgHKnoSarDWQA14tMXct67vrdnuoX4iJTXREQAyNTifck8miey3tShhcFx5H5mwGyQ9Wk8gYmgPkVFW6H6P",
  "key17": "4yePobss1BipVmWeQbyUKkanMGm5qkHEz1gNt9Ss7eLkAqj9pV6uUuDd2Uf2EC4kAYon6RaWRcNWYbYA6BWtUGbN",
  "key18": "4KqbHAVHAqGw6WG3guCiGv6m56BkFbBgeb66rhej96qzknBbJsQf1F4DXdAs2BzCwWmTFadTcbQwG8EA9xcUd4Kb",
  "key19": "3a7NkPNJA1aCF8wG6xMLcFh3EXFRaE6t59WZoBguAtfh6r2Ytwg2HPrANLUSU5gsEttAUKSogPPcvtgNNsGVjYrD",
  "key20": "5eWUVVGPUZoW7dR69pEb63az6FqFw4EwhF3J9QLBLnDc9VwULqD3pMum3qK217jXZdWbRVS12VwwMXooqHDD5665",
  "key21": "4AdwnoEL7feKScFJzXS35HfKByZ4JwGmFZfasY4d67ykojBVf5TrzcxzzMcUe5RUGbpjMVumJUivPe169bUPDrX4",
  "key22": "5GPZFyZbvpG1PQbVyPscF9TSPqGDjTjjSPqhB1GDq3DxoZNZE95q833hnPrLybryxunKwTqoeMjMp92rjHaVAYZA",
  "key23": "2AgFbDTmqV32kwJMrM3YAkuMcGZKeoVYKhQAJsijTiyPoeZZcMg6zYzKMNgDFyiqPUa9gDvfitGvHrneNSyaFKeC",
  "key24": "42wyDnPXJL9oCWckuaiLpfQvebSnZ1ZbFj5MbFPM8XLBZ64pPJvSsS5YRJM1tyR3ejwLGGXUwZidanYJCvL16H2k",
  "key25": "32scmFCzeKNvr3sjb2ArKmLAqKwFodADh9Xafria2khfHddqqqagdntx8r7T65CHur6DmjDzaGruz4p84zrpUWpA",
  "key26": "QKUTLJ5etinX4S2EYkYEBLBzA76zXnpZ2fmWyKcTEdxQ4FBiWp4C8W96XfuvFh9rUi5VFf3cd2qBCaKBdBxhYao",
  "key27": "3TDhz4t4ASpQTspFBiZ5ux7jQS322ubHcb3Rc1mps1WvybYXeEMqfMHjsf1vuc5QVZELkKdp1S81RjsBGfFpWKQs",
  "key28": "2NXRWKocthmcKaHNf31m5tSRZkx6b53R1GsCrwvNWzL5vhBBGwgPi5hbC7ncGFKcTP4kMzeykuBPSEXUbJX57ucc",
  "key29": "tNtcrFuQE5m57NdHkhWWyMPDTWmXPb68k1agwwt4jhzHMPNP8JsArKNf6ZuBADVjbbZv4sEuuG2omSCcekCPFjg",
  "key30": "KcXW1W4siBYGCAck5kW9RhfKR8HEcSJDA51jvvvGrCHzf94ovsV164nPYqqUsZDdL5Qkj5XPXug4VJ6YhTwnSj8",
  "key31": "9YDrwtKe4FNR3kKcoGUzXrriAjkkETBc4fbxEPCPt8RMr5cixgXjsNmeQ1E3Mc5bDtKqYJSDiJxb27iGuGmDy2M",
  "key32": "W6rS4r6b8QfDUgrD5fywG7m42f9ThPP6fArmJ6AjLzsMNTgrLFWsMxNaoxsENBVCypZtXptAAL3r8ruPnGJpNRT",
  "key33": "5eXiFQkYx7bCo9Ta6C9NETzzafEy3xhX6y9BSrPiN1AWyf9FMRwWuE89EnhHTHX8VXMhyECwbW2yRJz5mGwJrfc5",
  "key34": "4bivog5GbAD4RVw6CLXtZak14Q98g3S7yX6tR3tRP4PGvtF1npwNhzBpGNv8cG9pmsjjubTtdCxZaF8uFY1KG7FF",
  "key35": "35jk9BSGGoG6tfJ24TScNe8NcjGw2Bmgzs9Z9462MNEXuLXFromh4jyMtwL6yUpmrp5SLspMFbUiCM8BjsvCi8FL",
  "key36": "3DseN5EKCKBnh7q9dCCnJp9dhn4UncgbF3ELdRYajF9jPwGw91B1ceEfNuQo3CYv25ZhGtAk3NFpBp16hUXJkynC",
  "key37": "3QjAHEy7UkueKLaJKnsmqxCESqyhdSSSZWZ7cg5yG3p3wvc82yV9xpJ859aPzPo2iGSTtYxr3esjhK3ML1BzkN8S",
  "key38": "2bPysajDFWSFrGYPkaRCgnSNWfE5skAmRBkReB16P1EP2ZGccjCB343Lrz7UGwoQAw1k6hY2mfxG9gZRrkT98YFA",
  "key39": "5u1i67r4JPoTtb2XthKWNm4nZ9ScAFZqqtmFBZ23EATT4oz3Lzs9hBaa82PdVdwyrn8ARQajiKrRxLXprJZZDcQj",
  "key40": "5rca3zY7ywoWxFjZTMSq61t2naGE8kX4Y4kVY5iMy3138c4cv5zmZSRQttVWUYiKH1FE8rMeRhYXftHugpBdASFW",
  "key41": "4yrSz6cariLq8nkGPmytQTg2YoLSLZWUJAAdM96gR3WdqhW8xDVqCwajbqqY3HZrgAEzyH6dCc2g4vCVcnDhoMJN",
  "key42": "5qsrQbDoQ9P8LMWyEwTDcs2wei1dFDu2n91L6iyaCFwVjhYp4SG6ppKp4GkHXmGcxTUEfav3t5yb2LyVuGcaPREf",
  "key43": "64Sjz6QR6SDrAge1C9PWaY33corek9BKPA6iKePAP7y6mzYzGcEW4YyHKWi5rVBBdYCdbsgAms5F2538oFJ5iDYR"
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
