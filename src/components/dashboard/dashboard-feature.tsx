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
    "4ZsywXEsw471LMS4Uay2U2oUsYUbU6af2hEyvjaASX5S5PLSp5dR749hi6j72rTkb4SpgznEsQJuaDGCiYuuLNTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hei6c794jag841hiN8o9k5PP5dgiis4xyeXcPHAY9v5jU2TUNetFDn1SukPZMpYM5GLcJCf9Bz7tiJ7ExZfwc3k",
  "key1": "365pcEbrCJPXk6dCXkoet6Gz2awXMNvyCiQVs6f8GmpJWzN4gi94ULy6EH6JvLfTkzihYtnVHQW4Y2AijviGwyuw",
  "key2": "nmRGZkyjtAac1EdEdCV8o9E89UzBRqiiMJu78Xdbj9a64RjkSAD8pxVASMaXCD8QWrF3qDBZuCshHNPzHppZAcF",
  "key3": "4fU2RjahgQZtCsBa1y2uwU9u6BfJ1NeFJegXa2r9Mgd1NHiDRmhP9ofJxjKzfCWmD8gK7SuQFAPjKLoktV2FzQVQ",
  "key4": "4Hxz35C4VuBbBqjoCMsfMGXgH7jGBR75aGy3pNADFg2KtwNKYfojctKu8eBTNW2A8VYYnW1vEpaKiHfozWnciS7p",
  "key5": "32NKQhFdVF57i2Lv22JSHtS9f1b38zAdMsnwVCnq4EwBBmkU37zCAGQA2PimRyZFAf78t3bjesNLSf551VooRumr",
  "key6": "3ffq1mytPfcEPubpC6AytjuSocKzSY9A6BWHsxS25jVWSm7DxSSEVvVGbeV9FMiNs8TQASiWeSWEu1ExGo8Ukzo8",
  "key7": "rtqWGuTErjAF4LRbTH8KoBFYt7FpF7Yhe4Ky6xueFyEvkkdjJWvQnnXcYwT2rmMDSdcUNVyqW31qasEwCKHmWeq",
  "key8": "nzAAdhEqoVHPVKtU6hmie2CV55QBQ6ow3XqGAVt7P6ARa5GjsYuUy25V9EewqTVWG16YpasPJWAKy1aegh3s8Qw",
  "key9": "26pkKwc8kwLHmLqrYTV7Bkja5joFPH6GqCqVmsWV1ZcUPdV6mx3y8EvUzSA2mvXoZyzWm6cBWM7CjCuC8CjqWuvp",
  "key10": "3tk178ErtdWDcV3H1jWd516iZR8TuUL98kJeXNNMtBAD6WRZg5YGUJmtTse1sGt5ebdcgTDWBCrtNtunzwXFYMAW",
  "key11": "3PjXmGZuSWzCfdztz2J4kiurN8nFqZaStenEVG2aXrTVGrrZ4ko342YXWUFYbskHE2XMDGDHvUyYapN7X31GrXSq",
  "key12": "4qYBaH4rNjspywvcRLc5s1EZCDBjZsg76T6Mqs53s3nS95S2FdKq2ruEXb5XPeCws8g3PjwcU5NoB8rZadJnpMm4",
  "key13": "4NGNPd6cAha1oHmMjdr9ydio2oQUdSFAsdm2LG8iHvub3tt9RL99WNS2fdzXDfWEJZCXCR8mdDcUuGa23pK9zQ14",
  "key14": "KfnTwgukCNhcJyWkNVAeTBggKWqUHe4w7pPG43H6FnaHk9jD8fyYBHzAfzmmG6BnpVYgTNDKWeu9SG64q5Xm2Tt",
  "key15": "2jXc5t4W6GYvwTtp8F3W11E6h4dUn2vMh6gsW8KyPSXZAW5mANzNR11ckb1sjauen1E1Y6qps5jQmhf31cQX9NtA",
  "key16": "3wqyHsLaVKcQJDX86tKMTBivuadeXQA6mZwXRNyUpi4XaXj7aYkwX3jfWFGWsRVTmtt33txoXdK2VJb54kYp6r6F",
  "key17": "5TnyPyttpTQHSeio12h7Bv6f7ULD5Q6cZ2XCHd6HtiBPMJka5TATPheSgWkJLmorZBzPnCvP3czEfCLBqqhqJ1JT",
  "key18": "5Pfqvbt9mNpDjf6AvqhcngFffukqoDU8C17mhRyEYxfKnA9ggvpqqeGhTUt8dp9iAdY7XGjBpposmQ9aPHNWXDoJ",
  "key19": "3TkcvCsT9k24vn3BovDSKKJjfTNuaLk7cg4jFujZY2XD57UBFHkhmzKVHyTKEvCy2rgjGJLTHJHgPZD34SScbD74",
  "key20": "5JYF7KHYpviPu3GioZy7ZZbQGp9Fwye1im4do3NqT3q4xdUgs9756yCkwg4hPxbTLAzMWkjbBSUDfNwzSkYZ2rej",
  "key21": "3TQHfwdmrcDU4pF31v4BN9WK92qG83WDJaUWvBhqbeByaeSEAZJC7zGhM9M7kCZjhVCy4nbQNqayhnqAjf3eRhZj",
  "key22": "5api5aqmY3DnJ13zqFYeSHBrNDS56FxQCTFjyME1bxtouLzSBJVrmc32pp5jp8E2rKqtLXFEsukMjpv9iCg3W4PV",
  "key23": "5N8ghhrwrNJ74Vg4vPSgNXGQ6bitgDYEC2bXmabqCLfk6efWBeUDUXNh7Lxb3RW4wo4KwvNUsmp6hTgqaRHETZ1A",
  "key24": "5KsfWvGT9VZMBvuTp2dtdrNemGHbDUSbshbWJJsLRHwUzzsTgL3qHCUwApSh5JAUg6aNYXdR5sdAF335ZnDpfhx",
  "key25": "aFdikFr6EqBAJwXqjrQHVYrr1P5DkKcrawFJLbNntyWtLjBGRg2qgzLYhJ9iHQ4iSafgdPQLYy257iCs8fe8vj6",
  "key26": "2xJQBNFwE9CyN6QEpK5oxMuWHNx51nQqiDD6GCph43mfDJZZspBPMKJazhw8uDdB7788ocrbjBDMjsrEPHJ1wqp",
  "key27": "5w5VdboBGD224Y5HEJmMGAuzqeRLLRkbn6hYAdAy5Q91QkJk68cg7KruvdHqKX4Fa5rvGU4HCwxa4FxnPvcK1P6w",
  "key28": "2ZrU2aDGQQxwmn4ToEg9gRNu4DWKmL8u5YNkwgQTp81VcixgdugNh5bG6KHSPibfz1XM4mh5tFCunAT8ECD6DjUQ",
  "key29": "2eASnw6kSZqeEW1ksNecdYeL2eUPsrTvnvEMFBFVDdEBiMhfs4kF34gvJG88KUBnKUUFoFr6EMCD2DdtUKqdDLJg",
  "key30": "6p3q1EbV9gNSRaSsRhZPrfd7gz8AuDvWYRTsqdkz4ZUd2dPAbYu36GAVugjsjoTbCrVYgaAg2oNLqCDRM9cWTf8",
  "key31": "4V2f6Y7h6nvuXVVG3uYDhzyXa8zwnL2MjkfcpH9FGWJ8ZPNrkG8dBcwBnVqp2osVbtCZPUFryGZkLWYKj9Yw3zJ4",
  "key32": "3ifVT5TciAN5dY4oR7dQuyQZwDtDk9Po26swhj3VYjbZQT1VNRLwmxUF2dRE8QvjmvpxenfRZ2XtP3URsW2XNrGS",
  "key33": "3TZ7LKMYBG9io3w1AQ5o7dEqzMA4igcLDXcKRKPGDcLzjKgVgUr9SdftHq1PncGZ2LY5tqQ3eXHeD8VyTBqpEJTM",
  "key34": "2aZNyBmwCxDg91MfvzBUAMBpDdjVusocePmS8bihMrCUsjP5r94TfKx3GWbUfjLVvjM6NAivQ8d7p94wW7HHqYVV",
  "key35": "3R85DEHTLAHztavHXJ87GUnQHDx7w2MoC2TbgnhEJfiwUVFvL55qMrHDUccpNnTMxj4tQbmxCp4ja42JJgFUBGGt",
  "key36": "4wQyTpn8pAysUZ5Yq1wxHaL4Zq24cVnj7NmRpv5UMxhhVKsaga68HMgFUvKAnSG3iJ6qPSRTgznZCFAY1knnfuCq",
  "key37": "5sdgTReeSNomicXvF9bsoWMC1c214cXgAaS3jeh6JaL4prAA84tmU7jRLN31Puv9vNto4Lg5BmbKmmNagStVRMWi",
  "key38": "4yzKYQyBKd6MPH7jam4Z1M275ZHAK9EV5whqK7kKWYhUtGqgPJCtDcr4H889QsKyM1U4TALrrKd7Rc8NgQizRA4L"
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
