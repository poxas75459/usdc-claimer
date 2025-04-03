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
    "zb3pwVZciw231MSbcsEHxLUP3GKzeeorND3vDMD3yTNkkHWzykmr9sDkBbwaSK2aGujGjjJMYkutMRqMMjExa7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCHDDEYY8hkhLnyZw3BxwPMP6XxCphmbXhpgv11tE6RG3LgCZ4A7sbv9Z3n5wn1Jn7kfwrN4GccoAnTyqhrexEu",
  "key1": "3RDVWmkkwdgit2FVm2SWM5LJ63RaK1JPGHN1JujMvjCRYfEEkVi3w5ykMimYbts5hX3XppeUViW4mRaN5Hi37iuT",
  "key2": "35qbesewZz981m8ju4Lt9hrU5sHE3XkA87a1nSuRLqticRrhU2q7emuMyfmCozGQoWcBwyiHSSAUr6gsaj4gzF9x",
  "key3": "3WK93Nj1xrjGHoHmzqsbYVkk4kFDH5AQ8UYTEBnJbxrjGZFGnaXXzaGLqNSA5NuxtxTmLKQ3GcKwz6NvcPyv6Enu",
  "key4": "3z7ZdaXYnQ4u9eKSaAAoagPRdmcShQAbwTAe1ACuTmNN6FAAcTbvTmQJPTt3aHHswdfmfcaU3Jj8MmnNcPgR7bJr",
  "key5": "4t45LvZ3LYWaxCtirahbnPEuZvDpTX6SA3o7cCxZn2oPcR5Kv3isFEcskgoELMD9MiZUUrzGaE6BeEskgVGpaNrs",
  "key6": "4TZiwGXNU4tmRhhUZ4iUtqi1DCCAGeQS66xNDJ9KTgxPUFM3FVkKc4GkzszotFmwGpiMhs8acJxWm3Q4eRm3MXUM",
  "key7": "2gRXweLRdpBVa46wQD2cTq4yYaS8TpMjLHSfae79cJbxLyERsrN7yYFpkrekEekfQ67Af4dYmvDREey3vW3HF1ur",
  "key8": "3AXoh1LGDwbpabssufhxfEqyesRe7gK7hWTmdHauJkCEbxbvHpRJSJPGMbbNpXm8CveaLRe4SvvHjD9avDcPxnh2",
  "key9": "4xycHijUDKA1HXhyUP5NiDoBg4oFrcAnHWp9UwCiafwkAHXQ2VVRJv2RJ9MijqeJGyJg4QGKRJWjjhuEPRCTBA1i",
  "key10": "3it2MkpiD5igr24pew9kFfgqB9tcEccUiTgqpmgBjYdexBAkrsvRWWMUkbpPhL2BPgp7ZcWK8yC2VEUVFZpQxtMJ",
  "key11": "46QfWj4MZ8kPDFxqrjYeRrz97QV6eW2CzvzvZrSbqwaku9KjfmbKDf7avJRMugu7VhKz2Q934BfRXKVGHeCQ2ApH",
  "key12": "3mEsQ8Z5bpvFuWnGU5qGjjfUGU5XxeSBRS9hqRwQkws94Hj1Ms2AQx5vbiK1hntwqs1A2yp29i7dBcAXAz9DtfeD",
  "key13": "3iofd27Uzdy131AfcjiAg4PkuXoZQML7xRQFdnn9nioVjQ3bfmwtP31RZ3AZgQCGXWGpYPM7pNokzkxTM7TNNHek",
  "key14": "cboVBiCRebKzhW1bExPVsJDcwAhJd6Rp4KgzYB73qgDKJ9UDgyPtnW3NSPnjSpwg1S3CBWE3qwADgzpaG7F7ue4",
  "key15": "5KwXadMpq7SCZf6Ldkeexh3S1ihWrBjcKkabJBbfRfXQSyEbAggGWrf3ksf8z1MWCfJ15idfwNVizxDPruQUDoRf",
  "key16": "24RPdnMtdsai45fBZEQXhB47bDymzaeHDFauJnNodxkVSLXv3kVJoQ38C4GWht7uJcUZGeJcsNeGY1fGvqbKqxEe",
  "key17": "5GjDK5bkiAYfns91JRUDS9XKaqRWQWfuLiCkCBEHZH87oTZvzXwyUFGaBkEgS3qPaQsbpQbxQ3Qyj61TYAzb83z8",
  "key18": "2HHd4Qp1h4BaZqEoaEqM6CVh6ZxfR2e8ad8h493pXSR2X7TqAYVptoke1xiKkYxSHtTuBgmK1nGXzt395pG7A333",
  "key19": "38S7npCqFDxauuWtyFhZV9GRNTteMoRB9iNcJFuvABXMooCwTsgnysYd7AG9iEWmnnsnNtw6mbUtzf8kMAXEDQf7",
  "key20": "2ZZTFW5BdugeistmuddwHTF6tUCVq8VGsQg8Mke5jhvUv1kmcamtrdbcnewJsxKL71PXDq5d3tZaQqe97errxVHe",
  "key21": "2cVuxus4PvH4pBkj6x2KSHBxhDKv8Sxne4b74y5PA1k8W3vfFzGvZYBjJWDurzX9Fzm6HvEz7uoPhAXNyVMLpfwU",
  "key22": "4BMuwZs6fWcvXNzTFaXHCgwwiALNxjcP8LXmwMPsyWbqXac383a72UrfeH2nUpVTcpNN9mUp6VVwCDbvuKWueUS1",
  "key23": "tM6fvWMqyAv5ch7Hxoa92JPnCt1Pce81MAaoVJXENA3eDYzSXBH7ZuSyQaexG8yVQGrQuvuUvgFW7txuSVkky3u",
  "key24": "4CyjvpQiaEJxCYxCiEgVnJ9Ds98vTKNEABpovRJj1J6ZEqmaPGJuacXXq15DbiztFcDvzscbq3ZhVssgjAdp9bUK",
  "key25": "2mzZDRqPL9KsKSNsKQzfVf6f9AgkJgqYkG4TcaYk7H3cmYmRJMHhuYT6dtq8fhYu3xEhRufHsoncESNkTJPoKRmr",
  "key26": "fSRZPpDNzry2Ucr1G1QRzqobuKjvpDucVnsDRi54k6KJKUCbR8GoXLcxuwB1g7FZYw15LUgDND5MPbkBStW7hfT",
  "key27": "3TiM6xqjEqEGuznBF2TrDhnj9pXcPLJ9xbLmTFAeAKNyr9e7WVjNwpKwrKwPvypeViRZ9bGz613j6pNUkLaHQVhX",
  "key28": "5Uu62GXLSDLqmrQd1q1QWeQa89VYm65v2UjnBti5GR4LduDpQUfHoKx4R6XoiJAisaSFWgb8LdpSHdx7Drhx2aqg",
  "key29": "49nprSXJ9K71ddV7uxKsEqfGKu2VCjNaRPGD2YU8ePX9tmYQPVJbUX4QjDMduJjeGbZW75UDNqx5sXm529DorHA2",
  "key30": "2bRynyrx92vKPtgvyY1u4hff93motAVhKygs8dZnJnCfjCR32r77Fcs4TAPaDh94JoEjwBadHxwVEPDw74sJs2tq"
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
