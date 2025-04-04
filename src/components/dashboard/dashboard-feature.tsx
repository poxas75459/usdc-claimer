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
    "5fcqHK1sDpMujBieFmxCEcEx87mueivV7ZWNiv6yx9zdsR3Lb8a2p8uwePt2ip8aUbfPyYATCemdwajvfMB5MASC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TViWpvhz2R2xZ8obHpRvrEM5mqjqiESJgoBwHhqhPTcrZJhjw587qmDEd8rdQYbUhpGiPWe7vHR1WfPiRKkP3yH",
  "key1": "4Nbw7CNKYurHz7ewiRZe4cnryo94tEou5pHEDVwUYvh6nrEyNJiebx4PZpGNMcpC55zNmGTb4LnxmYrZCT6rPDe4",
  "key2": "4QEDJCqM1t891JDvXmwskjnnnCd1924xT4YWhv14HqApfde8obxUEHqTLU1LjeZjRmX8m69JpK4V7Tnxd1Gx8HiS",
  "key3": "3GpnQ1gi2ib1bkMTQA38HJuvrdJFfJhzXjJ1EWkSpP5xAgrc2yzS5Yb24bFHX1o7Khf8YNyNPhnSB6aTvhfqGMcP",
  "key4": "2hJGQKjv2izYaZxGWFvWYbFp1K5qmoprXuQCKP527WfjBLfRrnDGLSvuceuT97amuPjxnH2J6ABfydPhkTZQkUq9",
  "key5": "4mVA2cJt4LYJH2kjSSds44JzDi9JioM7wGfaiS96kVDeCQfqts7d4voRraFrdCFj8u98AabE5WwMVYrpFoMnNk2z",
  "key6": "5L1UDpEq42h45cocNhsoUWLkT2V9PxPcdCvJVWZLcaJ4ie6396SnqFjCCef7FPp2ugfRUzvqRjU5iuuRyKAXAHzt",
  "key7": "58DbBNX7Fwk25tFGptV524iY8mzWABSVfayBTomgBFY2neoHimTfgytJTjEKE7vPaKhQBvn4b8wtyTMdjkb1AhT9",
  "key8": "4QyqcCnGZZvSSN8zB6Fhfykj1kbm1heXc39ZP8KbcHvr2mY9aC4mgbMSMPeDrKEYeCzt9J9p9ZLiZBKx2jE22amg",
  "key9": "3rufVjfGgWvq7XgqzVex9FiPvDty6RhkHV4ZnJ2HzDWEVmyLtdh8FK7xahuhvS2ZPZ8RNMoQZXawkd4ENKUYz1uB",
  "key10": "537jCF7puthNk1gUBfWHgfq7a6bh3ZKyyfakXfCSDMBF43WspPm7qqkX7hdFH8rGjvtmmC4GuYxvsDkyNZ49kEWH",
  "key11": "4R2Rz6HCghxW6e5nkPBptayiS4uyQ4ar2EGoYqKRRMnhccoSosqZVgUbtsYC9kVojF5xHmSZhw7ZWJCX4dfd7MiT",
  "key12": "4QmYKGztCmi717zH7qSqfBSk5wy9bJs5qvyV2kYgoaXjoFTfiChAxrAPYNf3H7DTYysj3LBR26PhDTS7KBhw1ja1",
  "key13": "453c3BP4sT1mBosqXK7BiSyxYN3rt2Kz5vLVyV4PR9ABXcaswyat5chaefMpDTa5DTikZUa5PQ9TrVYw3BiXF78V",
  "key14": "4zjcmCdsj478NKsJfYouYrGYMCwsALj4dBWyTjZ5J7dVpQC7S8RcyDg7n88y5vCEzUGLnfxewPcywPcBNDEM3pNd",
  "key15": "RJsSWyHVubAH5bE6E8V94jTioZeTkMr2KTPWN83EpL8GnAUg3SJU2j6uRGZ15VRjgkG9LTrM8S5daDw5RZRyxtE",
  "key16": "4Zcme6JqZNN6NftjYtoH7xnu4rZ8UDtpuiyRizuvgHE3Pkux3Cj3ZabhoCUs74kwUBHvTzXH6DDbcw3Bg2X49rUF",
  "key17": "nLan5GLoA9GroWS6q2zYfSRYiMwFpwk4bgQrsXJ3XMEuDYaPFovX3i7W55KYKbKER2qZbeTmyHXUXjtpWHQeUSn",
  "key18": "2zDyDE7qi3GJCYgiotibFovL3S6z2V1bBTWifVW5Jb2v886rWNmyHeRiarfxzafWKsti3CwD7L8ZEm4gYdCjwSdd",
  "key19": "3oXw2MDPMFMTQMvp4dt3tzh4addtXuU5guC4HxZ2sdB2W7eCd25zK7phjW7JKGT9Q5vzxzK2d6piVkGKA1SHLRWF",
  "key20": "4SxUyiuNziJvFWGzDuiFXt6vRY7ezZ6WrKN8nefGpbEzz6DdK4y8ysUzCLkWBfMSFASvaeqnYjHnonSBDyaGNm7g",
  "key21": "2HjcqAUvDCNqktu7dXLyRzqAjuYuu5i8gYTkFjVyDT3Fk5cGtb2ViZBDacKfnZZktt6Hb5p7LvJjWXv5xKNnwGTV",
  "key22": "4QQryNJdSvyXvPReeQ9HXBXGwBDTq43tNKt6NgoyCqP3Vir1z5YB2mTESZav9XFsa62XjyrQwPQNK1qyJ4ZsSa1g",
  "key23": "334TnoLqmW5uSdRYxRDyaCzCSkF9aYbWMyK8ZpVCgCKRYJKaofDTDpTShGpTeRCHuDKwwSMeH3MWqa4r65YZnj2f",
  "key24": "sESudgPJkqwmWVSJLD8oUH7NjVGf3ZhPoogYjAVtctKDNrn8iycZbqV3F9Ciw23egWShvtjrJnLGcwjCbq26s76"
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
