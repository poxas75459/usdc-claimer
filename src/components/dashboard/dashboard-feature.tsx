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
    "56cvzou5FJkGNmRQJbddCu9v7bboqpSP5Vs3txoCxKoRzrz2xgr6Vb3vhkzAeWfMPWJWpWvidKZXxmgWP9DjahKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bRc7drkoSAMrbYXaC54kfh86bK7PfvbBiaTaX53UiSLmGadJWTYCrRRCFN4MJHQ1aGL4oRoWvWxHJqa7vqA3im7",
  "key1": "48g5cb3eeXKmPgGi8U5WCbnaqyNdynWgdQaDU3UePBGSmgyhtHwryHN73qDe9Z1cxL4MVdZgsj2FfwYsg2aMUHhN",
  "key2": "5PaVwm1BEz65WafFMRcg5ULnst44FUabdV4VSSEdcXyU8yDAvx6BaeLVu8hxBsEGauc8K9kQ3mJugBHK9Xt1Lvek",
  "key3": "3D3v5doe8E2rHahLTJSqZTED1P9296T38BZbRHV2MRd56EbxvgYmpaeZe1R899mStcEffFbcsArBsmGEVChUffmq",
  "key4": "3Y7ZaPjXrJNqh5oBG8wycxGs6KbP1HFDX5FXuWUSMtzVSKM4DPSUK5q3f8MrV6ecuTL6Mig36sj47ztnd3wDBwzu",
  "key5": "5XL7o4EbzE3hy3yHDso4N5FkexhBkLy936Eoc9gxMPdyoBrPBT2LjKzTYoJDte97jz1ULZw1VCuifvi52TXUJUpp",
  "key6": "1ZovBUgP77DtgnEB2MG3EQeMXvD4RJwauw5Y1z9RDSQHDbCH9kocqd3rtJZfu5ogsJF6xQbvX8J29Wn69CzANZk",
  "key7": "4zhwyCNmz4F1o4fzEv2tLYiovmt46EyJt9Bw5AkbtsfKgoeY86fEHyDZp7uhnrKPf96xYnSaZCbeMfL1LhJL9qYD",
  "key8": "3zrciPeNjSsriWt4D3rcEWVsNpEL9pJj3TSqKae3oPTo4p1SsFc6QXSp3kLZq3MJMxXKApF3teGBjvqKWtHZ2uk5",
  "key9": "4LW5ZoZfEm2H5QBqoufgDY98pmFYWtZWXJsL7N6FEQfRkRaeWHMmWAqsEs1VErVvzFXbG9fNEDx9RQayXkMYvjPw",
  "key10": "35sRV7MQgmWkfSS1FGdW3x3dFQhf7xi4Zu8MwA6RfXNDfZMhcrSjRgDWfY8nbcDWapYmxLPVAV3p2UtRW8Jng4V8",
  "key11": "2CNFnfzkqjo7qRwVMThLGV8ya7hiBNVayCWCeVEkmx3jZq2XHCDLQLr3gG98eLkcCpLPHuWeBY37Bnkn1n2EoqEf",
  "key12": "5tvisG3oXBixgUeCN8nM37wBq9qBnWndeG8NaCpvLKikn38jrh6McjpyWHgNGGhKjgQgf27fdyeCtKLdeQdB2CGk",
  "key13": "66ajoj9tZadePbYboyJuJdcfTZyNET6jjGidd992qLy54EWM6SFzGvq9SpZqV7S5iE2n6pPGCjMBzi5RNc97mSQc",
  "key14": "3pxuhJNWz84x3Hrmj8v6NsA6EhY5FY6DLsQdwvFyG1VzdtivPAZ26W95gvHv1txkpYrzVjmRoMjKzy345CiSKri9",
  "key15": "3giQiRM6hiMp81SG8WXB9RsC9Rz8oBae49qZLhqX639dnrBD29gku6N1zDBjCk9wUtJm7v6nNAevxpNsbvjvxi2z",
  "key16": "2EnjpXopJ9V9By54mbKdLqj82nwaeWyLsDjFNxZh2M1hAcWQtrvCJx3PkHnyMrhkcGDSNBhaHa8HSSgynXU5PgRC",
  "key17": "2QTPXB2gDxoKyisuoWEuVuAaAQMDxcp7vTQ6JCAbz9drspUoFZg6UtfTVcnddpq2xiR3FrdCinURY9eejknJGc7P",
  "key18": "4j1gkcMGcZNeUuPnNsAUAm7oR1v9ssjNWm3ze5wSwR2T7kh7jRtP4fobCqhTcT539F2ThX8BiF6hDvdEWJvADVjt",
  "key19": "5R8GhSwizR7mjV1Gi2BzzvHNodFZAxLaj78yzrbcRaSHmsCBzTm7SJ1tVbZHZFw3WTSLAvVLwQubVoXk5ewbBwhe",
  "key20": "5HGJkR1h3TYXVM2er4TtybtWKZaw3p7SJnAVT8gyLPKyGYS7z9zgeaFQ8hZk2av7fMqmLtgPaF1BrLwNc2AN4fCy",
  "key21": "2uV3off6SWWEcXhfbDnvV1r8VTqKzrQfboh2VpfJN3Fv6AMYwP2z1pMRxBJfx3pfCdG4BbUEqUk6WjECgcEYbWLA",
  "key22": "42QpbmXgaK5Ds8Mm18ekyLJTFC26GWeN8wmR8eAvbUs61gTd3BCm1B1SrGvVuxAimeN43MvTDoqc5fkXa6bLiw3h",
  "key23": "3HBwWfyE3r3haiCPHHGa93uYVYEHCNNkqrkUGwtnKKH3jiShuYwMq5kiPt1go5TSJDyrbd1ThsPN7JJauT5GNYEs",
  "key24": "2SX9X9AJSVCPpK5TQoDUzFm7VAZnnz6iEBxn1harZo72bRENwtJwJ6jzxqSgqmQGGfHQfU1NRi7zkYEgiVdgkgt6",
  "key25": "Chg5hSgLhaq9KbTVz4ZMcEEkYHQVGEgnBtL7BeaZmLa14xSgCLd4eoXSwHA2yJwfQJQmu7VkfXbrYQn6U3b1yKu",
  "key26": "3cfE6zC9UiSKtGayKrpu3X4MxP6ApRUH1pztEZftbMiFbDEYX8LsficewUCh1tAKfgWa1sNfzaizBFksZ5i1a5es",
  "key27": "62eXEXZQzPYtqW75tCbWKRsoW735mRHudh8CCepKZ6LAFByLFbaTZhSZ2t6bDs1DpD1dfw4RSK8FwKiLo3MmaGWb",
  "key28": "5PbsbfpFgEktxyz1mJQMy91TMYy1L8x7RJfHSXnNW3nSuRALVnzztQuRajFB4wbDDsFavXiGZiVE57nuAtdhzgx3",
  "key29": "2YEBjjYtCXtz6fAzZQre2yethrMvFD3V97pZANMZvhEv3LopN3ozddu4CpchKxWsEocEs3riczfRK3RFpshvxwfN"
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
