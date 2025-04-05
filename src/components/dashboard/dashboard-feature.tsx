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
    "4CrJ9uvgsjxjVaKhALTpFfvqbtLzeKGj3cYYRRGiHUyxeQKjW8wVTMVHgpyv2LhknJUMUwYVYkZwTpnQQ3RWteaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NepmasRgcqUEeKiX5yVj3ms79wVp5FXiZUPZc2HjPgp8aVbncrXdwD3AhhiUMkxCHUBWCsmecA2Te1thJ3hUZsX",
  "key1": "3aerjXy78aFETeAuwiScnNE54AqD25k3cSBdUdQAXXoCEN1M9PPf1otkHHzNLikqHMidp9XmdoYeqZQzVSvpLX4n",
  "key2": "3i5MYaS6fSqL7auPQnVYBPyw3BNKPFyKkc1PRYn1WcogQdVuNVaE52vTrjdkoVv6sYiX7XU4K1cGKFrjxj32wU3y",
  "key3": "5xQTegRfcX1sk9VoneqXNaxQ8oFLsZdEJY6zaD7WZBA33wWRg4rt9isZATCUyFCdg75jvSRvoD38znScXSZY3iKq",
  "key4": "56bJyZBy5d7pFMzfLKK9ULv1PV4Nz4QkxUZNtTqWXSwJMneT6DppQCiuUoEJqUbmQUCGxLsNpRFtxhyKgMBRQbhD",
  "key5": "5pRPtu3kiGVYHMmNXwGo4eaA6Cthbp8xsBMvscf2MtvRRr7TGBcpR9avP3ai6c8RWSWWEGePhzH6kEgWLfMgHvsQ",
  "key6": "5jya3qUNJNax8Za5ooLAasHZtuYzVzcCgk7ahitJy7fb5MaZBzZA1gWLvgCzkvDyq3o66ZERwn97Yqd84JJzgcuB",
  "key7": "pPP1oQ9gPLYN7wrhydyxp5NWAivbfWDTLpF4qnpac4X31666uvJaK48HfThcuGH1P9D17SPKavk2Uew7YebKHM1",
  "key8": "2UryD2jzvZuhL6XkDycXJGNCS5uPX1R8cvKZhAMj9jPCoXPBY8MV4ZjiiuhfjtQjsZG5zqq37wwupCmg8MQSvoen",
  "key9": "5QP1jtpCn7GwdS2EUrvueErobSo7UCarrNmdnUYj5tBuoiYt3g1bqGHTgVhWNXcGMBXUXSUPE4yP1tUEEr21i7u8",
  "key10": "3WymJZqs9Dq1z8ZB2JYQp5qz19Th8AKUeTENddUfZxAPgTSstEM1NgdSf8u2CgVmd39Dxpo1yCBn5hwpz5VMLX1M",
  "key11": "2EZH6ueTkXZeQtsa78GGnMfbbpF4hzwYxcaG4h4D9KNHLsSVefpHJWE8GPfmdyHHFabNF7dk7jSuBqvDxDd4ariz",
  "key12": "4PMM2DtVCuJn7HL8fKBawzP7bXJGNRPxyZzyFt87Wt1SD9SHvzrZXuBgtTuZ9kgvVkMo16vSRfcTNMkWeMRLgzGW",
  "key13": "2dGARV6t2XhAJSdtYpU84aQnQAsKVQHNPFpF6mJnjDTYBrx831hzENUhDJa1thdcNryWqnXeY6THDvbrmi1DuaMv",
  "key14": "5XC55ZWiZ18wj839G2tzN5awyT1z5ryTmAj6XABGtjXxSqB86BqtePUn8NGdU7oCM91bgVTBvtYcjjM7ifZsmdTz",
  "key15": "4XbABwNaiUqk7wMNkGLPjp76QSZ96aBKMRKY82ri44smSD2qSB2y2cLVwhw3gzf6MBEh4LmRYijLS5X32guK9Qxw",
  "key16": "NSM7pG5LGrs7fniBKzoNMez5V9NnAfoEHEeJoF8BbDZrqaS2SMnBRCH6ANCuQXr4yBPvLG1zWthDHYfAwfZd7as",
  "key17": "35yHmg1mpfU7B2a7dsLDLkXNZWxynea86WtPNd3wtq3FvWrft1fgFqUiB1oWDKGkoYzDrKbt37HU41RshMatjQbM",
  "key18": "4WeG7z8sb3ABo9i56Bw2yeswWdDwchh4S42iXXgxy35ZhWGuZfRegR1iA9BPVv1qqpjWARxaZ6Srzp9zv1do8J8g",
  "key19": "2EoQU4MWo4cibSBsermwrmzzWZe2vMNRTA3PRSoeuGv7kmLwv8pMzQSVwAJs563Nz9Un4Me8ZYVxsTfScaAJGFYG",
  "key20": "5wu54mpBFpfPp3dfMNUbNhK4fVykRtxN9ioJuGwJa6fZvDGbCWeva6y83vkhnjP7kSdcZ7dg691ay64gA6G2bMeZ",
  "key21": "5usRk7RgYbSq2tjA1wLzcWaoEBhnDgnXheJoG6PB6oDBAaxr3gmMP4g5ubQQhiF8Xq1vHNiCkTCSHPdV9M1Sg32w",
  "key22": "62oYahsByeqJN6aCAp5VN7uQ8uoAzgD1cP62UvmGnX9Dsbvm4DX4T45fvZ9chhnZXByCdkapgNXyCWxFcc9KVE96",
  "key23": "49tGbETBXmaFtDpuaNxvWtgWjVVfVrwaD7g21dwd41mVH3fuM8ESrMWKPsKWKG73MLpM3oG4WTuxdmMYqy5B8k8z",
  "key24": "xKDNKFdCEHmMufy6G3mg6fpgV4MjJGept6oy6W7YHDFEwoyBEHFHmbEYLVLuMcbkmbazUhhL7q16JJDEQtwSDJW",
  "key25": "3jX9cACcJf8Bjf5vk1cHF2hf1Qrta1htSe31rDeeMZSVpeXnpX7EPeSf3U7d1X5fdSKCZuN8brhJyYjNwDkUXSyJ",
  "key26": "4jeqhnCiVvHkyvgow8daCNCnzTmEMDF6KqQcQrfEuEXXP9uA8QvvvCgyUiXb1qoquEEJXrqdwBKLBEbA7GncBwVF",
  "key27": "4TLRy5pYYDPx1XanSBhFtXffYviRZEaw2tsy9QhJNXkiPfdQSUPtSdLZn4PLFBj1x36J6gjt6DBRpo66UcutjEkR",
  "key28": "4XSMzKoJz8p2gYe4qxE1iYCaSMZUbpwu6bvgVcCUhkTakxenmHmPUKvUDmTSFHX7jah3R4AciaZ5HJ2XVrvgGgeX",
  "key29": "24fcSpZZcJuB92UpKGYEE4XviEk7ck3FCVxcK5e3MomU4axzuHhS6Z5fSWfxAxaLfEosJhcaAgJvNT7tUNKtrXnH",
  "key30": "54jkrChYvqGAe6oGQrQ33wZ6ZaW4MjuEx4oPnkihV33PJjgPPjfUdnERbt47Xw1cWbXG4ovw1xKQk1QxZEoQzG1P",
  "key31": "2bdNtVNEk9zRXVJKW4KqahXP85jjn8zAhTmU6GDZKJsfuHt98XaJw3DBbcQmi2r4WBBiFKmSkNCY1xLQC58Kmh2n",
  "key32": "3NwnPqTbnvq742JQnmTTDyPtSX1Tjce2o23VdzHAE7HvHVMqEFehconrmtf4nMNnfY7CLngMFQp2Z2WxtXYpAFcW",
  "key33": "3TFzHhWraYE5u4ktduWp74JBrSuDMXQ7FrpvavULe1kZ7FQhUGp4xtacxhvjS2U2FPbEcN4fphmw6L24TutjZsBa",
  "key34": "4nEB3ia7FyVRYADfZ7wMQxhk6d4HzLKhxaoJCWw8aKCUjTSXFExxkw2o3wzVKEo51A9Xp2FqFwMD3RWSi6y7Zi3G",
  "key35": "2DPdw6oXPwXAD6zVErCd7cd6ETzQKmwxwXwRY5oCoNdwBB9X1jmEKFYW5QskTs9h8gsBqBv9zSeU4a1diLb166AJ",
  "key36": "tv8jzKfzxCeLvqjfDW4cATtyRoXAQQixtbMXeVkWxjN8AGEbDbMGmkssQxC1YK9y2NQ4Gnk1AL3fW9VCnCp6c7R",
  "key37": "2KpBgoTCPSEUMMtBjyRKKp9tvN98m4ra5YLuzjr4RVTQ9c2RT4Di6XMaHAhq4w8RisYeDgsFLVbJwtyvePVaXVa2",
  "key38": "57i3orNxdT9uQngV81Tv6KACNTRvvPvMBiuEq7ZVXj96aEqiTH52y5wVy277VKUReog6xkBncqRz1Y9jDqEq1EwZ",
  "key39": "2RemdB8esu4eT1emmoQy178L8KAR3yDRpUcHGCjvPoiXeXitknAMyVavtmUyyKRazMoma6MHiSeHj76djFspybNB"
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
