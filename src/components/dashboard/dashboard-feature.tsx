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
    "5QzxN5aU1kXkWnYh5CwPQm7vuB3recERXFWBWRL3stKW8oL2sdyxZ1Cz9mNjrdJtFxh9GDUN9SpKgQr6Y7bXCJUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTTi4y6ZHWTBdNexgJ2JjAjtupLYBdGF8EkxADVwQcp9B9fWg5t3Drmo7wfATYxiL9FB42zdnWPQZe4RBDRXkya",
  "key1": "473CthJy9PG3w64t2gFajPpgJNEN5Xa3Aj7SNtbWK83Lq2Q9vTuTLw8KsPJwytoBXi15xs9b4s6a92Zt21H1EoXo",
  "key2": "5ePTpQc9JadWLkqxpePkcZKbnj4o7daFnumv12NBKRUKwTVhB7fkBibFmxFgL4thvwU7nGsERPSVp2jMNsHybr6x",
  "key3": "4ETxeN2CL4sCnWdVNZBGuVBU3qtPtifz4aKYM9rSNbWAhbpE55PmYsMQfGQnn1LQE3oTgpkpdSsmBQmDDgvLhqdX",
  "key4": "JpcjiB6mf995cGkQvS8Q1oLMVGbyxffbggjdH4jts3QGNqnzsx2AT3Zteq8Jhgi1bmQ3wFz4uxTCt67GDY4Ed3o",
  "key5": "5xbLCgYv48BTq9fAoLWUpnFvSPJmjeq8v2vHpntQ4WinJDJue1V7mW1nTNCeaRfgAa7gsF5pgYqS9TRMPkVNiAkp",
  "key6": "5pFf5UXcm5KmFtopaVx6WPPy1LNuumcgZVx3ZYP9nchhMdQyxx9Y6m9nvraSqYCLi7egubAWWNeQRiW76p6ymRLw",
  "key7": "347G1U1zaag1eN8Z2vAkM4523uzADgHyewnEHtKN5NnEUu8PCUmyekZmiBqM3s3GivcCkTVcZRrmyGoPyJrZK9xV",
  "key8": "4RcNiSHSXEiNWQAjZd1LzNBX3Gwe7iuQt1GW8nQkg8hHukBFjnL5jWafMKVc5kLyKbztwJ8SdPL89jyw3kaaoqiY",
  "key9": "4LFLiaeX3cDcjrGiezvpXLeTGx4RdRUDw6UaU4rY2XAydNmsdJ299aSNQGSxxebwUmeTS951tmyxZji6g3DiiK9n",
  "key10": "4CE9Z8xhL5bVWHVJumKzg1frPsQ9VW2SqA49KTUupFKrayZzQgvXjZxSt6YB9y5t8YuETkakxzT7nkF7uc5PRyFK",
  "key11": "66fpqLJNUkW7cdWQQFwmf2NEtEM8c13PmqSTDfTBWR6G57hfjApgpEFn3Bckw3Pr2LSSjGmwQeNE1pET1jB2ZjST",
  "key12": "5VqS1rnu6rQ3Se1J1beth6Sfcs623uMuxASNX4nrvUJcpLcmcmEEABTcL5sM5k2rt7T3GuWcrtjCoHfbRAsQMCgX",
  "key13": "5VETwdq3XYwNzYnRBkxEKeibKxHBxbwsTP3n8zNRVNVBvLxLEjPxyBhrtWCmBhZUG8wJ7vX5JoxszdouqnawNcCk",
  "key14": "4JKSDjQu1MdeUEKwTMP44gDiMNebeEfyREHeyMv7C3myqJU8j9FunQELoXMZjGyaVW95nvbmAZQFYtnuVSeNKkY9",
  "key15": "2bPgAGQPJ2hidoCTqyJoTT4T5pE3rnKYhScdNR3r5x6YGAFZLedA4aNtDMMdkjKXuinNqXf93iBVPQDY71usrhPS",
  "key16": "6Ji8swk4jNebGF41FMnKUmZnc7mVbNenDgKPturGmivZsPWm6Kh5vp8MeNkRvZ3Az34eoEhLSuJiFtHzo9S8LNX",
  "key17": "B46iKhewmbnhmN3MKe773JSms32qcifWEG7uFNznkvRCxKE3r8hKJvJLNU8NoD8SYbtnrJEjxNRj1QmGospHE1a",
  "key18": "4zQ21wrSLbcsafNG5r6ZDG1bZCQrdK9P9ya7H82pedQ3voSkJubzKJmAYTHKxkF51DUSNyvVCRaJJ9wYho81q3Qz",
  "key19": "642c89KSXHh8qNWfnnzYVDwCvXpQFLqSt7DtoM7MzUm1yCd69Td4nCYqGLfFDwDCcyGFMEk4MHVtKMKFrT15XZ6P",
  "key20": "YpvsREr8Q54SyobiDNgMdyFu3a6E9hKRSg3mHhkJbWZzmUHrnGe5EtgNoTRYKrXwH64BV6XFi2aAZQ2uCs6oQXJ",
  "key21": "3j9HP32jk5USkzmE1YaSy2Cn1ZUukhZVyr4PrSFMUfB5CMVGo8qcryMmeEcvgU2tDHnG1aE7kxcrLsBegZ2k7Gp6",
  "key22": "4Xmj1Q58UMtMFbsxazhkfJdhmrp9k6iuWVTT3KU3zyaPipNXkqWGPZAs2jQ7Q72RskdaSWrnHUqu8KoLUPUVvfWn",
  "key23": "5rwRx5hTSECrbm5UAySRoX5r1FhhwfVWpM4FiGKTz4YHVLCHLAP7dKX61kJ1ox9KLFu4U3x13LV2peeGDz9ShsHi",
  "key24": "2d5A1a9W8i8CchpSS6XoXKaVcYeXA1Wz48Gi5boBJLPWhtaMX9QYHTBqwSENKxh3bg3WwJSu6MjUjHghcWp4qBE9",
  "key25": "5rvYAXQcuHpA41Aw4qNT4T9UiqZUytsjG4acy8FBsMFwkgNRaUntyKmfZoKaBT9ZBLW7s8cRJnDz4sokdNy4W69",
  "key26": "5EiJrmMQNRuTwvFuUFGzG2STxLYNrxLdxiRyY1RM7pQRQAsMpLGSrvW642zajPgzyS7TroxPSygHwPS23mf1R7kJ",
  "key27": "4t63tbYhU1pvfZY4J9e9uTiDneXBqC95dyVgw3vxo9bktLXAogSCtfL4vik6v4z2oMoXatoaBVd3yTGcUNg4ed8V",
  "key28": "4bG48C3BSW29hPXLgNpEs3Ggh3KPtkp5yXZdt68Kvy9vPpPT5m3PsuTpwrkYi36pvnofA2RjVVoMTrvSnNwysKrg",
  "key29": "3us94GFDYJnp71mk22sbbS19jQGksPZTxzPArXosx7gTSw2hrSE9tYcAWNwLXCn7bBwULzy3Cc83Z4dDzujJcNJb",
  "key30": "2JZVTnaV1k4EUqwnw5nsFqayUWgL3fp7qr9UANxUZC1Y8kiGSCEdM3b5dqDEMKqJm6BqzoE2gBGRnv27mYHYH96h",
  "key31": "4LCELoVN2RupwnQ14fiQHWmxVqg5Z8DYCQPd84yuXMTGEWCuR1jxnQkKsWKy9CF4fQMsgeKkQz37dnzycw1oMHrq",
  "key32": "2fNdfpCNQyqpCaZSHAHgdqXHfuptJGUEFvGHUAzLzNh6aw7pravZSt1T86bH1ebbvdw8aWX84CXeXoGw4jugtWiB",
  "key33": "56JsvQnu6cokxiHD4zhb61U3nJJUhzx4R82kbGxFZ3nEg2vtbExKDqpU2uxfvckpAnmfCmavJfNBqo56sF3b43zU",
  "key34": "2VcmcyCoN7qm8XgC1RaDf7zYgsQ9HyzwLUUFEFfeUPAT2eSemyHJFJyoT39EwKE7ziwiJbKzcR8GTdMHz8LsfqvJ",
  "key35": "3iHgsScT8J4Z5uqBhU2KHU8CjoL4HuYPYdRB7wcZKDueoGk3BihfqAVTPCiZ9NmMCFNinS5G4z3UgyfsSGvW9GK9",
  "key36": "2qhLqe9EnHVqNZR4JpUDE9vaj5KdSESK2ftdkbmM9RuW3JhnXEihLkTb3nFKqBVBSf7i985gj69k5dAawq4fvMZH",
  "key37": "4vJhgdF7p8Kx13Vpuuuu8gDMPaQtBngG2tusnXWvTJhwR3mmEBtrgCFMZhLdbXRCLWaFvr4yfsacW6E4eHR6SrVF",
  "key38": "3kF3iqftbfy67AxG2BjASv9aTSZrqSdiWurQzmxqQn9Wg8E5AzppVsB7Az1roKdM8zcaJnA5mF7ZtxM8snMbyZ1e",
  "key39": "2rxaE25G2dvo5BZAPQMnQBLXpY587dsyRZgVkmK8hw6ZP3TCB35hXkRvfDaYL8ejDdNJAtJ93xGFbxVo4WHvkcVd",
  "key40": "4a5MRaqMqhNBwbKJdPrCc4FabipVM83PbojfrD7rZpxhbarWUnz5rxn7hZrXTkznzgvVANR7dwtykjA2H4hEc48C",
  "key41": "3FheMSqXLBVE5whW2PZmF9ToQNxW8tWtuHaT6hwb96vSZaUJrNKSVUJd7wdQaTq288GpFUfZ9Nrf3nKpUSARfAnK",
  "key42": "4YJevbfdcVo4HW4haZFnxrHaDqgP4YtrLyRMMarLniiPTU9dD4TpyyxmRkpQsdpHX5z57kmc499LyGR8oA7otRPF",
  "key43": "3jxEuRrBhbHhk9pxSYMncR241PrtiEviPxJjP2W2LrCJZYnudz1vM2nyx8qcC1zXGCgJEzcuD2yRCMVifTtYsoz2",
  "key44": "3YxAnveGGwfzkeEPWDQkKQzkSmuPEW5CuaxKLB6D19xCXpUvLn87eQ7iGH1Syj9LALDRT41pTGFoDUBRCyhL8dny",
  "key45": "2HoAZHpKcpkjpHNzVqJrFyUDu2eDdVE14U5snwh7FA2uZZWbTvLdpk5htXtSrXPYdEEqRWdhP6wJXjXEshSJ1hLv"
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
