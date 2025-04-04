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
    "FtLLA4vQZYitaB5ofvAFofWirHwkH5zjceh7VFfEjyQUR6dnksoDMNjZKewgaUbUcVTbBLF5rMsZoeaJ85SVLpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZ9ABU52MjL7zg1rjJMW7ZVVGNQXWdx5eb4ekdSQBxWzAE8wZVqG6nXWEnowUxrXjDSHie1K3VvTPwQ3nV2jEQq",
  "key1": "5ybKozRhyU1WgA2sVknk9ZKF3kTAKvnDJuESavan3bwmce7HNkN36vuzaakYkduiaPD46BpBamrhm7izHQcpi47n",
  "key2": "xjPuVuDdBmphkqESHq495ZkSiH4sziKzdVQJsuGHtBZA6NfzKvAqdySVDNv27PqZgJh1j36sxPUkj9gwqRA1xGw",
  "key3": "5BwXexppXbuZjS59kFQgFi9jmQeRX1WqPh5oqtpJ5pzbVoUMYzMn7ETP6gJifd71ZGWhCC1JDAio4pkPPqTpmCTU",
  "key4": "5Pb3jcmHaoMysfnBh7cNpDn41KSiZu9HtocSgLc7KDKAsB88P7WzLyEJxvLs9FxK8ehDjYke5a3MRE6R9USzQ5Gv",
  "key5": "3UCtq3EX6HWFewUpnQPwC2jxDpPBaWjdps7qVpPiVRWMgzAo9oVVF7awpbxWDBs3W3ghUgjugzjEFJT77tfnoTQs",
  "key6": "28tEV28k1Ye4VfGNhF3jWCPhTr1cYqkK6Aa4rKrSp5sVpwq6xSipXsD6vKoVkyuNnW7Wi93oTv64DxdYVobuY9vF",
  "key7": "3kvgZVM6YmWdAzWsvKAQ9C41VJcvy87Ymmw9UhEf97bJkWcA431jzQz8KUk4qqjMua9JySBvoUMMZpw6Leayv9gc",
  "key8": "5bHUVBNXjYnBRAtBUTED1Z75B8CmrfihEsxXtwu1dq4AmdrMRZCNwwrBgpuEL4n3MSMEB6ShanZBb7HhQyjK36zU",
  "key9": "62rDYazZ1VHfA1FeNPx4K9p42mYqcnJoDxayUdTHeLSGk7wCbPV1YvpHKx6nWfPiMQLsmfpJKDW6depNkRR8bugC",
  "key10": "3pBq1BceUCrvMJFPAmsJWrXEmXxbCXqZj1zTPfEhenjvzKMXSwahspsZCyQY8puwPfT4LW4PSg3vPQkZyjHarrcW",
  "key11": "46HzmhCCRHEXvBzgByf1WqUjCHwJbBUt4ZWhyqJqQ16K4mKL4J1PwtteRwX9frjjFGi7BU7tKSCzShcAu2fRabNc",
  "key12": "51Edky27BYL2JaCiNbtsjwkn6haSSMJesSbBtHSnAn8JSPVAZoMnW1n3NvJYgaix9bbNuZ7R3p3buJV8iMfHZ7h2",
  "key13": "4Sek69ffH9Rb1yfpbXdH7RQ6RCWQmAvtBhjkicbjjguoeQHXLMk4TXf97mkTAPPZYiaGggMMEgbEWpTZiHB14YcM",
  "key14": "4ywCzNCsyjTyazCW2bSANkuXvQpBP5Njrj8aq1R2WArWYqvJXMEbREqyb1kpWRSrH9gsWS5YQ5wVkD3JurUPJ9XP",
  "key15": "42df3oyDQnbzG2w4hP24eDT44Yx2JCdh2GUry1gpDBHUzazD4PXLj91SkSgS248TNa4FtTgLzfipUcdDMenNE75U",
  "key16": "2VtfMSme4E8i5ZAgAoR3SBUDnhkkeD6awVYUMyBYEwMY3t6d8FjYZ1sDd9iExfnxCE5QDCszUDASwwepNfQ9mxKV",
  "key17": "5wEfPpmpf4epdrFpBiUm4zjzWJ7LNPJ3jU225489NeP5uAbVHJhUxuUsdBDmAmXGtJQxdr5FfTdWFtPTxugVzHY3",
  "key18": "2K9n5qTY9B2qKd4ZtZuDXnWgXvXAnxsqA9Ln4vawFbr7j18jitmaze6bi4YhCoG2T3r6nAN8JzoGsu6djx8J2rSG",
  "key19": "2pc4h3JZfzBmULCE7KGDSqjSFk3UqruhbY4ZLrNzYovHKrps4M3pmd6PnspTuB7Khz4Zk8igc6aaGWzVaasbkQhQ",
  "key20": "4JSCDk6SWKpL3iknCsko85HFiRxE37ofaBPqWqRuqGvUxhnK3xtbD3vEkrrL75Tsc7CSeXsn8DY4pwdNFtUNNjdL",
  "key21": "2B9Zkd77a2SNuj4pp5yK5vTNP2SPXsjKALsV46pNDYHfxkZnyUV3wwj3Mkyeh43TdLyH739ZMzXBWdgTfGLikou9",
  "key22": "2JyujYj1cJqW8dnVxgC2kRopCUgFBHxrbUA8KpamcGf4L31LxPeJ3gwLHhLvbjcWm8Jq5rPVftftwJGt1fpgeGSA",
  "key23": "2xuiiw9yT4oAegahsSZ4BjHkRWswNV9Y7dQtP35MLcXDQUGLkJLZb64yzZENGshiD54nuqqy3Km1dPxsWz2dBe9h",
  "key24": "29DoNgug45rcDXkSJusv8QhdCtiSNBkQLqWTg4mEfgj4Gqo8y4Fhm1SDb8uT8JWuederP2Ze1dU6UQQC9hp8LUUr",
  "key25": "5ZAKu9caetsRHuJsWpgvDRQ6VY5A48j3yaeagtg4igSh1SPAMQUoVhXZamowoKqdFYnXwihFwiHqz12qC4fHGZuq",
  "key26": "aeytnqY5U6xJpN1KJmfrBuNCDLtCZCQg8auFvj1992i9itQzvPY9q2vwkeyMGe3eX6z8PdGrEh79HCXqjbwT3gh",
  "key27": "4GV3AhoAxhZebAN9dTNixFb9UExXSK5LP21st1v5qmJCzLZ9gD9t8J9bUHiv6USmF3SWrCKTmZCgupSzHRcpa2gP",
  "key28": "2ehLDiP2X4q7W3TpGKyPAP5eeKP26cXYefivC9tDbTAhgih6QNSJR7eZUDMEBkdnhzg8FBnE7F6ZH22BKRj4v6fj",
  "key29": "4ehdBvbTbPyxGPJDbAak681Z82ivuhd8JQvki3bxP1TtVxsCW1ZKuvktf4rnHa2oP3nSTKfAKtn9JzE57Q3WUtBs",
  "key30": "21REQ27MTwWQQeouMD51Tr6wnZ8fNUEqLxMu2gW1NiC9V7VbqoT4kumhPqwk6XzxVMJckFwBWEcbhhz3peJ8ca6Y",
  "key31": "jNmh8DJv41gnDvocLCU71vtJcM5EQqz43ZurGcsfhvxqrbYrLMtkJB5EXYGfyKS9X3nQ2H374sFk7LumHbSYuyE",
  "key32": "4e7tUQDieKZyFYHTnaxAVD59mSUiWLxwJPZsyrmmvwh9Hkh3g4F8YeDFwtL7sZpzfWA3pJwv6ufyx8E4fETeYNBg",
  "key33": "25Gf5mHB7zG7jx68J3egBLYeDXqRAdjXZ9AUNRzMptugEWbjf8mGocLDGsBDFd5A9TYYv7tAAKdwnGFMfcGoUFPK",
  "key34": "2Do2PjunsZpSyFzhDdzjZkkPKTyy8hR4mAwo8H4ooVMG9tVyDbzb5nbBtG21xvkoRgM25DjRQt9N6mSHPcFQXHXC",
  "key35": "2MppvBymYPUzoF15ErKwWfij75Rb61QZ15FVcH1VQJLU5VrALxcDoMTCxZtBTXiQjppYTLk9xhe9X4EE7arPYjuk",
  "key36": "3nC1mjvzSWBDz5LkJJNpkxnKgEs9JffAipKYaFULJ5E87EFG5vv4kL7FNhb66QaqGK8hRQtqcjNtNyhfcLdXAnwj"
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
