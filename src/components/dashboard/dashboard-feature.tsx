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
    "53z4mpBsVtVFnSMsPjU9f5b68q5aa7e3bEFf4vcsWteCrmnUB5QEef1AL8JN1S875oFRcwfv6Mkj7zbTcN2YQzSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMB17GXum4UsA4WzZ3HnVkSsUX67srNhbGL2rVJbwhCN2imL6Fm62pV53SARNLnb47e4FgeNm2ixzCXiuptDd7B",
  "key1": "2Ry7jtsWZEQQmnTaWz1yXPFZfTKVPW3BaaZ7WBM2PB4pqkanNkvVkrmeMjboWMqduWSSFfGh2VEwGUs6q63C8hED",
  "key2": "4Q9A1wfYqTNd7e7f6gNXzMKdiyXcuyiotrc9UcZQ6NcH7g14WWx5r2Dm7hZhZoR6wxf24dSc8B8a3Bm6DMvJ8qyf",
  "key3": "3HMTYekvcwxmGQ2eMWQm2nRNdrMFW9JkKHgpbDQMPksR98Tvgef8gswh2eQAAs5HArrzyDuKnrozmMZZBrgF3nUW",
  "key4": "NFc9EBcy7UKQMbjqzyTUMjePW9QCvsVpkkbevT9faw89cUXmyJmqq4obicCsDD2GAP6BuSExg6zdDFKGNsxUzc9",
  "key5": "4x7YwEwmWA5FxUKe7ML1YmgY4t3xyNs1FvT8Cch3WyqUypGdaKmefMB2iXDW9n3XbqodNyZaR8joCr7BFYtXNipP",
  "key6": "3gTbRP43iM6DW4GEBj6hGjSQv3sANauFbuoxB7fBWhDf2E5diyfETpD5LXLtVcF4LpsWbEAktwnfH1MrGQehF2ri",
  "key7": "4drZmrYnpYWLkR1ZpcE331E2UGVcLm3WiBX8HU1wZAEMvztVmBYj2Fc7wBZEfAe6DJvxK6DMG9DhsphEm1Ssfuqu",
  "key8": "4wzLrmt2kXYjcoQAYs8KkrULjkmubJxv9zrzdyLqAzuBUyGNDaTvZNpFUX7qzjVCRQFVfnQgfMcyZvQnvc3C7CXT",
  "key9": "XuZSgehV72hiYLeVwATb93Ur99mnN5F68DnfjqaosK4MkW2BqEWrsvByJdseSLFSRBnrTKLW2EPN82UJ9UbiuBP",
  "key10": "23pmqYUuewJRW14B4A8CdDvxyNeQzvjDrbVfMrm61jmAKYfhwSffLX83cZzY1kr9n7bHEkBu2f6mKHAMHsT1GSzS",
  "key11": "5np86rGAMx47ZJ7i2upY4ifNSiqNaiccFoz1BDLxHk6Sy4xLYJTufKyqm52Czh3rgGDaHZusV3ZjUJM23PZfsrgx",
  "key12": "sXEp23EUQALgKkuaeeejFCfLoAtUQVU4HgdQ5YBjJvvwEphXNgVDuNA9dS9YRQ1CpjFsKN6XRSi5cUMfXfmKUFR",
  "key13": "58up6VGxk1qpRVSf4t5u5QcMykFwJ5GYf33Nooft8bMhfC4yEJAQaH1qhNfuVs5nra2q1Tcqg1LSPzPFyWhhsbyH",
  "key14": "2X712PGJMBVS649Uq8VzVB1byEY6CrRP8VMnQLbPVDGxgjwP3UDt1Yd1mG9ncGZwvocEUGcnf7En7Fw63gb34nC1",
  "key15": "5iiABS7QS9LQ3iRNPpcbSXhH7vXrzx1mUTfQV8Ttq5nmPraPVmUqEJTxgKaWzTFyrcaYBFZp8KVxjMg1HvknceJd",
  "key16": "36g5QaoBqgjTcXEJUB22jNujiVxunboA1ud9SWRWHTEq6wy4nHrbb4LoGVqQ7hAhND9TFLFVsAiPndWNeiA7UcqL",
  "key17": "4CvY5BE8DAxSvST81CEaXoU2nwpntg8bBNbuG8N3cuq3rRMAZY589w72PkPXP2meZpnZ1aXyvMiy1K2e1YeqSMq5",
  "key18": "2NPm9etpeCnDjkMY7PgZMeZ39PXfWiv4CAn5KEUQMZ2nrtNAynHzcWEzcYYC4ovjqGBJka2m491i4Q5gxEfvgTJn",
  "key19": "2j3tF83JpZxqSDYJpB3eooapT9bWsG6EyeZmnQYRfrjGVwWoiY1YGpX7j6LRzrM6me5FUU1bDpEf3YDyhsFvDxaB",
  "key20": "31SmMci9TZRaEqKRXu9AcJn7XAi492LhVctqLXrFp9H9WfTnGtXuhQqMQc5WQWFZQ5aRC1SYEVSa5MiFQyzvk2Fm",
  "key21": "64BYmAnmc3crgaHM7g2np5gBMqDXAAPmBotd5g7dZcEi5cyc9s7zBoGD6H1EsYHZQLdvFR9bN2Y2W9Qn9eNcRi4G",
  "key22": "5sT9GjxcEAddXLnRd9miaYNDd7MsXhr28maFZzrSpaDDf3P75aLPrfXk1zQXX4SGHJcqNPU89X3ACeE3VAqBVSre",
  "key23": "62qWE9arCu1avxN6h56ug9VKXxenKZ4HGTAnkBY6VQxqznMGU5uKq4QwFE4TQFkrEXkdF3aqqsYsbPMdPWLAVAsX",
  "key24": "4oPCci2He9sDPM2wigEjwai7gY8exPGa5hWABr63QVutntyxrLjKHLq5upcBcyqfHyroNCKhNbpSG5DbMDKzjnNF",
  "key25": "2FdxPHTWeDyrrZQKjotmFkdPmF2DhRmZv9ZA5A72j9buTy7i4AoiMQCDWs6QSLHhrn2kFBDs1Ywwii8qDFsgmoBs",
  "key26": "3merBUk7uqpFrzm8Nq3ryikC7eyC6LbTjfa5dcovcQCwFKGM7oCsucPeFS1jxWJEiNfpqLzkxoK7gaK2cr1s51JE",
  "key27": "52ojLHCKQ2GkVMXc835wbuAr5R5d8a3drpos5a7VcvUGWmP3SS4htpw8BU53hk7Ziytc7pJ9Y7Xtnt9vK8kfKVPL",
  "key28": "vcMMs1a87hibFA6kqqZPv739pEcup41xE3pZjGcS4itsPxoRQGCDtjAQFky9qZ4n3ARk3L2umViALSaocRuxJCC",
  "key29": "3GiReUHkHEiJfXNudj2AG25MqKKyAhuf2PnyL8fzodoG34dpVJzeWsC4DnE5kWqCSfhjgxNxSdpY8vYTVqCvdgbB",
  "key30": "4s4uhKc9KpqrS5j1ZDcEDzWZjw2NGB1xzbePbTva4tqAXt1KJeaxFxVBdi66chwiYKHduhGGKWjNQzoXLz6ZxMQa",
  "key31": "5aeFqFGixTs1K2LutDmozU9vbQHi6zsvqBfwwRFKEbELQBn8gDoVFtHdXDqQz9fVznrHPZgLWj92MUj6PMgVrAsM",
  "key32": "3iK47hNJsM2kmsJHGv6VFbecKyhWmKVRDFrT5ASAVPcCaifCXeQKfoNo8Gqz4kx3M5rkkq8gu7sEYBQE7efMQK9n",
  "key33": "34gvUi64RBow3FM13G6oCGaCxRThWLhAo1C2rEyCVfdxQXfRHcWGuoEV9gCPF79obmCNDKU5E96uQVz2PQ2ecDW5",
  "key34": "5g5y4wqgngWXNzYYrXjViLadove2mwAavmb2z5gLmWLy5bV3VosvDkgMHK4NmMmpARbDPsK3rerdvpBMxE3scqxK",
  "key35": "2D2DrysetnwnQzBTNeCSNRmNkDZe2jgmz5APckFTGDJmmibD8FhKviV49SgeBftQx2HVFUVwGrKNEMtGRRn3SoFf",
  "key36": "2iBPcYwjAzDKDpQGcEAGA5GTJYAjLFrA5WDQNsByBPSscJ5qNzNknTFA4p7Cq7CJzVZV947RtNgEm3boRUSpzDKb",
  "key37": "4M7FeF9QpPubjQmE7BZTsvcqYtqCssPbggvjTbnSasbYXLX5uscDvrx8SA3vEfzgpYKyFLet1SFsctvGe5BJvsds",
  "key38": "3bTzD3Ar88FYkhgnyJp3L7viaUt3NnbcnKWiY4PGumUopF9np4GaWtkbBNdHCUPfU8p97f62mhAEqS7KyVtLXT8N",
  "key39": "26UP23NQJujrz6uK3bMEj2noThWhNr2KJ295xNobHcuLJxkYVi5F5YxXauKf2JxsFXUQFsGDcPY6yaMwjASbcvnC",
  "key40": "2G86i99zN9kRDSm91AcCtMrn8yd8Bep4tPfFhFaPYAX9GzaiAaq7u7EayYWDCrozyyYtqFhYGAgEpx6va8uwWqnA",
  "key41": "HT6V1UExxu7nMy3sNp2Dckn8hheTS2zkTdraKTFQzZrT1o9kq8JitQnPsNxN8k6LjVftHBQkcvixSmWsMcfrbSC",
  "key42": "3kQYghnBaDwqkie2HTsu66ZdcgAaVTjFEbMuVFcpDh5iANjwaY1DCfdxPZHxRjTmXa2Mt5UspuT7nDjSRAoMTXQU",
  "key43": "5BPHYTvWdgzKKQG6bw9S9upg2sF1Yp8EJ5L59eDDHayRMDAVVWkArdNeoBmBiocJgk4RzQPktPkSd8Qzk1PPbDro",
  "key44": "3bJvFh43XMRNjk7Pu9rwKpsRqKjU8rqAKLLpafi4mFB3h1cstfHDnctWEddS9HvxjFe8ZuQtcdgqy8fKKquM1mMw"
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
