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
    "37SvTD4S63wXD72hnaBmmCe3X7GHK7g4Y1Q577RdFV1HAgC7PBApDhqrRKj78wtFFBXTW2fPg9uB5j1rziapF315"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vxGr3ogqmatwk3zsbKRF6r7reNqRPx3SdVUsTcJzsBAuWsVuMtKaVp9Xtozdtse5BzMCtxQ4fgMxyFmaMksDY9",
  "key1": "4hUgBHVYcyRBQZD1heQgGeMUEs9zZERdX6pwcogGcbjqXaAXKywbSLx5MkrxFEMyzmcYXxeBPWTjiBeQqLf3U9RH",
  "key2": "zGkqcyWDpRCYqHRiasGB1DvfK1cJwdmUdy4k5nHEXyo5Eqg1e44fKdLPKS7AnCwrGu7CVvR4E6to55gT9tEHvnG",
  "key3": "5s7c9Xz8NSzb5GTQof5JiEbEscDzpSZPUfUBpMrVUjLd57T82oqti8nHaPGd8EkrpHABjqrnETHbj5MeE3VmxqND",
  "key4": "4WDNozvk98tQyWpKPgSoM2chHxck6gvBgZt5W1uBkiZV47gRDAThoTk2btDTY5QBQUpYKaVz2vFRBjaDDXJrZCqH",
  "key5": "4h1HkLWy7ZJD2wcqSBv4F5a9MSrSeHvAGV6nKArkW7K98yDv7ZqTWMFBhGG4PcNzwUF5HpKaY2koGMDz25U35C6f",
  "key6": "455LaWZY5Bj19J8cVtuqLxzPba3c1dL52496b49dEDNFYZxrHBWcnnCaiGgrzhbcZ4cge4okKW2bX4NBPXQpSMYe",
  "key7": "5E5BsdLT9NJrMKMeh3xdhs4Tb79JzZbPaBz3sqmnRTiD1oqdbN7JcjDuZPSzTJ9rA9z84FKEXZZ2owumzhuQJ3c5",
  "key8": "61rsA5rVg1mDhWmAjiLZbo3LTNhYa7vzK8kw5As1CfhmwhWp9vYq7PL3mcDhqW4CS1rX3qV3N4f4aM9uRvazT9eF",
  "key9": "UHHCeRtC9kK5D76Zh2xPc7SYnpRwjWbjRGcbCDD8hJSR7zpqdW3DuXz2Uar8wyFFNTHJfwWwC5ehBAD7z2VFMu1",
  "key10": "2hUogirCta7edPdaAgsAwQEYgV1syVs9wv8zRMEJDCb9VzquhwKYuSU57tL4EMNRZVDTRPFHUyowmRhpJpr1wAd3",
  "key11": "43fZ1VzrP3tt9qdXBt4yb8XchFFuZBY32mATEiKHRWw8GhTjBGN84nY1HnRExc77fSh1wAnrip2nQgAgepEqi2U3",
  "key12": "m6DoKG5xcXVwXHpx8mw6J6nZif4fQdN5xTRY6aiM9s2hgrT4Ky9KXtSqqyAZi2b94Bav7DyWHQV2f3eaCphmcAu",
  "key13": "3px5exyzmvqTV476LeeYnSdcf4Nu3TWgGrWfw8C77Bf61xSjG16mPLfPywosX6u3X3XTJDHV41o7iM9pumoikTtE",
  "key14": "4eGCJtQt3iiVRceuGpoQ9wUTL9hXazar1ZSTawUQCiCWyTT4BBPJnenR6ae1xttQDAuQLGoJpqanAtopfmML7ES3",
  "key15": "2J1nX9DgLDYosWT6jGMUkjXCcyWjLxuXUKiwFCV8vVbxG6hT54k1xUXRT2dEnT2KE4Qr3rHZPED5XPrgcmxeiWa2",
  "key16": "4By4feSGtjFq6VHCD8DH4gSz63Wu6RECBs5NhJN97VisEL3tffiLNtezUocGfwBfFwoMegEyefsYJ4rsC3UfWSs4",
  "key17": "KnfLWEGccR2HnmXNRj5KbDomAHz2d9zyAeQgH5Vvo1SenfLc7zqohQGsXBdDwrnKrAnpVz8Z1wNCBakAfeodRzm",
  "key18": "2nWA5da3V39HmhYJjq1JbL6HenEHbwAepjpYbKwnoNPxYeLon24jykfNkw4TiP3KkR9VcxYevzoHsQuqRbam3RZL",
  "key19": "LHA4JeicAjVDM58eDfgXUDY8Zg9bkzzGA1y5rsz59GoXgh7NkJdTzMhDru1ZY99h87cRu3zTVk5PxjeP3a6aUYM",
  "key20": "RFwWQtm4wvFdUmCuHd7g1KtoTjpnRKz8H9J8sHWE6DxuNS7n6JT45TjcymDCbXLaoj4Rc35CD7STTDMZTfxBEww",
  "key21": "54uBJYTdF1KRANR9e4YwoXx2jgo6xUYZzqAM34fSj8tkfeofV7pC3b2LZHxSfQN9rKQJJeRThBwFaq2P8j5GMmzK",
  "key22": "4uLWPLYgmtCX9jFzfmUVP95XiFwk3svNyq7D3PTFX7k41vVzv5UBLgTof8kz4ArcayF1Q5tPZUMKRcwafpK24ucU",
  "key23": "3AJ7y3FLDd73iice6kMZi8RanjWyQKU4XzvVnSMZqYDm7ztCf2jxSryGW1cYxH2jqnRnyKMtC4TnjBKL3xJwjsKQ",
  "key24": "4ofAQGmiYYiaWxjgn8Bnwj4EJjVLdJQJuXoUQaanYQbUiCNy4QDcF8eNq6JJut7xEjNDonkVZfhCKMnSo3qxyBbx",
  "key25": "3Lmr72VUrTomeTopv8grT2fPejJM4HNwUFGL7woYjD5Q87XeN9uwaFGUq1bkkRQGkoWrM6Mt34xJnfGWXwUWGDGB",
  "key26": "5dtxD1fLk3N3DazvnoQwZpteUXkyqQvZq9eHuAUg9oKjzyeKYZg2USD7fDKNL1AYzprRswqmiWxGm2Xw1z2ErzV7",
  "key27": "ZfzoN3WLfTSSbS9D3YzafBjabmZR2oKaey3uaympBqVaSaeDXCurFQc6CYeno8z5LtbXrK8Qw23YsM8ZnCMAvGs",
  "key28": "3m3KE9YfjyDrfgdVCkGgCBThm4F5KYYQ1TjKfTb9yowD2NiiVxrezLyp9GU8tYFgQNMqNuipMjq8wgvt16DWHxgU",
  "key29": "51gZ4f8VzVKjxxewtHod2C14h1VMRFnJVo8jjX2UzTQzeDrAu5xe1kMWNREXZ9UP5B6dVp8GQGbDwm71n1jnfngn",
  "key30": "e81RGHbx9bDan7sHWp9g7SwzmFjJz2WseNJrvssW7Jq1Vv1SkJnMnfyGGvhrspnBzmyux7QKzNckzoNbRvLE64E",
  "key31": "49zxCty5p36zmLhit5n66c5xvXGdvmBMRcXjDVvELRau6tWph5uHanUF5kFw6pBG6aLDYLF2Wc2w2H4vWtNzsYAa",
  "key32": "3W55QX2oY3px7iYWyubUUE7tdviSedZ5YHa4FZADb2H87kGxKcrHsuKu3MNeVxYXhBq9Q2rTy2Jt2ckF2hPhEgpH",
  "key33": "4aw1oy8ZxnZU7K35sN6LMGhp4t5FhA7icKDJ3rBqjTBK2MLAXFu6WW29dazP5Rqn4QixKW8nmhpdA9KudsnPV6NY",
  "key34": "34U8X6w3dnWzXbyAzpbKrgA5t85meG4xfzGYeWh6tfq69XtbMsQkfMLf3c1AEiJAxGHtyPkmNKsbK8MNqkEUU9DY",
  "key35": "2dSKekWLLMba8hCsaNy93crffn3PD5ooHAvpNuBybYT19ubq8PEVPf1msEHWSihJ3PdoPAJo5saTBSgQ3Qifx21M",
  "key36": "4gCau7xu9fcgKwn2SmCQxatkVXyveTq5wiAytwbKSP98BGvQd3beNEeAPjzKokCRZwKSsbArYdkz4YstQQcGZ1gr",
  "key37": "4C84jrpApUhi7kf9y2VgeBHowt9YnzJ45AYmcSTUydW1CmWN4yWjtniykd9ZPUeqHP1LTsQ7pChFLrpJS6VqxGqy",
  "key38": "3JbWg1Xwmv9kDhG4eFcDVfDmbyrVPwGDoDQwbbAtrkbNuhc654ferBTJ3ZwKuUAaEzAiZtFWhFUjhnRFSWBWJaMa",
  "key39": "4TwFZsR2u7JUucSfZLo1DD7sSwXLHWBYsQGTZ7NLGKo9n8deEeY8teidLM6cHpRKBjWwXs9x8FmwNZmedP14i628",
  "key40": "4MU2v5szGnHFr8rgHpaCR1VzNPpAS6Gum6ggofQWwa1jsYM9dF38573utXbhzP8jsDWY2U27PrzKbcDtCCRASiTb",
  "key41": "2xRF9ERqob3XZADRPfgDErCZaZn7FPtfHaUqaxaqGcJoEkaF8KWzgLRe2AX2BGeFDFFzSLqE7N4JsD5B8oMQxp24"
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
