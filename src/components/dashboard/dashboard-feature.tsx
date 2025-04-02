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
    "4iCAVEeVfDJfr7QBQm5jBRejM5qFdrng9rnP9XtbNHTC6qt2diSBVdFKDuRkwcmeLHf3ZAE6T5McoC2mgBrnu1cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rGq2tVYUjynT2Rdiene2tuV3g5nmWbT4RqoqYxxsh8mCpfmZed5p9yn6Py4sxUycXbjK26VJCuWDj5X1c4dLTn",
  "key1": "3nigms1UaAxwebbqKq43HwmfStmw6PQJSpQEtnSe9HQmodEVVzBbdrFfVavYUtTrPcN6uRo7EGBHCcbZi7VVkizJ",
  "key2": "37VncQWdf3MxLwE3G9FiA33CDQ7WweMqb6CfRTdzwLTkjBKkAsXQvBcFuALjjcQx4o3ZUt7XZtkRDiLNvxeZYmeY",
  "key3": "443zarPnNFEkXxwGjY24ads4jZXxzZGC8SjyWLpHQJmXBfhNVDhtTg4mAjoX57oQAEbUdLGBpmzQsAhxyTyRuXhT",
  "key4": "USxJtw6eZHKQ8XLKk6G5cW9AqiNcovLSqwf7XBfXbwGSkm8xgh2PK1ynPDpgJoXri7LnBwTxfaqkKPooSAdSc7A",
  "key5": "3BtB67XZtsitE8kwcdk17o9BsVEuCKDY6x65s76KJLpHVwffWVUioeVTB3cM2WKxXpxH2XUYeQUQVKCrCLfLr5ch",
  "key6": "37z5ZJ5CvgkYZwncHrZqL67m1J1MJBdGHFbrvnwUcha9BQvw4VheUvjHYS3kBQYCY3yJ1NbghmY6NmQ4jBej9E8B",
  "key7": "sEt3EKABhWZrdTJpLNpWhvPNh3CPbvuQVBmLYDfQb7A8DWYtzcucM7pbJUZkE4LjLYQpfjoz5gNuNH36x9syzDD",
  "key8": "2kLRaXYBBCb9dP6hfsgZxUPqhJpE8jqNPKVzmBpP2ZytXtVCc5TwE1KKGsq6zpPPLqoZNTXR8a3SSDtkJ4Q6Lkw9",
  "key9": "5Hb9BFGPvy2QEMuYEvn6iCNSwGuaur7R3eMbxycX6GsjHBz6B5EcnSnQumqAtA41PFrDw3kmWCdHjwtNP2dNLf1g",
  "key10": "LBo7rqeBWgPkb6CcN7vfaiBQCZPgY4Pk8eUtrRtV5r3q3zGXHkUHc7XTHWNXYMSa47xG5VL3bmzUFzC2yGEsK4U",
  "key11": "2ktCa3ZDSG4n9mWjxGhBfjBS7Qr9ePwzWwqKkT8KLPsQCzCLT4DzK1xLk7cicjdoJfpfQu9qizVdHZC9QG781bHM",
  "key12": "5zRRSVxvRK3fQ4seWQRbBcFgoMQcMhwJbFoieEtVZ9eaQ1D67uAZEqF4rFK1KF9nCXspcXozyytm4JwQxx7bD1Re",
  "key13": "aXpcYQL3Y9KSiFaDFYuy7S55yV4WXpNHx2agrgmkcSN56FxW6BEW3mkedPxCbHBsWoEFaQ2BXbXn9XiPS7kyEqN",
  "key14": "3ji6JgiJMutuhFUp5x5Shzt9d9tB25PY99xYfqq22XTvcbBjbZBFv94NEXxKu3GRUhq6FxaMaFT5tV78iwCbpjqG",
  "key15": "27dZM1RRxZcrxNzxPMJBBWMSFBZPvxyZhxr3SW6TBQVBdMzrdAxgSoPsoXzadu1YH3jat4gAyzTrDvmwz6qZAv9M",
  "key16": "q7LVx8govx3BDBrGr974PwoCfAU1Q9t5yLAynKCnzkyhyFh4aAs4HoPAJ9zhrjDYAQGapop2MCnFPCbvDmVvai2",
  "key17": "4dL63y7qKEbJsiJjBGVmt7jxw7wcTQn9mHocaLBSDhb8kfwmSSxoPxF2aR3fcmAj9RCxSyUmZvfoHQuZgjfYUyYP",
  "key18": "QCGyt6BpeCcuUHn3RS2ny8wxiHJmf54Wr9i2ktUr2raaqBzXtEh8sYrKNqBiJeSL1Rfr7vxthCMtWKjXHJ5SbTN",
  "key19": "5EjU7uGWeQ977aATBr7kBtJP1GYB8jsseN4fUmx1L24mG8jkLH8Ht4LBH2ATvY38XJH4ELSUMPSvZzyKr2MXgPR8",
  "key20": "41no8pt2LF1RN6qn5S8bdUfGiR8syyswGpaHuwV46VzYZjiZwHbaZaHfqqr3iyMQichK2KJKCv4oowMi3JFeKHtN",
  "key21": "5REjecmXEyT7Fi8N24Rnrr5JKNuoGS63z1axbecM41X9q39vsgz27JtxT2qJxLmR61jupw2ubthYkRjCzkFeTHxr",
  "key22": "5Xko2a73e8uf6e2TWG8dRiytpC8TR7ZrGDHQddo8Hkh5d1zfBJPssGDw61UJVYeoMf2KYwLrxcULRBb7RFszUKmW",
  "key23": "3sPhkfgGC25rHfx1PaseX4saMfVHTkLFFMkvHMEcFhtQdozNPph3j86ct5mB6bVoDW3cTkFUV2QqeJRCN36jeTu2",
  "key24": "3AUWWWi4FqUfZrFw3k9iYfSFSa3k1ro2mwEi1Y21q7L3koCbKWT7e2Ks7anNUguUiAy2o5SD9vEpYTUVFVXSnnjZ",
  "key25": "4BNY6AjoZfcYebYEduaCTpLupvQrZZRygaE4f6H2CaMBZoHKyyxdfzRBsJafZNZ26m71FADkY2MwFdwfWtrVZxJK",
  "key26": "A5VHjRLc2KJLb7xqFQmKziJDizqAWrphtdE7MwSd3JtFv5wgJFCeDvFFzggGADJQQjwiBJnTFqUqQTFgpgSwYMu",
  "key27": "2vNFUFddDUJKtt9f5Jb5QWj2nWhDun1aWY4S4sfeNh8tr1BxLdMiJhjn96SPiGckotZ6D9yNkm3JcMVeLm5m51XB",
  "key28": "EjEY9U1fVfUGpcfun5fqbAWDFgkhKi25WWQAjTiN7KYN4gnbW99D6kpJL97T3Pf7WdC7kjhLZ1CzLDoxKnmy6tC"
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
