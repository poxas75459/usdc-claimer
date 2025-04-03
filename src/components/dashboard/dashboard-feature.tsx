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
    "3CxVk2yrEuDMRhasVSfhpwMwLtWCs1FaVjggDyUmFpiwURJvvQtdk1mzfkpFD68iinHsVqxoWoNccn7LLFTLyBR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxjB9uFubTogbdPongsLtN45SM68mJWx9bsRBzKrz4Cu73boy3wYCgk9Wsb9hiAxGTYeZ1C6g5ShBhsNincW4LQ",
  "key1": "61TPn5aad84cVbVkE9fDbzyxX1eXZDUuAXTfiqkYTRaJ3NSufY5v3E688azr6YdWNn75rRiGr472k4jnVLezokiP",
  "key2": "DdNKePjZF4c7h3g37oc5sdQMqhiEym21AY8JJJ5JS2VzUx8s6y7vyfZQkCPhddKpSBxAjqqPJZbkvRt2YEz3Fc4",
  "key3": "43rDwnRKyqeqKFD6jKKdjUqYdhJYvU8yaKHKqDXBzmVL3XR9CNEepxBWMjCpc5i9UajFsopd1bHS7yQ2Xwnds5jf",
  "key4": "5WZiM5WPVbss8do5XW6o433614LQmP9S4GYLqNVFbJGcH6BQ6srDTN3o2atgku7RKXoJxN67XwcbipD8iu6jrEGa",
  "key5": "2FTbpJoKZQrg29HycpZBZiiaaPFtTCJerLQ9bpgVdP7dYd5igYDeRiVHqhbMVwVV89Wfh1qckgJVDHq9m3eC1cLe",
  "key6": "4y5ayVGNkYQN5i61o49ry9vKx9AoMJDXz91nMfeey98gHttsj1To1AMRrJcst2R4WDXEdCEnD2M3eiuupKHMqPyz",
  "key7": "dAEUTHxGHdJssLZHufmkTP56VkB5DPwkf2iJ6feb77rrLG4ucsSBVJDzWehSxkk6oG668hf2EzmRQafRVNgfgDb",
  "key8": "59KFoZVs4RxXycK3KpzzcdD7GPnbmDGYaK2xYqkDQ3vhrn8mXNyp2fXnqP9txJBPW6BZvcWoj2bZJy1A2RwBHunK",
  "key9": "LMX2MVX4nDPddb4pSj1p98pgJ2LheMti5XmUoFiYzJCumxKnzS7yWgYAycwHZVtBJ9yUeHYs6a6JjtuKZXqGaPh",
  "key10": "51om4qKG9TmtLhcVHCEXWKNoQjSknNzLUera3Q9zVVwUCBqQDLmhF9PSB7MaNeLxoHokzyULdDQ1UahfCUvA3KKR",
  "key11": "5VFY4xj9d9byRSUG9b3TMjHu1EDMgqNtHxeBxAhjoosTkEmXQYU8oGSC74WPFhuxSRHQ5g7ai6yxvYmkjejvVChE",
  "key12": "2hzQCWSMSqQJdgrdGwq6PvKbt1wkxmA3YCxBvf3TqJ4iW3rEfBjZh8NBEDKo54HDfxZNFedxcG5fp2wkhN1c3oTa",
  "key13": "RQsPdbNmoW98dvgdKbQwy3F1txRioTfxgRMLdQgq38eKhNHxcuZW27JcvQu47rNVGC6hBiWatnA8u2YFost4KBm",
  "key14": "3gjmJVqi6oo9P1cY1YiESVM3NYfA3yyPjjWqrEBGcWsPVjrr6KnXwMagjcerc1VKdoeFARV8uXw57nkauVtBbiYA",
  "key15": "3GCEk5Ts6X3TXGaEEj1HJGU3ZsDcaAqZwTs3JfGGrxb2e2ivZBuoQt59aJfiJYEGMxUzM5QUW5LLgnyH6PfRPMap",
  "key16": "2g3NdfqYYLmS8hhs5KnLT6w8ocB8GPZ6KrjVvWvK8ddRa2bE478Hd7AXB4icdvXGT1VgqkuEPaE7EKWUhz6ca1Lt",
  "key17": "31dDPfDwSJTQetH1iHVD8727WrDJWuJCApijgxkfxwBgjpfKtP966UHJ8U5yV4ZZjvSSR1siRnqukJTWxX2DMHPY",
  "key18": "2pTqoh8D61qp8vBr14v3dg47CiqZZR6HNicw2FfB4LSFQj2SWaD4NorihKgajcrCXzmmVYamGtvfRKQZi11ZfCNf",
  "key19": "4nA3h6oBjChE8jba6s9ZkmJdvq4gCeyfyikTDe2QEQsocRJ7kBQxJRrXahTU5zjh6z1NYjt39djuSEo9WsK2ozN5",
  "key20": "2hNQXPkejHfG2aArKQRLUnRjSfTapusTvK1CEpFKWzmnWQp5DQEdBz5EkSTDBfRqFza6VXaT6Boj8ptMt2y26bHr",
  "key21": "62zUb4iofPdiQRVbWUEoEVGKQTB8SpFjLVED5s7ahw6kHp8QKQJLcTrQqkLj8qskQUaVQM7HFH4avUUw8HRXCZg2",
  "key22": "2ZSLW6spx1P481pFU1DCuBM8BtNd2pqgwqCxo3WZ7DjFNifNGfYQ3KReVq2j8ppFcnRP2FpmMKM9iMWVSNw1uR5X",
  "key23": "4CJbtWNhQKcP5m35QwzNyrbgAoZygD87jnPhHrhZHxXjVp3USWfRNVpoiVRho9rLuBpf1rvFh67pxtkwjungC3Qc",
  "key24": "5AhKaSqup4uwsQFo7q7LKignZyBQKFqXuKt4ZR8Tv4fMG3tgQta7bMAifEsYiqmkRDk6XCiya2SvrDkej8ZVVHut",
  "key25": "foZRTK2iuE4VVmUtcibup4NprmSybPbjty8X2jUo3CCSY4giVpb9CSycoEez7ZhUURDoaBEUf8XNb7YAkiosqZq",
  "key26": "n4QpDQ9DbcnG1RFHZZ1EwXsZ2DACBtiR23zSNURgjMF2rYXmEn8RLGYAjqQwvWESus5z6t6LpKYsNQdSEZf4vGg",
  "key27": "44A1brNFRoxB6TexcJYWbByHhTKVKWj4ypjcMsZW5uaDmNPEeakW1jURFoPe7TZUZNomJ3ATabWLvUo59QvRPwDB",
  "key28": "56mzLTUxguGaaLP9McAVhV2kh7YHvW3DKDxPGg7e8v97w8GGSAd5YdLxXgypNQ3uB4cN7BbFceXXjJQCahjGYWeH",
  "key29": "2weaHEML4np5deTgATkBDh6m6pnHaoqJYJ3kibHZpLHTAv6pDwBYbwQEwyseqCPfdwL8kPFY9p5V6RHL6ZXopy72",
  "key30": "2mtKux9ehMK9a63Xhei5sHrn5cJh2Kupd7MDzZhxuxzGp1dh17sRdU9nCPG19dcGaCF1mUU2dBndcHspETfJ1aTt",
  "key31": "3TEKagHoC4F9uoXZ7ZiKFawxkLTiV7YYgwriA7UK4nxV7CoeXEFZHfM1U5uws2nmFT4avMLdUCb2XjiMce6zUtb1",
  "key32": "2M3aRVgdkQ3ZZZm3xQpDsxkgHk2tftBDnGs8CTYxCRQTDPDcWM1gbdQu9uRc8WWhzGH8bHdrnmeSsGaSpyXtMs26",
  "key33": "3JSPcVQsefgz48xLNZPJxD6jMQ1HwGDtMPndXNKV5g9KyEXk2KDpbE9NwfMbxdi2XYWZ9Z2KH1rMTi5Ewdr1a956",
  "key34": "42o2xAN5JcMF5phdw4Ne2GA5XNMKXeFjoSvSK4cDnSDRDX9YoMFNKGz5cMkWtf7CdyoV7RfwfGD9SR6TjEnCqkNT",
  "key35": "4j6oiBoi7YU1LAHZzEp63TKC1bgw69kUmFGefwRCjGMQAEgf6jCqxitXo6UsVqdZ8pfgSmKbXzi2vC6iPoNeUniF",
  "key36": "469WC31Mp6ZdiWMnE7tmN6HG4VQT5TELLdBBmh2HMquR2aSNp6bEXmbzM7Q19nX2d9tzHPjrq9tFnpAMqA6xDnqZ",
  "key37": "3VnD8gjsgh1MM3bLFdKVwpwNhkWGuVqQXGck9txP4Z36vnoVg98nTLvA7Gv7RU6v6qzDjT8bmN1zKfEJYakHKgTK",
  "key38": "K2dWLf2AgbJGdAB2eUKm28UGoB4GTfiYD6aMCnxX1PuH6u5H8nSVhQwpcZ4SKQ4PMMF7qYCv6YdKBCq8uVoSMm8",
  "key39": "4piGXNkxgmfUV3zcqNKnoMHjXq8k9KDE6W8XMqPgTDoGbWpNKiyeUGtYCHCcvxnVSknkDyfAFqRvGAVbHQH7hVTV"
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
