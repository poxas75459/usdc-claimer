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
    "2SS8Ya8CWqKoaxDkrgRkPYVUopo1WuKLG97qCEGkq1tmRhnoAWPtgDiLBZqqivmxkCkZrxpV5HNQ2bLzUfTfHwJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8GayaA3vNDbPVqTN2dkJ717tzCfzX2xuNDfetBPfTCZnEN6zEQbbMrt8HPtZgWrcYqp9kH4w7HpnEzYgnHg51Z",
  "key1": "3cwNxMRW9BeMAw3fUuMb9rSzsCSc8FWSSWCLQbTHSUSToJB1yVn7y3xMw6wq4yAWLKaLzfKFwVkBat8WMicT3JxP",
  "key2": "3vYCZ4nqtXsYk1LJBxxvDchFmXxi2CxrWikHQFyf9cMmrvPQUEqifj2epLiMEacxr34dQubWPWB7KmmyK6t4JLLR",
  "key3": "36vjv2qpgfUPGWq1MwuHWfXMnMCX3K8EkPhUxXhY4D2cbNQ4spsX337su78KJgEMifBpKyAaWjMPsgHQYk9uvzAK",
  "key4": "3y6ZpPa7AMboHohKNrpn6Uiot3GsAWsdzV88H7VCX7xXLyXwohejD1whq6Ke7YTcnWZLTzShw1JLpwidfNCtjsuN",
  "key5": "3xgUZLMjTnKGMq438iRBMt4oUW4nMxUFjDkxAK8by6WtWMbknaP8hhb84GvwRXeAXheAH5C6ErrFpZHyuHw9NYvi",
  "key6": "5vubL37V96EqQb8pizNeBSXS7HmCfkyxVniSBPoZNrBMwcNwDv3Q9BXn5a2oZz34Ui3yvosxN81ZxKGkUDmeTznY",
  "key7": "z9pum2rm5bQ6wHXYLocSMY2R2Xj5K2TFyaDWcMnnwvH9onUhuBAEw7SbLpwUYyL9FUeBqhQB6LXJLCJQfor5Ydm",
  "key8": "5NUXXBSWqZQRmLY9psBU4Q2MsiRDSWCoKqn7o4QifUNEGUQRc4DpZXPq7mNmPPxu41UYAZUotacvd8MgFtzBX7kU",
  "key9": "3rfrA8PTBowdcu5Dn9Ka5cv5v4TRVqPhrUqcVLuH3geuxNcTwpTheVoyUPyKzoCh2UBUx46kyGsjrbmAQAhYDVTH",
  "key10": "2rLMPriT37zE5Vcvighm5Y2f5CReTfaXZ3eUHJZLet4CvJZ5Vko9JYKuUiNDKFattfEgQ6Bt71KiojD9XTuczDnM",
  "key11": "2vR6WypNGYiX6xypFPmVbRg6LLkyEqvdWWC5bfs7EJx4XUjTmcZGQsuVqFuVmXoGcsHgNaYTAMK8FLrFnsEfbwNY",
  "key12": "67ch45gknV3mSRWZYpTYJWTPDKp42TfjUxf8GqFnxASjks1wjUGaBawZbLK2fp3QCVKDcwthrMXpQY6v4Tqgw9Sh",
  "key13": "2wek9FedcMCfvYyW8oHUdYt5C7nNGbJ1CiLJN5NjSH1QvyTBnaPweiBth7LLDLo6RzcywMKuK2R52aTdSW8grFZU",
  "key14": "3jeP1K5obAk7y1jqGPm7ZVSRfXzBfbaVda2ozFRf8BR2gncM1fjqhNmCEby5FRoLuk2MzVVnazg8FQ3MwQojotLV",
  "key15": "4pdNDwMRsVJdKSy9H8VzbutmpYLCrN7S4wCp8FSaYPhybp9o3iFmTh4mvLnVEtowoJhQAMCVs8GHfLwW5RvbhXoA",
  "key16": "2uFPSjbFkxYBM6qtzGjgmft1NEn3MLEPa1y1a2AUoKykL7pyAPF9TMYWtVBGHzP2Qp9m7teipiV5B8AbJJdsyG4D",
  "key17": "4dAPsqr7m4T8Rwt4fgtkUV3EbhFHz19brrsrgsb3jy8D9oCvr4azv9HXhZcQxzrJAn9EzEdxaHpuTBxtUWXgQ3YU",
  "key18": "4eVoRThND7YkZkmxihociWCZnkZUCfKyvsQxYKRPVcMYEUY72kirwwZdqUkui5yWxqCWnucZ6ziP8Eee3ysnQ9Xc",
  "key19": "2vHsBgtgYaEQvzGcJdWH4JVbrwhY8vAKgLRh3AmPRMLVgEx2gwLi94rWEizqQVi32jWwTTmv7XTUo5T9RTSyX8cL",
  "key20": "2RHh3yN84EhVRknAfWtCzBTHFYMYD7s1rFXPTXBv3bkKF6Hf6q7r9N6GpigCxjKxccwZFX7WUL1MAiTjhvRDshwk",
  "key21": "3emP12rKTZDnuqpAcPzY86hR39KUq4EGxovAUDcJUtj1c44bNsu3dKN1iC1kx5x9eVgccJLQCccftxKcbaRm1QYg",
  "key22": "2WMRH4bjsx95Kdbe39KUwVULQm3jeCuyEd3Uc54cC1tMKGpEwsU6pvkfyViDh4ZdR4ToSEGxcL3yMV8gb1GLpmeM",
  "key23": "5yF7vaqfvvDuxrbKbtTHnKEkKcemAcTRFErCFeMzSDVa8YnLkji3ynAhNm24AB9sYFMd4G7Udx4MGiCy5JRgzN4H",
  "key24": "3t2LNHjR6Nn5sziu9KE2Y7vipRK5LHZs9gTYzPTENKmjFUcesjfmymXfQimensmKntw8Yt5cSH8DbRRXqpU3MBqg",
  "key25": "2KgnyeZqaAw32h6Awoqm2VZ3k6ZGLh1U4nXA6v4PvEMVrMnj5PkfKKLZ8U9gxy61H637Z74W7J4KNDuJxrA8PVMG",
  "key26": "4oWLXPrGBXLwkQ7QiXjS8sS2W1YeCB8fm5xbBRT6rDYa8Fy4PN4sCYVur6Rcpo6AKJ1P7NAPyXkG3gnjAyjNrWQF",
  "key27": "4vn5EJRGVJbcoGXDTEYB5ivjFSk56orXF2imnBjNWRKHG9p58BXXXDdTHQBZUodAHDWC1e3hq3jTMJpiMGQKdkzk",
  "key28": "3uiCZJuVc3gYqB4PRoV91ZbzwcVcTsREeQ8anRvHkLPq9yESJwSqEACHHouBdbYBZaf7kzVuyPaRuJr5ymAZH3GN",
  "key29": "4so6tWyck6PmLJs3PqYvS9bmojjPxnGgKpVgxqbQ8dWui4A8KW14CjMQaCbWcX6VWRX4NWk5hzXk8KMW8vVHFTxR",
  "key30": "4oD8g8xgDDwjnbxTBgFQ2M4nesvKv2HFDNtk8C2yfZg85fWRLxxMsLW7iT8kV2XNgvupKdWb9m5uGXSor8S9y4b9",
  "key31": "vnG8Az3ug8x56B9kcPLmWT8t6KZ4g4t3Ho69Kcncf3JueSaXyStKtdXDw2g75fC763FnCAHnecvo2kenLZifsrH",
  "key32": "4iXDSbLo3wNrQZgMhBqfExSCsW4QJJfo379fvikGH1jV2WxW4N3XPp1L3EUofX2uNfdabExE9ouba9Wc4HNdMH91",
  "key33": "iTf8YUecKdGCMT5mJf28s4tAMD3cPK8B6joQ5zQdqWjSWk7j2HETmJRZ2vMXmGPfyXd3J5GJCQx68DtqmH8LASr",
  "key34": "52YRGv6w8j8E2ejYYEw6tixHLXAAij7rxE3XnkDPwuGCYro3CVsbQ1sLJrioaCQdAevEYFkxcMVbkh3AQPCZqZby",
  "key35": "4TrSc73yWBQeo2f9DtZtt9xVpu4XrhGVUmgx3Y3ZGMmt1fB2L2zXEocMjKzUZwnqjykHJXn9H3miK3PDuLGiQd7N",
  "key36": "4a5mZEdS3zjSkSBGuC5vWsznFymQDDKCYeyTysMDpj1XeryU7f5Z73vKgFqWfLWw1Tor7SynsNJYgwTnzzUgByfD",
  "key37": "5cdw2yznZ3mag7oCuWmYWsYqb95ATnwMSRpyaCw4JwEmVFYvGiujbnKSRAfiR3y8e59aiJuZXthhjY8CCTZTrys7",
  "key38": "5ux6N285YKRitUR3hbXArb9g7qpTS6vzgZQFyANZDBxzB8ScNYuNMsdDM3B83oQfXCideDr78isPoyGDtmtytqSs",
  "key39": "5xJ6dyDmdbgvQqf929wjPELh4bG2JqxGvpYC5BdUeMs5Q25gfAZaTGNkxHM8pmBDH69pwXkr93JxipGw1Ac9CTgg",
  "key40": "5YevpRYrBXr5wpguoTS1YFUTJPRFcFdjtSu46KtuNi4EjPPmHornE2Qc4emmLSpaugNnYHEH6PAUrsEGksUKpZRh",
  "key41": "4RY6RMy6FJa5xRXvwmCcUNUrkk51mZBGrzzRYo2gzj2khF6u8zPYuB4HpX47FEMkqCWCAawyecWcDAw1VBYojdGH"
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
