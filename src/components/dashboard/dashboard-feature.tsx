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
    "7QhKnn5zWJ8esaig6XLJyxo7fWP3MoTCGXdn6c3KwpfLfbBN7Lc8qEW8wQqp2kpb1Xiw11Eu2h8CpqK8HZ2kMx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHPmWT7nphurKu4ohVGXTA4m19BZHLoFfAhjztwUYhnG1wmFEPAY5mEt6a2nQiibTfMUvD4uwS7721jk3cZaeDe",
  "key1": "4x451hCZ4rzaLNUd896fCzfvpJ8aEZaZQx4oYsUUyGs9c9TBfx5cvja9qmh6xDKj5JgcxQt2Dpnrrew8YLD6nNhd",
  "key2": "4WUBp4qxgNG6SycWEE8MBeGBD2B1tc8m9GnxgkoBvSLqaFCHDRfVb8fwNzZt5SEcyLuSb51Tyqn9bt219MM89D78",
  "key3": "2snFX3TTCBV4AZeLA48s7D4HSubc4A5PyajidWY22pDKoVP3nbzXSEooucUQWzF5ZwnAMuLJsYwzroWjMmNwp6kj",
  "key4": "5Y14PyroieqQSytrNGWXJyL3QUhHn2FFK7SDhf9dkFpXi6BETCv9xMeDGEWBxbRVWCrQnJeXp9wbdFnMTcWmkr6s",
  "key5": "4QhqEdAhw5YmrR9PnH5oNRFWT2FYvDWHcAyQhnKp5ptDyLQNkvSEaf3YKr31HYvpbxzJmooAJU5r6JNmVii8CKS5",
  "key6": "23M9cFkHWQXFgNZLBFWUXU27Pdcng5EgiqUYawdzoW5UkiFKrq2fXzUGfR83CxotwakpQXDf9vwrPww5aszxg2Jg",
  "key7": "4uoZjiHPxxsyCH4AbyyPYu12FfrBwpsBpDrPs7nxpT5ZUGeEGQMc6crkyRZDgPPcadPZWUhgZZy3CwnkkmruRizR",
  "key8": "2MWE2u2tUsqd5CE9AgY2dW6M9qqWq1w7TVwXjQuPtVkA1eFiDHczq5dBLTbjAZBe9B6KSUwTRdeQcWEq3t93Nizb",
  "key9": "23htPKtdGhNXvTLQjqeLttqLfJvAeMUnsKtn5256iH7Gv4J5UgqKi7kaeCPCjyZdLKzCAunkRkAsXn2dkXNSrQUt",
  "key10": "5QAoQMdz2s9PkVfgbDyDaWxaEdQ7yD5vWfQqDtU91YjwpQAL43tw5s6CGJdstjRzJf62z8mNTy3F68HMpLYFGU2P",
  "key11": "3xzhnCYiR7DuLFnk8pQr5uWTeo4cbzAaB8vMFJseLuoqMUL1X2FKoyzU8pBZaXiNzizhKL1XEzFgr6fqLUJEMpQc",
  "key12": "3LRP9amMTgj6aZrb6N3XuJehAhM5Nb7X4P1qPNNTAGh5v4cboJ8w6Kk21dFVcgGwyvybLFxuZwuip9EqeCGjRFfV",
  "key13": "2Yk8KGQHNoxs4JzZRJ2nya3PUtXYRfxk3FU4euGQS41y5wxZH95d9zoqqhHb9fRbuARYigVjoHJ4eJurtz4gtYc4",
  "key14": "4wjHbsNWz1GEiGh4yMMiNY1mfidLpsUdDxpR1QB1C77ZfNpL89aEuy1yaXydPXiWW5kTWq9ho3GpChg1CFMkc2Jx",
  "key15": "3wMncEXtXpKSANinhVCfKqf6s6DSNgLMxQLGonsBpp4UX5aT4BJn5KXxnZpnQwZf2sPiShBNoHEecf9QCTqLPcKj",
  "key16": "m6vuS8nigSMPB3L9wNfkq9s9HfLFGqk4pTPW1SWRMKECNWgLFobt13aUr4Ah1uvtNEjhPp7jpPZoCz2Jzv273rU",
  "key17": "2goKoGMYhFwypsXGixiWC5Jbdc13isZWgdZs5ARqffgXUYqeGBaasZqPVbT6ArMsmJRqAGVrtzBpqcGzg5MRHra6",
  "key18": "4X3CyZryavSMT5D4rQyK36PM5sS4HD4K7A1wYP9tAHTi2hQURkRPpHVdeVr5oRVLhxBtMHMLSnb75AMUqPenZWWC",
  "key19": "8XDUPNHdtovuV7k2R7PMqmVjXECHksRuwgTkXDRHhk3m7SSE3ThgF9fhA7NANj8XjrnKncsh86ZoipXMXuH64sb",
  "key20": "4foHej99vf1fRVxGJUaCrZzk155b3hhXF1SSoZp25vVZrc4Vht65ukr8Vxx5pfX4WHc1s7E2tYCFjEYGF3ZYMVoX",
  "key21": "3K8T8X9QH3jnQmb1CMMAgGGj4m7JdDuzn17JboSjG8scj7KrfxtoxsQxiWHDsg3Bv6iqnAkMm987uCstBRnXF8t9",
  "key22": "jJzAUxXo7nZqWzctLznWFU4FLVtkXMvSQ86LUvxc966bkvH85AiZ7SvVsfgjWJ5WHNmFoxyLeD7yFj68GKWhjDm",
  "key23": "3jbmMq3qGkDHqPiLAndRrC2mSoq86QiDQPoDhfnavp9DtkTUwcijQyfkJuaPWxgsVY7U34WGiGd2bY2r41EYVXe",
  "key24": "34RLZoxCtzxn7dNtD72vCL5c4howBGP3v5vkZ6qWCoQjCDD4Pm8oFahp861BP7EfiArzY3MyvX9znFwczVjE1fmS",
  "key25": "43zhLc4r9zV9pmpkq8rVg2GM1cYJW56hTbNwesMkoTj5s8SLRZfTwLAdSxF89in58eweEnMhPrq3wtdBDm3fDa43",
  "key26": "57iuLk6vbFxNrcPu8aHXdS5r5TUiyEcApD8yjJidBex3CfF87XGjuMCrcwUkbat962ap4BxCDw55V9P71aUZoEdz",
  "key27": "HrC2ENcVYUyKQxopUXv5yqsab4uJYUrxw3Rdrg6uggg1iyBdo9BohmKqjnTAW26ALABF36svbZexeGX5eA734MR",
  "key28": "2374VrUzyhNNmiLAD7XGsJgSqtYHMgB6du9R42241tmhcmdDvg4NqQ7at9fVE3VTPDAK6GimoBmUGDzAZgK8bKr1",
  "key29": "3EHUsYBJhpYBZw6sAxpFZoSMJqggZUMaosUULJ9j2fYC5zLpExNqtg18HFHi4gPbqRFLcJpzbW3KGyKfACpL87c8",
  "key30": "kk598QnawdWBk24Ckw8XdpZZhNPw7pj57ZZmvHCE9cSPWX5xitiKM5T8Jd7KsLvtKxDc7j3sKeMQCPinoFPDyhR",
  "key31": "4RcuTW3gKLDkrEfBLxGBnQ9oyY7ohVNsqxZyJUMTGV2qesLhzLHY7EbiruiaaCaiZysWHdryoPSX4J8Pz4wPY7YY",
  "key32": "5GetckxSr7GVA8r9UFLtjXNsJ22vsE8jRuXdFcDY49X4uWNsg41AyDNM7tfMBUSG8WjX7DefgiT3uP3TPHM8CTGT",
  "key33": "3SXMBwhCn5GuCPata2x5bywkVbnEF9Z4v163ceye5U9HUphaM6SAMkvrD8KYTAdiD1FRgCJRupyjaqZEXELKpKdV",
  "key34": "97gSsTagLYLgrHp4ddUbVyzh57wPgcGLnhtvrR8tZzZsMYhtbfjg4yhtzxp1LsLRVVT2CYDNymJTv9fM8VDuP9u"
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
