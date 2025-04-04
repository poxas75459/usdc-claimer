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
    "37bqmKyje9tcPZ1qsS2WLDTiwUN3bFCPzNr1Q9Qgvs4gr93k8zuoB1ntj1UyWcwR3DjLbCDqXDxw46miQL3SxPvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rufoHn4ajbLfEG545SLo8vtymZYkHNcVxJk1iV8STcUPNKT8pRNJB8NpyimmeNXA2S8Mb16ouuTHf4x9XYYTFrj",
  "key1": "3n8p884kWevLNbCy77J1cnmLh7oaNTZFxAF2ejhYsychLNmugBnTALteaikfTYpTvpeEjtjysuR6FVXeA938D1Ae",
  "key2": "4ixMUmCKPfeymvVn889n6a3tq565u1YbSBCN3mDPnLNpm1LU5uL2euXZ1p9Fyjf9sqFSxyeeoVUUXxzYRsa1TkkE",
  "key3": "4fSCmdBxAvGpt74w6VzCAdoARAQLk6QVKwd3Vvzv1eN3bSu6zivWzPFi3CuWSkUZFCxMgSkHDy4d21aLZXYiQEUf",
  "key4": "Jmvu2LZSyTfME8BxktwXE6xEaNaLhKQWLS3S3GMXzsSVna45LVFdjtyMahZvhM5pKuBaYRdMSk3oWW6xBrkWsWW",
  "key5": "4rb2gjbD1fgy2Tac5Yhu6CMm6GiRTRqyNaJsx2mjuX9mcQX5tUuV9YJ4YA7U7aAd5Qg7GcnR4JPszMEBk9T3krAk",
  "key6": "NQky4JDawGpc6zrTKit5kHeEAZkDZrGbmeqYDk2ovi6Me8skJ4MksRuHYDZ7PoPagyuE7CNudx2xB47gW4FcAAB",
  "key7": "65NEPxXKrm4t1zfAwu72sc8PhhN9KKKCMJoKffTHCnsKDdnLKLYMNLMwqzzntk3RZ66v2dfCqShDLcvjK75UKnYg",
  "key8": "4qWJKCDrDPrTVxV6QowfdbnEqHCmzPoUaED5zMrwcGA19g681f7QH9pwZikFCR6c3rCoPuMSgjRpJD7DhyZbTMc4",
  "key9": "4qcJiAoH81E8BhWgGFtnLXtCZcELhaxuAC17Zmr6xsGiSCbrSHECAF2svhLe9nMzRAX7UY2qSsc6FUVoUJt7BnZE",
  "key10": "XAYsTDsjSLrf3A9KaQytLXaW37FhqSNCzt1ndHRgVyqKCvv7vygCDYDmkRAFaAr3dUZZuJndo1u6kkyacMdKotV",
  "key11": "2ywWLrzwpfUJne6n1ayQnPEvHnbUVqVSjyhPCcpmgvfwMMZJoqRpySvfqAFZjbMY1MFkrTAmDm5mB5EHqU56ksyH",
  "key12": "66uuQd2uZdDaJDfcCV8jT2kSNHyiGVHzfPS3tCM1XfpSFwrR2aMneC4wyodXZMjjsjqUtpBTL4F8vgFJqoxFLnFX",
  "key13": "g88DiW5AkThs3xRZBfnyDV11WXiyP59QbCMDQseEaEAVm6exfXeDFfnMtBz73P8f1siHcvPB2Pbi9uMoxBm9bsj",
  "key14": "3WNrn27ETBUsd2FuU7vWFVQubeKwWZBTw8VyxfZKe2Rz3TjkGZJGeBA5BkFMnc9464iTqwDeTZmRhgVvfenC8jRQ",
  "key15": "HMYYo8wqHgeoEgzEX3ak1YGtRDHy36uGR8qXM3kyUmW7M8UQ2NRgkxpEdS8oLyHMn3y6e13Ni6gcGDeKgGwfvG9",
  "key16": "545TVh4N4DVfGAMwXfpakkrNKSNrmjDPr9oBVerMC4reMiCdthKeKVRccGx6b6RWRDQhtE7ASXajqh6m1e9NtTkb",
  "key17": "4yWu5JtQz1DRMmzhRL4LzSpVMmYumyoCAZDSoCCkNaUY21XYZh25WrAEVczdFwkYUDY7aH26hinCx4Ks8soFSmxb",
  "key18": "2Gcd55hosmpFo3RfL3JtTZDM4AtTcM6AS5QAmbxe1B2VwySakmXfUPus1yFEResz52pWNP5hiPgRh2whH5EHouD8",
  "key19": "35N3botYQPcajV3StBSbfBcSJ3JcRftaPCpanQqzWi3bBCzSqghVhv1gGP3Wpp7qsvPn7rMp7boF2sEdPC4CTcLW",
  "key20": "4v574knBJBEd3U5ojkaN3LnnTNuc1cqSq2TfRmpHhW9pGRRaynqJCWW8vYi3kUAqsc6WtGMGqHc32AUNsdBvh3D9",
  "key21": "4JvYS53HDVFpWGD54bqyGc2gny4BfYCvUHpHTPfqSUXJt1NzqnHsuTxAzG3CR29sCmcPbumZ2qU5LK7g1qHM9yTi",
  "key22": "3xRiSfyL5PKYcnrfdSL2crjukbP88krSVGDKB27Nj4gkwRig9B3omy7nK5sjnJ3sDbJ2FdL847UtH2vm9jQn6Cvi",
  "key23": "3MLqg53AojNzAKjanqBUdFXepaLWnpsU83jkb1M1bPS4EA5GAMbKrqKJWFX4bScyEACQnwYmpDYC76UaBMqhiocD",
  "key24": "3D9otgxBLYkgyDQKRF4u6BKgDnf4HQjZ96PeAWDrRzjgFKhTMc8rX7CwAF2hycjbN9TkobC6YKhCFek5eUNZBv77",
  "key25": "4juUcUWo5V4fpbLwp4zSTaueNubx3d589A4nEJM7E7vBp8CygsCucRXK1ykDFkGwTgnm7CBFgns39gqLugxvc7Bu",
  "key26": "2oBTKNsMv7GKUAvxyn5UTKEj7hBfNkV4XJ4k8NYdHP3FNtxQH8fdMWS7qRkosUM7MqUERMk2g7ELfJj3zT4uLucW",
  "key27": "9VHeQ6Zczpw5EpAx1tJta3PtcQi9fKqHq9Fj86HQJtWhxjuteqvEmCc5zqNvmhUBcmnR7PzGzBdsVwzBzQ3xEJX",
  "key28": "5gL5xyEtatKRZ9gC53u1jiMmoWokYHVVarK74WRdnLsdxay1yV98N2edBeXG3A94x61Vw7L2zTCtrwJcwuwJrNJt",
  "key29": "2VZvBjNCzqGKdJoYNr52vDMBS35mV55B9vagqXVsAxmqR2gUw8VmqX8s1sa1wewehTZttYxP7zPDXheQCqoqGFZJ",
  "key30": "ExcAS3YMJ7PhFi4LSXYBBMPdzH5fShhGsTTbfdbSQfmAZutSxFxffBgZWPq7HTZMpPqzdCWoQ9ySgCma1SUPyxQ",
  "key31": "3heQVdyj2cnwmg5zt7chLnSNvkHGKztfXU3zqueQXDhiSEQmTGzXzW6vLUw3aLuXAwWRKqhN16HfuzS3AiRqaFfL",
  "key32": "5CbiWVSYpx3R1wmfwtHbwHRDPojhhdxcwqPRX4VPKr6tuJ9MvtywkCVHpKp55214bDGGynduateSxpjL3Xor7Xtk",
  "key33": "2L9bavTzdMH5gDmThPxaH1dHHCQbjFXKcc7UaCSLi3t8Hp65xSy6hUsrZMAULgpwL4iv1RoJbeDAaapfq1YZohjd",
  "key34": "4KLcQcq78SU2V122Ndju4B4MHgCMpSDXADpQrPQvWdPRFvgQpVaq6okavVuVbR7M2UASfPwopsyxmWoacYUAwLSJ",
  "key35": "byY2X5TFj2Sxyp48mmzkCzaWkzgNHLFieRDE2hrP9AsUZWC7p9wq3ERnS9xzPcfAHKDsX8uCbvhMipnGiMC4VyB",
  "key36": "5nUYYNrVMySwUEyQygcSYgVm282Jy3PWi5m4mx5uWiVBxPkssUkgGmMnA6sfGPCUxYkrcUM1v2k1KwRmqB9Cdvd6",
  "key37": "4EyekWTQsQ81r1v54Tjyriw564tmxL3K5GuYzbdF141aX51SeAoH9Gf7yhzrr1Q9xv8q9V6ZpXzpVtavgrAV12Ft",
  "key38": "2jVZPeQJc4bRoo2nMWv3BtKNovPL7GWQtD69uLmqyDF5DQjMHNRZMbS2wJhksjUVqpnB9mKecGd9ATnHUnxpPnLV",
  "key39": "37ZSe2Yezjg453KWT3CUywgadnBnTRKKxMPgwhZb7gdk6hWfwbTmCVodbFf1vuRrJGHFG38N7ERwef28xqdAAF44",
  "key40": "2SJKcNub8xmuL6jM6KNAuiCnnavDcef61SjyDVgBjBdMLWtkffwWbpBkU8VwzCTKf4CtDtLSDbNpDiS4VkZmA34x",
  "key41": "4Czd2hPxYPqSHLjrWrvHVEdW25Ak8qpkBQwrndjxGtfQiTMQin8QfuVH8y8LqxRH8JaPFR5tqtVsiViZxkvN357v",
  "key42": "5iJEAEja29ghTy4959XSRTs9kJLj4zRGwbeEqZWTZaxExjnfvBytqaB4ta2QgMxm9KE3tSGvHKs56gJx4bUs97gq"
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
