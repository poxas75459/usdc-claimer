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
    "4hc1PXa1NRM7PsfTpogNums3PPU1cEGoEjzZpboLyJy6Qfc9dw7aaVKU9rkLgcxXdWd2czD2kTLN4S3oyzSeMWYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pw7ccTH7XHUudc7otBwqgCqbXSaJ9A4e4SiQRZjPcjLauif3vMxyrfGyA3uPkd3tNtVTAW7Y8NKsmxAhrTywhfc",
  "key1": "3a26ebYtxoMamnMB6FdpEHAxpDP3PrKWiWnxc8EQ6LyAHKvCD5MVyfAvpLpWK8Sup9tgBb17cJSUmQ6WDtsdjPnC",
  "key2": "4AmDeH6zaAYVWpN97og1DXaPmCxUAMBjKHZRxpiDbwixcDdBcSQQimRkGJHNEvpQpeeG9mEn6iJ2fDGkqY2XYbWo",
  "key3": "3rdMSRavTN18Kh1ph1Kz6vHmLxXdAZxGb7PkBzCMtDmmqnbrW6LnjgsXwDWNuawZdjVbFL42T3MYNBWuhQD8KnZ4",
  "key4": "3YwpxPmQWzP9UwuiTspmvZFmF4YGaCwCEmNwri4ABjMdr5MoG5NbNZQYiejrFCNvXH92Pty7z1sWjHZ9zCejFUNc",
  "key5": "5MZyckhcmdNujAQ8KF52hizDmygQKFE85Dn6sE1TR4MWHQ3pnJv6eppxSqCZK7CCGZsHSRjHy6uoDszMndbkN5Wx",
  "key6": "4mFmvwwcxPsMm5KVSFeUuJUVaXQmTfmHJuLz7bm1BXtLkQC9yybA6JCD9pQ4MS6Lkby2GtYjqk1jAyzHt25pchAx",
  "key7": "2ZttD6FxnzKqMxq6G7qMdoz3e4WKjuU9vJL5ATqW9CtooYgamTyVzKa5mMJoTsFo9KyLZgok11rs3xm93biQjduQ",
  "key8": "5DYTgWQ9dYCsAvYucvY7fcMnL66fuhqgBf7wTrPSWZ8CyAHMVNB6h6NHVHxbcGMvZ1HMXCSquXU6WqK4wkKBBraG",
  "key9": "62p16YXFdrbgVKjLVx1StWrJzU2psXXZ3d4dLUAawMAQwj1xVS7wY4JEiueXcNXApywXTC5PUQCfUVmG2PVuchem",
  "key10": "2Sg43HdpgYToAUh1Dw4zZyk4AD2RrKRe2hLVEnc46Ea9dz5Hd3spKfnaJbhMhDroHnP4neTArQEtxJChxKeHwoMr",
  "key11": "2HK4kjPhZxzi1DhSMyh5zoPDDiRAYhhGwsCpJk3Bzyn6LGyMh9m9ppqGTKdmXZTTSxBQ55WvArTBxT5STwtnBNTb",
  "key12": "4jZsgEPwnPXGLQt1hYTxCoDLoPLmyLLJ92UuEBySmzyXvJReEL18gA618t2zvNxynUT9dLRk7RtZfW4sqtuLQFHy",
  "key13": "4rLzYGYEyg2hVxLabzH5HiBNQRFQVCAqho7qJjKZrrmZJPhNsFNNEHCsg2NtqJrn5CsbMLmJBZxFWdBSBoDfJ37X",
  "key14": "4mwj6kP1moufvcMtVTnN4GNGDcDpWFuZvLTQfgEfpeWNdvZHMKsb1hi7QBkDehfLzZxB52SSboFB4S79QwjuJhAo",
  "key15": "67aM2Q5JKXcahYwmdaRrBTjHFWgQ2nAnLd9n462WJ5KyJgr6UuM4CqkRr45kbf9ZdXEbEkQ93viaJptp5Nw9mhXt",
  "key16": "3bWbyEPAhWBWNzDtD9EUUD8J4YbwE5E4bdPiQRydSVsFsYcqd5ycJY7zC2qUF5S5zoTvN4WYqSRb3T5j92HZ7gWV",
  "key17": "2YwJBZykUCb1xbqYr2vujmrwq7Wit55odD5TDSPFMogLcV6XgNH4uYdJqqcbAf6q4VPdYsD3yBuGyvcBN1qovp9Q",
  "key18": "2TD1iwyVRrF9tmHUjDuTmvqMyCKxYgisepCRzpF4n9mpVWyfY3LgfSK7Xo28FDYaoT4RhGMFQG8pCZgq4CuMXkkh",
  "key19": "4dMTrsYQhttEmASDAtN1js7k7Atjh8QHuMjXcDB3izHQKabz7YWKfbZ8pLfruJqgpXhH8PZCpQoy1SFZZVxRxt7o",
  "key20": "gvgCQEEyLPpNompJB4FSmLHWF5ck7eWtS7caRfL6WffZR5L2nBfHjzjKDDK7Kz4J4HK851tJFJGcf4oYpVi4Kai",
  "key21": "48VjQvsw7WD9vCpRXcrypx8PbEpnR4ujYe6WY4CAmJyDAEftZqSacG7ecuLLBwLUgtJFwiQZKStDxftw26rfkYaR",
  "key22": "oJzSGqgAX4hSKmJG2gJU34JvVv4gz4RncFYa9LatphAHmsjk43tg2qXs5G2yRZtkmPvVXVniMsHVrJmY6Kg6VTa",
  "key23": "5sZ5hxDB4PqQbCoCqdPNEnmssoNZaiFvAAMUhNFW982ixRb3aXofeB2jLJdyzyNkPCHiYRAaPZbHvUyzCUgDVuLN",
  "key24": "3Vxjf9VKHkAaa4DsjaRaDPLPRnvXCVFWZyB4BrhxyjebsBSgkj5AA5AfKTEJmQ63ZSgkjbJXE4Z4Ug4Vdmb5Sjc7",
  "key25": "2jmBuBc9K3GW4rc38Bc5vemq9cVCQPam2XefRFH5zDVigwQSgmeR5CB6SYAhTus1qT3v8QdfYzBp9iuLzcfu36Zo",
  "key26": "omsDmQYiXGtreMa9VfHWeQg1y51N5H7jSHXNbDCp2qqV6uTiQiHmiZe4DFnCSoyEkQh5WVSKpo6MPWwsyAb5i2T",
  "key27": "2bjLgTKnZUrAc2bEhfx1Y7Mh1y7dup9ywPArqFmU53nkATbuFnsXKeEm3mptFTAYsrYwPp4KZ49TB9niYQBdMvBh",
  "key28": "4uHJ4ewWmJ3ZsPUiZzM44XdCiKcVsRRwqFNPp9mruythz1TsYEXjWXDfUhCTAauLd3oVYMvjBaVSnme7nVmp72L2",
  "key29": "2mMj57T2CdcKmqQPsSVbFnKhkS4X5BnhqzKKMrMwWYYknLvHVoUPg9cGUCXDYksLP8MnuugY3pxvnksfHQ7dvyv9",
  "key30": "58rXNfHYwHYLuzQNqkHjF5CBDZ4qzWogVx4FCUEa7aPPV1dpVPs6WuFtcz7R47fqk37xc7Gn8WiQKdWfiFG49pQU",
  "key31": "3GR6NKed9G5AWKc7Fx15aAFhwWuVHW8WTu8eMu8GnSmHspGk8Pq1YaKhNkkAZ6RnUG3881bTtrRaiG74LrZWLytz",
  "key32": "5PnLUL1w4cuXgdpK2TviaC4tKLYGvQRGzzB8ohJS88sJ9bW6LUrgA8Y6YNq3H5n16ipUbmP6rj6jJPSKiKMi3YDc",
  "key33": "4XCRSRzykTd9cLxiqBhoWpBwsUCsXZMiSNde9q1Vnp7JYfRXeTLUZdrUeUE9mfkLsnB7nvDt3b4L4YLpF8XCtFkm",
  "key34": "2eq8xQJDwXKDN9EygJkjinje6uELpiPuSn9YDSM9YJoLJv5MbtK57Cd3mP2UdnZSfLuYiqT9ecaZLF6A2cJYvqbM",
  "key35": "5E7fjuMpMrZxhvX5RpBUKmqXrVm3Qy9bqKrsVY4pFFJwRETuqXD9b684NCgtbUbQnDTKz91kkWx9RMNpj5uDsSCk",
  "key36": "27cFYaoyDmXRupbq4F3Beg9zQVS4XtMMaT9URtukX4r1eHpK4hdSXYK3vpw5B5aLDxxCBbXJj2TJwuaUDgZxc2it",
  "key37": "4eW48vRT27YodxUHMQqF2m4AcnJsUYkMZqjZawh1c4udBQJCMKdiEiAZUeVNz8iArzAcWouV15ko6PYrANX5U7oN",
  "key38": "2HwtKwrmNAwtBK78jz2srYgkjxGdVK8RgHA51UFnTCyeqMosP6z82buLkC4WRcLjn4pWv3bZzNrF3DAJFoYZV3po",
  "key39": "4jr6GjvhmFWfyg5US7UJYQeT973XchxS74ydMz9VTeSGwwq6DmTerTSDnAjZX7UyPdiyJtTBYniBMcrGzYT73VT6",
  "key40": "2QVkh38QoUWsLExMNSwSeuyFZ2zDvAPm2sJZKw8WR14fr3HsoQ5pfLbMdee6Pgk4NWFhtokiryvk8fjs6eGszZA5",
  "key41": "41ETCLKaGFaZ3HAqmvNscW71Z7aTCZRd3B7HqjzoYNm4S3pkKYxCAwDdiSHCvGqG2ZcUafWo7qGZiBbwerWoAia8",
  "key42": "35pNr6V5rBZDdLmMih5tDdhhhKc4zZEaks1AyoRuYtNkfSXBJhizKQmT4iZKQBNHmAGtnSV824DBY29eSfLZ36tV"
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
