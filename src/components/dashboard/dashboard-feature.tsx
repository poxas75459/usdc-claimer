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
    "5rwcaXaWwjDRiYBY3FkHtenjnmJNfEd7MzaMGEmzkGycXVGwKWy5YyUg9nKcVtGHBiRH4X2irX1tyGw14Z38XswK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dQQnGEKwSMBeh6hu7gA4JinRtBR3bDEj3gSXoLtDrF7QSi8bpwKr7CoqSkkHc5spcPfBGyurrc6KFRv55bmAqD1",
  "key1": "315zLWiXaeWkqs4bhX8tWnN6AKMN8zFkmLi4hCZuyXWWk3VDaz3tPk2mQV3pZYHx1a7wtZxzprNHVMXoVSQVAHQK",
  "key2": "4gdfoDNcpYghru85hngt6Ac56ijVqwTNTKAYyCc26EhVD2Q95va26D1yiBHdzRe5NDDCBRcT24JRDDxUhke7fjgD",
  "key3": "4VjrVo2VFmvfXnazKHqhEXrMeEi8HZgAvznsqRWjACJqAzXrNqGm9i2odjmMSocYPYVHD6hEvQvNMZo1ctcBPQrt",
  "key4": "2vCzvHeJiqdnwNwabKW4cpXfvx4fVuMH3R9jRiWC7vTbMqYH7UBu9q1C2NaitTEJV3ZEBMaeWjeascgs3V663Koq",
  "key5": "KQ72iePozNt7qtVY91CGQokTCBo8QZfhSvk8ZJJLoE6UJKBEkPSqDraAxwdHoBKgZYDxffjweRvvQ5vgWuwQzXe",
  "key6": "3TxZ6oDwCPAxiEJfmhK7AGktFVuGkJUNMaaAzbqMFAf6u46EHqx3ZjQ6EGN4fic4XmsLi9U1PxRYStmB8j58JALK",
  "key7": "3tkUh75Wytt6iCJz8MNQu8Np3tTWkd6XYHk5dJ47rzz8SsV2x5U3rCUgrZK9aPibCXpJgEeQRbzTUcAxuhqRxoCg",
  "key8": "2NzCiPAM1k66QmmGPpB7zRGYnBWoARmCFMf1h88KNda1vDCdmBPGc97Eh7zL1xnHd1uRDVQyUDMv6bBd5MTBQKdq",
  "key9": "5F8ApqzRPwnSdrPWGuaC8yTBhw1v5uG5sBmtsWibhefrtfPhEcqTr95zTtVoaEnntC5vygF9Y5CATBQwKt3BMfNB",
  "key10": "2nzTQUAmFx7Wj4Ue4KdyVnNVoFme4Z3cm2exC2kb2vmT9PrRt5Q4QRy4kTBJ5KHaizJ6T7kgdTjHi3geLkcJDNN2",
  "key11": "2j4NF4ekZKw7nRMaCyjzNRsfmHbfbzT2fohv9WD64ProA2AKHm9XV4R3HeVTWk4XxaHgTLYnLmowJ2LxPggtEAoX",
  "key12": "5FjeLtEZdwSTFidnLbgAsyF9Uz8rH1kWeWgRXgkkQmXBEjywvW2WtrVSM9SP8r1nQ4r75QqfqF8iam9PLEYHkTon",
  "key13": "2Hvkm2WSrN2C3qYKx3AswbJHWBYqwr7sEXxVCvGkjQt6A8bz9MevYVeqJtQFwtfHj12ng7sfEr89Ka5Le4HMrrZz",
  "key14": "vsq6Xuz5JmC6pvVeq8FeSHkFW2r87xEN8N5Fj32NPgksASTCw5SXtzcM2nd1kWs1rpwCoN8pDXxp7jsTXbjpGSG",
  "key15": "55eecDScWb1eJAMnLGU69Ye6EiaxK9LYvX572xwkhaMia8FTkavm4JpTPKXFtdXjvCm5Jg2tCCVBg3GfRWWT8uzP",
  "key16": "2JF5Vzs2P7qAi1LLcSzTWtPCRgcvRhDT6LmfF5aCNEQ8BBuZ3LoZhggZC1LqJHY7DQmHnUMn8H9ZVWc91UZAB4HT",
  "key17": "2bdXbnU89JG1ou376JaWdJpAEHtQvSK1C1XSpq9JCbmX7TPqfXKnz6c7Kt4mvnWvUHjqxgLqBTH1UYoHfzmEDEaL",
  "key18": "tj6G77vzCg9Du3q9aNGm6hqjYJubVVNpEmU61GHM1WqVn1DePcfQDuyGQvMJrfqrjJ61kDgW9n7Yvqsq3PsqvhB",
  "key19": "5MUJyk2jpoHm9M6j2wATAjomkY6H1yFDwCTzLs9EWxhnFdaiwJVGfGPLXucu8yFJUMZHNZanZSaUvwwCJtCK1aBd",
  "key20": "2GmpMy5CXuSiEwXPibj9Mxe6frBi83bvV79iPQaSnfvVeeEsqaGUimRg2EmBGH5ozfPQEpAmWhurbKkARnwZhWEr",
  "key21": "44KZNJ1G8ADTX1ri9ZMjtaK5r5eF3jBLmpeMaEMQDULw7cPg2YBxhBGF3iXq4y8PHGKnUcsebK6D9cXm29Yzd21q",
  "key22": "5MpeyMQ8AzCWZ8J9532yqLTgwky7n6A7Kz3eeT3amChjc5p2HnUisr8N7UMBqbnGaHEw3ZSoGyadYzcXytgiPw6h",
  "key23": "3oGyZ6sv1Xnqdv3ajfPY2Y3CwB2ycijsgZdjsG1QNNAj9yHUkgxh4Aw2ckxbzGF8dBmSGtfiprqYPyTyZYy3PfWa",
  "key24": "Vf7uUEC3JuMjahEuP31Y6gEgUoJB8aW4pxUL7LUN5zzYzodHTjBohDspwijoBY777HLdXW1A8VbHYi7CT6DXDV6",
  "key25": "4haVkHYGNuzUJf1UiLpPKNHVJy42AnL3m9i22gzwsNb8Z6mLAVh2isU3A9EHhfv8VLdmzvH9GKAqGXLgWA3B1gzy",
  "key26": "3VDn1AAWhABiQh2xYNd6FrZBxk6CMC5xiZYbfKUsQWrkmnCYZKieT5oSa1v4VAuUW9hysdfKCXVCLi859mpHCXQQ",
  "key27": "qc2o8S1tJoGcXgHG2UEJb2H2gU4XedtkiW9N1JD7SBhrRnACA2B9SktLcWm8wCEVSvE1GFzMzfv3Xizxtab8jEi"
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
