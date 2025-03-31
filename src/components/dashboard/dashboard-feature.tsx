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
    "28D2rixFCRzRSs8YKf7a1fBg4dBPzx8Vy1q8ABKcQxx8JgN3dvX84pPRj9p4xvRfHKjp6HKFdwE3qxZB7v2TjSKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38v3GUH2aTMrBA2qo8NfkrovGozg8ZeDShGz7EEoApEPgPhJFiGRBSWjvNmM7CTmiXLGDtgcA7ueq3mYm1z2bP8A",
  "key1": "AJygk4Tg92bLuZdmWd6o1F4mvs2omrpvPv1YLfNALUUrkSZHnZDmXJjBthosf6Kf95ZC7kjGE2KEMWabiYsfP5Y",
  "key2": "4ydYunir6fFEQADkcz9TfgfAUW9ZATZqE3NSu1c9eCJ6cdG4TiLWBSYoBwvVi9jUN7DLGbuaScQXmCVMkjgsThij",
  "key3": "4dmg7B6TiwPkPmf2ckyzb7h2tT9kS1r1XhU91Ksv3ComU6RwfYjoQxmnvPTwcydGh4YM6sMtdvmCpkcJ9B2Zxe9J",
  "key4": "59WcbgxdKcHxKQPd2wSeDZakrqzHz4dwVHwm3HT8kYRb79n8h6KEyfTnb4NUbJrySrRW86rNtsiQoa7H7Z1EzRZC",
  "key5": "2gh4KsbK3vfLj2Jy1CuFBMPAvi25cuvHWaUWmn21bkYSzQTessZnMwe9vZ4gx18giY59ge4wN7SDmYS6WobxQfFk",
  "key6": "54sps9MCL8L1Ux6bWdfcFcp6nQzbVcV23kVbsDwS7FKbh9LkKQbpavy6YSgK36DoK4YE5Ujsn47GGwiDTsYUyLwk",
  "key7": "2Qothf2pnMBESUACCZUxFhKRhx4VQHoDKQyQR1fyLARer55pwakoufmGDvG46TzFeN8nVN9t2SB2xsPTXxc3K96d",
  "key8": "2FNWL9AQR7aUAMRrgqVytD7q3wjiz1QfDU2riFVCLTGmH2EGXURJ922s4RSg6DQmtVCmT6G5FLY59vRMfYZ2WV3R",
  "key9": "4jKGCBM1kxspGmXZfnQXL1zkhF8kEm2o5KQ9izNCgRxY3R1ukj3DVEbJMFjs1NXwoW7i3JcUA1tUGqYs3SMpw118",
  "key10": "WBWjRvNJoiGp9HCR7R5gffcawSSUyGDb88pQc9p14AEpbZFjPjpcvNL7U5xV4UD8wQoGRNu4ssJKS6q3TshfEat",
  "key11": "4z1yqkhRp3xCpMm1bdvcL27ZTYRRgXJwWuwkVNjzvW9KghZEEDbBXK24oUTHKb9jdZKMz6TvbuHiWaqc2hG3f1LN",
  "key12": "THszfVP46KiXQkndUqseyp613iHbFKdSZGdC6WeMyXnDJPMD2RVPBNyKy5cqysiNEunGTd2ghzHB7B7PPYG3jgG",
  "key13": "3sLDmLXnirTMXjJyyJLG6Ac8hNb94ydCe6GFdtvEyM5jpWcfLEYfnkygPzxQjSxzb3tou3dAdvtRzLZRmFpTeadu",
  "key14": "456y7BUQVhMhGEHhCupS7ZuD4fTjX5tSFxggPr9nJP7vo9sdvomzMGtBHN1T8c6GvfY3BfHv8Trz1FijajipYBvh",
  "key15": "5wpPwShfva6TTCz46y1ou3twNDnq5ZPUy9SPUW6K4frAJeNQEqASGs3z6s79dHwZwbvumDgHPLohnpPnHT7F7bLX",
  "key16": "3WHgkvWv4B8A8PWp2cFKyb4BWw9ac23SS4ttZegHgXHCyZnL58R59sxwj5uxWK3mTUYSk4MmSwpcGKy4SgsfFg9E",
  "key17": "2nuMgWnuguB4wUnSxJ9Qzv1SgvgvjhxdMH5VowyCq3nn6ofDQPZLeeNpTyUEFRYrTPUohfjQbrs8G4co46tdQm2o",
  "key18": "44NyM7JnYWugJKCrhSNdmc2G5tUgkSTq1B637BHgo1gmn9qwpTWgEV4MYCQWhysS6cqNfxE1JiC2eqLSFhjUwjDz",
  "key19": "4YKMnoTrFKoeF2tP8PfJtphZ6nWNvugUsvAbQ4MGoPGmw5AxfXnHYnxpdpsT8bB2eDhM4gra3c1NDubnNhzjweRd",
  "key20": "d3VGrsZWuVWStmiyfXZCDqdnqHe1pFaPNbUArgXmnAdRKpNb6t1hKSqi9YE1iMdJtQ2svxWiSfiR6nAjMCrSaFZ",
  "key21": "24ZBXcvYuHEa5jodGFsr8y6dgu1oZm39ZFRApyQF9YD11pAvSvqpmBDoyHoqGVNjEJ6sPc4qH5EgVG4Z16TAtq8H",
  "key22": "5AvPzdaU2qkDfrJMhpRWAhqnWBaq6enrUnBovgwsQoSyFSBTE7d2RfSu1zKf6XMvxUJpXkM6hUysJMEt4RaoVXs9",
  "key23": "221Vi7qq2nUM41j63XqfPbFsRUjV8LWSVyeAA6HTWGTHejKkk2eWw9kZtJx4vAjHxgb4mG7XgoyJEDtTHrMWjt9U",
  "key24": "5NQcnpcDgRpr8oK2gpS48foZrAmrg5H2hg9CTGngmNGSDbpKV3VdEEeNy2fHzHTBuTFZcBRwxE3oyMtmyKkY8KRm",
  "key25": "9VrXQGD7Wp1UsUAijWuoE2j3s8jXPiJTyisGJZVRDuAnPTkEMP5mo4ReLZJv4ybFEX49fRZNe9pHETT5EPC6Doj",
  "key26": "5XFHJaLHCxvgqihYbUJihncQq5g1iP22YmUjo9yXYgB1sEwS4yfpAf15TRSenqxg18At5T4G9oTXLQPThoiyE2s2",
  "key27": "3ptq3dpN6qUrZTvVo9rkyGEDPftp8xDUtziXE9PCg2edVrjqkiyMrjY8qL4snrD4KGTmAkWWf955KVPhLx55AkEe",
  "key28": "2m5ADVfonDJEtaZ1kbeq8DAxrhnNNS5W1Ma9YkHcxHRnfDzz4DSfGMp7YHtmzSaPQmXMJAzHZi4nVj4YQtECUaAw",
  "key29": "HFkAFeqX36ivu5mC3BAcM2VDEM6KFYvzktgyGzLWvbWFF2wAsEPGjXtFHQmW1Sidh5tjL79F8BV85oHtULpoYAD",
  "key30": "3x8YiFxES3HUAUa2av1LSNuntfUs4BUJa6qm5dxqPMD3P4yGRj3EfuGR8GKkjtnpAQvxq5uZYbekRYZuFEyQuj44",
  "key31": "kNDLJuX2PHqf1UP8wWzzhhqoedDCv5NX8udncrdg1J7jPXi1Vm62BmKxHyxRXficz7RG45LQZ66ADmVvfDJN1AR",
  "key32": "g6BrWuU9vdFnKnxcorWFqzisWhiPDiyUkG3fKCEBzH1Nf29mFY6BM2nPMqdyPNT4gBVw4DxUoEN7hJTiP8td5tq",
  "key33": "4i715VJe8GpcNuZaD6f7doLtu6LzehdjpHmnGqEePq2HbqTrTgAf65TVCgRPoe449rPCgmrduoofHdPrzJEAPyrR",
  "key34": "ELMtHZjx9dSpFup8whZyrb3uzmDk5KPe1H37T1hfgJoYxLa8L4afeJ9Szxq6KB5ZKmsyjdoMgpZD2YcNg2bbE1Q",
  "key35": "2sixjy1qHfgA5Pyodd6XGRDcrRMPzhY2T4xvTbEMepXTcey4Jynk8ZSMSWMr6BtQn1nUbxQvsEaTqLUrkWS6bfCo",
  "key36": "cLbx5tZt6isrSSPpDxBiWDiaQ7RAXQ6aiZMoMSEmL2P8Ao9DoSMx6MucwB4Wu7PCR2zeusyfjPYfCGWwUXH6cTy",
  "key37": "2S9xZXVczwuQM62pRisoG5Sne6pycB2yzRS4VZJL2dxKYTmB2tjHv3wZCESZbNXvBmf1azKU6wN3WM3ppthejU5m",
  "key38": "31CdYAcut4x2KPabvfJS7TQ8c7cG8n2qQRBmo2dvqagkjAfQ3Xk6rKVAz1iZDuG5gLvawMKrJtdD6TCDsQP8qbNm",
  "key39": "3zedb9U2n8sCtXvcyjysT8HzpCQzMaBFk1JivTk29wdVZJJ8TCz9k5LpdGtrswUdQNezzVy5FWSwVMEuVSywYDqX",
  "key40": "3p7F2bcj5LqunbNprMkyqaRCAUJfoLEr55rKo2faGStoLDCs33ySzQxfRJNUfzmvCmzDDxLhyStki4r7X8PmMHYM",
  "key41": "FrPMraL1h7G68Aq5ht9Qa9jrC4Zn5Zt19GuLT6zBUcMMQjHX9rvmS8zPHJipyxCSZs5nr6nZAExam7db274dLtp",
  "key42": "5DN12mbZRMPZXrwvBF7aSxJoDJwmnkXLUUFKhR2fHETyFotCXErMDEL7cpdorh3rsKMfEpTu3c4XGFdtCxnozbNh",
  "key43": "2ykm67x5GUCQmuBgwuszsRv5FMetrceQPAuD4YaBRboQgyQqceCZMmUXdyiY4WtEaditgk41qXcTAtraHCXqX3Bg",
  "key44": "2heRbgLQuFSkDFsvNodmQNGNmZF4YR2fw8uqyRnubzAd4ZixDTou4CahRw1yV5KaMbeFp7oztid5ta33yPVja9jb",
  "key45": "4bg84ZrC66sNge9XwFUivPcQDLxYGeocisyr7AWn5tHfbeFHybPHTjwgPkKvjbUympAXXyvRS5k3xgkaMykhD66V",
  "key46": "4xC8H4Dg1oBgaBnRS5X44uppwdWqjw31L9a6BnMRX1ubvFbKRds8vAPL534cdVjgVfsQaUUCUiccyE1intrADygW"
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
