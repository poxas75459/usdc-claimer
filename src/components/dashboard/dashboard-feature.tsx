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
    "54uFhs98b1LdesKcsVZEywByPhpNDN6XR4fqAoxTfEBnYy6hpWxeiB3PbR42PykHbmD6XW39gTJeu783uDTEFNdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYbDEs6mLRVbNHsNFBLW4LYehFdtTj4L5M72YdpoPNuN7dv9PofQpGRfGosCj3VDU8HFyLEVQ8xD6UFHEXiBgmM",
  "key1": "3Tev2ehQRuFGagdHW2f3VzhEDGHHXULFa2wbBXR6C2zUkaDiWs2RarYyYq1UkednAj6hJVnhU5ZMor5k7964Jn35",
  "key2": "4qkZa1rBaGc8iYHTqSnFM91YNy2yKGiFNS7V9MQewmhvhNpd3rhomxcBuqWpouasfa4oDSkQMh2EL46z5XHsBeKo",
  "key3": "4t9hCK85K2bNEoLd6Nhf4R4jScDQWC28Wgq6bPHYyiVwHhv4gYQBGQkQZJJtyTVGMm4Pi4ajd7TivMWZWzFLNaGT",
  "key4": "63zXmx74EZ3XadcLkAaffgrUo5C7YBYvjSLpNEHedZQXtTwnk6ZUAGZDjxTE3pNAt5r6zsVMqrdv4d3ea7rExPw4",
  "key5": "wPV1eZYfxieH1A1HvEBM2Fxk81ED47pyuDssEL1BkgQUVEYAdT2XjkCc2pkLqEceWBu8b9YGLpn1DQXcAzgh55E",
  "key6": "5TpSJkGJBnt1DcgfYLiwQSonuc7Hq549NHwyuCqYBdcnwibn3FsEGocFemyginRkA1xiqSiGP2LC1g4cnYFycFTw",
  "key7": "51BfMiTtgmSDMBwhPU5LEfiVtHk5qnA94KNZnCnTqNmg7RtVhUyVUHE5oyCtPyaw7NqAnqRTQYVu9GQYKjNnKh8K",
  "key8": "5s3o52fp2KYFCMki4tpMGzydYTbPpphDLc4w3M4R7waHWPM7pyt2KDQgW51oUErMtsZLZnQ7UKPksJUHFopEqAaK",
  "key9": "4Eo9xVGaSoPT19kxmDh4Anuewduu5JLyHEq77JENfoupb749b3GeogH5xQGXWqM5742H54b55gUQgfLdzzqpbhVj",
  "key10": "3nuSYAbUcXsjGzX7hZ8CemV4ZXnL2o7yyMXhwCaiEws2j9nyDu5J7mv1Mhky3Tzaqoq8BZdks7Aa8S7udZqYKsjc",
  "key11": "3zpHaaoaGFWn5PUL91PGX1LfDsDofnxke3jm5QV3ZzcfFqG6EVdQALBc9xvqtUUeyKVy6hezLkexV5J8dqmyPjvY",
  "key12": "25prhZT2eRCsYWxqRUKbHDiCwPcVqXtMZPEa4FKXC6AcbzqHhgUyeEfz1kce19y6VnsUPLPZjc2XytbaAUzZy9Nd",
  "key13": "VE5JXbeqhF1mcmktQD8ZBWawRJk4dh3ju7J8toiKHCbvEKNjtYkpmiHj3Vv2oaizVjvxTQEgWD5kmdugrELyLQD",
  "key14": "fZKNPMT23Be8LKp633BsBKmFMrk9fqFXEehsABSZN4sj5ZNCNmBwpgecXn6igPD73BHDmKaJ4ZiJAe47R8TtaU2",
  "key15": "3xXB7G1Ysrgnycqzjco4L5haXngHWFgcjk1y4NiW242c9QBfeM5B18a8VqjcR38wZ3ezb3gAeaL2E82SAAy8x88k",
  "key16": "MukcqAPNJQJT33rTRx4njG5me51Xham9bnFhbyzfPqbw5AJSF13TNr8nEDPALKqsncoqMeVa3QD1mveXAafPVUj",
  "key17": "2SSKufUjeAHopGx9hvNT5rQgJh2eEasaYaAK8MucxKtNG8izoNwgeCahhuAMyZ7zswFU45YXQuqaLPSd3VwW1MwJ",
  "key18": "4ET8SfU9CkWTb3Nootxmep2fmJxMZvMgs37C1ZNPMWszfNz5W2yxahA8LhthPcYeQmgFWiNpngKSF8D58eGjyLBH",
  "key19": "4SH1MTeTVGdQxMTmwK8HTaHwwkBrfVVR5EvjZBgpT7K6fdW3KGDRYtZrbbrCzzm63Px1Tvy4C6SW4Q3dK6744mgb",
  "key20": "59xMdqGRiSRLtobUigL3UYF9Lg89YS1kYmfjnTZoebTvTY6VUuUbY6YjYMuX9WA2PGFzJMmWCvupQnWfDyVQxtx8",
  "key21": "4rUW7XCNHsEvW9SuZjtWo39pMdPwX9dwBC2X8VhU2HX1KNJp3YfaxbSx5qPu4pf5vDUfgpJFX6hyDhNVhNQH7Jt4",
  "key22": "4TUEjtYYrEXD28VCxC8XLFeNzNrUd4fM4ntm7hHYb6DmHTj4jj9aMkxff7AcfKKtaLLTjdYQL4sJXFopiRAZvV7V",
  "key23": "A5amJjDCnyMyvAarEubBQgCpPmpSA6kVFQizskBCKAX34ybg897KP9GW9uENmzUFMuohoT8374GDvSeGRNfMP3g",
  "key24": "622EZ2KvSHdSdS2yGKgPVnPdkqq43m6yuHv11xhaMCS1PrHiQnRauFEdDdXrSBAZvXLc4dGaNpTNz6fScFT1JHLp",
  "key25": "2W2bnf9PDxFTeiw5R9hfBuQpSdvcAkPvXQL6bxHWbdT5j8xxK7KWDij3ka6c3yCNB8GdneykMVBT122STX6NKDDi",
  "key26": "37fSv15uzdmPCAU2FFEh49baCXGPunecpt4bpUycytt75fiG8VGYJ9c3RQwcruLmEBocBEkEWLnGjiiDaVbWpXh4",
  "key27": "5gTwXZhgs37zynxydsJJpHfytfrvFMAHtp9dUTGsLqZhywn1zX3UKShATqkoAPdUd7E9tvfeeoADFHmx9K8vwk8e",
  "key28": "2Q2cmK7zGuKkPGoFhMjKUcKCDDsbGMuiMLXfcY2MPJHbbMJjzXGxNi5ZV7QBkMy6mmKbjDRYXUpHvUSPFPZWnRRg",
  "key29": "4ZK4DX9n4ijasHzzouSesgu6WtZKAuugLwiofzLttDEsCfrRAvZFySvZpNTiSqu3kqcA7sWuGpeng4pKiFihZX7i",
  "key30": "58ohFuKxuNFWG1Rmit9cmjohWDXq6j39zaCALM3BtoMvpP3jW8Wx7DwSJ9cwqtb8XZZ1Q67EYBwqaxWLpXimedST",
  "key31": "5WbsqRygJZssXeet4nfVYGdi11NCcWfXqCDMm7huyJMEA8GZVacnNWNoP8kQopAXdk2AipUjuj4Q7X5GLJ13HjNg",
  "key32": "axdJjNSZchZHvf9DGZRGyVJQcC22aSEtEQPLdfFFbDeGFXvFfgG1GXijZHnB9u5qg7GQBPxGrajLy7jHQ57FK6y",
  "key33": "6631b4v6qWiEF5jZCvjzHR68S6EEBFwZeuVPcMuRZtkpy7kzKkvULYoCmepgWsDs18m8isoVEmZZYXPYREqbgreU",
  "key34": "EKEwMDmqASL63ndhWnd33e74chkTJofeMfTemfwVu9Cke4gqV8QAWEcDgDLQrrDD3omqpTefGgwyS6GCNFGBbvw",
  "key35": "kh3fBqG1NNzUc49gRWGBu7U5Mjw6L3e5TQR6JVA9FW6Wv7GL2U3Vtd55R83MgqFciMM8svjd5btap85J9Vchko5",
  "key36": "5pRTJxbueq5cKcKA9ymx74FWNNAbf3ZmdgHJga3XskXNzxKbrxRXhwM8YAa26VfMjhFjGWCQQ2ekxeeo1ux8prPh",
  "key37": "3bzs5aNQXK67Bw7ocmLnQckodA8ewsPDWxVAmD1KU9QP8k2j9YWTYRC5KJVrZskp5wnkadVgDLuZi7sZx9ux8Pb8",
  "key38": "55TDQcXAnTS59m8y3pun2nMWy7daa25LrC9sRq9VeXr9fYxSEDNhP2YHoNW7kx1ktnKoeiVrdw1mzy6RvcVGD383",
  "key39": "2jbUr1NsPowjhoGqFYSzQ1Ef6M5xgsGAfb2wGw9kMPvyVrCirriKkyKgxzuFUu4BxgfXgvZg9C8SBBJzBMAWLQ3a",
  "key40": "2fmth9GHJJZzt9pfmrDENQnDkALTqLpj7wnnEnuaSyxPRfU6j69m7a9SMAmXRAasS14KDiZsyKDYh4iCbK1QL42L",
  "key41": "2H6TVh7n89c8a7hZ1tcvoKXmu1oLRdBj36PbyggyuJZdn5CsY6ESNAeRZrciBpkAmMBvCfcejdN6wYz4vzgmm2To",
  "key42": "62yBdLQxGH3eqfP3mRGYdXCzPYJFfWYsrkNLreopRWw6G9KbbYALN3dKZekTkTVCMFc4KspGnEp1CWnQ4pKettaX",
  "key43": "5QGfp9SNin9WR7QjJAToS9xBBMYPmTk43qjTkhLrQowYkxvw2wDca5kHAx3RnXmaMfSWT7Kd1RyvKmZaYkCB1e1q",
  "key44": "3nG4QJWjSavQmbtELk6gUkrqF4yWsf8PEuQ4oj4MgmckdWpWdpsDyfxfqGX5UKVGACssjq9VrfVG6cqx9kiv6WWt",
  "key45": "3ciww3Wnjpw2T977zetAf8eYYNYmYxR6oUyq2CBzoxeBxQriwVyMK2GqtZTc3DpDM1FC83PNewk7upHhY2XXJkuu",
  "key46": "4gEwgppaa57jPhj2togfMrfqL7wEv7Pd6zUKVzBcehBG3k6qh449L4xZkRv3TNDbsUqMyaLMVWj158WCmhcnL5Wy",
  "key47": "5YpJ6JcrWb3Em5v5e9YodhU3JRwCp8SK263PPg7UekAXpTfhAD9Fjq1tuytxpDTbfGxJvGpLWx4Abe213efSAL9r"
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
