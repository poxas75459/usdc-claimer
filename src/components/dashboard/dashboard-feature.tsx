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
    "2WcCYKNSKDWrMdDyiYGiEMV2P9gDPHkC614rB24xpwnS9Amj3EQjn6xjZJ5yVNVKqjZqNRhHoArsALFoFQWTWPX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xoutYsxJ1v4Emf9h8jEfzBmjfH78wfTg9bvS9Qya8YyKaBu3e3ynfjMKUdMFBrGDcRaHZakmV2a6mczyUvgvCnx",
  "key1": "3JZ8HPLuvNRmRpEEFWnvH7eZ5pCVYj4fm5Uqf3LATGBFQWf4BgVRN6K84A2JhvCWJH7X3HT13LfeEFBzLzZMKxbU",
  "key2": "5zB57iht9XCPCuagEQ2nfRknBfQBmcWW2pHnpSnHJZ6k7wyGsfwUVfEhQxnmwjZsy7ULMGQbto9cp4n9ZePnz975",
  "key3": "4kvJnG7DDsEumfv9BMt15QZexG2VTXpjiQBo8mUctDK8w21o55y3KvXT5zus8e1X8kvLQk6iSDXqXSZRWwoNBG1Z",
  "key4": "4MJ3itBPbSmaM5Uf5uzyqh7sxieGQD28WHwP1bU39uvjWvVirftkGqya6AuTzNnY43izDZxSawDP4hporWh73W1f",
  "key5": "4QTHSAUodUWZUPVpj5nbjZ3xRSU3JXS7ouGceYJCX7vtJumBuCttm9LjibdjPGLaARZSJs5wSBMoPK93DeHmDTwR",
  "key6": "2aD588Vs21gtAdxbZYLYjkUqkLejraAQGFdQzvUdGdJ2Zr6CR3mJGZFEEgiWp83EuF6gQimzay1ufj353MECKUb5",
  "key7": "62big2dziwKP1Kshic29fVxAwAKVzYDtmG362akcCBzfpCmV6GreqxBVagGoZjz7Y5KsmGZvtrx8FH3qHr8SDMZu",
  "key8": "2EfY95zXitHcEYJZX1GcgXVsvKbML1c5as89onAKeWbJ5nsJsxVAxdccTcjH9GWxh5qBry7wK2E9ny7ohUWFKmQb",
  "key9": "3dasxtBFAtKjojmo7ubWaMM5EnASY24zs1ctayyAhAZriHorpPyzCxjeqwAjR57b144rjJefU6eEiG4AsiaQ1vv7",
  "key10": "5CM7CNb1285J5F3LhTGC8gZXey68dWsABKbhTGZQJwQCHVk9kbZR3x7FNZfvMQF6VoJV47hKbY2UsA7v62ogZT1H",
  "key11": "eu3bigXx3qzQ8FD8N8WuxMu7AkaaWF8z7Sqqw2HBsHin6LhUfm8ciXiJji8Zoqpa8bA5HAHTDs4xTmMQ8FJ77HK",
  "key12": "48DHx4ABvHdzm65fe2D1uxnMcQuSNRZ7h1ZKD9fddCQAyi2jmhewfA1ZvavjiCqthrgCufDx39Rfb3McAkzVTHFD",
  "key13": "2Aa5UY7YJgkDqwSQZC7EL2W1pYokYnteopRQusja6sUdoryNXaX7uHo1JhzxbqBKDkH8fQM1jRYk43a8xmMW7oZM",
  "key14": "3m12NJAQEnwcBnjcRCoEteBXAzyjWBgxAN78AmydFJpsy8WMk5Jz8KFAmmJaDTznNjinT888LYPt9wjicswoNJ6y",
  "key15": "3eDAxFASTjwk2VS6LsMf7jffkAcVmCcZcy6uUbniD7ncAhhVHR2LLnbu2gxg1Kj5XTnzF95oVbjqgZsTE9DnQqh1",
  "key16": "276hquGqDDH1ERoNzmowQDfjYDo68TL21tbkpCGnLvoDAFW1e3XVHsnnLy1gMWmM18KqJbrc8oDZhVGFR6iV2Fqp",
  "key17": "3bYXVKKPbhZsrVPUN5hUVXCHdcSyGYpdPaTpZa8gK1tP52FVUwWK6tP8HgSNqJTE15mRBLdYHLBdYCFBJ9EMxzoL",
  "key18": "QQcaU4HTjs7ngrkt7y9BQ9K8LUqKLMuVENNTetuZXwgbXWZSVMofraVEo8HHCgJbrtv1pSQKKGrLc9u7ULvxjwB",
  "key19": "GZ2SmUJHzuai5iGhCZK99VBYNQNofm2B2zewBVvMHU9QBSYvX1PPMxEbmak2fKnXceBWrMXUmNgTh14AGtNyGcc",
  "key20": "n9fwWeed2TW7nusR4oGfH7CERx8UYYBvQhqeu8xTx2gujwvJFe4GTg5q4Gxvv5M43zFsprQgDvH7CkBjyShssgW",
  "key21": "2pA9au9Qho3DpUoz2jczSNfFRp558cRdgRRdX5WxWaiUmihBfgYfWuUBvvjUMiCN37W16AiHbnRMaf6Gj5hV8yfG",
  "key22": "3zSvKXAvMaHZi9jgD2xEbKfxeuMMedvAVSHAkSLeykK2PoN3dMoUPpqPWddniLnN3Ba64NuqudkVTbTfymYSoder",
  "key23": "2D76anPUr9ixCeNqMjg2EXcnRgLt3fuiNHjCxYZgzFfQ7cjF7YSnC8HBFfLPRkpg2FMThrMcTfDtDBXvJwvnhqGL",
  "key24": "2XpGTdCf1GHXU3pjiV5vKjFKhBkr3SG7q89GaCzLH8mN6V8ihYPTiaGjQyd151PFybp11fNu7mHnJ1fhW81ughxM",
  "key25": "Xusho7AsfVJw259dNBUeoNCkVxdUJLu9SSWzhS2KgN7KkTjX3a99Ng9E1S9n6n1iv5fNnwV4buyoow1YmREKmwn",
  "key26": "51ogdh6A3jV8L8qsJKiKkdGmFDKrkbdwdYsvZqykTiyaqk4gWxsMtNdkug9iSBydNHEmmqZFYX8yjwGUcHe9TUDW",
  "key27": "3fPuzABJuAhupP4cgye7WcQxu47nDubMPncocwj5ZtF5cCzpHqbHr6qfMhQjAb7dXvf3mtsWobhzA88kEMUSrQm1",
  "key28": "2WjzXWktZ4R1fjcoHoFdfy37o3EYKRrTpe3a19ehDTHipvDVCQXiT1BfepeTruNVFHdF9KTFpDQjhX3ysCEsAaLa",
  "key29": "3wmYKU5DEHys278nPYfxFovv2N9kUDKrDMX3Hhj5FhZGfEXsfVaCvLr2izuRBg9qEkdmcACmuTv4Mgois2idLhti",
  "key30": "3sPPoQvsQYNsckLmjfKbGguHb7xA2y7bKwYYQhpDPrDBJouA2AKAdhJVTriBgNwHkwmHB5qkFUd2W4ENpa1kYUZ7",
  "key31": "5DoNyGNnnv3nMs8iyNFGrcmdm9chNKsGFGL844iEfahx9PEwsBJNoYapqMcaVyyeLguBndRAYN1LfuXt7K1KDWFZ",
  "key32": "5wqkhrKZFdMnpuwStLUFWU1ysCXSgEH8xx5oQytv3K3o9Z77zQb2Qz4d4i3Ya3FfZRft5qa947Fw8vXTTBXinGrr",
  "key33": "5ppVNCeZvHd7E51WRr8GYTGUBjy4Wv3iKeKGCeGotBDrbijd7uXMfszS6H9MpmHjW2sJoeK8wYFcdkF8MGjGZ1Mv",
  "key34": "5bXgiGtvKaQWK2XF4XDog3gnaWhAf58A6X936WLgazUMqFTDGiAmyefcVBgXoxQLGL31teWJkoWMwCjoWjkDYgVA",
  "key35": "2ZzyExxp1enA76c1EYPzGnNU38qvgkhL5PVuaEvw3YVyQtcFQLqsRb3x1P2Zsc6iN585RNzQFjtWeBPP1ahwsDLr",
  "key36": "ZHKeU6TC9isTN5LntVKJvzoiRUcNmKBPKeqDchy9zv9HJNGrqSHw5uDcn8QpLhN1qngbK9B8ynSkoHuqdXrBkoM",
  "key37": "3w4fDBMCd6RB1yPm7r1Ja8kQ68msLuvrXAoWZdDKwbeTt7Wsw8ZxUGkEKPbzTEMRs6EqprfB6RgWGDysz9vyBWDx",
  "key38": "24a5K8bAaRFUutqqTPW6T9gRAjZnNDMtDrNEksU7t4X9Bphwz8CUnPjPvTJM9W27eidurcXWLcUWNUSRydApxhxC"
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
