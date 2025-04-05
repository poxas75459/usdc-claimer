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
    "5SUeRruXeE76KEhWnTui1ZA8p4iqdTpkupsJfq5vZvTd2yAUTA9EjYefLXqR8BG3ZNfQDZHD9QFADt7UChMiAcZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mt38Z1xnaoAkdKHWv3Uy5MVRiWQKZv4zDUCtjaKbUm2xq6wGbxrMHrjxZForNWe7Ye7KR2Kro3yrLzv1HnQRaW",
  "key1": "5dBqknwU3tzRYN6rDmBd9k9MTqxvzUaYECADid4MKFGkdNMTdWLkYMK41BK1A6vbtuUgX4hqczrjhABntq3Ct4mX",
  "key2": "3gtZACHtMy2CJh19zdyKDavkqp9suZKQKD8VmV9UEQaAAEy118RyVm5Ci82d5yGfeirNSPXY2yrnUUn72RKmvEJv",
  "key3": "3Niumkojur2FbZWAgNDmWU8iGh9g2Pi72Q5cQYi2DaFTBfWeVFc2JPBeMghPwy9H1AF5wLh1cNePgrwHMoZ63xcU",
  "key4": "3uzPjFm2CM4axc3EaxkWoSD5qwzEeKK4F2hB2yPbSNaPRbVAQx811ecESfT3ro7BuoBWR8Eh8pU3KhyECyfoyVN6",
  "key5": "2MGS8qHq8XjePLeHKmYjhvLUBkt4NeBrCN2Mspxgf3bY8upx8oSatmS4EiKtqN8MqYjf9B5XUGYwaS115h4wJD25",
  "key6": "23yK18Bcd23dTRVZDH6Xws4fNXr3zRvxb1tvjfZ1YqLchCWYSticv6rtVqyQM5W4d1KuRPuktuqwtReRa2pDnWkE",
  "key7": "4FnU6HQJCtNSDohNZqbJeoae5nf9VLErdd5rFtVjFvCnnNN72DWzeKg6rwr796kZBGzob8vDXje6jdVCnPUqK3y5",
  "key8": "4YAY8a3BPR99iMLqgXSe4t4M6MLVRSYGTMTbKF25mEzttEUZZCRuYKQ8cLjHKFFYxwUGNgvXWfi9qH4AnEWUWMcv",
  "key9": "4RvjKjqvaTMyHRWQBv4X7RoQ8vLD4Bq9xXaZMwCgiu2YRLHKyNZnWGN2y7dTXd5pBotwUFktxfpbqeK2kehkk8Zs",
  "key10": "5dzJYMAxphVhXr99bWQgPzyMWGzYqADDszUnufUVqBJCe6XaREvjUfqpiARwJww1fGUFNF8gcuW6ggBvWfvL8exd",
  "key11": "5bUVFeJoCzAcqwUi4kBpsov4aSfBbbvJA4MZkZ2YWYyVAJs8FRmgeGWLoDGeZKnUeq3ze2JMkgj4XNAA7QYzA5dF",
  "key12": "3TwvYX6rFGaWx4qAHMaW8jAx67mKzk5xvjMkCLNF5pkCbAsNdtXk2tDETphuom45CpFcbnKCPQzA6xnZ43Jub6sJ",
  "key13": "jixRRuwyG2gfe22CK4USHYfrYdowYwq1Zzm1QsCSc4ZPKS15aifnmDwPe4LbYQ1TEwzJxWEjPUhrkB93D9THWLg",
  "key14": "csH6kWzf6iCaDULsaixv3s7X9CVKK3PH9EQBSdbwnSiztJSGiGiKtDFUpxE1FUCeNpZw7b2gqQm9QFa8Ev5EgPv",
  "key15": "2CXjmMXPejP335ZgGaF2MA6HSbMfjWZdrExsFDhR6Rgxz3b37rLPXCcyjD5Ktfr8rrJkeo733nNn91RNV9nyCjzo",
  "key16": "62sFGuY2xFs8eH67sCrE4ZdELHp6FpW2NYhF1KzEZcuuHBBhYhKzUgRaZGpZjPqm5bSpTW63NfJzTKLGSYRShGit",
  "key17": "9UjbkHRRBf8doz1b2srMgW4mWpVsJNKP4PSeGJpTFtrtnZyy2u4wxTofXTPrmaPcqiK6eiKNnX85NwAvbp4jPur",
  "key18": "4GzzDXXQTSPKa3ARVtf1yKZKScQ2wpMqax7F9RVWiLgBQpfD45xdZVn4aRzg5Q3TH8rycG2DZ5139Dai6QpJY3Zs",
  "key19": "AYoNTNdzg5yBJ3cbaNrWU9xYdKAePyxBw97tSW6HM19XHqrNmTpFZaqnWTrFZzzHZEHDuued1oT7RBpArPhA8Ye",
  "key20": "5UfTudwubNHnJ3NvsZ2mXSxay79J5NgrVVxaeZoNtN2SPqu6dsRf5JrrcSzkatmufZoaZyHTqCDAmv9urz3Bk77F",
  "key21": "23t5xYV5ULswePVGPWiwbsYj8WE9bpAoXBQ4b7mPzbCVxhmhgrnsN86tn5S25g5A1AWa1SMhteE9VamQaGrxmhTt",
  "key22": "4byL28iuhhAnf6Up861Bdf7q5Ezb9fBjUbg2iE8ntein9hTrhy9i7eEngDPT8dEqRDteopw3YiuaRet9pq6LzkiT",
  "key23": "5x453cbUZFjz5iAF3Jt2A385bczcejNLZuXewzuJphovj772DcA2KYkjx6TevnJtHiWiSjxpZjno42dL8zW312K8",
  "key24": "5rxaWRqdXEt1WT49vTSgVrXyAyowWDAVYcsCKufnSDHm4hvYxvFJEeHBppgDoz4uozCk7rHUNCGFBEPn8fqEcJt8",
  "key25": "a2TRMJac7RAmdTM4qPPpQKwkURWABh8GaxYNyEU4qXCE4w9q6FtxpXhniTxb25kwoneekSFr3Zw4zULyEEWKpTb",
  "key26": "3igTaQxeW7gZvVpX3prLEKSAtZZXYFVNPMXXk2TkrtGRaTgNKTAE7miW7FS1sStbVNeT6tT6if56bmsNoYqHc7yg",
  "key27": "5RcwtiyMDDxjdQqeZoWkQUaGiQyG3t1KHodMxCJehtYFSzhCWmbPcdpuyLKmEbk8qZBxMDPnAiKjZiiGBx8U4Txk",
  "key28": "4vdLJvjsSw6MevpPUAD7xBtXrx3Z6LTbRYfzKrCEmsiSnVB7DeQH1ts6xzDG6zovNFVVeQRfL6Z9bDppQnz29tdP",
  "key29": "YaPYFdjQydEgJqQqSaHbnVDUao9Jx27YwZektzip36fuJX6MmTcW8MK37x8Ly3EFPKiWVZ41RJTh51tajwSYVcK"
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
