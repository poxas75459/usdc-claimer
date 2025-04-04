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
    "22WLrd6abv7i8NJp6ue5cqiMY9f74kyrEcC3ak24Z1xuVm1uRN1gWHqAqxsHykRJXPU6qpY1Mn8GqcKCiwW5eUpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QavrujNEZrxKuRhgNfMZyHunrrB19siCvwsmcVFz4WYPy3LK1RHd4WatpHtkuZU6ND51fxetiLmkzHk5y2Yd1Td",
  "key1": "4X6DbznLNH4woPL9yZaRbwnU5LiFXDYvUotTU6Csr9izU1UULr4c7s4RgXci2u5aGywhVB4yw4QsN72cHGCfBcaW",
  "key2": "2qpmwuQ1AKXn5XU6BWiQCTxw2HMbgtvj8dWk2993UFD8fVn8ULLM5XJ7UrufEJhPvFaaeEidD14V8LBtuM9Zuef5",
  "key3": "4x9FkVdjQuB4B2MRA7gZcgctujUmfVGnMxbKmCX8NDGZ9H8mugRj3hJeosokHuDBgorPNhx24HcSefph9S8NpBeY",
  "key4": "2jqW2sXupBTPAtBjmHPXb4Zef86BAQSZdrSKwGztWu3boeyNbNqMYw89L2QrwCotkWKJHVwL55cLPnvfGWPFa9ZK",
  "key5": "VfosZK1bagFwc4WzK7uZvjzGFByF11kQN2dLpEA2jFPMwt4unnXsCwPCXHRbdM2GzLViXZpEtYQNFUJjVBZpPwi",
  "key6": "5qVuLhbLx93vj6XFDaBEjhJKSZUpDoB69kShnXVmrr2z6vbmxFSDBZgV4p99hWxahA5aFYt5rWmsuvem1Y3TWqp",
  "key7": "2ncae3q1J8XsZEnkhkDGUnJQz86vaA71JqWtx6aESoKLGBqWo9bJtUDUTf23mVdt7JJ1AbQWnu1Vc5ssWNjtn2Uu",
  "key8": "35mRypaZqAxnb9K2r1sNNuzusq3rZLbBTR2eq5N5vW6j9XwgttBnPt4UnmNy1zH19fwYLa6BFQWuGqhUkWzkA9sA",
  "key9": "3r4jbwFuLoucDDoCRLyTmVjvJTd8YCRteBMQuRaa1NcbbPpp9H1w8QiUsh8WM1CZzALmihGar56TcMU9Rd9kUtiW",
  "key10": "2DgySA8TE8Ar54dpXDuRT3eTk1z9dxvF2aBGDx8r84yR9zuH7TW2ra4MCT2gMf5zCd2RoyBCudcjpuoypT46Hfba",
  "key11": "581PaMF46HvB4XiWuQLErHEaVtF21nAK4zf7fVicsrAVKNnnN6DpvALoM4Nf2oWuKYM1mQXGjG9gMADc1iHTbgEg",
  "key12": "5Wr1NF899PFDNZwa27PAszXE672nti3KwpMHJZ2k5BkL4PxNfEbCZvq3sjZbASoEErSqCrqGUFAizwi36yVp968r",
  "key13": "5cjvMsNqm14riMGcN3XXYUxzeV2pRgGV7WczsaYjfyughmp2av7ztvesP1Zksue5fThPnoXjXtpDq6tchf1yq1r4",
  "key14": "3onwEPHkAeTVjUpUkMbH8JT3b89Ts1oBuPqtw2DbwFB43z2hinRxiGo7e2AB5Yd8LcSDXbD6Mx1d86iiwfVgcKkz",
  "key15": "Hpif8LuPfwnr4hQMtT2AEwBWeGJMQRuq5CaTJ6hpM2zjq3mYJsfZg8V4kbvxKuS5zHXB5Jvcubo4bAppKYqnbgj",
  "key16": "3DGeHJGhtHUvyeL7ZvdKTVVRKGcRwQDnEiLAyok6NtesYjJF13bskJHyVwfAnzWZpvkbpVRsL8MXWXss3KqfnrhV",
  "key17": "45FLAYMTxJ9NmfvcxBuH1c3JH15sgFiMw2Vkvi2F3CdNSrZA6TgwH9XXz3jBNRociUGApS35VutN1xeF4ZWwKfaG",
  "key18": "26vnG2Y5TFYgPrWKMpNvMtSfU4GRWEexh9nCgtt5UJ1HUKLa4WbR9LZBgFyrwQdT9V7P7iDtYdkMjhFHK2fPGBki",
  "key19": "5955gNYaKquwJv1rRuctYj6cF6tKRKxp9Nmfj33YgyqPp5PLAByEKgGFzkQMAWDrgQGTXCuhg9J6wXXHnB1G3kej",
  "key20": "5Vvu6cNwnMFbqxgtrVz8G6AURGfkgJzkTE2WpLAYVeK4Wywqw8hRvYoGkgPSuPsmsKaWPWDf4TWVFPa3AMT4cQUT",
  "key21": "37N83hsGHhsuFTNcyTs1WQU1eUa78gSkTpB1A7zinWWSCDoKxkJrpcfqgmN8Ns82Z6BzPkcdEW89EuxEGf5EMT98",
  "key22": "3aDkd7dLvBd54PASrWUPMt23GKnV2qx89AuHW4kDtMLU6zGV8EUQLJa8cV5zMJssX7CDuCyxfeFCRtZD6JK1VPjE",
  "key23": "2wg2ZR34okGpJ3nXng3ijd63ugHLcR4cTU9WzdPH1YhgRMTvZ3LKAeV4yS1fkUcoA2LGWDC7NUwR8ci1qTXJk5R5",
  "key24": "21ZFKstgrcAe2494hUQmYAoGkB9DNk1o6UYJGXxscuY6nEQCgyGEnR7utw3j3jyhMjAmqVCppDhQWoXX6n8jVwyN",
  "key25": "5a8dAz6TAibXERZdZ47qfm3dQXhJK7MwYbYyatTboJgdRpCo6PzFL8iS2KCbZLCLCPM4Bn41vdPU3F6a7YD6iG31",
  "key26": "3iNKVYy34Lt4tz6TaGq2HH1HE92mEXQkJ14BwMo914zaXgd4tS5beSZfVoBJeGA2CPhMb92zKAPPGQDnbKDoZZJZ"
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
