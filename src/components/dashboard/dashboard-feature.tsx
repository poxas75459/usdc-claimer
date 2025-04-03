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
    "2BwgmPqCPXLXRas3L3UGzy71EwN8oz4RnHfbka5ya3aqz6B8qY4UQWX6pgqN8CgGzNHURrTMvUfaWBgDPatuW8uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTdLsYcBnQAaW8rCHgYsxefQW2AfBNwq24NowH9Kd35bjBCzShURwUHfdmhagwA9pEYmKBHf7shGZPDyfwxnaGy",
  "key1": "5KrgyRMqx7EswdNWXzmuD7LeKhVawkDU6F3jcj6qeLwsYedVCqRUtkSJesxMhuCGDc52NQMSGy2JMJPbXzuUXu5D",
  "key2": "LVJxXEdzpyp8CGeC382ubaZo2vAuYXii2XXDXz9QZFfEHKbCR9y4fMmiMofn3ztdBKerAZnvhGRurGMvUMLgyww",
  "key3": "q1fwvbHA52rYCSvAtf2WRKMWBgpoT4Twzf2pfoyQDwMuVagUn3VVZU63gmsvCn1cNEqdqLe7DmgxTJqGoX6ZJFs",
  "key4": "wmFTL3dzfqB19o1A7uF77njjbgET7dFWgvsBogPJL3BESB4ThqMuqZm7a4F7gkCSB3G4baVb9EkSL1dZcie6RYd",
  "key5": "25so4vE5HAfdbCujzu4jKtHDe55RifrzmC8WmD8dWqrE4JNbckcTXwTrxAC5oQgLNbVv84MUcqQ6DF4kCEQf3q5y",
  "key6": "2Wjop53GA1BMBddezYnugXKzF8pjLtgqSKaSkAjmpgiQzSzKP2bYrDgKfCTqQWVM5oquCv3jDH1ArCHM5VFgFNKA",
  "key7": "5Y1NdkL7s8HNLY5DFK7zp7yv4sWy3h3Cuyw1ibtsT5VGRvmWthhhrqLsAoxGcEqZBejt5g3gKHSUdUVyvaBgxsWz",
  "key8": "3J1rBTst8EML5bsj1ax4MwFEgBtimjEXondrXPdnxJMckJgeXMhFrevZH8pBDHZtcpjbUdCaiHQLDHwzhrpoVcBn",
  "key9": "4myxHCVX634bCc5wMwwnSRuAuLNFoxceee3st7vJgnDVt1nJTwYUMpXp4cujxDEnvDbh1kXK8KYZ9xAg9KtdSEy4",
  "key10": "2hzZ8WKZSdJyQzw6qUkxc3vMHeUventgXp8ho5UXeHVdfR1pwUokcTdWzamtqiuD7ZVPAKhGhNu9oGag9vVZachv",
  "key11": "3RjmQXiZDkpvabsfewn43LcyDDHfyx98Wd6ghjF5rvq6f6pfFJCgBhYKeNSDWwPHyStfVTykvbCmcHSkf7oeQdPG",
  "key12": "2rVNiDoqJPYS1WnmdbeRdxVizUwSeN1r1V2vYSjmdH6fajMFitS5eeAvzCoNJE16jL7KaAwjmNKARooNguwAhpyQ",
  "key13": "3UbBmmTsxCaYnosopUAwoMJyGeRsaRdpCMgGynBN7r1MdqtQnc7QMxKUkiYZnGqkx3kpZRKpRZMXT2rdLVcoyR6F",
  "key14": "2Gpih9WwGuyebjQGTQdFC8QH4yULxgUJzLDTgTRLAsd2Zd569UMM1VeiktvWLM8pp1SXqJeWh4i8xi8927evb4tD",
  "key15": "3n6y421xth5RaGGuZARbDhQp9jFce7aSC1ngcz5Xi6z1K7DSBrw4iAgTCHMfpZdcjV3dn76XRtbwmqk5ssbG9uss",
  "key16": "GmfjwS3bVUpiyWLLpYEMycxsb8DjxxDQU5o8JUkWR9F57tPsQ9oez6T6Q22hcAQmjC7VAGkDZU8H14GMjakQE1o",
  "key17": "2gNi388LxQM4GNLkpFT48ausDck12QK1ssqCJk9UF45y3osWwZodndeGb29nfu4Chn4VwKiAo5fK6nsfdnbmHW52",
  "key18": "4NudWb965NwrrRU47A2UcUMFJvfaJHuNp3i71He5ttNZ1Wx9CodRHaPuZ7sXQ4nAeNZwpasX4KDA43kBnMovMwRa",
  "key19": "5UbYtMfbBCqcrd71odSSpoKpNLWyRCnsSUGYTakMG8Uqxz7TyKpKFp7Df2bNMUz4zWtPYQLRgZysxYDSeTw39Ud1",
  "key20": "3w9D5MFf5DvHGGqXesE28gbUSreXyukcMeD2eFg4ataLVadMT6jiztGaf9F5YunSCyT6iJdY73gqxtJmCy9TS9Kb",
  "key21": "2miNWvueEisffXGAUc5Ap2AZf54mbpCT3UDUX9A7SaDJ4JJrEEkMFQW93fkSHDtp8y47zhhGX5EPrkTUCM2Vor8j",
  "key22": "2QB2rgPUjjjwiJASDKm2A23BYejqX5EmaaKuV7MoyJen4VShMTfZ32tCUUrvd7Vu5x1SPiiEo37Rufu5erC1LNSR",
  "key23": "2MnD2ynqKbbnYHoeoqzn1RmN3tjBpeXRy4FvuwkYBDHPcHDZPVW2NP9H6W46GmdJm2HHGd2zEb78bqfEGfSWTVcB",
  "key24": "5DG8vxTeRwmvZ1krDTk9tx5pct4ZvU1kwNeUGebubHrcgUsx8bzPqE1L8bG6TDcpoYTGXSyxXdqF7zLmL4Viw9xy",
  "key25": "TVeR4VBwdyh6Cf3GCUr6awJQHmUPBkjeDEHu7qbctfsyVAMYc2KHBfoYARGPtbsCCHwSdEL4HBuLqNnwcABDhQd",
  "key26": "5MNYT1yyAtK4AhUSdVdUQgUFtKamenu4ugbW788NX7yPDLex7iEAPFZiLxTscLG4qhbvz1UZNUVHsAaRqEv5kS7R"
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
