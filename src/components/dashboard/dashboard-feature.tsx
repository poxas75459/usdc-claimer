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
    "z4Ua9ELspuGJdV91xTic4cDfstoNVUuEi7EK6nsZZHAQRpNrKHgVSkKEE7nWB4AcGcGyQzHcPVMmxn3pxk8UBbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZdwhLM3HxyJALJon5us5bfKuhR7h12o5AEhmrpZBBNEGWX5iaAF9139qVwBd43usokmqbpqcRYHHot3DiTA4g3L",
  "key1": "4r47JiuPUnFBiLEkyZKovFN1fjN5QU8BJmT6eJmwsgPdzskZvsG2kT9n4kkgHfGh4gpMoBKpGKLfHMbvoddAHFnR",
  "key2": "3ZLgeS5ZaFszNf3yFrmxXHHMZdUxCtBRF5DZx17jQpBQmSGaxTW9syzU6hzxAJCZis7qrTVPFFSq4g6k8XjaWBFW",
  "key3": "3TcAhup5prqCm3hwrFcUCKVSpbhXXHioTmP8o9CpUqSqSH7zKoLSEbpzanM4Xa3ctJcLSoZkpo9GzjxvRexWRac",
  "key4": "4VsjT9oGTG9yP3LHJUrPosr9eTb6R435WMQvAE8xHbN9cKZSmFsKGW1b9gXww44gRGPmTCDPdHHvLfj4JmdymGBs",
  "key5": "3UUHtRJFvhXhUJ4LgDQY2cQHA9qrmev9PwEwQR5hGookFquYqwuM7BjAqTXnKQgLEAkXFeW98sR6Lus8ErLKqxZy",
  "key6": "AUkbdoiuPufW1ywA7VrQz64spfWTX1ifRooamLCkDeiLjcNxLcGMvZwupQPNJ34rVGY3AzJwvLXq8pxbf9R5cmE",
  "key7": "5i7RLewFLvmTbYkJvRXa6hpvK1Kid7YyqTMs5PVAdpWiGf1qCWo5Fi6fPUHbEYCEucxPPMXLa9AJgaVdfkVSTXe4",
  "key8": "3zp6AjxAHVsc8nQXeXVsgnXQTcGRxLRD3t4V1QcVMkHSwPCMvenWmi5VhSChWLEBBHjZETkYGDnoPHZGdzhzHXsM",
  "key9": "kvsGpptyqPb4nRyAzpvKEk7kPwcJnzvwoCSR8MQ6NEgq2X51nv3z9UnyoSoosnjcgwq2sq6Sdz6kLaWK4Rg7cU3",
  "key10": "4y9cXbdgK1ewpPZUquvdbw56oLYVePFDPY9fJ6ki4yoFXSbALSZUGhMa6QbbsH6vp4AiPYp8trKXs9HVuF9KRWdL",
  "key11": "3Fvof7Sbks3TwkUx6L4n1zuEJXapnm5GZd4wmegUoYxnMYZvFpbo5VrKQVTMMshxnZEabTa8EPUhUts71G835L5F",
  "key12": "3aReRz3i4yWRi7ssTZmEHKqDHLsnaks4cDyo6kqhadH7WXk7h4Cb86ScP2yX4Hdx9zGKXYeuUH2wWvzMPW2FXhvt",
  "key13": "4q1KdUG8Te8qWijgHhrmkEjx89G2ShTXGrumUkQf4sPmefuQTs55qDaMv5YfNUc5kK9svKqNnQjkuymXcgs7sBHB",
  "key14": "yz4jHPT4THVrm8JXYNkm9AdkXZ6gaTMxycy4GgJjNgHaeGbfTNw9QcgcyHHsowe1W7Z5YEhkhNXBL7LrRP4T83D",
  "key15": "27z8Qi4Z11oT6PjM315jnZjqvUy19iM1pHrogXbtXKxA95MxQr2Fw4zdGmTGLVzcR7B6STniBFd3m9VehjozuSS3",
  "key16": "4C2xQU4QjF67gKZBeaA5jmjqXJkXPNaR7DvUn639y8Ev2PzMAqBYttHRE4EF96VnvTzKqYq879ndtRXfd9YGc24k",
  "key17": "4DXJnn1tjRQhzAsJGv5Pdef9iSVUKT8bTBMhJzgRUb3HtkjWsrUSnN9kVvt4dyRMR5BQsAx2Ry9f8GWRwFrXhHJc",
  "key18": "2ExiUDpwHPxHVN4YSkjL6Vo6vYWp392bhaQqizqcS6FJFKenE5JokkacHGn3dywLogYX4TBMGiQEhoUQUG3RoW4f",
  "key19": "XFwLT2kNgowTLbbYYD18kXKVVVovKyUyP2jAANSHvkFik526tmntV6xi4oyzRhPQLGBzPxe3EWHimb944Q3KPTt",
  "key20": "3mFaMzxxR12iogsyzxWYyRrAqyFcKXtDZ4SXreoVM1fQzKHJTupMjd14CQWUssNyqDgxtF2hPX4Tzfe9ADDwWjQX",
  "key21": "5CRabvenxBh1AW4BDUBxri1SuvEbREDN9Cm1G64tD6ZvDRLHktU63kv1E2g1EHYT7mUNMC5VxkE5eG2VSEJwXJas",
  "key22": "24rv3rRXhEkGAx6UoYDX1Y9dJQPRhXNmaLvzsLpi37konyd9GVF1wYNRVKEzjtpvjRZVnEBEoKdTDsacgWSe7yqL",
  "key23": "4RdzokNQEfZ51EbX9fAkrkrikg4KXjNxdiumshNnwAoo6hm8UXNuY2aWoYYS79nj7KNYrLLTnvjMd9Z1rkhAwFRP",
  "key24": "3vecgcGu7GGcN8LqjoSkYLYE56GbiES4epdcDpBfjo4VALCGhAFe7unBEexauHx7gKp2S1b9iAG7YKwgDKDgb3D2",
  "key25": "5CMD4KxK7mc9k1Q6Z8BD5ow54vtxR7bsfdWJbnbxS8suJb3jRa9Mqx8kC2463YSZAF1Y7rbgF7QNZnMGG4S6iFSS",
  "key26": "5hFtB4LT2Kgd2pVLSn4YJVjNMptZG4R8RghdfPnXLcPXMPaMw9auwKqKVDYMHrU2gZVUR7kww4SuzWecTHxV9yD4",
  "key27": "4oXQgtGeYyUSLN7p4Tn2QAFYQWJei2GJr4xyxhe8AaErWc22FT5FKM9peto6fizE2wmm2tSBeL5RdHKkbmVomeBS",
  "key28": "3PnNPLdgbFYXjxf9sgeeT4CUUboY1e9Uvk7x2RF16eSHtuJudLaqxnZUTsf1YDft8YEggdcAKGjAA3cRj5hNsUC5",
  "key29": "4bNc2bKxfz8SEn7rAtbmAiBtUJd2sD5BQxzpd82DruhKwm2BS1rXxGwyDua5vC3PCASg6rxhTUf5j7daX1UHbhrZ",
  "key30": "4Kc1wt5cVXstC1BHQTLTaS8xuME169Tp4suUPcLbRvcSWx7kPA89g42De9bWdfRnTKFSmmU1mY8h1sdDofaoiXVE",
  "key31": "6Zh7EVrj59uJmnU2p61K63x8jauhQkSaY8NrYevo1wjEKZwCt4we9TZRJZVtZjP7icTc8gkDA9wq5p4iCNhY18x"
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
