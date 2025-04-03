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
    "4qAroLATwLSnriTmPcsjnsRQqoF7pee8vDWU7nbPJEEasU8pLo5tokmDFi4akEC11kN7EQJ7eBd6ncKx1W7wf4RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahipn8DYpsnES9fS2kznkJwzxPrSFydaHZyW1R1B1iLbQUzshhk5XbkCjzpkkuo3qJKHYnuKZ4HeNgfa2R1MyrW",
  "key1": "5SxRYwT4nojXUTsvocyVataL2e2Ppt9C7SSnxMmG82fhsf41q2Q7n2m646B9VXbPSLPJUAx6h4M59YXnR14yFq5v",
  "key2": "2fc8f5FpWH3PfcosvTFfumPhe1ZxNqhCSFXLcvdZdXipEHDb4v663V9EHkDpykUWmV1Hpiwr2r25FpbSNjWY2G7Q",
  "key3": "4GBikmZZ97kxVT1Ftzj3KgB5vcTMRi1amctuncpTbje957ZkAgC7if6cjdUfqufLsU53tT6dELrmZbqQh2uJHSQD",
  "key4": "5iBu4mcAQnP3Hu8cgsQBRZikH8QtiNCQLQfxmQyp8MxhjJ9XCUJsdnacgR6CdvcNbRxGAnR6mdk8mgrz5n18RF7j",
  "key5": "G5RF4dAXQdCjpeKeRce9dPXdkLUPUDU43HsZiTFLwfRfqGhCLWa5VcuGwh7eBbYhhwXTvXR6swMcAzMvxMio9Gt",
  "key6": "byNeqg32uemSY9mGtQc6KNPD7Cfc7eqFRbVTaujJuAsQ4GTkJf1mcL4qs4gu6WB77EJ2jtFpcjRfJwnEXi9AcLo",
  "key7": "49iYyUfkxnB5a3UVpK1tqtRQSABPWqgrZ8swBJyNGBFqZgfHoKwiWotaa1ryj5ymFnGBWshGgzsGwUEiRwxU9AFG",
  "key8": "2Hjb5eQ1SBAHc9h1KhWhQ1ffxkavVeM1uwPEDNNndPkGrry6UbisbGbk752XSix8u7Wn37kuFEDgscsBzhkoLKah",
  "key9": "3aMvfSY6ujbfffU95HVdrVs9pskn8ea4VoP4ThfHu1M9Vd9yGQLxmt2mZnRAfnJPUEyjmhEgzXPQs73ubmy3Rrxa",
  "key10": "fwVbRUA2gc7gqLStmjRptrvXA3zCyUTXonNP873XDj8bbnxUYEpFT7dscWuJHzD6EBeU75eerDkfJWHtNcVirtd",
  "key11": "hZjM8quuAyThAhUbu5fJ69iqmuW434mB5YTfE5a267iWgjkVnPdcouy11jzgnKQkkY4jitQVE6xPBJGBxQ4TFme",
  "key12": "3um5X9dVBFpU5Z9xhsmQ8T44ecgQgpHB2vuoiUGLJyc6CgMoyijaVZysjsdhBDMUuAFLR95n7J9yWsEwyr9DeY17",
  "key13": "a5Anamgx6MCrE435c6uALNFwxdcp1ewhgGuaLFbyUiMsZe9DnsavHrFZUKCNrh1Dzje6ZM3UuZGCF3P5ZuTBYm9",
  "key14": "5CeECWNDRzAh2mCY4UiUijj3X8YvDRCjQiy4veCzwnkVtFAtMELqh4S93yK5xmmgLLDViyHBzD5ZnJJM8bXmQMDK",
  "key15": "3rLYTNLtyFD43Zu5fdHmUtHXcZ2McyATK7tpu9wVtNiguLFuVzcajY8fyL3RWxQQxJo2TiqUEd4UVVWoz3dxchjJ",
  "key16": "KtFdAmGWBWhVbkAhiMYX1ZcNeV1yBuTN92Pr7ng95okKJQR8XwdaoKM3F4wzqC632gEWFyQAbordGCgyZVH9h5b",
  "key17": "4C1fx5efKmWEBcLmTVzisP6kMgrGaxtqfX2tWeR81DvCNzkPpEHHrkzigKXzYgAsBykEMH55jfwPuhf3qvba7mJ6",
  "key18": "NB754xGA75hF89KsKvwARU9FJ15PDLMyvxpWwuV8QcYBt3oPc4iwPwgEuBKkZvtQoEh6ff9sTCB3nPX6SqMjsXg",
  "key19": "4Fao4bcqr7gsfynNX49L2tP8ecztcP3S7gHPgxHvQq4VZC6dHvNBWh664CJHQjwtEJnEpdfSo4vQjjLM3VqGxGXp",
  "key20": "5oRCc8nG8k9zTWgj9mDFmmjdboifhE8Ksk4XH7SbhRQL5jgk2NHys9fkBxrziYDPafaqn1W7s6faaJN6JiqiYizp",
  "key21": "HVnAw8utXz1SySRnmovCFfPvdXJBdpWro4n7ErxpzpJ1JpTni2UZz3QUaVRNpdegG1PFz2NrUzp1ZqAPn73yake",
  "key22": "48XEQb5tPRezefyJdVEM588Ly7mKvoCeXNgA3A6CZoGwyVpg6yyaUBARG4ybnynV6azX8YYaYe2PM6cobc6bRFYY",
  "key23": "4DnoepMmxcVQoG7YGv6bZ7XKGREZsBiMYgjZbS63xhJAnjx7bnzMZKFimFRomc3kWkEpkMNXXPtkniexbBkYf663",
  "key24": "4hUzYuuFvKSB8WRYUvSEDuKrtafrNvy8KDyVpjmBXoc5vLVq2zmS5Wc5WaogsGPN2BsXqe9mcUgEvosJ76FyyTFt",
  "key25": "4VgbYxti58Tn4ejgdAXTYeumCGLFYRZ6XVmDAqYgsPXaNVoQGDmrAaQZ4rP3FX2toxXCmv2o2pBnPgQZ9bCdiHwB",
  "key26": "2pmN6EqNH5ryEfcnpWHFzTpSujpsr6gKCRUuYpm3VNXYELbL7SAghThrfnXJwVGGgNQis6qBnmxvQp1CXNaRkk8S",
  "key27": "4nr6dKTnx9UzQe2PosyTZped4KXpmZ9DB72MHZJbyfCNfutcQ4Q7df4PEfhaK6kKt6QL1pbgcvqwRdUhUQBWHaWz",
  "key28": "2yh8iKXwdg1FtArcTdKh3ch9dkDmQhCavTXRuBzhm3QDTHrknh1CtwAMybbxLia9e8VqvbNEaiuvsjy71k3q2yz6",
  "key29": "2TEUF7NaeTRBN5gKivEtcQoRGjeKyfGzLteFPHwEYwK5oCwABoLJPNYxQfgt8uu3XozuMvN3mS7Fgq8LrY1ARGUq",
  "key30": "65dtasMKH6UFfDhasnN683kayCy5P6k2zMJWTQcWi9fEmMkmirbJvMd4qLKfckGsASxjZayZpJgAX5E2F7zPaYug",
  "key31": "371T62w3kn2ncdhE74Das1fjeCcXchEaMAuEp489fYZntcYaE1pDJE78a7SYxy3wwkRFzP3oy7h8tvMRZdCoXi6y",
  "key32": "2jRxkKKPcy8mvMiBsyxndkGobnL2F8yToFEZBKaPRH9DtgHrPh1tg7ukLsMySw9GgcFt8ewxjE4ehbkq4PtDVn2D",
  "key33": "2PYRmG3ULz12KzFv2LxfS6caWMyyp3LsVhnpPQVhJytZcz7GJChohbEM5mi2s6rX21Z4pTmqCLqarjaYBcxXrvXx",
  "key34": "4sPEQKwkcuuz9RLs69yE6Hygmw4vkqmaouAYAKBuimFX7vepGazMNv99dbEKaN1UPwzsho6yoGjpon7cV8iWLv5C",
  "key35": "3JfRQSg7u6LF2q5vD7NpnSD8VKkuvfUumoQT2LQoLSCiQdJtAQTtBcCmGjshHLUZ6NVt1fs9NW3ZmWsYjX5sryKF"
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
