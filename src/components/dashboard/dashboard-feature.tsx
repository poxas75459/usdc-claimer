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
    "5XVhmQLFUNFGnYT6E4Rr4pXZriCQEcRUvRNcDs2nnXRiVE8XkLowgwtXzXjVZxtU4sTyppgCfhYQ3rATaBdZez5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCgZ4ipAD4Qv3eKovgexVXkK9KKV2jmV7hdZ3Z1rHKFp7SoKqA2CVLGDtppBGv9fKEtLpQPZDzVy7WhnM6tjsHd",
  "key1": "37Xncu6AFGHD3Q36DvJFeu5s8hq5qZv8A9qKwdKCvBSq11wcRPn5BiPywEz2eRXXKPtNuNr4zhA4iRBjf6EhxKKm",
  "key2": "2KU8pZVDoDZxG2ESPcjEMafpP2X8a7qMpvYQyLiBGggBoeWztLocJhUXRxuS1gtVm6f14MmtvzZsyLUGjb6TnNKP",
  "key3": "FtrrUQAjJjEzV26AqKhDbcPZqmivjUrzABPj6FKCwvNS8dPeLdCvgDjdeDxdfzDQQoMud8TLUrtp274dU7Q2y7W",
  "key4": "2C7ZgaC5Dq8uZ7hJCJzUMEGGeYVYQkMz3xJSY4E6MrTpN42KKrtruubFLekQRLtUP89Lr9XnwN6nwDMQtsHPkfXW",
  "key5": "5NhLBpnXwgw3P6n8TZRkRv3aur7PBMahMuaqepnn94CeaT1k8DgV28k7zG7HFs6H34gbZuGRDdYCk1QagaL9r39A",
  "key6": "2CXFsygw2a1pMHgDi4fA8sKqQDQLuAbE3qhwSotdjbhUTkvPMGxZEN5TeWBxDeJ4T1TSxYJnBw3ytpKGwoHVGmDc",
  "key7": "4dY3WKicizq28fbNGCqxEDjSiPo4FrMy9H9Ay6QvA66ovjEu4vitPFJJCJUYRqQFevbAkP4J2N8pwE9NwEFzLVRu",
  "key8": "5wX61WDYYJ4Dd3zenwQXtN1gxy9xyj5LckyGrGsYxzcZ5Nck5keM778Y5oQh3UL3Z5XRNz3ADDCK5oQUZNzS9W6h",
  "key9": "jFukgZkkQi6kwQie3RrqDTWR4i4QPas4ET7uFMpozNbFUxtASxRYCWS3ZknNPxcRaWiuFeYv3d61SpxdMFYKaBZ",
  "key10": "2tHKTXwWcZPfeirQjEg3BjmtNi5KC2yRDkCPvQfHi8iVSoc3cA1t8PV7L4dGduBGhNYV42PNs1j7VCLTRhWELvdT",
  "key11": "67A4N2yuxiVWx1KLRGyH2L34WDVN81kishvfc2ikFb393bGCTK2H6S98M15tJqnpYf9MbepNopktMqSirsG1TC5H",
  "key12": "4HhSdyde3pmZTiqQaNYkTdEhbpxfPtZMTC2jaf2aPSF1XKFFGEAYpdkyprdVfyPMdX65xVSTvEHXuTBRLi1Pyhgv",
  "key13": "98ZgkZXJ4pVF6JiQnwF4WfhpLSd5g53TQcntPv8zf4FPrUVJ7V3FTnQ4UqnJcrRKtGNaTiEMUNKRETRozz6nKRz",
  "key14": "26N94cfckzwbZMW9p2ZBZbxU2BCYXMENz7LGEgqj3VR6BF82CATxKNUa7zHrnCEsVYsnNDV8NZzUQX5c9ErHnah4",
  "key15": "wvGKJejVTbEnf9Miww2bCR6wA8mhPiHc6HhauXQ4fJN1D71XbWRhuEJHBb3skKvakFu6AD7VmbmgqL3AD9dYyrQ",
  "key16": "2u7U5WuUrwfCugRZc7C4u5txVHzAcSFp6vMSgetvWsAGiAmjAXUABv44RijGFvQz1qYEsWVHvNJUGcmEPR4S41XC",
  "key17": "2KBmpirEPvdCq1GYVEuPENH5T3AaMB1FYwij2wVfpm2eYf1B2M2fsrY5VoYBveiMWV9Cu7NSKNBDhTkGMZrxzgQz",
  "key18": "2NCUXkV34Xbw81roqhvC9ZxC1L4cTMMM6w1e1NtTemrkSGaQcpGoTddrbGa2GAzjiC9BCDu77xq6DR2TNVacTcEz",
  "key19": "2sBfddDZK7rwV5x4yyY6PR9rYjDTyxeiNA95oXmf9GgkRbTN84dHFH1vWBbJrEWthRB2MH6kTYxVA5FjraSQFkj4",
  "key20": "rkYL4hNb4a3TB6GTEkMxNFpBxWuxw3yjhZiJicnyFZj5nGLP1caqcEbDeoQGJ6ZAvegLqVCMAKwB8JvoR6fb3iX",
  "key21": "48mrP7Ap1BZKsJv9dyjBNCUUnkMjwyKqeP2bsfVvWgB5fXCqsVjZ6M72D6Vm1sHjsmq5GrbLEBK6BTc6SNfhDuLW",
  "key22": "41Bx2r4CmhCXZsvZCRER8edWk5Bs7Zs9PBad7eyV6sA1vFXQp2K2o7sUuDUkbTjfezcMVEPVCcjmgJu89ZaNokdR",
  "key23": "RYB64EeCoGbBeE94AeeEs4DwQ43iGmcuq3W5fF6uHMoNp6xZn284cndUo33RqwBC8GgUnzt7jb5to1MPVy4dfCt",
  "key24": "4JWXYHtxR8tPrfzg3tQFVdcDXMYNNnQ5X7XhomjSgwPGZzDctanFeQkHfZJJUCVLPPnfptQwy6mU79pqcXMWGbE",
  "key25": "7xgguTvJKVMpeo73dDVNwXpJiYZyBFbeZHu8DeTKzc2W27LrGmYGUKadbac9QnN5aMMRsmMuaY8e3JAXSaW7gmA",
  "key26": "5kdogYanwCDG3bbAKfhU1nsTi3b7mQHmCE77TrhyZB57pQLQjgLAVWTx5jbiraPFBoR1eW1heegjvcNpd26qRBzF",
  "key27": "5hRoYRqtViZeaXKjfczo7mc77gKoHr9LvpCfVSofRbtdRtgtUt1JwbMU9rc4P7eyeKJWiNhw37huuY6JyPgHPXbS",
  "key28": "2hQk88owTN5cRLegaW6bEicQtDQyNdv7wjHvGoCTmkDMyXdWZPVkQA1K9ARUPV5FDiuow4cx7LBgHoh1rcz8YM7C",
  "key29": "5xvbEzVSmBQDtCYxKWnzg4Ae3KBBpVnYNNfzHWC83r1F8Pmbt8o9hWVEpCjeyCC9PkkD6r6deG4n8LkPHPRp5DGk",
  "key30": "5xu9HeaheJCJqwMeqAoYxsLkanpYbtFVPtTCiyNjRYgw9ox7AuoKPxfBFfvQPmCqmSnQNc2Zr3CEjSjLWssoCeLS",
  "key31": "2XJGBqm5NG8gvVTEd9qWgsZkm6BooaQax8fUTSTS8amSMd9dmE6sandcTcyK3v6FkNfjz6kxWRMCX5NLyBTKX55G",
  "key32": "4y1ps83qenL6dq4qZb3sDB3tgQcZUcc7YzYo4nRFVxVfjkdzun4zTvzoZWgn99TLv92c5ZYPx9SaXkEgSmS1L5HE",
  "key33": "3Qa51by9nbqw8V6Y3NcKoeSfU8AfeRSNHZmZmuzsDHqYciuu9U2Tyhyo8WaUv41JxJGTw2MyRjZfTMAMnjMpHpFa",
  "key34": "39AAkvZXtRwr6SsB7j58cXJpDvrdzjLdwiya1Jgfj3v9v2ZfhB3bfJvu8uCx7nJZKxakKaqeiWyMJCCNUYuwaoKB",
  "key35": "2fobD3o6N5oaaoGKgxmKR61YnFL3kgo1t4PS9SX86HdLUyp32bRpMLbSGcSAPn1nX1jyiaq52dkktHQ7h97mLydJ",
  "key36": "37bP1wJzRSQMYcDn2xfcvvSTpeD1b7PG3Yj1rsSmNoVzFw6LMUXmCbhiuRnzT6WXU8NutfQJd5LwKTgj84hW2oxK",
  "key37": "3Xgf6o2RtLKNqwYg36GVk6hiXjotkDfMcjvaaVKhnM3QBQWbfRtNS1gztgiqeEHY4idvqQiG25jcjuyKo7dmsrce",
  "key38": "3f7JQE41KyJbJmc8nBF4SaMhXuYXix3q3UB6izbMBeTteZhSLwjekjCnmRbTjfU3oyFKameFRMF2KBt71Bu3bpWs",
  "key39": "mx9RFcqqytj2VHnCyEfeTiErUzwuBZTe4ARRgwbiLetoHfhiYKApmKZkVTbXBuTEp7eNyycriwNt6gJrp9tUiXu",
  "key40": "2aLeSiFk7H2D3sWt7qKsXsDvBthFPeoemfbcM8zYLoeerSJY9udBvLz928y4vULUc3iYMRyYJaJJJvqbQMFJwz5S",
  "key41": "1RCxePyeepcpzMxCVqxL35UyUKyeBf4q99NKC3m2uDLDWUpVMHk3c4Q5fmg9kSvFdQEAS2GZQLq28TRiC2rEuC5",
  "key42": "21Mnr2YAwigNevrtDXg7Sei5cFu6pnHHUvJs1z9Q34M9CCiTegYyfATe4BRKbwunnAoxxwRbfnxuxaL28JcRfqfN"
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
