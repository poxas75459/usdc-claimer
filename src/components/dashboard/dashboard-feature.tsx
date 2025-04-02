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
    "22Np6spXwbmkoSTvKt5xz9hidPUo1Xot397EvUsN8L43nEN7jhtoxefchYBEpe4cVxRcByD3CqWJvYKYjSuK16mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ze2XtJtDDu7UpVLNGWi2uKBLbbSfj6SSuPoyD14GzQehvzPUUEvTTnSuRUaKg4AeoyLYcW9RnPQySHpdHTm7Rps",
  "key1": "3P5cjP4574fBeDCHWFeorQdJZ1wieZXgFD3KFJ92tkkGruB6UWajc5rJ5J3nEaj1iQfGFzumFDXaEZK3Zew94Nvb",
  "key2": "5xXMzUbnHAfgGt8pn9NYuPdsfQjz6dpidyexkxtMJNbV1Q4ZtG9wne9uHyfz1mHipDqq21GEW3eVSSAwxmtM6mv2",
  "key3": "9yCrvKjkT7ULav2DWuR4oEpnRUmSmHN171X22d4HYthjRrvoqJE1MgXX5YohuC5iKgWH3U29N7YVza3w3Zmafus",
  "key4": "2kCbzUtdvxxiXWA5qUZ2EFdxHNZYH4Kva4Ay74JHoPKNmAP3pLcu5MVNxBgvsCpqbt7yq5AQUUuBaQJaLE9ZdDuB",
  "key5": "3YNRTchTP12tdNL1ce9wRZXsrJC6uCtva1d7pAQSDQVB625xyaRZNbBpGfD1iB2zYuimp3G3FJf4rtkYmy8QbKvt",
  "key6": "5xe4xSkF7Dt5LotoY8XafzwDyxCS2s7h91SWcudrRzajW9uu1EyKcpBbqPNfsprc6oQvjMpgy5NqDBBugaWmTsng",
  "key7": "4VfFrGFPnhayN8s1V9AybkDj8VrxeGX4BMrefaVekVp9JXp1cU3SR1AdstasKbvaqn7oPn5eQEiWdhNGBhTbGHHu",
  "key8": "3p49gtccF9Xs3ojtNViJyyBADxsyboG41mYMdUC3fZJV9EEdJ24mn1ZDSCfyPr3ka76jHksTJP29QjiXBcLdrYyz",
  "key9": "2hmW3ujgPrCD3RQDiokZATQLKmuNTVhzTDFhRKCkSaMKAkamcacqahcoHQZ562v9SwAxymDBXx2QdPgYaR8znewP",
  "key10": "5Ny5HDBm4GkWUqQfQjwxmfsPt8U1XcC8MtnHEoQVzyWSQumyTtVXBXJ4kWaweVDhRWs4VGcRZ36VJQm4C7ibKkmA",
  "key11": "i5hcuwcpZL7ZNvp2YVKSLQGCJyXsUWRzmDRTAVubELqsHn3nSUyhcjKCmHo37iF635hfBwWyzmNmy9wdWRbJmPw",
  "key12": "5G8nA9cTPpVeNvkxqiNQzwiBHouQRiThgxzxZWtmqNa3PmVptMnipoYHY9E6YJxs4yQdofovqGGDRoChqVFYTmBy",
  "key13": "2r7spAQR1tZKirepNxwqSbAnJGbWKnhUr4VPTsrHthnmfqN4Xf9CKLWvfUB4AKjvkEhaTi7ukcWrUPcSPD1cXHx6",
  "key14": "2pxk1mX4tWV4ttk4wrg3z8af1sFqhgXwtBfZUJH6W27njGRy5Ktq2KpHNx5nNfG3CzJc1MeJ1eDwTJh6StRECAcU",
  "key15": "2uoQGJzKGhmUmWGtuDMiab58AcXTFMzpgt9etzZPih62jXBXquM32uRxmDd4HJ1DE1s1YMAsxCTXDnyPx8Pb5iN1",
  "key16": "3FEjfg83MNQ4e4CCF9d7BNHA5fKKA4S4KEg8TJUesvR8nK4Kn1ZDh4BmnYDyHuUCicK8LCLN8qwFcMvz1owf5ZFd",
  "key17": "48ipMintsKsjH6sHoa7gwMrajYep7rtHDSeJ35q7MS4WtL5fvY2oErRf57wiE49Xgsee9kgqThHyjm8dagquSo1q",
  "key18": "EYD8NZWuxkinLbiheeDnWsgMenEf3YpUqYh6WXg4JC9PMp3NMo971xBN6gsDu3Jte1dpGPJJr112Ja7fGhF6RL8",
  "key19": "37WrrH541RBmvtraFThAWuWAf6Ef1YQwEBB6tjnDchSJZed7TKAcKyAZKoqdyqtHK8PfHudM4ucsVpGRQNWn5Tw3",
  "key20": "4iy79wpMgQbMcYnR5MWrhQZFWeJvkwzEbKxtRyjcm9iuahMFZ59PbRPhJnqJSSYMxMNEZVXAUYGgcy1JYVSD66At",
  "key21": "24UXSxpvPQin3gK7UjJ8Jzh8rrGHV1oKiDucfaNdMeiCuUvL1wadA81r7MCsym9acotEwjX5QLchsskYn1odDqSq",
  "key22": "3VHP5EnvQLDgSts1DUuubYXEFN7BGPjJvrrn2tquSsoa2qFn9YGHbMWqHcCThpvoFLnNoBwUR6qTfyV4SeCRAMaK",
  "key23": "5zFBRZBu4k85xjyXFKQMS8vz92tVD9953ih9Dvi5vXiN74hq8QVi6q85EdRSinWBRuRBCUbPYUijLCYL5bJaFT1F",
  "key24": "4oaxZCen5Z7CsK55uDeAdZC47q4dJx8f91VEEvvHD81ryKF6Tnz5JTWQxxvr1harXtNAhN8VUH4wcR69whxj84R9",
  "key25": "5HNq8HQrLmQ7smyAL9bUBmcdu4b8Z8UvxGtrvNSSMYS5ZxSBFEcQr4SKRScKKSLaW1nJTE8MatZ5LhgGtqiq43gU",
  "key26": "4mdivKsr4wS9JXKqYZSdGicZLJhf4bYox5aBCnUfVNTLTJVH5wH92sjzTjf3a8ptgtGLSRDx1YNTzWurDZVddAsF",
  "key27": "3NeGtGn8Z4vVdwqZ6KTNHu9LQais3WFWJMpcvitJmTDyjkg5FgRJqjbtrevRx2g2Q1D4K9sTiRzninBhyCpS6QiK",
  "key28": "FrL2gATpgrEKsSzQAouoZ6HCUWuj73UGtt9BF9o4gCUrF93DXh4nVQmt7ACwKktVQ8cmYr1obnY5JEqrNxPs5Xd",
  "key29": "2W8YF4JchswAzG3qQAKYyCawvZtcpiYXR3ygVXDq7rkHF2PXAv2LcYg3N8ZMgEzDWrz96LxDFjV52fvDzGYY9Sku",
  "key30": "5rdysDtMYey9gBGXtw3DmhjThY2ho4H2uuNNVTs5tADs9uxuprYToMnBYJM7iS8mZFWiDeazHDTMZeXYhBx9rpXP",
  "key31": "3zhHR1JfcbZabVZAHRquhKQynN3ZddJLXCRkARcMBDy8CpsZGSYXYxYgofqitHgDidksLaAUG9DMx7j6kBX4RTHF",
  "key32": "iUio5DJr9zPxcBZ6g2tXBEVQoF9V3zxUEX438HiMAjAX2fgLS6pdmugxYqJK6UtUjodQgV2bBYw7FH4wbCKgUL9",
  "key33": "Pk12RUW9g1pKKK1KYQRCb52y463unPHNGZ4h86KjCB3wJspMbWmyMAZcJFjMkGPNfkUySG8bgNAda6Bi2GfA7Yq",
  "key34": "4qrXp1So9YStyuaVTR6BxVrVhjhZiqP2GtjmUkfPDLGLBTaNkNiS7RpX3GTCmRC1xJwymNfjEu37UcE1FJHJQcTJ",
  "key35": "3kc6iujktmHGvz8nnRhASfTsNvfui2FM7jX1Kvku3R2mzjhzz7i8kbyVwHz9ESoqEpctRhvbapaYEnUK6m1RqTa4"
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
