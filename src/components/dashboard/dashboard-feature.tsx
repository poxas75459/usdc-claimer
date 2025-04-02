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
    "3chrd4zmVL4p5RU5Nrcc3LvWHRbXRPonanQeGqj2Ft7ZdLdVqUif5hVwZ3cB1upprD2UpdBgYJt6wKVeV3AkuCJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7Yfm7kJrsY3VnXZ5tL7NBH1dyQpmpeDFgUznW9n5dKw4PKQTLvwgb6nEg3Lpkw3jn7T9Ti2Xo9ACXVZsH2fzs5",
  "key1": "8fFox4fTFDPCwYhpKRoWvFPsepDowyVUhLym4WxrTrFRuaPVkb6JWoX7hAPue3axMXQxc5MRbZN7wKwPQhediux",
  "key2": "3Szt6Eyw2LCqnskACU8wQhtUsJu6SZk2UcBqijswnMjQLeDRV1Y65ahRG8X97AcEuGbTF9aVt9WKPrxm2rwEEmfe",
  "key3": "2QYnnsfQpJpw5neyj79mNTDSx3oBXwPYCPmGFncrvExyBGQynJgCyoWQjp4kGs78qXobiYjjwuGZuM1GaTy36SRk",
  "key4": "577XgMKJPrgXVs18EmY96wEyQNzQBL2SBBkTf7DSQUtYkUA2D3hM1g2xNimjA4icARcborFddsFCtCe99XoNoaK9",
  "key5": "CU78waLFu8ZSimvTgjPW4AxUZhDYwmV3Rx2FGjEDz1r3ZYzvNEoWzu3ZcgGi1H7WHBvU3pMPaXVMNKf2T3HjMpw",
  "key6": "5coenVr4bwGbRuNsE2fxobuj5WWBnxTGVVe3FAFQmFrJYm3XYXmzjQQ679bm9Doex39bYnBcdxUefqo9FTogVkNj",
  "key7": "mbUnLrFCbbF17F23ejWJQGeFfCsoe5P8aZuboB3yrvwzFq3jgUACL91b2X9ivMpWzosAe6yYaDsHKAMYY5XU61p",
  "key8": "aQc3q4dWEtNNngMAvQ1Mq3MV5VsMZGCbzxVSfrWhFbbLrkTYZzr73RNfVxTZXAVN7FYMgCLFKyD4mSkRqxQB9aU",
  "key9": "2Mft84LrDcgjQkDLjpWnfeEqEqbT2kLw9k6yYEErh58EEPxnpKH8ktDNRpxdyvFcRjfriiyHrf6cVEqhik2yFzDj",
  "key10": "tbVzdPPSKiBn2upkshvN3Rvxbr989qzEGcutg45kfkgWV58L3MHtGTpRw9ZAB8B9hwjVZYtXbryDFNCvmURCgod",
  "key11": "4jhzPd9q2GGmvQBSbsrwxye9mCCzvtRGig4dvLKdVstrFw5BDqjfMcfYaNT5f4APxmq6Bt2XoQW9v8ABJubCFnLg",
  "key12": "4AwvzBxY8zRKtKUzTaPK6dYz8XR7TexGaqNgYqv2u3RgRq4pK2v8oZehsDaPDPviMsueqmMyXZDDUapWFC97jZSP",
  "key13": "vTdkx3fC1tF7joLbnmui9munRL9Sc7awMAqFqUm91ykGh3jBnpUskUj7zceuDUU2soYu79oq1GXHsPSCsZAkFC6",
  "key14": "22DzzW1nn8tYdUnJ3DxvCbbYyvC9B8yLY9Jm1K91BYRS1iH5YLZvBwG4ZiM1fq2qNCiBPhZSQRy7W1inBhagxaoz",
  "key15": "2ZkLWPys8uSsakUcFCxZSHna6RSTb52aV1kV8HYD7guoYbFJZAf9TNA9KAP6Li59nohmCn8VY8NGUsoihs2XpUQX",
  "key16": "2itszG8EM7qYaAo656eSAg881rz9ab3uZv997Gh4i2JjnRbw3TyQZM8EU3iMnhe4er2BP8UQWx2UsZ5X5mVUs422",
  "key17": "5xkEANg8xWgrZa538a8dvNTqnj2bJwKUeqnsNrj4PNTYSJGG2U7VzyQeSRFh46xYwxrBm17QEH8h9iJJfuEiNFB2",
  "key18": "5trZff7q3uLT1aKkCevuEfe52AvBKAvRkgqCXeCPHW2RqmeLY7jVabKbgAFzPo3XbjLFmCHakTWvqNF5SrLKKwbN",
  "key19": "2CSqtvybLtf2njY5YzRAsJX1GuERSkErDHxmcNXV7oLivv52guRWxmHZrAYqudR7gzvorqTR8aPuKHgNycbrYszG",
  "key20": "3ZeutTvhw7VBaFzHWu2WM3J4km7MBSujpFhZiSmyWssdfzPCsf4TADos3FVdYP8kFKV4QF29kRhnt8heg8xVefXP",
  "key21": "4QRDdfPrHKxQx4XMKAr23oaP8BYSaYZtjY5XaMV3WYtu5eXQMJ2AL71hUuSPcp9wVK9iR1MfDnMGBWJJYV5o8KYt",
  "key22": "3jhGkXLMUKu9Fad32st8Ab4sQu6kL8ZUJUFtsdfAAmUn4nnNGJbRjp8Gp1pvywoxeHJbXrYmg1S9WDymxfj6WmyM",
  "key23": "4WPv1s89iyYfenp7i69XGzkF8HqD9PWwjnYhRgjWzecyKJ8Q6SNDTxm771pePU2jHNNjid2pBEdCoe9Vb8sJvnN6",
  "key24": "3kuhg8hy5tT6w7WZqHHdZkTLuy3iPe7kTqH5TGeSR1CSfTNLqiZ75EQnToS9cqFui7yeBFYoizSChRqpZ9YUrY9y",
  "key25": "3W4DqrcMapwNgbnC8kcYDH19y9jYzzQRZzxWViLixVrYs4XUpcs8p8M1P1bvmUzbNKRAAyFXk4pAQ8n5sYkcxT1K",
  "key26": "42pvFB5qEcbmtnh1W5QQJnG93fC8VgwPq8XmiMJzoW91Hn4cTctrKD1sC1gQn7yRadE5TFqKtM6tTso9WxkXcvTk",
  "key27": "5X8HJrYqai35DUzX4kyi5i3k7rjtVUAPVs2xL8j5PENAQAar9SC7JYu1VwGRK9qfi7RAkBNPXPVph4grcRYmWfj9",
  "key28": "rvvQZhLri5pNuvhF7M8aJPGiKsMdp8XsDHjfmjDmL1M9ca69Upv6zqzeXuxbw1NA41Diez2SgAv4BFesMnUjerR",
  "key29": "6GVbDJ6bFjz18LstaPmS7kgYGnhv31uwYDLuWeu3hdcD24Ao8WUAH5zXj2hskyUGPePTqAmyHfVZpkUobh6k2JR",
  "key30": "UBpkAk1dJwQDYTqu6BC8m69stJJp9oofQ9z2sjoVCh6u7WcakaasyykcAaTt34V1ZjeU4HWsBr3cKFnFpNteDBS",
  "key31": "rbSRB8u1rQNrW7WGyUE5TCFmsKHKmqbLoSgWeBf1hTzMQNeNWmnBhEsGqFMK2BAfXBUfxpyJexV3hYXbdjDukoS",
  "key32": "3AXRxZuvRbw842niwfRSLBL77mcWff1LLCxQSSHr3CxHxVUhuEQ26yq4fh33WCYYiuccrYaHZyjVnkmZPPfvsLyH",
  "key33": "3xG7gv6qdUSVnpABsH1deLi3tc5X2X9fHqGxyPtT5eFy9WjyR6GT4BLw4yaVUVkFNgu8GNEtHi8WGU1Mm8jozN2Z",
  "key34": "5WwvxHTApoX1ATcHQGwMr2Y6WF3ouF57z5QypBRwy5ehyBj6nDJCphWK9ApnE3HHJ9KXugLJphY16X5RGqTd9XsU",
  "key35": "5UQupJmiposSSJz1GGrz9k6Lm6FBFc5NmL78nX8TFpGJYQgmYuUY3ih7fwhxECunj96F6B9MurX1XB3HcZjBuT2K",
  "key36": "2pZ1TxmqivuZ3ayAatjgeMM4UxX5wR3PLjuHPWarbWWtTiEcfxfKhkc819U66Zcn4NdrtWHPPy41S196F6SjwUG3",
  "key37": "2yFCpKTmaTGJMGuiEc1shz44EA11zspwh5pEMVJrcx6cP16NrMYEtGrYtH96KTG1opFgKoLEC9bgUDwBVc9KjqqV",
  "key38": "3AuKnvt3r9Q4Nee3E6f4wJfcp7vDPaBHPdNnJ1ZeJBHNuHYKe2R3L4UqHYuRnsNGVDmdSTMsXfqsB6mzvsqB39is",
  "key39": "5ppJMWVGhHuWRwhrZaaXDUwVrXi2pVqBkiDHw8LhfvSfdvirTSiTzujGiDTwvSAAgZBwZM8TUwVEz4ayr6VLQuZJ",
  "key40": "SNRVpq5KV6E2q4CuLKVXkCEXw4PyNNuJ4mRbrMwg3P7kZCEr84azp7fBjcc1jNh6EuC5VxBFB7ShZchinPVNeen",
  "key41": "MP5JTUExoG9JjXabGQJffetGVL2TA2ftnT1NCLRZVshj8RV1yM2F7WdmNipQRpUTpoSih5U6wXSXUcsQCFBKf1y",
  "key42": "3GVqhWvnBQnb1hqeqWZo9Cdr1LjnfCf9zgZsUGk6gqubS76dxKZcWp1VEZGf6kzvdMy3W3Lxi5WENvXYrNEpo26u",
  "key43": "47AyhRd1hx8PEMHUDkNibNfRStg91ThH3KnZpGyEtfA1KFaPappUZgzy4mgfBfBttYTcVVQaR7pW6kaoq51j1P79",
  "key44": "5VY8cpYMd7Tpqf3tq2yEM68X1MPgwnwoAPSynxY8sUGcU1vVNrgxahyKDfhmxgraTrEKp5gC7vDZiVGgair6SCSb",
  "key45": "4REhU96tBmLmLkQrM4L3J5XKShNM8ivzVpQhwSqmq86K3bA1MnYTygud2i5NQc9mnFtB6B5HEnUP581frw7ep1cY",
  "key46": "4HtWmScN71AcYZm9RomMGuCxyn6Aj5fdV3orTfE5YLSYttfByvhJd9Q4phMNASpcHPf9j6vfC9R6wXxmzeN1jhCD",
  "key47": "5tCbEs1366LoNKoDyqbLJfxLHqCXJFpBLhyJkMQnKUPNkuTBvFQSLmoY7A1xTeP7CE4sBpUDvUHbnPyiw6K2c6Ex",
  "key48": "4DCkrm7FsY1zaNKjXwM9s5jXxDaZU2byZrj8jn8goJDox6dtagHHc8S7NHmN4er1ruH2XK2HAWo2PW7jz4fGUn5L"
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
