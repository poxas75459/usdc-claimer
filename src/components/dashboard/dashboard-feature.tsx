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
    "25X39L5TCShn4oZ6TDrSQ8a3sPLbJF7obDGium53BUnKcdDng1ToaUbaCLXBtc8ZhvDccVX8bfpWBXsBXnSW697d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4io9Wd2TLpE5DGzvRsfRha4atCua3TdHsWz5KXtqsY3fbnuhjK61bYzcQ9jArtyfFBcneSL8QqCTnNvMSyjcfFgd",
  "key1": "2F6D779Xx2yKAknRuiDN8fddDvYd9e5NoKkNyx9iGfhWCMJRSxpC128GqjTYsPMF7zwNkBHUrkDu4f5b8A27p6FZ",
  "key2": "5eXRcPutin1bYKVoQxXmy9jbTHHf2pEWit4KfqnoRCDkQ5ufjtMJhsu8uwmj6ZycpfYfZQDqk9ZJND79JzueuajE",
  "key3": "2zEcAGBQR7JEtdNaTegg5GvGmCe9kZ4DYaapcdqEj9LUht2DL7xewZCYF2BF8htrMoip6TWQBM8HoSaBJKsoYp8r",
  "key4": "56PPrkoo8m1kHjpfjiV3fSSxBSaAP4zFqdDF84eRB6UYNZujp61JkJM6VfJCtTGag18MUj4Eo4Vux7nQ996Sh8ux",
  "key5": "4CWHzwkYCtNQYXfWNdDM1wAyL7ichoGNKi7QqQ14mG8AXTMTifWZazL2BdJwn4PBroQKWeqKvjxi3cFkw6AGGCZy",
  "key6": "RtUd5raLBzm6JJcj8zQJgJZKaFB87QYA5Lnxqn3untne3LqpNBKAgERDCBPdyEeUrRm7WxW1N4i5H8na94xkwT4",
  "key7": "4sAVWQVSTDG6np3oTpUP7AFe7TBK2aWuAmPkbCNAkjeg3SWV8RQUzU1i6oRNWskBdAPRyhS7yyTYminRsKir697H",
  "key8": "a26wQB5XzBb8aEBYu9McjG4XoUGc98aYocweaN5APWq7iTTVbDc7peR8HMCsG93v5YJRpqvbkG2sLCbdSeKZTQR",
  "key9": "63DVRG2A84Sf5jF9tB3htSceEjtw3JVUWbwqpWjvHKhyMTbGNpoN5dYSwq6gTkH4yPcpipcF1qqj2vyw32HVucuR",
  "key10": "2iRnEEzbUyGmJ4rsp742XW5TNy9FWju8kzuR1jABSsh5V2XGt17dKPm88ueRxNX8EV7WthQ6t28JYMxs8igJtBS4",
  "key11": "3P5JZPBtbguaL1i4nUuti3DfnVWcEAGMyNCmPW9STdsvUceBxkFkpkeSnHmDqgkZtxjvBeJoYhH4L1ohyn92ptcX",
  "key12": "64WnNNFUhnkjouRmoTs6XK3fFDFS9c48nwUSqFvwpfpGapgARzAStWDe1Nz3ZfsXMzKRZC3ZQ47URJJSdPMeBWEt",
  "key13": "uCWgYWzJphK1protdLQRVC4mo4Fsm7RTk5axeNSYpFAjr4tVnxiPVAdoMVBLNHcXpKeQVGQTrtmGQ5YKoHqvwwx",
  "key14": "3zWvHEksR5yd1fnpbqKHCnV1umPqwJzjmrQidjRzixE7XH6qK3utG1JPZa4ia3wCkp73A1EwCncuzF2ms8X2LMxf",
  "key15": "3kGH3dce3qhhc9ua5djxEXsNwTYXSn7QGEgMQ8DR6CVgf1oo4VQCCCDuGrXQ4iK44fpCs3tQksqkhRoB5v2JUMtm",
  "key16": "4PFtNwDeBd6X3RgbZsYuMtH4iA98U3ee8Nb8vvpKpAodjmcHNZfk9CqD5AKrAHxwTKfg14JJKQbEACorAizKQjEb",
  "key17": "57XbXgLMMPBBju5N5tY24smtrgRJ4Yc1AzUGYSpUgndeQinzJvxsQEtjvqX4c4MiPD5SHnY8RaJEbZKW3iupDLvX",
  "key18": "5KKCHM2ZyrUVG4H8Lc7hrgZ44DRMAtq8tiNPapQSecUuELhRVouo9nRwNHgq26v5H6Qc54piHFVVHNUdHiEiuQYR",
  "key19": "3Jaw4hNiYwPkHrdGMjHZNMzrViTnd62NGDDQ3YorjE59cYHBi1vyW6oCuCD6Si3TwrTTyuohViyVBUhEGt7uM7hB",
  "key20": "4kqJgdiRCEb6ajzoSh2dSUAwzyLiPEpThoTYP32eF5Ta5waYpLCvsiWHCNh8kgMVCjypVMKc6dKUZD9y9DEUgmtv",
  "key21": "5XKFifv3adwymkrHNFhqG7SDJaUPRtxVtru3C9DMCXg2mh9uiwZ4brfGtvSVu2qktfM5d3RLYjA5RPEvKwsmZggq",
  "key22": "57dCpTd3oXmJ7FBkVghbdbSUuDQEkM2c5WUsSBKVuu8Kh79wvepH522Wf2sfYyNvAdHfsoQVLztCEBDaDDxPrVoa",
  "key23": "4cZzBGYpHuYcmP8CQKdZSMBn7zHdujBUeAT3FMyhXnNYByXiTLS1aMjsyjGHM5Je7P8VDkYME6GSrx3qU8EJKJmC",
  "key24": "5wD8ebFU84j8MwCKPo9QzG6vE66jRfdrgevp1rHAcpvxLG641gES3i5HJ8AhrbrwSzDPJbPHg2toMK8adnwQo6Xb",
  "key25": "3Vo6J2jE5MdQTiKgjzC21rQM3VYFLXLwginXmbXi35FW2UretV342quMYZrzKmhL82CBAyCnkJMqo6MR5VdntfTJ"
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
