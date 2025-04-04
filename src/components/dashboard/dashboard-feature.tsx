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
    "qdgw4NVP1TQ4UgrBLs4i2JhNsoWfGSGPW7PJtHC4igXmKjbhj67Y2T7V7KPPQNLm6UkSbaohXkK22N6eNVTKqZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zDbuHtmxBJCK9CcvapuYMKqAMVJ3zu7bERFHgcvC7nGkqdRQDYYuUcRpfAHY7fcEZ8Q8b1AKwDnRNGjGTGhA5X",
  "key1": "2SRBNjAAPEUMW2PSuhbJR7NYrxbJdV9LDJd42yVm8G7bftEqzFN7XK4EZHjWMtJJaBkJAikF1FKmtUb9DjVMkRyy",
  "key2": "3eNTShjuAPeGxbtmtudXCkLE1eJv4mYRdTEUGopYsyjMioGiAuZAtXm3oxVjP1puS4Ugy7PoZqDsPRMNLyvpgP6G",
  "key3": "2Dcd4y4KRkGhr1aDGRaMhdZNz5w7HFto4zFNYn7pU3HMEyKdsgTXZPBueDSUFWaPC99MBRztaU6FcHPVBBoCeopf",
  "key4": "3hFKMR4uz97uWC9bCrd5B4u5XKYponmzifwSJR8iFHRKGuL7xLiqvTwN5uBj2k4P4qZay6FgJhueeSrHLUvr7Mi2",
  "key5": "3WDBP8pLobp5otp8WYanQN4DS45JiJDkejDKdWGVywLBFBoXJbrJj2BXJmh4CG6qeHQ3vCnoiwL9jWvu3orMPFyW",
  "key6": "4hHdtBmR9ypQuGmML23UZT8antLCSfKTsBccKRd9GZMjypG7GE6dcr9cdr6gNXdFXNtqrZ5fFYHHJDsbCXjABugw",
  "key7": "3QREodACSJ9rbYFWSVAsMnQbyh2DW1dGLYUoKXNnGbJgMf5hL7MUdFwNHNwHTTaaHgxhXnY8rx29T9DJVfUFhenK",
  "key8": "4NKWMtKUgH8JUCkt7VMGSwjNZ6UfJbHrudKUwBdnMYTqb6NBpodASmTvvd4DtfxmuvQ6rTNYn9U7ZZRTSWoZHpjM",
  "key9": "5MH2r1YoEr2jqqHk8KxH9fzfpULPLH93dWtzB3HLLa9RnVoqvL3PdEyBpEivbHD9i9oDzeYaKHaaTGQjPjGfEF9z",
  "key10": "pWD89osUjiGEV3cMnf8crZU9QyrvtKSNtfrGAM1jjc1kb1EGUu78dJk2DkKNbEEE6vGM9VgLs2GKmFEfkA99FEa",
  "key11": "3rbmW5ebVgTKEsM1WGRMSN8AfpEYtxXYzXJHn6sx3pqXjD9bLsHsQAoetDuc7ebQ4XFKV4P1tTHU4WY18BNQX7Sa",
  "key12": "4ihscaosWjeajnJDEL2BAxiUyz3oyLjqoiUezJq9QCLBUWVy4xW76Ecj1J6qkTgG4zgSZChaHyRdQQ5WNbgH3oQX",
  "key13": "TAHUS3LK7B5rtHMXuzfivBtY3uNBzEyCammvPBDijEkCdSqbeoRZ167j9RxGE8xUBHRrxV6RkhpYcGK1V9vCYLQ",
  "key14": "4kpnkYT2YjRz636ujGeoUoERhQjnCxTmuh7Xcf5RG6A9LBELR4fewNCLRDNhVCSFjJNvmdXtVeLgj5t5ZioKgdcb",
  "key15": "57MubAgZ5pC81myZ3k5tMqhciASQ1Mga7k876ZaFg5jkYNxNqj2YaxtKA6H4DD9KrMidzXjYXovHzwA7y37NyUJs",
  "key16": "5kQvYAauwLUNozAKTw9tjHsUx3vNAEU5QCd4wVddhps9Lvik6sbrohjnHAGrwCuM54pGkv62c18MkGjHPsunRW6a",
  "key17": "5em4cq4C5tWP49fYd1744dr8JaPRVuqtemPHpckc8YkYNS4MfPyDb5aPoZ3bWuJaNAhy11RjFMt56RmsjFmA8aqT",
  "key18": "xgz9Vr2YVNTU2uaYNSqYFXub4XsQpQLvrUJY4AkbkWigyBRptse1v3fm452vMYDQeu8dY5agnkEmAApfEToeKSd",
  "key19": "3gK2uho5SsX4gcENvcYGA72S7YJS5w5A3sdofJDhsaMGWiPKvuFMT433DaDk8iBwm9FgZ77xKcQPxFvASaXeavLv",
  "key20": "5354UvA5QLFeZPAafCyBQoQHzgfngcAcW4xhnBWDnNeW9eH3gK2ZENCYoo3AEUj1km6JLAL91meXqwxBgN2nCWUy",
  "key21": "27ZKC7kRyWHfdgL9HRVZmhkKaHswzZxaQv4TEHhuRtV6S3RzqVck3MFHkxxY2of8DTyiUovCYTMJa4wXAaE7Psuy",
  "key22": "5nMQHPk1YBg4J89r5RhKg8BGy9Ed2LVYMpiasjLb4jKvnAmRK3LtqqzQkjnVm7S2DFYgaHa2TfHVzbV5PN1rFutE",
  "key23": "3582hh7KfZS2hDxSvDwZpMBorVNyNXkfMXfKVoDiZxW3zKRtQZ27kqK848i6yCchKnVyvmxw8okFFeJTQRsgRu7B",
  "key24": "62qSWgMUjbKyJNN6SUn1VBAGzFujqYYvWfwLch3fBhLxgwfCtCUBE2EGhwTzWuRwC8tRbdxaHQ2mygbEcVAKEsos",
  "key25": "ssP2PE8bFYKwpMwz48zsejEgfzv5oUwokVahPnpPeAvF1C1VWkvhVnw4a9v7kG7Atmnf3Yu2zwY2wxxXDz2MfBB",
  "key26": "4LrTvvR6kTHej3Vz3j9Ga1z3N1AKr2Qnn9o3dkuR4JNEUDZJUjvpGfyitYZyAvdsd3f1Pm8aGWsF2gLzbzGJ1nKd",
  "key27": "5nmTit35k2KJDSE3hQZewtRessqq6mLRj8ktLrxBVJBz1gde4RcwU9Ghq5u28z8UYpKdeY36eEhhX17MaavXzth",
  "key28": "2Fbq372nHCxsaXk3HNYEiEg3oVFpyurD38QfH8p95AdLkMkNHEabgrJwU5iDUyvYg4WpbMVXh99xa4oquKwTvfaT",
  "key29": "2uSf2Cwq9ScxZhVtZaiDgnEPqB7Lz6ENwTWquEotKAespESZEyTaqadswNDH8LYeFjbmRp2a6ctbFCw5gYLEPdv7",
  "key30": "tv6RMw1ypRD5h7isuNmxiESmstYr6eR4ibWcLxj4bbWJwdXuEk8B2HR6d8ghfjSNtdESf9ZsmCfcKiq5TSNTCwp",
  "key31": "T6CwVxa8x7Wo4PRw7VJrrcYsah65ZNZ9d14g49xYbMbcHLJvvPB81qEuaMerYfjCQDVmeayZAoAV4VgykPKuRfZ",
  "key32": "2FVEvkQ7XH16Rfk8DuaJmnu987J5L2qSDdWMSMMh2SW2oHU2p8xPKKjZZ66XpSWqNyNQ6s2jcCym7Vi2Vhph4wCK",
  "key33": "41NggCrCurBNTM82FbSvASDtRb9m5tYnbaEX76zdtD6aXsBERxsFFw3CwZvBeE7BSp7mUdvD9j2ETkmt3TzMAJSp"
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
