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
    "2bWVappjkSEK2ZN5mRZvchF4PYKRx4QDFG7VS1aYYTkjxXMKvmHjJNTizKBAXAqwxqGxWsGdYaR19DVF1EpLKCXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGzwVtW8NnCt55zQFtcjycL8roMEvRk2rFKN4wVMSCzwUvZEDq6xFu7FLUTpEUwLM7jXyZDNRCmHASFZuATKFSh",
  "key1": "3hMQdBuPSfNChftCdbomAZLmz3mdKFomkMFkb9GroQ1Wz98d6SvpNpWfJdiPNHCXmAZycdLjy6aWxSArATTNLrLJ",
  "key2": "3B1qpRVugXyZyvEDgr62MMx7ytL3sor4SDamARvqLNtZeXHXKPzDa6m4cLbf8ekLWdWVGVneiBpKEaWshFrUu471",
  "key3": "2P7hGQU1VM9iKkyrDrGDfJ4M8UNajBt35jBGfUgJb3fdXdWBZSgJX2LUdM8w53Q5qxRu2eFsAfXakE5LiyzkBesn",
  "key4": "4Hv839eXSrpNQfuDoxsSjRrTQxaeHhszUZRMkfYcaKM99WUpTU3eTesWkXmbYh3ydV3dAbd7Gdb9EM4JedCUxZRN",
  "key5": "28mZh8s7vb1azeC8q6bdomLCnhssgztVGSrSCsFC39txDxYBgHLedJgvWpZ5zstmTiaTHtefhDGPpGuBhUEs4Cg2",
  "key6": "5j6mLEXgyXgv7LDSTp9XqfLw9qn729WvCGcSK9ejz6f1yYQKMF1RcHLLtETdAE39RwFV2XCusdYTC3znUQ1jsoX6",
  "key7": "3TumNULwYw7DH7Nfbi8cCXBymbsqkakF6WSYth3DcFoVjbJbimzBWjWjRXwZicQbaM4QZW6TrWZxxB4zA5648pUM",
  "key8": "2sfFU8sy3qUfB9zfaZ5KZz6dxzrTL4819rUzGC2fe6PddKE6G2dp8eCCxwU6cow7cz5yWJj5BUArXkb7pZ2veTSo",
  "key9": "3bmn4X9UX9PPjuj6zPMEFmQKqDtMzCEb662cQyJqwzjQ2S9m2ADkFUAX3CxVhKjnehQgRFYRgcSmsWgijzwtsShd",
  "key10": "iKoXBcZb3aCguCKo4z7hRaqfwboxoutdqE6JQVAMbxfr52XpEWyCU6VjPwapXEbRM141mVcAnxVjhJ6pZGexzTh",
  "key11": "2e9S49HxcR6wNTbcGhn61ZAig2niwL62XtJ7mYNApW9zbTeMaeogRhFN4J8ArDBaazitcdJg6LPJJuSFLtcygZHo",
  "key12": "3tUFJZwgdrDXjn6AYr5sZ3WqqtRbTe1HbKxiMXVw9F2afur5P4v7KGGEWTGAQPRLeDvSXgkap9SmQy1SjnUXqas4",
  "key13": "5MU2kH7YKBU8wvnzx9CsCvbRKizdezQ51f87934TZzHiaRx2eNTjMr5t9u8c33oTd8bg1GGz2wU8ujwDb19XPMiT",
  "key14": "3r4aK8i4piuqk218i6zyCVDgNiBmpY3doY3qh8juMDBSXaR53SFmtTS3893YXPXtUWU3QTTBLaQryRpm5qU1eAEX",
  "key15": "5GXcg8L8Pn5EAHmBhGXMvnooNepDV4cR2oSQuD9mjs2EoB85j8oGaxMug2eXzAhihbq7cNjR3wrd4ctxcbZjaEx2",
  "key16": "P62UPJog4mML6LPrgBMreMnYiBLyTMY7ShzpaFE3eBHZ6wPV4eQKyAWBbdiXjZPVFEGB3jKCN9qHHN2KywBRDDn",
  "key17": "4mncpJDmBqcGz5vBRwJ68teb4SmT92R3cQ78SKbUYraP8WBLwETUb7Nxtj5bCZxqFCx6PcDncgMMjynsk9mSsCmB",
  "key18": "3eextoC2LbwYNLH18r3yChAEyu8TvmhfnLAww8TJeMxfigu7LYid3yXHcemev2y1JfaGgSdjr4XFqApPeThxEVnq",
  "key19": "2m5YyXBKH47M8kenJvpanvRHF4xSvHx7wMiZcXECGUBEzEPd18DZsXWFPwHG2wDnTKyM6nd8YLZ9WjTzk4XsP7PE",
  "key20": "2WeQD1cv8Wv1ZLKcsaF1TupKaELCvMVU3MHPX1o14XGKY9AZappqn425ecZMXWAxkoK8vKa1kni3jorcS4cKPUoV",
  "key21": "fJ7A26kQRLz7T2nxQBErkhfdAQseFSmbXYUozJbuAtgLNktN6ckkcFqhFPhXWCyx9gr1hTuZXfEyUtUMXT1V3HR",
  "key22": "3FUZsZ5HjCpFJcGTrJXtYGMaEV1JkZeWX23jDvNqtQ2ySYBve63Nz9bW4dLQPTrR9GQcouysvgrobzWkYzE48cX4",
  "key23": "55JwJhbQG2DzX9aqxaMA1VQQppE9hd9gVxZFYFEtCPDUUdRr6iYRgkywqpKyaa8A9Sf5Gvkjc2unFWrvuChHAWw3",
  "key24": "Bi75Gd6WYdrrSMqcVqWUZVgzVsbe25FkoMyLK1Nq6X22ubio1ekZjeqSLEGjHrN2tYmyZ5JmSE7Fb94LnrCc3DE",
  "key25": "2Fia4kzVjeVxMo1Z4EExvjgMaNFuj7bVBZRHMxT832UnSqYn38WtEvxwAYba7FDyPo4bwDazg2ZADZjbSWu1Vfov",
  "key26": "5SUbLNTGrD3RnCmRacNie4zsW9MFAD7bj9JEtnjiKNuYtgxCBXV6QastNPxwJwN2RVPW3YbQffcQ9Ys4AgBuC7VD",
  "key27": "3VVnVrsBmQECMhuGBcc8GUqj7SvqpHVuE8Z7x5Am8eNp7HevrCi28xd6EDENP17UtJN9XpXDJzsZYyeXSLHRQ1bw",
  "key28": "2dYx63v6bebCViUngNcXXqpQ8yTXWk2St29JWn1GTQNMiTPpn6jhvdtFXPEYWmJBnRYG4ttkmc15rTHoXieQgM2F"
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
