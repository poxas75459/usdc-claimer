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
    "3BDCYhMHVtaVWz9tjmdp3xCLgeamKPrPhZrmztJ9Q9fTLNzo1cFqR17vcXWU6wK5UjsonE6vRoPisZ9j69ijrmgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrqRyfxkYM681n9XjXBcLwSjcw3qQUGLZbKWtnUGLGQ3Ez1Wa7Pan1Qs2d82g6Nsjr6KLQ7KsK9VXjXNPugpmkn",
  "key1": "4kyxrvTXy6oxhtVU5MkW3RH3AP5pQsEt6QgWMU2b4ULXXxGuGRwiuF9JmE4y3k95nT7EfrsJapvXFk9DVunR6gbT",
  "key2": "4zJYBe2fQ9P5rXAadQfDt3KgvZA4dCytXQ8eGsQSwsgnQoBELMRiVjt3wX7eFMZAngwKwECC6Tub87eTGuUUjFWn",
  "key3": "46ZE9M7DHQFytqMTXd4VCBLn9XwdBEyZCJVNdUQKKFDYBcHLWsnkKbPiArb518FzJqSYnpHw2cqyJNZAjkhNDVgU",
  "key4": "2q8Jo7TAiF2fZ2QvcrUtxdyYUDXnyjQcUtJAAVJEaswWenew2PjfPFd4EfVWLqBktYVMt96t5FjtTSnucEfJn6jB",
  "key5": "2j3iAqbQ1zJNRj1wL5CgDsKNbwVrJmVddyAxMB15mb5hif97RVfHhYMY4hgWzDq15sWAGxGFD3JkEZhwFRGCYsf9",
  "key6": "2xEoivjpULbnxrNgcRjYSU2pRVzk4wb4F1o2MbNMHDEKkgdMEAUUkUcdzaKVC5JQgbC46uMj7Fbaab3ftcL4Dgvd",
  "key7": "5qDmdBepPgat3SLjDUSnceiig8D39dz7r5GZXp8NYwbDWKas34qyFceC2gWSA9KVtzJn2SPKiEetRyEzscdKiY4B",
  "key8": "SVVfxprXJzpDhQo77o6Jkpo9XuXDo36bmPCW7vFvepkLr2G8LDQRFQ7yJXDB4hiGroo8asVtdhh3s7iYZPDGGgn",
  "key9": "LvVjxGpECooLsTDBFA6wP3VCUhrELQBvtgeyn2dQ1e1rR6KGCFWwbwj3rES5BbxibXe49FjZPxz4xGUyqxZtYiw",
  "key10": "4s9PZVPZkR6wYnV86Ab613hUoVawEAEhPmJsxRZ9eWvPanqrie4epWChASmq2A7asfv5UnGr8nzuzikLtwr98VTC",
  "key11": "26QsWznovanaN1wiznnSW4D2JJHaMB6ZehA5mP6CJhEHbifVNREUxKp7ampfqnNNUrgiD122ajXgnw2qixeT6XHG",
  "key12": "7p2CE58bH6yfGDVouXmkz6ArUbtVpeuKg7TAMeMkHAqmbchKJMsXPvf5KHnoq6xzGd3UVxj7XJd2pgSEkZPPYVy",
  "key13": "4civRgZwZfA4H9YGXTxqhFZCsDwhDLeq15LnyRZNLgEDC2fyBcMvYKtwQhP9NXEnpERwWPg3KjgNyy6yFcU8kohr",
  "key14": "3jchN6VRyfk7duQMbLi8cdKg5DjeU1NrB9hhnguy3RUrB1gdrpWrQAyEdzzF59A3Tu4kqb4VeYmvGzpUTPmE3jfd",
  "key15": "5zCanvSsMwjKXsFpSnRKguLf7FqeRms3QNyUb7QwJGiaRrHMMLoxQyZNuZa1KzTNktvWc61L2ccVd2RVKioeybTV",
  "key16": "48cqQoH7fEevj54Vtqtj3JSYds2MpfyybTjEATo94jUcf7bHQJbHM2yoJArVK6akJf7HK7SgdEbtBEv6KKnpDsdt",
  "key17": "3iemGuFL3wsuoRwHd5WraWYiBCZfzh9hPboyX6JBVv2De9LcCH2SS53QgmmPbqTtu1pgDqW31ANnUutn2iwqSafb",
  "key18": "5voqKLHfKtSJUGnE1BcBGoEF7Eiqh5oXdqcprnRGmLAY8qZGZS7x9J2JXxSWbRoSZNCpt6jkR3fjsFxuZQCCCpci",
  "key19": "56JuXrd7nRy7pHBTTTpDhLosuC1BMs3Uo4atp2ChprsyLNrQSKHN9XWxru1ggLCbxzBiXbxt8cGAqJQ9a48Ywam6",
  "key20": "3kYgNYZXg4HyxDVLqcKwnhzRtugndQA2qcnv3E6XaQ7viY7qTFYsBn8CKBJ769TzChae7yCyKWGSmcJDQW6BZYb6",
  "key21": "4gRSgURn4cooUpQ4NSToF3e8jr9eR7XqWV97Mu4RGzPQzdZ8FSEsmSnwNMUMkX5y7PTb8t2T3T9HZyG4H3uxZELi",
  "key22": "43gge7CPKtwsQcrZFc7Y4Yks3xWDwy8cgoGQaLmcpvTgTX2z3pm2jcQQiNCQhS6nrYDBaMXdadUeiGu2avVvJsqD",
  "key23": "Kj1joqY6i4oCSiRAEUyJky5QCKuCznyiQ8guxwRjhQmBkAMTMzcVxAXmqFpbu4GJL74Be1JXwF2youpwRiqr3Vk",
  "key24": "2D5ULcg4WoXTyc9vKiZszWVasHTGGjEYCYeNbP3xTQCwvefnDcrSPdUWXyAzbwMvDBLSSVAUFC6ra35iyjrAnYAg",
  "key25": "3dxwRUJiZwFm9RWJYz1TZ8o3CE3BPmnQru8cWXJaqkamv7gQPj97DEDKo4xoxJaVdfiX37KLJ9931iny5H9g26Aq"
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
