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
    "4gBYoP91emraPBvNnzTShBgSSniiYeatDSHtxVdGKJfu3RJ9FBWoYuTh9Y6kZPoTtyVsZVDWK5Q7VmmiGDjKvxov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nta7NtQ5n6c2AdhNyhWWLGMgJ5oP8BWh4m5aZoDvgeNtBbG5nJdGzoB41gN91uUEGQT6H33VsMFDbp44kTpEvvj",
  "key1": "2CANFC9a6jbbEFKMU3MQzBJCcuLmsCfeRe5JseiaNNA23Hw9zZWSUxCB2xjJBvDVH5rPtNFXZhZBnFC98ns8umZU",
  "key2": "3m9PJEVhQyEDJKfTAwbYQpjQ1CvukbGrQVTovdRPgG17WdePNnMjFCDvz5ykpf964gD1hqHnmEv5CddrFkDbmfpj",
  "key3": "3jgkuB46ity2cjBc772ePsRY1AHVkGVE9fqyJfwFmz8dKQFviHX9gwZkGJ1qFr2TF7KBobnoMMH3FHEaKPweB7SP",
  "key4": "2kbqqcj5S9DaKoTpBzmoMWhwRETzemkp2St6Z91uTxcBMkyRoR8ZHb1e4dWAoHuevXpTLxUMHKVY79KK81bJE8QM",
  "key5": "26vRhSC7ESqedxzqaLrrXsMdnPZMm6MAaKrV2fkdN8VBNjaprGCPs68VY6KihbYfmJX4xWg5wDeKaPNJ9mtxiPyh",
  "key6": "RvHyQUTF3uYpo8Bc64UPgqhgT7YvYhGJ7WCgomgEER1mdhuF7CqgD3MEZV8WAyLSQk758vhvg5jJA77iiucK5PL",
  "key7": "37nZcwiVSk4yVnZYmrggnk2EZGfAZtoQEc4NvJQ7yHgB6GBEyvCG3adJp58wG4CrKMoVibiSRV3twX2xfpYD3Yv3",
  "key8": "3WRmRMkPDTvZaJmv8Zn9otfmbegUBYFxxzCHpfFREqBjJ22xnJkVo7ydJSoH2fNTdhhkV4AxRfuiJaqHZfWmBij3",
  "key9": "26nAx2VvrCYXtTsDJae8T8jD4ZPmgxjPTM65LuDmCtWuFvw5KDKCtZhCKXnggcL7BijCueguNmzZAEMLCmCVJJ4N",
  "key10": "3En1eCtoAEQ43bG7WBrj4rugBvcHYHfrDvEuieKmYLkwu2tV3LveizMLt5G1XnADbLSSkJscWetrgmUxEh17jMkf",
  "key11": "EGJH1ciRF91si3xiMm81QiNFvP2rupxgBEzRMBDWRY5HQfzFQ4c8DzNr1UXeDLZWQZxTQAeqq1uopPsjUV8GpZ8",
  "key12": "5NQKpbvhqQXNTZCTmoes9BygjtQtJVMPBSL6tUPxCxW3A3b8p1x23xg2aoYQmU2izdoHUPwKhwM4osBhNwRwAEE4",
  "key13": "4iT9YRaRMBwibqhZu9U9SfFagxrqjSruBHJAkVVnU4yPiaeUEJkXmygZsNt8rSUSa5RLt9XR4Z2MM3f5gZ8gmtKb",
  "key14": "2HJXaZdmuyw759UsXs5ANyjGKDVVd8y8DfGuh78UWewk27niENw1psu1C7AX45wfNgL9siU8SppKnQDyobu14LuD",
  "key15": "253gE3nsExWLS4LNaii1RcK4PVTn5kNphAWQsY3dEQtiQ6vASXp8QSfKD7GXSsQJo8kAavKEhAXZVKWvk5U8owFE",
  "key16": "353oii5airfHJ1eMBNLrVg2g1aqLG33eBjbx8iRf2TKhKZi1tndaCce8XSSMHU9CKwzttGfLXfxtWC2zqgLJy8Vn",
  "key17": "61hYou27WkYHmgwEJZzUpgmz6xADuxjfV35vt7fs55ygJZU6ibVDLRWzWgiR2rA8DX6ELvqnuMdXVUJ5TbkZBTe6",
  "key18": "3JwPfqCkbn4hs6dFXWZrJwLca577eLGd7cJgfqxf58D7YmyAAWRQKuatgN8yaymDfK3hfKTjzg4UNNeMC7fNXmrQ",
  "key19": "my8jNwH1WWB5pzZxcmVjy8DhQTrwPDUSTd2chaNZ9Nfmxt16xdmoYTspAG9GamPowSqQApbVAAQRbP32k8n3Zsv",
  "key20": "2Z1e1N5jKNc5vymsJe5jepafvVuK9TUXtGBiLUaMAgDahxhn7FhqUk39casWEBM6YCzooiF7oeQkethUtm7xVqh3",
  "key21": "bk7ASiRg9zn3ANaJVKgPf5AS6sPBoGww4YeTrxVbyrm1SSLoSXZkikvQFFWhSDJxaD23NKNy5AyrE6D45fYatnb",
  "key22": "5TwSJp5qsExZMaMHGbUzVBrpsDHrY11nqKb33N36oC9WfjNZqhFwmUhj5BqgqZ582DCoxycLBqSbUXYMtfBkJvX2",
  "key23": "5K5RttyUPnormrwyqx2xSZxB43tQWwyrDpgnMf1MzpA41jFg8YBCrzTq6xm322Yn9gL2zFmRi2rq9Mw7At6A2djk",
  "key24": "61pxQuMBbKbhBSM6igoZMhKvu13JKXwLvJLfwqbYpm6DXvkFNybecwgAwxxrKmvnFwaRPCu4SyY62LSaH451Rcty",
  "key25": "4oUNJsNN9Rhmcu1R1166joKuf9rQHLWgYGsD2jKBuGXBCbwmR1eMVJrQyqi5VmnFJNCbvgC5vRjKjd5NH4XHF9VX",
  "key26": "3Qw472vQ3CFYjFVw9ptrx11gFYf8X5te8LnXbYRHjXbnQBVrpkPeCusS4UAXJ13n59ji6c5FGqU56TKBz9XVuEHW",
  "key27": "45aY3iypU2B2rRzNqxMmcrqoXV8VGu9PNBDmC7W8bdvs3UcLbWx52uvynBywFdAWF1ANFTQ6J8ZXnKrSLtTKGMrG",
  "key28": "62LnC85rHHcFSMTzGRa6T731Jw3ynn9Y55FssNwxi3vyQaDovXaM6nkr6gEFgkzaU28bTSYMciY2EmBiA3ZKo8LW",
  "key29": "38kcK5qDUVER1Zs966Jzyg8KP37GCoeAG4RiJBCocSDbVhFmW6gcLtcToUyuNNfu4rojneRvrpMpdx2kHAh9s7JL",
  "key30": "5iMXzFDWfReY2Bi9aHM52cS7kukjYtQ4YwwWMaw2TZXKGTenRbuziwF4fFK3Y4Jy2nWuL2SzSyTEVNxsTcmLB3H6",
  "key31": "5XAygeGsxfaKNCAbv3Cz1sFDD718aNtpJb76G9N71f6c1LffCTwGNBFgdmnomAZPduuYxbLe9UGz7mb1Rj9wDa2x",
  "key32": "5Cck7d3dnLDJ8V3Ug67HbernPiANnXuKq8xTSZGrGT2eG21y398e3pjdL3K8NRCtRoNFPf3xpNnJDx1mFFFcbMNP",
  "key33": "4AWXgago2iXeZotQaeSVevW4rcawEh18w59kb5h6a16EFDsPKWvQstLzvbQcaQ8QyS1oyr682zftzsZ9mLwgunN2",
  "key34": "2byVZUXhDfAETLAtdWx66opkwuXT7dyBKuBoLwjWdE5T3GV6rhrAy4g9j31tNF8tNz143VhsoDXLkir4t3iKYPVm",
  "key35": "5oLyEUgp6BrtK6EWASNNfnJe7LmX4QFVnpSVtKko8Yf9ui3SWiTB3GX1bVijUBe1EejgsryCpi2jG27RhP6Ax76e",
  "key36": "3TV6C56FfPCMN4Un3DS8HN4tcMCDyMYmcguRmxMYD552i195j1Z49bjYiCJCHCvTCzcuSS4dBg2CwkDGXgW5ur2v",
  "key37": "4bAqYUhG8T3tduzGhkyvFpvmpfrmb2cWtiWx1hXzNTDs4ZidDhocA7S1mFisTz3ucBHXekjYVuusVYqwQgq6eAqi",
  "key38": "KuY17HkckHGAWE5HVoXN5wVMDtGT9zqQCR4DLvsWDLh2nM7cv4zXcTWGsgiZ6qTw84C9kjKbXw1wNmQBKgHEawx",
  "key39": "c4yZb2jTwLryYCnyC3wZdUR6E1sd6SCbNQ2JHeL5nj5QYGBuYip7AxdpvnRePE2gvDMdZ3JyceRJxAMwTd6VZhY",
  "key40": "3HAy7BLMTKMuyJ9hZ5s6TUWPRo52e3AvJJ31B7B6rekyrA27DuwZV1rna4agudCzei9YBSR45CSY6fmC7h6dLfzD",
  "key41": "5jDZXDoo6phjg5fH4ZTCBbgbRgzwLLfVaQaZBF7cS1zoL8kcRPxGr6b3WLMjiSn1Af31hchzfTxiDBXvRz7gbxbn",
  "key42": "KS5pej4EZvQTHFR81JxeHL4vFmqdCyhdJTvDorP7sFrUBmtXSxN2aGvVxTAbfsK484PUDKM9Q2Vpy9UBjiDrhnd",
  "key43": "4tw8A6WJ2QWDe84k2A5FCHrLyZoW5MEo2FvHNcRxB9HVVXSixbbAkhHUepCCKJ6tS5sptfo1LrQvijvwrn3nFrFT",
  "key44": "43KCFxbk7ck9paZB45xjRAkrMKwCoWSmv3yiAnfCCgxEU2U3C9DaXEpruZ2pbonM5gZFtRZxoR6eDUY7R7eF8MHC",
  "key45": "2FrPY8XxPzucwh98gi4uNdHemNgRMECyYcXiUcLXHGa1PCXcQ9ETAucnJJ5XU2P1km5LTZSdzs7ua2CvhcqAyHbj"
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
