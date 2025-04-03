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
    "4y7a8XgYeT38Wr7MbK2NLsUiHHsnLMe3H3jMNvx2sHqQ6aH5AevSn9mSX7BrCV2dzg1QxhHc8Zst8qBt1avCJXFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdWquX3qX9jhvxoYSpSmuEPhAkMy5JtvYpSCEQzpzZGUmhhbb9GvzJ9iv2fdsDjQMBTGssDYXCvr5av6q6WST7a",
  "key1": "2kLzqR8kHpPGS5xwmrRZFtMpNdnErhmowSFf8EZEZ22hVW6S4wVHhgmjCM5uEbS3EALuLk6YXxjSAzHz1omRSDFL",
  "key2": "4o8FcGyVVpEbfxi3y8aPUg2G5mDTwt3uHZ1pNHM5bXbnqj75MLy3WT5L1Qjyrfb66xqfrx3xY6qyUM9cpV7rxLer",
  "key3": "4WPNWbsPZFjSrmnSZwcfMdyiZduNrFoDSnZQ6QEXBVw5BbRW2AuSo6JwmPxJdQrkxV18FNhKufNz8NoEeLK6Fv8T",
  "key4": "5E1JJUafexSoy4QCSdSN5mKmbKCni2Y6kHSHzhDw6FMnVtqfmZnauPijuNwjgb7G7yzXqXGwjXZe9iDdiXFafGa1",
  "key5": "LE1sa6CBLm4mdMUVpj3UL7fjEQsmTJDhsEm93Rqjk7FSiTWVXT9iJvv7X2YbmySe1StrWfUCTHwuztMxtQGVBV8",
  "key6": "4KHkUdeWS8FcTyuf2gEUJaKzptryJk44GqfhBK9aeVzxwpKZVGba73CYuts9HbNJQAyYJRrFRWaoBDaTkb8ezG8k",
  "key7": "5cj3QEF6bJLyPtPBhDmDuqXGU77YBpkJWZyciMiw745TmfwWbrjUEgTthuukikxUpGbKGL6cRndaM6tJChvQ3RYb",
  "key8": "4ZMLcvgTEeSaAA8LUoqTFsdPQWZ1EJ4iTPRsyYRhdMDUJHrxUDtaFBFoE1zLFGt2JUfRUSBLXJD4Ra3ENncysDSj",
  "key9": "2LynFqTFScoat8M16pjMVH3PVcoH6m8cU4dK9zyLXByitncxygy8xD7ktfod5YGQqGojYFH277JPCKiKCBaNB3jj",
  "key10": "5KgqLchcCr6Dws5Lwo7H3wkJv6bx4S1Vyx2eRMybbpUnnhK7Tx63MtuwZdqFcgMYMnoPHvp6GaSVN3zbQfKYKMzL",
  "key11": "YaJYn65dSrLfU9vYPWFNnjAQCwSYWf7dvZ99vugswrD3fEGidtRx8jaN4p9vaTkNR7uXNATTNdgNifQLiuhzDB2",
  "key12": "4JFT7veaLYuTqjk6XyYtdDfeVAbvh6QcmiDvz4G6RDHwxjJMHQHihUKwcipQKD6rd49g5CzvSwCQio1SjaA6HA8M",
  "key13": "4Nx8pcVPvLWYoo3t2qT1bCyxFEvh52Qxry6n6nUwH4xXXiXxCbDYycijFGT7Nby3raTkUThCVoZ68ikCc2BLLG92",
  "key14": "nBtj3o26bsUy3pwEmFEdV7f6rzgkdfrEYJESXSeEHheJ14ZcxZYHdv9mQaqn33jFM4uhmtcqtM9eChnwVahNXr7",
  "key15": "4ESPUFsv8jVhJ5cjqdBMqPUjnkvnAkpGnkhkrXXE8ayk9XfWx67eDj3AtuFz54bCKTMJxS55aAyFpRyZmUcqQcvn",
  "key16": "DD777dijiUmwLeS7aTfRzRyu6FmkqqVVN3R4GjjUxtjeSNKPMUkydsDb3fQW2FnoQrxZzYZUrMwegNcDbVQY4Ju",
  "key17": "584dZsB7nBdmrxsS3D6Bc6mxoNKPjSPuS6z8QN7oaHpQLk4L5mHtLeZpZj6s7xKTuPwhRhYmT2nK8hYTpnhjNQNb",
  "key18": "2FXXzP9uCqzvH2msXen61oiXoVPxe795zvPZLChmvu2WAJnC3zKNRvqoPQU5qKmuMjKUQtdVcBJKQhF6VUk5Ki7k",
  "key19": "4ErVUWRsj9D4vi8ycdv94qXEE9Ke4qGigB5uEMUedTm6LZuCvAwhPv3YNAu4dWvMMjYENEuL9afwBjtDjPjd6EGe",
  "key20": "pa1w7CWo6y5sWDdWwztANBN6ddMgbK3VyuAfvNdwarXHCkEbtRwWW3Y9XP5ZE8KdCcoyZwQeuuawzup8ARCcxdw",
  "key21": "28DAXKHPnhAXRNDd3LQVYzLbifNcjHsSoGgS5Jz4su27Gh11BWDL4hEHvyX9XiV1RMSxjYSDvCh8RXh34MRKgbDB",
  "key22": "4MRwXSmAx6Jq6EQvN276sTKDtK521qJb5FFM2ezhiAcfSobWAHQ4T7BDY9dXwiK352krZxVfibBBRxJexNXBp1zo",
  "key23": "8PJy4PbvcfEUZBefoNvnW5adrQbtYvUnJVbAiyaHLKZ1khJkwnr2XXc2htEFyL927Zj4SCvgPaio1yT1AkLaeJE",
  "key24": "28i9nnJ6NZmb9VsYEEML4oGM8eqyRrFYs7XBjJ8oGPLaVwJnQCawkmBeQu6LFwXtynA9ab52Q2dnypAAWeMvf9Xk",
  "key25": "2jPzFGktV5YpBVp9n4FXJ46UcCD4g54eNS9YroC5AhprPFFaYBj1ocho645CWPSiaXCpUSciC1edpWNRu3qBvYJ7",
  "key26": "3KBe1qJtxwAxicsuRzRjw4WXUocJpqiPeDhE5dLquYrYch8egoc5oc9H7LXuMMXbgvAQzbfRez7CmkmEYW3h4zU2",
  "key27": "373puRajZXWX4y2xiarawATc1iMyQFef4Z6gFdeBCxvjknqnwn9SyPXQ93EbeUFyKPZ6mtQmejzbjHrGYzJEV76z",
  "key28": "4tKGDebuTYLArrEiJAVH2U5GchA9owLJpDEFQFtqqEoTvpYDtHeFWDibvfPf6zowgZsyVikTwykdfRE3JsXzkPuN",
  "key29": "hmc2h4Xa5GmKp8r7UzqX56MmBZZmZ3h61rdgb2m47SBXfMTHXLsbuTzNFBGGDotQqifC3StpxKnfhoMaketyNWi",
  "key30": "TvxyiezdbvZCPCjmMX84ji6VdbgRqMf2BEvXiYyQw1UqB5djyEJSMjbu8MLk7jY9fFC86YfvfUZDycf3Lzzu1KP",
  "key31": "ErpAThDrcUHoTYosSwPh573SkmYw5QgN6nYpELD5P5MgnKFLBdNwGMeYpthami93cqLZWdi3NqsiQdmfDigsSQ5",
  "key32": "3L5oyKyLjmfjXeP42fGnJ3P7nEihbvLiGAoAqf2SWWufhLDkwQjxRFE4Bi7T5KH7pQPxd8JuuzZPmB7L8Y84baUE",
  "key33": "2H1nmZxCWyE2moshf6GsKmpV7guCFWM8zQEna9ctaFCbo5s1Q3t4DwzXqyshGrBahiKTsnWB9DqsxXioXuESFcQz",
  "key34": "3ynkSfgRwgmGg43YRVyyZEhWisai8ZUUh5tjfUr3q8sAxhZtVroQh6h1ULsQ8Y7LTVj62b8Lrj75ocR354f522Tp",
  "key35": "4gD6d4GFKpb71eT8vHzqh8n7Q723pd3qpZAtKCF2mJDmcjQx6kXprmCzQXHEQfoXprPhRbcthVmSRrFawtJS6zLR",
  "key36": "5V2xPdEf6y5v18KQXuE1KukGZTQ3ELUKU1udjUDoVKPPttc8Fck8sRbRw9BkE9dqK4FrJdg7aNuwvEfLB4JcNdbQ",
  "key37": "3rg31ZpzZUesPs56K4hB1sWGw53s73nyshEByyRT2c87dBs9jZpocLUbXPnwumwB6Btdg8hmrK7zNx6pkHgfZdYv",
  "key38": "21QjY1uzxoPfKPduAuwws9V37fewkVVCV5FerdwZb7iBunUi3rY5dpoMMpVN4ZCakzg2tqcwZ7xmGrUrLoVUGeRv",
  "key39": "4zS3abehrVRyibDVkNtxGhA6mB47gHPQbsHGkpn84bN59hwPGE55f4zW7TRPt1SS4E8AtfdkMn5kEE5he3ENAhtT",
  "key40": "4XqDKWJxo7WptAxQqXvU284UF1MKkNvPH11ihdvcjxP1T2RJwCbGc1PqpAuoCUcjeR5DhpB8Q3KNoWnhpQjsKc5K",
  "key41": "3L27c7Lky8qoXDDW1dG7Hiz7nJf9t94sF1EGqCcoTaehrFP1Senwg7JAqEwSGh7buTj8XgghmfxvnvgbSxBjrZPS",
  "key42": "3T7Sgtt3nMrDqMgThG2YGr6hohSrxjeyQUL7WtSruGEtCfLd69HgQq4o1Byjzgct9ZWX9AZKzquPLBoHm9GDqZxx"
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
