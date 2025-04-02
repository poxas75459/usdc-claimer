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
    "3DFs2ChJEgVziJSfJtuVj1nnYxha7JN3RAJsNHcpudhufRT8BJK1sWEEe2YqSCN4CEBDYT6uT6ttjjWqQhv64xHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NG4NS8bEtZDSzsWU9q8F21Acx8tS4tyUnxoSGY2NTMA7di99VUeUvCaQDyshHEcEWNiEMRHKy5CcRYDgnA7ufLg",
  "key1": "2gd6dAv6SK2V2LnhNPvH8JAnSSDWQbktiguG7isr7UEHx8WMznoHJK6EVSseV6YrZrv3j9Mzv3fcRDhQnPSoYoq1",
  "key2": "3QfqvReecLdR2iKV6YG9SXiAYTZ8r7kfTUW6endZt3f411p3dGWHJa7Avo5uCQ7e2DTiJ6nnPcKFxmBqawsMY8Hq",
  "key3": "5DLEbmxvnetiZmxVhvzhAMmLqXSvHA6TM7Ce9vFJ2SDC2us6HMmHLsuV9FLajVFEVCkfo9KD4JTbqCaMCxQARbyV",
  "key4": "2srNXNfBfgCYrwYk33oKwGsX6vwQzhSvLfuJsx4rysqU6pFQezYQQPLx1r2eKpK7YdnkaqDvGdoYWHQxeCtAKxWv",
  "key5": "2NHstVGB9d7pJGuHK8JnzYyG5wy22ZTZ4pPvrQDd6UXgj2XuSk8zURm6QJWLoFfXGbgrHUQSznSQWUC36jz8XRni",
  "key6": "Q4NtCLMea96JjnKPovxzKPHBP6WWECnh1Qw1vzBdJLAybHVCmzr5HfuG9VKWbtHDnLKJ1UdBSc7tYyJTapp69WF",
  "key7": "3zD6sCgAAUebVcPEgR2boZ17AY4xBJxbdrjcbzgrpTwiegALgvxMYGRokF8s4Dg8BMnyWaKTi4Ah8vzTUTdmJ2KT",
  "key8": "2dtUSf4H64P2HQdumsQ9cM1MKSjTwCzMU5Aax3E7vVHmyxZrDscyzw3hNhAKcHdNnyThCHweB7xZso3mriF6xymJ",
  "key9": "64vU3wWj8QdfyijyWVJWq9xSDiH4Sr6oy9TWBLcTfwN856iT5YDJorV18aPwJDakoj4hfWZpQxXrJ648taQ1eHda",
  "key10": "4HV1EKY5oVbMYAtzKqxTELJvSmgRCjV4VR7F4rdTQkYHv6pJCWLKqnNQz212KNiuVdcTmMwDqiwPEoZeK9PKkpPu",
  "key11": "3NRJX7A8rcQXhivoZMBoPagKYaAmDZQyYCWvU4CN5THj4bDCPgsPQdv3nNXgQMfBMJgmQECagr3GY4MMoKFN2nr6",
  "key12": "37rTH4iaAwaJ8EZhZ5fGyk4ZGrKKjtMwEiutLNW9TZrP47cA4c8mkc93VxsFpje17so8pVViZruU9proAjoJtYaa",
  "key13": "vA5dKfpMbHqUMp6WdDWBrPbrLfEgSUE72CCTs2gZVozxxtuT8TC4XMywRkSTnZpFARrBG6CkxN8qyZNuM87mjXr",
  "key14": "2Pdf7Rf6CjQNZ4LgNXa7Q2M2iJNKYLXdaeLuTbicXnwRcfV6GeUC79Ss3bcbt9KUzxKxPGoYwQEfMME35nhNPwjb",
  "key15": "3f5p5FH7khizUHDgFrkYFhCDgMAs387bvNuiyFd6pSfREj1KeJYTgWyYmZaAUDH1dJi1nk4h77Pp5AAVPyp8rwp9",
  "key16": "5roJ2rdHX3rSvgpLZPHuoYqcaSBgaznjPUeX1gqthcfzmAvQkyTmXX2gtEkHeo4TU35yk2JdNb89KdpQfnKhetPo",
  "key17": "4ZYNQ523gT9ZHcAo6YfbPPh1t6AfY5efrLkpp8oKtS6AaY1tsJWDUUQDvA5yhCY8QUUGUtmjpPwvQtdQb77kV1WC",
  "key18": "4rhCjuCytbpSgW91BDe5RB5EakiDiHWQrJvQfywze6qWXsCMQHCgx6bLxoecYgzLiLWBQjUpLKg8wmSq55TqnxjD",
  "key19": "51qJ7rpqCQKRaamtS2kKX6XvUC45UYXFbLKsRXkDnpk9rPmyC1rvnarLTRp5FMLUsWi9H285BabLYAw3yvYsfXNn",
  "key20": "2zJqs69wzQ2MLwTF9iRYPCfocVvyaVLtNF3PuiyevfpTdE42tuod8FshrSbWn2RH7mF9TNtj6Jwc25Di7uvWp5PU",
  "key21": "4tmAJx1DjEgjENj5agRpyWksZVUWMr7AnQShBgKhHJpAJaRdp9BNZVftUzBiWKPpDCLZ9gKqsgww6KBc7M6MwYQR",
  "key22": "3RsqBoxwFSHW1VSAq865HSqNsBGJafTGHt3tiq7MbV6qBoZ3DJmTtQraeUeUQZ5XVXBvka5XWKVRr7mF7pEgwcgE",
  "key23": "BCmjDoS3PydDVLhMtqNevsMqCaLUqjFqh6d1FKQSvsan7Xv2AHc1Vdec5gz5tjbNq8wrSSZkPWDPgmYdtSq21CP",
  "key24": "5m3C6yxfJ6ZU4UBFz52ajA3XZbzoBCJTL4wV4Ms6zWX13B7iQvyYNVWzAQpVaaNebhkTFYMpUhCwfXRKz6824SyY",
  "key25": "4S18DYTVfbnMyr5QtJhggU4zWiJAjW5AxVKMzg2ZK1Dnqcujwzuae4fsMbHR7VtFokshfngwkK8V1HT34WwXd2Uf",
  "key26": "4pKGzgUFnKWmQP3X1KvJ5QtWEuzsebvBqKVPFkZPcmpzcdA9GhRwARxoar9XyhW9r3JpECVhUEn8XvCRpzZgzZF2",
  "key27": "AuDvtrmbM8MudHA4cs6fkxaUpjuLxaXFx3k9wfogEP9ykn39nyNbuxDPXTaaBbs8FMgXKtZyqUhLQxigpsVy16C",
  "key28": "4Q7eajycYjyb7WACWTG8YHrTcdnN4S9agSchzRjCKMZ95Zsg94HbpC1pf8UNybEP5DCrC7tZYFLSoALNehw8K9DZ",
  "key29": "5z3CpSznUcnTdANHkGFvhiAAZ7Kdar8EoAWYPh1hgiBANmRkbxwQE6Qcyaw6oTx4owS5xMvYvB5wedw39Np4yDqc",
  "key30": "4G6a4idVGwoJA3nEskHsc1nAGdVBibELBDDgwM91N6nJzgJYvtu45WJBMbAd5XnQrW3pBRio6a9KLz5UAHvbJotr"
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
