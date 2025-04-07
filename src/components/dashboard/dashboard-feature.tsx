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
    "2YogXKA333Le2nYjR3KwKtUcsXkqTq1aCiXQKDYGbMzHuGz7Vnnn4FVRzEMYTDCjVZGqAoPtfH9bykgZCh3jonJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dLTtGDyZnC5KGR2D2gLWPfRYjxy8dkrUBZFNLyXFFQJPkWd72e18J9u9rRvDJZkR4spcy4er3kX5ey2UXAjJtsd",
  "key1": "598YBhcog76fPg8tq89jEzZWd82F5fyVYwx9R5gWj7KDunZKjjLZFp2nBaVw32iRqGKhWiogvZViB8fqmxfYQWQQ",
  "key2": "3XgxkhFoxVdLXCpApPdnWpq47VcDnDVyqrJUksRiyiCEp7BhaQg42pvPNSP3H2dEVyTBkX77nYRQd6iAywakKLec",
  "key3": "2ozieGMgXLX8BPCFCc1C6UiQJTppCMKugimDtis6HMDXAiH6erKpxiBae6P48wsUdvzWYxQpHEEvRgBC3YXCK8Dj",
  "key4": "2aGhECx1YqzWgN6keNV8aktBDByURbfBYw46Zg46R6AUUBJELK784XvLXCG8DjFCNgpTwikGhxSCDpzwLUSSycYV",
  "key5": "3J3zHspeUBKQXLcEHoHa1HiWgtFRRTKXbsLSD4DAWUrussYYnucrmj2BZ5hm3bmg2uLbCK8xgTCDoJSb6pbhesGp",
  "key6": "C5dKjRMhkx4XzrKDsZtaD9BCur3jAp5TALBBq9y4YmDJ85KUP94JZa3Pjr3FeQ8yRc5hnPSyWbYoHtz2s9B7X6k",
  "key7": "3n8PZGakX3NtgqLafoBZvb2MQAVNnD86yoJZxdc7gKMTDuMwYeFa5fQjQcLidwCxgegT6J7mMusSuCwhNJo9MjcU",
  "key8": "3VVopYnRogMt9WMXdeBitjasVJmJ1pcroD4Sb6Ki8JmR3W2ygMAJMhgks5mhJqDMyM8atZzURiyrjo8rVysrYgwE",
  "key9": "122yWUkr8j3RgQNMBZYsAmuYSMNUZ2hqHeLP4ai33Jb1LqVrpwYn6SZz3usbXk4r19sDVfzQ8xfMjk4tUsmiRaG3",
  "key10": "2cabSsi2Eh58cXVyzmhMtpSNddA1L2Juu5ZYtzQMrJkCWcNRkohsRgRUXPvX2U8fyjdYGLw13oTsESmkQMfbaSJ",
  "key11": "56Zjhm9p5fd5qa2UbzJrf4QwbUVYRG9kVyid8s4HfViZYUhsjC7WnwsfMgrgQGDmHUiSBqqStZ7gyg9Rz9esikuh",
  "key12": "3FWwpDV6ooLcHwVSm88xuqgZB9hL6Qi27tDyrhiagnSwnSVS4zuCafn51SdwSEV9zM52ue3moxmcNSFoRzAdY151",
  "key13": "5UHc4SQWCRSuF48ZGZqDGnz5P9YZ6xDqUdyDmDrc5zvxLkH4qLtPGJHXFATvyXh7bhTStkfEkLN8VQatz9YpcNFs",
  "key14": "H3o7DxtCprxxSTyG2rA4ZKVafBQAQXmAayAdf8SwfDmHdkKWBRBXd5YTH6g6FPiWwdAv3GSgNXMKs1M8Gd915pB",
  "key15": "4YJ2svmRksBWykv3kqdPUR1px8LkPTvLdaxTTsrNbQGZ7Fovvw6gnVxZAS1EQgGy1X9PJhToLPevtmSZKEs8ZyX8",
  "key16": "2dfZChLcFtjBZf5ZW61M1T87PEASZKjYuvZ27ZpTF3JPut12upPc1DvyPNBSiCJuP1ZBotiTR4t6KXFxor2geToF",
  "key17": "2REcPQGt4JWQxs9jJtN4FSnmMqnyVq41PjhgjZEyVQcDVuCN4VqWkuRjTZbZU5cb9jdWXAoaGdUrbMszu6gHekkH",
  "key18": "5GU4bQS4BzzFV4GDtjG4je2RWx5JW8wVqENJDPP4NBCt7ymfy7kxLn3Cp9Btsr9d4g592ivey3Hg8XN2K1j7kQWb",
  "key19": "3FKcaHXpSYKw7Dj3BDP1tXLoMEQQ9dhmVogFc9BzvhoZowAsA66MuhMRQLJuiXaMA66QDTNUowtvFHqTZCg2ubRH",
  "key20": "48rP8kS28WQF72d9Sz6X7xp9vdx6CpXt2nyiynoXc1KmKrcJCxhUdEjrq9mssdJ8LyLqv1uHUT68wEQBCKM7Qgt8",
  "key21": "vPTSabegoJL8Eb7p1NukbHz4J3aAGNrEhewXc4Z8hFVKNp9s7NQVMqUtQMLirWZ987V3189kQy8L2mkxD76n8zP",
  "key22": "4YSq1Zm5byuhKyKeskpUShwJqRSgJmVp3qxHZ5kcBz7khY6ArTJHiS2k3v29r2HcCStK22d5Mwx6njVdGna7Eoig",
  "key23": "5iXcaBWy89hcm3iUfT9hF9H63etxmJ4rAh2XvUuxrPt4pfMHDRAFBSFg5BYaRVDXKsQYxqLKnvUUeursYUJRFkig",
  "key24": "3nrx2swPPm1oLBBcddRWFoTTjmbAjvhAaZqqutsQbMuuvrWFqhgrzq9zWbsHYqWrUrxQHYbJveEirwFZyH9exMKd"
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
