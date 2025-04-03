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
    "5w3xNzVZijRD1bF4W5t5D2iZ3SASGtRfVyGAV2HAoEjxh5xKibPzXWXnDzZrGr6s3gReUUt1x9fxD1AdsHtVCNgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdDi2nrakcw4q2KsBa8BA1cbkqz2Denj6DQZw6nPHhzubj6ZrT936aBWu92WbUAVdDcZa67yqXGQsmeaesF7swe",
  "key1": "jmZiBr8u3hPBUFcFKrpndMDvnwSk69AZ8o9ThoErS3uh8rJx3aqSFQg6V6wRvvMpx3Ph57ZAco33Z8f5j8RxgAP",
  "key2": "4DJjbZnN8jMaAPQDLCYCiYz5ztdUpsL8RimHkm7i9LAKXdproe3mHxG5n8VTsB7seXr7gcSRMvU6ajTAogisQRaQ",
  "key3": "2Wt4tWxCBH1ytXHgLvLPRBDSNi5Wo4H2bkyA6Pd6GbWPxoTHzDzdzZGHX2ewdqSrSi86dqKe2ajXi9rPNX8Xj6TJ",
  "key4": "5mwwV9AsRqAvbjsQmiYitd43fvoggfdcXBuQWeJWjXE3Db16bM86JADUce6nBri8n4dmF6oiKPggMmX25UvVKKg2",
  "key5": "29wR4xy4XHPZvdQFcWG3rXrtH4HzqVhkVEW9TT3M8ji2qLHjghrrYyDEy3KZwJG3yjrbB9ffunr6sCQpRhh4KpoZ",
  "key6": "2mSKy6xsR7k3RTLA7otYWpeKB4JkqfWpPk4r4L4R5iFbGJaLBeG7hk22kbUdazRQg77qp2LqTDzeSHVzbxmgcXN",
  "key7": "3SwmnqR9gN6VaSafy8CeEraTkVSPuMXbdciHBsQu2k2roKDs7bXC7QGPWBcpQriQ3X8e4Gd9k7qhvxd7wGZPMAf5",
  "key8": "3M6Gz2sFJ3QPmVYngZ5UpnbFRdEjpZ5b8K1QumgJtXR4EgH8isRFHWypkTej16eFTpmHiVK6fEDZAQAu4SkaG6y9",
  "key9": "3VdsZB9YBzGjNYoa9VFv1BrRxWx6p8XWxJXE7mdi7RCBCHtf3bKf4Zt5twr2JCme4nBSXQi9xYJvwuybJnP5FYeq",
  "key10": "41WceBNFLxDf6ciuNFo9zFvnz9q9qLZbpjbpfDX8hhJmSR47BTPTRUjXAUfHQ4EwSVnd6B8Jq8GpgivFAScJQTWt",
  "key11": "5a7iYjjXL1AAfrLLu6oLRCR4UZcrsxEhhUPLT9zipUYh3xN9g1atpwPnuYBGLYJ4FCfQZz7TyH4cnKosv35t6TPM",
  "key12": "4usKRd2HJEpXrDk4oiL87XcLLFFEfugScCAVtwPmpZaXkYUKCT61Khv23ygf6U5QU9RPnV2LGCjao6TiwbNMdTWZ",
  "key13": "4YQZdeYHLGj2JZc9Cf97dkWZgYzNpJnWTJTKXHs52KcBqEJ434UXwN8DZ5rynV7kxmnt9eSiKgAqSsGsDGjS2kek",
  "key14": "39TMy97Z7kAxS1C7nGbBENqNDYBP3UUaUoqG6jEjVhz1vrWaYKZEb7f8929SLNQb37BELUihxKPzCX24NDyVM8kh",
  "key15": "4fMRVC9k7WHgAeTJHDcbhkW3jG3Br7ziYgpE2fquPuGexgDVd9DvtGTtxhST7TKKwKr447hg7yDw4PueDUR9PciL",
  "key16": "2ifFPjg1FTDUqbQoBYXGJ7DKUmpEZyuXQmym3U2RREaFk6J54cPwTFhuYtj2pAN1gJE4K5DrtbFgw9vNG83vzLu1",
  "key17": "4aV9iR96KJzXAZDUmAafTmy648sUHy9afGwsuizX5xFucqAj1bw57M5jdWQtXtQAvffL4gdPb7SsoYYg8jdcSKf3",
  "key18": "oTy7HDLf7AnF2Hqa4RdfosezW6oRbweMJ4B8xru8AoL91D5gjgoFUmo8xn4xnaf8mc49mWUuwmrqweQKzrF77oK",
  "key19": "5SJb5TkX7wmASXQkz9QsKJzGmxdQS2yVoD1JbDyxbkXWzKk7io4W6BegZa811n8CgP6DRWHvhZibwbnj1a5asKmb",
  "key20": "3T7W8JHXe22UAyQXFssm6mhwgHXFbuiBbnUo8JEgf1S3nvfSCAhzZ1XyHLrFcASfSZTXgSaQrAN8E26YH6EuTAW4",
  "key21": "4JWmQrhqSQ2p6dNh4Gazzzc6BonBT1YJ1CJJQi1bkTnCC2Rhocc5Lehu7fUoVPdgeDpe4wREQGoPSKimdGNZMAKj",
  "key22": "2UCbhY6CsU97EY4YcyDcNPKDqMSTFz9CAvnF5AG7Gozeds45SP1L7GJky5sCDMCFCa9jewvwnA3qUHKn4MJtCTqs",
  "key23": "24VkXder8k6Py3eZmJr3CT7wLnVBuwgXCbKj1goMF7Z4sn59rg72hX2nYiMBgXLzsLwwy19gHJ4dJG3KfNAFuZg4",
  "key24": "b7J7A3s9kWpSrPJmqxVVzUXNf5J5UCetgoY7PgFQdr7EuRVfLTW65LdPyW3YDD5CDc9HPBQjB6zXRynQE7eiMhs",
  "key25": "3HcEe4ow8hp4xJ7PSKHrRNW9VpHxXfAWz3Wj2zNzLbfXUrrn1Yu42YWszFgCvrMHHW4evsDxSh4hVR7K9y1Lcs2Y",
  "key26": "3xebC1dGXkarDactVggrvYQPEphCpaarBmsSMwPqvbvFsQfGSGwK9xKnPPmAkUWfHgSqEcc3WR5STLTYkDkcNzHR",
  "key27": "CmwuzruC69SZ6USdnJSvDxYfAvHPP7BrNovUthuxpQRWq37555as6L4eyxHcuqRED9JKLioi3YFHd2M5D3kUQYh",
  "key28": "4mCVMaoYXyRQG3SYhkuwuYtyKHvpwocT7zpZvDbdCBjsq5s4EiWT4oBcWLUj5mfQR1tnPBnjbBQcmDT2irZBeBvA",
  "key29": "4qTVeqtARMssw5tovJii1NWskFeSdvAVC2WzB1zpqFxGaBBWihUUMeq3gHMjg9HYkM9H84MTKi1pvCt73UvLFfs7",
  "key30": "Wpmdj6QwZgXgPNbQC7rJPnsZLFram4xinJetqQLr2nedD9JwMUv8LGMsuccUEJx3KTZPCd1uUGmhJTsYaBrBbT6",
  "key31": "2wjPWPkdQjcQz1NbK5LCdrW1JfdhEdGL2Br2z4d1SQSeLh7BKPtewdkmT8SWvFSUMadWGjueiHNvZd8PFkvqG5qi",
  "key32": "65ycXDKnYJomXWuBT83cyE1qQVgqV9dB2Ly2VGGStruA6dn9iybyApDuYxAeMTpQveL7oMQPnQtCrWVDm7M7fAPC",
  "key33": "3rqkLtXqQtzapnNFF7evqv13kXBAzr2cbHrsMNv6xMUUV1yvpA4EvGi118t5g8ktF7rdKFQynDQA2ZahFLQ5Ffx2",
  "key34": "2ZQRyeY5RwAkKUHUAemwLvdwevZerAEH6r2UiQxY1YLfdcQxGWQYXaaUprbdT1VLED2gnUUM8BwMXKrnsd8cob8b",
  "key35": "58wSWsCmcre86gea8GdkVL3vzy2ooxr9y6q97SBzAnDXLbc5EK38pfAAfkK2kNS1z2ki5sz8SiLVEaW2BXoQ9a32",
  "key36": "Pa3ffkVyFk1C8TPFGosRgsxVNLTss6w4Wfw2wT1pEXPZtAodfQmNLMaAv3z3vnxhQxnwYKMZCUUiCKjW3mgmM1m",
  "key37": "2nxHd3mykJzXv8pjfZmN19nsAkCrFYjQDjfUZDGY6x2jokaaLf4iz9dpNFMNjXeHB7fjGav6chbKopaF85P2AQpj",
  "key38": "2NZSmiKue3sNQTEuLHcR2XogvVMrgGXUvx153Ss6G93x5hfRma7arPpdhk6RUXTDErYw3S1jgiTXhQ9BN8XVgZ1G"
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
