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
    "TjjR2oVyBXBFxLzCjTPP1sNCubRkm9yEixQ5BXSujYxbgHr7epWbRSrgEpwaP7S5EWdpxtwhf8BXrw1dDcXBRCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPNJ1WuMWKYhH7ZaMffCQb9Y3G4PziDUWDsTNexBk3sNYRaP4x9q3wwK6z4FZeAeAxohwfQPL7BP1RrHrv7nYxY",
  "key1": "jyJtseFupk3HDGNqKemJ7ynFzbXHQZ51GfS2UASGJB2Y7LjmkZByYPRdH9AqZgUZh1VFfh8vtknybDg7eGBpnu4",
  "key2": "36ZqsieY7v1vVgx5raphjvUKme9RUCaKzcVMhZ8kpRZNCgoMixFQiXd2ffGLEF4PH1KFqMVih7knMnS4fVdsPetn",
  "key3": "4NzMFheY7JQmnG9zKzH7wvTieyUh9NGnbepvLdK7iYgPfTQixEd29XK84GsF2eN1ASLLfg4hmBESFcJweth8fNVp",
  "key4": "pKHRSbJU9iRunX42QAv2YBSgU4MK1SsZEUf5Wc5vhowQF4LU2akh8Gs6J2S1s1PDZZw51ob7JLNm6ejDFDnnu9t",
  "key5": "5rgEkJJ8xvRFypGoxhG1rKevMPG5W9pP5jhUHP9VVbLoczWoHfHj7NFwLotiMJ16Sc7xLwmLXZBax7BcsN6SGPkC",
  "key6": "2XKMw3MzNRcMSV9rDaYeoHSGkwrbcJXZcnrGNje4dqvEN8edjdgiBmriAYAjCARamZ2Kk93VAzsqMM2DkiBxMShD",
  "key7": "4jsoTE7Rmz3DXyxXbHsexQFqWLoFUk7Yw4gfMV589hkZ4xTnqs6N2ELbwqeAW3hMF9hNYdQ6cfRcsoghr9ZFdPEy",
  "key8": "4Yvg6EHPjEFgnDxKwZtnUFMGFAHoNdymY3NP1zxyU1iJP8ZTcgK3rLhk7r4tMGX1EdemH5WWax7rDu1DwMgFk4Ez",
  "key9": "4sWEZHQWq5PBcTKKjf7na61846YuTuBMZAaczjrMGQ33Sm3FU7rBEcs1wETwu8t7Z3KsDKuokgxMugEyMWMin1zz",
  "key10": "3FGwA9vbXfPzU2ZLVK37iMUHGBUiXiSt6ZteTBn4j5n7RkyjLUtoWoUL8vShFGhDtpzxpH9TK8WyvtEf2zeFi1PT",
  "key11": "5nswfTPk2TxNq4ds8MHF8FRj3GcMxwobvzeoVEVFN9RoTKtkJNjGR2bBzsKqnn9e6BZ3VZfGUDDA5cbf3wy9pT34",
  "key12": "5nfXHLpw75zyu1jGxJabCbvhHMuqSwcFgxoE9VRn5jTjCh2a8denHh68AdyF71m1vyB5jnKJeKVstWwitbgMEC3g",
  "key13": "5NFLBMk9KpRMTEmdQdrh8f9LXYFTCU77jNKVDSMZQWki8ynoSTFJNqsycDJf6XFKdAE3GENSihkPxMDJ2Tn5Hcmc",
  "key14": "3PmCycj3UvzgAoXwRC4SSTVhTzXkn5pd45komjFK5E26wqsxDU3ar8ov4uXE5NX7sQSSUewhpSJZgii6GpWo3j9G",
  "key15": "28K6DtimJ1RqfHKYzZL2iNAuXc7CAvwYQFWAbUePaEVPPswC67Vg25hUJ4jzGgB5pfCBpYXGhrFK21UqPMV1gKCN",
  "key16": "3MeoCEDK2zvmNpaVZyFnafQUGXMeBPw8VWaSxyJRQxRzDUMKDYreSkxUEtqborrXEdKAPi3QBb6rcy37QAoYhFox",
  "key17": "34jHtVvFTvmT7kV4GeRSEw54y21LUzXUfpzXSQ4H97VDQYsD7uagJfLgE6PYiMvsZZFExjvkAKYmjSAvViZQtNyU",
  "key18": "5MvZwVvJA5cmXD1SwYDwJx7eFG6XbcJtpzsNdPxCVQcBVX3GroLrot9Danox7HQ4zw6Jxya24mXKPYk5RagXZuim",
  "key19": "NQ2HuSEnQYY2jFa7peeZ72DVG55fEPcfMQvaWcDxnnM2TU5JL6jWTnoLa6UDvzpdymivaVu2txsB53oEx21kMDd",
  "key20": "4xk6hg66UcVopv7QjZBGj5yK7r9GnNycGWMjdaJg7aGs6AkpLqka8wTk9boxvdi1qC933QfABDJRguQWnWZJCM4E",
  "key21": "4DPp9rK2gE6MzHrc6fKDGyoBaCdyJLUrws43MFF8W6dYctTSC6kv9rR1nXEcvbXJXw6yCkCh5dTAMGf2EiCLHLvf",
  "key22": "2eJgkQEzjdSWw86tpYiknsGxTPQ5wYEeNyKVTrPAoTdCzCS8SvC5GSfUZ18i5wQJ14suDjcRhfnpMmM8zXyRuP46",
  "key23": "3oVCBPqLd6HHWKburrkzHothvxjpM1prfgFtyLZizGTehDC19ikQRve1o74HtSd8aj9x6CG7r56h218NEozV745E",
  "key24": "5aEF4rAob5YEMDuNRG1uXPNfBJMqXfWTqdkmQtyKx5gvFKc2X235qf4t8aC9Yi5K7k2WBkhcZUN4jWKRhB4RfcwP",
  "key25": "5e9TSKa43nXTuqMWw4MX2ermzxssZkGyWWH4VnhUKonomhHJgkVw1oZqXSsJdh6QbR6c1cRLRWZLnD4ejxBSo2kn",
  "key26": "3HxvyivrVjNnHAcdHipL2D3DRmdZY9tg75F6GQzyf5SiVNEFDjNwFH3apuQ3pHCLdHmFKdQa5WL8RQPLuTfGKruD",
  "key27": "svGKtc4arpVnzjW99LXNG5WuSosFCFTZV8AtysKL4Fi2HPwLw4YQUHaxGBxzvQ9b7kEe4qNE3BzVnp5U6RUvFVj",
  "key28": "5b6etayPrQiEj1PPi3BsJ5VFejQoEaq11dCGpLMuSzmacieYhVUXyTPy8UVKt6hCYE3636Wa3QfMrSms1FyF8M6C",
  "key29": "3apXyk3rtRzwLKaT3FBAGBXJpiCR4czGdgvuCQkrwgcCBTkGf4PyrTBcZ6SCWNEin5hAmPNyGThk2ESoTB5KMaqi",
  "key30": "4qsNHt3BceCRPvs8p3DMTbSaLrNEh6kaf4my9PxFSWKW4tcCvsjjK28YbPruWbtWorb32tFCeXGybLStoQHZnuMa",
  "key31": "hCsqKuE1ySt921AT5Q4WQ855vn79suzxkKaGuSP9PM3mFU2G9WgQ3UDd4hxPg64tGNQs6xXuDpVJcFBYK1JvG6N",
  "key32": "2AoKK12qMVa1TF7dq6C1UFx8HJCJT8Fkn6aMKmcvFRzhgcHLSdKsiHSGCZPN2ATQ8REu3DJr7kajFuA7ftXuNFij",
  "key33": "4bz6ydb535MeMSk2dRFNKMaKGATzrZU81ZZ7eawYzGRourgfUjuAiUVcxrEJPTLBep8P5dC9pb9YGzGmCHppTfpH",
  "key34": "JkmXPuMkVK4YsDzfmSo7RiM9fvPcPkTZXZpVHRCVNoHan3KsgzTMmxVKn2APh3TJUMuhXNeGQeR2qPvDus2iD1G",
  "key35": "3GeTpPr43JTVSSRmwts5C11iD4WRDx4tKhmvoDZ7cujr8tbnBi8Po7n5hLLN43Ft9zEu2oV91Lh9AbmkLapeuSx5",
  "key36": "2ZB4JWdPbJ7TS6A2h9MzCMjNer5sWrwpXyYuEp2VpWMfDkD8mftuVtRsfWFyHDQF3igYDFzxYCEwHChnGwPJyqfD"
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
