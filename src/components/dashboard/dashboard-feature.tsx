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
    "Nqz38PoG7z18BQq5DM89HkFKd6bAZjUhFux3EKtZSdtXUNJiKmXmLSSE4h6qCvHfprC5KXprYeEi6NUQWMF7MyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwWX4ojt6HWEW1u2QemFYw12AuQmERN7DMVRHMynwh8G3qny9zQHek8p5tJSCkvp1c1X3mLqskYvXZ2BAPrC1Bi",
  "key1": "5du8WykZQ1nyLUz3hoc8QdrV91uLRocFuFQrvWk5FiXD7n1KqteYuXimRPZzn86RnzJfVTv7KbNYkmPpU6EqdMfr",
  "key2": "WmcYM9o4QDo9GuXfULCQYee33yb4ejdLNQqdgd2LGN3yQr2PBzSmHzapd6wGLGbGaGec2XqR1kz1pPxzrHvk4tP",
  "key3": "2YA47JRaee9DGRQM5xCCrSdoSPhV65xg25kRiJxZZUEA9DoaVdL4TM9Uic4W1eqQaiaXDgeJYSAW5vDQTdjEpGQs",
  "key4": "kdjRh4BDq6CvoERHTw5AJ8Sxok5igsiw83iHKAQtKK4g9nKEzfujVdMxLmtUgD1kzuB9fUQumrYcYNF6dD8oy1m",
  "key5": "5W3Y6LzjZxYEaAe2qY3yevWNaAuq9zScUFfWGXa3MtoEufzT9GXXeAmng9dcRuAyvynR8mt5vggHioUehJcTz7Ed",
  "key6": "5LeMnN1gbVeoW3nLnTMwEf761awLQPfCEUQQmAm2NRdZJsob6VFSYF6sksjPoAZ2E3SqNd3o5PWfBE4Z3p3p9JHu",
  "key7": "51b15mLnEhM7Z31rGmv4jPwJbKrBffs57Ur74fNdY9iqpMPSGotCaX7eqdHNvNxeijZtQq4ZLFiNdYxqK87KYEhe",
  "key8": "4PciNUDrcCMvxQB7VYyEjAP4mQjFAzLiJvsL69ZdxbEVtAWyZ6QFGXdCbXRhRm45zA7TYJEFyb6Wuma9pxZUDZbg",
  "key9": "3dsHhyeDPzUtM8v3ZjtTvXLaocCc4Sn6NnZsRK62hcrphungiit2yNZNj5qcumZ2Wxm2E1fo6XjLLyHT2mj8tvN2",
  "key10": "2Nwa3E8Vjk3MgB66AKqQgRpEK6HQmFeZUdqjLCM54sKfEwpAnZoq2KcuShAPp9cxKYTGHdiCVF6hgLTmZVD2viKj",
  "key11": "p8dyxShu6S8i8vEmijRR3Y5EfcbyNtWKyYwww8WvbdWPK5MrxwMXiXPYUid7JCmT42QiNpZ6tsQ6n5hqWbmiims",
  "key12": "3gTrJk5F27HS3vZMpXFMHMchPsLVUAf559wHbPSRLbho11yTCUC2n6HFUQ7PzKzMoJxZtXT33iCWNE6UxJSKMMWy",
  "key13": "nk3rhgkc4BkfPGn3N5XYVDXCJwZwvB4LXrRqDpvrkkWx4YVjVgjMT36ryHiWp5PsanL9MN3BwPb8q5Exp1GXAgy",
  "key14": "65NsjU5fh4gN3MpA5UhV5ea8nuLC8GmiHYiRWPFLfLRXJPRtFZncZNAVquC3NhTXSnyLDD4WzKyxDKVYXDfFNAoA",
  "key15": "CuB7bKUWnBLrbeQvbRB8xNzfqcuJXdPzxYfsuJSPyU1TLRiUWTfti82SKXqrp6PJMwRmkLonxUeecXuxsYqnYf5",
  "key16": "21RSDDUwV5VST296H4Dd1T5t8Z6DpuG2XgGJzbUGMNfu8BnGzaFYzTJb5hyQM2dvoXTrCX1zWUKs8UN8VvJAFXa2",
  "key17": "234NraHCCcbTjf4fwo2Pbgs6xhEPmJw2GUie7cSdyvh2QP3kDmokojh9MooQJHsaGJ6EVyVJp5ASdytqo6nF9g7c",
  "key18": "4aEYfLJFUSEYYrsto71nR3QQ8ruTLrUUqD4VyTEEP3yXDSanWe7uEQG4ESxUvNWSKfTHNZBy7KY1biufVCphWAX1",
  "key19": "5G21KHgQCG2PWw1vpj5Hs6JTA8FSLtZh9NiceL2tk3gj5HVnxcXhXUcoAF3YLP78sd5Hure9RnLUUao5zVqRr9f",
  "key20": "2kwg88rKxTnBy55deNuckrsA8cB2w6CbcbSLhJmTn13Y8mr43zthDeDJq5Fqau4NsKfngJXX5cQmpn6TAsRNsEfw",
  "key21": "4DRxfZDkMiSvLv4fbZ78WPanGpCskMo8mxC5F4CyRnkBmHzXv82RTh8j6XM5F2qTMiRRgY1s7rm5M9wLiEKLogCo",
  "key22": "3TM5MjPNitJXNPanBy2CsBbt1UR5LN5XQ9R19M1d6RMQYMeEs1FBEFZLAefbECPVCiL5uEBkpYoYhFp3nJU6snnv",
  "key23": "5ywFrLksxxogy3vYK4v1rUES4PcPmGgSCw2YUgM1H2W2X7W2JppxAMozYq4etrrtyuxZeRqEoiEmZypeFAzJYNPq",
  "key24": "43dtBs8H9tFdT2sHuGEweoqsopNjbzZKhbmcWnwsBVxCfALQshVYHFkEgvD4BnDw6ed5LEWTGyyDbv2ZwxpAV5Dm",
  "key25": "4EW713FvL3HMmD93WkwQGw9mg1DwTDNygoaKr8PXUrB55YAQHFYPYcNZ6kcAM9Dy76nDoT6xtFVfWywMsqyMLtos",
  "key26": "51CZnpTYiioxPhQa6cADht7fWrvT6BoMHzE8DjLJGih5rVKYAn45pzcck2KnwSVH5zp5quP2CRHd15zVFcAP4Uzk",
  "key27": "3uGS9a24mmi1sTXFotwJGM9MV6BTL2TdkCtzSzYodjoJHTLQXm2fxE4W51dfVVSRk7RSM56t6rjBFaumdBFJweU2",
  "key28": "3mtFa1WLsETuTj6cZiU38YadDocsPsn3xovxMQQLTp6671rkHTRdrWjwqUscFtftPqPx7Y763kisNYBDqnZ1pVE9",
  "key29": "TTvViHaCtXvRgqcD115QKfjDNg5g5rYeiPRd11DUbm8cwfbmWw95utGp2K8VKnXB8HfAFLUCPTnfL1eEhERsEdg",
  "key30": "2mR79uvNEv3Qdi8hySD53MfeamEb5tPQVcar1Aw8Ld7maZYqXPidCvvGtfPm4dBaLwC4D9HmT9b9vNMnzFbMBFi",
  "key31": "1KcvD126GyoCDDED6ZkZii67zUxTxnH3Kqj6QUvvKhnCKbXdUGxHVSCNBjhG5EGpcnb8TCuZfx5DzGavHKddJeA",
  "key32": "4dTgNnhs9t4FdLKrMw2E8i8713o14uwEJqwoA93yRXLTPNmZGoLbZbtvzkPjHiHxWTAiG5hHLPYeGhCY15D3QqqD",
  "key33": "5dmGxB6x6oSLkzBGcnKsicrJZqng8nNgwAUb3X23fvR5RxqjnwaVT3XgEZrYDjCRw53YYYZ4UVremaCLJeEoMaSz",
  "key34": "FpEvw1SLMiFeZKYA9J5sqYdkhCiiPEimkmz5E1y7P2nqzZTmjDyt32EDiWfHuMHgWecvsvDHLWrPz6xxVJJVtnt",
  "key35": "5KX5J14LnMqimFf2zuJFp8DQgnNrbErLTrvXPqoJjzXWpGwuF1SFT8zgMHCPggFY7kjx2A7mSkPWUTNYLqzfSuz3",
  "key36": "66uN2khZRVJYx1AEycnb7JTjHEqagxtMgE32f9DRSxCnsCoGh3xtcX3yBbearvPGyQMUPu9JbZ7xEzAjw5Av38TF",
  "key37": "42NRyGxUswCvxmTYq75vkJf2Fdzbh8J7Cq31ZW2EC94ZJ9q2rv6sbAe3aQtMH6DACxEMwC39XimpxTidyuGs28uy",
  "key38": "4wHX5Xs4U2P5g5VhifzJWGcxmWwxDyiTAjbdXz5exLYZPoTD172KM4iU1VbZxAryGmimY37AodF8V5bR1KpcZ9ny",
  "key39": "2pNgYUuZBZzCi9CLPwM4AAMBMDmkAt3PLfBSx3AFe5b875FpFMAk9kK9TnNzu7q1yDmqzcEZiGW4wE9SVRUjHTfu",
  "key40": "3g9nManAodALJk4HvkZ2AXNg7yQ5GoLYGXaUNvmCZkKgUrf4ZqmbcYFh5SsA5NB5afNe4vwyao9DtuqUkuAmEmWZ",
  "key41": "51rhz2qfZQNjgyTK1NaMQLfQ8RiJR2NotamaUuYFUAoEbjgzBSuYErH529Sa2QaodNEKViXRZtjqey15Dn56Kxth",
  "key42": "VntZDXLESjmDMnFdW897oTBo7HMb8g2hepgQScS1UHVaubRTzsGZRfc7h8z6YRNQ2Ek9aAmRWmVePjRfzXAhDLh",
  "key43": "3S6kUqMGys9kqdBCQHQyWR7h31JVdCGBdSXTS39ya6V92jJXJyBmKkjaPoRY2kep6EQpRyHMwfUY2rbvqeQt3EUZ",
  "key44": "Vvu4Thd4haogDbi3GsNYtzV3ojKGsBr3ct4DZYfuQMh6VbqwMtpxY43VGmM37DQ9AYG5vfzvCD3uVbtsTcZp9VP"
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
