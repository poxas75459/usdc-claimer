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
    "4bX2mz9NBVhcnZhed2RsaA56CU9zxDkLLLUBHYm9afcamTpEzsSbvMuVzGmGJkbNwrXJNZPg2v4ozZpQQvuhtspb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1e1TbSrXxm2HjZrjoA28xYfJD7i7tv7ESH3dFoKeVh9J5dS8sKhmHHjpS6tAKu1kGvmaFYFm3M9FBxtBA7XimT",
  "key1": "4SLBAMukdTzoFx1SPSf1cTjsKA7oczRPjowLpJE2rw5tWLFLPdgCeu89K52whFPpRyh1YQpjTAfaxroTjSy1KAoP",
  "key2": "3rwXM62sdv9VzVLQKcUwrNTvnwch5iVxdWaFJWNu12yXLXq53Ub7HhYJxf277woKKguUEpN4WFhyrNsnjnz7KYkB",
  "key3": "2nMfUP2p8KKNauqLm2eWfrPMr6xFQU59uDHPgWr1CdKarpznGd9YNR2pfVCdNjaZTU6HCYhvNWd63g2eKEsHMdCo",
  "key4": "62vNBxG3pyobadSrbpbGF4fuBbVWXXJxnFAiJcV6LLFQnUvJvSraNFyjMCFzYUzAJwiNFUaZ27GRzR7LBX4HyxMY",
  "key5": "3MryGwFHx4eBQtjUpAD9DiX7kGCJMPmmGPqyaUfybyQsaKA7xm9rS1xuZo4YPDXGbrQJZM7mAwy9qiAbVhiJ61nb",
  "key6": "66pqmQWo7ricJsoLW2bPL3uQFWwCQfP7LbZZMZTLRyaxvpnh8r7AY7TRh1yjkhLVqjWdxKERmdvjAg4JMTwcoYE4",
  "key7": "3KBFMvdN4fttGF9c62HVto6twpcrgfDqMkQT3yEfkznztmjkDsvmjdu2CQChfoUphQvUwTXYWQGDokz86JVG1nAo",
  "key8": "4tZXTr4x7FtZKrkDEp73po1KV8TxsiCWwo3hxUG1eHusWVmEq8M6fiMsqmDmHfHUQE38Q1uKuBTixFTdKE43bbnQ",
  "key9": "4M5U6WNPeAbScKZZuMKJFDid6vgwVpmA2PDJAt23rCdopbHeigNbtsY1zLp6tDifwfiXyySYtQMCssxgafYdRz9x",
  "key10": "4AgNXCceJCe8hjYJnwTE2wx2EgjCjiEDZhPwjJhvw45Yq3UMNbh8wx1aCBAD1CMcdmfYHSVM6jfuhaJr7HpyV8z7",
  "key11": "4jzS7x61kc29pj1aMq5ahtnfDKiEqjEFXbUX3G22QMgo13GpWtDbxd8AyTGCjbpDduxzgXE3qfq6hC2WUE9nGo2c",
  "key12": "2EsEv7y32GHr59ePwqcaMTHG9r4awJpNNpKrk3RzMSwjCZKmV4cNNoP87s86WCELUigSqfieVapKGhdduxbPF7kg",
  "key13": "3FT1uWJHFikV61KacJuf2yDcFWmTTEpQ5DnQbbL9qEvTWr1RuMpKMi14mQuCQkh6cyAj1Z7q36UtMq9XKiwXK28P",
  "key14": "2NNTiNEUo8x4BhytT5BWThq35GN6ND2E1TFaTN1NW4hhuuzsGY22tURZLZfkxmu6qgKDFvo3eAwRHA89B9983Aip",
  "key15": "4iTp9kmQpTutmQedkyvaBZtMLuVzT1hfdJAmaaFCfXzroo299kjhJA65uz9SnYT51v9guU46r9YmNarSTE3LdtrQ",
  "key16": "5s3KKBKyZ2uPfSxwPWsZyVvLzx8KjZmcxTwCnoKUVMc8ppRG8YxfTuhWDJokSUVopBFYBjRZgNbdZ8Z9fWcEbyyv",
  "key17": "52eT1DCmjCneUpSmmYng18Skb25xpEvC3Q92pLejQZCavStzAkMP4uc45L4Gcx38hD7q1sgyX3LnWRaEvGrdEUus",
  "key18": "QHdhCHqo3CgLhfozoEvNjPDrfittduZKXRDLpbwBCqUPMPecac6S97psGJzaDaFJdXeGPZZ2f23Sx9kZvEZxk8H",
  "key19": "3d9ve2H46V7H959fKF3tg4fFEadjSquRa6bk5ZykM5VCjMWYEgBS4p7J15Uc76Cwvb9e6p6Cxq65rpsBNwD6sk12",
  "key20": "5R1BoPNXFfBAxEeCeCaTggG2zaYkMPKNPyvfvNDkVMQ3X3dVRwVrxPyPnbeVn18xZ1jzXQnpRpXA5WSZvtmkqrtr",
  "key21": "JZPtPNXsEjykDgHLbuweuaHFGQGKoLk3i2rc1yF5um9vwgMVJwSZykhiJ42wtSjJ63k3Jh92TgPQRknfwhMPEwK",
  "key22": "5JBsxsfn6PhfHGZdZTBf4a5kZeg7ZvCntZ2tjam9eboHfmWVEx1EadgkjBQLyDJ5CvYSYwhG7KTmdxB8vPShCbVx",
  "key23": "4iQpgHVKGeEJRmx46i4yDvcE4PZtPA3UbJZddUynTXRzPfC5Xe5VNhAuTAEUGd5HQrmjtQ5qxfHN4ZurkDre3PnS",
  "key24": "62HtwXbJxCjxH6Rd6a7nusjXDdxJfX3UV9DmWeUyRMdHghbqYrdz5S3MrugZkxXrT7xRmJr2zG2UiZQdrH8Tb9MY",
  "key25": "35RKnLA3VgE833MUFAZwAyFsGAJPsiEEum3itDE8yQFCNdUKiU2sLYagmo6b9AoickkKctwV2WhTobyeQy9pKSoF",
  "key26": "2icfKARup3NcgcToQriSXxwvEEykJiKWUjokuriN1VD8kotBCWwxvEHuTSL9ZswK9SQgjRSXmfUd5R7cHRCLURM8",
  "key27": "5mbJxe8DdmE3WPGYVDZiTqHmRfAoFJ4fRnGpZ4dannps87kK2Rbgzmey8jhZd5f7LioDL6fRf6Kbnp4aR4dPf8Bo",
  "key28": "39CYGtP8TKXHNpzAdLEKzwj1XS7G4RA3qzW7CZzYaEYJMHa1QF2gvgbnkTGvd5oTQoCd27AwM32eeTin1XBtas5F"
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
