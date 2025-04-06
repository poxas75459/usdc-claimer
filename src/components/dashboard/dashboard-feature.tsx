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
    "4hjGwJjUuahVi1JRp9MRXoSbsuqHW5t7Uy6UXdzBnXNTgPQs1BzZBbACiHBqDX3UqbGNjWfH2qon23R1JF26QfLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJhx2u8SkfGG1BmyTqkj13F9Trtw7h24n7AZziKx811ZbfBxNcQr92UDJrXgoq8mQ9bJ3b9RrSuqr56KaFrH3vY",
  "key1": "2voseBo4ETawehW1aYYQdDZk8A7Xrj3sfQa4gW6VkzKXxpQJ6tVxSMDJ6gBUufiCpgQSTBRtxpQJqwoin9WLYWSW",
  "key2": "5QRdVYcG66VQ6tnsEkccXxFBUHSrCwrVGxJkhHaGsgWckaDPNzHufCJyYLUjnojGTXi6m2C8HHxSy38TMgsu7wNq",
  "key3": "31f5AQh1MkSC7VbysNxdLAai5xL4Vmsd6piSgZfU3dZkwPDg2vxMauUi776aHecd2bTWssrmPqyVCE48VeDBEiQ",
  "key4": "4FxSpWp16nh6xMBU9vqHzrTaxshrduoHLYcLHySonmZWhXemBPfg4hRQmxT47AjGCQ4mniLBv7vd6P3JnsctDFQo",
  "key5": "xzbEZphawaokTsAyReB1EYYrXH4osp8mwUvQeMKhsSXd3nr3Vd3rSRHN6adATy3gBnij1tEXotyvryjQaPghyxG",
  "key6": "66DFqXsgrZz7ipJVo7kuvDpGspsY2NVjgJGv5wDtFYj5HK2NJMCeCwBL6dV31i95bbj6rK3V5iSa6f9VFavRYnNB",
  "key7": "2oUjRwpBnQJeB1d1dYAHbQENXeWnPmscybGe1QjKajnbPa9V4FDiXBUXg1KoxZ15nkzh24TdQmEXGwXqzD9ZVGgw",
  "key8": "3Xge5mNArXYxMsHjkhMpQb7VxALwof5PQGPmtT2hJvHocSe5ajRTEF5RdTiX5FpGeekP5AwM41B2avVWicpPrj7K",
  "key9": "ESWZTjsayvVnLc714RRECDjFhmypHFVhXuZjPXfSXYfMZD8ghB6BLQBcM22g1vTrb55M63WgvutzHbcS2P8WY4t",
  "key10": "2Vz9W6h1o4uEzmeveB4cdbQCxoFU8R8B7eJ7bp9suqxJcKwvCo4pZaJju9ttMoNAzXs8ntKkoeT2hEULcub3wfJD",
  "key11": "KvQE9z3mHA84zTegNek79YcBkdtaf4G4DNQ6BDTbqAqnWQxdHCGs2saHRkGHmRzRGGsCa8uWc5bEhDWacvFwjMY",
  "key12": "2YKi9xvJXERETSnYPU6JWeKYU36oJ8cpNYQTd16XPAZdN9rCY2K7ANQMGy46HkPnc6vUjqioFpyL7CxatqxkAN7U",
  "key13": "2P5bkUCMbmEUFsjQwTnMNh8yv8hoXKicFrwFxpG1wWMYy42YbJ3kf36VnNhWgUjaNuz2GZbPMi53vRbTBAa2odFX",
  "key14": "2tFEBYH9XonhDBAHB6ryznj37w4mkBc12BHexSwHZqEo4JEdwaBBjn1utxfAUBAB6U3C1Ajmph6ZZWYoEo6Y3fDp",
  "key15": "5REwzpfnxuH7Ra2vK1D1883VrA8auXtgHjLWHHoSooaV1Gef1KCQzb6sAYUrzfjPJNdoVWZmVgZqzF6ebECxZvCE",
  "key16": "4sCimiyrScHcRkdNbBeBcAo4sELKLC8NoLpJyWg7HEEnDo5neNqneNkcnfhRAXBaRJcSdhNVgLZo3qyWtq7UvfDG",
  "key17": "57Ua2LaufFx2nNS3JBAftaqkbrxj5X2gG9Vc4iLj7BZquFAa3uxUbdjLxhxcnYU56Y8j8PpYT4qDeFG3BgSfjaAS",
  "key18": "5dY3vkWoquNGd9wPJawhtcS298gGroQXLDBVxXWViHKrz3qfz53rZFwEnYPUqxJPaEd3eacTYTd8HrcDHjioMDrP",
  "key19": "2eJuNrXiTgJALHvLNKzXS7pbrDoWkWQGKbXq7PnxzzVdbEJyoW5rHxpX1M1k1bpRsEWhQ1JuEQjMYA29aH7G1Jnf",
  "key20": "5LNFhdjymTM7TwfXF4aXXtxvZtxnNd7Gc7wHC2ZjZYZFSu41S52Lrz3J6ZjNEydXmG6hjquTNyQKvyvDWDB9m7Km",
  "key21": "3UBiZYFvP8fxYvA7EadBmBw974sypFbZMcpLoV2JcmaxbUwijhoc1WxaeCeYp1QNHZEhCpBaU63hzCZz3KvfGaKz",
  "key22": "wGcdvKkrD3Fr99NFN5eU1Z12LpKRyUEoaEhVBcUG2zxQt8hZGAnJEuNoS1QsXNgm5ge7Gxscc1FCEo5QBq7qcYk",
  "key23": "5g8Z2eN4i9FiTW3Ea7BdFkQCP7G4XWesDPfjFc2RhA3FfrtyE1ntskEhUMkpaxqfGtHEgqobYCk4Cy58qmFqonnB",
  "key24": "3zCnL7hBFfjBzoizKE6kU4id2EB9Wx6azBFxnc9bV8UZDKVtxhzUqqifGnBfgGC9VnCEKR6PsyuWUPVLD9KzPLsU",
  "key25": "43GyUVM7BAdVEUGq5nv4eq8YuRzc4adBeFHDGLcYkJXHQR4jqXwr97XAm3Nm5fhR6f32TTKcshqDubhe3r2D6HQ3",
  "key26": "28QZ1HLnHWVaAV9JvLivbrjAdoqJ5oAJW5kKxSUo8UxCtUrD42SCaAsuiz7Bj3fnRHGZqcbcdSPuA4bHoLFjYmAF",
  "key27": "5W2hRvLCX2Hi4teQd1hiBoVe8Lah88WWEXQ2PmLCZEnzYZiaDHatiUt6mrWJnHNUjeyuAVKZKr3wXtptry6deEo",
  "key28": "NFLMi7vHZFUimtRkG8z1TH82d1nxf579MzFhNxuXbqhFQtP1tp1mzZWnHEtSSkfh5K1XxECwtWM91pg66jhHD8z",
  "key29": "21hD4gcje95RmoEkLK2HprBnWmmcLfEqMGB4osEDhJW9YShUW5EGKwDxvXsPKJRAQnaEjGLHimQG6bJTgvosHR8t",
  "key30": "2p4Vp2Zf68xcXg1vYyMmXVgx8FybyLjUU3BYHnxpxxgRryqeGUUgkbK7p9HaKKf89WH8yFTLcxbvCpd9Ver9X4dn",
  "key31": "8whprHWMpXGcnDL5Jaqg4bUrbWxPKTFifSXqB4G47BoWAXZrwmnitxmTCxp5yYWULGHtwET7rPACT7pBq5XrofA"
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
