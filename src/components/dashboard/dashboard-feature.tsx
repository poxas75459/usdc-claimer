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
    "3phdNP398rQND7DWDXzUFq1vzu6kMCxaAzuxLWqQteLCfdVNZyzkSTxMuFjvAk5kJuF3EJ7RUkxDrZ3zuHDiipWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urbVer2AaZNWsRUWNFBGtkp3BrSJPyGqmwBpNT7ECfEYfic4oCvfeMppfJ1z5atzwjb6JjgDqM8WuFmrf3252in",
  "key1": "64mdUXM4QyNo4eoyhg29KaAX1CdRM7pXWTe7qWUuMWTqRXheWPLeCJVNz1yz8P9WAgVa1UcSXXymndTKhiqqjQgo",
  "key2": "2edfzpiaRVPa9HYT2xdpwwxMc4qAGtDn8hufpaudeWd2rAtg8Rwf9DJPBekdStnmwjuoFrDMR9r4Tg7QwGgERxxC",
  "key3": "L2CT2muu2zTLkGKcyScm5tv8ps2ixAD4qGhwXLYqkJJUyjXgwD8vmR46Bic3djSGmFtegPWYHp6S5NTjm6tgyGe",
  "key4": "5YxMd2pTxG8Nw11RMfCS1mYWcv5fiybqyC48icygjsWKqfkLvy6QzKcEwW2T2ZyQsNezauNkUeb691JGSemLqvRQ",
  "key5": "26XXSCK1DPH1yqHLdGPiWwwJSdSJojAjardM6xfL4p3tKpitiYdHDNyEvc6zPcBP3poFPfVQzLHq7koLXNNtQHXk",
  "key6": "5avHbTYCmVBCYv6NfJ5a4zh5mJYQFEbRTGDN4oPFkTrJmXPysXDBZomfPSsj8JTu31q6VzgwD88UKUxzqWCnwE27",
  "key7": "4Rq49Ci8fQgFr4Qb8A8LqXYCUeX39e3agALALDjiGih9548iUxMmSaGTiuVbaGWqg3ntWrE6Mgs2EHvUQ6z4fsFh",
  "key8": "5cCizcxeG4CHq1HHUHB9Xr6gyCRxEMdVGunL7F2RSK66MQbux7M2mErJZsdettBJY6k3Ge42tyxxKfr9v52yFNJZ",
  "key9": "L8rVhXsXVVhTo83mmPeRNz8C5bsvic5J87BzT4T7WNKjZJtvSvoWG7pni3rADgB8zpbU16UU9nqz8Yg8NCgoJ7p",
  "key10": "3r1F8NYD6uzjNcytJyKmdbxfrpocSFrch7eDCDbHmxfWeZrtkrtLF5y7aGajMcdE8fyuyAKL4Yu35rjY6Y8fNHeV",
  "key11": "3wCpUeXy5bzyFxxo7Yib7dWWq588hAU8Rwu9a7xH5GkMgCfe11HiUQdpo8MBWSSr8P1H4Zuz6ztULam4JtcbysPA",
  "key12": "4NzE9AcxcDhNN6LnH3zXjZd33TSxM8st8HpneXua3JK5mqW7q3JujC9tCnEsLXE1gAvZWj2eYhDwcrL3WAAe8gKG",
  "key13": "2AHvotvyjPht3e7b3ytBgBERHXbCoVVn2usGVkfZRbM5gTH33hpSb7QDqksL9gggRUSFYWsFRagu8S7s4quDoXBi",
  "key14": "3hWi7WXAbHB4x2WNfxXZ7kyR8wR2aT2UQpTMcjAksdxV1cdUA1X5L76XmdvLiRCPf6v1kLVuJLnGvVEAXCJSZqH2",
  "key15": "7SUqAkmr4EEzDs5B8gzs19qh9AMfZCLvzJz91ZEt6LQXYJD4kGm1jesv4eN94xM1UwR2bKpvjkCnkEZeRxhVC2F",
  "key16": "5wCZedYUiAwdw6KfojcLywdpFtcat9pX5XxLQFHoTtUxQ3CbevkSMhAVvo45qpHHL3vUGfdvP95kgZJsuNcFxbab",
  "key17": "3T4DWH8etuqjp1p2QH95eCqettUEpAuhy4wJFaD3xG7D7wUReyw2YenK1JNrwna8xy2RQu4acpGfZQqm5RpDNw3H",
  "key18": "66v3KM7ZuZz7nwmsujfUE1bnE4MfSUzKEmj52Tuhv6JK6k3cAPLSAtdWHwwgSFkyemEy3iR5aQ9cZ8s2bXYYvhDn",
  "key19": "4FkwjZRd8bdpEj9pX8VtLEjSBQPiW3nnKdc4uXsAHsqahrAjafasrpcC8CxmZXn3kdNte6Cz2zcpL3r1AHxMAveA",
  "key20": "3owed3v1nQTJMTGCiTEa5m9ew2ziGSXrDfJt2MrWKbv8QnWPUonGkHTpWvmHyCUFEocnFGUbYd3agMK1Y8RpPbzS",
  "key21": "3zi7mzpnYWa4SRBDkzBXvf7UGWbBKj3wtu8QUprGUBTbnAQJcuyRGLpu82XhGacKbBW6Skv6tFuzmLNMhEFd36pZ",
  "key22": "64yk2WTJ1XTRmi78Mx7e9keMFeSQKWXjELyANDEXDgLPBCotvpkV7qnqVLNQo21UZ5oDde8UEFjErj2UrJwWuEVA",
  "key23": "5J33BvVKRk9YGUu57YSX9nLfR9z97y3C6QXqXWWDw3SqsDqV2oGjt66KZjDXHpcMLFu8Ly11Ee6AXfFzVpeJLCqq",
  "key24": "3NDSMYg4HCDP1W1S4vgn7eTetRHteBBp4JvP7DmPdsuUWQB5rGpv4Z6EeYBnEDRqzvPSp61y4WqJPEw2d2KgufLT",
  "key25": "2AfinY9n9oSUmzYvcih5ftwQrLHgvCF5mGTBSiG4TvHVJTJGytxoQGFkr4chEWjFYjpib4YcsaSfkceVZfbUtrN6",
  "key26": "jeqEtoWJzsvtqa4W6X3S7McsKt1Vo212apcbEtcA7czH4LS44fm2dj8vhKKJSYot3ZpDF17BcEjg5XZJbmLS5NF",
  "key27": "2mxQHUUpQPeVdLJPrXqubpxjCm6SaAFnDTrUdfMwV6888VBcSqFHKEjyjLgXfYbFzv27TrSxD1YVTDwUQXXtN2gA",
  "key28": "aeWgTxS1RYXrhPNgYKKs4ZAVRF76K3NBgnx1zkfTK6eXkxCgzHYaf5dXpQWDoSUdh7byDq5jtjpXEccrknjdVuE",
  "key29": "315x8L5X43W1idgc93CSbNfYz86mNYqu6rm2GGn5h1invWwu8g1uqBe2WiQkDFVnHc5KgzLaFandE5DyeRXx9kU3"
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
