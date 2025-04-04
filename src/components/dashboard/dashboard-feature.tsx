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
    "56nrxXVYwGYZSqP1HeZXjuMP4uKZHqYRiBw4bnCqxkxPvpSd2cGn5rQibUirM9GKu7YVYqfb2wAmwQxEpH8fEKNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWJeZPzHYJBAz5unDbhu84pYjW6YcXW1QYQC5fNKDo2rAS89desH5coHW17kiPa75rNHJhbBR1GxAjRrEGqrHZU",
  "key1": "5F5Mjn2tGSnq1s7Lo5TKCJdPqD66SFzZVPetdFzqhG8EKy1gcELE8FiPtEtrBEcmC1xjpXdWJK2eTwYPa8XjPisz",
  "key2": "4zZTJXKF2JpLbTXR1e9FDGptTZ9kiTN4JKsq2Km7Tadts4XSnucxfTL2QhHcCvuAfJAedxDYfXSoTYLGDNHVSn2J",
  "key3": "2faaoNPoR9hfwn2fv6zVrv6gZXvuus6WqfedkmswprdkWjJkjyWXJWRSbaB456DwLZxriWMTYaXhLEayhUSyxgHo",
  "key4": "2QovRfCjejY6t8TB76SWX7oGiTSDEtLXvsF6U6cbxw2qpHqXdYbH5hz9FpaoPCprgA7vrfRJ3puM5hNhbVzRWChZ",
  "key5": "RTfB6pSvmMLudFye3TnS9vD6GT3c5rsmwfv6JDoE6to2SurMUB9k4HUnw9Tbgq4iswj9icPvNdpX5m2rYgjgAgM",
  "key6": "3ymwwXu5akcqG5m97MSyepQZJB5R6KJnDCP5pTiXZRmniw64hipHJCVyp853Eg9pfwnAbZJhsL8wfwxF6XL41WzT",
  "key7": "3BZCZ9ZwMjcQzcC4c9jz2YLdnyxCPQ7Npnc8MaKhc11BiQKRzUu9JdExRe4w9UNdsdHuFNGnbGKJcid18rHpDA9j",
  "key8": "3oXJeKY2ijiex6rioCZpoVrVYBayg587Bey7aDhQCPDbmo3Z3s5v2vvgFTUJNVAMcFdVgWr9UvNXdNvjBSXu2LYN",
  "key9": "2QsLWCC6UFtYR4n4XcxUdLX72swXa6rBUjNafFDNpEGGJbfScj3jkujSktjTKSQQzax1pgJXdEN5aMwMD2GNv64c",
  "key10": "42eYU6a16g5Z4KejDijVnfjzR58HGT3f399KhLomWPxXeeKstXc8oiyA4m8TnfCv7ZLuQ6mbjaTem65vGuvUyZPU",
  "key11": "26VnWtJVg2sBgcrp5gHzuKRfUqhFTwJT19VX8Fdt96MtzbKfvMNqh23i92i8fQm5kEStbnfq93sgM8BxykHvTS7t",
  "key12": "ro5iXajWMNjyxVa8oAw6rN7mivvhsfQLbLa7z7yY651TP5mii7HdkqxtM1wz93jPUp3hzWzCC4P8jvKf1uAWtEQ",
  "key13": "VJyyx9KwMb6LiU6y4ueSBL97L22QxBpNPiEEjbQswJYEzhkmYBsRYbeAMiCQno6UvQQsbUfyoxNi3jc23M4mgSd",
  "key14": "qY3Cp5XXn4f9weur8hax42SadLbmRJzf233CyQiADsU1jdStSFmpTLZdAnen3JyWbrcVEeZRfJqeJFtkpZEq3Pa",
  "key15": "2uit376GKvkU54954zeGPovmYVdSVg36oU9MH5qdV8wAYsZEhAtssX8PYiHUgrQcecoJBSUn9inPtDa8kQWpMeNj",
  "key16": "5KBkqMSMWkB8hxq7L4BZznvc1HLr3hedV3rgxwUrPi4SrE1prhTqRZfDkRkrERMfkKAhmkgVxSANqvxcs7uQnQmw",
  "key17": "38ccL5Ms2M2MFJNLTauhhNPHfnuXzNPPq13ney7CQRxWo2nkZHdNwsKUJXXCTUmgMe95bBPBZANGvDomHxCrx5AJ",
  "key18": "Xi5dsU16Gg1Uj6wFYb18AYNiCC9CtKZPLosnGZx7X2cW8TXhFiYfxCRsju8M2iAbRTqfYyRGSDY3Mw79n3KP9Uf",
  "key19": "4knHAGhNQj1ngXXZnfMSm7rkynY8CSPNS92NsP7paY3VUAsNhTekc11kwwvRJyu7HxDAtfXRtPcWG2529kBASJ16",
  "key20": "4onVrBNmgEnhXfp3rPAFd5aW862g3GcN3raL3PpMriujhoVf3wpGhmwKs6anHvbNP3NQPHPHMuaX2BjCQPiQ3wT7",
  "key21": "2oedvdPsrHN7B5P47wKEALFgT86QdXUM8TpMBwCwESpB95Mhxqn6VBgQ1fXbj8SpfyENvkNvvCrEvrpgAjwLRtS5",
  "key22": "3qtrXrsEsoiBTgCkUG5cAEuCNWcxR1xy8wVGb4eiC6sRQSi9nMKexiEDgwqkuQEeSk2Xjmeo6W7kLKxdBHhJnFzL",
  "key23": "4kK71PYrPSKioq4PGEV11ZTNF12TFdrAFNNtHfcxiBoyvQy9CYLsXsyc6tML3f344h9Lp29ozjxBC8CNtVDUur5D",
  "key24": "4hstit4zAbqZ5Sxz2A4dDUkxL28jYdg6AtCCwFccA5cEiUi7BQrnoxZAjL4XJMGVJSjbty7bQZYUPGiwwLBbzhGn",
  "key25": "8pL5ngtVBcKgem6zmGhJ63P7vUiLFFDWB2sNfQGcM4zGGX7mwVHiwhUjnBQRGs6EB2THrfKudYGga3aDT9f8Ucp",
  "key26": "5fQ8cK59QY3piWJvu1ceQHs1oo4SYSLBenYRXP4YXqCCooNQAHDeHzi1PLZVX95pKQQ6heF8vwgm8BcxsDLx62oN",
  "key27": "7udNCYRKERFnA2P4HK1k6PhvJLMrqnjpomja5CLW22CXPCsVc3X5HDXK7TgG2xb5XYZfo79qkXk41ys5JAXrH8a"
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
