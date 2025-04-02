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
    "3Rs6XnKE2aqXhjipecWBWPKq8Ye7twzXkLkXLK8HBL24LdQDo1icbZvRHN6ho3JdkprQujPVAjSPPkxpNdLTrC2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWYbM15XPXvwZd6g16757RJT6JFSnHcmqpHy7gn2niPXrEy7aVcJ7aYdtVCGEmKeWWXbXPurFysNanZQ14yzoZ7",
  "key1": "pcA5sQCmBivZDeTg2J6etgv1ZQ6dhrL72U8JCZ1yqsbWCSmEcGJ8cpYNUFZVgCuyuJK7VZoQWbqenzjJJYsoo4k",
  "key2": "J9EZDePTgL4zyoD1V4u2Bt87dKaWcsnb8p8f58Uji6pd9Gf12hehfPzBZmmDHEEWKLsrGRNWw6Jt1JxMa3TzCDb",
  "key3": "2V4DSUF4ErV7P1wD8QmZsaoH56xVbnL5jbdUNApHjQmc8YfM1kgVchbZJzhwR3SURUhKgsrcfC5SnxGNUvn4wKiu",
  "key4": "8sojKyW1e2uyr33M2WhN7Vo4AZji4EkS7hKrNiXAKn3rt4dFjuYtKKTJi4AKHfSxAbH7YJ6MwWBwWNKj5pzk27d",
  "key5": "672EB7SCvRDnkViRjwhqF75qox5CoqKxjgKa7Quz5U7PDEtefmSbJ9a7hLbPLy3opYe4wELc3bn82Qsxj6yL4Fyn",
  "key6": "5pzW5ZNJfkCimDKTcNYoJ1Z7JmcxNM6Y217VJgvh2RehSckHHQ4JkrKBSWGpGXoEfa6WmxwXYofVDXfRvRd6nyJ",
  "key7": "58t4Xa81FfQqsXcCbbxbTojwcuyog6fzFDegZDadcd1jfuGJaXtcnEsWP2g2MykF91hN6c5RM6kjr57itKKWF2Qt",
  "key8": "3QGCZ37G7m9Ys63FV4FXdRkKEQ7tpEWXFFGU5Upmu1Sn8FHnkq1Wym6n5mjBZdzNboUMCAJr9CsftQb1FSurYMbu",
  "key9": "3mQuAWdMxnJwczCHw9eCqR1PpfSQvQZAgT9oH6V8FvhLS55KfMwP1LBDS6GJmPnS1ayit7wASXTX1nQNv19x88jf",
  "key10": "3wYPUSdLpBD8v61UVvSehRFc5dPWJKTxrNWKMV9ijXjMYBthJSLTxuEPp77e2s9ibygFpgFnSFGmrXxMzVYUnb6F",
  "key11": "kp2ddAxjuLp7KEWJbSXqvtXka8mP4t7FYQzuJ7gZinbzmwuz3GgBKfDr92PsyQoWmdHmGbf4CvFCEinH7h1FSZJ",
  "key12": "tzEs1NFvBPgM3sfgqyKFxhYAe6jTfGGaVtZdvH2Av2y4237cTHRMoVvA3qduNbe6DzFnabEwAs4JqwhvwAFseYF",
  "key13": "2i2yr6PLYXotYG48jW3Jnyz6U1ydsQjSorMa5fsVt2PVmVnu5iXs5Akpzap8h9hidAvHkgHXHMvF4N7XGLCdSH1K",
  "key14": "3BJkpmKRkbbDWYEntFvoTf5NcbtNABd3aJU4VMTBQeysByehYc6cs6ZmmLcjo4DTj1LHzXPAYPzHoixurgySoDwN",
  "key15": "YxTxLS453qW1RQE8msD1PS1XZ7WxHNSPSo72HjFyBueWE6abJHpUST8XQcxCRoQrN24BzeArPDzdeEqidQsXp6N",
  "key16": "4bNoCtv2cufUDXsiQnY4AQdsvZmCLvABoPJSrqpFRoCghGDBxPKJuM3RgxUtbMe14Nst1au5H9gt8jp4MiheUYru",
  "key17": "5PASBoPqUFJvTx8sh8QwLj8QvcZE6VTDdhH2DtBv3uimdyeZWxJRVYEnXh18d8t8nAMhYchQBKwzp4XHuKjqp2ip",
  "key18": "217X1H3TZEc4bFFckTPhyWCDdrjQB3293BkEwafzS8zfdCpKHSY1gXa9cZgecsPvdjErj8AcnYs7RJEPEAoVFwbg",
  "key19": "2HZr8heNPcKEFqCy91si2XGHEmnfZRvCGYtKh9PQNncHTaQVrc37VPgqyzdgqUfHLMhzrRfDe9mwHEMi2spZqUxR",
  "key20": "2YATs8urES14YSPoXkdFUA327YiUjJZkUUWvW1xqp4KXR1Y5i81gWizQh5Z43H7Rp3TzRdtKjcsvBgWQoJSammsp",
  "key21": "2A7m3qPf81G3onx2vrPgP9rT167XDyS61qtLHq9ULtAvP63RP1zE18jtsEsPicpCzURJEzGqiN7eHDuGfUtrpqbD",
  "key22": "2WdG7ZZ6uzojYNx6crMZqM6QThK6Q3GFGEFNWbGRb9yu75dE3B75PwE6HCueEV1zEaLRcK8jsCKxueoeL4czHojT",
  "key23": "3oVeePKtaswsMYbmNp8FCBJLuoT9a7vW1pQAg6iAe5awFGvX8Udg6WVYVq18uzTFgb2U3VBxqEqPKeiC5W4tYvmP",
  "key24": "5jYFdN99D3zRBbz25JJqsoSj2JUTahZh9zCa79QNXKsNuCHePixC3JSxrVEY83oa3EgAMeXM7tunLAZygRZCkSVc",
  "key25": "M3qH477Bi2fpi4MCYr21EMFFRAqASD4pAjrGzw1ZY1FBbwxE1ah7Q6W1wN7gQYBTaLaCdDuW9XYNvwVNPp3uidV",
  "key26": "3Evr7ShWJR8ogMi5Hj9cGTvEp6WMiK8djXigLEAmX3c7JnZa86prDva3tg3342m4mzdeZyogpMihfZnysUZodTGe",
  "key27": "3nGpfuySrSBCweUTjqGuwYBJTA6537xRVxHjzPac2RojY4HRxsm6o8ujVpPgoGCsfmb7Fh1at2AwoCuhMdt1zkPn",
  "key28": "5aYemfxqQAHeMBZ8y2xd5vtbwfw1FpPrTfKhMtj7R34LZsxfXiF1xoor5HQnEdaG4zMfHi9xCPtdtW56sJoFnXbC",
  "key29": "4uv4KnekrP4suX8ocMiXWQffsziigogUetmAdyqdu2tmszzANUJafpaE722BtLYvWxG2E8JmpMiwY5m4pTrBFs1y",
  "key30": "2KnCGTg5HevR8HvqBH9sR6XrmVShGENKtBxmPdiHegERsYAMEBnmFtv4Fs7zmnsjYCrqpHqmLUg355REeCiQDvhK",
  "key31": "1U1dbNuGByA6CwHn3etv8KgYweewouzw9iMnpw8dwqEfpCp6ecrSqyvKQmctpCcreha8NYvZtaT3czUvVi3GT2y"
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
