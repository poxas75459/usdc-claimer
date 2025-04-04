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
    "3cKGdm2FTkFZyNuYvaoLphxPxrPLfcNUkhKp9HrZeVdRB9xpz5pKrZ29CPo7FrBph3XtjQEWdzaJqEc7j3zBxcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bhkLsUch3d5evrBZBw6R8bBjgEryr5E3L88ZZ7Lj4V3XLYYBFYXWmQJyG9kSCwZRxdcMqbgGjDqKtfoSqYjXaD",
  "key1": "2tYFUv8GJoKSqnLBL2wUtYunVWWy8vFpPuLUe9YFTB3wYmdWVFxLjwGeCtU2ZFUQRmuuUwuwjZhJTE461EuSRW1Q",
  "key2": "2w2forW8sVKKzXZeFNv1vv9FP5sQPzjEroTfCtSB2N8he3MpTLopjFDkb9YFtKFT8EnfF57HX2S7eRCDcSVwzq2W",
  "key3": "gNNWxpKDswDALDS2SUiAPgS7GyKJBapmWd37fxzGrFF3ykavrBZHKAxZzpRCP62D1Pikxbjyoes91SY7ZoJLbFD",
  "key4": "65rB2xLBeXW98wge4qaXk4PdwxF6tbLQCMDJdHWDaUPwD2ocgLbTAhqDL1i9X9AwRjt7utWpzN6T9jjKemWa3FNp",
  "key5": "NhdyJQAkHkxeKo78gw7WbFQkoDSMVD2L473eZamF79NJ3Fk2L54ucMq8k5msfwCsa8ZPCLPj5C7Nkc8qYuGREX3",
  "key6": "2BaLbbUvvwsrh8GDgzpzEP8AhvKrsXZjuwBMjT9cX7e1qCJdj7f2Cw92wgeN7SZMtGA9ePchzhqDxbLmw5djbtg",
  "key7": "25UceGp3LLNWEN4H3Em7efRiusHSsMWqEmkqT1sVgDm4vXLxfjQDiS6x26v9N55wYbRmkPLGYaSommGLG4deaXzo",
  "key8": "ErrXcgR1XB9YDTQAJMEo1PumWWbp88MDxfk1oaRkYS1rpwoHwp1BxcWrFoHEEDapuyQTNF4V2FVrRseqaAjKLSv",
  "key9": "4w8pU88TBZSJQSvQBFaQz9PvVexQPgHu72DXMj6gvcdLieu7e1w6ZhgFjg6LMaMQg1r6xwr1i26s2FAZR4h9GEEt",
  "key10": "3iwzQGXAag3oXRBNPW9PGkpzm4kCSM18qBBHzMQjxq3ehrGbuYNc1wjTLvYmiHh2TjbYdDhRCQBubmYzG2aB61sR",
  "key11": "2RMgeiLC1Z3qpNSYscnNZ7y6JajVxxp42nCdXEznuoz8CFheGsc76n4b3qCTFpvBADTt8MKvXffZ12SXTaGSXhhL",
  "key12": "29ZRg2LAFrUmF5p4wfk9g8BJZmrqh5S8GZ3Stqbqw77kRrVFzDePe3JVQT1B8SCRciVR8bcQ6ucyQcTrBQYuP5Av",
  "key13": "3cxWQLreMfeX2uNQZ6kd4gNtiqrKnVpYfo9XtNeT6r6isy6i2tAoJNGyG2ouHewvtE5J3Q8qnZJHgKJKTE3hXTan",
  "key14": "29pps1kYqSj1ZQ467jm582ZL9yLwtm5d3VDYfUeYnqLjdeJTwgcih3NGe9hZB3LbiPwZrnTsPpR1pa2ecpVSsQna",
  "key15": "hz79G3ka3dy4fyLqJVdXAL6PQhoZcZDEchhXWLCUwZBY7qYSns8Z4wcaYkmd6bfLA7EUG1AdXRchHPiXUoHYtLK",
  "key16": "Ja9t6jd1GsKVnhgVyzRQC1e9ewBumfkDjTknoQ3JYKoPjpxftsDJyxW6ZJ7Cv7Pc3BpFkt6X1LE66CQEb89rbSd",
  "key17": "4TrDk63SHT6py7tycfXsME9xTXHnBC2V3haVwxdfZwvZxiVZPJH7Kb97QR8ccgc3F6gVexM37ctjH1SnNg2TYmaF",
  "key18": "2XigrvdkJKuvafacMNGekYLPMj1chajRkfxh9bBVBnJkFUMdFB71F4QU3gXbZnAF9QoAsJRbqSo6tY6U8ZZFVbPA",
  "key19": "4dYXPFwhbBoJCKBUQc1SMZKT5xYaZFm2SJ6LQUi7Z9f54h5G1TDjaH1mKLDFnNEBLyCsVkUSGyLouAXMhy8n8ax6",
  "key20": "4en2pV83qfT8Hp1Y9meqegYGkKYuC4eDMJJmgVqz1jWFatBLMJ1urNeqtSEo4UxaynXFBxPAXMkfaxMZtdH31cDu",
  "key21": "5NSTtZtnc5JTaoy7E9bosjJWHyYEBCuXTiHMTtmmyvcwxA9EevhPqk4P86p7SViTmyvX8SBQYfdHLtLuFycbttbv",
  "key22": "34EYpQWSeafU7S6bbvsMzJV6B7hjG6791GFaRuugxSLo5dgUyDMCcfqHworsjM4Gvqh4TK2XPdwDxhHyCtJ8D6Gk",
  "key23": "PSudUynFSbVDLizTGcrmZud1MTJfB6zCd5jgsjgxy628H3QDZAehA5uNCtDF1coFzRupz99yrBQAMxA9cpxSg6s",
  "key24": "5oVjA9BVft8JHontbsYZmnHffXoYDGzArT5pg2nxTP7xhQyJs7KaTYeofaSoFTTW8iAD9GY9F6Gd5aWh9fbLsvpu",
  "key25": "2Q4YF7WE7LKiQaCj326kjcAY9ohk4gZiP6E1WnpKfig8FmVKQUiqXR1UzDbXA3VsWUgoPStwz76DgqoXep9rtcQ3",
  "key26": "4otUa1tnXghoravXDtPqUz9e5xExqQGd5MVJoqBMipXEzRLXs8E91sKR4BkXQ4VMjokVtLAknYmXJBAj7V8CTt2j",
  "key27": "3ps9BdB7WQpaibn6AndhAGXgBsCx3n378c9Pt79opSjGfKKGKKXcDp8yX7YXDPCCWyEL8rvPJGphmV1Gs1JYv1Nh",
  "key28": "3tGg9JE6ZKYGCP77kW29F5PocSDinQAHRb8y2FX3Dhy5xWP47QQmuavDx1HKCdhekSREL8Dte9eKabu6Q2UK4cF7",
  "key29": "24yDBUQYVxNXQRj7KXXRtATDeghkzurzwX49a8nvtLW4zy327c28GfjqHAGnMAAXa5JLPbTYCEm9P77vSEpEM6jq",
  "key30": "eyZXE9sddXGunZVGKTQCUDZA79P3keS9RNV6s1SgUjQKhndsdZT1vs6Whk9HLhQxnTLs28hHxKXjahWd86UxJtE"
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
