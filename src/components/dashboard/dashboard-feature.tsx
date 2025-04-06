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
    "5K1pyXdbGLM9akPLzBoLfBUwxHKDj9ZBNsf5j4KfDQA5UUjN8N38QEVnMdCvqGD11vPyR4XtojRhUV6jwRpATtrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKDm2TDXGfDq1TWLM5R4stGvGRwqNWR8F2BSKXvCWj7931ZoznttAcLDhi7nw65KLABmheBgy92RsT7YVJUwCZ3",
  "key1": "587649NbhqLUaF3G3JeaFkpUGj5XoU7BcNrYAnX4vhrf6RYhbGpKaZw1WxVUcz7H1dcf6432K7GSGAPPWXade4Bp",
  "key2": "33n3rCu5J5arSEBYQ6FA6M7SvkFmrzMU1tQ7oLotU1kz84tqoQygWaQh8Jgm1yyrbQQqzQQ4VTekeCgmndAhCWn",
  "key3": "4qxtYeWn1QLxR95YsqpDc9x3CthNVxQLCMGrN9UbNHZTDMknnYFhLHkLiRZdgPBaQLsLXFb4bgLABPwPcSewwuU2",
  "key4": "xpGy4BPWt4nFBTZCnwoTsZhXzDKPFgfvMmfFR5KtMW4nyJTx5yffSos1mhuSHuast7i6PxVSzXRCFHSbxTtJPxP",
  "key5": "3Xi2c9toeVk3ruu4RLAG3JxLgf1N4Jzow48jvX21nvLy1GE2ajfq4MDBkktA8E2jcsdCAEhKAcHwoMUXpiPCxe37",
  "key6": "3THZJWrG7bBSpbE1wLAx6CViZUWVsstRLvuq79gkp2sRqRMxLqMnGbajho3nctx19d7Dx3knSZmVUdZy15krdgpE",
  "key7": "2SKPQgRgK3udRV5uCSnDEQpfogsVGBjsNZdoU8a85YuwrHyXaLTsM3n4MKjbJEWBU366rczNK7KAnKBXssVW7peG",
  "key8": "tbvCC1XDvK8hVpCvA6pbdtDs3hCVPTHRGZAdef8kkJ1UyH4JgmKnhgohS6eYThTBMZJm74cFPEbuza3CZu1hBsA",
  "key9": "2yxVDRBViF3AiEJAA19wDgpLbGNorBp9nhxo2qTQYUugNjtStJvdyGdVjv47VKJyCqzxU8ehQXSx4mFxSFiPS1kQ",
  "key10": "36Ws6WS3ZLB8YrfwbFhaxD63mc3jxcutM8d1ieeJ5xNR4MN5QqjQQhMN1yBEw6waqyqJCsCB4UoZCT2AjJ2jneQJ",
  "key11": "3Ug44ocoEvKwgCYU2sCDqwKJ25tUZSxkE3sPTBsF5qVNyJ1Y2JgRUtTdZSeaMa6g91yW8K5VwrJnwSrHanHVJ9LQ",
  "key12": "414NpZe5NjLUbpbFeBxXhXSK1ru6NF1DapuVeCuNcxk286BKsnWB1z1pdNjvieegkStknDk5R1dbjzuSRWq1SXSZ",
  "key13": "3tEEvw7HzwM75twiAoCn6dSxtDeXVU28WhXaA9iEwQ8RQjSms7btps3Ks6FVSVDHjPq9THutTj18ZcbrXt2v2AUL",
  "key14": "37KooSTpAaEmFWn8G2CxKPPpDjZKj14snreksJrcrJ4RjRV1uQBQvfMj7KxwZgdYgxhyVMmPmWyGqLQUgTi365Re",
  "key15": "276duWJYC1E3LmFx7i9Z98B4E9ueNL5bQFhuR2B8xtjhsGcUZi4QjutDAgqLHCDpzBkceHdrDq1pGKtufFftyUZt",
  "key16": "4YBe34m9xKEQ8AesqGCVF8B38tXaFojKFGMj8m9YQ9ZgmrAhv6zubcz7VpnJffRYLJ4wfFXQoL6rfPiGkPG9Za4u",
  "key17": "5Yfwbqi3wMpnGs4HHkvpc4Sg6bzx2L44uCTEtdRx3XbjWVYF4TAR35tXjrvSwrojSd8DSrMGXoemyVtRXK35SWhB",
  "key18": "3HgJ8yZNx1Q8Z3yBtfxKKT8Tmhpyp59qeFZLG8EUskYdnJkcJngvDJj4fjM4wQupwseV4X3Ej8EpbydPYZvmeCfw",
  "key19": "39A4fjUVVtrfQ4YzQWy6jEUdse6cWHteiBefKUTDqfzziGF6zp4KU11UzMcFfMgd7y1KZ91uVuG1YaqJvqJpY8Q2",
  "key20": "17Bcg1V3GFBQhix4xmLEJDVCaMZ3FqeyVW3aFWEvHyCKsAbTUfEN7dWtwEA5tKzv5hiobXd4kTW2jJgHdXwkuuB",
  "key21": "5HjCugW7KG4JuN8joo683wnopy1wjSoPxLu5Dwr1QUpt2QbLmakayNAbeCeaguXUMzDdz2WpaH6GUm7cnRdSLFav",
  "key22": "4qWaxUP1sQHWxwxnya71wCw41TWyZHs4sxCeEtQ44sK9Em4oHgfEXJUToc4nqy1c3ZCcxfdeKXoNqFx6po9X6K97",
  "key23": "yEc7nz2Epkvb4LtLW4n5DGLcSgYZrLtJhpQuNq7B2oFYdeC8R1LXpJiv8Am7Q8pcLG1Trrhwy42ewiCEPA22kmJ",
  "key24": "et42FkR4WHjPtUjRkUCbriAGmh28pfckLC7w7nT4WsEYzLtJNHPGQeERqfgafxenp98oEqp6HLfRu8BAsExDViu",
  "key25": "XSSVK4G5HB8qviYYt6QuCs6TGoG8vq396Wfa9zeztunk9JVtQSMFyA8thZtj4zk6EfeLDZ92DTi9DS3fZDYQFSu",
  "key26": "4pCPsYAv6zJDRrAxaoo2gd9AgicQmR3CP6n5s5uYjkCXbBP4zuGArxtHLqwdenFYW5SxJWjKJySHAyonvwdejdrD",
  "key27": "4xL1F8bvQJpR2TRVKcCr9uZmSBQRNksfnzZjXn6CCVDrSaDoy1AfqiVm1FS2gYHpxPUf1e1Pw4VhpiBYv5GD28GU",
  "key28": "8wtyadRx2YAiCDLDfN4GUMSxQ1qJhSGVAU8UzHKCLCgvsh6oxp4aLyny8fZeBRaSzp2HVJYPjd2SdQt79QR6y84",
  "key29": "TuZmQJnszfzva6qbCP9iBC4mJNUX3C1oMxqcyF4Pe66AekhR4MP8LpD1gANtP62rgyTZLsUKucvwYg6aLZRpEcM",
  "key30": "32fLHmKCoY4swgpiTr2BGuJtmkDbdb1JqNErhYFQHHYVrM2aKbJAu5LTy5bvmeuyNaJWorm1rGvEMaAgNRRJvc7o",
  "key31": "w4PrFppshdUm5vUiDEP8jY1vfn3CUJmiGMVtC7w8YgfBJpVFXxaA4fEfnR1zMePSyidyHUZXi1P84q2EtZuCAzG",
  "key32": "5Z4vDGoYe2r2aPry89ipa1eHKhiXnoFZV7ZGTaCGae7kLYFb99P4dVm7Z7andvday8n4JTx2TFJfwsYiVD8oiYJv",
  "key33": "2xjMXhLdEJ4zngpwHAPCqphHxnJUQWK55btrcP3fE25sK43chHiyYKa78JVUosR61pwFWf1tHBBBqNcjiT4eWjhP",
  "key34": "4UZ59jvuy31AhSiUDfG4FzpwMf4xrG27zSTfS8FG1NhfYX8sx8Yfv3th8QjSSumczVir1JA96Z7j3dK9jPDGm1aq",
  "key35": "4E5P3xpVb6da2GLQ5eLYucvDZSkksbvnsyWZJ4uvLzwaUwVwa2DfJnFGybLib5MUPDakVEERgNGF2RfSqKqjd6qB",
  "key36": "XfrmBkYZq91Nq33jaT83UjnXhs1cuWoiT35GeEXHB8JKE9345nV2D6wo6sfkztDFwptpcqP1kF8NxTRZvAymzRg",
  "key37": "4ediC5ghRHFb9GBubBTUGYrRodMSSTRZ2FRDDax5nccL1WeqYssccVj83CpDx5xYn9137UAMbo8cCWmLD1zxuaZj",
  "key38": "5rhdAis42ZM8ZeMY2C3hbZPdeHEntD7UsnwDb7DWB5Ydu39YVx31U3swp35XsDrRGZccfuKgj3bwbs9B45ineECJ",
  "key39": "5S9UkGYXGxSnAvUptRtmupwhQimaCxErUo1MfxkrjRtD4rb368544JneBeaypp35NbE5EnJmBrj5VYgPu91X59er",
  "key40": "2ZZVh5pyedfZCi2ifm7pFoGiTbD6RoAdLjgmYvFWtYVzVL9KZzUvGENcv3W9JJKgqvT5M211RapE3o6sE1cyHSU8",
  "key41": "372gqbuHuRgSoM9yaTpAbahykFWxERhY2Dqhdw1G7UoHd8DeDSvegdG7fS4rvRaLVSfQEbXUK2P99jmU5xN4yEuT",
  "key42": "4skqkSEyCVjn3pFJwTbXJdyaYSPfBVF9Xshxdx49ABKYXtMS1NRPRjGT9mdisjAf4x7cnD6HbFzHPfUWGiYvRQTL",
  "key43": "JnsDKQJhyTJcLW3wk1aEdnadMufReAQooUi85XRJnFJWiEFj9wF4TMj8ZUH8ThjRLvpJraBD4PGvFgppJBLnK49"
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
