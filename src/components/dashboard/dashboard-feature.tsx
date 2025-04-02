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
    "5Y2oz7ykbhyEBrjzFynBqKaUmj1YsVyKdTACA7ZE1bvHLX3p3bY6C6b9ePKKxizMHWPLnUhtthKnuoZtm5Z9qgZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642fv9g8MsxKePsyHMAeYBqfSrKdUgEdDxsedAGubQoaXoqn2h6KCx2oSSZAeQpdp5e3yVENqmnFYjBHtoKSGehQ",
  "key1": "2W594fXXrW6x7dmGsj9Fxdh22r4P33n21dQF23yZrcLyQeuxiQkeSNJ2QXPmn1xyuDjPGShb46S6NkmYurzeSLfW",
  "key2": "4GBvritQt9TAgSzvsW7th3uLHNfFmBWgwbwSJr3DBp9mum2pkKdJPaHJYKNcPRixxQhxYQcmyrdK4kcvaBdvEizB",
  "key3": "2uH7YvwV6Yzu2HnKXLgyxcNvh3Fehzux64tAbupW8ZfU2GQSU2J9h4bBBrpRLAH6j2j91FmSoBtbS7EjTawnuzBA",
  "key4": "4mcTAFoLDiX6xRJXTvdneRNpKkfjahVQYQteAeP2Fjs7n7gwwoNjMRXUyFfnuxwWzy5X252TRmKmLSmQNV1YbZMM",
  "key5": "572PWUgz1izCEYVY3ZUTC5mJtSdwhYHjiNRK2N1pTsLP3Baiw5qDdmaJWCEghp6PXtQDDcz5SPgFjmnU9LPjPwCK",
  "key6": "3Zy21DWNnKHSBswjXNhNknVcn4V286R2A5yCXceL5vXMbqAEbpntzVzTjM9QQsHqEesQZedejsR9KJfaaUhAV5d7",
  "key7": "4m6cernUx7cQaooh1p3mWN8crH4ra5KtMxqcnZGAtuFq76KQCQBrf5EZRb7xF3HERpzDchu6Hy3G6VQhiHeHgE7h",
  "key8": "4zRwdTuvEpmonPVWJPCkY3bQiprEEPhDx1F6wVD3XjWZPP4zAa53KsUgutjX9ECAjYWpfibxrkakB18jZG5sVV6U",
  "key9": "4BbnbwcdmHrKfSayqKpKNTBDcNasiQqHX2PYBkrprQsNiHA2cCR64NPk1pWMbThU2XJRZMpzLNyehPd2DzrZdGdV",
  "key10": "4i8X78zg9hM7syQRiZBDZQDTueAPkcBBtdrGk5N6NqbXWTpkMUgAyzQJBP16SZpbKGhkmgCVdc4dQsswfnPvgDLA",
  "key11": "o2cq42PGXAEPyxadANG5xbrkc3yjHc23xU16R5BXNT8jiWK9z17cSMgWcsecyLrgbGrNdXiQY9PYsbtdMSsuvLC",
  "key12": "4YJfD6D5BmK1Y9Con7xq26khUfgk9gvc5xowJ5Wdy4dzyKa2NzPShfxFZAfv4NXqoGykxo8rZy72GNuZC2732pZd",
  "key13": "5TfDrFM8ZkohwX6iwmnSLYqgHshVmtDYjNGafhUEUqErTyM4Vojg14pzaq7A8xYVxrYJkjCSfyiq7RCwS4dAzGid",
  "key14": "x6MUPM5HU7dv5YCP1VuNyZqq7Yntwv8zehZSV6pZnZny5tS8qU833VREDjEzDoeWgU78tbNa5m6psGuGSCfJZSQ",
  "key15": "3WHMfb2s25pyKJGPxxVEoEB5L9ZoDNq295rMr3bq7D1D3KNBLDrHsGNJ2dFZkgn8SzhdrnHLARvAaDtCa2yRB3cd",
  "key16": "3MrNw1CSaNbdSRHaS6zkVCrBgcahd9NyzTfrLnbsdVuUrBHr23EV8sMU3fgNRAQsonmHorQtxUgkfAUM95q7XVBA",
  "key17": "3SGKKcS4RAkJTdE6cSpJkVg5fCbSZxrG3mfPbqTeRHEBQrF2UwLAjNBrDHjBnTbhvPdbG8xB4Cg67xQv6eQ5piNv",
  "key18": "3DYPqqRL8UhoTJdBPrXeugd2YASDYRCzu8i6nPvG8gqBjaL9g7KkWp1DW8AD3maX1iUfwCs516u546ghGsHKjNt7",
  "key19": "51yLv7xX7DhS69MXAdWDdAhqZDMShCewWfScV4msnsLEFdBydqBwCDoWGXK7bhvoBDeKZGngSMuZuqNBApiWGi9Q",
  "key20": "2ZNYPRXxPc924zMemui9uZezc9kv9yGJza3xcBWTgVE13Bcd7Y3MxZamFZekioZHLuw5pHzHU15SNQqSyJjtVMaM",
  "key21": "2LbSxdeDQN7gN5g9vhisZHdQg6zXoFpgqRYmMyx8DYRPP5XayFv5iWBbg6E3kJkZUYAuHH8GNkQzSnC4CNR3jo9j",
  "key22": "5w96Af6er58oAHD2m4Q3gMh1ftHxwrpbNm9PMX4WqCp7nDcjne2j79NoWBDmqHRvGPtgQFPZBAJW9Ly6vbz1xtAm",
  "key23": "4X651AyWL3rsdYfkSK9iuwidkgHn51SJKrwj2Av4ivWReNANtcv1goVgE8yv3QTgFMNeWJEnuFPEJQkv6BPCXV9Z",
  "key24": "49obsvLvYJarhouG5CsSaLhiNSpgjPyV31qWYKwQmxc6uUqW2HyawahW1BCjh26qcDx8TSzQvLxaahdUdXYfmYVf",
  "key25": "3KRLzwbRuC5WJfZrff3gJRspFnfjmES6GHHj3uz5xevHTe8y1N1JgSqQwRCUvcpkTED67bWzpqR4ADpFG87Px3SJ",
  "key26": "3jbJRUF4qNvzJ4PfUaBr9S5i3ePv2yf88XbezBn3MymTsFucexf1kQbaK3qytifkyvfJkYRgRZLrxfNvmuPhbXDT",
  "key27": "4VAsDViKy5otMwwyrC2zWgLE3U3VJs7ZAMM7pMHcv7JXoS3p9cVu34zDHzNDsGqKuZsivKhvda9Ds5UDMGMbm2Wt",
  "key28": "4aFTS71nifeDu4nVB8vjLCFr8FtqGYsoyefYBudqziyEWUn66UY4UttfptCPFjGeQhzxjaHB49QnF9QwdxD9bsjU",
  "key29": "52fJkoy79DpkF6PnhLYBC6EcNB44jz5d5Y9C2YrsNwPMhJyof7K87ezVV47Z6Ac8bT49wnpDEitcUrj2uzv6D3SB",
  "key30": "24xsAfxRA7gZT3KW4QPJWfhSSEMdUy6eSwzutv4N38o3LbN6j6bs9ezu9o4fEsPJAE6xFTddntoNipu1fSEkE1d3",
  "key31": "6svXia4CnCUBzGMLKZFBBu16ydo2pzBwBjHWx8YvNLRiCTd17VsAFhbhgD6Mvn6hRmsGEaNh639UcsHV2oioV6N",
  "key32": "3XCny6wTwE8g5nxYLxSC6TEV8MFiMxK7MDkRVjwA9wtehvRv7BBmVrzQDvaPr2utqn8gsZ9DCncarQWfvxL4fn3",
  "key33": "4mArC2QjM2gdtAixV82QNvjV8JZXw9TQkgPRszQgtYptWr5MvcYgJh4RArLkQ2LbbVVWUQwodiDJ5a9Ynuc8qf14",
  "key34": "4Vq7RvQh3kV68t8ixZNMx6A3hcqPfecij4jAs2qyB9MSHEA5PV13BqZu32jXa8wYHTGBJmw3fNx11DcNiYxQXrXe",
  "key35": "4ZsdcAFrZeHggFV7abPvuqa8jAJBV2vmTqa1232V1T4BjHgJgx6x9oC2mPXUQUadezE4ihPHff5wRerRboPc9WBR"
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
