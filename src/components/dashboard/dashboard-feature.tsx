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
    "126TCjVtNfByug379dVBDdrDA5dhVUskFBQUeHi1KKzTdWHi8gYcTx2euSs9qogCJAF9wunJqnAKqnenYnsRdqjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57maSZEtitf61ECDEkvQmQoc3bExuVicRN1mAqWmGPxTKtLXQ7QwgJdRFJbyMo9bB93v51McSGhgPyADSXKj6vmm",
  "key1": "3savE9MpU2Bw6dcQyGHmTawU4qRqibMQ96ZNLBqTh4iaxjNSnAXxEVqyFmtF4ogv6BMxAGFCw8QmahgttgJksg54",
  "key2": "2jKpB4SZYoJqnsnVKTBWi9rTmphWA6vkHVo6f1hPesvkxzMTAyw7NqfLDs6MTF3tFSTu51qfPzM2JKw5oVr9Qop9",
  "key3": "3TFaxNTSDuSv9HKX1rXNvyAWzzumBkjQLPa2zjhdvPNPYFh9PdTsrvRj6KDFbs6EbtS6um2m4HSe1u98uNKo96hf",
  "key4": "5ziaMy9Ed4TFVhZKYH49asEMGF8sLjLTVnnjXFHRxRwif75LdbBFNoiV2EUAButUzyY5iA8n7mbzF7hStDn4xGC2",
  "key5": "5qVeKnNqWEzNNA7HqffcRePB6YA4x3f663a9c4tWGWUDdGqLrfzzLU7kvwPuDRCduw9NnfBTpStjftgV5ffhVZJE",
  "key6": "pTc9enBznKGkXxbSAXdrfcpKwXwAyJ5jUd1h7BMyDjZBz56jejVijJ3bvJjmv9jhooY7WdxvbrmFgFVc3UU3s3Q",
  "key7": "4UXGjji8jABwVhw1ppu7nWLAEXJMvWSAXd6S8VrqXCoavXE1Jh133bEqtum9xgMbusYVSy9uvYbpwawv1FaiJFef",
  "key8": "5zm8Sn8jRTZ8BXFRJunBgFbkEbyxSEW6KvuLyfJ8XEKTWamejaRkDGSYBNfvxryz3i9otnnPFigeMH8Do515bAzf",
  "key9": "4BZTbZ3Lb8nbcdH3JzKrv8nXXAcmcU7Mz8oKCRmYgGsXCb9xXEdVFa5foYXrHqpuV4bpBHKbV1EWd7fDBZ572AK1",
  "key10": "4frAZ7jHtBtNnkaE7sUq7dBpm455314NKtZjQxcFMsz7WFZdSRhs6JDynXxNXNDqnToo8Fb5aYATA9JHYH2aQcs3",
  "key11": "2NUP5vwfr9P8yf8MD1jstSXUbvXaRpWr1UT8DRsMaVJYTDoM8REsTAAbvB6ALVCJ9MQcrRTSSRCUXXKsRujmhaVm",
  "key12": "UKU2EJArGDPpFhpDMJqGPtq6BSjG83KhUzwv7FSoCiwCrSahkhbVKa7QbtHmD7wJMibCrZbbvMnjdGcp8FzrzA1",
  "key13": "3QYK7dVmVmEGbEiSZaK3dX9ddG8aG4RxRvr551Q8wQNtCyvBWWZ6kMAjuQaSiNbeiA8Bn4DL13TtLtALmWyen4gu",
  "key14": "4NPrhtJdXessp8iBmnYpx7sZDsMwRNeHVyZzaawuy7mZfS8vdehKE1sz66hwkWtQXB45N22rqRVMMwxojaUbJGEU",
  "key15": "537QLRKcP2zvq9X1VmgLQzW37ERC8JHg2VvrWYPc1kTnA1AQJUjAQmw1Z8bX1t5H6KVFjSrFXCbPaW9VXUkbtXMc",
  "key16": "4kgykkLfL5beHh2udc2jAVWjQTWEV4EeSmqSxW48rEaCLuWxyXUd8nhdf6JQUNKpMaA9oTWXkuo3jMrN9FRUTBMP",
  "key17": "UfDzwwKXNoRzF6Lcxe6KWWS1YPM4en3X59NU8Ksuq5PzBsS6PJfwBqvtWL215Z6ZSKFH1BMvPsQUPLV7XXjZghm",
  "key18": "3BcsPf9JcB5FmBVkhHmD1pJtZWzkN9mFxPLStqaiFnZPP2g8RhfxEwCkDhjadz33FAEg426RqEy23dcpUz2bcqHq",
  "key19": "2hYV6UqCrEs1be749XMKnnnfWVw1VzqZHJG1sM2zFf6W9MsKB57ZVJv1NE65SoMY7RUkRcDx5PFoKMq14duPp1dk",
  "key20": "3nuA2RoZJj6rcSMx7JZnRsCdXxoAXQCsuqGomnBPrQKeC6x6yUnwzYJ3hSt7RiSMX9Ei3BwGSs58u1MNJaUjmpXM",
  "key21": "4vudj4683rNBFVzbcskiNAsRx2bJ39kYJxpf9bV1DnSbaf2FMthSJp13XHBF1wK2NirHZUn94NbPdPHGHFdGnaZ7",
  "key22": "3zdTaYBRpr4i33hugzGi958TMbqyy7D1QZ7knjThJP1nS2sLQZTtmWCk2Xmvvm8YheKCxZwusgLyjP2QLYXLuatq",
  "key23": "5xRMsw52UXsQprg5f4eZHD1PDtuLrms7cApLNoZAzE5bqyPVMAb49hFAy4VCqzX49E8cTnJ7xxggpFaYWq2aSfKW",
  "key24": "3E4RrshbphZWTK4RxY8xByuKkH1AwVMPgh9bPZBkbJZGw2aiZypy73iEon3r4zGJN3FH8feYPDh5dYsBj5PYewzJ",
  "key25": "4cGK5gK9gnL5iAMvxKYnQyrCQcotuauMcotHaHcJjfxTX9SQmecKhPLWLMH3fXxn1yBgQSuY1VHgRLSLUpgimobr",
  "key26": "4kYjTeZjQ4NqbUNtwQKR19ZnJokunK3HJBKpXoobwUtaszN6oZnVwin4teuYRUpub3uiiCGtR3K54CUwLUPud9y8",
  "key27": "NZzktsbD1ZZxKsjduB4dstzpidrmyBFQxYB7u5R2iTPoEHLgSkMc2bnijGh54gmpdfyKS2pCqa7kcd6rpV7TCBb",
  "key28": "3R5iHDm7wjfYPhkoxP6KEhExcHPtK92vg88LtfRwwj96ZUhUU9Vg6fZ7zWgVp6nPjeevmWGBk7RvFsTaj9c8pHDj",
  "key29": "SEPtMG9tjcLCpqQBBmX1RP9ABjndL8L6BmnU83dzQeqWYSHtuvoU6pPKWrU5oUecTcJzdFokp5QuiuGxZJ5vXzn",
  "key30": "58nCLTdown4wobvZ9Zf5NJyuyEzXLUA1ZJJnX3vNBnMaNvytU2tNwTY64FpK6KBqzx7jLdUkdCqGmek8BGWDmLhx",
  "key31": "2toHGsfTimroiLTo6ukx8yxxqSubiTK4w2wuwLftUJHWPXEpv5HgWKByxMUi2sMRradeGWJowjy4p3P9euHD21Bj",
  "key32": "4b5db5X4zJBi4RcGy7rrLfaHxBpNbeRbzPY3BEhbzpwbLXYNVFFvtcbCvbcXHGMhUiTr1yk9k2MLCv3DDDaTypKh",
  "key33": "22G847N4L6yyYkU9QB6spAXMb1cQ1awq2N2JCRPtYDQHU597w8piwGkyFwnLHSTBojiuV7zwmHkJqTnEGbVzGzyL",
  "key34": "5jR7RbXUbMtZYoB6Wqf4vbRJsrXiXzPtqasX1BC6SGH1o5mMkh2Xp78epxUVawo1mNpJm9Whu9ZdtZVfb6dZdwKU",
  "key35": "2qDunfdBrLK88fKtXJwCnSszygF3T4n14uWWiARQKtgtJt9ErEVMJn92Y1ayxU8AoL9HXAS7z23YJC5Co6MU3NtY",
  "key36": "pVkzLuJTQVRF6nCmnye3auqwZZmwFUmcpkDCpj5zg9x4Z2RrXXfaThDffyg9t4kiXjc3auzDiT7vwyycCvK6F2Y",
  "key37": "8ezdy8pbWa9N4tr98qD7wwjLg7WFbLooSEtnCaSVuSxYCodYMV6w55fbgjQcxBoELrhxaBEFWTF1wQVWJXBCoyN",
  "key38": "5iZPUKNacKmJ69EvaZdVYwvm9Ju7Lcg2cf4QDCopy3S9T4UbirYkZTrwqhMk8aevQtBgUvSsiRrM9i4dDxBYTpux",
  "key39": "4f2uvFyBQwDQ2CRCZ5MRwP7XkP6RfZbwWFyEeWjj6GuEJaYpupZu7WoNL3fhxBCMt1sVLmQXS8NCu59eET3QrnW5",
  "key40": "2kWwci2n7Fs1wd7wuDdAYi7tFT3m1brRZth2Eha4ydJND5y8UQSjkLX4GFxUHiA3QQeB7XKWVxTLPEY9LpSR9jFk",
  "key41": "2uyhbKwvcBZqvCoCcLbievRyG64Ar1Q3CazrbXmbEySTqctfr5Q76xAS7EFSfu648nHnXhXkg6Uw9aJVvU1tbdnw"
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
