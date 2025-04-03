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
    "3Ng9BGporcUTcDTVKS456Y4n4w7Lz3LtNfMqu82iUDLrkdVMvxz11FWZDzSHuDZMxs4fVcfKbkMwASZsaScSpznX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PM4GhBF7aC9SiwinnqqCX3nobUk59Z1Te43e2dZGxFrRRLrKVp7Hi42acTwT6o1y8MsDxKdc4FDfTroNrwPrt1Z",
  "key1": "3kFy4KmEoqvPCNhYi4vipNGvqNFqZkoagdYAGpaX2FR2LXVk38K8eNe8gpGYvB6paQijcAZXyivq19Fz6N27Kxhy",
  "key2": "4FExzrMgmcM8LmekyZuTPbPt8Ebm5tMxvFenoSMfH5MLU5SfRQfvbdY1Ds7T9r3PhnYKHTb3yjR2NzP4PoUZTXyR",
  "key3": "66K7BSKZcLuqCBQYf8Jhp8kJnfcTbnNzTHtCUZFvAvCxDMNmwbsttuDyyYsUQxTEt7WKT3UpCBPVtUUWhBXzBY3i",
  "key4": "5rauttqbpbRkcMXmGBjZ5wZ7tbX7gXVrGmSrYmn1YavnbWpVJqWds9k8bTx3Ari43fwo5N13zRScBpH99i7WmArh",
  "key5": "326gEfeeZGhmgE6wWsnCeQs1PSyLyHHAFaekWAwgjTdgSpaGQAHGqJd7oUtYt3SqfUxhPvcDxdvTdpGjNo3muDA7",
  "key6": "8hhpnsV8mojnKYDwqN5MBCy6acUct2XJViqyLmL1pyj3fMZxMqd6bWCujjUzo3e2GzjKYwX1aPjzFMy6JQFB9j1",
  "key7": "3CzDwp4bqTbvakDG1Dw16MkhYXxnL9QQ3XiysEgeWcbeqMms8Y7kkW2ZixbYtEb1N9McsZDqpfE236fw6hQ7i6m",
  "key8": "38Fmp7hDtSmHN4iQJ45gJkyxM2jMnn4qL8uUs2HXAxQ38fA5ayKffEH11j4dtk1ZKoqpdBoaowZKRkzGnX4ox8Ta",
  "key9": "4b2Kg3aW6ndQerFNjTCYFgrKN9cxH9F9YUUwyFZvAxJRQWbXmi4cPHDrp8knMFViQeHg4JHMbiNKMHfGJtUFDwze",
  "key10": "3qfzzax9kbQB68rXAQGL527xLwHzQgPQEFws2Ak2Fh1WNB8fcK57CrNwSsoga8EjcuinwwZEDsbdhHnb4eaSRKf4",
  "key11": "2UqZ35ez51KWn4ngw7gp32NjJvQR91HNZkp4KK2zdcng28UMU78PR1ffyrg7wYYCdoKo56tgndXh7EDervLTMfiN",
  "key12": "5GtUyXrerrusSxigKQ8PCrqkQ7sYLUSm55KHsSHZkxWhoCTsupirdNou6J1LdVmP8d15vnnp8iFM33pF9RD52gxr",
  "key13": "366HZdzCsugfcjP4phWD4QSoa32Ema1zcVzovmBB6eoXcAjZ3CH5PLdiBZq6smJgMBjzDjyrH7Whv6DTFXrAdUbu",
  "key14": "soaJgTkfpb44Dqrwndte7We71mjLTwzs8mYpggozpmpgjb4rMHcrznYySfCoERruHkg1J3BSj2kENDGFdN6UTzB",
  "key15": "TJ9GdmkcLwiTmc6pcBxWR4gUC3WMGJcJcJrzJRcWagnQP6yTSGsfBiwf3xpyw9gDjrjCJQMEhugJtrmj4jHrhCZ",
  "key16": "67THSgQnRyvQePwfsxvSLrXdzaaYgbFRAsxrgU1iQ6KEQEaSFbo28AtUUKHRnAPd8bsxVRgCiyCZyotAU9q8PJg1",
  "key17": "38MxRXSbXHb6hafQeKzoSZB3HJYePVtJCVLaia55YvebsUyxx4WSVm7w7hfX44mnUY9DxtLELhJdZuoxCqRzkPW8",
  "key18": "3Vb3MB7XQVJbPWXrNVVXSbLB2xTRT85Vx7HgYniW1yBwqUG4rZ1ovSMbdmcRwG4fpYZJfeY1rrc2JSW4HosuF3tu",
  "key19": "CM9MztCoD2WTAogr4U9DrgVc3EKNTK7ox7U2kwL3Ki8NK7wYzHdbi8FPtafSxX7u2hgpqNojvrKjg8gHa7Y11Wd",
  "key20": "4HAziPHXaUJeTupZwk4AxoQyaGsoi1YtjTWsqVKn5dU5Wy4qMZJ1b2ZNW9cer2Xe5GewMfbXYZ9Pfkpo7dWPV4ss",
  "key21": "4nHoWp5eQjTGSbcPkdyv8w6aW6os5dYHy3ZbQj4fqFZRypcETzAbfsb5WyNGwDkmnoRF9EJfoU5guEou9172VnAD",
  "key22": "4HpuwHDaWvcZ4guV7QbctEVaAmoZDxuMZK6ZfehFD1HZpVrav7PnMhWLQwtFcX3LEDss9yGdD7B6zHxqwNVRFTPU",
  "key23": "Tmm3awJ67apwVybhR89B15fnbEXDtmjWTprVjbmgyvhAz4ykDFukCAKBEHhsorPKS5XTsVQhMSyqC3iQEN128aV",
  "key24": "5VzHhQeRWMZ6JULmZZyeP7RgrjA6ipahtR79y7QNGjDMZfMsfWMXK9jk9ckbnTG13xt4RZvVK7EyhvBFu7cmx2wg",
  "key25": "5FmdC8jpPJr4tHTbxeEDP4K4zuoS6qW3L7LnSzmQo2BvKoyLBadgEBHyDLtiupuQ8vsC9ApGtt75eCBr2SmLiN1m",
  "key26": "JG83eup7o7ac7JxWfEpSiAoVEBTbwzhFPM5qfcbQN3ruJF6bjvER6sBHA8c1fybh9APm2K6cwHNLbZiUPM54PQQ",
  "key27": "24KfspeR8o8Pju3x82Etehbismd4oiDgAfriuf9zVaddvB8RSme77VPMaM8cJZpGFJ8MSRvCXpXPzmCRLvm2WbKi"
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
