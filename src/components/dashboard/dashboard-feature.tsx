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
    "2vK7frUzJxiRKUkT9ThU1Dy2dwE9pe59vA5X7UD4tJ8FPDQEqvYh5dbEPXSkymfBAnLLu4VnJVUDEeZpyB1v5NoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLL3k6UNAuVSL8piv9rQH9JrasTYRikC48JeBPuPh3MvSKCzdb3wHTyfTuigPQayrarTM816NzEjSXG5cVK4Wt5",
  "key1": "2BtRWgDdHmEK59xNQGXeiJGUTacuNonyehG3mxht3rgUphpuwxCkxmgCQDXpUFrV2stkySshPHuBPiNgRdWqCU6L",
  "key2": "5TN15nCAP63Rf4t5sTsW9zJzBqe8Hp1KzCoVAqR6yyDHohAHafQUqyHwKR8Kq5h7nS5D3nrh8NqRpJ6PUQwjoSEN",
  "key3": "Ugi3dfCmVW4TabMFXmYQFZETSYsu3efkDtKJgNQ1MwVU6UrVfRgXTEiq9pJnwPxTUrADSPWj8gYHcSQyAS4SHpk",
  "key4": "ouoFDunZsR5fj2883f4QbHwrHGtGrADd5xA82NoFNGdvqFjeYara43k5TrdZRqRiocBVMCoP3dpqD6Ga7GFgzaP",
  "key5": "3w3847W4H6N9hBUps5MvmkweXmd9ZDqAPnMbieJn3ihxQPQ5GwSeW6dmckfz5j9ddXDqLjSxuDJm2SJZSLjyekh1",
  "key6": "5ojyWRtcmQMNVvncjM7aCyP1DXmsKgAzw9Y1csp8FQFzKEAhuhQqvgpxM8HhFetCbwjAxRbzjtB2LbdDMUBZw2F8",
  "key7": "24zVjR1q9VZ9bikdH8q8oDDe1qVvJn73CMbnLQvTFYxXLkmWUCsNDBiAzMTSLmtvfiWyoFGtHTjsmUXP51F7ACSE",
  "key8": "5CadswwGcFDEa6zxq4P4F1iY2BxVepykJuRDutd5Tary5o2BdrQEnbu6hzqDDMYeDsTUvsPxXx2t1x3mW3q1FPyL",
  "key9": "3dF9FPHzz1vJvdyuZr62gp6Qdan7QzwnmoafPenzPSrk84QAT986n38sEKWPHZ4CcGCaqoJHev4gcYuDZAztUE21",
  "key10": "39Z3d4QnQSLYVY1vhjFUM36barRDZX2ZunCRoPJeogAXrPrd4cj1yoZ4Zpom5RTqMrJA1uSdYyJQcG83rXUrrXhG",
  "key11": "31QGFg8WkS1YRGWFWM434Lv7buHF8xNMgvNopUz1QHbZ7QD2dTQseVFRNWRoc1h6nkNJ16RrtGnSaryALPhzcquM",
  "key12": "36t15WSXnGZsjVLJYKmXwe5EDrF9NfCJHKtAhLFujZx7ZeKzJ8mr9h2fHbNdrmjt2rYBZSsh7EaTHUmXgAFmWmrm",
  "key13": "9k7A3i2afxAYBrhbUD2n94YJwHNocgWgNSJ59Sb1kdpeRozVFiZaYuTK8KfXJhmk3LtS3gm5ZuvXGMbyk7wcuLZ",
  "key14": "2GDe5KkiT5SWgiF7e7k1m4EwZFk9uv3sWVZRmQ9ccnewAQeMH41CZxq9YqfHLLcQAWMwLy4iLuw7cRNDv33nEJPr",
  "key15": "45wRyCbLAh3xJTQ5FjinukbuUFmKGcGfuTkSjTiAHjEtQYLatoVauh826aHqjpWnETbMegZKVHLvaTk8DtHHq8fy",
  "key16": "2Lq27E5pLXQmXGuSeGmx9P2ohighDxWgAB6Jovnxs9SpyP5tPpY6hpqXrrgraQkKDwR7nmBH22WqB72Q23sNiiWo",
  "key17": "2K5VSxV4sVUAvZFRi95D3oALrywKxH53x5xReQjWS9w3M6Fv43DzYB3t2XyjsWgSghnkodMYCYLoy8KuqzCcHA5C",
  "key18": "5f5UHWLRDUeSXSFMyumRr3W2TVb15sHEQrAoGJ53ZmgvRB4aBhRgPyH6JewUUBQ2nho1mGS4ixvwui1iZVpcLAkK",
  "key19": "4Sp2XLN1VBfNyLjFX4sQTzYXCVeFoJVFxJunfg2eTT5B41a7KBFc34DFLxiW3ijhUyiticubEZDtvisv2m9wWBhn",
  "key20": "414sJhqrf7vsvADgM2TPHzWfrLn6TnkSdPwHn8X153NF6rG53Y9EncRSK1BctuEKVrKVHp77beLcR8qskFqA7t2P",
  "key21": "2rYK3xsWFi943B7FYtamPXm8apxEMn7cPasFnwmNX1cgvt7EscVABmYAbdZiRPu7Cj7yGXmaYCVCnCU3T4XVtDqf",
  "key22": "3Mht2A8G1kS1Kx1W8Rg8ySEFnyYqbLMQpWdWX7tboP2WcVW2T4Q8M9dq2EwjfAPDqL2JcHeW6nag6HHdxDFQsic7",
  "key23": "2zLvK32BqyiPEg5JHnB7EZs6kW9o8hyLoVpYfWdz3M9vP6kbePmphdUUyLaXeU7RKqTh9eiSyb7gg3owqXfgxMQ",
  "key24": "Su4FXHNA2dGHbu3fhAcQ6VuHC3mVd63YoGKKrVNAjef5DTik9BTgECAT5onRZmLPje9tHjTAt2PTDoSe3UnbuXh",
  "key25": "2SyBffEGeXwkLzZvRqqnW9DFPrV1gvwFQdqb9NUiYrgSF38Pj2Q4ChtkhCLWLAQiNTNfuuy2ArfDtwfKuL2aLwpx"
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
