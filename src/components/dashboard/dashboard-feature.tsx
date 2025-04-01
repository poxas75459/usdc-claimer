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
    "56xjyQFDeAthYq7xu4sfzeqwQ2vpLdCDnRkYwBDB2AZvuPCPygaSyyALkcNfrS1C2pP9Yobgym83xzFiqa2ntzDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLyL3ac9upqUwmDUCWAKBCSsZRaEzv5SW4fC5BXbmkPtNEwmCBTJBm7kB1Tkq9rjXMU92PQYZhYptTdLiUjAkcH",
  "key1": "562RooVaZ7CPW9LcN4UmPeP71dL5tHPFbztvrHYsEtWZeiUvb96DvvMbdzFtRgVJ84pWmmkXfPdTdfpNq1Pqy1rB",
  "key2": "5EEGeXCLSx9KmxHy8Z9rXQA7RqLtghVYywrq3WnbSrJ1EryaZPcwrTp6JUs5PSzaPYK1Vm2nRNH1eFvRxLndKC1G",
  "key3": "Fs2NaQrkRsTeBq6AdjKo8mzqUAAhQvBpHEgvFF5gStjcLc4TtawKS2PxrKZ954FTt4j6JaAhtN7zAo8GUy1drq9",
  "key4": "6Kucy8gmdanhM6SbXw7JeTff1Q7xuFxcxLbCBePUAiydb8eKhN8Ah6HbA6hwkobtTt1EP7Uf2fseRYc9b9dFnFW",
  "key5": "4U1t3h5mN7KvQ3czPwi8XNPj6ECQgePzwcvXktzhjtiSdd8MhwGrkr9VjbSBub9m8ksUjQoVJVZibx44tTN2hwNw",
  "key6": "3RtuJVapU2Kh2LqroBypxfVLSH5YKEBgVEeRMidCDhT7RvuFpsRXz2erecgf8fFQFWcr4jJ9jf2yuQaJajSzNnsj",
  "key7": "5HDWYiirCE1QyfY5EmuxnbwKvcCT416gdffZLS477HvV7FzHX3upZvQynhoNjrqroVGPY8b5EYM3JWA5WJ2hPjGf",
  "key8": "hpiS8dyRS7W4hZtE4GxqvXv1fAACBYqiuVW8iWwFLAXaCKD8e5jHxmC59cNeF5dbh7imUpZYBfz1n4g5BZv6ak9",
  "key9": "4CBwZyLs767HeoMJmXFttoywAMyqLrXDciDyDuPhvveAqy5WCtfUdspbQjajdShpzfSKhYv4ugaumQknbD21Zpxy",
  "key10": "ZdsJG4V4jeZAabzxK5xK4g3TJNLpuhdsfjetSBq7DjVsmadqDyecJLrxgBudZckfyVQEzgx1Cq5gL5RjpuDSiGJ",
  "key11": "voGTeCxVrmUD5iQn2Ha5fZcFE4XL5S5JYDRM6vZNxdNmCcnd7vUEo2Lq6zcL6aeYPVSsASrPXjVyFsoVp2BirEm",
  "key12": "5siNPKpwJJ5n9boMrXUjAziRb2qs5RK13qyEN4rJeYXtGYfFNQ4oSUyk8SMZmTUP9YDvvSfYpHAGWWqYYo5CGQwZ",
  "key13": "u6HNQZZkj2wXQ1oTHYniAsUroMd9x4vV7sxSbv25d6GCZs8Nezh14XUfk8mUMBnUTbntQu4EXQfNoBZmoET2yQX",
  "key14": "54aoLLBZj9x6Ep4TSG86fFNNecjEryq7wh2xPp61LAZkC295aiG4YSTUvzrbocPNAmUaXvEA3YH4mAzPWgTFUnWu",
  "key15": "5JGiSaBtN3cUwABwyGXpp1JmLuMgrAb3zNax8cRE5dLpeKXVDRefAm4xpKhQCNrmctGvD8a2dXWR9BBX637jhKqj",
  "key16": "3XVcvjPpLK2idmdQsJozNx5qdM4raiE8SVFH5QAVVJCKD6ca6pRWG5zyPmFTHxviPC6BfXjx1yNukGqTBj95H4DG",
  "key17": "3LagyJZsf7pKsSZqkuZpm2a8Hps5RkWZ7asLg3L57hHzCNmPbNeUPWU7bryC9xuUw5yEW1Ed53XSFB2mNCAsq3yq",
  "key18": "2bxTf95oU3fbtnH6v5tKaNSMWeWP4yCxuexC58TbN3cWp9LF4ePgvYj9Jx1zVgg1nzZKB96BRTLgae4mFsNLNk9H",
  "key19": "1273vfnQmugXJq3RkZCctGyh4HhVnk623JK7jRp7HcLEYg99UWzxv1Liob9SWNqzeuJbTVQ4d1XCfbyGxL1tLPnY",
  "key20": "5QFwH9FwZFCDc843SiEm2gp8M2r7AEm1sRA91FenpRb7ba9pG7aoh7FstDyVATcy4HcHATqthMuEvq9xF4zwJLiR",
  "key21": "3GywgagLarYPSZeAHeZVCC8hGAZXKL9gKxEAn9tJ8u5Sw9556vyjhtwcTS9sy8ctoFrWh1dC4wzS6Y1o3b7n24Vj",
  "key22": "2gvZCAt9CkttkuwGxbSY5kBhx91nJLNGUqtyr5pxN4xJadEfgwcpRyjd2Mwup5gRcdsEGyFgaPsi2G7qRGzksfT4",
  "key23": "2GLTGtVzysGJtg1GnJAZi7SXrqvkDAv9bqPk9mLKF6PRTH4RVEDaeyxVp2Hn1NF4J4u4L6Urv9ugkeytFhKoF7wS",
  "key24": "37J5uw395bakgA3jSGbUFWYQjUPVfHKv4uECpfyVxcLeo1tiNDjgBSK8BxiTdwFF7c5u95P1BPGoE2e2ZUYGiLPr",
  "key25": "S1nY2SxRvsJkxDpQTbYGGNXBBrg6D76mtXZ9BMUPSU5EY3doXZDVEQkCGU3kZfn3vhNsrnkVSjUqSAETQrRnkQA",
  "key26": "2LH67PEPd2MVNS6QPneUKe3uc6wVTArcdpS2PpBYpY9suc9JfMoSXGtJowx4qyxcLKrS7hHcYkU9ZxkLYRVue7n4",
  "key27": "2UR4y8p2HhFn8T38cHiNKoDDBFwQkWk5Vzk5UwBrDB2BE8toHcVy8dgquU9gh8HaxJq6gumT7xn69SxqwYbSnG98",
  "key28": "9N6vKL3xw5JMowQye5hfyj1oWn6r57pfVmVhoyqnttc7mKhKxwS5zxEQFYzV49eFXBWKHgh8AZD8kfjpTU1q5A4",
  "key29": "5RmpgDLFd4by9v3EBDL1BJMxoLYB5AT45Xhxshrct8Gbc2YaovXHu1kt68c3M2GuhhVzKLmBpXx2nA6YW4vkV9Va",
  "key30": "3tLTT7LYhrrxd7jvULC9sr3fTquWqme2b4vNcEchwjHDGyZyVDthpEMyUdzdaPPo8tk53fcmbSh1KR3x7bMhLDzN",
  "key31": "3gGiKc9SwxzYzdFJqgmS1MqFdiRoQ1T7SGAoKzak5n3ZbzRRQPvhVjxNmZcxRTQ9mP4YRgxyECSKJEhMjakRtCx7",
  "key32": "5QCMfrBFPGbNpgvC7DKmqepgU4MpVUbeWcsJY1xveoSgjSENpGeSQpH1CB1Jqa9x6M9CgRMXcTh7wAW3xmWRkcqY"
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
