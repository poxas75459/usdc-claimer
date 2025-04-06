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
    "5hs3sdnu8cKxftwwQoKwyWEjggYD3XA73onV3HFTmNu24ZvLUPBGFTfu31qmkYMaKLXy9ztd6azbV22VWsKp5f7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfkVppS4VdgYv7oTixyMuD8zFzc5pqoN8W2eyBarsdZVWwauaSLsEtFmvpNSqMirfKW5dMRnEz8tmLfEzHSKWti",
  "key1": "2AfpAop4s8WV7Qqp2TQUQCMxxbYjJu6CSdnv1b8tGYEpmfHNitvXYUS9EquQVUnnL8MZ2mjXkZUFSX6YaweJXjbt",
  "key2": "yKLgQt36R4KvWxQnq2vz4rm4Rc9Y7bzGg53g3im8x1deNKzhtLwjBeGncQvekbMPzH51rbpHn5mBq8CjvxsSQks",
  "key3": "3iVNRsy2vHAikRMRKHRBosykmVsgwXahR1KCXiNCMNpwhmmA5LvSmckwLxcGkFeTLzwQUkVCkoAHtuUnEA6hByDa",
  "key4": "e6JPVXzsXpqheHfY1QCqjt8SRMUHeyjY4iSaxHXH9qEjdrZMkkp6RpdSsSwTU6WLuR9M6hP8nw82wt3VExeY2MJ",
  "key5": "qjRcbNsYfjQNy5PXyrQyrioR24cK3nYdZookyUAmAMZ3y2RAA2HFtZq4ojSvAtuUi84uzKdmsKqHVn7iEZ9Apd3",
  "key6": "2XyuxjEFCQ7CvcC15c7H7MMN6wDEH8oin9Y4UvJzFRoKPgVhDrEA19ki7sEYPHHHB2nfQVDagR39NRcTYGtcWfgK",
  "key7": "3iDyg1YvEj9Phi4LpjyFgnnqzR9tZi2wDQszYfgcz7fmvhmc2dcGwci2iEVbgSvFNdeJnzSwGsoDZSJfnia5jF9o",
  "key8": "P22SH8jdDjDk1WiXAraLprncP8ucvLV7ckDZkSf7dfYGzdpAA18GCdAaioAs4z3qcjVMRRQ1UEPJbiYkjAHk5y8",
  "key9": "5rBsdnPtmmMUjmzcgHrd8KT7WQHVJ5fp4DjWjweQXa92csVQKpcLe9QcJLseSKtT8TJoB7TfN8XHAxcGiEk3d3CK",
  "key10": "2yrT39aHshzWnevMU1bzEfhM9duwpiFLBzSeKH1FP8yAoJyouY72tFA5H5hAQa4mMz5vyLf3Tk1VoUv6RjKPmuDH",
  "key11": "4J4swiq1wpxRbUbeZrzrxCJGcAickgPca5QRxcWkqKJbQT2WRzGGoAw7o7SH7vrQsfMrE4ykNsXyKmTVYHQgdmAH",
  "key12": "3dF4qankhtbcZ6TzSU4FQFQYfoGPSw7A7YqBv4PwCzVoQgq17rFjCjt73tpov7sNSuo6ZnVUMi1PYpEHoDZo9b5L",
  "key13": "5Cqe9Vy13kBDCYhUCAFMX5yDA4zzi4TqUFPjVQTkaML4MzXHjzKj4oSwATju43UgiNsQxL5BiQufjv2wYhdMgGAt",
  "key14": "5fFin2cAj6ABxmrgHf4yDFXukUftDKfZPrM74HK6DaEZzHaDPc9gfkbswrJvdfCxNNTfY1aaT74TN8qxVsVAseBQ",
  "key15": "3ez5SxXk9CMH9S6Sa8Vw1ttSNyRzhaXhs44jMy9dSQhmXiREStKc22fcCGoa8ZniPS36dHqQZ4RGVTjJSd6FmvQe",
  "key16": "EMhpu5Qogcn768qiMZEFzwr5qFy4TPAZfg6Qs3kZMgo7sHM5NZQVjr6ZDnHrAQNXQVDDfZvV7eAbKNByoZFWa7p",
  "key17": "gQqfLmMqFcTsnq3cKe5vnxxtzf2GTJNznRtJLUBAuxxKiodQqgJDbh8BYVA2hSyqPQ3bWYhsY32tJaEktoiTjkj",
  "key18": "2R6v3X6Jbi2MhAX6q9fQTB1C4CxFLjpT9AeX7jYB8yCM6k6XfXnm5469hzyVb9x4HeSiig9LthSAZaMaMqbV7MTw",
  "key19": "65tP4CMupvrZccKTs9tTa1kCqAPZvxQ7rvXVog5zCqdAU9NnwNULggEKi1RLpM4ytKonjc43n1qEU2we4ndojLou",
  "key20": "wmxS1K5pLpyvdeHRW8X4mcLsjUCGaM4CDkRLAMzd2uAgsvRoKf6UgsRc25T5PyYoaF3iX1nhdd1iqxzc29A7E2u",
  "key21": "5pSKnvMcq7cz1zFHur7zJzGNQNYf6BnroSi8WtACx34kqfCyAGvX68QWGYBZqsrUaJc2kyrJZdvzKo5NRxZJf3MT",
  "key22": "2k4HbBeQ76ushjsxWQS6x3kfoMiMhXyH7NT6Bqkr3t29R3Cq4DPuiReGwhWNJmQnwGJDsNLeSisSqS63U1ZBX7nc",
  "key23": "3hWBodtDNBTGB91adeejv8R2jitMJuxTfx12AqzoMkPnBvUgSLuggBXe9TVwvrfxStMLYypFphQCNQzRK6FmQK7L",
  "key24": "3esqjVPSQ1q2F3qZAQjs9GWQ23m1YrJygmBiQzgE4gkuVYVpFYppAKw9wFgijKfjxAL4DHmSC7QqZgnrqVX65ouK",
  "key25": "9TkwBdUNWuqshSA3hndrwshzc4QvTEUQehgHyymLGfrDm6WM8K2hYNn1Rroxm7JrCew1DjNw9kEccruxS5t1qL2",
  "key26": "gYoNUWdeHijJVNp7NX8FmXddZxyeMtpMYvpDdcvoQUHVM9N95C8WWR1SQ4M4DLeQd7TkBCASyuGvcUKYiUNkjo1",
  "key27": "yaS7J7EyXxV7bRUYi4cbkbWhDTS8iSWbhASCMEuUMReaJEpbJL7yCan2xEnTb9SHBJ1put1DB8ghHrXwoX6qaA2",
  "key28": "2mT4wKPUbBHgDCvifxt1JQN4yCfL925W2YMxjeTNkLPanXRPq6otvpT6bFgSPKsnDxChDQF8iFnFF4XMr8Xmcn33",
  "key29": "4xp56DVGx5xhigbNMmW8Q7QBCnMgK1CXDWbybGetMWKhn5PeKq9DngBNCHax5F3EBNt5vHpbNNeUxSfjTbQrv9L6",
  "key30": "3K5BCsvYqbPxjhDrQxUHEC4ReLkGVFKkebXaRUQAHnYHWnZ76mRhRrSXgRW9xqAafWgcGBUJQi2CWao345FZXq88",
  "key31": "inQEsCBQAzGTBzjDNFwhkKeeJapVsTbHRZq5uvMoHr9EYJWQYWHAWHr1KK26nMAaGUQQ5QKewc2HUheG7cJMb9f",
  "key32": "VVnPufMaYE61XJeUeDH5yvWfNhTnJdU7J3YKmm1JVY7VUUaCTW1FqH1yvkaAHkFfDqHJSQWR82zA1NHbSegRLzE",
  "key33": "3wFFEs5rKah3dtPWyeLDKj44kZrvUzakxyeNFoSeeUnaaHY16hg8nJNgdVrhz42gzUSJUPjTaUYqcWg3iq5izRVw",
  "key34": "2Wy87vQboq9dtY3QtaQ9buWWLpQtwzdZuXvH1yfvwJvuw65jZno45v7m4tj6kag8ufU27MfRYhL6x26NzcYA5ySC"
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
