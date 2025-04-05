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
    "2wb9DqMWzp3cbQKavrjKCs18qZJm3nKoaRx5TVHh4c5XYmP1FRpytik4mwef2sScUi2oVPo8MCiPuK2fw1E3VNUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWkgqPLQs1Kua8GPGfA6YBa6joNRJvi8v1PHuaRUm6tWaGQisLYow1XvvUgVxLKoMAUGwWDeS51wHQUc2RHFweL",
  "key1": "39qyxchYqCwDWFaV6ZUGiGXzWsZtgDYM9azWYmPzk34Yw8cCJt71D6oxW83jJqk4MoyUTW9wLqCyxc78mZGtKik8",
  "key2": "357Wr5itsCzBMoX81zr6bhvXNuoiYtdrKDuxbKp8AMyZSjVuou1dbZU8dJjzCFJSPNbqMiX9hatoqKFQUgQSiuvu",
  "key3": "J1xPgwehnELdtH7HL922PdCXd1RoJfAuvA2VBVJuzVVs94TJvhgnwxMerjHSJ4sqPnTKrAC2DYDVAJdjqjTbePD",
  "key4": "3MP99SQYM9UqzxgYjDgHVyomJPPS2xKW3nxP5p14E7Vp13AsTmH41DrUvZmj4Ng1NGux8z3a8PvcCwMJGRSoU5si",
  "key5": "2rcAqaEVgNWidzyXf9Uo5AJQGasZu8huA7Tagj2oQQSidobw2bf5N9B8jQoBjrk1kNKZwp1KANKTBEyoGeJcL9dH",
  "key6": "2W1wwHS7KyzAMwhw4ZdSNizSH4Hh34ADsWADGk6Tt9LL1eNNAeLkT3cEyJ4cSjBJdvAWm7RTtRQNSqou714RNYGV",
  "key7": "3MNSYs7kAx38AdWAZ7Fv1Ur1R3h41i4hRF37iL5vuoTd9Rg8LeuKu5mK51oV3sUGuXy7p3ViuGY8zGETJwNsB76R",
  "key8": "wFD623HbiX5uWt2kgvSCgQZKfsaznPKNU7paTHKtcNRnSYbuAQVKtQMayosNNhYDEXTvkStQjDohoJTx7DgbWvJ",
  "key9": "5Y3xQWSAFYNAhxvFJ4CqpjW6n68SeyawDwUxRYn41HoQVeNumQu1iPbY1HkQ2rcxZE6oRQzqSQuxV5RsNwYdcTZm",
  "key10": "4THF87pKJN4iNLA3uFRzjLR65bsAkAQTQo8hNFyTCMuxzWxbv9hKkC5UDrdkNJDpjAzbcNBrDXfr5YzeLRS3qx3q",
  "key11": "4EoVyp3r8fwn787yctJowqo2TffJLWfc6b4njFKUwDMGQoN4Y8WN4kbj52dPdcuV6ZzPSpv73BtzsLtB9BLX4hFg",
  "key12": "4djx5oRFneeriLwSMwunRAkzUUAUpz8TYcx86eT7XQ19PRLqGgaBo5CLzv91J2QCQNudePMziEstED8tndi8EmUt",
  "key13": "5zDJrRRE2PG7mpMZNHoHpCSXXEC8Bdw7uMjeSKQnuDz8p8oQWoakzYpr9eJ7r7PSfTajrR1dp3GBwBT9LaRnNPSs",
  "key14": "2K5jZ9YW452UBh8VaFGnTLcFBHhLeM1LSukCrA63JsbBXnHru2kZfbN2PwbxKENHmfuGPpEz5giuxwkCiKtcS5oi",
  "key15": "2wWjgry7E8McHtrGJrqKjKoRoWMCe8AREWywAENSskpM7y7QKiooppUiwhy5hS5Jak46SWgsySvNMkM16bXbqyDN",
  "key16": "2qqGu55Zqnaqqea9mjHvCmPwfHjV2Nz7bzxQYP5LAydjCSQntoMMkpEa5faJVanB87CRAeninLC3D9ko8bt4JpCq",
  "key17": "3vAxL1rHfLSBdd4DKNpBMCZux1DDjitPR7XkLofGbaK3vainJuMSLXF7DpfXUv6W5zbQsjL63bg5q53KJdgtb9an",
  "key18": "23dP8Vae1FwTyY7VgtF8hfPhvHKU7rLmJvxEAAYeM7BwU8xfbXDZhLyZFHNBJ7BGUEwXmfu9iCmWqK3UJjh2x2Vi",
  "key19": "5LgyRqqqyiUMFQdj9eSSj9njWFbJe3kX86pTCkM3w6UkHB5HBguujGnLRmLBkygun7rx1FaX9jkKmmnjcAE2a5Mo",
  "key20": "2Cp95UhN4Qr9zgat29eDdahJcdvc94wCt9gpt6bxq6Gwox75itx3LizRdg7MZq9CbTjFEPAMqb4breuq4PmiZ7jM",
  "key21": "58W6GHHqsPD6rmz2j2EcakDgRnofotu8sDeoAXE9GGJFZP57BiMfKxyVPBjmh3c6tYvoeDCpzM74urrCYutKLZXZ",
  "key22": "2zC69N8b1CEQpkK65x3F2rAikQEwab6r7YG5zfbpD8UDUfJtFLQrhQqFPBBQiHtPRfdy9aXHAFDmE7u6MUZdBgB",
  "key23": "3wRYB2M2apdSbYAhsCN8k8rweDBTxTdxchZMkh7ctont2eoDWHadt52ydCp22gza7RWZVovoVoGeFJrTHeop8rg8",
  "key24": "4yqotKC9CgoTBKbphQMbAqsSQoEiNoeSoTE8MVXAchAo98D2ZYhUqpRBReFgkXYHGyrSTcpihREBo42WuEnnWxpz",
  "key25": "4w7h4c1awjh5ktDyQpHcjPDoHvtBx4pPj8yvFod8jvY7GEjjbzh6NeLx7hwFCs1pYSGvXpHHaUkQPrptgyY3wfJw",
  "key26": "2XuxZ66qXgTfamD72MjooCR9TfNFbqNB6reb8Wne7XQUoDgWGcXyoYymUXqSvRfCvSVgM7RaMMUBB8rNcwHAweyR"
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
