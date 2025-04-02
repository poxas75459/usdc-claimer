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
    "3yFQH3867P7dnvBciACZq8imNCr1yU8N4pmpomFSTJF6HJ6j2xXBHurFCzbykfTC4yeocv36JhqoaCVmNeutBAUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrXGKLjUU1uNW3D23ZQKqpFTW3W391GSfiVZ49Ssu1nA2nBsDikVdTKd1wYKnMzi8VQP8pvTRqcZYS21pWjsbWM",
  "key1": "3i5bcJTBgKV8D9kheT4hYSjcUB2QipfNvYeTjBYnGHumDUQhtwzN3xdYs7TE5G7cCXa4XVE55G26ycr46YUR8ut1",
  "key2": "26LPcUTqTpCH3VJhA6FiVzuBazHH4vUvxY2WPTYYJ9VXEExdbvY6aYSEhCWv7tdTvUSpSbiPtXpeRz2ia3Wzuc6W",
  "key3": "4C9roUUreguDJ2cCP8T3fbJ5UU8fLrywKLdwJjGmhWKfECMiSvKUytf8v5PQhzpGfxCVyhNHHQKZfBpVZBJyuSJ7",
  "key4": "3Rq8FXwieCJr9ukexEcgsKxoPKo3H4oRZTgarRWdFYosxWe4h8YncjfW2uTLak3o1VRKUHJgqharNCPfwbBsL9hi",
  "key5": "2cQ7u8zT29NtVTSx6Jhu5UwPcQKWtR3Kbhkm7yjVCLVZAM4cp4soxmBvfHFLY6SMjhHf65nbTP38UqgTgQrN5fuP",
  "key6": "AVCAvRQ1cRy8kbBoCjaCVHv4MiG1Pu4R1ET2egY9GrcSAxXvMLW3r5dh6NVjW7cosAFZ76EejofbBKRRjFnCgKs",
  "key7": "2n8r1CU93vkiv6whUA9EUjriy6aSPnghKTmquGEbsRPft4v1SQMBRyeTMEMEjTVXwRqmMWHSXxsjSf4yucCqFeV4",
  "key8": "8QtbBrhXsngYNFozDQFRY7Jb5zz2j4cNd9PTCuqH6sR2rL7N5AZzq9Yo1SzpL7YNNpTVbHm5Cavc5316gnFLMSZ",
  "key9": "5rFYRDvqeq7r53kEbTQebKKLD2Qd3ZfSvUBSri2s71Whszr6rFkETz35Yx1BPUgkpKXUMUVKzrhmgKWX2udUtuVC",
  "key10": "5nhqbNWd93y9gnSnBzw5wo5MrdCmR8MxtbbVym2Dpc4dxgFp6YfAHDTrqfwcrG8yycTEfFqsgdgU3PTsDpE4vmki",
  "key11": "2mMFCB4oPkdC8wTzUB17iQs3a1ETcHXt1QVCj8z5g9x68QMhzCNsCc6hUnTe9A4zWmQdpLZLdhdwoH5eyJSN4L3Z",
  "key12": "3nxG5pWBHuMpi4EdWtDdxYvsVYHmJuMsU3nWUDUmfPAHmWxMC3BFiyq5A5LM7oxAPvLDD9hbJFALM4EioNL89brH",
  "key13": "2y3Q4RaR15uDE8uNoiGMxk51tdugPE54UdMFpNJP6qmnDqn3Z7KbwdvQ9a34TcAsmNA3xc5wSryKWT3xMdCBkkr6",
  "key14": "ikxZJYn9y37kmATvRyYHF5eAWhAmGY3BHzXRLmLBfgmcLX621HWpZbWUdDjgfTzkXK9bufjHZsHz9XmWk99zn6V",
  "key15": "2kjYxpKQhMnvtjTcThbHwy4rwTGNNxqMgwdt81jwjKGPLk9UAwvjeMcz7ppPUVgnr6c3DWEcvtPZvW4Rew743jTs",
  "key16": "is2wmcXfRVtBQgTQ1wZbuccF8q9B62yGvqUovRXSNB4kjPcRHmzw52Crz82aSSgevZTYusg61AqaFB34LerjaGS",
  "key17": "2idD5u8iGBrRtkDj7tExYLGwJQitay9fmKRAk5hfsdw6uC79pHzH7AeDrC95AZ57os41ByKQXPDqp5kw9aTBnj4g",
  "key18": "2N1AjYaeVFQ2nuJRahLpqEB5yxgBZHiMvxK4v3mf5DzCPar4wyCcbcUBX4dbrdNP3vVcrJGF6tYjAcswgGv2Gf4s",
  "key19": "3MMjCCd9ar4bxMKYfqCnKUVPTb4WSxwheC1tbx6pLddUAerBegcdZsysaY5d1L5SUbJAEee1jjAKqG1h8vpB1BZS",
  "key20": "rHqpAEKKMZjkm9epQoCw6M9nsAGv3jGqv8ft2fayvJDZrBnY4YE5tmtRWHxtBdyFQXzsVGp2tT85JnXsWYufiAj",
  "key21": "2aBi4AXWjggjJpaTpRek7EwBX4CT6oqF8jJ3XiqD8NEbBikBMUWHi163Rp5Zx4BDNFsvGw6LbNHgAd2ozb1dV9Ny",
  "key22": "4Rn3Vx9tD8BmpTj5KsFiX65RU77ir4ySKYAQ8w2NnqTZ8b97jzxbwCfZkbXc63xmje9PHCj8Ldpahpe8PXXDn5tp",
  "key23": "PNRasZ3M7H11Egn3Azi4LmfEt24a7bJpNTuHrQne3qDRHJXxBnB9aFsEpzX3TdAAig4gdizaqkGAvqjNUmwBevY",
  "key24": "5hu4z1rFvBMfcqSt3EgmbF7nBPiApZ8Qd8pya9tKuFeyEUMshZKpGtNMfnn9EiCHh3owhLrUKjNyHxwYB61UZDyQ",
  "key25": "DPBWQKr4nmDLTgxCaTQcLgMzaut9NNcYm2EdxDur7vcVrsAbeYGHARgw95uBzvd1Aq1DL4Qp3UiaLhvc1TAxReS",
  "key26": "5QAWSeDJqxatb7XY5GEsrabMhgogZcQm8sw8BU3KJ69DJKjrEhCgZ5mCpX4ym7nNPejR7Q9hPyt9jgEWzAGBDfqX",
  "key27": "4YHJMSrrvYSh89nvHDnW6aa4RGjbnksMSHvNN8hakGLf5RnGWJwniHu7xRCbwf6pvjyNLdjnrt47B6VQwL1LQvRt",
  "key28": "2SNoFbwZGrov5dugWAHMeanTia1xRNCqsZBWzsyNvGCHrCT8fxs3pteMkTJesKr9Z4AXyU8yGs4KvpRn6ELGEarv",
  "key29": "2BqmQM3zXNwji5KyAPiLmmEKKxBT4w4dZoYx73qyuCSy8jooNjKwq8HxAAPWJ88CB6Etgy3TQCYPhiJNt7jNZaXu",
  "key30": "EiJEHcx73UMB17z9qV93mJnY8W9siKB4JSUZMVyUDbyUAzgQxXKMf14zxmqD1cs9ZoKaHYA8VboebqL17Sduin6",
  "key31": "4kNWSmp7c7zPf3RS6UkpvfjCZNFhKsQMSDiureRKgMKnJqQvv6zfQoCHVFuhvfBn5VWARYMMH6mjzz1ZmnVQ4tW6",
  "key32": "5bUE6Ss5Uw5y2aPBnXUgZJJmieihd2BiTSABjHSy82AisRfr9cyJQWBTn3uFS8pJYSpcG3jzF1L6xgQj2scnvyg9",
  "key33": "5RKC68WefeN8vnmrnbkVViPeHwuuqiUGMdU8NJYv9x3TA7YHYJndCEHv18DhKUqNuP7FDb7eedLFUePR9uVAUNwR",
  "key34": "5q4Q3gchLWrpKmpQPwUHmW9iyjMPA1FQCVgaSFqjxo3teXp3h8m3XR7nP4PhmZ6abdJchSadyf26peDhfaWSvmaG",
  "key35": "2iBmgdwzNBPZcSSSmBDgCgmKGnu6c4HZunAfp6iBdjXXkg3nsSrZzAUTimJKnHeWim8jk8eY8YRfWicm8sdhhw24",
  "key36": "371iVe9cpK8EmyCqhhpKrqbydrAnAmAN3jCa4fMwU5rtjHo72uigTUuDq4wsmFzVAgBDa7Ti8UeqZjqUeDxSwn8s",
  "key37": "3YyVzzd56iVogfTsy9kDnzXLxFGdGk6Ljgr3CyGrb9JUt4FxkcXfV7YU2fPYaxJunWk62nC1V44UkxQ4pYVPSNhg",
  "key38": "is6gnBWz2a35fqFiaTeazUKkJh8wkq6PzALVTNrW6gfk7GkEgbNcKg4SWZKtJ9Vf28pwaL3UxMSADuYrnN1v7GG",
  "key39": "2cvLUhS4BJ77fVRbn6mdYXdUaNqJstjxbeRbztVu2Ns4e9pHbSKzJHuLgHGqkyFrEmt8nSadn6AWWZfSwMqbZWLo",
  "key40": "4sauWDAQ13r5x5DDdBsWENiu8ocDuqqxawW9xM8hmMzHDDeD3iceDtzphJKy4wZxfA3Y7aEoeEyz7bVRCVeCMkrE",
  "key41": "2PTPiD6qNfg4CienAKudtYMC1NRqKZ8u1X22wooYCuW9QEBsVimR4pCMgZqa6nQwnmDsf9chbS1Yi71QQ7Fft3eJ",
  "key42": "5JLpPAbvqxNNzHfoGLX5X5feRepbtmeAx9QdvkDHbgANKMAmScVM93aTS7tCTS8Zooh5svT2sJ8VpXXhNGpEG2ob",
  "key43": "bJvV9GYDkhZqaGmVcR3dXE5nCX7d3V6gE8KSKyW7TZ6QPLCJvw9J21xBbiPdZEsSpgpyBGMmQr62gn3QCy4RoGi",
  "key44": "4LRgCPbq9TgHxtcEQsJx8oVY4ytyNHDWncmK5Kh5MU7yHeivWge6HBoFT1SSM2qkBTWSG1ezq1Nm2dhTFcwxcQcY",
  "key45": "3iPkL83MGf2jUgwFaFHxCdFP441GZFLDt4CCvfJaZpCaXHMhPRkzVHo87faJSTdTNs1EFpHbXB7hQnXaz3mA42nN",
  "key46": "4DD28cjcsW3xTZgR671SBTfYKZbBiSbicSm7xxfkBnby6u6DaDu6cSDApASSXteQpaiXpo3oqikPMoW2DarRQxU4",
  "key47": "2DpPDJjZyUZhdcLYPrvRx4sdTBqk5VgXqmFETUHAFsj2DW3tp7gYE8SSA3Jax8xHZ7pRLS7D4TibuCu5E1HX3ri7"
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
