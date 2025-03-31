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
    "2Pc3b5KJN8EkhULwcfJY41Upayqsg3EmrhopLCACq7stjFQt3rjQhKZpWUT5Z8mvog2fE2oKwc4gSFtuEmqEcAwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZPmuKSjt97kbU534dsdzGz8zxoK7pb5GfkS9P2YmFDWdoSSM33eVr6hAGyk5b1S5DAP34hLRcyzW5MZAKtnMPz",
  "key1": "3ARVJUdZgqE9Z8BaZdqfwHFA4hyHu6H6FWYRSh9ZRLPMcNRhb1JqvX5vU5piK5vfCwrVhRsBJSnah6VQLay6SAtA",
  "key2": "5CTgFsnhLU8u5CERt9Q3y8N2weJ2dqq98kgYaLsGzK1z6e5eTLovZk7jwVwqvBY4ntDuppagP4j4NG8F7V5L8Esh",
  "key3": "zvx29pcSYKMUFwGhv8phLB5dVBtERpQoUT2haPqksXsU6VG5ehgfLZQwQ262NWhfpSHss2RWjas7PdqrTHb4v2b",
  "key4": "55UTyM2Y9BnErdFUoYTVA4MbDLaWjL6r6sSCuMJ1z3QQvFQ3bMX9sveAN2VWsEanniEDBD5fQWJR1QzuvjkQMD7k",
  "key5": "2Dp3C7XkFKHVBqauTD42XBjHtWTEuKCCKL7QsYFDeD2bF2FD7yfJXBNzdnL4VNgwWsHRiep2edQpQKoPiTgPp7D2",
  "key6": "ncRXmTgbayfwNnQLkUbz5g6RcYBHf9MiCchM2hmrCLUgpTBBk2NAV32TsK4wc1zn1yr3Tso5L6JvQgH1qEfmmuG",
  "key7": "1qKthtQU8VJfDZ8nCZ6Hc1touoMpYpeqyioyokqQfNeLdBJSubHCPd92wWoY7t9RJKhetLLPti4Nh6pt6WbLSMD",
  "key8": "5u8F5KbVPjzy7fWbD6QeoGvQKirkhtaGXA9NNT5VXCvzS6Aq3LVgf5QMrjPiT4bu6xBFyrkT1cnyG8ALNbKZXFE",
  "key9": "4DQpMUTciBgPWM9XsuZ7M3FXwqcYnAVdcPhmF4qmy7A2TR8wsNqcWvUsh7mvX8MobWNVy5zp6FvEATJz7NNS4Ber",
  "key10": "4qcMk1HrkSFxQZ1nYjjT3ugTqRKxbc4k1U27xkUjVcVddhDxFvhkNMR7ko3vGqoj2Y33YQAfhiCceWpaSpE6LgSY",
  "key11": "4RcvinFUZD4uWkNRFLfNnovwwzroDMB8SFf6N9ce53oyUpEZF7VNEjKys4xH6ayKQQh6Lp4iAAyKEaCgXXTDrncR",
  "key12": "3a4TA4exvMwdR6dxNe7cXmyRFEo7rvLijTe1VHjeg2g5BE4YPVnqgzUs8NmH5tTRNWG7Ercu3SXSxNF9CXfjgCZu",
  "key13": "317R3o4z3BZ11Cwp55mbkrPiu9PPuyTxjpYfZX8W8Vg36mKpeXvBMjVdLboqF67Hd92uWRMqQ6MfuZYYEP8XQ2gA",
  "key14": "3rhcs2DyqamBn6tArJbuoVLnmWS7WzPiSAXsXdM71tjjobaDnm4cmmw7eqSh7Ve9eLPSD584AykTkABtLJB27UwC",
  "key15": "5GeorLLdfP6zkFGjMryA6sCKcFvDLus3Avw4wrmNVcdJRxvwwhi3Esh7SLRDsq6LuoXqLEDkjbEQo75CtmGXt1GH",
  "key16": "3NmM5JwMpr4Ci3BswWLpQ6wQApQJVZC49qwTi1mhMqsGXJWjjum4FM9hjqcQ15zRC3LvNuHF9mdtAE9ASmboCLhT",
  "key17": "5VrmjqpBK6Dsjy4ZvbVpz6gjBBBVbFqfsPqAZbDGNmP495ckSmWasYHZmLcnTyfCkU2CeuJP2VbKmYxxMhjT6J2h",
  "key18": "ZYUq32Dpe8LJSzbB7FJJRtPeQJYVuFQFVy6D9C9ksX484BV3BJ6g2oQs7hY3jaun5G4eyJ9Me29bKEX85B5hhS6",
  "key19": "5HtUEiH8pjGxWvDqoxrTyZ7zebB2j7xAnWewyF1EEiFyedZDKAHHBaBucER3CMDGHuf9XBbTsh6Ucosrr1znaqkU",
  "key20": "Mw213tU7iJw95cG8xqRMfXrjqgAFxTz8ebrmJZjV4otsMTeyS4MvdvPjSfYfcoo6THdNfD17wPz2TwttoBmQHLh",
  "key21": "259PKRtgApH5yQxSvtC2b93mXqGSgDCnVCVfcRHAMKa9SJFYnQJFAnBLNJxU1DjzTbY1rNaZXqUHSNrpnta9jFHt",
  "key22": "2QNZpmHxgkYNfFsHpM5SU72ZeqeDjRMSGfx5mXfcwre4Z66JKYZ6uF6LCFxi15hnrJGV27Nboww3FLvxAecXVsPN",
  "key23": "52ouhuYNHkiLGf4E3yTdWtnHq8WEZsELH2xyQZKExFiVbRNMhj43xE7epFEpx1SJES9htDHEDevHhLUDsPgDWvd8",
  "key24": "5L17X4FFPzMb5r1HcpFAkhMGPgMYSfo4RkY6PW7N4CgYpGHNZjUfcK373u1c5FWMGjbWxHBWEkbP5J337dT9hVp8",
  "key25": "5YScbD3FU2Wv5v8TaBFDMSsePbF4a3mnWnZXByJdudV4d7w5ej99uYrYgmMhw8koZFriTT7iY6Zr7AK59todpYgP",
  "key26": "3f8QacQBCmuVR5xXaJxhNroAzwPprGUyLVEA7hEFHtHXM2id481vkhts6mUsDyh3BALQwjvDxcVZPgZfbpABNfxY",
  "key27": "YzVkPYVP8vLuNoTqWKptuUcaCuqY4LMKADWHSVsDV5owGqxxtyfPdC2CtLW3f834DLBp3NLEjk2nNH3mXEwuzea",
  "key28": "5HUuwowce7DhsxwkXsPhzx5DKRGjGa9txYYGnrrLNULZWkCccXGGihWhsd5cHVoCLPuktyDRraybGDjWHK1r4CDG",
  "key29": "5i5gMFZe7PL5E2fDHJ781fQAxjAmPWxyoQf6gWo85UtPnSg321ewMCq8zBV9QKJcdMWu9RB1x4Pu2Zk6xrffERrw",
  "key30": "4cVJc4CPqLnvmUDyi4XM493Bns5jnEXV3QTNa1TVS2uzL3vobRPSHTCtdPPSR8V4trPjnkQUqoNgDSUzPKNhw3cV",
  "key31": "4pDrvVrz3gdV4xwFTT6iyjRVX2PfURbCPDzWGk9fPnV86AvEm8r7iR1PVPsE2eCEURw8GeDVekgKaWqB1Bj1h2n5",
  "key32": "4iNSGj8Bonm7g4KX8DUK9Y7abPUVRuAbXjcX1voSLkb6TaHxfkjBu5L453boHeAAazqdD5YtKLMX5WRsGDoVKwb1",
  "key33": "3QCQFAsMpEAZeAE2ySNK5PGVHMJ7Q3Qck3q3HV1twt3TYCh4M2wtUyxye2ezzhRbT3Ee5edYUCu18H4BbQohnidc",
  "key34": "4Tx3TLomdmsWif8UfxKvQZXTMqYywJpcG5HNHANZvmBkkK9CjeLXH8eURUy1KQ8wxvi5vRt1iXEqxecL3nvMVgcz"
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
