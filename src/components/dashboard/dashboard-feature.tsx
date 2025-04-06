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
    "2Ni6Ytt9x4e6qBB1ZUMpFx8ivfPKkKL9eo9bP1zu2ay6qb8okfsCkwjkiZGfWRR5jNsZ5eLuKxWksg81zgsnEdJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CsCFxJE4pAtBjMWmtXGFYYxxnP3eu23jW2u29quaVZVTZpMLvkzjM8ce7rEcPaJno2jLk1AHjdkJTcuTtQjcgeu",
  "key1": "487F8vYXaxc6jBD5K2HsvMLmAZgiQNptLtJsPYsNuw6qAYvQ295u9c9iE4m6zrkfXxMrodUvGdwEBRoA6YLjMkdz",
  "key2": "2CypxvHwHXz9fi83sDq4YZB8fBJNYMaAvBycLrFb44zLMBfMApKhmeMoUGc8AchGWhRFgZw1gHTfLw2FAmGMcFp2",
  "key3": "Drj9yZXWEHWeuCupaFiymjM8wq5URPow9DyfhAfemV6CLyohffqb1VupdUfMwxRkF8crBNcxigtUX1ahsqEqP2u",
  "key4": "3cd2HkaUCwTdxsyt4ezFiEgaGrX8YHdnEcuiucLz76NLXmzsamhZPeDVdJKjeLWsbpnY3z2e1vQhYVAHxm9nVJv9",
  "key5": "2HM24quwtWjuwQRVgq3FaqNSwwYk3xDZbYMqUEP4xyEU2a61MtS4s8sBUQFYueeUkoh5BJQ7r3si9ZFh9nDWxkHZ",
  "key6": "3PN6Rm8AUvp3rGV99pUm4bRhA92b7DHk2p2CVsNrgnBjVJhLkgQcdnaPGPXDviKzyuxqavNj1xtwBLznWiEM9HAG",
  "key7": "2cCTtErHqkSWEqjrw7J8oEVY6YHPhveBf8jH696tFyL7uBXn2iXzu8UfkVkf5tqmXFNutFTEDQDjhCqAKnetPzjf",
  "key8": "2bYEcMJymhybe7a1YuSivPGzFeT9PkcZWA9s9bgCefa5Vy6nvnxrVo5nGerp8A2uq73C6BFE1RYivtsAwkhDmqdg",
  "key9": "5wBB5efxgMXfPQmKNpRtGzVBaz1xcHxj1DrtmQBu9P2Kcfw1sPfDJeXPG3nnvND6w6ThaUtb7PE9m4yiKLmLJEqQ",
  "key10": "4efVMasfDujoMyJnYjJPFqutUaAAv5ZHxM9qf1L8oe4KZ87xJhFxxHUjmyDq1HkPC5tKUVC17XyZTJ525N6oiMgR",
  "key11": "2udnTUJPwpCJMsxLqYE3XRraYa9vSLZtJkKUnPT4fzaipv5QgbhEYCqSQNcUYbCywPjYR5YkTkXwAhvksZeSc1mh",
  "key12": "63M2dKzTa1Rru3fQ5deqPpRy5SH15pFJn3KWy3bqodZdP1UXZq6tjkFtase3jAVfH6Q8EBjDuGCyK5A6rhchK5t4",
  "key13": "5FkNdvJ6VrnXuuVmX97qSqN99EEQ6R95BcpFSeMZfnGguBBXSVZaJqe3MgSQxoKwY43uEyda2PXSUBeHVGNQeymn",
  "key14": "2GQFCqAKB7UhubWTGvvwgws5pkiTjYVfEHUwdUyna2cwp77JQUN3Kc3p8ZoHfV9v1Njte1HBaRBpMu1UjCFXiUEz",
  "key15": "4XrrbjV16bbaZdLfp7fPVn2JKbeFDCncAsLrhko67XuT7naTryPsLDXGqoUjgcmYJuLTLeSMh5sbhtTSiZhSADe2",
  "key16": "BMpeAXuiBnz2L6XRXUFW3ef4PDtAgYMHJEd4zQk9ueLAKSAp8z1q3XLWogX2uKbGGYs12ihyLhmEhSNaKU4WYZN",
  "key17": "31nbwK2xaWMcfdn9UusXw93sTwyDR45d2L3FKG2HKJE1AGuBn28Mnnxun2Smi8SMa59RtFmgogzZvgDGCkrPaaVm",
  "key18": "2uY8edD3JokKhiTCV3Ey3eBckQFY4KtCG1yFvFXadq8gTZkqpVEVMoF31d8g51CYvPZziX4qLbokBepGnfXm5dcb",
  "key19": "bthbcKNmjbqFrVAwGrdHJopsgA67Y6v4yKQjPsn8BgRGKWDM9cLMky18KEv88LhwfnkdE2HVDYkNFteP5EV4V9p",
  "key20": "2Gj7zhdCtMLE4B4DfiGdJ77mEBgpr6juCFSBU9dyUaHJXZEuVSzyhupdgdff8PWw5PNdkzF3cnXWujrubyUecQJF",
  "key21": "4J3Zd1Sv3m6JTfXsvrd8TynxJuF7i9NNWPQ7V5tsSMaPFLiQjHYT3cjDJZxAJUKTQBfT7Y7aFENyrEQ69XRrACUf",
  "key22": "31NHtaVChd7wCmHfmBpobVEQwrffFhkkyLu2GeJC6j1vA3q6rKnBFsdjGWps9k1H1YfAedk3GDUpNf238w8W23KZ",
  "key23": "2CzMKFEVRVdSoWfeWFexp7S4HjaqNnAKTC5YziP1DYNELMtwmLvYFaSii4PnfjEYmevMprhPhE6JH6BqDWygcavJ",
  "key24": "4xdXxBptLSkzLa1dc4zEkJ5qrsQ6ESWMW59dkNgrY1Gxvs39CFvPxq1CHkAxgaJCeg3CTbVjrTXEeHZxD6aZDJJn",
  "key25": "32bhuzSMJULPHdp2LgJxFfBWpcPA2ZwXmVQyJ48y5YbYYksNkodyEcrzS6Z6ambrsAoMZ28EUaMvgAiqdHyT2akc",
  "key26": "7pEDkksqTmQoxzNqjUANDcyBLqtrKYMqrA1YWXLY9zbAWxTL5irxp55uJ8k2LuJQA1G53phbVpZyzHewqxDDwaR",
  "key27": "2rjXf1QbfFwq12utTGZrbfjehpsiW9NU47Z1j5XCjddMSiqy27zpmN6ysFMW9YSrRVT5SQBaSXv7dBFA1HtWRQjA",
  "key28": "4VKyaahwSb9BGZmCJZ7JnLqfGiUmXfnnx444RxpnvQEg1mbgd8ev5Avyhh7ca2SpKyVRbQ56kGWv9hYLa168tNtn",
  "key29": "3BHV7GvRs6Sfz5JJP1LYwrbRUqT8kXaVcNMJyz6uqZSK3EGzuC4AyeLSaLxpaMtS8zuNbYA6WCVegjeV5EVerdrs",
  "key30": "2o32qnTpzDxRNzZUdTQgLCA3aep7JMfwNs5Zz3zS6sJB4w1BiLpCadwfYEMmJRH9nt8Kg6KuwmJUcdgZXr4MmFYM",
  "key31": "459CdyvaPX6YxvkHUxesixb8gjeTp4RGePJVNKVQmgArS39se9yat7zEiF8o43MgiZfQ5yzSQbj3YTyQVUamVyAF",
  "key32": "nkSQ6JbzTPvyCGXZSZaHh7Cu4ZcJBKLVfggkyeU2WpcMe7RTTuoRTC8Li65JQths8fDQbbCM2d9deQa64sPjke1",
  "key33": "47KWULaR2zXuZdJr2G5VWtHChFMQKw7npeNRtnVeUVLavzz92KUtVN2FWV6rXWgB8HNPzFTBVnNg8oBNgVd3HpPY",
  "key34": "4GszhsMg2Re6jZ73t1iU1SE6MMxkxrVuhqmNJhjgqUc8t1JAQnFhAoLkuR1nZvKEnWJa9WmPE9Z6CGK2d62xW8EL",
  "key35": "5JZj4YzDtRVx9npeX2M4WqRuxkNgzg1U3tnhfSV74evezVMLpSezsnZBewoTABYkz8wtDrPVtzr22g8AvQd3Jqcj"
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
