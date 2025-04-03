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
    "3b2pwFVZ6pJeGi9Xws7mYZxQDZHrHHaHQuDDToAWFr7w8GiR7Ynv2T78DRBFA3imyFt8QkwjchaTDpnfZucVk1S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSQzgWqs9xY6YWQYceatGC6YxcKrM5rEueNv6g3Ctn2hcj52epu9gD1RZMpuk9YMkqQTkxVqR66Dh8hSVkxrM3P",
  "key1": "M1g6ZTnYkaj1YvpMDjzdysrvYKA1vfL9H8npxCkCrjnU7ydfjL6SHmQysZPcxbSpApvCQZ7TiYkyM3NE9hfbfYz",
  "key2": "4NHCyx5US1BFdKTQuiDkjS2FcySSGyBHD4rjtPjPa2wVcEQdMhy2byE87712L2uwEho997EGKccYVe3QbDd6W996",
  "key3": "kpTmEAJjhowE7hy4HywjSzDdbRRm3cav2ndLiyTmE21gnWFkQpsQ5rDGHySno7bUq7ok6zAjcVvGAsuwx3zopft",
  "key4": "5WK5a5iVZ65ywWxANnCxm4pxumrUsazTBEG6trsQcYsxWBrLfYiTgQRKwVrEx17uVfv18mucJTvTyRN8iGoABhcU",
  "key5": "4Rc7iZDFBLh3zmGn7fooJ3NwJGaFNhx32NZ4TJJQeZzoTcv3tH4WYFsRWWJwv6qGfHrEVurm1KPbn1puRTa9nyzc",
  "key6": "3SVBHQa3H1XS1eiQv13hvu3MWNa6J6SLAm6LkKB6u7kcf7nWZ9qJje98GjesPxiXcL7D5pFts1K7FgM31P7uvfX3",
  "key7": "4JCH4bRpsFL1wzfrDWqarNUSQsFCzeNmaW39yEYgDyBRAgDK7DmDW32r5oPbvVeodWsEiJ72hjbpMRTAVL64FR9p",
  "key8": "3NgJLPJQU7GspAzY8DKffRzVNphF7zJeoMQ5Ef2Fkeu8NoKZAmfwPYcYaryeZPxi72LSL4LYk7RDHkjB5KrWA7Dd",
  "key9": "3mnQ7B85h4F3C9eyzcGzykxnjDmRypTiNWLbFCoz1D5M5wrBjtG48YUvzAFpoPgtxarVdKE8mnrgzezhdUGq5BBW",
  "key10": "2aib32eTe9CU8HvHQNpNN9Qi4SmUVHnHK3o5AE9TCLkQkrEZStGXD82w2K8GCAWF8bPMgGUS7WkpbC2FTfhJLFBD",
  "key11": "39JZqeaEMhjDDBzT3U2pAf5VvWTDZwH6hDGTT95GNAg9FbkUueN5pkQCNs2cgGZKcjsihgP7MSupyvJdrgF9zLyW",
  "key12": "3U6gmib4Mpift6kgq7JRs4jwY6Anhxxonn2af2nzxXLtPNuoYydQSHdW6yk8W6YoXLHHBxw1zSSdkWfEUuYxKBjQ",
  "key13": "2yzeeGPeBcxNrcSSM3rbH9poV5U7mLPHtdjZgVaqWz7qMzAVbJzSC4qvrj7jY3QZ97eC2yP6UhdVnZDg9FaxLLti",
  "key14": "22bjkjbqqpvtGMqmpiCpQTsGr7JPmEQLujKiJnY9BUEg114bckMj6MWP3s7WX5KZrE4EoV8yPb53U9tbrmacDGic",
  "key15": "4gJS9t5dXYsBtsnw8QzwJReMLZYeQZFFwNLE7mhq3EFeM7w8YdLcFHtL1y4QvLpeCwsEKui8cM5nwzJbXZf7xeYR",
  "key16": "5sDYWakXHdwCK8bo2nMCLhNQ1dQhpfm2ZoV72PHfRdzKGwK14Qze42rLPMamGuNWzca9bqKeJk1W1mhLbqRaSg8t",
  "key17": "5jiNJA5CAcJxmHt8Hs7bJzxxCnep19qSfwQFPLGwF3CbBtHUTjwRE6Dgeh5D2vfqsd6mszRWaPq3YTuM8ZdaJ8EU",
  "key18": "22rBNct15EwbgyuBP2nKFrsUpjQFDVeeK2ExVEz8V1xnTAqaCfazDeUMcbsKV4VzLPiQ7X5cqkQBdMkVm1zkPdoc",
  "key19": "3pvySdEFJ4J93YsVX77ZLN2wy9NZeqpn1crsAwGYDZxD2We2q6BZVDqXHnyGjEr2Y1KbpXovsfggkyVfvNx6gVxB",
  "key20": "4gJ2dn5HLwdZHLShx8sRj2Mzh8pmzKTqoU5XL8j9F53Y5LPCqtZdZhcC2bxGEESm2ge3dTAptSZZf2AEcsEBad4E",
  "key21": "6wPdYm29KJsXMCJ284UYBWPsX2f7PMSYURwXGx7Dx8mEmL3mErjgk8GvKDF1mjUz8jRhtpY1NYcHoxssJEvnhAP",
  "key22": "3mtfJGs5uRCqrY5jk1vhDJowVHAUS98nJYAmKTTAuwpKSrDayAzNh4nrrTcy7p3cE6eWJxnTAyuU5Uq1g1fzBLyj",
  "key23": "2HmEjNZFJiLLY6vpdzuBsZeQxb6gQMnNhMqpDDhhv1H4jz1pmZ3XUsYvxRaCyLm9p2161yeJgVrAhcHwY9WYtkBj",
  "key24": "33DJkeSQfkbmhVUikb8uW1ytUb9YazwAMLii9koHqpaFNj35ECvSYntkAwjFyCvHfYAwXnwt8odYpfioCiE98uQg",
  "key25": "53LbVTTcyABURR5pJ18qCdueabP1vwx9T78ugJuMwWvRqGoSMR3488X9n96RmjxvoNbfcZE78NxkcUjifyn6MwMZ",
  "key26": "vE3DNUdvQcanrsi4CHBoxqZAAuTNhoAmwkU4WD2TQGJpQzL5dxsX9WMyq9fDqXmTSDjpurmwEmKRyUTmg89Qy4E",
  "key27": "NJ4zDhLMeRaiJbaAc2iLAcRveqEKGmUzkRBZK2EagbUdB3Qn8drnBBpcnYnezBdt7LPabndUyGZqbiGYMbMLgYH",
  "key28": "35meHtmzZ5XAnhxotvspzoRwCvc4RSDhG5HAxBmu831Co7VUDHaFqEFKswtb7toosAiAZZatGZYLwcCyWvL2aiWC",
  "key29": "P4dZUvV7gii4KAeZs5Q9yAAuMUvgcsy99vgdueT514YG8KiNpfRTiFQU6bqpPGpsGjSqASV8tSTypiey4hTYHvv",
  "key30": "55EEupsXmW9XcwNT5868qKbH7nUS5Bvfar5iqLK5dbjdEfeQagraVJ1s9WX8p3WK42JvS2nzg5uoCnnANLjFTW28"
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
