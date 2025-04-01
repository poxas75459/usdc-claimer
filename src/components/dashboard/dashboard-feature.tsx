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
    "3A9JqvWdcLrugvyK7T2vEHyrgnBmHjj3YjPwPk4mPykKtGrKvXdnRQZXeytfTbFu6e3pDdnG3m9SgTGRp6GsS2nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4os3MtFx9RJEgRRL6e2mDZSCK7YoPqjip58HAobXNLc4XKZfN1tq1pxL4Kzdo5KXUavXTFNs7SDoYowungzy43uY",
  "key1": "2W6LpUD9UGk9Y9xT477hkeUdtysBDdmwJh9mNFzqgZhBTPJQrKjwfxpCX6WRqNeitvrAyQtfXdCfLcVcSE7xHy3k",
  "key2": "36ouYJMs4fAWNSKjWo2MbJrLjJVpiSbJEdTDHUBw3B4C5AB7nuHh91n3FKJznhTw6YBQQyzZnZ9Q2GWQxwFb89hU",
  "key3": "5Bh1Ky5uyLhNxg9JWZA9rVAKTpEiTxT9xQgsYe67x7EbuWuwHbJJMV6AbonLxgLMnqAVmBUmctDuCwBg9HJ5h391",
  "key4": "2i99B8yfgWoCqa4oU2Cn5gNhLV4ApHFkj1wRwkKYm7abAPe1bviu8M2A6RWsV1bU41yZSohPxEKYGHfC6L4X7DVR",
  "key5": "58rq7g1hmJG3fLHbKjre1ksUBRu4hxW9LJQCWX6aBc71E91RnBtfa8p9f4nCKhWzBWCnKSyxS7KEce5TGDVNXaDt",
  "key6": "2RGTXVoeVd55tCKLm4hCB6TJMtUpN3jLiH6apx6bAmuCQ8RtRB4fWJCFEbbCW2qbKaWeEV7wxSVtdkC7SZi3Woi1",
  "key7": "5nKtyi5xjjSf6icSc9eE4BUXbxNy8Zu7HGbjrov3tohLcJULeHCQ3Bgte8FeykHZYCf62Nem3vH59t5TrzBS5yff",
  "key8": "4meFrWNnukA1CfD5DvG1Gij6kqiVr7W99WBPXdqpdA8SowM3T2fzBKw9rGNHsEGYv78c6kZaAhYbJdw3MfHJmhMu",
  "key9": "4WBRAYpgJBnpymCx3PNVPMh5h32ELf1V4ybXRURaUrSpkFEGM227FY3EycqiRT2gLB5xtSqPsCSzqYmVPZjwCQuN",
  "key10": "3CV6Qet99f5Qi2WYmgDbqg7pupHddz26VeygiGUWKS9AxeccFGeFUwHbAqjeSVx9hHXbTi4ukaWmaFS5MMGELThg",
  "key11": "2csmfqHkhD9ksr9BZBQAmYqfdfSLrBcrjEjeUAcJjJLnMyGktN32Pfm8T74SmEhLQBFbwLeuTiCTBYdcKkrp6kvV",
  "key12": "3tE6EbtWfpGBp27CpT1t7NojLbBAvo47jfF7nUbNZwVBNBtKkiXFBfQaMrc31t6tJVQm1PUYWTxu6JtJne6sodBq",
  "key13": "3ZHUy5xQ8j68cRuShWpSVcP35LYKcADK121uCoG35Qr69n2T4Qnte6e5ex1YiwfdhGdDKfyKiAz5BDTcWXpZkMps",
  "key14": "4j3UuMeZREQgn61Mp6cTmpoJ5tJMmxQtDPkGxeoaAeUNog9FG27EY4UktrThQ4rCsSrgEk5ixEScTCDwgxa1mWtf",
  "key15": "5XP5Gvg2joVm1QKmqU61qDahBAaVpXTj2pDW5GxqB2WkPurV4npNoH9zDgs8vHura2aHJ5L3RSj54KYTRFAhPqpH",
  "key16": "2dhYXhV2dvHm54dN7D5E5TMyXC1UUAGfDLrtjJReXXzdkvUAoqXEp12okKCV3HXFAQhNat1cK7wk7BTPNqnAwYYb",
  "key17": "3hiqfGXdDiGpTorNr5dxf8NxrtTAV2sD5zvut19XtPpP6igmbg1Zk3fV5WiMJ5fFtj2C7YEfn6tKhUQ4kb1DfXp8",
  "key18": "4Gy78xpTFmkmggPymb7joF6zQRJGEYJbd7Mm87m5GcqA5TTXa9bu7cfFVywvAHEpUcHY4fVup17HPCtbDrwnyQT2",
  "key19": "5FP6sqb1Mz4KLLoHGzAdgrbZ3y2sYrK8m4BXYTaXQY2s4n4RESbhbg15GAEm64wHo2XoT8f2aQagGpZJnkGeN34f",
  "key20": "Ari853naaLm5E7tHRuseCJ9Lud45fJS3PmTck4w5SdNFSH5s3L8Hc8uei8VzfUTmbtXDXVkzHo8M7Q1FsSEjWTm",
  "key21": "5jYboUMzZBxaEWgTw4bSGU7kv9S5Xeh69B4vnkJ7PhSQTHerC7HtJbj4kqVDqunT3mdFEyVmsBCfXNMaXhZq4ppk",
  "key22": "Hww7mfxPtCbGkQGDxz9sX7TJYAAGreaEBSZZXqkFLYKRT9GwfHwBbRFDK8h3eVjJnGicmmsCnSQCNswwbeM9XGw",
  "key23": "5jCcSmbtDN8DaxN8ZqKps9ZB3RjAjRaRoqH9iJbw8fQru2eKm9QF95r7U4cnRZ8CmN6DerS2G5FoygaZXmmFN1nk",
  "key24": "5v6qqNnbvyb6k2oSUejXZEQwCNCWF6T2zfghZDauc92opTQesyJkoGPMYEYakQDNRL5Agv6VxYcM9VW7oX3Cxa56",
  "key25": "3Kzd8RT15A2q5nTcBAU9acVxxf2P5gcXS3XGr8qvFKLNqn6JFVpCaivJQmfNtpa2kvwqYbyiCtWm3yKHWHSGp66Z",
  "key26": "5oRNeEviyGshFKfmcz3K55x2t69LGypGPVZrwfdmwkpTx454fSHcKjg8rCxhQdtyS34JTu66Fp8RyhruJSFoTGyM",
  "key27": "adarKqtrnuRuSvpwdYgRa3XXLBrPSi29KaHSstvVgsvcjqYm3M5EZomHVMJzkzNXammo1HDfeZ5RDC8DgkZdUbS",
  "key28": "2MarmfgM6pSGyQYffr3NAvqwkoZqe64vcfQjzaoUtCE51tXpzsdXCJE2iDp5ybSFDHrMFgGwhH2hLXgeXQ9mEVNM",
  "key29": "2pnjQ6FaromkdAS8zBt55T3i2kUGZr7QokpXK9HTqTVAsZBJ7WUKeRLywFYiMJ51mj61jx6AXihz2Lj4bXKfv8P",
  "key30": "UEUjGVoYDWNenVniEukDYr9zRBFUmSDCtQo4inzocnAMU42JmzHhkYMnyHLoSL3GUQ9D7q9zvwiXdF4tUPzwDt1",
  "key31": "Sx5kzRmUT4e2pTPJY9ppRnef8g8Tc5QRpRyu8FNiJyDajWCZYZMZB4bETzppPTocLvrB6qLkXtwJgjwmJqNk2yR",
  "key32": "64zjcanbW88uUbPJwcTGi1bDiZ1rFMzbkL11UwUpKHYy5JkFGVXk5SeRHv5ts2tq3GEqAUVcr62kB8zA3EVcA5RG",
  "key33": "5adsaiJtyDkyQ6PeKeZ2PNL7UnBVj9WWimSZVQ1E9tyLoyUdwDuznVG9JrhZGS74LfL65EtFqUGvbm2NmMHm4i8q",
  "key34": "sruwMftQ5FmjsXStxbpN7sE3S5njN98ZMA3G4cqdiSZBSEaXsa6RtqcrdqQ5cDYygExzThLJ2SQjW9W4Xr56t1d",
  "key35": "55WtfnmDFdPuR6xtHU5fp7Vbj3G8cFbTbEDk5A7MeAW457SEoZe5D953X84o8iLWufmT8vvpCC6thXJ24qx1mrp2",
  "key36": "2YnXkixw4Rp7BUgN4uYuL4fB6me74FPsJicBekUYFxyKr5tL1CdH6Q1t2Xz2RW7W3V8RJn7CFPF39jDtaeiwQzCx",
  "key37": "APfXfH5bSLT4DSJEC2Y8CJieXRz2Mu3hssLRCZogpiZsubTFc84XK3auPwQNKFxAMTh9mXBSpwD2v6KwXJ9ovpr",
  "key38": "2fegem273fTkQ1MBk5cK89mTBiKiMVcSjRRdFcUbS8uLqzyWLQh9K71EQ7CsmhPjV1md3ec1dqkixpSpCBQdbJT",
  "key39": "2DXXMGW656s6oRWYEpEwPuthuaZrarAoaZzWPPGSKDosVLhha7h5UXiMVmnCFcwixVyTyr2AZwjRV4rzUZUYEEVW",
  "key40": "3cysVnrF1orV9rwoMbR3qMvJtNvSF6XMuXWLzeaQW43uPUWRREwgdvAnt2AJNVdgPLiPqRPE8tzXtAKupGmVYqm4",
  "key41": "5xtRLdsymdm8SQVmTCfhg8hsuTbeX3guYwpjBGxz1M3dkA8EQqG2v369WDwfrdaWLyRvEzw6uUzN2PkrDoTh7EAc",
  "key42": "2ptTmgeQECbxLgQ5MkiSt24SwHYaJo7G4CAoyw22ZfjToQM2m4JYhPf4DT9SxqYZF5fwxDHS8PqzT3UyYVSPnAM8",
  "key43": "F6fR7UZBVEK2NVBM323HWqzF9DCRaQ4hn9g84AQxbve7RHvL3CfqkGfmGSd5VnSzep8vPP5AfGNNmyoVqm5D5pm",
  "key44": "5YgpXo4RWQBcGg9EXtYvUSqgzCaaKvg1mLidAxKbYLpgCFGS5HfVvhYZWZCy8aaTWXY3aEJ7qLVrBgfd5CKdU2oD",
  "key45": "3A2JSWA8cTnPuvAsbQq64gvd4yNzFcrpzjMfaVwE3GKe3oocVhkBF5SBmyN8SbHgC7L22AJXaNhAWVZLSLM6BqmY"
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
