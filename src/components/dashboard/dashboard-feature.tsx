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
    "3LzaZxZnaVzAExwE5DaWcsDTZBgimK7RfHW96oocCLyXAMp3dNvA2c8K9ghxdy1xyAWNNXMsQ1ZPVnDFqLrXB2Ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykpQA3G1xeUVxfgt1V9PMxZtth1X9CBW9XaqcLeoRH1XkkHZg6fNjvQWo6ridP7MPEaUCLLzEV6H1yxyVfNxwgK",
  "key1": "5Ax62GXYsWN7d6ppUF5kbxdckYw3r7z2CJ2HEfXUG8Vb5LnbVG6mZh3FTKJ6SUtXa4z2EbKK7tsFMCrzzXMcHbEv",
  "key2": "5KMqvbLJRhVE42ZVydqHwCSCinXqWixtHUt3oSZJeFSvscXf4JXMijGRdX8ix8AjRR34Svkf43FfDJNa8HQq3RHi",
  "key3": "vFnhkjdceJA2W18tkpYt7aWdxVM9Pt7kHLNPq35MhEPJitzVhQcqfwkVMocSNc4y9hPEAZm42wVz5PXL69J1wMQ",
  "key4": "59gp6pqJz4oBmbt3aSUVrPoHwUUW5dZ4DcXbJ55WfXxJyarr5wiCADL6HkzFLNFoH4C8fzv5SjU96Rz1GM5KG2jf",
  "key5": "5qNVpMo2DENZGMdR8taogRJer6P4yCcFKsEFDVzyk3PTGkVec1uLAgDZFQ9K5R7vfqXQKRCyKwRdXHBHyKzRjEyx",
  "key6": "EW773JjquPB46q2pLZM8bCFv6s4DAgL1xhAqqErNUphyR5DofpMqjCKbrgppNPTYDDPJWEvC2zMJV12A1ic28PR",
  "key7": "4mahJo3WpBVhF7jDCMw44TbyaZsrdGSe7w4DAeB2mxfuSAMZTpPWNY5rZeihPqy537Jpgr2eREbD8q1B39g9qgjo",
  "key8": "5NCnj7Y8CQYuSiv2Rgy5rHQeVQ7AJcaW3u2GrXLg1UyL1Pfp1ZPe2pM9eqdQ4vfzVYvRKLAQQ5XcDCcjSw4aG1pg",
  "key9": "45aCzu33PetnkvApjFXFC3ekQzJLbC2ZPmxYN5V7AixWhvNubdFUQ3dvvfxJ4JVzihVYU53EfdC94gTk6pRC8SaM",
  "key10": "4WGBjoy3j25a5wKJCdQdW9rSgebebAkxJ5X6RgJwyq4HibKzurKYstA5VvGZQBXqEMY7C6C2ZKH1a7ztmD8nQUw1",
  "key11": "5pJt9ZbBnx3Q9D8B7a5M5qBCgVdDWSC7V2TvhxFkB7KaGRijfNMpbm9VLJQ9T9uxiEiCYSddL1sb8xDyaTcXy1wx",
  "key12": "4z6LHx3VwZapmxfBFFtGEQ6YckkGtsoNDDMr5XZW2bQjyMv8utf5yQvBpGnt5Th7q1NxvNBvqkrPXkJ5XUMYdPq4",
  "key13": "WKDMin7JpWhbyBms7ywegRC1onYyuTSrQEciiDBeMWLFY635wiqpBKuXofeRonw4FN12U1QjS72znxeYCxPnFzu",
  "key14": "2uFgMBnbU86GpyKqWHGcYa8BqULhfsKjpDoLESZi5CsWoSTdbFcSAZLCUwVfx8xNkVYH8p2YuNqFpNUcRSZG1Mxt",
  "key15": "5oYUZpz6zzQYm65tHYZEr18TenBdGnzTXzNYtJckqeq48esuNfjR9KXyt3uZQoa91ggrXJuryp2ngiZo1Hptsbu",
  "key16": "3Wx2CVtJLTWm5waLB5dekMVGyYR4mSghkay2BBDRciJAyJDbhXMCbeaB9EsrMwvGm5xbMxKVr4Dj46zncNMmLDqY",
  "key17": "33HLhnqbaUFLz7smk2XbUuVTyrxkJCRVhFHRb12gdC8kuMiMoiwHjcU5WuPaLXkufrZiYVmdB1uGomXZbh2uT8tp",
  "key18": "45au1T1kMoimVuB2aZGhFuwu9FjpLhSTcCJQu7teogP1ocwaSVCvoEQortykamN1sCsh4UoapCDSfwa7Q5qdEMx8",
  "key19": "5cRnhpcgR3EucD8r99zbUcMneu38TzaknpMZMUnH38o3LPNASTsJnrPje7AijQw59nVVtYGKs3dSX66wVnp5X9s4",
  "key20": "5GFzUVTpf87Vg1syuaC5ibGJmqf7qQQ8zpKQpz4soWa3TZu77X93dn1PUVpPQHuQuAZtEw6WLzArbW2ZzhB7e196",
  "key21": "3w2wxgcPZWwsbWh7BQ6gdhjerTwhTBLAmhkjU4aae8zm5Cv4pu2BtohPEfPUvieeUrPEXj1af83j1dRqQJwwM5Ce",
  "key22": "4sDCXUHEttyFWkxahFUPhQGUpRkCcWTfkdi5WXJ3Bcq3newhER7G412WVVpkxcufiKvmVwTtuGyCdHgYYBrMmf3p",
  "key23": "2D72cTJLXDfjxNsLeMuU9C5Zv1Wmfkbn4H27mpHEMc1zfXiUiVmxTW6kuqjyePgmh2QUW7PYktmGARnjYcBucKPk",
  "key24": "5cZtvHwfBfZqcQ8FFQX7eNAexv9uUrGPzjCh4XKf8wF3N8wAT83oEm2XgSaYmKymNNPLu8e5YyauHAj6ZcXterGq",
  "key25": "4VFdgzsxNqxnxmM6cQ66EJHoTvYoWkpCnFYcXG7KD7x1ZewohdQeBLxqvRZkVpxkvyZW5H8w3DXs4HuyQontr9D9",
  "key26": "3i7bxCJgVQ9svhJn29NiGfkdK5p5umTreX3BPjvVv6evKP2n2EvsCuT3nBsy6Hin11UKgrT5S3AWwJK7Uaq3ABtC",
  "key27": "5nYavsf3hX2nBUDg2dH6tVahEvud7SpM8ubSnVFrJgK7yXz1evSGXQ7U5pEhoLJVxWhdgxqZLbJe1EdW5DnvAZFc",
  "key28": "4wrfsgdVd6KMGLeWdYJqZzw9m4bRY9BPfDwVQKq2JKK1ho1qe9q7yuyPzeqFoUTVpwQKNiSw2NzY8NXJtZWfKp5F",
  "key29": "Uczx77F67WAQd4ESq4upigQhezsQvpMgMpLCgKFWiE6LMoyAHF54aGpiY4W2gupnKevP8ntndQqo9vHL8uUSwxe",
  "key30": "a8XF64UWouZrEyKXKJKeZBTQKyrFjZnXzQtH4t48ZXs79ctHfsTgUJMY6WE6sbPFqYJP431xsfPbsrJosgMAGA6",
  "key31": "4CLu6AsGL5oN7n579Rmb3rpSM891baw1biViAFhkp1tLsFaeVPXAGMhvPapZ4ytguBygVRDZcZ1EpGTST7T8CpmJ",
  "key32": "34385smUNdWgXY2NUkPfyUEQXdpZALuaSUGBQ2a2q9n4mYNEM52QmrVXorB85kw6kwGi7jdjyWdSj5tjnZFXZLgt",
  "key33": "5gjrfvoDUkukPvbD2BWHXRMF7qCd4iMQducAdQ8NudkW1nLry8RXJy5XESHwiChwzLdre2m3qaGX2aQviCTmj1aK",
  "key34": "4TGKeT29PanqZYTFJTnAsDRz8kFUe22Kuoh5R8GuvvxsnmWgxATGi6zkDvJUWbVZBmScHjowG199UxvEd6DNSZkL",
  "key35": "5S1bNv77QgSZshxnEHmPJo66x6zQBmYy5YQvEbLFBJypivNytXS5JQYghxuydvUYhtoequaxZs2oDXwwm4Ta9voi",
  "key36": "3DSpZk9VCqm81M2T8FGAbf9BFsW2ugRDSBYJYx4Woqt4B7ALqwud2pU5kvWMJGF5a89wxAK9Kjw9veF8ZFbet1fx",
  "key37": "5aUa1KviVx1jHfcALtZj9M1FzWUSK5H851zRPEmQ5j7VWr8XmREGaeuCrdDCoJkGXNiJqnCSdMFXNgW8TCxjPMnL",
  "key38": "hB1YMV5p1nCkToxShJs2NrsvNMY5ayzjPqqgzhArFohMRUt2NvtL1gwSeQyuNNso3Lh9tnca4CRGAxcrKQgd2r4"
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
