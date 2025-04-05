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
    "3XiHtMgQn6Uk2KBchX2nBXHbH9TsDDSsnjg8wBGWc78M4oQ6X9ZB3uQLuYS5CKcUGW9NMzH23vB6ydBpWCSxXGM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNWkuJq7gkgiWRvNQkwmyZJJRJkk4zogeUCCPvosTRLzqgFas3yRFmXezUyED7t4CqvFoSXir9iJy7WMGe6x7qx",
  "key1": "5v4BMnVpk5XgsA1xVHw36bDBKNbDpuqmYnCscnMHTcvgU7moxFN9rpiCNGeJJdRjXnxp1mVMABBiG2o4VSu12tEv",
  "key2": "4E7n5e4RyPx1M4cWPFMUK5k21ueG841QMVwtyaucCUDrvcf5PFr2z2w3ofHEpoUtPQH3mhoEPyNag4e7xZWT3zeU",
  "key3": "5uomaTms7ANxCFneCHsfwNkNPdRjG1hRWw6RRtcrJhNzUP3byrxWbJKje7CrtGUuXLqWGbZRed7tz2uWCiSMWnRP",
  "key4": "62L11xATREE7zuJC3bbeC9nBai924XMirnHfhioUMuAPepBHJbTuT6P8zgQ7FbRcnjyNL56LujKk5dARVd86K3Dt",
  "key5": "UhgzeACgx2BYfufadhoiNrmQrKyqNmhp6yb3SmaSTu3tBqY1fqq4hpb1EwVqXSZzJ8Qn34UJS3UQWd1s3EuXyfq",
  "key6": "5yts6udcHqVTrcpKEkWejLLfjQ1uXyvSDBTCRWkmFRigfusHuM3asVuQxPZSfwCvyr4Mn3BBEtUKXzTqHZGyXWiU",
  "key7": "5EQdJRWrFdxd9NyrWa1tTWsgQsdQaGS8HNsRSk41dc6Fka6Ve13w5QK2cR7dM2FpupVuQDR8C5UXDg59iaL4B9bC",
  "key8": "5fm7DYB8jwkPuRXDzvXMgSJVd77rPMWGLHMkPPM6A2CQfWdTUnY1qoXwjXa33L6XxfGRCyoi8hkCZTBCKUjBngf6",
  "key9": "493KR2oehx7hBVdPK2gTqg3YQDWpiuDHmebVztBz7yqhq6Wp1oyqd86DFT26LHja1PRCc8xQAfXDXZAtgzPtH2gK",
  "key10": "4DDKFKgPYttGVA1sZdX59qDK4NeKcMUBQXWa864xACWCUUmrB4Dc8SFauujv8kw3pNDfyBPVZL6ZQPEJPaEfFhfV",
  "key11": "3rk8GWjnYK3pdK6uAiyHECX9Rz2EpafKGPReDxhnhdyUv5TJGjD533sUAWmiVAXk75vPkkcQjUWgNdkL1z5DE6Pb",
  "key12": "3MbkNgcGDWvXbCk8XKFSfMa7GzbN4Q5XGvE7APVJmv1iX9GiufGHsB3UNKKSG5yL6tQnsenpi16UfjzTR6YN7Brq",
  "key13": "53FJywBFxAgVPLVbN4siRuGQnVHaDSTZrt52N4Tn2wsLB1zqaoaj6HebB2W6NaRrsrdJ1WfvCeMUL3cR9QWvMFEP",
  "key14": "4KYPNtRbsd48gKyMmyM1ndMv96nEHd3mHs7Fmft2oC2Sf4XvppMAEKSHW7x6QNBTReZ7LCDhfBiFLx8ZUVcFmq1s",
  "key15": "2UAnXg3LuUDVPmA24NvnTcZac7zJXMxRPnjpBfC9BHNs3yRi27ffsoVNaiftTrcYRSkn5n5ZbQyvPd1t6yGxYUvc",
  "key16": "24LEeLrpcQnqL9yvUQYxMKTWDbgFox8Zj5jSSkNmFpi55atJagBheMY5cEh36W8gfxEV6Ktpo87cX1wvcWtvn5Nn",
  "key17": "3KRpYR4conYnZPdYEAfNKoHVNBJsmBgBZt6TwJpLubKTuRsT8esQGdfMWMjb2WR5L8CVnjhRE6tr2oofA4VTqAuK",
  "key18": "5qhof2T8bUAdxS4XcPKWp5hhu44rv1XeFiMBPmFhjaahozxnuKP9AoCv6AK32U5rA8NSyr8BK56URPMqdDcJpiYM",
  "key19": "59UobNACCGAxo9F98JaVVRFgyJCNQ84z8yMfqRWtQQ3dSJnhfwmGMPTPVBqSY7ZnbN9EpkfMoFfzK6zokjZuN1YG",
  "key20": "4rexnHFQEdRccDiJMb7zoiuPBUtLEW9R8BxNN1LGy3C3FGy43QAs13PnjpHqdE7XL8ZLqeCD9caJM8trYjy4GMov",
  "key21": "4pkA2pd3L2k5E8p1gHSzj6GkwYnpPB7RqSJz9mSbQnxK6BWHFyZWs9E2SUHjxAGzAab6NuAR4G7KXVp2E8yQGd4w",
  "key22": "4mUF7Kvb1EEgdmNgTZuzNGNENC6Ec6WcaQxa726mYsbj8CxnJzZiWpiAGrCgEEQ3GDPJVJJXw3XmTPTVSAhLdU3P",
  "key23": "4dtpasQzkNZ7d6VynwMpA149w99NvjHjB1ZbaYtSRsoNZp4iW2zVAEyvvCgprzmmyYqNqvw53ASrSsTUoPcgSBSb",
  "key24": "5xzq2jdpeXAFCVMVbpA1vj9538KSQ5GJBJA8zui2wF2yPTmKNXXUDWcZeyD3MNdJr7spEUQV4uWHwtq56GxNDsiN",
  "key25": "bM35cwM7sJjNHjfFZJyyTomM96m2f49NTpcm3mdvMrR7LDx8eLnsWPTeqNPTCTspTSgV2qdfRdfDT8PDSLW8QNC",
  "key26": "Ne9i9uP6D2xibtXfWZQrx4ukbPooBK9owG8kr2kMjnVnpDAY34bqZhvZEzNMFrWBDKaxwVLMDrVHhd76nRNcwqd",
  "key27": "2nhJnzv491cQvcMgRyK9yr4eoXbKovKcQqCjgiQLKoUEsMe3v1TZJ3H7Sp1jahv4PkHhg7A2Zz9wZgJeJcGDEgXU",
  "key28": "5w8JBPw2tKa7Cj2pFFAveiqfEEYMtcmySvWZuBmm2kz4RsV7mocTo9CyWFcQBqRU7wi5dXQh2aGvs6ftSC8GRybq",
  "key29": "2XpRuYuC5wS9YDrVVzNDP1m7VfqxycBT6yWUreep917DvmiLXTV9JwVFjjNC8y5X33EKqvhB2fEc1XykZeTuuvB2",
  "key30": "hycWozJeBUJopGpBuTM3Rap7mcCpcbeDDk7FrxPQ6N1prYyS9e8L3dzdgxhGnxWiDL1NDpjg49scfEHytNg66nt",
  "key31": "5vSq6rirocuqkYYx6WNhWd6gnFdCg1oLrtfJZSFbRFQK5qYNvFwzZdqMtbRJ89G3MtNL9oaeFnGfr3a89XBvr8U7",
  "key32": "3huG93DJPwrtNaJzHRHgYXmSmkWk1XNkS3tW1kt4gJzCbXQoznHfKby826GHoJsYDdGajL2X3wLVAAT7hGfSfHv7",
  "key33": "2QgPB6ix7Qzh5WAEKe2y9EApFWtoGGKFSMXrmxkSchGHEMUX4Qa1kgmjoxScyw5LYsrbNygxdkEhebFcheBPHhQf",
  "key34": "3E9AoDWjFGNULmkMnkeyXZNcup5CF7AFpSvsfJKsXFVZUhZFxSyLB7nkXEp5RBsADfVSTi2zx7YMigz1ReG3jjhc",
  "key35": "3z8V2qiwjPVyTTzaiYVjN9gjxVV6j7vWBt89qknzStMdCxHZzERjdcufHQ7ZKgoDGBQyFkFTGp7Ruj9sqzxgFjdw",
  "key36": "2wYWBrhvpfXd9XDN5L6BTvzEZad9GXNQFz37uvBwFWmdLR12vmoCbc6AMZepRfugn2gURc5ZyzwXpnrQsYYzLjwg",
  "key37": "29amdfgVzqFQAfiaxFRKUkucaQjxjKpH8cCMGgEa8dMRQ9gNFpouVaSqSYfuYp6ERXpUwjFQsPyKtCnqgthM9RLA",
  "key38": "5itFnxcPis9gs1GwYxKYiKZkB1JdVt6rdseS6tRLj3q7G6tsMFD9ZGHf61kRr66rjunAWGmyYSxXtwLeNK7EdQbC",
  "key39": "2eBuTpAwjWheEj4xaZZ4Rv2gysecZSsFd4d4RDynnkBeQQK31PJ5RhUdUBhiV3Cqcw1TUPZJWkGGzyds339iXXT6",
  "key40": "2KfXrmWJJRPgutoaytVDNKZzYnv1N8gjdjJBvdhso7txC6cNRA6PdwqTzsERnY8XFsDjcWsV2MtPPkuyZWEbZjrv"
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
