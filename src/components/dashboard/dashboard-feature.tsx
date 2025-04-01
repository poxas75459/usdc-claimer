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
    "51RePBNWJTzCv6u8KwnPqEqt8Uf7MNbeLYQKhDyexAPtyeRSSmiyqN6q1J8bryatRHD2E4kaxjk3tTYjbZ2RBmKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aVwMS1LiRc5eUEGPrEfCbmNr6t7VNqoea3BPKKzFokVgEyWsanaPhjwVe3RLuBd7YVBS4om9p2tp5sNLqgsv8ga",
  "key1": "4E8z6TnJ5fqBJT1GSTCJYkyT4Xqr1MxkRKN6Uyr14dSPRa82U8MKrpTkkdkGCFXwgHXUr8C1YqV6t4UjQ9YJnwSf",
  "key2": "38QAXiJoQiuFVyqCzm5h3YsjMQCmkLmQiE7gY3ztiSkvYyvfakaJRaRFgiznWdmkPoNiFUzw8QHS4eUBgEozBwyL",
  "key3": "4hWdyRQ91idofgVbpF38176SH1nZ9mVuLjqV8aiqHV2a8Zkcuubqn8eczMxvGJKfBKg4LqkLcika5Gwx6sMcS85s",
  "key4": "2heGp3RmPaEGSQUxRmNCmwR8w8vt4nams4Kw1Hk8L8sTBh11mBwaM52AQWRK3YXnQ5jaoNhETDjY3LqUqiJ62Jot",
  "key5": "2AYntudpqGvArH1BMLHL9fnbmL96uqJsnehb6voXQ7N2r7kGjv6cSHbLTqE6eLCmmRtVnyHLHN1ffhiKzQj9rCvW",
  "key6": "44nsjRMiQ4oXSNQoXLVHQQBMjvYZm8L19xkn1Zi1GihUew6B44HaxLeQhCw3YFsKTg6B3Z2EW1qQ7cHXGxMy4qrr",
  "key7": "2gKpfL59WyMVBfbY9Maixtx33quceQftMCE6mbvhzqt7rfkoPA6wYWLM2sS4hXpeMZP2RWqRp43Eqrq7srXzxZbb",
  "key8": "3qQEEEsh24mNb8eLPiiSbkw5j7qd1tnTaxzizYpE3CpbEeLLDkv9ftbXxcRHbSArsHWJLHqB8LeYnbnSqCoUQ54C",
  "key9": "2ecmNDwpt9P7SqrbaRT4AVekBWn1n5o6BSRPTUCeXNEb2rciLiV9Yt9JitiXS2TBmAmih84SB68bM27ExJiMrE6o",
  "key10": "jWNcbcHMeKDkJMa3Jwwzg5TBY4xHNh7kFWkPvt3sEZRTGEJ2gxbYGKcbjzqu3kAjicQeqFDsKVuAUbbEgcUhaoy",
  "key11": "3C1NCeap85f8NTGyocwexXbhQ23uWDi5Ecqa54zcRrHfdH7JZ2KVq6ybSozyfHx6Zocz9MgaEz83MVBMEJcVF7pd",
  "key12": "7yYzZtjDdRPaLJTg5Mn8E3EUF4ypFNTqeuMRny7KNqttx9vJezryHLhTrzK3pHhoABuk2QjGSyf8UVQDkBUKxfP",
  "key13": "37A4jTYBZgvdKMSq54wCdFQmjKJU1zUAPsJW3Ex56Pj5vvnmpNGHcrGdZWpYHYYJyvJ15vAC1Nk2L45AzwyUAZoi",
  "key14": "2f99ePrGuyiWGBVvghuTE4kcZKdnHBdMomZ2d3noXj6miLzWBXirZGq56aanU7EN1D1FULE8DV9zsVJ7nT6Bg734",
  "key15": "aM8jkkFsSrJgnNrastXuD3MVLREgMDEGmrjVfnT1GkXoeoCUyep3QCrG9XFGPNgxh9TWmkRTpbA2GWbHBf6C6pc",
  "key16": "225rpkq5rPK8PzjMo8fVh1wxrURsbg2Cj9KqhPbK3xVmRCV41b1K4VUfPMTs1sN15QNs5naJiixQzeD8wbWX8xTq",
  "key17": "4pQKYHzojC6ymKcb48ewsVidTB36FXLDy5iRviytG113gkPQAtxqeSVXc3a6Q7iwGarSdKsZ77XGnz6YnEbvFiyi",
  "key18": "5XpJpHNwpt5QNhrsrfbua9m2nw4jqGu5ejeZ1oaKUceZfVk4X4udXJBvN1z7Rb91GrqEqo7EqWE8w8JZn3JNomNY",
  "key19": "4AerEQYnCN3gyk8pgNq9qGdCe6iNgGxzVYXZ1jsAJBH5Krx8vb7dZkZ9kQjsLeB4aKnkCt1UgexkB93ChEd9PGQL",
  "key20": "62Jq3FbSE7gVzRpiPkp26ASMmWuW9FE73UASCobbqtsYSu4mtc4SeVyMyZK58smsLbR19YVpNMqzpsCkoHKQGvgg",
  "key21": "34K6zBqbmaPAwbGFhCpUfofecUofdwzP4CG64xhQdu6noD2Zqis2AW2av2NKDurmdKYRUdUUXEEkd6kiqYaVmYDB",
  "key22": "2DJ2ycxqRG47qHreLns4wXFP4RWEeJVuwNSrBPkEeXcqnFFXfEvwv1x61Ax4hSZhkXhCHthGugVFWrj6ZDgpKfBs",
  "key23": "3SWYgMNn8nW3AxvkaL9xkPPK1jc1TYGt454aNu5qq2QhezuyKJoQxiC9BMsz1BE1K71ni9t8DAjGgWvSCdXWCcRS",
  "key24": "4VJwceG7VyeAKwnfbWH4GgD2sGvED2QXT59YUfxGLtm1D2QhMiFZktzEV2JA3yrzauWxbNUjau3KHWAU1JXHtkxH",
  "key25": "ogVaQDhgbHHANcDUGkQdg8XrL4zTf3M4Ap5ddRXBuoxFsdGAhEbTaYs1uPn3unXsSYnn4tJfzXNk5SdgoYdaenP",
  "key26": "4JiBsbzjbS5qhiYdRsMERHwjtSaxZCcjnUJcBmY3bp8HfWyPAkqrzqouhx5hrNTmUrjDsu17Bf2qH8DatVUS8MFT",
  "key27": "2L9x4WciXccawgB2z5PubWa5JfaqzucHsKDVPRhT9NeeXBgE9c7QBVsgbAnp3DtyHRcQvdCarvLq9RhMy8aJ6dit",
  "key28": "3Ztteq7xWZRYJ3iEEcA4m5wURhhqRRkVf1ZG8qJXuL8jN87Ba3h4T8xZk3GFPVcBapZXToGpe7G4K5CC2dmrwXdG"
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
