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
    "4BzyLPN2mDResQAKpaof1stDQMCst8T92aeawuQcEQgE9n5sHyzeJXKnLfDjavtbBzPKb74R768vyb5YAdt1eMAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vg2dE34ga7PHddnCmqocGSbawqhjhkYh2RpdUwwHn6XrngoUHt4q9Jw4Ctpd3JqhPQjJA3DYdu2oRUG5pQLS9dc",
  "key1": "3FDtxavNHGC32xRFBrTC3KjMbc2MgukzMixEnWKzWXPHUGBcTpf6vJaqjRKd296T8JfU5QVrwXusMbyHJPS9vMPz",
  "key2": "s6zbhvZLKGBk92pjBRpja9yfW7c9kwN3ytF6Fnbkb7d9QNwxCPWRjok3K29Airye5M5c66xKhHARScSRoiRv1Mv",
  "key3": "58DHbdbBz5U6bdbXD9DDd8TzdNbSrRhGVKUK6XD572qwpgaG4ASXbf8aaWTJNe8PGWcECVZhryE4L36xcUKFF1AX",
  "key4": "2gEehYHh5p9PU6UaPPES2HjhSftnZtmMo1e1uTsxLhSYKsd6FZvKCszUyzWpsTcuM8qKnov1iuW6CRiQUjC4od89",
  "key5": "4chDPFsnFon9Pg8rbn34fgEXtPNp7aPoK63voR7QuKNgxZR1jB6e9Ncu8XWfvC3UGrN5MN3xHwDHFnGc7U8isjg7",
  "key6": "5w1psQ8eYAgkzujp2eK7gMPcJNaPQWnn5TprBEiAMFNH46mx7jF9jFuMkZDDDDTxYTr8GFYMY3TmdcQpmZgbiAWv",
  "key7": "3A8A46SuN6gW5gV84bQxAfXPwaqK7LZendn34GRpcTSX1bzvMhypKCNQt9oetZccuDkC8tPzbAY7Jz53R1qADFr4",
  "key8": "5XhZG4pn5zEoeqv5d8qD8jG4W2AFc5vKZoKYdjoicD2EE9NRSV8g6dvxazZMxpq7qKvWaAhntFDRKb5kFX9goyv",
  "key9": "45iypFu6A4tdw2seMaKrfAvtq27CxrkAeHc4kVKwASbYpghUpx8vJimsRhDP8zAyh763safMgz5Ae1hWpKAnmNZs",
  "key10": "3KdNxx9vkYofgVsN88ZzyzVSWrxJMNkWzaVzVMmAmcbub4hvp6rjv7NCzhMW2BWRt2LWWCUKWw4Q8oNaM15Ja7wp",
  "key11": "3WRr2u7sMYXjabXnDHwmBd852wZSaC4rQM8RH3NkM94PdceQpLFmmK5tePZTRUSSTS7FJgfkySA1nYAwQMyreBUb",
  "key12": "5HVP1U96iKb3fkEUZpZLThorfD2c9niLmnCXwXYoy2PLPJA4KeuqBk3fAggQx1ZFYbbkLTSpoFw46vuJCKkQ29HR",
  "key13": "45KjDuwhomQkedkjz7Pnz7j4SHUQcte86dGUDYJArACXvvwqM6QMeudKtP9fCtQWn9oeenzuxMJKS4xAMZ6uaLXC",
  "key14": "4tb7QkTRv8VuwnTw7LysW9Tgvs7K2QabLz4UerahefK2UfU4JCLuhrTUAaKZU5EbmW3yZBBsm8P8xHJyT7c54Nmi",
  "key15": "61mLArzMpNHiXxTrKfpKHU25qQJpK8Bg9Jx36AS3jcbm21GRKrUp9Eu2LyhxayZy3fxgNUMoya6oB86uBZ4WZYT3",
  "key16": "5koj9ZwotK9aQZobHQoF7ys357rAtosHQfTqd2fchcMboHYnNJLuitRaCG5WbnJ3pNioZD75n4MCTdvgLx2BCqVM",
  "key17": "2cyLRoSQjaowHhNNvVXgYeQeKNHgyvYakcPsirwG5LLSPH1V9RGYP1sND7BpXYkG6Kd1UTNcvDVXqrKCBJAUmgAE",
  "key18": "2Kv7Xwh1YXXQzyGjQgrDqX7MAtn1HuNwZwg7yv54udNVrXYhVRXAb2JqvPed91Y6dumTV1VHtefJ2WF9Tr1RbjSS",
  "key19": "5y7H9aBzwuc5ZfDDZu4DE4hbVQ9JULT9RShtd1C1mpfzX8Yvq2GUAt5Yua1BA8grsUBdXahZU4kzDoMepWa7xgU",
  "key20": "2VQnSx2rFzXSroz4ukWwX8WQHT1cuV2LBXr1VCAQ4C6DmDHvF1a89zhAmHCmaGMH6XQRLBoPm89Tocux5Y5kx7L3",
  "key21": "2KLqHUMQhkcHxtmNYNgWsBHJNGgSuBZDJYyiAVaJgXEVaY9Y267oc7bh4uzJVbueM79BKEvL9KD8FqYivrVXhYHu",
  "key22": "3dJLcepRgsm4YiVgeNMWgp8qRgZ2BiXFJdn2xiTYmXBzZhizAoY9mzNxM2UH8ord4hZiWzQwZiQhGga2pdTeKuXC",
  "key23": "3vusHGCsEcsugWqf3DYEubnYMu6wmfX1iPYwssqEkpyCeF1LaT3Dfd6Y6dZhexdt8V2ZvWpA7CKthA5aNLv8hESy",
  "key24": "5sUz98FySjCdQAgCFcoxskkmdiBubCddnsAyungLtqtw5TTJh9jVDXyJQfTArTzanjXwdufzFWtfU55rnuNoPxWe"
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
