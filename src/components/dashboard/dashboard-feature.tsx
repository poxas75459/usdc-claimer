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
    "2gW61VoPxtqKXiuEhj9EPTMaKwZ3yG2KoupotSCSRd3TBu3qeVvS2dZGwYwBd7avCXkSVM6uWd7uoHTjqwgEmREg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKC42tUSdb3sriaPeajhXT1Qz2JMCySAibpm5mfrdZdb9TVMfPgQiMr3qFdCG3iD3bwNzhQgmDis6ELuDsJmnCw",
  "key1": "4BJ4rZn2HcTchxYWvV3BFr6tuc6UQ35eUnN2cRE2JaCZPbnyJDnDWTyxACUAAez9PZvuzvbBPsrWC19SDSEhWHKL",
  "key2": "2fLLJc2ZbXT8yPwaiiYLC3hmmuQYD5FYDWG2j4qeFd1nvHhA6UgrFh2Y1awuaypei4Ee2fuuzt1JgxwAxGWsyCLA",
  "key3": "vj7twN1FodVP1LTcUytNcya3Qc2Nnff4mczJcUgSrupv1SLRBtuNtWymHgrk1dnqtAZUTTJ6ZpLMGzaAUNVVzW3",
  "key4": "5cis8gsconCwrWAW6nunVxA8FjZtSUAaDGoBoXMop5ZxxcMBjCsEaqvrU3Zcu5B65XBK6tfR5XLHLpbKEYjHmM3m",
  "key5": "3PmNfPQ3SMyBsdhCpsNC8YH96M7JBEGzAEd363UBWoToJ3TbbBViXcqg8eRh3M4uJKUjFKJcM78SQZztE3ZqAfWs",
  "key6": "3rSnrZ6muTDXUz3potzfrhbffRSv2ZqjagWGbPVvGbwBKDM1MNCXuajcQAU1Vsv4kmYmvXCsmCjnNQ75HjrE8uSX",
  "key7": "2cHEVETu7SFvL4naM7ZRjvJkSNx38jzpKLRiZbact5ZzGwpxJL1UTecJ8eX7RrFn9nnUDhmmBVCSsBiHLCqkatQL",
  "key8": "3mZSH5Dpy5YWSYjpxFsMVR3ujdpWk8D4zr9BiwTjCPAEg8FsJdHxQYaJ2qXZxS7Zt4H6KnVRmkXJqx9zmqnPCSrj",
  "key9": "3etxE2aiMjgtfyxMH8KrzXmQ32zs9b76ZEvZUaugkLR9Ec3DGHYeZWnmyL2C7f87LXuQWXeuM9Bpzmnhd1SBitAf",
  "key10": "65TnYufWq88pMPs3aEriYhuVh5fcFR83MN3h6tUmZNFBHLybKEeCjBpJ3L1NCbndn4JsQ3Eu2WLF4kGmEZo8DFMv",
  "key11": "4sqhqqoxw2cw8Zj2zfEaDSppeRCdeJVdmMG2XSpgWh88NkJwna8YzCr9vuiUPzMTDtavhbmDKXDNLewBrprJa17C",
  "key12": "3SMshxrWCkTrYPQLy59wMvxBVpJPtR6eJ1LGqVE32i3JBa1gs2ZdyzDnhzJK9LrUvAJPZFewEyY5nr3EKPMbgw7y",
  "key13": "2HTZUFMx88XDzCYNyd5YU9Asj33hUNzCyp313n8CNBn9c2SWd5v4YG97thJ7pUZ4NTH8dYWsRotStDgZDvx2Wr5L",
  "key14": "52LKAjMGfDQVwrnB7yJKSrKUMQL2zPHLCde9pr2wCXvUC9K1kYceMCFScphq64BfWYEZguA7F754wEFYJ6aiX7gM",
  "key15": "53VCggTiP8JpVAVLNPQCW9YNXEtJ6Qg5TKdCKu9iH21ALm2SxrgSpDiX93CoLLBaHH1m5F1rPK47evVdqcyAASZX",
  "key16": "RxgqqW9LMcReYyTP2gnarMA3tw6uuH5oTLM9NVfZwumyoKeNgZ3xBk6iQPzGYSyEeMwo2PH45VrYRFmdyGmQwEj",
  "key17": "23FyjLMez45gx2tG4LfvHaKEtULvHTT8JUekwKuWvqbHZqKyYCanCbudzzjV69bGsY3UkrtH43YgKu9BGHkJQT2y",
  "key18": "3gxZVrp3TXmodgZqLxospiC6AFQh2n7Q2iWCjzRaTVTVyJ4XpyLSSP4u9gikkFxP2hxZ2W3iNjQxLQyMJw7QPzmx",
  "key19": "65AWfmW5rCYAn4gf7jyjzYjucHuUTe4N4JsYovpimkHztbSQV7LEL5sxtrKeeMAUJCG5rSRpVQepyWhzANTFayQQ",
  "key20": "2bP8MywPigLnt1mpxPsFc7bBaWL6wtesFg1QB83YmpBAoeYXd9GbFp4fdMhybvdcnP7FMmNQKdHAVJV9RtYwLemw",
  "key21": "bwvWRVnrcMxDhuUVBChFXbx9YT7s76oTpM1h1gGD3MsH4M5jVGqRLhEbruUrF14gH5ciepHZk2kezKq48NoNRLk",
  "key22": "9TddmY6dYG8B7QJX8T9dYWnnRaqM37HRXqPQ76By1qxWfYWKj9qUGrtUNvSns2aC5GJn2CVHxWv88MLwVBAJEtu",
  "key23": "3R8qmTkPT8ghM3yFE62MkvAhZyPQaVJbbMT4zooLqUCzAiY1pqj6Mpe4c5xmCyNvYTiWLAoKUHgGjFfn4uxXN4NN",
  "key24": "4uNjeBrgzCxLLykfntN3DfncQetK2o5ZZURgaReS5PmCozCw3g3qSMGLRir5BrcybmpaSgKCArwho5Rqheh4YdKa",
  "key25": "4Qwk8vJmE21dDQy8tsY7x958Qe2AxvyddvVJ2f9D38KcbzRXxKDiA6XxNxqDZ9bXtQFruW6dTs9gVjWtkWB5RuP9",
  "key26": "zMqhuUNc1btHZ4mE5FjbG2JuLP5Fb7AmiH24c3kgbyeB8w5cwQ1PRu8rUQT6tHwC4Q2PcjTPzxLKZWL6sHzakJT",
  "key27": "4HQvJs1MPjMYSpVirGn81LgpJHDHdnsen2AsdKXx221eXrAvq6BXNheyptUk5Wu6aoMXLcyv5DdkX1ZCC7QiaDAZ",
  "key28": "4APHRfagpa2B4cWKXcqUpju568ZUuFAnzv1cF8Zt3Qs62k2rj9Ef7rQr8WyFaWxkYtJSuFo3bfpLTpmJ857HNSyE",
  "key29": "ehGBXm6wgfLBapoysvTvPPG949nXGQCL6rQD7YDmKsMGPwNyEMhbfFNgptdor9h6H4qUGBDevxxgvYQgbXhxpRo",
  "key30": "5f22Cjpi2cMvK3gEH4U8oyHS78MzaW4ZqDM9QpUNm1vkjTLmgm1UCthtSvDNssr8u2HvZAm2fvAutDHJ33PjX66g",
  "key31": "3C7QqxbV4ognb8Xw8uUUfmd5JsTbx6U7ryHtK9gqcSgs5n9oEX2QJfKevdDmV97NfFTQRokkppWjpuckaorDEFg5",
  "key32": "36Ku2E5dKnLetrhgwY6o5Cr65SMbWoPjUB6seEHaRZW9rf354zMdHAbAbnKY8wRGxtJz3fjfJekwSrSqTqw8a63w",
  "key33": "4NsxTpXehf3879jrXCVc62ZcVs8CDjqxc5aaDf45oW1vZoBCY4AwC5B5bowJjnXapRxS1YBmwWN5P8EDgj1xervr",
  "key34": "2YkD9WoZwNZUpvL4fLxiiB1JxAhD8GdYsy1uvDNksdCDHjgfzfsdEpv93G2RinPd8tKR1cFsRqGuWg9bFC6S1Wau"
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
