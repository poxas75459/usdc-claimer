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
    "2vr5osoEhUoe4UbLU88xE23vggi7EZXHkGBTPoX95WzFhDRLpES3VZFoLBHEz1wnquXfSGykQk42hZEydRVjT2tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSmhDi6n4tV4qRZPnoFaCsykHRBCsMELmCFzFHLgYCW5zyBJr8WWSy6Jor9A7XPaKnnBbkkCUry3WEYLDcbrvBn",
  "key1": "4i9sR7CSTgdSbdZix6CeyirSCP6KQXmRgUkY5BCTpKCkpEvqzPeMt1Y4mr3RMT1XFB28rMsFaynRCBrcSB4rCv22",
  "key2": "vMgiywFWYoPvkAeXXr9oSHDyCtQbFWpDV1xQfRgNPm27z98QCzqiE8z6ZhEwkBw972VYHmg2CNrqHCm76sZNTJb",
  "key3": "4KycJeqXTrA9xkae76YXmdsP5UY5hEGH8cEh9jfXAF6L5at4xs5RSJNxzC3JiWMqEtfxNxF9mDGcdTDNC1HfUiRJ",
  "key4": "5SXVjwN2KHeo4aDnMjC2YJMhZKpUWc94yYcUNicyJYsezFW6H1H3xZJhPVHvXscCLba5gAHRaE4FWDAeoMnqLiQv",
  "key5": "3CLA4nns91EHJR6AXS7J5wthy6vspQrvJ8YP8Cb87KmXvSpbt9r7EGBCZPtLTLJiQHPrpLoXDChKUT2M3JqKH8Tc",
  "key6": "3fP3CwtJ4i6g8xM11JcaJvavi62Dg2FmzMznHyjgJCfDVYyFAiMrmBsQRnHe7DGtMD5nsq9CUfrkLs4uLsomPtGW",
  "key7": "5T7sSbHxtifpRpksr3wLb1E5P4xCfsBdNf4fGPJLK3deC1SmK1CCoq6a2WeRXs6ganfZp1buztALt19aDTTswJZU",
  "key8": "3h7a76sj7DZ6GLU5zrX3FAESppfdB2TYaHjYgYSheKpHas5jaaRbic6unFV6anCKUVgBZfToQuNSc3AhHgZ3zKea",
  "key9": "4vc7XJnrdmHA1hiaiB4myHz4xzbhFtM8dtRcQVA7ZSruYW6ifz8YiKGFjHdThkgsefbg6wgzCviXUzZV5rVzWbZu",
  "key10": "5riyR55NFMCTHautKBYaYKyhbZf5LxU5dvPPJUZjQPEN5DHdK4V1hYtHTbSAiqkPUz8N4gj9dMHv5ybYoYkFG93",
  "key11": "nPjzYR4fDbp5rVr89UWrZ1jo5W6TRDYgW3TF4P49hHhcZjtGxEbFY1yzHSgse2S9vtSSH2tLAumF6Abf77XoEZa",
  "key12": "3gk5iEVaX8ggD33cfhzJ5M6Lz7QNRgsHsLwXYidS8S1f7MfefZ5JtLSxC96TfgqQpQxqvDLrMZ1WnBwh9VFKKXK8",
  "key13": "55ZNoQy8JfjEo3v1vrhvmucHgwEAKWrW1EobPTKaFgemnYgojCbieB4AC6VRgpJtwxEVLxi8F7S2mGNehcv8PhHh",
  "key14": "22cEUevWb4zhooxiKdZrxmh8yLNzxJVBqGR84Qx7gJPUxLe7opBCvxERTdwuuLFHxNnLvt4tr65Rt6WgkdFTkped",
  "key15": "3WPBmeChqJSnFftDXmbYckWMX6FNrsbKepu11RGmsaMFuqRNvaMx398fWbRaUiLesN49gcnFsDDTm4bufvGcnptJ",
  "key16": "2qz2gKwFCJq6dgkgTgakgwppdVKNAMhYzDXSVWBtNYo2QndraNyDD6ib6efjGpwK2jBLmtdEGmCdCFoTr4mFkJfP",
  "key17": "2dFVwWaxEQkKMKik77WKKouDTgVDDVkQf9txrR9KjCoKxd6rbcgFFh5aSheK3iRBEhNXQe8pV64Kyskmw5NC4CT7",
  "key18": "3jooVi6kyFRaqRCFMMggvhkvhCjdS1cK6upJvq1R96QM77SwKdeAzwpx73f89RmL6vp9zWSStLHND55r7NY9tSJE",
  "key19": "3bZQKviy5NEKs9oV8qjKHu4D8z6FXCnS9omLQq4UMaQa2tZFrx1XbJJDKjHDxDuBeUj4AvRU8Fu6H1FtxUHscURY",
  "key20": "5dxVF7xjsjd4Z1aYbCwG4g474Dsw1Lwit2kK1GvcUPFbf7Y3tmZwC4o6JGnPrhUjSY87KnZ3p1HPW4xjSqLiANKM",
  "key21": "3yXidHMGkzyS3AfUXfcJAMNk1sYCUQC7ZCNKBGmkagdSxbZ8MRChpv1NHZeQ6GwhXHPAfJv5B7SERE6nNseGHTHC",
  "key22": "429thSLdPKWshZx5r3hrvf95yR8tWnCPh9neh1npdNvp4vYVPQFMzK7NeT9421F1hM2Mo3cfSFadQgA8KH3TCeAR",
  "key23": "2s2KCmKP1YoocHaE5mXaX9uJPjeWCNojygBuPetuvWeHEBSMbVPJr2Vmn5abY2wGM1sFnfjueHu9kh5TUfquc77H",
  "key24": "4Vfa5uqyue9Xr2SXUFxjdLFCQ8Uy7mSt7bRhoroPv9F7inUSLdX4cmuEwMvrZbsw9wp1Xv156rL2jxEPER2QNmnx",
  "key25": "m6dubK44gCoYjfwr5B33f3Yx917SEbWjdhZAJNDYSrjfEFBTBRnhgwHK8zyQhuAtanDSvDx4fVgq14f2FbP4dsz",
  "key26": "p5NkigDg4gMeKKfn9LduyWzUGCqCBMNs9MW2UYoUGB8R341CjS3Gim6i7AHrmniX5tEWzfuF8UW5N4PWebhDk83",
  "key27": "5vs3PgiUS3dDibsyovHJsxXGT99CdfD4XvqnfXhFe1Vcd7u4vDH2bkftz4To4FWNrRqv32U8HobWtgVytJNHtwPL",
  "key28": "3Jjc4w94BwSGb2yFK1h6YhgPUxq3gECBZkD2MQDXRYex6xy2JGxyzDV2Dmzs9ZYY87y6bkAW3pMLuq5qnfckGeH",
  "key29": "yS6QgiJnPqxcNQzWnmn3AcBYa5S2SvBWcqHEHPcS3LrL8h2wJn6vfHYieCXmK9ENM3amDSFcujnaot1Xzab1idg",
  "key30": "NvxDKFARgB4rN1sdwt3sM2WCLka9kGCWazMeFk8zr2X7MJzk6JSV8XJebXhXJWqW9eVVk4fpZym5NSHHx24tEcj",
  "key31": "2ZPoTKzLhfyD6zfRQ3qQ4atSCQv9zt8XkRufGiXnaynutvRgmbcPcNxfdDP2D4EdMXugUQ4xe3zDbKHCzkBGsuF1",
  "key32": "4uz7EFGyHvdQhBCMFyRSEyinUTE2N7EawpVS3seT2TSueZjXDaZuMrETtWJCw2UvgiNcTSwH7oLRNfTFMrxgRhWt",
  "key33": "33CgkM3aBDbReG9RzCKwi4MpFef6GccxZbAZvSMwWCb2SkpSpV6kvXkSX6B7AeHZVksMjAS3Wg6ojDvs21UVLWdD",
  "key34": "3b91wnPtrGsWoThFCx7abRvE3SgDamhgWvv6cpSHvhRmQ183MATY5qbtfSHzdqZfeuYraLdmYempekRQjsp4sB1F",
  "key35": "4aRkGkQhSAXgx2nTgmcojKT7bareSnFbwucCjwbt37fzGnStVMQs76toeE9oReiR9e1X6f9cukAtZ2EuHeCfopbM",
  "key36": "EgsBRXGx8qEhEFoNhSxqcb4icdiDmALPzQXY2CMs19P9ZuoNXre4gksiZ2myE3L6LPaJT7rgyduRjNCZEHrWL9e",
  "key37": "5GmMiQJ3apsK1HJ3G3kXrMCUwmso4w9aj5LF5H7dG4eAVPyk3jkUwcGaCaMqTdQe6RbsyW6mefBEyLMSUWvGpEmZ",
  "key38": "53jPRoAGxzFD97McbLyQuf6nx8ex1tksutJdyd1XqT3oGqwPW9Vvsa53nr5RXUEFk7WT7Saq4TNJ8SguTzSYm2wd",
  "key39": "2Kaic795zSLp66UbCeM9xrQQrp6AX9mqyA48733uKCcMHEBCJPayycrm7HdmGSttHaFvreHPcPQf2BsE99TYSEAh",
  "key40": "4NAF87E465eeQtyz5WeZM4QJuyNTiSiUCKduZhXxGjhKcVb9r3c1FNVfeZkfeZBY2Jj4ZnsqtUsp7jP4qk8p1x2r",
  "key41": "a7vPUYtWn3AkmDisXsbkidCyKq85aDMqzjDfYo3aQDjUzyr7gU9gWSUs6WgthSbXv1sQ9LAEKiPV1xBFaAtnzPw",
  "key42": "tdxbWbJFjmwRgJ9WP7CtHQCEmbGGsDPPHVvgD7ED2KPcbyxPcgAPwsnkCxEyQJMadWuSwsdCkYDRVTyGwJtGAUN",
  "key43": "24Drj6DAYviZ8oQugDh6VSrXyHHBEdVmLd9fzmMUyH5vuimfNa9hRdgsayvVKEovW4HU3mqmAcs4VBVk2TmcdEQ2",
  "key44": "2JnFDR5Zws8U2UytDqLT7musdq1xgeFaabEAPmysjedHtNmEkGP6FMrikgZm1xnkU1doPaAkQnCnMXpx6U7vHW8K",
  "key45": "5mSv8pZJAZv4qjVRumTdLAcg6T5Akuku8EuLaUEpgFKVin4vE3uhTmgfQV7NbFWxTPJY9oeuXwrCpz927W6zTjmP",
  "key46": "5RYuJbSjbBY1gNWQi6GrQTByF5ruuJLfSQiDPZLEdbTxypk9LnqNdoB2RksAhXdqTYcHKh1QW9qGNgs1QgjtQJqF",
  "key47": "49T69qjJcoiLNvs9Wszgix3QGQ5WDEb4bBA4CvCZMhicy4adk8hnYfjCY63Ck41bLEsvECq4zLaVEfKerQg5fJyn",
  "key48": "3pFhWzXPnVonxfq1LreKvAvhmkqbnSvpfhz3BYYZsWbYBuXgr4cjeEUK6xPrJ9xzn9oyBkyipq7fqMwT7dGEL6mq"
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
