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
    "4MR4visD4FXnAzDvVG1LeJXkyDzvxjyEBCUn2484phVmRKKtEeWxLMe3mVmFUcPnQ6t6iJexSQUQyVMz2pJEBCfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EqjDqwfsXBc8pbGYMLYcvBgsTiYUa9WCUkrdRrGdsS2ezPYWjKRcfQhMtcV5LsKPU6RMHHUgz1hvJb8boBFzA5",
  "key1": "5MCFzF2EyNhtGYTxrJC5S5ebLyZKdrFmuarC5P2oXAXdVSge48BPcJ6esWhE7S8FrpHrK1BM3eR4Sj4a6bDpocXX",
  "key2": "RvUHX83Rswc4HVuCLuyJ5As2uvZdEzow8SF1PawxqdYhZb6v7c84gVusU1MjANF5dfEpgdJ4TH8VnzuXPQTVihm",
  "key3": "38yEsjs5WUHS1WTtoP5ezc7r8z6K6smcpw5SmNPsydcR89PfdycFi34r1iGhX8skdYbDZH5EJG5NRmdb69zBDeHe",
  "key4": "3xiajA31BKPPXBtGAHk9vUPHADXAm1ebpKjdiHdW83a63BAoF2BQKdFHiKHxJTpKPsn8PLCepD9FaqjxEJV7fL5N",
  "key5": "4CH7cXcArCAEaHDg934EVHBUT8ud9duMQoKPVT7wH9fW25dYn2tVd9ryGDuL1mPyfE5pLYYTFZ1u7pmdJqc69Rs9",
  "key6": "yFrdknZV6gabcRYp7E8HKMvpvN2SVFhTCq5C9Z5yQih8wTVWQJErBoRv4xQTM2DMzoZxZVJ1UuJA3gvQxS2uWzH",
  "key7": "3kTMvtjFRN4wbM9arHabN2u6rAeFHdouur6SY1YkL6Her6AD3z4vw8gopdNrEQoneCNAaTRA7zBAKoCcohrM7q6n",
  "key8": "3TbnuVemLTvYW1UJ9thsRLjMXScc9kfbtDmyRn9oMXPFHEqbauBvd4YaGnvMzx7D6uXfpcvfidugFB9nNdugBxHs",
  "key9": "36kMK9wv8CfpV8th14xBwWSGscHB9hkG1L6QneuAfThMtMptJn3WTfR17o1VRJTnkqaje6HDdn2THP58xZTJwayt",
  "key10": "5ysQJqsmAsMPbFK9YyhG1ffYWSHBw1zXVvWL2Ke5qsKVyHSXV4gKBgU6eNEovaeyxqhDzhBSFd7BbHGrVV8jzEkw",
  "key11": "3gV2H2GsyZnbsbJBsG3Q7cEpT2T5qfsPzWmi9nPS34BCmUG8b7JPd8JSTgbjVPzxopfaDE76cjZJXomqDt8y5VMV",
  "key12": "4GwCB2tsiBLp9q1wDQzKwent5c6dSMTudj3P8L9khW6uMLWERUzc4KLJaxN5d9BJRKWktUEvAcKpGqWgcqS9FjML",
  "key13": "383UFGJSvnVxKmFAfg2gRHoAgy3wEP8vXCMMjQN11F8azPKfgT42MvUH1MF25pm64bzQZqBfWrbXXAifvwpDZmYG",
  "key14": "36vR4pdhDS96oParz2XhFC7xGhnVqVh7xrfWzgeUa1jMPznkp54dHk413EnJfYnsHHopR7docKJzFavADoWVsSeH",
  "key15": "nNZL68GuuP1TYF1cLrZunMJFyEmYH2h2fa3tyoU1RC4Hb4pWsuRL8m5Uppgm2QCQkQ1WNMH1TqjfapuhizcaLP7",
  "key16": "2dXwMJZc6S23EHALzFK4dkc4bVXkLMW6xzDBszmWHxnUziYZFHjEibYhHbdLD9ehoUty8pxTFaAZxswUJYynjkkn",
  "key17": "2HWbT24LVdEx4WaXUDgkvAf2h6xUVk5PszDCsYSSECm67yifGniXr8RsmybCzjK3rM5DDEVu7RbUQ9SYmDaRPX7y",
  "key18": "385G4pwSVQBjhhwXuWPYPhMpEgqSCLM7PssAKUiZEV1N2YsnBEVqzVZ2LGeJ99FZJzterm1EZWerNfAMiTkK4wJ7",
  "key19": "2He2PeuotuokirrjEXJGAq2Yp8kLaPupXQAfLrDe4ag8GKcfrsijyMXWmMnVYroh9oVyQDteDhybyGwwq7oCanis",
  "key20": "4nrYhB65dJzpmUJUhHeRr9fp7mH46NgXHtdP8tGL3AxcAsweDEQzLxVLwc31cFnVCtUGdXQqhyVKSbumgCKTVk2s",
  "key21": "5RXyPrEgubQxLkbn6uij3vTt8KfkQdd8WGKMwt8GipyKPb5FJcZYdHXeiWeRXg83wA2qMafz9RNMbEzNxAP5sDyW",
  "key22": "jDuvfTKfK3mJWiguWd4zDhgceiGJyT2zXvBMEFW73sqkubo4pF4NL9QNVc8pVUd16MjqL2jrCiioHcD3oNehejG",
  "key23": "2XDyGaLTx1vesTSneXmFJEeHpnkr9mf2Q5znvK9JPW4SQDKSXoUyunTgK793SoP1fbVrq8jWzFVqCVfoExN8EDp7",
  "key24": "93cUCiZWq9jNubaLSFsUSfcYhffLogwjT1G9YmodeLvaDqtBdZJH4i6irTss3ZnPxWQmGxatSquTZJGhayAYJEw",
  "key25": "2MavGTebW6wvdJoQHDvCK4iW87dJ3s9TaUypGa7qB2rub5HmsovpXmyAAAsNk8yR8ri5gwMYUkvUF9V7qSgHfwho",
  "key26": "2mHHZtFCZTigNaifV8cbTmL8pFvfpUZV3pwb4XjFg4JNb2cP7PFecss4uQrg7PxRMU1MAg6SYgeurA18CQL1EeyP",
  "key27": "2BAiAMLn2FhRgEUygb9gqp1iuXRMcM9Krnhy8eNmpLm2VuWvtN1PrBoB8tJZh2BN6LjUkhhCfGEwcHXA2VvGxqYL",
  "key28": "5CxdmAaUZWLnxN8jw4YUBhgwfE9pqxu2jrTCX3FhLKdGYHKEJ9ES5f15H5zNM6v6K4JYZ1actRFCMN6U2D6PpwFX",
  "key29": "5UoR2KvpjYUcMVhKyNg59RBueUnnsMpMs8LrR6eDL4y7HrCoon4sok9xakczd9qZvpWnubDKLzHf8e8C1neZhEqi",
  "key30": "3kYwSvmEq1S2eqCpWjLC1VFtMtX2qLgrSj3B1rktLFASPrDUvWh5pBDAXyn3LkuSudAbw1YQLcMw4ERdXSFfAJc7",
  "key31": "5WTn1LKCVcFEzcrXt1TGtGKunGwqwMTZDsnFmRuqV4wPfMwviha14Dtj5StbdHjBnxG2CaHPByu3c5cdWocC8ayU",
  "key32": "7AHxNDNZvSYo1CBCsRCVHeiAyNiXbt1g3diPaeMDkbx1dXPwgwuZ8NNw8LwjUZtUU1msz7pCPZQzKRKvFzc6JuQ",
  "key33": "3BtpQV8mFQxv1K6MTH2cHy8AmE7XW2au4fGEimN6jt6E4oasQLUkSfUi2xuGbEX4mSKzGX7uoqdkCHkW6wsZu24m",
  "key34": "3sNezWXfxjUwFWn7nVJdFvVWDN2uVrnk1xGBPjevJLE4zaG4pb4nahUxHc7zTfbEtNYU4LEzmyRq3FK4hB29zYzb",
  "key35": "4vsPsXG2K8cPvesqDSk4WiYNaQJwrhZ3nf9DSfLSAJRR58ezJCXMyYbg4hTTyMgkScRHL6hboHZWmZBsXf58mBX2",
  "key36": "3XjrdyDuzfwYDguKsx38ocPFTtzN8cDTkrCoSTXVMv6AHKWGxHBUrsYSHZxyEBuZJp9gH96LrPCJZqhTM9GSiPo5",
  "key37": "4oiXzHRV65oGNEkQwo3dtDNqX4r9cX43XZYo565iRCxd6HsVTF9z1K1ifVxxfubWwS4UTyStFAR5rNt3BxAnydSk",
  "key38": "2JypKrwK5TEaDEJAGA7ieoT7a7tXAVwrA7KhkYtNb17TVGdA8VYuPtapwkMqr5r6R4DQ27ShNFQbWoMF6SgbAbk",
  "key39": "4VcnUNGYHuVDvS1LjXxZpDSG5QN14vXdyHwtcFvjFN4UuWt7hSXdCzypVHwvp7n3BRfARttdibZPEB4xvQCzSVQX",
  "key40": "5ysuyKT4gbBz2GhQRryum7W7p9y8u5zeQErQ6HF5srNyXYSRnbazH2EhVtzSFLhFoGvUtvWQmrDUQF5vRNLVgKwH",
  "key41": "4xQW5itZw4ScQNtnDXoasSrV3rxLfKcPvJ3mjs4aj38egW973HaVxxV3GNNXtK32T3Gsro8KQGdW9PCSH7RDz8m4"
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
