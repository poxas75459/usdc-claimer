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
    "2BfYQuMMZ61X44wA5kS1VgYn2sJtmMeFBprYH2WqnGWvq5UjehLgoqNHBuxvo88jsssW37tosGqkYBnu4hvA9QRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJKxYuJVwUqdhLuTtJXVrKVnUKmLhdkDEn6jz8u5JB4dKamAzGXQRKfrtT5vJ5hXfdNDGbNEKPMCMF4FD5qry2A",
  "key1": "R9wZe2vNoVDZxVXDmw5akT2vFVJAEjBaqhmJRZkDficn7uRaUfGyrsMXdfnXanpx4Fa7zCx1KAv7Pmqfx2pNdjF",
  "key2": "yM42ts7bnQ2Ey9MivMbD346rEjgp9BvfS1LRzAqya9KhwP6ccnFcp1shcnPT9Ky97RPwRE5cKNhXANYpGzRRTkk",
  "key3": "4sCqQEjoRP7DnepSHVxk5m6sScYW71iVxbQmz9dVJVRByLJEDootJMbKXAm8PuoDvMWFJKSBuE351KrSGCeJiZL6",
  "key4": "4KeKAdGFaHQTXn4njnABREQeSyNo1FndfZSQvo54uayBSt73qw3JqEbtTZ89YNdRjv8Jsif9RcoSC8gvnh9MX1zk",
  "key5": "3rjinEsto3aScocnj94V1oNgfXeCfDMi9AVbN4RY1Eid9zw4GG6bXMCn7EVeBTu5x8QP2L3NbCxJM6rXBNjz6kJF",
  "key6": "2AEeV2p7QHbDxfHYFn3GhjqYZsyMBaBB4hrM3XAEtev3PDU7ZJHPjpuSJzzd6oEbtF53iHsbZvz4UYmWyLYcd4CJ",
  "key7": "4asoBigDB3dUarmHwhuogWwpChoCJADFB4tHnF44PN3578HXNFL3FKyxSPgcNspkJCmUbPJLNMqcYai2WGrLvEkq",
  "key8": "5naAwA7xevmKuB2kWbUXrgSSCYk3M3WYCiBJMSskV79r2BfkVQtdd9kLkzo7yMpgoRfpCM79TWzWKu76tA6X5srk",
  "key9": "5fjtd2jfJnJdese8kNwJKqXvZVdiAEu8a4EDyHnoxY8uWu6i62t2FLumcdRWrPnCEX3fee6SssLjnqnuSM6dT2Xq",
  "key10": "5ciuBfqj5529qye1ihuNZ3x3MTMg3CakCqibzjwdP413jNv1kxhz49PQkepJc2MZzoPGVarsVBhaRjiNMZa3RHiR",
  "key11": "37wwQS4BWsJ3zvSuPkc9D5CA5Vey6jAuxnSjrpbptaWAoF8rD6vPYtoP3EnBSJGxRdoKD7ajHBL7wjAu26andV3X",
  "key12": "FS5cGWBLyJznGPPnXkVkrssQcSuWuuwEg7R4Tk1fhLcNzvKMWoaPgDJxZsfM6UsX3cTbWfhrwYx93gz9HhJx6cm",
  "key13": "65xLBeFWDH9LZPYxXTpUKLzr8TtFAqdCWNwo4voqPB1gm7hnSYDqAMF6cXnWJy9rfd1dr8RtCB4Eni6AxNwbN7fH",
  "key14": "3gjDLqDsn8yAWschzDurdCaoDkRyZ5LtuwmraZ5zfkuAkMnwhi8rtQ5keqqGYj5U8xJZMC4vcG68JRgUk5DuAwxJ",
  "key15": "4SXRLJXoxEAkFRjxbTXW34ioYDrbPH7VZfLrQTgArtCn9LYtShTzJvSjUEbz9axYRowhSsHkqUDX1Stu9hHDqWwn",
  "key16": "3RTMPrxM8JY5oNDktfsyVPjW5dDFawkAT8B1xbQM5g8nkaEHsMb4bhrnfpcgVyCnSkADtNcL6tTjhZLjSkAjLqgU",
  "key17": "enDyWMhsoDdeuhTZ7tPiuEPq27zbAgsMK2sSRSxYESL8ugwT5UExm34eegd68pFEyue4Cxxj7fCCaJaGoZc3UnD",
  "key18": "2q3TPZpCaUdbC6AL99TUtiR92E2NJd2rhsCXApqP5QdyAmmf4hgmpkiycQWFyaeJ4qjMrfKqLMTUfYmT2Wev4aQx",
  "key19": "4J7v8vfFGMGxNWJEhGgWVQYw91rgsA9eAie5KkrUg8wxhQvZ3hZ78nmR1JC9NB37kMizHvdRvsqPphYeb6njTwhX",
  "key20": "49HgFhCoNPtskRZZQhsF1twG6SxfZEPwk3jbAsQW68TuR3QUq9kgazAFpV3F1sD3EHu25X1AsHkuibmErViDgah3",
  "key21": "4J5yTe9rLqLtnxoiQ8xSYtCts2NyaF7pA3GvvRRz9kbfGVpGiXERpZBoXHNyqA9ByZSUELW6Y3joPWeqVVAeUYcB",
  "key22": "4FEmfMASLrBmVdQvAckSH79hvdok4a4jKfcjXzvKzsHD7ABAbXQV88us4AcHpQMk5fMXvgDKMEqQnBw371tT96v3",
  "key23": "sNHa2VyxpqF6EknwLsbZADFKMDcJKx1PFzFUh63nUNa5ZhCzjHK2ZqMnpu5FwkFWzE7vU5K1QymcGVR9vxgdWYg",
  "key24": "2RmBu9V7ss6i76DSJucoAtGfXA4RFwsJyB2mhf68rGJe5RakPU6cqhnpy5aoY6oeHi6yceLcn3XG59WhYMT9e1vG",
  "key25": "5W8mD9yRrCKcebJYC2RjH6mszRBqX2utVQRDqqtfex59bPD1cRpUrXh7rh3y7ZQBD7tCfxBpXM9GqZz3eHAthiWN",
  "key26": "5skiWESKCXJXYEBkEZTRBdU3WPEPKTqCRgawLyLnoA8xrwsLkfVqsZ9Dt6e6i5nfttrEnZXPjVqJ2KjNo86jX36Q",
  "key27": "2GrrJeFr8T7kbo4huHmVX4ZVwCNHsPo2UGgWAcvsngS9rEbtCHu9hJ9BtBgni1AbqocXDm2FYyKzGce756pjjNrz",
  "key28": "bs1gc5KA6mrfPBcV93gDYoVcYpZ5BjusNxBZZUkPYoG4UcW9cgxZvWm9fcewJwRKi9yonawMHnQSrNfKKN5LwDR",
  "key29": "5YbtUhWL5RHP7NfJ6hKD9kNonyju3NV1K514pGDkXmABmM78igK5mV4m7NFj5xbuZ2mKSnRwAJEs16bC5v4qhUXY",
  "key30": "3WavXUtSSLeD2iJbgqQ3zxCk6tWCDS2Q1Q7YXf4D5KB17BPxgZkusatFPu7aLTa4ZPvLi1eTysKgLuXFDNmNAzxm",
  "key31": "4bGkedHAHzKyeqb4aCVtHTK6roQHH2xLxSkF2VxPkicwWxhKTuKR8WEmp8HrHPFNqsAbuaihuaNf3ZUhFUm5G6y",
  "key32": "58N8nFiTu9YXsWQBpRTcGpMh6Xz8jy2jfBP7jpER4TsZx27mDDqJQBYWJiLXddVLYkNgkt7DwUEBgAahiS3X6H31"
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
