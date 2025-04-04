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
    "2kjao9zMsQ8f1Jz1en53ZwU3qnRdeMpN6DEdP6B2G9mJ97KQcrjjdpbTZRnvNTT6e8NPoBRpyitS4C6nWvHPnxM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEKjbja3uFEpwvqK8MXAkUfjJ4hbSLyJtRXTgnN8fwabUrsNFgEAM9CdALdGegowz7Bd3oYrH9jnB5m7oE9Fp3S",
  "key1": "62dcFeqWUHbVryTiTmmtLytKBfKecCfpLYmKxF9UXsY5dxcFXG84wWkGUYnM5WsCMdASQPejKFMGdTGM8mnkLCFh",
  "key2": "3ScPMBqfiUjtMya4mFtWDqMAVFgoaxvpE3bDzxiX86orWPV5E7FnhCAaKiAbmiUoHFDnUsG5mCfyrgZrWaGXyA7D",
  "key3": "3fs9qVqeMjKYCnrYEm6AtzaVrx6c6j9qb6BBRHyS2gufaRoeVxBNYXcSoy31tQfhtsJ2fH8L7hg4FDWXEBtfwBY9",
  "key4": "2qGYhC9ATVvbcqmsgXndAuPgVqfbBiYG925sH8kZR8vhgT4KtDnZy162FLWRFo8EsiLrXKnJPfAEx32uhRZYTazh",
  "key5": "581QfQ48ueJguWhr9jWsoe8ad19s35cpFruTKCUwnm5r3ETaUNJqrQHZtNZszuxJGGzED9CcyWvRVfBKrJY97vum",
  "key6": "39sdkPRAvjkdQZrMBLEhax85fq4mEjR2k3UsyAYpG6PD8PY4QQqMbGKpaEg59VTVuKQnF4kUdmUrgxazXXwRTWq7",
  "key7": "2TwpJGfwn31bqNEGNsaszeg3TNvw1JTWUpcew211XZVnjn8JSyGaAYZhD9JHMMiHBNw688ZQptsApmQtBeWM1FDY",
  "key8": "4phV7m3NwdHnyug5D3yt5LHV1fu4ivUSyrQUtL92qisPaUpMxrSRCMWqVWdss5ZvHJd1T4V7uN2xKT2hChC83Ek4",
  "key9": "NQR7dr1L3U4GS35dDBdb7TkcZmmpEshSDvMDt4xo6PF3jqLUKq8UC5ibPjrqfD7BFKwt5mwVjhn1ucogEfWZBcH",
  "key10": "4mSTW7qRUdPDd1E7kwk4SR8Z3mXnZ11nryBWsFf66aWAgWUUE6mb4NMcRn7ukiyCuZrgg1nvgYcVcPHGZzNo9vJz",
  "key11": "2yB4NPZGZdCgB6v5ngo346fLAejDj2Qv4iAJkEMtrazYfGwuV26uHrCYyF3DxhmFWqFirKMuUJVEYTCpa9L8MviN",
  "key12": "2gYBRgyRV1sFCB1Lk6AUzm8SjRsWQQqS9jLqZZispRqkkuERDHvcN68rsUADmwBR5mNr2nq3hAZNetbufL12Jvwq",
  "key13": "2a9dgasqgdncP6vsy2yFDkQSmtZqBHJHPNhnSToASfKoTLpiPZKcosdaskHYrX292nPs7PTFWEyoZzCEp4J1YH23",
  "key14": "3WKrGtUYVP3Tw4p3UyF4KSi1s2Ro5GbfZUXBvSYk3KygRFijhMNxickmkkW9aSAXMqJchcyjMav4SP4bnHaPKJCr",
  "key15": "3yZ58AJwCYT9ubpaYNyibn27uiPu7ovyJ6XmZLxqkFQBW6kMZtNG72i6uQU624dW1deWMrVnjAsmZyEXRkLki3RN",
  "key16": "2JWcp9gfQGDrqtDYt5gbQmEZqhzpbGB4ZmMGY9qVNG5eGei6BtpTyWjZdkdkH9YpBWxLXdyNMPZtDUmU39zcqo3V",
  "key17": "5SMUYUZfR8LEi2R6B8DNxPMMWABeyb9LQpMRPWtph7DD5ctwhVr9LoDFyqzwxigCjkuVqLYD2dnNQc1rNtx5qBxR",
  "key18": "2x6FebmC9imuvqaBQP9uuhCfJJTnSAcSDuF1trMfPTvXf23nhvNnAQzNznbQHdxBMUeen8JJf85mR5KLhxL1DbJZ",
  "key19": "d5nH3jdoLsRJLKfF9MeRGQRNbbBa81kjG1HfZEayUjCRmrjzRDmfi5fBeRJiSwt7APX4b2A4P1Dmy7KkGytYrRa",
  "key20": "64oWXWaiQoNivZYUmkebVX3MtYRnXFFSG6FiKqbx93kT1kTyar9cxmxBrroqgWnefUmiuZdGeVgaLpdFBEDjq2U",
  "key21": "XBCB3kE2ibQVi4iEm27Qo9aJ5z5To4ujjDaPQ6SupzghzusmxypcuZqBgzcskW4EGP8Meo7R7hrpZ3HfE5k2oBH",
  "key22": "5EELT8BhuGp1gqgXvwZEGf9yACMJakiv1MN83dbyNNTegSpZRSWgesmFkADu4fS5G5Sds7PBaUYMZ8LhWPbkJdKW",
  "key23": "3BUGca8NScJM1pDaxWFwQhX75CzFFZWBCaZ81wqPrMwpFaQSSoHgoD2X1icCDg5u3n8j53zb18tx1GTvzzMVAb9F",
  "key24": "2L4unGP4CB6qhEvZVWioqiKXVKfJLEyzhYoU6NBJK5rJt8S7MYo8pvnLbnMFaQa6VxvLzqe9FLSz4TpuE3sWnZBP",
  "key25": "5LXHZt5K7ypasfYdaztCfQp1ShkSuYANszZHNTXuXNQRMmfuRqtkaVJBvcWQkJcM2FuNM8Fu2MWQV9X68yvCi3WZ",
  "key26": "4PuwGiPaPeFjBHU7xhHtf1znmJ38NC78nbw87NTUr7tpWUvPBJvJAqWviBXweLsusfExECKVYj1DwxFg21r9dyco",
  "key27": "34LNKubwLQ8KH6P6GSVK88u6PWERP4Q1WBd2pYDtSC9crqi9RSD8KCeroFh1FA69duqQo56w1HeoTSczupPZ5sEt",
  "key28": "5aoLkuHmN62zhD55gddwh8PZ8Luat6robdxhuRhBv7zu3Y6JpahtyM3hUFbB5UWVTWwKJtrjaBtxh4RhJJQn1vUF",
  "key29": "4QNomv4neWCPBKThR6Lcp8pMx64cU3JD1CmzR4b7DXHmycD7oSmnsv3kirdxkS2aTrcu1gXb1SHirt2m9Zc4R3z2"
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
