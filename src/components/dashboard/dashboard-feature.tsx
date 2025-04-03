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
    "2kLEo7bxMfAd6pUcMpdWTX9Y8v15Zo5etm5tuCjjiZCc8TFbm1G61zcpsS39SLgPUH9JmmcLeAgRyvpiRKom3iL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Cd2myCdsWRTqGSjtV6Wp9qJ67chXJLYvQ7QCtL6HxhtHM2oqJG8JCT3PHqzWggQzBXhSaDFoTMDtefxkuQ2yf",
  "key1": "t7pgDnD5f2jiaxLobH5pY7LnqkaNyPMDt89FvVoSJrw58hho53vxJQe6LdwipnXGU1jQEDPqb3QKNKo9Jahphrz",
  "key2": "NRzRQx3bx7aDZhyu3MyCeNzdLdvawkkptLAtwEiBBxAFPX2H6uDLrEwG8dDEgL7vBMPJ976LbfRp8Fjkj6AheCK",
  "key3": "3jLkS486AYunEVBVv3FiFCvxZaECvvtigjovbLYcabjrcL829osaikrBGS3fpFxPrScJvmvZgWyR52r3V6h62Avn",
  "key4": "3gAtcCjxwM83uMsenhq1DASg6yWhDAHACkfw7KewvrvLPexepkvafPswC4ejF4WyZpZ55h8e386wJ5SJV8gRiE7U",
  "key5": "5uqTgPWkWqxresk5Sym4RcZYGEwSFHazwTbMH3quVRksep5VQua9YGAABKnF3CbsFgKmyQa1zM755syuk3Zg8iZ2",
  "key6": "ehArFZUy5ZqVd4SjVYVhnonvza1KDzEg695fo5tErdm7be3cPES3TtkAiuKMNXk2Nw2UusgoZLrigWbfDZjskUy",
  "key7": "5TrU4ZTaGDC3AxRqyMJccbUtKieASt8BTXeTmY94UCgEX4FMcLnLJf6HpXKibJXkd5gYLLKuLMh4oD5VuZy6M388",
  "key8": "EGVn1YpzYZMJxnSi1Wvt3uS4D8aU8Aas5fnVLQ4oH9hMGH7R5bHfDbtE8hy3txZzVwbMVkCKK3jutqS19pFF3fS",
  "key9": "3HWm513wn2ho63FebqGj8mJQVnZjvnA1b3z6VuYaMrBykLbuKjs4A3vLYYaTCEArjJGCZXUrsneRySN8H3pz2NZF",
  "key10": "4jhbnHiYXP6fsof6CfocYrVkdt5774EdrLRbDgwbdxa9LBVXmzoMiahjNEzitgbv7XeW3eeb3cpQeYegZ1TDw6Zn",
  "key11": "2sdhBEMoXJuF4uqfzqZjVFks1it2JLQgYhgRGKNufaZ2QX7GmVhb8SFNBNKCmygBeivh9urCjumB4c5m5uegobQR",
  "key12": "5jMZdyz9piSVPXEfHnNVrF2HXLQMQxUotQ8e538qiZD464WFCN6xmzuci2Cou7drSRUrSZtDTxKDgVz1bzvUABTw",
  "key13": "nUYYjtFroPq4jpx9UXinSv8dEaS8QZ6ZMjgDaDW9EUAD397Nq5v8xRE48nVCS8U4exy9KNgLtjaoK1QQGWP5S2A",
  "key14": "4YVYRrKGoYWKJquQW9NcesgiEVvF2SsHTPFtctupZEdd7gJvDT46bxeS3jkuDBXZheWTbMzEgxr2oUSPt6AX7S8v",
  "key15": "UcEXmVx2yk1V9bsTutZFrHwDCNbddy2JyLxt1G8VyBdZ8evBZjG6ezorbrw3WQTwXkCktsGSGzDHE3YRT6wKGPh",
  "key16": "5F4AHbRSDLt9GTbNfFHy7q6btxujJJndctn1GC2tE7hg52cCg5KB7Rn4VcPSapbWJ4WFjaQrtkfz8tfdDzPy3Q7D",
  "key17": "2yUSv9xubcC49sjVtziAj6qGMU4RiQFe5wg72dp7rmJ78gGGVYCuFXzjXhuvqxbttpipK9rw46GwJk98oD7yaWN6",
  "key18": "2VWkgT6mGsAXvzFDqxg96Ri5qgYifJTZ6evBfgJCy19CTmEiytgdR37vKFPQKMNZqeaSC3GN4PhJkmcaLFSnedJo",
  "key19": "5AbAKckAoUD2mqoSgbvrkyNMY1HwtYcvtbA5QFNyq7AgcfxiVNkABZP2ovgg3WrD4dA1D8xrCEhAZJM5jP8maMEP",
  "key20": "gBT1zDoTnWcv1mLyYmJ4qGRyqEQaG2baUC3iZSzNLYfqjVqNVfgKbof2upijk6dxh8D8Fw8JtZgUd5d1QJnv2SA",
  "key21": "36krnTVTje3PQKiiSS8wMCcx2zNQnEVPyHefFbqZJTwmmLuD7BnZo4AsavNuTiwwwQ4NW6QQ1dPTkk4o1PA2Vc24",
  "key22": "5LGCj1fuAaVLGAMENr3BLWzNPb1kbApPuktoSpNccXtpf18gPnPfY5BgAK3eMy1xzXM87WAKig7rbTXsUEp4D22R",
  "key23": "2UBP9mUpP78dWTB71BzoJn7jdXZeTLnXaYcW3TWqS7qCgeDEzEJfTTUEMUzdYvHhPgHgAkio6ino8VyHYw1t35vX",
  "key24": "4zGAFbAoCy1PjAnMJPCBThbZDU3mewdLnRXtQiKnyuNzjxDCS4cpusVKguyZq9Ut5nt4mRVXaM5ykbR2Yghi4S4p",
  "key25": "4C2jQjQTf15raTDxCzLauMAY67kD5cFpu1VgU4NUhu3Stwwv1e6wqtUnjHH5BJasyrsmXhbegnHrthqoxSAQ5t9H",
  "key26": "6Z6My33vDJuQrizsrXGwTkqucMvxGmDkNK3hqkMgJzWGKXRsDPjoY3Nc3vp9F93SMBzfk5JLen4NoEASvuJFk2D",
  "key27": "3mpiEARcYxBSaaVHXfyXuQHxRW4wQApaU9U1jUgr2wk3fe3tPT434u9tcixtUEuqyaYyThffEvY6pixP5PGwzjVC",
  "key28": "3CSJXA7tsxJACpHMx3Xsk9G6E9C5BBiC7wmH4aaC1oY5Ja2dNBbBGJSkSBJprddYdgRZr6DLJ1HqwvTsj7TcYT49",
  "key29": "45Dk6giiYbb3K9eR4Gyrpt5maB8xLbRZxmzrbaVRxjTELg541vZ5HujyuymjoHL88YYYK9JjUSYvDeLWpAvy95Uk",
  "key30": "4YKoQL1MyRfhi4T35inQpFUBcXKHrV3HEMef6toypvFiZmGAsKAEmGMNkEmDMg5vCByBHHTQp2bH7U4rTYDsMiYz"
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
