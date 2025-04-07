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
    "3kWctMDqwJor2DpFnYyJQTcKg6wiPeETpFVbymVB37PVguyUJDLuJuXHY3rXpVYjx9vP6cXGDHUW7KcHBGjggVtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MWyDZqoTLgzFeTYEgS2K7jk7tJpXmUz5e41UtDkFjDpFmh5kyq85CiL8o9j8ybduKQaSBR8Mg9joGVycv1zWV9",
  "key1": "3GqQ3fRgHhUHXVfMEqX1zkyXqCp3xQrxWmr79TZCzmtM4PLgC3WsosvkAzciCG4yrtYdnwtpmk75rE9KGY2nhXX2",
  "key2": "52Um1Fs54hf91Co9Cc69j1H2FyWzdYKQhcTZxYUwK1N2DEdVkMFwAjLTTPVivM34xj34AsR3kNzyvaYg8HCFgXP3",
  "key3": "3A19sAh7hBFJyPwQUaQtMWmZSjeiUYtp6fp7Xgim612SX2Kw9UsmhsXQwLDKiEyfadh5g3eqv4ZVzdfDvhJNpBw9",
  "key4": "2oft6ipt35GBCi3fCfysdhit55VLW62Kyjq7EE8XDdJQMrGVWRqswxvApVaNmAbjddf8JaYeftQxrWAp7FyKM5zM",
  "key5": "2uzfK5143oonYfeoYDcd44by6MKCeJMpttTZSm8wHYjMrZzFhU6hyq6EMQaYFz2xxkJ7Nn2V3HebHVVKsE5UdAdH",
  "key6": "4vjy34wxRDiNk8A41GgUBXc75TFPbFirBTHVAANQgowynEd7wEaALrGgF56Fgemd9n6PATziDRFsP2U51i9jedsc",
  "key7": "V6fhUBW1JjhJpUAj9duMLcKZNRnxeKj8hXpyeCbkSxcB8uKn6zDV8xfWaf4hzfPNpSr5BaHrf977fPnYvoNt9VH",
  "key8": "4obG6xE8aHB5uKUpU3bpMqfPqfcx2ak2kVAa8DQkUWpqavBYXXGuxEyK7K5ihQDkPzvNaNpVPp9fS5t5Y4dADiyp",
  "key9": "4prBWiQjdZsCAkpicWQMfpgZ6UC82cJ1E6YKBZhoGGYvaLbq6UW1DZWKQs43PzCBdZPfDop98xvR1mf97XZXb8KB",
  "key10": "3C9QkubjE7Pok64HxLMzxWMv3rWb7PovCH53Eh1GLExoDYqQi3TyKMh9KPBcZvEPkDXqoccoEvgYaMLhMy2JAxkk",
  "key11": "SSkVxZ55z2gJ4teH5c3MwCZeDLbaGh9Zmm92oAZMM3W65SHyJU26vjZpu48VGPR7YE4yEGnoCW1ncx7T6nyvjan",
  "key12": "2AYe8Ay5jCMCqupVHS39LeQqx5NRVqFQP5JfacKEwYVStkbXoju7uVwXRk7tVVZVW4uJR36354tYSMg1hUnqEiQ6",
  "key13": "bRr5KkxVVj3ej4V9VbpfPorQGSND1KTgro4FcaKNkCr1nqovuHaBSBtkXV8jJy7duG9GHzkxNMVKjaxfgJtN8sN",
  "key14": "4fhR2dw7a9NhmwrUPsDFGUBQAdK95LX3RfAwT8XkrnKQLdd7LWjUBjkJcKW72D2ov31mYzVmaF8q2K9VB9nB6RpC",
  "key15": "41VwvT5DupM2Q4PSmjW1UosYKAwKnDS14zkceYWkfkK1eftqRqCXNcNTrhT3B8XP1MDZ8ghNpf5JHgzQxhdBVqtj",
  "key16": "3hbuwRBtLdvD8R4bFAc9KV8hDyXrPn7CBSvCNJy6r4kzh7BBR42wTkBYM93GSifEhYGLWuVASwSKWwKhdqxBhffQ",
  "key17": "5xoHUH4QeDNdWGZabSMoyZtd1eAYBmTBWDci9yCXF6xxxxLKW7FB9CmHN6wtRgCbeDnm3mMZdrFdq476KRUCfm5H",
  "key18": "V2XaGw2jWSdrx2EfkCUF4Tv5Vj9g72XM7TZBmZa2GKRd4quD3TrKYCMfGDezBrjviLcUwFV2QEjo6NC2T8hqW6B",
  "key19": "3Ai2wTdux34kiEFkiV4E3H3xhDjLtXc5jvQCuCw6eKksWyNoLrupfH8RhCTkM42TocVe3q81gF6sRiJfh64NafRE",
  "key20": "3cfZr1eBz7RZVCJVzQ6RuMzbqLD1prbNPnYLwJtVtYtLguDrVQo4X43fgWyVgN1CjrPjsQpDV6BhP24uRdpeGtUe",
  "key21": "4aezmrUe5C2U18CXEVs52T9UHEdUaAWyVeEGz1S1oYnJ3cNWQE13TxeNMBfWaBKUnXQDD1xQZ5mwy9xZ9mPpKA8F",
  "key22": "itF97BGh4bFtsMjmnoAkmUZtPj6MwZisCD5sbdbB8c1SE4jW45RRFbFyjTuLJebkoeYNMCAa5wcidgar1gy6f3p",
  "key23": "Bxa7EsvyasfMP32RuMyDmJ573Sgg28k6GqRLksbdB5uJU17K8ZFPTv4dBAkXNsorRkQSvd7LPrxH88hPLyqSnvf",
  "key24": "2k5MBqgAeENVuRDjkA2nnaDy6Vm4XLetz5Dkz2S9ipHHfmRGQrUBN31tCwwbwBh2CnRYYxxQSz55o848phXv8haC",
  "key25": "4oKQaspSYqyzrw4SA5Xu1pbegAMmtF6RLn22Qn6YF1ZF738gch1GuaN4bdbxv99utLrEijHQadL4vk5UCmzmGdUb",
  "key26": "5krW78nfYf4xquMfiVTAqkPZLRxLEERiRWCsq3ct58ZYVYwbM3UtThwmZJgvGTNAtkkpcFRo2mCTQVCfuH4cLAd3",
  "key27": "5atpkogynBJFHMq7AN81GKL1kfUHwdhZ6jymL4ydbvPnizKrakw92eSNvBLwax8VNwanDH2pZta6pckJ6Xiv9kRZ",
  "key28": "41UHgEtx8DZUEZSvjWqa8um7k1C4cTrj7WayBeJvbL8n2D32GrFcF34nRzRWWbJWqS46PjzBxNrisySr22w7q2U8",
  "key29": "LiG7tJjLgFJLergE19ujSuMhGHYY5mNcZCQn343aMsvFWP2TXoCpwbmEuFoWqPFcr86HoJFpz25ZvSFaxSU3MSc",
  "key30": "4XRVX14ztgX3eDTyR8Xmz9R6CJEHbig6bxJRFKzvjxecPxEv5h4ZydH4s2eT8o7SR74dwVNCPLgYN3F3s49XMYUC",
  "key31": "3AHSkGzDeq9QFux9QBSMwxE9dFbc4hx1SresyE1iMg3q5EjbHcVtZR9xPrkLJffj9PrCjRUniFsw7nhznnsGiiwF",
  "key32": "fftMjUsGneiXAdqRU8x3UYiyA1uNYGH66Rv3n3M2epxhHyHoBBQRFGk6uJFEzuTYZtoYtn6AXTRdbE14xJATFfP",
  "key33": "2BvLK7dczWxSHPajYuVbdsSeXki5rQNGLLvAUncS7NeScEDnZ5ed4TJQeYDyzupeB3iEp7DSkDo3ycyNTn3G2c9h",
  "key34": "3EuN8euwSYxnj2i1DHbmduNNg2dWh25ZFixDv3ShEaBDoKz6jnoKp4Nbw7UScSNM6yagjbtcZW5zFa1aiBwuA8Tv",
  "key35": "27SnEtaDAZYBpPzhJLDpEMe1YPVFrAfZzwNxdvnW9mND3refV7rhq2WWe3LuMmeB9cdSuUKTPXKVricbMnTHDXak",
  "key36": "4Vbhm5hGphJkiaEmxGVerduZ35MPcfJMvenDVNPJeekiM4Y4NdoCqXpWmzQgMbFsH46zPY8yD54j8SchVvY5JSKX",
  "key37": "32ThtDpRtafe7Abpiazp4Mpxs1DgA3PhJURrdDc5usz1cPKP2kmNYG2tyJREomBZFHVUdxapeM4LYyXy1z4Yvzuo",
  "key38": "3m8gp5p1wDSP4cvbTqm4DgVGZE77xufjWY3Sp8rGuj8L8S8qswYddTWBLfLCUxSWyV83ot8ZprMNJrY4kgTUfEfp",
  "key39": "44q6zaG6ba6mEGfCUjVQhPxstFRBTTqhDAueeDWtwmo9sJysseW81Tttb1J2N56tToT87C1cu1q17KG6TCnjyR23",
  "key40": "3BrTip5FXoXEyCP6dLuBDSyjEHGamCFreDW3r3kjttZpo9ZbJcokJqoiejpWyevA2mq3xckcKGLzTibYDVTFs5mv",
  "key41": "2fZ7uRNwKqUhpU7bPYadBqyenSuj7zJMQPjoqNpMVJBzsy1HbWyn7JCHpEEo4zEtyax4h4G1czKbEkKTWtyogSu3",
  "key42": "3SmeuqbpJPFmo4vgQK7UMYphyTVDz3RnMEjuyTZHnE9tKZYWYM6V4dvuEB84oMyEY8NzecXop3zr4aKa5ZGi4MgC",
  "key43": "PdPJwU8gZQo2jB2nVWKEzZDpH7zthERK7rnNm4AmC1iDogAzkWadFhkH6nV3gG7LJyHtqQ6zETP6woJ4QBVZL1j"
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
