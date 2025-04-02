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
    "34cr1s3ETKAL3Azmr3fbQsxbQh1QivHVMJcFp1vhSqxVohMHBewx812fPG8SuvkH3Mry1mNp9qCY1yfHSAUE37wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jLgshUQyJCx8NuxfHCt1CNAGnPLT6NYCHLV1DuBYZyZmk6JJfrXTF9vCNmb5fG9tSoVu2xfsmXcJpbfPPUzadQh",
  "key1": "2hxG9nwG2QfEsaK3eAdb96zQQWdNUmHmRpzDUtaRhqiCfrcLRPkUR7xa4UQQ4CZ3qB7TmH4LAfoZvLmmuhtJq9mT",
  "key2": "4zKhPCgfizzuVL3MtaaYEbuP3W1QRv9YFcPcke22aH8N1kdwbaUwpEdaEHGAMgnziziWatMcfYkF1EMq4wf8TusH",
  "key3": "4TeEu7guVmq3Esvwxf57Rhre6qxnCqkCXiDv3m3LingpedC2sTSshnYxqvDC26cnHM9asZbZyF14uhu4rUwyfNSa",
  "key4": "owiUM9PY4xgY5sEtHXYAvL4DPPskdsBaJXxqn9H8ugybCjT14L26C66VEf2cQahW9a3FNAVcensetYvQqUjwkpc",
  "key5": "3y5jVH2jrMGgEYWFwkafXj4YcGguSVXBTQz2fM2F8kUPEaBdKRhHu7FroU8PXqtvY5HmYAt6FngctU8FEwDwupvE",
  "key6": "3d4rddXS3sVr7E6zrjEVXESxFr9BMpEcgfU2ZTwWChznE8NSmPUoBxsQHVoTQV9S6NsN7VAEmKzdmGqUEt6BwMCn",
  "key7": "3usTRdB2efxfqYR66EmAMUjUUbpHDHzAaarbQpGbgbQvQwVL2VSHe3tFpJYjpY3mGLctUNqtUAYyKAhBKWELhqPF",
  "key8": "5raZ8nh74kANa7rpkSgNc232MSbz2r3VpFLAcgJK7oikHF26bFkW2pjBLiUJxwho4LpHVRm2ZPu6yvkgxVweAjxv",
  "key9": "2pZyd9Eobkz5HvAPU91Wsvm2PwGuf1YnHCx7fdrdVcjJBvgdZiJd68q3mf1RWCLScsAJq6meBMFtg4RY4zUheJv7",
  "key10": "42GStbMoEEkmbM3zWVUoYx6ohsMobFscYW8YYx7J1JJegdCVszP3oHiidZ5CYDKBKxebnkbqqbzEi43kHMLFVmMH",
  "key11": "4DRRfLKBYmPynFi3rXPX11kcoiEz6A75GywSJPm8R9DhTMLfTS3QjNeDGFAcNG8Xwhy4qSyJXWd8Daq4KwG1MBod",
  "key12": "4m5AaMf7wSmN6wj54LsyV9z6PmZiPjri7HvxG8KwnsqbewyfKjNhwP9Kf1Cjc9u5eF6xsh6ubq2zyHAEUuTT7SXc",
  "key13": "5YYetfP7vhdELt9LueQDmCjEp15M4TYh1rGqSZRhwNqyUBDM4RYvbUVJEMhdmaWMY4cVUiTM58mk8T3w6BWwt62z",
  "key14": "3UrJzzCCkww9QNzHjChX55PuS5y5Vu6EJjF7SnY3DQfGNgtUT6ExvSd9QnAnrFmH4kGha3NUWrEbCZXd1kWpPGyW",
  "key15": "5XsPPXdDVdMtbNYZFFruLCJQ6J8PB33x1NYDxoLr6GfUMKAQrAMdVSULNUxEZ2hjn6AZ6TqHX3brpWz1F8r6fTLR",
  "key16": "SCRa74VVybGLJ56n6NGgifUSFqfGgssVHPLkt6NKmhu6oXAeCxgGy7VLCh8v6MoR715Vdymk7GYdUv2N6Jswt7R",
  "key17": "59nNSQ4dwNyd9vn2USRQbUF6SdHyuwxsqyYgxVamxTVMWSwytEPzaJMmm8gx5RWBtztgLeaYvkWLN4cGwDexgj8D",
  "key18": "54uiGnbfQfAm6EgvsQwfoFoQYZtvNfvjs4GrzxZ9iaXo6j7RitCHoEZxNFMeXRym8mjv5vV28hKrHHbP2aw57Sy6",
  "key19": "5E3Mf7HVn6fqpKEscMUayv9HVtxbpbWkR1zGWv26usy75dhic3wbyrP6ebrBdwXQvGneuUZ2ckWbHPHmHUHuxK5L",
  "key20": "42jnuGKFEwFY3Ym4kNdrE2gSERYgFB7gbCtm5PrCp2SZnVmHSfTYAQpqa779C3QzokGkSy646ffYieNxY3Ef41P4",
  "key21": "u72vjR3a8tFzex7S1FPFewh1jckJUbzypsJUT3zCKEZsHZ9cB4kB9E2JxCJd3oiVopXexazQLE4wKGs7qt6z2CV",
  "key22": "2UTBfdqiyELwwXXtmuv5UFdm1pBWMJ5vkoLsynV4s4EtNwtaAg4ZCnGXGsBgH3zWjPmEy1ESLB7ojA2QttiNGrRy",
  "key23": "5ErMpXi954kZ4VByrfZ8ohEAJWoWmnSrPV5fMk4MTW1Ec3htrWt7TyjLi6ZSZwsEeDeod2DVYjQ7F2XN7CdLbAoM",
  "key24": "2RsvprwvG3yTQN4xjUvtT578C57WVZ3nUtY2ciGfyFcYGw8dUNMToRfH9roYyKkk2GP8DsVT2U6HDEmUkQoKDpjX",
  "key25": "4X63mXpUKSBsocG1sYtBLEft7cjh7SqE5YRAgBoekYgB61heysFksw2bTqPu9vrmJdVLPEb515znNSNVwST9LLP3",
  "key26": "2yFyPhkyYyjYYDFXP7yqUKW8VV4rW99ERJC69qjk14Tw7Psc3mdCZhE2i7CTNHmu21a1WDZX2bGEyKF8rAq23koF",
  "key27": "4FX9MYMkFxcqWYEDxCKDYHTkadqmgeMHeGVgid6HghHYTxkTA8S7e3mBz8uZn7DJxPd5LEK9MB2qQAPqFEtbVbpd",
  "key28": "5u3y5N4Tgc649XQkSUHcsmWuZA6hn1H9YUs9tzAXh3FitpiYKQF6Yt7UUrN41mka8ezRnQf8naQbHi2ziVPBgc7q",
  "key29": "5u3uuD9gyixFW9389LNnzcaz9rA8m4foWo2yXims5ybrJGuCPM8ow7rAyMjsn8iCv9XSmKAd5pEMBSAyqdvrGLRS",
  "key30": "GhJdz5B1CFcUS8p36DEHkGB2CM9jS1PBMRGfH4BsAzXknFrN1HnXddQgDSXibXue44x5bpFrv8WPi1GBbi3LW27",
  "key31": "5V5kdYQKyjev24Eopw8aastxNM9ANtZuAd3eSf255JbTb49G9B5V1KPnHpfGbEqTM5VjuVcxJEBegTjmFoYQyqR6",
  "key32": "4VCgXVbo9nvpjK9J1ZPRRF7kudYSwFi2gHMkHju2Ktn7YV6m6rnunLQ8dGV6iDNZEBzJpnchu346ZUXDuxi5SsHj",
  "key33": "2BT3Cce2eS2BmuQb5enMiFTKSxgrtwvFcRkrM7Rc1c3Fefoah4qzDb9o7RWG3hD8mvxUbawVDhdhZhRvg6YiaPwZ",
  "key34": "5uuqo7yZmAzNPKj7Tq3nm9wzHRTXdupmYaJAst9Fzm8JVY52V3nSGrYAwmVtTKLBzUvk3CwUcQ1voJqGEu2Hex1W",
  "key35": "V27NwY83zrw2rEnw4769BzMf66UFRzhTehUvh7JQy5DQybbrevmAb26QzV21T27U2hiPZVDybiDvMTLrj1kUoc6"
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
