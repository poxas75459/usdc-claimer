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
    "2JvuxfcoEJhRkhBXahi6C412tz2G8hyqM4BHiBoKm2JzYnHJNb2Bd3ftDTN2UiN65zA1kNdo9WmcwfRQZiZGRkKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUVrVibNd7kqT3JNo81YkzWetNXniNbbug5Kc4kjpY4hgUivGDRA8LR3KrErYQyF5uDL8VnVZETVcvzJJGjVgoD",
  "key1": "g35rJUS8iYa53N7orjqHAkjidgYWZk4D2p49fhioeX6v8DHTJnrrrx8APHpbR4ag3x1d9gQSr5SHx4cqDDMvkbD",
  "key2": "3WQp4KThuABCPcPHzRkhYytD1WBX6mB9K6kVbTSgTii7g1F2DWGAiVa9ZonxGdmZD1b9XzLjea7qh8dfzRkb8uqS",
  "key3": "5dCcBgjbfAXrZQSGkLB2otFdceWVMJQgEnLnHH4N2bgxRN7BDHKbdhjoX5VxNAY2DSgEUtxP5mFKhNiVRmSVmsxq",
  "key4": "b1Z8F8E1gRz7SYiEUh9dp4BnFDXS3VXJgeyGLebHikjQH4oyjTdpQyY1EaeXmkg2Q7RNK7vDKxKEgp3wtaToqgJ",
  "key5": "o2bF59e2ZUMiikVeYu2dRDoj9J4y2BYp65fvsdrDU4AxqZsCraYuqj3cCohx2SkU61FvyGpaLgS6Awb7sXf4bBm",
  "key6": "25aEb5QbJtPrfa7TmyLndocYoFiPSMx7ZEWY2xXtZwcSCXgNgQPPEHvWGxDbxvPf1qqw9E6TvGsGe55LQCZE6QDv",
  "key7": "21AVEWztsbPT7pSD5agVb2pDsw6ZopNtyCNqWvQWnfnU8ogDGrqoRGhmC4PSigaWxYDyApsc58Z2C9qkiEjE2btc",
  "key8": "8W1GbBZQvigMhQdXH4Tqd4vxjf7AzKCWNJ787XoNNMtXt8J9iJuzEKoaZ6Xg2mDaQ469ckWBuaHCCkUKaei6sxY",
  "key9": "62Azxrc7Xso7eVpSuvJG9BdCY1A6kLx8pE1NpRWMbP15fa2kFyf588aFKMbtL5pmm8uEhnKzXchPuQZFR7HwpoWM",
  "key10": "5AhA7SPpLZpWu1YeNE8SympTGuuKrqkEkPjFrKJfjiQr3ARFaGp2BfGJhQp3v1A26aswGK2cHyuNMndMNfFU6sZb",
  "key11": "3q8526JnRXApiPdXFu7B2cd3ta2eacW4NT7r4ivQA3uBJyFnVV6EkhfTxBToAyqANHZsyZmDCLLhRtbn446HmX9V",
  "key12": "2mGm5Bh3uDeJ8y2NXasz9Eha7sqK8SD74amKV2m19BdRVouXwpkyi3JJZy2DSq4tpN5hp7N83ESgMzDcrKmg5cBA",
  "key13": "3AQ8gt7rJMkpqKQtxTES81Zqdx7TdA5PggiAA8iYS1bv5H9KAs5AHWf3DgWW4R6HLW4YFUMBkFjBSVMHK5baCmAd",
  "key14": "3o688tN7s8ZVdwdAT87jPbYZ3zFk5RPPNiGrXbrrMHA6avxZDgpdbr5wYKeHVZg7NxvJia2KRNMDiruVJm2zYyNP",
  "key15": "4z8tWkqnjeAYXTjCMWstdBt8ewDUbAZ81eRC5aRnfdSdC9SPS362fA1ambt7dVHCN7pw1d3fnQz1M1wgC8bCATQZ",
  "key16": "2vzAqANxTUhZTHMukCdpW5PeofpZjco4suNmRZj1DMrvgaBmZ73ycUXUUKJy7PKFGmLMYEW41dXNq7Rfx1V9WnNc",
  "key17": "41uSu4cjCoJcvxmYT8VhWhh9TfArsbZTYkSBBjXssRP5iGB2Nu7pMtFGrE41uCfazbRkQ68koGq9NTpKPtPhyAiM",
  "key18": "5N3CzAz9w9Lcp21hFrXRbMZTRmdN94nYAcpgnbEQSuSZk5rER7uCZLdr4sFxa1wdPhepHjt9Gbfthi3kNxNdGRU3",
  "key19": "2kqNww3vorKvBrwbV8djk6UUhMWmHejCeTA9DXchXTY1ao7z44TQYbVDSuvtjT3DhjHgWrx9Rni68HqR4cb1qRwP",
  "key20": "4xX2PJCwNqqAthCiP1sYwyzJWGKNrugHLt9nKUJjmmTxF91W3yd2p3FUJZkbhBhebEvSpFRZLmkGo8ymnmnZSoDn",
  "key21": "44ZanjLwftfNWeBTEEUWmESEqnYjnN3NKjxDm36yfLpXhFLX4CwCnKeheApUV2QJ1SBrmLbtEPSxbTPLFCPYPGef",
  "key22": "2mQQSbdj2g7Sq72TubMUf9Tgwp8RZHhSLWr5ghi3CB3qUUUsKFcdsjwbmdmzE29wfCZVebXymnWrroqFjupgswi7",
  "key23": "4mFWzy4HN8ZtYuXHUPpXJVo3DrKc31QUiPMzng3bgpsP8G8R9AnppY4LnfcZrhsJ6Xs481JStxVu2GLvEEiomhK2",
  "key24": "3kegFkNbecwXkjRgrmVvsjkTNcvn9JKH1TwT79rMdhDK1SAcDxtnSw7FPfvLAjcubrjtCepusEj5KGu2z2B8J3iP",
  "key25": "2NnAoKgoSmz3Wvg2uXQxCQsTdpyAJJQeSEovKjQdAV1y5oyC1Wf9yWXffpMbzgSip1TuoRx1fJq8JJs9rmrEGwQU",
  "key26": "Mz8eJuN788AhsDfFaeF5xf5yd4HeY7fBNPqnFds4PajkHBFjCWeCumzT5xzC1mxheP6PXmnRxdUeiakcgvwqKMy",
  "key27": "Vgbo1dVypPtBgKAkBLerMobpoVJP127VcX47noPJfT1mjS9FGiC6Sfp3fw4eaeQZpJZBkKt17H29Vr5LsoHtsoW",
  "key28": "3wz4dF2shoDAHYBK45X8CAgL8L3nbFt4TU5eBxBRBNRU45mkLiomeM3GuKD1GWfwe7FLrxWFKBC7D2SHH5PXtWHs",
  "key29": "3TWSsXQ8bCuWXUiHdQcnmwTEKp5yg3EQGNCMnZmdoZJtwro7h2K9R48NNPMVoeyQoRPSfMzw9pXU1pK6UYvPpZyQ",
  "key30": "5SBjzJh1fYeh9f7zuuKtTdAAHAYCkJw79cPfwmVi5PWPFiQZtG6567zb5UZWMBQSGZd9H64GiXF3NRxrD8VsgayC",
  "key31": "2Lonz69CBSwCK3zzFRgbRpbtQ3t9qhxAmPT62stxULAWN9sSPqa7pqrcVbE9s1NabYMB5EeVzH9F9LE1VUfRZWX6",
  "key32": "4p1n85PS5cSSwi43TAk84aCrAtzeaXT1YoJDC6h8C94Fp7Qni7RMoSQm1iSD2DcaydWyos61Qz2hwq1NkEN29Cos",
  "key33": "3NmfvHEQU21WGwk8uE2hbtoWMMw5ebAJarx6qLXEp8iDsyWSN8nrBmaYbSuBdAY8wgnXmEg7MR6hjWNVwrvkLmnr",
  "key34": "jinrzVmtPJE1EjACDUmn1hgnMzrtTXnLG1bCx4TNQEvm4xSACDKDtHD25yBGqoWUvwnRMqjpBCBBPAxeDr7gmey",
  "key35": "4opEZkgxY5495PBv3U1oVJsQxHcjmp9xbXkFRzKgVvZMdboU9PbfAUPh3Gd7wmsQYN8fEWgfhoLjcQyAiCnxkpo7",
  "key36": "62EqSW4NmT7N79YAj45gmgVnnLejk8FykSZFyXouX3xShNbgdDzw7dnqyQroTnqrssyirhcQg2Ywm9d5bM4tVeyB",
  "key37": "4Fh38pZQiVJpSHyLNDuXsw64xdRvDJBy92QDSij4KHKbBFpEhaUiGWAc9mTDkVaLJfED1HwXvJ2hpGp7K8B5mBRm",
  "key38": "25Xh9xLETz2nDfC1wxE9a7CAd1G3LbvNanmFUFDNdZmKNH7twriX8E13qZTNeAh9AgdVgVHc8YV7Xg5HFugWRPq1"
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
