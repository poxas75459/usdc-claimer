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
    "ckmTF3c9m8ee637249dYUwLtopXQF55PFrUCwkgp7UekPbE12vjAa32CLLajxqfbxLjnejDDYUhP9VAY4MiWNMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRwFivpJ9zZCTdYHiAokRaqnq9nVPZLFk32eCuuzCdGSEmbFM2nDV5sW8s7w43Kz4Nmg8zdmSHFYRBF34yiz5Pv",
  "key1": "5B9Cn1o75zry9sVDDYZ94CPUPAGzE3NRyGEyYyK2MyyBHDXXnNVsx5g1mZ7NYux7Pc3EDZTuzFBF8xc9PsizY42N",
  "key2": "3SzcxTZeoaC82wf39TayE19vSPXkABoDUxcSPZtjoL1X8YrMwGkmPM1sQ7s7j1dmAihw2kvBwYGWM4ECbxC4XyyM",
  "key3": "3avZTzzVnke32ZtQg8Npjkw9fYwVzthVWPW3fkkj42CyCPY4CeZSqLdStz5jB84B42CxCv2YeUM6gvUvqsb5FWdi",
  "key4": "5RAMgNUam6LWrpjTQCABwp9eFWinexKgvQxp6U1zdHwDkpEmo5yvYeaxbzJDXRtZBCvJhoCZntD2V3Y91xL3326",
  "key5": "2Kw3brZriKvmWxdor1PX2xcJwY9amD7Jt4DxgBvTZTSriySmAdoF2espanu4WPg7MxcouQ8ESQfQcTzbusTbxpjf",
  "key6": "kkvZukXWeXp8UtbywkZAEh9GoXREHhnVz2fn1LY4S5GZPmWsBwmRrGxmCZHCsHpDr9crPhKJT29pywgs4nK3ExE",
  "key7": "SqjT4xQKMJHFhXXCxxs3GMVquciSBgAiB3sLj3H59YPctQhpW1P3mHUTyDmMXG3An1UqEf1zmQYHWnRgsgNz2Fx",
  "key8": "BBECaWdQNbkESEgVuAJrZuT8QSf4saRAaHZwN66iASNk3mgnYkgL2hdjFuBkvUHbB4djHgHJnNtPCpooyoQncHb",
  "key9": "4RR2JBCJagsHJrxvXEJGyK48Gw5wtnqMoYu5YBT2z6wKQw4zmx5N7yHEc4WAXyMVDDeAssVvD3ckTDdPx3gtgBJS",
  "key10": "3WAe5f7fKv4qUKQdaoLJABKTLLMhrbzFQQ3HbyVk9PB35VnQLEReK8YD23yTDXgY6Vn4Kevm7AECL3G6aZi3ECge",
  "key11": "5PZKxe2gdkLNkmaKC1MAvfqZd9DPGcWXs4FWhLqfaPWZCKBiPBaKQ6ZVapzvC9AERnH9sntqZFXL394TJFrDkpZG",
  "key12": "GZAyjJAFNfd2S2hMjdf7Pt5MF6998Bo5XNyLQn7qbV4DQedW9mZ3TrNLiWTjgWUJ2QjptW7NcQK9NMy1wUMPkhv",
  "key13": "ewqAWr2M7cFFqkZCJ5qp4M6ufkYjg595paMtfhYtiMVdj7g7SwRXAb1hANP8XEY6tGcSFBBZW7p7wKQMAPQjgg1",
  "key14": "5djRKWAfdbb8MPgcQxMefdK2vQxRSpRj2gHP9hE2hPRrooE3mhAtH5s3JMDhuAq9Wvp4E1YEMz9mnK73r677gdbY",
  "key15": "nLb58xXPfF1qZtd515a6ZRSE74MVPiGbsAKyPuoAzJjBxX1w3MsEJ3VAeUg3Coirtzb8ixErAf6SFAhMuhx4tvC",
  "key16": "2j9rrVGSbpwsEaVDyWrN2mM9753y8ytSg1fXNr38eWt1Uxs4HNJ26cbbNEqFSDGhz6fWmXDEtUewfypSjYhBepAB",
  "key17": "46FUFnCBFJREquEDhrfwjVFC52mB6nrVWd9yB79ieouqPKFBxUbv9WXdqJMV97uD7LbC2LHYm2gw4txVxCihoEJt",
  "key18": "5N5CcHaEjceTeSkAK5obXMnc4mjCeAxhZdMMKSdSRX27FRxxgnNPiBwFnp9gHLkRYs4jxyLed72JZAGk5AAWMkFt",
  "key19": "3WmQVjip32snrwjb56GXaw3XEJzQhHnFvz7PLvotNK1qQNzfERSMiGcSMwkVCgDBKnz7NcuYTsopKXrNTPiuw2FP",
  "key20": "3N3cYB9LnP9zkEgpQUABnZPfJEfWgVfJVPPM4iX8BwjYvXwq2CZ4uMkZgbtHG83P5vWUHsZGFWyxLxxupKXLPixo",
  "key21": "4vLgcPP8r6G6cDjWDFQ6miWmkaD2p2pvp6KXPgx6cn82T75rExU988L8YiPbCExUVQnUQ1QQBXb651Vt7f28DvoH",
  "key22": "4hc5pqFvfuDty8Mc2NdEw1PwVQHQUpf3tGSgh1GyRAAkMPw1AMioeuEZss6RbxyqRc96aEU3JCmcXyHma7p87EiH",
  "key23": "5bzanLqEuANgLVtQad53uPVEXnxALnZQvQ5p3x9fsQhVo5SVxGjgFv2N3nT2WX93KzMHbeCyk19cwAo9Pfyt74gp",
  "key24": "25mF2Z3Fv1s9bRRwKHQ5RzxbKgrjFPURQAQ2Ko6zZiSdz1LKVB1ZV2XDYZM5j6RTMWEq1RkQGkzKrDPPaVUe1Yj1",
  "key25": "fN3D4EbbPqsrj9FHcU7AGv8FGYWsWpsC3hsMdxqAj2pf72e6eUvKqjSKs2MBiqZnhPZekgRm8HTRyPWUpskJg3v",
  "key26": "4WMVzccKif9mfQKX5r1mH8yruanfRAGd2o77Yob32uB51jTbSkJA1CCb6aPXNj4Ctr6cFMvXxqMLRWjw9PDUvvAx",
  "key27": "5SLD2RrdGzJzi6NEYd7NP9Yj9XRcX2im3CKJtmNWHiApn2T5Woc4bijjEWhvSWtNMbSNMEZ4sz6MGcQN3NZWn7c7",
  "key28": "52wLc3y5xvPhJVXGT4qrFfyFD6nkyXgd9nXWzvWK27L3MkdNtdvJCeVwebD34iVfNX3vjkKeiHCXS7PAorsXHPk4",
  "key29": "4iNgjbVGVjz3qbwzSBLQwfNegtgeKMNLY9cB7zq5q6m76QpsDsVfQMqRFrK7fRpiZmerQoK2NoDSvwRG67SkFH47",
  "key30": "5Ve1WmQU1y88TnzJSPRk9NeyyZRYydW3bFbsERD4ZatWpB2y8wNWAdsDUrdTgexnViL3Aj6ncGf1eay9rbdeLmbE",
  "key31": "4tLidSeKvR6dgvoj6YAbmTWSSURApnhKUzTcKkVbLs2UHKj7JSPuL7WXt8kpqftXRfGRn4sUZHit36Wzv1ah8sVA",
  "key32": "4KQDZm6HH3n63bc9FFKrzxXgGSEjJyr4t1h2m3tUC5Dx2wh4PpsRityRw8ysK4hnHbZYjKuGToCiWKHiiRBs5Pdv"
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
