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
    "dA1bwvrGjyh6EG78VdChrWYCzPks1DEZ9LES5rzkReAPSzTPYwLAPWymLjwf4TT4V552VsEpBS9hjeHzinvAxiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363fTNL62qjQWW391ZEhSXvQ4oW3YbsoccVZgCj5BM4okAJbo7di33znM9JpekLUQNhpoviDexvtheDNmUBLxKWy",
  "key1": "3VZ1GnURtNQQpoevUaTLeb4xJ9oRDYQnaCANRtW6qeus2jWAEqr7uhGB5sQ4dRxmR1LMcsMn9ZVYC5iLKqU92xGd",
  "key2": "4j6ddPFBy4sDbhSpZuG3UhBk4f4xs9TVw8mgcsaE52iheWhYbq2yCMmNuRoGMtLRTcg1r97QWGodQPA7TFspgwA1",
  "key3": "5rDGr7xK2DKsEqJM3CNoeaDwxuJycqnRm4mx7DVvf3h7w7eUNKJYV2enxyJ5VhqpdbJ4dhTcE4bC8XSPbTLjKtq3",
  "key4": "5R5iCkNYC2n9fqRHGw8wmkuifRvD4DxzBoctMUBDX69k44SJhqCzLX9pjY9JpnwRrn18H78FxSZYgnBPweh254oa",
  "key5": "qEbr89kYGKAZFyJsEEAH9dPbftBzDqzPgaVv61AdKYHNcnyZ17CUY5NRUCxgyiBytEnwXGbx5HeC769K3SDGZwW",
  "key6": "7JqKHWSeA3WmduNV3vbwsWqwuBX2NWpMxumCav2oAq5SHWN9LWQsJTEADZqwNJzfR4YNP6ZzMWhJte3kGNUhhHV",
  "key7": "4ZrAaJhQMJoi6aAdE3teyGQZdDb5rTYEHCxQLuDHrLyJSDrhZUC1BhA5A3ZAti2b7ERk7bn1mNrSApVXLEv3wE4Q",
  "key8": "3QXBT3opp9uRXiK4hTKkJ15RYFmCMcgSvLzWXvbWqUCU1qwia7CRvDQTGrJpJxgGYkUTybtYfJhhTXe7wVT2Ao7R",
  "key9": "4Mc7KTuiBPoV1WEFQ7mhMbKDtQidmp4oCuYEY7Xwy64KgWwzntTMSKcLenVjZ3D21GU67gKUbdxo2CmfAaWF69ty",
  "key10": "4RvbbdWNfvu4vqEefFUomE7VaAFyqAnSnnn8uNeoNKHdZ3tX76U1sF5qrWYMVDzLYQpioD9JHteR99E3kpaUAnXV",
  "key11": "3oCRR9vWTim73Xq7VsXuWTtKzsyuSvCzdf6feVmCWPwybSpRWAR8rj2UvWM6F4QJHkGMd4S7dbY4bEvmveDep8qb",
  "key12": "5YoXCkEh87HjLLmoAz8JeL7BWUK5FkxNr3RGvJaXJYcG2mNt7XxjZbZXBVoKf9LNdZHa8HqM3FTbkD9AqggigMcu",
  "key13": "5mnrgnRGJwuW4buaD18DSwKRDBhrrdKWmp4K9fz6TtRPowyV4cCsuq7xry2mnA9fnPiuXqV4McfCNPPjZ85JjJiv",
  "key14": "4sUfyn8ge8EAcxXkjCNexuBNdWp2E5oHraiiJRF99i6Tig4VxEQXCJtbT2oZ82QwkJnQhkPmYEXAXgUsK8C8p8DS",
  "key15": "3NZ3toevARyqTXnUA5LamovsUHCBAz2wjX9yCCWKeHQf5cW2yCgrrz8Tm9dVm1yo6LKESesYQjeTMBC1PT6DnLRi",
  "key16": "3XkxkovawcMeNyFKdNm9tfn8AZdUKpWZHrYpTaHtdUYnFDrhSZmF91dpVivTf3HSuMuvg9zP5PqsrCst5tyae6Ge",
  "key17": "2qXTAvuUQUSob5farEBdejAFfX1HXRNPzFQBcxg76s273KmeJLA7SWPhmueRFEesfKcaLUbe2fcoW6YEVhwXXKVL",
  "key18": "4rk98Y8sHqs6UGQgdVnt4mFBDNjHjpha6s9phqvGGfwNWy4HhyonhJmZL7spCgANyspo9ALd6xzAp3ebQ89vPJj",
  "key19": "5bbqeSArRB2dZF5sNnKHVjoNLpW98WWLTEB7wWua1nEUnbaxq8ZZhQmUuLqdzgD5RteBdUppuA4za5zndLM3hUHG",
  "key20": "2f8mB9WoaSBVgyptwEJx1u13CVCRpZ89FJU1K4e3V8wpb5aVP2y5npXVddUiTLkkykY7N6VRrFaiQ5wzFG38idFB",
  "key21": "HJ3a9fpLkkhh9ug7Bi1YPuHP8Uv6m28oHhekm9ek1F6hEvHNW1yajrYD8sJmBV4KbBp8RtR6ywHCCF7PDmQTQxc",
  "key22": "5U5dfBZSgb2dWHQ6aTQrY4bbGenH1PQtmztc3SPCKFMJU48RbUpUmzzR3Q8zmYGb3yrNJWCvQBeELNg5Q2SRHpQs",
  "key23": "AgSJhrk6MNpMaJdx1LNc4PYBazJP9NePn9saRMSsFBgZCdk1yUPwAmzciV7QeRDNnofceytfREPhTGxpT9bkUba",
  "key24": "39TwJwhmA212M52UokJuiFyfFBKniHM7G2mohnunJXMEY9SknoajJgyHfGupGhB3zSyeHsTe8fbN78me1e6DLWd3",
  "key25": "2FrY61HHDmGHBH47PtSyZ8tfQ7Ec8xjkDC8ApYGPMfWWv3gQxyztasWE9Dq8Q7GLABusCuWXKPQ5TcYSYRD2ut7H",
  "key26": "2rurrwwryFXnVNXYj5CgXumZy8vmjHN7h1tfragKv3oobiegrV1cCyvboEEtW4uvYikK8ZpuUSfkjbRA36u5dFYi",
  "key27": "3EvvX2xs8dLDPDpQPsJy4FkpEkqpX2kVM1WrDfcnnSH2oUG43E9QNpAcD4GLrSC9k4KjEmTzQCoGnfgM2Rksw4wb",
  "key28": "5h5URES45NBETHA8FmqWSWRD1dGw784WdwW4w4qzCo96QeH6aEZxNmBmsE9dm1Y3A24gLrPpKNExz4T9xArMRnmL",
  "key29": "2nJhzi21s6WgY9ja8VoL73q48q1HGzyuEvqk8FBP335ZJosGa2vh8emTNGNJziZnFakzDtMtYVW8UySdKZtx39sM",
  "key30": "5sBiNSkwUYcuBeLYZbN3zirSatY9BtpfcbLnetEiz4RkpWc527cJw153ARAcX2a1rLi41cEQfdDvgobTaX39h6Ab"
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
