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
    "5bP6kweqUUXDW56Sq1UbeqcyMkZhsZPuSHv97WoQ1rFBY1z81G93F81HR5pPRKMfAsxss5svRwH6U5qbgumSM9Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WegdX4nqAbvMyWeGahejobB7dYmN4VUsEZkb5aLUkLJiKrqUr6UVtbfkMLYUqB6zbia6kaYJh1nSjJB57WkHcyf",
  "key1": "4dTeTeqfpnonG9SqWV7z6forsQErqkmiujwi7a628jPfUtAr77XaHV1eFhLjfBmYk8sRZApvmMB9y24Dge1xK39p",
  "key2": "BmoVasqJtQdRpaNy5vkyCTPjGTNdWn1Py4iuWNi6ESdjzPo1oNJsM8JFXD6vrbSeegTnJyZVgegeMqA84gR8149",
  "key3": "5u294cP5VjnEqEwGH2prMQKj7ai3aYN87eautR2JezKHjqyRi8WWPadUecoLuyMJ4k5zzvzXZjqCmF87VGArKBzi",
  "key4": "33nEABZycr88kdaYHRFW9YEc9vQ2bFSRAomRiThQZvtAHcJVX2oK5HUHrdjstLRucyqVAXNRoepFfYpySC5FdV75",
  "key5": "4X2vnbHXBrLidLDMUSgNviYqVUDKb7hnwuoE2iGxjAN3DE5VCYEs7LGEgkpxFZiPKovNRE4dhQjgjwdSXdjGK4Bg",
  "key6": "5FQdxV1TKgpGWtGs6w9G8sFLqSh6o6NHc8C8T9UbKTdviSVCnRuB1AU2FjcTNYA8yjGoKViF4jzwfSG3umedC3Ja",
  "key7": "CVyb22ZLDpnmjQqo4Ww9suC3xoJggrgXMUJ1GSCVRbuEqoadD7ii4PPZhPxi4FkCNQQTnhSEomY1Degxdtb4xcS",
  "key8": "eMEc3EsDghryxd5h3XLM2mXvu6UaGppm17hgKspyVBEPxTsQWhAqbqJ7tgifZzBMxYXzWd6q1cs3UXb4pQEBVzb",
  "key9": "5rYgdiv1F5NS9SvWcRmNkFjeV4oCCURLTxJPwv11HfdMioRULcA1PCoXCNqG8RVBzB3H22iNSWfDP2DwtCJVt8fz",
  "key10": "4d9pmfeMrxBSTeuVhctk1nzxTwztrR3rmNZ8HPLXhRaBdKHSHWS1Bf1fq6iVe3H4QqCnSQiUL2Nhis7sizYRAqSY",
  "key11": "4Ga347YesX7Dk5263gCNYmmCHtXxrH9nBZKeu7feE7noqwj6vmBs3RK4BtB8KzKyby3CKSJ88c8JcF46wKzh4TN3",
  "key12": "2E2NoU6qjjNkoGJfiJ88qF7Rch2HYui9CYQYBFDcmCAmvjWpSn8eNN4h4eMZcUMFQ5xCU4mbjGTLVsErxpMiUvev",
  "key13": "4GWVtvy1k4aisFxFKRG9GgFb8zKyGUvTepma24BfFXqoTE2gcZTZNcFqZFQLXGPJU4RARvm5jmUNxxBeu7hufXMC",
  "key14": "cJmkAiyUe3bW6rgF4XFTecRvu7wASqRenDRYzXepHJ3y2J5pZNDAYAjSDUan7wV6gZ3b88GkiC4wrAB27g6NzAN",
  "key15": "2bQrzhYVbNSPYRESias81P3MFe9KAeZFVNAExdzYSiFHNLTcnnhLTSRZ1KVV6NvF462uvyNnNVpsc5WUb2TSei9P",
  "key16": "57kv1RgUGcsYMgxKUFRyDMjc1HcFmCzorNUPWDrzZxXK92CYWvn28yDAttyLZEN72f4AgZywnLxJzXwew2EUuuC7",
  "key17": "5BCDDLFE7CfybTZ6TKpeFTEQnHDXDhCzrbnyr9ftwRD4SjZcUfv7g6bpnHQN7AmHpWuqdTMR9CD4XgB5mrLMvvnQ",
  "key18": "3TfGwGYHMCdWeWKuZGFgWstT3TFH4RE7u1GZXRFeokRJxBDoGKBoPBoXRu33CupvXiB1p3Z6ERhRDPLDKYFd29HX",
  "key19": "2rahoEbAAvKzcy7UDgu48scuk7et4o4JETNcXHqcpwq7zpKHMShEfkzp4szJp91yD5dsoP1EW3kcdFkxNaQJ15XY",
  "key20": "gSDyXDMUcjmZufFYGsH9u1hZMLFUpxy3HupHFAEHRNskT45ZAL1Wm89R8REGCLG5F12mDb9kXX6P5P5jNbXWR1s",
  "key21": "5jJUbpZx7GLfMhSUpKXssijnEgHMTQagbfixSL6PpvUDheHRpGzai2w6bxReKf8o6YnxF4NKsSh1JYxm4kwdHvXz",
  "key22": "wqGHn77aMfDJogBoJSk1C91DTrn5U5L8XKnkDLVyKZe339ZShNasq3zjQUc4S9aWjN29BX2LefuZ4Yctb5NRqrx",
  "key23": "3MjtnbcE3brpDg4TsjE62Q2XPjqCNhzfHzQ5jwfPN7sKDCPo3VatVrG7qeyQtaqfyLtSjMeGUVgSdHeq3D2JtvTJ",
  "key24": "2LHEMWDWamfwXpD34vWqf7iFQVa85KXYcHX8YNJaKa1SZWByA7yXfpVVzBgWEvaHxNUwPz1AW3Ma8vzzi1dbzuX8",
  "key25": "LDMTv36ANiU3WbEKBGGXmBsNiJ8Ssrh17X656C7EtSQXm3XiP6aoiyVgyvW3ekk36C6fSLcoeHEGhhXhvEeKzts",
  "key26": "hd8poouqi4ggSQB9dkWxb2PUqyb2pA3srsajKanqe6FbyCz4iMgX4mj3yxVsxs5Y7x3R2Rk7BDesfvYWLQ29CeV",
  "key27": "2nXPKdaba1e5uALBpsKjrztmeJq98HcNXS9P5zMhEGkL4koAVGLUzDtm68UwQfvx7RQVZ5fH5h11AtkGpbfjcfBw",
  "key28": "3K9HLV9ruZ8GSD9Q2gF4VNc2v1MEG5gqvz9PHZgn9KaQeAfyiGnUoCcARzmr47DRgdSAgBcwrFnBRG225p88RsSK",
  "key29": "HEgicTkgbo3t6kNmYXXSvE2GB7FuyfWSRyp5sUjgobEpELHRMVsGahpibLRuzxrA8kbyMxQBRSfZT6yWgvahoC5",
  "key30": "4rNEUMGGW9FK46yNyve8vTTiBfaEX5oWS1j6JDCRWc9pMa7QS4w3AgfcMWZDZSMmPCSQH7w4Dq4eTZwyg8NS8Mkt",
  "key31": "59XeiZ2vN6vAQ76BToZs1mH78tkszX4L1n1bG487v4PVE5bWzNt8nPMjoQ7e8D2gCbHyx2L8mbJGn5MmiJYrgsMu",
  "key32": "2vSHC25dBr1n8XKNUNZX4ac8ZdUB9eoSdboNBTSWGmBfVavqMe9YXXZyWZfEnASp7b1SG2vs2cgCLT1G7G7SdcsA",
  "key33": "WuRaG8bD2CSocm4Afee1dGLaTrsAgzvAVqnbxfVMcowLPe92iz341mGfns7Aiszgg9T6sWLhTaAVR5sCgeFvceA",
  "key34": "67P4YbQggqyq9yAJppMHRX7F99AbUKx2tNU8VWWf7arxDg9NgwUuHKgkb7oHqvAxMjuqRPWwXRP6cv9i33GeFF55",
  "key35": "X4VeKYpe2huhLtPt8NgQGcduPQvQrKwao32cHQvb8Dc9MgworfnQxmiiFxTYVyp7kmorhgyeSjNQm1HXgi2iq7x",
  "key36": "3b6ww3NeKPY2dgWWcYu9Wkq3CRdCM1BWKdQo4mEPQwEuAnVktBJqvoRTvpxTUT73EJ5GSVCmPua8VCPBYnLGtv6",
  "key37": "2krbR8TrZL8Q7gNhB6AYaraQDcWyvZknEV6an47e1RswwLr7YqffFpnKcKgfPnY485tjrgVZhtd5rnKQhivpyNxX",
  "key38": "TCeVyh9rbMiWJx1Ze6yM3MhbgBUdV1i6enA8KtHt9MmgDSut8cckbybQEZX3eYK6jQkPN7buqZhsvStygWE2fsK",
  "key39": "121He7ZmDngyPv2Eth9B67eq9tjSHWtwwXyAc5ny9KuxcjoaN2Tef3EpD63aiDrLf7NJwfyosznAEpNxhgkC9TQC",
  "key40": "5z2dGEvKrrGSBhhGzjutngqHt4j8k5fH55NHsYLpHSnME3oZJZhiWBgSb8cE4pADihi8jRDjepKntqSeVBnSffPm",
  "key41": "2FUSDJdtzPT3AbQYa2NQLtqPkPRmFtNB4hX4moFSXacni6UDDU81MvhuSnVNRSy6A4SvPTJ8F2Qr5hackPpCSdfm",
  "key42": "u5bCXhX8jJZabrNJY8AZNyinT63RBUyPzkn2Prcf9qdkevqVm1KhjG3onDaTJYLf42CgFCaybg7kBBpD8gGop7w",
  "key43": "4PikQHrPrvGqBMKUiTNonPNd8AMHRGviqg5YweMzfRmmHUwGgknJr2127iz3zWhuWKUeB4MtwCSjGSEacGmQhnF8",
  "key44": "3JbkZUe7CNiSkMVeSXJP5Rr2AHPr532ZxHCuNj5GBmy8uoxLLMZLSMcEMkAmZkHMiese1RVQe8fXJKNrmWaSwb5P",
  "key45": "4wrFzyYUK1ttnkJgg9veug8DR6iohsJkS3EDAVPzpEnsUMAtjUCXTUfqsNsKzPvJciW65a8h3bYtyznx9rmguERS",
  "key46": "5aW4QVW9xc8yv9T7K2P14F9wRcnbmBd9vreFUDJktDZmcqbYF1PayKvUh9peQy5oCp3MWwyu6S4uZjuzcr1ACKZ6"
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
