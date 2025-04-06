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
    "nRhs4V5oaKjngC6hgj69fYZAn6SyyP1D7B5yGKUQpzyYZGvuLqTp7oFyj9yD1NXMvY2noWgLShquaRg8DHUXsU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VK5BG9e5XMS3GVGgNBQHT4GkvDTYbP1mhSdBhRzQ7nQW3B8u1bRpuY22QhfToat4dpFenJfsrM5qcLiDA6Sz73J",
  "key1": "2thju5UPWMoQKAe7R6tVHXJj85UfUkTet3SWQmd5DVCue5Y8B8bfzxx34BfemG8RkPVgjVHFXEfLgaVyWE2Umf1x",
  "key2": "58x12DomR7MPP2E3sHjd68h1Exb2A28ANMbJpwmnjERiKAMjwgBUxUVS7snPBBLeWcuBg1ViDHgiXZGDu96wPZgk",
  "key3": "3B7yuu772dsZL3GE7CfaEMnzViUn99PbsChJzcojBhjCvPWfz3NBD2UCs6Czka2rXVq4Jw5HXuPWCARrxGh7EzTK",
  "key4": "3uKDWPbxNdUP5xSH9HZhiVEFrskkwiw54ep8DEcfbm7onsMRojWnwo5Mb2Nyi8aZgczyX28xrHbnKq6vQZwZ1snV",
  "key5": "3aTfxwJa4yzNKqP8zMA6UvGj3dEPVEo8QBHbtJ3VbkyRpKb6Bv3pjU24N6P9cnCM18dvDUh4T9pdCq99bkLZeoSt",
  "key6": "4dYWo3hzkqnjJ9yVoEY4j5FY3Leb7A31CfKDw9p1R2WLv7etnwvWkvpKTJ4rZt97wLsfTw7YU5y8PuViFriEcyR4",
  "key7": "4HU3fFw1cJzeo6KsewHhpAE3J5HMvCnNm2896c89zMcufMBEmkvPvsekdEBt8kAqtMMJucich8VuXdQ8Jo8kdyBr",
  "key8": "5zzW7Van7cqPFtnyY2bd46sKEHogbMvQDeT3oks1rbBzzFjHJEPDu9k9UiHjhrNt4aayQvbUGLAXYifXJTvupsFS",
  "key9": "2c17qgeYxC4r7h4qujjoohfWPgatbeNR7As7HyHfQqAE45StFdCHzz13cXna7rZUq4JPxBwxmtbw684zJB6T8CFu",
  "key10": "RtB5aKwTCetLK9fQGApAQiowQByRxo4sski31AgdNHkAbGGiGZ5fYweR8uMc4Dii41io5HvdL87W99T3GGfiUYA",
  "key11": "3se3PY1rWeSPQD9eUy9TEktjc1yukJ2LafNcDs9swBqMmEqJTBzXrtzJPq8qzySFznYi22wmktUc9QGx2AP7UEdv",
  "key12": "HqqaRZDHZ3kKk44SZjXNyQpyBHVsYNhtW12BMchXMJCoebSXwayCWZXBxtJ25YJ9EapCb5mMcEwnhfAoq5W2gX3",
  "key13": "3PBKPLUikyQLhqdsnrfqE87Ls5aHZjhAB2vyf5rpC9Zt5iPv2eNDxouaMeWyU4HwCk1eiXyiataz1XrmTnTkGfG",
  "key14": "irW5gL3ztTKtxPwhpNxHU7mhJZV8ksC1ohKhc333vSTnzQBsA8foo9RZoxcoRWRLrpvZ9KhMLst4oGUQGNst1D3",
  "key15": "4YgwRnMMqcpfunxkpDsvUSq13h6JYdLUechNfyqvPbkcd4f5MMui8MAPJxpVjxgdgpi5gfjxcSgyp7BLU1jXHfvM",
  "key16": "2mc1cigj2PpnM7yk7AGQaCXq4mj52dLMo8MvW5BhVKXKr9nGYaqUwearv6YkY8Juhu8TouVPChLk1yXggm5oHq5h",
  "key17": "2Bv7T9ykFzzGbmtpsxmRJSrs79pqT38FAoD7at4pWXcc3o5nWxAVqLzAVH9ykPCyaX4h7hGSMmi7AC6oferh2cKs",
  "key18": "3dAp4GK174Y6PBHk4QJSVJyijb8ugHwtBVAox97rR4MmbH7ALu76VCdJN1nGN9hfKWBEEriNQXSWtPLW9yUr3BJJ",
  "key19": "2jWpFkHPqSnWzU2CnrGBtMH6gq3d6vJ2bZpMR5qRrLrsM3kcscWk4KkR4auoRVGLpdK8p9APYkWMr8brz4Mj4ZfG",
  "key20": "5BcDZmdPkm1YAkqrvy4stY3SABmy7EV32Goy7MGeZ5zXh9QqHUC5pBgwBzs1eJ6ukkv4KS7gz8KAq2QQH1dvDpc4",
  "key21": "2h5hQYxzjt42Y1ut5SVhtiVnedNkbwFcTzgJ25ggRzjWMAe3sHapPjv4hMBZQZdvUZpk23UcbDF7Ec9htNhSv4G2",
  "key22": "5D7mMgXB9HM9RKDSiu3yc8rSNMbc8YgHHxrMrwVJRPhH44Kyx1fKZmeBbYAznL9RhaqkXhn4G4WYhbzd9QnwVCJd",
  "key23": "2cN2BSmZ4sr8aKbnui36V4A3KNBzegWhKjoytb1Bm9dUPmhnqzxRGS1h9KuUdpKc5saQfjw7mUSDQDFkVRWAV3sP",
  "key24": "GpXCVmiVbywcoDfCbtNeN1WfiWX6WWChinnf8cE3UPFquJK5pf4dpzRfmkRouh1r2nqoJwDTuRfWzHStGgLxEg8",
  "key25": "2ucxvMwsvTWQiJhJWZm5Jp9F1MNR212NN3AGb1P9z8dkT3jrdfaq4crHuyYsDxtSVRXnpnsf2oM6d7h2dbsGHjrM",
  "key26": "5NNCDSiQdAJDk1Pq8WhiKVwf9RSd8GGtF1BgUw2d6PTPS1FmyH1EsUMQ8ffqg5NxMPznMkgddxm1RAS9vnvDLyyi",
  "key27": "4Skq5JoGNBTLCrCCkMsLPSPKiXwybmFbDKc4buasLRq99r4WL2UcAp8s498FqkrDvGDTS8G4Dqs8aPvPx7BEiMGn",
  "key28": "3VWQVcza3vaU32eJ5oeg8at2bQMC4cfDh1PTqxbr5sc2tYGXFBFyL3pGnDPpT5ZZm3kp9nMFp1tiHY22Pmq1M3f6",
  "key29": "5pDYkAVqZZyhW7wwJ8S5YvyVbyc5uFakW9rFPH5UY8kS18FzHQmuEcFey4Qmu3y2QTPa4ndbc8RThiraiSaeoh9H",
  "key30": "5DL9zCBKSHFJFGd3m6SLkdzwaucFCYoawmfLY5RQFwcs5aZmpwV3bjNDQxgrGiZziHMsTMYrmV5H81cYWbZbGGEX"
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
