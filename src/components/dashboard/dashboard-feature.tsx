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
    "5DvgKmQPqpEKwX5W4vVoDqZkhtyUqsq13xbwaEiNvA8RnjqwQmFJAne9p8FGoxZLgMQi5rPbzxQeXVk31JSavE3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Ff51AXzBQdQn9hn5DGpsZSUc9MweXxFwq2kn1o8zuRAxZk9V5zCJZ7R3xV5mwvhP7urfLW9oy9FLPA5Bp8C5Wx",
  "key1": "5zaSqdwjobeqojGU4LmWx4UPt63YjD2ou5H7T34iwL5kQD4YKEWvTXENqd26h9XyQbQ3sfNjwn4Kv3FirfcEAbtb",
  "key2": "39U6LznjsmHuVzskv46VgKTZrnCiVaL9wEpHJ3xpffx3zUVx46xD3oXYfDN2Z3ZMpbDRM6YjYsD2BQCFH485P8QJ",
  "key3": "5oGdF18RES4YuJ2jNHWj3aQZqou6t4VeA5QngbkcRs7cjpJPVF4Pb4vGdu14viivTzBF3Nsfvut2f38ZgKLeKfNz",
  "key4": "44wu4Y3MPhBBZZvNMKe3HA5XB6Bor1HRozhzMCKqpdRUSgTtMh8VFGEsUMRtuu4j5HxWUTH4AtZvwEnzTTwsXJGc",
  "key5": "3oUHsbjPzzhsS38oGonkrrd6UUrdJqT1rSHANbEy3K8tVptxZ1FB28G3onTLzEEgkTiXUDEHTbUziCVTFSLTYxoy",
  "key6": "3j9hhtzXwGhozxD9R7BnZsQJcr8iRP27KmggdFWdnYnoXfnsbgoGo7ZbukyWWgHMxDFgHKgNkF1cHgT4not2b7ce",
  "key7": "4ePygBrBzT1Stbn6MW6baompTKPGjn5KCxvdXoBoXeM8BSGz2XF2LxShTDY5HmFcHVWCY6ieprtmD8k9urcHyLhh",
  "key8": "2FAYHcP23mnayykTfShUB6y3qXeh4SLUwxmJ99PJjwWokLrvvgTVC2WST7K2rJqwxBdRdVGtPZwQQwYB2mhjMHW",
  "key9": "3DLSuSWsQvEuEJwHUFhfvABticR9nC8FKFe3XFQ7iQMAvkGhYFA2oqdxQXVLwwzMGobNUC5zKfHv1gCsSjWY7fu4",
  "key10": "5pLBGfWw4qNoLfgA6H8hUUULimxwLaYHHjHAfusu4Ym6AxL3iZfz1HTaUdMcwNBeSoE7k1BUg8Ubbx5EmGWAys1h",
  "key11": "5JZ5JQwUZDLe8EvCqQAW8T4FvYMC4fhvvrt9K7SXqqVb9VXg1zSJzfsvN31v3ftr6uaGq3A1Z5hiEDqe3prubTVC",
  "key12": "JWxAzXZFb9x5dAkGiwDav1jSrwqejF22cJUoMJvMQdjp3vTLSxFLc1F97nuZCNY4pAA5wTjnShcbyrZgoEJdG9B",
  "key13": "4fTVuEq7ipuXWBUnEbTJhqH1QJNfa7mWqEYpoBao7MEJWrvULxcwuwvvNqbt8DbxqWw8crEge5PJamgTVipR1sUU",
  "key14": "3p3kgxjSjpmQVLXuE5dhfJzQ1wPMbYDb6Tu8P2sWWdvDUxyyCcDESy3i8v8qd3oG9dcVdVGci7vqRsouBSRvKhR1",
  "key15": "4oW5EwhYSzqZ2eMQMfk7RZzubsms6AMPYoMtRbx8ympdRgYT1z7VNdSwW27TEgJ8CJ3Di9Wa8N44bm3jsDdA8t3F",
  "key16": "4XkPp9aCoeRJqVDSFzSNCC3atia1MbTgAnsdgUmwVfBHavw1XdXdu1Z9a2MGTWfi3oHCyZXfWRu7YrDdLvQEh58S",
  "key17": "5dghpDECB5pq3ecgiuhhAFTBxHPVrMEZ5LpGWqTrHThDuWk6iiDYCpKDkR1xrqCWH3iF7ouoi6PRkXCcJU2DvM4i",
  "key18": "2w1qKTDJUz87qrubkjFufK7pDmP9w2L9jpDve6KVJohkKZ83x11cVEm6UW1rrVT5GGsUG3q6aTPA6oWj1n6KFrq4",
  "key19": "25YLFCt9sVWfzazmsikXkMpy4kyUaD9rtYVDSnjougsdt8xApvgpVnaJ3GQcTLPGrwunGXMT6mNx7KumJFrR6kgp",
  "key20": "68G5MDuzHesywG3Trdf5ZwzmgYbS7616NfcyF6o22SMUjiwDQfUGV4dQvmT6h3T3aSBS6ZdUQoXA1MahWgqeiAg",
  "key21": "TftHUpamSVsbSxFDJxukQgEpAsAp5LwXjQAUXxb8g4JXQGjjngHM3GgtiJTqoAzxFf3U6baxbd4aXghnUY6bWLM",
  "key22": "5qCmoT76nU5erAkJs6EEAtWdE48Tp6VV4FVpGCR9jMzMYwjkxzcLnV7297r61Z5e2r4oxHpzjgGWA7AoWhSLh81",
  "key23": "6uWBWhURvt7y1wNhyQiDwjpvHfn42s24znfAyCFvWf9X1kDGBRYCPSFHktaMJFWdD3e2VZ7MfqfwHAPN8TaeLWh",
  "key24": "5BKC3iDfbsSng2XNJutVJ9Tyiky1wCVusWZHocmVW2FeHG5ttVcysoi3LKK12S3JNZPnQVQ9dAsEgSHqDmaRYwQS",
  "key25": "3sNCHWJMnN4uMJcRr9CgERKwvjgpHe3tv68uyZgnygFHqyzLQGYLBio2q7jovuyFzF1a5gbEwYjP6JDBFyjgdmUX",
  "key26": "x8aVCrbdGBtMyqmJjEBLAaK3HCQbfR9TBjcy5JaDGzqUzC9vZp6XZiEJtq7dCdCLYgJci4R9Lk4rE4zq8CynYeo",
  "key27": "4VuMqk1GWB6JKwhDx6kaVcAJ9qqENcVWMGpPKuZuXrnvtC1aPPMweBHmdrSSfHqUEVpsy2zjazUvR4tsUWy3fkCu",
  "key28": "2CTDN5Q5a7LHQsevbKRQBLSVPZpw1LQWrk4wjpAAfGtew2Z3sky1H1eSaS5gc7rxuvCG6TYV3oeT3JMcLDBXc1Kq",
  "key29": "2MCBVE4mtBSY2hWGiiLy6s8f8gywawtQsM9fQespZbuQgR3JbfQgxYppdpFG5epaUt9sSNY2HHwcwhtmLE5KLwYD",
  "key30": "5tGLrbxnWwkTrqk2Bzf5PaiGmhsPcAQFB3psBd6HUxzaF1XYZVopA5k17BgNFoz67cJnKLRBW8Tf8wpN2vTv8HeZ",
  "key31": "4f66fhzB2p2e27MSnYefqnyJnJsRJGTQ6LCHdeodfRhVpqwED4HW52bbc52gEb8Y4r8a6BCk61G4i4V4reKH7yN",
  "key32": "bA7HkKi4DjE2n7ihzyfg1vLdEfwzJSvgeY3keJkQGH1ipQGecPH3FNFbSkiy27rsqykQZQCKYAHMJ5Hf8JN3k2S"
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
