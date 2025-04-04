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
    "66vG4SjX4DzZUA9ip3T1zXGuyNiYJPN6Cwjd8QmvKN64P5nWjq1zXiboNL3fHWvKBNFnYizUE9NLLKVvBwp1TEZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcXWXPHkCAwF6X7rWPBNZhjxmmYn6nAW4xf1iCT7CBsXnj2zxFSXEQwuuqQGBNwXAm9D3MxtHRpem96MQucdtRU",
  "key1": "4EGZHHZeekjoa1j3qJ5Ayojx6spSQdp82Xez4hfYrCT4yVCjWhoGXc2tVKqtdcZfgb49SUpSJBzLytF7gNc9cgdF",
  "key2": "2oD9yUYWVsyiW64k99zTK8SS2a7anXLcpQ7ongV47Ci2PFCyopVAYUrAGEjB4Wd6KN8qHjrXYyKfZYanRHNr7y8X",
  "key3": "4dNjk7VTaCzjSeqTxo39BtkRrkwMpeg1fzqwonob5o8tQLqiAneJMnjfV2zTVh7NDUDw57YX7rpV1wKk4QAGeZmo",
  "key4": "4aeFFS6vrTH7YbsDESSA2frK51kRXcV47SL1XiwpcnQ1gnuP1aSNyhoCjBNHEgkniXceGh4YweVNiAFSPo9aqWpA",
  "key5": "59xm3WspAbWVAg2EFhz27J4Qsjtx7tXLJwguwpUWcjaUVK4J1YyPKTBvFFta8vKFozZqqXXjUA8cfTLPRpojBZKN",
  "key6": "3JhbCvMqeeiBefCA4yKfBo2M8sqbCkqVwD8w7pCKqqfJYMms86HsLeWxEUzy5wV3NMoSk1dRrq4zNu8GTMdxB6bb",
  "key7": "22Kz2rgKKVhPVoLvvWvqAmQM8X2Vu1mhWRg2pgfWz56H6DgEPosRqoMrP9E1PHJRfjZZi1hFjByi9rARKq75xHgj",
  "key8": "3tRzf8t9qXLsAj6ckATeAkpZTTLrik9oyMLJjNCyTVoX1nz8p2NJ59W4aajQ2oApiqeWs5xb6s7xHybx7QVoGnkr",
  "key9": "4j1esaQytJBtdKnZdNS95owU6SaTnVxVJdUxfAeik2fUVGVtyG7k2N7BijPW3TU5y1tKBsEyT4asvvQoNKuaoaR2",
  "key10": "31NTiXL699et3jbPFrpNR6LRpJwZe9M91wVx5J4cfUWyxeUwhZxSeAFXpN6shWaPfjNAHRBMZ8JKa4RYKGdjn77q",
  "key11": "5PFPvsF3eW38V1bakFCM9jkNtnyeqBwHJnwmWtj8zMmJmQXeULQn8SF4EQA5DSA4uHXXynoBQT82S7o151rPV9LJ",
  "key12": "jocxPtXnu6wa8VqnCF3ihL2buiCwfHnReEnZcc7PsJBdQsyekVonPNBdkiD7sBRx9pMXL3Nq4FiPNUS37BT8tSw",
  "key13": "2tZxEJjjUKv5FFV1MohKinUNh7FgAzJbBDG2wrVK6xmCE4WYwJ4dr8rcnWLLJ7PFwkKEKA4CY8WRiuvo2q9mBtq7",
  "key14": "5GMZwK4Q37heGdjsjUCBY9gXVz1vfJj7G2u8RBoh3bkUTvNGQ3jQU7uXwb39spnr6FuCH4ocMarYnnBH2baQAzKb",
  "key15": "48QSPpcfwaZPuEV5PnzuZtJRCn4P81esXFGhKL2dCennUYEDbPTsqVywH5ET1R6PFs1pjpZEv3JfMM2xbgpz5ScC",
  "key16": "5BzfaKyNkRMdKvuPo8noNzwYf2qqKgbnqnNXViF4eAVmbN6756jZsyr3LpPYqizN4y2xS37fvFNpJAhjAe4f31bz",
  "key17": "5UEXdfWHWkZcGa3Rkh4k5dESu1L5aPYZDENt4pMH1bYk8abysmJwHpQe4eXc8tX217r2NT1t7wFFpRNqXdJczaLL",
  "key18": "3qM8C9zCQScvjqHjf6p789zXof9XcVNar933HckxkAtoG6fdNaD9EzstYCCctkCkAsAJ9BCWVrAUkqdJcGzZwuzw",
  "key19": "4Y41N2BYwFgbeLFCLn8zmCELYhyFJFCUx5bS3yuZEcUL15qQXgiNJCFdoAarrR9pDppv22EYSnr78Jv5yxFhuns2",
  "key20": "piMBzvNhFfEWZWgACy6VkBo7XdeisA3FMF9C31JoGMyS5PQ7xTX2UpYyZdv7EJ71fthqayWiyf26Zm4Ns6JHcCi",
  "key21": "5Cz4aco1BKeZufy2oo1Mvs5t2SrgsMuiNa5T48sCwbHEjsY6eCcB296RzDuD4URz17hCDyvNdJrgz9zh63tVRzDT",
  "key22": "4CSW8NSC7wHWgcosrQuVPPHwFkmJicEbaspCERSX5H35V9t2Xf3EZWWShcrihEUx1yGjMQkb5QbZPtT4SWv3Ljzb",
  "key23": "4LpcmHwks8iugz46BvB2ZDv1q2CTUc5zKRSHmJHQn2zpKuKTAf71UjAxPsBNkyTrbuuDfab1bAp7LyrJJb4Pjub7",
  "key24": "5aSE4DirEMYixUe66fyUcbHcVhvvRhdeNfycrfD5HEdowwPS7dVc6f7c5GZLxdTSsuiZztVf77k86hA5xykaFUAJ",
  "key25": "2pNnU9oABCJopDr1UnnEsFVygZr2F1UiBXPq6Wee5rcPznSrkJWUEx191v8SiDFinyAPTB4XaSYBhJPATEfhtNyq",
  "key26": "3VxVuUFaWSptfFv8q2YoyxcGHWnuy4kE3Kqhgxt4Kb3DYecxd3dmCFEoMk3Sxa41xwR3YLHu96FuRHQ9TKssX7CZ",
  "key27": "54PjBVEJGDECS5f5ZBAXeHatPpjmeXUwW6VmDztXYgscW53V4GSBob9QC3uL3vUbvV7gkU1eeyFkRXQf3yQVudoC",
  "key28": "5H6ykMqxbr9urCEn94uSpazaJrrYXi1isN6iv7Dq3tagPeUNnYkLyFnQQLjdXZFKcniCKrNE6VSp31KCh4koEeBx",
  "key29": "X2vLyjin3yNKTu9rihgbuePUHBUKfW2PCUCP5dNArGfg3dHHDUjNd7UrdAosKnhB4fVJvdhzNMogAjXkRzgbPRS",
  "key30": "5k3x3Q15bNrbp7CA23JNXFHbKtNULVLTxjRtvFhciHYMMYL7Yhxy7sAFhoUiEB6Q7v1Q9WP12jQLu3UGADc5LM59",
  "key31": "t17MhwbB9qm2ahm8rqQ4mtrw2qTAyWPNgwcQuqCgpBCRvJWbbvuNxafmCPREX7yFJT3MmevnnBhTLVvwdgxxiBN",
  "key32": "5PteKA1GncUNkdrDFCcFDyHtGw3cvYWvcdNyZXTQHReucPiE218gUc3J856AvkkNLgVC5888uZEkDBqhhojpUnWj",
  "key33": "4LrH5x9m3yKqiiDiWG231RrTUuxkxfqAXH822gaqqrNSSnRiCSsNEKbF6aYPo9mhm5CysGse94MruUxoeWwowez9",
  "key34": "5C4U8X1H6V7Nw1VX52aVnjweFUMsxuKZnJPeVnn21EkGiycxS6D9SV3HKofFm1en3PYhfDfgvioJmYWRWHMHoKRu",
  "key35": "c7De3f7GTNRQ3GkgVewhNroRWnfrCihAHFNxCjKrah5LiPPovMXLnQ6eF27ZqRyqz3bUSjz7zgNu9Gyxzfkpb6Q",
  "key36": "3tgXtCYjRLUiPHn9HXxb21c5bteoSsxuLE5iBadLzXzBFxZXt1ugwaq89xj5CTCBnfj9byKnx9dVLDNWmPs9DGfk",
  "key37": "5xrfxJVHH7pYkHcZGa9mV2JQKRhjahxnw384PD76Kn8RdLXhpb4kstDpfZ2NpZgTT4s8kaC4bpWum2ikruiB4ToW",
  "key38": "4pCkAmW5JM8tncp7a9Yqo6eXWbNaVDVCqiJAvwwacYMp9GXpjsMzskLTubvbqNFENfmKRK2uktVwosEWrawCH9Vs",
  "key39": "n8V7NYrk4mhcmV1RrB9AkR9ULSa4jfJkBDtQvbP1AvGxVhs7Fv2eBcnd7W8pVCCwEqsT8G42Ga71LPYThP4gS6a",
  "key40": "5AYCzeNvgCmNS6HKgJKwK3c75Uy5MboahCm35QFoXCVoPcxuBN2ZULjfGd1SExLXHdEzwNX8aECTXvfXgxYWDh4k",
  "key41": "5uLXmnrBbVd3nfN98F7ut5b3Z9u5gAB6gpwBurPxBsNvVvSqfxQGCmTohYow3TDtpJJviwj1gvZzTYTTdyxxDiqy",
  "key42": "42KBzhzxykgyyZoy9yfoWKa8Mn1rF7UWwqzJJ3dFduNtFezQRc737ajyLzjSc3vPYis4yuG3oTfsKV5Re9v5gTR1",
  "key43": "oHDEtkgAXGBYct2dL3XmxNWPraQ2YaMqtpVQSEufBpRYeoMN3Hqkq6EeYVwvkHU8pnWgqMT3jXFRSJn5NvMax25",
  "key44": "WG1odeBJtLDx4vkMD5suzLf4YXTBrLEXUbBjZojqaSdwuiaMdSF35dgDjTVwZYbnbvkF6oHb5fwpjnCK15RZsnj",
  "key45": "HP2w5KkZgW847X9zJbJAJCNRoAGaiv3sb9dfvCXyco1317e1hn2WZazTC3i5mz37DZSLidaBfi3Gbd135kQUc9o"
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
