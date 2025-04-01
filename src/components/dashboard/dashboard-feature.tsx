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
    "4CSGq3coZBtESjTmxjjj28PUTsE62j8v4FyLX7eFcfK1RPdz36KRmiadzpZa4WFD5JrDhRfhnZKJhRDoKjYSdEY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56EZh4BK7J795iocKD4fLJsYctsVhEz2VnYdtprwfuEFPg2jQRMZV8FHwMxqbU2tJVJ5TNZ1hufZUmRzpu3Kf6sc",
  "key1": "5L7ihT3rbrjpcoQ8Hew3z69nFZh1Dn2vjQhKauniHywS3xLKKUJiV7crreFP3kap3xFUpbvDxMFVS1Z2AW1H9R5n",
  "key2": "46pGDqaz4dw44z4VF6qZKnPzRyNXJP1R59eK7fJjbFs3aHpBZaGfAnD99U2jvCapiqYS9waMJAJMJF6Z5KwqtWRi",
  "key3": "5QmqyaTeQsokASKto5mWAUKnv9CLE8Cwrazge2dQbnZo9XrZJTPtmv72Eha1y9JNfMHJF3JbivZveMYZHU6g877c",
  "key4": "2TpqmX8TJwrLfnvEZr7gYq8i4Ybvr9KmY8qrY5qz65a9deUS1fYgxodoWV8gkJRG4SquanDbtZGF5nGDYwyxWMbc",
  "key5": "5awyfbfwH8rv1AeKgtyELhJrWLXPzYZsMG1ovhfi8U3Rx3AFNm2N28jgNkoD9kCgDUBnAG2NhCKWb5T11mkbmwbG",
  "key6": "5PBxC7EJmmkZQad8XkjJZ5dbFdDPZWFFYfCMXXk4dv8msBJtiSqwuo4DUGkndrN39ooHnRRztqDnAWgatLdRir91",
  "key7": "56U93Je6TR321eYvNcGTArTkoEi4ua8HUnv42qQWvT3rpXDQ9mZ4q6iCohZk1arxUKN4NGigiMohEGaxzxRsXpmC",
  "key8": "3EHtNK5K3Cv5MoSZ27oRC7owriPXtukUjcpwQr8JKdRDpqS4RzJRJC2cU1FVHJKEN2mZpDzkrQUAVPeLY5tKhyvJ",
  "key9": "rLsye25QeCK2Mg5wiARcyNt5PAJSQbLse3yigaF5ANrJLXHbWPwB9DP2GPArmsMSBx1RsV3i3jN5mfnedqqonYE",
  "key10": "4A4LQDAvBPdFgozn6qkxgT2iC73uRc3qWhYVJwoRtRLgcVboENsdmmjJfLjPaXTK6boDuRGDwNBVR4rAu4yAmL2F",
  "key11": "3QKPKEAQ582ELZyNAXmtn2nYKCBMvpWt6aNpwV93Wm2NY5LtFz6KWghcDv8aFNsBbUUfkuHvAVtQtsEsnSyrLjgx",
  "key12": "pnLBW78PuWbxJz1wsyX98CqVks7kfUgmW38GDKsKpVDqVuJ1ahWfPbMem3pm3UQSMdps7cRXwRHm42N5DpDepjT",
  "key13": "2uY7288YUuBkTWrXqdJhiHmfR4gXbEeMs8Fd1mMYLB44fZ7Nx15JxcZB5ThNSWeUjyBkEwB3oLg4NLd5fc1VveXG",
  "key14": "3ttEwp6XptFXcSW19yqkfQpSuyzpaMi5dt9gFVAA8AEZ7cMpkjznmGaZnGwuVMpAcx3BoA595Fvrexo8wwMRh6sB",
  "key15": "2mA4xxBDm63MbkqCgVxRHdhT2oWKTs9ixpQ7HKQMNrFq682xwqSaSqpP2SGcjywsAm88VGzK5RZPTuQbKr2LQ5Y3",
  "key16": "3xuh1MnmCEfnQLTmsjVNULeiaByQdG4eA3DF8WsYSZwicHV1iRPTCv6R8gV7VFuvjVCbMwP4PXT5KN3KPrrgYEZb",
  "key17": "4KBgq13paXAQbW4tjm2XiKmk7FuEknQUnnL7d13nsXeCWEP6RCmDen5H4ew8riBmCJQrKxyFycD4wSdQZm4jvjdu",
  "key18": "k72rdBk7xf6gzxQJMPaozQtRYXXiBg2soD12Td7bwd3fDoNCcFrnQYWrNQfdKS53Yyma52nRXpWUTpFsPs4Aw46",
  "key19": "w13DTPM8pmUcDTJkhN7iTVrr4jvsFdsyXu3tuTTUJUi2wSowTGGjWTcQJV3bmHh2uP6efcynUzVgSNtCp2aJiB8",
  "key20": "3T7VerPpW6hB8h4AZwxAqPJsfGt7mXxxkw7gpkHUCU8EJhMyMKgoxmoM76WWyUeed6vzVCrsshxxscW8f951CLi6",
  "key21": "4w48sVccVtQbhQ1UWin1ZkjpiRZpUyBFtPGCjn7FxhePnzeJyECURcwkGa2g1TNXnsiPbuiiaFzrrX7BeNtZiwUq",
  "key22": "2HLZ145dmwfLSDJ5Udo5QcVajV65GQXnseSppPikeBGmbe8k5Gd42Wtp5sTjERMeKiaK9kwPE8njRnHVkWV6xUvF",
  "key23": "2565exCKpdGqfhd2mdrFpAc5rjTJ1tU2iXFw5qZjN9thugUSwCseSHndNE87YRVMYF3x4kUGSXNsaWNeLdZEAqjr",
  "key24": "3CKh95Vzahk3LiHCkMyTb3JyMQY1qdpnznoLJsMjg6j77YZaCTDMFFhCSKHS9myX4iCvNHV5xzg9731BYQnFKf9r",
  "key25": "fG6hUmvYJioQ93YaCqV6BPC6haZHz6RSywYfbw58jpc8g3GJ9i8Kgf1vJhzjfrsiHXdEf7qQmqAzPGeDwfAquyn",
  "key26": "5nUQRGupbRd49Liqg4EgkSgvL1FDBroPfwXEqcVaXrgiAtpjZdxntqQyiMHX7Rz8njJX7SVtAqxW5ALV9hs3ZRNb",
  "key27": "4Vr8eXMcJyzzYbjMMPXAwg6t2jJLrNPB3NW7D4e77EwUAy2QNKFobqbfuwCiv79gpPMWRohD81tHchZZw4dEFA5i",
  "key28": "Uo8a91BYuzNhQZoLy1sH14iBYdhFqWtD8oaopkP7Nky7bqnguBFMg2Z3chUzDxjKWsopfr3iLx8MFx7yn8ZDBri",
  "key29": "5Xt4siwkeGDjXrkZHSRnxWh6u2d3NAF6fuHtjca6NeAimWPdM7oUAQMYxCY66C6Duiw6w3brB1h93tN4bHPoqHrH",
  "key30": "2NeR3hj8qSXdU1XipxADZuNjvNQKzaTcAzZV4Z7LemNpSesuszboya8mahj8ZAshnqhE5ukJ1QhXxECAjp1frNmU",
  "key31": "2bd1skZmFFGpRiDEULctYMABkLTBkuBL3k6i9o7tMeDPaMsidKvqDaoJQ5gWnpKnSRYdv16qpAX8hNXCuaJUHhCv",
  "key32": "4ri1X7S3N3yov81oVi4aUdcRNuAnq3kTf3HiH9EvDmvoTJqpXWrjLcdcBgawT7x4gNVNv9unfvQEgDWKkZ7Ec4kG",
  "key33": "5bkqLQb3h4EXAXZ66YmZ24QtShsmE9WSBNR4S4474PqepQuYy6TSkwpmZ6n4pGdQcHngPzo9c8XNgwsmnQSuYBxT",
  "key34": "4Fn3Fos1i6KL5XNYXidGRGiN2XH1vQvLNixW7A4FZxrFU2guhdgwauXvCSPShRe5TFyfsnLezcWWbeq97p9aPofb",
  "key35": "imQQBhSngdo5FLqxPrREtVGY6MXKyQ5rgEZ6kgepsrmUjxfJD38NrEJXtwyKBLh3Q2aEJAPcHyysc42Lzyt2emC",
  "key36": "5zVau9QL3UK5J9j2KKBBgHiF4pFeTMLuhoKY2oqqy3eNmNZSpsfiuSnWiABjtedHPSBUwX2ugh1KkqSHt2s7LXXC",
  "key37": "39VJNczVJ1Rn377Ee5Hgj2PExpQZhVJZLujqAUkwGZvf47BeiB9NGuCk4kFCQZgx8FTAafz8WK4FKbWZ2UgJAu3P",
  "key38": "3tj8K2coWBwQX58y4wMCucxBPbw711awymXowuGZqquGDizb1H1ujh1xB8vmeBfr1icX91wEKXT1aDG9UsgKxkk",
  "key39": "271aA4shH4RsHtv295coa8VCfvhwJziAasARHdQo2Ewyg7aRC7DPGbGJHHx6PM5mhHtUNWRy47odN8r4bEuXRHhX",
  "key40": "3KqGshrDUShatNmnwck651vpBjqaXqYBodf7RfMSeddvz6Z21fA4CENZcHjLmxjCMxwnzCMNzc6DPZwoH2MA6GBW",
  "key41": "4RfftBuhtN7FFgp7MFgBWbx39xUD7HCE8qbkJB56kPywdnTifKtRjikNMdSAGiKs4ckLWubXQyGztnnLMZKzjMGt"
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
