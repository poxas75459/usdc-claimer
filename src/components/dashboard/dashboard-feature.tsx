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
    "2AGPEs1nNRnCpRGXzcHMEZJhHi4AqNB9B13zuYZy3WvEw7rs3fQYqjNgMjEtuFUPwjZ8QD4HVdQjj3F5PGNrSw4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8ecU3yVjDHQh1MsV78aJ3YgfCXkYxr5F748q3hnjEpBepmUvoKahDHoNH8hBKN7GWt6CEffnokNAniSadUcW5q",
  "key1": "9ingRoZVojKP5qhdhvHmV7J2w42Q5GLDsytASF3YEtGdLP6ru8SS3TpoeD7KtFmKjqex71v7ZS7nWc98gyNPc4y",
  "key2": "2m6EGH7SV94atqFhBzFE4L7ftQphfvRNqUe1AqS8dboTtWmabWMByeLRXQk69Pf9fKUzHRm3KDSTZuUtJxqREiWn",
  "key3": "3juj8zgEYWZNEFqwqttFCHU3aVkkcb7oiq3ZWq6oT5UWXSeCrhpUBuyZUcB988tv9pHRbFdbo1qcEpVfsFxkDAh4",
  "key4": "3YM2229FzJhUnUSWcpMF1Qy2HwXWSJksDDtroqKKRxuej88Mwc5yjVBMM9yNtccTLECp8D74UmYoGyER8t6C4A6E",
  "key5": "5fzRL14X6ypFYN1w1SicySfq2m2VyrgX32JQnfbp8VpvrBU91Dw1P4J4djZDqHH8cdRGQfjN5HpXjAuSdxKRTVdw",
  "key6": "2VibMbN9zsgLJU8eww7CwkK36CuufXhiMiGj3EFPPPBXJs5qvQ6tBHSDNLvQnRgDhkiqJYCDN5fJvZ8JqkqJbke5",
  "key7": "5jPqwKoXyjmx7BqFg9v9Gjg64qTPr5uSYhxsCu1fAENtwQgwuiibvBwkg4gsTuu9AZKAtNkgh53vKyc2hDGk19cD",
  "key8": "5rBsVy8NhvTfpWLXMfRnEHYCA31wpegVmhfGd9N7MQsqfn2ZCbrEaLamY2uQDrdRHNbrnugbADwRDAR3MHU2pDqB",
  "key9": "54pLw2Dp1wMrhWqqAhNcoHffRZi2b75JZC7YRUNGYzaZuf6REJ4PixxidNxoYmEaavG6HhU1byK96h9mpaTJ2evZ",
  "key10": "5FLsX4JajLXbcgzGLeCpvTuQKeaLY27bGraUYVfYvuVYDfyJGuAiGA4Cyb3QSxt29cPudpaZ1QpXxnu65RAkHryV",
  "key11": "4qJXWG8WNHuTcUkka5LfiN929dnNgMkhCqnVFCAsrdGLkbHXGyVDS6pfHJFAaCtzVFnPUwdYxy7CAsiMUYMHheV9",
  "key12": "2rJ2c7hL1uKkCpweeisKwLRXruLs9ShmkWieZmBzW6K9oyVWCmH4Skk1z7QxEEgbTdwN6Q23QA8Zj8H8KukpffL4",
  "key13": "UrRaCeAB5FMALVPzBkoxHcDrrQxV7Tega3gSSX8k8bi8pC1yJ3joRgbNsJWNUVcZke4MT22w57WBKuNntc7nqCY",
  "key14": "4AsZ6Q8girryUwSSQPqwAq9GBRUUeNXrcNXXV3GNMEtkZUy3PbGG8xGTNRKbrTMcgKRn8osHe7UDUiDyT7EYh3Eo",
  "key15": "5YQ9JzruzufbtKyP8FnEXdKwfiYsjJzaSnXwuvKFauzamrXtVJU8FyJrq7rcB2qgiX8rJD1DGciD3w5TG6Ne7cje",
  "key16": "3qVmLaqJjLFNAJyrnmqifozLUj955WHtewF7CTvarb516AY61hcdZbVoSRLtsgxuMHSCeHXCXJDSQwVDcHyPHoJr",
  "key17": "4YNZ3dgS8msezg5ZAoR9uJWvm3Hi7McfXAigdpti5AkT26rkAjD231wDrdttAq3pWC3PUuVv4fmHRK8z6xFbwU4P",
  "key18": "W68YjdBb1XYjHSM5gayj3Khjsg82rGku1zj64y1HedpSaWvLcPEBDi554NkTskBr4nG5ePJtqJcWGoAoTGoFF6s",
  "key19": "rv8Rzg4pSxntN6fpEMaSpW7PN2C6ma6kFJpixsG6hiy8x614akgzsNgA6crqhe7QxCNEbWXhB5xzLUjoJENA2YM",
  "key20": "B4orTWXTg1gdx3fejWkcyNZAx1wVerawAzDKUXzxDiD35FaR7x1MVPiE1YwqCee1ahT71rcQChHdwSPP9vn5XpB",
  "key21": "4tccCRpJoN5KYE6k3T1LS1quDYQRWQWPW2D38otYcRLJNVRjPp6MUueRfPFxvqY18fvVdkuDsoSpyNLCzhxvAGQZ",
  "key22": "46Pa5eJjPkRqrjqxcpVr3FPS1r9Kf4wSPG9iim7P4QvFtSzL1Z8rFEsXaSSQw6RTD7kH2BtzXGYh1cydjZfmHVjp",
  "key23": "Y3h3zqNZTS7N56U4xcm8wEbsgVy82cq2y2mQybxxDF2km3PHf1Kkpm3yvwJkfhB2ccNxpQvdiNEkqE6ZbvZSwBx",
  "key24": "65c8MFFFSe1rwhh9JHcE1S9TN1J3d8LhCSCrDQqTCVaXVR3YgWJb3vV4btbYXdZo92anMkknRtD7VPyw5Ac39hPJ",
  "key25": "5ygDu9EntS4KC4zkMeqF3zySb1josNNJqk3ZzLfb8ffJGkfzcorVtJTDHjkYyr8TPtLffqH2KAndZH1FKugrBDL1",
  "key26": "59xGC1Re173e48zo7NoDivtbVqRp1fZNtNHdsNcmLBCBRsQDppXPCCADmRRqLDNypCQasgvcyWqazTBjSPPuzLMz",
  "key27": "kiX6k6sSfiPihDs6BprRiqmkskTgcF5fiSMWAUNWKPu9XD84L44YYV7WUNFDuQdd6hMx4p7NtG8d5Q9qUUx2Fon",
  "key28": "5BThs8zioDyXJyHE9nNDWgMY2HaEBZRQe3YqFHovrZCHDZ6BiJyWRK6w7np9z7PjcAFrF8Y6SU8s1FS698AEQxfm",
  "key29": "4uYkCihD4CStcxoSqH2yMsMVGbAYbar9B33iyujKDTrXUCVZt1TMBwm3DnxxLWGbi6pzAgysRnzQScLgBhhWr7FB",
  "key30": "4U9kEKgbBfnqYnbHAafVQs6x1YKkgappQa1ysfe38zLEbZBwdJus8s9k9uUWQKn2hkUDUUtKBy6RQA1dS33HKdwK",
  "key31": "2wwX6pSpGg6k527G9bT6HsvV5cTUiJqhD2i9FnigECYLR3xNxfQyYxtwT8iE9NE3MDnx6ySAbeh2gEqegjBsGhnj",
  "key32": "4WK7b1ZxgksfZJUxtReax7Y5eGfQGJpBvGAsTRr1jgDZBuo93Qwr9BiwCDjfjTj2mhF1HhPuKkGFQ3RWMyVcRhfQ",
  "key33": "4sfRW9EaDkcUSYTzind3c8DQcefwG4tLw3FzgG5QmD4gzB6jCcqvMcF1bZF9mW1mZpFRGXLqZ2oKbUY63YAxbs5f",
  "key34": "3ciZcBnv8aXEpVs5seozMjuGzL6THhfWKF3kQ5dW7Ff8gTSNtuLUNR8B3ARdWtbXJSi1CxskZUyYvBK8wWu7GmVF",
  "key35": "378nKEzxPTTdFfX9nxPBpy54CNyoqARoYbV1WZFaMFJPaauzXMAN4dnaQJ5gfAL4CmFKWaqDGeXYwEFPaSw7QqsC",
  "key36": "4opHN1yRyPbi9FKBXtR4LHPkLCioWYawGSJjyxcntt9pmhAAaLHXD6ympeWzVUfJEp7rXdH9Qdnx6a1Y21Rk1Hou",
  "key37": "5gsuKgckAHmQMEaQAeTSyzmhay7RGuqMMyPQ2J9L1spmC4FbH1HrL96wXgguKhm5ZU8b6MmmVFE1Jiqy5BnhWREN",
  "key38": "4dDVDZwsK9DZvCCzKRyieBeN9sUtyKKAHia8HDJqTnAaDTZE1qn8TzB5porcfuhgkiELCi7euoa9t6Uc3u9Xzr5D",
  "key39": "4pbjcchgnqAxSyShcAmEnbcvFELkD52MQXoDpntghCmt79BG48CBsJw6dUPQ9onRZ5cKWF1a5ds9pbAg4v9XzBDE",
  "key40": "3GYoJ5MDm1WdcR2rU5G1pBD66ff6nBQXojMepRjvvWstn9bDJ4CT3P2iMk35CSRYDdyV5rxC1PBxCDNji3Rj6Jws",
  "key41": "2NrfiuJVYsaPtXhGMph2qUUen5mMbBNSXc2fYPf31sagobMctrXibHCLAAzLXSnweSPNsLgX5gWPEazgcaRX6evp",
  "key42": "HrohUxY1PPQUu9MPRMLbpf1D79yPb6rzAzPsAHh11xXEpHi9fvGrZ8HtLmLpskqj7jXAZwVHXMpgPqFk87fSGHo",
  "key43": "4zsAcJWGCE38kk9JAt8YewGnoW9bowCbja4dMHZYsjKA7sNpKkJTKfKJCi31X15m5df3JstcYJTdcqorQ3JNJhkz",
  "key44": "3xwo88XBnKBsr4BhCirXfEgKrb2NmqRqz6etUPfGjiGaAtGqt2e2ZxAzPsP8dTrLAqewu7Sjcyg7JqxXBRrg25cz",
  "key45": "3pbEdBUwoM1RopRKJcnEe88vYva4rZS4RccqVTjaLn8jmr6KCu6EcVzkZBsDgk81Khy58Cs1ALnzLk6gMar3HFa8"
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
