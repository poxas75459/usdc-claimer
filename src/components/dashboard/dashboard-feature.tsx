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
    "5sGrJaRHMxLUjqvQHeVrBnSuwmb1k2BJGBr8ncLavcFdvFPrTsPNSf4SBCV9Vz2KQHHTJ2EgPiX2CWHBZ3GNQyfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7fZcLF8xLMr1eKrW1XCGkF9A2ZeCpqqWqLJUswN9SojxLkRSPX4hxQd4eioua7Q3C3pECKmNC1TYSugw5tjtS",
  "key1": "BKGKBKxzzEj4E7vaPar7PiHdymQyRF9PQPtDxUvN8oDabtfJeLsgiNEdZU9bHAJto2jvH8yF7SywGkgVxzNVzwq",
  "key2": "5LdW191w2hykVygRYCtJ7hwEqJcBXbwj53G47QFeEpSRWEWmF5MwQtdHTa5sCQrDVm2fT2vQqQSTFmaBZziE5F9s",
  "key3": "2z8ZwcBNZSEHh12XhtKJdsuBQGbyENHnL2fBMtJQSCpXkgHpQTVawJNQvoM1HLPd8SY6twuCsLxfEv8nd2p7LxAW",
  "key4": "4CvEdgaiRE2s1XY4wHA3oFxjwvGWK3KpkQZZeE4yoDACbDbq5xVpHrEXF1KU2m9TD4e3HDX3pfXC7yd4bripK9tN",
  "key5": "3J1mG5c9dWC29kKrvVYtaBvJFaR4uQqqfyKWwya5dgvfehaLJuwiHumgV9ViiNLfG8g8PUhmRKiS15vjFw9Es2Sw",
  "key6": "4JY7hpVsgQDvQCQLL5rajEAB8ihp99EhFCr4CGbxLL1sgQpbsS6VXES1RNDbhaeYH9tiVg3pzfa2dCNXXpvZmCeP",
  "key7": "5gKPvaNcsZ7zf4LdoyEsGb2yfZGhfsXqkzKDtcgkwFTmXXMqPU7bzkTDdNpjeUnNpYJfAvJKVD4TXkKy8t1nuvuG",
  "key8": "36b7LyvBWtRmCzpSiz7HhWBzq7W82npLVUxqTVdW6iy42AKNXKByLubWkPj3SVCB2i5qn1bU3eTp3WXxTUuDmSwc",
  "key9": "3yg58EvPGkWis6Mby5rhvnx6Ek31S2vvLnCbY6pAqsg2KS5RgWuMgC3kupmCodTxLLzxtrmoL974YYXabK4r58x8",
  "key10": "2XR4ASzyz3eBwuCAobMn4PoLQqGKDs5krmHTkvmVcMqaSBG8HBCzkttZwJ7yk8knMix4JBnZoYHKSTAB4AD8fCuo",
  "key11": "3We4Q2arXqXaZtzzRUURCm6xCfmvJxRRAPcp1nH8zNv29oTpvYZVQ42RJymZkE19pr9NEMAjSTixmmXiAAz9vMCg",
  "key12": "2CQHzKQjebKSkbuhCasjMQXvniYzXrg1yGqXVpLL8sje1dJcNFoZo7aqC8Wp5KSrXPGJZevR1maiLSt6gB9rPRpn",
  "key13": "5eKhVrmC1DzmTx4WuFLcnw2h2R8KfFSM7UJ2YFjTa9scuNPUpn2889iL43jswLC1tSbfRG3MnwhfqAG9nMSC22rB",
  "key14": "hZuiQ5VqVNrRc4jMGC31yEinz5b9fgKEUwLqPT8GH5wFy3ZcbtPVrrwHjgLr7chFY1zFFZLgmV6VHcS6UnpPjpr",
  "key15": "ZK1pjvgZnXQMNeG2FJ3hJCSzB7AVAJQf1B8qAu1gG9Hk31wZMcTxrnB13X9eL1qWmkMJ6tLUk7Mqc7hZ7DwsLtA",
  "key16": "37LL76ULffexaJLaKHhjZHoFPGRgHSf1P7jqPVg6LXQTgqaHXMCGD9QDn1JNEWY59HzUPvSbaz1J7QZCiwSrcAf9",
  "key17": "3iyKLzd4cMDJhXe4KanMdbthGpDiv7fvQj39qPiC9MC4KFgnHGFg9YewNAU9EMhVXpPsVuC1BEYwKJS7zNxrta8",
  "key18": "5tdY4ySghyq1YnVKi7rsL1kKf2B2cAtnq8gVxjsoeHDjbY7MJ1BqUK5My3stRZbGdLH42NiKNE41rpK7Lf7GoqVk",
  "key19": "oEgNymCsa4zjKPEUkVsvgG4Y1WjkJzggrieospm9tijZxDzLvNHGSEADQsKEpMhrunAPbMi6Et6WmX1m5hjTHgt",
  "key20": "3bHTbfnEPXmgqkm3AK1ex9gnW23qyjR4bfnCXtoGX8KUJcXfNRSMSGBGSrT1LbFx5JWoPt5sjjBa5Up2t68Gaje3",
  "key21": "43Ki3SVybq43FWhimQ6aj639YSnUYzZE19erCrVjKqPe3NEctpHjsG8vqEaGyoqcg2eLgeVCNBtxMqbFvAvf4oSV",
  "key22": "4t5Yq9G7MsHRM9n3edPnu1eSMCaAuPTFBCJhcFg4CCE9RnzNDRtPZekxdCL9bSZ1vSXsjNCqgqWqcXC6zdcQa9r2",
  "key23": "65qFdJUZuLNApJ1Ae9vHrkYFGAood4DSWhM7BWQpfHa9kM9mAAYqax21rnksLQzRfM4pqRAY7w9HPncr5S5CHirJ",
  "key24": "2qxciJkwr2GkCWiFoLe5eJS5PGNxZPDqpibiYKChWgfHYKn1sVAcsgArcDgfQ15h9o1dwLy9kM76MoAKcmR5VqJ3",
  "key25": "5n6KFBpiFbyYiu5nkJ5bV5Ux45K5aW9C3t3pJ48sGeNhX8uVB9XRJ6PepMFiABVhhgXciyqFKDPL9DGqXEqdAXgf",
  "key26": "4PauVohy9ptwb9drSvM76Ch1nQCdE8dKyEL1yvVGYxVzD2jb5FS9kqMCR1jK57zgnJsiEoLLx4iZBVDnBJ6D9SAw",
  "key27": "rmRrrntNSBYRt8WfRbGJS9t9qZ3Ho5s4nEm3TbVJrkzFvVo8BoeN5LqrFm8vrgCuduyoB4uS1mgVfBJQBAdpFJA",
  "key28": "3tiUXX7eQR11NCcnpZ1aXf18CsRMLiVVwdqGS9VspmxEPnX7o9jrk43M6DgggLqeuWanpQ2Hwe5HJwGFuSNQNAS2",
  "key29": "4Qfbzru42UXbcf3BjCS1fyz2Jf493B6b7oqnMdZuXCznFwmsrBWpfiLz9kF5NmyevyWfBs85bKi1QT6CCg6ndzik",
  "key30": "59XJ9HQm3kY7ej2CFph2cNm1ErintPChdyw2qiUxUs4u5pyYad7gK9dY7QCMYkUZN8GVUtxvPZAHv8hTtjxcUymL",
  "key31": "64WTabt7KDNKb8GGh58rAPwdypuF71GiQrbYmjHfLyU5kLm9M9arRp3VJdxMwC1TS4qCKuLcZBXQAgQxGEgQx7at",
  "key32": "vVbXvWetfo4HphJAo7CCKE99kBMZhv1vKDmpRuJhVNd78idrndAcVxrd4rfQEMbsjEvbaVmyXN3wbeaw2MGatSB",
  "key33": "4QSdvJXZzCPAPa94HxEBVm3aPmpKszsK2uCtgDmwnZn5HeKm7t3XUy39g3Up8CHC3NydihApXqfRT4bFLeNPnsyz",
  "key34": "3vb7X4hiAKrcEswYbbhZWdcJJVVmqQ7Lr3SWwWbsjQxneNQTBH1LS7q59U5ci1psyBhnV6GiEKrnY4uBRbxBXqLu",
  "key35": "2AMcRmvuQnKCLFPN6MreBTv9nFjRrQDM8y461GH1mJsw7DWSBnXyZEtD5xJeo6yfjGZJf9ZqZU2mshdnsKwGp8Kr",
  "key36": "FK7YYvZWXsnGT6uZ3ZAtzBbmBb7274skzBKZR7WSsXV9WaWoXHGp5M3jmLMsi6f3JtHGHnehivGhtaWT1m2gMMS",
  "key37": "5xT41nTMnqiddfEFhCtatN5KfMWnpaguCMkZDRsCWx2paxFfSsvqSY1yjmQ4Pw1H77tpWHAsP76pmNSQ1YmFn6rv",
  "key38": "2tFnroaxtiqdAhgodcMUgTHtkyWTsw6bkDDdwpGskUZV5tsFWfLnQoyh8zfEnKss588fFXMyCDxyFpa1DN41kJpB",
  "key39": "66bq5JWnfEWrZK4trwe9DHQhTchM7KUq9hpq2jyKCL9bLz9gCSMSnttCmseFc5td7wB6nKxcbYbn9Ad6gw9fwons",
  "key40": "2HuxSyXMDRskyuxFgxQUkDxrXg9Ds3rUpovVCMA98UiBfXgJkgMwQ7Ju9pdryBB694iFChMgcznDLwWXKM2ZVJGB",
  "key41": "zLbJfhBVoEqXMJa8JJLkJGRw6255FkottDA8ZGKgttxNjrhW1YUijmJpASVBHjqGGAy9xUWb2aFkkxRkjVmBKKn",
  "key42": "2iKFGYqyAcdknUDGGL6GZWZtEitUKJzrzKUjuhePc9QG8ZZ2pMEY2jpbHRQK5aTTKuJpBfFZDbzVbKQcVkK7UgiF",
  "key43": "2RuqEnSeqyKcHj51XAHxZp4JZPKpA6KMCWceriAjRGc544vsMxEfcfo8tqTn6HfYL3r2mhsY28Y8qCJQ9VkwtP5c",
  "key44": "4tdmWxzc32C4qLX2g39bKBU9Ap545CuXgLBwFz6eHbdD6HTdJnFVeeTBrSpjzcy2AvvKyvDFLBsJQF87A3KwvBys",
  "key45": "2A3RRYU2225a4afNezKSoiBk2b2RjvTfEsZLCHueekxUH4uqkdK7DrwT561XY5LEu5gxTZAGVW8kkyn2dPyJGFRH",
  "key46": "2q8GH93XWEebV2izXUkmtG2drEgfWDs8YJcBfYG4XfWy6v9i8bJCRnBeU7mAdXRHg2Ykr33sh71Rbgk9H7GWWvyy",
  "key47": "5ARjANAg6rTF51vJTq19ybLLVciEw7KmqwqxkEKFmvfPa4TUAz1mGHXNMLiTj7nW1gkMUu3zijiRPgyJyrYPYjYg",
  "key48": "z6Ewq2BpZihEoWhQtsMQBB5uN4UWZ9mFjG2ibgK89STA8XW5kEHruJ1L3CeVYfaXPZwpvbR5AH7YgiopmmR2L1U"
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
