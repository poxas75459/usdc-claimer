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
    "2uHiCHKL8u99Tg8BpXVvJSssCxAFiWBSDWugdJ2kx3kJv1T8kCc8F3W6abv6b9qAox1K7S522wyZ5Kgj4UByUUem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yoVedkdHMwJWPd2iFKPrQeHsNZfLpWrwXdbnL2VFhyRBax6YFtrfPzaLZjCh4ZQPzstDyACGqiRwgBzhRk8Xq6R",
  "key1": "4AsFgm1TbqJo3PNqTpPSQvcAyKP2iwBybmf9qLn4swEYVYesoYA4UPwVvENybJAqPdzQaifpMMhfBbRXALcG8GXU",
  "key2": "61jCsk1HUVNALnKHXu7ULppA9V15N3Gwg8CD7Aw1ednzYDH3cqUiBkJs5uBRNUJtugxboriiw9iPioE1FyP39Ttq",
  "key3": "GkswiXGho3vm3KfRj97CUkVHeBrki7TwBopu5qMdefztTCjLd1ZFHjQVibrcD7poAo52Jnq55YCfncrzuYAbfyX",
  "key4": "4aTFa5cE6BpcCuebfTDHQAJ7gigLSkRvKyZ48hnEkYpFZsqNFgggEEkk7QCr5VjXu8H2SNssEdsjiVRT9464NKLT",
  "key5": "2k4qbKTrXAg7v9hKNvE3C1fAeFkaHtgzPQT2kri4y9TAZULvaA92aGfGoqZYuqTgP1NdUSSi5Tkr8mjiL5GCb7K3",
  "key6": "BzBVmSGwiwRT2qQEk8b45VKFC5bsVt64dEeAg1w65Px3p8Eiqe6xGxtCesjGhaFpaea2byYVHcMHxBHJ4yu1ptR",
  "key7": "2DKMgahRk2Wx3nG1fhpuvzUvNATjoJfx1upDV33kNmcDZi9ahgQvprcMB92gqsAsRRBYnTn7tzN63QvfMtqRTpyb",
  "key8": "49fpCA8zyYa1CDZ2zyQo7PNLADG9a5ft2EwDMumnSmupkNDhHBchRH8KjoNg38uFcjynw6KTRSmQUuM6TwQr9YW2",
  "key9": "3wit9EUVyY6jJ6PokKTbA76ZML42UAHuSdvRBKQUANnXvYdFa7VpgaCLWg5BSiTHzyUoUwbB9nAhnyr68NkZPSMd",
  "key10": "WWCiRvpVfWPLZVSasBCg9YyTTjRVnbMhf1e47PcXgfDuKPr1sdMnoNTwGDwM1ebCBqFasDAEc7o59KRaLENiimn",
  "key11": "5V9rZYJuaVyebckFuGRKJiV1WG9EN4hv6pmpYwuN4UWcEuHxj52f6AQEN6EFZd2PajH2BjqbLrtAdqLe9CLyzVcL",
  "key12": "yH3rbLKzsTab1zAwYqZiV8NjcBxFDJsacRVBoQxS4fKQDEknNj33gMKg5cCV8CcmmqfwuakLkAR6uHjjvN95Es7",
  "key13": "5z7ucyCxG1Sx5aZKhkc87LEv9NxX4R35MzXoEpt9J9LBbfj7NPuSEsg3QAQ59Nar8oJJzzaQuGn8HMj6VWG3cGFe",
  "key14": "4PrpJ8ePRgmAjbo1xFWQwpW8B8qbuHa9zKgBo5jcoDB5Qcu27yf2N82gaFuz74bbpSJG1uBsEXsQBcj4xCNrq4io",
  "key15": "8hBMxjZag3AZTRr82qfgU8HiEPEsbPuo8dSeTezXe2FWmNAc2xryqwqBstGrqT28qWFnnkppVGdUAXPnjATHYMD",
  "key16": "tzXRCfg6NbcEsvpYy1wSDdejFoEqi6nVsEAQtu56jZZpZYqDuRLWHc1LjbikuPSpHN7S26VLSQL4SjzbW53y5dg",
  "key17": "VmBuSqx4LanXabhQiLPR3Xh31uD9NKRnYJjjCHjRjchQ4AqLNHb7cQFY5hSehaw2PQNyoMbe8fEuBXnjncGzwdJ",
  "key18": "56Lufm62u1tc5gmh8KNFhVy7hUCrPXXyAp3g8pGNPsQBjB4uB1F4bDfU45PpPq4YRi5TugnaLJpafCM1UgWaX8fa",
  "key19": "BkcbjUjx9pmDw4HNQGjqszu31p1vZuEfpA84moYpUWeyHzGWdaf3YAfFn328EXpMhPyYJ6yHy9KseqeAZ5XkDLP",
  "key20": "2EFh3VVw4WYv5o3gUu8woPastxiMwufDFBCqWCx9j3XsmcRhtkSDxy4vfS6V2fXLaaN4odktnGCxgB73KK6EzRYW",
  "key21": "3mYjJ1GHMktatM4ANFChRF8QMw2HCFSvzikHhh219r7GYsV2TCBKQKbTsUCFMConP79KWPo7C56egKUhB1rwMGLf",
  "key22": "5AuyDpqwzAvxMsbMGa6JhhSiitZnogyWHkDsxf9qk52iPnygthDwP8zaa42xkapEi17CH5Z3jTfrLDXtJJECET7a",
  "key23": "qRn9rM4BpvsL9GiXdrdmjS7pGEjcn1to14uUqTzsLytHhNodLjBj1TSzRoR7aQyoB3sos8Vkv3JqJMY5XSF4u3m",
  "key24": "4u1mtqubVng9y4sEoHExZG8sHmW6U42c5AiYGCSBMJocJP7qiw94UNt5CDB5Q97EKLovUsTZt4zxZ5qvLLXrkBT2",
  "key25": "2yP67bccaUbxWfCovUvwiw1fsH7SrCybE2mRSZgeyyoLuU4vaLE3u4BSqpePsY61UG4rPHxwHXEe5nuAzKnYvkSZ",
  "key26": "2tTXdmgCAeeJ6n2fnSXaaoceAoiaKxtbjZXJmVPn63fHoWCVmVDNwNg5wShsY9FgtYEqMzFShskvVmdrDTxFSrev",
  "key27": "5KBFENuopnePM5nLenXb6ddYBdk9fuBvaMvSTerBv2rciaPV26HwHpvY9D3sB5e2J8hsC1Dneo5yo8oT6VCBgH3R",
  "key28": "21FA1GL19rE14MP3LY33ePU9PJM1sKD44hGPNQz14hk2AQSCDqkfL8RfJBc9qGNub2tgmkRv8FEpKHG48y6MPP5U",
  "key29": "4pxxzT4auAqCEnVCNf8SBdtCj2Jt3DrRaB9hCtJp7nrHndqHFUzgWcSnmef4dgErDBjfiNoeGxafe2qZ2TR3UESs",
  "key30": "4LmAXVUnMnYapgLaVZygdeVPLAQwbCmL3xhgw5PMLwjWCS3fvm9ra8don3GWVpDznZKkg5Tnopp4SbC3YzaWWv61",
  "key31": "T1GTw5sKEvL4AfRHGiFPF4wQxq2ey44r6BHC3jVaXjdJhwCcAkVoKh7jQPeFq8icvqYMZXuckLaUPsJy7bvv5W1",
  "key32": "zpX8wcWzvixVHQPqHaKGSXo82Ba6E96GhGgisqMozdF3hryLii4iLgMXcH9GkxwTe1MRanivbHA51n9Un2LLnHP",
  "key33": "KkNXj73ebrj2bvL2ZRfqH2PvBBRKaGcJTtxrXerAmnBHzaWkEwhXLiemZVaxKJDezzUvfNNdNtym97sahV7eMdk",
  "key34": "2SGJHSXJWrLiKpUYfvhYdhecRJqrQx4zq2N3UQPxXjhFdj1aqSS8MkkcxsN8G6eTYUSaXoLqcrGftts9Cs8Fwc4s",
  "key35": "23a9o38gPYeyubW3wsaBrFoS2FW3Q9n4AFDKJKjyPVfwmNua6gZQSVD4UTDPt62KrYrhh6vxuqz1m8MgeeEZqpTy",
  "key36": "2rLAusjpAk3U9uXboMZ8czvewJMQq8Tbf35WKd9ZfoJ6Qq4DH11q5i47hC7fVoB2Wu92ArKWRETjknh6cU4VUdYL",
  "key37": "5SUjn4vuiSRUuRsRwPNutkqC89w3q9gVoWCbBLa9GmBqsdT2Pwf9wemvD77FYzmJZV26drMxke95GK1pryk1zmu4",
  "key38": "4mzW37NJUQ4ZPeUNBoTdRqXnYgy5UVF9ZuSrDJdqewJujTpCmfwe5dX2YbiSfrq3bnQVSBp3joVYUXJwmEjvNc5R",
  "key39": "38cFajTowzHJQktfuq8GVxwLhLe8VL1FSqPoLgLthDzaAM4s1CGCr9ionzFAhMqk8BKVKiHuHYFHVCRz1Z5jM278",
  "key40": "2ED1QPbfEJTJJTyQdZVn1eT5Xd59ow9xRQnv22kxyVBpmWytEJSWiefZp9RyMZ4UsNxBytbwjAYRGms11Guy1FL",
  "key41": "3JQbnA23wUtwE9RVWLbBAV5wTpVeVRKwcAxRzJy5Yq39rmpKzgGCz3NaJfTDMR1SosT9SViQdXqnUq3bYnHC4pE9",
  "key42": "3HaMHG3sjsQYf8VAyYDXxqpGor3NvP8V5dTfnTpS21ixcmoCWnxWWkP5dTtXGGFV6FDMjRPu2ekdufCej9tE35q7",
  "key43": "5YsiV2jmaJe1Dm88wgGea1m87VNYLeR1eXgtq1i9bAWk9neKGTK1fEFuYvCWG3zXmpF4WSW6fp7AJW7uHwoPvW5Z"
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
