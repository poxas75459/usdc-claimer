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
    "3c3eoyFeGFq24VYHFnU7TNzMF62UD3cs3kQvMbktDvADmuNsaNztNVjo9hHzzAD9JhpCp7WB3BAhWXGc1atM9ecL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c758tpoHrVRUx3GAERezjnaV9D9yLutnpbnXgY6R5DX6zKmGBp9KUVhAhqBEFsoSKW1avGtsJPSUXnjVbfTRoCG",
  "key1": "5CoTBHSat8JKC6bnD4phbSnaVyQr2UZWih4Sv1zwWB3DTzrGWq5tkqajyzspYTFuGZgywiWh1mxgskbpaPeMatPG",
  "key2": "5xmrXecZiocAihCVKBbmVvgVsaRoESFmKF4yseJ7zX2hho3ovz2BvT2V3m76CvcYutX7g9bnB9t4gctGHh5vEX5B",
  "key3": "3LzqJcdcpHaTr2762kwNU2BgoYTPpqngpeVjmaBTBfvcHKMxUtoJrsjWeRmEPmHZGPccKqeNnizs3jSbyPU1fmsx",
  "key4": "5dFvRaxzvc3TUwC5xoPehx1qapXFgoxXPUvubfWwuEDpEK85vaETBQYpZt5yn8STv6TPAp4ph1epdtVxxF3jmbsp",
  "key5": "jg2iMVR1Rforo7N46aCfLJVi7HfqRKe6Abws7sobzFicaNPB7digGSsvzcLRPUQAzfts5JaB2Nfub1u9cyUCV1T",
  "key6": "2yj1hqNA1hQduppxNWCWgsdAPPBM16d112aHMrwSENdmWJXJq7xnYdmPU86872VHqPvZ64Voxnsq9Mye3V7P716Z",
  "key7": "2EkVA4UGRfETMtW8Q9Q65paYs6Ydh4LfVP1RSHp9yXU93331PDr4hxqHYALVEHfiuZHQeso3hGM5tvVWvSwGrmvf",
  "key8": "Sde9buxKXywEJENpFtDFc15nhkVXzC9Q2hMyVdv2Nqb1zn9TDnYeQqQj1qMwApHco2gBz55A4e635WLQn5XPJJ6",
  "key9": "5qoxkVQ9EEyC3DwWagpgt7aHjYtAsPnmgNh17YhVtUX3gBYE8u1BPwQhmFhN6nUf3Tk6FeahuFy9cWcoV8de6kQH",
  "key10": "5Uv557Vud3ArCyUvDW9Y8kKKngG9pxy5z5Ue49HjtwzB7SVsFi5Xccyenba2vphHCv3bzwwNjfjMgAqH2bGqZgqt",
  "key11": "3hmrnUPboNtTbxLRG6xVxULDcizoK5EUv33SYGcgZF2oAmrkYLJJrfCjAjthU1gFzLCn6ogKAVduK4TjqzR7ZJ4P",
  "key12": "2Leaz7DoVhe5c32bxZtYMdwxYZSXGEt3WmuL3S41Zt7Ab3xCM8dkKYy8TVNfMAc5hgpQS4pux6EVX3EPbjGcDjXU",
  "key13": "5QP3QvLMPxtFzHHyrXGuD1YyykKKaZ2A6N2cK3K6SUVHqguV8omFkiknP9jRvaZ1VxQyLqC3g9aPaaGpJsZ6DACK",
  "key14": "X64DSCLsuw6p6qinBesNNGudpwhXSdSmU4yAQixDHSrn5Xq3y43qMRrTpjvhAvT28BdLA25poyrHX3449W3NXS5",
  "key15": "3vTWfvg7ffuodPdY2dQa4NkDcKuYthsFmkpQQoJKVUN9GmNk1kiAbUbPADbK28JDRbKDjHGyCbpTnpoFhBYGCAPA",
  "key16": "39TdeYpA3DpmiQpVfjpz9EVvtopntDbKzsxr1JXWiKgZhKhPdmmnkoBUJUzjtVwHkJ8yheL8Du7t3bBKGYXqezQM",
  "key17": "44WN8QnSmGh5xKZomtC43d8pRnzH6PGgbaRkvLkaTF8Vd5WuDFysi1FqKUQMbkondARB19HfCYUWqm5K742yHewU",
  "key18": "3SvaxmvNzw2oCccSwQCz8R9RkUwCnX1Kya9SBw13vgRRSQiAuPWwTBjUesG8E7EM739QMcFo1pnuTcvXmn1wFzLo",
  "key19": "GLE9vjKYDSJ8HZoWUk4AavBYaNfPpGGzv3FCQPkEz5393XKUTszhSz68NdMDvtyLg9Je6bXSB4qL2YtUAZD6FH7",
  "key20": "yieFw1S4t7PK83QuZqagfRutcFPA9bmJS7njdWGZPbYu9U2pWd2mh9SGmyrb819uPWCPeN2NfK18kmZH5xTE2nw",
  "key21": "3NFTo78fZA3mcDFG5mbN14HgqurWfXqqH1JgtRQep2Z8hA9nTw1zksEpqF5qEuATfSUwuFGKsaVrRzjb8mAkAVmq",
  "key22": "65jnkEtcW7SA5hogMwK77gTGMCF1iM4wrba3rTxcA19G2mwbASLFxfsbyJ7kor55rmjTP6R3M7XFEVaJD97tvotq",
  "key23": "4QFTCHbySRF6UmdgND7icrU1EmEhUziVB3VVpYYL7S8ESYCXBgUGXHrf1Y3Cm34jdh2dm28Cu8CSaDFhHPchjRXx",
  "key24": "4GtSdpCB73KFrA3Z9WV8H4GvyJizTYrvhdu1CKZKpnzCYE6t5Z368nEEtnAiEX1azeCkGUu5UMg7L913ACzUXEf2",
  "key25": "58SXSey9PNfu1BHxTRSfr3NA4nnPtTiPuWKBxn2jy9QBsCH7kP3gp51hbig6XJaXbFnLaYo7NATEwkKErAcX3d5h",
  "key26": "a5v46vArcR4z6DjDkMPuK3pyDbEUadDjy85FxLe7oXoGGoZUWzLMChg2r1crFsXC9NqDPkmEYXb7ns63XsxBYvC",
  "key27": "vfCkixTHaHzwzBkUvBUANDzxJdWSLthcmir6j8U6PG1bqjzKtaZgZj54YrGize2o98pjV2D5aHDtpgfsgoNLbNc",
  "key28": "4xJs9qhYhn3S36LeMB1ivctVa4xJ49DCgCD5PkLu6vE67AWFMgWJ6zZnPXDHc5fwKmNPwy8hkvV7eTM9Pkb9WZyX",
  "key29": "5ny2jGaHGfJT3eEJpAiFoLoaXUT2o9EEGJ8nJwVp6Ni9zn2f1U3fMSXkxDjkR9RhmjNkREimfb5SeBJDgbpYnwqy",
  "key30": "2QModC2bCXV6n5Wrke8RJYmRa6Xt9HTEfBb6kFsAEALHsi9cGLgYbnTudxqmKPMm8LfsuqUqe1hZmJZ5BjqkWAV6",
  "key31": "4aJ4R4qdAS7h4ZyoY9yegHqTEQcP4puKAVg3gWTamYomgXegCUQti1FBRHDiADasDPPPPXy4ePkNbKbxR5H251AR",
  "key32": "RYLwrDAyW3Mjk9D1PufxX2fS7f3Jwkx7HTrDAVQrA9rXrL9jqqPwk7i8ftvEF4AaMPd8kMMq57iMBmKuihYeEQg",
  "key33": "3395h8Gpc8MUApsAymWnjQXkUiPL5pwLtqaU4kbFycENKrzvFBgbWFB1cGFZpt6jVojBskbHbNmxa5rSMx2UWtAc",
  "key34": "3GmhgSYsCs5XwU3VgawdCLoyTcXpGQ1hHvxceQisGurnVsTBbieM2rNigeZEVouZicaPZnqEpTd6K7kxGK61tuRA",
  "key35": "3G3pYZnxFVC4GgdC1d6xV8LJB14b1FhF65k31c9PWrXpA5kEegCEMpgYVW6UgMU3AKVi2WeHxTEj3DbnRv19xQNB",
  "key36": "5CDBGo5KGoLtWnYLJZtgujmqTCQgYWyGHd7M44YS7yk97rHQmayM2Y9TRuZi7yK4LJ4MXRZLpb48zs5kn8fgFfy6",
  "key37": "4LRBV5swCdtCipXTQ2mv1YNjCrtsCSTWy4T5ZQgQb6a5ZT8FkYJmF1DQhUqAnnDG3Ky1N7RqS3WebBgY15WonX1E",
  "key38": "5Czhi1yGBysJvjwmdCDKgGz2V8SxhY98KXgXMEBny2ARoLCw5xjgomDYmYQfky7xvBtaLGXLt2Xj4ndc3BqLcSYo",
  "key39": "65PZ4dNL7frexfktMLQaYXvhrDRApxetQSxxxucbvJKm79s8X6T2mhb9BLsdqC3WNUyFXgYpyoGzCZ8Yv2QiHj6h",
  "key40": "3i5JEJxNjc18QHQhBDNghvobZtQjDWgK1fasdRVwAaqcUhNfnijDZ6hTXB4S1SdGFAUv7gLFMbbtDwneKQpPVmMf",
  "key41": "53H6jujVJAC3xdKye2zGkiZwy2jrWBZMZEnR1LbhsfjXi2c8bN9vLipU8qWtVTxrEyg7WRvBc4ezwMhK8mBdN5Wp",
  "key42": "52WfZZm1MDnwoenkA5qDL6C3itRCzCVWWj1BJKAPo3JpvrK8nyx1dJv3XAccdC9jdrQWJfUKUy2rEh2sdZUQGmBZ",
  "key43": "4oTiS61s99MgcmVYvKHkd4Y3vtfouv5dcQfxtGVdme4dsaC9KFGamaVNC1zoJQzTGYmCtWxV5FfzScErQHpjwmUz",
  "key44": "3SrhPvuwVSJFxkJcUVG9JbbJXgZdvxt6q35QHDEA8vHUQDQ9JF66QYwMoSFxL55fGzAr58Em1jmzCpEXgCWcKgmF",
  "key45": "2C58EwoDwBZxwDaBYMA7JfdDXJfTtpL5AgUejpuEtRSFXFEWn16KxuMnopwcG7ixEXTiuvp7jCB8G7RG9mfdesoE",
  "key46": "4CbEb5kQz3UGqpzKyvFgRFR374XPELhdxs3XFbnAZM931gZbSDcVMrhFiScKEzdMi1hRHLKtYiYWcaBhw6fkLnmz",
  "key47": "STtqk5U9zQfp1zrtS6qkivRAoNDdB1sggbXQp2J8MbXpx8Etq3v9jTCxV1FFoRHqdhpe4TTsS4jkUCwMNYLhbo9"
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
