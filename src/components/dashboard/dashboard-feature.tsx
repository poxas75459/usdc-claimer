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
    "4GTKDa36iVBCUVAyBd9JexS7uaFbqmbskQ4RZjLn6ogCGHZ6nC1trgMTcqWoeuD3UzNvX9FMqhaXpa8tHDmoZ64Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431Z26zpYwJemdcoFY7hMNYhQa5Z2R29rAqNmMomvWCUwWJjmakX2j4MW4cHgVPLtt1ETBEsggZ3AGdU3hKLLfxi",
  "key1": "XfWGqvcvkJRQvKb1SV76QqE7R26fNdM2uc5pQ5urvScPiEwKo8v9dciDzboxx6LmKmgctEq7iZuVL1AhjMByFXz",
  "key2": "3CsF3gA4ZyZxEHmKJodatRBjnGqBsm7yANp9u8yuH5mprDpBJXm8djoWMM94MLNDhDNmSjY23WZPmFXo5xS2sMYZ",
  "key3": "2JC4uUsp8GUvjXJSPeXA7EwRszS2xpTdTyYej4PvhUfR6EeqvnMLzdW3ivWopXAH4JKkS7wMqKDzG5U1tKKJinr3",
  "key4": "kbXjzLnY1NUNuppqDCmoeDzvZQPMUt34HsGtjEeVn96jJTwaeqtTBbjBRv5hwCBUiPRYvSD6BudgrngYBHxo5iD",
  "key5": "4JRX42n6Tw9Zx5sjctVFqc69HJEtw6R8V6pVz3z5TnXr2tt6xuKhYKvkUKShu6Ym2AcaevqjyVN4JbBNw7eo7KDa",
  "key6": "5PrgK5Mxkjvgm58tGhMnUjcYbFNpgUsvK14QNFmrHTgbDntwrrgmfqgJQvyoBvyF3Sgm5NnijxfE1KaSf5nj74rF",
  "key7": "4P4VxcnT5DbE6vrs1RqNquv8MpXCbRmW3SMpgBYEvwLZtGgY72Xo6nLKk9WcweA3MEfU1aYtsfSVb5FTeUmXTBFs",
  "key8": "494gpjTr3ZxuBXxwxB7ifUF2zthr1mduNmfGtoHitvyQaUhYfxz97SKs6LnPJTjjgQP624CDqcr47GYK16MNVAwu",
  "key9": "2TMwuWn5t9NzyEaXMYuMX68THbNu9GeBuurtj8XzjVYqHWN76JmYL7jjwG5upazMLfEo9e9Esj87u8Sok4z2Un3d",
  "key10": "2dWEKa85JWxFhiQnCM3QPb2MWp8rYcSXDEbWm3ff4D2Wn7BTh7zDaimjC3dVBmbxi1tvdMet92c8w1zgx85c3D8d",
  "key11": "sj9xcDiHGh9oqhiq5A7okVE4Q1g9bVGMixe8ksmrFvBCt9msTqmkf6waVcddEXQYdxvLm974zcToVnGbPzTHshT",
  "key12": "JgwnmUa15tFw2oSmcmP4ENryGaSMMEuTYQbDHqfaZz3Rtfv2G2KCirmdH7AgtHhLSogWvQNRSJW45kXxtXaq3No",
  "key13": "EhK9C98P6QCGTHS9stRfQgbYnzeoYLr4yFYXC7ca5aiYXSMxEE6LQGBtByJsYiRmw2PAfvyPyD1PZEru4vKktDb",
  "key14": "FbjFWeAd15XocRdcPepykQ2fKZGa6jdoodM6Gn5pJe3zxdPNoGXpT6gAk7cYnkjS7g8uZx4J5P3PuERFRxpgVTC",
  "key15": "3kaJyJSHyp1K21KGPeEq3RbZ1fpDTra5du46ycdv2Z8xvxjXGcLZ4EbXPXrqiSQiBx8RpjAkin8EgQwKPQmN3inn",
  "key16": "4HUDybFpFMEaRzgqvrFgCAY42L5UA2bS7uaYks7KR854DzmAuzdUCNHTsFb1F9uvLDgm3VUqGAKxibj9UDc2UAYp",
  "key17": "5JFWibNoPjLWLNwfxa4VvzZL5gZ76GrPpyGFB8LSBq3wWadU7LxQypAtELWcqdTepmPaHUYhk9CXZoVFj1CGQixu",
  "key18": "3mGpsWtshKg5YtMG3rwJgT42gQG59kZjqYsFfLHvS9dhPZhJRZ1DoYWksEQxkY7UWysPhxpNn5QwprutH4w8QQpq",
  "key19": "4erTEPct54J2MmzPYFJn1PhCeRB6b7W12BL6JEgSf1pb3BTn3899pmzVkc7h6F3kFNsgFA7pT5uy1peSBWcANyqN",
  "key20": "42o5JPWfohUDigqw7gGpGqbyjSwPTRph4ywgkc9XEC9pJx6ZFPfYvqJ7DteiusfotoECYPtUPv4rZihqexfenKhG",
  "key21": "44ToBNvX1EvFs3nv3CeNXZRyvjM6ZqAVtVTkqiJXycPQsnet5f5eAncXq85hxEvEDF9XN86yqSxNx3ASVvajseXK",
  "key22": "2MtXcMAnSXEvwNDD9nN5DSvRi8h9m9TWdsQ9pCvi7YappojCXjbdgEbjriWLutTi5DHFGy8NKxTUzXwZUV2s72pR",
  "key23": "45CajyYnU4BFpy7JQfCg9efbuvvhg3yp1diyRA3s92PkNLH5ukyAhMCGeH618eEiA9ZogDmEM6eQds3wpEYa4J9Q",
  "key24": "3eFbjWrhve4w9qBxjzxnZuynY7jw5ouKUgYKXk5X5dcYkkFbu2XA5JF8VGXJWRRyBQcV45UtQhut37XDH3cGYwE2",
  "key25": "2kGswCwcVgKDhBHoCshML1RjscXYYnE2qteDqeQBH222yC2PEj1iKPX2PSLknp3xQFjqeZe21hntKtCh6FQhzQBH",
  "key26": "2hdEccdem4iJJEukFkAEAsNaYqYKxUxVUzZPkFw3dnRm19Jyo2NfSbDB34bBXZpVqASrDosQyQDL8hZenPqt4Fgu",
  "key27": "5AG7QUFKMN445Z8jTdumDYLpi88fTE7pau1TyAtFsMWydCKmio9Qe53zaZTo5j9Q8TJ4UEK1a6oMuxA5bCjnEMXY",
  "key28": "jhFwj2oftvwS2YWFrpv5KovnCFHSnCLE4KRwsdyZRiX4a45XsN9MhgEq5DYzebLY7bgP3ADun5gXh1PkzXJKTcK",
  "key29": "2xgPF3NrGESVuLo1utN7qJuhg5kbZqDwLrhsE3m9yuL3Gq2wQPPZwLQZWor8unnEPynKXwjwnouHgqxAQ34yTM25"
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
