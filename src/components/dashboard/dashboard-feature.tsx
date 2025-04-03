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
    "4YZZzWhfhF8yuGDsTEBxGVfWSHLsBm2yp3GWMT56gr5GqUNe9nFmutmnVYW9uDyceWtAbNcVcFQxx1on5J369rBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCBdYrDqtaiRrtcXqoqQThU6ZE9nFvcaszXArGnfGxhaiJXSuoVWbmFW3fQCUZbi6SpiZLSHxvsgfRRSvZ62K76",
  "key1": "3jNafH6JQdNxvf3FxYERVQjsdA7iRCSDg4avhqWhy9W3rJLJ9sjcpxZTcWsk4Z4cFiDcpjv7zRoBZAcFWNucLYKT",
  "key2": "4vYXWMV3q8kEQGfEN1TUDSRW4W3yecox4S2d7HHSBfx7imnZNnRJe81P6qQgY98jbpBVaKnoSxbquZDZhEKbUiKq",
  "key3": "2PqttfsJuvMuh1jaVjTPdgvr7qcAdQXvEb8iJSFS7JS8k2L3SqqZkBmiWqDttCDcpPRWAt8gowaFjDQhe8uy3Aoh",
  "key4": "3wAfFUCYxQh5W4ZECPwRYfCLnZ7phtsZ6AMmqLdhNB9QPmMM9ygCt9CbQME8TC9rwrjtDFYo1MnmtUY7bPAHWD74",
  "key5": "4xeXdbgu4gF65Z323fdzSyy6p9VxxDi2zaaAkmuQ7i43zxtkjDcrPLySyVjn547XhAs5X3DgMHPZMwrhSU1FjhYW",
  "key6": "5hNLz6fZ6cEXLEjyYhekPnjvJBZciwMS5aWTNBccyPXYzQpYNtJyAdbz7hDS7sEtrCdDCbWDHU2tHu34reyeAFGt",
  "key7": "4G6BV7FDrzgs6DKLuXA7rbG883VrQSRe5YhjvroNGKrVsSwAShNKiW44LTp7zjEYQDckT7EXWFpLUZgVPgCWbE35",
  "key8": "2H7iHyoHdWhvVyfFPTVG6AAS63m36bQHSJojjVaSZc9gRQMMgG8nEK9KNsnkQ2PXnZY9fp7WTn6AgRts7P6RaWBM",
  "key9": "U6dvXBNnQ1WygZDhWvtPEi4LeTwQv5oci8rXfyYSQeVV5GWMocdsLJNudgXyVxcbjStVia7tdAit1KDmJ6QzvKS",
  "key10": "2eDit4SdStQvYqTS66RxmV8ckukpRmg7ftNzAe5DkL2AA6j9QsAVSmn4kMKMHfjAxiPJe6gfyTHwXknYhEcWTjuR",
  "key11": "5SXyuEXc2S4cjZ3QRvD3rinEzh6XmVHDdE2jY3cCHMATvWMoBds5ZcpGvwVZXjaKhBkyi8E8t7Hqc38LPHugZC5e",
  "key12": "2iJ6W1ADBp7s7aTEtnXy184GH29rLgkJhU8L55EJrMXSPR4mo7ffMNySZUVzf8U5w5rzxugRKrdm4KUfvj5T5FXJ",
  "key13": "gy31au7NHcRdp6UTTwTvj7gu4dmEqQQQHUAW1b3RSvrPJ8hmenaJN8YxYcKFQhpmD2qMkoDoQy4oWw9rodnK3jC",
  "key14": "3okXtSoyXE3i1s2SdR9JjZEAvh7K8QPNTHdDdvxHQf4VU1HLnGCvJDRftm5m8XSBpQR9stPjafvKZtiYKM18Vb8G",
  "key15": "2q6hdtHwhqCZaYseHKw9Q48otahEXu4P9PjNLYqo1sr8KV8fCXh6Xzs2H84vj7U4yVzakp3GpnGSaY4N5nQ7A5yo",
  "key16": "5a9qUPR6mCHWYVhdBJwFEPcCd8e6kawRcZchZv64cUnCpjgmQXbPqvMP3YThN4nE5F8Z5Pkp3moqrsCWupH1uEys",
  "key17": "4qx9mqcGZ4GMvWyGi8XgumuUFikhykrkeesUd2q2VKhpGaqKWbZZU3axxEBbpR7MhTpmXM29aSNJtwvbKATfeujm",
  "key18": "2QHR472sEPFmaCPqhJCkmQH9AH1QshrBa4nhR3vj5bRk1W5hdXBMKDWRBrAPnnEM3qgCuXXLUfG8o2TL7CmGYiao",
  "key19": "4mBfhhHv3GDBeACPU3Sgz7r4ztTvJuPp2ASJANHqZrsN7SPnGxh51pmpKqoc492dQKhWQKuNLtjpN1Wo2R15wqfZ",
  "key20": "2oQDEm5oE8ncGCzo12RRjRwTfo84uDuaPEYMhTcUnHyUWcAMyNiqj9oXuXUKqbrAbtWCRMgQugFrkDu3EeHriMbX",
  "key21": "3EZVTUTMEu5VZsygNbdGhvvrTuoDpJZ8ciExyfkRcyi6xrnNRrzMAJ2LP26GRGYJfceJywFfswJihUCfKSnxpSXh",
  "key22": "5JLykmkb6uJ6vhDvK7NMZYygxBujPgtjyqLecmiGspSEJ3AiCWSgJESepSbxKDUQaKbXXWpNsTCr4rK4GAtvv1DC",
  "key23": "g3u75Y4J7J4LhxvxSR9uUNbNyqaKnMacyh4fXWDB4Ge2kZjcgRMj2CAwuivFfQbbRHmLBmD3EkPiKruEKvh6L6o",
  "key24": "EASVw5z3V3M24bwioZDZPS7VYBZ5iBKsi9Gvpm7vhToSuevTr8okExSm75t7tLM8cjcauCFDNU55XkrEHLjhajv"
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
