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
    "ZmR815u9uft4myi23NW6QMurYYb8ZJyPWDrAsVy1dVcC2iNFaxQ2c2ZrjabW3ggkAFXsFoSk1djkMCQVpBcKyTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uhhume4p1CiNU8jBs1aUUBnz6ATdc4pLhsTaTJfHxXoEBhV6isR6AJQTJorcJbetTLj7vKdbSHnRQGPBdpwPu2x",
  "key1": "4Sh3SUWKr5MYzfzW1Upfd82dA3No54hUee5k3gbcjrJT5vywoL9dMYp1wAs8z4xPSvWgbgZpVbLPMSpzqpaBj8iZ",
  "key2": "5jbXjmvzZNu4MtSfrVD7ooExUguS6HHnkJgXB8TxgsZJBWdnpqM1ABDaLBX8GuaKYbQrGYjhurWBtiZcHkFX6ooN",
  "key3": "46HmpzK9q1ZgUVVaSfgEsNdq1K2pUsTErpt9vCc14rJLPtrDLFUUqZmmsS75bR3rhdh6zuHPiDmuCHTCFUKEiLDn",
  "key4": "FTAME9VhTwTaZ5kyZmLNYYDpipARvo4unqAUs93vf4i54WEcpYSKEoBdN1i3nv8NLRyUEtidEuCzWSkp8SRf952",
  "key5": "uaEhto3PtiontXPKCA2HnJNy9G3PBiaY8GkgNoXSvdYp2f3nzBeMMsWhfa3W9SsnYm1LX5a92hNWKBMCqPwZZf1",
  "key6": "4Lf4wGsPJD5aYEs7mqDkCJd7BC35FxoVKCJHfpNYu8MiTdGmVehvYNR9SJe8yKbJBCjS7oWe2N1bgNxmbj9rqcoY",
  "key7": "51ED4apRLkdYh5VAD8BF24PRNPjRPkKs9QJzhWQNR9UK8pefQPRQ2rPAn25ojWAwQ7UJoit1TzuZaJXwEeb4zma8",
  "key8": "61naGFdWSHMjNqTiAmyzfSQz6MhjexszPGmJcPxot3E1azi314BcLQBVwWpxVn2hz7PEM7WAprtzrsjWmprSLHCa",
  "key9": "4BMJ4DKRFY9kqu5ZFbULjm95snuNubgQpGd7KPETgsH34uhZLzSEt6GAoH7Wfw1Rez6gjG6wtPgkvjcFHXCvGzMK",
  "key10": "2qdqmZgz4yBjjKUaAYGPwe4FKaVzUx5qNzoGPqS9ecNHSAzkcAnk4w9yvpj4KxMLNT2tmnoUNoCy5GCnuWQxmS2V",
  "key11": "4KEkFgBVpEgtrzVHXR3cJb1y1DyvuCfbNXND7wGXkL6GhJpXWRGjnffQeCrhRkMsET5V4acezn4AfjATfs6XZ28T",
  "key12": "4rEyN2myvNei1nvf3KqT4k9Q2BuVqTykFnnhxYhALKH5EbM8Z7YLxjXWUMtCPWPHYisdnccKWuJMK5K9pxJrgDgh",
  "key13": "2XkexoPzRKuLekYW3zpqJpMzsP9Urd15BH4EY6mdrTzxqTxA1SUgENiGwdufqjEW2diz14ZixCzLhsRdW79Hw5iP",
  "key14": "3rw6doBmUdiA7YQCiBXyoH67kWwAc7q6s8GD93SmqAwTqHUTU7xFaTpQHHqFPh7BxoMzCRaGhHXJfYzGaBqmmCAL",
  "key15": "5AfbBhvpTGTn6dZzpTQQ9zQPjH29Gb5AoB8ddje4LUr1t2EsBa1oCLj1cNwj4f5UKMux7woPJRV8qEUVu5PXgSx7",
  "key16": "jMewj1dQ3t3YkiM8dU6rSRmgMWyezoXLiqSNhgG8PiHxChbMdEGHgCtnBnbh7Gjv6mAJQJf4NGFUuNmF8BrCdzw",
  "key17": "5tguVtzUteW2b1dj7Ej5fxmKrD3Hwo2vwGRdxqPZYDrRG1C9gDUgKHGgn8e2xzixjmMcA9h6Ho4WUJQysVxvZ811",
  "key18": "4iwvMy9F4KSCDU1MBY7ZVnz99NDJqycztVn9KRsm2NaRFoZFesgVVGerMVd5PyMD5L2okJ1AcbgDwFCP2XRcaBAw",
  "key19": "3KpdDVkBxbDc6jRSU9hnNpLwpEGVoBB3PPspbKoXQZGWydrauENa9YKXcxvvz3arzLjcBrttWMc6LXLTUd9VmnLi",
  "key20": "qkJpEWbhaGhxfSiBkThCxsYsW99sffoWddhG7bTiztM536dBU5g3PEzZhaqyZUqBsdH3L8QqeazgsDmqMseHT18",
  "key21": "3TphN4rV6MMvQYeAhCNi4fbmAT6BH6mjeFXtwBKwje7pArCKqagf8wybEZ9MRr2rKoJrR86BcwSjgXsjFwvZdKXS",
  "key22": "2DegmeN3Z8PN5WDJX6CF5PYNX5aXKh4DxrxtcxQaNSJX2ygX3oZxJUiwEjc3HpVo9py5NCMVKRQ6nTX6R7GUo94n",
  "key23": "5YRNhJs3gkyD9eywiMfGPe3NvirxKurKvd2t65onzprjy1HosWnx8Jpu1nQmW5hcidjMgNB3ZzhiAfMBGqnX8GZm",
  "key24": "JewJeXezEhSxx6EPjAh3a3nnfijoB1ABfkn4WDG75N6Qi7SC4H1eNN9unLgt2JFkdr8hnVreTgizXZxWESzu4ab",
  "key25": "aXddwLD8hTRxCpQXjxGJ4aZBCbZbZwE22xwkCjRCdVRtTVmr5sUuYqPGamDWSHaBGZ5Bra79oSLvaF9HwiLJE3Q",
  "key26": "5VPMaoGQWMmDFGDWUw9DCCGSmWU3AP3W3PJ9S4xJCez2NQG4RDcoKKJjHZGRYtNxuBNz7dDtkXXarR4SepLit9Y8"
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
