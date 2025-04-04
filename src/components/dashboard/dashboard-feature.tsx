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
    "nQvPw8fsURWePF65JXzf1oznbwBvs7ZJYQxfoKmZR51f4eBiYyejJ33o1uS1KD3gumXVLNEAJbjJM2VMBMhXDGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qu9EdzoDJeKKsqAAQtm6Bn44waUmwBkvpYu4ztYyA8LLgqqdZZ37yJD9k3Y7PFTsLMoYTjbvPnftBtFGi3HqXig",
  "key1": "4BQno5eZoNueBwMx8NvaeHhmS25TLfjKJxabmdbskgnJGSyT6UEq3qXqH5TpSxqcNB8Mje4WcmgXHvXsJ4rUHgkE",
  "key2": "2J2kWBgu4DNELH44zVZGZV7LykBh6ysgZxYiZC7EM5Pqzd5EhhoQARfN2gxVAPwS9ZkRbheLJ3CVH8sirfKAjsnx",
  "key3": "5AxLYc5AUxrE6QvcF8cAXRM6LaWFsJSPzJEwo9eQHBWWV631EwQedM63tJbjU2BnmeWMCsBdAVjN6bWWLCLowmV",
  "key4": "4BsTHWH39jKTWSqEd9kzm5qki43AMBcpcgLHtPmJLLPrJGNWWo9ee75hai7mrGZ8omPSTjPH6ZMWgnboQVKEdKhQ",
  "key5": "3iB2v8L4tHRrCQDCCw51v3qCh6xVWoBeLFSdVrbf3dBHJFwo1D2XHtR6U1pob5zxoYvFmMRZXNSC4dT4ZpqgUxLE",
  "key6": "3kvUfHem6CY7rzFYH9LCtkp2btt3KGdHSmXKWbDNtwZTHexgctmrru5FM2dVfNL2K46pgLN7bAFABTN1oXfsGeQr",
  "key7": "2gME6w7oGKXP7uzMXCc2jNUQGzk5tW9YSwHR61BmwK5CDVrN5TXrCNr8ERCmYYHEpudRYAtwF4eXwYVsx2ds9Udk",
  "key8": "2ksWTjKUNHzzAU7hREva2RiTvbHbCKyNTUeE8t3FHXr9gZYMSdZdoHcurtiUSrAarG3dy6dSC2vRNb48EEzKhMrc",
  "key9": "3HvrkaLEoX5rMhDjWVzh4PkHz2UuAtX9C2HhHG5a9keoSxGjfmnLDrZ3jkeppEjMvFtWqD99uskqzLPyzeYBhX9P",
  "key10": "5nUuN1RymkVQY2EUiyBWNbpTYzTCUbJKWveKouG73uUkb5P9u8HApA7Tmsbw2F4hoKJ5KhGwrewLduKyZrbVXvFz",
  "key11": "2gBaMSHLNgGXz2ANjUS2UUveBefKLFEsFuwEAYbywPKVx5L9k9ZxgA2BbQEkDegjnvNJNGSWQHBtJYGmczrmFMPU",
  "key12": "HWZBTr6s8PBRuSNeckLr2TwhY9u9bqdHwaM75VAXqyZApDU6pWvUbqiptT6uvxACoXXmkNsuL56rJU6SuTdPMRR",
  "key13": "2DUSyB1fpMQyU5niMGX936iS1cQzM9tCMiZojHF3nukx3wEdNH6AhvrEwyXTiWVsMJpGZparMZYLt9RxnzWMdcX4",
  "key14": "4iSUMdckurBmuzbNtn89q7Rv8j7Q5opzsqwdJicLP5JDw8A3pBeoTVcJaXaiqk5hBb2CSJZ63Qs4H5votKtUX7dm",
  "key15": "ANgj6Tp4V7SassF6FHbYixonSvo9UfQUdhcfHoiYa8UWLSQCNEMCHyEVRVG6zkqXd3VtwMgXbjadjfDo3fZCjic",
  "key16": "2qPwDBWy4i1BvNMiKZ3CQ12QjKmQeRS9sR5MStb31AzovdDfyi5wuxdvoajFZd6nJbEqH71fkB9Bu5DRvbi1rYAC",
  "key17": "4FxqEBqf69idWwy7YNKz74eNN7ECwpfTaXZYgp8CrUebJNwRoQ678ChUzjmAfWbhJ5R8vS5nzLcSeHj4WLzrdpeX",
  "key18": "mnP8bCAHFmDreWjtzU7Foh2x8ZuSz5d8zBxKjK1wYR5cTdivPSmNrJwfF9CMBTYp1jAMTeb6XmjbHyCBmKxW4M7",
  "key19": "5n6Q99u59KhporZzbrMSwJGeRAw7g981QE7wxhitEFkE8ydRnXXKRbhTeGmupUrKvih1bBFXMPkWr8vTwovHm3Jp",
  "key20": "4ede9YGo1hZbcFBfEf5rmSANvdp4PkRuMkBsK7FbM9D4xR1p7XfsiyiKjSNXhd59ymhCNKzg1JLVSx7Vhuq2q1LV",
  "key21": "4BPvi6yQYWhu5Bza9ZwxAht8f9ZNLNX2xAnL1dHMgZSNkzor7tFmGd2UGfhJ54YhC2CCwSFpGZBbBnC7ZUfszXZ6",
  "key22": "4GcR66Nop9DyEjkcyNt8b5bLsBaEKCA1fyRWH3APDm4La1XVCpSHZFR79M6uSUBuxkxP9Gh3WYs6uNCoyRsPc2xN",
  "key23": "CN6reTBrqaAow3GLRqJWck8fW1FhNhby6C7FsB7ULuxi9CtaCmBafZfMQzvsYLyQbHbSKTmKtSmFkjAkJyP32eb",
  "key24": "kJhZ5PpS9aBz6qiofngyA4gLBer7NUHPQfDo5N5LbighSfvQkvS1ue9ZYvob71BaKyLjjKFSL1Cco84ViWjRQ3q",
  "key25": "3Dauqj6oA1vSnviCPtiid5ekQsAvXRe5gh2hc3kpyo2RZLnW9YURTvp3hC5mokKsxhFR7Pz7RvjKLjjEbgYKTbFY",
  "key26": "4bZVhuNFy3kJb4xKjThybPscAxNEj3mUmcH9kXbQtHTGdwWqiZDtmZAaBuokz3jyzzdWek58gR6npNiYo1hGhd98",
  "key27": "4BGnPDaJeFuuHSJrHDDvJkUcHVrSoNsbKHU1oiYprgGyNL1hbASpUn3UnuzeAYovR4iY2G3mvZvi81DY6GVN37jC",
  "key28": "3TAJzC1b8ZXcaWrudwis7sV77HQyoeHzUk8dgBsYYWnZYNLLBiCcUZ454t4whbWPswhwppDEyzBpokSi87JssTzP",
  "key29": "2hSkcWSRZrx6ZSntWdGzCe91dCEwMQ1gxrwqgEWay4nwhU5n8De9ut3FqtgkffupeDCW8jWwpcaYhcCdFbjNxA1M",
  "key30": "3BYSKAay2YPvFmauJJ7LQeL7W2YuajjtYv1GGsnNRNjspbhPg6YuXoghZH7odf2NNag2ow7NveGJm5qUnZgXtP9U",
  "key31": "2WEVoBzQSd5xT5op7w78VzckorUMWTFniZQSagAdyEEmCMTZnsrzxakdedAXHcnz8AGN5PT8piwfJrTVS5XXdrq2",
  "key32": "24Ahs9nP6N4fk9Hw9Fdu2htRkzb7ENCbifuXMqzwY1pedRPJA1Pa4EXBR1zbZZDJiyLXEFx8a68sqvKHMUtHcuTt",
  "key33": "546nXgvhxky37fAvgnNwMnD8ojaAUTTkehd91G7vCQ4ZQib3HHNGk49Qt1YQzCiPp6MoDJsnxd4riRuwLP9zakNb",
  "key34": "4FJTLnfDuw4aUjUr6raFq6xU97Wy2bjL3aQcGLXCxXieKeipUqv15cq5Y2QuXBiffjtm8rQ7q9sodudu2UQVdkWN"
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
