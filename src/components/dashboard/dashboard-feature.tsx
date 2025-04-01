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
    "53Hki1T4pdqDSV6tJUYufTwPHkMrgWM7qmvQRYjvqydn1S5PfPT457CyGtWsgRn1EvR6MZssDWWPMoE2hAMteETs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJ9eE5QWbLeNAYpSisCoV6TcDxA4K2qS9MD3zn68LNWf7sRKebj523K7ZB4mHr2eGr4d1rVQiKayG87oxmks2oZ",
  "key1": "2VxBBygGkgia7Yy9aXWdNcVvdHwcbbbGAQwsTnapbkZVkF3QUiCwxtTqGri5983PdQRowcwpMgsjZvZx3AYug7Qq",
  "key2": "5B1tvzdjaM1oK9NjVBUAMaY883kgUJ6MCcgzFtP1psQhggSxfYAQGNqqMH1iDdffU5eCB8Ti6gazj6LdqJe4wxfE",
  "key3": "2StNM1oyBFiDRPxRduBn9TcgsKsnx8Z4DFhtTF5gMwYFHKJkbUuQYfY2PwaGhwAPgTPKRQJLpKkAx2dE7wiXKrCe",
  "key4": "3jpbVbnyQkCL6Vyi4JW6cdFSajU7CSDZLpWmVpqsQYQBPqMYwuBQxobmV3njs92V7RngD9k9uUDP5AaaffMJ2LxC",
  "key5": "3oH75TcaoS6cebUuLXh114eanPfcexcp6fE7de423C8vBULGUox54rxs8w21geCkLiemE4rFRBre7TEUeyNGX97o",
  "key6": "hCdRNjWjsDKqZ4VzCNrN3Mz98HsD7XpenuVD61HtUt2qfY7e9YkQZKZKhoqS1cJu1aMJ9gC5emaDMhChZL2KZvD",
  "key7": "ARzLxz5n3oKEtz1zPGSgA4ej7VwFNpaHYD9Xm8ftbaDpefxW8Awo1HoLM2q6d2zuej4XsvYRS1rChLrjWmXjsDc",
  "key8": "4ggt8Vf4pEiARZerksjJTXrxtmBwNsWwNqWNckpDjmpV6jKkbL1YfrRKGvQq3USh1r5rDPgzp4NiqqGxHvZAvtgU",
  "key9": "9jKnCtQZgikwTTATJuVfVNL6FF9pQy17WhR3rUfi4E7zJAyt3RT39ZpwunZXCarEUDcpoNxoFnnGQJTs4Ps1oGJ",
  "key10": "Sx1uvDT4FoGZrZypG1hb7WZyScSFU4WTauecLm7QxJgcgxDTgVBoXUDBQpcBUuTWLkYSVBLqo2dcqLS8AuHDzSG",
  "key11": "4oeCgibYpdMcMJTauHUKtS6zM8CX76SepwGQ2YmsWuyvFRebrHweYK9NnEkJ75Bh9XDarJsQuLEckMt5uoqKqhJ7",
  "key12": "44AFJCYfV48AguHFfJCA5LoqmAvzmprUu7PKCPf9uuGAWguFRbPbHqsg2Q4RLYG8Lq3TTdUQQJ9zXhcVCLNQXdFW",
  "key13": "2bgUVEvcDFPqHNtZ6H9wYuBSKgsKmxtrvCVAWzsdQUYa6xf9fugnEh7rVtK1RU6Bh5XEbyShnWhzrMriWtsejx8G",
  "key14": "4MQAkUXxoGGLHjA2L9Pqa44LMXeBWRAc72r8TiU5nSxTbjb4gBUhce29kDiqrz9GCVhFZZFyQ7Kw4RiutX89nkyo",
  "key15": "38DhhiMDVr3t74GQgfucMnXe9aQtQBtamCVV2RU6mekuoGWHpZsRCZ1M7BzYhpRNSk6VRXiWFBvryjeCsD3eG9Kg",
  "key16": "z4cjivrFNsu37bGgpvDRCYt1yEUVrq8f37QLYT1pEYubRNpW2GeeEU2dYR4mwAxZD3b8kx3vVuzzXhF3om6ZXAX",
  "key17": "5m14hDb7QxPYNgfG2vP15bebJgqNkdbwVbCg7epzv1RUqzWkKgwA5e3tkJv68BmuryQH2QMPE2H2vARjdSi9gCmF",
  "key18": "omm8phxCgHt7e3pzbYMp7VwuuxET6sCA9VYiYfU7UortvXhbBZV7iaRw2qog17T8p1WpUbqSkirYPnZUzpGpv2G",
  "key19": "5k7KXZYZnuZPJ3tFBsSiq1guVsdjzR4oqP5HLzdLypuYvHtgfgWLuc25JdqM2NRAjHZCNPcQQ8KrZSwCTL1YL3mv",
  "key20": "5ovvMFhbDJAUber7jFGiqMAAyDy48S9sRmwYSUiyzGvezc5F1JDbYVUTFNSzcGUpqcmuiqc6nrWmRBcMxYQBTW6Y",
  "key21": "tUaF8VNx9PVLcmd54LuayECfCxdo8Tb3QfJ7TJZ68GVRnDqkymvrt4P55YuaYfbGaNFACR53CJsc6vNhqnTEy9b",
  "key22": "5mKuqDLp6ULfF566xBR2Jc7JnruWSuDWCAKGa3beuYsUTvmVisXUDZi7qZ4NjcNGXUQrBG4UXyApM9ZgAyKiS36D",
  "key23": "iQNjMR224x4koNj18AhtBhDafk7zCfZVJiG83Lp6mUrPHYcJJ6LEAdMKMhJ8vcpM5eyQLLBZdMRPS2hh84eGj7y",
  "key24": "3DvC5rRTda99JToLJ2hRxvLjNS1F3esYuvm8HLySSzidRp7Xmwafo55w4xR1EKhaH46pHyJ4hVhMTaKuJUquWraG",
  "key25": "4uNTchxetQhwP13QboyPYgAyFWtLJXZvD18DtdY9eEZu5r5PvGRjGp227HS62h5WksUXnY1JtuS49FhQ8tdeXUvF",
  "key26": "2wNFBUwujDztFm8kryJtk9M1dexkn9NLjmoeJSWrpKr935KxE5iBvAigbwHnj4L5UzFtjiTxFq77KYp91eUWgPEC",
  "key27": "3bCTa3717XMz7usQBFuhuKwGMPrvTLpzN1r8Vyp3MRWdUHqyQcFvpQj8SseQrSnT7dxif4GiKLY5oA8L7NJy466f",
  "key28": "4nU46WySMJuqYQktMwQtgcKZpGwFXUkT8cpBdM8ZxqoS1dtmpU2TSwxMs3Jiexgd6o7Bagdw2HgqshvoYnacWKv4"
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
