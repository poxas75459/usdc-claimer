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
    "MLoP4tQefkZKC22VoP7mhJtapgvj5qprtcdNZhXVoYobMxysUkjU1wexXLrDq6bkJBPLYRNd9LGfbpb8ipd8hSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysE9jJLy35tYuNWhjiDnBZ3kV8A9MqkQY114RBht8FoBxZo2JsH3naevf76fSVYji82tgfmsa9qPGxmyjGAg3t6",
  "key1": "rxSUjy2ciSRvQethtJtgDTvgjxWbQTrPH65Hgus1v3VJ1gN9pTJ25VfwBrjrGuPvm67VNugikqroNVygUrhR9NP",
  "key2": "3o8Kj2bt78b2CFJ5u43HbjrM73Fg9EfCXCqkHt32L74jQBHrrPVPJrrsmVZzF7iy9vGBW6LZp6YJU94rEG55X9gr",
  "key3": "5KpxTewBYPkWyaxErxXgiGEpez1WFxw7akktizpRXfHUrmAwuNLe3ZDKLYenjSE33Umt4Q6kf2ZLhnLpHqtqbAFm",
  "key4": "3MNn6SEwTdRvdcizWHvTLhGGApbN2vVpxPgwdprZ9auAfkrrhL2JGtkwXJymwbAtHK7x9bjDzCfiFS2GPSNksHm",
  "key5": "3YznwixHXxBPNsNqqgfo1g8zE8EEgxhjtHBqGmmyj7wzhBWRycrL8deoj97HK4WAUjRd4TBUGPs1K6gBDoRHAGF",
  "key6": "3Y1kRdhgfXBPYTwgcDkVwKVVKWCaDLuUTJ3CgCAEt1pzJyARafcWXTrFnA8kU4Afsnz6adaCBbTf5XpQ9ghZ9Lqn",
  "key7": "4g7nsgdDjLBjBeN8K6FJYZbFbXsrqo4mWf1ha7D5ShQUo5cehS8BBPS6i7RJ2ofHH7d1pwMQt7YzXmZNNdRHv1vP",
  "key8": "59j89JMSCutFJDR8xKebpTV1r7MrXHYV8n4saX9oeTMkMAACwjjKyXfYM91iDuVWCFta7K6gdwiWTFj4SYran1qQ",
  "key9": "37qpXEBuGquwbJGyXy1fV19xoHdFHhyBCiDYYBi8nNkEQbtughA1Q4q7u3LcWEC3FGdR4AkVeqvDzDVWPZvcwThY",
  "key10": "2XC1PzZR5ph6G4pt9qzHkKGFqWNzB3iRS9sgktwFNFRQxQjY1hYFYvL51cxssgR5U57PUB7s4tkCEC7ueAwqyVZy",
  "key11": "3ZQoxYtihRHeb5eqiLrdsWBde31rQMijtgEHyK85yq5EWstX4Anvwh5CpV9yBurLDXgkRZ83s1uDrV29syQRMkxY",
  "key12": "5WDa5y39jDyxjxMH1GTiHqBZNS8Xq6UatRPCasywnf28pEesndXmtsSsWkaLvhu2ZvCNPiNbrkX1V3kfKefcydQV",
  "key13": "4CzMdpu7FMP2KA29VkGocvMiJtXe2AiydYyjR5BkpkFEQtZJZinDEhH5za5GKShLG5ib1a9VZuzitXwBtNtZurqs",
  "key14": "4kf5qJN9ftnsjhiGP5ueVavxc9Vu393CVYKL6hE87vY4CnZXrgbpjAgTe9NuL22yd8DUb9Y1AyMWuWCamBmiRZgJ",
  "key15": "4b22hQxVi7Es3D98qQdodzALF45a7tj6TBktJHeNU3LdR9wkVZ4GeJeC8M4NDavmfvgTKkbR6AsAET37d2wSBDr",
  "key16": "3uaD1Kz3RgVZpsgwx2ZF2kcikfeBdWifpgmsB43bCne4Au7sCczJUd3SCKRcuvEUu3jaUMaQs55oPfBuQHnbWS9o",
  "key17": "7Wfr6KnauGubmsf2KSLHPvTEtWxKJamRpSgJpztCecM47o3mzVR4zmqYNQAS1EoGnYFdGHwGxZU84be44vDsTLV",
  "key18": "3SGCQR2kSfoxRBgQGKAswikvztBjbK4F9LsLMiBUQ6S1MNocUmZFJT2MqvfWxFqLtebckrMvpaW2iy8vbpGNcVbi",
  "key19": "AG34D8Ka8knngSoUJnTNLzPnSUwaYQ5LynJhEtLtewp1Gcqpkgn8dfUcrbxibE7C7LARMUTX3hpKcd1LJ4u8Vt6",
  "key20": "3rmi2vfdApZEHRgvPsamrZmwqsT1bTt8ZSxvDmq4JWzsAe4J7tDUVszypLSbpkdtEN2aHf1dVQkZrV1VbyfoMPT3",
  "key21": "5daFbc8LDMGUGAcU8TpnVTzBVPLoYhidcb9mNBFM17d3rbEvTh4bPikUPB3v6qsLFao3FgxUrW6VScxocL5Lt6aa",
  "key22": "5QuGqezKrPP2xgb2wXn8LvLDXbr1bYpTxHuZMptbU6Z9RUzL4BGgvrngBfDSii8NsTbmRGTVX9rfwAiBq8NAi4er",
  "key23": "4AvQaXyqubKXMt7vz6BMLr46xUgp6NwjjhMdqcuX1TsYPhyVXZTbaQKNpeY66VDEUB7QDrj9GbEE1fjLRGHR5FLU",
  "key24": "4LWg3hHvurNEQMush15DfgNwBwh5Qar5snRp5FvUcGeThnXr978KZwtZEpzGja3hGFZp9bXTZ9nGhwRFGM5dAhsz",
  "key25": "35YR4tNBqG3swW4XcpTd5EkBb35Mrb2Y2o24HkPqbRTcrYutsFRc3rbvq773nMbck4UVadCs9fTqHApuYYKp3Wct",
  "key26": "2btLaJEPrk3Usy4mZQGWJiATQZyX2NdWfue7GRx3oFbDab9bPCZCVfZbiYhbkcHuhLfAS7HiTyabCEnxHC6i9N9r",
  "key27": "Qg8zbqDzbKJ81ubYp3GJHZUqqQtPotUXeZD8PckrdSsnYEnQ4C2iT6SSNyCF1C7SozGnVB3qgmHirfZUQzxmKhu",
  "key28": "difwaWyiJUGWzqT3DZ5S6KNwiASmyRqhx4G3uSNMVz8LBSM6NPUT9C7PeCSYuH3xr9iZCuEz84XsAm8NnHWAouv",
  "key29": "3wyjjgpRTrMQBUEfYpKN4pZJ2YRzy8vZzsyY5uyPJt4hijUmDQvhARjRoYVnHTDfSX2QJU6HPLPqf4qL31kDWr5T",
  "key30": "5vkpmyR36vXib52KuBUw1djgy4n5tE8cGQrXSQ1Wcx5cS7eeUsgeJenJbDtSbUKeSy9g9sSH444AF1dJE2YRViPK",
  "key31": "1iuJXhHgdQz7skn8RsaV77UAnyp5GRJ21cvpCD5nXAEjKWZiN3ZKgmSiLDn8ZLRsoDnpdmcJfTQB5ABLSb4Z4Bs",
  "key32": "62YDEwKUDukPHUK9s87kpresubEYvapmyYgVSZyxY1QS4UMpAnYXd9mkYRUE43XK4Annfmr8s6m8HtUgV8JzZzRi",
  "key33": "64qnggBZHGRh2ePGQzjhZX4e8HXE2w31g8w5MpbWptpr16SWo58i8doE3Wv4ESY1SvQFaaWuqri5VenAi4udqrGm",
  "key34": "5ztNuPnV1EaFm8dPJqF8HCeXfrDCTeYio8pETi68RZbjkaranQXT2Hie4EncnutE8aCdthu1udpawzoTQeoTxn6E",
  "key35": "3EN5NfS42GUxejyqL52MJibRBSqWLgiV1RfJas6pQofucmiDMxo7LjZkGrQdu1ivu33TjKb16EX9WiCBLZMpsSRp",
  "key36": "qfqKLyR1cheVURDf1Mh6gLWWurN5VvpoRWfCWTojHcra5vhuegCLuTrc7TNh6UYVrwBJZ8TQjNDHKoCxQr32qhp",
  "key37": "4cdavZW1EJznH36qR49X6Etp1jkCu12U5XS7hsp8L6LzJREpAvEZ9DfGgcv3kckrHbP8zU5K4AZAYGQVAFt9YUrb",
  "key38": "5coAxkJHcBFo98fxZ6vb4NGwcsPUwz6qN6WjCWZKQNTVUtnUpiNiUJC2DSg118VRRkRmbTKBBsRDGiQBSswUmG4",
  "key39": "u3ubwQPBsy5ZUNrqpZAsThHBqP9f7mkH43joUEx5eeoc6UQQoVVmF6dvwtuG8gWAdPyZPBKZ2zFkTsjFK4LShSg",
  "key40": "2UHiDrdb7BH4sf38vkewGmPAa2Ew7Vt6hLb1Km5hXP7uvSNcTaS78QeKr6VHxekh34pXkCEarMKbPiGV2VCSHHbH"
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
