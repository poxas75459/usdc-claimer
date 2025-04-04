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
    "fjewEtsPyrZkKNtZhZbrG1ePy98M4WxWv4bvpLdWd9Rp4XqPb4sry1gPTxcRPTH65CuF7KCSc2LcShsAoi7ojhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZKH26Mg2uNSw7RWgziB7TfN6s4go943viS95UxHSnQ5C6XTFbH3cSZYKzu9WcWrzosHWHuW2Dhh96JWBbkGY5w",
  "key1": "2ooLSV2JkPDq3Xtp31Bzm8huuaCUsP7FzVUdMXhWsp3cqqoh14ZofpZi21KG5DpCzvBo4s6LQD5mokxrTDemFXwa",
  "key2": "qbywxkGp679165UUMoRE2xXtULnJYDU9C3ukYmMtxTt3GjEQtPoLEULU9QPANjPzwsoanQV7UFf6pA6HHjPqn8i",
  "key3": "3XpeirxRpSQc8Fc2idYFDKjkexiGbvY1mPiXySaT9zuHffERU3j6nP1oKRPnbdot3ZTWxW8iiatCZYdfSRcnT8uN",
  "key4": "2HfCm8Fds4n8bBvSzFg9unKHHe6ei3ARjikLcKsZmJ3gzRtZrTq4e85e14xBqUdJKphR4WbzgfpSJSBP5cRFKYK",
  "key5": "2FUmWhvJLTvoWTgeWrpB2GE2Daa3omjrZMGVwqP8v9geKTiq2ng55UzHh8ZkRvxuGJCTy5xiSF2KukA5BU3ShB8f",
  "key6": "2XDB6p8WYcg3Pzja1r2Rs8Qu7FZHaPRMbNuSqAYBQX8euV1Q3TKNXyfSXNriAFVeMuGiToPUVmSUjedLXdnMmiJy",
  "key7": "2Ymi1Dxg7TENALa1PHvdTCLPmFsquQqMHS4UReeAMD6zLDHtQakJMAWP6Gd2uqH5d8Cug2AdRyXvU4htfstYn6AJ",
  "key8": "3aWDfQKgw3cduApY8crNhDSfWEhfgVnWn2ecNUVN8pcZZsPynyaw88tgJrBiAq1qXkh9ejZq8A8yEiv2UNw42CLh",
  "key9": "65mJM2CtBzf9V2RBMvRf1rjKpv5tLJeyMy9JitfQ8B3XXgeWEURKAMw7FbuQFP55ALznWFiQ5d75xvBSeEmK6qFF",
  "key10": "5KPkyHAN7rvDDZ5iRA58arqRtsjBfrXPuZmJJwjGKcyzFshCmnDB55hdrcB5CBSyNm5yewSguABfzPfRLqcoHhvK",
  "key11": "dAh5S68NDhhsv8z87FEeFWhB8mXSnv5rwCXAHztAbXu6A65xL4SthZCaY65p1YgQToqG1FwVNp4m3A3rzQpHnws",
  "key12": "GeM1Y1SEohZPB9stStndnR3n9JEjq8acXndbLBMNB4uYMo2mMPwXDcKsAqx9RXuHG3ApkwCVV8qPWFFNNXStTtB",
  "key13": "5ykVqGNdUCs8mNvBGndvCnfqWFxRu6oW82pYgTDHz4tFqqNAGP8GbPN7vLwJaTgVg9kVUi4ZwKQMUVjhoishJx63",
  "key14": "2MotDRpnaAzLdXMeAPhY25WS7BaZbzjmjdeqsWBqnAUBhfNYbGVHGFjqBDGK4eH9HezU4eaS8pTmqJF4ZTQJGmPa",
  "key15": "49Rh1FwQL9cp9dWXGFAJLUFjcjuoigpiZ8Pw6MyDsaDUbbH73XxkS87eFN1gcBS4w24dycGMeNewrzVnjrKpTN9S",
  "key16": "2g33dHKUvtZFrhJZcVQtzVrC8BEuyCDs9q7VzfknBWsfBo1wWzNvSG5Ktnq8NCnbGMtWFippkFjV5UkgndVy3o4r",
  "key17": "3MJvjBUJRsGuy1pj42L1ArUz5ZU7963J6uggK9XS3VmQm3BjxRzofxJoiUdiRcbMRPPTeAWb92wMnaNeoLjudXpK",
  "key18": "Ab3imYMok6WVPG6EZkXbuVHD1fv6i1XmSnBTU1MChfResMwG5PyrEGukT8Lkswai8acPv8gUTsMJLPAE1oER4A2",
  "key19": "59ehWGSxUuehbD3YA1g7y47B1tUr9KnR9fMnhDupGagy1gPiopV9cqChAzAwtEVTxPNLNdKxfdj2K7SUyHA86Ekq",
  "key20": "46aRY6N2BZWnfqs7simv6keqN27snMV8kQg789ZxTdbG2yWzGWyc5wkXftcWvx7pXpNartgxoKMXYep338Gw4Csk",
  "key21": "frtn29NHpVWKxcCsJmGRsgqz5dPbSCtfbVFXobnove1dSxogA1mUNjx2XrAd8xkuHwJ9HYjuRBZ18g4hnhMLktK",
  "key22": "61Rh18zi8JnUwM3kpUyGkh6rYE6woHtdD2DKyAZiDecLYPCs2NoeMq65hhSXtRSuC4uLfozjnv7v15dHMto2gTgi",
  "key23": "gPTfNihLce2KHcKZCe3aPmVziGsRaHCxRNo2JmwjECNYuw3rF5WrUWbENoRJHzztSsSGmnzzNb93LBAJUU6HLyK",
  "key24": "5wDMqoH2w11JWiWXKJiaPgXaBZJcwixTcVhQFFXhHJqTLnShHERFon8uAMBuVYuiUAdtVL8UYgfFtxJ8gLRNXYNd",
  "key25": "5bGE4rfBX3VN4u6QeYoaAF2uxbk1sfegCNd3kjhveQFQyoyLqHXUV8i2cgbdMMWgTPCfHP3raMMep66dhAHsFYkz",
  "key26": "2SGEfikCRRVPd6UMw49ZfTiXa1S81TDmt27d6BLVqyYxHQ9oCi1ivhXG6vmkRYr6eHHsK6Dz332RoTr1BazJCbxo",
  "key27": "jZ7kwfg5qvh5qew2ATEfR1SELN9aAPEswaMnzpdVgB4ZLgHLeoyrPqBGMVnYpHwyvzseYX1x5PqSfakitU3jPZ4",
  "key28": "3YbBHw9gLLnqZgDCCEeUSUetUVnoggyu7XYfAzunKhe2QwqtyMiSY28HbMe6h19Xm6tCbubsZXLsHyjTJSJN4Un8",
  "key29": "5s2c6ic1oyPrR6ZX82TDvPHncugeioVPc2j4fj1ctovmaiLtncGXtYSDvTLL6LG8yvyxFek5EGHnGjmFjTxLfkpu",
  "key30": "5jUreH7Bp3zoZTKPab3SLa3zMX9x4nUw1Ki6iVDFyr2fGaLfSKUVbNzbNgBeroe3729x4Nrv689WFoW2Cs1t3EtK",
  "key31": "3tEgeShfJc3wdtM9p5wLvpDPxbfVaWhANfYNKndHxdtDnUcHjTFApbkhpoiEzK5h61oAYCUmSMgD4RBYUbr3AhNt",
  "key32": "3qmiRHtSkaLzSxqzxiu4uqNPRUuAipNem2cMiweD7m2twFEpxnG5vdJyFZLCvP5bSMPzmNY62SNE7FJ5WT2ULqS4",
  "key33": "2Bd4GoMMeKeZtTXARqYK4i6StH1cLs8zCdYnD6L9u9zt7SkTPwVQrzcrtUVD618Yi1yK2UMaXc7cU25PEzXdjP4m",
  "key34": "22g7tkLpPp3TaPTFtWCQopvhRUSPKiPGKbxnyqHYmQJseSQouESPZtAupY6J8P1owdFJRL1Z2dRw8WeTpiAJr6LH",
  "key35": "EUMSkcfhLFucJhrMU1moYt1Tx1v8AcRuZzUQVeBWXY8ME8e3EGaNPEFMYD1LKgeQQtAR6NzcyyZkCQbn8TJPGDY",
  "key36": "2pGhafMghZ6Y8xdfw3Gpq8YDBos2UpePar7sqGHeTGTWL18fHgTztJiPqVJywZrhn6ZPz7pQLSUjyBmh5VUSsNCE",
  "key37": "1us6k7nrk3yTnC9DxSND2rXLuAzJR6zop8Mq951WMAXdNPaoqjvtu8Bd7q5n9cCtTQvif5NUdsVje3XvSnrFmSq"
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
