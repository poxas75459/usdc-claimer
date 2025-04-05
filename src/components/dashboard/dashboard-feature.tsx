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
    "35wXNTCQcBTzumRzVc1e2mk5HRLGsZdFeWeWy9dm1in5vxguEPTPHUeJMKfh8CicZD5mCjEH3zELwG6beXkXJepV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a55tV9mTdJnXyp1QUEBEbsQD3Ev6fU94E2KfQk8tGdyyBgF4eqmpWaJXH3Sp8vwXv6Gqbzi2wUWG5fRNnRJwTFf",
  "key1": "3u2cHt7ieqUYQNNd6UVGT6VuH48FxSSxPJHBxgpWXTEBkyhfeL5PdXd8mPrGnRoLkeG83Ns87nAkF7FDyGb3Ab29",
  "key2": "5NwUR1tFUY1K1ePt45Pa9RBEwnyuG19oCSw7LK4FDHSH3z6ZAzv8BR7FthzK2uuCckEikW8nb9ueJm9DBqD3mx2s",
  "key3": "2aNCe741w4Dtbfv9JvVw28AEDqMtJg3rBehWJ9sRjSiqKnz8KJBzqSrZAsXNedYuPuhjNPxD5hq4c3TEyjfKEMPM",
  "key4": "29ynwzUPTsoxG8WxnX3Ak6xF5TdM1cFL3xpoUPVaB7RYounuiMo3eSTaYLBcyWQF6hPHkYCRrkMqkmWpasHpDSvJ",
  "key5": "skrUGvAAQYEk19KyPAz1j1UjLg8jTiMXjrTUo8ydByuzshLv1NyzbituaHn42Qg5d76bB8JCy2xka9XTY8dfTfd",
  "key6": "231SfjxYZERMLdPehAgJu4onBEdFhi9bcZbFa34yqM8dxWmakEb1Q2o8sx7h9jh4KjswzvM2hGEK1owV6kv8wdLf",
  "key7": "5dHXLzjQeGj5ihCUtcSvS4pitiZdh7XJoiRJUNbjpWR4AxDU6ydjgmJFqCfzqqkdSgHKGou6g65XLHec4hwQDHhj",
  "key8": "5hFqg1pCPW4YrqLDkDP6rHRq4xJXjNhcwEuevXK8fXYdLMtpLF9bz4Ho76zqzAR2SgrEWjGDYNj9o9Zmhs7xc5Ta",
  "key9": "DjKwJ5rbKcFNWdMTBa14XwoXznCuH6N9s31jF3voGpDShh2tJS8WX7PkayYmmjGy8WyZrvpi38acSod9PhXVVoz",
  "key10": "5GyCihFdsDninvrVZKb2nZCBxhV1bhMR135aMMuxDfd8ReWRffebzSGXhoSxEnysazYjv9XgmyYzHq3pF2hTiXhm",
  "key11": "4jReFNy7eDtB9xLTLdsgfdR79wsFcpnsMbHhEjBtT8rf4sdt5AuvoLN9rG3gm5EkrWPyGzCYSWfzXVHr9TK1wUL",
  "key12": "3tWPzgx9ReBSCiVYMi6GZTveBXQdLXijHw6HR1N8GNrfznK9hibQYQtwK5SssQrqpPMJRGo6x8KGrKweq9zCoMy1",
  "key13": "3vATm7TBcRVHJusvpYfJxrpaTYmf1ri9cUbPGvpPoTniPG5UHdwrvF9X4iXCWe5rbU24C4mZSLCVDf7wrHg89Fk5",
  "key14": "3tJJmi2BzPKBFUADEBxiYFUkqxzoHavzPqqdJam7jarNuiJw7soUDxjD3U5apzc2QTkrspzPgLDCpNSTC3dpXnmT",
  "key15": "4ct1ztH8HabvPQUpkbS2UFLj7eia9MUYzU5dDAfzLxHCUu4MWtVv57k1tDrgYoVgbuyaijSFwyw7hm9fMXtYbmeP",
  "key16": "5DQ6N7yeAoSs8Ld1xjTXDnVRz7VWG8ZC1gECvitzRe89pfXAZGsF3PxmHUsnUdm2thDGzZp3BvvuPoHZzhvzUNjz",
  "key17": "5mvidpa3y767Knsx7T9ZYVQD75jRzTH9QGpndooRCLQ5ngJ9XhF4magqtWAYhPs8oDgVDgJ64Uyo99u7NbBxqCVw",
  "key18": "5HDZqryBaatqpETbuD4M6yYnoJSwJVC2XZX7ZraXoWQByFa5aQSqZ1MqyAztZ5UTY8TvBv6NcWHscNiWkAsXZjT5",
  "key19": "4xPKHfNSMmcJTePjCSWRPoAfjoFpTiKTPCcYcfSLbvpk9jmxyr6ASnR6iFvJbjg81gmTiWkYsbvbohtAxp5qv7gd",
  "key20": "5H31Gp2jAu77tBcq8x1zSv917aQVPzyAVNePeHoEd4EvC8kauqx8jAiXs5bKyqbmq5yxZGhVdGjEHivtbSP1X15g",
  "key21": "5imcbwWzC54B4pcgAfXzvzPG6Hhh2n7QvRFHphbicETY6aaUht5Pyys5DMDytvXs355akfo76URpQ87MEggaKBz1",
  "key22": "2UzVSgQoQsStuBiKNhrLY76tJVGgCG1FwEjgdoD2i4hz7QmcXs6zUZMFfcYGMCXZ15knz9oKACvRJBY4MM2cfcJy",
  "key23": "3BbspBKjC1JLWvmN9v1jTSvCtoC6PZ1ujFEzzXpMiJxseymmXWHq5dZCFkq2SV87WD2P1sjgbWTGxJHfqcWHZjUk",
  "key24": "y1Thd2PtNEqP7LYKcCg2qQe3oW6obRmEtSvs2mYRKVUFu1r3Y1vRqA84YoYZQXaUJ7ZkZKJz75xDDXtP7GntL9Q",
  "key25": "3345agxzMFWKPQEFfP1sYLftR9sDB72hsWzxWaNhXX2mkmaU8Esimvqv6T3E75PJz1gtvwFHYoXWKXxkxm2ZFovo",
  "key26": "3qGTjzL1LyzivMXAfxEmifdc9vwEHYoJcLShhwwMWskPNGwxvH6sskDYKtNAMdtUBECh9YNbPCBEML2rtS1nFuu6",
  "key27": "U4R7N71zHiHguwwt65uz6Y1tbyusnNFCCSX8mjADhfd58Z4VvSDij3haMdhmpqykeEy8CG2BUi2mM3wzn2WDAwQ",
  "key28": "2vTkTjMa6fsRs7CkRQQccUtbgxWTJJBLxdwKvnyBfzVssWQtXJDN3rkHNPoNo5fZKfEJFyjYex3iW5bDVnWJP1Tf",
  "key29": "5pxWjaPJDmTfnfWbWRkEiSDruqgBF3hPBiFBEfLh8h4r5a7MLSzViDj6YDRi7udFeLmJNqhpeYKN2dXDpG5VbPQy",
  "key30": "4pk2EyACybmLWe7NgYeRZdcrjenRsuvLLJKQMjMBie64onD3R48GoQbRrzdXcW3PHSpgADR5zXXwFfawh1eRVNy7",
  "key31": "5NnETDmWeUBVaVTz2rcRBkHixSJQbykV9QunFwrTdfP47UkyWtQ2ipcmvBSNdqDE8qvyjqHmpi9pQpnTgQ5SRarL",
  "key32": "5ejpaiucfc6iERWeh2vGcn6qGstsrdRnk93k9zqtzmv1wPP9Py83akru8oTK5szYzgFDaFSmd2f534CPPRUvHGH9",
  "key33": "4UgHkcKRrec9z7HoVetbjUywYg4vSirehHDG6AiMF6RLWyD9hXKnw1v2NNQ8y85WQAjwp2GvjxCb4nbpVoG9re5J"
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
