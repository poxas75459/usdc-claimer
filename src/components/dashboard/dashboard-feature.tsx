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
    "e5XShrGczNivCLopWzofbNUizboPJUBCU23KHrrsMY77fcdjxHiNetVGKdG4PUZQafnWmsNFfYT1gStZtvNREJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzZ5uEVgHPY7cE4HJYCs7r4cpZ1HVh6niV7pMweq544L6R4gL46bxZUT6ibgxuaG3CNdkPdPCq66ENy77H8sbeR",
  "key1": "5sNL5XDNXauB2bsbsbBbPu97rHLE5BRVqHLKuAAGrpyfBen1visf8CPaAqQUauh61FCwovsm66kzfqbudxL6Cbud",
  "key2": "x3RgG2qknc7WeajmzjTdCwtN9Ba9ZaQ32nRrsZwkoqJUBmoZHPyhvarH9gZBJaNgAPi8GwNvjbqHXqj1AcWCv48",
  "key3": "4Bo5L5MAomtQcPY6kRQmLdLpEjvvNpudvaxg7i3o3CWE1jJC2hdfKG8bECw2LQp8riJ4d5VRprBSDcZLMNzsZrwN",
  "key4": "3e6oeDNjojCYNWyd7u42zgjnBaEejLrCDy1FqgmyqtsK6gUdFEDNFGwpi5nip2VZjqv3mQRSbRxTiCewiFkgMNWk",
  "key5": "4ZmUCSnP3vMCudEfYs6qwXw1t9AknUfAwJPmB66YqZ7AK3Tc9CqYAqniefA2TwNLpMazZ65hykgf4e9xSEAsjxMn",
  "key6": "59swXujob5fRC7hEmGC34ZoMhaPeSs7uxLPjd3D3nPn5P7dLttbNmNNbo67iEaPDuq39xde9z4QbaR977DjT7M8c",
  "key7": "SqVzwJb9p6fY9aDAq53S5HEhYbzg9F4zAioWzHLjhtfcGeDTzsRHTY1kxW3QyESLMHFNrUaDNAjVfrQ72ArP5Hk",
  "key8": "9e5neH1pM7JXkA243EDEgC4XVU6bofNCyoWZHEpvszhqi6McUfBr9ptfWmdDHebYFe9WCEYxiFanKrQCB2La1qa",
  "key9": "4PSgmJ652FnjPLVjAqLr6hD8KTB6kRDtEd3c5rR8Sd7c2YS2DNQbdRMsSQfV1bnxdF8W1x5a65NFjvBG4eVozp9H",
  "key10": "4A9QVjdU22PB1KUjquobvZVudaqzHQyiHRECMpL9RL784WkgmKRWGGpVmpgWu3KTbLzvzuGieWCNBgi8aiigBJ3q",
  "key11": "AeSAtSnEPjLtZXbNwTfX6xL4JoYPcWQjhtn2EbgWv3YYKbcjHFkVm5fywQMUcGqef5R2yHjQaqki3x5n3kxmCHh",
  "key12": "3fBr6c98n5pScMmjvEsUTm9agznTJgwkGAZybYdNwWfuVWhEdzgkb8tzkY1qqQkfQqnF9DNbVGvYzsr9Lkq88LD",
  "key13": "51XiyTte2F7VyfqGVUNe1H7oYD6zxsiajKA8qjeAbZczJzyoTsUaoGntmpSEHjjrXBsyeBfFUcLiTKSQXtr9cDWF",
  "key14": "57YsLxqBw5cv3DxCfKXaFH9HXrKXM7mG8BU8XunL6zAUPCsiHgqghVYsMPZQBQ9iH3nRW8DbYBH9mbqW8qEAAC9F",
  "key15": "364GA8jaiUpa1x6WAV25kz7wiLCDMvBu815g2Kptns8mu7c56fVeNC5T3wqYzsYE8ehn6xYbwVxySrFeAg5XyyCn",
  "key16": "4T7D3qLGR6frAU6AY1J6gswte94mF9Z6eSC9XsUkQWdDMr3D52CTY9pTPP1STSbvJPdmEE75eAKbmoEhCsmTsAfd",
  "key17": "519o38ekJpJF9CtBukZqATRCLWuYVG51gu9RCkc4oc4cYbSvtabkz82ggkWY5anhKRuHadSpiRB72FkWaERRacMD",
  "key18": "46SeqrovDRGCinRtosy6DWtGJXD2SKS5Q9MyqjFwSbgmLDkWrwJVa4kmZWD8T9cHVGTZiedNwpCXRLiyRZfA5WVq",
  "key19": "42c44YXwZ7SG1pRWq1rcKsJS5WcDAtcwG6kJELXSRpAMCiaYWDE9YQPaN8Lq6F7nLAxi6mGzRN6Hzf4Cx7XhoEcX",
  "key20": "61NybTzmHKYNwoEMQH4pKyQzCWAMWWDuWxxYSBac9mFHfj7CrB2nDoK5KP6TTrAWRjpDU75M3NuYrJUwBhgknjxZ",
  "key21": "G16BPKosRF6ceY5XUGjKALodC3Vb5GMGDsrQLo2Z2KZrNuaWTjiWqHiktLteVJfcEcMRpdaY4E1qSkJwYwS6nvb",
  "key22": "24q4ht4HDRn5wUgL2gqf3up3Qvs91LkNBe7KcaBGFK3ndJiEuwY9EAkEcNUwMKiRa8KwFeajg3ZKUKVWHQJTuTGM",
  "key23": "4ymhwr4JVjZCwbZSq8ZhM1dakWKUFaHKc1YcUAGqZH6wJjLX1J3aiM94faggZboEzJMunusXBmNcbCMFctB6npVm",
  "key24": "56KZeqgbHKz53EC2WFJGnB93ZPe8RhtopD4pzS77w9wydWQ4DZVHZ6s2YRPqjNgRBYxoGGqeboxhshLtf3pJAcBt",
  "key25": "57NJk2VR49YjAg61n3DELXzkXsgqAHyhwMen27fta6uijfTE5d3Nev72fYvYpW5DmVQRwemxHes8LUbmmnGqV6C",
  "key26": "2TdPSAhZ955MLL8aoSJLfSEXxTZp7ynZa67cZfuAHXUq5bCTonfsN8bC6mz2MruWdEH9ZQeFmVAqvS3FGbt8ntNa",
  "key27": "57iMdvRhoYoBJVrqnjQxZRprZh3wUTpt5wuKShkRfG4CqZTK1BkuuHZzxPPfjzrAve4x4JsfS62SNf9ATKPi61Go",
  "key28": "2QBvGgCDdETxxEbjzcysEC4xiYc1DMPwMCLdjhEhjrgHhSwRZx2K7DTpRYBmM6ESkrgrcHpdMgQ6pxxWFaVV4xMR",
  "key29": "2Z1L6LZgn8NWenVnCGQWsmcXhtRHp6P91qYoKQFyUxZfNRGaQMT9Xweooqph2LjQWT4aXK7zVk362N6otShKjwuH",
  "key30": "2J4kiR8p5tumap8swbovAMJKCPpPmMqJFP5WScAMEniz8o3qcXefRnNuo8KaFVyUMhf1NA87YPmTvBUgVbZG7VrM",
  "key31": "9GcoN7FRccSZP9YgVPgXdtpHdjLvj48YvtkaXdMTotQMrNd2njMDrmNVUaxKwHXMerCCTzRU3sgcJJZ3nMMcHfP",
  "key32": "4o4qGRUj8gEXj2KngvkMkk8WWJh6bqQjqdeWgtoTq9PiTp3cbyEbPkP4WU3JYq4ihh4rmDgGJQEAmekLrSAF336b",
  "key33": "5vzHb68KEoQQuj9GLnbji5AUdfiW2rFBhxzudvBTBzmn1wVsysEnVTZ4zc5apySr9PmUgtRcpNh3eHBtmX63vHyB",
  "key34": "5SJmKzgaUy6Umg7ih42SJZQ4m9KVb4VzMsZhoYG7hkbhaPpFbf7Bzp1e5TfHMNGycs4kTLw9QXSiSHAmjTxUxPZK",
  "key35": "2k2XNrEsaw9JFspG69bEk2iF51n6vaxkn4VNVKpfy1Dt6F8duYNQpY86CvQGx7ZHvaHWtqTAEnzWNUXZybzoojqb"
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
