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
    "4DWiiv3iJJfwaKzvsaBcNvBLWEnB8iV7N8UCJfPtKcc13NN8P7GtrDcMu58H1D9umycLKBKG5vVE3aRbFHU1ZzLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6wTihMFia6FWF4WRUrw5ViM3GXiHQu6ZQuVjE7fN8Cxs1hGLb2k4kzGbWK23DjvecQjNCFWcfhCCvFvw67bqoa",
  "key1": "3eKtKwbLd7MDTTmGFBvVP1ZhCCvQtktNbw8Mt1iS1JqK6m5JiUBzZjJbAhqcCqyX5MJqi77CE2A4ey3eM4yQZ5tn",
  "key2": "4tSPH3EbDUNbiWaKmsy1HD36HuLQYfceJ19mYC9GbenPAHT3gUtHwbuBQBYXNNvkg4HxFv6uKp7EUA4VHr8CJiCb",
  "key3": "3tjswqSNJNZzY3rjX8xq7LauwQthNRmx78o4vN43Nhq4Uvs15A2TgbZT9KdoXm6mWMYZZYzXcqjVkrKoVnpYJDdS",
  "key4": "3uacxk9GotJHfmwEQJa8MKr9i4dzUerihTEjGAsRd8kyAnhsMFP3G7P3paM1dYb7JjmYaaHb19dZFPBGCYyRdE2S",
  "key5": "Afk2ibz7x22RHzvLr8iTxVcBLH8TDKqURhdcBSYmvg1JEEv3i49eLCPvVhYunbfscbyYj6VrXv6XwoxUneBwMaG",
  "key6": "qfZWopBVfY36PL2A94De5xwwccNEuRAum9tv2eoXBr5HRbu51f7dNfw1SHLd2kVLw2DJnTyijSojFRZkpV9Yp5Q",
  "key7": "4Us1pDuiqJLenmne2KKZ5sngJtZr8rtfDMFfsuxdZHWRzPCtDpkxX6CrrmVGLFKdJW3cUsGxrcr8oa4gQgQja5s2",
  "key8": "XUMzSUTMZv4j64iE3jpp5beRqfkEL5KsybGuujCp7uTGTTdRTaC2CmzdetY5h9himcZdMErPKYBFpxaVbd1P5VT",
  "key9": "3pqVQaf3tdEvFX9SDynRv3PDFE3aAVDgEpAzBCSDivBM4Q9feAwy1H9cuRvn3e2MRLXsJJXhC2TgS9dYkaqztV2W",
  "key10": "XaNz5DjdegZyzc2fevat1zAtqtRi29pBCr3XAPjuULFLW92Zzh6wdp5sTb5Rd215y355NSbitnpccKv5wMmomLZ",
  "key11": "5F6fqyG75SBKA4RyNhaBNdyEkJdqj62wBGGTxTwzVjCZkjwGuYoURfdqp4iehKMdoPtqffKkxEv2a4gM9vYdRZz6",
  "key12": "5bwFwkmDiSFfzCcwiGju5kwjpEEoYB6epEFavCcRhvvAAtMUDmDbNDv6gUnGp1iq3RoXvJouzgsMDpZTq3wkk1JS",
  "key13": "26Lbwb39i3D8sim7PSWTMsWZsNj2vwiREu2TH6T9Vf6GFGstjePanVcRgGEj84gJUPLwspLPt4vxj73nSnABtJUd",
  "key14": "5Nu9czbdkv4XkLGF2vLcDka4ePDuapVrbPgYXpFFqKUbUBp35P7DjRu4TsqF4A8BSALbrWUqfyP4cshbqRwbVBYa",
  "key15": "3WKiyj7xcQGovwQTESa6QgXUu32ZRjvVKQ5wRx2uMWuSEYtqTZQ6p6VzNuKCbe61n8AM2LZzHa6LEMweE9dGsSB3",
  "key16": "57Grb11JDzKsLq56XK3rSstgSNiK3AxNwMiJfmjmQvkiKcoeVaaUWeWPcYJkucwG8Yfm2tZAc8K5nmm8z5NNaCai",
  "key17": "5Ykvtu25d25LwcaGxZu2CyUYgJ4SQo3c5PpPNkpZAzajBE4DpwkkiGfHLfMDmp5trvbvGx9hgLWWfwmLaB7pDH7D",
  "key18": "4bSwEVzAZta6v6cTnrWzih2CPd5MxDMppxPj3VW4CuMAu2AWPoTET1cY2LhMXeDebJEB38een1MSb3VRghSMm1td",
  "key19": "sYgp1AJ8dNbpvjzWqiGRcuZkisWANdwxw16whfWyjAMLegcaSPknRJrcj3e3npLWA1P81dtvAcnXvoXWKzHA76q",
  "key20": "3AhiSr8sQuqXgx5Z9DWf41suAmFAfWEK5NdP8GFguhE6PzoizK1f7Ribp5jgjWVy3mYNrdXLmKMAehF9CrGMfjDH",
  "key21": "4MZuQ8QsnNfSjXgyje39Ys1DLoipXdm9UdVg43J5ziUMeX4iyKLDUqLUrewNSrX1fdC44vrTWPWSQGsy1V8ySncS",
  "key22": "49Ph9dNvcwtVP3xkLyssgh7ANrrLMW54V2pGdHzpxENMHipWPgC3AghEzSYws1pvDg8qoK4P2Z9aaaeqMvwAdexE",
  "key23": "2W9mibhgmWmaPbyZD2vdh3Th1duUmPj4GZ494Ac5xgW23SAWirArmPpSt3jZY4bCtzyEnnJLuu6dyvVXhHFF93mt",
  "key24": "3aA9MSRUhk3R4sP1hFgrvpbkKPcZ1mj3kFZzTtZxPS2xJC5gMX34w3bWmmHKquGSBAyYq2pC1JUjyaKNcERb3Vun",
  "key25": "CersZmdQSJC3Tm9f79FwoXgJGnDByyB5MPgzrv2sXWtd4ni5PN8JbG3uMnvjNa3AZiqSv6nsw4hL2o2Sd4Ne8rU",
  "key26": "2RdEBtDeQF8gxog3zrGd2Jb2QDzt3ZqXrowFTwcLMCVhHwzA7LtGAcTndvjNGQTkkCcpVW78dNhYVa9U9R9eZx4y",
  "key27": "U3k12BGcHRLoJ5ZTkqDpTSCjhEH3y3haH3qnTBH2pi9xeRyy4GQGyHV9pGphMMJSuQA2DYwQW4rkqgmhsvtP8kp",
  "key28": "ED6Mp1hGZJ6ry7BMkUCNWZ2e38AdmsEfVTAYYcod6w6N3ffNyohBAjB8FGwv1LkfKGU6NQwh7Z9t6Vq8edDeG9T",
  "key29": "59sz485WaA12fkZmjh4FCRPvXCLpL7YA8DGYASgd3Pd8sPkdU1BMSRcun46piKU4Tk1LrakbeVfMgjpYnk1tqGrd",
  "key30": "5QN1d1phY9Tix2QBVCmxfBAqqv2rzk2hqvtBc43Qwba7goD4kwWqh1cgwVvRR4LKmDM6RaXsA8iBdiHzAvMNp3fh",
  "key31": "4ebwT126CdYZQ3bKNPZ2L1buKjpmaBJCLfUDSbFRrFARwr6VcJqCVtQSLRy18tmB9kWj9b6t1E7cZacqkcfAfdDo",
  "key32": "4eDsfZPaNjcVxju8gKsc7W9WZRD9WUK7Pz3sD3jwy6ciLnke3xE8eHg2y224PnRG23ZumiykmDvhwZRA85dfpYRt",
  "key33": "mss6twFJ4Rr6Z4c6fyUm2eFxsWVtdvdHtqrFM4mjfFaiXXqHsY2mLLyY76cxRZBYdCthwgZ6GaRSAqPqDBD9Fyn",
  "key34": "5r2aRUzcxHkjs1FZ5z7C6S7Ki9q7EN6vmLZTsn3fPcgsiHTXrC2XZesARwQkrJKGR2tnAbbkBk9xsZ5cb3wD3RAF",
  "key35": "3Atg55J7rW6rFfaadxeZa8bLnbYYZw6ujRN7TkoeDqxjBxDjtxN4YUG3dhTq3etKLvwrJSxUSopQaPVaCBoH24NP",
  "key36": "5R5MsPf3N4ZK3ZLUzDWNLXqmkuxNj9Y5TXdJLDLLdu6d7b664kuMQpnV9nLwHW8aoo9EWRXkiZxd4KW9kAHhJgUh",
  "key37": "5J3cqkZKZpoW44377N2cBBCQ9Vucb5wBS858FVExmHmR3LJf3sAATRYtfaCpQJdLkMsXzNETZ6bAv7x6VVimEeG",
  "key38": "gAFGNc6MhGarSvksYP1YwKV9jXRhFBsRMH4WGT29q1XoXA2YNQUvC8dLhKwMamZKER6xGXJtE4kZMpfSaBNdQQ9",
  "key39": "5ce43dUTCp9HDtuu1qbtE1aVHmMUaQVdjMEmqC1zqMtBrQj78CUf4N6m4H6bQftXydLnRcbN9JCUUHcd84txtziS",
  "key40": "2matc2kR9f1VWTbV1LNDtTBeTUPBJ9wikq6RnHycVaHv1ontW5JhhWcMqrjDsTu5yrxXW7HXVVsP7yQLTXp5eWkr",
  "key41": "5xhDhrFp8AZWNxtMxH7S9iWjKqQp8rL47DkvZqGy5VHgVjEeemj7aNfTEK9LyjEGNwcjshB8kzGxBKWk9NXJt1aj",
  "key42": "58UUYtVfi5vfV7vXc4APHXPTuwFphvtGAmMh1NriTeP9NDNXEd38v4Kwcw6xMWQbi9znwS5mkjmTjCFdsFX3WVzJ",
  "key43": "4hUsLzLHB4q4fX7QV49UVx1pUywwsNtcmQeGsfePZtV5iLW6sqTSQVZpXhirgVsFypXDXMSt5crg5ZHnSb8ebCjB",
  "key44": "4AiUZz2vStuKhxF7WQEow6gqZcU7ePLHJcbjEqYYb3neyYZT44YuH747iHV55Ho7NncSHMTttpsngR4cEsJiCfJZ",
  "key45": "5pknBn18tZchAjsek7HeSfrNW3VowEaS8b2iBd9sbmjVcy9G7jUeKAzQAxX1Ab5vDbWfD7oqPmY7sN7MPDZ631Gz"
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
