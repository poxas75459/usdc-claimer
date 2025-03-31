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
    "5TVYFET6BwGhXaVY473tiBGsKc23AChnnTehtY4fAn2f3NpYZW5wDEWBt3CNT2uRkB6eQ75U6NqPZDvYH4DydBLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cpKd3xMMzNV7nVvtqDJJhnxJX293rZ9xyFa1DPSdFWAfHdWbtZZsbw8hwg4axt5PmtYDxhC7CnPtj4TBWAnzmmn",
  "key1": "67hNCEN52USAntJrPmwrytLgz3pckMjvLEKytGtUzPFBYSPQiyAnhBrkL5bxsUQLwQJ22oRHeNuzUnLWDMCXweoF",
  "key2": "3MLFtWLdtHGvBQd9kuAh7tDFUavQVe77DYsjjNoAPTbK1BYuUbKTizD7JccXG2TWEexrpCA9GWetU7HLiNkGPVwz",
  "key3": "618fUB1okiBo4GBiqtSvWhDHpBxHjbguJgDd6TDcZbXne9RQ2AkCSQoax6ncKsZJsrf92G7m5rThBAL8pTECJ2mG",
  "key4": "Mffzdw67dypEc4XB42jdSTbVCYHL4bsUq5FADxsfGPszHhorS7AB5MsGmC92HpzGtNo5cErqJW6zuEpwMDeH6n1",
  "key5": "2Hga62Ao77A91x9FTs6xNcoBUY4Je896h13RtmR5xpSbqsiuaPvYrg9oVxkTaCvPqxrRdEcswt6dXb4V4kVnL5Rf",
  "key6": "4oWzJe69znZM81pMEaSp65QymtRQeorrF9hVrYxd8vnhuVG6QgdSsse6kchFAdHDfzM3r9Cahs4UZyAvrW4aeHd6",
  "key7": "4bWHeYFr6LkdxVEcFWNfNeGozEVrNueLxvgbtvyr24c4UuFz1H8hRpXVWE1aWSEjXmU43YLdNxSYRvCaceSFz9Cv",
  "key8": "nzigoFBtxqPGMPMGa6jcr287zPyEyjSkqKgycbQntqu5WjjkXykeq98ybHzh8v2KcCEXFeVDRXNFimApJNmgr3u",
  "key9": "5WiUw9wYPAMFj1SjoQ7noPVxXGMkbi5voumKFPcrV7iWzPUBdfLD5JxFWF2BzfY7ekU9amxby2g29VputYD1QANq",
  "key10": "275bmdaEkx8KDYVNzUMndCqzFo47nMtH1BpbZQARwxdqUS4Scrde2B46GAV3abhMJ5hHtcNehUfDhQFYpDoy5Gsz",
  "key11": "3hpVSmfm9yCiKzvCZrGz5E1kie2TqYjAjk3QBHPCUZsUXcfZ3HvXAUugQYNcdYAAAL5Qvy6n8c6Qmo9hMrruJaHu",
  "key12": "2ShzYW7MZbCsCWAyYcPZiDxixk5c6YJy5Nh6B883EgsbBExNduaLNP57K9rPNpnvFcsw4bowRfvBqe4j4LsirBvJ",
  "key13": "5fraCbrDdPvPa9dw95fgBLepSHt49LGLtkNXgZtjSASAzpnzEXQ42eR8wWbB5tLsCUNWSfWRxPBJhJjUaCjcJAtn",
  "key14": "4vFuA7GDvm8HxwJU8MCAEXAAcvnJnTWg6hczsfZ4CZpmkToYk9eSzbSDtQ1njc8EaARxCXpURR96WCKoUNASwHrn",
  "key15": "4MTP3azq8tpLDf2D2htutt8eZrFKLEXBsCJ1JYsBF3Az4eUpJ1Mi1Chdfs7KKkqwKy8JZDHGB87RENhiwtZcYECK",
  "key16": "54cDYhx72JGeiN2SaHcnAR8Y8vXG6E9wSQgnoYXfiqBGTtXTjoxL7AzX2gUN6oNLYQQ749MeBh35P4ELQ2kpvos7",
  "key17": "CjEXEV6FoCgR9zTtkRNoDS1DYyiit7jVaW1poZFe6RmsK6y4yiSaffuwJgQ3mP9n4Teg2RopVJngyVccB8JbFVz",
  "key18": "4wTcNC31SBvateycCftPre6yZffkh9oh5Vp1aCmgo5n7PqqQvBdD3roi28nHFkMfMwCr28GLmRxgNHSsnqX1xt4X",
  "key19": "5zPTt8NymPw4dxgNXwduZae4i9ipPbZhZL8u2rnA7nW1ShPLSc5qV8X5i6Xu4nxpWvnThesXMzEBSyHJhVfxEmdR",
  "key20": "58ZKgKiVtUASUqK96J2FZn53cCVKM8QgMsioqTd3D7Gve1JxUmLtPJZRdH8YkPDgRFL9MpcYUD6p5fd3m22Pz628",
  "key21": "grEj1cHbfxED2yf2f6dNqs6wZipXHZP7R9Y3ELQjpjpzS9mCbmztKofgCsoDmKWHciMKFb6HaQEDdyLX3Tqsz21",
  "key22": "5UdABPWNa52k8nJSPo1eq1cW7W35hSZkF4jBofKhrJx4HTbv1rJiETUb7eivr2zZEJVfDv9dpKVyPq3ksXWzfnec",
  "key23": "3V171ebLr6f4RVKQwS36WRQMFtRxZHuh3DM5AyfBSXGc6Vcz4d9at1dJAfaFycKwv1uJkUNi3K4i2KT3CRMPZv3q",
  "key24": "37ic9ZmFEUX9Ghhxtb82VkCRF2QCFHzYK749REnZzCyRZM4MLg7K6a2rr3nRHAcJ55bVCCCozGF7AT5VXEvHhw9p",
  "key25": "4zxZ6JyZAoQJQcNkpyiZ7L7MusRE3Zn1wez8rixRVyv5yEXJqasQh36KiyLK2nBJLbRbvcjESLztA6BLWRSQsk35",
  "key26": "4rd9DwLDbrhCsUmUExxws8PRXZPmMDVYULKPYuSZeQc1xpAN8gdvfJLmT62uDQhmNJ5SviDPeqnKja3eDYjXVCZM",
  "key27": "4jerVzEGyLz7XX5Nbgr9DPvPPeUonfChvQzxV3oJuue5ugxH1CJgNTS7gs15rh6547AvCzW5EQX7tvJg74ENjHXB",
  "key28": "2aMGbkNMikX1N3SRpzJzpQ7cupdiYcjC1ebrd9NrmMVA9udUYy5D8RxnJ9wy1A1M9VTzJWChQtFWY4ZrQPfpRem1",
  "key29": "5HUwu73VaE85ZZQxK4oZNCB8LLWQMS73up2qhMcGohgWSkb96tiXuZ17MzEArR26kkTrVY2nRdiAm6inayR2Aipy",
  "key30": "4nXvVC25a8HdM2hMHEvWa87wc8XeuJkez5TNCje6eYD1ydt6ncWEtupPD37dq25sM1b9YVg54hh8DYa6DnJQEZhL",
  "key31": "4bX2MpZSvzYkFwnZmviXFeXgpNoRJxq9gbfRrffho6SgR6adFNtVZu4cSNk5jW2iG3g1SAuQprydWke3DDeD25ee",
  "key32": "2HxF8DjaDoVFHJ6rEuJQK3e8VoU3rMfLfjZhUBMeL1DThsuRP9kuZbn4EmxZyduXThs2AfGXYbFsrB4U2BtLa2wj"
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
