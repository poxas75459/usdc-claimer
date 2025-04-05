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
    "2GxB5YgxEdMjSRPMNr2Sr8X5qQoQ5aBw5GB3Qh4YUNy7sP4WxfmNf9dUDserzjHY6TUKfPPA6eyThttALiM5viKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X25duW5yhkgGER2ANK72guTZ6n4sjPd6JtAZ5amNSod8Zc6WVaZxgN4YPUW5ZnpcyuaWGyMdHAEBk3onAFEm1f2",
  "key1": "4eemkutccJSdLk75ZNuEC8JZPUAiwCDa538zEWDfhvnNxMvpNF9Jtd6uc58HpfBE98gMuGAzjYcEVnkZ5eGYKbFn",
  "key2": "aj8Zi7pyzvuiWeQi74TsnNRezMPjzURJC9BAqaFK8pFnUUcU6y8LkEEuBiDwTdE8MEzQUHWsbjBhomFu9CVRVsZ",
  "key3": "E7ZVvSczgzaj9uKMt1TW4jSX4f4zfmufvQ6LiFmFNPakMGGuSiiV33eebbsSWzpGnwQ3byb1fgKPXyymfVkk6CM",
  "key4": "4BRbyiff5pserWPf1HVUpp983vq4pkA2H8tnEbGEqAXf3oiFaLyeksng8wGA34QwEkHRZrFSeojoEnnKiibPNKF8",
  "key5": "4roATizd8sL7B6ijA7nQLrG6RNdmg9EWYg6FC74VWHEEJQ9iaSiRToULAFDmfLCxJhc3AEe6aRSQLtitkmwbTa4u",
  "key6": "4VxCCVRfb618kT98mtbuPaKFKZfvNKwPKqdcwa2zbAUSULc71XWLFWf5rR3R88Y465iMg1wENcruDRLCe8yNxuUn",
  "key7": "3vSA883HZeXTT25TvCJbYCP7gqcEGuZFDvQ6YN5rQkWXuSQDd1WDrC16CZZHNi3XEAEADCimBCTxpxF9wQSVbjDk",
  "key8": "5GYpjtbajY6NcjtY1vQ9RuN4RUmhEYViXLx8dLFmnzEjXUb2HNNc4BtCpHknJ6pLbZofBLGd2mRK3F9tEhn5twqv",
  "key9": "4PrR9SjaMnWrAbXHjrHEo4Aw5qq26Vy1EN3W4647bPsgdVDwuDXt6siwfKPQjAVoYeChsCy54g2S6344FG99JBiM",
  "key10": "2RBgEo4aVUgXoncDsfnHTDuzoLn7o4V7yWqdebgTenDSfnuH8C8EVsgAPC6VvbeJ2q9QMujUkqSMpiMGZoQypyRn",
  "key11": "4DLjvmJf4kiHvDe4wpc91sCtKdwUbt73JYRaDVmfmo3PZHT5uupdk7U5xETj4EUk11aXGM1aa65sZAbT6o59QJgZ",
  "key12": "4qKjaYZp3FiE4MAvyr63A5GcXpht84sofN2BQTwnGz91unXrAtcTUtL6buDfRhMhzw7wDhtqBiHfaEB9h5ohstNd",
  "key13": "4kuthHMQfyvNEjj2ctZKgs7hKAyFa1Z2kz8YmTfJntLA1mywD1v6xKKJv6vDcvBgEeTnR49yndgV1WqW5Vdkd1te",
  "key14": "4aZ4V7JBTHmnYCt424mUwLpBoXDxN7epnf9Q5RrN6NUfZYo1y8C7jSzVq7FRcFYoqoaWXCiv3D9wMW5sJ18Me4Zq",
  "key15": "24PfG2zQFXiop28HRhfES7VRowhrfWcBWuFHhidUcSQVx7PKTJ4qGCNXuauWz44Pv7Kb21rhpRuXCfL9fG6UDx2S",
  "key16": "5JbNCm59hp19BZUPJFc763XTMsEzMU92kfTBFsrF5HuxRbMbi9CfChZ8SMEXyyE3KogVyPQTs3DbJYMDqsrWGSKZ",
  "key17": "4BfoavDrGtpjEchbyCaASavRea1LcCqvjhahK3an69BzWeTwGY8NAYx92ri31XQZnHvGTTmpAmoGwsKp7BddpGSU",
  "key18": "5PwakKcGZx8daLJLtchyFeFR4ntdkc1DyUujt1dHMZ9hRJogid3aJ2yFjjk7uRPXGEQBATDyg9mFP6Cn2mbrfQxW",
  "key19": "24gsMEjCovwFQYLkdc7xX1UBioqmkdtoi4WywkZCmSAHR9acpwoZnHTgqPTH3PPjCWimX85KowtSkbG9ZsCMsdzW",
  "key20": "3AurWTn7JE7eYSLwvcXXitTDwrzySRZyZRsAgdMLYajs9FtFrz9kPDRi9Qct191vzqSaSdpZgdgjo4ekrngKLjDK",
  "key21": "VM4A8EC5FC1HcyvVg3XUg4DiK91aVZerSCYzrL5cgT4mBNSCg7vj5XTEpEZZpoLLWkN6HqdWVyhySLYeLwzYjSy",
  "key22": "4cLzg4sm8WTFqvsWM3JMJsqiitGEoYj691ZcsBSThQ5T1rB95LzCgthACQftTFTZdaubV6PoggVswBP27vMEEzZG",
  "key23": "2G4kCvhUDS1KNRUMVeH5sRyU4fUnw7FC9KPBBtnrrZSXNvHFhszXKDSs1My1gJmbehgqxrwhdxjAuAuU3HybEi3P",
  "key24": "48nNb4JZ78Dh8y8JH3eK8UjU1s1Jv1Nn5MVJNVsFosZJP4nrjyGvCc4a9hZYJ8DzE96VhS85SyRdfjXu9UznMN6t",
  "key25": "2v4CU3tj6PuszU1CnabFKRsBoAFLSDr9ivbC3gaVJ5tM9Cm2AEeDwb11LGNVbqHfjgEvQUSUPo2zgaWgctgfGTeN",
  "key26": "2Nwrci2y7mNb9y154gPY93aDtM1SyHZf3BZ7YQtsAKy7n7wA5T7b1W7C7s9SyTyPUrQAapagkM8ANcpKvWTexdsy",
  "key27": "34NsVg7t5TPag8g3SzYSRsdSUUHXDucPM1z3v1D37Ww4F8UCWBrpcwZpNvtxC4QR8vUMhSBAev1ecaZS6SJgkMXW",
  "key28": "67K7GvnPVMMcCeyCp5kzJT9uzhJpxBGDzVsQQ4q6hiyPdSJHAu3g6cdpTsWVCixiUnks9owpWaQDUgcrFEqwwyeE",
  "key29": "1XXrUHeiv9nH8gG5oZThjVmfjSDX6TZa1LwyEq1ZFXUkTziNVubQV5dGov19V7JBLYEerp2GitEf7a6qjE7zx1M"
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
