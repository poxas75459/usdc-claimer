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
    "4pQeWwpvoMUx1C3oeMLwwERjFpkQFz29oEu4jDBDKPwvcyegR5NsCpyk8cxYFsRxZ4AvZ6uCnmkgwsFLycHh6uz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVJbEhen3Jh2zVVZyF6DpRe3yVVkBxRYCVpXAKXQ3C4zJtL285aVcuYthwGQdMhJY5UgiSDocDwuJhN4ehNip7r",
  "key1": "4QBvxAjHwyTQ38o8mddaYXLeqh6X3UqgE2R4yzggmsPbSoKKYSuPX5APAp8th8hQNPv5AfH2p4i5AgJiLdKHsdDJ",
  "key2": "uNRZtvXJ8NWhcrrSzizYvRmMufEhoPsdtuRzUnmvyCFoEWB5rRQCYm9t9vm7CAWem6j4jZveZysDSkwARVhgegR",
  "key3": "5wDMuKitCJvsetP3M2ghmJ2cBjKotS3Arzp1FL8RMBrkcBxGyxPdQmjNqkuygt9hgmvZ3pnc1GK2JEsBNGkBwyKf",
  "key4": "51xEsB7HFenLCa5c8qMg7u1VHQe2syZAcqwcJRBVNVEv5nkkmrhxRLaWcpoSiD9BQGhQEXqUpUWLbKPMduKRREGn",
  "key5": "3GYbdTcKsBFeME5ZMDq6pfvCkNviyk5LerAGAM8ZU1PyC9o1kcnHeDpXM5VjoQf7Vjeu1ekihSFysnSBZBhieSU3",
  "key6": "38jkhsREc9WuR42aBFNgaJ6Lx11hToUfCvEdQjAycsrym2bFimVKivD9FZZsX2TRDMubpU1cfVrYgmCXWiLu978b",
  "key7": "2UBCSTY9CtrfHdXmeDanCpxuTKQv1oxq7QaPaoj3grWyeDnG7ZK2MNtdjbuqgfWV3fdCiEquanJyTesojJN6YT42",
  "key8": "2PU2DkR6LpVwKg2Z7Ja377NMz9cYwfq3YAbQorUSNkXJqZLDuuj6PSLC6KaMXXAVYCDW7GKusQLEBTGV9exPRrXC",
  "key9": "4yamEebXbJThXRxKYnghdd9sv8utm8saQ81SsgEPWGpPbj1n53YaMe3LyCPZHTfbDYTRjNd2mjJace77oijrdRP",
  "key10": "4bkUoMuqDu2gkHHfuwYr2KENULfmsj1Wbx7sYBzyHDXXctLcKgBecZ1HwG6jexMo7xMovP8d3jEDNi3wtuGFWE77",
  "key11": "3kDpU8DuKUnYoAXc9M989zySKkW3qohswd3q3dWSAteAbhG92gwSPWy5jGodictx1RSafjsXRiPFvpVFsvtFtdVU",
  "key12": "3quPpVXADCcn3Wkgg2LhPEYWVdX6hyc1cGUfJmtrrBctDqWcb1Do4cbJAmM5x7ZN3XxaWFfk4XPXjPJbat5cTFZA",
  "key13": "4z2HUMQLX19AXhYeUWb66YGspoFKAU4ubXnqvB5ZKW8jxtTa7Ttxz8yufPoNaca9pHPZbM3r75HXr1Dc97hck9JM",
  "key14": "3Pq9k71oGch8hnDxgAV9ghn5WYqFydW7PD5tXjo1qVoh6dkNGBeGAjqfKMCCQkkjghM7MDjrr4TnAtm1XRfr6cyZ",
  "key15": "2jx2pdzZREtDUgspr15UKqQgQWs97LribPaAmxdfoNbafZbXgRaDykmfGigquXxrTyuomywCW5hwBTfKMUcuzUHu",
  "key16": "2SCar2GTaJ4QsCcfScuUJbvjWScD73bTnYMqvfFM1hiRjx1ooGdH25vZZFAH7oNw354sF8LfFhmvRnVFz8qapind",
  "key17": "5XpqhwNLarcyrzvzT73D57kdB1kRiw48fcMxXGcHoK2EFfxSNax7pz7qPYFSh8qV9GFNdXt8DronnwNyz8SrpTTk",
  "key18": "5dFL7G62sEh2CBixFfkG3Rr4Zcxukgnf5H7YzQRpxu3D5ALUF8jGBXYVtbFqr7FG7CfDQenr8yizh37VgkkDkLdm",
  "key19": "5eR8Cqxs2gwsVpD4w67JVmFqrrozNB7HHoRoJt2BiB3hyS4eDxqKi2qdpaKTNdcnEzx2tGhS2ikjpgH4i4FsTrtj",
  "key20": "4QUEg4Z91cZMUwXnFbdVQvZfcXzFZ4bKP6urGxgGFJgAxtHVfFNsdLU1UDuCgsQf9jeqDQkaerG1ymN9HQTeUAGz",
  "key21": "5HHCT5VPMk5MHocDa9aGXZsGQi2MRxiFv8dkxBJuqphvwyzeUcBTtbxB9Mqj8YzRPWLW6dPyTWujKzuKzpwhFYgt",
  "key22": "LuionK3acsLaEjwxknGRXLhPk28grKmxN8vpfnQY5iomVBL84MawMnJ7NN1JmSu4gZwtby3EdGpgRko4m31BdTv",
  "key23": "49wXat1erSqSDSYXKokksHQJwDaE3GuzQvSDydv3f9uEcxw3tp8pkRUSxUJJ1z9GoBck26zCNUdttyZB9YDdiJdM",
  "key24": "44Bd8tN5UWLSKZPdPBetVmR4DSR5ksfYL3cvstqQ8m2RKCLHDi2xwa1wjkVSyhPDuy8mWZUqgzdwWpZDy3fk34yV",
  "key25": "fVDowYADscgSeUz8YYxuG5vMTennaFgGKmaxG79unWYixY52hpNGSdFz2wQLNQjovwtb6Cmb9UsbNLtKEwuopDs",
  "key26": "GdtMarxCrXqwGPUkNwCHXKLbgFaDoevEGJMbbzsDF67HPqDivNPWZUJ3szA7CrDWLDPajbzn7razWefKwoyKQNZ",
  "key27": "5ipRbP66UqL6mQYPM7shhc45NbXSoiSr2jJoJAjtQUBUJh92Rf4qViMDM6C2jkK2Aya6FgTVMQS6N3V3LRKNsxsV",
  "key28": "5bmekHEv5et4n2C62zzRetKW5WZ6jfNV47iZsx1h6CBbX8WXbXFnw6A5HqjEkZZ2tCVhvmom38TMq3QWqcsbVNL5",
  "key29": "4J2ykWi4Z6waNMZR2yC9pU5y19x5Q3qcB8se21tHgcpoNos914XLtrzYi1TBA4hx1E343KyJJB9jmii9219h6HWe",
  "key30": "2c7ZmpFBRCyJ7uwaZ8qub6gHQtjuXrkGMXhyyd7UU5n48sU7qCce1HVXjhxKeoFVkYxyN5usqU9quDNa68qtthhb",
  "key31": "5wj9MczmiMbXqJQP6suxnu6mEqw3u1zfrCYi6vUEgZct1QHmES4jqAciYUd6hi3F4EC1suezjicmrrgPpV59avFq",
  "key32": "4pc5vSzgQXfMkrfaF3EA69wj1A2W34B2f5nAuXfZCJ48ydJHeexcytjFT6s5ZBjYvj7oLLN4MTbowuFdpBL7YfT8",
  "key33": "565SPg5Efpr6sScNCCdEnQqidjVKSn2oNoYEPAGGfqbTjtjqHZoCGsSvBzEWRqDY3XLB8tv6rZjWvKSB94j51VeE",
  "key34": "5s4AxK1SpDHzuzDwyuTTXbDAXshwGvQ8CHhuXkzRoYorhgwRtB1Nq7n1SmtTZZsMBb2BZUgyJEFwYLMcDZJ8pdMq"
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
