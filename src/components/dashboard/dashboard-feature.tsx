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
    "5gEr7LGppoQncVfcqnwAxxT3kk6zSPfpJ5E7CyRAhtwrMu4KL4MUcGn5mWWCHcK1gNdp4qw8nL8s7Qw4hFSP3naT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BWQvT5sjMBh9mCxCR6NNURVjkeMk81PYq7T6bDXaa8ZzABQBQtEysCYmMyoEkAfTAAAQPqakG6dVeDzvQNEW5u",
  "key1": "3dBRQQPcSfSfbyTcXPnstFkXYLqSism87YrbF343GCvhqYBG2St7abUPEopSmMD1tD5sjUE7tAM4jU1z7LaxPsd3",
  "key2": "5xJNLkcTcGCXuBmdgaVkF6D6gNRGbhceFK3YsgH8c5g9hnMfPduBzSZyTiWh5Zj6o81NwuC17q4BYPD1vYiBUqdj",
  "key3": "n17tf9Wxv4q3eQAi7jtnKcqHKvC6oQDEnpR3qWsurWnvgdWkNzjYTPPMCxP1uZYqsVb8M3Rw1cXPRQzu5bXLX6n",
  "key4": "4oeEyZ6rzhXPCXextYDz1KG4BKBo1rMmt3X75cvpKCjzuhhMcQi3sAb4gUFuXRZzbvjsCnQ6zZnhzQcCH6cQW2eV",
  "key5": "5bjPrLxmST25omk3CjSgw2qfH3nRgjAM3e7YUQUn4CU3YhdSowFsxE4DkAT6m6cRbWv2H839SfPJve54eSKgGt6E",
  "key6": "4zyNhrGSDCRodzR3eQdWAaT6BDJv6cgATnWZ6SAwDjSdtozAN7w2czsLShptfQPRV7JqGa85vXfEW3PJStwddRYU",
  "key7": "4UMnBmRKT68fu4VR9JsJX68remWRg92Tee41JfkXkRRTdUz6Mgs8tT1jjzfY6g3ehaH9eddDYMcZKFAAjBD6Sgt3",
  "key8": "54DzwNQTJGBfCHJkmbS9eDJE7mxNb3iMzx5A8woMVk9oyKXUZ3uvhBPoyESz9aT4VuRJHeMEVQXawVczqQ3xJ55L",
  "key9": "2D9Z5wiLCJuaxZ6F7FUj24smazhnCXcDKh5bikEB2htpE9miFurQRFvGQkFQSjAsQgM691agj8MjQH2HpFcBEDFR",
  "key10": "GtvuXCoPA7i4QRYP93pXBJFBMhZ4iJ6hbTN6xTYgTEgeJ9iF2BERQCu78iQeX54CWrwSXFuoJy6T1vLyW3d5Q22",
  "key11": "36km7eKkiApvtH6Uv2cgyYbmeStwTv2FLTYF1LpEfTJERjN9qEmT6Cw8MLwaEhPpnw3NibY3zmM35ZmU4FQ3RBFt",
  "key12": "4GS5vTsiGdadXHKyjM4PWgnQ9QCPLvvWAZ2zRgbrs1wTEzc4hdavbub6TWqpGP7hrJypQrCP7ieqvh9kQWDxAZtk",
  "key13": "5uXtm8SLWFvtiuZE78L1BqfBNkiNPayJwYGg2UoR4wLYi54X5Lwc6gEfrAP8BqqBbwz8nTwat2EjBWaC7AKZtryd",
  "key14": "54TzKG3Yr3oHYRddNcmT1R3hocEU5VoT4n3mDD1CzNpvdg9NKm3JYGX9Nxuis6YrudXiGAieW4jKbu9uDCdLo1zZ",
  "key15": "gh347ALZAY34a9s6jPaqua4iNXybU5XZW9dVsEJn3U6fdvpb7vLYZJtgdAt7weAXoBw7VK2xVGLJJ9VPGefNogR",
  "key16": "4nMU7Z3iCg4jHyxfiY7E3EgJim81Yg6RT3wMf4kGFBLXrd3DKVHFT2jf5fKbQw76eZEACzkMqDgxjkxntW4rSmMz",
  "key17": "fgYD2nRJ1pePnuGXA1rT7gzgUpwW6948V1vVxP35XiLM4T4HYKNX5LwPGhqxPgAbEy8Q2fSYpXUvZKQvjhmbBAs",
  "key18": "2VPWSzgqCaxgZHJ7yipYqEwSqgg6q7PdQjMVxSUkVgF9em6S25K1gdMUN1iDvZaNMNtFTxeAUVowa4VEsC1npWh5",
  "key19": "4NC6AcqX6ZKjpTqWUnPjrU6GPJkHgRyYfyRuvf2KJGcC4pJKVtdopzvPdNskaFjTHVuPbZDZPstQm1tQQ38RPK9v",
  "key20": "26ZadRbhXyAMP654TzEkK2fiYDz4Uyg1r8XqAEUJn9syffqqJFBkHHDcJEnBqWdisKNzSujtYXLCPWBtvVDsvUnt",
  "key21": "coVJQQvV8c7rM49gd6QU82bRkUKFt7VKXLUpEHSx7PqrzmbHSKVzujCBrmd81DJFQVNtGYUohkYBJU4giSgLSa7",
  "key22": "64ATYL1c38g9p4ndNfwEgM1esUW8X8Dxk7rCza8UvqZjsmg452gqF1JhtyDq5wXi3W4p3RL17H672svR9d6s5mC8",
  "key23": "4WF3vEJgN1GQooMPwpvXAt2HxufvNVRPX977GvpZrtXzDNuPdVKpMtbzyjZxN3kyUf2i1JnGUoWvguPFhEdGrcYX",
  "key24": "5Ehyy9siYWu5kQZrCGhbRXRKuJfWKphFjxBMqAHTUgWUhcF5gNZkiSyZKDC4UuAVc5jUvtMp44vktev9WFcdZVt7",
  "key25": "mrfqekNsyv7UBRhFGc9CG7pwT7Nx8EDwXgfyYi2ooyn59NHNDGtbXTkmVcXaoPvf8WcFNtiaTZ7V1W615VQbHWr",
  "key26": "239RvdYEe3YRrW98d5R1RTnoNDFiturRAEhzcK68GCyXB6PcTQExC8pz8DJNGBZ4bAHaUUVguX6vU4E15HmZ4x1a",
  "key27": "3iZb631n2p3pUfw5BijYhLJNSfZhi6MYKcyPm3DHruQAWv5diZSmFbPt5HNDf2ZMtC6cRbTaZRUMZ5hH6n1JL533",
  "key28": "2RHQ1NpBUdoZ3xKT7Y3hhY1du2mnjgFQJivt8dBoE5tNKDdPQUpuncSrpRU1s2LYu2xWEUKoAuWQN13eu8R82ERi",
  "key29": "puA2P2DEJmvC7CMX7EfBRfUQHPh7XotjKoAuMNkHi2FsM25zv1jWRyhSC1yWuixSVh2L9X9h8FBnzCaJ7jwZXxk",
  "key30": "333NKwySRLsBUgzZE2TXa3dfARFMwGAU5gZKNwK1pk3yseNeFQnayh9QghZ6RX8cUPFDqd5X1y6HJcQhapJYKS2s",
  "key31": "TmNGrx54nQTEfn9KgwGnetoRQUHFudtt3acaxE3RcsegrJ24D86PT45kF9xweLaEmRNbFq9y6csEgWCBwiowUQ5",
  "key32": "5bzgLQREVqL5pazuUzU1NzYZgRfAxN86CXrk27Cg8xLihREWrvBP9Wf5ML9hahAqRA4dd274RLqismiFfTQbP4dz",
  "key33": "ym1rPHg2pXrc6Hr7uXwVYBf3iaRFS1D3JgdieEn6fQHR7acfjZYVqHchh6cT8sjS9BcneDqCzz9c2raR3HWG2jc",
  "key34": "CPjTmx1UQxH7Em1548C1LioRkv8s8SYjjUJe8Q8SajuH9MaGw5w82aUMBMuS631mXLiqyj6HEno3FW6dP6Wof6U",
  "key35": "3DP8GcM4gYMGyAZh918niE3WvSS3tfyryZVEqfRgbWarSkb4meQTYVSodxcx56MymhkgehY2fP2XZVdMPKwx6b9x",
  "key36": "4PcnVydP7xFoXxbVFe2fw1LTcBgTpqAuNovZ1zwkEeKzgBmmo8DAH2KuKoVgWN8QjQBLPg31eyfqm8gqzgVf3t5H",
  "key37": "ca9sPVRoXCKz4qgaKCvVsSZgaDEJEtYUh6o8uy7MfeiE2VKogMRbJsoX2zhh7RpFSFATrg3Gs8zTAwBEdKGuQnX",
  "key38": "2vPhD5zdrybK1wNyJkx9NRDaAnt2gfXJ3M6X7kswp31zft151SubdsD3WBdpf88HCZvUuG9RrKkvvw3Fg5SCDhra",
  "key39": "5HhgraLyA48arzFNdn4ACbJSMbxw2GtpaigPDeaWamuNMpaQWBacEkkF8RnfZT4dqs7DYyiypFm4xEGFyu2tPCqP",
  "key40": "wuoxJ8hcjuW8rvubkskdDbhXfXUJkHq1vE7k1exFcoWHhfEDPoDz1Z9zenscAt7P1FWHDM2pcnBVfuaeF14Y97F",
  "key41": "5Qz9koguPixB9FrHZL1KFWW6Sj84bryUzwNFRBHnjo2nqyu1Nea9KX6aRhsjotTJqYat3ncnjL8WNJkmi81hXXXt",
  "key42": "3fQZzQ6pJ6sLu2pMRQp5EwEJnrqCGXm3uA5b7TgsnZzJMTUWsgBKM9rBR6PEH6iKJZjrWUmwx5ShBBJHzoUNbqVq",
  "key43": "25dbrSqKnBxaQxrfcGyNrzUgf2wp6edebes2M5K4Prk6fRJJYWVM5aE13CiLtdDWYp7HW5FdKgQS2FfsfcGdkpWk"
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
