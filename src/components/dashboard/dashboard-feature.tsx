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
    "w5qesCqfTTQVMCumWbfCFAsRuZ33NYdvbGjPLWBtUoUVXDeggshFwb7XVheA4UQP2o3ZS9FyTe1bUrNs2z4PqeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVhGoumYBiK6h8WKi2eu8xRafcFAAkBSh1EMdb38qvd8QCwsS3AiPzx7X5EMgtijY6Q58PFbyg99utUnWQXYm4C",
  "key1": "2hLdk55Z2PXnwc24rFnD9iJdAkBsx4zJJPiZmkKjXGNam4nEXwsrCAWippRiPahq9BRN2iGDzyCQWfPHvQGnLe5V",
  "key2": "2u6zLjb1XBYWmZ5P8LUQJDDdSjHNEhHaVMKiXTRf4RkdCUKm2whUoeaAnKaKhpdtYgr5z2eU1F6T7tvcafXA4eEd",
  "key3": "to4cYvazJ4qp573C5YPoTdkb1wYSTnNpRA6v56rTPtSbhcMaNAfUELFe5Dse6qZki3UzVVCRnXhXDrEvqqo1zn8",
  "key4": "3RU5TnEUxbhtgWsKEEBALJyaG9c5Druz9xSGiP4hW53EGeJoT9PtqLa1Z6bUH4DJGu7KkeJzgwqSpoBUUTAaSB7a",
  "key5": "MTPUmr3jLKLvK7ZKxiE8uJnvuKsQMDFEZUfQXceMU7G4Tm356o5KotCjCTahKELjzHkRE64PXFJoPfNduCnq4WB",
  "key6": "2fvMe42pBpJ5ea1X94hBvSRW2LCZHXpkV4g89qoVeHAAkcyB1RcNPTQ9sQuGr8N5ZXJvypBgfqkqEyeDqtrwy6U4",
  "key7": "3LF13Ah8gouZJbqyocJkZc7Myr1kV5BxSZfHFromzFQocY4dNoW3RTLJRtYM5wty4WtvwyT3gwhze98TqmpgQhnZ",
  "key8": "4ehEUQsgWSDuHynfRhkkwevjC9N3LC1GhNhBfDhNXBzk44C5uFrCVv3YNWMW9q7KxyngJMopaMSCDdFNMUFaxWr9",
  "key9": "qWABsckLe3jeZd5NY1iRYDHuAfzR4vZshB5WvG9YrDYPydDTGc9wKinenCPqtLxpGoit8MMEyjc6ZX8rYxBBvyZ",
  "key10": "2322YEVBEp7rRqe3XKGmxNUsP8USfUn4ozRAY3dMgGZjxKbeqTvXb2DfnJLeRF2q8Rfg6nVnzG3TDAbPeZ4Vutvb",
  "key11": "4qkRBsYjX5KhdpWAVCNbNRbhy5UGSoKijGJ7j87KNrifNzPdoM9RMZbGGXLSnLHCw6wxPaTAYdVukvg4P9psTvto",
  "key12": "26tLhNGNG5zDRN6PD98RFLNSNZNziyTjPh3ZnK9BpC8hTas2oEjxScuD2UbJJDcyudmwZSvWL6ncruXYY28dSJeK",
  "key13": "4rVW9CUy6uwiiR4K5ePZ9MGT7vHj31YnHsv9enNUnBhKyHgCijLM3uyGCuW8SR7p7PwHyUFibxCJ8rw7K1QMYHoE",
  "key14": "2ngJaV5eecWkqP3s61ZiWMSYPFA5P273yg5oibcZN4z7CiL7f2hKFFu7bRtpafTJ2pU48EMWLRJ69YVKAqmfybWq",
  "key15": "5XD432vb1ChZnZuyNNVnr4M57Qne43unEnHsGLoUsHtEKcm2JuFmnaNSTHKSiaQQ76R3B5bDeRZzimVaiT6MEVNs",
  "key16": "3fgvzBAbzFvfLmZo8Lscii7i2XcNMkVeyXgpeL9qQtc3kQKL4WEnQtq4UYDHvqZ9d2dNtSPTjw3T3vWRvzGcU5yq",
  "key17": "pn6ig29hXFThoU1Kys6EMH4ocnmiCdyuYqquU5mschjwC3sg7Fy93dsqMNx5WmTk7AXXNJM8W5TbDti8MKN9inV",
  "key18": "34LNtp7SbXKcdEFmkpYBfENbXHX3Ms8ZD4Z5niwtRuCTGtBwdHcuqmSR7qHumko7KUF9nW5gVCzAbbbT5bci4GBA",
  "key19": "jgnsjpQKTbEMGEbyjJbVYWr2nFQP6R2BzSboZnRDyGtUsBcmMe1Krm3VX6R13GdMWbTQQVTfh8ZTbyTPZt8nLXn",
  "key20": "2PBrA99poQdEbpprcSa2VSDThP2ZRDMvWJ6KZz2jNhJ3NDQipveBtULj33UqpBSJMzhdWUcR32NrnH6mYPWjm2Z5",
  "key21": "Ef6SaetfoWmueEggLV2tvCFm3esFTXEknirfccfrKMftVsAmEnaq6geLd7TWhS4YTEBNhS9h82QuszRQuwEresZ",
  "key22": "4r7dsgf99ZVjA8L9NutxQtJvs3HVMFvorQJUzoQamrtBoxAPHnnfPhrsQjfquWYi6BGn7eLEH85cXVcanfyGUjFs",
  "key23": "2gPNtnod6P7K4X7MSEPwJvvNAkoikCEhnaSe5hXcf6o3sdvewGwWCCude9S8YSUQkkwahSZEmuaJ1qR1T1dZVUi4",
  "key24": "3zFAcwWfPGVdDTqPCFr1Cnow5CQEjTMur6W4rxadSD5j3EpiZWPVaiFCN5NaceHK4H3zNNFqVfHTdYnWMzvD5s7s",
  "key25": "5aN3w8ak6cVTP3mf2xC5cWL61898bRWiM9uEGHCH7nnPLB6VaPvh9QPYjbpiA8er4riYJvZy7oPnYEca4oCCYwMD",
  "key26": "28ccXfffgBUiopG4bonFPBRVrDU6sBA8FvBN6ayUJXg6KLjRNSb496rxyoaRi913a73tf5grgmZJHgKrECZvfo13",
  "key27": "hBHB9LX7ByuVpXgxnn9gNFmvpsb9nsFEzxpwiDYN7ECPACw12bu1ucGY68yvq47WMtquW1DNwgfLYRYXF3AHFKa",
  "key28": "CWzvZbVT12jZrMTYwbn8dX95KRqpqwGfrmDeRRn4uxqhmpTHGCaE6KuXwf8Nzrrd8334qGnMAKBgC6HdZwNfUK4",
  "key29": "2wmMSPrvhpqrXF8wtMZwYxL3geesCtUNPmMtpbPBazcNC5r4EWy2aDhBMRV7QaV2ZfxR2VUw15gwAFsPw7eMYC4q",
  "key30": "27nrweaWgHX6iwzhALrGTNmK13pUCWTwrGftUQC31h5S6HWZ8tH165Tx3c5vyhuD66WBuDP3zuR3t5Ldo3beiuPb",
  "key31": "5MYgDs5t3kepWkYtbtmNfxRo1SgpZ8KRFqDGCnKoR5DvxW3TZKGTBT8W4H43RkRhrdy6Vf6i44H9VyQM5JdLrh3F",
  "key32": "4p6LcKzbuhMGcJEduLqyLgumAGwN46kfjAbv1VRJrmi7Ky1o94ypSrxYnvMsUske7RThonHfco4DZfhzfPmvVX8N"
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
