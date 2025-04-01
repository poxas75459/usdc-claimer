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
    "2gS8jvd2Z25EQL7Qy7LLrkzD5MJcLcVL7XrCfqtPpSgoBiAnEN3TcSZoc9PtRdK7yJgnMBhyw9XCvv2wusQPao7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKh9WWhaZehgSn6fpWwMQLyV7CLMmwneMNdT4hxf24Sn7Psu6AisWeVifexGdUdccgsxznp5wbtxs2FaRpjXoEa",
  "key1": "pumR1whEt4HKzajWpTkNGsJit4XNJoEzCXPz1GLU4VkhfyST3jRMAqoWMSfh6CjVtkqMTmvZFRWasgspwSFt8Tb",
  "key2": "36EavU81eLV7jciuBnjKhHvdQxeUx37AdwNkF1szW7EKtzpyo9VH8RRkxbebwtHehWLek3V9Duf3FsAn9E4X16V4",
  "key3": "5gisLVrV4HUAhNkyShJSnCaLShxg483e1awnEYByabRjnXujv6ciuWh6D9EQKtFTCNwJFJvYBQaYvAa4bZ2B5Wrp",
  "key4": "4qogx4w7Q7YiEYPALd2kKxVJyDVHZjFbC9TWDfZTAoBNWSxP52avtTGBse6vpc5LF7DaUfHbSUGseEwjpG8N827F",
  "key5": "6R3nHsyjYyzv8fi5G3p7x52egQAX6JP9Dkwu4QtF2zttAipa2JE6bJzEbaw6vy6hcsXMquztNb7DzG9Jzc8fRqb",
  "key6": "3ikNiUxbrsNsLVREgcLYCNLgjecMQ7UCsbDqkohhxbFxZNANVKJXjNYMpqpyGgADq1fo7ucCTiFSdejFijA8uG21",
  "key7": "3Htpn5mXpNzZUR21tHbnd4eGNwRBKebLvKgdAGbdia8XE82JDRCgSgWp4gWErP24q7dtfpYonCEYg4pVzKhJpn89",
  "key8": "2A3DEdVxwWV27KyBjkHVqzRGwqvMp9KRu2TaNnETzMazn7gZ1VTnKAHiPKSPMfaXcN479up8tUWBNCPYkRnv2hC8",
  "key9": "4BYoQomqKhpg8bqFnJYidC4wWjPrrU8Vfb2MdSJumfggqsdpmN42YRcvcwfUDCGyBxKdcaHoQ8jcRoRjozsXSkof",
  "key10": "5NgujAQTVkw5YPNuLB5VbytZ7TtB3QrH9LpNEB1eW3QsBUhdqYkZ56ssWVKksBfhimFEYquJmtCEBJM8Kb9fNUA",
  "key11": "5hhh5TzPvKCk3rVaYvEacJ9SomqvkMvVFRKrYePHgfQUP5Sy18xZ93gqgHXV5fRivE4MytnmdcFfCTUD6F2cpKmo",
  "key12": "5wZgfN61VHvc1eUpR6rTuCYAD2N1VLEJgxxn8Ppe52QUERsEsFGwYg1uecTGwAaXhchjM9vKeWyaAiMFz6wx7AY3",
  "key13": "vvB9sZtrZNDJaMC8ZPPcWZFrrwckZ5Ma6dxrkJCjuHNJso8rvnVzix65vrWGnen268e5MVQzYfyx7ooN3sKW1cx",
  "key14": "64MrXADejUSeEzbVcmztaCBsGaYWAhZAXxNPbnAmd5p354tu6yZTB68Cn1duKeqeBDjT1xnbxGSVp8fEhhpzqqGN",
  "key15": "5kUxoAk5pXqwg2zUBdqScWQV3d2imgUdYogpHKagACwx8eGsRgDgU3NimbfSnaqcjAjjvCC11mKHahfJUC2gRqUj",
  "key16": "2mhBNMRy3vVMqcDbcG58no41WknoD12Gzq7SniYE7AUUerX9F8CX4gRiyhum9VyAar51ayfFd5iWDP9S1hxHcFrV",
  "key17": "4GkH7p9uzRUGY8Tvjijtk2sXvsTYR4rXcnEtqtAjZqGizUbnRGTW3RE6PfiyX3CtQanDyyFLSAXptcgozzugaWFZ",
  "key18": "43VaEGRAkZB4BJpPbRLtai4a4jCFQ95ASBURzM268G6QgNFfVourMtaqLYWGUk1GYrKt2nSdUZ4ooAXHghT9TvZ2",
  "key19": "4ELdCBecTxzJKrJ7yEF495PjMzqTiLh7t6ET5LqJAumR3ZPL4ZjvUZNB3x7U4ZmYsmcpFH1ZY426aNWFd4iu6RPr",
  "key20": "2a3YGdMguEu5ZDvJJjivhkv4e73muo1X26P3b3WUAHf43u5GjH3QZnTngEt5hHebePoyJXvKuU49dTRq2q3da8EL",
  "key21": "3QVFWN53uERZNPPuUC63WM1ssGTExUeHtvNW93dhNDzPeXsvdHV3ZDU1TG2Xj8uLjjMNKmtau8SHZfpUzoRjJ59L",
  "key22": "5hrXvi13V3prJbWaP4ryxrCcyFujhsGXXpMCtc19EzxxK8Ttr3vUvEdg1LPieF9uVbFCYeNPFdDgVtKVsnuwGbMd",
  "key23": "3QQDS2ZJebstiV5q4vBTq2UNcD4jUxbUWxeDPGFxrNLg92ssbYioSPyZx7paTATyedyjPCrpCET2cNd9ErWPVVKc",
  "key24": "5wpUnmuMideV8ev1Bbzs9be4nmmP3w4U2UizFGBPhtyUMC6GSCndnRGvPShSETBhsNEpJGJiC4KLSBkDQcuJUHLM",
  "key25": "3Zi5aozQZL9DMUtMG8AjLgSUzHr1WHu25kR5ujc5mpPDQTC9Zn53h9Sgwu4rH7aUTtLUjz1LFB93JG2sZYivozLs"
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
