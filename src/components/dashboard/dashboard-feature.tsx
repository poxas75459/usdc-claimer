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
    "4EtrcarQRaGtuKeWkKujpqX2PYRJCsapgkuUSk977HLJnQK5ftqwzqyUHfNdzzoTyJzSVCti2b6SPixNVCoP1C6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzXFgy26aHYYXUVG8H64zCwUSCuvbLEx9ZFtgGFLxSRxNBPpVwdyzm1w55fFs6wEaVWaPjLjJy5V8u8PgQ8Fdy3",
  "key1": "5wrGTLJFD8fQ9g2GvLcMtT5UprnbPVMNuPc8TyYC7Z9sjoK6ZvKN2ab84fdzTv5qidPC29w2YMw88NdGDmmhLnWR",
  "key2": "3F6nVZs5r5YGTZdai1FTbncxceUwczhZCukQWFCnsPrmERFEukf1ZjHhqD5fah2rUXSUFYuVm7ip4PHnh1rDiiZU",
  "key3": "3eQvaXeEhkFXN4u2sk1pCo5ZE3xsSQNcoxRxGY3x34FZtEpyrdLakynz2TksYNYhoq71mUZQTGHY6BmAh1PvJWz3",
  "key4": "98sAkAozta3d3hopecBEmMqij8z2AvG3MA3nr48xb8xDbVvxy9zCVXbbwRv4yq5924LzjxMiGXgwWT55R54U6pq",
  "key5": "2uZyNXkwfFXPtUoggyLCVfz3CUnBB8dcRgF5koEdzSCy9FBGJDahiaBJ5bTNnfNb15u1sD84BMRLMt1yNJScrQgv",
  "key6": "4dJ38nYiNxs1sdW35AypWpp6jdZa7nnc8Az9ghnkTPp5Qp36V17mU8A7akzSJ2QLgHZ9bbC21TewD61FihT8nW57",
  "key7": "5wTp3spjFszgUTqzuXFtZPbK5bWtnqPhe69VCPDk4LVLmZR65HQbaeGANWin2zuw2qH3D8zb43LRp4sMSLbi1Z8C",
  "key8": "414qJd4cDmZK8reQQxoYC4zacVHBCiCLVm2NV4PTEAVjSKjicpJ8egikEdp3iNqvWeNYejWpd6kFa3122F471C5V",
  "key9": "2j26a2N8VTPxhZfrNTPTzNVZ7NpsjDP7if3CTmwm3uy6BYLwDbcWdR1CiQt5k42GeuaJCqJ6KtSipckYwJWr7YM2",
  "key10": "5rW3PyzSfm5oVAhx4q67UkYQStnzSfBfYenWrw6ug8P5pgf17pZuuecFwbC47GPaZibCzoet1p9rfNcnRcZmE5A3",
  "key11": "5ZgxojSrdQ8avVRzHiyeWqF8Sx8LJEreCX1haQrdB2ABc9YbCBvszdwNjWVKdAap9c9w95BDeWHZUZiGDpPYZMLm",
  "key12": "oTYRzKrrQgTnDL4SRiSpqtGh7caRbuXmQsxDGiwDLPDNxSEcFjGtGnBziFBhBFDu4C4bJwM2x9LmZExB2YPWDnR",
  "key13": "5QocY38NN1ryKkucWMg2ZtJRSyz7UToJRr3jHDip1C6WiJQjAN4YCfb7aoPed6C59CDhCKefaGEtDW87Z49GDRL8",
  "key14": "5x4AiueADNcFnezqmsqYuNerCXzWgivQbdzopN3fT8n1HFLbmMTKf7FA6DSWeC7GCvrXLoLtQvHepJ9E4aMB4kmW",
  "key15": "cuHeouHVNauR4zgwu46m2Rdm4j1qeDPj3A7jWfjP38bLrJiw5WJJV5PnJkNFFaXKifks76tBVL7dR1DPsaT36n1",
  "key16": "126v3edGKZheB2avxeENtHmY4jTpgy3MF4Bvny8AGfZb1uftWmX4eLknW8gTtSmGmGVub7oYNFnPBHbSe2UxD93k",
  "key17": "svuA2RD2qxR2h1uH1bLaVfc4H7fRPDfY5uEuECmpYgtYuUTfamkrf8GSaW4fvL8f5KDhjRUjs1nr1tnC8YHUKoJ",
  "key18": "2SgHgDqedr8f5i1c7bCc5Aj98hxn8LZbnyMcW312oaA5EKET98n6gPgyBkmJDLGFxjua4XdEj593ojfJHPWdQKtp",
  "key19": "63sjhJT17NQmKHN7Ku5ie42MzkxKPNxS1g8x1cNhcWnHJpuArR5hVna8YhBterrvR733okBSeDCSL8JZq8e8TyMR",
  "key20": "25oAySvMRo7G9fp1sDWebpNVFK9B6Z6Wu8Z1FYMLYb321xyUFw3HEibKYXyKXE5s4K2UTWADrt4e9KgQeRhkP1BU",
  "key21": "xt5KZ59LH4vqUCx1CkkM2fTSw9zxNRtzDfE5AzuzHT2xHpfsPfmwLxRK9gdUfzU2FeH8qAaG81i515K1wrb8oZF",
  "key22": "gMknKLJLKxwZH9VnAAs58Htrov1X7yvzmMpttcfqgfrKnV7wL9z8btxnQ8bsUoRHKwsH22HdWeojUk4eyY5H2uF",
  "key23": "MEosEC6T4MXfPbpvFGe8SV63hBFsNPZWV2ZE8iEujCWBeQboi3cAxm9piH1NFnsVUtRjpLEBgAq2p5Sm4oYsz9X",
  "key24": "3LokbZ8ASsRBw3DZaSqawH6LQQijyyFG1i3sh9cp6nNaAFXbeZKFssAPZdu2psZpBx49Y26Rk4tQitsddxLWbD2r",
  "key25": "5LmkwazZw5gwqAZaupgVJpUXtEiSx4zZHeYVgmatoZL9poqXgDQmZojZyGsdveo2fs9vST74mZFxLbxBxJRRg4KQ",
  "key26": "3tXG1g97okVhuXYfdQKRGoYjwktWCmxPFb2V36HYASvsoyoD9o7NJ314BozN2M7ErKxNRkArsFHGaqkn2LfH4CU2",
  "key27": "xJ89icDjSWrmcau1bi3YfFMGUNNq2PaHCsXJv3hju7nL7ge1J9VdfAmqejT5HgWyjaN9vx74xm61powaAsAZ8Br",
  "key28": "3uLh7nfZECw2HZHvVFRYCBwPwtnr2qxLHUG4DudUuozoCfggyBhYHEsBybWvL3sgDmjSwoq3ugpAosq6xu1TKeb3",
  "key29": "2Z1T4vrfqgK6dmmnKb63DANfEdmuaKaDxwLp8hUEVWV3JdyEGL2qb4QqVXSUxDsPzUz3eupFq4vmHKnPDRwSWLA2",
  "key30": "4HZirmVqhiUw2eAmHVmxh7xKEgCtdEon2Np1NpvGPXtrU4uqkVo74qVcHFdgD4v4kBu6eXKpv9VVCA1XsaYtBJMh",
  "key31": "3husTBkqX12g38xumCytnDhg2dciAPCUE94cz94pepdXPP56Aryy6efNjT8Hn9yDdnH569SS5tchfVzy72f9PUPh"
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
