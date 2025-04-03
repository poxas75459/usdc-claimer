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
    "EnATHcDenDSE8BXMmJQvgABX7aeKQc5UE9LvdLRfgPw1UVUKKB8XDrkp6PFjyEQKah51mdDcsUKDXxhmtzwSJeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5538mqdB8pPjUEdP3NDfx2Yzy4yz6aV7YwNarBNymVdVtmP8mdX5K5kivq3qxoyd2RLJ1pH3A5Rvyh16sw1ik2Ms",
  "key1": "5j692k9TZr3x1X6Czwv3dydXGahwQ1CKZGttA1xEz6EzxForJGt1JTtdfxaH5VJu1kEkoiotvAD9snraqPHg5jv9",
  "key2": "4Yvbf4kVuQ2kS6JKB6hGMNFzA9HuxUfeiMAoGuYX75WxTFBnBeHtrMPNrqiwvzNwNnQAi3pgs4oZipB5kb33f3eS",
  "key3": "4BxdELQND78dXA8apXzFmimLfEKBFkkGZWaFuznfoBCkFALdmXWybvZiMWBuXbBrR3aRMVUBkqdTFnkgSLx6aJYH",
  "key4": "nsRp3c1bYVVdyasGBTvG7u5ub2yZwhPdxzkQdm1TDDSiVov6e94ZaD8Q9ik4ZXu6QTkv6qD8G8chxj3J9dvWA88",
  "key5": "3z9w6zFUCKyYG5JobDqyu5oewcoEJFaPGcMWC58c2q4HXETG6PsKyspM2ZxYJCCchXuPAX9jvbw56XCrp7AfUkbz",
  "key6": "53GqEa6Mpykjvhv2b8nPEHTEAZCnD84GsAguQrxGvYiB3DneQQuTbYMDv5gVFUXpDezed3A5qvSXU7rp6dRxbpvy",
  "key7": "4JotFJ1xTCCYN9qrRivupfMb7BreGCugaJShjA2ksqTqUy8FRV2ehdjXCtUt1W36oAMQceagU8HFw9Q7tvrqFB6L",
  "key8": "2KDU7ZRkY6Ey29UxmFnmy8iKaezx8G2umammNpTUDUU8Hr2ZsngAJM5YksT8fkwWERA9wwniSgw96mEK4hbdFSY2",
  "key9": "4QS7qPbXAjBKoZ33qwfx2TFQ13ay8VL2ibQvgT8biRoVoSCc3ExBTAXUL2v2myzndF7Dz21SuRcTxzrPK13xACms",
  "key10": "3D1SZXQML7p8nyFWKrT5avUa2Y9ou8qdt3gpfMYJejKrDSBcssrYAhDDwt8CDaCzVEtz85KMnuch9NNpdNjBzXbc",
  "key11": "2TCfc88LNUUSjN7NzUswKiWyDmp5SPVX6C13DqUJR81JJx7Vysq2BNo6Jc2ebRworMtUAJTppaEqEsjrKJjPtusY",
  "key12": "5FNZmdzMm5axkrJPykwBC2Rkt4KKTxZoQbbEJ3o46q2AGwwR2LGuueFgtd1Hox2rAWu83ox8yVWMprJ1mQnaWRoG",
  "key13": "4WThaVR7W3pceAUZS17jdUwwkKdFL1YffEYEqV4BVw7cPKDh3LFrDKWFjn4t9So8CW743WRjjDLNvK6uqT7j3JVV",
  "key14": "3dwPWUDE1cfRu1CktXtpSKZQVMXG5o2kDZcJTxapKdtfyDSQufWmzAs5V4WFPEBd9drkm3Bcg13UMMfYjCJ4EtQR",
  "key15": "2SBJEGoJHvcxz2jaKYciBxGXQkG55QgU6GPV7otxhPjah5G1FeqztTiy62fFLgQxWTvv1n1TTsAEWzbkudHN6AUg",
  "key16": "Nmodi47ssmJZBZxKaxkLLh4s58fq8qSbdcii3GsXk48zWAVGV9gQgGDFBjPh7tGM56HiQcpJuAzgLmbeYE2z7eg",
  "key17": "2kePRA7whBRHF9TzXXfX3hh3JSnTtqMrXACzg1bfhsbgtxQYBkTU6j8H5aW5xkhqxoKiz4GCJVbkQYUqTV8JgbJf",
  "key18": "52hyGUQu7LaUpGSPSg4bcFNuosfeYhEibAPgFu9rwvgnMLFiX3nFgP33Lm1ZZYXCM63z6ez8JQdRfuUCzvJeF3Q1",
  "key19": "5H2gWzC7Uej5kSQJAB1GfJv6T2yPZi7RMTGoyF6zJTreshP4WVauiUpTDvwcVHvodDptmh6qMMRVVx6cCprtjiHy",
  "key20": "4SgAtpCR9jHAsmR7azuUC4miSbXd9hgkUAp4fbuzdiXD3PdgDBuu47s7aMynGuqm61KnZ9CaYPJGVthU5DiFakuG",
  "key21": "5STM3LBsmkkUBpAAWboaaXK5rpEtH59QsZ43Xy5i1HWn24LSxiVoAsYZZujDcywQFaYvB7QbU9hzAEV1ggeu7jwb",
  "key22": "3qkrE7CnVWUkWzL14TVtWwD2CqAcpfCchA2e4tWHfMZRDfSM7iCQcuaPa6K5tWGibtdAgDfETSiYCXRD3BKkBfM7",
  "key23": "36jSVthYYXweS66uWhi87Mph4vkpVvaUtjo3dQFGSxsoYQxBtHQ7geUmX6dXPgYC9REB1h3P6hojdVwFVfnXa6nL",
  "key24": "4CN59CLAZiYM4kHi2jdzC7tmN8xJwNH4H5VQgtWjL1cuVhg26jPStx3qnHxpnVViszL4HuKcLFm8zY6FDKSVeV4r",
  "key25": "2jeKGo38gqYUAH62C24uFtdE44Ubm4BWHBc3xXsN8rWTV512BRoQn5fSFjyZRi4wKwRuKPd4vtm4Jd8jBSJZRMKX",
  "key26": "3veA8dVs22rRYjC8L6fxDY5T7YqtaoZvR2sCk2c3uanGYX7mq13XSg1BwkfXcmszfoaJib57FWoVwHZcGF6kphrf",
  "key27": "mASuGiQa4VdZVPQ1RpEFinn9WCUsG3wCg5LZvWwHkvStPMerGKsvw3aGn5CBrsQWicPX1muGUHYEmXxyYsifZsH",
  "key28": "2FMejPxRqj9b1iQXKk1LPzJACy4exb7Kjo2va7rXckrSKFPRUWHujruZ6qKTvdgFeULivq6AepKXrf3n3eBSrHUx",
  "key29": "3g6N5XFZeJXDMxy4b3fPLUMMJZnEYTtdvXLH2MfGhQvsJ19vMnGxx1nsZC744NbB6oJnG1eKZ2e2nKhLMcXtttdw",
  "key30": "4PocDyHaY4ezVEwpFrLNg9o5nSUCTJMsEtEPxTxagmPzADaCjE6Q2UkD6fmvT9chEoVpeCUrv7MfMvtz3qbEkR2h",
  "key31": "5238ShKckaMVyCjhFyQL47v1GbTr7Hmke5amcA4MS8srh1dugqyEYrj69BdEvHUfRRzpgRJq5xLGWopDC8GRim9Q",
  "key32": "8iiMA1tmFCfZRhLZXvDT6yh7Gvvfo2pymXLaKg8FM3i7YASKGdXijqRsgcEVVgcoQH3F2D5vxShamTFR1JHbJop"
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
