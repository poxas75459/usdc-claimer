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
    "2fmtbjAaHm2R7JvVhNjCDoTMiFAzNaiBuvf514PTRRjQEVy3xzv8qDeZedrqmdgJGUJVnGfbxB5wDbHs6HAAADEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rde2jYmcFuqYRCmf5PCEex9vdaxoPBGyFzk6UoVF3fxVmqqLbp4FLd1G4BczKrLVgS6pAhX2v8jrmDHFkuPCRNp",
  "key1": "Pw6M26Z7hUQhcJAJLkg9TcEZH6Y7vccCmVr4c4yHdxfDhXKb9EPoK3Y5BzECrFD9bxKbXX5hGxsaQXyLdKJ6N3v",
  "key2": "2nujuu8EX58Jvjfr3hYeWikEpyhYSgvroMLhVP8QboAs2vC8HsEPgcgNJHRLGog6Sdr8yyLsJmvQQ4hgMBZk4imr",
  "key3": "eFcaYLgdHqQEfwbwxbRZRHFYMiQujC1D9D3NQ1CArisXxEGVpncNtD9QyNafQNZh55TKrSDJscPvB42VZJfPCq9",
  "key4": "jLRNt3CKCp7h8dey8CJWUP6GvV7SVTCRFb5dzN2zAgqfkBviQaSLjb9t4thD6SQogjxakP9PaC5MpqAMgG7KbWQ",
  "key5": "3gmKE7fUbT3Qd5nkvbyRMoRKR8eoGosz9NkWdcMcWiPMVmysaueZBqYFgpu9HLypkRMKzLBci98AwX5R2fAVQ4kT",
  "key6": "3GRqPrM2kUYi4Y8rsdBZZd4WQ9LMecKqJNUE1wM1cPAwJWcmj7QCEHctz8oSTV7zqX9kuZdgovCCXYuAtxVW6AWV",
  "key7": "2o5PPF8wMvaADoUx1Bn9HkvB6ez836rL31k4eZA4g2z5cBErU4nXKv1Ja5mjdYojusAUi8Nsp9nVv7wEzkwWgVyV",
  "key8": "4aCr6x5m3bjuLXitpeTXmuifsoh4NQ58Pe2xYQFGH2TdFQLgqvNUwuJzriyUvtn5d4RRHn8sfGxPZp88MP2CNZXQ",
  "key9": "3NQ82hfRSNCUo1kPxQTTdhmGRaLHRY3shzxX18gZRzC3QE7M97KzwwMiSMU7cnyW2ZF52kat9gCP4ufDTJ3AofC7",
  "key10": "2TmkXXLXenLug4AChrJBTvYh8Fh2SB6Lp2sQiKZDzdCrFtFg1jxydJmd9Mgv53DJJKsZcMsEvfbxRo2mi1iDyPS7",
  "key11": "6MyTqCwQEyTUZWe8ikZa6UyyLFWQu18LJiwJuzSBGmqgsTjbfFDW7XsKnFDdXcWNYxkfMzhzjiteh8PTP23DKd2",
  "key12": "3MECUkvcE4p1PhywVMbYKrSVeZ9Mz1H4B9uWL87FQeBRvei63RmFHEVB9cU274cdaQWS76qJDTGv9arb1gNx2pDG",
  "key13": "5R99Shq2ywJy6i4cUAkaY9GWHq1ti6tsne53WqvhJtqhmoZByznZL89nNyAMFEhpgnT5Vxfni2vNh6okyD2MR3Cu",
  "key14": "2hbx6qEfmDhaJHNbEdArr7Ba5tqzbDC3ycVf5fXKJK7TtGJxtkrkWeXxLaFDJEAey8vXkLVGNJMR9Rpuj6aA97jU",
  "key15": "2FC9o7S2dPJY7o4auDQGHXsLef8tLBavKbB7j1gupLKe1TAGNBsdMhnJJWaFLxRR1V9dE495Cn7Yj45QMNk6YEjx",
  "key16": "h5LqKgnPr24eXRrF2rtMdgUj4yAgFi4gZP4ruEJdEkCA13dqDQvzvMrtyThRBb2CJXmd3tetCdoLYTYMhSpjcKT",
  "key17": "4W26ZPLXGktWFdHweEru23Bpnz1xTKcBP77bAfD24r9anTifCMfyeGjufCCMccWrqRkAfJmvQgdNZH8qApWCsxNP",
  "key18": "4TjFGijSqQdYqY4Q5TD1iZDAdfwTkmwC9evvgjuDAhj7dAWcGWbTefURN6i44cJHpBHWSFJcfAbm5j8XAreMKC2n",
  "key19": "3heqAPS5o9UEz2TV7i6u2SR4jKmXaP7hRoZTUqTsyKarHTGjQgJidZV7CztpgrSwHUAyhq7Wki6iQzrisC47cbtU",
  "key20": "21Lv7C1UodK3SkTcbikTCCa4B34KXhJsfopRdZfeSY2aPcaX1z7ZHS6npsHPVC81sxyshXsRPYDMmv2w2XMibk27",
  "key21": "3QnhgKajevTvjDVNkySV5GsNLh5zshnjh91hPBCKrGAUs37sKRZPEoroTsHintPa7FG6iAxoq5DK7Pbv7ZiyCVJ2",
  "key22": "RKNyd6FFtVdky5VtWPTvv7p67oW9S3mTh21MsYFnqhF8YbUGVL89Bs7H56mq5Lu9Jqyw6iS3yXfCrrkMKRgvdnR",
  "key23": "4bfaX9JquFFFFgxhEo5ogdPNrSfzQWyruA7MGfNvE6AAquYmXUebMpradoQYY8EhL3ftArGv5LSXAanBnYvLDyRT",
  "key24": "3oAv2bH6u6Tk3jLGBCqnd5qpCRWuDr17bmkpUxzufqvU8uSSuL1jLoxCSBP1hZQvrTrkhwVg1R2ZrkVzSvBAZ26",
  "key25": "s4kVSoTcsEsNzw22jQ57yH6ebVEfdFMfMWQTzRzjqPHZRDJR81gToBoTP2TuwYE4LaEM26nq8HFvQYJNkCE1cpL",
  "key26": "8fkJF7MwqwXBS8CtXoxfvMQYsvMb6aUPXhiQb3UXMd9S2a63qTBUETSyXt6k5etjGuL5xdSEVCnSxZPA1kufiEA",
  "key27": "ZULKcP4uJAhvL1hJq71U2voMS8629hWNk1J6vtSYcNF5PLzAGNgJg8aZcutbxgxTZwSE91gWvbwDRLsm4dP5TMZ",
  "key28": "5Ga8dx4L7nxf3ZRmh9vVzFfgLDjc4ZoNkAi5gEUnQzSwG3gjNjdGh8GnDMeWhV5L7LjoPb7Zut6QPQhZ2nheDW6Y",
  "key29": "cPKQ8NRZMtR7douKucQUrEvkQdcgXTw7eyMtuJKebbK2DDYuHzeycn1xNPWkWq2hAmmVdmaQHteHqiaC686GdPm"
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
