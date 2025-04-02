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
    "aWtuEXM8ELjMYKHHYJQBsJDLPqJeLvYwYuFwxGL9S6524MsU7HjkM1cKjjsQu9ZPrUHFLfy7nNtSojmLofPjBMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DxpbybheAaxdztmPDiUUUtBxZcFX4sv3PXiG7tXk3knG64j43fDoNJNwsWNUc4Zd7AX4B3WPdoDNbRBkx5E6vK",
  "key1": "2NYihKvqM2vB9NoBoenFW7TFcchwZNmVbPAJyQL7c3LcWpiWmRBBXHy7B6sqTvnGvvGMLCcDkmYtcxMGoi8X6iaq",
  "key2": "3WaVvqoY7GCeNWcMfgUXrv7Z2xrvzRbzGDQjBaQFb4PE1ZxqtDUxjfpR92a9je3NMaPkLbJfXuxyJN7CCqPbUVJa",
  "key3": "4x8SUCNhTkrohZRb55ZQrJuoLuhqZ1Geo6VG2nKHYTxYFGwvWxbtPhHg8F8rFGYxGMLkQaoUMkoKSWrUCJv9Jdre",
  "key4": "5HRJop6yefF1CakzrT3QGrCXfcVRusNQ7bk8V5z3F7ABL5ocFMEDuhSqwtjQurGQXzAEJjuiy9i7nf4jDR2irw2H",
  "key5": "5Thqw9U3HKahtfUTEsC9goaeQxBi8KxD4GRr78K6gNtzrStbpN8RecHVF2BKjdButgvchbjjdMNiJAxJma3h7BWC",
  "key6": "5rvR5uyWgfn1K1bdWizdZ5VPJz5SDWvenGSbKfMzy3BSbSzv1EV8bSPR8UczVnXbWHc7RJbiq6owdUKKWU8Hgwyi",
  "key7": "5T2vHmmvgHWVJAyXeUSbQ57f5fNCqsr7Rta9XjgeYL5axD7U6ag9NB9ZhqkY6VbKGXBfHBzTZvWjvB32MuzcnzXg",
  "key8": "4uCXkQ6VEaMr8kAgAKBHv5GcjAJjVSZeEbag12vai8fuaPHCiPVBKE4iiQPcFdD5skvPH5mqJfSZNgGY12Vsx6ZR",
  "key9": "62ei4Cs6zYVfNXSEihTW4HVkRQ6vuXLZTNPopKbbbRHZv9t4VEWpCMHnUbPdNA7mcXB8aSnvXYAh2bxBEfLXYjdP",
  "key10": "416J6bYytL8Hy1uWkubcHNcRhKz4VJ9FtRHqruRzFBFzFrp5enCb3v69hkkjGVcsWht4NPHpmgqbW5cwJFnZuEtZ",
  "key11": "3U1Qe7us5AaSCFvt6V3VZuSMPSsV6RnEW9yeD27wpzrZxWV8hHHXE8pM2My2fuAV4N48jwD6huP1Cckpb9oTXbUk",
  "key12": "3RSRqQNa5EVvPdcoWU52oZBowke8i3vb5nvu895TuHWqGbvUjKNR8kL5ovotxqJuawz6zxaEahgdJy4y8CwewfQk",
  "key13": "447aYHqf75etBmrfxcyvGaaPXinmmqP9uDsKc9XBQ1HiNCkJXnzBw4HaAh9Cw3geFXo8ncbfHsvxAi1nDTm4zRYK",
  "key14": "3cNLEhqug7J47BsXGyySitUPZDmzTFCqTAj1hH9riKbxvUfTuntoezwpzAA4CCnUxE2Cto3v5HoQ5AweRqEUrRrw",
  "key15": "2BJKgFY1fKt84Kn9fQgUziQjZkD2wYVghdQeHz4LkaQZcoMUyuAgLVtPfx1ca7jhqzLWEcF2EfUWyATjQpAp1xiV",
  "key16": "39Bj8kMpgeEYynqMYXVPUnnKcUpUxHZQEkrkT3K42QB8KqU9fopKoazZQFdBjPkcsnRySxcdZY8g4P37tR9suy3W",
  "key17": "56W663zujJcTaHK5Uc2FgjQ1uYAiRicseiGWKvVimm3QWmA98SHibpZ6b5XvNh627bMqvfYDxGimeCni5Yex2h1G",
  "key18": "3AHSHDAthB2TwmiuDP8scbBTT4qa7TMPaRqhmHv9hyScahwzzG3eJyHTYu7Wp4EATM1jDtLBMYyk44a8DPw7pYjh",
  "key19": "2Un8rYzmwDtJvWxoRLqiA5Jo1MHp1HiuoadDseWXvhTRUXHQe3gXQk1AHvDzDQha5sqtWbCb7xtz1GiKRieKqXJj",
  "key20": "36Mw6zYJP21jLtubsbJeK3VMaJDYrRMKN5dYfEh5oU9Zky7xW8AFvp3GFdvPUf85iotcgzZh2jBaXVENv4g3ikcc",
  "key21": "56XpCZNEagWJXbSCB4Roo2gSTDrHXjoAzV8gpPk6SkpGrupc4anL1GdorAqAPC6ThKQ87gJqGwusMTgJN75bbCnV",
  "key22": "48Rng8UY5XYJVSuVsNLukKZVxuaDFB152bAo8Y6rQB7mwb8fte7A25Kzbm4fFnEL3s9nhSHsFmMftKTTr2DUqESz",
  "key23": "5zAUYDt8AxKyWgf6y5BifdMcqSyJY3Vc7WWjRyEZTsth9WMjoTc18gEddkqtdzXW4fnTK5TSWLbBDfHkYJy5E6V9",
  "key24": "2RhMeg4HDpFBpDsP5ws4S7CARsY3yQgavs4p5Twa1evEyZVU9Cw9eTsZJyuNAxigLzY46HuHufyZW2NBseMpBQhQ",
  "key25": "5DMr47aBbGoe8ThqofCr8mEGV68BEjKr7MBunDywNbczJKmqYG6gZrKBHaaV4tsyA4xM5cyQ84YBhUDg5EqUUfmH",
  "key26": "2qpxhP24H7U17NiE9Jf7US3WreFLnV5xEqcecMKqCXs6eRUSCtYXfTWwNDmfoTmxT7bwaWJBKkGHz6qJ1jD1wEB",
  "key27": "k1CgD82dXMPXZq4mKeRu4CHDsPn93k5dEKWNv3F76EARYkyfCQnhmUzwvymZMJo3CGdbLtFrS28ZjdC6ZmFM5gg"
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
