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
    "8GLuqnVGq9w7brFMx4VBcSZRKQCSJnGFoNYHsQT4njDUbv22L3xHdXJjspMijzSchGbqUc2dzy1wsjYyHAFDuEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42an57N2M3UyCY9NK8fPUfhfy77QpUv2KUjFj4thEK77CkuckdyL2NTiLqB5CBv5n3ttvsf4zyEzuJy5y4hjzox2",
  "key1": "2Gm6wpajQCfK89QqvUF2B6WSKxSZeK619cEsKrzkAybTdVmiieVEdpdx52dACuedmYJ4V3oxgzbcteZEDp83LoAN",
  "key2": "215yFHUjQ2a7NPFz1Jz5xbwheVggD5Kzx5qCg3qPEmpFoCBx7gGDFa2nYpBYCJ64jaDWSXrYoSURa7gMRzusdTH6",
  "key3": "4qpusWwjj7Z7PhubLR1DUsUv2MjwiAJJGK7RmKCoPDqSF48v2UbAw1WazMDRaCq1MCg12697tXVBwjdFCBLEoFLZ",
  "key4": "3XeyX2SSUR4goaUBximP7gq6tP2gVuesX7FZRrD4TJYyatxo7LrNjor18jruPWi3nmnvufbXZzJh9BHePWd4GNZN",
  "key5": "5b98ZYzLj1L3VKA9DrQHyLX6gHBEteCGhY83gbXDFPNbDAZVaXEyoatJJ1mPcRgbsfwBfbWgDK1VmLXwvsRuUh1J",
  "key6": "5xbeiCnjd18TopqUiuekRDggcdSFc4HBszXLH4e14xoqhzqmcHdDpWZCVWBPmPhrjVDGnn9zUXZBGkX8h5d8izJm",
  "key7": "34ziQfKavYsquotba73fghX8yry2avmsSiUevVa2Lq51eV14ZJfAku5vFg3id3EfnQcX41u4e3kffc9SWBnYmbNt",
  "key8": "25HqYGJNK7brapKGtBhzDQBom8dCaGkzJXMfTtCWyyeW6ptoDTJ1kfkfFVXFJTYRhKt9xP4GueR2GEAkyd7yz6p2",
  "key9": "nBAmn2XqJmGuwrwKPoxCoo4gDNGtrwvfVgS7HgrjeE74HKxdtUgKE6vdAB3nLVKotqA1aCyv1WPyo4goutqaupk",
  "key10": "3smq8J1kPhKZvDRpa2FnW58WFJpqemm8NyE5HT9bQFcs8pjqBS6dw52M8CgKi6Nxzb8BHgw8jG4v4DytAgFrfqkG",
  "key11": "2jo9REZSQf3W2u6w2mPqhViA2ZxdmtTuRtGn3byxbhSz1h8EgKBM7Z93fBofg5YpzDQmCd7mVEPxeLS76y6aniRF",
  "key12": "ynJE5xwqRb1g4dqKTLdVB2yLsiV1pLsF9yGRAuwn1KL1qZnUC3Q3aU4Y1cm3fBxwLHJwCEgKBr8ezPjfaq1Em47",
  "key13": "36GucdcwhoVs51BjHZLNnpxohJHuJDXMAYyVL2XRKqnKwcMzTM4UnAkWgD1YkWM9UnmRYFCfZnNBnVysPP5ymbmc",
  "key14": "TXkDMYyR7p5ucF7hwXf1XU3joGreDTT4vGmGLgWVff3AcMp9xtabjQmNpsyzfsNHLdj8HJgKJJLtp8cJd2ZCBbC",
  "key15": "24cRdTrBmLZEQH6H5cmWPVXWc16gjU6ddMasHFeHfT8mXPZRamj1Ca7RAEKnStxv4NLM3w3Q8KkNno1APPEDQxEj",
  "key16": "4QRHiCqLDBv8Lu7vUHgniKmJwd5FnmwF94D2QzBCnLBje7Cg45t9j925dvTcmNbz8Yf31Dux9k6dbZU6HRffUttE",
  "key17": "3hBfYtTaCQF7SmTCmuEWdRKMssxCjz9EmP9kJoERXRkJWiV9A1GfgzhSeyvbDB2D2ibExVpBitwRVsqFUj9VM9LA",
  "key18": "4QVjw6B9SXxBzseqoWdg3vEZkcJ4S2Bp88EuYSncDn8Pqu8fzmzXarcKXL2BCm54vAufG1JNETrZMeAvBPa1Jagv",
  "key19": "5PryoJF7cSpr5vskDg55RZoPb9Lc2AhdjjEHLBfF8wGroFiXf3yuvMAaeDEHdhhqzQMx2bnVDDycYnVpfkNUpBTx",
  "key20": "owyfN6vXZcU1Wr9FK9bGFTL4RefbTzy5NRF2DHtvi7oCPkskyCkPWswnFs8CugqZiCXD5FprzAMpaG3hCs7Hq2s",
  "key21": "WT4K2NRe3vk8mEvRn3Ctteo1HzAnuscsXBbobLKvG7JRW89v5AH5EYJie38X4hBE7Ppuytd3Vjsy1yCqRPv1CoR",
  "key22": "5M3bFAoZNcMRCyALuonhFBPpXVtHptxsZZoKZkymhbX3VdNHoFymD1h4riz78sXNw6EbtJSn63HxrQfw1ff3Mnmh",
  "key23": "4Vxiv2sVqUjgvbU9DN4UorthtHozu982J42SHRho5QgPt5JMdaxu6KSUQp2VHEZXb4tcPmmczKD2fMJSrwN8Aw3M",
  "key24": "2paee4QpsnKss62ajMNiHfzVbmSFMQUPbbQoYSajbsvWEajmxPPBoUqn56R2sXAFZJ5wbDZ4CVDXQ17UKpxDEMBH"
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
