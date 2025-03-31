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
    "3J3WdnMMR9Zb79SeryJPA9EGGNZKYhFstV6YLpZ42UwRqGAY3HtKZyBhJG5Ch13Hvmenvuz2tgug1X7puiBs4pZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432Z5nCN2drPVheRGJc9sAJsf8wcb6fHCnovg7mg672XwGEkfv98QLQVF8uVmfFdAWN2cGqennc3qdAyPd5JCwMj",
  "key1": "39JtTvhRkXEqZbrAXEJMGY6ZhMJ5txwQoYFXgQpMNv1B5bHREfzzpC8WH2DaRBCd723DBTKqLvGBmq1vptsNASkD",
  "key2": "3FxJAgHPRdTLtjkD9QgvKCuoDnDe7UqJYSr3EPt9KPV3gPK2mnb7mUhnvrvSDE3LkTCmqRJjpL9SThEXnp7mfsC3",
  "key3": "3bfWekpYrVnfSqGjddqrUMao6xC4A1UKxqq7Y3r3ii1MxMqBjVyLncZQthvVmChs2HTx4bFWw16Ex8bNrifwFzVN",
  "key4": "4E6S3Xx1RoV5QKDqZr3Vk5KbX6sK12v4hfjMTTAHtDrnFffd1K9jgAJKCufjjRnST1bcr6uk42MqaJ7ptHUsqCBa",
  "key5": "3JGaGC1TobbUzPFgzS5AGZRVKxDitTN8aXcRCmCnPc5PZvXosF3wjakVJb6k9iHksofMFsynbTHUPPAxRZnzLj4T",
  "key6": "4n1drCXBMYM9jUJjrLZSS5oVu7aRQgd65UwSez7zBL5JNXEQPpjuw1cMEwt3yvzj74ocKP3UhfCsshAgAiUUtWfN",
  "key7": "niAiYonkU7fzfWQvrY3TBn8uqdrmP163Lez4qkiAaWdJJZK3yAogzjaQFR7LiHGbCHYxCuvbHXTj58aibf5gSe9",
  "key8": "2thCdX9dCbjQbrASpxbZK9eKtvyiyoss98La5d1gvvzKJTirQy4vuqbmASav5Pbtf34xzv29FW33L6DH1Av4zL4a",
  "key9": "3Mv8SN8LPZFX6mkuTqUDN6eqTWmVvfmjcZjFWyjCuhYGoD4SD2S3bsmznzUfsQzqepLy9bifD2yHHneKkGC3aawE",
  "key10": "2csLCMhD7KjCryKkYWyv2WAJCVyZg5QtmWmEpfrTDcdhoW8eZaw5zVAxTfxebee1yEaVd1MShtUPLWJNfrM3bER7",
  "key11": "4LPbLZWQ9JeCJh2oCZR85agbnu3BTp5jrnzisQV7h4YiLAiaswEvnzLZ8kxZeXw99Syokk16qEXivQFUe52ewhyr",
  "key12": "4kkP3N4A5XvDspQyzjrJw97yU8yJ63dWphSxM4bNe7Cb1RMRScjpeUHekihF2hNMtqz61Rq2yRZp27rZWrXQfyry",
  "key13": "5sHt2KwEBR8oQLWzHE632Kk65AFVbgKRtCqvdbX27WXGfLtmfpoi2PghSLTzUGDHELqqLzVCxoJk42DMcf2fWFKB",
  "key14": "4hK4fiDAGtxL3Bf4GTnzwK15GRe1Jn4HsDgR7bDjKiviXUbiBupXwVfhNKuFHi6gmuYZLK33gcVjakqfcS7LPbv5",
  "key15": "3RvwPZXsTPEemdTghfv9MyxSP38UXoY3q7JkcB5QG84hRpmpzFsR1XifRCiVmQeEM7WYzQ5MeuGZRfeFsCHAqLuB",
  "key16": "5C9GD8dwTvQivzbMv1pUdcJSJjkR7M9yez9zWFiAKVQe573xb3TSrXQNM1aLSHvVwrh3RiMg7J1zQM7Vkgx4Gsa",
  "key17": "4qZMxJh1DaALBHh1GntPLXD1oPSUDPx4ZjoueyLSPSUCURL5uEycWd6cfjk2DfbYUgX6NbUFrkGJUtCd1waGPLvZ",
  "key18": "NByhhS7wG9Y4a5n5gg7AFsLX4mrRmnnsddkogedSHo1wVWbU54yNUmgRt4xNqD5wfCFT2y636qaGUwkBQcGJY12",
  "key19": "27ex1wNE6f3QJM659AzCHyrGktRpQViDuZPmhunLKswx8T4hgy26dKNvGLdiTXHmaUNwnTUeVtmDA9pmrqE9wHXV",
  "key20": "5EQ2WWtiQ7sMyrB5FCUExXFq9WhPiKXACnAxC8xWwWPs5x3xqDSM6XF6Kvvg7F2mUwSwT4DRQ7SqcZseWo1bCDsm",
  "key21": "2C7vsS4bwFcgXRivr8mfRWUzuzcgaFqvF999HJuiKfZo4TCCGBkWFJsrftSocVoQahyRPC6CEhrXsjKu8k82pAXn",
  "key22": "623wQ8srPg2E4Bx36bRBVUq5YmqEwNyjA4KwVw4W7Vs6XEREhCDqtdNGi3BxxLhGdDE4dycH5WWuaCTzNjzyKuGe",
  "key23": "2pcjK8dhdFEoxM7wV3FERb7FfCwNGz2hNeeJBz8a2M6zkUxbuhxyLQwCaVjEzU3Q2fYPJxxpoDEhApAVfQNk2CfU",
  "key24": "4cB8SANmYS8ZrXbCtvEqqbEpowQ1RkuEoMDBeNVBPbj9Uko9iG6knyMit8nUjVP6B98YrztRj6oy3XzdKC2T5Lp6",
  "key25": "4sNuKym4qtu5n1H6KkhZXd6fNXq3TAXfv2jbrsJVJTj4hgzXUYnLondtC6CGakwzHQKZCDqDZsPj2ba2LDDKXUqo"
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
