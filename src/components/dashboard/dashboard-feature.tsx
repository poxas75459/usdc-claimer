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
    "2Wdofq58mX9MXfkh1y43nhRjqk2EKB4WYDbJ9eXrQG5wqrUUxWdBKkEwbFCxNbTdQsBU1gBTfFxJBTBxtpR3wfJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNhSDNkVfhSMtwNGWXTmQXRb3dpqibFDFpFG7wwhWdDuJ96y9kfV4SYZ534fFcH4bsegQwDB84wQhdytP6dXbVo",
  "key1": "5DSKaRtMd9GGsf4mymEF5LBLqQamHAD1ECc4krknsUSnFXaCk4GQxUCDkjmQKHZHesDMh8qFhBDpnA58Y9Vzi1NW",
  "key2": "22tzrwpgdm3ikfUhmq4oLdbXAbgc49Pj9VFBBCUYPiGUjANt9CpoesqZAzvoxVncxYtNGr5tW3VgezZw6yUrVc8K",
  "key3": "5cTmVF5aku4ESHicuWkiV5nX1GMor6EzZTCavmMUtj8ipugCJj2E69PaXjbBq66g7jZ4WgeueYCH73MhEJyhoJYy",
  "key4": "2my3uSqW1HpK69JfFLEjXsSU9H9PmpWrMBGkC1QyuFsoxWnR1XQSCsJN1yc2r2T6X9qzSVJoSkaPkp6u8iyxkomP",
  "key5": "3upXZkWQGvMgQefrpMWg47JTUNk6RCzKygKpPuArQXFF3freXGfLeo4ApE5SKZ9FECf4hKhmjfnP5X3wk8UiZtVm",
  "key6": "4rF75VYpetm4oCABzWos6ydrvVJWf1y17fq5mmcPzVdJuDBJjqEWQXffQo4Ps92aXWFP8xmmsj54qqJ58X7FKsfo",
  "key7": "27pmdG4fpQaAoH9QzoKVsqP7JrrCELji9MnbotkpfrajAJt27tw75RLQHuSrXC23yHVS78MuypynUeqYuJAdqMTM",
  "key8": "5CECK3x5Q8x1wsCJmGvMzrqQbpVCtUVQZ8Ukjf5yt3kTrjbSvJgHoLw89mPoZurxKn3611JmwE8wqDcU8Qixsydm",
  "key9": "5LRtzUcyNeXHR2bGxgdHoELE7FLQREfzo5rUBe1qg4rfwsgGRFkFpTooZSHQP95RqqzvmBzPnAoQwB4rmtEgBh3y",
  "key10": "2o5ubMBatb9xuSZ7sHAQP2EaXpq4XuzJ2VpmgqUFxZt692SoqWGB6Ba4TGqWJh8UCCmPQ393X55n8vavrvndYuP6",
  "key11": "4Ykzh8SySjzCMHePZywJwS9tZCKyVrsjxUEHa73WH35vTRZADK8W1iDUJGfmhdQCi1RHF1WhwBSA48bPVWhZQG9A",
  "key12": "3nyKzPL3bFVqp73xxRwJudWQZ8JGjAjCTNdXPchZ6m7hE6wkWeysPmEnTyYDsiDNMXxfNeJyZVMWU5HKZCnUq6x8",
  "key13": "5eEW1hpsuqSd656T1R4jvhZGb9anqC5xHWuFnjdAuYWtsniCZqdj4Yk22rq17mFv3e6LUUmFkSKmYKNw1M4KCNs8",
  "key14": "2vGRaymZN8h53Xt3hg5TbmToKS8GYmNmQqSQc1WnrFJj5jsLgCDMtjSERyBCwFE7kxFdPwxG1B4CHaRuu1fGdH1R",
  "key15": "iTXGvMcLRnbRxD53rRMSiNRom9ov16fpysSqGqVabdMNSafgRN8iZ2wMZxZvK5cFKSkKy8LimfRJdgxccb3kf2q",
  "key16": "k69MsNJBsgwmxYNB6NesUzVN3vXhfqEVAoeUbyQBfSTTXMDQhsDfsk9sHL6faH9DeaM3oQxShfdvDmMR4tPhDX6",
  "key17": "2cTxy9MeAQb84CWFN9sBSYZmHMgBv1dwnyspBoXeaFR2JwZJcfDy9MLdRFoZSFRvDt63oziKMaxaKDzUVkcsj1cu",
  "key18": "4wpUw43k9HVpfvUHmuKAARzTwJCNEibxR2u19DRnfEEv6A8s25BAYva57kEDroQfGwojja6XsrGdcvV9XFdejA9V",
  "key19": "2F5prM6UD5jW1Nt5WCokgUsLTaEU48LCr85rQZaUamcfgfhD3s6sBWetCrYohyKpqLKumk4Qef1DQ4Bc1a3gBCDF",
  "key20": "kg2THVTmubsPWEF9ntaYpHU4bGg8YTLcoPh3Z8iEgTqjuKDHJec1zjQnYJwNunH5hag7V5KDBnYiaF9NmNhqFve",
  "key21": "4wy7vDGm2fPTB6ovs6bUWMrdEqEnAohw6vMZvSAjEKtvb9cxwTtUWUPnmsc1gC8aTFNYikRpFum4FzpJ52n3CH5D",
  "key22": "4Xack5aRm9vXuivjMvPbMtFrs8FTWG5RM1RwJ76CtvNUqsSvA4aaqcsgjn8atUFbaqK2fTiBycx9Mz6Aa5jTrMo1",
  "key23": "5HjqNCWYV45obS6u9srMLqzxytsEh6v9Sd5ro7BuhfHpohyzkp5rcWAesm756B7eGxVka4n4gyyAZ4FDfvTnXZmp",
  "key24": "2hcsM9EzCxjAV8D1MzauwbBFFYCCdWHKTFk7d6z5NgEUDu7q6T33zZ3KDYTE7zwX5T6t8V9utcQ3tnVLQaQ5SXFd",
  "key25": "5xJU1Tb1kPdDp5zEVAByBbiPkYCA4fWbbAgChqpJrqpzc8Mt5tiCASuBRRFakHZhJMnkf1GjrnhfFm6DQiYyyBqi",
  "key26": "3DPX8q93gGckfj2yMoYX5649PKX2PAfNZLSSsTf3ummpHaKRVeVtxUktToWYk8L2WHw61hXZoSL7DAKtmYbGnkvv",
  "key27": "3HNes6fFyjoya7MC3cJ3Ahqe8nrtjXKnNT7tJM6RBe4ateHLao1N42Ufrgoh3qbxVPz6U558HZfv2pW7kvEiPN4Y",
  "key28": "39G7CHLMvpNxkeF9d6F1yBoDM4cMYRE43pH6Sxd6ySkQ19qiQXV9PB3bgQJRw5z2DmyrRcTudFaPpQ5cRzTitZmM",
  "key29": "48oaZQt4XF7kDL2hReht1Nj26jBE1QCi786vLo9Maqux3H2ZmxoKedZQ1Qah6WxGTtapChP8c6Gsyy6EyhV3ymAi",
  "key30": "4jpE9gsD13e22ZhJR6TM5YheoedLVhwGpWbEyyRtv1yaQnRKUiaf6v8wMtNJs24jyCt9MNaqV8gQLgopiM89PH9p",
  "key31": "2cr8gsmKAFvRzPrseFT4kupFtrWq6w1YJrYsL1CguTWLHh9meUK79rZLNZnXcDJPHi3gNxG5vdf3GhHeoLzov2Af",
  "key32": "5Zru9qUJGmRfTt4qWe9ZwrWq1zcvQMjMPSJXQUs1FpiHBpqEXr1YSdHrK8ERgqZh4J5cTwqfn2MTRShDZMzUrFjC",
  "key33": "btQn2TFRjShWLYob7CXjqAytWJekVy4CjaZYV2V2mrE6JzfshJgSX5HSVx7ULLo3RYpuwWt33bMLexxJEBD8U7M",
  "key34": "2ZWXiidFj3YQbBMu7W65K4tDpsABnU25pDePvennncd7zGp1MCrWL5t9aZRysEbKthMiZKNWdhoUgqbwcjysYYKA",
  "key35": "5XGNsYP5K4GGUGGZsUPVzdx6aePTqoBT2L7CobsSNR5sP3u1ecydyugti7y74Fs9pn9jDi9EPmsG2tBa3VaeQT9S"
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
