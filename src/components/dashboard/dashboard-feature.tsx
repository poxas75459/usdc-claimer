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
    "41qgFS3pfLcQaYUcqQkGjBFnPgSqHcSA2RkDT5GGSwwbd5i9PuzLMwCpkPHCnCS2Rt7KBAkXtth5Lg7qMibLzvSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p2sT9Fu53CtLj5Go8jEczTn4a73yGmEjPnp3DX3DBc1rgaxXX2VN9UA3vMMqpPXcerAqPeDSymXHWxNsCfUAP4N",
  "key1": "4Nfc92d9k8SzvgytzXuBw7TMDPF2f6uBTE78xv38uBwytVZptTY5RiSM13qDtUfodHwJqbXakwPuD5MPPqmYy38p",
  "key2": "3ZLWUP7wFW8dypAozvHRoZWxSMUmesTT7nMXZYKFoQkGKzdUrCFNpNYFuyUmpKkoCGDu76jkPdySA8hNh3tXjzVR",
  "key3": "663RU8KeWvnSsi6DWELnRJsCahSxtpM1sbdmEd3CSkFEiihLDUqsL5mUEZ4WvyVoHvMnY5hFmEcFBsQFc3W6Bkyp",
  "key4": "5J7XG7bJdp93UjZ2jiPYgEaVXpaAkMHZtQnze86fN5ZRtvnW1yTcyoAqvRWQJvwLTwJovtPLkKkaNt2q4abF2shE",
  "key5": "46wyDwwsCdcni1FhqgwT3m1u3eUk2dvcbWJZoqBHsRpxewXXzQXs3HgG2ryTGnyGNvJAMnkiucrLVRNwyBBf7AnY",
  "key6": "3RrEkmSxa2jT7HAtozRcgd5QWCgmrFUh1a8XaEzdR5Ei8GAPKEbNW5yEuhJ5z5uVJyLYoLQyGKwQ3g7V4BxWeWg2",
  "key7": "4mP5j2GUQB29FhB6zRtHhCu64fmUuw7tBrFQ14MBkSPdviX8e1pewnb9q4JL2MFDXSccWkEsa4Spq2TVzp26rEba",
  "key8": "5WqYdMa59tfJhmn6AbHqiQQkqyAUAvSHyw5EWK7Qs6YnJ8it9aRdUfnxYYBKvVo5cLsfX4A6jGkRUQUeEv3edTgP",
  "key9": "2UpMdqVDp9Bj7oZKQXPSj4fXNKmutNW3pjcdHq8LRXARJmFJNDkKC2DkTiBtazVxsJ6zhxfyCCkrfxA1EJWKrbA",
  "key10": "67n3BMapbg2fscS6nMPD4rgHt3mrwSR5oGtx54vc2A8WRXjHvhEr5TQ6bnAiyeH98BB6DGQgyXYJNYiPseFfpEE5",
  "key11": "2Dkz7waaBhKB9qezhXBgxai8FG8hYbqAQF8jqjT1sSDBgnQcxbmF9MTZf2SsgWjbs5LwdRYYqB3sJzwMUC3poiCH",
  "key12": "3PxWHE4NBSsbGdB3zsGoEk7iAMeSKzQMAYhJSDn9389VYLVXrBbkhsi88p71PH1XZCqbzNtfhpkFKsJT1Jr8iPfX",
  "key13": "V1HB7ffwPT4U8QsN66bGRevfHoUGXAXDc7w4XKLv4U8yn1KojuU64E6R6ngYDU44NFDpzCjESSNUhWKXHNmbLZB",
  "key14": "T8AjjSzh7GQ4gGozW7KMHRtJVe5bPuSx7FUxDCFCJF28mmU8Yiwxonu7YuszH77bfWCusSM1DaLkwV9ktr1deLQ",
  "key15": "2rHE7PRQkV9jqnDghpCjFVWNsEc6r2pKKzSr3g3kCPMrBho1irn7uDRz1PupXbSSPVjip59prmbLdgyVjkQFiQoM",
  "key16": "wD8qPEZHc5CgXya6C2gV1839DUTQpgvakWpewy5RFyniKBHQjbAmbKrcm5Vtoiv78Nxok8a3z5SV5b9bcpWbn97",
  "key17": "57eqDD8mzJz4ArZVwmJaz1itwS2S9V2qnPkqt7YcMpxiFEjeAB55oCNsjQokLeHfaMfE97zpVmy78m2J3yqTX5Wb",
  "key18": "waVViZdj4gn72anx8mv1Dh7Geif4tttVFxiFCjBvRyR1Usw449LQEqkNiHaZf8TzUt2QQ9cY7Nk3DHhUm6P3odX",
  "key19": "2Yeqo1Djk6wCctA2fHvSJLiZfuhizNoRmkcQ5TyKG6RxY7qqiVCK2ytNyLpNDkXasiYexTRTfBvBNyuTpwSfZWSG",
  "key20": "Y1XYW2ENZjPuTiBLXymP74N6pauDRHv6MndBnESozcgSJE54qu6AcMZ2u9Bry4nRY1raaFXHT4yVx4UQL1ZYzoX",
  "key21": "3XU8rQGXrzWhmwv5esPQ7rsohMVHPcFSc2YvMXnGbjhbV11Snmku6rer5DFh1UVyX8gbomfRbfG3uD9rkw8fLY6U",
  "key22": "AcuZuvSN58hL4MJkX1GwnM7NgPKaESjKnZBH6vaPiuhYSbLGkyEmFqjVN5FmbuxNZ3KKzEzREBqEs4ynQn1pEzc",
  "key23": "4wVcYbLrpd3AjmMSgqJv8Hd9uU8eLyXg3eDqCb9FGxk2jD5Th266Fk7Xvp6V8EKH21xDxjE8TnVtbepMnTCX7L9W",
  "key24": "31FkQtUjSyHyVFfP2xcqq4DmDF93SWNkRV4CWW4kxTccsD22RYGTQrt6z6qeV8tvfpGNpazyJanb6XhyJabCNJ52",
  "key25": "4UBG46oFRqF4DuC4Pdh9LLuEHGVo5faiZw2ffBrgz99BEna6ah1jKmTk4c8gqBo6HrySuzrrfXYqwdJydjpVCe2o",
  "key26": "6wBRXVddNFdiXmtY3MYPj2VeVituN9rZVQLumBUctAa5Jr2Nz4XVbjd4D75JJSsTSrKiJChhDireMCXRxyyeQc4",
  "key27": "WPX5nD9HupSLnz88uK6z4dpACvDUXsAm2ZLqmpmuSmDJW5LTACgGk9FQQiPFCo5bboCKMLgrSgR5EioVX6CGmaX"
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
