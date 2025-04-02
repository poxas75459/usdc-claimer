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
    "65T2JzwE1gRg9fi9otUZo57JYwwLaKLdjbpnNRjs657kRkS9MkTaH8FvnbtH611y3bn744soYNERnrdUWZGWjtkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyiCE7zP9ThrCp5T7wAKfrBcUvrmNuLVdZ4D3Hmu7d1euYTgMJx5WxTx3PcPkTVK5uDhaGefZGyQRirfJgDbYgr",
  "key1": "5oxaSSoJtnKde1ooC161bxZZcHdK8evuTG8uG4NTRBa8w5EbVGjULe1rppXsfNDyQh8UDVdgZJZ3V9ASdgMMMXoV",
  "key2": "5GAVkkVEBZSndQshwzuyQSNvLcZj5HRCG3FTzMeBYQ4DHxtQBYPdFP659hATgAyDRaVRK5sJYZr7ywKe3x3pTqX4",
  "key3": "4q8MS58vGqfpyWEwaKKVy7gFmorm7gKn7mQGMVuZX9H1iUTX49j3ZdQR122rGdrD6XBFSb6oK27knFij1RKNTiH",
  "key4": "24Kjbge6WyxvRKw2ZxxGMybgmQFYD8DpbP7WE6xR4PSgLebhRX1vZHDH9rxd1NppChTEFg5qnvSvPSzrFAGt5NPr",
  "key5": "5opRAyU7hkKBzWa7KR2ggbH7qf7kWvJuZsPF1UUJoPBdN78xeVZUroggzfr9rcdU8cQqBwn7oGzNGHBVcqtmcyTf",
  "key6": "hizAMAMKPV1fuCUNLdecNidkL7czc42SEGyXTMwEKZfCurjVKS4ktf4zgnMWcvo7ewQDqrZzW2NXW65MYvqhdUK",
  "key7": "62Arz7AxMztNAEEptDXaWwJ5FS6Pq8V7eFyg8bnuNt9An3p4AQim6mPjoMQfv8KugaboFYMGzHLuf878dCAgipW3",
  "key8": "5qbaszfD4h6v3eU9Ldxrn1kFZKzVeZumZP2haeYSQYDJWmL1TeN5chLiNtXHfbhJ2sPchdXawLR99t8yLaX7fGKY",
  "key9": "3Pck4zWBBR5kQ7tL9SNJSGRMM9a8fo2kccvJuHficLLL9YB4Ya6aRWaQwvP4uiYBSXF8MsaWJTPHU5aTTUwNzSYa",
  "key10": "3oxBfYVztoP1RRy5aEbuWHPiALfhATHtLrhhGFjQXYiHryuATPvJxSyuTpiJ4dBPjRmF1W8udfGFqn8LdmrSqHpa",
  "key11": "5CfFwM1FAzFE1WSzizNxXZ8CbsYyDC4V6TSr1FsUeoCYXYVkmkA5Jap6oP9LyKb1Nw8otNSzgiZ1QJEkspn5pB3A",
  "key12": "3KJH1ZHoKjypaK1EXApApXQbDwDdQyp6KCUyr6GF9XBicKnMQ6ZNTd1s85DtQUSJdqTiLJJUmzSekRxaM568YnFZ",
  "key13": "bin3nna3xGfu6xQPh5sRsRcu2f1DhUNwbXKMVvhQxkMCEmn3uwevGP6NtD2TVbJKrAUuftjvFYgJpVfHALJZUC9",
  "key14": "4SJSwQp7u3SGez3AKToRXdffehTTFyUok876pWY3wqVeMWfKJdmqtzhQ8kW12p837uLHr1FKBZMTFmqDGjj9Nsuf",
  "key15": "3E1yy8BGaChUisqCBvDknxNcyVf3MeoJZMiNc2xpWZRb2gXr5exP9gopoWFyHmgbTr7ZzGWVXgZmgXFUJ8G5rnLD",
  "key16": "pUV5UYd121ndKFRTgBHCCMyURGvLqVmooa8SfnLDSjT369JCDm6DvN7hLTVHpUE3gkRB2j3sp5YEjDMp2xkfSst",
  "key17": "3sy1K1S7BFiXHi72wTfKEq58s5WR9sThasuedJTFEuXMFP2yvWzkzt6kDZbfXx2FGH24FedtVK8UEBL8Det8NXAK",
  "key18": "2VE2y6Nx5jJC5kt3DaVS1vfsq4CrjJHhA6hfkoLZcEa6NVDp8GnJTfBRKmmcuKSTN1dzCBH8ehVTzmQf2ZQLrGjL",
  "key19": "5v46PkTd78wGC6wYkifeDPUtLhvLADr7phBYGmAhUhj8dvDNbT5FD77bCPzjcXZHjUwEgdRKKA6Jbjv1ZiQZ9Kfx",
  "key20": "4iYGsC6BQqNwsm5s4hnPQtes6Xvr3y8qPcUuuBbyj3EaPV5fxmPXmKNV3LjoHDREabjbLPdP3oDTkt7ec3S8iPfH",
  "key21": "67hze2LqL23fm4PKteR8Uw6Cp7XnmVZom48K5iXjAMPteKpf4nERi55QKPe9qPSbwNHUsEfNiRzPzs3ysiDF7CWM",
  "key22": "4USgcekWrJBpoCPeL1azy4c6iM9ugLVZRnwU8hvuhCFfYzxiBHkiTaw8gE4NyGXuGH8vdjoqnjgpnDz9gvACZcj9",
  "key23": "3A1nMhi9JL1yCTW6dzgqfutLhYaM8q87FWWcYoGm4A6A1HGuVmk5zgBuEwNGd8GScrqRW5w3SGLFRDZWST9b2tnn",
  "key24": "HmvodbQK2uKZwJjZ8vocHeFsxzEr6PMuJggTDGGJMkDTm9iEUTLzZtA4BVm2JwPW2wy5eZzyjNRLmiic3KQC5hQ",
  "key25": "4kBqjb7W7EygSoL9Vc7VEFEkY7HHDi5jmivcJ29hWMj74jhrypCS7QLBBCwyn4yb7qPqFtpTc76DoAwPqgQs8Ndx",
  "key26": "3aRtNcQqzYWanWNxDVkquf7N7CL8mB6GzTuJJnVwcotVqGazfyqEniyZba8mLfWyEDQYP2DTFywtWHD8YJrPLveY",
  "key27": "4MjqyHeqRTHFmFc5eeCkxnsc95F8zAxVeoCocjW5zuFKNg9bFapjtVLqEVYc6EkAHUFrHJjLn7BBNWHCfeEX5Mzy"
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
