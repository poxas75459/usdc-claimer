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
    "thnhJxD4jnCKmn1Vyh1GPfqrXk81y51nKWnFDN7ycVGC4mSGNpFP4YEUEDbdqiqKdU24mtPZtCRSMYd9sHhcyrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MQ3K69i7znYSyjs9aPYT9hXp4L2xYNefRzeh6vj7AH32DvkKXzQZpqkzbaWiFMvv2dbhdU4t8ds1HPxHdyTizh",
  "key1": "5d6Wo37KWPReLnka38vr1eyoTSabhRrYedCK278EVWSvPeLN9ZDefmz1s6QfZM4tigP51iBjTLiEb3pMDyhcxYXH",
  "key2": "v7ZdcEpQFeP5pJ7DfnxM8BZZtNkJmxWBpEUCWu5BC5PSmohmT1y9CsBHD59uXc4FpFkYEZebpAr1XodLsjzL8u1",
  "key3": "2eBnC9vjaR9kZXD5MY9Fm8ti3XWn5qbP5sHgEY5PL5sVFDpZTMaTt1FTo4bgFkXrby2b2AoKVxqZuxdwyaKmkFMN",
  "key4": "8E1xpt2YyYsyJhYVpGqXPeH6Xw5tEQfWqrhq5ZdM72FPsivdiyDCWK8ahVarJHGxhBo3nzSV3TCVduWiSfZR7zu",
  "key5": "5FphXG8gr5eNLePc1879deqcZaJQuMtmzWQbmTX8PaHcJzRXvEZuPJozHxGGDQCDC5u3FPoeArzyavMdj3wQEfqZ",
  "key6": "3XburzRDM62YeW5HGmyrLzoVuEgaB1N6t2bqUdPRjzroh9jrtir5auG2s2vKgkhFWSdzJbEf4i2RFbiCMfigAqrt",
  "key7": "5RrWWuUB6SZ5pJPTFz6KjLSC1keuLt38Wu6KdbbMZJpavfj8FPKsmQ2QSL7WQwMLzy6nAu1G3t5Py5fsAXujJ2yX",
  "key8": "4iJ171TPVmJ8XH4BkaWdkYnS99UxBMDmsC8nQacrAuZuZa39PwSg1ZqFVQHBqQX2WP98Gbe9bmsLcoxcvwMAQ8Ui",
  "key9": "3ynbnZQtwydaqFzML4bjCiFmWRw2fb3uJ4AM3J9Jn8LR4EcZZ7ong1y7yX3j97gyS3NTAmvWCnotGpXSuHC2BJ1h",
  "key10": "38c3kG7xpj3nFcJXTshEY9oe57Gt7nJhCP3tA2WFZD9gDPdvGz1d2mF45Q8V2wxRnJoYKRQu1m4cygJERddJ25BN",
  "key11": "26dEz9k1XBP8CBRJ8Kk8huPzNizD24xwBSdjyngFxPRFtABX7uSfe5jo17C7VzC8FLRrxR38RSWNMDztm9tX3KZb",
  "key12": "2PgjS4YC4ePv9HDxCTgVrnc4Xk97w7q2tqW1yaVc9PErta7doJ5ubCVWqYQxZEKEuJT8Wfof1w3ELtyRMfbBcE7F",
  "key13": "5pwTaLSAJWQJw1ivwNcmZkFqLgEWtXyn5fNzC7DfdChtGQVQiCwGyKsyfiPTaCudrbYkPHUmfJ11rrQRsMqBgqEN",
  "key14": "5iQ3oVX7yiFmVtw4PHNkVeSj6ssEkixXdmhz4uXeeW6iv1y6bL7HqAX12HSnXXAgmqb1fqgrjGB5DPh5WMckHmq5",
  "key15": "5CHzRvAP3QoXgf4dsiY8YNxQ9B4tntwMYr9ykgFvC9TpTYpVkS93iLogauTCnzVTDSSt3LEEgTEk68FW9PevEo3K",
  "key16": "2b6NHH9MXjxwn96uUs6Jh5i82C6C38MYEbbXVygQLXjsok9z8j4AXzWK4QZZSLHTvRUP5FQ1WpgyUsTWHsEQ5wRS",
  "key17": "SpJLKmQHXN2i2E33DJgUukmi69dcrrYmwqMG29xjBL2Jr7cM9ofBEh8C6ChKaPfJ43xVcACKxuF2pvLa8MgBWBT",
  "key18": "4J56T8Mu6sy2u1o2YyMtNjLMAHLz1ggd53Rq4uLYp1DkEEtfN4tQmaGt3xSeygsvCSo7sCt99eQ9bWBYzpbxiNAW",
  "key19": "5EJt3fAEAd4MVVMYBsHxTv61va7KbpEx5aRbfe9UoriAiVR8oGet8SBU6fUqobrgwkozm2vQckdmc74RscKMSqeX",
  "key20": "4XAiRhiHzn1QTkSZBq8wePJ9YVnD3dixLJi5DY6DZ5CZcdWfyfUQLoHtpXHkoMF1P9QRV1QYeorUEs2khemqXtZV",
  "key21": "22cBeUFE5YovK1uuZ7mMqRBoYVevtY3eCAAd88sQsNZnJyLr9wG5yXmq9wdvMEJDCkhGmYcoWszTyNhw56BVqEXu",
  "key22": "2pj7va8jYbBsQLdg9TxyNskQHG3QCjhzAR72iBMHGr7ut8wEbyNi95ExMEK59oc4v5zBGh2sBAaYnE5ffExDT4vB",
  "key23": "48PhW4mvekB5wFH11DLJjKKBQambvUH2HQ5y2CiSRjfgigX2KifCL9cxNxoTA2NYmKm53gzHYZTids85sw81bo3a",
  "key24": "4AdWCG8ENzx7mfDRuRWiDjatsi5VjJbQDG9PHsZno5ngGPPjtvn445Wx8PmsyTVA3hdLBZ5oVos3ampC2rrztjyg",
  "key25": "5bbUG3r75cG8x86dhemWP6tUiVNSMLj4mq8Nt5MjYWABQvMnoQEWHV6Z1GnQX6vQEvghJ2xza2pBBekQuih8pFnm",
  "key26": "2iaHzvEqbUCvgXbukcbnnccFev7SFdw2UMAoW3AXh4uQcGixRTSJuTV6Moyjuca7Zbyt6m2Mk5zTovAwnuP3a7Nx",
  "key27": "pLhLgyh3LRQC7sQbouv1HHokbLBkoAvfd9M423PB51NMHEzLLb25c5wmiiwp8fzqrrhsdkY7V6aqNizr4FQhuiU",
  "key28": "vSn5QH3cdTg3npg9yaKxyLB22t2Tnfyr3xhZeFNLwfP7yoEjzPscy41iXE6BZ7TEtQ1XDEHHKBPJZVQWVhvZf8u",
  "key29": "5xBdEu5mjoKAB2jfabP3tF2iwHxrWeMWzp8Pu55vtCf1zT8rHFa7NEwAsZFbcFw7NMZ6x2juByPbQm219AXJn19Y",
  "key30": "2MtZtuQz1S9KfdFVmYkHSfTwNzmC1KyMXCZ4zQP5YrZYLK8VNkSWLHrEHDtj5WZyJDwqQhhjLtuEYHWhyyGCuhJn",
  "key31": "4xtYoxqu5BHHzmTZhkFqJhQe4EYXsY3N7bjwF55mnG6SL1kpDuAwz9phwNgeHjeYWFgt98mfGJdZZF6Zj2p7W34P",
  "key32": "JshQZFSRkTBbb1bVzxEqKAk1JymFyY66bbFWGSuJPuWjdySSW4ExYdT7MURWjYo6CxbFYo92VW89iJTnSUDBJEB",
  "key33": "gggc3p4VDHEnvN2t7hbBVp3NFm36ozWg5KTsiykhRFXPceD7Dm98y3HNK87RzTEvzm5qWbCYf9QUqXDD4N2Qbf2",
  "key34": "4Ajr9BHupNTexMbDCFg1GiE88izgoVPhB3BwaKMbkz1yu2389qjWfMCNXgq4u1wqZoLArJFSqt1jQTqWWVsXwVXt",
  "key35": "Jg8gTvk6TWMpCmcAc4Ask1p621QXdP7RC8hvGzGGwkWY5NxhfFBH8mCfk1TSKWqYZVTMrtLMyVttwzsUChWFUiv",
  "key36": "ibVBLSMHomp9o9WxqixBjKSHntcaCjHSLQjje9nwpQkrJYbWCv15uRtqMd9d8mP98CDTk5hgCDnE4VeTTyc5FHC",
  "key37": "4tv9K9e5SRPd6QfKnsNuP5dzyLyTqxNMECHcKisJ7ujEgjUCvCXHUvXfP5vyKCEmKp7zBHwKXc2c6fgc3YiFTyBG",
  "key38": "3je4x2o1esKyZLGqoybSFssUc3EHcbpF7VnvgEhPq6pqs98JWJTpSdDhvdzAsGigdbjHAzuVgM42HeBmuDSvp3ae"
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
