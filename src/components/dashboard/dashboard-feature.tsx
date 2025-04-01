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
    "4xHxPZLkcf7aRjvF5jRLY4F5iAdB76wwr4t5C6gqACoCbatVJsVJXaADe5WzqSGm1jZqQZtkkzfXfLJquxokpbH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXjegoAcKTGMjL6kZuKFDt6QLXUXL5zBF1ZFfpvkZ6XsYe12fTyxZrV7ZgCegc582Cx1JRe3p75uo1tsjMmetyU",
  "key1": "4ZQ2RcXkVPBFnG7tBKCRUYGmDVnegZks3BrfbgHqNr4PGeKHq3KznrzfmqzwWScC1wgjvXTHD4nM9GNFxkHbA2bP",
  "key2": "5MPJJdhS2ebsW62bSLGek66XU15B3K5vGrNgcoay2W1HAQHXCxSpwvGyLQvpb6h5mGFWHf7tabvV8Uf9AbWXt6xe",
  "key3": "3kCbXikoTH1RfszqhR64vA1w2fdcJwSqNEb5nMy3ViH2TxHuGNYmP67SBQm9SPGsaKZPiUbKXakgYq93Kkc8fjLR",
  "key4": "4mAR2pGEczNyNA99cTmd8HXnD3E2Jj1YZAthHCEY8X7m8jKciaFMF4sCmsooqozzckAm5TRSDMEnMz9g4bZZfCdB",
  "key5": "5TdfuchjDHDXbCm7uDL1c8YBr2f6zyG3sESFChyYbPuonmcgNtUDnB1aLZiLZNFvZq3QXCY7m2mM2bZg6y84VaM6",
  "key6": "5VdgLhiTrZxiB6DvsrgcyphChC8GuiNxaPTCR6VtF1o2b5p3YaZQhUwbWs4JDeEvfWaAMDJaYF8gmw6TYu1HXhd5",
  "key7": "3tLGMkdBNcBWAneNBQ3MLKMPcLFWB8unk2hFyopMdFur7zyyKN9RUgLauB8Y2AcKyfgQNWsxZLKmaixZ1vEu5jMo",
  "key8": "3czqJUX2R83pPQfFuBAXrn38NwHWoA3aPJQg53VNdUmY4WzNfnbnKpGbYawiip2n9zddh1gMYgYCpdbpNJPTnWbf",
  "key9": "5tyCkbobJcHWpLWuiP8f9ueqRU4NSRTPjuYS3XJUVz7a8rhwMWfuZTyJyg6NrHBu6ttimnNorFkoxcqZ8x1Zh5Sr",
  "key10": "5WTyutrDLPxS8EkSbuWUQ7yEQZfWjQeY2by2rPrLKuUfTqHkGswX1ZDEEKbMDovy7t3bYCk2anZuCojaZyBwb43T",
  "key11": "qn2VnaJo9PzoFBqbxyomk3fgTrDMyjLT3dwZpwqpAd1Y3J6m6Fvkx9yKrz9cmXsHk6LXJXQ8c8X4CQ9bw8dyKcg",
  "key12": "WMSHP2VyuDc2mCW24pwBU9JUoVb13ZD67qs5QrPdfCKfw3JMsEak7wxzZVw4hpgSnkHg4o6rP4TzFFFJbDhz5iP",
  "key13": "2MU2zsS7VpiPH94xMqjBLi1LYNSXSemUDhoCqtPwktMfymgHWhxkbaF2qGSweepehXyR6rtzXrw7WfvPRx8bLcSG",
  "key14": "66iz1vvemWDKnCeduregrzMNSRwQUdbdUUqR4b23ccY1uie9HCkiBzyfnnn3V2Ki7ipJG7zPhanKyfkJq9VZGQ4k",
  "key15": "2M3xcKLw4uV7FCfj7tNSiWo8vT41LtjjcyDZ6ytLF7HmitNv31UD9dTZjHdBANd3MtDUezoEaM9eF2KCzk5b9qN7",
  "key16": "4WmrNrSiGXana9mVyBdtK58CmhYHdPLH2DuMFT1Tq2GAY2PcD9E1uDsQ1gFCG9zFnFbeRNuexAJ2TkQZKdVtDUZi",
  "key17": "2rtvUbYoR5tevAC85QQPQiJ9GPt5xyAh98aeBHahWJwNiGAkhfYHerQrSYNM3BMTvP641aftgqfmvZWk1ZxMunCJ",
  "key18": "634eau5qY3mHHduzHS3aSapq4PrsXun85ErWgs4b2MS8cfQomLjPiDSdK9gWFst3cbZMo66ddY2MWgg4PueHWBoz",
  "key19": "473gc2P8Bx8qrCzj7Ts3cmndhJcJ1pzRKsWtAzSxUw4rSHNBftwtGaD18uT3BzDq9Q2GNLZiLCrgg8u6LYjYKnNc",
  "key20": "5ZLtnM4RX3Tfx5G9JAHXN3kMnkrjk9E6t1wvbx4zAhYZXThnHoYYtmL94As66x9mYC5QVUVfty4tn2bcGi7urcs6",
  "key21": "3VvBZh8i71bxHMwWsypx8vDeW3E7eXg7BqT5SUqYVAx6DcH1dV3qn9oWMM6fpgHvPTUfbQn3zoceFk7MLezkiJqv",
  "key22": "DftmHdePmhWXXbAMqkEKu61SAneFY2uuzGfzaHp5YhGxCQpiX4S92Pmv3yMhFVV9uvQ1wLTg3fykY8HWoD8sNsk",
  "key23": "BeBGLhj9RtkcwaQsCnnZQxNvpn7bFZD5nhbGFdD5uMUYkQN776GhyQX7kkkbgzCeAa6292mQfBKPEu7xqV5sCt9",
  "key24": "2mfu3MmJ7yDyzXVyASFUSjGwWELcfv55Rcfg9HdWYCZMjowS3TuJUQfSJTRYPrNMaVzF2aBj1WkNDVCe4jsJAwhr",
  "key25": "3UGRRE7WkGcYrfuSAferCJHnkKsJmXCniDp9SXYmHfpMcA96aFbJMWHNGEeKBaU2TYm7XdoJNmMQV3NZthJ9eEc3",
  "key26": "5BpgCmLemeeDyRvNRyDDh67tEVKmyiVg2HBWHtDuacJhZqvbxzqdgxeKHKCBiTKo3uZCPCHQ8VUrC6rzmbXiVaLG",
  "key27": "5GAwU1K5P9ovYNNaFLU4rWF7SJdBXjU4TtsmbZzcwUfQEtXKWrFp5SsqMpH1RHRrUnGqQs1qzvVUUDAqxsJKPHpJ",
  "key28": "3LyZDY9EWx4jzoH8VLGNBVd7Ftt1LrKzWBk7p121kw9C7QM1Y2cSvqkaP41fqdw1qpembz7arDLUbpCEavXkpHYr",
  "key29": "2VCBZmCHT6dR7rkkbkH8D1V1MVLfTk9cnbr6vtRH4982tTyLrEtZq6GwT6D28ENCni83E2ajqk1rXo6F51jiwvP5",
  "key30": "2Bkg8253ntuohhaDMT6rUiVFjdL6KvNcCnc7q8uWJNDuSAB2pUTng79ma5gWckJzxFuGNPaHidLtv71eU1Lst6r4",
  "key31": "5xGUmsWwz6uSyNxEaWNQaaYcMvd7A4SBb2qqN6gWXZBn6bMhqfp57xMv9hX2ZZdtu2bpmjfpX2yJs2cWcGBzrozh",
  "key32": "3mYaSv3fmjvivjqwYcLvRj1FoKKMu19hA4wGaab5zRyS8rn3e5PjrJhFAtDLpFPRxNdYWhMQvmSKzhcSc9cfixkb",
  "key33": "3ZdZWHzXysB9nQWiUr6vUKUtPrBTHjDxkn3SeheRqYQ3H3W88fnoT3ZybLDK4QqJ21y8q9J6D1MAcUgYwSyF6Mcr",
  "key34": "4jNAsnnHCS7xibqzKUywzqHuXLJG58FNVMdZB17aFtxKxLU5ByuufzJk3nW2jQdmFDu1kfsszXFpjuAaGJN7ounV"
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
