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
    "2g19GLkBGYWheHGXViqsiGqd5PwpQdW82rqWGFEUo1vi88B1xDMM66A3Cq1kFojoobagw8STq2nxbJvDmS1hTyaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwENdwHjVysjir4MiUQYtyLieLRV2s67G6C39NZs4pgXHx4PVVLkENr9nzo74KGyyxpifAfFKxDDjwQV4LN7c29",
  "key1": "33UyNk1skfPV5bNAJ9UWd3FrVYHx9HpBhRswrfZnZEaRGrepJ4VFHNYtXYxxzzpFuusJVqfLUgyr3SZcveUo3oiq",
  "key2": "4D86LbydQTFSTnPpfbJVBUEbpGEcNaLvwKkSfM14S5HqbXxAWW73uAZJDcvTwtvQRwTMj6vS7Mh3cRuabypzVyMB",
  "key3": "5NJghCBFnR9zBfFfShyTHZmUboiT2G9wP9vUezqbPRPXp7YVwEDvrzePdw9npRxfqJbjHcRobjuXHSpHi3sAwBHA",
  "key4": "3kceC65fj9wESPq1MVhi1d9Rt6qJmX1KaWYfCUwhQyRExizDUNcMo8wpMCo7bhsutPuymDT7dCp4rPV11T5kc34T",
  "key5": "5kTGdM41zchNM2bJg4x6smMsNxTP7QsvhVRTUJ7tsFeHZ2r5Ubmp65Dg75ovWU7BrmmJv4vFfYDhtNicVaHXMT2E",
  "key6": "23TEKvGmnys29VSrpquT7DneJKU2Bk9quUWu9nbmj7dXRPAqxsXS5svHWFW4YvfosCmQrsa5qgBioGUVV5mJxG9g",
  "key7": "2WK6NAe6jho2ZgsVQdwY4KcHpFLjsqfd7ucaAqZcuyYDPr5J3qEzTHvWbXgosG8obRwBZJeyeQjzA6krMhzhToCz",
  "key8": "3Qbo37449eAuRx9Cgs8d7mGxZuw3CPV9cEVbMJQ9mPhUCCDXi6ARvGkJFgc1eyd2RYwWsrwVGtiB3vAc7egsHJPf",
  "key9": "3AWuAVQqfDmcCxgNPrMR2UU2vA2dGXsNFHwLw7kJQwiwQc2iKwFiEirkZn4bAFtLdgvx4cieEv8bDEELazLRiLH1",
  "key10": "4aAi7AX513J1zzANgpLcU44SVr63pkgTqdh2vUYp7uX2vsH7dneJWsXxmxdG3W4PwFxvSHWwwBhdpA8Bc8yDDooy",
  "key11": "2Y5t9bK29UhDZ3UNLiXZpXgDeTwTRi7aJfNzSVhwyeJ4sLutH8jfoSc4KVQZporo1rzSqBLJJy5CkdhgdGsdkc4H",
  "key12": "ai2rfn7ehdvmeTMQ7ihXkULyEyX8Wr7JA3nNYeKSp7Z9WTbmSZQRJXvNGpcUKCe2dMcmyo8CMaBqRTB9E2JrAM1",
  "key13": "4ChvTZ55UxAxRjfJmWjjpCqpX9bTWvPaafm8ZyT1YDETp7yjZfPYVxAfeHTcyccbCZivMmRTVm27uPUUeKt92Mbj",
  "key14": "4DXZrmvS1N49TLZYdZCXpz1yopUVME4k8uf36uv6FjmbofoyfVmM3SvMh7shkC4sW56K9mVVs165qu3A464TyMtU",
  "key15": "4QnyPBt2sUAj7GzPTtiMeEW8Jajc9AHH2PuyZ2VzDcooEjqV3bAfXYK5i5bCVob1RgwySMSrCsh6Wh43nJHwmgV5",
  "key16": "2mgirS2SLtX4ns5qHRisVRahsjPgU8AnvJuc2wbzDswzjsv8KzVwNMX9HFz3oZhupKjL5LNJb9Fm1fyqSbQXSmJV",
  "key17": "BbLhbfNeiSAmD4XKMeLjhLcDi9Z85MVsz7kPBfrsuhfMLiufUCWK8qC4B9Xq3GjZJQfLaZWYQytTKPdJNr2qGAT",
  "key18": "32RACgKfeFhwvkBSAY5ahJ1xHgQBCmSESaHVdUvsGrDzog1LgaTW9oJkSWs5sNwSVfpKkfxAnGxBeFsup5rVTQNA",
  "key19": "5CYQiqwxtFx7F8atPhETa4PBE4YiUisYoBHY4xbkqMhQq7b5RQPghzR67qin3W8kcLUM4YgpnwwUxtzLZrSub2aa",
  "key20": "2GvMv7p8GctwC92TPqfptg4efic2P4Q99mqJDBy6FwXBwNLW1NGgnagz6YzfgtKJye2kD7oRtDFD9o6gBy3kf1jj",
  "key21": "3Lrt8nMrSKNk2mwcHhSMRQej9wwJ1TKPzBKwVotRGGo9im6v5CmqszzrUuRRioJiUiNn4JsWtXfj3bMFGCtCiA9r",
  "key22": "5FB8nziCpe9bGTMA8bumtoJBEVJtgjSXC7WLotWY9sbb5BwW1gz1sMWy7YXYG4MyARjEfLE495JsgMBMM38nyxyK",
  "key23": "3HrzZMtz6sURLWgMD6jumZWCtbZ3yAtYPNDbmofQ7UD5NuVXnE77yu51AwtYyi8VwC21ymRrjKZEtitpJPAq4wLe",
  "key24": "2oZk1H9BPgDni2jodUEgtr6bXWkSX6eS67pNa3SPJqeeKSMk8VYid7vdyVgxmLZyHmTGq1vG2N7tKBv8PByDLZpA",
  "key25": "38WMJFTeHJ2JymLLJbnjafD42pfGxmaYvJAKgmhy6n9PqLReFHfNhjKDtiEsGpWta1DGorbj7TGLL9xu9AQREofs",
  "key26": "28EcTMDzEQHiSQE9rXZz9nSfyjcbkZmLmGXnurBXddB8PdpBbyJ92vfTQSLHzx5mTkvPrf7Tm7Zdi68ZsMrkymEP",
  "key27": "29Jx4HEw2wi2fxcHMkneENJJxSCQv7Kb7s8vmbn97f1zqC8oAYsReRTLamyyhH3un5RVpjTrGRP1fmVechDUnZAX"
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
