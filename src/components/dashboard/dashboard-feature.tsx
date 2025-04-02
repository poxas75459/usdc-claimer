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
    "25fswsTC6cxCjEGtqoyr1YaRuAedGVAydYxbdm32VkuuguJ8S4s2qukAmBjAWfwDyYiGRjoTapJXm6m2JMcPa4si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5aoKQg8uG6UiXiSyueWoRCYbsGhYc7V5kdTAN5qgXHTMZoRZtSMsQwCbs2JCTNtnZzuMcGN6TdQNHjRynftTiP",
  "key1": "4nqYkub9M8SS74Q8HteHVXfXoXeCxrQ7iahhBA34TByRVMx4YAYJbn1sRbtk8omZpAGUf2b9yq4igSx41A66aWQw",
  "key2": "5SXWnU2YzYEC1BVYE3DURjXjZ5ePnSeQHMGYjUTnRzTZJv86KoUio84diCoXDTgcCLYXtUAQa4CxE8R7g2miziD1",
  "key3": "vDQ8tVffXa4RMQjEiRyhbhLqKjeyapSnxsb68PPpeSJUwGEVBJ6vaM9e723SHrHvJiTrb5sAGcQE6fFcZ2fM15b",
  "key4": "3xXkC5UPNBesnZuer1o6RSSzdJhTLpeehTxUdD74WXSd7XeuviCwzeqmwBr8qD2uGivWNcXkSRA6hPwLBho3vWkP",
  "key5": "tE1B5WVcxWgQHCUdEHxiJ1k2YrpC19XvR9YiA7N5MDscefrf4PBxxymbPdwXNKAab4WgzPnn895Jt3Ta8TwcYqF",
  "key6": "4aT8LCKkMB6iusGD2jWGT5Z9561CVzPhUe3VrCu6AqVGCmWNuwxk9wGepybrfJn6c4MkXWVVeDR4viLaGzK9uxT6",
  "key7": "3xnFcVaj5v35on2UR9PJXaCwRthjs6xHAe9M7bda2dBcS7d1jxJpUq1qb1hbUAQpLsXyLHmwgggk7fVe1bZinFzs",
  "key8": "5FyH5wniDcoKeEFpYyRTM1uE3h8oYgYJfgmkNiF4je9raJD8UKug89sUaAPHTr7pKpycQrEHHNXAfpKkN8Tu5m4Z",
  "key9": "4V5f34vjmiCvg11rmqoc5CcACJiz8MabrBLkd4athBbssSdMFzX6jWLPzVrZcutne4ky4YPNnhSHpWcKC7wP2Fyj",
  "key10": "26cUN75vRyz29kWhE6mNDNwp48oQTEYdLecaZUAzZ4BcoGJEmyaaJ3D4bwAvjrZYdVgwEqauCoJE7zYvi1pk3qY6",
  "key11": "Awf1oVJ2U99AcfLvg7MERfWJt2LkkJKXqsiJjrasCPfVAcD97fzusZvavfXX5MRSQWdgthokuACTHBQRCDDsDfy",
  "key12": "5XKYpjX1Ah49nSLaowLM8EU2KCcxA9MBGMuMaaGxPL9xd86QWEmSCxUdy7HdMjvQgAGY4sdC4bAMVRG8otgDmyFB",
  "key13": "2evHnX72ubSMrPT1vhhL5nHk8rh2R5xU45DbAayAuZCs5tBwXNdVUnqLR6PNWJ8ij6dKRxwALPHJpNXS3stwDxum",
  "key14": "4HbkqneNrEye19Fk4ZnnQU6bcqSucGDiihnLHk9LJQAGxKEbcrUKYyX3NQutao5npNCp5utitr6hKDsJ8P2g4cJ8",
  "key15": "59AyHYnmQNJqdVKkAuP7TW3kz346aGMA7FfCh3k5U4coBckS1cfc9bJRdvFRqJne82paUcPedbdATk8pKHDfji97",
  "key16": "5qzyDgDTb9GQ8vgT1HrVEMZGB9AXXey7TBux7AoXZKwzQho97a9zhgBxuMc8YYiP3LCF2TiQ1mRhagfFJY4MxUVV",
  "key17": "4SWeMx6d3zzfqX7gwxhPv3LX9iYEfYDYf6YGz9LHYxTGFiZCsMJv1kz9xYqHTcEMK6ScPUCNZWtArWVnDMxGjENB",
  "key18": "3TC7q7hMtK8uubx1jq1qh75tBMxiJPazGWjwPHRjKZqy63x8zdkfFikaCAWbtwbZfkPHXHtAomi6ts6W8KnKcqWz",
  "key19": "52hrQgSNtS89jq3ZoB2dTuPx1cbXUMg1ysxMP7map2UAv5jMtv5XB4bT7TKJj5F9iskej4ZXPkBqPgwjqtsC5vbt",
  "key20": "4c34qAXUkJiBAQhEG88qTygVr4pCkr3xEp7DNvhPysucUHcPZrVQUQ268hfd7ETwhCZGRrNskcMU6zqP9L3cU2yY",
  "key21": "nRsrVLEE3sF5zVFsGsWctdFuZTpvLPQQWwGiSAAjm4mEQmGGbxn55nYdm2o3eBaKCGqsFcRNZRBHJjNWrCtBmQ1",
  "key22": "5i4huv22sc4NJoTHVp473PRRs1YS7NNdQe9QYtGaA2pf1uaBrMVeowzToQdmXeMSot8wcF1pq5EdzxDUMTZ5kcjM",
  "key23": "5Ajsonxd2KMpHLqgSXfrcoZHWCnw5yWPikAe1RZ8YZADDA9DikCEA5oa3xF2mfXjAhoYfpSgcE8vuJW969yeBjyi",
  "key24": "NWz7XdJq18bvAs2drLZeqraryp2bKVJqd4UC31fGMAf1yazXfcdKs5ZSE7t8HSuH7QDqXRYMBv6sAR1A3Pj274E",
  "key25": "4VCy8MXcefTaYL6aniVcD3z9HVQKbjtd3JcRi4rxZcvrvuEyWoZX4SFMpfp5oG7jyv4Xc29hn68EjTT7LmQHLbHb",
  "key26": "2z6pESC4BtxB1UGe9BM85Vj8zHQsw9sFGnmAFGHkPkzHwx3we8hAsTWbtgFEYytZ3YWyEH3A8UYh1uVLN3ZD5K6k",
  "key27": "28w9V3bki4uBURf6ee7rnLr6xjLbbk1Vtr1FZLSBXfLn2R2hS4z9j4rPdwKs1LdjppXyWgESUWGjZWxyZNLPDY6E",
  "key28": "F2mdw8RatTjatFmqumVt3WYJJuQSYcfpDnwbdjAoB1PffQLDjPsECg5bwAmJKsFUXJ4mxFUiYzxHbUjmaBjZeJe",
  "key29": "4s2WK3LTmHLCK7mC95h6tXcXxrVR7ieRr4AbrBqPiYDc6ftaaMJigS4oM4gE4eJ1qLhFk9TP6JoA2WS7iMsabqKP",
  "key30": "3HfGdhA6xL391caeLBGjViHRpd1XkA6nFxaLpdYoyF6XzEzKpYjcUgGMwmtjykzd7x3wbYJ1hQj8144bo4EN3o1B",
  "key31": "4fnbgRzSi3oBvJvkVQuHyoHjfNdJ3vRNRq9ZDgKmqqdPiZuW6LBp3Q6PQz77SD9nKTM4B9BT5fEqehGZcwWgd1Kr",
  "key32": "571owoR5TXCbv1os975Qu3F7kvDotXEqEk71e7zxWxNBwpRzvXSft5ztoU3kpBd2Jts9XUrXsSqhDtFBahhGvNu1",
  "key33": "3PgZZzJWF8ik5bNezMuSi5mZWmihQSzoVLRKjwTt65DRgng2J9VeCnkHbQQhNjfESBwT6KGusC7PegQUu9hDJT69",
  "key34": "5Zt7zMHAi1SfLB72ChQRqQpNie8BFDf9qD6VsfM4n26jvDHrd4YkzFdFiNf6KGfU3qJVr6tcDFSbUhgGKPeHkmq5",
  "key35": "Q5ZjN7EfMTPKEm3WU2qEdyAEczX4ihnSz8c5pSwypwYfjeHN66VVUv1PSoniFbv8AREnAveGcwGCuKsSgVgVK2T",
  "key36": "CuhwGwnSRXwExiZuxyfQLVA5F5FS62QKgn56k1HrQZbi9UjTZv94kSTbkymFTyujHhakiiHxyoiaYQnfeKKztZ1",
  "key37": "4iooG3LrnmjDmqbyzV23oKxRuq94SCgyNVaCf1J1e4S2VCXp5LNx9RCkQZNqvuSmTCru3DMcrmhHRdsJQMFdRbMc",
  "key38": "5y3uoCvui7DWKPqSy5SaVQTLyr1nPyfv8KUWESvACSmXpY9g1L6nBPPSyBBGm81BzrW2nnn84TCTuUN83hAaU5az",
  "key39": "3NE2pZ9tQShFD2JynQxfLmoairjFggB81ZAC5rcCxLayZnqKxrXVbG9psN4Ubf83xGfQu5pA8L1CuNuLVK1RDuh",
  "key40": "2MpnaTaRgnaGMSPr2mD9WrmAc1SQWH5FEtuW3c9SZW5NnhfXBBXx2411ct1Ek6GqSdaKEeFoBUZiMSiPQ2G4kurF",
  "key41": "3YuSByN3tzqq5K41g91NuzWbp5BeuVnedM2NFcx81XcXQxHYMVPDsiatcWSCQCPKQA65zGD5hzHLwfWGa4PHUH8r",
  "key42": "2YwxYu9SgG3sehXSWwPbwwm5i6yEEm3Na2tRc57dSnqjL1oqd186tEgvP5nwAeiXFtd9Ddart5qou6TM9FPBVwka"
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
