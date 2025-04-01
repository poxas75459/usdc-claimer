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
    "5Un7XTucTPHneCtipXtcj1ZiCAQGa87L8NQtdTwuiy4TH6nd2SqnGpkycC2PbXtjMSAZLnV1bpujUBGmvJoA2hNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56jonhb1aY8QCMcFxibfKitwGtdv3QZsHn3pxEbStGtAr5uxLCahrSaNretv1PqcTNJdk7NBK4gVTPdCjL2htg21",
  "key1": "4BSPdVtALfgKA5LSZpQ9HN9d22bGfURzkFNTvAMdYwgpgtqXgXZodAv6PXKohqAPkduaqHYURVXVSwtXeZ6xAB2R",
  "key2": "26ZhR6TC9YuR7SVJ1R8M84ugF3N4J6sGXWnnXbFNo1gyefrccttQKMhfxqPL3WGvesgDyefxSgJNBWFoNirKfJHC",
  "key3": "U6u6LyCPp3RWgQdCpGNLVZAAiydYsG9FydBEbC1hvcZu215uoRXSAteebLs5rGKS3Wy29zBrvvVM9YbcHMCW7s2",
  "key4": "3sUvaTgzSQFKGWT7CfEUingJWbUQPXyGpysZBX4wPBZ6XuDk3SW8ASNjQiGhTMCgfDZYV7WGCKrG48QAhjkPuoBc",
  "key5": "5xmgG1jY4bo6qNRi1rB1ghSuQu7Q1SyMCNwoXvVFQ8QxL6UTfoLjhV2RDNkUjefnzGmEzunyQAh6PYmfC3DKB6SM",
  "key6": "52f1uq6qp33wbB3GEZknwwt2PeSbbfa3RDwNfmQ7bCK2X2gQM4w59FK41mhN9e3JuHkaKBtQyFPHmxn53jsVm22K",
  "key7": "3P3BgoaJoHiFvnMn5YJRvZLf51Mmyh2VxZXgiTgqcahbgaLADK1uks4pA1JVdhoU5MmSBch2HNoha2TbyyTk9bdT",
  "key8": "5Gi7BRHRmZ8VEHSmCMPe15yp46RW6anLe9Fw7q9SZFq7A6TUU64P1YafPxxHRcnz37NnneLW2HvCgpZ5U2QW5WmL",
  "key9": "xGJBsjcyzLHU4ny9njZsfTEWsM7qiRgYtnAxr3e5MRscWD3QxDbKZq5Eq8esvJvdmbzXr8CAmy8FQ6gPpeNrL3q",
  "key10": "5cg918mrsFVNwPwQrwn2AYvsQa8saZkczk3QYyprwSo6v8JzY3GNB2Cuyg4MggyHQSLKWwq6MgnuwQNsytBFitVz",
  "key11": "33PNz1rzLXXoUQTakEPoEm73Zvt1sCxN8ut1LbT7ueUmoyWmSU4xMxc54BLppeBsk6rp59hu3PgU8tDqwheq3VEF",
  "key12": "3eRhCdES2fTJZrYhboBBqXSHVstbtLy54vfpsKVd9xqhMLGtgwr3einKCV1TCF8Cw8GaZEpZHPG49duCCft37QFA",
  "key13": "4319SNsDzAEk9kRF3uhuHCjPY31RTbGk8kdZfKy1iqJBwFoiz5Xv4bxQcmQXmLbv9Ujj2oPJrdB2mCMa3dc7DbBd",
  "key14": "eCpeVAHEc4fBjzK5xLJt5jXKhvTfQpDWkWG4m8NXC1tLQ3scmiZfVo7RRMbYdUripMKy4EvZ3KKDepBF2z8GEuM",
  "key15": "2htGnjnxnYQGDqA62dbyoWXaUhDq6XQSg4PyVTMopKf6jY6Nb2ZJg2d51Ruq7Ni9ZG4M5LUJDRsSHJfSKMArQwfm",
  "key16": "eNWiTPxd9EZhpsxtxhrp2SRNwgZGvTE1gcm283UvVvNc2bNJKoHTiJqyScBtkJG6vBgcFNErzLo7ZwHpjCzfRQN",
  "key17": "3nVuGKoU2dpsUrzCK9XRy8gPmHBNNd7qrx4xvMjhFaFkL3uai4pqUjpSmuB7yWDshx6BNWNjBKT8VciqnsfPxMcZ",
  "key18": "66GrfT14Xjktow9MMzbFi1Zbmi6mPrnSiihmZUJxn7iwaH2raapgQSudW6Z5rKFvJCfzMk3JPhV1RZdLyLEBvp3K",
  "key19": "4RnwRptfYhJ6RWeSgQ25HSVFtUvvX4ci3iVvimxyDp2gzttsAgvBDgcbhimDiHPyX1FugRpnEvzruxBV6vBuxYxe",
  "key20": "BeBHw3oucFJKMCaKGYgZXvvE2MEfzefLaLNRP3djH5uXnYCwSWmeggJN8jribTzLhaK1Aprtg6y7ngyVDfT9tFk",
  "key21": "2M8aGputoogtimjt92yTefcbDPyUM55uFHYjCAurxULo2aT668VWViSWyn38mYL5FcEmyQW28RmcLRN5egztRYCT",
  "key22": "5gpp92jPE89Vr5e416dpgN4Kk5UWJ6DANVtd8pEKKVBJGrb1ukfWi3fVfxGwJLLePBWoDYmHsC69BThV7sETDcui",
  "key23": "55TKoWy3wUaJLSnqmAEuSCcneB5cE5RUAAFzeQ1TqPkyzztW4Hs7pnritWqUW58HMiwfpEsS7qtkz8rxtAKZ8WdU",
  "key24": "3u7Vs9BGQbZEx62ietwE14emV5fZ5XmqD3sALwzQ8V5PKhqbEXgy8zSiQWyZffK1iwH5qTBWMpR9uokm2BZE3MeP",
  "key25": "3iuZYBnky5u2k6emK6i14sm5daHjMRHxAwx8NFFZD6oFHYMZMT1siXecLELstfWgTaxfMEmLzpybgmz6uTwjoUY5",
  "key26": "3orXJyE5QnLQyBMWevcJJqww4LMfn2P6eiNDXaRmBee99wLFZ5oz14YPRwSLUQAhHo8sh4Tvx5BRSamuNfcyhUtY"
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
