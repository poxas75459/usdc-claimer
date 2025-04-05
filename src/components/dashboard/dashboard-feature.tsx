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
    "4CWFwCrg7KYH6YrxCyuo6NrJA3PPf6DGAYjd1XDxZFBDBddxMYTzQKhG22yjB8i6wzXavMzJJ2U2qnxr6LMoYyMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bw6wgotvBgLGc7RHcwfMBBE4UWCzo1KpCkZ8fTbMaCbLTmpvsASBT59zpSSEueowg9tMgNmJBZpbdR1hACJ5VHx",
  "key1": "4ibtB4LMfWrs46P3wcfP72WQfLYFU69rQzg8UcKNJJfTfv5vjAUYgpbUsJittoRsGerXmprRSkDptbkfiHbAHXbK",
  "key2": "4kXcXueH6qYL4u2tvSF8FJh8txrpCp66vLfR7gHWJ8zdR5Mhi9Nss9PidWSprmwd3chUNDihogDXb2FywTjY6fvb",
  "key3": "427ecNduh5tKgTGaEYfHesScx7obCZ2udcWbPZdmoeB7KUw7scSg9SWMrxcfrHKxvqaZSRt2LZoMKqoYRJDqobXW",
  "key4": "3unkUSRWTwocKHnqCkCT3UiU3UN858uc47RXZkwRaYXBrNvKN3gCcxC6snrJwSmBH2LDiFi8GCYiSa2aSDAx7UAp",
  "key5": "5u31rzmWy4YEeqUf9mjFG1BBX1fBBQ3UP163Kq8de73bSG1XodF2ErrRRVy87GRkHAv491857EkZxwCuQKjAbuoY",
  "key6": "2TPownWAFzdBENZBspuaAxao3yCrHSLVsVMhQPf5S28hqijcNZwqpkELGv6R5HgpShUZC4kcnPe2T3iZs3qVohSa",
  "key7": "L87wpiZEEtLkNeNaZUXApiw7EhSrMuXRn1ETyB3dUQYwREidHNgSuuqEAhKrVx2hPfSRcEqZ9PnftBQ9eak5agM",
  "key8": "2g1EE529oXBPe2oHXF2RdrzVVBLVkENAiUuMR6eTei7Rj4Yx8njgxUin586uSxhyJofPMcAJaecwckRPDTJoMMUh",
  "key9": "5uTWrvUptwNv8Zurp4kmEhnK5SMxEEfnb2C3RcTE8Qvk36ghaSADbSvrhdmggJiuCxwKoUXRu2Z9QkMqGTYw8uAm",
  "key10": "3VPjbmAV7wHXmy1fs749aPBGjBSHVYgJ49Li3npUDvg26bxY13AWGwBywKxEDzc4VufbTLuJ62Mc1gzSy53EJtFx",
  "key11": "p6q2YExcQSaj53pToiMzzaqUmJhMsiRapJ68qZyGjaQng4e6ww16ceYatAXpS1fKUQR4fPhGzuSyndbB8zUGWUt",
  "key12": "51aG5FUxQo5UUGeTja3JxK3NWyPFY42SsEjjwhMVu7kKZYfKYcUbvxohb8H18UzDT2bzSfvi4zzBciiApZAFWVAn",
  "key13": "67DDixwvPDTKXPxWkcqXtQwj48s5gFF3wsDyXxnhX85DcKSKXRardkVnHHhSqCeRTFC3eTYxWeBBUqzGj5zVQLro",
  "key14": "5Q5kdQJXuKVkCRd88wJYxYrgq5iGzXk8fy3dHecp7aDZtqsM8yBipkyELyb61iEm4ZrjLVoiEEM8qi4V9PzoCMNb",
  "key15": "VMSjBxS2cMq8sKxQEVcU9LkuUrcLhyrRfoAHfsYkV3SVvu3cwicAHsUAVzqHd3JHWAnMdEK2YmhMEtjaEan9NGX",
  "key16": "5v27uNW7JeDYBfhAsg8bvPWpfivL9Aaqs4xuxspUSZxjNNbm5QmcExEhFcsPzjauZPrdXdb1fgf7Ha2J4zHazPs",
  "key17": "2chU1TWGN4wGYszWRwxQDrD8ZkUCTS2FmvqavdWWGJMGcaSuLruYtgt5ndtpdK14hkoa8bHQ2qzvspgmJUfqJran",
  "key18": "4mZisDCXoXksAP7aYSqDQHePVeCapVmoK3viZjPGN5a9uAm5pdGV15HUH8a7jzMpNypArC5xYEBRYoUpkRqpZo1T",
  "key19": "3t1ebNEomSQQErZ3m2A4kjPxjnusiU5TJJbopwLixGXKEVkNsqximNkGmzsarhmiFmfFMCcp9JJAzdj3JPvYuSrE",
  "key20": "4yWJ5bwAgwWQ4PJ876kp5cYPM39z1rgs8CT46ooCRTuRCjs7fctK2pBrPjJ4ntFH6QLhdJbQAVUfWvUbPfesuzVo",
  "key21": "4otSJ9ePKktseG4j18vv9QbPwSR7xm4Ntqt956qwoMXzA5hLZw6HDQACjq5sGNWb6pgfMZxcoHTPrG1Tr39veDfy",
  "key22": "UstyMQohAf3EeaMKSDbzKyG5RFEnxpX2sgGmP8VwMtW2HSiPpurRSCD2M8s79CcfVT4V44yXZS5RSHbGrJgjfW1",
  "key23": "47JQfsbxQZ6v4cBQq3iPMMrAYNZfdZGEr5ChCqA3jayELi6WaxhKGEa1Lx79BdnsrEbzVTWshrmiiQxtzuoLETbf",
  "key24": "rHHYxB1PKAd2gNaw8EcT9ehvahjrN84zNoFpfkBPZ2U4AdHWxMxQjPNdrqG4ETszguuu4epkqHvrt3W5CFamkK5",
  "key25": "3GsKgZcAd5XHpP1cmP6WBYJjz4okMUKhUB7LGpFRsSRwob91ENaKsfDDra2SLNKxN5T7pJz2QNjzmMDHc4JS2Zw",
  "key26": "yXN5M2KZtuZG7m1ciWwwZNJAgDNB4AW2cYWD1kc2dutVVJFi7GEnoPLPk8MMNgNZ4fHkC6upDDMr7T1gukhtiD1",
  "key27": "2yQHzaPeS7RxwhxiWxkSTjhgjytR58tqrKz8iEb1eukf6524hde3NxubpsBRMxQqEtVUfsf12GLL7r8wBs3MXLWY",
  "key28": "4E9KMrBPdzD4s5ZAUQ5mpx5471TKwn2pGujqJBRALHbDoRY4yzxEDxadNQyzzgbe985N1roRnL3fxwYvPqr2T3wy",
  "key29": "56YXuUHNYxontQQHyGXZrDdiy74QshTiK4BKxvGps8jmwgK2ydZ7cTECsLmYsPNdtCaypPrdXXwXTiqbsBsbBmUK",
  "key30": "3aZ5R1V2oU7pCpWfmsyf1jpAwkLqXWszmZN61KXd6Jfbp2oBmo7MCnLKioc5kLvVYu9ceYxZVvhqQcpFCZpSCB2g",
  "key31": "DajqYcEHLEaEtSfFfFq4SeDc7wiogYNFwwd7r3QNZ5upZt51nPpeZmeButwoQbevjyUcRrCcytDmQ4uCLfo4iNJ",
  "key32": "5BJVMg37DVfHEk1qKAiXgMFt26tfQgabymhoJqYhTmts7qnJSX63drAtWQPYyvMp45PL7mBHJ2M3tfj9w8gQShdD",
  "key33": "i2GXb5qR3HDLCfMFSJ4cBtbjVYKJqbWTPwMetHRSNTkWM83USbzKQwk1Do55xL6nkp1Zq4F6KimvA9HhPeucCu5",
  "key34": "5dy5RzPzk6Bx8j8tPJw1tHEYKmq5CY9hvpSW8oVxKxsRgscEupe4pc5ESafVNYq2rHi7KeHxYJGixWCwVffhbKS",
  "key35": "2Dckq8hS2F7A8rPJ2DcP4z6cJZxFqavuksyPn1sggjjzcWFy3SUGgBHrjCKx77QfQPyDoMGechxNQ6v4P9RrMyNY",
  "key36": "5wno4X23fMzqVCc14gvxoNQX3fznsVC7r4CwgWkeWC6fsxj1TcjsuHFaQfKBJZCa5sqDxTzDChMM4Evzfyugjt4z",
  "key37": "5SWHcGScexVTBc1L66pHNjRJjad6dSb9yMB3pcp7FPyc7KN92cgeLz4euQ3CrEE6xX7f1N4D95cPYx62CA7dyFhg",
  "key38": "28inv7yxhSfZwFRgazGNc97fQkJjUQD8TEHNGA2WWCpdhkLwoaa97an2D9nrdDas9B32BKf98nHLBCmyGRpqhcSC",
  "key39": "MixhNkNxTKu4xmWAz9UVUaPAprGuYKv1defUHR5d8zWxL77s2eqZQQvrjqpDJX5sUWP21npixT8fkybNiKuwMgb",
  "key40": "5TWPoLq141FHRiFsKDWsAHNp1N5xqbXrwke3BfEiH2wjM6WSDCboEuPfUQ4cs45RBU7L1T67ksNRsnTpFmCxeF8G"
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
