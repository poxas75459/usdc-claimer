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
    "3m6LiRLQfSLLtAssL7yAJ2rbv9xKuMDDpBEPDHfGsP1LWzisn3423T7vXyPzUZcMobSajAyqKLqjtboWWZ2eEu68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBjAyg8oDca4Rh1RzjqYqYW9Z11W1cwdvPjMs28yFKdKjCPr444SDxKwMLhQC1hRZprsZ4kJAVvzVmdwdesoZvP",
  "key1": "59FD2c6n2NjaXZXxVzq1bghC8LLd5Dg4YpYgENRwj8yerYG4wyH6RYR7e1XNbT3zo8zVmReBLFP2LMFcwE7QZUUB",
  "key2": "2yUR7C49C7xQTihH8QMHUGdC8PyeCAAh5EuiG5dUSJUv2DnECP7wUP9uSH5F5ALmK4vMJE7yxZRMdjyNfrtJnbD1",
  "key3": "3B9eV8j3xwWW26TppETczKjHJGCT79wBzMurT9juhJ1CfsvusTqRUg7Bec7rJ4nRRUrzDqnSnkRug8VLixYNAjDv",
  "key4": "38JsXkMGRvzdhfbXAhBQ2dyPzfti3hqaAuHneRWDsKk7SQkQsHR1CBqFsK54tSV1VLQdwZqre3CNL6TPk7YAhxi4",
  "key5": "2HUtnwUssSh1gULQCSn9kbsSALe6H22wTh5bByNx8sJH2J3nPDLzFty3kHfrr2AkyLWYabx6mHuaoW5WtdxE8bt2",
  "key6": "3qMBSvHMWDhUoLSS9dThgqTXq9YtzjhuoJMSZoW1AEj7EYzXJXbebGGV7vtREvLd6Bf48LkaW5B47TB6SsF6Ejav",
  "key7": "41MGGzQuYjCCZiwZHB4fZyX4Z35Ms4J1FCCspQCksuLJCWB25wGZHprcF6P79vEx9qbdZWv9ZZZTRXVHiyB37iYu",
  "key8": "46DdqdjfFMZf3xfnneVfJGKSVBryHTpJRsXieeu8dNH7K9aPYyYA6zvfPXHUBqDxaf7aZ6sPt9xBtEhCS6dbVceQ",
  "key9": "4VePNm2nD4AepnKtVK2e3J18Qoyv8ceMTc18GWsaELViYFcfZBxWdeqs6nnUgbcEH66gxZgZiNVA7vgH1TTBvQWi",
  "key10": "2KPoNvVx1r9a8Vt8bXimhZBwJVBruAwbrWBmATustBXPA2wgnKM7GRDJ9eKQciAY3LfeHKPng2ZXkegKXPag1XLp",
  "key11": "3QeQDsGVBcPUFatRF3B4raqM3p4tX941BzT8G53hwG8rDjXckzJFYkTpv6aAihszQAcCXsY9pMZRAKh3iDLg9NTd",
  "key12": "2RiUEg9txLgXhupi9DLVEZVdxVvweYK3uBCMdChLrjdFZ9hpGj9WcsrwPUnhgcGv3H8V2J3qhqotT7vZ4ZfHQoVd",
  "key13": "2oWG38SZeJseucox3Nid295j9aSt8yGDp3RK8C6XDmUoqSMC9rmNzQmFsgKaDJBnZECQmf7U7dpT47RBUiCVd5UV",
  "key14": "QKogYuyL8yDP4kAW9uUSdZ3GJjq2VGpa84reom1ERP73yJhTARtD8wcMgKbb4BMZ6uNjh4UiSye68z3uZtvERfc",
  "key15": "65ZKrmuomAH5cNzMhqfdyvVdkDbu6tgYufH9nBbCBXDUS3bxYHh4wjDQEXUwyDP1w9tsVyoUZSeVGRZ86pDDNPRx",
  "key16": "5fMp55ecKPcLcVj8MXyFi3bb7cfYbCMN3AfKr8d84AEiZtFPtZeeQeY9W7w2NAk9ugWtCFCTwvBLPsyyvtzzHyCL",
  "key17": "H4W5G2DHBbFYTrfRiSFqHwBDzGVxeL8dh7JC1YPQqMiFE3nC3uB46WsmFq1o7e9JbVshzBeca6vjYfa1H2NteGP",
  "key18": "5RmuJqFokDwsP28YhUmSwc31Dxvi7DuKE6uJJUFWitQ9Stm83m3YP8TzrEbxRJtVXfu4rrmuvR82zP35WjQMRUkU",
  "key19": "3e7KZuptrXAStbJqA57T1KofyMWguruywmAxsnJJnsNq76fFQZpi1Dz3euyD9cFKe3eDWTZaNKVoo8aMShnn3Z5m",
  "key20": "38hs3aa8xiu4H4nd3EE9HNv9yzLhjLrLvpULYYoCkRhRHMzH9S4kTHcTRaHWmoECMDMRXktmd2XHEHm8JJLbLj76",
  "key21": "2fJY5n3TS5EwVv6RPE1eZSB3kq7NqyjwsK9bsyR4KyttGEnoiE4VZbUys9pVynQ2TPhbgrgXkmGVwsMEtFS9RW2t",
  "key22": "eiNynn3iXLivViEZDay8FDinTkxqfKCPigPrFWJmR3LVoAo3Br85gADr2fDqXfcGnYmC8fGKXNcUAJ9pJP4Kybk",
  "key23": "4NctzX5DLyJwzgqYK8brrjqJPVtoG2hww5KchB62ZsZp1JbqKAaPBLxL9oVNjeMvbt2FfTnprGkncwbAkHaJJsMa",
  "key24": "3cVUgX9ERt4zv8Uc2gHs3yA7qVpSEzt4qyNH2c6Mof6YgjugCGdgRGovCfeferS1596KBJRYa7oTStkcvCZW4r5i",
  "key25": "i9sRX6WW2pSoreTpU8JLCmrgVsmhx2d1oV5GoR82D1zozU8ycVdRw6dYXUkPoQismJBfMnEarBN22RCQWf38SE9",
  "key26": "4HPZvCcEe9o9SeJTupaeA9ihWEmAKdqxFKvzZczwm2yZLu6FmMX51pNCuTPPtBwqN2iFjAAyPTCyJ1WLVTarKTMP",
  "key27": "2aezkNnSySRfiRNd8wbHFkccnjZwHQ1oUNYxDorBpg5qhFsf4vfKnnKZM4tehsWLRFe4KHESqAcEobGzEMDWecm5",
  "key28": "65mTyPvtdcptHVCtdv4ujTtNbfcKonspbgDfdoWFG9SqcGsBgZUmAJVFZm9i6qp9LDFnNG5Cu9rTQajiV6Z4Zvwx",
  "key29": "4PW7Ny6yPGBTYgVTXiag2JuFhQAx8Ut3fotdvcXne3NgF4E5ESGbh2zYDThHQs9b5DyEHk7ozXsbJcR5yXiC2HKC",
  "key30": "xpPLChTHE9mVn6xbh7BwLfMSktE5Xbq7BJ1pzCqJc5ehnDFPtfFy2YKzq4WVubkVJiX492tdafYunzQ7SGnpMrE",
  "key31": "2aHhikGQtA3UBivDkY4skCkDBdkAy6nxCYiEqnixG8FvZkrdcTqjcnAKt6MNURVsHhoN1HAQ2Hj6uzWJaFC7tJ7c",
  "key32": "3865JuAbBvd9AsY2U5KsoSh4XuoAs27kfpACj69o55V8K7DnRwSMbWN19fxNUZDg1X41vKWSKMA8SK6tUju7DEuZ",
  "key33": "4xWVEXKFXGUf8U72LY6tJLCLWU6wa5RMikjqiZE6NwF4AmgaHUYSPxuKxA8nLu3Y2kVtuiS6zbuR2txtn5E19SsK",
  "key34": "4TdpD8J8N777x2um6GkyByshDVeqdqCvy6j8B8eZgskkhLzjmAybK4MP3H3oU2zzk63MXk7aA5N53L7DzRFC9MV5",
  "key35": "2rMqEfVeJcTpJ7Naxb565CRJWngeY4VEe9qNHt2Rx8iyk7Czv364SwipPJdZdXt8XRuuSXkqukvombt57M54e1E1",
  "key36": "3aB9zkxYGpMsmPQ4F1wGtePJKkDU1GmukHz9eJDcRRgk7txFsWtP5GbbCtPMP5gcXsMcfXmnVpo7BJJ1zV2oq1fT",
  "key37": "2TBissDvjx9R1WkVJSP6e2jeHk9ebM2mrUooFMf9jjtZya3Yxq967MJhdD1uj6DjoHVBvY1EhLrDnXnjwuCYyQqH",
  "key38": "2c6ur2aQHQjiikNFnvUitHiTaP6FnwemnpYx3wSeHVHUkWgL1KDsow2xQP39rN28U1Y4936bfLeTA6DVzp32EmNA",
  "key39": "2aeniPnWrQpqt67KRy458M7oc8tbrFosZZfDmDHNT2KHw9MTiL6CemNLo9KdYXHUrf1necigcMMu6QTRruC7zYYc"
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
