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
    "NPJN3NAb7kQYep8pvG5h1zrrEkXVL58sC5Y9H1t76S5QsXnPqfXWzT43sQVnRXU93ot6TUdVMiez4evgBzupPCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLNcuNvTpudYKj4MUPjNGS7xeW3pNaa1ZKDveLkMAcFj1DtZxJ7u1WTPQ2GGKN9mGJmJVqTjN5XtwaeZURAySJA",
  "key1": "5VgAS9XGwH8BjTBniTDtLuainVvwABRvLHnDQaiCgFNnwWKTVQjLVEBmzyVVSFK4CxHstL5Mf7V69cZPSX78eTaP",
  "key2": "3C89GjAgfV2F3xSYxaj7H2o2wtcVoSzpffiCboNNcXEy5V9ciieAWfcGuYoKW6Xww6BFSDcJoVs9pKjQzk95Eztk",
  "key3": "2rYUHCSxzdzmxF7VdwzEHrCZZiS1UZGD7Ptd5GWkqiR4vBZgLXHLzUJrKE1AMaCdXtioT6RZCdeiCencbzynZKgG",
  "key4": "4iZGX8DWQNPDz2RNJYcToADfs2uPc3H58dj6dJPAHpXqkeqWo7jpHZhWCxDPrEEkGqAVWcFqVJ17NHrHd1zSevp1",
  "key5": "23QMRSe4BZUSTP3KsYcq4P5rva6aDRmzgFdqPYMqa4grnpx1h6ZWFB4wZnRRUJgWvtcJjCvC1AGdEBhhTzZxYfuh",
  "key6": "49XirPCoFcsHvCLELzbUhJ9cHg3xFeH8B5yS9AD7gXLD2azGygj7nPugREwN12xkmTuqRcGxXjQ45ffL9TdCNxoH",
  "key7": "3R3XnpBMpTzHKceHiqHAFqWHeKUFDKBvidyohdQmiaWX9dMLYtJVXjwVkrN6mDrizGVAeNHa6vy2yz74hQGmqVUa",
  "key8": "4HuDR7s2Jo3c4tP8U3m8pajQFPoiSWPZG3EmjQAp1XwgEKT7Nz1Q9SkUVYyKDMSwBTtRiik8oPRD5PFHPoEZxVv5",
  "key9": "RNGqMc5FyxkmFaQ2TsJV1Kgv9AvhuL8tZYrER6vpjq7tMtB1MbUgRoANiC1xGZ1SDcwTYYC32Mf1FQz5CWvsKM5",
  "key10": "SDPWbUFTvwJsLP4vBJT39jcZVG1GEiBht75P2B7AshywzVnCurqhsjbaj46S29MidxjtJU6rMQKzzGEkBR2KCsq",
  "key11": "4nowyFH51GqddF9YzRKqvBn2V8MUcPa6S6KtJJhSsh8W8DxNiFBPJ9stCc8WGs5a7nCWGgsvp3ztevPiWpQzBoq5",
  "key12": "5T3KK1oLSnmcqjpdK4hCbMaiyexSay3fodT3bhJgsbS8M8mLDvV34BcTyUXw5m2VHnyAqfmTaFXm51U1eEMZL4pv",
  "key13": "2oESsfeJngQ7CidZ4uupEUMoxvWHcFrtzbhjgtYJStVYuwkT3gsztkGLcHS3qxcjHYv5VUhhVkpJjEmPjQKPFhji",
  "key14": "315CYGYVGYG3SZoj2aP8DUWu62mDCU4VehgwU3MDGP8PRjVw2U4Dggi8jMfPwsC5gR7LyewhVN9nfcTvXT6LdQ9x",
  "key15": "3nJ2uqDwA8R42E6JqaaxqJp5TRGGySVANUBeVeymMgVyeN8TTv5pAPUfhtoMggX1w8vP1z2Dg3CqcdLezzuyyiMs",
  "key16": "2pQr7NNN75mmcZgKh89LGtGYo8c6CyaCGZ64VzGu2SXBWbMfKCjrvpH1JbyYavyB5RDHX6xhQxGrkHzC9AGdP22j",
  "key17": "513XoBoimg4i4YXmmN1TfkvrFEvP9KLA3frHuDSwQKepT6v6PLZGQiuQu5pcnurLoN1cr6Ayqie74eQTK68mM4rf",
  "key18": "3oLJwqtMTQKTXBcdz81XALxEQbPHNMGvx6rtxw472q6arK48jHxXdf8zuBipaA6H1Ts8nE5RWZj7XUYa13i5yXyS",
  "key19": "5xQFRsadTfmZyaQJ3yZAhGdMBdhkFbMCGf8FWtQSdGKCNJ4vemAgTUNUP8NWxKYvoDfUEDUsrtzNtMDghjegAdaW",
  "key20": "2duHTnsrxK4yi2zTfuRfS3RwbswgscTgz5NN2G2m3tMaaF9gZPfJeq6BWNHVa8k3zMmjAPqtt19DkuuZ6KJAVvzK",
  "key21": "4pYGn5XezhM9ZxyzriCKNkDefAr4aE7aRsgp8roo5T7MGWZumuEvYdN7c5m9qdZJNFBSwzHMPrix9dAKsX8JPmhs",
  "key22": "2F2RULvAL6xUDJXszEZLms2c5mgfhXp8FDvVhX46qZdZacAXoHULAxd8k5TYzVxyj65JrPJpdh7eN2EcLnb7Db2y",
  "key23": "5ETREjPY4j2nW5g6qUyYvVAzVc8tZ8wa2XyC5PEvaW35rxBESFahNvAu8gc21V53aXvhDU7trTcYkrCTn5K9cpUP",
  "key24": "NrMiwhUBrfwSV2AoXvMfPrnGWNgYD9qHvDxvJJ7rRNFtSwaqqw5phf4ywwugcRKLc4pX2otEpxTpFmU4mJbWUtp",
  "key25": "5Q59UYWvxx3TJ8sDS7qv6E6vgdQM62DL6AJ1kHRFuuFTq3LqLbJLFUwPZ2ZYXk9Rfh1NjQBzS7JqsRUWnrAfQ9Ct"
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
