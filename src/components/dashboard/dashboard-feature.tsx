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
    "2fof5cgtXMGRf1PGFzi8rQXcs185ZcnrbKaBhvBE3z13gpcpnGjm7FQ6ogEhoCpMXnJo2vYPpjQb5sYtEuVRzaXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RsGZrkYenVueGosgUH5fabVtQPZhtHZQqUn6XQjrEqcrnGdn8wjjmgGtkRFchXGNqCk7sZuqUrefsjYsizfYmmd",
  "key1": "5BwARNrSsckVYfLJWuXMRA577qRonaA2bujHbcNVGKgQ4jHvRRSxoQXBG8FCyVgiwqXEAGeBYKocUCDDDqXksrxy",
  "key2": "224ReqdZMhgfeWxzJmxaPpQygRA8G8izMj4SQDRrktpspsrH2U9RKKprJZZDTDiBD9KLe5i5y5QRZyjEVmq8XKh7",
  "key3": "58qCpKu3CYnoSPN92LGWpUBxnfMmX3WQfDAEiM6TLagEzGBpdUZX84a1nFgmks5ztDZHiHCFeQhYaDso1VSowWBS",
  "key4": "48xW3QPxn8oeyp11HMYoK6Q6vZiXxtHaf7bnQTH8PSM4Q5Pkdy2NSW9hz2N3qqzx45vxeED27GhvozJeJhCewT3M",
  "key5": "4PswE3u991Xr9F936J78tndqvUzoankTNMaMd3rGKgYAMva3syXUSSgGXnjrmEYhdD8XJ1YLwgJdWLZpKXwm3ug2",
  "key6": "WscgeJXecACvGFxFWPMJQPjGfFuMQB9vy1tQCA6m1kbafRLuvB1s2extrwh3rnSRiS37QLKXnUvbiRDiyM25t4b",
  "key7": "4Sy7DfcYZpHNPt1PG5ihH158KVUGoK1Qhwd9QNVQkxBQ3GsehzzPQLbhHR2EQLvN51rZUJghfekdgRQLkZsLanz",
  "key8": "63mtTC6b2G88JwsFTBaFFLHG5HNpBTUfQJ7iupVVP6tPg3jGM1WPN3vbvFJcMCMJUnaUC9ixUYSzN5Rso6hywJTz",
  "key9": "3hRw5z1MK3Z97hxiidrVniRGFQNBTLt4R7ioL3d2RocbBS5vgtcYU6L5vhxxBagdPXt48GaUKyKTEYeYyYYREb25",
  "key10": "44d7UZA2acxJSbZbTwNXrQEdm5eJ5bs1RWayjgDhHvE9FGrEooihgXdtUbP6kzHSerKdFtoxEa3V4F7Kik77pue1",
  "key11": "5efnzWgwcQe7AVv7PF2bobyveQaq28jd2Mv7dDEKSE2xMnaTt3JAW7iq38j5XJXjusYG2yiwnx5qSk19sDzU1gyk",
  "key12": "5m6hX4WhWP3g1ASQjSkKfby7dBoYVokHi2HGBzdAEamXv9pwxdawpw68wA4UDHRuQXmD9B8ZQgoUXgbA4uBMoAwm",
  "key13": "2JFF5GLWCZpCa9aj4uqRtz3ch8XFy6U4kUXDFamaPNUZDRcMAY6nHpYpPvMyHPd9a3X2NyzsRPQ5JsjqBygx93Hd",
  "key14": "JbnY6EF6KeLHZsaKU7MheUkB7NyFjg1tzqSTjh6WdjXjhRJCszRhgcqhiQFMVXoMMwWFy7MHS39karELf9DYAWk",
  "key15": "dJF4CRdpizxv4AMaZ14fQDQAYES374iMh7vXKe9Ft6CNiA9kL7LJfRpQR32ziSAzEJxoNNVTPJLfSWbbeN5a9G8",
  "key16": "3nPQ2MXZ6ZwNv6owjDT7f9emLfX3Tr4PtvkfdDGF4xwtGKfxCdPRhZXPrLbMCEmzDaPi85gT9YKgFbJ3Sd5t1Eyz",
  "key17": "DgZ94GGYEXjyqTrW26kHSLhdn7hVtrWXFXPpz3hvHJyhcJmUYcdLPY9qTgsPVD9T9t6dhMzhsbkPDLMq9AQYiWa",
  "key18": "38Zofp3hLd2KoZ8mrJmWMv53LS547LvbAMBALLduaUGg9HtG4ycvQsXspSRMfRsPXk1PEhLjknmLWRVHyqxoF57L",
  "key19": "4q511dQZYJLiDYdc1fQTVwVo1imXCoSQj8Wt4sooT6MLj7q6Z5XcTeSqg1is1DL5yepGuo8222kqhkCtDTJkhy1k",
  "key20": "5xBH8gALXE3L6sZ77SQuuJMRjcMjaDj4nA3L174tuw6mfCDtYTpnb2F12WJtHUhbM7AaJbLCkwMPCQgMj98nEUFf",
  "key21": "eJsCfvKPzWWEUWnQP9KUwweGzoiWFTL3FwyZZwfnHg4NCda6KETgCaXaJJsB5E3TQVNPpfGHvXbn2KLyTezfNqP",
  "key22": "33ALMuFkawKMuoi6bZsCaKudSonoHGeYdPZrCSJ2kRBr8ETSw6DBJ9awkjzXVyrH3txwhxyDUDq8yDQo5KSZvQzz",
  "key23": "5cVhHY4Jx982evRf4yj7gPn2BU1D6742QkpNRfCjfGQW9BTcEx5yaoGaR72DosHQNo4FuVRbiQwnHiKDKGm9UknR",
  "key24": "2fxZ9AqfEhhAhfKMWBxQBV5fM7NXzHhW7m4kUwwhjLbc8GJHPq4Kyx4S2ZwLC68jtB78YTDycca4MDLnNqEBbnXL",
  "key25": "4jCxU78Nb6zHaWtWuA7euPoDMeTSSct75vfk7HjqRn72XN1Cy5ijosL6pkCfGn9AMJZkYRc7Jxmx6DsdLp1CFzXK",
  "key26": "4RkjmBHra1ENPTw5tQtTWkn2pSjZdDNMfSYcv18Hrb5dkmycuZaAcg8Xc2oDyZiguYW7uesDFUgttrWh6ubod5tK",
  "key27": "33dTT3dLhg2N4iaVJ9UuSYxuVd4VpqAe5YSAFTmxdiUj44oKEyNntF2bMqD5tLCQxD4w4znT3T4gg6Uvy7Ht4upj",
  "key28": "5Qoiu6Tuxg18WLVSfJoJr1Pod2XvkJj7JsQVAfqzPPovLabBFLNPi5whqMwgP8MSTFrXfQXnEHkW6w7oJnrCYHda",
  "key29": "4itMCMaMVYBwh5hJRv8zry7QgFw1uZYGq3Zc6pD3Q1xSqGEoJWnZJQ3aZbWkADcFWNoCrUjFrpcSQcgh3kccufh9",
  "key30": "3VFf1NsLRUUv77pGmSvoqYDWqyFZnSu1m1K2RZtoEedjR4V7RbFGX92xP18ioNdwf4g8GsfbkVsnYEeSHVd2VkY2",
  "key31": "3JLqwrmQ63pCeBNbkfGPfs8ynwRaFFjBpnNsVCpkWB6dn31cCb2WFydv5QLgU59PRSUKkm1Ghce48fHgfjwk1gGo",
  "key32": "3HLVBeDoaGkNjR5Gf9HFFH8XDQAuto5oCUWfFucW4TseR6RxMVBet2vpsZnBQAN6DcjqjZcgrDU41cJzxKTQhZio",
  "key33": "5y5pPqTa1YpzHnVFYixJewUn1srscGvu8CJT7Do6dSm51igbuM7QpzJBNFqaa2hfTQWPR1PNbMKqzEGJrSjadrz5",
  "key34": "3E1wVV8BsaaKamZSZrm2w2Lmg16G4y2Wg4HwC7xDLQZiZSARhq9M6piqn5dL7o4wTpg5JNK6D7BMxckU14fYgoKC",
  "key35": "5jM7pHvh8LBDtPoEjAp9kTeUV4GtaiYTY82K9WK3YiitR64AjugMeutAWKQEdQEwiHSSCnNqiMXeQ8KQ9BAn3sMB",
  "key36": "5H8xbjFDQAP5maQhgaRk7XgNZGaPJc1RisfQS9FEaB1oovAV5DCufoA2MRfKCxRmUVRGpnCcXnN3cewY5gychp1T",
  "key37": "qKhFoJTTYxLpqz7bWMmoq1Upvt67RnhuorAbtU4d8Nq39q1RcMnULUgBt9SoDkn7SrrMD27fwn7ngsGm4KrUFxt",
  "key38": "3przQXeENRnsWuWCJyYwHXP2qJwmjyGFjqHyUxFrJTp92g9zGTaDvaVvxuQmPvNCBRg2Tv1D4sUnxqGytzXQU5cb",
  "key39": "4RgU7eo9VpQjgFhduk4ey5v1LYjYs4Jz2XT6S6CLasbxq767bgs9sZ9BwLitm6NB6jfqYhC5767NgWUrJ33d67f7",
  "key40": "EbsbW4Rne7ooiDDPgsdUQCJ5a7Kqi27tfJAX6kfVJ9m1aQiEWNaw84kzDWBznfLSQoEKty5FW4caSiSegvZC2iP",
  "key41": "43GJUnCJbUfZ5yFeQdcTzZoJbpp2qXdLETQ1Hsmu2iaCAfbR2cUySPHiGzvAv7UYLsM3UXSpmrceRiCWAxhmvJq2",
  "key42": "3hBaJeVkRheohQyT8sfj6iUCsejrNHXV1MJofmbNpU6PPgmy8iEV2qqZg4vX72rkEWunXxMjkUBFxq9WgspsTLf8",
  "key43": "4tS1qzuMJetAFnfaF8CPeJvrt6HAGzFP8F9M88qv47fc9qknYUw65zAo6NVHKg4iMUeV2UgR85Hxri9DkAsRTYxQ",
  "key44": "3Vm2q8aaUk64pxn5Ju5YAatTeJ3kvLJuGDsh1fU6eLetXCenW6y1qnQW9pT7Y7w4pt27BEaqUiPrxBmFRiKLMDHo",
  "key45": "4M27AtMeUgXKyN41nYqcjTXLUKVxu3rx2cMCPPtx932rK4CEjjUh1zfegxisBMvTo7ZDWTPqFHF93wrHFJ46TmYN",
  "key46": "2YRmhS8xJmyxHAhksn73Zpo8WQYXtW1h3VL2Rg7Hrgj1zYzwwmEQTTuR6k7Hc9S8GhYCSKByeRQRDjjGYsiyuzZ9",
  "key47": "QgYPM3FbouyUe2GefupYVYDeGfkxGpxKwWjSjYJno8tZSkMe2FEpuLDVhgHEMkmRY4kb9SaALmTWmd5NcutEGNb"
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
