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
    "MHov4LFgrWh2ppiwDyscGJFhbcQz1cfEKrfGjTyfMoyr83FDe6xDAESALSbmALuo14ktLU9XxTYdViMTLDVFZFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjweMcaAoTVJQA6SrgsWHScv99Jq2PJULReqehwH6rtBhN2EcyqgAAe87EQ6LPAWaYwcnKgNjWwyMNwxiJRcuMN",
  "key1": "62qhmjvAZ43VP56yZvhqthKnCJEqykGy6sZXwSJMAZtCWTBXB9X2CFfRf4ZnYzCgcCX3DX2TyjTE5abRLCXgxqTW",
  "key2": "2EJnzGcGGmaxa9s5nkereqmJahhMHXtFjkQaJsW1Fhhpm4MMRbcpPoP1tNCm7bVVyK9hd4X5iB6bCXtk9aofZpHW",
  "key3": "58bkHSUXRWMResTbk6f2aqeqnU1baQzR2NgxsEA7gkzVBYkWy3RLs5D5iozsRRwP5ErVYdZQUMeA7EFhKxHXyPDh",
  "key4": "3E5AMMM8mca6ZWqqDttRgHiVtZkj3cVN8yZ2nUFN4rj8VPwEjBWtAkJHXVvECfaDZ9bEH8biK8Jum2cu8qTspYB1",
  "key5": "3JcyzRCSeenmg7xymLP9PH1JMtcEnqxmjxJfraZRhyrummSMKh28Kk1sT59QniZ63eGQnjRFJmsvgA3uuDDn3dwZ",
  "key6": "57876huaqXv7PB98iQvyb35gNUqSYXBYjCcPgehnVnRjFyNNvLFGU7rYoeNHYfVNAb2XK8vQWv88VYFKMXDuZRW5",
  "key7": "d2TDEeJQoCaZq2shXTWJwrkbZvUdueHF7Xr2stsdZTt8Xz6RbopWdVvTUaxvLEppFJExgB1pcVLSF922ij4hH8o",
  "key8": "2mVjPR2msXsAyKvHYNebqn1uEpwPMbQBZdFdpMWQjUko6ebvS99HZQNcgm9cua369JtYAmFEQyBM3v9KW3SFF1R8",
  "key9": "LFJYX9gzVRijuqHtv8AzidwiZuafCA1CE43h9B95yaW9o1MNS6CtY5SwZnBUtFmSF2xAa1V2d8nQDCiQysUC6Gw",
  "key10": "2dXWFWvbwqtH57c4CG7MQkSq9tLT4QLjppv8G3RvL8PjwHPsMyFUJd7ynGLsrs9R96udpipEhNowfJhqTKnpV1Xm",
  "key11": "5W4auFduE2hvagbHGqnsENU7Tt6aS75jjvyBx7NKetLYpFdwu2mLCmxuAsnpXEYmX98V8iEzFdycH4yH4swYDmq",
  "key12": "4oKPBbUpYYcQ5vXoT7citYiFay74tz2oJ4RKzeMZycQM4uL43LgKVRxpD5R13fqw6rC11dCYj3DdEVhzqT6UvYst",
  "key13": "3ez7tZfH7K2AeyXyWnkqWUSdADsv1ZYR1Qhr3DxCksrfLKaYzgqgtMP1cNea97vQRDQmSSS6ztXCq2rPHfNJDztY",
  "key14": "5aJmNH7rYihpoyMP6tYdxmnCJXKSFvYuYq5bwt9P3RmUzAshdZtHHrRAxpL4qmurHqxkVWSjKx2CB62DKRx4xae4",
  "key15": "4jqQ7ePPshoA9rEiw4tSYFx79VpqhCuzSyiwhn575hAU5n93SbEsgDSVWsRYDM2fJpLKCowiEP5MQRfeurFgUM3t",
  "key16": "5eiwZHKuGuC8J3W8p5vsLdPYZorqoxhNfVA2ukELqELGon8nssTFJp4GPqJyPw3PmkqbGXdcSS3c6VdqLrA1rGD8",
  "key17": "3mc2dcKBSPARRytxHaRRZ3gW9bPgDkmr4HsbwXCnJmDxRNgwjXG5rTkWNeeN9dJ9ovxB81P9iPYpBgKT4JgaJtLA",
  "key18": "24Sqi3nua3yyKa44ainGMArncmQc3LYFz5ypzuALfzRRK4raNaUUeANdrGsLbAa9xqUPFLefN5skbyDd5CX7h4wC",
  "key19": "Kx2vH6e5xAzRX7FDt7Nu1AtgdHziLoTipw4DhCMAXVb5AcSvUQAhEUhsHYKKKgTQrj4yZZcXREFA5upaX38JHyx",
  "key20": "3rNHnJ9qg3LN5FsGeuHKpVnJ8wW4AJUJ3iESc6nhYhKLXuP8q3g3gPyqgC2GFtp4EbU9d7f2bffMopUgTPvetcAK",
  "key21": "sg7Y37NvF4fCnf5zKfA3AuARq7rm6ebkPhiyoUDPLCeTF9ZWWk2Nk4BsSdCep1v47aknWShuwvKeytZGCEbuX3r",
  "key22": "5FmzbLQnpAeT8bPvPmLNaUG97BUc2dYR7zWoWRZr7uvzYLZXQoTLwG9Jse2nR3Mf2q62djW1dZYh7LP39d3mjYZF",
  "key23": "5DwKmWYGhSC7WSo2HaV7TFq9cULmEjGMxySAEGbg6dJnJyfgPi42r48epcH4zzibw9ctdXdnMyU34nLsWHBAMJ5j",
  "key24": "5syTA5TvaGgaq6BkmSz7iNj9p5NQoSjSko6WZzn2CQ6Vnq4HivkuVRD3avRAvisNX5dKkBNazoW85YJ4FgymMbkx",
  "key25": "5rk61KJ6V787psQrxYRqY8qAYoUrLksDSKwmHMdfLMXk9jhKVy7jA8V1XfNHX4NHJyBMeeZ9FDGGbEFW29wK61CC"
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
