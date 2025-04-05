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
    "2xdnyMHC919uNEFqi4CDu92tLUajSUpZyv7bEoWzXAJQYr214A9xR2Qer5BNeV3fodezMs5LYyAmSoidZQj99Dha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqqQETzpSjVDQXQpu7tW4XMhWboVYNm2kxTFjx2ysTCDKoCrGbqQ7RLbXj8DhnsmNc9jY7MWxn7m4B24wyzUvCj",
  "key1": "3F4qbLt9DCUxCU4pxneoipkKVDV6cua16N5NcfEU9TjxRTedMArd8TMrpVPWTqQPYZyccdnPc8jHBd9QsgTNpGYo",
  "key2": "S8Up81jzfCh4ajorqiRUUVQa7CNh3BkcsiDXTd527iJr9TffMUoJTrr7kvp5exg1WnJxGoDqkP16Xd2n4ba8ngH",
  "key3": "5YTFRNkiE4i31Btr6uUTtQ4ZJmsWNW5AmtuS2bsh62MFVh7vZFXVZDEwCuZoHQCPjpSx4L5UiiSjC4DTTzE9mCVA",
  "key4": "kaUQaDPg6EL7vdQf7BzkepaFErNjh9ZMA7xzVK4KGCjsx2fPDu5LJHwaJcsLh7xKFyri6Z2bCTUzvbqEyz1NZGM",
  "key5": "j6wRpap6C4Z6hn7kvUYcnFfJcP5Y1CCyUW7f4KBFSMU6U7CLzpYNSmfQeVFN9eSvgspZGMhPffbHywF5QzNbqVy",
  "key6": "XYCCWGyuF5JHamsXnmKZEC1JXz4LRxMJjZ7KagEsfrG31Hs7htv5JokG2puY741RnzE8TzppLTJCG1RPtBPPhMZ",
  "key7": "2f93y689A1S39BeJ6k2Uz5m7vUGtvTSPgkp8JPgfmBer33VyWcaCJ12x4jCyYfMnzYh2KGCo5jtSM2CU45GoZmVk",
  "key8": "3FDjz1G1CwzzsjJwp1pMfXnpGtYJfmXBhomR6QVGbYma9jjAAhTyqaRVvRu5J5sQPng16NAzqMyN1rc4mW8L8anV",
  "key9": "21ia3LkFrdzNEjWGWiRarALpRbviG6pEnMFBjc74MXar2FBQmmKZNECtUmqu4FTXa8UtasBZ428NJ6zfDVMtmRba",
  "key10": "5uG6CBp2M6DRT1C2UD2YVktMFXKk9FkJtRyDAv8ezoDjFHRFQjYBH6sGCaD9YarXx2ogX5wsFb3sKbYcM2EDhGWK",
  "key11": "X9i9efhniuojoeYM65GLxpbZgxLsFwVEQ52dPyjHwrvdSzytq9dGwjrSDNzPub8xZeD3vwTMgztd7U4jWJ3mZW2",
  "key12": "b3PzbzaqsnAHs4JZ6LQCoa34imzrmbfPTd6W7P15RnRDVCx2mVepV86CP5ZDSLXqvygKpmdk6BUybdUPhfhWQwd",
  "key13": "5Jox9VXsTrprpdzD9g7Cj9utX4PKG8LhZboqWHDMYzWUyQJ1ao6N3LThcBmnKtKmX42ujuXhLjmTYk9FoRmB6nMW",
  "key14": "5gD2ifJ3Rqz5Us43Rtx4ZH5PpQYU4pr1rpuH8hNN3bufUcQ96ckemCd7rbcvQg3r6CfeFA2EU4wFGaKpPANgY2Lq",
  "key15": "G8VUNaPt55QgC3ynkm66t7cKoLFZLbpLdsa4YJm2anHet863gERGUrXLMQifxemrxqw9XxNzQ6CgvAWhoLq6siN",
  "key16": "46DaYjvmTdKxUujBiQ7vKhNnsWZGQxuA8qAegWhx1sxytAgxio7gMCdXVNpZgCTszwx1m3CjHPn5yWeBnmi4VNsn",
  "key17": "2F4MDw6rnEByFF6PriLfDfvGmZ3cy13gCYHyxh493z3mVLMrMypqA7vZgx6zxMCWGfV7TpJ7jQivi8HH2mySUf61",
  "key18": "4Lw6JrSgSNoRAXF9Yi6hvw9PTJYom6DVvf8hQek6m7orhbMBtaLETxVoQJTi2w4f5m2hYisxHEA3XWVDcNBZP4tp",
  "key19": "3LdKtBRtAD8GwrUtxdUnKDrBLb6j51cLKPLRWkE3B6QpY95M41AZQPs2zb6PWA5Js1Ak2KL4xZrcvktdoEfintXi",
  "key20": "65bmhRKKzAS8REKTqbrLsfTrYvn6HQAdnNqd51uy4tVVGqkbnYQFcbt1oAcUQhBRebZmSbQvPvr3AdCRLYRTfVd6",
  "key21": "5w8jUe2VKWJCpKk4SGYKMtmc55g7LiVwZfikSaLkqCas87xbRRedGKkADT5L5Gv6kCC75EbBJLASm5yb4QZUvD4m",
  "key22": "5gxDJQrbrgkbo9rhmJA77i6PU74qQxhG1P8PxYAkRFjEqPRB46hDGf2kHFVY8YXqKCsispXKepeQeaLpggSqYqGP",
  "key23": "3dnCQfsUmnfqYHLKEbdVViDvjT7p7CboLfMMtqe3FifPtw5Yjnd4AiKMPcBLVJPFNAxjbcStuWD9yZUgoZJ6q1U3",
  "key24": "5aYa4gMoQ1VYEfbz623M8bBhebQGe2Ff4KKRaArzFfDe6nVcm5rmPJg5duQoxddWeJzd2vSg6oBWsZNE8NWFNNmP",
  "key25": "5JgK7ym3hzQNibjUdqkoYn8D39QfxvHfBj3eep4ffHugKe7fXMQVq3z2RvwDSnXNF11A49C7chccPRiu1afa592W",
  "key26": "5UnM1FH9V5sZcSom6M1k2aVdeFRP2HzdLwCPz4AchmCckyU4yKTZKkdT63VhsdSSXsZBJ9mxte3RRtLgvFa89a7o",
  "key27": "2TZKMR1iANTJM9SQFDtHGupvj7MEBEnTXpnAuC4eJf3QuGUXnm11N5codDDsEZBr2ALeqQkBP1BxmKoMi3kQELw6",
  "key28": "4EPzGDWKqoYhe1vqrvDh2Q38u37wMAiNeV7a9Pjd2McoeZjae2b8Pa2H1FepejxxDXzAoG8D3VZnifZDeYpHdwH3",
  "key29": "zmdKAXcSx8MGx1xLuBsPYNxNjwz47d3nZpvxxLPhKPD9ooDr7xoeRPThBFh2TH8Q4bUWGrQyMwrwn534bfJiyXV"
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
