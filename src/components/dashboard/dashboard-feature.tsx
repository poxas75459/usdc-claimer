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
    "2cSWSTxrx5132sJi7iEsp6FX34DM6GnXJXPjB84CFTiZYmW1K4vU7X5sv5LrxoLXveBR6R5hHSEdmGd4HHWZEfsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8nmtg6FRAVc4HNmMb1CkLmfYHYowQWxGb2EuHsXrLmooXEkNE13MGhzWUas17xQxSJHHCz58RLFcrjrcKwGH7D",
  "key1": "46eEpRmvAEYjmCqb8WFzs5i3UBwhK9DSrmFJt6UK2LvNj6kBaTX8gpbZpXHwGBgtkQBd8FJv5QTnbzhc3sggQ2cq",
  "key2": "63woPPAczhUNGApoTdoacDTfrirbgpk9JpWvRgjhZmNvXVAnGQCbZkc9Pi2vvshUEiGkxvahozoU8yp2z7qTeHwD",
  "key3": "9wU62bcjdESnNTgqjdKpdbB8HM44VD3Urhq6fdCRfNbA9smD29oHqzLgmyr9cxzyRcmyNxAyRdDUsQjENY3PJTr",
  "key4": "mWUE7UToScFVdQerTvvcwFHDEhyAnRD6MBY6wnv1VfEnfvV5PngV3GqQ5ZjCWu2BwCGJxnuy5HaJcKKLqy1zyqt",
  "key5": "KvS32u7wwACRMviYkrY5jm9PbQd8xG9aFoNxUZdYswB8S5JQ9fRmaKXKLhaRorPRop75Wp9sipyY7sGqM37AB7m",
  "key6": "5Qdw68ps9WZivuRDjJQw7bhfbvV8dWDtvc2FYgSusi6qsmKibAxwssB1mFAAuh9autAiWg7JR1srzEzwCvN9iMkG",
  "key7": "4Q7CgRnjWkhuhb2xTtni55m6ngYRbLiyedgBxiuvqbGtpz399d5gHmi2XjajTQvfbuhuftVkN67ouLRnqn29bvf9",
  "key8": "4mVWCmYNJDx4BnDUE2ABL3wUDc1vwzxXgg2BdtspMaWPViDxRsoE9CJghC2En1jYfEwcB1UK8LLNCQyjgzfbkauu",
  "key9": "33ot6kruU8WT67htNX8Fgn12zLpCyJqHb6vFZe6NTtMpPvWXgYDk9wmhGKaEcr9u3gtksDzBKKmewhs9yukREZMm",
  "key10": "3GA7RVJtQdSAV6tPibxkUnzpznRxyWCAxvEoRta1SiTdpnMDprYD7M1Hk5WXEvpwG8D9HxcLQ3upCinAVNFEX4WC",
  "key11": "5NKfoD7kKECeCfBAPkvYgB4GUXYENbDCcFEHkVUArNi1DqhPFFJPQvS2sFWC5LLKUd9dgDeaMFMWGqHdrVdDXDAm",
  "key12": "5bFHXq8Jxmuz4dy1v8ZgS7EjS4HakMWEQm4VZaAKWygWRwHQPs99pb9KdAz5Ny44gF5pR6xDzniYpDsPXWvszt8p",
  "key13": "2SJmLYqdMPJ6ro6PqBsdKHfW9i7XZsGRpWXhKhFJYuDmM5Meu6YfXUBtYt6fSayiT2A8yvuPxEHTNsSvUQsXCE6D",
  "key14": "3hckQQiuogC5FeGqnckXdbbTYYsaNZn2tkfGCdN5R4KFmi4w6rY56GQX2ahCDbvFa4vxkH6SHrshNHyvVUbS7Ks4",
  "key15": "2v6rMJpHp7BPxTbPNR4Nv29CYCmA98hSbqDB7yZ53LFhiSDWPnLKtTrX1D91Hiq7y7rJedmCzBJ1xt6TC1KJD7Gv",
  "key16": "2vBsuaUPfJNaCBUoswycbbWFcSEpc2DjGruEJM83yhyw8ipPCLDBU9F7cz9jFe6oTBBBCbcRBXeJR2kRXvLjJsBh",
  "key17": "3xdivpBE9xbmrUXW4C7k1xzLRUhuzW1S6eCc8axSbGPEd2BAR8mMba3oi23XKVCX4s7evfKFQrWHbPJ1YE4mVPNr",
  "key18": "LyDUoPbq616CDF8ooqLLYCWUrgEYd3MoVEYj3H8oG1SUM98ZdKcEYbcyWPCGVJPxXb865SE3p4oJE7wneDvUf6K",
  "key19": "2bTDz5WFrxWdvDYDSJNVRBBmkoJ41r3BVqT9ZQ3m6nPi1ErzL6ghxg1zUtYVG4gg8H9jNdbPYcTRoRFCz96Kr5UW",
  "key20": "4G8UFDpqknJZQbpHQZjZS8dnP5tK3weHRsTCePDvATnZgw46CpFqXeGm9PDgmuziATFHhxuKyS47HgYwxvEBDvRY",
  "key21": "5u5NxTtq7WdBsiebpuz3nDijL7to4UxUQhSDp78HhTx8AxqWhQyewRGqgjYKc8KnnfTJ45coeAdZvnP8RpZ3V7gz",
  "key22": "2NVyk2CRAgJWHkfpAtvNpyuGx4P6NxzGudQiganf2jHw6kXZ6TLZYM1ESioStJEAMadniFEqxcGvJXJwopZy85q6",
  "key23": "JG5x9sMr9uNUSjqGzfDf7m8LXf1MYapfdqdLxmMu4hNCjN5MAz64Exvo3QuDM1DPsy2bJY4faMeeRhafiHhE18X",
  "key24": "3hdNaiNLi9H4tsgwGjttFW7QJD54rUxMREkaerWRsrZckGAHD6p18F9GZECeZmAWmvYj2wgBWThwLP8oYc3aw6ey",
  "key25": "5rbu6dDUGgmXh6RWiJ77iiB4VowjmXwRDhpKvgSR65GqFyZ288L84vHPxQpyHefrVbS8X2Dz4Q8FAtpPcKxKN5m1",
  "key26": "4atBrGj3tXu8BWnK5PCskDjQ47bPiC1D233m611BY4QKd2Ut87XQb7B5AokJw9sBsFJWsDhSTVXRhYwM7x7G23mY",
  "key27": "kVzCWzu748JMLfVGPgz2BGKpDiZCrH1ELrb4V2xwvuTmJETXWZJUxHtgR7dujSSGjXWnj56Knd8wapBmjwLU24T",
  "key28": "HTBBtonqyrAuBUnTbssHTKUYope45oP4yfNf1QqY24VsmN3EdvS8c7bb6upNEjZ6KWeenLQXQHQPUvft1pANYSp",
  "key29": "5dESYg2Ecp2wCHyKnmkHbH3YHP4fC7CqdFjmS7omYNZ1nuuuR8wtS1a9nabxC3E16zJVQCMEnZ5UtaNY18nKYvh9",
  "key30": "4yczcQJiHY3UBaPTA1ajmwsAMjGUMtvQHZqfV5BhdYUeaJ5KY2rHNbdYKYeEmrt2U6omHp2mumydikfoA7uN41qj",
  "key31": "3sRkCVUgww13fVZgoZF9oCA3gsMs5daGWEPf6MBxK2LuQcch9HJQYucQjQovTbaoQzYRE3sDipoyYGYAop6W3Mft",
  "key32": "mbFEiiwHGF8szEKaPbHc6X1cQx7VafbinkkbMFVcyT2cGvaYvQC5Fdj51NUSyoDUKWszL5zJVGhzRcFwvW3TMAr"
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
