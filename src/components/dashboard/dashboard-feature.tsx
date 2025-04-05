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
    "2oU8Uo8GsSg4p8r1qtpCBoTn1hULcyDvaBVmtTj5B266eu36GkCarB7Q6F4DMijKdUqQLTG34f24t1nBxC6y72wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTJBuUYXq3wRF1Q29XwiannioFDEub69fAWyomTg7nP3mkc2h2RtDxnqAPsmQLAkq6Gsk2AjTVeUbuZia9rXz1f",
  "key1": "2BjbU5ehJuu5XgmWFCWBFZeJi7797QUJUHBto3hLG12a4xwxFspz5tWf6c37nzQe8S6vjpDpF9TnR4mxtHbiFSBv",
  "key2": "38Jj9A5pF4Key1K3jfv1QZFL6rrVad62BTK73VTB9dUyR8AkPQBmtjeLyXcu2uAyxWYTf74DWQn2ebfKPbgHb33A",
  "key3": "4hRWBCq9CdwNxMnjeaiE17Hwy2TNzFjFYkzwwyUgfJLGtMpdL3dYe1KYwUEWQNzGaviER8KtQUXKi1n4KUp6SGQr",
  "key4": "4v3PEJYoGBrrapG1VJiU8PdbjssDRm2dT9ygdBhbHGJ4vSwsf5915vb5BFVNQBWD1NeYgxDHTzgTbpDibDcvt6W5",
  "key5": "3A3PotM3kFqmXuipdTBNmwtwiB8PzDrufdwCQVT6U629BzhXGATcYzybW9SQL3C98JidK8NdgwmmnFTG9trg3bik",
  "key6": "5RWBA7rQfWCT9nn4oiG4HioiC1nhfH7QaFoNaUgLqvyzUyGAvbxokaoqbqzRsL2TvjbCnwB4xF5oYYPuQamWJTdB",
  "key7": "hDWKpZ5G69Dnjftp4o6NHe2Fa8EXej232rJQyv3HFx4N2Tatm9RhYM3oaC6BRYJqvPEwZ88S3VrwggidsTKdtPG",
  "key8": "3UqGFCgmkAHCzxDZMXo1Cz12qKdQLS5HVGHFqrvm3W9wg6dsr9fz736zwspAznWiNaxfUbNZEudQR24tnPwZNwN1",
  "key9": "2wmBfyWDfSf62r9fRAmKvAW9x6DwEqBvqUECvaghD13ob9oXLEkWg6hJEe7MqBDHTP8DcEuN6GzvyBmfim1c8zLV",
  "key10": "5tScea8y9FTvj8X9DxHHTadSaNVvHssAS6Dq1tfFdLZaATwYvbdiJy7iJG7mphkm9sy2JtpqQiu4Wqrb7pSUQxXK",
  "key11": "3tBGXMWdYXQHn7hH142n72YB5UaXpkrVsxyCeMGjm9DNQVPkh5GRWYiRaojqwJp8TeqDs2GvaW8U5qy839mR5nm8",
  "key12": "fGX5cQqkrSuHn27bsfmBR1oCNrKhmXb2Bi79ZxGcJwhd6EzKEQsqmyVff4pY63H1KDR4xctCZJnKwVRaA2QdBUJ",
  "key13": "4R7YLgL2tfFJZk6Hu9Xo1TbwW9neZaXmvqgaBQ7mtG7DjAZ5N589W5Gecn7r9UzGoTf5DCJ6pAxf9dJuUArLVP5F",
  "key14": "5hi3S53YeNAYspXyw5HgF2Y4T4sJSdbnRtsK9TMJjNR1Zh2TvcxhXMToPRhWXi7Xjwz9GRpFoQ4vNLbnBfnCBjNC",
  "key15": "5A7vU5juenhgUox9fXu3QoUMgPARvajLmkrRZbDkbuS2SXTtYtUXTjHzqSnSaiJBXDjEegPvWEtbgFab6VmavrEK",
  "key16": "3pw1NDbwgveLi2McpA26ma17EVXaN5qhLL8CXvNw3jXgtTQzNfCPmQ46nZMzWdaoRJYvYP8bndBZGEkMd7oLVij1",
  "key17": "RpEuacTgxTNgL2rmE4oBtV8jbw5LZpBg8CX6GbYLQFr7jUEN8e3PgFDdYBJD7EQTvJhGZP87GVJGg5HV7o3LVAU",
  "key18": "2FibQxm6Wzv1q6szg5NftqXx113dEP3c4W4XCn163K5EiybDRY6qtUoWWdTxTxGnHQR9ENTccLHHSrLiRAMn69z5",
  "key19": "4tdWgf3K9HpQJEWWWxMeeJPhWUyD29fRnAfhU5CyQUzy5r157ph8vZLTBC1bDcXnsWAf4CzsPEJc8t1EkRHg7BeR",
  "key20": "5f9R9uE4kMcktfu9wTsVncgEncxPigVS5SRX1eCXTq9TKLvLPivPMhVczbzbRq5Ds4Dj2eKQZP2sqf7qdAAAxnA3",
  "key21": "3CwmEwn2TvmejhtkLpi7FYbRzVh9UF2r7MivKRyYw1LvhkCLYss69coBy1uEeS2eFfGdj4T6JG75ZKm8YfGfefUz",
  "key22": "5WSoxx4bEo3gtKAHmXWxDVczBEPgHCok91KDps7hfesQ6nmawZhVQnjuhUy1NeCPEuAUohn1D3XN2CBvjzH99ukp",
  "key23": "2uZPbk99pGpue1XRvF95Txg45t4RiHAi8eUWk949sujJ9Pmf6hKaGD29GqHTaajBePpMy4LtTzkTygAuHMQhj7VT",
  "key24": "4sXY6QhHfN5wmnNJLqxTEU4YV5baAh5YCwt3eZhsPnzL5qwK85TvuqhNUtJ2XpDTRX5HqEt2RApn4yV6Rg2gp7RL",
  "key25": "5ec8MdWx2QsftMPBuExKfRmEgn7Kexti2KcDQhWqW3PYpc9CWvkFGdqbzgjeWpEApz7SwKHJTMnoqaeBQgFCXMbq"
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
