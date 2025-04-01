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
    "5GXHQbrJrbmupTbCuf7xHzrGsNFU1258WgKdnuEvQGj781cQmbLEnL3h4eSLyVxBSoGENEZ8LZHdkXk3xDm3PYJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfxUCNXJzmCkJr4LHW5RnEBXTbBiCfTF4BZEdLY77nbjYwhzMsu4LF4wxkidpNrbE5WRZ3LUxrE6WZAu7RwWcru",
  "key1": "4aS1sYhsAkKS9EqYhZaq3TCdddC3z1jc8m2b4mXni1TiLZHzgVopkvbVbvEp93VdEEJrvRPF6zuZz3VgEFnm911t",
  "key2": "qXJAcK9YN3XghYRpjykKQHC6dbKR4n8eXKpPABXHpJHnUmXXJRzAaTGv9UaxSsoeswDQi6SSt9qyoaM4tjHhTgR",
  "key3": "hXqsjYdXk5oTtPuswKsPzHcYzCB9xfgNmwUjyhrGrHe9NRAHjh1yjpNKGjhbw6nrMS6ZWjDANFeSzNFuJw196en",
  "key4": "35Jv8zaDHfYWeGvCuVCZHd3oRneJvdLxfPUESUgXrYfxLRUAyMEepQQ2u59GGHnSjPdggY48ErhnRvv9wXoHRJM",
  "key5": "5JVeKSSd9VWUJnMrzCdPY82azpBPSi6TBwzbcvqEWhNcFUAnMXno2dGYroG3F4PVsbMmsfozfWZ9JB1g9iscxDnA",
  "key6": "5eLKVPkYCWFphQa2weuTinKFMWANJs9ayxK6tmZpvfQL3WohbAMLWSKk23Verf1qL6s5fVxbG6pVSDiESbQYT5hU",
  "key7": "EyDLRc3eJwxnX6zEEuFzLWjmKozbXA5Q6PBr2ZoyYaaLEixKHpgE2RPp2s7VET8GQf19wfGsp28EmmWg5Wuadgd",
  "key8": "2svCqacLgMJ2ZFtbv8mvUg4VBGyckSaAGxRHk5bJdGFmLpUExFHJoXGLQ137YYuWqf31sjJtErn6gHoCq9opVWwc",
  "key9": "rpRvfapEpY8RbBSbYtL9r2VxNpGR1MafW6g5eqmj6NXu9ZtJ91eHDGPj8D9EN3njpmkAMJk5BVeMnMBP9F69t5T",
  "key10": "4aePTWp8DtrL1ksJoAmBr7LCw2JgitQqx5oGZnHaEcKXJ8JVq6kqoezjBzUzP7y7xBVsaWJmm3r4GV6chsYKGQ6W",
  "key11": "4iHBRCbTUHUHhpcxEQmJHdSYCo2PVzQN6ht9JXSHvfb7zHJzYn82Qo1obyBkTnn3VGDTRV1T9TNyt9PfPER7RweG",
  "key12": "2QiPPXzvrgtHUVW97Dr8SXKPBZ2PG1RLRWgE5HunXyZ8UVM1JcEJ5fB46nk4Ru4wFboMNae5nZY37BoCptxaqSq6",
  "key13": "4FB4DXokLfuTTaERCFiZRFL2ssdUBWSAsWJfwHcXLkvnE52qae1EjbyNK7mc83WF277RtHBQT2ZdimskRGjgPNJs",
  "key14": "5mn3JM2tJtfRm4wsoaCCyBkDbqsCFP1cP2wiqqWVuDzc4t2Sw5kf1TiE6Aaj2Noxey4tkJU1QrHcdQaRaknB9h36",
  "key15": "43N69CT1YxVBP2q9ZriW4TTL42cpPbhPDs62FrWB3mQthyX7HSkALbcWC4FCJk7GxWk8HQdJktU74dGU6RY7NoW2",
  "key16": "3xH6GiCAst1QjhEAPLEwHRPDEcn32QLKLhhHsuPUQTMgZhrySnxaurker34zfZhRxxsep5u2cuo8U4vEGc6BqMhM",
  "key17": "3qi4HcNiPy8CucXbBPYDms13ma7V7QJLYjLttBe8NfQV5VoVP9vopkVprAGPeVJ3ARSX7Z4mvC7DXehka6KzKU4t",
  "key18": "5zJCbiLTDCc1trjTke12QJScSt2YnSfm7tPSofcHeTTP6rrnZoA8eEiSAU5dYYHwFYx1iWveCXbtGqF4TYWctRQr",
  "key19": "3iK2CkFfMrhikLdWhn6VL7Fa7VEbG3Xe6FfkRv7V2XN57TTVPyNx8MspueCgjEnYgCHMG1djZ6Q7yUze6fzcimSM",
  "key20": "3yFuN7qSAgzc4pmwquA51Qtxk5drd7fDX7HxsaZikteRq9SnQKQ75SGWXzffzoSHhfUKXx94Kr7rNd7gMbYNKPP1",
  "key21": "3AyTURq1VciQMDeokvaemjV22J5AuKMGWbEvB2BBQLtKvZQt8VFiRboTJmXUrboeSczr1nNfCD67HYeiR7pJkpsc",
  "key22": "Nt63YqkyLycD6HzS1DLLx4H3sbhjo62CHNHPhUYPMhUAJaPtQZuwfCejdgW2N742L3BC9xpfbNhMFTEPeVf5Xwc",
  "key23": "3uZvpcqC5CPU6iqto8f7xKStBZQBCvsNJCMuu3etgGC8HML46xydd7UvtzP3zAnoeaPQML7QeWCQ7QqgyWqLQjiE",
  "key24": "1KeR8AkPj8zA6KpiEFvSXN5t317dGdunkAjTGPveL5xZYccsKMhvX6wHkGWi8JeeLLuji4xDT1ovQXqg45AYRRH"
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
