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
    "Er4E2RSunGXQ4j4hFvLmPgmXoAQKXpYDsvf2VspSn7RLvtuaKobJhsq7xm6LyApgzaSYRMFtsBFrX15iNEXJQhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSgDpFZn1hJuC5HrSLQs6Sz8RxtfhsaN5YM3k14FtGjWGPBHMWCKzegUUbcbJZG8BTCVawQ7iBWpVJPJxp3bKqk",
  "key1": "3TYHNHwXUsxoxCZXLEPh8Dd64KRhcdzooCXPbKvHH4sDYD6Zza155Z2cvZkpVgj3JKhWuEfZYbnvLofrEjniyMLv",
  "key2": "3cMUp3N2e6g9QsFRRHVUuhYSgXss2tSoNF3XyuTuGguFqg2MgF24fhbJmvxyNfu25J5dkDzE2cqB9Nu1MgpZsiTi",
  "key3": "4J438fLpXDKMRrSjiF1veUzA3Yqgs6WL3LsPFAFQmhGSvF4N3DDxUvDdyMdNLEYnyNqj2spE9dtG9cAipEuQvY9C",
  "key4": "do3d2PZnpUmZ1ygMQUf7L8qKcfKAiuVVQQ6WxCU45D3ti25t91Fv4zzJt7h2Rx9rtAepGyRhH6AZrurtnFAk7Xa",
  "key5": "LQJNZGpQu3TE7tJEB7ZyuFUMKfdYUe2fNkyvyYqSHxzz5GVjThx3Vr6kjJnJt3PsNfXVpQikgfgkfHBiHrtRjJV",
  "key6": "4xFpZKY2ePJStg6miD3X147Jft9eE9qPjTVQ9qD5k8TowJjw7Kn9FH1nypkcz66pLbq29gEBEnZsSYgANFkn7dwg",
  "key7": "3po8ooDyW5yaaCkWEi6CjNW4D8iTEQJyQ1nXzBaeszdjWjRAMzrv7QLCoAsZFzT9Dc9r6g2pDdqs67btZuviQqTA",
  "key8": "3nyZ23dNvkBtMyXLgTY3brdpwUXkEMAExS5ENAMQcPmGed34VdYcW51DAu3VzyEZ1fRkXegnhBssN5FGBzWSbJf6",
  "key9": "2iyz1cZCJ9uZjzUZTeFTyf9cDt55LQK5QFKCS9CjEHuAMtXUfBuAGDqHnkjyuM7ABSrkDXDDztEtyLHvMpThLGG5",
  "key10": "4HMagsBYJHfT35aAM7hg3o82vK5nyQ7wUf76wZ2C7pu1MzGRypAUFLUVuYwXHpGXgooYGENVgdheNCEriThrTfFt",
  "key11": "4h5JU7vGAeFRRWZjZDZCnd7yUgub9RMQ5k7zA5jaF7wAq6MNRuvokZfeUoHBAjSkxSQbJGj3cqYWEW51gyP7GHwt",
  "key12": "kbSwox6WtPmQeR6zDAPkvWARytMkHkxsAr5zD3ZNEQZ3nkFfbUTVLkJvD3Vvq8K9bKE7ZE8wdpJhNKoVYdUJNoi",
  "key13": "64986X6vLetaVG6r52sVSaWiMrPmwRNrfeVyGfV7F2vm88woNfsmRBavUQSaJ4i4kRXyqiY8TMFFLx3efteuz7JR",
  "key14": "4TXGLwDtVhMPAznd5BMdps3bEiiSNDu7id5XrbzsSudaJUT68y6d9hYdnXuCBNTNSxG3YoJ9yMHzKjWJnAPhDs5A",
  "key15": "3av4tYtncBZAELhHgn2WYYcYFUW29H3936W6uG1urqZj7emz3vNAg7yScrRbzAGxyn1jYgqXuYrFWHSND46Zgw6Q",
  "key16": "3JxqNPgf6Z6rKSoEqQyiGBsQquKppmfW1FXtt4YUMqTGAdFLUuy4CFDayV63HnB6QNsjvohAYydTXeVcFd81NWu2",
  "key17": "42fAF4bVyrrLqNaRWJi9BFevRMW67kcNaFJUQrKkiGdpUvLPmnGadp7arsFoAmPwbfHtbnuWyG6Ka6AuvcSdGTBw",
  "key18": "AL7y86S26xAifuRQXMdmDxcEo3n4BxumKV92VBPrYZNkMizHKCjG5a4HTF5LVqFhTRtyFAZPgE36wXN7cYzKD5v",
  "key19": "4VJUsaPx2nzhsVnsnVmYeJ3MrdQeGqb3gFX3A93UScCrSRniejMWepWSqkVR5rP8r6ANxdkdWyMvRPwi835XZBYL",
  "key20": "NpY94qq6hdoaGqxhmTviB75dkQvU256wGba44iAraECb5SP5zGY8Eg8m92yWwugHTPSTLti1on1Ae3DaGBsr9is",
  "key21": "5UUqbkqg8wtDzkxYrfiYWg2EhpT8sm86XfAQgC1fsUGfTbCLuM2SerySg4vGtUdTZjsCpEtNhDfZiSxPiahsXqj1",
  "key22": "49Y4xWaXqSUNQ11LmKosd6EAeHwD3qcLnDYnfiSS7Ty5STgJCdNqeR1JsAMn7VgV5ijDrkRr4DhkLFoqnbEULKHq",
  "key23": "3tzEax6jAAcXmjruSUgiyTxiJLE2fHmVEYGbADvkr7etksbixDUvWGpDKgJRZJkqmg7pxqWr9CHNAThYfNRx3FGp",
  "key24": "46M5Q1wLoP79oQLFxqM9Dwya7AJDiiMdMUcPrSGeyUK7jYM9tmDwefGF2thfznag55VC2NLNbgMF68aKEYcBoaVW",
  "key25": "2j1keBxFPdpWrwbpnvdCacza4eUz6DtZEvP8G3Dj6iSusSGQWuFhdtyg5qfgdLAmXHdLS4dFmr2dRJauQBDL1y9T",
  "key26": "2aKW3NhbAyDJqCBMZUvQtkgzf5Li8SW3g8n1LTcS7CdTjrJq15ZVD1orHCdLMxBASqho3TUUaEngnnFsyPLnNjNk",
  "key27": "4TMqsdCD7YS2bfARrnyyvZhZ9R2T6tV1Z3JrbP5CoN5pGXxZPiTrPJHSGbP7YVKUdHpCVNRmJNv1gwMbGyQuyqrM",
  "key28": "4j5rCXYvRFvoDV5KqmZriPXeqEVvBKTCzTkEgfoc4d68NGoyS3tWetgTEo3NevcyMXWyTs5qQaHr5ottvPrmd4SX",
  "key29": "77rH8iaae8upGEgF9qqnAvhKXMxn32fmcnASYvH31PTcnKCeMaSTsc1bm4hqqqBwUy5RVabArE9a3KurnAXwzNm",
  "key30": "2Sm4EDj9iYdnnRtkh4LfBEtnmEpExA423uexc8Yri2Yxump2KSS9vwkqNjAHBmoCVTQ8UaD4w5J4Pne8Anbpq9Hf",
  "key31": "5NbQ5tESXGkrMk896CwGuR8vbdfhxFkogNnJhgHp6kV3Wd9tJizniAKXvVScfVuZpiyqDsn8syp7gryxvecHEYJq",
  "key32": "3Phmk9xHa7EsuQuWpCE39uKdzbDDyndghsr9tEW4gstU76LUmeFiaSXR1YUSRz5npm9mCPiZ4vp7PZhJGbLz6q7d",
  "key33": "5eLhGaJYUR8HiCfF7fjuZX3TBWbcSmN1aXajnvrt3CwY86TcKZU9gpe7RHZjkSMtg3ELM4cjRKkaYssqcNoMdSp3",
  "key34": "3YpfzB4qYY2RDuPJhVJhCbwEWRnnb6LVKtSdX9gKwHw18vhkmpZU16uRSTLog6pzZoexDYsiq5NSDYLQukr9P59f",
  "key35": "BLKmyuXvRCdYg5G2aMoAid7AbhsYwv43sRwBkjtSbGhkrnuGcf2AULUvpSR5z5vWjL6pmwsxDbKRxtwcT1ogt3D",
  "key36": "2tLqrxa3zAWcFvwTM8gifqd4qgyHpCvktY7VUQrn9G8Xuk9Vfv4bqhjZuUDbpwpZvxcJ76M7L9wcHiMj8AENYgB7",
  "key37": "3X1LEHpuESBSPcagizacizE5vfxo3FwCqjeY291tvoMTPMgBRC92nD96szyH99yhiJELKXCfiRwhP7TJkPsyqfCd",
  "key38": "4tbJ5X4X7DpZevLsZGK3LAzg4NEdQ7topnwPmjB6rDHWWJh9FqKSyv8euu8Y7VQQSsjjakYznNpArUdCG51zDRjs",
  "key39": "3HF7euqp8k6dgFoq4BpGXcRZL3eDqB5iPbLATKNwLf9hnXYXeVs4QhAMfG16xtUbc1dCA8ErYvVUxradyDoVgevg",
  "key40": "2a4CPkx1WmXf6CWCkEdpzsB5bDYjLXTQJKXjiiLhdPfHCmjgAQ6oq9DhSkydbYbjE8Rjht9GrVry7MizUsJ6gzZC",
  "key41": "UERGx8tntZH1FkX57a13CKoTmJpn55152UG9bxi3KRzU8szxPWqGrXkrjwX1nbB8o34oF7jzg23BGuSyb3n6Qav",
  "key42": "3WczwqgZD7BZBYGEVmReWSz7SmfKAHo1nRYVVKd5doEx75HoFJrHH5AHphGwaUm4A6Yzy4MDhtTv8zPVqQnQyCu5",
  "key43": "Q6K7V7C1ixH2GWKoP2otwWGbRZfnuScZ2Wak6fNRRpvabDaSVBPyW2ordEEaN7bDFQx3XLPEHFxTzbCMhVrosRV",
  "key44": "3NkeYzSauiuw2hZ67NryAHmkB6zx6zvM6KPGVjJcm2Ra5jdpszq9X5VmqyBo3zeC3GQ2kLvkGy9DFk9W4qpu39VJ",
  "key45": "63aNdjWoUwcT5Rj9ZgyV4yjP2VkDMFFh2QZ1cvjxFT2Daw3cnnY6Thkv3Y6HHfSGa7Urrin1ZyhoW9Z63TAoT7Li",
  "key46": "2jvd66SNZPuRBK98jR1GjugAuyxP111TKi3oEn5o1p4GusPreik63hePLhCd4n2P66ebkMvh5FQqXsGkbEGFk9RM",
  "key47": "4mKoG8wANKHh25zSFq5fhc2ySSuqQnDuKk5ruydhGxny3nT8xo9jc7zJsenMgRRCgaCeVk8in5zRqh1DByTUVvma",
  "key48": "4Wuud9KfYaTGi188obXYK1SBBPqD8KCL8NDEcgfWCUgiLWs9hXiKW63qra5oFN97Jfrt5za4a7tb5BLugDEStB7p"
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
