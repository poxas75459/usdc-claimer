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
    "5VShSozSrh2A7JyiLrhr1DD9MHBV74PyNUUsCrEPGcRLYiHZ4sKSJaH3kZigrVvBBYogw55UVkM8qH8Nis6YLUP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TLFS3ZFeoGvjLWf3G2Yv2SbR8r2zMN5NEdkdu4GJfrwM8isxZDVNMYNH3CyKDKaDnBACWe1R9gnFQ9bqUB5EPBE",
  "key1": "29s5jzpFC85gHDPT4Zhr6H6wRbafq7rK329VjVXnxdaa2Vd9i7SmW8bM3YzPb3kBNZXnwpmkyHwUWQj8nj3TM4Aq",
  "key2": "4vqrb25uDs5GNYXAuKerPBWw7wECz4sUV6fjrjiGzSSH1fkiETGozx68PzdHZMYbfV4iR6sJ3NH4wCfdZKL1wwrk",
  "key3": "Bc5CSqoYPge2EH45kNyfBE92vpbKEyP4tUeo87WEMwcynZPvkkbg2iLLYXQ1mycJhQFtbxvpr7GbZL8n4Xrm1QJ",
  "key4": "5U7mNMykmZYVCyzjeAsVtqkG2uu8ToHi8Xkqzt7NyVNa5UeN5CviscwtwxYLwWAKHCQLpiLDe4VSZFqmL4PnKnK5",
  "key5": "pa6xWmttBgVs1G9m2Ejk1NK1c6BT2yjAcqSXF6dp9QBRswJch45pbpUC9ugyAfP57eVNb9HM8sV64nUVMRDGRho",
  "key6": "4GerMqBuvZHMkdxKtkom2WgNxnUofPD8njx4V9Daf66qsdS2gvsYzvaZKAWNcenSPGrVJJNLznXT3R93fCcnYgxh",
  "key7": "2UkP4PTroRCirvfSuEc73kSL84aDQ56hfeKpJNqfHcVTTtLpYZXYw4on4ZKY44SkZhh1P67fKWoHnnS3mjP2fZWz",
  "key8": "4rNxNUs3PKh9jXQJatqfAv8vAccFebSXReWvJAwLYSRYmnAweCh1Y3WEgU9vSybangXVktyB1HHgCzwZLrv2TT9C",
  "key9": "dWAGyGQfLxG7Fro2ePkyo9frhJUy4PifzAC519ChXfm1Gt1asq1Y7YfvfRwCgaCewu49uHaVaVKmJf6HDfpAjdV",
  "key10": "5Go2i6eF7SPp2W9jX7yCNrnJi4qL1n8zgpBaGZ6D94yFpadg7dpfeaMXC9F1BF49hE3dTffJkxS9WxcEw7nyj6Ba",
  "key11": "5YQZuCP2Cz84C8uV9pTM9yb7bVTNzhLPHYeW1mYbdzFF6WWguBAUacA6TBM19tykjV1TqXD3AxqBfe4APj9RA31d",
  "key12": "2CDUKur2ZRZCJLHkTXK9phqtyACDfCYoeEa9W6w1JDwQp4rXZbPqEcjiWBQHBTTNJni5NPCyGLSZyYE66zCxyPhZ",
  "key13": "2FatxaFybzchadAy74XVtFWdyh2a6rXcwn4ZDNdj1nUqjw9Rmnfk7ps7NDCHbC6TnAsQNhzSqPJ1SPz7BbFGyxXQ",
  "key14": "66DmLCqSV8YSCTYWdQatRzHUULaJz3mNbyZ3KvzeS95bdXq37zKxY4SCY1fQejRfMg8qmqV7zgA3gwYegZniUp8s",
  "key15": "2agoqoezzpboiAipxvgQkTV48eWiEDQfP3m6ipAFfffvrJC4gJKsYVxLMQuTxDknaErU1k9KaoKDrU5dYmst2hZb",
  "key16": "2hUrwHTtgiQ8isCuCPBB35tZMyJYS4FDAEsPe4jVCpyKVVDGTq1szpARZcSoDnjpxRbYC3yNedkMFbw3fZMXW7uR",
  "key17": "5hEkpLLsjtahFtBdpGf1oSSEfH3o5zeoCLzwq193fV8d9sJ5bfxJGKr1xig1BtmACd1gjeg42HUpc9H1wvbrpdAF",
  "key18": "5kQKjpJXAya8kf76qmafok22PCZzuDPJFZgSB7odaw4ngn94MDEDnyXqRmaHw3FPwuVucFiXJ5etMLvNCiLogXyS",
  "key19": "TzvtbLDM6bCy85qeawbDmiBBvXSqBCkDqfVo84atZQE8H7Ht82u4VDnfT7xmSC6u9CHkVMLAH9ZFBQJhRjWDQHh",
  "key20": "3Af5gYVnroAz7ffDwiYqUs8mdKfxKJgnrwWkGZ6Np7ihVbzmTHkhhSyba7y2qWL1deL2KkKBjvVQu4jB8qaEPuMA",
  "key21": "5ynCuqYEZwSDdC1bPF4KCksNB6uD8c9ZzetsYmspa7GM5DLP8q6tLkm9ebsQhoorTXpFkBGUVfu2omz1qQn9bzGs",
  "key22": "FUmx9JFQNsPsnmRnZ5b2kzbctxED6D9fmFTLoM7mVNvhmmU3h1pnpwnWgWtx6jaVqFjW84zE5DXwLzCgEu5iVzt",
  "key23": "3uSS8ej51p1nRLCGkFdsBtb6qamzY28VAyA83dz1oMQfHGLggE1HTH9L4NboqgGnj8KDkpybNk18JyGTr3qNBtSP",
  "key24": "5gwCwJV3wY3HwXpn6DcF348hfMeMXammzMUXJ1JcXCsmkTMUz8wufWTJKNX3W3dgzE49Xp41NiVeWunXfcLU1g1n",
  "key25": "1QRVWbzgSthGxLPyZTV8AWxC3PeHybKftBQKPJGcGiBKVXy5XyM9BAYHc3WA4qZVfFmqmJLq1C7Ubdm9MXw2D5w",
  "key26": "5HzREge6FQPfAtapjPd1sESAk5Mbh1yqRvTbasLzwJSEDU3MBNQr7F3WTYBZxVN44TrBGLSf1CYkq68a82YKJsvr",
  "key27": "2rYuzerHJ5Y3mMHNS7TQiG3raTxecfa22J21s4cwHhkaoRJ1hYoMGZpBGTKisCv9ohXg3FCJ9rkhRnNgdHCBYSdH",
  "key28": "4nduj4XXv7FyKu63CZfFgbQCBCFaJGynkPXJTMmYLFNS95kfY7N4imATCN64Wy8Kuj3GVw2VTtkY4RtFyQ2HCwgD",
  "key29": "5Wme4vSwdE1Mioew3MSkdfaxvhm9yh86BDiMJETZQcyupZpeRvvojrvgqsjYdFuyKJDejaK9rEiqekXgpTMHUeqe",
  "key30": "4tX6K391zmQimZLbLVpL2J8xyZtWDM83FTfchx7gKEjHxZpBef8qVNMvpGTTx1tMiGNrTYDDvq4dRnwJU6Q5HPFv",
  "key31": "5iUxTtajUmnwxChD3jXnRFaER2bymGN9zMWLNhdP1NCFhcP3UvmwA3LFm21YvnzPFsfDnTdQtLPDQqiPaLbP7au5",
  "key32": "2a9dzdWZb8t4Lupu6D5koruFWkt66PAR4wQ65HGBJUdG6x4UvvD4wrWe7qYYUsfKMJNHwYHRpoMBKgoq3ERb2VzG",
  "key33": "4edVZTna1AsZiWJxM8SvUuysQwPaMU4pLVq8sksqJsNLebjRgfvUmGkJe8aTfRTUPEj1bAbeEcFgNYWKLS8YpomD",
  "key34": "3nQijSXBuyvCCuwvxQQuF9puvGXej4JxmspAs5w8v2BoVzXhAfNdXTQe4mgffnJ7iLLZh6fJ6tWSqpuT7bniKT4o",
  "key35": "2L6b5rBgaartmbmUATm4moY3QhwqemCF9ozDFqhUTxV1AUKfagn8zo4FuWbc8w5iuE8w6ytSDbJvN8UFKrhNJwG9",
  "key36": "h2PuN47UQGkmzby7DCKPgQT9wwiPq13MukYx8U7RRdMitN21ZSwyEq3zz7eDYq7ACVYm3AGrKYtVXNWKxdouo4X",
  "key37": "oWtcrkpMAjGPejDVB8Af2D62dW2pMmnACy7kXtFPj4aPXAjEe2UTJ6a3tEShfF2wNVzwd6ZHPhTYdZQMkL5YMPB"
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
