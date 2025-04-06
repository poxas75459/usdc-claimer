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
    "5fcpjjRE9mgqXdNwt7UNNCRGZdimi4LA8T3MFgVW1RFfGfCmS87C8fLUjaRy7Ct7Kq2rkkQjCDSgsc9aySVupmzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JdnSeFpmmMyumrjupPhsAZbkDxiUpf7gNagGxuAijUYHZaSvZjEv8QJN43i1FTJwTBaoFeaHvGfoB3GRhbHhDGx",
  "key1": "2gcLd9t9MhWSeP8mXjCQAbVbFbPvefqS9x3ihj1i5wjkncUkFEePRzP71hxxnG6kBJPyujwrGaZr4cHnsxmZ19Rp",
  "key2": "42nHz44vcxvRPVR4NKbXFvwMGGsTxmGSyfP21SvpKaK9m8GjdeW11ESc8ipk3xkZDtsrNXxVXnv2wdXJUbrTPWPy",
  "key3": "2uzJ4HxBWgmPbwxuhABL5Kj8FaLVe8s5cUG7m166owmEK5N9JJn7xQNG6k4JLkdQNppWUTCKnoCQg2YxH4wowTbx",
  "key4": "2f9521CeryPYF66FvtmLWuSQGqN91DP7LC5iBpUTmGzt6yxEH6fD8TVpUWiK3XU2SpWXyX2RAVJZTStBYNKCxo38",
  "key5": "5NFDoRgJ7CjtxMWQX59cuJM1ytyf9o9kxuD8fiRBDnwayWy2owRXG8Q8t9pLzqPvDBuGA95XkRMXfNSxbJ9Z7Dh4",
  "key6": "3DFKxWM1R1VvJpv8DA7iNHpuhAnQuek4bPyjTAj6TDvhh9ypRdmPtkwpGrLRPkNuX15LLgSrh635nykU8tzW9zvL",
  "key7": "4F4dwUzdiuymJGHLZitgTXrzVpfUKJvHPJkqAqMQefFwbeDyATS9i3Uo9UPsCHgXqvoDy6oAYDoHj1NDQk74VBAu",
  "key8": "KSXjcUZ8RrfSJZkLDKNNH1RQzE6jVyS4qqBJqGBUtZ1F6uXpS7swCVaWjC5sVASARNdqKMKudvkuQfA1rtNfbBU",
  "key9": "22MMYnSVXLPagHdKjHhWCqVbrPamNMs5tDsFGrCGYex3vVnncoJDsGxzjQcc6rJ7DNg92fwj7fGrCsT2B546zAUx",
  "key10": "DrhnMiYQuZxzHquf41WT1j6qEswqh9aUAc3zW9LRAYamq1rnDLDZ89m1Nq8hBgRp2EKYPzK3CBY3kMNRqB2Zbk9",
  "key11": "2W36gU9sXBtTDEKABhmU3fVYjWhYL2KSoYMCzqSTa8A3AanUdCsGCXLCMeC4B8BD8Fy1Ac8jf1CqdbAuXZuJyM27",
  "key12": "482T6FS99jHFq8RPks4vjgCgWCQSQ8v2NW7fajfFM4TDAxP9cBjj8xmP7Eirw1qpsgRqzYo93vRJ5v9RdAoz1hkQ",
  "key13": "QkzTUEe8UXKGcQN7JqUJzYhqUUmLBJo7ohFwCPgZJUjzXfoCp1niigr3AbuLAWez6kR9by7kxbrTioVsRfsBCmy",
  "key14": "3S5MmtSQdJhF54ZVgzay79Fi7NUXKFr69C9W8b69fkocEkKeemyfYNA4aW9uTjFXhvoP7yEvgAjaaMHKoGfzzbXi",
  "key15": "34KBeZ7xvVtcBWccXCiUxx5oaZS2RzYxLQ7d5xpgJAQ9Gu2NfC7GG8JtQ2NMFqCC96PC9g9KANSxEXqDUZWoRs74",
  "key16": "5UDFTPpZ59ywhvs2WdMYkdCMtxxnbjgtFJS31reNj1ihSZvathuJQ8SHgE2PPzUnSK1ng7ZVnhubHcRw6QmgynYA",
  "key17": "5GnWHfNSoNCUMHzCcWcySgscCug9XM4SvEeKKc1PCr8hNAYnNd1RxsjXQJrPSpkACfkcsAgSCZa34zuea2eQwNrC",
  "key18": "4D9R3ZntGv1BaSzfa1D3oARBsi28mS3fFex69F6RDLzkBBxnb5rhdRWk4p32s6pPn3xyiXhfApWger8oWK17sFRn",
  "key19": "2hDke8hwUHL6SeYXCE1aCa9tYyUh6FBNTEEtUEXe7cZy4dLN4LVS8dCwasx7vcLPUd1pwXowteuKbzZDorCbhQxu",
  "key20": "2hfKKxb8ZyuvPqFuqmm4Cg1gLWKZiVu6CjbEyANo1evGbp1B2esuoU8fkCa6nATCxEG7HKgHkWph4hy8BwUuRpSD",
  "key21": "4J2erbEypAKaRVfuv9bVHt66uoXYXMTsJzHMX655hEqKotGyXZdTiJp5GTorPMtDqkFQqUp7tDH2gKdh1XGZS7Az",
  "key22": "3Se9QyEovbGoFY9tV35C7tmPRtU6okPbrdMMrmh9JTYGUbtHAyAco9gASDfqAAeTs1TioLg14M1PJkyuzyGgQ1Lg",
  "key23": "5VtKPuciToUBRr3XV7nQg4zjEvQwgxZMgsrKkQnMrAs7rxxhDFtxDn44vAgNJnNeutCpQGg63pRdRXERVFB1KzdN",
  "key24": "2PoovUiTqVnXNobbo6neE2QamCSaoQStMJQikU9iTea1aBNTxZ92VYpKSadYHL98KxufYjLoXxTH4GQPVxGamfe5",
  "key25": "ByEoR591ZSNAifAJ3zhKvdPKLHh2DVC1Aqe9uoLxaBBTiZEExTVHF5aDuxb1fxbN9MyHP7grNtvqtGJZPKmXG7W",
  "key26": "5bhkYv98JsC6rN3Hk2MaPpbm8bqZqip5WcYLAq7WrwwRaFVTujj5Lwki1cm6DsLp2JNuTi9vxeMmVwhN6zFwMHN6",
  "key27": "52LQ9zH4aYYhtk7seRgcxDreMnkFqvd6FG1PCBxTbiE4H2sNmuy2WZ8SnN7QMr7nKpERop4Hhcf6mFDx6tgCvywk",
  "key28": "4RaB6t8nVDJYWbETmZguiD4JXsbxid8Djss8v5pdJHCkcQJvwvcfjdvMXfKu8yY1LtA4EBkNayEEHzV4ToymQZQM",
  "key29": "4bjNG4xAWSWujmP1tqNu886vubbozxgPrGTPHnDUcrrm8hJnL7qaCFsPzfhfHiYdivjnSjUKfaE2EGZDtNs3MBPz",
  "key30": "2grDGue6RDKS8yxtTefZ3P12b75LtHkuFPXZp9s3yADWYmXPJ1haYqGskMjL5S9dmqjZhysgQNuY1CCKgBypKoN1",
  "key31": "2eNziaaFPZExbZuEPy6uk76B7VnokiwW5WWVR1PoMsG7VAM99CkQhnxo9ESXVmdRysn9Vt427329LVAwUYqw9gbs"
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
