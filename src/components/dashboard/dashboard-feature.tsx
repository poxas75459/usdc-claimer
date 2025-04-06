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
    "4wxoggdqfPxxwbq3cNktGpXmBgpQvXc8eVtV64rV2HpWgqVxyCwvvJ4LBFX8WyAyPrR4TEDnnjg8sQkGz63voQ3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwQp7NkFV8psVh1HLSbzM1BoF53gUmmDYMeAbHXPMDjeAa3RX5Xa8rTGWjX3utHZMbQCXTgD8SN6rYSJfnin7Y9",
  "key1": "5GgK5Ki3v9AsBq6xTgQN91E5Yf8Ni3qqRhPnJ6qpSAorgudeoVNh3bamhQdeDB5sAe1yUirdYCEU5diWmhNAPLVK",
  "key2": "cMb9vybdo8KPY41PmPv4MgbB3QPwMPVGtbkDCRQWAHHLj89X1XGqh7pK7Ld6zsxvPMf5XmQZQJfKbWuvCW6kq6t",
  "key3": "5hGGS2yU3znXoXRVREi5AtQfUr4jJzbEd7tVzyRTYEcHEtCQz46cdnaNmDz6HugGojQdYZvjNE68NbzSYr9XsWwX",
  "key4": "35RvY1H9BBwcTDdNUPPE59Q9TANnCu9vKWFycfcgbPN4nGCKLhQdyErqETsMRG3JDQcUkjnZhaYQitJFizjNtoCT",
  "key5": "46VmAN9egisA4erYfS8H6HsMzX7JENZjWdi6XaNqdn4hgR4foSkEcjuM9ufNjfktJxAQ2V6L86r5bvrccEZ245uV",
  "key6": "2xJh3iwork158znrFeD5gTghkjwrS9pc43jsy6jXazccGFURDhtXePx4N9ra3ZDhghu1VJWxMAuy1BVLBJ8At7FL",
  "key7": "5yiZGbyqAd5zcMAGiJNLjnbr5uwCHffVzcYCmJbfaNvGZfCjZBBicZbHLgtRrRKGe67AKYr73rQvw3SqFkQw5zHe",
  "key8": "eZXbJfwuZpt1TgsSXsJ2MZDhMdsKe2gtUZRG4Z7iSUEwfs2FJqrZFpRttnhFfoeKXyVsRN8EBJjWoddB2TTNp94",
  "key9": "Hi5YLPWoXN8Ws4Tkm2DehSrJHoDUnxsJwrK7fzGMtXoLFUjdK56JYG7Avg8q8gAvyGjwfrXQKsotZhvNAFjUQh6",
  "key10": "62e42LiHyHE6YFSDHirTcSDyHQngCmEhsXo4EpsHv3Z8NquU9b87zrJVoKoQKgrDTb1RM1xXhKuwCvwjdLQifrMG",
  "key11": "26WJ36pKPsGYeEWPmSxogosoVGFqv7zMJmsAHKb68XRoKqt25auJZ5tgvWZ6bH8atKmvimYFzTi7Qt2ZZGbmnHTZ",
  "key12": "4NQvVitkugckBajtVYoNaAyEjWAPzkYJCeUH8AeKSP65Rtkp36EfFVTAx6tNQPssKQ1HuGAZNzB9acHAz7vgcfgU",
  "key13": "39LaEKoEchmsasjgX5JdNWbNjoVJ2iGar8xPkVnXUcMWeEa2fVAu27BJ7WYdSuVZff8XhGTySiDR22ftsyHnGZFf",
  "key14": "24dHD1fBbxkC8pSgNphbG7ZGNCLduTGfTstjuqkBTDArZ1xsLX9M392TqqLrxWgdZWYUm1dxQg63bFkJFouSWX2s",
  "key15": "4XKv6hZJuw4Ui6AxrQ6jc8X8mEBPgAwKULez15njmS25FtBvmkejonBGfE33NDJp9oR5xLp6q7A4oMSRRkrQWcJK",
  "key16": "5xwm1tAM4KQuULtSqF2tHFG9fD54vQMX8hsfMUaKf8Qmnv2RBvY6GDFAXQEKhcRAoo6tbwdYLVbrR6vRWuHnA8wx",
  "key17": "5qVrf5veTGLmDDVqGFKASa2LP2R773XjKrKK7PPxeCq8BPgxqHgxesqtWJm1mgsjKRghBZYeQUp4PzUTE6AdmkJH",
  "key18": "2LpZMrAFSym11Nk3RVbcorp6F7Zg4gBMRFXKR7M6f5919xmf2KXvrA8BD9PPKR8tfxE7jeWm3BPsJVvvmrsgQwXe",
  "key19": "uRkoXdVTRNe48qrkZzXAvZDtmTa7LmEaJLNNgW8XgJo288ajbqFsFut5PLDRQLUcXifi94FdSiim2eNpsgqEam1",
  "key20": "4pqfn9HhbsWwdeNRiQGprFZ5UdNXknTvqNFiRKDER2Xp9WSA1YXZKxnkMsHuweg2pUkkKWxrZBttSms3ELZBPGPp",
  "key21": "3AWE2FxycnQUABMkjDsBd9TegR5WJgNA1JcxpjGLJm5n3y4WUQ2YYiZUXtcGot2bjc4vdYCijLcdgo2Yi4iv7HT6",
  "key22": "5rY9jkd7AQyuLFoPEqs21MpL1LaFUqhQEREXJ2tfFX8RtrWVX5iirF78SmLbp2V7rYynDjhoo7nPjkdRkk1iW43P",
  "key23": "43s52Trfzdd7FaNFVghStoX3kY9JqSynw53BQds8hapL531nCL29FhETxzzGEnUXqAGEu6MHBbGy517CvBzkXBN6",
  "key24": "3VR3JWka5zPTSbiWY1cK8Cc2zoCczrEGVGErPHdGTuudg7EGTLMiKVBw3qH9W12aJEHi84WnWLd2ah9o3mNgge9j",
  "key25": "2EbW2FRj9yrTBH9QZUB2SMjhmmMJTEfB1b9EBJgLHuhmXmgyKzagj1BYyxhm8hJt1AFG34cmAqCKk2n66oGdSxoZ",
  "key26": "mqeTJfMMEVyKawdrhvoZbYcJd4vyLvgJXpgx7LHHq9C4SG9ucGrSjubP7iLvrfnNcKJRaF8ckRWAgistKhosLXr",
  "key27": "49KcAh3ifeRdbPfcAwe318YMLfJB3Sa2pcM7jE817stBRuG2ZQEGnD8F9RZLkuCvbzvYDySTpGGQdrmfWJJF1bcX",
  "key28": "5WYmQ8GPmcNT6Cenu4orB8vjg4Y99tgbnBnULLA68mwHZWfeENeXU4AeVGVGH2ZzCeoT8hiZjA9Sefm4syCXFrKP"
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
