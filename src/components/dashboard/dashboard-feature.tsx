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
    "5ER9Xw4a4sg5aaVNnND96f5M8gQh3xeKvP2ACULr5d86DN47ro4Q8ujdMXQ4UdU6E72wunu7k3odoQ53Rxr8EZ3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ToSwPtzaTn8yy1syJ8gBwRDkmisoxLs6kNMKRYQ4BgsM1GM8gHBF4BRDyfQ8yvcHiBgvwkPtti5SYEEHu3LUaq",
  "key1": "5N5CsZDWj7iiToMeRbkMHm9iJcNReZzVLBRhoQyKY3CVzJ3PJVb6Csa4RwfcCQKcaZk2BazUBnuseoccWRQfGAmp",
  "key2": "32CTKE4ntsPmmeYRiYVWFMaL2N17EGZ9RT4hSHQ5Z3ePYXgPSpnTRVABMtecnPeeiddxVRy74HzaEeWUAMmDKXas",
  "key3": "4T2SRMb32KfUAPUfTowVd6iNbgtit1LuqYidTRo7vWG6qQYGrahpGV9McXAcHbDicqvfh8pTWWabP2E96GYTsYXm",
  "key4": "goN3TACRuFZScC3bfVyLi7ABnAaNuLs97Da2JyaZ78Wz2Z7S38GwhLjdPPybdPgm7UMUY15MZmciekhEhypV57p",
  "key5": "2g84gmx7rW14CKZZzc91NZHKboREp9MKMukffcdmFgjdsAyXPnYMWWgqipjzCMSCtVHoi1WJeLyMquZbwtsUjvRT",
  "key6": "3PJYAAKC12VDcSwuCbyN2DkPTzZUGEqj4HgE6mXwnuS16MFsJvWMfduRat7NpqbBAM12SvDbfNm8K6jf7TP5HchS",
  "key7": "J7HQyXt6RWWBC1BEAUwWap1pXdfeeT4hxQn2bgA2zAMYsNmE94YA3LLbwSYebTnHxfGypM88RwMJLVcKxd2YphW",
  "key8": "4LGAyj3r1Dpg52EXcwDWaG3nWWCiGk5YQxdoAhaUJR9TnwNaJtcJ2RMmqNKsMbWRvFACQPjahKF6kwRUiVcteMng",
  "key9": "nfCRZ6bnu4agFz63GbviMujbPixpnTPxdSXBdMQMCjwxMc9xkrfXnCZdcR4pP1S8hL2KrHVyWjCzvt7pmeNmp89",
  "key10": "3n1XgWahFZ36g1ipgiqtLEEkxNpsPpDZ7vXN47eSTjdTKpSfWvV94uMERp3ZrkcHkoKUNEv5x1WB67RS5ZPXj7t6",
  "key11": "2CSgUH5EznHywCtgg1W1eL5rFSo9qxDDQg8Nmt95ZAADGGMi1srexnUXGz8f5agRNejUT5bA8qKEKqnPMY2gQaZZ",
  "key12": "4Coj8iMc4T11tymo6eLc9FsRFLp756U8WjqQkaVt7zrXGFZpq65fcctx4gNdoWPx5MDUwyPSe83TrqYJLrKfteEL",
  "key13": "4DaDjGfxZx32c6XEvcvBJYrsjtQPsqxEzEBxqjFkBzHtjzzDfAbYkfMNVJPb4vDXujkTaJ577kXk31iaxf1vKa8y",
  "key14": "65B6UXNo4Q2yjQC9uCj3TTvgDoU1LJQiPZz7LHYQAWTiuiEjsPXBk9ehabbfhXYgeZq4bKBuZmYF9iZbcf1Wda8x",
  "key15": "26pHHQb79xX2jY6Q5xQALjqFyFdRa3Tecs5A6Va6pZiwvCup9t3QAKEvKfyfsG6AgEz4DBhEiWmNk4oYQbd7yjR5",
  "key16": "2XZt2ARshfgVxDYXrFEzzgF7k3Cqom2uRchpgWHx9j3XY8NzA7QU8b2uBAcZSTFCuwCZ34y1eDH7DdTaBJQdL1X6",
  "key17": "3rh891tXxHa1V2HGoyGZTv8B7KVi1G7sXWiHTM8bgXVzh7zMumuLpGA2MWoJMVib1G1bcoSYN3g2mt5uTmsR8E3g",
  "key18": "phHr9joywcSCWGjB99B2fmrkJi2QTryuiy1WMZWSxDA4cDv6et6JcauuvY8WjyvKydfhbFCuqWQPLyeGao5Qyx1",
  "key19": "4yRp3rR4n6jsr6CsFg7bKrkn4U42DHHFzJ2cPQqt9m28zBnpfXzCShRto6vC1AapvqZz9Axqa85AQpFZGAsYSFjA",
  "key20": "5Lcd3qTGZRVjAXfBDwbGoHpMsdhyiuCNKMNzLwjcGYSSh8PFzjrTZfxXbETb8KS5yc1bqf4P1jtJCiup4p5hD9yY",
  "key21": "bCNBcTVkf532s1A7N7wAnwbEmThezJpWDXUvWgRkeM8tnwQqWMY95Vwitc9A4ib9sVdsSpfgXCxYGXm7ypkQJqm",
  "key22": "2KoUnqPvm5dgM4JrKjYufJA936X1NMdBiNDLTus6qukR7gtzojwCcFm8aHqdJib6ydwART5UeV3GrCCgQ6JzMoKG",
  "key23": "4hdY4BV7uNwTgwBnb5ZADN2T3HGbJVq3pZnsjDjDa1CcL962z6xAjnGhihnZCJm7ZszcFqn4yPo7CejFyEk855Xo",
  "key24": "nHqMLHzjzZsHmeaQXHURHsUyZgfZ4wa9iuCExAmbUd5m96Sg4qhZ88dysaSdjE5zBJVHFEtxGdRL7n1u273KMBS",
  "key25": "44hNUkvmcu3R4qcpzoFQjASyRrJNT6VQUpXA3Mthk4PHghX6FnD7K2Jifv4WAzGnDnVRV4aQcxfJDCTAjz3kRc3t",
  "key26": "66ZFfphqSLJMcXNr6X1bHPiuXh8zgo8MTYZQ88nJPUgcZf4jBa4ET4UsrZwrWqqWn1EJJbkszErbDrD4f28yzFZj",
  "key27": "5f9L2dnzeL51FBq1kKT3kYvgfLk6UuUSoMAFLaZSqkeEUiKyRc8CR3W3vXy7rGJfVLfGATZQsK5ukXyKXiEnJ88k",
  "key28": "4s8mHB4j1mYtnPivU4tnDMoQuNg2A9kZfPPZP4ezRCdjPSASD1W2yMg1P93MmSi9unYQRntrEckywPUnAVsXeEqE",
  "key29": "2Ef5b5ChM7x5NAfBrw7Swb4pCwzppJhmcKPY1XiREE7D3MrD7N41NrEJbqxaEstvJSU1p6zeFcgTD4sXtUhy9S64",
  "key30": "EyGnNurDdLcGBUhQnppyiywzatqGZVqKhK95S8D8oKEoHYoM79KkBQN426TACGhkxHtPUDwRpXBVKiGicAN4YsX",
  "key31": "2aHfNimQ1CF9eDLyBHNcqGyeuD4KwntUf21cGJvuf4TKLzpVodstkVWeEEid23yThd8yfZB4NkX7rJE5d2NQNvUG"
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
