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
    "J8rf9UDQrZemDbUr5UpuCtLzWjPrGFGSSMyLWLuUwZaHjjXRQvv3jymtDWRhcj4mkntAKfUkFcJUTTR5TPdxuNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQPgmUqGGGtQP6WJeUUYPho8L9xTRzPKPQeCBJwNEM1VKAG6n2PJkrFZEvQQVvbPsk9n1Jc68a1DfwQ3i8ZM8Rd",
  "key1": "5hDppC12tv6BEDe93AFLZdff7DjLKZxsWYidf7omM13CzbqwByLAuTXcz2kp6F7nB1ucfHSmiZxU9cuFkjJMem1Q",
  "key2": "3ot3iX2dNrcjx53aV9NZ7tURirczWWJzcPqsTgjKxmnsuVs22i12uKV8L8qAJetxKJ1BjCFRuk8eotQfApWVE7tg",
  "key3": "3JYZB2CvFzZVrtNAMto6TsQ94VfZTABtPFkxNbCwUdDzGt89J8ichWKQz2gYm492fqU6y36iGxeos3Ma4GYr55Vn",
  "key4": "4GH6xF2AkcszVfLVWosGqayNghBcmUixcskJppRsd1WdRqwYeq684FETU1x7C5g81qNbRxfjLRBPiPfk5nA33n8w",
  "key5": "5a4cPj6ApupUoZk4ghMoECCq6HUahjzTmX31vNp4U47PcCrocb7wdurXrkCH8BgnB91UtngJomSmYCz6mCmedXzr",
  "key6": "aT4DHLaPfhmzxg9ygMqoXiFDnfoDSCasA24Gr7nGaJXyMM4mPDFVrGsbKwqaJNhuZCmmswXSmKtWTJ9UJYw8oEf",
  "key7": "ptHJbhkyRL1wPhjta1JR4CFjfQVRxmHFcaF1A1Xv9oN56EjxaF7DaT19yiHBFStLg42cZYbzTQmhqNMdGLp5398",
  "key8": "5WmfZGLSkRjNaa3Df5TWZqADgjAXFh6gGnfZLfjYZdP5cCProaMYV3qZiyu5D9fagQQfZszf4qbfjFG6wZh6F6u2",
  "key9": "f7DWJSqwZMDjSvPjnJJeQYFU849ktFrhucUeEyY6SWBWEtxzxrunhtzqVhXAQfhqsQ739HLsBkhJeA6QqGT37ZZ",
  "key10": "xznM2B9HXc84xxXzm9XyTHzXZsKJEPxpguKo4ZTgKPM5H9jGhnDFwKkc2uBHz5Cnzhv8zkTL76Cajrpex9Zzk71",
  "key11": "4h8bAkaN6otortTPnqRTGhLGoZ1vaTfDtYy3bvVgyw1JdwKe3UZEg5p4Ef4HzEaWSmnnvnB1k2gzvKHZJpS5STiC",
  "key12": "4G8drbbtfdf85KDzawnRGjejeHekwoN59kFn5fxomkTsjZk4VGw2Rn1Czjd5HbP12bGnVRvn6NkQiHGqGCsQhrXM",
  "key13": "66cso5FiDKe6PK2EScqtjR8fmqT4gJb7TVdYcrbRx8uyrrUcdijjojPbB5AuDrEEpNtY7ADjcbPHeYVSxR9SkhaC",
  "key14": "2A2jMutCUJae4H1QHLUHqZSBD3UVTSuvcQAbtpARNQbay24avRNAMXAiP6d7LFxHCkS5qZ5ZB3FcJoGzagKjcrfj",
  "key15": "23Js9YMhjdwG9yJBBmb3hdgEvtNmGACTeFLb9TToH8sfpqTAr4PViDMQgbuZQt1dRKbzM6QnX4czzJWAcPKcKasf",
  "key16": "3pN2KH4gLGRzuR72LfBhQSErzpac4ViiDg258EpjoSG5GySZt7qBtRH34ArGuF7ZHQw2AHUP8WZgFWNBegPed5bP",
  "key17": "4QDczPqSTeK2UN2MqeZn6pN47MkU37iAiZboVpoiwhiitXuhRTfNrFNoURXE5zNkA1MzXf5mhSo2gaGchV8bv7HX",
  "key18": "BxMCpYneLJ9db4VRVpB8pgMfCnR2xaNaVNh31owc6VXLBpcFQ2xPdoTdLnPTc7aNh16AuFcHqy5fea5YuZovDos",
  "key19": "3AhHhoqfKoDjTDZ54C2M3sMC2Ms9JjMi5FPrRT5tK8pV3gPhfKxKnRPqnZYwvGr6vhZATa5EY6C8W7J6iBJkqtjj",
  "key20": "5mpjGym4xmWijqs6Nm4BYmFx4ViXsxUjWmVpJjMpLmAFRPeAeewMNoQ9DcXcWYAWNAY8Yk74JQMU7tPkDbpWfzXN",
  "key21": "4htdiuYaTN9xCBonzirFTNHr6eGDusRzyc9DBxCAoeyZ7P6AGUPjankJB6U3Zn8ZdFWYte8StizrhUCQ3xPZfwXi",
  "key22": "4ZQU6j61b9p2qynnCfv9YQK5kxN1muUsHZzyuyz1a3iBQ3MUic98enu79KrJddcSqW7SQjx9MJqkiuLvmHM7kfxw",
  "key23": "5SdwqnUdzVnN9Gws3HY5CAhzy9QdfdKtnwQpm8NsVuJUU4xbzAhhdXj84vd56V6dK5pEvh8Sz4G2MqcmBJktqi56",
  "key24": "4m6UCKa8JQpdiGDU4jqir6h86dD7Wybc7tMs6nDfytAtMR8GecKAdkAZMpVmuCvpTAsUHa4SSjpNy486vtKHFw9g",
  "key25": "hvANu2zC6WrHt1bkap8nomxnJLTJcD33YeGb7mnET8BvQgCMNgHATje7RSx9M8LQWMhawqcSZAtheYN5U3TzVGV",
  "key26": "45hSgCALhwFcJti5eKYWa9iN7xW4DoZ1VcYz52Ga9CTj5M5L3Dn1muwq7YrPm4C9zue8XRBADpiR5NWp7WHeourk",
  "key27": "H7z5cLETzdNNkcEmJxwZdFya8CLZD9y9GaxCqX1XCT5tVhicds6oDrkaXwb23VtpCYAxYwKVcmrcFmQrkB1h8Wi",
  "key28": "4G2VVavWStGLkD8i9ZvQGCUyBgxeL38mLwNan8t96PpyVCNksBu85aA1H6X2hCH7igxVpAMdGfgwSXfFGPvurgVP",
  "key29": "59UzsV98Cy1DAViJZqW4Gjh6PgFsXYFnF7ak4ZVhyEfoysH7qfdFTqv7heqrgBYzp6ktSREPFyRvoVYodTUiDQGj",
  "key30": "95qym7H69rgPQWXkqz5CxUQkbo7btCBhwjeDBWcdT191CV4AMyPDKk33Dw7WbeWM1nF68UxZ9fDm9Nm1YypEobD",
  "key31": "3xhazoY8F31PaQo7mRRyiySZDu4R7vm2mP96ZFaJrHd8vtTQRN6S4GxqiK1KKKSBtT5HS2W33NBxY5YjCsGJ728U",
  "key32": "33SNV9CbZmEB8D3DdqJR8iVjMMH3pL2s3QhH5ia2r8Ho5X9THpf3tFmUgGjfvjmc8MpW8aw4af39vb62iVRcTyuW",
  "key33": "3GiR5Uf8iWSDHgq68awMMjFoFkeJ1Z7WDrZdguLeC8JyXuERSRnFLbDKk4ywBis5F7qEccaBn1zovQTkDmoLShAf",
  "key34": "5ADzyHqji444Xn9rpY8j2uo2rVTM6uo2AAYZ4zfS5H1QSZfmtATj5RZ58MeWa4iJ3aHxV6mVSGx47BGvcrqHm9nN",
  "key35": "3tsHYxV3eUWR1BrzdyDN2oanQmbx7eJYfgje3kG2nbrawE8dpwysWdbrcWJUwvmaPewGvdMWWUhjESujW5xrXWwH",
  "key36": "2FVHQqWs5CGQM4RGpNRQqq181EYND232TX3ExPfe7pvVGZnJDjy1S47yfSY7a5Vkh94uE8UaL8LKYenZS7PLKwK5",
  "key37": "2Pgydu1hkRdWXNpQmn9GTtWKuJfoiTx2z79MA2MtYHX6WEkV2Pp3ugzvxNM4JqyZYa2au4cBz96zNFBnBfqngQaL",
  "key38": "4Sy2TJCqgYJ9hFdSjDyejWdDLECDt5ySrqeqSvQvvDdpPtgPDbEpkCxD53gDkCwBLnigumvk1ASRmfdSn2pN6mov",
  "key39": "zeD26yLL6UFYcBqGF21pP5PRn3vynchxbEWC7jYXVyNP7TBuETGXbeDeqxhRYjPbc8LSZEkSmFdMeifagm4uC1j",
  "key40": "5AqTfBYemm27FeqJScb5zAjma2iZ1GmfGfbfzhr1PEVPVmEXkgCqRQcytMnABeb58QSFCbFFcx3oR2eomitfEpgU",
  "key41": "4vuCgA4LGgh5YWtxu8VH3xvJBTGRFCAnRitJdGj9b6aatzBupDxh8TA62wYrDGAffsi49848Phi5ckby55VzNu5",
  "key42": "34DcMLHzrymrRFJXfordwcb5fhMAsaNWkcC6JXuED2cGH2ahzpiXhxt14sh7M3J6A7bHocxU1LAjZJ2fDjnwkB94",
  "key43": "5SbuHzW14q2g9HKt5ZrHxQnrKQF1rrRHF1z5gaxh1waZuFZLNjqbdbYD3YhKLCw1svEZyQvsHLnVEKCQpeDjjpKL",
  "key44": "2MAFfkMGodPPDjdWPRk7QBifBCk6mbMcCnz6TVzJhFoyrRP16wr1vjjH5b3ZhArUPv7uprah2pE1PyyyDuUaeWDN",
  "key45": "5ZdsotY8JUqR3EiQiK4PTY6usGKGJPFVN84VnTTzdmEXwYAQZF1UddP2dAvb4YzxuCoG9QNrDgnmoWNZaQ7TT56n",
  "key46": "36iHz2NnyYMSnzw1U9h3Kc8Sm1NxGLofetMcRboT1xFo331ohysYpkLwgamB9QHqg5trJR87iAtxPXDwgMf8BgKY",
  "key47": "4Tn6sXmyYE33KnGtiPP15NKHJeDkkoc9xvKR9WDDE9M8eHwpb1moLJZCfhabPQC6DYrnsSMdvEyD1WBy8jTv6rNo",
  "key48": "2Co93jQJTPAg6eZ1RwRL3z8VCj813awhEV3ybLuEWUkuHmdvDVMWPH5VhngTxQLxNcdysJBvH4EHeQdVrXGH5FDa"
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
