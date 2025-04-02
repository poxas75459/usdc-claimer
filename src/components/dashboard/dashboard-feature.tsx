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
    "3BaCHfDK5vcjT4TE8LkX6DcfuzZzyVNMPV6a1tHNKQiLc3342SSr7BPdgtJEpv63QYy7tunfwKSPqZZ7vHznGXub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jEQJNS8xNMuamNqAFWyb82DLWQMCq79dEZQcuCtsVkqrCPzHConBe8QqoRdSKD6wXob3oAcRAFvNC38Eow4JMnt",
  "key1": "Cwf7j6EjEzg6eoyYUtVsgWDaujdyoAw6UoHdJ3JLejysX4LKBCxRBuVjG9SHU7Z1JRp9KtFcQBdgaecTvrT4Qwa",
  "key2": "2Jn7sb7Lw8noph7Xg6a14KbSbATkYFALEouJE4cBn8Fwg3royhKNCT59KZ3PZU9G5rG2PyBL6rR42zsYcnvNuFBw",
  "key3": "5CFRLZYDTepmuAwThZim4rNyDm5t2yS9kwK2Ne1D7KtknVqhz7ZKk7taosf2jhAwC6AFSD7PKauCdb2Vq1jP6ahi",
  "key4": "3ZVzDZqNGsBjXfEomQRN5iuXrHfSHqHZ5ereemjngddHVdEUKxhxVYTcdLD3cXBjdZnVwD26YMRg666qKGbpibWF",
  "key5": "4dj2vB37FuxKXBtEYuByMXgoxwohDRVmHWdg23CvRy4e6FLzjXQCgjpw4DuqVRtRrTiTKXRL1kbu5ZNGxt9nu1iW",
  "key6": "5qwJ2MYQcxZQncsaYFzXjMUo376pTmkfa5YTagEjvCLTtC86BEH6pKjd1sxPa65eMs13b6gvgpoAumYVsvETn1hR",
  "key7": "4SkdkBmiN1M6VMGBtRs9XNTgJTf2iyp7SLwXeKffVjErhi636pwvCEB1RK6SaxyXW1R6R6dKrPgkanGFD58bwusN",
  "key8": "4nsYRNqt9Sq7euuZEhJzvFjB6UCyZc3PsuVh6huKSTyc7s4Qs6wMhE4KSJxQ2HXwZBiYqZLdhYf2TRoa8oZiAyMM",
  "key9": "5x84WCeQSVQ2eXocBPtFJRu2CZtbn72NYaAHRK2eYQ9Gv16pajXBjv9Sw3nUmu4itahBvoPEAXYesBHrN4PiGoYn",
  "key10": "oePk4em5EPhzaPFZxJ5vdcEj1vtP3HM6ZyPyjdsA8aSViwKMWLuastjDZuWWb6i1uxyEWypjZk4ZDSwUB81wmMv",
  "key11": "4xMzUWfdezk9REeEJr2enVuBx6PeFsrrejZCRPKaskTy8349RppYChdEGT3MsJqe45xTyTbwkYPXHb6GJ7cp278E",
  "key12": "EbfvmMojPmC1YbYtJ7hV8RbiFsHJyfYkkJAJTsUgS4hAHgx8L5meqwtKo3b354QQpa5cP3QQ6x4bB8PQNfYBCsx",
  "key13": "4Nb6R6cQWdd6beicArv8iRTedrr92Cfc5VfcGueBDDA7MSyroz4Xfae2SDmP6UfynL9ccf45nqet3v5MGUGULGvK",
  "key14": "2fr3nftwiTkfbcKyf9X5NnoniMfb7rihCoKPLKcompHLxd5HaKpqPLVczF6UGn7mk6iHFLDPmTDr348gsiS7EAhd",
  "key15": "4tofoyemBCiV3hgR78GL1Bq4SmTsHxgCNbY2ooSwNX9TCysPPLivSbWzishTwyGToK1uEGobQgDKwmK73CVtut2n",
  "key16": "5Ua82jH1rukTLWyyLPaC9eaCYNAJj6NdMc73Wwq2j1Qy5T77J44noaHoDjkYbYFHXGx7tRd3ZEGuSxqeP2F2xefU",
  "key17": "7KTdpyiT2TUNqy8UjB98pcxtKTD8VrkGGmqrxqA7M7LKEhUjJbgqmo4tuxTRABbTvL2cJqf7FudDsqiqpkGqvph",
  "key18": "336vwRJCgwzRXpUpDZdAsBx8tSFj2dghhsU1RyCM4PCBAkvVM3XCLup5xRnGCdg26ypCAMeMuKujB5xNZFwtY9S4",
  "key19": "o4dgre74eanaysQ5pQmzSdsKGSwrPCyTKXP6jNF76PBotuQmmj7SyvKPsBSNwTmtw9J5LX2ggwTvC3KMo6rm13h",
  "key20": "4xYhUXEKfj79ssf1fMHj9nep5XFouLTncqdjLdTBN99Ry7Nq8st6FEZKoLQ19z3RXRU2msygJrMXr5wCSgYwMXty",
  "key21": "3E79oKPp1uHAsFDBc6aoG1wY2APCJHoLHSVrxf8xd55QKP7UB3HWz8B3KV79jNXRjSnTujWWaRKFdC3SaKCFFmEU",
  "key22": "3nDgSdsqBUGGgCSNeizmy4FABGWS1EgvEn3Hi8hp4dCfoxuRPKN5v73X8sc5tx8bKzjpc7sNG46aGNvWEaqYSLLo",
  "key23": "4RLTxteyfNaVJUtasANBnYo7QbiWJmKDNXC1DCdC6sJ5HMvYxyM7RCeNpmWjAGF29DBwYtbBq1MTFarqdHvbDEzA",
  "key24": "5Eg5ahuwwkVrJzi8FvtkGYUaTYZw42cwpfKTgghHht8D6DJHC7eoRtZ3DAgBWk1ADGrj3DKfHR4vbqifLKSNDoev",
  "key25": "4ZAbKtUcbUteFxsw6H6FxHHa3dEBN33Nsn55yGdmgNG8aNEff2Y5fDDawLrTZuecmXvww1o5NpgggzawKkZpDDm3",
  "key26": "2LFkZbeL2CivnsRNFLEADvw617kFogUvFRcWH1mwg63eAfY3SvTJKF3Pz1dBimBR85QoZ5phJ2ePegXENytP7rFQ",
  "key27": "3peTkRLbuhceJ7zyLcmqLbp8z5XmoNoBfdZjmpgbUALcsEwFuWtwy1VAoktE22NU3SjaRc93z2Cge4kCkUru6qFz",
  "key28": "32p5Lv7ncsyLF29d9WXMquKjW6vnzzydi351SGFaj8woMYDGTna2cMnd2gjZx4qjXc3ENQps2rR2FtjdqXryjb8A",
  "key29": "jHJqu87ALcgCtDrqQTM3xCEVriKHZwtwN8d47BbpYyLswsT11J2sbHxu55oPHJBfd8t8AayDqwrqSsiYSacHkxX",
  "key30": "5dN7xLWJBHagmBCFx93ftz49DBmeP3r6MEFNbeVRGogbqiwZKUVM8jmS8yguGnMoJ3tp3ghhcf7ypV86gbCrHorf",
  "key31": "63qLRXHv6hnQQEPhG2SSWek19xS7M6mbzoYFtzgYi7RcA5RUqU4caemCCCB3TfN4SfyFfhELK38gjiiuGjuWeaFd",
  "key32": "5aryiUQdN67yPg7bkCDUMqiTqqumrXM9bftmSy6eALBxTMdcitxkEz4Qjhhhpuw3GwHfKGQdPXMNDzmjPGsDJ1Hb",
  "key33": "397WhKW3EU3NMX28d9e6y9B2FCYnTmJjtdHoKnwri3xGEi23sBKrWRmmku1zHpcstVsBwcwawPeLtE6jDCA1V7wV",
  "key34": "23jYiRzrVMsHGbhjYkKTGQM25h2kQunwet94stpXEi6gNGRxn7EVeBDtZ2kKSFnZNRFAY8oyrUhxx6oMx9ex224J",
  "key35": "4ZepQNCGEtjHySKAkeCfWb7t8g7rA3aicM39hMzo7ejbACAGpPFtr4zp2CfZyWMGMfLxBRLovRHHqMTFwdqjvNcw",
  "key36": "5SAnLCWmZeqX98wyLa4eVEXeGNawRPE4YYZS8fA2B6q7SipKV8ye4dd96xoyAvWn6WvUcjy5cX4Y2Sb4DnweGD4C",
  "key37": "2jujbrk1PzARumc5sQ2CTG6xDtPkDyjMndeA73SUxeHwavUg9t8UeoHPzN7Xbho9cq3fLSniwFrgZTSvgpqH3NrS",
  "key38": "5Z4BS7qrLDpMk7y49Qbb3zbQ9oVRoMCv4Uua6ztKHFDRAhV8UWGQpMmS3yW57NSFMZYYoe98pG5pL6UHAXik5c44",
  "key39": "hStvQ7okugUFhc3GMuyg19z2j8igQ6LmP3DysmtSrB4iCT9Us3R4LPRPjxry5xi8RVmx4zF7P89FWJ5cv7FTbhJ",
  "key40": "27yG486YvF46x8zyMZgkSvKx9ASSotuaeLaTRzpn4JMk9jr1zqWwfWNJzb7Kg4UxuA1cKFbgYQpzvaEHao1gj4bq",
  "key41": "4TGj7Dpf54LqMs6PU6zi7US9Sp48rGDNphqnHMxWEjz4qDuBbpr2n58HWWZk1gTP5uNEzgq4dWwicHC2SxZiNJJd",
  "key42": "2afrCcxuABJGVbNVu5AFDe7D5g2kYWoZZDiUkiE8W7pEQSg6Xc1f6katpFViMapkCvoXNijf4aZgB9XFVN4bRNhf",
  "key43": "5sQEpn5MC2KmVMMBrAicAatM7un6CF2XjwNgLqL6d2zpEZYxzg6wR7YMKV2pvjhZL4GiUofoSWuwzoLQMK786wtu",
  "key44": "41YjQqa6UECFyizEWfCbP5HwtZFxXW9NZ8bm7MJaqnoWkABrCm67RyR6rKtT5SB8z9HfsvRykD5ZSnMQYMxRTfHm"
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
