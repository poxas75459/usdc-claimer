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
    "Z2uscvPU6GPCRPXTEteomVnZ8zGpozLBZM6KebEBsbe8NzfX2ry3vWM5Bg7eDDvDcrMum5fSpv9ekUqJAmbY8bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37owU92KjMeMxFuQ6cHXULCR1HDUCBjcm5SzuNZ6qppdAZD34XFHCnv9eKinru9FZpyQZKEcXJLkdTjtzGwTa58X",
  "key1": "5fAiTCPfnVQTiDevTfB7eqbYwKbDhZCcWBVYAF1MHdqB7dH31G3qApReYzwAj8cSaJJXm8WDKUeENdqVZ7BmtqKn",
  "key2": "21oN5kHwYSNPMxoD9TZaEPSN8rMsm4B27kNo17sdVMX6XDCGhdbF9KxPaa3HE62Amd5m61j5xhTXJUg7XqUyRSFA",
  "key3": "3yyJSCvE6KqTpLetKdypfYwpo4x4hsd61HBQnj8LqoDV6L3zN1gnBBLbNVvGtoF2Whj1e5wdvoMEuNrdEbscS6dS",
  "key4": "3hHLqpfay19jZz9yR6wu3HnhFPa1G8HRedfernx6FSoK9pqtjKFE5dnydcA6QFHfzw99Aa2dw1Kn8UT5QQJwSXkE",
  "key5": "2MWedKTf2mM9p3bo575JqqMM5kNFNmbZmw2Yx7HXKAH8uVuwE9oVps8GqChVbosc1xDRoPdbs5VT4c2tKGWDXDvm",
  "key6": "2srFGsEJ7uBC2LVRz36boVg6JzQKXXHwyR6nnmv5kMhZntuR8P3WYUSu4Ce8YnRhQEg2GLvPCCffo31cFmHNNvic",
  "key7": "EV8rVr96rLYoDcTg1BroMJCw5bHULv3SK3FESauVaobqefTTTQZ6eT2GBgyFW2GsSwMK2HxqaqFs8JcDhJnDD6g",
  "key8": "2K55VTdQPwNPkiLjSFfFvEVEqUu7PG8EnagbATfA3zBj9CyV23iG62KNfVjmLz6YRxCZCpqfmG75UDmMTsojWcjB",
  "key9": "46QXY7duE7uSAppfC2s6TBdKYy5ZYHfbYVFYX413yqJN2hNC72xy9MDk8A8LdbSe4KuFMre1cHMCnpkqfzzFpMBb",
  "key10": "5D5kNxBMesWimWnU2uANDqXJZoeWVq8DgWEiG69xGptZfW4zBTYpLR7oZmtU1mS6zFmpLUB5mZfeoi5kJ2FzwV9h",
  "key11": "8zUogNJRFTny8D2PqB16xB62NNJc2ZfzE5DMJf4BEyBMzASVAHpLzk56rTSCg47MDLLf4w2hA93gExQk6ZbfjSS",
  "key12": "2Nks5LWxGeNrWY3r3popMCBxLxjpJfVd9WortxAQduuCa2CCfBT9JNe74CQych6MUWxDJiWVdwECEnWLkyTBYb5u",
  "key13": "2EERtAXNEcd87ZmfNUtBQ9BmukudunZk9WPd1w4XAmvPbDKyQFdFvxEptom2xzGtTmCzTK6BqomTepb7DR6zKor7",
  "key14": "59sW8eFbTkx1pGmTDZz5g47hrqQerizUX8KTdiRArAe4Lh84jWdhXVSuPtGvvJugSs7nbkrCbaSRTCvBcJF6dJQr",
  "key15": "2RXxQqh6TkKub7EPih5y6xMpma5NeDZjSBTGvmFNPis3MLGtLSG4paYNNcbxJWUidJtifXMrvB7wzxNryjzDvnXY",
  "key16": "4b7Psqkww8hEZsaoH22nKjb9Kv2sCczfnzWRRVRTQeZnZNTjGCXppHqbS1z9jTdispwSP619ccnrL2xf62NC1bHe",
  "key17": "3VEenBnDHkNedGMECLPgoge7efjdBiyKi8o2Jpx7WWCX21B9mcduatfxL8FnjUtSSkK3mr17JCrnLb38riULHqgR",
  "key18": "4fxhcgtwHXD4JCtUDra5czPxGFiHur6bTnNbiEdZ3cf9axg2Hnh5VRGtERQV7KSjDrczsPPcP7nM34YHYvtYhaM8",
  "key19": "44d13VhbbQTBspZHQGNRxKgNzoNzG7fm2aqczpHdV3j1z3TXgs3k4Q6jQzWm5dGEETRumPT15LuP3WhdzC67GZAG",
  "key20": "5DgjAdNSEYpybiCrFy7EWfMJuEtYSyzRxMd16Ck2SxVZVakg7mcFuG2CQmLo5mwyvJE3Nzx5it2XBj3bF1QreHpQ",
  "key21": "2nTAxS9XZoCzQD1Y9PhSUvra48MWSWyFpiEsRQaUvSE5ypEPPbeEBMoXpY1ReJCweJHB7gxWRtavku5W2zSFN67v",
  "key22": "jWxUhAwskpmJR8egqu7bPcL7qxyEG6NBwMyZMYnSgT27dgUhah29WMtvkaMcwVvbjy6GjtyeYhPBBxozkSA7WUg",
  "key23": "2qQofGpMxsLHawqUomr8afTRLdMawvnGjnaazHygek7W5Ycb7RxYjcWoy1ZG2qmzV41yffdDmfSUvzKv1NyzkVgg",
  "key24": "3wrSD346YgZ35zGQxZDozmAhwAm7AgqEm6Lgg9cx3uKrjrXdZ6cUusPFpWLbnmh1jV7h9s97EoneuxYJhzkjUhA4",
  "key25": "3JSXdy52pnKVnE1jVx98V8b77ud9h64mJiZjQ3NrVWxvKbBJ85n6QP11v3f6AGWvq5kvNmFvbidCdTPGyAK2mDqM",
  "key26": "3E8HYWc1Y9PhjH1S2L4GrFXy8RkCcHW4aWDDtCpBakADg3btsEK3GQ3UJ1CpT7D9MsWMZtNfMFnsKgQ9A8UaVy2W",
  "key27": "26pW8ysyYPPd5hqkdhj5nujfv3M7YNpvgdFdsyMi9njXiyKrewfvtth1G2YsB2Pjsgwv7288vyUna8zpc9zXVrWD",
  "key28": "5L1un3CVzBckt4BsUNdAisHTrgaAdkKUGtEyhQ1wyH4CSxYJHMjS2hiKQN21dnnr9MjkXRqZzGBRj4RQmrCATfEJ",
  "key29": "2RHy1h4hkM8HnKjxDTDC8rNkY9TKCYxnQb3DDM3A4riyddPGSzArkRKPzeSxyzvKsE9QvwGyz79KbLppUauKsLgZ",
  "key30": "3f4RQT8KRA3TNdWsH4UCQxJgrdYtkrg5XboGwSERiuo9Lo2NBebUxnJjBrGgJ8kVcMtLUL5TFB7LhcCUsPgWyUw8",
  "key31": "46dTAYMoXptQKF5gAf1h78EdMh7wAtrrKPNC7JzSn5Ekxoe2LwA1YnNZ1D7NuhJXsxzKuHTFJpeixM3E2ayYCaba",
  "key32": "aXdDm5jGYnBUbHrsHnRDyjpKc21bbbbEaX888eZn7Np3xgb6b76WRcMQM7wiYQHKrCNYicTd7SMrj8rnoJVHFzf",
  "key33": "3RKo9fzc82u4gmcJjn2dkEjNZBHgT9Biu64wT7Yy6UyUeHYDSJHaQCVxioNUKTxc3UsqqtqmxAkY7Fz7fySmfFSp",
  "key34": "4H89o2WTbXguonykSQcmbPQ9N8Di3axsQffU9hPfQYXkcnnd75UsESweziJzzYHo68LDHxmXSmHaZnmhAj3H7u9u",
  "key35": "22uFLRvK4AMt8cKzABP16cUCMwvbfgPbfduUHVM43QD446h1xCtVxgKvXvXoq2ZGAxDqvB1W42vshhTvcHE1WG6p"
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
