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
    "4DA3oShvuEPtd7aL8oeDELf4XArpnQCUvxLHjXJyGC4h3X7n7VrUSK4AMeZBmZXpRfGPvvshf4Qaz5YuPnz1TgDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfBXYduE89vMcf7awUHumovToteydg4dBfM8QdNtjNdmDQcnj8jsziNYSCRgZMD112nxPUo9fPELCePGfufmVMC",
  "key1": "5yRNQZAkRuWc2h7GHKxmTY7ibCDkEZHMFujcW6De5FoXR3dwUCZaBrF1jhubYqbuQBiijcgDWrFymoJ46WBaH6U9",
  "key2": "3EEW4wmYNsNcsBS6Tdk5AgxJ1NyopB5bMTg7v1wVnrt41HN1CaFtCa37YKRHcz7otjqE8fehbnZDzpGCW794NnV8",
  "key3": "fNAQhLN1jfgrDjtv9aHQqnKi3E8xfP8pYwBUR4ok3fytmzz5bnumm636A2u3DutfNumiVM9CQadWzr1ySQ1Zsoj",
  "key4": "2E4GmU9it4TSHwoWif3Tm8snJjutvfJM7kCeyhPPGVv47xWJsNvLiNinf1yCSgqNyjKuJYXqN7NkL7CdoQ7qYBsB",
  "key5": "2NyHNa234tErptrsxf47z4SKRD3RCFUYf7Qapydgj8e4evm3Xes6RSozKGbvtfJ7iqHiJDWkSREMv6EGkNJ8oGzE",
  "key6": "2NDU33UYhpnZrtidnXHnhGK1w3FoCtoHmvQW4VyG4H5kqx47iPKHMY5Cn5v7Taewn52yGtitJMqf2YvWWB6FMjFB",
  "key7": "4QQbkTARRee1NLaHSMrxPpJajyZjYPbuP71759qeLTntQTu3ct19LfgYL3n5GMyRFfzGuCUfcFA2REMfFQ4Ro1qV",
  "key8": "37qsFGcVXe6mNUKkbLymhHpiYgfgXs94RPLhDte9NQMfcj7WgMoSKpMHSKXkcN9B4qBaCmMUQXt9pSWXFapXSVPn",
  "key9": "dsHHcg31wEQRrzS8QngXqW4tGC3Hk3J6kJZYE4Cyk46a2SQ1PbeqnZf5h28bhdgxCqjD9k1hkLzRrY94pBjmRUV",
  "key10": "5fswDG1zZ3j33GXngDfEiuqnMSZGmNPBu1JP3n5kPsAUNFXe5WVn67W9mXvSzQkwzmYpVvfLx3v9d8z5wYxSzqGW",
  "key11": "67A3zQsYMjCfEJVd2Dr3PHGWQUECdR51bHXsKGKu9q61qed31EJMwzZJCdrjmuD98ffLjeuVMYRYYK5RWJ82KWZi",
  "key12": "3JeXfsRePPcfStZ5P2TcnsG6aqCdSZxE4focdwfJsiLR4Mvm39Cco6UEpA9U9A4YSTBJSmjyG9MgKFZqtA9pNb3W",
  "key13": "5xxZwBiQ1HPzDn9JMafsNZaEQKKeFvcSHbUkRuiQGnNhdFpEpTP4u7eiAN2JnGuGaccLyaftHeSzoMbLMqu5JMkR",
  "key14": "5anNBRMgHnmtBz4nLajDhU5PJEEg2fBW1DCAk6ETqAE4DT581qKfYDhXUHy2RhFhtCAMme9DC11vvqetbFd3pBB9",
  "key15": "4vSGJMXpTLwcU12M19jGY7aoHsMdkUf7xT33F2qEqro3KtMN1SKPtxiG6DPTrESY9QPWL4JxwrghvPZTrB8LnEXe",
  "key16": "2pcMos9V4ynwFGojqpT2JpdpVZJB6jfjqCbpZBnBVr7AEGcxPiksYCg7XUfLaz1j4662Pa9afx42kwwTFe3rSdD8",
  "key17": "VTHsD3fuRMi6JsbtBDM5fYLni7X4JHGjH9QP7ykccZfyJYbTbfs7VssoAFGPnCugBv6bjDxvXxHqrvrngaJzQ37",
  "key18": "2KuydHgLWVKjR6n5TEYbbZpbgZ7Unh2ojECDybWkraKQrskkHWPscy5Gi5hNvh5MgG3VMu5oCBRhT5Ra1chspuya",
  "key19": "4dXgrAHiW2SxHoueD9ewz19frSZ9swW9GZj22VnARZGq8BvVY5stwGr5tMZZxuL25dZuMrmNrq4sNXDxzp4TbecT",
  "key20": "3sBRPP9QRAgPMUeTcb9UQcdwYnAPfXkhYEbrVZFemmJiEjxyCDwdGF2tnsvrX8zbkH3czHRn3gNp45yN9tgterU6",
  "key21": "3tU6mBuJtnz3Moe453Yv6QrcWz1iVqrmSKTeFpREaJYEQiCKFz5k3b25i2GvfwTs4pMEpzkrXdFtS2B9tHyepe9f",
  "key22": "4EfZWBZTRujbtm68F98bJNoGTN9vEYB5oPJaVswkZ5KCoZb51G2MncTxmUA2Tq6PXQ1RSPkhr6hjyiadXkRAbvPs",
  "key23": "Jw3TVwQs25oFUnPQLSACr5EAtcJXcDaavqD5pLbGQn5C36ntBRxgMadq4bqRnt4QbWNx5WwRJrufpnoD8dGwKj8",
  "key24": "5txvhurW59sLvBJDyvUK6Ect3rH6SASza2qBpib5JAoeQGEpDxuJNp6K33qbfGwp6DusXM1EjViL2wtpgVJX9TWt",
  "key25": "o2v3MgbfyfpRuBdo9ivpXe4huXhPpXoH26nsEdcZgn9CvBoZVdu7LrMtRJ1NpwcwBGsrnYv9MgWdhQPsWWc3Zf5",
  "key26": "3kKk9mGN7oRWPrjSBVCJxdZstmFKbAGvLGBzP2KJgnFYbW9VcDqpbVATBCgoyX8hMrtAoruoiBSnCk9oxSJEFNcZ",
  "key27": "4UbmnVWsLy2vb8V2p5tiZm4TH1cEzK2Ppj7yFZTnnrrRUmH4z5xfUa1ax9ZCnUd9xpruKMyRHUgGE6Xgxs8bZ3Bz",
  "key28": "3LDdvhwBeDJi3MfCFipG3HAbtT4uGxdRdYdny178typmALnKtAfp2CxQ3EFodUgAey9j2PhvSBU4ipgTyd8R51LP",
  "key29": "2cBHkomDLAzj2yHxfwmG42sBFqhY82P66TsveCuCTy5Fadj2kbt8qeHvhgjRXxnMCgyEU9sxSeZcobzv378yww8q",
  "key30": "2eNPnis3ju14wKqwqSgLNUtxc7zt72gJnAMEXgU5iAYb2qozatef7kgbXFB26QWSGzbLp62ZV6T83AeLjfCNQksz"
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
