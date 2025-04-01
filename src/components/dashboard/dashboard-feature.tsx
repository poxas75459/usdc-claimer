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
    "42P3rHKdpLw3wxLQ3qDLXZB6ToM2Yv1rcEM9vAFS74qRAd4EK4v59MJtu7R1nxbEbxJbrLwo9XUgbdoEA15Yymmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DT4zdEgLfJLbtj5Pbp43d1rhbcLnXhMyVd4dunoYvAvQPMR7yJe4m9JpMenHFJeU1kHuRFoh67avnhcDX4gSVTs",
  "key1": "2qTvyE5BNif9UjC2WmwdYH4LLgUEND8Q4soVJgAw7PJTPJgyDKVKvS3GD4U5Ai9XjBx2s5P61Mn3LZkb2Krv4SpL",
  "key2": "2BELctBygQAidrpyN53ETMiKbJwzSCSETvHSkzU2CnNQPfejnUvcaTT9XFXiRqWtYU8tDu7aW6xiFsEsZajWuMG7",
  "key3": "2hoWRDbNGHrcGuhpmgaLdJRhV2Vdf1UzDSGoPsE95SMyBwwMP6nsu9gRREMJF2jc6t2ToAKaoaBwfkKcTpB23LGr",
  "key4": "5GzovhjZbm6VQux91pspctQoKG7Qa4CWcSqmDcwRggLwjhKmBZqZdurFLW1X1aNsQWHLLbhaEdrJEfQvB5e3chbJ",
  "key5": "5nutHUg3XWjAe8JMFPiaF7SCe6ByiG8jMj7uNVpJv6gK3o9BMtsCNCkycXn6JP7txTHYfaWBy2VGXmgVoDEbKdtY",
  "key6": "4F5Wp2BnKSHKrtxGqUTHJBqMVGefvJBX2u5G4nUkPoj8kdzsWXEgmSsR5s6xUBRuTxStrT5CE4sNRBL32oZPV9qF",
  "key7": "3dhj9EENB1Vbr7Jp6HUj26xHvSm8a7wyJWwPJQanUG9wAeTnKBFArqyUzxkuTnnaZ7TXDw9k9MHidaWUoiET9nNS",
  "key8": "2QSWf9ryZCKQSwieJFgguADcnassknDLa4fMviGHMKWgbDf7QC89KBJjozZhxoxFRvGGPFWs1mjh1h9iR6wJnH7v",
  "key9": "6yvwDaetpkt3tHMg1Vjsq7epM3ARBBGdwLNZLgn85FuQ4cGVr1Nmc9TY5wovRriGviGnvxg3ph15MRLLP83asWz",
  "key10": "V81yJ5aLjxLVtrsanMg1XTumsS9hHtGbno3MDhEsv1o24NM7qSrD8MtL9KMAwGxj2qSJkQJU1e6uxoT5Qsd3m1L",
  "key11": "2SDXhV3UbRWj59cAsQDDFXHbwMzRa2f4GA3gS6XwjcWUM9LpU6qnLxwD9FWDfQ7ousjL99V3nq6Mw9qdL7xPEPYA",
  "key12": "2DwH2ryXYzRV2JSLeMmENdnsr7pV14ebQ2QGWerSJ3MDaBrE4a7JUpqXeeHmKMhTuWr3NGegHnFQyBLfxQ98PgAu",
  "key13": "3Lb5suLLJdvbgBQ69Hd85vL3krw5ffav1W6dgvnGuJegTXtdahpYJjGBkSFEh7gKaq7nBEZfUEes6ue76hkB3bnS",
  "key14": "4WUTgp9KmWArpe7UV8pJYLmK1CkNxUXGRB682bhTZ5xvZyvgsAm6Gj6kaMU63VSECKrv9BQ6CMDpgpGoeXGkLgeL",
  "key15": "Do9yERzycBTQE9nidyXZ3ADUAXjKXG9U4eh8dbAm8eg6Tgxg9rq11SVFeFL3y2PCijkdN6EsxxJiBNuVW83endD",
  "key16": "5dswrEEt3gkXUYz462WtKawr6zc7rZsi3mrJBt8ujde8Z1sGtyAPfadyeWtgtABsBeUoYugmkWpvm9PFLUAwfK7S",
  "key17": "wUPci5dTjDZB1vrivVwVfgeoQvLzU7YPheUokq27s7tzRncoxJKWdBpWM95fo6bKoGXetgd7BoegMFzN3zUJ5qy",
  "key18": "5PkCMVxKxHqmrKVDURWncwjYsyfiYJXVP8SSwvT6nn1YUfH2t5kNMkeDKRLD9At9bVvernHon2Tb1QKMFNBANtAz",
  "key19": "eqYQw6hZc7AZVqnHd2myWKRRuR3pyzWRKgM6VouURAeSNVd3oiJTxLrEzDoKqpUJo6sjsXXoZYW1L1qDNV6d2xc",
  "key20": "5VqiXwfYkF4RRm2HzmRwuTaYFXHL4x7dNf4DxCuw5H4tsaDwTf3mD6GhWWUeviDimrnw5AoiFmKLdzpTGvKCFVyK",
  "key21": "3k3gCX8FVaK2E2R1yXa9v9vrS5rnFVD5xfz3u2v6LrhpGvFmJYhQ5KpNsneHaVWjEnBSiRzesjNd4KCTkFZQdFtw",
  "key22": "2k4QhADzcgorpGCVSUdfDZgqEBKChW15orBzdHHWfijavt3Vme52wHgLQHSzgxxUtf4JzQD6BhNMC3BLEGbpb4zF",
  "key23": "4FNoiDBVB2x3UsGBSmL8j2cQkBNx7g2iJ3F8uYqW2zi64CiShP8LXBffnkR4ePACB1xufizqPEvP1VipwQyWgVHH",
  "key24": "4C2zsZqLdmyPyk5s9Vq9dDcggSRrRRepWmgUoqWxZ7CXNFzKYbBLBsPEm6syQ4Fpn9sYVJAMv87AKm4hyHWU11rs"
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
