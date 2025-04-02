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
    "yJQgo8B3w7exiM3juk5ec3BB11cv3taxaT6jfTpwNx6kDpnXXJnCBxALjZuWP829mKdBij9Ffs7748NGgDiMZMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473JvaFgm7QwR53DvvwnyMPczAY19WydgmocLVRE8zUVYvk4JyiiAaob98XNoYvZNStZ7B9w4eBd1Yyf4MenKWbt",
  "key1": "4HLHrjNa5Li6wDtppQ4qmK9WDWnbPsH2F2J5cBfTcmpi7S8PNF3rnifZmiD4M7Ywh1mQH6cUaqq8eSiN9WdevqGE",
  "key2": "2wp9UeSwtyMdPpc3u7JxxLnbXTnzDnKrTFhGGzpWKd5sa4MUxpXD8sL2vZMK9zErSP9BoLq11M822qhYQr6HLhUB",
  "key3": "4KbJbA69YYW4tjTj2faNdewU983BBGaQPMmLx499J1DQm6j3vHjmwz2WDQXxYQS4n3iRUz8CZiFeqEkgbMUJUZb3",
  "key4": "3soSTnsoQSCuJjCyuB6s1sR4ZJW2qPMVjnqS57TNnfuKJou4zZ7DCd82XEEw6ugU3av1ekaF8Vt7HAY5s72GxVki",
  "key5": "USuLbBa3BHbDpL7Tbmwmtr3AZ5cWn2gYSpJBJ4RykyKKui33Ay5bYcsjB98ZqKDnG8KXfQCqdUc2RdAnD8659Nc",
  "key6": "niQskTYDub827fgckHgHiwk97jCHjW5JnLv1smn2tMn6qLQ22z8RMo2Lf9KgYakaX7fuGWc55SB8cdVoc9UkBny",
  "key7": "5h1kXMKreFE3Cwa23X3SLjKNap7rq5UUiZv5K5CPbNbpukh8iykgB7fvV6kJaJLHkrmg6N1xcQCmUccjDNacM61P",
  "key8": "2eJ5tzJ7MRoWQ5do8Q3tyB2RP73S5fVvC1y4zBiBNXUdVJybt78mpMhEiZbwYrwUXjUfBe8MgjhXewzujK1gyacR",
  "key9": "35TzyxijrbxTPegydzWxjbx4WfaELWQ79s8soTn5Xs5YYaYu69Fojituz2NchAjnPAeANgPNZLjCC6htuuogLQ9G",
  "key10": "2PHQjNeKqPawj6yKXMf4oENAWT8MK8jLpTXSf6ByuvHhLax9X8bV5LouBmPWVrdoUiSGWgtQ5jHrjuLpdC56rybL",
  "key11": "3PM4zWynrT2A8bVLuzzKrkygoPVHgAYdZecK2xBez6zD5d3aeh7E7woyof1Frmf5UC65Kb1NhZ9eKxgj1EKYRt8z",
  "key12": "5PS2xWp7Djqj1k9BmaxLYJykxxLEGwe9jsaxeKktVF2FTMj2rQykaw7iTBH1uBUN5o4ByVU2BAFCrg7hCy4cWfhK",
  "key13": "3pVPSMPVDGSADyfn99jXhH1k8RybBGjhEfxZUpCZJXEhRWvsvgJpGiRWxezDyY3syjehXYfpvFgMrgHWhuPCczNy",
  "key14": "2FANxMPSvp6oFiwkvHfZEjFwwNUMG94LanZ4w1Rv8JkEanH2zMgx9ctwzRjTLsSz7Fqpzb3sWBDpdPtgrQVGNi9k",
  "key15": "rU8mMb2s2xmN5t62gyFy4RU8R2feChqFNF66YLfXHuyQUchLjCrGkCxaaRUw3Sv7Rp3qi1GQZwaBXPL3WxgHXXi",
  "key16": "2basTEBAbL9w1YgwtRHVvzcJMwusczMccxSzTC23eqWKDwhuU5GswUWCBmQXD9K5snE3Hyy1qcbfEL2oyJ8qzQUJ",
  "key17": "2CriWATvz7Np8RTkXYbxHf7xgGc9eSwfyW2qUTFSuQz1GNNprdKryoWLSPEGFo1AgZEUu2ckqtRs2vRt2TRGtQLT",
  "key18": "2q1apxtMn9iCCQB389pB3zuNcDbsbyphJ3RFmKAWnew89sfqJdj9aem5rhJtFC532QizJ8H6SX7dQZAnWPVZ6MKv",
  "key19": "f9kpsCTBbynpJ6a1CjZKZVR4qkq1yvbUzKfxhvHsqDo1CQiFuaQ83YeUMcpZM7nwSGGMjWsDTGvDUnurRpaAocC",
  "key20": "4JT9rg6iAKStz3Thnu2RJkiPFNzMgx7X4mkWAD9YuHEcafeh1yRd89jK3sRaKjiC68Uge3i64EGpdnYXTBd9kTw",
  "key21": "41637NDHrhgSp91PPupQBMY5MVWwsfHWmRrtcn81doHtYJbDwpHCVNvYTGfkiVE2udceLg4YKmUKqdMFXB9QHeDF",
  "key22": "4pfrV2xu2VrcXKjDE7P67iy9Uu71nsbwoJpxGexfMHi4U9EVu2GJT557sFGwdKRcFDf6Xzwuge44Vi1gRHZYFwAd",
  "key23": "KiY7AzkhGHXerdcUJknw3MhA3udbn17XtNtnCzTx9iPGCbU1DGnk9EMHfEufxksniWtEsPrn9rdTtHJmCCNpXLT",
  "key24": "ipASxDHrrC9VapCzQr3wdkGrXC1csLthSkAvWa9rcYehZ3zpdoe4gFY7pR1geJSQygBjZXKWDvKKTbqgV95YJVz",
  "key25": "25eEJUWtEwG2YQ9o77DEUV4RFFP1dpasZC9uaCaF1dXuHPrDi3qtSqc8KKxgR2My2vvGmAiyr4EVbPGgkfsmoMo8",
  "key26": "eK73uSwyAuUP6nMSdJpmmi1HmKC6u9owAgUFYsFktK99gsWKKxsnkYqcfnkR4tseFJypAWUypDmXZ9uWJBtmU7o",
  "key27": "39cqK6R5haBugG6GV65id1wKQSJK32bni7fyZY25kyi4dSXrmskewxWa9wMS18orurvvFbxQEZ4sEfd4eNh2T1UU"
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
