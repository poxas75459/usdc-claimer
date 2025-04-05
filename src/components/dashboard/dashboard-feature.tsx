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
    "3ZYt6dGxxbsaCxQ2hBnXtKMS9dgjuVUSrVJ5NoejUhRc8sdTj7d55EgctKgznhRTDzCd2e4Ub99aZkvq3uUrcAJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CeFdX37VxANFEKvB4x8s3XY45jzyrEQHostLT6osCYgb9gANfdb28YfQGXDuqgkq3yqhEpPwSiSR87nk7Ghh6Kk",
  "key1": "5YnkhLMEDJbbK1FCCkxTBRSSqaH6RjsQbpdK6m4o4DjXYQ1MFvRTyKLdgGTWzzNCfPRG6MnBJeUJ93Ut5UVEjZer",
  "key2": "3Pr4hbwA1sMJAkCqgb6pAH9adbgde2GuAYFEMEPXJVyTuCK2iAFrfgdiLsd8e6Q3TWVvzBHJtSGVzen7jGYVzC82",
  "key3": "5GPMskEL5HofNhKCsJczjxGwk1TURznMKokZt1qJhbfzEfam9B4UAHmP6bcJPSK2XcuasgP19NNc3PLW9ZNDKPCa",
  "key4": "2STBHTwrFxpY3JSXSMN8Xo4i7ZahQB3wBZ3QQojX4BShbBaWJs2K2dhDWAtfVPmUic52VM7gEr2k13MTxAm2VmWC",
  "key5": "5c7xw1kdw9qC4BHa3Vj9kMcHk7w3KLZDy7D48H763BUbhpQSieZREBYS5uMUCTjT2D6uipj36jxEyMs5svMJQx9e",
  "key6": "5kVYHcW7UC2ymN4X3T2idHeqcLAuzh3CKPnaMfV7j9ncPPaSK11UUkDdT7eYnmDtznxzZg3GssinnEfkM3rQPeeZ",
  "key7": "QxC2TvSdrZnGurzKCYTBGX14BqopP5cb38g8ZcGYhxctnSnyVxoofyPxfdDBDa8AGwEnsTxqZcGiiVrvTGyszik",
  "key8": "2LbgHeNjGm3sm1614q7bxpNdorEMc2zLTfU5NUFKPd8kDB9FoDBSozzwKFvLndKSLnFF84JzvspmtzSPbVQfVpFL",
  "key9": "3UBekSyYSyH2ag7UvafQwfKSbSjjNLNYZE3HaVytjc3iZu8KMBhmVtdRNj2Xn2HiR1zpbDKJjkM9mnVbCpj9VHx7",
  "key10": "5Fprzoy78j9BTXMmLxLzSpXgoxgrbwyweQTuVBEqk6TRfS34qNjV48RdXHuLFqphdzKxphCzYtz2MoMirGFfyhuo",
  "key11": "2wi3JdVYJh6rG5XYQsRZkxPPZXB9vohnBNMJbRYonH59V7xQreYvUH3oDPkQvh4krV2AcA77mBSraswfi8r1FArr",
  "key12": "MfSnAmpUJuPFw7jgVdoKJiRUzJCt2PVUmTQQWcyiaGgupibwPSPvnbM9jAwY6xd5GbdWb3yeYWFdZi6F9QYqkqD",
  "key13": "3Gv7ErGtPVRcE3E2EN4zr1xUnjcQHKTKrneKkXEhJ2fxHbcrqagGm5zWUQ1EXYrCvKwpqMw5Lczi66Ej5HG8PumG",
  "key14": "2SCet4xnYkbmu4gGdahJQNL3qoSdA1jrrAwpf42XFcJS4UV3DHFZ1p5qG1C4SsNSshWMTDsAkK6fXVjNdb6yGYqH",
  "key15": "4Q27fMw3UQebXcFWPJQa7bzVbS63Ms4MHatWn8bttTLGLdzxmQyVVmvW4pSy2oAzVR7aebposxLyEp24TdrbyMJq",
  "key16": "3jiBvbQtEESkQejKXCgcdhWhuwi1DL1ysE8XNJwXuxtsdzdZ61qrT4cV74bnXQFhZjETvXHayFKyLb4XmywsVujv",
  "key17": "2pwgvYswAjiQfF6gzGfj2JdyExzJboQsiHBrSRrveoybcX2aTwqPXUQLGHHx7RnFQhJB6sCefg1C2YTHiSzGVk45",
  "key18": "3djQmNxZnkHeLStpvjNJrKdtbBXjbGxPdQXo4NDU4UiLt92ptGLrqK39a8h976HCrsciu6T39c6Aa6amFs94x74H",
  "key19": "2oc8edEDdR9etMyR6vZ1ERNrtX9XYy8W8V9vpfQ71d4HF4vgF89hQrNekCBxqUAURrsxVAH8nkap52M8dq4rPDGk",
  "key20": "5sqfFdu41XeBQJwoiLHpFYLR2dT12nbsHy8MFvL2fWjwwd9REFFMaqEbdhW2c1zz4aBvkFTshQZ7WYBs7Tw3jSg7",
  "key21": "3oXWgUXfMm5XniNo7YdeP7BHCqP7SqthVzDtRDmuxHUws75uHZCnVKiuZrho27zepaBF1pMKmtcKeUf1brMWrkdq",
  "key22": "4mDCz6bcisFdajrZ8nu3XXxHhjetKBXeeJvntLjc95WiFWtz5vFRxBjMQx6ow4o1iSuTaerbXtep8rHfhAWyojkW",
  "key23": "53uZDUhWrMRc9T3ugcZAWJpHLKj18SSJSEQghGdHEJGfokR5VW7JCcxkswa5RexDEr1gQprUWu5js9enXUsMgkSj",
  "key24": "2ziAPpagei19mRpeTEcYC1i77CCLVN9mDTRyHAL6vA4Uvtm2ZiwCBN1GU8JaEKUCwsFfD3gWELzGTLGNYCXQVJ6e",
  "key25": "5eqrtvvu8ynUqE417jmoqwrarXc4BinsyH4VARJU1uS7DxP2csgDBZuEWsG5ndf24CyDfv2PycWLZ5BjJwARpLFw",
  "key26": "5SHjiip5t5Kp1xNqhUoCyD9y8rB7LsF96qsKFrADZhG3zb4uFgYeRjmmHxnRy9cJJmBnG2fdcCdZJVk2XQS6FE1p",
  "key27": "2ubRDHWvpbzVHvsCbPxhqU9jGnn65HsDpB15h2QUYwKnJ7uCLzhk2sTbGnnXkK22GMWTDdQoGJb2h2yMkozccyyp",
  "key28": "3TX2JKjYE5cH3wce3L69vuCy2NarBSx51HBaHV3YSvnCXg5yPVRBEwHwGqpUy7tU89vQYSs1a9maUX1bUpL4Xc59",
  "key29": "2eZ73s15aTbGk96NXLJy4zaC5v9eJzwm5J9gB1VKWfEFCsDxLJBQsmoiihcoFSMFofwoMhwFD5yC7KArgv9Ts3yp",
  "key30": "2PovKEQGfmKuin5FGXMxXv9Rag1eirDZBUor9qn2kjkWYcrkXFejBNrdMuf3D9anDv7bAdSvyUgwy8kAeTMo56Rm",
  "key31": "5aMv8n17hLHe3AgAYVv7RWtEFNBJhhh5n6n91PH14QeH1fKpfYkN3RaxZvyUK6gnRyJryVUWCPvq6WWunurbEz6y",
  "key32": "58UwF2asbsc6ebaNay7mYWC7N1YXR3P6Fm7TAaU14bMeiRuxsx2NQ2LurAo3qgMKVt8ksQhs8e9YNXBZBsKAVUwh",
  "key33": "5DAf1XEFFXZyxPxKqR8Evcbx1c5PGkfXc4kcJwc2cVmQ43Lqks696sViTUrPZNa8cY2mGR9atusqmrN5LzyVhKVb",
  "key34": "5RYcYgzYydzfDKciLRBf929wmVCytKrK5v7dgWVMtQhZy4qmFFHCArgpsHWZR8RaSxweNdXrTL435rqQZqagMiq8",
  "key35": "63UWVqJTkyrxkGaRFzv5u9FxRWzV2LVEmrDEWFMEBzYebq7LhFBnJDchkGUA9jg9v6z6wumMYj9xSSisqpwbfvbH",
  "key36": "3gAdgjuLKmz23dieRaMiccNfibHw9WUQcD5w64Qy69NN4RRz3N3hxAts2HjWtEPAj7SnKnxRPsZ5Dj5jp8uzxbFu",
  "key37": "47kJRq5waXHwjwXfoW4A7CxkwiCbQmSw83Kam4iRP8J4dXb5YBpxvCX9iyH68WFKjMsXjGk8h44FT3SZvAqF81vQ",
  "key38": "eHUSMLY6zQkUh7uJQM1XeHNFSou2AzWqYY7ui98pRsoKqcF98Y3tb6C3QCU1nCCMm3LyL1jCBhrZi7Den3XPr5i",
  "key39": "56jHrdG8QbMytFgPtbdpqRQuigxYNU69GEzk8wmMmJuyN5FeuhqWjckWtdtqK5xGNj4nPqfwhaW9tZ8DHX1nKrKu",
  "key40": "3WADkqyReVHSVDrhcto2PEDWSyLtXokYcBYEXHN8hb2hmgVStingpqcWDBEgnDYopt1Kgb7MYdbZyDRjtTGPR5xp",
  "key41": "5VsVMhRLzzra8vPND5cixMCpw2gr59nz1XPiuSfcgEDSgL6k96XGMhs3Q4axK9b6Y2xneqSDuZKcsMAVHvRrFvjn",
  "key42": "2Xz7DNP23Mc1bcoExcXENSBRSA4q9P7mG4QaWotfdgzkbavJPkvVnpCL64Bm3rpE91TpEWNCcTw6DkqXQbGW9A4k",
  "key43": "41EZR3xEAu6tC7tetBVdV1RiVyCW74tYLpTxnuxUieDPi3buVe4tMy7Wvo94b1znLqqs2iajrr4DaKJJWnwUq25z",
  "key44": "d1ijNQAgJVx1QoT1w7ka72qq8wsbsf8nEtrpwTA6VLYJ1w3vB9n3wB5SrVt94WW7U7gsusgcp1HCcWvSb73897a"
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
