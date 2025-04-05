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
    "2SfxEYzqXd5jVxWw3TMYRqVoxQsrBscgyxCR4wXmm1YtFiV1A95uTm4Xc7XhbWsagCoYNdyAoCj9oYz4NK5ACjh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41hj1AQi5JAysUWgEDRcyU9uvps5zveb5HgzaQzYz14aqur9hZ6cRicNT5sSGMuxmZZxWVBEYZURMKrnfMcNCcad",
  "key1": "39gU46ykDhBiGqDr7Cip85zkvo8C2AYQ7LJAn9oEtDmkm9HVPFrrKsbDXR6wSiECRRiCA7a6oDrYbypK67FqSoLc",
  "key2": "5CSdaL4WNWwtmptDtFCj3hwVQ4vXa26vXREEVJsGeHx9jSasdn3CbaF4sW8fA9Fq4aTtTZsjmLSs6WyaKosp7JmT",
  "key3": "5Sqw4NZDobZbyp2wbXcxfKEdsoax5aw8PM4jeh1f989rmhpbUMge6R4nCEeBQdZXhfieLT2uumXthSwCJjkYTzGk",
  "key4": "3J51V5xVGjfGM2oUDQSXpCXHJAfrVabciNQ65jXiVeYxpbYyzyrXTSDTB1AtthfnTVMT9uTnNF3xofyo3tRnx52b",
  "key5": "4bqH5pJCw8VdqfmaaR8e7DnQoJA7WetdBt5AbyLzMAFSSiM7W3YCq6wDqT3KdkLgPwYY7eQXv3Qww1QMEJYzMZgU",
  "key6": "5gbLY8vRdTU54XYHdra365VWw2mbJL7Xey9E2Hxm6AY9jMGgSnB5h2Dn2Ny6cUZwEHbacBdsFx5WnV6Pjib83jkH",
  "key7": "4wfxhocGc36kkze5HtP6u16TzoENiV6XBeAzDLDNxMRbshWJe52JCCJSTmRwsZgYkUkiiKKgqX8bBZN7JGLbTCCa",
  "key8": "5mvVvt2MbehcCGxZbFVqmGYnvqKcGp4SnZ3AfCaakh82QFazuoafBxryNsJCK7azE4xYEcBAiRTcXmDRZdmvxc8g",
  "key9": "2Yrz89n7VmQJWpGd1czgnxVRFcq9NBnHHVbM8TEwe6bdkok3EHEa2LpTyxnbMCbDUdp5i3Lf8GWMDuVLbd6reCUz",
  "key10": "5HNSDaRM2nRLowKcmSHo1YQzcYGAXyVHgczwHgMXi5xT7eNmpfm1EkAjxoxiELoTfpMfH6VxbGyg7mD59VDLcdrr",
  "key11": "3Rz21rB46GS38GJNVQNu5ftGxQk7tuQfjfnQS2uVdkB1yM5EDvwnRTUC4cUVqXxNfFzq4VzQNpWGRkSf5oJ3VVYd",
  "key12": "3GSNB2bXrFkn2UzjkstzcNkjqh9W6fjFMJ9KsS4UPpQn9voH6XnsGPEJJSaEFmh52y4XMR4o9Jgxo6jNnw6fbqKD",
  "key13": "4GFVXKsBspEiuoSjTeidVhZk1695ZgoX6yF15Tt3VKAageqCDFze4EVhc2far67T7QbGb5pBqf1yNKweyse8Jamg",
  "key14": "3VwW8jew4fw7LPAaD92u7mfK3d11PJZsh3D5Z55ogam8E4H6GQC3AMYSq7Y6qPcWDuzwyE4ndKav2A7Aig7BQ9KU",
  "key15": "DmQuYNgtAeEeGVVjL6xwJ6dJkNyFiDtsU5SvMtmXe9CcXf8ppRv8VmKoKGCW88M3zb1FGDc1sY29qzLRqdr4d3t",
  "key16": "2jdcggeffSHmM9TTx3np8YgbVuxNP6ADrghfRjYqTKBcTvrfGkajLvs9SPcewqMtc4T1dek9zvuu8VSkUgAnLiwX",
  "key17": "23JR7oFjayRvRkEjzX1pDhuPGRFPtho3J1bkufKEkxT5MnAhe8KvqS737YnScdjLE5Y2LPDmbTSFeB8u1p2vxCue",
  "key18": "4HDoAJB9D5wAjAEVbSqg74qBFx175DwcouDDAMb55U7d9ELnep45tK1FKGKeCoY5nQwXAx1SgSQtbc7LenNfNjiS",
  "key19": "44RYsGRJeguMj6NWNtwqa7TGJh9F7USB2EX7A1kG5nxjkEdJmUsrXbCVLHo62iyHpqYt1VV15pkDdKnsYZ6x18h5",
  "key20": "2rfN2uy4kvtpVFhZ3pkDEPg28pHM3gXJ3ZSxJ5JkUqhVxC7QD21qXpQ77swMTgAucFiHdjhb3wgELCDcfq7L1o1c",
  "key21": "2vr1ka8dagCDoAASwWfLGdEhZrcBQzgqkWC1FqtBtGyMoyhD7oDJmakLAe4GP4NCupRV6PgSJKNV9d4Rf6ivhD1A",
  "key22": "2uKpPNpGYvxBtzSxrLJVSv9rbVaqwBCoCsMHkDb4HCjefvoypJ3jy6yrXXEdyTsCMJMLJzoH2HErKMzxErP49Usm",
  "key23": "5WR2a6Td13Qkaw5B4H4JS3h1BHPhAHiXuhMLHutpDNYkBX73jFGAmGjFAJgjkyazrg5vs6BZYyzZrsoCySKcDu7z",
  "key24": "3z5SqEuyXCzjMhjrZBQ3Nv2fBBkban7Ky77e2VnNdKRpBbSgnugbMYyszgzdpvoPX1sBkfpFdKNsb1LHEzGA1aM4",
  "key25": "2ztQBxMLZqHyMorC5fzr3R3bMz9Dg5Ljr9bb6Lqa3dCeDtVfBeWbYRJdJKUPywHXvR6cB95576R2SDwxsEXCeuLj",
  "key26": "2nuCzvG5dS25xNneuRfU4oGABT2J6vfgPUxNmXUasdTDav62k1WrN4HKNAiNctejbXctJW6dH4bdikS5tL7L8skK",
  "key27": "3CeitQLaSwewyxpK44Mwv4UXrXZxhiT2d15Ak3Aqk4qgvJKeB7MoWJdSGJWnzE8yFu9vEYAowjF1coDDU6iG6RJf",
  "key28": "upTkobAs5Nvai2hZqG5qSiFJR4BFgXmtNCgpDniQ6KmN6niwLYHo6b1VzdfxzB3sixXodmoECWAW2LVJER2iYf5",
  "key29": "5mp638zCpb5HLTmJMx9YVkBde2jqJEqLs734FzbyidZM8jsVFB3ZziZdGm9LTdUut2Azm3hAeTfWZmmM86NXDpEG",
  "key30": "5ZDtFPHFK4gdNXiuEqSkyAr6Mf3SmcTPaHyUwU4LbhT9VEPZCYGcRgdZTZHvE8CzhgaSf6u4ySuWsbhTQ78AKU5J",
  "key31": "31ZUQMxiqfyhMZcWKdttSEAnuMv4uF6QhXNYpkeBFmPFMWMtyCuLPZ7C7Wwhg7C5LuHZLY6t8hcJcQBsbqq6WrrZ"
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
