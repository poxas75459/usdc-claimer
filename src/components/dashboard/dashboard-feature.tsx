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
    "3GFrntqiLoLrCBLTPmkahWBjc2sqyi6RHM8zoCaQuYPqELodNHsGsoWmSPmmGS4Wngkx9CLtUp4sPn7yuxv7jZLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQ1LXBTsCYT29KpdnUaJGCRhpKdNsz13r5xuNaNjo2U1AdQnNN26jdSCXDk3b8VbHGQ4TjmmJcW6YE6fXVoYo9P",
  "key1": "EajPLGzc9JraveVHZjXf4ETaGoCTfUyGrnQntpHCYFsMRKC6RzbtAP8twn7tGhxmHri7iwVc7TuuHWV5NoFbanX",
  "key2": "U24E4HFAPQC4iGDWQo68qAJxEoJZywRb6a6abuWY27hJfoYaGTDq9b5MoD6rjj5V8FYXVj9wZ2vGZqkEbUN7aPJ",
  "key3": "2AUXYKAqF7j3NvKdjgcGBF8xj78HVr9wpBXHnSf5VnGaxAVVg8CgetAf2oVo3ffFCKvYgnr2FmFrpfskz5vJeHJq",
  "key4": "HckX4yAeMsJc5RFgAebw3eN3DmJZ3gVXYKB8dRbUkhGbnyTy6QFTj24FVVKMqCXaVDaqzyGRoYyss8ARm4XAZzi",
  "key5": "39ob8MiDwS1quae9rAqCQkeKRw9dmMUALGM2kSSCTE7yFCt8Xqnv2w2gTqQJRdtHbJKLkrcVmpdU2EN8Ui5wKa4C",
  "key6": "2VpMF2Zocd4SqGwWSxBfnY8BN4Kp1dD6JY72A2XuPQzNy9sionCJ4xTAoLCkzqcWyFn1RgtGzQgq3kVKzL6rTvJm",
  "key7": "4sRwuWuTFmJv6po64E24DA5vo6xBvjH6Nadc7DSoytsKHrbWkvH34UhFJNBegPSULkphxcV8kFNeqjgSR9SrkFuy",
  "key8": "37ky7iWCzf3JpoMDpmhLBbwZydxVCKr9tsVuKeNvbCtBvrDbjHjTU3qM5fTqPKXrEwtFf6VFBLvLvjYbJ3bSX4f1",
  "key9": "5VPF59cKLjMfQrgwQ4bqoJ3WQkM3xieiCKLYv667SD5dEhdfSrjqwworNUnS9ZmQagEWCCdXDbvSu3M5WBxGwpKN",
  "key10": "3kczD6TifJ9boUX1bhHoEPnZiE4go9shj53xDztBVwW14qf7VxZ61UvuvzK8Rsy9jQEjxhRe9VG95ie3R1RuC5Q9",
  "key11": "1fhei7Vs8BwXfn7TdKVwnhnGH71ByMttaNLfknBQSv4giG2CfViXUSRRCQmB12ZYv7xM7poVvi64cMsQtBF16xS",
  "key12": "29mJewDGu5fB5SXKGtRYsA4QAbD67s9rwvH18cvmKHyAxYZ4hyi9jqHrCosaeqWKJjTYJss3a7JiBhDSFP3KRALG",
  "key13": "5a8C9CvLuCtVFPrKtfspFXfJoaKBxGAFpRckDJW39iGPmTVjuKuVpWuHVNVNq7qJm83C2wz4fA8xc3hnhvUt76Z8",
  "key14": "5pLEQ8XRYbPw5jKV6BqSTBQ9rTe5yEsj32XtE5sfUqcjY9Zcs8PqCeeZExQ9Cd3uvkcksf1gQkCd4QeS5SMB9PDw",
  "key15": "5z5BGqHt3rsce7HvptzzdVfkb6QayV3Y9TPfxRJ1unuepGXscNFHLgbCsjWTA4d97DupactcuG2c6nMs6WefdVX4",
  "key16": "62h3HhUZ6JFyxMmLHqDqntyYjbRE79rmLAbR3HeN4A9DxdxYdBsDB6xG5rsqYS1A5aSMmWxeif4UqCNXEydhGw7w",
  "key17": "4PaFxKZy2Fkdo8ZEiTyhHzGeb8ZgosqKi16avGMbnkWVqK2mwdbMXyKt1EZQFVao6L923mKHcGL5YHPgePwtJDVs",
  "key18": "4j1TauVzxKH1izhaeX5Kaax5u4eGFxusm4YwDJhanMD7eTdL7pJLdWNkpxPi8oAQXPZBpEoMPyd89MTMsV1FFU7Q",
  "key19": "hpRrqfUjB4KFBfcfZn3Wrk8ATJP3VF4f2SRjT5xqT1NBkimrSMfDoF1BU9knFyLxEwPkH4GUCkuf5dxJYcEr7bU",
  "key20": "5aiNQ6JGUyKJ6fzmHYsovcBMC4VYJ48SpLo3k2EREw7KHkdUnbzn8kaZheKrSyBFTNSsyrpEFxsYT1XBh8g1WYck",
  "key21": "qTJa5e2EXzRZtaqrfPNuRDCrQd94DJCFsXJKokxWWpdUrZqvHmuhVBLXkYhJXcJCn3NarxaSq1Sag3pP7gWQTmE",
  "key22": "5E3De5WFCxM89XyBCCpemKVLK9G17F3k9qandpLGw7TT1AR994XEacotc1NHYpoxCz1MqcyafacUJ6mrHXKEdK7j",
  "key23": "5bPhX2rRVx1Bjxwaputj7yKmVF2w1VkTXnJu4gvVuj53cuFXgdc5eeVcMrFWCapFRQstHmmfWLKWyvt6nbKm3Qm4",
  "key24": "vWf2XEcNcfqyH3SicRPi9peXQRq6x3H3A2v1mEm3rbFMNZtPuSYH9zywazsLsm6aJdzSWWQvV8A4VcnjxnAemb9",
  "key25": "4xkbZNJhB3Nw8A7Lwak54nKGkAVQjBWYJyPVDScCg3pTVvq3hAni77Xj1D9s8REZfpC2MaoWN2EKMip7HEuXhwwN",
  "key26": "yEQ5S22b7YambMG9NLcSWpkjmbBLxfBNfJzv4yM4ia6EZdVcBdLvYdeFpSDX4cQs9QSFfVqQsyEGdddPHmLCRPt",
  "key27": "2M15ViMP9KuRdmDi1uf2jiEvvsUpY5E1qe7kzGywF4Rz7H9jchUrqbDbAS8oFAyBCWy5Nwd8u2cFHP9fNyNCFRpT",
  "key28": "5jpn4gj8NhvH7fkMipSSZy3Rv446FrQbAFdvP6cusMFyn3jHcwv7e8cznMhFrhSYitPK19fhfM7SNXxHKCL55MNJ",
  "key29": "5r5Przv3ChxgaMGTHUGYbLoaDPPiUmtmxVodpDMbXb6u5c1JKCmpjAnGQUkDfyHHWJCqzjQWpDqSEqnJ8VFww7Mt",
  "key30": "3ArRLv5tmFx8hLMhUU88iMZsxyC4KKMERm6cNEeXvmJwAt31vEQynnNzwDDQiYxzUHGWv3zRjeNsrNWS2RCrQNtS",
  "key31": "8ExocqRbbpKDR2LiA8nvy5yBRcnUXyybk1MaNwaXUaFnsSftDGVW9KCfwGsLaj63d4DPPn2KwEebXUZBW4xdVXC",
  "key32": "2rrb536FcY7oLVLQxySRPvxKsNjeFZdyG69jouJbUcecnDSyKuJGfzYpHNDUZwA6qZgBbewYD3suwB665C21XsYB",
  "key33": "5VXEHGYwaRv829jgZZoZdZ6pDgoVESgtM4aQme2ocBgcAu7Ktnax4bzw69LN5iaeDcPbgDAYVvySMQPsPiBUygbV",
  "key34": "4Z3fAywb4wmmgA1G48MexAaJj7DwXJpon3TyxkBgBwqbYGKRecfhjmGsFEEuiNXtQSSnvHBhbCjS5QeZRo3qG3kC",
  "key35": "37T1dhZ2aRiDdAAmP5KpdJE57EQMLGUQsHRJQW4BcoWfm5CiqSRmdSWm1LAA4yjPL9wZtwevRY3e3C9LVJnVifDi",
  "key36": "5Q7KUoyZPGDTqnYReQz4VbgLk3GZKWgUyYMokm9GKnFfMB6DucEUnmNjjmwUXMBrk6sqCaerW88syuVzu7yocEH3",
  "key37": "2p8XPWNXE5x95kDCX75wJenXHvYme9FLTWXrWToY35hYsAYJFuVHu2nAFabBFxeJf3U6RwknC3Zec9MgJLDB2Rub",
  "key38": "4c2EW3WcZVQbSCq1VbPtXnKHYHFAViAP5Zr76QYPkZr3S8D6RqsxSYp87V8Hn5ACneYYvdCjLYzsYikPHehLKTq1",
  "key39": "gk7T5wzdd5DVPjJVU4dgEyzBxzACsEjquMAZFE1bqwa7Ww1ZCLAJLRPf2z3QA3uKWcoFdLyDGkhCCJ4b1ZapGhV",
  "key40": "23X1MCZnAUTD1wmCQGnhAqyMwZiA6qQPCWBZ9oYhs6h4tiEy63FxubT6kTf91m87AjsAErmX9Zf3tgKgmTygfK3z",
  "key41": "5Qrrn9r3h6WqvyQtv736EC7bmHXTQ6345hvWQVVSy866DTJvp4FF14UjJa4g28fPS3GHe9FNQgboCVZqUKgYY9Ec",
  "key42": "3EmVieec9LhG1Xnxua4sPgFpf4JkjqrWtbuyku7QTToVr4sVyTosvCPGD4PkDRhvi51uX5r9ktJRM85DF3xMHxFk",
  "key43": "ybB5Lo2vaG1pLWfer5bQWFPFG3VtNqescxTwhb1HtDrZQPh2jbtn523dzdB5FXZiaxBTwtYaDB6F5nUNzUdm4UB",
  "key44": "2KLLNVQPD5AGdZGgi78fMpBTuFELbKmcTZcJJXLbQgr6fHKZb16R3rGafQN9tbbSwutnQMhRMFYwg9KvWKW3z73E",
  "key45": "4hDgDGzEbLqRHyUh3CpCfHxaHLx6qBzJQaySeN6cPkw5VYreqrLgWbKYjWuAvRofsrCajDMV3Kh1R6dj7x3nDbgT"
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
