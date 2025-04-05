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
    "2o9TCx7RVBn7ZjrryYHVuo2GsV65wUzN74GrtAnkdJXxdbxijNbY2VqjERR4cGcroDauLQLmmASJ2Vecz116GVuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFcCBKPTWXBargXwSVRJsfqm6skDsQcL2VyvGMSpBHiCf7EuPJ37vn4vL6cdNUiN7a9ihjKn2uTiCzNA6rbJvh1",
  "key1": "2zDfGB9yLA1YvUGipLtRGEBHQmUxpfVoNmCmdNaiHYCQXPKHmG3RBKXQD63hid4h7hUVmFRuWQWv14oMatw3Pprv",
  "key2": "4QuhyyRKQn3WfDmyHEVUaWkHqp5QdwP4MknJ4wJVuxrJ9rZEwxVx4jjnhvAJjWBu4WDNXHFDxxe7Y3HNTBNQU8ok",
  "key3": "andRCE7nvcpJN9hNhhDUTGyXMCtKx5qRq348fF48uTdcLNPtxAPF2BG3aSmD34H311T72oKhb3P3iawwiwQQvZr",
  "key4": "2NPfNDY4fMGciaxUptJweH3KmvG16nDUTdGu73SEH8kgQK6suCYxQFoHRTRCWYyHyrBpmSWJQFvzSScThNQhRChP",
  "key5": "2X9XgFreeFcP1iZSxS8uTNJgnvJsF6KREugUPvY5U5ci8Vf3QjyFaLnrEYHoHqRUqYir4eibLeiPeqLaZQZfxs1W",
  "key6": "BBXMJQ8r8Y21MQarbPsx82RKGkhXjXEb9xBMerp4uPK9Bnh2A6nJpfH4Ri7SAJBtVGKLfSZQU1S6A4wXzqCkeEZ",
  "key7": "4UA9kTtqte1UWvjnpjyv8VRhnjo5cmLS6kXKfkopBBtxmvcUhk2gWxgWDXC9pTTUUem6at7STB9LFHe1K1YvguSS",
  "key8": "5XHbz87aqHNpcctGVum3ZzF7N53aA9LHB8ZJ6W5Sj94phET8UmNrX5tFWuDsRancaVtdDAE83WbsGU6ZofBLpDmY",
  "key9": "2BG8XnSioLFYNhnDHHARxDDGADpqyzuSNVUAP5GN75hrej9KmW8ZgomLKBNP8Vk9TiqR1G4WCNKR3zUw5jjJYNqp",
  "key10": "58G35W5JKFbZPey3DfywTp89kkVezm4mLnx4dG7K59378E8Fyho8SUjG55i7ozvfYs1zST81BpGUMDxyMBwRpKWf",
  "key11": "3F82RCoQqk4ZtvPazLKxnhiSNBPyrC1D41Hj26MyNGBNJY8sB8G9gydqqo3ub3U6HTkfC2s6UdZ5j6kLxTXjE3aR",
  "key12": "3CEZwjrTGU885j2gnQq7Mx8LEMF2DX4EW8smcJTiZYCKDrDgQQ9Z2BauuekRCh45QMEENBFc7xB6eaKHuLUWomvL",
  "key13": "3i5tkewcSARsyYBiGzp4etRmdFGew6QFEgK5kmcQZG2Qhn4foDeG38fejE5iHAtzV2Pz8bKHeZakinZ1dAsp5CSj",
  "key14": "3YiFViDNT5AKWQotf7sYcynv3GEsUzKDYKMF5JoJbWFCBazoCCouQTGMcpG5S3KWeaESgkjN3Stpt38Watcbo7C4",
  "key15": "zmnFBhZVp87pvPjqJYzKuVt1vjWW3kpGxAfdJQcdgdNH3LwwQ953awzXLMxKagZ4gqCgngDhGjJ8Juu2fKyE9NZ",
  "key16": "5NPNfoV1K35eBFHJWiS3GS1hxTPTRyKjsTm8TioxhZJToYjYttT7LnjpHLWna8a9RQgQdd3iiyaN3re2vZ7t5bkt",
  "key17": "65Jq5FsXz6Ng8GzXk3GLXa2QXD72d5Psh62f5UoYtdDfa7PHAeVWZktFJw2XgPCXeQGt2mAjchkudoxqKMS5NDUX",
  "key18": "5Cf7Ye8JJQZKbpZgxeajHBsgYHLseEw8SyLpm2HxHVeT2dvo2haiNUoEBs1Kd1YCYDjSDLYcei1o6z6WuYpDimjU",
  "key19": "2EG93yonxqQsSyHJDtZYxgBmnkh7gjNtg9wNw8azvqcdeVR9eXKUTaMPjmbXRgvNuSJ5ZeeyjFgZMKPzkm242ak6",
  "key20": "3RaTUhwEkH2Ei7HcZbdSdEJkGcSTUXo85xGigHdszmx2d3JeyPSmRmMcASRGUzz7bdo2v5sGbCTGa82ReFL244G8",
  "key21": "2DVrrPnaVPkFUYkAPkGgQfjBGHjfe1FtRM8dhzsVS4RyjWX9aDae64HKYEfe22Lz967s61xBw5t27b5hLc3MUgN7",
  "key22": "3GeCQxPPRuU6KcmHLJaCJfQjMtSXkzf8NqQ2KbWVMyqKu8NUWUkMu36V6v3wdHjpPQrTCB4po3G4NRgziHS5Eses",
  "key23": "4aZwH4wBceRGasfXgV6NRWiBt9i59Cmo5i1G4pfG8G8FPX4dHAxK6sr1XKbS2cEqfu4WzjotBz3QyW4x8aZmHeKb",
  "key24": "5FsxBQq4Jv6jx4bKwisSRAWrKfhDRJkYjQxcRuUmudQ7WPKivqK6fDvFVbsqV1vX6UYqS4wNbCPxLZ3QknJP6ANx",
  "key25": "5pzLSXYBvSq9Xtrns97NswcSwKQiq798xsYzitpWUUfE6iB77MDPBXaBxFEZ1UCXpmrTs3kLjPS9ZzfVNb9MsUXU",
  "key26": "38Sb2i5gq3tJg1RsLDDHCb2stQ8WH4KyASjrzoFRCtGRSjQrTaLc4jrxEM6kHkV86J67R7i6tEJ3UEHSLugjiExT",
  "key27": "3HVyAeMgZsumawfdWoyccby3baZMM1QdR4JibrVpa8nCEa2fPwFwvckBg6YFPJUTN9B9hrvVUfnURy2vHhuht4v3",
  "key28": "3CTu6siNHb49PzG5GPpG2CwP6mk4s6SDTXwxRExNBdtgE4yJj9jiePoiyRdpnrqC4K5txDFAEmX877odcpoSj9Zq",
  "key29": "3TXe9bSgrcuF51wZ8eiUoN4Q9gmfa2eJyhDHqPrreM427uzKmc7cZUAxteGVrn7LP7bYc4wnhUxaoB6uv5uHfD9Z",
  "key30": "3Rs932cL1WvxJc9VfuPvLcjDZ6pESkdofSbdYQodLgpPV9coPkCvxav1C27WvwjhEoNPfGSqwRP54Z6FQL9oyFpS",
  "key31": "2zko4Yiqimv46ufH6wG8uGdW4KFgP1GNusb5zwzgnTCTMmSctZCzgda6F7qU83G68Jbeg1RBQF4TgJpMk86smPhm",
  "key32": "4iQPUQh4EjdifeeW1Wejoy3mM4HBey2LQEmpK1STFVoqwu3Su8HULg8AGXV1wXwhFujbf1G9vL4aWcPnqAkj1Ydg",
  "key33": "4jm3deZb3uQfZBSTeBiFYNLMz4fHaDL1vPpnqaWmCSRNx8sPqXzv4aBUwaYjmKPwovRAnWCy5H2zW55ZzVvtrvQE",
  "key34": "32hpeH9cXhbvZiUW3HAuXGLUGJom2X348R5a6CgGFWu31UpPyS9fho2ADD74kgW6Q34bv6ZbZxkSRAVQMgtm8qNS",
  "key35": "2oN7AbCnUaY9aH9mrairMtHAL3pDwPtB7CE4ytSEFEXDFMmeXF9yEF1xYNJJwuedNnaEwqMjvqptFXLy3McFTwtf",
  "key36": "4vQ6mvxTAtDvJ6Uqt7CEkdtW4YFXxNEWRzoBLGenYiAXr1DdBdaw2BZEspJV7Rf8ZajEsEn6aAje8FX4qEiF9qrZ",
  "key37": "Efyf947MN2wdcmpe3gydouXLuEBwG8ScRK7g8p23f5iJMWMwBLNRkd5upp71Vt1uQCnY1KHAcUwFBLvzPfShjJP",
  "key38": "hKLKnJJWGhFY8Eo1Yc4TGiSDA3Ssp6hikdcfA3FmqVA571874iWj74mbfsM62yKrqyLqG1qNb7jSwM2G5jrr8iE",
  "key39": "2TFnqnTLrKBAk9ZxKZ9f7AEFHW4cZZ8CXBFuwLWqdoktxY8ftE9J8SUvTmoNswcH1bwFYU46t5HugNSpPvSeFvgo",
  "key40": "4HJhXwYGd58VYgggeEVqAAZ1rugtq3dHzM7E92eKZWMTDDRUS28a7Mmw5tHcmESHyodmzSVxeaMsKYNtopb5n343",
  "key41": "63TYEMLAu2eyazWv6gVfim6Vhp4xn5eznjchvUi9TESqyRLryAMcbP6y2fZSMbj3QiVQPQqFTTYD85RvwiwE5F1y",
  "key42": "3o55tAJZcJAnCL74xCY58L5fcDARf1j9JGi8E3KnqRv7iHkaD3GxNWUh2Gkus8urrfj85n5Gckw8xwCo5X1LUuT9",
  "key43": "3SeHBcyJbQWRiFu6dETAGFY31MMXZSekMPg9hvThzTdNWj6GJRJkoR9J4CU4s8uHCJ7ooB61BfSnmMGvM9nNnJ75",
  "key44": "4dyacFZwLDvpjPZutUMkwjpRqqLBTztDq2CuddWCtyys9GnSVMmvfqsDtTFZib8R6UfhFkYjZZP2FxuryShU1R3G",
  "key45": "22neBJKCp86hH8LWnfQvPgrHdpQqUkJPPmFQ2Wxyh3VTQkFXHKPVaMat1G4HEyXiFngnMrnbz6LeedRp5fZ5Rpe2",
  "key46": "361hjrc7K8diPw4LimSU91dURtmnxQLREGpVv9fv96EKmDTb6bwPuTdQhcfFnUeRoXBMLRYyyExyMESHVAsMeBns",
  "key47": "5G7bUTyP9UoVAV2DJLoPtAPa94jjiZ9RacrFnRWkRhJReK8tCJefNXc9ttCdgLVjtDjMcR4suDaGEdp8basZLTe6",
  "key48": "5QBve1xqy2qPm75pRzyTqR5kaEcvpBNrLd3YA5nFfH8DdV2owmWUmcdGLsEPhmdBfMV2yz5LZeQjsqNjwLWQKYeq"
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
