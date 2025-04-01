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
    "4KBrApCRzvSmfMwWRSLuob8PX49jeGeTXCxp26RJJn9dTx8oAvtm2gBmn1t4WL5bkdgkPMtwmTGRKazwn47MNxnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424yXys6PuynH9GmHmtjSBVND4mTobaPnqZgKUjdwj8ANJZf5QzMfMvrePRyKWaX7jGrL6XojXKwKhawfUqqd9m8",
  "key1": "62M4PQUzKVE1jHSp4cxbeSBwuYwkAj4nxmfAnQvdhoKoLdxtBr2XGg3aE3wVa2moK8BB6pqpEkpEJtVnBXbqdbF2",
  "key2": "5fYA5uk8T8sV6AxjGrHmMrHN4ZiG9JFEAoJgjYH6FAkvptYgcUcprYgC7vKfwUdWDSygJ96RYnhZZ4oxezyLCkpU",
  "key3": "4Wx2wa3dXxrmSCCkFLK1gTTp2aNfU2JBzRewSxjjVd3R2pcERVQUvebzHchfh4UAEeUemmxDGEgyzbshFf2Vb9G5",
  "key4": "5SEvtMoZH6pF455u1Xt7zLiuAXPPG89N8xEXBh8GmJnB3j92DvvjZiG1TBSqm5TK2C6EmV3ktZQa4LV1JxNojqB",
  "key5": "5nrkUa6uYJnshZ7VxbfEsmg5sXrYiPTz98XjN1s3cfquzdBsz6sB22HVf4KRLVp8wCDtdwf5onGkpqcgNJqmkVZU",
  "key6": "4xwqWYGzBrFsamrs2hKsTwA3GguDhSzjBgEK3nNKrhS4ZF1bFN65MGjVoikMacbxpii288DJCMeGhbKGb1oD6XM4",
  "key7": "tiEg5weP3QA5Er8FudbFDM87u5dbq6JeJc4gZxxhfyBbFjjF9jWoaMtGmRbfP17nhQQccazx8WL3DvvWBSAQaVu",
  "key8": "VWXTZ5umosFbfmmQLArx7CrzFBZ52vobvKxU7EcCdRRyYNKPv7F3LEa7LRoZpom94XaaMtCNTTqvctLKEzMJYG2",
  "key9": "5LURCd7MaYcpaVtENXMZZGU8t8EkwXckHFaTQEPQvnTJnnZPkUuCZXRn1GoTm2ogdvr1X6RW76vKRTJJHKfrVizs",
  "key10": "3zgXtrHfSTVutP5RjjGkqEjEwymKmy54dkShtZLsYunje39vVPnr7QKvTTe4adykKaCfq3FrsCwtnodAiU2Yi1eh",
  "key11": "Jya9GMBptoNcaJWhqtvuLKYnUAaQdc8yAhQY926CDKgVsgijCijbK45sLRg3Y45Q985uydbq2w5aLt98rfQRx5t",
  "key12": "4BjT1GVDcfuWo9fWJxZ6qft3N4sW8TQMLGxUxcVLBffD3KjqQ96jQXVutdWMebDUCFoRamLa8LWrkE5kJhTwbdhd",
  "key13": "2Hcpg1iMXbtJGsHH7hTaUi4UmnfXofcmJEhBsSrwKZcHYMoKyrRHUAincnahvtXd2qCKzmtuVwLeHKGXE16XwAGi",
  "key14": "5s6P1BFBmUcy3Ytg2uDbD1J85oa4rBLVGmjQL3ayo5f5bNs6EP6mhnJUDJBohZMeqr1SEfq2izZE2JQuAJ5cdoi4",
  "key15": "5uB3kGExMfBdA6BKz91mrnYwB76Z3wWitrBypMPwyr6AcYCw5GAqkzzeThEzqnPMs9iBEcXXKJY9JAMCQuvqc5Dg",
  "key16": "3BT988kEkN99rXHFR7ANVYsE6bJA5s5QzzVpcYGZjNEsELZkgEXVKmg4nhEELscrubFzGzugQEu3yC7ynAFxa1oK",
  "key17": "AREEQ1MKYNFFNnjcg66ReHhWQ6rzKZHhdiPQYPcd8N6VrU4WXmdHfD5M2PRR5go2hLcAxD984gwZsGE3tuQPkgK",
  "key18": "5arWXz9QdRcqM1Gy2vSmk9UjXEwcy5szkTVWA9UWB1wRUS1u2JUEENXvreAbdctqFJq7Ty772FE8G6uC2KrrVGfJ",
  "key19": "4Zcm3sEPywXACnghbLE8rrqkxKyyqq7AHw1wE1squ5zM8aiuH87uC7fEBpSTCisASK37MSDmwnJkTmsrpsFTJ6Zo",
  "key20": "55RAqgPGBzLnSPY5b8UPvcHYZe62hJ5PauEPdmcYxQRtgQydVsLjGPH86ggF8HRrXYzafdA9E1bEGTmpaggHu8qj",
  "key21": "664v61fpvWGrd5tGfpWTFa67NjjpPXwVazHzym1fYk16otzsHkU97vbh1zBcDYQ5tjHFGVgs8WZSAmYcAdFLBBE1",
  "key22": "sCPsA1W3BcTEBDjnfpweA3KxF6MYa67fASSs18JPvvWX6ffztvPCAgJAdWYuobptN6DxtnfpDs4rc92Aa8EwMNa",
  "key23": "5Ssq89Es8CNxGAyvX7Ui7841RPKTYUeqWxZytSBLHw6q7pgA9Hsqot1Zid7uccPB3W1YyB1UZtKC1gJo38VbKn5F",
  "key24": "655YJbHkiiMaP6j6NSRgn9WAD74ZaWng3AnD8fHRzBFDnrtW9eprAjdvjDxAGSss1J7syXRpYTP9pUnpeBy7hzbT",
  "key25": "NR4vfWTyTF5zce7mMjBisam8ZRBNQBfb3BSPcUjimcAeS6G95FvMZNBaP7b39UJJdnKMhAMwq2eBq3iY991vBXa",
  "key26": "2pCdX2WB5UmQTXb5fkVVgb9upX1hwY7CzzAFJni7WTtchHUhqDWCpg1o3nVQV7NPYEoLWucqrw6RjwwLJHskaF6",
  "key27": "2Vv6iyX4z3GnAw4zFtLZYer5AnRYERTgiY7oLZ4Vex6pRQ1rPv2bLhMMvA8Dfyrs3Ns9urQM8gtUEU6eDFzJ7YCo",
  "key28": "3ingza2aiwTwn861NTp4iXo899q5Nkix3f6NnNhjfWmyCe2V8ApWh4rxi3rfCQZsyCURiAYsxWEGpYJ6Jaf7zK2w",
  "key29": "5oP5ppvQ8CRbc4pCphCuudGXwfyGEcUqM4PYzHKeD5pUpSWi1EhAWsdmYtfaZgvaq9nK3XwzgSCkSFUhJthUmLBM",
  "key30": "4PpgzN8UyfVhnpScf7uWK5T3Buvws62SmzyaakwTddofT2Wn5yev9YsJgChrQdH1MhGtZDNyLuJ1oSAthEubVfx8",
  "key31": "3bnJHXbQ8yiZ8naK35XbT1WRY1WN6SQLCUydhfmJgTeX56zwBHnc1DsbeQVGjap3V3w4aCZtno9EALNeyR5cZbmh",
  "key32": "5Qmgdq8eKNrVnhSzM4H2g7AG13taNhev2sfuCE44QZ8YoXfTqJtQjQoKqV1k4sTjvWw6VwohgZ5Es5SqJu4Xk1wf",
  "key33": "4K37qvwhEuPdhmb79MLPvC89xQWzpLV7ENHCwJqMeW4tA6MVU2BCp2KEcpJ1YQPdhEpC5VvCKRCFY1muNPXDaoum",
  "key34": "4zBB3yA99DbcKJaCJSAuNmtxty4DRP2umtXMrCtgZYa9x1agopWe3VfzG1svYys8SyKDWwfyR2RHPdoUK66dGpEt",
  "key35": "pp9HUPhJq97XfBuCCqbJ42jcnhrXjUxRA7X8ZsnzPfUN1ffMvZwJCL5YHofiRUjWR68ckfZwTaNWaRtqygox6P2"
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
