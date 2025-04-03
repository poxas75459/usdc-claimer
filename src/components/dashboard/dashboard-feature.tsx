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
    "3pwUUFdHUXerz4YRqgwAALpwbu9owcLB2h9K2PEscRoCGZsr4KjETUbPtszBXJnWowZiR1mXGaSeWbZ2EBwKRQPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tm662SPTLrSUMcicLf847KJvsR2zX8g6ZyQ1WHsnUQHVqV6psqKGn5iVDKcGwDzH2nZ99Q7Vs4vLLBzsZ5yKYQX",
  "key1": "4skGsR5o4r9iAsZgLj1o3FyPpVHjELTKsmqCbRXikUEchpM6d6WtgJ56iwJFZrpSiHdXp9kpoRjL3rUb5Dpqu9Xv",
  "key2": "Qf8WN4iWaAD2AueJJiHYVry9DFhGadyLBnU4NvMt3pNAWz5hSGQLmVJ1ENsW4s9MQJogX7gZiZdQ19KcAc6oUBA",
  "key3": "5BZ2nFCeNEmfu8CjWsdiMfffLW9aC6zNUKy1GbcvudXh5bkGea4EVMzAcShKdEXECACEDcq2Jxnt5NnpVLs4neod",
  "key4": "2sC5mrGv5LMrWKXPBasmPNdSn6Ngm3vAiAkpR6njuHZdmVuaU4pqZYgALAMeGCz1SwubPqMaaJDPPebnDRmAFpSo",
  "key5": "4XkEYTouh4JvbysDX1GDW4VwDXXgL1EsTAE8xhfhVSEiU4VjEcaA6oeq4h4NSPdMutYPPt4nXa4giZJno716hyes",
  "key6": "3Sb11RjkzD8W94cnQBhKyyF6rc4LkEMAPpYNVWDAKiKaaDQPG2TgxxuFYVRUnDMkydC8NqSdHBvxwvbQexT5Ce2F",
  "key7": "2SCU9sXg26cBJ74pqqr3nqRnMQGA92yBvUosbMWtTHFaHoJPxSySQhdZckj4gZeVXcDf1pQvcpKnsycrmcD9F77F",
  "key8": "326GG2hvQf1a5S3Z4VCaRjFPhSjJcGTZa6RdwGKwwc3LCZjdXvqEFULNbwHvTWeybMSHSshEjcU26ivHXHFVrMG8",
  "key9": "3ZESRr5mKWhVAYb6tmNRqbXJHJRvUUcJLywSC3H72XnJ9TEBX6VxKfEwNQrMGzLoaj7cAUYk8HzNWEn5umY1py8q",
  "key10": "3vV2a9xS2BYSKxiLgHYAJtoicY1rqZSrTLsMW7Cw8gTTddVwvC8wquZaXAbpf6MCaBNwjSdi5DEk4mKuadfuctQf",
  "key11": "pwa9hxbrjxn93hCKmVda5s7hPXkqHKMUREcDvuvMrrwySrNbWE4NAbsLdtLo2FFu9pVhE6wZ2Z32nUXo41MYPCf",
  "key12": "2w8DWZB15cAMGdZDvSEkGoHgRD9Ei61bhz3oJGMEkcmMS7V8fysXzXMT474p4rTMQ2Eox4XjCALAifhWwNRtFPnu",
  "key13": "3M3XmGxwd9PMZ97Qce8feEsQQmYZUdtvQAVjaaYtzD9dtAtiq9bKNiWFKPsRnam9RZpgJFRYCdGhQACRyg3KP8wv",
  "key14": "5QzG9Md22dbF9r3doHjvaFRMKTPP3Ngmx8wVwDLRqvR9UfdzhvEZ79NyqQhSWrVzQTuHVQj1iRQ8A1B3z8ah5YZA",
  "key15": "4fgzVuwxLx8GBi2pwheAAgJhK6v6BsAudLtVxnCQo6cLHs9sCp47tJZXY5gLNQQwmpvdXwvU8NDdqhJqS6K7Ceyx",
  "key16": "3moHy2YJpgWT2pVTYAfBBaffEC3ghfGUVnuEPuJoMt5QGqqZvE5uULBsaAX4ezXrvp2UteqDmeBCU5S1hgWirrjU",
  "key17": "61MRHJ1UhevgULHpXyLnQFFQqujb3cuPKcHkcG9RC6dkEcDD61ZJY3CFUriPzP6rY7JHMGmpWZxaLWCmH6V8Bspm",
  "key18": "nSA9qtb8C2wTfmLz9fFsgCKqejrqyLpXsspb9tcSYtsT9SQ6PeTuoPUyw6mVPMkeHu28AcJgx1CYWSER9nrhnp1",
  "key19": "4GFWwnBR4NMiLqrv472Wn8C1MiNiFr8HGfyGMQm5mN5UfaqfhwhLtMt9c94RE48ytizVYsrmZJFSyp63i5NQB9Qw",
  "key20": "39PUbuy1a8xZfF6LwYjVEg5nYHA2WXjsMVeUme2kt3vVMWyP8JZPevCb7dcZ55qiC3FEKgQPNaV7LLtNax2cZnWh",
  "key21": "4eRqUDuaY7Zy7qGGw9NgJL9heZUcfE2uTXqJpf8HqFariVJhd1kTMMETGMnjxtCCmYw89qqzxviw9hpZA3aBSdZ6",
  "key22": "35vjfPAzNVUJ2tZfe23nKUJNpQmNCQz7ZRHqE984fw6kPKK5jNu2QoR3Ui2sbYASNr2PJ4NchiavyQ5Zf86ggasU",
  "key23": "vphoYVuyj8LW5FgRKaiRiSoA8gSuaBixCMGHJjAcrVqpVV1qW6yXhDhwfdNHXcqqubkVdPQL4joqwxgVaidQpth",
  "key24": "3exMCi9bbYzB87Y1DHatwj1hgGgQgi7pyPMayJVKHKTigQFZG4J2xRdy2YQRhBqi13kQ5NxoB5JP5o7k1DMpiyTM",
  "key25": "2Gkb5z8p3ea7Nk1oAA8VnpKLipC9aK1H9zRNtwdtnbTXr1wuZmZiCnfAPS48PvKLzxFTzbQBKwBdsvLd7q1Yp2V5",
  "key26": "65dJUaun4vtj9DPBEDdjKGjMi57pD29RQ6yc8SGUhJKxaxQfrCufp5X4URYBPhrk8L5HGLPBwMF3Prr7qTitH7rG",
  "key27": "5AsU589vueE7QS8xRkiKrYkVYGYKcGg7pb55C8ZPJVgvaxjU8pWAzWtuaBsGbi1aod9aJ575jRcLaHAMciocWhza",
  "key28": "3gutukFUK2kjb3iQnWATGgbbQtvNvM9YpaeyJwNkJXMgpfnNcmFxk9zf31RTMPhEgaRcHQmm1QvupYsmUCKbPUWy",
  "key29": "3X7emQjmeBhF59Zk3J43bQ75TUc3rjLYtbM1Qqp7vLwj1wuR7Z8RxggzmT9PKfDVyc2PaeqoQzJ9XZPajVvmYoQb",
  "key30": "eajdYQscK5AQueXKSs9aqcRZgSAwDP3u3LuWH2gbzjLAiz6ucx2s53hU2K9Ygrfdmqcv2SsLrDTownp1BhMKgxa",
  "key31": "2kEuQAHpEU4CMiqdj47hwGp6BZuN7GvUyCu8eFrcjV4ceFWRa4TvYfMQN4De2Psn9PPtEN9R9JuecVPn3RSHmsnh",
  "key32": "2CQ6Lzm71mqKcJMpspnS1h7T8fv4E6NSog2H8z18XHoiVupCaY5Wv7uFkhRniURCEYifVXajEPH6LkSy8AaFUHev",
  "key33": "5biN82WSB3zZtGgcqM8QGHgFnh16yxkCT9DskaVtWikznesjmmZWxotCi3H7jNrLstv6cMqA6Gs6Ms5txNWU4vRJ",
  "key34": "4esfrvuXdCf51MNRajn3GjJPxZzXAbmWQ8y3RpppNx2EGMRK3Fgv6UoWPwADZptEEufrvNhg7un9qUrAsm53HZZP"
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
