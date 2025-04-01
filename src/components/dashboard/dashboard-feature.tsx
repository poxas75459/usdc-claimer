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
    "3aBmfvijvxypwLaBu51y7J5Vyp8hL2B7DMHj8GHgCmsnD2XfXMzXB62D7GvBK1vpHpuzwjwo2XKi23TNxJEqJiiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoesLDkao71wgNRRDzJ4k67tSMkifgDV5eXes68v1iRYz2rEmZeB7y1tkRNF6z2Bo7hHHYSPmsFfy5DEYkK3sJY",
  "key1": "2Lon2zpq8XDgmUnvJRCvCEmRhrE1GyhFRzjTPZoTuaxVE8LJovvuLD427QmsN1HkMx3LXMRr4Ag15qCgXoZnBAm7",
  "key2": "5admomTN3wUbgb8x7hTtPBrpyVqTdUN9yBSQhrfpx6oz6qLvcRXJSTFjBSwVdnkDmzG65vjHCpbwepLBm2wod699",
  "key3": "3FnxwUA8WqXxHMQWzFVnQNcnnELSoV3Rp4Rw9df5AHfsGzvMnWVKLxqRyeQY53fsNjRJ4X5VBx9J6DwrTPyM6o1k",
  "key4": "4i6AhHSzd8eBPUkoGFkojJxMGh869Pskuix1k3ga5ktepApv3Gfey5XVci5sZMLXyZuxWcajwXWfyL5R4T1Jxsar",
  "key5": "fZKJUXv2B7ArDZp7YqyzBeh2KfgwDF8MMK13DieDNMmn2NU9X72g7GSvKHZW3XSjxrRHHENP36sq3bPUG67Wq2J",
  "key6": "2YdwqSXPwwudpKKYWoB52brDaCH6ERYmzPAJwHyGhs69FrBu2Xz2Pejhmofv63qaHcaNKzC9NVBpt1uWjtJ1piCi",
  "key7": "5twt6jw2Bgrfykd6NZzLvVncdcg8WUqi8XPjgFFk3Jsk2hBnkyjWDFWYuqEvGRQGAW2ZjfWf3k7eT38sjLP9htBm",
  "key8": "4rFnCRGcUiukyULkXTS2HrrDy465eKdWn6w11wgVjpHe4X3JBdyWQEnhVNmEk1fQLetWx4JUFTWzh4jBz5qmNazV",
  "key9": "36a85tcwHWNn8XutQMThhEq4FBorLoeRxSrUnZQFciZ5Lfw8imaHSx6SxsMEEbnB46MNE59erZzijyhn9nK8MVkR",
  "key10": "2GKJZE6DXTtiJv95ovm5qvhJ1riZXRVKFP4WbLrxM3EyhoKw7n71dYGDcJvgeCjecq9m6Dei7PDfHSCmcefMLPWB",
  "key11": "PWW5QvXMfbzCkDuQqMpy92DYHEhP4piBaBenKqwJAhqSpV2nZM6tsfk2tnyzgR2C9o3mYYe2M6U6kAmcEq3MW6G",
  "key12": "5wRuLafrP9An5qqpARtvpcvXcoWB9AU563U2LmzGciddqRmR8UgE1syJS8fUGWvUXRhZNe3ANb8R9jRJnCqqQjcb",
  "key13": "22mGBkcBCCbHisG4hbCwa1XfHrBqWbpQWdP23r68d1fURbhn8AsqjWsrnS6J55En9QgLXa3JGJ9UBiwyYHcRv7Yy",
  "key14": "b5t5DVVNZGWxHQsUzeFa3V8KDyhqHWvmBdNskLUqdt6osqr4dVkeLfBwXhVKEKV5MZDCVphRBhG4S9qJEW4edg2",
  "key15": "3nyihz1wHdQS5VYWZxUWMJyZtykmpYQtcB1YeVzioZCMh219DBEpQqMHi6qcsRMoT4BPgpaLb92BxES3B3BzW9XN",
  "key16": "ZTqR1cNMcHcaec7or8SmnARi3J8ZgYFp5QkFEAFe3kwz6sEbnofVZFzzowdP7L7s3kHEUEHJwF9CXjsEkTQansk",
  "key17": "57UZ59xMrVQdqka6c9SmTeD1vtu4dtbSuzjJhdYiAApPmfgLxsoj9EUiyQ9vHcPLEgHo9XScWG4mqHcPxfgPJEaw",
  "key18": "2fJc2AkPP8gSqM3B9MVq3PxRB5rHzUMYdQrA3a7qBXu6r68wV6xSNexYeJ2YyRr7yQ1rscGkpTd1QQ5CeQNu6DMY",
  "key19": "5YhKXNEAioKHJb6VZKVMiXHSNM8xtpdUWyjBU993gof92FKYz9qpMdPfeE7sC6zJrYQXeVYW92gEg5oQAM6DHhVb",
  "key20": "3pr9HZQfiAdLouAYuzS4csoo8noisA6gK17VPprsPfRHLtynXS5sqokZtfVrX5rbHj3FfFRY3qL4ihnUYd79h9U6",
  "key21": "4kBwqJeQNjqSn7UAWfSNASFBHc2r5WSwar9BSPtcma8JyJj2tNNZ8ZUzcNyjnMSLLBexm2613xNhAe8g8NzEnWy2",
  "key22": "5zFUfGS6yC5KPrRxZv3zWPnkbEYo1m6pPdcuqxcqMoCqzLxignwL7rSJLVA1aQ1bsJk9uGjYAWBm6kcxdj7PYPev",
  "key23": "3wMNp98nKKPbE6gSCd3MB1PMoQ9DxqfXris7vnKCJM56VBfsqhHTsyn3sp9o4q7w8RPLyPJ5T4tFpF2gVDorUCoK",
  "key24": "4GGcaFFntAvyiDjBi7DsyekbHeyKeBY1DgAvWk44jwYpL5h687n2KJvdV7h9nRkCQnKvWEyhG7Xtfq25JDWm2UAm",
  "key25": "X5Af98UGsjE8CHgqwcEjEgLutvhZX2W3ArMo2Vor5oy6wErLBAY2ndUzrVHbxgUmuNpJL95LQhhj7HAeXWg6Ea6",
  "key26": "26fgBQvQfSWq4xZV7Pa14ud2NGbqSygSzipKunf5NypqXnEi8PQcKxZREQnb4D36erTbo35SyFma642AtyWrcCLU",
  "key27": "5BBeGC9gktUR3K4jEpoZ4ESrrKawmUeTniSFGn7ACenMuSPHnQAV8cn9CLH8fCpaVZR2Y82VGuLSJNmeRHk33DFv",
  "key28": "2TNvAmcKgkkMpfyCNqucFEWxQ9XuzWVf3AhdcE1xJ3mVazYf99FMsxeEcrxMTqcbi3kLJsdq1Lviacfmo3SRSGEw",
  "key29": "3UYjHgWQXPk9MTvotHANJEZBjPVW3yHiA5gCvMN5C4beaTVpLLfWUsVUk9SRD9KEoihSzmwpptDNUsnWvseYPxt4",
  "key30": "3gzeWyvPhVBiK11KTqyjDdyjy7sY68EXjG35PovCSthvfh4osTiBwGjT788vmk1qDmbW13uWCW91yK9t7Wt1XLR9",
  "key31": "3N2AQXgF4nmm7Wmu78fd97ScYjD16PEs9B4qfP8vmyL9xM5MmBbFRA2BXPgc9ihVqMEcDGYMYkjibt7HZZF9Gzy3",
  "key32": "3PsUVKSWK42fyr2v22mVkGMPYB8DpLREBGdoH7acdVUoWzCJBvErUbj1EmpG4TfthB8s27WeiiiTy4VPpMkyv9vf",
  "key33": "393vzqtxBXpkaTJz8RwT6wLoaUHsFDbDcGKFqJAfjA31gtsAjU2hs3nFQAybZKmD15HfYSrDs7GqLoRwsmByNsFu",
  "key34": "7UWPppsRbBvGKd8v35NqzKg4ukJbSkE3g5tkhp9uH8EXLqmhELEvo294A6ZKXj3eFVDw7Br3uEKDsMedeAXgwxA",
  "key35": "3Y1K2hssn1TXNxnkFQKznmmL5rTCX6aGJZGnkfh2d5xy5ke5x8thkiwNNGPswofQox82JRQhLA5VooG3jSoK8LXD",
  "key36": "45Bzse8xg5zX3NpM6VnxhgirmiB73Eh3pWdJnKnqkBc5vmXTom2ZrfBrkMzux68hwKt8oAsY2CcLDF8XjaxmZeg8",
  "key37": "5KG9mdg69ecnzkxWfhj31huVW8ZawMNkT6wQ9yHfewazLauJnZSzWBeDxFATVqUhUQWk1obbtGyKbP3ASRtYymxo"
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
