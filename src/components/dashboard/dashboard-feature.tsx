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
    "2jLesFCuJ1h4EDjBQi8wKW5j5Ymmdjwzdou16VrQZMG2HscaN6n9rKvQj4mhWY2u5VttYUg3NB6PtbDzQboSyRCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxKuSFQSQxDRWcUV6bonX6jiZs6RcYCGmrQHTq5ZGBJw42sAQ4uuRqCLkbgYQczFC3eJ37xDRdaHyepLAcJwz2n",
  "key1": "4wWfQhZNHGGXjzQ2ssSwHRCryvbdjJXnGZJ68bnsppmEBEibuVc5cK91gJ9t694W3oNSpcfksBrZzJiukyHtGAcQ",
  "key2": "1eH61TXD8NmxXUorwsbzsP9gEb9wSGHyWNSWmDKbk4heHWaPYr64vXAWWMPydK2gHDBFLug4BcCdd6BbeUukiAT",
  "key3": "3PL3DTfYPgWwqUUM3PyjYNyC3wYU2e5shaVDPMei5fAHBkgVALtqjnw99oyoETaXEa1bBryYPnNEv3JZqheisRiF",
  "key4": "E5V1UTwQbUqgPcBwws74F1LWzq1aDL6ZPi4u1TR4LKidUVqZtSg8z4nGVg3346qNv3Lvm8jBSiKXZVEEjaXMj9u",
  "key5": "2DAzjnxd27kGpdBgpVzYaPp2dbYZeKHuCgtUcouPV7kUEk6V3BzLBN7BZTuWWj1gj1dzK6xNZVgvDPNsRjQB9Hy1",
  "key6": "5rL9USoFdQQRqprpGcywzQ5PSeQWtj4HF8WpLE2fiGLSRZBXW4ErpineqZ2SffdKBdfR4PVL6Sas2EA9sP8prQwy",
  "key7": "4z2e9SnLoUH7p17s3Lr61qSsmoh2dbkWbnwfsNhT27B6yEdY5QFvLXt52WHkAP4UTT5FdQj25CGfdtNFfmMPEtWQ",
  "key8": "44dZUg4bUEkKFegSNFN8T2dJcJLe8MGD5onzgiREBb1U9jVq52LZJcKxn2ZHyXBNDf9SK86EpNekwkk3ZTcUQbaN",
  "key9": "2vMV3qUy2yFLhjngofmzDHqZKeqGpNk2Ku9wZi74WN24XqwiwDb5BdhwRm2zPEz2kHKufsfTexSvqgboj4crH5VM",
  "key10": "4j5y6PcsPyvhQXfzWwy2xFmBRsVjZe6i3k1M6sWK9aHrTrJEhfpzeP8qs6Yf25vsCCcXqVie2Z6q1mu2SRaAJGB1",
  "key11": "aWRi1c39q4uwbXiDMN7tJByic2Dj1iYbD39GmuAxyVqrnSzWYT2HJMqDuKR6Di53dzDBnyLKQnRHtaPGqVTZzaL",
  "key12": "4n5ULfM6GBj6DhVFEDqoTE6EoMvrdsdcGpjuhEjqEkZdEtPDSRMQsZ1J1nx8G2r25zN88VTQCwZbWQ54pQubzr5N",
  "key13": "3Uc96GQx1cEJbZHgjirTYTSRE81ujaFhr1cAn4s7aNLTmM58NLHYTZEaHTKLoNm3Uaweh7juGqb9mMdkRvohAvqu",
  "key14": "53DSL6MnVTXXTKmPcDAtVTXSazPUWW7sGYM79mTc9dUfXHf89hZWj5x3tbtg3NR8cT2KNCt6TdYtysfAmUA4n1Na",
  "key15": "2syVDJynopvtQzjii5A8eyMmycfWigwB3341pRPjdGHD2i3NRQP6pjYccvjqYhSN8cLwUYck3nk4iiBwSMwrTQQy",
  "key16": "4ghkAvsaUt5nkWhZSWE2TDuCx6jZq7K91oigqMHc9HqWKsfYhL83VZA5CzPM6wmBsuknps42oryK93fUqFD4YRjU",
  "key17": "2kLAoSNy7GLEmF9vkMD6Rb596nWveS6hbokCUwBhykLBHcrx7LEGfmYXbP8CNT3tLbbxbe4XkM6Vq5Zk47PvTMAg",
  "key18": "2989N6XPEPD6EbX5brNgkgGsBhpzaL9dqyot9FSssd3wnmWL2KXFYd8HAjzzsCGc9VM7Ehr8HfZtFWozrUn3rWcV",
  "key19": "27zAacAVgdPD8eLRNRYAsH6X7n7KzLeD4QTT551PYU5v5jPS19M4Ekq6qdDFTdyQrDPk28JNbi97hyHNff39Y5GP",
  "key20": "FVqNitPmmk2HgC8SCbhkNRixT1H8zYMQio5utc9HNThLwjXhRk7U9jpXuZC6A2eRE5fpUn1K5WGEqqzPPqat28j",
  "key21": "5DZvWTm1DoauVy5CQPexW1rLXCB2M2HEheotFercBvHoJNcSwc9GzZKLupKj8cSN1pYpewXbiBZW6Tog17bzramD",
  "key22": "WykQna7TjwWTSqS5CnCkjcD2mcFUvjsQ2LgVDnz2jntSK4EtcRU5JsQEe5T8zdQPp3gYqioNKVCzweegryRgkau",
  "key23": "5aCXqoKL1XM3CJsahUPUXLaQsaEh6R5zWrmhfyJLtkEoP4XFzTnt6uJJhuE8zFKsfBKaUFiCWi2BkrYghW8PGqxG",
  "key24": "51ABDTjskqconnCXZpg2nZJjD2tSYSUcSWEAVNFuvvU6hkvaKdZuJ7bJPFEqPBZsRL4sMWadqWtKU18enjCgfdFL",
  "key25": "5wcQq3RRxTCDB82qCL8d6XnxyLTAV8oE6VdaMc4uL65kAAUgYW3tXouRVDd738orYTje9NVCFX8Mj344wRjsxC6e",
  "key26": "4tpzX8MdCLxv129P98oXDa1DMHdhS3TvsSv7JGa6L89EdT2T8FEstF287S3aJAWrn24VaFLFygsgBfF7CGsfL6af"
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
