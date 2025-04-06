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
    "4QoMWiiJWMUYmhSgRwda5jBQDWvH4gduBPJnKc6tTeeCGVBmHBGcu2rXyMUR2BLsbhr3KQZwCt1wyKeryqx7faD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWXebSuiKXts8wBmDnpjjWx5rUN4NKYMrjwpY1mgsdTo8GHx4iMwZNA4jjU7kGWsp2DBHgBgKv7MdWrj8qgcMx8",
  "key1": "342QxGTBiKhSPkEcckRAUjjZ25p4o3nEkMNho3bVL1mhWvfpXP5yo6hZjm3SABWmsXwNydPn59bSKEqE8Y3Yt8x",
  "key2": "2FV8neYFzA9xzx1jhKtPs7TdBTYHFGerKRh3KV84jgpoapAyLt6Jv9hdDpEj6ZeoKDtE7F6KTxGhsh41c2UogAE6",
  "key3": "2xeHQQpRExggxthrj6fzVbxbgDvCw438XvkNu9hLhaQCtE3ihSpfXTaVCUyS7VdexVMUVaLvJw4ALhtbo4jPGV4u",
  "key4": "5zmpr49jZ6TxqzknDrSWQUCM8LGQznWTq8857t6YH9SxYR6XuqPu7ruuUvpyeMg6K55xMs5NSdfS7u6N82nvPv3K",
  "key5": "4wFH7DLjyaTQDFPpSAta8cM3TWthWaJG3z6V3QsE8Aos6gtLRnVha7Lex2dUQv8QNRpu8C6TPvgWRTpqTtReYzX5",
  "key6": "FkdCkMGK9p6y5gV98haS3kSWfEqauFacGtAEGYrMUGLVPsVvRrJvpVHi8KtRZ3ktcqCD1NMtTTKtXocZTRw8bMW",
  "key7": "32nnbq7d4tS48m3UdZBJ4eq2Ut9MuJdv8VmbkAm4RCAZoAjBBeSPYojc3JhdUS3uYutPpvgPNkVyu7G6hJJoP8fr",
  "key8": "df7jNmwNYkPUy5Vme6PFhkadoi7WMw8A6MGuYvDKBzcywQQ1zRmiGdXUPJBQU3nRwUCgLbxvi62RqfF162vapWa",
  "key9": "2EQYZneNTJZ5bDNnemJdJ9cfM25KRvdt9o3d1yprS6ERyYmqwZbWhDyQAdKcKxmzwD2dL7kEZQ2xbqehbb5afNuy",
  "key10": "46oZ3Xx39ePMZTrzLKi1VJgt7SfYqXkT2ftvPmgyaeVLza9BGoeYw6RT2MuMbFfgCBSTwkwQvz57L1uZsv7AaPST",
  "key11": "2V152VZPrz35xn5QFDAPUrkmwAJwQDg6nwdxK8e6xvupcQE8ayyJriyjsx7hpwGHHLFgNXAyJn7gLq11SjCw25bn",
  "key12": "4FD2ZviYufRxhNA8DcLvEJ9E7ENZYPiBtTFgfkk2m6jfNQurSgWZTSzY4LEPrGGVdrE335wUKnfR5B4xxeocMWh3",
  "key13": "63aYdnFGnGTMuFMANrqHn5sZ5ksNRLkGRQYdF1mg4QQPdGYs8C6enRMEw4i1G9kyXpGfDGy6uT9eR34pyGV1rUKX",
  "key14": "2RBFsdPTDR3xhRMWta6zQraYETofZTo95MfSiez3xvYp3DQgYFPKP2RkLnjLjWJVSd3bAmQf7sXPwCZv93g26q1g",
  "key15": "21dBJLWPUHKBhmmsmvAYtjdxpKQQss9nNqr6GzsY733PYHFGr3pwzy8ceFgi4e2uPgfEUpya7RHPKLJHCqK4Q22Z",
  "key16": "45Jz52E2yDoowHT77bGCYVQERohsLQ4VixFL7ah5SRVaDYCEqWb7ZjMpm7GBBqE3hJUna4wrZdhr9Xmu3m3cGcRt",
  "key17": "5whcTRpSUTRVgXSi46hTMQdC8V2xUvWmZ1zD7m18LWR69Fr3wnXEzhf6EmrimaKENJo3XoW8wMXvr2KQtpmSUKzN",
  "key18": "5beZM2vnwaSjG9net1VXCkgkuvqMxhExmh3fDDRwtL5QfvxeiHe398NrLpLzfZkwLEytKFketudH4p4EATsBDrdJ",
  "key19": "AadQCkY6K5roSwRp3Te3EnCm6neXjmz42G6rMxKC9S2QJ19e1pHF2uk8tDk8xLnKioQSyarReF2cR1hUbigPPro",
  "key20": "4Fo9yk2uJsZnS6hdhDDfwxGWG7ZG8DVBdruPkkWtAYUgQ83Ypy8f7hxoKwqFs6FLo8PXhW8fVsgvwiznptKq3zAH",
  "key21": "3gYe1eHwbziYrHFx68vMZSFc9xSFSP4h43K5hBeDTQCvKY4nXudnsXyKYn91VHX7N8R4PgCQKDVs1siMPhMF888Q",
  "key22": "2rjprcfNTgFUDoyvV1QuVB88g1M2qbps1a36CJ6zNrxsFX2sTnVJKqsnLzYkG3NRni5U5XsuBZyYKrSWJLax9Eha",
  "key23": "4APFbBEg8BSiSCYqdJGbgiaasy6TmZx1ChbYv6EahzARcGjQGAowbKgBpt1LzsytL7ZCxSuDUiSRG5jG9Hg9dHJy",
  "key24": "ccPT8kmSgaS7d2wLnZamG2sQPF7Y9BDqAAgXPmZnynPLxuRe3wxF3BFHp9fwyAMfbCqaSp5YXrZoNoNHhQmpBp2",
  "key25": "62qrRpwqRYb9G1D7prq6k8nQgyY7F9L6m1Y3NdMmppnvB3JQM4mCYYtaBRp1MUjaGiW3P9csu1ciEjc9TiUyjSQr",
  "key26": "5MhSkpz32sVGZweb4J7CBZUCsj3JaK1FBDfumEg6BABCWwZbQZMozSmoCoyGhdLu5K3A5vSC2TEZWEnNYkgpT2FP",
  "key27": "4rbxhRULxpPu8cBkmswxf9JZfkzWJrTTRikcTapcghNptnvFpejDkCA62ZEw4oFkAT1GMPvnnjxH2cBSgND3BAR1",
  "key28": "48d23jadCwwE6YxqAEZUbZphUhYLB3nNfDRo6hzqtjX3C4b3SMkkwsDMJTBWMAYWhTRzNkeuYMkBDE9jABWk1RBg",
  "key29": "4wQEiPJjVqTb3vrVXp14zSDuoxaS2XUzxp3Cb5U5aZB9g2zgkCfLiizFYCRD8EEkLfe16dHbbi9Cm9SSWksQsE2B",
  "key30": "3UccWT4S2taSJffxgcoh3Lsh2Aj49n9Rmjy7uHii8rfVBEX7f2L2gqrANkmnG3T1EhcQxhgyZshpZTU4NKTrxug",
  "key31": "2ku8McBemSX1mbtGrpXCpGdatgZ1sSYEdazMu8UN6jW6EYrCbYFXXZEJDLJtWc5GtqW7rN8dF7AB23fLCuLnS7eT",
  "key32": "4NWGjU6JGZq4qLgf6yxRvJow4meUudGcBKnUKxsUuM1feHhB9aPLPtNahYa1NoDQrgkJV3FhLHbdm6SKyuDu8P9T",
  "key33": "2EkHaDdtwRtkStn9AfVHt4Pxj8Zh28REQ4CGoYeab4rpeJpzPDCUTY97zjbykd2SBQteysAiHsKmatyhZjr1nq8f",
  "key34": "AyxksYVQebKsJi3osDFmPKHs86EsxwSgJJVKgmKpiXL3xc92VZY6ybEunCez1d3wZL6NoefBy34o4iFWY3nr2RG",
  "key35": "qwSwjSA64VkkFVzAm87CHZmcNtoHFgogDeCGm2mrMAWjPbyxfc7wW9NVQKaJP7jvidoNNx8n9ejJtqeXZkgr355",
  "key36": "4mnuFsUtVSB4UxVw8WqAvMEEa7BEbzKnvNizVyQkCRG32Gr2ABrTrgYTBdJBc792iWJCpph4UAA4F8t4Bug49TPC",
  "key37": "4oKSDUNefixCDaYt3ayFoSjpy3dySx2bW2GQYgQ1CLNQW969QCRK3yWCUL9dymRs3a3JWGbnmd7Qjrm6nHQ92YAc",
  "key38": "3JnozUhDkTArCuypJ9aZeKAcNmsctsWT6H1bEfjivXknCHyRvnthqAV72MVnF3RPjAERjvAx1oFreGXHSdUCcffA",
  "key39": "eVGA1a1igoCpWUu6WieGTpXoiRkcbGSnaikURAf1YZp8NPUsZPBQdg12ixDvRGEnis6Mhb6AquLxbqvEMmZSEp1",
  "key40": "3C1P5HkPDZNWFxjK6D3uFm1UFEMKYr8PHcDgiNRWAF9YjZQTkud66ZM5WWDsMCTcXaNeWFPupjNG9MeMgzAVRdeh",
  "key41": "6Fy9KxRgxFjrRaeNoUWFPajXi1st1N2bseNgkDTh1ACVGUNdqDfZDqYE8wkSQgcPEMTtPonpKyv8wAQyicrVmxL",
  "key42": "2qSw5qEdtDYcbjqvS7QEj94Dh5ChXKHbeXQNiYYsfou8vdezWgWUeeBvbcRG7WBNHMQWSfqDhhajpYks3Xm7ybe9"
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
