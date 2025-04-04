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
    "Hr29sHMmpmszgLt6guDYjpEMvLBjpbvCyy2J2aaFbdW2C8M5rVfverBqa2SpjHmaa83PYKxELNzRwxW6cF2KLdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUnBxYL1UTeYM5yzJ2pRDhLS1pZ9Uru4hSTK9wddxExZcfeoRJeSGhEL9ewNqKSA8RGZbZocq9BEW8mvUWnArwy",
  "key1": "5KnhiDLVCupeaFqy3XFmSTZEHGzd4RwEgvzmXMfTQ4mcL23Njnj4vfY8Xjnq6Jun8Y2gVUdqCCe3SafBy16MdYje",
  "key2": "2fs4VhwKB1E5Fs6koqFfYTBUaGhoMh5CSGMqVioKVE4UyD7EqLoXXvwcbvFYRci25v5T9YTt8rz9Z7FeT3dPfVfv",
  "key3": "3gHGBPiWpaB4hReLHjwLrGyFPufgNB1UTsmNBSMbkhWP9MFdefiACZYZfFyw1AUj2U3DTHcASJC5puHYh8SFsZaV",
  "key4": "5cHfW6j8KHLTmtPd6aF4tD5TsQMgcoTrE2RWUeX8QQSsQoyzu9MrQJRMknswnCGiw82EuUCFb87wXVRFSuDBYbKi",
  "key5": "59n88Yb648rrrt3Y85m6dDXrG7qjVReSHN4TSwgvNCfUraHQUJdDMWpgkW8pWTMpoDy1Zii4wGLXdjGxN4YFsEqi",
  "key6": "3g8612a2FX9iCuzZhacffgmpT4kGiCjDYg5YkKgQdJ1S21hyRvqYDGwo4685NJLJUz25bdNsvRXwygVKU57PzDgq",
  "key7": "2cP8wCPasTUv2EKcJ58mbbrbwSCxiX8GPctsHgLdSD5XWuSJPwk8DDqNy5xcPNCtC3n4jEEYYiQQPLwUgN6KSqPa",
  "key8": "4ZvEnWKC7PHpWScbz4kG8Li15BGYefjDSXCFG1BD8QtC2bLRaSR5yWnfyaHMm9zivqJFML57jPZj21kyp1Fp8aJ",
  "key9": "5s6iz8HVBR63tisjxpn6LpTKh1Ym8d61EbHV5uj7nw28NZFZWM6H2pCjYEwvY1WRc1pfidiA8viuZjm9y3A3AfA8",
  "key10": "4hR12UfVEyAZZ24MZKWFs3HK7F11syxA41SdzJnVzNhQc7tqZZN2pUdMti71gGHZ1ozJDr6YU4gRifP3ZNX8tSwU",
  "key11": "5jezkkre3618pAD11wWGV8SRdsDXdpyJHPaAJqJWUUeN15F21DTcxiBkUxUM7s1PFUptsnpYmAxsrnTZHxyCikBA",
  "key12": "vhgLwtujMBr4m4L3UCohRz4zeTu3j2xovmYfPa1z2rRg1qk6oVanbJ9YvvZ9sUwQ8qKR1FtA9y3pYCujEpE8FRg",
  "key13": "64rYNbEQXYYcmkeEjCtT4jNFQduYA1vtFfuTW1GF7d5mMZx7R39q85WWyFToUaw4mAm8GTr9vN2f2TuhhzM6pScf",
  "key14": "2bEQxtzATBbCjuUrCSkChf42uNRFv989sK4FWuXoTzfDksVzDUE4gEBvb4wXfAS9AUxQ63pBcHRUVMjXLGYz2NR6",
  "key15": "3xyqQKtfiDQeLcPxj3tZUoE1981LgnqUywtp72ijNVaK1u8n8G5xABRxyUkUJuZiDzowFWj4o9iRA8DhLETYgk3W",
  "key16": "3WSUb8t2xq275hsRNdhiK5MYPZxAVJFcUZFptGziJGw6NmXw3StQqrkyccjS1gjMNkcTWtx8qTQk5es8kotkgsNr",
  "key17": "4X5Y1KKDvNrgMe9kyLZMaNPXHHCxEkwKYgyKW9bDTD6Av3JN2E1t9SybtHJQniA2KRb15oNyuqoQwPwfcJB5Vwn4",
  "key18": "2E6RtAf4R9CX4U1oeJidQAp1onTsxFhrNAtvN3DFrRQf8zDbhLyrWuTDzzsBB6mNbTSD6JH38PJxDLcNVQaua7FR",
  "key19": "UegKGn4Prs7Li2CTqZJaJDZwFUzyt5f4vWGH4REPzu1tgg5pGxmxEZf5oZ4rERDXTCfGMx1GFRi5Knq5obXfvA9",
  "key20": "4orFjyNC6Cfsh8Ne2otV9AoEe4tTgbyDANnioi7nBn7cC9N6aEf5B7QRecUUZyPVQg9QNtoKvzbQdp2XM4iKWH6w",
  "key21": "4tYgVMMa1NjX4MvyhQMcnGW41DH3hDdUmsLMpTyUDezBC1ng3Hr8zFou9Fu6ZkKnRiEx6G5w1twppu5dofbq3trn",
  "key22": "hhrnGLHgLbD5GBHLh5ZRTssAu7RoScxwWr6ftStDzWhPXGDhbsxYtBy4eFRDsKGcgvWwsrGMtFFzTf2L9XxekiL",
  "key23": "5GVDwddKWcJn6ZCCbsvVgtDHrG2xp6NTzoQpfiX2Q2yXG14SSt6iCrnMqjEW4PDUTKy8BDyp6rwC7jhQY9dZx3cx",
  "key24": "3mcVA9CA3gNjeGJD52V7pA7nBM6mEQojAATR4NSmGmCE18YgnJg3KMWMXRFRftMzoTDG6AGFtyy8mHgZnnQBsLwm",
  "key25": "4L9D5Dfh8bqXP2LXuNePXtthw1HpSyVSA12mH8wpAFkS2EyEBEvCHSZmuDgeb8ER3Z3xpQtCGCefaVjAzxqVM42S",
  "key26": "4Q2JiH64qEsd4frvhJqhPndYBRuuKFt2fxBT1rsJVDq7hus9ruY3TLZ7ARCi2GmTzDoaE2Uqd94VUU7SKyuc2EiR",
  "key27": "57VKmC42ZuPzin7qtJngn5nqYCcYMUfznTpWT9eFVqJp8QgydfuXxFPFxf341wdY8bV9NaG4joJ1u8EvnaeKutoS"
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
