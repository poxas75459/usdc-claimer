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
    "4BqLVwnJcoKecmZEDRGbHBi5EfK9R9f9XNyLpjx211RHaEPvSU6S18vUQ1grMm8jCjKbF15vHEuZCevoFiKwUAGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDzt9kCjxsdxmKUt1FLAnDPXpjUynfuPWCW3wf3RoHjCXf53EWrhNF1iLLUBpdEUqGN3uQYE8dhqmNptVUVHDQq",
  "key1": "5Fu4TJFzrUodsYaue93mkYz2tPpmBjw1vDkCCY42wWEuoE288JLmYs4maspuDs7MqdHjp7nTZpVrD62ca4SWDBHe",
  "key2": "5g6KJgBW5N9ruWYFDnNHQLGgkgz9hoFUgnxA69BWQZcKaUvpHNtAUQxTwjsVaFAk4PkxLzTZpLzCqJjXhGzKhGjP",
  "key3": "58YEQNpiTdZibTf1WkrjGppnamG5X77zPtQqn5eeV3zjQYyTfKGa9PaF45LtmiUBJX7SYj6DQ9eEr9eUh9KNFpH5",
  "key4": "2chJvs8obFbhNCm6oGHoWbcAe6AjLmzd78jPjPJafodk2Yu9DBL2nSY3BwdfnP7aqLwmaz9DRDL3kqJusmv7mN5i",
  "key5": "4yQLYSw5GjN14u6yP5zUhTGvLbiiZ8bKpFumbj5ga6bHegu2SfGJ2HM1eVmb7Q1vBFEqGDma4U2MaXawQfqWmC1o",
  "key6": "feftLM2vt6X4Cvfotku1hzvwCykKcY6WYdPRn1TiVzqunWowdUDkQRr6UfNMt9NNYaPhibc7jsgswCTsKkuRsxZ",
  "key7": "DmZJ6FcdysgauLUde5kfiEzF3JgSiMtFrgBXV5WSSX2zEhz3nVu9pgWnT2bAEm3yuV9bSdr2E3DQN63e8Yjgkwp",
  "key8": "2A4bWYgXp5JbMKVnjKBnSqNU1zzw28CV8QgAUhp9533Dqoq6eWcRQbhYVVatF9MUHcCp6ANaUhcYZtZ3pKDYRW8A",
  "key9": "5JB5VnHWtiJeijkjyt2vpqhsUMahER5XDu4S14nfLVBXy14dvzwPNNeanTsqNfwceeP78kz6k3xCaEprLHbw8soL",
  "key10": "zrAejPLbidExHTRQzP5Wpe6SRrp1AQK2DcN2n5Kjf3GEP1K5bKLKBqexw79SdZTmwxtkCP8hUVJpf8pgqjpK3c9",
  "key11": "679e9pR5DS8c57aBfGt97N6qvSwUwPQ55o4yiwv1Fm3HjRzA68AJbHhJVd9DWvtQ3GaNwjAsfFqAXcEEkGiAumV3",
  "key12": "5nTuoaYHxp1qXi715KXbRW8hgJhcXro5KWVS2A9K6SyD57AAH5j8J7j3Jw571hFa6PhqSFAFwF5SShYtcocQSh49",
  "key13": "h5twwgXqQNGyGLryxfiurmF7YoR13oFpnYsUqehteK1Ah99Vk6S6V5qgy1qqF4EanUuTUoexZoXkPXKy8WofQ2W",
  "key14": "38QHaPL97duBjkedYvobNgxjquSn9kYHDScTb9z8mASTms9uBmEaPLeZpyWvmk5gqR5G5mLXHHPFF2PZ5qnG68u2",
  "key15": "48vSSCokmyVt8fZLaZaYgvUWdhQuB1w8DKCSn8QUoF6EEn4UFm2yHrTTdp5Ny6kgMFE75nsJsYkTxYDNncGhreKq",
  "key16": "4P94mpjABLYiggcbvXEWWoFfm1o7UjmEXAWGJSE1evWJdPxgs2fqAaCXjtT3FWbhU2Skw8g1P5CcweFqZ2RvJJKF",
  "key17": "i1R4HKZAU25mTxAbB7BiWD9oky8fbQDZodX6j12PuJYJsuxRjGmF9gvhNHcn777ATJTu4V5WThtGdp8Jzyvxfi3",
  "key18": "2NEw6xo353zD2nke1YPUCD4iDiMAVotSwBSsnyzWJFNoH3NBsa1yZQasZLNmambsBhFAzpZmN3VE3h6UMSXiL2Wq",
  "key19": "64pUhB7vSn6tFyWQonv7McTNYi3EWEMwc84ecgtwV4WcbCxTM56XMnmRUoLdCbXxN3UhYVZepgrGVQzVJZTa6Qpp",
  "key20": "2xDKuUQXsdyJzi2iUTUGhhTnXzqi9deJka6uJiDSJuVSkJMhCte3P1ixTqZZxJJYh45De9appezjzeUDZ4DDDUt3",
  "key21": "4nQ68XfwVyeRCo9FELzDTc71yhBupk4xUZitrTydYHL9V1hAr9wUJmRsnjD6UX9WNKqXGrEECMU3s3A1H2e4FQ31",
  "key22": "5bVZFSci4fjK3QK1VhF1TYeBZpJAZwoiBwfRat19X8sYKZyp6PDAG16pGSrd5jRREagwGgZGeMYrSse6F1z6ZAhe",
  "key23": "3kkRjJzcbQGBW8UetBokqVbg6qSZcALMdcuH5D6g28MDshasADDmCtCpYtBE8Q5F3LbtqsYTE1uMK27dfJ5s4Jz5",
  "key24": "2q7d3HS3fv5zHmR3ZwQ9AhKBgfs1Jy99FernMShFGMCbXkLe4RoNoEtVM3kEGF7Akb3iy7aWt3Tcd8jrmq5djYZm",
  "key25": "2jYu91HsTVPC5Wi4xBFKzh5VTvAFscuSKyYAMCphNTZkVh5w2hir34gQehv1CgkJbcQ9tGgAP4Rrm8LcwD1zsmFB",
  "key26": "Ei2oSc3PNBrN9EytNdmtgCDtR9Nd1C6JuSKhW4x23yumunHnXpByxrkRcVdS51n3mJd6P2WL68NCizyyz7yLQrx",
  "key27": "4T8M3W43xpfbmqNNTVuudTjthPd6TrMDCQpN6ep7pVCoQa4WtjL2KBzXCcNHzB9ruRM7vtSP7vhDQDvx5iymYPij",
  "key28": "4ZvgG3pG9dtxb9pgGz2hv6yExB4mjT1GcwXo7VddBp1bdv2KKcxXsvNFeECDsPxqAATxXw9zu9mJ7ertuPMhXDzE",
  "key29": "4bPg3neB3vSdV1m9FfC3C2z5HsbsxQYPnhubBAFhgXMRz8KcfMKVv7C1B8T82VCdVTJX42hmmFFPEenedAaWavsA",
  "key30": "27LvyZWXKnZQffWQ4nUMzdXt7otUVvnQ1TTJCuC4zZzku6PoL8NGaBMXqNJNHcF15PEhMLuQRoEBaV2GjcJeiDfY",
  "key31": "4EMf1jEz2883Rai56FgYDHYbdHAT3J7aBbcEgrvFRe7j1KGYSatJ93F57igwwAg6tjTqnTihdSmW99rLSap5SiGC",
  "key32": "2UREGRYuTP7PZPKCz47DLEBjoeQRF7xnDZ6BUWpqjmQRaRfXPsLmujQrYRUKpeiKJ5rW56waEsKz2vtJyrXN86Ja",
  "key33": "2mMSsHfUnd1fnm2kMUECn9iGf6jK83LkN2pJX94NPce9UpGEAnSbvB13U1WX9BYRFkM27Wd3ryocdiYakf9GXgwH",
  "key34": "Zs1ZZ6nxvVaUPRr5epkY7R9uinis9dfj7YsnwbDPWZoseC5imEJJYt9z8WkxesAF2HgABFXW27dKGicGdQnSFQT",
  "key35": "37vrMcAUjeYXw1gGQb2S4iT3MB4FHErrnPKhD2rWk6mB25MTRJWyZidn69o3746NZmfXUc2QN4ZuWxAzdq2LTMsz",
  "key36": "CiZsYvUrQWT3PD7nazDht8PA2y4oj97TGXjKqN4Ty85un7R4eg7QrUXhqC3gYe5McaHQSRUsePCP1GJrsJHb5FB",
  "key37": "3DYiH3A44kbAfJRNvFM1zpMVTTteeqh8xQhQfFSFhKnLaH6QuFdkuZNwU3jAgBW6pVdAThu49duYGP6cMGkUpfGj",
  "key38": "2BmncD7bCipN5XwtQcZpCTQFNe5yZxEsAfPT5gUxxB7LLTJt7zNrotihHQSUrVuvpzDmRqPXQEb3eui9dq9JFfKh",
  "key39": "65pj9xq8zCTkR5WwPdyk9TyJWiDpdhpAiRzfQk9U7R1VPskhR8tNjW2yUTuwDHrYMRWrAYLVhh4jCDYS2iSqPymX",
  "key40": "5xNhy5rHkgqH6bDmG6yzmkncxVqTz9L7a46idATgvMKKZaxwRPit8P6trG5aaftLGpVnrvwT3Nucuv5bMBtWifQf",
  "key41": "38KZx2wrCKaANr8hpNF8KVMdmkakgne1TkYAMvYkYDSeJ9grvXA85HXQCKSVu4Z1TvoN3rzxuCVMeSs3hp3DHzfR",
  "key42": "2yy4rRKkr4SVFWUcewddcujZNiYMYrz7s1cmuHJMSAAV6ifpJTFuqhiL4peFXWqa8mjc81cJXNxLDYhpiahuTpy",
  "key43": "4z8K3UMbCmSLv46PrrFPaWsdWjRRgLrCGhaDYJGezHZNoh7mprNfkBgX7deYvikYzR74ZPNLnnkKn1wrkWvVTgys",
  "key44": "5udktB3uDtzvQ9wR1R4Xc2rH7BHbfkC9fAsecy6iS97gBxGoQMtvM5NSrZVB34euLUGBoTmUULyEUeGLtMNcLZjZ",
  "key45": "4vbghucnBxrBVYXEmLW3yXTwWbCxcjgNeWFe9KSj8CVDJx5421uNoL5bxxG1iRyQ1eStk4MpXv5oKzrrYjKjwsBB"
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
