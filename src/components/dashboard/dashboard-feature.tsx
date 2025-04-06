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
    "46nxRCdDK5M48vaqotjY69a18xvz2AvN6g3JHUwRQXxuPp9ioEAc6Y2t8rMxueqtE4DkMobJQ8jTNysNk9nRAFLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkE2KGoKAfMbSBkoc5zEPh8JW7x3uZEgb2J4JUrq3afckcVAmLSqp66tKmR7ZLMbGLcNR1tLJ8D4NaLVwo2oJgL",
  "key1": "38EJXxwvPFBFtMxAviG39MKXtBrGiP2B3j17zbC6miS9hbV2o2YXr2MUi4xJSVHWS7bK6KRpQ64zoswJgCtDQBTh",
  "key2": "5jKCm1SLFLATFRkN6DpRccpWpgPwj537fNwB4a5uhiTCFP5oLPnbsnomM4nYsvnGVZL35sPneNfxtQ29ANBEibL4",
  "key3": "2JstSVdtxrPvqDPwKqTVger4FFKEPjvF3WLLe7ykBeT4AZapVoVtkc3y3E3Ya4EfiqaPjmVABEpPnMJ9tmG5T95E",
  "key4": "5hq1pCBzcBJbHye8TA1crhqbXc8JgmEacVWuExGMvrD1quGbfEJLywBe76RtsimHgdNR68KUuH8EwKB4T8ti6i1h",
  "key5": "3EFqKZfVX2ESFeEc3SouEDwhSt8zvLzf4MRJ7ahnjgicaF5Y7AEgy6wikMXsK1Y2BR4EBgHxkM3rkEyQUntiJtZP",
  "key6": "5tMKm5roGTut1NycuGKHCFf6CysojTNQSgREvBwzFCda8JvDpnm9cyeEX2CKC2Cq8DxrRN8MAk5hHCeaGDWhWEqy",
  "key7": "3JBzmB8EowHoDWiqYMsDaFqjrdhzaz75pHQDFXSuocgHVffVa6J8co25qnk8KwoeZLDBRhMgnGdYRvUUgcfEgfuC",
  "key8": "2aXiT27Kf8t7QKFPzamKe4uo8iVhuwig5D8LqqMkvn95hgkTWYRKWZLPan66QWktVkz3bfg8jsZ96nqXiVF7TDim",
  "key9": "32JjuoCyHcV1iS8zNozSnijaBvgsM12F9L4xSAWP2tbfryEnqsXX6oxoRwEF4CrKZm3WSv8gnSax7m4CiLSTJLkN",
  "key10": "5pnpD5WPPMfWJiVuHfmBvjwPT41zZxLgvWVfmyddayZRXPs3Jp1dub4giQDBJeQAQnfEnJXRSGG4tUv7FzzWfxYX",
  "key11": "4dLDQqb69VtsMmYTF58Vj3BVzgJsjEYrweNybGwBBCjopnbdTNxNQ5ySEqmrCpFWGWuATdxFAuH4KN8RqkCnwNEo",
  "key12": "5ZqrhquEVA1J7T34muyfJg6hVc6XnuWxiLbmwEr19AeNetNUrcMz7i3cx2V1oTarV9MkhoNjWVcUvTUf8KhdDtjN",
  "key13": "2pBZ6fs5wTSoRAPw8M69TYda8CyhrUh4HykExrZqR2useq7But2FzTeis7C9nsrgwFNTNSUeeeC4fH9FDvN6ULgg",
  "key14": "2chYcfxhCxcGmqiZvoEj2KEU29kCP8pucSDnmMPEkX85KE2H8dn3zh7Bv5UB4ktG9UxCnZgUzGivVptMc7ycNc4L",
  "key15": "3ixdYu7oQpRyMtas4gGB861p3szqa9P2KzydicpYP336UG4XuqzHBkqovPQzbi3UEoc23ZgiMu4KfY5s5aPGemGo",
  "key16": "2apfQZZSVrsaMpgtix1QiZv436iEwnk5JFhjGX36BSDM7ASjXxQoXMXq8bBWJsisn7Ftc8j9rqivLLwhKVc7cH2S",
  "key17": "4Pyayy1EavUhrGUnXsEpjzWMZ87nJ19UwVMYL3RfDVP45wGUT89hVJMYgA3hZk7AB7tN62Jk8vG4ZxJLdezzveyt",
  "key18": "4zMF77Yx1Hg4Ph8twPW9Z7imLamppMGgAoX9ZX9gppcPfMGKxkQhUmFHmGdnHRpbx99u7QChiU9Y9XHYkMB6FTak",
  "key19": "4kJFrFH58x9hmVj28qh5JSxbPdG8cnWLrcSSNSLLkYquekkG7xurwPjLP1zNM6vu2wrSuQBfSmBwEfATPg1zbNpy",
  "key20": "4xbEHUnTEPEYG7mgMNW2i98gF3G225JEx9vELMEWvFjbQq8KyzPqHJZ8qtyvez4icHdPJRPua5cuAgWhyqoJzgXi",
  "key21": "2EZWYWTTUBEGtBwAzQi6BGCNc1RnbThuYkT49SaLw3U3jJrYaFqq3eDmBJw5ptSDdzVDA5MoLSZKKe7y34RpDUWr",
  "key22": "2eyzwiF2cS1CxrBAVi2Z85EYCPigineMv5aWbMrvaC1hBTGTAZVEmHWdihJcHC3Z5bZALCJug5KV4V4wXKM47dqP",
  "key23": "4pJHyWKRcrFtEcJREUDNCjuJNyZNeaAWzM82j2StVVfndsSNrM4XmFdjZjnucbhFSQEp1uZhtEnBNiAE6LsVSa8h",
  "key24": "3LTTVptK85vzuJVN1oLog6dy2c33Ldy7FBWSaYpMbPfDCooUF96gg96sBafv1FJ32PF95qqFff4wkQpztcbwZbt4",
  "key25": "5XxKjP42if7KubossoxPQ2jTmkg7Zkesa6WCnJ87zS9f8hqYB4xC3D5k9kaNyYTH71W5NNx6z4CCSyPa38Uvmp1i",
  "key26": "4dgjxAYnbKCt8Tuud7UMcRVD7wcdhVeTC4JpRAtVcTCASe9WNRF97aKdJFUG558sZThi8Cof3EkhYcheW7oPAVfS",
  "key27": "5iT8Dm4YKNnvDcAvKasfZnQ8K8qpErxAYYqehaoCQVVC8i6VuJh6wQ89cw4dxE8hoMNk59yXirviJbAQTXghKvQD",
  "key28": "3uXarFQYNG3puCodpCaSQvLAZ88AmH92tVoUeStHGLosKqpgDz5es6awmd5DkbEBR94ybWHRrXskbMJ4vEA9t5j1",
  "key29": "omCHFQTZRdNU3AdRNTZEAvuUB58aFMFA5KRcvQ7YmbpmF6XqWhNoGQqr6nRUzSWNhErCNjL4LdPmgf9SHoJ5dk6",
  "key30": "4e5H5gaNXumgkTnoGJ4enpeVNfBE9y2jBVNrzqsZcU4kdXGg2hi6WDpXdFBEeLsDnRwmHXNmCMCuGUjF1oYHASXA",
  "key31": "35gJWBrWwoNqpLNS3o76VdDd6JdLS4uxDo8xAJuE1aXsPvpuGtzQybLXBhTXrMpUGw7uXDXbJxitLgrdVJvz8AF6",
  "key32": "KdVwARNpTfxbYP5PQBpY3gpAzkEcSDedDK4YkJEYA7WqAbbHAcsgSLjKrCRhLXyuETYunFNW9Km6xdp1TY2atRB",
  "key33": "29Ry62WCJj8qXjepuom3hEUatYCVYhdvActqwMbRm4skTdStG5TnNp4Vmk95FrgVry83vniiPfYS8yJnKtq524AL"
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
