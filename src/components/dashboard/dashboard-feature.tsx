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
    "3RhtHuPqC4rhCFPGG17bHEYgRbEu8yBH33AtR5Dz1e89GL6oszkEoYpHXbuwBHD1bh9aPpKvpwgWSEAjp5SPAjeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6CZu2wpqgxjEk3Pgigr1uPttuq8s31Y3zCtp9foMpFw4qSAuru8qbhDNPV9ZTVsttCrc5qyXEipKh32SQLVXEj",
  "key1": "2zCDuWvnTDL6X6X2HRux1eaiHrkz4gzqcUbbYt6wUPCWWFFubG2U3K5ciqtEVhD8odzEMzhF375dDcTvYkgoW4Dy",
  "key2": "5PEK4oxsAZ242abuxHgr12JLgJmC2jbGKemJ4hnpY2MJ25HEBBtZNX5TPtBusfNrGj1L7d3RaJavJuGbe7YNZ8Fk",
  "key3": "2pE1zAdjD9kLiGqsPRJj4nb11G92hM6eqT5vxKhSptuiMwhCz4Lg7AKYesW7de751eKGQEM2N3mpNAuHbQ1bdXbg",
  "key4": "4MQ9hxspPGJFsiG116wxcpWb1nimDavmKPzrYC1Jw4GpETPAZnoX3Pkc5TH8mnHKnWf7VhBS6daGUQzv1gm4F4YP",
  "key5": "4jgaeKy7pmFzK4seQNke8bLGYJR4PG7A8Kjn1THBrKamhHRNuNtZSL2ZCeWov4kRZB2veYssTWz7qLXDHVu7ymAE",
  "key6": "4QoSP3pUZxShSxurhuaxQshQjabskEeVmyXo4JepPS8ck8A6JTwwAagbTvnrPA11qaMc6pDwTN29aNmtaRBua3rf",
  "key7": "D5C3q7Fr2GHg8Y36fq3UeCqTojGusEacAzQA6xZfptu4YLox5ifjvX59UiCJ5VBBy7P3G535H1J5rVhmhTHEA2f",
  "key8": "4GmF71CtnaGXqZ7JWmmZreBoUC1qZkidVVTusv42szMFzVQ6anPRj69HWujqmEx1oKfwZPt3eQf2okGM3p8Sb3CV",
  "key9": "ZFa6z6viUfmREd9VrpMGY6SZQtSFjqxttWN9rUNme3GSGBmui8K6jKs9NTSEHGERHp6ToyENxSmykbUSBsPh4AF",
  "key10": "3YaZCUkXR47gBJtzw58tX2j8by43EnUPkCnktut56HPvhgnRNkjXA23AwqqaGpapM6Wp9gBkakQPar4E53zrPzDv",
  "key11": "45X2cbXvZED8jyVwhHCMQKjTSbP8yzJnoWZeAK96TSJjvjeqsj7xZPsW1oF1XMQ2eaHBABDJGyUZFAy7mn2VufSU",
  "key12": "5sQK3Y9CcfEJVhEELExt634ygdfZzVJ5xTcP74vm4DTXz6ydpToKjTeinQkyyfMutNziaJNdB9dTDqca9Szcb8bF",
  "key13": "3Y7ERL5Yn7JdpTzYcJ4WDd9FDoCLzX83SYGS36CS7vNUFVkXKnwXkxBsYGcAufZtz7BUoTzzUMC7X3E1gM3pHfAZ",
  "key14": "4ghMLVUd5kXrKn1PHUQqXiDG7rr3ehUwsYpfMNwj7Q82TYGNhGxSH5US23PRxvXeZ69MtDvCRekuudjyaADMR7Ma",
  "key15": "3dh7KjoXrQhzRvJiLAtaz2KX2HpcAo58d7cUvCtLZXYv87KSg98eVxopKA8KFjRmPv9o6fYDRjHZW6Ctccfut5J2",
  "key16": "4bmQPHWA46HBiZWGFmzyWNPKQwwdPtZbMD7xTWG8VhGuno6GcZWKurHrtn7BWPbHXRdynPJhwTYjN3wd2SsBPHfX",
  "key17": "2uLEp3KJodawH9dBXjTuDNvKkSRehVaFYieiDiycrQxaqM8mUJVS6FTqhRsSpqWeY7RGc6MoVRX4Qnzdxcg5P6HW",
  "key18": "3qSruTWmATmeLJNMBZTRYyNDPNhatGXgsihz2meFJvdqZgXy4pWvWUTL2v4UX1C6nrriaQduwNPppzNvrsw9FRzA",
  "key19": "36eWHFmZ9nzkEUw1s1xqCAzGMUYpTrFCKMGwQ3QyH8nK999cnX2LKtVaFapyk1jerAE8kUNuvUibyxM8PNwDaN56",
  "key20": "2eaQNfNAWKnyeXn5KpPSXkkxrwfeNUcu1nVyeV63czufexw9EPZ45Kirsd2Qwq6mJiZUtr2zcPEVKNRK5i5bzsHJ",
  "key21": "4PHWeWq1YLS49RBU6PTV5ViiHoiU7GTEW1gcwBeavwJjL24HacacHcvHRjrdaR64rij6B9fk8aY3Xm6vYN2Mi8op",
  "key22": "4PMQT8hspbzHYt9YBawD5JD2LzzVBpcv82i3cRMis4WbVQVBZR8K4exSgMyRaeQWLcwtJ43g3EbCrgLeJ2VM2V66",
  "key23": "3MUn4nrm6CNgn5N6pJBhpQBC3eP3kNWS7xftvndsF1Y1R6EpaZgm5rNmRJYDQE4rd2UBrjHCoYkJ5jSd682t1jQH",
  "key24": "4Vj7FfoigzR6UKJu9d42mEBRZXzASTTLG6ZKDzwiARV1HzpXdRSwUGtyHKGwjERP1NQkqn8zemUzkqxXrWwgJ8yr",
  "key25": "4NS4WMke8CdpRW338r8MwBZmybEYDHS3w4PuuiYFmdzQVeFnyfAafc2xPDpNFegv6zbQroDMSdbmN4Xi5nrNVBan",
  "key26": "2skpegcRrfqJ81TB5kUgTEgCqeyRoavsXiQXki32oGuMaXHnFRhGjfHcFfCQD2Euk9Bp8fMsu2tuzozP7NqXcy3T",
  "key27": "2HkkNrDr4XJ5V46qKobDNe9WEyC2eqLE3MpMvgpTA3DEzcsJYdXCVoUVvoiZthgbDe5ijf8ffdUDifrj8YB3sUZ6",
  "key28": "xkA1dWoQq1pQY39Kawrib81FBFnPWKEan7HYHmN3K9k2HvoQc2MGebrVPZWAsjhBdTF5AcEetSCneBNfohpFuig",
  "key29": "4Vu7RrrnycabARawbq52TtWE919kcPg498g2aDra9ouT5HR7ue2jEn6Unbbc4C6ru2a1YhjNQH66VeLKstnSancR",
  "key30": "34ab2a8bviwLNW9NJhs7uVHLLLDKe4Uo3j18psgx31QMXBthZVgxEHv91KZDQ5ZfhcdgcqYN8pT6twen4v1ELogW",
  "key31": "4Haxmuxndv42WP7vHbuWfdRjjS56RGjVPgrtM7xJQN6EZZ8gSGXMdYfChPqC6TG3xuhKU9Vx62qSbWK7MNuNG91Z",
  "key32": "34TqnSQ6dn1iZk9vL6ST2T1v9wHEe4pu1KfiPLCEY2B2M1PADt8opRqXwFiGoVYzGaLbHHGV3Vi9B3PHMiwKs1JK",
  "key33": "4uUNxJXKKhZ4nVs8fv1wvzWtvGgDafjYwEDwSdQhqAsodfB6QpAwZZpXkoYgVgh7jCJ7GA8Hu6kg3erDDhxxnMNf",
  "key34": "BHKWLkfk9zSwdXt9aHD4RYkkjNGp4gce3qFFqebUgrriSSQe1aRYuw6YspWBo6YVNzFJBrFxqsrRJYyXzUeDa3h"
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
