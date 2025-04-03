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
    "iXYPL2o4aZvioTy8FgpVZVSPMJHopDBzewCrnWkGAohJEwf9iiu1hxFTJNvgpp1pL5b6D1cWcB6UX3qL8oWMmpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6ckb33ZfwB32RDSPe5RWpNNytBCAkPtqCvo2WqY14MJE6MRwUEMwaggkRJXwehiayzxuSKvncXXitB85ukDgDW",
  "key1": "26nNLe9KuAc5ziQDPMcdKw9Upmtn2DMFYwbADvgcfJASsNn22pXnCqP6xAG5vRkWx9WT96HXfW2MWPpUjn2j1kAR",
  "key2": "2VV9khuBVHNuvj53KggyZ7S6XhxV1kgc6EqVC5Vm1dAvyaRMtYPjHtdBYhPZzMTcUj5VghyoZ8SKpnDMbjKTjz23",
  "key3": "5hg7to7szrg3uMje3a5CwqY1L7jfW92gg1NL7Zo6bsT7AMxDjxu8Hqyw9VhMxxckWqD9RAkAEDxyfTnYzwYoSARd",
  "key4": "3JKnvAvCLYgYVKdckNad1qqSHMNeuuJ9vbC1YrFDnQbhTjoxUpAaGsSbWRWTcm4tXGWmGKw5LJ3VDtsBicsrMmYo",
  "key5": "3MNYjYaHrrYzLuK3XrApjCvJNDMDkaH8HXRc62No4xwBoBZfrDmbXKwvXtqzmm2WAoL4prAx5iPMXtBUgk8iN1Es",
  "key6": "2M5dbdDk7cDZShQWRKP5Tf9PnMyMui39DPZ8VT8AcYoSbU9qvYkcvgmdKKrPDNtWDN5QNRKsSSrACs9aZGrXzRcq",
  "key7": "3E3CjYszHZnGv2Qf5MLNo2sMxchRZNVEwgkciQU9xSFeBLKBgZe4RNRjXJD1fvWFmBLePciam7pRsrJt8FUGpsRP",
  "key8": "3hsVwM8NKNUMEgzcGQHVgV3m5E2NYc4ty2utKjDi77b4dKjCiJKVZi6NVgD55z9Vfb56bNubyJzRi4Jy93nafhJi",
  "key9": "2NCPEc62ZeTHuNcvnDUcbvPk8GbMjZE2U9zStXeQu1HnS15z2Er5ZcFzuAWyudxEuAgm7DajiBPhX7VPnWQcXaAr",
  "key10": "5b28eNv6rrRL5efLbxfZaUodtrDCkbHozoL8hhn3uijQMvdZKkDj5x8CFTR1Jx6P8b6smdWnqyePzQY2FuRkZtKL",
  "key11": "2vXSG4MigjnHe5N3EJip2aYoeusFVkYLxBgtPLTiM6eSBamPViwTyiWG8bhHr35Rfh7xCHi6RFi2Zvdsmfb9Cq4S",
  "key12": "2C85SjMbatB5Snbjuv6ZFT6nUxghQTi1zVDqFQjQGjKgha8DiwiNidtjKiQHufnZwqop9zLcMVH5sovjc9N9tVva",
  "key13": "7hjmoEoyyBRhWaffuC43T7WfqXAC1oVsgtz3wbBK2QHsd7XXMzLWepBYpqr7QTjDXjGCrgkQDP6s3KitvD3ersJ",
  "key14": "3Za4zbMAzcK2WX4BBrZ3MGaeKCscwC25sh4H6vNcTfNGN8ibSYFfGctC1Zi15Mt8KEMVM16jh2qzcqALG1SRvtPL",
  "key15": "4kRX5CpokpgJQ8c7MCKa4PfdgdmVpAj6rbCPQN6k1RYe5V2MrR7Qg4bM37KUDFp4P1w9uoVeiPsGT1u4wmbrB68c",
  "key16": "2vmFqB7Y8BwfBSgHrgi9L99LhmQ8Lq8CbcugEy5ApCdvHSRMoR7Vw9A9KQDSQNVVnLvTaxmTf9hQdAk1JGdfXnzB",
  "key17": "yuM652MWWpDqZNjufJwG9a9g65dJECKTuWMkGnVeKCunomH22moLUAZwqv6Dgib7Qs1He3BZGFuwfnDnKmCG9Pa",
  "key18": "2v6ejMk8vUcsrm7Dqy5fJ3fXoF1fShRzvD75XbUmVadS2hMiCza22WkCLijCGisL2SYKa5dHrehNGGqjPmure6Rh",
  "key19": "KfTTA4hVytKQ7pjjZx12AyjbGAKqD2hn66ZD79hskVmKvoTnNPcCsU7kxDqXHqAVUuMgoeRosSuCZNQQf3inifi",
  "key20": "2vx1iwQ6MbBt6URCXBdd68VibcEd8UduXVZakwCYmz88VVx7isyWtd6qDZizQJ8DF6e2pBwrRojKWY6jBQizgk2k",
  "key21": "FFAkPDzq1PiAGp9URHwVNazVrTQ1focXAiQQYQfXdfq341R49G394HPicbjVVQU5JWNs7jFCYRbM7C6Za1zs2h2",
  "key22": "5KC8cNvRvcAtoqW2JW8bneGjCr168Rd1SdfJ8SiHxbgQXVHVZ3T19Zisfgicv3Ae1LFbcARUnZjnEToE5tLFD7YP",
  "key23": "59GFcjiomd9E9p16SVnHM1Vg9vA7kRBMbLUQrFz8Pb2XhAv45gRpup7j4w9J6rkqLSbrNGy84KpfjXBmdYpdnFq",
  "key24": "4dDx1a1eKfSp8NoTkBXvAVp2Pu226tnfgSnhxabnsTJ73NS8XaFCYuHBp1RraM1wUZA6ihpNzuzvUXCNrAAWsipC",
  "key25": "3PXJEgFNTB9Pg3Zko4HZomsxu8tRXeoim7qaevncmHFGH24PokrRQct7egDqrPhdUabUjnGmzkRnz8fKAkR1ybXj",
  "key26": "W2pcfUWBD5kYBBE9FbZ5rCCLtrSZiJP2nkmuF2zeWMdspikLhgXuHPrw7uXAVNy5Js52dMGuhbZwpASDide2XdN",
  "key27": "EXwVa1HWFK4wN2bNRxYwwvGnoB8R4vEWjuznSfiDCHb9WRXbJkpe6DZ6iVfPCddyV2DyVwGFxemyyUJ9jy1gYHa",
  "key28": "4BSQLVk7HezZTjA4tegxH2RWd4PYV7WGt8rP5AvcsVK1DKbURBe656ZbqaFBRmzcdcgQfq3b7oTw7Hyev6AmyF6j",
  "key29": "4Pk1LpcwMnKDsuRVBWmfvwe39V3Xw4ZY3hFADTsdAcuERdbV3p8c8wknVvHcu5WKBZomEQNaYZVcoE4dpiRUjGrw",
  "key30": "4h8Ks1ZypTU27hNbuRq9JQAEtrsxzKmR9oeckZy2UHtwooh8RTpmJbdJGWGGXZ25sLaQmSdKW4CzLJNwHAh5QCqt",
  "key31": "22RszpwDD96vkAvaKDrWKMwYs4xvZwx4uSSb2foyCm8P83jwcidrcPVWGvSwFq9RYsVytj579PQzSP4r3Yftu2re",
  "key32": "31iXBKFzH5H6T3V2qhQgy4A2YouXa33n2wpGD1R5Btm1FsN6G5iUC13hAr4DUXi24ke8E5Y6pjcSkQTCqxywyRaN",
  "key33": "58cMy8a7rSnc2BXw77xdRz131ebhoc1pzkzWrovCcyDy4WcCoCTsvrBfeodtMn2x3YDjt87mHp4XuUw9CJ3t6QB6",
  "key34": "2NMQuRZUzhK8EypDHtX47GXfuHQLMydNPaxFiVbGBmWHXdUwZD6dGjvTQePD6JxL8bHyTQK7id71eQ7RUaVQNn6V"
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
