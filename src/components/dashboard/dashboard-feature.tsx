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
    "2dGYtMu7i73Risb6epCs4UosC2G4DUbGByMqnhikgED7tQTYfTU2csFf7itfLpZruZvZqx97apgwfCN9nXSm7uQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeAdkrcwbUW5RsGq6LuETdA88oZBXxUiFoYaeq7V8xu5jcHFSGJMEZmuSPN2GwKVy7XmuYvGCMjVspDhv4RRqED",
  "key1": "2DxRtGP1XM9nYrTd8RBEAxHeB8dJFXhoGWw6fBkfaBMsz32n5Z4ddgnNatBAsJgSa77cH8dBsFLnD76Ba5teCPFQ",
  "key2": "3z3w6xzPHXrbifp43AHL2sdigGkerRAcpaGQKD6xGFqn8P4QwVoTyNLPGfqiGN2Qd2XJcZmp2tMnSb951uA6T43H",
  "key3": "49WecjcckSmuNqrYUy8f3riV3FjpDp4J5JhNsPXcr2EHy7S6bFzmDxvCMBe7tEoEeCNMwV9XRNyrDdugLo2z8XT7",
  "key4": "4PSLDVywLRMQBs4VAoSEWZv9z1gC2hPeCeMtvvxqvduiA7UGDgtw4yB4BfYTVMpHCcDpxejMjmKd2D9kAQp2TiwD",
  "key5": "5b1YMi332q8cjiKW1xZZfzH3FJJr6KDQopsmZjhDbjoJrNZ4D4J8NoPgefxm3w7Z4ZE5QzXP1Gq6PUAd2HMqEaw6",
  "key6": "23hRwGikJymnr2anEArRfCqgymmHnZpUgUXUVDd2KwhQYMsNLtXmKUX5kHxN8Ry4AHPL2LR7BcNG3MwbjAGXgAeC",
  "key7": "yffYTDnPs533WBqDFCmuKhDHASBKru2V8eYFcE2DK4BBVjckzPHbRVdggThA13ZhAqfytDMoetXzxfhmS5SHFfp",
  "key8": "3B2ocGhvzPDmxYsaxV2bAA2Gw9yv7iJpy126Lirs6rhipj7wEYMzWib69LjApWHswYvrdRqopuhdcsejCXSZ6zNL",
  "key9": "F4PDpLo5f62mkbjcr3vhPg3zX2E45ef3rfmWY13h61piFqQSHCiKUf2uLgpSH1Sf28wHZwfeqtaBJRcD5BM5Jhz",
  "key10": "4gFfUsbi8GeXbZFKFZoWXrmvfdevBbmmDvaUsLD8HiKqoP1z4GbArUkDjNBxvFhtAxGhJGL4LSRacoGEqJPdACh9",
  "key11": "3XhK61bEvgskM9spukjcP8XqyB15CDq28MrJG8co9PtQcCgq66HrJq4Sco5LLuWaay75b2sEpucwUAfJfHre1Q81",
  "key12": "5vsqZmr69nax49Gk3JadbZMW4ygM9TFmjvfHyqjDAMFxbwNQzSyFxF4XjXsZ4yGPytvkEkfjsvKWcbxkZMguKyRL",
  "key13": "3EGhNLriAjVdyeEvFjwqit5mgr3NsWc9y6p1VLb65vBkU2EHRLTgy8LyjeNhzjYBXjNxe2UhEwHuoQDowLTdnPS8",
  "key14": "2acoPCgNG8bh7KC2wVtnwbs8AdCzZkhCi4wvjERSa6ykpb2EArkKzu1iSp7RViZomLpaxs4CjTwLvrkA1fhsX2tM",
  "key15": "4F9xefogcDXTfzHdDLBt2WbTTx2qd7aaseXKyLnmB3EGgqyAFscVDe6KbPnxCim8c8z7Jj3pYFgHyFZKMQyPxTbj",
  "key16": "48jWipkVsYDPLcdKG653FJDAskixzGyxzi97kiDWJ5JzkFQfksfuj62KQ9hNmK1ny4j5ocTChZf9ihZUXUoJihhY",
  "key17": "4FQopXZUueuYrZmSXivyMF2VsxFHVjqXegVjW75tZuaf2JBCN8hDMoEFxYkwWLxzLuiXTFzi3Hosh1DuV6LZsmfR",
  "key18": "2uvoRokRsiEEgVrCzom3nJyUoZ2fEvUTJfZFPMViEHcGFLSobSpiurFdX71yF8FNTWf9xjjGXRPgxTTQxWvGRSJ6",
  "key19": "52nZ2f349xg1jg7pgJtH2LQYMwtyT2wgiTp3K2KZTirt6CzH4F8dvcU8rfYAbRyeQnvM9G2RiW8n1pTw2cKVNnh6",
  "key20": "3PHZyDnUWiiLGomvTGPjTsR6modPDXGJHFnHCTaW2mUHoD8ZemwVAmhqxNom9XgJbT288H7C18yi2zMmL9dspd8i",
  "key21": "66yUyx9FhFkukPHoeQFjyc6jSK9rMnURf2B3LMNZ96bMWgZaZTLGQwHFf1kLHT3LH2vobHDv5AJJRhruyCwUV2MJ",
  "key22": "4gNuGRaAXaXJ87G5Ft9FMUodqWtwmdifyey93aBchVhPQ5sVbixYYYiu37UiJkPg3NpRFCTD294gXm6d1uVFGdL2",
  "key23": "HStjmWfQ4Zxg5RJbHfJ3xTPV5rDqXfrep5M8pqWUPHmHXSjf75PXDyJVY4c8fYKo8v52PyiRFXoCWeX49oHppZ3",
  "key24": "4NcZZBKUD7sjfU7wB7dcJXpRjNK3JNf8LJGMfABtJEboLCePfUFwFEusy64odk7WDkobHPaTHJMF2HnCf3CuTsoR",
  "key25": "2iGEfzmx1PMcsZUWyQM7zWW33ymZ13ZzayCeqPXJJLctTE5TVvQKzrCWHVUBfJSs8hYzM8vktT5dMuSu8trGYmbM",
  "key26": "4YHZXoXBqN2CT2Xd6UiUoFRQjrHJDMrEry3gUTwuex2dHME4AUtVxZ69g9Wju32iiDPhEJYkYfdjBS7rDCSMKAVm",
  "key27": "2vA9yM5NxoFpH51Li5byxEA6J7tijEfE6ocVrqr35p5hr6BQEzuevsa9ukswgy6s14CZNtFCFvpHwVuESLvQphQm",
  "key28": "56mh4VbgkZ8DsDorUezy3Fcgyj4Jxf5RHDRwGZkeeog2dCzADBGN85ch4UW8MegPVCAKiTawLrng43QtJjeTCAeu",
  "key29": "3S8tDAMaTjyBF5w13KEdVo83rFG3PgXetP8LVYEzx1Tacs8Lcwbtin7n7hwBrhvgUphej9dPtAXfmXkAPLETabWp",
  "key30": "5CvYDq4m1RCPtcw541oCWj2Ng6NYYPkFtPS32SqfH1yw6nHyqCQmF6BSWqDR9M1aemav4rfp9u2CbjGdUS6F4zVw",
  "key31": "2FxRGjdoRHsWVYLpBMCyEXAuNQzq8WvsykEy1kVC7DPKPWFQC6Nx4PgqdyyuQn8uex1ucRXHSvkop5d4AwBBmojU",
  "key32": "vNUoyFg6A6ippDJVYevS6uH7cLnUHz98J3SaMhRioWmFc1YRomaT4TUYFEnUX3XbQTQ8QCXRwFoBiYkLpsDyzxp",
  "key33": "5vBpnJ8ArEJwYZfKw4fRaz9zSCiKaroLTsYdE7EL5XWjXef3mBnr94hhjVjqNnaJQV89h3z3Px4ajZfBRFhNWrQM",
  "key34": "5rHH2Pc1bUGEy6gomqNUmUK6pDCjQpMHiF2vCFqa85kjMMrobBx3MtsGbMAYr25vkx2aJJTWJaStTjB2bxjNLqVZ",
  "key35": "5UHz9xbBqdPxGfta65uAzYwASmNYuc1AEgZUgyRN2rK5hcDfHSBfMjhqTXCr5UAgxAGG5GiZ7A5XuXjNerHawHUL",
  "key36": "22d1Jewczk8FPxUwW6vDPwQZHJdgfzyv1QMFL3zbx6RjqaUZdpjgWjCrZ8BRsqNFozRBwWXcHpeyrsaDDV9fh56o",
  "key37": "2ccruYGTZQbTz8YwCJW8z9bbJCvERfMVXWCKrey9wVeZRACpa5XwoVxNPmWTucPqzF8rAoN7ksjYtq5mu6htEQ4e",
  "key38": "5trTeSTwYfTmLBUWWe4nTWGB5r6qhqjc6tMYVCDBtHN2rS7cLPrkyfhz7PRuLuKocwHAsWuF2M3p3QUKyzkbRHcY",
  "key39": "5AkSwdXWGbRUDT6MfepjaX1eCKUuQQpWSrjsXoCyVfLFKuikx7ebn7ukzkQNBN8BeWT3TjZhaRYpnSqyzMVG62Ud",
  "key40": "3JjPgvLsBHdYQyfdAyyHGjZix8sLLkmZ2VKP5EdewiMK1NVRneyUBw6MRHqLBzedFu7h7p4b6Sgxz4bVJAfezANa",
  "key41": "5iJ8Xkopwsn4pSbBD8sJaJ8Gud5eW7uN2J4cuJga6Cfqfxr3DivFHEdVwqhepAjVeCKiARtD7R86QPhR5xBKeET",
  "key42": "3z2QsEv8VL6n2pkf7gj7EvsA2DdEgcQMs2UvgtoVwEdwa14KQwRjX7N4fWSKGgkpzSLRXfkxDwweAHWWhYtPPfty",
  "key43": "5Jx9viArQuDiLwrLYbxzuTRVP6ZUFxSQFZ2yocHB5YoXk3XbNZXGgF8TFCpFr8fuCZW29NyuMyCj2HiDJL1A4Pen",
  "key44": "337UG69ovk1mkXYbKUukq8WNENJtqLef4jGxaHxYfEpPEZm2vGMZkYTYzrV7LHUY2uK3qwTe1xHA2p4wq5m9ZqVr",
  "key45": "2kH7iUqXeNkavzxmTBCQAMefdXyR8byB7RfXKEKP5gx57Xm1cuMYwZKCCc8jePomY1tq9VYQXc5wubtTcHG1vkef",
  "key46": "w8ps25mNWnXCz9AhLVNLA4WqhUieuKauEkv3MjRtJ1fD47aAwgxqbU7836yRgSXpg3sUZ3h43zquKonpYgSuCCh",
  "key47": "62hgRDi5eyKqNTzSB4gKPHjf46sDEVYU7iStQx8HfBJBEy7obkDn7HGhi5BAJT3NwJy6ctiDFaq3XCehasxPL1J4"
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
