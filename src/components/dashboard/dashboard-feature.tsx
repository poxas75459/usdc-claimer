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
    "5MJyecLAA4YRxvqemKKaVq8HaEKP2igmbNFda5aGNygb3EbQ7yX9SHS7b25xqvPzyTVttiZ33HA65KhunVJqj3kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6333YQbB4W3cazmepicuz7ZT5yVfffuJ6UkA1SVaMAbbUTS2a2Z5beKq18jdaWHFkaR1MG7qikCPdhaykxSgRzaw",
  "key1": "3XzVaix3CSDJjyU9stYJZKnVfcaF6P4z1oTqQaWoVRwaXpyaqtUyeKogq7UjK36MiAKGQpGGustz5WiSauSsamFM",
  "key2": "3v35apWXsXVSyGwnsCRmkGXr2tkF7cZdiwr5JRRAP4ZbEWFuoXB2wsX7Jxt7C6GSCXbG3WmQ7MipVAVvCp6KyCba",
  "key3": "2QktYLCfjiwiQPrsmy5ZAvAQHR2giXyJLQ8x4pGpsFbf63ZHPodHBFxugacSwsF9wTe4D1wDGqVFksgquCdX1VbS",
  "key4": "61HeoDrhJDPkovLSdzUiN657VX5jL3bVvkqYfdGMP1gqfkKdERbLjnALpk5A8mGUCFnHDmGRqhsho8qg4tGSDKNq",
  "key5": "3ZhQGnCbWxenFuvRysUBkNnmM9ti23kXFqbnUqqJs7SpeWsBSH3ucWCsuJ16NkP4ZLGpzawqwkjj7LMMUW93QRwQ",
  "key6": "5v1NWk7a5sjC3o39zXM1zxbJc7obUvPnSWcEMUoHT6wsRrkXZNuaj1bt2oL7vGPdDhwUosduxWF54V63ARDHeDtk",
  "key7": "3hAcMw8ZsHkHjb5wZzh4DWH5PZqvJVWKGiJBr2hV7KGGUbdHATbedo1UbRJ1ANYofWXaSrryuiLpfdC98PMkV9ro",
  "key8": "4peH5hWTwoUiU3W81M2pYJ2YC39DotjPoXEfnZbX7wTm8QWmTS4E5JNsrXcZTL6T2WsyRstwrm3LVd5iXQDbVRTo",
  "key9": "2ihnaSSSuE2UzQ5qxXKe5YV9dLdmz4Gr1zqGLckLEbNL6Siav72dC3Em9zUSMp7BiKFi334JCPs8QZDVpkbU5o8D",
  "key10": "55XENw7mRtVgDne77tXoPrAQdSJ3h14VNpdUBbVBhkcHNirEXMinmGjwL3Bos5reLnfqmQiwb761vQuCbVWpHss1",
  "key11": "3PhApZ7Gx3DoYbBHeeJXEVE18uhTWjwzBgDjQGiWS8qjHb9rvgBui81KVCP4AYi3p28xTpk649z4dFAPqS75ZKgn",
  "key12": "27Y3XoSLg3qyVDLvhNuyTWMTJ9EEVMCNhu8gnqVfgsCDgRovhY8a2ntF6drSKca4p8cVHerbfHfKcLobez7rrw4P",
  "key13": "4WVqYn4qc5gTCP8gFH5Hb6t4dGfEQfACUhxGPKQE9oQNo4pRWsHEMNbTCFQimhfmduxa4pNuBXDTGPN8UUhZ5NZd",
  "key14": "2YHmkyJ562eBN6CG7e49HYX21vZy5vocQtBaFHQeq3RbT5w1udFJziZuDU32YeUPNJQvq4Jh4e6xNEFbboaVTU7G",
  "key15": "2WYJHuL4kHq4YeeS51yxRWGwo7tU7N33kFo7nbwmEiMCvUP9vYSLPxpuiwFUg2fwSdSVJLkM25LRCaTPfzbSWBhi",
  "key16": "61baTmVNnuyCN1mQMYeehLTTayY9bpmp9sWypZVVgm9ViMTVihP5BBAhyZEn5tMFsYh6o3UqoAjehZBfa6c3eH98",
  "key17": "ECGq18nurXgfKnYj6ZoyU9smLw5LLwE8yCoVn1h97jUTME5UBkkH39TpihUW3P569K8VrAyQmgrqL9So7i9GrPK",
  "key18": "44rwfNnxZbr31TTng1mSkhpSQGUkiat3jZ5s9vxQrY7MT1kWo55Q1qYnU5hLb7cBX3HPPptMFXQexP4peifdmC8z",
  "key19": "79iok3ponjMrRqV5cxeb9za1yqNvqyfF7uF3uSsUGf4WKy7vCa1AXvRqeHaRzKq9mBew5MUY3MhizQ29Vj5mkZi",
  "key20": "2hYXcr26qTu8rTvQrchJu9CpYjkTcVjqraWxrNZuRfb96vLuBvRmjvgvYfGcA3PLs4LjLhpDFPwmm1gDyE6K8Yng",
  "key21": "nqdYzGoEBxiPx42VhQPhyoRMDRPiss2KKcdL82PX6dF3DLacwSW3XYAupoJwWXLfhmdp2kEg921ufN9qojdkSMG",
  "key22": "4LJ5wNWp4iVPpJjznwTitrxUfRXdHZDUqMQgufPQHW9jGYRrpGc9vQH9Z27theuGNvUhWDtjVa7KHYKjF87U4oAU",
  "key23": "4e1v6N52akCtyx3qNXyA8r5dbYgSTyHY16hi2hVaSELwN1eDVAbkxWmfp97NZ34YgcZHHdx4mBruxGAvKsxQpNni",
  "key24": "2EdUEHi4vxSSWmvE9ofBotnSnYJ4dtm4pchRWsbjQJKa2738tRAtNNeutQ3mZkGkGU7fFiCuoKp3xxVv6YTd18Ex",
  "key25": "3f49nxKiHpzbGrw5AG3TdSUuSUU5k7UTtJAZrAijLfnMaVSKQZQCipNjFYq5uTwspo48rNiSS7F2m7oX99Ngbq28",
  "key26": "4c7QkPNUtNkgJMhbAtSATnh5ezy429Hbbuuziv4LNWYesmWcvkkA7xiEuw1xPT5AbMhwd5fYjTGW8M7bVjEucvcN",
  "key27": "52bXhZkfrhUMvMzrb736L21DV8BaN3HAaUo3NvGZPVg7iojhvd5TfwGM3EBdGriZZhxGCQe5UJi2WZ8FHJ24hp18",
  "key28": "4ATW4BchKSfCtMZv1gHxUTNRQWiZMrF2fR5R7UCbhqTrEvnA7N4DfwtKnMiFMKDNiHTbXobEPnNJMM5YeMVqREtd",
  "key29": "51pBD7Q1fj7Mp3MPBRkYd5ZHAJsbFzsW2pXt6jSrSS9D3bnRjCaRZvh9iu9V7sDy43GSpjVcjYeserm3Qc8XAsKj",
  "key30": "3jdKnDZ2pypn9Sk77aHuGgeaAcscG5BM2YaE7rUuPZHpRGhCChnsiGfgi8zbEPEgvxdZSqYyPQX2owjsmu3D4jwu",
  "key31": "3PrzL5imsFmWUE3uaLzduxLjFNkThYMq3C1DQKkbL8AMBpYXbuX8sXkocZyUZsV67jf5932mAresUSbJBDNCpF3D",
  "key32": "KVe6vCV4x9fmwvJLfVKBEFmc92HH47iGhJCBevBfC214EPXLpxD3JJ6FkuxdgKqFdvBjVnkCtAsDrncVDWfmX31",
  "key33": "2Nbap5WnRB3Dy8SvhRcqUdBYHTsWQ21ser7KWddCW1uFw89LLkupYrtysNpfE4mJADBm7znV8Ya29J4vj2Q3T2A8",
  "key34": "2EDw8PNCeyZhqPkQMosQVCb7ZqvCZawNpB6sNFXAyTXu6k8oFemkutrfQ6dpzdTqKusKtj6DxpDynwAe1GaJqKUQ",
  "key35": "3yJZUFs5ASo1tKnFVnD7sVsbrL9K1yryhQzHW4dyTbucXE8zNwLBcwyRCTcwCfH9cKwewJzqdpFmivGNRPRrJF42",
  "key36": "2uQNLYAcDzGfC4USabYDVYTMX8b9nQcjcguKgxZhthAqPm417cmD6TxGPbxeANFnAcRxa5LbeYrLNfF9o8avECpK",
  "key37": "3okgQMmWh4XezaiHegfMSBvJ6n19g4Ju1iiRuugMY7CewNzVsybRAjQ53iZ7xsJmtCSJ5DxdJdv2nx495JWGBY1C",
  "key38": "4DzMFj2PcSEdjw3z5T8qCfXtVBE6WvYTJUjdcpSHpug2weHgnerj2HeADFNRgZRYUvgjzJaiAaXo9vi291SRXoM",
  "key39": "4X2XTY7Sn2mogVfBCVbZicTqTVteb5BoGz4kKNHxZ3uqYrHxE9mjwBPappwWRnHzKfJHGFSqJxoUSeDwcUwtGeHs",
  "key40": "4e5zirLdzvGdFpKUjua2pMEBprhb65pnykcn71y1uxg1RZirTYKvhwGZGR6VZ33RYC5t7CpFTRiHtYcuYmLoLszE",
  "key41": "4u3sWMqAzV7f8V6RzajcHKbbFFBd7b561mXpgFTq1c3gFRrK4UFYioME8KbaNT8yevReg2mPv34io5tdkUtYZ1vW",
  "key42": "3RVvsZRmCoF3rZnGkmw5CGMvuYkRNWdYcwYBGb4Ua47LqWbtQZ4Vo2RKBrDyWSUPDrDhQMzXuUdd2SvhsCnEYign",
  "key43": "47KjRaFbEAsdfjtfoyhcrJaExKt3zpPLDacpPQgD29B8Gs7TCHB1Cozaxxyvc9wNwGEqozVodwuzwDigTiKFdois",
  "key44": "3WeKdTVnoEe8xFaFyMjwJ9j7ZV1RNYi5ZRw7V5UwBNkfXaT7yrsM3kb6WamCJHsPFNTEJ4WPQ1vMBNFZ8bhtcwwU",
  "key45": "gHA8FfAK5tCEHjs94AtWjvuKE84M3HNr4g4BwgSe5sWYYLFuAAtpgEze97897FvYxUUHsh1aQWyx4dLG9ZaosSv",
  "key46": "4FPbxAcEnFnLBnMkxxpiaxKfrAL7ZRy7oVTCs18Bua46MTiUrFnwUXJnMv2GZ9kBf6u8EVo6ikAL6nGoGp8gDMM9"
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
