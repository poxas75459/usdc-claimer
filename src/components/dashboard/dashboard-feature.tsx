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
    "628wsnNTEpN39G3SiKvkuSxN4SyE7vqiYW3oSjbDKJ8PN2Bfomvohkbrq3GGvgUAbkJw9BhWMcpsg9eK2staJAoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7bDtNfSVPuvqtkxrspkMjc8BWyzNwVZYSwg1nCbwZ1X34ZwBEyC6LcM7PTMYbqpzg2wN3tgoLtMU2Q8oqDaFF5",
  "key1": "apA6tJLXJyGWAT1JqACsUu7MdGtWFV9TRjkRM7Ms5LpivhM4fBpXZ12PM32w6zUvK68jgdbcivnKLDC35KsMsSb",
  "key2": "2y9ccrv3rahFfCJz4vvuyJ3MgJAw92BUyqqGtSj2Jp1dyp8hitMgLyg9quuBFtU79P7QnGi43KTMZAyuH6fuXZ8v",
  "key3": "2RD8BrQP7W3jip6yk1mRnWaxwsioN5yJuktjEX4zMWykwQFBPL8kCKvmBn5iiUMTy6cxw6J3EtH71AjJfQRCxKfx",
  "key4": "2hHMBJ2vtC8uJCs4pw8nFjTpc2Gt4d12QTbTjZB9Z7otnmeA1c9vvacNNnoUW1q3XzMkxXz2MGsp7z4kdPJuHExT",
  "key5": "2JzP6tNbY7XBjWE4YXjv9bYmNqJvFR9fanTeGPXiTnYWXgLjx4hPHMVPmYkibExkZbdV6dsaH8EhKERs8y9sM7E2",
  "key6": "3NhicdKu9gdhg3Wq8qPjKJ3jfW9mw3L49Rbsscbrz3cp11Sz6b56w2ebk4NwZz3VzangXBxFycVH48rA1GD9pHSf",
  "key7": "3qMu3qVqcJw3bz2wJSjktct4uX1VC5x4N1DwkYLX8XJ9qgSwhsPQQUnK5QrFYC7XQkWGH13PtzbCWRAkSBo78zWW",
  "key8": "5kmDeSyFGfcGiKM4XVnJcmxFe64QcmuNnA2fszgGzGhAoVFC3nrorRfyk7G9XqWbXkhb1aXfCtRULSDFjDNzRCLy",
  "key9": "3Sra2ZUumTrjbsvktMESRrNavwJxzsgXh65kzeK2UjokCZb5WKeYJ2D2CVhoqoRE3ZQ7Rx9eNJCmNtZ5Z7zb9S9U",
  "key10": "5k2TzMvNZXFuSteuPzsVyDEyLR26yVv7BeH15UQxQNroxhfwDZ8wd3X3nB4pS4d7Eiw26GqiV7CkGXCXwj8hiqwm",
  "key11": "nCaFzwV9n3wmPgQNzuGskj51139E9pQduiwPhZr4RBe6tsejB3vzRGUKmWUfJU4PbCzHHo8yX4x9AchHBfQ1Y7i",
  "key12": "2fDu8rUrj9HRT9d76koAvggCDxAnJ6GZG1a8ShpLX4J8FQoYoVjP7Ur6is4aTRdaSBg2vbEXYrmydcYdQHKyfSgV",
  "key13": "2Srwqo8XeKUV9rnypjzovGA98d538FK24ox5ntZNpwcijcPg4CmN9bHDVrzLXDrBjLF9KyyXgLPUpU4NiaaisSNi",
  "key14": "4t3de2zGvAaVYWoXFBpnpE9hvzPzuSUGBGYaU953Psd37EM1cX2Jv4pEBgEomHSFWxoqcrbdafzAhHU1k7SN3cQY",
  "key15": "4MQ3SZDwC2W1xCJmcSKe6EEDLgT8ioMcYzzemxqxmQJHUASqXm2cuyvVsUYAG4GYgNgRoLY3CSAtxF8Q6uD9ad8Y",
  "key16": "25oDsUzPV5GTtCqrDHCLjBJHG32xgTqLDmPUiCEugZQaxqBhFPYHxoGvDSi8nnMA35wtdJAVQeDBDu6CbRaaSjbT",
  "key17": "5Jud3uuEKWtWGiRLkDLShywrX5jE2wAaLrjdmnGQn4apMynzRUPPktsxavKftQstJoXRX6NjKJ2dVaNSNBzUM4vd",
  "key18": "42oAJgKPvYG6u9pqGtrNBAgmy7XLvVNmr8SKNWw8tak5oUgHJ9ue4aHkdQAYnXkp6J7pUGfQimppbXCqPCrw6Suh",
  "key19": "49xBP1wnCpbNXLddiSm3cBFzhf5JWei5soAhcF6QasAP2aF6pGJyfSmYnfpfEqMWnDPdb16pcdJvnh4JESSxGK4h",
  "key20": "4hPRkasXoWUKSnPUgW3NqKGpWQJMHFZG4n7m26gDxkj3qSEr6at8oiBBDZdnd6FbEQP6StJ6vk1z8ooMxGNGenPJ",
  "key21": "5Rxz2M478d5U11zCnKEvMowp1ZZoH8S16PgEEtWAjJHzRH3FxJbkGDs3gFGYLbZuu3VeqPVFWReL1caXHa2u1Xza",
  "key22": "2CU8WA7xyytgbbTVM8uE2Vq5ZEfG8BturezqizaNxPrLHaownyreDu3nqBdHsSN1Yh813KSJntWK54GQSd38tWLj",
  "key23": "2J4AKhbEWa6yqfr1KaoKTW9kDRhuuz8o1V68NpV6z6VQEhUAjAYCg2aM6WUMGXc4EZo6t8Y7tZLxccXH8nSZumCa",
  "key24": "4ARqY6VFTypSEX9jRaAqFg9fuLDwZgTVLyVbTQUi79YEeWoGq2UXm37iYRgd86XJTaJyXVmXiWWTUaPptcJ6TAwF",
  "key25": "uxVQNkRqJ9UnkdEYgrX2wQfyTFNyy67dmb28jxrQsKMZZWoxJ8tPA43k6aYNjHzD3BB2mbVUx8yM8fAaXmdFACy",
  "key26": "5TtkPJMS3VQU1zKET7X18WyhkudwV1jbzk2WGiSCXVnUysuKDHJAbPJB6keSyn352xx8dQofmjw1oa3KnDHRffkc",
  "key27": "5E7zVLBwwwVcokh8fsxkKAk3hdLLY1w3hk1d5Adqir6d7a7gEF2dnxq5Rmtag2D33Eq4HCwd4SrM3GpdZeivrQwA",
  "key28": "LJE1TbwcAi1RBCFGZmFbscTPaQQMZoVPwSUydTDapTpzyK9SA6QHbHWzDD4aCCiXKLZsZUd9rF4RA9ZiX94gJkr",
  "key29": "3VqzVsrR5teSNEQ3opacpfdJTqPhrSBmyoScB7zLiPYRNiAgCKQjfqdZMPq77bKftrxNgkPUnwUcDe1ufyj7xJsG",
  "key30": "5KCEb3n74QpU8F2AsdDQBtRfXBEarc3vEc8fgtfajp3Mk7N6bgy9De3Ca2mwjsntMEZKvrDRvLGFyCaHqLmrg1uZ",
  "key31": "3WAiqbr7hL3waDvNYhQ1MAEzYnTd4JbjLGtKo2SeuXBmaBiheeseFeo7XHvd4459GFvoaUrN66drpC2xgbyFRNLW",
  "key32": "1sWFLAnqSTpM9wwb94yx8QWbMaD9dudvevr6mxKczxxEeb83jCNEMomTNpF1zeNihAxAh6Cn6CeEYBxdQXj6MSY",
  "key33": "4vYYiQhEBNBySwmQNZsxerL8M3vXMLas7yWk5gkph778vYaq5YAsTmG4P5EZCL9EdirPxvngEvW4udTP4i9PQJNQ",
  "key34": "GgPc6u8hJA54j5gGe4Lx4mvf86v1Q8Jaj69ACznLM1yyjYNS5EzWPYo2h5vM156F9zVbzXQktaGDYwCmdgehxQK",
  "key35": "513zJdrnhDougAsksZfr5p8HLyxPC82Js5E7Uz2G6PTnjKoF2zNMSdXGq1N8bAtkwdNeU1Awqwp7uEMYd8jf4SJo",
  "key36": "5GfT4Ve2kowuwVbFccH7efJ2cMrJNE7kUB9NqQFwSRwHAHvfwJ9YhhjUfD3SLy6osYKzoKSrxfYn6ujPHu3rfk2p",
  "key37": "4wQZmfPd7zdWKNKoh5vGj5stgLreiHsdddnLL33pDsdQhrnvNPphiYuY4BcGfK7BJu6FRy2GKEjYdJ9rh6s9QGBV",
  "key38": "3dGXEk2i8iZ6b9hkMehSnwxmnnF1kpAcBmsP1eCqdAtdTVgWyzAJNvVAaDY4QhDjhgC9mxfsMn1ckEEymXGBLhXj",
  "key39": "65TGyhXUoiU4A4w5LfbuM4DqymHtiYb6J22M1BtJoShFx6nwRddKwogqK1er5M3dmQLvBuj8kAZQxc8nB5Xvampv",
  "key40": "4EhW7E1TPMwnxPUtaYbDf3BMMsHpajwjzX5sprHnUKFP4arAK2EUEFAiFc68nVZbRBTgXvZzyume42TxGag2wkLM",
  "key41": "xMTpo7CUoqjsBUBMeA2387V8LMDu71Z5PuSrYzan3Bp6owcphoeB7UJjdVJnwsJzWmnSFbbNGUY16xxj9xa6W8y",
  "key42": "5UVPB8WrSd5tRchfSVZ4JeCjJvo9PX2uasMjC4iHcSxXo9zzEhFaX8kNYEL4X4AKekQPQGtt4mgXj5AsaZv4KRqV",
  "key43": "388HmsWYTWtwPcLrPjNsxb6Ziq9idAjMdVdWqaDSKXozSa6XTxknXC27a4ggDoSudHZzr6RffmFULMC7WkDUHMoH"
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
