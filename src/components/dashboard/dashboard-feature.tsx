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
    "2K5kwwX7WvUDrAUVEAe5wwYqEgX1h9Ut66dynq8KCEVinucoo82iiFSa3tNQjeVoujAEi2QMTtZUy7kNH3AxuDvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqCrhJCeUB6wTGYm32YMmFNHgFLzZ1T7jQJDjngoSBkm8cyQLfWY1bJygbkWGTkXjDiqpZLZytZjKM1DV4xHinn",
  "key1": "4DyVcwFJFg7qq8AUE5QUtCQNaDkqYvGGNoF3CLWXgZy9gNqVeQ7nQrr926P8cFu3aCqDRDrSfthLhn8sueVCfFL",
  "key2": "2AYDmCCSq99eDb3iRf1whdZV34L1bQJGnebPs4SPpLc7UkQf46RjohxS5Gxq34C7uzXxyJ93LNZp1GnDa35sragQ",
  "key3": "3VH1FEnfzjMdgsZFR5iR1nCGcfi257cT5CPRzp6pYLiZoMpY2XCce4f2NNhe8xHfdVA5AKKHPvmFinHpMnRZyTmf",
  "key4": "21R9hkNxxyT2fnpk2NX57sgJFZfaVCNsLVSRxxd1ZsJfPbX6Q6e9ia65Ra6KgyqgqFytysbiUX39Ku4RHbGznPBP",
  "key5": "3SqeP3CqXA98uvp2g58pUr368iowDXgem92Hzcoyys4N5DxHivTRWiqEnQnzbWF9cd6xRptWMipMKemVTvp6TwLd",
  "key6": "6yxtXg6TDeReosjZVjuxz38Vo5WzoCPFcdZWVkFY4qWizLTY5a34qBDekZ2YfkPJFTiw99JvwU7wqjVKb7CQq31",
  "key7": "33LnF5eiKxfFQMeWZCF9byYmpBtw2NjxyNMNrZSFF5zVTDCvbZTn7A1p566xEYgUAjqQnutpfxiWu9crsv3zampd",
  "key8": "Rza8zuRAH7gzcjLKzW6UcwN1uSicwzwVSagMyLHYHhSfMafk9rWrfoq6Rp9cpR78D3LUiaQ6yt2uRPQZ7nN9A5w",
  "key9": "635izUPQYZC1j1StT2NtnmqGmqM8n5SYQX9ML58BTjZLUcVYoiCeRk2tURNgFQJQ96iuKt2s2Qr7gcdKkiYLVTQt",
  "key10": "3A7ieVDYqakHWPo6fdTV4FettNK2RbPZHPPgTo7x514W48xhscqfHvKwwgMnQVUnzdBL7DthNUvC3yo7pyGRghDL",
  "key11": "3nGJWmczT7NLgJkDdJSZ4TTxBtQQeunifxTWS77FnkUTykNXQQndmANFBxNV3dAEJuy1s3wQjqZzihHynRxRqxQ1",
  "key12": "475a5hTGwkdNxVxPrLqsasHuRidraMjAzajbidGPk7j3aBmKSfCmk8Ba4iPF7nUyNiUHmXc5AfKGnX1iPqrCMbSQ",
  "key13": "2eBGnyTwWStpnWmDbHWaMAZtss4ZBjXsbhUpU3Cjj6pRrNFHDVDNnJYSZEPoqPvW75LJQQZNKCEe3UMEBtCZf1CJ",
  "key14": "4XhamR6UaxjBDqjF8XtZX8h3D6qC4BSgmUufgt1NfoHaJ1LkURNUUNYtKiEQMJiirAmytz4gT5jqdSYvnKExURtP",
  "key15": "4JYUtpFZ6BB7Qk6d5bgcp6Gc3FPUbV4bEzuEiSsFtz7aXoJAZ2nbEBUwbkQjEV6VugbyevDtKdFSipyPVmtLwDYQ",
  "key16": "biCfxxeQvC7Jg6UyxeMmnBeE4pEHCaW2qNrE1ZT6qLjkmhhqzai4Rkzyz3HWvTuxj74AexYWzx1VT29QuyqwkDa",
  "key17": "4cQ2qAW9b8AwSLdZjpwcjzpDGLdfEFEcNqMmNWKxRMqvct7mqgLuSEjhQNDcbuaQMj2uDosqZVKy2RntEkUonh8c",
  "key18": "Ug8vFXxoPUi1DAa3BB9TxZXYjHcNaKyQCXBap5RRSuMwRFBr4xDQCwRQ77ifU9idnmSLYDRxt3op2hEtsJctBsy",
  "key19": "2EjBRCecQsKzynAgRQj7gKmu5ezK7Wj6TrUsUoxW49j6LzCUypLcj1cE5ySbRWEZqFSa74j4Yy6aXsEAvgEjDUij",
  "key20": "3D1nZVng6tbnbzheJNdwULCZsziKP3jQNnv65TAxXQHfswNX4iLM26wzcva6dSbc7TS7Fq6J5q3DN8oiPM5GsCha",
  "key21": "4VKY1rzL5SmYM4cMgE3WbbDq4kVkdHFocYpL2GK5RnAJ2sryMcki9iLrRggzK4KpzWLXRjarFMXvmTbaRGPbnAEC",
  "key22": "5gde7ddaXdCQhCd1fV19mERuigfFcgNLJPAEZCXP6wJXcQsjBhNMHV5mhL1qxPGYsX2yYomAnKvfb87cM4ZLq71C",
  "key23": "3bYVo34WsBZK6yoTfZNKy1bZ2xXiWtbkbdrRj1Cp7qJYoZ9xuDFLv2UueGVki8EYh1SRMTrAEqP4ZZs13FRCjtBy",
  "key24": "5SAWimQocABAg5jDCKC2SwB9AYuwXLKMJmHFyyG541L1esVof2NAonKmrGkeBQ4Dhmt7Ns8Um8Twcbk3Rf7zMbk6",
  "key25": "5o3LioSekuWbktx4QrUbxv6eDL7Z9q5gYPTCqmjSooGBQf98uFfN1iUhxcnTWtVtrHWuxWcDvqdUjXV9FXUH7j13",
  "key26": "4offjuau2NcPEf2UZ5S2EgDdjnmEtpTQjL8yjcV75ybvbXV86o9mH2QNsmTHARgXzDwFUrUfgXKaXqD4VppuMqWU",
  "key27": "2smx7XTaCRer7cCQFt7NFPzWbPRtDPjwDG4a3iaMDsooVgDGH9A7VGsuUuVs4dsMdkaZDsVZUv87JNkdLsTAwmpv",
  "key28": "3bya4S3U1NNwEiUiCsiUR9oL3JmmruBr5AvcwEBPeeQ1gEJJSq7AQD2Dn19YMVP28DNsZswwNvcbJzNTHoGqPKfQ",
  "key29": "5mYL2wdbrxRoXwn7yhTBRP9hESe9vU6yKXFXsD4TAeWCbay91QGse4H94vUBHJFc9GgyyVagkpKNtGrZKADpkuwB",
  "key30": "3oeaLXpcdqvzw9PyuBNPag2fGVy6jYcjHbetwVjMigRKoWMGgxvPBomE4ahxVQ1c1tvZGkeyXTQ1DUayDvbSNYs1",
  "key31": "5c63HW1N8iuq47tNf2yEUzmbZT3HR6EdfHMwERMeEvZKBSDTWs7ERoDerHkA4mEdViKVYWhzPLBSofsbVwAxfVCv",
  "key32": "iub8bpT9gyeBgt8YvtVFZoNXUG6kkPBZcVkce4JzqQ9ent61qiLAEiE1fzFBHLnyTsxHb1aLDWEMbYdshUyndNT",
  "key33": "xL8DXFZcg6mCvEnUC72hTYqFZc22X4D2aW3c311E8n54avYx4xqCRfs4eLbZD8G4NcFxGzMcdhmcibzCmMp3r2S"
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
