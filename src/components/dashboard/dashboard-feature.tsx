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
    "3ct7psaAM8G5jcSt2u8NwKQZ3UXcR6mcELVX9k5x6btu8pwGSwWT25uFi2dEDTmoZoLvRFq2wPKZ9v1Hfr1iaWKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53g2SpKeVfL2XyTgeMhFzj3RrSRq7VnEf62MXe3JVNNEGtMAXSi59vmnE2fxdLYX9ngtF1y8EFgthkfNahDPZHps",
  "key1": "4Qq5cDs7rmMuBjydxzMdex8P13GXJeyqnbSV8QXRLx2DxYdshsJZ8UiHx9rNPPakKSAdVkFQYLkdBJjhsYV1d1ZF",
  "key2": "3yfJBqhwSJ3ahdotvVDQgzY2CDqbbZLuqfXWbNtuYLAcZhV8P8D7Rsd6geebcCMzDraK3SJwmLz1m4D4dH16Fuid",
  "key3": "2tZ7ytacBzNi86fXeNy83H61tuJM82TvXgTzCxmL6HSTXgUys6aEUoHTGPK6eWR6c4ZPZzmDLvQRGv78N9y1P5vX",
  "key4": "HYseH8JRC7UcMyLuv8WZHJaUA8TtXfwsZJZ1iucpRqU2wgjuPLJePeWybXeEWwaAYAueHDRFe2BhQaE4nHYCh1H",
  "key5": "SFXCFfDrHt4zAUpJTNQcnZUqBk8ULfMV9Q61kMnFRKv2DzhrfrhkCSZJsW8uDpeSZTwWFsfYNvpZSrB8SXJiADu",
  "key6": "Z37inxQL5GPUCpAVxtFZdM2ph483YgmXd663gvHbm3iCJWLvK6ztemKNEqcZ44hUEZe1yBJ9cyxGETWPwWHrCSi",
  "key7": "2gnYqbufF14bMrJZgX5of7UtG1pKir8KGqD4sM66e6DfNd41EzsBAnqAwK4iBV92xtsNSkpLD1B1vy1HSBUhRNbK",
  "key8": "3wAEmoAzczPvmaXrcKGvtVUeiv3DhYpnX88hBxK68ruDSQbfmqvpAmLV6yEC8uKmKHcVkqkeaEg97H2d1JnZ7ArV",
  "key9": "5kKGt3VTErCD4n7cYp4xiuwHFKNwtUMNYhCWT9SmmqEfY5Pzeqyzfwbgtxi6bG9jStYA4mqquZxchBVCLR28Bybo",
  "key10": "4DM6Vjzp6DTfZuwCPSBpr6GpmuCzeLWqQ1V36en7y9ASQ8bsoPHttSooGENmsMY99NHpmHhyw5nCELK5u92v3NTa",
  "key11": "2FY3HfisLcnvXviHFDgBtnhfZxoXdmHQTYuX5FVdhYDrwe5kj9SoWnZUKRDhVFfbBdkGWUcr8Yc4noEmDiTeN7Kx",
  "key12": "3QAvRNcz9aZetn8k1B3y83HWjq1ATkVyUn1TdENYW3LcNseGWRNhjfXkdY4MG1pLaoksWDZ2Eq7xgj4k61PcJQ45",
  "key13": "LrmUxdG8VJZpJYbPCsfZsn2AhATrBR1CYHJ51BSwidBMeiQS4tG7vf5Rg8CtP6NYtcNmpNJswctuwow8cDTzrYt",
  "key14": "4FdB3GzWNLySziasCXhsCwCNkgWAdZpLyUB2nCM1bFDMv4cRTYNjvayh1LQqvhZTiDwVR3v3xWGw8SDFTC1LoBbA",
  "key15": "48RBC46nCH2fvX3s7Sx2AtLY5pSfBc2LP8zjGVFhRoLRYA98Hjz8qg3cDmrtVjGTMf7RAXtYhqCL55ihgabrSsUb",
  "key16": "HgMaJR6pSXetYYpCL9EzR73YxH1C7gwxNQGJaWybNBBugb1dHmkSFZSjwyMza8rAjZQhpfieeekhWfpjR76hEko",
  "key17": "4o1hX8H5Hcb4UBZt8fktVHQktwGto9SrR2Q914AvQsCVpHpsfUEWH6fj6FCu1hegcmodhAw8zMpCKHFwEugvhCxz",
  "key18": "det462DVznggz5T6zNzabaqnp1P8bcE35bUU2VGhobGEiLtmiPuFk5RGQCjxceP84WaobE8VfSmut199rB93Fsv",
  "key19": "2X5B7d76AEYkaDtSHk6izHyQt77FG4WjRdaj9cNh7GPLe4jqDykLQKyfybzvuBoLaTct6w5kds9ssBdqMhzcka5P",
  "key20": "64jnB6c1jqbUdm9AL7ZAmU1wPkfdsBUur7DpRjFV6Bf63wfmo2pKxQrSggoxxPymGCmqKBQZC7seGMzER9DFp9A9",
  "key21": "42tRHJktgicmSpnSvW7FLADx3fXjZR3kRLRnd79zbUDB27LPqFdUb3NQEf1YCbNYLpycdjtFHwCCjUxCoF1dJuzw",
  "key22": "3Vpj9MGmSoBN9u4sAoZJ6uAMx1BfENT6kKPCfmntpvZrLEEyvuXREGYuitUvHGMwSGGG5MdLssyJpywU91DYHTom",
  "key23": "JNbp5shWYoE5BNqXqYEB8aCMZTCSJ8HLCPf1Tvp5xm1LHLRpHk7C9c9cxBUyRXapiDRVE8UE9Labekk3gpoMLX9",
  "key24": "4LgBdhHjnhBiHVzz4CBdVHVEYK8U2A5Lf3FQ2zdbXDb3oxCQBYh8YkkWd8SBEHyVYR6gGbPu4Q7T16NCMuY6okZC",
  "key25": "488E2AUpLaYSZh4DKSabrAausRjUmj3L921CWWebRJ4WhELJ2uvLJr3cQKRuXzaF7CuezwZS15WTyV5pEWRFTEf1",
  "key26": "3iSyXoXKRLo5itMSXSC6ezWKoTvgdkDpn1zQRnfAwx1ccoyxUfMXq7qd5YVFuUvchgNX1sar76Fnjw6x8GTDt7qh",
  "key27": "4xMNHFi91N1RXprLYt674AhkLYEAdZbmaX7FnqHibjFH8PVN9Dd4bo8jyRbwuiJYBrRVDMgUztd4Hc2LjxQGNAyh",
  "key28": "g35kMnp1jk56BiAmrSXCsfNBrK2MtygLyrX5QKStwGh8zDRtNbDwJYVdfbaxkiQj58aEBiA92xEAZStQTSv8xNM",
  "key29": "28en3fwSvMwsh5jV7nf2ny11YMmHxcc4bZneoVPQfBGdKdYuwRoYp4tPtVP9qiUHTtXcquaRf6QVTFh6SYiJeDun",
  "key30": "4VZMpS7yM2HjzK9giwiiZXJE4sShB8i2HNYiDS46CragDqBah3TkSwwpMYov8q53688x3QGNigVsbRVKQGwqtrLr",
  "key31": "3VTn3AzVTCzeDDzFmgH7Nhn2RYkNiBmGC15iMKm1re2mrrzreWj8yJx8exbuMeoTWBtRoXHPq1PyJfvG5yr3XowC",
  "key32": "57tdKE4oitkXJ5A7c4cyNCLDaJLE87LPcwJDzDAcQHGLPkJpeY4UupDjoD8eebsaFK1PwSXQSJLpcVKUJfxPCLuY",
  "key33": "Kjpx159Cmhp3mbfbKMhntJp4EMXKqGyo3ewyAxLFxKguMXedyCHNUsz1A35f3vqxMQYQcT2PGudFnrCfAC4TXtk",
  "key34": "1B8nb33firZBGiVd1M1GQ3ykhdBWruCBg6uesN91k62YQ8p9WSADYDDaVsCnmXb4zck6EtHZems36DyonuNPABy"
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
