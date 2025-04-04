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
    "5UTtd2TvYJ3eQMFaJnhQEZLYuugdXKee7ChA8ZBgaGYkj9uwtKcHRXGLzxcweB9CYmS3HGMFyr1nLN3JfQvwbqBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnD33X5NjchFocDxMHEW9Eg7oYYGFzem47ytjRjJPVVfuuM5r3sQB6hCUaMorqsPNXHYzUjahg1K7wfrfpv9p5v",
  "key1": "4uieYvg3jC5HSSDgJxNKKgXvmFbBCWnudXxEoKRHgitVQVsowzF2uhjhJjDYGCcq7owVzmL15bRJcEqKeU1AsrPP",
  "key2": "k3opEo8PBQJZGrz99xN1y7ihtfqsPLadcWqTUU4EiR6ZNugRsZsB8uwCWbjP5xZM8eYFXp1YZFsZrLbYKfdXEDr",
  "key3": "4nzNfDKSgHgvnDADrumeKutBQBDjLmM8q68qS6rsauDg2v6SSTGhzJbrTUowvvu12AhRqEo3eBVue4ThAgG8rLRo",
  "key4": "59YQTLYhuqhTbm1H6kje4J7VsbaR5eCUUSmoyAsgbjD31H985b9obvNQFyAdSpJpiGKkp33KbG3NGDVEBAex7qas",
  "key5": "3ajFW8BhYTmrgvLS3MhrkwFxuv6sHGCWVjsk3Adi78qvTYKrFSeQmSbd8NaCdLYLAYaNbtRpR1NCaH4cxuwsaZsh",
  "key6": "4ifWii9VdsxSyZymzyfzJMiYeRdiu891BzpmJLm7gwJpcXPBaiE641goj2eSS8QeWgM8TpVkp4ySg3jo9pEw1Pkr",
  "key7": "2fttMmVPVNxAM1vfVUNCJEseJKUPg9aYhKvyJfyAzZfXr9rNJVPQf47s8AQV6ktd8gUGtnFNhRefuFqTj37xYwPm",
  "key8": "2UXe81CZKuNKq1d8oqT4gSrCZawC5e8DSxBPCUjTiq6S5wVKUBDPBVkNWdFr18Tz4QsmwVBjMYKscmAgqsPeRvQr",
  "key9": "25RiKRPY4GU2oFhi7axczf74AZjo6xqtqhYD3aQn3iFWJ3oQn1gVTk9qjjRceVrsPMzbYFbnDvPnnNMgUNvvB3NA",
  "key10": "4PfPyJX85P1QRfnMLiQjLQGQW9EpnqKihwP2nxZmux5kfSX7tYeRAQmhr8RmSoSCuwHk5ckZbeB6RAnfzq2A1ipD",
  "key11": "51onnbEJU1zSe4MELCMArcon2uM4o4qpFjhbbkXAJwz83ebnseDqquvAAkAqgauMRXejavMefbfx6kiEJUf5nEMg",
  "key12": "2bttWod9DsuBYZ5rYa6GDw4MjnjVJaQHn4VayWwh3vhnUarZqywq5GvuWEzUHxVXjkx3DggcHzCwM3NfakHFKrgw",
  "key13": "4emDvf9HcMEWh27DyJS9arPg8RWH9kJzQy1esoDDfYgGUNKUuU9CqCVrNAbs5vG386hQ1CrBLCWmJmLFZkjidj8f",
  "key14": "2MBTfhv21sx6kxYjBjSK6bKLtK12LvmWJ33CKpWk8c5LsiYbRafeqSeL7oLZqTsqdKepjPFj8fWWddgoZ96iTDBe",
  "key15": "hDvDNwdAqVMA8C5ryZNcu8qBqQkRYduXwQdGXonq15QCqUMGbxWKoGh77XR2jhsLQrFYU6ZLuGFrAq95HDxq3XX",
  "key16": "2VzASGHBZH1THEC6BgAnqza44kPhYPiD2KdGebcZ5cTPsYaUVpEcpjBVvAoEfAxtytPgLLPyEcjBPaFLpBBG66Co",
  "key17": "5ZQ5AvksP4sy5sFKchxtG1GfR8qWqzMrS8pQgj8oaSPCfdK3EkASoTUJZmY54Q6AxLbC9peGK6GJ5Xb9JBidHe23",
  "key18": "BbAMmkP66SGEWCHXcvwkfzn8aLV1RLfANP1tfZxCKAupAEmvVB5jfRd6e84u7QHjQa4WcaRyHn83f3d1kaooXoj",
  "key19": "4rUqAoeGvsg3rxVgm6KC95N7viA5274REhUcopnG4aDFVEjL7TwnpT5J2nJ7B1x7qDDJ8sFeEtTkwafTuCw4HTpP",
  "key20": "m7kuT2FMxPcmHJPjsh4xYWZnffvGBej7j3xHHxshrtR1NHnJEGsKQcLcbHcYeMcti3Nrp7qSfpAiWFmaRsxVECx",
  "key21": "3Gi4HXcYG4jsyVcjPUt74RGSmDvZcADu3uo4xnQU6shgLp8uMk6iyTDebL2iJR8xDHSQ9PScx8dwbK81s4VmQMWM",
  "key22": "5KHHDkG2FF2EQYbehsHCD91NbnrrHqJ5orxDKbqmTXVAUxH8pysdawo8JPZJ5rbvgRfie881LaFmbvvekgTr8UJF",
  "key23": "61y7gERPMZU1camA2LyKSG8c1kZynPV7uUuaFFWxtm2sDV3rVWoaEzb46Q6ZUNLMyKnx4UUnd9HRnqX6AfTHGznj",
  "key24": "3WZyXebYcVvM9NCpNeBz8jfBipKZSp6DLrSEZSriBMtfeYY3VGtN8D42Wy5p6hLQ62iiJtyPMvMkZoyy7y1xBAFT",
  "key25": "3R4pYxPVmRDw7EWfcxYKQE6mfAmDPv2iYj2jNyTms59VSr7rTTFp6fkeeMyEds6VAHCv9TKtee9Z9heyXy4dQbJZ",
  "key26": "HV8VWFzU84HDaJrJTxa85WpefN5aYgpjg1h4PD9kmWLeQzhoCUDVh4RBrifeub3cD2UMBtND7zLruRT2HE98BZE",
  "key27": "5FtozqrtgKQG3WjaHwAx7ey2iesVpHYZ49suAmhCAmKUL3tuLmpd7imvw7Dn7AibSgyxPydredhNd3NqZTSS45n3",
  "key28": "352sGZKMcmQDGL4itd1JkX4WbqYEP3PNXfgPXAjGfccrbnxQCPAk5ft6dXFbN4SaaPRZA9fQWKqbBhAW2SyxHoLX",
  "key29": "5dwd5BivA7RsfEA5AFmv3sxuxj2CBGjn5Eo8u49fNTcxzRAZ2Lzcf9mDDo2j9TGn2QzjYHXEkjS5dGNVmbX4Ac7i",
  "key30": "3oHSZwqy8BRAavtPcyM3EdemKMZRPGB5thaFcGJwqBLidg4wThrCu2dVFmB26cnms3qHwgA1kg2rJw5SWTXqRX2r",
  "key31": "hNnis8aMVcLJA3tDuW2L9NqLEHbaPZ3Cz3kK6UExztzPt4F8BhC9U6LkFisueZegWBiJbjh9A5h36ZFrNqRvn4k",
  "key32": "24Xq7RkZfwyzegLG4ELJzydr12AQAR4ZVpr8CnjXuo2p9ovTeQhiJQMVJU4fZkAkGFXdHt8weR1PVNC4fcZUMPWN",
  "key33": "32yqJnsSwWm4bu8Py3ASJvZgQEJfVTtFZPG18BP7vR5BwNtDoypgL97uBYbFgix4yJPqPyB5a6NgcNSYK2aZ2xXM",
  "key34": "DgWdwNNehz4T8RSuHtyhPv2e4veTcaGdQEbXcqZKDCVRr4AqiaWam5ZuD35GkvwqMgJAJZbFKhqfYShUa5H5DfU",
  "key35": "2UG6Q2FNvPEnNktWEFiirExjrPQsdpQj4iQnLVD2RAq8g8xoRmbyZiNxxwrA1nTu7fGSkfxvqSuhDRGuKeqFGDb1",
  "key36": "2jBpKPD9gYZib5yFR6iWTEHgXD7uLPta1TVrivKQdtq567TfSk12DoyJFyeh53k85mUFqTCyLVY7aXDEWzsE7rvY"
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
