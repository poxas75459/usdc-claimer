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
    "4a3vmJSHqCTeXbm8cu3zm8Ko8au9Z3o6HCfx7FrZD3AuCHx1nw3qczSDbgTiCP6TFisTuv5Ppmjn85qXjhv2SfFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3zybWCrHJVYEDr2CvFhTLr552HpbWirWpm2DhGwWLMkSwGFk6F9Fsp7CMksicEDk6JkQpKu58JyVVj3AJ6vdBC",
  "key1": "4FegjoHjcyaW99sY75o5K7M1XXD4X81d3BvD9mBxKZZvdEw7K75uMoTyyVXcLX8tanpYUQczs5BvEtSfcAQAbDuY",
  "key2": "5wpYb55QdhstNRERoVusGNyyc9uWiQLSb8s14dKzJthyChA4WMVoTZhVXAdX2c5Z1a8jy2CTRpeW5LLHZH8iHejW",
  "key3": "3Yyk3URKTEBNsibC7TFpZCBu7aTHbmX9jx14Cecn4rPeLarcMLVhgNUnFzhC7TSoWyhSj3gbj6oGvDimDi4TkmW4",
  "key4": "4Lc9D9H4yiSpLJk7FNq2PR9p8qDumQRkFwNtf146RdijpQsLHZm7Uoj8QVKEZUG9PcMtUZj6MJ6HMZatFNvXvBBQ",
  "key5": "29xHRDugunskv1dUjGDrDhKotFYKGnTBdR1kdha1ngE4UEFaUJX6g2JB832fKWZbBMwFsgcFYaduqZeRHGwPiBRQ",
  "key6": "2PPsYBLditaHkVVpy4QmviGyGRED5BujyWcmiZT5RCBjcqkX2xcCvD78iRnkczHVmg4E3azyg2Eq9trXD526QvFz",
  "key7": "cP7Sh4nb7wMZBL4hDfWkRExZAv8VGBAgNQT8q97A6hq3Tg9aLae5YWMvzeZvV5QJaFBTeSWTumhmc7M8nLjAbV5",
  "key8": "47CQq7iwTNAhPBnxM23S3p88jFtq37T2jQLvNxRQc5vcSHtbPuRizWpcTR2CWA6juqBPmdhnDNX29bF9HWNANiTz",
  "key9": "5F2yujfzedGzmHuEMM4CzDU65Wq5MKcnmUZVyqeFdcWWqzUGKnDPJYUoChY1mmPRYXcFMQeF4sveybK49BpvHyBB",
  "key10": "3uMCsYhGgnb9hFGBEGPo53LW1pyQVaAvbsvnvM1FgbKQuG1VQsXmvPXvWNQyUNcm8Sx9gv29EpKamCrDHDeFMy5g",
  "key11": "2zWwpk9jdE8gvFR6yCmqgAq3bsErJCwkfSxkHcLAPqajWRYDQAWpf5WNnEsdoXED5cyvPCEhM4zkxb2gCw7ouNgA",
  "key12": "41DnHMXM6wwwEkwDPFCVjBXZvzGs69LpBQCeZauXFenmdEC1kGg6LTiUb27jozuUuBbNhAt3pVFki8b7SvDKwBp6",
  "key13": "4D26wrrDmvRdo9BHwy1KHDufbX3LmAmzVgKnxupuQzg5uYXJwVt97k7Pa6hM8asHUJKb4bVsTr4vmGotrXGJakax",
  "key14": "4WBHmscTuGEQSQwP6DoCZcdKZJLgbpsPFDsa2KF9yhAaNA4aBvH2QUPiAAJNhTdFpcwvJA8XxGcfm7HYzaBRXz6c",
  "key15": "QrUMs7Bh6xuXQroafr912M2EkNeugusqNaYzqS4QZuE3FuiYawE8fqpQ6XEyTw5ixw9pkb5NRFokxoJTVG7WKbT",
  "key16": "2cXxRYNJLhb1QFhMZHe6WqL7G5qiuPbsxc6k7duq3RwhQtkYyJKGkkT9dC7u4ChuzqDxDL1NwuXDPAuJC98Mzjsy",
  "key17": "2i9X5FmH16jtdZSnpNnAQekKG3bH8frNRZuV4CibDFfz42BPbQonSk49z9AaU3FEsE6YXp2UMc4TN3B5TMN86BXQ",
  "key18": "3MVc7jgchqN4xC7ymLP1snYPAD4aJxJRbRC5Pqnvp8o9rohe3zgAav9GAdAU8oRQ5bHmchh6xvp78iNXr2GTyGQE",
  "key19": "3puvfBmfbgTNFyeDuJLw86MZfENQ5rqovE38gVo6dZQ66uDTSZTCLihvvucFbzu5BMYUdpxHLAPJgfKqGd5M36mq",
  "key20": "64FMis5mCABBuQRohSpxivuG35w6VEnmQgiuu3CMrDutGYhS11RkiH74AqaY3FGkJTAetpq9w1NEhBJyUtPP9ncF",
  "key21": "3Axr5JdrwHZVYNrhqU3Lf6zhpP5W4mBQnaoLdWC6Xj4mbyLp1bwm5Rc6EB8odDKnVDoRFJyKyv8GBNU6pRga1aRh",
  "key22": "sNy7xXt9Mvxd7x1ApX8Ao3HWma4bmH5tvrJu2DyDCHkVfwTD9Yz59v3r1Fo1PX59yZ8BmLz11z4aiDqVPBRtG7P",
  "key23": "4MPHZAVT9VMgRxvAr6NNQzruVswjoMGsKbAw5TTxqSQ8uZn16xybAoRVQy2s86d8UJLDB7UJRMBWRpNW8VX9v2RF",
  "key24": "5ksi185qqacf1UzRa59Yiw9sBiesoz3K8pVKnmVc5X4HXP1USEhsxCamSwNA2PPZSwYCXe85mfCJzuxzVxSzLnpP",
  "key25": "4qsSJmMQsxtpeMujX31vn4xptXRFQ8tC6dz7fxikJc9vGxFXtNff2p2GgyLkPyD3LPyZBjn7GQNvC7EzaaVrnfgF",
  "key26": "8bjXNvtHpxo7qhTVoHZLYECcUnuAF2YVJ27FZmCZbm2xkqWEEoDsypmDVvaDoEKSiFjTHUrguyjUV7iVgsSeLvm"
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
