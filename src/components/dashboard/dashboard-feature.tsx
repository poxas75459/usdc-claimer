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
    "47DPEkyAVd5pY8ieEotLPbXRLeLzjGHzeMXzcKyarwBHhYyaKUTVggkW6bzjfkmAWTB1ujLgzuM8AML1keuKpor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANswPgYfVHx3RDsc8gTrASEeshN5hCBJRBsyLTK1wjwC5sELMvw5cMVUNxNHpZqQDKFgRrfZsUFdKSL1zZ8spud",
  "key1": "jVdrxxV7SrqssoASsXFZXLpHEn9KjQEsu8WhTUFuDZ4wSjcxAYCFTimDrn4y8fkzRpKsqWVsoHZZMP2pm7a8wys",
  "key2": "2QNbtBtyBX57sWpje62TWu9gRhewZeWtLPFaJfuGLf1SJBGoWrkGw2VbVu8EDZN4TUJnbrdfAEFcGu3QHiFvjD68",
  "key3": "2qSU7dcLybcxLmqzeLuNmCL5wUrUVvXfJPPPMYFkaLaSnDHvRzxSBXCxC8zZeXTrjgTQvPtUvR5Mzk8WkifoAvZM",
  "key4": "3Nb6jkUoU1WXPUufTqCJbHLsy5yqiMS3VZbSuzRmPQxcR9DMRiyb7JsL23Lrajzdr9tHttg43ppLuauK1nc5tqQE",
  "key5": "3gtZaAysHQR6uG3ENBLsxXi1jvWkpKwztMWteBrCwUWayjNDBX4AyGNCaZASTELFXeMgrisgmzTnNNkGdRJhRMyr",
  "key6": "WqmxNyTe5TguxHWr4uaZxNktJ5BCrRPY2APdL54WBE9Jip5xjxWjeY2Z4mqVb5SbA9qjcFFcx8AJZQFX55oHoTF",
  "key7": "21txLm5wjq53v7tmJmXbMVdybYuDLEPTY2PukAqZ5g3iHCcBrRhpaoh9wQ9cu1jumecSsSSHzZ5BSBkv9CRz1AAf",
  "key8": "4FryDFyMB2DMwFpNhqn7cTQ5UpyX5u67Ld4QE2mzMd4hu3mEtA3PY2APrwW4XT7GRpKLTSS15DNbhiywC7N3gidJ",
  "key9": "42iBcDPCUwB11g93vHiZPV1BG527os9dFyStMVHtL2rfaV6vK6enpkY4vb7M5V4xyCEFiiHCcCUbjMWUpDap1yrC",
  "key10": "4oMoun1pVHQ9rtMRZv73gUdHyXtvj2VDfpxV4C4ZAhHhFoHW3584nGT9wYkVUEBJvB9wcVf9X9z4DgM2M41nkHbW",
  "key11": "M8wfUD9W7tZFrPsdc2yxRnhwdXQVkgaapJiadcB11pmbjR7qqZQPLgpnHTsS3m5dwempsz1fMbpEqX3cdXfZ8Fc",
  "key12": "5U5XrGEFoF3md7B7kZ1hL3NtCipxSdG5HvEbqj7SqxH182sMQyKaMMZBp8BhPxC3wKaCN4trcZju1zftySXTSFJ7",
  "key13": "rptiCxWqRq7EUbNNtyUNybfxAWrPANNx2yhh1DdpX1xPKWnQ48CGrw8WLag1zpbEryC8HyrN898T3h4GJt3ev3n",
  "key14": "2Vm3tT7SHe8xvZwfrWHLbMFwwZjK4YiqmBuC8NLoZrmNpwqQzARMrZ93D6PSxhpEAtF5BGq58aiu4z78fpCHQkFg",
  "key15": "3QZmqVLt5ryiwkrC7G3QX38So3g6VUtCJNCwPkz4Uc9yNMziG2Hbe31DExY3tvmGKVj6ZgvkVPF7nASECHGuxySq",
  "key16": "3Dn8QhxAE7LTjuJunjgM2bdjDNGTx8KUSVDo7c2gs7E4HA9jrpYAZZAodMy57y2QBq8gJSJ9uzRkMwiQCDtJBis1",
  "key17": "2SWqtugqybiUUotfCC7vgmpBLepfi8jKptytfNgikEiV6zd7d9ZBowm1KMTCJMuAhrUiiTgSGmyjRS7MoUrftDkL",
  "key18": "5yyWTLVw57Kw1mobMgxHn6ChfyeYEatSquifkArcSMrGrumXHZUgV2MmPvLnoU19hnMFypfGKuhaTZfaKezmiMBD",
  "key19": "4Zz7Tb1rKrakSptXiBJyc9yeBjmzNidqwWiuc9bzV3GVV6SETvnWesaVYMLJXzFHxyjPe8T8CaTAM62H87BNPNdD",
  "key20": "jLctCek1q4KevJ5QwYwjJEASaz9A9yTvEm6hhp3SQ9UuwgtBFKHaPLwWPhj6hKPGbHMuCkf92BqFT3zNdjJQV4r",
  "key21": "3pVZ38vdzAYudhPTLbRwD1bPR5YSMtYpUR4RRdXs6VaMMS2p3G5iaPiHDkpek1jZCPYJyaBYdWQ2CXg1WLe22HzG",
  "key22": "3hEPqYXn5y4dma311DaZyoWeNVosHBbNCYWpUMoHGwDHi1X4YHRW5RPg531rfoxQTiiNJK3afw9haakW3dX1NDp",
  "key23": "mSuazrnXQxmjDhRRM8sq91fvKAda88WJ7eMbPvZbjjPmCeAWTviTt8GD1tY1k8Lysqfz7TDjDq4g5FpJ7xD7ism",
  "key24": "ojjSgd9T7h5ijJn6X3FgUnoryTfRZF2BrBXq1yA3Cv3yRRzwVgj4hKNMKGXFtGjZoV9uEmHe6xwEPhTG5gVqRx5",
  "key25": "48GZPPXDm3H7mm3MUDwkU1e5rqrXAhHCVFAkJj62WhAGBLfBCahdR3pUB5PVKaZ5VTNTaZive9yrUrBcqfaiHGdH",
  "key26": "PTMedtECecfQHC8Jts9GYZcHave4x1N2LM2a3fKeSgAB4GztaCj6zsjGVvQm5bPfRXC5f3DhNAYpz3XoZoh4epR",
  "key27": "wNbDq6eToxTYHyrqvSW6GNfoiJxQF9ZsCEqgGZdwJLKyA34NtijC8bW2JfdTAXvi6pPy2BLYHTdeGuKykMbGoW5",
  "key28": "gXmr6Ycyg1hiKiSTBaZ5d7Jvnb2eZidkPauYzeNCkk7tueCwY1e2Z81G81BRp5QGF23F3cyGfZsUJpzQ6nEDWVv"
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
