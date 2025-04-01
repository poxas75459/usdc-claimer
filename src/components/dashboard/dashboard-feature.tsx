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
    "4HtXY5iGPrePbh2XjRvCJ7KbQgeKzpmmYk6PF7Zi5mLxWDD7o4bLNSubqZ1ssz5Cr4ffuu2K1VXqGuv2RGDYx3mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDBysvBT7GGVpjHS9pGhcgQisHZaW66vGoS5dp6EQ6c267VRCiNSiu6HYVyQ8u6rS5bGjVZ98FYLsByMKZT9Q6K",
  "key1": "328AaTD1WwzUVh3BXSJ4MFtAzCM1rsNgu9eKKVwU4dFN15Auf8Dyhh9NUrV9V875ovMc5jGRRgkGuJwgzPYf2bb6",
  "key2": "5h6QFvKnmKnczF1fJCjTxKcWTznjWLy5gG27btQvqWz8LGcLDPEQH2EqLh7eEr983qkQWf1nxztdLZXDEwEVgLjy",
  "key3": "5eVYtmuPQqQFpDVTdvd7zDpVmXPAat3GjkZdgr6zBYseX8ixZ2rwfWqF2YNRi93sJ22NkAP81ZH8VJgwiQyWtfvx",
  "key4": "43gLRgu5ukrcKycLnEYsTKFnSo9H3dJQuQcTXyr22Poi5QjPjQShtVfYxi9Xuc3eLN9t6gPtHguezhgx3yNaspTS",
  "key5": "8zdXwTMMu1AXQJSHbomxiJuD6zFpRBPkBNCbhKshbGwbJs4grNNXSVytjaripm2Pyb6MHPWjk8WU6Ld1Hp5HhTV",
  "key6": "3i78rE873oyN2ssp2LqGeMTezt5LGWpzJ7q7bi6KhiDsV4sipqnj9zQKsM5osqf2ESdb1SwNmpkXzZ11gi5aV1K8",
  "key7": "4BBHuFBifvFC8NrwHnHtRpZS1CgREGFtLJvCFPetrQFhvazeL9dKcEjuAra1RgGjq11WxnVeKqxv1fmjTevd7x4i",
  "key8": "4kznmznbckYPNgw8AoSjUiWWNdgmY58sdKTJuzrPSDSgMMGCMZUtuQ2DSnq6QM55RR8GHMXiGZLoCedEndHUFry",
  "key9": "NVjFbGJuAWoAgaBzo3Qds6S8kVHX5ZuFkgRPFU4fnPUZz9MdJGF1Ygtykuj1qgYRRn5BkWF4v4rP8ZSAD1mL2FD",
  "key10": "25N1iVKv5ijws84GmJESMWZsQCzATXhhPeWzCmReszCnedHFHrFozZrrP6LfpfuKy28EZAGCQqExaXbfbb29kXLS",
  "key11": "8z5psgqssVjzsvtpjfH6BQ8Qskta89H41w5iCp2iYMzif8fLMgUNcJPa8c568qDoTzR6Fo6mfBbHeSFM5QSo7Jd",
  "key12": "peMvPBzmNmdDfgj8UUmNMPZN3j8RBw84pnBVs72bxCH3xD3cbxvhjxShDHEJixzozGnBUHaVVdx8RS5bYEWXWHx",
  "key13": "4AccS8296rcebqmsTV5a8LxD6cgxEKUwbT5jv3TqpyEq4zaQYHErEhjFcSbbSvbFU6XwjsDzuPUY3aqEV8Pz8xGZ",
  "key14": "2kAsDB85yqG7HtWEvtkKCtLvSZYv5CMFuC3sSYGx5XgMSMdYqX553cHA4e1kxfhHMBQMrVkauES7mkYAua9mvZ1m",
  "key15": "4DQqsmRWbXD3qvRtj7Qgdsh4dRvR6DgdjAgcGcR1qybt9FHSm7s1SDbiVkcLxBL4XfdQoioF2Q6PD7fVbFPcZx7a",
  "key16": "5M7y5tEAyXKJx4gTJe4Uds5BzzsdRgokAAgRTaB61Y6SrsK9nMkefJekxXzEWNkzqjv151rAEKmFjNTujksESfTU",
  "key17": "3ZBvwnEe3ic36nsquqTf5FqmYonCZ1wkry8Yypx7EdaKB5akfCjRuX888AWE6CS6U9K2mvpRs6RMoDmbjoyumqxQ",
  "key18": "5vvoNHJxv4HGnnVrnkpW9DbDxbP2pnx2JsBTX1cxXC9hWsLt2ME5hCUCksLPWzwkNxnnAsk6PysEMs9G8qJEpA3h",
  "key19": "2zhuMefsHSxLQxpYrXebUxFLbbddqVVjH9TQKVhQzmMTq37LCQXX8zBzhV6nxWoHZQLWYDZZkNmyin8vnfSWPbzj",
  "key20": "4y2NtVSfKai5Fbac7dpPiv3KzTk3yEtmJgZbCfMRbDC4gvUxmUoH1tp8qGfqNsYB5c9FeqvXcu8ZeX7SYmMyt6mK",
  "key21": "2ksQEX2G1tToa9tj16WqXFz5dGzNBRSt6yam46o9z5dumKjGYg7KAs59X2VbTRCNovLLy6KbJNqAngsp3zhq2Cg4",
  "key22": "2TADHnAem4d5LvwCoodgDWWnHHyTBtZvWJB5yzYFTroNt6d3zE5yFMrAHZGzQgxkk6d4qii7HwTyimoxqrNR9jTw",
  "key23": "3gwx27mQJGnJsZE8TeRmnGod64uPPngj4ZwdyC7EXaFsYg7W42i72ahCZ4Z5qsYgAHxeWT5CfoArFCMgpepQtoHC",
  "key24": "rjLnaJrcYXHA4GghimffbCDP5AfpUP5Yi4NA5VsRPdWF7H8VgLuKSNPjcgEGAMjRWMMvSMH6Hg6jRtwrhPzb3B2",
  "key25": "223izyYbAqVg92SP4h2mrdzDqtS8mWGEKTuojL4S4Uytk1jA6cT6RosRfvijb4BiwTquRjyTacYEBie53Dq66kdY",
  "key26": "4DKCf1B6B1rNphBRZ1NsHvZyZk8vayenLgLaVtPyjYQTfiPnU6XBEPz3w1ezQwnB3FxWAv9nbi4dFDdtwzkYC1cr",
  "key27": "4K8WNWxK65Qy2n6QyZFCJq5BTYDDBzqNQMZuZFZhzKmYXJR2W6y6P2ZqTLjK9qVNXz7e4U471FbpwCmkW7dxKhGV",
  "key28": "3HSaQAsrGB5pPagxH3ztDMGGGwVd4ZZ6jWvVzRrb5HnZSUWvxTvMjmNYEivaRQ2DmMebUaztQcJok9yMmP3DsrSN",
  "key29": "2rzj53Utqiz5pQnU7xWLXKyijUAV92ebD8voFMEkyttVsuGjrpnwkxVU3962HWu1YhiJ6FZRjhtypNcFnXNZeeCh",
  "key30": "5LdwGsdXMnuhhFsQFqmkc3fcvAEmxWeA1BX5K9Fgr9SMSiTkh5CxZgkirth1jBN8G22sBT545J6df627KrPB82hL",
  "key31": "4HXzi1tYF1BZ4qYwBfvwKgbwJ4HVRPzyTtAToH4rzqxjuBgA7RUPnoGf2Ei2Q5MS2Vx34e8Y9Sn4AJ9ev5MoEBhf",
  "key32": "296tNMakDrSi8ARt3YhVfsNvPfLwfXb5JbWaaRaXNr8v6cGaWEUpLkgdNohNhP8X12aGrfodzKJVj6a5RE4TJVvc",
  "key33": "n8Mn6uc1UCgsxpjujpF2hUQgKT6AETCVxDypt5hAYFczbno1UFkwHguZjaxiChrHpGLsJkBZmY2h38ywakux4dm",
  "key34": "5dq8WMEaxniZpBsNC96giZpMnhGz6CJDinVwEBkJsLnLDjsTaAeemk1CLcpWvz6j4qco5YpVL9Vuac3iK9XbqhPj",
  "key35": "2HYvDecsmxcvzCw6iSoaPzj61cmbZzTkn5juwAFGaQuXczc7wx18FhutWeYp13kHke7NCpr4UAXiZ8VthJ6nHwpD",
  "key36": "42WSF8zQxQKSEbUhTzxDCp4tkKUyfwnvb7b1xjeQXUS62GezP11rHoztgTzwx9ckCVWSBJ27GK3tWDH4aKiE9HYd",
  "key37": "2hEj8TsArQYZDSft9NgfmtfaCTNEMmr61X4K8XsDzCKxbwRoTV3s1273EZP2GTMHUSPkt3iWkkWL5TQw1qkfGoM1",
  "key38": "39x93oiZFxumyVqDtN5ZiLqAAx9U9F6okf4wYrPhF4NATWigUTjeNZA8AtoKpDvqZXCAG8N95382gtb5CKYfSZzZ",
  "key39": "5J83ZhavsMrNKj6AKVuDVZDpukwbm6iWpxAQDeMtBzi5E74MuE775MuUPuZQjieA6XZ2SLWsGKPvghXs3xZstqju",
  "key40": "41cGawhSCqq7o56iKzkvUNVubMX2vbmJrTWQiCvbFRSceHQ1C81FDAEWYooyhgwtbsLFHfGBt75GRgqYCR2iuAvU",
  "key41": "2JFntakEoUJGS6b9TixRFYhL72iW2XtDndUwEHy2KCeWK63PfjJS7AnRRUt3S5Y6uf6fEYaRU1uFWTY3xEpDXefE",
  "key42": "2VaFkRpDR5TgQXV2TCwEgRV9DZs1yPFXpQvsdUzY49YSeQwvbn4uMxXs8wXkCKMDvs97rWBZ2YDhK2f7FkFbvM4E",
  "key43": "4DavP8rkCfsmXkqwAPLhgABVeSFd1pRGf9u5pDkFUcrk35HGPJQZtmqgv6kV7QNS8Ly8G4uSCWFrKAaJXPbsKpnE",
  "key44": "64NeAZnvcqJKkcHNQMcUoaWTFx4LCWUa1HSmP6U3rqka3PX5sNvBsHDmrLhy3GBnAiiU29VWi6eb3GooJieQ9oRa",
  "key45": "5VM7BCwcvV5AtFjATC4p1aM9RdbzfhB7vanKGbvQGHHAUciNMcMB9UzCcBQWMvouBqAmJJ3c3Kc1mWgqTeuE6rXX",
  "key46": "4KZxcUsgsoMtT8gbAvMATua4ExKgySy2Bv5uAfKaqTdGgCDxa2WZNszbWmaG1wNhk3FKqcaWPtnWCEoxnw8GErMN",
  "key47": "2pjh4rbZZkjitXJfNyCyYhBz4duwdji8w7E49tFU4csUagyTrnMaw3ktxxub5QTEKYnz9XBCjpisRYevJcAh8ngW"
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
