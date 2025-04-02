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
    "5BQHXgW9mfmC2UUmNF9GkanMhEccbiHhzDTRfaygMq5ovKmnN44THM7oLJqkYS81ere3GsT7F8upqqTCnB4Aht8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBuParNooLRWjzc9qeeXfDFMJpd2m6m23q3ZHir8JRaD5PuF6zj81K3Lerk4sCbrEc9mjFaA2Ti6ayC36fQ3tL9",
  "key1": "499JLKwnUyX6mPkxTpviTkpyXxWjT7xFHtAH7rm9tXaxUAsrLXMUnAJ33Y1hyXTiYLDF2RmATDv4G2oBJD1rdT22",
  "key2": "3wheAgLcbj16zWcQDok9QEwNuePc8ugXRp9XuVr27gQ4wuRowjMfHmed4XMhmBTDFYyTERmUU6ESnHWbmhpFGDL8",
  "key3": "5TqJ57K4A5nRM1KSsrQJB6x4bm4hztAwBWXZP9L8zVgsd6SNTJiatUH4VnT9HDJZjxY4oGsHvb7XmU1wae77nCEg",
  "key4": "4yRVPKbL2gmPyRJa5EaBzwViHC491aoB42pLWdEiVkRtgexNttDEQi766mU3PwpNr2JkvaYX1UkK3F2PHCvv9hY1",
  "key5": "23rzFoRQdiTxagmNwaXAA8h5JNzvvmBCzca7REqmrCZKvkEGjxMoeMSWPA2KqDTk7DYVqJRFByFXQW9wAsXBe16x",
  "key6": "rFSBvRyJ5xPLTkXZY36aTZmHXK7HoEHUYeXkuN4JSGt3bWhnK9ptsKBhcHTttmWtNVQj9hePUH32yYd82q6QQB4",
  "key7": "4cYrTcTUx8ZW5UN9xeNRWnG3yTsbSqePConPCNSuGp7piuykEXXFVZzCUTmrkFrEAcmxxtq4n7jGgWRm5ckZDbJ7",
  "key8": "4LTk4DJUtC9EBdkLDGefuJ9TVoTtho2VQQnfVBsoQEXrtBFzakD1QVUWEpPK6HVi5VMks7FCC4tY9U7ZfTHCCUbg",
  "key9": "5bynFbD7WSPHSfPnZge79TqEz25LuNHcCCEims1DPpnFdGLWZbdj3DUR5Y57qAdHMWigCBZPxoh1RLZnmuBcekte",
  "key10": "22FETLC1feaiEJxwjz1fs54G4MpfTmZCc7Fto66Yibf3dxWVcXJCJUAgj91E4vVUNeXkMSgaVqXMLUMCeBdLXFJe",
  "key11": "KNbtJiL434AobmZVxTfMUpDqbxi2ENBxRWHqZPd4Wu18nW2FcaoGWdhhNHTSfgipa4NRy3vve8iSSZBfr516SMW",
  "key12": "3GJyn1LpbMsqeCw6odyTJF1CG8PnQAzRwvcRuPUwxCRDk7UMzE8mA3wXRF7P6n8A4n7A2TCVT7xTSkCmLwNT7pdG",
  "key13": "2nY5SD2UsSAZkHqDvbox7kUMuEQXTWPPteWAiXx6i5JHAjLLMHEViqZ4z9AampGJdGbxWVToBK4TPN6jXV1sGw57",
  "key14": "24Kdd8Xij7mqfHUXnEwSU83gAmemyu1rSWqvw8mm1wKSLiFqRNe48cqUffzQoMskFPCsjtCdMhyrgSNGRuT6BrU2",
  "key15": "2NrHjJkqweaWTvWDM9cNi1Rw47H9UZvDfxfcpRGubZAkGJaW5RPoMsLxs3Yowcf4jzGS97zeqERjkzvUKRi8iUC4",
  "key16": "TA5Vrujgd6mssNtvxVR1e5iCFuZX6Z32iiTg6z7SuVfqh9hEoZFD3utMv4NA1rKwAi4qVWZA79VUTVEKHUhWzaa",
  "key17": "5Q5fFnvyxdwfPi1LAH1aCgB2L2QfTYprLCQp3TnNJqreu5CisTB7eJo81bD4ewg4pV7T4i3fjhzmpzajjVpNacUb",
  "key18": "5KAYCa7wsV8VtfZghgAJ537wbxJoXYUuFUcdB1EPHXQmMqKYFZzqWszxLwxi3xvzNe3HbbDGknrkvkgyvxt927T7",
  "key19": "5CoEfTJ6M7YhSjZ7twYPoFsLj6NyrW685dR4JTd6yBpGed2oZ9TuGqJigyJqA84UnVzeSTWwimxmr16YgLHkmWSV",
  "key20": "EudUhVseouJbz8sgNwtW3WkzMyEQmSi27VTczNtWbvp13XnsSkq5PNkKWHq1QfJZiFECJpMXUmmW7za9PtxqLdi",
  "key21": "23j8s2NDiAUH5k1gSVaghd2namimsShozpNBvdRZy1hqwkY5hVhHZ3sUv2Mq8zh3AmsZJ96UUbVurbrUWfR8uzG5",
  "key22": "ReM585CAQ58rne6bE3EX3xdbKWzSLfWr7LfdVytSvh787wdNxLsi1xbASa8F4WyN9nchvrJm5U8gNQCMKGmrtRs",
  "key23": "XcpdeD4JXGABLMoaRr93b7VMnhN3nLKst7o1xpA8LptsgAoFoaBkVUxd7FJ8mnNNUVXMnUQmyYL9UzQ3ohZGsvT",
  "key24": "3txD5PxFnM2P6wipB49oUF53iNhCUjh6y5XxqED6inh2acruyCWwD2Tmuc69gYwdxJqUAgtg9GAvjXFRaZSd3S7S",
  "key25": "3ZQBWwo1CoyPRJ88xsk5QLievy3bBCuBH3kgSseAL9KXh1j2T9hHCb1oGakvfWjKMTxQiiyNtmGKuQh4rAVoMTmz",
  "key26": "344mkWKNk5JijbVhoxqizXA5usfNcgQQKxyAdE2zvgKijj69Ymip8Y5e8ddzcJNy5S1fZPc8ocFrnJMwDjKfAkvn",
  "key27": "39691GzpYDezEofRxFA21znSRGgymT7Ua6QBVuRR2rXP4CwhREicCvSsYgaDkYAKTCj7pcVuWf3LxkJc6qrwns9R",
  "key28": "5kiKmUEPJ8caMi9Y7vvVbVyh2hcFUAi6rUHe2MzPLUQ4kx9JSCSpFMNSjNwdU6euSCDNFXT585NX2UEzkRyKqtfC",
  "key29": "4N8CuTJQJ3bfhSaikourL6hSnA7MjfvitEaijgpDDM47c6KfBQLXYHV5ZNo5gEKSQ8ckek3aKUa2YjGGPppzV3jF",
  "key30": "4XLZy6smJSxCsVW1CKuNzoVw4usXAi7RWnxwbsWiCchX1XaUTByf5aQQYyF78STgn22s8DbQekMjmUMy8chA5CmA",
  "key31": "5V6NscA2ix4QF9pLbhnAe7ZomTG8J87SpXncWZ4NYcKgAezx4BY2Am6myhc8JZuk4bXP4RwDAuYpMu4qTSUrT8Bc",
  "key32": "37N2Ewq2Hb11oeMhTt8cQ6q4XU9GBK9bSf3tk3fDQcQiDnDdxUZCopMf5v6X8fDxeQv4cGcmhLe8QxdrVgz11ToM",
  "key33": "3tv7vPPZjSim9hd5Cwo1NePrCm3bEcLtHiBaSbHYtgFzqpPHhSrjBnPi8XDPTd6dbygRUgBf9Nefh5iyYBsgCHwP",
  "key34": "3b8xs6TPdYdFAWrJtx84d69pPgqBeWC3vRE6cTUzWb3ygo2vs2RSpTemaXyywa2cE7HBZzmzC8otxZU5258SYWAe",
  "key35": "3ovi2KCgemNgbfi7dKdf4DL2WBjV47Y3dUGPvKW7Rvvg3QMStEZvXvkY8uQTZMp9saRq55qzdFxUdz1E5kopg7zs",
  "key36": "5hACMyEKNJMM9FmwP8pEtDXJZoNhWzfKfZc1R3aoZCbGYRapBNXpcfcztXYvmeeDaUrmBH1jxJtkaGQBEFP2uLUY"
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
