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
    "3ZuYWebkpYPhJAbwtmcd3Sp2D8T8Gnx7K5MoFHoZhTduTyM6SafeQYq6iogHg1MG99KFj9MtPmyeXRFz9X7EuUKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7GKMLr9WNVDwMR5zBgF1d76LVA2M2bkPb5Mxj1rxNNsqwAcfYsyDH7FiYWzAgkPgMqyuyVvCC8emY8PPAQjXmG",
  "key1": "5FmSQcBcTc5vhkoABRt79Fe24f4M1ywufKs41uBQLSdsXUxNMSC94z5g1FFw6scn6FuDZELxHz4TfFXuhxbW4Jrg",
  "key2": "34GqF5ZuC7PWtymqwQf7uRya1qWk5B5yVsZaZ1i67xb1uhwMSDfRjy2UTdWNQpKhHnFPv2JgapHT9dDwbzeuH4fq",
  "key3": "5P8Tsniqssiq5VuGc4ttAkiSjrsPbC7kEVYSbZdMUAvxVBTgu79VToNwb9M2PKMXi69TP9tCPZhv5HoJR7WUshn9",
  "key4": "3J12tcDXDPf57NtxNAuAKcPXMRDCW8vW4XgqXGACZ38AVwgerZQJGYuBUzBjDF7kB9jA1c7oMbsKatN9J7quosy5",
  "key5": "3zVThkZ7E96EmeCvvrWAiJDSy2GHwipzvHnMoNfRoKtBwu7pdCa2oy5HgjUvwg88m6m2st4DNyib16eGN3P7nrvT",
  "key6": "PYa616fyNatSoBjCzwaASbXEzxrNpB5YkuoYdaQGRkSfiUi6itYCtaxS7ZJ5oBH9NQw3NSFnwbX5wenbuH1RmPE",
  "key7": "615NvcSWcXbzBswwjpKtPfJiWgUiTug9ovfMwHN9HBzKH6kVrw9TVwG9uKjsreeKoy78dbN8CRHrqetDaPKonmB",
  "key8": "4ffDo7AUFXva9BW3pH9gbfD3PSaWLDq8SGS811JAEL2SWDgYj2vcoJ2bCrGkpYr9sEgxn3QMRjwP41iEsNLHcETV",
  "key9": "2AX9KN6qZ3DANN8rSawdQKbvsXKcP2uCMpGboM8KgFxj8e2HdukSnCfnmSHPUpokdik3hQxtrUSAsv4QQqae4c1z",
  "key10": "372dzQywHmwTYEzQ3gcVfDcZAyZByVUgiC9HYHu7xsehdSiHfjLx7nZMkEpdfjLzgw74xwsr9gZGc968rMRriBWC",
  "key11": "56cSDZJRLrzbVt5dK42uPx6jZ9ky3FrcQQax9wS733VQMu111KnV5Laoi3MFSF9RxoLjs6FtKd34ukFkD85UptqR",
  "key12": "25S9Q1Y7RLmd6p3W7eyCRN3ums8toNecieSBsajevMKKCT1KgV1PFzUDfBB6CYE75eWitj2dJPbGCiRvzRKovhr9",
  "key13": "5s8qCTgPSRkZbqtZ9m7hsNhCbDCKBDbE4JzCQHHjpvEf6zGPvHf7jY1veoStFUEZALhxCnGQhXyDqtf3WmQmyDMj",
  "key14": "3u95ZqRebU3uLTpsea12dCiZfniTiPgf4Dun4oRG7XEiEpFbnHPADbuhCHFxKtYsWCLGhVMXBRpcDXVpFf78Ydf8",
  "key15": "34mknJ88EEPTrwUXVpRCYj3Ahfb9CkmGXaVQ7xdGHak1CHby41HojSwU4KN9QWkQLo9gk2dPXBFhXWryNR3Gwctz",
  "key16": "48Nm3uNJ1ryuGLcPXDLY5jRNe6YCHa4StzkaAMZYKCdKkJcbeVXgeJ5SbTtyuQV8Leo42oNcNUeYUCgkracZCGLv",
  "key17": "37oqJ9KW3wbK4ttj4jKJTooUrP9TCUjSTuyQkQWjjRfrP2gdRavZspcEZ8mDX8i1ERtw4bLxg3g392KKLNJwNxUP",
  "key18": "VJeAjsaNZg7fuPurL8Yokn2RwKaQ8uqgT9CJmQrf7XuLvSjGeGgkibwvG5tSCJWgsGpuKP8SQi54icdLHjK2hfo",
  "key19": "5XeLdMVjzVFv7JzuayVgw39xHSrKk9CEruzr6b3e5he7ce33yTuY9RZPBBodsrBh7ytHqrgVvGspUxQw53wLuJuS",
  "key20": "33p87bGYzpiCCK55NzwDD3JiXKvVa3c9Y8WuEZgDTSWUxfVZpnRcVuAGfuxPqqsnDs5JUGsCqB6AYQhEboix7dSy",
  "key21": "42KjX3mDbFbc49K89q1GPThcWk9snwGy3MZ9NRAfNbqMe2SrJ4nCYY4UMs6Rj57YjZ7TPXxhRyBoK5a5fuWnGdQ",
  "key22": "54gfrmzZ6KNAqYUzy8YjSHvVAi4DzYmMQ8L19nzFw81uhq3wLc4h4zpgFHAAjBbLeJiuWZB9NoMih3NX9XuA5CkJ",
  "key23": "23hGtLwmFUiD81yHRzk9PHEnMyNer8LeEFt1sx4ThqX5YYKHZJHbwcrARrtXoBe85tdeP1sdA9EZjAyq56LKx73P",
  "key24": "4qThNZdF8rBy2nSesUNGFxpSLEn73a9NZfCr3spyijJb55nbGs2PoZMd2DUg4AvH2MXVNkGyd2TrPthxWhwbtgzN",
  "key25": "59ivaSh31XXwgpjQzgVUK3AbQc3KzngBfAXUBmN7FqD5WTaKub4cTjioDNm7UiToM1UoBP6j4Xa9vUbzzXpsALVi",
  "key26": "9kG5pXzjhxD7q5N7eBT7pWTYU7uLXemooKw4iPXtcpxGzJ5mR27zt4KEv18qJS2AFnTZ1hZzcFi6PFExtcLbsyS",
  "key27": "2waCFiSRtZwqknCt5SG1bzBqiLP7smCyqUNjoUfA3LuArVJruUktoFc2gX2eV1KkJ86DwGWcqEPaQCwmvfuYz7XC",
  "key28": "nUD5JZxeLLwjKf9rqmNY8GnV3DmtNbGfJVzfoxdi9kvnpwvbW7t8u9noZ4c5XEL3AKQpf9znVfn6W8F3g7FyGzx",
  "key29": "3Sok1ZqJypqgusneb3toBUCdM5YhjkPYo8VdGSHzm74R5px8KLBupM4UQgXHr1b87xZyYskbbY6xBqnwvhrDjzvE",
  "key30": "2Up4BMCdyE5p8MbCAfSfCQ6FPog5ZQ9UYEeB38ygrKDXd5RdTriJoSDj5QvroPKHnX65SRV9Pg3ABq126yRrvdu9",
  "key31": "2r6of1aK4gfyZpz8xv4yNGHc9CKySaBFeEn1PbvPcZm8v6Aen4x1G3FpqG52RonarWqjsGxNXj4tzaaTqH39RjcY",
  "key32": "5S7myfTkgBoSjpSibXB9LQ9LVeFnwToTr7JngiBDaNmjmoeTKJP7P476Ay94ot6Pn39Kw8jsGLhhF6CCK6bNfpfE",
  "key33": "5Tfv3hdfFj2mb5QpxND9qpLT2NS4tWCr2XmdpJhXqEFiBbXdG7UvuaEHbAQBCcC4vPK2Pnu4ZGWhTjoyMoHrHSNN",
  "key34": "nKhik5vtEUKKMbiQKwWh4iau7MpHcXtuTfQWcmDQ65iCLGjiHoC7p4NuNzyosQwWjD1A1Y1cZ2NHn71hH1rZVg5",
  "key35": "48VKUyUszjXWt6m4qWa5D37oq4fPN9pEyhgqvvhy4yMbzJJYtAYs41ZscB9oReg53FW6jS5cCag9g9dKhTSeRgjG",
  "key36": "4u8RzrT9iKFHNKvyK9YfqaP2fCiRJY29jWNNfF5taQT4jVotKReGnrfSVYfT6LjKEZL27NeEuY3WBkohYzyLsXY2",
  "key37": "3tdSgV7vFhcSGbATpEEtzc1oSJyBRw1TeYUBRCcyVL7nPBoW87JTrm5VHRqWik9uvPvfJYrrheGjhJxM2bNULmwt",
  "key38": "hNiSUfZpj1KraDA28ahX6f54JQjFCTC4sBHxBwzf6n4ZQBFNLyb6f4tKAaV5uBBd4niCpdQxYTJn3yi8NZhQWKq"
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
