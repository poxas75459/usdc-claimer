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
    "eGxEd7opPtNP7z7CBoBZYWpzNvdAPHob3jo3dCgbNMsyfeTqdJDft5Y7WU7FdQnj6aYjB5saXoffVXQqfJ6c9NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCrTjcLv62uB29WkpFPrdMWCCNt4nnX2oQ9dfg9swDszzKrGmH82HYz2Uo14wc11rXhiEZnidZNvzN9S8NgqoWk",
  "key1": "nagSaZiGG5i69GeVCQgSh9V8F1xso86QPBE3USELgE3B1y8qfQ1Kqof1J9KwFwUV3NJPFjBKDPyTTSDm1qQ2X9B",
  "key2": "5Y8LB61DnF33KNb1kxzaUHzXcqtJJSZtKu4P9bBefxcKrCywALbEZBBBDaL6jMp5szAtPcJdppCg1B33iJYHm3hB",
  "key3": "3n3kykpFAvibX3MWPbj8xKsYkmZtuQV6w4fehByXaPrm5DzuZTq7TdhuRr6ap23h4DiVF9moox1qaxPdvtTVXM4H",
  "key4": "5JdLV5vKHuNcMfe3ecMXfch5wKgrxbbTuX65Zc8Vm5ZtsW9AnByj1ziqfahUmWVS7Kazm7SNWWiZiui2uB18Rj6k",
  "key5": "5eFKKH2SyszsP27YugKF4R4QpxuBcY3EHfC4P7d9rCsdEJwmcYxGGm2ayEfzbEPQabgYxhx8D8zmBsEgFoZqJudq",
  "key6": "2pExaXs6m4W56FQxYpjvHNq8qhuz7xKSwRYqhXZFTaRqJYYNHTrKaEDza1Z2V4mxp51LceyZdzLuN9Pm7BKChKbv",
  "key7": "2xuVbzVtxBodVW7Vc4tNvZojeiwCW5cpbVbinkT6NtZZmyV2NUBjjfpgP3DgVDnVt2RhCq2QfMBqHLqhgWj1QiMw",
  "key8": "56F6Gpsv7D5kQzR4DYLsmDqqZ8AzWSBUc87upzG2ywoKHNALPtTsChspum7mXaW4DoFvdWpmHZVTVGyokKjo35Au",
  "key9": "4EHqoRFvvouMkFZcaARZsnnW1T6K7kM2YyWKPFYRhUEZVeMLsMzyhryUME2U5UU51srde34okfgk1QWjH4bP7Y1A",
  "key10": "3p6iv9KKNbWQSt4ybccqrxqfaa7FBFr8rQPXLDdcuTq45862CMcTRungwboEvLsxyQebbYGbbGJzphCdbDPjmciW",
  "key11": "2cyp6wE72tje4RYoxypWzMqaGvkuNugMsWEu4g26F5d6uRZW5y771NbQdWApfX1eyYmgUW9qrhKvrw6F5CpsaVdZ",
  "key12": "5RjgYEjgrAAsCdBedSwvU65aMwFrN1Q2Unawv1Kbak6pgpk5giumdkMUd1HpoUvJuZXsg5iyDPzxANQr7HvMHENu",
  "key13": "3fA7KCJK1WufaC4QFovUD1AdDDvyBec2jxepeY3gjRFmjMykR9tQ3EfCHE95bMwFFeDbY3fnU8xKQp1KfnhmS61B",
  "key14": "5eT4Z8puyXpeQtVy9ZhPj2UrXAXPiqozHGHNga5fNueq5PTwTMqXaUPyRcprLCZrpPuwLdYYwmsGkEdmmbS1r3ET",
  "key15": "mM8CAh4yiDcTEszpdzuWqbx1hPnBZnZm3Ltp9NAKfm8o5ssSvibHF61kgFue5bj8ppBvNs5VtR4t74iXp2VFVFp",
  "key16": "5BJKx8JKjRKXxAmjmjq3bjGcT4AJdVxBLArcYR1RopS6xpQr3TxegTiJtEg5HfGEBajkic1hv6XH3gWdp5a6eruw",
  "key17": "5Hz3VoEqNqXJ5V4muRmpLfvdFeFCwALKe4ahuFgCicau8fKymQVP3wVdtC1z6Ct5CerfjWWf5MqyHTVvGQ223ugT",
  "key18": "5JPRBU3JZfUd9CkSLR1WwZ9dKVHnwRCEDDqHNWHGUt4rwUQ7htwLwcAw6EUdNZy5hKWtYiwUdHJdxFX3n33WNkWt",
  "key19": "46EF5fJbASa5RidVm9SJGsZwiahfNMkD1X1CjXNLLVCaQzTVeqQGogvYUSAhtyLLKnb1NGpzWPjrpngVLV7n2inF",
  "key20": "5qfdHpNvmHmLV7EVoVKvqCYWPXP8Kgq4iNjFubkEPSE2vc8a4LrcNT4UAdioU5ubMZWqQqr71mzMjvkSp7G4s1VG",
  "key21": "2vs6KAF5aEbPKiofZRmQ7ES32oCt1WUoej75pEMB655GRrikVrw6WLQPog8FBXKdw6fAXJzAA9RiaVp9AgnN9D69",
  "key22": "2fnCNmwdWLA9oC2yXx6gvVucmNFQQMukDiZV7czMPYXabGoBpc8NDogweZiNzg6vF9Uunx6nfQPTfMJsYSEuSewf",
  "key23": "5vpziH8EmwAMSw1WLaDGcPEHsZjgtGuTPLwrM9Mu7W7JCpkY5HuGD8qBEhHUhQi6ZgkADs9yfCkiw3AVrjK1jhxr",
  "key24": "4m9Dgmqb3a3dUKLfzgH1tTwFCDK7i4Mbp6VTGh5EPCsXhVRuJ2hkCPrTnY3v7if22tRoKXsWszwmC5VkH2gu4xXs",
  "key25": "2LKkymiqtSRDvL1P7okFt7NyQrrwJKNy4y96QBi9fVD1wZ56wstM8TKWyc5erfF7ufZnURfqqqcYj3YkSKKm8tMF",
  "key26": "45FVaE9FWkL4hWTWyE23G1yr53ewNo9msKhXuM4afmwf5r4LQDbFiXPy1FSdWfKqLiQ3BfbPtA7HyaQLms4VbE9E",
  "key27": "C8PaeMh9gv9ANurXwU14MzxHaykit5Sp7eaFiM5Tg476ANGY3Cc9B2MQyHmrAKRmjtPerKoM76VS4hZDaEsEmTE",
  "key28": "59sHBhkmoefStv6NvmyrKq8THmYU6gEZTB9AD7Jj7ruFe6j5cUj4igmJ8DPNKFEWBfgXKbVtadXaK3WzxQNLm91A",
  "key29": "wMZo2diyyT4kBn562JqfDtcnXmEJRNxAHYeeSMMBowNKi3dA5C3gX3jSpEWGyEoTv3rx8xoieUNHUrF3CKHp6Vb"
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
