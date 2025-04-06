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
    "JNnqs1gGneccpDB529M9ccpUeyNAvwNgTezbwwgJKuQDcmJQNNWm16YTrXjdUsRk7CxWbo9vpJkQ2oNYe22eLmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9KGkUeHc4taAnXrwFaVoRqLTYkaVR3eqVLQWG4DY49VMsU4vSfgdgrpuroqEuCumfxp39LUCkLhF5xE1UjPF7p",
  "key1": "3LanFdokbdX5VdmH4wqFSXJu9m2wUTXbZX4MkFDZCcMZx7K25KpUNjonKnSdpBTg2oYSYAqx3if1UuQCA4ejSxw",
  "key2": "3H3y4jfLmUFe7p4HTAwLH6Ae5cmfJekvQnbbrLVU8fPPdPburwzekDNqbrzp95zSzaAsX9VBS9zYiAb2n78zmquh",
  "key3": "2mCv5RP4DU1nqtPiXMUnXk3kMqARVZmc23ciNsUxGLsBXqu72hc4A63fhw2uZPu1hmMafiKWYyhGDfhn3S9QeQU",
  "key4": "4XoDkQahdg1EkbcSRBqSRvwdaYfyTUvi3bnA8LJCSNyD7ZeizpHkdzyNCtTmLYUNWLG7Z2kmRhYLr9bSp6oRSnba",
  "key5": "5PhBk8jDYKxnsc5jecCry45v2tzxLRP1khyfeTZFcr1XinSWi8m649WWMxKo1KPwpk4D3hx4hKTWnox8KgxpRF3R",
  "key6": "2nsW2ZvzeFWhj4H8Y7TWjvpX8oBWMN3yeo3vQHeFVzyAG7gMn4yPC7D9guvXbjbC9aQpMK1gJpXXDXYBSQh9HtoK",
  "key7": "1gKwKDU7vUTEkcACTnFzginxoTea5NuaxXJg79ujbEn1WoRPahtzHoiGTRkZHLn8d7UWpvZ5Lu2vxXm8KiNaM5V",
  "key8": "4291KUSqPD1vg4uJCJLwLZAFXUADqzL3QB4LXnHNhy3jBfUfgzYnsW66z4kF7vDtw4fCs6VV2eE2BLRLTXJfhHTz",
  "key9": "57wTFP9UmrMwTUkKhC7oCq9Xgx2PdPPwzJJS6vvxykLDJ99kqJxfepabFjMCVBdrR3ms2aFeL55dAHwu2v7TCYKj",
  "key10": "5aod9Wh9HGVYpMmUVQZNqfP6JX562x2qCAZtR6pHQx788uaJuuEkj8uPH2Sk7DSCoHFVr3mWHTTqR1rjMAzrjd7v",
  "key11": "62gYTJ2EvTKDGcqEFc7C6ZJgsHWGH1yshWGNbFi1YNpiAtaJhfVkhyqdpDcwCJpaVmx84cdm1fizztP8WN3BHpUb",
  "key12": "3VXthoUjjqwZ8ZhCjNmE4CFR847YWTJoaHAXFm4AiL3Jv1KPPHvLu9bp6dZgD8xC5iKHdahXXGv9XDvc7ZQtxjtG",
  "key13": "5GXcDJJFPqqxGoSy9LfyfXiN1xkM9dEkXmaQPex185uCocnTW9Y4QECBu178hrDQwFaST1arDanX23xRXUSiPGW8",
  "key14": "3V1oBJZr78EzK9W1SYYf7U2rfWEA3rbrnhXYazrgBbUwFs1RN2zJCpY6gTfouLg6QafNe3ozKyCwiZ7uKDW2Le4z",
  "key15": "3vfkiUwfM9qV6mntg4htpBAtsGhYPobzXNMLW5Jh1LqmEYmh1FzmxCScnpePkS2Zabm83Eotq4aw9tLdWCsx3ymY",
  "key16": "3WpFouoxtWXVUBzgAUuBe6x5JA9Wh1B2EjrPbHv1SkF3Rujhu2Yg1Nqah1LTo1U74dxJyw4sqFnJ1sL1tyTasDor",
  "key17": "4P5L9dyrwX8e4SdCB5Hofx1GVjBhGs1F6A4thW3BriTnCMeSupEzYrMLsQ38uDarzghosKrscmQUs1v5o8yNTyF6",
  "key18": "4QwnoWUnNydAFKjmkpuxK8VP2aLsjPZdtPGaN4wv1GRPf9DajUWGWMtfB5RoJpm1GyaX5zUMApQz5PFEC2ei3fAG",
  "key19": "3vJMiK9smdVpP6ASvt9Ub48zUj8WXCX1ZSWZV85S1XyQzY4QXyay3S6N7gMsXW8oaZaHyTgcU1ETy8Gmy3i9Fmjz",
  "key20": "3388dtpb3MSKsf3sq61oTfu466Jc4VuJ38tVJ1k2jQ6LSqgUTgBs29DTd6hraD7cBS6PNTBW7T13WpY1Mj3C3MHN",
  "key21": "1af4aDmZ9ERpP85vDHJW8NWD1g5wFemduKYDp28obZUnDDCds4M7t5u1MK9UBZgth3xmr6tDQ1g8v7iwF8dWWAB",
  "key22": "5mETSUx35QVDQYBEWvpsqjanuAtL6iMfPc8ZQfWgns5mYiy8RfcTSiMNGcrVzr8RihjHtWKqddtpDXaBfrai1bFM",
  "key23": "A5Fcee8othxZUTFpk5P6SCihSKwGXZKgPoMshwwVx1sXmdZNG7mLJAyVmLgKjtgP8jJSbcRNo2ptw4L87DR7yu2",
  "key24": "5jVNKeymXNf37cgM5fUCtitbW9F97oWg5NuQwVDyr6VYbRVpkRYvrMFyrQxy19QoY67kiJB4xxa69sP7MSnCNk6N",
  "key25": "4BjgwPZw1hJq5uARyz8SBzsWyY7tUUTFotFrauVtYd4cXNPJdbK5pAFxP332s7VRG7jiDw2Z1AsGg8ZJvHbvGKuM",
  "key26": "3gZwUz6g2BJhbqeNYTfsSSf3CVZRGi6TvDZYHYqbU3XRF4MHok4Ewe6mWLf34Np3P7Duhf59aFqKNcRT9vpmrJS7",
  "key27": "5AqJBVKHe4yvXebSN36g5iLR4x8AxjX9n7sYYde4C5ts3TmRywQLy6cLiLr5j814bhWw7mnFLCLcTzcchjuKfYst",
  "key28": "42EnQCtsMX7YbD4eeFLzkPjzPTZ3bB5Zc9LsTgXdNS6DupoB1a4kQwB7dUwAeGuXeCCnfjcBPxHPZ2vZuVTuZEp5",
  "key29": "2LWAfg7VYE6fnAZRSPGxDuCEASGAV5pTZkpLRGmJAsVmk7DEdTwsZwaao5FbkR2LLz9myzeYjGRxBf8Smh2AbJxP",
  "key30": "eDcyPJyz3rsYEq5M9Tw2occEPw2HH5hyGNxXzWGkEXegrUSaUfW2L8HDUEvkYgWWF8FVB2Rw9eyS6LzsfomE4iK",
  "key31": "9YFYrdhhdg4r1Jaxkdax24ePTfdowjnPTgZVc1DDeqZkNkoUFeK1CrYh3v83mymFgJyLp1jkok36Vn9AMa9VKJW",
  "key32": "5MjZtqmj47KXkZLBNBTW3ZKD2g88348Ht9cVRZhwfoXbS1SJAc2zvUBmaFeQTkswWrM1Tg87G6htE9q7FJUkN3jr",
  "key33": "3Vn4GwtbWaHQwAUou59oXzxUJunTWbEMEk6BhEnRgsDxLVHfvwb1TosQjfjTg3nsDpNT2GBvUPSNzgS42PdCtzBe"
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
