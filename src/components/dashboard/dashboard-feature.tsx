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
    "4KWmJh6dm3Pra7xtcvuxbM4sfTSQXogXiKatYjfqo75TdTWef4G3J2TCvHzBRgaSmMT9jq6uZqM6Dejwir7vhLLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHUZ5Y1hMBzi2JGTm2YQuZyu4Mkxh2L9cPWuhpZsy1GrJr5A2fUaxXSyCFvA3xb1Q1fLkwUB6fTthtmHQ6gbKtE",
  "key1": "5ywNRdCcgqdhDT7M4NXVwoAt6YqomtoMbePEFBGZ6p1eMvAigkAhi3xyeoPy6fak1NZbnVz3b84gku49SjcRiULy",
  "key2": "5u5mg62s6VdDzqaXRmx3o8Paaq8oit92xuuyW4DcorfPup6nUGH2ygfsaad26aVNzi4qsAQgS2m4MZ4Jhuk9HNEp",
  "key3": "4r3DeMdryQSc4b3SFfonsD1kyf9PA3M3nvBmD8RM5ADPUktAAoP1BkS5yHR1V35mgcrYkpiSF2v7keDhLaXnGjWA",
  "key4": "2DzrzhVuunSdBAb27VaLDJ3iTEUAK7HKATGNMwW7jvu8gErDZMdPJNAoamSRuKy2NkU27Pw86ybUaFspuq72veFB",
  "key5": "5kDpjTRWGsHfUy2xobagEuZBEWvWLZxc8WtJ3Lks5UN1RY9t7DBzuzyAyMrxn6WWqf6PvMZbpGuZ1uLTtJsX6SBL",
  "key6": "3pjfQJsR59K82KRbMHNDPgZAjzNExphigksJ3vWCnUdWodSx6RMKwEpJTyUjWVLxw8pCQMwSbWho7BRqaEE8djet",
  "key7": "5NggFjozPRsgsUUipQ7JzMS3CnEjUaJcajoGKXjVJYcj1nhVsbsLWyYWKrN1PLeheLLYAZfM6JYLNwfSBCtSKPH1",
  "key8": "2QfbwxzRSVjuEQjV1QExZUhbQbPfY8KYTGZKfatWuL9NgRmwzdnQLTzAExVG9H7EYQvuF59UgYF2GvDH8TxwnXw8",
  "key9": "39TiWT2sVRXoyFMVQtt7JaRi91Kc6R3btYbmJNnWhU5FvoQhTAoCR8LXcmXvtcdnspg3aZ7v4Npe1SGWz1rPE6Fg",
  "key10": "5ZNeMTNMjKHjDiLcS3rAcHeDKxnfFKi5tNmZxKG7cuLHdpUt67Y4htKDehdUzsELE6JF9dPDqMzwgrRyp66Cmffd",
  "key11": "Fwwp15jn5wcjoUZGH88tETY8ibeD7mPMGn84n3MyQq1a2oLKsZ13MJNCQ3P1GAytrBkvUnrJUhFfRZ2i4FLDvVE",
  "key12": "5pwhHFnxkQWAwqkycDRdWC328vv6KYDXuKWGxSvVFfrDn1CtvZpAq7fBpGEu5QYg7yHjyTLyhLLsAENxubGh9sjL",
  "key13": "66E4ydV4gN2e7rjHgpF91q9JNGu1s53Kfd3REDdhLvcmCUXSzhUweaToVVMoF1Fbx8JgMK3m9YMsEATTHWmKAh1g",
  "key14": "4N7QgD8fedBgZ73vbkA8UUXqde5iYbnUbcBABwtnT4HXdgHDM4HFWKrkigC1j44PuQ1NKekHntPL1UKAyFPGLZFu",
  "key15": "4gNEXgoKij3bZPQjzyQpbSh9ovSkDwAGGmbDH8nnCbJ1fjEoEM4gqArA32HHsr8Ry7LFzN2XdM5M4GPPa51XJoz9",
  "key16": "5ZFJYQiyiusaTjEU1dniqvevJ3MfaUmLPs4917Tc2dyqMkSHFri1HH7byNvoHaQdq4AsCMK9c5JTJgFcX5kwWych",
  "key17": "5STrTbyNJRkrDZW4dDU52oftfLVukYoVdu72LExDjUoAsE3G4gEKvaC3ST2FPo2wUH797zKxogDRKkdij5bP9bwn",
  "key18": "5nEmNmEonmVMEqDYCFbbDDrFxAtYEFhqXaHAhpqh1eBTv2aBFKSAKwnYT371tgMYRG2MUgpGAMV52de6F3xhvknt",
  "key19": "5QAJDriDwKkGs9bEE9gnz9PNkopUmaR5LpyxezQWrPUmB1EWUYHZdyw8iWXMuL1wE1AC3pm1YXY4UbbRSQmAuLmN",
  "key20": "Xs1J9ms4F5ReUgraykiWoVfnRorUDUb19ZZLYTuTRZeuR85x81LZ78eJkzpYQXPcsLxPgmejoUPA8Y5nQFxYq62",
  "key21": "4RjdGn4v6NuZfoX1Txc6nFsxoJYY2HJ8jXvwcA39Em2mrSX8QitrwBstrJoYjumMNcj1hkZqq3ZVPUe5p9ZLAZ39",
  "key22": "amTpvEhDA6ctcjVF1SvfPywKMHqdcoYMCK5P4BPVF2vZdoc1LJVS5aQrayML1HXPbsRKjjP4ZhJVyHGdGhSgmbU",
  "key23": "4PjZVGzGLrMKu2N5dmFdGePbFkFwWFZGFxenrH4TibDPoC8yuH3PoA2uP1iQMJT9qxZNsAnRohqDZooUjMmrmdHw",
  "key24": "5xcdMBBFYCw3u47NcpjHFyLrv1mLNKRvr6Zh9TDU1QWnjdX4cCwZ4HWdQtsYwu2wAE7izbppf837c3UwgmWJwykM",
  "key25": "W571HSpnrA2ozpQDDUF7RMECmPVmJnK2rGPyZiFY29gfkMamd4pow1Rrae5DXw3rFWkyafRJeSarbhmvJgv2eaW",
  "key26": "5FXVtNg41BnRTh6JxfK798wkEj5TQKNLLsM7YUj8JeCADY7LCqjyjV47np95VbAkJAHhLQis5CxLJbGqzPLQLv2j",
  "key27": "5b25zvWSM8CnAtYgeMB4WdCRzDrzsoTS8eCBjPfeF2j22dXyJVkGtdgnehnsNPjw5CoWp9N3VpDLZjxDARWPQV6P"
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
