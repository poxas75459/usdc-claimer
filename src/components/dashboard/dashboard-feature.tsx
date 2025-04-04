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
    "43N2x75RaMotAnMUJMcAhc9sxNMJpTK2xuXFqSuxfTXxPYFEZZZ7ydtfHSwUuqkB1LY2zLwhgioKDa2itqZFKGQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muLL3UZTRfYXYxWY2iD859RdhpePhZLb7Q7zJ5vmvMru5A5eEC48J23irtVmweVWcLAFsKZWiipEzWgi3W7rogJ",
  "key1": "47ApYwxWjQVUZqvHTTUECTHm7tq4DyyNox7pTYaV5yHVkox2BNFthvUohD8zP4o3yQ3D5hrg7nN6eS8JJeCUHcvp",
  "key2": "5Q4oWLJbMiK8S1hNr3EV8NmzRcNeaPLx2w453y1LaeJCBgn4aafYfg4EAZeRfwhs4999rYZg5pAQctiKTez6oPQY",
  "key3": "3pupzvqsGLj8YPgXFBqYxE7y3EWupkuepi3mPHtcyuyJ93WeDY5QceHYc8FXxXajELFmJ9Bk5yZXA6CnScDE1uRx",
  "key4": "2sE1dVumu5dNp6T5Auym56ZFYTVxq18bZYG89oM3crgXYQU9ubc85AcKhxPnqzJTfQJuuHqKaKsPrBYd1NQaPpt4",
  "key5": "2HwtusWdRDXLPf2A6E58QBnzZDRTGtH7non483RyUhwQqVmbWkAGWMNyKLNt4HUM99n61y9aLd2M4V7GgFwWT6Kb",
  "key6": "4ni6ffnvUNitG3eydTcVapxSs2z2b2fJ7MfitRoRV1mLvMT2Fdy2QGca8XDz2ZFkFJECLRPp7zoxbxS4JCQy3VQp",
  "key7": "3kxRbw5CLJYwCrjEG636rjYTeyAtUjk2phbgzrAaRJDTxG7jCieWrDSMKdqHkBcVFLAVqpjA4yvQkTYDy1KeMBfW",
  "key8": "4Xb1Jgvd44DL3Cm9oKaNTtQQHS6EYfeREFEP3hRComSPfDXDnmV8BiLXzaht5XaoJMnAjXtMzpti4ptfBFsDyYK1",
  "key9": "G2wyu5DgqTnk56wZWQ6YHLUjKa4foFVTh64sdDzpidVFZJXSFLqb8eYXyLV99XTEPCYtk39aG7b6Y2KhaVzDc97",
  "key10": "vLbP2xXK5jMnX6br1xVZQkz9Pyny1EnhFBqrXHkHp8pXMbiSqhmMQPor3EqYHkfsj4obrxLDvQ36FphvsVVzqER",
  "key11": "4r6E1zp4CpAmjaGRd7uDDN5i38cDSkBtgtuWNmo4WgBZtUmEt9WopP8pbDQxLPc18k7xvv3tWD6naCyD6ATcgbZs",
  "key12": "2yVnMuKzVaFKd25xoqLQDFw2YwXkfdGyM9bfX71Z1SKDBGkzGCp5brYbsS8479UrWsF8qGWN6JcHjA1RfTEMKVez",
  "key13": "4kStM25BZJJyGwcRQzMGZZHnvTXUu3o32bnEpka5oNfJ1ENCjMkziT5Z7cVFP3jMGDTeewm3PNjphSzeab6qbZzw",
  "key14": "4GouFADviVSf3L1LYG7FmR72HCGufk3hkdjVexMrJNrkm5ToKgA9GXmkHaRtS3D935RpHpefKQdsgzn7oV2suvq",
  "key15": "bk418iztTcKkMQbVAv8Ywn6skn1gwyGFNmAeD76oenRXELU1rU7AB9NbSE5fes41vr6d1B926JKGiU6zD5RJRjS",
  "key16": "31LeqbZysRUdVFuxxFV4j8JytEA6o38vVAke4vebxdpCNUoHpyRxVLeb9fHchJsnJvBBx3dwXNRvVNaxk6Fzx1wH",
  "key17": "5ybnU6AjbqENuG9SsGihbC2LvwHBrs7LFqAPLPaH4N86twNunVCthX8bif8rzYYS1i83NH6kize73hoSDJJzyBXm",
  "key18": "2jrDK2LqSh8r18wmfxPJtEs91SXtujhtwC9Zaw3fi5JtNyqytX2QCTFntipXz8f2CQXxXjsfHxWqGDztuHcWpM69",
  "key19": "5YxQzkQKpiTqaFDJRP4tshrcLhtsAh6uS22W7sVD8z3wRQ6VX4nef7owggdnraPHkVFbdLwPD3qig5nX8HUBGv2F",
  "key20": "5DyBhzUV7nSdHri4gWSEZwDuJvLJWe3Tov7WScBzZvNs1LBbEQhdSH2WmQvcUr6dfWa3vv4AGYY3m1u224mUFkP",
  "key21": "jrh1C8H8ia4MWEeRXxZbGEQNcJEAn865NZgPubegujF9YvKmCju6vC3aCxxP2cAm5NJXkMxmsAwMGFVD6P3VM4P",
  "key22": "3QbwnzTuf5Zrcz2G731o5yaPuadr1zxBBRZebwXbFR2SRbTpCqXgigC9CAZVryVB7vqGwqNHYDyGAEXwPxpMTVQG",
  "key23": "xAPKdnyJYrKxq5TxEvTdtW9n2sJLToq5tNo8v9PcUnFX4JheXUBCbHtGxhYo5ZAZTLcDtowomNcgBpLYy3wELe7",
  "key24": "61PWd1LkCL5UxQ8nuKxfMetoPVUd6Br79Hxf1fnLXo671sACyGFBBmNc1rsjcrTm5B1nrqTCp9u53PR259L3pzT6",
  "key25": "2xjbi28jcVz3E2xPbafuA1QsPq3pCsYogZNxtjQjEfJgsBVanETytaJceAFmVC5m39uWskZa6XChrND7tHU9dmos",
  "key26": "5ZrLfFChdT2JCis31YSXwHFSsocApfXEnhpBPJ6qqrfzZJn2Y3QPzH92HjX2SnqccWvKh2UTvtKgQQLYfvA4aqqm",
  "key27": "5TfDBxPKPaZVwCikwauWxpfHv2HVHT7xK3wLYH4hwemASSsz8taVSf6oeBiAypEocZCqa1vrUjQd55d8rugzVaRe",
  "key28": "5NYYabzPqF6GRM8S713NN7CBoYaeaKSgM4EPTEKBh3fCGxMUpfuMUkS7YjCAP21A5hKTRANnwzkMn7uyqLBgeRTZ",
  "key29": "4s7DFRBmMBAczMoo7dBm5rgz8pk7TToAmjXboXFk6kdvPCmeMraqNPm9nwNoNNFvAPPcCe9YKNqnkokrMMMhJEiN",
  "key30": "3rjd3iy2sXBmQUMT85CE9dUcGSTdX9DjqPXEHXknBtZTEPynz8Jsiu92d5VnbTedsNy6mtbywyp3VQFqRKtLoQoe",
  "key31": "5CvaSnmsckG57UBpnPe8qiABhxtKYK3pCtu27PjrVzB45qUVw5kdjMZZBeumMAupNkaPjH3phnLceM77KeYs9c3n",
  "key32": "2Est9dkbgtY2QKTboBxwTPdeZ2mQQP2G9LqiKG8wC9YPNVL22ZutDzButLtdi29Z39TkBfK7Gfxo1d73cHSNoC5g",
  "key33": "3x43P7pdXURUpM6SWf7AbVRHsy2P2z43xPCGbLNJYnAgFqwWfPQtMdpFgWDatLaxX8eLu3SPSANqFvHffjQ1ydoh",
  "key34": "3PUpn56ihXNkqotLNHJcFJ6UrUZHv2G8ddN9UTP1cd7hqZzJUy58MvUZwnvALNZ3ufHmGVhnMJAUrY7FQncu671G",
  "key35": "2oSxDk1LavRsMy966NXf3zmUnpx4B6ZBWkE39eKTcdr8uWnDk6RPLMTeGd5sQhZeXLo965sqXBhLxfiknLMRhDaM",
  "key36": "4vaXW1QnKEjDUi22QUNzpqvm22HXpyN2wvPLPwxRmYwqpTLGFMJnMay9H4Uwhzr1uY5GubhUzUuTtTU337ZrbEL7",
  "key37": "64kFcrEPobUbr5ngzdrtdF531dXmeHeu4yMwtx2hJHq3HTA8V5RY8wk4vTL3oRUGQ4o6YGNSZ3RzQQBEr7cRuHBA",
  "key38": "3WppjE9gB6Diw8dhLzXdcNRLS3FRJ3XnPCwqmZtiNXvQNFjdqX5bVnHBRDnH3RMisTEfhMmdxW6vuL3vrbtTDVCW",
  "key39": "42NjNjCDEiRSX5GeXGsTuaHLKXPCR4sNBWw7UmnTuTWFtKg6hWWcm1h7JeLH4dGX9b1Ndbc3r6rb1j2DymjBT7hw",
  "key40": "4bZaW3Mk7W7CxtoyRKNDNe91jf8M4SdQjUL4xE6BTM5rphVgj4T5tXm11f5Z5kMEWbaQJtt7mfxKdBMQzxF5Ppdm",
  "key41": "WyHt8qYuknVy1rRYxvPoW93W5B1Mf5Tny1VZ3co1CQVkUmDgpmJ1D2Ar23JrLpKusg86s7BN9sojKRnv3mETUoP",
  "key42": "3wViB4VkfS9v3ZxoTRYFNpkoLHuvoZAe9NP3tPk7iCcRscZmfqKAPHhtnqJB7LG7TteDSDeBsZ7V8KA7tY8tX99b",
  "key43": "4syaiKqoUGbVYbwopPEn6tNCto26HMQ79pD2ihKsBpFyUyb87qPtm2G6nKqwFwo69jmqbxNVHGvtCDoNNobHVK8V",
  "key44": "5zrCxH2aYBSrLWt9ep8GCcyqfu4LY1JbptkgAZway6j9J9SNeWyHEHh9AS2vY9vVREmGUHtekiyikgmSHjiEpAKZ"
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
