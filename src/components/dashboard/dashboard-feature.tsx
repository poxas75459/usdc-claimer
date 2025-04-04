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
    "3D2xRQeK7KRy4Anj3RjQtqsFvDhksTeYZBdxEqCrN9txNBYpD4NSJHyDv6jCasmQWeYBMetHZ9JUD341Hf6whKaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ug1uiixNcWsvfTLAfmXvpwfF6LuPqeo6baVJpJA82U795KYi8rA2eJ8gyaSLttNqxcViUnSuV1xnzWKW9W18txH",
  "key1": "5MSFxKaWPWsuQNnxFjiFZooA5rSv4ETPtQwQnLndMnp1X4WccaWURgs3GuNa1jZhow9Cx8vdNy3VJrMq9oSntnZv",
  "key2": "4wSgfAaV2sn8c1o2WL8dxwQgqH56N8b2CDVmKGnFqyWBQVoJmr66e5EvHguSkz7Zh1tmziHhfJ95S1MGTR9Asd4Q",
  "key3": "4KtbscPD6Wu5MjeYbencEcYBq4W75GnPMJseeeWMavGY6fLNnKtbCsxzf2aYvnAKz2cvrYee3SHRPcyvmnogjC58",
  "key4": "49NWvH9CXJ982vXtPTKhdT4S1WADGnut6bj5B9JyfrWtDDcEhf6WFWoFUUuE64rxJLmK2eKuvocvU7BkPo9r8W5q",
  "key5": "HJvGH7jeahPZvPiV9DfqZk5aPTMNd9KmyuHbqaPwaSXNECJ3EhNQ22b7nWk38pgmbSgsCwsJxNZTaR7utjkmar2",
  "key6": "2PJbQzJ3nJ9ZVRoUuQpKqKFjg6QZHoaxkMGfEjrJYZpSZKKhBndFQDgegAjGhM2AVDzu1WBA5dxGRvAeuHCYkuDB",
  "key7": "3yAGTE8WYzjtyjZWGJgJgQAeYwCBZt2PFMuKU3dAFCmRUiYDxRSZazN1iQ11rTfRQKdX34PsZiMxvoVoNwDniExD",
  "key8": "3at1CEGPoZQyHwKb4Mj4Ac7LSdNJtturbAk7hkLVqqnFuNTtCYhCGCDR1ng46qeREHT7EtQrgypVRxci3MTtrnJp",
  "key9": "65PqnaWARotAfCP8AppUCenxmdLoj24EaQx15zAsirQbknCviPw1PSyENftNva89APqRdMiiiU8YYLw6wRZ9TAQJ",
  "key10": "5QqEgzQsW8ThtukR5Pibkqs3TAVs1Bc5Mtpfx7g38mTr9amxAjGJAWnfqiEwsu5eg6M7PYLCJGtBcj4YGrPW9KJN",
  "key11": "KmWEYZsToQZsHju5M8hhGHsJ5Fc8DU8udf8NuekZPj67yZeGRixeRtW5admQnReNXMYevZoTgcUGAyVGMqTqumt",
  "key12": "K5Pjp6vxYaWLDQyLfc9H3AmqePDjoVX6bBeNfJp3Rd3hXUA9bkvqqN3MjPop7WtbuAar2XmFkyBTcn9JXKrvXe1",
  "key13": "2FP6BBZeX2BfdNh2fX3SKcetoSJwgvUnKZXPTxDVdcje7jGBmt9GRKUx5H95p9aUxVVqm7RAtpUhDt82VCsA6fgg",
  "key14": "22s8v2FShMaXRJGUoVvVfWDwXwKzMADyjsKy9HGgWsvJqPwT735n7bocCcK3iqBTTyuHb7VRDZ42PzV7WqxoLGRc",
  "key15": "4Knpv2AbqkRYdmxf6KJNcYcnzNY3Zviobf6yaZvEPr97YzvsFA5hH87m5yT1Jj4RzX8GuEVz1ehLCSJH6DSE5pEM",
  "key16": "ZbL3tejsZYfsZpqKQTf7qqLY9ZJFHdF1SrhZ5NuZrU1pTLieawvEte7JzGqHEm8VyyFXSXnGqjgFnNKT5232V8h",
  "key17": "66gNcXURua41F56pjq16XQfECPaaN56rFCGEFkpPigg88JUF8DbWVNQzc3QBou16fWUMucqxzQFYmYXpBj94Mq3w",
  "key18": "2UJpAkdRN5YGDHkj9SGhj5MWu8VJXHAsbDHb3DkH5kAS9LEt4DotWw2GVXjmLMGLhwKVc4QXGy3KFykf3G854Jn9",
  "key19": "5ubmfW8KQrpkyneR4i4TRXsstxqmNn767gNmrTYyuxPXKUA68VCLbzi3FB3ZnKD9fuZZbiXux3Chkjn5TB7jyQr",
  "key20": "3EBamgA2QDvkgxPVS3yhhwPWGdMEAfqDEtwiiuvLdY9bfM6cEFbSovgHof9JV8Cs84Caq2nuNzbUNGkASZ4gkZsr",
  "key21": "4RcQXMkUv9duiz3wyBp4HdDQeaV2WP8VizsWo76VkzTYEu55ciuewvKEJMs2rg5oSVkh4zQQdGF6odpZ16KyiP7b",
  "key22": "2Ajy6H17p3HN3qGpSHtv1Qg3YYYPVretpAdSY1rn3BHKjU3CMvqExPfZUASp2LpHQdXKox2nZScFnU3ksFoBY6u",
  "key23": "2XepuQPhzESZxjpfkiByzxx7d8UyaaTS2TiATDBwBK8K4JEEbJruwEJdn2zSttLDjo7hcgozfaazddw9gZPdheFP",
  "key24": "2BNh8ju8URxo9gVko3cxpbnUExA7oWU9a5Z2Y23iJZ3jpMAyWkPC6cSTxJa1w79kTK7746Ewwa7WyvdcHuni2B2J",
  "key25": "r8XjNRPrwGcfuCZeRQmMRtErwm8kdzUkrSGrL58WBskuDb4pbmvXaVeKkgV2NVC81ZTyNgKJNTtNujMBtnrux5F",
  "key26": "2XaUQMD5RShpjBjbcYskFp7X54iioo7x9aPnoCp4VohaL7XQDKjGuLVSRo4eDLswn3wub2EwTTpiuKCDfhxEdcr4",
  "key27": "4cMpewrhkt7WGe9u4eweCvMxAxmJiey4yagicmVMCGTpkWFwncrYox4hoxvK8uNbewJX7sQqxYhGgntJPbL7xyeQ",
  "key28": "3tsE2EP2DBRf12KSxzX8qqXFCUdvEupHEDmwsdcChC5PqHieH3LKXp3G7ji4i6JGmLJHRzzqDJhXqBzjKFuG95pN",
  "key29": "vv97MQjZ5a9jXQQixQBoMnV6CGHgiAUUabfhfzJkDsqur5dwrcWqNphx1oUQGM6KYu36mXTpUeKAkxpQ6AfXmdH",
  "key30": "316owMUeGyX88AE3Te6nR4yg8NoYeQFxPL7oEYXnNWrier5oi29X8hq8q6NTbyesrwcYDER99FAye6Cjczb5TjdX",
  "key31": "3e6EGXN4vickLcqsgMiYRCjLJiZg3GcKf4TioKPySAZ63s5Fjf3rhQEjZjr9cv7pJtSJmfeFcuKxThm4nLVCAwDQ",
  "key32": "3q56rzB2SaRYzKcgnZyY6MESYHw4YmZCpMa5KwXtVf8uogAuvoNoD9sMhqvMSGHMF1dCtuoJ99PFE7qrUMYe86fD",
  "key33": "5BsB8645JCTCno8e1mMALYbrHcwZjWyQtveXsBavzRst5b3UmiQuNfdgVfUhB8NfnrVaAv7jJzTkmSKMduYde6j3"
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
