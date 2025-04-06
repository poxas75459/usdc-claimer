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
    "2YJyuTNFsciZ21mguev8VoRJEDBrL5NnTsHzHMhNsDPEkTuBFgfiEnuLx5rkLUoz3ECHp6DndHa7cTLsTKF2pDcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9tKFRXUNVhMsrdwMRW6Q2JJk2rrBkxJmgZ1ubrgELRR4v3K84cY4sEwvY6azHPkvvZqK8sXnKinVkYNNg3ebPJ",
  "key1": "96XxwpJ8TH6eTzEoiJocAdMTbNPVSe4qSCk9dukmGTmedSayUGz1WEY9TFYpMHqKMLtQDvdFd66JYnArHJKozcy",
  "key2": "mwDZHRkwfXALcu14jP6Ag29vh1KwvWV5GwbKV9m6Ltz5kxrSqxTXtdovvsFA8QtrYYEc2jcLz2rTXFjCQgmZVgE",
  "key3": "VaGw2ohkZSB4xEW95eJcFRjWBW3EU8udv7GUyUYQ84C9fJjtkc79aHM7vZ78nQ96upgBMFqcjGKBpCDzuKo93mo",
  "key4": "3CHBYTBiU7cZ6z4hnBFdx3DhKENwMjsaGBscRrbMAV3W3ML1edSPzjuRnaJ8wY64DNCUfA3idNYWoKCaBEcWkDYe",
  "key5": "3wDtG5ks1mJUFSDLh5DNsG1SwU5sMFdax634EVp1iUNxrr2iyLq4TMUXrccVnfmLFe5dEVjuSq2dtNgfoPVwCMRi",
  "key6": "2mnnA3CMz6PCXmwYvCFH6M7uDvFShuoitaUDsYHSDY5vXYHEWmkvaNvp9YxhtnRKpUq3tfS3CgtJHAwfMxBFU9bv",
  "key7": "5Q9bDGnLbZqajtdzrPfQeX8rbeuapD3MkQkr6rCpcexBCr853iK7VFP4JeFRcx5MbvrwWBycNYQMYgSQ23wmRf2E",
  "key8": "2gWqDwanVVcGjvnTrPt4PRLgg4b2mfZVDqvehzfsrdy3Pp8nLMuJehsofuL6x8ULUGB6D87mb6Vgp846QZNuHNZN",
  "key9": "3R8DgBLfkvAhhfHs4CCG47SSCwTamHuVfJBRoDBkUNvGzds9nrX1XgT3DNxBrzCcznJgXXY5kB4SAFCuHz8v6HgX",
  "key10": "f1shcXXinJqvPjzRjc6gLx13sN62PteUmcaPk7BWZiRRE6rgZuAvPtzKkiDaem3zdWW5DxtMDiR1pxUanT7y7Yf",
  "key11": "22GXVosWebdYj7Y5ndsXcGsM76WomEtDnT3XkcjiVp3nPNDw3ebUroVqcGqW98M86wMitzNXiSfc1HATryAKm2ZC",
  "key12": "3RL2peBN7V8JBjozgeT6u33TKSKmygLcxnLTbBJzayTsnbdLDWScgbuaqi9aJSrRPaM3rbCi1D9UTzMEsHUXommU",
  "key13": "3UhxqTbSAkdDvwCmEnxxBSA5ZzjYorXrYt7ybLq6P3SZ4niZHGTyKm64wWZ6bwidjAjzFwPB5gKxPC9XAnEZCoJg",
  "key14": "2GzN6GNPnwt7eEGEPSZwHwWJY32dgpgHdqnBrs91sg6qk1YquFhTSL1RDFR7JoBzLRzx5r1nR9Kvktcy4TAFUR2K",
  "key15": "45UaA9DSc2G4so7mHSMzyoj5CkFn7XTU1MnGewXUWDHYQBKZ3gFMSnrGr6CX9KrnE6HozvC71TYL6T4po8RVkR5c",
  "key16": "3mB9Vri1WUmcZiSZQRQH5EQRXGFTmcp1bAo5M2tYedz7LwxuyP5jEtkSnVYjbGmsagW1wqWyMDQJUKszNUKAQR81",
  "key17": "5hBQedm64mtZWiG8eBx3rcpGuuzUsnqUzgHVVP8Ei2YxpWmhjF7c65j6VrXYon6QEXXhNtkZhoejLopwkvjZ4n6F",
  "key18": "5hwT1ceRQmCbpTTQWNyo8zhDkz3jVTiApWK6jJdk18qrK9L9LVRGZkTJizC1bmpzybd9W3TdsKSdLpC3WYA9BYgz",
  "key19": "2Aaa4g7xbCsF5zXsJQGCr6NQxgD33UtFptsv3FgDg4hyetEMQQZKB1e7UpEc9Cu7sj9zuD6tQGJ37apQinriHjGm",
  "key20": "4EQSJhCcyj8RJhBMnwdbvUnDHh5msAQDQuDctYmyqYv2k8jM3NfyHmJPgT2Pi8b4pRirAJBgnqiXKfVmADZgSWe1",
  "key21": "4ULxq61ZjbnXHiYGeURAeHGMGEZFbWj5rK1nQDXmG8u1JpjufeRznohVyY1PZggGCTWRPdbJQ9emQG8TKH2fCT9L",
  "key22": "2zLeHWaydjHBj91qPHXWpbYiEYddxXurwEXFubFkfsDjUepb1ZqpWtvPfPLgPBFQArjSqtD4HXt5r5M5A1n5tB92",
  "key23": "5QZeosKiegnNHwwUUmueeorh6fcLtBmsRcKFrrWEYeVwRJp8kLcXEyNE12uUNNXEjC39zJL71hu6WUHzhsnVVJyD",
  "key24": "4c8RoLCDPDSrd19BkbFTngMzAzUkGgfYmaYfZneX8qPMDbpVfWpFDeMshvciPL6B7W3tMtBSj7sB89NHKpuvqqVk",
  "key25": "2K5zd7pk8dBtvLjLq2qL79ddWmEQ6vxjFtomzQyrkTTd7UnTU4qoDnuChmfXVLw65HTbm93akXtmvDMEWkgpqvpw",
  "key26": "2UEquExcneokuCUkv5gPBE4V8R9BmuTXuLyGgBnUEfYHCc1ivSQtY2stBhR96dp7QRmEG3yxev6v1QmzyX1Tutzv"
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
