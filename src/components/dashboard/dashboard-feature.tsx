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
    "3vtew2LQK3Mi8QSNmM5BMU4WigZ3MAzGrj75s99MYYcxtSKk1tBrsPgyJqYQQWc3r947JXKAiJmAZs8n94quVGxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBk9jTQYqfLSzDuXXpb1yR25irAWnd9T18KNmtybkZfrkYzx2zBqsVZYECY7X5vG5ihDeunAadSEuhHoQRXK5Dg",
  "key1": "51TWbG3nR8TpwvQ7zPUukjnnZKZ63kuXqvWAvYZvipEAMLZYKgPkfTU4bhFi1NcvPDWoy3XtsNhoSQ4oHtDAqdB9",
  "key2": "34Da1QP7rGaZbMpn5jVUZT9Dbt1QAxhwS1mAzYYw2BGSf5oXETkgHwQNAhGqcjmxckxELUMj4pMS6ndxvVJ39NbW",
  "key3": "2qXtDZY8jpn2fHXrZyH6HS4o2HK1bRUQNJbnmsYCaz1Y16Cb8brEroTuiEtXxsHmhJqDVkprSm8VEnjXfnmNrhSv",
  "key4": "58gPWHHUi8gC4CjJm37UBjD4xTFqE284nant7ys8ZjZMY9UjZK9eDqAHXL6epzTyZoxMTmZBTJz1pq3bFV1ShDGa",
  "key5": "3p3CSAjEv1goLW62fnGDkziCxBb8bHv34zU8nMHvqwAgoDsjBXwz3MMWHQUhMrwaGiCNuBpkJj9zZKFYF1fSVfgD",
  "key6": "2S47WKQtT6ibrSvyBEUxqycL6xvZBWCbVmejnzBswnWiFrGbQhbqaPGGmx2u29Wed1LTByVCHEahJ2nG2UDmzZMq",
  "key7": "2jzWLn2wfgsbNuFbJ25SL4NNLeLYZZg7YnLLiP8uAQW2ahgfsyDXWMenSbxs15VwnzKWFhiGyRdi8VNqJkKsKGCE",
  "key8": "2uH2dWsPhmT3jWwies5FVU5j9W6vhtMh4gfDEhkWyJxbBzGvkqPWhSo4b6vGqCzS3VenULQqUc7T3QeyoM3asXU",
  "key9": "5pTku9rn9D7rvZteGfdXDFak3izG213vHJk2LkMdP6M8dnyVyTn2wpAwJiHdopdX9VihvU74GsZ1wrFG3EWcm3me",
  "key10": "q4ykXn8iYpejKFSB6DbcNG3r6QrSjxfELpnXLZW6FEiPXfS61VF2DTHe61Z1KybmPLNLKDrhpcG9WgRj5SL9ib7",
  "key11": "2zsvJ4My9GRuE8zVojZhvxZPm9MF9gAFYPd1f9jhWpDpXncwNxLVHQohz1eWxoXiFBaAuFEkRPad5e1VPp8eXdCN",
  "key12": "2fZg6xvZzrAfQpvNTM3h7F2csffmNv7hFgBsGcLHy6Un2dGvqGp3QmJbsqruK79LFigeMBBdCMUM39Z7kn5sm1zR",
  "key13": "4ZsZ6DfYR319oDDLcKuXfgUJ7arW8dwBhkWxRicuygbbxNePXLrcK6BBsWbPVH8vcXL3BtehmYYZndzTpvZQFa7S",
  "key14": "3rG4dkz3MercWgCoT6wGDh8byqXTvR3KVYxSgsutcrGauLuVdNj6hKZ2MxoKyNtN6j2hAq7S8Ztvdna1tGokuKmS",
  "key15": "i1r3SdCJvTY2X1mqcXHE3YiU4NxGhTRrV2Th89P49sLcC6W2hvSGcSxHPmZqrF2vt98swAo76zyj2qhDUxa9Tgm",
  "key16": "2AdRSYtcYwJgZQzdFKNSpNiVLWkNa5e2kWkVwrmxvbFvnsot2ex92EwDZSkqqgUdTRs7Z5K7mCkgziEsEzZ2P5Mx",
  "key17": "67SdnvsA6tmdzz6qgdiLiDdeHEshEhawdF5EHjCFWHt6yZYHMg7ptDzQC2xAKzhdyNipDK8aSJ3zVP5q5SmLuc5x",
  "key18": "5zrmL1Y1nnTgSsxpRmZn5Q6chxArRb7AvaUMNrCsR3x4TDb4RYcHczkaoGFAuWekCNgcaMWkUzHM9PmkGbErYf6L",
  "key19": "GA4QmfVGAkBDicG6HBUrGMwZZdfn13zDU44MAS2MpEfF2x6qAtq5thsPowgwSbp6aNrtmGepoawyqoJPmf812TM",
  "key20": "41rsEkqsxazrSCXS1pfqGgSWwX5rjiS1WrVvg6JEUEGXnWNnQR6YeeXU6kYE3UVqWNs5c8UPyq45NSjASkhV1Y4f",
  "key21": "uBrCH7h2Lp8fihuTQy3n592uPwExq1QCEvgu58LE4ZGs2HVnSRuHauyXYSiaSydtnTrEa11NpGUkw5yxwfZD2xf",
  "key22": "vmfS93SfAZU2KNwY86HASYttuuxAj4b9kYMDU4JkzuaYZch8rGUAxRQNrxu2991mUYQEuLqnV8gWxU7p4qGU9sW",
  "key23": "31uzj8PMdy3T6CnYZ1iKCWRJAYVvYK3Sr5x2wYYCrWzgrKKKjfLEvB3xvurigFXGY6NWQzExnaCYwm22oaLf1cEG",
  "key24": "5eLnDv9o1K1H2ncBkSDWCZH2CqzEsofZ1wQpPMtVnnMmfqQ6YZjK5osnk5HJyAaJ7sKaTDTgvRy6tFYfYTfrZFxv",
  "key25": "2KbwqPdFhQ7E2eCtWtiJKN8Ltg9WgGZ1v7zTm59uWkhQFTcWT3ZXSuhZ3wM8ms44UaVbaJV9Y8bhBt2GdKVP97Pp",
  "key26": "XrdKaZHrWNE21LYDtMURH7vu25A58PzL7Jv9MKoTcZct7A51ztq9PvLcC19GTkf9q8q4wmq6LgRvr5xDb7JWhc4",
  "key27": "56rZ2j4kGT854bHGikZ7wPBcaZaiw5VEFC3ygtNDPqRzREGa21gb9g1mnETEtbDbvbG4MA8khTf3oG4YBT7q1Feb",
  "key28": "AG2dnddXYMBahFVMbtuL5asvUti7LBJqWyV3BkSa6QvkHYrmydWVjvA8Y847YuCKerwHdVFT3kxVzTrhxvUBPoq",
  "key29": "PpazEP1HaLfj3JyoBpKApqtwyHQUpbXUhS9QbHrJM1qNgexDG8YWjA75P45bnvhqrVEHri81HbDLh1TSLPEZyEQ",
  "key30": "GuJU7dxyHUmpimLhJxNf3GAUnXqCgtR1Xb34E7iEVBGNymJPyNjRMBBygktWKerpkpjP57fMNL9XL9TfMvEAy41",
  "key31": "33LthRTamSET4Mikyuj4vUYr9rKa9R7WsFaZqhpibywrF2AYNJHYi2F6fdfAS2sbD9PRCnTUcdbBM18yXfJjKnxV",
  "key32": "4nzhn61P28yk4eoP3oUNR77zx8qjCn3apBdyb7NjE3wpNC3zKStszzEC4oA8H4yDjJaTFwRXp3KoNCfu3NwjRwFr",
  "key33": "4i3iAwrzatCEt6N1zDYdNabN3i6oL72LLZd9SDJWSeKD28qZAwGAVR5yWw6yQo1YvZnVxmyhuv2zWjc8NCRkFBo7",
  "key34": "5sf4Kp5CekKUz5qJRsyhcbCaahuNfRXsvnmkY7yKYg7KUkNxaCERy2JrzqA36T5diniMqY36mdjsf8h989w6R2vy",
  "key35": "4WhMyEjVwDvWG13CY8fRUx4cWqrTSVrBe89gjGps9E32ATXGMfCPd9i3pY5M1Ei5Gp8MXZZEJCCCD6hctRNMP7sX",
  "key36": "3SvRaCT9JdXWZAMeZda98BJfbsVWWvxPa1K1ds8vosHRELq4cAbaDZZh6XszpPWqcrDFMDrPP94saKXQJFFvmdw9"
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
