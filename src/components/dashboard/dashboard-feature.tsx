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
    "oS83XdoLyEWRGbGTSdEVGwQ2SB9p474Ba6X2FrQA5Fz4fenyDojXQ2UoBVmE1iBTitdHLC1eA2QQguV1EocjYhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kqvnqjf5QzwUe73jmgdCdPSgogZ7dptJziJZHLRj641cQB1vo1bW786N4auMoDDz96ajw8Hm7x9AS9acPNJcD4b",
  "key1": "Ufa68NsyBpxYqckpbgPKaCUpgHcno9UttLdU1KTQxzjTvMicyJN1bEjLkwpRjXHupbjtb1d984nx2NxnqbqgYDv",
  "key2": "4PezWWvRvyWV2EBxN8pzk7c3XazPYyq7vJbWi8zJPzApMqRkwcVAfcGJRCQqCzkjKGQJoTruExppVmvGNvGho2jT",
  "key3": "51aHyhm4RuFY1Aw4eq93sjgJdbusBDKTLVBPT8PotFMhYRm5bQLc6wEEzzHcmCQbm2uH2myW5TsxMMhV1AoNt79N",
  "key4": "2iGttJ1xiY766HebiQ8vbMHH9gaaU25jr4dGvoTQXrn5d1pM6KyA56HkDB268U3mWzs4sjAQiSKoJ9wo7EVjRKmZ",
  "key5": "3ABGJQfWARYNnnLPRzunkcauaih78t2jGUVBfcdC2hbFTRyuFi37LfJkqjJY3js6WW6cHPYsaFjtfbYQDwbzQWZR",
  "key6": "3UrDrVxhpKArruwcQsRGmPNg8zQNNAe7bf4tsv4sdHrBiAxZKEKBF6zcuYkR9Ks21iTQvggScTSVB73BqkbWGK1B",
  "key7": "3bUWnwSw42EULD4T2mv5xgrKKnRcJgopv2xShSAPrbeRnPHhNZ57bpqH6E4ZThpqvsyaCLKFktpZ3ziqdJj2u7ws",
  "key8": "5t3aiBedGB2FzWsT16fMAWuhNefK155tfZfPSD5BRU5uPsyfQqYBkVvT1oSA98ts5UyWj3FnvxHLLtM9L69dkVEb",
  "key9": "5ikccwJsVmtLSMpsmLttKj9yQ8qfkJiSDT3CiCkqXb1Aq2k7afTvZZwFVSHtzxJ9HjE827iEo656tLMB1hFTpC7A",
  "key10": "58ebKoHPmtnhWxeuPVV33GKbM5Mqe1qMNB9jb9D7TX1FkCpqPua3zE3xT7RkMMgPcGwUPfF9WLtU6e4Ydoxq9pWf",
  "key11": "ZtUNEWuTJn2uTaq6kZrXc4ZxXda6oZoExskZ41QpqxheoivZ75Ngmd1jmkwSxZqVjN4EzZcWgpPpzZ7PqLGTuuQ",
  "key12": "33X1owtKN1Wu4c7uuD9FKPuHJ7z8GradGVsNWehUK2wjNxJvX2YeFnTZFEwrxBv3qJmKJX8ev8XHWRYcu6bEnsUo",
  "key13": "TAhKtGFGtz2D6PWGRqxfp5iUD9T5WXvpUd3AyfXNojmhqEK4ShRfahWHnztQAR8BRTMuU24tZNur8ZZH2kkTZFt",
  "key14": "4eN4GuwzQLpgvTon6LQK4j4HzNrgaUfcXKfEjzYGRGxff7CZ9CAFWaETeUBhnnKSJpXxz1Q7aUmtTBSHxkQVVZJF",
  "key15": "4e5MZ4xVq7MDj7bCKe5WZWPfLmSaZAknQLXn1yfMRVuvXM7pKDwVdWw3zTC1LY4rbBRjkUM2qvS4it4Jv2rnyg7F",
  "key16": "2v4YYRFvE6nR324S3ZFoowjJJgsE1scUEfVFdsHtFssyKTRQHqyh13812ZWAsdk6JdLUCCN8ZHaE4nPcx6zVWJAQ",
  "key17": "4PmvyxiUFU4i8Agq9JrsazUfaMXjJyhpf3xBYPQkDc2GhuLNuP13bkAANfB5M49UUGyACJrG6N5N75yBb4AGgaGd",
  "key18": "kGKzqW5kadsF9UGLL9cgNhJG2Ksymq6NTgAPmBvbxyRCJCkNWBWVd897Vvd5PxQj7xTkkk6dUaMd5YpsyVzoQ2y",
  "key19": "LRjzjq9SX4UpHjrMiy2txzdZZBcDwj746cR36e2dgcEJiUTgH7am9qS3pZMDn449oYSLTRcEEBmwQpsxnPABeHQ",
  "key20": "3kuYN1STEGJGHP3xitJCUVSoNzKNGkygX623rTC76t8p3A5uwe5TE3iAq5eJXeDWUTQSFFpHMTVcDejoBUBh1KZ3",
  "key21": "4KbYmNAvtLd7U1qtd5kdyY6jJRMChbYriXgtDMvnQAA7oSYMLADk6PBXspBZ6Mv7a64T5EPxs75MRwSadpmgcBzu",
  "key22": "kAkGRj7cMZewr1r8JHeUVeD4epkeMovne68AN4JB3LyaQZMc69LHG6TKkgNz5WiMvzcMkfD3Ty4qwRa2u81rkMQ",
  "key23": "5w3Jqj6NCGD1fLgs21DqSveua9CYAwRGV67mKaBY4qruvEENt5Ts7rszVBmRJT2SYKzsrTGx61p99Wca56LzJDig",
  "key24": "5ZRyEn8jWe2BgEBQeunLLeT68cXDKEMYQnLRaB2MdxfJDDJwzt1xgXwtQkrwGpif86bEZpSRc18d6eQBJ2pFoPub",
  "key25": "5Wf2tWbozHxA1spuF45nvxR7BeVV53J9ScJ6qb7RTfWFod153p9dsJrtFuFxv9bmLEEPzgfPkTjzpggnBzH5MmsH",
  "key26": "czavtxxN8BvoWhV8gjhi2iKxtUECeMfX46KmgbUCoVKmjXoR1yQutJ9PBHQkWoubwoxGtZtG3AQgT31E16hr6Qp",
  "key27": "3NgXJ3TxTxcWwvNWkgATU6bd66FLSNmNh9ToYRvjCapr8e5MCoDi216vgYWfrxjKRSbhsBHzSUnNyTk5spc9oFah",
  "key28": "4nTugCfDZoHgMcsYN6J4i4kQH22hN2NGNCZ5YxwDUX49VC6RbrmzDGBd3iRc4ivVrHNuR4gPZuBidnSMap5zny8z",
  "key29": "2dm66hbC9sbkgZkgEU1A61kwAygbEKVi81bKvvcz9jSNhboudhj1TcMABMqwoGWTsGhmyZA2Gyj2D7gZhZAGVmZ1",
  "key30": "wu4vrvkGjAyf2xr4gf4Qer6cmupFxs9nkVwLVCmXWJ1hSA1om8cT5WHFRW7KRhBk6XfD8V4J7uDyt6N48a3Zp3D",
  "key31": "4Mt12jYVWMGbXGjqUgiwiUkCFq7W77iRGHbJ2v458tpu3FfVJZjxrkVkZPWawofYtmJ1P69bVXTWQJoe6oDhC2qZ",
  "key32": "244eQ39fd1r7a8tDjuasVEHnumEuwft18XpEP7M9Y47pbxvJiegd3fTfq1G15xbyGeRKcenmGb5YAjYpQNft5k2w",
  "key33": "2nbZHcsy3ZsRXkxjpFNjiAy7EEGPwJnD5qs2Wk7gz6tUbVHCpHNWE5qb6cCaWyRDS7wgxTGu8iAoSNnyzT8AhRcH"
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
