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
    "4uiYVVKFGLAafuA4izL8AGi7S3NCPoF58tVJpDYdB5WwbDkE2c1EHCgwBk5b11gAGLwn9fc2NJfpyJ7ZZXggZwUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4tG5JymUGkkbkBtBZPgy6vcm2VYuiHTxXtxiem1XBTPGx5pxgQXjwMY9bfZHh81s75pLjE7uFPTf6bDBu6DXGU",
  "key1": "573QbABCoQNu6ABy3uxShLrbRHXyNqvDee4K4jMBt5uEevzDZr3eNk2iwDDdXxhZxmaZSJdJaDHSpnoQXAForMJo",
  "key2": "29TuyDkMhrpfFc2cdDt14gf4ivm82wJvqhdMLQk1ShdAcYszCZ8b5xgR5ebmPCxQgAoy2LggRUStV66VtCM1LyoV",
  "key3": "2UjvgotS4bHru3QCytfp3wcvjQEvGZsHCjphVNJ1uTLRvBmKycJUo6YfigghiH8aeGEXoikrvykLdNiCk2P7t24N",
  "key4": "s18xXnmgKHKUUzjJfYPJdAPNLUwJiVXSzL5kRgB3aTNHoxWpQ4ZTSXUgnkRmoy4qqR3HNFbWtpCDfvLdwYmgSuc",
  "key5": "AmWLxTFQwTJwY24Jwj149YnBf2p173RQXosjbXi7wwvfm2rUBXywxnsVxQKnEpiaZAHadKcUaBzGfnSF4W8BjvR",
  "key6": "44kckeRM4yesrLfvB9iw6F5r8Um2kqatcTnNpZM5JZyARybgaJdBHqKXBiL2AF97XMQAe5vtyRV6KhyQXWiKzbhL",
  "key7": "5WXMFsUh5VdYwEvn6EtchqehSomHFqvUoqHagy4ZiY3nAz7JLBMvviusV92x2rQbsp4Y8SUn1D5kSP7rTjDNGu1q",
  "key8": "2gbcGuhuVUZuWtf8DbudFAGz2gwt2T94wCGYYpbzgS6YaYC4A7BrTftWsXeRPXCkrF1977cuGBkxDT5W1U6Spufo",
  "key9": "pfEFZRWQS1CMnoXp6ziGU4abWxkDrzBxfNepy817xxhxUYVKtVz7DUj3ADweBwq668CTvdWtKn7GNmXAHzeRzfN",
  "key10": "2H7oiua1Yfm5G3y9HnGfo7Sq4gGe5JQdK62Y3pjdMjAko22AvFVVqyZcEBgfo5HzEjzkjzFGVLyGLTS6FqwC4FjQ",
  "key11": "2FwndrmiaYixbkKCpBeugEucVseGncrvdrMCqB3cSDgakoqDogRrpRdzP3cFrdwHWMT42HtzNm6shCoW2qcaGSVZ",
  "key12": "42vK8VSMYw54TaxkPVwTP6QSMG9eqEXHBscUGtqfnPh7mzaxm4z8Tm1B73R19NgHs2hEuZybxQ7PBoyiutquczgW",
  "key13": "5gnFkvKansbGZ6aHTyjmPBmZsyjZuSq4a5dghfdetHgbygXbZDbeYZtkyhYskco2x8ddYaE4pJCyE3k9KmEixwdG",
  "key14": "PFXmMfmKxiJod8mSH5yxAEHnKKfNNJsQpD6UYY5TKZyAjD9XNW65FP4dPoL6fHkLEts83X2LbhFPhJdiDKSzscY",
  "key15": "huufkwrxGwti5DVsZqQRCJ9wVLxM7s1Kiy58o7LRqTiKWwcjfMAUHc1PnxYJjEXexXxxRTnjkGQQwZnZBnabfVU",
  "key16": "5ixtHhz5P4iYqcpfyDKJ8NDybNpqxwuc97yGGnbvgd4P8JVLN3wiES1xrkffFKPvxz4dE99pJD5EthoVuEKVTToa",
  "key17": "2BYH22ojijZtvAAXm8Ei84FxovrPHF1d6RbvDfGmJBoWbPeSpQvK1tBV5tfEtapUSj83An6JW2LsthKy4LHwWaiT",
  "key18": "zHZLuZokSkMCnij1P2QaovdFeuuWp5SfHU7pMfDx2NU5b2rw8maDLKMQK79DWMUSNeqrezAFTq2KH5D4SASnv1u",
  "key19": "5USvk4EUJuk1EyiDRfTWRVC35wann6jUdheiMNKqHt3izGrHUA8MC9Ygruo3osUgmrVUDEfEfTaq6RbMJf818a6G",
  "key20": "5cbiEEFgtktJzhWuktkX8exZEEenuqDnDRZqxg5UKZyVdGFT5UffEaJZ6ayKtjkB96nscAeLyyCdVYV92TRaKFa1",
  "key21": "3pWmr31HNaJig1ZuiqECwCoyFzURXXJGhZgz5TnjddoA3U3Q3yKimdUKYDxeWNb7LRntMeFYVsjrqWnzWGHwCw5f",
  "key22": "5XaQhDtepJWYALhowNWS6V8Jyt3ZtnEVZc1CdrPKHkcs4pRKbc4jHoZbfQBh7byyZDnsmHkP2d5FwRQ3gNL56gcy",
  "key23": "5YHP7iCUUSM3dPGYcxTPe6jbzuxE8Tnz7GcvtBkNRFLJtzmL3hCmWaZ1b8sHDUj9y6yEcAy2qdMuwCuc1fUaZboJ",
  "key24": "5Juk633cgwf6JhdyHHFgw1EEbDa4HRicuvu58sR8V9NMf6jMe9Lj365WkkQKZz2HVvPgEYHLAka2DKtUY9ETa277",
  "key25": "53WJqdNJ2vhTxyouETvHfZspryCnkenE2CXrRC2H5twuL2zhVNf4JsvdHZBueigsmzWd9UNSaXqLe5kyPhJJ7HmS",
  "key26": "3qKR7p6Fd2Czu85HStabzLCBEyivd1VCCke5yFGWQvHpEBcVg1FhaVxWE8DKLRzgU3dLCWzMtcvHTWz45xEEfZ2x",
  "key27": "2YPFHDoduYGWVuULSo29LEygkaSZ1WnkrHe5p6xy2tMmf6ZW57YzwXjJfWFP1HHbtXHFpfP1x5tUDDzQA4bd64vj",
  "key28": "4rEthKPPHgMZ6p2Q3e6LrmiJjKjCLQQkwtnLKpnc19kbMhWXpuxnkLtScdCd1rRS3epJK7EK8B5uFRLawqmLZ2c6",
  "key29": "2uDdNPGrpSHB9pkQayZod4riYkVCkrX6MG5FKxPJksZjKBveEb2zzUgfxcHqBauJvivCUQRjrpoNZXEzxJikJE2z",
  "key30": "4KbSsAeUvXQCyaXToENGAFCPZ9ZykMBNDQ32xPexzmyLEzdX5KAzttPgPfUooYyaZGB6z5nPu9Rq4EuKUVg3dTA7",
  "key31": "gk8GmXhfhsnrweWzHRxCmXFZQG8LypKcTdxKAfvtLWyuU8u6PCRenKtm45G1e9A3t4EDbiWg3ESf4yKqG8oW2Br",
  "key32": "5k7kk65d5eSpUcwwtJNhZaJZhHFcX8C5gZfaTDisGmnUN9Nnij2Bz6rBLv5DxUotnqRSdTgUWouXfa6t3D3ockrv",
  "key33": "2cMUdKD1xXUbPySMgK9zzLcUdKUjo4JQ4Fjz55K5hBHAJQtfwz5vLTLqi595jBPv7M9sfbyFuySmRzZpyV4SFE7S",
  "key34": "fZgEmtn76bpPXD6emgXjkhBK4w35HqciMR82KPkTrA1TYn6C9d2VML2aXqon8qNdcFJzfH7Vyt3ugMa6N6hVnpW",
  "key35": "4UnmuPVVCmbWMNELHyQvEZTbP3sMLWVFb9ecsEbDjesVNRxHzdKxSfMxvBUSyHf2ptzB6NrzJVQ6cMFAn5DEv3zS",
  "key36": "5FbSkHaDEv21BMsVWX4CSz3dm7h5sAPXmZ3CQchdwA61qB73jMQE3LUCpjcf4cuq9Qw5ncW5DD2fisxWq6UnijEn",
  "key37": "4ZjBTgDDtbEB3RSukGPJHWv4GN4VWuUtQUVhaUEoRm9KyMMfdz7JsU2skK1Yst4THUtLiFx4hwx3FGDsS5D7LQ6P",
  "key38": "xXaTJ7DtGWDxYwSvrs1F1urQuYrTLJ688BZxPkPcdu83ZTeHAj41L5BTBLRwQgkogbUtGJKXa9xqgBnn8Tup1Va",
  "key39": "2Ei2UPpz27DsfoFLo7kM4HyreiNQnLSJZGGpsko1d81AJ5wE5dmrZQ5xppsqYR9redkSnstmH8fy7QSpVeuHQHni",
  "key40": "5xPYMpivsHTuV8jm2sd7c6paacUkQQ9wid7UCrHjbvtvBPsRUmZwZVVqpSNYQqTo8QQsAU6AxNm3f7hwt1PT9BZn",
  "key41": "2qzBeZRDbjVQAh29XYDEErGNTLryAk6SGxn6sJrphcHNEU3k6Sh4FUi2CJKHReKAMVeaqNm4vTuyDCQ7heQtjvP1",
  "key42": "47QAe61vWQDeGrrwCDgXHZiEmHeG21gLJd5of7iuZ4SqkqiCK3VaL6DtExQzW3Za4j8dHvXktNNQD2D44YjEvabd",
  "key43": "5t5u2SyH1kGJGCsNFJNsfW373VfqgV1mUyrqZv6nCrNzCfQX3cciPWZ1wwM2bhn6pRr6g5eEr5hQCaBBPS1N218G",
  "key44": "42QSF8eAddsS8abK4NFcbgHmCTQBRAYZ1wKNQJFHTBivDd64hXMQ4hFgJoynjGa2YgXEW464MEbMbsiBroZxtuZh"
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
