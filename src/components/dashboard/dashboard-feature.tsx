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
    "66hE4RvzZCbkbyBty5WvtPa7sFXp8B39bQpdQJnqL93JsGd9CfrgnKAsfkhfrR3TvLMBsnurU987hH4EZgXoVnHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZeQSadvU2aamPNyer4xK8Fs21x6AEEWyrND6qegoH5qGpEodh2YnWGYikMnmYGDiDsjntLi3qdbBhzrDur5n3u",
  "key1": "Hb7HeXbMJf296yGS7Ad9xjnPEDEFN7ctXQ7TyMxbd2d8WwfFXy9Eok6yNx1W7Hnrg5AtUCxEmnm1ZzrEScm2mUe",
  "key2": "4APsruiUcy9HZ498CVzsrhYLUEJeG1qiPKWRuvdTybuwQdF4i2px7WrfyrR4ncwjzBNNBAXgVT8NLZGKfF6LCnoa",
  "key3": "552WR6Dqb5azMgmDiTh4FrwgLxvRqqhaq7XgB2yemReDWvzFezT8vYck5AXc5pziJPYWH41x6iVGwQagNvpdQWTK",
  "key4": "4rik4hhGeyTtX3Waj3KWhGNuoPpXk1pVHNr8Kt9FWMTbHpsE5vmuENJfHwMcdzvG4GsWwxvWinfZS4wza3fRNc7i",
  "key5": "TwyibAgzhaRmeBx6186S6kAydB24MYfkjakuTjTu8QD75GXjVqjNk9QXgqbzVK1zgbNocgPALr8WFKTGmR9prj3",
  "key6": "4soFrgVppzMuDe6Esas5CnHS32H8M97ysajQJEFx4aMa7Ub7yXtmQkoXJQ6QzNhoWXYWnEAtN2uNZ76R2ECR4cee",
  "key7": "2bGnq26vct6wxbXt4RWPupp2ayP8kgWXuMDXexcJhx3Gw5s61ob1pfiFk2tzF6w2jTP7fPrw1DpXAenqUkaVn5xR",
  "key8": "RZ4jQ4kfTA8Wda6yoRZtZUEhfMUM5t67qYVtAJtfWNb4WP1uM2VaCwWEa5Kz5WWivnZeH39QbNNGwvdQkhDSAfC",
  "key9": "5DQBNhiWSH9dycYCxxAiBdbCMJNmCtNQArsppDoKiaLqvaewiMMxz93ufpaC4wpxTLv7yNHD8wMJL1929NYEXCkN",
  "key10": "5rNpzDHvMQbXeXLgjdUD5FgFr3ctyU4mfgbbjKWNcdo7NW9YoGFDnMnJHGS7K4dzpV2PSxeBv6FbFXUErcaqBjeG",
  "key11": "4g7LsfPZHDMUSfkjc8tmaehxC72ojYQZhEan3YEggDArtAhzRmJ9GtYHLu6AMvuGxp9YsSUy2oov6eeLrPBo2xmG",
  "key12": "3UPLsvJfMH5GqsuKNbJZXpaXNTkqtbFUZ3RyAiMGD1FeNnECbDT7xJoUxernrFifETMtcg5uX94U2GPwq2sJuK9c",
  "key13": "3ATrkqqLvwTKQ9iTBDBzviFGX83oWf3wy9gE5yuazgnD8Dn2VxXYKkXWwZ3m6MauyNv3QFFsoQ3ozzr4zBCHfVQW",
  "key14": "2rUzuGPa5jJhVR2zyVMbRyeM39BAZpVPNa2sGRKA3rcaGdXkVQkwPxR21kDCyminpTomA7iHvRmks4bSnJUqZAqm",
  "key15": "5HaXSbxNQmq2rjirijFWKsiGX3raVGg1SiB8EbHsYXnpqYenCifLCFzJAjLJH5qQXFaeKUQ6B2tmx8FyxMum67ag",
  "key16": "2p1LjJ2ptz1WeVvG6xWHQmX3BgBPWYRue17D3B22AwuGGt3SHhgWpSihCgJJAELBkMkGb7GtdQppaaGEk9GwRhnX",
  "key17": "3CPasVdNMUpD7QAjVVZAoi12KuT7HTv42qq8xVEZagvrfZivxXARSex6jijMbLevPPpvHDrDhqLbNP4oDF2Xq6WL",
  "key18": "5c6qGUf4xpWdJLYL8qJLsVcqxySvjJF7CqT2RfaPyMmbv9gi8jF8rYZWAPhdkci9ZnSmbERjvcbYof3y8B6C156j",
  "key19": "3NnWoidW3b7aQ5sLxNE7D46Wme37hdB4fm9zLUdBbvU3VAghycwUxhhBaGPdd7onpyAqwzqXG4WVQaUKNteefvuT",
  "key20": "AouqiDVkcjaBiAP11D5NKHNBKBj3ENjKH3nBzaXvXFTaia4E4mAsA535sTDtBEF5J6hhoh6atgm7i4MXmCtphbT",
  "key21": "4iR7HgWFjSBaQ4bUr9kqNXAbrYCAtjXQfQVnTc9heiGwK3oEBre9uLwA2E2psB9NrTxu1CmVjj77KN8dDdivbeKP",
  "key22": "3FdS3XVmMy9AGfiAAKaHjMBYnqws3VLjEg9PhXDger2Qq9Csx672bpedv3QV2AgNTCTSq6CyxN8aFntc19HjMnhV",
  "key23": "5UkFtywvauRfdvxMR4gJMgtEZ98vvC77WADtEUAinXBR897fWCobm86bpJcPLy8FEEMUKKaXSBkEG8fpmmUi8cZN",
  "key24": "4ebjy2razno7fqwM3iAC6zQQdzASRN3ApiKScRbvGZgrRMhJVumu9eNiMTJZtWEFYJRikjLTFABTZALegifyhMWe",
  "key25": "5xUr28s76GYvW5nFBa9neyAev3h1hFmr1TMDfMKpjJwtM8kSqSRLN3BBn9Le6mdyBuED6t7VfZfHradRARqZU5uU",
  "key26": "2SYBp9FzQa15XeRCJqSrQCaCD6TWQ6r51bkq9BNypFggFbsYKpSh4jd5RnvTw5rmhXj7fdue7Z8A9pfRRCzjbbia",
  "key27": "3wugRMTKQwvamw6FHN9rAWAuD8PBE6VjaCAjDabLqeUiGM7WBidYW1EV3SPoiMhZSsiFF5ofFQ6vffAvNLgNt1sW",
  "key28": "2mHVAQsKTao5JFPkK3iTWFeQspa2CcUdeQLZaA6TeZCyYjBjUd4uS1ydo3jnFCQBQy4pUsmm5ffeRiDtMJrGLUZC",
  "key29": "54EV1yLf6Cw4KFyM9ZABiBUSQ1SkCkZTcerYzTemYihmcrjCBZZZgAFzUMGkdXV8Dxo2qovLmDuffk4HfbvY49Z1",
  "key30": "4qVTnHb637azKh1vqGn17Da7ad1UkCsZ7xcCukF8E23W1PGEXVQoJDpbZWQw1WyD4H4eQAbVbcRfpyzrQVrppCiT",
  "key31": "5cDGFcDQXqYZKNBrpjGRD8iTrb22zvZM13GCZ2L1SfPgcRA7AMPJVJFmafi5VRvzrD2dj3AfuGsBL8DDXx3dw7DU",
  "key32": "4n2dGHhTYW6JvQPwVDw8rsq7QJVRJszWUJDhs1UTADMmgpY7SV95crwBg1vCyWfMzVP9CkevsDM6LACx5dVWvcxN",
  "key33": "Jiox8z81FKvCqMqJp1miFTzuqbMxTcCvEwuduSBTN3tJp9rf8d7wxXrrHtCzJWtPYg1HqqTnZjLYgMQHe24BKKn",
  "key34": "216eD3bQ15vqZueHEnorCxohj1DbxMPwtpvwwBKGqK2wWmNRYK26fboUR44sobFnzoLdpVHYvNk7gLFMkLBCLJXq",
  "key35": "R6om7rCgoWb4UKL35Mki3AToMvW968kQMfXf6FjFUWuoj6ioWCfgDR3uiwxApYA5pAWDkqfTbDXKWEQKB51CNKw"
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
