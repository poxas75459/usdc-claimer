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
    "4QCmmuzMLeBWMjt1b3FsXy8Pz6FMN2g8qnmWEBWCn4zmbhsMedgVqbYca9PmoXrSh8Xp1ADUwBij7X1AJts2WD2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaEVM4PEEPNcHx65DpDCPSk4X623TnAK2GJUW4sHGJbyDMDsZCESko1Fwu8LHpdemcb4mCJSWuMy34MTF7jssMM",
  "key1": "3GpBjNMWCGmUUGDvTphvez7PHNiAq8gbhCS8AnqiaWZVAysoEfH2Q65UrE6rjrJWEVKWV5toogFf2VFMhJsdX8RU",
  "key2": "5tMAmxXJUSzeZzE6P5CiMJ7MUbTrV7DnDsjfrE1RFj6qPA5BrBbzzFazyAtq4N8i6mwHvmLmQppdNvAtqBgP9NAF",
  "key3": "4VAMDojFNokCbER6T427V9b6GSEsFWqFr7ejpuADb5btTDr6M3Xhd9u8BxDj1NjFcmvLZyDapYHkCHUqNEKdYwDW",
  "key4": "2FzkYtYs91nVrvihHwZb52Bc8RhTBqkKqQq8hVPfbvrFK1kik9iCWkg2Kwsjy1d98KKyeVDTBA8YM6TMR5EVCHAd",
  "key5": "23A18deUzMqmmHypBSMqu2vSvi4t2xo7cTZLgpdqTzab2SMGKxC5CvMwXeZcn2Wn3Xz1bcuktZnGtA9RS328DVqo",
  "key6": "4bZ2UJvGCNtPwJxCwcErDcftsTnHPhjyH1J7PUF9o8r7htLg3C5gjerwbBKcKoFmVxXvhHYda8dY7N8cebmAPJit",
  "key7": "5fcPpSWUwH3H6yjcap5GhzEumTMjQxLSDgbzarWFrgpG8Dxg2uMTLygNkatPNcn8Q21ZrmSbLxa8Z383jrLx6Awq",
  "key8": "3XfgdtMjUmecUHVir951NJdE8A15QRjTSYkpWygUusvBoWsfndzhwsX3EjJvzHXCaYmqPd6xdUrjbMNFvPLxKB9V",
  "key9": "5DiBA6k2uh2miwq4UABS172RkzgqgqYzhPBb7JVpREwtycvvQXTin9TBAN7duq4nCcL5G4ESF2wgs4WUpKjKo7Go",
  "key10": "37NQRwp3HTKSL5MuaLhxze9vZ5X7pEH5FKjcDsf2t3Zk7b3ib7RuPYZjn5qLmkLwv8eZc2wxKS7WtgjpUePzEMcL",
  "key11": "Q2g72aGmSaZRQtBmiDdKoNp2V4agHEcqfdBuMAVoNxyRZx3vBdBT1TSJH3S6fG5D5ExxphE15t1SzTvz9gRhK2Z",
  "key12": "SSB8HtiaB8iuUp8DRFA5Ge3qV73dmr1XsbtYynvWhmwAGg688c3wxYFTehpGTrDJ2vH39EFgYQQJZ13YB9odFcU",
  "key13": "531oWM8KEUhfHHRLt6Yb74W617qn2pEcm9MJowtZQ4qWRXb1LmXWHB39qJEpVBVkeXNXqhQuMSQDzf3N8n1sEc2C",
  "key14": "ddMybVQdrwbAmU5x9LvvatijiAzfod63ANjjumKCQS2iyM6JJNQ61Sb3JZVgLp6aiMYCCe353QZydAoitdwgRZc",
  "key15": "5CQPa9DHYxAzaza9RLfcyAJhyJKfotWk1F7w8y6kwH1CFPHsQdvVvpKstwiZKHQanzMMrA2aDf7B9CckZP2XLFpZ",
  "key16": "mpDWKLkc7rrtMwjQHu7DY36r7qoBcifatmLaTqgmaGL7HJKBXyfwwCApQeqsQQyRZrMw9HwPUJdFHcji7zhUfQy",
  "key17": "YsaAu7my3kNLHWcgYR4djs2jDAzDPBtwgWPiF2JWL5Qv7L15tpV3w8YUrAbNfDVSNcUHdaatAKqwUUqqqD2ybp8",
  "key18": "BT7aqB3jnLaaSTrGrsbwSfW6ddQKgpVAgFwVmuniz9scfrDqyJkJFSFPjxT1RsXfKx4LcqmeFPYNxhpkgbKuPiN",
  "key19": "4DWZ8jZnwq8gzJt4NkgZHurB8Wd5J6Ths8wxw6JTpX7fg59XT8NKmwGFd86mJ1dDqZQ8SKowwipD5Rp2LHMe9dF4",
  "key20": "5BP3SG1bEP8t3HbZCPF53UTSY1a7CLsMvT7VHyrU5Ht9s9iqRZ86KFVwsjD2Mx5DHkjZAhLVF457UoGwhWr8UNhx",
  "key21": "5rV5jU4S3TmErNumFYwzj5z2CuzdKaWLvLvdb9XgdZ2wzWkyWC4VPRFoPWkRSMNYaD9y2aqc6uaQuUxGQryWgneK",
  "key22": "J2ouNTPyDr8PvY6gkA9qx8VMd3z2mWHUkE4haxDn9c8dZfwveYthLZ1aRRLpsfzb118uPuhaGBg31fTp5JCcyd8",
  "key23": "5rvJeke5VZCpEAvGDfytS52Unm5Bpa16on1KsmL1L12eM4Z5GX4LkWDqP33TE7X6TJPGAzzcjxsnRwGHgWcGUtix",
  "key24": "2S7JWfCd624zrQe4A9Wwt83TT5Jxjs7dzHJNyiydLZtxRi3F6w8FZt7eDRYrP9hKypEAkT3mJhsBpjLBPbgPf632",
  "key25": "5dJkp78xatZQaMVrH6FdG57tVeJXsHL4KMCnfAZKoqY9aAQUWxE9EVg8ofXShyP9Cs3cPCgmExnaJUAcX3nMd7DZ",
  "key26": "2GCXREKEVrgQAxwZksdyGACwsaJVTXkxfx7pTSJXkeN5dY7fkRxUws3MMoxf4opukQYsKGeD4C26rRxzSZtHYvnw",
  "key27": "J5oLt9WKHawJPLjES48dWBMgmGThcgtfSkPSL1Tw8nsyFPfN7JrXUNdxbzmzLmNiF65ssmqwuGmkQL5Wmf5Poy2",
  "key28": "oEbXg7dR6aiLGszQ427QShqNcEt8n4xGXGHosRzE5zrDzpyNQFF2pjSwtC15GDVHZHzBW9SGLaUuaA2CfdKkiVE",
  "key29": "5MUbZNguiss1zTDyNiKGtVjULywjbgNdB5HVfn6D91mduCz1ZaGifUpi8zHR1aahc9gWPxnQQXWVUdg1YwYK5kxa"
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
