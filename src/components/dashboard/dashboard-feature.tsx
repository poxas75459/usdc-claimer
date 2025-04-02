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
    "5i1hL61fK4xui7awyZm9c5JKAsESiqVhcP2DxNN4NzgJxkmcVWbxscx6NMaEyEBrHJZWEdyckh6K4bpLRikoKMKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gctEEWR8ePL9K4NGaEpF9NZw3fC6ma7zUVJEWiTRY4KsZq2ZntkgQKDG6VnnVbwZydpDk7mLidwDd13NrRWJaGW",
  "key1": "4UTMJAVBNXMKuhMAn7t1oUio1dqMFTE55p1t8C67Cq8GZohNJsb1qpsrLjAaMDKYhRCeUh62JLUD4GHBBSu6gRmB",
  "key2": "3gvAkU9JmK8tyPSAJAbpND2u2Xn1cmMBwd1cLb9Whgi5ykYEZTaYKcvJE7fHwwDqMUVrUpNsvBgB9F6twR7RW829",
  "key3": "25BexBPDiBSg2VbTjmDqm7vwjzmbKW2vWacrtQjDeUwDq989gJhvCsqmyugWpuvGTSqpQLvc6Z3gaLpB1PH7XKRB",
  "key4": "2mYEbSt5fyiyGDajybk3Q4i3HH8HPhYgyuWgTRZNmwCB5ysyeM8mza51DNkLdnrFDyNNYguhTUStXfdcsjJDn99n",
  "key5": "31YFQmj77MgNmY2GHzHbELkhtNGm491dRnbvKwKBGNUNYyTNyCL2kp61a3zj6oPsyEB9c7YDgjKNkzZpMY8rD3Yv",
  "key6": "4KUZrsyhRd1ENuDmv5LzvUTvJWvbYcHg5BRzkpgZNV7WfMrzdaPe3S7d7WmyNRXX1gFnEnrBB45RJvP8QWEpyppp",
  "key7": "3cp7qCg3NpXs9rz8k1zyYfecjJNoaAJeKFLvaUfk5woa1NFKugV5nAVNZ7byiHgqjkL36HfpZk55Y6P6AVxM86vC",
  "key8": "5b1RxBugN8hU9nuDxgCZrwm4msXowjcFRRFJshmxxTKwYrT3yMES4TNMbipYKF3saHbv6wRdoZud73WUpe3UPMYM",
  "key9": "CreGL11n8Ge8N3wR7AAjMmYHFCTVR9EUzyt1Kx8QhSAtuBuAcNqKpyGsEpsFjszXHxBBi4yyLnfHgGQXxmQTsdM",
  "key10": "4uuhDiYzrA2XxP1WiyPxBJ22cxWN37XGupkvYKiktEp4owACS46RcQfHBgEqbqKnBeLJTxzKz34q859pJP2pNHnY",
  "key11": "GqBVPukBp6n5hurifDPjFErV3FNjyFEdHV5B64uzrG17SkV589vud4Ahp68xR15bgfdZPPRToMZBmfFvKbzFAAM",
  "key12": "3EVPtvC6cABPwLAXg2LCDeK35aEdosCdNp8rg8Gb8oKxeqLc2EX2FkDTHmWax3NR3hR6VT4WM3rtMQ5KoGkjP7GX",
  "key13": "3gTDAQYUeecxPdG6g9C9GdDv69ewk4Z1k7KS5wXPZ1kLNcqvadeN1b8yKXp5JkuEAmKstuByiivUjsBQP52c62Se",
  "key14": "632CZ2ZhMkDe7Th1UBCp2siRxBMTBRmsKX6dPHMG4vfgtnuW6QRj67iYZQXDsk9U8sqy48u8UZJUNimYqpbeetw",
  "key15": "5pnLwHVrWyYt613GCA3ZSMyEY9JsfBZsV2KGavWPXamrMMLjfhCFj9cpfhNWdMZVaCuVDYNnXkApM8TcvXuK6xzK",
  "key16": "42giEGtHUGG4fKCcpdWrhGz3MzXSbKeU5GdUuNwq8a1HFfQFhJJHhZzPcQYZRmvnb5Cvtn86eF84okTjRv5P4dnU",
  "key17": "4krXfCqobvZZyAVJRfKFVoTLV364NyP4Ms6RwowjfUGqumJ3Uytzjit7wXcVpXuydwAt3LvqqrmKDq1SygxJpN3s",
  "key18": "523eKX1L8MUUd9YTU6qjbjMGHtVtyCPhpA4mP69SCze2x62hje1Bv6TKsjk1LbzzgwdQUu67wsvsZsYPE6obVcsj",
  "key19": "5U7SvqK1cNhG5pa2EqJwkCoKPCqAciEJLjDERpi9p9kvekrPQqrFCSbrSgZCEtMqgdRmxUXAJzLBannBJj2ZUdNN",
  "key20": "DKyPqFGS4HofUAyvkx3D6JNTkGh3nePDpFBuFmEhWb7jYnMxgL9YCbFYVV5AVAEuHf5s9dR9vWbVVznC3tD5qEZ",
  "key21": "4kUBVUESxSuvgnkJXSKdjsWGuUY9vFWdi4UZhRY7JgfFEfvdNkuY2PPWFC8UgkKo5z19pbE7z5AKqNaryLWSWiXZ",
  "key22": "46bgjec2V4LC93ZMFEF8gMUMK2uNFJMAM6ZmsQQW74PErGrvJZbS53YAsLKnkEbiGHef2LFkDBXVfN6FBRi88qk8",
  "key23": "2h8FjcKw1eBcFf757LaG2PUudAfoXhNJ2CbbZDrYietdkV2yYAtNWsrtsbNYKC9xBTwggLAnRpFx4WpB5cBzpSku",
  "key24": "62ZK3vF4nMZcYrvSd1j7L1LXP9weMTwXgMNWcujbm4LpQ7NP34e4NPKfvYZyyfbNYmLt2AK1Ka7QHyY1m96eUe4q",
  "key25": "42kdLykVarEmWymWK96s9R78Tips5TPoUXPDcaBT7CooP73AyrGMLmGb6iMCNo7n7wxYX6JxyLbHYhoXRpAti24s",
  "key26": "tYrnXJgRitekcjoNaC5rBZfREGsM4XYd5F5J9ieZCRkNcAtiq4YZmD6DpSmaD4q2KS2ddL2mz7FmMRJpqg1feip",
  "key27": "2suEB5RBrsh4zHsjgS9c56TPzeEHk7zDEnzig4gd1VWubJJ35uqwjk3rNS1q13jwDp2MheTDDk4Spwh7LNdPXZVM",
  "key28": "2iCr7ZJpKfddsnJT2oeAXDB4bFpkRmjm44AxrY3F6KD1nEiVp1rqmaRvHM7pKdnbYiPj6K8nAZSbDmD6KbwVYj6k",
  "key29": "3KaCTA5o7U35799EP5zuyP3253eodX4cSkxuG5wsNizjcHA1wZZZj5KR3ZkJDSw9t8kicAb6Ve3EHRXQmvtU69Do",
  "key30": "5VDgM7eWKTFiiEbTQ4uNpifTJm5GwquDorboL6akU56rS27Wed8hACettzaUfzzcNJiMDTCVcw6oVnTZTZM1aH9w",
  "key31": "2PQfoGtre61eeaS4Ry6Y5vcj2FpJ9hY8xbu1WDus5SNwcYrcAD7ZFDP5W58N6wEjS59wXXZYNpAPV7gFTbt8d69T",
  "key32": "TPga5FBQm3rakTUZipEEFuRXrNY9AFL37eXhAdECG8U8mtqgihkVH89b4jEF9qJQgFwRTUtcht6NjWw3yXvfSzv",
  "key33": "2N81TgPq8GrdWspPn73Lgdx6T44vbC4DqGCa78gM5FdyVWHasyTZA4G7TRia7Tdxcoq4Cq2jBNUrqEPxyPcNn6cA"
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
