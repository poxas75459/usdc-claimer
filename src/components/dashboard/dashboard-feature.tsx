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
    "2dnpmEHBZ142UCvBnB2az58b9uyRBQ7j5azJ4P2naLcsj87wuw11khNLHKqikLvc9z4VdEhuPCEyraavdush4Ngs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffNGVLhokkvgqppzQ75gNjqKwpfpSsW2JVVCZwqDdzQVRqvVej9ixkEqKSo76Ch2NSMDGghJVt7vcxh6LFHwVgA",
  "key1": "39UvvcMsYRfRExh3Gk3zfuSaijHpwLcbQZikNPeDbn353qEgpJqB8tryt72XhpfwnrPQinnk1QohPkV7fh54QZGQ",
  "key2": "5Bw8AxJA5JAa2mMPsHdKpYzQUzwGFUm68BiorPDTC4Q9ePjhabsMqLtZVQDtm8KS7JdLQVvHWBXdFx95qhzqMZ99",
  "key3": "2mdBPn2sVmi5ujm86etgVBavSwbi9Lvy9ZkLunXkCtBYcQ4DSFt5YUeuuEAmsucBjQpQdLSjo6TNyaLabZw2TF49",
  "key4": "2p4MMNcbuB91ZUYVVC7m6dkWQWSP3LAzA1f15vz97U9X33rBy7LEfZPM6Pzqq2y58uYF9TgCq9Le7JXbAmTce6Vs",
  "key5": "5C6w66h755hLbQLGZQqrZEeDXxG9grnjGijZFb27tAxnKAHSFjni4Lb81DJMRsQC2e1mMBo9ycKXcsa49CgTcB8b",
  "key6": "61fLMoqQaMQcSrHvXJNboAW4VigNdXh7ofomUDhUKxQAFmUstQWbPhuHwKjKYM5xvC8f1Y1TusJ2shiJxYjvUFXJ",
  "key7": "41Cgx7pmiRfHDHRVCxiYcVFqYoypmJuwGMjQt2Yx1SKYxHiHsohaKwBEEkS5CcQ9y9jMdimpw57uxN66au26iWeu",
  "key8": "5pUASh7Fr87QP7MzWorciBddHbQM1NZ1T33khAkTr7RaUiyrcG1CJn3DFaQ4NC2x4NPwfvTov1eCKZUTee4pvxis",
  "key9": "46yaWhR8L1aebAUim2f4WS5sxx9map37ddb8CFp7a1LRwnWefAD57Eea7eoekRjDWznZqAB893bYcH4fpkjysfYu",
  "key10": "4RwdGBpnkWTK5HqfiGAhBGGCzSLxe9eughEnNzwCBmhohx1k4NLTzDyZafaqpeJbPF1HY997zbCNGAkG8kvGhpMX",
  "key11": "25xJn7sSUsipHmyFeNDkQjC5EEqkPuHYAQDDGTgdvCm7T7xZLQzeVV46niYhgeGPxKLutE2ihkyxh7Ma9PEMRBYS",
  "key12": "3xtPMvjMffCrkCn8tb6JttCSJPbwnRPF1vjFudF2Tme8UrNvfE2GyhzjKLgBeZpyJW5hHM8uyS1PNquyqc2eFPnK",
  "key13": "kUAitpAgUQaCRJzvYcgHx9YTBGqN8vGq1VGe69vr9vdKnRexfdXma5zRcXdamxiUgd9Drwgy2j5fjSw4t55mtHs",
  "key14": "3BagN4SxZdTmTZtNPDKTnRv4o8R2qU6rZKuJ24DznS7xxNCHAV7XjADqvrKxrXhpPaMaDdHSQj81MMDXSQfSxZXk",
  "key15": "2DKLNkvVF6HGZvJFskpFky6gWUhAXFuDFqXeaJQZgUUhBePqX2Dmg2wcgkqFRhy5uTSrHxsKGmJZQ9eJcUeZvpMg",
  "key16": "3TPReUceTiPVZnT7cMHe4z5Hw84yjFnND5xS3Wv3f9RxtRp5TheiFZ5WkdJ2kc9rhchzVn4LfiBmcUgUE2mEGjfh",
  "key17": "497FDtxqbxixaNt3Yu7y8rT6AprmjUsvqjicg7p8xua8dYsgCf36XAsTadLLtC89SiLYMisq39kU7UN5DxQvQgso",
  "key18": "5t7ZJCovbVd5NnEAZaYYbXkBWhqYgaWQAj1wanJtRyv4Yw6Zw4gGGRJr9ZKyUvexsrcaVrXyriSnZCNQVb9inLa3",
  "key19": "2CLsTXvYje5QoLTCFAUgNow7duYZex2oTQQdTZkyjhFqHFqQoG5EnJPW68gRLeATAP6sbHufDCmyATbDP7EnejmC",
  "key20": "4gWPZEYm6bepHek68zAerensv1wUep9kD68E4HdfA4fCLV3TCWhSt4E4ZmR7G6cZDSzH2V5bXv5gincf7En8CuY8",
  "key21": "5uYbKtFdP3ju2WRWRe6Nke1xakr31N8vibXFR8gBfQEsHJfz5mv6q4gSgHTJR7Esz6QZssUUsQdCQ5vUcMvFEjbx",
  "key22": "5iZfWQKcKY3B7uuqaACZvEWg2yU5poVooKxLwLdvEkxoWFRTMU5L2595b2cM9y1Gg8YNufknSf6giJ7X8qZ3hYQQ",
  "key23": "2HZ7wYwY3h1R8QgpdZxYJa4gYvdEK6BtJzTnPw6ru3y4a9VXj75mvAymqNG69dHJP95Z75fDnMzeabpN3nBieRqu",
  "key24": "2UKjDEsVNgQdkUwFSfahp1RMw18YuAE1FNBEnn7bDDtbsFm5doXVFBEvGMjwZBZekYRwkqEeELq1WE2tZr8yKMDW",
  "key25": "2aZNifcazeURyA7f7FqnCZgemYJ8gN7guDUsKNf4dyMpDFt4Ns2EAgaDnFM2j7J6TgKHu8nG2MAoUNEtYrzb9DoY",
  "key26": "5jvQ64E7GYJDiusT6syEPNpvPfne9Ng7MSjcsQqJ3MokSZ7qqy6xGqkUuVndorx9EQVTupdCABmsrM9EnpJfUd3u",
  "key27": "5yWMnCG9E8C73QzvH2yMKep6iBPgJm93Jnf72xXj8N8Pj4E5gckNWzEoPvGL78SNkWCdZWDhGYVabqCYXqjLAjm2",
  "key28": "55d7GSXsGatPVU9sFopYU2X4kq8nSfCRQTSPDMRRfzGSBhXBrZQe29F3vrZEorpskYrwgBbkBa5T1dfkgjPmxbEZ",
  "key29": "4RS6yjBetaYRphSWr6hgu7BR6mC99PdHDTUtDi39c1NfdjTCZ15GUMsxTEnGdYicigaMRtmmsgXHCXmDAz3WF1Ub",
  "key30": "2LVqVPakGLa6rKufVD9ckWWASrK4qhDS9N2wSTBeZ2xCK5Z5HbfVeCzmxZxCuwcLdoxdynmjQvG6bje5yDmpAy2i",
  "key31": "5ZYXTWwy7yTufwan4LuqkowTMS8dxYBfvQbuMR76bmhGCnXuscRKD3bzAfW4YWSn3wG28VEQgW8eHjzQ44ySDLqf",
  "key32": "4sTihdm3Pb3nVTH2zVbifntBpB5L21c9M7G5Tk5mecGogHAkUeNyzTgZNJEyvUGGRooCe4wPw4DB9c3xJjdjx6f5",
  "key33": "2rFh37eAwfkjur7yWH9VsDK7Xixyv1zqRbYTGFYLrcfj8EvgDz6mTLR5st6Meen7MBK1SPb532PXLCRvBo7rTdA1",
  "key34": "35cbdssxkJE5EU3iDPpUzNAwvCbaeAen22iAkaZkuH452g7j67D61HmnqdmEjkYCJ7tJspHjvuNqWV7591rD66GJ",
  "key35": "4yRPcULwFaSmR7EAhRLysuQj7PMTvmFRAjEF8yUonAaD8i7QhwduKjAkeiKPvFpotaLtYuadkKnRRfe9Xrn5YkCD",
  "key36": "38hCEAKpSZJm83rRDMR4Hp2L9MXUaq33HbASXcBQdb61hFkWH6NgRe5V953tUhHJwfEkX4AJ1YFkDery9YTba8bs",
  "key37": "214Z7mqfVBegRZuFxK4cNddBtm8wDPkcm3X5Kd1pX5dZzxHBwwKswPg8XVGWbVStGmGjH4eGvkFu3he6NdsGdSHa"
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
