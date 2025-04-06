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
    "4AyvExD4uNoK3UdRHuFJShcr3i4LhXVzcYMAVLMnnYi7t4nk1Nmt9X5aP32gBn1jug9F5fvdzfuwYZGNTGFcX5iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDX8X3YiEQVCQT6VHqN6oGm9BC21ZZqZTSrvYmqieH1i3H8Z4RaM5oSf7fWzG1PWTKXDXHspaXHEFWeceK1rbyg",
  "key1": "4LaRSL6sazz2jQnB13tH4xmDCpLX6YxUVBh36q4U2iTKnfsp7u97NdQTU1PRZ7Fa4HCy88Hz1ZtzqNZD4M9zfHbA",
  "key2": "61ghRsAPzQ6djZ9gTRmVCnNLBi8ycorKHA6avh8QBAqm8Q75yEYxn2JAuaYp3kFpZhZMs4KA7KU17CjDdPxWwMqw",
  "key3": "57xPSU5W2UnTNwtcDj3AGFCHGSaNn6JE83dkGoR23FSWXFsa7ERi2sWi63Cos2D2qBQoNMxC88XSnc7s9pwS4tM",
  "key4": "37vBwdCh4aYotuqsVG21oCZmBSHNYwog4XXZ82w4MfXAig5zQq1mg5sqj82FU8M5Ried7AW4ccVXd3LPDccXPJDU",
  "key5": "3jZ5pzT7cGbqDsU594AEGeyX3p8WiSvN9jdQCWBjr4xi7E5KFowG85pgbUvgMU52pCqeiqa532tWv3LZHz7VXvTb",
  "key6": "3fDpvw9kUe88CM1WonhiHVg45p9tqpzA3UGzCQ6TWrcdKy6E5xXQTxtonwiQ8w6vDqw2mJnEWgUyot4DWdSfpH6Y",
  "key7": "3RirTi79Mnz9q5T6bVaX4n3qq3fozHZRAnUE1DRpj94Hd692LKisnPFGM1CmE4UtSwa8NN2G1vPSr9XVrMUt9mxW",
  "key8": "4GqsPEmf7UxgQLx5PspgSLH67Gcv8uFBW5rj1WKteQ6RdwvgyxFTMsxrV8VAnRHsPS6eTQJGMSy9xtEYe2sahg7B",
  "key9": "2BDHtu452aQsbnRRbEEfoL2vZ1rJnQBtacR5CZ6BSev3awe7kWHwS7Aa69vdKbT93JjEGcCgVXGG21x2zsknKNqp",
  "key10": "5sSC3JocgbWTgkimtFLW9wX9WGRJyJRZeENbA7z4Eq5Z3cHoKmtbvWwaZtoVoRWc2EzNwhsNB8M2wovS1Aevhd12",
  "key11": "5PuHwobhpXzTSqmbjQkQKXBG5Haoe3LVfAfFUdQkSnQG8ctNhEVN1WKgAP89o77SzWNerpjNUMNW1hcvUDyja1dY",
  "key12": "2oGcZkLTWgbhGQU2yd6pkt4mrnwWPm5mDE9Tsktsa1G6AcFFmJyVF9DEYV5VcTTT8MAkKP2j8hWTWgvigXCWCgDy",
  "key13": "5CgnddJnvFtNLRbdgVnSxYE9mJwCpWMs8P9MW6VyRh5XEqWEUxw2DWFANRTXLXikGEeAUj7LKtSo4VwBewixWdbx",
  "key14": "3e12q1peooVeaxr7NzHraTYNo2oJbcPaiUxmvcDBsL79hcZzSHt1AJ78JzhkZPPEKHYaWX4duXRSY7TLPySU7Rvz",
  "key15": "3zquEpow4aCQY8w6yF9ihUZyD3TKWJr3ncQufzj2ntqK7gjztfQwY3GP99AkxAWDzwvJoahrEP3jdWqMLdQPocFJ",
  "key16": "2LhnqiHf1ByPm5y2P6RXuM9GPu1uskLPdZRAVyRpL33XegNap6tBwtTjt3tgQx9nA9kwYjkAHwbZV8buoYL1Mwzt",
  "key17": "2tB8QTSgK3TLBtjZtnok3aFQ4htjiyGSmB1b6Ki26DX7iQmYmzvSpswnuaRHT92cbwbkFRqV4aG8A9bgvrjsSu9k",
  "key18": "2fTHdyU95cLSUsop7iLK9jryYdNtfhpQypSqYwsWJQ33myYNyiGZqqRZm6wchpMVMJFjCUwJKvmepsDyRzn2Zk1P",
  "key19": "KrFs6Z5xgVtioa2dCqWfxbbZ7tVBi8RkGWFrzPwrz4GeR2PKWRVvxp74PQZ5E5Fd5msAwDiuGjhicvARKRiy2vE",
  "key20": "4mpK7krpg8V8qVCz3BQ6xMe54CFJ4hit137gQcKDW33ZsaUYBsVdQLVbF914AsmL45CjTgTZoaT8iiP3139g7QC4",
  "key21": "2kTwcYTTuu4kmQ47UCG2S2NTxPQNELu5L41ucspG3NsNuUyMXT2u5VefQsZxHrCrYL5VwMFtZA39tC6Gd2eTZfp4",
  "key22": "5bt6fxadYYMJ3x6Pax6N4CVJASNURLYKEZFsxJB82iBwk5iE8ZD5Barnfyww6hjXWRFkz3jy2ucBby6xjNiFmicm",
  "key23": "z1HcDFzbSCB2NM6BsaFxradEAuCbo21FykjhtVmZFR9cAtsSYX1KCiJNC4aUJBBdnGFzn484qDVJfje84SUTqnN",
  "key24": "s73BdBy7v4sdazSzWpTDQuRXh79nk1xTcgce2af8oCs41B9aeD6JRg12Ps4zFudJLD84uVF5L5FEG5XhPJE9C76",
  "key25": "5sEmv8xGpBiFsvARKrRFbbtDgmcrewiXSp9KYB9VBCmV5QYscTSKHSYTdZ5ShrBwazcnxQjcmsGohjWJ6z4TLzh1",
  "key26": "KxcJGRTYDCmFTiJP7soS9peCUaTjde4eyEEXuTEnzJpJsZEMiUmvcnGeHYqWAh8W6bqxeGyTDVYorRfgBySPT2p",
  "key27": "9tXKLneCBMRX1tnph8CidZKRBXeF1zXnBKoUeqUV5gUCfBVweHvavihPJgrihKeyUFgqdk56ZrYKe8Cy83dgFBL",
  "key28": "43p1ZTnKYwvfbFBJ14oqxQA1wb57yWAawSm2K2CMjN1pNova3tCViNf7UqmpNLPsF5ryqY4DG5KMgYdMNWHtCVXY",
  "key29": "2WDHGhWYs45EYYwaj3k5Mw8tz1AQeMxyBDJtSWx1dvxUPmRJvZs7CgdyM9KZbw6ywLKXFTaFiXx22cKbPqxtVLDu",
  "key30": "286qrWgnYiRs2AwtDsJDoQj5mYHNrCw8m4F2KX9r5rjx9AkagxWZjW3u7Bdb6d1bXGCnyngGqNdzvynCJgYuYjmJ",
  "key31": "4AE3QuDfAiKVo6nB4LziodEihPpzgETMfzFTaPGuJ6idDgkREzbr35r1aD2TkFjPPeJnyMqZkUExdaz6Sk54Rhwn",
  "key32": "5GUGscqBLHCUN8emLzfevgs3G9rZmh3z82WRTgMviBnsw5Cv87DrkbepG9zFGsUmG9TtvG7eecjAq7fn5dczLqcE",
  "key33": "5iAyjqvzy8EGfN9mrcYKKLAqd9qzmAE7mSupKRZnyExNrB3sfHgFebJygPFuZfu8g96L4jwjRMSdanLTquhwha2x",
  "key34": "2FoJvSrtzcjSgLvZpqvKMY85pyiX1LxRTBjZA68pEj9Lc4HL4F6537uBu4YuHDrVz5HPtvzubB7EszVdQJo7y2LY",
  "key35": "4BmcjVWNzjkTeXEtEuGpW4fUcH71uyu7c9BmaS6p4KRJd4NuspKCztgFp2adX6DHFq42jzmeLiuVx2pjsC8FG2Rd",
  "key36": "3TU8hCMtiHv42nPS9YyXpUwtz8SXUeC4MtadY9RB52T4o56GZYnTUnuUNgrZpgWJT4mpYa6V6PC1Ayp1rPcPMfEi",
  "key37": "2EMFswVTy17UgsSjixaK8mBpTtWKGkncn94czS5mg1Ffw8KDQep4FxpSNqeUZW6zypzoEw9YiMAUkxk4px1FUkyk",
  "key38": "3RsJPUQ4CFyfBuJZPSHd1h5LN9FFTUkjYLWhwJEYXUF6uNdVzWhqm8k9i68EV7sq7fP3gamCQWwGqNARE9xdkTi9",
  "key39": "5iQXPQmnjfTj4kHVEg4ExsHcThgGaJgEk27SgMacYkn9vMyLcikdrzrG2RjqhBZHpQE9BY7Hwq6JvgQ32PxNWQkd",
  "key40": "3S1w36zEGD8Gx8ByTaz3ccpyWQF2byL1pvqcCUzav3ru7uqpv1V1Paobi7QFgVhMgbpCTR1QYszHQcG6Ca1xesR3",
  "key41": "33PwtvFNbDLz5CumUJ9q9jGQGmHetPr6BgCqBN3oDafBfiQWzQUBs2FTw1Rrv4myNjue1hFLBSXhLbTacmLKFUnE",
  "key42": "35xZ53ER4fXi7pePFQ2xn7kBaXtbSjvnLqXEK2d8sD65ruaJzGRAhPH9SWHk92qGdJaKRRfLrbiXgU4YbPsVrXin",
  "key43": "Bao27EDw3f4gYRZu1NrcKb6EAPrxHx1GF3eZDgDubHK4M7B8AF7qWj6hcjpLLa5M7tPFg1eheZG9LC9nhArtZek",
  "key44": "44DSiRovGPBG57r4MDx7xTY4mRLeBukbyhStm9qsJrT1xogBsECZSitxcfFV7WLFvNvCuCN4FjWHDPnPfY4SD5Nq",
  "key45": "fWDGQZtz1DneKWQ4TiDkKx6Cua8K8hohxG9NoE3TXS39sGEk1smY3taroS69mC8X8Vbpae5h1jk9cRVHrPHq6yN",
  "key46": "66UyyYxLwviYinwqrCw7cABFHzvCw69cvVvTXMcPPKeAoramWpqFe3wHodqQmx4doT7z1rqT2qm4ZwcsVFnDSsci"
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
