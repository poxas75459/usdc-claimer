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
    "5vnW5qc9Nbni3M4XFh9BLoP62NamMMF7cBuzitYmyZRTLLP7JTALJZSwZsJnHi1vWu7XEjsWH9cA1acetD6m5Qcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yrp7c5TZMXFcpSSr6cVLjZkqM4fd5Mmyh9KCJdmpa3Gw1nfhjBxW8qN2URJudSUT7akpjKpssn1f3BGk6LJ8d2w",
  "key1": "2Z9vS7AsB2mD9UEcCmnkC1XLimYTPminFpWEwLaVr4dNtBx8fDwSuxGhNDJE4zP2xwdHQ94qt5NHJ5szfHNeajua",
  "key2": "32mBW6jvHCc3ptHrhc6SkbdVt9wy2aprkeWcKknfDjdtccAN5N7ACGVGsrEY8hEuaEzcyXyZFPVzVV7iqMeBA4vu",
  "key3": "56hViLMuv44dCtF3pFN4KXq1eZZ3iCMWEX2aRQW4JpFg155h2rb3uVnJv5YWzaZktu3NdxsDbyzY2XqXPh2Z8zsX",
  "key4": "3WbfPkW5bCxzEHahsS2FnvYx6Jm9nZ3GFyegKxtJbaiXaAeAk29mtf3gq8niHFWXFkdz9vo1xcqnYHrUNiPBzjuC",
  "key5": "4DzciU4AMEqQnkR4EVJvAC5R8WtsTnDhP2nEHPyK56A2ge5gnS2L5G4PzdTSSHLgYAjFscHCPYYHagHRTMUTFeKJ",
  "key6": "4dyLvvSMGbhpETiSJt77hBUSDoGsmu5TQoGkfSjDuXp7KGcKH2gdh4sxKjrjWvHctc2KrtRYuYDue9B4f8Kj3whB",
  "key7": "3DTWakTN5aT7aRXyoyiJSgSXbK1XBP5rj1QEmRGWMG4XsxqqpnEC57exwX243EvnKhrkev5FyX6WfSbQXGbSXUZy",
  "key8": "5tGtaog7BofVu78c6XruGMxpkFYqzYQhzxJtsjH94tUcxG8GqKiP1SfzdjaSo41bMeQEPhr7agvvyzFzAz563tuC",
  "key9": "51uqHYkGGUe36vE6hVPviBvQnbtfy7sZMEcffjLxtAMbu1jPaTRC1xamMoyJioFUUntUhcXsK5SsQorihsSbdCQ5",
  "key10": "5kVEQ2TscNftRz6KjQoMSXYRFPa59yD1LdiSqAwmQ2BTyCJDfbVj3fpxVCBm37s4BgnxssJ8MLWRKyjYSEpZASma",
  "key11": "2sqLoE16RwPP2y3pLEw9ZbyC3UhFnnFFi436UZm4TV5XmnqvHeao24GAXiy6pWMD4qKTvqRN18BxLWJoUH1oE5vT",
  "key12": "4NFFLsBtp1KFMQ3t9ucDSeeDGiH9BnGuiV6zbY9aq8d9Jh5f9XMtFCcTbCAb9ec1EbAzY4fhqnXz1KmuvEf4qNeg",
  "key13": "2w96Gb9wapq8JGtnDRGx1YPRqWV8mAPrQWi7gNSmFe89bjEayFZXThuX1hm6wQECKUozUjxrdrjUMn95L3fE7bmV",
  "key14": "5iEZy7cBzBv3nVmvsWL43851sp6TcT2FYKCRHnVs2cwY3uM64iczxgCCGe57wqkzdt8jArseTbTaxpmnG8SvUW9X",
  "key15": "4Ww2s9CRxgXoYp1aAX9q7MzAfiEyU7C78N3oixPQLhoQBeErfK9bnSPTV2UakQQZaEAt5QtUCsH6aFkF9ngW99sR",
  "key16": "55bvBpVMQqjBrgKUbLNM7V931fdWeqqYAFVsYHGLZHh1V4XUym4jnLXtr6qyHMvSKMZrfftVhFmnNffsun6z3BEB",
  "key17": "2inWKoESvvj39mQ79XgHU5ZHib2kRt6emNQwJUMvWfHvyW5UnWKgAJzRXPuzyzYyt3NQ68m5Xci5Ga1Tf9DTDMku",
  "key18": "21kMQJEih83p8ApM52GR3CkU8H4aNsQKGYFP7nehjZEhUraVR8cym3QiFg1EAhZYzWe82tSTzSLJZe1VxnuCoMZr",
  "key19": "5vYBHniV59LPGPHJ1LWnU9qFrddiAiS8fUJJ1SoNbLgwvVNP1MYhYdFZzYrnuSjMxVp6ebHej68aZmkj8SuJcyjx",
  "key20": "64hpZfaecqR3hWDTsYTULTmSs9PyZqwNfhtaY388avt1y3SvdNfzx6SbYA1NzkxTQQsWYhBkQ4zXbBDjorSGwcr3",
  "key21": "24rX6K5LmXHfkCeNKbyTq3SSGJA7jGSCnu4mXiyp7dD5jY6wjhu38i8GKA7EpfboChcKJw1ALBVkhQnjB7ayaZKe",
  "key22": "4NSTfp6nikoefr1vTHWYeQyaZKSv98KAsfrU8hXaMR3mELd5N7PeCfyoPtzyjnnb3E5mHpf3vDusreewGSsseZmo",
  "key23": "k5iwxZZt2xoeMrBLtF3VNcVtSst65gK5cLnXmyShKo5eeRE6MoHdbvgAjnq7dGg9bWPyS9iTH2xT5fBUuFJkfGP",
  "key24": "4gtzPAieZwY4f13jVy6fYFrvA7vkvLnbgEB9T2bXrYntNJLMcMbGVkkVALATDwowquv3ZnreYc3B5JjTGYF4pYQA",
  "key25": "4wbrpF3wDLtY7f72MCn9MNjh288SarKJM6MnrQCsPdU63LYeNBeUFkw1Cyj7GPFkidFWK2VnRRxGMa4guNdiNmJD",
  "key26": "eBUNU476d6xJScjLjFCRPb1n4XXX8Kge95QKRQWpCNT4vFcD3dMMEA34828f8moY63VzhERF55jPP2T24GYm2ci",
  "key27": "2ttfVWwmYk4qKjAikC6zHARtnwYKgxkSyqBP2pPXA4d92ueYKh5XqwsWEh17wJXBWGC9mSEvXt7tJSQ76jLfTvtd",
  "key28": "UEzYZpdcHrRndXqvh4iRxpnR5dWw2zDRWGFJEL2Y3X2zCpdmB4jn2zoRQs1zVzx8TLbTjkQ4EUgoPHsMwYtecdj",
  "key29": "WziE2ByAeGKkTH6xJDnXuGYGdrQ3Bu6VHXrDQx3FveQAfqgYJFyXxvvKjeGSfVuTYnbTXCmqY88Q9pBPUFRG6rf",
  "key30": "4wyTw8nrqSHdhzBJfCyyYN4oWYXiPJshFEW1xGXzurh1gohdFWPfxXhzAhzoy9ihDC41G8jbo56vGAKrDRu2CdR7",
  "key31": "X8S2CeYCutv3dDDX2yAXkAjUgbRqFRYAogzAS2w9uga5wWrYiWNsqtT6dDtoWV4nJAJecgU99rwHYz8Xu3jiupK",
  "key32": "umMdJoiwnNuuDGSNixWjQmNPJAaWXR9LC4fxy7trTZiTBRgKnprGf9frzvP16aUnu9irnMKEPbcrsPGJfcaoZjq",
  "key33": "3pLkvRis7KojCE75YEKazwERUwFMARhayjuvKx3Y1bPAEbwzgdq8sWLQtYCUs6DunpCtMnjsR6VMANi5pM8Y6rhu"
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
