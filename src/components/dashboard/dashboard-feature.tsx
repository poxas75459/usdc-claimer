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
    "2c2CcX3XUex6e23hyYW188ghNHDxc3uskxmMPLieS3ehqE3wubmSSqwjSFbUBDC1XcL7itf7ZAvJXy6N5yXiq6Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gEfaS2UgJZZVxP9dKi6iz4SBf5B3y6d2UHa4YkXxz4K2znEoyVMrqWj8uSxpGH89bqXNGfv2kdVn3J3cieWvng",
  "key1": "2tuiUPQqgmPaFiYJ2tSbbWhJ2YjHLf5UfN73JXVoeA6ueRoJCskhg3QDhhR7GGqfZTyGDVci3rwiAmVBVXTGddrg",
  "key2": "4DmwFG4huErL5G7nfMeTLU54cPLCmhKnh1yeSs35Wa2A9Gdx2cqL2mgNk4UD3JrLTHpx4wAYoNtbAov4e3zDhaMv",
  "key3": "3pgY76RLitEzGuKeoqLN6Av4pHrXEocFQAxS1XjvZKeRydrfmUTiXaqKRiy7rG2xp9jkNdXuHudT9is5TTtsqmaZ",
  "key4": "3pKdR4rdmdDny46YQ1YYSWyPgytM7GuP8m6NmWtJ4GDHiKehxkRWVHML2XrkjFgaS9wwqgsqLsYdxyhvZthhtDwo",
  "key5": "2dWWtKSMSKZbCPfhuoMvAdbTziDfbULZYLyVD9c4nvS9KxYiTSxUpfqr5WCNTbtxAtamBnWUuCzTVPpHpaPuMKNz",
  "key6": "LQUX2S7bz5RPXC5Jg9nYzNPgCBrPRdQbctaxMbr6bEPLc4vdsZZ6PhX7qZ5mt31vDb7hK93eHdmRDZELYjEHWxm",
  "key7": "23p3MBXqSfFLbhiEM6qw591qCfkcNbfpnWZMBNPWsjmb81bL1duL375aDtR1Hc8Hx3HzGVmfSDTCGtm7w59PRiV3",
  "key8": "svztLBs4gKzq2USvRoJUVWwNXpZ4DESP6Guw7HUxcHrukpyXC44Lh3sxdUJt9L6sYqcLehkB9TgicNfQ4FnsVwF",
  "key9": "5RUjFQ7XkTrEWG8a5cMYY1beo5fCTFJ4RBNrGQiaBuANE5EDpxpDur12xHZ4SCG9mBNhdCZQdL9Zr6QbJLxi1Bfg",
  "key10": "3E8kW7nV8xC8r4rJYHtrParZN549jwoALQqBiWszjpaQpGgwsXAS2oLHEofLkUgRv8Aer6ZyX1pswRDesDt6ht4o",
  "key11": "3B8FgZWuu4Yoau9NgEnVTsWGyrYAsKMp2YBcmZvPvR2jjsHxfUATHWPcFTeTXjmQchZ7svCGVms8sGAE3t2nYbdY",
  "key12": "BsDPg6xqLqQ2LpVHtZKpU5b64v7fdAcgwJc5ZENR8wY8fbwSyhKKNwk2yxH7YEvby8qoS74b6YcUp1zxzxmQhwC",
  "key13": "2rK4baaQYHvtYKbLCzr4SpKAaXjdouQYEQrTaK3LGyBdb6kez9Uvdvz9AuKyxSQ2ewnf9m1NxrzLagVD7mYAgoaC",
  "key14": "3pyciFRg1GyQvpCwD7dFsq6HaHVjYBsvTBnfLQrigDYiSt1dMmm1b7kkk4NNxofWFbGVE2TRhtSz9DaWBQkeQK5M",
  "key15": "3suBHnjviAfumb4AxqfzDY3mwoAu92oa7qiRu7U6kH6jqctQ9tkkFDKiuodBTW5fLWooUWbwmGwezBJ5z4W5yZQ2",
  "key16": "2EX4zfMD7tNSHXyHD87zqP3jMyrCbo6TDb7TJu41SWb9EcQdCiXHsKWLntvAUXnCQ7skirEJTWoLo7v4G2h3QfvK",
  "key17": "4Fo9PFNEAuzt6xmCyWGaxq8yJafQn6wv4hM4wNYnBgpQxhiwRDCuhfHLHGSdosY1cDUZwtA92u6H5xuQnRq6F3LL",
  "key18": "4MGoQhHVnwmqGbTyaJxNvZL1Regjtf2729Y3UDCRJcb5VehvpkVu1TxbpdLDipRwQd6tFvkjnZ84K1F5hVkE857m",
  "key19": "4zyTB4XBdZE9ibi4P4XrNGC64J4fnbG3iQE7wPMSJBZKaD9sx28Z6A6MEnsYjVCD6mZULoazbnUqn3kjb2Jo2cfK",
  "key20": "4UHdBqccTSHnSzG3jjC7W6mmHB4xMrU53jkWiqjHjtQqHp3NgLWbrVnZabwLLjpx3c5yDs2oMizQCLxUwURV946F",
  "key21": "4QLk167MGoGcdvR7ryhE8K6cAFrxo7M7xSAS2kVDFjGWYMAXfU8qKh3K1LCg44HNyDdjNdwNisxNznk2TwSCk5rz",
  "key22": "5vJNR3Xe5uVDckXGG17RkaaiUeogia3wAWhe3qQLh9qTAwvHdZHiQhab4kNfYHy4B1xJnki7PnrHqR4x4sDABXBr",
  "key23": "3Rc2ynSay1bUpnk2VV7WhpL49N99rHTsxeT2fubniNtivH6VKrV4QtidThaNM9GVh22TxKpPapteQyR8rWL7jAuC",
  "key24": "2wLFm38CgS4R3Ln4ZDFGfs96qkhsV4koSDgu57LEVs1HYUwzxRFKvvLQBGc8rHSGxrWBrBAbSeoB5mAsQaHjuDne",
  "key25": "615at5DaZHCViYWZfQ7obmTpAgQCyXnRQv3aao9Uj4pDAw6ngjz4ZEXamTCuayegQauNr21thLDgQxKh6Pz8cYha",
  "key26": "RxtxL1croyGsThXxYZ4T4LcEmv99G7cxfLp3fm13Z8y1EfHcDd71Kmds7UqTCDZLzVoYjVgnazf37MpDbPncm2a",
  "key27": "2xh8wtfkw7vibRSrY9hkFzbCfchWVDJfAanPRvszqJsbwNinHpbQUAYQXBFyBUx5AQsiVpLePVqRtWxmaZ9dQbZG",
  "key28": "2UPYjD4JdKznfZe3jHBdF6z29aD1TFpkP2uSXWb28iwb2xENnDeuD6X54CX6CoRZKjmskwvMtgijnZxNVXUnkPZZ",
  "key29": "2fUYPAY5R9uFuJipLk6Wdx3whPcHKJ6ExsrcTkQGanpx4Kpb8tzqhvHmgMKLheAnGMj5m37KsC4Fg3QhuguVZba2",
  "key30": "W8a4eZxLCdzyUkuhS1urek4WFqpNp11YuYVD8PKN9wZVRWsvqxuwNtHMGgKLBGX3ows4yosbMzH2LiNfLow16po",
  "key31": "5DCfnD7bzuma3bdoCRrYBQkY6pNNGUEUVUWit8WoQtrdn8D9mboARDSyc453jgrUfLG9ycyfVDorfsNafbjzfG1A",
  "key32": "5QZwncpKsWNjxsmEzkmZguqvWq6G8NHJjyb35mA3eCGMLinq1ohu22xaRSUYYy98ys6MAJo4pfWxgcGSjd7TwspM"
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
