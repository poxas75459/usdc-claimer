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
    "9AvAioYsAwuRiUf86vQbkVmC8bBS1i16opnFvYSVMMcMaxJYvMSWQ5q6MyjRUgW2gWigg4r9jS7hSzxHWRvdKD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGSsk9yccE2eBxaEW7PoEdBtX2VaYbVQBdP1bsYV7GB2oHaQDKKS1Zjwsm3vhhXpmyxx29CZGnRUwGKzwTEq9cx",
  "key1": "4DAgC3wD8Xjceb1LP3p7E3uZaURRLid7WrEi4m437qkpTSxCS63231EgRxQHKSJEkpdZNCT5D17F3JCP4eeNkQWp",
  "key2": "5FUmucxyEbFV9Q6C7wvB9TToo4MVoknjbJ64xhbL9ab5XYyJeHtbLhYaLQvZXrqKMWtdquWsSSYfvLdkY8GgvvNq",
  "key3": "giXsbwAijkrc3r2QH1vm4AueEexGJouCn9o3Luc4yPgJthBUWVDJ6rCSMGrRV8ceuhEDFdFoCcjTFFfyUbtE2Xk",
  "key4": "5PjLKJQmV4CPAPHhGYwkExKj6uDvhhnTuhgfXZ8Aor4Dbodz3FZVwpHGXLhFc9AcVA5Hcy7pj6UKnLRWNxCjFXDh",
  "key5": "3XLjqxsconbzfNMb1QnpQCeYKtzLDpmRLra8Uh3gCf1Cvm956S8dA2ivUPWNiyLRMcXPn1pHCykioUn41qdRZ5rY",
  "key6": "3sSxWMqMK1eT3iH84LSoL6HLZouZjDvQgVVLLYYySWbjrUJBcCXXD18znAdP3nyTuykDT9BAM5yqFTDJTd72bo4m",
  "key7": "4PdK4zN3bToA48pvwP2WV6ro9Gjizbo4BVTfvoeg4CCLyGHirzXAWBGjej91xP2LKrvKsZxaSqJ2QvJja4E1xM23",
  "key8": "2LV9kW2YE3k39wKFF1MiDgRFWPdJbiKgPnBsLpw1LbiTTwosbqW3vaZDPcA12ZARnfTXF26dmHzWpaXaccXLBHPm",
  "key9": "2xanDYBSVNexypGm4LH3q6wPqFTvtwDNaEGEPEDTMq5tp5C5zzNsde9ajQswYMhTEuDSp2Vk9gyD8F4JE154zahf",
  "key10": "4YgsZkikcm9n3WBdjvcKCEeSTsdmVRDH99JNMZz44mAB4e9FNYzK5jZkdBs47i6wrFm4JiuWBYVvmviD3PzP42pk",
  "key11": "5icvwh4F3cRAmi8EvrYBKVUG8wMdHHaDrwbaqvSQTqMsngHaFxTKPCpMZB5eVpkAPAvTjiqbhWRiobM1EEbNhPQt",
  "key12": "2tokekNhbHjqjqctuqPErTPwQLtgbjFBepMdvqmB8y94paxPkreTKyhicHPjAuiZZNapFo1RC8Z5HBapLr8sNfZn",
  "key13": "WkiJU4Arqxp3NextaZomBdLZVDpHCsVLPppVZrxf16cgTjkhMyrEpXXFRw88dyUeeZ8grJeDQccWeaD4xsQ7E61",
  "key14": "5qXNJYG7vwKpWgQMTNtg8Wirw8rsPf9nxCB6wfZanppybE6NYfGmVg6Y6PdQ3zHt8HvVz1ziHpmFDNEyBHfLXN3s",
  "key15": "61BKG7S3bscEJB3j2mWtJoyGu9QxxD6STnJXoahYGgVAY68sNEyZAyd2bQXMVfHMy3TQaVJNJ6nfPavyzD6Cd2TP",
  "key16": "4HfMYb6FKnsyGyCTQMjYsM3SEw13578qLGqkjhEq4NoWijdUfEyUe3Eqww8XrXY3cmfAaimPLxWUzPHdFfbuvWN",
  "key17": "2KqPv1J5HwJdi8ib6mszU8CeroGNFbkmUmyNngJRtQCTXWtQ9hQWoGGj9NYHiKMrsCjDZ7Pby9i6CrfgXKnUr9Jj",
  "key18": "4NKSJyhvEXSZ9XrmAt31kGGFSDg1CPsV3GRt2m4TmP3ZTDRCd1dw1Sk1KgoMpKCACvTPdKUfVhh72iBCsGZ199U",
  "key19": "59uYtoFaNd5xmDeC3NM4Qk3NetfKZTQZddmgiMQTYGPyiY8o3RhTB2NaY3xCoCRgTqMFSdtYKLAjk6aRFkXFjpyb",
  "key20": "3HrvusLe4ph5XcYWpbYLjg4UTqkWXnWT2xDfEsKmnt89ieXVjz7WGU9jdXSJNXGZqS8NQHrwaUfKCuVqWeEj66hV",
  "key21": "5oZsgun26eiBWUgLZkpkFdH6xqEAnzCsdHe2y7YtfxZ5aycxpVAoUqiMjnidqkUP3KneYG9qKCoUYRRZQ5xmZJC7",
  "key22": "4swGcxcDq9tvbkXdZmeX3f5hknxTLbm3heESg6H6tcHQBQ3QJ4eTf9d2eHx1SHqcKGHKGfxwdmV6rSNs9s4sV2gK",
  "key23": "29mzM47x5j5e5jc6HbJnsvpNt2ajmQEDPfZGkBzAqCAQkpXcao74shDnyLPLHy9RvzH6pEWZatvkfsofrWgYkK26",
  "key24": "kKpTCS1vptEtNZ5UrmEstNieU6Py5orb9DqUsP2xM77119i314TSeMuLjxJ3CkYcEsX5cx3Y6uD1m6ekTgmhUvd",
  "key25": "3PpEqpRX9ZnMGrYRLEmipfTx6PcKmT1WcgJxUBnMLSLiTVfGs8eYLQsYa7fsTVUYEaNjSDGw7kd1L3R65qbSLap5",
  "key26": "2mNHS27bop3xomwDYPWpFxQv8kpK41BbCtWTxya2RttaWQJzhmVxxjpd3pmWswfhJzjYPDVTcvrgLYAzPgMGoK37",
  "key27": "3mwEXEfHyVVL6VD4ya6cEfy3teqJiw8at63Jo8Gg5skduyPo7Qd66oC7KrBpeayarj21xeWWsGDGRzRNWCVuWkfE",
  "key28": "3EqJd4aahAjgxCCXmNjaigsDMgdCLwK556Vg4HNDgcjmA3XeGrAADqmZ9sPTJAnGUErBaEND1Bqv9AisSwjPHn6n",
  "key29": "3PGZihY8YaZrJ7d1ZAvPputDesXmVkrh2AzR1yddp3re8nBsFUKoj616K7XwayMb9pRG4emZV1ax5FX1LZVgz62u",
  "key30": "48cPSmNN8JLzknDTA6PSTi94Aer94SGJprktfSwx1rSAJdDm2sG2yRQyH48ppNwKiorys7AdZ65gk574xTaqqD36",
  "key31": "2a6XRkMrx957GfTdChb8kye6ArSJLa9Eb6eDrsDRiw1cWeKLftu93J18EL32AvRcCTwLvveKLbZbHTygdXFv9hKB",
  "key32": "5tFHDmLcRMUcEWya5PQnUEuFhrHNWvVmE4wMKJzBpoqKguF7JxvFqJc6ZJA2Jp7DjgjX6QSngVTdx8WkjYoeSEgW",
  "key33": "393uLhj9uo8JaX7RxEdJK1JApubCRfxRd2WTHfDdyjft3E7gi1WzCvwR1BVibAsnW3qRjhuFwScAYw2Nv5n5ujZ1",
  "key34": "5jorNU66hMZneHY2MYHCJak4PcuJdASi9enGQCJxwqfznYzkuHSxCZcLcreKUcS3EPZQzDWe2fh8g1Pyq3wRMxmC"
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
