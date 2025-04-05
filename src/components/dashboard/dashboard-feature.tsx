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
    "2RdEdEkLuCTtYbbjjKZ8rXQhms9ez71Bxd2WdG5PotDSD2GkcZMBqpb6yrpFxbFm4MRAgtLU4Rp33XXgDazKhM4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmejiA5sM2Qce4QDVVX6U25SBVqfQeXwDGde4ZFWdCCv3xpiucEcJV8KP994EMCikzvzwMsRjZySK1CWzVwzvoM",
  "key1": "2rz8AXFeTEqD4P9yHr5kX3nYXKFTbTFLrrBME3DMb15mUwrrfDp4nfHb8yRadoxBv8JRvzBjfMyuswhABacmby1X",
  "key2": "5JD4gAKyq1BihXHxJoWKdaDRQtyX5UzjKH2XxpRZiPf99Av3R6ZtUThirknghtsWqpsGHoj99z4a1ZCiXPV55LRq",
  "key3": "2DZoGSf84CdqFM6TqZSbsLxs8FGQURtrJG7N9g4HpxHAxXngWAv49nHdM9mL8kf5LSboPFMWat9yq59tCYhZxYox",
  "key4": "5zbNpTMrpMDEtW1y74hVRvcjCEvevMW3uEgVmE6UoevUjibcCpzs8oJjcjsHtxma9ScDBSefLvsBAYFq6dc9gVv1",
  "key5": "56Sp1W5NGMk5YJ9E8ADHxH8C2cpQYtpmVcaDyNHYte7f8PWcL6yixRjSBx1DpTj7NZ2aUmP9Zww8awrcRTSy4oqm",
  "key6": "58fvhnRfY6cx7AYKaFCFXGFGReCDimkE6D2WEa2e9pp6W6Agfq2v68Ao2CZcDRNvnTKr7aBvbYuT1JKYjM2M7XGM",
  "key7": "2uaQELxJB2AjzSpswp4rZmiNJYBD4qEGmaRdHAbvyZorz4cSjWfJexTaNBGPvovsQnERKEUT6Fs5i7cLX9ZJy5Rx",
  "key8": "64gs63K4H6bNenHZh5bGCvNHFtB3edY42wL2So7XC9n9bwqHKfjBMo6dBErSTUsYpXYUjEZr3VpBJuy8YP2azNWk",
  "key9": "5AAbFzwQn7NeGWR2SGE8XQk3YF4dnR28g28dd1CRwdhKTrfgN9JFvg3ocUapuCevRpPZP72sYj7zHu6HpjUsWfkz",
  "key10": "4rrzWVQbtPi7odugLbnXBSphMea7dSAWLMse99XtPF3tsJqJef2maqwyb3rHEtSscvYdGM7zKjvDhNkuGc1xpTbN",
  "key11": "5VikNAqkQAMd5KHMo19MEru8Rf4uVzaqZ291EgHW7HhuaQBJkwtnEwxgk6gH7dhrh2BxaLobVPoc5e7dqBkhTY7t",
  "key12": "4815nf9CcGo7iXAmPxqKNBJ3cwoXCuX3dqPexUTusnmsnfeqyYLFecHvqSdYrRJhxrAeXh35vkUC1cUb2Rja7G5p",
  "key13": "3GSmNLRobn2tcQVtBivwEUTniW9fMBDB5mDHJ9EyZYGsEDNPy4muNWFfdRocsg5XtLy2Bt8172QyBMVzFF7kCWYE",
  "key14": "5EmvKtAsAMUXPbvcGBT1kKedimFpAnyPwMqAaZmiSsGRXpqRwasAVz5KK2wjLR2Evp5E1vDc48fSkRC667EtHKmn",
  "key15": "5ti2boXNkCZZd6bLe65Rcu8M31qvhRp6UGbzgHznRoJVwiezQDaWjUULSKMXDevwsQNuBSsd1AxLJi53WadMQsqr",
  "key16": "3S4CStCkWnnJwzr24MZdonHERtwCAz8nAtKLym3dxkrk8XGcaCtChw3CJfwZqetjxWFxC3w7sFD6CowVHBrjU4y1",
  "key17": "mrmqruuwXzMS8Dp2GVaFV1xtEM9izaqkFCcxARVCYoYpy5eqwGqWSMEx3hnHhvVKvV69jHJE5knVEEWcBPXibip",
  "key18": "Ls4MdAw2yj4VUDDLeYHD8hucJRCK9pjtuBrxKs5b8dymXncPVE5oZtP1XTfwGwVh88RRBVz6kznDKSmRFcD1YzN",
  "key19": "3shr2CdiVYd2azg3kriYii4Bt8cU9LukipMJL2Pcrm4KYQNU39D2XmudM4DSVroFUB62q8b8sFehsf3a5EbsHUxD",
  "key20": "46y3iSoQ2Bky7csRo1jCx9VmsttuNWiFWLSNErdkwDq4nw4z8bAioFTvTp2CnKaa2R89Xrgn1S3mxDmfSE3ER1ti",
  "key21": "4VfNKhXazmgvHtgEPse56NthLVdxhWsNAkkj16mZV5ahAGHPs25ZVfm9gPPVshD1YVSnGnmNWcRnPrmZMJUTVUr2",
  "key22": "2WYNZUMRLyxetho8CU3fkGVFYZs2dpQB5sSxxzHK2ZE5rMLEnLgeBNffstNtqbJ3kksSxm1eoMVPWiLY7kpTbzTm",
  "key23": "2WfLwjcKDer5R4BoX8uLNsukNxzrg5ovwNvNoyon6rF3W7XC831mTcekmr1AAK2TADcbH3tgvG16PcSxfTaJJRod",
  "key24": "3w3MmqMWWnp4BoQEZsjNPCd4MoDZApRXz4hAky75vETe4sLwyfk2gvVD7voE8Acth1wfZzF4KBm6gALgzny5tzWv",
  "key25": "9rZtaR7Y8mkSFXpgSzP6ycdsMZ5krBR2dR9exmrbKEVLQAnvp26timKYZfU4h92D2vBaoJBi5kGnH1ngg4gB5Kz",
  "key26": "MzSUc97WaEeP3skCEuQkeCLoSdduJvmg8xmDSJRWEcDru3tLheAXnxjFyedGfjW2DiK932QJkQVKRVMEfSd3iiv",
  "key27": "65cAFkSARtRakbzHYFVcpVn3aBqbwCtwnXZi7GMjEmCQe41VhGDzrxck4mA9YbKtY7RzNS8ZJXidX9xT7C13ok3w",
  "key28": "5t6yrg3xXXn62QbALdD8swYCnJhNNsLpZaUP9Ro7XueiVRSQLMEo5SqHfCS9Z9mk2ti7HwaHcanmaCv3ALn4hKGx",
  "key29": "3V3pZLpKTu65gMYq8RbzzUR7pzPBk48CroRprEt35e52XSXVmjnzHqWnfyxjvgW1izyCyK8epPKbqXgXrSVmeNBV",
  "key30": "4m52xzgu8i7ua8ouNpjdmUzTKpnqsRNEe4wsCvXffL7z5Xt7GTWQ3pn1NAjhLXeCdn4BYbCLkzC8TGz2hyV25XAL",
  "key31": "tawDdMNcS822KpiTjJyYXkkV3gXWmDayYV1GKnuG7CTXWa7QYggCg3Ha6yyXcy6rXrXdUwH931sNF1Uq8JWYoJ8",
  "key32": "5Q6SGRUrF1ZZiugVYRAbCg8kaCboApCjFZJcSbYyasv4W29BUyuLqEg5WxvZZcQ8v3JVPj3jaZ4ZBHv7WqM6vCKv",
  "key33": "2krgXRW6bUvdZMJcG9Te3rHg3WL1FLgN3wsfes3yFzQZx5FLDtDMHTxfFPyTPycNuNKCXVXStmeiQz3A9QkU2V1F",
  "key34": "2bSwj1pWqZtM9qnhSz6t1J3z3GVdmZzEbSqSGzFj8dkk3K2BmXozt94KKUnTqSytnDvyqVQjYUobyz1QDjMHCzCW"
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
