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
    "2Lx7bEbfLe3LqFa5WVD4DSd4mRrRDGDQSfkAm38inSK9xH5kMNaD5LHBDSMxuhqSGRMfC6pcdnArodBERPHjiShy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVAizBs6oGV173yRvcY9jnKng7TN5u18FiE78pEDVsN3XuvcJfq9iGoh4xbcX6T5yTwo5NZyXdXYwy6cV1fVR41",
  "key1": "24AxS84Q2ti8U3DLdrUcF4raTRTRsvdAFbCt5pdL12jDm7CW4BRjcpkwdjhC47QKM1m58WogXsUU3sFPwVATFSJE",
  "key2": "3PH2dbctCf4Thx7aBncH1tu6xxGT5ivV64aGpKu7vbSV9cDYD7qExmdG17vJEuRt1ufgmmFxSCco7K7hNje4H7Vj",
  "key3": "5ZqBoNcNKZAvKSdXZHi9sucqkLCqN1wJoSX6asFnXVctsRXRHnUgTTojRUK12BVSbg2Dvrt9igkRehf7U7J9cDmP",
  "key4": "4UkaYYmEFh7bzfQbpECB4zUeXAmcmfAk6CZBoEKEvjTviyvKjUmzRU3dDzrvyW2C6puvPA31HT21SscUXt1pNTre",
  "key5": "5hoZE3THXtJTXJzquXGyB6TSHypDsnTQVdNPU9wAwDiRxPY4Y89cPjAU2HHhYtgZXiy8xVJ48L14wPy1Kn6ez5Z7",
  "key6": "4Xh3JKNp9cMCEfZwv9D1fs9ToDCWw781GqUL6A8bubwK8mByXGE4YHCRHcyuZtxVspjLahYt4z2BpqKPtzzHXSAv",
  "key7": "WQReMY22wEGqie7SPucwYaFiLLSiL8eKN5vVdG1GzxP4oqZNPgwztTNWvdQ9ysp1oRE8Dao4VSDE5B49UNdhDyR",
  "key8": "2TsEKnqsAdN4YQg6Qo82aunNmP5xzqxyZY6o84Kxpg4bZEFAgkorwPZNVVVjCZ7VnxvX7GvS9eYTm4awt8BfuBdL",
  "key9": "5x2xnsKHMUnZwMxFy858xsXFNVtPe6aVHEGGFkeZHdMSoQo7fTGLHvEXmPWp5CYAjP5LFE85tUsqsLdjfSdcjeq3",
  "key10": "2YKdRAXdcxh7FHGVP97LfE9ZxChinqrQ4ikyS57j52yd3quapiCcvKhFxosVC6KYRQ2WrYXycDHUysMwZWHhoNi8",
  "key11": "4Yx15Zp7VvwXdUoan5HByzz8UnJEt1v62mD5nsE9n1UfTayyPTs4bwDB3UJRDQeT1FBzfxPBENfN2TZmHaTkvQza",
  "key12": "56eNK9Vr3tZL265SayGiU4r6AKXdkYghL4Lb855QXkK6J8MknKAD4i2sqHMXDs5hzWc7P9Zj4yXVCEMLEvUg2amB",
  "key13": "mmb2qiE34UD7CwncBx1r9UYmUm4SQS3UNhUanV6mNKj64t3x1zqDRdTG2yz7N2CiJeit1PmDHYMbFHWWakA8NCs",
  "key14": "1TeiPp7qETer8gmWQHYdi6tupUQEDW6V51M7DZJwNc7i6cLfNyCFwLqR1jsRaaQQYnAF1VhRbdSB4WiBJby6zLs",
  "key15": "2didkVGYWE2YqwPaq4EiKSfLtGEXGDm79fS2JPZzrfgxYmHbYyXio2K8KwAuNs5sf3S2cvbpy7Zh9u7NrnTTyYd4",
  "key16": "p1zVbNLK6esDrtuJEWqw4eVNPRrujaa3LF3S5p39CsmJXJAvLY9XF6PFQakqBtpuxYRXoiwdLfF6UR7oxrzq9JK",
  "key17": "28V3PW1o4tzQhXn7XEwNvWCZFsbLbo1E6QfpB21ZLueWhRK6wk2VNzXtiZacXnhdgYZFKVBm4gmGWSmpUnCJqNDD",
  "key18": "4VKYwQsN2NAyTno5ft2FUZBptaL5UqJkkAgjUc7UotwX3mhcmExgUVm8cCox4szMFMDEP12usZZuvFg5smcVD7pX",
  "key19": "4uakZxPghiHJhB7jnjrtnTxZp2bUbK2JjScvnEaaNfoSQBd8FxuSQA8g4EZRCA6x7Wz5DFXQXbjmQAtiN79NonKJ",
  "key20": "Jr4TW2h9gVUT8dE1nvHss1N7KnpPRoZSznKGQoKdtDqqgizt9WGGeDGB8r6hdfvkxbRQDegAwjd7rmaa7rVtUaw",
  "key21": "3Ma2j8MAMEnt7AzSVczubPisu2RbhGT5rL4ZdJUPiJYsdmmLAAb5fcntJ9E4pjD126Jnpmg6yQEch469SZt71KrU",
  "key22": "3QnwtWLa2gsN6J2LtqQVrV2gAnZj9J1c4siNKVoGU2Dgz263MrpxDMXuXWw91PCW1mNUdSjQ8MiyFedd9hqjn4J5",
  "key23": "5t4tUw45RTipHtFr9Rb7m4iogGnHcBZF2Zc4HhqNY8C3oVgB6nDSnNwMCCCtZMSuUD4vUC7k7CtEZUJh853oXdc1",
  "key24": "4Q2PjJNt59om7VccrXgDYceZoFGgWkfrtmzfrpeQoDqGZ7i1E5mCYjHdRKWwuauXTzAotaKdfdF9diHwuW9DtAUj",
  "key25": "3EkguJXAmU8PTkMPpTEh6bBsciLtjLRR8PVb7nGz8E9ASrxBCNDQM4UvCKr7zHwc937AmeBGaKjNZfGRULrton2d",
  "key26": "3AYzrYwTH9Y8mW18zwDDbGT1jmKe7UM4wzDYSE4PATiLoLAoA8qmWKBCZbxLQQtebBB7cpYr5jqVncr4Ckp7gwgt",
  "key27": "4NcYqPsCbTS63YknAB7VhgUaYHo8mYYKF5EZSf2FfSCkWRPEEXNCXsr9aWZWzRP7UZXKwKr8iwKHSS27RQxFBpCv"
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
