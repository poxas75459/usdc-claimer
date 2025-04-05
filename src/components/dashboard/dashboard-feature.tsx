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
    "5z4D6vCap4DbnhgAEMciKvNfQ638PmgRuY15UD4fLQgjmKcQxBACacGaJA8YGPbcJTEUTMa4CdSpSD8XSYmA9Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYMRnoGvCRzdxCivSjoUgAUJBW47ZPqe6RD5BLffUYje8hENPmLwHnhZwnkwuqpKv89PJrnY7huWtSuceupQRKm",
  "key1": "3SbNwjLftpZHRPNXFihDfGfJe8EJTE1RKs4924n2P37e8MdMR8vU5UjChimG3P6MEE525e5C8NyHzJMTPPgP8x7t",
  "key2": "45rpjE77X8gsdSXPPiJ26QRS89wJa8pz5AeARkXYnhQMmjiVWrtwiwhF4vJHK2b2R1RspCHBPYx18XnkAfkwLnhA",
  "key3": "eTXj1bxWdVy6zJ1DScrE6vNh9JUe2eWfjS3yC5sTfPpb2WFdspnbgKCQ6fQmERFaVHG5S4sX9Kb1pP3k87RhSMR",
  "key4": "58rc1LdZqfEGLxTgzvJmC8Su9UfSqyFXU7da6Jb2vgzS4LS4x3Y32932oJTaLP4oS52YPgnm7MdY3jGVA56EtL5t",
  "key5": "3RQ8ZhbDtJno5FVXt8cFo7PozoWDK1mBmuiMphxy4w6BHaAQxvk9beorQos2nL3kWaLM7MvVmiCHRVaJZqRoHmsJ",
  "key6": "3u6Q7LRiN9Nx6NK18BLcLrY3LbgzKwP4PwbiNguc82gcHvXBHfUnXFUtDk6a6pyaDbb6h69NMZvydXeuPfenmt6Y",
  "key7": "2AJjA82KZK9nDa3F34AdaDXwwfcdLecPpgvJu6AGaqnyso36pXRx5Sq1hqq5vc5VMtmSZyZreFieDEH8LqvvUMko",
  "key8": "KE2XcSTeEHKVAJQyz9U7FTicmKf2Jbwz7d99qwdDSqLZdFzFJt1ATU6pWKvwEHTED67CqdsBtCwEc1qhmAnEK1A",
  "key9": "abqYpUAojkpE2iQGpGBBjjM3A45v6qWtLY6AWnDEo33pZwe68W7JUY8fJecKRGfJZcS68171aKHLhinJZgVztc3",
  "key10": "2mtPpt28CdzjMdgm3KShZFEt46A79uC3iKqQau7YWwdGdSNXY7HGcBDXTPJDAUMVpUyPyNdBE43k9gnwsnftx4dw",
  "key11": "279JyiA6ZZW4tDtowyuKBL1LDQRaypR5u1FymyopSH2Rk9ygyofdECKs4k9vfbjbmFXM6UHgmQxJWw4ZFJkxov8G",
  "key12": "2AT4X9wtSBQyrJ25qLwAvCNFdJsh7sDn9XLqDEED9tUQT3PURS3PKZHGphnUQvVfKPYT7QCNn48tchtdY9PohCaU",
  "key13": "62QKRxcc3rzQjbL3WnxcYtZ8mEm5MFfETvAEU2vt79bD5dDqKdr7nctiPQD9RursNLzoHKouRumQyNfvXxtiKm6M",
  "key14": "4aMW7jwHtGqQ1FryUTEKP7Lg68Hi6xwkUobQ3XmG16dVQB6iSxA18mDHhyoLjNinGFrTHCfSmoFSCzjxfsTGw1xN",
  "key15": "3jT9JyDcsQmzgV9S5QyFJCzcSDYVEGKCgxhdAsuEdmtZthFW6V3oeYJCLa2LUsMkfWEWZqGhxWMR27fCifCJ7eET",
  "key16": "2ZZ4cvdE6bnQvQ2v9i6ctpi9kxVZZEnGHSmEAHwrro85UP8H5VhPBdjYhjWhqhWmGey6an1eh9hSy95Wmawqn21L",
  "key17": "4rUanntgPXRhEhnbgs1nCgct5MFsH3BtEyciq98j6zm4jioin1TW83paQUsqSR3LLXkz4Vudnh5dR9oBXVx57pkL",
  "key18": "4KYF8Nz9RW12F5Fnp9Tbrc6znDyR8xRJRJrkcZdCpuVxQMSXsXPi62T5QjuGgmoRAvfPJhe2jbDRTHzcRD5AtxsA",
  "key19": "27tFuHs4eRKzvdje1xA48T5DxEJjK4wRtnZxZB7w83tEfDNxHs7oG7ai9AR7XzePwVPoofqZjFe9PtR1cWbvARLa",
  "key20": "2aiw5i5XBAp8oxCbHVaoLjP2DvNLRNUrQUhbg5KrS9HpdsjzZSb8ketuxD65nDEUG8E5Tz14DMj3Z4AmGhATnJfC",
  "key21": "4JdkTKpS6iD5otJUtdK1cutEzWk9dtchi9QfZFEMN3JwWD8Uib7idw2SqGNSEtBsVoc9vTBgsqLiEvnQk6BG9D2Q",
  "key22": "2YBhLggFBS4eeB4tiVjvbAfbZ3xKewfvKob2Vr5oyFG8N8mrUREEa1hCffezdgiBX39Hee8oxnSdt88x7515pjoY",
  "key23": "4GAhUXoVDzXPdF5ekMtJrF6r1X76qhPpEykYzAk9LmY7hHUWTr16jSNe2EPcVqR7YCae1eFHPMbaeJihozfRsCqk",
  "key24": "5fpaeciRFnj2x8HSpYmnokog8nYyGofFaNqXBW2Yj1kCXCenDw91CoCZMtZtE6q5dnmZk9w7DVZQ1iPZLc3wWWGt",
  "key25": "63bMJSYe4uJsfandERSxmiQ3JhDAEdsCJTJuPxtQxTS3CHNoF3zjWwFTFjPVZ63LrGUniCSbie8HeUiNaYLoMhaj",
  "key26": "3TPLDPF5hCdUYL8EVRjG5dznAzMpURCnUfN6NBdV6UrJ22rdRorVxi7PLHW5GBGnSFdiTTvKLf46mX73qQ7PcHEC",
  "key27": "qXmrjfRe4MQdkV4JtsEwTdoscxfaiNXMJodaTXZ3W28uoBSWG1da1afmuqdLbQg6kUYNx6EppXAFxVDyv91Zbse",
  "key28": "3uEh9zwrgjKi9DcRxN2etBhJ2LiSrfPt2HSLTyUPxdAxPP4tfnsc1VE11wu5NaqNKZhyKzoWez4LvxD6zaQvrjYR",
  "key29": "32mCypabbLHh2eGdSeXRLAisSp6uKJDdvQZ2gQSn79dACRZHqCL4VVi8rquUUz5ryXBmc1V87tJTbJX2LvZT9gT4",
  "key30": "4j8o2jMMqP2HuEJz3bF2yUasHmHRDn9ThbVArwZvEPU5Z3NifrYddSYBFdexBSpjj93AjynKRajrusy7yqp7uTzR",
  "key31": "3TnzgfppE8hZdRhXNdqY56KKmqT8aQpDEF91bPJNwUo9qQnbSAzDhvXtf3abNbjLKXN6eycSmeje4bNnbnrgQ96G",
  "key32": "5PNQzRaDn97icFKPg2n1vFVKnsb9k5XAAjyTvNPETxy2hHaGRnyko6TYFV36E8uKAirJrTv96wWHCB8gecTFPuQu",
  "key33": "57BNCptTGMHAKZccTorP8d6vTDrD9w8JSLxUWDyecTUjH39e3cPBGnc6Sr8KuJLfpVZbf1tntQskVHY89GtseAHo",
  "key34": "2xPfFAr4YnszkL2nqHxJcLcqhKCpi7oxNx1jj8Ady4zDej1KcgKEsnuJoyc8pgvaLbGLSyV2HXJha1xtVFHUw2G4",
  "key35": "4ndF6xXHS8k2kBtcknurcGQ3xsiuYsi9VLMfJjoEc3qLqcvF6wEzdqeEyiqDr5SN8tQdNfHi9TBHaoGDLTJ2ngsE",
  "key36": "5n4rMb7mvD9x5FivW7MpR8xJ6z55t21aBz7DomQqzaGKRSgZD4E9mMhXHtYu8GQDCskz559wZuZJLx1pCFTfxuXj",
  "key37": "4dhU31KzpWNT7ZaHvMLGBwasgJV2NjEgxrQWgogU9YbT8gMrfPj4f3cvEPo2Xu2vimfYx6FczpFyKMNVm32TR2gX",
  "key38": "2DvMoTuHSB2jsfPtMTdZRP9hn1RzAPtVifNVygtQyA6n5WR6B7qxf97GyYreibN1DtWdACyYuDn2ewSN68QQ662z",
  "key39": "5MKyV5TYvyVenznrT9gBPhKgjBV9XWe56VRH3WwgjuKVd14TM3zHVXyc7zsh7DKsAhcHRXauSErHwKtSG8bfpxnF",
  "key40": "2si6VnwC5vybx8REw8Xmj6wVAySsNREvGXnbSVKrHMt4ks1hpbbvbcK5yxcQLYc7s1jM8u1drsYmiGihrkgKyNqi",
  "key41": "3RBHd21hQDXZERdLy6Hb3Wz5MPf7doDW27AQrL32Z8DQ5VSWAzwNYAtwbDPEVhF2z8exYyZLBGqA3wpDe1LR8Aek",
  "key42": "3oLNwpHMAMyfXGempNPb4eNBsi6NGuJhGhsEmGdUwhdXqnj3AHeJK63VRGx3uqZZDou4NTrNVE5PoyyFCAJxLfeK",
  "key43": "5R9BfupYdyi4kf5KcrbxPmEXQHA1BGNCnEZy5JdxDneSoe6CaCSXvTTzqK115CoRbq1Db8rttAz3q2a6srLAanau",
  "key44": "wpfpwijH8pTCvwo3FxSbgUyyEvn7Z5MbuLeaiLmBAmvmarp6tn2xaiEZ6gXAwq4bsdztBrNJoEPiJWB4ixpUjtU",
  "key45": "4RqNgusWHzMt97MpRNqWTL6XRVxhgyPUFMvow84ebnuFpErmyeotR6SVAEpB3pu9fKcRFD5GgWCpmdEmBF8FZm43",
  "key46": "3JZyDxStLK8VjuZVPKvLbDEK6uqBBdEXvk4WQPptZYLKCkxcRCkCWqC7FvC9jBwsp6RL2bVGYzwWW8teepKrbo31",
  "key47": "488JSLhr7UsdGaKFco4V3LB3Dx6rfVseE3qd5SG8DzyaSAWwht4heszzCyNtbFdQQxc5F3xUMxGKHTtEPtV9ABmA",
  "key48": "42WWzHpPRiNsjUVRXRvp4gHvR97pcmuqW3kXXnCqd24js4sXZCKG6snReEL5oaxFNZ3i8pwspdCPqh7u9PC7H6ZL",
  "key49": "2Htb2sRTVBTsJfzG8EkLeuMd3Jpo45poXf7HRTv9KAsbgyTqK1q4x71rtUAnsTp3CWDV4wxRY9VzuREZM2cWQ73q"
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
