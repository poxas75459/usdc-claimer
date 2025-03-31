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
    "2i4X9i52xELv3ydNiEA2cmM3PJ5ZpV5hng1psbFGL2gTgJydkdyfBfajCcPiwZwBh2XQsvUCWFCM9S9bhuHDRekX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVtDRgK7j9ko8rKvHrGE7rcyowPdKsfRCyAzP6WVgDXwjJR3vHhp7Pz3RXvzSRs8cFgwN4K3NWj8AXDt1wwEuhS",
  "key1": "2B1YpnNxzLCMESSwcYQimoCe3g99CW9D7rFjYtUvGo4E1JWM7jqdUx8A1eqZE6iEhZcmRj4vsXsAxvi9HM4STQYk",
  "key2": "2M929wdsazWXgkQQvpTjM6f6dWh69V944eZcwKoKUzXSapzE3DxMPkiHNmT56wTr59VTSi4AKWAApbGBVUf4wP1K",
  "key3": "4JWFbq7J4xT4D3muisMxCfdxy13NViiu8hV4k2q1s8ptPBPNFVHfuJJ8achzrMdXuNFhBvExvdd9uXg78S5sH2Ga",
  "key4": "5qqizGKR5ML6jYJGdoJ624k3HL1QmSrSuzXTCcSv7Y3PsFZ8ENxaX4hzjttYrYHi95oKJVTvaozTd3HFcS1v5876",
  "key5": "25QvM3QnnusuKb6BBzcVVnetZxGQ8GFSFFfjzX84seMw4kXeDFKTadmL7tZzaY4ddzytihVdnunqYHbUgy2udXEZ",
  "key6": "3EFGfHjBaq5aFm78R8bWSYUMagKa8DHAvP6iCmYSbG98XyPdbpcfkTwwxV2snnUVphBCBy3WbVgZyCiGqbDh24gW",
  "key7": "3gogYKFiSHCVvMVs7woRzNEJBkqjyeLiJUXLKJT3Fmnr8uCZy9x6BKE8bJBiXuHon6rweirjrpCueKLUR3X6iJJE",
  "key8": "5pDWpcD7SvJY4Nd7wN4pQ42cUgoJhwam16SmRgJCBzsCfw2JuVuaVGToAgrdxvabMoQhkTKaGYWnQWfAkvZN6b4u",
  "key9": "34Anu9A1HfooZNRQvmUmoBhP2Px7r5LFR7CU4NHHMck4C929mpp2rfz7Es6j4wXMJVhgBHk4n2YTSYAQeFmAj9E2",
  "key10": "buhnj8jQr46AuMqkrZorZ62Cb9PPp85JGu8PFiqXpYG7qUXhM8rvbD9yVmheFZrxq2ReFdVxabZ5LBg2uX4JBZw",
  "key11": "2fAqntBwgMifRPX35iCezb6fyL2AXvgaYupQTeXsGy9NCFPYVdKbegwtXVPujE1XTg1joEG71cyGPucu7zPyFFqK",
  "key12": "3oVuDCTK9GUwkHhGTVjXXRzv7KDoHofXSj7nJ4JchagEMq2wp64ELqXTeTagrEHdSMVmSDN8TMKsUgkejMV1vaqi",
  "key13": "2fkT1bQfV9n5P7Z7KaVs3LVC2SabuKEykobju3u6okivvZRknPvz4kKuhf2GTg8WG3kLnAw8t2duABQhsxfxBBxH",
  "key14": "33wth7BnjM53rh4xHiNRkMGy9DSEr8tgYv3nm1QyAQKA56q9zCR9j5uy9C1BT71twxrWMuXCrNfX7LQriBrQceLs",
  "key15": "4i5n2qeKFmNBfU1h7mTJBgm5nodTDHDnVFtrUWvkTNN84SzQJr3yfd4BgLP7RWKpn68V7wekiVgZbaH6CRRJxgvY",
  "key16": "3eu38wnmywgcxWRokgE5WroU987SAf7yZyYiNHfwsibUP97edefnGxNPdWkEKGBM4KYr8Sp7vouzR826eMfQJFaS",
  "key17": "2rV3WbNE2P7omfqz4a12JHdB5Gu23rhgFknsUEqR2DUKpdccTe6YYfJocNdoREgcSeHstgdPawanLewuZM5r4KAs",
  "key18": "3usCew35u4LufLCZfk2YJzehyuJYwvHH9zd3h9fiiQz6AmJo4n2KTHuQzUFMya6oWcHpxvM9XMtry1f2edbXJoTu",
  "key19": "3iSivRBMp1Sg7eqiTH9n7xU2DD314aG3yuQZdPqKkCaumA4tGC6eJESoN1wK3Mr4Hch3JwEjcrkyFFpqBFUXJGCk",
  "key20": "4xtpEfVfq3W6stwbS2HPZa677F8um9bshjZhMRexBXU7HPXxwXvD5DEqcNieedyrgFKMk6Vj1GKm6Y53LAde3exN",
  "key21": "5nsjXQYukwTgdnXkaXNXTP7ohsPKLRtjGVjB1CCnJ23YoDk56VAH5NHQ7WWbwGZ8fwN8vmP15HNgEYtNVRNF8Z9q",
  "key22": "m74SsQq7fPzQwtLVC8numAEjfpdVmDbCFnMkKCsyuJ7MftkVvRcUHUUfQyxjtZ1iibdu2ngBgWQaUkacDJFneC8",
  "key23": "2wXPK5v8yeDLwaDi5Dh9byoavNyNbQ2G49yGGAr3NWJsjg39Q1EvwihNYhpu1HEvfSWkscr5kRcVdBe9Tfax4Pj9",
  "key24": "5B4FXTXe8R7Qq96WKH8xriNCtwUk8pfJhdWFGDqz1pS85GvpeWWsj3FtguytVJsFtNr1x48dwyzSoYy9frkzP37D",
  "key25": "4ECLd35wK2L5Qy8eoAcuSDW3CsL6Yxh3FKzJqqZxLGtg9jyZB3oC7pRBvmQHwcyq4gTB75biRCmtDmYTxQ9emywt",
  "key26": "2wu91NxKXjDULbveN5wgUp6TVCU3xPEV75MA3YUdQHVxJTN7ShCCQe1WsFoi3CsLXknAVhMoAnU2AkQVUA3KmPdL",
  "key27": "46GwNsjiV6d5NsWxGRyLSc8QHHaStCgJf9F9QRPSBzgi9TMFZyTcipLoPk7tGVu1F1aUVgQGUboPWhUKYfRfLGyi",
  "key28": "3T9RpuMdLAZvUhQaqs2r2avr4kXqbLnonRLXDTjef36RxfZRYkCSdEXfMGEuHCNijvJ7RfGWV5YFaNiv8znM4nC2",
  "key29": "6vDzNdHjwkZctay2UpMd1kHgWhpF8oF1h9vjTWxyeRZU1sg7XDtr1PNSqGVGfUzbq4drFSXCjVtaWaz7HykeiSs",
  "key30": "wVUek6kgHXoViTp2mUeKJvTfPd7qeEkXHriGUdcmNGvvydAFAzWdkfZ7ZQwmY6b37q7jprmzhjLAvN46DdbXRw3",
  "key31": "iR5ZF3LCf4FXYsoNqPTqvgva7wYZCwrKMEnVxMNKExtBYhzGRdcmeBqwrbEzbKiHt5iTnibsweyqo5pVQVax9Ht",
  "key32": "usdRRXVueU5vQrBTuQy9wx733AsAKGHZEdDC4qeYRgc9Ef2A29XCRB9FTdku3ZmX77JLm8qDBPK1R8qfZW5q8Aw",
  "key33": "2iyiMkV5MuaeJ66HRBu742UhWKwqgdSvEzJf75wJnnVdGM2cXJcGWk8oVqQoa8nWffZ33cLtFhmfscmYjCbQYbSy",
  "key34": "49vk8dtjboNhiKu74nfkFHK3qDyPZkodfDPFa6oLqzUoCi4nPW1wxTRcDFdRf2t8DVmorHH6L6WohzxL5diWGa4b",
  "key35": "2vxfL2LwqXAQ6b6oj6c3pYFPEXtu4BEfsQbdJ9PLyiL7oBz15vXT4FVRnL95um1NrVhubB4DaxZWPD8gkTrEFJWo",
  "key36": "2fTeHJf2Vq5X6YUyf4X8CpwawksuG8hvRYVP4n4u47fo1y2rSsouCoTyNPZgXYAmZMtGDXvKeB8Cmm1vdYB82xtv",
  "key37": "5Kn6FT9s5Sbj4NBkSpeW97pSA3qjEv3rMZWsVTLPetXaHfMEC3f7S6g3yDZUkT45pZAto8UYx5FtTtWUP8txzDtQ"
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
