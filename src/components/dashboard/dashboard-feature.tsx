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
    "37ZT1orDdLxjiVozoDc2tY6AWfdx7P3puonK3PCKuf8sAGRLofMuVhX8xbRSVkdWTqeAUkWzHJa4MZBd6WMT8HLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gr93Uz8hLVHAuo25KyFNmRj18cMw1dhLxoA46coANMJeU88sH2FecnpseCoQQEb1giZnBgdozmKLWtJE2HU7sP1",
  "key1": "271Q5eEqLvgYptYXMLtWwyx2WKZRFeGfciKpqXvhWZEjB6FaYu2zQLP85XLs9o3AUEd5wJAMq1VyVymLzHC97HYb",
  "key2": "CA3bp6JYKLXj2BcQbwM2LE1FGEk274qSqN6ZxzeeaK9p3RMDW8i7uiiYyAjV6fCXpTReb94JujArg8n1oFsAdCe",
  "key3": "2J1SQRtNmiZh8vp4P3S11tyvDNc2Bqwc7QaGS4Q3nAGL7nF68NDKj9SFoXjFsmEAVEvAixtJGWjBggj4XY9LkLMU",
  "key4": "5KABFCCk1g4BtCVLtH8Gy9AUTwUj5sRfjP5FFTu3rgnZfPXk81w9DeuUT9E2NXZJuMqvupULMFwa5hPRXwR6ZBB7",
  "key5": "5EJt3gBQnRtt3tTnVW21X3pGzW497dNBWxdAGDjNo2My4wsG78ENHh8uyqSieqJ43DsX6EtZ679c1ypBEPZa8gqv",
  "key6": "AK4J5b1Ly3TLizYgVEqZc7mvacdbE4LkDEVgdHg2bCcnBpb1x1ie76od2qLS3AbWUPPCn27rjdhbRoSsku8CSEL",
  "key7": "baoN6Z2atKx9MnHZgJJx1R9WH8k5SKAf42K1v2LDGXJAW1ueW7GckqBnVSWzck4ax7kRXtXzZxj3zZHz6gvrYiK",
  "key8": "4TJPTJ8FStv2ipYmx96eGs4LyhFrWgFBijjWkY2LXYQBf11kkJr4NarS8JAUDMAxQw5bbs3QXMK289pCjANTMrH3",
  "key9": "hDoYHDLSxjoDvnmeP8XPhUmCZ4kkiXFxVVZZ6aCvMhDTPmPMKVoWW1SyEz3dAjkg4M8ucwkHrizxtwVAKJXkxAi",
  "key10": "XYL2UJVtGyLkDNpVhNiDMcUzUxywGHQvcxRZKKsLhSNDEV9X8ikyyt7EErSskAUvniGXegPpHiYmuhMUqdPCEhp",
  "key11": "2A2TTLjruoHCzzah6q1uq8LTzL2oUfyFjtcnRawAR4paypZbenr3V2CLebomRcqVCC1dQuY74bBCXKbMbjPWN56S",
  "key12": "4uGcXpckrP8Ubjoe3kRqU28EdMaGPQKPUzMtmD84F376XcpVuuZamHErr6DBDL7J45JyKWfZRZftPRm5vrYt3NxX",
  "key13": "5VLwRfsQ4mCYjy9Rg4FCr5gp5jW4GLnGEfUp8sbRN32sK6M1fKGFQrGrqnoCGZGXrb5H9Qyty3RuoNgAaLvbPC4A",
  "key14": "5xMCMEkXtqmvQ6U6usEXwCdUqATGpbYuuuDKAmKbazoAox6LSGvV42crtRMoesQsnD5E5CT8vizeFaBXMEqzNeZn",
  "key15": "21RB2Qb7tAxv41LZbaekBrMQqehzQpB43fdkC7iGBFwcrEWiLo3vAc4NFzxus7FPfaQgyM1NtePokybZJoGh2txH",
  "key16": "3DkEDz88k5kBjMG1ph7LNDDxvu3ZTPHgiwhLRgduYUWaVfgDxVf6wgqhJmP5EnPJoZfZdsZg6GanV7zmax6yBAWw",
  "key17": "2rDH4XdWubUBSZZH2aGYNkDH7uar5wpoed5U7oNBGocepRDjXhS5YDDXro878gTTasdk8h4u95a9B7TB4gaVQPnc",
  "key18": "4MHGXtZqQA5T7x2tBvMjjEpPNKhJNhfX9KnjoPyohdPMHHYJEsYwWwEuG4V3azb5UfTdBWZyWWx5PVJdG2QqeykU",
  "key19": "3wepCETSRkG3cZNdUKvf1ewv7cvDtjbhgAdQ9UykHpc6HFv3xp79Cigo86bTevrXHxCSJdU4Y6k7R8uTcCMR4X2x",
  "key20": "4VuhJmNQaVHFDsza36UGbRKPSKEgbr7LFZ4gKY3QxqX7YHR4fhbvdzu2gD2DBS6zqY1mzZicY3okbUYDesZHNNsW",
  "key21": "XBvFogZvbu13GvPJGLUs5XoTGDWMKJpoPUpqQ5qN7BvzCmbEBSwD4U2y2uj8LCJmTsm7QjqpPB6Esco6LXTKoge",
  "key22": "3iPHmpsPqw748Vn5L9c6PXmg661DnbhynaEmV87HTBTgHpVBT45KHC7JA7WUSBd6rLa6k4yfcguNE3hekqwy3HLv",
  "key23": "41W32PHsXi72MSvrpuL8hJhYtXutvNoEbVmzyQjwFNr21gujEpDTiiu835CvuG4rcRPk5uio9FjAdYppiRgzk9vd",
  "key24": "4NPt1yJmoTfA48e95KojnoWgorjiQshJGy8MS9HXeZWPUiurg7syEQar6tdy421N8mefxPHYV1vkLE83iyEocGkT",
  "key25": "3VnwVtCVEw7EAE4UqEnx28GwNRj9r6nztZPs1C2yh3dkgTcQ8kB1CGpcvzZCjmcZMAem6iSw3TvA7gr51qMBKgrS",
  "key26": "4wBKp9q4ZPjoxc37HaAtwLe3YzS99RRytYJC373gAgxeysUmtGzZfsHE5TVkJiMHkSzWYWB65c3vB64ERaV5AHgN"
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
