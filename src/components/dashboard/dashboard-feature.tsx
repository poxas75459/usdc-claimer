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
    "2KEv6qr2JvGCbwxkmbNNjCXPXk3bfqtNgC46NC8ZJHbUVdh8MbVpxwUreSxwxEoQJmoGpmWEcB8sx7XZaBPqaKuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4dGmXUYYAgRmhyLcBz5hRw3GQFVnnVohP4P27Jqw9PsYucTaCVqVZGJPEAz6geT1yBmyTEghGBcUp4yBmCi8cM",
  "key1": "24cUz1E6UZ5veDtrpHabKSMYUa3dtn2v7vNS8QfHBHJq3QenFxY7NanL5RWDJLWjpZZ1eC2KHAigV6cDR2SCvXLy",
  "key2": "2QrDK3FMncds4VqUqWK4sQ8Z4PoPnP7p2jhECipP1aT882fRKXL9FiqwTZw8GWVECb2VG6Q955rWMMQSiWKpGSfs",
  "key3": "55AUDqtdi6g2DF13AqpB9URngb3fkUpQHbgx4xa8uMFNu1AQsVp6nvxLbatJ4muY3rwgaGzg11fRL2VmVzU3G1W5",
  "key4": "4NfyNxFnxp8ukDdYpcN8JW2N5wPnJZqjYhE6dCMBBMxyKyknEMvhiCsQo1cKk98VPr9du8EyFrRCpx84owWPyUpV",
  "key5": "5cJwytuQihXWfQPXj7DWLro72VQZNSDVAHhBk5KNkrkVbFLSx9jhhsQC4PJb9NxLHbsX99JnvViqh9fgVEWEHQfU",
  "key6": "3JGLhoKhRiGWh3SveTMGuAX3wTwBYNizGw9rFe3CURSgKUee4ZW1MwF39TbMNUs5y3pgjSqwd2tv2RWCCQ5kFoyc",
  "key7": "28pGkN6srrFbCtcPBo9HsNY6v8g99aBz4XyMjgFSCgRhDkzzMeQxzdDfXhNipxajfYdqyNMYJUSGLWSLpcnjCUYo",
  "key8": "55BHHprWMqtyBByKoR9RR2S5dzZMJ7rnx6qdELJKNiE5PqW1Ga7EqMSydRj8qLyHeNGG4N5F3DLcz8aMgD4fNxU3",
  "key9": "5G1SYqLeKFQbAD6JRucdbWikGz5Tf9QncSKg2WUYho5i3UNe2VK3ywjLMLgAmfRWtQrYkpXeKt9eH3FuwhY734tN",
  "key10": "3X7gFesvppyvMY5Bt3HEKrfGdH2aKPe3u3aXopADQuJ2fQfZy8hdzx16QCKrqVhL7hdK2zLG7kLuD3N95WudF32Z",
  "key11": "3XrkK9z4uxKXKfbauwdk9Ap25oKzpkY8eCLzSjah9mm2kMLZ87VSx7jg4SbDu9JVMKp4RR2K21LyEA4meGrdoY6q",
  "key12": "3BN6JfxuhY1WvhB8yuXx5Egg7C7E99d4FKs4Uvr7T8HzkdQn4um7JsPEZd6h2V9Bvn157uZuX3DNTRNaXEmygWRb",
  "key13": "AnXyNYqt1BEG8xV3qcZYLPYw6qxCyCAvgzPtegvPfGE6y9kY1FRgkwxUwmhvqfoMqQAFoqyjbXM1q7R7CMkZp27",
  "key14": "5GXggChvmUVKUMuf4c7QBTC7uLsyxqNxGKoB7FADYh7M1ZBFX4mTa3h9H2WMDZhFymwdCXu43eNnrDquyzf5fHt9",
  "key15": "43eBFvTCWcYM9F3F71skoPmJRdGKmzAirTpb4LwJC9jsAQHVBkzYpW2iZzRqDzj13FY741Et5nazdXAbzSGCr9yz",
  "key16": "4MiWcgk4hjx774mnd7LLkMo3Jfu1ruy5q3sTCZpU9aePQU2ZwX5tefvrR5jqkhWfzdkJyN3QdNe6nFSrxyZQ2Cpx",
  "key17": "41U5NdojjbS26UQka82xnJFvDVGUBECRTfq174U9QotNES73ywBa7uSF7Ycx8xFTsH6bB5hfqf2cpa4sfaze2s6Q",
  "key18": "4hdwu14y35kysoDW8muqRhbub7kN1ZBw1dEAvw6Yz6meCK5wT4azt1KGWVk4iqCfei1ajqwnsM1huVQevf6KrNNN",
  "key19": "4ZcSGqJpR5P2BinFezMBaa98cPQ7bJ3kCDXNKDw3JveGEDMjZa5qP3DeA4HtQUL1k7d77bU3Qg6xHEDXAY9J6Axu",
  "key20": "iDTPPNDwoWSPmAr3KvpaDZ67vNBRUjLS6FVjxUfDeXGC8Ybgg69fywdgMYbhVByQRYWsPjenFHeLW9PToMezzVc",
  "key21": "4koqCtdnoKitdrvL5G1wdawabjVExZM4Qiw88qNCxzLni5UAERXruRiij3eSfibFtzB7cHfAvHfo1aTiZFUQyqCn",
  "key22": "gZDL299ZPRxkKtqtJYLceGR4mPqX5wDaF5owFX5TjckE6tj1HLWdZfuXDbQ1iedmY9MDcwjhZgLvohU5nfyrDpE",
  "key23": "3ATcgcyuNbPm7HWF71Veeefs529occTzkauQ1Wh2BWJvhL4oKJK6LCdCAGAoapLXKofJyZr5Ges6YL2vrn6dtKuF",
  "key24": "3htQet819sdKQEhvd9hPm531SPGGKMtdYgev6RToXBJyc5T6pe4Cg8jhWJ2E2N6FArqYzQAjfyAwQoybbZSyV8KQ",
  "key25": "2cf1mnUySvAscRgL4rBgUfEn3MBMQy9ppbfiGsEhaBVqrGgjUCvpj6uFGhBMLA5DFLLF9UQHpw2bAFDcAJtwUgPU",
  "key26": "3DH4wDHZ7T5eFDueeZSmjwLkgJJhjvP1FwQ4b8ynsDk4KTfxcU9rTcF2xi5tCSgXnQpm5SXdf4bFago56NUnGhip",
  "key27": "teRYbCWu84apdbFMJitXG1G9aobpAtJ99vumkozm5ebfqjDJqtR8De71Mr1PcJaFShA8z3TWeNuUNkLyYwwovZL",
  "key28": "4U3kCFzr5PR8vsrwv7v6wMFDkzTXmGPkwSzm9i6pR2xxobSPodysGebsqSf39qmcWReLXUoAc9bEkiYTKLNTc9jg",
  "key29": "2sbEuPYfXWuPBdXHMD7AdFVVXf74KrCJQr59JHZHGSsp6KfrCnYmyALM6n1utF2Fw55qNnqZ9ZwuP3vTxkpupHGp",
  "key30": "4wKExZKLfJSZFAZq5MEDhLnNVSw3WnzUdrBAYvWDCjSaoDBwoSqEj21nebDxv33Mb5P6pzJjzMRPf7EikT43MruM",
  "key31": "3NmKTSUyv4h9LTMCq4y6j8vP4KVkHB9o95Af9wx2nk9GN4qgXu8Ht172mixfGPTmeCo7t29CAY6ZfdX4ZjZwmoG2",
  "key32": "Fv1PaHKiPiCm6Q6kxPPChyaTNxVG9WnDkLB373599zXxgFqVen59qceCeMgwjkNz7uoDD2TzXidvWN4TWNSPtum",
  "key33": "22fzRGuhbBdPkwNT9Um5R3KCLPtBBKzhTjvz6hRsL1nLmxBJqNfMjnnYuhKzQKv1eeJa9hTvo9FBVAffMS7XzR1N",
  "key34": "337srK1LoPSP7wSBrmnk3GeNNx2n5req3R5S8j8ubm6TCQeo7YV9Xc7KvoQYBubAdKuUiE6MQfMHEu3UVVe3K7gf",
  "key35": "2KnUhpQ8uwQxbYRvok8SNt3M9pTjDVjrfvj5Tpu5p8XsguCaddbAvLHsEShL1E9pMLDnp3LbGdGydEhnZzqnpD8g",
  "key36": "4KzP8MYY2WnNrMZRBC331WCpmQrHQaQXzw1exUxBLHK56AUrkTopuuLj2hQr58z5BYhdNh6ZmaYmHVevMkeSpgWy",
  "key37": "4zGWzpGiafp9TcYqnLjzrc9NJ93fKFwXU9qPVCSwr1aB39TgqRYJg3J5s4GcDfMfaZpDrufyaiNc7ZLHyUwhgE9b",
  "key38": "5HDrqxkkzMHVyk4ZM4eA55RkY5qJvYeFhN2oBj7RRLpoZFLvFXMWgZSuxdKggQWGAmXsttqQwGkPLnqUs2EpCZmc",
  "key39": "2XaXufTusm5Ao9C77SazPdk1ty3GUy9gGPLMVMqbHWuHJHBFdMJ23ZbpDAYE1Sjr8PTn65UwraX4qpUi4uhHxKEU",
  "key40": "L4U7vW27eqqNvtcLnAJmGza2ZT4todjsc3r5vHNdgXk1ZTtatj2pKKkKtskX9P7RAuFy2i5QdG1bUJmDMQRd9xV",
  "key41": "WRzAQRySCrPEp1MZNrcKpLPy8hYXSUY1Hx58SFawNFhUtfDoTadY34afdxc3sP9WZ9iF4vc4d7Q2p1SL5mSGSnJ",
  "key42": "5tgXeFAKGecmxJ8BnVGHVLVac9LqFts5LcBrsETVUkc9WVcHnF7vbKKXekrhaP3GCfneC2e5nXwWdNvxEipUHfDi",
  "key43": "4yFRgMmFwKRc282L9XpDgRp7MrsCzjvEnBoQKcFcQQTHzZDs1uvfeBWPZ91HLwZVG8oPUT6fCLoFjGCpCB1iAmq4",
  "key44": "2bfptK3eBZjDj7P2pKnbb5a5ov8U136pJSS2Drzisyc8cxNkS2DEEsM3GcQXQ3rBRcdEy6uHN5dXHktrMZanhMzu",
  "key45": "2DRPsr65BhEyxRzC2yTckpdZs9cvdgLdZE7NJqi44Tk6GghrSCQ2mJvoJV8wosCyRQzoW8d1XtXsxLMSTH5xwhgn",
  "key46": "3VB5No1k1CMR4K3QxyEkjhvmWNGWJJwWUnvhao66DfQuKvzCCa5ikPnjiDWqT9osi4myQ9Ug6ncYu18YnwopWrSb",
  "key47": "3uVHma6oN3pREk42XC2w4Ye6qvki7sJbpKhNQT9xrQ3HjRfGjWeSKjtq674uVjTqMy5p3fp3wTgwV6ScTHyPw9wa",
  "key48": "2yeBVLmZE4PRCqgnQWQni4HakRMAaPNYaYxGWcAPTAM6KGuDNbGpJTLP9rJtnJC9nXSTzXbKxVMfpZkLFghEmTZ"
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
