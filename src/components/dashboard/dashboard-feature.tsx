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
    "5gdyGyCqR6PDRxN9ssuYuyFNTxFqyEwSXcwqfv5s72tg17oL2CZ7dsnpnQDBYCuVz6MVqXgFi6ZwSDonuBaQVNYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbrqkNsrz7zCxZrtBSgchsgtN2EuovPHgp2CKN8ivxfpf2BcydmJadLuPK7pEgmqiXomJbaLTYPxsKJEBYsAAQU",
  "key1": "3pPWP6VsB43LJJb927a5yJ8zZxY8J1N6tUXtrtBjRiLdinTAzYA3EEbLgjYFBu8b6vJLB15FrB12H9mA9Bv5Uznv",
  "key2": "2wwJ9RYp7QBQgAZdvMsDA4D1zdeSHQo3MJmtL3Yp9xC8ymLxbrrwf1E43mZwxvC2JxXxuSpq7reDCZfUt4LW8LmL",
  "key3": "4hbzZVQBJVbjaCWJ4mx1qkXb8Y2FLf4KMLQzd55CjmTizaAcmsMSduehTXSsTDoSKpFsrtj5Pv5nDmiiAWb7u4VQ",
  "key4": "2N2mbUb2su6XaawRGAFsJpdV1fcukP7nXAY6jhVStLqssNZCUrPpLQpVPNAfGMH8kSbFoB4DzgFt6PjP3Kxxp8wv",
  "key5": "46yjz9HFACWQiNB3QrGHJHu9JpauQdoRQ3QfcQ7WDo4FKJBxQW93aHuzi3b14Q96PCZ3cA3hmf3Qf1S68VtGHmcu",
  "key6": "2tMTP9AnJ34qvH7Y6avJQbFt9Equxt5kAQTkpFJ7LuuPPASPCuHPwEnjvyHjrV8iz7zte5DUfHQYrL5WSFhV7gHn",
  "key7": "34yDAuuJZLbpZQGU76qcPv5rxsEngg3dP4wbYormZ81VjpQhxAVrJsgvByDzwvVTFF9T2BuuQ6dvJbbt7S8Ui49v",
  "key8": "meYz1wkXdDX31ov4xRm6fyABqWHfnFj71ur2HCV59CB6BRaSnr6i9TGDVXyRvUTaPzarzfWbLaTN9JPXn3hCnvm",
  "key9": "2jyEWoQMzXQHCYi1BSzwrs4Qb4TAAVaSJvFx1237XEkU2JcBHxfVwRoKiq7JuGfdGPkUAQUXAsKPgLQ2cdzAywot",
  "key10": "KVge7HQ7Wqhghft6ZqjGyhHiYvhfTgsUX3QeDfLyXPvLq1VPMSiBH5YmMnfhVjXgzGak4bDUGDnqEb3QgxpmrXw",
  "key11": "282yRUzfwjfYtf3zEjzrdcWg3kNAHUQbMPUSM31qQ5JrVuQAWnLLRDWw6WN3m1vW3wAYN8kk9qys6XQZB78wvN9A",
  "key12": "38Fg5KSTko8JrZ9BfFTF6LpxhKZzKiFw5Qd4uw3AYbBrVngX4kqPs8gJbvPYbh2mQ3Yekc84mCUJDPBoAC6qGoC5",
  "key13": "4sUfPef22kVHpyCk4M8yBAbapKo4Wd4hJ9nZPuuDo8BMpihfdHxJPazQjr59UFnZB8HvbzHUv4witTPNcE7dRhmx",
  "key14": "3nzPEEfL962tNJ43L8Ey5EA8YdqEC9Mg9iy1Avp5kQaZ2tzWaMQDXuYyvRcHmvHQRpPtHdnUGfQYQk911QkwvVKP",
  "key15": "atqUsjG7GDaumBLcdR9suwkaQ6AADRRR3rnFCGyc4cBZt2JVHBNxbSP6Jb358shgHZhLHvGu8dL3sJHGozAu9nh",
  "key16": "3WxC6iuuJ2N2RdqJQsZLQs17LZ9Wxt9bvK5YbMPwGuCwWMJ4SBg1UyPnkkLWw1GLifebsHxh6JuB8L5sZBsrCFw6",
  "key17": "4uPWh8pA1J4pJzgRCZjBiXWpB5zEc1bMqkVkYN8d4Z1h7sBVe6ZfQTKxKCmJppk8uWyehaKRhxkdpiYi2QYCyGVa",
  "key18": "5chSq7i8d9Y2LwuZdorDD2eMvAEcbeUYaaa8SMEkjBMhzqN7sZn22B49JcVHxHZBuFWh8htmAD6eX8NPAk81wc8v",
  "key19": "9DQHsoLaZSK3tfoHnqngjeUayiq6V6bQcVdMAYo7Rgxosh9YMfnYdt5p892X1Py2iyfkFQNduivom6yrhzKgHqz",
  "key20": "5s41udgzncECohUX4faoEsDhy5f7vinHyLYwT5CjytGAJ74vENVRpMpNT643DLvCE4oN2EcQ3NQ7FEQgT4tX33DW",
  "key21": "3YCdTPHp25gNHABtAYA3yzw5AKrDiYTSHXgzsR3CqUwf2539JEwVoTxbpjNQCqEpXDZjFS4yKExTom6Tt9x79fFH",
  "key22": "4rTYLdDmr3RDs2WXDgrUFDmFE8ppnQDeZ188sy25yG4PQFf8QBi7RF5Zn2aTiaqmE8RFAivsyS3KgBiUzE6bFjzh",
  "key23": "5fNdofVCBQiE84AMNQKtRb1dejt1cqH1PkM32o6FypehuCYm94d22RvQ7UPL9VCw3Rg6rjbpXw3QPb5LNAgueG6G",
  "key24": "4nfSvDazMsSnRMmUky9fE7cnvCAGq5wbkariaxmo5Fb3B5LDCRMEV7hjioJp3Amz41F91A8JZscqFoHJ1UgMBQ3A",
  "key25": "5V3HLGLjWcjjqLF9fJ4VnuRfeULyhSjc3hmdFejYGSWSwsXfZwDc5eoLNBxuxmM1tGMYFmz2GnUybaXDRtKNwRTg",
  "key26": "5pZwgdCeW1CVmNCmx9TedtHFsJFAv3CwnRhAzE5uacLNeyb7NowiF7JYYDKrEL5PNVKj7W4vK8emHnHHJM1ppRTi",
  "key27": "5ky2MfjA1atEgdJ8oehgod2mvPku8BbqwGmL8hcdGfDCURkaeczBCYkErvte9MiRn35R3447PLmj1JcikBnBrQC",
  "key28": "5azMCHV4pnH6PcUcPV3ZpgC3Zk6GKWhNSRjfDFQSJ18PEAUvLbUfm6e749ibSG59neqVxxwEYueX9VYoQ9MFsTVx",
  "key29": "3Emq3G25QC9ri537XKXGomgMVCr8yChGzFe7KLgAi6PMVHC6sXrtT5xq6UJVwXPuwVJJERtb9KiCZ9zdUQmWejdB",
  "key30": "24MvuePGYekhxSg7LiXVXifF3Qq7UFXtgiNcdUoEjaBLDHMF18WpVpcFgSpQ46UjYCRh5zYxj7BW2Uztc5Zx2nrP",
  "key31": "5WqPMwr9D9GDgVCC9vVQkgyFDrRTyu9zRnzxvqTAkHGxszzrcNS3jK7TUj4zDbeiHq5qRDz323PGGTCSLxvZAbCx"
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
