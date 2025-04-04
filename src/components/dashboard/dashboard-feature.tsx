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
    "25EnJsbtd4eHvf7g662kDW3a7gUaQmJ19poEFECQP3hxV3vZv5KLQq8kgLWcA9X2Myr5iXfEuioQ6ST4RCR85twu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aq9vVsjQktzoh1NZHrryvAPuTZV7qZKmFpK8okgJbdPZP4irVAjopmXCB8XYa3kyzD6UCxGTNFCNqepmELkB6J",
  "key1": "3tx3WRcFQh99vRPCyFWSdDaq88Q6LRmNMpjRub4qKaBYaECHmmiBQ4AP1cRL3JLkWYo3tmZt4fRgEMBrK9wpiqQn",
  "key2": "22SDgfZwh5H4Xxs13uwugvd9tkGyzd8NDohKGkzuxoxbKDnRqd6fd2op6R482Ca4Anm7YZd9dEN4H4EgDiFShSWn",
  "key3": "Xb12AFrKfQtZogLaQWbpDpP6cWNgvmAuHWkam3XkmaS3ao3iQomXGZRA9yWCuAN3CPTw7m7CH1aXLPyTmFRy9mf",
  "key4": "4LDrsDcpsQSxNb9hGneWhxKiJA5XNWk4rXJ6TYawrtnum4dFxY2tJaJ2A3u8wHWQAHpJ4w4Bxw4ds78BNNWCSoQ5",
  "key5": "DtpH1iNHD3i7NZgSuSBAjMG3UYmrDkQJjx1mvyJekxsZaAjsHHJjQwdKe7QC2UgUcmqthc9df9mq8XgXKrCTNPB",
  "key6": "ZhUxa2A7UDJ6bAAxVsS6DJbdQYRr2E4jtkGaxtP2eSCn3bUnYsBLTQ1aJ78ZujXq6QzKJUBMGhbxZ5MUk7k2TrV",
  "key7": "4F7QU8WmqJHKrZcUcMTBgmrrw8k6tTZo9yiCCKWLsAJxUTrkxtLktsLJJ1eTn2eXjz1PQwSKVWXuy1gZf24aKmLm",
  "key8": "cJmqachonrUuDLSv8rCEfo2sQ3QGd8zDpUC6k4t6WRK6f3CFjXQcsGHY6sUVkDA6fX8tpnfmxBbiPBaiXWEAVze",
  "key9": "5hgb7Esveyh2QLS8H4MUFAwVLyN5sTna8KAYB6iDZ4UL5WJ5hD2QBRgvQF6WHmEt7iGboNsoWcmXKEe9QhSTtGBo",
  "key10": "5KpZGmJCbjoSGfN4TAeDWq3eJKW6S63P5fFjmw7StQ6LpYLbnV7xAdSKvJZJjV3mETZHi8oW4E5qpPKho4StbdA9",
  "key11": "3ozCWcJkkRBUNPLxZL3Vv2frHHDMVVyrpLFe6Yu6LM2H1j1dVwSHVAwEE1qssrPDFQVWCmMHCH7gjaT3R6htCNfK",
  "key12": "5oqgLSKq2qxY7rLYznPwKxdPuU6xfiZikCppg5CGeV4acmjS8BS3MaPEpdqUWAtDnA7gzDEgnJC4m4CUQanzTiDh",
  "key13": "3y64ZnQpWXqzuedhxUU5W8dQxHDvMxni4JVsQVmLZotF9Smo1NxLpgCiVT7GnzDiqtfT3K8vfYmZHPRgnxRnE2mx",
  "key14": "2j2FqitmNEPgHodHKxxWXQsXq11kPfmw5MWNQNv44UKARbr8wqMWruhm7V9BdFY6NRgJbQe94w72QhKFFL1M113o",
  "key15": "4WmJuD8Nzwmwg2n8D6AbtVsn2wWLFxx6HM2gLZw6U5iyHftQptDvz9x5ADSs4KXDKBM7GPGJUvRvrDrTf1BWhFxj",
  "key16": "2CtUJ2SY5794WjG4E6b3Ykb8NRg9h2cKzKBjUSVHMA3GUrGX7B1pVnQRhU2RZx45PW784SQgskW84mFMQrvHPqAp",
  "key17": "5VpmfKMQ1jtMJADay5Qzfh1K8LZpXh3RBMhKRWMM5JYzSZw9BC5fFJpkdEfPYa9tcTpFEL7XDqvZSsSxpgnfYmFJ",
  "key18": "2icpFeFCPjfnroAcpvQDH2t5sYq6mCKLdCCv3r8JFR4EsBfp6TQ3RJe3n3GxXGh3dCGEQjJhZDifT3eucGJz5ugE",
  "key19": "cUhdcgha2vepUMYmS1ypnNkUW2r2FbGFvBZngnWWyvzSx935mWmKp2VCPyuLvcNHST7RdsMy6BLmLacSKjkeBdA",
  "key20": "4zd1uiDBhHMNWKdTEYEKjpBNGFB97SokD48oVUfXYJejZ5CwVkeesxYzDpPaAFZ9pJ8sC39PToaBc5BefsVsCoeA",
  "key21": "46C1N47yXaSeoJqh5kNjgyzgWKEB6HmLTTjsUYNEKT7U2MNEEggHbkSau9He3xDeGYuMCxuw932HveLTXQG4o1Bb",
  "key22": "5J29nruukb5TmLZWonpe6bBxbrdvkrniPnuniizdaJGbqrCwRpibN7KMTfA8R4V96UhPmy34BujWEzYA1hPGrNUB",
  "key23": "3uLkmfnhfejuupK84YrTAT3HT78556JhrDbCQWJRFGLHyZWZJFRViSCreCqTiLyignz1YZi3NPAvCaG1M1aV58qh",
  "key24": "USvADnkKwHjnQ3DkExCoCaygGBJnwYi1PTka5Z5ioWhLp8JeGKY5JtgPyT1GNW8FaoDhZXCXBrfQ5YRwnjcciTH",
  "key25": "5mfdQiEzDk5HHWxkne2ZUpjyop1DS3mD4ey4pKQGGsNQtqnZmbK8FcLsFQAxjUUy8fgFdbHKTxH2eSrAfQX1xsp3",
  "key26": "2wk3rnQ5EzLsTWNp5AfDTb1TA3Mt6UvMDreXUAcXWBR7HU1tsgrPpSTDGGCq9EQywfYYayKcXNwU43MSL8v5b5mP",
  "key27": "733Hev6fWyGdRZjh4dVzcuhbXHd6M1twNQfHsi3o8QV1V35bbsBJTYrwWUa5gFWQHpKp4ttEy51zENEnn7uFFPt",
  "key28": "2U1pGuqm5wPr65xCrfYNyjjLh2jJdxinQZwkindbob9iqzVSDxpuWQNdKGe6Mn73mRG58q72vcr9vYVsrJs9Ca7p",
  "key29": "21fB2Q31tcBgvtCwydfdSx8hcX35f431hfTmTUPaervRfb2L9TUYHhqdcfjui6ELwC1RjmLLshwT6B1BhFQCzCvM",
  "key30": "4iSVSzLH2MAq9V5oiGpyxpYhi1xm6H6SctBKTUqdL7eeCrZxCYe5XYJAw4proxuSGikD25yujVbGScxMsbCdHHdd",
  "key31": "5ZjeVeGoiXQWnKVsP9azstCNYNsx7ETxanwJSnkWHe7dJz3REpkwKDhLJiVTN3Xbrgv7zsVD8dNwNKH3Rtwnxznq",
  "key32": "3uajBKJcju6bzRdf7hTtt6KBXugBUdPy1BkH2URrL3PPRW6ygaWEsHxz3LtauDV9yY7PS1LhueFSFTMihXWB8dUq",
  "key33": "2QJMH6HiUVNr31myZCzJdLJmqV9fPBdazT3uNMxbwFto4t5PLEhf4cz2aEBfkB7fi6AuYuewh5LMqoVi3DJihuXV",
  "key34": "4crjCAzuH6yJrQu3jqsjFwFjdm85wgUrC3DULSP4wVpgk9RijdDKZhqB4snu6pQX66okLiuoD1iLUoiz5VAYeuXf",
  "key35": "5S2FvBKvWcE7LrD64hfQqLM7pfTCNuFAsSamSNCHKUsvmnWSBDQREuXoHChn28cuKG9HEnL8X5yvHHZKFq7g1aD2",
  "key36": "5cv4D9FQZ1L5hDmAgDuyVkgEgnmLZB5tjmujEctgt7th5H6HHrnVRX9R7VPk3PaSXqchHb9YdbzGG8vTkh7SjmAw",
  "key37": "3LS8P3jdL2mdMxdDwxQFHnw5XBUAJBUXuyFrzThPvSwgxjG8hQnhBi8RE29LMtqmDatyEpHMedUassVF9phutkyR",
  "key38": "3mVJ17WBpXdoh7nfsbw1qkcPBFfjVf8FJeuWz2nDF1fw2cLf3jMbRFa7eauVu9NNvYfuXYfiH1DyZ39riWXFPzPF",
  "key39": "5pUFwfHuu88Tjm3dgLAhSXSVDLARNLTm12q34LbN2GDWFmJKwXy5orbjqPJjBA6KRrEjwFqGBGw8TkKVDz74BKPU",
  "key40": "HUrWWPq9ZvvK9gDkFWRQpbXpKcqp6x4uHsj8yRYkUJPDqCTdtJWiruEaLARnnBuvFMiy5iEGxNgC5rwtbuLCDNA",
  "key41": "5U3zRr8C5Da4HhuGNqCPu8PWcwH4FWGoDiRk311w3JremZBjf4iqzNez73UjvLEaHZibqpruWU4QCrudttoKtkDL",
  "key42": "2bZdzJQYmLdqnNAXf2RfKPEB2HRCdnZ3MzDHkZeFbzurJDfdPhyGN5nXN9BnJUNQAjHRgm6iSa2od9U63kNxJsfP",
  "key43": "23gfG5w1RpxH7dKpdcPoV85vi5GG1xSsPk8AiVt7dczsLdDjqj8Q93Z6z2V2R5onrsA7PUbcWCJfC52i2xph9oo5",
  "key44": "4mrQzxJfvgN9RW3j6kuM8AW15BQooVSASBV1dHN974WRosknpssaf9Vutd358FpbCTc4U4TRFn1dRrcanSdqSmLT"
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
