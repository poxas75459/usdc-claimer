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
    "5EnQq1fQRS6savGV7MLvpnYtKiZH8pXNHoYNCfXCfWCmt1Bv8LXCVn6v6sFSV6G3gSeJBB9AAEkvYRx9gks5Dwb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hD4a1CbHu4CkhcbQzE66mcfa6JV5JTSnzBMkGQHM31kGz2pARQYswL3j8VvdBsgz45pe5Z34YTaqWNuZ6aKpdPh",
  "key1": "2acSsoe7WWBkuGsBjzW96xEhZeSJdFihrbbU5BxbtPXhvLCCGmGu8AsVemzSEFX8axYMVX1pb433L5i4AGg2Ho8N",
  "key2": "FFccM84wNWzR1uqPWndmnpWK8Csywm1dQ5CP7qtVvPeEjjnn4qUSz5eX6ouPBqJNWkH6bcB4sj9bFX3vN3sWQWP",
  "key3": "4fLG81uGHhKaecjSTYUmqYmWmfrwozo9aBrwW4PU3Cu86UBFUv69h13Kq3cdTX6eKy7LHWoi8qy54dmeZsEjNZok",
  "key4": "2XLKP1Tcq2jZTEfKnNe2mpmni3h3ZFA2Zuq6b1wH3oYVbteGeX345C9zRx7K7XKM3nng8Z6e7JZtyKoweuhRiHib",
  "key5": "5y7ogRwDBn1PsdEdD1v3ZtggiJjrFejzxjECxwjSB95er6HaCrEAhWrg1hPQM6TAzJBvzk9LfCqVHbTWfCYHYVqq",
  "key6": "4WftQzGBPtU9HeM39bazB98ktpMoH2YBJv2LX3cqzJyi2aCdm7azLkEvkMz7ssCGZ41YvpnzxLj1ouCR27fSvJZT",
  "key7": "32ycTxvZR51dbcYqFpEhTWpWWLKGidgKkAxb19k4F7YMiye4jdpLDtwVRbZ5vUVxWWSz2kMowkBrAdF27kyL74Tt",
  "key8": "2d5RQ3GsLHS7GiMUfaNF4UMCXQqFa1B2YHVk4vsjDzMt5RyinA9tL79pnmGwNC3XdHU9Yhbpi97twoN5BwZs8amf",
  "key9": "25vHuodKUs7p1kAs2JNp9cXc8h27wZBAaRkTRBvRRNAF3dk4JkSAb9trFRWodBwpkhBA7RrSrwnDoLAaeX4i6Mxb",
  "key10": "3w6LKXu6tuH32wS33gtvem2fDmcm75G7JXs5rKTiZ1JGcXyLotzEnShypiGWJf24eitq73wfPE1repantaM3n3gc",
  "key11": "4rFSvbtJngSJSq9sKdMAyoiY7qAzTcM8s9WjkHrC1dZmUY6AR3xMkFxqzpTw95dtuEx9YkcNgJRErQnugXXu5rJA",
  "key12": "3KkCtyhFdREWWCcnSKsBwny3L4N6pCSMigBo6TsG7GKYjbsYPzp8kzdoEUJXqQgex6LagCBWrNNigiiyPXjdZdLY",
  "key13": "2hpCjioxtqmNwBjLJKs475RF7cYmS8HS7qrbeaHgFP35CWTPGo2Bt4iP8mUqQqceUWLK9vxnZyRQXMnHAF97JXzJ",
  "key14": "4tg53AvEWunZm9tTWUbc1jp4TXx6ejfReiqZAGPW74TwEgcmav7U8vjzQL8htXrLMgVC1ZaqUoP5amQNZRSqe7VE",
  "key15": "4rS5kz8sKgWGhqGpWroCAicDazz2PYnj5eKLwNtjy74p29XfkKf6eoY5GQcXKqjycziKuBLiphmuPfpMKadPqoAh",
  "key16": "2jXRyFyr3HPF4kkTgfMauwvNq9YiHyQRqdq4y5LhFamwgr6jiDDeJM7GWqMmW78SUoaESTvMRz89ZVng68u33rsk",
  "key17": "SYocgH2rbFSSKHA8CzVTe1zwHYxSjY69QVStxqzjdu1CBm5AbFXijWoMH2KPJFx8n6UJevWTk1c9sm1M9667vKM",
  "key18": "TqzjKZ9bo1W4X1P4EigLLtdsxWWU2qRjbvEEMzH47kMQVTmV2vhEcYaM2msvxvoP5LoybEqbjZh6VNwVTTuyVtG",
  "key19": "4tjoRXafgdnLmKx4TGecLUfvRVMncjinSfVf5RJJdbsmEgJBybYeguwjqV7igc2HZGKWZybMe1rKJhjiAMN2tDrr",
  "key20": "4FF7J5ffhVDXMqBHKgbVWTZhXMPMW9MvJ4xwtBQFC3sqhGLwkVC9vMpoy6Jxc6LWb5pWWTksoSqLZUThtmg98Qm2",
  "key21": "55PHrNHe45bmuMiiSfZPCgks6As1yVghLNK2ErqFDPr25X95DFF7dAnTABuSdZm1riQRmppNcJ5eGpWrpVWPQ2Hw",
  "key22": "w3SKVzemu2wkuu5bJgY57CbgF395SXQtWmkx5S9iQHaujkoL5fSUrcHnX4aKbZBmmwZGVELHBPMh26Lb89FzJAA",
  "key23": "3mBJHGq4DVPUARw5UjaX8cQxuCY7bn5FFQBFiAtDTCcKcJ7dn6PMpBkBU7KFb844YF2TiZhTxhrYXFsPDn8VgTsL",
  "key24": "52x8DRbvU9pzQW3Bx13W969JQJuGwqL4qAan4m3tXSx8hjyF8P7MyjNTheXsTcw4fSixvWRTVDP3fMtCC88fdecm",
  "key25": "3HKfey3QwRtiAwiowUpdJK4wsAAVBGtLyxkzxCeoPKxDsAVyhfuumCYWXJ72G9kUo5HPVNwyKszDEzsYCah94pJB",
  "key26": "2TLXmagU9vZwgET33shh2KvcoC9HVZ8g51d2s5HuKzCMzGXYubSmeTcVYeYj4pJwCyiSWJb6DX4BniUv6WrBDH4K",
  "key27": "3oHn3nxzdQNkgcbXnXo1dY5fgFJmv5tRtXTJZwo1ScdmCiAHj3YNsXiKKN2gPtGd56qCkt4BXPUJSpwbM1kJkWBM",
  "key28": "3qZfxziNpuCxSKxAa8vpxkJ6NGHZV1hciGJfcw4Nt8x9JL3chJfmmtzY7oLcJUssZGEBuVkP9U6VBard5CmsqiyZ"
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
