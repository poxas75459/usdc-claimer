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
    "3FTRSbYSzwGYy5r1jDHuXS7esgSzZsiPeZeqaAiPqmHP9gnYmEH3N2PuH5pRYK1D8w2Uybhp7PBUVdUVriD3HqWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAbZCm3WvRQeR758dhwSXafrG3gNDkv3TCCHRhcy75XPj9AsokwwQjHk2dS1nXLx3WHE7Y5u6Q7HUXNKMn5poTR",
  "key1": "4HSate5hs8UmQ4zb7xUhyvMp4eePGESB4Q8jHeut2NFZMTkpBzZGWK1gpD5uskoMMHWdF6zM44iWGuaL8eiQ1nKj",
  "key2": "37zwSRjuc9CEqD4cGCaYP6CvMbstqmtgCrqJ84zB3eaHxC7Wx3wGMoRK83ed2DKSqFyfLSgSMNcJdRk8odTURfio",
  "key3": "4L9nSLV9vBCw6EMUyoFHetRNq12DRRj2CrihzC32yC7N22ASnMJuwWekTykk4CMeVp2RTYjZ1w2QZMQotqKkCMJi",
  "key4": "hAk25rEbd4ciAq4CeY236yYdaBjFEQgKwPz9aZrnYCCBWyaEAe1rfbEkkPVXYNjeySbL3rVw7sk9d2CZAefSwRv",
  "key5": "2s1q638Taut3jgkZUkCTFGTj6umJZfpkRMot83r8jY3foHfaapDs7ZoGmTsv167p3u3EF9RT4EyZiPfjMQ5Fzzkh",
  "key6": "3fMzsMjoVeGQbGLbR2fBVkjXL5CvKToLURKj3Czr87rrbbjddfVy8YvvZdshqKu6mZDdHznEsimXn4nk36SdqbDi",
  "key7": "bmeFk9PzC9tXrZPAeg8PoL3LgF3RDyo9ELuX9gL4dS17mKZEw2QPJoedVaYRuxGW2XXsxnB1V89VaC1aJUuzcgb",
  "key8": "3j72FgEgQQAu7ccrqLzEukJ2YTeh3oRHsuBaJDar7PXGAtLaM3eGDNnCqQpaGgFDJMHk8zE8BWTbZ9XwmUSTN4zt",
  "key9": "3wXRCuqEEd7SzZkyMsQFnZeXgqFYBbZGKFyWshnhJ8U8uq5iofEFk3iTnyUMnQYumuKMAvFhCq76XucUYC6ZpAJi",
  "key10": "BTWaYmPXoHhBmnLZikgprLecAUCHgmvG77kqH8UUAbyU3DZKfcCaXpeksurYVSPx95cnEmF5ehebyu4q7LDQqAT",
  "key11": "5cibyTuHGDJUSriU56vn1LkL31y58y9thyDUQQwzHyJBGPj6RKA6rPKCSvYVAP13M9MeAHFXofAeiCQD4jAwxM5c",
  "key12": "36TKDjvghZJcRVVbBneGRBA9JHkCMk6rRAy8negknTRr3jJSai5keXpxNWx6TF6ktn48wnNvy2FSSiBZm1FEbSRx",
  "key13": "4k7RuQedff1YqH6NK9TEJE7E5Lyu95jD6nADtx1T5M4yuMesSho8VGko1B5BW4noXiUq1Qcf2KAm2aBrmWaq6GCt",
  "key14": "2cVLGEXAnYLFXxTbQJw474HCb8e1kya1xikx2ZXyYPzzUAGqnZ5eJwK1zdqxTsm2vcHmRUyFNRi9qwd36pZxtZAk",
  "key15": "u6cLZ5KDt9JZU6AuqK5J1ePEzTb2idh6uNG7HP4CdRY1aQBGbxNhGBkFqr6N728f9xBqF663M1BJt6PBDnEF9td",
  "key16": "CZ9w6vHMBRao8oAPPYGWUyvF8MukbXGUi8SrWfopZDf8FhRRLGXvr49JXzH1LNXXNrroah1RwJq3zruqV1AsZeu",
  "key17": "5MrLZt1cWHxZgN2uEebpKja9GXAHt3yk2JW6xv9ZcbU2N7TrKRLiYzQFQ2zvZQ5wWDe2S2LM9PVHy5e1WoAQTWcQ",
  "key18": "5btwg4etKY34GymKvAtUwYaRvVwppJ28rBXxDndK62QgzHNbKcozpQWwdPn2AcYcPsc3shr1PpkwUvNV2oyFcwQ4",
  "key19": "4xe8y6iVB4zz5sQGVFfZUKzGs54B8kkLeA4QxHsprE2sjPCKJSYY3KgRTTFbEXfGgcVkDbociswzfjXTgNGReVmc",
  "key20": "2Q5NjZrFRpzDomCU2PgMkoBZ9mCAuYq3p9Lyuv4ZXq2J2UBmUPG9E1PiNoZjZhXUKcSkYtpddTK8TFaeKvvaWwYx",
  "key21": "UUhL9ide26qhYugWivTXHYM7fLQNjGri3mTUc3ieQt2HXBzmUBMcLWNVRMGgTn6g99SsRoWXZnVyKAPkDKdTFR6",
  "key22": "zYkhdCHkC1ZEcA4WisPyjcSenbi7kyvfG7go8e6GMpzMW6yHgryxBMzjPyfFpivk3eUiW2CsPVTkDReeFBhCw4Y",
  "key23": "4hew7ruRpDSruMDxJDB3kCALp98VhfZ5DCyP1fwZdo9f55FseQAFrSWa6gQjBaxMBQu87gMG8kSybspKemND1Kcm",
  "key24": "4TLaho7cEPzMUa6EgC6DGghVickoFYsuwiXgpANW7cNtTJsfqGhbHhZWxCihERtPWn2c7QLoaq9ftuVDmVtStnNP",
  "key25": "uERgeMAAqHAY3wmLoSJ6F1Yb66MejcDcC7BhTz4MDgq9ZkQz77AN5tVJGSxny6JLEUNNtFrQSQr2AqXQdeNVa7h",
  "key26": "2SGMYrwqQqZEr2dd3UkSfdJ4HkbwfEPU93k1sZr7XfsZygR33dPo52QtRKU3s5GvEG2JbDWnDMjmjTqSq8qAwyTs",
  "key27": "3v3sSXHUniRnqJDyzkxukeDbu93FKW5u7uAvJXA1A1fE4j2yA38eGLRtQTGiBafLTb5mJbDZFnrfkDU2ypNAadiu",
  "key28": "5AuXCjjMw67FsLKwWMybNrUn6cZNSMqKYxFADYDwPc7JhvFDeXVbfADrq1X28bnRntYbuZ38eDgTh9NvcLQSABst",
  "key29": "67eqakuneFFqxGXfN7Xb87vvogDrvQknfDQ1LC9gd1YvSS2GE1AEin9UtnFt5fAVFuDDyQStuE3VR6NZYHr8wd2y",
  "key30": "3BRnpqBQ5nMBHBUGnZ1bQrJCaSKLj8B6s4ABQWqtDxdLEHXXcPw3EmNaPzcUECWLPh9uqvfhwvsmmWAjbCX1KZcD",
  "key31": "4Gqp3VQ3FyYpegfvUowTxGU8yNBHGTVbefJhSJ8mBpqKjuuyyrw5rGzKqEetnXzMvMW9NvBzTQ7dZwZJoVHraum5"
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
