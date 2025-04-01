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
    "4KztdYhthEw9AKoCRtaWsJnZW8WhbMRZyE3aAeNMmFrGSqoDUgc5wRYLdjqLpfxZ5CGNBduWeJckuhGGN82H6SP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dmBdfg7SnL2T8tKNE79tB5qyrkThLmG9xSbhbz7cXHwPTVqFvBLNazvEJC5fGruwrY5pE4SyMsXBYAH9pD1Yy9",
  "key1": "5swerkQFQqjSefaRqPXoRVmddB918YtonDfGJHXMDMTuvXW3wyfYHM2XpDtTA1TSixM9LsExMzTwjjSkqvhhtMzP",
  "key2": "3r2hUqx4quEBCw9mr2eymtYqv7fuKNfuWCAC3UuyvSkPZEFhiWbQey5ZL8guvdNcPYBW4aAnBLB2bgS7Nz7jeqph",
  "key3": "5K53wkchFLjs4JKdDB2F2HxXQfzoXCe6w5RdVUn3VFZgqN3LXungNcaStmHYNBoPooQthSQnZmhVrbozi4StJYEB",
  "key4": "4dc3HK2n1b6R95ZKVNJ9S9yTGNTdHDGcsd22XxaHDnNcKErppiKJ9HtuLxNdYxTxvRdBjpxYJ8sAWU5M89zHGLgi",
  "key5": "5Z63qWssA9wLWxJbygfb1MWt7fy7V2476Anr4dq5CpkVmZjBnuKM6D6WL7ZYmF7t9dMiJ4uEN49SKUt3KnAK9RcM",
  "key6": "2iU4gLbt87yTurnLTFzz48FGXFyKZMibF59NbJY7PW7ymSCvhQULECtqoLmZMmhhurxPMxVEgrNdkBxpWCHmyaP",
  "key7": "ExkJfFWVBjY3UcHUbzDGVn33reYyiFWuXs5cytZxcVzXN31mYYwuFmLVRx2W7NtvF1SUhK3aroyW3Hbf2ebhL3g",
  "key8": "4WEz8hAegTDTAa4Eu7q4WoekU4LHdsAUyM1KFSQFTowgjaSY4Mb3RBs5mCBM76oVXfkaURtNF9eS7MEqqtZBHsmp",
  "key9": "487TcjGKca1RZBcFysd12k3xiXfiiwCx9rkS5DkmaLT2X2iiGWTY74YdutaWz4XenuEK4Y8aiAanw1xE4UUzz9ce",
  "key10": "2jbmTPb2soQc1zvyKbuqzy5YxHw7kKpKGLz1uren4qAAvdB4vHeJ1d6zUNK5oCc44xKLnUZjcADWyP56qNvG9e9z",
  "key11": "5mcew8SnNnsEu1RrLC6N42X9SYQZ4zy1GLvdY1KGhhveS1xsAgjaMeyZqjC8186AeMPSCnmii9rUBCnyJ9zMwH6d",
  "key12": "rjJ4CFQdTT467vFXDwsaDJ5dpgTSw7uWHDivSQwK1Zp1jaa1cLzYYRzN97uuJd7J5WoG78KHrJVDnyiBQ7v6KL7",
  "key13": "256YqyrMAgUj7tZEJCJVGbLHQ142BwXeA1QQrTz1D6g6nwX1e1xMmC3Vqv3BdckRBuToiEV9ekx2yjovnnJcoHTY",
  "key14": "47rmTZhRaLQeAvQNi5scPU4JHtPQ2CghFMBAkgtS1bMct97xDu7UwgKhYEVFjBZShEc6Q7uHe15Q4D5sbx51StSF",
  "key15": "4VSAVJH7S9VSV7VrjCd97o8FkGm69WrdvaCNuaHWu4M19NzWQuprb4gASydtapU7ZLWDXEXcq3RLn9narLFzCnvu",
  "key16": "62wAtAAPDGZ3eD1sV9kpgyydStsXwenFvKPVYuHEjHNZ6mcMrh4bGcnmxkuu7NtmtnBBF7wyA7WbyP8oevJoMimW",
  "key17": "53tKDhv1yT6zc316zMcCeZ7sWVJMA9DLmxhL6BQQyrchQVozFbSbcrQYcnWXTtfMJaMNXgXtfo6QtLccn9SXSspj",
  "key18": "4dbJFNx8Y2uJwJCJh4jUv489ath15sphFNUVYKcVtVJovdaFUBH4eYYyTo2tnR5aN8gg7xDp1LXAdfcw9cXLB7vU",
  "key19": "SYeXLDQR9kwNZnA516EpiXXnNRnyx5ZFC3BCh9bZVSyDq6pwz5vhmiWzuvyDkd1sTDohWzkXuNHXRs7sFwVJr2d",
  "key20": "2SNe3yYshfkPxTta4p8aVf3vZaHrii62kLRkrjE6FtEsvr5pQqhZ9LzvKGa3eNpoaWefMeg2UNAwheYQDUcqMZTL",
  "key21": "2KyNUDqguAAoDurp8f1MxChYHvop4HdsGzovFXy91zRWoyHUjc8Z4Sqeyot36NrzCcbit7T7fjZqAKh45BEfcU9a",
  "key22": "2QYXqXhdVphgczJF95e8beHadA7qbovJGxBAgRRy4trnNtdaNZ9TWFWucmsGfzz8sgFQmZef2k1jjYhikenQHjFz",
  "key23": "2qo7zJSNV2KjEYgfKqsnLJuRmkbfT7Y1Nzn6JebN7cwymZ1XPSrNcZQYroG1yGw2mGKmTRJSNdn6D1CrYhkzs4mx",
  "key24": "3QCdJFyS3vXdmnc8nHFWq6WVFiaj147FyXkHKPHG2Wqbwk3KAcRnAnACcaUNHeshyMmhJAEdzHeURSs9az3hn2DT",
  "key25": "5JnRnKWjW5C3DEMcpT3Si18vbreQksqP13e7W8jANTfMvbcq5wwHTJG6isSDfoe8d887VS4mt27eWftZPFSiC3rH",
  "key26": "4KNRUQZpbWFzBtp268bZNsYWMrR6mdet9DU8Dv49SNKw69e3SF4x1X2gg7mqezrbxM7R7Cixku1tp8QmDTZvYZWz",
  "key27": "eappbEQTTyBEpbS1XUnq23QKMY66wgGsDgErUgpzBd93DC8abZRdrFWaobMzQYqoV2KCnLeWGH8QjQHER8b985c",
  "key28": "3kQSfgS4hskSbsQpEKdMunomWeeThYtYLBsvvSth9AVaPmVxqCZrv8LmdAj1ezDQCJaWV1nKJ6eyGAXLQut2Hpnk",
  "key29": "bSqq8vUr2Awa5Ranb6AXqqy3aJoJdJpfdGmqCAr7wTzeumQr9vivrCDpLM1Yy2nMPicz5xM4M4zVyyWzRceZoK3"
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
