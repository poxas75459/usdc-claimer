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
    "66YvbbetTcvcBCbR6VAzWYrrBUVnaXDtdsLVUsNdgdwcpG8HewPiHtqvdAcgCJy5zYKqWzWEXP8ifF2eG7q54uAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w4EuMULjaQdRcP911QgBQXniQAELVADbZQWfPzKDKnyNGpbQ21TSaYtzqCfbhidmV8Ef5tLdG7utczNAVdwcxt",
  "key1": "5fbtRsx9Qp2LqcEJ3yLRuxEpuu35METiyxaypKy7jw6shZKCiFigEhD2iFqxxHQPKPyHDP9ZyDPJyJq9Ue54dXZ8",
  "key2": "3wbTcQJqhxmwXQ1XtCR74BLzXQUgq4axX2myvfPbEBShnv5V48G4yYZXqZiE8i5NDrKCFSDaPXBh1hsvqzzJGhHk",
  "key3": "5DH2Np4PNJSj3dpDZRU2wvFKHNrJmdrGiLqE2vuVEScbL68YvKxKgSksLRXLqif9GUFH15BrDfKu8YwYK4YPE7Dn",
  "key4": "Hx9pPxVFtn4HTm9rqA7SfhPErzUjxsNG61dvbTkPA61hMXNMx9mZxr3nbYEZMPoK2Far1V9NRwyrhcNPw6u7s2Q",
  "key5": "3z853BMEs5HzCXAeQ4j8nPAKzqmboLqKX77fkKK4XogW7xHorAyHiaP93p9ix32mEPxdfTQrUtZWVfnpkvSHjbak",
  "key6": "5Dd4USuCvFiQTTbnsS6eNmHE6LPxrrhxYna7A5LaQhWvfDuEye3RhYiyPFC8MExqnbJu1Ery6uoeSVUnAs13g3Ki",
  "key7": "4Qqpy8Xgzx2LSLD9rTbZcRU5M2GVyR11W6j2NWvCySyv5ZUxw5YjUT5Eyhyyydkz48q3oKXGkqA6q3W6ypGj5cfm",
  "key8": "4ps9QEodT6WBdPpLAPRc4E7t4RpBhDiRFiA9s25eP7PCB2wo9si2TQWCtt1D3Xs1AqhLHqnDUMPk5ox65nd3vubM",
  "key9": "2EBnwMNYaba4nQXZe2NhvcMdwcWTwg2jNoCBVHbrmDTsyMySs8auoRccYGn9T2CW6TG7qeqnmRepe6rwyTi3zai1",
  "key10": "65Eriu88qZvsWctjLYwq1WSReV3jykSfgYocMajDrRU4Q7cj3S6pKyuhvqWU33Cc9EzJ2GUxnXR5W1ZPZNPGXbGV",
  "key11": "29kXLvP8ELMaYXBrimpKuRDaMzbuKW2JRTmpM9xr1kshDmf69TLShgQpp3YveVne2prJM2t6EG3SRUWtkPVySB7w",
  "key12": "25hxNFKqxJqKGX5KiJc7kXujEcvZBJ6ZGtxAvrn7GSGdoZcd7CqV35ckpexCD3qZ1hBEipZmXp5gBctkAh7HG4Bi",
  "key13": "5PpyS2TNkYnXYQ2oaDJMB73rdQxshXDRqbUuW6vFK3b9fdvFQAj2k8qoUBYYnMLLb2FTuJAxLbdWsoG5SpnH8hbu",
  "key14": "5WodB4nwc6QJQuEpGBM3r75KgFyJa3tWca9EeLbhsGs8wSysz2JoEcjbw6bqG68j8fbq8kaPGaRTctvyWU4RiQPE",
  "key15": "2bXfbBzinGrcvSzDrcVjmXjvWKra97t4EsqL19NrwjV2gD4uT4KGa9EgAk3P77mtuj4XtBsk2UDH41qoX5jzoxV",
  "key16": "5Wov9B7PXCmHYxWYyRGQCB6FNN3EkVW9puNdwkzFYmCWGG7UV9PuoiHUiR6UnBuHFCX2j2qeKfmeZXpZ4BZD7eth",
  "key17": "5e9u4Ucw6zbGcQv6DdUC7MpSSaWy7acgjSA1s8SMtGxDrng18j9Ha8u2kQ9ThF7wE2ucdLtNji7LnKWB1yr28XQh",
  "key18": "4JMdS7z8HhtsBNwasY9461YcVXEjVv47xb7hhRuF9QgNpt3MfS4CEXGt7SYZoj3Sj3hEsHhi458QMsbPuPfU3teb",
  "key19": "3PA398QAovSyv5n5TiEsA6MaM2WM1uKNPsRj4QXSnzfSNXoiiRsCdh4JHWLrxpTCBWTUzXtVq4ezdCq5CPF2tn9T",
  "key20": "221igS4ZChtHiFw5JFkiwCStzZxgEZ7hEx8HMKXWDeSHonYHNf6RbQzVodTUyQuEx4SEtpCpyL42YWAzedb1KXpr",
  "key21": "4jZFr45QoShhy3dEDhjbXtcJCvWaD6kV94KwoUKA1TEJhaEW3srbtKzXbcey5kPuVfEMTogeJ293GGSfrZvJwrod",
  "key22": "4yLg8nvUkJAjsoD5mthoPhbd5NTCvarwbB81uqb1Tpm3pSkUupZafKuqJupW3G3tNkaVS7kH9ebuk4AgJ6mDpyEM",
  "key23": "5GUyHpnB2aoKLqQjKnenbyJPHNFGPremXjaJ2AXx2gs8uo1DxjFa5ojobGYfJt5fHWuV2SCmijw5EzM4wHqydFbG",
  "key24": "3Nswz3niVzGjqjFBBuL2GvDeL76G1PcoDDycyxHaX4a38sJjn2cTZFotTtBWcVmCbdsfgRJfwAbAzCy5cnfszU8M",
  "key25": "35494rAD9kFB7KHKatYt5sETszyEGx2kHYpiBDiueDumZ1jCqyAyGvNYCEKGjFQjtpAJUFSX5k6QZb4tNZ34Lqdw",
  "key26": "5pZDLRwU1pZRKD9GBAVf2yXAeLke6Bf9cweQXSwg177DxP87zLW8Y6wv3F61tzat7RMe8gHJax574T6pnBv8DWRe",
  "key27": "5aNviV7A3vUuPLNw1tDvz6RhURfohTJ7XcfzojS9AimqMgGxDAAKUzUuyCVvWrjfk3h1ENUqeSC2hXZCjABGFmHd",
  "key28": "4rY4wWfJr8uNY7RMmsREZKhk4uBF6xBDNbmeWtghBibMhXs8heqUxLfhrNxKzUXci4EVs73nKQVmW9HDSfaLQ2W4",
  "key29": "4aa91cgcWPjr1pbR5Qs6i75KuotvxZJLfxj6TCsjW4HH62z9CdXYrE5woQmsWTQTZ8y2bizhkM4i3XJg6oWn9qFh",
  "key30": "b6VncCEazD3xrKdZD2xH8W1b5hkma56FnwSsJiJAhEcQS3R5eHzuzLdkoqCWPfseyfkxN5KdzX7pnBCX8idYGUK",
  "key31": "uoMKAjuvbVenUy7eit4HqvX26i3CHLiq2L6wr7zbFEVtqF12kTuuKzS5wqrTxtrDx3Pk5dHwZKSmEBisr83CkFd",
  "key32": "5ihHUHaFEHwqnG7E13t8BHdWRFPTFSkUUrtUEj2FjLQDoyQmyxymts1Z63Us5XBe8C46TobdG229iRXAZt7BUdsN",
  "key33": "2sCrbwP9rBJtxPx9L74FW29TX5ZKq5rbtAvDQAgH3dUagdpTANN8yDLm9JC8T3qjibK6KQ9N8q7bBSR1wDutZjDR",
  "key34": "3qjXxb7F2uk42eEyk6q1Wzxt5ZPafoUaphwvKWeGncwCiC8UNpz7nA1yeh1pxm6ib46VefteQCxHrERDptWrjNrJ",
  "key35": "5AF5j2xy9D8qRoQHDEfNMA9tcKtpzkL3hcRNGcRQKtzTmD48b9BrxTmDCji2dMcii1USrS4uLvL1Y6U2CHyFSZ3E",
  "key36": "4shp26s9Za3Xndk3AcPX2XjuQqasa3QeUyyvE7jjvHQ4QKoktL1tDjn3HsuEDeASi5bHU56f7qoysitx1a4TjZhn",
  "key37": "2Bd61QK3uRRQwn8ztNfFazzegPoqqRSGQPUtDazu2Z9sKYmdG9m3Fd5kzk9kWfXZn1ms59ov9CeecurmzFAXjHcA",
  "key38": "3S5AqfBZKgEycRh9E7JWVgjEQ3PtWHbsN6ovcTUTzYLe3esdRcnS4s4Zai5UszgHJpfNhbjjkREiUK9DyZZztcBY",
  "key39": "3nFsSTx6KN8VoY4BhYrFcxDC5CyFbPRcNQdGrrrsKQyKv5CChReGw9nv8AVoBCGgsnYmfmjb9zpFccpAUxhYEuMW",
  "key40": "3De9kpiYQLqAZTerapaWDW1sAqMJXakP5zDQfNF2tnKHvxkgi7bRT9Fg31jH2FZRnwmiUTmrbJRQ7hYbvDTcomXZ",
  "key41": "Z2wqtnz7DeWqysdyAuN5dAfgiB9kCmFmg9QpyKuQbEsxSa7jX1mzztdcRcHUvLa5XJSuc7r8MEFzvNzJdPA6Sbe",
  "key42": "j3jyvgfa4GSD87NGLjBQWQn4RizobQn4bYP782chNfY23JunbaeGeaarHMjgaKNVxJhmu99Y9m5p1Ma7ETCwv44",
  "key43": "626rPk7Lu9RtWcTsQGNwnSJkz5vCbTUWaPdm93xQskYqsXFwWYP8i3ChGuCcVDC7155grCTnJqgq6uQ6DwViWDht",
  "key44": "2FuTeUKYm42NTriZn7FLBX985VMpzeueKe9M9H6LkJ92BE5q2G7z5bgPBeLgj2pj4GUNxSvthNGefNNaw9JfM9KG"
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
