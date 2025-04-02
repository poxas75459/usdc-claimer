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
    "4xA3UCsiHrQ94zUH9vbUwRNRDzo8FNm7vjG7LNVdAboY7PW3UiBdGWYw9ydbQ3w9Ft4fsa8Yj7fa61JuaRByxXxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SommWJYf8MxkTrJdLJqBLt4snLxjgWAogx3UXVu4pLTdNMiP3J8DjHTVfGBxFRdusHyy6afHYEmjsaw42LqCQL",
  "key1": "31Jme53LaZbiuwoZQMKiBkE7HC2UB6NzMWEGCobqvF2okv1L4bfb5tGyhNfDF8Y9pgLX7FM13oegmG4pWn3ih96b",
  "key2": "U4cCZbrazfCc6pVMarhNre7fHRfqb5X24FAyGm2PWTdQQkG4XAwtnHg2EvLvEXAREjRkCLMDucAzsWx68rxYh2e",
  "key3": "5X8TPkJcPsF5FAyxGZzR1FX2Vv3hVd37Cxc2a7BDnuWjaw6aEj9x3hcDiYbYyNbmufrsiyRqL12rHhK9xapqNS2s",
  "key4": "3nDX7F6p9Nk9tVvKc7cjmJ7Q1PSXryq1WSE1FQUZwYo85NeVnZ2v7E1DZ1VCV6Xrmy7LaRMpzjvRhGAj8VC2VZYh",
  "key5": "yDzWjhL4faW2cHWZkmaBwLLAug44pgSahkFkyZpmDhjPbWEBdSZ1wTMxVFeSEunboftWf7nPJVMyfsFxQnmsDLa",
  "key6": "51AWNBjmUXjLKN8ALADwAyaJkbLBxgqJ9kxe5jAUQGTiBCq8SFxQ26s5YPack6beNCkv2cJV1G7Y2iyJeUMLHcvt",
  "key7": "3xFFj3zaih6DciS2UJ2NUkcdnn53cD9vRpBjwCyDGFDjygWUcbqSG6ewPtCdKST8N3yTzYnwnUqSG8NPyphzSjf6",
  "key8": "25r2rechM74BMsfQo2DDHFKiHQc5nEo6ivYfNmBhALfxJPUbWcqmxnjCBBWNeB7xRS4dVHsWA5Fintv4LxwZxUcD",
  "key9": "5BJW73KAy9qNMMd8Qw1LF2Skt2vjw9KL9sqc8z7m55MGPpN29sYWW4CuPt5TPmMrLyJ4j5CD3hoWZNmxMpKsTsBd",
  "key10": "3U2ut8jxCuZFYypKmBfmscpPJ21iJkadRH3pfygGePn9wdQGPWqmeikVGMMjMMVYF6j4QGEKwgAKFaVGrvxYEEeh",
  "key11": "jeparGJX3WCPfz9gy6JSvdDUQjS6vcLMVbBPtjyY66jMTFHnsEbrJCZeQqQw83xsV8BELf6ZZUoxepQr4nV1hfX",
  "key12": "38aT74eWSQ3XKoMdnPiVj1QR3uKSxzavjqsZFLPL44qfK4jFPRkFvQETL9rNCLpEyPgw2C2BC5XpnyRSFPGyRMeF",
  "key13": "4sNdMsSLkJHHrnzPttRMwv5aM53gFQFB1aogjmxY6fDCJRPfuoBbbBHtUvUtbT4k8xsCPNtULx2T92Pkqjfi5Uow",
  "key14": "4qUAXdk5FopcrLhvG6qqPvk4zEHVocprG43WSHmpcHwyYiP3SAHD9ZMD28aM3mTuFRgc4hvVTV2oTMbGjANwBXtE",
  "key15": "1UApGeZLi52Q8qEokpP6hBcHntTat4qZQWDMdzoM9CXAFKnJVyxAQcXWQq2B2zE6ZkntnAj4fHGgphsozvgNiA",
  "key16": "3YkQEc8katPT36nb1Na4Ca4noN19peLaJ8zT7T39Dzs2Dsvr2uMVAHvd5JtcJYbCgiFtYM38cNdPkmGCpstk9K5L",
  "key17": "nVuWoNRzaXhMUPNqy25Ms6covGRv8e9sNYMbQJ1i8X8qfzCCZtcpjweLJJDq4ya9SpoyUXgvj61tWSn8SGiex7q",
  "key18": "5HEQTT4xNmexV8Kaj5fE6K4EEpKpcJmvK2PtzLsoMb9XtqyGYCbwNKaejNzYjxaYRWqhsUNWAw4G5A57yQZLuqc4",
  "key19": "65XLQUsKdMHnjSzBT9AzErLGTze5UCXxuCbfMsnuAkXnEgSyLwwJdgLjSzdoVKg2RurzCMJgipwKt7n4ax34KGLS",
  "key20": "2LkzY5gAts9GHKLDtnXti8EBmRW1puhra7zjN3or46qidev8rvTm6zxEY5M8mKkgD52DkgCNZoS8hunaMzLvAi28",
  "key21": "4mCYNvcEgBRW3FVB53xLK1dLCaD4uxi9BbhDgbDwxvomooYBmvHnm7zk64gbPKDDALDZYFfHDH267Y4UMoBknM7Q",
  "key22": "3MHwyPZBw8qGrRzt7JfwKjH9PyDGbgjKsvUiCUF5wuhVToW5wK4633JWQs1WKWBrEiEqVUgEHv364ASCCxb2bKfY",
  "key23": "3iBreQXke9kTsUmHeCjbPvw5NotGE8vipYjkc432JHaYAR5UG34qEZT5uJpjd8Lm5DFxqPGs5EByX5m9Xvhc5qm6",
  "key24": "3tLNH7ZcuwoU7aW4M3mEqMYgTan9BRdVMvqMhWNkr9rbgRpyrs8PPpHvpkGyBhemoHwGovVHER61BAf2mRtdFPBv",
  "key25": "MT4uSdjR2NHj3E7XEn5qgcV1EcanSuMQQbWfaW9qk6hhSVJ8Uwhbp3ahyZwbp2svXgrmVUzrm7ZyB5eNVoQhYik"
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
