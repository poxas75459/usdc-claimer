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
    "2cPNtQmfCRJfcWJfsc4o7p7bREGDfdJk67N2gTo7QTmjVNoHccpQ9nqKaYK4MnFexxhh8KjCUnbJDkZGMK2sDZKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n2uCgqunBgs6FbJbL4BfEkpuv2aPs9FDztgRoGPa11K8un3Avm5n8QQzZGxtAf8WVcXz1QrMFJ3nPCoUD9PaLqq",
  "key1": "3YuoNm41FRULbVFa4X4uf8AwpsX3giJBKc6fnPLatceLHgZnmfDbcno8HJz1XPUdCc8cpWBTQVsumEWe7ovdeXm4",
  "key2": "5rx6KqAdzvq4Vq32RmRBXsUhNRPxjAQ7QP2afrNqcVw2hkgFpZQ99mNd7QgApMfhfzjneuWeQMpagyaArBgLogek",
  "key3": "3YqdUJQf9zn4UArRp2cXGJe5hsna76oYCBCsKB98KSoCPSbQu1SY3KuQF7Qb1cGcyvBCDdpyqcoLuz4SkDTeXSx3",
  "key4": "2nTBApHyoSMtTSyiWx8vJj9mabjpmW35gmLctbbF3boY6ExUEGK67YsnCCW9e2nMbZsUdcKiGMCViAeQMTiaiq5s",
  "key5": "2WpKaCn6bsGUGKqfFpj56TN4ExPhuzFZEUuc4L148qZmQ4vgQa9TkuoZ3zkADAhDbCfdzi3hnYAsVJzavVPYC6K8",
  "key6": "2oAxGg8GkJUhevhFfjyXLoJsHN7hvCJCB9j2GKSM4Htm3eoirij1poTnij3UMpccijJxtK53oA23B3akXeTzq9kk",
  "key7": "3Hcjx6DBxCwsY3Znzpith1oduvBszrcwAHPeMiwC4eHBiGi2No933kUJUNBPC5F8wvEZSWa4PGYz8KDfCEZhj7jL",
  "key8": "2ggrV2UT43nJpwPbfwcWrsfLmPSKurf9mb2RK6goMtmcF7mt2bvFJbZuPgPRweSx9AFN5GTymTTidxMtvHBNTZdY",
  "key9": "3ogNraFkG858vSjGGKdPUi9YrJNkv1JXZJ1r3A8cDTsJ3TkQGcPf8oWB5RzoeSjw6nu81K7GTa51hTV9qcXtYYwh",
  "key10": "599RSKnsoi251rs9bpHMQSFxXqqAeutEw4fy1cpCJSfYUeZUNbAMFPxzb2ehx3GwVLuAFhyoSsWwBdttdsVBznf9",
  "key11": "2uauQ6Q86nTC7BnXLVJiKXVVsuQiUi2Eh44u3Nb214MFZm6CxEAUciFBcsyC1EaEJJkHjm6ZQJ1drgLYpRRMde3W",
  "key12": "5VZ8pSYFFB4GTgpjDsByowrHoz5ciLeFUMEMu7QqyEgL5pmh1K16noM5UhQgwLreucJaeeHTHnTZjFA3uvoqwwDF",
  "key13": "51kQMnivFsfmRt51PvxFSkbBDnK9zGwY3h9D3k5EvJ5hkauAz9erob1mBhXWCx2gCBVdyE6ziw2rAZCMDSgKAw8B",
  "key14": "5C1kUSGn48p1sYiuEyxDcnfUBudZEf8ZMjMa7FSxHGarjf4FhKJyysnCYrw1zxphXBuwUvAKiPCBM6azAuD8MbcN",
  "key15": "5SvKm1tENcjLGzveD248F3w9rwNhqD16Vq2FuH6TCRbDtafKvU1Gpry8tqiUGCBEYNwzDGBxDAkeHhPnx6bAg9oF",
  "key16": "5srBZAdz6BeZr8zcVwo84yCbrsVtxpe7s6MoRo5DeaYKTpdQ8F7aenTwyz2tUxKGoQ9TxewEN6eWwVhhs32tsQ1T",
  "key17": "4p2pNXPbPoXRkwaZeBzBKgHfPApj9JLB7NJds3v6QeiuKWAHUGA9okZRinarkXzxpPzEaBcQUBmCMbyz7DP1bJw4",
  "key18": "5me9n72V9oKuWTpmu9quwPHGLXHzSKG11QEtSRQ5idJ2DeQvVq5rvWEqQpagNC8M7KZYqF32kbKqA4g8LEhSn3KQ",
  "key19": "4H1dTLRNtQELzFbFcgkbDKqnC8WQcKQaj3hmmi34g7pr2KGp5jsupVJ3Z8d5LSVxr3AjYfeP2N2x2GFBd2kgVUwJ",
  "key20": "3jhvicHDGK8Qd6v6g4nHByfgPaqTj9ijiHkPd2D8DKbRmVb6TFEoHhuaF9MR8ZPMwDGHReJR7KhrpFhE361gukvP",
  "key21": "4mNCMVqmHGSzNXmiRUKXCBEuvtVU8mPaPB7aV9FhJ6bc2SbPinBYrsutHEoDm3MoAJhWf2VzBMe2kzvRcXugeFjM",
  "key22": "V6kdcxV6esjKt5C6HVbY1w2bK3wHH2yFEtY8NGBFBmzfU5SRm4VL9fQVRaCa9ghd29ukRnGcaS1ZPXsaqooQJbT",
  "key23": "5Mm9UeVXNVJXCoLiXvhqKQxbK8jCAsXcTaEbpNkiPDUBnWAg9aYEkhsZt2t5ABGj5es3PdqKrendavkn59xxhfXQ",
  "key24": "4wLpczdm17YvWT6poJM5o6sP1hHC1y1RKDQfEQKUKXoS9rEfgdNTnA9t5LhwvUrUnU8xKVTQXxEN8Gc3p4YbsuQb",
  "key25": "2vLWVJgaDEHHek8VsBSJcc8f1LKwpA8GU3DF4hze4ePPVoteGDzk3M1gtpzkfJxhrNbjxMaFGjs2B9ApbWxyFMxv",
  "key26": "4rdsaA3SzMTLCRKY7Ek4MhZfc9FYxrKcycguamvbNiRjnNQcog1H9ckL2aJ96zieKH2LCTjj1CypSLeF6KA5suKU",
  "key27": "61Pcg9g5ipxXJ1FWwtELagqrPmbgxMKL1ghdWjrcTavUdGHnkTkc4J1sj4XM1y7nTnP5RVAkCm2mRouigmNCUjoa",
  "key28": "XNeGPNr4w3ATySd4NBTaEMhoVK892QU2FUeq9K9Wv6QaGDkJufN9hSVbLYgCUftn7QruMfKDekjFouH8eyPkRRN",
  "key29": "2wpCg2ohs5B8MbSw1VneauvG9LJsDF3aoP1jASmYcjswrGonxTVZEuciLLjJbeMmpEaSWVyGvN1oDiXo8jpmuZDU",
  "key30": "9CsVmQvM7zsstBcGD56XLuR6Vtfaj7WU7VeY94hYJfwwd4t4DwHhVV6r14USpdpkmuFAyL1tSyqR2i8sL66bNyH",
  "key31": "5S396X22bYHhwWTDKyNBpRFXt3SitzzHzxuY4ttXRe55vJUQZsipSU2xjEDtSdRTrFprTf8YDvULXLiqECcDDqE5",
  "key32": "sENzZWBHXq3F8unEB4zf8waTAhzdu3FQNieqB8V8o62oCM8cKiKNWB2X2uT5umTPY9mxNovhgmQzcR6dbfRBWiH",
  "key33": "3Rx1y2Vq6TRS8idpHtZdZX8W9HXzZ6HdwiLTSRF8wNKhGjHRissyPBhYeGyT2yEx7cDekzyUwBHGfJbAH9Dv8nKd",
  "key34": "3NgCj8ioaMEoJqvixF1RCwtnn9nNac1dzaGPPEMMyP4ndHgyoMqi9BALnDUZ5q5xDRYeZPn5LRsPb7TVrYm7BCLo",
  "key35": "5LJXZFqV3T3Fgqs4ua1wLnCTr5t5GfySMS5cnmLyoNfL7u242L6yUVQVrZ9Eh92r7wCvZQhsEyyBtbyEhMfNwDPB",
  "key36": "3GewCa6bMnKDKQF86yJA6xP5gQaZfR9hAGKeKKaadiYBVRG92f78nf8LAZw8SjRR5CrSTZj2SoQsD8yXoqgzEfSi",
  "key37": "4F5kCZn88vizhwkUS9JpjsGaxTNzsq8TmC5hsS9kkfZfK7txysNVF5wa8CdQGtaB5UUdf3sBwCptF6HgQuuqCnpQ",
  "key38": "5E6HB2A2b12Kxxvo4hGTCVC8CH2QQLhXWXgm1s96h38Xz61qPinkLZ81Tcr7rBar7ECuknzKL1qYdoSm5Fhu5ZTP",
  "key39": "3MScfKByw2cFbhEFqz3C5E49m9Ey85JoL4TBHGuEvgsffCZ3fEaj59K7iVkdbgT9FhK4H79JbWz33QUUMfPjot9K",
  "key40": "2dUDAayp1whXmF5Pf5sZ6wmyLfwL5EFpXTS7D6RnhVxqCcKA5Gc7fkbyCMaw99BGjSTeRGUAgX7XvH1xzHp55RYK",
  "key41": "RCiK2eYYwxebso8gR1Az2bYzrNa8oMVhcF8QkiPi3AgzpNyLq2HpURaQM5s5Cn9Dq6NpLHmHv7xEDxzq5p1ogsZ",
  "key42": "3q2P7Pt32yLC51MZ9fC2dY9FGhcKCG3npBMvKLQXz2kPQCWqsmUHYfmrXMqwDEFxqzCrKYfjD4kq8aHJt6MEBpgd",
  "key43": "33qnW9joCMDxGe66HELKqYKDHwdxSEJeZYBbv1WWUk9TChc4DoxS9Gbw85A1wJYjrc5enL39JtUsbiNw5UQzebAm",
  "key44": "3GNvU196H24Z86nFSCdHYNBfyRx1J9QXq8BnY8DBqgKmfnsPHSqiKUxFcSpsyX8UbH1C8LxmYYagMBGEc4duzpb8",
  "key45": "kxT3zywjXCnfjcsGAfe6QPoGaMSQb4hutGwtH8ekNcnTcQo3pcdP4eWa8wMc67bD1hhqU62QmNSBxwLuk7iRc2z",
  "key46": "3zjwySKFuftmGHDRtr7QJmSscJjRRBRvTeb8CDWN3ab8aaZjti4ukavKHg4T2jrWyL5Y1Pp7TRYV4Mjan2WWeNub"
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
