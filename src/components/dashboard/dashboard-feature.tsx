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
    "3XDT1kAwKS3PUbu8L6xfSpNXfWwbJxz1LoLtKimcCsQFeUvtsAZgRMSD81QpWQwZuf2At7ZM8nWrwyoB3RwMEjk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etkw4cFhAUUzdrFiTP4ccbNEv1pGFNJeEQWT865XtAtXGHPToPoB34XRDw6runkQ1kPTbr2RFZ1wd45htCRBBL3",
  "key1": "YjCzsWfucEtQnZZgmUq72ifNPgyUVYEgjMFxZcNzAQCJp9DZvVkZGxNxR94tMth71cyasQCQ3nvKEobgV8chY1Y",
  "key2": "2ofGEJmsYckwjwBbteEP1JNeki43qeQyJ5ZDXjsQ2b6Go5M78zXVzSBQHsgALCKCv6MNsUQkkfGKNU76LD5v9t2X",
  "key3": "5egN8GXbyE7YxWS2Wm18DywQRM8Wbx7j6GDgZATw6BAvxAfPcv8EusSHhLz2WL4APkYkunUcMtsp37rTeYA2YwPt",
  "key4": "3ETVFQyD24NDkDxG5nwAy6tHZvMFFhKf9bAdvJ73q1FL1KEfjsZ1iF6vJcUJ3C1CUrRCtT2PF1mmr3xi3wVHzvhd",
  "key5": "2AAUvrjRGkxAR9wesQK21Uj91uvrCCXDkKgiPTPTH5VJYp4ZDAEZSYExpZAJjYYb3mYjvFkjRQA3vxCnRNKAZeKQ",
  "key6": "TzxFWV1LhDf6iptz4KkcwevgBLXZ44EZ7SFoT8R4TmWU71jAX9s6dRpwsAmvu3HW4aW7DxmwKZpEikLDsJoWt6h",
  "key7": "pwckAt5PmLXrDfmWdqsPrVwLGbNfTmtX7GHj4L5GDYU57KzATCBB5ysNeQm1okgMWZpuy5RiNveeAidd3G9dtiY",
  "key8": "2nRhKgafqFGENk2M6dD51RWQD7tovdixXWACMqi9Zqx42Rtiq2Wckz97d2K6gwXbwzaHKaBoYKDBYAEjRfhiM4ZB",
  "key9": "WoEfPUHqytn2uGy5VAWfEbYm9dCWAVnV9Rc7GkseKepHcZvYTDQBvtoB1dbARcbzmSJ2Fgaf1jAv6g7TT8z9CdC",
  "key10": "r6hwQLv5svCYx3SuThytYW7mnrxGWfVxW2hJ4sLv7MkSfivjWZcrWikEohPXMpjwM3fYr62Pj7QMShSUMrKirPL",
  "key11": "Nu3bLLuzdo9etM7vZrakaaov4wib2SZ1tDKmcQ4Qy3mexbMKsqYgeCj3j1xnxBQZZZ2iApy6WkQiaGRRjyEL5Dm",
  "key12": "2GZsCW2xsGYR6g4YjeBDu5Pfj4Ur9DoxRgASeFm7tCxgSxPj7LgKX9NunEwDzRJY7MQ3PQQHvSDSHeeEr8bZbvbt",
  "key13": "3DeGu66T1Fzw1h2BzqeGaRSjbHLDoy9uUzue1g88zFzHtQn8PSxFQjbGV2ckkniUqaz4WLgDg32y6d6JAk6LfdP4",
  "key14": "4SKQ7ih3MyTt3b7M6jBGd2hj8jwapfybTdw1vtCttwq9jwsD3Ajs4k5DVvPNY3QY45SPTBGavMvFW9SLysQ2VrfG",
  "key15": "Ddj1mqQBJB2VCK3DF278FuWwREBeGqBcLDFVpAqPVUakZvEnxyFyQfrLJakxeGE6eoCiXE32vd1USeccQguedHP",
  "key16": "2o8TRXta3wWqNH5bdXEoiN7qAAgkwjohcdPEUo8gXMd93fAbv3qPkFHfRY1UUB9pT2ZxGNSkwhaaYrq2oz5EMi5u",
  "key17": "3dwsNJMNP5Z8G8Dp1FajQtDkpUqHUX2fX5SiaHNM4EsFsVJrJVWFWUx1a74B1SLH1S8cLmFkYxpDTynX782WHo8G",
  "key18": "2WcpTryukPj7ET3urG8NYN1ZRL9Na4UmCqt2gGjZWZPKrsx1A6qzZjy3aGxNW9m1KJ13WPMDX9jfXuS7Yi6Eys9e",
  "key19": "2219U264ZCUEESEyHf9tj5ACb5drJnSDhbH3aXYpM6Fzpcp5sGe1bzi9xYjoFGLphc86t1bqszgUKKVJUzxhSQYH",
  "key20": "48fTRib9UqYV7Bo45zUpp1WAfVspQumXQ8MzdEFEc2xM2Ad6VT6t261KVtqQv6DdhoBMPSazEhWKQqzLC3ohABbD",
  "key21": "24haimLvRmmeJokUmnn948U9syxZ8RaEMueQG9dghEhQHtJQ1HTQ9o6BbiAMrobBemho3V7dXyGNkcjp2EwjV87L",
  "key22": "ndZ7agBm4wRFUmduKV8P77ho8jzWUHkqqtaKBjomCWU5XfruyWtgSbzTNXgrdV6kB31uKxwMqMzuGXJBYYMwqve",
  "key23": "S35VMFZV26dFAH14rDa9pPRECNRxaJmUhnPL1UiPDevjEXYjVejYoUnCPYPphWvz4aY7rLbsQxqRAfqCijTHcRg",
  "key24": "2kE9ByrMoTk2DW3LFuVKeXhhMkD83dkGUcyu1z4TUrGCieyGX8msdSu8RU5xKo9ykujkiS1mhJomZuQUtEPGRhCE",
  "key25": "2Ry2S1wx6wpV92aq8dAdkyPpKrbwdkibyWYyyVTC3jmsjiNUcAFU5Edp7j3RLoDxxgFoGFrp1Vy4nkeGr9xyjLdB"
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
