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
    "4KbDCZiPJkCKUnTPcHqcsCy9UVLkAXcFS4hZfssV3rGnoYF2yBnahygXD2yQu3LtmFofYHwZzaeLa6C1nkGusM4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jC6BuboSSLPz13S5XiCHvBJz2HzwYNQju3msYMGjat3GF3dZkuuY8YMc1LLuKvWZAGczPa52jrXXL72DHo3GA9j",
  "key1": "4Ymf7abZkeNBZtR4kYF4foZNqpYnE9e2QtRhGfGbg1ZocEhEt9P5M2NTsKrB4g2EFNDxNh2R6HouUUbN83CgxFPV",
  "key2": "3stCg757yXGL3ZXFMJP3XSoZeyEpPjMZDgPYeGfmhwtwpaK5LLrYn9EtUimFYzoH9LrYhzy3GM9NPKw6qd81LmU8",
  "key3": "2o5tow4TKBQDNBx2LfTbWgHmK9wigoQwLP72PkNKZE399LbZrnmLMoGV42WwT4yfVj75NS3yXgej3zS3JuoPVozN",
  "key4": "5EHxeQiosXiZYXm1bqawk9YvxxRuhTseAdbV3x7cXsFuXtaNSHLUcxqhQH4dBmzCsFBR86sKUKvxrisZY1KqkKaU",
  "key5": "4poBaW6ZovTp9Mk763inP6FjozSuge2EQXEVBT99zxC2Kwcx9ubnwf182MDQrScZac9SwEPprwbiQiHbfAKfWwk7",
  "key6": "5CQSXhZWhrqWxE61Lo55Ae8vpXNpogw56WecTj1Mh86NKsQj5U5RRrofQy3oJ9nLqu7bnQ1rkt5kHPWNgHUmoNWo",
  "key7": "4h5ssMRoBc7DhZEM3qeNw2MaPtP9wbHYzcgHwxNHM2uzcDxNjSC4r5heJBDzfPddfKtG3Fv8eYyCfmr78hToUSaC",
  "key8": "KRUZwzYzbLSemwuUvjB5FzGzrwKFdNUD4RTvUtdGU6DxfBabV2dopq89Ne7Aain7guAVYcnLBEAtMzdChn38RaE",
  "key9": "62f21ibYTfwLRZqmMJDB8hZz4YoZoUhZTSGpD3zUjm1G8TMk9EKokEyG9Cd97Exde1VNyptJCkwt8YNstJ4EFNWS",
  "key10": "4Sq4yT16xA5Yc4XS1VRwivMXmNHgk2t2u9r3wjcpU48BvJLphE1KMwqr2kD1GWpnrukUjaAuEBeDBqivj17PPs16",
  "key11": "2wf23LH1vo3Jh3sUfNWPRbvzcbpn3AbJWR7vwZf3D7Dh7BS2V7j8zhCjAHzrZcxgDfqxpYUQb2Q98ZXUAP5Zwqyo",
  "key12": "5cgm8UwjyuiUR7UnFabuHweovqAvam8txhe4rtgrCQDt2WXD52kDDAN3m7dhyouuTVRAcS93pd9gUPe2p95HCmkq",
  "key13": "3YgoUKcm1bBdPyNJn4VMxsGhda9a9WLqCgXX5yt5rpBgqBbWR3Z9mLWqm4cFjYkE1j7sgmuG3bnNtWXoTTEa9rdb",
  "key14": "4TiMEn4k5eavMx9rvRsah72Y974e7M1TmBVoGRhqu5g14fQ6bMMyHiHFCxeizh8rWNWq4c8nMnysKAJjURTwSfie",
  "key15": "4pssrf9fkBBr1EnDxPjAM7nW1Fp5rpwKjoBcchGFHfvm8rEkyW9DQJgYcdMDzKy6HTzJjcJrJFeTQ1AqRimHf3vv",
  "key16": "KTxTw1hUoJBvaZ1CWtfq5k58eAUs9SHt6hRbgxCj8Asc1LUkMYZHBT7EKXRMY2UFDzhwy2Crt4FCZWzt8k8fEyp",
  "key17": "54xBC4heV1QQre79kfNuy1vY5sJTrinKGZPZ85Fq9Gw391zYb9PXE6n4jaX4BQo3eyKxyNHz3TyTmgEUevfF7baL",
  "key18": "67JrYqA1pzWTwPFVVyszCpV26MSwTcg6qfnenjSu1cKH2KZn1TTgwsuQoNvSengFZSz1iF86udY9m8hMNnwd5RgZ",
  "key19": "4HpAyGkm66tMEWyykn9xFY1Mg1cCxcnbNKstGBjEWW1fMGd4fg4TcSCpgodYrpgFn1ubTv58tgyJXNLHDACBPAYS",
  "key20": "2uEsgwguLrsoe23fbjjjh74ad4LQNz7pAcFH8BMVUowLQ7h3hqGsKaF1Y2tR7jN5euKBbBfjWABXqGSweyjT7ia7",
  "key21": "5q3uX2sp3rK9SsSmKzsamxTrd2FAuH7D71dt2LdVFKutCEEGKG4JStE3SPLiEmHLh7mNyVLvQs1aU5wzqchHQxVG",
  "key22": "2pa3wbqG3E5FcpPp1vxki1btY5sowxDS85k66jUiHXNSY8YKcTtSZngm8L9qbLmRwko4ppXK2EtbbFC2rV7eSsr5",
  "key23": "4DUaygUcD7fWXxR2g3T2u6U6th53aHfUA8taZ76NZunnDZasKVhchRy7pduUzHN2JCAoGy8CEP6q7NJ8gq7zYR5b",
  "key24": "2v6qFdFv3tsEuhDQLgCv8duJEYgfc91QKSJ8max5R118W2HUtAm46CKpzG4Ykw95anJxXLfnbHgVr83oTqN9rGfD",
  "key25": "5XjVgjGkzdATPfNK5mjP2vFZJuo7wins6s3hQD9BVuf8KBxyTKaaMtcb8URFnfbDiBN6sqinY38zsmMZ4L7sdPpt",
  "key26": "3KsJ8zaGuEr8AVuJJNPSDCg6iHXewiEHX3uMRS14Ya58AdQrnyFtymHqMgmeKunDwaKTnst9gJ6voNCZUCMcBFtP",
  "key27": "14rTwhCSC8Rva2L7kxbzL5CWNPwVoT7JUqLTm6gMk1ZNzLjsyen3xtYya2kY9JibXcaA2JWGH9UVXcGh4AaVjgG",
  "key28": "44hX3voZDwvxafjpQ6LU7jGUsSk83VnuNHFFc4odkxMuabtLRL8igPB7YZ6JHe18D3rjK657YUZHT2nDYFFbBSvv",
  "key29": "63nqjPdSWMKKbFZQrijKqwdEUGp1V84Ko12wDxfdHyrVibWSSfvbeaywbiYhoKmthAg369m9NjJEFsJZETrJiizm",
  "key30": "5b9r8GtSd3yi2xtEf5FugTmJKH1j96p5L4H7NpyeMJ5bP4J2iZZxAho3cdy8gAGtudnMC8ca9c2cD1g4MwtmyfpN",
  "key31": "3ECdvnbyfC4vmJhJdy25TesV1YwAfHfWqz53RaAPC5AfTiY294KrfyG21gCakhPMAweLpQ3j4ZVAC5NNozwGgrvV",
  "key32": "48tx1Fc9pxXhk56yfMvbh43n5iUEm7F1mfHmgKFx2QPCxpGo72wMuHRvRQcsYBT4Fr7A5uZbP4zohHWR6SVtF8ZT",
  "key33": "39eYvmMFzfT7mD27ofVnpxpsRkBjst5NTzgw5EESjMEBTc5UCxrQK12X8ndArou219kmjo4FahigwmuydWxtNiKA",
  "key34": "2tF9RCZ1T7PtgBcKokh85Kd8wHupo2opCvX2eZQijUaLdKA7va4enqLmyLbB1N3WYqF4SdSGDb7godiXsMTU7LF7",
  "key35": "4XrZeU6k6uvT2fY174xo6NSRARqZh7N567ZWBeit2qjZAqWM7jGkVAZRfYzVxY5n53o8tY2brk9bUjNLw85mbAmk",
  "key36": "dFJ5gEkj7tzF76K1ToeGo8tpp1Gj2gSzJnDuXWaFGU7vnm2MR8ZZYnMJp3f9j8rqM9fWFrDGS2MbxTrMG1QbscY",
  "key37": "2bdCMXa7bgMrWPwqAy45KBHSnm4nruaBEz7iqhZiQfx1G2KwUW5QaCKSq3fozFyFZgLrwJ8Ucvvh8YMhJNFuxUML",
  "key38": "nboJMKM5doA7M9Q6UPuPt1HTngF1KE4JqTXZxD77gqxXrVLkN8A9JtwGCLVabHV9CyqComz7zSnnkYapDyuPhws",
  "key39": "4cY74wxApjVQEbtTVk7pidh7Mf1NyfjYfNZ5Ws4UXvtEP1q4aavtZNprxfwmn36eJKuVATbk44n4q2TNUUpGzAv8",
  "key40": "4BwZLSE1T4k7xqJgBbVgVXxkxrVaJsybw2WBx2ZuiW8bF34CkUj9hQ1idsmEgRKK5qFpRjCtKvmYhtFwSm3mAumZ"
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
