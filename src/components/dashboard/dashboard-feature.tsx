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
    "2ZLK2sZDvvJTPx4GhnYNL759rAnb2kXpcPGtN2BqAv2xL8KgPJT53GHxGhQ89D1gTgUr9pvHkdbqBoAkZatXSsNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27M2eZGYAEXCSfoFEiwGoc5GDNwVSEu9ZxZZsBcsrynJ8s89Pquh2117emnjHoDw7xxXD1Nt7F4iw3GewiSjpwM7",
  "key1": "5riSqXaBBYnPtTv9oahSjFqS95qGQTi1EsrtVVtohSCRhtXu8GmnBkb7hbqssDP2aD3qqeJAQtPEGWUePmGszsyP",
  "key2": "4E7urRgAq5cfbvqADkfxPmUBRadx7y5HAQDUkzzpjc9QhwvdMELxg5uccoNywiiiTJ3bocizWEPZzvLmFonT18ga",
  "key3": "5w8Hd1amXgjMEkcoQ1Eft6Z46nEYy1H4LXh3DBBFWrUooteZGrP7bRdatVUeHXPNYr6iz7XB5ouZ3TnSy9rPmSVX",
  "key4": "47ko7tLDFBQkhhXCCdV9YNYxrZckhaYbbLvfQjTrveNTVNKZZXeRYZbdfsKdN5gfUoxagJwy12MEAvHNjAywwfn7",
  "key5": "3ujvsXJY5wts1H8wwEQsvQJ9hvyoXjD8x1Mbz18V7BvhnyDLzFujwxvzbLeMjYWeMejFkj8pQzyAoGspFUxPw1GB",
  "key6": "4js4Ho64S2BLxUeHWDD3Cp1FRnQTTAmVGFukNEphdjGzgTW3UeURexGfe65JLMPU9jLhm1HKu7n39WpwxwRx1ctH",
  "key7": "5KnhNsb6Qry1pDoFiQeCEZBxH3RV6ASDkU3Ropj6iFwasW8ZNAujtgj9mv3YBWJhzbGTFX7JNGHumUMbht7Bc2Yh",
  "key8": "JwNhYjZTMozrDUzC9xqEihEwWfSfuvfzExTGXLNzgLtRU8zZ8gbgVvaa42kKEQVHoh3mJZcYQZ4kVAptmXUvPBB",
  "key9": "DrnS48RQYoyLuTZ8nJ8ccDqmintwsWWxUPJqgg4KdqnpaSDwydGYRZHaMao5EpPiZp1Hp8xo4SLiN7u87pLXJ6v",
  "key10": "4zKL1WKqH7b9iHwLK8iTTt1BJGaciytkCdedtUri2wBq2dDT3V5UxxDKrWxxPSBh5TD6pmbtWmcdBEMzwjkhMDdF",
  "key11": "2gzPhy4XSsrsP1g3QobGqiRT5NN6kjfwFPWoYgPMrSCciiaEb36zxzZ5vbLoH3Z2T6AGapdEWoJ7pCp5TqyiqvM9",
  "key12": "21Y9LV5RWVPygdmDx6K5MA2YCLbwvpNwmYuowPt7RLe1Fakt1gzYq7dEZWyyV6KAFzq7moRcTDQvaxsMCaJhe4YW",
  "key13": "4z4ZgRD6Fuc89h2APvMACshQWrEMsMBCPF1Kix9sLmmyzGLG1ksL2G9w9JAMZWM3w3F3mvbScxVuv7pTpTB949Au",
  "key14": "4FbUCZPF1KLxSkE4STtR5662WodZavu2MUZc1Cz2inLjrbXgkPgaP82khTra3vRudd4xuQWjzqSHh1zQnzLaAin4",
  "key15": "4GbjMowmoXVucfqi1KHSvXWaUE9EGDgG28rZrJKWZHWqmRiwMgNdXTwEeGBjkXjihZa19a8h6dmasSkeJuwNoVTW",
  "key16": "4ihRSviBX4bXM5ieMh4zYapXGxHz4hZ83bBUJzYAeFw11DSnCvrYgYr15Yg2i2ipZ9LkCmNhkiNo66PrjxWY5Cma",
  "key17": "5jvLoMdq3RbBbzZxShqFAtoVX2rYJW2r9ma9NHfsZtLHW7KhHWkKjt76ULMj4QwLqYeXhGeVQUC23W3GQhRefkJi",
  "key18": "3X4FHaWjKoXwXFNHktH6jFn5s3boxsCTXypRzPhMWy3t9AjNNncHbAnfUpbgPAY5ZrWgT69sFb39uemgefceXmw",
  "key19": "3fqvKWPB9rn5oLArWgZVR2Cy1LdKHypyydDyWZr4CmS8Syz182cAGeHrMrkNa7BDvCm1YAKaRtjGGcgdypTPUmAP",
  "key20": "5XGAiVUQappZhvkqPNq7uTRW2YLWVTxiPjx7KFYiPkZkSw4W3KPcCjBxKscks9LawDKdtL2cuBNfGYnrV6JgdWVm",
  "key21": "2xiUNXT74vBWVeRyxA2PuEYK7CJboNAkH6XYFQj3PAUkNAEaLSrisxrDnwKxWwQeL1FwjnjbyNWVJoGXyvGJWLvD",
  "key22": "4LFU3bc4Xd7tGNabCxYjiUQALtEFNCQPYHc2dPvMC9NgpH2Puu8prcZpqt8LakuFUMS4WxEamS3BUD13mWEUinr3",
  "key23": "4XhsmF6EUrc7Wn9X7YbhijfzmnNnBCncruhZATsC9xx6f1u6BVXdCE7T8CHEduwnxidqCy7PrJysR3Lh5pdXp87y",
  "key24": "58G1LbSwMje2boUFDgTv6gwG4Su5ktwNiaA8gyYYBw9EPsGhmnHXzEe5u3gLsyMmSCERzd2SV82YEdaRH1mmaqbD",
  "key25": "4MmDajyxvmw8yFt3EvPDHPGQ2qrJ4yZbVX6rfucfc9Dga5Q78ASQMMFDFikcmeKmoC3SwohCcLgna3D4xmSp3nuy",
  "key26": "2kULHcF1TNbDAkfPsiiZRsxYnp7m2CcEH848UC7z2XBDmLorZbTRW2pkT2YmwEGFHKHsaLwtQ8wq6thMwR13Pwr4",
  "key27": "3Uxs1zHJxe8e2LSGTz7k3AgG8Bv4wNbyHwY6rFFXwHozM1MzeBn6WVDH6155dSwM7nN9oUD65GZLfVgCiY5xZEj2",
  "key28": "Zca2wztQTrm9Gx28YM6KQspibAPYHc7n1Q2Der3CJacKSbnNVoPndksHEvth7mXRrTkhftSoVkdjKiTVw9wjtUu",
  "key29": "RPdJJG9HntBevjymCx8pfqxChEprPsEQiUrFPSAjWxMtu6dim5RxL3UCVPHo5eoBG4ZKdpuEA28fyQDsC3hV5SW",
  "key30": "XfysB7JCnrZPCasjUyb5s2nhXbEQEpm745q4s4SkS5xpSwEkgdNDS3YDzkpM5f25o527nEvX3FtY1zUznyETvR8",
  "key31": "4UjybtkUt2GBDzALz6JVfiSyG1aSnwv967joGpjVdJSpaMVoPiBhEe6x2TRLXpsuACHERRasp4hW8Wsa459Y4pTF",
  "key32": "66QwPig4Mgg2ctQjKN8wNmnwAGYX3oCXSJ62xAs2ERuZKLRYDgQwvbMws2os5jtUt1pmzBKyefsJquimZzgE1MkT",
  "key33": "4mXBgQrdFUDHQMEBbKVrniWrVdhyqS6e2RcQ4pHvDjR62yrM8jRJBfCB6fjp7dzZrJpV3xqLSpKChWcDVHYt5nKM",
  "key34": "9H9HsKgWdvWUtkh6iV9VRCZEpYpc67UG5Zcm6QeQeaBvbxRqnhZ5QGAJAX4hRdXLWCmxMCUaY4BEApHhEooehLz",
  "key35": "2jgzzNeZwZ9NR7GxSqn5wDmRzdhHTKX1ZdnBEMU3QdmBed9Xs3AJ5uo1V1AgxzMgZh4NWPdwp6cTMEJegrEks5GC",
  "key36": "2tkQurtYHnb5zpoZVDPdFv1cG4VCFnaTbayQsnBYeWWzxtKv8kRbGkVpYUbLpK8Bt7pzdF9pWFrtwfxF79y9wLJk",
  "key37": "24yKVY8JFAzP52vpoXsKeT1P4SSpubLVcxtQT47tvgvwgA2ATGEvVo6NWc4VLzBdH8QQHACXWXVxwwfnWNcq5edC",
  "key38": "27NV16MZVqb6mvRVfA8v3cMygXr98bEwQFK1cY3XboD9e6AL5uYdCGFWzd8kUrGdzc3pFrraGzcocWzMoJA1KNav",
  "key39": "n6y6xiCYemz7Y6SRkiYeNWf6KBJjYXEPanN4WNR8qPGVxso7zNrDDjNkuEw6FkZ9pYksbFtQdRWo1ZHBpkmdw3c",
  "key40": "4iEBtMjso5orESNHDYyRj8iaM1aGr3GgJMnjxbBTkCRdHtrHVZ5bsGAymptZEJsmUL6ch9oun9YshijecXfPptTK"
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
