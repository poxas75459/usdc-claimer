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
    "4DqhBBGJuwmZGiFzxUbYfqDnvwBJ7iv2sMCaS2KzwTFvG1BwQowCQ1gFBmbAPgFNKuhG2CwQmDGZUzdjHzpmGtBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkvkybKTuL8CLk8Nte227Gj2Rbh4f1Gg4xRNXNDzUYErZA7ZzHCkUzsUCbsAEFtRLPGVXndLpPbquDvkT2KG16C",
  "key1": "h3wEJzopkZ96VU55W1sRw8WLHLT6WjiJ3U58uHhdnTB8dAXSLJtgGfaSbvYj1LgyjHSxphDZRu27wdYoxUcWUxN",
  "key2": "3UEH3pKcMZpF4N7UJrEUHgTDTYWwmhbHokeHWe7p6DQEpq1qjMxDrrvqiGGxrGQyvtcpkhbpD2dNp4h5ptoR6VWy",
  "key3": "4nkHoXH7CNi5zP3CBS7VD1AeLrWZY7Uq8izyTZiwzyHA1Vj624qfGeYjUBGoUi8MVjoAk1N9Dw4EVSKykYoZoc7s",
  "key4": "QtzkBKzJxHUfaDtUKUwWSQKVYBroVC2mKNdqJujCzuz5qFtY6JwP9dUkkCbozquDVQzkjLEE2LVAMGUcUwYBQ9g",
  "key5": "dnH9S9gg2SDJ6zXXhxBeQqQo5c9P32bEADjmmZ61n4rsxKtaeHWnCab4xS1UEKAEFYJ7MhtT7ADVEWKKMbiyYag",
  "key6": "oLRvR5Zm4peAAUD3AssoTJUzoeoaoG2rpKd9TdA9XZcx8AKj5rZfLUYkYXi3kRfjeHM1sbJkWX7gvbnCqjdckoJ",
  "key7": "5V89XRpoifhXCtKyRPkiZ2eJDR5i7i4uEstW5RfvMogm6fSt3BHTsdqrNMrgNHdUdapFCinU1Ug13B9WbANSL4oF",
  "key8": "2pKR49QPN2HEzPXhuyqQP5uTJgXtrU8xucfgLuw2oPQ7sepLGHqVGevcH2Jxn9nXespziE1xMYx22EyUjZ4PjVkN",
  "key9": "5DWLDumCbsxyeRCsxhHmFcfWno2vYCBzmCm5AvTfj25w8VBr7z2FBH2KrimSRZyKGHx1hNEnK4tSLsLvx3RQ8Fwh",
  "key10": "3PqTs2VaNUjF811oAgAiG53iaNexvHz1KM7324SDGg2GFPgTLG5ZvNkmu3EXC13TM7MCg5JkpfkFsRygdUtuejH6",
  "key11": "3hMqonVAe6ToKRvBHiG2Bx7VcSgPcM6aqNEDjWthu6ZCBgxX7FNmHcpUBf3jkM17NpeWCs8j7BbKAmfP1DufVsFp",
  "key12": "3SQe8brEDKwb9pcXtde5v7Ckc7yWvAMCSaz6dx4w4X4WQLYbDzDzJCBrym49tTDEhDcRsK3jCQ6eaFZfAznQPvtW",
  "key13": "5UAj1MKLvXVxpn3Xt9FAjxKsG1gRVvwY8P1nHZhjEXHHsFSnMhusxbKikEZPY73BnnEzSnHYprovMkQYXi4GcnbE",
  "key14": "3Dfin86VmDiGvQyAZ3tie6NuvS9j296e2LUbzFceGRdzDypkF9VhZKpNKhJUnNsdGxDwTzQfc77TkYvXm7jPdW4K",
  "key15": "3MhYfw2UY4VHpggSuPd331u3d99DZkBsCFLTBDEd8ezhXvyzCB7draJx2y8NCBh6wckZidh3D2REtXcmTn8SAvKk",
  "key16": "3zJuc7TCNTbPz9PwBtHdWfqomXBRVwgP1eJDFRRkW8FUakVgcMNsjepap7gZdc7Jx8wGFzdmKCYow8UdvKwuoL11",
  "key17": "r2W4hkL6yyAnZqxiLFmxB28EmkCRbwg4QxWQ1FQJgg1twMuqHwMgWL7k2FCx1kJU1XBFmvs7PsseB9H1W2pAL2r",
  "key18": "5sERmuyZKcXaUbwhXJaYfXNheDfzUVWBSMyz2sKD2C5R7QzzQCLccu4Adwbt7s5yx1ceKsLKwfDgjx9DANZ2TLp6",
  "key19": "fxSGdHr1DTDZ3XgfozW8jatkuXweVy1RxNZvokmHYwkbDtS3QnGuDKhiwB4Mg9NTK23UNLekyx9XcUAaCBuHZCK",
  "key20": "56GV4ETuYGMhURWzED5AQFtuZD3h6z5SNVgRc2iK8LnrAC71H3Xcmx7RtMRDL6cGRdveNnPGTonj59VXM8eeAMRv",
  "key21": "59AwoFDL5F3vvKqDRdkHZZPubCuSWzZqoa1gAFLma6fgN2vdaUT9RRnwR89kRmRVs12ZAqyP55BZ85c2utmkJeW1",
  "key22": "3foWmZBZZN7wEZeQp62eTdV43yURqYgawvMMBY9r2yPMdi949iizbKscg5RrzZZ5ksT4Fi2beySjZ2Z8ynVPsLAq",
  "key23": "2XmRFZVac6m6mmEnwjHveQTE1LEBrcJ9JXPu24B6XibqS2EJX6ExW1yeBq8PZALGvuypcPg2E8NBQ1mhufw3BFvW",
  "key24": "5AEd3EpKx2Fqv1AaDyTZuk12KqPEQFgUkg18rHamp1CByRyZ3wruUBUwAoJt3Du44AQW6YPj5gb82ChGY6dXvFoz",
  "key25": "4mSLcqLZPDcwHLcHmqPcXTi3qB1PuDAq7FQCXJR9jeLMQ87g8ML9y1SfjvpCjyNgjiC46BoEYQnhjaKSUUuhycaq",
  "key26": "3sVJHrRwVvc8Enm88phRVrVAtMytiXLTV8gM6wRyjCAi5paFWaaNTV4pB5hCmWNroFVHYR5ALdoh2zRnhKQivhjE",
  "key27": "3B9UKhr6LcTh7s7Epja1Gr8zMNrUv6fJDnVyEeEVEpmsUEF6jQBLk5PrTnB6qn3qKkyLiLnknPLPKLpKp6eC75Fi",
  "key28": "57wsPJK51fZac2Net5acU4LLLiNH6jf17auhpsBwgrbQntG8PohWasMBSE6ythc5xS5gYp13oNAjcS41H9kAhkG1",
  "key29": "5hyPqX2pByL1xoXgcUC8HQDahtDoqcQJQsqEG82474EZUjo4uA6Gt8iG4wArGRLRsLp3QE12qefJeuLUDja7D87o",
  "key30": "5U9FYtr5DYMQ2LM52jULEvcHMMZUVC1CXS4ZE1Ldqq5UMY46XkG83T1SVEui5z391XXdHPgrabgiSRYH8Aw9m4qb"
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
