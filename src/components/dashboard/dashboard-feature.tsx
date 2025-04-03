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
    "4fUtBXBHwD2YpurJEazbmubyr413UDSfPd2KeUHdG4NmWj6vsn4b4UNKmMaCafXvsyN4t5vXEp88Dmfpz8TvDQiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntfScNMvEQRUD6yXFj4SHsHW1HPrJd6rUC2qqCMgMWFmeSyXbtnJpESKRtZCZggCQncb6WezLQocTaDsyuFyt6R",
  "key1": "64NLQtT7nR4Gu1uastVjvk45EkNLP7crzyLuLKk78tQEz9aXSW1tYLuvhTW9FQ9z6bdBQDks6xYWBap8QDSv3BU2",
  "key2": "2H9J1GxjWwTRLHVYdSz8ueR6eaVvbMQEiscZDKJkAYbUAnRqoT9kac4q9YUNcndErztHnAGCZ9v5S7Mk6XujJYNp",
  "key3": "63uudtuu2cCQa7zW9CdQw54t7DsST7ueK5zu8jf7sQbafeKcDj5MDcq7YXMv8nHMp51NMZGDY7YMutws5sD5yFUa",
  "key4": "2u9gaM2K4TjAaWxNjfivW4TntKY1cGgCUpAxWy3EF9zvxCVvTe6U5jXcB8R49RvJbGQ6Jxm5QUSEgYkTTYdijskG",
  "key5": "2ntaqrQug2RFWo57HYxTsq3Y3P9sZppQrbrnRyBNmQTADFNBRA4bMYKZ8Ki2HFzqeXsgBf8v8z5bz2UFfULe9A3N",
  "key6": "3cuTMCikKyKgVFVXVmq9ZiWq9HT8TVJ28LR5yfo62u9qL4XHC4HTj5erpxvnuTBcRH4sY58QD1BEv2V5yhpbHXrg",
  "key7": "27jVgmML4WpuknThgLDrtXohX6q1m9E8gpQpr6MuP8gXMrLLLWNkNMTwuHKDTqwwUYaYpNo1F8uJfaPQdBBV7Va3",
  "key8": "4g4CYCgPxWMf7ynPX14XuPYJhUEKdXGF567bXmhThbEdEUsvLRXLrqc6NwnqhhSmxEsgYqngNh1vujiS8dX5UqLo",
  "key9": "3Uu9aSarLeSXsWnJn7EbFpVt8ms5ef3YWzmiZoR2RWrtucFxnbU9urcL2MYeBnYwRWRevx7H9UEQnsvtts77P7vW",
  "key10": "4qAhw4PZ1YvZzpzEhD4upo2DQ5M2J7B8kfC633xw732hw43YyCcryKjSjFoEw2kjhi1Wr9uQ1TB3MH5JbaxSwrFV",
  "key11": "zLFDV7JvhQiWtxXGqiMuBVPdi3rKaJXtjGFCJJFW18toNEEuWKcTHM17D43YC5oarMZ4rgD33gBJZ8FGXoqWLjE",
  "key12": "5TcPMcr1t5XKJKZ5NA9dejVW7fimU7LvRt7VFdmKTpwJDJkhVBBoQcRyhwADZ8E54XgxCudt7W1WNLPsJ6ErEWZP",
  "key13": "2eLnSx7WZsUCEgLPGPDKbRX75k3B68YATKeXHoZmZFT3qjckeTarAnrJwLrqndCzqvaQYxmBvr2wJGmUZkoMexEM",
  "key14": "2mdQSTrKEnmynLjjurkd33cWRPYUr6G5FkUm6ekmt7DoiKY3MTmboayVMuqMqt8Ea4j7mbrTHP9cLr9Ut4nTYr5G",
  "key15": "2J2th26hYNFiRADErJmAqLr5s5Rgem4USY28wTvqBnXeRYXGJ94rzevU1yFKwp3zinzobS6wWxiWUhfzaJM4z7f8",
  "key16": "awLTKfH6VxbN3PGEaE25kepJH4WdvceWpp4AeEC85gvYSdDff82D6AawX6MurjACMjfcFNc5xuCrRxZstbmuzwR",
  "key17": "5qrgmo5sUE3wqLDQDSr2Zn18H64mcLcZG3q8cyPgasV59e2i6McchMEXXXvevySEcwLe1panPSL5uvcs52Fn8aQw",
  "key18": "2Jrez7KnJSNYDHBzsnx24S6hM6SaHzfNM9Agzi3REyiziACWVrwJFxe8htoPLVLZr6Vxg7SVCufhLAtQV4vqx6pa",
  "key19": "2St3DZeZ5EP4XZaYK4k5BPn7mGmv1gQUbGet1uYWnVytgu67pawZjC1hkjbGFgL55jW7SVDenSkX2pQqMYNquLeE",
  "key20": "4j2NrkBn3oEfTzDxNEEfkXiAeqkHwq27N1pmXQoDQP5vFQfhK9xwQxxEe3DeYmjbAo4AnXCjsKXiJ3FovBgFD5tX",
  "key21": "4ozJtPKqNGzfWXLUCc3dQbMkCxPkYnhDR2yDRMzUgBBbhag2HZCGrMw2Bgw6MDX7ByBhXuwjVeSwAeK9mWmV8gqv",
  "key22": "3sqgBuH2j8QB9vd6z2MABt9ta5BByMWShHMDypFcAkt5nNxSNyoFWhPJVvZyUfbHWkvGh6ZpTFc8VoUCMAQDwRna",
  "key23": "5yJpQA7L7b15WRo3XZc2jBegFudY7qbfF9znTBNsZvFo8Utw7Vr9zUffCKsZuL1fN84GGqAJgFzewRtjGgpqKqEE",
  "key24": "2gwVkhyYvDQtDp7r6yEfL7qTYHUjZung9y2b2si5WGXeXHrM5cVymABNxEQcpyfp67Ko49xdVyz9wECE2yULeDbV",
  "key25": "5CWcbd3msGdWAfh4CB3ujhUbkm4dpyWfKTVuqtkCNsEN6qMDDhLCcipAJVqqsBhpa7wdWPNNgazgtoytdccWtbzk",
  "key26": "22D2wpmmWeS53rdQvb2Zmh8rMkbXxYN4zGTJhcTuZtnCp3EQUD3VTvUsWjWL3eee12hkPh6UfKZTyMinuJsB7nuH",
  "key27": "2TGPWJoTgurWhNLp3hWADR6vZ7sPsmu15Kxifc7KeUwHk6tyutRNGuPyG8Sd2EaNuX48sxTP2x5bZ1DejyHXYrnE",
  "key28": "5zQGB19GTUU7NxquyYVfMSFEvNkMYEPyxnxTEq8p6vMtaCHwrKdNnB47UTPaedbdaFoktUi96gUutTcGpPbi8WRg",
  "key29": "5sQDC3eUdDoub5G3AT1MsAaT9ZN4JQDou4znHRxWixHFRrPsmPij6f5M4ctUS5gsQnYnWRTU6qXJZF45wPHvrzWN",
  "key30": "5Vpg77bdJHn98ouDLxLprKUKkHESY9EB296rFkfLfZQWhbCF9wuPkv8hz9rTSejjBUxCqJueqx4EsBnic21ZNEFx",
  "key31": "2eZSKXJwgBByUdbMpz4yfqzL1Dn5D1Gz7Qwu3JZGGrymRzDptQ5N5DyG7a6BDxRHSBLRNRw53BnXjAiKBp68XfgQ",
  "key32": "5dNWmvVmajReJPZKAWrx5H7m6ifTAuaMcKtzo2PV8J2bqZ2jL3sKap5yncaCMkgSuhvJuSA11vBiAZAmVumGLuYP",
  "key33": "2EJg5bU45hqXET4SYvd4BfzEvySY8SnTTeLMLnS2AkhFzjptG1SBL185G7Rat39MGYWB8yEfB2hAc4e12s9Lt4vJ",
  "key34": "3R2NzKZerdZ4nZ9EF9CoNSzXooGiM3sreL8ZeXJRBRC2bA8kEC2hYZuKigMFWSeXgUYbugS6pJ4LJXTXmU8juhHW",
  "key35": "4v8rxkHLXsFw1x7GZmeDpbfrmfZWH4WnxPhLBvMnP4mX7PSryLsutGF66qCCXKe9d1nMBAA4Tvf6LQKPcoYkm1tJ",
  "key36": "tqvzKRHp3pumXXCyEiTGP9xhjDvUCiyCBVs2mwBipE4k8oFbUPVVV5UvVn4fAiqQxo16mQxfCCKYwXA6ffvwBfs",
  "key37": "ZyhU5jHKjW4WHseMJeMDxU1V8h7ogHXaCv3YYMGQiScRYrc5t3Utwesyogn3YCtLXbe75GCuGr5e3bmDo3gvmvi",
  "key38": "46i4e4t6ZqpgMy7S5gSuTu39UAoeHVvgn6eFbdt94zzib9CGD8SLFbkvEjp8gtnXqLXYqvSiGoXHGvSwm4fbHuEW",
  "key39": "zx9k2BPnjmfyhJ1GZ5SJKdzUJ5T7619onsgDcGBx8xDHpGuaSweoLpQLNhJaKjKiBYXYE89as6s3i9FHsLZbhAP",
  "key40": "4ZnzepV61hmZ1maKFjCqhgheMBf9JSZAcL1AG3yDr2uUSsGEoZ3RTAdm3bmA72ZbK1bRaMHzQf4AtHzMRVG8t2Y",
  "key41": "5yToVtsh5ssXB7x8kFUPcNfefNrWU9ge53cL6ryN3Qw8pAVejD1hpG5NBn7TwqeN5EXNfpnE5su5aoadMxS2PjBv",
  "key42": "3Vxfk3etrLaBwF5KAG24krRJ8LieGReYzUnjAb1UGr4H33dfAXdwtPxo3bDMBNtWG94rAFEsi9WwbLqtznuqnHGY",
  "key43": "63GgYnaprqB2mFMWpw5BUr8618wsRoKmvuv2L834g37iVhoEpQVy9dQaweW58iPVpJyi5pVXzmLFHtfp11i3bQe2",
  "key44": "3E4Kh6tRNrcgvGaBbJWamcVaEutyCRQtRYWWbiiJkW2dxwN4RRB4ybDRVgpNu91n7KEWxzuFwBcjq9LQtFw66CLt",
  "key45": "4PVCuJWNxZ3gJ6ieJHCbioYp7N6FxPJ2CcbRCR7s87HXCYa7tKrJrHRmSiZszGsJYNwXdbpShk8ZQ2ih7NwLVj6m",
  "key46": "jGSM1qQPN8ijVkCqSZkqu4taaseQebbxkr3k1bSiKVGYrVSjgDzExYCpDXK3yYwBBoFVyRJ83vgWPwBJDGopdn3",
  "key47": "5XRFshKrtR5h3cAohujFJU94J1nCYhqEfHUsH4HNMs67fBrzietSVr7HTGT3iRYgfeKFX2wznTgoWYnSpr1D2rpA",
  "key48": "r5eMK1JBKaiyFWvMsX3zMYPWrKUhoZTDqE5wV6AbXEyPDRp5uAupHSCkofyMthxhL2CkA8hMq9RAafBb82kEg5q",
  "key49": "5r16UXTRBLiAjnNM4ju2kWb1pLXwPrQGWYc6D7oa4ydgKNngtAtg7TsMUBPuRMvLb8WFUdmEor4vWDKDYphimK91"
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
